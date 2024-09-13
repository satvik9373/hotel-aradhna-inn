/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(ie, e) {
    "use strict";
    var oe = [],
        r = Object.getPrototypeOf,
        ae = oe.slice,
        g = oe.flat ? function(e) {
            return oe.flat.call(e)
        } : function(e) {
            return oe.concat.apply([], e)
        },
        s = oe.push,
        se = oe.indexOf,
        n = {},
        i = n.toString,
        ue = n.hasOwnProperty,
        o = ue.toString,
        a = o.call(Object),
        le = {},
        v = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        y = function(e) {
            return null != e && e === e.window
        },
        C = ie.document,
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in u)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }
    var t = "3.7.1",
        l = /HTML$/i,
        ce = function(e, t) {
            return new ce.fn.init(e, t)
        };

    function c(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ce.each(this, e)
        },
        map: function(n) {
            return this.pushStack(ce.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: oe.sort,
        splice: oe.splice
    }, ce.extend = ce.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, ce.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (c(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        text: function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                while (t = e[r++]) n += ce.text(t);
            return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !l.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (c(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: le
    }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = oe.pop,
        de = oe.sort,
        he = oe.splice,
        ge = "[\\x20\\t\\r\\n\\f]",
        ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
    ce.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    };
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function p(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    ce.escapeSelector = function(e) {
        return (e + "").replace(f, p)
    };
    var ye = C,
        me = s;
    ! function() {
        var e, b, w, o, a, T, r, C, d, i, k = me,
            S = ce.expando,
            E = 0,
            n = 0,
            s = W(),
            c = W(),
            u = W(),
            h = W(),
            l = function(e, t) {
                return e === t && (a = !0), 0
            },
            f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
            g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
            v = new RegExp(ge + "+", "g"),
            y = new RegExp("^" + ge + "*," + ge + "*"),
            m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
            x = new RegExp(ge + "|>"),
            j = new RegExp(g),
            A = new RegExp("^" + t + "$"),
            D = {
                ID: new RegExp("^#(" + t + ")"),
                CLASS: new RegExp("^\\.(" + t + ")"),
                TAG: new RegExp("^(" + t + "|[*])"),
                ATTR: new RegExp("^" + p),
                PSEUDO: new RegExp("^" + g),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + f + ")$", "i"),
                needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
            },
            N = /^(?:input|select|textarea|button)$/i,
            q = /^h\d$/i,
            L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            H = /[+~]/,
            O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
            P = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            M = function() {
                V()
            },
            R = J(function(e) {
                return !0 === e.disabled && fe(e, "fieldset")
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType
        } catch (e) {
            k = {
                apply: function(e, t) {
                    me.apply(e, ae.call(t))
                },
                call: function(e) {
                    me.apply(e, ae.call(arguments, 1))
                }
            }
        }

        function I(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (V(e), e = e || T, C)) {
                if (11 !== p && (u = L.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return k.call(n, a), n
                        } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n
                    } else {
                        if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n
                    }
                if (!(h[t + " "] || d && d.test(t))) {
                    if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
                        (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return k.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        h(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r)
        }

        function W() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function F(e) {
            return e[S] = !0, e
        }

        function $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function B(t) {
            return function(e) {
                return fe(e, "input") && e.type === t
            }
        }

        function _(t) {
            return function(e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t
            }
        }

        function z(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function X(a) {
            return F(function(o) {
                return o = +o, F(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function U(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function V(e) {
            var t, n = e ? e.ownerDocument || e : ye;
            return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function(e) {
                return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length
            }), le.disconnectedMatch = $(function(e) {
                return i.call(e, "*")
            }), le.scope = $(function() {
                return T.querySelectorAll(":scope")
            }), le.cssHas = $(function() {
                try {
                    return T.querySelector(":has(*,:jqfake)"), !1
                } catch (e) {
                    return !0
                }
            }), le.getById ? (b.filter.ID = function(e) {
                var t = e.replace(O, P);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function(e) {
                var n = e.replace(O, P);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }, b.find.CLASS = function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
            }, d = [], $(function(e) {
                var t;
                r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
            }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function(e, t) {
                if (e === t) return a = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
            }), T
        }
        for (e in I.matches = function(e, t) {
                return I(e, null, null, t)
            }, I.matchesSelector = function(e, t) {
                if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
                    var n = i.call(e, t);
                    if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    h(t, !0)
                }
                return 0 < I(t, T, null, [e]).length
            }, I.contains = function(e, t) {
                return (e.ownerDocument || e) != T && V(e), ce.contains(e, t)
            }, I.attr = function(e, t) {
                (e.ownerDocument || e) != T && V(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== r ? r : e.getAttribute(t)
            }, I.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ce.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) he.call(e, n[r], 1)
                }
                return o = null, e
            }, ce.fn.uniqueSort = function() {
                return this.pushStack(ce.uniqueSort(ae.apply(this)))
            }, (b = ce.expr = {
                cacheLength: 50,
                createPseudo: F,
                match: D,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(O, P).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return fe(e, t)
                        }
                    },
                    CLASS: function(e) {
                        var t = s[e + " "];
                        return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = I.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(d, e, t, h, g) {
                        var v = "nth" !== d.slice(0, 3),
                            y = "last" !== d.slice(-4),
                            m = "of-type" === e;
                        return 1 === h && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                c = m && e.nodeName.toLowerCase(),
                                f = !n && !m,
                                p = !1;
                            if (l) {
                                if (v) {
                                    while (u) {
                                        o = e;
                                        while (o = o[u])
                                            if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                                        s = u = "only" === d && !s && "nextSibling"
                                    }
                                    return !0
                                }
                                if (s = [y ? l.firstChild : l.lastChild], y && f) {
                                    p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if (1 === o.nodeType && ++p && o === e) {
                                            i[d] = [E, a, p];
                                            break
                                        }
                                } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p)
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
                                return (p -= g) === h || p % h == 0 && 0 <= p / h
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: F(function(e) {
                        var r = [],
                            i = [],
                            s = ne(e.replace(ve, "$1"));
                        return s[S] ? F(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: F(function(t) {
                        return function(e) {
                            return 0 < I(t, e).length
                        }
                    }),
                    contains: F(function(t) {
                        return t = t.replace(O, P),
                            function(e) {
                                return -1 < (e.textContent || ce.text(e)).indexOf(t)
                            }
                    }),
                    lang: F(function(n) {
                        return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = ie.location && ie.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === r
                    },
                    focus: function(e) {
                        return e === function() {
                            try {
                                return T.activeElement
                            } catch (e) {}
                        }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: z(!1),
                    disabled: z(!0),
                    checked: function(e) {
                        return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return q.test(e.nodeName)
                    },
                    input: function(e) {
                        return N.test(e.nodeName)
                    },
                    button: function(e) {
                        return fe(e, "input") && "button" === e.type || fe(e, "button")
                    },
                    text: function(e) {
                        var t;
                        return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: X(function() {
                        return [0]
                    }),
                    last: X(function(e, t) {
                        return [t - 1]
                    }),
                    eq: X(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: X(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: X(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: X(function(e, t, n) {
                        var r;
                        for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: X(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = B(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = _(e);

        function G() {}

        function Y(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(ve, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
        }

        function Q(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function J(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = n++;
            return e.first ? function(e, t, n) {
                while (e = e[s])
                    if (1 === e.nodeType || c) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o = [E, f];
                if (n) {
                    while (e = e[s])
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    while (e = e[s])
                        if (1 === e.nodeType || c)
                            if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;
                            else {
                                if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
                                if ((i[l] = o)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function K(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Z(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function ee(d, h, g, v, y, e) {
            return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function(e, t, n, r) {
                var i, o, a, s, u = [],
                    l = [],
                    c = t.length,
                    f = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    p = !d || !e && h ? f : Z(f, u, d, n, r);
                if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
                    i = Z(s, l), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = s.length;
                            while (o--)(a = s[o]) && i.push(p[o] = a);
                            y(null, s = [], i, r)
                        }
                        o = s.length;
                        while (o--)(a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s)
            })
        }

        function te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function(e) {
                    return e === i
                }, a, !0), l = J(function(e) {
                    return -1 < se.call(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [J(K(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
                    }
                    c.push(t)
                }
            return K(c)
        }

        function ne(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = u[e + " "];
            if (!a) {
                t || (t = Y(e)), n = t.length;
                while (n--)(a = te(t[n]))[S] ? i.push(a) : o.push(a);
                (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = E += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == T || (V(o), n = !C);
                            while (s = v[a++])
                                if (s(o, t || T, n)) {
                                    k.call(r, o);
                                    break
                                }
                            i && (E = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                            f = Z(f)
                        }
                        k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
                    }
                    return i && (E = h, w = p), c
                }, m ? F(r) : r))).selector = e
            }
            return a
        }

        function re(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && Y(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = D.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n
        }
        G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort
    }();
    var d = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && ce(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        h = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        b = ce.expr.match.needsContext,
        w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function T(e, n, r) {
        return v(n) ? ce.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? ce.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? ce.grep(e, function(e) {
            return -1 < se.call(n, e) !== r
        }) : ce.filter(n, e, r)
    }
    ce.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ce.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (ce.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
            return 1 < r ? ce.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || k, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t))
                    for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this)
    }).prototype = ce.fn, k = ce(C);
    var E = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    ce.fn.extend({
        has: function(e) {
            var t = ce(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ce.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && ce(e);
            if (!b.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ce.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return h((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return h(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes))
        }
    }, function(r, i) {
        ce.fn[r] = function(e, t) {
            var n = ce.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function L(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    ce.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }), n) : ce.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        ce.each(e, function(e, t) {
                            v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return ce.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < ce.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, ce.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
                    ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return ce.Deferred(function(r) {
                            ce.each(o, function(e, t) {
                                var n = v(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t))
                            }
                        }
                        return ce.Deferred(function(e) {
                            o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ce.extend(e, a) : a
                    }
                },
                s = {};
            return ce.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = ae.call(arguments),
                o = ce.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
            while (t--) L(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function(e, t) {
        ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, ce.readyException = function(e) {
        ie.setTimeout(function() {
            throw e
        })
    };
    var O = ce.Deferred();

    function P() {
        C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready()
    }
    ce.fn.ready = function(e) {
        return O.then(e)["catch"](function(e) {
            ce.readyException(e)
        }), this
    }, ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
        }
    }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
    var M = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n))
                for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ce(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        R = /^-ms-/,
        I = /-([a-z])/g;

    function W(e, t) {
        return t.toUpperCase()
    }

    function F(e) {
        return e.replace(R, "ms-").replace(I, W)
    }
    var $ = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function B() {
        this.expando = ce.expando + B.uid++
    }
    B.uid = 1, B.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[F(t)] = n;
            else
                for (r in t) i[F(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var _ = new B,
        z = new B,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        U = /[A-Z]/g;

    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                z.set(e, t, n)
            } else n = void 0;
        return n
    }
    ce.extend({
        hasData: function(e) {
            return z.hasData(e) || _.hasData(e)
        },
        data: function(e, t, n) {
            return z.access(e, t, n)
        },
        removeData: function(e, t) {
            z.remove(e, t)
        },
        _data: function(e, t, n) {
            return _.access(e, t, n)
        },
        _removeData: function(e, t) {
            _.remove(e, t)
        }
    }), ce.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
                    _.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                z.set(this, n)
            }) : M(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                this.each(function() {
                    z.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                z.remove(this, e)
            })
        }
    }), ce.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ce.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ce._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                ce.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return _.get(e, n) || _.access(e, n, {
                empty: ce.Callbacks("once memory").add(function() {
                    _.remove(e, [t + "queue", n])
                })
            })
        }
    }), ce.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ce.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ce.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
        Q = ["Top", "Right", "Bottom", "Left"],
        J = C.documentElement,
        K = function(e) {
            return ce.contains(e.ownerDocument, e)
        },
        Z = {
            composed: !0
        };
    J.getRootNode && (K = function(e) {
        return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    });
    var ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
    };

    function te(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return ce.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, ce.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ne = {};

    function re(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    ce.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? ce(this).show() : ce(this).hide()
            })
        }
    });
    var xe, be, we = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i;
    xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
    var ke = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function Se(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
    }

    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
    }
    ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
    var je = /<|&#?\w+;/;

    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
                else if (je.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            ce.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < ce.inArray(o, r)) i && i.push(o);
            else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
            c = 0;
            while (o = a[c++]) Ce.test(o.type || "") && n.push(o)
        }
        return f
    }
    var De = /^([^.]*)(?:\.(.+)|)/;

    function Ne() {
        return !0
    }

    function qe() {
        return !1
    }

    function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return ce().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ce.guid++)), e.each(function() {
            ce.event.add(this, t, i, r, n)
        })
    }

    function He(e, r, t) {
        t ? (_.set(e, r, !1), ce.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n = _.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)(ce.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
                } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne)
            }
        })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
    }
    ce.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
            if ($(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(D) || [""]).length;
                while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ce.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(D) || [""]).length;
                while (l--)
                    if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = ce.event.fix(e),
                l = (_.get(this, "events") || Object.create(null))[u.type] || [],
                c = ce.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = ce.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[ce.expando] ? e : new ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ce.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ce.Event = function(e, t) {
        if (!(this instanceof ce.Event)) return new ce.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0
    }, ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: qe,
        isPropagationStopped: qe,
        isImmediatePropagationStopped: qe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp), ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(r, i) {
        function o(e) {
            if (C.documentMode) {
                var t = _.get(this, "handle"),
                    n = ce.event.fix(e);
                n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)
            } else ce.event.simulate(i, e.target, ce.event.fix(e))
        }
        ce.event.special[r] = {
            setup: function() {
                var e;
                if (He(this, r, !0), !C.documentMode) return !1;
                (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1)
            },
            trigger: function() {
                return He(this, r), !0
            },
            teardown: function() {
                var e;
                if (!C.documentMode) return !1;
                (e = _.get(this, i) - 1) ? _.set(this, i, e): (this.removeEventListener(i, o), _.remove(this, i))
            },
            _default: function(e) {
                return _.get(e.target, r)
            },
            delegateType: i
        }, ce.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = _.get(t, i);
                n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = _.get(t, i) - 1;
                n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i))
            }
        }
    }), ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        ce.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), ce.fn.extend({
        on: function(e, t, n, r) {
            return Le(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Le(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function() {
                ce.event.remove(this, e, n, t)
            })
        }
    });
    var Oe = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Re(e, t) {
        return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
    }

    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events))
                for (i in _.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
            z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a))
        }
    }

    function $e(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = v(d);
        if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
        });
        if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : m(u.textContent.replace(Me, ""), u, l))
        }
        return n
    }

    function Be(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    ce.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = K(e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
                else Fe(e, c);
            return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[_.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0
                    }
                    n[z.expando] && (n[z.expando] = void 0)
                }
        }
    }), ce.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return M(this, function(e) {
                return void 0 === e ? ce.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return $e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ce.clone(this, e, t)
            })
        },
        html: function(e) {
            return M(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return $e(this, arguments, function(e) {
                var t = this.parentNode;
                ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        ce.fn[e] = function(e) {
            for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
        ze = /^--/,
        Xe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = ie), t.getComputedStyle(e)
        },
        Ue = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ve = new RegExp(Q.join("|"), "i");

    function Ge(e, t, n) {
        var r, i, o, a, s = ze.test(t),
            u = e.style;
        return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ye(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = C.createElement("div"),
            l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"],
        Je = C.createElement("div").style,
        Ke = {};

    function Ze(e) {
        var t = ce.cssProps[e] || Ke[e];
        return t || (e in Je ? e : Ke[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
            while (n--)
                if ((e = Qe[n] + t) in Je) return e
        }(e) || e)
    }
    var et = /^(none|table(?!-c[ea]).+)/,
        tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        nt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function rt(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
    }

    function ot(e, t, n) {
        var r = Xe(e),
            i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
            o = i,
            a = Ge(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i)
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ge(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = F(t),
                    u = ze.test(t),
                    l = e.style;
                if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = F(t);
            return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), ce.each(["height", "width"], function(e, u) {
        ce.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function() {
                    return ot(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Xe(e),
                    o = !le.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
                    s = n ? it(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s)
            }
        }
    }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        ce.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (ce.cssHooks[i + o].set = rt)
    }), ce.fn.extend({
        css: function(e, t) {
            return M(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((ce.Tween = at).prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
        }
    }).init.prototype = at.prototype, (at.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ce.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ce.fx = at.prototype.init, ce.fx.step = {};
    var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;

    function dt() {
        ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick())
    }

    function ht() {
        return ie.setTimeout(function() {
            st = void 0
        }), st = Date.now()
    }

    function gt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function yt(o, e, t) {
        var n, a, r = 0,
            i = yt.prefilters.length,
            s = ce.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: ce.extend({}, e),
                opts: ce.extend(!0, {
                    specialEasing: {},
                    easing: ce.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: st || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, Y.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            v(e) ? (t = e, e = ["*"]) : e = e.match(D);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ee(e),
                v = _.get(e, "fxshow");
            for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ft.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || ce.style(e, r)
                }
            if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && re([e], !0), p.done(function() {
                    for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r])
                })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }), ce.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }, r
    }, ce.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ce.isEmptyObject(t),
                o = ce.speed(e, n, r),
                a = function() {
                    var e = yt(this, ce.extend({}, t), o);
                    (i || _.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = ce.timers,
                    r = _.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || ce.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = _.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = ce.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), ce.each(["toggle", "show", "hide"], function(e, r) {
        var i = ce.fn[r];
        ce.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }), ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        ce.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), ce.timers = [], ce.fx.tick = function() {
        var e, t = 0,
            n = ce.timers;
        for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ce.fx.stop(), st = void 0
    }, ce.fx.timer = function(e) {
        ce.timers.push(e), ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function() {
        ut || (ut = !0, dt())
    }, ce.fx.stop = function() {
        ut = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fn.delay = function(r, e) {
        return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = ie.setTimeout(e, r);
            t.stop = function() {
                ie.clearTimeout(n)
            }
        })
    }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
    var mt, xt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function(e, t) {
            return M(this, ce.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ce.removeAttr(this, e)
            })
        }
    }), ce.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.radioValue && "radio" === t && fe(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(D);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), mt = {
        set: function(e, t, n) {
            return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || ce.find.attr;
        xt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;

    function Tt(e) {
        return (e.match(D) || []).join(" ")
    }

    function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
    }
    ce.fn.extend({
        prop: function(e, t) {
            return M(this, ce.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ce.propFix[e] || e]
            })
        }
    }), ce.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), le.optSelected || (ce.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this
    }), ce.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).addClass(t.call(this, e, Ct(this)))
            }) : (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).removeClass(t.call(this, e, Ct(this)))
            }) : arguments.length ? (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function() {
                if (s)
                    for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var St = /\r/g;
    ce.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = v(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : Tt(ce.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                            if (t = ce(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = ce.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t)
            }
        }, le.checkOn || (ce.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Et = ie.location,
        jt = {
            guid: Date.now()
        },
        At = /\?/;
    ce.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new ie.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Dt = /^(?:focusinfocus|focusoutblur)$/,
        Nt = function(e) {
            e.stopPropagation()
        };
    ce.extend(ce.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || C],
                d = ue.call(e, "type") ? e.type : e,
                h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !y(n)) {
                    for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = ce.extend(new ce.Event, n, {
                type: e,
                isSimulated: !0
            });
            ce.event.trigger(r, null, t)
        }
    }), ce.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ce.event.trigger(e, t, n, !0)
        }
    });
    var qt = /\[\]$/,
        Lt = /\r?\n/g,
        Ht = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;

    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) ce.each(e, function(e, t) {
            r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== x(e)) i(n, e);
        else
            for (t in e) Pt(n + "[" + t + "]", e[t], r, i)
    }
    ce.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Pt(n, e[n], t, i);
        return r.join("&")
    }, ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = ce(this).val();
                return null == n ? null : Array.isArray(n) ? ce.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Mt = /%20/g,
        Rt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        Bt = {},
        _t = {},
        zt = "*/".concat("*"),
        Xt = C.createElement("a");

    function Ut(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(D) || [];
            if (v(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Vt(t, i, o, a) {
        var s = {},
            u = t === _t;

        function l(e) {
            var r;
            return s[e] = !0, ce.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Gt(e, t) {
        var n, r, i = ce.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ce.extend(!0, e, r), e
    }
    Xt.href = Et.href, ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
        },
        ajaxPrefilter: Ut(Bt),
        ajaxTransport: Ut(_t),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
                x = ce.Deferred(),
                b = ce.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
            for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = ie.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return ce.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ce.get(e, void 0, t, "script")
        }
    }), ce.each(["get", "post"], function(e, i) {
        ce[i] = function(e, t, n, r) {
            return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, ce.isPlainObject(e) && e))
        }
    }), ce.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), ce._evalUrl = function(e, t, n) {
        return ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                ce.globalEval(e, t, n)
            }
        })
    }, ce.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                ce(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = ce(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                ce(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ce(this).replaceWith(this.childNodes)
            }), this
        }
    }), ce.expr.pseudos.hidden = function(e) {
        return !ce.expr.pseudos.visible(e)
    }, ce.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ce.ajaxSettings.xhr = function() {
        try {
            return new ie.XMLHttpRequest
        } catch (e) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Qt = ce.ajaxSettings.xhr();
    le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i) {
        var o, a;
        if (le.cors || Qt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && ie.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), ce.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ce.globalEval(e), e
            }
        }
    }), ce.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ce.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = ce("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Jt, Kt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || ce.expando + "_" + jt.guid++;
            return this[e] = !0, e
        }
    }), ce.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || ce.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0
        }), "script"
    }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
        var r, i, o
    }, ce.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ce.expr.pseudos.animated = function(t) {
        return ce.grep(ce.timers, function(e) {
            return t === e.elem
        }).length
    }, ce.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = ce.css(e, "position"),
                c = ce(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, ce.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ce.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ce.css(r, "marginTop", !0),
                    left: t.left - i.left - ce.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
                return e || J
            })
        }
    }), ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function(e) {
            return M(this, function(e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), ce.each(["top", "left"], function(e, n) {
        ce.cssHooks[n] = Ye(le.pixelPosition, function(e, t) {
            if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t
        })
    }), ce.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        ce.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            ce.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return M(this, function(e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ce.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ce.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }
    }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        ce.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ce.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(ae.call(arguments)))
        }).guid = e.guid = e.guid || ce.guid++, i
    }, ce.holdReady = function(e) {
        e ? ce.readyWait++ : ce.ready(!0)
    }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e) {
        var t = ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, ce.trim = function(e) {
        return null == e ? "" : (e + "").replace(en, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce
    });
    var tn = ie.jQuery,
        nn = ie.$;
    return ce.noConflict = function(e) {
        return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
    }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});

/*!
 * Bootstrap v5.2.0 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    const t = "transitionend",
        e = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
            }
            return e
        },
        i = t => {
            const i = e(t);
            return i && document.querySelector(i) ? i : null
        },
        n = t => {
            const i = e(t);
            return i ? document.querySelector(i) : null
        },
        s = e => {
            e.dispatchEvent(new Event(t))
        },
        o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
        a = t => {
            if (!o(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1
            }
            return e
        },
        l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        c = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
        },
        h = () => {},
        d = t => {
            t.offsetHeight
        },
        u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        f = [],
        p = () => "rtl" === document.documentElement.dir,
        g = t => {
            var e;
            e = () => {
                const e = u();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => {
                for (const t of f) t()
            })), f.push(e)) : e()
        },
        m = t => {
            "function" == typeof t && t()
        },
        _ = (e, i, n = !0) => {
            if (!n) return void m(e);
            const o = (t => {
                if (!t) return 0;
                let {
                    transitionDuration: e,
                    transitionDelay: i
                } = window.getComputedStyle(t);
                const n = Number.parseFloat(e),
                    s = Number.parseFloat(i);
                return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            })(i) + 5;
            let r = !1;
            const a = ({
                target: n
            }) => {
                n === i && (r = !0, i.removeEventListener(t, a), m(e))
            };
            i.addEventListener(t, a), setTimeout((() => {
                r || s(i)
            }), o)
        },
        b = (t, e, i, n) => {
            const s = t.length;
            let o = t.indexOf(e);
            return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
        },
        v = /[^.]*(?=\..*)\.|.*/,
        y = /\..*/,
        w = /::\d+$/,
        A = {};
    let E = 1;
    const T = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++
    }

    function x(t) {
        const e = O(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e]
    }

    function k(t, e, i = null) {
        return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
    }

    function L(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e || i;
        let o = N(t);
        return C.has(o) || (o = t), [n, s, o]
    }

    function D(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            r = t(r)
        }
        const l = x(t),
            c = l[a] || (l[a] = {}),
            h = k(c, r, o ? i : null);
        if (h) return void(h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")),
            u = o ? function(t, e, i) {
                return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (let {
                            target: r
                        } = s; r && r !== this; r = r.parentNode)
                        for (const a of o)
                            if (a === r) return j(s, {
                                delegateTarget: r
                            }), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s])
                }
            }(t, i, r) : function(t, e) {
                return function i(n) {
                    return j(n, {
                        delegateTarget: t
                    }), i.oneOff && P.off(t, n.type, e), e.apply(t, [n])
                }
            }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function S(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
    }

    function I(t, e, i, n) {
        const s = e[i] || {};
        for (const o of Object.keys(s))
            if (o.includes(n)) {
                const n = s[o];
                S(t, e, i, n.callable, n.delegationSelector)
            }
    }

    function N(t) {
        return t = t.replace(y, ""), T[t] || t
    }
    const P = {
        on(t, e, i, n) {
            D(t, e, i, n, !1)
        },
        one(t, e, i, n) {
            D(t, e, i, n, !0)
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h)
                    for (const i of Object.keys(l)) I(t, l, i, e.slice(1));
                for (const i of Object.keys(c)) {
                    const n = i.replace(w, "");
                    if (!a || e.includes(n)) {
                        const e = c[i];
                        S(t, l, r, e.callable, e.delegationSelector)
                    }
                }
            } else {
                if (!Object.keys(c).length) return;
                S(t, l, r, o, s ? i : null)
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null,
                o = !0,
                r = !0,
                a = !1;
            e !== N(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            let l = new Event(e, {
                bubbles: o,
                cancelable: !0
            });
            return l = j(l, i), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
        }
    };

    function j(t, e) {
        for (const [i, n] of Object.entries(e || {})) try {
            t[i] = n
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: () => n
            })
        }
        return t
    }
    const M = new Map,
        H = {
            set(t, e, i) {
                M.has(t) || M.set(t, new Map);
                const n = M.get(t);
                n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
            },
            get: (t, e) => M.has(t) && M.get(t).get(e) || null,
            remove(t, e) {
                if (!M.has(t)) return;
                const i = M.get(t);
                i.delete(e), 0 === i.size && M.delete(t)
            }
        };

    function $(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function W(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }
    const B = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${W(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${W(e)}`)
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const n of i) {
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = $(t.dataset[n])
            }
            return e
        },
        getDataAttribute: (t, e) => $(t.getAttribute(`data-bs-${W(e)}`))
    };
    class F {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? B.getDataAttribute(e, "config") : {};
            return { ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? B.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const n of Object.keys(e)) {
                const s = e[n],
                    r = t[n],
                    a = o(r) ? "element" : null == (i = r) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(a)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
            }
            var i
        }
    }
    class z extends F {
        constructor(t, e) {
            super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(e), H.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        static getInstance(t) {
            return H.get(r(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.2.0"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const R = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`,
            s = t.NAME;
        P.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
            const o = n(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]()
        }))
    };
    class q extends z {
        static get NAME() {
            return "alert"
        }
        close() {
            if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    R(q, "close"), g(q);
    const V = '[data-bs-toggle="button"]';
    class K extends z {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = K.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }
    P.on(document, "click.bs.button.data-api", V, (t => {
        t.preventDefault();
        const e = t.target.closest(V);
        K.getOrCreateInstance(e).toggle()
    })), g(K);
    const Q = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
            parents(t, e) {
                const i = [];
                let n = t.parentNode.closest(e);
                for (; n;) i.push(n), n = n.parentNode.closest(e);
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
                return this.find(e, t).filter((t => !l(t) && a(t)))
            }
        },
        X = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        },
        Y = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
        };
    class U extends F {
        constructor(t, e) {
            super(), this._element = t, t && U.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }
        static get Default() {
            return X
        }
        static get DefaultType() {
            return Y
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            P.off(this._element, ".bs.swipe")
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), m(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))), P.on(this._element, "pointerup.bs.swipe", (t => this._end(t))), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", (t => this._start(t))), P.on(this._element, "touchmove.bs.swipe", (t => this._move(t))), P.on(this._element, "touchend.bs.swipe", (t => this._end(t))))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const G = "next",
        J = "prev",
        Z = "left",
        tt = "right",
        et = "slid.bs.carousel",
        it = "carousel",
        nt = "active",
        st = {
            ArrowLeft: tt,
            ArrowRight: Z
        },
        ot = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
        },
        rt = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };
    class at extends z {
        constructor(t, e) {
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Q.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === it && this.cycle()
        }
        static get Default() {
            return ot
        }
        static get DefaultType() {
            return rt
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(G)
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }
        prev() {
            this._slide(J)
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval()
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? P.one(this._element, et, (() => this.cycle())) : this.cycle())
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void P.one(this._element, et, (() => this.to(t)));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? G : J;
            this._slide(n, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), P.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && U.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const t of Q.find(".carousel-item img", this._element)) P.on(t, "dragstart.bs.carousel", (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(Z)),
                rightCallback: () => this._slide(this._directionToOrder(tt)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new U(this._element, t)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = st[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = Q.findOne(".active", this._indicatorsElement);
            e.classList.remove(nt), e.removeAttribute("aria-current");
            const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(nt), i.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(),
                n = t === G,
                s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s),
                r = e => P.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r("slide.bs.carousel").defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end",
                c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => {
                s.classList.remove(l, c), s.classList.add(nt), i.classList.remove(nt, c, l), this._isSliding = !1, r(et)
            }), i, this._isAnimated()), a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return Q.findOne(".active.carousel-item", this._element)
        }
        _getItems() {
            return Q.find(".carousel-item", this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }
        _directionToOrder(t) {
            return p() ? t === Z ? J : G : t === Z ? G : J
        }
        _orderToDirection(t) {
            return p() ? t === J ? Z : tt : t === J ? tt : Z
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = at.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else e.to(t)
            }))
        }
    }
    P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function(t) {
        const e = n(this);
        if (!e || !e.classList.contains(it)) return;
        t.preventDefault();
        const i = at.getOrCreateInstance(e),
            s = this.getAttribute("data-bs-slide-to");
        return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
    })), P.on(window, "load.bs.carousel.data-api", (() => {
        const t = Q.find('[data-bs-ride="carousel"]');
        for (const e of t) at.getOrCreateInstance(e)
    })), g(at);
    const lt = "show",
        ct = "collapse",
        ht = "collapsing",
        dt = '[data-bs-toggle="collapse"]',
        ut = {
            parent: null,
            toggle: !0
        },
        ft = {
            parent: "(null|element)",
            toggle: "boolean"
        };
    class pt extends z {
        constructor(t, e) {
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const n = Q.find(dt);
            for (const t of n) {
                const e = i(t),
                    n = Q.find(e).filter((t => t === this._element));
                null !== e && n.length && this._triggerArray.push(t)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return ut
        }
        static get DefaultType() {
            return ft
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => pt.getOrCreateInstance(t, {
                    toggle: !1
                })))), t.length && t[0]._isTransitioning) return;
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[e] = "", P.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[e] = `${this._element[i]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            for (const t of this._triggerArray) {
                const e = n(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct), P.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }
        _isShown(t = this._element) {
            return t.classList.contains(lt)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(dt);
            for (const e of t) {
                const t = n(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }
        _getFirstLevelChildren(t) {
            const e = Q.find(":scope .collapse .collapse", this._config.parent);
            return Q.find(t, this._config.parent).filter((t => !e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function() {
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }))
        }
    }
    P.on(document, "click.bs.collapse.data-api", dt, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = i(this),
            n = Q.find(e);
        for (const t of n) pt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle()
    })), g(pt);
    var gt = "top",
        mt = "bottom",
        _t = "right",
        bt = "left",
        vt = "auto",
        yt = [gt, mt, _t, bt],
        wt = "start",
        At = "end",
        Et = "clippingParents",
        Tt = "viewport",
        Ct = "popper",
        Ot = "reference",
        xt = yt.reduce((function(t, e) {
            return t.concat([e + "-" + wt, e + "-" + At])
        }), []),
        kt = [].concat(yt, [vt]).reduce((function(t, e) {
            return t.concat([e, e + "-" + wt, e + "-" + At])
        }), []),
        Lt = "beforeRead",
        Dt = "read",
        St = "afterRead",
        It = "beforeMain",
        Nt = "main",
        Pt = "afterMain",
        jt = "beforeWrite",
        Mt = "write",
        Ht = "afterWrite",
        $t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht];

    function Wt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function Bt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function Ft(t) {
        return t instanceof Bt(t).Element || t instanceof Element
    }

    function zt(t) {
        return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement
    }

    function Rt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot)
    }
    const qt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                zt(s) && Wt(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        },
        effect: function(t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function() {
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                                return t[e] = "", t
                            }), {});
                        zt(n) && Wt(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                            n.removeAttribute(t)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function Vt(t) {
        return t.split("-")[0]
    }
    var Kt = Math.max,
        Qt = Math.min,
        Xt = Math.round;

    function Yt(t, e) {
        void 0 === e && (e = !1);
        var i = t.getBoundingClientRect(),
            n = 1,
            s = 1;
        if (zt(t) && e) {
            var o = t.offsetHeight,
                r = t.offsetWidth;
            r > 0 && (n = Xt(i.width) / r || 1), o > 0 && (s = Xt(i.height) / o || 1)
        }
        return {
            width: i.width / n,
            height: i.height / s,
            top: i.top / s,
            right: i.right / n,
            bottom: i.bottom / s,
            left: i.left / n,
            x: i.left / n,
            y: i.top / s
        }
    }

    function Ut(t) {
        var e = Yt(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function Gt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && Rt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function Jt(t) {
        return Bt(t).getComputedStyle(t)
    }

    function Zt(t) {
        return ["table", "td", "th"].indexOf(Wt(t)) >= 0
    }

    function te(t) {
        return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function ee(t) {
        return "html" === Wt(t) ? t : t.assignedSlot || t.parentNode || (Rt(t) ? t.host : null) || te(t)
    }

    function ie(t) {
        return zt(t) && "fixed" !== Jt(t).position ? t.offsetParent : null
    }

    function ne(t) {
        for (var e = Bt(t), i = ie(t); i && Zt(i) && "static" === Jt(i).position;) i = ie(i);
        return i && ("html" === Wt(i) || "body" === Wt(i) && "static" === Jt(i).position) ? e : i || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Jt(t).position) return null;
            var i = ee(t);
            for (Rt(i) && (i = i.host); zt(i) && ["html", "body"].indexOf(Wt(i)) < 0;) {
                var n = Jt(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function se(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function oe(t, e, i) {
        return Kt(t, Qt(e, i))
    }

    function re(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }

    function ae(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t, e
        }), {})
    }
    const le = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = Vt(i.placement),
                l = se(a),
                c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                        return re("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : t) ? t : ae(t, yt))
                    }(s.padding, i),
                    d = Ut(o),
                    u = "y" === l ? gt : bt,
                    f = "y" === l ? mt : _t,
                    p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                    g = r[l] - i.rects.reference[l],
                    m = ne(o),
                    _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                    b = p / 2 - g / 2,
                    v = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + b,
                    A = oe(v, w, y),
                    E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e)
            }
        },
        effect: function(t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Gt(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function ce(t) {
        return t.split("-")[1]
    }
    var he = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function de(t) {
        var e, i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.variation,
            r = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            c = t.adaptive,
            h = t.roundOffsets,
            d = t.isFixed,
            u = r.x,
            f = void 0 === u ? 0 : u,
            p = r.y,
            g = void 0 === p ? 0 : p,
            m = "function" == typeof h ? h({
                x: f,
                y: g
            }) : {
                x: f,
                y: g
            };
        f = m.x, g = m.y;
        var _ = r.hasOwnProperty("x"),
            b = r.hasOwnProperty("y"),
            v = bt,
            y = gt,
            w = window;
        if (c) {
            var A = ne(i),
                E = "clientHeight",
                T = "clientWidth";
            A === Bt(i) && "static" !== Jt(A = te(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === gt || (s === bt || s === _t) && o === At) && (y = mt, g -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, g *= l ? 1 : -1), s !== bt && (s !== gt && s !== mt || o !== At) || (v = _t, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1)
        }
        var C, O = Object.assign({
                position: a
            }, c && he),
            x = !0 === h ? function(t) {
                var e = t.x,
                    i = t.y,
                    n = window.devicePixelRatio || 1;
                return {
                    x: Xt(e * n) / n || 0,
                    y: Xt(i * n) / n || 0
                }
            }({
                x: f,
                y: g
            }) : {
                x: f,
                y: g
            };
        return f = x.x, g = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? g + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e))
    }
    const ue = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: Vt(e.placement),
                    variation: ce(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                    isFixed: "fixed" === e.options.strategy
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    };
    var fe = {
        passive: !0
    };
    const pe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = Bt(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function(t) {
                    t.addEventListener("scroll", i.update, fe)
                })), a && l.addEventListener("resize", i.update, fe),
                function() {
                    o && c.forEach((function(t) {
                        t.removeEventListener("scroll", i.update, fe)
                    })), a && l.removeEventListener("resize", i.update, fe)
                }
        },
        data: {}
    };
    var ge = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function me(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return ge[t]
        }))
    }
    var _e = {
        start: "end",
        end: "start"
    };

    function be(t) {
        return t.replace(/start|end/g, (function(t) {
            return _e[t]
        }))
    }

    function ve(t) {
        var e = Bt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function ye(t) {
        return Yt(te(t)).left + ve(t).scrollLeft
    }

    function we(t) {
        var e = Jt(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function Ae(t) {
        return ["html", "body", "#document"].indexOf(Wt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ae(ee(t))
    }

    function Ee(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ae(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = Bt(n),
            r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Ee(ee(r)))
    }

    function Te(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Ce(t, e) {
        return e === Tt ? Te(function(t) {
            var e = Bt(t),
                i = te(t),
                n = e.visualViewport,
                s = i.clientWidth,
                o = i.clientHeight,
                r = 0,
                a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                width: s,
                height: o,
                x: r + ye(t),
                y: a
            }
        }(t)) : Ft(e) ? function(t) {
            var e = Yt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : Te(function(t) {
            var e, i = te(t),
                n = ve(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = Kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = Kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + ye(t),
                l = -n.scrollTop;
            return "rtl" === Jt(s || i).direction && (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(te(t)))
    }

    function Oe(t) {
        var e, i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? Vt(s) : null,
            r = s ? ce(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case gt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case mt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case _t:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case bt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var c = o ? se(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case At:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }

    function xe(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.boundary,
            r = void 0 === o ? Et : o,
            a = i.rootBoundary,
            l = void 0 === a ? Tt : a,
            c = i.elementContext,
            h = void 0 === c ? Ct : c,
            d = i.altBoundary,
            u = void 0 !== d && d,
            f = i.padding,
            p = void 0 === f ? 0 : f,
            g = re("number" != typeof p ? p : ae(p, yt)),
            m = h === Ct ? Ot : Ct,
            _ = t.rects.popper,
            b = t.elements[u ? m : h],
            v = function(t, e, i) {
                var n = "clippingParents" === e ? function(t) {
                        var e = Ee(ee(t)),
                            i = ["absolute", "fixed"].indexOf(Jt(t).position) >= 0 && zt(t) ? ne(t) : t;
                        return Ft(i) ? e.filter((function(t) {
                            return Ft(t) && Gt(t, i) && "body" !== Wt(t)
                        })) : []
                    }(t) : [].concat(e),
                    s = [].concat(n, [i]),
                    o = s[0],
                    r = s.reduce((function(e, i) {
                        var n = Ce(t, i);
                        return e.top = Kt(n.top, e.top), e.right = Qt(n.right, e.right), e.bottom = Qt(n.bottom, e.bottom), e.left = Kt(n.left, e.left), e
                    }), Ce(t, o));
                return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
            }(Ft(b) ? b : b.contextElement || te(t.elements.popper), r, l),
            y = Yt(t.elements.reference),
            w = Oe({
                reference: y,
                element: _,
                strategy: "absolute",
                placement: s
            }),
            A = Te(Object.assign({}, _, w)),
            E = h === Ct ? A : y,
            T = {
                top: v.top - E.top + g.top,
                bottom: E.bottom - v.bottom + g.bottom,
                left: v.left - E.left + g.left,
                right: E.right - v.right + g.right
            },
            C = t.modifiersData.offset;
        if (h === Ct && C) {
            var O = C[s];
            Object.keys(T).forEach((function(t) {
                var e = [_t, mt].indexOf(t) >= 0 ? 1 : -1,
                    i = [gt, mt].indexOf(t) >= 0 ? "y" : "x";
                T[t] += O[i] * e
            }))
        }
        return T
    }

    function ke(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? kt : l,
            h = ce(n),
            d = h ? a ? xt : xt.filter((function(t) {
                return ce(t) === h
            })) : yt,
            u = d.filter((function(t) {
                return c.indexOf(t) >= 0
            }));
        0 === u.length && (u = d);
        var f = u.reduce((function(e, i) {
            return e[i] = xe(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Vt(i)], e
        }), {});
        return Object.keys(f).sort((function(t, e) {
            return f[t] - f[e]
        }))
    }
    const Le = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = Vt(m), b = l || (_ !== m && p ? function(t) {
                        if (Vt(t) === vt) return [];
                        var e = me(t);
                        return [be(t), e, be(e)]
                    }(m) : [me(m)]), v = [m].concat(b).reduce((function(t, i) {
                        return t.concat(Vt(i) === vt ? ke(e, {
                            placement: i,
                            boundary: h,
                            rootBoundary: d,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: g
                        }) : i)
                    }), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
                    var O = v[C],
                        x = Vt(O),
                        k = ce(O) === wt,
                        L = [gt, mt].indexOf(x) >= 0,
                        D = L ? "width" : "height",
                        S = xe(e, {
                            placement: O,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c
                        }),
                        I = L ? k ? _t : bt : k ? mt : gt;
                    y[D] > w[D] && (I = me(I));
                    var N = me(I),
                        P = [];
                    if (o && P.push(S[x] <= 0), a && P.push(S[I] <= 0, S[N] <= 0), P.every((function(t) {
                            return t
                        }))) {
                        T = O, E = !1;
                        break
                    }
                    A.set(O, P)
                }
                if (E)
                    for (var j = function(t) {
                            var e = v.find((function(e) {
                                var i = A.get(e);
                                if (i) return i.slice(0, t).every((function(t) {
                                    return t
                                }))
                            }));
                            if (e) return T = e, "break"
                        }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function De(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function Se(t) {
        return [gt, _t, mt, bt].some((function(e) {
            return t[e] >= 0
        }))
    }
    const Ie = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = xe(e, {
                        elementContext: "reference"
                    }),
                    a = xe(e, {
                        altBoundary: !0
                    }),
                    l = De(r, n),
                    c = De(a, s, o),
                    h = Se(l),
                    d = Se(c);
                e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d
                }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": d
                })
            }
        },
        Ne = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = kt.reduce((function(t, i) {
                        return t[i] = function(t, e, i) {
                            var n = Vt(t),
                                s = [bt, gt].indexOf(n) >= 0 ? -1 : 1,
                                o = "function" == typeof i ? i(Object.assign({}, e, {
                                    placement: t
                                })) : i,
                                r = o[0],
                                a = o[1];
                            return r = r || 0, a = (a || 0) * s, [bt, _t].indexOf(n) >= 0 ? {
                                x: a,
                                y: r
                            } : {
                                x: r,
                                y: a
                            }
                        }(i, e.rects, o), t
                    }), {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
            }
        },
        Pe = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = Oe({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement
                })
            },
            data: {}
        },
        je = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    g = void 0 === p ? 0 : p,
                    m = xe(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h
                    }),
                    _ = Vt(e.placement),
                    b = ce(e.placement),
                    v = !b,
                    y = se(_),
                    w = "x" === y ? "y" : "x",
                    A = e.modifiersData.popperOffsets,
                    E = e.rects.reference,
                    T = e.rects.popper,
                    C = "function" == typeof g ? g(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : g,
                    O = "number" == typeof C ? {
                        mainAxis: C,
                        altAxis: C
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, C),
                    x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                    k = {
                        x: 0,
                        y: 0
                    };
                if (A) {
                    if (o) {
                        var L, D = "y" === y ? gt : bt,
                            S = "y" === y ? mt : _t,
                            I = "y" === y ? "height" : "width",
                            N = A[y],
                            P = N + m[D],
                            j = N - m[S],
                            M = f ? -T[I] / 2 : 0,
                            H = b === wt ? E[I] : T[I],
                            $ = b === wt ? -T[I] : -E[I],
                            W = e.elements.arrow,
                            B = f && W ? Ut(W) : {
                                width: 0,
                                height: 0
                            },
                            F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            z = F[D],
                            R = F[S],
                            q = oe(0, E[I], B[I]),
                            V = v ? E[I] / 2 - M - q - z - O.mainAxis : H - q - z - O.mainAxis,
                            K = v ? -E[I] / 2 + M + q + R + O.mainAxis : $ + q + R + O.mainAxis,
                            Q = e.elements.arrow && ne(e.elements.arrow),
                            X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                            Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
                            U = N + K - Y,
                            G = oe(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j);
                        A[y] = G, k[y] = G - N
                    }
                    if (a) {
                        var J, Z = "x" === y ? gt : bt,
                            tt = "x" === y ? mt : _t,
                            et = A[w],
                            it = "y" === w ? "height" : "width",
                            nt = et + m[Z],
                            st = et - m[tt],
                            ot = -1 !== [gt, bt].indexOf(_),
                            rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
                            at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
                            lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
                            ct = f && ot ? function(t, e, i) {
                                var n = oe(t, e, i);
                                return n > i ? i : n
                            }(at, et, lt) : oe(f ? at : nt, et, f ? lt : st);
                        A[w] = ct, k[w] = ct - et
                    }
                    e.modifiersData[n] = k
                }
            },
            requiresIfExists: ["offset"]
        };

    function Me(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = zt(e),
            r = zt(e) && function(t) {
                var e = t.getBoundingClientRect(),
                    i = Xt(e.width) / t.offsetWidth || 1,
                    n = Xt(e.height) / t.offsetHeight || 1;
                return 1 !== i || 1 !== n
            }(e),
            a = te(e),
            l = Yt(t, r),
            c = {
                scrollLeft: 0,
                scrollTop: 0
            },
            h = {
                x: 0,
                y: 0
            };
        return (o || !o && !i) && (("body" !== Wt(e) || we(a)) && (c = (n = e) !== Bt(n) && zt(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : ve(n)), zt(e) ? ((h = Yt(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = ye(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        }
    }

    function He(t) {
        var e = new Map,
            i = new Set,
            n = [];

        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n)
                }
            })), n.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        })), t.forEach((function(t) {
            i.has(t.name) || s(t)
        })), n
    }
    var $e = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function We() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function Be(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? $e : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, $e, o),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function(i) {
                        var s = "function" == typeof i ? i(a.options) : i;
                        d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                            reference: Ft(t) ? Ee(t) : t.contextElement ? Ee(t.contextElement) : [],
                            popper: Ee(e)
                        };
                        var r, c, u = function(t) {
                            var e = He(t);
                            return $t.reduce((function(t, i) {
                                return t.concat(e.filter((function(t) {
                                    return t.phase === i
                                })))
                            }), [])
                        }((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e, t
                        }), {}), Object.keys(c).map((function(t) {
                            return c[t]
                        }))));
                        return a.orderedModifiers = u.filter((function(t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function(t) {
                            var e = t.name,
                                i = t.options,
                                n = void 0 === i ? {} : i,
                                s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({
                                    state: a,
                                    name: e,
                                    instance: h,
                                    options: n
                                });
                                l.push(o || function() {})
                            }
                        })), h.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (We(e, i)) {
                                a.rects = {
                                    reference: Me(e, ne(i), "fixed" === a.options.strategy),
                                    popper: Ut(i)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o && (a = o({
                                            state: a,
                                            options: l,
                                            name: d,
                                            instance: h
                                        }) || a)
                                    } else a.reset = !1, n = -1
                            }
                        }
                    },
                    update: (s = function() {
                        return new Promise((function(t) {
                            h.forceUpdate(), t(a)
                        }))
                    }, function() {
                        return r || (r = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                r = void 0, t(s())
                            }))
                        }))), r
                    }),
                    destroy: function() {
                        d(), c = !0
                    }
                };
            if (!We(t, e)) return h;

            function d() {
                l.forEach((function(t) {
                    return t()
                })), l = []
            }
            return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            })), h
        }
    }
    var Fe = Be(),
        ze = Be({
            defaultModifiers: [pe, Pe, ue, qt]
        }),
        Re = Be({
            defaultModifiers: [pe, Pe, ue, qt, Ne, Le, je, le, Ie]
        });
    const qe = Object.freeze(Object.defineProperty({
            __proto__: null,
            popperGenerator: Be,
            detectOverflow: xe,
            createPopperBase: Fe,
            createPopper: Re,
            createPopperLite: ze,
            top: gt,
            bottom: mt,
            right: _t,
            left: bt,
            auto: vt,
            basePlacements: yt,
            start: wt,
            end: At,
            clippingParents: Et,
            viewport: Tt,
            popper: Ct,
            reference: Ot,
            variationPlacements: xt,
            placements: kt,
            beforeRead: Lt,
            read: Dt,
            afterRead: St,
            beforeMain: It,
            main: Nt,
            afterMain: Pt,
            beforeWrite: jt,
            write: Mt,
            afterWrite: Ht,
            modifierPhases: $t,
            applyStyles: qt,
            arrow: le,
            computeStyles: ue,
            eventListeners: pe,
            flip: Le,
            hide: Ie,
            offset: Ne,
            popperOffsets: Pe,
            preventOverflow: je
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Ve = "dropdown",
        Ke = "ArrowUp",
        Qe = "ArrowDown",
        Xe = "click.bs.dropdown.data-api",
        Ye = "keydown.bs.dropdown.data-api",
        Ue = "show",
        Ge = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Je = `${Ge}.show`,
        Ze = ".dropdown-menu",
        ti = p() ? "top-end" : "top-start",
        ei = p() ? "top-start" : "top-end",
        ii = p() ? "bottom-end" : "bottom-start",
        ni = p() ? "bottom-start" : "bottom-end",
        si = p() ? "left-start" : "right-start",
        oi = p() ? "right-start" : "left-start",
        ri = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        },
        ai = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };
    class li extends z {
        constructor(t, e) {
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = Q.findOne(Ze, this._parent), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return ri
        }
        static get DefaultType() {
            return ai
        }
        static get NAME() {
            return Ve
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ue), this._element.classList.add(Ue), P.trigger(this._element, "shown.bs.dropdown", t)
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove(Ue), this._element.classList.remove(Ue), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof(t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === qe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = Re(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains(Ue)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return si;
            if (t.classList.contains("dropstart")) return oi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ei : ti : e ? ni : ii
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: t,
            target: e
        }) {
            const i = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t)));
            i.length && b(i, e, t === Qe, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = li.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = Q.find(Je);
            for (const i of e) {
                const e = li.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(),
                    s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                n = [Ke, Qe].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = Q.findOne(Ge, t.delegateTarget.parentNode),
                o = li.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
        }
    }
    P.on(document, Ye, Ge, li.dataApiKeydownHandler), P.on(document, Ye, Ze, li.dataApiKeydownHandler), P.on(document, Xe, li.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", li.clearMenus), P.on(document, Xe, Ge, (function(t) {
        t.preventDefault(), li.getOrCreateInstance(this).toggle()
    })), g(li);
    const ci = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        hi = ".sticky-top",
        di = "padding-right",
        ui = "margin-right";
    class fi {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, di, (e => e + t)), this._setElementAttributes(ci, di, (e => e + t)), this._setElementAttributes(hi, ui, (e => e - t))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, di), this._resetElementAttributes(ci, di), this._resetElementAttributes(hi, ui)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
            }))
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && B.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = B.getDataAttribute(t, e);
                null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
            }))
        }
        _applyManipulationCallback(t, e) {
            if (o(t)) e(t);
            else
                for (const i of Q.find(t, this._element)) e(i)
        }
    }
    const pi = "show",
        gi = "mousedown.bs.backdrop",
        mi = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
        },
        _i = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };
    class bi extends F {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        static get Default() {
            return mi
        }
        static get DefaultType() {
            return _i
        }
        static get NAME() {
            return "backdrop"
        }
        show(t) {
            if (!this._config.isVisible) return void m(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e), e.classList.add(pi), this._emulateAnimation((() => {
                m(t)
            }))
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(pi), this._emulateAnimation((() => {
                this.dispose(), m(t)
            }))) : m(t)
        }
        dispose() {
            this._isAppended && (P.off(this._element, gi), this._element.remove(), this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement), t
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), P.on(t, gi, (() => {
                m(this._config.clickCallback)
            })), this._isAppended = !0
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated)
        }
    }
    const vi = ".bs.focustrap",
        yi = "backward",
        wi = {
            autofocus: !0,
            trapElement: null
        },
        Ai = {
            autofocus: "boolean",
            trapElement: "element"
        };
    class Ei extends F {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }
        static get Default() {
            return wi
        }
        static get DefaultType() {
            return Ai
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, vi), P.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), P.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, P.off(document, vi))
        }
        _handleFocusin(t) {
            const {
                trapElement: e
            } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = Q.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === yi ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? yi : "forward")
        }
    }
    const Ti = "hidden.bs.modal",
        Ci = "show.bs.modal",
        Oi = "modal-open",
        xi = "show",
        ki = "modal-static",
        Li = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
        },
        Di = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
        };
    class Si extends z {
        constructor(t, e) {
            super(t, e), this._dialog = Q.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new fi, this._addEventListeners()
        }
        static get Default() {
            return Li
        }
        static get DefaultType() {
            return Di
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || P.trigger(this._element, Ci, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Oi), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
        }
        hide() {
            this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(xi), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
            for (const t of [window, this._dialog]) P.off(t, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new bi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Ei({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = Q.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), d(this._element), this._element.classList.add(xi), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, P.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.modal", (t => {
                if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
            })), P.on(window, "resize.bs.modal", (() => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            })), P.on(this._element, "mousedown.dismiss.bs.modal", (t => {
                t.target === t.currentTarget && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
            }))
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(Oi), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, Ti)
            }))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(ki) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(ki), this._queueCallback((() => {
                this._element.classList.remove(ki), this._queueCallback((() => {
                    this._element.style.overflowY = e
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = Si.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }))
        }
    }
    P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = n(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, Ci, (t => {
            t.defaultPrevented || P.one(e, Ti, (() => {
                a(this) && this.focus()
            }))
        }));
        const i = Q.findOne(".modal.show");
        i && Si.getInstance(i).hide(), Si.getOrCreateInstance(e).toggle(this)
    })), R(Si), g(Si);
    const Ii = "show",
        Ni = "showing",
        Pi = "hiding",
        ji = ".offcanvas.show",
        Mi = "hidePrevented.bs.offcanvas",
        Hi = "hidden.bs.offcanvas",
        $i = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Wi = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class Bi extends z {
        constructor(t, e) {
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get Default() {
            return $i
        }
        static get DefaultType() {
            return Wi
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new fi).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ni), this._queueCallback((() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Ii), this._element.classList.remove(Ni), P.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }), this._element, !0))
        }
        hide() {
            this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Pi), this._backdrop.hide(), this._queueCallback((() => {
                this._element.classList.remove(Ii, Pi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new fi).reset(), P.trigger(this._element, Hi)
            }), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new bi({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, Mi)
                } : null
            })
        }
        _initializeFocusTrap() {
            return new Ei({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Mi))
            }))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Bi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = n(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
        P.one(e, Hi, (() => {
            a(this) && this.focus()
        }));
        const i = Q.findOne(ji);
        i && i !== e && Bi.getInstance(i).hide(), Bi.getOrCreateInstance(e).toggle(this)
    })), P.on(window, "load.bs.offcanvas.data-api", (() => {
        for (const t of Q.find(ji)) Bi.getOrCreateInstance(t).show()
    })), P.on(window, "resize.bs.offcanvas", (() => {
        for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && Bi.getOrCreateInstance(t).hide()
    })), R(Bi), g(Bi);
    const Fi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        zi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        Ri = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        qi = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i) ? !Fi.has(i) || Boolean(zi.test(t.nodeValue) || Ri.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
        },
        Vi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Ki = {
            allowList: Vi,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        },
        Qi = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        },
        Xi = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
        };
    class Yi extends F {
        constructor(t) {
            super(), this._config = this._getConfig(t)
        }
        static get Default() {
            return Ki
        }
        static get DefaultType() {
            return Qi
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = { ...this._config.content,
                ...t
            }, this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
            const e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
                selector: e,
                entry: i
            }, Xi)
        }
        _setContent(t, e, i) {
            const n = Q.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"),
                    s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s) {
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue
                    }
                    const n = [].concat(...t.attributes),
                        s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n) qi(e, s) || t.removeAttribute(e.nodeName)
                }
                return n.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent
        }
    }
    const Ui = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Gi = "fade",
        Ji = "show",
        Zi = ".modal",
        tn = "hide.bs.modal",
        en = "hover",
        nn = "focus",
        sn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: p() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: p() ? "right" : "left"
        },
        on = {
            allowList: Vi,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        },
        rn = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };
    class an extends z {
        constructor(t, e) {
            if (void 0 === qe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = !1, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners()
        }
        static get Default() {
            return on
        }
        static get DefaultType() {
            return rn
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled) {
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    return e._activeTrigger.click = !e._activeTrigger.click, void(e._isWithActiveTrigger() ? e._enter() : e._leave())
                }
                this._isShown() ? this._leave() : this._enter()
            }
        }
        dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(Zi), tn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.eventName("show")),
                e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this.tip && (this.tip.remove(), this.tip = null);
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {
                container: n
            } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(i), i.classList.add(Ji), "ontouchstart" in document.documentElement)
                for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h);
            this._queueCallback((() => {
                const t = this._isHovered;
                this._isHovered = !1, P.trigger(this._element, this.constructor.eventName("shown")), t && this._leave()
            }), this.tip, this._isAnimated())
        }
        hide() {
            if (!this._isShown()) return;
            if (P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
            const t = this._getTipElement();
            if (t.classList.remove(Ji), "ontouchstart" in document.documentElement)
                for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h);
            this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = !1, this._queueCallback((() => {
                this._isWithActiveTrigger() || (this._isHovered || t.remove(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper())
            }), this.tip, this._isAnimated())
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(Gi, Ji), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Gi), e
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Yi({ ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Gi)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Ji)
        }
        _createPopper(t) {
            const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
                i = sn[e.toUpperCase()];
            return Re(this._element, t, this._getPopperConfig(i))
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return { ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => this.toggle(t)));
                else if ("manual" !== e) {
                const t = e === en ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    i = e === en ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                P.on(this._element, t, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? nn : en] = !0, e._enter()
                })), P.on(this._element, i, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? nn : en] = e._element.contains(t.relatedTarget), e._leave()
                }))
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, P.on(this._element.closest(Zi), tn, this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._config.originalTitle;
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                this._isHovered && this.show()
            }), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                this._isHovered || this.hide()
            }), this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = B.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Ui.has(t) && delete e[t];
            return t = { ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t.originalTitle = this._element.getAttribute("title") || "", "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = an.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    g(an);
    const ln = { ...an.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
        },
        cn = { ...an.DefaultType,
            content: "(null|string|element|function)"
        };
    class hn extends an {
        static get Default() {
            return ln
        }
        static get DefaultType() {
            return cn
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = hn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    g(hn);
    const dn = "click.bs.scrollspy",
        un = "active",
        fn = "[href]",
        pn = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null
        },
        gn = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element"
        };
    class mn extends z {
        constructor(t, e) {
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }
        static get Default() {
            return pn
        }
        static get DefaultType() {
            return gn
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values()) this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body, t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (P.off(this._config.target, dn), P.on(this._config.target, dn, fn, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window,
                        n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n
                }
            })))
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: [.1, .5, 1],
                rootMargin: this._getRootMargin()
            };
            return new IntersectionObserver((t => this._observerCallback(t)), t)
        }
        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`),
                i = t => {
                    this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
                },
                n = (this._rootElement || document.documentElement).scrollTop,
                s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t) {
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return
                } else s || t || i(o)
            }
        }
        _getRootMargin() {
            return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = Q.find(fn, this._config.target);
            for (const e of t) {
                if (!e.hash || l(e)) continue;
                const t = Q.findOne(e.hash, this._element);
                a(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(un), this._activateParents(t), P.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(un);
            else
                for (const e of Q.parents(t, ".nav, .list-group"))
                    for (const t of Q.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(un)
        }
        _clearActiveClass(t) {
            t.classList.remove(un);
            const e = Q.find("[href].active", t);
            for (const t of e) t.classList.remove(un)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = mn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    P.on(window, "load.bs.scrollspy.data-api", (() => {
        for (const t of Q.find('[data-bs-spy="scroll"]')) mn.getOrCreateInstance(t)
    })), g(mn);
    const _n = "ArrowLeft",
        bn = "ArrowRight",
        vn = "ArrowUp",
        yn = "ArrowDown",
        wn = "active",
        An = "fade",
        En = "show",
        Tn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Cn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Tn}`;
    class On extends z {
        constructor(t) {
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, "keydown.bs.tab", (t => this._keydown(t))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                i = e ? P.trigger(e, "hide.bs.tab", {
                    relatedTarget: t
                }) : null;
            P.trigger(t, "show.bs.tab", {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
        }
        _activate(t, e) {
            t && (t.classList.add(wn), this._activate(n(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.focus(), t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), P.trigger(t, "shown.bs.tab", {
                    relatedTarget: e
                })) : t.classList.add(En)
            }), t, t.classList.contains(An)))
        }
        _deactivate(t, e) {
            t && (t.classList.remove(wn), t.blur(), this._deactivate(n(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), P.trigger(t, "hidden.bs.tab", {
                    relatedTarget: e
                })) : t.classList.remove(En)
            }), t, t.classList.contains(An)))
        }
        _keydown(t) {
            if (![_n, bn, vn, yn].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = [bn, yn].includes(t.key),
                i = b(this._getChildren().filter((t => !l(t))), t.target, e, !0);
            i && On.getOrCreateInstance(i).show()
        }
        _getChildren() {
            return Q.find(Cn, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = n(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n) => {
                const s = Q.findOne(t, i);
                s && s.classList.toggle(n, e)
            };
            n(".dropdown-toggle", wn), n(".dropdown-menu", En), n(".dropdown-item", wn), i.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
            return t.classList.contains(wn)
        }
        _getInnerElement(t) {
            return t.matches(Cn) ? t : Q.findOne(Cn, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = On.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    P.on(document, "click.bs.tab", Tn, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || On.getOrCreateInstance(this).show()
    })), P.on(window, "load.bs.tab", (() => {
        for (const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) On.getOrCreateInstance(t)
    })), g(On);
    const xn = "hide",
        kn = "show",
        Ln = "showing",
        Dn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Sn = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class In extends z {
        constructor(t, e) {
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get Default() {
            return Sn
        }
        static get DefaultType() {
            return Dn
        }
        static get NAME() {
            return "toast"
        }
        show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(xn), d(this._element), this._element.classList.add(kn, Ln), this._queueCallback((() => {
                this._element.classList.remove(Ln), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }
        hide() {
            this.isShown() && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Ln), this._queueCallback((() => {
                this._element.classList.add(xn), this._element.classList.remove(Ln, kn), P.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(kn), super.dispose()
        }
        isShown() {
            return this._element.classList.contains(kn)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            P.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), P.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), P.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), P.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = In.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    return R(In), g(In), {
        Alert: q,
        Button: K,
        Carousel: at,
        Collapse: pt,
        Dropdown: li,
        Modal: Si,
        Offcanvas: Bi,
        Popover: hn,
        ScrollSpy: mn,
        Tab: On,
        Toast: In,
        Tooltip: an
    }
}));

/*!
 * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
! function(b, a) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : (b = b || self).Headroom = a()
}(this, function() {
    "use strict";

    function b() {
        return "undefined" != typeof window
    }

    function c(a) {
        return a === Object(a) ? a : {
            down: a,
            up: a
        }
    }

    function a(d, b) {
        b = b || {}, Object.assign(this, a.options, b), this.classes = Object.assign({}, a.options.classes, b.classes), this.elem = d, this.tolerance = c(this.tolerance), this.offset = c(this.offset), this.initialised = !1, this.frozen = !1
    }
    return a.prototype = {
        constructor: a,
        init: function() {
            return a.cutsTheMustard && !this.initialised && (this.addClass("initial"), this.initialised = !0, setTimeout(function(a) {
                a.scrollTracker = function(c, n, o) {
                    var p, a, b, q, e, d, f, g, h, i = function() {
                            var b = !1;
                            try {
                                var a = {
                                    get passive() {
                                        b = !0
                                    }
                                };
                                window.addEventListener("test", a, a), window.removeEventListener("test", a, a)
                            } catch (c) {
                                b = !1
                            }
                            return b
                        }(),
                        r = !1,
                        j = (b = a = c) && b.document && 9 === b.document.nodeType ? (f = (d = (e = a).document).body, g = d.documentElement, {
                            scrollHeight: function() {
                                return Math.max(f.scrollHeight, g.scrollHeight, f.offsetHeight, g.offsetHeight, f.clientHeight, g.clientHeight)
                            },
                            height: function() {
                                return e.innerHeight || g.clientHeight || f.clientHeight
                            },
                            scrollY: function() {
                                return void 0 !== e.pageYOffset ? e.pageYOffset : (g || f.parentNode || f).scrollTop
                            }
                        }) : (h = a, {
                            scrollHeight: function() {
                                return Math.max(h.scrollHeight, h.offsetHeight, h.clientHeight)
                            },
                            height: function() {
                                return Math.max(h.offsetHeight, h.clientHeight)
                            },
                            scrollY: function() {
                                return h.scrollTop
                            }
                        }),
                        s = j.scrollY(),
                        t = {};

                    function k() {
                        var a = Math.round(j.scrollY()),
                            b = j.height(),
                            c = j.scrollHeight();
                        t.scrollY = a, t.lastScrollY = s, t.direction = a > s ? "down" : "up", t.distance = Math.abs(a - s), t.isOutOfBounds = a < 0 || a + b > c, t.top = a <= n.offset[t.direction], t.bottom = a + b >= c, t.toleranceExceeded = t.distance > n.tolerance[t.direction], o(t), s = a, r = !1
                    }

                    function l() {
                        r || (r = !0, p = requestAnimationFrame(k))
                    }
                    var m = !!i && {
                        passive: !0,
                        capture: !1
                    };
                    return c.addEventListener("scroll", l, m), k(), {
                        destroy: function() {
                            cancelAnimationFrame(p), c.removeEventListener("scroll", l, m)
                        }
                    }
                }(a.scroller, {
                    offset: a.offset,
                    tolerance: a.tolerance
                }, a.update.bind(a))
            }, 100, this)), this
        },
        destroy: function() {
            this.initialised = !1, Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy()
        },
        unpin: function() {
            (this.hasClass("pinned") || !this.hasClass("unpinned")) && (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this))
        },
        freeze: function() {
            this.frozen = !0, this.addClass("frozen")
        },
        unfreeze: function() {
            this.frozen = !1, this.removeClass("frozen")
        },
        top: function() {
            !this.hasClass("top") && (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            !this.hasClass("notTop") && (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this))
        },
        bottom: function() {
            !this.hasClass("bottom") && (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this))
        },
        notBottom: function() {
            !this.hasClass("notBottom") && (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this))
        },
        shouldUnpin: function(a) {
            return "down" === a.direction && !a.top && a.toleranceExceeded
        },
        shouldPin: function(a) {
            return "up" === a.direction && a.toleranceExceeded || a.top
        },
        addClass: function(a) {
            this.elem.classList.add.apply(this.elem.classList, this.classes[a].split(" "))
        },
        removeClass: function(a) {
            this.elem.classList.remove.apply(this.elem.classList, this.classes[a].split(" "))
        },
        hasClass: function(a) {
            return this.classes[a].split(" ").every(function(a) {
                return this.classList.contains(a)
            }, this.elem)
        },
        update: function(a) {
            !a.isOutOfBounds && !0 !== this.frozen && (a.top ? this.top() : this.notTop(), a.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(a) ? this.unpin() : this.shouldPin(a) && this.pin())
        }
    }, a.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        scroller: b() ? window : null,
        classes: {
            frozen: "headroom--frozen",
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            bottom: "headroom--bottom",
            notBottom: "headroom--not-bottom",
            initial: "headroom"
        }
    }, a.cutsTheMustard = !!(b() && (function() {}).bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame), a
}),
function($) {
    $ && ($.fn.headroom = function(a) {
        return this.each(function() {
            var c = $(this),
                b = c.data("headroom"),
                d = "object" == typeof a && a;
            d = $.extend(!0, {}, Headroom.options, d), b || ((b = new Headroom(this, d)).init(), c.data("headroom", b)), "string" == typeof a && (b[a](), "destroy" === a && c.removeData("headroom"))
        })
    }, $("[data-headroom]").each(function() {
        var a = $(this);
        a.headroom(a.data())
    }))
}(window.Zepto || window.jQuery)

/*!
 * Jarallax v2.0.4 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).jarallax = t()
}(this, (function() {
    "use strict";

    function e(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e, {
            capture: !0,
            once: !0,
            passive: !0
        })
    }
    let t;
    t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    var i = t;
    const {
        navigator: o
    } = i, n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o.userAgent);
    let a, s;

    function l() {
        n ? (!a && document.body && (a = document.createElement("div"), a.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(a)), s = (a ? a.clientHeight : 0) || i.innerHeight || document.documentElement.clientHeight) : s = i.innerHeight || document.documentElement.clientHeight
    }
    l(), i.addEventListener("resize", l), i.addEventListener("orientationchange", l), i.addEventListener("load", l), e((() => {
        l()
    }));
    const r = [];

    function m() {
        r.length && (r.forEach(((e, t) => {
            const {
                instance: o,
                oldData: n
            } = e, a = o.$item.getBoundingClientRect(), l = {
                width: a.width,
                height: a.height,
                top: a.top,
                bottom: a.bottom,
                wndW: i.innerWidth,
                wndH: s
            }, m = !n || n.wndW !== l.wndW || n.wndH !== l.wndH || n.width !== l.width || n.height !== l.height, c = m || !n || n.top !== l.top || n.bottom !== l.bottom;
            r[t].oldData = l, m && o.onResize(), c && o.onScroll()
        })), i.requestAnimationFrame(m))
    }
    let c = 0;
    class p {
        constructor(e, t) {
            const i = this;
            i.instanceID = c, c += 1, i.$item = e, i.defaults = {
                type: "scroll",
                speed: .5,
                imgSrc: null,
                imgElement: ".jarallax-img",
                imgSize: "cover",
                imgPosition: "50% 50%",
                imgRepeat: "no-repeat",
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                disableParallax: !1,
                disableVideo: !1,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoLoop: !0,
                videoPlayOnlyVisible: !0,
                videoLazyLoading: !0,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            const n = i.$item.dataset || {},
                a = {};
            if (Object.keys(n).forEach((e => {
                    const t = e.substr(0, 1).toLowerCase() + e.substr(1);
                    t && void 0 !== i.defaults[t] && (a[t] = n[e])
                })), i.options = i.extend({}, i.defaults, a, t), i.pureOptions = i.extend({}, i.options), Object.keys(i.options).forEach((e => {
                    "true" === i.options[e] ? i.options[e] = !0 : "false" === i.options[e] && (i.options[e] = !1)
                })), i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))), "string" == typeof i.options.disableParallax && (i.options.disableParallax = new RegExp(i.options.disableParallax)), i.options.disableParallax instanceof RegExp) {
                const e = i.options.disableParallax;
                i.options.disableParallax = () => e.test(o.userAgent)
            }
            if ("function" != typeof i.options.disableParallax && (i.options.disableParallax = () => !1), "string" == typeof i.options.disableVideo && (i.options.disableVideo = new RegExp(i.options.disableVideo)), i.options.disableVideo instanceof RegExp) {
                const e = i.options.disableVideo;
                i.options.disableVideo = () => e.test(o.userAgent)
            }
            "function" != typeof i.options.disableVideo && (i.options.disableVideo = () => !1);
            let s = i.options.elementInViewport;
            s && "object" == typeof s && void 0 !== s.length && ([s] = s), s instanceof Element || (s = null), i.options.elementInViewport = s, i.image = {
                src: i.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: "fixed"
            }, i.initImg() && i.canInitParallax() && i.init()
        }
        css(e, t) {
            return "string" == typeof t ? i.getComputedStyle(e).getPropertyValue(t) : (Object.keys(t).forEach((i => {
                e.style[i] = t[i]
            })), e)
        }
        extend(e, ...t) {
            return e = e || {}, Object.keys(t).forEach((i => {
                t[i] && Object.keys(t[i]).forEach((o => {
                    e[o] = t[i][o]
                }))
            })), e
        }
        getWindowData() {
            return {
                width: i.innerWidth || document.documentElement.clientWidth,
                height: s,
                y: document.documentElement.scrollTop
            }
        }
        initImg() {
            const e = this;
            let t = e.options.imgElement;
            return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image, t.src = e.options.imgSrc) : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage))
        }
        canInitParallax() {
            return !this.options.disableParallax()
        }
        init() {
            const e = this,
                t = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                };
            let o = {
                pointerEvents: "none",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
            };
            if (!e.options.keepImg) {
                const t = e.$item.getAttribute("style");
                if (t && e.$item.setAttribute("data-jarallax-original-styles", t), e.image.useImgTag) {
                    const t = e.image.$item.getAttribute("style");
                    t && e.image.$item.setAttribute("data-jarallax-original-styles", t)
                }
            }
            if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                    position: "relative"
                }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                    zIndex: 0
                }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                    "z-index": e.options.zIndex
                }), "fixed" === this.image.position && e.css(e.image.$container, {
                    "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                }), e.image.$container.setAttribute("id", `jarallax-container-${e.instanceID}`), e.$item.appendChild(e.image.$container), e.image.useImgTag ? o = e.extend({
                    "object-fit": e.options.imgSize,
                    "object-position": e.options.imgPosition,
                    "max-width": "none"
                }, t, o) : (e.image.$item = document.createElement("div"), e.image.src && (o = e.extend({
                    "background-position": e.options.imgPosition,
                    "background-size": e.options.imgSize,
                    "background-repeat": e.options.imgRepeat,
                    "background-image": e.image.bgImage || `url("${e.image.src}")`
                }, t, o))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) {
                const t = function(e) {
                    const t = [];
                    for (; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                    return t
                }(e.$item).filter((e => {
                    const t = i.getComputedStyle(e),
                        o = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                    return o && "none" !== o || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                }));
                e.image.position = t.length ? "absolute" : "fixed"
            }
            o.position = e.image.position, e.css(e.image.$item, o), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                "background-image": "none"
            }), e.addToParallaxList()
        }
        addToParallaxList() {
            r.push({
                instance: this
            }), 1 === r.length && i.requestAnimationFrame(m)
        }
        removeFromParallaxList() {
            const e = this;
            r.forEach(((t, i) => {
                t.instance.instanceID === e.instanceID && r.splice(i, 1)
            }))
        }
        destroy() {
            const e = this;
            e.removeFromParallaxList();
            const t = e.$item.getAttribute("data-jarallax-original-styles");
            if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                const i = e.image.$item.getAttribute("data-jarallax-original-styles");
                e.image.$item.removeAttribute("data-jarallax-original-styles"), i ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
            }
            e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
        }
        clipContainer() {}
        coverImage() {
            const e = this,
                t = e.image.$container.getBoundingClientRect(),
                i = t.height,
                {
                    speed: o
                } = e.options,
                n = "scroll" === e.options.type || "scroll-opacity" === e.options.type;
            let a = 0,
                l = i,
                r = 0;
            return n && (0 > o ? (a = o * Math.max(i, s), s < i && (a -= o * (i - s))) : a = o * (i + s), 1 < o ? l = Math.abs(a - s) : 0 > o ? l = a / o + Math.abs(a) : l += (s - i) * (1 - o), a /= 2), e.parallaxScrollDistance = a, r = n ? (s - l) / 2 : (i - l) / 2, e.css(e.image.$item, {
                height: `${l}px`,
                marginTop: `${r}px`,
                left: "fixed" === e.image.position ? `${t.left}px` : "0",
                width: `${t.width}px`
            }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                image: {
                    height: l,
                    marginTop: r
                },
                container: t
            }
        }
        isVisible() {
            return this.isElementInViewport || !1
        }
        onScroll(e) {
            const t = this,
                o = t.$item.getBoundingClientRect(),
                n = o.top,
                a = o.height,
                l = {};
            let r = o;
            if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= s && r.left <= i.innerWidth, !e && !t.isElementInViewport) return;
            const m = Math.max(0, n),
                c = Math.max(0, a + n),
                p = Math.max(0, -n),
                d = Math.max(0, n + a - s),
                g = Math.max(0, a - (n + a - s)),
                u = Math.max(0, -n + s - a),
                f = 1 - (s - n) / (s + a) * 2;
            let h = 1;
            if (a < s ? h = 1 - (p || d) / a : c <= s ? h = c / s : g <= s && (h = g / s), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (l.transform = "translate3d(0,0,0)", l.opacity = h), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                let e = 1;
                0 > t.options.speed ? e -= t.options.speed * h : e += t.options.speed * (1 - h), l.transform = `scale(${e}) translate3d(0,0,0)`
            }
            if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                let e = t.parallaxScrollDistance * f;
                "absolute" === t.image.position && (e -= n), l.transform = `translate3d(0,${e}px,0)`
            }
            t.css(t.image.$item, l), t.options.onScroll && t.options.onScroll.call(t, {
                section: o,
                beforeTop: m,
                beforeTopEnd: c,
                afterTop: p,
                beforeBottom: d,
                beforeBottomEnd: g,
                afterBottom: u,
                visiblePercent: h,
                fromViewportCenter: f
            })
        }
        onResize() {
            this.coverImage()
        }
    }
    const d = function(e, t, ...i) {
        ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        const o = e.length;
        let n, a = 0;
        for (; a < o; a += 1)
            if ("object" == typeof t || void 0 === t ? e[a].jarallax || (e[a].jarallax = new p(e[a], t)) : e[a].jarallax && (n = e[a].jarallax[t].apply(e[a].jarallax, i)), void 0 !== n) return n;
        return e
    };
    d.constructor = p;
    const g = i.jQuery;
    if (void 0 !== g) {
        const e = function(...e) {
            Array.prototype.unshift.call(e, this);
            const t = d.apply(i, e);
            return "object" != typeof t ? t : this
        };
        e.constructor = d.constructor;
        const t = g.fn.jarallax;
        g.fn.jarallax = e, g.fn.jarallax.noConflict = function() {
            return g.fn.jarallax = t, this
        }
    }
    return e((() => {
        d(document.querySelectorAll("[data-jarallax]"))
    })), d
}));

/*!
 * Video Extension for Jarallax v2.0.4 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).jarallaxVideo = t()
}(this, function() {
    "use strict";
    /*!
     * Name    : Video Worker
     * Version : 2.0.0
     * Author  : nK <https://nkdev.info>
     * GitHub  : https://github.com/nk-o/video-worker
     */
    let e;
    var t, i = e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function o() {
        this.doneCallbacks = [], this.failCallbacks = []
    }
    o.prototype = {
        execute(e, t) {
            let i = e.length;
            for (t = Array.prototype.slice.call(t); i;) e[i -= 1].apply(null, t)
        },
        resolve(...e) {
            this.execute(this.doneCallbacks, e)
        },
        reject(...e) {
            this.execute(this.failCallbacks, e)
        },
        done(e) {
            this.doneCallbacks.push(e)
        },
        fail(e) {
            this.failCallbacks.push(e)
        }
    };
    let a = 0,
        l = 0,
        r = 0,
        s = 0,
        n = 0,
        p = new o,
        d = new o;
    class u {
        constructor(e, t) {
            let i = this;
            i.url = e, i.options_default = {
                autoplay: !1,
                loop: !1,
                mute: !1,
                volume: 100,
                showControls: !0,
                accessibilityHidden: !1,
                startTime: 0,
                endTime: 0
            }, i.options = i.extend({}, i.options_default, t), void 0 !== i.options.showContols && (i.options.showControls = i.options.showContols, delete i.options.showContols), i.videoID = i.parseURL(e), i.videoID && (i.ID = a, a += 1, i.loadAPI(), i.init())
        }
        extend(...e) {
            let t = e[0] || {};
            return Object.keys(e).forEach(i => {
                e[i] && Object.keys(e[i]).forEach(o => {
                    t[o] = e[i][o]
                })
            }), t
        }
        parseURL(e) {
            let t = function e(t) {
                    let i = t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
                    return !!i && 11 === i[1].length && i[1]
                }(e),
                i = function e(t) {
                    let i = t.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
                    return !!i && !!i[3] && i[3]
                }(e),
                o = function e(t) {
                    let i = t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),
                        o = {},
                        a = 0;
                    return i.forEach(e => {
                        let t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                        t && t[1] && t[2] && (o["ogv" === t[1] ? "ogg" : t[1]] = t[2], a = 1)
                    }), !!a && o
                }(e);
            return t ? (this.type = "youtube", t) : i ? (this.type = "vimeo", i) : !!o && (this.type = "local", o)
        }
        isValid() {
            return !!this.videoID
        }
        on(e, t) {
            this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
        }
        off(e, t) {
            this.userEventsList && this.userEventsList[e] && (t ? this.userEventsList[e].forEach((i, o) => {
                i === t && (this.userEventsList[e][o] = !1)
            }) : delete this.userEventsList[e])
        }
        fire(e, ...t) {
            this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(e => {
                e && e.apply(this, t)
            })
        }
        play(e) {
            let t = this;
            t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), i.YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(e => {
                e && t.player.play()
            })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()))
        }
        pause() {
            let e = this;
            e.player && ("youtube" === e.type && e.player.pauseVideo && i.YT.PlayerState.PLAYING === e.player.getPlayerState() && e.player.pauseVideo(), "vimeo" === e.type && e.player.getPaused().then(t => {
                t || e.player.pause()
            }), "local" !== e.type || e.player.paused || e.player.pause())
        }
        mute() {
            let e = this;
            e.player && ("youtube" === e.type && e.player.mute && e.player.mute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(0), "local" === e.type && (e.$video.muted = !0))
        }
        unmute() {
            let e = this;
            e.player && ("youtube" === e.type && e.player.mute && e.player.unMute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(e.options.volume), "local" === e.type && (e.$video.muted = !1))
        }
        setVolume(e = !1) {
            let t = this;
            t.player && e && ("youtube" === t.type && t.player.setVolume && t.player.setVolume(e), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(e), "local" === t.type && (t.$video.volume = e / 100))
        }
        getVolume(e) {
            if (!this.player) {
                e(!1);
                return
            }
            "youtube" === this.type && this.player.getVolume && e(this.player.getVolume()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(t => {
                e(t)
            }), "local" === this.type && e(100 * this.$video.volume)
        }
        getMuted(e) {
            if (!this.player) {
                e(null);
                return
            }
            "youtube" === this.type && this.player.isMuted && e(this.player.isMuted()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(t => {
                e(!!t)
            }), "local" === this.type && e(this.$video.muted)
        }
        getImageURL(e) {
            let t = this;
            if (t.videoImage) {
                e(t.videoImage);
                return
            }
            if ("youtube" === t.type) {
                let i = ["maxresdefault", "sddefault", "hqdefault", "0"],
                    o = 0,
                    a = new Image;
                a.onload = function() {
                    120 !== (this.naturalWidth || this.width) || o === i.length - 1 ? (t.videoImage = `https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`, e(t.videoImage)) : (o += 1, this.src = `https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`)
                }, a.src = `https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`
            }
            if ("vimeo" === t.type) {
                let l = new XMLHttpRequest;
                l.open("GET", `https://vimeo.com/api/oembed.json?url=${t.url}`, !0), l.onreadystatechange = function() {
                    if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                        let i = JSON.parse(this.responseText);
                        i.thumbnail_url && (t.videoImage = i.thumbnail_url, e(t.videoImage))
                    }
                }, l.send(), l = null
            }
        }
        getIframe(e) {
            this.getVideo(e)
        }
        getVideo(e) {
            let t = this;
            if (t.$video) {
                e(t.$video);
                return
            }
            t.onAPIready(() => {
                let o;
                if (t.$video || ((o = document.createElement("div")).style.display = "none"), "youtube" === t.type) {
                    t.playerOptions = {
                        host: "https://www.youtube-nocookie.com",
                        videoId: t.videoID,
                        playerVars: {
                            autohide: 1,
                            rel: 0,
                            autoplay: 0,
                            playsinline: 1
                        }
                    }, t.options.showControls || (t.playerOptions.playerVars.iv_load_policy = 3, t.playerOptions.playerVars.modestbranding = 1, t.playerOptions.playerVars.controls = 0, t.playerOptions.playerVars.showinfo = 0, t.playerOptions.playerVars.disablekb = 1);
                    let a, l;
                    t.playerOptions.events = {
                        onReady(e) {
                            t.options.mute ? e.target.mute() : t.options.volume && e.target.setVolume(t.options.volume), t.options.autoplay && t.play(t.options.startTime), t.fire("ready", e), t.options.loop && !t.options.endTime && (t.options.endTime = t.player.getDuration() - .1), setInterval(() => {
                                t.getVolume(i => {
                                    t.options.volume !== i && (t.options.volume = i, t.fire("volumechange", e))
                                })
                            }, 150)
                        },
                        onStateChange(e) {
                            t.options.loop && e.data === i.YT.PlayerState.ENDED && t.play(t.options.startTime), a || e.data !== i.YT.PlayerState.PLAYING || (a = 1, t.fire("started", e)), e.data === i.YT.PlayerState.PLAYING && t.fire("play", e), e.data === i.YT.PlayerState.PAUSED && t.fire("pause", e), e.data === i.YT.PlayerState.ENDED && t.fire("ended", e), e.data === i.YT.PlayerState.PLAYING ? l = setInterval(() => {
                                t.fire("timeupdate", e), t.options.endTime && t.player.getCurrentTime() >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            }, 150) : clearInterval(l)
                        },
                        onError(e) {
                            t.fire("error", e)
                        }
                    };
                    let r = !t.$video;
                    if (r) {
                        let s = document.createElement("div");
                        s.setAttribute("id", t.playerID), o.appendChild(s), document.body.appendChild(o)
                    }
                    t.player = t.player || new i.YT.Player(t.playerID, t.playerOptions), r && (t.$video = document.getElementById(t.playerID), t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"), t.$video.setAttribute("aria-hidden", "true")), t.videoWidth = parseInt(t.$video.getAttribute("width"), 10) || 1280, t.videoHeight = parseInt(t.$video.getAttribute("height"), 10) || 720)
                }
                if ("vimeo" === t.type) {
                    if (t.playerOptions = {
                            dnt: 1,
                            id: t.videoID,
                            autopause: 0,
                            transparent: 0,
                            autoplay: t.options.autoplay ? 1 : 0,
                            loop: t.options.loop ? 1 : 0,
                            muted: t.options.mute ? 1 : 0
                        }, t.options.volume && (t.playerOptions.volume = t.options.volume), t.options.showControls || (t.playerOptions.badge = 0, t.playerOptions.byline = 0, t.playerOptions.portrait = 0, t.playerOptions.title = 0, t.playerOptions.background = 1), !t.$video) {
                        let n = "";
                        Object.keys(t.playerOptions).forEach(e => {
                            "" !== n && (n += "&"), n += `${e}=${encodeURIComponent(t.playerOptions[e])}`
                        }), t.$video = document.createElement("iframe"), t.$video.setAttribute("id", t.playerID), t.$video.setAttribute("src", `https://player.vimeo.com/video/${t.videoID}?${n}`), t.$video.setAttribute("frameborder", "0"), t.$video.setAttribute("mozallowfullscreen", ""), t.$video.setAttribute("allowfullscreen", ""), t.$video.setAttribute("title", "Vimeo video player"), t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"), t.$video.setAttribute("aria-hidden", "true")), o.appendChild(t.$video), document.body.appendChild(o)
                    }
                    t.player = t.player || new i.Vimeo.Player(t.$video, t.playerOptions), t.options.startTime && t.options.autoplay && t.player.setCurrentTime(t.options.startTime), t.player.getVideoWidth().then(e => {
                        t.videoWidth = e || 1280
                    }), t.player.getVideoHeight().then(e => {
                        t.videoHeight = e || 720
                    });
                    let p;
                    t.player.on("timeupdate", e => {
                        p || (t.fire("started", e), p = 1), t.fire("timeupdate", e), t.options.endTime && t.options.endTime && e.seconds >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                    }), t.player.on("play", e => {
                        t.fire("play", e), t.options.startTime && 0 === e.seconds && t.play(t.options.startTime)
                    }), t.player.on("pause", e => {
                        t.fire("pause", e)
                    }), t.player.on("ended", e => {
                        t.fire("ended", e)
                    }), t.player.on("loaded", e => {
                        t.fire("ready", e)
                    }), t.player.on("volumechange", e => {
                        t.fire("volumechange", e)
                    }), t.player.on("error", e => {
                        t.fire("error", e)
                    })
                }
                if ("local" === t.type) {
                    t.$video || (t.$video = document.createElement("video"), t.options.showControls && (t.$video.controls = !0), t.options.mute ? t.$video.muted = !0 : t.$video.volume && (t.$video.volume = t.options.volume / 100), t.options.loop && (t.$video.loop = !0), t.$video.setAttribute("playsinline", ""), t.$video.setAttribute("muted", "muted"), t.$video.setAttribute("webkit-playsinline", ""), t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"), t.$video.setAttribute("aria-hidden", "true")), t.$video.setAttribute("id", t.playerID), o.appendChild(t.$video), document.body.appendChild(o), Object.keys(t.videoID).forEach(e => {
                        ! function e(t, i, o) {
                            let a = document.createElement("source");
                            a.src = i, a.type = o, t.appendChild(a)
                        }(t.$video, t.videoID[e], `video/${e}`)
                    })), t.player = t.player || t.$video;
                    let d;
                    t.player.addEventListener("playing", e => {
                        d || t.fire("started", e), d = 1
                    }), t.player.addEventListener("timeupdate", function(e) {
                        t.fire("timeupdate", e), t.options.endTime && t.options.endTime && this.currentTime >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                    }), t.player.addEventListener("play", e => {
                        t.fire("play", e)
                    }), t.player.addEventListener("pause", e => {
                        t.fire("pause", e)
                    }), t.player.addEventListener("ended", e => {
                        t.fire("ended", e)
                    }), t.player.addEventListener("loadedmetadata", function() {
                        t.videoWidth = this.videoWidth || 1280, t.videoHeight = this.videoHeight || 720, t.fire("ready"), t.options.autoplay && t.play(t.options.startTime)
                    }), t.player.addEventListener("volumechange", e => {
                        t.getVolume(e => {
                            t.options.volume = e
                        }), t.fire("volumechange", e)
                    }), t.player.addEventListener("error", e => {
                        t.fire("error", e)
                    })
                }
                e(t.$video)
            })
        }
        init() {
            let e = this;
            e.playerID = `VideoWorker-${e.ID}`
        }
        loadAPI() {
            if (l && r) return;
            let e = "";
            if ("youtube" !== this.type || l || (l = 1, e = "https://www.youtube.com/iframe_api"), "vimeo" === this.type && !r) {
                if (r = 1, void 0 !== i.Vimeo) return;
                e = "https://player.vimeo.com/api/player.js"
            }
            if (!e) return;
            let t = document.createElement("script"),
                o = document.getElementsByTagName("head")[0];
            t.src = e, o.appendChild(t), o = null, t = null
        }
        onAPIready(e) {
            if ("youtube" === this.type && (void 0 !== i.YT && 0 !== i.YT.loaded || s ? "object" == typeof i.YT && 1 === i.YT.loaded ? e() : p.done(() => {
                    e()
                }) : (s = 1, i.onYouTubeIframeAPIReady = function() {
                    i.onYouTubeIframeAPIReady = null, p.resolve("done"), e()
                })), "vimeo" === this.type) {
                if (void 0 !== i.Vimeo || n) void 0 !== i.Vimeo ? e() : d.done(() => {
                    e()
                });
                else {
                    n = 1;
                    let t = setInterval(() => {
                        void 0 !== i.Vimeo && (clearInterval(t), d.resolve("done"), e())
                    }, 20)
                }
            }
            "local" === this.type && e()
        }
    }
    let y;
    var m = y = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function v(e = m.jarallax) {
        if (void 0 === e) return;
        let t = e.constructor,
            i = t.prototype.onScroll;
        t.prototype.onScroll = function() {
            let e = this;
            i.apply(e);
            let t = !e.isVideoInserted && e.video && (!e.options.videoLazyLoading || e.isElementInViewport) && !e.options.disableVideo();
            t && (e.isVideoInserted = !0, e.video.getVideo(t => {
                let i = t.parentNode;
                e.css(t, {
                    position: e.image.position,
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    maxWidth: "none",
                    maxHeight: "none",
                    pointerEvents: "none",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    margin: 0,
                    zIndex: -1
                }), e.$video = t, "local" === e.video.type && (e.image.src ? e.$video.setAttribute("poster", e.image.src) : e.image.$item && "IMG" === e.image.$item.tagName && e.image.$item.src && e.$video.setAttribute("poster", e.image.$item.src)), e.image.$container.appendChild(t), i.parentNode.removeChild(i), e.options.onVideoInsert && e.options.onVideoInsert.call(e)
            }))
        };
        let o = t.prototype.coverImage;
        t.prototype.coverImage = function() {
            let e = o.apply(this),
                t = !!this.image.$item && this.image.$item.nodeName;
            if (e && this.video && t && ("IFRAME" === t || "VIDEO" === t)) {
                let i = e.image.height,
                    a = i * this.image.width / this.image.height,
                    l = (e.container.width - a) / 2,
                    r = e.image.marginTop;
                e.container.width > a && (i = (a = e.container.width) * this.image.height / this.image.width, l = 0, r += (e.image.height - i) / 2), "IFRAME" === t && (i += 400, r -= 200), this.css(this.$video, {
                    width: `${a}px`,
                    marginLeft: `${l}px`,
                    height: `${i}px`,
                    marginTop: `${r}px`
                })
            }
            return e
        };
        let a = t.prototype.initImg;
        t.prototype.initImg = function() {
            let e = this,
                t = a.apply(e);
            return (e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || null), e.options.videoSrc) ? (e.defaultInitImgResult = t, !0) : t
        };
        let l = t.prototype.canInitParallax;
        t.prototype.canInitParallax = function() {
            let e = this,
                t = l.apply(e);
            if (!e.options.videoSrc) return t;
            let i = new u(e.options.videoSrc, {
                autoplay: !0,
                loop: e.options.videoLoop,
                showControls: !1,
                accessibilityHidden: !0,
                startTime: e.options.videoStartTime || 0,
                endTime: e.options.videoEndTime || 0,
                mute: e.options.videoVolume ? 0 : 1,
                volume: e.options.videoVolume || 0
            });

            function o() {
                e.image.$default_item && (e.image.$item = e.image.$default_item, e.image.$item.style.display = "block", e.coverImage(), e.onScroll())
            }
            if (e.options.onVideoWorkerInit && e.options.onVideoWorkerInit.call(e, i), i.isValid()) {
                if (this.options.disableParallax() && (t = !0, e.image.position = "absolute", e.options.type = "scroll", e.options.speed = 1), t) {
                    if (i.on("ready", () => {
                            if (e.options.videoPlayOnlyVisible) {
                                let t = e.onScroll;
                                e.onScroll = function() {
                                    t.apply(e), e.videoError || !e.options.videoLoop && (e.options.videoLoop || e.videoEnded) || (e.isVisible() ? i.play() : i.pause())
                                }
                            } else i.play()
                        }), i.on("started", () => {
                            e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.video.videoWidth || 1280, e.image.height = e.video.videoHeight || 720, e.coverImage(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                        }), i.on("ended", () => {
                            e.videoEnded = !0, e.options.videoLoop || o()
                        }), i.on("error", () => {
                            e.videoError = !0, o()
                        }), e.video = i, !e.defaultInitImgResult && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "local" !== i.type)) return i.getImageURL(t => {
                        e.image.bgImage = `url("${t}")`, e.init()
                    }), !1
                } else e.defaultInitImgResult || i.getImageURL(t => {
                    let i = e.$item.getAttribute("style");
                    i && e.$item.setAttribute("data-jarallax-original-styles", i), e.css(e.$item, {
                        "background-image": `url("${t}")`,
                        "background-position": "center",
                        "background-size": "cover"
                    })
                })
            }
            return t
        };
        let r = t.prototype.destroy;
        t.prototype.destroy = function() {
            let e = this;
            e.image.$default_item && (e.image.$item = e.image.$default_item, delete e.image.$default_item), r.apply(e)
        }
    }
    return v(), t = () => {
        void 0 !== m.jarallax && m.jarallax(document.querySelectorAll("[data-jarallax-video]"))
    }, "complete" === document.readyState || "interactive" === document.readyState ? t() : document.addEventListener("DOMContentLoaded", t, {
        capture: !0,
        once: !0,
        passive: !0
    }), m.VideoWorker || (m.VideoWorker = u), v
});
/*!
 * Elements Extension for Jarallax.
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).jarallaxElement = e()
}(this, function() {
    "use strict";
    let t;
    var e, i = t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function o(t = i.jarallax) {
        if (void 0 === t) return;
        let e = t.constructor;
        ["initImg", "canInitParallax", "init", "destroy", "coverImage", "isVisible", "onScroll", "onResize"].forEach(t => {
            let i = e.prototype[t];
            e.prototype[t] = function(...e) {
                let o = this;
                if ("initImg" === t && null !== o.$item.getAttribute("data-jarallax-element") && (o.options.type = "element", o.pureOptions.speed = o.$item.getAttribute("data-jarallax-element") || "100"), "element" !== o.options.type) return i.apply(o, e);
                switch (o.pureOptions.threshold = o.$item.getAttribute("data-threshold") || "", t) {
                    case "init":
                        {
                            let n = `${o.pureOptions.speed}`.split(" ");o.options.speed = o.pureOptions.speed || 0,
                            o.options.speedY = n[0] ? parseFloat(n[0]) : 0,
                            o.options.speedX = n[1] ? parseFloat(n[1]) : 0;
                            let a = o.pureOptions.threshold.split(" ");o.options.thresholdY = a[0] ? parseFloat(a[0]) : null,
                            o.options.thresholdX = a[1] ? parseFloat(a[1]) : null,
                            i.apply(o, e);
                            let s = o.$item.getAttribute("data-jarallax-original-styles");
                            return s && o.$item.setAttribute("style", s),
                            !0
                        }
                    case "onResize":
                        {
                            let l = o.css(o.$item, "transform");o.css(o.$item, {
                                transform: ""
                            });
                            let r = o.$item.getBoundingClientRect();o.itemData = {
                                width: r.width,
                                height: r.height,
                                y: r.top + o.getWindowData().y,
                                x: r.left
                            },
                            o.css(o.$item, {
                                transform: l
                            });
                            break
                        }
                    case "onScroll":
                        {
                            let p = o.getWindowData(),
                                d = (p.y + p.height / 2 - o.itemData.y - o.itemData.height / 2) / (p.height / 2),
                                u = d * o.options.speedY,
                                h = d * o.options.speedX,
                                c = u,
                                m = h;null !== o.options.thresholdY && u > o.options.thresholdY && (c = 0),
                            null !== o.options.thresholdX && h > o.options.thresholdX && (m = 0),
                            o.css(o.$item, {
                                transform: `translate3d(${m}px,${c}px,0)`
                            });
                            break
                        }
                    case "initImg":
                    case "isVisible":
                    case "coverImage":
                        return !0
                }
                return i.apply(o, e)
            }
        })
    }
    return o(), e = () => {
        void 0 !== i.jarallax && i.jarallax(document.querySelectorAll("[data-jarallax-element]"))
    }, "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e, {
        capture: !0,
        once: !0,
        passive: !0
    }), o
});
/*!
 * GSAP 3.11.0
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "function" == typeof t
    }

    function t(t) {
        return "number" == typeof t
    }

    function u(t) {
        return void 0 === t
    }

    function v(t) {
        return "object" == typeof t
    }

    function w(t) {
        return !1 !== t
    }

    function x() {
        return "undefined" != typeof window
    }

    function y(t) {
        return s(t) || r(t)
    }

    function P(t) {
        return (i = vt(t, ot)) && Ce
    }

    function Q(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function R(t, e) {
        return !e && console.warn(t)
    }

    function S(t, e) {
        return t && (ot[t] = e) && i && (i[t] = e) || ot
    }

    function T() {
        return 0
    }

    function da(t) {
        var e, r, i = t[0];
        if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = mt.length; r-- && !mt[r].targetTest(i););
            e = mt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Yt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function ea(t) {
        return t._gsap || da(Ot(t))[0]._gsap
    }

    function fa(t, e, r) {
        return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function ga(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ha(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ia(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ja(t, e) {
        var r = e.charAt(0),
            i = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }

    function ka(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function la() {
        var t, e, r = ft.length,
            i = ft.slice(0);
        for (ct = {}, t = ft.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function ma(t, e, r, i) {
        ft.length && la(), t.render(e, r, i || I), ft.length && la()
    }

    function na(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
    }

    function oa(t) {
        return t
    }

    function pa(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function sa(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? sa(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function ta(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function ua(t) {
        var e = t.parent || B,
            r = t.keyframes ? function _setKeyframeDefaults(i) {
                return function(t, e) {
                    for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
                }
            }(K(t.keyframes)) : pa;
        if (w(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function wa(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
    }

    function xa(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function ya(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function za(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function Ba(t, e, r, i) {
        return t._startAt && (I ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }

    function Da(t) {
        return t._repeat ? yt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function Fa(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Ga(t) {
        return t._end = ia(t._start + (t._tDur / Math.abs(t._ts || t._rts || q) || 0))
    }

    function Ha(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ia(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ga(t), r._dirty || za(r, t)), t
    }

    function Ia(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = Fa(t.rawTime(), e), (!e._dur || xt(0, e.totalDuration(), r) - e._tTime > q) && e.render(r, !0)), za(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -q
        }
    }

    function Ja(e, r, i, n) {
        return r.parent && ya(r), r._start = ia((t(i) ? i : i || e !== B ? wt(e, i, r) : e._time) + r._delay), r._end = ia(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), wa(e, r, "_first", "_last", e._sort ? "_start" : 0), Tt(r) || (e._recent = r), n || Ia(e, r), e._ts < 0 && Ha(e, e._tTime), e
    }

    function Ka(t, e) {
        return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function La(t, e, r, i) {
        return jt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== zt.frame ? (ft.push(t), t._lazy = [e, i], 1) : void 0 : 1
    }

    function Qa(t, e, r, i) {
        var n = t._repeat,
            a = ia(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ia(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Ha(t, t._tTime = t._tDur * s) : t.parent && Ga(t), r || za(t.parent, t), t
    }

    function Ra(t) {
        return t instanceof Qt ? za(t) : Qa(t, t._dur)
    }

    function Ua(e, r, i) {
        var n, a, s = t(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
            u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new $t(r[0], u, r[1 + o])
    }

    function Va(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Xa(t, e) {
        return r(t) && (e = st.exec(t)) ? e[1] : ""
    }

    function $a(t, e) {
        return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
    }

    function bb(r) {
        return r = Ot(r)[0] || R("Invalid scope") || {},
            function(t) {
                var e = r.current || r.nativeElement || r;
                return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
            }
    }

    function cb(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function db(t) {
        if (s(t)) return t;
        var p = v(t) ? t : {
                each: t
            },
            _ = Lt(p.ease),
            m = p.from || 0,
            g = parseFloat(p.base) || 0,
            y = {},
            e = 0 < m && m < 1,
            T = isNaN(m) || e,
            b = p.axis,
            w = m,
            x = m;
        return r(m) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            }[m] || 0 : !e && T && (w = m[0], x = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, c = (r || p).length,
                    d = y[c];
                if (!d) {
                    if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, N])[1])) {
                        for (h = -N; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
                        f--
                    }
                    for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === N ? 0 : T ? c * x / f - .5 : m / f | 0, l = N, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : H(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === m && cb(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Xa(p.amount || p.each) || 0, _ = _ && c < 0 ? Bt(_) : _
                }
                return c = (d[t] - d.min) / d.max || 0, ia(d.b + (_ ? _(c) : c) * d.v) + d.u
            }
    }

    function eb(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function(e) {
            var r = ia(Math.round(parseFloat(e) / i) * i * n);
            return (r - r % 1) / n + (t(e) ? 0 : Xa(e))
        }
    }

    function fb(h, e) {
        var l, f, r = K(h);
        return !r && v(h) && (l = r = h.radius || N, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = eb(h.increment)), Va(e, r ? s(h) ? function(t) {
            return f = h(t), Math.abs(f - t) <= l ? f : t
        } : function(e) {
            for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = N, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
            return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Xa(e)
        } : eb(h))
    }

    function gb(t, e, r, i) {
        return Va(K(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return K(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function kb(e, r, t) {
        return Va(t, function(t) {
            return e[~~r(t)]
        })
    }

    function nb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + gb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function qb(t, e, r) {
        var i, n, a, s = t.labels,
            o = N;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function sb(t) {
        return ya(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Pt(t, "onInterrupt"), t
    }

    function xb(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ct + .5 | 0
    }

    function yb(e, r, i) {
        var n, a, s, o, u, h, l, f, c, d, p = e ? t(e) ? [e >> 16, e >> 8 & Ct, e & Ct] : 0 : St.black;
        if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), St[e]) p = St[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & Ct, p & Ct, parseInt(e.substr(7), 16) / 255];
                p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & Ct, e & Ct]
            } else if ("hsl" === e.substr(0, 3))
                if (p = d = e.match(tt), r) {
                    if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
                } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = xb(o + 1 / 3, n, a), p[1] = xb(o, n, a), p[2] = xb(o - 1 / 3, n, a);
            else p = e.match(tt) || St.transparent;
            p = p.map(Number)
        }
        return r && !d && (n = p[0] / Ct, a = p[1] / Ct, s = p[2] / Ct, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
    }

    function zb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(At).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function Ab(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(At),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = yb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = zb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(At, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(At)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function Db(t) {
        var e, r = t.join(" ");
        if (At.lastIndex = 0, At.test(r)) return e = Dt.test(r), t[1] = Ab(t[1], e), t[0] = Ab(t[0], e, zb(t[1])), !0
    }

    function Mb(t) {
        var e = (t + "").split("("),
            r = Et[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(It, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(na)) : Et._CE && Ft.test(t) ? Et._CE("", t) : r
    }

    function Ob(t, e) {
        for (var r, i = t._first; i;) i instanceof Qt ? Ob(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Ob(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Qb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ga(t, function(t) {
            for (var e in Et[t] = ot[t] = a, Et[n = t.toLowerCase()] = r, a) Et[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Et[t + "." + e] = a[e]
        }), a
    }

    function Rb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Sb(r, t, e) {
        function Fm(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / j * (Math.asin(1 / i) || 0),
            s = "out" === r ? Fm : "in" === r ? function(t) {
                return 1 - Fm(1 - t)
            } : Rb(Fm);
        return n = j / n, s.config = function(t, e) {
            return Sb(r, t, e)
        }, s
    }

    function Tb(e, r) {
        function Nm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Nm : "in" === e ? function(t) {
            return 1 - Nm(1 - t)
        } : Rb(Nm);
        return t.config = function(t) {
            return Tb(e, t)
        }, t
    }
    var F, I, l, B, h, n, a, i, o, f, c, d, p, _, m, g, b, M, O, k, C, A, D, z, E, L, X, Y, V = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: false,
            units: {
                lineHeight: ""
            }
        },
        U = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        N = 1e8,
        q = 1 / N,
        j = 2 * Math.PI,
        G = j / 4,
        J = 0,
        H = Math.sqrt,
        $ = Math.cos,
        W = Math.sin,
        Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        K = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ot = {},
        ut = {
            suppressEvents: !0,
            isStart: !0
        },
        ht = {
            suppressEvents: !0
        },
        lt = {},
        ft = [],
        ct = {},
        dt = {},
        pt = {},
        _t = 30,
        mt = [],
        gt = "",
        vt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        yt = function _animationCycle(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        Tt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        bt = {
            _start: 0,
            endTime: T,
            totalDuration: T
        },
        wt = function _parsePosition(t, e, i) {
            var n, a, s, o = t.labels,
                u = t._recent || bt,
                h = t.duration() >= N ? u.endTime(!1) : t._dur;
            return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * (K(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
        },
        xt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        Mt = [].slice,
        Ot = function toArray(t, e, i) {
            return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Rt() ? K(t) ? function _flatten(t, e, i) {
                return void 0 === i && (i = []), t.forEach(function(t) {
                    return r(t) && !e || $a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t)
                }) || i
            }(t, i) : $a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0)
        },
        kt = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Va(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        Pt = function _callback(t, e, r) {
            var i, n, a, s = t.vars,
                o = s[e],
                u = l,
                h = t._ctx;
            if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ft.length && la(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
        },
        Ct = 255,
        St = {
            aqua: [0, Ct, Ct],
            lime: [0, Ct, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Ct],
            navy: [0, 0, 128],
            white: [Ct, Ct, Ct],
            olive: [128, 128, 0],
            yellow: [Ct, Ct, 0],
            orange: [Ct, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Ct, 0, 0],
            pink: [Ct, 192, 203],
            cyan: [0, Ct, Ct],
            transparent: [Ct, Ct, Ct, 0]
        },
        At = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in St) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Dt = /hsl[a]?\(/,
        zt = (O = Date.now, k = 500, C = 33, A = O(), D = A, E = z = 1e3 / 240, g = {
            time: 0,
            frame: 0,
            tick: function tick() {
                ul(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Ce, (h.gsapVersions || (h.gsapVersions = [])).push(Ce.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame), p && g.sleep(), _ = m || function(t) {
                    return setTimeout(t, E - 1e3 * g.time + 1 | 0)
                }, d = 1, ul(2))
            },
            sleep: function sleep() {
                (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T
            },
            lagSmoothing: function lagSmoothing(t, e) {
                k = t || 1e8, C = Math.min(e, k, 0)
            },
            fps: function fps(t) {
                z = 1e3 / (t || 240), E = 1e3 * g.time + z
            },
            add: function add(n, t, e) {
                var a = t ? function(t, e, r, i) {
                    n(t, e, r, i), g.remove(a)
                } : n;
                return g.remove(n), L[e ? "unshift" : "push"](a), Rt(), a
            },
            remove: function remove(t, e) {
                ~(e = L.indexOf(t)) && L.splice(e, 1) && e <= M && M--
            },
            _listeners: L = []
        }),
        Rt = function _wake() {
            return !d && zt.wake()
        },
        Et = {},
        Ft = /^[\d.\-M][\d.\-,\s]/,
        It = /["']/g,
        Bt = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Lt = function _parseEase(t, e) {
            return t && (s(t) ? t : Et[t] || Mb(t)) || e
        };

    function ul(t) {
        var e, r, i, n, a = O() - D,
            s = !0 === t;
        if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - E) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, E += e + (z <= e ? 4 : z - e), r = 1), s || (p = _(ul)), r)
            for (M = 0; M < L.length; M++) L[M](i, b, n, t)
    }

    function cn(t) {
        return t < Y ? X * t * t : t < .7272727272727273 ? X * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? X * (t -= 2.25 / 2.75) * t + .9375 : X * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ga("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Qb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Et.Linear.easeNone = Et.none = Et.Linear.easeIn, Qb("Elastic", Sb("in"), Sb("out"), Sb()), X = 7.5625, Y = 1 / 2.75, Qb("Bounce", function(t) {
        return 1 - cn(1 - t)
    }, cn), Qb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Qb("Circ", function(t) {
        return -(H(1 - t * t) - 1)
    }), Qb("Sine", function(t) {
        return 1 === t ? 1 : 1 - $(t * G)
    }), Qb("Back", Tb("in"), Tb("out"), Tb()), Et.SteppedEase = Et.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * xt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, U.ease = Et["quad.out"], ga("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return gt += t + "," + t + "Params,"
    });
    var Xt, Yt = function GSCache(t, e) {
            this.id = J++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : fa, this.set = e ? e.getSetter : ee
        },
        Vt = ((Xt = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Xt.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Xt.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Qa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Xt.totalTime = function totalTime(t, e) {
            if (Rt(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ha(this, t), !r._dp || r.parent || Ia(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ja(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === q || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ma(this, t, e)), this
        }, Xt.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Da(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, Xt.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Xt.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Da(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Xt.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? yt(this._tTime, r) + 1 : 1
        }, Xt.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -q ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Fa(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -q ? 0 : this._rts, this.totalTime(xt(-this._delay, this._tDur, e), !0), Ga(this),
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, Xt.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Rt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== q && (this._tTime -= q)))), this) : this._ps
        }, Xt.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Ja(e, this, t - this._delay), this
            }
            return this._start
        }, Xt.endTime = function endTime(t) {
            return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, Xt.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fa(e.rawTime(t), this) : this._tTime : this._tTime
        }, Xt.revert = function revert(t) {
            void 0 === t && (t = ht);
            var e = I;
            return I = t, this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents), "nested" !== this.data && ya(this), I = e, this
        }, Xt.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return !this.parent && this.vars.immediateRender ? -1 : r
        }, Xt.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ra(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Xt.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, Ra(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, Xt.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Xt.seek = function seek(t, e) {
            return this.totalTime(wt(this, t), w(e))
        }, Xt.restart = function restart(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, w(e))
        }, Xt.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Xt.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Xt.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Xt.resume = function resume() {
            return this.paused(!1)
        }, Xt.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -q : 0)), this) : this._rts < 0
        }, Xt.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -q, this
        }, Xt.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - q))
        }, Xt.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Xt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function xo() {
                    var t = i.then;
                    i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = s(t) ? t : oa;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? xo() : i._prom = xo
            })
        }, Xt.kill = function kill() {
            sb(this)
        }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Qa(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || zt.wake()
    }
    pa(Vt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -q,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Qt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), B && Ja(t.parent || B, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Ka(_assertThisInitialized(r), t.scrollTrigger), r
        }
        _inheritsLoose(Timeline, i);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Ua(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Ua(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Ua(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, ua(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $t(t, e, wt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return Ja(this, $t.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new $t(t, r, wt(this, n)), this
        }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
            return r.runBackwards = 1, ua(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
        }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
            return i.startAt = r, ua(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c, d, p, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : ia(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== B && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ia(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = yt(this._tTime, o), !_ && this._tTime && c !== s && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
                        var T = d && 1 & c,
                            b = T === (d && 1 & s);
                        if (s < c && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ia(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Pt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Ob(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, ia(_), ia(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Pt(this, "onStart"), this._tTime !== v)) return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -q);
                                break
                            }
                        }
                        n = a
                    } else {
                        r = r || I, n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -q : q);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -q)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ga(this), this.render(t, e, r);
                this._onUpdate && !e && Pt(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ya(this, 1), e || t < 0 && !_ || !v && !_ && m || (Pt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(e, i) {
            var n = this;
            if (t(i) || (i = wt(this, i, e)), !(e instanceof Vt)) {
                if (K(e)) return e.forEach(function(t) {
                    return n.add(t, i)
                }), this;
                if (r(e)) return this.addLabel(e, i);
                if (!s(e)) return this;
                e = $t.delayedCall(0, e)
            }
            return this !== e ? Ja(this, e, i) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -N);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (xa(this, t), t === this._recent && (this._recent = this._last), za(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ia(zt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = wt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = $t.delayedCall(0, e || T, r);
            return i.data = "isPause", this._hasPause = 1, Ja(this, i, wt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = wt(this, t); e;) e._start === t && "isPause" === e.data && ya(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ut !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(e, r) {
            for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof $t ? ka(s._targets, a) && (o ? (!Ut || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
            return n
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this,
                n = wt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = $t.to(i, pa({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || q,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Qa(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, pa({
                startAt: {
                    time: wt(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), qb(this, wt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), qb(this, wt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + q)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return za(this)
        }, e.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return i.prototype.invalidate.call(this)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), za(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = N;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ja(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Qa(a, a === B && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (B._ts && (ma(B, Fa(t, B)), f = zt.frame), zt.frame >= _t) {
                _t += V.autoSleep || 120;
                var e = B._first;
                if ((!e || !e._ts) && V.autoSleep && zt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || zt.sleep()
                }
            }
        }, Timeline
    }(Vt);
    pa(Qt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function $b(t, e, i, n, a, o) {
        var u, h, l, f;
        if (dt[t] && !1 !== (u = new dt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
                if (s(t) && (t = Gt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || K(t) || Z(t)) return r(t) ? Gt(t, a, e, i, n) : t;
                var o, u = {};
                for (o in t) u[o] = Gt(t[o], a, e, i, n);
                return u
            }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new me(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c))
            for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }

    function ec(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if (K(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
            return a.push({
                t: e / (r.length - 1) * 100,
                v: t,
                e: s
            })
        });
        else
            for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
                t: parseFloat(t),
                v: r[n],
                e: s
            })
    }
    var Ut, Nt, qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
            s(n) && (n = n(a || 0, t, o));
            var c, d = t[e],
                p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
                _ = s(d) ? l ? Kt : Zt : Wt;
            if (r(n) && (~n.indexOf("random(") && (n = nb(n)), "=" === n.charAt(1) && (!(c = ja(p, n) + (Xa(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Nt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, c, d, p, _ = new me(this._pt, t, e, 0, 1, oe, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = nb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === g ? f : ",",
                    s: c,
                    c: "=" === l.charAt(1) ? ja(c, l) - c : parseFloat(l) - c,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _
            }.call(this, t, e, p, n, _, h || V.stringFilter, l)) : (c = new me(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? ne : re, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c)
        },
        jt = function _initTween(t, e) {
            var r, i, n, a, s, o, u, h, l, f, c, d, p, _ = t.vars,
                m = _.ease,
                g = _.startAt,
                v = _.immediateRender,
                y = _.lazy,
                T = _.onUpdate,
                b = _.onUpdateParams,
                x = _.callbackScope,
                M = _.runBackwards,
                O = _.yoyoEase,
                k = _.keyframes,
                P = _.autoRevert,
                C = t._dur,
                S = t._startAt,
                A = t._targets,
                D = t.parent,
                z = D && "nested" === D.data ? D.parent._targets : A,
                R = "auto" === t._overwrite && !F,
                E = t.timeline;
            if (!E || k && m || (m = "none"), t._ease = Lt(m, U.ease), t._yEase = O ? Bt(Lt(!0 === O ? m : O, U.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !E && !!_.runBackwards, !E || k && !_.stagger) {
                if (d = (h = A[0] ? ea(A[0]).harness : 0) && _[h.prop], r = ta(_, lt), S && (S.revert(M && C ? ht : ut), S._lazy = 0), g) {
                    if (ya(t._startAt = $t.set(A, pa({
                            data: "isStart",
                            overwrite: !1,
                            parent: D,
                            immediateRender: !0,
                            lazy: w(y),
                            startAt: null,
                            delay: 0,
                            onUpdate: T,
                            onUpdateParams: b,
                            callbackScope: x,
                            stagger: 0
                        }, g))), e < 0 && (I || !v && !P) && t._startAt.revert(ht), v && C && e <= 0) return void(e && (t._zTime = e))
                } else if (M && C && !S)
                    if (e && (v = !1), n = pa({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: v && w(y),
                            immediateRender: v,
                            stagger: 0,
                            parent: D
                        }, r), d && (n[h.prop] = d), ya(t._startAt = $t.set(A, n)), e < 0 && (I ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, v) {
                        if (!e) return
                    } else _initTween(t._startAt, q);
                for (t._pt = t._ptCache = 0, y = C && w(y) || y && !C, i = 0; i < A.length; i++) {
                    if (u = (s = A[i])._gsap || da(A)[i]._gsap, t._ptLookup[i] = f = {}, ct[u.id] && ft.length && la(), c = z === A ? i : z.indexOf(s), h && !1 !== (l = new h).init(s, d || r, t, c, z) && (t._pt = a = new me(t._pt, s, l.name, 0, 1, l.render, l, 0, l.priority), l._props.forEach(function(t) {
                            f[t] = a
                        }), l.priority && (o = 1)), !h || d)
                        for (n in r) dt[n] && (l = $b(n, r, t, c, s, z)) ? l.priority && (o = 1) : f[n] = a = qt.call(t, s, n, "get", r[n], c, z, 0, _.stringFilter);
                    t._op && t._op[i] && t.kill(s, t._op[i]), R && t._pt && (Ut = t, B.killTweensOf(s, f, t.globalTime(e)), p = !t.parent, Ut = 0), t._pt && y && (ct[u.id] = 1)
                }
                o && _e(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = T, t._initted = (!t._op || t._pt) && !p, k && e <= 0 && E.render(N, !0, !0)
        },
        Gt = function _parseFuncOrString(t, e, i, n, a) {
            return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? nb(t) : t
        },
        Jt = gt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ht = {};
    ga(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Ht[t] = 1
    });
    var $t = function(E) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var s, o, u, h, l, f, c, d, p = (a = E.call(this, n ? r : ua(r)) || this).vars,
                _ = p.duration,
                m = p.delay,
                g = p.immediateRender,
                T = p.stagger,
                b = p.overwrite,
                x = p.keyframes,
                M = p.defaults,
                O = p.scrollTrigger,
                k = p.yoyoEase,
                P = r.parent || B,
                C = (K(e) || Z(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
            if (a._targets = C.length ? da(C) : R("GSAP target " + e + " not found. https://greensock.com", !V.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
                if (r = a.vars, (s = a.timeline = new Qt({
                        data: "nested",
                        defaults: M || {}
                    })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
                    if (h = C.length, c = T && db(T), v(T))
                        for (l in T) ~Jt.indexOf(l) && ((d = d || {})[l] = T[l]);
                    for (o = 0; o < h; o++)(u = ta(r, Ht)).stagger = 0, k && (u.yoyoEase = k), d && vt(u, d), f = C[o], u.duration = +Gt(_, _assertThisInitialized(a), o, f, C), u.delay = (+Gt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, C) : 0), s._ease = Et.none;
                    s.duration() ? _ = m = 0 : a.timeline = 0
                } else if (x) {
                    ua(pa(s.vars.defaults, {
                        ease: "none"
                    })), s._ease = Lt(x.ease || r.ease || "none");
                    var S, A, D, z = 0;
                    if (K(x)) x.forEach(function(t) {
                        return s.to(C, t, ">")
                    }), s.duration();
                    else {
                        for (l in u = {}, x) "ease" === l || "easeEach" === l || ec(l, x[l], u, x.easeEach);
                        for (l in u)
                            for (S = u[l].sort(function(t, e) {
                                    return t.t - e.t
                                }), o = z = 0; o < S.length; o++)(D = {
                                ease: (A = S[o]).e,
                                duration: (A.t - (o ? S[o - 1].t : 0)) / 100 * _
                            })[l] = A.v, s.to(C, D, z), z += D.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || a.duration(_ = s.duration())
            } else a.timeline = 0;
            return !0 !== b || F || (Ut = _assertThisInitialized(a), B.killTweensOf(C), Ut = 0), Ja(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ia(P._time) && w(g) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -q, a.render(Math.max(0, -m))), O && Ka(_assertThisInitialized(a), O), a
        }
        _inheritsLoose(Tween, E);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c = this._time,
                d = this._tDur,
                p = this._dur,
                _ = t < 0,
                m = d - q < t && !_ ? d : t < q ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
                    if (i = m, l = this.timeline, this._repeat) {
                        if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                        if (i = ia(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = yt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
                        a !== o && (l && this._yEase && Ob(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ia(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (La(this, _ ? t : i, r, e)) return this._tTime = 0, this;
                        if (c !== this._time) return this;
                        if (p !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && (Pt(this, "onStart"), this._tTime !== m)) return this;
                    for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -q : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ba(this, t, 0, r), Pt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Pt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ba(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || ya(this, 1), e || _ && !c || !m && !c || (Pt(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()))
                }
            } else ! function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s, o = t.ratio,
                    u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !Tt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Tt(t)) ? 0 : 1,
                    h = t._rDelay,
                    l = 0;
                if (h && t._repeat && (l = xt(0, t._tDur, e), a = yt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== yt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || I || i || t._zTime === q || !e && t._zTime) {
                    if (!t._initted && La(t, e, i, r)) return;
                    for (s = t._zTime, t._zTime = e || (r ? q : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    e < 0 && Ba(t, e, 0, !0), t._onUpdate && !r && Pt(t, "onUpdate"), l && t._repeat && !r && t.parent && Pt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && ya(t, 1), r || (Pt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, e.targets = function targets() {
            return this._targets
        }, e.invalidate = function invalidate() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), E.prototype.invalidate.call(this)
        }, e.resetTo = function resetTo(t, e, r, i) {
            d || zt.wake(), this._ts || this.play();
            var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || jt(this, a), n = this._ease(a / this._dur),
                function _updatePropTweens(t, e, r, i, n, a, s) {
                    var o, u, h, l, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!f)
                        for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
                            if ((o = h[l][e]) && o.d && o.d._pt)
                                for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                            if (!o) return Nt = 1, t.vars[e] = "+=0", jt(t, s), Nt = 0, 1;
                            f.push(o)
                        }
                    for (l = f.length; l--;)(o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ha(r) + Xa(u.e)), u.b && (u.b = o.s + Xa(u.b))
                }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ha(this, 0), this.parent || wa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? sb(this) : this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ut && !0 !== Ut.vars.overwrite)._first || sb(this), this.parent && i !== this.timeline.totalDuration() && Qa(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var n, a, s, o, u, h, l, f = this._targets,
                c = t ? Ot(t) : f,
                d = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(f, c)) return "all" === e && (this._pt = 0), sb(this);
            for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ga(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function _addAliasesToVars(t, e) {
                    var r, i, n, a, s = t[0] ? ea(t[0]).harness : 0,
                        o = s && s.aliases;
                    if (!o) return e;
                    for (i in r = vt({}, e), o)
                        if (i in r)
                            for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                    return r
                }(f, e)), l = f.length; l--;)
                if (~c.indexOf(f[l]))
                    for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || xa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && p && sb(this), this
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r)
        }, Tween.from = function from(t, e) {
            return Ua(1, arguments)
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, Tween.fromTo = function fromTo(t, e, r) {
            return Ua(2, arguments)
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return B.killTweensOf(t, e, r)
        }, Tween
    }(Vt);
    pa($t.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ga("staggerTo,staggerFrom,staggerFromTo", function(r) {
        $t[r] = function() {
            var t = new Qt,
                e = Mt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function mc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function uc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Wt = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        Zt = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        Kt = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        ee = function _getSetter(t, e) {
            return s(t[e]) ? Zt : u(t[e]) && t.setAttribute ? mc : Wt
        },
        re = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        ne = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        oe = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        ce = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        de = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        pe = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? xa(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        _e = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        me = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = uc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || re, this.d = s || this, this.set = o || Wt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ga(gt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return lt[t] = 1
    }), ot.TweenMax = ot.TweenLite = $t, ot.TimelineLite = ot.TimelineMax = Qt, B = new Qt({
        sortChildren: !1,
        defaults: U,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), V.stringFilter = Db;

    function Bc(t) {
        return (Te[t] || we).map(function(t) {
            return t()
        })
    }

    function Cc() {
        var t = Date.now(),
            o = [];
        2 < t - xe && (Bc("matchMediaInit"), ye.forEach(function(t) {
            var e, r, i, n, a = t.queries,
                s = t.conditions;
            for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
            n && (t.revert(), i && o.push(t))
        }), Bc("matchMediaRevert"), o.forEach(function(t) {
            return t.onMatch(t)
        }), xe = t, Bc("matchMedia"))
    }
    var ve, ye = [],
        Te = {},
        we = [],
        xe = 0,
        Me = ((ve = Context.prototype).add = function add(t, i, n) {
            function xw() {
                var t, e = l,
                    r = a.selector;
                return e && e.data.push(a), n && (a.selector = bb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
            }
            s(t) && (n = i, i = t, t = s);
            var a = this;
            return a.last = xw, t === s ? xw(a) : t ? a[t] = xw : xw
        }, ve.ignore = function ignore(t) {
            var e = l;
            l = null, t(this), l = e
        }, ve.getTweens = function getTweens() {
            var e = [];
            return this.data.forEach(function(t) {
                return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof $t && t._targets[0] !== t.vars.onComplete && e.push(t)
            }), e
        }, ve.clear = function clear() {
            this._r.length = this.data.length = 0
        }, ve.kill = function kill(e, t) {
            var r = this;
            if (e ? (this.getTweens().map(function(t) {
                    return {
                        g: t.globalTime(0),
                        t: t
                    }
                }).sort(function(t, e) {
                    return e.g - t.g || -1
                }).forEach(function(t) {
                    return t.t.revert(e)
                }), this.data.forEach(function(t) {
                    return !(t instanceof Vt) && t.revert && t.revert(e)
                }), this._r.forEach(function(t) {
                    return t(e, r)
                }), this.isReverted = !0) : this.data.forEach(function(t) {
                    return t.kill && t.kill()
                }), this.clear(), t) {
                var i = ye.indexOf(this);
                ~i && ye.splice(i, 1)
            }
        }, ve.revert = function revert(t) {
            this.kill(t || {})
        }, Context);

    function Context(t, e) {
        this.selector = e && bb(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
    }
    var Oe, ke = ((Oe = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = {
            matches: t
        });
        var i, n, a, s = new Me(0, r || this.scope),
            o = s.conditions = {};
        for (n in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ye.indexOf(s) < 0 && ye.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Cc) : i.addEventListener("change", Cc));
        return a && e(s), this
    }, Oe.revert = function revert(t) {
        this.kill(t || {})
    }, Oe.kill = function kill(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }, MatchMedia);

    function MatchMedia(t) {
        this.contexts = [], this.scope = t
    }
    var Pe = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = s(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: T,
                            render: ce,
                            add: qt,
                            kill: pe,
                            modifier: de,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: ee,
                            aliases: {},
                            register: 0
                        };
                    if (Rt(), t !== i) {
                        if (dt[e]) return;
                        pa(i, pa(ta(t, n), a)), vt(i.prototype, vt(n, ta(t, a))), dt[i.prop = e] = i, t.targetTest && (mt.push(i), lt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    S(e, i), t.register && t.register(Ce, i, me)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Qt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return B.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, n) {
            r(i) && (i = Ot(i)[0]);
            var a = ea(i || {}).get,
                s = e ? oa : na;
            return "native" === e && (e = ""), i ? t ? s((dt[t] && dt[t].get || a)(i, t, e, n)) : function(t, e, r) {
                return s((dt[t] && dt[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Ot(r)).length) {
                var n = r.map(function(t) {
                        return Ce.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = dt[e],
                o = ea(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && ce(1, c)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function Mx(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var r, n = Ce.to(t, vt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
            return Mx.tween = n, Mx
        },
        isTweening: function isTweening(t) {
            return 0 < B.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Lt(t.ease, U.ease)), sa(U, t || {})
        },
        config: function config(t) {
            return sa(V, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !dt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
            }), pt[i] = function(t, e, r) {
                return n(Ot(t), pa(e || {}, a), r)
            }, r && (Qt.prototype[i] = function(t, e, r) {
                return this.add(pt[i](t, v(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            Et[t] = Lt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Lt(t, e) : Et
        },
        getById: function getById(t) {
            return B.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Qt(t);
            for (n.smoothChildTiming = w(t.smoothChildTiming), B.remove(n), n._dp = 0, n._time = n._tTime = B._time, r = B._first; r;) i = r._next, !e && !r._dur && r instanceof $t && r.vars.onComplete === r._targets[0] || Ja(n, r, r._start - r._delay), r = i;
            return Ja(B, n, 0), n
        },
        context: function context(t, e) {
            return t ? new Me(t, e) : l
        },
        matchMedia: function matchMedia(t) {
            return new ke(t)
        },
        matchMediaRefresh: function matchMediaRefresh() {
            return ye.forEach(function(t) {
                var e, r, i = t.conditions;
                for (r in i) i[r] && (i[r] = !1, e = 1);
                e && t.revert()
            }) || Cc()
        },
        addEventListener: function addEventListener(t, e) {
            var r = Te[t] || (Te[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function removeEventListener(t, e) {
            var r = Te[t],
                i = r && r.indexOf(e);
            0 <= i && r.splice(i, 1)
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return K(e) ? kb(e, wrap(0, e.length), t) : Va(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return K(e) ? kb(e, wrapYoyo(0, e.length - 1), t) : Va(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: db,
            random: gb,
            snap: fb,
            normalize: function normalize(t, e, r) {
                return kt(t, e, 0, 1, r)
            },
            getUnit: Xa,
            clamp: function clamp(e, r, t) {
                return Va(t, function(t) {
                    return xt(e, r, t)
                })
            },
            splitColor: yb,
            toArray: Ot,
            selector: bb,
            mapRange: kt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Xa(t))
                }
            },
            interpolate: function interpolate(e, i, t, n) {
                var a = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!a) {
                    var s, o, u, h, l, f = r(e),
                        c = {};
                    if (!0 === t && (n = 1) && (t = null), f) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (K(e) && !K(i)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = i
                    } else n || (e = vt(K(e) ? [] : {}, e));
                    if (!u) {
                        for (s in i) qt.call(c, e, s, "get", i[s]);
                        a = function func(t) {
                            return ce(t, c) || (f ? e.p : e)
                        }
                    }
                }
                return Va(t, a)
            },
            shuffle: cb
        },
        install: P,
        effects: pt,
        ticker: zt,
        updateRoot: Qt.updateRoot,
        plugins: dt,
        globalTimeline: B,
        core: {
            PropTween: me,
            globals: S,
            Tween: $t,
            Timeline: Qt,
            Animation: Vt,
            getCache: ea,
            _removeLinkedListItem: xa,
            reverting: function reverting() {
                return I
            },
            context: function context(t) {
                return t && l && (l.data.push(t), t._ctx = l), l
            },
            suppressOverwrites: function suppressOverwrites(t) {
                return F = t
            }
        }
    };
    ga("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Pe[t] = $t[t]
    }), zt.add(Qt.updateRoot), c = Pe.to({}, {
        duration: 0
    });

    function Gc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function Ic(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, n, e) {
                e._onInit = function(t) {
                    var e, i;
                    if (r(n) && (e = {}, ga(n, function(t) {
                            return e[t] = 1
                        }), n = e), a) {
                        for (i in e = {}, n) e[i] = a(n[i]);
                        n = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Gc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, n)
                }
            }
        }
    }
    var Ce = Pe.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s, o;
            for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
        },
        render: function render(t, e) {
            for (var r = e._pt; r;) I ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Ic("roundProps", eb), Ic("modifiers"), Ic("snap", fb)) || Pe;
    $t.version = Qt.version = Ce.version = "3.11.0", o = 1, x() && Rt();

    function sd(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function td(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function ud(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function vd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function wd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function xd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function yd(t, e, r) {
        return t.style[e] = r
    }

    function zd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function Ad(t, e, r) {
        return t._gsap[e] = r
    }

    function Bd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Cd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function Dd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function Gd(t) {
        var e = this,
            r = this.target,
            i = r.style;
        if (t in er) {
            if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = ur[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                    return e.tfm[t] = _r(r, t)
                }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : _r(r, t)), r._gsap.svg && (this.svg = r.getAttribute(t) || ""), 0 <= this.props.indexOf(hr)) return;
            t = hr
        }
        i && this.props.push(t, i[t])
    }

    function Hd(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function Id() {
        var t, e, r = this.props,
            i = this.target,
            n = i.style,
            a = i._gsap;
        for (t = 0; t < r.length; t += 2) r[t + 1] ? n[r[t]] = r[t + 1] : n.removeProperty(r[t].replace(ar, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in a.svg && i.setAttribute("transform", this.svg || ""), this.tfm) a[e] = this.tfm[e];
            !(t = Fe()) || t.isStart || n[hr] || (Hd(n), a.uncache = 1)
        }
    }

    function Jd(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Id,
            save: Gd
        };
        return e && e.split(",").forEach(function(t) {
            return r.save(t)
        }), r
    }

    function Ld(t, e) {
        var r = Ae.createElementNS ? Ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ae.createElement(t);
        return r.style ? r : Ae.createElement(t)
    }

    function Md(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(ar, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Md(t, cr(e) || e, 1) || ""
    }

    function Pd() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (Se = window, Ae = Se.document, De = Ae.documentElement, Re = Ld("div") || {
            style: {}
        }, Ld("div"), hr = cr(hr), lr = hr + "Origin", Re.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ie = !!cr("perspective"), Fe = Ce.core.reverting, ze = 1)
    }

    function Qd(t) {
        var e, r = Ld("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (De.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Qd
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), De.removeChild(r), this.style.cssText = a, e
    }

    function Rd(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Sd(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = Qd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Qd || (r = Qd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +Rd(e, ["x", "cx", "x1"]) || 0,
            y: +Rd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Td(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Sd(t))
    }

    function Ud(t, e) {
        if (e) {
            var r = t.style;
            e in er && e !== lr && (e = hr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(ar, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function Vd(t, e, r, i, n, a) {
        var s = new me(t._pt, e, r, 0, 1, a ? xd : wd);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function Yd(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = Re.style,
            f = sr.test(e),
            c = "svg" === t.tagName.toLowerCase(),
            d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            _ = "%" === i;
        return i === h || !u || dr[i] || dr[h] ? u : ("px" === h || p || (u = Yd(t, e, r, "px")), o = t.getCTM && Td(t), !_ && "%" !== h || !er[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Ae && a.appendChild || (a = Ae.body), (s = a._gsap) && _ && s.width && f && s.time === zt.time && !s.uncache ? ha(u / s.width * 100) : (!_ && "%" !== h || pr[Md(a, "display")] || (l.position = Md(t, "position")), a === t && (l.position = "static"), a.appendChild(Re), n = Re[d], a.removeChild(Re), l.position = "absolute", f && _ && ((s = ea(a)).time = zt.time, s.width = a[d]), ha(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ha(_ ? u / n * 100 : u / 100 * n)))
    }

    function $d(t, e, r, i) {
        if (!r || "none" === r) {
            var n = cr(e, t, 1),
                a = n && Md(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Md(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, c, d, p, _, m, g = new me(this._pt, t.style, e, 0, 1, oe),
            v = 0,
            y = 0;
        if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Md(t, e) || i, t.style[e] = r), Db(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ja(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || V.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = Yd(t, e, f, _) || 0), g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: d - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else g.r = "display" === e && "none" === i ? xd : wd;
        return nt.test(i) && (g.e = 0), this._pt = g
    }

    function ae(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = mr[r] || r, e[1] = mr[i] || i, e.join(" ")
    }

    function be(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], er[r] && (i = 1, r = "transformOrigin" === r ? lr : hr), Ud(a, r);
            i && (Ud(a, hr), u && (u.svg && a.removeAttribute("transform"), Tr(a, 1), u.uncache = 1, Hd(s)))
        }
    }

    function fe(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function ge(t) {
        var e = Md(t, hr);
        return fe(e) ? vr : e.substr(7).match(et).map(ha)
    }

    function he(t, e) {
        var r, i, n, a, s = t._gsap || ea(t),
            o = t.style,
            u = ge(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? vr : u : (u !== vr || t.offsetParent || t === De || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, De.appendChild(t)), u = ge(t), n ? o.display = n : Ud(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : De.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function ie(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || he(t, !0),
            f = h.xOrigin || 0,
            c = h.yOrigin || 0,
            d = h.xOffset || 0,
            p = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== vr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Sd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[lr] = "0px 0px", a && (Vd(a, h, "xOrigin", f, w), Vd(a, h, "yOrigin", c, x), Vd(a, h, "xOffset", d, h.xOffset), Vd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function le(t, e, r) {
        var i = Xa(e);
        return ha(parseFloat(e) + parseFloat(Yd(t, "x", r + "px", i))) + i
    }

    function se(t, e, i, n, a) {
        var s, o, u = 360,
            h = r(a),
            l = parseFloat(a) * (h && ~a.indexOf("rad") ? rr : 1) - n,
            f = n + l + "deg";
        return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new me(t._pt, e, i, n, l, td), o.e = f, o.u = "deg", t._props.push(i), o
    }

    function te(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function ue(t, e, r) {
        var i, n, a, s, o, u, h, l = te({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[hr] = e, i = Tr(r, 1), Ud(r, hr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[hr], f[hr] = e, i = Tr(r, 1), f[hr] = a), er)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Xa(a) !== (h = Xa(s)) ? Yd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new me(t._pt, i, n, o, u - o, sd), t._pt.u = h || 0, t._props.push(n));
        te(i, l)
    }
    var Se, Ae, De, ze, Re, Ee, Fe, Ie, Be = Et.Power0,
        Le = Et.Power1,
        Xe = Et.Power2,
        Ye = Et.Power3,
        Ve = Et.Power4,
        Qe = Et.Linear,
        Ue = Et.Quad,
        Ne = Et.Cubic,
        qe = Et.Quart,
        je = Et.Quint,
        Ge = Et.Strong,
        Je = Et.Elastic,
        He = Et.Back,
        $e = Et.SteppedEase,
        We = Et.Bounce,
        Ze = Et.Sine,
        Ke = Et.Expo,
        tr = Et.Circ,
        er = {},
        rr = 180 / Math.PI,
        ir = Math.PI / 180,
        nr = Math.atan2,
        ar = /([A-Z])/g,
        sr = /(left|right|width|margin|padding|x)/i,
        or = /[\s,\(]\S/,
        ur = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        hr = "transform",
        lr = hr + "Origin",
        fr = "O,Moz,ms,Ms,Webkit".split(","),
        cr = function _checkPropPrefix(t, e, r) {
            var i = (e || Re).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(fr[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? fr[n] : "") + t
        },
        dr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        pr = {
            grid: 1,
            flex: 1
        },
        _r = function _get(t, e, r, i) {
            var n;
            return ze || Pd(), e in ur && "transform" !== e && ~(e = ur[e]).indexOf(",") && (e = e.split(",")[0]), er[e] && "transform" !== e ? (n = Tr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : br(Md(t, lr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = gr[e] && gr[e](t, e, r) || Md(t, e) || fa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Yd(t, e, n, r) + r : n
        },
        mr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        gr = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new me(t._pt, e, r, 0, 0, be);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        vr = [1, 0, 0, 1, 0, 0],
        yr = {},
        Tr = function _parseTransform(t, e) {
            var r = t._gsap || new Yt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w, x, M, O, k, P, C, S, A, D, z, R, E, F = t.style,
                I = r.scaleX < 0,
                B = "deg",
                L = getComputedStyle(t),
                X = Md(t, lr) || "0";
            return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Td(t)), L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[hr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + L[hr]), F.scale = F.rotate = F.translate = "none"), m = he(t, r.svg), r.svg && (k = (!r.uncache || "0px 0px" === X) && !e && t.getAttribute("data-svg-origin"), ie(t, k || X, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== vr && (T = m[0], b = m[1], w = m[2], x = m[3], i = M = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? nr(b, T) * rr : 0, (f = w || x ? nr(w, x) * rr + u : 0) && (o *= Math.abs(Math.cos(f * ir))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (E = m[6], z = m[7], S = m[8], A = m[9], D = m[10], R = m[11], i = m[12], n = m[13], a = m[14], h = (g = nr(E, D)) * rr, g && (k = M * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), P = O * v + A * y, C = E * v + D * y, S = M * -y + S * v, A = O * -y + A * v, D = E * -y + D * v, R = z * -y + R * v, M = k, O = P, E = C), l = (g = nr(-w, D)) * rr, g && (v = Math.cos(-g), R = x * (y = Math.sin(-g)) + R * v, T = k = T * v - S * y, b = P = b * v - A * y, w = C = w * v - D * y), u = (g = nr(b, T)) * rr, g && (k = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = M * v + O * y, b = b * v - T * y, O = O * v - M * y, T = k, M = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ha(Math.sqrt(T * T + b * b + w * w)), o = ha(Math.sqrt(O * O + E * E)), g = nr(M, O), f = 2e-4 < Math.abs(g) ? g * rr : 0, d = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !fe(Md(t, hr)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ha(s), r.scaleY = ha(o), r.rotation = ha(u) + B, r.rotationX = ha(h) + B, r.rotationY = ha(l) + B, r.skewX = f + B, r.skewY = c + B, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (F[lr] = br(X)), r.xOffset = r.yOffset = 0, r.force3D = V.force3D, r.renderTransform = r.svg ? Pr : Ie ? kr : wr, r.uncache = 0, r
        },
        br = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        wr = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, kr(t, e)
        },
        xr = "0deg",
        Mr = "0px",
        Or = ") ",
        kr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                c = r.skewY,
                d = r.scaleX,
                p = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== xr || h !== xr)) {
                var b, w = parseFloat(h) * ir,
                    x = Math.sin(w),
                    M = Math.cos(w);
                w = parseFloat(l) * ir, b = Math.cos(w), a = le(g, a, x * b * -v), s = le(g, s, -Math.sin(w) * -v), o = le(g, o, M * b * -v + v)
            }
            _ !== Mr && (y += "perspective(" + _ + Or), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Mr && s === Mr && o === Mr || (y += o !== Mr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Or), u !== xr && (y += "rotate(" + u + Or), h !== xr && (y += "rotateY(" + h + Or), l !== xr && (y += "rotateX(" + l + Or), f === xr && c === xr || (y += "skew(" + f + ", " + c + Or), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Or), g.style[hr] = y || "translate(0, 0)"
        },
        Pr = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                c = o.rotation,
                d = o.skewX,
                p = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                M = parseFloat(f);
            c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= ir, d *= ir, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= ir, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ha(r), i = ha(i), n = ha(n), a = ha(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (x = Yd(g, "x", l, "px"), M = Yd(g, "y", f, "px")), (v || y || T || b) && (x = ha(x + v - (v * r + y * n) + T), M = ha(M + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ha(x + u / 100 * s.width), M = ha(M + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + M + ")", g.setAttribute("transform", s), w && (g.style[hr] = s)
        };
    ga("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        gr[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return _r(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var Cr, Sr, Ar, Dr = {
        name: "css",
        register: Pd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, i, n, a) {
            var s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w = this._props,
                x = t.style,
                M = i.vars.startAt;
            for (c in ze || Pd(), this.styles = this.styles || Jd(t), b = this.styles.props, this.tween = i, e)
                if ("autoRound" !== c && (o = e[c], !dt[c] || !$b(c, e, i, n, t, a)))
                    if (l = typeof o, f = gr[c], "function" === l && (l = typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = nb(o)), f) f(this, t, c, o, i) && (T = 1);
                    else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", At.lastIndex = 0, At.test(s) || (d = Xa(s), p = Xa(o)), p ? d !== p && (s = Yd(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, x[c]);
            else if ("undefined" !== l) {
                if (M && c in M ? (s = "function" == typeof M[c] ? M[c].call(i, n, t, a) : M[c], r(s) && ~s.indexOf("random(") && (s = nb(s)), Xa(s + "") || (s += V.units[c] || Xa(_r(t, c)) || ""), "=" === (s + "").charAt(1) && (s = _r(t, c))) : s = _r(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in ur && ("autoAlpha" === c && (1 === h && "hidden" === _r(t, "visibility") && u && (h = 0), b.push("visibility", x.visibility), Vd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = ur[c]).indexOf(",") && (c = c.split(",")[0])), m = c in er)
                    if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || Tr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new me(this._pt, x, hr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new me(this._pt, v, "scaleY", v.scaleY, (_ ? ja(v.scaleY, _ + u) : u) - v.scaleY || 0, sd), this._pt.u = 0, w.push("scaleY", c), c += "X";
                    else {
                        if ("transformOrigin" === c) {
                            b.push(lr, x[lr]), o = ae(o), v.svg ? ie(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Vd(this, v, "zOrigin", v.zOrigin, p), Vd(this, x, c, br(s), br(o)));
                            continue
                        }
                        if ("svgOrigin" === c) {
                            ie(t, o, 1, y, 0, this);
                            continue
                        }
                        if (c in yr) {
                            se(this, v, c, h, _ ? ja(h, _ + o) : o);
                            continue
                        }
                        if ("smoothOrigin" === c) {
                            Vd(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === c) {
                            v[c] = o;
                            continue
                        }
                        if ("transform" === c) {
                            ue(this, o, t);
                            continue
                        }
                    }
                else c in x || (c = cr(c) || c);
                if (m || (u || 0 === u) && (h || 0 === h) && !or.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Xa(o) || (c in V.units ? V.units[c] : d)) && (h = Yd(t, c, s, p)), this._pt = new me(this._pt, m ? v : x, c, h, (_ ? ja(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? sd : vd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = ud);
                else if (c in x) $d.call(this, t, c, s, _ ? _ + o : o);
                else {
                    if (!(c in t)) {
                        Q(c, o);
                        continue
                    }
                    this.add(t, c, s || t[c], _ ? _ + o : o, n, a)
                }
                m || b.push(c, x[c]), w.push(c)
            }
            T && _e(this)
        },
        render: function render(t, e) {
            if (e.tween._time || !Fe())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: _r,
        aliases: ur,
        getSetter: function getSetter(t, e, r) {
            var i = ur[e];
            return i && i.indexOf(",") < 0 && (e = i), e in er && e !== lr && (t._gsap.x || _r(t, "x")) ? r && Ee === r ? "scale" === e ? Bd : Ad : (Ee = r || {}) && ("scale" === e ? Cd : Dd) : t.style && !u(t.style[e]) ? yd : ~e.indexOf("-") ? zd : ee(t, e)
        },
        core: {
            _removeProperty: Ud,
            _getMatrix: he
        }
    };
    Ce.utils.checkPrefix = cr, Ce.core.getStyleSaver = Jd, Ar = ga((Cr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Sr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        er[t] = 1
    }), ga(Sr, function(t) {
        V.units[t] = "deg", yr[t] = 1
    }), ur[Ar[13]] = Cr + "," + Sr, ga("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        ur[e[1]] = Ar[e[0]]
    }), ga("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        V.units[t] = "px"
    }), Ce.registerPlugin(Dr);
    var zr = Ce.registerPlugin(Dr) || Ce,
        Rr = zr.core.Tween;
    e.Back = He, e.Bounce = We, e.CSSPlugin = Dr, e.Circ = tr, e.Cubic = Ne, e.Elastic = Je, e.Expo = Ke, e.Linear = Qe, e.Power0 = Be, e.Power1 = Le, e.Power2 = Xe, e.Power3 = Ye, e.Power4 = Ve, e.Quad = Ue, e.Quart = qe, e.Quint = je, e.Sine = Ze, e.SteppedEase = $e, e.Strong = Ge, e.TimelineLite = Qt, e.TimelineMax = Qt, e.TweenLite = $t, e.TweenMax = Rr, e.default = zr, e.gsap = zr;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/*!
 * ScrollTrigger 3.11.0
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function q() {
        return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we
    }

    function y(e, t) {
        return ~He.indexOf(e) && He[He.indexOf(e) + 1][t]
    }

    function z(e) {
        return !!~t.indexOf(e)
    }

    function A(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        })
    }

    function B(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function E() {
        return ze && ze.isPressed || k.cache++
    }

    function F(r, n) {
        function Pc(e) {
            if (e || 0 === e) {
                i && (ke.history.scrollRestoration = "manual");
                var t = ze && ze.isPressed;
                e = Pc.v = Math.round(e) || (ze && ze.iOS ? 1 : 0), r(e), Pc.cacheID = k.cache, t && o("ss", e)
            } else(n || k.cache !== Pc.cacheID || o("ref")) && (Pc.cacheID = k.cache, Pc.v = r());
            return Pc.v + Pc.offset
        }
        return Pc.offset = 0, r && Pc
    }

    function I(e) {
        return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function J(t, e) {
        var r = e.s,
            n = e.sc,
            i = k.indexOf(t),
            o = n === Je.sc ? 1 : 2;
        return ~i || (i = k.push(t) - 1), k[i + o] || (k[i + o] = F(y(t, r), !0) || (z(t) ? n : F(function(e) {
            return arguments.length ? t[r] = e : t[r]
        })))
    }

    function K(e, t, i) {
        function jd(e, t) {
            var r = Fe();
            t || n < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l)
        }
        var o = e,
            a = e,
            s = Fe(),
            l = s,
            n = t || 50,
            c = Math.max(500, 3 * n);
        return {
            update: jd,
            reset: function reset() {
                a = o = i ? 0 : o, l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l,
                    r = a,
                    n = Fe();
                return !e && 0 !== e || e === o || jd(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3
            }
        }
    }

    function L(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function M(e) {
        var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }

    function N() {
        (Be = we.core.globals().ScrollTrigger) && Be.core && function _integrate() {
            var e = Be.core,
                r = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
            t.push.apply(t, k), n.push.apply(n, He), k = t, He = n, o = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }

    function O(e) {
        return (we = e || q()) && "undefined" != typeof document && document.body && (ke = window, Ae = (Me = document).documentElement, Ee = Me.body, t = [ke, Me, Ae, Ee], we.utils.clamp, Ie = "onpointerenter" in Ee ? "pointer" : "mouse", Ce = P.isTouch = ke.matchMedia && ke.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ke || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, De = P.eventTypes = ("ontouchstart" in Ae ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ae ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return i = 0
        }, 500), N(), _e = 1), _e
    }
    var we, _e, ke, Me, Ae, Ee, Ce, Ie, Be, t, ze, De, i = 1,
        Re = [],
        k = [],
        He = [],
        Fe = Date.now,
        o = function _bridge(e, t) {
            return t
        },
        r = "scrollLeft",
        n = "scrollTop",
        je = {
            s: r,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: F(function(e) {
                return arguments.length ? ke.scrollTo(e, Je.sc()) : ke.pageXOffset || Me[r] || Ae[r] || Ee[r] || 0
            })
        },
        Je = {
            s: n,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: je,
            sc: F(function(e) {
                return arguments.length ? ke.scrollTo(je.sc(), e) : ke.pageYOffset || Me[n] || Ae[n] || Ee[n] || 0
            })
        };
    je.op = Je, k.cache = 0;
    var P = (Observer.prototype.init = function init(e) {
        _e || O(we) || console.warn("Please gsap.registerPlugin(Observer)"), Be || N();
        var i = e.tolerance,
            a = e.dragMinimum,
            t = e.type,
            n = e.target,
            r = e.lineHeight,
            o = e.debounce,
            s = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            f = e.wheelSpeed,
            d = e.event,
            p = e.onDragStart,
            g = e.onDragEnd,
            h = e.onDrag,
            b = e.onPress,
            v = e.onRelease,
            m = e.onRight,
            y = e.onLeft,
            x = e.onUp,
            w = e.onDown,
            S = e.onChangeX,
            _ = e.onChangeY,
            T = e.onChange,
            k = e.onToggleX,
            P = e.onToggleY,
            C = e.onHover,
            D = e.onHoverEnd,
            X = e.onMove,
            Y = e.ignoreCheck,
            R = e.isNormalizer,
            H = e.onGestureStart,
            F = e.onGestureEnd,
            W = e.onWheel,
            j = e.onEnable,
            V = e.onDisable,
            G = e.onClick,
            U = e.scrollSpeed,
            q = e.capture,
            $ = e.allowClicks,
            Q = e.lockAxis,
            Z = e.onLockAxis;

        function Ke() {
            return ye = Fe()
        }

        function Le(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || Y && Y(e, t)
        }

        function Ne() {
            var e = se.deltaX = M(ve),
                t = se.deltaY = M(me),
                r = Math.abs(e) >= i,
                n = Math.abs(t) >= i;
            T && (r || n) && T(se, e, t, ve, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), S && S(se), k && se.deltaX < 0 != le < 0 && k(se), le = se.deltaX, ve[0] = ve[1] = ve[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), _ && _(se), P && se.deltaY < 0 != ce < 0 && P(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (X && X(se), re && (h(se), re = !1), ne = !1), oe && !(oe = !1) && Z && Z(se), ie && (W(se), ie = !1), ee = 0
        }

        function Oe(e, t, r) {
            ve[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), o ? ee = ee || requestAnimationFrame(Ne) : Ne()
        }

        function Pe(e, t) {
            "y" !== ae && (ve[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), Q && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", oe = !0), o ? ee = ee || requestAnimationFrame(Ne) : Ne()
        }

        function Qe(e) {
            if (!Le(e, 1)) {
                var t = (e = L(e, s)).clientX,
                    r = e.clientY,
                    n = t - se.x,
                    i = r - se.y,
                    o = se.isDragging;
                se.x = t, se.y = r, (o || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), o || (se.isDragging = !0), Pe(n, i), o || p && p(se))
            }
        }

        function Se(t) {
            if (!Le(t, 1)) {
                B(R ? n : be, De[1], Qe, !0);
                var e = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
                    r = L(t);
                e || (se._vx.reset(), se._vy.reset(), s && $ && we.delayedCall(.08, function() {
                    if (300 < Fe() - ye && !t.defaultPrevented)
                        if (t.target.click) t.target.click();
                        else if (be.createEvent) {
                        var e = be.createEvent("MouseEvents");
                        e.initMouseEvent("click", !0, !0, ke, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                    }
                })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !R && te.restart(!0), g && e && g(se), v && v(se, e)
            }
        }

        function Te(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && H(e, se.isDragging)
        }

        function Ue() {
            return (se.isGesturing = !1) || F(se)
        }

        function Ve(e) {
            if (!Le(e)) {
                var t = ue(),
                    r = fe();
                Oe((t - de) * U, (r - pe) * U, 1), de = t, pe = r, l && te.restart(!0)
            }
        }

        function We(e) {
            if (!Le(e)) {
                e = L(e, s), W && (ie = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? ke.innerHeight : 1) * f;
                Oe(e.deltaX * t, e.deltaY * t, 0), l && !R && te.restart(!0)
            }
        }

        function Xe(e) {
            if (!Le(e)) {
                var t = e.clientX,
                    r = e.clientY,
                    n = t - se.x,
                    i = r - se.y;
                se.x = t, se.y = r, ne = !0, (n || i) && Pe(n, i)
            }
        }

        function Ye(e) {
            se.event = e, C(se)
        }

        function Ze(e) {
            se.event = e, D(se)
        }

        function $e(e) {
            return Le(e) || L(e, s) && G(se)
        }
        this.target = n = I(n) || Ae, this.vars = e, u = u && we.utils.toArray(u), i = i || 1e-9, a = a || 0, f = f || 1, U = U || 1, t = t || "wheel,touch,pointer", o = !1 !== o, r = r || parseFloat(ke.getComputedStyle(Ee).lineHeight) || 22;
        var ee, te, re, ne, ie, oe, ae, se = this,
            le = 0,
            ce = 0,
            ue = J(n, je),
            fe = J(n, Je),
            de = ue(),
            pe = fe(),
            ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === De[0],
            he = z(n),
            be = n.ownerDocument || Me,
            ve = [0, 0, 0],
            me = [0, 0, 0],
            ye = 0,
            xe = se.onPress = function(e) {
                Le(e, 1) || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = L(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), A(R ? n : be, De[1], Qe, s, !0), se.deltaX = se.deltaY = 0, b && b(se))
            };
        te = se._dc = we.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = K(0, 50, !0), se._vy = K(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, se.enable = function(e) {
            return se.isEnabled || (A(he ? be : n, "scroll", E), 0 <= t.indexOf("scroll") && A(he ? be : n, "scroll", Ve, s, q), 0 <= t.indexOf("wheel") && A(n, "wheel", We, s, q), (0 <= t.indexOf("touch") && Ce || 0 <= t.indexOf("pointer")) && (A(n, De[0], xe, s, q), A(be, De[2], Se), A(be, De[3], Se), $ && A(n, "click", Ke, !1, !0), G && A(n, "click", $e), H && A(be, "gesturestart", Te), F && A(be, "gestureend", Ue), C && A(n, Ie + "enter", Ye), D && A(n, Ie + "leave", Ze), X && A(n, Ie + "move", Xe)), se.isEnabled = !0, e && e.type && xe(e), j && j(se)), se
        }, se.disable = function() {
            se.isEnabled && (Re.filter(function(e) {
                return e !== se && z(e.target)
            }).length || B(he ? be : n, "scroll", E), se.isPressed && (se._vx.reset(), se._vy.reset(), B(R ? n : be, De[1], Qe, !0)), B(he ? be : n, "scroll", Ve, q), B(n, "wheel", We, q), B(n, De[0], xe, q), B(be, De[2], Se), B(be, De[3], Se), B(n, "click", Ke, !0), B(n, "click", $e), B(be, "gesturestart", Te), B(be, "gestureend", Ue), B(n, Ie + "enter", Ye), B(n, Ie + "leave", Ze), B(n, Ie + "move", Xe), se.isEnabled = se.isPressed = se.isDragging = !1, V && V(se))
        }, se.kill = function() {
            se.disable();
            var e = Re.indexOf(se);
            0 <= e && Re.splice(e, 1), ze === se && (ze = 0)
        }, Re.push(se), R && z(n) && (ze = se), se.enable(d)
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]), Observer);

    function Observer(e) {
        this.init(e)
    }
    P.version = "3.11.0", P.create = function(e) {
        return new P(e)
    }, P.register = O, P.getAll = function() {
        return Re.slice()
    }, P.getById = function(t) {
        return Re.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, q() && we.registerPlugin(P);

    function wa() {
        return st = 1
    }

    function xa() {
        return st = 0
    }

    function ya(e) {
        return e
    }

    function za(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function Aa() {
        return "undefined" != typeof window
    }

    function Ba() {
        return Ge || Aa() && (Ge = window.gsap) && Ge.registerPlugin && Ge
    }

    function Ca(e) {
        return !!~s.indexOf(e)
    }

    function Da(e) {
        return y(e, "getBoundingClientRect") || (Ca(e) ? function() {
            return Xt.width = qe.innerWidth, Xt.height = qe.innerHeight, Xt
        } : function() {
            return Ct(e)
        })
    }

    function Ga(e, t) {
        var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
        return (r = "scroll" + n) && (o = y(e, r)) ? o() - Da(e)()[i] : Ca(e) ? (tt[r] || rt[r]) - (qe["inner" + n] || tt["client" + n] || rt["client" + n]) : e[r] - e["offset" + n]
    }

    function Ha(e, t) {
        for (var r = 0; r < p.length; r += 3) t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2])
    }

    function Ia(e) {
        return "string" == typeof e
    }

    function Ja(e) {
        return "function" == typeof e
    }

    function Ka(e) {
        return "number" == typeof e
    }

    function La(e) {
        return "object" == typeof e
    }

    function Ma(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function Na(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }

    function cb(e) {
        return qe.getComputedStyle(e)
    }

    function eb(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function gb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function hb(e) {
        var t, r = [],
            n = e.labels,
            i = e.duration();
        for (t in n) r.push(n[t] / i);
        return r
    }

    function jb(i) {
        var o = Ge.utils.snap(i),
            a = Array.isArray(i) && i.slice(0).sort(function(e, t) {
                return e - t
            });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return o(e);
            if (0 < t) {
                for (e -= r, n = 0; n < a.length; n++)
                    if (a[n] >= e) return a[n];
                return a[n - 1]
            }
            for (n = a.length, e += r; n--;)
                if (a[n] <= e) return a[n];
            return a[0]
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = o(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i)
        }
    }

    function lb(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function mb(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        })
    }

    function nb(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function ob(e, t, r) {
        return r && r.wheelHandler && e(t, "wheel", r)
    }

    function sb(e, t) {
        if (Ia(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in D ? D[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function tb(e, t, r, n, i, o, a, s) {
        var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            p = et.createElement("div"),
            g = Ca(r) || "fixed" === y(r, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            b = g ? rt : r,
            v = -1 !== e.indexOf("start"),
            m = v ? l : c,
            x = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (x += (n === Je ? S : _) + ":" + (o + parseFloat(f)) + "px;"), a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = x, p.innerText = t || 0 === t ? e + "-" + t : e, b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p), p._offset = p["offset" + n.op.d2], X(p, 0, n, v), p
    }

    function yb() {
        return 34 < bt() - vt && U()
    }

    function zb() {
        h && h.isPressed && !(h.startX > rt.clientWidth) || (k.cache++, x = x || requestAnimationFrame(U), vt || H("scrollStart"), vt = bt())
    }

    function Ab() {
        m = qe.innerWidth, v = qe.innerHeight
    }

    function Bb() {
        k.cache++, at || g || et.fullscreenElement || et.webkitFullscreenElement || b && m === qe.innerWidth && !(Math.abs(qe.innerHeight - v) > .25 * qe.innerHeight) || l.restart(!0)
    }

    function Eb() {
        return nb(te, "scrollEnd", Eb) || V(!0)
    }

    function Hb(e) {
        for (var t = 0; t < W.length; t += 5)(!e || W[t + 4] && W[t + 4].query === e) && (W[t].style.cssText = W[t + 1], W[t].getBBox && W[t].setAttribute("transform", W[t + 2] || ""), W[t + 3].uncache = 1)
    }

    function Ib(e, t) {
        var r;
        for (lt = 0; lt < Bt.length; lt++) !(r = Bt[lt]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        t && Hb(t), t || H("revert")
    }

    function Jb() {
        return k.cache++ && k.forEach(function(e) {
            return "function" == typeof e && (e.rec = 0)
        })
    }

    function Ub(e, t, r, n) {
        if (!e._gsap.swappedIn) {
            for (var i, o = $.length, a = t.style, s = e.style; o--;) a[i = $[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[_] = s[S] = a.flexBasis = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[xt] = gb(e, je) + Et, a[wt] = gb(e, Je) + Et, a[Pt] = s[Mt] = s.top = s.left = "0", Lt(n), s[xt] = s.maxWidth = r[xt], s[wt] = s.maxHeight = r[wt], s[Pt] = r[Pt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    }

    function Xb(e) {
        for (var t = Q.length, r = e.style, n = [], i = 0; i < t; i++) n.push(Q[i], r[Q[i]]);
        return n.t = e, n
    }

    function $b(e, t, r, n, i, o, a, s, l, c, u, f, d) {
        Ja(e) && (e = e(s)), Ia(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? sb("0" + e.substr(3), r) : 0));
        var p, g, h, b = d ? d.time() : 0;
        if (d && d.seek(0), Ka(e)) a && X(a, r, n, !0);
        else {
            Ja(t) && (t = t(s));
            var v, m, y, x, w = (e || "0").split(" ");
            h = I(t) || rt, (v = Ct(h) || {}) && (v.left || v.top) || "none" !== cb(h).display || (x = h.style.display, h.style.display = "block", v = Ct(h), x ? h.style.display = x : h.style.removeProperty("display")), m = sb(w[0], v[n.d]), y = sb(w[1] || "0", r), e = v[n.p] - l[n.p] - c + m + i - y, a && X(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y
        }
        if (o) {
            var S = e + r,
                _ = o._isStart;
            p = "scroll" + n.d2, X(o, S, n, _ && 20 < S || !_ && (u ? Math.max(rt[p], tt[p]) : o.parentNode[p]) <= S + 1), u && (l = Ct(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + Et))
        }
        return d && h && (p = Ct(h), d.seek(f), g = Ct(h), d._caScrollDist = p[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e)
    }

    function ac(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === rt) {
                for (i in e._stOrig = a.cssText, o = cb(e)) + i || ee.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            Ge.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function bc(l, e) {
        function Bj(e, t, r, n, i) {
            var o = Bj.tween,
                a = t.onComplete,
                s = {};
            return r = r || f(), i = n && i || 0, n = n || e - r, o && o.kill(), c = Math.round(r), t[d] = e, (t.modifiers = s)[d] = function(e) {
                return (e = Math.round(f())) !== c && e !== u && 3 < Math.abs(e - c) && 3 < Math.abs(e - u) ? (o.kill(), Bj.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = Math.round(e)
            }, t.onComplete = function() {
                Bj.tween = 0, a && a.call(o)
            }, o = Bj.tween = Ge.to(l, t)
        }
        var c, u, f = J(l, e),
            d = "_scroll" + e.p2;
        return (l[d] = f).wheelHandler = function() {
            return Bj.tween && Bj.tween.kill() && (Bj.tween = 0)
        }, mb(l, "wheel", f.wheelHandler), Bj
    }
    var Ge, a, qe, et, tt, rt, s, l, nt, it, ot, c, at, st, u, lt, f, d, p, ct, ut, g, h, b, v, m, C, ft, dt, x, pt, gt, ht = 1,
        bt = Date.now,
        w = bt(),
        vt = 0,
        mt = 0,
        yt = Math.abs,
        S = "right",
        _ = "bottom",
        xt = "width",
        wt = "height",
        St = "Right",
        _t = "Left",
        Tt = "Top",
        kt = "Bottom",
        Pt = "padding",
        Mt = "margin",
        At = "Width",
        T = "Height",
        Et = "px",
        Ct = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== cb(e)[u] && Ge.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        Ot = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        It = {
            toggleActions: "play",
            anticipatePin: 0
        },
        D = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        X = function _positionMarker(e, t, r, n) {
            var i = {
                    display: "block"
                },
                o = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + At] = 1, i["border" + a + At] = 0, i[r.p] = t + "px", Ge.set(e, i)
        },
        Bt = [],
        zt = {},
        Y = {},
        R = [],
        H = function _dispatch(e) {
            return Y[e] && Y[e].map(function(e) {
                return e()
            }) || R
        },
        W = [],
        j = 0,
        V = function _refreshAll(e, t) {
            if (!vt || e) {
                pt = !0;
                var r = H("refreshInit");
                ct && te.sort(), t || Ib(), Bt.slice(0).forEach(function(e) {
                    return e.refresh()
                }), Bt.forEach(function(e) {
                    return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Ga(e.scroller, e._dir)))
                }), r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }), Jb(), l.pause(), j++, pt = !1, H("refresh")
            } else mb(te, "scrollEnd", Eb)
        },
        G = 0,
        Dt = 1,
        U = function _updateAll() {
            if (!pt) {
                te.isUpdating = !0, gt && gt.update(0);
                var e = Bt.length,
                    t = bt(),
                    r = 50 <= t - w,
                    n = e && Bt[0].scroll();
                if (Dt = n < G ? -1 : 1, G = n, r && (vt && !st && 200 < t - vt && (vt = 0, H("scrollEnd")), ot = w, w = t), Dt < 0) {
                    for (lt = e; 0 < lt--;) Bt[lt] && Bt[lt].update(0, r);
                    Dt = 1
                } else
                    for (lt = 0; lt < e; lt++) Bt[lt] && Bt[lt].update(0, r);
                te.isUpdating = !1
            }
            x = 0
        },
        $ = ["left", "top", _, S, Mt + kt, Mt + St, Mt + Tt, Mt + _t, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Q = $.concat([xt, wt, "boxSizing", "max" + At, "max" + T, "position", Mt, Pt, Pt + Tt, Pt + St, Pt + kt, Pt + _t]),
        Z = /([A-Z])/g,
        Lt = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    i = e.length,
                    o = 0;
                for ((e.t._gsap || Ge.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Z, "-$1").toLowerCase())
            }
        },
        Xt = {
            left: 0,
            top: 0
        },
        ee = /(webkit|moz|length|cssText|inset)/i,
        te = (ScrollTrigger.prototype.init = function init(_, T) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), mt) {
                var k, n, p, P, M, A, E, C, O, B, z, e, D, L, X, Y, R, t, N, v, H, F, m, W, x, w, r, S, j, V, i, g, G, K, U, q, $, o, Q = (_ = eb(Ia(_) || Ka(_) || _.nodeType ? {
                        trigger: _
                    } : _, It)).onUpdate,
                    Z = _.toggleClass,
                    a = _.id,
                    ee = _.onToggle,
                    te = _.onRefresh,
                    re = _.scrub,
                    ne = _.trigger,
                    ie = _.pin,
                    oe = _.pinSpacing,
                    ae = _.invalidateOnRefresh,
                    se = _.anticipatePin,
                    s = _.onScrubComplete,
                    h = _.onSnapComplete,
                    le = _.once,
                    ce = _.snap,
                    ue = _.pinReparent,
                    l = _.pinSpacer,
                    fe = _.containerAnimation,
                    de = _.fastScrollEnd,
                    pe = _.preventOverlaps,
                    ge = _.horizontal || _.containerAnimation && !1 !== _.horizontal ? je : Je,
                    he = !re && 0 !== re,
                    be = I(_.scroller || qe),
                    c = Ge.core.getCache(be),
                    ve = Ca(be),
                    me = "fixed" === ("pinType" in _ ? _.pinType : y(be, "pinType") || ve && "fixed"),
                    ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
                    xe = he && _.toggleActions.split(" "),
                    u = "markers" in _ ? _.markers : It.markers,
                    we = ve ? 0 : parseFloat(cb(be)["border" + ge.p2 + At]) || 0,
                    Se = this,
                    _e = _.onRefreshInit && function() {
                        return _.onRefreshInit(Se)
                    },
                    Te = function _getSizeFunc(e, t, r) {
                        var n = r.d,
                            i = r.d2,
                            o = r.a;
                        return (o = y(e, "getBoundingClientRect")) ? function() {
                            return o()[n]
                        } : function() {
                            return (t ? qe["inner" + i] : e["client" + i]) || 0
                        }
                    }(be, ve, ge),
                    ke = function _getOffsetsFunc(e, t) {
                        return !t || ~He.indexOf(e) ? Da(e) : function() {
                            return Xt
                        }
                    }(be, ve),
                    Pe = 0,
                    Me = 0,
                    Ae = J(be, ge);
                if (ft(Se), Se._dir = ge, se *= 45, Se.scroller = be, Se.scroll = fe ? fe.time.bind(fe) : Ae, P = Ae(), Se.vars = _, T = T || _.animation, "refreshPriority" in _ && (ct = 1, -9999 === _.refreshPriority && (gt = Se)), c.tweenScroll = c.tweenScroll || {
                        top: bc(be, Je),
                        left: bc(be, je)
                    }, Se.tweenTo = k = c.tweenScroll[ge.p], Se.scrubDuration = function(e) {
                        (i = Ka(e) && e) ? V ? V.duration(e) : V = Ge.to(T, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: i,
                            paused: !0,
                            onComplete: function onComplete() {
                                return s && s(Se)
                            }
                        }): (V && V.progress(1).kill(), V = 0)
                    }, T && (T.vars.lazy = !1, T._initted || !1 !== T.vars.immediateRender && !1 !== _.immediateRender && T.render(0, !0, !0), Se.animation = T.pause(), (T.scrollTrigger = Se).scrubDuration(re), S = 0, a = a || T.vars.id), Bt.push(Se), ce && (La(ce) && !ce.push || (ce = {
                        snapTo: ce
                    }), "scrollBehavior" in rt.style && Ge.set(ve ? [rt, tt] : be, {
                        scrollBehavior: "auto"
                    }), p = Ja(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getClosestLabel(t) {
                        return function(e) {
                            return Ge.utils.snap(hb(t), e)
                        }
                    }(T) : "labelsDirectional" === ce.snapTo ? function _getLabelAtDirection(r) {
                        return function(e, t) {
                            return jb(hb(r))(e, t.direction)
                        }
                    }(T) : !1 !== ce.directional ? function(e, t) {
                        return jb(ce.snapTo)(e, bt() - Me < 500 ? 0 : t.direction)
                    } : Ge.utils.snap(ce.snapTo), g = ce.duration || {
                        min: .1,
                        max: 2
                    }, g = La(g) ? it(g.min, g.max) : it(g, g), G = Ge.delayedCall(ce.delay || i / 2 || .1, function() {
                        var e = Ae(),
                            t = bt() - Me < 500,
                            r = k.tween;
                        if (!(t || Math.abs(Se.getVelocity()) < 10) || r || st || Pe === e) Se.isActive && Pe !== e && G.restart(!0);
                        else {
                            var n = (e - A) / D,
                                i = T && !he ? T.totalProgress() : n,
                                o = t ? 0 : (i - j) / (bt() - ot) * 1e3 || 0,
                                a = Ge.utils.clamp(-n, 1 - n, yt(o / 2) * o / .185),
                                s = n + (!1 === ce.inertia ? 0 : a),
                                l = it(0, 1, p(s, Se)),
                                c = Math.round(A + l * D),
                                u = ce.onStart,
                                f = ce.onInterrupt,
                                d = ce.onComplete;
                            if (e <= E && A <= e && c !== e) {
                                if (r && !r._initted && r.data <= yt(c - e)) return;
                                !1 === ce.inertia && (a = l - n), k(c, {
                                    duration: g(yt(.185 * Math.max(yt(s - i), yt(l - i)) / o / .05 || 0)),
                                    ease: ce.ease || "power3",
                                    data: yt(c - e),
                                    onInterrupt: function onInterrupt() {
                                        return G.restart(!0) && f && f(Se)
                                    },
                                    onComplete: function onComplete() {
                                        Se.update(), Pe = Ae(), S = j = T && !he ? T.totalProgress() : Se.progress, h && h(Se), d && d(Se)
                                    }
                                }, e, a * D, c - e - a * D), u && u(Se, k.tween)
                            }
                        }
                    }).pause()), a && (zt[a] = Se), o = (o = (ne = Se.trigger = I(ne || ie)) && ne._gsap && ne._gsap.stRevert) && o(Se), ie = !0 === ie ? ne : I(ie), Ia(Z) && (Z = {
                        targets: ne,
                        className: Z
                    }), ie && (!1 === oe || oe === Mt || (oe = !(!oe && "flex" === cb(ie.parentNode).display) && Pt), Se.pin = ie, !1 !== _.force3D && Ge.set(ie, {
                        force3D: !0
                    }), (n = Ge.core.getCache(ie)).spacer ? L = n.pinState : (l && ((l = I(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = Xb(l))), n.spacer = R = l || et.createElement("div"), R.classList.add("pin-spacer"), a && R.classList.add("pin-spacer-" + a), n.pinState = L = Xb(ie)), Se.spacer = R = n.spacer, r = cb(ie), m = r[oe + ge.os2], N = Ge.getProperty(ie), v = Ge.quickSetter(ie, ge.a, Et), Ub(ie, R, r), Y = Xb(ie)), u) {
                    e = La(u) ? eb(u, Ot) : Ot, B = tb("scroller-start", a, be, ge, e, 0), z = tb("scroller-end", a, be, ge, e, 0, B), t = B["offset" + ge.op.d2];
                    var f = I(y(be, "content") || be);
                    C = this.markerStart = tb("start", a, f, ge, e, t, 0, fe), O = this.markerEnd = tb("end", a, f, ge, e, t, 0, fe), fe && ($ = Ge.quickSetter([C, O], ge.a, Et)), me || He.length && !0 === y(be, "fixedMarkers") || (function _makePositionable(e) {
                        var t = cb(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                    }(ve ? rt : be), Ge.set([B, z], {
                        force3D: !0
                    }), x = Ge.quickSetter(B, ge.a, Et), w = Ge.quickSetter(z, ge.a, Et))
                }
                if (fe) {
                    var d = fe.vars.onUpdate,
                        b = fe.vars.onUpdateParams;
                    fe.eventCallback("onUpdate", function() {
                        Se.update(0, 0, 1), d && d.apply(b || [])
                    })
                }
                Se.previous = function() {
                    return Bt[Bt.indexOf(Se) - 1]
                }, Se.next = function() {
                    return Bt[Bt.indexOf(Se) + 1]
                }, Se.revert = function(e, t) {
                    if (!t) return Se.kill(!0);
                    var r = !1 !== e || !Se.enabled,
                        n = at;
                    r !== Se.isReverted && (r && (!Se.scroll.rec && at && pt && (Se.scroll.rec = Ae()), U = Math.max(Ae(), Se.scroll.rec || 0), K = Se.progress, q = T && T.progress()), C && [C, O, B, z].forEach(function(e) {
                        return e.style.display = r ? "none" : "block"
                    }), r && (at = 1), Se.update(r), at = n, ie && (r ? function _swapPinOut(e, t, r) {
                        Lt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Lt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                            var i = t.parentNode;
                            i && (i.insertBefore(e, t), i.removeChild(t))
                        }
                        e._gsap.swappedIn = !1
                    }(ie, R, L) : ue && Se.isActive || Ub(ie, R, cb(ie), W)), Se.isReverted = r)
                }, Se.refresh = function(e, t) {
                    if (!at && Se.enabled || t)
                        if (ie && e && vt) mb(ScrollTrigger, "scrollEnd", Eb);
                        else {
                            !pt && _e && _e(Se), at = 1, Me = bt(), k.tween && (k.tween.kill(), k.tween = 0), V && V.pause(), ae && T && T.revert().invalidate(), Se.isReverted || Se.revert(!0, !0);
                            for (var r, n, i, o, a, s, l, c, u, f, d = Te(), p = ke(), g = fe ? fe.duration() : Ga(be, ge), h = 0, b = 0, v = _.end, m = _.endTrigger || ne, y = _.start || (0 !== _.start && ne ? ie ? "0 0" : "0 100%" : 0), x = Se.pinnedContainer = _.pinnedContainer && I(_.pinnedContainer), w = ne && Math.max(0, Bt.indexOf(Se)) || 0, S = w; S--;)(s = Bt[S]).end || s.refresh(0, 1) || (at = 1), !(l = s.pin) || l !== ne && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert(!0, !0)), s !== Bt[S] && (w--, S--);
                            for (Ja(y) && (y = y(Se)), A = $b(y, ne, d, ge, Ae(), C, B, Se, p, we, me, g, fe) || (ie ? -.001 : 0), Ja(v) && (v = v(Se)), Ia(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Ia(y) ? y.split(" ")[0] : "") + v : (h = sb(v.substr(2), d), v = Ia(y) ? y : A + h, m = ne)), E = Math.max(A, $b(v || (m ? "100% 0" : g), m, d, ge, Ae() + h, O, z, Se, p, we, me, g, fe)) || -.001, D = E - A || (A -= .01) && .001, h = 0, S = w; S--;)(l = (s = Bt[S]).pin) && s.start - s._pinPush < A && !fe && 0 < s.end && (r = s.end - s.start, l !== ne && l !== x || Ka(y) || (h += r * (1 - s.progress)), l === ie && (b += r));
                            if (A += h, E += h, Se._pinPush = b, C && h && ((r = {})[ge.a] = "+=" + h, x && (r[ge.p] = "-=" + Ae()), Ge.set([C, O], r)), ie) r = cb(ie), o = ge === Je, i = Ae(), H = parseFloat(N(ge.a)) + b, !g && 1 < E && ((ve ? rt : be).style["overflow-" + ge.a] = "scroll"), Ub(ie, R, r), Y = Xb(ie), n = Ct(ie, !0), c = me && J(be, o ? je : Je)(), oe && ((W = [oe + ge.os2, D + b + Et]).t = R, (S = oe === Pt ? gb(ie, ge) + D + b : 0) && W.push(ge.d, S + Et), Lt(W), me && Ae(U)), me && ((a = {
                                top: n.top + (o ? i - A : c) + Et,
                                left: n.left + (o ? c : i - A) + Et,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[xt] = a.maxWidth = Math.ceil(n.width) + Et, a[wt] = a.maxHeight = Math.ceil(n.height) + Et, a[Mt] = a[Mt + Tt] = a[Mt + St] = a[Mt + kt] = a[Mt + _t] = "0", a[Pt] = r[Pt], a[Pt + Tt] = r[Pt + Tt], a[Pt + St] = r[Pt + St], a[Pt + kt] = r[Pt + kt], a[Pt + _t] = r[Pt + _t], X = function _copyState(e, t, r) {
                                for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                                return i.t = e.t, i
                            }(L, a, ue)), T ? (u = T._initted, ut(1), T.render(T.duration(), !0, !0), F = N(ge.a) - H + D + b, D !== F && me && X.splice(X.length - 2, 2), T.render(0, !0, !0), u || T.invalidate(), ut(0)) : F = D;
                            else if (ne && Ae() && !fe)
                                for (n = ne.parentNode; n && n !== rt;) n._pinOffset && (A -= n._pinOffset, E -= n._pinOffset), n = n.parentNode;
                            f && f.forEach(function(e) {
                                return e.revert(!1, !0)
                            }), Se.start = A, Se.end = E, P = M = Ae(), fe || (P < U && Ae(U), Se.scroll.rec = 0), Se.revert(!1, !0), G && (Pe = -1, Se.isActive && Ae(A + D * K), G.restart(!0)), at = 0, T && he && (T._initted || q) && T.progress() !== q && T.progress(q, !0).render(T.time(), !0, !0), K === Se.progress && !fe || (T && !he && T.totalProgress(K, !0), Se.progress = (P - A) / D === K ? 0 : K, Se.update(0, 0, 1)), ie && oe && (R._pinOffset = Math.round(Se.progress * F)), te && te(Se)
                        }
                }, Se.getVelocity = function() {
                    return (Ae() - M) / (bt() - ot) * 1e3 || 0
                }, Se.endAnimation = function() {
                    Ma(Se.callbackAnimation), T && (V ? V.progress(1) : T.paused() ? he || Ma(T, Se.direction < 0, 1) : Ma(T, T.reversed()))
                }, Se.labelToScroll = function(e) {
                    return T && T.labels && (A || Se.refresh() || A) + T.labels[e] / T.duration() * D || 0
                }, Se.getTrailing = function(t) {
                    var e = Bt.indexOf(Se),
                        r = 0 < Se.direction ? Bt.slice(0, e).reverse() : Bt.slice(e + 1);
                    return (Ia(t) ? r.filter(function(e) {
                        return e.vars.preventOverlaps === t
                    }) : r).filter(function(e) {
                        return 0 < Se.direction ? e.end <= A : e.start >= E
                    })
                }, Se.update = function(e, t, r) {
                    if (!fe || r || e) {
                        var n, i, o, a, s, l, c, u = Se.scroll(),
                            f = e ? 0 : (u - A) / D,
                            d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                            p = Se.progress;
                        if (t && (M = P, P = fe ? Ae() : u, ce && (j = S, S = T && !he ? T.totalProgress() : d)), se && !d && ie && !at && !ht && vt && A < u + (u - M) / (bt() - ot) * se && (d = 1e-4), d !== p && Se.enabled) {
                            if (a = (s = (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, Se.direction = p < d ? 1 : -1, Se.progress = d, a && !at && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, he && (o = !s && "none" !== xe[i + 1] && xe[i + 1] || xe[i], c = T && ("complete" === o || "reset" === o || o in T))), pe && (s || c) && (c || re || !T) && (Ja(pe) ? pe(Se) : Se.getTrailing(pe).forEach(function(e) {
                                    return e.endAnimation()
                                })), he || (!V || at || ht ? T && T.totalProgress(d, !!at) : ((fe || gt && gt !== Se) && V.render(V._dp._time - V._start), V.resetTo ? V.resetTo("totalProgress", d, T._tTime / T._tDur) : (V.vars.totalProgress = d, V.invalidate().restart()))), ie)
                                if (e && oe && (R.style[oe + ge.os2] = m), me) {
                                    if (a) {
                                        if (l = !e && p < d && u < E + 1 && u + 1 >= Ga(be, ge), ue)
                                            if (e || !n && !l) ac(ie, R);
                                            else {
                                                var g = Ct(ie, !0),
                                                    h = u - A;
                                                ac(ie, rt, g.top + (ge === Je ? h : 0) + Et, g.left + (ge === Je ? 0 : h) + Et)
                                            }
                                        Lt(n || l ? X : Y), F !== D && d < 1 && n || v(H + (1 !== d || l ? 0 : F))
                                    }
                                } else v(za(H + F * d));
                            !ce || k.tween || at || ht || G.restart(!0), Z && (s || le && d && (d < 1 || !dt)) && nt(Z.targets).forEach(function(e) {
                                return e.classList[n || le ? "add" : "remove"](Z.className)
                            }), !Q || he || e || Q(Se), a && !at ? (he && (c && ("complete" === o ? T.pause().totalProgress(1) : "reset" === o ? T.restart(!0).pause() : "restart" === o ? T.restart(!0) : T[o]()), Q && Q(Se)), !s && dt || (ee && s && Na(Se, ee), ye[i] && Na(Se, ye[i]), le && (1 === d ? Se.kill(!1, 1) : ye[i] = 0), s || ye[i = 1 === d ? 1 : 3] && Na(Se, ye[i])), de && !n && Math.abs(Se.getVelocity()) > (Ka(de) ? de : 2500) && (Ma(Se.callbackAnimation), V ? V.progress(1) : Ma(T, !d, 1))) : he && Q && !at && Q(Se)
                        }
                        if (w) {
                            var b = fe ? u / fe.duration() * (fe._caScrollDist || 0) : u;
                            x(b + (B._isFlipped ? 1 : 0)), w(b)
                        }
                        $ && $(-u / fe.duration() * (fe._caScrollDist || 0))
                    }
                }, Se.enable = function(e, t) {
                    Se.enabled || (Se.enabled = !0, mb(be, "resize", Bb), mb(ve ? et : be, "scroll", zb), _e && mb(ScrollTrigger, "refreshInit", _e), !1 !== e && (Se.progress = K = 0, P = M = Pe = Ae()), !1 !== t && Se.refresh())
                }, Se.getTween = function(e) {
                    return e && k ? k.tween : V
                }, Se.setPositions = function(e, t) {
                    ie && (H += e - A, F += t - e - D), Se.start = A = e, Se.end = E = t, D = t - e, Se.update()
                }, Se.disable = function(e, t) {
                    if (Se.enabled && (!1 !== e && Se.revert(!0, !0), Se.enabled = Se.isActive = !1, t || V && V.pause(), U = 0, n && (n.uncache = 1), _e && nb(ScrollTrigger, "refreshInit", _e), G && (G.pause(), k.tween && k.tween.kill() && (k.tween = 0)), !ve)) {
                        for (var r = Bt.length; r--;)
                            if (Bt[r].scroller === be && Bt[r] !== Se) return;
                        nb(be, "resize", Bb), nb(be, "scroll", zb)
                    }
                }, Se.kill = function(e, t) {
                    Se.disable(e, t), V && !t && V.kill(), a && delete zt[a];
                    var r = Bt.indexOf(Se);
                    0 <= r && Bt.splice(r, 1), r === lt && 0 < Dt && lt--, r = 0, Bt.forEach(function(e) {
                        return e.scroller === Se.scroller && (r = 1)
                    }), r || (Se.scroll.rec = 0), T && (T.scrollTrigger = null, e && T.render(-1), t || T.kill()), C && [C, O, B, z].forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }), gt === Se && (gt = 0), ie && (n && (n.uncache = 1), r = 0, Bt.forEach(function(e) {
                        return e.pin === ie && r++
                    }), r || (n.spacer = 0)), _.onKill && _.onKill(Se)
                }, Se.enable(!1, !1), o && o(Se), T && T.add && !D ? Ge.delayedCall(.01, function() {
                    return A || E || Se.refresh()
                }) && (D = .01) && (A = E = 0) : Se.refresh()
            } else this.update = this.refresh = this.kill = ya
        }, ScrollTrigger.register = function register(e) {
            return a || (Ge = e || Ba(), Aa() && window.document && ScrollTrigger.enable(), a = mt), a
        }, ScrollTrigger.defaults = function defaults(e) {
            if (e)
                for (var t in e) It[t] = e[t];
            return It
        }, ScrollTrigger.disable = function disable(t, r) {
            mt = 0, Bt.forEach(function(e) {
                return e[r ? "kill" : "disable"](t)
            }), nb(qe, "wheel", zb), nb(et, "scroll", zb), clearInterval(c), nb(et, "touchcancel", ya), nb(rt, "touchstart", ya), lb(nb, et, "pointerdown,touchstart,mousedown", wa), lb(nb, et, "pointerup,touchend,mouseup", xa), l.kill(), Ha(nb);
            for (var e = 0; e < k.length; e += 3) ob(nb, k[e], k[e + 1]), ob(nb, k[e], k[e + 2])
        }, ScrollTrigger.enable = function enable() {
            if (qe = window, et = document, tt = et.documentElement, rt = et.body, Ge && (nt = Ge.utils.toArray, it = Ge.utils.clamp, ft = Ge.core.context || ya, ut = Ge.core.suppressOverwrites || ya, Ge.core.globals("ScrollTrigger", ScrollTrigger), rt)) {
                mt = 1, P.register(Ge), ScrollTrigger.isTouch = P.isTouch, C = P.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), mb(qe, "wheel", zb), s = [qe, et, tt, rt], Ge.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                    var t, r;
                    for (r in e) t ? t.add(r, e[r]) : t = Ge.matchMedia(r, e[r]);
                    return t
                }, Ge.addEventListener("matchMediaInit", function() {
                    return Ib()
                }), Ge.addEventListener("matchMediaRevert", function() {
                    return Hb()
                }), Ge.addEventListener("matchMedia", function() {
                    V(0, 1), H("matchMedia")
                }), Ge.matchMedia("(orientation: portrait)", function() {
                    return Ab(), Ab
                })) : console.warn("Requires GSAP 3.11.0 or later"), mb(et, "scroll", zb);
                var e, t, r = rt.style,
                    n = r.borderTopStyle,
                    i = Ge.core.Animation.prototype;
                for (i.revert || Object.defineProperty(i, "revert", {
                        value: function value() {
                            return this.time(-.01, !0)
                        }
                    }), r.borderTopStyle = "solid", e = Ct(rt), Je.m = Math.round(e.top + Je.sc()) || 0, je.m = Math.round(e.left + je.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), c = setInterval(yb, 250), Ge.delayedCall(.5, function() {
                        return ht = 0
                    }), mb(et, "touchcancel", ya), mb(rt, "touchstart", ya), lb(mb, et, "pointerdown,touchstart,mousedown", wa), lb(mb, et, "pointerup,touchend,mouseup", xa), u = Ge.utils.checkPrefix("transform"), Q.push(u), a = bt(), l = Ge.delayedCall(.2, V).pause(), p = [et, "visibilitychange", function() {
                        var e = qe.innerWidth,
                            t = qe.innerHeight;
                        et.hidden ? (f = e, d = t) : f === e && d === t || Bb()
                    }, et, "DOMContentLoaded", V, qe, "load", V, qe, "resize", Bb], Ha(mb), Bt.forEach(function(e) {
                        return e.enable(0, 1)
                    }), t = 0; t < k.length; t += 3) ob(nb, k[t], k[t + 1]), ob(nb, k[t], k[t + 2])
            }
        }, ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (dt = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(c) || (c = t) && setInterval(yb, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ha(nb) || Ha(mb, e.autoRefreshEvents || "none"), g = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = I(e),
                n = k.indexOf(r),
                i = Ca(r);
            ~n && k.splice(n, i ? 6 : 2), t && (i ? He.unshift(qe, t, rt, t, tt, t) : He.unshift(r, t))
        }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
            Bt.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (Ia(e) ? I(e) : e).getBoundingClientRect(),
                i = n[r ? xt : wt] * t || 0;
            return r ? 0 < n.right - i && n.left + i < qe.innerWidth : 0 < n.bottom - i && n.top + i < qe.innerHeight
        }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            Ia(e) && (e = I(e));
            var n = e.getBoundingClientRect(),
                i = n[r ? xt : wt],
                o = null == t ? i / 2 : t in D ? D[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return r ? (n.left + o) / qe.innerWidth : (n.top + o) / qe.innerHeight
        }, ScrollTrigger.killAll = function killAll(e) {
            if (Bt.forEach(function(e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill()
                }), !0 !== e) {
                var t = Y.killAll || [];
                Y = {}, t.forEach(function(e) {
                    return e()
                })
            }
        }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        a || ScrollTrigger.register(Ge) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    te.version = "3.11.0", te.saveStyles = function(e) {
        return e ? nt(e).forEach(function(e) {
            if (e && e.style) {
                var t = W.indexOf(e);
                0 <= t && W.splice(t, 5), W.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ge.core.getCache(e), ft())
            }
        }) : W
    }, te.revert = function(e, t) {
        return Ib(!e, t)
    }, te.create = function(e, t) {
        return new te(e, t)
    }, te.refresh = function(e) {
        return e ? Bb() : (a || te.register()) && V(!0)
    }, te.update = U, te.clearScrollMemory = Jb, te.maxScroll = function(e, t) {
        return Ga(e, t ? je : Je)
    }, te.getScrollFunc = function(e, t) {
        return J(I(e), t ? je : Je)
    }, te.getById = function(e) {
        return zt[e]
    }, te.getAll = function() {
        return Bt.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, te.isScrolling = function() {
        return !!vt
    }, te.snapDirectional = jb, te.addEventListener = function(e, t) {
        var r = Y[e] || (Y[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, te.removeEventListener = function(e, t) {
        var r = Y[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, te.batch = function(e, t) {
        function io(e, t) {
            var r = [],
                n = [],
                i = Ge.delayedCall(o, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
            }
        }
        var r, n = [],
            i = {},
            o = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) i[r] = "on" === r.substr(0, 2) && Ja(t[r]) && "onRefreshInit" !== r ? io(0, t[r]) : t[r];
        return Ja(a) && (a = a(), mb(te, "refresh", function() {
            return a = t.batchMax()
        })), nt(e).forEach(function(e) {
            var t = {};
            for (r in i) t[r] = i[r];
            t.trigger = e, n.push(te.create(t))
        }), n
    };

    function dc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }

    function ec(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (P.isTouch ? " pinch-zoom" : "") : "none", e === tt && ec(rt, t)
    }

    function gc(e) {
        var t, r = e.event,
            n = e.target,
            i = e.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = o._gsap || Ge.core.getCache(o),
            s = bt();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; o && o.scrollHeight <= o.clientHeight;) o = o.parentNode;
            a._isScroll = o && !Ca(o) && o !== n && (ne[(t = cb(o)).overflowY] || ne[t.overflowX]), a._isScrollT = s
        }!a._isScroll && "x" !== i || (r.stopPropagation(), r._gsapAllow = !0)
    }

    function hc(e, t, r, n) {
        return P.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && gc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && mb(et, P.eventTypes[0], oe, !1, !0)
            },
            onDisable: function onDisable() {
                return nb(et, P.eventTypes[0], oe, !0)
            }
        })
    }

    function lc(e) {
        function ep() {
            return i = !1
        }

        function hp() {
            o = Ga(d, Je), T = it(C ? 1 : 0, o), f && (_ = it(0, Ga(d, je))), l = j
        }

        function ip() {
            h._gsap.y = za(parseFloat(h._gsap.y) + b.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
        }

        function op() {
            hp(), a.isActive() && a.vars.scrollY > o && (b() > o ? a.progress(1) && b(o) : a.resetTo("scrollY", o))
        }
        La(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n, o, l, i, a, c, u, s, f = e.normalizeScrollX,
            t = e.momentum,
            r = e.allowNestedScroll,
            d = I(e.target) || tt,
            p = Ge.core.globals().ScrollSmoother,
            g = p && p.get(),
            h = C && (e.content && I(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
            b = J(d, Je),
            v = J(d, je),
            m = 1,
            y = (P.isTouch && qe.visualViewport ? qe.visualViewport.scale * qe.visualViewport.width : qe.outerWidth) / qe.innerWidth,
            x = 0,
            w = Ja(t) ? function() {
                return t(n)
            } : function() {
                return t || 2.8
            },
            S = hc(d, e.type, !0, r),
            _ = ya,
            T = ya;
        return h && Ge.set(h, {
            y: "+=0"
        }), e.ignoreCheck = function(e) {
            return C && "touchmove" === e.type && function ignoreDrag() {
                if (i) {
                    requestAnimationFrame(ep);
                    var e = za(n.deltaY / 2),
                        t = T(b.v - e);
                    if (h && t !== b.v + b.offset) {
                        b.offset = t - b.v;
                        var r = za((parseFloat(h && h._gsap.y) || 0) - b.offset);
                        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", h._gsap.y = r + "px", b.cacheID = k.cache, U()
                    }
                    return !0
                }
                b.offset && ip(), i = !0
            }() || 1.05 < m && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
        }, e.onPress = function() {
            var e = m;
            m = za((qe.visualViewport && qe.visualViewport.scale || 1) / y), a.pause(), e !== m && ec(d, 1.01 < m || !f && "x"), c = v(), u = b(), hp(), l = j
        }, e.onRelease = e.onGestureStart = function(e, t) {
            if (b.offset && ip(), t) {
                k.cache++;
                var r, n, i = w();
                f && (n = (r = v()) + .05 * i * -e.velocityX / .227, i *= dc(v, r, n, Ga(d, je)), a.vars.scrollX = _(n)), n = (r = b()) + .05 * i * -e.velocityY / .227, i *= dc(b, r, n, Ga(d, Je)), a.vars.scrollY = T(n), a.invalidate().duration(i).play(.01), (C && a.vars.scrollY >= o || o - 1 <= r) && Ge.to({}, {
                    onUpdate: op,
                    duration: i
                })
            } else s.restart(!0)
        }, e.onWheel = function() {
            a._ts && a.pause(), 1e3 < bt() - x && (l = 0, x = bt())
        }, e.onChange = function(e, t, r, n, i) {
            if (j !== l && hp(), t && f && v(_(n[2] === t ? c + (e.startX - e.x) : v() + t - n[1])), r) {
                b.offset && ip();
                var o = i[2] === r,
                    a = o ? u + e.startY - e.y : b() + r - i[1],
                    s = T(a);
                o && a !== s && (u += s - a), b(s)
            }(r || t) && U()
        }, e.onEnable = function() {
            ec(d, !f && "x"), mb(qe, "resize", op), S.enable()
        }, e.onDisable = function() {
            ec(d, !0), nb(qe, "resize", op), S.kill()
        }, e.lockAxis = !1 !== e.lockAxis, ((n = new P(e)).iOS = C) && !b() && b(1), C && Ge.ticker.add(ya), s = n._dc, a = Ge.to(n, {
            ease: "power4",
            paused: !0,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: s.vars.onComplete
        }), n
    }
    var re, ne = {
            auto: 1,
            scroll: 1
        },
        ie = /(input|label|select|textarea)/i,
        oe = function _captureInputs(e) {
            var t = ie.test(e.target.tagName);
            (t || re) && (e._gsapAllow = !0, re = t)
        };
    te.sort = function(e) {
        return Bt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, te.observe = function(e) {
        return new P(e)
    }, te.normalizeScroll = function(e) {
        if (void 0 === e) return h;
        if (!0 === e && h) return h.enable();
        if (!1 === e) return h && h.kill();
        var t = e instanceof P ? e : lc(e);
        return h && h.target === t.target && h.kill(), Ca(t.target) && (h = t), t
    }, te.core = {
        _getVelocityProp: K,
        _inputObserver: hc,
        _scrollers: k,
        _proxies: He,
        bridge: {
            ss: function ss() {
                vt || H("scrollStart"), vt = bt()
            },
            ref: function ref() {
                return at
            }
        }
    }, Ba() && Ge.registerPlugin(te), e.ScrollTrigger = te, e.default = te;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

/*! SCROLL CUE */
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, e) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = e.value;
    return a
};
$jscomp.getGlobal = function(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var e = a[b];
        if (e && e.Math == Math) return e
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
    var e = $jscomp.propertyToPolyfillSymbol[b];
    if (null == e) return a[b];
    e = a[e];
    return void 0 !== e ? e : a[b]
};
$jscomp.polyfill = function(a, b, e, f) {
    b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, e, f) : $jscomp.polyfillUnisolated(a, b, e, f))
};
$jscomp.polyfillUnisolated = function(a, b, e, f) {
    e = $jscomp.global;
    a = a.split(".");
    for (f = 0; f < a.length - 1; f++) {
        var h = a[f];
        h in e || (e[h] = {});
        e = e[h]
    }
    a = a[a.length - 1];
    f = e[a];
    b = b(f);
    b != f && null != b && $jscomp.defineProperty(e, a, {
        configurable: !0,
        writable: !0,
        value: b
    })
};
$jscomp.polyfillIsolated = function(a, b, e, f) {
    var h = a.split(".");
    a = 1 === h.length;
    f = h[0];
    f = !a && f in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var k = 0; k < h.length - 1; k++) {
        var l = h[k];
        l in f || (f[l] = {});
        f = f[l]
    }
    h = h[h.length - 1];
    e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? f[h] : null;
    b = b(e);
    null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, h, {
        configurable: !0,
        writable: !0,
        value: b
    }) : b !== e && ($jscomp.propertyToPolyfillSymbol[h] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(h) : $jscomp.POLYFILL_PREFIX + h, h = $jscomp.propertyToPolyfillSymbol[h],
        $jscomp.defineProperty(f, h, {
            configurable: !0,
            writable: !0,
            value: b
        })))
};
$jscomp.initSymbol = function() {};
$jscomp.polyfill("Symbol", function(a) {
    if (a) return a;
    var b = function(a, b) {
        this.$jscomp$symbol$id_ = a;
        $jscomp.defineProperty(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
    b.prototype.toString = function() {
        return this.$jscomp$symbol$id_
    };
    var e = 0,
        f = function(a) {
            if (this instanceof f) throw new TypeError("Symbol is not a constructor");
            return new b("jscomp_symbol_" + (a || "") + "_" + e++, a)
        };
    return f
}, "es6", "es3");
$jscomp.initSymbolIterator = function() {};
$jscomp.polyfill("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < b.length; e++) {
            var f = $jscomp.global[b[e]];
            "function" === typeof f && "function" != typeof f.prototype[a] && $jscomp.defineProperty(f.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
                }
            })
        }
        return a
    }, "es6",
    "es3");
$jscomp.initSymbolAsyncIterator = function() {};
$jscomp.iteratorPrototype = function(a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function() {
        return this
    };
    return a
};
$jscomp.iteratorFromArray = function(a, b) {
    a instanceof String && (a += "");
    var e = 0,
        f = {
            next: function() {
                if (e < a.length) {
                    var h = e++;
                    return {
                        value: b(h, a[h]),
                        done: !1
                    }
                }
                f.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return f.next()
            }
        };
    f[Symbol.iterator] = function() {
        return f
    };
    return f
};
$jscomp.polyfill("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return $jscomp.iteratorFromArray(this, function(a) {
            return a
        })
    }
}, "es6", "es3");
var scrollCue = function() {
    var a = {},
        b, e, f = 0,
        h = !0,
        k = !0,
        l = !1,
        n = !1,
        m, p = {
            duration: 600,
            interval: -.7,
            percentage: .75,
            enable: !0,
            docSlider: !1,
            pageChangeReset: !1
        };
    a = {
        setEvents: function(g) {
            var c = function() {
                h && (requestAnimationFrame(function() {
                    h = !0;
                    k && (a.setQuery(), a.runQuery())
                }), h = !1)
            };
            k && !g && window.addEventListener("load", a.runQuery);
            window.addEventListener("scroll", c);
            if (l) {
                g = docSlider.getElements().pages;
                for (var d = 0; d < g.length; d++) g[d].addEventListener("scroll", function(a) {
                    var g = docSlider.getCurrentIndex() +
                        "";
                    a = a.target.getAttribute("data-ds-index");
                    if (g !== a) return !1;
                    docSlider._getWheelEnable() && c()
                })
            }
            window.addEventListener("resize", function() {
                0 < f && clearTimeout(f);
                f = setTimeout(function() {
                    k && (a.searchElements(), a.setQuery(), a.runQuery())
                }, 200)
            })
        },
        setOptions: function(g, c) {
            var d = {};
            if ("undefined" !== typeof g) return Object.keys(g).forEach(function(b) {
                "[object Object]" === Object.prototype.toString.call(g[b]) ? d[b] = a.setOptions(g[b], c[b]) : (d[b] = g[b], "undefined" !== typeof c && "undefined" !== typeof c[b] && (d[b] =
                    c[b]))
            }), d
        },
        searchElements: function() {
            b = [];
            var g = document.querySelectorAll("[data-cues]:not([data-disabled])");
            for (var c = 0; c < g.length; c++) {
                for (var d = g[c], e = 0; e < d.children.length; e++) {
                    var f = d.children[e];
                    a.setAttrPtoC(f, "data-cue", d, "data-cues", "");
                    a.setAttrPtoC(f, "data-duration", d, "data-duration", !1);
                    a.setAttrPtoC(f, "data-interval", d, "data-interval", !1);
                    a.setAttrPtoC(f, "data-sort", d, "data-sort", !1);
                    a.setAttrPtoC(f, "data-addClass", d, "data-addClass", !1);
                    a.setAttrPtoC(f, "data-group", d, "data-group", !1);
                    a.setAttrPtoC(f, "data-delay", d, "data-delay", !1)
                }
                d.setAttribute("data-disabled", "true")
            }
            g = document.querySelectorAll('[data-cue]:not([data-show="true"])');
            for (c = 0; c < g.length; c++) d = g[c], b.push({
                elm: d,
                cue: a.getAttr(d, "data-cue", "fadeIn"),
                duration: Number(a.getAttr(d, "data-duration", m.duration)),
                interval: Number(a.getAttr(d, "data-interval", m.interval)),
                order: a.getOrderNumber(d),
                sort: a.getAttr(d, "data-sort", null),
                addClass: a.getAttr(d, "data-addClass", null),
                group: a.getAttr(d, "data-group", null),
                delay: Number(a.getAttr(d,
                    "data-delay", 0))
            });
            if (l)
                for (g = docSlider.getElements().pages.length, c = 0; c < g; c++)
                    for (d = document.querySelectorAll('[data-ds-index="' + c + '"] [data-cue]:not([data-scpage])'), e = 0; e < d.length; e++) d[e].setAttribute("data-scpage", c)
        },
        sortElements: function() {
            for (var a = arguments[0], c = [].slice.call(arguments).slice(1), d = {
                    $jscomp$loop$prop$i$4: 0
                }; d.$jscomp$loop$prop$i$4 < c.length; d = {
                    $jscomp$loop$prop$i$4: d.$jscomp$loop$prop$i$4
                }, d.$jscomp$loop$prop$i$4++) a.sort(function(a) {
                return function(g, d) {
                    var b = "undefined" ===
                        typeof c[a.$jscomp$loop$prop$i$4][1] ? !0 : c[a.$jscomp$loop$prop$i$4][1],
                        e = c[a.$jscomp$loop$prop$i$4][0];
                    return g[e] > d[e] ? b ? 1 : -1 : g[e] < d[e] ? b ? -1 : 1 : 0
                }
            }(d))
        },
        randElements: function(a) {
            for (var g = a.length - 1; 0 < g; g--) {
                var d = Math.floor(Math.random() * (g + 1)),
                    b = a[g];
                a[g] = a[d];
                a[d] = b
            }
            return a
        },
        setDurationValue: function(a, c, d) {
            if ("undefined" === typeof c) return a;
            c = c.duration;
            a = -1 === (d + "").indexOf(".") ? a + c + d : a + c + c * d;
            return 0 > a ? 0 : a
        },
        getOrderNumber: function(a) {
            return a.hasAttribute("data-order") ? (a = Number(a.getAttribute("data-order")),
                0 <= a ? a : Math.pow(2, 53) - 1 + a) : Math.pow(2, 52) - 1
        },
        setAttrPtoC: function(a, c, d, b, e) {
            d.hasAttribute(b) ? a.hasAttribute(c) || a.setAttribute(c, d.getAttribute(b)) : !1 !== e && a.setAttribute(c, e)
        },
        getAttr: function(a, c, d) {
            return a.hasAttribute(c) ? a.getAttribute(c) : d
        },
        getOffsetTop: function(a) {
            return a.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
        },
        setClassNames: function(a, c) {
            if (c) {
                c = c.split(" ");
                for (var d = 0; d < c.length; d++) a.classList.add(c[d])
            }
        },
        setQuery: function() {
            e = {};
            for (var g =
                    0; g < b.length; g++) {
                var c = b[g],
                    d = c.group ? c.group : "$" + a.getOffsetTop(c.elm);
                if (!c.elm.hasAttribute("data-show")) {
                    if (l) {
                        var f = c.elm.getAttribute("data-scpage"),
                            h = docSlider.getCurrentIndex() + "";
                        if (f !== h && null !== f) continue
                    }
                    "undefined" === typeof e[d] && (e[d] = []);
                    e[d].push(c)
                }
            }
        },
        runQuery: function() {
            for (var b = Object.keys(e), c = {}, d = 0; d < b.length; c = {
                    $jscomp$loop$prop$elms$6: c.$jscomp$loop$prop$elms$6,
                    $jscomp$loop$prop$interval$7: c.$jscomp$loop$prop$interval$7
                }, d++)
                if (c.$jscomp$loop$prop$elms$6 = e[b[d]], a.isElementIn(c.$jscomp$loop$prop$elms$6[0].elm)) {
                    "reverse" ===
                    c.$jscomp$loop$prop$elms$6[0].sort ? c.$jscomp$loop$prop$elms$6.reverse() : "random" === c.$jscomp$loop$prop$elms$6[0].sort && a.randElements(c.$jscomp$loop$prop$elms$6);
                    a.sortElements(c.$jscomp$loop$prop$elms$6, ["order"]);
                    for (var f = c.$jscomp$loop$prop$interval$7 = 0; f < c.$jscomp$loop$prop$elms$6.length; f++)(function(c) {
                        return function(b) {
                            c.$jscomp$loop$prop$elms$6[b].elm.setAttribute("data-show", "true");
                            a.setClassNames(c.$jscomp$loop$prop$elms$6[b].elm, c.$jscomp$loop$prop$elms$6[b].addClass);
                            c.$jscomp$loop$prop$interval$7 =
                                a.setDurationValue(c.$jscomp$loop$prop$interval$7, c.$jscomp$loop$prop$elms$6[b - 1], c.$jscomp$loop$prop$elms$6[b].interval);
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationName = c.$jscomp$loop$prop$elms$6[b].cue;
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationDuration = c.$jscomp$loop$prop$elms$6[b].duration + "ms";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationTimingFunction = "ease";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationDelay = c.$jscomp$loop$prop$interval$7 + c.$jscomp$loop$prop$elms$6[b].delay +
                                "ms";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationDirection = "normal";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationFillMode = "both"
                        }
                    })(c)(f);
                    delete e[b[d]]
                }
        },
        isElementIn: function(b) {
            var c = b.hasAttribute("data-scpage") ? a.isScrollEndWithDocSlider : a.isScrollEnd;
            return window.pageYOffset > a.getOffsetTop(b) - window.innerHeight * m.percentage || c()
        },
        isScrollEnd: function() {
            var a = window.document.documentElement;
            return (window.document.body.scrollTop || a.scrollTop) >= a.scrollHeight - a.clientHeight
        },
        isScrollEndWithDocSlider: function() {
            var a =
                docSlider.getCurrentPage();
            return a.scrollTop >= a.scrollHeight - a.clientHeight
        }
    };
    return {
        init: function(b) {
            m = a.setOptions(p, b);
            k = m.enable;
            l = m.docSlider;
            n = m.pageChangeReset;
            l || (a.setEvents(), a.searchElements(), a.setQuery())
        },
        update: function() {
            k && (a.searchElements(), a.setQuery(), a.runQuery())
        },
        enable: function(a) {
            k = "undefined" === typeof a ? !k : a;
            scrollCue.update()
        },
        _hasDocSlider: function() {
            return l
        },
        _hasPageChangeReset: function() {
            return n
        },
        _initWithDocSlider: function(b) {
            a.setEvents(b);
            a.searchElements();
            a.setQuery()
        },
        _updateWithDocSlider: function() {
            k && (a.setQuery(), a.runQuery())
        },
        _searchElements: function() {
            a.searchElements()
        }
    }
}();

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
! function(h, i, s, a) {
    function l(t, e) {
        this.settings = null, this.options = h.extend({}, l.Defaults, e), this.$element = h(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, h.each(["onResize", "onThrottledResize"], h.proxy(function(t, e) {
            this._handlers[e] = h.proxy(this[e], this)
        }, this)), h.each(l.Plugins, h.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), h.each(l.Workers, h.proxy(function(t, e) {
            this._pipe.push({
                filter: e.filter,
                run: h.proxy(e.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    l.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, l.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, l.Type = {
        Event: "event",
        State: "state"
    }, l.Plugins = {}, l.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                s = this.settings.rtl,
                e = {
                    width: "auto",
                    "margin-left": s ? e : "",
                    "margin-right": s ? "" : e
                };
            i || this.$stage.children().css(e), t.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                s = this._items.length,
                n = !this.settings.autoWidth,
                o = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                e = this._items,
                i = this.settings,
                s = Math.max(2 * i.items, 4),
                n = 2 * Math.ceil(e.length / 2),
                o = i.loop && e.length ? i.rewind ? s : Math.max(s, n) : 0,
                r = "",
                a = "";
            for (o /= 2; 0 < o;) t.push(this.normalize(t.length / 2, !0)), r += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a, --o;
            this._clones = t, h(r).addClass("cloned").appendTo(this.$stage), h(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t, e, i = this.settings.rtl ? 1 : -1, s = this._clones.length + this._items.length, n = -1, o = []; ++n < s;) t = o[n - 1] || 0, e = this._widths[this.relative(n)] + this.settings.margin, o.push(t + e * i);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                t = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(t)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, e, i = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding, n = this.coordinates(this.current()) + s, o = n + this.width() * i, r = [], a = 0, h = this._coordinates.length; a < h; a++) t = this._coordinates[a - 1] || 0, e = Math.abs(this._coordinates[a]) + s * i, (this.op(t, "<=", n) && this.op(t, ">", o) || this.op(e, "<", n) && this.op(e, ">", o)) && r.push(a);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + r.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], l.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = h("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(h("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, l.prototype.initializeItems = function() {
        var t = this.$element.find(".owl-item");
        if (t.length) return this._items = t.get().map(function(t) {
            return h(t)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, l.prototype.initialize = function() {
        var t, e;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, e = this.$element.children(e).width(), t.length && e <= 0 && this.preloadAutoWidthImages(t)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, l.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, l.prototype.setup = function() {
        var e = this.viewport(),
            t = this.options.responsive,
            i = -1,
            s = null;
        t ? (h.each(t, function(t) {
            t <= e && i < t && (i = Number(t))
        }), "function" == typeof(s = h.extend({}, this.options, t[i])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : s = h.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = i, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, l.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, l.prototype.prepare = function(t) {
        var e = this.trigger("prepare", {
            content: t
        });
        return e.data || (e.data = h("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: e.data
        }), e.data
    }, l.prototype.update = function() {
        for (var t = 0, e = this._pipe.length, i = h.proxy(function(t) {
                return this[t]
            }, this._invalidated), s = {}; t < e;)(this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s), t++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, l.prototype.width = function(t) {
        switch (t = t || l.Width.Default) {
            case l.Width.Inner:
            case l.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, l.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, l.prototype.onThrottledResize = function() {
        i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, l.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, l.prototype.registerEventHandlers = function() {
        h.support.transition && this.$stage.on(h.support.transition.end + ".owl.core", h.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", h.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", h.proxy(this.onDragEnd, this)))
    }, l.prototype.onDragStart = function(t) {
        var e = null;
        3 !== t.which && (e = h.support.transform ? {
            x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
            y: e[16 === e.length ? 13 : 5]
        } : (e = this.$stage.position(), {
            x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
            y: e.top
        }), this.is("animating") && (h.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = h(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), h(s).on("mouseup.owl.core touchend.owl.core", h.proxy(this.onDragEnd, this)), h(s).one("mousemove.owl.core touchmove.owl.core", h.proxy(function(t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            h(s).on("mousemove.owl.core touchmove.owl.core", h.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, l.prototype.onDragMove = function(t) {
        var e, i = null,
            s = null,
            n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (i = this.coordinates(this.minimum()), s = this.coordinates(this.maximum() + 1) - i, o.x = ((o.x - i) % s + s) % s + i) : (i = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), s = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), e = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, i + e), s + e)), this._drag.stage.current = o, this.animate(o.x))
    }, l.prototype.onDragEnd = function(t) {
        var e = this.difference(this._drag.pointer, this.pointer(t)),
            i = this._drag.stage.current,
            t = 0 < e.x ^ this.settings.rtl ? "left" : "right";
        h(s).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? t : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = t, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, l.prototype.closest = function(i, s) {
        var n = -1,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || h.each(r, h.proxy(function(t, e) {
            return "left" === s && e - 30 < i && i < e + 30 ? n = t : "right" === s && e - o - 30 < i && i < e - o + 30 ? n = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] !== a ? r[t + 1] : e - o) && (n = "left" === s ? t + 1 : t), -1 === n
        }, this)), this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? n = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())), n
    }, l.prototype.animate = function(t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), h.support.transform3d && h.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : e ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, h.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }, l.prototype.is = function(t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }, l.prototype.current = function(t) {
        return t === a ? this._current : 0 === this._items.length ? a : (t = this.normalize(t), this._current !== t && ((e = this.trigger("change", {
            property: {
                name: "position",
                value: t
            }
        })).data !== a && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
            property: {
                name: "position",
                value: this._current
            }
        })), this._current);
        var e
    }, l.prototype.invalidate = function(t) {
        return "string" === h.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), h.map(this._invalidated, function(t, e) {
            return e
        })
    }, l.prototype.reset = function(t) {
        (t = this.normalize(t)) !== a && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, l.prototype.normalize = function(t, e) {
        var i = this._items.length,
            e = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = a : (t < 0 || i + e <= t) && (t = ((t - e / 2) % i + i) % i + e / 2), t
    }, l.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, l.prototype.maximum = function(t) {
        var e, i, s, n = this.settings,
            o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(), s = this.$element.width(); e-- && !(s < (i += this._items[e].width() + this.settings.margin)););
            o = e + 1
        } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, l.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, l.prototype.items = function(t) {
        return t === a ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, l.prototype.mergers = function(t) {
        return t === a ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, l.prototype.clones = function(i) {
        function s(t) {
            return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
        }
        var e = this._clones.length / 2,
            n = e + this._items.length;
        return i === a ? h.map(this._clones, function(t, e) {
            return s(e)
        }) : h.map(this._clones, function(t, e) {
            return t === i ? s(e) : null
        })
    }, l.prototype.speed = function(t) {
        return t !== a && (this._speed = t), this._speed
    }, l.prototype.coordinates = function(t) {
        var e, i = 1,
            s = t - 1;
        return t === a ? h.map(this._coordinates, h.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, s = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[s] || 0)) / 2 * i) : e = this._coordinates[s] || 0, e = Math.ceil(e))
    }, l.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, l.prototype.to = function(t, e) {
        var i, s = this.current(),
            n = t - this.relative(s),
            o = (0 < n) - (n < 0),
            r = this._items.length,
            a = this.minimum(),
            h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (i = (((t = s + n) - a) % r + r) % r + a) !== t && i - n <= h && 0 < i - n && (s = i - n, t = i, this.reset(s))) : t = this.settings.rewind ? (t % (h += 1) + h) % h : Math.max(a, Math.min(h, t)), this.speed(this.duration(s, t, e)), this.current(t), this.isVisible() && this.update()
    }, l.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, l.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, l.prototype.onTransitionEnd = function(t) {
        if (t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, l.prototype.viewport = function() {
        var t;
        return this.options.responsiveBaseElement !== i ? t = h(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : s.documentElement && s.documentElement.clientWidth ? t = s.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
    }, l.prototype.replace = function(t) {
        this.$stage.empty(), this._items = [], t = t && (t instanceof jQuery ? t : h(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
            return 1 === this.nodeType
        }).each(h.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, l.prototype.add = function(t, e) {
        var i = this.relative(this._current);
        e = e === a ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : h(t), this.trigger("add", {
            content: t,
            position: e
        }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, l.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, l.prototype.preloadAutoWidthImages = function(t) {
        t.each(h.proxy(function(t, e) {
            this.enter("pre-loading"), e = h(e), h(new Image).one("load", h.proxy(function(t) {
                e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
        }, this))
    }, l.prototype.destroy = function() {
        for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), h(s).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, l.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? i < t : t < i;
            case ">":
                return s ? t < i : i < t;
            case ">=":
                return s ? t <= i : i <= t;
            case "<=":
                return s ? i <= t : t <= i
        }
    }, l.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, l.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, l.prototype.trigger = function(t, e, i, s, n) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            r = h.camelCase(h.grep(["on", t, i], function(t) {
                return t
            }).join("-").toLowerCase()),
            a = h.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), h.extend({
                relatedTarget: this
            }, o, e));
        return this._supress[t] || (h.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(a)
        }), this.register({
            type: l.Type.Event,
            name: t
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)), a
    }, l.prototype.enter = function(t) {
        h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) {
            this._states.current[e] === a && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, l.prototype.leave = function(t) {
        h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, l.prototype.register = function(i) {
        var e;
        i.type === l.Type.Event ? (h.event.special[i.name] || (h.event.special[i.name] = {}), h.event.special[i.name].owl || (e = h.event.special[i.name]._default, h.event.special[i.name]._default = function(t) {
            return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
        }, h.event.special[i.name].owl = !0)) : i.type === l.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = h.grep(this._states.tags[i.name], h.proxy(function(t, e) {
            return h.inArray(t, this._states.tags[i.name]) === e
        }, this)))
    }, l.prototype.suppress = function(t) {
        h.each(t, h.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, l.prototype.release = function(t) {
        h.each(t, h.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, l.prototype.pointer = function(t) {
        var e = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
    }, l.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, l.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, h.fn.owlCarousel = function(e) {
        var s = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var t = h(this),
                i = t.data("owl.carousel");
            i || (i = new l(this, "object" == typeof e && e), t.data("owl.carousel", i), h.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
                i.register({
                    type: l.Type.Event,
                    name: e
                }), i.$element.on(e + ".owl.carousel.core", h.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                }, i))
            })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s)
        })
    }, h.fn.owlCarousel.Constructor = l
}(window.Zepto || window.jQuery, window, document),
function(e, i) {
    var s = function(t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, s.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, s.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document),
function(a, n) {
    var e = function(t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var e = this._core.settings,
                        i = e.center && Math.ceil(e.items / 2) || e.items,
                        s = e.center && -1 * i || 0,
                        n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s,
                        o = this._core.clones().length,
                        r = a.proxy(function(t, e) {
                            this.load(e)
                        }, this);
                    for (0 < e.lazyLoadEager && (i += e.lazyLoadEager, e.loop && (n -= e.lazyLoadEager, i++)); s++ < i;) this.load(o / 2 + this._core.relative(n)), o && a.each(this._core.clones(this._core.relative(n)), r), n++
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, e.prototype.load = function(t) {
        var e = this._core.$stage.children().eq(t),
            t = e && e.find(".owl-lazy");
        !t || -1 < a.inArray(e.get(0), this._loaded) || (t.each(a.proxy(function(t, e) {
            var i = a(e),
                s = 1 < n.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src") || i.attr("data-srcset");
            this._core.trigger("load", {
                element: i,
                url: s
            }, "lazy"), i.is("img") ? i.one("load.owl.lazy", a.proxy(function() {
                i.css("opacity", 1), this._core.trigger("loaded", {
                    element: i,
                    url: s
                }, "lazy")
            }, this)).attr("src", s) : i.is("source") ? i.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: i,
                    url: s
                }, "lazy")
            }, this)).attr("srcset", s) : ((e = new Image).onload = a.proxy(function() {
                i.css({
                    "background-image": 'url("' + s + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: i,
                    url: s
                }, "lazy")
            }, this), e.src = s)
        }, this)), this._loaded.push(e.get(0)))
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(n, i) {
    var s = function(t) {
        this._core = t, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": n.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = n.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var e = this;
        n(i).on("load", function() {
            e._core.settings.autoHeight && e.update()
        }), n(i).resize(function() {
            e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId), e._intervalId = setTimeout(function() {
                e.update()
            }, 250))
        })
    };
    s.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, s.prototype.update = function() {
        var t = this._core._current,
            e = t + this._core.settings.items,
            i = this._core.settings.lazyLoad,
            t = this._core.$stage.children().toArray().slice(t, e),
            s = [],
            e = 0;
        n.each(t, function(t, e) {
            s.push(n(e).height())
        }), (e = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (e = this._previousHeight), this._previousHeight = e, this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, n.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function(c, e) {
    var i = function(t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": c.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": c.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": c.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": c.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": c.proxy(function(t) {
                var e;
                !t.namespace || (e = c(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, c(t.content)))
            }, this)
        }, this._core.options = c.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function(t) {
            this.play(t)
        }, this))
    };
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, i.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (-1 < (s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
        else if (-1 < s[3].indexOf("vimeo")) i = "vimeo";
        else {
            if (!(-1 < s[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, i.prototype.thumbnail = function(e, t) {
        function i(t) {
            s = l.lazyLoad ? c("<div/>", {
                class: "owl-video-tn " + h,
                srcType: t
            }) : c("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + t + ")"
            }), e.after(s), e.after('<div class="owl-video-play-icon"></div>')
        }
        var s, n, o = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",
            r = e.find("img"),
            a = "src",
            h = "",
            l = this._core.settings;
        if (e.wrap(c("<div/>", {
                class: "owl-video-wrapper",
                style: o
            })), this._core.settings.lazyLoad && (a = "data-src", h = "owl-lazy"), r.length) return i(r.attr(a)), r.remove(), !1;
        "youtube" === t.type ? (n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", i(n)) : "vimeo" === t.type ? c.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t[0].thumbnail_large, i(n)
            }
        }) : "vzaar" === t.type && c.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t.framegrab_url, i(n)
            }
        })
    }, i.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, i.prototype.play = function(t) {
        var e = c(t.target).closest("." + this._core.settings.itemClass),
            i = this._videos[e.attr("data-video")],
            s = i.width || "100%",
            n = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), (t = c('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", n), t.attr("width", s), "youtube" === i.type ? t.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : "vimeo" === i.type ? t.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : "vzaar" === i.type && t.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"), c(t).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, i.prototype.isInFullScreen = function() {
        var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return t && c(t).parent().hasClass("owl-video-frame")
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, c.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, (window, document)),
function(r) {
    var e = function(t) {
        this.core = t, this.core.options = r.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": r.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": r.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        var t, e, i, s, n, o;
        1 === this.core.settings.items && r.support.animation && r.support.transition && (this.core.speed(0), e = r.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), s = this.core.$stage.children().eq(this.next), n = this.core.settings.animateIn, o = this.core.settings.animateOut, this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(r.support.animation.end, e).css({
            left: t + "px"
        }).addClass("animated owl-animated-out").addClass(o)), n && s.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(n)))
    }, e.prototype.clear = function(t) {
        r(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, r.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, (window, document)),
function(s, n, e) {
    var i = function(t) {
        this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": s.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": s.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": s.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": s.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = s.extend({}, i.Defaults, this._core.options)
    };
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, i.prototype._next = function(t) {
        this._call = n.setTimeout(s.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
    }, i.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, i.prototype.play = function(t, e) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"), t = t || this._core.settings.autoplayTimeout, i = Math.min(this._time % (this._timeout || t), t), this._paused ? (this._time = this.read(), this._paused = !1) : n.clearTimeout(this._call), this._time += this.read() % t - i, this._timeout = t, this._call = n.setTimeout(s.proxy(this._next, this, e), t - i)
    }, i.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, n.clearTimeout(this._call), this._core.leave("rotating"))
    }, i.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, n.clearTimeout(this._call))
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, s.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "use strict";
    var e = function(t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": n.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": n.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": n.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = n.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var t, i = this._core.settings;
        for (t in this._controls.$relative = (i.navContainer ? n(i.navContainer) : n("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = n("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = n("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [n('<button role="button">').addClass(i.dotClass).append(n("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? n(i.dotsContainer) : n("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", n.proxy(function(t) {
                var e = (n(t.target).parent().is(this._controls.$absolute) ? n(t.target) : n(t.target).parent()).index();
                t.preventDefault(), this.to(e, i.dotsSpeed)
            }, this)), this._overrides) this._core[t] = n.proxy(this[t], this)
    }, e.prototype.destroy = function() {
        var t, e, i, s, n = this._core.settings;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            s = i + this._core.items().length,
            n = this._core.maximum(!0),
            o = this._core.settings,
            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = i, e = 0; t < s; t++) {
                if (r <= e || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(n, t - i),
                            end: t - i + r - 1
                        }), Math.min(n, t - i) === n) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, e.prototype.draw = function() {
        var t = this._core.settings,
            e = this._core.items().length <= t.items,
            i = this._core.relative(this._core.current()),
            s = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || e), t.nav && (this._controls.$previous.toggleClass("disabled", !s && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !t.dots || e), t.dots && (e = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 != e ? this._controls.$absolute.html(this._templates.join("")) : 0 < e ? this._controls.$absolute.append(new Array(1 + e).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(t) {
        var e = this._core.settings;
        t.page = {
            index: n.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
        }
    }, e.prototype.current = function() {
        var i = this._core.relative(this._core.current());
        return n.grep(this._pages, n.proxy(function(t, e) {
            return t.start <= i && t.end >= i
        }, this)).pop()
    }, e.prototype.getPosition = function(t) {
        var e, i, s = this._core.settings;
        return "page" == s.slideBy ? (e = n.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += s.slideBy : e -= s.slideBy), e
    }, e.prototype.next = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, e.prototype.prev = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, e.prototype.to = function(t, e, i) {
        !i && this._pages.length ? (i = this._pages.length, n.proxy(this._overrides.to, this._core)(this._pages[(t % i + i) % i].start, e)) : n.proxy(this._overrides.to, this._core)(t, e)
    }, n.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, (window, document)),
function(s, n) {
    "use strict";
    var e = function(t) {
        this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": s.proxy(function(t) {
                t.namespace && "URLHash" === this._core.settings.startPosition && s(n).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": s.proxy(function(t) {
                var e;
                !t.namespace || (e = s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[e] = t.content)
            }, this),
            "changed.owl.carousel": s.proxy(function(t) {
                var i;
                t.namespace && "position" === t.property.name && (i = this._core.items(this._core.relative(this._core.current())), (t = s.map(this._hashes, function(t, e) {
                    return t === i ? e : null
                }).join()) && n.location.hash.slice(1) !== t && (n.location.hash = t))
            }, this)
        }, this._core.options = s.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), s(n).on("hashchange.owl.navigation", s.proxy(function(t) {
            var e = n.location.hash.substring(1),
                i = this._core.$stage.children(),
                e = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== e && e !== this._core.current() && this._core.to(this._core.relative(e), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in s(n).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, s.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(n, o) {
    var r = n("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        t = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        e = function() {
            return !!h("transform")
        },
        i = function() {
            return !!h("perspective")
        },
        s = function() {
            return !!h("animation")
        };

    function h(t, i) {
        var s = !1,
            e = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
            if (r[e] !== o) return s = !i || e, !1
        }), s
    }

    function l(t) {
        return h(t, !0)
    }! function() {
        return !!h("transition")
    }() || (n.support.transition = new String(l("transition")), n.support.transition.end = t.transition.end[n.support.transition]), s() && (n.support.animation = new String(l("animation")), n.support.animation.end = t.animation.end[n.support.animation]), e() && (n.support.transform = new String(l("transform")), n.support.transform3d = i())
}(window.Zepto || window.jQuery, (window, void document));

/*! FOOTER REVEAL */
! function(a) {
    a.fn.footerReveal = function(b) {
        var c = a(this),
            d = c.prev(),
            e = a(window),
            f = a.extend({
                shadow: !0,
                shadowOpacity: .8,
                zIndex: -100
            }, b);
        a.extend(!0, {}, f, b);
        return c.outerHeight() <= e.outerHeight() && c.offset().top >= e.outerHeight() && (c.css({
            "z-index": f.zIndex,
            position: "fixed",
            bottom: 0
        }), f.shadow && d.css({
            "-moz-box-shadow": "0 20px 30px -20px rgba(0,0,0," + f.shadowOpacity + ")",
            "-webkit-box-shadow": "0 20px 30px -20px rgba(0,0,0," + f.shadowOpacity + ")",
            "box-shadow": "0 20px 30px -20px rgba(0,0,0," + f.shadowOpacity + ")"
        }), e.on("load resize footerRevealResize", function() {
            c.css({
                width: d.outerWidth()
            }), d.css({
                "margin-bottom": c.outerHeight()
            })
        })), this
    }
}(jQuery);

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
! function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function(t) {
                var n = e(this),
                    i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t) return "update" == t ? this.each(function() {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function() {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this),
                n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);

/*! Moment.js required for datepicker */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    var e, i;

    function c() {
        return e.apply(null, arguments)
    }

    function o(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }

    function u(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function l(e) {
        return void 0 === e
    }

    function h(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }

    function d(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function f(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s
    }

    function m(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function _(e, t) {
        for (var n in t) m(t, n) && (e[n] = t[n]);
        return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function y(e, t, n, s) {
        return Tt(e, t, n, s, !0).utc()
    }

    function g(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }

    function v(e) {
        if (null == e._isValid) {
            var t = g(e),
                n = i.call(t.parsedDateParts, function(e) {
                    return null != e
                }),
                s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s
        }
        return e._isValid
    }

    function p(e) {
        var t = y(NaN);
        return null != e ? _(g(t), e) : g(t).userInvalidated = !0, t
    }
    i = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
            if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1
    };
    var r = c.momentProperties = [];

    function w(e, t) {
        var n, s, i;
        if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = g(t)), l(t._locale) || (e._locale = t._locale), 0 < r.length)
            for (n = 0; n < r.length; n++) l(i = t[s = r[n]]) || (e[s] = i);
        return e
    }
    var t = !1;

    function M(e) {
        w(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, c.updateOffset(this), t = !1)
    }

    function k(e) {
        return e instanceof M || null != e && null != e._isAMomentObject
    }

    function S(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function D(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = S(t)), n
    }

    function a(e, t, n) {
        var s, i = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            a = 0;
        for (s = 0; s < i; s++)(n && e[s] !== t[s] || !n && D(e[s]) !== D(t[s])) && a++;
        return a + r
    }

    function Y(e) {
        !1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function n(i, r) {
        var a = !0;
        return _(function() {
            if (null != c.deprecationHandler && c.deprecationHandler(null, i), a) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (e = "", "object" == typeof arguments[n]) {
                        for (var s in e += "\n[" + n + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[n];
                    t.push(e)
                }
                Y(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), a = !1
            }
            return r.apply(this, arguments)
        }, r)
    }
    var s, O = {};

    function T(e, t) {
        null != c.deprecationHandler && c.deprecationHandler(e, t), O[e] || (Y(t), O[e] = !0)
    }

    function b(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function x(e, t) {
        var n, s = _({}, e);
        for (n in t) m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {}, _(s[n], e[n]), _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e) m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({}, s[n]));
        return s
    }

    function P(e) {
        null != e && this.set(e)
    }
    c.suppressDeprecationWarnings = !1, c.deprecationHandler = null, s = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e) m(e, t) && n.push(t);
        return n
    };
    var W = {};

    function C(e, t) {
        var n = e.toLowerCase();
        W[n] = W[n + "s"] = W[t] = e
    }

    function H(e) {
        return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
    }

    function R(e) {
        var t, n, s = {};
        for (n in e) m(e, n) && (t = H(n)) && (s[t] = e[n]);
        return s
    }
    var U = {};

    function F(e, t) {
        U[e] = t
    }

    function L(e, t, n) {
        var s = "" + Math.abs(e),
            i = t - s.length;
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
    }
    var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        V = {},
        E = {};

    function I(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
            return this[s]()
        }), e && (E[e] = i), t && (E[t[0]] = function() {
            return L(i.apply(this, arguments), t[1], t[2])
        }), n && (E[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        })
    }

    function A(e, t) {
        return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] || function(s) {
            var e, i, t, r = s.match(N);
            for (e = 0, i = r.length; e < i; e++) E[r[e]] ? r[e] = E[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function(e) {
                var t, n = "";
                for (t = 0; t < i; t++) n += b(r[t]) ? r[t].call(e, s) : r[t];
                return n
            }
        }(t), V[t](e)) : e.localeData().invalidDate()
    }

    function j(e, t) {
        var n = 5;

        function s(e) {
            return t.longDateFormat(e) || e
        }
        for (G.lastIndex = 0; 0 <= n && G.test(e);) e = e.replace(G, s), G.lastIndex = 0, n -= 1;
        return e
    }
    var Z = /\d/,
        z = /\d\d/,
        $ = /\d{3}/,
        q = /\d{4}/,
        J = /[+-]?\d{6}/,
        B = /\d\d?/,
        Q = /\d\d\d\d?/,
        X = /\d\d\d\d\d\d?/,
        K = /\d{1,3}/,
        ee = /\d{1,4}/,
        te = /[+-]?\d{1,6}/,
        ne = /\d+/,
        se = /[+-]?\d+/,
        ie = /Z|[+-]\d\d:?\d\d/gi,
        re = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        oe = {};

    function ue(e, n, s) {
        oe[e] = b(n) ? n : function(e, t) {
            return e && s ? s : n
        }
    }

    function le(e, t) {
        return m(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) {
            return t || n || s || i
        })))
    }

    function he(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var de = {};

    function ce(e, n) {
        var t, s = n;
        for ("string" == typeof e && (e = [e]), h(n) && (s = function(e, t) {
                t[n] = D(e)
            }), t = 0; t < e.length; t++) de[e[t]] = s
    }

    function fe(e, i) {
        ce(e, function(e, t, n, s) {
            n._w = n._w || {}, i(e, n._w, n, s)
        })
    }
    var me = 0,
        _e = 1,
        ye = 2,
        ge = 3,
        ve = 4,
        pe = 5,
        we = 6,
        Me = 7,
        ke = 8;

    function Se(e) {
        return De(e) ? 366 : 365
    }

    function De(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    I("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }), I(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), F("year", 1), ue("Y", se), ue("YY", B, z), ue("YYYY", ee, q), ue("YYYYY", te, J), ue("YYYYYY", te, J), ce(["YYYYY", "YYYYYY"], me), ce("YYYY", function(e, t) {
        t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : D(e)
    }), ce("YY", function(e, t) {
        t[me] = c.parseTwoDigitYear(e)
    }), ce("Y", function(e, t) {
        t[me] = parseInt(e, 10)
    }), c.parseTwoDigitYear = function(e) {
        return D(e) + (68 < D(e) ? 1900 : 2e3)
    };
    var Ye, Oe = Te("FullYear", !0);

    function Te(t, n) {
        return function(e) {
            return null != e ? (xe(this, t, e), c.updateOffset(this, n), this) : be(this, t)
        }
    }

    function be(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }

    function xe(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && De(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }

    function Pe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n, s = (t % (n = 12) + n) % n;
        return e += (t - s) / 12, 1 === s ? De(e) ? 29 : 28 : 31 - s % 7 % 2
    }
    Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e) return t;
        return -1
    }, I("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), I("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }), I("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }), C("month", "M"), F("month", 8), ue("M", B), ue("MM", B, z), ue("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }), ue("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }), ce(["M", "MM"], function(e, t) {
        t[_e] = D(e) - 1
    }), ce(["MMM", "MMMM"], function(e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[_e] = i : g(n).invalidMonth = e
    });
    var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var He = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Re(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = D(t);
            else if (!h(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
    }

    function Ue(e) {
        return null != e ? (Re(this, e), c.updateOffset(this, !0), this) : be(this, "Month")
    }
    var Fe = ae;
    var Le = ae;

    function Ne() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s = [],
            i = [],
            r = [];
        for (t = 0; t < 12; t++) n = y([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
        for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = he(s[t]), i[t] = he(i[t]);
        for (t = 0; t < 24; t++) r[t] = he(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }

    function Ge(e) {
        var t;
        if (e < 100 && 0 <= e) {
            var n = Array.prototype.slice.call(arguments);
            n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
        } else t = new Date(Date.UTC.apply(null, arguments));
        return t
    }

    function Ve(e, t, n) {
        var s = 7 + t - n;
        return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1
    }

    function Ee(e, t, n, s, i) {
        var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);
        return a = o <= 0 ? Se(r = e - 1) + o : o > Se(e) ? (r = e + 1, o - Se(e)) : (r = e, o), {
            year: r,
            dayOfYear: a
        }
    }

    function Ie(e, t, n) {
        var s, i, r = Ve(e.year(), t, n),
            a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), {
            week: s,
            year: i
        }
    }

    function Ae(e, t, n) {
        var s = Ve(e, t, n),
            i = Ve(e + 1, t, n);
        return (Se(e) - s + i) / 7
    }
    I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), F("week", 5), F("isoWeek", 5), ue("w", B), ue("ww", B, z), ue("W", B), ue("WW", B, z), fe(["w", "ww", "W", "WW"], function(e, t, n, s) {
        t[s.substr(0, 1)] = D(e)
    });

    function je(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    I("d", 0, "do", "day"), I("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }), I("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }), I("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), ue("d", B), ue("e", B), ue("E", B), ue("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }), ue("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }), ue("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }), fe(["dd", "ddd", "dddd"], function(e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i : g(n).invalidWeekday = e
    }), fe(["d", "e", "E"], function(e, t, n, s) {
        t[s] = D(e)
    });
    var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var qe = ae;
    var Je = ae;
    var Be = ae;

    function Qe() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s, i, r, a = [],
            o = [],
            u = [],
            l = [];
        for (t = 0; t < 7; t++) n = y([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r);
        for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = he(o[t]), u[t] = he(u[t]), l[t] = he(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }

    function Xe() {
        return this.hours() % 12 || 12
    }

    function Ke(e, t) {
        I(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function et(e, t) {
        return t._meridiemParse
    }
    I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, Xe), I("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }), I("hmm", 0, 0, function() {
        return "" + Xe.apply(this) + L(this.minutes(), 2)
    }), I("hmmss", 0, 0, function() {
        return "" + Xe.apply(this) + L(this.minutes(), 2) + L(this.seconds(), 2)
    }), I("Hmm", 0, 0, function() {
        return "" + this.hours() + L(this.minutes(), 2)
    }), I("Hmmss", 0, 0, function() {
        return "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2)
    }), Ke("a", !0), Ke("A", !1), C("hour", "h"), F("hour", 13), ue("a", et), ue("A", et), ue("H", B), ue("h", B), ue("k", B), ue("HH", B, z), ue("hh", B, z), ue("kk", B, z), ue("hmm", Q), ue("hmmss", X), ue("Hmm", Q), ue("Hmmss", X), ce(["H", "HH"], ge), ce(["k", "kk"], function(e, t, n) {
        var s = D(e);
        t[ge] = 24 === s ? 0 : s
    }), ce(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), ce(["h", "hh"], function(e, t, n) {
        t[ge] = D(e), g(n).bigHour = !0
    }), ce("hmm", function(e, t, n) {
        var s = e.length - 2;
        t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s)), g(n).bigHour = !0
    }), ce("hmmss", function(e, t, n) {
        var s = e.length - 4,
            i = e.length - 2;
        t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s, 2)), t[pe] = D(e.substr(i)), g(n).bigHour = !0
    }), ce("Hmm", function(e, t, n) {
        var s = e.length - 2;
        t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s))
    }), ce("Hmmss", function(e, t, n) {
        var s = e.length - 4,
            i = e.length - 2;
        t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s, 2)), t[pe] = D(e.substr(i))
    });
    var tt, nt = Te("Hours", !0),
        st = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: Ce,
            monthsShort: He,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: Ze,
            weekdaysMin: $e,
            weekdaysShort: ze,
            meridiemParse: /[ap]\.?m?\.?/i
        },
        it = {},
        rt = {};

    function at(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function ot(e) {
        var t = null;
        if (!it[e] && "undefined" != typeof module && module && module.exports) try {
            t = tt._abbr, require("./locale/" + e), ut(t)
        } catch (e) {}
        return it[e]
    }

    function ut(e, t) {
        var n;
        return e && ((n = l(t) ? ht(e) : lt(e, t)) ? tt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), tt._abbr
    }

    function lt(e, t) {
        if (null === t) return delete it[e], null;
        var n, s = st;
        if (t.abbr = e, null != it[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = it[e]._config;
        else if (null != t.parentLocale)
            if (null != it[t.parentLocale]) s = it[t.parentLocale]._config;
            else {
                if (null == (n = ot(t.parentLocale))) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                s = n._config
            }
        return it[e] = new P(x(s, t)), rt[e] && rt[e].forEach(function(e) {
            lt(e.name, e.config)
        }), ut(e), it[e]
    }

    function ht(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return tt;
        if (!o(e)) {
            if (t = ot(e)) return t;
            e = [e]
        }
        return function(e) {
            for (var t, n, s, i, r = 0; r < e.length;) {
                for (t = (i = at(e[r]).split("-")).length, n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t;) {
                    if (s = ot(i.slice(0, t).join("-"))) return s;
                    if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
                    t--
                }
                r++
            }
            return tt
        }(e)
    }

    function dt(e) {
        var t, n = e._a;
        return n && -2 === g(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e : n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye : n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[ve] || 0 !== n[pe] || 0 !== n[we]) ? ge : n[ve] < 0 || 59 < n[ve] ? ve : n[pe] < 0 || 59 < n[pe] ? pe : n[we] < 0 || 999 < n[we] ? we : -1, g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye), g(e)._overflowWeeks && -1 === t && (t = Me), g(e)._overflowWeekday && -1 === t && (t = ke), g(e).overflow = t), e
    }

    function ct(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function ft(e) {
        var t, n, s, i, r, a = [];
        if (!e._d) {
            var o, u;
            for (o = e, u = new Date(c.now()), s = o._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()], e._w && null == e._a[ye] && null == e._a[_e] && function(e) {
                    var t, n, s, i, r, a, o, u;
                    if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = ct(t.GG, e._a[me], Ie(bt(), 1, 4).year), s = ct(t.W, 1), ((i = ct(t.E, 1)) < 1 || 7 < i) && (u = !0);
                    else {
                        r = e._locale._week.dow, a = e._locale._week.doy;
                        var l = Ie(bt(), r, a);
                        n = ct(t.gg, e._a[me], l.year), s = ct(t.w, l.week), null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r
                    }
                    s < 1 || s > Ae(n, r, a) ? g(e)._overflowWeeks = !0 : null != u ? g(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear)
                }(e), null != e._dayOfYear && (r = ct(e._a[me], s[me]), (e._dayOfYear > Se(r) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0), n = Ge(r, 0, e._dayOfYear), e._a[_e] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = s[t];
            for (; t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ge] && 0 === e._a[ve] && 0 === e._a[pe] && 0 === e._a[we] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? Ge : function(e, t, n, s, i, r, a) {
                var o;
                return e < 100 && 0 <= e ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a), o
            }).apply(null, a), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (g(e).weekdayMismatch = !0)
        }
    }
    var mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        _t = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        yt = /Z|[+-]\d\d(?::?\d\d)?/,
        gt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        vt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        pt = /^\/?Date\((\-?\d+)/i;

    function wt(e) {
        var t, n, s, i, r, a, o = e._i,
            u = mt.exec(o) || _t.exec(o);
        if (u) {
            for (g(e).iso = !0, t = 0, n = gt.length; t < n; t++)
                if (gt[t][1].exec(u[1])) {
                    i = gt[t][0], s = !1 !== gt[t][2];
                    break
                }
            if (null == i) return void(e._isValid = !1);
            if (u[3]) {
                for (t = 0, n = vt.length; t < n; t++)
                    if (vt[t][1].exec(u[3])) {
                        r = (u[2] || " ") + vt[t][0];
                        break
                    }
                if (null == r) return void(e._isValid = !1)
            }
            if (!s && null != r) return void(e._isValid = !1);
            if (u[4]) {
                if (!yt.exec(u[4])) return void(e._isValid = !1);
                a = "Z"
            }
            e._f = i + (r || "") + (a || ""), Yt(e)
        } else e._isValid = !1
    }
    var Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function kt(e, t, n, s, i, r) {
        var a = [function(e) {
            var t = parseInt(e, 10); {
                if (t <= 49) return 2e3 + t;
                if (t <= 999) return 1900 + t
            }
            return t
        }(e), He.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
        return r && a.push(parseInt(r, 10)), a
    }
    var St = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };

    function Dt(e) {
        var t, n, s, i = Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (i) {
            var r = kt(i[4], i[3], i[2], i[5], i[6], i[7]);
            if (t = i[1], n = r, s = e, t && ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (g(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
            e._a = r, e._tzm = function(e, t, n) {
                if (e) return St[e];
                if (t) return 0;
                var s = parseInt(n, 10),
                    i = s % 100;
                return (s - i) / 100 * 60 + i
            }(i[8], i[9], i[10]), e._d = Ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function Yt(e) {
        if (e._f !== c.ISO_8601)
            if (e._f !== c.RFC_2822) {
                e._a = [], g(e).empty = !0;
                var t, n, s, i, r, a, o, u, l = "" + e._i,
                    h = l.length,
                    d = 0;
                for (s = j(e._f, e._locale).match(N) || [], t = 0; t < s.length; t++) i = s[t], (n = (l.match(le(i, e)) || [])[0]) && (0 < (r = l.substr(0, l.indexOf(n))).length && g(e).unusedInput.push(r), l = l.slice(l.indexOf(n) + n.length), d += n.length), E[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i), a = i, u = e, null != (o = n) && m(de, a) && de[a](o, u._a, u, a)) : e._strict && !n && g(e).unusedTokens.push(i);
                g(e).charsLeftOver = h - d, 0 < l.length && g(e).unusedInput.push(l), e._a[ge] <= 12 && !0 === g(e).bigHour && 0 < e._a[ge] && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[ge] = function(e, t, n) {
                    var s;
                    if (null == n) return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t)
                }(e._locale, e._a[ge], e._meridiem), ft(e), dt(e)
            } else Dt(e);
        else wt(e)
    }

    function Ot(e) {
        var t, n, s, i, r = e._i,
            a = e._f;
        return e._locale = e._locale || ht(e._l), null === r || void 0 === a && "" === r ? p({
            nullInput: !0
        }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), k(r) ? new M(dt(r)) : (d(r) ? e._d = r : o(a) ? function(e) {
            var t, n, s, i, r;
            if (0 === e._f.length) return g(e).invalidFormat = !0, e._d = new Date(NaN);
            for (i = 0; i < e._f.length; i++) r = 0, t = w({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Yt(t), v(t) && (r += g(t).charsLeftOver, r += 10 * g(t).unusedTokens.length, g(t).score = r, (null == s || r < s) && (s = r, n = t));
            _(e, n || t)
        }(e) : a ? Yt(e) : l(n = (t = e)._i) ? t._d = new Date(c.now()) : d(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (s = t, null === (i = pt.exec(s._i)) ? (wt(s), !1 === s._isValid && (delete s._isValid, Dt(s), !1 === s._isValid && (delete s._isValid, c.createFromInputFallback(s)))) : s._d = new Date(+i[1])) : o(n) ? (t._a = f(n.slice(0), function(e) {
            return parseInt(e, 10)
        }), ft(t)) : u(n) ? function(e) {
            if (!e._d) {
                var t = R(e._i);
                e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }), ft(e)
            }
        }(t) : h(n) ? t._d = new Date(n) : c.createFromInputFallback(t), v(e) || (e._d = null), e))
    }

    function Tt(e, t, n, s, i) {
        var r, a = {};
        return !0 !== n && !1 !== n || (s = n, n = void 0), (u(e) && function(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e)
                if (e.hasOwnProperty(t)) return !1;
            return !0
        }(e) || o(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = n, a._i = e, a._f = t, a._strict = s, (r = new M(dt(Ot(a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
    }

    function bt(e, t, n, s) {
        return Tt(e, t, n, s, !1)
    }
    c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), c.ISO_8601 = function() {}, c.RFC_2822 = function() {};
    var xt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = bt.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : p()
        }),
        Pt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = bt.apply(null, arguments);
            return this.isValid() && e.isValid() ? this < e ? this : e : p()
        });

    function Wt(e, t) {
        var n, s;
        if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return bt();
        for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]);
        return n
    }
    var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ht(e) {
        var t = R(e),
            n = t.year || 0,
            s = t.quarter || 0,
            i = t.month || 0,
            r = t.week || t.isoWeek || 0,
            a = t.day || 0,
            o = t.hour || 0,
            u = t.minute || 0,
            l = t.second || 0,
            h = t.millisecond || 0;
        this._isValid = function(e) {
            for (var t in e)
                if (-1 === Ye.call(Ct, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, s = 0; s < Ct.length; ++s)
                if (e[Ct[s]]) {
                    if (n) return !1;
                    parseFloat(e[Ct[s]]) !== D(e[Ct[s]]) && (n = !0)
                }
            return !0
        }(t), this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = ht(), this._bubble()
    }

    function Rt(e) {
        return e instanceof Ht
    }

    function Ut(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }

    function Ft(e, n) {
        I(e, 0, 0, function() {
            var e = this.utcOffset(),
                t = "+";
            return e < 0 && (e = -e, t = "-"), t + L(~~(e / 60), 2) + n + L(~~e % 60, 2)
        })
    }
    Ft("Z", ":"), Ft("ZZ", ""), ue("Z", re), ue("ZZ", re), ce(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0, n._tzm = Nt(re, e)
    });
    var Lt = /([\+\-]|\d\d)/gi;

    function Nt(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
            i = 60 * s[1] + D(s[2]);
        return 0 === i ? 0 : "+" === s[0] ? i : -i
    }

    function Gt(e, t) {
        var n, s;
        return t._isUTC ? (n = t.clone(), s = (k(e) || d(e) ? e.valueOf() : bt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), c.updateOffset(n, !1), n) : bt(e).local()
    }

    function Vt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function Et() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    c.updateOffset = function() {};
    var It = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        At = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function jt(e, t) {
        var n, s, i, r = e,
            a = null;
        return Rt(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : h(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
            y: 0,
            d: D(a[ye]) * n,
            h: D(a[ge]) * n,
            m: D(a[ve]) * n,
            s: D(a[pe]) * n,
            ms: D(Ut(1e3 * a[we])) * n
        }) : (a = At.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
            y: Zt(a[2], n),
            M: Zt(a[3], n),
            w: Zt(a[4], n),
            d: Zt(a[5], n),
            h: Zt(a[6], n),
            m: Zt(a[7], n),
            s: Zt(a[8], n)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (i = function(e, t) {
            var n;
            if (!e.isValid() || !t.isValid()) return {
                milliseconds: 0,
                months: 0
            };
            t = Gt(t, e), e.isBefore(t) ? n = zt(e, t) : ((n = zt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
        }(bt(r.from), bt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), s = new Ht(r), Rt(e) && m(e, "_locale") && (s._locale = e._locale), s
    }

    function Zt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }

    function zt(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function $t(s, i) {
        return function(e, t) {
            var n;
            return null === t || isNaN(+t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), qt(this, jt(e = "string" == typeof e ? +e : e, t), s), this
        }
    }

    function qt(e, t, n, s) {
        var i = t._milliseconds,
            r = Ut(t._days),
            a = Ut(t._months);
        e.isValid() && (s = null == s || s, a && Re(e, be(e, "Month") + a * n), r && xe(e, "Date", be(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && c.updateOffset(e, r || a))
    }
    jt.fn = Ht.prototype, jt.invalid = function() {
        return jt(NaN)
    };
    var Jt = $t(1, "add"),
        Bt = $t(-1, "subtract");

    function Qt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            s = e.clone().add(n, "months");
        return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
    }

    function Xt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = ht(e)) && (this._locale = t), this)
    }
    c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Kt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });

    function en() {
        return this._locale
    }
    var tn = 126227808e5;

    function nn(e, t) {
        return (e % t + t) % t
    }

    function sn(e, t, n) {
        return e < 100 && 0 <= e ? new Date(e + 400, t, n) - tn : new Date(e, t, n).valueOf()
    }

    function rn(e, t, n) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - tn : Date.UTC(e, t, n)
    }

    function an(e, t) {
        I(0, [e, e.length], 0, t)
    }

    function on(e, t, n, s, i) {
        var r;
        return null == e ? Ie(this, s, i).year : ((r = Ae(e, s, i)) < t && (t = r), function(e, t, n, s, i) {
            var r = Ee(e, t, n, s, i),
                a = Ge(r.year, 0, r.dayOfYear);
            return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
        }.call(this, e, t, n, s, i))
    }
    I(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), I(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), an("gggg", "weekYear"), an("ggggg", "weekYear"), an("GGGG", "isoWeekYear"), an("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), ue("G", se), ue("g", se), ue("GG", B, z), ue("gg", B, z), ue("GGGG", ee, q), ue("gggg", ee, q), ue("GGGGG", te, J), ue("ggggg", te, J), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) {
        t[s.substr(0, 2)] = D(e)
    }), fe(["gg", "GG"], function(e, t, n, s) {
        t[s] = c.parseTwoDigitYear(e)
    }), I("Q", 0, "Qo", "quarter"), C("quarter", "Q"), F("quarter", 7), ue("Q", Z), ce("Q", function(e, t) {
        t[_e] = 3 * (D(e) - 1)
    }), I("D", ["DD", 2], "Do", "date"), C("date", "D"), F("date", 9), ue("D", B), ue("DD", B, z), ue("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), ce(["D", "DD"], ye), ce("Do", function(e, t) {
        t[ye] = D(e.match(B)[0])
    });
    var un = Te("Date", !0);
    I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), F("dayOfYear", 4), ue("DDD", K), ue("DDDD", $), ce(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = D(e)
    }), I("m", ["mm", 2], 0, "minute"), C("minute", "m"), F("minute", 14), ue("m", B), ue("mm", B, z), ce(["m", "mm"], ve);
    var ln = Te("Minutes", !1);
    I("s", ["ss", 2], 0, "second"), C("second", "s"), F("second", 15), ue("s", B), ue("ss", B, z), ce(["s", "ss"], pe);
    var hn, dn = Te("Seconds", !1);
    for (I("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), I(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), I(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), I(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), I(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), I(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), I(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), C("millisecond", "ms"), F("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), hn = "SSSS"; hn.length <= 9; hn += "S") ue(hn, ne);

    function cn(e, t) {
        t[we] = D(1e3 * ("0." + e))
    }
    for (hn = "S"; hn.length <= 9; hn += "S") ce(hn, cn);
    var fn = Te("Milliseconds", !1);
    I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
    var mn = M.prototype;

    function _n(e) {
        return e
    }
    mn.add = Jt, mn.calendar = function(e, t) {
        var n = e || bt(),
            s = Gt(n, this).startOf("day"),
            i = c.calendarFormat(this, s) || "sameElse",
            r = t && (b(t[i]) ? t[i].call(this, n) : t[i]);
        return this.format(r || this.localeData().calendar(i, this, bt(n)))
    }, mn.clone = function() {
        return new M(this)
    }, mn.diff = function(e, t, n) {
        var s, i, r;
        if (!this.isValid()) return NaN;
        if (!(s = Gt(e, this)).isValid()) return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = H(t)) {
            case "year":
                r = Qt(this, s) / 12;
                break;
            case "month":
                r = Qt(this, s);
                break;
            case "quarter":
                r = Qt(this, s) / 3;
                break;
            case "second":
                r = (this - s) / 1e3;
                break;
            case "minute":
                r = (this - s) / 6e4;
                break;
            case "hour":
                r = (this - s) / 36e5;
                break;
            case "day":
                r = (this - s - i) / 864e5;
                break;
            case "week":
                r = (this - s - i) / 6048e5;
                break;
            default:
                r = this - s
        }
        return n ? r : S(r)
    }, mn.endOf = function(e) {
        var t;
        if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
        var n = this._isUTC ? rn : sn;
        switch (e) {
            case "year":
                t = n(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                t = n(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                t = this._d.valueOf(), t += 36e5 - nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                break;
            case "minute":
                t = this._d.valueOf(), t += 6e4 - nn(t, 6e4) - 1;
                break;
            case "second":
                t = this._d.valueOf(), t += 1e3 - nn(t, 1e3) - 1;
                break
        }
        return this._d.setTime(t), c.updateOffset(this, !0), this
    }, mn.format = function(e) {
        e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
        var t = A(this, e);
        return this.localeData().postformat(t)
    }, mn.from = function(e, t) {
        return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, mn.fromNow = function(e) {
        return this.from(bt(), e)
    }, mn.to = function(e, t) {
        return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, mn.toNow = function(e) {
        return this.to(bt(), e)
    }, mn.get = function(e) {
        return b(this[e = H(e)]) ? this[e]() : this
    }, mn.invalidAt = function() {
        return g(this).overflow
    }, mn.isAfter = function(e, t) {
        var n = k(e) ? e : bt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }, mn.isBefore = function(e, t) {
        var n = k(e) ? e : bt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }, mn.isBetween = function(e, t, n, s) {
        var i = k(e) ? e : bt(e),
            r = k(t) ? t : bt(t);
        return !!(this.isValid() && i.isValid() && r.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
    }, mn.isSame = function(e, t) {
        var n, s = k(e) ? e : bt(e);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }, mn.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }, mn.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }, mn.isValid = function() {
        return v(this)
    }, mn.lang = Kt, mn.locale = Xt, mn.localeData = en, mn.max = Pt, mn.min = xt, mn.parsingFlags = function() {
        return _({}, g(this))
    }, mn.set = function(e, t) {
        if ("object" == typeof e)
            for (var n = function(e) {
                    var t = [];
                    for (var n in e) t.push({
                        unit: n,
                        priority: U[n]
                    });
                    return t.sort(function(e, t) {
                        return e.priority - t.priority
                    }), t
                }(e = R(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]);
        else if (b(this[e = H(e)])) return this[e](t);
        return this
    }, mn.startOf = function(e) {
        var t;
        if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
        var n = this._isUTC ? rn : sn;
        switch (e) {
            case "year":
                t = n(this.year(), 0, 1);
                break;
            case "quarter":
                t = n(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                t = n(this.year(), this.month(), 1);
                break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date());
                break;
            case "hour":
                t = this._d.valueOf(), t -= nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                break;
            case "minute":
                t = this._d.valueOf(), t -= nn(t, 6e4);
                break;
            case "second":
                t = this._d.valueOf(), t -= nn(t, 1e3);
                break
        }
        return this._d.setTime(t), c.updateOffset(this, !0), this
    }, mn.subtract = Bt, mn.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }, mn.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }, mn.toDate = function() {
        return new Date(this.valueOf())
    }, mn.toISOString = function(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
            n = t ? this.clone().utc() : this;
        return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : b(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, mn.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
            t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
            s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            i = t + '[")]';
        return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i)
    }, mn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }, mn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, mn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }, mn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, mn.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }, mn.year = Oe, mn.isLeapYear = function() {
        return De(this.year())
    }, mn.weekYear = function(e) {
        return on.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, mn.isoWeekYear = function(e) {
        return on.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, mn.quarter = mn.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, mn.month = Ue, mn.daysInMonth = function() {
        return Pe(this.year(), this.month())
    }, mn.week = mn.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }, mn.isoWeek = mn.isoWeeks = function(e) {
        var t = Ie(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }, mn.weeksInYear = function() {
        var e = this.localeData()._week;
        return Ae(this.year(), e.dow, e.doy)
    }, mn.isoWeeksInYear = function() {
        return Ae(this.year(), 1, 4)
    }, mn.date = un, mn.day = mn.days = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s
    }, mn.weekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }, mn.isoWeekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this.day() || 7;
        var t, n, s = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
        return this.day(this.day() % 7 ? s : s - 7)
    }, mn.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }, mn.hour = mn.hours = nt, mn.minute = mn.minutes = ln, mn.second = mn.seconds = dn, mn.millisecond = mn.milliseconds = fn, mn.utcOffset = function(e, t, n) {
        var s, i = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? i : Vt(this);
        if ("string" == typeof e) {
            if (null === (e = Nt(re, e))) return this
        } else Math.abs(e) < 16 && !n && (e *= 60);
        return !this._isUTC && t && (s = Vt(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? qt(this, jt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this
    }, mn.utc = function(e) {
        return this.utcOffset(0, e)
    }, mn.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Vt(this), "m")), this
    }, mn.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = Nt(ie, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }, mn.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    }, mn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, mn.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }, mn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }, mn.isUtc = Et, mn.isUTC = Et, mn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }, mn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, mn.dates = n("dates accessor is deprecated. Use date instead.", un), mn.months = n("months accessor is deprecated. Use month instead", Ue), mn.years = n("years accessor is deprecated. Use year instead", Oe), mn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }), mn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!l(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (w(e, this), (e = Ot(e))._a) {
            var t = e._isUTC ? y(e._a) : bt(e._a);
            this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var yn = P.prototype;

    function gn(e, t, n, s) {
        var i = ht(),
            r = y().set(s, t);
        return i[n](r, e)
    }

    function vn(e, t, n) {
        if (h(e) && (t = e, e = void 0), e = e || "", null != t) return gn(e, t, n, "month");
        var s, i = [];
        for (s = 0; s < 12; s++) i[s] = gn(e, s, n, "month");
        return i
    }

    function pn(e, t, n, s) {
        t = ("boolean" == typeof e ? h(t) && (n = t, t = void 0) : (t = e, e = !1, h(n = t) && (n = t, t = void 0)), t || "");
        var i, r = ht(),
            a = e ? r._week.dow : 0;
        if (null != n) return gn(t, (n + a) % 7, s, "day");
        var o = [];
        for (i = 0; i < 7; i++) o[i] = gn(t, (i + a) % 7, s, "day");
        return o
    }
    yn.calendar = function(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return b(s) ? s.call(t, n) : s
    }, yn.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }, yn.invalidDate = function() {
        return this._invalidDate
    }, yn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }, yn.preparse = _n, yn.postformat = _n, yn.relativeTime = function(e, t, n, s) {
        var i = this._relativeTime[n];
        return b(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    }, yn.pastFuture = function(e, t) {
        var n = this._relativeTime[0 < e ? "future" : "past"];
        return b(n) ? n(t) : n.replace(/%s/i, t)
    }, yn.set = function(e) {
        var t, n;
        for (n in e) b(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, yn.months = function(e, t) {
        return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone
    }, yn.monthsShort = function(e, t) {
        return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, yn.monthsParse = function(e, t, n) {
        var s, i, r;
        if (this._monthsParseExact) return function(e, t, n) {
            var s, i, r, a = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = y([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
            if (i = y([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s
        }
    }, yn.monthsRegex = function(e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Le), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }, yn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, yn.week = function(e) {
        return Ie(e, this._week.dow, this._week.doy).week
    }, yn.firstDayOfYear = function() {
        return this._week.doy
    }, yn.firstDayOfWeek = function() {
        return this._week.dow
    }, yn.weekdays = function(e, t) {
        var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return !0 === e ? je(n, this._week.dow) : e ? n[e.day()] : n
    }, yn.weekdaysMin = function(e) {
        return !0 === e ? je(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }, yn.weekdaysShort = function(e) {
        return !0 === e ? je(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }, yn.weekdaysParse = function(e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact) return function(e, t, n) {
            var s, i, r, a = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = y([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (i = y([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s
        }
    }, yn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, yn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Je), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, yn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, yn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, yn.meridiem = function(e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, ut("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }), c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ut), c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", ht);
    var wn = Math.abs;

    function Mn(e, t, n, s) {
        var i = jt(t, n);
        return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble()
    }

    function kn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function Sn(e) {
        return 4800 * e / 146097
    }

    function Dn(e) {
        return 146097 * e / 4800
    }

    function Yn(e) {
        return function() {
            return this.as(e)
        }
    }
    var On = Yn("ms"),
        Tn = Yn("s"),
        bn = Yn("m"),
        xn = Yn("h"),
        Pn = Yn("d"),
        Wn = Yn("w"),
        Cn = Yn("M"),
        Hn = Yn("Q"),
        Rn = Yn("y");

    function Un(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var Fn = Un("milliseconds"),
        Ln = Un("seconds"),
        Nn = Un("minutes"),
        Gn = Un("hours"),
        Vn = Un("days"),
        En = Un("months"),
        In = Un("years");
    var An = Math.round,
        jn = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        };
    var Zn = Math.abs;

    function zn(e) {
        return (0 < e) - (e < 0) || +e
    }

    function $n() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n = Zn(this._milliseconds) / 1e3,
            s = Zn(this._days),
            i = Zn(this._months);
        t = S((e = S(n / 60)) / 60), n %= 60, e %= 60;
        var r = S(i / 12),
            a = i %= 12,
            o = s,
            u = t,
            l = e,
            h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            d = this.asSeconds();
        if (!d) return "P0D";
        var c = d < 0 ? "-" : "",
            f = zn(this._months) !== zn(d) ? "-" : "",
            m = zn(this._days) !== zn(d) ? "-" : "",
            _ = zn(this._milliseconds) !== zn(d) ? "-" : "";
        return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || h ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (h ? _ + h + "S" : "")
    }
    var qn = Ht.prototype;
    return qn.isValid = function() {
        return this._isValid
    }, qn.abs = function() {
        var e = this._data;
        return this._milliseconds = wn(this._milliseconds), this._days = wn(this._days), this._months = wn(this._months), e.milliseconds = wn(e.milliseconds), e.seconds = wn(e.seconds), e.minutes = wn(e.minutes), e.hours = wn(e.hours), e.months = wn(e.months), e.years = wn(e.years), this
    }, qn.add = function(e, t) {
        return Mn(this, e, t, 1)
    }, qn.subtract = function(e, t) {
        return Mn(this, e, t, -1)
    }, qn.as = function(e) {
        if (!this.isValid()) return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = H(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + Sn(t), e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12
        } else switch (t = this._days + Math.round(Dn(this._months)), e) {
            case "week":
                return t / 7 + s / 6048e5;
            case "day":
                return t + s / 864e5;
            case "hour":
                return 24 * t + s / 36e5;
            case "minute":
                return 1440 * t + s / 6e4;
            case "second":
                return 86400 * t + s / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + s;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, qn.asMilliseconds = On, qn.asSeconds = Tn, qn.asMinutes = bn, qn.asHours = xn, qn.asDays = Pn, qn.asWeeks = Wn, qn.asMonths = Cn, qn.asQuarters = Hn, qn.asYears = Rn, qn.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN
    }, qn._bubble = function() {
        var e, t, n, s, i, r = this._milliseconds,
            a = this._days,
            o = this._months,
            u = this._data;
        return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * kn(Dn(o) + a), o = a = 0), u.milliseconds = r % 1e3, e = S(r / 1e3), u.seconds = e % 60, t = S(e / 60), u.minutes = t % 60, n = S(t / 60), u.hours = n % 24, o += i = S(Sn(a += S(n / 24))), a -= kn(Dn(i)), s = S(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this
    }, qn.clone = function() {
        return jt(this)
    }, qn.get = function(e) {
        return e = H(e), this.isValid() ? this[e + "s"]() : NaN
    }, qn.milliseconds = Fn, qn.seconds = Ln, qn.minutes = Nn, qn.hours = Gn, qn.days = Vn, qn.weeks = function() {
        return S(this.days() / 7)
    }, qn.months = En, qn.years = In, qn.humanize = function(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, n, s, i, r, a, o, u, l, h, d, c = this.localeData(),
            f = (n = !e, s = c, i = jt(t = this).abs(), r = An(i.as("s")), a = An(i.as("m")), o = An(i.as("h")), u = An(i.as("d")), l = An(i.as("M")), h = An(i.as("y")), (d = r <= jn.ss && ["s", r] || r < jn.s && ["ss", r] || a <= 1 && ["m"] || a < jn.m && ["mm", a] || o <= 1 && ["h"] || o < jn.h && ["hh", o] || u <= 1 && ["d"] || u < jn.d && ["dd", u] || l <= 1 && ["M"] || l < jn.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h])[2] = n, d[3] = 0 < +t, d[4] = s, function(e, t, n, s, i) {
                return i.relativeTime(t || 1, !!n, e, s)
            }.apply(null, d));
        return e && (f = c.pastFuture(+this, f)), c.postformat(f)
    }, qn.toISOString = $n, qn.toString = $n, qn.toJSON = $n, qn.locale = Xt, qn.localeData = en, qn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", $n), qn.lang = Kt, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ue("x", se), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }), ce("x", function(e, t, n) {
        n._d = new Date(D(e))
    }), c.version = "2.24.0", e = bt, c.fn = mn, c.min = function() {
        return Wt("isBefore", [].slice.call(arguments, 0))
    }, c.max = function() {
        return Wt("isAfter", [].slice.call(arguments, 0))
    }, c.now = function() {
        return Date.now ? Date.now() : +new Date
    }, c.utc = y, c.unix = function(e) {
        return bt(1e3 * e)
    }, c.months = function(e, t) {
        return vn(e, t, "months")
    }, c.isDate = d, c.locale = ut, c.invalid = p, c.duration = jt, c.isMoment = k, c.weekdays = function(e, t, n) {
        return pn(e, t, n, "weekdays")
    }, c.parseZone = function() {
        return bt.apply(null, arguments).parseZone()
    }, c.localeData = ht, c.isDuration = Rt, c.monthsShort = function(e, t) {
        return vn(e, t, "monthsShort")
    }, c.weekdaysMin = function(e, t, n) {
        return pn(e, t, n, "weekdaysMin")
    }, c.defineLocale = lt, c.updateLocale = function(e, t) {
        if (null != t) {
            var n, s, i = st;
            null != (s = ot(e)) && (i = s._config), (n = new P(t = x(i, t))).parentLocale = it[e], it[e] = n, ut(e)
        } else null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]);
        return it[e]
    }, c.locales = function() {
        return s(it)
    }, c.weekdaysShort = function(e, t, n) {
        return pn(e, t, n, "weekdaysShort")
    }, c.normalizeUnits = H, c.relativeTimeRounding = function(e) {
        return void 0 === e ? An : "function" == typeof e && (An = e, !0)
    }, c.relativeTimeThreshold = function(e, t) {
        return void 0 !== jn[e] && (void 0 === t ? jn[e] : (jn[e] = t, "s" === e && (jn.ss = t - 1), !0))
    }, c.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }, c.prototype = mn, c.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, c
});

/**
 * @version: 3.1
 * @author: Dan Grossman http://www.dangrossman.info/
 * @copyright: Copyright (c) 2012-2019 Dan Grossman. All rights reserved.
 * @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
 * @website: http://www.daterangepicker.com/
 */
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
! function(t, a) {
    var e, i;
    "function" == typeof define && define.amd ? define(["moment", "jquery"], function(t, e) {
        return e.fn || (e.fn = {}), "function" != typeof t && t.hasOwnProperty("default") && (t = t.default), a(t, e)
    }) : "object" == typeof module && module.exports ? ((e = "undefined" != typeof window ? window.jQuery : void 0) || (e = require("jquery")).fn || (e.fn = {}), i = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment"), module.exports = a(i, e)) : t.daterangepicker = a(t.moment, t.jQuery)
}("undefined" != typeof window ? window : this, function(A, L) {
    function i(t, e, a) {
        var i, s, n, r;
        if (this.parentEl = "body", this.element = L(t), this.startDate = A().startOf("day"), this.endDate = A().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = A().subtract(100, "year").format("YYYY"), this.maxYear = A().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
                direction: "ltr",
                format: A.localeData().longDateFormat("L"),
                separator: " - ",
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: A.weekdaysMin(),
                monthNames: A.monthsShort(),
                firstDay: A.localeData().firstDayOfWeek()
            }, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof e && null !== e || (e = {}), "string" == typeof(e = L.extend(this.element.data(), e)).template || e.template instanceof L || (e.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = e.parentEl && L(e.parentEl).length ? L(e.parentEl) : L(this.parentEl), this.container = L(e.template).appendTo(this.parentEl), "object" == typeof e.locale && ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction), "string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel && ((h = document.createElement("textarea")).innerHTML = e.locale.customRangeLabel, l = h.value, this.locale.customRangeLabel = l)), this.container.addClass(this.locale.direction), "string" == typeof e.startDate && (this.startDate = A(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = A(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = A(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = A(e.maxDate, this.locale.format)), "object" == typeof e.startDate && (this.startDate = A(e.startDate)), "object" == typeof e.endDate && (this.endDate = A(e.endDate)), "object" == typeof e.minDate && (this.minDate = A(e.minDate)), "object" == typeof e.maxDate && (this.maxDate = A(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyButtonClasses && (this.applyButtonClasses = e.applyButtonClasses), "string" == typeof e.applyClass && (this.applyButtonClasses = e.applyClass), "string" == typeof e.cancelButtonClasses && (this.cancelButtonClasses = e.cancelButtonClasses), "string" == typeof e.cancelClass && (this.cancelButtonClasses = e.cancelClass), "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan), "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "number" == typeof e.minYear && (this.minYear = e.minYear), "number" == typeof e.maxYear && (this.maxYear = e.maxYear), "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate), "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars), 0 != this.locale.firstDay)
            for (var o = this.locale.firstDay; 0 < o;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), o--;
        if (void 0 === e.startDate && void 0 === e.endDate && L(this.element).is(":text") && (r = i = null, 2 == (t = (n = L(this.element).val()).split(this.locale.separator)).length ? (r = A(t[0], this.locale.format), i = A(t[1], this.locale.format)) : this.singleDatePicker && "" !== n && (r = A(n, this.locale.format), i = A(n, this.locale.format)), null !== r && null !== i && (this.setStartDate(r), this.setEndDate(i))), "object" == typeof e.ranges) {
            for (s in e.ranges) {
                r = "string" == typeof e.ranges[s][0] ? A(e.ranges[s][0], this.locale.format) : A(e.ranges[s][0]), i = "string" == typeof e.ranges[s][1] ? A(e.ranges[s][1], this.locale.format) : A(e.ranges[s][1]), this.minDate && r.isBefore(this.minDate) && (r = this.minDate.clone());
                var h, l, c = this.maxDate;
                this.maxSpan && c && r.clone().add(this.maxSpan).isAfter(c) && (c = r.clone().add(this.maxSpan)), c && i.isAfter(c) && (i = c.clone()), this.minDate && i.isBefore(this.minDate, this.timepicker ? "minute" : "day") || c && r.isAfter(c, this.timepicker ? "minute" : "day") || ((h = document.createElement("textarea")).innerHTML = s, l = h.value, this.ranges[l] = [r, i])
            }
            var d = "<ul>";
            for (s in this.ranges) d += '<li data-range-key="' + s + '">' + s + "</li>";
            this.showCustomRangeLabel && (d += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), d += "</ul>", this.container.find(".ranges").prepend(d)
        }
        "function" == typeof a && (this.callback = a), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof e.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), !this.timePicker && this.autoApply && this.container.addClass("auto-apply")), (void 0 === e.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", L.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", L.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", L.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", L.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", L.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", L.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", L.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", L.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", L.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", L.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": L.proxy(this.show, this),
            "focus.daterangepicker": L.proxy(this.show, this),
            "keyup.daterangepicker": L.proxy(this.elementChanged, this),
            "keydown.daterangepicker": L.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", L.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", L.proxy(this.toggle, this))), this.updateElement()
    }
    return i.prototype = {
        constructor: i,
        setStartDate: function(t) {
            "string" == typeof t && (this.startDate = A(t, this.locale.format)), "object" == typeof t && (this.startDate = A(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        setEndDate: function(t) {
            "string" == typeof t && (this.endDate = A(t, this.locale.format)), "object" == typeof t && (this.endDate = A(t)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        isInvalidDate: function() {
            return !1
        },
        isCustomDate: function() {
            return !1
        },
        updateView: function() {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").prop("disabled", !1).removeClass("disabled") : this.container.find(".right .calendar-time select").prop("disabled", !0).addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        },
        updateCalendars: function() {
            var t, e, a, i;
            this.timePicker && (this.endDate ? (e = parseInt(this.container.find(".left .hourselect").val(), 10), a = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(a) && (a = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), t = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (i = this.container.find(".left .ampmselect").val()) && e < 12 && (e += 12), "AM" === i && 12 === e && (e = 0))) : (e = parseInt(this.container.find(".right .hourselect").val(), 10), a = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(a) && (a = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), t = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (i = this.container.find(".right .ampmselect").val()) && e < 12 && (e += 12), "AM" === i && 12 === e && (e = 0))), this.leftCalendar.month.hour(e).minute(a).second(t), this.rightCalendar.month.hour(e).minute(a).second(t)), this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        },
        renderCalendar: function(t) {
            var e = "left" == t ? this.leftCalendar : this.rightCalendar,
                a = e.month.month(),
                i = e.month.year(),
                s = e.month.hour(),
                n = e.month.minute(),
                r = e.month.second(),
                o = A([i, a]).daysInMonth(),
                h = A([i, a, 1]),
                l = A([i, a, o]),
                c = A(h).subtract(1, "month").month(),
                i = A(h).subtract(1, "month").year(),
                a = A([i, c]).daysInMonth(),
                o = h.day();
            (e = []).firstDay = h, e.lastDay = l;
            for (var d = 0; d < 6; d++) e[d] = [];
            l = a - o + this.locale.firstDay + 1;
            a < l && (l -= 7), o == this.locale.firstDay && (l = a - 6);
            for (var m = A([i, c, l, 12, n, r]), d = 0, p = 0, f = 0; d < 42; d++, p++, m = A(m).add(24, "hour")) 0 < d && p % 7 == 0 && (p = 0, f++), e[f][p] = m.clone().hour(s).minute(n).second(r), m.hour(12), this.minDate && e[f][p].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[f][p].isBefore(this.minDate) && "left" == t && (e[f][p] = this.minDate.clone()), this.maxDate && e[f][p].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[f][p].isAfter(this.maxDate) && "right" == t && (e[f][p] = this.maxDate.clone());
            "left" == t ? this.leftCalendar.calendar = e : this.rightCalendar.calendar = e;
            var u = "left" == t ? this.minDate : this.startDate,
                D = this.maxDate,
                g = ("left" == t ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            g += "<thead>", g += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (g += "<th></th>"), u && !u.isBefore(e.firstDay) || this.linkedCalendars && "left" != t ? g += "<th></th>" : g += '<th class="prev available"><span></span></th>';
            c = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var y = e[1][1].month(), k = e[1][1].year(), b = D && D.year() || this.maxYear, l = u && u.year() || this.minYear, C = k == l, v = k == b, Y = '<select class="monthselect">', w = 0; w < 12; w++)(!C || u && w >= u.month()) && (!v || D && w <= D.month()) ? Y += "<option value='" + w + "'" + (w === y ? " selected='selected'" : "") + ">" + this.locale.monthNames[w] + "</option>" : Y += "<option value='" + w + "'" + (w === y ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[w] + "</option>";
                Y += "</select>";
                for (var P = '<select class="yearselect">', x = l; x <= b; x++) P += '<option value="' + x + '"' + (x === k ? ' selected="selected"' : "") + ">" + x + "</option>";
                c = Y + (P += "</select>")
            }
            g += '<th colspan="5" class="month">' + c + "</th>", D && !D.isAfter(e.lastDay) || this.linkedCalendars && "right" != t && !this.singleDatePicker ? g += "<th></th>" : g += '<th class="next available"><span></span></th>', g += "</tr>", g += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (g += '<th class="week">' + this.locale.weekLabel + "</th>"), L.each(this.locale.daysOfWeek, function(t, e) {
                g += "<th>" + e + "</th>"
            }), g += "</tr>", g += "</thead>", g += "<tbody>", null == this.endDate && this.maxSpan && (c = this.startDate.clone().add(this.maxSpan).endOf("day"), D && !c.isBefore(D) || (D = c));
            for (f = 0; f < 6; f++) {
                g += "<tr>", this.showWeekNumbers ? g += '<td class="week">' + e[f][0].week() + "</td>" : this.showISOWeekNumbers && (g += '<td class="week">' + e[f][0].isoWeek() + "</td>");
                for (p = 0; p < 7; p++) {
                    var M = [];
                    e[f][p].isSame(new Date, "day") && M.push("today"), 5 < e[f][p].isoWeekday() && M.push("weekend"), e[f][p].month() != e[1][1].month() && M.push("off", "ends"), this.minDate && e[f][p].isBefore(this.minDate, "day") && M.push("off", "disabled"), D && e[f][p].isAfter(D, "day") && M.push("off", "disabled"), this.isInvalidDate(e[f][p]) && M.push("off", "disabled"), e[f][p].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && M.push("active", "start-date"), null != this.endDate && e[f][p].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && M.push("active", "end-date"), null != this.endDate && e[f][p] > this.startDate && e[f][p] < this.endDate && M.push("in-range");
                    var I = this.isCustomDate(e[f][p]);
                    !1 !== I && ("string" == typeof I ? M.push(I) : Array.prototype.push.apply(M, I));
                    for (var S = "", B = !1, d = 0; d < M.length; d++) S += M[d] + " ", "disabled" == M[d] && (B = !0);
                    B || (S += "available"), g += '<td class="' + S.replace(/^\s+|\s+$/g, "") + '" data-title="r' + f + "c" + p + '">' + e[f][p].date() + "</td>"
                }
                g += "</tr>"
            }
            g += "</tbody>", g += "</table>", this.container.find(".drp-calendar." + t + " .calendar-table").html(g)
        },
        renderTimePicker: function(t) {
            if ("right" != t || this.endDate) {
                var e, a, i, s = this.maxDate;
                !this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t ? (a = this.startDate.clone(), i = this.minDate) : "right" == t && (a = this.endDate.clone(), i = this.startDate, "" != (n = this.container.find(".drp-calendar.right .calendar-time")).html() && (a.hour(isNaN(a.hour()) ? n.find(".hourselect option:selected").val() : a.hour()), a.minute(isNaN(a.minute()) ? n.find(".minuteselect option:selected").val() : a.minute()), a.second(isNaN(a.second()) ? n.find(".secondselect option:selected").val() : a.second()), this.timePicker24Hour || ("PM" === (d = n.find(".ampmselect option:selected").val()) && a.hour() < 12 && a.hour(a.hour() + 12), "AM" === d && 12 === a.hour() && a.hour(0))), a.isBefore(this.startDate) && (a = this.startDate.clone()), s && a.isAfter(s) && (a = s.clone())), e = '<select class="hourselect">';
                for (var n = this.timePicker24Hour ? 0 : 1, r = this.timePicker24Hour ? 23 : 12, o = n; o <= r; o++) {
                    var h = o;
                    this.timePicker24Hour || (h = 12 <= a.hour() ? 12 == o ? 12 : o + 12 : 12 == o ? 0 : o);
                    var l = a.clone().hour(h),
                        c = !1;
                    i && l.minute(59).isBefore(i) && (c = !0), s && l.minute(0).isAfter(s) && (c = !0), h != a.hour() || c ? e += c ? '<option value="' + o + '" disabled="disabled" class="disabled">' + o + "</option>" : '<option value="' + o + '">' + o + "</option>" : e += '<option value="' + o + '" selected="selected">' + o + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (var d, o = 0; o < 60; o += this.timePickerIncrement) {
                    var m = o < 10 ? "0" + o : o,
                        l = a.clone().minute(o),
                        c = !1;
                    i && l.second(59).isBefore(i) && (c = !0), s && l.second(0).isAfter(s) && (c = !0), a.minute() != o || c ? e += c ? '<option value="' + o + '" disabled="disabled" class="disabled">' + m + "</option>" : '<option value="' + o + '">' + m + "</option>" : e += '<option value="' + o + '" selected="selected">' + m + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ': <select class="secondselect">';
                    for (o = 0; o < 60; o++) {
                        m = o < 10 ? "0" + o : o, l = a.clone().second(o), c = !1;
                        i && l.isBefore(i) && (c = !0), s && l.isAfter(s) && (c = !0), a.second() != o || c ? e += c ? '<option value="' + o + '" disabled="disabled" class="disabled">' + m + "</option>" : '<option value="' + o + '">' + m + "</option>" : e += '<option value="' + o + '" selected="selected">' + m + "</option>"
                    }
                    e += "</select> "
                }
                this.timePicker24Hour || (e += '<select class="ampmselect">', n = d = "", i && a.clone().hour(12).minute(0).second(0).isBefore(i) && (d = ' disabled="disabled" class="disabled"'), s && a.clone().hour(0).minute(0).second(0).isAfter(s) && (n = ' disabled="disabled" class="disabled"'), 12 <= a.hour() ? e += '<option value="AM"' + d + '>AM</option><option value="PM" selected="selected"' + n + ">PM</option>" : e += '<option value="AM" selected="selected"' + d + '>AM</option><option value="PM"' + n + ">PM</option>", e += "</select>"), this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
            }
        },
        updateFormInputs: function() {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").prop("disabled", !1) : this.container.find("button.applyBtn").prop("disabled", !0)
        },
        move: function() {
            var t, e = {
                    top: 0,
                    left: 0
                },
                a = this.drops,
                i = L(window).width();
            switch (this.parentEl.is("body") || (e = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, i = this.parentEl[0].clientWidth + this.parentEl.offset().left), a) {
                case "auto":
                    (t = this.element.offset().top + this.element.outerHeight() - e.top) + this.container.outerHeight() >= this.parentEl[0].scrollHeight && (t = this.element.offset().top - this.container.outerHeight() - e.top, a = "up");
                    break;
                case "up":
                    t = this.element.offset().top - this.container.outerHeight() - e.top;
                    break;
                default:
                    t = this.element.offset().top + this.element.outerHeight() - e.top
            }
            this.container.css({
                top: 0,
                left: 0,
                right: "auto"
            });
            var s, n = this.container.outerWidth();
            this.container.toggleClass("drop-up", "up" == a), "left" == this.opens ? n + (i = i - this.element.offset().left - this.element.outerWidth()) > L(window).width() ? this.container.css({
                top: t,
                right: "auto",
                left: 9
            }) : this.container.css({
                top: t,
                right: i,
                left: "auto"
            }) : "center" == this.opens ? (s = this.element.offset().left - e.left + this.element.outerWidth() / 2 - n / 2) < 0 ? this.container.css({
                top: t,
                right: "auto",
                left: 9
            }) : s + n > L(window).width() ? this.container.css({
                top: t,
                left: "auto",
                right: 0
            }) : this.container.css({
                top: t,
                left: s,
                right: "auto"
            }) : (s = this.element.offset().left - e.left) + n > L(window).width() ? this.container.css({
                top: t,
                left: "auto",
                right: 0
            }) : this.container.css({
                top: t,
                left: s,
                right: "auto"
            })
        },
        show: function(t) {
            this.isShowing || (this._outsideClickProxy = L.proxy(function(t) {
                this.outsideClick(t)
            }, this), L(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-bs-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), L(window).on("resize.daterangepicker", L.proxy(function(t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        },
        hide: function(t) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), L(document).off(".daterangepicker"), L(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        },
        toggle: function(t) {
            this.isShowing ? this.hide() : this.show()
        },
        outsideClick: function(t) {
            var e = L(t.target);
            "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        },
        showCalendars: function() {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        },
        clickRange: function(t) {
            t = t.target.getAttribute("data-range-key");
            (this.chosenLabel = t) == this.locale.customRangeLabel ? this.showCalendars() : (t = this.ranges[t], this.startDate = t[0], this.endDate = t[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply())
        },
        clickPrev: function(t) {
            L(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        },
        clickNext: function(t) {
            L(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        },
        hoverDate: function(t) {
            var e, a, s, n, r, o;
            L(t.target).hasClass("available") && (e = (a = L(t.target).attr("data-title")).substr(1, 1), a = a.substr(3, 1), s = (L(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar : this.rightCalendar).calendar[e][a], n = this.leftCalendar, r = this.rightCalendar, o = this.startDate, this.endDate || this.container.find(".drp-calendar tbody td").each(function(t, e) {
                var a, i;
                L(e).hasClass("week") || (a = (i = L(e).attr("data-title")).substr(1, 1), i = i.substr(3, 1), (i = (L(e).parents(".drp-calendar").hasClass("left") ? n : r).calendar[a][i]).isAfter(o) && i.isBefore(s) || i.isSame(s, "day") ? L(e).addClass("in-range") : L(e).removeClass("in-range"))
            }))
        },
        clickDate: function(t) {
            var e, a, i, s, n, r;
            L(t.target).hasClass("available") && (e = (a = L(t.target).attr("data-title")).substr(1, 1), a = a.substr(3, 1), a = (L(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar : this.rightCalendar).calendar[e][a], this.endDate || a.isBefore(this.startDate, "day") ? (this.timePicker && (i = parseInt(this.container.find(".left .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (s = this.container.find(".left .ampmselect").val()) && i < 12 && (i += 12), "AM" === s && 12 === i && (i = 0)), n = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(n) && (n = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), r = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, a = a.clone().hour(i).minute(n).second(r)), this.endDate = null, this.setStartDate(a.clone())) : !this.endDate && a.isBefore(this.startDate) ? this.setEndDate(this.startDate.clone()) : (this.timePicker && (i = parseInt(this.container.find(".right .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (s = this.container.find(".right .ampmselect").val()) && i < 12 && (i += 12), "AM" === s && 12 === i && (i = 0)), n = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(n) && (n = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), r = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, a = a.clone().hour(i).minute(n).second(r)), this.setEndDate(a.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())), this.singleDatePicker && (this.setEndDate(this.startDate), !this.timePicker && this.autoApply && this.clickApply()), this.updateView(), t.stopPropagation())
        },
        calculateChosenLabel: function() {
            var t, e = !0,
                a = 0;
            for (t in this.ranges) {
                if (this.timePicker) {
                    var i = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                    if (this.startDate.format(i) == this.ranges[t][0].format(i) && this.endDate.format(i) == this.ranges[t][1].format(i)) {
                        e = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + a + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[t][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[t][1].format("YYYY-MM-DD")) {
                    e = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + a + ")").addClass("active").attr("data-range-key");
                    break
                }
                a++
            }
            e && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        },
        clickApply: function(t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function(t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        },
        monthOrYearChanged: function(t) {
            var e = L(t.target).closest(".drp-calendar").hasClass("left"),
                a = e ? "left" : "right",
                t = this.container.find(".drp-calendar." + a),
                a = parseInt(t.find(".monthselect").val(), 10),
                t = t.find(".yearselect").val();
            e || (t < this.startDate.year() || t == this.startDate.year() && a < this.startDate.month()) && (a = this.startDate.month(), t = this.startDate.year()), this.minDate && (t < this.minDate.year() || t == this.minDate.year() && a < this.minDate.month()) && (a = this.minDate.month(), t = this.minDate.year()), this.maxDate && (t > this.maxDate.year() || t == this.maxDate.year() && a > this.maxDate.month()) && (a = this.maxDate.month(), t = this.maxDate.year()), e ? (this.leftCalendar.month.month(a).year(t), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(a).year(t), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        },
        timeChanged: function(t) {
            var e = L(t.target).closest(".drp-calendar"),
                a = e.hasClass("left"),
                i = parseInt(e.find(".hourselect").val(), 10),
                s = parseInt(e.find(".minuteselect").val(), 10);
            isNaN(s) && (s = parseInt(e.find(".minuteselect option:last").val(), 10));
            var n, t = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
            this.timePicker24Hour || ("PM" === (e = e.find(".ampmselect").val()) && i < 12 && (i += 12), "AM" === e && 12 === i && (i = 0)), a ? ((n = this.startDate.clone()).hour(i), n.minute(s), n.second(t), this.setStartDate(n), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == n.format("YYYY-MM-DD") && this.endDate.isBefore(n) && this.setEndDate(n.clone())) : this.endDate && ((n = this.endDate.clone()).hour(i), n.minute(s), n.second(t), this.setEndDate(n)), this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        },
        elementChanged: function() {
            var t, e, a;
            this.element.is("input") && this.element.val().length && (a = e = null, 2 === (t = this.element.val().split(this.locale.separator)).length && (e = A(t[0], this.locale.format), a = A(t[1], this.locale.format)), !this.singleDatePicker && null !== e && null !== a || (a = e = A(this.element.val(), this.locale.format)), e.isValid() && a.isValid() && (this.setStartDate(e), this.setEndDate(a), this.updateView()))
        },
        keydown: function(t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
        },
        updateElement: function() {
            var t;
            this.element.is("input") && this.autoUpdateInput && (t = this.startDate.format(this.locale.format), this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change"))
        },
        remove: function() {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, L.fn.daterangepicker = function(t, e) {
        var a = L.extend(!0, {}, L.fn.daterangepicker.defaultOptions, t);
        return this.each(function() {
            var t = L(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, a, e))
        }), this
    }, i
});

/*! Quantity input incrementer */
$(".qtyplus").on("click", function(e) {
    e.preventDefault(), fieldName = $(this).attr("name");
    e = parseInt($("input[name=" + fieldName + "]").val());
    isNaN(e) ? $("input[name=" + fieldName + "]").val(0) : $("input[name=" + fieldName + "]").val(e + 1)
}), $(".qtyminus").on("click", function(e) {
    e.preventDefault(), fieldName = $(this).attr("name");
    e = parseInt($("input[name=" + fieldName + "]").val());
    !isNaN(e) && 0 < e ? $("input[name=" + fieldName + "]").val(e - 1) : $("input[name=" + fieldName + "]").val(0)
});

/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a, b) {
        function c(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function d() {}

        function e() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function() {
                            var a = d ? function(a) {
                                return d(a, null)
                            } : function(a) {
                                return a.currentStyle
                            };
                            return function(b) {
                                var c = a(b);
                                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = b("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e)
                    }
                }
            }

            function f(a) {
                if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var b = j(a);
                    if ("none" === b.display) return e();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                        var o = h[m],
                            p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return f
        }
        var g = "undefined" == typeof console ? d : function(a) {
                console.error(a)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
    }(window),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function(a) {
        "use strict";

        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function(a, b, c) {
        var d = {};
        d.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function(a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function(a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function(a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function(a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
            return a instanceof HTMLElement
        } : function(a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function() {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function(a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function(a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function(c, e) {
            b(function() {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function(a, b, c, d, e) {
        "use strict";

        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function(a) {
                return i(a, null)
            } : function(a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function() {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function() {
            this.size = c(this.element)
        }, g.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function() {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function(a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function() {
            this.css(t)
        }, g.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function() {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function() {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e, f) {
        "use strict";

        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
            e.extend(this.options, a)
        }, g.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function(a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
            this.getSize()
        }, g.prototype.getSize = function() {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function(a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function() {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function() {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function() {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function() {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function(a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function(a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function(a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function(a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function(a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function(a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function(a) {
        "use strict";

        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function() {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function() {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function(a, b) {
        "use strict";

        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function() {
            function a(a) {
                return function() {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function() {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function(a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function() {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function(a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function(a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function(a, b) {
        "use strict";

        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function() {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function(a, b, c, d, e, f, g) {
        function h(a, b) {
            return function(c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function(a) {
                return a.textContent
            } : function(a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function() {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function() {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function(a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function() {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function(a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function() {
            function a() {
                b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function() {
                b = !0, a()
            }), this.once("hideComplete", function() {
                c = !0, a()
            }), this.once("revealComplete", function() {
                d = !0, a()
            })
        }, m.prototype._filter = function(a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function(a) {
            return i && this.options.isJQueryFiltering ? function(b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function(b) {
                return a(b.element)
            } : function(b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function(a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function() {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function(a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function() {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function(a) {
                    return a && h(g(a))
                } : function(a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function(b) {
                    return b.getAttribute(a)
                } : function(a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function(a) {
                return parseInt(a, 10)
            },
            parseFloat: function(a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function() {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function() {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function() {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function(a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function(a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function(a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function(a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function() {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function(a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function() {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    });

/*! Error page */
gsap.set("svg", {
    visibility: "visible"
}), gsap.to("#headStripe", {
    y: .5,
    rotation: 1,
    yoyo: !0,
    repeat: -1,
    ease: "sine.inOut",
    duration: 1
}), gsap.to("#spaceman", {
    y: .5,
    rotation: 1,
    yoyo: !0,
    repeat: -1,
    ease: "sine.inOut",
    duration: 1
}), gsap.to("#craterSmall", {
    x: -3,
    yoyo: !0,
    repeat: -1,
    duration: 1,
    ease: "sine.inOut"
}), gsap.to("#craterBig", {
    x: 3,
    yoyo: !0,
    repeat: -1,
    duration: 1,
    ease: "sine.inOut"
}), gsap.to("#planet", {
    rotation: -2,
    yoyo: !0,
    repeat: -1,
    duration: 1,
    ease: "sine.inOut",
    transformOrigin: "50% 50%"
}), gsap.to("#starsBig g", {
    rotation: "random(-30,30)",
    transformOrigin: "50% 50%",
    yoyo: !0,
    repeat: -1,
    ease: "sine.inOut"
}), gsap.fromTo("#starsSmall g", {
    scale: 0,
    transformOrigin: "50% 50%"
}, {
    scale: 1,
    transformOrigin: "50% 50%",
    yoyo: !0,
    repeat: -1,
    stagger: .1
}), gsap.to("#circlesSmall circle", {
    y: -4,
    yoyo: !0,
    duration: 1,
    ease: "sine.inOut",
    repeat: -1
}), gsap.to("#circlesBig circle", {
    y: -2,
    yoyo: !0,
    duration: 1,
    ease: "sine.inOut",
    repeat: -1
}), gsap.set("#glassShine", {
    x: -68
}), gsap.to("#glassShine", {
    x: 80,
    duration: 2,
    rotation: -30,
    ease: "expo.inOut",
    transformOrigin: "50% 50%",
    repeat: -1,
    repeatDelay: 8,
    delay: 2
});

/**
RESIZESENSOR.JS
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
! function() {
    var e = function(t, i) {
        function s() {
            this.q = [], this.add = function(e) {
                this.q.push(e)
            };
            var e, t;
            this.call = function() {
                for (e = 0, t = this.q.length; e < t; e++) this.q[e].call()
            }
        }

        function o(e, t) {
            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
        }

        function n(e, t) {
            if (e.resizedAttached) {
                if (e.resizedAttached) return void e.resizedAttached.add(t)
            } else e.resizedAttached = new s, e.resizedAttached.add(t);
            e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
            var i = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                n = "position: absolute; left: 0; top: 0; transition: 0s;";
            e.resizeSensor.style.cssText = i, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + i + '"><div style="' + n + '"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + n + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), {
                fixed: 1,
                absolute: 1
            }[o(e, "position")] || (e.style.position = "relative");
            var d, r, l = e.resizeSensor.childNodes[0],
                c = l.childNodes[0],
                h = e.resizeSensor.childNodes[1],
                a = (h.childNodes[0], function() {
                    c.style.width = l.offsetWidth + 10 + "px", c.style.height = l.offsetHeight + 10 + "px", l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, h.scrollLeft = h.scrollWidth, h.scrollTop = h.scrollHeight, d = e.offsetWidth, r = e.offsetHeight
                });
            a();
            var f = function() {
                    e.resizedAttached && e.resizedAttached.call()
                },
                u = function(e, t, i) {
                    e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i)
                },
                p = function() {
                    e.offsetWidth == d && e.offsetHeight == r || f(), a()
                };
            u(l, "scroll", p), u(h, "scroll", p)
        }
        var d = Object.prototype.toString.call(t),
            r = "[object Array]" === d || "[object NodeList]" === d || "[object HTMLCollection]" === d || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
        if (r)
            for (var l = 0, c = t.length; l < c; l++) n(t[l], i);
        else n(t, i);
        this.detach = function() {
            if (r)
                for (var i = 0, s = t.length; i < s; i++) e.detach(t[i]);
            else e.detach(t)
        }
    };
    e.detach = function(e) {
        e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
    }, "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e : window.ResizeSensor = e
}();

/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */

! function(i) {
    i.fn.theiaStickySidebar = function(t) {
        function e(t, e) {
            return !0 === t.initialized || !(i("body").width() < t.minWidth) && (o(t, e), !0)
        }

        function o(t, e) {
            t.initialized = !0, 0 === i("#theia-sticky-sidebar-stylesheet-" + t.namespace).length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function() {
                function e() {
                    n.fixedScrollTop = 0, n.sidebar.css({
                        "min-height": "1px"
                    }), n.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function o(t) {
                    var e = t.height();
                    return t.children().each(function() {
                        e = Math.max(e, i(this).height())
                    }), e
                }
                var n = {};
                if (n.sidebar = i(this), n.options = t || {}, n.container = i(n.options.containerSelector), 0 == n.container.length && (n.container = n.sidebar.parent()), n.sidebar.parents(":not(.theia-exception)").css("-webkit-transform", "none"), n.sidebar.css({
                        position: n.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), n.stickySidebar = n.sidebar.find(".theiaStickySidebar"), 0 == n.stickySidebar.length) {
                    var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    n.sidebar.find("script").filter(function(i, t) {
                        return 0 === t.type.length || t.type.match(s)
                    }).remove(), n.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(n.sidebar.children()), n.sidebar.append(n.stickySidebar)
                }
                n.marginBottom = parseInt(n.sidebar.css("margin-bottom")), n.paddingTop = parseInt(n.sidebar.css("padding-top")), n.paddingBottom = parseInt(n.sidebar.css("padding-bottom"));
                var d = n.stickySidebar.offset().top,
                    r = n.stickySidebar.outerHeight();
                n.stickySidebar.css("padding-top", 1), n.stickySidebar.css("padding-bottom", 1), d -= n.stickySidebar.offset().top, r = n.stickySidebar.outerHeight() - r - d, 0 == d ? (n.stickySidebar.css("padding-top", 0), n.stickySidebarPaddingTop = 0) : n.stickySidebarPaddingTop = 1, 0 == r ? (n.stickySidebar.css("padding-bottom", 0), n.stickySidebarPaddingBottom = 0) : n.stickySidebarPaddingBottom = 1, n.previousScrollTop = null, n.fixedScrollTop = 0, e(), n.onScroll = function(n) {
                    if (n.stickySidebar.is(":visible"))
                        if (i("body").width() < n.options.minWidth) e();
                        else if (n.options.disableOnResponsiveLayouts && n.sidebar.outerWidth("none" == n.sidebar.css("float")) + 50 > n.container.width()) e();
                    else {
                        var s = i(document).scrollTop(),
                            d = "static";
                        if (s >= n.sidebar.offset().top + (n.paddingTop - n.options.additionalMarginTop)) {
                            var r, c = n.paddingTop + t.additionalMarginTop,
                                p = n.paddingBottom + n.marginBottom + t.additionalMarginBottom,
                                b = n.sidebar.offset().top,
                                l = n.sidebar.offset().top + o(n.container),
                                f = 0 + t.additionalMarginTop;
                            r = n.stickySidebar.outerHeight() + c + p < i(window).height() ? f + n.stickySidebar.outerHeight() : i(window).height() - n.marginBottom - n.paddingBottom - t.additionalMarginBottom;
                            var h = b - s + n.paddingTop,
                                g = l - s - n.paddingBottom - n.marginBottom,
                                u = n.stickySidebar.offset().top - s,
                                S = n.previousScrollTop - s;
                            "fixed" == n.stickySidebar.css("position") && "modern" == n.options.sidebarBehavior && (u += S), "stick-to-top" == n.options.sidebarBehavior && (u = t.additionalMarginTop), "stick-to-bottom" == n.options.sidebarBehavior && (u = r - n.stickySidebar.outerHeight()), u = S > 0 ? Math.min(u, f) : Math.max(u, r - n.stickySidebar.outerHeight()), u = Math.max(u, h), u = Math.min(u, g - n.stickySidebar.outerHeight());
                            var m = n.container.height() == n.stickySidebar.outerHeight();
                            d = (m || u != f) && (m || u != r - n.stickySidebar.outerHeight()) ? s + u - n.sidebar.offset().top - n.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                        }
                        if ("fixed" == d) {
                            var y = i(document).scrollLeft();
                            n.stickySidebar.css({
                                position: "fixed",
                                width: a(n.stickySidebar) + "px",
                                transform: "translateY(" + u + "px)",
                                left: n.sidebar.offset().left + parseInt(n.sidebar.css("padding-left")) - y + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == d) {
                            var k = {};
                            "absolute" != n.stickySidebar.css("position") && (k.position = "absolute", k.transform = "translateY(" + (s + u - n.sidebar.offset().top - n.stickySidebarPaddingTop - n.stickySidebarPaddingBottom) + "px)", k.top = "0px"), k.width = a(n.stickySidebar) + "px", k.left = "", n.stickySidebar.css(k)
                        } else "static" == d && e();
                        "static" != d && 1 == n.options.updateSidebarHeight && n.sidebar.css({
                            "min-height": n.stickySidebar.outerHeight() + n.stickySidebar.offset().top - n.sidebar.offset().top + n.paddingBottom
                        }), n.previousScrollTop = s
                    }
                }, n.onScroll(n), i(document).on("scroll." + n.options.namespace, function(i) {
                    return function() {
                        i.onScroll(i)
                    }
                }(n)), i(window).on("resize." + n.options.namespace, function(i) {
                    return function() {
                        i.stickySidebar.css({
                            position: "static"
                        }), i.onScroll(i)
                    }
                }(n)), "undefined" != typeof ResizeSensor && new ResizeSensor(n.stickySidebar[0], function(i) {
                    return function() {
                        i.onScroll(i)
                    }
                }(n))
            })
        }

        function a(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width
            } catch (i) {}
            return void 0 === t && (t = i.width()), t
        }
        var n = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return t = i.extend(n, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0,
            function(t, o) {
                e(t, o) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function(t, o) {
                    return function(a) {
                        e(t, o) && i(this).unbind(a)
                    }
                }(t, o)), i(window).on("resize." + t.namespace, function(t, o) {
                    return function(a) {
                        e(t, o) && i(this).unbind(a)
                    }
                }(t, o)))
            }(t, this), this
    }
}(jQuery);

/**
 * @license
 * Package: @easepick/bundle
 * Version: 1.2.1
 * https://easepick.com/
 * Copyright 2023 Rinat G.
 * 
 * Licensed under the terms of GNU General Public License Version 2 or later. (http://www.gnu.org/licenses/gpl.html)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).easepick = t.easepick || {})
}(this, (function(t) {
    "use strict";
    class e extends Date {
        static parseDateTime(t, i = "YYYY-MM-DD", n = "en-US") {
            if (!t) return new Date((new Date).setHours(0, 0, 0, 0));
            if (t instanceof e) return t.toJSDate();
            if (t instanceof Date) return t;
            if (/^-?\d{10,}$/.test(String(t))) return new Date(Number(t));
            if ("string" == typeof t) {
                const s = [];
                let o = null;
                for (; null != (o = e.regex.exec(i));) "\\" !== o[1] && s.push(o);
                if (s.length) {
                    const i = {
                        year: null,
                        month: null,
                        shortMonth: null,
                        longMonth: null,
                        day: null,
                        hour: 0,
                        minute: 0,
                        second: 0,
                        ampm: null,
                        value: ""
                    };
                    s[0].index > 0 && (i.value += ".*?");
                    for (const [t, o] of Object.entries(s)) {
                        const s = Number(t),
                            {
                                group: a,
                                pattern: r
                            } = e.formatPatterns(o[0], n);
                        i[a] = s + 1, i.value += r, i.value += ".*?"
                    }
                    const o = new RegExp(`^${i.value}$`);
                    if (o.test(t)) {
                        const s = o.exec(t),
                            a = Number(s[i.year]);
                        let r = null;
                        i.month ? r = Number(s[i.month]) - 1 : i.shortMonth ? r = e.shortMonths(n).indexOf(s[i.shortMonth]) : i.longMonth && (r = e.longMonths(n).indexOf(s[i.longMonth]));
                        const c = Number(s[i.day]) || 1,
                            l = Number(s[i.hour]);
                        let h = Number.isNaN(l) ? 0 : l;
                        const d = Number(s[i.minute]),
                            p = Number.isNaN(d) ? 0 : d,
                            u = Number(s[i.second]),
                            g = Number.isNaN(u) ? 0 : u,
                            m = s[i.ampm];
                        return m && "PM" === m && (h += 12, 24 === h && (h = 0)), new Date(a, r, c, h, p, g, 0)
                    }
                }
            }
            return new Date((new Date).setHours(0, 0, 0, 0))
        }
        static regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|A|a)/g;
        static MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        static shortMonths(t) {
            return e.MONTH_JS.map((e => new Date(2019, e).toLocaleString(t, {
                month: "short"
            })))
        }
        static longMonths(t) {
            return e.MONTH_JS.map((e => new Date(2019, e).toLocaleString(t, {
                month: "long"
            })))
        }
        static formatPatterns(t, i) {
            switch (t) {
                case "YY":
                case "YYYY":
                    return {
                        group: "year",
                        pattern: `(\\d{${t.length}})`
                    };
                case "M":
                    return {
                        group: "month",
                        pattern: "(\\d{1,2})"
                    };
                case "MM":
                    return {
                        group: "month",
                        pattern: "(\\d{2})"
                    };
                case "MMM":
                    return {
                        group: "shortMonth",
                        pattern: `(${e.shortMonths(i).join("|")})`
                    };
                case "MMMM":
                    return {
                        group: "longMonth",
                        pattern: `(${e.longMonths(i).join("|")})`
                    };
                case "D":
                    return {
                        group: "day",
                        pattern: "(\\d{1,2})"
                    };
                case "DD":
                    return {
                        group: "day",
                        pattern: "(\\d{2})"
                    };
                case "h":
                case "H":
                    return {
                        group: "hour",
                        pattern: "(\\d{1,2})"
                    };
                case "hh":
                case "HH":
                    return {
                        group: "hour",
                        pattern: "(\\d{2})"
                    };
                case "m":
                    return {
                        group: "minute",
                        pattern: "(\\d{1,2})"
                    };
                case "mm":
                    return {
                        group: "minute",
                        pattern: "(\\d{2})"
                    };
                case "s":
                    return {
                        group: "second",
                        pattern: "(\\d{1,2})"
                    };
                case "ss":
                    return {
                        group: "second",
                        pattern: "(\\d{2})"
                    };
                case "a":
                case "A":
                    return {
                        group: "ampm",
                        pattern: "(AM|PM|am|pm)"
                    }
            }
        }
        lang;
        constructor(t = null, i = "YYYY-MM-DD", n = "en-US") {
            super(e.parseDateTime(t, i, n)), this.lang = n
        }
        getWeek(t) {
            const e = new Date(this.midnight_ts(this)),
                i = (this.getDay() + (7 - t)) % 7;
            e.setDate(e.getDate() - i);
            const n = e.getTime();
            return e.setMonth(0, 1), e.getDay() !== t && e.setMonth(0, 1 + (4 - e.getDay() + 7) % 7), 1 + Math.ceil((n - e.getTime()) / 6048e5)
        }
        clone() {
            return new e(this)
        }
        toJSDate() {
            return new Date(this)
        }
        inArray(t, e = "[]") {
            return t.some((t => t instanceof Array ? this.isBetween(t[0], t[1], e) : this.isSame(t, "day")))
        }
        isBetween(t, e, i = "()") {
            switch (i) {
                default:
                    case "()":
                    return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(e);
                case "[)":
                        return this.midnight_ts(this) >= this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(e);
                case "(]":
                        return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) <= this.midnight_ts(e);
                case "[]":
                        return this.midnight_ts() >= this.midnight_ts(t) && this.midnight_ts() <= this.midnight_ts(e)
            }
        }
        isBefore(t, e = "days") {
            switch (e) {
                case "day":
                case "days":
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() > new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
                case "month":
                case "months":
                    return new Date(t.getFullYear(), t.getMonth(), 1).getTime() > new Date(this.getFullYear(), this.getMonth(), 1).getTime();
                case "year":
                case "years":
                    return t.getFullYear() > this.getFullYear()
            }
            throw new Error("isBefore: Invalid unit!")
        }
        isSameOrBefore(t, e = "days") {
            switch (e) {
                case "day":
                case "days":
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() >= new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
                case "month":
                case "months":
                    return new Date(t.getFullYear(), t.getMonth(), 1).getTime() >= new Date(this.getFullYear(), this.getMonth(), 1).getTime()
            }
            throw new Error("isSameOrBefore: Invalid unit!")
        }
        isAfter(t, e = "days") {
            switch (e) {
                case "day":
                case "days":
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() > new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                case "month":
                case "months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime() > new Date(t.getFullYear(), t.getMonth(), 1).getTime();
                case "year":
                case "years":
                    return this.getFullYear() > t.getFullYear()
            }
            throw new Error("isAfter: Invalid unit!")
        }
        isSameOrAfter(t, e = "days") {
            switch (e) {
                case "day":
                case "days":
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() >= new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                case "month":
                case "months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime() >= new Date(t.getFullYear(), t.getMonth(), 1).getTime()
            }
            throw new Error("isSameOrAfter: Invalid unit!")
        }
        isSame(t, e = "days") {
            switch (e) {
                case "day":
                case "days":
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() === new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                case "month":
                case "months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime() === new Date(t.getFullYear(), t.getMonth(), 1).getTime()
            }
            throw new Error("isSame: Invalid unit!")
        }
        add(t, e = "days") {
            switch (e) {
                case "day":
                case "days":
                    this.setDate(this.getDate() + t);
                    break;
                case "month":
                case "months":
                    this.setMonth(this.getMonth() + t)
            }
            return this
        }
        subtract(t, e = "days") {
            switch (e) {
                case "day":
                case "days":
                    this.setDate(this.getDate() - t);
                    break;
                case "month":
                case "months":
                    this.setMonth(this.getMonth() - t)
            }
            return this
        }
        diff(t, e = "days") {
            switch (e) {
                default:
                    case "day":
                    case "days":
                    return Math.round((this.midnight_ts() - this.midnight_ts(t)) / 864e5);
                case "month":
                        case "months":
                        let e = 12 * (t.getFullYear() - this.getFullYear());
                    return e -= t.getMonth(),
                    e += this.getMonth(),
                    e
            }
        }
        format(t, i = "en-US") {
            let n = "";
            const s = [];
            let o = null;
            for (; null != (o = e.regex.exec(t));) "\\" !== o[1] && s.push(o);
            if (s.length) {
                s[0].index > 0 && (n += t.substring(0, s[0].index));
                for (const [e, o] of Object.entries(s)) {
                    const a = Number(e);
                    n += this.formatTokens(o[0], i), s[a + 1] && (n += t.substring(o.index + o[0].length, s[a + 1].index)), a === s.length - 1 && (n += t.substring(o.index + o[0].length))
                }
            }
            return n.replace(/\\/g, "")
        }
        midnight_ts(t) {
            return t ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0).getTime() : new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime()
        }
        formatTokens(t, i) {
            switch (t) {
                case "YY":
                    return String(this.getFullYear()).slice(-2);
                case "YYYY":
                    return String(this.getFullYear());
                case "M":
                    return String(this.getMonth() + 1);
                case "MM":
                    return `0${this.getMonth()+1}`.slice(-2);
                case "MMM":
                    return e.shortMonths(i)[this.getMonth()];
                case "MMMM":
                    return e.longMonths(i)[this.getMonth()];
                case "D":
                    return String(this.getDate());
                case "DD":
                    return `0${this.getDate()}`.slice(-2);
                case "H":
                    return String(this.getHours());
                case "HH":
                    return `0${this.getHours()}`.slice(-2);
                case "h":
                    return String(this.getHours() % 12 || 12);
                case "hh":
                    return `0${this.getHours()%12||12}`.slice(-2);
                case "m":
                    return String(this.getMinutes());
                case "mm":
                    return `0${this.getMinutes()}`.slice(-2);
                case "s":
                    return String(this.getSeconds());
                case "ss":
                    return `0${this.getSeconds()}`.slice(-2);
                case "a":
                    return this.getHours() < 12 || 24 === this.getHours() ? "am" : "pm";
                case "A":
                    return this.getHours() < 12 || 24 === this.getHours() ? "AM" : "PM";
                default:
                    return ""
            }
        }
    }
    class i {
        picker;
        constructor(t) {
            this.picker = t
        }
        render(t, i) {
            t || (t = new e), t.setDate(1), t.setHours(0, 0, 0, 0), "function" == typeof this[`get${i}View`] && this[`get${i}View`](t)
        }
        getContainerView(t) {
            this.picker.ui.container.innerHTML = "", this.picker.options.header && this.picker.trigger("render", {
                date: t.clone(),
                view: "Header"
            }), this.picker.trigger("render", {
                date: t.clone(),
                view: "Main"
            }), this.picker.options.autoApply || this.picker.trigger("render", {
                date: t.clone(),
                view: "Footer"
            })
        }
        getHeaderView(t) {
            const e = document.createElement("header");
            this.picker.options.header instanceof HTMLElement && e.appendChild(this.picker.options.header), "string" == typeof this.picker.options.header && (e.innerHTML = this.picker.options.header), this.picker.ui.container.appendChild(e), this.picker.trigger("view", {
                target: e,
                date: t.clone(),
                view: "Header"
            })
        }
        getMainView(t) {
            const e = document.createElement("main");
            this.picker.ui.container.appendChild(e);
            const i = document.createElement("div");
            i.className = `calendars grid-${this.picker.options.grid}`;
            for (let e = 0; e < this.picker.options.calendars; e++) {
                const n = document.createElement("div");
                n.className = "calendar", i.appendChild(n);
                const s = this.getCalendarHeaderView(t.clone());
                n.appendChild(s), this.picker.trigger("view", {
                    date: t.clone(),
                    view: "CalendarHeader",
                    index: e,
                    target: s
                });
                const o = this.getCalendarDayNamesView();
                n.appendChild(o), this.picker.trigger("view", {
                    date: t.clone(),
                    view: "CalendarDayNames",
                    index: e,
                    target: o
                });
                const a = this.getCalendarDaysView(t.clone());
                n.appendChild(a), this.picker.trigger("view", {
                    date: t.clone(),
                    view: "CalendarDays",
                    index: e,
                    target: a
                });
                const r = this.getCalendarFooterView(this.picker.options.lang, t.clone());
                n.appendChild(r), this.picker.trigger("view", {
                    date: t.clone(),
                    view: "CalendarFooter",
                    index: e,
                    target: r
                }), this.picker.trigger("view", {
                    date: t.clone(),
                    view: "CalendarItem",
                    index: e,
                    target: n
                }), t.add(1, "month")
            }
            e.appendChild(i), this.picker.trigger("view", {
                date: t.clone(),
                view: "Calendars",
                target: i
            }), this.picker.trigger("view", {
                date: t.clone(),
                view: "Main",
                target: e
            })
        }
        getFooterView(t) {
            const e = document.createElement("footer"),
                i = document.createElement("div");
            i.className = "footer-buttons";
            const n = document.createElement("button");
            n.className = "cancel-button unit", n.innerHTML = this.picker.options.locale.cancel, i.appendChild(n);
            const s = document.createElement("button");
            s.className = "apply-button unit", s.innerHTML = this.picker.options.locale.apply, s.disabled = !0, i.appendChild(s), e.appendChild(i), this.picker.ui.container.appendChild(e), this.picker.trigger("view", {
                date: t,
                target: e,
                view: "Footer"
            })
        }
        getCalendarHeaderView(t) {
            const e = document.createElement("div");
            e.className = "header";
            const i = document.createElement("div");
            i.className = "month-name", i.innerHTML = `<span>${t.toLocaleString(this.picker.options.lang,{month:"long"})}</span> ${t.format("YYYY")}`, e.appendChild(i);
            const n = document.createElement("button");
            n.className = "previous-button unit", n.innerHTML = this.picker.options.locale.previousMonth, e.appendChild(n);
            const s = document.createElement("button");
            return s.className = "next-button unit", s.innerHTML = this.picker.options.locale.nextMonth, e.appendChild(s), e
        }
        getCalendarDayNamesView() {
            const t = document.createElement("div");
            t.className = "daynames-row";
            for (let e = 1; e <= 7; e++) {
                const i = 3 + this.picker.options.firstDay + e,
                    n = document.createElement("div");
                n.className = "dayname", n.innerHTML = new Date(1970, 0, i, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, {
                    weekday: "short"
                }), n.title = new Date(1970, 0, i, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, {
                    weekday: "long"
                }), t.appendChild(n), this.picker.trigger("view", {
                    dayIdx: i,
                    view: "CalendarDayName",
                    target: n
                })
            }
            return t
        }
        getCalendarDaysView(t) {
            const e = document.createElement("div");
            e.className = "days-grid";
            const i = this.calcOffsetDays(t, this.picker.options.firstDay),
                n = 32 - new Date(t.getFullYear(), t.getMonth(), 32).getDate();
            for (let t = 0; t < i; t++) {
                const t = document.createElement("div");
                t.className = "offset", e.appendChild(t)
            }
            for (let i = 1; i <= n; i++) {
                t.setDate(i);
                const n = this.getCalendarDayView(t);
                e.appendChild(n), this.picker.trigger("view", {
                    date: t,
                    view: "CalendarDay",
                    target: n
                })
            }
            return e
        }
        getCalendarDayView(t) {
            const i = this.picker.options.date ? new e(this.picker.options.date) : null,
                n = new e,
                s = document.createElement("div");
            return s.className = "day unit", s.innerHTML = t.format("D"), s.dataset.time = String(t.getTime()), t.isSame(n, "day") && s.classList.add("today"), [0, 6].includes(t.getDay()) && s.classList.add("weekend"), this.picker.datePicked.length ? this.picker.datePicked[0].isSame(t, "day") && s.classList.add("selected") : i && t.isSame(i, "day") && s.classList.add("selected"), this.picker.trigger("view", {
                date: t,
                view: "CalendarDay",
                target: s
            }), s
        }
        getCalendarFooterView(t, e) {
            const i = document.createElement("div");
            return i.className = "footer", i
        }
        calcOffsetDays(t, e) {
            let i = t.getDay() - e;
            return i < 0 && (i += 7), i
        }
    }
    class n {
        picker;
        instances = {};
        constructor(t) {
            this.picker = t
        }
        initialize() {
            const t = [];
            this.picker.options.plugins.forEach((e => {
                "function" == typeof e ? t.push(new e) : "string" == typeof e && "undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, e) ? t.push(new easepick[e]) : console.warn(`easepick: ${e} not found.`)
            })), t.sort(((t, e) => t.priority > e.priority ? -1 : t.priority < e.priority || t.dependencies.length > e.dependencies.length ? 1 : t.dependencies.length < e.dependencies.length ? -1 : 0)), t.forEach((t => {
                t.attach(this.picker), this.instances[t.getName()] = t
            }))
        }
        getInstance(t) {
            return this.instances[t]
        }
        addInstance(t) {
            if (Object.prototype.hasOwnProperty.call(this.instances, t)) console.warn(`easepick: ${t} already added.`);
            else {
                if ("undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, t)) {
                    const e = new easepick[t];
                    return e.attach(this.picker), this.instances[e.getName()] = e, e
                }
                if ("undefined" !== this.getPluginFn(t)) {
                    const e = new(this.getPluginFn(t));
                    return e.attach(this.picker), this.instances[e.getName()] = e, e
                }
                console.warn(`easepick: ${t} not found.`)
            }
            return null
        }
        removeInstance(t) {
            return t in this.instances && this.instances[t].detach(), delete this.instances[t]
        }
        reloadInstance(t) {
            return this.removeInstance(t), this.addInstance(t)
        }
        getPluginFn(t) {
            return [...this.picker.options.plugins].filter((e => "function" == typeof e && (new e).getName() === t)).shift()
        }
    }
    class s {
        Calendar = new i(this);
        PluginManager = new n(this);
        calendars = [];
        datePicked = [];
        cssLoaded = 0;
        binds = {
            hidePicker: this.hidePicker.bind(this),
            show: this.show.bind(this)
        };
        options = {
            doc: document,
            css: [],
            element: null,
            firstDay: 1,
            grid: 1,
            calendars: 1,
            lang: "en-US",
            date: null,
            format: "YYYY-MM-DD",
            readonly: !0,
            autoApply: !0,
            header: !1,
            inline: !1,
            scrollToDate: !0,
            locale: {
                nextMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
                previousMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
                cancel: "Cancel",
                apply: "Apply"
            },
            documentClick: this.binds.hidePicker,
            plugins: []
        };
        ui = {
            container: null,
            shadowRoot: null,
            wrapper: null
        };
        version = "1.2.1";
        constructor(t) {
            const e = { ...this.options.locale,
                ...t.locale
            };
            this.options = { ...this.options,
                ...t
            }, this.options.locale = e, this.handleOptions(), this.ui.wrapper = document.createElement("span"), this.ui.wrapper.style.display = "none", this.ui.wrapper.style.position = "absolute", this.ui.wrapper.style.pointerEvents = "none", this.ui.wrapper.className = "easepick-wrapper", this.ui.wrapper.attachShadow({
                mode: "open"
            }), this.ui.shadowRoot = this.ui.wrapper.shadowRoot, this.ui.container = document.createElement("div"), this.ui.container.className = "container", this.options.zIndex && (this.ui.container.style.zIndex = String(this.options.zIndex)), this.options.inline && (this.ui.wrapper.style.position = "relative", this.ui.container.classList.add("inline")), this.ui.shadowRoot.appendChild(this.ui.container), this.options.element.after(this.ui.wrapper), this.handleCSS(), this.options.element.addEventListener("click", this.binds.show), this.on("view", this.onView.bind(this)), this.on("render", this.onRender.bind(this)), this.PluginManager.initialize(), this.parseValues(), "function" == typeof this.options.setup && this.options.setup(this), this.on("click", this.onClick.bind(this));
            const i = this.options.scrollToDate ? this.getDate() : null;
            this.renderAll(i)
        }
        on(t, e, i = {}) {
            this.ui.container.addEventListener(t, e, i)
        }
        off(t, e, i = {}) {
            this.ui.container.removeEventListener(t, e, i)
        }
        trigger(t, e = {}) {
            return this.ui.container.dispatchEvent(new CustomEvent(t, {
                detail: e
            }))
        }
        destroy() {
            this.options.element.removeEventListener("click", this.binds.show), "function" == typeof this.options.documentClick && document.removeEventListener("click", this.options.documentClick, !0), Object.keys(this.PluginManager.instances).forEach((t => {
                this.PluginManager.removeInstance(t)
            })), this.ui.wrapper.remove()
        }
        onRender(t) {
            const {
                view: e,
                date: i
            } = t.detail;
            this.Calendar.render(i, e)
        }
        onView(t) {
            const {
                view: e,
                target: i
            } = t.detail;
            "Footer" === e && this.datePicked.length && (i.querySelector(".apply-button").disabled = !1)
        }
        onClickHeaderButton(t) {
            this.isCalendarHeaderButton(t) && (t.classList.contains("next-button") ? this.calendars[0].add(1, "month") : this.calendars[0].subtract(1, "month"), this.renderAll(this.calendars[0]))
        }
        onClickCalendarDay(t) {
            if (this.isCalendarDay(t)) {
                const i = new e(t.dataset.time);
                this.options.autoApply ? (this.setDate(i), this.trigger("select", {
                    date: this.getDate()
                }), this.hide()) : (this.datePicked[0] = i, this.trigger("preselect", {
                    date: this.getDate()
                }), this.renderAll())
            }
        }
        onClickApplyButton(t) {
            if (this.isApplyButton(t)) {
                if (this.datePicked[0] instanceof Date) {
                    const t = this.datePicked[0].clone();
                    this.setDate(t)
                }
                this.hide(), this.trigger("select", {
                    date: this.getDate()
                })
            }
        }
        onClickCancelButton(t) {
            this.isCancelButton(t) && this.hide()
        }
        onClick(t) {
            const e = t.target;
            if (e instanceof HTMLElement) {
                const t = e.closest(".unit");
                if (!(t instanceof HTMLElement)) return;
                this.onClickHeaderButton(t), this.onClickCalendarDay(t), this.onClickApplyButton(t), this.onClickCancelButton(t)
            }
        }
        isShown() {
            return this.ui.container.classList.contains("inline") || this.ui.container.classList.contains("show")
        }
        show(t) {
            if (this.isShown()) return;
            const e = t && "target" in t ? t.target : this.options.element,
                {
                    top: i,
                    left: n
                } = this.adjustPosition(e);
            this.ui.container.style.top = `${i}px`, this.ui.container.style.left = `${n}px`, this.ui.container.classList.add("show"), this.trigger("show", {
                target: e
            })
        }
        hide() {
            this.ui.container.classList.remove("show"), this.datePicked.length = 0, this.renderAll(), this.trigger("hide")
        }
        setDate(t) {
            const i = new e(t, this.options.format);
            this.options.date = i.clone(), this.updateValues(), this.calendars.length && this.renderAll()
        }
        getDate() {
            return this.options.date instanceof e ? this.options.date.clone() : null
        }
        parseValues() {
            this.options.date ? this.setDate(this.options.date) : this.options.element instanceof HTMLInputElement && this.options.element.value.length && this.setDate(this.options.element.value), this.options.date instanceof Date || (this.options.date = null)
        }
        updateValues() {
            const t = this.getDate(),
                e = t instanceof Date ? t.format(this.options.format, this.options.lang) : "",
                i = this.options.element;
            i instanceof HTMLInputElement ? i.value = e : i instanceof HTMLElement && (i.innerText = e)
        }
        hidePicker(t) {
            let e = t.target,
                i = null;
            e.shadowRoot && (e = t.composedPath()[0], i = e.getRootNode().host), this.isShown() && i !== this.ui.wrapper && e !== this.options.element && this.hide()
        }
        renderAll(t) {
            this.trigger("render", {
                view: "Container",
                date: (t || this.calendars[0]).clone()
            })
        }
        isCalendarHeaderButton(t) {
            return ["previous-button", "next-button"].some((e => t.classList.contains(e)))
        }
        isCalendarDay(t) {
            return t.classList.contains("day")
        }
        isApplyButton(t) {
            return t.classList.contains("apply-button")
        }
        isCancelButton(t) {
            return t.classList.contains("cancel-button")
        }
        gotoDate(t) {
            const i = new e(t, this.options.format);
            i.setDate(1), this.calendars[0] = i.clone(), this.renderAll()
        }
        clear() {
            this.options.date = null, this.datePicked.length = 0, this.updateValues(), this.renderAll(), this.trigger("clear")
        }
        handleOptions() {
            this.options.element instanceof HTMLElement || (this.options.element = this.options.doc.querySelector(this.options.element)), "function" == typeof this.options.documentClick && document.addEventListener("click", this.options.documentClick, !0), this.options.element instanceof HTMLInputElement && (this.options.element.readOnly = this.options.readonly), this.options.date ? this.calendars[0] = new e(this.options.date, this.options.format) : this.calendars[0] = new e
        }
        handleCSS() {
            if (Array.isArray(this.options.css)) this.options.css.forEach((t => {
                const e = document.createElement("link");
                e.href = t, e.rel = "stylesheet";
                const i = () => {
                    this.cssLoaded++, this.cssLoaded === this.options.css.length && (this.ui.wrapper.style.display = "")
                };
                e.addEventListener("load", i), e.addEventListener("error", i), this.ui.shadowRoot.append(e)
            }));
            else if ("string" == typeof this.options.css) {
                const t = document.createElement("style"),
                    e = document.createTextNode(this.options.css);
                t.appendChild(e), this.ui.shadowRoot.append(t), this.ui.wrapper.style.display = ""
            } else "function" == typeof this.options.css && (this.options.css.call(this, this), this.ui.wrapper.style.display = "")
        }
        adjustPosition(t) {
            const e = t.getBoundingClientRect(),
                i = this.ui.wrapper.getBoundingClientRect();
            this.ui.container.classList.add("calc");
            const n = this.ui.container.getBoundingClientRect();
            this.ui.container.classList.remove("calc");
            let s = e.bottom - i.bottom,
                o = e.left - i.left;
            return "undefined" != typeof window && (window.innerHeight < s + n.height && s - n.height >= 0 && (s = e.top - i.top - n.height), window.innerWidth < o + n.width && e.right - n.width >= 0 && (o = e.right - i.right - n.width)), {
                left: o,
                top: s
            }
        }
    }
    var o = Object.freeze({
        __proto__: null,
        Core: s,
        create: s
    });
    class a {
        picker;
        options;
        priority = 0;
        dependencies = [];
        attach(t) {
            const e = this.getName(),
                i = { ...this.options
                };
            this.options = { ...this.options,
                ...t.options[e] || {}
            };
            for (const n of Object.keys(i))
                if (null !== i[n] && "object" == typeof i[n] && Object.keys(i[n]).length && e in t.options && n in t.options[e]) {
                    const s = { ...t.options[e][n]
                    };
                    null !== s && "object" == typeof s && Object.keys(s).length && Object.keys(s).every((t => Object.keys(i[n]).includes(t))) && (this.options[n] = { ...i[n],
                        ...s
                    })
                }
            if (this.picker = t, this.dependenciesNotFound()) {
                const t = this.dependencies.filter((t => !this.pluginsAsStringArray().includes(t)));
                return void console.warn(`${this.getName()}: required dependencies (${t.join(", ")}).`)
            }
            const n = this.camelCaseToKebab(this.getName());
            this.picker.ui.container.classList.add(n), this.onAttach()
        }
        detach() {
            const t = this.camelCaseToKebab(this.getName());
            this.picker.ui.container.classList.remove(t), "function" == typeof this.onDetach && this.onDetach()
        }
        dependenciesNotFound() {
            return this.dependencies.length && !this.dependencies.every((t => this.pluginsAsStringArray().includes(t)))
        }
        pluginsAsStringArray() {
            return this.picker.options.plugins.map((t => "function" == typeof t ? (new t).getName() : t))
        }
        camelCaseToKebab(t) {
            return t.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase()
        }
    }
    t.AmpPlugin = class extends a {
        rangePlugin;
        lockPlugin;
        priority = 10;
        binds = {
            onView: this.onView.bind(this),
            onColorScheme: this.onColorScheme.bind(this)
        };
        options = {
            dropdown: {
                months: !1,
                years: !1,
                minYear: 1950,
                maxYear: null
            },
            darkMode: !0,
            locale: {
                resetButton: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>'
            }
        };
        matchMedia;
        getName() {
            return "AmpPlugin"
        }
        onAttach() {
            this.options.darkMode && window && "matchMedia" in window && (this.matchMedia = window.matchMedia("(prefers-color-scheme: dark)"), this.matchMedia.matches && (this.picker.ui.container.dataset.theme = "dark"), this.matchMedia.addEventListener("change", this.binds.onColorScheme)), this.options.weekNumbers && this.picker.ui.container.classList.add("week-numbers"), this.picker.on("view", this.binds.onView)
        }
        onDetach() {
            this.options.darkMode && window && "matchMedia" in window && this.matchMedia.removeEventListener("change", this.binds.onColorScheme), this.picker.ui.container.removeAttribute("data-theme"), this.picker.ui.container.classList.remove("week-numbers"), this.picker.off("view", this.binds.onView)
        }
        onView(t) {
            this.lockPlugin = this.picker.PluginManager.getInstance("LockPlugin"), this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin"), this.handleDropdown(t), this.handleResetButton(t), this.handleWeekNumbers(t)
        }
        onColorScheme(t) {
            const e = t.matches ? "dark" : "light";
            this.picker.ui.container.dataset.theme = e
        }
        handleDropdown(t) {
            const {
                view: i,
                target: n,
                date: s,
                index: o
            } = t.detail;
            if ("CalendarHeader" === i) {
                const t = n.querySelector(".month-name");
                if (this.options.dropdown.months) {
                    t.childNodes[0].remove();
                    const i = document.createElement("select");
                    i.className = "month-name--select month-name--dropdown";
                    for (let t = 0; t < 12; t += 1) {
                        const n = document.createElement("option"),
                            o = new e(new Date(s.getFullYear(), t, 2, 0, 0, 0)),
                            a = new e(new Date(s.getFullYear(), t, 1, 0, 0, 0));
                        n.value = String(t), n.text = o.toLocaleString(this.picker.options.lang, {
                            month: "long"
                        }), this.lockPlugin && (n.disabled = this.lockPlugin.options.minDate && a.isBefore(new e(this.lockPlugin.options.minDate), "month") || this.lockPlugin.options.maxDate && a.isAfter(new e(this.lockPlugin.options.maxDate), "month")), n.selected = a.getMonth() === s.getMonth(), i.appendChild(n)
                    }
                    i.addEventListener("change", (t => {
                        const e = t.target;
                        this.picker.calendars[0].setDate(1), this.picker.calendars[0].setMonth(Number(e.value)), this.picker.renderAll()
                    })), t.prepend(i)
                }
                if (this.options.dropdown.years) {
                    t.childNodes[1].remove();
                    const i = document.createElement("select");
                    i.className = "month-name--select";
                    const n = this.options.dropdown.minYear,
                        o = this.options.dropdown.maxYear ? this.options.dropdown.maxYear : (new Date).getFullYear();
                    if (s.getFullYear() > o) {
                        const t = document.createElement("option");
                        t.value = String(s.getFullYear()), t.text = String(s.getFullYear()), t.selected = !0, t.disabled = !0, i.appendChild(t)
                    }
                    for (let t = o; t >= n; t -= 1) {
                        const n = document.createElement("option"),
                            o = new e(new Date(t, 0, 1, 0, 0, 0));
                        n.value = String(t), n.text = String(t), this.lockPlugin && (n.disabled = this.lockPlugin.options.minDate && o.isBefore(new e(this.lockPlugin.options.minDate), "year") || this.lockPlugin.options.maxDate && o.isAfter(new e(this.lockPlugin.options.maxDate), "year")), n.selected = s.getFullYear() === t, i.appendChild(n)
                    }
                    if (s.getFullYear() < n) {
                        const t = document.createElement("option");
                        t.value = String(s.getFullYear()), t.text = String(s.getFullYear()), t.selected = !0, t.disabled = !0, i.appendChild(t)
                    }
                    if ("asc" === this.options.dropdown.years) {
                        const t = Array.prototype.slice.call(i.childNodes).reverse();
                        i.innerHTML = "", t.forEach((t => {
                            t.innerHTML = t.value, i.appendChild(t)
                        }))
                    }
                    i.addEventListener("change", (t => {
                        const e = t.target;
                        this.picker.calendars[0].setFullYear(Number(e.value)), this.picker.renderAll()
                    })), t.appendChild(i)
                }
            }
        }
        handleResetButton(t) {
            const {
                view: e,
                target: i
            } = t.detail;
            if ("CalendarHeader" === e && this.options.resetButton) {
                const t = document.createElement("button");
                t.className = "reset-button unit", t.innerHTML = this.options.locale.resetButton, t.addEventListener("click", (t => {
                    t.preventDefault();
                    let e = !0;
                    "function" == typeof this.options.resetButton && (e = this.options.resetButton.call(this)), e && this.picker.clear()
                })), i.appendChild(t)
            }
        }
        handleWeekNumbers(t) {
            if (this.options.weekNumbers) {
                const {
                    view: i,
                    target: n
                } = t.detail;
                if ("CalendarDayNames" === i) {
                    const t = document.createElement("div");
                    t.className = "wnum-header", t.innerHTML = "Wk", n.prepend(t)
                }
                "CalendarDays" === i && [...n.children].forEach(((t, i) => {
                    if (0 === i || i % 7 == 0) {
                        let i;
                        if (t.classList.contains("day")) i = new e(t.dataset.time);
                        else {
                            const t = n.querySelector(".day");
                            i = new e(t.dataset.time)
                        }
                        let s = i.getWeek(this.picker.options.firstDay);
                        53 === s && 0 === i.getMonth() && (s = "53/1");
                        const o = document.createElement("div");
                        o.className = "wnum-item", o.innerHTML = String(s), n.insertBefore(o, t)
                    }
                }))
            }
        }
    }, t.DateTime = e, t.KbdPlugin = class extends a {
        docElement = null;
        rangePlugin;
        binds = {
            onView: this.onView.bind(this),
            onKeydown: this.onKeydown.bind(this)
        };
        options = {
            unitIndex: 1,
            dayIndex: 2
        };
        getName() {
            return "KbdPlugin"
        }
        onAttach() {
            const t = this.picker.options.element,
                e = t.getBoundingClientRect();
            if (this.docElement = document.createElement("span"), this.docElement.style.position = "absolute", this.docElement.style.top = `${t.offsetTop}px`, this.docElement.style.left = t.offsetLeft + e.width - 25 + "px", this.docElement.attachShadow({
                    mode: "open"
                }), this.options.html) this.docElement.shadowRoot.innerHTML = this.options.html;
            else {
                const t = `\n      <style>\n      button {\n        border: none;\n        background: transparent;\n        font-size: ${window.getComputedStyle(this.picker.options.element).fontSize};\n      }\n      </style>\n\n      <button>&#128197;</button>\n      `;
                this.docElement.shadowRoot.innerHTML = t
            }
            const i = this.docElement.shadowRoot.querySelector("button");
            i && (i.addEventListener("click", (t => {
                t.preventDefault(), this.picker.show({
                    target: this.picker.options.element
                })
            }), {
                capture: !0
            }), i.addEventListener("keydown", (t => {
                "Escape" === t.code && this.picker.hide()
            }), {
                capture: !0
            })), this.picker.options.element.after(this.docElement), this.picker.on("view", this.binds.onView), this.picker.on("keydown", this.binds.onKeydown)
        }
        onDetach() {
            this.docElement && this.docElement.isConnected && this.docElement.remove(), this.picker.off("view", this.binds.onView), this.picker.off("keydown", this.binds.onKeydown)
        }
        onView(t) {
            const {
                view: e,
                target: i
            } = t.detail;
            i && "querySelector" in i && ("CalendarDay" !== e || ["locked", "not-available"].some((t => i.classList.contains(t))) ? [...i.querySelectorAll(".unit:not(.day)")].forEach((t => t.tabIndex = this.options.unitIndex)) : i.tabIndex = this.options.dayIndex)
        }
        onKeydown(t) {
            switch (this.onMouseEnter(t), t.code) {
                case "ArrowUp":
                case "ArrowDown":
                    this.verticalMove(t);
                    break;
                case "ArrowLeft":
                case "ArrowRight":
                    this.horizontalMove(t);
                    break;
                case "Enter":
                case "Space":
                    this.handleEnter(t);
                    break;
                case "Escape":
                    this.picker.hide()
            }
        }
        findAllowableDaySibling(t, e, i) {
            const n = Array.from(t.querySelectorAll(`.day[tabindex="${this.options.dayIndex}"]`)),
                s = n.indexOf(e);
            return n.filter(((t, e) => i(e, s) && t.tabIndex === this.options.dayIndex))[0]
        }
        changeMonth(t) {
            const e = {
                    ArrowLeft: "previous",
                    ArrowRight: "next"
                },
                i = this.picker.ui.container.querySelector(`.${e[t.code]}-button[tabindex="${this.options.unitIndex}"]`);
            i && !i.parentElement.classList.contains(`no-${e[t.code]}-month`) && (i.dispatchEvent(new Event("click", {
                bubbles: !0
            })), setTimeout((() => {
                let e = null;
                switch (t.code) {
                    case "ArrowLeft":
                        const t = this.picker.ui.container.querySelectorAll(`.day[tabindex="${this.options.dayIndex}"]`);
                        e = t[t.length - 1];
                        break;
                    case "ArrowRight":
                        e = this.picker.ui.container.querySelector(`.day[tabindex="${this.options.dayIndex}"]`)
                }
                e && e.focus()
            })))
        }
        verticalMove(t) {
            const e = t.target;
            if (e.classList.contains("day")) {
                t.preventDefault();
                const i = this.findAllowableDaySibling(this.picker.ui.container, e, ((e, i) => e === ("ArrowUp" === t.code ? i - 7 : i + 7)));
                i && i.focus()
            }
        }
        horizontalMove(t) {
            const e = t.target;
            if (e.classList.contains("day")) {
                t.preventDefault();
                const i = this.findAllowableDaySibling(this.picker.ui.container, e, ((e, i) => e === ("ArrowLeft" === t.code ? i - 1 : i + 1)));
                i ? i.focus() : this.changeMonth(t)
            }
        }
        handleEnter(t) {
            const e = t.target;
            e.classList.contains("day") && (t.preventDefault(), e.dispatchEvent(new Event("click", {
                bubbles: !0
            })), setTimeout((() => {
                if (this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin"), this.rangePlugin || !this.picker.options.autoApply) {
                    const t = this.picker.ui.container.querySelector(".day.selected");
                    t && setTimeout((() => {
                        t.focus()
                    }))
                }
            })))
        }
        onMouseEnter(t) {
            t.target.classList.contains("day") && setTimeout((() => {
                const t = this.picker.ui.shadowRoot.activeElement;
                t && t.dispatchEvent(new Event("mouseenter", {
                    bubbles: !0
                }))
            }))
        }
    }, t.LockPlugin = class extends a {
        priority = 1;
        binds = {
            onView: this.onView.bind(this)
        };
        options = {
            minDate: null,
            maxDate: null,
            minDays: null,
            maxDays: null,
            selectForward: null,
            selectBackward: null,
            presets: !0,
            inseparable: !1,
            filter: null
        };
        getName() {
            return "LockPlugin"
        }
        onAttach() {
            if (this.options.minDate && (this.options.minDate = new e(this.options.minDate, this.picker.options.format, this.picker.options.lang)), this.options.maxDate && (this.options.maxDate = new e(this.options.maxDate, this.picker.options.format, this.picker.options.lang), this.options.maxDate instanceof e && this.picker.options.calendars > 1 && this.picker.calendars[0].isSame(this.options.maxDate, "month"))) {
                const t = this.picker.calendars[0].clone().subtract(1, "month");
                this.picker.gotoDate(t)
            }
            if ((this.options.minDays || this.options.maxDays || this.options.selectForward || this.options.selectBackward) && !this.picker.options.plugins.includes("RangePlugin")) {
                const t = ["minDays", "maxDays", "selectForward", "selectBackward"];
                console.warn(`${this.getName()}: options ${t.join(", ")} required RangePlugin.`)
            }
            this.picker.on("view", this.binds.onView)
        }
        onDetach() {
            this.picker.off("view", this.binds.onView)
        }
        onView(t) {
            const {
                view: i,
                target: n,
                date: s
            } = t.detail;
            if ("CalendarHeader" === i && (this.options.minDate instanceof e && s.isSameOrBefore(this.options.minDate, "month") && n.classList.add("no-previous-month"), this.options.maxDate instanceof e && s.isSameOrAfter(this.options.maxDate, "month") && n.classList.add("no-next-month")), "CalendarDay" === i) {
                const t = this.picker.datePicked.length ? this.picker.datePicked[0] : null;
                if (this.testFilter(s)) return void n.classList.add("locked");
                if (this.options.inseparable) {
                    if (this.options.minDays) {
                        const t = s.clone().subtract(this.options.minDays - 1, "day"),
                            e = s.clone().add(this.options.minDays - 1, "day");
                        let i = !1,
                            o = !1;
                        for (; t.isBefore(s, "day");) {
                            if (this.testFilter(t)) {
                                i = !0;
                                break
                            }
                            t.add(1, "day")
                        }
                        for (; e.isAfter(s, "day");) {
                            if (this.testFilter(e)) {
                                o = !0;
                                break
                            }
                            e.subtract(1, "day")
                        }
                        i && o && n.classList.add("not-available")
                    }
                    this.rangeIsNotAvailable(s, t) && n.classList.add("not-available")
                }
                this.dateIsNotAvailable(s, t) && n.classList.add("not-available")
            }
            if (this.options.presets && "PresetPluginButton" === i) {
                const t = new e(Number(n.dataset.start)),
                    i = new e(Number(n.dataset.end)),
                    s = i.diff(t, "day"),
                    o = this.options.minDays && s < this.options.minDays,
                    a = this.options.maxDays && s > this.options.maxDays;
                (o || a || this.lockMinDate(t) || this.lockMaxDate(t) || this.lockMinDate(i) || this.lockMaxDate(i) || this.rangeIsNotAvailable(t, i)) && n.setAttribute("disabled", "disabled")
            }
        }
        dateIsNotAvailable(t, e) {
            return this.lockMinDate(t) || this.lockMaxDate(t) || this.lockMinDays(t, e) || this.lockMaxDays(t, e) || this.lockSelectForward(t) || this.lockSelectBackward(t)
        }
        rangeIsNotAvailable(t, e) {
            if (!t || !e) return !1;
            const i = (t.isSameOrBefore(e, "day") ? t : e).clone(),
                n = (e.isSameOrAfter(t, "day") ? e : t).clone();
            for (; i.isSameOrBefore(n, "day");) {
                if (this.testFilter(i)) return !0;
                i.add(1, "day")
            }
            return !1
        }
        lockMinDate(t) {
            return this.options.minDate instanceof e && t.isBefore(this.options.minDate, "day")
        }
        lockMaxDate(t) {
            return this.options.maxDate instanceof e && t.isAfter(this.options.maxDate, "day")
        }
        lockMinDays(t, e) {
            if (this.options.minDays && e) {
                const i = e.clone().subtract(this.options.minDays - 1, "day"),
                    n = e.clone().add(this.options.minDays - 1, "day");
                return t.isBetween(i, n)
            }
            return !1
        }
        lockMaxDays(t, e) {
            if (this.options.maxDays && e) {
                const i = e.clone().subtract(this.options.maxDays, "day"),
                    n = e.clone().add(this.options.maxDays, "day");
                return !t.isBetween(i, n)
            }
            return !1
        }
        lockSelectForward(t) {
            if (1 === this.picker.datePicked.length && this.options.selectForward) {
                const e = this.picker.datePicked[0].clone();
                return t.isBefore(e, "day")
            }
            return !1
        }
        lockSelectBackward(t) {
            if (1 === this.picker.datePicked.length && this.options.selectBackward) {
                const e = this.picker.datePicked[0].clone();
                return t.isAfter(e, "day")
            }
            return !1
        }
        testFilter(t) {
            return "function" == typeof this.options.filter && this.options.filter(t, this.picker.datePicked)
        }
    }, t.PresetPlugin = class extends a {
        dependencies = ["RangePlugin"];
        binds = {
            onView: this.onView.bind(this),
            onClick: this.onClick.bind(this)
        };
        options = {
            customLabels: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Month", "Last Month"],
            customPreset: {},
            position: "left"
        };
        getName() {
            return "PresetPlugin"
        }
        onAttach() {
            if (!Object.keys(this.options.customPreset).length) {
                const t = new e,
                    i = () => {
                        const i = t.clone();
                        i.setDate(1);
                        const n = new Date(t.getFullYear(), t.getMonth() + 1, 0);
                        return [new e(i), new e(n)]
                    },
                    n = () => {
                        const i = t.clone();
                        i.setMonth(i.getMonth() - 1), i.setDate(1);
                        const n = new Date(t.getFullYear(), t.getMonth(), 0);
                        return [new e(i), new e(n)]
                    },
                    s = [
                        [t.clone(), t.clone()],
                        [t.clone().subtract(1, "day"), t.clone().subtract(1, "day")],
                        [t.clone().subtract(6, "day"), t.clone()],
                        [t.clone().subtract(29, "day"), t.clone()], i(), n()
                    ];
                Object.values(this.options.customLabels).forEach(((t, e) => {
                    this.options.customPreset[t] = s[e]
                }))
            }
            this.picker.on("view", this.binds.onView), this.picker.on("click", this.binds.onClick)
        }
        onDetach() {
            this.picker.off("view", this.binds.onView), this.picker.off("click", this.binds.onClick)
        }
        onView(t) {
            const {
                view: e,
                target: i
            } = t.detail;
            if ("Main" === e) {
                const t = document.createElement("div");
                t.className = "preset-plugin-container", Object.keys(this.options.customPreset).forEach((e => {
                    if (Object.prototype.hasOwnProperty.call(this.options.customPreset, e)) {
                        const i = this.options.customPreset[e],
                            n = document.createElement("button");
                        n.className = "preset-button unit", n.innerHTML = e, n.dataset.start = i[0].getTime(), n.dataset.end = i[1].getTime(), t.appendChild(n), this.picker.trigger("view", {
                            view: "PresetPluginButton",
                            target: n
                        })
                    }
                })), i.appendChild(t), i.classList.add(`preset-${this.options.position}`), this.picker.trigger("view", {
                    view: "PresetPluginContainer",
                    target: t
                })
            }
        }
        onClick(t) {
            const i = t.target;
            if (i instanceof HTMLElement) {
                const t = i.closest(".unit");
                if (!(t instanceof HTMLElement)) return;
                if (this.isPresetButton(t)) {
                    const i = new e(Number(t.dataset.start)),
                        n = new e(Number(t.dataset.end));
                    this.picker.options.autoApply ? (this.picker.setDateRange(i, n), this.picker.trigger("select", {
                        start: this.picker.getStartDate(),
                        end: this.picker.getEndDate()
                    }), this.picker.hide()) : (this.picker.datePicked = [i, n], this.picker.renderAll())
                }
            }
        }
        isPresetButton(t) {
            return t.classList.contains("preset-button")
        }
    }, t.RangePlugin = class extends a {
        tooltipElement;
        triggerElement;
        binds = {
            setStartDate: this.setStartDate.bind(this),
            setEndDate: this.setEndDate.bind(this),
            setDateRange: this.setDateRange.bind(this),
            getStartDate: this.getStartDate.bind(this),
            getEndDate: this.getEndDate.bind(this),
            onView: this.onView.bind(this),
            onShow: this.onShow.bind(this),
            onMouseEnter: this.onMouseEnter.bind(this),
            onMouseLeave: this.onMouseLeave.bind(this),
            onClickCalendarDay: this.onClickCalendarDay.bind(this),
            onClickApplyButton: this.onClickApplyButton.bind(this),
            parseValues: this.parseValues.bind(this),
            updateValues: this.updateValues.bind(this),
            clear: this.clear.bind(this)
        };
        options = {
            elementEnd: null,
            startDate: null,
            endDate: null,
            repick: !1,
            strict: !0,
            delimiter: " - ",
            tooltip: !0,
            tooltipNumber: t => t,
            locale: {
                zero: "",
                one: "day",
                two: "",
                few: "",
                many: "",
                other: "days"
            },
            documentClick: this.hidePicker.bind(this)
        };
        getName() {
            return "RangePlugin"
        }
        onAttach() {
            this.binds._setStartDate = this.picker.setStartDate, this.binds._setEndDate = this.picker.setEndDate, this.binds._setDateRange = this.picker.setDateRange, this.binds._getStartDate = this.picker.getStartDate, this.binds._getEndDate = this.picker.getEndDate, this.binds._parseValues = this.picker.parseValues, this.binds._updateValues = this.picker.updateValues, this.binds._clear = this.picker.clear, this.binds._onClickCalendarDay = this.picker.onClickCalendarDay, this.binds._onClickApplyButton = this.picker.onClickApplyButton, Object.defineProperties(this.picker, {
                setStartDate: {
                    configurable: !0,
                    value: this.binds.setStartDate
                },
                setEndDate: {
                    configurable: !0,
                    value: this.binds.setEndDate
                },
                setDateRange: {
                    configurable: !0,
                    value: this.binds.setDateRange
                },
                getStartDate: {
                    configurable: !0,
                    value: this.binds.getStartDate
                },
                getEndDate: {
                    configurable: !0,
                    value: this.binds.getEndDate
                },
                parseValues: {
                    configurable: !0,
                    value: this.binds.parseValues
                },
                updateValues: {
                    configurable: !0,
                    value: this.binds.updateValues
                },
                clear: {
                    configurable: !0,
                    value: this.binds.clear
                },
                onClickCalendarDay: {
                    configurable: !0,
                    value: this.binds.onClickCalendarDay
                },
                onClickApplyButton: {
                    configurable: !0,
                    value: this.binds.onClickApplyButton
                }
            }), this.options.elementEnd && (this.options.elementEnd instanceof HTMLElement || (this.options.elementEnd = this.picker.options.doc.querySelector(this.options.elementEnd)), this.options.elementEnd instanceof HTMLInputElement && (this.options.elementEnd.readOnly = this.picker.options.readonly), "function" == typeof this.picker.options.documentClick && (document.removeEventListener("click", this.picker.options.documentClick, !0), "function" == typeof this.options.documentClick && document.addEventListener("click", this.options.documentClick, !0)), this.options.elementEnd.addEventListener("click", this.picker.show.bind(this.picker))), this.options.repick = this.options.repick && this.options.elementEnd instanceof HTMLElement, this.picker.options.date = null, this.picker.on("view", this.binds.onView), this.picker.on("show", this.binds.onShow), this.picker.on("mouseenter", this.binds.onMouseEnter, !0), this.picker.on("mouseleave", this.binds.onMouseLeave, !0), this.checkIntlPluralLocales()
        }
        onDetach() {
            Object.defineProperties(this.picker, {
                setStartDate: {
                    configurable: !0,
                    value: this.binds._setStartDate
                },
                setEndDate: {
                    configurable: !0,
                    value: this.binds._setEndDate
                },
                setDateRange: {
                    configurable: !0,
                    value: this.binds._setDateRange
                },
                getStartDate: {
                    configurable: !0,
                    value: this.binds._getStartDate
                },
                getEndDate: {
                    configurable: !0,
                    value: this.binds._getEndDate
                },
                parseValues: {
                    configurable: !0,
                    value: this.binds._parseValues
                },
                updateValues: {
                    configurable: !0,
                    value: this.binds._updateValues
                },
                clear: {
                    configurable: !0,
                    value: this.binds._clear
                },
                onClickCalendarDay: {
                    configurable: !0,
                    value: this.binds._onClickCalendarDay
                },
                onClickApplyButton: {
                    configurable: !0,
                    value: this.binds._onClickApplyButton
                }
            }), this.picker.off("view", this.binds.onView), this.picker.off("show", this.binds.onShow), this.picker.off("mouseenter", this.binds.onMouseEnter, !0), this.picker.off("mouseleave", this.binds.onMouseLeave, !0)
        }
        parseValues() {
            if (this.options.startDate || this.options.endDate) this.options.strict ? this.options.startDate && this.options.endDate ? this.setDateRange(this.options.startDate, this.options.endDate) : (this.options.startDate = null, this.options.endDate = null) : (this.options.startDate && this.setStartDate(this.options.startDate), this.options.endDate && this.setEndDate(this.options.endDate));
            else if (this.options.elementEnd) this.options.strict ? this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length && this.options.elementEnd instanceof HTMLInputElement && this.options.elementEnd.value.length && this.setDateRange(this.picker.options.element.value, this.options.elementEnd.value) : (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length && this.setStartDate(this.picker.options.element.value), this.options.elementEnd instanceof HTMLInputElement && this.options.elementEnd.value.length && this.setEndDate(this.options.elementEnd.value));
            else if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                const [t, e] = this.picker.options.element.value.split(this.options.delimiter);
                this.options.strict ? t && e && this.setDateRange(t, e) : (t && this.setStartDate(t), e && this.setEndDate(e))
            }
        }
        updateValues() {
            const t = this.picker.options.element,
                e = this.options.elementEnd,
                i = this.picker.getStartDate(),
                n = this.picker.getEndDate(),
                s = i instanceof Date ? i.format(this.picker.options.format, this.picker.options.lang) : "",
                o = n instanceof Date ? n.format(this.picker.options.format, this.picker.options.lang) : "";
            if (e) t instanceof HTMLInputElement ? t.value = s : t instanceof HTMLElement && (t.innerText = s), e instanceof HTMLInputElement ? e.value = o : e instanceof HTMLElement && (e.innerText = o);
            else {
                const e = `${s}${s||o?this.options.delimiter:""}${o}`;
                t instanceof HTMLInputElement ? t.value = e : t instanceof HTMLElement && (t.innerText = e)
            }
        }
        clear() {
            this.options.startDate = null, this.options.endDate = null, this.picker.datePicked.length = 0, this.updateValues(), this.picker.renderAll(), this.picker.trigger("clear")
        }
        onShow(t) {
            const {
                target: e
            } = t.detail;
            this.triggerElement = e, this.picker.options.scrollToDate && this.getStartDate() instanceof Date && this.picker.gotoDate(this.getStartDate()), this.initializeRepick()
        }
        onView(t) {
            const {
                view: i,
                target: n
            } = t.detail;
            if ("Main" === i && (this.tooltipElement = document.createElement("span"), this.tooltipElement.className = "range-plugin-tooltip", n.appendChild(this.tooltipElement)), "CalendarDay" === i) {
                const t = new e(n.dataset.time),
                    i = this.picker.datePicked,
                    s = i.length ? this.picker.datePicked[0] : this.getStartDate(),
                    o = i.length ? this.picker.datePicked[1] : this.getEndDate();
                s && s.isSame(t, "day") && n.classList.add("start"), s && o && (o.isSame(t, "day") && n.classList.add("end"), t.isBetween(s, o) && n.classList.add("in-range"))
            }
            if ("Footer" === i) {
                const t = 1 === this.picker.datePicked.length && !this.options.strict || 2 === this.picker.datePicked.length;
                n.querySelector(".apply-button").disabled = !t
            }
        }
        hidePicker(t) {
            let e = t.target,
                i = null;
            e.shadowRoot && (e = t.composedPath()[0], i = e.getRootNode().host), this.picker.isShown() && i !== this.picker.ui.wrapper && e !== this.picker.options.element && e !== this.options.elementEnd && this.picker.hide()
        }
        setStartDate(t) {
            const i = new e(t, this.picker.options.format);
            this.options.startDate = i ? i.clone() : null, this.updateValues(), this.picker.renderAll()
        }
        setEndDate(t) {
            const i = new e(t, this.picker.options.format);
            this.options.endDate = i ? i.clone() : null, this.updateValues(), this.picker.renderAll()
        }
        setDateRange(t, i) {
            const n = new e(t, this.picker.options.format),
                s = new e(i, this.picker.options.format);
            this.options.startDate = n ? n.clone() : null, this.options.endDate = s ? s.clone() : null, this.updateValues(), this.picker.renderAll()
        }
        getStartDate() {
            return this.options.startDate instanceof Date ? this.options.startDate.clone() : null
        }
        getEndDate() {
            return this.options.endDate instanceof Date ? this.options.endDate.clone() : null
        }
        onMouseEnter(t) {
            const i = t.target;
            if (i instanceof HTMLElement) {
                this.isContainer(i) && this.initializeRepick();
                const t = i.closest(".unit");
                if (!(t instanceof HTMLElement)) return;
                if (this.picker.isCalendarDay(t)) {
                    if (1 !== this.picker.datePicked.length) return;
                    let i = this.picker.datePicked[0].clone(),
                        n = new e(t.dataset.time),
                        s = !1;
                    if (i.isAfter(n, "day")) {
                        const t = i.clone();
                        i = n.clone(), n = t.clone(), s = !0
                    }
                    if ([...this.picker.ui.container.querySelectorAll(".day")].forEach((o => {
                            const a = new e(o.dataset.time),
                                r = this.picker.Calendar.getCalendarDayView(a);
                            a.isBetween(i, n) && r.classList.add("in-range"), a.isSame(this.picker.datePicked[0], "day") && (r.classList.add("start"), r.classList.toggle("flipped", s)), o === t && (r.classList.add("end"), r.classList.toggle("flipped", s)), o.className = r.className
                        })), this.options.tooltip) {
                        const e = this.options.tooltipNumber(n.diff(i, "day") + 1);
                        if (e > 0) {
                            const i = new Intl.PluralRules(this.picker.options.lang).select(e),
                                n = `${e} ${this.options.locale[i]}`;
                            this.showTooltip(t, n)
                        } else this.hideTooltip()
                    }
                }
            }
        }
        onMouseLeave(t) {
            if (this.isContainer(t.target) && this.options.repick) {
                const t = this.getStartDate(),
                    e = this.getEndDate();
                t && e && (this.picker.datePicked.length = 0, this.picker.renderAll())
            }
        }
        onClickCalendarDay(t) {
            if (this.picker.isCalendarDay(t)) {
                2 === this.picker.datePicked.length && (this.picker.datePicked.length = 0);
                const i = new e(t.dataset.time);
                if (this.picker.datePicked[this.picker.datePicked.length] = i, 2 === this.picker.datePicked.length && this.picker.datePicked[0].isAfter(this.picker.datePicked[1])) {
                    const t = this.picker.datePicked[1].clone();
                    this.picker.datePicked[1] = this.picker.datePicked[0].clone(), this.picker.datePicked[0] = t.clone()
                }
                1 !== this.picker.datePicked.length && this.picker.options.autoApply || this.picker.trigger("preselect", {
                    start: this.picker.datePicked[0] instanceof Date ? this.picker.datePicked[0].clone() : null,
                    end: this.picker.datePicked[1] instanceof Date ? this.picker.datePicked[1].clone() : null
                }), 1 === this.picker.datePicked.length && (!this.options.strict && this.picker.options.autoApply && (this.picker.options.element === this.triggerElement && this.setStartDate(this.picker.datePicked[0]), this.options.elementEnd === this.triggerElement && this.setEndDate(this.picker.datePicked[0]), this.picker.trigger("select", {
                    start: this.picker.getStartDate(),
                    end: this.picker.getEndDate()
                })), this.picker.renderAll()), 2 === this.picker.datePicked.length && (this.picker.options.autoApply ? (this.setDateRange(this.picker.datePicked[0], this.picker.datePicked[1]), this.picker.trigger("select", {
                    start: this.picker.getStartDate(),
                    end: this.picker.getEndDate()
                }), this.picker.hide()) : (this.hideTooltip(), this.picker.renderAll()))
            }
        }
        onClickApplyButton(t) {
            this.picker.isApplyButton(t) && (1 !== this.picker.datePicked.length || this.options.strict || (this.picker.options.element === this.triggerElement && (this.options.endDate = null, this.setStartDate(this.picker.datePicked[0])), this.options.elementEnd === this.triggerElement && (this.options.startDate = null, this.setEndDate(this.picker.datePicked[0]))), 2 === this.picker.datePicked.length && this.setDateRange(this.picker.datePicked[0], this.picker.datePicked[1]), this.picker.trigger("select", {
                start: this.picker.getStartDate(),
                end: this.picker.getEndDate()
            }), this.picker.hide())
        }
        showTooltip(t, e) {
            this.tooltipElement.style.visibility = "visible", this.tooltipElement.innerHTML = e;
            const i = this.picker.ui.container.getBoundingClientRect(),
                n = this.tooltipElement.getBoundingClientRect(),
                s = t.getBoundingClientRect();
            let o = s.top,
                a = s.left;
            o -= i.top, a -= i.left, o -= n.height, a -= n.width / 2, a += s.width / 2, this.tooltipElement.style.top = `${o}px`, this.tooltipElement.style.left = `${a}px`
        }
        hideTooltip() {
            this.tooltipElement.style.visibility = "hidden"
        }
        checkIntlPluralLocales() {
            if (!this.options.tooltip) return;
            const t = [...new Set([new Intl.PluralRules(this.picker.options.lang).select(0), new Intl.PluralRules(this.picker.options.lang).select(1), new Intl.PluralRules(this.picker.options.lang).select(2), new Intl.PluralRules(this.picker.options.lang).select(6), new Intl.PluralRules(this.picker.options.lang).select(18)])],
                e = Object.keys(this.options.locale);
            t.every((t => e.includes(t))) || console.warn(`${this.getName()}: provide locales (${t.join(", ")}) for correct tooltip text.`)
        }
        initializeRepick() {
            if (!this.options.repick) return;
            const t = this.getStartDate(),
                e = this.getEndDate();
            e && this.triggerElement === this.picker.options.element && (this.picker.datePicked[0] = e), t && this.triggerElement === this.options.elementEnd && (this.picker.datePicked[0] = t)
        }
        isContainer(t) {
            return t === this.picker.ui.container
        }
    }, t.TimePlugin = class extends a {
        options = {
            native: !1,
            seconds: !1,
            stepHours: 1,
            stepMinutes: 5,
            stepSeconds: 5,
            format12: !1
        };
        rangePlugin;
        timePicked = {
            input: null,
            start: null,
            end: null
        };
        timePrePicked = {
            input: null,
            start: null,
            end: null
        };
        binds = {
            getDate: this.getDate.bind(this),
            getStartDate: this.getStartDate.bind(this),
            getEndDate: this.getEndDate.bind(this),
            onView: this.onView.bind(this),
            onInput: this.onInput.bind(this),
            onChange: this.onChange.bind(this),
            onClick: this.onClick.bind(this),
            setTime: this.setTime.bind(this),
            setStartTime: this.setStartTime.bind(this),
            setEndTime: this.setEndTime.bind(this)
        };
        getName() {
            return "TimePlugin"
        }
        onAttach() {
            this.binds._getDate = this.picker.getDate, this.binds._getStartDate = this.picker.getStartDate, this.binds._getEndDate = this.picker.getEndDate, Object.defineProperties(this.picker, {
                getDate: {
                    configurable: !0,
                    value: this.binds.getDate
                },
                getStartDate: {
                    configurable: !0,
                    value: this.binds.getStartDate
                },
                getEndDate: {
                    configurable: !0,
                    value: this.binds.getEndDate
                },
                setTime: {
                    configurable: !0,
                    value: this.binds.setTime
                },
                setStartTime: {
                    configurable: !0,
                    value: this.binds.setStartTime
                },
                setEndTime: {
                    configurable: !0,
                    value: this.binds.setEndTime
                }
            }), this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin"), this.parseValues(), this.picker.on("view", this.binds.onView), this.picker.on("input", this.binds.onInput), this.picker.on("change", this.binds.onChange), this.picker.on("click", this.binds.onClick)
        }
        onDetach() {
            delete this.picker.setTime, delete this.picker.setStartTime, delete this.picker.setEndTime, Object.defineProperties(this.picker, {
                getDate: {
                    configurable: !0,
                    value: this.binds._getDate
                },
                getStartDate: {
                    configurable: !0,
                    value: this.binds._getStartDate
                },
                getEndDate: {
                    configurable: !0,
                    value: this.binds._getEndDate
                }
            }), this.picker.off("view", this.binds.onView), this.picker.off("input", this.binds.onInput), this.picker.off("change", this.binds.onChange), this.picker.off("click", this.binds.onClick)
        }
        onView(t) {
            const {
                view: e,
                target: i
            } = t.detail;
            if ("Main" === e) {
                this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin");
                const t = document.createElement("div");
                if (t.className = "time-plugin-container", this.rangePlugin) {
                    const e = this.getStartInput();
                    t.appendChild(e), this.picker.trigger("view", {
                        view: "TimePluginInput",
                        target: e
                    });
                    const i = this.getEndInput();
                    t.appendChild(i), this.picker.trigger("view", {
                        view: "TimePluginInput",
                        target: i
                    })
                } else {
                    const e = this.getSingleInput();
                    t.appendChild(e), this.picker.trigger("view", {
                        view: "TimePluginInput",
                        target: e
                    })
                }
                i.appendChild(t), this.picker.trigger("view", {
                    view: "TimePluginContainer",
                    target: t
                })
            }
        }
        onInput(t) {
            const i = t.target;
            if (i instanceof HTMLInputElement && i.classList.contains("time-plugin-input")) {
                const t = this.timePicked[i.name] || new e,
                    [n, s] = i.value.split(":");
                t.setHours(Number(n) || 0, Number(s) || 0, 0, 0), this.picker.options.autoApply ? (this.timePicked[i.name] = t, this.picker.updateValues()) : this.timePrePicked[i.name] = t
            }
        }
        onChange(t) {
            const i = t.target;
            if (i instanceof HTMLSelectElement && i.classList.contains("time-plugin-custom-input")) {
                const t = /(\w+)\[(\w+)\]/,
                    [, n, s] = i.name.match(t),
                    o = Number(i.value);
                let a = new e;
                switch (!this.picker.options.autoApply && this.timePrePicked[n] instanceof Date ? a = this.timePrePicked[n].clone() : this.timePicked[n] instanceof Date && (a = this.timePicked[n].clone()), s) {
                    case "HH":
                        if (this.options.format12) {
                            const t = i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[period]"]`).value,
                                e = this.handleFormat12(t, a, o);
                            a.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0)
                        } else a.setHours(o, a.getMinutes(), a.getSeconds(), 0);
                        break;
                    case "mm":
                        a.setHours(a.getHours(), o, a.getSeconds(), 0);
                        break;
                    case "ss":
                        a.setHours(a.getHours(), a.getMinutes(), o, 0);
                        break;
                    case "period":
                        if (this.options.format12) {
                            const t = i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[HH]"]`).value,
                                e = this.handleFormat12(i.value, a, Number(t));
                            a.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0)
                        }
                }
                if (this.picker.options.autoApply) this.timePicked[n] = a, this.picker.updateValues();
                else {
                    this.timePrePicked[n] = a;
                    const t = this.picker.ui.container.querySelector(".apply-button");
                    if (this.rangePlugin) {
                        const e = this.rangePlugin.options,
                            i = this.picker.datePicked,
                            n = e.strict && 2 === i.length || !e.strict && i.length > 0 || !i.length && e.strict && e.startDate instanceof Date && e.endDate instanceof Date || !i.length && !e.strict && (e.startDate instanceof Date || e.endDate instanceof Date);
                        t.disabled = !n
                    } else this.picker.datePicked.length && (t.disabled = !1)
                }
            }
        }
        onClick(t) {
            const e = t.target;
            if (e instanceof HTMLElement) {
                const t = e.closest(".unit");
                if (!(t instanceof HTMLElement)) return;
                this.picker.isApplyButton(t) && (Object.keys(this.timePicked).forEach((t => {
                    this.timePrePicked[t] instanceof Date && (this.timePicked[t] = this.timePrePicked[t].clone())
                })), this.picker.updateValues(), this.timePrePicked = {
                    input: null,
                    start: null,
                    end: null
                }), this.picker.isCancelButton(t) && (this.timePrePicked = {
                    input: null,
                    start: null,
                    end: null
                }, this.picker.renderAll())
            }
        }
        setTime(t) {
            const e = this.handleTimeString(t);
            this.timePicked.input = e.clone(), this.picker.renderAll(), this.picker.updateValues()
        }
        setStartTime(t) {
            const e = this.handleTimeString(t);
            this.timePicked.start = e.clone(), this.picker.renderAll(), this.picker.updateValues()
        }
        setEndTime(t) {
            const e = this.handleTimeString(t);
            this.timePicked.end = e.clone(), this.picker.renderAll(), this.picker.updateValues()
        }
        handleTimeString(t) {
            const i = new e,
                [n, s, o] = t.split(":").map((t => Number(t))),
                a = n && !Number.isNaN(n) ? n : 0,
                r = s && !Number.isNaN(s) ? s : 0,
                c = o && !Number.isNaN(o) ? o : 0;
            return i.setHours(a, r, c, 0), i
        }
        getDate() {
            if (this.picker.options.date instanceof Date) {
                const t = new e(this.picker.options.date, this.picker.options.format);
                if (this.timePicked.input instanceof Date) {
                    const e = this.timePicked.input;
                    t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0)
                }
                return t
            }
            return null
        }
        getStartDate() {
            if (this.rangePlugin.options.startDate instanceof Date) {
                const t = new e(this.rangePlugin.options.startDate, this.picker.options.format);
                if (this.timePicked.start instanceof Date) {
                    const e = this.timePicked.start;
                    t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0)
                }
                return t
            }
            return null
        }
        getEndDate() {
            if (this.rangePlugin.options.endDate instanceof Date) {
                const t = new e(this.rangePlugin.options.endDate, this.picker.options.format);
                if (this.timePicked.end instanceof Date) {
                    const e = this.timePicked.end;
                    t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0)
                }
                return t
            }
            return null
        }
        getSingleInput() {
            return this.options.native ? this.getNativeInput("input") : this.getCustomInput("input")
        }
        getStartInput() {
            return this.options.native ? this.getNativeInput("start") : this.getCustomInput("start")
        }
        getEndInput() {
            return this.options.native ? this.getNativeInput("end") : this.getCustomInput("end")
        }
        getNativeInput(t) {
            const e = document.createElement("input");
            e.type = "time", e.name = t, e.className = "time-plugin-input unit";
            const i = this.timePicked[t];
            if (i) {
                const t = `0${i.getHours()}`.slice(-2),
                    n = `0${i.getMinutes()}`.slice(-2);
                e.value = `${t}:${n}`
            }
            return e
        }
        getCustomInput(t) {
            const e = document.createElement("div");
            e.className = "time-plugin-custom-block";
            const i = document.createElement("select");
            i.className = "time-plugin-custom-input unit", i.name = `${t}[HH]`;
            const n = this.options.format12 ? 1 : 0,
                s = this.options.format12 ? 13 : 24;
            let o = null;
            !this.picker.options.autoApply && this.timePrePicked[t] instanceof Date ? o = this.timePrePicked[t].clone() : this.timePicked[t] instanceof Date && (o = this.timePicked[t].clone());
            for (let t = n; t < s; t += this.options.stepHours) {
                const e = document.createElement("option");
                e.value = String(t), e.text = String(t), o && (this.options.format12 ? (o.getHours() % 12 ? o.getHours() % 12 : 12) === t && (e.selected = !0) : o.getHours() === t && (e.selected = !0)), i.appendChild(e)
            }
            e.appendChild(i);
            const a = document.createElement("select");
            a.className = "time-plugin-custom-input unit", a.name = `${t}[mm]`;
            for (let t = 0; t < 60; t += this.options.stepMinutes) {
                const e = document.createElement("option");
                e.value = `0${String(t)}`.slice(-2), e.text = `0${String(t)}`.slice(-2), o && o.getMinutes() === t && (e.selected = !0), a.appendChild(e)
            }
            if (e.appendChild(a), this.options.seconds) {
                const i = document.createElement("select");
                i.className = "time-plugin-custom-input unit", i.name = `${t}[ss]`;
                const n = 60;
                for (let t = 0; t < n; t += this.options.stepSeconds) {
                    const e = document.createElement("option");
                    e.value = `0${String(t)}`.slice(-2), e.text = `0${String(t)}`.slice(-2), o && o.getSeconds() === t && (e.selected = !0), i.appendChild(e)
                }
                e.appendChild(i)
            }
            if (this.options.format12) {
                const i = document.createElement("select");
                i.className = "time-plugin-custom-input unit", i.name = `${t}[period]`, ["AM", "PM"].forEach((t => {
                    const e = document.createElement("option");
                    e.value = t, e.text = t, o && "PM" === t && o.getHours() >= 12 && (e.selected = !0), i.appendChild(e)
                })), e.appendChild(i)
            }
            return e
        }
        handleFormat12(t, e, i) {
            const n = e.clone();
            switch (t) {
                case "AM":
                    12 === i ? n.setHours(0, n.getMinutes(), n.getSeconds(), 0) : n.setHours(i, n.getMinutes(), n.getSeconds(), 0);
                    break;
                case "PM":
                    12 !== i ? n.setHours(i + 12, n.getMinutes(), n.getSeconds(), 0) : n.setHours(i, n.getMinutes(), n.getSeconds(), 0)
            }
            return n
        }
        parseValues() {
            if (this.rangePlugin) {
                if (this.rangePlugin.options.strict) {
                    if (this.rangePlugin.options.startDate && this.rangePlugin.options.endDate) {
                        const t = new e(this.rangePlugin.options.startDate, this.picker.options.format),
                            i = new e(this.rangePlugin.options.endDate, this.picker.options.format);
                        this.timePicked.start = t.clone(), this.timePicked.end = i.clone()
                    }
                } else {
                    if (this.rangePlugin.options.startDate) {
                        const t = new e(this.rangePlugin.options.startDate, this.picker.options.format);
                        this.timePicked.start = t.clone()
                    }
                    if (this.rangePlugin.options.endDate) {
                        const t = new e(this.rangePlugin.options.endDate, this.picker.options.format);
                        this.timePicked.end = t.clone()
                    }
                }
                if (this.rangePlugin.options.elementEnd)
                    if (this.rangePlugin.options.strict) {
                        if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length && this.rangePlugin.options.elementEnd instanceof HTMLInputElement && this.rangePlugin.options.elementEnd.value.length) {
                            const t = new e(this.picker.options.element.value, this.picker.options.format),
                                i = new e(this.rangePlugin.options.elementEnd.value, this.picker.options.format);
                            this.timePicked.start = t.clone(), this.timePicked.end = i.clone()
                        }
                    } else {
                        if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                            const t = new e(this.picker.options.element.value, this.picker.options.format);
                            this.timePicked.start = t.clone()
                        }
                        if (this.rangePlugin.options.elementEnd instanceof HTMLInputElement && this.rangePlugin.options.elementEnd.value.length) {
                            const t = new e(this.rangePlugin.options.elementEnd.value, this.picker.options.format);
                            this.timePicked.start = t.clone()
                        }
                    }
                else if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                    const [t, i] = this.picker.options.element.value.split(this.rangePlugin.options.delimiter);
                    if (this.rangePlugin.options.strict) {
                        if (t && i) {
                            const n = new e(t, this.picker.options.format),
                                s = new e(i, this.picker.options.format);
                            this.timePicked.start = n.clone(), this.timePicked.end = s.clone()
                        }
                    } else {
                        if (t) {
                            const i = new e(t, this.picker.options.format);
                            this.timePicked.start = i.clone()
                        }
                        if (i) {
                            const t = new e(i, this.picker.options.format);
                            this.timePicked.start = t.clone()
                        }
                    }
                }
            } else {
                if (this.picker.options.date) {
                    const t = new e(this.picker.options.date, this.picker.options.format);
                    this.timePicked.input = t.clone()
                }
                if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                    const t = new e(this.picker.options.element.value, this.picker.options.format);
                    this.timePicked.input = t.clone()
                }
            }
        }
    }, t.create = s, t.easepick = o, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));

/*  Fullscreen Lightbox - https://fslightbox.com/ */
! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var o in n)("object" == typeof exports ? exports : e)[o] = n[o]
    }
}(window, (function() {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) n.d(o, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        n.r(t);
        var o, r = "fslightbox-",
            i = "".concat(r, "styles"),
            s = "".concat(r, "cursor-grabbing"),
            c = "".concat(r, "full-dimension"),
            a = "".concat(r, "flex-centered"),
            l = "".concat(r, "open"),
            u = "".concat(r, "transform-transition"),
            d = "".concat(r, "absoluted"),
            p = "".concat(r, "slide-btn"),
            f = "".concat(p, "-container"),
            h = "".concat(r, "fade-in"),
            m = "".concat(r, "fade-out"),
            g = h + "-strong",
            v = m + "-strong",
            b = "".concat(r, "opacity-"),
            x = "".concat(b, "1"),
            y = "".concat(r, "source");

        function S(e) {
            return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        "object" === ("undefined" == typeof document ? "undefined" : S(document)) && ((o = document.createElement("style")).className = i, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o));

        function w(e) {
            var t, n = e.props,
                o = 0,
                r = {};
            this.getSourceTypeFromLocalStorageByUrl = function(e) {
                return t[e] ? t[e] : i(e)
            }, this.handleReceivedSourceTypeForUrl = function(e, n) {
                !1 === r[n] && (o--, "invalid" !== e ? r[n] = e : delete r[n], 0 === o && (! function(e, t) {
                    for (var n in t) e[n] = t[n]
                }(t, r), localStorage.setItem("fslightbox-types", JSON.stringify(t))))
            };
            var i = function(e) {
                o++, r[e] = !1
            };
            n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function() {}, this.handleReceivedSourceTypeForUrl = function() {}) : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t = {}, this.getSourceTypeFromLocalStorageByUrl = i)
        }

        function L(e, t, n, o) {
            var r = e.data,
                i = e.elements.sources,
                s = n / o,
                c = 0;
            this.adjustSize = function() {
                if ((c = r.maxSourceWidth / s) < r.maxSourceHeight) return n < r.maxSourceWidth && (c = o), a();
                c = o > r.maxSourceHeight ? r.maxSourceHeight : o, a()
            };
            var a = function() {
                i[t].style.width = c * s + "px", i[t].style.height = c + "px"
            }
        }

        function C(e, t) {
            var n = this,
                o = e.collections.sourceSizers,
                r = e.elements,
                i = r.sourceAnimationWrappers,
                s = r.sourceMainWrappers,
                c = r.sources,
                a = e.resolve;

            function l(e, n) {
                o[t] = a(L, [t, e, n]), o[t].adjustSize()
            }
            this.runActions = function(e, o) {
                c[t].classList.add(x), i[t].classList.add(g), s[t].removeChild(s[t].firstChild), l(e, o), n.runActions = l
            }
        }

        function F(e, t) {
            var n, o = this,
                r = e.elements.sources,
                i = e.props,
                s = (0, e.resolve)(C, [t]);
            this.handleImageLoad = function(e) {
                var t = e.target,
                    n = t.naturalWidth,
                    o = t.naturalHeight;
                s.runActions(n, o)
            }, this.handleVideoLoad = function(e) {
                var t = e.target,
                    o = t.videoWidth,
                    r = t.videoHeight;
                n = !0, s.runActions(o, r)
            }, this.handleNotMetaDatedVideoLoad = function() {
                n || o.handleYoutubeLoad()
            }, this.handleYoutubeLoad = function() {
                var e = 1920,
                    t = 1080;
                i.maxYoutubeDimensions && (e = i.maxYoutubeDimensions.width, t = i.maxYoutubeDimensions.height), s.runActions(e, t)
            }, this.handleCustomLoad = function() {
                setTimeout((function() {
                    var e = r[t];
                    s.runActions(e.offsetWidth, e.offsetHeight)
                }))
            }
        }

        function A(e, t, n) {
            var o = e.elements.sources,
                r = e.props.customClasses,
                i = r[t] ? r[t] : "";
            o[t].className = n + " " + i
        }

        function I(e, t) {
            var n = e.elements.sources,
                o = e.props.customAttributes;
            for (var r in o[t]) n[t].setAttribute(r, o[t][r])
        }

        function T(e, t) {
            var n = e.collections.sourceLoadHandlers,
                o = e.elements,
                r = o.sources,
                i = o.sourceAnimationWrappers,
                s = e.props.sources;
            r[t] = document.createElement("img"), A(e, t, y), r[t].src = s[t], r[t].onload = n[t].handleImageLoad, I(e, t), i[t].appendChild(r[t])
        }

        function E(e, t) {
            var n = e.collections.sourceLoadHandlers,
                o = e.elements,
                r = o.sources,
                i = o.sourceAnimationWrappers,
                s = e.props,
                c = s.sources,
                a = s.videosPosters;
            r[t] = document.createElement("video"), A(e, t, y), r[t].src = c[t], r[t].onloadedmetadata = function(e) {
                n[t].handleVideoLoad(e)
            }, r[t].controls = !0, I(e, t), a[t] && (r[t].poster = a[t]);
            var l = document.createElement("source");
            l.src = c[t], r[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), i[t].appendChild(r[t])
        }

        function N(e, t) {
            var n = e.collections.sourceLoadHandlers,
                o = e.elements,
                i = o.sources,
                s = o.sourceAnimationWrappers,
                c = e.props.sources;
            i[t] = document.createElement("iframe"), A(e, t, "".concat(y, " ").concat(r, "youtube-iframe")), i[t].src = "https://www.youtube.com/embed/".concat(c[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1"), i[t].allowFullscreen = !0, I(e, t), s[t].appendChild(i[t]), n[t].handleYoutubeLoad()
        }

        function W(e, t) {
            var n = e.collections.sourceLoadHandlers,
                o = e.elements,
                r = o.sources,
                i = o.sourceAnimationWrappers,
                s = e.props.sources;
            r[t] = s[t], A(e, t, "".concat(r[t].className, " ").concat(y)), i[t].appendChild(r[t]), n[t].handleCustomLoad()
        }

        function z(e, t) {
            var n = e.elements,
                o = n.sources,
                i = n.sourceAnimationWrappers,
                s = n.sourceMainWrappers;
            e.props.sources;
            o[t] = document.createElement("div"), o[t].className = "".concat(r, "invalid-file-wrapper ").concat(a), o[t].innerHTML = "Invalid source", i[t].classList.add(g), i[t].appendChild(o[t]), s[t].removeChild(s[t].firstChild)
        }

        function M(e) {
            var t = e.collections,
                n = t.sourceLoadHandlers,
                o = t.sourcesRenderFunctions,
                r = e.core.sourceDisplayFacade,
                i = e.resolve;
            this.runActionsForSourceTypeAndIndex = function(t, s) {
                var c;
                switch ("invalid" !== t && (n[s] = i(F, [s])), t) {
                    case "image":
                        c = T;
                        break;
                    case "video":
                        c = E;
                        break;
                    case "youtube":
                        c = N;
                        break;
                    case "custom":
                        c = W;
                        break;
                    default:
                        c = z
                }
                o[s] = function() {
                    return c(e, s)
                }, r.displaySourcesWhichShouldBeDisplayed()
            }
        }

        function P() {
            var e, t, n, o = {
                isUrlYoutubeOne: function(e) {
                    var t = document.createElement("a");
                    return t.href = e, "www.youtube.com" === t.hostname
                },
                getTypeFromResponseContentType: function(e) {
                    return e.slice(0, e.indexOf("/"))
                }
            };

            function r() {
                if (4 !== n.readyState) {
                    if (2 === n.readyState) {
                        var e;
                        switch (o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))) {
                            case "image":
                                e = "image";
                                break;
                            case "video":
                                e = "video";
                                break;
                            default:
                                e = "invalid"
                        }
                        n.onreadystatechange = null, n.abort(), t(e)
                    }
                } else t("invalid")
            }
            this.setUrlToCheck = function(t) {
                e = t
            }, this.getSourceType = function(i) {
                if (o.isUrlYoutubeOne(e)) return i("youtube");
                t = i, (n = new XMLHttpRequest).onreadystatechange = r, n.open("GET", e, !0), n.send()
            }
        }

        function H(e, t, n) {
            var o = e.props,
                r = o.types,
                i = o.type,
                s = o.sources,
                c = e.resolve;
            this.getTypeSetByClientForIndex = function(e) {
                var t;
                return r && r[e] ? t = r[e] : i && (t = i), t
            }, this.retrieveTypeWithXhrForIndex = function(e) {
                var o = c(P);
                o.setUrlToCheck(s[e]), o.getSourceType((function(o) {
                    t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e)
                }))
            }
        }

        function k(e, t) {
            var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
                o = e.elements,
                r = o.sourceWrappersContainer,
                i = o.sourceMainWrappers;
            i[t] = document.createElement("div"), i[t].className = "".concat(d, " ").concat(c, " ").concat(a), i[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
            var s = i[t].firstChild;
            n[t] = function() {
                    i[t].contains(s) && i[t].removeChild(s)
                }, r.appendChild(i[t]),
                function(e, t) {
                    var n = e.elements,
                        o = n.sourceMainWrappers,
                        r = n.sourceAnimationWrappers;
                    r[t] = document.createElement("div"), o[t].appendChild(r[t])
                }(e, t)
        }

        function O(e, t, n, o) {
            var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            i.setAttributeNS(null, "width", t), i.setAttributeNS(null, "height", t), i.setAttributeNS(null, "viewBox", n);
            var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return s.setAttributeNS(null, "class", "".concat(r, "svg-path")), s.setAttributeNS(null, "d", o), i.appendChild(s), e.appendChild(i), i
        }

        function R(e, t) {
            var n = document.createElement("div");
            return n.className = "".concat(r, "toolbar-button ").concat(a), n.title = t, e.appendChild(n), n
        }

        function D(e, t) {
            var n = document.createElement("div");
            n.className = "".concat(r, "toolbar"), t.appendChild(n),
                function(e, t) {
                    var n = e.componentsServices,
                        o = e.core.fullscreenToggler,
                        r = e.data,
                        i = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                        s = R(t);
                    s.title = "Enter fullscreen";
                    var c = O(s, "20px", "0 0 18 18", i);
                    n.enterFullscreen = function() {
                        r.isFullscreenOpen = !0, s.title = "Exit fullscreen", c.setAttributeNS(null, "width", "24px"), c.setAttributeNS(null, "height", "24px"), c.setAttributeNS(null, "viewBox", "0 0 950 1024"), c.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")
                    }, n.exitFullscreen = function() {
                        r.isFullscreenOpen = !1, s.title = "Enter fullscreen", c.setAttributeNS(null, "width", "20px"), c.setAttributeNS(null, "height", "20px"), c.setAttributeNS(null, "viewBox", "0 0 18 18"), c.firstChild.setAttributeNS(null, "d", i)
                    }, s.onclick = function() {
                        r.isFullscreenOpen ? o.exitFullscreen() : o.enterFullscreen()
                    }
                }(e, n),
                function(e, t) {
                    var n = R(t, "Close");
                    n.onclick = e.core.lightboxCloser.closeLightbox, O(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")
                }(e, n)
        }

        function j(e) {
            var t = e.props.sources,
                n = e.elements.container,
                o = document.createElement("div");
            o.className = "".concat(r, "nav"), n.appendChild(o), D(e, o), t.length > 1 && function(e, t) {
                var n = e.componentsServices,
                    o = e.props.sources,
                    i = (e.stageIndexes, document.createElement("div"));
                i.className = "".concat(r, "slide-number-container");
                var s = document.createElement("div");
                s.className = a;
                var c = document.createElement("span");
                n.setSlideNumber = function(e) {
                    return c.innerHTML = e
                };
                var l = document.createElement("span");
                l.className = "".concat(r, "slash");
                var u = document.createElement("div");
                u.innerHTML = o.length, i.appendChild(s), s.appendChild(c), s.appendChild(l), s.appendChild(u), t.appendChild(i), setTimeout((function() {
                    s.offsetWidth > 55 && (i.style.justifyContent = "flex-start")
                }))
            }(e, o)
        }

        function X(e, t) {
            var n = this,
                o = e.elements.sourceMainWrappers,
                r = e.props,
                i = 0;
            this.byValue = function(e) {
                return i = e, n
            }, this.negative = function() {
                s(-c())
            }, this.zero = function() {
                s(0)
            }, this.positive = function() {
                s(c())
            };
            var s = function(e) {
                    o[t].style.transform = "translateX(".concat(e + i, "px)"), i = 0
                },
                c = function() {
                    return (1 + r.slideDistance) * innerWidth
                }
        }

        function B(e, t, n, o) {
            var r = e.elements.container,
                i = n.charAt(0).toUpperCase() + n.slice(1),
                s = document.createElement("div");
            s.className = "".concat(f, " ").concat(f, "-").concat(n), s.title = "".concat(i, " slide"), s.onclick = t,
                function(e, t) {
                    var n = document.createElement("div");
                    n.className = "".concat(p, " ").concat(a), O(n, "20px", "0 0 20 20", t), e.appendChild(n)
                }(s, o), r.appendChild(s)
        }

        function U(e, t) {
            var n = e.classList;
            n.contains(t) && n.remove(t)
        }

        function V(e) {
            var t = this,
                n = e.core,
                o = n.eventsDispatcher,
                r = n.fullscreenToggler,
                i = n.globalEventsController,
                s = n.scrollbarRecompensor,
                c = e.data,
                a = e.elements,
                u = e.props,
                d = e.sourcePointerProps;
            this.isLightboxFadingOut = !1, this.runActions = function() {
                t.isLightboxFadingOut = !0, a.container.classList.add(v), i.removeListeners(), u.exitFullscreenOnClose && c.isFullscreenOpen && r.exitFullscreen(), setTimeout((function() {
                    t.isLightboxFadingOut = !1, d.isPointering = !1, a.container.classList.remove(v), document.documentElement.classList.remove(l), s.removeRecompense(), document.body.removeChild(a.container), o.dispatch("onClose")
                }), 270)
            }
        }

        function Y(e) {
            var t, n, o, r = e.collections.sourceMainWrappersTransformers,
                i = e.componentsServices,
                s = e.core,
                c = s.classFacade,
                a = s.slideIndexChanger,
                l = s.sourceDisplayFacade,
                d = s.stageManager,
                p = e.elements.sourceAnimationWrappers,
                f = e.stageIndexes,
                v = (t = function() {
                    c.removeFromEachElementClassIfContains("sourceAnimationWrappers", m)
                }, n = 300, o = [], function() {
                    o.push(!0), setTimeout((function() {
                        o.pop(), o.length || t()
                    }), n)
                });
            a.changeTo = function(e) {
                f.current = e, d.updateStageIndexes(), i.setSlideNumber(e + 1), l.displaySourcesWhichShouldBeDisplayed()
            }, a.jumpTo = function(e) {
                var t = f.current;
                a.changeTo(e), c.removeFromEachElementClassIfContains("sourceMainWrappers", u), U(p[t], g), U(p[t], h), p[t].classList.add(m), U(p[e], g), U(p[e], m), p[e].classList.add(h), v(), r[e].zero(), setTimeout((function() {
                    t !== f.current && r[t].negative()
                }), 270)
            }
        }

        function _(e) {
            var t = e.core,
                n = t.lightboxCloser,
                o = t.fullscreenToggler,
                r = t.slideChangeFacade;
            this.listener = function(e) {
                switch (e.key) {
                    case "Escape":
                        n.closeLightbox();
                        break;
                    case "ArrowLeft":
                        r.changeToPrevious();
                        break;
                    case "ArrowRight":
                        r.changeToNext();
                        break;
                    case "F11":
                        e.preventDefault(), o.enterFullscreen()
                }
            }
        }

        function q(e) {
            var t = e.collections.sourceMainWrappersTransformers,
                n = e.elements,
                o = e.sourcePointerProps,
                r = e.stageIndexes;

            function i(e, n) {
                t[e].byValue(o.swipedX)[n]()
            }
            this.runActionsForEvent = function(e) {
                var t, c, a;
                n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer), t = n.container, c = s, (a = t.classList).contains(c) || a.add(c), o.swipedX = e.screenX - o.downScreenX, i(r.current, "zero"), void 0 !== r.previous && o.swipedX > 0 ? i(r.previous, "negative") : void 0 !== r.next && o.swipedX < 0 && i(r.next, "positive")
            }
        }

        function J(e) {
            var t = e.props.sources,
                n = e.resolve,
                o = e.sourcePointerProps,
                r = n(q);
            1 === t.length ? this.listener = function() {
                o.swipedX = 1
            } : this.listener = function(e) {
                o.isPointering && r.runActionsForEvent(e)
            }
        }

        function G(e) {
            var t = e.collections.sourceMainWrappersTransformers,
                n = e.core.slideIndexChanger,
                o = e.elements.sourceMainWrappers,
                r = e.stageIndexes;
            this.runPositiveSwipedXActions = function() {
                void 0 === r.previous || (i("positive"), n.changeTo(r.previous)), i("zero")
            }, this.runNegativeSwipedXActions = function() {
                void 0 === r.next || (i("negative"), n.changeTo(r.next)), i("zero")
            };
            var i = function(e) {
                o[r.current].classList.add(u), t[r.current][e]()
            }
        }

        function $(e, t) {
            e.contains(t) && e.removeChild(t)
        }

        function K(e) {
            var t = e.core.lightboxCloser,
                n = e.elements,
                o = e.resolve,
                r = e.sourcePointerProps,
                i = o(G);
            this.runNoSwipeActions = function() {
                $(n.container, n.slideSwipingHoverer), r.isSourceDownEventTarget || t.closeLightbox(), r.isPointering = !1
            }, this.runActions = function() {
                r.swipedX > 0 ? i.runPositiveSwipedXActions() : i.runNegativeSwipedXActions(), $(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), r.isPointering = !1
            }
        }

        function Q(e) {
            var t = e.resolve,
                n = e.sourcePointerProps,
                o = t(K);
            this.listener = function() {
                n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActions())
            }
        }

        function Z(e) {
            var t, n, o;
            n = (t = e).core.classFacade, o = t.elements, n.removeFromEachElementClassIfContains = function(e, t) {
                    for (var n = 0; n < o[e].length; n++) U(o[e][n], t)
                },
                function(e) {
                    var t = e.core.eventsDispatcher,
                        n = e.props;
                    t.dispatch = function(e) {
                        n[e] && n[e]()
                    }
                }(e),
                function(e) {
                    var t = e.componentsServices,
                        n = e.core.fullscreenToggler;
                    n.enterFullscreen = function() {
                        t.enterFullscreen();
                        var e = document.documentElement;
                        e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                    }, n.exitFullscreen = function() {
                        t.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                    }
                }(e),
                function(e) {
                    var t = e.core,
                        n = t.globalEventsController,
                        o = t.windowResizeActioner,
                        r = e.resolve,
                        i = r(_),
                        s = r(J),
                        c = r(Q);
                    n.attachListeners = function() {
                        document.addEventListener("pointermove", s.listener), document.addEventListener("pointerup", c.listener), addEventListener("resize", o.runActions), document.addEventListener("keydown", i.listener)
                    }, n.removeListeners = function() {
                        document.removeEventListener("pointermove", s.listener), document.removeEventListener("pointerup", c.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", i.listener)
                    }
                }(e),
                function(e) {
                    var t = e.core.lightboxCloser,
                        n = (0, e.resolve)(V);
                    t.closeLightbox = function() {
                        n.isLightboxFadingOut || n.runActions()
                    }
                }(e), ne(e),
                function(e) {
                    var t = e.data,
                        n = e.core.scrollbarRecompensor;

                    function o() {
                        document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px")
                    }
                    n.addRecompense = function() {
                        "complete" === document.readyState ? o() : addEventListener("load", (function() {
                            o(), n.addRecompense = o
                        }))
                    }, n.removeRecompense = function() {
                        document.body.style.removeProperty("margin-right")
                    }
                }(e),
                function(e) {
                    var t = e.core,
                        n = t.slideChangeFacade,
                        o = t.slideIndexChanger,
                        r = t.stageManager;
                    e.props.sources.length > 1 ? (n.changeToPrevious = function() {
                        o.jumpTo(r.getPreviousSlideIndex())
                    }, n.changeToNext = function() {
                        o.jumpTo(r.getNextSlideIndex())
                    }) : (n.changeToPrevious = function() {}, n.changeToNext = function() {})
                }(e), Y(e),
                function(e) {
                    var t = e.core,
                        n = t.classFacade,
                        o = t.sourcesPointerDown,
                        r = e.elements.sources,
                        i = e.sourcePointerProps,
                        s = e.stageIndexes;
                    o.listener = function(e) {
                        "VIDEO" !== e.target.tagName && e.preventDefault(), i.isPointering = !0, i.downScreenX = e.screenX, i.swipedX = 0;
                        var t = r[s.current];
                        t && t.contains(e.target) ? i.isSourceDownEventTarget = !0 : i.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains("sourceMainWrappers", u)
                    }
                }(e),
                function(e) {
                    var t = e.collections.sourcesRenderFunctions,
                        n = e.core.sourceDisplayFacade,
                        o = e.props,
                        r = e.stageIndexes;

                    function i(e) {
                        t[e] && (t[e](), delete t[e])
                    }
                    n.displaySourcesWhichShouldBeDisplayed = function() {
                        if (o.loadOnlyCurrentSource) i(r.current);
                        else
                            for (var e in r) i(r[e])
                    }
                }(e),
                function(e) {
                    var t = e.stageIndexes,
                        n = e.core.stageManager,
                        o = e.props.sources.length - 1;
                    n.getPreviousSlideIndex = function() {
                        return 0 === t.current ? o : t.current - 1
                    }, n.getNextSlideIndex = function() {
                        return t.current === o ? 0 : t.current + 1
                    }, n.updateStageIndexes = 0 === o ? function() {} : 1 === o ? function() {
                        0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next)
                    } : function() {
                        t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex()
                    }, n.isSourceInStage = o <= 2 ? function() {
                        return !0
                    } : function(e) {
                        var n = t.current;
                        if (0 === n && e === o || n === o && 0 === e) return !0;
                        var r = n - e;
                        return -1 === r || 0 === r || 1 === r
                    }
                }(e),
                function(e) {
                    var t = e.collections,
                        n = t.sourceMainWrappersTransformers,
                        o = t.sourceSizers,
                        r = e.core.windowResizeActioner,
                        i = e.data,
                        s = e.elements.sourceMainWrappers,
                        c = e.props,
                        a = e.stageIndexes;
                    r.runActions = function() {
                        innerWidth < 992 ? i.maxSourceWidth = innerWidth : i.maxSourceWidth = .9 * innerWidth, i.maxSourceHeight = .9 * innerHeight;
                        for (var e = 0; e < c.sources.length; e++) U(s[e], u), e !== a.current && n[e].negative(), o[e] && o[e].adjustSize()
                    }
                }(e)
        }

        function ee(e) {
            var t = e.props.disableLocalStorage;
            if (!t) {
                var n = localStorage.getItem("fslightbox-scrollbar-width");
                if (n) return n
            }
            var o = function() {
                    var e = document.createElement("div"),
                        t = e.style;
                    return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e
                }(),
                r = function() {
                    var e = document.createElement("div");
                    return e.style.width = "100%", e
                }();
            document.body.appendChild(o);
            var i = o.offsetWidth;
            o.appendChild(r);
            var s = r.offsetWidth;
            document.body.removeChild(o);
            var c = i - s;
            return t || localStorage.setItem("fslightbox-scrollbar-width", c.toString()), c
        }

        function te(e) {
            var t = e.core.eventsDispatcher,
                n = e.data,
                o = e.elements,
                i = e.props.sources;
            n.isInitialized = !0, n.scrollbarWidth = ee(e),
                function(e) {
                    for (var t = e.collections.sourceMainWrappersTransformers, n = e.props.sources, o = e.resolve, r = 0; r < n.length; r++) t[r] = o(X, [r])
                }(e), Z(e), o.container = document.createElement("div"), o.container.className = "".concat(r, "container ").concat(c, " ").concat(g),
                function(e) {
                    var t = e.elements;
                    t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(r, "slide-swiping-hoverer ").concat(c, " ").concat(d)
                }(e), j(e),
                function(e) {
                    var t = e.core.sourcesPointerDown,
                        n = e.elements,
                        o = e.props.sources,
                        r = document.createElement("div");
                    r.className = "".concat(d, " ").concat(c), n.container.appendChild(r), r.addEventListener("pointerdown", t.listener), n.sourceWrappersContainer = r;
                    for (var i = 0; i < o.length; i++) k(e, i)
                }(e), i.length > 1 && function(e) {
                    var t = e.core.slideChangeFacade;
                    B(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")
                }(e),
                function(e) {
                    for (var t = e.props.sources, n = e.resolve, o = n(w), r = n(M), i = n(H, [o, r]), s = 0; s < t.length; s++)
                        if ("string" == typeof t[s]) {
                            var c = i.getTypeSetByClientForIndex(s);
                            if (c) r.runActionsForSourceTypeAndIndex(c, s);
                            else {
                                var a = o.getSourceTypeFromLocalStorageByUrl(t[s]);
                                a ? r.runActionsForSourceTypeAndIndex(a, s) : i.retrieveTypeWithXhrForIndex(s)
                            }
                        } else r.runActionsForSourceTypeAndIndex("custom", s)
                }(e), t.dispatch("onInit")
        }

        function ne(e) {
            var t = e.collections.sourceMainWrappersTransformers,
                n = e.componentsServices,
                o = e.core,
                r = o.eventsDispatcher,
                i = o.lightboxOpener,
                s = o.globalEventsController,
                c = o.scrollbarRecompensor,
                a = o.sourceDisplayFacade,
                u = o.stageManager,
                d = o.windowResizeActioner,
                p = e.data,
                f = e.elements,
                h = e.stageIndexes;
            i.open = function() {
                var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                h.current = o, p.isInitialized ? r.dispatch("onShow") : te(e), u.updateStageIndexes(), a.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(o + 1), document.body.appendChild(f.container), document.documentElement.classList.add(l), c.addRecompense(), s.attachListeners(), d.runActions(), t[h.current].zero(), r.dispatch("onOpen")
            }
        }

        function oe(e, t, n) {
            return (oe = re() ? Reflect.construct : function(e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var r = new(Function.bind.apply(e, o));
                return n && ie(r, n.prototype), r
            }).apply(null, arguments)
        }

        function re() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }

        function ie(e, t) {
            return (ie = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function se(e) {
            return function(e) {
                if (Array.isArray(e)) return ce(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return ce(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ce(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
        }

        function ae() {
            for (var e = document.getElementsByTagName("a"), t = function(t) {
                    if (!e[t].hasAttribute("data-fslightbox")) return "continue";
                    var n = e[t].getAttribute("data-fslightbox"),
                        o = e[t].getAttribute("href");
                    fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox);
                    var r = null;
                    "#" === o.charAt(0) ? (r = document.getElementById(o.substring(1)).cloneNode(!0)).removeAttribute("id") : r = o, fsLightboxInstances[n].props.sources.push(r), fsLightboxInstances[n].elements.a.push(e[t]);
                    var i = fsLightboxInstances[n].props.sources.length - 1;
                    e[t].onclick = function(e) {
                        e.preventDefault(), fsLightboxInstances[n].open(i)
                    }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class");
                    for (var s = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], c = e[t].attributes, a = fsLightboxInstances[n].props.customAttributes, l = 0; l < c.length; l++)
                        if (-1 === s.indexOf(c[l].name) && "data-" === c[l].name.substr(0, 5)) {
                            a[i] || (a[i] = {});
                            var u = c[l].name.substr(5);
                            a[i][u] = c[l].value
                        }
                    function d(o, r) {
                        e[t].hasAttribute(r) && (fsLightboxInstances[n].props[o][i] = e[t].getAttribute(r))
                    }
                }, n = 0; n < e.length; n++) t(n);
            var o = Object.keys(fsLightboxInstances);
            window.fsLightbox = fsLightboxInstances[o[o.length - 1]]
        }
        window.FsLightbox = function() {
            var e = this;
            this.props = {
                sources: [],
                customAttributes: [],
                customClasses: [],
                types: [],
                videosPosters: [],
                slideDistance: .3
            }, this.data = {
                isInitialized: !1,
                isFullscreenOpen: !1,
                maxSourceWidth: 0,
                maxSourceHeight: 0,
                scrollbarWidth: 0
            }, this.sourcePointerProps = {
                downScreenX: null,
                isPointering: !1,
                isSourceDownEventTarget: !1,
                swipedX: 0
            }, this.stageIndexes = {}, this.elements = {
                a: [],
                container: null,
                slideSwipingHoverer: null,
                sourceWrappersContainer: null,
                sources: [],
                sourceMainWrappers: [],
                sourceAnimationWrappers: []
            }, this.componentsServices = {
                enterFullscreen: null,
                exitFullscreen: null,
                hideSourceLoaderIfNotYetCollection: [],
                setSlideNumber: function() {}
            }, this.resolve = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return n.unshift(e), oe(t, se(n))
            }, this.collections = {
                sourceMainWrappersTransformers: [],
                sourceLoadHandlers: [],
                sourcesRenderFunctions: [],
                sourceSizers: []
            }, this.core = {
                classFacade: {},
                eventsDispatcher: {},
                fullscreenToggler: {},
                globalEventsController: {},
                lightboxCloser: {},
                lightboxOpener: {},
                lightboxUpdater: {},
                scrollbarRecompensor: {},
                slideChangeFacade: {},
                slideIndexChanger: {},
                sourcesPointerDown: {},
                sourceDisplayFacade: {},
                stageManager: {},
                windowResizeActioner: {}
            }, ne(this), this.open = function(t) {
                return e.core.lightboxOpener.open(t)
            }, this.close = function() {
                return e.core.lightboxCloser.closeLightbox()
            }
        }, window.fsLightboxInstances = {}, ae(), window.refreshFsLightbox = function() {
            for (var e in fsLightboxInstances) {
                var t = fsLightboxInstances[e].props;
                fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = []
            }
            ae()
        }
    }])
}));