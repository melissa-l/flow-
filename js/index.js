/**
 * Created by melissa on 17-6-26.
 */
if (function (e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document)throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (e, t) {
        "use strict";
        function n(e, t) {
            t = t || ne;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(e) {
            var t = !!e && "length" in e && e.length, n = he.type(e);
            return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function o(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function r(e, t, n) {
            return he.isFunction(t) ? he.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? he.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? he.grep(e, function (e) {
                return ae.call(t, e) > -1 !== n
            }) : xe.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
                return ae.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }

        function s(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function a(e) {
            var t = {};
            return he.each(e.match(Ee) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function l(e) {
            return e
        }

        function c(e) {
            throw e
        }

        function u(e, t, n, i) {
            var o;
            try {
                e && he.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && he.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        function f() {
            ne.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), he.ready()
        }

        function d() {
            this.expando = he.expando + d.uid++
        }

        function p(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Oe.test(e) ? JSON.parse(e) : e)
        }

        function h(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)if (i = "data-" + t.replace(je, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = p(n)
                } catch (e) {
                }
                Le.set(e, t, n)
            } else n = void 0;
            return n
        }

        function g(e, t, n, i) {
            var o, r = 1, s = 20, a = i ? function () {
                    return i.cur()
                } : function () {
                    return he.css(e, t, "")
                }, l = a(), c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
                u = (he.cssNumber[t] || "px" !== c && +l) && He.exec(he.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do {
                    r = r || ".5", u /= r, he.style(e, t, u + c)
                } while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }

        function v(e) {
            var t, n = e.ownerDocument, i = e.nodeName, o = Me[i];
            return o || (t = n.body.appendChild(n.createElement(i)), o = he.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Me[i] = o, o)
        }

        function m(e, t) {
            for (var n, i, o = [], r = 0, s = e.length; r < s; r++)i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = Ie.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Pe(i) && (o[r] = v(i))) : "none" !== n && (o[r] = "none", Ie.set(i, "display", n)));
            for (r = 0; r < s; r++)null != o[r] && (e[r].style.display = o[r]);
            return e
        }

        function y(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? he.merge([e], n) : n
        }

        function b(e, t) {
            for (var n = 0, i = e.length; n < i; n++)Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"))
        }

        function w(e, t, n, i, o) {
            for (var r, s, a, l, c, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)if ((r = e[p]) || 0 === r)if ("object" === he.type(r)) he.merge(d, r.nodeType ? [r] : r); else if (ze.test(r)) {
                for (s = s || f.appendChild(t.createElement("div")), a = (We.exec(r) || ["", ""])[1].toLowerCase(), l = Ue[a] || Ue._default, s.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], u = l[0]; u--;)s = s.lastChild;
                he.merge(d, s.childNodes), s = f.firstChild, s.textContent = ""
            } else d.push(t.createTextNode(r));
            for (f.textContent = "", p = 0; r = d[p++];)if (i && he.inArray(r, i) > -1) o && o.push(r); else if (c = he.contains(r.ownerDocument, r), s = y(f.appendChild(r), "script"), c && b(s), n)for (u = 0; r = s[u++];)_e.test(r.type || "") && n.push(r);
            return f
        }

        function x() {
            return !0
        }

        function T() {
            return !1
        }

        function C() {
            try {
                return ne.activeElement
            } catch (e) {
            }
        }

        function S(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in t)S(e, a, n, i, t[a], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = T; else if (!o)return e;
            return 1 === r && (s = o, o = function (e) {
                return he().off(e), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = he.guid++)), e.each(function () {
                he.event.add(this, t, o, i, n)
            })
        }

        function k(e, t) {
            return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
        }

        function E(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function A(e) {
            var t = Je.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function D(e, t) {
            var n, i, o, r, s, a, l, c;
            if (1 === t.nodeType) {
                if (Ie.hasData(e) && (r = Ie.access(e), s = Ie.set(t, r), c = r.events)) {
                    delete s.handle, s.events = {};
                    for (o in c)for (n = 0, i = c[o].length; n < i; n++)he.event.add(t, o, c[o][n])
                }
                Le.hasData(e) && (a = Le.access(e), l = he.extend({}, a), Le.set(t, l))
            }
        }

        function $(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function N(e, t, i, o) {
            t = re.apply([], t);
            var r, s, a, l, c, u, f = 0, d = e.length, p = d - 1, h = t[0], g = he.isFunction(h);
            if (g || d > 1 && "string" == typeof h && !pe.checkClone && Ke.test(h))return e.each(function (n) {
                var r = e.eq(n);
                g && (t[0] = h.call(this, n, r.html())), N(r, t, i, o)
            });
            if (d && (r = w(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
                for (a = he.map(y(r, "script"), E), l = a.length; f < d; f++)c = r, f !== p && (c = he.clone(c, !0, !0), l && he.merge(a, y(c, "script"))), i.call(e[f], c, f);
                if (l)for (u = a[a.length - 1].ownerDocument, he.map(a, A), f = 0; f < l; f++)c = a[f], _e.test(c.type || "") && !Ie.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(Ze, ""), u))
            }
            return e
        }

        function I(e, t, n) {
            for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++)n || 1 !== i.nodeType || he.cleanData(y(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function L(e, t, n) {
            var i, o, r, s, a = e.style;
            return n = n || nt(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !pe.pixelMarginRight() && tt.test(s) && et.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function O(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function j(e) {
            if (e in lt)return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = at.length; n--;)if ((e = at[n] + t) in lt)return e
        }

        function R(e) {
            var t = he.cssProps[e];
            return t || (t = he.cssProps[e] = j(e) || e), t
        }

        function H(e, t, n) {
            var i = He.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function q(e, t, n, i, o) {
            var r, s = 0;
            for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2)"margin" === n && (s += he.css(e, n + qe[r], !0, o)), i ? ("content" === n && (s -= he.css(e, "padding" + qe[r], !0, o)), "margin" !== n && (s -= he.css(e, "border" + qe[r] + "Width", !0, o))) : (s += he.css(e, "padding" + qe[r], !0, o), "padding" !== n && (s += he.css(e, "border" + qe[r] + "Width", !0, o)));
            return s
        }

        function P(e, t, n) {
            var i, o = nt(e), r = L(e, t, o), s = "border-box" === he.css(e, "boxSizing", !1, o);
            return tt.test(r) ? r : (i = s && (pe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + q(e, t, n || (s ? "border" : "content"), i, o) + "px")
        }

        function F(e, t, n, i, o) {
            return new F.prototype.init(e, t, n, i, o)
        }

        function M() {
            ut && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setTimeout(M, he.fx.interval), he.fx.tick())
        }

        function B() {
            return e.setTimeout(function () {
                ct = void 0
            }), ct = he.now()
        }

        function W(e, t) {
            var n, i = 0, o = {height: e};
            for (t = t ? 1 : 0; i < 4; i += 2 - t)n = qe[i], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function _(e, t, n) {
            for (var i, o = (V.tweeners[t] || []).concat(V.tweeners["*"]), r = 0, s = o.length; r < s; r++)if (i = o[r].call(n, t, e))return i
        }

        function U(e, t, n) {
            var i, o, r, s, a, l, c, u, f = "width" in t || "height" in t, d = this, p = {}, h = e.style,
                g = e.nodeType && Pe(e), v = Ie.get(e, "fxshow");
            n.queue || (s = he._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, he.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (i in t)if (o = t[i], ft.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[i])continue;
                    g = !0
                }
                p[i] = v && v[i] || he.style(e, i)
            }
            if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(p)) {
                f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = v && v.display, null == c && (c = Ie.get(e, "display")), u = he.css(e, "display"), "none" === u && (c ? u = c : (m([e], !0), c = e.style.display || c, u = he.css(e, "display"), m([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (d.done(function () {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (i in p)l || (v ? "hidden" in v && (g = v.hidden) : v = Ie.access(e, "fxshow", {display: c}), r && (v.hidden = !g), g && m([e], !0), d.done(function () {
                    g || m([e]), Ie.remove(e, "fxshow");
                    for (i in p)he.style(e, i, p[i])
                })), l = _(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
            }
        }

        function z(e, t) {
            var n, i, o, r, s;
            for (n in e)if (i = he.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = he.cssHooks[i]) && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r)n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
        }

        function V(e, t, n) {
            var i, o, r = 0, s = V.prefilters.length, a = he.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o)return !1;
                for (var t = ct || B(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++)c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), r < 1 && l ? n : (l || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            }, c = a.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {specialEasing: {}, easing: he.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ct || B(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? c.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; n < i; n++)c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }), u = c.props;
            for (z(u, c.opts.specialEasing); r < s; r++)if (i = V.prefilters[r].call(c, e, u, c.opts))return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
            return he.map(u, _, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), he.fx.timer(he.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        function X(e) {
            return (e.match(Ee) || []).join(" ")
        }

        function Q(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Y(e, t, n, i) {
            var o;
            if (Array.isArray(t)) he.each(t, function (t, o) {
                n || xt.test(e) ? i(e, o) : Y(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            }); else if (n || "object" !== he.type(t)) i(e, t); else for (o in t)Y(e + "[" + o + "]", t[o], n, i)
        }

        function G(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0, r = t.toLowerCase().match(Ee) || [];
                if (he.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function K(e, t, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, he.each(e[a] || [], function (e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), l
            }

            var r = {}, s = e === Dt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function J(e, t) {
            var n, i, o = he.ajaxSettings.flatOptions || {};
            for (n in t)void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && he.extend(!0, e, i), e
        }

        function Z(e, t, n) {
            for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)for (o in a)if (a[o] && a[o].test(i)) {
                l.unshift(o);
                break
            }
            if (l[0] in n) r = l[0]; else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            if (r)return r !== l[0] && l.unshift(r), n[r]
        }

        function ee(e, t, n, i) {
            var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
            if (u[1])for (s in e.converters)c[s.toLowerCase()] = e.converters[s];
            for (r = u.shift(); r;)if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                if (!(s = c[l + " " + r] || c["* " + r]))for (o in c)if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                    break
                }
                if (!0 !== s)if (s && e.throws) t = s(t); else try {
                    t = s(t)
                } catch (e) {
                    return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: t}
        }

        var te = [], ne = e.document, ie = Object.getPrototypeOf, oe = te.slice, re = te.concat, se = te.push,
            ae = te.indexOf, le = {}, ce = le.toString, ue = le.hasOwnProperty, fe = ue.toString, de = fe.call(Object),
            pe = {}, he = function (e, t) {
                return new he.fn.init(e, t)
            }, ge = function (e, t) {
                return t.toUpperCase()
            };
        he.fn = he.prototype = {
            jquery: "3.2.1", constructor: he, length: 0, toArray: function () {
                return oe.call(this)
            }, get: function (e) {
                return null == e ? oe.call(this) : e < 0 ? this[e + this.length] : this[e]
            }, pushStack: function (e) {
                var t = he.merge(this.constructor(), e);
                return t.prevObject = this, t
            }, each: function (e) {
                return he.each(this, e)
            }, map: function (e) {
                return this.pushStack(he.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(oe.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: se, sort: te.sort, splice: te.splice
        }, he.extend = he.fn.extend = function () {
            var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], i = e[t], s !== i && (c && i && (he.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, s[t] = he.extend(c, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }, he.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {
            },
            isFunction: function (e) {
                return "function" === he.type(e)
            },
            isWindow: function (e) {
                return null != e && e === e.window
            },
            isNumeric: function (e) {
                var t = he.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== ce.call(e)) && (!(t = ie(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && fe.call(n) === de)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                n(e)
            },
            camelCase: function (e) {
                return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, ge)
            },
            each: function (e, t) {
                var n, o = 0;
                if (i(e))for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++); else for (o in e)if (!1 === t.call(e[o], o, e[o]))break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : ae.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++)e[o++] = t[i];
                return e.length = o, e
            },
            grep: function (e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)!t(e[o], o) !== s && i.push(e[o]);
                return i
            },
            map: function (e, t, n) {
                var o, r, s = 0, a = [];
                if (i(e))for (o = e.length; s < o; s++)null != (r = t(e[s], s, n)) && a.push(r); else for (s in e)null != (r = t(e[s], s, n)) && a.push(r);
                return re.apply([], a)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, o;
                if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e))return i = oe.call(arguments, 2), o = function () {
                    return e.apply(t || this, i.concat(oe.call(arguments)))
                }, o.guid = e.guid = e.guid || he.guid++, o
            },
            now: Date.now,
            support: pe
        }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = te[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            le["[object " + t + "]"] = t.toLowerCase()
        });
        var ve = function (e) {
            function t(e, t, n, i) {
                var o, r, s, a, l, u, d, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)return n;
                if (!i && ((t ? t.ownerDocument || t : F) !== I && N(t), t = t || I, O)) {
                    if (11 !== h && (l = ge.exec(e)))if (o = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(o)))return n;
                            if (s.id === o)return n.push(s), n
                        } else if (p && (s = p.getElementById(o)) && q(t, s) && s.id === o)return n.push(s), n
                    } else {
                        if (l[2])return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && w.getElementsByClassName && t.getElementsByClassName)return G.apply(n, t.getElementsByClassName(o)), n
                    }
                    if (w.qsa && !U[e + " "] && (!j || !j.test(e))) {
                        if (1 !== h) p = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(be, we) : t.setAttribute("id", a = P), u = S(e), r = u.length; r--;)u[r] = "#" + a + " " + f(u[r]);
                            d = u.join(","), p = ve.test(e) && c(t.parentNode) || t
                        }
                        if (d)try {
                            return G.apply(n, p.querySelectorAll(d)), n
                        } catch (e) {
                        } finally {
                            a === P && t.removeAttribute("id")
                        }
                    }
                }
                return E(e.replace(re, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
                }

                var t = [];
                return e
            }

            function i(e) {
                return e[P] = !0, e
            }

            function o(e) {
                var t = I.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--;)x.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function l(e) {
                return i(function (t) {
                    return t = +t, i(function (n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function u() {
            }

            function f(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)i += e[t].value;
                return i
            }

            function d(e, t, n) {
                var i = t.dir, o = t.next, r = o || i, s = n && "parentNode" === r, a = B++;
                return t.first ? function (t, n, o) {
                    for (; t = t[i];)if (1 === t.nodeType || s)return e(t, n, o);
                    return !1
                } : function (t, n, l) {
                    var c, u, f, d = [M, a];
                    if (l) {
                        for (; t = t[i];)if ((1 === t.nodeType || s) && e(t, n, l))return !0
                    } else for (; t = t[i];)if (1 === t.nodeType || s)if (f = t[P] || (t[P] = {}), u = f[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                        if ((c = u[r]) && c[0] === M && c[1] === a)return d[2] = c[2];
                        if (u[r] = d, d[2] = e(t, n, l))return !0
                    }
                    return !1
                }
            }

            function p(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var o = e.length; o--;)if (!e[o](t, n, i))return !1;
                    return !0
                } : e[0]
            }

            function h(e, n, i) {
                for (var o = 0, r = n.length; o < r; o++)t(e, n[o], i);
                return i
            }

            function g(e, t, n, i, o) {
                for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
                return s
            }

            function v(e, t, n, o, r, s) {
                return o && !o[P] && (o = v(o)), r && !r[P] && (r = v(r, s)), i(function (i, s, a, l) {
                    var c, u, f, d = [], p = [], v = s.length, m = i || h(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? m : g(m, d, e, a, l), b = n ? r || (i ? e : v || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)for (c = g(b, p), o(c, [], a, l), u = c.length; u--;)(f = c[u]) && (b[p[u]] = !(y[p[u]] = f));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(f = b[u]) && c.push(y[u] = f);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(f = b[u]) && (c = r ? J(i, f) : d[u]) > -1 && (i[c] = !(s[c] = f))
                        }
                    } else b = g(b === s ? b.splice(v, b.length) : b), r ? r(null, s, b, l) : G.apply(s, b)
                })
            }

            function m(e) {
                for (var t, n, i, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = d(function (e) {
                    return e === t
                }, s, !0), c = d(function (e) {
                    return J(t, e) > -1
                }, s, !0), u = [function (e, n, i) {
                    var o = !r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, o
                }]; a < o; a++)if (n = x.relative[e[a].type]) u = [d(p(u), n)]; else {
                    if (n = x.filter[e[a].type].apply(null, e[a].matches), n[P]) {
                        for (i = ++a; i < o && !x.relative[e[i].type]; i++);
                        return v(a > 1 && p(u), a > 1 && f(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(re, "$1"), n, a < i && m(e.slice(a, i)), i < o && m(e = e.slice(i)), i < o && f(e))
                    }
                    u.push(n)
                }
                return p(u)
            }

            function y(e, n) {
                var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, c) {
                    var u, f, d, p = 0, h = "0", v = i && [], m = [], y = A, b = i || r && x.find.TAG("*", c),
                        w = M += null == y ? 1 : Math.random() || .1, T = b.length;
                    for (c && (A = s === I || s || c); h !== T && null != (u = b[h]); h++) {
                        if (r && u) {
                            for (f = 0, s || u.ownerDocument === I || (N(u), a = !O); d = e[f++];)if (d(u, s || I, a)) {
                                l.push(u);
                                break
                            }
                            c && (M = w)
                        }
                        o && ((u = !d && u) && p--, i && v.push(u))
                    }
                    if (p += h, o && h !== p) {
                        for (f = 0; d = n[f++];)d(v, m, s, a);
                        if (i) {
                            if (p > 0)for (; h--;)v[h] || m[h] || (m[h] = Q.call(l));
                            m = g(m)
                        }
                        G.apply(l, m), c && !i && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (M = w, A = y), v
                };
                return o ? i(s) : s
            }

            var b, w, x, T, C, S, k, E, A, D, $, N, I, L, O, j, R, H, q, P = "sizzle" + 1 * new Date, F = e.document,
                M = 0, B = 0, W = n(), _ = n(), U = n(), z = function (e, t) {
                    return e === t && ($ = !0), 0
                }, V = {}.hasOwnProperty, X = [], Q = X.pop, Y = X.push, G = X.push, K = X.slice, J = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++)if (e[n] === t)return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                oe = new RegExp(ee + "+", "g"),
                re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                se = new RegExp("^" + ee + "*," + ee + "*"),
                ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(ie),
                ue = new RegExp("^" + te + "$"), fe = {
                    ID: new RegExp("^#(" + te + ")"),
                    CLASS: new RegExp("^\\.(" + te + ")"),
                    TAG: new RegExp("^(" + te + "|[*])"),
                    ATTR: new RegExp("^" + ne),
                    PSEUDO: new RegExp("^" + ie),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                }, de = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/,
                me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, xe = function () {
                    N()
                }, Te = d(function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {dir: "parentNode", next: "legend"});
            try {
                G.apply(X = K.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
            } catch (e) {
                G = {
                    apply: X.length ? function (e, t) {
                        Y.apply(e, K.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, C = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, N = t.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : F;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, L = I.documentElement, O = !C(I), F !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = o(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = o(function (e) {
                    return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = he.test(I.getElementsByClassName), w.getById = o(function (e) {
                    return L.appendChild(e).id = P, !I.getElementsByName || !I.getElementsByName(P).length
                }), w.getById ? (x.filter.ID = function (e) {
                    var t = e.replace(me, ye);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && O) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function (e) {
                    var t = e.replace(me, ye);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && O) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e)return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)if ((n = r.getAttributeNode("id")) && n.value === e)return [r]
                        }
                        return []
                    }
                }), x.find.TAG = w.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [], o = 0, r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, x.find.CLASS = w.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && O)return t.getElementsByClassName(e)
                    }, R = [], j = [], (w.qsa = he.test(I.querySelectorAll)) && (o(function (e) {
                    L.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + P + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || j.push(".#.+[+~]")
                }), o(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = I.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
                })), (w.matchesSelector = he.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function (e) {
                    w.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), R.push("!=", ie)
                }), j = j.length && new RegExp(j.join("|")), R = R.length && new RegExp(R.join("|")), t = he.test(L.compareDocumentPosition), q = t || he.test(L.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return !0;
                    return !1
                }, z = t ? function (e, t) {
                    if (e === t)return $ = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === F && q(F, e) ? -1 : t === I || t.ownerDocument === F && q(F, t) ? 1 : D ? J(D, e) - J(D, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t)return $ = !0, 0;
                    var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
                    if (!o || !r)return e === I ? -1 : t === I ? 1 : o ? -1 : r ? 1 : D ? J(D, e) - J(D, t) : 0;
                    if (o === r)return s(e, t);
                    for (n = e; n = n.parentNode;)a.unshift(n);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (; a[i] === l[i];)i++;
                    return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
                }, I) : I
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== I && N(e), n = n.replace(le, "='$1']"), w.matchesSelector && O && !U[n + " "] && (!R || !R.test(n)) && (!j || !j.test(n)))try {
                    var i = H.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
                } catch (e) {
                }
                return t(n, I, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== I && N(e), q(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== I && N(e);
                var n = x.attrHandle[t.toLowerCase()],
                    i = n && V.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== i ? i : w.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.escape = function (e) {
                return (e + "").replace(be, we)
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [], i = 0, o = 0;
                if ($ = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(z), $) {
                    for (; t = e[o++];)t === e[o] && (i = n.push(o));
                    for (; i--;)e.splice(n[i], 1)
                }
                return D = null, e
            }, T = t.getText = function (e) {
                var t, n = "", i = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                    } else if (3 === o || 4 === o)return e.nodeValue
                } else for (; t = e[i++];)n += T(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(me, ye).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, n, i) {
                        return function (o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    }, CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                        return 1 === i && 0 === o ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, f, d, p, h, g = r !== s ? "nextSibling" : "previousSibling", v = t.parentNode,
                                m = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                            if (v) {
                                if (r) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (d = v, f = d[P] || (d[P] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), c = u[e] || [], p = c[0] === M && c[1], b = p && c[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)if (1 === d.nodeType && ++b && d === t) {
                                        u[e] = [M, p, b];
                                        break
                                    }
                                } else if (y && (d = t, f = d[P] || (d[P] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), c = u[e] || [], p = c[0] === M && c[1], b = p), !1 === b)for (; (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && (f = d[P] || (d[P] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), u[e] = [M, b]), d !== t)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, n) {
                        var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[P] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                            for (var i, o = r(e, n), s = o.length; s--;)i = J(e, o[s]), e[i] = !(t[i] = o[s])
                        }) : function (e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [], n = [], o = k(e.replace(re, "$1"));
                        return o[P] ? i(function (e, t, n, i) {
                            for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function (e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }), has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }), contains: i(function (e) {
                        return e = e.replace(me, ye), function (t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                    }), lang: i(function (e) {
                        return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(), function (t) {
                            var n;
                            do {
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === L
                    }, focus: function (e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: a(!1), disabled: a(!0), checked: function (e) {
                        var t = e.nodeName.toLowerCase()
                        ;
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                        return !0
                    }, parent: function (e) {
                        return !x.pseudos.empty(e)
                    }, header: function (e) {
                        return pe.test(e.nodeName)
                    }, input: function (e) {
                        return de.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: l(function () {
                        return [0]
                    }), last: l(function (e, t) {
                        return [t - 1]
                    }), eq: l(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }), even: l(function (e, t) {
                        for (var n = 0; n < t; n += 2)e.push(n);
                        return e
                    }), odd: l(function (e, t) {
                        for (var n = 1; n < t; n += 2)e.push(n);
                        return e
                    }), lt: l(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;)e.push(i);
                        return e
                    }), gt: l(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;)e.push(i);
                        return e
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[b] = function (e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(b);
            for (b in{submit: !0, reset: !0})x.pseudos[b] = function (e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(b);
            return u.prototype = x.filters = x.pseudos, x.setFilters = new u, S = t.tokenize = function (e, n) {
                var i, o, r, s, a, l, c, u = _[e + " "];
                if (u)return n ? 0 : u.slice(0);
                for (a = e, l = [], c = x.preFilter; a;) {
                    i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ae.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(re, " ")
                    }), a = a.slice(i.length));
                    for (s in x.filter)!(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i)break
                }
                return n ? a.length : a ? t.error(e) : _(e, l).slice(0)
            }, k = t.compile = function (e, t) {
                var n, i = [], o = [], r = U[e + " "];
                if (!r) {
                    for (t || (t = S(e)), n = t.length; n--;)r = m(t[n]), r[P] ? i.push(r) : o.push(r);
                    r = U(e, y(o, i)), r.selector = e
                }
                return r
            }, E = t.select = function (e, t, n, i) {
                var o, r, s, a, l, u = "function" == typeof e && e, d = !i && S(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && O && x.relative[r[1].type]) {
                        if (!(t = (x.find.ID(s.matches[0].replace(me, ye), t) || [])[0]))return n;
                        u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)if ((l = x.find[a]) && (i = l(s.matches[0].replace(me, ye), ve.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && f(r)))return G.apply(n, i), n;
                        break
                    }
                }
                return (u || k(e, d))(i, t, !O, n, !t || ve.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = P.split("").sort(z).join("") === P, w.detectDuplicates = !!$, N(), w.sortDetached = o(function (e) {
                return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
            }), o(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (e, t, n) {
                if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && o(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
            }), o(function (e) {
                return null == e.getAttribute("disabled")
            }) || r(Z, function (e, t, n) {
                var i;
                if (!n)return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        he.find = ve, he.expr = ve.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ve.uniqueSort, he.text = ve.getText, he.isXMLDoc = ve.isXML, he.contains = ve.contains, he.escapeSelector = ve.escape;
        var me = function (e, t, n) {
                for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                    if (o && he(e).is(n))break;
                    i.push(e)
                }
                return i
            }, ye = function (e, t) {
                for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n
            }, be = he.expr.match.needsContext, we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            xe = /^.[^:#\[\.,]*$/;
        he.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, he.fn.extend({
            find: function (e) {
                var t, n, i = this.length, o = this;
                if ("string" != typeof e)return this.pushStack(he(e).filter(function () {
                    for (t = 0; t < i; t++)if (he.contains(o[t], this))return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++)he.find(e, o[t], n);
                return i > 1 ? he.uniqueSort(n) : n
            }, filter: function (e) {
                return this.pushStack(r(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(r(this, e || [], !0))
            }, is: function (e) {
                return !!r(this, "string" == typeof e && be.test(e) ? he(e) : e || [], !1).length
            }
        });
        var Te, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (he.fn.init = function (e, t, n) {
            var i, o;
            if (!e)return this;
            if (n = n || Te, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ce.exec(e)) || !i[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), we.test(i[1]) && he.isPlainObject(t))for (i in t)he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = ne.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
        }).prototype = he.fn, Te = he(ne);
        var Se = /^(?:parents|prev(?:Until|All))/, ke = {children: !0, contents: !0, next: !0, prev: !0};
        he.fn.extend({
            has: function (e) {
                var t = he(e, this), n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)if (he.contains(this, t[e]))return !0
                })
            }, closest: function (e, t) {
                var n, i = 0, o = this.length, r = [], s = "string" != typeof e && he(e);
                if (!be.test(e))for (; i < o; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
            }, index: function (e) {
                return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), he.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return me(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return me(e, "parentNode", n)
            }, next: function (e) {
                return s(e, "nextSibling")
            }, prev: function (e) {
                return s(e, "previousSibling")
            }, nextAll: function (e) {
                return me(e, "nextSibling")
            }, prevAll: function (e) {
                return me(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return me(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return me(e, "previousSibling", n)
            }, siblings: function (e) {
                return ye((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return ye(e.firstChild)
            }, contents: function (e) {
                return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
            }
        }, function (e, t) {
            he.fn[e] = function (n, i) {
                var o = he.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), this.length > 1 && (ke[e] || he.uniqueSort(o), Se.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var Ee = /[^\x20\t\r\n\f]+/g;
        he.Callbacks = function (e) {
            e = "string" == typeof e ? a(e) : he.extend({}, e);
            var t, n, i, o, r = [], s = [], l = -1, c = function () {
                for (o = o || e.once, i = t = !0; s.length; l = -1)for (n = s.shift(); ++l < r.length;)!1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
                e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
            }, u = {
                add: function () {
                    return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
                        he.each(n, function (n, i) {
                            he.isFunction(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== he.type(i) && t(i)
                        })
                    }(arguments), n && !t && c()), this
                }, remove: function () {
                    return he.each(arguments, function (e, t) {
                        for (var n; (n = he.inArray(t, r, n)) > -1;)r.splice(n, 1), n <= l && l--
                    }), this
                }, has: function (e) {
                    return e ? he.inArray(e, r) > -1 : r.length > 0
                }, empty: function () {
                    return r && (r = []), this
                }, disable: function () {
                    return o = s = [], r = n = "", this
                }, disabled: function () {
                    return !r
                }, lock: function () {
                    return o = s = [], n || t || (r = n = ""), this
                }, locked: function () {
                    return !!o
                }, fireWith: function (e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                }, fire: function () {
                    return u.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return u
        }, he.extend({
            Deferred: function (t) {
                var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]],
                    i = "pending", o = {
                        state: function () {
                            return i
                        }, always: function () {
                            return r.done(arguments).fail(arguments), this
                        }, catch: function (e) {
                            return o.then(null, e)
                        }, pipe: function () {
                            var e = arguments;
                            return he.Deferred(function (t) {
                                he.each(n, function (n, i) {
                                    var o = he.isFunction(e[i[4]]) && e[i[4]];
                                    r[i[1]](function () {
                                        var e = o && o.apply(this, arguments);
                                        e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, then: function (t, i, o) {
                            function r(t, n, i, o) {
                                return function () {
                                    var a = this, u = arguments, f = function () {
                                        var e, f;
                                        if (!(t < s)) {
                                            if ((e = i.apply(a, u)) === n.promise())throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? o ? f.call(e, r(s, n, l, o), r(s, n, c, o)) : (s++, f.call(e, r(s, n, l, o), r(s, n, c, o), r(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, u = [e]), (o || n.resolveWith)(a, u))
                                        }
                                    }, d = o ? f : function () {
                                        try {
                                            f()
                                        } catch (e) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== c && (a = void 0, u = [e]), n.rejectWith(a, u))
                                        }
                                    };
                                    t ? d() : (he.Deferred.getStackHook && (d.stackTrace = he.Deferred.getStackHook()), e.setTimeout(d))
                                }
                            }

                            var s = 0;
                            return he.Deferred(function (e) {
                                n[0][3].add(r(0, e, he.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : l)), n[2][3].add(r(0, e, he.isFunction(i) ? i : c))
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? he.extend(e, o) : o
                        }
                    }, r = {};
                return he.each(n, function (e, t) {
                    var s = t[2], a = t[5];
                    o[t[1]] = s.add, a && s.add(function () {
                        i = a
                    }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function () {
                        return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[t[0] + "With"] = s.fireWith
                }), o.promise(r), t && t.call(r, r), r
            }, when: function (e) {
                var t = arguments.length, n = t, i = Array(n), o = oe.call(arguments), r = he.Deferred(),
                    s = function (e) {
                        return function (n) {
                            i[e] = this, o[e] = arguments.length > 1 ? oe.call(arguments) : n, --t || r.resolveWith(i, o)
                        }
                    };
                if (t <= 1 && (u(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || he.isFunction(o[n] && o[n].then)))return r.then();
                for (; n--;)u(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        he.Deferred.exceptionHook = function (t, n) {
            e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, he.readyException = function (t) {
            e.setTimeout(function () {
                throw t
            })
        };
        var De = he.Deferred();
        he.fn.ready = function (e) {
            return De.then(e).catch(function (e) {
                he.readyException(e)
            }), this
        }, he.extend({
            isReady: !1, readyWait: 1, ready: function (e) {
                (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || De.resolveWith(ne, [he]))
            }
        }), he.ready.then = De.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(he.ready) : (ne.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
        var $e = function (e, t, n, i, o, r, s) {
            var a = 0, l = e.length, c = null == n;
            if ("object" === he.type(n)) {
                o = !0;
                for (a in n)$e(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, he.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(he(e), n)
                })), t))for (; a < l; a++)t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        }, Ne = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        d.uid = 1, d.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, Ne(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[he.camelCase(t)] = n; else for (i in t)o[he.camelCase(i)] = t[i];
                return o
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
            }, access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(Ee) || []), n = t.length;
                        for (; n--;)delete i[t[n]]
                    }
                    (void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !he.isEmptyObject(t)
            }
        };
        var Ie = new d, Le = new d, Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, je = /[A-Z]/g;
        he.extend({
            hasData: function (e) {
                return Le.hasData(e) || Ie.hasData(e)
            }, data: function (e, t, n) {
                return Le.access(e, t, n)
            }, removeData: function (e, t) {
                Le.remove(e, t)
            }, _data: function (e, t, n) {
                return Ie.access(e, t, n)
            }, _removeData: function (e, t) {
                Ie.remove(e, t)
            }
        }), he.fn.extend({
            data: function (e, t) {
                var n, i, o, r = this[0], s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Le.get(r), 1 === r.nodeType && !Ie.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), h(r, i, o[i])));
                        Ie.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    Le.set(this, e)
                }) : $e(this, function (t) {
                    var n;
                    if (r && void 0 === t) {
                        if (void 0 !== (n = Le.get(r, e)))return n;
                        if (void 0 !== (n = h(r, e)))return n
                    } else this.each(function () {
                        Le.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    Le.remove(this, e)
                })
            }
        }), he.extend({
            queue: function (e, t, n) {
                var i;
                if (e)return t = (t || "fx") + "queue", i = Ie.get(e, t), n && (!i || Array.isArray(n) ? i = Ie.access(e, t, he.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = he.queue(e, t), i = n.length, o = n.shift(), r = he._queueHooks(e, t), s = function () {
                    he.dequeue(e, t)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Ie.get(e, n) || Ie.access(e, n, {
                        empty: he.Callbacks("once memory").add(function () {
                            Ie.remove(e, [t + "queue", n])
                        })
                    })
            }
        }), he.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = he.queue(this, e, t);
                    he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    he.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, o = he.Deferred(), r = this, s = this.length, a = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Ie.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(t)
            }
        });
        var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            He = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"), qe = ["Top", "Right", "Bottom", "Left"],
            Pe = function (e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
            }, Fe = function (e, t, n, i) {
                var o, r, s = {};
                for (r in t)s[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t)e.style[r] = s[r];
                return o
            }, Me = {};
        he.fn.extend({
            show: function () {
                return m(this, !0)
            }, hide: function () {
                return m(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Pe(this) ? he(this).show() : he(this).hide()
                })
            }
        });
        var Be = /^(?:checkbox|radio)$/i, We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, _e = /^$|\/(?:java|ecma)script/i,
            Ue = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
        var ze = /<|&#?\w+;/;
        !function () {
            var e = ne.createDocumentFragment(), t = e.appendChild(ne.createElement("div")),
                n = ne.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ve = ne.documentElement, Xe = /^key/, Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ye = /^([^.]*)(?:\.(.+)|)/;
        he.event = {
            global: {}, add: function (e, t, n, i, o) {
                var r, s, a, l, c, u, f, d, p, h, g, v = Ie.get(e);
                if (v)for (n.handler && (r = n, n = r.handler, o = r.selector), o && he.find.matchesSelector(Ve, o), n.guid || (n.guid = he.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
                    return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(Ee) || [""], c = t.length; c--;)a = Ye.exec(t[c]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = he.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = he.event.special[p] || {}, u = he.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && he.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), he.event.global[p] = !0)
            }, remove: function (e, t, n, i, o) {
                var r, s, a, l, c, u, f, d, p, h, g, v = Ie.hasData(e) && Ie.get(e);
                if (v && (l = v.events)) {
                    for (t = (t || "").match(Ee) || [""], c = t.length; c--;)if (a = Ye.exec(t[c]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (f = he.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;)u = d[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || he.removeEvent(e, p, v.handle), delete l[p])
                    } else for (p in l)he.event.remove(e, p + t[c], n, i, !0);
                    he.isEmptyObject(l) && Ie.remove(e, "handle events")
                }
            }, dispatch: function (e) {
                var t, n, i, o, r, s, a = he.event.fix(e), l = new Array(arguments.length),
                    c = (Ie.get(this, "events") || {})[a.type] || [], u = he.event.special[a.type] || {};
                for (l[0] = a, t = 1; t < arguments.length; t++)l[t] = arguments[t];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (s = he.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();)for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();)a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            }, handlers: function (e, t) {
                var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))for (; c !== this; c = c.parentNode || this)if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                    for (r = [], s = {}, n = 0; n < l; n++)i = t[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? he(o, this).index(c) > -1 : he.find(o, this, null, [c]).length), s[o] && r.push(i);
                    r.length && a.push({elem: c, handlers: r})
                }
                return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
            }, addProp: function (e, t) {
                Object.defineProperty(he.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: he.isFunction(t) ? function () {
                        if (this.originalEvent)return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent)return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                    }
                })
            }, fix: function (e) {
                return e[he.expando] ? e : new he.Event(e)
            }, special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== C() && this.focus)return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === C() && this.blur)return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && o(this, "input"))return this.click(), !1
                    }, _default: function (e) {
                        return o(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, he.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, he.Event = function (e, t) {
            if (!(this instanceof he.Event))return new he.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
        }, he.Event.prototype = {
            constructor: he.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, he.each({
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
            char: !0,
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
            which: function (e) {
                var t = e.button;
                return null == e.which && Xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, he.event.addProp), he.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            he.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, o = e.relatedTarget, r = e.handleObj;
                    return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), he.fn.extend({
            on: function (e, t, n, i) {
                return S(this, e, t, n, i)
            }, one: function (e, t, n, i) {
                return S(this, e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e)this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function () {
                    he.event.remove(this, e, n, t)
                })
            }
        });
        var Ge = /<script|<style|<link/i, Ke = /checked\s*(?:[^=]|=\s*.checked.)/i, Je = /^true\/(.*)/,
            Ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        he.extend({
            htmlPrefilter: function (e) {
                return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>")
            }, clone: function (e, t, n) {
                var i, o, r, s, a = e.cloneNode(!0), l = he.contains(e.ownerDocument, e);
                if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))for (s = y(a), r = y(e), i = 0, o = r.length; i < o; i++)$(r[i], s[i]);
                if (t)if (n)for (r = r || y(e), s = s || y(a), i = 0, o = r.length; i < o; i++)D(r[i], s[i]); else D(e, a);
                return s = y(a, "script"), s.length > 0 && b(s, !l && y(e, "script")), a
            }, cleanData: function (e) {
                for (var t, n, i, o = he.event.special, r = 0; void 0 !== (n = e[r]); r++)if (Ne(n)) {
                    if (t = n[Ie.expando]) {
                        if (t.events)for (i in t.events)o[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                        n[Ie.expando] = void 0
                    }
                    n[Le.expando] && (n[Le.expando] = void 0)
                }
            }
        }), he.fn.extend({
            detach: function (e) {
                return I(this, e, !0)
            }, remove: function (e) {
                return I(this, e)
            }, text: function (e) {
                return $e(this, function (e) {
                    return void 0 === e ? he.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return N(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        k(this, e).appendChild(e)
                    }
                })
            }, prepend: function () {
                return N(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = k(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return N(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return N(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return he.clone(this, e, t)
                })
            }, html: function (e) {
                return $e(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                    if ("string" == typeof e && !Ge.test(e) && !Ue[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = he.htmlPrefilter(e);
                        try {
                            for (; n < i; n++)t = this[n] || {}, 1 === t.nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return N(this, arguments, function (t) {
                    var n = this.parentNode;
                    he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), he.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            he.fn[e] = function (e) {
                for (var n, i = [], o = he(e), r = o.length - 1, s = 0; s <= r; s++)n = s === r ? this : this.clone(!0), he(o[s])[t](n), se.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var et = /^margin/, tt = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"), nt = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
        !function () {
            function t() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ve.appendChild(s);
                    var t = e.getComputedStyle(a);
                    n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ve.removeChild(s), a = null
                }
            }

            var n, i, o, r, s = ne.createElement("div"), a = ne.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(pe, {
                pixelPosition: function () {
                    return t(), n
                }, boxSizingReliable: function () {
                    return t(), i
                }, pixelMarginRight: function () {
                    return t(), o
                }, reliableMarginLeft: function () {
                    return t(), r
                }
            }))
        }();
        var it = /^(none|table(?!-c[ea]).+)/, ot = /^--/,
            rt = {position: "absolute", visibility: "hidden", display: "block"},
            st = {letterSpacing: "0", fontWeight: "400"}, at = ["Webkit", "Moz", "ms"],
            lt = ne.createElement("div").style;
        he.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = L(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: "cssFloat"},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = he.camelCase(t), l = ot.test(t), c = e.style;
                    if (l || (t = R(a)), s = he.cssHooks[t] || he.cssHooks[a], void 0 === n)return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                    r = typeof n, "string" === r && (o = He.exec(n)) && o[1] && (n = g(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (he.cssNumber[a] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var o, r, s, a = he.camelCase(t);
                return ot.test(t) || (t = R(a)), s = he.cssHooks[t] || he.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = L(e, t, i)), "normal" === o && t in st && (o = st[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), he.each(["height", "width"], function (e, t) {
            he.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n)return !it.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, i) : Fe(e, rt, function () {
                        return P(e, t, i)
                    })
                }, set: function (e, n, i) {
                    var o, r = i && nt(e), s = i && q(e, t, i, "border-box" === he.css(e, "boxSizing", !1, r), r);
                    return s && (o = He.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = he.css(e, t)), H(e, n, s)
                }
            }
        }), he.cssHooks.marginLeft = O(pe.reliableMarginLeft, function (e, t) {
            if (t)return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {marginLeft: 0}, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
        }), he.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            he.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)o[e + qe[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, et.test(e) || (he.cssHooks[e + t].set = H)
        }), he.fn.extend({
            css: function (e, t) {
                return $e(this, function (e, t, n) {
                    var i, o, r = {}, s = 0;
                    if (Array.isArray(t)) {
                        for (i = nt(e), o = t.length; s < o; s++)r[t[s]] = he.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), he.Tween = F, F.prototype = {
            constructor: F, init: function (e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
            }
        }, F.prototype.init.prototype = F.prototype, F.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                }, set: function (e) {
                    he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, he.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, he.fx = F.prototype.init, he.fx.step = {};
        var ct, ut, ft = /^(?:toggle|show|hide)$/, dt = /queueHooks$/;
        he.Animation = he.extend(V, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return g(n.elem, e, He.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
                for (var n, i = 0, o = e.length; i < o; i++)n = e[i], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
            }, prefilters: [U], prefilter: function (e, t) {
                t ? V.prefilters.unshift(e) : V.prefilters.push(e)
            }
        }), he.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? he.extend({}, e) : {
                complete: n || !n && t || he.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !he.isFunction(t) && t
            };
            return he.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
            }, i
        }, he.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Pe).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var o = he.isEmptyObject(e), r = he.speed(t, n, i), s = function () {
                    var t = V(this, he.extend({}, e), r);
                    (o || Ie.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, o = null != e && e + "queueHooks", r = he.timers, s = Ie.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && dt.test(o) && i(s[o]);
                    for (o = r.length; o--;)r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                        t = !1, r.splice(o, 1));
                    !t && n || he.dequeue(this, e)
                })
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = Ie.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = he.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;)r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < s; t++)i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function (e, t) {
            var n = he.fn[t];
            he.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, o)
            }
        }), he.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            he.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), he.timers = [], he.fx.tick = function () {
            var e, t = 0, n = he.timers;
            for (ct = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), ct = void 0
        }, he.fx.timer = function (e) {
            he.timers.push(e), he.fx.start()
        }, he.fx.interval = 13, he.fx.start = function () {
            ut || (ut = !0, M())
        }, he.fx.stop = function () {
            ut = null
        }, he.fx.speeds = {slow: 600, fast: 200, _default: 400}, he.fn.delay = function (t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(o)
                }
            })
        }, function () {
            var e = ne.createElement("input"), t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
        var pt, ht = he.expr.attrHandle;
        he.fn.extend({
            attr: function (e, t) {
                return $e(this, he.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    he.removeAttr(this, e)
                })
            }
        }), he.extend({
            attr: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!pe.radioValue && "radio" === t && o(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, i = 0, o = t && t.match(Ee);
                if (o && 1 === e.nodeType)for (; n = o[i++];)e.removeAttribute(n)
            }
        }), pt = {
            set: function (e, t, n) {
                return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || he.find.attr;
            ht[t] = function (e, t, i) {
                var o, r, s = t.toLowerCase();
                return i || (r = ht[s], ht[s] = o, o = null != n(e, t, i) ? s : null, ht[s] = r), o
            }
        });
        var gt = /^(?:input|select|textarea|button)$/i, vt = /^(?:a|area)$/i;
        he.fn.extend({
            prop: function (e, t) {
                return $e(this, he.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[he.propFix[e] || e]
                })
            }
        }), he.extend({
            prop: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = he.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), pe.optSelected || (he.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            he.propFix[this.toLowerCase()] = this
        }), he.fn.extend({
            addClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (he.isFunction(e))return this.each(function (t) {
                    he(this).addClass(e.call(this, t, Q(this)))
                });
                if ("string" == typeof e && e)for (t = e.match(Ee) || []; n = this[l++];)if (o = Q(n), i = 1 === n.nodeType && " " + X(o) + " ") {
                    for (s = 0; r = t[s++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    a = X(i), o !== a && n.setAttribute("class", a)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (he.isFunction(e))return this.each(function (t) {
                    he(this).removeClass(e.call(this, t, Q(this)))
                });
                if (!arguments.length)return this.attr("class", "");
                if ("string" == typeof e && e)for (t = e.match(Ee) || []; n = this[l++];)if (o = Q(n), i = 1 === n.nodeType && " " + X(o) + " ") {
                    for (s = 0; r = t[s++];)for (; i.indexOf(" " + r + " ") > -1;)i = i.replace(" " + r + " ", " ");
                    a = X(i), o !== a && n.setAttribute("class", a)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
                    he(this).toggleClass(e.call(this, n, Q(this), t), t)
                }) : this.each(function () {
                    var t, i, o, r;
                    if ("string" === n)for (i = 0, o = he(this), r = e.match(Ee) || []; t = r[i++];)o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || (t = Q(this), t && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ie.get(this, "__className__") || ""))
                })
            }, hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)if (1 === n.nodeType && (" " + X(Q(n)) + " ").indexOf(t) > -1)return !0;
                return !1
            }
        });
        he.fn.extend({
            val: function (e) {
                var t, n, i, o = this[0];
                {
                    if (arguments.length)return i = he.isFunction(e), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, he(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = he.map(o, function (e) {
                                return null == e ? "" : e + ""
                            })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o)return (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)
                }
            }
        }), he.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = he.find.attr(e, "value");
                        return null != t ? t : X(he.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, n, i, r = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [],
                            c = a ? s + 1 : r.length;
                        for (i = s < 0 ? c : a ? s : 0; i < c; i++)if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), a)return t;
                            l.push(t)
                        }
                        return l
                    }, set: function (e, t) {
                        for (var n, i, o = e.options, r = he.makeArray(t), s = o.length; s--;)i = o[s], (i.selected = he.inArray(he.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), he.each(["radio", "checkbox"], function () {
            he.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))return e.checked = he.inArray(he(e).val(), t) > -1
                }
            }, pe.checkOn || (he.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var mt = /^(?:focusinfocus|focusoutblur)$/;
        he.extend(he.event, {
            trigger: function (t, n, i, o) {
                var r, s, a, l, c, u, f, d = [i || ne], p = ue.call(t, "type") ? t.type : t,
                    h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = a = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !mt.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[p] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                    if (!o && !f.noBubble && !he.isWindow(i)) {
                        for (l = f.delegateType || p, mt.test(l + p) || (s = s.parentNode); s; s = s.parentNode)d.push(s), a = s;
                        a === (i.ownerDocument || ne) && d.push(a.defaultView || a.parentWindow || e)
                    }
                    for (r = 0; (s = d[r++]) && !t.isPropagationStopped();)t.type = r > 1 ? l : f.bindType || p, u = (Ie.get(s, "events") || {})[t.type] && Ie.get(s, "handle"), u && u.apply(s, n), (u = c && s[c]) && u.apply && Ne(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
                    return t.type = p, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Ne(i) || c && he.isFunction(i[p]) && !he.isWindow(i) && (a = i[c], a && (i[c] = null), he.event.triggered = p, i[p](), he.event.triggered = void 0, a && (i[c] = a)), t.result
                }
            }, simulate: function (e, t, n) {
                var i = he.extend(new he.Event, n, {type: e, isSimulated: !0});
                he.event.trigger(i, null, t)
            }
        }), he.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    he.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n)return he.event.trigger(e, t, n, !0)
            }
        }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            he.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), he.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                he.event.simulate(t, e.target, he.event.fix(e))
            };
            he.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = Ie.access(i, t);
                    o || i.addEventListener(e, n, !0), Ie.access(i, t, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = Ie.access(i, t) - 1;
                    o ? Ie.access(i, t, o) : (i.removeEventListener(e, n, !0), Ie.remove(i, t))
                }
            }
        });
        var yt = e.location, bt = he.now(), wt = /\?/;
        he.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t)return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (e) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
        };
        var xt = /\[\]$/, Tt = /^(?:submit|button|image|reset|file)$/i, Ct = /^(?:input|select|textarea|keygen)/i;
        he.param = function (e, t) {
            var n, i = [], o = function (e, t) {
                var n = he.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
                o(this.name, this.value)
            }); else for (n in e)Y(n, e[n], t, o);
            return i.join("&")
        }, he.fn.extend({
            serialize: function () {
                return he.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = he.prop(this, "elements");
                    return e ? he.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !he(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(e) && (this.checked || !Be.test(e))
                }).map(function (e, t) {
                    var n = he(this).val();
                    return null == n ? null : Array.isArray(n) ? he.map(n, function (e) {
                        return {name: t.name, value: e.replace(/\r?\n/g, "\r\n")}
                    }) : {name: t.name, value: n.replace(/\r?\n/g, "\r\n")}
                }).get()
            }
        });
        var St = /^(.*?):[ \t]*([^\r\n]*)$/gm, kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Et = /^(?:GET|HEAD)$/, At = {}, Dt = {}, $t = "*/".concat("*"), Nt = ne.createElement("a");
        Nt.href = yt.href, he.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: yt.href,
                type: "GET",
                isLocal: kt.test(yt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? J(J(e, he.ajaxSettings), t) : J(he.ajaxSettings, e)
            },
            ajaxPrefilter: G(At),
            ajaxTransport: G(Dt),
            ajax: function (t, n) {
                function i(t, n, i, a) {
                    var c, d, p, w, x, T = n;
                    u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (w = Z(h, C, i)), w = ee(h, w, C, c), c ? (h.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (he.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (he.etag[r] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, d = w.data, p = w.error, c = !p)) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", c ? m.resolveWith(g, [d, T, C]) : m.rejectWith(g, [C, T, p]), C.statusCode(b), b = void 0, f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? d : p]), y.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var o, r, s, a, l, c, u, f, d, p, h = he.ajaxSetup({}, n), g = h.context || h,
                    v = h.context && (g.nodeType || g.jquery) ? he(g) : he.event, m = he.Deferred(),
                    y = he.Callbacks("once memory"), b = h.statusCode || {}, w = {}, x = {}, T = "canceled", C = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!a)for (a = {}; t = St.exec(s);)a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        }, getAllResponseHeaders: function () {
                            return u ? s : null
                        }, setRequestHeader: function (e, t) {
                            return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                        }, overrideMimeType: function (e) {
                            return null == u && (h.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e)if (u) C.always(e[C.status]); else for (t in e)b[t] = [b[t], e[t]];
                            return this
                        }, abort: function (e) {
                            var t = e || T;
                            return o && o.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(C), h.url = ((t || h.url || yt.href) + "").replace(/^\/\//, yt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ee) || [""], null == h.crossDomain) {
                    c = ne.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = Nt.protocol + "//" + Nt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), K(At, h, n, C), u)return C;
                f = he.event && h.global, f && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Et.test(h.type), r = h.url.replace(/#.*$/, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(/%20/g, "+")) : (p = h.url.slice(r.length), h.data && (r += (wt.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(/([?&])_=[^&]*/, "$1"), p = (wt.test(r) ? "&" : "?") + "_=" + bt++ + p), h.url = r + p), h.ifModified && (he.lastModified[r] && C.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && C.setRequestHeader("If-None-Match", he.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
                for (d in h.headers)C.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || u))return C.abort();
                if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), o = K(Dt, h, n, C)) {
                    if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), u)return C;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        u = !1, o.send(w, i)
                    } catch (e) {
                        if (u)throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function (e, t, n) {
                return he.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return he.get(e, void 0, t, "script")
            }
        }), he.each(["get", "post"], function (e, t) {
            he[t] = function (e, n, i, o) {
                return he.isFunction(n) && (o = o || i, i = n, n = void 0), he.ajax(he.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, he.isPlainObject(e) && e))
            }
        }), he._evalUrl = function (e) {
            return he.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, he.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                    return e
                }).append(this)), this
            }, wrapInner: function (e) {
                return he.isFunction(e) ? this.each(function (t) {
                    he(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = he(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = he.isFunction(e);
                return this.each(function (n) {
                    he(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    he(this).replaceWith(this.childNodes)
                }), this
            }
        }), he.expr.pseudos.hidden = function (e) {
            return !he.expr.pseudos.visible(e)
        }, he.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, he.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest
            } catch (e) {
            }
        };
        var It = {0: 200, 1223: 204}, Lt = he.ajaxSettings.xhr();
        pe.cors = !!Lt && "withCredentials" in Lt, pe.ajax = Lt = !!Lt, he.ajaxTransport(function (t) {
            var n, i;
            if (pe.cors || Lt && !t.crossDomain)return {
                send: function (o, r) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (s in t.xhrFields)a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o)a.setRequestHeader(s, o[s]);
                    n = function (e) {
                        return function () {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(It[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && e.setTimeout(function () {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)throw e
                    }
                }, abort: function () {
                    n && n()
                }
            }
        }), he.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), he.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return he.globalEval(e), e
                }
            }
        }), he.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), he.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        t = he("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), ne.head.appendChild(t[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Ot = [], jt = /(=)\?(?=&|$)|\?\?/;
        he.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Ot.pop() || he.expando + "_" + bt++;
                return this[e] = !0, e
            }
        }), he.ajaxPrefilter("json jsonp", function (t, n, i) {
            var o, r, s,
                a = !1 !== t.jsonp && (jt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(jt, "$1" + o) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
                return s || he.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
                s = arguments
            }, i.always(function () {
                void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ot.push(o)), s && he.isFunction(r) && r(s[0]), s = r = void 0
            }), "script"
        }), pe.createHTMLDocument = function () {
            var e = ne.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), he.parseHTML = function (e, t, n) {
            if ("string" != typeof e)return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, o, r;
            return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), o = we.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = w([e], t, r), r && r.length && he(r).remove(), he.merge([], o.childNodes))
        }, he.fn.load = function (e, t, n) {
            var i, o, r, s = this, a = e.indexOf(" ");
            return a > -1 && (i = X(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && he.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                r = arguments, s.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                    s.each(function () {
                        n.apply(this, r || [e.responseText, t, e])
                    })
                }), this
        }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            he.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), he.expr.pseudos.animated = function (e) {
            return he.grep(he.timers, function (t) {
                return e === t.elem
            }).length
        }, he.offset = {
            setOffset: function (e, t, n) {
                var i, o, r, s, a, l, c, u = he.css(e, "position"), f = he(e), d = {};
                "static" === u && (e.style.position = "relative"), a = f.offset(), r = he.css(e, "top"), l = he.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = f.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : f.css(d)
            }
        }, he.fn.extend({
            offset: function (e) {
                if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                    he.offset.setOffset(this, e, t)
                });
                var t, n, i, o, r = this[0];
                if (r)return r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, {
                    top: i.top + o.pageYOffset - n.clientTop,
                    left: i.left + o.pageXOffset - n.clientLeft
                }) : {top: 0, left: 0}
            }, position: function () {
                if (this[0]) {
                    var e, t, n = this[0], i = {top: 0, left: 0};
                    return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (i = e.offset()), i = {
                        top: i.top + he.css(e[0], "borderTopWidth", !0),
                        left: i.left + he.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - i.top - he.css(n, "marginTop", !0),
                        left: t.left - i.left - he.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === he.css(e, "position");)e = e.offsetParent;
                    return e || Ve
                })
            }
        }), he.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = "pageYOffset" === t;
            he.fn[e] = function (i) {
                return $e(this, function (e, i, o) {
                    var r;
                    if (he.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o)return r ? r[t] : e[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                }, e, i, arguments.length)
            }
        }), he.each(["top", "left"], function (e, t) {
            he.cssHooks[t] = O(pe.pixelPosition, function (e, n) {
                if (n)return n = L(e, t), tt.test(n) ? he(e).position()[t] + "px" : n
            })
        }), he.each({Height: "height", Width: "width"}, function (e, t) {
            he.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                he.fn[i] = function (o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return $e(this, function (t, n, o) {
                        var r;
                        return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? he.css(t, n, a) : he.style(t, n, o, a)
                    }, t, s ? o : void 0, s)
                }
            })
        }), he.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), he.holdReady = function (e) {
            e ? he.readyWait++ : he.ready(!0)
        }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function () {
            return he
        });
        var Rt = e.jQuery, Ht = e.$;
        return he.noConflict = function (t) {
            return e.$ === he && (e.$ = Ht), t && e.jQuery === he && (e.jQuery = Rt), he
        }, t || (e.jQuery = e.$ = he), he
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), function (e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)if (void 0 !== e.style[n])return {end: t[n]};
        return !1
    }

    e.fn.emulateTransitionEnd = function (t) {
        var n = !1, i = this;
        e(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t), this
    }, e(function () {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function (t) {
                if (e(t.target).is(this))return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var n = e(this), o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (t) {
        e(t).on("click", n, this.close)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function (t) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }

        var o = e(this), r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e("#" === r ? [] : r);
        t && t.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function () {
        return e.fn.alert = o, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.button"), r = "object" == typeof t && t;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }

    var n = function (t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (t) {
        var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", r = i.data();
        t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function () {
            i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var e = !0, t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function () {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = e(n.target).closest(".btn");
        t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                s = "string" == typeof t ? t : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }

    var n = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function (e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap)return t;
        var i = "prev" == e ? -1 : 1, o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (e) {
        var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0))return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        if (!this.sliding)return this.slide("next")
    }, n.prototype.prev = function () {
        if (!this.sliding)return this.slide("prev")
    }, n.prototype.slide = function (t, i) {
        var o = this.$element.find(".item.active"), r = i || this.getItemForDirection(t, o), s = this.interval,
            a = "next" == t ? "left" : "right", l = this;
        if (r.hasClass("active"))return this.sliding = !1;
        var c = r[0], u = e.Event("slide.bs.carousel", {relatedTarget: c, direction: a});
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = e(this.$indicators.children()[this.getItemIndex(r)]);
                f && f.addClass("active")
            }
            var d = e.Event("slid.bs.carousel", {relatedTarget: c, direction: a});
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function () {
                r.removeClass([t, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = i, this
    };
    var o = function (n) {
        var i, o = e(this), r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = e.extend({}, r.data(), o.data()), a = o.attr("data-slide-to");
            a && (s.interval = !1), t.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), function (e) {
    "use strict";
    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function () {
            var n = e(this), o = n.data("bs.collapse"),
                r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
        })
    }

    var i = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing")
            ;
            if (!(o && o.length && (t = o.data("bs.collapse")) && t.transitioning)) {
                var r = e.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition)return a.call(this);
                    var l = e.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!e.support.transition)return o.call(this);
                this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (n, i) {
            var o = e(i);
            this.addAriaAndCollapsedClass(t(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = o, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = e(this);
        o.attr("data-target") || i.preventDefault();
        var r = t(o), s = r.data("bs.collapse"), a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), function (e) {
    "use strict";
    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(o).remove(), e(r).each(function () {
            var i = e(this), o = t(i), r = {relatedTarget: this};
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(t) {
        return this.each(function () {
            var n = e(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
        })
    }

    var o = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', s = function (t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.7", s.prototype.toggle = function (i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var r = t(o), s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var a = {relatedTarget: this};
                if (r.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = t(i), s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = o.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = a, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), function (e) {
    "use strict";
    function t(t, i) {
        return this.each(function () {
            var o = e(this), r = o.data("bs.modal"), s = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof t ? r[t](i) : s.show && r.show(i)
        })
    }

    var n = function (t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function (t) {
        var i = this, o = e.Event("show.bs.modal", {relatedTarget: t});
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = e.Event("shown.bs.modal", {relatedTarget: t});
            o ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (t) {
        var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                    if (this.ignoreBackdropClick)return void(this.ignoreBackdropClick = !1);
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else t && t()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = e(this), o = i.attr("href"), r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : e.extend({remote: !/#/.test(o) && o}, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(r, s, this)
    })
}(jQuery), function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.tooltip"), r = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }

    var n = function (e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function () {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function (e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var e in this.inState)if (this.inState[e])return !0;
        return !1
    }, n.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
            if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide)return n.hide();
            n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }, n.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i)return;
            var o = this, r = this.tip(), s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i, c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(), f = r[0].offsetWidth, d = r[0].offsetHeight;
            if (c) {
                var p = a, h = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + d > h.bottom ? "top" : "top" == a && u.top - d < h.top ? "bottom" : "right" == a && u.right + f > h.width ? "left" : "left" == a && u.left - f < h.left ? "right" : a, r.removeClass(p).addClass(a)
            }
            var g = this.getCalculatedOffset(a, u, f, d);
            this.applyPlacement(g, a);
            var v = function () {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function (t, n) {
        var i = this.tip(), o = i[0].offsetWidth, r = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, e.offset.setOffset(i[0], e.extend({
            using: function (e) {
                i.css({top: Math.round(e.top), left: Math.round(e.left)})
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth, c = i[0].offsetHeight;
        "top" == n && c != r && (t.top = t.top + r - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var f = /top|bottom/.test(n), d = f ? 2 * u.left - o + l : 2 * u.top - r + c,
            p = f ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(d, i[0][p], f)
    }, n.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (t) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
        }

        var o = this, r = e(this.$tip), s = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented())return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (t) {
        t = t || this.$element;
        var n = t[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
        var r = window.SVGElement && n instanceof window.SVGElement, s = i ? {top: 0, left: 0} : r ? null : t.offset(),
            a = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()},
            l = i ? {width: e(window).width(), height: e(window).height()} : null;
        return e.extend({}, o, a, l, s)
    }, n.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {top: t.top + t.height / 2 - i / 2, left: t.left - n} : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
        var o = {top: 0, left: 0};
        if (!this.$viewport)return o;
        var r = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - r - s.scroll, l = t.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = t.left - r, u = t.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
        }
        return o
    }, n.prototype.getTitle = function () {
        var e = this.$element, t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }, n.prototype.getUID = function (e) {
        do {
            e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (t) {
        var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout), this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = i, this
    }
}(jQuery), function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.popover"), r = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }

    var n = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function () {
        return e.fn.popover = i, this
    }
}(jQuery), function (e) {
    "use strict";
    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.scrollspy"), r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }

    t.VERSION = "3.3.7", t.DEFAULTS = {offset: 10}, t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function () {
        var t = this, n = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var t = e(this), o = t.data("target") || t.attr("href"), r = /^#./.test(o) && e(o);
            return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i)return s != (e = r[r.length - 1]) && this.activate(e);
        if (s && t < o[0])return this.activeTarget = null, this.clear();
        for (e = o.length; e--;)s != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function (t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function () {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
        })
    }

    var n = function (t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"), r = e.Event("hide.bs.tab", {relatedTarget: t[0]}),
                s = e.Event("show.bs.tab", {relatedTarget: o[0]});
            if (o.trigger(r), t.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.closest("li"), n), this.activate(a, a.parent(), function () {
                    o.trigger({type: "hidden.bs.tab", relatedTarget: t[0]}), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (t, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }

        var s = i.find("> .active"),
            a = o && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
        return e.fn.tab = i, this
    };
    var o = function (n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), function (e) {
    "use strict";
    function t(t) {
        return this.each(function () {
            var i = e(this), o = i.data("bs.affix"), r = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
        })
    }

    var n = function (t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (e, t, n, i) {
        var o = this.$target.scrollTop(), r = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed)return o < n && "top";
        if ("bottom" == this.affixed)return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= e - i) && "bottom";
        var a = null == this.affixed, l = a ? o : r.top, c = a ? s : t;
        return null != n && o <= n ? "top" : null != i && l + c >= e - i && "bottom"
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(), t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(), i = this.options.offset, o = i.top, r = i.bottom,
                s = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, t, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented())return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: s - t - r})
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function () {
        return e.fn.affix = i, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var n = e(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return t(n, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = t(require("jquery"), e, e.document, e.Math) : t(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function (e, t, n, i, o) {
    "use strict";
    var r = "fullpage-wrapper", s = "." + r, a = "fp-responsive", l = "fp-notransition", c = "fp-destroyed",
        u = "fp-enabled", f = "fp-viewing", d = "active", p = "." + d, h = "fp-completely", g = "." + h,
        v = "fp-section", m = "." + v, y = m + p, b = m + ":first", w = m + ":last", x = "fp-tableCell", T = "." + x,
        C = "fp-nav", S = "#" + C, k = "fp-tooltip", E = "." + k, A = "fp-slide", D = "." + A, $ = D + p,
        N = "fp-slides", I = "." + N, L = "fp-slidesContainer", O = "." + L, j = "fp-table", R = "fp-slidesNav",
        H = "." + R, q = H + " a", P = ".fp-controlArrow", F = "fp-prev", M = "." + F, B = "fp-controlArrow " + F,
        W = P + M, _ = P + ".fp-next", U = e(t), z = e(n), V = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    e.fn.fullpage = function (M) {
        function Q(t, n) {
            t || zt(0), Gt("autoScrolling", t, n);
            var i = e(y);
            M.autoScrolling && !M.scrollBar ? (Zt.css({
                overflow: "hidden",
                height: "100%"
            }), Y(kn.recordHistory, "internal"), un.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), i.length && zt(i.position().top)) : (Zt.css({
                overflow: "visible",
                height: "initial"
            }), Y(!1, "internal"), un.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), i.length && Zt.scrollTop(i.position().top))
        }

        function Y(e, t) {
            Gt("recordHistory", e, t)
        }

        function G(e, t) {
            Gt("scrollingSpeed", e, t)
        }

        function K(e, t) {
            Gt("fitToSection", e, t)
        }

        function J(e) {
            M.lockAnchors = e
        }

        function Z(e) {
            e ? (Pt(), Ft()) : (qt(), Mt())
        }

        function ee(t, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
                Xt(t, n, "m")
            })) : t ? (Z(!0), Bt()) : (Z(!1), Wt())
        }

        function te(t, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
                Xt(t, n, "k")
            })) : M.keyboardScrolling = t
        }

        function ne() {
            var t = e(y).prev(m);
            t.length || !M.loopTop && !M.continuousVertical || (t = e(m).last()), t.length && Fe(t, null, !0)
        }

        function ie() {
            var t = e(y).next(m);
            t.length || !M.loopBottom && !M.continuousVertical || (t = e(m).first()), t.length && Fe(t, null, !1)
        }

        function oe(e, t) {
            G(0, "internal"), re(e, t), G(kn.scrollingSpeed, "internal")
        }

        function re(e, t) {
            var n = At(e);
            void 0 !== t ? $t(e, t) : n.length > 0 && Fe(n)
        }

        function se(e) {
            He("right", e)
        }

        function ae(e) {
            He("left", e)
        }

        function le(t) {
            if (!un.hasClass(c)) {
                dn = !0, fn = U.height(), e(m).each(function () {
                    var t = e(this).find(I), n = e(this).find(D);
                    M.verticalCentered && e(this).find(T).css("height", kt(e(this)) + "px"), e(this).css("height", fn + "px"), M.scrollOverflow && (n.length ? n.each(function () {
                        Ct(e(this))
                    }) : Ct(e(this))), n.length > 1 && ut(t, t.find($))
                });
                var n = e(y), i = n.index(m);
                i && oe(i + 1), dn = !1, e.isFunction(M.afterResize) && t && M.afterResize.call(un), e.isFunction(M.afterReBuild) && !t && M.afterReBuild.call(un)
            }
        }

        function ce(t) {
            var n = en.hasClass(a);
            t ? n || (Q(!1, "internal"), K(!1, "internal"), e(S).hide(), en.addClass(a), e.isFunction(M.afterResponsive) && M.afterResponsive.call(un, t)) : n && (Q(kn.autoScrolling, "internal"), K(kn.autoScrolling, "internal"), e(S).show(), en.removeClass(a), e.isFunction(M.afterResponsive) && M.afterResponsive.call(un, t))
        }

        function ue() {
            var t = un.find(M.sectionSelector);
            M.anchors.length || (M.anchors = t.filter("[data-anchor]").map(function () {
                return e(this).data("anchor").toString()
            }).get()), M.navigationTooltips.length || (M.navigationTooltips = t.filter("[data-tooltip]").map(function () {
                return e(this).data("tooltip").toString()
            }).get())
        }

        function fe() {
            un.css({
                height: "100%",
                position: "relative"
            }), un.addClass(r), e("html").addClass(u), fn = U.height(), un.removeClass(c), ge(), e(m).each(function (t) {
                var n = e(this), i = n.find(D), o = i.length;
                pe(n, t), he(n, t), o > 0 ? de(n, i, o) : M.verticalCentered && St(n)
            }), M.fixedElements && M.css3 && e(M.fixedElements).appendTo(en), M.navigation && me(), be(), M.scrollOverflow ? ("complete" === n.readyState && ye(), U.on("load", ye)) : Te()
        }

        function de(t, n, i) {
            var o = 100 * i, r = 100 / i;
            n.wrapAll('<div class="' + L + '" />'), n.parent().wrap('<div class="' + N + '" />'), t.find(O).css("width", o + "%"), i > 1 && (M.controlArrows && ve(t), M.slidesNavigation && It(t, i)), n.each(function (t) {
                e(this).css("width", r + "%"), M.verticalCentered && St(e(this))
            });
            var s = t.find($);
            s.length && (0 !== e(y).index(m) || 0 === e(y).index(m) && 0 !== s.index()) ? Ut(s, "internal") : n.eq(0).addClass(d)
        }

        function pe(t, n) {
            n || 0 !== e(y).length || t.addClass(d), sn = e(y), t.css("height", fn + "px"), M.paddingTop && t.css("padding-top", M.paddingTop), M.paddingBottom && t.css("padding-bottom", M.paddingBottom), void 0 !== M.sectionsColor[n] && t.css("background-color", M.sectionsColor[n]), void 0 !== M.anchors[n] && t.attr("data-anchor", M.anchors[n])
        }

        function he(t, n) {
            void 0 !== M.anchors[n] && t.hasClass(d) && wt(M.anchors[n], n), M.menu && M.css3 && e(M.menu).closest(s).length && e(M.menu).appendTo(en)
        }

        function ge() {
            un.find(M.sectionSelector).addClass(v), un.find(M.slideSelector).addClass(A)
        }

        function ve(e) {
            e.find(I).after('<div class="' + B + '"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != M.controlArrowColor && (e.find(_).css("border-color", "transparent transparent transparent " + M.controlArrowColor), e.find(W).css("border-color", "transparent " + M.controlArrowColor + " transparent transparent")), M.loopHorizontal || e.find(W).hide()
        }

        function me() {
            en.append('<div id="' + C + '"><ul></ul></div>');
            var t = e(S);
            t.addClass(function () {
                return M.showActiveTooltip ? "fp-show-active " + M.navigationPosition : M.navigationPosition
            });
            for (var n = 0; n < e(m).length; n++) {
                var i = "";
                M.anchors.length && (i = M.anchors[n]);
                var o = '<li><a href="#' + i + '"><span></span></a>', r = M.navigationTooltips[n];
                void 0 !== r && "" !== r && (o += '<div class="' + k + " " + M.navigationPosition + '">' + r + "</div>"), o += "</li>", t.find("ul").append(o)
            }
            e(S).css("margin-top", "-" + e(S).height() / 2 + "px"), e(S).find("li").eq(e(y).index(m)).find("a").addClass(d)
        }

        function ye() {
            e(m).each(function () {
                var t = e(this).find(D);
                t.length ? t.each(function () {
                    Ct(e(this))
                }) : Ct(e(this))
            }), Te()
        }

        function be() {
            un.find('iframe[src*="youtube.com/embed/"]').each(function () {
                we(e(this), "enablejsapi=1")
            })
        }

        function we(e, t) {
            var n = e.attr("src");
            e.attr("src", n + xe(n) + t)
        }

        function xe(e) {
            return /\?/.test(e) ? "&" : "?"
        }

        function Te() {
            var t = e(y);
            t.addClass(h), M.scrollOverflowHandler.afterRender && M.scrollOverflowHandler.afterRender(t), Ve(t), Xe(t), M.scrollOverflowHandler.afterLoad(), Ce() && e.isFunction(M.afterLoad) && M.afterLoad.call(t, t.data("anchor"), t.index(m) + 1), e.isFunction(M.afterRender) && M.afterRender.call(un)
        }

        function Ce() {
            var e = t.location.hash.replace("#", "").split("/"), n = At(decodeURIComponent(e[0]));
            return !n.length || n.length && n.index() === sn.index()
        }

        function Se() {
            var t;
            if (!M.autoScrolling || M.scrollBar) {
                var i = U.scrollTop(), o = Ae(i), r = 0, s = i + U.height() / 2, a = en.height() - U.height() === i,
                    l = n.querySelectorAll(m);
                if (a) r = l.length - 1; else if (i)for (var c = 0; c < l.length; ++c) {
                    var u = l[c];
                    u.offsetTop <= s && (r = c)
                } else r = 0;
                if (Ee(o) && (e(y).hasClass(h) || e(y).addClass(h).siblings().removeClass(h)), t = e(l).eq(r), !t.hasClass(d)) {
                    En = !0;
                    var f, p, g = e(y), v = g.index(m) + 1, b = xt(t), w = t.data("anchor"), x = t.index(m) + 1,
                        T = t.find($);
                    T.length && (p = T.data("anchor"), f = T.index()), hn && (t.addClass(d).siblings().removeClass(d), e.isFunction(M.onLeave) && M.onLeave.call(g, v, x, b), e.isFunction(M.afterLoad) && M.afterLoad.call(t, w, x), Ye(g), Ve(t), Xe(t), wt(w, x - 1), M.anchors.length && (nn = w), Lt(f, p, w, x)), clearTimeout(wn), wn = setTimeout(function () {
                        En = !1
                    }, 100)
                }
                M.fitToSection && (clearTimeout(xn), xn = setTimeout(function () {
                    M.fitToSection && ke()
                }, M.fitToSectionDelay))
            }
        }

        function ke() {
            hn && (dn = !0, Fe(e(y)), dn = !1)
        }

        function Ee(t) {
            var n = e(y).position().top, i = n + U.height();
            return "up" == t ? i >= U.scrollTop() + U.height() : n <= U.scrollTop()
        }

        function Ae(e) {
            var t = e > An ? "down" : "up";
            return An = e, On = e, t
        }

        function De(e, t) {
            if (vn.m[e]) {
                var n = "down" === e ? "bottom" : "top", i = "down" === e ? ie : ne;
                if (t.length > 0) {
                    if (!M.scrollOverflowHandler.isScrolled(n, t))return !0;
                    i()
                } else i()
            }
        }

        function $e(e) {
            var t = e.originalEvent;
            !Ie(e.target) && M.autoScrolling && Le(t) && e.preventDefault()
        }

        function Ne(t) {
            var n = t.originalEvent, o = e(n.target).closest(m);
            if (!Ie(t.target) && Le(n)) {
                M.autoScrolling && t.preventDefault();
                var r = M.scrollOverflowHandler.scrollable(o), s = _t(n);
                Nn = s.y, In = s.x, o.find(I).length && i.abs($n - In) > i.abs(Dn - Nn) ? !an && i.abs($n - In) > U.outerWidth() / 100 * M.touchSensitivity && ($n > In ? vn.m.right && se(o) : vn.m.left && ae(o)) : M.autoScrolling && hn && i.abs(Dn - Nn) > U.height() / 100 * M.touchSensitivity && (Dn > Nn ? De("down", r) : Nn > Dn && De("up", r))
            }
        }

        function Ie(t, n) {
            n = n || 0;
            var i = e(t).parent();
            return !!(n < M.normalScrollElementTouchThreshold && i.is(M.normalScrollElements)) || n != M.normalScrollElementTouchThreshold && Ie(i, ++n)
        }

        function Le(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }

        function Oe(e) {
            var t = e.originalEvent;
            if (M.fitToSection && Zt.stop(), Le(t)) {
                var n = _t(t);
                Dn = n.y, $n = n.x
            }
        }

        function je(e, t) {
            for (var n = 0, o = e.slice(i.max(e.length - t, 1)), r = 0; r < o.length; r++)n += o[r];
            return i.ceil(n / t)
        }

        function Re(n) {
            var o = (new Date).getTime(), r = e(g).hasClass("fp-normal-scroll");
            if (M.autoScrolling && !rn && !r) {
                n = n || t.event;
                var s = n.wheelDelta || -n.deltaY || -n.detail, a = i.max(-1, i.min(1, s)),
                    l = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                    c = i.abs(n.wheelDeltaX) < i.abs(n.wheelDelta) || i.abs(n.deltaX) < i.abs(n.deltaY) || !l;
                gn.length > 149 && gn.shift(), gn.push(i.abs(s)), M.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                var u = e(y), f = M.scrollOverflowHandler.scrollable(u), d = o - Ln;
                return Ln = o, d > 200 && (gn = []), hn && je(gn, 10) >= je(gn, 70) && c && (a < 0 ? De("down", f) : De("up", f)), !1
            }
            M.fitToSection && Zt.stop()
        }

        function He(t, n) {
            var i = void 0 === n ? e(y) : n, o = i.find(I), r = o.find(D).length;
            if (!(!o.length || an || r < 2)) {
                var s = o.find($), a = null;
                if (a = "left" === t ? s.prev(D) : s.next(D), !a.length) {
                    if (!M.loopHorizontal)return;
                    a = "left" === t ? s.siblings(":last") : s.siblings(":first")
                }
                an = !0, ut(o, a, t)
            }
        }

        function qe() {
            e($).each(function () {
                Ut(e(this), "internal")
            })
        }

        function Pe(e) {
            var t = e.position(), n = t.top, i = t.top > On, o = n - fn + e.outerHeight(), r = M.bigSectionsDestination;
            return e.outerHeight() > fn ? (i || r) && "bottom" !== r || (n = o) : (i || dn && e.is(":last-child")) && (n = o), On = n, n
        }

        function Fe(t, n, i) {
            if (void 0 !== t) {
                var o, r, s = Pe(t), a = {
                    element: t,
                    callback: n,
                    isMovementUp: i,
                    dtop: s,
                    yMovement: xt(t),
                    anchorLink: t.data("anchor"),
                    sectionIndex: t.index(m),
                    activeSlide: t.find($),
                    activeSection: e(y),
                    leavingSection: e(y).index(m) + 1,
                    localIsResizing: dn
                };
                a.activeSection.is(t) && !dn || M.scrollBar && U.scrollTop() === a.dtop && !t.hasClass("fp-auto-height") || (a.activeSlide.length && (o = a.activeSlide.data("anchor"), r = a.activeSlide.index()), M.autoScrolling && M.continuousVertical && void 0 !== a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = We(a)), e.isFunction(M.onLeave) && !a.localIsResizing && !1 === M.onLeave.call(a.activeSection, a.leavingSection, a.sectionIndex + 1, a.yMovement) || (a.localIsResizing || Ye(a.activeSection), M.scrollOverflowHandler.beforeLeave(), t.addClass(d).siblings().removeClass(d), Ve(t), M.scrollOverflowHandler.onLeave(), hn = !1, Lt(r, o, a.anchorLink, a.sectionIndex), Me(a), nn = a.anchorLink, wt(a.anchorLink, a.sectionIndex)))
            }
        }

        function Me(t) {
            if (M.css3 && M.autoScrolling && !M.scrollBar) Et("translate3d(0px, -" + i.round(t.dtop) + "px, 0px)", !0), M.scrollingSpeed ? (clearTimeout(yn), yn = setTimeout(function () {
                Ue(t)
            }, M.scrollingSpeed)) : Ue(t); else {
                var n = Be(t);
                e(n.element).animate(n.options, M.scrollingSpeed, M.easing).promise().done(function () {
                    M.scrollBar ? setTimeout(function () {
                        Ue(t)
                    }, 30) : Ue(t)
                })
            }
        }

        function Be(e) {
            var t = {};
            return M.autoScrolling && !M.scrollBar ? (t.options = {top: -e.dtop}, t.element = s) : (t.options = {scrollTop: e.dtop}, t.element = "html, body"), t
        }

        function We(t) {
            return t.isMovementUp ? e(y).before(t.activeSection.nextAll(m)) : e(y).after(t.activeSection.prevAll(m).get().reverse()), zt(e(y).position().top), qe(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.position().top, t.yMovement = xt(t.element), t
        }

        function _e(t) {
            t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(b).before(t.wrapAroundElements) : e(w).after(t.wrapAroundElements), zt(e(y).position().top), qe())
        }

        function Ue(t) {
            _e(t), e.isFunction(M.afterLoad) && !t.localIsResizing && M.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), M.scrollOverflowHandler.afterLoad(), t.localIsResizing || Xe(t.element), t.element.addClass(h).siblings().removeClass(h), hn = !0, e.isFunction(t.callback) && t.callback.call(this)
        }

        function ze(e, t) {
            e.attr(t, e.data(t)).removeAttr("data-" + t)
        }

        function Ve(t) {
            if (M.lazyLoading) {
                var n;
                Ge(t).find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                    n = e(this), e.each(["src", "srcset"], function (e, t) {
                        var i = n.attr("data-" + t);
                        void 0 !== i && i && ze(n, t)
                    }), n.is("source") && n.closest("video").get(0).load()
                })
            }
        }

        function Xe(t) {
            var n = Ge(t);
            n.find("video, audio").each(function () {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && Qe(t), t.onload = function () {
                    t.hasAttribute("data-autoplay") && Qe(t)
                }
            })
        }

        function Qe(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function Ye(t) {
            var n = Ge(t);
            n.find("video, audio").each(function () {
                var t = e(this).get(0);
                t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var t = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !t.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function Ge(t) {
            var n = t.find($);
            return n.length && (t = e(n)), t
        }

        function Ke() {
            var e = t.location.hash.replace("#", "").split("/"), n = decodeURIComponent(e[0]),
                i = decodeURIComponent(e[1]);
            n && (M.animateAnchor ? $t(n, i) : oe(n, i))
        }

        function Je() {
            if (!En && !M.lockAnchors) {
                var e = t.location.hash.replace("#", "").split("/"), n = decodeURIComponent(e[0]),
                    i = decodeURIComponent(e[1]), o = void 0 === nn, r = void 0 === nn && void 0 === i && !an;
                n.length && (n && n !== nn && !o || r || !an && on != i) && $t(n, i)
            }
        }

        function Ze(t) {
            clearTimeout(Tn);
            var n = e(":focus");
            if (!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && M.keyboardScrolling && M.autoScrolling) {
                var i = t.which, o = [40, 38, 32, 33, 34];
                e.inArray(i, o) > -1 && t.preventDefault(), rn = t.ctrlKey, Tn = setTimeout(function () {
                    lt(t)
                }, 150)
            }
        }

        function et() {
            e(this).prev().trigger("click")
        }

        function tt(e) {
            pn && (rn = e.ctrlKey)
        }

        function nt(e) {
            2 == e.which && (jn = e.pageY, un.on("mousemove", ct))
        }

        function it(e) {
            2 == e.which && un.off("mousemove")
        }

        function ot() {
            var t = e(this).closest(m);
            e(this).hasClass(F) ? vn.m.left && ae(t) : vn.m.right && se(t)
        }

        function rt() {
            pn = !1, rn = !1
        }

        function st(t) {
            t.preventDefault();
            var n = e(this).parent().index();
            Fe(e(m).eq(n))
        }

        function at(t) {
            t.preventDefault();
            var n = e(this).closest(m).find(I);
            ut(n, n.find(D).eq(e(this).closest("li").index()))
        }

        function lt(t) {
            var n = t.shiftKey;
            if (hn || !([37, 39].indexOf(t.which) < 0))switch (t.which) {
                case 38:
                case 33:
                    vn.k.up && ne();
                    break;
                case 32:
                    if (n && vn.k.up) {
                        ne();
                        break
                    }
                case 40:
                case 34:
                    vn.k.down && ie();
                    break;
                case 36:
                    vn.k.up && re(1);
                    break;
                case 35:
                    vn.k.down && re(e(m).length);
                    break;
                case 37:
                    vn.k.left && ae();
                    break;
                case 39:
                    vn.k.right && se();
                    break;
                default:
                    return
            }
        }

        function ct(e) {
            hn && (e.pageY < jn && vn.m.up ? ne() : e.pageY > jn && vn.m.down && ie()), jn = e.pageY
        }

        function ut(t, n, i) {
            var o = t.closest(m), r = {
                slides: t,
                destiny: n,
                direction: i,
                destinyPos: n.position(),
                slideIndex: n.index(),
                section: o,
                sectionIndex: o.index(m),
                anchorLink: o.data("anchor"),
                slidesNav: o.find(H),
                slideAnchor: jt(n),
                prevSlide: o.find($),
                prevSlideIndex: o.find($).index(),
                localIsResizing: dn
            };
            if (r.xMovement = Tt(r.prevSlideIndex, r.slideIndex), r.localIsResizing || (hn = !1), M.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && e.isFunction(M.onSlideLeave) && !1 === M.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.xMovement, r.slideIndex))return void(an = !1);
            n.addClass(d).siblings().removeClass(d), r.localIsResizing || (Ye(r.prevSlide), Ve(n)), !M.loopHorizontal && M.controlArrows && (o.find(W).toggle(0 !== r.slideIndex), o.find(_).toggle(!n.is(":last-child"))), o.hasClass(d) && !r.localIsResizing && Lt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), dt(t, r, !0)
        }

        function ft(t) {
            pt(t.slidesNav, t.slideIndex), t.localIsResizing || (e.isFunction(M.afterSlideLoad) && M.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), hn = !0, Xe(t.destiny)), an = !1
        }

        function dt(e, t, n) {
            var o = t.destinyPos;
            if (M.css3) {
                var r = "translate3d(-" + i.round(o.left) + "px, 0px, 0px)";
                vt(e.find(O)).css(Vt(r)), bn = setTimeout(function () {
                    n && ft(t)
                }, M.scrollingSpeed, M.easing)
            } else e.animate({scrollLeft: i.round(o.left)}, M.scrollingSpeed, M.easing, function () {
                n && ft(t)
            })
        }

        function pt(e, t) {
            e.find(p).removeClass(d), e.find("li").eq(t).find("a").addClass(d)
        }

        function ht() {
            if (gt(), ln) {
                var t = e(n.activeElement);
                if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                    var o = U.height();
                    i.abs(o - Rn) > 20 * i.max(Rn, o) / 100 && (le(!0), Rn = o)
                }
            } else clearTimeout(mn), mn = setTimeout(function () {
                le(!0)
            }, 350)
        }

        function gt() {
            var e = M.responsive || M.responsiveWidth, t = M.responsiveHeight, n = e && U.outerWidth() < e,
                i = t && U.height() < t;
            e && t ? ce(n || i) : e ? ce(n) : t && ce(i)
        }

        function vt(e) {
            var t = "all " + M.scrollingSpeed + "ms " + M.easingcss3;
            return e.removeClass(l), e.css({"-webkit-transition": t, transition: t})
        }

        function mt(e) {
            return e.addClass(l)
        }

        function yt(t, n) {
            M.navigation && (e(S).find(p).removeClass(d), t ? e(S).find('a[href="#' + t + '"]').addClass(d) : e(S).find("li").eq(n).find("a").addClass(d))
        }

        function bt(t) {
            M.menu && (e(M.menu).find(p).removeClass(d), e(M.menu).find('[data-menuanchor="' + t + '"]').addClass(d))
        }

        function wt(e, t) {
            bt(e), yt(e, t)
        }

        function xt(t) {
            var n = e(y).index(m), i = t.index(m);
            return n == i ? "none" : n > i ? "up" : "down"
        }

        function Tt(e, t) {
            return e == t ? "none" : e > t ? "left" : "right"
        }

        function Ct(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var t, n = M.scrollOverflowHandler, i = n.wrapContent(), o = e.closest(m), r = n.scrollable(e);
                r.length ? t = n.scrollHeight(e) : (t = e.get(0).scrollHeight, M.verticalCentered && (t = e.find(T).get(0).scrollHeight));
                var s = fn - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
                t > s ? r.length ? n.update(e, s) : (M.verticalCentered ? e.find(T).wrapInner(i) : e.wrapInner(i), n.create(e, s)) : n.remove(e), e.css("overflow", "")
            }
        }

        function St(e) {
            e.hasClass(j) || e.addClass(j).wrapInner('<div class="' + x + '" style="height:' + kt(e) + 'px;" />')
        }

        function kt(e) {
            var t = fn;
            if (M.paddingTop || M.paddingBottom) {
                var n = e;
                n.hasClass(v) || (n = e.closest(m));
                var i = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
                t = fn - i
            }
            return t
        }

        function Et(e, t) {
            t ? vt(un) : mt(un), un.css(Vt(e)), setTimeout(function () {
                un.removeClass(l)
            }, 10)
        }

        function At(t) {
            if (!t)return [];
            var n = un.find(m + '[data-anchor="' + t + '"]');
            return n.length || (n = e(m).eq(t - 1)), n
        }

        function Dt(e, t) {
            var n = t.find(I), i = n.find(D + '[data-anchor="' + e + '"]');
            return i.length || (i = n.find(D).eq(e)), i
        }

        function $t(e, t) {
            var n = At(e);
            n.length && (void 0 === t && (t = 0), e === nn || n.hasClass(d) ? Nt(n, t) : Fe(n, function () {
                Nt(n, t)
            }))
        }

        function Nt(e, t) {
            if (void 0 !== t) {
                var n = e.find(I), i = Dt(t, e);
                i.length && ut(n, i)
            }
        }

        function It(e, t) {
            e.append('<div class="' + R + '"><ul></ul></div>');
            var n = e.find(H);
            n.addClass(M.slidesNavPosition);
            for (var i = 0; i < t; i++)n.find("ul").append('<li><a href="#"><span></span></a></li>');
            n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(d)
        }

        function Lt(e, t, n, i) {
            var o = "";
            M.anchors.length && !M.lockAnchors && (e ? (void 0 !== n && (o = n), void 0 === t && (t = e), on = t, Ot(o + "/" + t)) : void 0 !== e ? (on = t, Ot(n)) : Ot(n)), Rt()
        }

        function Ot(e) {
            if (M.recordHistory) location.hash = e; else if (ln || cn) t.history.replaceState(o, o, "#" + e); else {
                var n = t.location.href.split("#")[0];
                t.location.replace(n + "#" + e)
            }
        }

        function jt(e) {
            var t = e.data("anchor"), n = e.index();
            return void 0 === t && (t = n), t
        }

        function Rt() {
            var t = e(y), n = t.find($), i = jt(t), o = jt(n), r = String(i);
            n.length && (r = r + "-" + o), r = r.replace("/", "-").replace("#", "");
            var s = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
            en[0].className = en[0].className.replace(s, ""), en.addClass(f + "-" + r)
        }

        function Ht() {
            var e, i = n.createElement("p"), r = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            n.body.insertBefore(i, null);
            for (var s in r)i.style[s] !== o && (i.style[s] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(i).getPropertyValue(r[s]));
            return n.body.removeChild(i), e !== o && e.length > 0 && "none" !== e
        }

        function qt() {
            n.addEventListener ? (n.removeEventListener("mousewheel", Re, !1), n.removeEventListener("wheel", Re, !1), n.removeEventListener("MozMousePixelScroll", Re, !1)) : n.detachEvent("onmousewheel", Re)
        }

        function Pt() {
            var e, i = "";
            t.addEventListener ? e = "addEventListener" : (e = "attachEvent", i = "on");
            var r = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== o ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == r ? n[e](i + "MozMousePixelScroll", Re, !1) : n[e](i + r, Re, !1)
        }

        function Ft() {
            un.on("mousedown", nt).on("mouseup", it)
        }

        function Mt() {
            un.off("mousedown", nt).off("mouseup", it)
        }

        function Bt() {
            (ln || cn) && (M.autoScrolling && en.off(Sn.touchmove).on(Sn.touchmove, $e), e(s).off(Sn.touchstart).on(Sn.touchstart, Oe).off(Sn.touchmove).on(Sn.touchmove, Ne))
        }

        function Wt() {
            (ln || cn) && e(s).off(Sn.touchstart).off(Sn.touchmove)
        }

        function _t(e) {
            var t = [];
            return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, cn && Le(e) && M.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
        }

        function Ut(e, t) {
            G(0, "internal"), void 0 !== t && (dn = !0), ut(e.closest(I), e), void 0 !== t && (dn = !1), G(kn.scrollingSpeed, "internal")
        }

        function zt(e) {
            var t = i.round(e);
            M.css3 && M.autoScrolling && !M.scrollBar ? Et("translate3d(0px, -" + t + "px, 0px)", !1) : M.autoScrolling && !M.scrollBar ? un.css("top", -t) : Zt.scrollTop(t)
        }

        function Vt(e) {
            return {"-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e}
        }

        function Xt(e, t, n) {
            switch (t) {
                case"up":
                    vn[n].up = e;
                    break;
                case"down":
                    vn[n].down = e;
                    break;
                case"left":
                    vn[n].left = e;
                    break;
                case"right":
                    vn[n].right = e;
                    break;
                case"all":
                    "m" == n ? ee(e) : te(e)
            }
        }

        function Qt(t) {
            Q(!1, "internal"), ee(!1), te(!1), un.addClass(c), clearTimeout(bn), clearTimeout(yn), clearTimeout(mn), clearTimeout(wn), clearTimeout(xn), U.off("scroll", Se).off("hashchange", Je).off("resize", ht), z.off("click touchstart", S + " a").off("mouseenter", S + " li").off("mouseleave", S + " li").off("click touchstart", q).off("mouseover", M.normalScrollElements).off("mouseout", M.normalScrollElements), e(m).off("click touchstart", P), clearTimeout(bn), clearTimeout(yn), t && Yt()
        }

        function Yt() {
            zt(0), un.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                ze(e(this), "src")
            }), un.find("img[data-srcset]").each(function () {
                ze(e(this), "srcset")
            }), e(S + ", " + H + ", " + P).remove(), e(m).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(D).css({width: ""}), un.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), Zt.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(u), en.removeClass(a), e.each(en.get(0).className.split(/\s+/), function (e, t) {
                0 === t.indexOf(f) && en.removeClass(t)
            }), e(m + ", " + D).each(function () {
                M.scrollOverflowHandler.remove(e(this)), e(this).removeClass(j + " " + d)
            }), mt(un), un.find(T + ", " + O + ", " + I).each(function () {
                e(this).replaceWith(this.childNodes)
            }), un.css({"-webkit-transition": "none", transition: "none"}), Zt.scrollTop(0);
            var t = [v, A, L];
            e.each(t, function (t, n) {
                e("." + n).removeClass(n)
            })
        }

        function Gt(e, t, n) {
            M[e] = t, "internal" !== n && (kn[e] = t)
        }

        function Kt() {
            var t = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
            if (e("html").hasClass(u))return void Jt("error", "Fullpage.js can only be initialized once and you are doing it multiple times!");
            M.continuousVertical && (M.loopTop || M.loopBottom) && (M.continuousVertical = !1, Jt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), M.scrollBar && M.scrollOverflow && Jt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !M.continuousVertical || !M.scrollBar && M.autoScrolling || (M.continuousVertical = !1, Jt("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(t, function (e, t) {
                M[t] && Jt("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t)
            }), e.each(M.anchors, function (t, n) {
                var i = z.find("[name]").filter(function () {
                    return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase()
                }), o = z.find("[id]").filter(function () {
                    return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase()
                });
                (o.length || i.length) && (Jt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), o.length && Jt("error", '"' + n + '" is is being used by another element `id` property'), i.length && Jt("error", '"' + n + '" is is being used by another element `name` property'))
            })
        }

        function Jt(e, t) {
            console && console[e] && console[e]("fullPage: " + t)
        }

        if (e("html").hasClass(u))return void Kt();
        var Zt = e("html, body"), en = e("body"), tn = e.fn.fullpage;
        M = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: X,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {type: "reveal", percentage: 62, property: "translate"},
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, M);
        var nn, on, rn, sn, an = !1,
            ln = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            cn = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, un = e(this),
            fn = U.height(), dn = !1, pn = !0, hn = !0, gn = [], vn = {};
        vn.m = {up: !0, down: !0, left: !0, right: !0}, vn.k = e.extend(!0, {}, vn.m);
        var mn, yn, bn, wn, xn, Tn, Cn = function () {
            return t.PointerEvent ? {down: "pointerdown", move: "pointermove"} : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }(), Sn = {
            touchmove: "ontouchmove" in t ? "touchmove" : Cn.move,
            touchstart: "ontouchstart" in t ? "touchstart" : Cn.down
        }, kn = e.extend(!0, {}, M);
        Kt(), V.click = cn, V = e.extend(V, M.scrollOverflowOptions), e.extend(e.easing, {
            easeInOutCubic: function (e, t, n, i, o) {
                return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
            }
        }), e(this).length && (tn.setAutoScrolling = Q, tn.setRecordHistory = Y, tn.setScrollingSpeed = G, tn.setFitToSection = K, tn.setLockAnchors = J, tn.setMouseWheelScrolling = Z, tn.setAllowScrolling = ee, tn.setKeyboardScrolling = te, tn.moveSectionUp = ne, tn.moveSectionDown = ie, tn.silentMoveTo = oe, tn.moveTo = re, tn.moveSlideRight = se, tn.moveSlideLeft = ae, tn.fitToSection = ke, tn.reBuild = le, tn.setResponsive = ce, tn.destroy = Qt, function () {
            M.css3 && (M.css3 = Ht()), M.scrollBar = M.scrollBar || M.hybrid, ue(), fe(), ee(!0), Q(M.autoScrolling, "internal"), gt(), Rt(), "complete" === n.readyState && Ke(), U.on("load", Ke)
        }(), function () {
            U.on("scroll", Se).on("hashchange", Je).blur(rt).resize(ht), z.keydown(Ze).keyup(tt).on("click touchstart", S + " a", st).on("click touchstart", q, at).on("click", E, et), e(m).on("click touchstart", P, ot), M.normalScrollElements && (z.on("mouseenter", M.normalScrollElements, function () {
                Z(!1)
            }), z.on("mouseleave", M.normalScrollElements, function () {
                Z(!0)
            }))
        }());
        var En = !1, An = 0, Dn = 0, $n = 0, Nn = 0, In = 0, Ln = (new Date).getTime(), On = 0, jn = 0, Rn = fn
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var X = {
        refreshId: null, iScrollInstances: [], toggleWheel: function (t) {
            e(y).find(".fp-scrollable").each(function () {
                var n = e(this).data("iscrollInstance");
                void 0 !== n && n && (t ? n.wheelOn() : n.wheelOff())
            })
        }, onLeave: function () {
            X.toggleWheel(!1)
        }, beforeLeave: function () {
            X.onLeave()
        }, afterLoad: function () {
            X.toggleWheel(!0)
        }, create: function (t, n) {
            var i = t.find(".fp-scrollable");
            i.height(n), i.each(function () {
                var t = e(this), n = t.data("iscrollInstance");
                n && e.each(X.iScrollInstances, function () {
                    e(this).destroy()
                }), n = new IScroll(t.get(0), V), X.iScrollInstances.push(n), n.wheelOff(), t.data("iscrollInstance", n)
            })
        }, isScrolled: function (e, t) {
            var n = t.data("iscrollInstance");
            return !n || ("top" === e ? n.y >= 0 && !t.scrollTop() : "bottom" === e ? 0 - n.y + t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0)
        }, scrollable: function (e) {
            return e.find(I).length ? e.find($).find(".fp-scrollable") : e.find(".fp-scrollable")
        }, scrollHeight: function (e) {
            return e.find(".fp-scrollable").children().first().get(0).scrollHeight
        }, remove: function (e) {
            var t = e.find(".fp-scrollable");
            if (t.length) {
                t.data("iscrollInstance").destroy(), t.data("iscrollInstance", null)
            }
            e.find(".fp-scrollable").children().first().children().first().unwrap().unwrap()
        }, update: function (t, n) {
            clearTimeout(X.refreshId), X.refreshId = setTimeout(function () {
                e.each(X.iScrollInstances, function () {
                    e(this).get(0).refresh()
                })
            }, 150), t.find(".fp-scrollable").css("height", n + "px").parent().css("height", n + "px")
        }, wrapContent: function () {
            return '<div class="fp-scrollable"><div class="fp-scroller"></div></div>'
        }
    }
}), function (e) {
    var t = {
        format: "000,000,000",
        update: !1,
        timeout: 100,
        numberclass: "number",
        symbolclass: "symbol",
        getData: function () {
            return 0
        }
    };
    e.fn.RuntimeSum = function (n) {
        return this.data(n), this.each(function () {
            var i = e(this);
            switch (n) {
                case"destory":
                    return void i.data({"init-runtime-sum": !1, update: !1})
            }
            if (!i.data("init-runtime-sum")) {
                i.data("init-runtime-sum", !0);
                var o = e.extend({}, t, i.data()), r = "", s = o.numberclass, a = o.symbolclass, l = o.format;
                i.html(l.replace(/./g, function (e) {
                    return /\d/.test(e) ? '<span class="' + s + '"></span>' : '<span class="' + a + '">' + e + "</span>"
                }));
                var c = i.children("." + s);
                !function t() {
                    var n = Number(o.getData.call(i)) || 0;
                    if (n !== r) {
                        r = n;
                        var a = (l.replace(/\D/g, "") + n).substr(2 - l.length);
                        c.each(function (t) {
                            e(this).attr({class: s + " " + s + "-" + a.charAt(t)})
                        })
                    }
                    i.data("update") && setTimeout(t, o.timeout)
                }()
            }
        })
    }
}(jQuery), function (e) {
    e.fn.extend({
        tabs: function (t) {
            var n = {
                auto: !1,
                interval: 3e3,
                current: 0,
                repeat: !0,
                max_focus: 0,
                type: "show",
                loop: !1,
                handle: ".handle",
                current_class: "current",
                target_class: "current",
                show: ".show",
                handle_event: "click",
                pause_event: "mouseover",
                run_event: "mouseout",
                btn_next: ".next",
                btn_prev: ".prev",
                onChange: function (e) {
                }
            };
            return this.each(function () {
                function i(e) {
                    switch (t.repeat ? e = (e + d) % d : (e = Math.min(e, d), e = Math.max(e, 0)), f = e, s.eq(e).addClass(t.current_class).siblings().removeClass(t.current_class), t.type) {
                        case"slide":
                            a.stop(), t.loop ? a.animate({marginLeft: -p}, function () {
                                a.children().last().after(a.children().first()), a.css({marginLeft: 0})
                            }) : a.animate({marginLeft: -p * e});
                            break;
                        case"show":
                            l.eq(e).show().siblings().hide();
                            break;
                        case"fade":
                            l.eq(e).fadeIn().siblings().fadeOut();
                            break;
                        case"animate":
                            a.stop(), t.loop ? a.animate({marginTop: -h}, function () {
                                a.children().last().after(a.children().first()), a.css({marginTop: 0})
                            }) : a.animate({marginTop: -h * e});
                            break;
                        default:
                            l.eq(e).addClass(t.target_class).siblings().removeClass(t.target_class)
                    }
                    t.onChange(e)
                }

                var o = e(this), r = o.data("init-tabs");
                t = e.extend(r || n, t), o.data({"init-tabs": t});
                var s = o.find(t.handle).children(), a = o.find(t.show), l = a.children(), c = o.find(t.btn_prev),
                    u = o.find(t.btn_next), f = t.focus, d = t.max_focus || l.length, p = l.width(), h = l.height();
                if (i(t.current), !r) {
                    if (t.auto) {
                        var g = !1;
                        o.on(t.pause_event, function () {
                            g = !0
                        }).on(t.run_event, function () {
                            g = !1
                        }), setInterval(function () {
                            g || i(f + 1)
                        }, t.interval)
                    }
                    s.on("click", function (t) {
                        i(e(this).index()), t.preventDefault()
                    }), c.on("click", function () {
                        i(f - 1)
                    }), u.on("click", function () {
                        i(f + 1)
                    })
                }
            })
        }
    })
}(jQuery), function (e) {
    var t = {}, n = function (n, i) {
        i = i || e("#flowpp-container > .section").length, t[i] = e.extend({
            afterLoad: function () {
            }, onLeave: function () {
            }
        }, "function" == typeof n ? n() : n)
    };
    e.addSectionConfig = n, e(document).ready(function () {
        var n = e("#flowpp-container");
        n.children().not(".section").remove();
        var i = n.children(".section");
        i.find("[data-animate]").each(function () {
            e(this).addClass("fade").addClass("animated")
        }), n.fullpage({
            anchors: ["flow-index", "flow-flowpp", "flow-flowai", "flow-about", "flow-links"],
            menu: "#flow-menu",
            onLeave: function (n, o, r) {
                var s = i.eq(n - 1);
                s.find("[data-animate]").each(function () {
                    var t = e(this), n = t.data("animate");
                    t.addClass("fade").removeClass(n)
                });
                var a = t[n];
                a && a.onLeave && a.onLeave(s)
            },
            afterLoad: function (n, o) {
                var r = i.eq(o - 1);
                r.find("[data-animate]").each(function () {
                    var t = e(this), n = t.data("animate"), i = 0 | t.data("delay");
                    setTimeout(function () {
                        t.removeClass("fade").addClass(n)
                    }, i)
                });
                var s = t[o];
                s && s.onLeave && s.afterLoad(r)
            }
        }), e('[data-toggle="tooltip"]').tooltip(), e("#apply-to-contavt-us").on("click", function (t) {
            t.stopPropagation(), e(".apply-to-contavt-us").dropdown("toggle")
        })
    })
}(jQuery);