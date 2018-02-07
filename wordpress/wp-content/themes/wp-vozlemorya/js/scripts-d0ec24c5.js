! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : t.UIkit = e(t.jQuery)
}(this, function(t) {
  "use strict";

  function e() {
    return "complete" === document.readyState || "loading" !== document.readyState && !ve.doScroll
  }

  function i(t) {
    var i = function() {
      s(document, "DOMContentLoaded", i), s(window, "load", i), t()
    };
    e() ? t() : (n(document, "DOMContentLoaded", i), n(window, "load", i))
  }

  function n(t, e, i, n) {
    void 0 === n && (n = !1), e.split(" ").forEach(function(e) {
      return j(t).addEventListener(e, i, n)
    })
  }

  function s(t, e, i, n) {
    void 0 === n && (n = !1), e.split(" ").forEach(function(e) {
      return j(t).removeEventListener(e, i, n)
    })
  }

  function o(t, e, i, o, r) {
    var h = function(n) {
      var l = !r || r(n);
      l && (e.split(" ").forEach(function(e) {
        return s(t, e, h, o)
      }), i(n, l))
    };
    e.split(" ").forEach(function(e) {
      return n(t, e, h, o)
    })
  }

  function r(t, e) {
    var i = p(e);
    return j(t).dispatchEvent(i), i
  }

  function h(e, i, n, s) {
    void 0 === s && (s = !1);
    var o = i instanceof t.Event ? i : t.Event(i);
    return fe(e)[s ? "triggerHandler" : "trigger"](o, n), o
  }

  function l(t, e, i, n) {
    return void 0 === i && (i = 400), void 0 === n && (n = "linear"), M(function(s, o) {
      t = fe(t);
      for (var r in e) t.css(r, t.css(r));
      var h = setTimeout(function() {
        return t.trigger(Fe)
      }, i);
      t.one(Fe, function(e, i) {
        clearTimeout(h), t.removeClass("uk-transition").css("transition", ""), i ? o() : s()
      }).addClass("uk-transition").css("transition", "all " + i + "ms " + n).css(e)
    })
  }

  function a(t, e, i, n, s) {
    return void 0 === i && (i = 200), M(function(o, r) {
      function h() {
        t.css("animation-duration", "").removeClass(l)
      }
      var l = "" + e + (s ? " uk-animation-leave" : " uk-animation-enter");
      t = fe(t), 0 === e.lastIndexOf("uk-animation-", 0) && (n && (l += " uk-animation-" + n), s && (l += " uk-animation-reverse")), h(), t.one(Ve || "animationend", function(t, e) {
        h(), e ? r() : o()
      }).css("animation-duration", i + "ms").addClass(l), Ve || Se(function() {
        return ke.cancel(t)
      })
    })
  }

  function c(t) {
    return t instanceof fe
  }

  function d(t, e) {
    return t = fe(t), !!t.is(e) || (I(e) ? t.parents(e).length : j(e).contains(t[0]))
  }

  function u(t, e, i, n) {
    return t = fe(t), t.attr(e, function(t, e) {
      return e ? e.replace(i, n) : e
    })
  }

  function g(t, e) {
    return u(t, "class", new RegExp("(^|\\s)" + e + "(?!\\S)", "g"), "")
  }

  function p(t, e, i, n) {
    if (void 0 === e && (e = !0), void 0 === i && (i = !1), void 0 === n && (n = !1), I(t)) {
      var s = document.createEvent("Event");
      s.initEvent(t, e, i), t = s
    }
    return n && Ae(t, n), t
  }

  function f(t, e, i) {
    void 0 === e && (e = 0), void 0 === i && (i = 0);
    var n = j(t).getBoundingClientRect();
    return n.bottom >= -1 * e && n.right >= -1 * i && n.top <= window.innerHeight + e && n.left <= window.innerWidth + i
  }

  function v(t) {
    t = j(t);
    var e = t.offsetHeight,
      i = w(t),
      n = window.innerHeight,
      s = n + Math.min(0, i - n),
      o = Math.max(0, n - (m() - (i + e)));
    return X((s + window.pageYOffset - i) / ((s + (e - (o < n ? o : 0))) / 100) / 100)
  }

  function w(t) {
    var e = 0;
    do e += t.offsetTop; while (t = t.offsetParent);
    return e
  }

  function m() {
    return Math.max(ve.offsetHeight, ve.scrollHeight)
  }

  function x(t, e, i) {
    void 0 === i && (i = 0), e = fe(e);
    var n = fe(e).length;
    return t = (H(t) ? t : "next" === t ? i + 1 : "previous" === t ? i - 1 : I(t) ? parseInt(t, 10) : e.index(t)) % n, t < 0 ? t + n : t
  }

  function y(t) {
    return be[j(t).tagName.toLowerCase()]
  }

  function C(t, e) {
    var i = P(t);
    return i ? i.reduce(function(t, e) {
      return Z(e, t)
    }, e) : Z(t)
  }

  function k() {
    var t = setTimeout(function() {
      return r(me, "click")
    }, 0);
    o(me, "click", function(e) {
      e.preventDefault(), e.stopImmediatePropagation(), clearTimeout(t)
    }, !0)
  }

  function b(t, e) {
    t = j(t);
    for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
      if (t.hasAttribute(n[i])) return t.getAttribute(n[i])
  }

  function $(t, e) {
    return function(i) {
      var n = arguments.length;
      return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e)
    }
  }

  function L(t, e) {
    return Le.call(t, e)
  }

  function M(t) {
    if (Ie) return new Promise(t);
    var e = fe.Deferred();
    return t(e.resolve, e.reject), e
  }

  function B(t) {
    return t.replace(/(?:^|[-_\/])(\w)/g, function(t, e) {
      return e ? e.toUpperCase() : ""
    })
  }

  function T(t) {
    return t.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
  }

  function _(t) {
    return t.replace(Me, A)
  }

  function A(t, e) {
    return e ? e.toUpperCase() : ""
  }

  function E(t) {
    return "function" == typeof t
  }

  function S(t) {
    return null !== t && "object" == typeof t
  }

  function O(t) {
    return S(t) && Object.getPrototypeOf(t) === Object.prototype
  }

  function D(t) {
    return "boolean" == typeof t
  }

  function I(t) {
    return "string" == typeof t
  }

  function H(t) {
    return "number" == typeof t
  }

  function N(t) {
    return void 0 === t
  }

  function z(t) {
    return I(t) && t.match(/^[!>+-]/)
  }

  function P(t) {
    return z(t) && t.split(/(?=\s[!>+-])/g).map(function(t) {
      return t.trim()
    })
  }

  function Z(t, e) {
    if (t === !0) return null;
    try {
      if (e && z(t) && ">" !== t[0]) {
        var i = Te[t[0]],
          n = t.substr(1);
        e = fe(e), "closest" === i && (e = e.parent(), n = n || "*"), t = e[i](n)
      } else t = fe(t, e)
    } catch (s) {
      return null
    }
    return t.length ? t : null
  }

  function j(t) {
    return t && (c(t) ? t[0] : t)
  }

  function F(t) {
    return D(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
  }

  function q(t) {
    var e = Number(t);
    return !isNaN(e) && e
  }

  function V(e) {
    return Be(e) ? e : I(e) ? e.split(",").map(function(e) {
      return t.isNumeric(e) ? q(e) : F(e.trim())
    }) : [e]
  }

  function W(t) {
    if (I(t))
      if ("@" === t[0]) {
        var e = "media-" + t.substr(1);
        t = _e[e] || (_e[e] = parseFloat(G(e)))
      } else if (isNaN(t)) return t;
    return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
  }

  function R(t, e, i) {
    return t === Boolean ? F(e) : t === Number ? q(e) : "jQuery" === t ? C(e, i) : "list" === t ? V(e) : "media" === t ? W(e) : t ? t(e) : e
  }

  function Y(t) {
    return t ? "ms" === t.substr(-2) ? parseFloat(t) : 1e3 * parseFloat(t) : 0
  }

  function U(t, e, i) {
    return t.replace(new RegExp(e + "|" + i, "mg"), function(t) {
      return t === e ? i : e
    })
  }

  function X(t, e, i) {
    return void 0 === e && (e = 0), void 0 === i && (i = 1), Math.min(Math.max(t, e), i)
  }

  function Q() {}

  function J(t, e, i) {
    return (window.getComputedStyle(j(t), i) || {})[e]
  }

  function G(t) {
    var e, i = document.documentElement,
      n = i.appendChild(document.createElement("div"));
    n.classList.add("var-" + t);
    try {
      e = J(n, "content", ":before").replace(/^["'](.*)["']$/, "$1"), e = JSON.parse(e)
    } catch (s) {}
    return i.removeChild(n), e || void 0
  }

  function K(t) {
    return M(function(e, i) {
      var n = new Image;
      n.onerror = i, n.onload = function() {
        return e(n)
      }, n.src = t
    })
  }

  function tt(t, e) {
    var i, n = B(t),
      s = B(e).toLowerCase(),
      o = B(e),
      r = document.body || document.documentElement,
      h = (i = {}, i[t] = s, i["Webkit" + n] = "webkit" + o, i["Moz" + n] = s, i["o" + n] = "o" + o + " o" + s, i);
    for (t in h)
      if (void 0 !== r.style[t]) return h[t]
  }

  function et() {
    We.scheduled || (We.scheduled = !0, Se(We.flush.bind(We)))
  }

  function it(t) {
    for (var e; e = t.shift();) e()
  }

  function nt(t, e) {
    var i = t.indexOf(e);
    return !!~i && !!t.splice(i, 1)
  }

  function st() {}

  function ot(t, e) {
    return (e.y - t.y) / (e.x - t.x)
  }

  function rt(t, e) {
    function i(i) {
      s[i] = (Re[i] || Ye)(t[i], e[i])
    }
    var n, s = {};
    if (e.mixins)
      for (var o = 0, r = e.mixins.length; o < r; o++) t = rt(t, e.mixins[o]);
    for (n in t) i(n);
    for (n in e) L(t, n) || i(n);
    return s
  }

  function ht(t, e) {
    try {
      t.contentWindow.postMessage(JSON.stringify(Ae({
        event: "command"
      }, e)), "*")
    } catch (i) {}
  }

  function lt(t) {
    return M(function(e) {
      o(window, "message", function(t, i) {
        return e(i)
      }, !1, function(e) {
        var i = e.data;
        if (i && I(i)) {
          try {
            i = JSON.parse(i)
          } catch (n) {
            return
          }
          return i && t(i)
        }
      })
    })
  }

  function at(e, i, n, s, o, r, h, l) {
    n = ft(n), s = ft(s);
    var a = {
      element: n,
      target: s
    };
    if (!e) return a;
    var c = ct(e),
      d = ct(i),
      u = d;
    return pt(u, n, c, -1), pt(u, s, d, 1), o = vt(o, c.width, c.height), r = vt(r, d.width, d.height), o.x += r.x, o.y += r.y, u.left += o.x, u.top += o.y, l = ct(l || window), h && t.each(ti, function(t, e) {
      function i(e, i) {
        var n = u[g] + e + i - 2 * o[t];
        if (n >= l[g] && n + c[r] <= l[p]) return u[g] = n, ["element", "target"].forEach(function(i) {
          a[i][t] = e ? a[i][t] === ti[t][1] ? ti[t][2] : ti[t][1] : a[i][t]
        }), !0
      }
      var r = e[0],
        g = e[1],
        p = e[2];
      if (h === !0 || ~h.indexOf(t)) {
        var f = n[t] === g ? -c[r] : n[t] === p ? c[r] : 0,
          v = s[t] === g ? d[r] : s[t] === p ? -d[r] : 0;
        if (u[g] < l[g] || u[g] + c[r] > l[p]) {
          var w = c[r] / 2,
            m = "center" === s[t] ? -d[r] / 2 : 0;
          "center" === n[t] && (i(w, m) || i(-w, -m)) || i(f, v)
        }
      }
    }), dt(e, u), a
  }

  function ct(t) {
    t = j(t);
    var e = gt(t),
      i = e.pageYOffset,
      n = e.pageXOffset;
    if (!t.ownerDocument) return {
      top: i,
      left: n,
      height: e.innerHeight,
      width: e.innerWidth,
      bottom: i + e.innerHeight,
      right: n + e.innerWidth
    };
    var s = !1;
    t.offsetHeight || (s = t.style.display, t.style.display = "block");
    var o = t.getBoundingClientRect();
    return s !== !1 && (t.style.display = s), {
      height: o.height,
      width: o.width,
      top: o.top + i,
      left: o.left + n,
      bottom: o.bottom + i,
      right: o.right + n
    }
  }

  function dt(t, e) {
    var i = e.left,
      n = e.top;
    fe(t).offset({
      left: i - ei.clientLeft,
      top: n - ei.clientTop
    })
  }

  function ut(t) {
    return t = j(t), t.getBoundingClientRect().top + gt(t).pageYOffset
  }

  function gt(t) {
    return t && t.ownerDocument ? t.ownerDocument.defaultView : window
  }

  function pt(e, i, n, s) {
    t.each(ti, function(t, o) {
      var r = o[0],
        h = o[1],
        l = o[2];
      i[t] === l ? e[h] += n[r] * s : "center" === i[t] && (e[h] += n[r] * s / 2)
    })
  }

  function ft(t) {
    var e = /left|center|right/,
      i = /top|center|bottom/;
    return t = (t || "").split(" "), 1 === t.length && (t = e.test(t[0]) ? t.concat(["center"]) : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
      x: e.test(t[0]) ? t[0] : "center",
      y: i.test(t[1]) ? t[1] : "center"
    }
  }

  function vt(t, e, i) {
    return t = (t || "").split(" "), {
      x: t[0] ? parseFloat(t[0]) * ("%" === t[0][t[0].length - 1] ? e / 100 : 1) : 0,
      y: t[1] ? parseFloat(t[1]) * ("%" === t[1][t[1].length - 1] ? i / 100 : 1) : 0
    }
  }

  function wt(t) {
    switch (t) {
      case "left":
        return "right";
      case "right":
        return "left";
      case "top":
        return "bottom";
      case "bottom":
        return "top";
      default:
        return t
    }
  }

  function mt(t) {
    var e = t.x1,
      i = t.x2,
      n = t.y1,
      s = t.y2;
    return Math.abs(e - i) >= Math.abs(n - s) ? e - i > 0 ? "Left" : "Right" : n - s > 0 ? "Up" : "Down"
  }

  function xt() {
    Qe && clearTimeout(Qe), Je && clearTimeout(Je), Ge && clearTimeout(Ge), Qe = Je = Ge = null, ii = {}
  }

  function yt(t) {
    return ni || "touch" === (t.originalEvent || t).pointerType
  }

  function Ct(t) {
    function e() {
      s(document.body, r), We.flush(), new Ee(function(e) {
        return e.forEach(function(e) {
          for (var i = e.addedNodes, n = e.removedNodes, o = e.target, l = 0; l < i.length; l++) s(i[l], r);
          for (l = 0; l < n.length; l++) s(n[l], h);
          t.update("update", o, !0)
        })
      }).observe(o, {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0,
        attributeFilter: ["href"]
      }), t._initialized = !0
    }

    function s(t, e) {
      if (t.nodeType === Node.ELEMENT_NODE && !t.hasAttribute("uk-no-boot"))
        for (e(t), t = t.firstChild; t;) {
          var i = t.nextSibling;
          s(t, e), t = i
        }
    }
    var o = document.documentElement,
      r = t.connect,
      h = t.disconnect;
    Ee ? document.body ? e() : new Ee(function() {
      document.body && (this.disconnect(), e())
    }).observe(o, {
      childList: !0,
      subtree: !0
    }) : i(function() {
      s(document.body, r), n(o, "DOMNodeInserted", function(t) {
        return s(t.target, r)
      }), n(o, "DOMNodeRemoved", function(t) {
        return s(t.target, h)
      })
    })
  }

  function kt(t) {
    function e(t) {
      return new Function("return function " + B(t) + " (options) { this._init(options); }")()
    }

    function i(t, e) {
      if (t.nodeType === Node.ELEMENT_NODE)
        for (e(t), t = t.firstChild; t;) i(t, e), t = t.nextSibling
    }

    function n(t, e) {
      if (t)
        for (var i in t) t[i]._isReady && t[i]._callUpdate(e)
    }
    var s = t.data;
    t.use = function(t) {
      if (!t.installed) return t.call(null, this), t.installed = !0, this
    }, t.mixin = function(e, i) {
      i = (I(i) ? t.components[i] : i) || this, e = rt({}, e), e.mixins = i.options.mixins, delete i.options.mixins, i.options = rt(e, i.options)
    }, t.extend = function(t) {
      t = t || {};
      var i = this,
        n = t.name || i.options.name,
        s = e(n || "UIkitComponent");
      return s.prototype = Object.create(i.prototype), s.prototype.constructor = s, s.options = rt(i.options, t), s["super"] = i, s.extend = i.extend, s
    }, t.update = function(e, o, r) {
      if (void 0 === r && (r = !1), e = p(e || "update"), !o) return void n(t.instances, e);
      if (o = j(o), r) {
        do n(o[s], e), o = o.parentNode; while (o)
      } else i(o, function(t) {
        return n(t[s], e)
      })
    };
    var o;
    Object.defineProperty(t, "container", {
      get: function() {
        return o || document.body
      },
      set: function(t) {
        o = t
      }
    })
  }

  function bt(t) {
    t.prototype._callHook = function(t) {
      var e = this,
        i = this.$options[t];
      i && i.forEach(function(t) {
        return t.call(e)
      })
    }, t.prototype._callReady = function() {
      this._isReady || (this._isReady = !0, this._callHook("ready"), this._callUpdate())
    }, t.prototype._callConnected = function() {
      var e = this;
      this._connected || (~t.elements.indexOf(this.$options.el) || t.elements.push(this.$options.el), t.instances[this._uid] = this, this._initEvents(), this._callHook("connected"), this._connected = !0, this._initObserver(), this._isReady || i(function() {
        return e._callReady()
      }), this._callUpdate())
    }, t.prototype._callDisconnected = function() {
      if (this._connected) {
        this._observer && (this._observer.disconnect(), this._observer = null);
        var e = t.elements.indexOf(this.$options.el);
        ~e && t.elements.splice(e, 1), delete t.instances[this._uid], this._initEvents(!0), this._callHook("disconnected"), this._connected = !1
      }
    }, t.prototype._callUpdate = function(t) {
      var e = this;
      t = p(t || "update"), "update" === t.type && (this._computeds = {});
      var i = this.$options.update;
      i && i.forEach(function(i, n) {
        ("update" === t.type || i.events && ~i.events.indexOf(t.type)) && (i.read && !~We.reads.indexOf(e._frames.reads[n]) && (e._frames.reads[n] = We.measure(function() {
          i.read.call(e, t), delete e._frames.reads[n]
        })), i.write && !~We.writes.indexOf(e._frames.writes[n]) && (e._frames.writes[n] = We.mutate(function() {
          i.write.call(e, t), delete e._frames.writes[n]
        })))
      })
    }
  }

  function $t(t) {
    function e(t, e) {
      var n = {},
        s = t.args;
      void 0 === s && (s = []);
      var o = t.props;
      void 0 === o && (o = {});
      var r, h, l = t.el;
      if (!o) return n;
      for (r in o)
        if (h = T(r), l.hasAttribute(h)) {
          var a = R(o[r], l.getAttribute(h), l);
          if ("target" === h && (!a || 0 === a.lastIndexOf("_", 0))) continue;
          n[r] = a
        }
      var c = i(b(l, e), s);
      for (r in c) h = _(r), void 0 !== o[h] && (n[h] = R(o[h], c[r], l));
      return n
    }

    function i(t, e) {
      void 0 === e && (e = []);
      try {
        return t ? "{" === t[0] ? JSON.parse(t) : e.length && !~t.indexOf(":") ? (i = {}, i[e[0]] = t, i) : t.split(";").reduce(function(t, e) {
          var i = e.split(/:(.+)/),
            n = i[0],
            s = i[1];
          return n && s && (t[n.trim()] = s.trim()), t
        }, {}) : {};
        var i
      } catch (n) {
        return {}
      }
    }

    function n(t, e, i) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function() {
          return L(t._computeds, e) || (t._computeds[e] = i.call(t)), t._computeds[e]
        },
        set: function(i) {
          t._computeds[e] = i
        }
      })
    }

    function s(t, e, i, n) {
      O(i) || (i = {
        name: n,
        handler: i
      });
      var s = i.name,
        r = i.el,
        h = i.delegate,
        l = i.self,
        a = i.filter,
        c = i.handler,
        d = "." + t.$options.name + "." + t._uid;
      if (r = r && r.call(t) || t.$el, s = s.split(" ").map(function(t) {
          return t + "." + d
        }).join(" "), e) r.off(s);
      else {
        if (a && !a.call(t)) return;
        c = I(c) ? t[c] : $(c, t), l && (c = o(c, t)), h ? r.on(s, I(h) ? h : h.call(t), c) : r.on(s, c)
      }
    }

    function o(t, e) {
      return function(i) {
        if (i.target === i.currentTarget) return t.call(e, i)
      }
    }

    function r(t, e) {
      return t.every(function(t) {
        return !t || !L(t, e)
      })
    }

    function h(t, e) {
      return N(t) || t === e || c(t) && c(e) && t.is(e)
    }
    var l = 0;
    t.prototype.props = {}, t.prototype._init = function(e) {
      e = e || {}, e = this.$options = rt(this.constructor.options, e, this), this.$el = null, this.$name = t.prefix + T(this.$options.name), this.$props = {}, this._frames = {
        reads: {},
        writes: {}
      }, this._uid = l++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), e.el && this.$mount(e.el)
    }, t.prototype._initData = function() {
      var t = this,
        e = this.$options,
        i = e.defaults,
        n = e.data;
      void 0 === n && (n = {});
      var s = e.args;
      void 0 === s && (s = []);
      var o = e.props;
      void 0 === o && (o = {});
      var r = e.el;
      s.length && Be(n) && (n = n.slice(0, s.length).reduce(function(t, e, i) {
        return O(e) ? Ae(t, e) : t[s[i]] = e, t
      }, {}));
      for (var h in i) t.$props[h] = t[h] = L(n, h) && !N(n[h]) ? R(o[h], n[h], r) : Be(i[h]) ? i[h].concat() : i[h]
    }, t.prototype._initMethods = function() {
      var t = this,
        e = this.$options.methods;
      if (e)
        for (var i in e) t[i] = $(e[i], t)
    }, t.prototype._initComputeds = function() {
      var t = this,
        e = this.$options.computed;
      if (this._computeds = {}, e)
        for (var i in e) n(t, i, e[i])
    }, t.prototype._initProps = function(t) {
      var i = this;
      this._computeds = {}, Ae(this.$props, t || e(this.$options, this.$name));
      var n = [this.$options.computed, this.$options.methods];
      for (var s in i.$props) r(n, s) && (i[s] = i.$props[s])
    }, t.prototype._initEvents = function(t) {
      var e = this,
        i = this.$options.events;
      i && i.forEach(function(i) {
        if (L(i, "handler")) s(e, t, i);
        else
          for (var n in i) s(e, t, i[n], n)
      })
    }, t.prototype._initObserver = function() {
      var t = this,
        i = this.$options,
        n = i.attrs,
        s = i.props,
        o = i.el;
      !this._observer && s && n && Ee && (n = Be(n) ? n : Object.keys(s).map(function(t) {
        return T(t)
      }), this._observer = new Ee(function() {
        var i = e(t.$options, t.$name);
        n.some(function(e) {
          return !h(i[e], t.$props[e])
        }) && t.$reset(i)
      }), this._observer.observe(o, {
        attributes: !0,
        attributeFilter: n.concat([this.$name, "data-" + this.$name])
      }))
    }
  }

  function Lt(t) {
    var e = t.data;
    t.prototype.$mount = function(t) {
      var i = this.$options.name;
      t[e] || (t[e] = {}), t[e][i] || (t[e][i] = this, this.$options.el = this.$options.el || t, this.$el = fe(t), this._initProps(), this._callHook("init"), document.documentElement.contains(t) && this._callConnected())
    }, t.prototype.$emit = function(t) {
      this._callUpdate(t)
    }, t.prototype.$update = function(e, i) {
      t.update(e, this.$options.el, i)
    }, t.prototype.$reset = function(t) {
      this._callDisconnected(), this._initProps(t), this._callConnected()
    }, t.prototype.$destroy = function(t) {
      void 0 === t && (t = !1);
      var i = this.$options,
        n = i.el,
        s = i.name;
      n && this._callDisconnected(), this._callHook("destroy"), n && n[e] && (delete n[e][s], Object.keys(n[e]).length || delete n[e], t && this.$el.remove())
    }
  }

  function Mt(t) {
    var e = t.data;
    t.components = {}, t.component = function(e, i) {
      var n = _(e);
      if (O(i)) i.name = n, i = t.extend(i);
      else {
        if (N(i)) return t.components[n];
        i.options.name = n
      }
      return t.components[n] = i, t[n] = function(e, i) {
        function s(e) {
          return t.getComponent(e, n) || new t.components[n]({
            el: e,
            data: i || {}
          })
        }
        for (var o = arguments.length, r = Array(o); o--;) r[o] = arguments[o];
        return O(e) ? new t.components[n]({
          data: e
        }) : t.components[n].options.functional ? new t.components[n]({
          data: [].concat(r)
        }) : e && e.nodeType ? s(e) : fe(e).toArray().map(s)[0]
      }, t._initialized && !i.options.functional && We.measure(function() {
        return t[n]("[uk-" + e + "],[data-uk-" + e + "]")
      }), t.components[n]
    }, t.getComponents = function(t) {
      return t && (t = c(t) ? t[0] : t) && t[e] || {}
    }, t.getComponent = function(e, i) {
      return t.getComponents(e)[i]
    }, t.connect = function(i) {
      var n;
      if (i[e])
        for (n in i[e]) i[e][n]._callConnected();
      for (var s = 0; s < i.attributes.length; s++) n = i.attributes[s].name, 0 !== n.lastIndexOf("uk-", 0) && 0 !== n.lastIndexOf("data-uk-", 0) || (n = _(n.replace("data-uk-", "").replace("uk-", "")), t[n] && t[n](i))
    }, t.disconnect = function(t) {
      for (var i in t[e]) t[e][i]._callDisconnected()
    }
  }

  function Bt(t) {
    function e(t, e, n) {
      (e = i(e, t)) && (si ? e[0][n].apply(e[0], e.slice(1)) : e.slice(1).forEach(function(t) {
        return e[0][n](t)
      }))
    }

    function i(t, e) {
      return I(t[0]) && t.unshift(e), t[0] = (j(t[0]) || {}).classList, t.forEach(function(e, i) {
        return i > 0 && I(e) && ~e.indexOf(" ") && Array.prototype.splice.apply(t, [i, 1].concat(t[i].split(" ")))
      }), t[0] && t[1] && t.length > 1 && t
    }
    t.prototype.$addClass = function() {
      for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
      e(this.$options.el, t, "add")
    }, t.prototype.$removeClass = function() {
      for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
      e(this.$options.el, t, "remove")
    }, t.prototype.$hasClass = function() {
      for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
      return (t = i(t, this.$options.el)) && t[0].contains(t[1])
    }, t.prototype.$toggleClass = function() {
      for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
      t = i(t, this.$options.el);
      for (var n = t && !I(t[t.length - 1]) ? t.pop() : void 0, s = 1; s < (t && t.length); s++) t[0] && oi ? t[0].toggle(t[s], n) : t[0][(N(n) ? !t[0].contains(t[s]) : n) ? "add" : "remove"](t[s])
    }
  }

  function Tt(t) {
    me.on((e = {}, e["click." + t] = function(t) {
      li && li.bgClose && !t.isDefaultPrevented() && !d(t.target, li.panel) && li.hide()
    }, e["keydown." + t] = function(t) {
      27 === t.keyCode && li && li.escClose && (t.preventDefault(), li.hide())
    }, e));
    var e
  }

  function _t(t) {
    me.off("click." + t).off("keydown." + t)
  }

  function At(t) {
    t.mixin["class"] = ci, t.mixin.modal = ui, t.mixin.position = gi, t.mixin.togglable = di
  }

  function Et(t) {
    t.component("accordion", {
      mixins: [ci, di],
      props: {
        targets: String,
        active: null,
        collapsible: Boolean,
        multiple: Boolean,
        toggle: String,
        content: String,
        transition: String
      },
      defaults: {
        targets: "> *",
        active: !1,
        animation: [!0],
        collapsible: !0,
        multiple: !1,
        clsOpen: "uk-open",
        toggle: "> .uk-accordion-title",
        content: "> .uk-accordion-content",
        transition: "ease"
      },
      computed: {
        items: function e() {
          var t = this,
            e = fe(this.targets, this.$el);
          return this._changed = !this._items || e.length !== this._items.length || e.toArray().some(function(e, i) {
            return e !== t._items.get(i)
          }), this._items = e
        }
      },
      events: [{
        name: "click",
        delegate: function() {
          return this.targets + " " + this.$props.toggle
        },
        handler: function(t) {
          t.preventDefault(), this.toggle(this.items.find(this.$props.toggle).index(t.currentTarget))
        }
      }],
      update: function() {
        var t = this;
        if (this.items.length && this._changed) {
          this.items.each(function(e, i) {
            i = fe(i), t.toggleNow(i.find(t.content), i.hasClass(t.clsOpen))
          });
          var e = this.active !== !1 && Z(this.items.eq(Number(this.active))) || !this.collapsible && Z(this.items.eq(0));
          e && !e.hasClass(this.clsOpen) && this.toggle(e, !1)
        }
      },
      methods: {
        toggle: function(t, e) {
          var i = this,
            n = x(t, this.items),
            s = this.items.filter("." + this.clsOpen);
          t = this.items.eq(n), t.add(!this.multiple && s).each(function(n, o) {
            o = fe(o);
            var r = o.is(t),
              h = r && !o.hasClass(i.clsOpen);
            if (h || !r || i.collapsible || !(s.length < 2)) {
              o.toggleClass(i.clsOpen, h);
              var l = o[0]._wrapper ? o[0]._wrapper.children().first() : o.find(i.content);
              o[0]._wrapper || (o[0]._wrapper = l.wrap("<div>").parent().attr("hidden", h)), i._toggleImmediate(l, !0), i.toggleElement(o[0]._wrapper, h, e).then(function() {
                o.hasClass(i.clsOpen) === h && (h || i._toggleImmediate(l, !1), o[0]._wrapper = null, l.unwrap())
              })
            }
          })
        }
      }
    })
  }

  function St(t) {
    t.component("alert", {
      attrs: !0,
      mixins: [ci, di],
      args: "animation",
      props: {
        close: String
      },
      defaults: {
        animation: [!0],
        selClose: ".uk-alert-close",
        duration: 150,
        hideProps: Ae({
          opacity: 0
        }, di.defaults.hideProps)
      },
      events: [{
        name: "click",
        delegate: function() {
          return this.selClose
        },
        handler: function(t) {
          t.preventDefault(), this.close()
        }
      }],
      methods: {
        close: function() {
          var t = this;
          this.toggleElement(this.$el).then(function() {
            return t.$destroy(!0)
          })
        }
      }
    })
  }

  function Ot(t) {
    t.component("cover", {
      mixins: [ci],
      props: {
        width: Number,
        height: Number
      },
      computed: {
        el: function() {
          return this.$el[0]
        },
        parent: function() {
          return this.el.parentNode
        }
      },
      ready: function() {
        this.$el.is("iframe") && this.$el.css("pointerEvents", "none");
        var t = new Xe(this.$el);
        t.isVideo() && t.mute()
      },
      update: {
        write: function() {
          0 !== this.el.offsetHeight && this.$el.css({
            width: "",
            height: ""
          }).css($e.cover({
            width: this.width || this.el.clientWidth,
            height: this.height || this.el.clientHeight
          }, {
            width: this.parent.offsetWidth,
            height: this.parent.offsetHeight
          }))
        },
        events: ["load", "resize"]
      },
      events: {
        loadedmetadata: function() {
          this.$emit()
        }
      }
    })
  }

  function Dt(t) {
    function e() {
      n || (n = !0, me.on("click", function(t) {
        var e;
        if (!t.isDefaultPrevented())
          for (; i && i !== e && !d(t.target, i.$el) && (!i.toggle || !d(t.target, i.toggle.$el));) e = i, i.hide(!1)
      }))
    }
    var i;
    t.component("drop", {
      mixins: [gi, di],
      args: "pos",
      props: {
        mode: "list",
        toggle: Boolean,
        boundary: "jQuery",
        boundaryAlign: Boolean,
        delayShow: Number,
        delayHide: Number,
        clsDrop: String
      },
      defaults: {
        mode: ["click", "hover"],
        toggle: "- :first",
        boundary: window,
        boundaryAlign: !1,
        delayShow: 0,
        delayHide: 800,
        clsDrop: !1,
        hoverIdle: 200,
        animation: ["uk-animation-fade"],
        cls: "uk-open"
      },
      init: function() {
        this.tracker = new st, this.clsDrop = this.clsDrop || "uk-" + this.$options.name, this.clsPos = this.clsDrop, this.$addClass(this.clsDrop)
      },
      ready: function() {
        this.updateAria(this.$el), this.toggle && (this.toggle = t.toggle(C(this.toggle, this.$el), {
          target: this.$el,
          mode: this.mode
        }))
      },
      events: [{
        name: "click",
        delegate: function() {
          return "." + this.clsDrop + "-close"
        },
        handler: function(t) {
          t.preventDefault(), this.hide(!1)
        }
      }, {
        name: "click",
        delegate: function() {
          return 'a[href^="#"]'
        },
        handler: function(t) {
          if (!t.isDefaultPrevented()) {
            var e = fe(t.target).attr("href");
            1 === e.length && t.preventDefault(), 1 !== e.length && d(e, this.$el) || this.hide(!1)
          }
        }
      }, {
        name: "toggle",
        handler: function(t, e) {
          e && !this.$el.is(e.target) || (t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1))
        }
      }, {
        name: Ze,
        filter: function() {
          return ~this.mode.indexOf("hover")
        },
        handler: function(t) {
          yt(t) || (i && i !== this && i.toggle && ~i.toggle.mode.indexOf("hover") && !d(t.target, i.$el) && !d(t.target, i.toggle.$el) && i.hide(!1), t.preventDefault(), this.show(this.toggle))
        }
      }, {
        name: "toggleshow",
        handler: function(t, e) {
          e && !this.$el.is(e.target) || (t.preventDefault(), this.show(e || this.toggle))
        }
      }, {
        name: "togglehide " + je,
        handler: function(t, e) {
          yt(t) || e && !this.$el.is(e.target) || (t.preventDefault(), this.toggle && ~this.toggle.mode.indexOf("hover") && this.hide())
        }
      }, {
        name: "beforeshow",
        self: !0,
        handler: function() {
          this.clearTimers()
        }
      }, {
        name: "show",
        self: !0,
        handler: function() {
          this.tracker.init(), this.toggle.$el.addClass(this.cls).attr("aria-expanded", "true"), e()
        }
      }, {
        name: "beforehide",
        self: !0,
        handler: function() {
          this.clearTimers()
        }
      }, {
        name: "hide",
        handler: function(t) {
          var e = t.target;
          return this.$el.is(e) ? (i = this.isActive() ? null : i, this.toggle.$el.removeClass(this.cls).attr("aria-expanded", "false").blur().find("a, button").blur(), void this.tracker.cancel()) : void(i = null === i && d(e, this.$el) && this.isToggled() ? this : i)
        }
      }],
      update: {
        write: function() {
          this.isToggled() && !ke.inProgress(this.$el) && this.position()
        },
        events: ["resize"]
      },
      methods: {
        show: function s(t, e) {
          var n = this;
          void 0 === e && (e = !0);
          var s = function() {
              n.isToggled() || (n.position(), n.toggleElement(n.$el, !0))
            },
            o = function() {
              if (n.toggle = t || n.toggle, n.clearTimers(), !n.isActive()) {
                if (e && i && i !== n && i.isDelaying) return void(n.showTimer = setTimeout(n.show, 10));
                if (n.isParentOf(i)) {
                  if (!i.hideTimer) return;
                  i.hide(!1)
                } else if (i && !n.isChildOf(i) && !n.isParentOf(i))
                  for (var o; i && i !== o && !n.isChildOf(i);) o = i, i.hide(!1);
                e && n.delayShow ? n.showTimer = setTimeout(s, n.delayShow) : s(), i = n
              }
            };
          t && this.toggle && !this.toggle.$el.is(t.$el) ? (this.$el.one("hide", o), this.hide(!1)) : o()
        },
        hide: function o(t) {
          var e = this;
          void 0 === t && (t = !0);
          var o = function() {
            return e.toggleNow(e.$el, !1)
          };
          this.clearTimers(), this.isDelaying = this.tracker.movesTo(this.$el), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, this.hoverIdle) : t && this.delayHide ? this.hideTimer = setTimeout(o, this.delayHide) : o()
        },
        clearTimers: function() {
          clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
        },
        isActive: function() {
          return i === this
        },
        isChildOf: function(t) {
          return t && t !== this && d(this.$el, t.$el)
        },
        isParentOf: function(t) {
          return t && t !== this && d(t.$el, this.$el)
        },
        position: function() {
          g(this.$el, this.clsDrop + "-(stack|boundary)").css({
            top: "",
            left: ""
          }), this.$el.show().toggleClass(this.clsDrop + "-boundary", this.boundaryAlign);
          var t = ct(this.boundary),
            e = this.boundaryAlign ? t : ct(this.toggle.$el);
          if ("justify" === this.align) {
            var i = "y" === this.getAxis() ? "width" : "height";
            this.$el.css(i, e[i])
          } else this.$el.outerWidth() > Math.max(t.right - e.left, e.right - t.left) && (this.$addClass(this.clsDrop + "-stack"), this.$el.trigger("stack", [this]));
          this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary), this.$el[0].style.display = ""
        }
      }
    }), t.drop.getActive = function() {
      return i
    };
    var n
  }

  function It(t) {
    t.component("dropdown", t.components.drop.extend({
      name: "dropdown"
    }))
  }

  function Ht(t) {
    t.component("form-custom", {
      mixins: [ci],
      args: "target",
      props: {
        target: Boolean
      },
      defaults: {
        target: !1
      },
      computed: {
        input: function() {
          return this.$el.find(":input:first")
        },
        state: function() {
          return this.input.next()
        },
        target: function() {
          return this.$props.target && C(this.$props.target === !0 ? "> :input:first + :first" : this.$props.target, this.$el)
        }
      },
      connected: function() {
        this.input.trigger("change")
      },
      events: [{
        name: "focusin focusout mouseenter mouseleave",
        delegate: ":input:first",
        handler: function(t) {
          var e = t.type;
          this.state.toggleClass("uk-" + (~e.indexOf("focus") ? "focus" : "hover"), ~["focusin", "mouseenter"].indexOf(e))
        }
      }, {
        name: "change",
        handler: function() {
          this.target && this.target[this.target.is(":input") ? "val" : "text"](this.input[0].files && this.input[0].files[0] ? this.input[0].files[0].name : this.input.is("select") ? this.input.find("option:selected").text() : this.input.val())
        }
      }]
    })
  }

  function Nt(t) {
    t.component("gif", {
      update: {
        read: function() {
          var t = f(this.$el);
          !this.isInView && t && (this.$el[0].src = this.$el[0].src), this.isInView = t
        },
        events: ["scroll", "load", "resize"]
      }
    })
  }

  function zt(t) {
    t.component("grid", t.components.margin.extend({
      mixins: [ci],
      name: "grid",
      defaults: {
        margin: "uk-grid-margin",
        clsStack: "uk-grid-stack"
      },
      update: {
        write: function() {
          this.$toggleClass(this.clsStack, this.stacks)
        },
        events: ["load", "resize"]
      }
    }))
  }

  function Pt(t) {
    t.component("height-match", {
      args: "target",
      props: {
        target: String,
        row: Boolean
      },
      defaults: {
        target: "> *",
        row: !0
      },
      computed: {
        elements: function() {
          return fe(this.target, this.$el)
        }
      },
      update: {
        read: function() {
          var t = this,
            e = !1;
          this.elements.css("minHeight", ""), this.rows = this.row ? this.elements.toArray().reduce(function(t, i) {
            return e !== i.offsetTop ? t.push([i]) : t[t.length - 1].push(i), e = i.offsetTop, t
          }, []).map(function(e) {
            return t.match(fe(e))
          }) : [this.match(this.elements)]
        },
        write: function() {
          this.rows.forEach(function(t) {
            var e = t.height,
              i = t.elements;
            return i && i.each(function(t, i) {
              return i.style.minHeight = e + "px"
            })
          })
        },
        events: ["load", "resize"]
      },
      methods: {
        match: function(t) {
          if (t.length < 2) return {};
          var e = 0,
            i = [];
          return t = t.each(function(t, n) {
            var s, o, r;
            0 === n.offsetHeight && (s = fe(n), o = s.attr("style") || null, r = s.attr("hidden") || null, s.attr({
              style: o + ";display:block !important;",
              hidden: null
            })), e = Math.max(e, n.offsetHeight), i.push(n.offsetHeight), s && s.attr({
              style: o,
              hidden: r
            })
          }).filter(function(t) {
            return i[t] < e
          }), {
            height: e,
            elements: t
          }
        }
      }
    })
  }

  function Zt(e) {
    e.component("height-viewport", {
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean
      },
      defaults: {
        expand: !1,
        offsetTop: !1,
        offsetBottom: !1
      },
      update: {
        write: function() {
          this.$el.css("boxSizing", "border-box");
          var e, i = window.innerHeight,
            n = 0;
          if (this.expand) {
            this.$el.css({
              height: "",
              minHeight: ""
            });
            var s = i - document.documentElement.offsetHeight;
            s > 0 && this.$el.css("min-height", e = this.$el.outerHeight() + s)
          } else {
            var o = ut(this.$el);
            if (o < i / 2 && this.offsetTop && (n += o), this.offsetBottom === !0) n += this.$el.next().outerHeight() || 0;
            else if (t.isNumeric(this.offsetBottom)) n += i / 100 * this.offsetBottom;
            else if (this.offsetBottom && "px" === this.offsetBottom.substr(-2)) n += parseFloat(this.offsetBottom);
            else if (I(this.offsetBottom)) {
              var r = C(this.offsetBottom, this.$el);
              n += r && r.outerHeight() || 0
            }
            this.$el.css("min-height", e = n ? "calc(100vh - " + n + "px)" : "100vh")
          }
          this.$el.height(""), e && i - n >= this.$el.outerHeight() && this.$el.css("height", e)
        },
        events: ["load", "resize"]
      }
    })
  }

  function jt(t) {
    i(function() {
      if (He) {
        var e = "uk-hover";
        xe.on("tap", function(t) {
          var i = t.target;
          return fe("." + e).filter(function(t, e) {
            return !d(i, e)
          }).removeClass(e)
        }), Object.defineProperty(t, "hoverSelector", {
          set: function(t) {
            xe.on("tap", t, function(t) {
              var i = t.currentTarget;
              return i.classList.add(e)
            })
          }
        }), t.hoverSelector = ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]"
      }
    })
  }

  function Ft(t) {
    function e(e, i) {
      t.component(e, t.components.icon.extend({
        name: e,
        mixins: i ? [i] : [],
        defaults: {
          icon: e
        }
      }))
    }
    var i = {},
      n = {
        spinner: Ti,
        totop: _i,
        marker: vi,
        "close-icon": pi,
        "close-large": fi,
        "navbar-toggle-icon": wi,
        "overlay-icon": mi,
        "pagination-next": xi,
        "pagination-previous": yi,
        "search-icon": Ci,
        "search-large": ki,
        "search-navbar": bi,
        "slidenav-next": $i,
        "slidenav-next-large": Li,
        "slidenav-previous": Mi,
        "slidenav-previous-large": Bi
      };
    t.component("icon", t.components.svg.extend({
      attrs: ["icon", "ratio"],
      mixins: [ci],
      name: "icon",
      args: "icon",
      props: ["icon"],
      defaults: {
        exclude: ["id", "style", "class", "src", "icon"]
      },
      init: function() {
        this.$addClass("uk-icon"), ye && (this.icon = U(U(this.icon, "left", "right"), "previous", "next"))
      },
      update: {
        read: function() {
          if (this.delay) {
            var t = this.getIcon();
            t && (this.delay(t), this.delay = !1)
          }
        },
        events: ["load"]
      },
      methods: {
        getSvg: function() {
          var t = this,
            e = this.getIcon();
          return e ? M.resolve(e) : "complete" !== document.readyState ? M(function(e) {
            t.delay = e
          }) : M.reject("Icon not found.")
        },
        getIcon: function() {
          return n[this.icon] ? (i[this.icon] || (i[this.icon] = this.parse(n[this.icon])), i[this.icon]) : null
        }
      }
    })), ["marker", "navbar-toggle-icon", "overlay-icon", "pagination-previous", "pagination-next", "totop"].forEach(function(t) {
      return e(t)
    }), ["slidenav-previous", "slidenav-next"].forEach(function(t) {
      return e(t, {
        init: function() {
          this.$addClass("uk-slidenav"), this.$hasClass("uk-slidenav-large") && (this.icon += "-large")
        }
      })
    }), e("search-icon", {
      init: function() {
        this.$hasClass("uk-search-icon") && this.$el.parents(".uk-search-large").length ? this.icon = "search-large" : this.$el.parents(".uk-search-navbar").length && (this.icon = "search-navbar")
      }
    }), e("close", {
      init: function() {
        this.icon = "close-" + (this.$hasClass("uk-close-large") ? "large" : "icon")
      }
    }), e("spinner", {
      connected: function() {
        var t = this;
        this.svg.then(function(e) {
          return 1 !== t.ratio && fe(e).find("circle").css("stroke-width", 1 / t.ratio)
        }, Q)
      }
    }), t.icon.add = function(t) {
      return Ae(n, t)
    }
  }

  function qt(t) {
    t.component("margin", {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      defaults: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      computed: {
        items: function() {
          return this.$el[0].children
        }
      },
      update: {
        read: function() {
          var t = this;
          if (!this.items.length || 0 === this.$el[0].offsetHeight) return void(this.rows = !1);
          this.stacks = !0;
          for (var e = [
              []
            ], i = 0; i < this.items.length; i++) {
            var n = t.items[i],
              s = n.getBoundingClientRect();
            if (s.height)
              for (var o = e.length - 1; o >= 0; o--) {
                var r = e[o];
                if (!r[0]) {
                  r.push(n);
                  break
                }
                var h = r[0].getBoundingClientRect();
                if (s.top >= Math.floor(h.bottom)) {
                  e.push([n]);
                  break
                }
                if (Math.floor(s.bottom) > h.top) {
                  if (t.stacks = !1, s.left < h.left && !ye) {
                    r.unshift(n);
                    break
                  }
                  r.push(n);
                  break
                }
                if (0 === o) {
                  e.unshift([n]);
                  break
                }
              }
          }
          this.rows = e
        },
        write: function() {
          var t = this;
          this.rows && this.rows.forEach(function(e, i) {
            return e.forEach(function(e, n) {
              t.$toggleClass(e, t.margin, 0 !== i), t.$toggleClass(e, t.firstColumn, 0 === n)
            })
          })
        },
        events: ["load", "resize"]
      }
    })
  }

  function Vt(t) {
    t.component("modal", {
      mixins: [ui],
      defaults: {
        clsPage: "uk-modal-page",
        clsPanel: "uk-modal-dialog",
        selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
      },
      events: [{
        name: "show",
        self: !0,
        handler: function() {
          this.panel.hasClass("uk-margin-auto-vertical") ? this.$el.addClass("uk-flex") : this.$el.css("display", "block"), this.$el.height()
        }
      }, {
        name: "hidden",
        self: !0,
        handler: function() {
          this.$el.css("display", "").removeClass("uk-flex")
        }
      }]
    }), t.component("overflow-auto", {
      mixins: [ci],
      computed: {
        modal: function() {
          return this.$el.closest(".uk-modal")
        },
        panel: function() {
          return this.$el.closest(".uk-modal-dialog")
        }
      },
      connected: function() {
        this.$el.css("min-height", 150)
      },
      update: {
        write: function() {
          var t = this.$el.css("max-height");
          this.$el.css("max-height", 150).css("max-height", Math.max(150, 150 + this.modal.height() - this.panel.outerHeight(!0))), t !== this.$el.css("max-height") && this.$el.trigger("resize")
        },
        events: ["load", "resize"]
      }
    }), t.modal.dialog = function(e, i) {
      var n = t.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">' + e + "</div> </div> ", i);
      return n.$el.on("hidden", function(t) {
        t.target === t.currentTarget && n.$destroy(!0)
      }), n.show(), n
    }, t.modal.alert = function(e, i) {
      return i = Ae({
        bgClose: !1,
        escClose: !1,
        labels: t.modal.labels
      }, i), M(function(n) {
        return t.modal.dialog(' <div class="uk-modal-body">' + (I(e) ? e : fe(e).html()) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + i.labels.ok + "</button> </div> ", i).$el.on("hide", n)
      })
    }, t.modal.confirm = function(e, i) {
      return i = Ae({
        bgClose: !1,
        escClose: !1,
        labels: t.modal.labels
      }, i), M(function(n, s) {
        return t.modal.dialog(' <div class="uk-modal-body">' + (I(e) ? e : fe(e).html()) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close">' + i.labels.cancel + '</button> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + i.labels.ok + "</button> </div> ", i).$el.on("click", ".uk-modal-footer button", function(t) {
          return 0 === fe(t.target).index() ? s() : n()
        })
      })
    }, t.modal.prompt = function(e, i, n) {
      return n = Ae({
        bgClose: !1,
        escClose: !1,
        labels: t.modal.labels
      }, n), M(function(s) {
        var o = !1,
          r = t.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (I(e) ? e : fe(e).html()) + '</label> <input class="uk-input" type="text" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + n.labels.cancel + '</button> <button class="uk-button uk-button-primary" type="submit">' + n.labels.ok + "</button> </div> </form> ", n),
          h = r.$el.find("input").val(i);
        r.$el.on("submit", "form", function(t) {
          t.preventDefault(), s(h.val()), o = !0, r.hide()
        }).on("hide", function() {
          o || s(null)
        })
      })
    }, t.modal.labels = {
      ok: "Ok",
      cancel: "Cancel"
    }
  }

  function Wt(t) {
    t.component("nav", t.components.accordion.extend({
      name: "nav",
      defaults: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "ul:first"
      }
    }))
  }

  function Rt(t) {
    t.component("navbar", {
      mixins: [ci],
      props: {
        dropdown: String,
        mode: "list",
        align: String,
        offset: Number,
        boundary: Boolean,
        boundaryAlign: Boolean,
        clsDrop: String,
        delayShow: Number,
        delayHide: Number,
        dropbar: Boolean,
        dropbarMode: String,
        dropbarAnchor: "jQuery",
        duration: Number
      },
      defaults: {
        dropdown: ".uk-navbar-nav > li",
        align: ye ? "right" : "left",
        clsDrop: "uk-navbar-dropdown",
        mode: void 0,
        offset: void 0,
        delayShow: void 0,
        delayHide: void 0,
        boundaryAlign: void 0,
        flip: "x",
        boundary: !0,
        dropbar: !1,
        dropbarMode: "slide",
        dropbarAnchor: !1,
        duration: 200
      },
      computed: {
        boundary: function() {
          return this.$props.boundary === !0 || this.boundaryAlign ? this.$el : this.$props.boundary
        },
        pos: function() {
          return "bottom-" + this.align
        }
      },
      ready: function() {
        this.dropbar && t.navbarDropbar(C(this.dropbar, this.$el) || fe("<div></div>").insertAfter(this.dropbarAnchor || this.$el), {
          clsDrop: this.clsDrop,
          mode: this.dropbarMode,
          duration: this.duration,
          navbar: this
        })
      },
      update: function() {
        t.drop(fe(this.dropdown + " ." + this.clsDrop, this.$el).filter(function(e, i) {
          return !t.getComponent(i, "dropdown")
        }), Ae({}, this.$props, {
          boundary: this.boundary,
          pos: this.pos
        }))
      },
      events: [{
        name: Ze,
        delegate: function() {
          return this.dropdown
        },
        handler: function(t) {
          var e = t.currentTarget,
            i = this.getActive();
          i && i.toggle && !d(i.toggle.$el, e) && !i.tracker.movesTo(i.$el) && i.hide(!1)
        }
      }],
      methods: {
        getActive: function() {
          var e = t.drop.getActive();
          return e && !~e.mode.indexOf("click") && d(e.toggle.$el, this.$el) && e
        }
      }
    }), t.component("navbar-dropbar", {
      mixins: [ci],
      defaults: {
        clsDrop: "",
        mode: "slide",
        navbar: null,
        duration: 200
      },
      init: function() {
        "slide" === this.mode && this.$addClass("uk-navbar-dropbar-slide")
      },
      events: [{
        name: "beforeshow",
        el: function() {
          return this.navbar.$el
        },
        handler: function(t, e) {
          var i = e.$el,
            n = e.dir;
          if ("bottom" === n && !d(i, this.$el)) return i.appendTo(this.$el), e.show(), !1
        }
      }, {
        name: "mouseleave",
        handler: function() {
          var t = this.navbar.getActive();
          t && !this.$el.is(":hover") && t.hide()
        }
      }, {
        name: "beforeshow",
        handler: function(t, e) {
          var i = e.$el;
          this.clsDrop && i.addClass(this.clsDrop + "-dropbar"), this.transitionTo(i.outerHeight(!0))
        }
      }, {
        name: "beforehide",
        handler: function(t, e) {
          var i = e.$el,
            n = this.navbar.getActive();
          if (this.$el.is(":hover") && n && n.$el.is(i)) return !1
        }
      }, {
        name: "hide",
        handler: function(t, e) {
          var i = e.$el,
            n = this.navbar.getActive();
          (!n || n && n.$el.is(i)) && this.transitionTo(0)
        }
      }],
      methods: {
        transitionTo: function(t) {
          var e = this;
          return this.$el.height(this.$el[0].offsetHeight ? this.$el.height() : 0), Ce.cancel(this.$el).then(function() {
            return Ce.start(e.$el, {
              height: t
            }, e.duration).then(null, Q)
          })
        }
      }
    })
  }

  function Yt(t) {
    t.component("offcanvas", {
      mixins: [ui],
      args: "mode",
      props: {
        content: String,
        mode: String,
        flip: Boolean,
        overlay: Boolean
      },
      defaults: {
        content: ".uk-offcanvas-content:first",
        mode: "slide",
        flip: !1,
        overlay: !1,
        clsPage: "uk-offcanvas-page",
        clsContainer: "uk-offcanvas-container",
        clsPanel: "uk-offcanvas-bar",
        clsFlip: "uk-offcanvas-flip",
        clsContent: "uk-offcanvas-content",
        clsContentAnimation: "uk-offcanvas-content-animation",
        clsSidebarAnimation: "uk-offcanvas-bar-animation",
        clsMode: "uk-offcanvas",
        clsOverlay: "uk-offcanvas-overlay",
        selClose: ".uk-offcanvas-close"
      },
      computed: {
        content: function() {
          return fe(C(this.$props.content, this.$el))
        },
        clsFlip: function() {
          return this.flip ? this.$props.clsFlip : ""
        },
        clsOverlay: function() {
          return this.overlay ? this.$props.clsOverlay : ""
        },
        clsMode: function() {
          return this.$props.clsMode + "-" + this.mode
        },
        clsSidebarAnimation: function() {
          return "none" === this.mode || "reveal" === this.mode ? "" : this.$props.clsSidebarAnimation
        },
        clsContentAnimation: function() {
          return "push" !== this.mode && "reveal" !== this.mode ? "" : this.$props.clsContentAnimation
        },
        transitionElement: function() {
          return "reveal" === this.mode ? this.panel.parent() : this.panel
        }
      },
      update: {
        write: function() {
          this.isToggled() && ((this.overlay || this.clsContentAnimation) && this.content.width(window.innerWidth - this.scrollbarWidth), this.overlay && (this.content.height(window.innerHeight), ai && this.content.scrollTop(ai.y)))
        },
        events: ["resize"]
      },
      events: [{
        name: "click",
        delegate: function() {
          return 'a[href^="#"]'
        },
        handler: function(t) {
          var e = t.currentTarget;
          e.hash && this.content.find(e.hash).length && (ai = null, this.hide())
        }
      }, {
        name: "beforescroll",
        filter: function() {
          return this.overlay
        },
        handler: function(t, e, i) {
          if (e && i && this.isToggled() && this.content.find(i).length) return this.$el.one("hidden", function() {
            return e.scrollTo(i)
          }), !1
        }
      }, {
        name: "show",
        self: !0,
        handler: function() {
          ai = ai || {
            x: window.pageXOffset,
            y: window.pageYOffset
          }, "reveal" !== this.mode || this.panel.parent().hasClass(this.clsMode) || this.panel.wrap("<div>").parent().addClass(this.clsMode), xe.css("overflow-y", (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? "scroll" : ""), this.body.addClass(this.clsContainer + " " + this.clsFlip + " " + this.clsOverlay).height(), this.content.addClass(this.clsContentAnimation), this.panel.addClass(this.clsSidebarAnimation + " " + ("reveal" !== this.mode ? this.clsMode : "")), this.$el.addClass(this.clsOverlay).css("display", "block").height()
        }
      }, {
        name: "hide",
        self: !0,
        handler: function() {
          this.content.removeClass(this.clsContentAnimation), ("none" === this.mode || this.getActive() && this.getActive() !== this) && this.panel.trigger(Fe)
        }
      }, {
        name: "hidden",
        self: !0,
        handler: function() {
          if ("reveal" === this.mode && this.panel.unwrap(), this.overlay) {
            if (!ai) {
              var t = this.content[0],
                e = t.scrollLeft,
                i = t.scrollTop;
              ai = {
                x: e,
                y: i
              }
            }
          } else ai = {
            x: window.pageXOffset,
            y: window.pageYOffset
          };
          this.panel.removeClass(this.clsSidebarAnimation + " " + this.clsMode), this.$el.removeClass(this.clsOverlay).css("display", ""), this.body.removeClass(this.clsContainer + " " + this.clsFlip + " " + this.clsOverlay).scrollTop(ai.y), xe.css("overflow-y", ""), this.content.width("").height(""), window.scrollTo(ai.x, ai.y), ai = null
        }
      }, {
        name: "swipeLeft swipeRight",
        handler: function(t) {
          this.isToggled() && yt(t) && ("swipeLeft" === t.type && !this.flip || "swipeRight" === t.type && this.flip) && this.hide()
        }
      }]
    })
  }

  function Ut(t) {
    t.component("responsive", {
      props: ["width", "height"],
      init: function() {
        this.$addClass("uk-responsive-width")
      },
      update: {
        read: function() {
          this.dim = !!(this.$el.is(":visible") && this.width && this.height) && {
            width: this.$el.parent().width(),
            height: this.height
          }
        },
        write: function() {
          this.dim && this.$el.height($e.contain({
            height: this.height,
            width: this.width
          }, this.dim).height)
        },
        events: ["load", "resize"]
      }
    })
  }

  function Xt(t) {
    t.component("scroll", {
      props: {
        duration: Number,
        easing: String,
        offset: Number
      },
      defaults: {
        duration: 1e3,
        easing: "easeOutExpo",
        offset: 0
      },
      methods: {
        scrollTo: function(t) {
          var e = this,
            i = ut(fe(t)) - this.offset,
            n = m(),
            s = window.innerHeight;
          i + s > n && (i = n - s), h(this.$el, "beforescroll", [this, t]).result !== !1 && fe("html,body").stop().animate({
            scrollTop: Math.round(i)
          }, this.duration, this.easing).promise().then(function() {
            return e.$el.trigger("scrolled", [e, t])
          })
        }
      },
      events: {
        click: function(t) {
          t.isDefaultPrevented() || (t.preventDefault(), this.scrollTo(fe(this.$el[0].hash).length ? this.$el[0].hash : "body"))
        }
      }
    }), fe.easing.easeOutExpo = fe.easing.easeOutExpo || function(t, e, i, n, s) {
      return e === s ? i + n : n * (-Math.pow(2, -10 * e / s) + 1) + i
    }
  }

  function Qt(t) {
    t.component("scrollspy", {
      args: "cls",
      props: {
        cls: "list",
        target: String,
        hidden: Boolean,
        offsetTop: Number,
        offsetLeft: Number,
        repeat: Boolean,
        delay: Number
      },
      defaults: {
        cls: ["uk-scrollspy-inview"],
        target: !1,
        hidden: !0,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: !1,
        delay: 0,
        inViewClass: "uk-scrollspy-inview"
      },
      computed: {
        elements: function() {
          return this.target && fe(this.target, this.$el) || this.$el
        }
      },
      update: [{
        write: function() {
          this.hidden && this.elements.filter(":not(." + this.inViewClass + ")").css("visibility", "hidden")
        }
      }, {
        read: function() {
          var t = this;
          this.elements.each(function(e, i) {
            if (!i._scrollspy) {
              var n = fe(i).attr("uk-scrollspy-class");
              i._scrollspy = {
                toggles: n && n.split(",") || t.cls
              }
            }
            i._scrollspy.show = f(i, t.offsetTop, t.offsetLeft)
          })
        },
        write: function() {
          var t = this,
            e = 1 === this.elements.length ? 1 : 0;
          this.elements.each(function(i, n) {
            var s = fe(n),
              o = n._scrollspy,
              r = o.toggles[i] || o.toggles[0];
            if (o.show) {
              if (!o.inview && !o.timer) {
                var h = function() {
                  s.css("visibility", "").addClass(t.inViewClass).toggleClass(r).trigger("inview"), t.$update(), o.inview = !0, delete o.timer
                };
                t.delay && e ? o.timer = setTimeout(h, t.delay * e) : h(), e++
              }
            } else o.inview && t.repeat && (o.timer && (clearTimeout(o.timer), delete o.timer), s.removeClass(t.inViewClass).toggleClass(r).css("visibility", t.hidden ? "hidden" : "").trigger("outview"), t.$update(), o.inview = !1)
          })
        },
        events: ["scroll", "load", "resize"]
      }]
    })
  }

  function Jt(t) {
    t.component("scrollspy-nav", {
      props: {
        cls: String,
        closest: String,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number
      },
      defaults: {
        cls: "uk-active",
        closest: !1,
        scroll: !1,
        overflow: !0,
        offset: 0
      },
      computed: {
        links: function() {
          return this.$el.find('a[href^="#"]').filter(function(t, e) {
            return e.hash
          })
        },
        elements: function() {
          return this.closest ? this.links.closest(this.closest) : this.links
        },
        targets: function() {
          return fe(this.links.toArray().map(function(t) {
            return t.hash
          }).join(","))
        }
      },
      update: [{
        read: function() {
          this.scroll && t.scroll(this.links, {
            offset: this.offset || 0
          })
        }
      }, {
        read: function() {
          var t = this,
            e = window.pageYOffset + this.offset,
            i = m() - window.innerHeight + this.offset;
          this.active = !1, this.targets.each(function(n, s) {
            s = fe(s);
            var o = ut(s),
              r = n + 1 === t.targets.length;
            if (!t.overflow && (0 === n && o > e || r && o + s[0].offsetTop < e)) return !1;
            if (r || !(ut(t.targets.eq(n + 1)) <= e)) {
              if (e >= i)
                for (var h = t.targets.length - 1; h > n; h--)
                  if (f(t.targets.eq(h))) {
                    s = t.targets.eq(h);
                    break
                  }
              return !(t.active = Z(t.links.filter('[href="#' + s.attr("id") + '"]')))
            }
          })
        },
        write: function() {
          this.links.blur(), this.elements.removeClass(this.cls), this.active && this.$el.trigger("active", [this.active, (this.closest ? this.active.closest(this.closest) : this.active).addClass(this.cls)])
        },
        events: ["scroll", "load", "resize"]
      }]
    })
  }

  function Gt(e) {
    e.component("sticky", {
      mixins: [ci],
      attrs: !0,
      props: {
        top: null,
        bottom: Boolean,
        offset: Number,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        widthElement: "jQuery",
        showOnUp: Boolean,
        media: "media",
        target: Number
      },
      defaults: {
        top: 0,
        bottom: !1,
        offset: 0,
        animation: "",
        clsActive: "uk-active",
        clsInactive: "",
        clsFixed: "uk-sticky-fixed",
        clsBelow: "uk-sticky-below",
        selTarget: "",
        widthElement: !1,
        showOnUp: !1,
        media: !1,
        target: !1
      },
      computed: {
        selTarget: function() {
          return this.$props.selTarget && Z(this.$props.selTarget, this.$el) || this.$el
        }
      },
      connected: function() {
        this.placeholder = fe('<div class="uk-sticky-placeholder"></div>'), this.widthElement = this.$props.widthElement || this.placeholder, this.isActive || this.hide()
      },
      disconnected: function() {
        this.isActive && (this.isActive = !1, this.hide(), this.$removeClass(this.clsInactive)), this.placeholder.remove(), this.placeholder = null, this.widthElement = null
      },
      ready: function() {
        var t = this;
        if (this.target && location.hash && window.pageYOffset > 0) {
          var e = C(location.hash);
          e && Se(function() {
            var i = ut(e),
              n = ut(t.$el),
              s = t.$el[0].offsetHeight;
            n + s >= i && n <= i + e[0].offsetHeight && window.scrollTo(0, i - s - t.target - t.offset)
          })
        }
      },
      events: [{
        name: "active",
        handler: function() {
          this.$addClass(this.selTarget, this.clsActive), this.$removeClass(this.selTarget, this.clsInactive)
        }
      }, {
        name: "inactive",
        handler: function() {
          this.$addClass(this.selTarget, this.clsInactive), this.$removeClass(this.selTarget, this.clsActive)
        }
      }],
      update: [{
        write: function() {
          var e, i = this,
            n = (this.isActive ? this.placeholder : this.$el)[0].offsetHeight;
          this.placeholder.css("height", "absolute" !== this.$el.css("position") ? n : "").css(this.$el.css(["marginTop", "marginBottom", "marginLeft", "marginRight"])), document.documentElement.contains(this.placeholder[0]) || this.placeholder.insertAfter(this.$el).attr("hidden", !0), this.width = this.widthElement.attr("hidden", null)[0].offsetWidth, this.widthElement.attr("hidden", !this.isActive), this.topOffset = ut(this.isActive ? this.placeholder : this.$el), this.bottomOffset = this.topOffset + n, ["top", "bottom"].forEach(function(n) {
            i[n] = i.$props[n], i[n] && (t.isNumeric(i[n]) ? i[n] = i[n + "Offset"] + parseFloat(i[n]) : I(i[n]) && i[n].match(/^-?\d+vh$/) ? i[n] = window.innerHeight * parseFloat(i[n]) / 100 : (e = i[n] === !0 ? i.$el.parent() : C(i[n], i.$el), e && (i[n] = ut(e) + e[0].offsetHeight)))
          }), this.top = Math.max(parseFloat(this.top), this.topOffset) - this.offset, this.bottom = this.bottom && this.bottom - n, this.inactive = this.media && !window.matchMedia(this.media).matches, this.isActive && this.update()
        },
        events: ["load", "resize"]
      }, {
        read: function() {
          this.offsetTop = ut(this.$el), this.scroll = window.pageYOffset, this.visible = this.$el.is(":visible")
        },
        write: function(t) {
          var e = this;
          void 0 === t && (t = {});
          var i = t.dir,
            n = this.scroll;
          if (!(n < 0 || !this.visible || this.disabled || this.showOnUp && !i))
            if (this.inactive || n < this.top || this.showOnUp && (n <= this.top || "down" === i || "up" === i && !this.isActive && n <= this.bottomOffset)) {
              if (!this.isActive) return;
              this.isActive = !1, this.animation && n > this.topOffset ? ke.cancel(this.$el).then(function() {
                return ke.out(e.$el, e.animation).then(function() {
                  return e.hide()
                }, Q)
              }) : this.hide()
            } else this.isActive ? this.update() : this.animation ? ke.cancel(this.$el).then(function() {
              e.show(), ke["in"](e.$el, e.animation).then(null, Q)
            }) : this.show()
        },
        events: ["scroll"]
      }],
      methods: {
        show: function() {
          this.isActive = !0, this.update(), this.placeholder.attr("hidden", null)
        },
        hide: function() {
          this.isActive && !this.$hasClass(this.selTarget, this.clsActive) || this.$el.trigger("inactive"), this.$removeClass(this.clsFixed, this.clsBelow), this.$el.css({
            position: "",
            top: "",
            width: ""
          }), this.placeholder.attr("hidden", !0)
        },
        update: function() {
          var t = this,
            e = Math.max(0, this.offset),
            i = this.scroll > this.top;
          this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), this.$el.css({
            position: "fixed",
            top: e + "px",
            width: this.width
          }), this.$hasClass(this.selTarget, this.clsActive) ? i || this.$el.trigger("inactive") : i && this.$el.trigger("active"), this.$toggleClass(this.clsBelow, this.scroll > this.bottomOffset), this.showOnUp ? Se(function() {
            return t.$addClass(t.clsFixed)
          }) : this.$addClass(this.clsFixed)
        }
      }
    })
  }

  function Kt(e) {
    e.component("svg", {
      attrs: !0,
      props: {
        id: String,
        icon: String,
        src: String,
        style: String,
        width: Number,
        height: Number,
        ratio: Number,
        "class": String
      },
      defaults: {
        ratio: 1,
        id: !1,
        exclude: ["src"],
        "class": ""
      },
      init: function() {
        this["class"] += " uk-svg"
      },
      connected: function() {
        var t = this;
        if (!this.icon && this.src && ~this.src.indexOf("#")) {
          var e = this.src.split("#");
          e.length > 1 && (this.src = e[0], this.icon = e[1])
        }
        this.width = this.$props.width, this.height = this.$props.height, this.svg = this.getSvg().then(function(e) {
          return M(function(i, n) {
            var s, o;
            if (!e) return void n("SVG not found.");
            if (t.icon)
              if (s = e.getElementById(t.icon)) {
                var r = s.outerHTML;
                if (!r) {
                  var h = document.createElement("div");
                  h.appendChild(s.cloneNode(!0)), r = h.innerHTML
                }
                r = r.replace(/<symbol/g, "<svg" + (~r.indexOf("xmlns") ? "" : ' xmlns="http://www.w3.org/2000/svg"')).replace(/symbol>/g, "svg>"), o = Ei.parseFromString(r, "image/svg+xml").documentElement
              } else e.querySelector("symbol") || (o = e.documentElement.cloneNode(!0));
            else o = e.documentElement.cloneNode(!0);
            if (!o) return void n("SVG not found.");
            var l = o.getAttribute("viewBox");
            l && (l = l.split(" "), t.width = t.width || l[2], t.height = t.height || l[3]), t.width *= t.ratio, t.height *= t.ratio;
            for (var a in t.$options.props) t[a] && !~t.exclude.indexOf(a) && o.setAttribute(a, t[a]);
            t.id || o.removeAttribute("id"), t.width && !t.height && o.removeAttribute("height"), t.height && !t.width && o.removeAttribute("width");
            var c = t.$el[0];
            y(c) || "CANVAS" === c.tagName ? (t.$el.attr({
              hidden: !0,
              id: null
            }), c.nextSibling ? o.isEqualNode(c.nextSibling) ? o = c.nextSibling : c.parentNode.insertBefore(o, c.nextSibling) : c.parentNode.appendChild(o)) : c.lastChild && o.isEqualNode(c.lastChild) ? o = c.lastChild : c.appendChild(o), i(o)
          })
        })
      },
      disconnected: function() {
        y(this.$el) && this.$el.attr({
          hidden: null,
          id: this.id || null
        }), this.svg && (this.svg.then(function(t) {
          return t.parentNode && t.parentNode.removeChild(t)
        }, Q), this.svg = null)
      },
      methods: {
        getSvg: function() {
          var e = this;
          return this.src ? Ai[this.src] ? Ai[this.src] : (Ai[this.src] = M(function(i, n) {
            0 === e.src.lastIndexOf("data:", 0) ? i(e.parse(decodeURIComponent(e.src.split(",")[1]))) : t.ajax(e.src, {
              dataType: "html"
            }).then(function(t) {
              i(e.parse(t))
            }, function() {
              n("SVG not found.")
            })
          }), Ai[this.src]) : M.reject()
        },
        parse: function(t) {
          var e = Ei.parseFromString(t, "image/svg+xml");
          return e.documentElement && "svg" === e.documentElement.nodeName ? e : null
        }
      }
    })
  }

  function te(t) {
    t.component("switcher", {
      mixins: [di],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        active: Number,
        swiping: Boolean
      },
      defaults: {
        connect: !1,
        toggle: " > *",
        active: 0,
        swiping: !0,
        cls: "uk-active",
        clsContainer: "uk-switcher",
        attrItem: "uk-switcher-item",
        queued: !0
      },
      computed: {
        connects: function() {
          return C(this.connect, this.$el) || fe(this.$el.next("." + this.clsContainer))
        },
        toggles: function() {
          return fe(this.toggle, this.$el)
        }
      },
      events: [{
        name: "click",
        delegate: function() {
          return this.toggle + ":not(.uk-disabled)"
        },
        handler: function(t) {
          t.preventDefault(), this.show(t.currentTarget)
        }
      }, {
        name: "click",
        el: function() {
          return this.connects
        },
        delegate: function() {
          return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
        },
        handler: function(t) {
          t.preventDefault(), this.show(fe(t.currentTarget)[t.currentTarget.hasAttribute(this.attrItem) ? "attr" : "data"](this.attrItem))
        }
      }, {
        name: "swipeRight swipeLeft",
        filter: function() {
          return this.swiping
        },
        el: function() {
          return this.connects
        },
        handler: function(t) {
          yt(t) && (t.preventDefault(), window.getSelection().toString() || this.show("swipeLeft" === t.type ? "next" : "previous"))
        }
      }],
      update: function() {
        this.updateAria(this.connects.children()), this.show(Z(this.toggles.filter("." + this.cls + ":first")) || Z(this.toggles.eq(this.active)) || this.toggles.first())
      },
      methods: {
        show: function(t) {
          for (var e, i = this, n = this.toggles.length, s = this.connects.children("." + this.cls).index(), o = s >= 0, r = x(t, this.toggles, s), h = "previous" === t ? -1 : 1, l = 0; l < n; l++, r = (r + h + n) % n)
            if (!i.toggles.eq(r).is(".uk-disabled, [disabled]")) {
              e = i.toggles.eq(r);
              break
            }!e || s >= 0 && e.hasClass(this.cls) || s === r || (this.toggles.removeClass(this.cls).attr("aria-expanded", !1), e.addClass(this.cls).attr("aria-expanded", !0), o ? this.toggleElement(this.connects.children(":nth-child(" + (s + 1) + "),:nth-child(" + (r + 1) + ")")) : this.toggleNow(this.connects.children(":nth-child(" + (r + 1) + ")")))
        }
      }
    })
  }

  function ee(t) {
    t.component("tab", t.components.switcher.extend({
      mixins: [ci],
      name: "tab",
      props: {
        media: "media"
      },
      defaults: {
        media: 960,
        attrItem: "uk-tab-item"
      },
      init: function() {
        var e = this.$hasClass("uk-tab-left") && "uk-tab-left" || this.$hasClass("uk-tab-right") && "uk-tab-right";
        e && t.toggle(this.$el, {
          cls: e,
          mode: "media",
          media: this.media
        })
      }
    }))
  }

  function ie(t) {
    t.component("toggle", {
      mixins: [t.mixin.togglable],
      args: "target",
      props: {
        href: String,
        target: null,
        mode: "list",
        media: "media"
      },
      defaults: {
        href: !1,
        target: !1,
        mode: "click",
        queued: !0,
        media: !1
      },
      computed: {
        target: function() {
          return C(this.$props.target || this.href, this.$el) || this.$el
        }
      },
      events: [{
        name: Ze + " " + je,
        filter: function() {
          return ~this.mode.indexOf("hover")
        },
        handler: function(t) {
          yt(t) || this.toggle("toggle" + (t.type === Ze ? "show" : "hide"))
        }
      }, {
        name: "click",
        filter: function() {
          return ~this.mode.indexOf("click") || He
        },
        handler: function(t) {
          if (yt(t) || ~this.mode.indexOf("click")) {
            var e = fe(t.target).closest("a[href]")[0];
            (fe(t.target).closest('a[href="#"], button').length || e && (this.cls || !this.target.is(":visible") || e.hash && this.target.is(e.hash))) && t.preventDefault(), this.toggle()
          }
        }
      }],
      update: {
        write: function() {
          if (~this.mode.indexOf("media") && this.media) {
            var t = this.isToggled(this.target);
            (window.matchMedia(this.media).matches ? !t : t) && this.toggle()
          }
        },
        events: ["load", "resize"]
      },
      methods: {
        toggle: function(t) {
          h(this.target, t || "toggle", [this], !0).isDefaultPrevented() || this.toggleElement(this.target)
        }
      }
    })
  }

  function ne(t) {
    t.component("leader", {
      mixins: [ci],
      props: {
        fill: String,
        media: "media"
      },
      defaults: {
        fill: "",
        media: !1,
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill"
      },
      computed: {
        fill: function() {
          return this.$props.fill || G("leader-fill")
        }
      },
      connected: function() {
        this.wrapper = this.$el.wrapInner('<span class="' + this.clsWrapper + '">').children().first()
      },
      disconnected: function() {
        this.wrapper.contents().unwrap()
      },
      update: [{
        read: function() {
          var t = this._width;
          this._width = Math.floor(this.$el[0].offsetWidth / 2), this._changed = t !== this._width, this._hide = this.media && !window.matchMedia(this.media).matches
        },
        write: function() {
          this.wrapper.toggleClass(this.clsHide, this._hide), this._changed && this.wrapper.attr(this.attrFill, new Array(this._width).join(this.fill))
        },
        events: ["load", "resize"]
      }]
    })
  }

  function se(t) {
    t.component("video", {
      props: {
        automute: Boolean,
        autoplay: Boolean
      },
      defaults: {
        automute: !1,
        autoplay: !0
      },
      computed: {
        el: function() {
          return this.$el[0]
        }
      },
      ready: function() {
        this.player = new Xe(this.el), this.automute && this.player.mute()
      },
      update: {
        write: function() {
          this.player && this.autoplay && (0 === this.el.offsetHeight || "hidden" === this.$el.css("visibility") ? this.player.pause() : this.player.play())
        },
        events: ["load"]
      }
    })
  }

  function oe(t) {
    var e = 0,
      i = 0;
    n(window, "load resize", t.update), n(window, "scroll", function(i) {
      i.dir = e < window.pageYOffset ? "down" : "up", e = window.pageYOffset, t.update(i), We.flush()
    }), qe && n(document, qe, function(t) {
      var e = t.target;
      (J(e, "animationName") || "").match(/^uk-.*(left|right)/) && (i++, document.body.style.overflowX = "hidden", setTimeout(function() {
        --i || (document.body.style.overflowX = "")
      }, Y(J(e, "animationDuration")) + 100))
    }, !0), t.use(ie), t.use(Et), t.use(St), t.use(se), t.use(Ot), t.use(Dt), t.use(It), t.use(Ht), t.use(Pt), t.use(Zt), t.use(jt), t.use(qt), t.use(Nt), t.use(zt), t.use(ne), t.use(Vt), t.use(Wt), t.use(Rt), t.use(Yt), t.use(Ut), t.use(Xt), t.use(Qt), t.use(Jt), t.use(Gt), t.use(Kt), t.use(Ft), t.use(te), t.use(ee)
  }

  function re(t) {
    function e(t) {
      var e = t - Date.now();
      return {
        total: e,
        seconds: e / 1e3 % 60,
        minutes: e / 1e3 / 60 % 60,
        hours: e / 1e3 / 60 / 60 % 24,
        days: e / 1e3 / 60 / 60 / 24
      }
    }
    re.installed || t.component("countdown", {
      mixins: [t.mixin["class"]],
      attrs: !0,
      props: {
        date: String,
        clsWrapper: String
      },
      defaults: {
        date: "",
        clsWrapper: ".uk-countdown-%unit%"
      },
      computed: {
        date: function() {
          return Date.parse(this.$props.date)
        },
        days: function() {
          return this.$el.find(this.clsWrapper.replace("%unit%", "days"))
        },
        hours: function() {
          return this.$el.find(this.clsWrapper.replace("%unit%", "hours"))
        },
        minutes: function() {
          return this.$el.find(this.clsWrapper.replace("%unit%", "minutes"))
        },
        seconds: function() {
          return this.$el.find(this.clsWrapper.replace("%unit%", "seconds"))
        },
        units: function() {
          var t = this;
          return ["days", "hours", "minutes", "seconds"].filter(function(e) {
            return t[e].length
          })
        }
      },
      connected: function() {
        this.start()
      },
      disconnected: function() {
        var t = this;
        this.stop(), this.units.forEach(function(e) {
          return t[e].empty()
        })
      },
      update: {
        write: function() {
          var t = this,
            i = e(this.date);
          i.total <= 0 && (this.stop(), i.days = i.hours = i.minutes = i.seconds = 0), this.units.forEach(function(e) {
            var n = String(Math.floor(i[e]));
            if (n = n.length < 2 ? "0" + n : n, t[e].text() !== n) {
              var s = t[e];
              n = n.split(""), n.length !== s.children().length && s.empty().append(n.map(function() {
                return "<span></span>"
              }).join("")), n.forEach(function(t, e) {
                return s[0].childNodes[e].innerText = t
              })
            }
          })
        }
      },
      methods: {
        start: function() {
          var t = this;
          this.stop(), this.date && this.units.length && (this.$emit(), this.timer = setInterval(function() {
            return t.$emit()
          }, 1e3))
        },
        stop: function() {
          this.timer && (clearInterval(this.timer), this.timer = null)
        }
      }
    })
  }

  function he(t) {
    function e(t, e, i, n, o, r) {
      t = t in x ? x[t] : x.slide;
      var h = t.show(o);
      return {
        dir: o,
        current: i,
        next: n,
        show: function(t, s) {
          var o = this;
          return void 0 === s && (s = 0), t -= Math.round(t * s), this.translate(s), f.all([w.start(i, h[0], t, e), w.start(n, h[1], t, e)]).then(function() {
            o.reset(), r()
          }, l)
        },
        stop: function() {
          return f.all([w.stop(n), w.stop(i)])
        },
        cancel: function() {
          return f.all([w.cancel(n), w.cancel(i)])
        },
        reset: function() {
          for (var t in h[0]) s([n[0], i[0]]).css(t, "")
        },
        forward: function(t) {
          var e = this,
            s = this.percent();
          return f.all([w.cancel(n), w.cancel(i)]).then(function() {
            return e.show(t, s)
          })
        },
        translate: function(e) {
          var s = t.translate(e, o);
          i.css(s[0]), n.css(s[1])
        },
        percent: function() {
          return t.percent(i, n, o)
        }
      }
    }

    function i(t) {
      return ~~t
    }
    if (!he.installed) {
      var n = t.util,
        s = n.$,
        o = n.doc,
        r = n.fastdom,
        h = n.getIndex,
        l = n.noop,
        a = n.on,
        c = n.off,
        d = n.pointerDown,
        u = n.pointerMove,
        g = n.pointerUp,
        p = n.preventClick,
        f = n.promise,
        v = n.requestAnimationFrame,
        w = n.Transition;
      t.mixin.slideshow = {
        attrs: !0,
        props: {
          autoplay: Number,
          animation: String,
          transition: String,
          duration: Number
        },
        defaults: {
          autoplay: 0,
          animation: "slide",
          transition: "linear",
          duration: 400,
          index: 0,
          stack: [],
          threshold: 10,
          percent: 0,
          clsActive: "uk-active"
        },
        computed: {
          slides: function() {
            return this.list.children("." + this.clsItem)
          },
          forwardDuration: function() {
            return this.duration / 4
          }
        },
        init: function() {
          var t = this;
          ["start", "move", "end"].forEach(function(e) {
            var i = t[e];
            t[e] = function(e) {
              e = e.originalEvent || e, t.prevPos = t.pos, t.pos = (e.touches && e.touches[0] || e).pageX, i(e)
            }
          })
        },
        connected: function() {
          this.startAutoplay()
        },
        events: [{
          name: "click",
          delegate: function() {
            return "[" + this.attrItem + "]"
          },
          handler: function(t) {
            t.preventDefault(), this.show(s(t.currentTarget).blur().attr(this.attrItem))
          }
        }, {
          name: d,
          delegate: function() {
            return "." + this.clsItem
          },
          handler: "start"
        }, {
          name: d,
          handler: "stopAutoplay"
        }, {
          name: "mouseenter",
          filter: function() {
            return this.autoplay
          },
          handler: function() {
            this.isHovering = !0
          }
        }, {
          name: "mouseleave",
          filter: function() {
            return this.autoplay
          },
          handler: function() {
            this.isHovering = !1
          }
        }],
        methods: {
          start: function(t) {
            if (!(t.button && 0 !== t.button || this.slides.length < 2)) {
              t.preventDefault();
              var e = 0;
              if (this.stack.length) {
                this.percent = this._animation.percent();
                var i = this._animation.dir;
                e = this.percent * i, this.stack.splice(0, this.stack.length), this._animation.cancel(), this._animation.translate(Math.abs(e)), this.index = this.getIndex(this.index - i), this.touching = !0
              }
              a(o, u, this.move, !0), a(o, g, this.end, !0);
              var n = this.slides.eq(this.index);
              this.touch = {
                el: n,
                start: this.pos + (e ? n.outerWidth() * e : 0)
              }
            }
          },
          move: function(n) {
            var s = this;
            n.preventDefault();
            var o = this.touch,
              r = o.start,
              a = o.el;
            if (!(this.pos === this.prevPos || !this.touching && Math.abs(r - this.pos) < this.threshold)) {
              this.touching = !0;
              var c = (this.pos - r) / a.outerWidth();
              if (this.percent !== c) {
                var d = i(this.percent) !== i(c),
                  u = this.getIndex(this.index - i(c)),
                  g = this.slides.eq(u),
                  p = c < 0 ? 1 : -1,
                  f = h(c < 0 ? "next" : "previous", this.slides, u),
                  v = this.slides.eq(f);
                this.slides.each(function(t, e) {
                  return s.$toggleClass(e, s.clsActive, t === u || t === f)
                }), d && this._animation && this._animation.reset(), this._animation = new e(this.animation, this.transition, g, v, p, l), this._animation.translate(Math.abs(c % 1)), this.percent = c, t.update(null, g), t.update(null, v)
              }
            }
          },
          end: function(t) {
            if (t.preventDefault(), c(o, u, this.move, !0), c(o, g, this.end, !0), this.touching) {
              var e = this.percent;
              this.percent = Math.abs(this.percent) % 1, this.index = this.getIndex(this.index - i(e)), this.percent < .2 && (this.index = this.getIndex(e > 0 ? "previous" : "next"), this.percent = 1 - this.percent, e *= -1), this.show(e > 0 ? "previous" : "next", !0), p()
            }
            this.pos = this.prevPos = this.touch = this.touching = this.percent = null
          },
          show: function(i, n) {
            var s = this;
            if (void 0 === n && (n = !1), n || !this.touch) {
              if (this.stack[n ? "unshift" : "push"](i), !n && this.stack.length > 1) return void(2 === this.stack.length && this._animation.forward(this.forwardDuration));
              var o = this.slides.hasClass("uk-active"),
                h = "next" === i ? 1 : "previous" === i ? -1 : i < this.index ? -1 : 1;
              if (i = this.getIndex(i), o && i === this.index) return void this.stack[n ? "shift" : "pop"]();
              var l = o && this.slides.eq(this.index),
                a = this.slides.eq(i);
              this.$el.trigger("beforeitemshow", [this, a]), l && this.$el.trigger("beforeitemhide", [this, l]), this.index = i, this.$addClass(a, this.clsActive), this._animation = new e(l ? this.animation : "scale", this.transition, l || a, a, h, function() {
                l && s.$removeClass(l, s.clsActive), s.stack.shift(), s.stack.length ? v(function() {
                  return s.show(s.stack.shift(), !0)
                }) : s._animation = null, s.$el.trigger("itemshown", [s, a]), t.update(null, a), l && (s.$el.trigger("itemhidden", [s, l]), t.update(null, l))
              }), this._animation.show(this.stack.length > 1 ? this.forwardDuration : this.duration, this.percent), this.$el.trigger("itemshow", [this, a]), l && (this.$el.trigger("itemhide", [this, l]), t.update(null, l)), t.update(null, a), r.flush()
            }
          },
          getIndex: function(t) {
            return void 0 === t && (t = this.index), h(t, this.slides, this.index)
          },
          startAutoplay: function() {
            var t = this;
            this.stopAutoplay(), this.autoplay && (this.interval = setInterval(function() {
              !t.isHovering && t.show("next")
            }, this.autoplay))
          },
          stopAutoplay: function() {
            this.interval && clearInterval(this.interval)
          }
        }
      };
      var m = .2,
        x = {
          fade: {
            show: function() {
              return [{
                opacity: 0
              }, {
                opacity: 1
              }]
            },
            percent: function(t) {
              return 1 - t.css("opacity")
            },
            translate: function(t) {
              return [{
                opacity: 1 - t
              }, {
                opacity: t
              }]
            }
          },
          slide: {
            show: function(t) {
              return [{
                transform: "translate3d(" + t * -100 + "%, 0, 0)"
              }, {
                transform: "translate3d(0, 0, 0)"
              }]
            },
            percent: function(t) {
              return Math.abs(t.css("transform").split(",")[4] / t.outerWidth())
            },
            translate: function(t, e) {
              return [{
                transform: "translate3d(" + e * -100 * t + "%, 0, 0)"
              }, {
                transform: "translate3d(" + 100 * e * (1 - t) + "%, 0, 0)"
              }]
            }
          },
          scale: {
            show: function() {
              return [{
                opacity: 0,
                transform: "scale3d(" + (1 - m) + ", " + (1 - m) + ", 1)"
              }, {
                opacity: 1,
                transform: "scale3d(1, 1, 1)"
              }]
            },
            percent: function(t) {
              return 1 - t.css("opacity")
            },
            translate: function(t) {
              var e = 1 - m * t,
                i = 1 - m + m * t;
              return [{
                opacity: 1 - t,
                transform: "scale3d(" + e + ", " + e + ", 1)"
              }, {
                opacity: t,
                transform: "scale3d(" + i + ", " + i + ", 1)"
              }]
            }
          },
          swipe: {
            show: function(t) {
              return t < 0 ? [{
                opacity: 1,
                transform: "translate3d(100%, 0, 0)",
                zIndex: 0
              }, {
                opacity: 1,
                transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)",
                zIndex: -1
              }] : [{
                opacity: .3,
                transform: "scale3d(" + (1 - m) + ", " + (1 - m) + ", 1) translate3d(-20%, 0, 0)",
                zIndex: -1
              }, {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
                zIndex: 0
              }]
            },
            percent: function y(t, e, i) {
              var n = i < 0 ? t : e,
                y = Math.abs(n.css("transform").split(",")[4] / n.outerWidth());
              return i < 0 ? y : 1 - y
            },
            translate: function(t, e) {
              var i;
              return e < 0 ? (i = 1 - m * (1 - t), [{
                opacity: 1,
                transform: "translate3d(" + 100 * t + "%, 0, 0)",
                zIndex: 0
              }, {
                opacity: .3 + .7 * t,
                transform: "scale3d(" + i + ", " + i + ", 1) translate3d(" + -20 * (1 - t) + "%, 0, 0)",
                zIndex: -1
              }]) : (i = 1 - m * t, [{
                opacity: 1 - .7 * t,
                transform: "scale3d(" + i + ", " + i + ", 1) translate3d(" + -20 * t + "%, 0, 0)",
                zIndex: -1
              }, {
                opacity: 1,
                transform: "translate3d(" + 100 * (1 - t) + "%, 0, 0)",
                zIndex: 0
              }])
            }
          }
        }
    }
  }

  function le(t) {/*
    function e(t, e, i) {
      void 0 === i && (i = "in"), t.each(function(n) {
        return h[i](t.eq(n).attr("hidden", !1), e).then(function() {
          "out" === i && t.eq(n).attr("hidden", !0)
        })
      })
    }

    function i(t, e, i) {
      return '<iframe src="' + t + '" width="' + e + '" height="' + i + '" style="max-width: 100%; box-sizing: border-box;" uk-video uk-responsive></iframe>'
    }
    if (!le.installed) {
      t.use(he);
      var n = t.mixin,
        s = t.util,
        o = s.$,
        r = s.$trigger,
        h = s.Animation,
        l = s.ajax,
        a = s.assign,
        c = s.doc,
        d = s.docElement,
        u = s.getData,
        g = s.getImage,
        p = s.pointerDown,
        f = s.pointerMove,
        v = s.Transition;
      t.component("lightbox", {
        attrs: !0,
        props: {
          animation: String,
          toggle: String
        },
        defaults: {
          animation: void 0,
          toggle: "a"
        },
        computed: {
          toggles: function w() {
            var t = this,
              w = o(this.toggle, this.$el);
            return this._changed = !this._toggles || w.length !== this._toggles.length || w.toArray().some(function(e, i) {
              return e !== t._toggles.get(i)
            }), this._toggles = w
          }
        },
        disconnected: function() {
          this.panel && (this.panel.$destroy(!0), this.panel = null)
        },
        events: [{
          name: "click",
          delegate: function() {
            return this.toggle + ":not(.uk-disabled)"
          },
          handler: function(t) {
            t.preventDefault(), this.show(this.toggles.index(o(t.currentTarget).blur()))
          }
        }],
        update: function() {
          this.panel && this.animation && (this.panel.$props.animation = this.animation, this.panel.$emit()), this.toggles.length && this._changed && this.panel && (this.panel.$destroy(!0), this._init())
        },
        methods: {
          _init: function() {
            return this.panel = this.panel || t.lightboxPanel({
              animation: this.animation,
              items: this.toggles.toArray().reduce(function(t, e) {
                return t.push(["href", "caption", "type"].reduce(function(t, i) {
                  return t["href" === i ? "source" : i] = u(e, i), t
                }, {})), t
              }, [])
            })
          },
          show: function(t) {
            return this.panel || this._init(), this.panel.show(t)
          },
          hide: function() {
            return this.panel && this.panel.hide()
          }
        }
      }), t.component("lightbox-panel", {
        mixins: [n.togglable, n.slideshow],
        functional: !0,
        defaults: {
          preload: 1,
          delayControls: 3e3,
          items: [],
          cls: "uk-open",
          clsPage: "uk-lightbox-page",
          clsItem: "uk-lightbox-item",
          attrItem: "uk-lightbox-item",
          template: ' <div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close uk-toggle="!.uk-lightbox"></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center"></div> </div>'
        },
        computed: {
          container: function() {
            return o(this.$props.container === !0 && t.container || this.$props.container || t.container)
          }
        },
        created: function() {
          var t = this;
          this.$mount(o(this.template).appendTo(this.container)[0]), this.list = this.$el.find(".uk-lightbox-items"), this.toolbars = this.$el.find(".uk-lightbox-toolbar"), this.nav = this.$el.find("a[uk-lightbox-item]"), this.caption = this.$el.find(".uk-lightbox-caption"), this.items.forEach(function(e, i) {
            return t.list.append('<li class="' + t.clsItem + " item-" + i + '"></li>')
          })
        },
        events: [{
          name: f + " " + p + " keydown",
          handler: "showControls"
        }, {
          name: "click",
          self: !0,
          handler: function(t) {
            t.preventDefault(), this.hide()
          }
        }, {
          name: "click",
          self: !0,
          delegate: function() {
            return "." + this.clsItem
          },
          handler: function(t) {
            t.preventDefault(), this.hide()
          }
        }, {
          name: "show",
          self: !0,
          handler: function() {
            this.$addClass(d, this.clsPage)
          }
        }, {
          name: "shown",
          self: !0,
          handler: function() {
            this.$addClass(this.caption, "uk-animation-slide-bottom"), this.toolbars.attr("hidden", !0), this.nav.attr("hidden", !0), this.showControls()
          }
        }, {
          name: "hide",
          self: !0,
          handler: function() {
            this.$removeClass(this.caption, "uk-animation-slide-bottom"), this.toolbars.attr("hidden", !0), this.nav.attr("hidden", !0)
          }
        }, {
          name: "hidden",
          self: !0,
          handler: function() {
            this.$removeClass(d, this.clsPage)
          }
        }, {
          name: "keydown",
          el: function() {
            return c
          },
          handler: function(t) {
            if (this.isToggled(this.$el)) switch (t.keyCode) {
              case 27:
                this.hide();
                break;
              case 37:
                this.show("previous");
                break;
              case 39:
                this.show("next")
            }
          }
        }, {
          name: "toggle",
          handler: function(t) {
            t.preventDefault(), this.toggle()
          }
        }, {
          name: "beforeitemshow",
          self: !0,
          handler: function() {
            this.isToggled() || this.toggleNow(this.$el, !0)
          }
        }, {
          name: "itemshow",
          self: !0,
          handler: function() {
            var t = this,
              e = this.getItem().caption;
            this.caption.toggle(!!e).html(e);
            for (var i = 0; i <= this.preload; i++) t.loadItem(t.getIndex(t.index + i)), t.loadItem(t.getIndex(t.index - i))
          }
        }, {
          name: "itemload",
          handler: function(t, e) {
            var n, s = this,
              r = e.source,
              h = e.type;
            if (this.setItem(e, "<span uk-spinner></span>"), r) {
              if ("image" === h || r.match(/\.(jp(e)?g|png|gif|svg)$/i)) g(r).then(function(t) {
                return s.setItem(e, '<img width="' + t.width + '" height="' + t.height + '" src="' + r + '">')
              }, function() {
                return s.setError(e)
              });
              else if ("video" === h || r.match(/\.(mp4|webm|ogv)$/i)) var a = o("<video controls playsinline uk-video></video>").on("loadedmetadata", function() {
                return s.setItem(e, a.attr({
                  width: a[0].videoWidth,
                  height: a[0].videoHeight
                }))
              }).on("error", function() {
                return s.setError(e)
              }).attr("src", r);
              else if ("iframe" === h) this.setItem(e, '<iframe class="uk-lightbox-iframe" src="' + r + '" frameborder="0" allowfullscreen></iframe>');
              else if (n = r.match(/\/\/.*?youtube\.[a-z]+\/watch\?v=([^&\s]+)/) || r.match(/youtu\.be\/(.*)/)) {
                var c = n[1],
                  d = function(t, n) {
                    return void 0 === t && (t = 640), void 0 === n && (n = 450), s.setItem(e, i("//www.youtube.com/embed/" + c, t, n))
                  };
                g("//img.youtube.com/vi/" + c + "/maxresdefault.jpg").then(function(t) {
                  120 === t.width && 90 === t.height ? g("//img.youtube.com/vi/" + c + "/0.jpg").then(function(t) {
                    return d(t.width, t.height)
                  }, d) : d(t.width, t.height)
                }, d)
              } else {
                if (!(n = r.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/))) return;
                l({
                  type: "GET",
                  url: "//vimeo.com/api/oembed.json?url=" + encodeURI(r),
                  jsonp: "callback",
                  dataType: "jsonp"
                }).then(function(t) {
                  var o = t.height,
                    r = t.width;
                  return s.setItem(e, i("//player.vimeo.com/video/" + n[2], r, o))
                })
              }
              return !0
            }
          }
        }],
        methods: {
          toggle: function() {
            return this.isToggled() ? this.hide() : this.show()
          },
          hide: function() {
            this.isToggled() && this.toggleNow(this.$el, !1), this.slides.removeClass(this.clsActive).each(function(t, e) {
              return v.stop(e)
            }), delete this.index, delete this.percent, delete this._animation
          },
          loadItem: function(t) {
            void 0 === t && (t = this.index);
            var e = this.getItem(t);
            e.content || r(this.$el, "itemload", [e], !0).result || this.setError(e)
          },
          getItem: function(t) {
            return void 0 === t && (t = this.index), this.items[t] || {}
          },
          setItem: function(e, i) {
            a(e, {
              content: i
            });
            var n = this.slides.eq(this.items.indexOf(e)).html(i);
            this.$el.trigger("itemloaded", [this, n]), t.update(null, n)
          },
          setError: function(t) {
            this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
          },
          showControls: function() {
            clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), this.toolbars.attr("hidden") && (e(this.toolbars.eq(0), "uk-animation-slide-top"), e(this.toolbars.eq(1), "uk-animation-slide-bottom"), this.nav.attr("hidden", this.items.length <= 1), this.items.length > 1 && e(this.nav, "uk-animation-fade"))
          },
          hideControls: function() {
            this.toolbars.attr("hidden") || (e(this.toolbars.eq(0), "uk-animation-slide-top", "out"), e(this.toolbars.eq(1), "uk-animation-slide-bottom", "out"), this.items.length > 1 && e(this.nav, "uk-animation-fade", "out"))
          }
        }
      })
    }*/
  }

  function ae(t) {
    if (!ae.installed) {
      var e = t.util,
        i = e.$,
        n = e.each,
        s = e.pointerEnter,
        o = e.pointerLeave,
        r = e.Transition,
        h = {};
      t.component("notification", {
        functional: !0,
        args: ["message", "status"],
        defaults: {
          message: "",
          status: "",
          timeout: 5e3,
          group: null,
          pos: "top-center",
          onClose: null,
          clsClose: "uk-notification-close",
          clsMsg: "uk-notification-message"
        },
        created: function() {
          h[this.pos] || (h[this.pos] = i('<div class="uk-notification uk-notification-' + this.pos + '"></div>').appendTo(t.container)), this.$mount(i('<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href="#" class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>").appendTo(h[this.pos].show())[0])
        },
        ready: function() {
          var t = this,
            e = parseInt(this.$el.css("margin-bottom"), 10);
          r.start(this.$el.css({
            opacity: 0,
            marginTop: -1 * this.$el.outerHeight(),
            marginBottom: 0
          }), {
            opacity: 1,
            marginTop: 0,
            marginBottom: e
          }).then(function() {
            t.timeout && (t.timer = setTimeout(t.close, t.timeout))
          })
        },
        events: (l = {
          click: function(t) {
            i(t.target).closest('a[href="#"]').length && t.preventDefault(), this.close()
          }
        }, l[s] = function() {
          this.timer && clearTimeout(this.timer)
        }, l[o] = function() {
          this.timeout && (this.timer = setTimeout(this.close, this.timeout))
        }, l),
        methods: {
          close: function(t) {
            var e = this,
              i = function() {
                e.onClose && e.onClose(), e.$el.trigger("close", [e]).remove(), h[e.pos].children().length || h[e.pos].hide()
              };
            this.timer && clearTimeout(this.timer), t ? i() : r.start(this.$el, {
              opacity: 0,
              marginTop: -1 * this.$el.outerHeight(),
              marginBottom: 0
            }).then(i)
          }
        }
      });
      var l;
      t.notification.closeAll = function(e, i) {
        n(t.instances, function(t, n) {
          "notification" !== n.$options.name || e && e !== n.group || n.close(i)
        })
      }
    }
  }

  function ce(t) {
    function e(i) {
      return t.getComponent(i, "sortable") || i.parentNode && e(i.parentNode)
    }
    if (!ce.installed) {
      var i = t.mixin,
        n = t.util,
        s = n.$,
        o = n.assign,
        r = n.docElement,
        h = n.docHeight,
        l = n.fastdom,
        a = n.getDimensions,
        c = n.isWithin,
        d = n.offset,
        u = n.offsetTop,
        g = n.pointerDown,
        p = n.pointerMove,
        f = n.pointerUp,
        v = n.preventClick,
        w = n.promise,
        m = n.win;
      t.component("sortable", {
        mixins: [i["class"]],
        props: {
          group: String,
          animation: Number,
          threshold: Number,
          clsItem: String,
          clsPlaceholder: String,
          clsDrag: String,
          clsDragState: String,
          clsBase: String,
          clsNoDrag: String,
          clsEmpty: String,
          clsCustom: String,
          handle: String
        },
        defaults: {
          group: !1,
          animation: 150,
          threshold: 5,
          clsItem: "uk-sortable-item",
          clsPlaceholder: "uk-sortable-placeholder",
          clsDrag: "uk-sortable-drag",
          clsDragState: "uk-drag",
          clsBase: "uk-sortable",
          clsNoDrag: "uk-sortable-nodrag",
          clsEmpty: "uk-sortable-empty",
          clsCustom: "",
          handle: !1
        },
        init: function() {
          var t = this;
          ["init", "start", "move", "end"].forEach(function(e) {
            var i = t[e];
            t[e] = function(e) {
              e = e.originalEvent || e, t.scrollY = window.scrollY;
              var n = e.touches && e.touches[0] || e,
                s = n.pageX,
                o = n.pageY;
              t.pos = {
                x: s,
                y: o
              }, i(e)
            }
          })
        },
        events: (x = {}, x[g] = "init", x),
        update: {
          write: function() {
            var t = this;
            if (this.clsEmpty && this.$toggleClass(this.clsEmpty, !this.$el.children().length), this.drag) {
              d(this.drag, {
                top: this.pos.y + this.origin.top,
                left: this.pos.x + this.origin.left
              });
              var e = u(this.drag),
                i = e + this.drag[0].offsetHeight;
              e > 0 && e < this.scrollY ? setTimeout(function() {
                return m.scrollTop(t.scrollY - 5)
              }, 5) : i < h() && i > window.innerHeight + this.scrollY && setTimeout(function() {
                return m.scrollTop(t.scrollY + 5)
              }, 5)
            }
          }
        },
        methods: {
          init: function(t) {
            var e = s(t.target),
              i = this.$el.children().filter(function(e, i) {
                return c(t.target, i)
              });
            !i.length || e.is(":input") || this.handle && !c(e, this.handle) || t.button && 0 !== t.button || c(e, "." + this.clsNoDrag) || t.defaultPrevented || (t.preventDefault(), this.touched = [this], this.placeholder = i, this.origin = o({
              target: e,
              index: this.placeholder.index()
            }, this.pos), r.on(p, this.move), r.on(f, this.end), m.on("scroll", this.scroll), this.threshold || this.start(t))
          },
          start: function(e) {
            this.drag = s(this.placeholder[0].outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")).attr("uk-no-boot", "").addClass(this.clsDrag + " " + this.clsCustom).css({
              boxSizing: "border-box",
              width: this.placeholder.outerWidth(),
              height: this.placeholder.outerHeight()
            }).css(this.placeholder.css(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"])).appendTo(t.container), this.drag.children().first().height(this.placeholder.children().height());
            var i = a(this.placeholder),
              n = i.left,
              h = i.top;
            o(this.origin, {
              left: n - this.pos.x,
              top: h - this.pos.y
            }), this.placeholder.addClass(this.clsPlaceholder), this.$el.children().addClass(this.clsItem), r.addClass(this.clsDragState), this.$el.trigger("start", [this, this.placeholder, this.drag]), this.move(e)
          },
          move: function y(t) {
            if (!this.drag) return void((Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t));
            this.$emit();
            var i = "mousemove" === t.type ? t.target : document.elementFromPoint(this.pos.x - document.body.scrollLeft, this.pos.y - document.body.scrollTop),
              n = e(i),
              o = e(this.placeholder[0]),
              y = n !== o;
            if (n && !c(i, this.placeholder) && (!y || n.group && n.group === o.group)) {
              if (i = n.$el.is(i.parentNode) && s(i) || n.$el.children().has(i), y) o.remove(this.placeholder);
              else if (!i.length) return;
              n.insert(this.placeholder, i), ~this.touched.indexOf(n) || this.touched.push(n)
            }
          },
          scroll: function C() {
            var C = window.scrollY;
            C !== this.scrollY && (this.pos.y += C - this.scrollY, this.scrollY = C, this.$emit())
          },
          end: function(t) {
            if (r.off(p, this.move), r.off(f, this.end), m.off("scroll", this.scroll), !this.drag) return void("mouseup" !== t.type && c(t.target, "a[href]") && (location.href = s(t.target).closest("a[href]").attr("href")));
            v();
            var i = e(this.placeholder[0]);
            this === i ? this.origin.index !== this.placeholder.index() && this.$el.trigger("change", [this, this.placeholder, "moved"]) : (i.$el.trigger("change", [i, this.placeholder, "added"]), this.$el.trigger("change", [this, this.placeholder, "removed"])), this.$el.trigger("stop", [this]), this.drag.remove(), this.drag = null;
            var n = this.touched.map(function(t) {
              return t.clsPlaceholder + " " + t.clsItem
            }).join(" ");
            this.touched.forEach(function(t) {
              return t.$el.children().removeClass(n)
            }), r.removeClass(this.clsDragState)
          },
          insert: function k(t, e) {
            var i = this;
            this.$el.children().addClass(this.clsItem);
            var k = function() {
              e.length ? !i.$el.has(t).length || t.prevAll().filter(e).length ? t.insertBefore(e) : t.insertAfter(e) : i.$el.append(t)
            };
            this.animation ? this.animate(k) : k()
          },
          remove: function(t) {
            this.$el.has(t).length && (this.animation ? this.animate(function() {
              return t.detach()
            }) : t.detach())
          },
          animate: function(t) {
            var e = this,
              i = [],
              n = this.$el.children().toArray().map(function(t) {
                return t = s(t), i.push(o({
                  position: "absolute",
                  pointerEvents: "none",
                  width: t.outerWidth(),
                  height: t.outerHeight()
                }, t.position())), t
              }),
              r = {
                position: "",
                width: "",
                height: "",
                pointerEvents: "",
                top: "",
                left: ""
              };
            t(), n.forEach(function(t) {
              return t.stop()
            }), this.$el.children().css(r), this.$update("update", !0), l.flush(), this.$el.css("min-height", this.$el.height());
            var h = n.map(function(t) {
              return t.position()
            });
            w.all(n.map(function(t, n) {
              return t.css(i[n]).animate(h[n], e.animation).promise()
            })).then(function() {
              e.$el.css("min-height", "").children().css(r), e.$update("update", !0), l.flush()
            })
          }
        }
      });
      var x
    }
  }

  function de(t) {
    if (!de.installed) {
      var e = t.util,
        i = t.mixin,
        n = e.$,
        s = e.doc,
        o = e.fastdom,
        r = e.flipPosition,
        h = e.isTouch,
        l = e.isWithin,
        a = e.pointerDown,
        c = e.pointerEnter,
        d = e.pointerLeave,
        u = [];
      t.component("tooltip", {
        attrs: !0,
        mixins: [i.togglable, i.position],
        props: {
          delay: Number,
          container: Boolean,
          title: String
        },
        defaults: {
          pos: "top",
          title: "",
          delay: 0,
          animation: ["uk-animation-scale-up"],
          duration: 100,
          cls: "uk-active",
          clsPos: "uk-tooltip",
          container: !0
        },
        computed: {
          container: function() {
            return n(this.$props.container === !0 && t.container || this.$props.container || t.container)
          }
        },
        connected: function() {
          var t = this;
          o.mutate(function() {
            return t.$el.removeAttr("title").attr("aria-expanded", !1)
          })
        },
        disconnected: function() {
          this.hide()
        },
        methods: {
          show: function() {
            var t = this;
            ~u.indexOf(this) || (u.forEach(function(t) {
              return t.hide()
            }), u.push(this), s.on("click." + this.$options.name, function(e) {
              l(e.target, t.$el) || t.hide()
            }), clearTimeout(this.showTimer), this.tooltip = n('<div class="' + this.clsPos + '" aria-hidden="true"><div class="' + this.clsPos + '-inner">' + this.title + "</div></div>").appendTo(this.container), this.$el.attr("aria-expanded", !0), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? r(this.dir) + "-" + this.align : this.align + "-" + r(this.dir), this.showTimer = setTimeout(function() {
              t.toggleElement(t.tooltip, !0), t.hideTimer = setInterval(function() {
                t.$el.is(":visible") || t.hide()
              }, 150)
            }, this.delay))
          },
          hide: function() {
            var t = u.indexOf(this);
            !~t || this.$el.is("input") && this.$el[0] === document.activeElement || (u.splice(t, 1), clearTimeout(this.showTimer), clearInterval(this.hideTimer), this.$el.attr("aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && this.tooltip.remove(), this.tooltip = !1, s.off("click." + this.$options.name))
          }
        },
        events: (g = {
          blur: "hide"
        }, g["focus " + c + " " + a] = function(t) {
          t.type === a && h(t) || this.show()
        }, g[d] = function(t) {
          h(t) || this.hide()
        }, g)
      });
      var g
    }
  }

  function ue(t) {
    function e(t, e) {
      return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
    }

    function i(t, e) {
      for (var i = [], n = 0; n < t.length; n += e) {
        for (var s = [], o = 0; o < e; o++) s.push(t[n + o]);
        i.push(s)
      }
      return i
    }
    if (!ue.installed) {
      var n = t.util,
        s = n.$,
        o = n.ajax,
        r = n.on;
      t.component("upload", {
        props: {
          allow: String,
          clsDragover: String,
          concurrent: Number,
          dataType: String,
          mime: String,
          msgInvalidMime: String,
          msgInvalidName: String,
          multiple: Boolean,
          name: String,
          params: Object,
          type: String,
          url: String
        },
        defaults: {
          allow: !1,
          clsDragover: "uk-dragover",
          concurrent: 1,
          dataType: void 0,
          mime: !1,
          msgInvalidMime: "Invalid File Type: %s",
          msgInvalidName: "Invalid File Name: %s",
          multiple: !1,
          name: "files[]",
          params: {},
          type: "POST",
          url: "",
          abort: null,
          beforeAll: null,
          beforeSend: null,
          complete: null,
          completeAll: null,
          error: null,
          fail: function(t) {
            alert(t)
          },
          load: null,
          loadEnd: null,
          loadStart: null,
          progress: null
        },
        events: {
          change: function(t) {
            s(t.target).is('input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
          },
          drop: function(t) {
            t.preventDefault(), t.stopPropagation();
            var e = t.originalEvent.dataTransfer;
            e && e.files && (this.$removeClass(this.clsDragover), this.upload(e.files))
          },
          dragenter: function(t) {
            t.preventDefault(), t.stopPropagation()
          },
          dragover: function(t) {
            t.preventDefault(), t.stopPropagation(), this.$addClass(this.clsDragover)
          },
          dragleave: function(t) {
            t.preventDefault(), t.stopPropagation(), this.$removeClass(this.clsDragover)
          }
        },
        methods: {
          upload: function h(t) {
            var n = this;
            if (t.length) {
              this.$el.trigger("upload", [t]);
              for (var l = 0; l < t.length; l++) {
                if (n.allow && !e(n.allow, t[l].name)) return void n.fail(n.msgInvalidName.replace(/%s/, n.allow));
                if (n.mime && !e(n.mime, t[l].type)) return void n.fail(n.msgInvalidMime.replace(/%s/, n.mime))
              }
              this.multiple || (t = [t[0]]), this.beforeAll && this.beforeAll(this, t);
              var a = i(t, this.concurrent),
                h = function(t) {
                  var e = new FormData;
                  t.forEach(function(t) {
                    return e.append(n.name, t)
                  });
                  for (var i in n.params) e.append(i, n.params[i]);
                  o({
                    data: e,
                    url: n.url,
                    type: n.type,
                    dataType: n.dataType,
                    beforeSend: n.beforeSend,
                    complete: [n.complete, function(t, e) {
                      a.length ? h(a.shift()) : n.completeAll && n.completeAll(t), "abort" === e && n.abort && n.abort(t)
                    }],
                    cache: !1,
                    contentType: !1,
                    processData: !1,
                    xhr: function() {
                      var t = s.ajaxSettings.xhr();
                      return t.upload && n.progress && r(t.upload, "progress", n.progress), ["loadStart", "load", "loadEnd", "error", "abort"].forEach(function(e) {
                        return n[e] && r(t, e.toLowerCase(), n[e])
                      }), t
                    }
                  })
                };
              h(a.shift())
            }
          }
        }
      })
    }
  }

  function ge(t) {
    function e(t, e) {
      return t.sort(function(t, i) {
        return t[e] > i[e] ? 1 : i[e] > t[e] ? -1 : 0
      })
    }
    if (!ge.installed) {
      var i = t.util,
        n = i.scrolledOver;
      t.component("grid-parallax", t.components.grid.extend({
        props: {
          target: String,
          translate: Number
        },
        defaults: {
          target: !1,
          translate: 150
        },
        init: function() {
          this.$addClass("uk-grid")
        },
        disconnected: function() {
          this.reset(), this.$el.css("margin-bottom", "")
        },
        computed: {
          translate: function() {
            return Math.abs(this.$props.translate)
          },
          items: function() {
            return (this.target ? this.$el.find(this.target) : this.$el.children()).toArray()
          }
        },
        update: [{
          read: function() {
            this.columns = this.rows && this.rows[0] && this.rows[0].length || 0, this.rows = this.rows && this.rows.map(function(t) {
              return e(t, "offsetLeft")
            })
          },
          write: function() {
            this.$el.css("margin-bottom", "").css("margin-bottom", this.columns > 1 ? this.translate + parseFloat(this.$el.css("margin-bottom")) : "")
          },
          events: ["load", "resize"]
        }, {
          read: function() {
            this.scrolled = n(this.$el) * this.translate
          },
          write: function() {
            var t = this;
            return this.rows && 1 !== this.columns && this.scrolled ? void this.rows.forEach(function(e) {
              return e.forEach(function(e, i) {
                return e.style.transform = "translateY(" + (i % 2 ? t.scrolled : t.scrolled / 8) + "px)"
              })
            }) : this.reset()
          },
          events: ["scroll", "load", "resize"]
        }],
        methods: {
          reset: function() {
            this.items.forEach(function(t) {
              return t.style.transform = ""
            })
          }
        }
      })), t.component("grid-parallax").options.update.unshift({
        read: function() {
          this.reset()
        },
        events: ["load", "resize"]
      })
    }
  }

  function pe(t) {
    function e(t) {
      return t.split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function(t) {
        return parseFloat(t)
      })
    }

    function i(t, e) {
      return +(a(t.diff) ? +t.end : t.start + t.diff * e * (t.start < t.end ? 1 : -1)).toFixed(2)
    }
    if (!pe.installed) {
      var n = t.mixin,
        s = t.util,
        o = s.assign,
        r = s.clamp,
        h = s.Dimensions,
        l = s.getImage,
        a = s.isUndefined,
        c = s.scrolledOver,
        d = s.query,
        u = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity"];
      n.parallax = {
        props: u.reduce(function(t, e) {
          return t[e] = "list", t
        }, {
          easing: Number,
          media: "media"
        }),
        defaults: u.reduce(function(t, e) {
          return t[e] = void 0, t
        }, {
          easing: 1,
          media: !1
        }),
        computed: {
          props: function() {
            var t = this;
            return u.reduce(function(i, n) {
              if (a(t.$props[n])) return i;
              var s = n.match(/color/i),
                r = s || "opacity" === n,
                h = t.$props[n];
              r && t.$el.css(n, "");
              var l, c = (a(h[1]) ? "scale" === n ? 1 : r ? t.$el.css(n) : 0 : h[0]) || 0,
                d = a(h[1]) ? h[0] : h[1],
                u = ~h.join("").indexOf("%") ? "%" : "px";
              if (s) {
                var g = t.$el[0].style.color;
                t.$el[0].style.color = c, c = e(t.$el.css("color")), t.$el[0].style.color = d, d = e(t.$el.css("color")), t.$el[0].style.color = g
              } else c = parseFloat(c), d = parseFloat(d), l = Math.abs(c - d);
              if (i[n] = {
                  start: c,
                  end: d,
                  diff: l,
                  unit: u
                }, n.match(/^bg/)) {
                var p = "background-position-" + n[2];
                i[n].pos = t.$el.css(p, "").css("background-position").split(" ")["x" === n[2] ? 0 : 1], t.covers && o(i[n], {
                  start: 0,
                  end: c <= d ? l : -l
                })
              }
              return i
            }, {})
          },
          bgProps: function() {
            var t = this;
            return ["bgx", "bgy"].filter(function(e) {
              return e in t.props
            })
          },
          covers: function() {
            return "cover" === this.$el.css("backgroundSize", "").css("backgroundSize")
          }
        },
        disconnected: function() {
          delete this._image
        },
        update: [{
          read: function() {
            var t = this;
            if (delete this._computeds.props, this._active = !this.media || window.matchMedia(this.media).matches, this._image && (this._image.dimEl = {
                width: this.$el[0].offsetWidth,
                height: this.$el[0].offsetHeight
              }), a(this._image) && this.covers && this.bgProps.length) {
              var e = this.$el.css("backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
              e && (this._image = !1, l(e).then(function(e) {
                t._image = {
                  width: e.naturalWidth,
                  height: e.naturalHeight
                }, t.$emit()
              }))
            }
          },
          write: function() {
            var t = this;
            if (this._image) {
              if (!this._active) return void this.$el.css({
                backgroundSize: "",
                backgroundRepeat: ""
              });
              var e = this._image,
                i = e.dimEl,
                n = h.cover(e, i);
              this.bgProps.forEach(function(s) {
                var o = t.props[s],
                  l = o.start,
                  a = o.end,
                  c = o.pos,
                  d = o.diff,
                  u = "bgy" === s ? "height" : "width",
                  g = n[u] - i[u];
                if (c.match(/%$/)) {
                  if (l >= a) g < d ? (i[u] = n[u] + d - g, t.props[s].pos = "0px") : (c = -1 * g / 100 * parseFloat(c), c = r(c, d - g, 0), t.props[s].pos = c + "px");
                  else {
                    if (g < d) i[u] = n[u] + d - g;
                    else if (g / 100 * parseFloat(c) > d) return;
                    t.props[s].pos = "-" + d + "px"
                  }
                  n = h.cover(e, i)
                }
              }), this.$el.css({
                backgroundSize: n.width + "px " + n.height + "px",
                backgroundRepeat: "no-repeat"
              })
            }
          },
          events: ["load", "resize"]
        }],
        methods: {
          reset: function() {
            var t = this;
            Object.keys(this.getCss(0)).forEach(function(e) {
              return t.$el.css(e, "")
            })
          },
          getCss: function(t) {
            var e = !1,
              n = this.props;
            return Object.keys(n).reduce(function(s, o) {
              var r = n[o],
                h = i(r, t);
              switch (o) {
                case "x":
                case "y":
                  if (e) break;
                  var l = ["x", "y"].map(function(e) {
                      return o === e ? h + r.unit : n[e] ? i(n[e], t) + n[e].unit : 0
                    }),
                    a = l[0],
                    c = l[1];
                  e = s.transform += " translate3d(" + a + ", " + c + ", 0)";
                  break;
                case "rotate":
                  s.transform += " rotate(" + h + "deg)";
                  break;
                case "scale":
                  s.transform += " scale(" + h + ")";
                  break;
                case "bgy":
                case "bgx":
                  s["background-position-" + o[2]] = "calc(" + r.pos + " + " + (h + r.unit) + ")";
                  break;
                case "color":
                case "backgroundColor":
                case "borderColor":
                  s[o] = "rgba(" + r.start.map(function(e, i) {
                    return e += t * (r.end[i] - e), 3 === i ? parseFloat(e) : parseInt(e, 10)
                  }).join(",") + ")";
                  break;
                case "blur":
                  s.filter += " blur(" + h + "px)";
                  break;
                case "hue":
                  s.filter += " hue-rotate(" + h + "deg)";
                  break;
                case "fopacity":
                  s.filter += " opacity(" + h + "%)";
                  break;
                case "grayscale":
                case "invert":
                case "saturate":
                case "sepia":
                  s.filter += " " + o + "(" + h + "%)";
                  break;
                default:
                  s[o] = h
              }
              return s
            }, {
              transform: "",
              filter: ""
            })
          }
        }
      }, t.component("parallax", {
        mixins: [n.parallax],
        props: {
          target: String,
          viewport: Number
        },
        defaults: {
          target: !1,
          viewport: 1
        },
        computed: {
          target: function() {
            return this.$props.target && d(this.$props.target, this.$el) || this.$el
          }
        },
        disconnected: function() {
          delete this._prev
        },
        update: [{
          read: function() {
            delete this._prev
          }
        }, {
          read: function() {
            var t = c(this.target) / (this.viewport || 1);
            this._percent = r(t * (1 - (this.easing - this.easing * t)))
          },
          write: function() {
            return this._active ? void(this._prev !== this._percent && (this.$el.css(this.getCss(this._percent)), this._prev = this._percent)) : void this.reset()
          },
          events: ["scroll", "load", "resize"]
        }]
      })
    }
  }
  var fe = "default" in t ? t["default"] : t,
    ve = document.documentElement,
    we = fe(window),
    me = fe(document),
    xe = fe(ve),
    ye = "rtl" === ve.getAttribute("dir"),
    Ce = {
      start: l,
      stop: function(t, e) {
        return h(t, Fe, [e], !0), M.resolve()
      },
      cancel: function(t) {
        return this.stop(t, !0)
      },
      inProgress: function(t) {
        return fe(t).hasClass("uk-transition")
      }
    },
    ke = {
      "in": function(t, e, i, n) {
        return a(t, e, i, n, !1)
      },
      out: function(t, e, i, n) {
        return a(t, e, i, n, !0)
      },
      inProgress: function(t) {
        return fe(t).hasClass("uk-animation-enter") || fe(t).hasClass("uk-animation-leave")
      },
      cancel: function(t) {
        return h(t, Ve || "animationend", [!0], !0), M.resolve()
      }
    },
    be = {
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
      menuitem: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    },
    $e = {
      ratio: function(t, e, i) {
        var n = "width" === e ? "height" : "width";
        return s = {}, s[n] = Math.round(i * t[n] / t[e]), s[e] = i, s;
        var s
      },
      contain: function(e, i) {
        var n = this;
        return e = Ae({}, e), t.each(e, function(t) {
          return e = e[t] > i[t] ? n.ratio(e, t, i[t]) : e
        }), e
      },
      cover: function(e, i) {
        var n = this;
        return e = this.contain(e, i), t.each(e, function(t) {
          return e = e[t] < i[t] ? n.ratio(e, t, i[t]) : e
        }), e
      }
    },
    Le = Object.prototype.hasOwnProperty;
  M.resolve = function(t) {
    return M(function(e) {
      e(t)
    })
  }, M.reject = function(t) {
    return M(function(e, i) {
      i(t)
    })
  }, M.all = function(t) {
    return Ie ? Promise.all(t) : fe.when.apply(fe, t)
  };
  var Me = /-(\w)/g,
    Be = Array.isArray,
    Te = {
      "!": "closest",
      "+": "nextAll",
      "-": "prevAll"
    },
    _e = {},
    Ae = Object.assign || function(t) {
      for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
      t = Object(t);
      for (var n = 0; n < e.length; n++) {
        var s = e[n];
        if (null !== s)
          for (var o in s) L(s, o) && (t[o] = s[o])
      }
      return t
    },
    Ee = window.MutationObserver || window.WebKitMutationObserver,
    Se = window.requestAnimationFrame || function(t) {
      return setTimeout(t, 1e3 / 60)
    },
    Oe = "ontouchstart" in window,
    De = window.PointerEvent,
    Ie = "Promise" in window,
    He = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || navigator.msPointerEnabled && navigator.msMaxTouchPoints || navigator.pointerEnabled && navigator.maxTouchPoints,
    Ne = He ? "mousedown " + (Oe ? "touchstart" : "pointerdown") : "mousedown",
    ze = He ? "mousemove " + (Oe ? "touchmove" : "pointermove") : "mousemove",
    Pe = He ? "mouseup " + (Oe ? "touchend" : "pointerup") : "mouseup",
    Ze = He && De ? "pointerenter" : "mouseenter",
    je = He && De ? "pointerleave" : "mouseleave",
    Fe = tt("transition", "transition-end"),
    qe = tt("animation", "animation-start"),
    Ve = tt("animation", "animation-end"),
    We = {
      reads: [],
      writes: [],
      measure: function(t) {
        return this.reads.push(t), et(), t
      },
      mutate: function(t) {
        return this.writes.push(t), et(), t
      },
      clear: function(t) {
        return nt(this.reads, t) || nt(this.writes, t)
      },
      flush: function() {
        it(this.reads), it(this.writes.splice(0, this.writes.length)), this.scheduled = !1, (this.reads.length || this.writes.length) && et()
      }
    };
  st.prototype = {
    positions: [],
    position: null,
    init: function() {
      var t = this;
      this.positions = [], this.position = null;
      var e = !1;
      this.handler = function(i) {
        e || setTimeout(function() {
          var n = Date.now(),
            s = t.positions.length;
          s && n - t.positions[s - 1].time > 100 && t.positions.splice(0, s), t.positions.push({
            time: n,
            x: i.pageX,
            y: i.pageY
          }), t.positions.length > 5 && t.positions.shift(), e = !1
        }, 5), e = !0
      }, me.on("mousemove", this.handler)
    },
    cancel: function() {
      this.handler && me.off("mousemove", this.handler)
    },
    movesTo: function(t) {
      if (this.positions.length < 2) return !1;
      var e = ct(t),
        i = this.positions[this.positions.length - 1],
        n = this.positions[0];
      if (e.left <= i.x && i.x <= e.right && e.top <= i.y && i.y <= e.bottom) return !1;
      var s = [
        [{
          x: e.left,
          y: e.top
        }, {
          x: e.right,
          y: e.bottom
        }],
        [{
          x: e.right,
          y: e.top
        }, {
          x: e.left,
          y: e.bottom
        }]
      ];
      return e.right <= i.x || (e.left >= i.x ? (s[0].reverse(), s[1].reverse()) : e.bottom <= i.y ? s[0].reverse() : e.top >= i.y && s[1].reverse()), !!s.reduce(function(t, e) {
        return t + (ot(n, e[0]) < ot(i, e[0]) && ot(n, e[1]) > ot(i, e[1]))
      }, 0)
    }
  };
  var Re = {};
  Re.args = Re.created = Re.events = Re.init = Re.ready = Re.connected = Re.disconnected = Re.destroy = function(t, e) {
    return t = t && !Be(t) ? [t] : t, e ? t ? t.concat(e) : Be(e) ? e : [e] : t
  }, Re.update = function(t, e) {
    return Re.args(t, E(e) ? {
      read: e
    } : e)
  }, Re.props = function(t, e) {
    return Be(e) && (e = e.reduce(function(t, e) {
      return t[e] = String, t
    }, {})), Re.methods(t, e)
  }, Re.computed = Re.defaults = Re.methods = function(t, e) {
    return e ? t ? Ae({}, t, e) : e : t
  };
  var Ye = function(t, e) {
      return N(e) ? t : e
    },
    Ue = 0,
    Xe = function(t) {
      this.id = ++Ue, this.el = j(t)
    };
  Xe.prototype.isVideo = function() {
    return this.isYoutube() || this.isVimeo() || this.isHTML5()
  }, Xe.prototype.isHTML5 = function() {
    return "VIDEO" === this.el.tagName
  }, Xe.prototype.isIFrame = function() {
    return "IFRAME" === this.el.tagName
  }, Xe.prototype.isYoutube = function() {
    return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
  }, Xe.prototype.isVimeo = function() {
    return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
  }, Xe.prototype.enableApi = function() {
    var t = this;
    if (this.ready) return this.ready;
    var e, i = this.isYoutube(),
      n = this.isVimeo();
    return i || n ? this.ready = M(function(s) {
      o(t.el, "load", function() {
        if (i) {
          var n = function() {
            return ht(t.el, {
              event: "listening",
              id: t.id
            })
          };
          e = setInterval(n, 100), n()
        }
      }), lt(function(e) {
        return i && e.id === t.id && "onReady" === e.event || n && Number(e.player_id) === t.id
      }).then(function() {
        s(), e && clearInterval(e)
      }), t.el.setAttribute("src", "" + t.el.src + (~t.el.src.indexOf("?") ? "&" : "?") + (i ? "enablejsapi=1" : "api=1&player_id=" + Ue))
    }) : M.resolve()
  }, Xe.prototype.play = function() {
    var t = this;
    this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() {
      return ht(t.el, {
        func: "playVideo",
        method: "play"
      })
    }) : this.isHTML5() && this.el.play())
  }, Xe.prototype.pause = function() {
    var t = this;
    this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() {
      return ht(t.el, {
        func: "pauseVideo",
        method: "pause"
      })
    }) : this.isHTML5() && this.el.pause())
  }, Xe.prototype.mute = function() {
    var t = this;
    this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() {
      return ht(t.el, {
        func: "mute",
        method: "setVolume",
        value: 0
      })
    }) : this.isHTML5() && (this.el.muted = !0, this.el.setAttribute("muted", "")))
  };
  var Qe, Je, Ge, Ke, ti = {
      x: ["width", "left", "right"],
      y: ["height", "top", "bottom"]
    },
    ei = document.documentElement,
    ii = {};
  i(function() {
    n(document, "click", function() {
      return Ke = !0
    }, !0), n(document, Ne, function(t) {
      var e = t.touches ? t.touches[0] : t,
        i = e.target,
        n = e.pageX,
        s = e.pageY,
        o = Date.now();
      ii.el = "tagName" in i ? i : i.parentNode, Qe && clearTimeout(Qe), ii.x1 = n, ii.y1 = s, ii.last && o - ii.last <= 250 && (ii = {}), ii.last = o, Ke = t.button > 0
    }), n(document, ze, function(t) {
      var e = t.touches ? t.touches[0] : t,
        i = e.pageX,
        n = e.pageY;
      ii.x2 = i, ii.y2 = n
    }), n(document, Pe, function(t) {
      var e = t.target;
      ii.x2 && Math.abs(ii.x1 - ii.x2) > 30 || ii.y2 && Math.abs(ii.y1 - ii.y2) > 30 ? Je = setTimeout(function() {
        ii.el && (r(ii.el, "swipe"), r(ii.el, "swipe" + mt(ii))), ii = {}
      }) : "last" in ii ? (Ge = setTimeout(function() {
        return ii.el && r(ii.el, "tap")
      }), ii.el && d(e, ii.el) && (Qe = setTimeout(function() {
        Qe = null, ii.el && !Ke && r(ii.el, "click"), ii = {}
      }, 350))) : ii = {}
    }), n(document, "touchcancel", xt), n(window, "scroll", xt)
  });
  var ni = !1;
  n(document, "touchstart", function() {
    return ni = !0
  }, !0), n(document, "click", function() {
    ni = !1
  }), n(document, "touchcancel", function() {
    return ni = !1
  }, !0);
  var si, oi, ri = Object.freeze({
    win: we,
    doc: me,
    docElement: xe,
    isRtl: ye,
    isReady: e,
    ready: i,
    on: n,
    off: s,
    one: o,
    trigger: r,
    $trigger: h,
    transition: l,
    Transition: Ce,
    animate: a,
    Animation: ke,
    isJQuery: c,
    isWithin: d,
    attrFilter: u,
    removeClass: g,
    createEvent: p,
    isInView: f,
    scrolledOver: v,
    docHeight: m,
    getIndex: x,
    isVoidElement: y,
    Dimensions: $e,
    query: C,
    preventClick: k,
    getData: b,
    Observer: Ee,
    requestAnimationFrame: Se,
    hasPromise: Ie,
    hasTouch: He,
    pointerDown: Ne,
    pointerMove: ze,
    pointerUp: Pe,
    pointerEnter: Ze,
    pointerLeave: je,
    transitionend: Fe,
    animationstart: qe,
    animationend: Ve,
    getStyle: J,
    getCssVar: G,
    getImage: K,
    fastdom: We,
    $: fe,
    bind: $,
    hasOwn: L,
    promise: M,
    classify: B,
    hyphenate: T,
    camelize: _,
    isArray: Be,
    isFunction: E,
    isObject: S,
    isPlainObject: O,
    isBoolean: D,
    isString: I,
    isNumber: H,
    isUndefined: N,
    isContextSelector: z,
    getContextSelectors: P,
    toJQuery: Z,
    toNode: j,
    toBoolean: F,
    toNumber: q,
    toList: V,
    toMedia: W,
    coerce: R,
    toMs: Y,
    swap: U,
    assign: Ae,
    clamp: X,
    noop: Q,
    ajax: t.ajax,
    each: t.each,
    Event: t.Event,
    isNumeric: t.isNumeric,
    MouseTracker: st,
    mergeOptions: rt,
    Player: Xe,
    position: at,
    getDimensions: ct,
    offset: dt,
    offsetTop: ut,
    flipPosition: wt,
    isTouch: yt
  });
  ! function() {
    var t = document.createElement("_").classList;
    t && (t.add("a", "b"), t.toggle("c", !1), si = t.contains("b"), oi = !t.contains("c")), t = null
  }();
  var hi = function(t) {
    this._init(t)
  };
  hi.util = ri, hi.data = "__uikit__", hi.prefix = "uk-", hi.options = {}, hi.instances = {}, hi.elements = [], kt(hi), bt(hi), $t(hi), Lt(hi), Mt(hi), Bt(hi);
  var li, ai, ci = {
      init: function() {
        this.$addClass(this.$name)
      }
    },
    di = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        origin: String,
        transition: String,
        queued: Boolean
      },
      defaults: {
        cls: !1,
        animation: [!1],
        duration: 200,
        origin: !1,
        transition: "linear",
        queued: !1,
        initProps: {
          overflow: "",
          height: "",
          paddingTop: "",
          paddingBottom: "",
          marginTop: "",
          marginBottom: ""
        },
        hideProps: {
          overflow: "hidden",
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0
        }
      },
      computed: {
        hasAnimation: function() {
          return !!this.animation[0]
        },
        hasTransition: function() {
          return this.hasAnimation && this.animation[0] === !0
        }
      },
      methods: {
        toggleElement: function(t, e, i) {
          var n = this;
          return M(function(s) {
            t = fe(t).toArray();
            var o, r = function(t) {
                return M.all(t.map(function(t) {
                  return n._toggleElement(t, e, i)
                }))
              },
              h = t.filter(function(t) {
                return n.isToggled(t)
              }),
              l = t.filter(function(t) {
                return !~h.indexOf(t)
              });
            if (n.queued && N(i) && N(e) && n.hasAnimation && !(t.length < 2)) {
              var a = document.body,
                c = a.scrollTop,
                d = h[0],
                u = ke.inProgress(d) && n.$hasClass(d, "uk-animation-leave") || Ce.inProgress(d) && "0px" === d.style.height;
              o = r(h), u || (o = o.then(function() {
                var t = r(l);
                return a.scrollTop = c, t
              }))
            } else o = r(l.concat(h));
            o.then(s, Q)
          })
        },
        toggleNow: function(t, e) {
          var i = this;
          return M(function(n) {
            return M.all(fe(t).toArray().map(function(t) {
              return i._toggleElement(t, e, !1)
            })).then(n, Q)
          })
        },
        isToggled: function(t) {
          return t = t && fe(t) || this.$el, this.cls ? t.hasClass(this.cls.split(" ")[0]) : !t.attr("hidden")
        },
        updateAria: function(t) {
          this.cls === !1 && t.attr("aria-hidden", !this.isToggled(t))
        },
        _toggleElement: function(e, i, n) {
          var s = this;
          if (e = fe(e), i = D(i) ? i : ke.inProgress(e) ? this.$hasClass(e, "uk-animation-leave") : Ce.inProgress(e) ? "0px" === e[0].style.height : !this.isToggled(e), h(e, "before" + (i ? "show" : "hide"), [this]).result === !1) return M.reject();
          var o = (n !== !1 && this.hasAnimation ? this.hasTransition ? this._toggleHeight : this._toggleAnimation : this._toggleImmediate)(e, i),
            r = t.Event(i ? "show" : "hide");
          return r.preventDefault(), h(e, r, [this]), o.then(function() {
            h(e, i ? "shown" : "hidden", [s]), hi.update(null, e)
          })
        },
        _toggle: function(t, e) {
          t = fe(t), this.cls ? t.toggleClass(this.cls, ~this.cls.indexOf(" ") ? void 0 : e) : t.attr("hidden", !e), t.find("[autofocus]:visible").focus(), this.updateAria(t), hi.update(null, t)
        },
        _toggleImmediate: function(t, e) {
          return this._toggle(t, e), M.resolve()
        },
        _toggleHeight: function(t, e) {
          var i, n = this,
            s = t.children(),
            o = Ce.inProgress(t),
            r = s.length ? parseFloat(s.first().css("margin-top")) + parseFloat(s.last().css("margin-bottom")) : 0,
            h = t[0].offsetHeight ? t.height() + (o ? 0 : r) : 0;
          return Ce.cancel(t).then(function() {
            return Ce.inProgress(t) ? M.resolve().then(function() {
              return n._toggleHeight(t, e)
            }) : (n.isToggled(t) || n._toggle(t, !0), t.height(""), We.flush(), i = t.height() + (o ? 0 : r), t.height(h), (e ? Ce.start(t, Ae({}, n.initProps, {
              overflow: "hidden",
              height: i
            }), Math.round(n.duration * (1 - h / i)), n.transition) : Ce.start(t, n.hideProps, Math.round(n.duration * (h / i)), n.transition).then(function() {
              return n._toggle(t, !1)
            })).then(function() {
              return t.css(n.initProps)
            }))
          })
        },
        _toggleAnimation: function(t, e) {
          var i = this;
          return ke.inProgress(t) ? ke.cancel(t).then(function() {
            return ke.inProgress(t) ? M.resolve().then(function() {
              return i._toggleAnimation(t, e)
            }) : i._toggleAnimation(t, e)
          }) : e ? (this._toggle(t, !0), ke["in"](t, this.animation[0], this.duration, this.origin)) : ke.out(t, this.animation[1] || this.animation[0], this.duration, this.origin).then(function() {
            return i._toggle(t, !1)
          })
        }
      }
    },
    ui = {
      mixins: [ci, di],
      props: {
        clsPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean,
        container: Boolean
      },
      defaults: {
        cls: "uk-open",
        escClose: !0,
        bgClose: !0,
        overlay: !0,
        stack: !1,
        container: !0
      },
      computed: {
        body: function() {
          return fe(document.body)
        },
        panel: function() {
          return this.$el.find("." + this.clsPanel)
        },
        container: function() {
          return j(this.$props.container === !0 && hi.container || this.$props.container && Z(this.$props.container))
        },
        transitionElement: function() {
          return this.panel
        },
        transitionDuration: function() {
          return Y(this.transitionElement.css("transition-duration"))
        },
        component: function() {
          return hi[this.$options.name]
        }
      },
      events: [{
        name: "click",
        delegate: function() {
          return this.selClose
        },
        handler: function(t) {
          t.preventDefault(), this.hide()
        }
      }, {
        name: "toggle",
        handler: function(t) {
          t.preventDefault(), this.toggle()
        }
      }, {
        name: "show",
        self: !0,
        handler: function() {
          xe.hasClass(this.clsPage) || (this.scrollbarWidth = window.innerWidth - xe[0].offsetWidth, this.body.css("overflow-y", this.scrollbarWidth && this.overlay ? "scroll" : "")), xe.addClass(this.clsPage)
        }
      }, {
        name: "hidden",
        self: !0,
        handler: function() {
          this.component.active === this && (xe.removeClass(this.clsPage), this.body.css("overflow-y", ""), this.component.active = null)
        }
      }],
      methods: {
        toggle: function() {
          return this.isToggled() ? this.hide() : this.show()
        },
        show: function() {
          var t = this;
          if (!this.isToggled()) {
            if (this.container && !this.$el.parent().is(this.container)) return this.container.appendChild(this.$el[0]), M(function(e) {
              return Se(function() {
                return e(t.show())
              })
            });
            var e = li && li !== this && li;
            if (li = this, this.component.active = this, e) {
              if (!this.stack) return void e.hide().then(this.show);
              this.prev = e
            } else Se(function() {
              return Tt(t.$options.name)
            });
            return this.toggleNow(this.$el, !0)
          }
        },
        hide: function() {
          if (this.isToggled()) return li = li && li !== this && li || this.prev, li || _t(this.$options.name), this.toggleNow(this.$el, !1)
        },
        getActive: function() {
          return li
        },
        _toggleImmediate: function(t, e) {
          var i = this;
          return Se(function() {
            return i._toggle(t, e)
          }), this.transitionDuration ? M(function(t, e) {
            i._transition && (i.transitionElement.off(Fe, i._transition.handler), i._transition.reject()), i._transition = {
              reject: e,
              handler: function() {
                t(), i._transition = null
              }
            }, i.transitionElement.one(Fe, i._transition.handler)
          }) : M.resolve()
        }
      }
    },
    gi = {
      props: {
        pos: String,
        offset: null,
        flip: Boolean,
        clsPos: String
      },
      defaults: {
        pos: ye ? "bottom-right" : "bottom-left",
        flip: !0,
        offset: !1,
        clsPos: ""
      },
      computed: {
        pos: function() {
          return (this.$props.pos + (~this.$props.pos.indexOf("-") ? "" : "-center")).split("-")
        },
        dir: function() {
          return this.pos[0]
        },
        align: function() {
          return this.pos[1]
        }
      },
      methods: {
        positionAt: function(t, e, i) {
          g(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?").css({
            top: "",
            left: ""
          });
          var n = q(this.offset) || 0,
            s = this.getAxis(),
            o = at(t, e, "x" === s ? wt(this.dir) + " " + this.align : this.align + " " + wt(this.dir), "x" === s ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === s ? "" + ("left" === this.dir ? -1 * n : n) : " " + ("top" === this.dir ? -1 * n : n), null, this.flip, i);
          this.dir = "x" === s ? o.target.x : o.target.y, this.align = "x" === s ? o.target.y : o.target.x, t.toggleClass(this.clsPos + "-" + this.dir + "-" + this.align, this.offset === !1)
        },
        getAxis: function() {
          return "top" === this.dir || "bottom" === this.dir ? "y" : "x"
        }
      }
    },
    pi = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>',
    fi = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line></svg>',
    vi = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"></rect><rect x="4" y="9" width="11" height="1"></rect></svg>',
    wi = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg>',
    mi = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"></rect><rect x="0" y="19" width="40" height="1"></rect></svg>',
    xi = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"></polyline></svg>',
    yi = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"></polyline></svg>',
    Ci = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>',
    ki = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"></circle><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"></line></svg>',
    bi = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
    $i = '<svg width="11" height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 10 10 1 19"></polyline></svg>',
    Li = '<svg width="18" height="34" viewBox="0 0 18 34" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1 1 17 17 1 33"></polyline></svg>',
    Mi = '<svg width="11" height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="10 1 1 10 10 19"></polyline></svg>',
    Bi = '<svg width="18" height="34" viewBox="0 0 18 34" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="17 1 1 17 17 33"></polyline></svg>',
    Ti = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"></circle></svg>',
    _i = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "></polyline></svg>',
    Ai = {},
    Ei = new DOMParser;
  return hi.version = "3.0.0-beta.28", At(hi), oe(hi), hi.use(re), hi.use(le), hi.use(ae), hi.use(ce), hi.use(de), hi.use(ue), hi.use(ge), hi.use(pe), Ct(hi), hi
}), ! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.UIkitIcons = e()
}

(this, function() {
  "use strict";

  function t(i) {
    t.installed || i.icon.add(e)
  }
  var e = {
    album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="5" y="2" width="10" height="1"></rect> <rect x="3" y="4" width="14" height="1"></rect> <rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"></rect></svg>',
    ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"></line></svg>',
    behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"></path> <path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"></path> <rect x="13" y="4" width="5" height="1.4"></rect></svg>',
    bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"></path> <path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"></path></svg>',
    bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"></path></svg>',
    bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"></path></svg>',
    bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"></polygon></svg>',
    calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"></path> <rect width="1" height="3" x="6" y="2"></rect> <rect width="1" height="3" x="13" y="2"></rect></svg>',
    camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"></circle> <path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"></path></svg>',
    cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="7.3" cy="17.3" r="1.4"></circle> <circle cx="13.3" cy="17.3" r="1.4"></circle> <polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"></polyline></svg>',
    check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline></svg>',
    clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <rect x="9" y="4" width="1" height="7"></rect> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"></path></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path></svg>',
    code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"></polyline> <polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"></polyline></svg>',
    cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"></circle> <path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"></path></svg>',
    comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"></path></svg>',
    commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"></polygon> <circle cx="10" cy="8" r="1"></circle> <circle cx="6" cy="8" r="1"></circle> <circle cx="14" cy="8" r="1"></circle></svg>',
    comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"></polyline> <path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"></path></svg>',
    copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"></rect> <polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"></polyline></svg>',
    database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"></ellipse> <path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"></path> <path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"></path> <path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"></path></svg>',
    desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="8" y="15" width="1" height="2"></rect> <rect x="11" y="15" width="1" height="2"></rect> <rect x="5" y="16" width="10" height="1"></rect> <rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"></rect></svg>',
    download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"></polyline> <rect x="3" y="17" width="13" height="1"></rect> <line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"></line></svg>',
    dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"></path> <path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"></path> <path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"></path> <circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"></circle></svg>',
    expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13 2 18 2 18 7 17 7 17 3 13 3"></polygon> <polygon points="2 13 3 13 3 17 7 17 7 18 2 18"></polygon> <path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"></path></svg>',
    facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg>',
    file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"></rect></svg>',
    flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="5.5" cy="9.5" r="3.5"></circle> <circle cx="14.5" cy="9.5" r="3.5"></circle></svg>',
    folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"></polygon></svg>',
    forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"></path></svg>',
    foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"></path></svg>',
    future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"></polyline> <path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"></path> <rect x="9" y="4" width="1" height="7"></rect> <path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"></path></svg>',
    github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"></path></svg>',
    gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3.5" y="1" width="1.531" height="11.471"></rect> <rect x="7.324" y="4.059" width="1.529" height="15.294"></rect> <rect x="11.148" y="4.059" width="1.527" height="15.294"></rect> <rect x="14.971" y="4.059" width="1.529" height="8.412"></rect></svg>',
    google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"></path></svg>',
    grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="3" height="3"></rect> <rect x="8" y="2" width="3" height="3"></rect> <rect x="14" y="2" width="3" height="3"></rect> <rect x="2" y="8" width="3" height="3"></rect> <rect x="8" y="8" width="3" height="3"></rect> <rect x="14" y="8" width="3" height="3"></rect> <rect x="2" y="14" width="3" height="3"></rect> <rect x="8" y="14" width="3" height="3"></rect> <rect x="14" y="14" width="3" height="3"></rect></svg>',
    happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="13" cy="7" r="1"></circle> <circle cx="7" cy="7" r="1"></circle> <circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"></circle> <path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"></path></svg>',
    hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"></path></svg>',
    heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"></path></svg>',
    history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"></polyline> <path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"></path> <rect x="9" y="4" width="1" height="7"></rect> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625" id="Shape"></path></svg>',
    home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"></polygon> <polygon points="15 4 18 4 18 7 17 7 17 5 15 5"></polygon> <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"></polygon></svg>',
    image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="16.1" cy="6.1" r="1.1"></circle> <rect fill="none" stroke="#000" x="0.5" y="2.5" width="19" height="15"></rect> <polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"></polyline> <polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"></polyline></svg>',
    info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"></path> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle></svg>',
    instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path> <circle cx="14.87" cy="5.26" r="1.09"></circle> <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg>',
    italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"></path></svg>',
    joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"></path> <path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"></path> <path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"></path> <path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"></path></svg>',
    laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect y="16" width="20" height="1"></rect> <rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"></rect></svg>',
    lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"></path></svg>',
    link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"></path></svg>',
    linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path> <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path></svg>',
    list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="6" y="4" width="12" height="1"></rect> <rect x="6" y="9" width="12" height="1"></rect> <rect x="6" y="14" width="12" height="1"></rect> <rect x="2" y="4" width="2" height="1"></rect> <rect x="2" y="9" width="2" height="1"></rect> <rect x="2" y="14" width="2" height="1"></rect></svg>',
    location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"></path> <circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"></circle></svg>',
    lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"></rect> <path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"></path></svg>',
    mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"></polyline> <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path></svg>',
    menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="4" width="16" height="1"></rect> <rect x="2" y="9" width="16" height="1"></rect> <rect x="2" y="14" width="16" height="1"></rect></svg>',
    minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect height="1" width="18" y="9" x="1"></rect></svg>',
    more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3" cy="10" r="2"></circle> <circle cx="10" cy="10" r="2"></circle> <circle cx="17" cy="10" r="2"></circle></svg>',
    move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="4,5 1,5 1,9 2,9 2,6 4,6 "></polygon> <polygon points="1,16 2,16 2,18 4,18 4,19 1,19 "></polygon> <polygon points="14,16 14,19 11,19 11,18 13,18 13,16 "></polygon> <rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"></rect> <rect x="1" y="11" width="1" height="3"></rect> <rect x="6" y="18" width="3" height="1"></rect></svg>',
    nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"></polygon> <circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"></circle></svg>',
    pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 "></polygon></svg>',
    pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"></path> <path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"></path></svg>',
    phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"></path> <circle cx="10.5" cy="16.5" r="0.8"></circle></svg>',
    pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"></path></svg>',
    play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"></polygon></svg>',
    plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="9" y="1" width="1" height="17"></rect> <rect x="1" y="9" width="17" height="1"></rect></svg>',
    pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"></polygon> <line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"></line> <polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"></polyline></svg>',
    push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"></polygon> <line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"></line> <polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"></polyline></svg>',
    question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <circle cx="10.44" cy="14.42" r="1.05"></circle> <path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"></path></svg>',
    receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"></path></svg>',
    refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"></path> <polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"></polyline></svg>',
    reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"></path></svg>',
    rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3.12" cy="16.8" r="1.85"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"></path></svg>',
    search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>',
    server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3" y="3" width="1" height="2"></rect> <rect x="5" y="3" width="1" height="2"></rect> <rect x="7" y="3" width="1" height="2"></rect> <rect x="16" y="3" width="1" height="1"></rect> <rect x="16" y="10" width="1" height="1"></rect> <circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"></circle> <rect x="3" y="10" width="1" height="2"></rect> <rect x="5" y="10" width="1" height="2"></rect> <rect x="9.5" y="14" width="1" height="2"></rect> <rect x="3" y="17" width="6" height="1"></rect> <rect x="11" y="17" width="6" height="1"></rect> <rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"></rect> <rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"></rect></svg>',
    settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"></ellipse> <ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"></ellipse> <circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"></circle> <rect x="1" y="3" width="3" height="1"></rect> <rect x="10" y="3" width="8" height="1"></rect> <rect x="1" y="9" width="8" height="1"></rect> <rect x="15" y="9" width="3" height="1"></rect> <rect x="1" y="15" width="3" height="1"></rect> <rect x="10" y="15" width="8" height="1"></rect></svg>',
    shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="11 4 12 4 12 8 16 8 16 9 11 9"></polygon> <polygon points="4 11 9 11 9 16 8 16 8 12 4 12"></polygon> <path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"></path></svg>',
    social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"></line> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"></line> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"></circle> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"></circle> <circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"></circle></svg>',
    soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"></path> <rect x="6" y="6.5" width="1.5" height="8.5"></rect> <rect x="3" y="8" width="1.5" height="7"></rect> <rect y="10" width="1.5" height="5"></rect></svg>',
    star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"></polygon></svg>',
    strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"></path> <rect x="3" y="10" width="15" height="1"></rect></svg>',
    table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="3" width="18" height="1"></rect> <rect x="1" y="7" width="18" height="1"></rect> <rect x="1" y="11" width="18" height="1"></rect> <rect x="1" y="15" width="18" height="1"></rect></svg>',
    tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"></path> <circle cx="10.5" cy="16.3" r="0.8"></circle></svg>',
    tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"></path> <circle cx="14" cy="6" r="1"></circle></svg>',
    thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"></rect> <rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"></rect> <rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"></rect> <rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"></rect></svg>',
    trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"></polyline> <polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"></polyline> <rect x="8" y="7" width="1" height="9"></rect> <rect x="11" y="7" width="1" height="9"></rect> <rect x="2" y="3" width="16" height="1"></rect></svg>',
    tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"></path></svg>',
    tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"></path></svg>',
    tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="7" y="16" width="6" height="1"></rect> <rect fill="none" stroke="#000" x="0.5" y="3.5" width="19" height="11"></rect></svg>',
    twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"></path></svg>',
    uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"></polygon> <polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"></polygon></svg>',
    unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"></rect> <path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"></path></svg>',
    upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8 "></polyline> <rect x="3" y="17" width="13" height="1"></rect> <line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"></line></svg>',
    user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path></svg>',
    users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"></path></svg>',
    vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"></path></svg>',
    warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="14" r="1"></circle> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle> <path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"></path></svg>',
    whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"></path></svg>',
    wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"></path></svg>',
    world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1,10.5 L19,10.5"></path> <path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"></path> <path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"></path> <path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"></path> <circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"></circle></svg>',
    xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"></path> <path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"></path></svg>',
    yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"></path></svg>',
    youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path></svg>',
    "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"></path> <path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"></path> <path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"></path> <path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"></path></svg>',
    "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"></polygon> <line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"></line></svg>',
    "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"></polyline> <line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"></line></svg>',
    "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"></polyline> <line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"></line></svg>',
    "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"></polygon> <line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"></line></svg>',
    "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg>',
    "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"></polyline></svg>',
    "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"></polyline></svg>',
    "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"></polyline></svg>',
    "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"></path> <polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"></polyline> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"></path></svg>',
    "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"></path> <polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"></polyline> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"></path></svg>',
    "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"></rect> <rect x="1" y="7" width="18" height="3"></rect></svg>',
    "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"></path> <polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"></polyline></svg>',
    "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"></circle> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"></circle> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"></circle> <path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"></path></svg>',
    "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"></circle> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"></circle> <ellipse fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" rx="1.79" ry="1.79"></ellipse> <path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"></path></svg>',
    "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"></path></svg>',
    "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"></path> <polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 "></polygon></svg>',
    "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',
    "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="3" r="2"></circle> <circle cx="10" cy="10" r="2"></circle> <circle cx="10" cy="17" r="2"></circle></svg>',
    "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"></path> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"></path> <path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"></path></svg>',
    "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"></path> <circle cx="3.8" cy="10.5" r="0.8"></circle></svg>',
    "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"></polygon> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle></svg>',
    "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"></line> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',
    "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"></path> <path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"></path></svg>',
    "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"></polygon> <polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"></polygon></svg>',
    "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"></polygon> <polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"></polygon></svg>',
    "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"></path> <circle cx="3.7" cy="10.5" r="0.8"></circle></svg>',
    "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 7 15 7 10 12"></polygon></svg>',
    "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12 5 7 10 12 15"></polygon></svg>',
    "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="8 5 13 10 8 15"></polygon></svg>',
    "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 13 10 8 15 13"></polygon></svg>',
    "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18,6 18,14 12,10 "></polygon> <rect x="2" y="5" width="12" height="10"></rect></svg>'
  };
  return "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
}),
function(t, e) {
  if (e.component("header", {
      name: "header",
      connected: function() {
        this.initialize()
      },
      ready: function() {
        this.section.length || this.initialize()
      },
      update: [{
        read: function() {
          this.prevHeight = this.height, this.height = this.$el[0].offsetHeight;
          var t = this.modifier && e.getComponent(this.sticky, "sticky");
          t && (t.$props.top = this.section[0].offsetHeight <= window.innerHeight ? this.selector : e.util.offsetTop(this.section) + 300)
        },
        write: function() {
          this.placeholder && this.prevHeight !== this.height && this.placeholder.css({
            height: this.height
          })
        },
        events: ["load", "resize"]
      }],
      methods: {
        initialize: function() {
          if (this.selector = '.tm-header + [class*="uk-section"], .tm-header + > [class*="uk-section"]', this.section = t(this.selector), this.sticky = t("[uk-sticky]", this.$el), this.modifier = this.section.attr("tm-header-transparent"), this.modifier && this.section.length) {
            this.$el.addClass("tm-header-transparent"), this.placeholder = this.section[0].hasAttribute("tm-header-transparent-placeholder") && t('<div class="tm-header-placeholder uk-margin-remove-adjacent" style="height: ' + this.$el[0].offsetHeight + 'px"></div>').insertBefore(t("[uk-grid]", this.section).first());
            var e = t(".uk-navbar-container", this.$el),
              i = t("[uk-navbar]", this.$el),
              n = "uk-navbar-transparent uk-" + this.modifier;
            t(".tm-headerbar-top, .tm-headerbar-bottom").addClass("uk-" + this.modifier), "push" === i.attr("dropbar-mode") && i.attr("dropbar-mode", "slide"), this.sticky.length ? this.sticky.attr({
              animation: "uk-animation-slide-top",
              top: this.selector,
              "cls-inactive": n
            }) : e.addClass(n)
          }
        }
      }
    }), e.util.isRtl) {
    var i = {
      init: function() {
        this.$props.pos = e.util.swap(this.$props.pos, "left", "right")
      }
    };
    e.mixin(i, "drop"), e.mixin(i, "tooltip")
  }
}(jQuery, UIkit);
//# sourceMappingURL=maps/scripts-d0ec24c5.js.map
