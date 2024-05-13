import { jsx as k, jsxs as Q, Fragment as Xe } from "react/jsx-runtime";
import h, { forwardRef as q, createElement as uu, useState as Z, useRef as I, useEffect as J, useCallback as ee, useContext as U, useMemo as K, createContext as W, cloneElement as Ls } from "react";
import Rr, { flushSync as og, createPortal as ug } from "react-dom";
var sg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const dg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Qe = (e, t) => {
  const n = q(
    ({ color: r = "currentColor", size: a = 24, strokeWidth: i = 2, absoluteStrokeWidth: l, children: o, ...u }, s) => uu(
      "svg",
      {
        ref: s,
        ...sg,
        width: a,
        height: a,
        stroke: r,
        strokeWidth: l ? Number(i) * 24 / Number(a) : i,
        className: `lucide lucide-${dg(e)}`,
        ...u
      },
      [
        ...t.map(([d, c]) => uu(d, c)),
        ...(Array.isArray(o) ? o : [o]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, cg = Qe("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]), fg = Qe("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), bg = Qe("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]), Os = Qe("Calendar", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      ry: "2",
      key: "eu3xkr"
    }
  ],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]
]), Gl = Qe("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), Zl = Qe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), su = Qe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), ll = Qe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), pg = Qe("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), mg = Qe("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), hg = Qe("Minus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }]
]), vg = Qe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), js = Qe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Hs(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (n = Hs(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function gg() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
    (e = arguments[n]) && (t = Hs(e)) && (r && (r += " "), r += t);
  return r;
}
function $g(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function _s(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function yg(e, t) {
  var n = _s(e, t, "get");
  return $g(e, n);
}
function xg(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ir(e, t, n) {
  xg(e, t), t.set(e, n);
}
function Dg(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function du(e, t, n) {
  var r = _s(e, t, "set");
  return Dg(e, r, n), n;
}
typeof document < "u" && h.useLayoutEffect;
function Cg(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
let er = /* @__PURE__ */ new Map(), cu = /* @__PURE__ */ new Set();
function fu() {
  if (typeof window > "u")
    return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = er.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), er.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = er.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), er.delete(r.target)), er.size === 0)) {
      for (let i of cu)
        i();
      cu.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? fu() : document.addEventListener("DOMContentLoaded", fu));
function Ke(e, t, n) {
  let [r, a] = Z(e || t), i = I(e !== void 0), l = e !== void 0;
  J(() => {
    let s = i.current;
    s !== l && console.warn(`WARN: A component changed from ${s ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), i.current = l;
  }, [
    l
  ]);
  let o = l ? e : r, u = ee((s, ...d) => {
    let c = (b, ...f) => {
      n && (Object.is(o, b) || n(b, ...f)), l || (o = b);
    };
    typeof s == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a((f, ...p) => {
      let m = s(l ? o : f, ...p);
      return c(m, ...d), l ? f : m;
    })) : (l || a(s), c(s, ...d));
  }, [
    l,
    o,
    n
  ]);
  return [
    o,
    u
  ];
}
function dt(e, t = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(e, t), n);
}
function Ge(e, t, n, r) {
  t = Number(t), n = Number(n);
  let a = (e - (isNaN(t) ? 0 : t)) % r, i = Math.abs(a) * 2 >= r ? e + Math.sign(a) * (r - Math.abs(a)) : e - a;
  isNaN(t) ? !isNaN(n) && i > n && (i = Math.floor(n / r) * r) : i < t ? i = t : !isNaN(n) && i > n && (i = t + Math.floor((n - t) / r) * r);
  let l = r.toString(), o = l.indexOf("."), u = o >= 0 ? l.length - o : 0;
  if (u > 0) {
    let s = Math.pow(10, u);
    i = Math.round(i * s) / s;
  }
  return i;
}
const Ea = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Us = /* @__PURE__ */ h.createContext(Ea), Eg = /* @__PURE__ */ h.createContext(!1);
let Pg = !!(typeof window < "u" && window.document && window.document.createElement), Ti = /* @__PURE__ */ new WeakMap();
function wg(e = !1) {
  let t = U(Us), n = I(null);
  if (n.current === null && !e) {
    var r, a;
    let i = (a = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (r = a.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (i) {
      let l = Ti.get(i);
      l == null ? Ti.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== l.state && (t.current = l.id, Ti.delete(i));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function Sg(e) {
  let t = U(Us);
  t === Ea && !Pg && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = wg(!!e), r = t === Ea && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function Bg(e) {
  let t = h.useId(), [n] = Z(Bt()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Ea.prefix}`;
  return e || `${r}-${t}`;
}
const kg = typeof h.useId == "function" ? Bg : Sg;
function Fg() {
  return !1;
}
function Ag() {
  return !0;
}
function Tg(e) {
  return () => {
  };
}
function Bt() {
  return typeof h.useSyncExternalStore == "function" ? h.useSyncExternalStore(Tg, Fg, Ag) : U(Eg);
}
const fe = typeof document < "u" ? h.useLayoutEffect : () => {
};
function ye(e) {
  const t = I(null);
  return fe(() => {
    t.current = e;
  }, [
    e
  ]), ee((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
function Mg(e) {
  let [t, n] = Z(e), r = I(null), a = ye(() => {
    if (!r.current)
      return;
    let l = r.current.next();
    if (l.done) {
      r.current = null;
      return;
    }
    t === l.value ? a() : n(l.value);
  });
  fe(() => {
    r.current && a();
  });
  let i = ye((l) => {
    r.current = l(t), a();
  });
  return [
    t,
    i
  ];
}
let Rg = !!(typeof window < "u" && window.document && window.document.createElement), Pa = /* @__PURE__ */ new Map();
function be(e) {
  let [t, n] = Z(e), r = I(null), a = kg(t), i = ee((l) => {
    r.current = l;
  }, []);
  return Rg && Pa.set(a, i), fe(() => {
    let l = a;
    return () => {
      Pa.delete(l);
    };
  }, [
    a
  ]), J(() => {
    let l = r.current;
    l && (r.current = null, n(l));
  }), a;
}
function Ig(e, t) {
  if (e === t)
    return e;
  let n = Pa.get(e);
  if (n)
    return n(t), t;
  let r = Pa.get(t);
  return r ? (r(e), e) : t;
}
function wt(e = []) {
  let t = be(), [n, r] = Mg(t), a = ee(() => {
    r(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    r
  ]);
  return fe(a, [
    t,
    a,
    ...e
  ]), n;
}
function St(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const ve = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, st = (e) => e && "window" in e && e.window === e ? e : ve(e).defaultView || window;
function j(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let a in r) {
      let i = t[a], l = r[a];
      typeof i == "function" && typeof l == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = St(i, l) : (a === "className" || a === "UNSAFE_className") && typeof i == "string" && typeof l == "string" ? t[a] = gg(i, l) : a === "id" && i && l ? t.id = Ig(i, l) : t[a] = l !== void 0 ? l : i;
    }
  }
  return t;
}
function Ya(...e) {
  return e.length === 1 ? e[0] : (t) => {
    for (let n of e)
      typeof n == "function" ? n(t) : n != null && (n.current = t);
  };
}
const Ng = /* @__PURE__ */ new Set([
  "id"
]), Kg = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), zg = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Vg = /^(data-.*)$/;
function Y(e, t = {}) {
  let { labelable: n, isLink: r, propNames: a } = t, i = {};
  for (const l in e)
    Object.prototype.hasOwnProperty.call(e, l) && (Ng.has(l) || n && Kg.has(l) || r && zg.has(l) || a != null && a.has(l) || Vg.test(l)) && (i[l] = e[l]);
  return i;
}
function yt(e) {
  if (Lg())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = Og(e);
    e.focus(), jg(t);
  }
}
let ia = null;
function Lg() {
  if (ia == null) {
    ia = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return ia = !0, !0;
        }
      });
    } catch {
    }
  }
  return ia;
}
function Og(e) {
  let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function jg(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Ja(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function ql(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Lt() {
  return ql(/^Mac/i);
}
function Ws() {
  return ql(/^iPhone/i);
}
function Gs() {
  return ql(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Lt() && navigator.maxTouchPoints > 1;
}
function Gn() {
  return Ws() || Gs();
}
function ga() {
  return Lt() || Gn();
}
function Yl() {
  return Ja(/AppleWebKit/i) && !Hg();
}
function Hg() {
  return Ja(/Chrome/i);
}
function gr() {
  return Ja(/Android/i);
}
function _g() {
  return Ja(/Firefox/i);
}
const Ug = /* @__PURE__ */ W({
  isNative: !0,
  open: Zg
});
function Nr() {
  return U(Ug);
}
function Wg(e, t) {
  let n = e.getAttribute("target");
  return (!n || n === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function hn(e, t, n = !0) {
  var r, a;
  let { metaKey: i, ctrlKey: l, altKey: o, shiftKey: u } = t;
  _g() && (!((a = window.event) === null || a === void 0 || (r = a.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (Lt() ? i = !0 : l = !0);
  let s = Yl() && Lt() && !Gs() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: i,
    ctrlKey: l,
    altKey: o,
    shiftKey: u
  }) : new MouseEvent("click", {
    metaKey: i,
    ctrlKey: l,
    altKey: o,
    shiftKey: u,
    bubbles: !0,
    cancelable: !0
  });
  hn.isOpening = n, yt(e), e.dispatchEvent(s), hn.isOpening = !1;
}
hn.isOpening = !1;
function Gg(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n);
  }
}
function Zg(e, t) {
  Gg(e, (n) => hn(n, t));
}
function Jl(e) {
  return {
    "data-href": e.href,
    "data-target": e.target,
    "data-rel": e.rel,
    "data-download": e.download,
    "data-ping": e.ping,
    "data-referrer-policy": e.referrerPolicy
  };
}
let Tn = /* @__PURE__ */ new Map(), ol = /* @__PURE__ */ new Set();
function bu() {
  if (typeof window > "u")
    return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Tn.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), Tn.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Tn.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), Tn.delete(r.target)), Tn.size === 0)) {
      for (let i of ol)
        i();
      ol.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? bu() : document.addEventListener("DOMContentLoaded", bu));
function Zs(e) {
  requestAnimationFrame(() => {
    Tn.size === 0 ? e() : ol.add(e);
  });
}
function Zn() {
  let e = I(/* @__PURE__ */ new Map()), t = ee((a, i, l, o) => {
    let u = o != null && o.once ? (...s) => {
      e.current.delete(l), l(...s);
    } : l;
    e.current.set(l, {
      type: i,
      eventTarget: a,
      fn: u,
      options: o
    }), a.addEventListener(i, l, o);
  }, []), n = ee((a, i, l, o) => {
    var u;
    let s = ((u = e.current.get(l)) === null || u === void 0 ? void 0 : u.fn) || l;
    a.removeEventListener(i, s, o), e.current.delete(l);
  }, []), r = ee(() => {
    e.current.forEach((a, i) => {
      n(a.eventTarget, a.type, i, a.options);
    });
  }, [
    n
  ]);
  return J(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Ot(e, t) {
  let { id: n, "aria-label": r, "aria-labelledby": a } = e;
  return n = be(n), a && r ? a = [
    .../* @__PURE__ */ new Set([
      n,
      ...a.trim().split(/\s+/)
    ])
  ].join(" ") : a && (a = a.trim().split(/\s+/).join(" ")), !r && !a && t && (r = t), {
    id: n,
    "aria-label": r,
    "aria-labelledby": a
  };
}
function Me(e) {
  const t = I(null);
  return K(() => ({
    get current() {
      return t.current;
    },
    set current(n) {
      t.current = n, typeof e == "function" ? e(n) : e && (e.current = n);
    }
  }), [
    e
  ]);
}
function wa(e, t) {
  const n = I(!0), r = I(null);
  J(() => (n.current = !0, () => {
    n.current = !1;
  }), []), J(() => {
    n.current ? n.current = !1 : (!r.current || t.some((a, i) => !Object.is(a, r[i]))) && e(), r.current = t;
  }, t);
}
function qg() {
  return typeof window.ResizeObserver < "u";
}
function Kr(e) {
  const { ref: t, onResize: n } = e;
  J(() => {
    let r = t == null ? void 0 : t.current;
    if (r)
      if (qg()) {
        const a = new window.ResizeObserver((i) => {
          i.length && n();
        });
        return a.observe(r), () => {
          r && a.unobserve(r);
        };
      } else
        return window.addEventListener("resize", n, !1), () => {
          window.removeEventListener("resize", n, !1);
        };
  }, [
    n,
    t
  ]);
}
function qs(e, t) {
  fe(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function ze(e, t) {
  let n = e;
  for (Sa(n, t) && (n = n.parentElement); n && !Sa(n, t); )
    n = n.parentElement;
  return n || document.scrollingElement || document.documentElement;
}
function Sa(e, t) {
  let n = window.getComputedStyle(e), r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r;
}
let lt = typeof document < "u" && window.visualViewport;
function Yg() {
  let e = Bt(), [t, n] = Z(() => e ? {
    width: 0,
    height: 0
  } : pu());
  return J(() => {
    let r = () => {
      n((a) => {
        let i = pu();
        return i.width === a.width && i.height === a.height ? a : i;
      });
    };
    return lt ? lt.addEventListener("resize", r) : window.addEventListener("resize", r), () => {
      lt ? lt.removeEventListener("resize", r) : window.removeEventListener("resize", r);
    };
  }, []), t;
}
function pu() {
  return {
    width: lt && (lt == null ? void 0 : lt.width) || window.innerWidth,
    height: lt && (lt == null ? void 0 : lt.height) || window.innerHeight
  };
}
let Jg = 0;
const Mi = /* @__PURE__ */ new Map();
function kt(e) {
  let [t, n] = Z();
  return fe(() => {
    if (!e)
      return;
    let r = Mi.get(e);
    if (r)
      n(r.element.id);
    else {
      let a = `react-aria-description-${Jg++}`;
      n(a);
      let i = document.createElement("div");
      i.id = a, i.style.display = "none", i.textContent = e, document.body.appendChild(i), r = {
        refCount: 0,
        element: i
      }, Mi.set(e, r);
    }
    return r.refCount++, () => {
      r && --r.refCount === 0 && (r.element.remove(), Mi.delete(e));
    };
  }, [
    e
  ]), {
    "aria-describedby": e ? t : void 0
  };
}
function Jt(e, t, n, r) {
  let a = ye(n), i = n == null;
  J(() => {
    if (i || !e.current)
      return;
    let l = e.current;
    return l.addEventListener(t, a, r), () => {
      l.removeEventListener(t, a, r);
    };
  }, [
    e,
    t,
    r,
    i,
    a
  ]);
}
function Ys(e, t) {
  let n = mu(e, t, "left"), r = mu(e, t, "top"), a = t.offsetWidth, i = t.offsetHeight, l = e.scrollLeft, o = e.scrollTop, { borderTopWidth: u, borderLeftWidth: s } = getComputedStyle(e), d = e.scrollLeft + parseInt(s, 10), c = e.scrollTop + parseInt(u, 10), b = d + e.clientWidth, f = c + e.clientHeight;
  n <= l ? l = n - parseInt(s, 10) : n + a > b && (l += n + a - b), r <= c ? o = r - parseInt(u, 10) : r + i > f && (o += r + i - f), e.scrollLeft = l, e.scrollTop = o;
}
function mu(e, t, n) {
  const r = n === "left" ? "offsetLeft" : "offsetTop";
  let a = 0;
  for (; t.offsetParent && (a += t[r], t.offsetParent !== e); ) {
    if (t.offsetParent.contains(e)) {
      a -= e[r];
      break;
    }
    t = t.offsetParent;
  }
  return a;
}
function Oe(e, t) {
  if (document.contains(e)) {
    let l = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(l).overflow === "hidden") {
      let u = ze(e);
      for (; e && u && e !== l && u !== l; )
        Ys(u, e), e = u, u = ze(e);
    } else {
      var n;
      let { left: u, top: s } = e.getBoundingClientRect();
      e == null || (n = e.scrollIntoView) === null || n === void 0 || n.call(e, {
        block: "nearest"
      });
      let { left: d, top: c } = e.getBoundingClientRect();
      if (Math.abs(u - d) > 1 || Math.abs(s - c) > 1) {
        var r, a, i;
        t == null || (a = t.containingElement) === null || a === void 0 || (r = a.scrollIntoView) === null || r === void 0 || r.call(a, {
          block: "center",
          inline: "center"
        }), (i = e.scrollIntoView) === null || i === void 0 || i.call(e, {
          block: "nearest"
        });
      }
    }
  }
}
function ul(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : gr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Xg(e) {
  return !gr() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function Js(e, t) {
  let n = I(null);
  return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e;
}
function xn(e, t, n) {
  let r = I(t), a = ye(() => {
    n && n(r.current);
  });
  J(() => {
    var i;
    let l = e == null || (i = e.current) === null || i === void 0 ? void 0 : i.form;
    return l == null || l.addEventListener("reset", a), () => {
      l == null || l.removeEventListener("reset", a);
    };
  }, [
    e,
    a
  ]);
}
let In = "default", sl = "", $a = /* @__PURE__ */ new WeakMap();
function dl(e) {
  if (Gn()) {
    if (In === "default") {
      const t = ve(e);
      sl = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    In = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && ($a.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function dr(e) {
  if (Gn()) {
    if (In !== "disabled")
      return;
    In = "restoring", setTimeout(() => {
      Zs(() => {
        if (In === "restoring") {
          const t = ve(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = sl || ""), sl = "", In = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && $a.has(e)) {
    let t = $a.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), $a.delete(e);
  }
}
const Xl = h.createContext({
  register: () => {
  }
});
Xl.displayName = "PressResponderContext";
function Qg(e) {
  let t = U(Xl);
  if (t) {
    let { register: n, ...r } = t;
    e = j(r, e), n();
  }
  return qs(t, e.ref), e;
}
var la = /* @__PURE__ */ new WeakMap();
class oa {
  continuePropagation() {
    du(this, la, !1);
  }
  get shouldStopPropagation() {
    return yg(this, la);
  }
  constructor(t, n, r) {
    Ir(this, la, {
      writable: !0,
      value: void 0
    }), du(this, la, !0), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey;
  }
}
const hu = Symbol("linkClicked");
function Je(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: r,
    onPressEnd: a,
    onPressUp: i,
    isDisabled: l,
    isPressed: o,
    preventFocusOnPress: u,
    shouldCancelOnPointerExit: s,
    allowTextSelectionOnPress: d,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: c,
    ...b
  } = Qg(e), [f, p] = Z(!1), m = I({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: v, removeAllGlobalListeners: y } = Zn(), $ = ye((g, M) => {
    let F = m.current;
    if (l || F.didFirePressStart)
      return !1;
    let E = !0;
    if (F.isTriggeringEvent = !0, r) {
      let S = new oa("pressstart", M, g);
      r(S), E = S.shouldStopPropagation;
    }
    return n && n(!0), F.isTriggeringEvent = !1, F.didFirePressStart = !0, p(!0), E;
  }), x = ye((g, M, F = !0) => {
    let E = m.current;
    if (!E.didFirePressStart)
      return !1;
    E.ignoreClickAfterPress = !0, E.didFirePressStart = !1, E.isTriggeringEvent = !0;
    let S = !0;
    if (a) {
      let w = new oa("pressend", M, g);
      a(w), S = w.shouldStopPropagation;
    }
    if (n && n(!1), p(!1), t && F && !l) {
      let w = new oa("press", M, g);
      t(w), S && (S = w.shouldStopPropagation);
    }
    return E.isTriggeringEvent = !1, S;
  }), C = ye((g, M) => {
    let F = m.current;
    if (l)
      return !1;
    if (i) {
      F.isTriggeringEvent = !0;
      let E = new oa("pressup", M, g);
      return i(E), F.isTriggeringEvent = !1, E.shouldStopPropagation;
    }
    return !0;
  }), P = ye((g) => {
    let M = m.current;
    M.isPressed && M.target && (M.isOverTarget && M.pointerType != null && x(At(M.target, g), M.pointerType, !1), M.isPressed = !1, M.isOverTarget = !1, M.activePointerId = null, M.pointerType = null, y(), d || dr(M.target));
  }), B = ye((g) => {
    s && P(g);
  }), R = K(() => {
    let g = m.current, M = {
      onKeyDown(E) {
        if (Ri(E.nativeEvent, E.currentTarget) && E.currentTarget.contains(E.target)) {
          var S;
          gu(E.target, E.key) && E.preventDefault();
          let w = !0;
          if (!g.isPressed && !E.repeat) {
            g.target = E.currentTarget, g.isPressed = !0, w = $(E, "keyboard");
            let A = E.currentTarget, z = (T) => {
              Ri(T, A) && !T.repeat && A.contains(T.target) && g.target && C(At(g.target, T), "keyboard");
            };
            v(ve(E.currentTarget), "keyup", St(z, F), !0);
          }
          w && E.stopPropagation(), E.metaKey && Lt() && ((S = g.metaKeyEvents) === null || S === void 0 || S.set(E.key, E.nativeEvent));
        } else
          E.key === "Meta" && (g.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(E) {
        if (!(E && !E.currentTarget.contains(E.target)) && E && E.button === 0 && !g.isTriggeringEvent && !hn.isOpening) {
          let S = !0;
          if (l && E.preventDefault(), !g.ignoreClickAfterPress && !g.ignoreEmulatedMouseEvents && !g.isPressed && (g.pointerType === "virtual" || ul(E.nativeEvent))) {
            !l && !u && yt(E.currentTarget);
            let w = $(E, "virtual"), A = C(E, "virtual"), z = x(E, "virtual");
            S = w && A && z;
          }
          g.ignoreEmulatedMouseEvents = !1, g.ignoreClickAfterPress = !1, S && E.stopPropagation();
        }
      }
    }, F = (E) => {
      var S;
      if (g.isPressed && g.target && Ri(E, g.target)) {
        var w;
        gu(E.target, E.key) && E.preventDefault();
        let z = E.target;
        x(At(g.target, E), "keyboard", g.target.contains(z)), y(), E.key !== "Enter" && Ql(g.target) && g.target.contains(z) && !E[hu] && (E[hu] = !0, hn(g.target, E, !1)), g.isPressed = !1, (w = g.metaKeyEvents) === null || w === void 0 || w.delete(E.key);
      } else if (E.key === "Meta" && (!((S = g.metaKeyEvents) === null || S === void 0) && S.size)) {
        var A;
        let z = g.metaKeyEvents;
        g.metaKeyEvents = void 0;
        for (let T of z.values())
          (A = g.target) === null || A === void 0 || A.dispatchEvent(new KeyboardEvent("keyup", T));
      }
    };
    if (typeof PointerEvent < "u") {
      M.onPointerDown = (A) => {
        if (A.button !== 0 || !A.currentTarget.contains(A.target))
          return;
        if (Xg(A.nativeEvent)) {
          g.pointerType = "virtual";
          return;
        }
        Ii(A.currentTarget) && A.preventDefault(), g.pointerType = A.pointerType;
        let z = !0;
        g.isPressed || (g.isPressed = !0, g.isOverTarget = !0, g.activePointerId = A.pointerId, g.target = A.currentTarget, !l && !u && yt(A.currentTarget), d || dl(g.target), z = $(A, g.pointerType), v(ve(A.currentTarget), "pointermove", E, !1), v(ve(A.currentTarget), "pointerup", S, !1), v(ve(A.currentTarget), "pointercancel", w, !1)), z && A.stopPropagation();
      }, M.onMouseDown = (A) => {
        A.currentTarget.contains(A.target) && A.button === 0 && (Ii(A.currentTarget) && A.preventDefault(), A.stopPropagation());
      }, M.onPointerUp = (A) => {
        !A.currentTarget.contains(A.target) || g.pointerType === "virtual" || A.button === 0 && kn(A, A.currentTarget) && C(A, g.pointerType || A.pointerType);
      };
      let E = (A) => {
        A.pointerId === g.activePointerId && (g.target && kn(A, g.target) ? !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, $(At(g.target, A), g.pointerType)) : g.target && g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, x(At(g.target, A), g.pointerType, !1), B(A)));
      }, S = (A) => {
        A.pointerId === g.activePointerId && g.isPressed && A.button === 0 && g.target && (kn(A, g.target) && g.pointerType != null ? x(At(g.target, A), g.pointerType) : g.isOverTarget && g.pointerType != null && x(At(g.target, A), g.pointerType, !1), g.isPressed = !1, g.isOverTarget = !1, g.activePointerId = null, g.pointerType = null, y(), d || dr(g.target));
      }, w = (A) => {
        P(A);
      };
      M.onDragStart = (A) => {
        A.currentTarget.contains(A.target) && P(A);
      };
    } else {
      M.onMouseDown = (w) => {
        if (w.button !== 0 || !w.currentTarget.contains(w.target))
          return;
        if (Ii(w.currentTarget) && w.preventDefault(), g.ignoreEmulatedMouseEvents) {
          w.stopPropagation();
          return;
        }
        g.isPressed = !0, g.isOverTarget = !0, g.target = w.currentTarget, g.pointerType = ul(w.nativeEvent) ? "virtual" : "mouse", !l && !u && yt(w.currentTarget), $(w, g.pointerType) && w.stopPropagation(), v(ve(w.currentTarget), "mouseup", E, !1);
      }, M.onMouseEnter = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        let A = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !0, A = $(w, g.pointerType)), A && w.stopPropagation();
      }, M.onMouseLeave = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        let A = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !1, A = x(w, g.pointerType, !1), B(w)), A && w.stopPropagation();
      }, M.onMouseUp = (w) => {
        w.currentTarget.contains(w.target) && !g.ignoreEmulatedMouseEvents && w.button === 0 && C(w, g.pointerType || "mouse");
      };
      let E = (w) => {
        if (w.button === 0) {
          if (g.isPressed = !1, y(), g.ignoreEmulatedMouseEvents) {
            g.ignoreEmulatedMouseEvents = !1;
            return;
          }
          g.target && kn(w, g.target) && g.pointerType != null ? x(At(g.target, w), g.pointerType) : g.target && g.isOverTarget && g.pointerType != null && x(At(g.target, w), g.pointerType, !1), g.isOverTarget = !1;
        }
      };
      M.onTouchStart = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        let A = e$(w.nativeEvent);
        if (!A)
          return;
        g.activePointerId = A.identifier, g.ignoreEmulatedMouseEvents = !0, g.isOverTarget = !0, g.isPressed = !0, g.target = w.currentTarget, g.pointerType = "touch", !l && !u && yt(w.currentTarget), d || dl(g.target), $(w, g.pointerType) && w.stopPropagation(), v(st(w.currentTarget), "scroll", S, !0);
      }, M.onTouchMove = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        if (!g.isPressed) {
          w.stopPropagation();
          return;
        }
        let A = vu(w.nativeEvent, g.activePointerId), z = !0;
        A && kn(A, w.currentTarget) ? !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, z = $(w, g.pointerType)) : g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, z = x(w, g.pointerType, !1), B(w)), z && w.stopPropagation();
      }, M.onTouchEnd = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        if (!g.isPressed) {
          w.stopPropagation();
          return;
        }
        let A = vu(w.nativeEvent, g.activePointerId), z = !0;
        A && kn(A, w.currentTarget) && g.pointerType != null ? (C(w, g.pointerType), z = x(w, g.pointerType)) : g.isOverTarget && g.pointerType != null && (z = x(w, g.pointerType, !1)), z && w.stopPropagation(), g.isPressed = !1, g.activePointerId = null, g.isOverTarget = !1, g.ignoreEmulatedMouseEvents = !0, g.target && !d && dr(g.target), y();
      }, M.onTouchCancel = (w) => {
        w.currentTarget.contains(w.target) && (w.stopPropagation(), g.isPressed && P(w));
      };
      let S = (w) => {
        g.isPressed && w.target.contains(g.target) && P({
          currentTarget: g.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      M.onDragStart = (w) => {
        w.currentTarget.contains(w.target) && P(w);
      };
    }
    return M;
  }, [
    v,
    l,
    u,
    y,
    d,
    P,
    B,
    x,
    $,
    C
  ]);
  return J(() => () => {
    var g;
    d || dr((g = m.current.target) !== null && g !== void 0 ? g : void 0);
  }, [
    d
  ]), {
    isPressed: o || f,
    pressProps: j(b, R)
  };
}
function Ql(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Ri(e, t) {
  const { key: n, code: r } = e, a = t, i = a.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(a instanceof st(a).HTMLInputElement && !Xs(a, n) || a instanceof st(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Ql(a)) && n !== "Enter");
}
function e$(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function vu(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.identifier === t)
      return a;
  }
  return null;
}
function At(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  };
}
function t$(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function n$(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function kn(e, t) {
  let n = t.getBoundingClientRect(), r = t$(e);
  return n$(n, r);
}
function Ii(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function gu(e, t) {
  return e instanceof HTMLInputElement ? !Xs(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Ql(e);
}
const r$ = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Xs(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : r$.has(e.type);
}
function a$({ children: e }) {
  let t = K(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ h.createElement(Xl.Provider, {
    value: t
  }, e);
}
class i$ {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function Qs(e) {
  let t = I({
    isFocused: !1,
    observer: null
  });
  fe(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = ye((r) => {
    e == null || e(r);
  });
  return ee((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = r.target, i = (l) => {
        t.current.isFocused = !1, a.disabled && n(new i$("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      a.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && a.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let o = a === document.activeElement ? null : document.activeElement;
          a.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: o
          })), a.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: o
          }));
        }
      }), t.current.observer.observe(a, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
function Xa(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e;
  const i = ee((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), a && a(!1), !0;
  }, [
    r,
    a
  ]), l = Qs(i), o = ee((u) => {
    u.target === u.currentTarget && document.activeElement === u.target && (n && n(u), a && a(!0), l(u));
  }, [
    a,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || a || r) ? o : void 0,
      onBlur: !t && (r || a) ? i : void 0
    }
  };
}
let jt = null, $r = /* @__PURE__ */ new Set(), pr = /* @__PURE__ */ new Map(), vn = !1, cl = !1;
const l$ = {
  Tab: !0,
  Escape: !0
};
function Qa(e, t) {
  for (let n of $r)
    n(e, t);
}
function o$(e) {
  return !(e.metaKey || !Lt() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Ba(e) {
  vn = !0, o$(e) && (jt = "keyboard", Qa("keyboard", e));
}
function ut(e) {
  jt = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (vn = !0, Qa("pointer", e));
}
function ed(e) {
  ul(e) && (vn = !0, jt = "virtual");
}
function td(e) {
  e.target === window || e.target === document || (!vn && !cl && (jt = "virtual", Qa("virtual", e)), vn = !1, cl = !1);
}
function nd() {
  vn = !1, cl = !0;
}
function ka(e) {
  if (typeof window > "u" || pr.get(st(e)))
    return;
  const t = st(e), n = ve(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    vn = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Ba, !0), n.addEventListener("keyup", Ba, !0), n.addEventListener("click", ed, !0), t.addEventListener("focus", td, !0), t.addEventListener("blur", nd, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", ut, !0), n.addEventListener("pointermove", ut, !0), n.addEventListener("pointerup", ut, !0)) : (n.addEventListener("mousedown", ut, !0), n.addEventListener("mousemove", ut, !0), n.addEventListener("mouseup", ut, !0)), t.addEventListener("beforeunload", () => {
    rd(e);
  }, {
    once: !0
  }), pr.set(t, {
    focus: r
  });
}
const rd = (e, t) => {
  const n = st(e), r = ve(e);
  t && r.removeEventListener("DOMContentLoaded", t), pr.has(n) && (n.HTMLElement.prototype.focus = pr.get(n).focus, r.removeEventListener("keydown", Ba, !0), r.removeEventListener("keyup", Ba, !0), r.removeEventListener("click", ed, !0), n.removeEventListener("focus", td, !0), n.removeEventListener("blur", nd, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", ut, !0), r.removeEventListener("pointermove", ut, !0), r.removeEventListener("pointerup", ut, !0)) : (r.removeEventListener("mousedown", ut, !0), r.removeEventListener("mousemove", ut, !0), r.removeEventListener("mouseup", ut, !0)), pr.delete(n));
};
function u$(e) {
  const t = ve(e);
  let n;
  return t.readyState !== "loading" ? ka(e) : (n = () => {
    ka(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => rd(e, n);
}
typeof document < "u" && u$();
function gn() {
  return jt !== "pointer";
}
function Fa() {
  return jt;
}
function eo(e) {
  jt = e, Qa(e, null);
}
function zr() {
  ka();
  let [e, t] = Z(jt);
  return J(() => {
    let n = () => {
      t(jt);
    };
    return $r.add(n), () => {
      $r.delete(n);
    };
  }, []), Bt() ? null : e;
}
const s$ = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function d$(e, t, n) {
  var r;
  const a = typeof window < "u" ? st(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? st(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? st(n == null ? void 0 : n.target).HTMLElement : HTMLElement, o = typeof window < "u" ? st(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof a && !s$.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof o && !l$[n.key]);
}
function c$(e, t, n) {
  ka(), J(() => {
    let r = (a, i) => {
      d$(!!(n != null && n.isTextInput), a, i) && e(gn());
    };
    return $r.add(r), () => {
      $r.delete(r);
    };
  }, t);
}
function ft(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: a } = e, i = I({
    isFocusWithin: !1
  }), l = ee((s) => {
    i.current.isFocusWithin && !s.currentTarget.contains(s.relatedTarget) && (i.current.isFocusWithin = !1, n && n(s), a && a(!1));
  }, [
    n,
    a,
    i
  ]), o = Qs(l), u = ee((s) => {
    !i.current.isFocusWithin && document.activeElement === s.target && (r && r(s), a && a(!0), i.current.isFocusWithin = !0, o(s));
  }, [
    r,
    a,
    o
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: u,
      onBlur: l
    }
  };
}
let Aa = !1, Ni = 0;
function fl() {
  Aa = !0, setTimeout(() => {
    Aa = !1;
  }, 50);
}
function $u(e) {
  e.pointerType === "touch" && fl();
}
function f$() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", $u) : document.addEventListener("touchend", fl), Ni++, () => {
      Ni--, !(Ni > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", $u) : document.removeEventListener("touchend", fl));
    };
}
function xe(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e, [i, l] = Z(!1), o = I({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  J(f$, []);
  let { hoverProps: u, triggerHoverEnd: s } = K(() => {
    let d = (f, p) => {
      if (o.pointerType = p, a || p === "touch" || o.isHovered || !f.currentTarget.contains(f.target))
        return;
      o.isHovered = !0;
      let m = f.currentTarget;
      o.target = m, t && t({
        type: "hoverstart",
        target: m,
        pointerType: p
      }), n && n(!0), l(!0);
    }, c = (f, p) => {
      if (o.pointerType = "", o.target = null, p === "touch" || !o.isHovered)
        return;
      o.isHovered = !1;
      let m = f.currentTarget;
      r && r({
        type: "hoverend",
        target: m,
        pointerType: p
      }), n && n(!1), l(!1);
    }, b = {};
    return typeof PointerEvent < "u" ? (b.onPointerEnter = (f) => {
      Aa && f.pointerType === "mouse" || d(f, f.pointerType);
    }, b.onPointerLeave = (f) => {
      !a && f.currentTarget.contains(f.target) && c(f, f.pointerType);
    }) : (b.onTouchStart = () => {
      o.ignoreEmulatedMouseEvents = !0;
    }, b.onMouseEnter = (f) => {
      !o.ignoreEmulatedMouseEvents && !Aa && d(f, "mouse"), o.ignoreEmulatedMouseEvents = !1;
    }, b.onMouseLeave = (f) => {
      !a && f.currentTarget.contains(f.target) && c(f, "mouse");
    }), {
      hoverProps: b,
      triggerHoverEnd: c
    };
  }, [
    t,
    n,
    r,
    a,
    o
  ]);
  return J(() => {
    a && s({
      currentTarget: o.target
    }, o.pointerType);
  }, [
    a
  ]), {
    hoverProps: u,
    isHovered: i
  };
}
function ad(e) {
  let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: a } = e, i = I({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), l = ye((u) => {
    n && ua(u, t) && (a && a(u), i.current.isPointerDown = !0);
  }), o = ye((u) => {
    n && n(u);
  });
  J(() => {
    let u = i.current;
    if (r)
      return;
    const s = t.current, d = ve(s);
    if (typeof PointerEvent < "u") {
      let c = (b) => {
        u.isPointerDown && ua(b, t) && o(b), u.isPointerDown = !1;
      };
      return d.addEventListener("pointerdown", l, !0), d.addEventListener("pointerup", c, !0), () => {
        d.removeEventListener("pointerdown", l, !0), d.removeEventListener("pointerup", c, !0);
      };
    } else {
      let c = (f) => {
        u.ignoreEmulatedMouseEvents ? u.ignoreEmulatedMouseEvents = !1 : u.isPointerDown && ua(f, t) && o(f), u.isPointerDown = !1;
      }, b = (f) => {
        u.ignoreEmulatedMouseEvents = !0, u.isPointerDown && ua(f, t) && o(f), u.isPointerDown = !1;
      };
      return d.addEventListener("mousedown", l, !0), d.addEventListener("mouseup", c, !0), d.addEventListener("touchstart", l, !0), d.addEventListener("touchend", b, !0), () => {
        d.removeEventListener("mousedown", l, !0), d.removeEventListener("mouseup", c, !0), d.removeEventListener("touchstart", l, !0), d.removeEventListener("touchend", b, !0);
      };
    }
  }, [
    t,
    r,
    l,
    o
  ]);
}
function ua(e, t) {
  if (e.button > 0)
    return !1;
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]"))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
function yu(e) {
  if (!e)
    return;
  let t = !0;
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        t = !1;
      }
    };
    e(r), t && n.stopPropagation();
  };
}
function ei(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: yu(e.onKeyDown),
      onKeyUp: yu(e.onKeyUp)
    }
  };
}
function to(e) {
  let { onMoveStart: t, onMove: n, onMoveEnd: r } = e, a = I({
    didMove: !1,
    lastPosition: null,
    id: null
  }), { addGlobalListener: i, removeGlobalListener: l } = Zn(), o = ye((d, c, b, f) => {
    b === 0 && f === 0 || (a.current.didMove || (a.current.didMove = !0, t == null || t({
      type: "movestart",
      pointerType: c,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    })), n == null || n({
      type: "move",
      pointerType: c,
      deltaX: b,
      deltaY: f,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  }), u = ye((d, c) => {
    dr(), a.current.didMove && (r == null || r({
      type: "moveend",
      pointerType: c,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  });
  return {
    moveProps: K(() => {
      let d = {}, c = () => {
        dl(), a.current.didMove = !1;
      };
      if (typeof PointerEvent > "u") {
        let f = (y) => {
          if (y.button === 0) {
            var $, x, C, P;
            o(y, "mouse", y.pageX - ((C = ($ = a.current.lastPosition) === null || $ === void 0 ? void 0 : $.pageX) !== null && C !== void 0 ? C : 0), y.pageY - ((P = (x = a.current.lastPosition) === null || x === void 0 ? void 0 : x.pageY) !== null && P !== void 0 ? P : 0)), a.current.lastPosition = {
              pageX: y.pageX,
              pageY: y.pageY
            };
          }
        }, p = (y) => {
          y.button === 0 && (u(y, "mouse"), l(window, "mousemove", f, !1), l(window, "mouseup", p, !1));
        };
        d.onMouseDown = (y) => {
          y.button === 0 && (c(), y.stopPropagation(), y.preventDefault(), a.current.lastPosition = {
            pageX: y.pageX,
            pageY: y.pageY
          }, i(window, "mousemove", f, !1), i(window, "mouseup", p, !1));
        };
        let m = (y) => {
          let $ = [
            ...y.changedTouches
          ].findIndex(({ identifier: R }) => R === a.current.id);
          if ($ >= 0) {
            var x, C;
            let { pageX: R, pageY: g } = y.changedTouches[$];
            var P, B;
            o(y, "touch", R - ((P = (x = a.current.lastPosition) === null || x === void 0 ? void 0 : x.pageX) !== null && P !== void 0 ? P : 0), g - ((B = (C = a.current.lastPosition) === null || C === void 0 ? void 0 : C.pageY) !== null && B !== void 0 ? B : 0)), a.current.lastPosition = {
              pageX: R,
              pageY: g
            };
          }
        }, v = (y) => {
          [
            ...y.changedTouches
          ].findIndex(({ identifier: x }) => x === a.current.id) >= 0 && (u(y, "touch"), a.current.id = null, l(window, "touchmove", m), l(window, "touchend", v), l(window, "touchcancel", v));
        };
        d.onTouchStart = (y) => {
          if (y.changedTouches.length === 0 || a.current.id != null)
            return;
          let { pageX: $, pageY: x, identifier: C } = y.changedTouches[0];
          c(), y.stopPropagation(), y.preventDefault(), a.current.lastPosition = {
            pageX: $,
            pageY: x
          }, a.current.id = C, i(window, "touchmove", m, !1), i(window, "touchend", v, !1), i(window, "touchcancel", v, !1);
        };
      } else {
        let f = (m) => {
          if (m.pointerId === a.current.id) {
            var v, y;
            let C = m.pointerType || "mouse";
            var $, x;
            o(m, C, m.pageX - (($ = (v = a.current.lastPosition) === null || v === void 0 ? void 0 : v.pageX) !== null && $ !== void 0 ? $ : 0), m.pageY - ((x = (y = a.current.lastPosition) === null || y === void 0 ? void 0 : y.pageY) !== null && x !== void 0 ? x : 0)), a.current.lastPosition = {
              pageX: m.pageX,
              pageY: m.pageY
            };
          }
        }, p = (m) => {
          if (m.pointerId === a.current.id) {
            let v = m.pointerType || "mouse";
            u(m, v), a.current.id = null, l(window, "pointermove", f, !1), l(window, "pointerup", p, !1), l(window, "pointercancel", p, !1);
          }
        };
        d.onPointerDown = (m) => {
          m.button === 0 && a.current.id == null && (c(), m.stopPropagation(), m.preventDefault(), a.current.lastPosition = {
            pageX: m.pageX,
            pageY: m.pageY
          }, a.current.id = m.pointerId, i(window, "pointermove", f, !1), i(window, "pointerup", p, !1), i(window, "pointercancel", p, !1));
        };
      }
      let b = (f, p, m) => {
        c(), o(f, "keyboard", p, m), u(f, "keyboard");
      };
      return d.onKeyDown = (f) => {
        switch (f.key) {
          case "Left":
          case "ArrowLeft":
            f.preventDefault(), f.stopPropagation(), b(f, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            f.preventDefault(), f.stopPropagation(), b(f, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            f.preventDefault(), f.stopPropagation(), b(f, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            f.preventDefault(), f.stopPropagation(), b(f, 0, 1);
            break;
        }
      }, d;
    }, [
      a,
      i,
      l,
      o,
      u
    ])
  };
}
function b$(e, t) {
  let { onScroll: n, isDisabled: r } = e, a = ee((i) => {
    i.ctrlKey || (i.preventDefault(), i.stopPropagation(), n && n({
      deltaX: i.deltaX,
      deltaY: i.deltaY
    }));
  }, [
    n
  ]);
  Jt(t, "wheel", r ? void 0 : a);
}
const p$ = 500;
function id(e) {
  let { isDisabled: t, onLongPressStart: n, onLongPressEnd: r, onLongPress: a, threshold: i = p$, accessibilityDescription: l } = e;
  const o = I();
  let { addGlobalListener: u, removeGlobalListener: s } = Zn(), { pressProps: d } = Je({
    isDisabled: t,
    onPressStart(b) {
      if (b.continuePropagation(), (b.pointerType === "mouse" || b.pointerType === "touch") && (n && n({
        ...b,
        type: "longpressstart"
      }), o.current = setTimeout(() => {
        b.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), a && a({
          ...b,
          type: "longpress"
        }), o.current = void 0;
      }, i), b.pointerType === "touch")) {
        let f = (p) => {
          p.preventDefault();
        };
        u(b.target, "contextmenu", f, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            s(b.target, "contextmenu", f);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(b) {
      o.current && clearTimeout(o.current), r && (b.pointerType === "mouse" || b.pointerType === "touch") && r({
        ...b,
        type: "longpressend"
      });
    }
  }), c = kt(a && !t ? l : void 0);
  return {
    longPressProps: j(d, c)
  };
}
function Ce(e) {
  const t = ve(e);
  if (Fa() === "virtual") {
    let n = t.activeElement;
    Zs(() => {
      t.activeElement === n && e.isConnected && yt(e);
    });
  } else
    yt(e);
}
function m$(e) {
  const t = st(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement))
    return !1;
  let { display: n, visibility: r } = e.style, a = n !== "none" && r !== "hidden" && r !== "collapse";
  if (a) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView;
    let { display: l, visibility: o } = i(e);
    a = l !== "none" && o !== "hidden" && o !== "collapse";
  }
  return a;
}
function h$(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function ld(e, t) {
  return e.nodeName !== "#comment" && m$(e) && h$(e, t) && (!e.parentElement || ld(e.parentElement, e));
}
const xu = /* @__PURE__ */ h.createContext(null);
let he = null;
function Vr(e) {
  let { children: t, contain: n, restoreFocus: r, autoFocus: a } = e, i = I(null), l = I(null), o = I([]), { parentNode: u } = U(xu) || {}, s = K(() => new bl({
    scopeRef: o
  }), [
    o
  ]);
  fe(() => {
    let b = u || Fe.root;
    if (Fe.getTreeNode(b.scopeRef) && he && !Ma(he, b.scopeRef)) {
      let f = Fe.getTreeNode(he);
      f && (b = f);
    }
    b.addChild(s), Fe.addNode(s);
  }, [
    s,
    u
  ]), fe(() => {
    let b = Fe.getTreeNode(o);
    b && (b.contain = !!n);
  }, [
    n
  ]), fe(() => {
    var b;
    let f = (b = i.current) === null || b === void 0 ? void 0 : b.nextSibling, p = [];
    for (; f && f !== l.current; )
      p.push(f), f = f.nextSibling;
    o.current = p;
  }, [
    t
  ]), C$(o, r, n), y$(o, n), P$(o, r, n), D$(o, a), J(() => {
    const b = ve(o.current ? o.current[0] : void 0).activeElement;
    let f = null;
    if (je(b, o.current)) {
      for (let p of Fe.traverse())
        p.scopeRef && je(b, p.scopeRef.current) && (f = p);
      f === Fe.getTreeNode(o) && (he = f.scopeRef);
    }
  }, [
    o
  ]), fe(() => () => {
    var b, f, p;
    let m = (p = (f = Fe.getTreeNode(o)) === null || f === void 0 || (b = f.parent) === null || b === void 0 ? void 0 : b.scopeRef) !== null && p !== void 0 ? p : null;
    (o === he || Ma(o, he)) && (!m || Fe.getTreeNode(m)) && (he = m), Fe.removeTreeNode(o);
  }, [
    o
  ]);
  let d = K(() => v$(o), []), c = K(() => ({
    focusManager: d,
    parentNode: s
  }), [
    s,
    d
  ]);
  return /* @__PURE__ */ h.createElement(xu.Provider, {
    value: c
  }, /* @__PURE__ */ h.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: i
  }), t, /* @__PURE__ */ h.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: l
  }));
}
function v$(e) {
  return {
    focusNext(t = {}) {
      let n = e.current, { from: r, tabbable: a, wrap: i, accept: l } = t, o = r || ve(n[0]).activeElement, u = n[0].previousElementSibling, s = fn(n), d = Ne(s, {
        tabbable: a,
        accept: l
      }, n);
      d.currentNode = je(o, n) ? o : u;
      let c = d.nextNode();
      return !c && i && (d.currentNode = u, c = d.nextNode()), c && Ze(c, !0), c;
    },
    focusPrevious(t = {}) {
      let n = e.current, { from: r, tabbable: a, wrap: i, accept: l } = t, o = r || ve(n[0]).activeElement, u = n[n.length - 1].nextElementSibling, s = fn(n), d = Ne(s, {
        tabbable: a,
        accept: l
      }, n);
      d.currentNode = je(o, n) ? o : u;
      let c = d.previousNode();
      return !c && i && (d.currentNode = u, c = d.previousNode()), c && Ze(c, !0), c;
    },
    focusFirst(t = {}) {
      let n = e.current, { tabbable: r, accept: a } = t, i = fn(n), l = Ne(i, {
        tabbable: r,
        accept: a
      }, n);
      l.currentNode = n[0].previousElementSibling;
      let o = l.nextNode();
      return o && Ze(o, !0), o;
    },
    focusLast(t = {}) {
      let n = e.current, { tabbable: r, accept: a } = t, i = fn(n), l = Ne(i, {
        tabbable: r,
        accept: a
      }, n);
      l.currentNode = n[n.length - 1].nextElementSibling;
      let o = l.previousNode();
      return o && Ze(o, !0), o;
    }
  };
}
const no = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
], g$ = no.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
no.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $$ = no.join(':not([hidden]):not([tabindex="-1"]),');
function fn(e) {
  return e[0].parentElement;
}
function cr(e) {
  let t = Fe.getTreeNode(he);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain)
      return !1;
    t = t.parent;
  }
  return !0;
}
function y$(e, t) {
  let n = I(), r = I();
  fe(() => {
    let a = e.current;
    if (!t) {
      r.current && (cancelAnimationFrame(r.current), r.current = void 0);
      return;
    }
    const i = ve(a ? a[0] : void 0);
    let l = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !cr(e))
        return;
      let d = i.activeElement, c = e.current;
      if (!c || !je(d, c))
        return;
      let b = fn(c), f = Ne(b, {
        tabbable: !0
      }, c);
      if (!d)
        return;
      f.currentNode = d;
      let p = s.shiftKey ? f.previousNode() : f.nextNode();
      p || (f.currentNode = s.shiftKey ? c[c.length - 1].nextElementSibling : c[0].previousElementSibling, p = s.shiftKey ? f.previousNode() : f.nextNode()), s.preventDefault(), p && Ze(p, !0);
    }, o = (s) => {
      (!he || Ma(he, e)) && je(s.target, e.current) ? (he = e, n.current = s.target) : cr(e) && !Ta(s.target, e) ? n.current ? n.current.focus() : he && he.current && Ra(he.current) : cr(e) && (n.current = s.target);
    }, u = (s) => {
      r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
        if (i.activeElement && cr(e) && !Ta(i.activeElement, e))
          if (he = e, i.body.contains(s.target)) {
            var d;
            n.current = s.target, (d = n.current) === null || d === void 0 || d.focus();
          } else
            he.current && Ra(he.current);
      });
    };
    return i.addEventListener("keydown", l, !1), i.addEventListener("focusin", o, !1), a == null || a.forEach((s) => s.addEventListener("focusin", o, !1)), a == null || a.forEach((s) => s.addEventListener("focusout", u, !1)), () => {
      i.removeEventListener("keydown", l, !1), i.removeEventListener("focusin", o, !1), a == null || a.forEach((s) => s.removeEventListener("focusin", o, !1)), a == null || a.forEach((s) => s.removeEventListener("focusout", u, !1));
    };
  }, [
    e,
    t
  ]), fe(() => () => {
    r.current && cancelAnimationFrame(r.current);
  }, [
    r
  ]);
}
function od(e) {
  return Ta(e);
}
function je(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
function Ta(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
    return !0;
  for (let { scopeRef: n } of Fe.traverse(Fe.getTreeNode(t)))
    if (n && je(e, n.current))
      return !0;
  return !1;
}
function x$(e) {
  return Ta(e, he);
}
function Ma(e, t) {
  var n;
  let r = (n = Fe.getTreeNode(t)) === null || n === void 0 ? void 0 : n.parent;
  for (; r; ) {
    if (r.scopeRef === e)
      return !0;
    r = r.parent;
  }
  return !1;
}
function Ze(e, t = !1) {
  if (e != null && !t)
    try {
      Ce(e);
    } catch {
    }
  else if (e != null)
    try {
      e.focus();
    } catch {
    }
}
function Ra(e, t = !0) {
  let n = e[0].previousElementSibling, r = fn(e), a = Ne(r, {
    tabbable: t
  }, e);
  a.currentNode = n;
  let i = a.nextNode();
  t && !i && (r = fn(e), a = Ne(r, {
    tabbable: !1
  }, e), a.currentNode = n, i = a.nextNode()), Ze(i);
}
function D$(e, t) {
  const n = h.useRef(t);
  J(() => {
    if (n.current) {
      he = e;
      const r = ve(e.current ? e.current[0] : void 0);
      !je(r.activeElement, he.current) && e.current && Ra(e.current);
    }
    n.current = !1;
  }, [
    e
  ]);
}
function C$(e, t, n) {
  fe(() => {
    if (t || n)
      return;
    let r = e.current;
    const a = ve(r ? r[0] : void 0);
    let i = (l) => {
      let o = l.target;
      je(o, e.current) ? he = e : od(o) || (he = null);
    };
    return a.addEventListener("focusin", i, !1), r == null || r.forEach((l) => l.addEventListener("focusin", i, !1)), () => {
      a.removeEventListener("focusin", i, !1), r == null || r.forEach((l) => l.removeEventListener("focusin", i, !1));
    };
  }, [
    e,
    t,
    n
  ]);
}
function E$(e) {
  let t = Fe.getTreeNode(he);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore)
      return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function P$(e, t, n) {
  const r = I(typeof document < "u" ? ve(e.current ? e.current[0] : void 0).activeElement : null);
  fe(() => {
    let a = e.current;
    const i = ve(a ? a[0] : void 0);
    if (!t || n)
      return;
    let l = () => {
      (!he || Ma(he, e)) && je(i.activeElement, e.current) && (he = e);
    };
    return i.addEventListener("focusin", l, !1), a == null || a.forEach((o) => o.addEventListener("focusin", l, !1)), () => {
      i.removeEventListener("focusin", l, !1), a == null || a.forEach((o) => o.removeEventListener("focusin", l, !1));
    };
  }, [
    e,
    n
  ]), fe(() => {
    const a = ve(e.current ? e.current[0] : void 0);
    if (!t)
      return;
    let i = (l) => {
      if (l.key !== "Tab" || l.altKey || l.ctrlKey || l.metaKey || !cr(e))
        return;
      let o = a.activeElement;
      if (!je(o, e.current))
        return;
      let u = Fe.getTreeNode(e);
      if (!u)
        return;
      let s = u.nodeToRestore, d = Ne(a.body, {
        tabbable: !0
      });
      d.currentNode = o;
      let c = l.shiftKey ? d.previousNode() : d.nextNode();
      if ((!s || !a.body.contains(s) || s === a.body) && (s = void 0, u.nodeToRestore = void 0), (!c || !je(c, e.current)) && s) {
        d.currentNode = s;
        do
          c = l.shiftKey ? d.previousNode() : d.nextNode();
        while (je(c, e.current));
        l.preventDefault(), l.stopPropagation(), c ? Ze(c, !0) : od(s) ? Ze(s, !0) : o.blur();
      }
    };
    return n || a.addEventListener("keydown", i, !0), () => {
      n || a.removeEventListener("keydown", i, !0);
    };
  }, [
    e,
    t,
    n
  ]), fe(() => {
    const a = ve(e.current ? e.current[0] : void 0);
    if (!t)
      return;
    let i = Fe.getTreeNode(e);
    if (i) {
      var l;
      return i.nodeToRestore = (l = r.current) !== null && l !== void 0 ? l : void 0, () => {
        let o = Fe.getTreeNode(e);
        if (!o)
          return;
        let u = o.nodeToRestore;
        if (t && u && // eslint-disable-next-line react-hooks/exhaustive-deps
        (je(a.activeElement, e.current) || a.activeElement === a.body && E$(e))) {
          let s = Fe.clone();
          requestAnimationFrame(() => {
            if (a.activeElement === a.body) {
              let d = s.getTreeNode(e);
              for (; d; ) {
                if (d.nodeToRestore && d.nodeToRestore.isConnected) {
                  Ze(d.nodeToRestore);
                  return;
                }
                d = d.parent;
              }
              for (d = s.getTreeNode(e); d; ) {
                if (d.scopeRef && d.scopeRef.current && Fe.getTreeNode(d.scopeRef)) {
                  Ra(d.scopeRef.current, !0);
                  return;
                }
                d = d.parent;
              }
            }
          });
        }
      };
    }
  }, [
    e,
    t
  ]);
}
function Ne(e, t, n) {
  let r = t != null && t.tabbable ? $$ : g$, a = ve(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var l;
      return !(t == null || (l = t.from) === null || l === void 0) && l.contains(i) ? NodeFilter.FILTER_REJECT : i.matches(r) && ld(i) && (!n || je(i, n)) && (!(t != null && t.accept) || t.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (a.currentNode = t.from), a;
}
function Lr(e, t = {}) {
  return {
    focusNext(n = {}) {
      let r = e.current;
      if (!r)
        return null;
      let { from: a, tabbable: i = t.tabbable, wrap: l = t.wrap, accept: o = t.accept } = n, u = a || ve(r).activeElement, s = Ne(r, {
        tabbable: i,
        accept: o
      });
      r.contains(u) && (s.currentNode = u);
      let d = s.nextNode();
      return !d && l && (s.currentNode = r, d = s.nextNode()), d && Ze(d, !0), d;
    },
    focusPrevious(n = t) {
      let r = e.current;
      if (!r)
        return null;
      let { from: a, tabbable: i = t.tabbable, wrap: l = t.wrap, accept: o = t.accept } = n, u = a || ve(r).activeElement, s = Ne(r, {
        tabbable: i,
        accept: o
      });
      if (r.contains(u))
        s.currentNode = u;
      else {
        let c = Ki(s);
        return c && Ze(c, !0), c ?? null;
      }
      let d = s.previousNode();
      if (!d && l) {
        s.currentNode = r;
        let c = Ki(s);
        if (!c)
          return null;
        d = c;
      }
      return d && Ze(d, !0), d ?? null;
    },
    focusFirst(n = t) {
      let r = e.current;
      if (!r)
        return null;
      let { tabbable: a = t.tabbable, accept: i = t.accept } = n, o = Ne(r, {
        tabbable: a,
        accept: i
      }).nextNode();
      return o && Ze(o, !0), o;
    },
    focusLast(n = t) {
      let r = e.current;
      if (!r)
        return null;
      let { tabbable: a = t.tabbable, accept: i = t.accept } = n, l = Ne(r, {
        tabbable: a,
        accept: i
      }), o = Ki(l);
      return o && Ze(o, !0), o ?? null;
    }
  };
}
function Ki(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
class ro {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, n, r) {
    let a = this.fastMap.get(n ?? null);
    if (!a)
      return;
    let i = new bl({
      scopeRef: t
    });
    a.addChild(i), i.parent = a, this.fastMap.set(t, i), r && (i.nodeToRestore = r);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null)
      return;
    let n = this.fastMap.get(t);
    if (!n)
      return;
    let r = n.parent;
    for (let i of this.traverse())
      i !== n && n.nodeToRestore && i.nodeToRestore && n.scopeRef && n.scopeRef.current && je(i.nodeToRestore, n.scopeRef.current) && (i.nodeToRestore = n.nodeToRestore);
    let a = n.children;
    r && (r.removeChild(n), a.size > 0 && a.forEach((i) => r && r.addChild(i))), this.fastMap.delete(n.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0)
      for (let n of t.children)
        yield* this.traverse(n);
  }
  clone() {
    var t;
    let n = new ro();
    var r;
    for (let a of this.traverse())
      n.addTreeNode(a.scopeRef, (r = (t = a.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && r !== void 0 ? r : null, a.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new bl({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class bl {
  addChild(t) {
    this.children.add(t), t.parent = this;
  }
  removeChild(t) {
    this.children.delete(t), t.parent = void 0;
  }
  constructor(t) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = t.scopeRef;
  }
}
let Fe = new ro();
function pe(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, a = I({
    isFocused: !1,
    isFocusVisible: t || gn()
  }), [i, l] = Z(!1), [o, u] = Z(() => a.current.isFocused && a.current.isFocusVisible), s = ee(() => u(a.current.isFocused && a.current.isFocusVisible), []), d = ee((f) => {
    a.current.isFocused = f, l(f), s();
  }, [
    s
  ]);
  c$((f) => {
    a.current.isFocusVisible = f, s();
  }, [], {
    isTextInput: n
  });
  let { focusProps: c } = Xa({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: b } = ft({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: i,
    isFocusVisible: o,
    focusProps: r ? b : c
  };
}
let w$ = /* @__PURE__ */ h.createContext(null);
function S$(e) {
  let t = U(w$) || {};
  qs(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function Dn(e, t) {
  let { focusProps: n } = Xa(e), { keyboardProps: r } = ei(e), a = j(n, r), i = S$(t), l = e.isDisabled ? {} : i, o = I(e.autoFocus);
  return J(() => {
    o.current && t.current && Ce(t.current), o.current = !1;
  }, [
    t
  ]), {
    focusableProps: j({
      ...a,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, l)
  };
}
function ao(e, t) {
  let n = t == null ? void 0 : t.isDisabled, [r, a] = Z(!1);
  return fe(() => {
    if (e != null && e.current && !n) {
      let i = () => {
        if (e.current) {
          let o = Ne(e.current, {
            tabbable: !0
          });
          a(!!o.nextNode());
        }
      };
      i();
      let l = new MutationObserver(i);
      return l.observe(e.current, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      }), () => {
        l.disconnect();
      };
    }
  }), n ? !1 : r;
}
function B$(e, t) {
  let {
    elementType: n = "a",
    onPress: r,
    onPressStart: a,
    onPressEnd: i,
    // @ts-ignore
    onClick: l,
    isDisabled: o,
    ...u
  } = e, s = {};
  n !== "a" && (s = {
    role: "link",
    tabIndex: o ? void 0 : 0
  });
  let { focusableProps: d } = Dn(e, t), { pressProps: c, isPressed: b } = Je({
    onPress: r,
    onPressStart: a,
    onPressEnd: i,
    isDisabled: o,
    ref: t
  }), f = Y(u, {
    labelable: !0,
    isLink: n === "a"
  }), p = j(d, c), m = Nr();
  return {
    isPressed: b,
    linkProps: j(f, {
      ...p,
      ...s,
      "aria-disabled": o || void 0,
      "aria-current": e["aria-current"],
      onClick: (v) => {
        var y;
        (y = c.onClick) === null || y === void 0 || y.call(c, v), l && (l(v), console.warn("onClick is deprecated, please use onPress")), !m.isNative && v.currentTarget instanceof HTMLAnchorElement && v.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !v.isDefaultPrevented() && Wg(v.currentTarget, v) && (v.preventDefault(), m.open(v.currentTarget, v));
      }
    })
  };
}
const k$ = Symbol.for("react-aria.i18n.locale"), F$ = Symbol.for("react-aria.i18n.strings");
let Fn;
class Cn {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, n) {
    let a = this.getStringsForLocale(n)[t];
    if (!a)
      throw new Error(`Could not find intl message ${t} in ${n} locale`);
    return a;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let n = this.strings[t];
    return n || (n = A$(t, this.strings, this.defaultLocale), this.strings[t] = n), n;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u")
      return null;
    let n = window[k$];
    if (Fn === void 0) {
      let a = window[F$];
      if (!a)
        return null;
      Fn = {};
      for (let i in a)
        Fn[i] = new Cn({
          [n]: a[i]
        }, n);
    }
    let r = Fn == null ? void 0 : Fn[t];
    if (!r)
      throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return r;
  }
  constructor(t, n = "en-US") {
    this.strings = {
      ...t
    }, this.defaultLocale = n;
  }
}
function A$(e, t, n = "en-US") {
  if (t[e])
    return t[e];
  let r = T$(e);
  if (t[r])
    return t[r];
  for (let a in t)
    if (a.startsWith(r + "-"))
      return t[a];
  return t[n];
}
function T$(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const Du = /* @__PURE__ */ new Map(), Cu = /* @__PURE__ */ new Map();
class ud {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, n) {
    let r = this.strings.getStringForLocale(t, this.locale);
    return typeof r == "function" ? r(n, this) : r;
  }
  plural(t, n, r = "cardinal") {
    let a = n["=" + t];
    if (a)
      return typeof a == "function" ? a() : a;
    let i = this.locale + ":" + r, l = Du.get(i);
    l || (l = new Intl.PluralRules(this.locale, {
      type: r
    }), Du.set(i, l));
    let o = l.select(t);
    return a = n[o] || n.other, typeof a == "function" ? a() : a;
  }
  number(t) {
    let n = Cu.get(this.locale);
    return n || (n = new Intl.NumberFormat(this.locale), Cu.set(this.locale, n)), n.format(t);
  }
  select(t, n) {
    let r = t[n] || t.other;
    return typeof r == "function" ? r() : r;
  }
  constructor(t, n) {
    this.locale = t, this.strings = n;
  }
}
function zt(e, t) {
  return e - t * Math.floor(e / t);
}
const sd = 1721426;
function bn(e, t, n, r) {
  t = Or(e, t);
  let a = t - 1, i = -2;
  return n <= 2 ? i = 0 : Xt(t) && (i = -1), sd - 1 + 365 * a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor((367 * n - 362) / 12 + i + r);
}
function Xt(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Or(e, t) {
  return e === "BC" ? 1 - t : t;
}
function ti(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const M$ = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
class Ue {
  fromJulianDay(t) {
    let n = t, r = n - sd, a = Math.floor(r / 146097), i = zt(r, 146097), l = Math.floor(i / 36524), o = zt(i, 36524), u = Math.floor(o / 1461), s = zt(o, 1461), d = Math.floor(s / 365), c = a * 400 + l * 100 + u * 4 + d + (l !== 4 && d !== 4 ? 1 : 0), [b, f] = ti(c), p = n - bn(b, f, 1, 1), m = 2;
    n < bn(b, f, 3, 1) ? m = 0 : Xt(f) && (m = 1);
    let v = Math.floor(((p + m) * 12 + 373) / 367), y = n - bn(b, f, v, 1) + 1;
    return new Te(b, f, v, y);
  }
  toJulianDay(t) {
    return bn(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return M$[Xt(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return Xt(t.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(t) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(t) {
    return t.era === "BC";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BC" ? "AD" : "BC", t.year = 1 - t.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
const R$ = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};
function Ae(e, t) {
  return t = Ee(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function I$(e, t) {
  return t = Ee(t, e.calendar), e = $n(e), t = $n(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function pl(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function N$(e, t) {
  return Ae(e, ni(t));
}
function io(e, t) {
  let n = e.calendar.toJulianDay(e), r = Math.ceil(n + 1 - j$(t)) % 7;
  return r < 0 && (r += 7), r;
}
function dd(e) {
  return Nt(Date.now(), e);
}
function ni(e) {
  return _e(dd(e));
}
function cd(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function fd(e, t) {
  return Eu(e) - Eu(t);
}
function Eu(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let zi = null;
function lo() {
  return zi == null && (zi = new Intl.DateTimeFormat().resolvedOptions().timeZone), zi;
}
function $n(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Ia(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
function K$(e) {
  return $n(e.subtract({
    months: e.month - 1
  }));
}
function z$(e) {
  return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function V$(e) {
  return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function yr(e, t) {
  let n = io(e, t);
  return e.subtract({
    days: n
  });
}
function L$(e, t) {
  return yr(e, t).add({
    days: 6
  });
}
const Pu = /* @__PURE__ */ new Map();
function O$(e) {
  if (Intl.Locale) {
    let n = Pu.get(e);
    return n || (n = new Intl.Locale(e).maximize().region, n && Pu.set(e, n)), n;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function j$(e) {
  let t = O$(e);
  return t && R$[t] || 0;
}
function H$(e, t) {
  let n = e.calendar.getDaysInMonth(e);
  return Math.ceil((io($n(e), t) + n) / 7);
}
function oo(e, t) {
  return e && t ? e.compare(t) <= 0 ? e : t : e || t;
}
function uo(e, t) {
  return e && t ? e.compare(t) >= 0 ? e : t : e || t;
}
function Un(e) {
  e = Ee(e, new Ue());
  let t = Or(e.era, e.year);
  return bd(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function bd(e, t, n, r, a, i, l) {
  let o = /* @__PURE__ */ new Date();
  return o.setUTCHours(r, a, i, l), o.setUTCFullYear(e, t - 1, n), o.getTime();
}
function ml(e, t) {
  if (t === "UTC")
    return 0;
  if (e > 0 && t === lo())
    return new Date(e).getTimezoneOffset() * -6e4;
  let { year: n, month: r, day: a, hour: i, minute: l, second: o } = pd(e, t);
  return bd(n, r, a, i, l, o, 0) - Math.floor(e / 1e3) * 1e3;
}
const wu = /* @__PURE__ */ new Map();
function pd(e, t) {
  let n = wu.get(t);
  n || (n = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), wu.set(t, n));
  let r = n.formatToParts(new Date(e)), a = {};
  for (let i of r)
    i.type !== "literal" && (a[i.type] = i.value);
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: a.era === "BC" || a.era === "B" ? -a.year + 1 : +a.year,
    month: +a.month,
    day: +a.day,
    hour: a.hour === "24" ? 0 : +a.hour,
    minute: +a.minute,
    second: +a.second
  };
}
const Su = 864e5;
function _$(e, t, n, r) {
  return (n === r ? [
    n
  ] : [
    n,
    r
  ]).filter((i) => U$(e, t, i));
}
function U$(e, t, n) {
  let r = pd(n, t);
  return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function Rt(e, t, n = "compatible") {
  let r = xt(e);
  if (t === "UTC")
    return Un(r);
  if (t === lo() && n === "compatible") {
    r = Ee(r, new Ue());
    let u = /* @__PURE__ */ new Date(), s = Or(r.era, r.year);
    return u.setFullYear(s, r.month - 1, r.day), u.setHours(r.hour, r.minute, r.second, r.millisecond), u.getTime();
  }
  let a = Un(r), i = ml(a - Su, t), l = ml(a + Su, t), o = _$(r, t, a - i, a - l);
  if (o.length === 1)
    return o[0];
  if (o.length > 1)
    switch (n) {
      case "compatible":
      case "earlier":
        return o[0];
      case "later":
        return o[o.length - 1];
      case "reject":
        throw new RangeError("Multiple possible absolute times found");
    }
  switch (n) {
    case "earlier":
      return Math.min(a - i, a - l);
    case "compatible":
    case "later":
      return Math.max(a - i, a - l);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function md(e, t, n = "compatible") {
  return new Date(Rt(e, t, n));
}
function Nt(e, t) {
  let n = ml(e, t), r = new Date(e + n), a = r.getUTCFullYear(), i = r.getUTCMonth() + 1, l = r.getUTCDate(), o = r.getUTCHours(), u = r.getUTCMinutes(), s = r.getUTCSeconds(), d = r.getUTCMilliseconds();
  return new Dr(a, i, l, t, n, o, u, s, d);
}
function _e(e) {
  return new Te(e.calendar, e.era, e.year, e.month, e.day);
}
function xt(e, t) {
  let n = 0, r = 0, a = 0, i = 0;
  if ("timeZone" in e)
    ({ hour: n, minute: r, second: a, millisecond: i } = e);
  else if ("hour" in e && !t)
    return e;
  return t && ({ hour: n, minute: r, second: a, millisecond: i } = t), new Na(e.calendar, e.era, e.year, e.month, e.day, n, r, a, i);
}
function Bu(e) {
  return new jr(e.hour, e.minute, e.second, e.millisecond);
}
function Ee(e, t) {
  if (e.calendar.identifier === t.identifier)
    return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
  return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, yn(r), r;
}
function hd(e, t, n) {
  if (e instanceof Dr)
    return e.timeZone === t ? e : G$(e, t);
  let r = Rt(e, t, n);
  return Nt(r, t);
}
function W$(e) {
  let t = Un(e) - e.offset;
  return new Date(t);
}
function G$(e, t) {
  let n = Un(e) - e.offset;
  return Ee(Nt(n, t), e.calendar);
}
const tr = 36e5;
function ri(e, t) {
  let n = e.copy(), r = "hour" in n ? yd(n, t) : 0;
  hl(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, vl(n), vd(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, Z$(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
  let a = n.calendar.getYearsInEra(n);
  if (n.year > a) {
    var i, l;
    let u = (i = (l = n.calendar).isInverseEra) === null || i === void 0 ? void 0 : i.call(l, n);
    n.year = a, n.month = u ? 1 : n.calendar.getMonthsInYear(n), n.day = u ? 1 : n.calendar.getDaysInMonth(n);
  }
  n.month < 1 && (n.month = 1, n.day = 1);
  let o = n.calendar.getMonthsInYear(n);
  return n.month > o && (n.month = o, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function hl(e, t) {
  var n, r;
  !((n = (r = e.calendar).isInverseEra) === null || n === void 0) && n.call(r, e) && (t = -t), e.year += t;
}
function vl(e) {
  for (; e.month < 1; )
    hl(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, hl(e, 1);
}
function Z$(e) {
  for (; e.day < 1; )
    e.month--, vl(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, vl(e);
}
function vd(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function yn(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), vd(e);
}
function so(e) {
  let t = {};
  for (let n in e)
    typeof e[n] == "number" && (t[n] = -e[n]);
  return t;
}
function gd(e, t) {
  return ri(e, so(t));
}
function co(e, t) {
  let n = e.copy();
  return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), yn(n), n;
}
function xr(e, t) {
  let n = e.copy();
  return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), $d(n), n;
}
function q$(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = sa(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = sa(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = sa(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = sa(e.hour, 24), t;
}
function $d(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function sa(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n;
}
function yd(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, q$(e);
}
function xd(e, t) {
  let n = e.copy();
  return yd(n, t), n;
}
function Y$(e, t) {
  return xd(e, so(t));
}
function fo(e, t, n, r) {
  let a = e.copy();
  switch (t) {
    case "era": {
      let o = e.calendar.getEras(), u = o.indexOf(e.era);
      if (u < 0)
        throw new Error("Invalid era: " + e.era);
      u = Kt(u, n, 0, o.length - 1, r == null ? void 0 : r.round), a.era = o[u], yn(a);
      break;
    }
    case "year":
      var i, l;
      !((i = (l = a.calendar).isInverseEra) === null || i === void 0) && i.call(l, a) && (n = -n), a.year = Kt(e.year, n, -1 / 0, 9999, r == null ? void 0 : r.round), a.year === -1 / 0 && (a.year = 1), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
      break;
    case "month":
      a.month = Kt(e.month, n, 1, e.calendar.getMonthsInYear(e), r == null ? void 0 : r.round);
      break;
    case "day":
      a.day = Kt(e.day, n, 1, e.calendar.getDaysInMonth(e), r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(a), yn(a), a;
}
function bo(e, t, n, r) {
  let a = e.copy();
  switch (t) {
    case "hour": {
      let i = e.hour, l = 0, o = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let u = i >= 12;
        l = u ? 12 : 0, o = u ? 23 : 11;
      }
      a.hour = Kt(i, n, l, o, r == null ? void 0 : r.round);
      break;
    }
    case "minute":
      a.minute = Kt(e.minute, n, 0, 59, r == null ? void 0 : r.round);
      break;
    case "second":
      a.second = Kt(e.second, n, 0, 59, r == null ? void 0 : r.round);
      break;
    case "millisecond":
      a.millisecond = Kt(e.millisecond, n, 0, 999, r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return a;
}
function Kt(e, t, n, r, a = !1) {
  if (a) {
    e += Math.sign(t), e < n && (e = r);
    let i = Math.abs(t);
    t > 0 ? e = Math.ceil(e / i) * i : e = Math.floor(e / i) * i, e > r && (e = n);
  } else
    e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
  return e;
}
function Dd(e, t) {
  let n;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let a = ri(xt(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    n = Rt(a, e.timeZone);
  } else
    n = Un(e) - e.offset;
  n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5;
  let r = Nt(n, e.timeZone);
  return Ee(r, e.calendar);
}
function J$(e, t) {
  return Dd(e, so(t));
}
function X$(e, t, n, r) {
  switch (t) {
    case "hour": {
      let a = 0, i = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let p = e.hour >= 12;
        a = p ? 12 : 0, i = p ? 23 : 11;
      }
      let l = xt(e), o = Ee(xr(l, {
        hour: a
      }), new Ue()), u = [
        Rt(o, e.timeZone, "earlier"),
        Rt(o, e.timeZone, "later")
      ].filter((p) => Nt(p, e.timeZone).day === o.day)[0], s = Ee(xr(l, {
        hour: i
      }), new Ue()), d = [
        Rt(s, e.timeZone, "earlier"),
        Rt(s, e.timeZone, "later")
      ].filter((p) => Nt(p, e.timeZone).day === s.day).pop(), c = Un(e) - e.offset, b = Math.floor(c / tr), f = c % tr;
      return c = Kt(b, n, Math.floor(u / tr), Math.floor(d / tr), r == null ? void 0 : r.round) * tr + f, Ee(Nt(c, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return bo(e, t, n, r);
    case "era":
    case "year":
    case "month":
    case "day": {
      let a = fo(xt(e), t, n, r), i = Rt(a, e.timeZone);
      return Ee(Nt(i, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function Q$(e, t, n) {
  let r = xt(e), a = xr(co(r, t), t);
  if (a.compare(r) === 0)
    return e;
  let i = Rt(a, e.timeZone, n);
  return Ee(Nt(i, e.timeZone), e.calendar);
}
function Cd(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Ed(e) {
  let t = Ee(e, new Ue());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function Pd(e) {
  return `${Ed(e)}T${Cd(e)}`;
}
function e1(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let n = Math.floor(e / 36e5), r = e % 36e5 / 6e4;
  return `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function t1(e) {
  return `${Pd(e)}${e1(e.offset)}[${e.timeZone}]`;
}
function po(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Ue(), n;
  if (typeof e[0] == "string")
    n = e.shift();
  else {
    let l = t.getEras();
    n = l[l.length - 1];
  }
  let r = e.shift(), a = e.shift(), i = e.shift();
  return [
    t,
    n,
    r,
    a,
    i
  ];
}
var n1 = /* @__PURE__ */ new WeakMap();
class Te {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Te(this.calendar, this.era, this.year, this.month, this.day) : new Te(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return ri(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return gd(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return co(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return fo(this, t, n, r);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return md(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Ed(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return cd(this, t);
  }
  constructor(...t) {
    Ir(this, n1, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, i, l] = po(t);
    this.calendar = n, this.era = r, this.year = a, this.month = i, this.day = l, yn(this);
  }
}
var r1 = /* @__PURE__ */ new WeakMap();
class jr {
  /** Returns a copy of this time. */
  copy() {
    return new jr(this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `Time` with the given duration added to it. */
  add(t) {
    return xd(this, t);
  }
  /** Returns a new `Time` with the given duration subtracted from it. */
  subtract(t) {
    return Y$(this, t);
  }
  /** Returns a new `Time` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return xr(this, t);
  }
  /**
  * Returns a new `Time` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return bo(this, t, n, r);
  }
  /** Converts the time to an ISO 8601 formatted string. */
  toString() {
    return Cd(this);
  }
  /** Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. */
  compare(t) {
    return fd(this, t);
  }
  constructor(t = 0, n = 0, r = 0, a = 0) {
    Ir(this, r1, {
      writable: !0,
      value: void 0
    }), this.hour = t, this.minute = n, this.second = r, this.millisecond = a, $d(this);
  }
}
var a1 = /* @__PURE__ */ new WeakMap();
class Na {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Na(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Na(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return ri(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return gd(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return co(xr(this, t), t);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    switch (t) {
      case "era":
      case "year":
      case "month":
      case "day":
        return fo(this, t, n, r);
      default:
        return bo(this, t, n, r);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, n) {
    return md(this, t, n);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Pd(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let n = cd(this, t);
    return n === 0 ? fd(this, xt(t)) : n;
  }
  constructor(...t) {
    Ir(this, a1, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, i, l] = po(t);
    this.calendar = n, this.era = r, this.year = a, this.month = i, this.day = l, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, yn(this);
  }
}
var i1 = /* @__PURE__ */ new WeakMap();
class Dr {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Dr(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Dr(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return Dd(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return J$(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, n) {
    return Q$(this, t, n);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return X$(this, t, n, r);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return W$(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return t1(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - hd(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Ir(this, i1, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, i, l] = po(t), o = t.shift(), u = t.shift();
    this.calendar = n, this.era = r, this.year = a, this.month = i, this.day = l, this.timeZone = o, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, yn(this);
  }
}
const On = [
  [
    1868,
    9,
    8
  ],
  [
    1912,
    7,
    30
  ],
  [
    1926,
    12,
    25
  ],
  [
    1989,
    1,
    8
  ],
  [
    2019,
    5,
    1
  ]
], l1 = [
  [
    1912,
    7,
    29
  ],
  [
    1926,
    12,
    24
  ],
  [
    1989,
    1,
    7
  ],
  [
    2019,
    4,
    30
  ]
], ya = [
  1867,
  1911,
  1925,
  1988,
  2018
], Zt = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function ku(e) {
  const t = On.findIndex(([n, r, a]) => e.year < n || e.year === n && e.month < r || e.year === n && e.month === r && e.day < a);
  return t === -1 ? On.length - 1 : t === 0 ? 0 : t - 1;
}
function Vi(e) {
  let t = ya[Zt.indexOf(e.era)];
  if (!t)
    throw new Error("Unknown era: " + e.era);
  return new Te(e.year + t, e.month, e.day);
}
class o1 extends Ue {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = ku(n);
    return new Te(this, Zt[r], n.year - ya[r], n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Vi(t));
  }
  balanceDate(t) {
    let n = Vi(t), r = ku(n);
    Zt[r] !== t.era && (t.era = Zt[r], t.year = n.year - ya[r]), this.constrainDate(t);
  }
  constrainDate(t) {
    let n = Zt.indexOf(t.era), r = l1[n];
    if (r != null) {
      let [a, i, l] = r, o = a - ya[n];
      t.year = Math.max(1, Math.min(o, t.year)), t.year === o && (t.month = Math.min(i, t.month), t.month === i && (t.day = Math.min(l, t.day)));
    }
    if (t.year === 1 && n >= 0) {
      let [, a, i] = On[n];
      t.month = Math.max(a, t.month), t.month === a && (t.day = Math.max(i, t.day));
    }
  }
  getEras() {
    return Zt;
  }
  getYearsInEra(t) {
    let n = Zt.indexOf(t.era), r = On[n], a = On[n + 1];
    if (a == null)
      return 9999 - r[0] + 1;
    let i = a[0] - r[0];
    return (t.month < a[1] || t.month === a[1] && t.day < a[2]) && i++, i;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Vi(t));
  }
  getMinimumMonthInYear(t) {
    let n = Fu(t);
    return n ? n[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let n = Fu(t);
    return n && t.month === n[1] ? n[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function Fu(e) {
  if (e.year === 1) {
    let t = Zt.indexOf(e.era);
    return On[t];
  }
}
const wd = -543;
class u1 extends Ue {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = Or(n.era, n.year);
    return new Te(this, r - wd, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Au(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Au(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Au(e) {
  let [t, n] = ti(e.year + wd);
  return new Te(t, n, e.month, e.day);
}
const Ka = 1911;
function Sd(e) {
  return e.era === "minguo" ? e.year + Ka : 1 - e.year + Ka;
}
function Tu(e) {
  let t = e - Ka;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class s1 extends Ue {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = Or(n.era, n.year), [a, i] = Tu(r);
    return new Te(this, a, i, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Mu(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [n, r] = Tu(Sd(t));
    t.era = n, t.year = r;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Mu(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - Ka;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function Mu(e) {
  let [t, n] = ti(Sd(e));
  return new Te(t, n, e.month, e.day);
}
const d1 = 1948321;
function c1(e) {
  let t = e > 0 ? e - 474 : e - 473, n = zt(t, 2820) + 474;
  return zt((n + 38) * 31, 128) < 31;
}
function da(e, t, n) {
  let r = e > 0 ? e - 474 : e - 473, a = zt(r, 2820) + 474, i = t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6;
  return d1 - 1 + 1029983 * Math.floor(r / 2820) + 365 * (a - 1) + Math.floor((31 * a - 5) / 128) + i + n;
}
class f1 {
  fromJulianDay(t) {
    let n = t - da(475, 1, 1), r = Math.floor(n / 1029983), a = zt(n, 1029983), i = a === 1029982 ? 2820 : Math.floor((128 * a + 46878) / 46751), l = 474 + 2820 * r + i;
    l <= 0 && l--;
    let o = t - da(l, 1, 1) + 1, u = o <= 186 ? Math.ceil(o / 31) : Math.ceil((o - 6) / 31), s = t - da(l, u, 1) + 1;
    return new Te(this, l, u, s);
  }
  toJulianDay(t) {
    return da(t.year, t.month, t.day);
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || c1(t.year) ? 30 : 29;
  }
  getEras() {
    return [
      "AP"
    ];
  }
  getYearsInEra() {
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
}
const Li = 78, Ru = 80;
class b1 extends Ue {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = n.year - Li, a = t - bn(n.era, n.year, 1, 1), i;
    a < Ru ? (r--, i = Xt(n.year - 1) ? 31 : 30, a += i + 155 + 90 + 10) : (i = Xt(n.year) ? 31 : 30, a -= Ru);
    let l, o;
    if (a < i)
      l = 1, o = a + 1;
    else {
      let u = a - i;
      u < 155 ? (l = Math.floor(u / 31) + 2, o = u % 31 + 1) : (u -= 155, l = Math.floor(u / 30) + 7, o = u % 30 + 1);
    }
    return new Te(this, r, l, o);
  }
  toJulianDay(t) {
    let n = t.year + Li, [r, a] = ti(n), i, l;
    return Xt(a) ? (i = 31, l = bn(r, a, 3, 21)) : (i = 30, l = bn(r, a, 3, 22)), t.month === 1 ? l + t.day - 1 : (l += i + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (l += (t.month - 7) * 30), l += t.day - 1, l);
  }
  getDaysInMonth(t) {
    return t.month === 1 && Xt(t.year + Li) || t.month >= 2 && t.month <= 6 ? 31 : 30;
  }
  getYearsInEra() {
    return 9919;
  }
  getEras() {
    return [
      "saka"
    ];
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "indian";
  }
}
const za = 1948440, Iu = 1948439, ot = 1300, An = 1600, p1 = 460322;
function Va(e, t, n, r) {
  return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Bd(e, t, n) {
  let r = Math.floor((30 * (n - t) + 10646) / 10631), a = Math.min(12, Math.ceil((n - (29 + Va(t, r, 1, 1))) / 29.5) + 1), i = n - Va(t, r, a, 1) + 1;
  return new Te(e, r, a, i);
}
function Nu(e) {
  return (14 + 11 * e) % 30 < 11;
}
class mo {
  fromJulianDay(t) {
    return Bd(this, za, t);
  }
  toJulianDay(t) {
    return Va(za, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = 29 + t.month % 2;
    return t.month === 12 && Nu(t.year) && n++, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return Nu(t.year) ? 355 : 354;
  }
  getYearsInEra() {
    return 9665;
  }
  getEras() {
    return [
      "AH"
    ];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
}
class m1 extends mo {
  fromJulianDay(t) {
    return Bd(this, Iu, t);
  }
  toJulianDay(t) {
    return Va(Iu, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const h1 = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let gl, jn;
function xa(e) {
  return p1 + jn[e - ot];
}
function fr(e, t) {
  let n = e - ot, r = 1 << 11 - (t - 1);
  return gl[n] & r ? 30 : 29;
}
function Ku(e, t) {
  let n = xa(e);
  for (let r = 1; r < t; r++)
    n += fr(e, r);
  return n;
}
function zu(e) {
  return jn[e + 1 - ot] - jn[e - ot];
}
class v1 extends mo {
  fromJulianDay(t) {
    let n = t - za, r = xa(ot), a = xa(An);
    if (n < r || n > a)
      return super.fromJulianDay(t);
    {
      let i = ot - 1, l = 1, o = 1;
      for (; o > 0; ) {
        i++, o = n - xa(i) + 1;
        let u = zu(i);
        if (o === u) {
          l = 12;
          break;
        } else if (o < u) {
          let s = fr(i, l);
          for (l = 1; o > s; )
            o -= s, l++, s = fr(i, l);
          break;
        }
      }
      return new Te(this, i, l, n - Ku(i, l) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < ot || t.year > An ? super.toJulianDay(t) : za + Ku(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < ot || t.year > An ? super.getDaysInMonth(t) : fr(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < ot || t.year > An ? super.getDaysInYear(t) : zu(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", gl || (gl = new Uint16Array(Uint8Array.from(atob(h1), (t) => t.charCodeAt(0)).buffer)), !jn) {
      jn = new Uint32Array(An - ot + 1);
      let t = 0;
      for (let n = ot; n <= An; n++) {
        jn[n - ot] = t;
        for (let r = 1; r <= 12; r++)
          t += fr(n, r);
      }
    }
  }
}
const Vu = 347997, kd = 1080, Fd = 24 * kd, g1 = 29, $1 = 12 * kd + 793, y1 = g1 * Fd + $1;
function cn(e) {
  return zt(e * 7 + 1, 19) < 7;
}
function Da(e) {
  let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
  return zt(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function x1(e) {
  let t = Da(e - 1), n = Da(e);
  return Da(e + 1) - n === 356 ? 2 : n - t === 382 ? 1 : 0;
}
function mr(e) {
  return Da(e) + x1(e);
}
function Ad(e) {
  return mr(e + 1) - mr(e);
}
function D1(e) {
  let t = Ad(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function ca(e, t) {
  if (t >= 6 && !cn(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13)
    return 29;
  let n = D1(e);
  return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? cn(e) ? 30 : 0 : 30;
}
class C1 {
  fromJulianDay(t) {
    let n = t - Vu, r = n * Fd / y1, a = Math.floor((19 * r + 234) / 235) + 1, i = mr(a), l = Math.floor(n - i);
    for (; l < 1; )
      a--, i = mr(a), l = Math.floor(n - i);
    let o = 1, u = 0;
    for (; u < l; )
      u += ca(a, o), o++;
    o--, u -= ca(a, o);
    let s = l - u;
    return new Te(this, a, o, s);
  }
  toJulianDay(t) {
    let n = mr(t.year);
    for (let r = 1; r < t.month; r++)
      n += ca(t.year, r);
    return n + t.day + Vu;
  }
  getDaysInMonth(t) {
    return ca(t.year, t.month);
  }
  getMonthsInYear(t) {
    return cn(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return Ad(t.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(t, n) {
    n.year !== t.year && (cn(n.year) && !cn(t.year) && n.month > 6 ? t.month-- : !cn(n.year) && cn(t.year) && n.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const $l = 1723856, Lu = 1824665, yl = 5500;
function La(e, t, n, r) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function ho(e, t) {
  let n = Math.floor(4 * (t - e) / 1461), r = 1 + Math.floor((t - La(e, n, 1, 1)) / 30), a = t + 1 - La(e, n, r, 1);
  return [
    n,
    r,
    a
  ];
}
function Td(e) {
  return Math.floor(e % 4 / 3);
}
function Md(e, t) {
  return t % 13 !== 0 ? 30 : Td(e) + 5;
}
class vo {
  fromJulianDay(t) {
    let [n, r, a] = ho($l, t), i = "AM";
    return n <= 0 && (i = "AA", n += yl), new Te(this, i, n, r, a);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "AA" && (n -= yl), La($l, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Md(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + Td(t.year);
  }
  getYearsInEra(t) {
    return t.era === "AA" ? 9999 : 9991;
  }
  getEras() {
    return [
      "AA",
      "AM"
    ];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
}
class E1 extends vo {
  fromJulianDay(t) {
    let [n, r, a] = ho($l, t);
    return n += yl, new Te(this, "AA", n, r, a);
  }
  getEras() {
    return [
      "AA"
    ];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...t) {
    super(...t), this.identifier = "ethioaa";
  }
}
class P1 extends vo {
  fromJulianDay(t) {
    let [n, r, a] = ho(Lu, t), i = "CE";
    return n <= 0 && (i = "BCE", n = 1 - n), new Te(this, i, n, r, a);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), La(Lu, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), Md(n, t.month);
  }
  isInverseEra(t) {
    return t.era === "BCE";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BCE" ? "CE" : "BCE", t.year = 1 - t.year);
  }
  getEras() {
    return [
      "BCE",
      "CE"
    ];
  }
  getYearsInEra(t) {
    return t.era === "BCE" ? 9999 : 9715;
  }
  constructor(...t) {
    super(...t), this.identifier = "coptic";
  }
}
function ai(e) {
  switch (e) {
    case "buddhist":
      return new u1();
    case "ethiopic":
      return new vo();
    case "ethioaa":
      return new E1();
    case "coptic":
      return new P1();
    case "hebrew":
      return new C1();
    case "indian":
      return new b1();
    case "islamic-civil":
      return new mo();
    case "islamic-tbla":
      return new m1();
    case "islamic-umalqura":
      return new v1();
    case "japanese":
      return new o1();
    case "persian":
      return new f1();
    case "roc":
      return new s1();
    case "gregory":
    default:
      return new Ue();
  }
}
let Oi = /* @__PURE__ */ new Map();
class Vt {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(t) {
    return this.formatter.format(t);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  /** Formats a date range as a string. */
  formatRange(t, n) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(t, n);
    if (n < t)
      throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} – ${this.formatter.format(n)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(t, n) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(t, n);
    if (n < t)
      throw new RangeError("End date must be >= start date");
    let r = this.formatter.formatToParts(t), a = this.formatter.formatToParts(n);
    return [
      ...r.map((i) => ({
        ...i,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...a.map((i) => ({
        ...i,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return B1() && (this.resolvedHourCycle || (this.resolvedHourCycle = k1(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = Rd(t, n), this.options = n;
  }
}
const w1 = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Rd(e, t = {}) {
  if (typeof t.hour12 == "boolean" && S1()) {
    t = {
      ...t
    };
    let a = w1[String(t.hour12)][e.split("-")[0]], i = t.hour12 ? "h12" : "h23";
    t.hourCycle = a ?? i, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : "");
  if (Oi.has(n))
    return Oi.get(n);
  let r = new Intl.DateTimeFormat(e, t);
  return Oi.set(n, r), r;
}
let ji = null;
function S1() {
  return ji == null && (ji = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), ji;
}
let Hi = null;
function B1() {
  return Hi == null && (Hi = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Hi;
}
function k1(e, t) {
  if (!t.timeStyle && !t.hour)
    return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = Rd(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((i) => i.type === "hour").value, 10), a = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((i) => i.type === "hour").value, 10);
  if (r === 0 && a === 23)
    return "h23";
  if (r === 24 && a === 23)
    return "h24";
  if (r === 0 && a === 11)
    return "h11";
  if (r === 12 && a === 11)
    return "h12";
  throw new Error("Unexpected hour cycle result");
}
let _i = /* @__PURE__ */ new Map(), xl = !1;
try {
  xl = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let Oa = !1;
try {
  Oa = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const Id = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class ja {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(t) {
    let n = "";
    if (!xl && this.options.signDisplay != null ? n = A1(this.numberFormatter, this.options.signDisplay, t) : n = this.numberFormatter.format(t), this.options.style === "unit" && !Oa) {
      var r;
      let { unit: a, unitDisplay: i = "short", locale: l } = this.resolvedOptions();
      if (!a)
        return n;
      let o = (r = Id[a]) === null || r === void 0 ? void 0 : r[i];
      n += o[l] || o.default;
    }
    return n;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(t) {
    return this.numberFormatter.formatToParts(t);
  }
  /** Formats a number range as a string. */
  formatRange(t, n) {
    if (typeof this.numberFormatter.formatRange == "function")
      return this.numberFormatter.formatRange(t, n);
    if (n < t)
      throw new RangeError("End date must be >= start date");
    return `${this.format(t)} – ${this.format(n)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(t, n) {
    if (typeof this.numberFormatter.formatRangeToParts == "function")
      return this.numberFormatter.formatRangeToParts(t, n);
    if (n < t)
      throw new RangeError("End date must be >= start date");
    let r = this.numberFormatter.formatToParts(t), a = this.numberFormatter.formatToParts(n);
    return [
      ...r.map((i) => ({
        ...i,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...a.map((i) => ({
        ...i,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.numberFormatter.resolvedOptions();
    return !xl && this.options.signDisplay != null && (t = {
      ...t,
      signDisplay: this.options.signDisplay
    }), !Oa && this.options.style === "unit" && (t = {
      ...t,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), t;
  }
  constructor(t, n = {}) {
    this.numberFormatter = F1(t, n), this.options = n;
  }
}
function F1(e, t = {}) {
  let { numberingSystem: n } = t;
  if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !Oa) {
    var r;
    let { unit: l, unitDisplay: o = "short" } = t;
    if (!l)
      throw new Error('unit option must be provided with style: "unit"');
    if (!(!((r = Id[l]) === null || r === void 0) && r[o]))
      throw new Error(`Unsupported unit ${l} with unitDisplay = ${o}`);
    t = {
      ...t,
      style: "decimal"
    };
  }
  let a = e + (t ? Object.entries(t).sort((l, o) => l[0] < o[0] ? -1 : 1).join() : "");
  if (_i.has(a))
    return _i.get(a);
  let i = new Intl.NumberFormat(e, t);
  return _i.set(a, i), i;
}
function A1(e, t, n) {
  if (t === "auto")
    return e.format(n);
  if (t === "never")
    return e.format(Math.abs(n));
  {
    let r = !1;
    if (t === "always" ? r = n > 0 || Object.is(n, 0) : t === "exceptZero" && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : r = n > 0), r) {
      let a = e.format(-n), i = e.format(n), l = a.replace(i, "").replace(/\u200e|\u061C/, "");
      return [
        ...l
      ].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), a.replace(i, "!!!").replace(l, "+").replace("!!!", i);
    } else
      return e.format(n);
  }
}
const T1 = new RegExp("^.*\\(.*\\).*$"), M1 = [
  "latn",
  "arab",
  "hanidec"
];
class go {
  /**
  * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
  */
  parse(t) {
    return Ui(this.locale, this.options, t).parse(t);
  }
  /**
  * Returns whether the given string could potentially be a valid number. This should be used to
  * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
  * of the minus/plus sign characters can be checked.
  */
  isValidPartialNumber(t, n, r) {
    return Ui(this.locale, this.options, t).isValidPartialNumber(t, n, r);
  }
  /**
  * Returns a numbering system for which the given string is valid in the current locale.
  * If no numbering system could be detected, the default numbering system for the current
  * locale is returned.
  */
  getNumberingSystem(t) {
    return Ui(this.locale, this.options, t).options.numberingSystem;
  }
  constructor(t, n = {}) {
    this.locale = t, this.options = n;
  }
}
const Ou = /* @__PURE__ */ new Map();
function Ui(e, t, n) {
  let r = ju(e, t);
  if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
    for (let a of M1)
      if (a !== r.options.numberingSystem) {
        let i = ju(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + a, t);
        if (i.isValidPartialNumber(n))
          return i;
      }
  }
  return r;
}
function ju(e, t) {
  let n = e + (t ? Object.entries(t).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : ""), r = Ou.get(n);
  return r || (r = new R1(e, t), Ou.set(n, r)), r;
}
class R1 {
  parse(t) {
    let n = this.sanitize(t);
    if (this.symbols.group && (n = fa(n, this.symbols.group, "")), this.symbols.decimal && (n = n.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, "-")), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
      let a = n.indexOf("-");
      n = n.replace("-", "");
      let i = n.indexOf(".");
      i === -1 && (i = n.length), n = n.replace(".", ""), i - 2 === 0 ? n = `0.${n}` : i - 2 === -1 ? n = `0.0${n}` : i - 2 === -2 ? n = "0.00" : n = `${n.slice(0, i - 2)}.${n.slice(i - 2)}`, a > -1 && (n = `-${n}`);
    }
    let r = n ? +n : NaN;
    if (isNaN(r))
      return NaN;
    if (this.options.style === "percent") {
      let a = {
        ...this.options,
        style: "decimal",
        minimumFractionDigits: Math.min(this.options.minimumFractionDigits + 2, 20),
        maximumFractionDigits: Math.min(this.options.maximumFractionDigits + 2, 20)
      };
      return new go(this.locale, a).parse(new ja(this.locale, a).format(r));
    }
    return this.options.currencySign === "accounting" && T1.test(t) && (r = -1 * r), r;
  }
  sanitize(t) {
    return t = t.replace(this.symbols.literals, ""), this.symbols.minusSign && (t = t.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (t = t.replace(",", this.symbols.decimal), t = t.replace("،", this.symbols.decimal)), this.symbols.group && (t = fa(t, ".", this.symbols.group))), this.options.locale === "fr-FR" && (t = fa(t, ".", " ")), t;
  }
  isValidPartialNumber(t, n = -1 / 0, r = 1 / 0) {
    return t = this.sanitize(t), this.symbols.minusSign && t.startsWith(this.symbols.minusSign) && n < 0 ? t = t.slice(this.symbols.minusSign.length) : this.symbols.plusSign && t.startsWith(this.symbols.plusSign) && r > 0 && (t = t.slice(this.symbols.plusSign.length)), this.symbols.group && t.startsWith(this.symbols.group) || this.symbols.decimal && t.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && (t = fa(t, this.symbols.group, "")), t = t.replace(this.symbols.numeral, ""), this.symbols.decimal && (t = t.replace(this.symbols.decimal, "")), t.length === 0);
  }
  constructor(t, n = {}) {
    this.locale = t, this.formatter = new Intl.NumberFormat(t, n), this.options = this.formatter.resolvedOptions(), this.symbols = N1(t, this.formatter, this.options, n);
    var r, a;
    this.options.style === "percent" && (((r = this.options.minimumFractionDigits) !== null && r !== void 0 ? r : 0) > 18 || ((a = this.options.maximumFractionDigits) !== null && a !== void 0 ? a : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
}
const Hu = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]), I1 = [
  0,
  4,
  2,
  1,
  11,
  20,
  3,
  7,
  100,
  21,
  0.1,
  1.1
];
function N1(e, t, n, r) {
  var a, i, l, o;
  let u = new Intl.NumberFormat(e, {
    ...n,
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21
  }), s = u.formatToParts(-10000.111), d = u.formatToParts(10000.111), c = I1.map((F) => u.formatToParts(F));
  var b;
  let f = (b = (a = s.find((F) => F.type === "minusSign")) === null || a === void 0 ? void 0 : a.value) !== null && b !== void 0 ? b : "-", p = (i = d.find((F) => F.type === "plusSign")) === null || i === void 0 ? void 0 : i.value;
  !p && ((r == null ? void 0 : r.signDisplay) === "exceptZero" || (r == null ? void 0 : r.signDisplay) === "always") && (p = "+");
  let v = (l = new Intl.NumberFormat(e, {
    ...n,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(1e-3).find((F) => F.type === "decimal")) === null || l === void 0 ? void 0 : l.value, y = (o = s.find((F) => F.type === "group")) === null || o === void 0 ? void 0 : o.value, $ = s.filter((F) => !Hu.has(F.type)).map((F) => _u(F.value)), x = c.flatMap((F) => F.filter((E) => !Hu.has(E.type)).map((E) => _u(E.value))), C = [
    .../* @__PURE__ */ new Set([
      ...$,
      ...x
    ])
  ].sort((F, E) => E.length - F.length), P = C.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${C.join("|")}|[\\p{White_Space}]`, "gu"), B = [
    ...new Intl.NumberFormat(n.locale, {
      useGrouping: !1
    }).format(9876543210)
  ].reverse(), R = new Map(B.map((F, E) => [
    F,
    E
  ])), g = new RegExp(`[${B.join("")}]`, "g");
  return {
    minusSign: f,
    plusSign: p,
    decimal: v,
    group: y,
    literals: P,
    numeral: g,
    index: (F) => String(R.get(F))
  };
}
function fa(e, t, n) {
  return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function _u(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const K1 = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), z1 = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function V1(e) {
  if (Intl.Locale) {
    let n = new Intl.Locale(e).maximize(), r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r)
      return r.direction === "rtl";
    if (n.script)
      return K1.has(n.script);
  }
  let t = e.split("-")[0];
  return z1.has(t);
}
const L1 = Symbol.for("react-aria.i18n.locale");
function Nd() {
  let e = typeof window < "u" && window[L1] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: V1(e) ? "rtl" : "ltr"
  };
}
let Dl = Nd(), br = /* @__PURE__ */ new Set();
function Uu() {
  Dl = Nd();
  for (let e of br)
    e(Dl);
}
function O1() {
  let e = Bt(), [t, n] = Z(Dl);
  return J(() => (br.size === 0 && window.addEventListener("languagechange", Uu), br.add(n), () => {
    br.delete(n), br.size === 0 && window.removeEventListener("languagechange", Uu);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const j1 = /* @__PURE__ */ h.createContext(null);
function oe() {
  let e = O1();
  return U(j1) || e;
}
const Wu = /* @__PURE__ */ new WeakMap();
function H1(e) {
  let t = Wu.get(e);
  return t || (t = new Cn(e), Wu.set(e, t)), t;
}
function Kd(e, t) {
  return t && Cn.getGlobalDictionaryForPackage(t) || H1(e);
}
function Pe(e, t) {
  let { locale: n } = oe(), r = Kd(e, t);
  return K(() => new ud(n, r), [
    n,
    r
  ]);
}
function Pt(e) {
  e = Js(e ?? {}, _1);
  let { locale: t } = oe();
  return K(() => new Vt(t, e), [
    t,
    e
  ]);
}
function _1(e, t) {
  if (e === t)
    return !0;
  let n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let a of n)
    if (t[a] !== e[a])
      return !1;
  return !0;
}
function Ha(e = {}) {
  let { locale: t } = oe();
  return K(() => new ja(t, e), [
    t,
    e
  ]);
}
let Wi = /* @__PURE__ */ new Map();
function qn(e) {
  let { locale: t } = oe(), n = t + (e ? Object.entries(e).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : "");
  if (Wi.has(n))
    return Wi.get(n);
  let r = new Intl.Collator(t, e);
  return Wi.set(n, r), r;
}
function zd(e) {
  let t = qn({
    usage: "search",
    ...e
  }), n = ee((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), t.compare(i.slice(0, l.length), l) === 0), [
    t
  ]), r = ee((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), t.compare(i.slice(-l.length), l) === 0), [
    t
  ]), a = ee((i, l) => {
    if (l.length === 0)
      return !0;
    i = i.normalize("NFC"), l = l.normalize("NFC");
    let o = 0, u = l.length;
    for (; o + u <= i.length; o++) {
      let s = i.slice(o, o + u);
      if (t.compare(l, s) === 0)
        return !0;
    }
    return !1;
  }, [
    t
  ]);
  return K(() => ({
    startsWith: n,
    endsWith: r,
    contains: a
  }), [
    n,
    r,
    a
  ]);
}
function Vd(e, t) {
  let {
    elementType: n = "button",
    isDisabled: r,
    onPress: a,
    onPressStart: i,
    onPressEnd: l,
    onPressUp: o,
    onPressChange: u,
    preventFocusOnPress: s,
    allowFocusWhenDisabled: d,
    // @ts-ignore
    onClick: c,
    href: b,
    target: f,
    rel: p,
    type: m = "button"
  } = e, v;
  n === "button" ? v = {
    type: m,
    disabled: r
  } : v = {
    role: "button",
    tabIndex: r ? void 0 : 0,
    href: n === "a" && r ? void 0 : b,
    target: n === "a" ? f : void 0,
    type: n === "input" ? m : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? p : void 0
  };
  let { pressProps: y, isPressed: $ } = Je({
    onPressStart: i,
    onPressEnd: l,
    onPressChange: u,
    onPress: a,
    onPressUp: o,
    isDisabled: r,
    preventFocusOnPress: s,
    ref: t
  }), { focusableProps: x } = Dn(e, t);
  d && (x.tabIndex = r ? -1 : x.tabIndex);
  let C = j(x, y, Y(e, {
    labelable: !0
  }));
  return {
    isPressed: $,
    buttonProps: j(v, C, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      onClick: (P) => {
        c && (c(P), console.warn("onClick is deprecated, please use onPress"));
      }
    })
  };
}
function U1(e, t, n) {
  const { isSelected: r } = t, { isPressed: a, buttonProps: i } = Vd({
    ...e,
    onPress: St(t.toggle, e.onPress)
  }, n);
  return {
    isPressed: a,
    buttonProps: j(i, {
      "aria-pressed": r
    })
  };
}
const Ld = 7e3;
let hr = null;
function en(e, t = "assertive", n = Ld) {
  hr || (hr = new G1()), hr.announce(e, t, n);
}
function W1(e) {
  hr && hr.clear(e);
}
class G1 {
  createLog(t) {
    let n = document.createElement("div");
    return n.setAttribute("role", "log"), n.setAttribute("aria-live", t), n.setAttribute("aria-relevant", "additions"), n;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(t, n = "assertive", r = Ld) {
    if (!this.node)
      return;
    let a = document.createElement("div");
    a.textContent = t, n === "assertive" ? this.assertiveLog.appendChild(a) : this.politeLog.appendChild(a), t !== "" && setTimeout(() => {
      a.remove();
    }, r);
  }
  clear(t) {
    this.node && ((!t || t === "assertive") && (this.assertiveLog.innerHTML = ""), (!t || t === "polite") && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node);
  }
}
function ii(e) {
  return e && e.__esModule ? e.default : e;
}
var Hr = {}, Od = {};
Od = {
  dateRange: (e) => `${e.startDate} إلى ${e.endDate}`,
  dateSelected: (e) => `${e.date} المحدد`,
  finishRangeSelectionPrompt: "انقر لإنهاء عملية تحديد نطاق التاريخ",
  maximumDate: "آخر تاريخ متاح",
  minimumDate: "أول تاريخ متاح",
  next: "التالي",
  previous: "السابق",
  selectedDateDescription: (e) => `تاريخ محدد: ${e.date}`,
  selectedRangeDescription: (e) => `المدى الزمني المحدد: ${e.dateRange}`,
  startRangeSelectionPrompt: "انقر لبدء عملية تحديد نطاق التاريخ",
  todayDate: (e) => `اليوم، ${e.date}`,
  todayDateSelected: (e) => `اليوم، ${e.date} محدد`
};
var jd = {};
jd = {
  dateRange: (e) => `${e.startDate} до ${e.endDate}`,
  dateSelected: (e) => `Избрано е ${e.date}`,
  finishRangeSelectionPrompt: "Натиснете, за да довършите избора на времеви интервал",
  maximumDate: "Последна налична дата",
  minimumDate: "Първа налична дата",
  next: "Напред",
  previous: "Назад",
  selectedDateDescription: (e) => `Избрана дата: ${e.date}`,
  selectedRangeDescription: (e) => `Избран диапазон: ${e.dateRange}`,
  startRangeSelectionPrompt: "Натиснете, за да пристъпите към избора на времеви интервал",
  todayDate: (e) => `Днес, ${e.date}`,
  todayDateSelected: (e) => `Днес, ${e.date} са избрани`
};
var Hd = {};
Hd = {
  dateRange: (e) => `${e.startDate} až ${e.endDate}`,
  dateSelected: (e) => `Vybráno ${e.date}`,
  finishRangeSelectionPrompt: "Kliknutím dokončíte výběr rozsahu dat",
  maximumDate: "Poslední dostupné datum",
  minimumDate: "První dostupné datum",
  next: "Další",
  previous: "Předchozí",
  selectedDateDescription: (e) => `Vybrané datum: ${e.date}`,
  selectedRangeDescription: (e) => `Vybrané období: ${e.dateRange}`,
  startRangeSelectionPrompt: "Kliknutím zahájíte výběr rozsahu dat",
  todayDate: (e) => `Dnes, ${e.date}`,
  todayDateSelected: (e) => `Dnes, vybráno ${e.date}`
};
var _d = {};
_d = {
  dateRange: (e) => `${e.startDate} til ${e.endDate}`,
  dateSelected: (e) => `${e.date} valgt`,
  finishRangeSelectionPrompt: "Klik for at fuldføre valg af datoområde",
  maximumDate: "Sidste ledige dato",
  minimumDate: "Første ledige dato",
  next: "Næste",
  previous: "Forrige",
  selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
  selectedRangeDescription: (e) => `Valgt interval: ${e.dateRange}`,
  startRangeSelectionPrompt: "Klik for at starte valg af datoområde",
  todayDate: (e) => `I dag, ${e.date}`,
  todayDateSelected: (e) => `I dag, ${e.date} valgt`
};
var Ud = {};
Ud = {
  dateRange: (e) => `${e.startDate} bis ${e.endDate}`,
  dateSelected: (e) => `${e.date} ausgewählt`,
  finishRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beenden",
  maximumDate: "Letztes verfügbares Datum",
  minimumDate: "Erstes verfügbares Datum",
  next: "Weiter",
  previous: "Zurück",
  selectedDateDescription: (e) => `Ausgewähltes Datum: ${e.date}`,
  selectedRangeDescription: (e) => `Ausgewählter Bereich: ${e.dateRange}`,
  startRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beginnen",
  todayDate: (e) => `Heute, ${e.date}`,
  todayDateSelected: (e) => `Heute, ${e.date} ausgewählt`
};
var Wd = {};
Wd = {
  dateRange: (e) => `${e.startDate} έως ${e.endDate}`,
  dateSelected: (e) => `Επιλέχθηκε ${e.date}`,
  finishRangeSelectionPrompt: "Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών",
  maximumDate: "Τελευταία διαθέσιμη ημερομηνία",
  minimumDate: "Πρώτη διαθέσιμη ημερομηνία",
  next: "Επόμενο",
  previous: "Προηγούμενο",
  selectedDateDescription: (e) => `Επιλεγμένη ημερομηνία: ${e.date}`,
  selectedRangeDescription: (e) => `Επιλεγμένο εύρος: ${e.dateRange}`,
  startRangeSelectionPrompt: "Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών",
  todayDate: (e) => `Σήμερα, ${e.date}`,
  todayDateSelected: (e) => `Σήμερα, επιλέχτηκε ${e.date}`
};
var Gd = {};
Gd = {
  previous: "Previous",
  next: "Next",
  selectedDateDescription: (e) => `Selected Date: ${e.date}`,
  selectedRangeDescription: (e) => `Selected Range: ${e.dateRange}`,
  todayDate: (e) => `Today, ${e.date}`,
  todayDateSelected: (e) => `Today, ${e.date} selected`,
  dateSelected: (e) => `${e.date} selected`,
  startRangeSelectionPrompt: "Click to start selecting date range",
  finishRangeSelectionPrompt: "Click to finish selecting date range",
  minimumDate: "First available date",
  maximumDate: "Last available date",
  dateRange: (e) => `${e.startDate} to ${e.endDate}`
};
var Zd = {};
Zd = {
  dateRange: (e) => `${e.startDate} a ${e.endDate}`,
  dateSelected: (e) => `${e.date} seleccionado`,
  finishRangeSelectionPrompt: "Haga clic para terminar de seleccionar rango de fechas",
  maximumDate: "Última fecha disponible",
  minimumDate: "Primera fecha disponible",
  next: "Siguiente",
  previous: "Anterior",
  selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
  selectedRangeDescription: (e) => `Intervalo seleccionado: ${e.dateRange}`,
  startRangeSelectionPrompt: "Haga clic para comenzar a seleccionar un rango de fechas",
  todayDate: (e) => `Hoy, ${e.date}`,
  todayDateSelected: (e) => `Hoy, ${e.date} seleccionado`
};
var qd = {};
qd = {
  dateRange: (e) => `${e.startDate} kuni ${e.endDate}`,
  dateSelected: (e) => `${e.date} valitud`,
  finishRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimise lõpetamiseks",
  maximumDate: "Viimane saadaolev kuupäev",
  minimumDate: "Esimene saadaolev kuupäev",
  next: "Järgmine",
  previous: "Eelmine",
  selectedDateDescription: (e) => `Valitud kuupäev: ${e.date}`,
  selectedRangeDescription: (e) => `Valitud vahemik: ${e.dateRange}`,
  startRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimiseks",
  todayDate: (e) => `Täna, ${e.date}`,
  todayDateSelected: (e) => `Täna, ${e.date} valitud`
};
var Yd = {};
Yd = {
  dateRange: (e) => `${e.startDate} – ${e.endDate}`,
  dateSelected: (e) => `${e.date} valittu`,
  finishRangeSelectionPrompt: "Lopeta päivämääräalueen valinta napsauttamalla tätä.",
  maximumDate: "Viimeinen varattavissa oleva päivämäärä",
  minimumDate: "Ensimmäinen varattavissa oleva päivämäärä",
  next: "Seuraava",
  previous: "Edellinen",
  selectedDateDescription: (e) => `Valittu päivämäärä: ${e.date}`,
  selectedRangeDescription: (e) => `Valittu aikaväli: ${e.dateRange}`,
  startRangeSelectionPrompt: "Aloita päivämääräalueen valinta napsauttamalla tätä.",
  todayDate: (e) => `Tänään, ${e.date}`,
  todayDateSelected: (e) => `Tänään, ${e.date} valittu`
};
var Jd = {};
Jd = {
  dateRange: (e) => `${e.startDate} à ${e.endDate}`,
  dateSelected: (e) => `${e.date} sélectionné`,
  finishRangeSelectionPrompt: "Cliquer pour finir de sélectionner la plage de dates",
  maximumDate: "Dernière date disponible",
  minimumDate: "Première date disponible",
  next: "Suivant",
  previous: "Précédent",
  selectedDateDescription: (e) => `Date sélectionnée : ${e.date}`,
  selectedRangeDescription: (e) => `Plage sélectionnée : ${e.dateRange}`,
  startRangeSelectionPrompt: "Cliquer pour commencer à sélectionner la plage de dates",
  todayDate: (e) => `Aujourd'hui, ${e.date}`,
  todayDateSelected: (e) => `Aujourd’hui, ${e.date} sélectionné`
};
var Xd = {};
Xd = {
  dateRange: (e) => `${e.startDate} עד ${e.endDate}`,
  dateSelected: (e) => `${e.date} נבחר`,
  finishRangeSelectionPrompt: "חץ כדי לסיים את בחירת טווח התאריכים",
  maximumDate: "תאריך פנוי אחרון",
  minimumDate: "תאריך פנוי ראשון",
  next: "הבא",
  previous: "הקודם",
  selectedDateDescription: (e) => `תאריך נבחר: ${e.date}`,
  selectedRangeDescription: (e) => `טווח נבחר: ${e.dateRange}`,
  startRangeSelectionPrompt: "לחץ כדי להתחיל בבחירת טווח התאריכים",
  todayDate: (e) => `היום, ${e.date}`,
  todayDateSelected: (e) => `היום, ${e.date} נבחר`
};
var Qd = {};
Qd = {
  dateRange: (e) => `${e.startDate} do ${e.endDate}`,
  dateSelected: (e) => `${e.date} odabran`,
  finishRangeSelectionPrompt: "Kliknite da dovršite raspon odabranih datuma",
  maximumDate: "Posljednji raspoloživi datum",
  minimumDate: "Prvi raspoloživi datum",
  next: "Sljedeći",
  previous: "Prethodni",
  selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
  selectedRangeDescription: (e) => `Odabrani raspon: ${e.dateRange}`,
  startRangeSelectionPrompt: "Kliknite da započnete raspon odabranih datuma",
  todayDate: (e) => `Danas, ${e.date}`,
  todayDateSelected: (e) => `Danas, odabran ${e.date}`
};
var ec = {};
ec = {
  dateRange: (e) => `${e.startDate}–${e.endDate}`,
  dateSelected: (e) => `${e.date} kiválasztva`,
  finishRangeSelectionPrompt: "Kattintson a dátumtartomány kijelölésének befejezéséhez",
  maximumDate: "Utolsó elérhető dátum",
  minimumDate: "Az első elérhető dátum",
  next: "Következő",
  previous: "Előző",
  selectedDateDescription: (e) => `Kijelölt dátum: ${e.date}`,
  selectedRangeDescription: (e) => `Kijelölt tartomány: ${e.dateRange}`,
  startRangeSelectionPrompt: "Kattintson a dátumtartomány kijelölésének indításához",
  todayDate: (e) => `Ma, ${e.date}`,
  todayDateSelected: (e) => `Ma, ${e.date} kijelölve`
};
var tc = {};
tc = {
  dateRange: (e) => `Da ${e.startDate} a ${e.endDate}`,
  dateSelected: (e) => `${e.date} selezionata`,
  finishRangeSelectionPrompt: "Fai clic per completare la selezione dell’intervallo di date",
  maximumDate: "Ultima data disponibile",
  minimumDate: "Prima data disponibile",
  next: "Successivo",
  previous: "Precedente",
  selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
  selectedRangeDescription: (e) => `Intervallo selezionato: ${e.dateRange}`,
  startRangeSelectionPrompt: "Fai clic per selezionare l’intervallo di date",
  todayDate: (e) => `Oggi, ${e.date}`,
  todayDateSelected: (e) => `Oggi, ${e.date} selezionata`
};
var nc = {};
nc = {
  dateRange: (e) => `${e.startDate} から ${e.endDate}`,
  dateSelected: (e) => `${e.date} を選択`,
  finishRangeSelectionPrompt: "クリックして日付範囲の選択を終了",
  maximumDate: "最終利用可能日",
  minimumDate: "最初の利用可能日",
  next: "次へ",
  previous: "前へ",
  selectedDateDescription: (e) => `選択した日付 : ${e.date}`,
  selectedRangeDescription: (e) => `選択範囲 : ${e.dateRange}`,
  startRangeSelectionPrompt: "クリックして日付範囲の選択を開始",
  todayDate: (e) => `本日、${e.date}`,
  todayDateSelected: (e) => `本日、${e.date} を選択`
};
var rc = {};
rc = {
  dateRange: (e) => `${e.startDate} ~ ${e.endDate}`,
  dateSelected: (e) => `${e.date} 선택됨`,
  finishRangeSelectionPrompt: "날짜 범위 선택을 완료하려면 클릭하십시오.",
  maximumDate: "마지막으로 사용 가능한 일자",
  minimumDate: "처음으로 사용 가능한 일자",
  next: "다음",
  previous: "이전",
  selectedDateDescription: (e) => `선택 일자: ${e.date}`,
  selectedRangeDescription: (e) => `선택 범위: ${e.dateRange}`,
  startRangeSelectionPrompt: "날짜 범위 선택을 시작하려면 클릭하십시오.",
  todayDate: (e) => `오늘, ${e.date}`,
  todayDateSelected: (e) => `오늘, ${e.date} 선택됨`
};
var ac = {};
ac = {
  dateRange: (e) => `Nuo ${e.startDate} iki ${e.endDate}`,
  dateSelected: (e) => `Pasirinkta ${e.date}`,
  finishRangeSelectionPrompt: "Spustelėkite, kad baigtumėte pasirinkti datų intervalą",
  maximumDate: "Paskutinė galima data",
  minimumDate: "Pirmoji galima data",
  next: "Paskesnis",
  previous: "Ankstesnis",
  selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
  selectedRangeDescription: (e) => `Pasirinktas intervalas: ${e.dateRange}`,
  startRangeSelectionPrompt: "Spustelėkite, kad pradėtumėte pasirinkti datų intervalą",
  todayDate: (e) => `Šiandien, ${e.date}`,
  todayDateSelected: (e) => `Šiandien, pasirinkta ${e.date}`
};
var ic = {};
ic = {
  dateRange: (e) => `No ${e.startDate} līdz ${e.endDate}`,
  dateSelected: (e) => `Atlasīts: ${e.date}`,
  finishRangeSelectionPrompt: "Noklikšķiniet, lai pabeigtu datumu diapazona atlasi",
  maximumDate: "Pēdējais pieejamais datums",
  minimumDate: "Pirmais pieejamais datums",
  next: "Tālāk",
  previous: "Atpakaļ",
  selectedDateDescription: (e) => `Atlasītais datums: ${e.date}`,
  selectedRangeDescription: (e) => `Atlasītais diapazons: ${e.dateRange}`,
  startRangeSelectionPrompt: "Noklikšķiniet, lai sāktu datumu diapazona atlasi",
  todayDate: (e) => `Šodien, ${e.date}`,
  todayDateSelected: (e) => `Atlasīta šodiena, ${e.date}`
};
var lc = {};
lc = {
  dateRange: (e) => `${e.startDate} til ${e.endDate}`,
  dateSelected: (e) => `${e.date} valgt`,
  finishRangeSelectionPrompt: "Klikk for å fullføre valg av datoområde",
  maximumDate: "Siste tilgjengelige dato",
  minimumDate: "Første tilgjengelige dato",
  next: "Neste",
  previous: "Forrige",
  selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
  selectedRangeDescription: (e) => `Valgt område: ${e.dateRange}`,
  startRangeSelectionPrompt: "Klikk for å starte valg av datoområde",
  todayDate: (e) => `I dag, ${e.date}`,
  todayDateSelected: (e) => `I dag, ${e.date} valgt`
};
var oc = {};
oc = {
  dateRange: (e) => `${e.startDate} tot ${e.endDate}`,
  dateSelected: (e) => `${e.date} geselecteerd`,
  finishRangeSelectionPrompt: "Klik om de selectie van het datumbereik te voltooien",
  maximumDate: "Laatste beschikbare datum",
  minimumDate: "Eerste beschikbare datum",
  next: "Volgende",
  previous: "Vorige",
  selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
  selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.dateRange}`,
  startRangeSelectionPrompt: "Klik om het datumbereik te selecteren",
  todayDate: (e) => `Vandaag, ${e.date}`,
  todayDateSelected: (e) => `Vandaag, ${e.date} geselecteerd`
};
var uc = {};
uc = {
  dateRange: (e) => `${e.startDate} do ${e.endDate}`,
  dateSelected: (e) => `Wybrano ${e.date}`,
  finishRangeSelectionPrompt: "Kliknij, aby zakończyć wybór zakresu dat",
  maximumDate: "Ostatnia dostępna data",
  minimumDate: "Pierwsza dostępna data",
  next: "Dalej",
  previous: "Wstecz",
  selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
  selectedRangeDescription: (e) => `Wybrany zakres: ${e.dateRange}`,
  startRangeSelectionPrompt: "Kliknij, aby rozpocząć wybór zakresu dat",
  todayDate: (e) => `Dzisiaj, ${e.date}`,
  todayDateSelected: (e) => `Dzisiaj wybrano ${e.date}`
};
var sc = {};
sc = {
  dateRange: (e) => `${e.startDate} a ${e.endDate}`,
  dateSelected: (e) => `${e.date} selecionado`,
  finishRangeSelectionPrompt: "Clique para concluir a seleção do intervalo de datas",
  maximumDate: "Última data disponível",
  minimumDate: "Primeira data disponível",
  next: "Próximo",
  previous: "Anterior",
  selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
  selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
  startRangeSelectionPrompt: "Clique para iniciar a seleção do intervalo de datas",
  todayDate: (e) => `Hoje, ${e.date}`,
  todayDateSelected: (e) => `Hoje, ${e.date} selecionado`
};
var dc = {};
dc = {
  dateRange: (e) => `${e.startDate} a ${e.endDate}`,
  dateSelected: (e) => `${e.date} selecionado`,
  finishRangeSelectionPrompt: "Clique para terminar de selecionar o intervalo de datas",
  maximumDate: "Última data disponível",
  minimumDate: "Primeira data disponível",
  next: "Próximo",
  previous: "Anterior",
  selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
  selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
  startRangeSelectionPrompt: "Clique para começar a selecionar o intervalo de datas",
  todayDate: (e) => `Hoje, ${e.date}`,
  todayDateSelected: (e) => `Hoje, ${e.date} selecionado`
};
var cc = {};
cc = {
  dateRange: (e) => `De la ${e.startDate} până la ${e.endDate}`,
  dateSelected: (e) => `${e.date} selectată`,
  finishRangeSelectionPrompt: "Apăsaţi pentru a finaliza selecţia razei pentru dată",
  maximumDate: "Ultima dată disponibilă",
  minimumDate: "Prima dată disponibilă",
  next: "Următorul",
  previous: "Înainte",
  selectedDateDescription: (e) => `Dată selectată: ${e.date}`,
  selectedRangeDescription: (e) => `Interval selectat: ${e.dateRange}`,
  startRangeSelectionPrompt: "Apăsaţi pentru a începe selecţia razei pentru dată",
  todayDate: (e) => `Astăzi, ${e.date}`,
  todayDateSelected: (e) => `Azi, ${e.date} selectată`
};
var fc = {};
fc = {
  dateRange: (e) => `С ${e.startDate} по ${e.endDate}`,
  dateSelected: (e) => `Выбрано ${e.date}`,
  finishRangeSelectionPrompt: "Щелкните, чтобы завершить выбор диапазона дат",
  maximumDate: "Последняя доступная дата",
  minimumDate: "Первая доступная дата",
  next: "Далее",
  previous: "Назад",
  selectedDateDescription: (e) => `Выбранная дата: ${e.date}`,
  selectedRangeDescription: (e) => `Выбранный диапазон: ${e.dateRange}`,
  startRangeSelectionPrompt: "Щелкните, чтобы начать выбор диапазона дат",
  todayDate: (e) => `Сегодня, ${e.date}`,
  todayDateSelected: (e) => `Сегодня, выбрано ${e.date}`
};
var bc = {};
bc = {
  dateRange: (e) => `Od ${e.startDate} do ${e.endDate}`,
  dateSelected: (e) => `Vybratý dátum ${e.date}`,
  finishRangeSelectionPrompt: "Kliknutím dokončíte výber rozsahu dátumov",
  maximumDate: "Posledný dostupný dátum",
  minimumDate: "Prvý dostupný dátum",
  next: "Nasledujúce",
  previous: "Predchádzajúce",
  selectedDateDescription: (e) => `Vybratý dátum: ${e.date}`,
  selectedRangeDescription: (e) => `Vybratý rozsah: ${e.dateRange}`,
  startRangeSelectionPrompt: "Kliknutím spustíte výber rozsahu dátumov",
  todayDate: (e) => `Dnes ${e.date}`,
  todayDateSelected: (e) => `Vybratý dnešný dátum ${e.date}`
};
var pc = {};
pc = {
  dateRange: (e) => `${e.startDate} do ${e.endDate}`,
  dateSelected: (e) => `${e.date} izbrano`,
  finishRangeSelectionPrompt: "Kliknite za dokončanje izbire datumskega obsega",
  maximumDate: "Zadnji razpoložljivi datum",
  minimumDate: "Prvi razpoložljivi datum",
  next: "Naprej",
  previous: "Nazaj",
  selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
  selectedRangeDescription: (e) => `Izbrano območje: ${e.dateRange}`,
  startRangeSelectionPrompt: "Kliknite za začetek izbire datumskega obsega",
  todayDate: (e) => `Danes, ${e.date}`,
  todayDateSelected: (e) => `Danes, ${e.date} izbrano`
};
var mc = {};
mc = {
  dateRange: (e) => `${e.startDate} do ${e.endDate}`,
  dateSelected: (e) => `${e.date} izabran`,
  finishRangeSelectionPrompt: "Kliknite da dovršite opseg izabranih datuma",
  maximumDate: "Zadnji raspoloživi datum",
  minimumDate: "Prvi raspoloživi datum",
  next: "Sledeći",
  previous: "Prethodni",
  selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
  selectedRangeDescription: (e) => `Izabrani period: ${e.dateRange}`,
  startRangeSelectionPrompt: "Kliknite da započnete opseg izabranih datuma",
  todayDate: (e) => `Danas, ${e.date}`,
  todayDateSelected: (e) => `Danas, izabran ${e.date}`
};
var hc = {};
hc = {
  dateRange: (e) => `${e.startDate} till ${e.endDate}`,
  dateSelected: (e) => `${e.date} har valts`,
  finishRangeSelectionPrompt: "Klicka för att avsluta val av datumintervall",
  maximumDate: "Sista tillgängliga datum",
  minimumDate: "Första tillgängliga datum",
  next: "Nästa",
  previous: "Föregående",
  selectedDateDescription: (e) => `Valt datum: ${e.date}`,
  selectedRangeDescription: (e) => `Valt intervall: ${e.dateRange}`,
  startRangeSelectionPrompt: "Klicka för att välja datumintervall",
  todayDate: (e) => `Idag, ${e.date}`,
  todayDateSelected: (e) => `Idag, ${e.date} har valts`
};
var vc = {};
vc = {
  dateRange: (e) => `${e.startDate} - ${e.endDate}`,
  dateSelected: (e) => `${e.date} seçildi`,
  finishRangeSelectionPrompt: "Tarih aralığı seçimini tamamlamak için tıklayın",
  maximumDate: "Son müsait tarih",
  minimumDate: "İlk müsait tarih",
  next: "Sonraki",
  previous: "Önceki",
  selectedDateDescription: (e) => `Seçilen Tarih: ${e.date}`,
  selectedRangeDescription: (e) => `Seçilen Aralık: ${e.dateRange}`,
  startRangeSelectionPrompt: "Tarih aralığı seçimini başlatmak için tıklayın",
  todayDate: (e) => `Bugün, ${e.date}`,
  todayDateSelected: (e) => `Bugün, ${e.date} seçildi`
};
var gc = {};
gc = {
  dateRange: (e) => `${e.startDate} — ${e.endDate}`,
  dateSelected: (e) => `Вибрано ${e.date}`,
  finishRangeSelectionPrompt: "Натисніть, щоб завершити вибір діапазону дат",
  maximumDate: "Остання доступна дата",
  minimumDate: "Перша доступна дата",
  next: "Наступний",
  previous: "Попередній",
  selectedDateDescription: (e) => `Вибрана дата: ${e.date}`,
  selectedRangeDescription: (e) => `Вибраний діапазон: ${e.dateRange}`,
  startRangeSelectionPrompt: "Натисніть, щоб почати вибір діапазону дат",
  todayDate: (e) => `Сьогодні, ${e.date}`,
  todayDateSelected: (e) => `Сьогодні, вибрано ${e.date}`
};
var $c = {};
$c = {
  dateRange: (e) => `${e.startDate} 至 ${e.endDate}`,
  dateSelected: (e) => `已选择 ${e.date}`,
  finishRangeSelectionPrompt: "单击以完成选择日期范围",
  maximumDate: "最后一个可用日期",
  minimumDate: "第一个可用日期",
  next: "下一页",
  previous: "上一页",
  selectedDateDescription: (e) => `选定的日期：${e.date}`,
  selectedRangeDescription: (e) => `选定的范围：${e.dateRange}`,
  startRangeSelectionPrompt: "单击以开始选择日期范围",
  todayDate: (e) => `今天，即 ${e.date}`,
  todayDateSelected: (e) => `已选择今天，即 ${e.date}`
};
var yc = {};
yc = {
  dateRange: (e) => `${e.startDate} 至 ${e.endDate}`,
  dateSelected: (e) => `已選取 ${e.date}`,
  finishRangeSelectionPrompt: "按一下以完成選取日期範圍",
  maximumDate: "最後一個可用日期",
  minimumDate: "第一個可用日期",
  next: "下一頁",
  previous: "上一頁",
  selectedDateDescription: (e) => `選定的日期：${e.date}`,
  selectedRangeDescription: (e) => `選定的範圍：${e.dateRange}`,
  startRangeSelectionPrompt: "按一下以開始選取日期範圍",
  todayDate: (e) => `今天，${e.date}`,
  todayDateSelected: (e) => `已選取今天，${e.date}`
};
Hr = {
  "ar-AE": Od,
  "bg-BG": jd,
  "cs-CZ": Hd,
  "da-DK": _d,
  "de-DE": Ud,
  "el-GR": Wd,
  "en-US": Gd,
  "es-ES": Zd,
  "et-EE": qd,
  "fi-FI": Yd,
  "fr-FR": Jd,
  "he-IL": Xd,
  "hr-HR": Qd,
  "hu-HU": ec,
  "it-IT": tc,
  "ja-JP": nc,
  "ko-KR": rc,
  "lt-LT": ac,
  "lv-LV": ic,
  "nb-NO": lc,
  "nl-NL": oc,
  "pl-PL": uc,
  "pt-BR": sc,
  "pt-PT": dc,
  "ro-RO": cc,
  "ru-RU": fc,
  "sk-SK": bc,
  "sl-SI": pc,
  "sr-SP": mc,
  "sv-SE": hc,
  "tr-TR": vc,
  "uk-UA": gc,
  "zh-CN": $c,
  "zh-TW": yc
};
const $o = /* @__PURE__ */ new WeakMap();
function Cr(e) {
  return (e == null ? void 0 : e.calendar.identifier) === "gregory" && e.era === "BC" ? "short" : void 0;
}
function Z1(e) {
  let t = Pe(/* @__PURE__ */ ii(Hr), "@react-aria/calendar"), n, r;
  "highlightedRange" in e ? { start: n, end: r } = e.highlightedRange || {} : n = r = e.value;
  let a = Pt({
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    era: Cr(n) || Cr(r),
    timeZone: e.timeZone
  }), i = "anchorDate" in e ? e.anchorDate : null;
  return K(() => {
    if (!i && n && r)
      if (Ae(n, r)) {
        let l = a.format(n.toDate(e.timeZone));
        return t.format("selectedDateDescription", {
          date: l
        });
      } else {
        let l = El(a, t, n, r, e.timeZone);
        return t.format("selectedRangeDescription", {
          dateRange: l
        });
      }
    return "";
  }, [
    n,
    r,
    i,
    e.timeZone,
    t,
    a
  ]);
}
function Cl(e, t, n, r) {
  let a = Pe(/* @__PURE__ */ ii(Hr), "@react-aria/calendar"), i = Cr(e) || Cr(t), l = Pt({
    month: "long",
    year: "numeric",
    era: i,
    calendar: e.calendar.identifier,
    timeZone: n
  }), o = Pt({
    month: "long",
    year: "numeric",
    day: "numeric",
    era: i,
    calendar: e.calendar.identifier,
    timeZone: n
  });
  return K(() => {
    if (Ae(e, $n(e))) {
      if (Ae(t, Ia(e)))
        return l.format(e.toDate(n));
      if (Ae(t, Ia(t)))
        return r ? El(l, a, e, t, n) : l.formatRange(e.toDate(n), t.toDate(n));
    }
    return r ? El(o, a, e, t, n) : o.formatRange(e.toDate(n), t.toDate(n));
  }, [
    e,
    t,
    l,
    o,
    a,
    n,
    r
  ]);
}
function El(e, t, n, r, a) {
  let i = e.formatRangeToParts(n.toDate(a), r.toDate(a)), l = -1;
  for (let s = 0; s < i.length; s++) {
    let d = i[s];
    if (d.source === "shared" && d.type === "literal")
      l = s;
    else if (d.source === "endRange")
      break;
  }
  let o = "", u = "";
  for (let s = 0; s < i.length; s++)
    s < l ? o += i[s].value : s > l && (u += i[s].value);
  return t.format("dateRange", {
    startDate: o,
    endDate: u
  });
}
function xc(e, t) {
  let n = Pe(/* @__PURE__ */ ii(Hr), "@react-aria/calendar"), r = Y(e), a = Cl(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1), i = Cl(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
  wa(() => {
    t.isFocused || en(i);
  }, [
    i
  ]);
  let l = Z1(t);
  wa(() => {
    l && en(l, "polite", 4e3);
  }, [
    l
  ]);
  let o = wt([
    !!e.errorMessage,
    e.isInvalid,
    e.validationState
  ]);
  $o.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: e["aria-labelledby"],
    errorMessageId: o,
    selectedDateDescription: l
  });
  let [u, s] = Z(!1), d = e.isDisabled || t.isNextVisibleRangeInvalid();
  d && u && (s(!1), t.setFocused(!0));
  let [c, b] = Z(!1), f = e.isDisabled || t.isPreviousVisibleRangeInvalid();
  f && c && (b(!1), t.setFocused(!0));
  let p = Ot({
    id: e.id,
    "aria-label": [
      e["aria-label"],
      i
    ].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: j(r, p, {
      role: "application",
      "aria-describedby": e["aria-describedby"] || void 0
    }),
    nextButtonProps: {
      onPress: () => t.focusNextPage(),
      "aria-label": n.format("next"),
      isDisabled: d,
      onFocusChange: s
    },
    prevButtonProps: {
      onPress: () => t.focusPreviousPage(),
      "aria-label": n.format("previous"),
      isDisabled: f,
      onFocusChange: b
    },
    errorMessageProps: {
      id: o
    },
    title: a
  };
}
function q1(e, t) {
  return xc(e, t);
}
function Y1(e, t, n) {
  let r = xc(e, t), a = I(!1), i = I(typeof window < "u" ? window : null);
  Jt(i, "pointerdown", (o) => {
    a.current = o.width === 0 && o.height === 0;
  });
  let l = (o) => {
    if (a.current) {
      a.current = !1;
      return;
    }
    if (t.setDragging(!1), !t.anchorDate)
      return;
    let u = o.target, s = document.getElementById(r.calendarProps.id);
    s && s.contains(document.activeElement) && (!s.contains(u) || !u.closest('button, [role="button"]')) && t.selectFocusedDate();
  };
  return Jt(i, "pointerup", l), Jt(i, "pointercancel", l), r.calendarProps.onBlur = (o) => {
    (!o.relatedTarget || !n.current.contains(o.relatedTarget)) && t.anchorDate && t.selectFocusedDate();
  }, Jt(n, "touchmove", (o) => {
    t.isDragging && o.preventDefault();
  }, {
    passive: !1,
    capture: !0
  }), r;
}
function J1(e, t) {
  let { startDate: n = t.visibleRange.start, endDate: r = t.visibleRange.end } = e, { direction: a } = oe(), i = (f) => {
    switch (f.key) {
      case "Enter":
      case " ":
        f.preventDefault(), t.selectFocusedDate();
        break;
      case "PageUp":
        f.preventDefault(), f.stopPropagation(), t.focusPreviousSection(f.shiftKey);
        break;
      case "PageDown":
        f.preventDefault(), f.stopPropagation(), t.focusNextSection(f.shiftKey);
        break;
      case "End":
        f.preventDefault(), f.stopPropagation(), t.focusSectionEnd();
        break;
      case "Home":
        f.preventDefault(), f.stopPropagation(), t.focusSectionStart();
        break;
      case "ArrowLeft":
        f.preventDefault(), f.stopPropagation(), a === "rtl" ? t.focusNextDay() : t.focusPreviousDay();
        break;
      case "ArrowUp":
        f.preventDefault(), f.stopPropagation(), t.focusPreviousRow();
        break;
      case "ArrowRight":
        f.preventDefault(), f.stopPropagation(), a === "rtl" ? t.focusPreviousDay() : t.focusNextDay();
        break;
      case "ArrowDown":
        f.preventDefault(), f.stopPropagation(), t.focusNextRow();
        break;
      case "Escape":
        "setAnchorDate" in t && (f.preventDefault(), t.setAnchorDate(null));
        break;
    }
  }, l = Cl(n, r, t.timeZone, !0), { ariaLabel: o, ariaLabelledBy: u } = $o.get(t), s = Ot({
    "aria-label": [
      o,
      l
    ].filter(Boolean).join(", "),
    "aria-labelledby": u
  }), d = Pt({
    weekday: e.weekdayStyle || "narrow",
    timeZone: t.timeZone
  }), { locale: c } = oe(), b = K(() => {
    let f = yr(ni(t.timeZone), c);
    return [
      ...new Array(7).keys()
    ].map((p) => {
      let v = f.add({
        days: p
      }).toDate(t.timeZone);
      return d.format(v);
    });
  }, [
    c,
    t.timeZone,
    d
  ]);
  return {
    gridProps: j(s, {
      role: "grid",
      "aria-readonly": t.isReadOnly || null,
      "aria-disabled": t.isDisabled || null,
      "aria-multiselectable": "highlightedRange" in t || void 0,
      onKeyDown: i,
      onFocus: () => t.setFocused(!0),
      onBlur: () => t.setFocused(!1)
    }),
    headerProps: {
      // Column headers are hidden to screen readers to make navigating with a touch screen reader easier.
      // The day names are already included in the label of each cell, so there's no need to announce them twice.
      "aria-hidden": !0
    },
    weekDays: b
  };
}
function X1(e, t, n) {
  let { date: r, isDisabled: a } = e, { errorMessageId: i, selectedDateDescription: l } = $o.get(t), o = Pe(/* @__PURE__ */ ii(Hr), "@react-aria/calendar"), u = Pt({
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    era: Cr(r),
    timeZone: t.timeZone
  }), s = t.isSelected(r), d = t.isCellFocused(r);
  a = a || t.isCellDisabled(r);
  let c = t.isCellUnavailable(r), b = !a && !c, f = t.isValueInvalid && ("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && r.compare(t.highlightedRange.start) >= 0 && r.compare(t.highlightedRange.end) <= 0 : t.value && Ae(t.value, r));
  f && (s = !0), r = Js(r, pl);
  let p = K(() => r.toDate(t.timeZone), [
    r,
    t.timeZone
  ]), m = N$(r, t.timeZone), v = K(() => {
    let E = "";
    return "highlightedRange" in t && t.value && !t.anchorDate && (Ae(r, t.value.start) || Ae(r, t.value.end)) && (E = l + ", "), E += u.format(p), m ? E = o.format(s ? "todayDateSelected" : "todayDate", {
      date: E
    }) : s && (E = o.format("dateSelected", {
      date: E
    })), t.minValue && Ae(r, t.minValue) ? E += ", " + o.format("minimumDate") : t.maxValue && Ae(r, t.maxValue) && (E += ", " + o.format("maximumDate")), E;
  }, [
    u,
    p,
    o,
    s,
    m,
    r,
    t,
    l
  ]), y = "";
  "anchorDate" in t && d && !t.isReadOnly && b && (t.anchorDate ? y = o.format("finishRangeSelectionPrompt") : y = o.format("startRangeSelectionPrompt"));
  let $ = kt(y), x = I(!1), C = I(!1), P = I(null), { pressProps: B, isPressed: R } = Je({
    // When dragging to select a range, we don't want dragging over the original anchor
    // again to trigger onPressStart. Cancel presses immediately when the pointer exits.
    shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
    preventFocusOnPress: !0,
    isDisabled: !b || t.isReadOnly,
    onPressStart(E) {
      if (t.isReadOnly) {
        t.setFocusedDate(r);
        return;
      }
      if ("highlightedRange" in t && !t.anchorDate && (E.pointerType === "mouse" || E.pointerType === "touch")) {
        if (t.highlightedRange && !f) {
          if (Ae(r, t.highlightedRange.start)) {
            t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setDragging(!0), C.current = !0;
            return;
          } else if (Ae(r, t.highlightedRange.end)) {
            t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(r), t.setDragging(!0), C.current = !0;
            return;
          }
        }
        let S = () => {
          t.setDragging(!0), P.current = null, t.selectDate(r), t.setFocusedDate(r), x.current = !0;
        };
        E.pointerType === "touch" ? P.current = setTimeout(S, 200) : S();
      }
    },
    onPressEnd() {
      C.current = !1, x.current = !1, clearTimeout(P.current), P.current = null;
    },
    onPress() {
      !("anchorDate" in t) && !t.isReadOnly && (t.selectDate(r), t.setFocusedDate(r));
    },
    onPressUp(E) {
      if (!t.isReadOnly && ("anchorDate" in t && P.current && (t.selectDate(r), t.setFocusedDate(r)), "anchorDate" in t))
        if (C.current)
          t.setAnchorDate(r);
        else if (t.anchorDate && !x.current)
          t.selectDate(r), t.setFocusedDate(r);
        else if (E.pointerType === "keyboard" && !t.anchorDate) {
          t.selectDate(r);
          let S = r.add({
            days: 1
          });
          t.isInvalid(S) && (S = r.subtract({
            days: 1
          })), t.isInvalid(S) || t.setFocusedDate(S);
        } else
          E.pointerType === "virtual" && (t.selectDate(r), t.setFocusedDate(r));
    }
  }), g = null;
  a || (g = Ae(r, t.focusedDate) ? 0 : -1), J(() => {
    d && n.current && (yt(n.current), Fa() !== "pointer" && document.activeElement === n.current && Oe(n.current, {
      containingElement: ze(n.current)
    }));
  }, [
    d,
    n
  ]);
  let M = Pt({
    day: "numeric",
    timeZone: t.timeZone,
    calendar: r.calendar.identifier
  }), F = K(() => M.formatToParts(p).find((E) => E.type === "day").value, [
    M,
    p
  ]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !b || null,
      "aria-selected": s || null,
      "aria-invalid": f || null
    },
    buttonProps: j(B, {
      onFocus() {
        a || t.setFocusedDate(r);
      },
      tabIndex: g,
      role: "button",
      "aria-disabled": !b || null,
      "aria-label": v,
      "aria-invalid": f || null,
      "aria-describedby": [
        f ? i : null,
        $["aria-describedby"]
      ].filter(Boolean).join(" ") || void 0,
      onPointerEnter(E) {
        "highlightDate" in t && (E.pointerType !== "touch" || t.isDragging) && b && t.highlightDate(r);
      },
      onPointerDown(E) {
        "releasePointerCapture" in E.target && E.target.releasePointerCapture(E.pointerId);
      },
      onContextMenu(E) {
        E.preventDefault();
      }
    }),
    isPressed: R,
    isFocused: d,
    isSelected: s,
    isDisabled: a,
    isUnavailable: c,
    isOutsideVisibleRange: r.compare(t.visibleRange.start) < 0 || r.compare(t.visibleRange.end) > 0,
    isInvalid: f,
    formattedDate: F
  };
}
function _r(e, t, n) {
  let { validationBehavior: r, focus: a } = e;
  fe(() => {
    if (r === "native" && (n != null && n.current)) {
      let u = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(u), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(ey(n.current));
    }
  });
  let i = ye(() => {
    t.resetValidation();
  }), l = ye((u) => {
    var s;
    t.displayValidation.isInvalid || t.commitValidation();
    let d = n == null || (s = n.current) === null || s === void 0 ? void 0 : s.form;
    if (!u.defaultPrevented && n && d && ty(d) === n.current) {
      var c;
      a ? a() : (c = n.current) === null || c === void 0 || c.focus(), eo("keyboard");
    }
    u.preventDefault();
  }), o = ye(() => {
    t.commitValidation();
  });
  J(() => {
    let u = n == null ? void 0 : n.current;
    if (!u)
      return;
    let s = u.form;
    return u.addEventListener("invalid", l), u.addEventListener("change", o), s == null || s.addEventListener("reset", i), () => {
      u.removeEventListener("invalid", l), u.removeEventListener("change", o), s == null || s.removeEventListener("reset", i);
    };
  }, [
    n,
    l,
    o,
    i,
    r
  ]);
}
function Q1(e) {
  let t = e.validity;
  return {
    badInput: t.badInput,
    customError: t.customError,
    patternMismatch: t.patternMismatch,
    rangeOverflow: t.rangeOverflow,
    rangeUnderflow: t.rangeUnderflow,
    stepMismatch: t.stepMismatch,
    tooLong: t.tooLong,
    tooShort: t.tooShort,
    typeMismatch: t.typeMismatch,
    valueMissing: t.valueMissing,
    valid: t.valid
  };
}
function ey(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: Q1(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function ty(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let n = e.elements[t];
    if (!n.validity.valid)
      return n;
  }
  return null;
}
const li = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
}, Dc = {
  ...li,
  customError: !0,
  valid: !1
}, Yt = {
  isInvalid: !1,
  validationDetails: li,
  validationErrors: []
}, Cc = W({}), tn = "__formValidationState" + Date.now();
function Dt(e) {
  if (e[tn]) {
    let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: a, commitValidation: i } = e[tn];
    return {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: a,
      commitValidation: i
    };
  }
  return ny(e);
}
function ny(e) {
  let { isInvalid: t, validationState: n, name: r, value: a, builtinValidation: i, validate: l, validationBehavior: o = "aria" } = e;
  n && (t || (t = n === "invalid"));
  let u = t ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: Dc
  } : null, s = K(() => Gu(ry(l, a)), [
    l,
    a
  ]);
  i != null && i.validationDetails.valid && (i = null);
  let d = U(Cc), c = K(() => r ? Array.isArray(r) ? r.flatMap((F) => Pl(d[F])) : Pl(d[r]) : [], [
    d,
    r
  ]), [b, f] = Z(d), [p, m] = Z(!1);
  d !== b && (f(d), m(!1));
  let v = K(() => Gu(p ? [] : c), [
    p,
    c
  ]), y = I(Yt), [$, x] = Z(Yt), C = I(Yt), P = () => {
    if (!B)
      return;
    R(!1);
    let F = s || i || y.current;
    Gi(F, C.current) || (C.current = F, x(F));
  }, [B, R] = Z(!1);
  return J(P), {
    realtimeValidation: u || v || s || i || Yt,
    displayValidation: o === "native" ? u || v || $ : u || v || s || i || $,
    updateValidation(F) {
      o === "aria" && !Gi($, F) ? x(F) : y.current = F;
    },
    resetValidation() {
      let F = Yt;
      Gi(F, C.current) || (C.current = F, x(F)), o === "native" && R(!1), m(!0);
    },
    commitValidation() {
      o === "native" && R(!0), m(!0);
    }
  };
}
function Pl(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function ry(e, t) {
  if (typeof e == "function") {
    let n = e(t);
    if (n && typeof n != "boolean")
      return Pl(n);
  }
  return [];
}
function Gu(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: Dc
  } : null;
}
function Gi(e, t) {
  return e === t ? !0 : e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((n, r) => n === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([n, r]) => t.validationDetails[n] === r);
}
function Er(...e) {
  let t = /* @__PURE__ */ new Set(), n = !1, r = {
    ...li
  };
  for (let l of e) {
    var a, i;
    for (let o of l.validationErrors)
      t.add(o);
    n || (n = l.isInvalid);
    for (let o in r)
      (a = r)[i = o] || (a[i] = l.validationDetails[o]);
  }
  return r.valid = !n, {
    isInvalid: n,
    validationErrors: [
      ...t
    ],
    validationDetails: r
  };
}
function Ec(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: a = !1, value: i, name: l, children: o, "aria-label": u, "aria-labelledby": s, validationState: d = "valid", isInvalid: c } = e, b = (B) => {
    B.stopPropagation(), t.setSelected(B.target.checked);
  }, f = o != null, p = u != null || s != null;
  !f && !p && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: m, isPressed: v } = Je({
    isDisabled: r
  }), { pressProps: y, isPressed: $ } = Je({
    isDisabled: r || a,
    onPress() {
      t.toggle();
    }
  }), { focusableProps: x } = Dn(e, n), C = j(m, x), P = Y(e, {
    labelable: !0
  });
  return xn(n, t.isSelected, t.setSelected), {
    labelProps: j(y, {
      onClick: (B) => B.preventDefault()
    }),
    inputProps: j(P, {
      "aria-invalid": c || d === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": a || void 0,
      onChange: b,
      disabled: r,
      ...i == null ? {} : {
        value: i
      },
      name: l,
      type: "checkbox",
      ...C
    }),
    isSelected: t.isSelected,
    isPressed: v || $,
    isDisabled: r,
    isReadOnly: a,
    isInvalid: c || d === "invalid"
  };
}
function Ur(e) {
  let { id: t, label: n, "aria-labelledby": r, "aria-label": a, labelElementType: i = "label" } = e;
  t = be(t);
  let l = be(), o = {};
  n ? (r = r ? `${l} ${r}` : l, o = {
    id: l,
    htmlFor: i === "label" ? t : void 0
  }) : !r && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let u = Ot({
    id: t,
    "aria-label": a,
    "aria-labelledby": r
  });
  return {
    labelProps: o,
    fieldProps: u
  };
}
function an(e) {
  let { description: t, errorMessage: n, isInvalid: r, validationState: a } = e, { labelProps: i, fieldProps: l } = Ur(e), o = wt([
    !!t,
    !!n,
    r,
    a
  ]), u = wt([
    !!t,
    !!n,
    r,
    a
  ]);
  return l = j(l, {
    "aria-describedby": [
      o,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      u,
      e["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }), {
    labelProps: i,
    fieldProps: l,
    descriptionProps: {
      id: o
    },
    errorMessageProps: {
      id: u
    }
  };
}
function oi(e = {}) {
  let { isReadOnly: t } = e, [n, r] = Ke(e.isSelected, e.defaultSelected || !1, e.onChange);
  function a(l) {
    t || r(l);
  }
  function i() {
    t || r(!n);
  }
  return {
    isSelected: n,
    setSelected: a,
    toggle: i
  };
}
function Pc(e, t, n) {
  let r = Dt({
    ...e,
    value: t.isSelected
  }), { isInvalid: a, validationErrors: i, validationDetails: l } = r.displayValidation, { labelProps: o, inputProps: u, isSelected: s, isPressed: d, isDisabled: c, isReadOnly: b } = Ec({
    ...e,
    isInvalid: a
  }, t, n);
  _r(e, r, n);
  let { isIndeterminate: f, isRequired: p, validationBehavior: m = "aria" } = e;
  return J(() => {
    n.current && (n.current.indeterminate = !!f);
  }), {
    labelProps: o,
    inputProps: {
      ...u,
      checked: s,
      "aria-required": p && m === "aria" || void 0,
      required: p && m === "native"
    },
    isSelected: s,
    isPressed: d,
    isDisabled: c,
    isReadOnly: b,
    isInvalid: a,
    validationErrors: i,
    validationDetails: l
  };
}
const wc = /* @__PURE__ */ new WeakMap();
function ay(e, t) {
  let { isDisabled: n, name: r, validationBehavior: a = "aria" } = e, { isInvalid: i, validationErrors: l, validationDetails: o } = t.displayValidation, { labelProps: u, fieldProps: s, descriptionProps: d, errorMessageProps: c } = an({
    ...e,
    // Checkbox group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: i,
    errorMessage: e.errorMessage || l
  });
  wc.set(t, {
    name: r,
    descriptionId: d.id,
    errorMessageId: c.id,
    validationBehavior: a
  });
  let b = Y(e, {
    labelable: !0
  }), { focusWithinProps: f } = ft({
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  });
  return {
    groupProps: j(b, {
      role: "group",
      "aria-disabled": n || void 0,
      ...s,
      ...f
    }),
    labelProps: u,
    descriptionProps: d,
    errorMessageProps: c,
    isInvalid: i,
    validationErrors: l,
    validationDetails: o
  };
}
function iy(e, t, n) {
  const r = oi({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    onChange(v) {
      v ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(v);
    }
  });
  let { name: a, descriptionId: i, errorMessageId: l, validationBehavior: o } = wc.get(t);
  var u;
  o = (u = e.validationBehavior) !== null && u !== void 0 ? u : o;
  let { realtimeValidation: s } = Dt({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), d = I(Yt), c = () => {
    t.setInvalid(e.value, s.isInvalid ? s : d.current);
  };
  J(c);
  let b = t.realtimeValidation.isInvalid ? t.realtimeValidation : s, f = o === "native" ? t.displayValidation : b;
  var p;
  let m = Pc({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || a,
    isRequired: (p = e.isRequired) !== null && p !== void 0 ? p : t.isRequired,
    validationBehavior: o,
    [tn]: {
      realtimeValidation: b,
      displayValidation: f,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(v) {
        d.current = v, c();
      }
    }
  }, r, n);
  return {
    ...m,
    inputProps: {
      ...m.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? l : null,
        i
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const Zu = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function ly(e = {}) {
  let { style: t, isFocusable: n } = e, [r, a] = Z(!1), { focusWithinProps: i } = ft({
    isDisabled: !n,
    onFocusWithinChange: (o) => a(o)
  }), l = K(() => r ? t : t ? {
    ...Zu,
    ...t
  } : Zu, [
    r
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: l
    }
  };
}
function oy(e) {
  let { children: t, elementType: n = "div", isFocusable: r, style: a, ...i } = e, { visuallyHiddenProps: l } = ly(e);
  return /* @__PURE__ */ h.createElement(n, j(i, l), t);
}
function uy(e) {
  return e && e.__esModule ? e.default : e;
}
const Nn = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, _a = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, sy = {
  top: "left",
  left: "top"
}, wl = {
  top: "height",
  left: "width"
}, Sc = {
  width: "totalWidth",
  height: "totalHeight"
}, ba = {};
let We = typeof document < "u" && window.visualViewport;
function qu(e) {
  let t = 0, n = 0, r = 0, a = 0, i = 0, l = 0, o = {}, u = (We == null ? void 0 : We.scale) > 1;
  if (e.tagName === "BODY") {
    let c = document.documentElement;
    r = c.clientWidth, a = c.clientHeight;
    var s;
    t = (s = We == null ? void 0 : We.width) !== null && s !== void 0 ? s : r;
    var d;
    n = (d = We == null ? void 0 : We.height) !== null && d !== void 0 ? d : a, o.top = c.scrollTop || e.scrollTop, o.left = c.scrollLeft || e.scrollLeft, We && (i = We.offsetTop, l = We.offsetLeft);
  } else
    ({ width: t, height: n, top: i, left: l } = Hn(e)), o.top = e.scrollTop, o.left = e.scrollLeft, r = t, a = n;
  return Yl() && (e.tagName === "BODY" || e.tagName === "HTML") && u && (o.top = 0, o.left = 0, i = We.pageTop, l = We.pageLeft), {
    width: t,
    height: n,
    totalWidth: r,
    totalHeight: a,
    scroll: o,
    top: i,
    left: l
  };
}
function dy(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function Yu(e, t, n, r, a, i, l) {
  let o = a.scroll[e], u = r[wl[e]], s = r.scroll[Nn[e]] + i, d = u + r.scroll[Nn[e]] - i, c = t - o + l[e] - r[Nn[e]], b = t - o + n + l[e] - r[Nn[e]];
  return c < s ? s - c : b > d ? Math.max(d - b, s - c) : 0;
}
function cy(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function Ju(e) {
  if (ba[e])
    return ba[e];
  let [t, n] = e.split(" "), r = Nn[t] || "right", a = sy[r];
  Nn[n] || (n = "center");
  let i = wl[r], l = wl[a];
  return ba[e] = {
    placement: t,
    crossPlacement: n,
    axis: r,
    crossAxis: a,
    size: i,
    crossSize: l
  }, ba[e];
}
function Zi(e, t, n, r, a, i, l, o, u, s) {
  let { placement: d, crossPlacement: c, axis: b, crossAxis: f, size: p, crossSize: m } = r, v = {};
  v[f] = e[f], c === "center" ? v[f] += (e[m] - n[m]) / 2 : c !== f && (v[f] += e[m] - n[m]), v[f] += i;
  const y = e[f] - n[m] + u + s, $ = e[f] + e[m] - u - s;
  if (v[f] = dt(v[f], y, $), d === b) {
    const x = o ? l[p] : t[Sc[p]];
    v[_a[b]] = Math.floor(x - e[b] + a);
  } else
    v[b] = Math.floor(e[b] + e[p] + a);
  return v;
}
function fy(e, t, n, r, a, i, l, o) {
  const u = r ? n.height : t[Sc.height];
  let s = e.top != null ? n.top + e.top : n.top + (u - e.bottom - l), d = o !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + t.scroll.top - s - (a.top + a.bottom + i))
  ) : Math.max(0, s + l - (t.top + t.scroll.top) - (a.top + a.bottom + i));
  return Math.min(t.height - i * 2, d);
}
function Xu(e, t, n, r, a, i) {
  let { placement: l, axis: o, size: u } = i;
  return l === o ? Math.max(0, n[o] - e[o] - e.scroll[o] + t[o] - r[o] - r[_a[o]] - a) : Math.max(0, e[u] + e[o] + e.scroll[o] - t[o] - n[o] - n[u] - r[o] - r[_a[o]] - a);
}
function by(e, t, n, r, a, i, l, o, u, s, d, c, b, f, p, m) {
  let v = Ju(e), { size: y, crossAxis: $, crossSize: x, placement: C, crossPlacement: P } = v, B = Zi(t, o, n, v, d, c, s, b, p, m), R = d, g = Xu(o, s, t, a, i + d, v);
  if (l && r[y] > g) {
    let _ = Ju(`${_a[C]} ${P}`), L = Zi(t, o, n, _, d, c, s, b, p, m);
    Xu(o, s, t, a, i + d, _) > g && (v = _, B = L, R = d);
  }
  let M = "bottom";
  v.axis === "top" ? v.placement === "top" ? M = "top" : v.placement === "bottom" && (M = "bottom") : v.crossAxis === "top" && (v.crossPlacement === "top" ? M = "bottom" : v.crossPlacement === "bottom" && (M = "top"));
  let F = Yu($, B[$], n[x], o, u, i, s);
  B[$] += F;
  let E = fy(B, o, s, b, a, i, n.height, M);
  f && f < E && (E = f), n.height = Math.min(n.height, E), B = Zi(t, o, n, v, R, c, s, b, p, m), F = Yu($, B[$], n[x], o, u, i, s), B[$] += F;
  let S = {}, w = t[$] + 0.5 * t[x] - n[$];
  const A = p / 2 + m, z = n[x] - p / 2 - m, T = t[$] - n[$] + p / 2, D = t[$] + t[x] - n[$] - p / 2, H = dt(w, T, D);
  return S[$] = dt(H, A, z), {
    position: B,
    maxHeight: E,
    arrowOffsetLeft: S.left,
    arrowOffsetTop: S.top,
    placement: v.placement
  };
}
function py(e) {
  let { placement: t, targetNode: n, overlayNode: r, scrollNode: a, padding: i, shouldFlip: l, boundaryElement: o, offset: u, crossOffset: s, maxHeight: d, arrowSize: c = 0, arrowBoundaryOffset: b = 0 } = e, f = r instanceof HTMLElement ? my(r) : document.documentElement, p = f === document.documentElement;
  const m = window.getComputedStyle(f).position;
  let v = !!m && m !== "static", y = p ? Hn(n) : Qu(n, f);
  if (!p) {
    let { marginTop: g, marginLeft: M } = window.getComputedStyle(n);
    y.top += parseInt(g, 10) || 0, y.left += parseInt(M, 10) || 0;
  }
  let $ = Hn(r), x = cy(r);
  $.width += x.left + x.right, $.height += x.top + x.bottom;
  let C = dy(a), P = qu(o), B = qu(f), R = o.tagName === "BODY" ? Hn(f) : Qu(f, o);
  return f.tagName === "HTML" && o.tagName === "BODY" && (B.scroll.top = 0, B.scroll.left = 0), by(t, y, $, C, x, i, l, P, B, R, u, s, v, d, c, b);
}
function Hn(e) {
  let { top: t, left: n, width: r, height: a } = e.getBoundingClientRect(), { scrollTop: i, scrollLeft: l, clientTop: o, clientLeft: u } = document.documentElement;
  return {
    top: t + i - o,
    left: n + l - u,
    width: r,
    height: a
  };
}
function Qu(e, t) {
  let n = window.getComputedStyle(e), r;
  if (n.position === "fixed") {
    let { top: a, left: i, width: l, height: o } = e.getBoundingClientRect();
    r = {
      top: a,
      left: i,
      width: l,
      height: o
    };
  } else {
    r = Hn(e);
    let a = Hn(t), i = window.getComputedStyle(t);
    a.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, a.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, r.top -= a.top, r.left -= a.left;
  }
  return r.top -= parseInt(n.marginTop, 10) || 0, r.left -= parseInt(n.marginLeft, 10) || 0, r;
}
function my(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !es(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !es(t); )
      t = t.parentElement;
  return t || document.documentElement;
}
function es(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || // @ts-ignore
  "backdropFilter" in t && t.backdropFilter !== "none" || // @ts-ignore
  "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const Bc = /* @__PURE__ */ new WeakMap();
function hy(e) {
  let { triggerRef: t, isOpen: n, onClose: r } = e;
  J(() => {
    if (!n || r === null)
      return;
    let a = (i) => {
      let l = i.target;
      if (!t.current || l instanceof Node && !l.contains(t.current))
        return;
      let o = r || Bc.get(t.current);
      o && o();
    };
    return window.addEventListener("scroll", a, !0), () => {
      window.removeEventListener("scroll", a, !0);
    };
  }, [
    n,
    r,
    t
  ]);
}
let ke = typeof document < "u" && window.visualViewport;
function kc(e) {
  let { direction: t } = oe(), { arrowSize: n = 0, targetRef: r, overlayRef: a, scrollRef: i = a, placement: l = "bottom", containerPadding: o = 12, shouldFlip: u = !0, boundaryElement: s = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: c = 0, shouldUpdatePosition: b = !0, isOpen: f = !0, onClose: p, maxHeight: m, arrowBoundaryOffset: v = 0 } = e, [y, $] = Z({
    position: {},
    arrowOffsetLeft: void 0,
    arrowOffsetTop: void 0,
    maxHeight: void 0,
    placement: void 0
  }), x = [
    b,
    l,
    a.current,
    r.current,
    i.current,
    o,
    u,
    s,
    d,
    c,
    f,
    t,
    m,
    v,
    n
  ], C = I(ke == null ? void 0 : ke.scale);
  J(() => {
    f && (C.current = ke == null ? void 0 : ke.scale);
  }, [
    f
  ]);
  let P = ee(() => {
    if (b === !1 || !f || !a.current || !r.current || !i.current || !s || (ke == null ? void 0 : ke.scale) !== C.current)
      return;
    !m && a.current && (a.current.style.maxHeight = "none");
    let g = py({
      placement: gy(l, t),
      overlayNode: a.current,
      targetNode: r.current,
      scrollNode: i.current,
      padding: o,
      shouldFlip: u,
      boundaryElement: s,
      offset: d,
      crossOffset: c,
      maxHeight: m,
      arrowSize: n,
      arrowBoundaryOffset: v
    });
    Object.keys(g.position).forEach((M) => a.current.style[M] = g.position[M] + "px"), a.current.style.maxHeight = g.maxHeight != null ? g.maxHeight + "px" : void 0, $(g);
  }, x);
  fe(P, x), vy(P), Kr({
    ref: a,
    onResize: P
  });
  let B = I(!1);
  fe(() => {
    let g, M = () => {
      B.current = !0, clearTimeout(g), g = setTimeout(() => {
        B.current = !1;
      }, 500), P();
    }, F = () => {
      B.current && M();
    };
    return ke == null || ke.addEventListener("resize", M), ke == null || ke.addEventListener("scroll", F), () => {
      ke == null || ke.removeEventListener("resize", M), ke == null || ke.removeEventListener("scroll", F);
    };
  }, [
    P
  ]);
  let R = ee(() => {
    B.current || p();
  }, [
    p,
    B
  ]);
  return hy({
    triggerRef: r,
    isOpen: f,
    onClose: p && R
  }), {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...y.position,
        maxHeight: y.maxHeight
      }
    },
    placement: y.placement,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: y.arrowOffsetLeft,
        top: y.arrowOffsetTop
      }
    },
    updatePosition: P
  };
}
function vy(e) {
  fe(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function gy(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
const Tt = [];
function Fc(e, t) {
  let { onClose: n, shouldCloseOnBlur: r, isOpen: a, isDismissable: i = !1, isKeyboardDismissDisabled: l = !1, shouldCloseOnInteractOutside: o } = e;
  J(() => (a && Tt.push(t), () => {
    let p = Tt.indexOf(t);
    p >= 0 && Tt.splice(p, 1);
  }), [
    a,
    t
  ]);
  let u = () => {
    Tt[Tt.length - 1] === t && n && n();
  }, s = (p) => {
    (!o || o(p.target)) && Tt[Tt.length - 1] === t && (p.stopPropagation(), p.preventDefault());
  }, d = (p) => {
    (!o || o(p.target)) && (Tt[Tt.length - 1] === t && (p.stopPropagation(), p.preventDefault()), u());
  }, c = (p) => {
    p.key === "Escape" && !l && (p.stopPropagation(), p.preventDefault(), u());
  };
  ad({
    ref: t,
    onInteractOutside: i && a ? d : null,
    onInteractOutsideStart: s
  });
  let { focusWithinProps: b } = ft({
    isDisabled: !r,
    onBlurWithin: (p) => {
      !p.relatedTarget || x$(p.relatedTarget) || (!o || o(p.relatedTarget)) && n();
    }
  }), f = (p) => {
    p.target === p.currentTarget && p.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: c,
      ...b
    },
    underlayProps: {
      onPointerDown: f
    }
  };
}
function $y(e, t, n) {
  let { type: r } = e, { isOpen: a } = t;
  J(() => {
    n && n.current && Bc.set(n.current, t.close);
  });
  let i;
  r === "menu" ? i = !0 : r === "listbox" && (i = "listbox");
  let l = be();
  return {
    triggerProps: {
      "aria-haspopup": i,
      "aria-expanded": a,
      "aria-controls": a ? l : null,
      onPress: t.toggle
    },
    overlayProps: {
      id: l
    }
  };
}
const qi = typeof document < "u" && window.visualViewport, yy = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let pa = 0, Yi;
function Ac(e = {}) {
  let { isDisabled: t } = e;
  fe(() => {
    if (!t)
      return pa++, pa === 1 && (Gn() ? Yi = Dy() : Yi = xy()), () => {
        pa--, pa === 0 && Yi();
      };
  }, [
    t
  ]);
}
function xy() {
  return St(Kn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Kn(document.documentElement, "overflow", "hidden"));
}
function Dy() {
  let e, t, n = (s) => {
    e = ze(s.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = Kn(e, "overscrollBehavior", "contain"));
  }, r = (s) => {
    if (!e || e === document.documentElement || e === document.body) {
      s.preventDefault();
      return;
    }
    e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && s.preventDefault();
  }, a = (s) => {
    let d = s.target;
    ns(d) && d !== document.activeElement && (s.preventDefault(), o(), d.style.transform = "translateY(-2000px)", d.focus(), requestAnimationFrame(() => {
      d.style.transform = "";
    })), t && t();
  }, i = (s) => {
    let d = s.target;
    ns(d) && (o(), d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", qi && (qi.height < window.innerHeight ? requestAnimationFrame(() => {
        ts(d);
      }) : qi.addEventListener("resize", () => ts(d), {
        once: !0
      }));
    }));
  }, l = null, o = () => {
    if (l)
      return;
    let s = () => {
      window.scrollTo(0, 0);
    }, d = window.pageXOffset, c = window.pageYOffset;
    l = St(nr(window, "scroll", s), Kn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Kn(document.documentElement, "overflow", "hidden"), Kn(document.body, "marginTop", `-${c}px`), () => {
      window.scrollTo(d, c);
    }), window.scrollTo(0, 0);
  }, u = St(nr(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), nr(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), nr(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), nr(document, "focus", i, !0));
  return () => {
    t == null || t(), l == null || l(), u();
  };
}
function Kn(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function nr(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function ts(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = ze(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top;
      a > r + e.clientHeight && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function ns(e) {
  return e instanceof HTMLInputElement && !yy.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const Sl = /* @__PURE__ */ h.createContext(null);
function Cy(e) {
  let { children: t } = e, n = U(Sl), [r, a] = Z(0), i = K(() => ({
    parent: n,
    modalCount: r,
    addModal() {
      a((l) => l + 1), n && n.addModal();
    },
    removeModal() {
      a((l) => l - 1), n && n.removeModal();
    }
  }), [
    n,
    r
  ]);
  return /* @__PURE__ */ h.createElement(Sl.Provider, {
    value: i
  }, t);
}
function Ey() {
  let e = U(Sl);
  return {
    modalProviderProps: {
      "aria-hidden": e && e.modalCount > 0 ? !0 : null
    }
  };
}
function Py(e) {
  let { modalProviderProps: t } = Ey();
  return /* @__PURE__ */ h.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...t
  });
}
function wy(e) {
  return /* @__PURE__ */ h.createElement(Cy, null, /* @__PURE__ */ h.createElement(Py, e));
}
function Sy(e) {
  let t = Bt(), { portalContainer: n = t ? null : document.body, ...r } = e;
  if (h.useEffect(() => {
    if (n != null && n.closest("[data-overlay-container]"))
      throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
  }, [
    n
  ]), !n)
    return null;
  let a = /* @__PURE__ */ h.createElement(wy, r);
  return /* @__PURE__ */ Rr.createPortal(a, n);
}
var Tc = {}, Mc = {};
Mc = {
  dismiss: "تجاهل"
};
var Rc = {};
Rc = {
  dismiss: "Отхвърляне"
};
var Ic = {};
Ic = {
  dismiss: "Odstranit"
};
var Nc = {};
Nc = {
  dismiss: "Luk"
};
var Kc = {};
Kc = {
  dismiss: "Schließen"
};
var zc = {};
zc = {
  dismiss: "Απόρριψη"
};
var Vc = {};
Vc = {
  dismiss: "Dismiss"
};
var Lc = {};
Lc = {
  dismiss: "Descartar"
};
var Oc = {};
Oc = {
  dismiss: "Lõpeta"
};
var jc = {};
jc = {
  dismiss: "Hylkää"
};
var Hc = {};
Hc = {
  dismiss: "Rejeter"
};
var _c = {};
_c = {
  dismiss: "התעלם"
};
var Uc = {};
Uc = {
  dismiss: "Odbaci"
};
var Wc = {};
Wc = {
  dismiss: "Elutasítás"
};
var Gc = {};
Gc = {
  dismiss: "Ignora"
};
var Zc = {};
Zc = {
  dismiss: "閉じる"
};
var qc = {};
qc = {
  dismiss: "무시"
};
var Yc = {};
Yc = {
  dismiss: "Atmesti"
};
var Jc = {};
Jc = {
  dismiss: "Nerādīt"
};
var Xc = {};
Xc = {
  dismiss: "Lukk"
};
var Qc = {};
Qc = {
  dismiss: "Negeren"
};
var ef = {};
ef = {
  dismiss: "Zignoruj"
};
var tf = {};
tf = {
  dismiss: "Descartar"
};
var nf = {};
nf = {
  dismiss: "Dispensar"
};
var rf = {};
rf = {
  dismiss: "Revocare"
};
var af = {};
af = {
  dismiss: "Пропустить"
};
var lf = {};
lf = {
  dismiss: "Zrušiť"
};
var of = {};
of = {
  dismiss: "Opusti"
};
var uf = {};
uf = {
  dismiss: "Odbaci"
};
var sf = {};
sf = {
  dismiss: "Avvisa"
};
var df = {};
df = {
  dismiss: "Kapat"
};
var cf = {};
cf = {
  dismiss: "Скасувати"
};
var ff = {};
ff = {
  dismiss: "取消"
};
var bf = {};
bf = {
  dismiss: "關閉"
};
Tc = {
  "ar-AE": Mc,
  "bg-BG": Rc,
  "cs-CZ": Ic,
  "da-DK": Nc,
  "de-DE": Kc,
  "el-GR": zc,
  "en-US": Vc,
  "es-ES": Lc,
  "et-EE": Oc,
  "fi-FI": jc,
  "fr-FR": Hc,
  "he-IL": _c,
  "hr-HR": Uc,
  "hu-HU": Wc,
  "it-IT": Gc,
  "ja-JP": Zc,
  "ko-KR": qc,
  "lt-LT": Yc,
  "lv-LV": Jc,
  "nb-NO": Xc,
  "nl-NL": Qc,
  "pl-PL": ef,
  "pt-BR": tf,
  "pt-PT": nf,
  "ro-RO": rf,
  "ru-RU": af,
  "sk-SK": lf,
  "sl-SI": of,
  "sr-SP": uf,
  "sv-SE": sf,
  "tr-TR": df,
  "uk-UA": cf,
  "zh-CN": ff,
  "zh-TW": bf
};
function Bl(e) {
  let { onDismiss: t, ...n } = e, r = Pe(/* @__PURE__ */ uy(Tc), "@react-aria/overlays"), a = Ot(n, r.format("dismiss")), i = () => {
    t && t();
  };
  return /* @__PURE__ */ h.createElement(oy, null, /* @__PURE__ */ h.createElement("button", {
    ...a,
    tabIndex: -1,
    onClick: i,
    style: {
      width: 1,
      height: 1
    }
  }));
}
let rr = /* @__PURE__ */ new WeakMap(), it = [];
function yo(e, t = document.body) {
  let n = new Set(e), r = /* @__PURE__ */ new Set(), a = (u) => {
    for (let b of u.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))
      n.add(b);
    let s = (b) => {
      if (n.has(b) || r.has(b.parentElement) && b.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let f of n)
        if (b.contains(f))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, d = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
      acceptNode: s
    }), c = s(u);
    if (c === NodeFilter.FILTER_ACCEPT && i(u), c !== NodeFilter.FILTER_REJECT) {
      let b = d.nextNode();
      for (; b != null; )
        i(b), b = d.nextNode();
    }
  }, i = (u) => {
    var s;
    let d = (s = rr.get(u)) !== null && s !== void 0 ? s : 0;
    u.getAttribute("aria-hidden") === "true" && d === 0 || (d === 0 && u.setAttribute("aria-hidden", "true"), r.add(u), rr.set(u, d + 1));
  };
  it.length && it[it.length - 1].disconnect(), a(t);
  let l = new MutationObserver((u) => {
    for (let s of u)
      if (!(s.type !== "childList" || s.addedNodes.length === 0) && ![
        ...n,
        ...r
      ].some((d) => d.contains(s.target))) {
        for (let d of s.removedNodes)
          d instanceof Element && (n.delete(d), r.delete(d));
        for (let d of s.addedNodes)
          (d instanceof HTMLElement || d instanceof SVGElement) && (d.dataset.liveAnnouncer === "true" || d.dataset.reactAriaTopLayer === "true") ? n.add(d) : d instanceof Element && a(d);
      }
  });
  l.observe(t, {
    childList: !0,
    subtree: !0
  });
  let o = {
    observe() {
      l.observe(t, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      l.disconnect();
    }
  };
  return it.push(o), () => {
    l.disconnect();
    for (let u of r) {
      let s = rr.get(u);
      s === 1 ? (u.removeAttribute("aria-hidden"), rr.delete(u)) : rr.set(u, s - 1);
    }
    o === it[it.length - 1] ? (it.pop(), it.length && it[it.length - 1].observe()) : it.splice(it.indexOf(o), 1);
  };
}
function By(e, t) {
  let { triggerRef: n, popoverRef: r, isNonModal: a, isKeyboardDismissDisabled: i, shouldCloseOnInteractOutside: l, ...o } = e, { overlayProps: u, underlayProps: s } = Fc({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !a,
    isKeyboardDismissDisabled: i,
    shouldCloseOnInteractOutside: l
  }, r), { overlayProps: d, arrowProps: c, placement: b } = kc({
    ...o,
    targetRef: n,
    overlayRef: r,
    isOpen: t.isOpen,
    onClose: a ? t.close : null
  });
  return Ac({
    isDisabled: a || !t.isOpen
  }), fe(() => {
    if (t.isOpen && !a && r.current)
      return yo([
        r.current
      ]);
  }, [
    a,
    t.isOpen,
    r
  ]), {
    popoverProps: j(u, d),
    arrowProps: c,
    underlayProps: s,
    placement: b
  };
}
const pf = /* @__PURE__ */ h.createContext(null);
function mf(e) {
  let t = Bt(), { portalContainer: n = t ? null : document.body, isExiting: r } = e, [a, i] = Z(!1), l = K(() => ({
    contain: a,
    setContain: i
  }), [
    a,
    i
  ]);
  if (!n)
    return null;
  let o = e.children;
  return e.disableFocusManagement || (o = /* @__PURE__ */ h.createElement(Vr, {
    restoreFocus: !0,
    contain: a && !r
  }, o)), o = /* @__PURE__ */ h.createElement(pf.Provider, {
    value: l
  }, /* @__PURE__ */ h.createElement(a$, null, o)), /* @__PURE__ */ Rr.createPortal(o, n);
}
function hf() {
  let e = U(pf), t = e == null ? void 0 : e.setContain;
  fe(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function ky(e, t, n) {
  let { overlayProps: r, underlayProps: a } = Fc({
    ...e,
    isOpen: t.isOpen,
    onClose: t.close
  }, n);
  return Ac({
    isDisabled: !t.isOpen
  }), hf(), J(() => {
    if (t.isOpen)
      return yo([
        n.current
      ]);
  }, [
    t.isOpen,
    n
  ]), {
    modalProps: j(r),
    underlayProps: a
  };
}
function kl(e) {
  return ga() ? e.altKey : e.ctrlKey;
}
function Mn(e) {
  return Lt() ? e.metaKey : e.ctrlKey;
}
const Fy = 1e3;
function vf(e) {
  let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e, a = I({
    search: "",
    timeout: null
  }).current, i = (l) => {
    let o = Ay(l.key);
    if (!o || l.ctrlKey || l.metaKey || !l.currentTarget.contains(l.target))
      return;
    o === " " && a.search.trim().length > 0 && (l.preventDefault(), "continuePropagation" in l || l.stopPropagation()), a.search += o;
    let u = t.getKeyForSearch(a.search, n.focusedKey);
    u == null && (u = t.getKeyForSearch(a.search)), u != null && (n.setFocusedKey(u), r && r(u)), clearTimeout(a.timeout), a.timeout = setTimeout(() => {
      a.search = "";
    }, Fy);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: t.getKeyForSearch ? i : null
    }
  };
}
function Ay(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function ui(e) {
  let { selectionManager: t, keyboardDelegate: n, ref: r, autoFocus: a = !1, shouldFocusWrap: i = !1, disallowEmptySelection: l = !1, disallowSelectAll: o = !1, selectOnFocus: u = t.selectionBehavior === "replace", disallowTypeAhead: s = !1, shouldUseVirtualFocus: d, allowsTabNavigation: c = !1, isVirtualized: b, scrollRef: f = r, linkBehavior: p = "action" } = e, { direction: m } = oe(), v = Nr(), y = (F) => {
    if (F.altKey && F.key === "Tab" && F.preventDefault(), !r.current.contains(F.target))
      return;
    const E = (L, V) => {
      if (L != null) {
        if (t.isLink(L) && p === "selection" && u && !kl(F)) {
          og(() => {
            t.setFocusedKey(L, V);
          });
          let N = f.current.querySelector(`[data-key="${CSS.escape(L.toString())}"]`);
          v.open(N, F);
          return;
        }
        if (t.setFocusedKey(L, V), t.isLink(L) && p === "override")
          return;
        F.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(L) : u && !kl(F) && t.replaceSelection(L);
      }
    };
    switch (F.key) {
      case "ArrowDown":
        if (n.getKeyBelow) {
          var S, w;
          F.preventDefault();
          let L = t.focusedKey != null ? n.getKeyBelow(t.focusedKey) : (S = n.getFirstKey) === null || S === void 0 ? void 0 : S.call(n);
          L == null && i && (L = (w = n.getFirstKey) === null || w === void 0 ? void 0 : w.call(n, t.focusedKey)), E(L);
        }
        break;
      case "ArrowUp":
        if (n.getKeyAbove) {
          var A, z;
          F.preventDefault();
          let L = t.focusedKey != null ? n.getKeyAbove(t.focusedKey) : (A = n.getLastKey) === null || A === void 0 ? void 0 : A.call(n);
          L == null && i && (L = (z = n.getLastKey) === null || z === void 0 ? void 0 : z.call(n, t.focusedKey)), E(L);
        }
        break;
      case "ArrowLeft":
        if (n.getKeyLeftOf) {
          var T, D;
          F.preventDefault();
          let L = n.getKeyLeftOf(t.focusedKey);
          L == null && i && (L = m === "rtl" ? (T = n.getFirstKey) === null || T === void 0 ? void 0 : T.call(n, t.focusedKey) : (D = n.getLastKey) === null || D === void 0 ? void 0 : D.call(n, t.focusedKey)), E(L, m === "rtl" ? "first" : "last");
        }
        break;
      case "ArrowRight":
        if (n.getKeyRightOf) {
          var H, _;
          F.preventDefault();
          let L = n.getKeyRightOf(t.focusedKey);
          L == null && i && (L = m === "rtl" ? (H = n.getLastKey) === null || H === void 0 ? void 0 : H.call(n, t.focusedKey) : (_ = n.getFirstKey) === null || _ === void 0 ? void 0 : _.call(n, t.focusedKey)), E(L, m === "rtl" ? "last" : "first");
        }
        break;
      case "Home":
        if (n.getFirstKey) {
          F.preventDefault();
          let L = n.getFirstKey(t.focusedKey, Mn(F));
          t.setFocusedKey(L), Mn(F) && F.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(L) : u && t.replaceSelection(L);
        }
        break;
      case "End":
        if (n.getLastKey) {
          F.preventDefault();
          let L = n.getLastKey(t.focusedKey, Mn(F));
          t.setFocusedKey(L), Mn(F) && F.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(L) : u && t.replaceSelection(L);
        }
        break;
      case "PageDown":
        if (n.getKeyPageBelow) {
          F.preventDefault();
          let L = n.getKeyPageBelow(t.focusedKey);
          E(L);
        }
        break;
      case "PageUp":
        if (n.getKeyPageAbove) {
          F.preventDefault();
          let L = n.getKeyPageAbove(t.focusedKey);
          E(L);
        }
        break;
      case "a":
        Mn(F) && t.selectionMode === "multiple" && o !== !0 && (F.preventDefault(), t.selectAll());
        break;
      case "Escape":
        F.preventDefault(), l || t.clearSelection();
        break;
      case "Tab":
        if (!c) {
          if (F.shiftKey)
            r.current.focus();
          else {
            let L = Ne(r.current, {
              tabbable: !0
            }), V, N;
            do
              N = L.lastChild(), N && (V = N);
            while (N);
            V && !V.contains(document.activeElement) && yt(V);
          }
          break;
        }
    }
  }, $ = I({
    top: 0,
    left: 0
  });
  Jt(f, "scroll", b ? null : () => {
    $.current = {
      top: f.current.scrollTop,
      left: f.current.scrollLeft
    };
  });
  let x = (F) => {
    if (t.isFocused) {
      F.currentTarget.contains(F.target) || t.setFocused(!1);
      return;
    }
    if (F.currentTarget.contains(F.target)) {
      if (t.setFocused(!0), t.focusedKey == null) {
        let w = (z) => {
          z != null && (t.setFocusedKey(z), u && t.replaceSelection(z));
        }, A = F.relatedTarget;
        var E, S;
        A && F.currentTarget.compareDocumentPosition(A) & Node.DOCUMENT_POSITION_FOLLOWING ? w((E = t.lastSelectedKey) !== null && E !== void 0 ? E : n.getLastKey()) : w((S = t.firstSelectedKey) !== null && S !== void 0 ? S : n.getFirstKey());
      } else
        b || (f.current.scrollTop = $.current.top, f.current.scrollLeft = $.current.left);
      if (!b && t.focusedKey != null) {
        let w = f.current.querySelector(`[data-key="${CSS.escape(t.focusedKey.toString())}"]`);
        w && (w.contains(document.activeElement) || yt(w), Fa() === "keyboard" && Oe(w, {
          containingElement: r.current
        }));
      }
    }
  }, C = (F) => {
    F.currentTarget.contains(F.relatedTarget) || t.setFocused(!1);
  };
  const P = I(a);
  J(() => {
    if (P.current) {
      let F = null;
      a === "first" && (F = n.getFirstKey()), a === "last" && (F = n.getLastKey());
      let E = t.selectedKeys;
      if (E.size) {
        for (let S of E)
          if (t.canSelectItem(S)) {
            F = S;
            break;
          }
      }
      t.setFocused(!0), t.setFocusedKey(F), F == null && !d && Ce(r.current);
    }
  }, []);
  let B = I(t.focusedKey);
  J(() => {
    let F = Fa();
    if (t.isFocused && t.focusedKey != null && (f != null && f.current)) {
      let E = f.current.querySelector(`[data-key="${CSS.escape(t.focusedKey.toString())}"]`);
      E && (F === "keyboard" || P.current) && (b || Ys(f.current, E), F !== "virtual" && Oe(E, {
        containingElement: r.current
      }));
    }
    t.isFocused && t.focusedKey == null && B.current != null && Ce(r.current), B.current = t.focusedKey, P.current = !1;
  }, [
    b,
    f,
    t.focusedKey,
    t.isFocused,
    r
  ]);
  let R = {
    onKeyDown: y,
    onFocus: x,
    onBlur: C,
    onMouseDown(F) {
      f.current === F.target && F.preventDefault();
    }
  }, { typeSelectProps: g } = vf({
    keyboardDelegate: n,
    selectionManager: t
  });
  s || (R = j(g, R));
  let M;
  return d || (M = t.focusedKey == null ? 0 : -1), {
    collectionProps: {
      ...R,
      tabIndex: M
    }
  };
}
function Yn(e) {
  let { selectionManager: t, key: n, ref: r, shouldSelectOnPressUp: a, shouldUseVirtualFocus: i, focus: l, isDisabled: o, onAction: u, allowsDifferentPressOrigin: s, linkBehavior: d = "action" } = e, c = Nr(), b = (D) => {
    if (D.pointerType === "keyboard" && kl(D))
      t.toggleSelection(n);
    else {
      if (t.selectionMode === "none")
        return;
      if (t.isLink(n)) {
        if (d === "selection") {
          c.open(r.current, D), t.setSelectedKeys(t.selectedKeys);
          return;
        } else if (d === "override" || d === "none")
          return;
      }
      t.selectionMode === "single" ? t.isSelected(n) && !t.disallowEmptySelection ? t.toggleSelection(n) : t.replaceSelection(n) : D && D.shiftKey ? t.extendSelection(n) : t.selectionBehavior === "toggle" || D && (Mn(D) || D.pointerType === "touch" || D.pointerType === "virtual") ? t.toggleSelection(n) : t.replaceSelection(n);
    }
  };
  J(() => {
    n === t.focusedKey && t.isFocused && !i && (l ? l() : document.activeElement !== r.current && Ce(r.current));
  }, [
    r,
    n,
    t.focusedKey,
    t.childFocusStrategy,
    t.isFocused,
    i
  ]), o = o || t.isDisabled(n);
  let f = {};
  !i && !o ? f = {
    tabIndex: n === t.focusedKey ? 0 : -1,
    onFocus(D) {
      D.target === r.current && t.setFocusedKey(n);
    }
  } : o && (f.onMouseDown = (D) => {
    D.preventDefault();
  });
  let p = t.isLink(n) && d === "override", m = t.isLink(n) && d !== "selection" && d !== "none", v = !o && t.canSelectItem(n) && !p, y = (u || m) && !o, $ = y && (t.selectionBehavior === "replace" ? !v : !v || t.isEmpty), x = y && v && t.selectionBehavior === "replace", C = $ || x, P = I(null), B = C && v, R = I(!1), g = I(!1), M = (D) => {
    u && u(), m && c.open(r.current, D);
  }, F = {};
  a ? (F.onPressStart = (D) => {
    P.current = D.pointerType, R.current = B, D.pointerType === "keyboard" && (!C || as()) && b(D);
  }, s ? (F.onPressUp = $ ? null : (D) => {
    D.pointerType !== "keyboard" && v && b(D);
  }, F.onPress = $ ? M : null) : F.onPress = (D) => {
    if ($ || x && D.pointerType !== "mouse") {
      if (D.pointerType === "keyboard" && !rs())
        return;
      M(D);
    } else
      D.pointerType !== "keyboard" && v && b(D);
  }) : (F.onPressStart = (D) => {
    P.current = D.pointerType, R.current = B, g.current = $, v && (D.pointerType === "mouse" && !$ || D.pointerType === "keyboard" && (!y || as())) && b(D);
  }, F.onPress = (D) => {
    (D.pointerType === "touch" || D.pointerType === "pen" || D.pointerType === "virtual" || D.pointerType === "keyboard" && C && rs() || D.pointerType === "mouse" && g.current) && (C ? M(D) : v && b(D));
  }), f["data-key"] = n, F.preventFocusOnPress = i;
  let { pressProps: E, isPressed: S } = Je(F), w = x ? (D) => {
    P.current === "mouse" && (D.stopPropagation(), D.preventDefault(), M(D));
  } : void 0, { longPressProps: A } = id({
    isDisabled: !B,
    onLongPress(D) {
      D.pointerType === "touch" && (b(D), t.setSelectionBehavior("toggle"));
    }
  }), z = (D) => {
    P.current === "touch" && R.current && D.preventDefault();
  }, T = t.isLink(n) ? (D) => {
    hn.isOpening || D.preventDefault();
  } : void 0;
  return {
    itemProps: j(f, v || $ ? E : {}, B ? A : {}, {
      onDoubleClick: w,
      onDragStartCapture: z,
      onClick: T
    }),
    isPressed: S,
    isSelected: t.isSelected(n),
    isFocused: t.isFocused && t.focusedKey === n,
    isDisabled: o,
    allowsSelection: v,
    hasAction: C
  };
}
function rs() {
  let e = window.event;
  return (e == null ? void 0 : e.key) === "Enter";
}
function as() {
  let e = window.event;
  return (e == null ? void 0 : e.key) === " " || (e == null ? void 0 : e.code) === "Space";
}
class En {
  getNextKey(t) {
    for (t = this.collection.getKeyAfter(t); t != null; ) {
      if (this.collection.getItem(t).type === "item" && !this.disabledKeys.has(t))
        return t;
      t = this.collection.getKeyAfter(t);
    }
    return null;
  }
  getPreviousKey(t) {
    for (t = this.collection.getKeyBefore(t); t != null; ) {
      if (this.collection.getItem(t).type === "item" && !this.disabledKeys.has(t))
        return t;
      t = this.collection.getKeyBefore(t);
    }
    return null;
  }
  findKey(t, n, r) {
    let a = this.getItem(t);
    if (!a)
      return null;
    let i = a.getBoundingClientRect();
    do
      t = n(t), a = this.getItem(t);
    while (a && r(i, a.getBoundingClientRect()));
    return t;
  }
  isSameRow(t, n) {
    return t.top === n.top || t.left !== n.left;
  }
  isSameColumn(t, n) {
    return t.left === n.left || t.top !== n.top;
  }
  getKeyBelow(t) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(t, (n) => this.getNextKey(n), this.isSameRow) : this.getNextKey(t);
  }
  getKeyAbove(t) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(t, (n) => this.getPreviousKey(n), this.isSameRow) : this.getPreviousKey(t);
  }
  getNextColumn(t, n) {
    return n ? this.getPreviousKey(t) : this.getNextKey(t);
  }
  getKeyRightOf(t) {
    return this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(t, this.direction === "rtl") : this.findKey(t, (n) => this.getNextColumn(n, this.direction === "rtl"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(t, this.direction === "rtl") : null;
  }
  getKeyLeftOf(t) {
    return this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(t, this.direction === "ltr") : this.findKey(t, (n) => this.getNextColumn(n, this.direction === "ltr"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(t, this.direction === "ltr") : null;
  }
  getFirstKey() {
    let t = this.collection.getFirstKey();
    for (; t != null; ) {
      let n = this.collection.getItem(t);
      if ((n == null ? void 0 : n.type) === "item" && !this.disabledKeys.has(t))
        return t;
      t = this.collection.getKeyAfter(t);
    }
    return null;
  }
  getLastKey() {
    let t = this.collection.getLastKey();
    for (; t != null; ) {
      if (this.collection.getItem(t).type === "item" && !this.disabledKeys.has(t))
        return t;
      t = this.collection.getKeyBefore(t);
    }
    return null;
  }
  getItem(t) {
    return this.ref.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`);
  }
  getKeyPageAbove(t) {
    let n = this.ref.current, r = this.getItem(t);
    if (!r)
      return null;
    if (!Sa(n))
      return this.getFirstKey();
    let a = n.getBoundingClientRect(), i = r.getBoundingClientRect();
    if (this.orientation === "horizontal") {
      let l = a.x - n.scrollLeft, o = Math.max(0, i.x - l + i.width - a.width);
      for (; r && i.x - l > o; )
        t = this.getKeyAbove(t), r = t == null ? null : this.getItem(t), i = r == null ? void 0 : r.getBoundingClientRect();
    } else {
      let l = a.y - n.scrollTop, o = Math.max(0, i.y - l + i.height - a.height);
      for (; r && i.y - l > o; )
        t = this.getKeyAbove(t), r = t == null ? null : this.getItem(t), i = r == null ? void 0 : r.getBoundingClientRect();
    }
    return t ?? this.getFirstKey();
  }
  getKeyPageBelow(t) {
    let n = this.ref.current, r = this.getItem(t);
    if (!r)
      return null;
    if (!Sa(n))
      return this.getLastKey();
    let a = n.getBoundingClientRect(), i = r.getBoundingClientRect();
    if (this.orientation === "horizontal") {
      let l = a.x - n.scrollLeft, o = Math.min(n.scrollWidth, i.x - l - i.width + a.width);
      for (; r && i.x - l < o; )
        t = this.getKeyBelow(t), r = t == null ? null : this.getItem(t), i = r == null ? void 0 : r.getBoundingClientRect();
    } else {
      let l = a.y - n.scrollTop, o = Math.min(n.scrollHeight, i.y - l - i.height + a.height);
      for (; r && i.y - l < o; )
        t = this.getKeyBelow(t), r = t == null ? null : this.getItem(t), i = r == null ? void 0 : r.getBoundingClientRect();
    }
    return t ?? this.getLastKey();
  }
  getKeyForSearch(t, n) {
    if (!this.collator)
      return null;
    let r = this.collection, a = n || this.getFirstKey();
    for (; a != null; ) {
      let i = r.getItem(a), l = i.textValue.slice(0, t.length);
      if (i.textValue && this.collator.compare(l, t) === 0)
        return a;
      a = this.getKeyBelow(a);
    }
    return null;
  }
  constructor(...t) {
    if (t.length === 1) {
      let n = t[0];
      this.collection = n.collection, this.ref = n.ref, this.collator = n.collator, this.disabledKeys = n.disabledKeys || /* @__PURE__ */ new Set(), this.orientation = n.orientation, this.direction = n.direction, this.layout = n.layout || "stack";
    } else
      this.collection = t[0], this.disabledKeys = t[1], this.ref = t[2], this.collator = t[3], this.layout = "stack", this.orientation = "vertical";
    this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
  }
}
function xo(e) {
  let { selectionManager: t, collection: n, disabledKeys: r, ref: a, keyboardDelegate: i } = e, l = qn({
    usage: "search",
    sensitivity: "base"
  }), o = t.disabledBehavior, u = K(() => i || new En(n, o === "selection" ? /* @__PURE__ */ new Set() : r, a, l), [
    i,
    n,
    r,
    a,
    l,
    o
  ]), { collectionProps: s } = ui({
    ...e,
    ref: a,
    selectionManager: t,
    keyboardDelegate: u
  });
  return {
    listProps: s
  };
}
class Ty {
  build(t, n) {
    return this.context = n, is(() => this.iterateCollection(t));
  }
  *iterateCollection(t) {
    let { children: n, items: r } = t;
    if (typeof n == "function") {
      if (!r)
        throw new Error("props.children was a function but props.items is missing");
      for (let a of t.items)
        yield* this.getFullNode({
          value: a
        }, {
          renderer: n
        });
    } else {
      let a = [];
      h.Children.forEach(n, (l) => {
        a.push(l);
      });
      let i = 0;
      for (let l of a) {
        let o = this.getFullNode({
          element: l,
          index: i
        }, {});
        for (let u of o)
          i++, yield u;
      }
    }
  }
  getKey(t, n, r, a) {
    if (t.key != null)
      return t.key;
    if (n.type === "cell" && n.key != null)
      return `${a}${n.key}`;
    let i = n.value;
    if (i != null) {
      var l;
      let o = (l = i.key) !== null && l !== void 0 ? l : i.id;
      if (o == null)
        throw new Error("No key found for item");
      return o;
    }
    return a ? `${a}.${n.index}` : `$.${n.index}`;
  }
  getChildState(t, n) {
    return {
      renderer: n.renderer || t.renderer
    };
  }
  *getFullNode(t, n, r, a) {
    let i = t.element;
    if (!i && t.value && n && n.renderer) {
      let u = this.cache.get(t.value);
      if (u && (!u.shouldInvalidate || !u.shouldInvalidate(this.context))) {
        u.index = t.index, u.parentKey = a ? a.key : null, yield u;
        return;
      }
      i = n.renderer(t.value);
    }
    if (h.isValidElement(i)) {
      let u = i.type;
      if (typeof u != "function" && typeof u.getCollectionNode != "function") {
        let b = typeof i.type == "function" ? i.type.name : i.type;
        throw new Error(`Unknown element <${b}> in collection.`);
      }
      let s = u.getCollectionNode(i.props, this.context), d = t.index, c = s.next();
      for (; !c.done && c.value; ) {
        let b = c.value;
        t.index = d;
        let f = b.key;
        f || (f = b.element ? null : this.getKey(i, t, n, r));
        let m = [
          ...this.getFullNode({
            ...b,
            key: f,
            index: d,
            wrapper: My(t.wrapper, b.wrapper)
          }, this.getChildState(n, b), r ? `${r}${i.key}` : i.key, a)
        ];
        for (let v of m) {
          if (v.value = b.value || t.value, v.value && this.cache.set(v.value, v), t.type && v.type !== t.type)
            throw new Error(`Unsupported type <${Ji(v.type)}> in <${Ji(a.type)}>. Only <${Ji(t.type)}> is supported.`);
          d++, yield v;
        }
        c = s.next(m);
      }
      return;
    }
    if (t.key == null)
      return;
    let l = this, o = {
      type: t.type,
      props: t.props,
      key: t.key,
      parentKey: a ? a.key : null,
      value: t.value,
      level: a ? a.level + 1 : 0,
      index: t.index,
      rendered: t.rendered,
      textValue: t.textValue,
      "aria-label": t["aria-label"],
      wrapper: t.wrapper,
      shouldInvalidate: t.shouldInvalidate,
      hasChildNodes: t.hasChildNodes,
      childNodes: is(function* () {
        if (!t.hasChildNodes)
          return;
        let u = 0;
        for (let s of t.childNodes()) {
          s.key != null && (s.key = `${o.key}${s.key}`), s.index = u;
          let d = l.getFullNode(s, l.getChildState(n, s), o.key, o);
          for (let c of d)
            u++, yield c;
        }
      })
    };
    yield o;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function is(e) {
  let t = [], n = null;
  return {
    *[Symbol.iterator]() {
      for (let r of t)
        yield r;
      n || (n = e());
      for (let r of n)
        t.push(r), yield r;
    }
  };
}
function My(e, t) {
  if (e && t)
    return (n) => e(t(n));
  if (e)
    return e;
  if (t)
    return t;
}
function Ji(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function Do(e, t, n) {
  let r = K(() => new Ty(), []), { children: a, items: i, collection: l } = e;
  return K(() => {
    if (l)
      return l;
    let u = r.build({
      children: a,
      items: i
    }, n);
    return t(u);
  }, [
    r,
    a,
    i,
    l,
    n,
    t
  ]);
}
function Se(e, t) {
  return typeof t.getChildren == "function" ? t.getChildren(e.key) : e.childNodes;
}
function It(e) {
  return qt(e, 0);
}
function qt(e, t) {
  if (t < 0)
    return;
  let n = 0;
  for (let r of e) {
    if (n === t)
      return r;
    n++;
  }
}
function Qt(e) {
  let t;
  for (let n of e)
    t = n;
  return t;
}
function Xi(e, t, n) {
  if (t.parentKey === n.parentKey)
    return t.index - n.index;
  let r = [
    ...ls(e, t),
    t
  ], a = [
    ...ls(e, n),
    n
  ], i = r.slice(0, a.length).findIndex((l, o) => l !== a[o]);
  return i !== -1 ? (t = r[i], n = a[i], t.index - n.index) : r.findIndex((l) => l === n) >= 0 ? 1 : (a.findIndex((l) => l === t) >= 0, -1);
}
function ls(e, t) {
  let n = [];
  for (; (t == null ? void 0 : t.parentKey) != null; )
    t = e.getItem(t.parentKey), n.unshift(t);
  return n;
}
const os = /* @__PURE__ */ new WeakMap();
function Co(e) {
  let t = os.get(e);
  if (t != null)
    return t;
  t = 0;
  let n = (r) => {
    for (let a of r)
      a.type === "section" ? n(Se(a, e)) : t++;
  };
  return n(e), os.set(e, t), t;
}
const si = /* @__PURE__ */ new WeakMap();
function Ry(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function gf(e, t) {
  let n = si.get(e);
  if (!n)
    throw new Error("Unknown list");
  return `${n.id}-option-${Ry(t)}`;
}
function Iy(e, t, n) {
  let r = Y(e, {
    labelable: !0
  }), a = e.selectionBehavior || "toggle", i = e.linkBehavior || (a === "replace" ? "action" : "override");
  a === "toggle" && i === "action" && (i = "override");
  let { listProps: l } = xo({
    ...e,
    ref: n,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    linkBehavior: i
  }), { focusWithinProps: o } = ft({
    onFocusWithin: e.onFocus,
    onBlurWithin: e.onBlur,
    onFocusWithinChange: e.onFocusChange
  }), u = be(e.id);
  si.set(t, {
    id: u,
    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
    shouldFocusOnHover: e.shouldFocusOnHover,
    isVirtualized: e.isVirtualized,
    onAction: e.onAction,
    linkBehavior: i
  });
  let { labelProps: s, fieldProps: d } = Ur({
    ...e,
    id: u,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: s,
    listBoxProps: j(r, o, t.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...j(d, l)
    })
  };
}
function Ny(e, t, n) {
  var r;
  let { key: a } = e, i = si.get(t);
  var l;
  let o = (l = e.isDisabled) !== null && l !== void 0 ? l : t.disabledKeys.has(a);
  var u;
  let s = (u = e.isSelected) !== null && u !== void 0 ? u : t.selectionManager.isSelected(a);
  var d;
  let c = (d = e.shouldSelectOnPressUp) !== null && d !== void 0 ? d : i == null ? void 0 : i.shouldSelectOnPressUp;
  var b;
  let f = (b = e.shouldFocusOnHover) !== null && b !== void 0 ? b : i == null ? void 0 : i.shouldFocusOnHover;
  var p;
  let m = (p = e.shouldUseVirtualFocus) !== null && p !== void 0 ? p : i == null ? void 0 : i.shouldUseVirtualFocus;
  var v;
  let y = (v = e.isVirtualized) !== null && v !== void 0 ? v : i == null ? void 0 : i.isVirtualized, $ = wt(), x = wt(), C = {
    role: "option",
    "aria-disabled": o || void 0,
    "aria-selected": t.selectionManager.selectionMode !== "none" ? s : void 0
  };
  Lt() && Yl() || (C["aria-label"] = e["aria-label"], C["aria-labelledby"] = $, C["aria-describedby"] = x);
  let P = t.collection.getItem(a);
  if (y) {
    let w = Number(P == null ? void 0 : P.index);
    C["aria-posinset"] = Number.isNaN(w) ? void 0 : w + 1, C["aria-setsize"] = Co(t.collection);
  }
  let { itemProps: B, isPressed: R, isFocused: g, hasAction: M, allowsSelection: F } = Yn({
    selectionManager: t.selectionManager,
    key: a,
    ref: n,
    shouldSelectOnPressUp: c,
    allowsDifferentPressOrigin: c && f,
    isVirtualized: y,
    shouldUseVirtualFocus: m,
    isDisabled: o,
    onAction: i != null && i.onAction ? () => {
      var w;
      return i == null || (w = i.onAction) === null || w === void 0 ? void 0 : w.call(i, a);
    } : void 0,
    linkBehavior: i == null ? void 0 : i.linkBehavior
  }), { hoverProps: E } = xe({
    isDisabled: o || !f,
    onHoverStart() {
      gn() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(a));
    }
  }), S = Y(P == null ? void 0 : P.props, {
    isLink: !!(!(P == null || (r = P.props) === null || r === void 0) && r.href)
  });
  return delete S.id, {
    optionProps: {
      ...C,
      ...j(S, B, E),
      id: gf(t, a)
    },
    labelProps: {
      id: $
    },
    descriptionProps: {
      id: x
    },
    isFocused: g,
    isFocusVisible: g && gn(),
    isSelected: s,
    isDisabled: o,
    isPressed: R,
    allowsSelection: F,
    hasAction: M
  };
}
function Ky(e) {
  let { heading: t, "aria-label": n } = e, r = be();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: t ? {
      // Techincally, listbox cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a visual label for the nested group.
      id: r,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": t ? r : void 0
    }
  };
}
function zy(e) {
  return e && e.__esModule ? e.default : e;
}
var $f = {}, yf = {};
yf = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var xf = {};
xf = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var Df = {};
Df = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var Cf = {};
Cf = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var Ef = {};
Ef = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var Pf = {};
Pf = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var wf = {};
wf = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var Sf = {};
Sf = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var Bf = {};
Bf = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var kf = {};
kf = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var Ff = {};
Ff = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var Af = {};
Af = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var Tf = {};
Tf = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var Mf = {};
Mf = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var Rf = {};
Rf = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var If = {};
If = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var Nf = {};
Nf = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var Kf = {};
Kf = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var zf = {};
zf = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var Vf = {};
Vf = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var Lf = {};
Lf = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var Of = {};
Of = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var jf = {};
jf = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var Hf = {};
Hf = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var _f = {};
_f = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var Uf = {};
Uf = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var Wf = {};
Wf = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var Gf = {};
Gf = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var Zf = {};
Zf = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var qf = {};
qf = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var Yf = {};
Yf = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var Jf = {};
Jf = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var Xf = {};
Xf = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var Qf = {};
Qf = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
$f = {
  "ar-AE": yf,
  "bg-BG": xf,
  "cs-CZ": Df,
  "da-DK": Cf,
  "de-DE": Ef,
  "el-GR": Pf,
  "en-US": wf,
  "es-ES": Sf,
  "et-EE": Bf,
  "fi-FI": kf,
  "fr-FR": Ff,
  "he-IL": Af,
  "hr-HR": Tf,
  "hu-HU": Mf,
  "it-IT": Rf,
  "ja-JP": If,
  "ko-KR": Nf,
  "lt-LT": Kf,
  "lv-LV": zf,
  "nb-NO": Vf,
  "nl-NL": Lf,
  "pl-PL": Of,
  "pt-BR": jf,
  "pt-PT": Hf,
  "ro-RO": _f,
  "ru-RU": Uf,
  "sk-SK": Wf,
  "sl-SI": Gf,
  "sr-SP": Zf,
  "sv-SE": qf,
  "tr-TR": Yf,
  "uk-UA": Jf,
  "zh-CN": Xf,
  "zh-TW": Qf
};
function e4(e, t, n) {
  let { type: r = "menu", isDisabled: a, trigger: i = "press" } = e, l = be(), { triggerProps: o, overlayProps: u } = $y({
    type: r
  }, t, n), s = (f) => {
    if (!a && !(i === "longPress" && !f.altKey) && n && n.current)
      switch (f.key) {
        case "Enter":
        case " ":
          if (i === "longPress")
            return;
        case "ArrowDown":
          "continuePropagation" in f || f.stopPropagation(), f.preventDefault(), t.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in f || f.stopPropagation(), f.preventDefault(), t.toggle("last");
          break;
        default:
          "continuePropagation" in f && f.continuePropagation();
      }
  }, d = Pe(/* @__PURE__ */ zy($f), "@react-aria/menu"), { longPressProps: c } = id({
    isDisabled: a || i !== "longPress",
    accessibilityDescription: d.format("longPressMessage"),
    onLongPressStart() {
      t.close();
    },
    onLongPress() {
      t.open("first");
    }
  }), b = {
    onPressStart(f) {
      f.pointerType !== "touch" && f.pointerType !== "keyboard" && !a && t.toggle(f.pointerType === "virtual" ? "first" : null);
    },
    onPress(f) {
      f.pointerType === "touch" && !a && t.toggle();
    }
  };
  return delete o.onPress, {
    menuTriggerProps: {
      ...o,
      ...i === "press" ? b : c,
      id: l,
      onKeyDown: s
    },
    menuProps: {
      ...u,
      "aria-labelledby": l,
      autoFocus: t.focusStrategy || !0,
      onClose: t.close
    }
  };
}
const t4 = /* @__PURE__ */ new WeakMap();
function Vy(e, t, n) {
  let { shouldFocusWrap: r = !0, onKeyDown: a, onKeyUp: i, ...l } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let o = Y(e, {
    labelable: !0
  }), { listProps: u } = xo({
    ...l,
    ref: n,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    shouldFocusWrap: r,
    linkBehavior: "override"
  });
  return t4.set(t, {
    onClose: e.onClose,
    onAction: e.onAction
  }), {
    menuProps: j(o, {
      onKeyDown: a,
      onKeyUp: i
    }, {
      role: "menu",
      ...u,
      onKeyDown: (s) => {
        s.key !== "Escape" && u.onKeyDown(s);
      }
    })
  };
}
function n4(e, t, n) {
  var r;
  let { key: a, closeOnSelect: i, isVirtualized: l, "aria-haspopup": o, onPressStart: u, onPressUp: s, onPress: d, onPressChange: c, onPressEnd: b, onHoverStart: f, onHoverChange: p, onHoverEnd: m, onKeyDown: v, onKeyUp: y, onFocus: $, onFocusChange: x, onBlur: C } = e, P = !!o;
  var B;
  let R = (B = e.isDisabled) !== null && B !== void 0 ? B : t.disabledKeys.has(a);
  var g;
  let M = (g = e.isSelected) !== null && g !== void 0 ? g : t.selectionManager.isSelected(a), F = t4.get(t), E = e.onClose || F.onClose, S = P ? () => {
  } : e.onAction || F.onAction, w = Nr(), A = (ae) => {
    S && S(a), ae.target instanceof HTMLAnchorElement && w.open(ae.target, ae);
  }, z = "menuitem";
  P || (t.selectionManager.selectionMode === "single" ? z = "menuitemradio" : t.selectionManager.selectionMode === "multiple" && (z = "menuitemcheckbox"));
  let T = wt(), D = wt(), H = wt(), _ = {
    "aria-disabled": R || void 0,
    role: z,
    "aria-label": e["aria-label"],
    "aria-labelledby": T,
    "aria-describedby": [
      D,
      H
    ].filter(Boolean).join(" ") || void 0,
    "aria-controls": e["aria-controls"],
    "aria-haspopup": o,
    "aria-expanded": e["aria-expanded"]
  };
  t.selectionManager.selectionMode !== "none" && !P && (_["aria-checked"] = M);
  let L = t.collection.getItem(a);
  l && (_["aria-posinset"] = L == null ? void 0 : L.index, _["aria-setsize"] = Co(t.collection));
  let V = (ae) => {
    ae.pointerType === "keyboard" && A(ae), u == null || u(ae);
  }, N = (ae) => {
    ae.pointerType !== "keyboard" && (A(ae), !P && E && (i ?? (t.selectionManager.selectionMode !== "multiple" || t.selectionManager.isLink(a))) && E()), s == null || s(ae);
  }, { itemProps: G, isFocused: re } = Yn({
    selectionManager: t.selectionManager,
    key: a,
    ref: n,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    // Disable all handling of links in useSelectable item
    // because we handle it ourselves. The behavior of menus
    // is slightly different from other collections because
    // actions are performed on key down rather than key up.
    linkBehavior: "none"
  }), { pressProps: se, isPressed: we } = Je({
    onPressStart: V,
    onPress: d,
    onPressUp: N,
    onPressChange: c,
    onPressEnd: b,
    isDisabled: R
  }), { hoverProps: O } = xe({
    isDisabled: R,
    onHoverStart(ae) {
      gn() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(a)), f == null || f(ae);
    },
    onHoverChange: p,
    onHoverEnd: m
  }), { keyboardProps: X } = ei({
    onKeyDown: (ae) => {
      if (ae.repeat) {
        ae.continuePropagation();
        return;
      }
      switch (ae.key) {
        case " ":
          !R && t.selectionManager.selectionMode === "none" && !P && i !== !1 && E && E();
          break;
        case "Enter":
          !R && i !== !1 && !P && E && E();
          break;
        default:
          P || ae.continuePropagation(), v == null || v(ae);
          break;
      }
    },
    onKeyUp: y
  }), { focusProps: ce } = Xa({
    onBlur: C,
    onFocus: $,
    onFocusChange: x
  }), De = Y(L.props, {
    isLink: !!(!(L == null || (r = L.props) === null || r === void 0) && r.href)
  });
  return delete De.id, {
    menuItemProps: {
      ..._,
      ...j(De, P ? {
        onFocus: G.onFocus
      } : G, se, O, X, ce),
      tabIndex: G.tabIndex != null ? -1 : void 0
    },
    labelProps: {
      id: T
    },
    descriptionProps: {
      id: D
    },
    keyboardShortcutProps: {
      id: H
    },
    isFocused: re,
    isSelected: M,
    isPressed: we,
    isDisabled: R
  };
}
function Ly(e) {
  let { heading: t, "aria-label": n } = e, r = be();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: t ? {
      // Techincally, menus cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a label for the nested group.
      id: r,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": t ? r : void 0
    }
  };
}
const ma = 2, Oy = 50, jy = 1e3, us = Math.PI / 12;
function Hy(e) {
  let { menuRef: t, submenuRef: n, isOpen: r, isDisabled: a } = e, i = I(), l = I(), o = I(0), u = I(), s = I(), d = I(), c = I(2), [b, f] = Z(!1);
  Kr({
    ref: n,
    onResize: () => {
      n.current && (l.current = n.current.getBoundingClientRect(), d.current = void 0);
    }
  });
  let m = () => {
    f(!1), c.current = ma;
  }, v = zr();
  J(() => {
    b && t.current ? t.current.style.pointerEvents = "none" : t.current.style.pointerEvents = "";
  }, [
    t,
    b
  ]), J(() => {
    let y = n.current, $ = t.current;
    if (a || !y || !r || v !== "pointer") {
      m();
      return;
    }
    l.current = y.getBoundingClientRect();
    let x = (C) => {
      if (C.pointerType === "touch" || C.pointerType === "pen")
        return;
      let P = Date.now();
      if (P - o.current < Oy)
        return;
      clearTimeout(u.current), clearTimeout(s.current);
      let { clientX: B, clientY: R } = C;
      if (!i.current) {
        i.current = {
          x: B,
          y: R
        };
        return;
      }
      if (!l.current)
        return;
      if (d.current || (d.current = B > l.current.right ? "left" : "right"), B < $.getBoundingClientRect().left || B > $.getBoundingClientRect().right || R < $.getBoundingClientRect().top || R > $.getBoundingClientRect().bottom) {
        m();
        return;
      }
      let g = i.current.x, M = i.current.y, F = d.current === "right" ? l.current.left - g : g - l.current.right, E = Math.atan2(M - l.current.top, F) + us, S = Math.atan2(M - l.current.bottom, F) - us, w = Math.atan2(M - R, d.current === "left" ? -(B - g) : B - g), A = w < E && w > S;
      c.current = A ? Math.min(c.current + 1, ma) : Math.max(c.current - 1, 0), c.current >= ma ? f(!0) : f(!1), o.current = P, i.current = {
        x: B,
        y: R
      }, A && (u.current = setTimeout(() => {
        m(), s.current = setTimeout(() => {
          let z = document.elementFromPoint(B, R);
          z && $.contains(z) && z.dispatchEvent(new PointerEvent("pointerover", {
            bubbles: !0,
            cancelable: !0
          }));
        }, 100);
      }, jy));
    };
    return window.addEventListener("pointermove", x), () => {
      window.removeEventListener("pointermove", x), clearTimeout(u.current), clearTimeout(s.current), c.current = ma;
    };
  }, [
    a,
    r,
    t,
    v,
    f,
    n
  ]);
}
function _y(e, t, n) {
  let { parentMenuRef: r, submenuRef: a, type: i = "menu", isDisabled: l, node: o, delay: u = 200 } = e, s = be(), d = be(), { direction: c } = oe(), b = I(), f = ee(() => {
    b.current && (clearTimeout(b.current), b.current = void 0);
  }, [
    b
  ]), p = ye((g) => {
    f(), t.open(g);
  }), m = ye(() => {
    f(), t.close();
  });
  fe(() => () => {
    f();
  }, [
    f
  ]);
  let v = (g) => {
    switch (g.key) {
      case "ArrowLeft":
        c === "ltr" && g.currentTarget.contains(g.target) && (g.stopPropagation(), m(), n.current.focus());
        break;
      case "ArrowRight":
        c === "rtl" && g.currentTarget.contains(g.target) && (g.stopPropagation(), m(), n.current.focus());
        break;
      case "Escape":
        g.stopPropagation(), t.closeAll();
        break;
    }
  }, y = {
    id: d,
    "aria-label": o.textValue,
    submenuLevel: t.submenuLevel,
    ...i === "menu" && {
      onClose: t.closeAll,
      autoFocus: t.focusStrategy,
      onKeyDown: v
    }
  }, $ = (g) => {
    switch (g.key) {
      case "ArrowRight":
        l || (c === "ltr" ? (t.isOpen || p("first"), i === "menu" && (a != null && a.current) && document.activeElement === (n == null ? void 0 : n.current) && a.current.focus()) : t.isOpen ? m() : g.continuePropagation());
        break;
      case "ArrowLeft":
        l || (c === "rtl" ? (t.isOpen || p("first"), i === "menu" && (a != null && a.current) && document.activeElement === (n == null ? void 0 : n.current) && a.current.focus()) : t.isOpen ? m() : g.continuePropagation());
        break;
      case "Escape":
        t.closeAll();
        break;
      default:
        g.continuePropagation();
        break;
    }
  }, x = (g) => {
    !l && (g.pointerType === "virtual" || g.pointerType === "keyboard") && p("first");
  }, C = (g) => {
    !l && (g.pointerType === "touch" || g.pointerType === "mouse") && p();
  }, P = (g) => {
    l || (g && !t.isOpen ? b.current || (b.current = setTimeout(() => {
      p();
    }, u)) : g || f());
  }, B = (g) => {
    t.isOpen && r.current.contains(g.relatedTarget) && m();
  }, R = (g) => g !== n.current;
  return Hy({
    menuRef: r,
    submenuRef: a,
    isOpen: t.isOpen,
    isDisabled: l
  }), {
    submenuTriggerProps: {
      id: s,
      "aria-controls": t.isOpen ? d : void 0,
      "aria-haspopup": l ? void 0 : i,
      "aria-expanded": t.isOpen ? "true" : "false",
      onPressStart: x,
      onPress: C,
      onHoverChange: P,
      onKeyDown: $,
      onBlur: B,
      isOpen: t.isOpen
    },
    submenuProps: y,
    popoverProps: {
      isNonModal: !0,
      disableFocusManagement: !0,
      shouldCloseOnInteractOutside: R
    }
  };
}
function di(e, t) {
  let { inputElementType: n = "input", isDisabled: r = !1, isRequired: a = !1, isReadOnly: i = !1, type: l = "text", validationBehavior: o = "aria" } = e, [u, s] = Ke(e.value, e.defaultValue || "", e.onChange), { focusableProps: d } = Dn(e, t), c = Dt({
    ...e,
    value: u
  }), { isInvalid: b, validationErrors: f, validationDetails: p } = c.displayValidation, { labelProps: m, fieldProps: v, descriptionProps: y, errorMessageProps: $ } = an({
    ...e,
    isInvalid: b,
    errorMessage: e.errorMessage || f
  }), x = Y(e, {
    labelable: !0
  });
  const C = {
    type: l,
    pattern: e.pattern
  };
  return xn(t, u, s), _r(e, c, t), J(() => {
    if (t.current instanceof st(t.current).HTMLTextAreaElement) {
      let P = t.current;
      Object.defineProperty(P, "defaultValue", {
        get: () => P.value,
        set: () => {
        },
        configurable: !0
      });
    }
  }, [
    t
  ]), {
    labelProps: m,
    inputProps: j(x, n === "input" && C, {
      disabled: r,
      readOnly: i,
      required: a && o === "native",
      "aria-required": a && o === "aria" || void 0,
      "aria-invalid": b || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-activedescendant": e["aria-activedescendant"],
      "aria-autocomplete": e["aria-autocomplete"],
      "aria-haspopup": e["aria-haspopup"],
      value: u,
      onChange: (P) => s(P.target.value),
      autoComplete: e.autoComplete,
      autoCapitalize: e.autoCapitalize,
      maxLength: e.maxLength,
      minLength: e.minLength,
      name: e.name,
      placeholder: e.placeholder,
      inputMode: e.inputMode,
      // Clipboard events
      onCopy: e.onCopy,
      onCut: e.onCut,
      onPaste: e.onPaste,
      // Composition events
      onCompositionEnd: e.onCompositionEnd,
      onCompositionStart: e.onCompositionStart,
      onCompositionUpdate: e.onCompositionUpdate,
      // Selection events
      onSelect: e.onSelect,
      // Input events
      onBeforeInput: e.onBeforeInput,
      onInput: e.onInput,
      ...d,
      ...v
    }),
    descriptionProps: y,
    errorMessageProps: $,
    isInvalid: b,
    validationErrors: f,
    validationDetails: p
  };
}
function ss() {
  return typeof window < "u" && window.InputEvent && // @ts-ignore
  typeof InputEvent.prototype.getTargetRanges == "function";
}
function Uy(e, t, n) {
  let r = ye((c) => {
    let b = n.current, f;
    switch (c.inputType) {
      case "historyUndo":
      case "historyRedo":
        return;
      case "deleteContent":
      case "deleteByCut":
      case "deleteByDrag":
        f = b.value.slice(0, b.selectionStart) + b.value.slice(b.selectionEnd);
        break;
      case "deleteContentForward":
        f = b.selectionEnd === b.selectionStart ? b.value.slice(0, b.selectionStart) + b.value.slice(b.selectionEnd + 1) : b.value.slice(0, b.selectionStart) + b.value.slice(b.selectionEnd);
        break;
      case "deleteContentBackward":
        f = b.selectionEnd === b.selectionStart ? b.value.slice(0, b.selectionStart - 1) + b.value.slice(b.selectionStart) : b.value.slice(0, b.selectionStart) + b.value.slice(b.selectionEnd);
        break;
      case "deleteSoftLineBackward":
      case "deleteHardLineBackward":
        f = b.value.slice(b.selectionStart);
        break;
      default:
        c.data != null && (f = b.value.slice(0, b.selectionStart) + c.data + b.value.slice(b.selectionEnd));
        break;
    }
    (f == null || !t.validate(f)) && c.preventDefault();
  });
  J(() => {
    if (!ss())
      return;
    let c = n.current;
    return c.addEventListener("beforeinput", r, !1), () => {
      c.removeEventListener("beforeinput", r, !1);
    };
  }, [
    n,
    r
  ]);
  let a = ss() ? null : (c) => {
    let b = c.target.value.slice(0, c.target.selectionStart) + c.data + c.target.value.slice(c.target.selectionEnd);
    t.validate(b) || c.preventDefault();
  }, { labelProps: i, inputProps: l, descriptionProps: o, errorMessageProps: u, ...s } = di(e, n), d = I(null);
  return {
    inputProps: j(l, {
      onBeforeInput: a,
      onCompositionStart() {
        let { value: c, selectionStart: b, selectionEnd: f } = n.current;
        d.current = {
          value: c,
          selectionStart: b,
          selectionEnd: f
        };
      },
      onCompositionEnd() {
        if (!t.validate(n.current.value)) {
          let { value: c, selectionStart: b, selectionEnd: f } = d.current;
          n.current.value = c, n.current.setSelectionRange(b, f), t.setInputValue(c);
        }
      }
    }),
    labelProps: i,
    descriptionProps: o,
    errorMessageProps: u,
    ...s
  };
}
function Wy(e) {
  return e && e.__esModule ? e.default : e;
}
var r4 = {}, a4 = {};
a4 = {
  buttonLabel: "عرض المقترحات",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} خيار`,
    other: () => `${t.number(e.optionCount)} خيارات`
  })} متاحة.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `المجموعة المدخلة ${e.groupTitle}, مع ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} خيار`,
      other: () => `${t.number(e.groupCount)} خيارات`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", محدد",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "مقترحات",
  selectedAnnouncement: (e) => `${e.optionText}، محدد`
};
var i4 = {};
i4 = {
  buttonLabel: "Покажи предложения",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} опция`,
    other: () => `${t.number(e.optionCount)} опции`
  })} на разположение.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Въведена група ${e.groupTitle}, с ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} опция`,
      other: () => `${t.number(e.groupCount)} опции`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", избрани",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (e) => `${e.optionText}, избрани`
};
var l4 = {};
l4 = {
  buttonLabel: "Zobrazit doporučení",
  countAnnouncement: (e, t) => `K dispozici ${t.plural(e.optionCount, {
    one: () => `je ${t.number(e.optionCount)} možnost`,
    other: () => `jsou/je ${t.number(e.optionCount)} možnosti/-í`
  })}.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Zadaná skupina „${e.groupTitle}“ ${t.plural(e.groupCount, {
      one: () => `s ${t.number(e.groupCount)} možností`,
      other: () => `se ${t.number(e.groupCount)} možnostmi`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: " (vybráno)",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (e) => `${e.optionText}, vybráno`
};
var o4 = {};
o4 = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} mulighed tilgængelig`,
    other: () => `${t.number(e.optionCount)} muligheder tilgængelige`
  })}.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} mulighed`,
      other: () => `${t.number(e.groupCount)} muligheder`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", valgt",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var u4 = {};
u4 = {
  buttonLabel: "Empfehlungen anzeigen",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} Option`,
    other: () => `${t.number(e.optionCount)} Optionen`
  })} verfügbar.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} Option`,
      other: () => `${t.number(e.groupCount)} Optionen`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", ausgewählt",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Empfehlungen",
  selectedAnnouncement: (e) => `${e.optionText}, ausgewählt`
};
var s4 = {};
s4 = {
  buttonLabel: "Προβολή προτάσεων",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} επιλογή`,
    other: () => `${t.number(e.optionCount)} επιλογές `
  })} διαθέσιμες.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Εισαγμένη ομάδα ${e.groupTitle}, με ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} επιλογή`,
      other: () => `${t.number(e.groupCount)} επιλογές`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", επιλεγμένο",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Προτάσεις",
  selectedAnnouncement: (e) => `${e.optionText}, επιλέχθηκε`
};
var d4 = {};
d4 = {
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Entered group ${e.groupTitle}, with ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} option`,
      other: () => `${t.number(e.groupCount)} options`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", selected",
    other: ""
  }, e.isSelected)}`,
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} option`,
    other: () => `${t.number(e.optionCount)} options`
  })} available.`,
  selectedAnnouncement: (e) => `${e.optionText}, selected`,
  buttonLabel: "Show suggestions",
  listboxLabel: "Suggestions"
};
var c4 = {};
c4 = {
  buttonLabel: "Mostrar sugerencias",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opción`,
    other: () => `${t.number(e.optionCount)} opciones`
  })} disponible(s).`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opción`,
      other: () => `${t.number(e.groupCount)} opciones`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", seleccionado",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugerencias",
  selectedAnnouncement: (e) => `${e.optionText}, seleccionado`
};
var f4 = {};
f4 = {
  buttonLabel: "Kuva soovitused",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} valik`,
    other: () => `${t.number(e.optionCount)} valikud`
  })} saadaval.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Sisestatud rühm ${e.groupTitle}, valikuga ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} valik`,
      other: () => `${t.number(e.groupCount)} valikud`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", valitud",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Soovitused",
  selectedAnnouncement: (e) => `${e.optionText}, valitud`
};
var b4 = {};
b4 = {
  buttonLabel: "Näytä ehdotukset",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} vaihtoehto`,
    other: () => `${t.number(e.optionCount)} vaihtoehdot`
  })} saatavilla.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Mentiin ryhmään ${e.groupTitle}, ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} vaihtoehdon`,
      other: () => `${t.number(e.groupCount)} vaihtoehdon`
    })} kanssa.`,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", valittu",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Ehdotukset",
  selectedAnnouncement: (e) => `${e.optionText}, valittu`
};
var p4 = {};
p4 = {
  buttonLabel: "Afficher les suggestions",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} option`,
    other: () => `${t.number(e.optionCount)} options`
  })} disponible(s).`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} option`,
      other: () => `${t.number(e.groupCount)} options`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", sélectionné(s)",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Suggestions",
  selectedAnnouncement: (e) => `${e.optionText}, sélectionné`
};
var m4 = {};
m4 = {
  buttonLabel: "הצג הצעות",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `אפשרות ${t.number(e.optionCount)}`,
    other: () => `${t.number(e.optionCount)} אפשרויות`
  })} במצב זמין.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `נכנס לקבוצה ${e.groupTitle}, עם ${t.plural(e.groupCount, {
      one: () => `אפשרות ${t.number(e.groupCount)}`,
      other: () => `${t.number(e.groupCount)} אפשרויות`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", נבחר",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "הצעות",
  selectedAnnouncement: (e) => `${e.optionText}, נבחר`
};
var h4 = {};
h4 = {
  buttonLabel: "Prikaži prijedloge",
  countAnnouncement: (e, t) => `Dostupno još: ${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opcija`,
    other: () => `${t.number(e.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opcijom`,
      other: () => `${t.number(e.groupCount)} opcije/a`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", odabranih",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Prijedlozi",
  selectedAnnouncement: (e) => `${e.optionText}, odabrano`
};
var v4 = {};
v4 = {
  buttonLabel: "Javaslatok megjelenítése",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} lehetőség`,
    other: () => `${t.number(e.optionCount)} lehetőség`
  })} áll rendelkezésre.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Belépett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} lehetőséget`,
      other: () => `${t.number(e.groupCount)} lehetőséget`
    })} tartalmaz. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", kijelölve",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Javaslatok",
  selectedAnnouncement: (e) => `${e.optionText}, kijelölve`
};
var g4 = {};
g4 = {
  buttonLabel: "Mostra suggerimenti",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opzione disponibile`,
    other: () => `${t.number(e.optionCount)} opzioni disponibili`
  })}.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opzione`,
      other: () => `${t.number(e.groupCount)} opzioni`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", selezionato",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Suggerimenti",
  selectedAnnouncement: (e) => `${e.optionText}, selezionato`
};
var $4 = {};
$4 = {
  buttonLabel: "候補を表示",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} 個のオプション`,
    other: () => `${t.number(e.optionCount)} 個のオプション`
  })}を利用できます。`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `入力されたグループ ${e.groupTitle}、${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} 個のオプション`,
      other: () => `${t.number(e.groupCount)} 個のオプション`
    })}を含む。`,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: "、選択済み",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "候補",
  selectedAnnouncement: (e) => `${e.optionText}、選択済み`
};
var y4 = {};
y4 = {
  buttonLabel: "제안 사항 표시",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)}개 옵션`,
    other: () => `${t.number(e.optionCount)}개 옵션`
  })}을 사용할 수 있습니다.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `입력한 그룹 ${e.groupTitle}, ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)}개 옵션`,
      other: () => `${t.number(e.groupCount)}개 옵션`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", 선택됨",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "제안",
  selectedAnnouncement: (e) => `${e.optionText}, 선택됨`
};
var x4 = {};
x4 = {
  buttonLabel: "Rodyti pasiūlymus",
  countAnnouncement: (e, t) => `Yra ${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} parinktis`,
    other: () => `${t.number(e.optionCount)} parinktys (-ių)`
  })}.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Įvesta grupė ${e.groupTitle}, su ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} parinktimi`,
      other: () => `${t.number(e.groupCount)} parinktimis (-ių)`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", pasirinkta",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Pasiūlymai",
  selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`
};
var D4 = {};
D4 = {
  buttonLabel: "Rādīt ieteikumus",
  countAnnouncement: (e, t) => `Pieejamo opciju skaits: ${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opcija`,
    other: () => `${t.number(e.optionCount)} opcijas`
  })}.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Ievadīta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opciju`,
      other: () => `${t.number(e.groupCount)} opcijām`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", atlasīta",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Ieteikumi",
  selectedAnnouncement: (e) => `${e.optionText}, atlasīta`
};
var C4 = {};
C4 = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} alternativ`,
    other: () => `${t.number(e.optionCount)} alternativer`
  })} finnes.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} alternativ`,
      other: () => `${t.number(e.groupCount)} alternativer`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", valgt",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var E4 = {};
E4 = {
  buttonLabel: "Suggesties weergeven",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} optie`,
    other: () => `${t.number(e.optionCount)} opties`
  })} beschikbaar.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} optie`,
      other: () => `${t.number(e.groupCount)} opties`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", geselecteerd",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Suggesties",
  selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`
};
var P4 = {};
P4 = {
  buttonLabel: "Wyświetlaj sugestie",
  countAnnouncement: (e, t) => `dostępna/dostępne(-nych) ${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opcja`,
    other: () => `${t.number(e.optionCount)} opcje(-i)`
  })}.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Dołączono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opcją`,
      other: () => `${t.number(e.groupCount)} opcjami`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", wybrano",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestie",
  selectedAnnouncement: (e) => `${e.optionText}, wybrano`
};
var w4 = {};
w4 = {
  buttonLabel: "Mostrar sugestões",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opção`,
    other: () => `${t.number(e.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opção`,
      other: () => `${t.number(e.groupCount)} opções`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", selecionado",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var S4 = {};
S4 = {
  buttonLabel: "Apresentar sugestões",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opção`,
    other: () => `${t.number(e.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opção`,
      other: () => `${t.number(e.groupCount)} opções`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", selecionado",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var B4 = {};
B4 = {
  buttonLabel: "Afișare sugestii",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opțiune`,
    other: () => `${t.number(e.optionCount)} opțiuni`
  })} disponibile.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opțiune`,
      other: () => `${t.number(e.groupCount)} opțiuni`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", selectat",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestii",
  selectedAnnouncement: (e) => `${e.optionText}, selectat`
};
var k4 = {};
k4 = {
  buttonLabel: "Показать предложения",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} параметр`,
    other: () => `${t.number(e.optionCount)} параметров`
  })} доступно.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Введенная группа ${e.groupTitle}, с ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} параметром`,
      other: () => `${t.number(e.groupCount)} параметрами`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", выбранными",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (e) => `${e.optionText}, выбрано`
};
var F4 = {};
F4 = {
  buttonLabel: "Zobraziť návrhy",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} možnosť`,
    other: () => `${t.number(e.optionCount)} možnosti/-í`
  })} k dispozícii.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Zadaná skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} možnosťou`,
      other: () => `${t.number(e.groupCount)} možnosťami`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", vybraté",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (e) => `${e.optionText}, vybraté`
};
var A4 = {};
A4 = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (e, t) => `Na voljo je ${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opcija`,
    other: () => `${t.number(e.optionCount)} opcije`
  })}.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opcija`,
      other: () => `${t.number(e.groupCount)} opcije`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", izbrano",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Predlogi",
  selectedAnnouncement: (e) => `${e.optionText}, izbrano`
};
var T4 = {};
T4 = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (e, t) => `Dostupno još: ${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} opcija`,
    other: () => `${t.number(e.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} opcijom`,
      other: () => `${t.number(e.groupCount)} optione/a`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", izabranih",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Predlozi",
  selectedAnnouncement: (e) => `${e.optionText}, izabrano`
};
var M4 = {};
M4 = {
  buttonLabel: "Visa förslag",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} alternativ`,
    other: () => `${t.number(e.optionCount)} alternativ`
  })} tillgängliga.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} alternativ`,
      other: () => `${t.number(e.groupCount)} alternativ`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", valda",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Förslag",
  selectedAnnouncement: (e) => `${e.optionText}, valda`
};
var R4 = {};
R4 = {
  buttonLabel: "Önerileri göster",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} seçenek`,
    other: () => `${t.number(e.optionCount)} seçenekler`
  })} kullanılabilir.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} seçenek`,
      other: () => `${t.number(e.groupCount)} seçenekler`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", seçildi",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Öneriler",
  selectedAnnouncement: (e) => `${e.optionText}, seçildi`
};
var I4 = {};
I4 = {
  buttonLabel: "Показати пропозиції",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} параметр`,
    other: () => `${t.number(e.optionCount)} параметри(-ів)`
  })} доступно.`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `Введена група ${e.groupTitle}, з ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} параметр`,
      other: () => `${t.number(e.groupCount)} параметри(-ів)`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", вибрано",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Пропозиції",
  selectedAnnouncement: (e) => `${e.optionText}, вибрано`
};
var N4 = {};
N4 = {
  buttonLabel: "显示建议",
  countAnnouncement: (e, t) => `有 ${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} 个选项`,
    other: () => `${t.number(e.optionCount)} 个选项`
  })}可用。`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `进入了 ${e.groupTitle} 组，其中有 ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} 个选项`,
      other: () => `${t.number(e.groupCount)} 个选项`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", 已选择",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "建议",
  selectedAnnouncement: (e) => `${e.optionText}, 已选择`
};
var K4 = {};
K4 = {
  buttonLabel: "顯示建議",
  countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
    one: () => `${t.number(e.optionCount)} 選項`,
    other: () => `${t.number(e.optionCount)} 選項`
  })} 可用。`,
  focusAnnouncement: (e, t) => `${t.select({
    true: () => `輸入的群組 ${e.groupTitle}, 有 ${t.plural(e.groupCount, {
      one: () => `${t.number(e.groupCount)} 選項`,
      other: () => `${t.number(e.groupCount)} 選項`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${t.select({
    true: ", 已選取",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "建議",
  selectedAnnouncement: (e) => `${e.optionText}, 已選取`
};
r4 = {
  "ar-AE": a4,
  "bg-BG": i4,
  "cs-CZ": l4,
  "da-DK": o4,
  "de-DE": u4,
  "el-GR": s4,
  "en-US": d4,
  "es-ES": c4,
  "et-EE": f4,
  "fi-FI": b4,
  "fr-FR": p4,
  "he-IL": m4,
  "hr-HR": h4,
  "hu-HU": v4,
  "it-IT": g4,
  "ja-JP": $4,
  "ko-KR": y4,
  "lt-LT": x4,
  "lv-LV": D4,
  "nb-NO": C4,
  "nl-NL": E4,
  "pl-PL": P4,
  "pt-BR": w4,
  "pt-PT": S4,
  "ro-RO": B4,
  "ru-RU": k4,
  "sk-SK": F4,
  "sl-SI": A4,
  "sr-SP": T4,
  "sv-SE": M4,
  "tr-TR": R4,
  "uk-UA": I4,
  "zh-CN": N4,
  "zh-TW": K4
};
function Gy(e, t) {
  let { buttonRef: n, popoverRef: r, inputRef: a, listBoxRef: i, keyboardDelegate: l, shouldFocusWrap: o, isReadOnly: u, isDisabled: s } = e, d = Pe(/* @__PURE__ */ Wy(r4), "@react-aria/combobox"), { menuTriggerProps: c, menuProps: b } = e4({
    type: "listbox",
    isDisabled: s || u
  }, t, n);
  si.set(t, {
    id: b.id
  });
  let f = K(() => l || new En(t.collection, t.disabledKeys, i), [
    l,
    t.collection,
    t.disabledKeys,
    i
  ]), { collectionProps: p } = ui({
    selectionManager: t.selectionManager,
    keyboardDelegate: f,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: o,
    ref: a,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), m = Nr(), v = (O) => {
    switch (O.key) {
      case "Enter":
      case "Tab":
        if (t.isOpen && O.key === "Enter" && O.preventDefault(), t.isOpen && t.selectionManager.focusedKey != null && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
          if (O.key === "Enter") {
            let X = i.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
            X instanceof HTMLAnchorElement && m.open(X, O);
          }
          t.close();
        } else
          t.commit();
        break;
      case "Escape":
        (t.selectedKey !== null || t.inputValue === "" || e.allowsCustomValue) && O.continuePropagation(), t.revert();
        break;
      case "ArrowDown":
        t.open("first", "manual");
        break;
      case "ArrowUp":
        t.open("last", "manual");
        break;
      case "ArrowLeft":
      case "ArrowRight":
        t.selectionManager.setFocusedKey(null);
        break;
    }
  }, y = (O) => {
    var X;
    O.relatedTarget === (n == null ? void 0 : n.current) || !((X = r.current) === null || X === void 0) && X.contains(O.relatedTarget) || (e.onBlur && e.onBlur(O), t.setFocused(!1));
  }, $ = (O) => {
    t.isFocused || (e.onFocus && e.onFocus(O), t.setFocused(!0));
  }, { isInvalid: x, validationErrors: C, validationDetails: P } = t.displayValidation, { labelProps: B, inputProps: R, descriptionProps: g, errorMessageProps: M } = di({
    ...e,
    onChange: t.setInputValue,
    onKeyDown: u ? e.onKeyDown : St(t.isOpen && p.onKeyDown, v, e.onKeyDown),
    onBlur: y,
    value: t.inputValue,
    onFocus: $,
    autoComplete: "off",
    validate: void 0,
    [tn]: t
  }, a), F = (O) => {
    O.pointerType === "touch" && (a.current.focus(), t.toggle(null, "manual"));
  }, E = (O) => {
    O.pointerType !== "touch" && (a.current.focus(), t.toggle(O.pointerType === "keyboard" || O.pointerType === "virtual" ? "first" : null, "manual"));
  }, S = Ot({
    id: c.id,
    "aria-label": d.format("buttonLabel"),
    "aria-labelledby": e["aria-labelledby"] || B.id
  }), w = Ot({
    id: b.id,
    "aria-label": d.format("listboxLabel"),
    "aria-labelledby": e["aria-labelledby"] || B.id
  }), A = I(0), z = (O) => {
    if (s || u)
      return;
    if (O.timeStamp - A.current < 500) {
      O.preventDefault(), a.current.focus();
      return;
    }
    let X = O.target.getBoundingClientRect(), ce = O.changedTouches[0], De = Math.ceil(X.left + 0.5 * X.width), ae = Math.ceil(X.top + 0.5 * X.height);
    ce.clientX === De && ce.clientY === ae && (O.preventDefault(), a.current.focus(), t.toggle(null, "manual"), A.current = O.timeStamp);
  }, T = t.selectionManager.focusedKey != null && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0;
  var D;
  let H = (D = T == null ? void 0 : T.parentKey) !== null && D !== void 0 ? D : null;
  var _;
  let L = (_ = t.selectionManager.focusedKey) !== null && _ !== void 0 ? _ : null, V = I(H), N = I(L);
  J(() => {
    if (ga() && T != null && L !== N.current) {
      let O = t.selectionManager.isSelected(L), X = H != null ? t.collection.getItem(H) : null, ce = (X == null ? void 0 : X["aria-label"]) || (typeof (X == null ? void 0 : X.rendered) == "string" ? X.rendered : "") || "", De = d.format("focusAnnouncement", {
        isGroupChange: X && H !== V.current,
        groupTitle: ce,
        groupCount: X ? [
          ...Se(X, t.collection)
        ].length : 0,
        optionText: T["aria-label"] || T.textValue || "",
        isSelected: O
      });
      en(De);
    }
    V.current = H, N.current = L;
  });
  let G = Co(t.collection), re = I(G), se = I(t.isOpen);
  J(() => {
    let O = t.isOpen !== se.current && (t.selectionManager.focusedKey == null || ga());
    if (t.isOpen && (O || G !== re.current)) {
      let X = d.format("countAnnouncement", {
        optionCount: G
      });
      en(X);
    }
    re.current = G, se.current = t.isOpen;
  });
  let we = I(t.selectedKey);
  return J(() => {
    if (ga() && t.isFocused && t.selectedItem && t.selectedKey !== we.current) {
      let O = t.selectedItem["aria-label"] || t.selectedItem.textValue || "", X = d.format("selectedAnnouncement", {
        optionText: O
      });
      en(X);
    }
    we.current = t.selectedKey;
  }), J(() => {
    if (t.isOpen)
      return yo([
        a.current,
        r.current
      ]);
  }, [
    t.isOpen,
    a,
    r
  ]), {
    labelProps: B,
    buttonProps: {
      ...c,
      ...S,
      excludeFromTabOrder: !0,
      onPress: F,
      onPressStart: E,
      isDisabled: s || u
    },
    inputProps: j(R, {
      role: "combobox",
      "aria-expanded": c["aria-expanded"],
      "aria-controls": t.isOpen ? b.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": T ? gf(t, T.key) : void 0,
      onTouchEnd: z,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: j(b, w, {
      autoFocus: t.focusStrategy,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: g,
    errorMessageProps: M,
    isInvalid: x,
    validationErrors: C,
    validationDetails: P
  };
}
function Zy(e) {
  return e && e.__esModule ? e.default : e;
}
var z4 = {}, V4 = {};
V4 = {
  Empty: "فارغ"
};
var L4 = {};
L4 = {
  Empty: "Изпразни"
};
var O4 = {};
O4 = {
  Empty: "Prázdné"
};
var j4 = {};
j4 = {
  Empty: "Tom"
};
var H4 = {};
H4 = {
  Empty: "Leer"
};
var _4 = {};
_4 = {
  Empty: "Άδειο"
};
var U4 = {};
U4 = {
  Empty: "Empty"
};
var W4 = {};
W4 = {
  Empty: "Vacío"
};
var G4 = {};
G4 = {
  Empty: "Tühjenda"
};
var Z4 = {};
Z4 = {
  Empty: "Tyhjä"
};
var q4 = {};
q4 = {
  Empty: "Vide"
};
var Y4 = {};
Y4 = {
  Empty: "ריק"
};
var J4 = {};
J4 = {
  Empty: "Prazno"
};
var X4 = {};
X4 = {
  Empty: "Üres"
};
var Q4 = {};
Q4 = {
  Empty: "Vuoto"
};
var e0 = {};
e0 = {
  Empty: "空"
};
var t0 = {};
t0 = {
  Empty: "비어 있음"
};
var n0 = {};
n0 = {
  Empty: "Tuščias"
};
var r0 = {};
r0 = {
  Empty: "Tukšs"
};
var a0 = {};
a0 = {
  Empty: "Tom"
};
var i0 = {};
i0 = {
  Empty: "Leeg"
};
var l0 = {};
l0 = {
  Empty: "Pusty"
};
var o0 = {};
o0 = {
  Empty: "Vazio"
};
var u0 = {};
u0 = {
  Empty: "Vazio"
};
var s0 = {};
s0 = {
  Empty: "Gol"
};
var d0 = {};
d0 = {
  Empty: "Не заполнено"
};
var c0 = {};
c0 = {
  Empty: "Prázdne"
};
var f0 = {};
f0 = {
  Empty: "Prazen"
};
var b0 = {};
b0 = {
  Empty: "Prazno"
};
var p0 = {};
p0 = {
  Empty: "Tomt"
};
var m0 = {};
m0 = {
  Empty: "Boş"
};
var h0 = {};
h0 = {
  Empty: "Пусто"
};
var v0 = {};
v0 = {
  Empty: "空"
};
var g0 = {};
g0 = {
  Empty: "空白"
};
z4 = {
  "ar-AE": V4,
  "bg-BG": L4,
  "cs-CZ": O4,
  "da-DK": j4,
  "de-DE": H4,
  "el-GR": _4,
  "en-US": U4,
  "es-ES": W4,
  "et-EE": G4,
  "fi-FI": Z4,
  "fr-FR": q4,
  "he-IL": Y4,
  "hr-HR": J4,
  "hu-HU": X4,
  "it-IT": Q4,
  "ja-JP": e0,
  "ko-KR": t0,
  "lt-LT": n0,
  "lv-LV": r0,
  "nb-NO": a0,
  "nl-NL": i0,
  "pl-PL": l0,
  "pt-BR": o0,
  "pt-PT": u0,
  "ro-RO": s0,
  "ru-RU": d0,
  "sk-SK": c0,
  "sl-SI": f0,
  "sr-SP": b0,
  "sv-SE": p0,
  "tr-TR": m0,
  "uk-UA": h0,
  "zh-CN": v0,
  "zh-TW": g0
};
function $0(e) {
  const t = I();
  let { value: n, textValue: r, minValue: a, maxValue: i, isDisabled: l, isReadOnly: o, isRequired: u, onIncrement: s, onIncrementPage: d, onDecrement: c, onDecrementPage: b, onDecrementToMin: f, onIncrementToMax: p } = e;
  const m = Pe(/* @__PURE__ */ Zy(z4), "@react-aria/spinbutton"), v = () => clearTimeout(t.current);
  J(() => () => v(), []);
  let y = (E) => {
    if (!(E.ctrlKey || E.metaKey || E.shiftKey || E.altKey || o))
      switch (E.key) {
        case "PageUp":
          if (d) {
            E.preventDefault(), d == null || d();
            break;
          }
        case "ArrowUp":
        case "Up":
          s && (E.preventDefault(), s == null || s());
          break;
        case "PageDown":
          if (b) {
            E.preventDefault(), b == null || b();
            break;
          }
        case "ArrowDown":
        case "Down":
          c && (E.preventDefault(), c == null || c());
          break;
        case "Home":
          f && (E.preventDefault(), f == null || f());
          break;
        case "End":
          p && (E.preventDefault(), p == null || p());
          break;
      }
  }, $ = I(!1), x = () => {
    $.current = !0;
  }, C = () => {
    $.current = !1;
  }, P = r === "" ? m.format("Empty") : (r || `${n}`).replace("-", "−");
  J(() => {
    $.current && (W1("assertive"), en(P, "assertive"));
  }, [
    P
  ]);
  const B = ye((E) => {
    v(), s == null || s(), t.current = window.setTimeout(() => {
      (i === void 0 || isNaN(i) || n === void 0 || isNaN(n) || n < i) && B(60);
    }, E);
  }), R = ye((E) => {
    v(), c == null || c(), t.current = window.setTimeout(() => {
      (a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n > a) && R(60);
    }, E);
  });
  let g = (E) => {
    E.preventDefault();
  }, { addGlobalListener: M, removeAllGlobalListeners: F } = Zn();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": n !== void 0 && !isNaN(n) ? n : void 0,
      "aria-valuetext": P,
      "aria-valuemin": a,
      "aria-valuemax": i,
      "aria-disabled": l || void 0,
      "aria-readonly": o || void 0,
      "aria-required": u || void 0,
      onKeyDown: y,
      onFocus: x,
      onBlur: C
    },
    incrementButtonProps: {
      onPressStart: () => {
        B(400), M(window, "contextmenu", g);
      },
      onPressEnd: () => {
        v(), F();
      },
      onFocus: x,
      onBlur: C
    },
    decrementButtonProps: {
      onPressStart: () => {
        R(400), M(window, "contextmenu", g);
      },
      onPressEnd: () => {
        v(), F();
      },
      onFocus: x,
      onBlur: C
    }
  };
}
function ci(e) {
  return e && e.__esModule ? e.default : e;
}
var Wr = {}, y0 = {};
y0 = {
  calendar: "التقويم",
  day: "يوم",
  dayPeriod: "ص/م",
  endDate: "تاريخ الانتهاء",
  era: "العصر",
  hour: "الساعات",
  minute: "الدقائق",
  month: "الشهر",
  second: "الثواني",
  selectedDateDescription: (e) => `تاريخ محدد: ${e.date}`,
  selectedRangeDescription: (e) => `المدى الزمني المحدد: ${e.startDate} إلى ${e.endDate}`,
  selectedTimeDescription: (e) => `الوقت المحدد: ${e.time}`,
  startDate: "تاريخ البدء",
  timeZoneName: "التوقيت",
  weekday: "اليوم",
  year: "السنة"
};
var x0 = {};
x0 = {
  calendar: "Календар",
  day: "ден",
  dayPeriod: "пр.об./сл.об.",
  endDate: "Крайна дата",
  era: "ера",
  hour: "час",
  minute: "минута",
  month: "месец",
  second: "секунда",
  selectedDateDescription: (e) => `Избрана дата: ${e.date}`,
  selectedRangeDescription: (e) => `Избран диапазон: ${e.startDate} до ${e.endDate}`,
  selectedTimeDescription: (e) => `Избрано време: ${e.time}`,
  startDate: "Начална дата",
  timeZoneName: "часова зона",
  weekday: "ден от седмицата",
  year: "година"
};
var D0 = {};
D0 = {
  calendar: "Kalendář",
  day: "den",
  dayPeriod: "část dne",
  endDate: "Konečné datum",
  era: "letopočet",
  hour: "hodina",
  minute: "minuta",
  month: "měsíc",
  second: "sekunda",
  selectedDateDescription: (e) => `Vybrané datum: ${e.date}`,
  selectedRangeDescription: (e) => `Vybrané období: ${e.startDate} až ${e.endDate}`,
  selectedTimeDescription: (e) => `Vybraný čas: ${e.time}`,
  startDate: "Počáteční datum",
  timeZoneName: "časové pásmo",
  weekday: "den v týdnu",
  year: "rok"
};
var C0 = {};
C0 = {
  calendar: "Kalender",
  day: "dag",
  dayPeriod: "AM/PM",
  endDate: "Slutdato",
  era: "æra",
  hour: "time",
  minute: "minut",
  month: "måned",
  second: "sekund",
  selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
  selectedRangeDescription: (e) => `Valgt interval: ${e.startDate} til ${e.endDate}`,
  selectedTimeDescription: (e) => `Valgt tidspunkt: ${e.time}`,
  startDate: "Startdato",
  timeZoneName: "tidszone",
  weekday: "ugedag",
  year: "år"
};
var E0 = {};
E0 = {
  calendar: "Kalender",
  day: "Tag",
  dayPeriod: "Tageshälfte",
  endDate: "Enddatum",
  era: "Epoche",
  hour: "Stunde",
  minute: "Minute",
  month: "Monat",
  second: "Sekunde",
  selectedDateDescription: (e) => `Ausgewähltes Datum: ${e.date}`,
  selectedRangeDescription: (e) => `Ausgewählter Bereich: ${e.startDate} bis ${e.endDate}`,
  selectedTimeDescription: (e) => `Ausgewählte Zeit: ${e.time}`,
  startDate: "Anfangsdatum",
  timeZoneName: "Zeitzone",
  weekday: "Wochentag",
  year: "Jahr"
};
var P0 = {};
P0 = {
  calendar: "Ημερολόγιο",
  day: "ημέρα",
  dayPeriod: "π.μ./μ.μ.",
  endDate: "Ημερομηνία λήξης",
  era: "περίοδος",
  hour: "ώρα",
  minute: "λεπτό",
  month: "μήνας",
  second: "δευτερόλεπτο",
  selectedDateDescription: (e) => `Επιλεγμένη ημερομηνία: ${e.date}`,
  selectedRangeDescription: (e) => `Επιλεγμένο εύρος: ${e.startDate} έως ${e.endDate}`,
  selectedTimeDescription: (e) => `Επιλεγμένη ώρα: ${e.time}`,
  startDate: "Ημερομηνία έναρξης",
  timeZoneName: "ζώνη ώρας",
  weekday: "καθημερινή",
  year: "έτος"
};
var w0 = {};
w0 = {
  era: "era",
  year: "year",
  month: "month",
  day: "day",
  hour: "hour",
  minute: "minute",
  second: "second",
  dayPeriod: "AM/PM",
  calendar: "Calendar",
  startDate: "Start Date",
  endDate: "End Date",
  weekday: "day of the week",
  timeZoneName: "time zone",
  selectedDateDescription: (e) => `Selected Date: ${e.date}`,
  selectedRangeDescription: (e) => `Selected Range: ${e.startDate} to ${e.endDate}`,
  selectedTimeDescription: (e) => `Selected Time: ${e.time}`
};
var S0 = {};
S0 = {
  calendar: "Calendario",
  day: "día",
  dayPeriod: "a. m./p. m.",
  endDate: "Fecha final",
  era: "era",
  hour: "hora",
  minute: "minuto",
  month: "mes",
  second: "segundo",
  selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
  selectedRangeDescription: (e) => `Rango seleccionado: ${e.startDate} a ${e.endDate}`,
  selectedTimeDescription: (e) => `Hora seleccionada: ${e.time}`,
  startDate: "Fecha de inicio",
  timeZoneName: "zona horaria",
  weekday: "día de la semana",
  year: "año"
};
var B0 = {};
B0 = {
  calendar: "Kalender",
  day: "päev",
  dayPeriod: "enne/pärast lõunat",
  endDate: "Lõppkuupäev",
  era: "ajastu",
  hour: "tund",
  minute: "minut",
  month: "kuu",
  second: "sekund",
  selectedDateDescription: (e) => `Valitud kuupäev: ${e.date}`,
  selectedRangeDescription: (e) => `Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,
  selectedTimeDescription: (e) => `Valitud aeg: ${e.time}`,
  startDate: "Alguskuupäev",
  timeZoneName: "ajavöönd",
  weekday: "nädalapäev",
  year: "aasta"
};
var k0 = {};
k0 = {
  calendar: "Kalenteri",
  day: "päivä",
  dayPeriod: "vuorokaudenaika",
  endDate: "Päättymispäivä",
  era: "aikakausi",
  hour: "tunti",
  minute: "minuutti",
  month: "kuukausi",
  second: "sekunti",
  selectedDateDescription: (e) => `Valittu päivämäärä: ${e.date}`,
  selectedRangeDescription: (e) => `Valittu aikaväli: ${e.startDate} – ${e.endDate}`,
  selectedTimeDescription: (e) => `Valittu aika: ${e.time}`,
  startDate: "Alkamispäivä",
  timeZoneName: "aikavyöhyke",
  weekday: "viikonpäivä",
  year: "vuosi"
};
var F0 = {};
F0 = {
  calendar: "Calendrier",
  day: "jour",
  dayPeriod: "cadran",
  endDate: "Date de fin",
  era: "ère",
  hour: "heure",
  minute: "minute",
  month: "mois",
  second: "seconde",
  selectedDateDescription: (e) => `Date sélectionnée : ${e.date}`,
  selectedRangeDescription: (e) => `Plage sélectionnée : ${e.startDate} au ${e.endDate}`,
  selectedTimeDescription: (e) => `Heure choisie : ${e.time}`,
  startDate: "Date de début",
  timeZoneName: "fuseau horaire",
  weekday: "jour de la semaine",
  year: "année"
};
var A0 = {};
A0 = {
  calendar: "לוח שנה",
  day: "יום",
  dayPeriod: "לפנה״צ/אחה״צ",
  endDate: "תאריך סיום",
  era: "תקופה",
  hour: "שעה",
  minute: "דקה",
  month: "חודש",
  second: "שנייה",
  selectedDateDescription: (e) => `תאריך נבחר: ${e.date}`,
  selectedRangeDescription: (e) => `טווח נבחר: ${e.startDate} עד ${e.endDate}`,
  selectedTimeDescription: (e) => `זמן נבחר: ${e.time}`,
  startDate: "תאריך התחלה",
  timeZoneName: "אזור זמן",
  weekday: "יום בשבוע",
  year: "שנה"
};
var T0 = {};
T0 = {
  calendar: "Kalendar",
  day: "dan",
  dayPeriod: "AM/PM",
  endDate: "Datum završetka",
  era: "era",
  hour: "sat",
  minute: "minuta",
  month: "mjesec",
  second: "sekunda",
  selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
  selectedRangeDescription: (e) => `Odabrani raspon: ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Odabrano vrijeme: ${e.time}`,
  startDate: "Datum početka",
  timeZoneName: "vremenska zona",
  weekday: "dan u tjednu",
  year: "godina"
};
var M0 = {};
M0 = {
  calendar: "Naptár",
  day: "nap",
  dayPeriod: "napszak",
  endDate: "Befejező dátum",
  era: "éra",
  hour: "óra",
  minute: "perc",
  month: "hónap",
  second: "másodperc",
  selectedDateDescription: (e) => `Kijelölt dátum: ${e.date}`,
  selectedRangeDescription: (e) => `Kijelölt tartomány: ${e.startDate}–${e.endDate}`,
  selectedTimeDescription: (e) => `Kijelölt idő: ${e.time}`,
  startDate: "Kezdő dátum",
  timeZoneName: "időzóna",
  weekday: "hét napja",
  year: "év"
};
var R0 = {};
R0 = {
  calendar: "Calendario",
  day: "giorno",
  dayPeriod: "AM/PM",
  endDate: "Data finale",
  era: "era",
  hour: "ora",
  minute: "minuto",
  month: "mese",
  second: "secondo",
  selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
  selectedRangeDescription: (e) => `Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,
  selectedTimeDescription: (e) => `Ora selezionata: ${e.time}`,
  startDate: "Data iniziale",
  timeZoneName: "fuso orario",
  weekday: "giorno della settimana",
  year: "anno"
};
var I0 = {};
I0 = {
  calendar: "カレンダー",
  day: "日",
  dayPeriod: "午前/午後",
  endDate: "終了日",
  era: "時代",
  hour: "時",
  minute: "分",
  month: "月",
  second: "秒",
  selectedDateDescription: (e) => `選択した日付 : ${e.date}`,
  selectedRangeDescription: (e) => `選択範囲 : ${e.startDate} から ${e.endDate}`,
  selectedTimeDescription: (e) => `選択した時間 : ${e.time}`,
  startDate: "開始日",
  timeZoneName: "タイムゾーン",
  weekday: "曜日",
  year: "年"
};
var N0 = {};
N0 = {
  calendar: "달력",
  day: "일",
  dayPeriod: "오전/오후",
  endDate: "종료일",
  era: "연호",
  hour: "시",
  minute: "분",
  month: "월",
  second: "초",
  selectedDateDescription: (e) => `선택 일자: ${e.date}`,
  selectedRangeDescription: (e) => `선택 범위: ${e.startDate} ~ ${e.endDate}`,
  selectedTimeDescription: (e) => `선택 시간: ${e.time}`,
  startDate: "시작일",
  timeZoneName: "시간대",
  weekday: "요일",
  year: "년"
};
var K0 = {};
K0 = {
  calendar: "Kalendorius",
  day: "diena",
  dayPeriod: "iki pietų / po pietų",
  endDate: "Pabaigos data",
  era: "era",
  hour: "valanda",
  minute: "minutė",
  month: "mėnuo",
  second: "sekundė",
  selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
  selectedRangeDescription: (e) => `Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,
  selectedTimeDescription: (e) => `Pasirinktas laikas: ${e.time}`,
  startDate: "Pradžios data",
  timeZoneName: "laiko juosta",
  weekday: "savaitės diena",
  year: "metai"
};
var z0 = {};
z0 = {
  calendar: "Kalendārs",
  day: "diena",
  dayPeriod: "priekšpusdienā/pēcpusdienā",
  endDate: "Beigu datums",
  era: "ēra",
  hour: "stundas",
  minute: "minūtes",
  month: "mēnesis",
  second: "sekundes",
  selectedDateDescription: (e) => `Atlasītais datums: ${e.date}`,
  selectedRangeDescription: (e) => `Atlasītais diapazons: no ${e.startDate} līdz ${e.endDate}`,
  selectedTimeDescription: (e) => `Atlasītais laiks: ${e.time}`,
  startDate: "Sākuma datums",
  timeZoneName: "laika josla",
  weekday: "nedēļas diena",
  year: "gads"
};
var V0 = {};
V0 = {
  calendar: "Kalender",
  day: "dag",
  dayPeriod: "a.m./p.m.",
  endDate: "Sluttdato",
  era: "tidsalder",
  hour: "time",
  minute: "minutt",
  month: "måned",
  second: "sekund",
  selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
  selectedRangeDescription: (e) => `Valgt område: ${e.startDate} til ${e.endDate}`,
  selectedTimeDescription: (e) => `Valgt tid: ${e.time}`,
  startDate: "Startdato",
  timeZoneName: "tidssone",
  weekday: "ukedag",
  year: "år"
};
var L0 = {};
L0 = {
  calendar: "Kalender",
  day: "dag",
  dayPeriod: "a.m./p.m.",
  endDate: "Einddatum",
  era: "tijdperk",
  hour: "uur",
  minute: "minuut",
  month: "maand",
  second: "seconde",
  selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
  selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,
  selectedTimeDescription: (e) => `Geselecteerde tijd: ${e.time}`,
  startDate: "Startdatum",
  timeZoneName: "tijdzone",
  weekday: "dag van de week",
  year: "jaar"
};
var O0 = {};
O0 = {
  calendar: "Kalendarz",
  day: "dzień",
  dayPeriod: "rano / po południu / wieczorem",
  endDate: "Data końcowa",
  era: "era",
  hour: "godzina",
  minute: "minuta",
  month: "miesiąc",
  second: "sekunda",
  selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
  selectedRangeDescription: (e) => `Wybrany zakres: ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Wybrany czas: ${e.time}`,
  startDate: "Data początkowa",
  timeZoneName: "strefa czasowa",
  weekday: "dzień tygodnia",
  year: "rok"
};
var j0 = {};
j0 = {
  calendar: "Calendário",
  day: "dia",
  dayPeriod: "AM/PM",
  endDate: "Data final",
  era: "era",
  hour: "hora",
  minute: "minuto",
  month: "mês",
  second: "segundo",
  selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
  selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
  selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
  startDate: "Data inicial",
  timeZoneName: "fuso horário",
  weekday: "dia da semana",
  year: "ano"
};
var H0 = {};
H0 = {
  calendar: "Calendário",
  day: "dia",
  dayPeriod: "am/pm",
  endDate: "Data de Término",
  era: "era",
  hour: "hora",
  minute: "minuto",
  month: "mês",
  second: "segundo",
  selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
  selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
  selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
  startDate: "Data de Início",
  timeZoneName: "fuso horário",
  weekday: "dia da semana",
  year: "ano"
};
var _0 = {};
_0 = {
  calendar: "Calendar",
  day: "zi",
  dayPeriod: "a.m/p.m.",
  endDate: "Dată final",
  era: "eră",
  hour: "oră",
  minute: "minut",
  month: "lună",
  second: "secundă",
  selectedDateDescription: (e) => `Dată selectată: ${e.date}`,
  selectedRangeDescription: (e) => `Interval selectat: de la ${e.startDate} până la ${e.endDate}`,
  selectedTimeDescription: (e) => `Ora selectată: ${e.time}`,
  startDate: "Dată început",
  timeZoneName: "fus orar",
  weekday: "ziua din săptămână",
  year: "an"
};
var U0 = {};
U0 = {
  calendar: "Календарь",
  day: "день",
  dayPeriod: "AM/PM",
  endDate: "Дата окончания",
  era: "эра",
  hour: "час",
  minute: "минута",
  month: "месяц",
  second: "секунда",
  selectedDateDescription: (e) => `Выбранная дата: ${e.date}`,
  selectedRangeDescription: (e) => `Выбранный диапазон: с ${e.startDate} по ${e.endDate}`,
  selectedTimeDescription: (e) => `Выбранное время: ${e.time}`,
  startDate: "Дата начала",
  timeZoneName: "часовой пояс",
  weekday: "день недели",
  year: "год"
};
var W0 = {};
W0 = {
  calendar: "Kalendár",
  day: "deň",
  dayPeriod: "AM/PM",
  endDate: "Dátum ukončenia",
  era: "letopočet",
  hour: "hodina",
  minute: "minúta",
  month: "mesiac",
  second: "sekunda",
  selectedDateDescription: (e) => `Vybratý dátum: ${e.date}`,
  selectedRangeDescription: (e) => `Vybratý rozsah: od ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Vybratý čas: ${e.time}`,
  startDate: "Dátum začatia",
  timeZoneName: "časové pásmo",
  weekday: "deň týždňa",
  year: "rok"
};
var G0 = {};
G0 = {
  calendar: "Koledar",
  day: "dan",
  dayPeriod: "dop/pop",
  endDate: "Datum konca",
  era: "doba",
  hour: "ura",
  minute: "minuta",
  month: "mesec",
  second: "sekunda",
  selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
  selectedRangeDescription: (e) => `Izbrano območje: ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Izbrani čas: ${e.time}`,
  startDate: "Datum začetka",
  timeZoneName: "časovni pas",
  weekday: "dan v tednu",
  year: "leto"
};
var Z0 = {};
Z0 = {
  calendar: "Kalendar",
  day: "дан",
  dayPeriod: "пре подне/по подне",
  endDate: "Datum završetka",
  era: "ера",
  hour: "сат",
  minute: "минут",
  month: "месец",
  second: "секунд",
  selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
  selectedRangeDescription: (e) => `Izabrani opseg: od ${e.startDate} do ${e.endDate}`,
  selectedTimeDescription: (e) => `Izabrano vreme: ${e.time}`,
  startDate: "Datum početka",
  timeZoneName: "временска зона",
  weekday: "дан у недељи",
  year: "година"
};
var q0 = {};
q0 = {
  calendar: "Kalender",
  day: "dag",
  dayPeriod: "fm/em",
  endDate: "Slutdatum",
  era: "era",
  hour: "timme",
  minute: "minut",
  month: "månad",
  second: "sekund",
  selectedDateDescription: (e) => `Valt datum: ${e.date}`,
  selectedRangeDescription: (e) => `Valt intervall: ${e.startDate} till ${e.endDate}`,
  selectedTimeDescription: (e) => `Vald tid: ${e.time}`,
  startDate: "Startdatum",
  timeZoneName: "tidszon",
  weekday: "veckodag",
  year: "år"
};
var Y0 = {};
Y0 = {
  calendar: "Takvim",
  day: "gün",
  dayPeriod: "ÖÖ/ÖS",
  endDate: "Bitiş Tarihi",
  era: "çağ",
  hour: "saat",
  minute: "dakika",
  month: "ay",
  second: "saniye",
  selectedDateDescription: (e) => `Seçilen Tarih: ${e.date}`,
  selectedRangeDescription: (e) => `Seçilen Aralık: ${e.startDate} - ${e.endDate}`,
  selectedTimeDescription: (e) => `Seçilen Zaman: ${e.time}`,
  startDate: "Başlangıç Tarihi",
  timeZoneName: "saat dilimi",
  weekday: "haftanın günü",
  year: "yıl"
};
var J0 = {};
J0 = {
  calendar: "Календар",
  day: "день",
  dayPeriod: "дп/пп",
  endDate: "Дата завершення",
  era: "ера",
  hour: "година",
  minute: "хвилина",
  month: "місяць",
  second: "секунда",
  selectedDateDescription: (e) => `Вибрана дата: ${e.date}`,
  selectedRangeDescription: (e) => `Вибраний діапазон: ${e.startDate} — ${e.endDate}`,
  selectedTimeDescription: (e) => `Вибраний час: ${e.time}`,
  startDate: "Дата початку",
  timeZoneName: "часовий пояс",
  weekday: "день тижня",
  year: "рік"
};
var X0 = {};
X0 = {
  calendar: "日历",
  day: "日",
  dayPeriod: "上午/下午",
  endDate: "结束日期",
  era: "纪元",
  hour: "小时",
  minute: "分钟",
  month: "月",
  second: "秒",
  selectedDateDescription: (e) => `选定的日期：${e.date}`,
  selectedRangeDescription: (e) => `选定的范围：${e.startDate} 至 ${e.endDate}`,
  selectedTimeDescription: (e) => `选定的时间：${e.time}`,
  startDate: "开始日期",
  timeZoneName: "时区",
  weekday: "工作日",
  year: "年"
};
var Q0 = {};
Q0 = {
  calendar: "日曆",
  day: "日",
  dayPeriod: "上午/下午",
  endDate: "結束日期",
  era: "纪元",
  hour: "小时",
  minute: "分钟",
  month: "月",
  second: "秒",
  selectedDateDescription: (e) => `選定的日期：${e.date}`,
  selectedRangeDescription: (e) => `選定的範圍：${e.startDate} 至 ${e.endDate}`,
  selectedTimeDescription: (e) => `選定的時間：${e.time}`,
  startDate: "開始日期",
  timeZoneName: "时区",
  weekday: "工作日",
  year: "年"
};
Wr = {
  "ar-AE": y0,
  "bg-BG": x0,
  "cs-CZ": D0,
  "da-DK": C0,
  "de-DE": E0,
  "el-GR": P0,
  "en-US": w0,
  "es-ES": S0,
  "et-EE": B0,
  "fi-FI": k0,
  "fr-FR": F0,
  "he-IL": A0,
  "hr-HR": T0,
  "hu-HU": M0,
  "it-IT": R0,
  "ja-JP": I0,
  "ko-KR": N0,
  "lt-LT": K0,
  "lv-LV": z0,
  "nb-NO": V0,
  "nl-NL": L0,
  "pl-PL": O0,
  "pt-BR": j0,
  "pt-PT": H0,
  "ro-RO": _0,
  "ru-RU": U0,
  "sk-SK": W0,
  "sl-SI": G0,
  "sr-SP": Z0,
  "sv-SE": q0,
  "tr-TR": Y0,
  "uk-UA": J0,
  "zh-CN": X0,
  "zh-TW": Q0
};
function Eo(e, t, n) {
  let { direction: r } = oe(), a = K(() => Lr(t), [
    t
  ]), i = (u) => {
    if (u.currentTarget.contains(u.target) && (u.altKey && (u.key === "ArrowDown" || u.key === "ArrowUp") && "setOpen" in e && (u.preventDefault(), u.stopPropagation(), e.setOpen(!0)), !n))
      switch (u.key) {
        case "ArrowLeft":
          u.preventDefault(), u.stopPropagation(), r === "rtl" ? a.focusNext() : a.focusPrevious();
          break;
        case "ArrowRight":
          u.preventDefault(), u.stopPropagation(), r === "rtl" ? a.focusPrevious() : a.focusNext();
          break;
      }
  }, l = () => {
    var u;
    let s = (u = window.event) === null || u === void 0 ? void 0 : u.target, d = Ne(t.current, {
      tabbable: !0
    });
    if (s && (d.currentNode = s, s = d.previousNode()), !s) {
      let c;
      do
        c = d.lastChild(), c && (s = c);
      while (c);
    }
    for (; s != null && s.hasAttribute("data-placeholder"); ) {
      let c = d.previousNode();
      if (c && c.hasAttribute("data-placeholder"))
        s = c;
      else
        break;
    }
    s && s.focus();
  }, { pressProps: o } = Je({
    preventFocusOnPress: !0,
    allowTextSelectionOnPress: !0,
    onPressStart(u) {
      u.pointerType === "mouse" && l();
    },
    onPress(u) {
      u.pointerType !== "mouse" && l();
    }
  });
  return j(o, {
    onKeyDown: i
  });
}
const eb = /* @__PURE__ */ new WeakMap(), vr = "__role_" + Date.now(), tb = "__focusManager_" + Date.now();
function Po(e, t, n) {
  var r;
  let { isInvalid: a, validationErrors: i, validationDetails: l } = t.displayValidation, { labelProps: o, fieldProps: u, descriptionProps: s, errorMessageProps: d } = an({
    ...e,
    labelElementType: "span",
    isInvalid: a,
    errorMessage: e.errorMessage || i
  }), c = I(null), { focusWithinProps: b } = ft({
    ...e,
    onFocusWithin(F) {
      var E;
      c.current = t.value, (E = e.onFocus) === null || E === void 0 || E.call(e, F);
    },
    onBlurWithin: (F) => {
      var E;
      t.confirmPlaceholder(), t.value !== c.current && t.commitValidation(), (E = e.onBlur) === null || E === void 0 || E.call(e, F);
    },
    onFocusWithinChange: e.onFocusChange
  }), f = Pe(/* @__PURE__ */ ci(Wr), "@react-aria/datepicker"), p = t.maxGranularity === "hour" ? "selectedTimeDescription" : "selectedDateDescription", m = t.maxGranularity === "hour" ? "time" : "date", v = t.value ? f.format(p, {
    [m]: t.formatValue({
      month: "long"
    })
  }) : "", y = kt(v), $ = e[vr] === "presentation" ? u["aria-describedby"] : [
    y["aria-describedby"],
    u["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, x = e[tb], C = K(() => x || Lr(n), [
    x,
    n
  ]), P = Eo(t, n, e[vr] === "presentation");
  eb.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [
      o.id,
      e["aria-labelledby"]
    ].filter(Boolean).join(" ") || void 0,
    ariaDescribedBy: $,
    focusManager: C
  });
  let B = I(e.autoFocus), R;
  e[vr] === "presentation" ? R = {
    role: "presentation"
  } : R = j(u, {
    role: "group",
    "aria-disabled": e.isDisabled || void 0,
    "aria-describedby": $
  }), J(() => {
    B.current && C.focusFirst(), B.current = !1;
  }, [
    C
  ]), xn(e.inputRef, t.value, t.setValue), _r({
    ...e,
    focus() {
      C.focusFirst();
    }
  }, t, e.inputRef);
  let g = {
    type: "hidden",
    name: e.name,
    value: ((r = t.value) === null || r === void 0 ? void 0 : r.toString()) || ""
  };
  e.validationBehavior === "native" && (g.type = "text", g.hidden = !0, g.required = e.isRequired, g.onChange = () => {
  });
  let M = Y(e);
  return {
    labelProps: {
      ...o,
      onClick: () => {
        C.focusFirst();
      }
    },
    fieldProps: j(M, R, P, b, {
      onKeyDown(F) {
        e.onKeyDown && e.onKeyDown(F);
      },
      onKeyUp(F) {
        e.onKeyUp && e.onKeyUp(F);
      }
    }),
    inputProps: g,
    descriptionProps: s,
    errorMessageProps: d,
    isInvalid: a,
    validationErrors: i,
    validationDetails: l
  };
}
function qy(e, t, n) {
  var r;
  let a = Po(e, t, n);
  return a.inputProps.value = ((r = t.timeValue) === null || r === void 0 ? void 0 : r.toString()) || "", a;
}
function Yy(e, t, n) {
  let r = be(), a = be(), i = be(), l = Pe(/* @__PURE__ */ ci(Wr), "@react-aria/datepicker"), { isInvalid: o, validationErrors: u, validationDetails: s } = t.displayValidation, { labelProps: d, fieldProps: c, descriptionProps: b, errorMessageProps: f } = an({
    ...e,
    labelElementType: "span",
    isInvalid: o,
    errorMessage: e.errorMessage || u
  }), p = Eo(t, n), m = c["aria-labelledby"] || c.id, { locale: v } = oe(), y = t.formatValue(v, {
    month: "long"
  }), $ = y ? l.format("selectedDateDescription", {
    date: y
  }) : "", x = kt($), C = [
    x["aria-describedby"],
    c["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, P = Y(e), B = K(() => Lr(n), [
    n
  ]), { focusWithinProps: R } = ft({
    ...e,
    isDisabled: t.isOpen,
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  });
  return {
    groupProps: j(P, p, c, x, R, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-labelledby": m,
      "aria-describedby": C,
      onKeyDown(g) {
        t.isOpen || e.onKeyDown && e.onKeyDown(g);
      },
      onKeyUp(g) {
        t.isOpen || e.onKeyUp && e.onKeyUp(g);
      }
    }),
    labelProps: {
      ...d,
      onClick: () => {
        B.focusFirst();
      }
    },
    fieldProps: {
      ...c,
      id: i,
      [vr]: "presentation",
      "aria-describedby": C,
      value: t.value,
      onChange: t.setValue,
      placeholderValue: e.placeholderValue,
      hideTimeZone: e.hideTimeZone,
      hourCycle: e.hourCycle,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros,
      granularity: e.granularity,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isRequired: e.isRequired,
      validationBehavior: e.validationBehavior,
      // DatePicker owns the validation state for the date field.
      [tn]: t,
      autoFocus: e.autoFocus,
      name: e.name
    },
    descriptionProps: b,
    errorMessageProps: f,
    buttonProps: {
      ...x,
      id: r,
      "aria-haspopup": "dialog",
      "aria-label": l.format("calendar"),
      "aria-labelledby": `${r} ${m}`,
      "aria-describedby": C,
      "aria-expanded": t.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => t.setOpen(!0)
    },
    dialogProps: {
      id: a,
      "aria-labelledby": `${r} ${m}`
    },
    calendarProps: {
      autoFocus: !0,
      value: t.dateValue,
      onChange: t.setDateValue,
      minValue: e.minValue,
      maxValue: e.maxValue,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isDateUnavailable: e.isDateUnavailable,
      defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
      isInvalid: t.isInvalid,
      errorMessage: typeof e.errorMessage == "function" ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" ")
    },
    isInvalid: o,
    validationErrors: u,
    validationDetails: s
  };
}
function Jy() {
  let { locale: e } = oe(), t = Kd(/* @__PURE__ */ ci(Wr), "@react-aria/datepicker");
  return K(() => {
    try {
      return new Intl.DisplayNames(e, {
        type: "dateTimeField"
      });
    } catch {
      return new Xy(e, t);
    }
  }, [
    e,
    t
  ]);
}
class Xy {
  of(t) {
    return this.dictionary.getStringForLocale(t, this.locale);
  }
  constructor(t, n) {
    this.locale = t, this.dictionary = n;
  }
}
function Qy(e, t, n) {
  let r = I(""), { locale: a } = oe(), i = Jy(), { ariaLabel: l, ariaLabelledBy: o, ariaDescribedBy: u, focusManager: s } = eb.get(t), d = e.isPlaceholder ? "" : e.text, c = K(() => t.dateFormatter.resolvedOptions(), [
    t.dateFormatter
  ]), b = Pt({
    month: "long",
    timeZone: c.timeZone
  }), f = Pt({
    hour: "numeric",
    hour12: c.hour12,
    timeZone: c.timeZone
  });
  if (e.type === "month" && !e.isPlaceholder) {
    let D = b.format(t.dateValue);
    d = D !== d ? `${d} – ${D}` : D;
  } else
    e.type === "hour" && !e.isPlaceholder && (d = f.format(t.dateValue));
  let { spinButtonProps: p } = $0({
    // The ARIA spec says aria-valuenow is optional if there's no value, but aXe seems to require it.
    // This doesn't seem to have any negative effects with real AT since we also use aria-valuetext.
    // https://github.com/dequelabs/axe-core/issues/3505
    value: e.value,
    textValue: d,
    minValue: e.minValue,
    maxValue: e.maxValue,
    isDisabled: t.isDisabled,
    isReadOnly: t.isReadOnly || !e.isEditable,
    isRequired: t.isRequired,
    onIncrement: () => {
      r.current = "", t.increment(e.type);
    },
    onDecrement: () => {
      r.current = "", t.decrement(e.type);
    },
    onIncrementPage: () => {
      r.current = "", t.incrementPage(e.type);
    },
    onDecrementPage: () => {
      r.current = "", t.decrementPage(e.type);
    },
    onIncrementToMax: () => {
      r.current = "", t.setSegment(e.type, e.maxValue);
    },
    onDecrementToMin: () => {
      r.current = "", t.setSegment(e.type, e.minValue);
    }
  }), m = K(() => new go(a, {
    maximumFractionDigits: 0
  }), [
    a
  ]), v = () => {
    if (m.isValidPartialNumber(e.text) && !t.isReadOnly && !e.isPlaceholder) {
      let D = e.text.slice(0, -1), H = m.parse(D);
      D.length === 0 || H === 0 ? t.clearSegment(e.type) : t.setSegment(e.type, H), r.current = D;
    } else
      e.type === "dayPeriod" && t.clearSegment(e.type);
  }, y = (D) => {
    if (D.key === "a" && (Lt() ? D.metaKey : D.ctrlKey) && D.preventDefault(), !(D.ctrlKey || D.metaKey || D.shiftKey || D.altKey))
      switch (D.key) {
        case "Backspace":
        case "Delete":
          D.preventDefault(), D.stopPropagation(), v();
          break;
      }
  }, { startsWith: $ } = zd({
    sensitivity: "base"
  }), x = Pt({
    hour: "numeric",
    hour12: !0
  }), C = K(() => {
    let D = /* @__PURE__ */ new Date();
    return D.setHours(0), x.formatToParts(D).find((H) => H.type === "dayPeriod").value;
  }, [
    x
  ]), P = K(() => {
    let D = /* @__PURE__ */ new Date();
    return D.setHours(12), x.formatToParts(D).find((H) => H.type === "dayPeriod").value;
  }, [
    x
  ]), B = Pt({
    year: "numeric",
    era: "narrow",
    timeZone: "UTC"
  }), R = K(() => {
    if (e.type !== "era")
      return [];
    let D = Ee(new Te(1, 1, 1), t.calendar), H = t.calendar.getEras().map((L) => {
      let V = D.set({
        year: 1,
        month: 1,
        day: 1,
        era: L
      }).toDate("UTC"), G = B.formatToParts(V).find((re) => re.type === "era").value;
      return {
        era: L,
        formatted: G
      };
    }), _ = e5(H.map((L) => L.formatted));
    if (_)
      for (let L of H)
        L.formatted = L.formatted.slice(_);
    return H;
  }, [
    B,
    t.calendar,
    e.type
  ]), g = (D) => {
    if (t.isDisabled || t.isReadOnly)
      return;
    let H = r.current + D;
    switch (e.type) {
      case "dayPeriod":
        if ($(C, D))
          t.setSegment("dayPeriod", 0);
        else if ($(P, D))
          t.setSegment("dayPeriod", 12);
        else
          break;
        s.focusNext();
        break;
      case "era": {
        let _ = R.find((L) => $(L.formatted, D));
        _ && (t.setSegment("era", _.era), s.focusNext());
        break;
      }
      case "day":
      case "hour":
      case "minute":
      case "second":
      case "month":
      case "year": {
        if (!m.isValidPartialNumber(H))
          return;
        let _ = m.parse(H), L = _, V = e.minValue === 0;
        if (e.type === "hour" && t.dateFormatter.resolvedOptions().hour12) {
          switch (t.dateFormatter.resolvedOptions().hourCycle) {
            case "h11":
              _ > 11 && (L = m.parse(D));
              break;
            case "h12":
              V = !1, _ > 12 && (L = m.parse(D));
              break;
          }
          e.value >= 12 && _ > 1 && (_ += 12);
        } else
          _ > e.maxValue && (L = m.parse(D));
        if (isNaN(_))
          return;
        let N = L !== 0 || V;
        N && t.setSegment(e.type, L), +(_ + "0") > e.maxValue || H.length >= String(e.maxValue).length ? (r.current = "", N && s.focusNext()) : r.current = H;
        break;
      }
    }
  }, M = () => {
    r.current = "", Oe(n.current, {
      containingElement: ze(n.current)
    }), window.getSelection().collapse(n.current);
  }, F = I("");
  Jt(n, "beforeinput", (D) => {
    switch (D.preventDefault(), D.inputType) {
      case "deleteContentBackward":
      case "deleteContentForward":
        m.isValidPartialNumber(e.text) && !t.isReadOnly && v();
        break;
      case "insertCompositionText":
        F.current = n.current.textContent, n.current.textContent = n.current.textContent;
        break;
      default:
        D.data != null && g(D.data);
        break;
    }
  }), Jt(n, "input", (D) => {
    let { inputType: H, data: _ } = D;
    switch (H) {
      case "insertCompositionText":
        n.current.textContent = F.current, ($(C, _) || $(P, _)) && g(_);
        break;
    }
  }), fe(() => {
    let D = n.current;
    return () => {
      document.activeElement === D && (s.focusPrevious() || s.focusNext());
    };
  }, [
    n,
    s
  ]);
  let E = Gn() || e.type === "timeZoneName" ? {
    role: "textbox",
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuetext": null,
    "aria-valuenow": null
  } : {}, S = K(() => t.segments.find((D) => D.isEditable), [
    t.segments
  ]);
  e !== S && !t.isInvalid && (u = void 0);
  let w = be(), A = !t.isDisabled && !t.isReadOnly && e.isEditable, z = e.type === "literal" ? "" : i.of(e.type), T = Ot({
    "aria-label": `${z}${l ? `, ${l}` : ""}${o ? ", " : ""}`,
    "aria-labelledby": o
  });
  return e.type === "literal" ? {
    segmentProps: {
      "aria-hidden": !0
    }
  } : {
    segmentProps: j(p, T, {
      id: w,
      ...E,
      "aria-invalid": t.isInvalid ? "true" : void 0,
      "aria-describedby": u,
      "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
      "data-placeholder": e.isPlaceholder || void 0,
      contentEditable: A,
      suppressContentEditableWarning: A,
      spellCheck: A ? "false" : void 0,
      autoCapitalize: A ? "off" : void 0,
      autoCorrect: A ? "off" : void 0,
      // Capitalization was changed in React 17...
      [parseInt(h.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: A ? "next" : void 0,
      inputMode: t.isDisabled || e.type === "dayPeriod" || e.type === "era" || !A ? void 0 : "numeric",
      tabIndex: t.isDisabled ? void 0 : 0,
      onKeyDown: y,
      onFocus: M,
      style: {
        caretColor: "transparent"
      },
      // Prevent pointer events from reaching useDatePickerGroup, and allow native browser behavior to focus the segment.
      onPointerDown(D) {
        D.stopPropagation();
      },
      onMouseDown(D) {
        D.stopPropagation();
      }
    })
  };
}
function e5(e) {
  e.sort();
  let t = e[0], n = e[e.length - 1];
  for (let r = 0; r < t.length; r++)
    if (t[r] !== n[r])
      return r;
  return 0;
}
function t5(e, t, n) {
  var r, a;
  let i = Pe(/* @__PURE__ */ ci(Wr), "@react-aria/datepicker"), { isInvalid: l, validationErrors: o, validationDetails: u } = t.displayValidation, { labelProps: s, fieldProps: d, descriptionProps: c, errorMessageProps: b } = an({
    ...e,
    labelElementType: "span",
    isInvalid: l,
    errorMessage: e.errorMessage || o
  }), f = d["aria-labelledby"] || d.id, { locale: p } = oe(), m = t.formatValue(p, {
    month: "long"
  }), v = m ? i.format("selectedRangeDescription", {
    startDate: m.start,
    endDate: m.end
  }) : "", y = kt(v), $ = {
    "aria-label": i.format("startDate"),
    "aria-labelledby": f
  }, x = {
    "aria-label": i.format("endDate"),
    "aria-labelledby": f
  }, C = be(), P = be(), B = Eo(t, n), R = [
    y["aria-describedby"],
    d["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, g = K(() => Lr(n, {
    // Exclude the button from the focus manager.
    accept: (A) => A.id !== C
  }), [
    n,
    C
  ]), M = {
    [tb]: g,
    [vr]: "presentation",
    "aria-describedby": R,
    placeholderValue: e.placeholderValue,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    granularity: e.granularity,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    isRequired: e.isRequired,
    validationBehavior: e.validationBehavior
  }, F = Y(e), { focusWithinProps: E } = ft({
    ...e,
    isDisabled: t.isOpen,
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), S = I(Yt), w = I(Yt);
  return {
    groupProps: j(F, B, d, y, E, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-describedby": R,
      onKeyDown(A) {
        t.isOpen || e.onKeyDown && e.onKeyDown(A);
      },
      onKeyUp(A) {
        t.isOpen || e.onKeyUp && e.onKeyUp(A);
      }
    }),
    labelProps: {
      ...s,
      onClick: () => {
        g.focusFirst();
      }
    },
    buttonProps: {
      ...y,
      id: C,
      "aria-haspopup": "dialog",
      "aria-label": i.format("calendar"),
      "aria-labelledby": `${C} ${f}`,
      "aria-describedby": R,
      "aria-expanded": t.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => t.setOpen(!0)
    },
    dialogProps: {
      id: P,
      "aria-labelledby": `${C} ${f}`
    },
    startFieldProps: {
      ...$,
      ...M,
      value: (r = t.value) === null || r === void 0 ? void 0 : r.start,
      onChange: (A) => t.setDateTime("start", A),
      autoFocus: e.autoFocus,
      name: e.startName,
      [tn]: {
        realtimeValidation: t.realtimeValidation,
        displayValidation: t.displayValidation,
        updateValidation(A) {
          S.current = A, t.updateValidation(Er(A, w.current));
        },
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation
      }
    },
    endFieldProps: {
      ...x,
      ...M,
      value: (a = t.value) === null || a === void 0 ? void 0 : a.end,
      onChange: (A) => t.setDateTime("end", A),
      name: e.endName,
      [tn]: {
        realtimeValidation: t.realtimeValidation,
        displayValidation: t.displayValidation,
        updateValidation(A) {
          w.current = A, t.updateValidation(Er(S.current, A));
        },
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation
      }
    },
    descriptionProps: c,
    errorMessageProps: b,
    calendarProps: {
      autoFocus: !0,
      value: t.dateRange,
      onChange: t.setDateRange,
      minValue: e.minValue,
      maxValue: e.maxValue,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isDateUnavailable: e.isDateUnavailable,
      allowsNonContiguousRanges: e.allowsNonContiguousRanges,
      defaultFocusedValue: t.dateRange ? void 0 : e.placeholderValue,
      isInvalid: t.isInvalid,
      errorMessage: typeof e.errorMessage == "function" ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" ")
    },
    isInvalid: l,
    validationErrors: o,
    validationDetails: u
  };
}
function n5(e, t) {
  let { role: n = "dialog" } = e, r = wt();
  r = e["aria-label"] ? void 0 : r;
  let a = I(!1);
  return J(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      Ce(t.current);
      let i = setTimeout(() => {
        document.activeElement === t.current && (a.current = !0, t.current && (t.current.blur(), Ce(t.current)), a.current = !1);
      }, 500);
      return () => {
        clearTimeout(i);
      };
    }
  }, [
    t
  ]), hf(), {
    dialogProps: {
      ...Y(e, {
        labelable: !0
      }),
      role: n,
      tabIndex: -1,
      "aria-labelledby": e["aria-labelledby"] || r,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (i) => {
        a.current && i.stopPropagation();
      }
    },
    titleProps: {
      id: r
    }
  };
}
class zn {
  /**
  * Returns a copy of this point.
  */
  copy() {
    return new zn(this.x, this.y);
  }
  /**
  * Checks if two points are equal.
  */
  equals(t) {
    return this.x === t.x && this.y === t.y;
  }
  /**
  * Returns true if this point is the origin.
  */
  isOrigin() {
    return this.x === 0 && this.y === 0;
  }
  constructor(t = 0, n = 0) {
    this.x = t, this.y = n;
  }
}
class Vn {
  /**
  * The maximum x-coordinate in the rectangle.
  */
  get maxX() {
    return this.x + this.width;
  }
  /**
  * The maximum y-coordinate in the rectangle.
  */
  get maxY() {
    return this.y + this.height;
  }
  /**
  * The area of the rectangle.
  */
  get area() {
    return this.width * this.height;
  }
  /**
  * The top left corner of the rectangle.
  */
  get topLeft() {
    return new zn(this.x, this.y);
  }
  /**
  * The top right corner of the rectangle.
  */
  get topRight() {
    return new zn(this.maxX, this.y);
  }
  /**
  * The bottom left corner of the rectangle.
  */
  get bottomLeft() {
    return new zn(this.x, this.maxY);
  }
  /**
  * The bottom right corner of the rectangle.
  */
  get bottomRight() {
    return new zn(this.maxX, this.maxY);
  }
  /**
  * Returns whether this rectangle intersects another rectangle.
  * @param rect - The rectangle to check.
  */
  intersects(t) {
    return this.x <= t.x + t.width && t.x <= this.x + this.width && this.y <= t.y + t.height && t.y <= this.y + this.height;
  }
  /**
  * Returns whether this rectangle fully contains another rectangle.
  * @param rect - The rectangle to check.
  */
  containsRect(t) {
    return this.x <= t.x && this.y <= t.y && this.maxX >= t.maxX && this.maxY >= t.maxY;
  }
  /**
  * Returns whether the rectangle contains the given point.
  * @param point - The point to check.
  */
  containsPoint(t) {
    return this.x <= t.x && this.y <= t.y && this.maxX >= t.x && this.maxY >= t.y;
  }
  /**
  * Returns the first corner of this rectangle (from top to bottom, left to right)
  * that is contained in the given rectangle, or null of the rectangles do not intersect.
  * @param rect - The rectangle to check.
  */
  getCornerInRect(t) {
    for (let n of [
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight"
    ])
      if (t.containsPoint(this[n]))
        return n;
    return null;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.width === this.width && t.height === this.height;
  }
  pointEquals(t) {
    return this.x === t.x && this.y === t.y;
  }
  sizeEquals(t) {
    return this.width === t.width && this.height === t.height;
  }
  /**
  * Returns the union of this Rect and another.
  */
  union(t) {
    let n = Math.min(this.x, t.x), r = Math.min(this.y, t.y), a = Math.max(this.maxX, t.maxX) - n, i = Math.max(this.maxY, t.maxY) - r;
    return new Vn(n, r, a, i);
  }
  /**
  * Returns the intersection of this Rect with another.
  * If the rectangles do not intersect, an all zero Rect is returned.
  */
  intersection(t) {
    if (!this.intersects(t))
      return new Vn(0, 0, 0, 0);
    let n = Math.max(this.x, t.x), r = Math.max(this.y, t.y);
    return new Vn(n, r, Math.min(this.maxX, t.maxX) - n, Math.min(this.maxY, t.maxY) - r);
  }
  /**
  * Returns a copy of this rectangle.
  */
  copy() {
    return new Vn(this.x, this.y, this.width, this.height);
  }
  constructor(t = 0, n = 0, r = 0, a = 0) {
    this.x = t, this.y = n, this.width = r, this.height = a;
  }
}
let Rn = typeof window < "u" ? window.performance : null, ds = Rn && (Rn.now || Rn.webkitNow || Rn.msNow || Rn.mozNow);
ds && ds.bind(Rn);
function wo(e) {
  return e && e.__esModule ? e.default : e;
}
class nb {
  isCell(t) {
    return t.type === "cell";
  }
  isRow(t) {
    return t.type === "row" || t.type === "item";
  }
  findPreviousKey(t, n) {
    let r = t != null ? this.collection.getKeyBefore(t) : this.collection.getLastKey();
    for (; r != null; ) {
      let a = this.collection.getItem(r);
      if (!this.disabledKeys.has(r) && (!n || n(a)))
        return r;
      r = this.collection.getKeyBefore(r);
    }
  }
  findNextKey(t, n) {
    let r = t != null ? this.collection.getKeyAfter(t) : this.collection.getFirstKey();
    for (; r != null; ) {
      let a = this.collection.getItem(r);
      if (!this.disabledKeys.has(r) && (!n || n(a)))
        return r;
      r = this.collection.getKeyAfter(r);
    }
  }
  getKeyBelow(t) {
    let n = this.collection.getItem(t);
    if (n && (this.isCell(n) && (t = n.parentKey), t = this.findNextKey(t), t != null)) {
      if (this.isCell(n)) {
        let r = this.collection.getItem(t);
        return qt(Se(r, this.collection), n.index).key;
      }
      if (this.focusMode === "row")
        return t;
    }
  }
  getKeyAbove(t) {
    let n = this.collection.getItem(t);
    if (n && (this.isCell(n) && (t = n.parentKey), t = this.findPreviousKey(t), t != null)) {
      if (this.isCell(n)) {
        let r = this.collection.getItem(t);
        return qt(Se(r, this.collection), n.index).key;
      }
      if (this.focusMode === "row")
        return t;
    }
  }
  getKeyRightOf(t) {
    let n = this.collection.getItem(t);
    if (n) {
      if (this.isRow(n)) {
        let r = Se(n, this.collection);
        return this.direction === "rtl" ? Qt(r).key : It(r).key;
      }
      if (this.isCell(n)) {
        let r = this.collection.getItem(n.parentKey), a = Se(r, this.collection), i = this.direction === "rtl" ? qt(a, n.index - 1) : qt(a, n.index + 1);
        return i ? i.key : this.focusMode === "row" ? n.parentKey : this.direction === "rtl" ? this.getFirstKey(t) : this.getLastKey(t);
      }
    }
  }
  getKeyLeftOf(t) {
    let n = this.collection.getItem(t);
    if (n) {
      if (this.isRow(n)) {
        let r = Se(n, this.collection);
        return this.direction === "rtl" ? It(r).key : Qt(r).key;
      }
      if (this.isCell(n)) {
        let r = this.collection.getItem(n.parentKey), a = Se(r, this.collection), i = this.direction === "rtl" ? qt(a, n.index + 1) : qt(a, n.index - 1);
        return i ? i.key : this.focusMode === "row" ? n.parentKey : this.direction === "rtl" ? this.getLastKey(t) : this.getFirstKey(t);
      }
    }
  }
  getFirstKey(t, n) {
    let r;
    if (t != null) {
      if (r = this.collection.getItem(t), !r)
        return;
      if (this.isCell(r) && !n) {
        let a = this.collection.getItem(r.parentKey);
        return It(Se(a, this.collection)).key;
      }
    }
    if (t = this.findNextKey(), t != null && r && this.isCell(r) && n || this.focusMode === "cell") {
      let a = this.collection.getItem(t);
      t = It(Se(a, this.collection)).key;
    }
    return t;
  }
  getLastKey(t, n) {
    let r;
    if (t != null) {
      if (r = this.collection.getItem(t), !r)
        return;
      if (this.isCell(r) && !n) {
        let a = this.collection.getItem(r.parentKey), i = Se(a, this.collection);
        return Qt(i).key;
      }
    }
    if (t = this.findPreviousKey(), t != null && r && this.isCell(r) && n || this.focusMode === "cell") {
      let a = this.collection.getItem(t), i = Se(a, this.collection);
      t = Qt(i).key;
    }
    return t;
  }
  getItem(t) {
    return this.ref.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`);
  }
  getItemRect(t) {
    var n;
    if (this.layout)
      return (n = this.layout.getLayoutInfo(t)) === null || n === void 0 ? void 0 : n.rect;
    let r = this.getItem(t);
    if (r)
      return new Vn(r.offsetLeft, r.offsetTop, r.offsetWidth, r.offsetHeight);
  }
  getPageHeight() {
    var t, n, r;
    return this.layout ? (t = this.layout.virtualizer) === null || t === void 0 ? void 0 : t.visibleRect.height : (r = this.ref) === null || r === void 0 || (n = r.current) === null || n === void 0 ? void 0 : n.offsetHeight;
  }
  getContentHeight() {
    var t, n;
    return this.layout ? this.layout.getContentSize().height : (n = this.ref) === null || n === void 0 || (t = n.current) === null || t === void 0 ? void 0 : t.scrollHeight;
  }
  getKeyPageAbove(t) {
    let n = this.getItemRect(t);
    if (!n)
      return null;
    let r = Math.max(0, n.maxY - this.getPageHeight());
    for (; n && n.y > r; )
      t = this.getKeyAbove(t), n = this.getItemRect(t);
    return t;
  }
  getKeyPageBelow(t) {
    let n = this.getItemRect(t);
    if (!n)
      return null;
    let r = this.getPageHeight(), a = Math.min(this.getContentHeight(), n.y + r);
    for (; n && n.maxY < a; ) {
      let i = this.getKeyBelow(t);
      n = this.getItemRect(i), i != null && (t = i);
    }
    return t;
  }
  getKeyForSearch(t, n) {
    if (!this.collator)
      return null;
    let r = this.collection, a = n ?? this.getFirstKey(), i = r.getItem(a);
    i.type === "cell" && (a = i.parentKey);
    let l = !1;
    for (; a != null; ) {
      let o = r.getItem(a);
      if (o.textValue) {
        let u = o.textValue.slice(0, t.length);
        if (this.collator.compare(u, t) === 0)
          return this.isRow(o) && this.focusMode === "cell" ? It(Se(o, this.collection)).key : o.key;
      }
      a = this.findNextKey(a), a == null && !l && (a = this.getFirstKey(), l = !0);
    }
    return null;
  }
  constructor(t) {
    this.collection = t.collection, this.disabledKeys = t.disabledKeys, this.ref = t.ref, this.direction = t.direction, this.collator = t.collator, this.layout = t.layout, this.focusMode = t.focusMode || "row";
  }
}
const So = /* @__PURE__ */ new WeakMap();
var fi = {}, rb = {};
rb = {
  deselectedItem: (e) => `${e.item} غير المحدد`,
  longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
  select: "تحديد",
  selectedAll: "جميع العناصر المحددة.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "لم يتم تحديد عناصر",
    one: () => `${t.number(e.count)} عنصر محدد`,
    other: () => `${t.number(e.count)} عنصر محدد`
  })}.`,
  selectedItem: (e) => `${e.item} المحدد`
};
var ab = {};
ab = {
  deselectedItem: (e) => `${e.item} не е избран.`,
  longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
  select: "Изберете",
  selectedAll: "Всички елементи са избрани.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Няма избрани елементи",
    one: () => `${t.number(e.count)} избран елемент`,
    other: () => `${t.number(e.count)} избрани елементи`
  })}.`,
  selectedItem: (e) => `${e.item} избран.`
};
var ib = {};
ib = {
  deselectedItem: (e) => `Položka ${e.item} není vybrána.`,
  longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
  select: "Vybrat",
  selectedAll: "Vybrány všechny položky.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Nevybrány žádné položky",
    one: () => `Vybrána ${t.number(e.count)} položka`,
    other: () => `Vybráno ${t.number(e.count)} položek`
  })}.`,
  selectedItem: (e) => `Vybrána položka ${e.item}.`
};
var lb = {};
lb = {
  deselectedItem: (e) => `${e.item} ikke valgt.`,
  longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
  select: "Vælg",
  selectedAll: "Alle elementer valgt.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Ingen elementer valgt",
    one: () => `${t.number(e.count)} element valgt`,
    other: () => `${t.number(e.count)} elementer valgt`
  })}.`,
  selectedItem: (e) => `${e.item} valgt.`
};
var ob = {};
ob = {
  deselectedItem: (e) => `${e.item} nicht ausgewählt.`,
  longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
  select: "Auswählen",
  selectedAll: "Alle Elemente ausgewählt.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Keine Elemente ausgewählt",
    one: () => `${t.number(e.count)} Element ausgewählt`,
    other: () => `${t.number(e.count)} Elemente ausgewählt`
  })}.`,
  selectedItem: (e) => `${e.item} ausgewählt.`
};
var ub = {};
ub = {
  deselectedItem: (e) => `Δεν επιλέχθηκε το στοιχείο ${e.item}.`,
  longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
  select: "Επιλογή",
  selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Δεν επιλέχθηκαν στοιχεία",
    one: () => `Επιλέχθηκε ${t.number(e.count)} στοιχείο`,
    other: () => `Επιλέχθηκαν ${t.number(e.count)} στοιχεία`
  })}.`,
  selectedItem: (e) => `Επιλέχθηκε το στοιχείο ${e.item}.`
};
var sb = {};
sb = {
  deselectedItem: (e) => `${e.item} not selected.`,
  select: "Select",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "No items selected",
    one: () => `${t.number(e.count)} item selected`,
    other: () => `${t.number(e.count)} items selected`
  })}.`,
  selectedAll: "All items selected.",
  selectedItem: (e) => `${e.item} selected.`,
  longPressToSelect: "Long press to enter selection mode."
};
var db = {};
db = {
  deselectedItem: (e) => `${e.item} no seleccionado.`,
  longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
  select: "Seleccionar",
  selectedAll: "Todos los elementos seleccionados.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Ningún elemento seleccionado",
    one: () => `${t.number(e.count)} elemento seleccionado`,
    other: () => `${t.number(e.count)} elementos seleccionados`
  })}.`,
  selectedItem: (e) => `${e.item} seleccionado.`
};
var cb = {};
cb = {
  deselectedItem: (e) => `${e.item} pole valitud.`,
  longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
  select: "Vali",
  selectedAll: "Kõik üksused valitud.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Üksusi pole valitud",
    one: () => `${t.number(e.count)} üksus valitud`,
    other: () => `${t.number(e.count)} üksust valitud`
  })}.`,
  selectedItem: (e) => `${e.item} valitud.`
};
var fb = {};
fb = {
  deselectedItem: (e) => `Kohdetta ${e.item} ei valittu.`,
  longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
  select: "Valitse",
  selectedAll: "Kaikki kohteet valittu.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Ei yhtään kohdetta valittu",
    one: () => `${t.number(e.count)} kohde valittu`,
    other: () => `${t.number(e.count)} kohdetta valittu`
  })}.`,
  selectedItem: (e) => `${e.item} valittu.`
};
var bb = {};
bb = {
  deselectedItem: (e) => `${e.item} non sélectionné.`,
  longPressToSelect: "Appuyez de manière prolongée pour passer en mode de sélection.",
  select: "Sélectionner",
  selectedAll: "Tous les éléments sélectionnés.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Aucun élément sélectionné",
    one: () => `${t.number(e.count)} élément sélectionné`,
    other: () => `${t.number(e.count)} éléments sélectionnés`
  })}.`,
  selectedItem: (e) => `${e.item} sélectionné.`
};
var pb = {};
pb = {
  deselectedItem: (e) => `${e.item} לא נבחר.`,
  longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
  select: "בחר",
  selectedAll: "כל הפריטים נבחרו.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "לא נבחרו פריטים",
    one: () => `פריט ${t.number(e.count)} נבחר`,
    other: () => `${t.number(e.count)} פריטים נבחרו`
  })}.`,
  selectedItem: (e) => `${e.item} נבחר.`
};
var mb = {};
mb = {
  deselectedItem: (e) => `Stavka ${e.item} nije odabrana.`,
  longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
  select: "Odaberite",
  selectedAll: "Odabrane su sve stavke.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Nije odabrana nijedna stavka",
    one: () => `Odabrana je ${t.number(e.count)} stavka`,
    other: () => `Odabrano je ${t.number(e.count)} stavki`
  })}.`,
  selectedItem: (e) => `Stavka ${e.item} je odabrana.`
};
var hb = {};
hb = {
  deselectedItem: (e) => `${e.item} nincs kijelölve.`,
  longPressToSelect: "Nyomja hosszan a kijelöléshez.",
  select: "Kijelölés",
  selectedAll: "Az összes elem kijelölve.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Egy elem sincs kijelölve",
    one: () => `${t.number(e.count)} elem kijelölve`,
    other: () => `${t.number(e.count)} elem kijelölve`
  })}.`,
  selectedItem: (e) => `${e.item} kijelölve.`
};
var vb = {};
vb = {
  deselectedItem: (e) => `${e.item} non selezionato.`,
  longPressToSelect: "Premi a lungo per passare alla modalità di selezione.",
  select: "Seleziona",
  selectedAll: "Tutti gli elementi selezionati.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Nessun elemento selezionato",
    one: () => `${t.number(e.count)} elemento selezionato`,
    other: () => `${t.number(e.count)} elementi selezionati`
  })}.`,
  selectedItem: (e) => `${e.item} selezionato.`
};
var gb = {};
gb = {
  deselectedItem: (e) => `${e.item} が選択されていません。`,
  longPressToSelect: "長押しして選択モードを開きます。",
  select: "選択",
  selectedAll: "すべての項目を選択しました。",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "項目が選択されていません",
    one: () => `${t.number(e.count)} 項目を選択しました`,
    other: () => `${t.number(e.count)} 項目を選択しました`
  })}。`,
  selectedItem: (e) => `${e.item} を選択しました。`
};
var $b = {};
$b = {
  deselectedItem: (e) => `${e.item}이(가) 선택되지 않았습니다.`,
  longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
  select: "선택",
  selectedAll: "모든 항목이 선택되었습니다.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "선택된 항목이 없습니다",
    one: () => `${t.number(e.count)}개 항목이 선택되었습니다`,
    other: () => `${t.number(e.count)}개 항목이 선택되었습니다`
  })}.`,
  selectedItem: (e) => `${e.item}이(가) 선택되었습니다.`
};
var yb = {};
yb = {
  deselectedItem: (e) => `${e.item} nepasirinkta.`,
  longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
  select: "Pasirinkti",
  selectedAll: "Pasirinkti visi elementai.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Nepasirinktas nė vienas elementas",
    one: () => `Pasirinktas ${t.number(e.count)} elementas`,
    other: () => `Pasirinkta elementų: ${t.number(e.count)}`
  })}.`,
  selectedItem: (e) => `Pasirinkta: ${e.item}.`
};
var xb = {};
xb = {
  deselectedItem: (e) => `Vienums ${e.item} nav atlasīts.`,
  longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
  select: "Atlasīt",
  selectedAll: "Atlasīti visi vienumi.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Nav atlasīts neviens vienums",
    one: () => `Atlasīto vienumu skaits: ${t.number(e.count)}`,
    other: () => `Atlasīto vienumu skaits: ${t.number(e.count)}`
  })}.`,
  selectedItem: (e) => `Atlasīts vienums ${e.item}.`
};
var Db = {};
Db = {
  deselectedItem: (e) => `${e.item} er ikke valgt.`,
  longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
  select: "Velg",
  selectedAll: "Alle elementer er valgt.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Ingen elementer er valgt",
    one: () => `${t.number(e.count)} element er valgt`,
    other: () => `${t.number(e.count)} elementer er valgt`
  })}.`,
  selectedItem: (e) => `${e.item} er valgt.`
};
var Cb = {};
Cb = {
  deselectedItem: (e) => `${e.item} niet geselecteerd.`,
  longPressToSelect: "Druk lang om de selectiemodus te openen.",
  select: "Selecteren",
  selectedAll: "Alle items geselecteerd.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Geen items geselecteerd",
    one: () => `${t.number(e.count)} item geselecteerd`,
    other: () => `${t.number(e.count)} items geselecteerd`
  })}.`,
  selectedItem: (e) => `${e.item} geselecteerd.`
};
var Eb = {};
Eb = {
  deselectedItem: (e) => `Nie zaznaczono ${e.item}.`,
  longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
  select: "Zaznacz",
  selectedAll: "Wszystkie zaznaczone elementy.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Nie zaznaczono żadnych elementów",
    one: () => `${t.number(e.count)} zaznaczony element`,
    other: () => `${t.number(e.count)} zaznaczonych elementów`
  })}.`,
  selectedItem: (e) => `Zaznaczono ${e.item}.`
};
var Pb = {};
Pb = {
  deselectedItem: (e) => `${e.item} não selecionado.`,
  longPressToSelect: "Mantenha pressionado para entrar no modo de seleção.",
  select: "Selecionar",
  selectedAll: "Todos os itens selecionados.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Nenhum item selecionado",
    one: () => `${t.number(e.count)} item selecionado`,
    other: () => `${t.number(e.count)} itens selecionados`
  })}.`,
  selectedItem: (e) => `${e.item} selecionado.`
};
var wb = {};
wb = {
  deselectedItem: (e) => `${e.item} não selecionado.`,
  longPressToSelect: "Prima continuamente para entrar no modo de seleção.",
  select: "Selecionar",
  selectedAll: "Todos os itens selecionados.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Nenhum item selecionado",
    one: () => `${t.number(e.count)} item selecionado`,
    other: () => `${t.number(e.count)} itens selecionados`
  })}.`,
  selectedItem: (e) => `${e.item} selecionado.`
};
var Sb = {};
Sb = {
  deselectedItem: (e) => `${e.item} neselectat.`,
  longPressToSelect: "Apăsați lung pentru a intra în modul de selectare.",
  select: "Selectare",
  selectedAll: "Toate elementele selectate.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Niciun element selectat",
    one: () => `${t.number(e.count)} element selectat`,
    other: () => `${t.number(e.count)} elemente selectate`
  })}.`,
  selectedItem: (e) => `${e.item} selectat.`
};
var Bb = {};
Bb = {
  deselectedItem: (e) => `${e.item} не выбрано.`,
  longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
  select: "Выбрать",
  selectedAll: "Выбраны все элементы.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Нет выбранных элементов",
    one: () => `${t.number(e.count)} элемент выбран`,
    other: () => `${t.number(e.count)} элементов выбрано`
  })}.`,
  selectedItem: (e) => `${e.item} выбрано.`
};
var kb = {};
kb = {
  deselectedItem: (e) => `Nevybraté položky: ${e.item}.`,
  longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
  select: "Vybrať",
  selectedAll: "Všetky vybraté položky.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Žiadne vybraté položky",
    one: () => `${t.number(e.count)} vybratá položka`,
    other: () => `Počet vybratých položiek:${t.number(e.count)}`
  })}.`,
  selectedItem: (e) => `Vybraté položky: ${e.item}.`
};
var Fb = {};
Fb = {
  deselectedItem: (e) => `Element ${e.item} ni izbran.`,
  longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
  select: "Izberite",
  selectedAll: "Vsi elementi so izbrani.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Noben element ni izbran",
    one: () => `${t.number(e.count)} element je izbran`,
    other: () => `${t.number(e.count)} elementov je izbranih`
  })}.`,
  selectedItem: (e) => `Element ${e.item} je izbran.`
};
var Ab = {};
Ab = {
  deselectedItem: (e) => `${e.item} nije izabrano.`,
  longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
  select: "Izaberite",
  selectedAll: "Izabrane su sve stavke.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Nije izabrana nijedna stavka",
    one: () => `Izabrana je ${t.number(e.count)} stavka`,
    other: () => `Izabrano je ${t.number(e.count)} stavki`
  })}.`,
  selectedItem: (e) => `${e.item} je izabrano.`
};
var Tb = {};
Tb = {
  deselectedItem: (e) => `${e.item} ej markerat.`,
  longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
  select: "Markera",
  selectedAll: "Alla markerade objekt.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Inga markerade objekt",
    one: () => `${t.number(e.count)} markerat objekt`,
    other: () => `${t.number(e.count)} markerade objekt`
  })}.`,
  selectedItem: (e) => `${e.item} markerat.`
};
var Mb = {};
Mb = {
  deselectedItem: (e) => `${e.item} seçilmedi.`,
  longPressToSelect: "Seçim moduna girmek için uzun basın.",
  select: "Seç",
  selectedAll: "Tüm ögeler seçildi.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Hiçbir öge seçilmedi",
    one: () => `${t.number(e.count)} öge seçildi`,
    other: () => `${t.number(e.count)} öge seçildi`
  })}.`,
  selectedItem: (e) => `${e.item} seçildi.`
};
var Rb = {};
Rb = {
  deselectedItem: (e) => `${e.item} не вибрано.`,
  longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
  select: "Вибрати",
  selectedAll: "Усі елементи вибрано.",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "Жодних елементів не вибрано",
    one: () => `${t.number(e.count)} елемент вибрано`,
    other: () => `Вибрано елементів: ${t.number(e.count)}`
  })}.`,
  selectedItem: (e) => `${e.item} вибрано.`
};
var Ib = {};
Ib = {
  deselectedItem: (e) => `未选择 ${e.item}。`,
  longPressToSelect: "长按以进入选择模式。",
  select: "选择",
  selectedAll: "已选择所有项目。",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "未选择项目",
    one: () => `已选择 ${t.number(e.count)} 个项目`,
    other: () => `已选择 ${t.number(e.count)} 个项目`
  })}。`,
  selectedItem: (e) => `已选择 ${e.item}。`
};
var Nb = {};
Nb = {
  deselectedItem: (e) => `未選取「${e.item}」。`,
  longPressToSelect: "長按以進入選擇模式。",
  select: "選取",
  selectedAll: "已選取所有項目。",
  selectedCount: (e, t) => `${t.plural(e.count, {
    "=0": "未選取任何項目",
    one: () => `已選取 ${t.number(e.count)} 個項目`,
    other: () => `已選取 ${t.number(e.count)} 個項目`
  })}。`,
  selectedItem: (e) => `已選取「${e.item}」。`
};
fi = {
  "ar-AE": rb,
  "bg-BG": ab,
  "cs-CZ": ib,
  "da-DK": lb,
  "de-DE": ob,
  "el-GR": ub,
  "en-US": sb,
  "es-ES": db,
  "et-EE": cb,
  "fi-FI": fb,
  "fr-FR": bb,
  "he-IL": pb,
  "hr-HR": mb,
  "hu-HU": hb,
  "it-IT": vb,
  "ja-JP": gb,
  "ko-KR": $b,
  "lt-LT": yb,
  "lv-LV": xb,
  "nb-NO": Db,
  "nl-NL": Cb,
  "pl-PL": Eb,
  "pt-BR": Pb,
  "pt-PT": wb,
  "ro-RO": Sb,
  "ru-RU": Bb,
  "sk-SK": kb,
  "sl-SI": Fb,
  "sr-SP": Ab,
  "sv-SE": Tb,
  "tr-TR": Mb,
  "uk-UA": Rb,
  "zh-CN": Ib,
  "zh-TW": Nb
};
function Kb(e, t) {
  let { getRowText: n = (l) => {
    var o, u, s, d;
    return (d = (o = (u = t.collection).getTextValue) === null || o === void 0 ? void 0 : o.call(u, l)) !== null && d !== void 0 ? d : (s = t.collection.getItem(l)) === null || s === void 0 ? void 0 : s.textValue;
  } } = e, r = Pe(/* @__PURE__ */ wo(fi), "@react-aria/grid"), a = t.selectionManager.rawSelection, i = I(a);
  wa(() => {
    var l;
    if (!t.selectionManager.isFocused) {
      i.current = a;
      return;
    }
    let o = cs(a, i.current), u = cs(i.current, a), s = t.selectionManager.selectionBehavior === "replace", d = [];
    if (t.selectionManager.selectedKeys.size === 1 && s) {
      if (t.collection.getItem(t.selectionManager.selectedKeys.keys().next().value)) {
        let c = n(t.selectionManager.selectedKeys.keys().next().value);
        c && d.push(r.format("selectedItem", {
          item: c
        }));
      }
    } else if (o.size === 1 && u.size === 0) {
      let c = n(o.keys().next().value);
      c && d.push(r.format("selectedItem", {
        item: c
      }));
    } else if (u.size === 1 && o.size === 0 && t.collection.getItem(u.keys().next().value)) {
      let c = n(u.keys().next().value);
      c && d.push(r.format("deselectedItem", {
        item: c
      }));
    }
    t.selectionManager.selectionMode === "multiple" && (d.length === 0 || a === "all" || a.size > 1 || i.current === "all" || ((l = i.current) === null || l === void 0 ? void 0 : l.size) > 1) && d.push(a === "all" ? r.format("selectedAll") : r.format("selectedCount", {
      count: a.size
    })), d.length > 0 && en(d.join(" ")), i.current = a;
  }, [
    a
  ]);
}
function cs(e, t) {
  let n = /* @__PURE__ */ new Set();
  if (e === "all" || t === "all")
    return n;
  for (let r of e.keys())
    t.has(r) || n.add(r);
  return n;
}
function zb(e) {
  let t = Pe(/* @__PURE__ */ wo(fi), "@react-aria/grid"), n = zr(), r = (n === "pointer" || n === "virtual" || n == null) && typeof window < "u" && "ontouchstart" in window, a = K(() => {
    let l = e.selectionManager.selectionMode, o = e.selectionManager.selectionBehavior, u;
    return r && (u = t.format("longPressToSelect")), o === "replace" && l !== "none" && e.hasItemActions ? u : void 0;
  }, [
    e.selectionManager.selectionMode,
    e.selectionManager.selectionBehavior,
    e.hasItemActions,
    t,
    r
  ]);
  return kt(a);
}
function r5(e, t, n) {
  let { isVirtualized: r, keyboardDelegate: a, focusMode: i, scrollRef: l, getRowText: o, onRowAction: u, onCellAction: s } = e, { selectionManager: d } = t;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let c = qn({
    usage: "search",
    sensitivity: "base"
  }), { direction: b } = oe(), f = t.selectionManager.disabledBehavior, p = K(() => a || new nb({
    collection: t.collection,
    disabledKeys: f === "selection" ? /* @__PURE__ */ new Set() : t.disabledKeys,
    ref: n,
    direction: b,
    collator: c,
    focusMode: i
  }), [
    a,
    t.collection,
    t.disabledKeys,
    f,
    n,
    b,
    c,
    i
  ]), { collectionProps: m } = ui({
    ref: n,
    selectionManager: d,
    keyboardDelegate: p,
    isVirtualized: r,
    scrollRef: l
  }), v = be(e.id);
  So.set(t, {
    keyboardDelegate: p,
    actions: {
      onRowAction: u,
      onCellAction: s
    }
  });
  let y = zb({
    selectionManager: d,
    hasItemActions: !!(u || s)
  }), $ = Y(e, {
    labelable: !0
  }), x = ee((R) => {
    if (d.isFocused) {
      R.currentTarget.contains(R.target) || d.setFocused(!1);
      return;
    }
    R.currentTarget.contains(R.target) && d.setFocused(!0);
  }, [
    d
  ]), C = K(() => ({
    onBlur: m.onBlur,
    onFocus: x
  }), [
    x,
    m.onBlur
  ]), P = ao(n, {
    isDisabled: t.collection.size !== 0
  }), B = j(
    $,
    {
      role: "grid",
      id: v,
      "aria-multiselectable": d.selectionMode === "multiple" ? "true" : void 0
    },
    t.isKeyboardNavigationDisabled ? C : m,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    t.collection.size === 0 && {
      tabIndex: P ? -1 : 0
    },
    y
  );
  return r && (B["aria-rowcount"] = t.collection.size, B["aria-colcount"] = t.collection.columnCount), Kb({
    getRowText: o
  }, t), {
    gridProps: B
  };
}
function a5() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function i5(e, t, n) {
  let { node: r, isVirtualized: a, shouldSelectOnPressUp: i, onAction: l } = e, { actions: { onRowAction: o } } = So.get(t), { itemProps: u, ...s } = Yn({
    selectionManager: t.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: a,
    shouldSelectOnPressUp: i,
    onAction: o ? () => o(r.key) : l,
    isDisabled: t.collection.size === 0
  }), d = t.selectionManager.isSelected(r.key), c = {
    role: "row",
    "aria-selected": t.selectionManager.selectionMode !== "none" ? d : void 0,
    "aria-disabled": s.isDisabled || void 0,
    ...u
  };
  return a && (c["aria-rowindex"] = r.index + 1), {
    rowProps: c,
    ...s
  };
}
function Vb(e, t, n) {
  let { node: r, isVirtualized: a, focusMode: i = "child", shouldSelectOnPressUp: l, onAction: o } = e, { direction: u } = oe(), { keyboardDelegate: s, actions: { onCellAction: d } } = So.get(t), c = I(null), b = () => {
    let x = Ne(n.current);
    if (i === "child") {
      if (n.current.contains(document.activeElement) && n.current !== document.activeElement)
        return;
      let C = t.selectionManager.childFocusStrategy === "last" ? Qi(x) : x.firstChild();
      if (C) {
        Ce(C);
        return;
      }
    }
    (c.current != null && r.key !== c.current || !n.current.contains(document.activeElement)) && Ce(n.current);
  }, { itemProps: f, isPressed: p } = Yn({
    selectionManager: t.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: a,
    focus: b,
    shouldSelectOnPressUp: l,
    onAction: d ? () => d(r.key) : o,
    isDisabled: t.collection.size === 0
  }), y = j(f, {
    role: "gridcell",
    onKeyDownCapture: (x) => {
      if (!x.currentTarget.contains(x.target) || t.isKeyboardNavigationDisabled)
        return;
      let C = Ne(n.current);
      switch (C.currentNode = document.activeElement, x.key) {
        case "ArrowLeft": {
          let P = u === "rtl" ? C.nextNode() : C.previousNode();
          if (i === "child" && P === n.current && (P = null), P)
            x.preventDefault(), x.stopPropagation(), Ce(P), Oe(P, {
              containingElement: ze(n.current)
            });
          else {
            if (s.getKeyLeftOf(r.key) !== r.key)
              break;
            x.preventDefault(), x.stopPropagation(), i === "cell" && u === "rtl" ? (Ce(n.current), Oe(n.current, {
              containingElement: ze(n.current)
            })) : (C.currentNode = n.current, P = u === "rtl" ? C.firstChild() : Qi(C), P && (Ce(P), Oe(P, {
              containingElement: ze(n.current)
            })));
          }
          break;
        }
        case "ArrowRight": {
          let P = u === "rtl" ? C.previousNode() : C.nextNode();
          if (i === "child" && P === n.current && (P = null), P)
            x.preventDefault(), x.stopPropagation(), Ce(P), Oe(P, {
              containingElement: ze(n.current)
            });
          else {
            if (s.getKeyRightOf(r.key) !== r.key)
              break;
            x.preventDefault(), x.stopPropagation(), i === "cell" && u === "ltr" ? (Ce(n.current), Oe(n.current, {
              containingElement: ze(n.current)
            })) : (C.currentNode = n.current, P = u === "rtl" ? Qi(C) : C.firstChild(), P && (Ce(P), Oe(P, {
              containingElement: ze(n.current)
            })));
          }
          break;
        }
        case "ArrowUp":
        case "ArrowDown":
          !x.altKey && n.current.contains(x.target) && (x.stopPropagation(), x.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(x.nativeEvent.type, x.nativeEvent)));
          break;
      }
    },
    onFocus: (x) => {
      if (c.current = r.key, x.target !== n.current) {
        gn() || t.selectionManager.setFocusedKey(r.key);
        return;
      }
      requestAnimationFrame(() => {
        i === "child" && document.activeElement === n.current && b();
      });
    }
  });
  var $;
  return a && (y["aria-colindex"] = (($ = r.colIndex) !== null && $ !== void 0 ? $ : r.index) + 1), l && y.tabIndex != null && y.onPointerDown == null && (y.onPointerDown = (x) => {
    let C = x.currentTarget, P = C.getAttribute("tabindex");
    C.removeAttribute("tabindex"), requestAnimationFrame(() => {
      C.setAttribute("tabindex", P);
    });
  }), {
    gridCellProps: y,
    isPressed: p
  };
}
function Qi(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
function Lb(e, t) {
  let { key: n } = e, r = t.selectionManager, a = be(), i = !t.selectionManager.canSelectItem(n), l = t.selectionManager.isSelected(n), o = () => r.select(n);
  const u = Pe(/* @__PURE__ */ wo(fi), "@react-aria/grid");
  return {
    checkboxProps: {
      id: a,
      "aria-label": u.format("select"),
      isSelected: l,
      isDisabled: i,
      onChange: o
    }
  };
}
const Bo = /* @__PURE__ */ new WeakMap();
function Fl(e, t) {
  let { id: n } = Bo.get(e);
  if (!n)
    throw new Error("Unknown list");
  return `${n}-${l5(t)}`;
}
function l5(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Ob(e, t, n) {
  let { isVirtualized: r, keyboardDelegate: a, onAction: i, linkBehavior: l = "action" } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let { listProps: o } = xo({
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    ref: n,
    keyboardDelegate: a,
    isVirtualized: r,
    selectOnFocus: t.selectionManager.selectionBehavior === "replace",
    shouldFocusWrap: e.shouldFocusWrap,
    linkBehavior: l
  }), u = be(e.id);
  Bo.set(t, {
    id: u,
    onAction: i,
    linkBehavior: l
  });
  let s = zb({
    selectionManager: t.selectionManager,
    hasItemActions: !!i
  }), d = ao(n, {
    isDisabled: t.collection.size !== 0
  }), c = Y(e, {
    labelable: !0
  }), b = j(
    c,
    {
      role: "grid",
      id: u,
      "aria-multiselectable": t.selectionManager.selectionMode === "multiple" ? "true" : void 0
    },
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    t.collection.size === 0 ? {
      tabIndex: d ? -1 : 0
    } : o,
    s
  );
  return r && (b["aria-rowcount"] = t.collection.size, b["aria-colcount"] = 1), Kb({}, t), {
    gridProps: b
  };
}
function jb(e, t, n) {
  let { node: r, isVirtualized: a, shouldSelectOnPressUp: i } = e, { direction: l } = oe(), { onAction: o, linkBehavior: u } = Bo.get(t), s = wt(), d = I(null), c = () => {
    (d.current != null && r.key !== d.current || !n.current.contains(document.activeElement)) && Ce(n.current);
  }, { itemProps: b, ...f } = Yn({
    selectionManager: t.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: a,
    shouldSelectOnPressUp: i,
    onAction: o ? () => o(r.key) : void 0,
    focus: c,
    linkBehavior: u
  }), p = (x) => {
    if (!x.currentTarget.contains(x.target))
      return;
    let C = Ne(n.current);
    switch (C.currentNode = document.activeElement, x.key) {
      case "ArrowLeft": {
        let P = l === "rtl" ? C.nextNode() : C.previousNode();
        if (P)
          x.preventDefault(), x.stopPropagation(), Ce(P), Oe(P, {
            containingElement: ze(n.current)
          });
        else if (x.preventDefault(), x.stopPropagation(), l === "rtl")
          Ce(n.current), Oe(n.current, {
            containingElement: ze(n.current)
          });
        else {
          C.currentNode = n.current;
          let B = fs(C);
          B && (Ce(B), Oe(B, {
            containingElement: ze(n.current)
          }));
        }
        break;
      }
      case "ArrowRight": {
        let P = l === "rtl" ? C.previousNode() : C.nextNode();
        if (P)
          x.preventDefault(), x.stopPropagation(), Ce(P), Oe(P, {
            containingElement: ze(n.current)
          });
        else if (x.preventDefault(), x.stopPropagation(), l === "ltr")
          Ce(n.current), Oe(n.current, {
            containingElement: ze(n.current)
          });
        else {
          C.currentNode = n.current;
          let B = fs(C);
          B && (Ce(B), Oe(B, {
            containingElement: ze(n.current)
          }));
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        !x.altKey && n.current.contains(x.target) && (x.stopPropagation(), x.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(x.nativeEvent.type, x.nativeEvent)));
        break;
    }
  }, m = (x) => {
    if (d.current = r.key, x.target !== n.current) {
      gn() || t.selectionManager.setFocusedKey(r.key);
      return;
    }
  }, v = f.hasAction ? Jl(r.props) : {}, y = j(b, v, {
    role: "row",
    onKeyDownCapture: p,
    onFocus: m,
    "aria-label": r.textValue || void 0,
    "aria-selected": t.selectionManager.canSelectItem(r.key) ? t.selectionManager.isSelected(r.key) : void 0,
    "aria-disabled": t.selectionManager.isDisabled(r.key) || void 0,
    "aria-labelledby": s && r.textValue ? `${Fl(t, r.key)} ${s}` : void 0,
    id: Fl(t, r.key)
  });
  return a && (y["aria-rowindex"] = r.index + 1), {
    rowProps: y,
    gridCellProps: {
      role: "gridcell",
      "aria-colindex": 1
    },
    descriptionProps: {
      id: s
    },
    ...f
  };
}
function fs(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
function o5(e, t) {
  let { key: n } = e;
  const { checkboxProps: r } = Lb(e, t);
  return {
    checkboxProps: {
      ...r,
      "aria-labelledby": `${r.id} ${Fl(t, n)}`
    }
  };
}
function Hb(e) {
  let { value: t = 0, minValue: n = 0, maxValue: r = 100, valueLabel: a, isIndeterminate: i, formatOptions: l = {
    style: "percent"
  } } = e, o = Y(e, {
    labelable: !0
  }), { labelProps: u, fieldProps: s } = Ur({
    ...e,
    // Progress bar is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  t = dt(t, n, r);
  let d = (t - n) / (r - n), c = Ha(l);
  if (!i && !a) {
    let b = l.style === "percent" ? d : t;
    a = c.format(b);
  }
  return {
    progressBarProps: j(o, {
      ...s,
      "aria-valuenow": i ? void 0 : t,
      "aria-valuemin": n,
      "aria-valuemax": r,
      "aria-valuetext": i ? void 0 : a,
      role: "progressbar"
    }),
    labelProps: u
  };
}
function u5(e) {
  let { progressBarProps: t, labelProps: n } = Hb(e);
  return {
    meterProps: {
      ...t,
      // Use the meter role if available, but fall back to progressbar if not
      // Chrome currently falls back from meter automatically, and Firefox
      // does not support meter at all. Safari 13+ seems to support meter properly.
      // https://bugs.chromium.org/p/chromium/issues/detail?id=944542
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1460378
      role: "meter progressbar"
    },
    labelProps: n
  };
}
function s5(e) {
  return e && e.__esModule ? e.default : e;
}
var _b = {}, Ub = {};
Ub = {
  decrease: (e) => `خفض ${e.fieldLabel}`,
  increase: (e) => `زيادة ${e.fieldLabel}`,
  numberField: "حقل رقمي"
};
var Wb = {};
Wb = {
  decrease: (e) => `Намаляване ${e.fieldLabel}`,
  increase: (e) => `Усилване ${e.fieldLabel}`,
  numberField: "Номер на полето"
};
var Gb = {};
Gb = {
  decrease: (e) => `Snížit ${e.fieldLabel}`,
  increase: (e) => `Zvýšit ${e.fieldLabel}`,
  numberField: "Číselné pole"
};
var Zb = {};
Zb = {
  decrease: (e) => `Reducer ${e.fieldLabel}`,
  increase: (e) => `Øg ${e.fieldLabel}`,
  numberField: "Talfelt"
};
var qb = {};
qb = {
  decrease: (e) => `${e.fieldLabel} verringern`,
  increase: (e) => `${e.fieldLabel} erhöhen`,
  numberField: "Nummernfeld"
};
var Yb = {};
Yb = {
  decrease: (e) => `Μείωση ${e.fieldLabel}`,
  increase: (e) => `Αύξηση ${e.fieldLabel}`,
  numberField: "Πεδίο αριθμού"
};
var Jb = {};
Jb = {
  decrease: (e) => `Decrease ${e.fieldLabel}`,
  increase: (e) => `Increase ${e.fieldLabel}`,
  numberField: "Number field"
};
var Xb = {};
Xb = {
  decrease: (e) => `Reducir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo de número"
};
var Qb = {};
Qb = {
  decrease: (e) => `Vähenda ${e.fieldLabel}`,
  increase: (e) => `Suurenda ${e.fieldLabel}`,
  numberField: "Numbri väli"
};
var ep = {};
ep = {
  decrease: (e) => `Vähennä ${e.fieldLabel}`,
  increase: (e) => `Lisää ${e.fieldLabel}`,
  numberField: "Numerokenttä"
};
var tp = {};
tp = {
  decrease: (e) => `Diminuer ${e.fieldLabel}`,
  increase: (e) => `Augmenter ${e.fieldLabel}`,
  numberField: "Champ de nombre"
};
var np = {};
np = {
  decrease: (e) => `הקטן ${e.fieldLabel}`,
  increase: (e) => `הגדל ${e.fieldLabel}`,
  numberField: "שדה מספר"
};
var rp = {};
rp = {
  decrease: (e) => `Smanji ${e.fieldLabel}`,
  increase: (e) => `Povećaj ${e.fieldLabel}`,
  numberField: "Polje broja"
};
var ap = {};
ap = {
  decrease: (e) => `${e.fieldLabel} csökkentése`,
  increase: (e) => `${e.fieldLabel} növelése`,
  numberField: "Számmező"
};
var ip = {};
ip = {
  decrease: (e) => `Riduci ${e.fieldLabel}`,
  increase: (e) => `Aumenta ${e.fieldLabel}`,
  numberField: "Campo numero"
};
var lp = {};
lp = {
  decrease: (e) => `${e.fieldLabel}を縮小`,
  increase: (e) => `${e.fieldLabel}を拡大`,
  numberField: "数値フィールド"
};
var op = {};
op = {
  decrease: (e) => `${e.fieldLabel} 감소`,
  increase: (e) => `${e.fieldLabel} 증가`,
  numberField: "번호 필드"
};
var up = {};
up = {
  decrease: (e) => `Sumažinti ${e.fieldLabel}`,
  increase: (e) => `Padidinti ${e.fieldLabel}`,
  numberField: "Numerio laukas"
};
var sp = {};
sp = {
  decrease: (e) => `Samazināšana ${e.fieldLabel}`,
  increase: (e) => `Palielināšana ${e.fieldLabel}`,
  numberField: "Skaitļu lauks"
};
var dp = {};
dp = {
  decrease: (e) => `Reduser ${e.fieldLabel}`,
  increase: (e) => `Øk ${e.fieldLabel}`,
  numberField: "Tallfelt"
};
var cp = {};
cp = {
  decrease: (e) => `${e.fieldLabel} verlagen`,
  increase: (e) => `${e.fieldLabel} verhogen`,
  numberField: "Getalveld"
};
var fp = {};
fp = {
  decrease: (e) => `Zmniejsz ${e.fieldLabel}`,
  increase: (e) => `Zwiększ ${e.fieldLabel}`,
  numberField: "Pole numeru"
};
var bp = {};
bp = {
  decrease: (e) => `Diminuir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo de número"
};
var pp = {};
pp = {
  decrease: (e) => `Diminuir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo numérico"
};
var mp = {};
mp = {
  decrease: (e) => `Scădere ${e.fieldLabel}`,
  increase: (e) => `Creștere ${e.fieldLabel}`,
  numberField: "Câmp numeric"
};
var hp = {};
hp = {
  decrease: (e) => `Уменьшение ${e.fieldLabel}`,
  increase: (e) => `Увеличение ${e.fieldLabel}`,
  numberField: "Числовое поле"
};
var vp = {};
vp = {
  decrease: (e) => `Znížiť ${e.fieldLabel}`,
  increase: (e) => `Zvýšiť ${e.fieldLabel}`,
  numberField: "Číselné pole"
};
var gp = {};
gp = {
  decrease: (e) => `Upadati ${e.fieldLabel}`,
  increase: (e) => `Povečajte ${e.fieldLabel}`,
  numberField: "Številčno polje"
};
var $p = {};
$p = {
  decrease: (e) => `Smanji ${e.fieldLabel}`,
  increase: (e) => `Povećaj ${e.fieldLabel}`,
  numberField: "Polje broja"
};
var yp = {};
yp = {
  decrease: (e) => `Minska ${e.fieldLabel}`,
  increase: (e) => `Öka ${e.fieldLabel}`,
  numberField: "Nummerfält"
};
var xp = {};
xp = {
  decrease: (e) => `${e.fieldLabel} azalt`,
  increase: (e) => `${e.fieldLabel} arttır`,
  numberField: "Sayı alanı"
};
var Dp = {};
Dp = {
  decrease: (e) => `Зменшити ${e.fieldLabel}`,
  increase: (e) => `Збільшити ${e.fieldLabel}`,
  numberField: "Поле номера"
};
var Cp = {};
Cp = {
  decrease: (e) => `降低 ${e.fieldLabel}`,
  increase: (e) => `提高 ${e.fieldLabel}`,
  numberField: "数字字段"
};
var Ep = {};
Ep = {
  decrease: (e) => `縮小 ${e.fieldLabel}`,
  increase: (e) => `放大 ${e.fieldLabel}`,
  numberField: "數字欄位"
};
_b = {
  "ar-AE": Ub,
  "bg-BG": Wb,
  "cs-CZ": Gb,
  "da-DK": Zb,
  "de-DE": qb,
  "el-GR": Yb,
  "en-US": Jb,
  "es-ES": Xb,
  "et-EE": Qb,
  "fi-FI": ep,
  "fr-FR": tp,
  "he-IL": np,
  "hr-HR": rp,
  "hu-HU": ap,
  "it-IT": ip,
  "ja-JP": lp,
  "ko-KR": op,
  "lt-LT": up,
  "lv-LV": sp,
  "nb-NO": dp,
  "nl-NL": cp,
  "pl-PL": fp,
  "pt-BR": bp,
  "pt-PT": pp,
  "ro-RO": mp,
  "ru-RU": hp,
  "sk-SK": vp,
  "sl-SI": gp,
  "sr-SP": $p,
  "sv-SE": yp,
  "tr-TR": xp,
  "uk-UA": Dp,
  "zh-CN": Cp,
  "zh-TW": Ep
};
function d5(e, t, n) {
  let { id: r, decrementAriaLabel: a, incrementAriaLabel: i, isDisabled: l, isReadOnly: o, isRequired: u, minValue: s, maxValue: d, autoFocus: c, label: b, formatOptions: f, onBlur: p = () => {
  }, onFocus: m, onFocusChange: v, onKeyDown: y, onKeyUp: $, description: x, errorMessage: C, isWheelDisabled: P, ...B } = e, { increment: R, incrementToMax: g, decrement: M, decrementToMin: F, numberValue: E, inputValue: S, commit: w, commitValidation: A } = t;
  const z = Pe(/* @__PURE__ */ s5(_b), "@react-aria/numberfield");
  let T = be(r), { focusProps: D } = Xa({
    onBlur() {
      w();
    }
  }), H = Ha(f), _ = K(() => H.resolvedOptions(), [
    H
  ]), L = Ha({
    ...f,
    currencySign: void 0
  }), V = K(() => isNaN(E) ? "" : L.format(E), [
    L,
    E
  ]), { spinButtonProps: N, incrementButtonProps: G, decrementButtonProps: re } = $0({
    isDisabled: l,
    isReadOnly: o,
    isRequired: u,
    maxValue: d,
    minValue: s,
    onIncrement: R,
    onIncrementToMax: g,
    onDecrement: M,
    onDecrementToMin: F,
    value: E,
    textValue: V
  }), [se, we] = Z(!1), { focusWithinProps: O } = ft({
    isDisabled: l,
    onFocusWithinChange: we
  }), X = ee((qe) => {
    Math.abs(qe.deltaY) <= Math.abs(qe.deltaX) || (qe.deltaY > 0 ? R() : qe.deltaY < 0 && M());
  }, [
    M,
    R
  ]);
  b$({
    onScroll: X,
    isDisabled: P || l || o || !se
  }, n);
  let De = _.maximumFractionDigits > 0, ae = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, at = "numeric";
  Ws() ? ae ? at = "text" : De && (at = "decimal") : gr() && (ae ? at = "numeric" : De && (at = "decimal"));
  let Bn = (qe) => {
    t.validate(qe) && t.setInputValue(qe);
  }, Xn = Y(e), aa = ee((qe) => {
    qe.key === "Enter" ? (w(), A()) : qe.continuePropagation();
  }, [
    w,
    A
  ]), { isInvalid: Qn, validationErrors: Bi, validationDetails: ki } = t.displayValidation, { labelProps: ue, inputProps: ge, descriptionProps: Ie, errorMessageProps: ag } = Uy({
    ...B,
    ...Xn,
    name: void 0,
    label: b,
    autoFocus: c,
    isDisabled: l,
    isReadOnly: o,
    isRequired: u,
    validate: void 0,
    [tn]: t,
    value: S,
    defaultValue: void 0,
    autoComplete: "off",
    "aria-label": e["aria-label"] || void 0,
    "aria-labelledby": e["aria-labelledby"] || void 0,
    id: T,
    type: "text",
    inputMode: at,
    onChange: Bn,
    onBlur: p,
    onFocus: m,
    onFocusChange: v,
    onKeyDown: K(() => St(aa, y), [
      aa,
      y
    ]),
    onKeyUp: $,
    description: x,
    errorMessage: C
  }, t, n);
  xn(n, t.numberValue, t.setNumberValue);
  let au = j(N, D, ge, {
    // override the spinbutton role, we can't focus a spin button with VO
    role: null,
    // ignore aria-roledescription on iOS so that required state will announce when it is present
    "aria-roledescription": Gn() ? null : z.format("numberField"),
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null,
    autoCorrect: "off",
    spellCheck: "false"
  });
  e.validationBehavior === "native" && (au["aria-required"] = void 0);
  let iu = (qe) => {
    var Ai;
    document.activeElement !== n.current && (qe.pointerType === "mouse" ? (Ai = n.current) === null || Ai === void 0 || Ai.focus() : qe.target.focus());
  }, Fi = e["aria-label"] || (typeof e.label == "string" ? e.label : ""), un;
  Fi || (un = e.label != null ? ue.id : e["aria-labelledby"]);
  let lu = be(), ou = be(), ig = j(G, {
    "aria-label": i || z.format("increase", {
      fieldLabel: Fi
    }).trim(),
    id: un && !i ? lu : null,
    "aria-labelledby": un && !i ? `${lu} ${un}` : null,
    "aria-controls": T,
    excludeFromTabOrder: !0,
    preventFocusOnPress: !0,
    allowFocusWhenDisabled: !0,
    isDisabled: !t.canIncrement,
    onPressStart: iu
  }), lg = j(re, {
    "aria-label": a || z.format("decrease", {
      fieldLabel: Fi
    }).trim(),
    id: un && !a ? ou : null,
    "aria-labelledby": un && !a ? `${ou} ${un}` : null,
    "aria-controls": T,
    excludeFromTabOrder: !0,
    preventFocusOnPress: !0,
    allowFocusWhenDisabled: !0,
    isDisabled: !t.canDecrement,
    onPressStart: iu
  });
  return {
    groupProps: {
      ...O,
      role: "group",
      "aria-disabled": l,
      "aria-invalid": Qn ? "true" : void 0
    },
    labelProps: ue,
    inputProps: au,
    incrementButtonProps: ig,
    decrementButtonProps: lg,
    errorMessageProps: ag,
    descriptionProps: Ie,
    isInvalid: Qn,
    validationErrors: Bi,
    validationDetails: ki
  };
}
const Pp = /* @__PURE__ */ new WeakMap();
function c5(e, t, n) {
  let { value: r, children: a, "aria-label": i, "aria-labelledby": l } = e;
  const o = e.isDisabled || t.isDisabled;
  let u = a != null, s = i != null || l != null;
  !u && !s && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let d = t.selectedValue === r, c = (g) => {
    g.stopPropagation(), t.setSelectedValue(r);
  }, { pressProps: b, isPressed: f } = Je({
    isDisabled: o
  }), { pressProps: p, isPressed: m } = Je({
    isDisabled: o,
    onPress() {
      t.setSelectedValue(r);
    }
  }), { focusableProps: v } = Dn(j(e, {
    onFocus: () => t.setLastFocusedValue(r)
  }), n), y = j(b, v), $ = Y(e, {
    labelable: !0
  }), x = -1;
  t.selectedValue != null ? t.selectedValue === r && (x = 0) : (t.lastFocusedValue === r || t.lastFocusedValue == null) && (x = 0), o && (x = void 0);
  let { name: C, descriptionId: P, errorMessageId: B, validationBehavior: R } = Pp.get(t);
  return xn(n, t.selectedValue, t.setSelectedValue), _r({
    validationBehavior: R
  }, t, n), {
    labelProps: j(p, {
      onClick: (g) => g.preventDefault()
    }),
    inputProps: j($, {
      ...y,
      type: "radio",
      name: C,
      tabIndex: x,
      disabled: o,
      required: t.isRequired && R === "native",
      checked: d,
      value: r,
      onChange: c,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? B : null,
        P
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: o,
    isSelected: d,
    isPressed: f || m
  };
}
function f5(e, t) {
  let { name: n, isReadOnly: r, isRequired: a, isDisabled: i, orientation: l = "vertical", validationBehavior: o = "aria" } = e, { direction: u } = oe(), { isInvalid: s, validationErrors: d, validationDetails: c } = t.displayValidation, { labelProps: b, fieldProps: f, descriptionProps: p, errorMessageProps: m } = an({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || d
  }), v = Y(e, {
    labelable: !0
  }), { focusWithinProps: y } = ft({
    onBlurWithin(C) {
      var P;
      (P = e.onBlur) === null || P === void 0 || P.call(e, C), t.selectedValue || t.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), $ = (C) => {
    let P;
    switch (C.key) {
      case "ArrowRight":
        u === "rtl" && l !== "vertical" ? P = "prev" : P = "next";
        break;
      case "ArrowLeft":
        u === "rtl" && l !== "vertical" ? P = "next" : P = "prev";
        break;
      case "ArrowDown":
        P = "next";
        break;
      case "ArrowUp":
        P = "prev";
        break;
      default:
        return;
    }
    C.preventDefault();
    let B = Ne(C.currentTarget, {
      from: C.target
    }), R;
    P === "next" ? (R = B.nextNode(), R || (B.currentNode = C.currentTarget, R = B.firstChild())) : (R = B.previousNode(), R || (B.currentNode = C.currentTarget, R = B.lastChild())), R && (R.focus(), t.setSelectedValue(R.value));
  }, x = be(n);
  return Pp.set(t, {
    name: x,
    descriptionId: p.id,
    errorMessageId: m.id,
    validationBehavior: o
  }), {
    radioGroupProps: j(v, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: $,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": r || void 0,
      "aria-required": a || void 0,
      "aria-disabled": i || void 0,
      "aria-orientation": l,
      ...f,
      ...y
    }),
    labelProps: b,
    descriptionProps: p,
    errorMessageProps: m,
    isInvalid: s,
    validationErrors: d,
    validationDetails: c
  };
}
function b5(e) {
  return e && e.__esModule ? e.default : e;
}
var wp = {}, Sp = {};
Sp = {
  "Clear search": "مسح البحث"
};
var Bp = {};
Bp = {
  "Clear search": "Изчистване на търсене"
};
var kp = {};
kp = {
  "Clear search": "Vymazat hledání"
};
var Fp = {};
Fp = {
  "Clear search": "Ryd søgning"
};
var Ap = {};
Ap = {
  "Clear search": "Suche zurücksetzen"
};
var Tp = {};
Tp = {
  "Clear search": "Απαλοιφή αναζήτησης"
};
var Mp = {};
Mp = {
  "Clear search": "Clear search"
};
var Rp = {};
Rp = {
  "Clear search": "Borrar búsqueda"
};
var Ip = {};
Ip = {
  "Clear search": "Tühjenda otsing"
};
var Np = {};
Np = {
  "Clear search": "Tyhjennä haku"
};
var Kp = {};
Kp = {
  "Clear search": "Effacer la recherche"
};
var zp = {};
zp = {
  "Clear search": "נקה חיפוש"
};
var Vp = {};
Vp = {
  "Clear search": "Obriši pretragu"
};
var Lp = {};
Lp = {
  "Clear search": "Keresés törlése"
};
var Op = {};
Op = {
  "Clear search": "Cancella ricerca"
};
var jp = {};
jp = {
  "Clear search": "検索をクリア"
};
var Hp = {};
Hp = {
  "Clear search": "검색 지우기"
};
var _p = {};
_p = {
  "Clear search": "Išvalyti iešką"
};
var Up = {};
Up = {
  "Clear search": "Notīrīt meklēšanu"
};
var Wp = {};
Wp = {
  "Clear search": "Tøm søk"
};
var Gp = {};
Gp = {
  "Clear search": "Zoekactie wissen"
};
var Zp = {};
Zp = {
  "Clear search": "Wyczyść zawartość wyszukiwania"
};
var qp = {};
qp = {
  "Clear search": "Limpar pesquisa"
};
var Yp = {};
Yp = {
  "Clear search": "Limpar pesquisa"
};
var Jp = {};
Jp = {
  "Clear search": "Ştergeţi căutarea"
};
var Xp = {};
Xp = {
  "Clear search": "Очистить поиск"
};
var Qp = {};
Qp = {
  "Clear search": "Vymazať vyhľadávanie"
};
var em = {};
em = {
  "Clear search": "Počisti iskanje"
};
var tm = {};
tm = {
  "Clear search": "Obriši pretragu"
};
var nm = {};
nm = {
  "Clear search": "Rensa sökning"
};
var rm = {};
rm = {
  "Clear search": "Aramayı temizle"
};
var am = {};
am = {
  "Clear search": "Очистити пошук"
};
var im = {};
im = {
  "Clear search": "清除搜索"
};
var lm = {};
lm = {
  "Clear search": "清除搜尋條件"
};
wp = {
  "ar-AE": Sp,
  "bg-BG": Bp,
  "cs-CZ": kp,
  "da-DK": Fp,
  "de-DE": Ap,
  "el-GR": Tp,
  "en-US": Mp,
  "es-ES": Rp,
  "et-EE": Ip,
  "fi-FI": Np,
  "fr-FR": Kp,
  "he-IL": zp,
  "hr-HR": Vp,
  "hu-HU": Lp,
  "it-IT": Op,
  "ja-JP": jp,
  "ko-KR": Hp,
  "lt-LT": _p,
  "lv-LV": Up,
  "nb-NO": Wp,
  "nl-NL": Gp,
  "pl-PL": Zp,
  "pt-BR": qp,
  "pt-PT": Yp,
  "ro-RO": Jp,
  "ru-RU": Xp,
  "sk-SK": Qp,
  "sl-SI": em,
  "sr-SP": tm,
  "sv-SE": nm,
  "tr-TR": rm,
  "uk-UA": am,
  "zh-CN": im,
  "zh-TW": lm
};
function p5(e, t, n) {
  let r = Pe(/* @__PURE__ */ b5(wp), "@react-aria/searchfield"), { isDisabled: a, isReadOnly: i, onSubmit: l = () => {
  }, onClear: o, type: u = "search" } = e, s = (y) => {
    const $ = y.key;
    $ === "Enter" && y.preventDefault(), !(a || i) && ($ === "Enter" && l(t.value), $ === "Escape" && (t.value === "" ? y.continuePropagation() : (t.setValue(""), o && o())));
  }, d = () => {
    t.setValue(""), o && o();
  }, c = () => {
    var y;
    (y = n.current) === null || y === void 0 || y.focus();
  }, { labelProps: b, inputProps: f, descriptionProps: p, errorMessageProps: m, ...v } = di({
    ...e,
    value: t.value,
    onChange: t.setValue,
    onKeyDown: i ? e.onKeyDown : St(s, e.onKeyDown),
    type: u
  }, n);
  return {
    labelProps: b,
    inputProps: {
      ...f,
      // already handled by useSearchFieldState
      defaultValue: void 0
    },
    clearButtonProps: {
      "aria-label": r.format("Clear search"),
      excludeFromTabOrder: !0,
      // @ts-ignore
      preventFocusOnPress: !0,
      isDisabled: a || i,
      onPress: d,
      onPressStart: c
    },
    descriptionProps: p,
    errorMessageProps: m,
    ...v
  };
}
const bs = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function _t(e = {}) {
  let { style: t, isFocusable: n } = e, [r, a] = Z(!1), { focusWithinProps: i } = ft({
    isDisabled: !n,
    onFocusWithinChange: (o) => a(o)
  }), l = K(() => r ? t : t ? {
    ...bs,
    ...t
  } : bs, [
    r
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: l
    }
  };
}
function nn(e) {
  let { children: t, elementType: n = "div", isFocusable: r, style: a, ...i } = e, { visuallyHiddenProps: l } = _t(e);
  return /* @__PURE__ */ h.createElement(n, j(i, l), t);
}
const om = /* @__PURE__ */ new WeakMap();
function m5(e, t, n) {
  let { keyboardDelegate: r, isDisabled: a, isRequired: i, name: l, validationBehavior: o = "aria" } = e, u = qn({
    usage: "search",
    sensitivity: "base"
  }), s = K(() => r || new En(t.collection, t.disabledKeys, null, u), [
    r,
    t.collection,
    t.disabledKeys,
    u
  ]), { menuTriggerProps: d, menuProps: c } = e4({
    isDisabled: a,
    type: "listbox"
  }, t, n), b = (g) => {
    switch (g.key) {
      case "ArrowLeft": {
        g.preventDefault();
        let M = t.selectedKey != null ? s.getKeyAbove(t.selectedKey) : s.getFirstKey();
        M && t.setSelectedKey(M);
        break;
      }
      case "ArrowRight": {
        g.preventDefault();
        let M = t.selectedKey != null ? s.getKeyBelow(t.selectedKey) : s.getFirstKey();
        M && t.setSelectedKey(M);
        break;
      }
    }
  }, { typeSelectProps: f } = vf({
    keyboardDelegate: s,
    selectionManager: t.selectionManager,
    onTypeSelect(g) {
      t.setSelectedKey(g);
    }
  }), { isInvalid: p, validationErrors: m, validationDetails: v } = t.displayValidation, { labelProps: y, fieldProps: $, descriptionProps: x, errorMessageProps: C } = an({
    ...e,
    labelElementType: "span",
    isInvalid: p,
    errorMessage: e.errorMessage || m
  });
  f.onKeyDown = f.onKeyDownCapture, delete f.onKeyDownCapture;
  let P = Y(e, {
    labelable: !0
  }), B = j(f, d, $), R = be();
  return om.set(t, {
    isDisabled: a,
    isRequired: i,
    name: l,
    validationBehavior: o
  }), {
    labelProps: {
      ...y,
      onClick: () => {
        e.isDisabled || (n.current.focus(), eo("keyboard"));
      }
    },
    triggerProps: j(P, {
      ...B,
      isDisabled: a,
      onKeyDown: St(B.onKeyDown, b, e.onKeyDown),
      onKeyUp: e.onKeyUp,
      "aria-labelledby": [
        R,
        B["aria-labelledby"],
        B["aria-label"] && !B["aria-labelledby"] ? B.id : null
      ].filter(Boolean).join(" "),
      onFocus(g) {
        t.isFocused || (e.onFocus && e.onFocus(g), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
      },
      onBlur(g) {
        t.isOpen || (e.onBlur && e.onBlur(g), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
      }
    }),
    valueProps: {
      id: R
    },
    menuProps: {
      ...c,
      autoFocus: t.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: (g) => {
        g.currentTarget.contains(g.relatedTarget) || (e.onBlur && e.onBlur(g), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
      },
      "aria-labelledby": [
        $["aria-labelledby"],
        B["aria-label"] && !$["aria-labelledby"] ? B.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: x,
    errorMessageProps: C,
    isInvalid: p,
    validationErrors: m,
    validationDetails: v
  };
}
function h5(e, t, n) {
  let r = om.get(t) || {}, { autoComplete: a, name: i = r.name, isDisabled: l = r.isDisabled } = e, { validationBehavior: o, isRequired: u } = r, s = zr(), { visuallyHiddenProps: d } = _t();
  xn(e.selectRef, t.selectedKey, t.setSelectedKey), _r({
    validationBehavior: o,
    focus: () => n.current.focus()
  }, t, e.selectRef);
  var c;
  return {
    containerProps: {
      ...d,
      "aria-hidden": !0,
      "data-a11y-ignore": "aria-hidden-focus"
    },
    inputProps: {
      type: "text",
      tabIndex: s == null || t.isFocused || t.isOpen ? -1 : 0,
      style: {
        fontSize: 16
      },
      onFocus: () => n.current.focus(),
      disabled: l
    },
    selectProps: {
      tabIndex: -1,
      autoComplete: a,
      disabled: l,
      required: o === "native" && u,
      name: i,
      value: (c = t.selectedKey) !== null && c !== void 0 ? c : "",
      onChange: (b) => t.setSelectedKey(b.target.value)
    }
  };
}
function v5(e) {
  let { state: t, triggerRef: n, label: r, name: a, isDisabled: i } = e, l = I(null), { containerProps: o, inputProps: u, selectProps: s } = h5({
    ...e,
    selectRef: l
  }, t, n);
  var d;
  return t.collection.size <= 300 ? /* @__PURE__ */ h.createElement("div", {
    ...o,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ h.createElement("input", u), /* @__PURE__ */ h.createElement("label", null, r, /* @__PURE__ */ h.createElement("select", {
    ...s,
    ref: l
  }, /* @__PURE__ */ h.createElement("option", null), [
    ...t.collection.getKeys()
  ].map((c) => {
    let b = t.collection.getItem(c);
    if (b.type === "item")
      return /* @__PURE__ */ h.createElement("option", {
        key: b.key,
        value: b.key
      }, b.textValue);
  })))) : a ? /* @__PURE__ */ h.createElement("input", {
    type: "hidden",
    autoComplete: s.autoComplete,
    name: a,
    disabled: i,
    value: (d = t.selectedKey) !== null && d !== void 0 ? d : ""
  }) : null;
}
function g5(e) {
  let t = Y(e, {
    labelable: !0
  }), n;
  return e.orientation === "vertical" && (n = "vertical"), e.elementType !== "hr" ? {
    separatorProps: {
      ...t,
      role: "separator",
      "aria-orientation": n
    }
  } : {
    separatorProps: t
  };
}
const ko = /* @__PURE__ */ new WeakMap();
function Al(e, t) {
  let n = ko.get(e);
  if (!n)
    throw new Error("Unknown slider state");
  return `${n.id}-${t}`;
}
function $5(e, t, n) {
  let { labelProps: r, fieldProps: a } = Ur(e), i = e.orientation === "vertical";
  var l;
  ko.set(t, {
    id: (l = r.id) !== null && l !== void 0 ? l : a.id,
    "aria-describedby": e["aria-describedby"],
    "aria-details": e["aria-details"]
  });
  let { direction: o } = oe(), { addGlobalListener: u, removeGlobalListener: s } = Zn();
  const d = I(null), c = o === "rtl", b = I(null), { moveProps: f } = to({
    onMoveStart() {
      b.current = null;
    },
    onMove({ deltaX: y, deltaY: $ }) {
      let { height: x, width: C } = n.current.getBoundingClientRect(), P = i ? x : C;
      b.current == null && (b.current = t.getThumbPercent(d.current) * P);
      let B = i ? $ : y;
      if ((i || c) && (B = -B), b.current += B, d.current != null && n.current) {
        const R = dt(b.current / P, 0, 1);
        t.setThumbPercent(d.current, R);
      }
    },
    onMoveEnd() {
      d.current != null && (t.setThumbDragging(d.current, !1), d.current = null);
    }
  });
  let p = I(void 0), m = (y, $, x, C) => {
    if (n.current && !e.isDisabled && t.values.every((P, B) => !t.isThumbDragging(B))) {
      let { height: P, width: B, top: R, left: g } = n.current.getBoundingClientRect(), M = i ? P : B, w = ((i ? C : x) - (i ? R : g)) / M;
      (o === "rtl" || i) && (w = 1 - w);
      let A = t.getPercentValue(w), z, T = t.values.findIndex((D) => A - D < 0);
      if (T === 0)
        z = T;
      else if (T === -1)
        z = t.values.length - 1;
      else {
        let D = t.values[T - 1], H = t.values[T];
        Math.abs(D - A) < Math.abs(H - A) ? z = T - 1 : z = T;
      }
      z >= 0 && t.isThumbEditable(z) ? (y.preventDefault(), d.current = z, t.setFocusedThumb(z), p.current = $, t.setThumbDragging(d.current, !0), t.setThumbValue(z, A), u(window, "mouseup", v, !1), u(window, "touchend", v, !1), u(window, "pointerup", v, !1)) : d.current = null;
    }
  }, v = (y) => {
    var $, x;
    ((x = y.pointerId) !== null && x !== void 0 ? x : ($ = y.changedTouches) === null || $ === void 0 ? void 0 : $[0].identifier) === p.current && (d.current != null && (t.setThumbDragging(d.current, !1), d.current = null), s(window, "mouseup", v, !1), s(window, "touchend", v, !1), s(window, "pointerup", v, !1));
  };
  return "htmlFor" in r && r.htmlFor && (delete r.htmlFor, r.onClick = () => {
    var y;
    (y = document.getElementById(Al(t, 0))) === null || y === void 0 || y.focus(), eo("keyboard");
  }), {
    labelProps: r,
    // The root element of the Slider will have role="group" to group together
    // all the thumb inputs in the Slider.  The label of the Slider will
    // be used to label the group.
    groupProps: {
      role: "group",
      ...a
    },
    trackProps: j({
      onMouseDown(y) {
        y.button !== 0 || y.altKey || y.ctrlKey || y.metaKey || m(y, void 0, y.clientX, y.clientY);
      },
      onPointerDown(y) {
        y.pointerType === "mouse" && (y.button !== 0 || y.altKey || y.ctrlKey || y.metaKey) || m(y, y.pointerId, y.clientX, y.clientY);
      },
      onTouchStart(y) {
        m(y, y.changedTouches[0].identifier, y.changedTouches[0].clientX, y.changedTouches[0].clientY);
      },
      style: {
        position: "relative",
        touchAction: "none"
      }
    }, f),
    outputProps: {
      htmlFor: t.values.map((y, $) => Al(t, $)).join(" "),
      "aria-live": "off"
    }
  };
}
function y5(e, t) {
  let { index: n = 0, isRequired: r, validationState: a, isInvalid: i, trackRef: l, inputRef: o, orientation: u = t.orientation, name: s } = e, d = e.isDisabled || t.isDisabled, c = u === "vertical", { direction: b } = oe(), { addGlobalListener: f, removeGlobalListener: p } = Zn(), m = ko.get(t);
  var v;
  const { labelProps: y, fieldProps: $ } = Ur({
    ...e,
    id: Al(t, n),
    "aria-labelledby": `${m.id} ${(v = e["aria-labelledby"]) !== null && v !== void 0 ? v : ""}`.trim()
  }), x = t.values[n], C = ee(() => {
    o.current && yt(o.current);
  }, [
    o
  ]), P = t.focusedThumb === n;
  J(() => {
    P && C();
  }, [
    P,
    C
  ]);
  let B = b === "rtl", R = I(null), { keyboardProps: g } = ei({
    onKeyDown(T) {
      let { getThumbMaxValue: D, getThumbMinValue: H, decrementThumb: _, incrementThumb: L, setThumbValue: V, setThumbDragging: N, pageSize: G } = t;
      if (!/^(PageUp|PageDown|Home|End)$/.test(T.key)) {
        T.continuePropagation();
        return;
      }
      switch (T.preventDefault(), N(n, !0), T.key) {
        case "PageUp":
          L(n, G);
          break;
        case "PageDown":
          _(n, G);
          break;
        case "Home":
          V(n, H(n));
          break;
        case "End":
          V(n, D(n));
          break;
      }
      N(n, !1);
    }
  }), { moveProps: M } = to({
    onMoveStart() {
      R.current = null, t.setThumbDragging(n, !0);
    },
    onMove({ deltaX: T, deltaY: D, pointerType: H, shiftKey: _ }) {
      const { getThumbPercent: L, setThumbPercent: V, decrementThumb: N, incrementThumb: G, step: re, pageSize: se } = t;
      let { width: we, height: O } = l.current.getBoundingClientRect(), X = c ? O : we;
      if (R.current == null && (R.current = L(n) * X), H === "keyboard")
        T > 0 && B || T < 0 && !B || D > 0 ? N(n, _ ? se : re) : G(n, _ ? se : re);
      else {
        let ce = c ? D : T;
        (c || B) && (ce = -ce), R.current += ce, V(n, dt(R.current / X, 0, 1));
      }
    },
    onMoveEnd() {
      t.setThumbDragging(n, !1);
    }
  });
  t.setThumbEditable(n, !d);
  const { focusableProps: F } = Dn(j(e, {
    onFocus: () => t.setFocusedThumb(n),
    onBlur: () => t.setFocusedThumb(void 0)
  }), o);
  let E = I(void 0), S = (T) => {
    C(), E.current = T, t.setThumbDragging(n, !0), f(window, "mouseup", w, !1), f(window, "touchend", w, !1), f(window, "pointerup", w, !1);
  }, w = (T) => {
    var D, H;
    ((H = T.pointerId) !== null && H !== void 0 ? H : (D = T.changedTouches) === null || D === void 0 ? void 0 : D[0].identifier) === E.current && (C(), t.setThumbDragging(n, !1), p(window, "mouseup", w, !1), p(window, "touchend", w, !1), p(window, "pointerup", w, !1));
  }, A = t.getThumbPercent(n);
  (c || b === "rtl") && (A = 1 - A);
  let z = d ? {} : j(g, M, {
    onMouseDown: (T) => {
      T.button !== 0 || T.altKey || T.ctrlKey || T.metaKey || S();
    },
    onPointerDown: (T) => {
      T.button !== 0 || T.altKey || T.ctrlKey || T.metaKey || S(T.pointerId);
    },
    onTouchStart: (T) => {
      S(T.changedTouches[0].identifier);
    }
  });
  return xn(o, x, (T) => {
    t.setThumbValue(n, T);
  }), {
    inputProps: j(F, $, {
      type: "range",
      tabIndex: d ? void 0 : 0,
      min: t.getThumbMinValue(n),
      max: t.getThumbMaxValue(n),
      step: t.step,
      value: x,
      name: s,
      disabled: d,
      "aria-orientation": u,
      "aria-valuetext": t.getThumbValueLabel(n),
      "aria-required": r || void 0,
      "aria-invalid": i || a === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-describedby": [
        m["aria-describedby"],
        e["aria-describedby"]
      ].filter(Boolean).join(" "),
      "aria-details": [
        m["aria-details"],
        e["aria-details"]
      ].filter(Boolean).join(" "),
      onChange: (T) => {
        t.setThumbValue(n, parseFloat(T.target.value));
      }
    }),
    thumbProps: {
      ...z,
      style: {
        position: "absolute",
        [c ? "top" : "left"]: `${A * 100}%`,
        transform: "translate(-50%, -50%)",
        touchAction: "none"
      }
    },
    labelProps: y,
    isDragging: t.isThumbDragging(n),
    isDisabled: d,
    isFocused: P
  };
}
function x5(e, t, n) {
  let { labelProps: r, inputProps: a, isSelected: i, isPressed: l, isDisabled: o, isReadOnly: u } = Ec(e, t, n);
  return {
    labelProps: r,
    inputProps: {
      ...a,
      role: "switch",
      checked: i
    },
    isSelected: i,
    isPressed: l,
    isDisabled: o,
    isReadOnly: u
  };
}
let D5 = !1;
function Ua() {
  return D5;
}
function bi(e) {
  return e && e.__esModule ? e.default : e;
}
const Fo = /* @__PURE__ */ new WeakMap();
function Tl(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function um(e, t) {
  let n = Fo.get(e);
  if (!n)
    throw new Error("Unknown grid");
  return `${n}-${Tl(t)}`;
}
function sm(e, t, n) {
  let r = Fo.get(e);
  if (!r)
    throw new Error("Unknown grid");
  return `${r}-${Tl(t)}-${Tl(n)}`;
}
function dm(e, t) {
  return [
    ...e.collection.rowHeaderColumnKeys
  ].map((n) => sm(e, t, n)).join(" ");
}
var Gr = {}, cm = {};
cm = {
  ascending: "تصاعدي",
  ascendingSort: (e) => `ترتيب حسب العمود ${e.columnName} بترتيب تصاعدي`,
  columnSize: (e) => `${e.value} بالبكسل`,
  descending: "تنازلي",
  descendingSort: (e) => `ترتيب حسب العمود ${e.columnName} بترتيب تنازلي`,
  resizerDescription: "اضغط على مفتاح Enter لبدء تغيير الحجم",
  select: "تحديد",
  selectAll: "تحديد الكل",
  sortable: "عمود قابل للترتيب"
};
var fm = {};
fm = {
  ascending: "възходящ",
  ascendingSort: (e) => `сортирано по колона ${e.columnName} във възходящ ред`,
  columnSize: (e) => `${e.value} пиксела`,
  descending: "низходящ",
  descendingSort: (e) => `сортирано по колона ${e.columnName} в низходящ ред`,
  resizerDescription: "Натиснете „Enter“, за да започнете да преоразмерявате",
  select: "Изберете",
  selectAll: "Изберете всичко",
  sortable: "сортираща колона"
};
var bm = {};
bm = {
  ascending: "vzestupně",
  ascendingSort: (e) => `řazeno vzestupně podle sloupce ${e.columnName}`,
  columnSize: (e) => `${e.value} pixelů`,
  descending: "sestupně",
  descendingSort: (e) => `řazeno sestupně podle sloupce ${e.columnName}`,
  resizerDescription: "Stisknutím klávesy Enter začnete měnit velikost",
  select: "Vybrat",
  selectAll: "Vybrat vše",
  sortable: "sloupec s možností řazení"
};
var pm = {};
pm = {
  ascending: "stigende",
  ascendingSort: (e) => `sorteret efter kolonne ${e.columnName} i stigende rækkefølge`,
  columnSize: (e) => `${e.value} pixels`,
  descending: "faldende",
  descendingSort: (e) => `sorteret efter kolonne ${e.columnName} i faldende rækkefølge`,
  resizerDescription: "Tryk på Enter for at ændre størrelse",
  select: "Vælg",
  selectAll: "Vælg alle",
  sortable: "sorterbar kolonne"
};
var mm = {};
mm = {
  ascending: "aufsteigend",
  ascendingSort: (e) => `sortiert nach Spalte ${e.columnName} in aufsteigender Reihenfolge`,
  columnSize: (e) => `${e.value} Pixel`,
  descending: "absteigend",
  descendingSort: (e) => `sortiert nach Spalte ${e.columnName} in absteigender Reihenfolge`,
  resizerDescription: "Eingabetaste zum Starten der Größenänderung drücken",
  select: "Auswählen",
  selectAll: "Alles auswählen",
  sortable: "sortierbare Spalte"
};
var hm = {};
hm = {
  ascending: "αύξουσα",
  ascendingSort: (e) => `διαλογή ανά στήλη ${e.columnName} σε αύξουσα σειρά`,
  columnSize: (e) => `${e.value} pixel`,
  descending: "φθίνουσα",
  descendingSort: (e) => `διαλογή ανά στήλη ${e.columnName} σε φθίνουσα σειρά`,
  resizerDescription: "Πατήστε Enter για έναρξη της αλλαγής μεγέθους",
  select: "Επιλογή",
  selectAll: "Επιλογή όλων",
  sortable: "Στήλη διαλογής"
};
var vm = {};
vm = {
  select: "Select",
  selectAll: "Select All",
  sortable: "sortable column",
  ascending: "ascending",
  descending: "descending",
  ascendingSort: (e) => `sorted by column ${e.columnName} in ascending order`,
  descendingSort: (e) => `sorted by column ${e.columnName} in descending order`,
  columnSize: (e) => `${e.value} pixels`,
  resizerDescription: "Press Enter to start resizing"
};
var gm = {};
gm = {
  ascending: "de subida",
  ascendingSort: (e) => `ordenado por columna ${e.columnName} en orden de subida`,
  columnSize: (e) => `${e.value} píxeles`,
  descending: "de bajada",
  descendingSort: (e) => `ordenado por columna ${e.columnName} en orden de bajada`,
  resizerDescription: "Pulse Intro para empezar a redimensionar",
  select: "Seleccionar",
  selectAll: "Seleccionar todos",
  sortable: "columna ordenable"
};
var $m = {};
$m = {
  ascending: "tõusev järjestus",
  ascendingSort: (e) => `sorditud veeru järgi ${e.columnName} tõusvas järjestuses`,
  columnSize: (e) => `${e.value} pikslit`,
  descending: "laskuv järjestus",
  descendingSort: (e) => `sorditud veeru järgi ${e.columnName} laskuvas järjestuses`,
  resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
  select: "Vali",
  selectAll: "Vali kõik",
  sortable: "sorditav veerg"
};
var ym = {};
ym = {
  ascending: "nouseva",
  ascendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan nousevassa järjestyksessä`,
  columnSize: (e) => `${e.value} pikseliä`,
  descending: "laskeva",
  descendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan laskevassa järjestyksessä`,
  resizerDescription: "Aloita koon muutos painamalla Enter-näppäintä",
  select: "Valitse",
  selectAll: "Valitse kaikki",
  sortable: "lajiteltava sarake"
};
var xm = {};
xm = {
  ascending: "croissant",
  ascendingSort: (e) => `trié en fonction de la colonne ${e.columnName} par ordre croissant`,
  columnSize: (e) => `${e.value} pixels`,
  descending: "décroissant",
  descendingSort: (e) => `trié en fonction de la colonne ${e.columnName} par ordre décroissant`,
  resizerDescription: "Appuyez sur Entrée pour commencer le redimensionnement.",
  select: "Sélectionner",
  selectAll: "Sélectionner tout",
  sortable: "colonne triable"
};
var Dm = {};
Dm = {
  ascending: "עולה",
  ascendingSort: (e) => `מוין לפי עמודה ${e.columnName} בסדר עולה`,
  columnSize: (e) => `${e.value} פיקסלים`,
  descending: "יורד",
  descendingSort: (e) => `מוין לפי עמודה ${e.columnName} בסדר יורד`,
  resizerDescription: "הקש Enter כדי לשנות את הגודל",
  select: "בחר",
  selectAll: "בחר הכול",
  sortable: "עמודה שניתן למיין"
};
var Cm = {};
Cm = {
  ascending: "rastući",
  ascendingSort: (e) => `razvrstano po stupcima ${e.columnName} rastućem redoslijedom`,
  columnSize: (e) => `${e.value} piksela`,
  descending: "padajući",
  descendingSort: (e) => `razvrstano po stupcima ${e.columnName} padajućim redoslijedom`,
  resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
  select: "Odaberite",
  selectAll: "Odaberite sve",
  sortable: "stupac koji se može razvrstati"
};
var Em = {};
Em = {
  ascending: "növekvő",
  ascendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, növekvő sorrendben`,
  columnSize: (e) => `${e.value} képpont`,
  descending: "csökkenő",
  descendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, csökkenő sorrendben`,
  resizerDescription: "Nyomja le az Enter billentyűt az átméretezés megkezdéséhez",
  select: "Kijelölés",
  selectAll: "Összes kijelölése",
  sortable: "rendezendő oszlop"
};
var Pm = {};
Pm = {
  ascending: "crescente",
  ascendingSort: (e) => `in ordine crescente in base alla colonna ${e.columnName}`,
  columnSize: (e) => `${e.value} pixel`,
  descending: "decrescente",
  descendingSort: (e) => `in ordine decrescente in base alla colonna ${e.columnName}`,
  resizerDescription: "Premi Invio per iniziare a ridimensionare",
  select: "Seleziona",
  selectAll: "Seleziona tutto",
  sortable: "colonna ordinabile"
};
var wm = {};
wm = {
  ascending: "昇順",
  ascendingSort: (e) => `列 ${e.columnName} を昇順で並べ替え`,
  columnSize: (e) => `${e.value} ピクセル`,
  descending: "降順",
  descendingSort: (e) => `列 ${e.columnName} を降順で並べ替え`,
  resizerDescription: "Enter キーを押してサイズ変更を開始",
  select: "選択",
  selectAll: "すべて選択",
  sortable: "並べ替え可能な列"
};
var Sm = {};
Sm = {
  ascending: "오름차순",
  ascendingSort: (e) => `${e.columnName} 열을 기준으로 오름차순으로 정렬됨`,
  columnSize: (e) => `${e.value} 픽셀`,
  descending: "내림차순",
  descendingSort: (e) => `${e.columnName} 열을 기준으로 내림차순으로 정렬됨`,
  resizerDescription: "크기 조정을 시작하려면 Enter를 누르세요.",
  select: "선택",
  selectAll: "모두 선택",
  sortable: "정렬 가능한 열"
};
var Bm = {};
Bm = {
  ascending: "didėjančia tvarka",
  ascendingSort: (e) => `surikiuota pagal stulpelį ${e.columnName} didėjančia tvarka`,
  columnSize: (e) => `${e.value} piks.`,
  descending: "mažėjančia tvarka",
  descendingSort: (e) => `surikiuota pagal stulpelį ${e.columnName} mažėjančia tvarka`,
  resizerDescription: "Paspauskite „Enter“, kad pradėtumėte keisti dydį",
  select: "Pasirinkti",
  selectAll: "Pasirinkti viską",
  sortable: "rikiuojamas stulpelis"
};
var km = {};
km = {
  ascending: "augošā secībā",
  ascendingSort: (e) => `kārtots pēc kolonnas ${e.columnName} augošā secībā`,
  columnSize: (e) => `${e.value} pikseļi`,
  descending: "dilstošā secībā",
  descendingSort: (e) => `kārtots pēc kolonnas ${e.columnName} dilstošā secībā`,
  resizerDescription: "Nospiediet Enter, lai sāktu izmēru mainīšanu",
  select: "Atlasīt",
  selectAll: "Atlasīt visu",
  sortable: "kārtojamā kolonna"
};
var Fm = {};
Fm = {
  ascending: "stigende",
  ascendingSort: (e) => `sortert etter kolonne ${e.columnName} i stigende rekkefølge`,
  columnSize: (e) => `${e.value} piksler`,
  descending: "synkende",
  descendingSort: (e) => `sortert etter kolonne ${e.columnName} i synkende rekkefølge`,
  resizerDescription: "Trykk på Enter for å starte størrelsesendring",
  select: "Velg",
  selectAll: "Velg alle",
  sortable: "kolonne som kan sorteres"
};
var Am = {};
Am = {
  ascending: "oplopend",
  ascendingSort: (e) => `gesorteerd in oplopende volgorde in kolom ${e.columnName}`,
  columnSize: (e) => `${e.value} pixels`,
  descending: "aflopend",
  descendingSort: (e) => `gesorteerd in aflopende volgorde in kolom ${e.columnName}`,
  resizerDescription: "Druk op Enter om het formaat te wijzigen",
  select: "Selecteren",
  selectAll: "Alles selecteren",
  sortable: "sorteerbare kolom"
};
var Tm = {};
Tm = {
  ascending: "rosnąco",
  ascendingSort: (e) => `posortowano według kolumny ${e.columnName} w porządku rosnącym`,
  columnSize: (e) => `Liczba pikseli: ${e.value}`,
  descending: "malejąco",
  descendingSort: (e) => `posortowano według kolumny ${e.columnName} w porządku malejącym`,
  resizerDescription: "Naciśnij Enter, aby rozpocząć zmienianie rozmiaru",
  select: "Zaznacz",
  selectAll: "Zaznacz wszystko",
  sortable: "kolumna z możliwością sortowania"
};
var Mm = {};
Mm = {
  ascending: "crescente",
  ascendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem crescente`,
  columnSize: (e) => `${e.value} pixels`,
  descending: "decrescente",
  descendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem decrescente`,
  resizerDescription: "Pressione Enter para começar a redimensionar",
  select: "Selecionar",
  selectAll: "Selecionar tudo",
  sortable: "coluna classificável"
};
var Rm = {};
Rm = {
  ascending: "ascendente",
  ascendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem ascendente`,
  columnSize: (e) => `${e.value} pixels`,
  descending: "descendente",
  descendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem descendente`,
  resizerDescription: "Prima Enter para iniciar o redimensionamento",
  select: "Selecionar",
  selectAll: "Selecionar tudo",
  sortable: "Coluna ordenável"
};
var Im = {};
Im = {
  ascending: "crescătoare",
  ascendingSort: (e) => `sortate după coloana ${e.columnName} în ordine crescătoare`,
  columnSize: (e) => `${e.value} pixeli`,
  descending: "descrescătoare",
  descendingSort: (e) => `sortate după coloana ${e.columnName} în ordine descrescătoare`,
  resizerDescription: "Apăsați pe Enter pentru a începe redimensionarea",
  select: "Selectare",
  selectAll: "Selectare totală",
  sortable: "coloană sortabilă"
};
var Nm = {};
Nm = {
  ascending: "возрастание",
  ascendingSort: (e) => `сортировать столбец ${e.columnName} в порядке возрастания`,
  columnSize: (e) => `${e.value} пикс.`,
  descending: "убывание",
  descendingSort: (e) => `сортировать столбец ${e.columnName} в порядке убывания`,
  resizerDescription: "Нажмите клавишу Enter для начала изменения размеров",
  select: "Выбрать",
  selectAll: "Выбрать все",
  sortable: "сортируемый столбец"
};
var Km = {};
Km = {
  ascending: "vzostupne",
  ascendingSort: (e) => `zoradené zostupne podľa stĺpca ${e.columnName}`,
  columnSize: (e) => `Počet pixelov: ${e.value}`,
  descending: "zostupne",
  descendingSort: (e) => `zoradené zostupne podľa stĺpca ${e.columnName}`,
  resizerDescription: "Stlačením klávesu Enter začnete zmenu veľkosti",
  select: "Vybrať",
  selectAll: "Vybrať všetko",
  sortable: "zoraditeľný stĺpec"
};
var zm = {};
zm = {
  ascending: "naraščajoče",
  ascendingSort: (e) => `razvrščeno po stolpcu ${e.columnName} v naraščajočem vrstnem redu`,
  columnSize: (e) => `${e.value} slikovnih pik`,
  descending: "padajoče",
  descendingSort: (e) => `razvrščeno po stolpcu ${e.columnName} v padajočem vrstnem redu`,
  resizerDescription: "Pritisnite tipko Enter da začnete spreminjati velikost",
  select: "Izberite",
  selectAll: "Izberite vse",
  sortable: "razvrstljivi stolpec"
};
var Vm = {};
Vm = {
  ascending: "rastući",
  ascendingSort: (e) => `sortirano po kolonama ${e.columnName} rastućim redosledom`,
  columnSize: (e) => `${e.value} piksela`,
  descending: "padajući",
  descendingSort: (e) => `sortirano po kolonama ${e.columnName} padajućim redosledom`,
  resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
  select: "Izaberite",
  selectAll: "Izaberite sve",
  sortable: "kolona koja se može sortirati"
};
var Lm = {};
Lm = {
  ascending: "stigande",
  ascendingSort: (e) => `sorterat på kolumn ${e.columnName} i stigande ordning`,
  columnSize: (e) => `${e.value} pixlar`,
  descending: "fallande",
  descendingSort: (e) => `sorterat på kolumn ${e.columnName} i fallande ordning`,
  resizerDescription: "Tryck på Retur för att börja ändra storlek",
  select: "Markera",
  selectAll: "Markera allt",
  sortable: "sorterbar kolumn"
};
var Om = {};
Om = {
  ascending: "artan sırada",
  ascendingSort: (e) => `${e.columnName} sütuna göre artan düzende sırala`,
  columnSize: (e) => `${e.value} piksel`,
  descending: "azalan sırada",
  descendingSort: (e) => `${e.columnName} sütuna göre azalan düzende sırala`,
  resizerDescription: "Yeniden boyutlandırmak için Enter'a basın",
  select: "Seç",
  selectAll: "Tümünü Seç",
  sortable: "Sıralanabilir sütun"
};
var jm = {};
jm = {
  ascending: "висхідний",
  ascendingSort: (e) => `відсортовано за стовпцем ${e.columnName} у висхідному порядку`,
  columnSize: (e) => `${e.value} пікс.`,
  descending: "низхідний",
  descendingSort: (e) => `відсортовано за стовпцем ${e.columnName} у низхідному порядку`,
  resizerDescription: "Натисніть Enter, щоб почати зміну розміру",
  select: "Вибрати",
  selectAll: "Вибрати все",
  sortable: "сортувальний стовпець"
};
var Hm = {};
Hm = {
  ascending: "升序",
  ascendingSort: (e) => `按列 ${e.columnName} 升序排序`,
  columnSize: (e) => `${e.value} 像素`,
  descending: "降序",
  descendingSort: (e) => `按列 ${e.columnName} 降序排序`,
  resizerDescription: "按“输入”键开始调整大小。",
  select: "选择",
  selectAll: "全选",
  sortable: "可排序的列"
};
var _m = {};
_m = {
  ascending: "遞增",
  ascendingSort: (e) => `已依據「${e.columnName}」欄遞增排序`,
  columnSize: (e) => `${e.value} 像素`,
  descending: "遞減",
  descendingSort: (e) => `已依據「${e.columnName}」欄遞減排序`,
  resizerDescription: "按 Enter 鍵以開始調整大小",
  select: "選取",
  selectAll: "全選",
  sortable: "可排序的欄"
};
Gr = {
  "ar-AE": cm,
  "bg-BG": fm,
  "cs-CZ": bm,
  "da-DK": pm,
  "de-DE": mm,
  "el-GR": hm,
  "en-US": vm,
  "es-ES": gm,
  "et-EE": $m,
  "fi-FI": ym,
  "fr-FR": xm,
  "he-IL": Dm,
  "hr-HR": Cm,
  "hu-HU": Em,
  "it-IT": Pm,
  "ja-JP": wm,
  "ko-KR": Sm,
  "lt-LT": Bm,
  "lv-LV": km,
  "nb-NO": Fm,
  "nl-NL": Am,
  "pl-PL": Tm,
  "pt-BR": Mm,
  "pt-PT": Rm,
  "ro-RO": Im,
  "ru-RU": Nm,
  "sk-SK": Km,
  "sl-SI": zm,
  "sr-SP": Vm,
  "sv-SE": Lm,
  "tr-TR": Om,
  "uk-UA": jm,
  "zh-CN": Hm,
  "zh-TW": _m
};
class C5 extends nb {
  isCell(t) {
    return t.type === "cell" || t.type === "rowheader" || t.type === "column";
  }
  getKeyBelow(t) {
    let n = this.collection.getItem(t);
    if (n) {
      if (n.type === "column") {
        let r = It(Se(n, this.collection));
        if (r)
          return r.key;
        let a = this.getFirstKey();
        if (a == null)
          return;
        let i = this.collection.getItem(a);
        return qt(Se(i, this.collection), n.index).key;
      }
      return super.getKeyBelow(t);
    }
  }
  getKeyAbove(t) {
    let n = this.collection.getItem(t);
    if (!n)
      return;
    if (n.type === "column") {
      let a = this.collection.getItem(n.parentKey);
      return a && a.type === "column" ? a.key : void 0;
    }
    let r = super.getKeyAbove(t);
    return r != null && this.collection.getItem(r).type !== "headerrow" ? r : this.isCell(n) ? this.collection.columns[n.index].key : this.collection.columns[0].key;
  }
  findNextColumnKey(t) {
    let n = this.findNextKey(t.key, (a) => a.type === "column");
    if (n != null)
      return n;
    let r = this.collection.headerRows[t.level];
    for (let a of Se(r, this.collection))
      if (a.type === "column")
        return a.key;
  }
  findPreviousColumnKey(t) {
    let n = this.findPreviousKey(t.key, (i) => i.type === "column");
    if (n != null)
      return n;
    let r = this.collection.headerRows[t.level], a = [
      ...Se(r, this.collection)
    ];
    for (let i = a.length - 1; i >= 0; i--) {
      let l = a[i];
      if (l.type === "column")
        return l.key;
    }
  }
  getKeyRightOf(t) {
    let n = this.collection.getItem(t);
    if (n)
      return n.type === "column" ? this.direction === "rtl" ? this.findPreviousColumnKey(n) : this.findNextColumnKey(n) : super.getKeyRightOf(t);
  }
  getKeyLeftOf(t) {
    let n = this.collection.getItem(t);
    if (n)
      return n.type === "column" ? this.direction === "rtl" ? this.findNextColumnKey(n) : this.findPreviousColumnKey(n) : super.getKeyLeftOf(t);
  }
  getKeyForSearch(t, n) {
    if (!this.collator)
      return null;
    let r = this.collection, a = n ?? this.getFirstKey();
    if (a == null)
      return null;
    let i = r.getItem(a);
    i.type === "cell" && (a = i.parentKey);
    let l = !1;
    for (; a != null; ) {
      let o = r.getItem(a);
      for (let u of Se(o, this.collection)) {
        let s = r.columns[u.index];
        if (r.rowHeaderColumnKeys.has(s.key) && u.textValue) {
          let d = u.textValue.slice(0, t.length);
          if (this.collator.compare(d, t) === 0)
            return (n != null ? r.getItem(n) : i).type === "cell" ? u.key : o.key;
        }
      }
      a = this.getKeyBelow(a), a == null && !l && (a = this.getFirstKey(), l = !0);
    }
    return null;
  }
}
function E5(e, t, n) {
  let { keyboardDelegate: r, isVirtualized: a, layout: i } = e, l = qn({
    usage: "search",
    sensitivity: "base"
  }), { direction: o } = oe(), u = t.selectionManager.disabledBehavior, s = K(() => r || new C5({
    collection: t.collection,
    disabledKeys: u === "selection" ? /* @__PURE__ */ new Set() : t.disabledKeys,
    ref: n,
    direction: o,
    collator: l,
    layout: i
  }), [
    r,
    t.collection,
    t.disabledKeys,
    u,
    n,
    o,
    l,
    i
  ]), d = be(e.id);
  Fo.set(t, d);
  let { gridProps: c } = r5({
    ...e,
    id: d,
    keyboardDelegate: s
  }, t, n);
  a && (c["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), Ua() && "expandedKeys" in t && (c.role = "treegrid");
  let { column: b, direction: f } = t.sortDescriptor || {}, p = Pe(/* @__PURE__ */ bi(Gr), "@react-aria/table"), m = K(() => {
    var y;
    let $ = (y = t.collection.columns.find((x) => x.key === b)) === null || y === void 0 ? void 0 : y.textValue;
    return f && b ? p.format(`${f}Sort`, {
      columnName: $
    }) : void 0;
  }, [
    f,
    b,
    t.collection.columns
  ]), v = kt(m);
  return wa(() => {
    en(m, "assertive", 500);
  }, [
    m
  ]), {
    gridProps: j(c, v, {
      // merge sort description with long press information
      "aria-describedby": [
        v["aria-describedby"],
        c["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function P5(e, t, n) {
  var r, a;
  let { node: i } = e, l = i.props.allowsSorting, { gridCellProps: o } = Vb({
    ...e,
    focusMode: "child"
  }, t, n), u = i.props.isSelectionCell && t.selectionManager.selectionMode === "single", { pressProps: s } = Je({
    isDisabled: !l || u,
    onPress() {
      t.sort(i.key);
    },
    ref: n
  }), { focusableProps: d } = Dn({}, n), c = null, b = ((r = t.sortDescriptor) === null || r === void 0 ? void 0 : r.column) === i.key, f = (a = t.sortDescriptor) === null || a === void 0 ? void 0 : a.direction;
  i.props.allowsSorting && !gr() && (c = b ? f : "none");
  let p = Pe(/* @__PURE__ */ bi(Gr), "@react-aria/table"), m;
  l && (m = `${p.format("sortable")}`, b && f && gr() && (m = `${m}, ${p.format(f)}`));
  let v = kt(m), y = t.collection.size === 0;
  return J(() => {
    y && t.selectionManager.focusedKey === i.key && t.selectionManager.setFocusedKey(null);
  }, [
    y,
    t.selectionManager,
    i.key
  ]), {
    columnHeaderProps: {
      ...j(
        o,
        s,
        d,
        v,
        // If the table is empty, make all column headers untabbable
        y && {
          tabIndex: -1
        }
      ),
      role: "columnheader",
      id: um(t, i.key),
      "aria-colspan": i.colspan && i.colspan > 1 ? i.colspan : null,
      "aria-sort": c
    }
  };
}
const ps = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function w5(e, t, n) {
  let { node: r, isVirtualized: a } = e, { rowProps: i, ...l } = i5(e, t, n), { direction: o } = oe();
  a && !(Ua() && "expandedKeys" in t) ? i["aria-rowindex"] = r.index + 1 + t.collection.headerRows.length : delete i["aria-rowindex"];
  let u = {};
  if (Ua() && "expandedKeys" in t) {
    let f = t.keyMap.get(r.key);
    if (f != null) {
      var s, d, c;
      let p = ((s = f.props) === null || s === void 0 ? void 0 : s.UNSTABLE_childItems) || ((c = f.props) === null || c === void 0 || (d = c.children) === null || d === void 0 ? void 0 : d.length) > t.userColumnCount;
      u = {
        onKeyDown: (m) => {
          (m.key === ps.expand[o] && t.selectionManager.focusedKey === f.key && p && t.expandedKeys !== "all" && !t.expandedKeys.has(f.key) || m.key === ps.collapse[o] && t.selectionManager.focusedKey === f.key && p && (t.expandedKeys === "all" || t.expandedKeys.has(f.key))) && (t.toggleKey(f.key), m.stopPropagation());
        },
        "aria-expanded": p ? t.expandedKeys === "all" || t.expandedKeys.has(r.key) : void 0,
        "aria-level": f.level,
        "aria-posinset": f.indexOfType + 1,
        "aria-setsize": f.level > 1 ? Qt(t.keyMap.get(f == null ? void 0 : f.parentKey).childNodes).indexOfType + 1 : Qt(t.keyMap.get(t.collection.body.key).childNodes).indexOfType + 1
      };
    }
  }
  let b = l.hasAction ? Jl(r.props) : {};
  return {
    rowProps: {
      ...j(i, u, b),
      "aria-labelledby": dm(t, r.key)
    },
    ...l
  };
}
function S5(e, t, n) {
  let { node: r, isVirtualized: a } = e, i = {
    role: "row"
  };
  return a && !(Ua() && "expandedKeys" in t) && (i["aria-rowindex"] = r.index + 1), {
    rowProps: i
  };
}
function B5(e, t, n) {
  let { gridCellProps: r, isPressed: a } = Vb(e, t, n), i = e.node.column.key;
  return t.collection.rowHeaderColumnKeys.has(i) && (r.role = "rowheader", r.id = sm(t, e.node.parentKey, i)), {
    gridCellProps: r,
    isPressed: a
  };
}
function k5(e, t) {
  let { key: n } = e;
  const { checkboxProps: r } = Lb(e, t);
  return {
    checkboxProps: {
      ...r,
      "aria-labelledby": `${r.id} ${dm(t, n)}`
    }
  };
}
function F5(e) {
  let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
  return {
    checkboxProps: {
      "aria-label": Pe(/* @__PURE__ */ bi(Gr), "@react-aria/table").format(r === "single" ? "select" : "selectAll"),
      isSelected: n,
      isDisabled: r !== "multiple" || e.collection.size === 0,
      isIndeterminate: !t && !n,
      onChange: () => e.selectionManager.toggleSelectAll()
    }
  };
}
function A5(e, t, n) {
  let { column: r, triggerRef: a, isDisabled: i, onResizeStart: l, onResize: o, onResizeEnd: u, "aria-label": s } = e;
  const d = Pe(/* @__PURE__ */ bi(Gr), "@react-aria/table");
  let c = be(), b = t.resizingColumn === r.key, f = I(b), p = I(null), m = I(!1), v = t.tableState.isKeyboardNavigationDisabled, { direction: y } = oe(), { keyboardProps: $ } = ei({
    onKeyDown: (N) => {
      v ? (N.key === "Escape" || N.key === "Enter" || N.key === " " || N.key === "Tab") && (N.preventDefault(), P(r)) : (N.continuePropagation(), N.key === "Enter" && x(r));
    }
  }), x = ye((N) => {
    f.current || (p.current = t.updateResizedColumns(N.key, t.getColumnWidth(N.key)), t.startResize(N.key), t.tableState.setKeyboardNavigationDisabled(!0), l == null || l(p.current)), f.current = !0;
  }), C = ye((N, G) => {
    let re = t.updateResizedColumns(N.key, G);
    o == null || o(re), p.current = re;
  }), P = ye((N) => {
    f.current && (p.current == null && (p.current = t.updateResizedColumns(N.key, t.getColumnWidth(N.key))), t.endResize(), t.tableState.setKeyboardNavigationDisabled(!1), u == null || u(p.current), f.current = !1, a != null && a.current && !m.current && Ce(a.current)), p.current = null;
  });
  const B = I(0), { moveProps: R } = to({
    onMoveStart() {
      B.current = t.getColumnWidth(r.key), x(r);
    },
    onMove(N) {
      let { deltaX: G, deltaY: re, pointerType: se } = N;
      y === "rtl" && (G *= -1), se === "keyboard" && (re !== 0 && G === 0 && (G = re * -1), G *= 10), G !== 0 && (B.current += G, C(r, B.current));
    },
    onMoveEnd(N) {
      let { pointerType: G } = N;
      B.current = 0, (G === "mouse" || G === "touch" && m.current) && P(r);
    }
  });
  let g = ee((N) => {
    v && R.onKeyDown(N);
  }, [
    v,
    R
  ]), M = Math.floor(t.getColumnMinWidth(r.key)), F = Math.floor(t.getColumnMaxWidth(r.key));
  F === 1 / 0 && (F = Number.MAX_SAFE_INTEGER);
  let E = Math.floor(t.getColumnWidth(r.key)), S = zr();
  S === "virtual" && typeof window < "u" && "ontouchstart" in window && (S = "touch");
  let w = (a == null ? void 0 : a.current) == null && (S === "keyboard" || S === "virtual") && !b ? d.format("resizerDescription") : void 0, A = kt(w), z = {
    "aria-label": s,
    "aria-orientation": "horizontal",
    "aria-labelledby": `${c} ${um(t.tableState, r.key)}`,
    "aria-valuetext": d.format("columnSize", {
      value: E
    }),
    type: "range",
    min: M,
    max: F,
    value: E,
    ...A
  };
  const T = ee(() => {
    n.current && Ce(n.current);
  }, [
    n
  ]);
  let D = t.resizingColumn, H = I(null);
  J(() => {
    if (H.current !== D && D != null && D === r.key) {
      m.current = document.activeElement === n.current, x(r);
      let N = setTimeout(() => T(), 0), G = setTimeout(T, 400);
      return () => {
        clearTimeout(N), clearTimeout(G);
      };
    }
    H.current = D;
  }, [
    D,
    r,
    T,
    n,
    x
  ]);
  let _ = (N) => {
    let G = t.getColumnWidth(r.key), re = parseFloat(N.target.value);
    re > G ? re = G + 10 : re = G - 10, C(r, re);
  }, { pressProps: L } = Je({
    onPressStart: (N) => {
      if (!(N.ctrlKey || N.altKey || N.metaKey || N.shiftKey || N.pointerType === "keyboard")) {
        if (N.pointerType === "virtual" && t.resizingColumn != null) {
          P(r);
          return;
        }
        T(), N.pointerType !== "virtual" && x(r);
      }
    },
    onPress: (N) => {
      (N.pointerType === "touch" && m.current || N.pointerType === "mouse") && t.resizingColumn != null && P(r);
    }
  }), { visuallyHiddenProps: V } = _t();
  return {
    resizerProps: j($, {
      ...R,
      onKeyDown: g
    }, L, {
      style: {
        touchAction: "none"
      }
    }),
    inputProps: j(V, {
      id: c,
      onBlur: () => {
        P(r);
      },
      onChange: _,
      disabled: i
    }, z),
    isResizing: b
  };
}
function Um() {
  return a5();
}
const Wm = /* @__PURE__ */ new WeakMap();
function Wa(e, t, n) {
  return typeof t == "string" && (t = t.replace(/\s+/g, "")), `${Wm.get(e)}-${n}-${t}`;
}
function T5(e, t, n) {
  var r;
  let { key: a, isDisabled: i, shouldSelectOnPressUp: l } = e, { selectionManager: o, selectedKey: u } = t, s = a === u, d = i || t.isDisabled || t.disabledKeys.has(a), { itemProps: c, isPressed: b } = Yn({
    selectionManager: o,
    key: a,
    ref: n,
    isDisabled: d,
    shouldSelectOnPressUp: l,
    linkBehavior: "selection"
  }), f = Wa(t, a, "tab"), p = Wa(t, a, "tabpanel"), { tabIndex: m } = c, v = t.collection.getItem(a), y = Y(v == null ? void 0 : v.props, {
    isLink: !!(!(v == null || (r = v.props) === null || r === void 0) && r.href),
    labelable: !0
  });
  return delete y.id, {
    tabProps: j(y, c, {
      id: f,
      "aria-selected": s,
      "aria-disabled": d || void 0,
      "aria-controls": s ? p : void 0,
      tabIndex: d ? void 0 : m,
      role: "tab"
    }),
    isSelected: s,
    isDisabled: d,
    isPressed: b
  };
}
function M5(e, t, n) {
  let r = ao(n) ? void 0 : 0;
  var a;
  const i = Wa(t, (a = e.id) !== null && a !== void 0 ? a : t == null ? void 0 : t.selectedKey, "tabpanel"), l = Ot({
    ...e,
    id: i,
    "aria-labelledby": Wa(t, t == null ? void 0 : t.selectedKey, "tab")
  });
  return {
    tabPanelProps: j(l, {
      tabIndex: r,
      role: "tabpanel",
      "aria-describedby": e["aria-describedby"],
      "aria-details": e["aria-details"]
    })
  };
}
class R5 {
  getKeyLeftOf(t) {
    return this.flipDirection ? this.getNextKey(t) : this.getPreviousKey(t);
  }
  getKeyRightOf(t) {
    return this.flipDirection ? this.getPreviousKey(t) : this.getNextKey(t);
  }
  getKeyAbove(t) {
    return this.getPreviousKey(t);
  }
  getKeyBelow(t) {
    return this.getNextKey(t);
  }
  getFirstKey() {
    let t = this.collection.getFirstKey();
    return t != null && this.disabledKeys.has(t) && (t = this.getNextKey(t)), t;
  }
  getLastKey() {
    let t = this.collection.getLastKey();
    return t != null && this.disabledKeys.has(t) && (t = this.getPreviousKey(t)), t;
  }
  getNextKey(t) {
    do
      t = this.collection.getKeyAfter(t), t == null && (t = this.collection.getFirstKey());
    while (this.disabledKeys.has(t));
    return t;
  }
  getPreviousKey(t) {
    do
      t = this.collection.getKeyBefore(t), t == null && (t = this.collection.getLastKey());
    while (this.disabledKeys.has(t));
    return t;
  }
  constructor(t, n, r, a = /* @__PURE__ */ new Set()) {
    this.collection = t, this.flipDirection = n === "rtl" && r === "horizontal", this.disabledKeys = a;
  }
}
function I5(e, t, n) {
  let { orientation: r = "horizontal", keyboardActivation: a = "automatic" } = e, { collection: i, selectionManager: l, disabledKeys: o } = t, { direction: u } = oe(), s = K(() => new R5(i, u, r, o), [
    i,
    o,
    r,
    u
  ]), { collectionProps: d } = ui({
    ref: n,
    selectionManager: l,
    keyboardDelegate: s,
    selectOnFocus: a === "automatic",
    disallowEmptySelection: !0,
    scrollRef: n,
    linkBehavior: "selection"
  }), c = be();
  Wm.set(t, c);
  let b = Ot({
    ...e,
    id: c
  });
  return {
    tabListProps: {
      ...j(d, b),
      role: "tablist",
      "aria-orientation": r,
      tabIndex: void 0
    }
  };
}
function N5(e) {
  return e && e.__esModule ? e.default : e;
}
const Gm = /* @__PURE__ */ new WeakMap();
function K5(e, t, n) {
  let { direction: r } = oe(), a = e.keyboardDelegate || new En({
    collection: t.collection,
    ref: n,
    orientation: "horizontal",
    direction: r,
    disabledKeys: t.disabledKeys
  }), { labelProps: i, fieldProps: l, descriptionProps: o, errorMessageProps: u } = an({
    ...e,
    labelElementType: "span"
  }), { gridProps: s } = Ob({
    ...e,
    ...l,
    keyboardDelegate: a,
    shouldFocusWrap: !0,
    linkBehavior: "override"
  }, t, n), [d, c] = Z(!1), { focusWithinProps: b } = ft({
    onFocusWithinChange: c
  }), f = Y(e), p = I(t.collection.size);
  return J(() => {
    n.current && p.current > 0 && t.collection.size === 0 && d && n.current.focus(), p.current = t.collection.size;
  }, [
    t.collection.size,
    d,
    n
  ]), Gm.set(t, {
    onRemove: e.onRemove
  }), {
    gridProps: j(s, f, {
      role: t.collection.size ? "grid" : null,
      "aria-atomic": !1,
      "aria-relevant": "additions",
      "aria-live": d ? "polite" : "off",
      ...b,
      ...l
    }),
    labelProps: i,
    descriptionProps: o,
    errorMessageProps: u
  };
}
var Zm = {}, qm = {};
qm = {
  removeButtonLabel: "إزالة",
  removeDescription: "اضغط على مفتاح DELETE لإزالة علامة."
};
var Ym = {};
Ym = {
  removeButtonLabel: "Премахване",
  removeDescription: "Натиснете Delete, за да премахнете маркера."
};
var Jm = {};
Jm = {
  removeButtonLabel: "Odebrat",
  removeDescription: "Stisknutím klávesy Delete odeberete značku."
};
var Xm = {};
Xm = {
  removeButtonLabel: "Fjern",
  removeDescription: "Tryk på Slet for at fjerne tag."
};
var Qm = {};
Qm = {
  removeButtonLabel: "Entfernen",
  removeDescription: "Auf „Löschen“ drücken, um das Tag zu entfernen."
};
var e3 = {};
e3 = {
  removeButtonLabel: "Κατάργηση",
  removeDescription: "Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."
};
var t3 = {};
t3 = {
  removeDescription: "Press Delete to remove tag.",
  removeButtonLabel: "Remove"
};
var n3 = {};
n3 = {
  removeButtonLabel: "Quitar",
  removeDescription: "Pulse Eliminar para quitar la etiqueta."
};
var r3 = {};
r3 = {
  removeButtonLabel: "Eemalda",
  removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete."
};
var a3 = {};
a3 = {
  removeButtonLabel: "Poista",
  removeDescription: "Poista tunniste painamalla Poista-painiketta."
};
var i3 = {};
i3 = {
  removeButtonLabel: "Supprimer",
  removeDescription: "Appuyez sur Supprimer pour supprimer l’étiquette."
};
var l3 = {};
l3 = {
  removeButtonLabel: "הסר",
  removeDescription: "לחץ על מחק כדי להסיר תג."
};
var o3 = {};
o3 = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Delete za uklanjanje oznake."
};
var u3 = {};
u3 = {
  removeButtonLabel: "Eltávolítás",
  removeDescription: "Nyomja meg a Delete billentyűt a címke eltávolításához."
};
var s3 = {};
s3 = {
  removeButtonLabel: "Rimuovi",
  removeDescription: "Premi Elimina per rimuovere il tag."
};
var d3 = {};
d3 = {
  removeButtonLabel: "削除",
  removeDescription: "タグを削除するには、Delete キーを押します。"
};
var c3 = {};
c3 = {
  removeButtonLabel: "제거",
  removeDescription: "태그를 제거하려면 Delete 키를 누르십시오."
};
var f3 = {};
f3 = {
  removeButtonLabel: "Pašalinti",
  removeDescription: "Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."
};
var b3 = {};
b3 = {
  removeButtonLabel: "Noņemt",
  removeDescription: "Nospiediet Delete [Dzēst], lai noņemtu tagu."
};
var p3 = {};
p3 = {
  removeButtonLabel: "Fjern",
  removeDescription: "Trykk på Slett for å fjerne taggen."
};
var m3 = {};
m3 = {
  removeButtonLabel: "Verwijderen",
  removeDescription: "Druk op Verwijderen om de tag te verwijderen."
};
var h3 = {};
h3 = {
  removeButtonLabel: "Usuń",
  removeDescription: "Naciśnij Usuń, aby usunąć znacznik."
};
var v3 = {};
v3 = {
  removeButtonLabel: "Remover",
  removeDescription: "Pressione Delete para remover a tag."
};
var g3 = {};
g3 = {
  removeButtonLabel: "Eliminar",
  removeDescription: "Prima Delete para eliminar a tag."
};
var $3 = {};
$3 = {
  removeButtonLabel: "Îndepărtaţi",
  removeDescription: "Apăsați pe Delete (Ștergere) pentru a elimina eticheta."
};
var y3 = {};
y3 = {
  removeButtonLabel: "Удалить",
  removeDescription: "Нажмите DELETE, чтобы удалить тег."
};
var x3 = {};
x3 = {
  removeButtonLabel: "Odstrániť",
  removeDescription: "Ak chcete odstrániť značku, stlačte kláves Delete."
};
var D3 = {};
D3 = {
  removeButtonLabel: "Odstrani",
  removeDescription: "Pritisnite Delete, da odstranite oznako."
};
var C3 = {};
C3 = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Obriši da biste uklonili oznaku."
};
var E3 = {};
E3 = {
  removeButtonLabel: "Ta bort",
  removeDescription: "Tryck på Radera för att ta bort taggen."
};
var P3 = {};
P3 = {
  removeButtonLabel: "Kaldır",
  removeDescription: "Etiketi kaldırmak için Sil tuşuna basın."
};
var w3 = {};
w3 = {
  removeButtonLabel: "Вилучити",
  removeDescription: "Натисніть Delete, щоб вилучити тег."
};
var S3 = {};
S3 = {
  removeButtonLabel: "删除",
  removeDescription: "按下“删除”以删除标记。"
};
var B3 = {};
B3 = {
  removeButtonLabel: "移除",
  removeDescription: "按 Delete 鍵以移除標記。"
};
Zm = {
  "ar-AE": qm,
  "bg-BG": Ym,
  "cs-CZ": Jm,
  "da-DK": Xm,
  "de-DE": Qm,
  "el-GR": e3,
  "en-US": t3,
  "es-ES": n3,
  "et-EE": r3,
  "fi-FI": a3,
  "fr-FR": i3,
  "he-IL": l3,
  "hr-HR": o3,
  "hu-HU": u3,
  "it-IT": s3,
  "ja-JP": d3,
  "ko-KR": c3,
  "lt-LT": f3,
  "lv-LV": b3,
  "nb-NO": p3,
  "nl-NL": m3,
  "pl-PL": h3,
  "pt-BR": v3,
  "pt-PT": g3,
  "ro-RO": $3,
  "ru-RU": y3,
  "sk-SK": x3,
  "sl-SI": D3,
  "sr-SP": C3,
  "sv-SE": E3,
  "tr-TR": P3,
  "uk-UA": w3,
  "zh-CN": S3,
  "zh-TW": B3
};
function z5(e, t, n) {
  let { item: r } = e, a = Pe(/* @__PURE__ */ N5(Zm), "@react-aria/tag"), i = be(), { onRemove: l } = Gm.get(t) || {}, { rowProps: o, gridCellProps: u, ...s } = jb({
    node: r
  }, t, n);
  delete o.onKeyDownCapture;
  let { descriptionProps: d, ...c } = s, b = (x) => {
    (x.key === "Delete" || x.key === "Backspace") && (x.preventDefault(), t.selectionManager.isSelected(r.key) ? l == null || l(new Set(t.selectionManager.selectedKeys)) : l == null || l(/* @__PURE__ */ new Set([
      r.key
    ])));
  }, f = zr();
  f === "virtual" && typeof window < "u" && "ontouchstart" in window && (f = "pointer");
  let p = l && (f === "keyboard" || f === "virtual") ? a.format("removeDescription") : "", m = kt(p), v = r.key === t.selectionManager.focusedKey, y = Y(r.props), $ = Jl(r.props);
  return {
    removeButtonProps: {
      "aria-label": a.format("removeButtonLabel"),
      "aria-labelledby": `${i} ${o.id}`,
      id: i,
      onPress: () => l ? l(/* @__PURE__ */ new Set([
        r.key
      ])) : null,
      excludeFromTabOrder: !0
    },
    rowProps: j(o, y, $, {
      tabIndex: v || t.selectionManager.focusedKey == null ? 0 : -1,
      onKeyDown: l ? b : void 0,
      "aria-describedby": m["aria-describedby"]
    }),
    gridCellProps: j(u, {
      "aria-errormessage": e["aria-errormessage"],
      "aria-label": e["aria-label"]
    }),
    ...c,
    allowsRemoving: !!l
  };
}
function V5(e, t) {
  let n = Y(e, {
    labelable: !0
  }), { hoverProps: r } = xe({
    onHoverStart: () => t == null ? void 0 : t.open(!0),
    onHoverEnd: () => t == null ? void 0 : t.close()
  });
  return {
    tooltipProps: j(n, r, {
      role: "tooltip"
    })
  };
}
function _n(e, t, n) {
  return t != null && e.compare(t) < 0 || n != null && e.compare(n) > 0;
}
function Ml(e, t, n, r, a) {
  let i = {};
  for (let o in t)
    i[o] = Math.floor(t[o] / 2), i[o] > 0 && t[o] % 2 === 0 && i[o]--;
  let l = pn(e, t, n).subtract(i);
  return Pr(e, l, t, n, r, a);
}
function pn(e, t, n, r, a) {
  let i = e;
  return t.years ? i = K$(e) : t.months ? i = $n(e) : t.weeks && (i = yr(e, n)), Pr(e, i, t, n, r, a);
}
function Rl(e, t, n, r, a) {
  let i = {
    ...t
  };
  t.days ? i.days-- : t.weeks ? i.weeks-- : t.months ? i.months-- : t.years && i.years--;
  let l = pn(e, t, n).subtract(i);
  return Pr(e, l, t, n, r, a);
}
function Pr(e, t, n, r, a, i) {
  return a && e.compare(a) >= 0 && (t = uo(t, pn(_e(a), n, r))), i && e.compare(i) <= 0 && (t = oo(t, Rl(_e(i), n, r))), t;
}
function Gt(e, t, n) {
  return t && (e = uo(e, _e(t))), n && (e = oo(e, _e(n))), e;
}
function k3(e, t, n) {
  if (!n)
    return e;
  for (; e.compare(t) >= 0 && n(e); )
    e = e.subtract({
      days: 1
    });
  if (e.compare(t) >= 0)
    return e;
}
function F3(e) {
  let t = K(() => new Vt(e.locale), [
    e.locale
  ]), n = K(() => t.resolvedOptions(), [
    t
  ]), { locale: r, createCalendar: a, visibleDuration: i = {
    months: 1
  }, minValue: l, maxValue: o, selectionAlignment: u, isDateUnavailable: s, pageBehavior: d = "visible" } = e, c = K(() => a(n.calendar), [
    a,
    n.calendar
  ]), [b, f] = Ke(e.value, e.defaultValue, e.onChange), p = K(() => b ? Ee(_e(b), c) : null, [
    b,
    c
  ]), m = K(() => b && "timeZone" in b ? b.timeZone : n.timeZone, [
    b,
    n.timeZone
  ]), v = K(() => e.focusedValue ? Gt(Ee(_e(e.focusedValue), c), l, o) : void 0, [
    e.focusedValue,
    c,
    l,
    o
  ]), y = K(() => Gt(e.defaultFocusedValue ? Ee(_e(e.defaultFocusedValue), c) : p || Ee(ni(m), c), l, o), [
    e.defaultFocusedValue,
    p,
    m,
    c,
    l,
    o
  ]), [$, x] = Ke(v, y, e.onFocusChange), [C, P] = Z(() => {
    switch (u) {
      case "start":
        return pn($, i, r, l, o);
      case "end":
        return Rl($, i, r, l, o);
      case "center":
      default:
        return Ml($, i, r, l, o);
    }
  }), [B, R] = Z(e.autoFocus || !1), g = K(() => {
    let D = {
      ...i
    };
    return D.days ? D.days-- : D.days = -1, C.add(D);
  }, [
    C,
    i
  ]), [M, F] = Z(c.identifier);
  if (c.identifier !== M) {
    let D = Ee($, c);
    P(Ml(D, i, r, l, o)), x(D), F(c.identifier);
  }
  _n($, l, o) ? x(Gt($, l, o)) : $.compare(C) < 0 ? P(Rl($, i, r, l, o)) : $.compare(g) > 0 && P(pn($, i, r, l, o));
  function E(D) {
    D = Gt(D, l, o), x(D);
  }
  function S(D) {
    if (!e.isDisabled && !e.isReadOnly) {
      if (D = Gt(D, l, o), D = k3(D, C, s), !D)
        return;
      D = Ee(D, (b == null ? void 0 : b.calendar) || new Ue()), b && "hour" in b ? f(b.set(D)) : f(D);
    }
  }
  let w = K(() => p ? s && s(p) ? !0 : _n(p, l, o) : !1, [
    p,
    s,
    l,
    o
  ]), A = e.isInvalid || e.validationState === "invalid" || w, z = A ? "invalid" : null, T = K(() => d === "visible" ? i : el(i), [
    d,
    i
  ]);
  return {
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    value: p,
    setValue: S,
    visibleRange: {
      start: C,
      end: g
    },
    minValue: l,
    maxValue: o,
    focusedDate: $,
    timeZone: m,
    validationState: z,
    isValueInvalid: A,
    setFocusedDate(D) {
      E(D), R(!0);
    },
    focusNextDay() {
      E($.add({
        days: 1
      }));
    },
    focusPreviousDay() {
      E($.subtract({
        days: 1
      }));
    },
    focusNextRow() {
      i.days ? this.focusNextPage() : (i.weeks || i.months || i.years) && E($.add({
        weeks: 1
      }));
    },
    focusPreviousRow() {
      i.days ? this.focusPreviousPage() : (i.weeks || i.months || i.years) && E($.subtract({
        weeks: 1
      }));
    },
    focusNextPage() {
      let D = C.add(T);
      x(Gt($.add(T), l, o)), P(pn(Pr($, D, T, r, l, o), T, r));
    },
    focusPreviousPage() {
      let D = C.subtract(T);
      x(Gt($.subtract(T), l, o)), P(pn(Pr($, D, T, r, l, o), T, r));
    },
    focusSectionStart() {
      i.days ? E(C) : i.weeks ? E(yr($, r)) : (i.months || i.years) && E($n($));
    },
    focusSectionEnd() {
      i.days ? E(g) : i.weeks ? E(L$($, r)) : (i.months || i.years) && E(Ia($));
    },
    focusNextSection(D) {
      if (!D && !i.days) {
        E($.add(el(i)));
        return;
      }
      i.days ? this.focusNextPage() : i.weeks ? E($.add({
        months: 1
      })) : (i.months || i.years) && E($.add({
        years: 1
      }));
    },
    focusPreviousSection(D) {
      if (!D && !i.days) {
        E($.subtract(el(i)));
        return;
      }
      i.days ? this.focusPreviousPage() : i.weeks ? E($.subtract({
        months: 1
      })) : (i.months || i.years) && E($.subtract({
        years: 1
      }));
    },
    selectFocusedDate() {
      S($);
    },
    selectDate(D) {
      S(D);
    },
    isFocused: B,
    setFocused: R,
    isInvalid(D) {
      return _n(D, l, o);
    },
    isSelected(D) {
      return p != null && Ae(D, p) && !this.isCellDisabled(D) && !this.isCellUnavailable(D);
    },
    isCellFocused(D) {
      return B && $ && Ae(D, $);
    },
    isCellDisabled(D) {
      return e.isDisabled || D.compare(C) < 0 || D.compare(g) > 0 || this.isInvalid(D, l, o);
    },
    isCellUnavailable(D) {
      return e.isDateUnavailable && e.isDateUnavailable(D);
    },
    isPreviousVisibleRangeInvalid() {
      let D = C.subtract({
        days: 1
      });
      return Ae(D, C) || this.isInvalid(D, l, o);
    },
    isNextVisibleRangeInvalid() {
      let D = g.add({
        days: 1
      });
      return Ae(D, g) || this.isInvalid(D, l, o);
    },
    getDatesInWeek(D, H = C) {
      let _ = H.add({
        weeks: D
      }), L = [];
      _ = yr(_, r);
      let V = io(_, r);
      for (let N = 0; N < V; N++)
        L.push(null);
      for (; L.length < 7; ) {
        L.push(_);
        let N = _.add({
          days: 1
        });
        if (Ae(_, N))
          break;
        _ = N;
      }
      for (; L.length < 7; )
        L.push(null);
      return L;
    }
  };
}
function el(e) {
  let t = {
    ...e
  };
  for (let n in e)
    t[n] = 1;
  return t;
}
function L5(e) {
  let { value: t, defaultValue: n, onChange: r, createCalendar: a, locale: i, visibleDuration: l = {
    months: 1
  }, minValue: o, maxValue: u, ...s } = e, [d, c] = Ke(t, n || null, r), [b, f] = Z(null), p = "center";
  if (d && d.start && d.end) {
    let H = Ml(_e(d.start), l, i, o, u).add(l).subtract({
      days: 1
    });
    d.end.compare(H) > 0 && (p = "start");
  }
  let m = I(null), [v, y] = Z(null), $ = K(() => uo(o, v == null ? void 0 : v.start), [
    o,
    v
  ]), x = K(() => oo(u, v == null ? void 0 : v.end), [
    u,
    v
  ]), C = F3({
    ...s,
    value: d && d.start,
    createCalendar: a,
    locale: i,
    visibleDuration: l,
    minValue: $,
    maxValue: x,
    selectionAlignment: p
  }), P = (D) => {
    D && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (m.current = {
      start: hs(D, C, -1),
      end: hs(D, C, 1)
    }, y(m.current)) : (m.current = null, y(null));
  }, [B, R] = Z(C.visibleRange);
  (!pl(C.visibleRange.start, B.start) || !pl(C.visibleRange.end, B.end)) && (P(b), R(C.visibleRange));
  let g = (D) => {
    D ? (f(D), P(D)) : (f(null), P(null));
  }, M = b ? tl(b, C.focusedDate) : d && tl(d.start, d.end), F = (D) => {
    if (!e.isReadOnly && (D = Gt(D, $, x), D = k3(D, C.visibleRange.start, e.isDateUnavailable), !!D))
      if (!b)
        g(D);
      else {
        let H = tl(b, D);
        c({
          start: ms(H.start, d == null ? void 0 : d.start),
          end: ms(H.end, d == null ? void 0 : d.end)
        }), g(null);
      }
  }, [E, S] = Z(!1), { isDateUnavailable: w } = e, A = K(() => !d || b ? !1 : w && (w(d.start) || w(d.end)) ? !0 : _n(d.start, o, u) || _n(d.end, o, u), [
    w,
    d,
    b,
    o,
    u
  ]), z = e.isInvalid || e.validationState === "invalid" || A;
  return {
    ...C,
    value: d,
    setValue: c,
    anchorDate: b,
    setAnchorDate: g,
    highlightedRange: M,
    validationState: z ? "invalid" : null,
    isValueInvalid: z,
    selectFocusedDate() {
      F(C.focusedDate);
    },
    selectDate: F,
    highlightDate(D) {
      b && C.setFocusedDate(D);
    },
    isSelected(D) {
      return M && D.compare(M.start) >= 0 && D.compare(M.end) <= 0 && !C.isCellDisabled(D) && !C.isCellUnavailable(D);
    },
    isInvalid(D) {
      var H, _;
      return C.isInvalid(D) || _n(D, (H = m.current) === null || H === void 0 ? void 0 : H.start, (_ = m.current) === null || _ === void 0 ? void 0 : _.end);
    },
    isDragging: E,
    setDragging: S
  };
}
function tl(e, t) {
  return !e || !t ? null : (t.compare(e) < 0 && ([e, t] = [
    t,
    e
  ]), {
    start: _e(e),
    end: _e(t)
  });
}
function ms(e, t) {
  return e = Ee(e, (t == null ? void 0 : t.calendar) || new Ue()), t && "hour" in t ? t.set(e) : e;
}
function hs(e, t, n) {
  let r = e.add({
    days: n
  });
  for (; (n < 0 ? r.compare(t.visibleRange.start) >= 0 : r.compare(t.visibleRange.end) <= 0) && !t.isCellUnavailable(r); )
    r = r.add({
      days: n
    });
  return t.isCellUnavailable(r) ? r.add({
    days: -n
  }) : null;
}
function O5(e = {}) {
  let [t, n] = Ke(e.value, e.defaultValue || [], e.onChange), r = !!e.isRequired && t.length === 0, a = I(/* @__PURE__ */ new Map()), i = Dt({
    ...e,
    value: t
  }), l = i.displayValidation.isInvalid;
  var o;
  return {
    ...i,
    value: t,
    setValue(s) {
      e.isReadOnly || e.isDisabled || n(s);
    },
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isSelected(s) {
      return t.includes(s);
    },
    addValue(s) {
      e.isReadOnly || e.isDisabled || t.includes(s) || n(t.concat(s));
    },
    removeValue(s) {
      e.isReadOnly || e.isDisabled || t.includes(s) && n(t.filter((d) => d !== s));
    },
    toggleValue(s) {
      e.isReadOnly || e.isDisabled || (t.includes(s) ? n(t.filter((d) => d !== s)) : n(t.concat(s)));
    },
    setInvalid(s, d) {
      let c = new Map(a.current);
      d.isInvalid ? c.set(s, d) : c.delete(s), a.current = c, i.updateValidation(Er(...c.values()));
    },
    validationState: (o = e.validationState) !== null && o !== void 0 ? o : l ? "invalid" : null,
    isInvalid: l,
    isRequired: r
  };
}
class $t extends Set {
  constructor(t, n, r) {
    super(t), t instanceof $t ? (this.anchorKey = n || t.anchorKey, this.currentKey = r || t.currentKey) : (this.anchorKey = n, this.currentKey = r);
  }
}
function j5(e, t) {
  if (e.size !== t.size)
    return !1;
  for (let n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Ao(e) {
  let { selectionMode: t = "none", disallowEmptySelection: n, allowDuplicateSelectionEvents: r, selectionBehavior: a = "toggle", disabledBehavior: i = "all" } = e, l = I(!1), [, o] = Z(!1), u = I(null), s = I(null), [, d] = Z(null), c = K(() => vs(e.selectedKeys), [
    e.selectedKeys
  ]), b = K(() => vs(e.defaultSelectedKeys, new $t()), [
    e.defaultSelectedKeys
  ]), [f, p] = Ke(c, b, e.onSelectionChange), m = K(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), [v, y] = Z(a);
  a === "replace" && v === "toggle" && typeof f == "object" && f.size === 0 && y("replace");
  let $ = I(a);
  return J(() => {
    a !== $.current && (y(a), $.current = a);
  }, [
    a
  ]), {
    selectionMode: t,
    disallowEmptySelection: n,
    selectionBehavior: v,
    setSelectionBehavior: y,
    get isFocused() {
      return l.current;
    },
    setFocused(x) {
      l.current = x, o(x);
    },
    get focusedKey() {
      return u.current;
    },
    get childFocusStrategy() {
      return s.current;
    },
    setFocusedKey(x, C = "first") {
      u.current = x, s.current = C, d(x);
    },
    selectedKeys: f,
    setSelectedKeys(x) {
      (r || !j5(x, f)) && p(x);
    },
    disabledKeys: m,
    disabledBehavior: i
  };
}
function vs(e, t) {
  return e ? e === "all" ? "all" : new $t(e) : t;
}
class To {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(t) {
    this.state.setSelectionBehavior(t);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(t) {
    this.state.setFocused(t);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(t, n) {
    (t == null || this.collection.getItem(t)) && this.state.setFocusedKey(t, n);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(t) {
    return this.state.selectionMode === "none" ? !1 : (t = this.getKey(t), this.state.selectedKeys === "all" ? this.canSelectItem(t) : this.state.selectedKeys.has(t));
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty)
      return !1;
    if (this.state.selectedKeys === "all")
      return !0;
    if (this._isSelectAll != null)
      return this._isSelectAll;
    let t = this.getSelectAllKeys(), n = this.state.selectedKeys;
    return this._isSelectAll = t.every((r) => n.has(r)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let t = null;
    for (let n of this.state.selectedKeys) {
      let r = this.collection.getItem(n);
      (!t || r && Xi(this.collection, r, t) < 0) && (t = r);
    }
    return t == null ? void 0 : t.key;
  }
  get lastSelectedKey() {
    let t = null;
    for (let n of this.state.selectedKeys) {
      let r = this.collection.getItem(n);
      (!t || r && Xi(this.collection, r, t) > 0) && (t = r);
    }
    return t == null ? void 0 : t.key;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(t) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single") {
      this.replaceSelection(t);
      return;
    }
    t = this.getKey(t);
    let n;
    if (this.state.selectedKeys === "all")
      n = new $t([
        t
      ], t, t);
    else {
      let r = this.state.selectedKeys, a = r.anchorKey || t;
      n = new $t(r, a, t);
      for (let i of this.getKeyRange(a, r.currentKey || t))
        n.delete(i);
      for (let i of this.getKeyRange(t, a))
        this.canSelectItem(i) && n.add(i);
    }
    this.state.setSelectedKeys(n);
  }
  getKeyRange(t, n) {
    let r = this.collection.getItem(t), a = this.collection.getItem(n);
    return r && a ? Xi(this.collection, r, a) <= 0 ? this.getKeyRangeInternal(t, n) : this.getKeyRangeInternal(n, t) : [];
  }
  getKeyRangeInternal(t, n) {
    let r = [], a = t;
    for (; a; ) {
      let i = this.collection.getItem(a);
      if ((i && i.type === "item" || i.type === "cell" && this.allowsCellSelection) && r.push(a), a === n)
        return r;
      a = this.collection.getKeyAfter(a);
    }
    return [];
  }
  getKey(t) {
    let n = this.collection.getItem(t);
    if (!n || n.type === "cell" && this.allowsCellSelection)
      return t;
    for (; n.type !== "item" && n.parentKey != null; )
      n = this.collection.getItem(n.parentKey);
    return !n || n.type !== "item" ? null : n.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(t) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single" && !this.isSelected(t)) {
      this.replaceSelection(t);
      return;
    }
    if (t = this.getKey(t), t == null)
      return;
    let n = new $t(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), !(this.disallowEmptySelection && n.size === 0) && this.state.setSelectedKeys(n);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(t) {
    if (this.selectionMode === "none" || (t = this.getKey(t), t == null))
      return;
    let n = this.canSelectItem(t) ? new $t([
      t
    ], t, t) : new $t();
    this.state.setSelectedKeys(n);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(t) {
    if (this.selectionMode === "none")
      return;
    let n = new $t();
    for (let r of t)
      if (r = this.getKey(r), r != null && (n.add(r), this.selectionMode === "single"))
        break;
    this.state.setSelectedKeys(n);
  }
  getSelectAllKeys() {
    let t = [], n = (r) => {
      for (; r; ) {
        if (this.canSelectItem(r)) {
          let a = this.collection.getItem(r);
          a.type === "item" && t.push(r), a.hasChildNodes && (this.allowsCellSelection || a.type !== "item") && n(It(Se(a, this.collection)).key);
        }
        r = this.collection.getKeyAfter(r);
      }
    };
    return n(this.collection.getFirstKey()), t;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    !this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new $t());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(t, n) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(t) && !this.disallowEmptySelection ? this.toggleSelection(t) : this.replaceSelection(t) : this.selectionBehavior === "toggle" || n && (n.pointerType === "touch" || n.pointerType === "virtual") ? this.toggleSelection(t) : this.replaceSelection(t));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(t) {
    if (t === this.state.selectedKeys)
      return !0;
    let n = this.selectedKeys;
    if (t.size !== n.size)
      return !1;
    for (let r of t)
      if (!n.has(r))
        return !1;
    for (let r of n)
      if (!t.has(r))
        return !1;
    return !0;
  }
  canSelectItem(t) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(t))
      return !1;
    let n = this.collection.getItem(t);
    return !(!n || n.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(t) {
    return this.state.disabledKeys.has(t) && this.state.disabledBehavior === "all";
  }
  isLink(t) {
    var n, r;
    return !!(!((r = this.collection.getItem(t)) === null || r === void 0 || (n = r.props) === null || n === void 0) && n.href);
  }
  constructor(t, n, r) {
    this.collection = t, this.state = n;
    var a;
    this.allowsCellSelection = (a = r == null ? void 0 : r.allowsCellSelection) !== null && a !== void 0 ? a : !1, this._isSelectAll = null;
  }
}
class Il {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(t) {
    let n = this.keyMap.get(t);
    return n ? n.prevKey : null;
  }
  getKeyAfter(t) {
    let n = this.keyMap.get(t);
    return n ? n.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(t) {
    return this.keyMap.get(t);
  }
  at(t) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[t]);
  }
  getChildren(t) {
    let n = this.keyMap.get(t);
    return (n == null ? void 0 : n.childNodes) || [];
  }
  constructor(t) {
    this.keyMap = /* @__PURE__ */ new Map(), this.iterable = t;
    let n = (i) => {
      if (this.keyMap.set(i.key, i), i.childNodes && i.type === "section")
        for (let l of i.childNodes)
          n(l);
    };
    for (let i of t)
      n(i);
    let r, a = 0;
    for (let [i, l] of this.keyMap)
      r ? (r.nextKey = i, l.prevKey = r.key) : (this.firstKey = i, l.prevKey = void 0), l.type === "item" && (l.index = a++), r = l, r.nextKey = void 0;
    this.lastKey = r == null ? void 0 : r.key;
  }
}
function pi(e) {
  let { filter: t } = e, n = Ao(e), r = K(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), a = ee((s) => t ? new Il(t(s)) : new Il(s), [
    t
  ]), i = K(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [
    e.suppressTextValueWarning
  ]), l = Do(e, a, i), o = K(() => new To(l, n), [
    l,
    n
  ]);
  const u = I(null);
  return J(() => {
    if (n.focusedKey != null && !l.getItem(n.focusedKey)) {
      const s = u.current.getItem(n.focusedKey), d = [
        ...u.current.getKeys()
      ].map((m) => {
        const v = u.current.getItem(m);
        return v.type === "item" ? v : null;
      }).filter((m) => m !== null), c = [
        ...l.getKeys()
      ].map((m) => {
        const v = l.getItem(m);
        return v.type === "item" ? v : null;
      }).filter((m) => m !== null), b = d.length - c.length;
      let f = Math.min(b > 1 ? Math.max(s.index - b + 1, 0) : s.index, c.length - 1), p;
      for (; f >= 0; ) {
        if (!o.isDisabled(c[f].key)) {
          p = c[f];
          break;
        }
        f < c.length - 1 ? f++ : (f > s.index && (f = s.index), f--);
      }
      n.setFocusedKey(p ? p.key : null);
    }
    u.current = l;
  }, [
    l,
    o,
    n,
    n.focusedKey
  ]), {
    collection: l,
    disabledKeys: r,
    selectionManager: o
  };
}
function Mo(e) {
  var t;
  let [n, r] = Ke(e.selectedKey, (t = e.defaultSelectedKey) !== null && t !== void 0 ? t : null, e.onSelectionChange), a = K(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: i, disabledKeys: l, selectionManager: o } = pi({
    ...e,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: a,
    onSelectionChange: (s) => {
      var d;
      let c = (d = s.values().next().value) !== null && d !== void 0 ? d : null;
      c === n && e.onSelectionChange && e.onSelectionChange(c), r(c);
    }
  }), u = n != null ? i.getItem(n) : null;
  return {
    collection: i,
    disabledKeys: l,
    selectionManager: o,
    selectedKey: n,
    setSelectedKey: r,
    selectedItem: u
  };
}
function Pn(e) {
  let [t, n] = Ke(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const r = ee(() => {
    n(!0);
  }, [
    n
  ]), a = ee(() => {
    n(!1);
  }, [
    n
  ]), i = ee(() => {
    n(!t);
  }, [
    n,
    t
  ]);
  return {
    isOpen: t,
    setOpen: n,
    open: r,
    close: a,
    toggle: i
  };
}
function H5(e) {
  var t, n;
  let { defaultFilter: r, menuTrigger: a = "input", allowsEmptyCollection: i = !1, allowsCustomValue: l, shouldCloseOnBlur: o = !0 } = e, [u, s] = Z(!1), [d, c] = Z(!1), [b, f] = Z(null), p = (ue) => {
    e.onSelectionChange && e.onSelectionChange(ue), ue === $ && (re(), V());
  };
  var m;
  let { collection: v, selectionManager: y, selectedKey: $, setSelectedKey: x, selectedItem: C, disabledKeys: P } = Mo({
    ...e,
    onSelectionChange: p,
    items: (m = e.items) !== null && m !== void 0 ? m : e.defaultItems
  });
  var B, R;
  let [g, M] = Ke(e.inputValue, (R = (B = e.defaultInputValue) !== null && B !== void 0 ? B : (t = v.getItem($)) === null || t === void 0 ? void 0 : t.textValue) !== null && R !== void 0 ? R : "", e.onInputChange), F = v, E = K(() => (
    // No default filter if items are controlled.
    e.items != null || !r ? v : _5(v, g, r)
  ), [
    v,
    g,
    r,
    e.items
  ]), [S, w] = Z(E), A = I("focus"), T = Pn({
    ...e,
    onOpenChange: (ue) => {
      e.onOpenChange && e.onOpenChange(ue, ue ? A.current : void 0), y.setFocused(ue), ue || y.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), D = (ue = null, ge) => {
    let Ie = ge === "manual" || ge === "focus" && a === "focus";
    (i || E.size > 0 || Ie && F.size > 0 || e.items) && (Ie && !T.isOpen && e.items === void 0 && s(!0), A.current = ge, f(ue), T.open());
  }, H = (ue = null, ge) => {
    let Ie = ge === "manual" || ge === "focus" && a === "focus";
    !(i || E.size > 0 || Ie && F.size > 0 || e.items) && !T.isOpen || (Ie && !T.isOpen && e.items === void 0 && s(!0), T.isOpen || (A.current = ge), L(ue));
  }, _ = ee(() => {
    w(u ? F : E);
  }, [
    u,
    F,
    E
  ]), L = ee((ue = null) => {
    T.isOpen && _(), f(ue), T.toggle();
  }, [
    T,
    _
  ]), V = ee(() => {
    T.isOpen && (_(), T.close());
  }, [
    T,
    _
  ]), [N, G] = Z(g), re = () => {
    var ue, ge;
    let Ie = (ge = (ue = v.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && ge !== void 0 ? ge : "";
    G(Ie), M(Ie);
  };
  var se, we;
  let O = I((we = (se = e.selectedKey) !== null && se !== void 0 ? se : e.defaultSelectedKey) !== null && we !== void 0 ? we : null);
  var X;
  let ce = I((X = (n = v.getItem($)) === null || n === void 0 ? void 0 : n.textValue) !== null && X !== void 0 ? X : "");
  J(() => {
    var ue;
    d && (E.size > 0 || i) && !T.isOpen && g !== N && a !== "manual" && D(null, "input"), !u && !i && T.isOpen && E.size === 0 && V(), $ != null && $ !== O.current && V(), g !== N && (y.setFocusedKey(null), s(!1), g === "" && (e.inputValue === void 0 || e.selectedKey === void 0) && x(null)), $ !== O.current && (e.inputValue === void 0 || e.selectedKey === void 0) ? re() : N !== g && G(g);
    var ge;
    let Ie = (ge = (ue = v.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && ge !== void 0 ? ge : "";
    !d && $ != null && e.inputValue === void 0 && $ === O.current && ce.current !== Ie && (G(Ie), M(Ie)), O.current = $, ce.current = Ie;
  });
  let De = Dt({
    ...e,
    value: K(() => ({
      inputValue: g,
      selectedKey: $
    }), [
      g,
      $
    ])
  }), ae = () => {
    l && $ == null ? at() : Bn();
  }, at = () => {
    O.current = null, x(null), V();
  }, Bn = () => {
    if (e.selectedKey !== void 0 && e.inputValue !== void 0) {
      var ue;
      e.onSelectionChange($);
      var ge;
      let Ie = (ge = (ue = v.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && ge !== void 0 ? ge : "";
      G(Ie), V();
    } else
      re(), V();
  };
  const Xn = () => {
    if (l) {
      var ue, ge;
      const Ie = (ge = (ue = v.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && ge !== void 0 ? ge : "";
      g === Ie ? Bn() : at();
    } else
      Bn();
  };
  let aa = () => {
    T.isOpen && y.focusedKey != null ? $ === y.focusedKey ? Bn() : x(y.focusedKey) : Xn();
  }, Qn = I(g), Bi = (ue) => {
    ue ? (Qn.current = g, a === "focus" && D(null, "focus")) : (o && Xn(), g !== Qn.current && De.commitValidation()), c(ue);
  }, ki = K(() => T.isOpen ? u ? F : E : S, [
    T.isOpen,
    F,
    E,
    u,
    S
  ]);
  return {
    ...De,
    ...T,
    focusStrategy: b,
    toggle: H,
    open: D,
    close: Xn,
    selectionManager: y,
    selectedKey: $,
    setSelectedKey: x,
    disabledKeys: P,
    isFocused: d,
    setFocused: Bi,
    selectedItem: C,
    collection: ki,
    inputValue: g,
    setInputValue: M,
    commit: aa,
    revert: ae
  };
}
function _5(e, t, n) {
  return new Il(A3(e, e, t, n));
}
function A3(e, t, n, r) {
  let a = [];
  for (let i of t)
    if (i.type === "section" && i.hasChildNodes) {
      let l = A3(e, Se(i, e), n, r);
      [
        ...l
      ].some((o) => o.type === "item") && a.push({
        ...i,
        childNodes: l
      });
    } else
      i.type === "item" && r(i.textValue, n) ? a.push({
        ...i
      }) : i.type !== "item" && a.push({
        ...i
      });
  return a;
}
var T3 = {};
T3 = {
  rangeOverflow: (e) => `يجب أن تكون القيمة ${e.maxValue} أو قبل ذلك.`,
  rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
  rangeUnderflow: (e) => `يجب أن تكون القيمة ${e.minValue} أو بعد ذلك.`,
  unavailableDate: "البيانات المحددة غير متاحة."
};
var M3 = {};
M3 = {
  rangeOverflow: (e) => `Стойността трябва да е ${e.maxValue} или по-ранна.`,
  rangeReversed: "Началната дата трябва да е преди крайната.",
  rangeUnderflow: (e) => `Стойността трябва да е ${e.minValue} или по-късно.`,
  unavailableDate: "Избраната дата не е налична."
};
var R3 = {};
R3 = {
  rangeOverflow: (e) => `Hodnota musí být ${e.maxValue} nebo dřívější.`,
  rangeReversed: "Datum zahájení musí předcházet datu ukončení.",
  rangeUnderflow: (e) => `Hodnota musí být ${e.minValue} nebo pozdější.`,
  unavailableDate: "Vybrané datum není k dispozici."
};
var I3 = {};
I3 = {
  rangeOverflow: (e) => `Værdien skal være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen skal være før slutdatoen.",
  rangeUnderflow: (e) => `Værdien skal være ${e.minValue} eller nyere.`,
  unavailableDate: "Den valgte dato er ikke tilgængelig."
};
var N3 = {};
N3 = {
  rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder früher sein.`,
  rangeReversed: "Das Anfangsdatum muss vor dem Enddatum liegen.",
  rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder später sein.`,
  unavailableDate: "Das ausgewählte Datum ist nicht verfügbar."
};
var K3 = {};
K3 = {
  rangeOverflow: (e) => `Η τιμή πρέπει να είναι ${e.maxValue} ή παλαιότερη.`,
  rangeReversed: "Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
  rangeUnderflow: (e) => `Η τιμή πρέπει να είναι ${e.minValue} ή μεταγενέστερη.`,
  unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη."
};
var z3 = {};
z3 = {
  rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
  rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
  rangeReversed: "Start date must be before end date.",
  unavailableDate: "Selected date unavailable."
};
var V3 = {};
V3 = {
  rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
  rangeReversed: "La fecha de inicio debe ser anterior a la fecha de finalización.",
  rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
  unavailableDate: "Fecha seleccionada no disponible."
};
var L3 = {};
L3 = {
  rangeOverflow: (e) => `Väärtus peab olema ${e.maxValue} või varasem.`,
  rangeReversed: "Alguskuupäev peab olema enne lõppkuupäeva.",
  rangeUnderflow: (e) => `Väärtus peab olema ${e.minValue} või hilisem.`,
  unavailableDate: "Valitud kuupäev pole saadaval."
};
var O3 = {};
O3 = {
  rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sitä aikaisempi.`,
  rangeReversed: "Aloituspäivän on oltava ennen lopetuspäivää.",
  rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sitä myöhäisempi.`,
  unavailableDate: "Valittu päivämäärä ei ole käytettävissä."
};
var j3 = {};
j3 = {
  rangeOverflow: (e) => `La valeur doit être ${e.maxValue} ou antérieure.`,
  rangeReversed: "La date de début doit être antérieure à la date de fin.",
  rangeUnderflow: (e) => `La valeur doit être ${e.minValue} ou ultérieure.`,
  unavailableDate: "La date sélectionnée n’est pas disponible."
};
var H3 = {};
H3 = {
  rangeOverflow: (e) => `הערך חייב להיות ${e.maxValue} או מוקדם יותר.`,
  rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
  rangeUnderflow: (e) => `הערך חייב להיות ${e.minValue} או מאוחר יותר.`,
  unavailableDate: "התאריך הנבחר אינו זמין."
};
var _3 = {};
_3 = {
  rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
  rangeReversed: "Datum početka mora biti prije datuma završetka.",
  rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
  unavailableDate: "Odabrani datum nije dostupan."
};
var U3 = {};
U3 = {
  rangeOverflow: (e) => `Az értéknek ${e.maxValue} vagy korábbinak kell lennie.`,
  rangeReversed: "A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",
  rangeUnderflow: (e) => `Az értéknek ${e.minValue} vagy későbbinek kell lennie.`,
  unavailableDate: "A kiválasztott dátum nem érhető el."
};
var W3 = {};
W3 = {
  rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
  rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
  rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
  unavailableDate: "Data selezionata non disponibile."
};
var G3 = {};
G3 = {
  rangeOverflow: (e) => `値は ${e.maxValue} 以下にする必要があります。`,
  rangeReversed: "開始日は終了日より前にする必要があります。",
  rangeUnderflow: (e) => `値は ${e.minValue} 以上にする必要があります。`,
  unavailableDate: "選択した日付は使用できません。"
};
var Z3 = {};
Z3 = {
  rangeOverflow: (e) => `값은 ${e.maxValue} 이전이어야 합니다.`,
  rangeReversed: "시작일은 종료일 이전이어야 합니다.",
  rangeUnderflow: (e) => `값은 ${e.minValue} 이상이어야 합니다.`,
  unavailableDate: "선택한 날짜를 사용할 수 없습니다."
};
var q3 = {};
q3 = {
  rangeOverflow: (e) => `Reikšmė turi būti ${e.maxValue} arba ankstesnė.`,
  rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
  rangeUnderflow: (e) => `Reikšmė turi būti ${e.minValue} arba naujesnė.`,
  unavailableDate: "Pasirinkta data nepasiekiama."
};
var Y3 = {};
Y3 = {
  rangeOverflow: (e) => `Vērtībai ir jābūt ${e.maxValue} vai agrākai.`,
  rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
  rangeUnderflow: (e) => `Vērtībai ir jābūt ${e.minValue} vai vēlākai.`,
  unavailableDate: "Atlasītais datums nav pieejams."
};
var J3 = {};
J3 = {
  rangeOverflow: (e) => `Verdien må være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen må være før sluttdatoen.",
  rangeUnderflow: (e) => `Verdien må være ${e.minValue} eller senere.`,
  unavailableDate: "Valgt dato utilgjengelig."
};
var X3 = {};
X3 = {
  rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
  rangeReversed: "De startdatum moet voor de einddatum liggen.",
  rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
  unavailableDate: "Geselecteerde datum niet beschikbaar."
};
var Q3 = {};
Q3 = {
  rangeOverflow: (e) => `Wartość musi mieć wartość ${e.maxValue} lub wcześniejszą.`,
  rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
  rangeUnderflow: (e) => `Wartość musi mieć wartość ${e.minValue} lub późniejszą.`,
  unavailableDate: "Wybrana data jest niedostępna."
};
var eh = {};
eh = {
  rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data inicial deve ser anterior à data final.",
  rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var th = {};
th = {
  rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data de início deve ser anterior à data de fim.",
  rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var nh = {};
nh = {
  rangeOverflow: (e) => `Valoarea trebuie să fie ${e.maxValue} sau anterioară.`,
  rangeReversed: "Data de început trebuie să fie anterioară datei de sfârșit.",
  rangeUnderflow: (e) => `Valoarea trebuie să fie ${e.minValue} sau ulterioară.`,
  unavailableDate: "Data selectată nu este disponibilă."
};
var rh = {};
rh = {
  rangeOverflow: (e) => `Значение должно быть не позже ${e.maxValue}.`,
  rangeReversed: "Дата начала должна предшествовать дате окончания.",
  rangeUnderflow: (e) => `Значение должно быть не раньше ${e.minValue}.`,
  unavailableDate: "Выбранная дата недоступна."
};
var ah = {};
ah = {
  rangeOverflow: (e) => `Hodnota musí byť ${e.maxValue} alebo skoršia.`,
  rangeReversed: "Dátum začiatku musí byť skorší ako dátum konca.",
  rangeUnderflow: (e) => `Hodnota musí byť ${e.minValue} alebo neskoršia.`,
  unavailableDate: "Vybratý dátum je nedostupný."
};
var ih = {};
ih = {
  rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starejša.`,
  rangeReversed: "Začetni datum mora biti pred končnim datumom.",
  rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novejša.`,
  unavailableDate: "Izbrani datum ni na voljo."
};
var lh = {};
lh = {
  rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
  rangeReversed: "Datum početka mora biti pre datuma završetka.",
  rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
  unavailableDate: "Izabrani datum nije dostupan."
};
var oh = {};
oh = {
  rangeOverflow: (e) => `Värdet måste vara ${e.maxValue} eller tidigare.`,
  rangeReversed: "Startdatumet måste vara före slutdatumet.",
  rangeUnderflow: (e) => `Värdet måste vara ${e.minValue} eller senare.`,
  unavailableDate: "Det valda datumet är inte tillgängligt."
};
var uh = {};
uh = {
  rangeOverflow: (e) => `Değer, ${e.maxValue} veya öncesi olmalıdır.`,
  rangeReversed: "Başlangıç tarihi bitiş tarihinden önce olmalıdır.",
  rangeUnderflow: (e) => `Değer, ${e.minValue} veya sonrası olmalıdır.`,
  unavailableDate: "Seçilen tarih kullanılamıyor."
};
var sh = {};
sh = {
  rangeOverflow: (e) => `Значення має бути не пізніше ${e.maxValue}.`,
  rangeReversed: "Дата початку має передувати даті завершення.",
  rangeUnderflow: (e) => `Значення має бути не раніше ${e.minValue}.`,
  unavailableDate: "Вибрана дата недоступна."
};
var dh = {};
dh = {
  rangeOverflow: (e) => `值必须是 ${e.maxValue} 或更早日期。`,
  rangeReversed: "开始日期必须早于结束日期。",
  rangeUnderflow: (e) => `值必须是 ${e.minValue} 或更晚日期。`,
  unavailableDate: "所选日期不可用。"
};
var ch = {};
ch = {
  rangeOverflow: (e) => `值必須是 ${e.maxValue} 或更早。`,
  rangeReversed: "開始日期必須在結束日期之前。",
  rangeUnderflow: (e) => `值必須是 ${e.minValue} 或更晚。`,
  unavailableDate: "所選日期無法使用。"
};
function U5(e) {
  return e && e.__esModule ? e.default : e;
}
var fh = {};
fh = {
  "ar-AE": T3,
  "bg-BG": M3,
  "cs-CZ": R3,
  "da-DK": I3,
  "de-DE": N3,
  "el-GR": K3,
  "en-US": z3,
  "es-ES": V3,
  "et-EE": L3,
  "fi-FI": O3,
  "fr-FR": j3,
  "he-IL": H3,
  "hr-HR": _3,
  "hu-HU": U3,
  "it-IT": W3,
  "ja-JP": G3,
  "ko-KR": Z3,
  "lt-LT": q3,
  "lv-LV": Y3,
  "nb-NO": J3,
  "nl-NL": X3,
  "pl-PL": Q3,
  "pt-BR": eh,
  "pt-PT": th,
  "ro-RO": nh,
  "ru-RU": rh,
  "sk-SK": ah,
  "sl-SI": ih,
  "sr-SP": lh,
  "sv-SE": oh,
  "tr-TR": uh,
  "uk-UA": sh,
  "zh-CN": dh,
  "zh-TW": ch
};
const bh = new Cn(/* @__PURE__ */ U5(fh));
function ph() {
  return typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
}
function Ga(e, t, n, r, a) {
  let i = e != null && n != null && e.compare(n) > 0, l = e != null && t != null && e.compare(t) < 0, o = e != null && (r == null ? void 0 : r(e)) || !1, u = i || l || o, s = [];
  if (u) {
    let d = ph(), c = Cn.getGlobalDictionaryForPackage("@react-stately/datepicker") || bh, b = new ud(d, c), f = new Vt(d, Wn({}, a)), p = f.resolvedOptions().timeZone;
    l && s.push(b.format("rangeUnderflow", {
      minValue: f.format(t.toDate(p))
    })), i && s.push(b.format("rangeOverflow", {
      maxValue: f.format(n.toDate(p))
    })), o && s.push(b.format("unavailableDate"));
  }
  return {
    isInvalid: u,
    validationErrors: s,
    validationDetails: {
      badInput: o,
      customError: !1,
      patternMismatch: !1,
      rangeOverflow: i,
      rangeUnderflow: l,
      stepMismatch: !1,
      tooLong: !1,
      tooShort: !1,
      typeMismatch: !1,
      valueMissing: !1,
      valid: !u
    }
  };
}
function W5(e, t, n, r, a) {
  let i = Ga(e == null ? void 0 : e.start, t, n, r, a), l = Ga(e == null ? void 0 : e.end, t, n, r, a), o = Er(i, l);
  return e.end != null && e.start != null && e.end.compare(e.start) < 0 && (o = Er(o, {
    isInvalid: !0,
    validationErrors: [
      bh.getStringForLocale("rangeReversed", ph())
    ],
    validationDetails: {
      ...li,
      rangeUnderflow: !0,
      rangeOverflow: !0,
      valid: !1
    }
  })), o;
}
const G5 = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}, Z5 = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
function Wn(e, t) {
  e = {
    ...t.shouldForceLeadingZeros ? Z5 : G5,
    ...e
  };
  let r = t.granularity || "minute", a = Object.keys(e);
  var i;
  let l = a.indexOf((i = t.maxGranularity) !== null && i !== void 0 ? i : "year");
  l < 0 && (l = 0);
  let o = a.indexOf(r);
  if (o < 0 && (o = 2), l > o)
    throw new Error("maxGranularity must be greater than granularity");
  let u = a.slice(l, o + 1).reduce((d, c) => (d[c] = e[c], d), {});
  return t.hourCycle != null && (u.hour12 = t.hourCycle === 12), u.timeZone = t.timeZone || "UTC", (r === "hour" || r === "minute" || r === "second") && t.timeZone && !t.hideTimeZone && (u.timeZoneName = "short"), t.showEra && l === 0 && (u.era = "short"), u;
}
function Ln(e) {
  return e && "hour" in e ? e : new jr();
}
function mh(e, t) {
  if (e === null)
    return null;
  if (e)
    return Ee(e, t);
}
function ar(e, t, n, r) {
  if (e)
    return mh(e, n);
  let a = Ee(dd(r).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), n);
  return t === "year" || t === "month" || t === "day" ? _e(a) : r ? a : xt(a);
}
function Ro(e, t) {
  let n = e && "timeZone" in e ? e.timeZone : void 0, r = e && "minute" in e ? "minute" : "day";
  if (e && t && !(t in e))
    throw new Error("Invalid granularity " + t + " for value " + e.toString());
  let [a, i] = Z([
    r,
    n
  ]);
  e && (a[0] !== r || a[1] !== n) && i([
    r,
    n
  ]), t || (t = e ? r : a[0]);
  let l = e ? n : a[1];
  return [
    t,
    l
  ];
}
function q5(e) {
  let t = Pn(e), [n, r] = Ke(e.value, e.defaultValue || null, e.onChange), a = n || e.placeholderValue, [i, l] = Ro(a, e.granularity), o = n != null ? n.toDate(l ?? "UTC") : null, u = i === "hour" || i === "minute" || i === "second";
  var s;
  let d = (s = e.shouldCloseOnSelect) !== null && s !== void 0 ? s : !0, [c, b] = Z(null), [f, p] = Z(null);
  if (n && (c = n, "hour" in n && (f = n)), a && !(i in a))
    throw new Error("Invalid granularity " + i + " for value " + a.toString());
  let m = (n == null ? void 0 : n.calendar.identifier) === "gregory" && n.era === "BC", v = K(() => ({
    granularity: i,
    timeZone: l,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    showEra: m
  }), [
    i,
    e.hourCycle,
    e.shouldForceLeadingZeros,
    l,
    e.hideTimeZone,
    m
  ]), { minValue: y, maxValue: $, isDateUnavailable: x } = e, C = K(() => Ga(n, y, $, x, v), [
    n,
    y,
    $,
    x,
    v
  ]), P = Dt({
    ...e,
    value: n,
    builtinValidation: C
  }), B = P.displayValidation.isInvalid, R = e.validationState || (B ? "invalid" : null), g = (E, S) => {
    r("timeZone" in S ? S.set(_e(E)) : xt(E, S)), b(null), p(null), P.commitValidation();
  };
  return {
    ...P,
    value: n,
    setValue: r,
    dateValue: c,
    timeValue: f,
    setDateValue: (E) => {
      let S = typeof d == "function" ? d() : d;
      u ? f || S ? g(E, f || Ln(e.placeholderValue)) : b(E) : (r(E), P.commitValidation()), S && t.setOpen(!1);
    },
    setTimeValue: (E) => {
      c && E ? g(c, E) : p(E);
    },
    granularity: i,
    hasTime: u,
    ...t,
    setOpen(E) {
      !E && !n && c && u && g(c, f || Ln(e.placeholderValue)), t.setOpen(E);
    },
    validationState: R,
    isInvalid: B,
    formatValue(E, S) {
      if (!o)
        return "";
      let w = Wn(S, v);
      return new Vt(E, w).format(o);
    }
  };
}
const Y5 = new Cn({
  ach: {
    year: "mwaka",
    month: "dwe",
    day: "nino"
  },
  af: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  am: {
    year: "ዓዓዓዓ",
    month: "ሚሜ",
    day: "ቀቀ"
  },
  an: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  ar: {
    year: "سنة",
    month: "شهر",
    day: "يوم"
  },
  ast: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  az: {
    year: "iiii",
    month: "aa",
    day: "gg"
  },
  be: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  bg: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  bn: {
    year: "yyyy",
    month: "মিমি",
    day: "dd"
  },
  br: {
    year: "bbbb",
    month: "mm",
    day: "dd"
  },
  bs: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  ca: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  cak: {
    year: "jjjj",
    month: "ii",
    day: "q'q'"
  },
  ckb: {
    year: "ساڵ",
    month: "مانگ",
    day: "ڕۆژ"
  },
  cs: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  cy: {
    year: "bbbb",
    month: "mm",
    day: "dd"
  },
  da: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  de: {
    year: "jjjj",
    month: "mm",
    day: "tt"
  },
  dsb: {
    year: "llll",
    month: "mm",
    day: "źź"
  },
  el: {
    year: "εεεε",
    month: "μμ",
    day: "ηη"
  },
  en: {
    year: "yyyy",
    month: "mm",
    day: "dd"
  },
  eo: {
    year: "jjjj",
    month: "mm",
    day: "tt"
  },
  es: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  et: {
    year: "aaaa",
    month: "kk",
    day: "pp"
  },
  eu: {
    year: "uuuu",
    month: "hh",
    day: "ee"
  },
  fa: {
    year: "سال",
    month: "ماه",
    day: "روز"
  },
  ff: {
    year: "hhhh",
    month: "ll",
    day: "ññ"
  },
  fi: {
    year: "vvvv",
    month: "kk",
    day: "pp"
  },
  fr: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  fy: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  ga: {
    year: "bbbb",
    month: "mm",
    day: "ll"
  },
  gd: {
    year: "bbbb",
    month: "mm",
    day: "ll"
  },
  gl: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  he: {
    year: "שנה",
    month: "חודש",
    day: "יום"
  },
  hr: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  hsb: {
    year: "llll",
    month: "mm",
    day: "dd"
  },
  hu: {
    year: "éééé",
    month: "hh",
    day: "nn"
  },
  ia: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  id: {
    year: "tttt",
    month: "bb",
    day: "hh"
  },
  it: {
    year: "aaaa",
    month: "mm",
    day: "gg"
  },
  ja: {
    year: " 年 ",
    month: "月",
    day: "日"
  },
  ka: {
    year: "წწწწ",
    month: "თთ",
    day: "რრ"
  },
  kk: {
    year: "жжжж",
    month: "аа",
    day: "кк"
  },
  kn: {
    year: "ವವವವ",
    month: "ಮಿಮೀ",
    day: "ದಿದಿ"
  },
  ko: {
    year: "연도",
    month: "월",
    day: "일"
  },
  lb: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  lo: {
    year: "ປປປປ",
    month: "ດດ",
    day: "ວວ"
  },
  lt: {
    year: "mmmm",
    month: "mm",
    day: "dd"
  },
  lv: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  meh: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  ml: {
    year: "വർഷം",
    month: "മാസം",
    day: "തീയതി"
  },
  ms: {
    year: "tttt",
    month: "mm",
    day: "hh"
  },
  nl: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  nn: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  no: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  oc: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  pl: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  pt: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  rm: {
    year: "oooo",
    month: "mm",
    day: "dd"
  },
  ro: {
    year: "aaaa",
    month: "ll",
    day: "zz"
  },
  ru: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  sc: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  scn: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  sk: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  sl: {
    year: "llll",
    month: "mm",
    day: "dd"
  },
  sr: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  sv: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  szl: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  tg: {
    year: "сссс",
    month: "мм",
    day: "рр"
  },
  th: {
    year: "ปปปป",
    month: "ดด",
    day: "วว"
  },
  tr: {
    year: "yyyy",
    month: "aa",
    day: "gg"
  },
  uk: {
    year: "рррр",
    month: "мм",
    day: "дд"
  },
  "zh-CN": {
    year: "年",
    month: "月",
    day: "日"
  },
  "zh-TW": {
    year: "年",
    month: "月",
    day: "日"
  }
}, "en");
function J5(e, t, n) {
  return e === "era" || e === "dayPeriod" ? t : e === "year" || e === "month" || e === "day" ? Y5.getStringForLocale(e, n) : "––";
}
const ha = {
  year: !0,
  month: !0,
  day: !0,
  hour: !0,
  minute: !0,
  second: !0,
  dayPeriod: !0,
  era: !0
}, gs = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15
}, X5 = {
  dayperiod: "dayPeriod"
};
function Io(e) {
  let { locale: t, createCalendar: n, hideTimeZone: r, isDisabled: a, isReadOnly: i, isRequired: l, minValue: o, maxValue: u, isDateUnavailable: s } = e, d = e.value || e.defaultValue || e.placeholderValue, [c, b] = Ro(d, e.granularity), f = b || "UTC";
  if (d && !(c in d))
    throw new Error("Invalid granularity " + c + " for value " + d.toString());
  let p = K(() => new Vt(t), [
    t
  ]), m = K(() => n(p.resolvedOptions().calendar), [
    n,
    p
  ]), [v, y] = Ke(e.value, e.defaultValue, e.onChange), $ = K(() => mh(v, m), [
    v,
    m
  ]), [x, C] = Z(() => ar(e.placeholderValue, c, m, b)), P = $ || x, B = m.identifier === "gregory" && P.era === "BC", R = K(() => {
    var O;
    return {
      granularity: c,
      maxGranularity: (O = e.maxGranularity) !== null && O !== void 0 ? O : "year",
      timeZone: b,
      hideTimeZone: r,
      hourCycle: e.hourCycle,
      showEra: B,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros
    };
  }, [
    e.maxGranularity,
    c,
    e.hourCycle,
    e.shouldForceLeadingZeros,
    b,
    r,
    B
  ]), g = K(() => Wn({}, R), [
    R
  ]), M = K(() => new Vt(t, g), [
    t,
    g
  ]), F = K(() => M.resolvedOptions(), [
    M
  ]), E = K(() => M.formatToParts(/* @__PURE__ */ new Date()).filter((O) => ha[O.type]).reduce((O, X) => (O[X.type] = !0, O), {}), [
    M
  ]), [S, w] = Z(() => e.value || e.defaultValue ? {
    ...E
  } : {}), A = I(), z = I(m.identifier);
  J(() => {
    m.identifier !== z.current && (z.current = m.identifier, C((O) => Object.keys(S).length > 0 ? Ee(O, m) : ar(e.placeholderValue, c, m, b)));
  }, [
    m,
    c,
    S,
    b,
    e.placeholderValue
  ]), v && Object.keys(S).length < Object.keys(E).length && (S = {
    ...E
  }, w(S)), v == null && Object.keys(S).length === Object.keys(E).length && (S = {}, w(S), C(ar(e.placeholderValue, c, m, b)));
  let T = $ && Object.keys(S).length >= Object.keys(E).length ? $ : x, D = (O) => {
    if (e.isDisabled || e.isReadOnly)
      return;
    let X = Object.keys(S), ce = Object.keys(E);
    O == null ? (y(null), C(ar(e.placeholderValue, c, m, b)), w({})) : X.length >= ce.length || X.length === ce.length - 1 && E.dayPeriod && !S.dayPeriod && A.current !== "dayPeriod" ? (O = Ee(O, (d == null ? void 0 : d.calendar) || new Ue()), y(O)) : C(O), A.current = null;
  }, H = K(() => T.toDate(f), [
    T,
    f
  ]), _ = K(() => M.formatToParts(H).map((O) => {
    let X = ha[O.type];
    O.type === "era" && m.getEras().length === 1 && (X = !1);
    let ce = ha[O.type] && !S[O.type], De = ha[O.type] ? J5(O.type, O.value, t) : null;
    return {
      type: X5[O.type] || O.type,
      text: ce ? De : O.value,
      ...Q5(T, O.type, F),
      isPlaceholder: ce,
      placeholder: De,
      isEditable: X
    };
  }), [
    H,
    S,
    M,
    F,
    T,
    m,
    t
  ]);
  E.era && S.year && !S.era ? (S.era = !0, w({
    ...S
  })) : !E.era && S.era && (delete S.era, w({
    ...S
  }));
  let L = (O) => {
    S[O] = !0, O === "year" && E.era && (S.era = !0), w({
      ...S
    });
  }, V = (O, X) => {
    if (S[O])
      D(e6(T, O, X, F));
    else {
      L(O);
      let ce = Object.keys(S), De = Object.keys(E);
      (ce.length >= De.length || ce.length === De.length - 1 && E.dayPeriod && !S.dayPeriod) && D(T);
    }
  }, N = K(() => Ga(v, o, u, s, R), [
    v,
    o,
    u,
    s,
    R
  ]), G = Dt({
    ...e,
    value: v,
    builtinValidation: N
  }), re = G.displayValidation.isInvalid, se = e.validationState || (re ? "invalid" : null);
  var we;
  return {
    ...G,
    value: $,
    dateValue: H,
    calendar: m,
    setValue: D,
    segments: _,
    dateFormatter: M,
    validationState: se,
    isInvalid: re,
    granularity: c,
    maxGranularity: (we = e.maxGranularity) !== null && we !== void 0 ? we : "year",
    isDisabled: a,
    isReadOnly: i,
    isRequired: l,
    increment(O) {
      V(O, 1);
    },
    decrement(O) {
      V(O, -1);
    },
    incrementPage(O) {
      V(O, gs[O] || 1);
    },
    decrementPage(O) {
      V(O, -(gs[O] || 1));
    },
    setSegment(O, X) {
      L(O), D(t6(T, O, X, F));
    },
    confirmPlaceholder() {
      if (e.isDisabled || e.isReadOnly)
        return;
      let O = Object.keys(S), X = Object.keys(E);
      O.length === X.length - 1 && E.dayPeriod && !S.dayPeriod && (S = {
        ...E
      }, w(S), D(T.copy()));
    },
    clearSegment(O) {
      delete S[O], A.current = O, w({
        ...S
      });
      let X = ar(e.placeholderValue, c, m, b), ce = T;
      if (O === "dayPeriod" && "hour" in T && "hour" in X) {
        let De = T.hour >= 12, ae = X.hour >= 12;
        De && !ae ? ce = T.set({
          hour: T.hour - 12
        }) : !De && ae && (ce = T.set({
          hour: T.hour + 12
        }));
      } else
        O in T && (ce = T.set({
          [O]: X[O]
        }));
      y(null), D(ce);
    },
    formatValue(O) {
      if (!$)
        return "";
      let X = Wn(O, R);
      return new Vt(t, X).format(H);
    }
  };
}
function Q5(e, t, n) {
  switch (t) {
    case "era": {
      let r = e.calendar.getEras();
      return {
        value: r.indexOf(e.era),
        minValue: 0,
        maxValue: r.length - 1
      };
    }
    case "year":
      return {
        value: e.year,
        minValue: 1,
        maxValue: e.calendar.getYearsInEra(e)
      };
    case "month":
      return {
        value: e.month,
        minValue: z$(e),
        maxValue: e.calendar.getMonthsInYear(e)
      };
    case "day":
      return {
        value: e.day,
        minValue: V$(e),
        maxValue: e.calendar.getDaysInMonth(e)
      };
  }
  if ("hour" in e)
    switch (t) {
      case "dayPeriod":
        return {
          value: e.hour >= 12 ? 12 : 0,
          minValue: 0,
          maxValue: 12
        };
      case "hour":
        if (n.hour12) {
          let r = e.hour >= 12;
          return {
            value: e.hour,
            minValue: r ? 12 : 0,
            maxValue: r ? 23 : 11
          };
        }
        return {
          value: e.hour,
          minValue: 0,
          maxValue: 23
        };
      case "minute":
        return {
          value: e.minute,
          minValue: 0,
          maxValue: 59
        };
      case "second":
        return {
          value: e.second,
          minValue: 0,
          maxValue: 59
        };
    }
  return {};
}
function e6(e, t, n, r) {
  switch (t) {
    case "era":
    case "year":
    case "month":
    case "day":
      return e.cycle(t, n, {
        round: t === "year"
      });
  }
  if ("hour" in e)
    switch (t) {
      case "dayPeriod": {
        let a = e.hour, i = a >= 12;
        return e.set({
          hour: i ? a - 12 : a + 12
        });
      }
      case "hour":
      case "minute":
      case "second":
        return e.cycle(t, n, {
          round: t !== "hour",
          hourCycle: r.hour12 ? 12 : 24
        });
    }
}
function t6(e, t, n, r) {
  switch (t) {
    case "day":
    case "month":
    case "year":
    case "era":
      return e.set({
        [t]: n
      });
  }
  if ("hour" in e)
    switch (t) {
      case "dayPeriod": {
        let a = e.hour, i = a >= 12;
        return n >= 12 === i ? e : e.set({
          hour: i ? a - 12 : a + 12
        });
      }
      case "hour":
        if (r.hour12) {
          let i = e.hour >= 12;
          !i && n === 12 && (n = 0), i && n < 12 && (n += 12);
        }
      case "minute":
      case "second":
        return e.set({
          [t]: n
        });
    }
}
function n6(e) {
  var t, n;
  let r = Pn(e), [a, i] = Ke(e.value, e.defaultValue || null, e.onChange), [l, o] = Z(() => a || {
    start: null,
    end: null
  });
  a == null && l.start && l.end && (l = {
    start: null,
    end: null
  }, o(l));
  let u = a || l, s = (T) => {
    o(T || {
      start: null,
      end: null
    }), T != null && T.start && T.end ? i(T) : i(null);
  }, d = (u == null ? void 0 : u.start) || (u == null ? void 0 : u.end) || e.placeholderValue, [c, b] = Ro(d, e.granularity), f = c === "hour" || c === "minute" || c === "second";
  var p;
  let m = (p = e.shouldCloseOnSelect) !== null && p !== void 0 ? p : !0, [v, y] = Z(null), [$, x] = Z(null);
  u && u.start && u.end && (v = u, "hour" in u.start && ($ = u));
  let C = (T, D) => {
    s({
      start: "timeZone" in D.start ? D.start.set(_e(T.start)) : xt(T.start, D.start),
      end: "timeZone" in D.end ? D.end.set(_e(T.end)) : xt(T.end, D.end)
    }), y(null), x(null), w.commitValidation();
  }, P = (T) => {
    let D = typeof m == "function" ? m() : m;
    f ? D || T.start && T.end && ($ != null && $.start) && ($ != null && $.end) ? C(T, {
      start: ($ == null ? void 0 : $.start) || Ln(e.placeholderValue),
      end: ($ == null ? void 0 : $.end) || Ln(e.placeholderValue)
    }) : y(T) : T.start && T.end ? (s(T), w.commitValidation()) : y(T), D && r.setOpen(!1);
  }, B = (T) => {
    v != null && v.start && (v != null && v.end) && T.start && T.end ? C(v, T) : x(T);
  }, R = (u == null || (t = u.start) === null || t === void 0 ? void 0 : t.calendar.identifier) === "gregory" && u.start.era === "BC" || (u == null || (n = u.end) === null || n === void 0 ? void 0 : n.calendar.identifier) === "gregory" && u.end.era === "BC", g = K(() => ({
    granularity: c,
    timeZone: b,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    showEra: R
  }), [
    c,
    e.hourCycle,
    e.shouldForceLeadingZeros,
    b,
    e.hideTimeZone,
    R
  ]), { minValue: M, maxValue: F, isDateUnavailable: E } = e, S = K(() => W5(u, M, F, E, g), [
    u,
    M,
    F,
    E,
    g
  ]), w = Dt({
    ...e,
    value: a,
    name: K(() => [
      e.startName,
      e.endName
    ], [
      e.startName,
      e.endName
    ]),
    builtinValidation: S
  }), A = w.displayValidation.isInvalid, z = e.validationState || (A ? "invalid" : null);
  return {
    ...w,
    value: u,
    setValue: s,
    dateRange: v,
    timeRange: $,
    granularity: c,
    hasTime: f,
    setDate(T, D) {
      P({
        ...v,
        [T]: D
      });
    },
    setTime(T, D) {
      B({
        ...$,
        [T]: D
      });
    },
    setDateTime(T, D) {
      s({
        ...u,
        [T]: D
      });
    },
    setDateRange: P,
    setTimeRange: B,
    ...r,
    setOpen(T) {
      !T && !(u != null && u.start && (u != null && u.end)) && (v != null && v.start) && (v != null && v.end) && f && C(v, {
        start: ($ == null ? void 0 : $.start) || Ln(e.placeholderValue),
        end: ($ == null ? void 0 : $.end) || Ln(e.placeholderValue)
      }), r.setOpen(T);
    },
    validationState: z,
    isInvalid: A,
    formatValue(T, D) {
      if (!u || !u.start || !u.end)
        return null;
      let H = "timeZone" in u.start ? u.start.timeZone : void 0, _ = e.granularity || (u.start && "minute" in u.start ? "minute" : "day"), L = "timeZone" in u.end ? u.end.timeZone : void 0, V = e.granularity || (u.end && "minute" in u.end ? "minute" : "day"), N = Wn(D, {
        granularity: _,
        timeZone: H,
        hideTimeZone: e.hideTimeZone,
        hourCycle: e.hourCycle,
        showEra: u.start.calendar.identifier === "gregory" && u.start.era === "BC" || u.end.calendar.identifier === "gregory" && u.end.era === "BC"
      }), G = u.start.toDate(H || "UTC"), re = u.end.toDate(L || "UTC"), se = new Vt(T, N), we;
      if (H === L && _ === V && u.start.compare(u.end) !== 0) {
        try {
          let O = se.formatRangeToParts(G, re), X = -1;
          for (let ae = 0; ae < O.length; ae++) {
            let at = O[ae];
            if (at.source === "shared" && at.type === "literal")
              X = ae;
            else if (at.source === "endRange")
              break;
          }
          let ce = "", De = "";
          for (let ae = 0; ae < O.length; ae++)
            ae < X ? ce += O[ae].value : ae > X && (De += O[ae].value);
          return {
            start: ce,
            end: De
          };
        } catch {
        }
        we = se;
      } else {
        let O = Wn(D, {
          granularity: V,
          timeZone: L,
          hideTimeZone: e.hideTimeZone,
          hourCycle: e.hourCycle
        });
        we = new Vt(T, O);
      }
      return {
        start: se.format(G),
        end: we.format(re)
      };
    }
  };
}
function r6(e) {
  let { placeholderValue: t = new jr(), minValue: n, maxValue: r, granularity: a, validate: i } = e, [l, o] = Ke(e.value, e.defaultValue, e.onChange), u = l || t, s = u && "day" in u ? u : void 0, d = e.defaultValue && "timeZone" in e.defaultValue ? e.defaultValue.timeZone : void 0, c = K(() => {
    let $ = u && "timeZone" in u ? u.timeZone : void 0;
    return ($ || d) && t ? hd(ir(t), $ || d) : ir(t);
  }, [
    t,
    u,
    d
  ]), b = K(() => ir(n, s), [
    n,
    s
  ]), f = K(() => ir(r, s), [
    r,
    s
  ]), p = K(() => l && "day" in l ? Bu(l) : l, [
    l
  ]), m = K(() => l == null ? null : ir(l), [
    l
  ]);
  return {
    ...Io({
      ...e,
      value: m,
      defaultValue: void 0,
      minValue: b,
      maxValue: f,
      onChange: ($) => {
        o(s || d ? $ : $ && Bu($));
      },
      granularity: a || "minute",
      maxGranularity: "hour",
      placeholderValue: c,
      // Calendar should not matter for time fields.
      createCalendar: () => new Ue(),
      validate: ee(() => i == null ? void 0 : i(l), [
        i,
        l
      ])
    }),
    timeValue: p
  };
}
function ir(e, t = ni(lo())) {
  return e ? "day" in e ? e : xt(t, e) : null;
}
function a6(e, t) {
  let { triggerKey: n } = e, { UNSTABLE_expandedKeysStack: r, UNSTABLE_openSubmenu: a, UNSTABLE_closeSubmenu: i, close: l } = t, [o] = Z(r == null ? void 0 : r.length), u = K(() => r[o] === n, [
    r,
    n,
    o
  ]), [s, d] = Z(null), c = ee((p = null) => {
    d(p), a(n, o);
  }, [
    a,
    o,
    n
  ]), b = ee(() => {
    d(null), i(n, o);
  }, [
    i,
    o,
    n
  ]), f = ee((p = null) => {
    d(p), u ? b() : c(p);
  }, [
    b,
    c,
    u
  ]);
  return K(() => ({
    focusStrategy: s,
    isOpen: u,
    open: c,
    close: b,
    closeAll: l,
    submenuLevel: o,
    // TODO: Placeholders that aren't used but give us parity with OverlayTriggerState so we can use this in Popover. Refactor if we update Popover via
    // https://github.com/adobe/react-spectrum/pull/4976#discussion_r1336472863
    setOpen: () => {
    },
    toggle: f
  }), [
    u,
    c,
    b,
    l,
    s,
    f,
    o
  ]);
}
function i6(e) {
  let { minValue: t, maxValue: n, step: r, formatOptions: a, value: i, defaultValue: l = NaN, onChange: o, locale: u, isDisabled: s, isReadOnly: d } = e;
  i === null && (i = NaN), i !== void 0 && !isNaN(i) && (r !== void 0 && !isNaN(r) ? i = Ge(i, t, n, r) : i = dt(i, t, n)), isNaN(l) || (r !== void 0 && !isNaN(r) ? l = Ge(l, t, n, r) : l = dt(l, t, n));
  let [c, b] = Ke(i, isNaN(l) ? NaN : l, o), [f, p] = Z(() => isNaN(c) ? "" : new ja(u, a).format(c)), m = K(() => new go(u, a), [
    u,
    a
  ]), v = K(() => m.getNumberingSystem(f), [
    m,
    f
  ]), y = K(() => new ja(u, {
    ...a,
    numberingSystem: v
  }), [
    u,
    a,
    v
  ]), $ = K(() => y.resolvedOptions(), [
    y
  ]), x = ee((N) => isNaN(N) || N === null ? "" : y.format(N), [
    y
  ]), C = Dt({
    ...e,
    value: c
  }), P = r !== void 0 && !isNaN(r) ? r : 1;
  $.style === "percent" && (r === void 0 || isNaN(r)) && (P = 0.01);
  let [B, R] = Z(c), [g, M] = Z(u), [F, E] = Z(a);
  (!Object.is(c, B) || u !== g || a !== F) && (p(x(c)), R(c), M(u), E(a));
  let S = K(() => m.parse(f), [
    m,
    f
  ]), w = () => {
    if (!f.length) {
      b(NaN), p(i === void 0 ? "" : x(c));
      return;
    }
    if (isNaN(S)) {
      p(x(c));
      return;
    }
    let N;
    r === void 0 || isNaN(r) ? N = dt(S, t, n) : N = Ge(S, t, n, r), N = m.parse(x(N)), b(N), p(x(i === void 0 ? N : c));
  }, A = (N, G = 0) => {
    let re = S;
    if (isNaN(re)) {
      let se = isNaN(G) ? 0 : G;
      return Ge(se, t, n, P);
    } else {
      let se = Ge(re, t, n, P);
      return N === "+" && se > re || N === "-" && se < re ? se : Ge(nl(N, re, P), t, n, P);
    }
  }, z = () => {
    let N = A("+", t);
    N === c && p(x(N)), b(N), C.commitValidation();
  }, T = () => {
    let N = A("-", n);
    N === c && p(x(N)), b(N), C.commitValidation();
  }, D = () => {
    n != null && (b(Ge(n, t, n, P)), C.commitValidation());
  }, H = () => {
    t != null && (b(t), C.commitValidation());
  }, _ = K(() => !s && !d && (isNaN(S) || n === void 0 || isNaN(n) || Ge(S, t, n, P) > S || nl("+", S, P) <= n), [
    s,
    d,
    t,
    n,
    P,
    S
  ]), L = K(() => !s && !d && (isNaN(S) || t === void 0 || isNaN(t) || Ge(S, t, n, P) < S || nl("-", S, P) >= t), [
    s,
    d,
    t,
    n,
    P,
    S
  ]);
  return {
    ...C,
    validate: (N) => m.isValidPartialNumber(N, t, n),
    increment: z,
    incrementToMax: D,
    decrement: T,
    decrementToMin: H,
    canIncrement: _,
    canDecrement: L,
    minValue: t,
    maxValue: n,
    numberValue: S,
    setNumberValue: b,
    setInputValue: p,
    inputValue: f,
    commit: w
  };
}
function nl(e, t, n) {
  let r = e === "+" ? t + n : t - n;
  if (t % 1 !== 0 || n % 1 !== 0) {
    const a = t.toString().split("."), i = n.toString().split("."), l = a[1] && a[1].length || 0, o = i[1] && i[1].length || 0, u = Math.pow(10, Math.max(l, o));
    t = Math.round(t * u), n = Math.round(n * u), r = e === "+" ? t + n : t - n, r /= u;
  }
  return r;
}
let l6 = Math.round(Math.random() * 1e10), o6 = 0;
function u6(e) {
  let t = K(() => e.name || `radio-group-${l6}-${++o6}`, [
    e.name
  ]);
  var n;
  let [r, a] = Ke(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [i, l] = Z(null), o = Dt({
    ...e,
    value: r
  }), u = (d) => {
    !e.isReadOnly && !e.isDisabled && (a(d), o.commitValidation());
  }, s = o.displayValidation.isInvalid;
  return {
    ...o,
    name: t,
    selectedValue: r,
    setSelectedValue: u,
    lastFocusedValue: i,
    setLastFocusedValue: l,
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isRequired: e.isRequired || !1,
    validationState: e.validationState || (s ? "invalid" : null),
    isInvalid: s
  };
}
function s6(e) {
  let [t, n] = Ke($s(e.value), $s(e.defaultValue) || "", e.onChange);
  return {
    value: t,
    setValue: n
  };
}
function $s(e) {
  if (e != null)
    return e.toString();
}
function d6(e) {
  let t = Pn(e), [n, r] = Z(null), a = Mo({
    ...e,
    onSelectionChange: (u) => {
      e.onSelectionChange != null && e.onSelectionChange(u), t.close(), i.commitValidation();
    }
  }), i = Dt({
    ...e,
    value: a.selectedKey
  }), [l, o] = Z(!1);
  return {
    ...i,
    ...a,
    ...t,
    focusStrategy: n,
    open(u = null) {
      a.collection.size !== 0 && (r(u), t.open());
    },
    toggle(u = null) {
      a.collection.size !== 0 && (r(u), t.toggle());
    },
    isFocused: l,
    setFocused: o
  };
}
const c6 = 0, f6 = 100, b6 = 1;
function p6(e) {
  const { isDisabled: t = !1, minValue: n = c6, maxValue: r = f6, numberFormatter: a, step: i = b6, orientation: l = "horizontal" } = e;
  let o = K(() => {
    let V = (r - n) / 10;
    return V = Ge(V, 0, V + i, i), Math.max(V, i);
  }, [
    i,
    r,
    n
  ]), u = ee((V) => V == null ? void 0 : V.map((N, G) => {
    let re = G === 0 ? n : N[G - 1], se = G === V.length - 1 ? r : N[G + 1];
    return Ge(N, re, se, i);
  }), [
    n,
    r,
    i
  ]), s = K(() => u(xs(e.value)), [
    e.value
  ]), d = K(() => {
    var V;
    return u((V = xs(e.defaultValue)) !== null && V !== void 0 ? V : [
      n
    ]);
  }, [
    e.defaultValue,
    n
  ]), c = Ds(e.value, e.defaultValue, e.onChange), b = Ds(e.value, e.defaultValue, e.onChangeEnd);
  const [f, p] = Ke(s, d, c), [m, v] = Z(new Array(f.length).fill(!1)), y = I(new Array(f.length).fill(!0)), [$, x] = Z(void 0), C = I(f), P = I(m);
  let B = (V) => {
    C.current = V, p(V);
  }, R = (V) => {
    P.current = V, v(V);
  };
  function g(V) {
    return (V - n) / (r - n);
  }
  function M(V) {
    return V === 0 ? n : f[V - 1];
  }
  function F(V) {
    return V === f.length - 1 ? r : f[V + 1];
  }
  function E(V) {
    return y.current[V];
  }
  function S(V, N) {
    y.current[V] = N;
  }
  function w(V, N) {
    if (t || !E(V))
      return;
    const G = M(V), re = F(V);
    N = Ge(N, G, re, i);
    let se = ys(C.current, V, N);
    B(se);
  }
  function A(V, N) {
    if (t || !E(V))
      return;
    N && (C.current = f);
    const G = P.current[V];
    P.current = ys(P.current, V, N), R(P.current), b && G && !P.current.some(Boolean) && b(C.current);
  }
  function z(V) {
    return a.format(V);
  }
  function T(V, N) {
    w(V, H(N));
  }
  function D(V) {
    return Math.round((V - n) / i) * i + n;
  }
  function H(V) {
    const N = V * (r - n) + n;
    return dt(D(N), n, r);
  }
  function _(V, N = 1) {
    let G = Math.max(N, i);
    w(V, Ge(f[V] + G, n, r, i));
  }
  function L(V, N = 1) {
    let G = Math.max(N, i);
    w(V, Ge(f[V] - G, n, r, i));
  }
  return {
    values: f,
    getThumbValue: (V) => f[V],
    setThumbValue: w,
    setThumbPercent: T,
    isThumbDragging: (V) => m[V],
    setThumbDragging: A,
    focusedThumb: $,
    setFocusedThumb: x,
    getThumbPercent: (V) => g(f[V]),
    getValuePercent: g,
    getThumbValueLabel: (V) => z(f[V]),
    getFormattedValue: z,
    getThumbMinValue: M,
    getThumbMaxValue: F,
    getPercentValue: H,
    isThumbEditable: E,
    setThumbEditable: S,
    incrementThumb: _,
    decrementThumb: L,
    step: i,
    pageSize: o,
    orientation: l,
    isDisabled: t
  };
}
function ys(e, t, n) {
  return e[t] === n ? e : [
    ...e.slice(0, t),
    n,
    ...e.slice(t + 1)
  ];
}
function xs(e) {
  if (e != null)
    return Array.isArray(e) ? e : [
      e
    ];
}
function Ds(e, t, n) {
  return (r) => {
    typeof e == "number" || typeof t == "number" ? n == null || n(r[0]) : n == null || n(r);
  };
}
function m6(e) {
  let { collection: t, focusMode: n } = e, r = Ao(e), a = K(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), i = r.setFocusedKey;
  r.setFocusedKey = (u, s) => {
    if (n === "cell" && u != null) {
      let b = t.getItem(u);
      if ((b == null ? void 0 : b.type) === "item") {
        var d, c;
        let f = Se(b, t);
        s === "last" ? u = (d = Qt(f)) === null || d === void 0 ? void 0 : d.key : u = (c = It(f)) === null || c === void 0 ? void 0 : c.key;
      }
    }
    i(u, s);
  };
  let l = K(() => new To(t, r), [
    t,
    r
  ]);
  const o = I(null);
  return J(() => {
    if (r.focusedKey != null && !t.getItem(r.focusedKey)) {
      const u = o.current.getItem(r.focusedKey), s = u.parentKey != null && (u.type === "cell" || u.type === "rowheader" || u.type === "column") ? o.current.getItem(u.parentKey) : u, d = o.current.rows, c = t.rows, b = d.length - c.length;
      let f = Math.min(b > 1 ? Math.max(s.index - b + 1, 0) : s.index, c.length - 1), p;
      for (; f >= 0; ) {
        if (!l.isDisabled(c[f].key) && c[f].type !== "headerrow") {
          p = c[f];
          break;
        }
        f < c.length - 1 ? f++ : (f > s.index && (f = s.index), f--);
      }
      if (p) {
        const m = p.hasChildNodes ? [
          ...Se(p, t)
        ] : [], v = p.hasChildNodes && s !== u && u.index < m.length ? m[u.index].key : p.key;
        r.setFocusedKey(v);
      } else
        r.setFocusedKey(null);
    }
    o.current = t;
  }, [
    t,
    l,
    r,
    r.focusedKey
  ]), {
    collection: t,
    disabledKeys: a,
    isKeyboardNavigationDisabled: !1,
    selectionManager: l
  };
}
class h6 {
  *[Symbol.iterator]() {
    yield* [
      ...this.rows
    ];
  }
  get size() {
    return [
      ...this.rows
    ].length;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(t) {
    let n = this.keyMap.get(t);
    return n ? n.prevKey : null;
  }
  getKeyAfter(t) {
    let n = this.keyMap.get(t);
    return n ? n.nextKey : null;
  }
  getFirstKey() {
    var t;
    return (t = [
      ...this.rows
    ][0]) === null || t === void 0 ? void 0 : t.key;
  }
  getLastKey() {
    var t;
    let n = [
      ...this.rows
    ];
    return (t = n[n.length - 1]) === null || t === void 0 ? void 0 : t.key;
  }
  getItem(t) {
    return this.keyMap.get(t);
  }
  at(t) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[t]);
  }
  getChildren(t) {
    let n = this.keyMap.get(t);
    return (n == null ? void 0 : n.childNodes) || [];
  }
  constructor(t) {
    this.keyMap = /* @__PURE__ */ new Map(), this.keyMap = /* @__PURE__ */ new Map(), this.columnCount = t == null ? void 0 : t.columnCount, this.rows = [];
    let n = (i) => {
      let l = this.keyMap.get(i.key);
      t.visitNode && (i = t.visitNode(i)), this.keyMap.set(i.key, i);
      let o = /* @__PURE__ */ new Set(), u;
      for (let s of i.childNodes)
        s.type === "cell" && s.parentKey == null && (s.parentKey = i.key), o.add(s.key), u ? (u.nextKey = s.key, s.prevKey = u.key) : s.prevKey = null, n(s), u = s;
      if (u && (u.nextKey = null), l)
        for (let s of l.childNodes)
          o.has(s.key) || r(s);
    }, r = (i) => {
      this.keyMap.delete(i.key);
      for (let l of i.childNodes)
        this.keyMap.get(l.key) === l && r(l);
    }, a;
    t.items.forEach((i, l) => {
      let o = {
        level: 0,
        key: "row-" + l,
        type: "row",
        value: void 0,
        hasChildNodes: !0,
        childNodes: [
          ...i.childNodes
        ],
        rendered: void 0,
        textValue: void 0,
        ...i
      };
      a ? (a.nextKey = o.key, o.prevKey = a.key) : o.prevKey = null, this.rows.push(o), n(o), a = o;
    }), a && (a.nextKey = null);
  }
}
function Nl(e) {
  return e != null && (!isNaN(e) || String(e).match(/^(\d+)(?=%$)/) !== null);
}
function Kl(e) {
  if (!e)
    return 1;
  let t = e.match(/^(.+)(?=fr$)/);
  return t ? parseFloat(t[0]) : (console.warn(`width: ${e} is not a supported format, width should be a number (ex. 150), percentage (ex. '50%') or fr unit (ex. '2fr')`, "defaulting to '1fr'"), 1);
}
function No(e, t) {
  if (typeof e == "string") {
    let n = e.match(/^(\d+)(?=%$)/);
    if (!n)
      throw new Error("Only percentages or numbers are supported for static column widths");
    return t * (parseFloat(n[0]) / 100);
  }
  return e;
}
function hh(e, t) {
  return e != null ? No(e, t) : Number.MAX_SAFE_INTEGER;
}
function vh(e, t) {
  return e != null ? No(e, t) : 0;
}
function Cs(e, t, n, r, a) {
  let i = !1, l = t.map((o, u) => {
    var s, d, c;
    let b = n.get(o.key) != null ? n.get(o.key) : (c = (d = (s = o.width) !== null && s !== void 0 ? s : o.defaultWidth) !== null && d !== void 0 ? d : r == null ? void 0 : r(u)) !== null && c !== void 0 ? c : "1fr", f = !1, p = 0, m = 0, v = null;
    Nl(b) ? (p = No(b, e), f = !0) : (m = Kl(b), m <= 0 && (f = !0));
    var y, $;
    let x = vh(($ = (y = o.minWidth) !== null && y !== void 0 ? y : a == null ? void 0 : a(u)) !== null && $ !== void 0 ? $ : 0, e), C = hh(o.maxWidth, e), P = Math.max(x, Math.min(p, C));
    return f ? v = P : p > P && (f = !0, v = P), f || (i = !0), {
      frozen: f,
      baseSize: p,
      hypotheticalMainSize: P,
      min: x,
      max: C,
      flex: m,
      targetMainSize: v,
      violation: 0
    };
  });
  for (; i; ) {
    let o = 0, u = 0;
    l.forEach((c) => {
      c.frozen ? o += c.targetMainSize : (o += c.baseSize, u += c.flex);
    });
    let s = e - o;
    s > 0 && l.forEach((c) => {
      if (!c.frozen) {
        let b = c.flex / u;
        c.targetMainSize = c.baseSize + b * s;
      }
    });
    let d = 0;
    l.forEach((c) => {
      if (c.violation = 0, !c.frozen) {
        let { min: b, max: f, targetMainSize: p } = c;
        c.targetMainSize = Math.max(b, Math.min(p, f)), c.violation = c.targetMainSize - p, d += c.violation;
      }
    }), i = !1, l.forEach((c) => {
      d === 0 || Math.sign(d) === Math.sign(c.violation) ? c.frozen = !0 : c.frozen || (i = !0);
    });
  }
  return v6(l);
}
function v6(e) {
  let t = 0, n = 0, r = [];
  return e.forEach(function(a) {
    let i = a.targetMainSize, l = Math.round(i + t) - n;
    t += i, n += l, r.push(l);
  }), r;
}
class g6 {
  /** Takes an array of columns and splits it into 2 maps of columns with controlled and columns with uncontrolled widths. */
  splitColumnsIntoControlledAndUncontrolled(t) {
    return t.reduce((n, r) => (r.props.width != null ? n[0].set(r.key, r) : n[1].set(r.key, r), n), [
      /* @__PURE__ */ new Map(),
      /* @__PURE__ */ new Map()
    ]);
  }
  /** Takes uncontrolled and controlled widths and joins them into a single Map. */
  recombineColumns(t, n, r, a) {
    return new Map(t.map((i) => r.has(i.key) ? [
      i.key,
      n.get(i.key)
    ] : [
      i.key,
      a.get(i.key).props.width
    ]));
  }
  /** Used to make an initial Map of the uncontrolled widths based on default widths. */
  getInitialUncontrolledWidths(t) {
    return new Map(Array.from(t).map(([n, r]) => {
      var a, i, l, o;
      return [
        n,
        (o = (l = r.props.defaultWidth) !== null && l !== void 0 ? l : (a = (i = this).getDefaultWidth) === null || a === void 0 ? void 0 : a.call(i, r)) !== null && o !== void 0 ? o : "1fr"
      ];
    }));
  }
  getColumnWidth(t) {
    var n;
    return (n = this.columnWidths.get(t)) !== null && n !== void 0 ? n : 0;
  }
  getColumnMinWidth(t) {
    var n;
    return (n = this.columnMinWidths.get(t)) !== null && n !== void 0 ? n : 0;
  }
  getColumnMaxWidth(t) {
    var n;
    return (n = this.columnMaxWidths.get(t)) !== null && n !== void 0 ? n : 0;
  }
  resizeColumnWidth(t, n, r, a, i = null, l) {
    let o = this.columnWidths, u = 1 / 0, s = new Map([
      ...r,
      ...a
    ]), d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
    n.columns.forEach((m, v) => {
      var y, $;
      let x, C;
      if (b.set(m.key, this.getDefaultMinWidth(n.columns[v])), i !== m.key && !m.props.width && !Nl(a.get(m.key)) ? (x = m.key, C = Kl(a.get(m.key))) : i !== m.key && !Nl(m.props.width) && !a.get(m.key) ? (x = m.key, C = Kl(m.props.width)) : i !== m.key && (!(($ = m.props.width) === null || $ === void 0 || (y = $.endsWith) === null || y === void 0) && y.call($, "%")) && d.set(m.key, m.props.width), u < v) {
        x && c.set(x, C);
        return;
      }
      if (m.key === i) {
        u = v, s.set(m.key, Math.floor(l));
        return;
      }
      s.set(m.key, o.get(m.key));
    });
    let f = Cs(t, n.columns.map((m) => ({
      ...m.props,
      key: m.key
    })), s, (m) => this.getDefaultWidth(n.columns[m]), (m) => this.getDefaultMinWidth(n.columns[m])), p = /* @__PURE__ */ new Map();
    return f.forEach((m, v) => {
      let y = n.columns[v].key;
      p.set(y, m);
    }), Array.from(c).forEach(([m]) => {
      p.set(m, `${c.get(m)}fr`);
    }), Array.from(d).forEach(([m, v]) => {
      m !== i && p.set(m, v);
    }), p;
  }
  buildColumnWidths(t, n, r) {
    return this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map(), Cs(t, n.columns.map((i) => ({
      ...i.props,
      key: i.key
    })), r, (i) => this.getDefaultWidth(n.columns[i]), (i) => this.getDefaultMinWidth(n.columns[i])).forEach((i, l) => {
      let o = n.columns[l].key, u = n.columns[l];
      this.columnWidths.set(o, i);
      var s;
      this.columnMinWidths.set(o, vh((s = u.props.minWidth) !== null && s !== void 0 ? s : this.getDefaultMinWidth(u), t)), this.columnMaxWidths.set(o, hh(u.props.maxWidth, t));
    }), this.columnWidths;
  }
  constructor(t) {
    this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map();
    var n;
    this.getDefaultWidth = (n = t == null ? void 0 : t.getDefaultWidth) !== null && n !== void 0 ? n : () => "1fr";
    var r;
    this.getDefaultMinWidth = (r = t == null ? void 0 : t.getDefaultMinWidth) !== null && r !== void 0 ? r : () => 75;
  }
}
function $6(e, t) {
  let { getDefaultWidth: n, getDefaultMinWidth: r, tableWidth: a = 0 } = e, [i, l] = Z(null), o = K(() => new g6({
    getDefaultWidth: n,
    getDefaultMinWidth: r
  }), [
    n,
    r
  ]), [u, s] = K(() => o.splitColumnsIntoControlledAndUncontrolled(t.collection.columns), [
    t.collection.columns,
    o
  ]), [d, c] = Z(() => o.getInitialUncontrolledWidths(s)), [b, f] = Z(t.collection.columns);
  if (t.collection.columns !== b) {
    if (t.collection.columns.length !== b.length || t.collection.columns.some(($, x) => $.key !== b[x].key)) {
      let $ = o.getInitialUncontrolledWidths(s);
      c($);
    }
    f(t.collection.columns);
  }
  let p = K(() => o.recombineColumns(t.collection.columns, d, s, u), [
    t.collection.columns,
    d,
    s,
    u,
    o
  ]), m = ee(($) => {
    l($);
  }, [
    l
  ]), v = ee(($, x) => {
    let C = new Map(Array.from(u).map(([R, g]) => [
      R,
      g.props.width
    ])), P = o.resizeColumnWidth(a, t.collection, C, d, $, x), B = new Map(Array.from(s).map(([R]) => [
      R,
      P.get(R)
    ]));
    return B.set($, x), c(B), P;
  }, [
    u,
    s,
    c,
    a,
    o,
    t.collection,
    d
  ]), y = ee(() => {
    l(null);
  }, [
    l
  ]);
  return K(() => o.buildColumnWidths(a, t.collection, p), [
    a,
    t.collection,
    p,
    o
  ]), K(() => ({
    resizingColumn: i,
    updateResizedColumns: v,
    startResize: m,
    endResize: y,
    getColumnWidth: ($) => o.getColumnWidth($),
    getColumnMinWidth: ($) => o.getColumnMinWidth($),
    getColumnMaxWidth: ($) => o.getColumnMaxWidth($),
    tableState: t
  }), [
    o,
    i,
    v,
    m,
    y,
    t
  ]);
}
const gh = "row-header-column-" + Math.random().toString(36).slice(2);
let zl = "row-header-column-" + Math.random().toString(36).slice(2);
for (; gh === zl; )
  zl = "row-header-column-" + Math.random().toString(36).slice(2);
function $h(e, t) {
  if (t.length === 0)
    return [];
  let n = [], r = /* @__PURE__ */ new Map();
  for (let u of t) {
    let s = u.parentKey, d = [
      u
    ];
    for (; s; ) {
      let c = e.get(s);
      if (!c)
        break;
      if (r.has(c)) {
        c.colspan++;
        let { column: b, index: f } = r.get(c);
        if (f > d.length)
          break;
        for (let p = f; p < d.length; p++)
          b.splice(p, 0, null);
        for (let p = d.length; p < b.length; p++)
          b[p] && r.has(b[p]) && (r.get(b[p]).index = p);
      } else
        c.colspan = 1, d.push(c), r.set(c, {
          column: d,
          index: d.length - 1
        });
      s = c.parentKey;
    }
    n.push(d), u.index = n.length - 1;
  }
  let a = Math.max(...n.map((u) => u.length)), i = Array(a).fill(0).map(() => []), l = 0;
  for (let u of n) {
    let s = a - 1;
    for (let d of u) {
      if (d) {
        let c = i[s], b = c.reduce((f, p) => f + p.colspan, 0);
        if (b < l) {
          let f = {
            type: "placeholder",
            key: "placeholder-" + d.key,
            colspan: l - b,
            index: b,
            value: null,
            rendered: null,
            level: s,
            hasChildNodes: !1,
            childNodes: [],
            textValue: null
          };
          c.length > 0 && (c[c.length - 1].nextKey = f.key, f.prevKey = c[c.length - 1].key), c.push(f);
        }
        c.length > 0 && (c[c.length - 1].nextKey = d.key, d.prevKey = c[c.length - 1].key), d.level = s, d.colIndex = l, c.push(d);
      }
      s--;
    }
    l++;
  }
  let o = 0;
  for (let u of i) {
    let s = u.reduce((d, c) => d + c.colspan, 0);
    if (s < t.length) {
      let d = {
        type: "placeholder",
        key: "placeholder-" + u[u.length - 1].key,
        colspan: t.length - s,
        index: s,
        value: null,
        rendered: null,
        level: o,
        hasChildNodes: !1,
        childNodes: [],
        textValue: null,
        prevKey: u[u.length - 1].key
      };
      u.push(d);
    }
    o++;
  }
  return i.map((u, s) => ({
    type: "headerrow",
    key: "headerrow-" + s,
    index: s,
    value: null,
    rendered: null,
    level: 0,
    hasChildNodes: !0,
    childNodes: u,
    textValue: null
  }));
}
class y6 extends h6 {
  *[Symbol.iterator]() {
    yield* this.body.childNodes;
  }
  get size() {
    return this._size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(t) {
    let n = this.keyMap.get(t);
    return n ? n.prevKey : null;
  }
  getKeyAfter(t) {
    let n = this.keyMap.get(t);
    return n ? n.nextKey : null;
  }
  getFirstKey() {
    var t;
    return (t = It(this.body.childNodes)) === null || t === void 0 ? void 0 : t.key;
  }
  getLastKey() {
    var t;
    return (t = Qt(this.body.childNodes)) === null || t === void 0 ? void 0 : t.key;
  }
  getItem(t) {
    return this.keyMap.get(t);
  }
  at(t) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[t]);
  }
  getTextValue(t) {
    let n = this.getItem(t);
    if (!n)
      return "";
    if (n.textValue)
      return n.textValue;
    let r = this.rowHeaderColumnKeys;
    if (r) {
      let a = [];
      for (let i of n.childNodes) {
        let l = this.columns[i.index];
        if (r.has(l.key) && i.textValue && a.push(i.textValue), a.length === r.size)
          break;
      }
      return a.join(" ");
    }
    return "";
  }
  constructor(t, n, r) {
    let a = /* @__PURE__ */ new Set(), i, l = [];
    if (r != null && r.showSelectionCheckboxes) {
      let c = {
        type: "column",
        key: gh,
        value: null,
        textValue: "",
        level: 0,
        index: r != null && r.showDragButtons ? 1 : 0,
        hasChildNodes: !1,
        rendered: null,
        childNodes: [],
        props: {
          isSelectionCell: !0
        }
      };
      l.unshift(c);
    }
    if (r != null && r.showDragButtons) {
      let c = {
        type: "column",
        key: zl,
        value: null,
        textValue: "",
        level: 0,
        index: 0,
        hasChildNodes: !1,
        rendered: null,
        childNodes: [],
        props: {
          isDragButtonCell: !0
        }
      };
      l.unshift(c);
    }
    let o = [], u = /* @__PURE__ */ new Map(), s = (c) => {
      switch (c.type) {
        case "body":
          i = c;
          break;
        case "column":
          u.set(c.key, c), c.hasChildNodes || (l.push(c), c.props.isRowHeader && a.add(c.key));
          break;
        case "item":
          o.push(c);
          return;
      }
      for (let b of c.childNodes)
        s(b);
    };
    for (let c of t)
      s(c);
    let d = $h(u, l);
    d.forEach((c, b) => o.splice(b, 0, c)), super({
      columnCount: l.length,
      items: o,
      visitNode: (c) => (c.column = l[c.index], c)
    }), this._size = 0, this.columns = l, this.rowHeaderColumnKeys = a, this.body = i, this.headerRows = d, this._size = [
      ...i.childNodes
    ].length, this.rowHeaderColumnKeys.size === 0 && this.rowHeaderColumnKeys.add(this.columns.find((c) => {
      var b, f;
      return !(!((b = c.props) === null || b === void 0) && b.isDragButtonCell) && !(!((f = c.props) === null || f === void 0) && f.isSelectionCell);
    }).key);
  }
}
const x6 = {
  ascending: "descending",
  descending: "ascending"
};
function D6(e) {
  let [t, n] = Z(!1), { selectionMode: r = "none", showSelectionCheckboxes: a, showDragButtons: i } = e, l = K(() => ({
    showSelectionCheckboxes: a && r !== "none",
    showDragButtons: i,
    selectionMode: r,
    columns: []
  }), [
    e.children,
    a,
    r,
    i
  ]), o = Do(e, ee((d) => new y6(d, null, l), [
    l
  ]), l), { disabledKeys: u, selectionManager: s } = m6({
    ...e,
    collection: o,
    disabledBehavior: e.disabledBehavior || "selection"
  });
  return {
    collection: o,
    disabledKeys: u,
    selectionManager: s,
    showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
    sortDescriptor: e.sortDescriptor,
    isKeyboardNavigationDisabled: o.size === 0 || t,
    setKeyboardNavigationDisabled: n,
    sort(d, c) {
      var b;
      e.onSortChange({
        column: d,
        direction: c ?? (((b = e.sortDescriptor) === null || b === void 0 ? void 0 : b.column) === d ? x6[e.sortDescriptor.direction] : "ascending")
      });
    }
  };
}
function C6(e) {
  var t;
  let n = Mo({
    ...e,
    suppressTextValueWarning: !0,
    defaultSelectedKey: (t = e.defaultSelectedKey) !== null && t !== void 0 ? t : Es(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set())
  }), { selectionManager: r, collection: a, selectedKey: i } = n, l = I(i);
  return J(() => {
    let o = i;
    (r.isEmpty || !a.getItem(o)) && (o = Es(a, n.disabledKeys), o != null && r.setSelectedKeys([
      o
    ])), (o != null && r.focusedKey == null || !r.isFocused && o !== l.current) && r.setFocusedKey(o), l.current = o;
  }), {
    ...n,
    isDisabled: e.isDisabled || !1
  };
}
function Es(e, t) {
  let n = null;
  if (e) {
    for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey(); )
      n = e.getKeyAfter(n);
    t.has(n) && n === e.getLastKey() && (n = e.getFirstKey());
  }
  return n;
}
const E6 = 1500, Ps = 500;
let sn = {}, P6 = 0, lr = !1, Mt = null, dn = null;
function w6(e = {}) {
  let { delay: t = E6, closeDelay: n = Ps } = e, { isOpen: r, open: a, close: i } = Pn(e), l = K(() => `${++P6}`, []), o = I(), u = () => {
    sn[l] = c;
  }, s = () => {
    for (let f in sn)
      f !== l && (sn[f](!0), delete sn[f]);
  }, d = () => {
    clearTimeout(o.current), o.current = null, s(), u(), lr = !0, a(), Mt && (clearTimeout(Mt), Mt = null), dn && (clearTimeout(dn), dn = null);
  }, c = (f) => {
    f || n <= 0 ? (clearTimeout(o.current), o.current = null, i()) : o.current || (o.current = setTimeout(() => {
      o.current = null, i();
    }, n)), Mt && (clearTimeout(Mt), Mt = null), lr && (dn && clearTimeout(dn), dn = setTimeout(() => {
      delete sn[l], dn = null, lr = !1;
    }, Math.max(Ps, n)));
  }, b = () => {
    s(), u(), !r && !Mt && !lr ? Mt = setTimeout(() => {
      Mt = null, lr = !0, d();
    }, t) : r || d();
  };
  return J(() => () => {
    clearTimeout(o.current), sn[l] && delete sn[l];
  }, [
    l
  ]), {
    isOpen: r,
    open: (f) => {
      !f && t > 0 && !o.current ? b() : d();
    },
    close: c
  };
}
class S6 {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(t) {
    let n = this.keyMap.get(t);
    return n ? n.prevKey : null;
  }
  getKeyAfter(t) {
    let n = this.keyMap.get(t);
    return n ? n.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(t) {
    return this.keyMap.get(t);
  }
  at(t) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[t]);
  }
  constructor(t, { expandedKeys: n } = {}) {
    this.keyMap = /* @__PURE__ */ new Map(), this.iterable = t, n = n || /* @__PURE__ */ new Set();
    let r = (l) => {
      if (this.keyMap.set(l.key, l), l.childNodes && (l.type === "section" || n.has(l.key)))
        for (let o of l.childNodes)
          r(o);
    };
    for (let l of t)
      r(l);
    let a, i = 0;
    for (let [l, o] of this.keyMap)
      a ? (a.nextKey = l, o.prevKey = a.key) : (this.firstKey = l, o.prevKey = void 0), o.type === "item" && (o.index = i++), a = o, a.nextKey = void 0;
    this.lastKey = a == null ? void 0 : a.key;
  }
}
function B6(e) {
  let [t, n] = Ke(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e.onExpandedChange), r = Ao(e), a = K(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), i = Do(e, ee((o) => new S6(o, {
    expandedKeys: t
  }), [
    t
  ]), null);
  return J(() => {
    r.focusedKey != null && !i.getItem(r.focusedKey) && r.setFocusedKey(null);
  }, [
    i,
    r.focusedKey
  ]), {
    collection: i,
    expandedKeys: t,
    disabledKeys: a,
    toggleKey: (o) => {
      n(k6(t, o));
    },
    setExpandedKeys: n,
    selectionManager: new To(i, r)
  };
}
function k6(e, t) {
  let n = new Set(e);
  return n.has(t) ? n.delete(t) : n.add(t), n;
}
var Vl = { exports: {} }, rl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws;
function F6() {
  if (ws)
    return rl;
  ws = 1;
  var e = h;
  function t(c, b) {
    return c === b && (c !== 0 || 1 / c === 1 / b) || c !== c && b !== b;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, a = e.useEffect, i = e.useLayoutEffect, l = e.useDebugValue;
  function o(c, b) {
    var f = b(), p = r({ inst: { value: f, getSnapshot: b } }), m = p[0].inst, v = p[1];
    return i(function() {
      m.value = f, m.getSnapshot = b, u(m) && v({ inst: m });
    }, [c, f, b]), a(function() {
      return u(m) && v({ inst: m }), c(function() {
        u(m) && v({ inst: m });
      });
    }, [c]), l(f), f;
  }
  function u(c) {
    var b = c.getSnapshot;
    c = c.value;
    try {
      var f = b();
      return !n(c, f);
    } catch {
      return !0;
    }
  }
  function s(c, b) {
    return b();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : o;
  return rl.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, rl;
}
var al = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function A6() {
  return Ss || (Ss = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = h, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var C = arguments.length, P = new Array(C > 1 ? C - 1 : 0), B = 1; B < C; B++)
          P[B - 1] = arguments[B];
        r("error", x, P);
      }
    }
    function r(x, C, P) {
      {
        var B = t.ReactDebugCurrentFrame, R = B.getStackAddendum();
        R !== "" && (C += "%s", P = P.concat([R]));
        var g = P.map(function(M) {
          return String(M);
        });
        g.unshift("Warning: " + C), Function.prototype.apply.call(console[x], console, g);
      }
    }
    function a(x, C) {
      return x === C && (x !== 0 || 1 / x === 1 / C) || x !== x && C !== C;
    }
    var i = typeof Object.is == "function" ? Object.is : a, l = e.useState, o = e.useEffect, u = e.useLayoutEffect, s = e.useDebugValue, d = !1, c = !1;
    function b(x, C, P) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var B = C();
      if (!c) {
        var R = C();
        i(B, R) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var g = l({
        inst: {
          value: B,
          getSnapshot: C
        }
      }), M = g[0].inst, F = g[1];
      return u(function() {
        M.value = B, M.getSnapshot = C, f(M) && F({
          inst: M
        });
      }, [x, B, C]), o(function() {
        f(M) && F({
          inst: M
        });
        var E = function() {
          f(M) && F({
            inst: M
          });
        };
        return x(E);
      }, [x]), s(B), B;
    }
    function f(x) {
      var C = x.getSnapshot, P = x.value;
      try {
        var B = C();
        return !i(P, B);
      } catch {
        return !0;
      }
    }
    function p(x, C, P) {
      return C();
    }
    var m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", v = !m, y = v ? p : b, $ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    al.useSyncExternalStore = $, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), al;
}
process.env.NODE_ENV === "production" ? Vl.exports = F6() : Vl.exports = A6();
var T6 = Vl.exports;
function M6(e, t, n, r) {
  Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
}
var R6 = {};
M6(R6, "useToolbar", () => yh);
function yh(e, t) {
  const { "aria-label": n, "aria-labelledby": r, orientation: a = "horizontal" } = e;
  let [i, l] = Z(!1);
  fe(() => {
    var p;
    l(!!(t.current && (!((p = t.current.parentElement) === null || p === void 0) && p.closest('[role="toolbar"]'))));
  });
  const { direction: o } = oe(), u = o === "rtl" && a === "horizontal";
  let s = Lr(t);
  const d = (p) => {
    if (p.currentTarget.contains(p.target)) {
      if (a === "horizontal" && p.key === "ArrowRight" || a === "vertical" && p.key === "ArrowDown")
        u ? s.focusPrevious() : s.focusNext();
      else if (a === "horizontal" && p.key === "ArrowLeft" || a === "vertical" && p.key === "ArrowUp")
        u ? s.focusNext() : s.focusPrevious();
      else if (p.key === "Tab") {
        p.stopPropagation(), c.current = document.activeElement, p.shiftKey ? s.focusFirst() : s.focusLast();
        return;
      } else
        return;
      p.stopPropagation(), p.preventDefault();
    }
  }, c = I(null), b = (p) => {
    !p.currentTarget.contains(p.relatedTarget) && !c.current && (c.current = p.target);
  }, f = (p) => {
    var m;
    if (c.current && !p.currentTarget.contains(p.relatedTarget) && (!((m = t.current) === null || m === void 0) && m.contains(p.target))) {
      var v;
      (v = c.current) === null || v === void 0 || v.focus(), c.current = null;
    }
  };
  return {
    toolbarProps: {
      role: i ? "group" : "toolbar",
      "aria-orientation": a,
      "aria-label": n,
      "aria-labelledby": n == null ? r : void 0,
      onKeyDownCapture: i ? void 0 : d,
      onFocusCapture: i ? void 0 : f,
      onBlurCapture: i ? void 0 : b
    }
  };
}
function xh(e) {
  return e && e.__esModule ? e.default : e;
}
class wr {
  get childNodes() {
    throw new Error("childNodes is not supported");
  }
  clone() {
    let t = new wr(this.type, this.key);
    return t.value = this.value, t.level = this.level, t.hasChildNodes = this.hasChildNodes, t.rendered = this.rendered, t.textValue = this.textValue, t["aria-label"] = this["aria-label"], t.index = this.index, t.parentKey = this.parentKey, t.prevKey = this.prevKey, t.nextKey = this.nextKey, t.firstChildKey = this.firstChildKey, t.lastChildKey = this.lastChildKey, t.props = this.props, t;
  }
  constructor(t, n) {
    this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.type = t, this.key = n;
  }
}
class Dh {
  *[Symbol.iterator]() {
    let t = this.firstChild;
    for (; t; )
      yield t, t = t.nextSibling;
  }
  get firstChild() {
    return this._firstChild;
  }
  set firstChild(t) {
    this._firstChild = t, this.ownerDocument.markDirty(this);
  }
  get lastChild() {
    return this._lastChild;
  }
  set lastChild(t) {
    this._lastChild = t, this.ownerDocument.markDirty(this);
  }
  get previousSibling() {
    return this._previousSibling;
  }
  set previousSibling(t) {
    this._previousSibling = t, this.ownerDocument.markDirty(this);
  }
  get nextSibling() {
    return this._nextSibling;
  }
  set nextSibling(t) {
    this._nextSibling = t, this.ownerDocument.markDirty(this);
  }
  get parentNode() {
    return this._parentNode;
  }
  set parentNode(t) {
    this._parentNode = t, this.ownerDocument.markDirty(this);
  }
  get isConnected() {
    var t;
    return ((t = this.parentNode) === null || t === void 0 ? void 0 : t.isConnected) || !1;
  }
  appendChild(t) {
    this.ownerDocument.startTransaction(), t.parentNode && t.parentNode.removeChild(t), this.firstChild == null && (this.firstChild = t), this.lastChild ? (this.lastChild.nextSibling = t, t.index = this.lastChild.index + 1, t.previousSibling = this.lastChild) : (t.previousSibling = null, t.index = 0), t.parentNode = this, t.nextSibling = null, this.lastChild = t, this.ownerDocument.markDirty(this), t.hasSetProps && this.ownerDocument.addNode(t), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
  }
  insertBefore(t, n) {
    if (n == null)
      return this.appendChild(t);
    this.ownerDocument.startTransaction(), t.parentNode && t.parentNode.removeChild(t), t.nextSibling = n, t.previousSibling = n.previousSibling, t.index = n.index, this.firstChild === n ? this.firstChild = t : n.previousSibling && (n.previousSibling.nextSibling = t), n.previousSibling = t, t.parentNode = n.parentNode;
    let r = n;
    for (; r; )
      r.index++, r = r.nextSibling;
    t.hasSetProps && this.ownerDocument.addNode(t), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
  }
  removeChild(t) {
    if (t.parentNode !== this)
      return;
    this.ownerDocument.startTransaction();
    let n = t.nextSibling;
    for (; n; )
      n.index--, n = n.nextSibling;
    t.nextSibling && (t.nextSibling.previousSibling = t.previousSibling), t.previousSibling && (t.previousSibling.nextSibling = t.nextSibling), this.firstChild === t && (this.firstChild = t.nextSibling), this.lastChild === t && (this.lastChild = t.previousSibling), t.parentNode = null, t.nextSibling = null, t.previousSibling = null, t.index = 0, this.ownerDocument.removeNode(t), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  constructor(t) {
    this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this.ownerDocument = t;
  }
}
class Sr extends Dh {
  get index() {
    return this._index;
  }
  set index(t) {
    this._index = t, this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof Sr ? this.parentNode.level + (this.node.type === "item" ? 1 : 0) : 0;
  }
  updateNode() {
    var t, n, r, a;
    let i = this.ownerDocument.getMutableNode(this);
    i.index = this.index, i.level = this.level, i.parentKey = this.parentNode instanceof Sr ? this.parentNode.node.key : null;
    var l;
    i.prevKey = (l = (t = this.previousSibling) === null || t === void 0 ? void 0 : t.node.key) !== null && l !== void 0 ? l : null;
    var o;
    i.nextKey = (o = (n = this.nextSibling) === null || n === void 0 ? void 0 : n.node.key) !== null && o !== void 0 ? o : null, i.hasChildNodes = !!this.firstChild;
    var u;
    i.firstChildKey = (u = (r = this.firstChild) === null || r === void 0 ? void 0 : r.node.key) !== null && u !== void 0 ? u : null;
    var s;
    i.lastChildKey = (s = (a = this.lastChild) === null || a === void 0 ? void 0 : a.node.key) !== null && s !== void 0 ? s : null;
  }
  setProps(t, n, r) {
    let a = this.ownerDocument.getMutableNode(this), { value: i, textValue: l, id: o, ...u } = t;
    if (u.ref = n, a.props = u, a.rendered = r, a.value = i, a.textValue = l || (typeof r == "string" ? r : "") || t["aria-label"] || "", o != null && o !== a.key) {
      if (this.hasSetProps)
        throw new Error("Cannot change the id of an item");
      a.key = o;
    }
    this.hasSetProps || (this.ownerDocument.addNode(this), this.ownerDocument.endTransaction(), this.hasSetProps = !0), this.ownerDocument.queueUpdate();
  }
  get style() {
    return {};
  }
  hasAttribute() {
  }
  setAttribute() {
  }
  setAttributeNS() {
  }
  removeAttribute() {
  }
  constructor(t, n) {
    super(n), this.nodeType = 8, this._index = 0, this.hasSetProps = !1, this.node = new wr(t, `react-aria-${++n.nodeId}`), this.ownerDocument.startTransaction();
  }
}
class Ch {
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  *[Symbol.iterator]() {
    let t = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
    for (; t; )
      yield t, t = t.nextKey != null ? this.keyMap.get(t.nextKey) : void 0;
  }
  getChildren(t) {
    let n = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let r = n.get(t), a = (r == null ? void 0 : r.firstChildKey) != null ? n.get(r.firstChildKey) : null;
        for (; a; )
          yield a, a = a.nextKey != null ? n.get(a.nextKey) : void 0;
      }
    };
  }
  getKeyBefore(t) {
    let n = this.keyMap.get(t);
    if (!n)
      return null;
    if (n.prevKey != null) {
      for (n = this.keyMap.get(n.prevKey); n && n.type !== "item" && n.lastChildKey != null; )
        n = this.keyMap.get(n.lastChildKey);
      var r;
      return (r = n == null ? void 0 : n.key) !== null && r !== void 0 ? r : null;
    }
    return n.parentKey;
  }
  getKeyAfter(t) {
    let n = this.keyMap.get(t);
    if (!n)
      return null;
    if (n.type !== "item" && n.firstChildKey != null)
      return n.firstChildKey;
    for (; n; ) {
      if (n.nextKey != null)
        return n.nextKey;
      if (n.parentKey != null)
        n = this.keyMap.get(n.parentKey);
      else
        return null;
    }
    return null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    let t = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
    for (; (t == null ? void 0 : t.lastChildKey) != null; )
      t = this.keyMap.get(t.lastChildKey);
    var n;
    return (n = t == null ? void 0 : t.key) !== null && n !== void 0 ? n : null;
  }
  getItem(t) {
    var n;
    return (n = this.keyMap.get(t)) !== null && n !== void 0 ? n : null;
  }
  at() {
    throw new Error("Not implemented");
  }
  clone() {
    let t = this.constructor, n = new t();
    return n.keyMap = new Map(this.keyMap), n.firstKey = this.firstKey, n.lastKey = this.lastKey, n;
  }
  addNode(t) {
    if (this.frozen)
      throw new Error("Cannot add a node to a frozen collection");
    this.keyMap.set(t.key, t);
  }
  removeNode(t) {
    if (this.frozen)
      throw new Error("Cannot remove a node to a frozen collection");
    this.keyMap.delete(t);
  }
  commit(t, n, r = !1) {
    if (this.frozen)
      throw new Error("Cannot commit a frozen collection");
    this.firstKey = t, this.lastKey = n, this.frozen = !r;
  }
  constructor() {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.frozen = !1;
  }
}
class I6 extends Dh {
  get isConnected() {
    return !0;
  }
  createElement(t) {
    return new Sr(t, this);
  }
  /**
  * Lazily gets a mutable instance of a Node. If the node has already
  * been cloned during this update cycle, it just returns the existing one.
  */
  getMutableNode(t) {
    let n = t.node;
    return this.mutatedNodes.has(t) || (n = t.node.clone(), this.mutatedNodes.add(t), t.node = n), this.markDirty(t), n;
  }
  getMutableCollection() {
    return !this.isSSR && !this.collectionMutated && (this.collection = this.collection.clone(), this.collectionMutated = !0), this.collection;
  }
  markDirty(t) {
    this.dirtyNodes.add(t);
  }
  startTransaction() {
    this.transactionCount++;
  }
  endTransaction() {
    this.transactionCount--;
  }
  addNode(t) {
    let n = this.getMutableCollection();
    if (!n.getItem(t.node.key)) {
      n.addNode(t.node);
      for (let r of t)
        this.addNode(r);
    }
    this.markDirty(t);
  }
  removeNode(t) {
    for (let r of t)
      this.removeNode(r);
    this.getMutableCollection().removeNode(t.node.key), this.markDirty(t);
  }
  /** Finalizes the collection update, updating all nodes and freezing the collection. */
  getCollection() {
    return this.transactionCount > 0 ? this.collection : (this.updateCollection(), this.collection);
  }
  updateCollection() {
    for (let i of this.dirtyNodes)
      i instanceof Sr && i.isConnected && i.updateNode();
    if (this.dirtyNodes.clear(), this.mutatedNodes.size || this.collectionMutated) {
      var t, n;
      let i = this.getMutableCollection();
      for (let l of this.mutatedNodes)
        l.isConnected && i.addNode(l.node);
      var r, a;
      i.commit((r = (t = this.firstChild) === null || t === void 0 ? void 0 : t.node.key) !== null && r !== void 0 ? r : null, (a = (n = this.lastChild) === null || n === void 0 ? void 0 : n.node.key) !== null && a !== void 0 ? a : null, this.isSSR), this.mutatedNodes.clear();
    }
    this.collectionMutated = !1;
  }
  queueUpdate() {
    if (!(this.dirtyNodes.size === 0 || this.transactionCount > 0))
      for (let t of this.subscriptions)
        t();
  }
  subscribe(t) {
    return this.subscriptions.add(t), () => this.subscriptions.delete(t);
  }
  resetAfterSSR() {
    this.isSSR && (this.isSSR = !1, this.firstChild = null, this.lastChild = null, this.nodeId = 0);
  }
  constructor(t) {
    super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = !1, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.mutatedNodes = /* @__PURE__ */ new Set(), this.subscriptions = /* @__PURE__ */ new Set(), this.transactionCount = 0, this.collection = t, this.collectionMutated = !0;
  }
}
function bt(e) {
  let { children: t, items: n, idScope: r, addIdAndValue: a, dependencies: i = [] } = e, l = K(() => /* @__PURE__ */ new WeakMap(), i);
  return K(() => {
    if (n && typeof t == "function") {
      let s = [];
      for (let d of n) {
        let c = l.get(d);
        if (!c) {
          c = t(d);
          var o, u;
          let b = (u = (o = c.props.id) !== null && o !== void 0 ? o : d.key) !== null && u !== void 0 ? u : d.id;
          if (b == null)
            throw new Error("Could not determine key for item");
          r && (b = r + ":" + b), c = /* @__PURE__ */ Ls(c, a ? {
            key: b,
            id: b,
            value: d
          } : {
            key: b
          }), l.set(d, c);
        }
        s.push(c);
      }
      return s;
    } else if (typeof t != "function")
      return t;
  }, [
    t,
    n,
    l,
    r,
    a
  ]);
}
function Zr(e) {
  return bt({
    ...e,
    addIdAndValue: !0
  });
}
const Eh = /* @__PURE__ */ W(!1);
function qr(e, t) {
  let { collection: n, document: r } = Yr(t);
  return {
    portal: Ko(e, r),
    collection: n
  };
}
function N6(e, t, n) {
  let r = Bt(), a = I(r);
  a.current = r;
  let i = ee(() => a.current ? n() : t(), [
    t,
    n
  ]);
  return T6.useSyncExternalStore(e, i);
}
const K6 = typeof h.useSyncExternalStore == "function" ? h.useSyncExternalStore : N6;
function Yr(e) {
  let t = K(() => new I6(e || new Ch()), [
    e
  ]), n = ee((l) => t.subscribe(l), [
    t
  ]), r = ee(() => {
    let l = t.getCollection();
    return t.isSSR && t.resetAfterSSR(), l;
  }, [
    t
  ]), a = ee(() => (t.isSSR = !0, t.getCollection()), [
    t
  ]);
  return {
    collection: K6(n, r, a),
    document: t
  };
}
const Ll = /* @__PURE__ */ W(null), wn = /* @__PURE__ */ W(null);
function Ko(e, t) {
  let n = U(wn), r = t ?? n, a = Zr(e), i = K(() => /* @__PURE__ */ h.createElement(Eh.Provider, {
    value: !0
  }, a), [
    a
  ]);
  return Bt() ? /* @__PURE__ */ h.createElement(Ll.Provider, {
    value: r
  }, i) : /* @__PURE__ */ ug(i, r);
}
function Ph(e) {
  return /* @__PURE__ */ h.createElement(h.Fragment, null, Ko(e));
}
function wh(e, t, n) {
  let r = U(Eh);
  var a;
  return r ? (a = pt(e, t, n, "children" in t ? t.children : null)) !== null && a !== void 0 ? a : /* @__PURE__ */ h.createElement(h.Fragment, null) : null;
}
function z6(e, t, n) {
  return ee((r) => {
    r == null || r.setProps(e, t, n);
  }, [
    e,
    t,
    n
  ]);
}
function pt(e, t, n, r, a) {
  let i = z6(t, n, r), l = U(Ll);
  if (l) {
    let o = l.ownerDocument.nodesByProps.get(t);
    return o || (o = l.ownerDocument.createElement(e), o.setProps(t, n, r), l.appendChild(o), l.ownerDocument.updateCollection(), l.ownerDocument.nodesByProps.set(t, o)), a ? /* @__PURE__ */ h.createElement(Ll.Provider, {
      value: o
    }, a) : null;
  }
  return /* @__PURE__ */ h.createElement(e, {
    ref: i
  }, a);
}
function V6(e, t) {
  let n = Zr(e);
  return pt("section", e, t, null, n);
}
const L6 = /* @__PURE__ */ q(V6), Sh = /* @__PURE__ */ W(null), Bh = /* @__PURE__ */ W(null);
function zo(e) {
  let t = U(Sh);
  e = j(t, e), e.dependencies = ((t == null ? void 0 : t.dependencies) || []).concat(e.dependencies);
  let n = typeof e.children == "function" ? e.children : null;
  return /* @__PURE__ */ h.createElement(Bh.Provider, {
    value: n
  }, Zr(e));
}
const O6 = Symbol("callback"), Br = Symbol("default");
function de({ values: e, children: t }) {
  for (let [n, r] of e)
    t = /* @__PURE__ */ h.createElement(n.Provider, {
      value: r
    }, t);
  return t;
}
function te(e) {
  let { className: t, style: n, children: r, defaultClassName: a, defaultChildren: i, values: l } = e;
  return K(() => {
    let o, u, s;
    return typeof t == "function" ? o = t(l) : o = t, typeof n == "function" ? u = n(l) : u = n, typeof r == "function" ? s = r(l) : r == null ? s = i : s = r, {
      className: o ?? a,
      style: u,
      children: s,
      "data-rac": ""
    };
  }, [
    t,
    n,
    r,
    a,
    i,
    l
  ]);
}
function me(e, t) {
  return (n) => t(typeof e == "function" ? e(n) : e, n);
}
function Jr(e, t) {
  let n = U(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = new Intl.ListFormat().format(Object.keys(n.slots).map((i) => `"${i}"`));
    if (!t && !n.slots[Br])
      throw new Error(`A slot prop is required. Valid slot names are ${r}.`);
    let a = t || Br;
    if (!n.slots[a])
      throw new Error(`Invalid slot "${t}". Valid slot names are ${r}.`);
    return n.slots[a];
  }
  return n;
}
function ne(e, t, n) {
  let r = Jr(n, e.slot) || {}, { ref: a, [O6]: i, ...l } = r, o = Me(K(() => Ya(t, a), [
    t,
    a
  ])), u = j(l, e);
  return "style" in l && l.style && typeof l.style == "object" && "style" in e && e.style && typeof e.style == "object" && (u.style = {
    ...l.style,
    ...e.style
  }), J(() => {
    i && i(e);
  }, [
    i,
    e
  ]), [
    u,
    o
  ];
}
function Ve() {
  let [e, t] = Z(!0), n = I(!1), r = ee((a) => {
    n.current = !0, t(!!a);
  }, []);
  return fe(() => {
    n.current || t(!1);
  }, []), [
    r,
    e
  ];
}
function mi(e, t = !0) {
  let [n, r] = Z(!0);
  return kh(e, n && t, ee(() => r(!1), [])), n && t;
}
function Za(e, t) {
  let [n, r] = Z(!1), [a, i] = Z("idle");
  return !t && e.current && a === "idle" && (n = !0, r(!0), i("exiting")), !e.current && a === "exited" && i("idle"), kh(e, n, ee(() => {
    i("exited"), r(!1);
  }, [])), n;
}
function kh(e, t, n) {
  let r = I(null);
  t && e.current && (r.current = window.getComputedStyle(e.current).animation), fe(() => {
    if (t && e.current) {
      let a = window.getComputedStyle(e.current);
      if (a.animationName && a.animationName !== "none" && a.animation !== r.current) {
        let i = (o) => {
          o.target === e.current && (l.removeEventListener("animationend", i), Rr.flushSync(() => {
            n();
          }));
        }, l = e.current;
        return l.addEventListener("animationend", i), () => {
          l.removeEventListener("animationend", i);
        };
      } else
        n();
    }
  }, [
    e,
    t,
    n
  ]);
}
if (typeof HTMLTemplateElement < "u") {
  const e = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
  Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.dataset.reactAriaHidden ? this.content.firstChild : e.call(this);
    }
  });
}
const kr = /* @__PURE__ */ W(!1), j6 = typeof DocumentFragment < "u" ? new DocumentFragment() : null;
function Vo(e) {
  let t = U(kr), n = Bt();
  if (t)
    return /* @__PURE__ */ h.createElement(h.Fragment, null, e.children);
  let r = /* @__PURE__ */ h.createElement(kr.Provider, {
    value: !0
  }, e.children);
  return n ? /* @__PURE__ */ h.createElement("template", {
    "data-react-aria-hidden": !0
  }, r) : /* @__PURE__ */ Rr.createPortal(r, j6);
}
function hi(e) {
  let t = (n, r) => U(kr) ? null : e(n, r);
  return t.displayName = e.displayName || e.name, h.forwardRef(t);
}
function ct(e) {
  const t = /^(data-.*)$/;
  let n = {};
  for (const r in e)
    t.test(r) || (n[r] = e[r]);
  return n;
}
const Fh = /* @__PURE__ */ W(null);
function H6(e, t) {
  [e, t] = ne(e, t, Fh);
  let n = e.href ? "a" : "span", { linkProps: r, isPressed: a } = B$({
    ...e,
    elementType: n
  }, t), { hoverProps: i, isHovered: l } = xe(e), { focusProps: o, isFocused: u, isFocusVisible: s } = pe(), d = te({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: a,
      isHovered: l,
      isFocused: u,
      isFocusVisible: s
    }
  });
  return /* @__PURE__ */ h.createElement(n, {
    ref: t,
    slot: e.slot || void 0,
    ...j(d, r, i, o),
    "data-focused": u || void 0,
    "data-hovered": l || void 0,
    "data-pressed": a || void 0,
    "data-focus-visible": s || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, d.children);
}
const _6 = /* @__PURE__ */ q(H6), U6 = /* @__PURE__ */ W(null);
function W6(e, t) {
  [e, t] = ne(e, t, U6);
  let { portal: n, collection: r } = qr(e);
  return /* @__PURE__ */ h.createElement(h.Fragment, null, n, /* @__PURE__ */ h.createElement(G6, {
    props: e,
    collection: r,
    breadcrumbsRef: t
  }));
}
function G6({ props: e, collection: t, breadcrumbsRef: n }) {
  var r;
  return /* @__PURE__ */ h.createElement("ol", {
    ref: n,
    ...Y(e, {
      labelable: !0
    }),
    slot: e.slot || void 0,
    style: e.style,
    className: (r = e.className) !== null && r !== void 0 ? r : "react-aria-Breadcrumbs"
  }, [
    ...t
  ].map((a, i) => /* @__PURE__ */ h.createElement(J6, {
    key: a.key,
    node: a,
    isCurrent: i === t.size - 1,
    isDisabled: e.isDisabled,
    onAction: e.onAction
  })));
}
const Z6 = /* @__PURE__ */ q(W6);
function q6(e, t) {
  return pt("item", e, t, e.children);
}
const Y6 = /* @__PURE__ */ q(q6);
function J6({ node: e, isCurrent: t, isDisabled: n, onAction: r }) {
  let a = {
    "aria-current": t ? "page" : null,
    isDisabled: n || t,
    onPress: () => r == null ? void 0 : r(e.key)
  };
  var i;
  return /* @__PURE__ */ h.createElement("li", {
    ...Y(e.props),
    ref: e.props.ref,
    style: e.props.style,
    className: (i = e.props.className) !== null && i !== void 0 ? i : "react-aria-Breadcrumb"
  }, /* @__PURE__ */ h.createElement(Fh.Provider, {
    value: a
  }, e.rendered));
}
const X6 = /* @__PURE__ */ new Set([
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "name",
  "value"
]), mt = /* @__PURE__ */ W({});
function Q6(e, t) {
  [e, t] = ne(e, t, mt);
  let n = e, { buttonProps: r, isPressed: a } = Vd(e, t), { focusProps: i, isFocused: l, isFocusVisible: o } = pe(e), { hoverProps: u, isHovered: s } = xe(e), d = te({
    ...e,
    values: {
      isHovered: s,
      isPressed: a,
      isFocused: l,
      isFocusVisible: o,
      isDisabled: e.isDisabled || !1
    },
    defaultClassName: "react-aria-Button"
  });
  return /* @__PURE__ */ h.createElement("button", {
    ...Y(e, {
      propNames: X6
    }),
    ...j(r, i, u),
    ...d,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-pressed": n.isPressed || a || void 0,
    "data-hovered": s || void 0,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0
  });
}
const Jn = /* @__PURE__ */ hi(Q6), vi = /* @__PURE__ */ W({});
function ex(e, t) {
  [e, t] = ne(e, t, vi);
  let { children: n, level: r = 3, className: a, ...i } = e, l = `h${r}`;
  return /* @__PURE__ */ h.createElement(l, {
    ...i,
    ref: t,
    className: a ?? "react-aria-Heading"
  }, n);
}
const Ah = /* @__PURE__ */ q(ex), Re = /* @__PURE__ */ W({});
function tx(e, t) {
  [e, t] = ne(e, t, Re);
  let { elementType: n = "span", ...r } = e;
  return /* @__PURE__ */ h.createElement(n, {
    className: "react-aria-Text",
    ...r,
    ref: t
  });
}
const Xr = /* @__PURE__ */ q(tx), Th = /* @__PURE__ */ W({}), Mh = /* @__PURE__ */ W({}), gi = /* @__PURE__ */ W(null), $i = /* @__PURE__ */ W(null);
function nx(e, t) {
  [e, t] = ne(e, t, Th);
  let { locale: n } = oe(), r = F3({
    ...e,
    locale: n,
    createCalendar: ai
  }), { calendarProps: a, prevButtonProps: i, nextButtonProps: l, errorMessageProps: o, title: u } = q1(e, r), s = te({
    ...e,
    values: {
      state: r,
      isDisabled: e.isDisabled || !1,
      isInvalid: r.isValueInvalid
    },
    defaultClassName: "react-aria-Calendar"
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...s,
    ...a,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": r.isValueInvalid || void 0
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        mt,
        {
          slots: {
            previous: i,
            next: l
          }
        }
      ],
      [
        vi,
        {
          "aria-hidden": !0,
          level: 2,
          children: u
        }
      ],
      [
        gi,
        r
      ],
      [
        Re,
        {
          slots: {
            errorMessage: o
          }
        }
      ]
    ]
  }, /* @__PURE__ */ h.createElement(nn, null, /* @__PURE__ */ h.createElement("h2", null, a["aria-label"])), s.children, /* @__PURE__ */ h.createElement(nn, null, /* @__PURE__ */ h.createElement("button", {
    "aria-label": l["aria-label"],
    disabled: l.isDisabled,
    onClick: () => r.focusNextPage(),
    tabIndex: -1
  }))));
}
const rx = /* @__PURE__ */ q(nx);
function ax(e, t) {
  [e, t] = ne(e, t, Mh);
  let { locale: n } = oe(), r = L5({
    ...e,
    locale: n,
    createCalendar: ai
  }), { calendarProps: a, prevButtonProps: i, nextButtonProps: l, errorMessageProps: o, title: u } = Y1(e, r, t), s = te({
    ...e,
    values: {
      state: r,
      isDisabled: e.isDisabled || !1,
      isInvalid: r.isValueInvalid
    },
    defaultClassName: "react-aria-RangeCalendar"
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...s,
    ...a,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": r.isValueInvalid || void 0
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        mt,
        {
          slots: {
            previous: i,
            next: l
          }
        }
      ],
      [
        vi,
        {
          "aria-hidden": !0,
          level: 2,
          children: u
        }
      ],
      [
        $i,
        r
      ],
      [
        Re,
        {
          slots: {
            errorMessage: o
          }
        }
      ]
    ]
  }, /* @__PURE__ */ h.createElement(nn, null, /* @__PURE__ */ h.createElement("h2", null, a["aria-label"])), s.children, /* @__PURE__ */ h.createElement(nn, null, /* @__PURE__ */ h.createElement("button", {
    "aria-label": l["aria-label"],
    disabled: l.isDisabled,
    onClick: () => r.focusNextPage(),
    tabIndex: -1
  }))));
}
const ix = /* @__PURE__ */ q(ax), yi = /* @__PURE__ */ W(null);
function lx(e, t) {
  let n = U(gi), r = U($i), a = n ?? r, i = a.visibleRange.start;
  e.offset && (i = i.add(e.offset));
  let { gridProps: l, headerProps: o, weekDays: u } = J1({
    startDate: i,
    endDate: Ia(i),
    weekdayStyle: e.weekdayStyle
  }, a);
  var s;
  return /* @__PURE__ */ h.createElement(yi.Provider, {
    value: {
      headerProps: o,
      weekDays: u,
      startDate: i
    }
  }, /* @__PURE__ */ h.createElement("table", {
    ...Y(e),
    ...l,
    ref: t,
    style: e.style,
    className: (s = e.className) !== null && s !== void 0 ? s : "react-aria-CalendarGrid"
  }, typeof e.children != "function" ? e.children : /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Ih, null, (d) => /* @__PURE__ */ h.createElement(Nh, null, d)), /* @__PURE__ */ h.createElement(Lo, null, e.children))));
}
const Rh = /* @__PURE__ */ q(lx);
function ox(e, t) {
  let { children: n, style: r, className: a } = e, { headerProps: i, weekDays: l } = U(yi);
  return /* @__PURE__ */ h.createElement("thead", {
    ...Y(e),
    ...i,
    ref: t,
    style: r,
    className: a || "react-aria-CalendarGridHeader"
  }, /* @__PURE__ */ h.createElement("tr", null, l.map((o, u) => /* @__PURE__ */ h.cloneElement(n(o), {
    key: u
  }))));
}
const Ih = /* @__PURE__ */ q(ox);
function ux(e, t) {
  let { children: n, style: r, className: a } = e;
  return /* @__PURE__ */ h.createElement("th", {
    ...Y(e),
    ref: t,
    style: r,
    className: a || "react-aria-CalendarHeaderCell"
  }, n);
}
const Nh = /* @__PURE__ */ q(ux);
function sx(e, t) {
  let { children: n, style: r, className: a } = e, i = U(gi), l = U($i), o = i ?? l, { startDate: u } = U(yi), { locale: s } = oe(), d = H$(u, s);
  return /* @__PURE__ */ h.createElement("tbody", {
    ...Y(e),
    ref: t,
    style: r,
    className: a || "react-aria-CalendarGridBody"
  }, [
    ...new Array(d).keys()
  ].map((c) => /* @__PURE__ */ h.createElement("tr", {
    key: c
  }, o.getDatesInWeek(c, u).map((b, f) => b ? /* @__PURE__ */ h.cloneElement(n(b), {
    key: f
  }) : /* @__PURE__ */ h.createElement("td", {
    key: f
  })))));
}
const Lo = /* @__PURE__ */ q(sx);
function dx({ date: e, ...t }, n) {
  let r = U(gi), a = U($i), i = r ?? a;
  var l;
  let { startDate: o } = (l = U(yi)) !== null && l !== void 0 ? l : {
    startDate: i.visibleRange.start
  }, u = I(null), { cellProps: s, buttonProps: d, ...c } = X1({
    date: e
  }, i, u), { hoverProps: b, isHovered: f } = xe({
    ...t,
    isDisabled: c.isDisabled
  }), { focusProps: p, isFocusVisible: m } = pe();
  m && (m = c.isFocused);
  let v = !I$(o, e), y = !1, $ = !1;
  "highlightedRange" in i && i.highlightedRange && (y = Ae(e, i.highlightedRange.start), $ = Ae(e, i.highlightedRange.end));
  let x = te({
    ...t,
    defaultChildren: c.formattedDate,
    defaultClassName: "react-aria-CalendarCell",
    values: {
      date: e,
      isHovered: f,
      isOutsideMonth: v,
      isFocusVisible: m,
      isSelectionStart: y,
      isSelectionEnd: $,
      ...c
    }
  }), C = {
    "data-focused": c.isFocused || void 0,
    "data-hovered": f || void 0,
    "data-pressed": c.isPressed || void 0,
    "data-unavailable": c.isUnavailable || void 0,
    "data-disabled": c.isDisabled || void 0,
    "data-focus-visible": m || void 0,
    "data-outside-visible-range": c.isOutsideVisibleRange || void 0,
    "data-outside-month": v || void 0,
    "data-selected": c.isSelected || void 0,
    "data-selection-start": y || void 0,
    "data-selection-end": $ || void 0,
    "data-invalid": c.isInvalid || void 0
  };
  return /* @__PURE__ */ h.createElement("td", {
    ...s,
    ref: n
  }, /* @__PURE__ */ h.createElement("div", {
    ...j(Y(t), d, p, b, C, x),
    ref: u
  }));
}
const Kh = /* @__PURE__ */ q(dx), et = /* @__PURE__ */ W(null);
function cx(e, t) {
  let n = U(et);
  return n != null && n.isInvalid ? /* @__PURE__ */ h.createElement(bx, {
    ...e,
    ref: t
  }) : null;
}
const fx = /* @__PURE__ */ q(cx), bx = /* @__PURE__ */ q((e, t) => {
  let n = U(et), r = te({
    ...e,
    defaultClassName: "react-aria-FieldError",
    defaultChildren: n.validationErrors.join(" "),
    values: n
  });
  return /* @__PURE__ */ h.createElement(Xr, {
    slot: "errorMessage",
    ...r,
    ref: t
  });
}), Le = /* @__PURE__ */ W({});
function px(e, t) {
  [e, t] = ne(e, t, Le);
  let { elementType: n = "label", ...r } = e;
  return /* @__PURE__ */ h.createElement(n, {
    className: "react-aria-Label",
    ...r,
    ref: t
  });
}
const mx = /* @__PURE__ */ hi(px), hx = /* @__PURE__ */ W(null), zh = /* @__PURE__ */ W(null);
function vx(e, t) {
  [e, t] = ne(e, t, hx);
  var n;
  let r = O5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), [a, i] = Ve();
  var l;
  let { groupProps: o, labelProps: u, descriptionProps: s, errorMessageProps: d, ...c } = ay({
    ...e,
    label: i,
    validationBehavior: (l = e.validationBehavior) !== null && l !== void 0 ? l : "native"
  }, r), b = te({
    ...e,
    values: {
      isDisabled: r.isDisabled,
      isReadOnly: r.isReadOnly,
      isRequired: e.isRequired || !1,
      isInvalid: r.isInvalid,
      state: r
    },
    defaultClassName: "react-aria-CheckboxGroup"
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...o,
    ...b,
    ref: t,
    slot: e.slot || void 0,
    "data-readonly": r.isReadOnly || void 0,
    "data-required": e.isRequired || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-disabled": e.isDisabled || void 0
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        zh,
        r
      ],
      [
        Le,
        {
          ...u,
          ref: a,
          elementType: "span"
        }
      ],
      [
        Re,
        {
          slots: {
            description: s,
            errorMessage: d
          }
        }
      ],
      [
        et,
        c
      ]
    ]
  }, b.children));
}
const xi = /* @__PURE__ */ W(null);
function gx(e, t) {
  [e, t] = ne(e, t, xi);
  let n = I(null), r = U(zh);
  var a;
  let { labelProps: i, inputProps: l, isSelected: o, isDisabled: u, isReadOnly: s, isPressed: d, isInvalid: c } = r ? iy({
    ...e,
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: e.value,
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, r, n) : Pc({
    ...e,
    children: typeof e.children == "function" ? !0 : e.children,
    validationBehavior: (a = e.validationBehavior) !== null && a !== void 0 ? a : "native"
  }, oi(e), n), { isFocused: b, isFocusVisible: f, focusProps: p } = pe(), m = u || s, { hoverProps: v, isHovered: y } = xe({
    ...e,
    isDisabled: m
  }), $ = te({
    // TODO: should data attrs go on the label or on the <input>? useCheckbox passes them to the input...
    ...e,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: o,
      isIndeterminate: e.isIndeterminate || !1,
      isPressed: d,
      isHovered: y,
      isFocused: b,
      isFocusVisible: f,
      isDisabled: u,
      isReadOnly: s,
      isInvalid: c,
      isRequired: e.isRequired || !1
    }
  }), x = Y(e);
  return delete x.id, /* @__PURE__ */ h.createElement("label", {
    ...j(x, i, v, $),
    ref: t,
    slot: e.slot || void 0,
    "data-selected": o || void 0,
    "data-indeterminate": e.isIndeterminate || void 0,
    "data-pressed": d || void 0,
    "data-hovered": y || void 0,
    "data-focused": b || void 0,
    "data-focus-visible": f || void 0,
    "data-disabled": u || void 0,
    "data-readonly": s || void 0,
    "data-invalid": c || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ h.createElement(nn, {
    elementType: "span"
  }, /* @__PURE__ */ h.createElement("input", {
    ...j(l, p),
    ref: n
  })), $.children);
}
const $x = /* @__PURE__ */ q(gx), yx = /* @__PURE__ */ q(vx), Ut = /* @__PURE__ */ W({});
function xx(e, t) {
  [e, t] = ne(e, t, Ut);
  let { isDisabled: n, isInvalid: r, onHoverStart: a, onHoverChange: i, onHoverEnd: l, ...o } = e, { hoverProps: u, isHovered: s } = xe({
    onHoverStart: a,
    onHoverChange: i,
    onHoverEnd: l,
    isDisabled: n
  }), { isFocused: d, isFocusVisible: c, focusProps: b } = pe({
    within: !0
  });
  n ?? (n = !!e["aria-disabled"] && e["aria-disabled"] !== "false"), r ?? (r = !!e["aria-invalid"] && e["aria-invalid"] !== "false");
  let f = te({
    ...e,
    values: {
      isHovered: s,
      isFocusWithin: d,
      isFocusVisible: c,
      isDisabled: n,
      isInvalid: r
    },
    defaultClassName: "react-aria-Group"
  });
  var p, m;
  return /* @__PURE__ */ h.createElement("div", {
    ...j(o, b, u),
    ...f,
    ref: t,
    role: (p = e.role) !== null && p !== void 0 ? p : "group",
    slot: (m = e.slot) !== null && m !== void 0 ? m : void 0,
    "data-focus-within": d || void 0,
    "data-hovered": s || void 0,
    "data-focus-visible": c || void 0,
    "data-disabled": n || void 0,
    "data-invalid": r || void 0
  }, f.children);
}
const Oo = /* @__PURE__ */ q(xx), ln = /* @__PURE__ */ W({});
let Dx = (e) => {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...a } = e;
  return a;
};
function Cx(e, t) {
  [e, t] = ne(e, t, ln);
  let { hoverProps: n, isHovered: r } = xe(e), { isFocused: a, isFocusVisible: i, focusProps: l } = pe({
    isTextInput: !0,
    autoFocus: e.autoFocus
  }), o = !!e["aria-invalid"] && e["aria-invalid"] !== "false", u = te({
    ...e,
    values: {
      isHovered: r,
      isFocused: a,
      isFocusVisible: i,
      isDisabled: e.disabled || !1,
      isInvalid: o
    },
    defaultClassName: "react-aria-Input"
  });
  return /* @__PURE__ */ h.createElement("input", {
    ...j(Dx(e), l, n),
    ...u,
    ref: t,
    "data-focused": a || void 0,
    "data-disabled": e.disabled || void 0,
    "data-hovered": r || void 0,
    "data-focus-visible": i || void 0,
    "data-invalid": o || void 0
  });
}
const Vh = /* @__PURE__ */ hi(Cx), Di = /* @__PURE__ */ W(null);
function Ex(e, t) {
  let { render: n } = U(Di);
  return /* @__PURE__ */ h.createElement(h.Fragment, null, n(e, t));
}
const jo = /* @__PURE__ */ q(Ex), tt = /* @__PURE__ */ W({}), Px = /* @__PURE__ */ W({});
function wx(e, t) {
  let [n, r] = ne(e, t, Px), a = wh("header", e, t);
  return a || /* @__PURE__ */ h.createElement("header", {
    className: "react-aria-Header",
    ...n,
    ref: r
  }, n.children);
}
const Ho = /* @__PURE__ */ q(wx), _o = /* @__PURE__ */ W({});
function Sx(e, t) {
  let [n, r] = ne(e, t, _o), { elementType: a, orientation: i, style: l, className: o } = n, u = a || "hr";
  u === "hr" && i === "vertical" && (u = "div");
  let { separatorProps: s } = g5({
    elementType: a,
    orientation: i
  }), d = wh("separator", e, t);
  return d || /* @__PURE__ */ h.createElement(u, {
    ...Y(n),
    ...s,
    style: l,
    className: o ?? "react-aria-Separator",
    ref: r,
    slot: n.slot || void 0
  });
}
const Ci = /* @__PURE__ */ q(Sx), Qr = /* @__PURE__ */ W(null), Ct = /* @__PURE__ */ W(null);
function Bx(e, t) {
  [e, t] = ne(e, t, Qr);
  let n = U(kr), r = U(Ct);
  return U(wn) ? /* @__PURE__ */ h.createElement(Ph, e) : r ? n ? null : /* @__PURE__ */ h.createElement(Lh, {
    state: r,
    props: e,
    listBoxRef: t
  }) : /* @__PURE__ */ h.createElement(kx, {
    props: e,
    listBoxRef: t
  });
}
function kx({ props: e, listBoxRef: t }) {
  let { portal: n, collection: r } = qr(e);
  e = {
    ...e,
    collection: r,
    children: null,
    items: null
  };
  let a = pi(e);
  return /* @__PURE__ */ h.createElement(h.Fragment, null, n, /* @__PURE__ */ h.createElement(Lh, {
    state: a,
    props: e,
    listBoxRef: t
  }));
}
const Uo = /* @__PURE__ */ q(Bx);
function Lh({ state: e, props: t, listBoxRef: n }) {
  let { dragAndDropHooks: r, layout: a = "stack", orientation: i = "vertical" } = t, { collection: l, selectionManager: o } = e, u = !!(r != null && r.useDraggableCollectionState), s = !!(r != null && r.useDroppableCollectionState), { direction: d } = oe(), { disabledBehavior: c, disabledKeys: b } = o, f = qn({
    usage: "search",
    sensitivity: "base"
  }), p = K(() => t.keyboardDelegate || new En({
    collection: l,
    collator: f,
    ref: n,
    disabledKeys: c === "selection" ? /* @__PURE__ */ new Set() : b,
    layout: a,
    orientation: i,
    direction: d
  }), [
    l,
    f,
    n,
    c,
    b,
    i,
    d,
    t.keyboardDelegate,
    a
  ]), { listBoxProps: m } = Iy({
    ...t,
    shouldSelectOnPressUp: u || t.shouldSelectOnPressUp,
    keyboardDelegate: p
  }, e, n), v = bt({
    items: l,
    children: (z) => {
      switch (z.type) {
        case "section":
          return /* @__PURE__ */ h.createElement(Fx, {
            section: z
          });
        case "separator":
          return /* @__PURE__ */ h.createElement(Ci, z.props);
        case "item":
          return /* @__PURE__ */ h.createElement(jh, {
            item: z
          });
        default:
          throw new Error("Unsupported node type in Menu: " + z.type);
      }
    }
  }), y = I(u), $ = I(s);
  J(() => {
    y.current !== u && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), $.current !== s && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    u,
    s
  ]);
  let x, C, P, B = !1, R = null, g = I(null);
  if (u && r) {
    x = r.useDraggableCollectionState({
      collection: l,
      selectionManager: o,
      preview: r.renderDragPreview ? g : void 0
    }), r.useDraggableCollection({}, x, n);
    let z = r.DragPreview;
    R = r.renderDragPreview ? /* @__PURE__ */ h.createElement(z, {
      ref: g
    }, r.renderDragPreview) : null;
  }
  if (s && r) {
    C = r.useDroppableCollectionState({
      collection: l,
      selectionManager: o
    });
    let z = r.dropTargetDelegate || new r.ListDropTargetDelegate(l, n, {
      orientation: i,
      layout: a,
      direction: d
    });
    P = r.useDroppableCollection({
      keyboardDelegate: p,
      dropTargetDelegate: z
    }, C, n), B = C.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: M, isFocused: F, isFocusVisible: E } = pe(), S = {
    isDropTarget: B,
    isEmpty: e.collection.size === 0,
    isFocused: F,
    isFocusVisible: E,
    layout: t.layout || "stack",
    state: e
  }, w = te({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-ListBox",
    values: S
  }), A = null;
  return e.collection.size === 0 && t.renderEmptyState && (A = /* @__PURE__ */ h.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, t.renderEmptyState(S))), /* @__PURE__ */ h.createElement(Vr, null, /* @__PURE__ */ h.createElement("div", {
    ...Y(t),
    ...j(m, M, P == null ? void 0 : P.collectionProps),
    ...w,
    ref: n,
    slot: t.slot || void 0,
    onScroll: t.onScroll,
    "data-drop-target": B || void 0,
    "data-empty": e.collection.size === 0 || void 0,
    "data-focused": F || void 0,
    "data-focus-visible": E || void 0,
    "data-layout": t.layout || "stack",
    "data-orientation": t.orientation || "vertical"
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Qr,
        t
      ],
      [
        Ct,
        e
      ],
      [
        tt,
        {
          dragAndDropHooks: r,
          dragState: x,
          dropState: C
        }
      ],
      [
        _o,
        {
          elementType: "div"
        }
      ],
      [
        Di,
        {
          render: Mx
        }
      ]
    ]
  }, v), A, R));
}
function Fx({ section: e, className: t, style: n }) {
  var r, a;
  let i = U(Ct), [l, o] = Ve();
  var u;
  let { headingProps: s, groupProps: d } = Ky({
    heading: o,
    "aria-label": (u = e.props["aria-label"]) !== null && u !== void 0 ? u : void 0
  }), c = bt({
    items: i.collection.getChildren(e.key),
    children: (b) => {
      switch (b.type) {
        case "header":
          return /* @__PURE__ */ h.createElement(Ax, {
            item: b,
            headingProps: s,
            headingRef: l
          });
        case "item":
          return /* @__PURE__ */ h.createElement(jh, {
            item: b
          });
        default:
          throw new Error("Unsupported element type in Section: " + b.type);
      }
    }
  });
  return /* @__PURE__ */ h.createElement("section", {
    ...Y(e.props),
    ...d,
    className: t || ((r = e.props) === null || r === void 0 ? void 0 : r.className) || "react-aria-Section",
    style: n || ((a = e.props) === null || a === void 0 ? void 0 : a.style),
    ref: e.props.ref
  }, c);
}
function Ax({ item: e, headingProps: t, headingRef: n }) {
  let { ref: r, ...a } = e.props;
  return /* @__PURE__ */ h.createElement(Ho, {
    ...t,
    ...a,
    ref: Ya(n, r)
  }, e.rendered);
}
function Tx(e, t) {
  return pt("item", e, t, e.children);
}
const Oh = /* @__PURE__ */ q(Tx);
function jh({ item: e }) {
  var t;
  let n = Me(e.props.ref), r = U(Ct), { dragAndDropHooks: a, dragState: i, dropState: l } = U(tt), { optionProps: o, labelProps: u, descriptionProps: s, ...d } = Ny({
    key: e.key,
    "aria-label": (t = e.props) === null || t === void 0 ? void 0 : t["aria-label"]
  }, r, n), { hoverProps: c, isHovered: b } = xe({
    isDisabled: !d.allowsSelection && !d.hasAction
  }), f = null;
  i && a && (f = a.useDraggableItem({
    key: e.key
  }, i));
  let p = null;
  l && a && (p = a.useDroppableItem({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, l, n));
  let m = e.props, v = i && i.isDragging(e.key), y = te({
    ...m,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...d,
      isHovered: b,
      selectionMode: r.selectionManager.selectionMode,
      selectionBehavior: r.selectionManager.selectionBehavior,
      allowsDragging: !!i,
      isDragging: v,
      isDropTarget: p == null ? void 0 : p.isDropTarget
    }
  }), $ = (a == null ? void 0 : a.renderDropIndicator) || ((C) => /* @__PURE__ */ h.createElement(jo, {
    target: C
  }));
  J(() => {
    e.textValue || console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    e.textValue
  ]);
  let x = m.href ? "a" : "div";
  return /* @__PURE__ */ h.createElement(h.Fragment, null, (a == null ? void 0 : a.useDropIndicator) && $({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), /* @__PURE__ */ h.createElement(x, {
    ...j(o, c, f == null ? void 0 : f.dragProps, p == null ? void 0 : p.dropProps),
    ...y,
    ref: n,
    "data-allows-dragging": !!i || void 0,
    "data-selected": d.isSelected || void 0,
    "data-disabled": d.isDisabled || void 0,
    "data-hovered": b || void 0,
    "data-focused": d.isFocused || void 0,
    "data-focus-visible": d.isFocusVisible || void 0,
    "data-pressed": d.isPressed || void 0,
    "data-dragging": v || void 0,
    "data-drop-target": (p == null ? void 0 : p.isDropTarget) || void 0,
    "data-selection-mode": r.selectionManager.selectionMode === "none" ? void 0 : r.selectionManager.selectionMode
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Re,
        {
          slots: {
            label: u,
            description: s
          }
        }
      ]
    ]
  }, y.children)), (a == null ? void 0 : a.useDropIndicator) && r.collection.getKeyAfter(e.key) == null && $({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }));
}
function Mx(e, t) {
  t = Me(t);
  let { dragAndDropHooks: n, dropState: r } = U(tt), { dropIndicatorProps: a, isHidden: i, isDropTarget: l } = n.useDropIndicator(e, r, t);
  return i ? null : /* @__PURE__ */ h.createElement(Ix, {
    ...e,
    dropIndicatorProps: a,
    isDropTarget: l,
    ref: t
  });
}
function Rx(e, t) {
  let { dropIndicatorProps: n, isDropTarget: r, ...a } = e, i = te({
    ...a,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...n,
    ...i,
    // eslint-disable-next-line
    role: "option",
    ref: t,
    "data-drop-target": r || void 0
  });
}
const Ix = /* @__PURE__ */ q(Rx), Wo = /* @__PURE__ */ W({
  placement: "bottom"
});
function Nx(e, t) {
  [e, t] = ne(e, t, Wo);
  let n = e.placement, r = {
    position: "absolute",
    [n]: "100%",
    transform: n === "top" || n === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
  }, a = te({
    ...e,
    defaultClassName: "react-aria-OverlayArrow",
    values: {
      placement: n
    }
  });
  return a.style && Object.keys(a.style).forEach((i) => a.style[i] === void 0 && delete a.style[i]), /* @__PURE__ */ h.createElement("div", {
    ...e,
    ...a,
    style: {
      ...r,
      ...a.style
    },
    ref: t,
    "data-placement": n
  });
}
const Hh = /* @__PURE__ */ q(Nx), Ht = /* @__PURE__ */ W(null);
function Kx(e, t) {
  [e, t] = ne(e, t, Ht);
  let n = U(Ft), r = Pn(e), a = e.isOpen != null || e.defaultOpen != null || !n ? r : n, i = Za(t, a.isOpen) || e.isExiting || !1;
  if (U(kr)) {
    let o = e.children;
    return typeof o == "function" && (o = o({
      trigger: e.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1
    })), /* @__PURE__ */ h.createElement(h.Fragment, null, o);
  }
  return a && !a.isOpen && !i ? null : /* @__PURE__ */ h.createElement(Vx, {
    ...e,
    triggerRef: e.triggerRef,
    state: a,
    popoverRef: t,
    isExiting: i
  });
}
const zx = /* @__PURE__ */ q(Kx);
function Vx({ state: e, isExiting: t, UNSTABLE_portalContainer: n, ...r }) {
  var a;
  let { popoverProps: i, underlayProps: l, arrowProps: o, placement: u } = By({
    ...r,
    offset: (a = r.offset) !== null && a !== void 0 ? a : 8
  }, e), s = r.popoverRef, d = mi(s, !!u) || r.isEntering || !1, c = te({
    ...r,
    defaultClassName: "react-aria-Popover",
    values: {
      trigger: r.trigger || null,
      placement: u,
      isEntering: d,
      isExiting: t
    }
  }), b = {
    ...i.style,
    ...c.style
  };
  return /* @__PURE__ */ h.createElement(mf, {
    isExiting: t,
    portalContainer: n
  }, !r.isNonModal && e.isOpen && /* @__PURE__ */ h.createElement("div", {
    "data-testid": "underlay",
    ...l,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ h.createElement("div", {
    ...j(Y(r), i),
    ...c,
    ref: s,
    slot: r.slot || void 0,
    style: b,
    "data-trigger": r.trigger,
    "data-placement": u,
    "data-entering": d || void 0,
    "data-exiting": t || void 0
  }, !r.isNonModal && /* @__PURE__ */ h.createElement(Bl, {
    onDismiss: e.close
  }), /* @__PURE__ */ h.createElement(Wo.Provider, {
    value: {
      ...o,
      placement: u
    }
  }, c.children), /* @__PURE__ */ h.createElement(Bl, {
    onDismiss: e.close
  })));
}
const Go = /* @__PURE__ */ W(null), Ft = /* @__PURE__ */ W(null);
function Lx(e, t) {
  let n = e["aria-labelledby"];
  [e, t] = ne(e, t, Go);
  let { dialogProps: r, titleProps: a } = n5({
    ...e,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": n
  }, t), i = U(Ft), l = e.children;
  typeof l == "function" && (l = l({
    close: (i == null ? void 0 : i.close) || (() => {
    })
  })), !r["aria-label"] && !r["aria-labelledby"] && (e["aria-labelledby"] ? r["aria-labelledby"] = e["aria-labelledby"] : console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));
  var o;
  return /* @__PURE__ */ h.createElement("section", {
    ...Y(e),
    ...r,
    ref: t,
    slot: e.slot || void 0,
    style: e.style,
    className: (o = e.className) !== null && o !== void 0 ? o : "react-aria-Dialog"
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        vi,
        {
          slots: {
            [Br]: {},
            title: {
              ...a,
              level: 2
            }
          }
        }
      ]
    ]
  }, l));
}
const Ox = /* @__PURE__ */ q(Lx), jx = /* @__PURE__ */ W(null), Hx = /* @__PURE__ */ W(null);
function _x(e, t) {
  [e, t] = ne(e, t, jx);
  let { collection: n, document: r } = Yr(), { children: a, isDisabled: i = !1, isInvalid: l = !1, isRequired: o = !1 } = e;
  a = K(() => typeof a == "function" ? a({
    isOpen: !1,
    isDisabled: i,
    isInvalid: l,
    isRequired: o
  }) : a, [
    a,
    i,
    l,
    o
  ]);
  var u;
  return /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Vo, null, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        wn,
        r
      ],
      [
        Qr,
        {
          items: (u = e.items) !== null && u !== void 0 ? u : e.defaultItems
        }
      ]
    ]
  }, a)), /* @__PURE__ */ h.createElement(Ux, {
    props: e,
    collection: n,
    comboBoxRef: t
  }));
}
function Ux({ props: e, collection: t, comboBoxRef: n }) {
  let { name: r, formValue: a = "key", allowsCustomValue: i } = e;
  i && (a = "text");
  let { contains: l } = zd({
    sensitivity: "base"
  });
  var o;
  let u = H5({
    defaultFilter: e.defaultFilter || l,
    ...e,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: e.items,
    children: void 0,
    collection: t,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }), s = I(null), d = I(null), c = I(null), b = I(null), [f, p] = Ve();
  var m;
  let { buttonProps: v, inputProps: y, listBoxProps: $, labelProps: x, descriptionProps: C, errorMessageProps: P, ...B } = Gy({
    ...ct(e),
    label: p,
    inputRef: d,
    buttonRef: s,
    listBoxRef: c,
    popoverRef: b,
    name: a === "text" ? r : void 0,
    validationBehavior: (m = e.validationBehavior) !== null && m !== void 0 ? m : "native"
  }, u), [R, g] = Z(null), M = ee(() => {
    if (d.current) {
      var w;
      let A = (w = s.current) === null || w === void 0 ? void 0 : w.getBoundingClientRect(), z = d.current.getBoundingClientRect(), T = A ? Math.min(A.left, z.left) : z.left, D = A ? Math.max(A.right, z.right) : z.right;
      g(D - T + "px");
    }
  }, [
    s,
    d,
    g
  ]);
  Kr({
    ref: d,
    onResize: M
  });
  let F = K(() => ({
    isOpen: u.isOpen,
    isDisabled: e.isDisabled || !1,
    isInvalid: B.isInvalid || !1,
    isRequired: e.isRequired || !1
  }), [
    u.isOpen,
    e.isDisabled,
    B.isInvalid,
    e.isRequired
  ]), E = te({
    ...e,
    values: F,
    defaultClassName: "react-aria-ComboBox"
  }), S = Y(e);
  return delete S.id, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Hx,
        u
      ],
      [
        Le,
        {
          ...x,
          ref: f
        }
      ],
      [
        mt,
        {
          ...v,
          ref: s,
          isPressed: u.isOpen
        }
      ],
      [
        ln,
        {
          ...y,
          ref: d
        }
      ],
      [
        Ft,
        u
      ],
      [
        Ht,
        {
          ref: b,
          triggerRef: d,
          placement: "bottom start",
          isNonModal: !0,
          trigger: "ComboBox",
          style: {
            "--trigger-width": R
          }
        }
      ],
      [
        Qr,
        {
          ...$,
          ref: c
        }
      ],
      [
        Ct,
        u
      ],
      [
        Re,
        {
          slots: {
            description: C,
            errorMessage: P
          }
        }
      ],
      [
        Ut,
        {
          isInvalid: B.isInvalid,
          isDisabled: e.isDisabled || !1
        }
      ],
      [
        et,
        B
      ]
    ]
  }, /* @__PURE__ */ h.createElement("div", {
    ...S,
    ...E,
    ref: n,
    slot: e.slot || void 0,
    "data-focused": u.isFocused || void 0,
    "data-open": u.isOpen || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": B.isInvalid || void 0,
    "data-required": e.isRequired || void 0
  }), r && a === "key" && /* @__PURE__ */ h.createElement("input", {
    type: "hidden",
    name: r,
    value: u.selectedKey
  }));
}
const Wx = /* @__PURE__ */ q(_x), Ei = /* @__PURE__ */ W(null), Gx = /* @__PURE__ */ W(null), ea = /* @__PURE__ */ W(null), Pi = /* @__PURE__ */ W(null);
function Zx(e, t) {
  [e, t] = ne(e, t, Ei);
  let { locale: n } = oe();
  var r;
  let a = Io({
    ...e,
    locale: n,
    createCalendar: ai,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), i = I(null), [l, o] = Ve(), u = I(null);
  var s;
  let { labelProps: d, fieldProps: c, inputProps: b, descriptionProps: f, errorMessageProps: p, ...m } = Po({
    ...ct(e),
    label: o,
    inputRef: u,
    validationBehavior: (s = e.validationBehavior) !== null && s !== void 0 ? s : "native"
  }, a, i), v = te({
    ...ct(e),
    values: {
      state: a,
      isInvalid: a.isInvalid,
      isDisabled: a.isDisabled
    },
    defaultClassName: "react-aria-DateField"
  }), y = Y(e);
  return delete y.id, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        ea,
        a
      ],
      [
        Ut,
        {
          ...c,
          ref: i,
          isInvalid: a.isInvalid
        }
      ],
      [
        ln,
        {
          ...b,
          ref: u
        }
      ],
      [
        Le,
        {
          ...d,
          ref: l,
          elementType: "span"
        }
      ],
      [
        Re,
        {
          slots: {
            description: f,
            errorMessage: p
          }
        }
      ],
      [
        et,
        m
      ]
    ]
  }, /* @__PURE__ */ h.createElement("div", {
    ...y,
    ...v,
    ref: t,
    slot: e.slot || void 0,
    "data-invalid": a.isInvalid || void 0
  }));
}
const qx = /* @__PURE__ */ q(Zx);
function Yx(e, t) {
  [e, t] = ne(e, t, Gx);
  let { locale: n } = oe();
  var r;
  let a = r6({
    ...e,
    locale: n,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), i = I(null), [l, o] = Ve(), u = I(null);
  var s;
  let { labelProps: d, fieldProps: c, inputProps: b, descriptionProps: f, errorMessageProps: p, ...m } = qy({
    ...ct(e),
    label: o,
    inputRef: u,
    validationBehavior: (s = e.validationBehavior) !== null && s !== void 0 ? s : "native"
  }, a, i), v = te({
    ...e,
    values: {
      state: a,
      isInvalid: a.isInvalid,
      isDisabled: a.isDisabled
    },
    defaultClassName: "react-aria-TimeField"
  }), y = Y(e);
  return delete y.id, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Pi,
        a
      ],
      [
        Ut,
        {
          ...c,
          ref: i,
          isInvalid: a.isInvalid
        }
      ],
      [
        ln,
        {
          ...b,
          ref: u
        }
      ],
      [
        Le,
        {
          ...d,
          ref: l,
          elementType: "span"
        }
      ],
      [
        Re,
        {
          slots: {
            description: f,
            errorMessage: p
          }
        }
      ],
      [
        et,
        m
      ]
    ]
  }, /* @__PURE__ */ h.createElement("div", {
    ...y,
    ...v,
    ref: t,
    slot: e.slot || void 0,
    "data-invalid": a.isInvalid || void 0
  }));
}
const Jx = /* @__PURE__ */ q(Yx);
function Xx(e, t) {
  let n = U(ea), r = U(Pi);
  return n || r ? /* @__PURE__ */ h.createElement(_h, {
    ...e,
    ref: t
  }) : /* @__PURE__ */ h.createElement(Qx, {
    ...e,
    ref: t
  });
}
const Qx = /* @__PURE__ */ q((e, t) => {
  let [n, r] = ne({
    slot: e.slot
  }, t, Ei), { locale: a } = oe(), i = Io({
    ...n,
    locale: a,
    createCalendar: ai
  }), l = I(null), { fieldProps: o, inputProps: u } = Po({
    ...n,
    inputRef: l
  }, i, r);
  return /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        ea,
        i
      ],
      [
        ln,
        {
          ...u,
          ref: l
        }
      ],
      [
        Ut,
        {
          ...o,
          ref: r,
          isInvalid: i.isInvalid
        }
      ]
    ]
  }, /* @__PURE__ */ h.createElement(_h, e));
}), _h = /* @__PURE__ */ q((e, t) => {
  let { className: n, children: r } = e, a = U(ea), i = U(Pi), l = a ?? i;
  return /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Oo, {
    ...e,
    ref: t,
    slot: e.slot || void 0,
    className: n ?? "react-aria-DateInput",
    isInvalid: l.isInvalid
  }, l.segments.map((o, u) => /* @__PURE__ */ Ls(r(o), {
    key: u
  }))), /* @__PURE__ */ h.createElement(Vh, null));
}), eD = /* @__PURE__ */ q(Xx);
function tD({ segment: e, ...t }, n) {
  let r = U(ea), a = U(Pi), i = r ?? a, l = Me(n), { segmentProps: o } = Qy(e, i, l), { focusProps: u, isFocused: s, isFocusVisible: d } = pe(), { hoverProps: c, isHovered: b } = xe({
    ...t,
    isDisabled: i.isDisabled || e.type === "literal"
  }), f = te({
    ...t,
    values: {
      ...e,
      isReadOnly: !e.isEditable,
      isInvalid: i.isInvalid,
      isDisabled: i.isDisabled,
      isHovered: b,
      isFocused: s,
      isFocusVisible: d
    },
    defaultChildren: e.text,
    defaultClassName: "react-aria-DateSegment"
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...j(Y(t), o, u, c),
    ...f,
    ref: l,
    "data-placeholder": e.isPlaceholder || void 0,
    "data-invalid": i.isInvalid || void 0,
    "data-readonly": !e.isEditable || void 0,
    "data-disabled": i.isDisabled || void 0,
    "data-type": e.type,
    "data-hovered": b || void 0,
    "data-focused": s || void 0,
    "data-focus-visible": d || void 0
  });
}
const nD = /* @__PURE__ */ q(tD), rD = /* @__PURE__ */ W(null), aD = /* @__PURE__ */ W(null), iD = /* @__PURE__ */ W(null), lD = /* @__PURE__ */ W(null);
function oD(e, t) {
  [e, t] = ne(e, t, rD);
  var n;
  let r = q5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), a = I(null), [i, l] = Ve();
  var o;
  let { groupProps: u, labelProps: s, fieldProps: d, buttonProps: c, dialogProps: b, calendarProps: f, descriptionProps: p, errorMessageProps: m, ...v } = Yy({
    ...ct(e),
    label: l,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, r, a), { focusProps: y, isFocused: $, isFocusVisible: x } = pe({
    within: !0
  }), C = te({
    ...e,
    values: {
      state: r,
      isFocusWithin: $,
      isFocusVisible: x,
      isDisabled: e.isDisabled || !1,
      isInvalid: r.isInvalid,
      isOpen: r.isOpen
    },
    defaultClassName: "react-aria-DatePicker"
  }), P = Y(e);
  return delete P.id, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        iD,
        r
      ],
      [
        Ut,
        {
          ...u,
          ref: a,
          isInvalid: r.isInvalid
        }
      ],
      [
        Ei,
        d
      ],
      [
        mt,
        {
          ...c,
          isPressed: r.isOpen
        }
      ],
      [
        Le,
        {
          ...s,
          ref: i,
          elementType: "span"
        }
      ],
      [
        Th,
        f
      ],
      [
        Ft,
        r
      ],
      [
        Ht,
        {
          trigger: "DatePicker",
          triggerRef: a,
          placement: "bottom start"
        }
      ],
      [
        Go,
        b
      ],
      [
        Re,
        {
          slots: {
            description: p,
            errorMessage: m
          }
        }
      ],
      [
        et,
        v
      ]
    ]
  }, /* @__PURE__ */ h.createElement("div", {
    ...y,
    ...P,
    ...C,
    ref: t,
    slot: e.slot || void 0,
    "data-focus-within": $ || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-focus-visible": x || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-open": r.isOpen || void 0
  }));
}
const uD = /* @__PURE__ */ q(oD);
function sD(e, t) {
  [e, t] = ne(e, t, aD);
  var n;
  let r = n6({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), a = I(null), [i, l] = Ve();
  var o;
  let { groupProps: u, labelProps: s, startFieldProps: d, endFieldProps: c, buttonProps: b, dialogProps: f, calendarProps: p, descriptionProps: m, errorMessageProps: v, ...y } = t5({
    ...ct(e),
    label: l,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, r, a), { focusProps: $, isFocused: x, isFocusVisible: C } = pe({
    within: !0
  }), P = te({
    ...e,
    values: {
      state: r,
      isFocusWithin: x,
      isFocusVisible: C,
      isDisabled: e.isDisabled || !1,
      isInvalid: r.isInvalid,
      isOpen: r.isOpen
    },
    defaultClassName: "react-aria-DateRangePicker"
  }), B = Y(e);
  return delete B.id, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        lD,
        r
      ],
      [
        Ut,
        {
          ...u,
          ref: a,
          isInvalid: r.isInvalid
        }
      ],
      [
        mt,
        {
          ...b,
          isPressed: r.isOpen
        }
      ],
      [
        Le,
        {
          ...s,
          ref: i,
          elementType: "span"
        }
      ],
      [
        Mh,
        p
      ],
      [
        Ft,
        r
      ],
      [
        Ht,
        {
          trigger: "DateRangePicker",
          triggerRef: a,
          placement: "bottom start"
        }
      ],
      [
        Go,
        f
      ],
      [
        Ei,
        {
          slots: {
            start: d,
            end: c
          }
        }
      ],
      [
        Re,
        {
          slots: {
            description: m,
            errorMessage: v
          }
        }
      ],
      [
        et,
        y
      ]
    ]
  }, /* @__PURE__ */ h.createElement("div", {
    ...$,
    ...B,
    ...P,
    ref: t,
    slot: e.slot || void 0,
    "data-focus-within": x || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-focus-visible": C || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-open": r.isOpen || void 0
  }));
}
const dD = /* @__PURE__ */ q(sD);
var Zo = {}, Uh = {};
Uh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"حدد عنصرًا","tableResizer":"أداة تغيير الحجم"}');
var Wh = {};
Wh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Изберете предмет","tableResizer":"Преоразмерител"}');
var Gh = {};
Gh = JSON.parse('{"dropzoneLabel":"Místo pro přetažení","selectPlaceholder":"Vyberte položku","tableResizer":"Změna velikosti"}');
var Zh = {};
Zh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Vælg et element","tableResizer":"Størrelsesændring"}');
var qh = {};
qh = JSON.parse('{"dropzoneLabel":"Ablegebereich","selectPlaceholder":"Element wählen","tableResizer":"Größenanpassung"}');
var Yh = {};
Yh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Επιλέξτε ένα αντικείμενο","tableResizer":"Αλλαγή μεγέθους"}');
var Jh = {};
Jh = JSON.parse('{"selectPlaceholder":"Select an item","tableResizer":"Resizer","dropzoneLabel":"DropZone"}');
var Xh = {};
Xh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Seleccionar un artículo","tableResizer":"Cambiador de tamaño"}');
var Qh = {};
Qh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valige üksus","tableResizer":"Suuruse muutja"}');
var ev = {};
ev = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valitse kohde","tableResizer":"Koon muuttaja"}');
var tv = {};
tv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Sélectionner un élément","tableResizer":"Redimensionneur"}');
var nv = {};
nv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"בחר פריט","tableResizer":"שינוי גודל"}');
var rv = {};
rv = JSON.parse('{"dropzoneLabel":"Zona spuštanja","selectPlaceholder":"Odaberite stavku","tableResizer":"Promjena veličine"}');
var av = {};
av = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Válasszon ki egy elemet","tableResizer":"Átméretező"}');
var iv = {};
iv = JSON.parse('{"dropzoneLabel":"Zona di rilascio","selectPlaceholder":"Seleziona un elemento","tableResizer":"Ridimensionamento"}');
var lv = {};
lv = JSON.parse('{"dropzoneLabel":"ドロップゾーン","selectPlaceholder":"項目を選択","tableResizer":"サイズ変更ツール"}');
var ov = {};
ov = JSON.parse('{"dropzoneLabel":"드롭 영역","selectPlaceholder":"항목 선택","tableResizer":"크기 조정기"}');
var uv = {};
uv = JSON.parse('{"dropzoneLabel":"„DropZone“","selectPlaceholder":"Pasirinkite elementą","tableResizer":"Dydžio keitiklis"}');
var sv = {};
sv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izvēlēties vienumu","tableResizer":"Izmēra mainītājs"}');
var dv = {};
dv = JSON.parse('{"dropzoneLabel":"Droppsone","selectPlaceholder":"Velg et element","tableResizer":"Størrelsesendrer"}');
var cv = {};
cv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecteer een item","tableResizer":"Resizer"}');
var fv = {};
fv = JSON.parse('{"dropzoneLabel":"Strefa upuszczania","selectPlaceholder":"Wybierz element","tableResizer":"Zmiana rozmiaru"}');
var bv = {};
bv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');
var pv = {};
pv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');
var mv = {};
mv = JSON.parse('{"dropzoneLabel":"Zonă de plasare","selectPlaceholder":"Selectați un element","tableResizer":"Instrument de redimensionare"}');
var hv = {};
hv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Выберите элемент","tableResizer":"Средство изменения размера"}');
var vv = {};
vv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Vyberte položku","tableResizer":"Nástroj na zmenu veľkosti"}');
var gv = {};
gv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izberite element","tableResizer":"Spreminjanje velikosti"}');
var $v = {};
$v = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izaberite stavku","tableResizer":"Promena veličine"}');
var yv = {};
yv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Välj en artikel","tableResizer":"Storleksändrare"}');
var xv = {};
xv = JSON.parse('{"dropzoneLabel":"Bırakma Bölgesi","selectPlaceholder":"Bir öğe seçin","tableResizer":"Yeniden boyutlandırıcı"}');
var Dv = {};
Dv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Виберіть елемент","tableResizer":"Засіб змінення розміру"}');
var Cv = {};
Cv = JSON.parse('{"dropzoneLabel":"放置区域","selectPlaceholder":"选择一个项目","tableResizer":"尺寸调整器"}');
var Ev = {};
Ev = JSON.parse('{"dropzoneLabel":"放置區","selectPlaceholder":"選取項目","tableResizer":"大小調整器"}');
Zo = {
  "ar-AE": Uh,
  "bg-BG": Wh,
  "cs-CZ": Gh,
  "da-DK": Zh,
  "de-DE": qh,
  "el-GR": Yh,
  "en-US": Jh,
  "es-ES": Xh,
  "et-EE": Qh,
  "fi-FI": ev,
  "fr-FR": tv,
  "he-IL": nv,
  "hr-HR": rv,
  "hu-HU": av,
  "it-IT": iv,
  "ja-JP": lv,
  "ko-KR": ov,
  "lt-LT": uv,
  "lv-LV": sv,
  "nb-NO": dv,
  "nl-NL": cv,
  "pl-PL": fv,
  "pt-BR": bv,
  "pt-PT": pv,
  "ro-RO": mv,
  "ru-RU": hv,
  "sk-SK": vv,
  "sl-SI": gv,
  "sr-SP": $v,
  "sv-SE": yv,
  "tr-TR": xv,
  "uk-UA": Dv,
  "zh-CN": Cv,
  "zh-TW": Ev
};
function cD(e, t) {
  let { validationErrors: n, children: r, className: a, ...i } = e;
  return /* @__PURE__ */ h.createElement("form", {
    ...i,
    ref: t,
    className: a || "react-aria-Form"
  }, /* @__PURE__ */ h.createElement(Cc.Provider, {
    value: n ?? {}
  }, r));
}
const fD = /* @__PURE__ */ q(cD), bD = /* @__PURE__ */ W(null);
function pD(e, t) {
  [e, t] = ne(e, t, bD);
  let { collection: n, portal: r } = qr(e);
  return /* @__PURE__ */ h.createElement(h.Fragment, null, r, /* @__PURE__ */ h.createElement(mD, {
    props: e,
    collection: n,
    gridListRef: t
  }));
}
function mD({ props: e, collection: t, gridListRef: n }) {
  let { dragAndDropHooks: r } = e, a = pi({
    ...e,
    collection: t,
    children: void 0
  }), { gridProps: i } = Ob(e, a, n), l = bt({
    items: t,
    children: (M) => {
      switch (M.type) {
        case "item":
          return /* @__PURE__ */ h.createElement($D, {
            item: M
          });
        default:
          throw new Error("Unsupported node type in GridList: " + M.type);
      }
    }
  }), o = a.selectionManager, u = !!(r != null && r.useDraggableCollectionState), s = !!(r != null && r.useDroppableCollectionState), d = I(u), c = I(s);
  J(() => {
    d.current !== u && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), c.current !== s && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    u,
    s
  ]);
  let b, f, p, m = !1, v = null, y = I(null);
  if (u && r) {
    b = r.useDraggableCollectionState({
      collection: t,
      selectionManager: o,
      preview: r.renderDragPreview ? y : void 0
    }), r.useDraggableCollection({}, b, n);
    let M = r.DragPreview;
    v = r.renderDragPreview ? /* @__PURE__ */ h.createElement(M, {
      ref: y
    }, r.renderDragPreview) : null;
  }
  if (s && r) {
    f = r.useDroppableCollectionState({
      collection: t,
      selectionManager: o
    });
    let M = new En(t, o.disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : o.disabledKeys, n), F = r.dropTargetDelegate || new r.ListDropTargetDelegate(t, n);
    p = r.useDroppableCollection({
      keyboardDelegate: M,
      dropTargetDelegate: F
    }, f, n), m = f.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: $, isFocused: x, isFocusVisible: C } = pe(), P = {
    isDropTarget: m,
    isEmpty: a.collection.size === 0,
    isFocused: x,
    isFocusVisible: C,
    state: a
  }, B = te({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-GridList",
    values: P
  }), R = null, g = null;
  if (a.collection.size === 0 && e.renderEmptyState) {
    let M = e.renderEmptyState(P);
    R = /* @__PURE__ */ h.createElement("div", {
      role: "row",
      style: {
        display: "contents"
      }
    }, /* @__PURE__ */ h.createElement("div", {
      role: "gridcell",
      style: {
        display: "contents"
      }
    }, M));
  }
  return /* @__PURE__ */ h.createElement(Vr, null, /* @__PURE__ */ h.createElement("div", {
    ...Y(e),
    ...B,
    ...j(i, $, p == null ? void 0 : p.collectionProps, g),
    ref: n,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-drop-target": m || void 0,
    "data-empty": a.collection.size === 0 || void 0,
    "data-focused": x || void 0,
    "data-focus-visible": C || void 0
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Ct,
        a
      ],
      [
        tt,
        {
          dragAndDropHooks: r,
          dragState: b,
          dropState: f
        }
      ],
      [
        Di,
        {
          render: yD
        }
      ]
    ]
  }, s && /* @__PURE__ */ h.createElement(CD, null), l), R, v));
}
const hD = /* @__PURE__ */ q(pD);
function vD(e, t) {
  return pt("item", e, t, e.children);
}
const gD = /* @__PURE__ */ q(vD);
function $D({ item: e }) {
  let t = U(Ct), { dragAndDropHooks: n, dragState: r, dropState: a } = U(tt), i = Me(e.props.ref), { rowProps: l, gridCellProps: o, descriptionProps: u, ...s } = jb({
    node: e,
    shouldSelectOnPressUp: !!r
  }, t, i), { hoverProps: d, isHovered: c } = xe({
    isDisabled: !s.allowsSelection && !s.hasAction
  }), { isFocusVisible: b, focusProps: f } = pe(), { checkboxProps: p } = o5({
    key: e.key
  }, t), m = null;
  r && n && (m = n.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, r));
  let v = null, y = I(null), { visuallyHiddenProps: $ } = _t();
  a && n && (v = n.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, a, y));
  let x = e.props, C = r && r.isDragging(e.key), P = te({
    ...x,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-GridListItem",
    values: {
      ...s,
      isHovered: c,
      isFocusVisible: b,
      selectionMode: t.selectionManager.selectionMode,
      selectionBehavior: t.selectionManager.selectionBehavior,
      allowsDragging: !!r,
      isDragging: C,
      isDropTarget: v == null ? void 0 : v.isDropTarget
    }
  }), B = (n == null ? void 0 : n.renderDropIndicator) || ((g) => /* @__PURE__ */ h.createElement(jo, {
    target: g
  })), R = I(null);
  return J(() => {
    r && !R.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []), J(() => {
    e.textValue || console.warn("A `textValue` prop is required for <GridListItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    e.textValue
  ]), /* @__PURE__ */ h.createElement(h.Fragment, null, (n == null ? void 0 : n.useDropIndicator) && B({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), v && !v.isHidden && /* @__PURE__ */ h.createElement("div", {
    role: "row",
    style: {
      position: "absolute"
    }
  }, /* @__PURE__ */ h.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ h.createElement("div", {
    role: "button",
    ...$,
    ...v == null ? void 0 : v.dropIndicatorProps,
    ref: y
  }))), /* @__PURE__ */ h.createElement("div", {
    ...j(Y(x), l, f, d, m == null ? void 0 : m.dragProps),
    ...P,
    ref: i,
    "data-selected": s.isSelected || void 0,
    "data-disabled": s.isDisabled || void 0,
    "data-hovered": c || void 0,
    "data-focused": s.isFocused || void 0,
    "data-focus-visible": b || void 0,
    "data-pressed": s.isPressed || void 0,
    "data-allows-dragging": !!r || void 0,
    "data-dragging": C || void 0,
    "data-drop-target": (v == null ? void 0 : v.isDropTarget) || void 0,
    "data-selection-mode": t.selectionManager.selectionMode === "none" ? void 0 : t.selectionManager.selectionMode
  }, /* @__PURE__ */ h.createElement("div", {
    ...o,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        xi,
        {
          slots: {
            selection: p
          }
        }
      ],
      [
        mt,
        {
          slots: {
            [Br]: {},
            drag: {
              ...m == null ? void 0 : m.dragButtonProps,
              ref: R,
              style: {
                pointerEvents: "none"
              }
            }
          }
        }
      ],
      [
        Re,
        {
          slots: {
            description: u
          }
        }
      ]
    ]
  }, P.children))), (n == null ? void 0 : n.useDropIndicator) && t.collection.getKeyAfter(e.key) == null && B({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }));
}
function yD(e, t) {
  t = Me(t);
  let { dragAndDropHooks: n, dropState: r } = U(tt), a = I(null), { dropIndicatorProps: i, isHidden: l, isDropTarget: o } = n.useDropIndicator(e, r, a);
  return l ? null : /* @__PURE__ */ h.createElement(DD, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    buttonRef: a,
    ref: t
  });
}
function xD(e, t) {
  let { dropIndicatorProps: n, isDropTarget: r, buttonRef: a, ...i } = e, { visuallyHiddenProps: l } = _t(), o = te({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...o,
    role: "row",
    ref: t,
    "data-drop-target": r || void 0
  }, /* @__PURE__ */ h.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ h.createElement("div", {
    ...l,
    role: "button",
    ...n,
    ref: a
  }), o.children));
}
const DD = /* @__PURE__ */ q(xD);
function CD() {
  let { dragAndDropHooks: e, dropState: t } = U(tt), n = I(null), { dropIndicatorProps: r } = e.useDropIndicator({
    target: {
      type: "root"
    }
  }, t, n), a = t.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: i } = _t();
  return !a && r["aria-hidden"] ? null : /* @__PURE__ */ h.createElement("div", {
    role: "row",
    "aria-hidden": r["aria-hidden"],
    style: {
      position: "absolute"
    }
  }, /* @__PURE__ */ h.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ h.createElement("div", {
    role: "button",
    ...i,
    ...r,
    ref: n
  })));
}
const Pv = /* @__PURE__ */ W({}), wv = /* @__PURE__ */ W(null), ta = /* @__PURE__ */ W(null), Sv = /* @__PURE__ */ W(null);
function Bv(e) {
  let { item: t, parentMenuRef: n } = e, r = U(ta);
  return bt({
    items: r.collection.getChildren(t.key),
    children: (i) => {
      switch (i.type) {
        case "item":
          return /* @__PURE__ */ h.createElement(FD, {
            item: i,
            popover: t.rendered[1],
            parentMenuRef: n,
            delay: t.props.delay
          });
        default:
          throw new Error("Unsupported element type in SubmenuTrigger: " + t.type);
      }
    }
  });
}
function ED(e, t) {
  [e, t] = ne(e, t, wv);
  let { portal: n, collection: r } = qr(e);
  return /* @__PURE__ */ h.createElement(h.Fragment, null, r.size > 0 && /* @__PURE__ */ h.createElement(PD, {
    props: e,
    collection: r,
    menuRef: t
  }), n);
}
function PD({ props: e, collection: t, menuRef: n }) {
  let r = B6({
    ...e,
    collection: t,
    children: void 0
  }), [a, i] = Z(null), { menuProps: l } = Vy(e, r, n), o = U(Sv), u = U(Ht), s = bt({
    items: r.collection,
    children: (b) => {
      switch (b.type) {
        case "section":
          return /* @__PURE__ */ h.createElement(SD, {
            section: b,
            parentMenuRef: n
          });
        case "separator":
          return /* @__PURE__ */ h.createElement(Ci, b.props);
        case "item":
          return /* @__PURE__ */ h.createElement(kv, {
            item: b
          });
        case "submenutrigger":
          return /* @__PURE__ */ h.createElement(Bv, {
            item: b,
            parentMenuRef: n
          });
        default:
          throw new Error("Unsupported node type in Menu: " + b.type);
      }
    }
  }), d = (u == null ? void 0 : u.trigger) === "SubmenuTrigger";
  ad({
    ref: n,
    onInteractOutside: (b) => {
      o && !(a != null && a.contains(b.target)) && o.close();
    },
    isDisabled: d || (o == null ? void 0 : o.UNSTABLE_expandedKeysStack.length) === 0
  });
  var c;
  return /* @__PURE__ */ h.createElement(Vr, null, /* @__PURE__ */ h.createElement("div", {
    ...Y(e),
    ...l,
    ref: n,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    style: e.style,
    className: (c = e.className) !== null && c !== void 0 ? c : "react-aria-Menu"
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        ta,
        r
      ],
      [
        _o,
        {
          elementType: "div"
        }
      ],
      [
        Ht,
        {
          UNSTABLE_portalContainer: a || void 0
        }
      ]
    ]
  }, s)), /* @__PURE__ */ h.createElement("div", {
    ref: i,
    style: {
      width: "100vw",
      position: "absolute",
      top: 0
    }
  }));
}
const wD = /* @__PURE__ */ q(ED);
function SD({ section: e, className: t, style: n, parentMenuRef: r, ...a }) {
  var i, l;
  let o = U(ta), [u, s] = Ve();
  var d;
  let { headingProps: c, groupProps: b } = Ly({
    heading: s,
    "aria-label": (d = e["aria-label"]) !== null && d !== void 0 ? d : void 0
  }), f = bt({
    items: o.collection.getChildren(e.key),
    children: (p) => {
      switch (p.type) {
        case "header": {
          let { ref: m, ...v } = p.props;
          return /* @__PURE__ */ h.createElement(Ho, {
            ...c,
            ...v,
            ref: Ya(u, m)
          }, p.rendered);
        }
        case "item":
          return /* @__PURE__ */ h.createElement(kv, {
            item: p
          });
        case "submenutrigger":
          return /* @__PURE__ */ h.createElement(Bv, {
            item: p,
            parentMenuRef: r
          });
        default:
          throw new Error("Unsupported element type in Section: " + p.type);
      }
    }
  });
  return /* @__PURE__ */ h.createElement("section", {
    ...Y(a),
    ...b,
    className: t || ((i = e.props) === null || i === void 0 ? void 0 : i.className) || "react-aria-Section",
    style: n || ((l = e.props) === null || l === void 0 ? void 0 : l.style),
    ref: e.props.ref
  }, f);
}
function BD(e, t) {
  return pt("item", e, t, e.children);
}
const kD = /* @__PURE__ */ q(BD);
function kv({ item: e }) {
  var t;
  let n = U(ta), r = Me(e.props.ref), { menuItemProps: a, labelProps: i, descriptionProps: l, keyboardShortcutProps: o, ...u } = n4({
    key: e.key,
    "aria-label": (t = e.props) === null || t === void 0 ? void 0 : t["aria-label"]
  }, n, r), s = e.props, { isFocusVisible: d, focusProps: c } = pe(), { hoverProps: b, isHovered: f } = xe({
    isDisabled: u.isDisabled
  }), p = te({
    ...s,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-MenuItem",
    values: {
      ...u,
      isHovered: f,
      isFocusVisible: d,
      selectionMode: n.selectionManager.selectionMode,
      selectionBehavior: n.selectionManager.selectionBehavior,
      hasSubmenu: !1,
      isOpen: !1
    }
  }), m = s.href ? "a" : "div";
  return /* @__PURE__ */ h.createElement(m, {
    ...j(a, c, b),
    ...p,
    ref: r,
    "data-disabled": u.isDisabled || void 0,
    "data-hovered": f || void 0,
    "data-focused": u.isFocused || void 0,
    "data-focus-visible": d || void 0,
    "data-pressed": u.isPressed || void 0,
    "data-selected": u.isSelected || void 0,
    "data-selection-mode": n.selectionManager.selectionMode === "none" ? void 0 : n.selectionManager.selectionMode
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Re,
        {
          slots: {
            label: i,
            description: l
          }
        }
      ],
      [
        Pv,
        o
      ]
    ]
  }, p.children));
}
function FD({ item: e, popover: t, parentMenuRef: n, delay: r }) {
  let a = U(ta), i = Jr(Ht), l = Me(e.props.ref), o = U(Sv), u = a6({
    triggerKey: e.key
  }, o), s = I(null), { submenuTriggerProps: d, submenuProps: c, popoverProps: b } = _y({
    node: e,
    parentMenuRef: n,
    submenuRef: s,
    delay: r
  }, u, l), { menuItemProps: f, labelProps: p, descriptionProps: m, keyboardShortcutProps: v, ...y } = n4({
    key: e.key,
    ...d
  }, a, l), $ = e.props, { hoverProps: x, isHovered: C } = xe({
    isDisabled: y.isDisabled
  }), { isFocusVisible: P, focusProps: B } = pe(), R = te({
    ...$,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-MenuItem",
    values: {
      ...y,
      isHovered: C,
      isFocusVisible: P,
      selectionMode: a.selectionManager.selectionMode,
      selectionBehavior: a.selectionManager.selectionBehavior,
      hasSubmenu: !0,
      isOpen: u.isOpen
    }
  });
  return /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Re,
        {
          slots: {
            label: p,
            description: m
          }
        }
      ],
      [
        Pv,
        v
      ],
      [
        wv,
        c
      ],
      [
        Ft,
        u
      ],
      [
        Ht,
        {
          ref: s,
          trigger: "SubmenuTrigger",
          triggerRef: l,
          placement: "end top",
          UNSTABLE_portalContainer: i.UNSTABLE_portalContainer || void 0,
          ...b
        }
      ]
    ]
  }, /* @__PURE__ */ h.createElement("div", {
    ...j(f, B, x),
    ...R,
    ref: l,
    "data-disabled": y.isDisabled || void 0,
    "data-hovered": C || void 0,
    "data-focused": y.isFocused || void 0,
    "data-focus-visible": P || void 0,
    "data-pressed": y.isPressed || void 0,
    "data-selected": y.isSelected || void 0,
    "data-selection-mode": a.selectionManager.selectionMode === "none" ? void 0 : a.selectionManager.selectionMode,
    "data-has-submenu": !0,
    "data-open": u.isOpen || void 0
  }, R.children), t);
}
const AD = /* @__PURE__ */ W(null);
function TD(e, t) {
  [e, t] = ne(e, t, AD);
  let { value: n = 0, minValue: r = 0, maxValue: a = 100 } = e;
  n = dt(n, r, a);
  let [i, l] = Ve(), { meterProps: o, labelProps: u } = u5({
    ...e,
    label: l
  }), s = (n - r) / (a - r) * 100, d = te({
    ...e,
    defaultClassName: "react-aria-Meter",
    values: {
      percentage: s,
      valueText: o["aria-valuetext"]
    }
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...o,
    ...d,
    ref: t,
    slot: e.slot || void 0
  }, /* @__PURE__ */ h.createElement(Le.Provider, {
    value: {
      ...u,
      ref: i,
      elementType: "span"
    }
  }, d.children));
}
const MD = /* @__PURE__ */ q(TD), RD = /* @__PURE__ */ W(null), qo = /* @__PURE__ */ W(null);
function ID(e, t) {
  if (U(qo))
    return /* @__PURE__ */ h.createElement(Bs, {
      ...e,
      modalRef: t
    }, e.children);
  let { isDismissable: r, isKeyboardDismissDisabled: a, isOpen: i, defaultOpen: l, onOpenChange: o, children: u, isEntering: s, isExiting: d, UNSTABLE_portalContainer: c, ...b } = e;
  return /* @__PURE__ */ h.createElement(Fv, {
    isDismissable: r,
    isKeyboardDismissDisabled: a,
    isOpen: i,
    defaultOpen: l,
    onOpenChange: o,
    isEntering: s,
    isExiting: d,
    UNSTABLE_portalContainer: c
  }, /* @__PURE__ */ h.createElement(Bs, {
    ...b,
    modalRef: t
  }, u));
}
const ND = /* @__PURE__ */ q(ID);
function KD(e, t) {
  [e, t] = ne(e, t, RD);
  let n = U(Ft), r = Pn(e), a = e.isOpen != null || e.defaultOpen != null || !n ? r : n, i = Me(t), l = I(null), o = Za(i, a.isOpen), u = Za(l, a.isOpen), s = o || u || e.isExiting || !1, d = Bt();
  return !a.isOpen && !s || d ? null : /* @__PURE__ */ h.createElement(zD, {
    ...e,
    state: a,
    isExiting: s,
    overlayRef: i,
    modalRef: l
  });
}
const Fv = /* @__PURE__ */ q(KD);
function zD({ UNSTABLE_portalContainer: e, ...t }) {
  let n = t.modalRef, { state: r } = t, { modalProps: a, underlayProps: i } = ky(t, r, n), l = mi(t.overlayRef) || t.isEntering || !1, o = te({
    ...t,
    defaultClassName: "react-aria-ModalOverlay",
    values: {
      isEntering: l,
      isExiting: t.isExiting,
      state: r
    }
  }), u = Yg(), s = {
    ...o.style,
    "--visual-viewport-height": u.height + "px"
  };
  return /* @__PURE__ */ h.createElement(mf, {
    isExiting: t.isExiting,
    portalContainer: e
  }, /* @__PURE__ */ h.createElement("div", {
    ...j(Y(t), i),
    ...o,
    style: s,
    ref: t.overlayRef,
    "data-entering": l || void 0,
    "data-exiting": t.isExiting || void 0
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        qo,
        {
          modalProps: a,
          modalRef: n,
          isExiting: t.isExiting,
          isDismissable: t.isDismissable
        }
      ],
      [
        Ft,
        r
      ]
    ]
  }, o.children)));
}
function Bs(e) {
  let { modalProps: t, modalRef: n, isExiting: r, isDismissable: a } = U(qo), i = U(Ft), l = K(() => Ya(e.modalRef, n), [
    e.modalRef,
    n
  ]), o = Me(l), u = mi(o), s = te({
    ...e,
    defaultClassName: "react-aria-Modal",
    values: {
      isEntering: u,
      isExiting: r,
      state: i
    }
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...j(Y(e), t),
    ...s,
    ref: o,
    "data-entering": u || void 0,
    "data-exiting": r || void 0
  }, a && /* @__PURE__ */ h.createElement(Bl, {
    onDismiss: i.close
  }), s.children);
}
const VD = /* @__PURE__ */ W(null), LD = /* @__PURE__ */ W(null);
function OD(e, t) {
  [e, t] = ne(e, t, VD);
  let { locale: n } = oe();
  var r;
  let a = i6({
    ...e,
    locale: n,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), i = I(null), [l, o] = Ve();
  var u;
  let { labelProps: s, groupProps: d, inputProps: c, incrementButtonProps: b, decrementButtonProps: f, descriptionProps: p, errorMessageProps: m, ...v } = d5({
    ...ct(e),
    label: o,
    validationBehavior: (u = e.validationBehavior) !== null && u !== void 0 ? u : "native"
  }, a, i), y = te({
    ...e,
    values: {
      state: a,
      isDisabled: e.isDisabled || !1,
      isInvalid: v.isInvalid || !1
    },
    defaultClassName: "react-aria-NumberField"
  }), $ = Y(e);
  return delete $.id, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        LD,
        a
      ],
      [
        Ut,
        d
      ],
      [
        ln,
        {
          ...c,
          ref: i
        }
      ],
      [
        Le,
        {
          ...s,
          ref: l
        }
      ],
      [
        mt,
        {
          slots: {
            increment: b,
            decrement: f
          }
        }
      ],
      [
        Re,
        {
          slots: {
            description: p,
            errorMessage: m
          }
        }
      ],
      [
        et,
        v
      ]
    ]
  }, /* @__PURE__ */ h.createElement("div", {
    ...$,
    ...y,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": v.isInvalid || void 0
  }), e.name && /* @__PURE__ */ h.createElement("input", {
    type: "hidden",
    name: e.name,
    value: isNaN(a.numberValue) ? "" : a.numberValue
  }));
}
const jD = /* @__PURE__ */ q(OD), HD = /* @__PURE__ */ W(null);
function _D(e, t) {
  [e, t] = ne(e, t, HD);
  let { value: n = 0, minValue: r = 0, maxValue: a = 100, isIndeterminate: i = !1 } = e;
  n = dt(n, r, a);
  let [l, o] = Ve(), { progressBarProps: u, labelProps: s } = Hb({
    ...e,
    label: o
  }), d = i ? void 0 : (n - r) / (a - r) * 100, c = te({
    ...e,
    defaultClassName: "react-aria-ProgressBar",
    values: {
      percentage: d,
      valueText: u["aria-valuetext"],
      isIndeterminate: i
    }
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...u,
    ...c,
    ref: t,
    slot: e.slot || void 0
  }, /* @__PURE__ */ h.createElement(Le.Provider, {
    value: {
      ...s,
      ref: l,
      elementType: "span"
    }
  }, c.children));
}
const UD = /* @__PURE__ */ q(_D), WD = /* @__PURE__ */ W(null), GD = /* @__PURE__ */ W(null), Av = /* @__PURE__ */ W(null);
function ZD(e, t) {
  [e, t] = ne(e, t, WD);
  var n;
  let r = u6({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), [a, i] = Ve();
  var l;
  let { radioGroupProps: o, labelProps: u, descriptionProps: s, errorMessageProps: d, ...c } = f5({
    ...e,
    label: i,
    validationBehavior: (l = e.validationBehavior) !== null && l !== void 0 ? l : "native"
  }, r), b = te({
    ...e,
    values: {
      orientation: e.orientation || "vertical",
      isDisabled: r.isDisabled,
      isReadOnly: r.isReadOnly,
      isRequired: r.isRequired,
      isInvalid: r.isInvalid,
      state: r
    },
    defaultClassName: "react-aria-RadioGroup"
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...o,
    ...b,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "vertical",
    "data-invalid": r.isInvalid || void 0,
    "data-disabled": r.isDisabled || void 0,
    "data-readonly": r.isReadOnly || void 0,
    "data-required": r.isRequired || void 0
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Av,
        r
      ],
      [
        Le,
        {
          ...u,
          ref: a,
          elementType: "span"
        }
      ],
      [
        Re,
        {
          slots: {
            description: s,
            errorMessage: d
          }
        }
      ],
      [
        et,
        c
      ]
    ]
  }, b.children));
}
function qD(e, t) {
  [e, t] = ne(e, t, GD);
  let n = h.useContext(Av), r = I(null), { labelProps: a, inputProps: i, isSelected: l, isDisabled: o, isPressed: u } = c5({
    ...ct(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, n, r), { isFocused: s, isFocusVisible: d, focusProps: c } = pe(), b = o || n.isReadOnly, { hoverProps: f, isHovered: p } = xe({
    ...e,
    isDisabled: b
  }), m = te({
    ...e,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: l,
      isPressed: u,
      isHovered: p,
      isFocused: s,
      isFocusVisible: d,
      isDisabled: o,
      isReadOnly: n.isReadOnly,
      isInvalid: n.isInvalid,
      isRequired: n.isRequired
    }
  }), v = Y(e);
  return delete v.id, /* @__PURE__ */ h.createElement("label", {
    ...j(v, a, f, m),
    ref: t,
    "data-selected": l || void 0,
    "data-pressed": u || void 0,
    "data-hovered": p || void 0,
    "data-focused": s || void 0,
    "data-focus-visible": d || void 0,
    "data-disabled": o || void 0,
    "data-readonly": n.isReadOnly || void 0,
    "data-invalid": n.isInvalid || void 0,
    "data-required": n.isRequired || void 0
  }, /* @__PURE__ */ h.createElement(nn, {
    elementType: "span"
  }, /* @__PURE__ */ h.createElement("input", {
    ...j(i, c),
    ref: r
  })), m.children);
}
const YD = /* @__PURE__ */ q(ZD), JD = /* @__PURE__ */ q(qD), XD = /* @__PURE__ */ W(null);
function QD(e, t) {
  [e, t] = ne(e, t, XD);
  let n = I(null), [r, a] = Ve();
  var i;
  let l = s6({
    ...e,
    validationBehavior: (i = e.validationBehavior) !== null && i !== void 0 ? i : "native"
  });
  var o;
  let { labelProps: u, inputProps: s, clearButtonProps: d, descriptionProps: c, errorMessageProps: b, ...f } = p5({
    ...ct(e),
    label: a,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, l, n), p = te({
    ...e,
    values: {
      isEmpty: l.value === "",
      isDisabled: e.isDisabled || !1,
      isInvalid: f.isInvalid || !1,
      state: l
    },
    defaultClassName: "react-aria-SearchField"
  }), m = Y(e);
  return delete m.id, /* @__PURE__ */ h.createElement("div", {
    ...m,
    ...p,
    ref: t,
    slot: e.slot || void 0,
    "data-empty": l.value === "" || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": f.isInvalid || void 0
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Le,
        {
          ...u,
          ref: r
        }
      ],
      [
        ln,
        {
          ...s,
          ref: n
        }
      ],
      [
        mt,
        d
      ],
      [
        Re,
        {
          slots: {
            description: c,
            errorMessage: b
          }
        }
      ],
      [
        Ut,
        {
          isInvalid: f.isInvalid,
          isDisabled: e.isDisabled || !1
        }
      ],
      [
        et,
        f
      ]
    ]
  }, p.children));
}
const e2 = /* @__PURE__ */ q(QD), Ca = /* @__PURE__ */ W(null), Ol = /* @__PURE__ */ W(null);
function t2(e, t) {
  [e, t] = ne(e, t, Ca);
  let { collection: n, document: r } = Yr();
  var a;
  let i = d6({
    ...e,
    collection: n,
    children: void 0,
    validationBehavior: (a = e.validationBehavior) !== null && a !== void 0 ? a : "native"
  }), { isFocusVisible: l, focusProps: o } = pe({
    within: !0
  }), u = I(null), [s, d] = Ve();
  var c;
  let { labelProps: b, triggerProps: f, valueProps: p, menuProps: m, descriptionProps: v, errorMessageProps: y, ...$ } = m5({
    ...ct(e),
    label: d,
    validationBehavior: (c = e.validationBehavior) !== null && c !== void 0 ? c : "native"
  }, i, u), [x, C] = Z(null), P = ee(() => {
    u.current && C(u.current.offsetWidth + "px");
  }, [
    u
  ]);
  Kr({
    ref: u,
    onResize: P
  });
  let B = K(() => ({
    isOpen: i.isOpen,
    isFocused: i.isFocused,
    isFocusVisible: l,
    isDisabled: e.isDisabled || !1,
    isInvalid: $.isInvalid || !1,
    isRequired: e.isRequired || !1
  }), [
    i.isOpen,
    i.isFocused,
    l,
    e.isDisabled,
    $.isInvalid,
    e.isRequired
  ]), R = te({
    ...e,
    values: B,
    defaultClassName: "react-aria-Select"
  }), g = Y(e);
  return delete g.id, /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Vo, null, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Ca,
        e
      ],
      [
        Ol,
        i
      ],
      [
        wn,
        r
      ]
    ]
  }, R.children)), /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Ca,
        e
      ],
      [
        Ol,
        i
      ],
      [
        Tv,
        p
      ],
      [
        Le,
        {
          ...b,
          ref: s,
          elementType: "span"
        }
      ],
      [
        mt,
        {
          ...f,
          ref: u,
          isPressed: i.isOpen
        }
      ],
      [
        Ft,
        i
      ],
      [
        Ht,
        {
          trigger: "Select",
          triggerRef: u,
          placement: "bottom start",
          style: {
            "--trigger-width": x
          }
        }
      ],
      [
        Qr,
        m
      ],
      [
        Ct,
        i
      ],
      [
        Re,
        {
          slots: {
            description: v,
            errorMessage: y
          }
        }
      ],
      [
        et,
        $
      ]
    ]
  }, /* @__PURE__ */ h.createElement("div", {
    ...g,
    ...R,
    ...o,
    ref: t,
    slot: e.slot || void 0,
    "data-focused": i.isFocused || void 0,
    "data-focus-visible": l || void 0,
    "data-open": i.isOpen || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": $.isInvalid || void 0,
    "data-required": e.isRequired || void 0
  }), /* @__PURE__ */ h.createElement(v5, {
    state: i,
    triggerRef: u,
    label: d,
    name: e.name,
    isDisabled: e.isDisabled
  })));
}
const n2 = /* @__PURE__ */ q(t2), Tv = /* @__PURE__ */ W(null);
function r2(e, t) {
  var n, r;
  [e, t] = ne(e, t, Tv);
  let a = U(Ol), { placeholder: i } = Jr(Ca), l = a.selectedKey != null ? a.collection.getItem(a.selectedKey) : null, o = l == null ? void 0 : l.rendered;
  typeof o == "function" && (o = o({
    isHovered: !1,
    isPressed: !1,
    isSelected: !1,
    isFocused: !1,
    isFocusVisible: !1,
    isDisabled: !1,
    selectionMode: "single",
    selectionBehavior: "toggle"
  }));
  let u = Pe(/* @__PURE__ */ xh(Zo), "react-aria-components");
  var s, d;
  let c = te({
    ...e,
    defaultChildren: o || i || u.format("selectPlaceholder"),
    defaultClassName: "react-aria-SelectValue",
    values: {
      selectedItem: (s = (n = a.selectedItem) === null || n === void 0 ? void 0 : n.value) !== null && s !== void 0 ? s : null,
      selectedText: (d = (r = a.selectedItem) === null || r === void 0 ? void 0 : r.textValue) !== null && d !== void 0 ? d : null,
      isPlaceholder: !l
    }
  }), b = Y(e);
  return /* @__PURE__ */ h.createElement("span", {
    ref: t,
    ...b,
    ...c,
    "data-placeholder": !l || void 0
  }, /* @__PURE__ */ h.createElement(Re.Provider, {
    value: void 0
  }, c.children));
}
const a2 = /* @__PURE__ */ q(r2), i2 = /* @__PURE__ */ W(null), wi = /* @__PURE__ */ W(null), Yo = /* @__PURE__ */ W(null), Mv = /* @__PURE__ */ W(null);
function l2(e, t) {
  [e, t] = ne(e, t, i2);
  let n = I(null), r = Ha(e.formatOptions), a = p6({
    ...e,
    numberFormatter: r
  }), [i, l] = Ve(), { groupProps: o, trackProps: u, labelProps: s, outputProps: d } = $5({
    ...e,
    label: l
  }, a, n), c = te({
    ...e,
    values: {
      orientation: a.orientation,
      isDisabled: a.isDisabled,
      state: a
    },
    defaultClassName: "react-aria-Slider"
  }), b = Y(e);
  return delete b.id, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        wi,
        a
      ],
      [
        Yo,
        {
          ...u,
          ref: n
        }
      ],
      [
        Mv,
        d
      ],
      [
        Le,
        {
          ...s,
          ref: i
        }
      ]
    ]
  }, /* @__PURE__ */ h.createElement("div", {
    ...b,
    ...o,
    ...c,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": a.orientation,
    "data-disabled": a.isDisabled || void 0
  }));
}
const o2 = /* @__PURE__ */ q(l2);
function u2(e, t) {
  [e, t] = ne(e, t, Mv);
  let { children: n, style: r, className: a, ...i } = e, l = U(wi), o = te({
    className: a,
    style: r,
    children: n,
    defaultChildren: l.getThumbValueLabel(0),
    defaultClassName: "react-aria-SliderOutput",
    values: {
      orientation: l.orientation,
      isDisabled: l.isDisabled,
      state: l
    }
  });
  return /* @__PURE__ */ h.createElement("output", {
    ...i,
    ...o,
    ref: t,
    "data-orientation": l.orientation || void 0,
    "data-disabled": l.isDisabled || void 0
  });
}
const s2 = /* @__PURE__ */ q(u2);
function d2(e, t) {
  [e, t] = ne(e, t, Yo);
  let n = U(wi), { onHoverStart: r, onHoverEnd: a, onHoverChange: i, ...l } = e, { hoverProps: o, isHovered: u } = xe({
    onHoverStart: r,
    onHoverEnd: a,
    onHoverChange: i
  }), s = te({
    ...e,
    defaultClassName: "react-aria-SliderTrack",
    values: {
      orientation: n.orientation,
      isDisabled: n.isDisabled,
      isHovered: u,
      state: n
    }
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...j(l, o),
    ...s,
    ref: t,
    "data-hovered": u || void 0,
    "data-orientation": n.orientation || void 0,
    "data-disabled": n.isDisabled || void 0
  });
}
const c2 = /* @__PURE__ */ q(d2);
function f2(e, t) {
  let n = U(wi), { ref: r } = Jr(Yo), { index: a = 0 } = e, i = I(null), [l, o] = Ve(), { thumbProps: u, inputProps: s, labelProps: d, isDragging: c, isFocused: b, isDisabled: f } = y5({
    ...e,
    index: a,
    trackRef: r,
    inputRef: i,
    label: o
  }, n), { focusProps: p, isFocusVisible: m } = pe(), { hoverProps: v, isHovered: y } = xe(e), $ = te({
    ...e,
    defaultClassName: "react-aria-SliderThumb",
    values: {
      state: n,
      isHovered: y,
      isDragging: c,
      isFocused: b,
      isFocusVisible: m,
      isDisabled: f
    }
  }), x = Y(e);
  return delete x.id, /* @__PURE__ */ h.createElement("div", {
    ...j(x, u, v),
    ...$,
    ref: t,
    style: {
      ...u.style,
      ...$.style
    },
    "data-hovered": y || void 0,
    "data-dragging": c || void 0,
    "data-focused": b || void 0,
    "data-focus-visible": m || void 0,
    "data-disabled": f || void 0
  }, /* @__PURE__ */ h.createElement(nn, null, /* @__PURE__ */ h.createElement("input", {
    ref: i,
    ...j(s, p)
  })), /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Le,
        {
          ...d,
          ref: l
        }
      ]
    ]
  }, $.children));
}
const b2 = /* @__PURE__ */ q(f2), p2 = /* @__PURE__ */ W(null);
function m2(e, t) {
  [e, t] = ne(e, t, p2);
  let n = I(null), r = oi(e), { labelProps: a, inputProps: i, isSelected: l, isDisabled: o, isReadOnly: u, isPressed: s } = x5({
    ...ct(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, r, n), { isFocused: d, isFocusVisible: c, focusProps: b } = pe(), f = e.isDisabled || e.isReadOnly, { hoverProps: p, isHovered: m } = xe({
    ...e,
    isDisabled: f
  }), v = te({
    ...e,
    defaultClassName: "react-aria-Switch",
    values: {
      isSelected: l,
      isPressed: s,
      isHovered: m,
      isFocused: d,
      isFocusVisible: c,
      isDisabled: o,
      isReadOnly: u,
      state: r
    }
  }), y = Y(e);
  return delete y.id, /* @__PURE__ */ h.createElement("label", {
    ...j(y, a, p, v),
    ref: t,
    slot: e.slot || void 0,
    "data-selected": l || void 0,
    "data-pressed": s || void 0,
    "data-hovered": m || void 0,
    "data-focused": d || void 0,
    "data-focus-visible": c || void 0,
    "data-disabled": o || void 0,
    "data-readonly": u || void 0
  }, /* @__PURE__ */ h.createElement(nn, {
    elementType: "span"
  }, /* @__PURE__ */ h.createElement("input", {
    ...i,
    ...b,
    ref: n
  })), v.children);
}
const h2 = /* @__PURE__ */ q(m2);
class v2 extends Ch {
  addNode(t) {
    super.addNode(t), this.columnsDirty || (this.columnsDirty = t.type === "column"), t.type === "tableheader" && (this.head = t), t.type === "tablebody" && (this.body = t);
  }
  commit(t, n, r = !1) {
    this.updateColumns(r), super.commit(t, n, r);
  }
  updateColumns(t) {
    if (!this.columnsDirty)
      return;
    this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.columns = [];
    let n = /* @__PURE__ */ new Map(), r = (a) => {
      switch (a.type) {
        case "column":
          n.set(a.key, a), a.hasChildNodes || (a.index = this.columns.length, this.columns.push(a), a.props.isRowHeader && this.rowHeaderColumnKeys.add(a.key));
          break;
      }
      for (let i of this.getChildren(a.key))
        r(i);
    };
    for (let a of this.getChildren(this.head.key))
      r(a);
    if (this.headerRows = $h(n, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !t)
      throw new Error("A table must have at least one Column with the isRowHeader prop set to true");
  }
  get columnCount() {
    return this.columns.length;
  }
  get rows() {
    return [
      ...this.getChildren(this.body.key)
    ];
  }
  *[Symbol.iterator]() {
    yield* this.getChildren(this.body.key);
  }
  get size() {
    return [
      ...this.getChildren(this.body.key)
    ].length;
  }
  getFirstKey() {
    var t;
    return (t = [
      ...this.getChildren(this.body.key)
    ][0]) === null || t === void 0 ? void 0 : t.key;
  }
  getLastKey() {
    var t;
    let n = [
      ...this.getChildren(this.body.key)
    ];
    return (t = n[n.length - 1]) === null || t === void 0 ? void 0 : t.key;
  }
  getKeyAfter(t) {
    let n = this.getItem(t);
    var r;
    return (n == null ? void 0 : n.type) === "column" ? (r = n.nextKey) !== null && r !== void 0 ? r : null : super.getKeyAfter(t);
  }
  getKeyBefore(t) {
    var n;
    let r = this.getItem(t);
    var a;
    if ((r == null ? void 0 : r.type) === "column")
      return (a = r.prevKey) !== null && a !== void 0 ? a : null;
    let i = super.getKeyBefore(t);
    return i != null && ((n = this.getItem(i)) === null || n === void 0 ? void 0 : n.type) === "tablebody" ? null : i;
  }
  getChildren(t) {
    if (!this.getItem(t)) {
      for (let n of this.headerRows)
        if (n.key === t)
          return n.childNodes;
    }
    return super.getChildren(t);
  }
  clone() {
    let t = super.clone();
    return t.headerRows = this.headerRows, t.columns = this.columns, t.rowHeaderColumnKeys = this.rowHeaderColumnKeys, t.head = this.head, t.body = this.body, t;
  }
  getTextValue(t) {
    let n = this.getItem(t);
    if (!n)
      return "";
    if (n.textValue)
      return n.textValue;
    let r = this.rowHeaderColumnKeys, a = [];
    for (let i of this.getChildren(t)) {
      let l = this.columns[i.index];
      if (r.has(l.key) && i.textValue && a.push(i.textValue), a.length === r.size)
        break;
    }
    return a.join(" ");
  }
  constructor(...t) {
    super(...t), this.headerRows = [], this.columns = [], this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.head = new wr("tableheader", -1), this.body = new wr("tablebody", -2), this.columnsDirty = !0;
  }
}
const Jo = /* @__PURE__ */ W(null);
function g2(e, t) {
  let n = Me(t), [r, a] = Z(0);
  Kr({
    ref: n,
    onResize() {
      var l, o;
      a((o = (l = n.current) === null || l === void 0 ? void 0 : l.clientWidth) !== null && o !== void 0 ? o : 0);
    }
  }), fe(() => {
    var l, o;
    a((o = (l = n.current) === null || l === void 0 ? void 0 : l.clientWidth) !== null && o !== void 0 ? o : 0);
  }, [
    n
  ]);
  let i = K(() => ({
    tableWidth: r,
    useTableColumnResizeState: $6,
    onResizeStart: e.onResizeStart,
    onResize: e.onResize,
    onResizeEnd: e.onResizeEnd
  }), [
    r,
    e.onResizeStart,
    e.onResize,
    e.onResizeEnd
  ]);
  return /* @__PURE__ */ h.createElement("div", {
    ...Y(e),
    ref: n,
    className: e.className || "react-aria-ResizableTableContainer",
    style: e.style,
    onScroll: e.onScroll
  }, /* @__PURE__ */ h.createElement(Jo.Provider, {
    value: i
  }, e.children));
}
const $2 = /* @__PURE__ */ q(g2), y2 = /* @__PURE__ */ W(null), on = /* @__PURE__ */ W(null), Xo = /* @__PURE__ */ W(null);
function x2(e, t) {
  [e, t] = ne(e, t, y2);
  let n = K(() => new v2(), []), { portal: r, collection: a } = qr(e, n), i = D6({
    ...e,
    collection: a,
    children: void 0
  }), { gridProps: l } = E5(e, i, t), { dragAndDropHooks: o } = e, u = i.selectionManager, s = !!(o != null && o.useDraggableCollectionState), d = !!(o != null && o.useDroppableCollectionState), c = I(s), b = I(d);
  J(() => {
    c.current !== s && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), b.current !== d && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    s,
    d
  ]);
  let f, p, m, v = !1, y = null, $ = I(null);
  if (s && o) {
    f = o.useDraggableCollectionState({
      collection: a,
      selectionManager: u,
      preview: o.renderDragPreview ? $ : void 0
    }), o.useDraggableCollection({}, f, t);
    let A = o.DragPreview;
    y = o.renderDragPreview ? /* @__PURE__ */ h.createElement(A, {
      ref: $
    }, o.renderDragPreview) : null;
  }
  if (d && o) {
    p = o.useDroppableCollectionState({
      collection: a,
      selectionManager: u
    });
    let A = new En(a, u.disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : u.disabledKeys, t), z = o.dropTargetDelegate || new o.ListDropTargetDelegate(a, t);
    m = o.useDroppableCollection({
      keyboardDelegate: A,
      dropTargetDelegate: z
    }, p, t), v = p.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: x, isFocused: C, isFocusVisible: P } = pe(), B = te({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: v,
      isFocused: C,
      isFocusVisible: P,
      state: i
    }
  }), { selectionBehavior: R, selectionMode: g, disallowEmptySelection: M } = i.selectionManager, F = K(() => ({
    selectionBehavior: g === "none" ? null : R,
    selectionMode: g,
    disallowEmptySelection: M,
    allowsDragging: s
  }), [
    R,
    g,
    M,
    s
  ]), E = B.style, S = U(Jo), w = null;
  return S && (w = S.useTableColumnResizeState({
    tableWidth: S.tableWidth
  }, i), E = {
    ...E,
    tableLayout: "fixed",
    width: "fit-content"
  }), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Rv.Provider, {
    value: F
  }, r), /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        on,
        i
      ],
      [
        Xo,
        w
      ],
      [
        tt,
        {
          dragAndDropHooks: o,
          dragState: f,
          dropState: p
        }
      ],
      [
        Di,
        {
          render: z2
        }
      ]
    ]
  }, /* @__PURE__ */ h.createElement(Vr, null, /* @__PURE__ */ h.createElement("table", {
    ...Y(e),
    ...B,
    ...j(l, x, m == null ? void 0 : m.collectionProps),
    style: E,
    ref: t,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-allows-dragging": s || void 0,
    "data-drop-target": v || void 0,
    "data-focused": C || void 0,
    "data-focus-visible": P || void 0
  }, /* @__PURE__ */ h.createElement(F2, {
    collection: a
  }), /* @__PURE__ */ h.createElement(A2, {
    collection: a,
    isDroppable: d
  }))), y));
}
const D2 = /* @__PURE__ */ q(x2), Rv = /* @__PURE__ */ W(null);
function Iv() {
  return U(Rv);
}
function C2(e, t) {
  let n = Zr({
    children: e.children,
    items: e.columns,
    dependencies: e.dependencies
  }), r = typeof e.children == "function" ? e.children : null;
  return /* @__PURE__ */ h.createElement(Bh.Provider, {
    value: r
  }, pt("tableheader", e, t, null, n));
}
const E2 = /* @__PURE__ */ q(C2);
function P2(e, t) {
  return pt("column", e, t, e.children);
}
const Nv = /* @__PURE__ */ q(P2);
function w2(e, t) {
  let n = [
    e.value
  ].concat(e.dependencies), r = Zr({
    dependencies: n,
    children: e.children,
    items: e.columns,
    idScope: e.id
  }), a = K(() => ({
    idScope: e.id,
    dependencies: n
  }), [
    e.id,
    ...n
  ]);
  return pt("item", e, t, null, /* @__PURE__ */ h.createElement(Sh.Provider, {
    value: a
  }, r));
}
const S2 = /* @__PURE__ */ q(w2);
function B2(e, t) {
  return pt("cell", e, t, e.children);
}
const k2 = /* @__PURE__ */ q(B2);
function F2({ collection: e }) {
  let t = bt({
    items: e.headerRows,
    children: ee((a) => {
      switch (a.type) {
        case "headerrow":
          return /* @__PURE__ */ h.createElement(T2, {
            item: a
          });
        default:
          throw new Error("Unsupported node type in TableHeader: " + a.type);
      }
    }, [])
  }), { rowGroupProps: n } = Um();
  var r;
  return /* @__PURE__ */ h.createElement("thead", {
    ...Y(e.head.props),
    ...n,
    ref: e.head.props.ref,
    className: (r = e.head.props.className) !== null && r !== void 0 ? r : "react-aria-TableHeader",
    style: e.head.props.style
  }, t);
}
function A2(e) {
  let { collection: t, isDroppable: n } = e, r = bt({
    items: t.rows,
    children: ee((f) => {
      switch (f.type) {
        case "item":
          return /* @__PURE__ */ h.createElement(N2, {
            item: f
          });
        default:
          throw new Error("Unsupported node type in TableBody: " + f.type);
      }
    }, [])
  }), a = U(on), { dropState: i } = U(tt);
  var l;
  let o = n && !!i && ((l = i.isDropTarget({
    type: "root"
  })) !== null && l !== void 0 ? l : !1), u = t.body.props, s = {
    isDropTarget: o,
    isEmpty: t.size === 0
  }, d = te({
    ...u,
    id: void 0,
    children: void 0,
    defaultClassName: "react-aria-TableBody",
    values: s
  }), c;
  t.size === 0 && u.renderEmptyState && a && (c = /* @__PURE__ */ h.createElement("tr", {
    role: "row"
  }, /* @__PURE__ */ h.createElement("td", {
    role: "gridcell",
    colSpan: t.columnCount
  }, u.renderEmptyState(s))));
  let { rowGroupProps: b } = Um();
  return /* @__PURE__ */ h.createElement("tbody", {
    ...j(Y(u), b),
    ...d,
    ref: t.body.props.ref,
    "data-empty": t.size === 0 || void 0
  }, n && /* @__PURE__ */ h.createElement(O2, null), r, c);
}
function T2({ item: e }) {
  let t = I(null), n = U(on), { rowProps: r } = S5({
    node: e
  }, n, t), { checkboxProps: a } = F5(n), i = bt({
    items: n.collection.getChildren(e.key),
    children: (l) => {
      switch (l.type) {
        case "column":
          return /* @__PURE__ */ h.createElement(M2, {
            column: l
          });
        default:
          throw new Error("Unsupported node type in Row: " + l.type);
      }
    }
  });
  return /* @__PURE__ */ h.createElement("tr", {
    ...r,
    ref: t
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        xi,
        {
          slots: {
            selection: a
          }
        }
      ]
    ]
  }, i));
}
const Kv = /* @__PURE__ */ W(null);
function M2({ column: e }) {
  var t, n;
  let r = Me(e.props.ref), a = U(on), { columnHeaderProps: i } = P5({
    node: e
  }, a, r), { isFocused: l, isFocusVisible: o, focusProps: u } = pe(), s = U(Xo), d = !1;
  if (s)
    d = s.resizingColumn === e.key;
  else
    for (let v in [
      "width",
      "defaultWidth",
      "minWidth",
      "maxWidth"
    ])
      v in e.props && console.warn(`The ${v} prop on a <Column> only applies when a <Table> is wrapped in a <ResizableTableContainer>. If you aren't using column resizing, you can set the width of a column with CSS.`);
  let c = e.props, { hoverProps: b, isHovered: f } = xe({
    isDisabled: !c.allowsSorting
  }), p = te({
    ...c,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-Column",
    values: {
      isHovered: f,
      isFocused: l,
      isFocusVisible: o,
      allowsSorting: e.props.allowsSorting,
      sortDirection: ((t = a.sortDescriptor) === null || t === void 0 ? void 0 : t.column) === e.key ? a.sortDescriptor.direction : void 0,
      isResizing: d,
      startResize: () => {
        if (s)
          s.startResize(e.key), a.setKeyboardNavigationDisabled(!0);
        else
          throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
      },
      sort: (v) => {
        a.sort(e.key, v);
      }
    }
  }), m = p.style;
  return s && (m = {
    ...m,
    width: s.getColumnWidth(e.key)
  }), /* @__PURE__ */ h.createElement("th", {
    ...j(Y(c), i, u, b),
    ...p,
    style: m,
    colSpan: e.colspan,
    ref: r,
    "data-hovered": f || void 0,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    "data-resizing": d || void 0,
    "data-allows-sorting": e.props.allowsSorting || void 0,
    "data-sort-direction": ((n = a.sortDescriptor) === null || n === void 0 ? void 0 : n.column) === e.key ? a.sortDescriptor.direction : void 0
  }, /* @__PURE__ */ h.createElement(Kv.Provider, {
    value: {
      column: e,
      triggerRef: r
    }
  }, p.children));
}
function R2(e, t) {
  let n = U(Xo);
  if (!n)
    throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
  let r = Pe(/* @__PURE__ */ xh(Zo), "react-aria-components"), { onResizeStart: a, onResize: i, onResizeEnd: l } = U(Jo), { column: o, triggerRef: u } = U(Kv), s = I(null), { resizerProps: d, inputProps: c, isResizing: b } = A5({
    column: o,
    "aria-label": e["aria-label"] || r.format("tableResizer"),
    onResizeStart: a,
    onResize: i,
    onResizeEnd: l,
    triggerRef: u
  }, n, s), { focusProps: f, isFocused: p, isFocusVisible: m } = pe(), { hoverProps: v, isHovered: y } = xe(e), $ = n.getColumnMinWidth(o.key) >= n.getColumnWidth(o.key), x = n.getColumnMaxWidth(o.key) <= n.getColumnWidth(o.key), { direction: C } = oe(), P = "both";
  $ ? P = C === "rtl" ? "right" : "left" : x ? P = C === "rtl" ? "left" : "right" : P = "both";
  let B = Me(t), [R, g] = Z("");
  J(() => {
    if (!B.current)
      return;
    let w = window.getComputedStyle(B.current);
    g(w.cursor);
  }, [
    B,
    P
  ]);
  let M = te({
    ...e,
    defaultClassName: "react-aria-ColumnResizer",
    values: {
      isFocused: p,
      isFocusVisible: m,
      isResizing: b,
      isHovered: y,
      resizableDirection: P
    }
  }), [F, E] = Z(!1), S = (w) => {
    w.pointerType === "mouse" && E(!0);
  };
  return !b && F && E(!1), /* @__PURE__ */ h.createElement("div", {
    ref: B,
    role: "presentation",
    ...M,
    ...j(d, {
      onPointerDown: S
    }, v),
    "data-hovered": y || void 0,
    "data-focused": p || void 0,
    "data-focus-visible": m || void 0,
    "data-resizing": b || void 0,
    "data-resizable-direction": P
  }, M.children, /* @__PURE__ */ h.createElement("input", {
    ref: s,
    ...j(c, f)
  }), b && F && /* @__PURE__ */ Rr.createPortal(/* @__PURE__ */ h.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      cursor: R
    }
  }), document.body));
}
const I2 = /* @__PURE__ */ q(R2);
function N2({ item: e }) {
  let t = Me(e.props.ref), n = U(on), { dragAndDropHooks: r, dragState: a, dropState: i } = U(tt), { rowProps: l, ...o } = w5({
    node: e,
    shouldSelectOnPressUp: !!a
  }, n, t), { isFocused: u, isFocusVisible: s, focusProps: d } = pe(), { hoverProps: c, isHovered: b } = xe({
    isDisabled: !o.allowsSelection && !o.hasAction
  }), { checkboxProps: f } = k5({
    key: e.key
  }, n), p;
  a && r && (p = r.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, a));
  let m, v = I(null), { visuallyHiddenProps: y } = _t();
  i && r && (m = r.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, i, v));
  let $ = (r == null ? void 0 : r.renderDropIndicator) || ((F) => /* @__PURE__ */ h.createElement(jo, {
    target: F
  })), x = I(null);
  J(() => {
    a && !x.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []);
  let C = e.props, P = a && a.isDragging(e.key), { children: B, ...R } = C, g = te({
    ...R,
    id: void 0,
    defaultClassName: "react-aria-Row",
    values: {
      ...o,
      isHovered: b,
      isFocused: u,
      isFocusVisible: s,
      selectionMode: n.selectionManager.selectionMode,
      selectionBehavior: n.selectionManager.selectionBehavior,
      isDragging: P,
      isDropTarget: m == null ? void 0 : m.isDropTarget
    }
  }), M = bt({
    items: n.collection.getChildren(e.key),
    children: (F) => {
      switch (F.type) {
        case "cell":
          return /* @__PURE__ */ h.createElement(K2, {
            cell: F
          });
        default:
          throw new Error("Unsupported node type in Row: " + F.type);
      }
    }
  });
  return /* @__PURE__ */ h.createElement(h.Fragment, null, (r == null ? void 0 : r.useDropIndicator) && $({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), m && !m.isHidden && /* @__PURE__ */ h.createElement("tr", {
    role: "row",
    style: {
      height: 0
    }
  }, /* @__PURE__ */ h.createElement("td", {
    role: "gridcell",
    colSpan: n.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ h.createElement("div", {
    role: "button",
    ...y,
    ...m.dropIndicatorProps,
    ref: v
  }))), /* @__PURE__ */ h.createElement("tr", {
    ...j(Y(C), l, d, c, p == null ? void 0 : p.dragProps),
    ...g,
    ref: t,
    "data-disabled": o.isDisabled || void 0,
    "data-selected": o.isSelected || void 0,
    "data-hovered": b || void 0,
    "data-focused": o.isFocused || void 0,
    "data-focus-visible": s || void 0,
    "data-pressed": o.isPressed || void 0,
    "data-dragging": P || void 0,
    "data-drop-target": (m == null ? void 0 : m.isDropTarget) || void 0,
    "data-selection-mode": n.selectionManager.selectionMode === "none" ? void 0 : n.selectionManager.selectionMode
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        xi,
        {
          slots: {
            selection: f
          }
        }
      ],
      [
        mt,
        {
          slots: {
            [Br]: {},
            drag: {
              ...p == null ? void 0 : p.dragButtonProps,
              ref: x,
              style: {
                pointerEvents: "none"
              }
            }
          }
        }
      ]
    ]
  }, M)), (r == null ? void 0 : r.useDropIndicator) && n.collection.getKeyAfter(e.key) == null && $({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }));
}
function K2({ cell: e }) {
  let t = Me(e.props.ref), n = U(on), { dragState: r } = U(tt);
  e.column = n.collection.columns[e.index];
  let { gridCellProps: a, isPressed: i } = B5({
    node: e,
    shouldSelectOnPressUp: !!r
  }, n, t), { isFocused: l, isFocusVisible: o, focusProps: u } = pe(), { hoverProps: s, isHovered: d } = xe({}), c = e.props, b = te({
    ...c,
    id: void 0,
    defaultClassName: "react-aria-Cell",
    values: {
      isFocused: l,
      isFocusVisible: o,
      isPressed: i,
      isHovered: d
    }
  });
  return /* @__PURE__ */ h.createElement("td", {
    ...j(Y(c), a, u, s),
    ...b,
    ref: t,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    "data-pressed": i || void 0
  }, b.children);
}
function z2(e, t) {
  t = Me(t);
  let { dragAndDropHooks: n, dropState: r } = U(tt), a = I(null), { dropIndicatorProps: i, isHidden: l, isDropTarget: o } = n.useDropIndicator(e, r, a);
  return l ? null : /* @__PURE__ */ h.createElement(L2, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    buttonRef: a,
    ref: t
  });
}
function V2(e, t) {
  let { dropIndicatorProps: n, isDropTarget: r, buttonRef: a, ...i } = e, l = U(on), { visuallyHiddenProps: o } = _t(), u = te({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return /* @__PURE__ */ h.createElement("tr", {
    ...Y(e),
    ...u,
    role: "row",
    ref: t,
    "data-drop-target": r || void 0
  }, /* @__PURE__ */ h.createElement("td", {
    role: "gridcell",
    colSpan: l.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ h.createElement("div", {
    ...o,
    role: "button",
    ...n,
    ref: a
  }), u.children));
}
const L2 = /* @__PURE__ */ q(V2);
function O2() {
  let e = U(on), { dragAndDropHooks: t, dropState: n } = U(tt), r = I(null), { dropIndicatorProps: a } = t.useDropIndicator({
    target: {
      type: "root"
    }
  }, n, r), i = n.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: l } = _t();
  return !i && a["aria-hidden"] ? null : /* @__PURE__ */ h.createElement("tr", {
    role: "row",
    "aria-hidden": a["aria-hidden"],
    style: {
      height: 0
    }
  }, /* @__PURE__ */ h.createElement("td", {
    role: "gridcell",
    colSpan: e.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ h.createElement("div", {
    role: "button",
    ...l,
    ...a,
    ref: r
  })));
}
const Qo = /* @__PURE__ */ W(null), eu = /* @__PURE__ */ W(null);
function j2(e, t) {
  [e, t] = ne(e, t, Qo);
  let { collection: n, document: r } = Yr(), { children: a, orientation: i = "horizontal" } = e;
  return a = K(() => typeof a == "function" ? a({
    orientation: i
  }) : a, [
    a,
    i
  ]), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Vo, null, /* @__PURE__ */ h.createElement(wn.Provider, {
    value: r
  }, a)), /* @__PURE__ */ h.createElement(H2, {
    props: e,
    collection: n,
    tabsRef: t
  }));
}
function H2({ props: e, tabsRef: t, collection: n }) {
  let { orientation: r = "horizontal" } = e, a = C6({
    ...e,
    collection: n,
    children: void 0
  }), { focusProps: i, isFocused: l, isFocusVisible: o } = pe({
    within: !0
  }), u = K(() => ({
    orientation: r,
    isFocusWithin: l,
    isFocusVisible: o
  }), [
    r,
    l,
    o
  ]), s = te({
    ...e,
    defaultClassName: "react-aria-Tabs",
    values: u
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...Y(e),
    ...i,
    ...s,
    ref: t,
    slot: e.slot || void 0,
    "data-focused": l || void 0,
    "data-orientation": r,
    "data-focus-visible": o || void 0,
    "data-disabled": a.isDisabled || void 0
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Qo,
        e
      ],
      [
        eu,
        a
      ]
    ]
  }, s.children));
}
const _2 = /* @__PURE__ */ q(j2);
function U2(e, t) {
  return U(wn) ? /* @__PURE__ */ h.createElement(Ph, e) : /* @__PURE__ */ h.createElement(W2, {
    props: e,
    forwardedRef: t
  });
}
function W2({ props: e, forwardedRef: t }) {
  let n = U(eu), { orientation: r = "horizontal", keyboardActivation: a = "automatic" } = Jr(Qo), i = Me(t), { tabListProps: l } = I5({
    ...e,
    orientation: r,
    keyboardActivation: a
  }, n, i), o = te({
    ...e,
    children: null,
    defaultClassName: "react-aria-TabList",
    values: {
      orientation: r,
      state: n
    }
  }), u = Y(e);
  return delete u.id, /* @__PURE__ */ h.createElement("div", {
    ...u,
    ...l,
    ref: i,
    ...o,
    "data-orientation": r || void 0
  }, [
    ...n.collection
  ].map((s) => /* @__PURE__ */ h.createElement(Y2, {
    key: s.key,
    item: s,
    state: n
  })));
}
const G2 = /* @__PURE__ */ q(U2);
function Z2(e, t) {
  return pt("item", e, t, e.children);
}
const q2 = /* @__PURE__ */ q(Z2);
function Y2({ item: e, state: t }) {
  let n = Me(e.props.ref), { tabProps: r, isSelected: a, isDisabled: i, isPressed: l } = T5({
    key: e.key,
    ...e.props
  }, t, n), { focusProps: o, isFocused: u, isFocusVisible: s } = pe(), { hoverProps: d, isHovered: c } = xe({
    isDisabled: i
  }), b = te({
    ...e.props,
    children: e.rendered,
    defaultClassName: "react-aria-Tab",
    values: {
      isSelected: a,
      isDisabled: i,
      isFocused: u,
      isFocusVisible: s,
      isPressed: l,
      isHovered: c,
      state: t
    }
  }), f = e.props.href ? "a" : "div";
  return /* @__PURE__ */ h.createElement(f, {
    ...j(r, o, d, b),
    ref: n,
    "data-selected": a || void 0,
    "data-disabled": i || void 0,
    "data-focus-visible": s || void 0,
    "data-pressed": l || void 0,
    "data-hovered": c || void 0
  });
}
function J2(e, t) {
  const n = U(eu);
  let r = Me(t), { tabPanelProps: a } = M5(e, n, r), { focusProps: i, isFocused: l, isFocusVisible: o } = pe(), u = n.selectedKey === e.id, s = te({
    ...e,
    defaultClassName: "react-aria-TabPanel",
    values: {
      isFocused: l,
      isFocusVisible: o,
      isInert: !u,
      state: n
    }
  });
  if (!u && !e.shouldForceMount)
    return null;
  let d = Y(e);
  delete d.id;
  let c = u ? j(d, a, i, s) : s;
  return /* @__PURE__ */ h.createElement("div", {
    ...c,
    ref: r,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    // @ts-ignore
    inert: u ? void 0 : "true",
    "data-inert": u ? void 0 : "true"
  });
}
const X2 = /* @__PURE__ */ hi(J2), Q2 = /* @__PURE__ */ W(null), zv = /* @__PURE__ */ W(null);
function e7(e, t) {
  [e, t] = ne(e, t, Q2);
  let n = I(null), [r, a] = Ve(), { collection: i, document: l } = Yr(), o = pi({
    ...e,
    children: void 0,
    collection: i
  }), u = Y(e), s = Object.fromEntries(Object.entries(u).map(([m]) => [
    m,
    void 0
  ])), { gridProps: d, labelProps: c, descriptionProps: b, errorMessageProps: f } = K5({
    ...e,
    ...s,
    label: a
  }, o, n);
  var p;
  return /* @__PURE__ */ h.createElement("div", {
    ...u,
    ref: t,
    slot: e.slot || void 0,
    className: (p = e.className) !== null && p !== void 0 ? p : "react-aria-TagGroup",
    style: e.style
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Le,
        {
          ...c,
          elementType: "span",
          ref: r
        }
      ],
      [
        zv,
        {
          ...d,
          ref: n
        }
      ],
      [
        Ct,
        o
      ],
      [
        wn,
        l
      ],
      [
        Re,
        {
          slots: {
            description: b,
            errorMessage: f
          }
        }
      ]
    ]
  }, e.children));
}
const t7 = /* @__PURE__ */ q(e7);
function n7(e, t) {
  let n = Ko(e);
  return /* @__PURE__ */ h.createElement(h.Fragment, null, n, /* @__PURE__ */ h.createElement(r7, {
    props: e,
    forwardedRef: t
  }));
}
function r7({ props: e, forwardedRef: t }) {
  let n = U(Ct), [r, a] = ne(e, t, zv);
  delete r.items, delete r.renderEmptyState;
  let i = bt({
    items: n.collection,
    children: (c) => {
      switch (c.type) {
        case "item":
          return /* @__PURE__ */ h.createElement(o7, {
            item: c
          });
        default:
          throw new Error("Unsupported node type in TagList: " + c.type);
      }
    }
  }), { focusProps: l, isFocused: o, isFocusVisible: u } = pe(), s = {
    isEmpty: n.collection.size === 0,
    isFocused: o,
    isFocusVisible: u,
    state: n
  }, d = te({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-TagList",
    values: s
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...j(r, l),
    ...d,
    ref: a,
    "data-empty": n.collection.size === 0 || void 0,
    "data-focused": o || void 0,
    "data-focus-visible": u || void 0
  }, n.collection.size === 0 && e.renderEmptyState ? e.renderEmptyState(s) : i);
}
const a7 = /* @__PURE__ */ q(n7);
function i7(e, t) {
  return pt("item", e, t, e.children);
}
const l7 = /* @__PURE__ */ q(i7);
function o7({ item: e }) {
  let t = U(Ct), n = Me(e.props.ref), { focusProps: r, isFocusVisible: a } = pe({
    within: !0
  }), { rowProps: i, gridCellProps: l, removeButtonProps: o, ...u } = z5({
    item: e
  }, t, n), { hoverProps: s, isHovered: d } = xe({
    isDisabled: !u.allowsSelection
  }), c = e.props, b = te({
    ...c,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-Tag",
    values: {
      ...u,
      isFocusVisible: a,
      isHovered: d,
      selectionMode: t.selectionManager.selectionMode,
      selectionBehavior: t.selectionManager.selectionBehavior
    }
  });
  return J(() => {
    e.textValue || console.warn("A `textValue` prop is required for <Tag> elements with non-plain text children for accessibility.");
  }, [
    e.textValue
  ]), /* @__PURE__ */ h.createElement("div", {
    ref: n,
    ...b,
    ...j(Y(c), i, r, s),
    "data-selected": u.isSelected || void 0,
    "data-disabled": u.isDisabled || void 0,
    "data-hovered": d || void 0,
    "data-focused": u.isFocused || void 0,
    "data-focus-visible": a || void 0,
    "data-pressed": u.isPressed || void 0,
    "data-allows-removing": u.allowsRemoving || void 0,
    "data-selection-mode": t.selectionManager.selectionMode === "none" ? void 0 : t.selectionManager.selectionMode
  }, /* @__PURE__ */ h.createElement("div", {
    ...l,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        mt,
        {
          slots: {
            remove: o
          }
        }
      ]
    ]
  }, b.children)));
}
const u7 = /* @__PURE__ */ W({}), s7 = /* @__PURE__ */ W(null);
function d7(e, t) {
  [e, t] = ne(e, t, s7);
  let n = I(null), [r, a] = Ve(), [i, l] = Z("input");
  var o;
  let { labelProps: u, inputProps: s, descriptionProps: d, errorMessageProps: c, ...b } = di({
    ...ct(e),
    inputElementType: i,
    label: a,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, n), f = ee((m) => {
    n.current = m, m && l(m instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, []), p = te({
    ...e,
    values: {
      isDisabled: e.isDisabled || !1,
      isInvalid: b.isInvalid
    },
    defaultClassName: "react-aria-TextField"
  });
  return /* @__PURE__ */ h.createElement("div", {
    ...Y(e),
    ...p,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": b.isInvalid || void 0
  }, /* @__PURE__ */ h.createElement(de, {
    values: [
      [
        Le,
        {
          ...u,
          ref: r
        }
      ],
      [
        ln,
        {
          ...s,
          ref: f
        }
      ],
      [
        u7,
        {
          ...s,
          ref: f
        }
      ],
      [
        Re,
        {
          slots: {
            description: d,
            errorMessage: c
          }
        }
      ],
      [
        et,
        b
      ]
    ]
  }, p.children));
}
const c7 = /* @__PURE__ */ q(d7), f7 = /* @__PURE__ */ W({});
function b7(e, t) {
  [e, t] = ne(e, t, f7);
  let n = oi(e), { buttonProps: r, isPressed: a } = U1(e, n, t), { focusProps: i, isFocused: l, isFocusVisible: o } = pe(e), { hoverProps: u, isHovered: s } = xe(e), d = te({
    ...e,
    values: {
      isHovered: s,
      isPressed: a,
      isFocused: l,
      isSelected: n.isSelected,
      isFocusVisible: o,
      isDisabled: e.isDisabled || !1,
      state: n
    },
    defaultClassName: "react-aria-ToggleButton"
  });
  return /* @__PURE__ */ h.createElement("button", {
    ...j(r, i, u),
    ...d,
    ref: t,
    slot: e.slot || void 0,
    "data-focused": l || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-pressed": a || void 0,
    "data-selected": n.isSelected || void 0,
    "data-hovered": s || void 0,
    "data-focus-visible": o || void 0
  });
}
const p7 = /* @__PURE__ */ q(b7), m7 = /* @__PURE__ */ W({});
function h7(e, t) {
  [e, t] = ne(e, t, m7);
  let { toolbarProps: n } = yh(e, t), r = te({
    ...e,
    values: {
      orientation: e.orientation || "horizontal"
    },
    defaultClassName: "react-aria-Toolbar"
  }), a = Y(e);
  return delete a.id, /* @__PURE__ */ h.createElement("div", {
    ...j(n, a),
    ...r,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "horizontal"
  }, r.children);
}
const v7 = /* @__PURE__ */ q(h7), Vv = /* @__PURE__ */ W(null), g7 = /* @__PURE__ */ W(null);
function $7({ UNSTABLE_portalContainer: e, ...t }, n) {
  [t, n] = ne(t, n, g7);
  let r = U(Vv), a = w6(t), i = t.isOpen != null || t.defaultOpen != null || !r ? a : r, l = Za(n, i.isOpen) || t.isExiting || !1;
  return !i.isOpen && !l ? null : /* @__PURE__ */ h.createElement(Sy, {
    portalContainer: e
  }, /* @__PURE__ */ h.createElement(x7, {
    ...t,
    tooltipRef: n,
    isExiting: l
  }));
}
const y7 = /* @__PURE__ */ q($7);
function x7(e) {
  let t = U(Vv), { overlayProps: n, arrowProps: r, placement: a } = kc({
    placement: e.placement || "top",
    targetRef: e.triggerRef,
    overlayRef: e.tooltipRef,
    offset: e.offset,
    crossOffset: e.crossOffset,
    isOpen: t.isOpen
  }), i = mi(e.tooltipRef, !!a) || e.isEntering || !1, l = te({
    ...e,
    defaultClassName: "react-aria-Tooltip",
    values: {
      placement: a,
      isEntering: i,
      isExiting: e.isExiting,
      state: t
    }
  });
  e = j(e, n);
  let { tooltipProps: o } = V5(e, t);
  return /* @__PURE__ */ h.createElement("div", {
    ...o,
    ref: e.tooltipRef,
    ...l,
    style: {
      ...n.style,
      ...l.style
    },
    "data-placement": a,
    "data-entering": i || void 0,
    "data-exiting": e.isExiting || void 0
  }, /* @__PURE__ */ h.createElement(Wo.Provider, {
    value: {
      ...r,
      placement: a
    }
  }, l.children));
}
var ks = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ye = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, D7 = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Lv(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? Lv(n, t) : t.push(n);
  });
}
function Ov(e) {
  let t = [];
  return Lv(e, t), t;
}
var jv = (...e) => Ov(e).filter(Boolean), Hv = (e, t) => {
  let n = {}, r = Object.keys(e), a = Object.keys(t);
  for (let i of r)
    if (a.includes(i)) {
      let l = e[i], o = t[i];
      typeof l == "object" && typeof o == "object" ? n[i] = Hv(l, o) : Array.isArray(l) || Array.isArray(o) ? n[i] = jv(o, l) : n[i] = o + " " + l;
    } else
      n[i] = e[i];
  for (let i of a)
    r.includes(i) || (n[i] = t[i]);
  return n;
}, Fs = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function C7() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = _v(t)) && (r && (r += " "), r += n);
  return r;
}
function _v(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = _v(e[r])) && (n && (n += " "), n += t);
  return n;
}
var tu = "-";
function E7(e) {
  var t = w7(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, a = r === void 0 ? {} : r;
  function i(o) {
    var u = o.split(tu);
    return u[0] === "" && u.length !== 1 && u.shift(), Uv(u, t) || P7(o);
  }
  function l(o, u) {
    var s = n[o] || [];
    return u && a[o] ? [].concat(s, a[o]) : s;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: l
  };
}
function Uv(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), a = r ? Uv(e.slice(1), r) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var i = e.join(tu);
    return (l = t.validators.find(function(o) {
      var u = o.validator;
      return u(i);
    })) == null ? void 0 : l.classGroupId;
  }
}
var As = /^\[(.+)\]$/;
function P7(e) {
  if (As.test(e)) {
    var t = As.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function w7(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = B7(Object.entries(e.classGroups), n);
  return a.forEach(function(i) {
    var l = i[0], o = i[1];
    jl(o, r, l, t);
  }), r;
}
function jl(e, t, n, r) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var i = a === "" ? t : Ts(t, a);
      i.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (S7(a)) {
        jl(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(function(l) {
      var o = l[0], u = l[1];
      jl(u, Ts(t, o), n, r);
    });
  });
}
function Ts(e, t) {
  var n = e;
  return t.split(tu).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function S7(e) {
  return e.isThemeGetter;
}
function B7(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], a = n[1], i = a.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(o) {
        var u = o[0], s = o[1];
        return [t + u, s];
      })) : l;
    });
    return [r, i];
  }) : e;
}
function k7(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function a(i, l) {
    n.set(i, l), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var o = n.get(l);
      if (o !== void 0)
        return o;
      if ((o = r.get(l)) !== void 0)
        return a(l, o), o;
    },
    set: function(l, o) {
      n.has(l) ? n.set(l, o) : a(l, o);
    }
  };
}
var Wv = "!";
function F7(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], a = t.length;
  return function(l) {
    for (var o = [], u = 0, s = 0, d, c = 0; c < l.length; c++) {
      var b = l[c];
      if (u === 0) {
        if (b === r && (n || l.slice(c, c + a) === t)) {
          o.push(l.slice(s, c)), s = c + a;
          continue;
        }
        if (b === "/") {
          d = c;
          continue;
        }
      }
      b === "[" ? u++ : b === "]" && u--;
    }
    var f = o.length === 0 ? l : l.substring(s), p = f.startsWith(Wv), m = p ? f.substring(1) : f, v = d && d > s ? d - s : void 0;
    return {
      modifiers: o,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
}
function A7(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var a = r[0] === "[";
    a ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function T7(e) {
  return {
    cache: k7(e.cacheSize),
    splitModifiers: F7(e),
    ...E7(e)
  };
}
var M7 = /\s+/;
function R7(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, a = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(M7).map(function(l) {
    var o = n(l), u = o.modifiers, s = o.hasImportantModifier, d = o.baseClassName, c = o.maybePostfixModifierPosition, b = r(c ? d.substring(0, c) : d), f = !!c;
    if (!b) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (b = r(d), !b)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      f = !1;
    }
    var p = A7(u).join(":"), m = s ? p + Wv : p;
    return {
      isTailwindClass: !0,
      modifierId: m,
      classGroupId: b,
      originalClassName: l,
      hasPostfixModifier: f
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var o = l.modifierId, u = l.classGroupId, s = l.hasPostfixModifier, d = o + u;
    return i.has(d) ? !1 : (i.add(d), a(u, s).forEach(function(c) {
      return i.add(o + c);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function Hl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, a, i, l = o;
  function o(s) {
    var d = t[0], c = t.slice(1), b = c.reduce(function(f, p) {
      return p(f);
    }, d());
    return r = T7(b), a = r.cache.get, i = r.cache.set, l = u, u(s);
  }
  function u(s) {
    var d = a(s);
    if (d)
      return d;
    var c = R7(s, r);
    return i(s, c), c;
  }
  return function() {
    return l(C7.apply(null, arguments));
  };
}
function $e(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Gv = /^\[(?:([a-z-]+):)?(.+)\]$/i, I7 = /^\d+\/\d+$/, N7 = /* @__PURE__ */ new Set(["px", "full", "screen"]), K7 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, z7 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, V7 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function gt(e) {
  return mn(e) || N7.has(e) || I7.test(e) || _l(e);
}
function _l(e) {
  return Sn(e, "length", U7);
}
function L7(e) {
  return Sn(e, "size", Zv);
}
function O7(e) {
  return Sn(e, "position", Zv);
}
function j7(e) {
  return Sn(e, "url", W7);
}
function va(e) {
  return Sn(e, "number", mn);
}
function mn(e) {
  return !Number.isNaN(Number(e));
}
function H7(e) {
  return e.endsWith("%") && mn(e.slice(0, -1));
}
function or(e) {
  return Ms(e) || Sn(e, "number", Ms);
}
function le(e) {
  return Gv.test(e);
}
function ur() {
  return !0;
}
function Wt(e) {
  return K7.test(e);
}
function _7(e) {
  return Sn(e, "", G7);
}
function Sn(e, t, n) {
  var r = Gv.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function U7(e) {
  return z7.test(e);
}
function Zv() {
  return !1;
}
function W7(e) {
  return e.startsWith("url(");
}
function Ms(e) {
  return Number.isInteger(Number(e));
}
function G7(e) {
  return V7.test(e);
}
function Ul() {
  var e = $e("colors"), t = $e("spacing"), n = $e("blur"), r = $e("brightness"), a = $e("borderColor"), i = $e("borderRadius"), l = $e("borderSpacing"), o = $e("borderWidth"), u = $e("contrast"), s = $e("grayscale"), d = $e("hueRotate"), c = $e("invert"), b = $e("gap"), f = $e("gradientColorStops"), p = $e("gradientColorStopPositions"), m = $e("inset"), v = $e("margin"), y = $e("opacity"), $ = $e("padding"), x = $e("saturate"), C = $e("scale"), P = $e("sepia"), B = $e("skew"), R = $e("space"), g = $e("translate"), M = function() {
    return ["auto", "contain", "none"];
  }, F = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, E = function() {
    return ["auto", le, t];
  }, S = function() {
    return [le, t];
  }, w = function() {
    return ["", gt];
  }, A = function() {
    return ["auto", mn, le];
  }, z = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, T = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, D = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, H = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, _ = function() {
    return ["", "0", le];
  }, L = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, V = function() {
    return [mn, va];
  }, N = function() {
    return [mn, le];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ur],
      spacing: [gt],
      blur: ["none", "", Wt, le],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Wt, le],
      borderSpacing: S(),
      borderWidth: w(),
      contrast: V(),
      grayscale: _(),
      hueRotate: N(),
      invert: _(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [H7, _l],
      inset: E(),
      margin: E(),
      opacity: V(),
      padding: S(),
      saturate: V(),
      scale: V(),
      sepia: _(),
      skew: N(),
      space: S(),
      translate: S()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", le]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Wt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": L()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": L()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(z(), [le])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", or]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: E()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: _()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: _()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", or]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ur]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", or]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": A()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": A()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ur]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [or]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": A()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": A()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(H())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(H(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(H(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [$]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [$]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [$]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [$]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [$]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [$]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [$]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [$]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [$]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [R]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [R]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", le, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", le, gt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Wt]
        }, Wt, le]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", le, gt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Wt, _l]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", va]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ur]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", mn, va]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", le, gt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(T(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", gt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", le, gt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", le]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(z(), [O7])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", L7]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, j7]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [p]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [o]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [o]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [o]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [o]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [o]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [o]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [o]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [o]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [o]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(T(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [o]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [o]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: T()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(T())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [le, gt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [gt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: w()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [gt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Wt, _7]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ur]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": D()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": D()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Wt, le]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [s]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [P]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [s]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [P]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: N()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", le]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: N()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [or, le]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [g]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [g]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [B]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [B]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", le]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [gt, va]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
function Z7(e, t) {
  for (var n in t)
    qv(e, n, t[n]);
  return e;
}
var q7 = Object.prototype.hasOwnProperty, Y7 = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function qv(e, t, n) {
  if (!q7.call(e, t) || Y7.has(typeof n) || n === null) {
    e[t] = n;
    return;
  }
  if (Array.isArray(n) && Array.isArray(e[t])) {
    e[t] = e[t].concat(n);
    return;
  }
  if (typeof n == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = n;
      return;
    }
    for (var r in n)
      qv(e[t], r, n[r]);
  }
}
function J7(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? Hl.apply(void 0, [Ul, e].concat(n)) : Hl.apply(void 0, [function() {
    return Z7(Ul(), e);
  }].concat(n));
}
var ht = /* @__PURE__ */ Hl(Ul), X7 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Yv = (e) => e || void 0, Fr = (...e) => Yv(Ov(e).filter(Boolean).join(" ")), il = null, qa = {}, Wl = !1, sr = (...e) => (t) => t.twMerge ? ((!il || Wl) && (Wl = !1, il = Ye(qa) ? ht : J7(qa)), Yv(il(Fr(e)))) : Fr(e), Rs = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = Fr(e[n], t[n]) : e[n] = t[n];
  return e;
}, ie = (e, t) => {
  let { extend: n = null, slots: r = {}, variants: a = {}, compoundVariants: i = [], compoundSlots: l = [], defaultVariants: o = {} } = e, u = { ...X7, ...t }, s = n != null && n.base ? Fr(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = n != null && n.variants && !Ye(n.variants) ? Hv(a, n.variants) : a, c = n != null && n.defaultVariants && !Ye(n.defaultVariants) ? { ...n.defaultVariants, ...o } : o;
  !Ye(u.twMergeConfig) && !D7(u.twMergeConfig, qa) && (Wl = !0, qa = u.twMergeConfig);
  let b = Ye(n == null ? void 0 : n.slots), f = Ye(r) ? {} : { base: Fr(e == null ? void 0 : e.base, b && (n == null ? void 0 : n.base)), ...r }, p = b ? f : Rs({ ...n == null ? void 0 : n.slots }, Ye(f) ? { base: e == null ? void 0 : e.base } : f), m = (y) => {
    if (Ye(d) && Ye(r) && b)
      return sr(s, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(u);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let $ = (S, w, A = [], z) => {
      let T = A;
      if (typeof w == "string")
        T = T.concat(Fs(w).split(" ").map((D) => `${S}:${D}`));
      else if (Array.isArray(w))
        T = T.concat(w.reduce((D, H) => D.concat(`${S}:${H}`), []));
      else if (typeof w == "object" && typeof z == "string") {
        for (let D in w)
          if (w.hasOwnProperty(D) && D === z) {
            let H = w[D];
            if (H && typeof H == "string") {
              let _ = Fs(H);
              T[z] ? T[z] = T[z].concat(_.split(" ").map((L) => `${S}:${L}`)) : T[z] = _.split(" ").map((L) => `${S}:${L}`);
            } else
              Array.isArray(H) && H.length > 0 && (T[z] = H.reduce((_, L) => _.concat(`${S}:${L}`), []));
          }
      }
      return T;
    }, x = (S, w = d, A = null, z = null) => {
      var T;
      let D = w[S];
      if (!D || Ye(D))
        return null;
      let H = (T = z == null ? void 0 : z[S]) != null ? T : y == null ? void 0 : y[S];
      if (H === null)
        return null;
      let _ = ks(H), L = Array.isArray(u.responsiveVariants) && u.responsiveVariants.length > 0 || u.responsiveVariants === !0, V = c == null ? void 0 : c[S], N = [];
      if (typeof _ == "object" && L)
        for (let [re, se] of Object.entries(_)) {
          let we = D[se];
          if (re === "initial") {
            V = se;
            continue;
          }
          Array.isArray(u.responsiveVariants) && !u.responsiveVariants.includes(re) || (N = $(re, we, N, A));
        }
      let G = D[_] || D[ks(V)];
      return typeof N == "object" && typeof A == "string" && N[A] ? Rs(N, G) : N.length > 0 ? (N.push(G), N) : G;
    }, C = () => d ? Object.keys(d).map((S) => x(S, d)) : null, P = (S, w) => {
      if (!d || typeof d != "object")
        return null;
      let A = new Array();
      for (let z in d) {
        let T = x(z, d, S, w), D = S === "base" && typeof T == "string" ? T : T && T[S];
        D && (A[A.length] = D);
      }
      return A;
    }, B = {};
    for (let S in y)
      y[S] !== void 0 && (B[S] = y[S]);
    let R = (S, w) => {
      var A;
      let z = typeof (y == null ? void 0 : y[S]) == "object" ? { [S]: (A = y[S]) == null ? void 0 : A.initial } : {};
      return { ...c, ...B, ...z, ...w };
    }, g = (S = [], w) => {
      let A = [];
      for (let { class: z, className: T, ...D } of S) {
        let H = !0;
        for (let [_, L] of Object.entries(D)) {
          let V = R(_, w);
          if (Array.isArray(L)) {
            if (!L.includes(V[_])) {
              H = !1;
              break;
            }
          } else if (V[_] !== L) {
            H = !1;
            break;
          }
        }
        H && (z && A.push(z), T && A.push(T));
      }
      return A;
    }, M = (S) => {
      let w = g(i, S), A = g(n == null ? void 0 : n.compoundVariants, S);
      return jv(A, w);
    }, F = (S) => {
      let w = M(S);
      if (!Array.isArray(w))
        return w;
      let A = {};
      for (let z of w)
        if (typeof z == "string" && (A.base = sr(A.base, z)(u)), typeof z == "object")
          for (let [T, D] of Object.entries(z))
            A[T] = sr(A[T], D)(u);
      return A;
    }, E = (S) => {
      if (l.length < 1)
        return null;
      let w = {};
      for (let { slots: A = [], class: z, className: T, ...D } of l) {
        if (!Ye(D)) {
          let H = !0;
          for (let _ of Object.keys(D)) {
            let L = R(_, S)[_];
            if (L === void 0 || (Array.isArray(D[_]) ? !D[_].includes(L) : D[_] !== L)) {
              H = !1;
              break;
            }
          }
          if (!H)
            continue;
        }
        for (let H of A)
          w[H] = w[H] || [], w[H].push([z, T]);
      }
      return w;
    };
    if (!Ye(r) || !b) {
      let S = {};
      if (typeof p == "object" && !Ye(p))
        for (let w of Object.keys(p))
          S[w] = (A) => {
            var z, T;
            return sr(p[w], P(w, A), ((z = F(A)) != null ? z : [])[w], ((T = E(A)) != null ? T : [])[w], A == null ? void 0 : A.class, A == null ? void 0 : A.className)(u);
          };
      return S;
    }
    return sr(s, C(), M(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(u);
  }, v = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return m.variantKeys = v(), m.extend = n, m.base = s, m.slots = p, m.variants = d, m.defaultVariants = c, m.compoundSlots = l, m.compoundVariants = i, m;
};
const Be = ie({
  base: "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-1",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2"
    }
  }
});
function nt(e, t) {
  return me(e, (n) => ht(t, n));
}
const rt = ie({
  slots: {
    base: "flex flex-1",
    label: "pt-0"
  },
  variants: {
    orientation: {
      horizontal: {
        base: ""
      },
      vertical: {
        base: ""
      }
    },
    labelPosition: {
      top: {
        base: "flex-col gap-1 items-start"
      },
      side: {
        base: "flex-row gap-4 items-center"
      }
    },
    labelAlign: {
      start: {
        base: "items-start",
        label: "pt-[0.375em]"
      },
      center: {
        base: "items-center",
        label: "pt-0"
      },
      end: {
        base: "items-end",
        label: "pt-0"
      }
    },
    isInvalid: {
      true: {
        label: ""
      }
    },
    isRequired: {
      true: {
        label: '[&::after]:content-["*"] [&::after]:text-red-700 [&::after]:p-1'
      }
    },
    isDisabled: {
      true: {
        label: 'text-gray-200 dark:text-gray-700 [&::after]:content-[""]'
      }
    }
  },
  defaultVariants: {
    labelPosition: "top",
    labelAlign: "start"
  }
}), Q7 = ie({
  extend: Be,
  base: "select-none px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default",
  variants: {
    variant: {
      primary: "bg-blue-600 hover:bg-blue-700 pressed:bg-blue-800 text-white",
      secondary: "bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100",
      destructive: "bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white",
      icon: "border-0 p-1 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent"
    },
    isDisabled: {
      true: "bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
function rn(e) {
  return /* @__PURE__ */ k(
    Jn,
    {
      ...e,
      className: me(
        e.className,
        (t, n) => Q7({ ...n, variant: e.variant, className: t })
      )
    }
  );
}
function nu(e) {
  return /* @__PURE__ */ k(
    Ox,
    {
      ...e,
      className: ht(
        "relative max-h-[inherit] overflow-auto p-6 outline outline-0 [[data-placement]>&]:p-4",
        e.className
      )
    }
  );
}
function U8({
  title: e,
  variant: t,
  cancelLabel: n,
  actionLabel: r,
  onAction: a,
  children: i,
  ...l
}) {
  return /* @__PURE__ */ k(nu, { role: "alertdialog", ...l, children: ({ close: o }) => /* @__PURE__ */ Q(Xe, { children: [
    /* @__PURE__ */ k(
      Ah,
      {
        slot: "title",
        className: "my-0 text-xl font-semibold leading-6",
        children: e
      }
    ),
    /* @__PURE__ */ k(
      "div",
      {
        className: `absolute right-6 top-6 h-6 w-6 stroke-2 ${t === "destructive" ? "text-red-500" : "text-blue-500"}`,
        children: t === "destructive" ? /* @__PURE__ */ k(cg, { "aria-hidden": !0 }) : /* @__PURE__ */ k(mg, { "aria-hidden": !0 })
      }
    ),
    /* @__PURE__ */ k("p", { className: "mt-3 text-slate-500 dark:text-zinc-400", children: i }),
    /* @__PURE__ */ Q("div", { className: "mt-6 flex justify-end gap-2", children: [
      /* @__PURE__ */ k(rn, { variant: "secondary", onPress: o, children: n || "Cancel" }),
      /* @__PURE__ */ k(
        rn,
        {
          variant: t === "destructive" ? "destructive" : "primary",
          autoFocus: !0,
          onPress: Cg(a, o),
          children: r
        }
      )
    ] })
  ] }) });
}
const e8 = ie({
  extend: Be,
  base: "underline disabled:no-underline disabled:cursor-default forced-colors:disabled:text-[GrayText] transition rounded",
  variants: {
    variant: {
      primary: "text-blue-600 dark:text-blue-500 underline decoration-blue-600/60 hover:decoration-blue-600 dark:decoration-blue-500/60 dark:hover:decoration-blue-500",
      secondary: "text-gray-700 dark:text-zinc-300 underline decoration-gray-700/50 hover:decoration-gray-700 dark:decoration-zinc-300/70 dark:hover:decoration-zinc-300"
    },
    isFocusVisible: {
      true: "outline-offset-2"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
function t8(e) {
  return /* @__PURE__ */ k(
    _6,
    {
      ...e,
      className: me(
        e.className,
        (t, n) => e8({ ...n, className: t, variant: e.variant })
      )
    }
  );
}
function W8(e) {
  return /* @__PURE__ */ k(
    Z6,
    {
      ...e,
      className: ht("flex gap-1", e.className)
    }
  );
}
function G8(e) {
  return /* @__PURE__ */ Q(
    Y6,
    {
      ...e,
      className: ht("flex items-center gap-1", e.className),
      children: [
        /* @__PURE__ */ k(t8, { variant: "secondary", ...e }),
        e.href && /* @__PURE__ */ k(ll, { className: "h-3 w-3 text-gray-600 dark:text-zinc-400" })
      ]
    }
  );
}
const n8 = ie({
  extend: Be,
  base: "w-9 h-9 text-sm cursor-default rounded-full flex items-center justify-center forced-color-adjust-none",
  variants: {
    isSelected: {
      false: "text-zinc-900 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-700 pressed:bg-gray-200 dark:pressed:bg-zinc-600",
      true: "bg-blue-600 invalid:bg-red-600 text-white forced-colors:bg-[Highlight] forced-colors:invalid:bg-[Mark] forced-colors:text-[HighlightText]"
    },
    isDisabled: {
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]"
    }
  }
});
function r8({
  errorMessage: e,
  ...t
}) {
  return /* @__PURE__ */ Q(rx, { ...t, children: [
    /* @__PURE__ */ k(Jv, {}),
    /* @__PURE__ */ Q(Rh, { children: [
      /* @__PURE__ */ k(Xv, {}),
      /* @__PURE__ */ k(Lo, { children: (n) => /* @__PURE__ */ k(Kh, { date: n, className: n8 }) })
    ] }),
    e && /* @__PURE__ */ k(Xr, { slot: "errorMessage", className: "text-sm text-red-600", children: e })
  ] });
}
function Jv() {
  let { direction: e } = oe();
  return /* @__PURE__ */ Q("header", { className: "flex w-full items-center gap-1 px-1 pb-4", children: [
    /* @__PURE__ */ k(rn, { variant: "icon", slot: "previous", children: e === "rtl" ? /* @__PURE__ */ k(ll, { "aria-hidden": !0 }) : /* @__PURE__ */ k(su, { "aria-hidden": !0 }) }),
    /* @__PURE__ */ k(Ah, { className: "mx-2 flex-1 text-center text-xl font-semibold text-zinc-900 dark:text-zinc-200" }),
    /* @__PURE__ */ k(rn, { variant: "icon", slot: "next", children: e === "rtl" ? /* @__PURE__ */ k(su, { "aria-hidden": !0 }) : /* @__PURE__ */ k(ll, { "aria-hidden": !0 }) })
  ] });
}
function Xv() {
  return /* @__PURE__ */ k(Ih, { children: (e) => /* @__PURE__ */ k(Nh, { className: "text-xs font-semibold text-gray-500", children: e }) });
}
function He(e) {
  return /* @__PURE__ */ k(
    mx,
    {
      ...e,
      className: ht(
        "w-fit cursor-default text-sm font-medium text-gray-500 dark:text-zinc-400",
        e.className
      )
    }
  );
}
function vt(e) {
  return /* @__PURE__ */ k(
    Xr,
    {
      ...e,
      slot: "description",
      className: ht("text-sm text-gray-600", e.className)
    }
  );
}
function Et(e) {
  return /* @__PURE__ */ k(
    fx,
    {
      ...e,
      className: nt(
        e.className,
        "text-sm text-red-600 forced-colors:text-[Mark]"
      )
    }
  );
}
const Ar = ie({
  variants: {
    isFocusWithin: {
      false: "border-gray-300 dark:border-zinc-500 forced-colors:border-[ButtonBorder]",
      true: "border-gray-600 dark:border-zinc-300 forced-colors:border-[Highlight]"
    },
    isInvalid: {
      true: "border-red-600 dark:border-red-600 forced-colors:border-[Mark]"
    },
    isDisabled: {
      true: "border-gray-200 dark:border-zinc-700 forced-colors:border-[GrayText]"
    }
  }
}), Qv = ie({
  extend: Be,
  base: "group flex items-center h-9 bg-white dark:bg-zinc-900 forced-colors:bg-[Field] border rounded-lg overflow-hidden",
  variants: Ar.variants,
  compoundVariants: [
    {
      isFocusWithin: !0,
      isFocusVisible: !1,
      class: "outline-2 -outline-offset-1"
    }
  ]
});
function na(e) {
  return /* @__PURE__ */ k(
    Oo,
    {
      ...e,
      className: me(
        e.className,
        (t, n) => Qv({ ...n, className: t })
      )
    }
  );
}
function Si(e) {
  return /* @__PURE__ */ k(
    Vh,
    {
      ...e,
      className: nt(
        e.className,
        "min-w-0 flex-1 bg-white px-2 py-1.5 text-sm text-gray-800 outline outline-0 disabled:text-gray-200 dark:bg-zinc-900 dark:text-zinc-200 dark:disabled:text-zinc-600"
      )
    }
  );
}
const eg = h.createContext({}), a8 = () => h.useContext(eg);
function i8({
  label: e,
  presets: t,
  ...n
}) {
  const [r, a] = h.useState(!1), [i, l] = h.useState(!1), [o, u] = h.useState([]), [s, d] = h.useState([]), [c, b] = h.useState(!1), [f, p] = h.useState([]), [m, v] = h.useState([]), y = () => {
    const g = [];
    t.forEach((M) => {
      M.value.split(",").every((F) => m.includes(F.trim())) && g.push(M.value);
    }), d(g);
  };
  h.useEffect(() => {
    y(), b(m.length > 0 && m.length < f.length), l(m.length === f.length);
  }, [m]), h.useEffect(() => {
    v([
      .../* @__PURE__ */ new Set([
        ...o.map((g) => g.split(",").map((M) => M.trim())).flat()
      ])
    ]);
  }, [o]), h.useEffect(() => {
    v(r ? f : []);
  }, [r]);
  const $ = h.useCallback(
    (g) => p((M) => [.../* @__PURE__ */ new Set([...M, g])]),
    []
  ), x = h.useMemo(() => ({
    addItem: $
  }), []), C = (g) => {
    a(g), l(g), v(g ? f : []);
  }, { base: P, label: B } = rt(), R = h.useMemo(() => /* @__PURE__ */ k(
    Is,
    {
      value: s,
      onChange: u,
      orientation: n.orientation,
      className: "w-full",
      children: t && t.map((g) => /* @__PURE__ */ k(Tr, { value: g.value, children: g.label }))
    }
  ), [s, n.orientation]);
  return /* @__PURE__ */ Q(
    "div",
    {
      className: ht(
        P({
          labelPosition: n.labelPosition || "top",
          labelAlign: n.labelAlign || "start"
        }),
        n.className,
        "gap-4 rounded-lg border border-gray-500 p-6"
      ),
      children: [
        /* @__PURE__ */ Q("div", { className: "flex w-1/3 flex-col gap-4", children: [
          /* @__PURE__ */ k(
            He,
            {
              className: B({
                isRequired: n.isRequired,
                isDisabled: n.isDisabled
              }),
              children: e
            }
          ),
          /* @__PURE__ */ k(
            Tr,
            {
              isSelected: i,
              isIndeterminate: c,
              onChange: C,
              children: "All"
            }
          ),
          n.labelPosition === "side" && R
        ] }),
        /* @__PURE__ */ k(eg.Provider, { value: x, children: /* @__PURE__ */ k(
          Is,
          {
            value: m,
            onChange: v,
            ...n,
            className: "rounded border border-gray-300 p-4 dark:border-zinc-500 forced-colors:border-[ButtonBorder]",
            children: n.children
          }
        ) }),
        n.labelPosition !== "side" && R
      ]
    }
  );
}
h.forwardRef(i8);
function Is(e) {
  const { base: t, label: n } = rt();
  return /* @__PURE__ */ Q(
    yx,
    {
      ...e,
      className: me(
        e.className,
        (r, a) => t({
          labelAlign: e.labelAlign || "start",
          labelPosition: e.labelPosition || "top",
          orientation: e.orientation || "vertical",
          ...a,
          className: r
        })
      ),
      children: [
        e.label && /* @__PURE__ */ k(
          He,
          {
            className: n({
              isRequired: e.isRequired,
              isDisabled: e.isDisabled
            }),
            children: e.label
          }
        ),
        /* @__PURE__ */ Q(
          "div",
          {
            className: ht(
              "flex w-full flex-1 flex-wrap gap-1",
              e.orientation === "horizontal" ? "[&_label]:mr-5" : "flex-col"
            ),
            children: [
              e.children,
              e.description && /* @__PURE__ */ k(vt, { children: e.description }),
              /* @__PURE__ */ k(Et, { children: e.errorMessage })
            ]
          }
        )
      ]
    }
  );
}
const l8 = ie({
  base: "flex gap-2 items-center group text-sm transition",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-200",
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]"
    }
  }
}), o8 = ie({
  extend: Be,
  base: "w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border-2 outline-offset-2 transition",
  variants: {
    isSelected: {
      false: "bg-white dark:bg-zinc-900 border-[--color] [--color:theme(colors.gray.400)] dark:[--color:colors.zinc-400)] group-pressed:[--color:theme(colors.gray.500)] dark:group-pressed:[--color:theme(colors.zinc.300)]",
      true: "bg-[--color] border-[--color] [--color:theme(colors.gray.700)] group-pressed:[--color:theme(colors.gray.800)] dark:[--color:theme(colors.slate.300)] dark:group-pressed:[--color:theme(colors.slate.200)] forced-colors:![--color:Highlight]"
    },
    isInvalid: {
      true: "[--color:theme(colors.red.700)] dark:[--color:theme(colors.red.600)] forced-colors:![--color:Mark] group-pressed:[--color:theme(colors.red.800)] dark:group-pressed:[--color:theme(colors.red.700)]"
    },
    isDisabled: {
      true: "[--color:theme(colors.gray.200)] dark:[--color:theme(colors.zinc.700)] forced-colors:![--color:GrayText]"
    }
  }
}), Ns = "w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]";
function Tr(e) {
  const { addItem: t } = a8();
  return h.useEffect(() => {
    t == null || t(e.value);
  }, []), /* @__PURE__ */ k(
    $x,
    {
      ...e,
      className: me(
        e.className,
        (n, r) => l8({ ...r, className: n })
      ),
      children: ({ isSelected: n, isIndeterminate: r, ...a }) => /* @__PURE__ */ Q(Xe, { children: [
        /* @__PURE__ */ k(
          "div",
          {
            className: o8({
              isSelected: n || r,
              ...a
            }),
            children: r ? /* @__PURE__ */ k(hg, { "aria-hidden": !0, className: Ns }) : n ? /* @__PURE__ */ k(Gl, { "aria-hidden": !0, className: Ns }) : null
          }
        ),
        e.children
      ] })
    }
  );
}
function Z8({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ k(
    Uo,
    {
      ...t,
      className: nt(
        t.className,
        "rounded-lg border border-gray-300 p-1 outline-0 dark:border-zinc-600"
      ),
      children: e
    }
  );
}
const u8 = ie({
  extend: Be,
  base: "group relative flex items-center gap-8 cursor-default select-none py-1.5 px-2.5 rounded-md will-change-transform text-sm forced-color-adjust-none",
  variants: {
    isSelected: {
      false: "text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700 -outline-offset-2",
      true: "bg-blue-600 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] [&:has(+[data-selected])]:rounded-b-none [&+[data-selected]]:rounded-t-none -outline-offset-4 outline-white dark:outline-white forced-colors:outline-[HighlightText]"
    },
    isDisabled: {
      true: "text-slate-300 dark:text-zinc-600 forced-colors:text-[GrayText]"
    }
  }
});
function q8(e) {
  let t = e.textValue || (typeof e.children == "string" ? e.children : void 0);
  return /* @__PURE__ */ k(Oh, { ...e, textValue: t, className: u8, children: me(e.children, (n) => /* @__PURE__ */ Q(Xe, { children: [
    n,
    /* @__PURE__ */ k("div", { className: "absolute bottom-0 left-4 right-4 hidden h-px bg-white/20 forced-colors:bg-[HighlightText] [.group[data-selected]:has(+[data-selected])_&]:block" })
  ] })) });
}
const tg = ie({
  base: "group flex items-center gap-4 cursor-default select-none py-2 pl-3 pr-1 rounded-lg outline outline-0 text-sm forced-color-adjust-none",
  variants: {
    isDisabled: {
      false: "text-gray-900 dark:text-zinc-100",
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]"
    },
    isFocused: {
      true: "bg-blue-600 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]"
    }
  }
});
function ng(e) {
  let t = e.textValue || (typeof e.children == "string" ? e.children : void 0);
  return /* @__PURE__ */ k(
    Oh,
    {
      ...e,
      textValue: t,
      className: tg,
      children: me(e.children, (n, { isSelected: r }) => /* @__PURE__ */ Q(Xe, { children: [
        /* @__PURE__ */ k("span", { className: "flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold", children: n }),
        /* @__PURE__ */ k("span", { className: "flex w-5 items-center", children: r && /* @__PURE__ */ k(Gl, { className: "h-4 w-4" }) })
      ] }))
    }
  );
}
function ru(e) {
  return /* @__PURE__ */ Q(L6, { className: "after:block after:h-[5px] after:content-[''] first:-mt-[5px]", children: [
    /* @__PURE__ */ k(Ho, { className: "sticky -top-[5px] z-10 -mx-1 -mt-px truncate border-y bg-gray-100/60 px-4 py-1 text-sm font-semibold text-gray-500 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:border-y-zinc-700 dark:bg-zinc-700/60 dark:text-zinc-300 [&+*]:mt-1", children: e.title }),
    /* @__PURE__ */ k(zo, { items: e.items, children: e.children })
  ] });
}
const s8 = ie({
  base: "bg-white dark:bg-zinc-900/70 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas] shadow-2xl rounded-xl bg-clip-padding border border-black/10 dark:border-white/[15%] text-slate-700 dark:text-zinc-300",
  variants: {
    isEntering: {
      true: "animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 ease-out duration-200"
    },
    isExiting: {
      true: "animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 ease-in duration-150"
    }
  }
});
function ra({
  children: e,
  showArrow: t,
  className: n,
  ...r
}) {
  return /* @__PURE__ */ Q(
    zx,
    {
      offset: t ? 12 : 8,
      ...r,
      className: me(
        n,
        (a, i) => s8({ ...i, className: a })
      ),
      children: [
        t && /* @__PURE__ */ k(Hh, { className: "group", children: /* @__PURE__ */ k(
          "svg",
          {
            width: 12,
            height: 12,
            viewBox: "0 0 12 12",
            className: "block fill-white stroke-black/10 stroke-1 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 dark:fill-[#1f1f21] dark:stroke-zinc-600 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
            children: /* @__PURE__ */ k("path", { d: "M0 0 L6 6 L12 0" })
          }
        ) }),
        e
      ]
    }
  );
}
function Y8({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  children: i,
  items: l,
  ...o
}) {
  const { base: u, label: s } = rt();
  return /* @__PURE__ */ Q(
    Wx,
    {
      ...o,
      className: me(
        o.className,
        (d, c) => u({
          labelAlign: t || n === "side" ? "center" : "start",
          labelPosition: n,
          ...c,
          className: d
        })
      ),
      children: [
        /* @__PURE__ */ k(
          He,
          {
            className: s({
              isRequired: o.isRequired,
              isDisabled: o.isDisabled
            }),
            children: e
          }
        ),
        /* @__PURE__ */ Q("div", { className: "flex flex-1 flex-col gap-1", children: [
          /* @__PURE__ */ Q(na, { children: [
            /* @__PURE__ */ k(Si, {}),
            /* @__PURE__ */ k(rn, { variant: "icon", className: "mr-1 w-6 rounded outline-offset-0 ", children: /* @__PURE__ */ k(Zl, { "aria-hidden": !0, className: "h-4 w-4" }) })
          ] }),
          r && /* @__PURE__ */ k(vt, { children: r }),
          /* @__PURE__ */ k(Et, { children: a })
        ] }),
        /* @__PURE__ */ k(ra, { className: "w-[--trigger-width]", children: /* @__PURE__ */ k(
          Uo,
          {
            items: l,
            className: "max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]",
            children: i
          }
        ) })
      ]
    }
  );
}
function J8(e) {
  return /* @__PURE__ */ k(ng, { ...e });
}
function X8(e) {
  return /* @__PURE__ */ k(ru, { ...e });
}
function Q8({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  ...i
}) {
  const { base: l, label: o } = rt();
  return /* @__PURE__ */ Q(
    qx,
    {
      ...i,
      className: me(
        i.className,
        (u, s) => l({
          labelAlign: t || n === "side" ? "center" : "start",
          labelPosition: n,
          ...s,
          className: u
        })
      ),
      children: [
        e && /* @__PURE__ */ k(
          He,
          {
            className: o({
              isRequired: i.isRequired,
              isDisabled: i.isDisabled
            }),
            children: e
          }
        ),
        /* @__PURE__ */ Q("div", { className: "flex flex-1 flex-col gap-1", children: [
          /* @__PURE__ */ k(Mr, {}),
          r && /* @__PURE__ */ k(vt, { children: r }),
          /* @__PURE__ */ k(Et, { children: a })
        ] })
      ]
    }
  );
}
const d8 = ie({
  base: "inline p-0.5 type-literal:px-0 rounded outline outline-0 forced-color-adjust-none caret-transparent text-gray-800 dark:text-zinc-200 forced-colors:text-[ButtonText]",
  variants: {
    isPlaceholder: {
      true: "text-gray-600 dark:text-zinc-400 italic"
    },
    isDisabled: {
      true: "text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText]"
    },
    isFocused: {
      true: "bg-blue-600 text-white dark:text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]"
    }
  }
});
function Mr(e) {
  return /* @__PURE__ */ k(
    eD,
    {
      className: (t) => Qv({
        ...t,
        class: "block min-w-[150px] px-2 py-1.5 text-sm"
      }),
      ...e,
      children: (t) => /* @__PURE__ */ k(nD, { segment: t, className: d8 })
    }
  );
}
function e9({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  ...i
}) {
  const l = rt();
  return /* @__PURE__ */ Q(
    uD,
    {
      ...i,
      className: nt(
        me(
          i.className,
          (o, u) => l.base({
            labelAlign: t || n === "side" ? "center" : "start",
            labelPosition: n,
            ...u,
            className: o
          })
        ),
        "group"
      ),
      children: [
        e && /* @__PURE__ */ k(
          He,
          {
            className: l.label({
              isRequired: i.isRequired,
              isDisabled: i.isDisabled
            }),
            children: e
          }
        ),
        /* @__PURE__ */ Q(na, { className: "w-auto min-w-[208px]", children: [
          /* @__PURE__ */ k(Mr, { className: "min-w-[150px] flex-1 px-2 py-1.5 text-sm" }),
          /* @__PURE__ */ k(rn, { variant: "icon", className: "mr-1 w-6 rounded outline-offset-0", children: /* @__PURE__ */ k(Os, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        r && /* @__PURE__ */ k(vt, { children: r }),
        /* @__PURE__ */ k(Et, { children: a }),
        /* @__PURE__ */ k(ra, { children: /* @__PURE__ */ k(nu, { children: /* @__PURE__ */ k(r8, {}) }) })
      ]
    }
  );
}
const c8 = ie({
  extend: Be,
  base: "w-full h-full flex items-center justify-center rounded-full forced-color-adjust-none text-zinc-900 dark:text-zinc-200",
  variants: {
    selectionState: {
      none: "group-hover:bg-gray-100 dark:group-hover:bg-zinc-700 group-pressed:bg-gray-200 dark:group-pressed:bg-zinc-600",
      middle: [
        "group-hover:bg-blue-200 dark:group-hover:bg-blue-900 forced-colors:group-hover:bg-[Highlight]",
        "group-invalid:group-hover:bg-red-200 dark:group-invalid:group-hover:bg-red-900 forced-colors:group-invalid:group-hover:bg-[Mark]",
        "group-pressed:bg-blue-300 dark:group-pressed:bg-blue-800 forced-colors:group-pressed:bg-[Highlight] forced-colors:text-[HighlightText]",
        "group-invalid:group-pressed:bg-red-300 dark:group-invalid:group-pressed:bg-red-800 forced-colors:group-invalid:group-pressed:bg-[Mark]"
      ],
      cap: "bg-blue-600 group-invalid:bg-red-600 forced-colors:bg-[Highlight] forced-colors:group-invalid:bg-[Mark] text-white forced-colors:text-[HighlightText]"
    },
    isDisabled: {
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]"
    }
  }
});
function f8({
  errorMessage: e,
  ...t
}) {
  return /* @__PURE__ */ Q(ix, { ...t, children: [
    /* @__PURE__ */ k(Jv, {}),
    /* @__PURE__ */ Q(Rh, { className: "[&_td]:px-0", children: [
      /* @__PURE__ */ k(Xv, {}),
      /* @__PURE__ */ k(Lo, { children: (n) => /* @__PURE__ */ k(
        Kh,
        {
          date: n,
          className: "group h-9 w-9 cursor-default text-sm outline outline-0 outside-month:text-gray-300 selected:bg-blue-100 invalid:selected:bg-red-100 selection-start:rounded-s-full selection-end:rounded-e-full dark:selected:bg-blue-700/30 dark:invalid:selected:bg-red-700/30 forced-colors:selected:bg-[Highlight] forced-colors:invalid:selected:bg-[Mark] [td:first-child_&]:rounded-s-full [td:last-child_&]:rounded-e-full",
          children: ({
            formattedDate: r,
            isSelected: a,
            isSelectionStart: i,
            isSelectionEnd: l,
            isFocusVisible: o,
            isDisabled: u
          }) => /* @__PURE__ */ k(
            "span",
            {
              className: c8({
                selectionState: a && (i || l) ? "cap" : a ? "middle" : "none",
                isDisabled: u,
                isFocusVisible: o
              }),
              children: r
            }
          )
        }
      ) })
    ] }),
    e && /* @__PURE__ */ k(Xr, { slot: "errorMessage", className: "text-sm text-red-600", children: e })
  ] });
}
function t9({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  ...i
}) {
  const { base: l, label: o } = rt();
  return /* @__PURE__ */ Q(
    dD,
    {
      ...i,
      className: me(
        i.className,
        (u, s) => ht(
          l({
            labelAlign: t || n === "side" ? "center" : "start",
            labelPosition: n,
            ...s,
            className: u
          }),
          "group"
        )
      ),
      children: [
        e && /* @__PURE__ */ k(
          He,
          {
            className: o({
              isRequired: i.isRequired,
              isDisabled: i.isDisabled
            }),
            children: e
          }
        ),
        /* @__PURE__ */ Q(na, { className: "w-auto min-w-[208px]", children: [
          /* @__PURE__ */ k(Mr, { slot: "start", className: "px-2 py-1.5 text-sm" }),
          /* @__PURE__ */ k(
            "span",
            {
              "aria-hidden": "true",
              className: "text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600 forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]",
              children: "–"
            }
          ),
          /* @__PURE__ */ k(Mr, { slot: "end", className: "flex-1 px-2 py-1.5 text-sm" }),
          /* @__PURE__ */ k(rn, { variant: "icon", className: "mr-1 w-6 rounded outline-offset-0", children: /* @__PURE__ */ k(Os, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        r && /* @__PURE__ */ k(vt, { children: r }),
        /* @__PURE__ */ k(Et, { children: a }),
        /* @__PURE__ */ k(ra, { children: /* @__PURE__ */ k(nu, { children: /* @__PURE__ */ k(f8, {}) }) })
      ]
    }
  );
}
function n9(e) {
  return /* @__PURE__ */ k(
    fD,
    {
      ...e,
      className: ht("flex flex-col gap-4", e.className)
    }
  );
}
function r9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ k(
    hD,
    {
      ...t,
      className: nt(
        t.className,
        "relative overflow-auto rounded-lg border dark:border-zinc-600"
      ),
      children: e
    }
  );
}
const b8 = ie({
  extend: Be,
  base: "relative flex gap-3 cursor-default select-none py-2 px-3 text-sm text-gray-900 dark:text-zinc-200 border-y dark:border-y-zinc-700 border-transparent first:border-t-0 last:border-b-0 first:rounded-t-md last:rounded-b-md -mb-px last:mb-0 -outline-offset-2",
  variants: {
    isSelected: {
      false: "hover:bg-gray-100 dark:hover:bg-zinc-700/60",
      true: "bg-blue-100 dark:bg-blue-700/30 hover:bg-blue-200 dark:hover:bg-blue-700/40 border-y-blue-200 dark:border-y-blue-900 z-20"
    },
    isDisabled: {
      true: "text-slate-300 dark:text-zinc-600 forced-colors:text-[GrayText] z-10"
    }
  }
});
function a9({ children: e, ...t }) {
  return /* @__PURE__ */ k(gD, { textValue: typeof e == "string" ? e : void 0, ...t, className: b8, children: ({ selectionMode: r, selectionBehavior: a, allowsDragging: i }) => /* @__PURE__ */ Q(Xe, { children: [
    i && /* @__PURE__ */ k(Jn, { slot: "drag", children: "≡" }),
    r === "multiple" && a === "toggle" && /* @__PURE__ */ k(Tr, { slot: "selection" }),
    e
  ] }) });
}
function i9(e) {
  return /* @__PURE__ */ k(ra, { placement: e.placement, className: "min-w-[150px]", children: /* @__PURE__ */ k(
    wD,
    {
      ...e,
      className: "max-h-[inherit] overflow-auto p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
    }
  ) });
}
function l9(e) {
  return /* @__PURE__ */ k(kD, { ...e, className: tg, children: me(
    e.children,
    (t, { selectionMode: n, isSelected: r }) => /* @__PURE__ */ Q(Xe, { children: [
      n !== "none" && /* @__PURE__ */ k("span", { className: "flex w-4 items-center", children: r && /* @__PURE__ */ k(Gl, { "aria-hidden": !0, className: "h-4 w-4" }) }),
      /* @__PURE__ */ k("span", { className: "flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold", children: t })
    ] })
  ) });
}
function o9(e) {
  return /* @__PURE__ */ k(
    Ci,
    {
      ...e,
      className: "mx-3 my-1 border-b border-gray-300 dark:border-zinc-700"
    }
  );
}
function u9(e) {
  return /* @__PURE__ */ k(ru, { ...e });
}
function s9({ label: e, ...t }) {
  return /* @__PURE__ */ k(
    MD,
    {
      ...t,
      className: nt(
        t.className,
        "flex flex-col gap-1"
      ),
      children: ({ percentage: n, valueText: r }) => /* @__PURE__ */ Q(Xe, { children: [
        /* @__PURE__ */ Q("div", { className: "flex justify-between gap-2", children: [
          /* @__PURE__ */ k(He, { children: e }),
          /* @__PURE__ */ Q(
            "span",
            {
              className: `text-sm ${n >= 80 ? "text-red-600 dark:text-red-500" : "text-gray-600 dark:text-zinc-400"}`,
              children: [
                n >= 80 && /* @__PURE__ */ k(
                  fg,
                  {
                    "aria-label": "Alert",
                    className: "inline-block h-4 w-4 align-text-bottom"
                  }
                ),
                " " + r
              ]
            }
          )
        ] }),
        /* @__PURE__ */ k("div", { className: "relative h-2 w-64 rounded-full bg-gray-300 outline outline-1 -outline-offset-1 outline-transparent dark:bg-zinc-700", children: /* @__PURE__ */ k(
          "div",
          {
            className: `absolute left-0 top-0 h-full rounded-full ${p8(n)} forced-colors:bg-[Highlight]`,
            style: { width: n + "%" }
          }
        ) })
      ] })
    }
  );
}
function p8(e) {
  return e < 70 ? "bg-green-600" : e < 80 ? "bg-orange-500" : "bg-red-600";
}
const m8 = ie({
  base: "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out"
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in"
    }
  }
}), h8 = ie({
  base: "w-full max-w-md max-h-full rounded-2xl bg-white dark:bg-zinc-800/70 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas] text-left align-middle text-slate-700 dark:text-zinc-300 shadow-2xl bg-clip-padding border border-black/10 dark:border-white/10",
  variants: {
    isEntering: {
      true: "animate-in zoom-in-105 ease-out duration-200"
    },
    isExiting: {
      true: "animate-out zoom-out-95 ease-in duration-200"
    }
  }
});
function d9(e) {
  return /* @__PURE__ */ k(Fv, { ...e, className: m8, children: /* @__PURE__ */ k(ND, { ...e, className: h8 }) });
}
function c9({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  ...i
}) {
  const { base: l, label: o } = rt();
  return /* @__PURE__ */ Q(
    jD,
    {
      ...i,
      className: nt(
        me(
          i.className,
          (u, s) => l({
            labelAlign: t,
            labelPosition: n,
            ...s,
            className: u
          })
        ),
        "group"
      ),
      children: [
        /* @__PURE__ */ k(
          He,
          {
            className: o({
              isRequired: i.isRequired,
              isDisabled: i.isDisabled
            }),
            children: e
          }
        ),
        /* @__PURE__ */ Q("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ k(na, { children: (u) => /* @__PURE__ */ Q(Xe, { children: [
            /* @__PURE__ */ k(Si, {}),
            /* @__PURE__ */ Q(
              "div",
              {
                className: Ar({
                  ...u,
                  class: "flex flex-col border-s-2"
                }),
                children: [
                  /* @__PURE__ */ k(Ks, { slot: "increment", children: /* @__PURE__ */ k(pg, { "aria-hidden": !0, className: "h-4 w-4" }) }),
                  /* @__PURE__ */ k(
                    "div",
                    {
                      className: Ar({
                        ...u,
                        class: "border-b-2"
                      })
                    }
                  ),
                  /* @__PURE__ */ k(Ks, { slot: "decrement", children: /* @__PURE__ */ k(Zl, { "aria-hidden": !0, className: "h-4 w-4" }) })
                ]
              }
            )
          ] }) }),
          r && /* @__PURE__ */ k(vt, { children: r }),
          /* @__PURE__ */ k(Et, { children: a })
        ] })
      ]
    }
  );
}
function Ks(e) {
  return /* @__PURE__ */ k(
    Jn,
    {
      ...e,
      className: "cursor-default px-0.5 text-gray-500 pressed:bg-gray-100 group-disabled:text-gray-200 dark:text-zinc-400 dark:pressed:bg-zinc-800 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]"
    }
  );
}
function f9({ label: e, ...t }) {
  return /* @__PURE__ */ k(
    UD,
    {
      ...t,
      className: nt(
        t.className,
        "flex flex-col gap-1"
      ),
      children: ({ percentage: n, valueText: r, isIndeterminate: a }) => /* @__PURE__ */ Q(Xe, { children: [
        /* @__PURE__ */ Q("div", { className: "flex justify-between gap-2", children: [
          /* @__PURE__ */ k(He, { children: e }),
          /* @__PURE__ */ k("span", { className: "text-sm text-gray-600 dark:text-zinc-400", children: r })
        ] }),
        /* @__PURE__ */ k("div", { className: "relative h-2 w-64 overflow-hidden rounded-full bg-gray-300 outline outline-1 -outline-offset-1 outline-transparent dark:bg-zinc-700", children: /* @__PURE__ */ k(
          "div",
          {
            className: `absolute top-0 h-full rounded-full bg-blue-600 dark:bg-blue-500 forced-colors:bg-[Highlight] ${a ? "left-full duration-1000 ease-out animate-in slide-out-to-right-full repeat-infinite [--tw-enter-translate-x:calc(-16rem-100%)]" : "left-0"}`,
            style: { width: (a ? 40 : n) + "%" }
          }
        ) })
      ] })
    }
  );
}
const v8 = ie({
  base: "flex gap-2",
  variants: {
    orientation: {
      horizontal: "gap-4 flex-row",
      vertical: "flex-col"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
function b9({
  labelAlign: e,
  labelPosition: t,
  orientation: n,
  ...r
}) {
  const { base: a, label: i } = rt();
  return /* @__PURE__ */ Q(
    YD,
    {
      ...r,
      className: me(
        r.className,
        (l, o) => a({
          labelAlign: e || "start",
          labelPosition: t || "top",
          ...o,
          className: l
        })
      ),
      children: [
        /* @__PURE__ */ k(
          He,
          {
            className: i({
              isRequired: r.isRequired,
              isInvalid: r.isInvalid,
              isDisabled: r.isDisabled
            }),
            children: r.label
          }
        ),
        /* @__PURE__ */ Q("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ k(
            "div",
            {
              className: v8({
                orientation: n
              }),
              children: r.children
            }
          ),
          r.description && /* @__PURE__ */ k(vt, { children: r.description }),
          /* @__PURE__ */ k(Et, { children: r.errorMessage })
        ] })
      ]
    }
  );
}
const g8 = ie({
  extend: Be,
  base: "w-5 h-5 outline-offset-2 rounded-full border-2 bg-white dark:bg-zinc-900 transition-all",
  variants: {
    isSelected: {
      false: "border-gray-400 dark:border-zinc-400 group-pressed:border-gray-500 dark:group-pressed:border-zinc-300",
      true: "border-[7px] border-gray-700 dark:border-slate-300 forced-colors:!border-[Highlight] group-pressed:border-gray-800 dark:group-pressed:border-slate-200"
    },
    isInvalid: {
      true: "border-red-700 dark:border-red-600 group-pressed:border-red-800 dark:group-pressed:border-red-700 forced-colors:!border-[Mark]"
    },
    isDisabled: {
      true: "border-gray-200 dark:border-zinc-700 forced-colors:!border-[GrayText]"
    }
  }
});
function p9(e) {
  return /* @__PURE__ */ k(
    JD,
    {
      ...e,
      className: nt(
        e.className,
        "group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]"
      ),
      children: (t) => /* @__PURE__ */ Q(Xe, { children: [
        /* @__PURE__ */ k("div", { className: g8(t) }),
        e.children
      ] })
    }
  );
}
function m9({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  ...i
}) {
  const { base: l, label: o } = rt();
  return /* @__PURE__ */ Q(
    e2,
    {
      ...i,
      className: nt(
        me(
          i.className,
          (u, s) => l({
            labelAlign: t || n === "side" ? "center" : "start",
            labelPosition: n,
            ...s,
            className: u
          })
        ),
        "group"
      ),
      children: [
        e && /* @__PURE__ */ k(
          He,
          {
            className: o({
              labelPosition: n,
              isDisabled: i.isDisabled
            }),
            children: e
          }
        ),
        /* @__PURE__ */ Q("div", { className: "flex flex-1 flex-col gap-1", children: [
          /* @__PURE__ */ Q(na, { children: [
            /* @__PURE__ */ k(
              vg,
              {
                "aria-hidden": !0,
                className: "ml-2 h-4 w-4 text-gray-500 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
              }
            ),
            /* @__PURE__ */ k(Si, { className: "[&::-webkit-search-cancel-button]:hidden" }),
            /* @__PURE__ */ k(rn, { variant: "icon", className: "mr-1 w-6 group-empty:invisible", children: /* @__PURE__ */ k(js, { "aria-hidden": !0, className: "h-4 w-4" }) })
          ] }),
          r && /* @__PURE__ */ k(vt, { children: r }),
          /* @__PURE__ */ k(Et, { children: a })
        ] })
      ]
    }
  );
}
const $8 = ie({
  extend: Be,
  base: "flex items-center text-start gap-4 w-full cursor-default border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none rounded-lg pl-3 pr-2 py-[7px] min-w-[150px] transition bg-gray-50 dark:bg-zinc-700",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-300 hover:bg-gray-100 pressed:bg-gray-200 dark:hover:bg-zinc-600 dark:pressed:bg-zinc-500 group-invalid:border-red-600 forced-colors:group-invalid:border-[Mark]",
      true: "text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText] dark:bg-zinc-800 dark:border-white/5 forced-colors:border-[GrayText]"
    }
  }
});
function h9({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  children: i,
  items: l,
  ...o
}) {
  const { base: u, label: s } = rt();
  return /* @__PURE__ */ Q(
    n2,
    {
      ...o,
      className: me(
        o.className,
        (d, c) => u({
          labelAlign: t || n === "side" ? "center" : "start",
          labelPosition: n,
          ...c,
          className: d
        })
      ),
      children: [
        e && /* @__PURE__ */ k(
          He,
          {
            className: s({
              isRequired: o.isRequired,
              isDisabled: o.isDisabled,
              isInvalid: o.isInvalid
            }),
            children: e
          }
        ),
        /* @__PURE__ */ Q("div", { className: "flex flex-1 flex-col gap-1", children: [
          /* @__PURE__ */ Q(Jn, { className: $8, children: [
            /* @__PURE__ */ k(a2, { className: "flex-1 text-sm placeholder-shown:italic" }),
            /* @__PURE__ */ k(
              Zl,
              {
                "aria-hidden": !0,
                className: "h-4 w-4 text-gray-600 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
              }
            )
          ] }),
          r && /* @__PURE__ */ k(vt, { children: r }),
          /* @__PURE__ */ k(Et, { children: a })
        ] }),
        /* @__PURE__ */ k(ra, { className: "min-w-[--trigger-width]", children: /* @__PURE__ */ k(
          Uo,
          {
            items: l,
            className: "max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]",
            children: i
          }
        ) })
      ]
    }
  );
}
function v9(e) {
  return /* @__PURE__ */ k(ng, { ...e });
}
function g9(e) {
  return /* @__PURE__ */ k(ru, { ...e });
}
const y8 = ie({
  base: "bg-gray-300 dark:bg-zinc-600 forced-colors:bg-[ButtonBorder]",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
function $9(e) {
  return /* @__PURE__ */ k(
    Ci,
    {
      ...e,
      className: y8({
        orientation: e.orientation,
        className: e.className
      })
    }
  );
}
const x8 = ie({
  base: "rounded-full",
  variants: {
    orientation: {
      horizontal: "w-full h-[6px]",
      vertical: "h-full w-[6px] ml-[50%] -translate-x-[50%]"
    },
    isDisabled: {
      false: "bg-gray-300 dark:bg-zinc-500 forced-colors:bg-[ButtonBorder]",
      true: "bg-gray-100 dark:bg-zinc-800 forced-colors:bg-[GrayText]"
    }
  }
}), D8 = ie({
  extend: Be,
  base: "w-6 h-6 outline-offset-2 group-orientation-horizontal:mt-6 group-orientation-vertical:ml-3 rounded-full bg-gray-50 dark:bg-zinc-900 border-2 border-gray-700 dark:border-gray-300",
  variants: {
    isDragging: {
      true: "bg-gray-700 dark:bg-gray-300 forced-colors:bg-[ButtonBorder]"
    },
    isDisabled: {
      true: "border-gray-300 dark:border-zinc-700 forced-colors:border-[GrayText]"
    }
  }
}), C8 = ie({
  variants: {
    isDisabled: {
      true: "text-zinc-500 dark:text-zinc-700"
    }
  },
  defaultVariants: {
    isDisabled: !1
  }
}), E8 = ie({
  base: "text-sm font-medium text-gray-500 orientation-vertical:hidden dark:text-zinc-400",
  variants: {
    isDisabled: {
      true: "text-zinc-500 dark:text-zinc-700"
    }
  },
  defaultVariants: {
    isDisabled: !1
  }
});
function y9({
  label: e,
  thumbLabels: t,
  ...n
}) {
  return /* @__PURE__ */ Q(
    o2,
    {
      ...n,
      className: nt(
        n.className,
        "grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:grid orientation-horizontal:w-64 orientation-vertical:flex"
      ),
      children: [
        /* @__PURE__ */ k(
          He,
          {
            className: C8({
              isDisabled: n.isDisabled
            }),
            children: e
          }
        ),
        /* @__PURE__ */ k(
          s2,
          {
            className: E8({
              isDisabled: n.isDisabled
            }),
            children: ({ state: r }) => r.values.map((a, i) => r.getThumbValueLabel(i)).join(" – ")
          }
        ),
        /* @__PURE__ */ k(c2, { className: "group col-span-2 flex items-center orientation-horizontal:h-6 orientation-vertical:h-64 orientation-vertical:w-6", children: ({ state: r, ...a }) => /* @__PURE__ */ Q(Xe, { children: [
          /* @__PURE__ */ k("div", { className: x8(a) }),
          r.values.map((i, l) => /* @__PURE__ */ k(
            b2,
            {
              index: l,
              "aria-label": t == null ? void 0 : t[l],
              className: D8
            },
            l
          ))
        ] }) })
      ]
    }
  );
}
const P8 = ie({
  extend: Be,
  base: "flex h-4 w-7 outline-offset-2 px-px items-center shrink-0 cursor-default rounded-full transition duration-200 ease-in-out shadow-inner border border-transparent",
  variants: {
    isSelected: {
      false: "bg-gray-400 dark:bg-zinc-400 group-pressed:bg-gray-500 dark:group-pressed:bg-zinc-300",
      true: "bg-gray-700 dark:bg-zinc-300 forced-colors:!bg-[Highlight] group-pressed:bg-gray-800 dark:group-pressed:bg-zinc-200"
    },
    isDisabled: {
      true: "bg-gray-200 dark:bg-zinc-700 forced-colors:group-selected:!bg-[GrayText] forced-colors:border-[GrayText]"
    }
  }
}), w8 = ie({
  base: "h-3 w-3 transform rounded-full bg-white dark:bg-zinc-900 outline outline-1 -outline-offset-1 outline-transparent shadow transition duration-200 ease-in-out",
  variants: {
    isSelected: {
      false: "translate-x-0",
      true: "translate-x-[100%]"
    },
    isDisabled: {
      true: "forced-colors:outline-[GrayText]"
    }
  }
});
function x9({ children: e, ...t }) {
  return /* @__PURE__ */ k(
    h2,
    {
      ...t,
      className: nt(
        t.className,
        "group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]"
      ),
      children: (n) => /* @__PURE__ */ Q(Xe, { children: [
        /* @__PURE__ */ k("div", { className: P8(n), children: /* @__PURE__ */ k("span", { className: w8(n) }) }),
        e
      ] })
    }
  );
}
function D9(e) {
  return /* @__PURE__ */ k($2, { className: "relative max-h-[280px] w-[550px] scroll-pt-[2.281rem] overflow-auto rounded-lg border dark:border-zinc-600", children: /* @__PURE__ */ k(D2, { ...e, className: "border-separate border-spacing-0" }) });
}
const S8 = ie({
  extend: Be,
  base: "px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden"
}), B8 = ie({
  extend: Be,
  base: "w-px px-[8px] translate-x-[8px] box-content py-1 h-5 bg-clip-content bg-gray-400 dark:bg-zinc-500 forced-colors:bg-[ButtonBorder] cursor-col-resize rounded resizing:bg-blue-600 forced-colors:resizing:bg-[Highlight] resizing:w-[2px] resizing:pl-[7px] -outline-offset-2"
});
function k8(e) {
  return /* @__PURE__ */ k(
    Nv,
    {
      ...e,
      className: nt(
        e.className,
        "cursor-default text-start text-sm font-semibold text-gray-700 dark:text-zinc-300 [&:focus-within]:z-20 [&:hover]:z-20"
      ),
      children: me(
        e.children,
        (t, { allowsSorting: n, sortDirection: r }) => /* @__PURE__ */ Q("div", { className: "flex items-center", children: [
          /* @__PURE__ */ Q(Oo, { role: "presentation", tabIndex: -1, className: S8, children: [
            /* @__PURE__ */ k("span", { className: "truncate", children: t }),
            n && /* @__PURE__ */ k(
              "span",
              {
                className: `flex h-4 w-4 items-center justify-center transition ${r === "descending" ? "rotate-180" : ""}`,
                children: r && /* @__PURE__ */ k(
                  bg,
                  {
                    "aria-hidden": !0,
                    className: "h-4 w-4 text-gray-500 dark:text-zinc-400 forced-colors:text-[ButtonText]"
                  }
                )
              }
            )
          ] }),
          !e.width && /* @__PURE__ */ k(I2, { className: B8 })
        ] })
      )
    }
  );
}
function C9(e) {
  let { selectionBehavior: t, selectionMode: n, allowsDragging: r } = Iv();
  return /* @__PURE__ */ Q(
    E2,
    {
      ...e,
      className: ht(
        "sticky top-0 z-10 rounded-t-lg border-b bg-gray-100/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:border-b-zinc-700 dark:bg-zinc-700/60 dark:supports-[-moz-appearance:none]:bg-zinc-700 forced-colors:bg-[Canvas]",
        e.className
      ),
      children: [
        r && /* @__PURE__ */ k(k8, {}),
        t === "toggle" && /* @__PURE__ */ k(
          Nv,
          {
            width: 36,
            minWidth: 36,
            className: "cursor-default p-2 text-start text-sm font-semibold",
            children: n === "multiple" && /* @__PURE__ */ k(Tr, { slot: "selection" })
          }
        ),
        /* @__PURE__ */ k(zo, { items: e.columns, children: e.children })
      ]
    }
  );
}
const F8 = ie({
  extend: Be,
  base: "group/row relative cursor-default select-none -outline-offset-2 text-gray-900 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700/60 selected:bg-blue-100 selected:hover:bg-blue-200 dark:selected:bg-blue-700/30 dark:selected:hover:bg-blue-700/40"
});
function E9({
  id: e,
  columns: t,
  children: n,
  ...r
}) {
  let { selectionBehavior: a, allowsDragging: i } = Iv();
  return /* @__PURE__ */ Q(S2, { id: e, ...r, className: F8, children: [
    i && /* @__PURE__ */ k(zs, { children: /* @__PURE__ */ k(Jn, { slot: "drag", children: "≡" }) }),
    a === "toggle" && /* @__PURE__ */ k(zs, { children: /* @__PURE__ */ k(Tr, { slot: "selection" }) }),
    /* @__PURE__ */ k(zo, { items: t, children: n })
  ] });
}
const A8 = ie({
  extend: Be,
  base: "border-b dark:border-b-zinc-700 group-last/row:border-b-0 [--selected-border:theme(colors.blue.200)] dark:[--selected-border:theme(colors.blue.900)] group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border] p-2 truncate -outline-offset-2"
});
function zs(e) {
  return /* @__PURE__ */ k(k2, { ...e, className: A8 });
}
const T8 = ie({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row w-[800px]"
    }
  }
});
function P9(e) {
  return /* @__PURE__ */ k(
    _2,
    {
      ...e,
      className: me(
        e.className,
        (t, n) => T8({ ...n, className: t })
      )
    }
  );
}
const M8 = ie({
  base: "flex gap-1",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
});
function w9(e) {
  return /* @__PURE__ */ k(
    G2,
    {
      ...e,
      className: me(
        e.className,
        (t, n) => M8({ ...n, className: t })
      )
    }
  );
}
const R8 = ie({
  extend: Be,
  base: "flex items-center cursor-default rounded-full px-4 py-1.5 text-sm font-medium transition forced-color-adjust-none",
  variants: {
    isSelected: {
      false: "text-gray-600 dark:text-zinc-300 hover:text-gray-700 pressed:text-gray-700 dark:hover:text-zinc-200 dark:pressed:text-zinc-200 hover:bg-gray-200 dark:hover:bg-zinc-800 pressed:bg-gray-200 dark:pressed:bg-zinc-800",
      true: "text-white dark:text-black forced-colors:text-[HighlightText] bg-gray-800 dark:bg-zinc-200 forced-colors:bg-[Highlight]"
    },
    isDisabled: {
      true: "text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText] selected:text-gray-300 dark:selected:text-zinc-500 forced-colors:selected:text-[HighlightText] selected:bg-gray-200 dark:selected:bg-zinc-600 forced-colors:selected:bg-[GrayText]"
    }
  }
});
function S9(e) {
  return /* @__PURE__ */ k(
    q2,
    {
      ...e,
      className: me(
        e.className,
        (t, n) => R8({ ...n, className: t })
      )
    }
  );
}
const I8 = ie({
  extend: Be,
  base: "flex-1 p-4 text-sm text-gray-900 dark:text-zinc-100"
});
function B9(e) {
  return /* @__PURE__ */ k(
    X2,
    {
      ...e,
      className: me(
        e.className,
        (t, n) => I8({ ...n, className: t })
      )
    }
  );
}
const Vs = {
  gray: "bg-gray-100 text-gray-600 border-gray-200 hover:border-gray-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600 dark:hover:border-zinc-500",
  green: "bg-green-100 text-green-700 border-green-200 hover:border-green-300 dark:bg-green-300/20 dark:text-green-400 dark:border-green-300/10 dark:hover:border-green-300/20",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:border-yellow-300 dark:bg-yellow-300/20 dark:text-yellow-400 dark:border-yellow-300/10 dark:hover:border-yellow-300/20",
  blue: "bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/10 dark:hover:border-blue-400/20"
}, rg = W("gray"), N8 = ie({
  extend: Be,
  base: "transition cursor-default text-xs rounded-full border px-3 py-0.5 flex items-center max-w-fit gap-1",
  variants: {
    color: {
      gray: "",
      green: "",
      yellow: "",
      blue: ""
    },
    allowsRemoving: {
      true: "pr-1"
    },
    isSelected: {
      true: "bg-blue-600 text-white border-transparent forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-color-adjust-none"
    },
    isDisabled: {
      true: "bg-gray-100 text-gray-300 forced-colors:text-[GrayText]"
    }
  },
  compoundVariants: Object.keys(Vs).map((e) => ({
    isSelected: !1,
    color: e,
    class: Vs[e]
  }))
});
function k9({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  items: i,
  children: l,
  renderEmptyState: o,
  ...u
}) {
  const { base: s, label: d } = rt();
  return /* @__PURE__ */ Q(
    t7,
    {
      ...u,
      className: s({
        labelAlign: t,
        labelPosition: n,
        className: u.className
      }),
      children: [
        /* @__PURE__ */ k(He, { className: d(), children: e }),
        /* @__PURE__ */ k(rg.Provider, { value: u.color || "gray", children: /* @__PURE__ */ k(
          a7,
          {
            items: i,
            renderEmptyState: o,
            className: "flex flex-wrap gap-1",
            children: l
          }
        ) }),
        r && /* @__PURE__ */ k(vt, { children: r }),
        a && /* @__PURE__ */ k(Xr, { slot: "errorMessage", className: "text-sm text-red-600", children: a })
      ]
    }
  );
}
const K8 = ie({
  extend: Be,
  base: "cursor-default rounded-full transition-[background-color] p-0.5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 pressed:bg-black/20 dark:pressed:bg-white/20"
});
function F9({ children: e, color: t, ...n }) {
  let r = typeof e == "string" ? e : void 0, a = U(rg);
  return /* @__PURE__ */ k(
    l7,
    {
      textValue: r,
      ...n,
      className: me(
        n.className,
        (i, l) => N8({ ...l, className: i, color: t || a })
      ),
      children: ({ allowsRemoving: i }) => /* @__PURE__ */ Q(Xe, { children: [
        e,
        i && /* @__PURE__ */ k(Jn, { slot: "remove", className: K8, children: /* @__PURE__ */ k(js, { "aria-hidden": !0, className: "h-3 w-3" }) })
      ] })
    }
  );
}
const z8 = ie({
  extend: Be,
  base: "border rounded-md",
  variants: {
    isFocused: Ar.variants.isFocusWithin,
    ...Ar.variants
  },
  compoundVariants: [
    {
      isFocused: !0,
      isFocusVisible: !0,
      class: "outline-2"
    },
    {
      isFocused: !0,
      isFocusVisible: !1,
      class: "outline-2"
    }
  ]
});
function A9({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  ...i
}) {
  const { base: l, label: o } = rt();
  return /* @__PURE__ */ Q(
    c7,
    {
      ...i,
      className: me(
        i.className,
        (u, s) => l({
          labelAlign: t,
          labelPosition: n,
          ...s,
          className: u
        })
      ),
      children: [
        e && /* @__PURE__ */ k(
          He,
          {
            className: o({
              isRequired: i.isRequired,
              isDisabled: i.isDisabled,
              isInvalid: i.isInvalid
            }),
            children: e
          }
        ),
        /* @__PURE__ */ Q("div", { className: "flex flex-1 flex-col gap-1", children: [
          /* @__PURE__ */ k(Si, { className: z8 }),
          r && /* @__PURE__ */ k(vt, { children: r }),
          /* @__PURE__ */ k(Et, { children: a })
        ] })
      ]
    }
  );
}
function T9({
  label: e,
  labelAlign: t,
  labelPosition: n,
  description: r,
  errorMessage: a,
  ...i
}) {
  const { base: l, label: o } = rt();
  return /* @__PURE__ */ Q(
    Jx,
    {
      ...i,
      className: me(
        i.className,
        (u, s) => l({
          labelAlign: t,
          labelPosition: n,
          ...s,
          className: u
        })
      ),
      children: [
        /* @__PURE__ */ k(
          He,
          {
            className: o({
              isRequired: i.isRequired,
              isInvalid: i.isInvalid,
              isDisabled: i.isDisabled
            }),
            children: e
          }
        ),
        /* @__PURE__ */ Q("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ k(Mr, {}),
          r && /* @__PURE__ */ k(vt, { children: r }),
          /* @__PURE__ */ k(Et, { children: a })
        ] })
      ]
    }
  );
}
let V8 = ie({
  extend: Be,
  base: "select-none px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 forced-colors:border-[ButtonBorder] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default forced-color-adjust-none",
  variants: {
    isSelected: {
      false: "bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100 forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText]",
      true: "bg-gray-700 hover:bg-gray-800 pressed:bg-gray-900 text-white dark:bg-slate-300 dark:hover:bg-slate-200 dark:pressed:bg-slate-100 dark:text-black forced-colors:!bg-[Highlight] forced-colors:!text-[HighlightText]"
    },
    isDisabled: {
      true: "bg-gray-100 dark:bg-zinc-800 forced-colors:!bg-[ButtonFace] text-gray-300 dark:text-zinc-600 forced-colors:!text-[GrayText] border-black/5 dark:border-white/5 forced-colors:border-[GrayText]"
    }
  }
});
function M9(e) {
  return /* @__PURE__ */ k(
    p7,
    {
      ...e,
      className: me(
        e.className,
        (t, n) => V8({ ...n, className: t })
      )
    }
  );
}
const L8 = ie({
  base: "flex gap-2",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
});
function R9(e) {
  return /* @__PURE__ */ k(
    v7,
    {
      ...e,
      className: me(
        e.className,
        (t, n) => L8({ ...n, className: t })
      )
    }
  );
}
const O8 = ie({
  base: "group bg-slate-700 dark:bg-slate-600 border border-slate-800 dark:border-white/10 shadow-[inset_0_1px_0_0_theme(colors.gray.600)] dark:shadow-none text-white text-sm rounded-lg drop-shadow-lg will-change-transform px-3 py-1",
  variants: {
    isEntering: {
      true: "animate-in fade-in placement-bottom:slide-in-from-top-0.5 placement-top:slide-in-from-bottom-0.5 placement-left:slide-in-from-right-0.5 placement-right:slide-in-from-left-0.5 ease-out duration-200"
    },
    isExiting: {
      true: "animate-out fade-out placement-bottom:slide-out-to-top-0.5 placement-top:slide-out-to-bottom-0.5 placement-left:slide-out-to-right-0.5 placement-right:slide-out-to-left-0.5 ease-in duration-150"
    }
  }
});
function I9({ children: e, ...t }) {
  return /* @__PURE__ */ Q(
    y7,
    {
      ...t,
      offset: 10,
      className: me(
        t.className,
        (n, r) => O8({ ...r, className: n })
      ),
      children: [
        /* @__PURE__ */ k(Hh, { children: /* @__PURE__ */ k(
          "svg",
          {
            width: 8,
            height: 8,
            viewBox: "0 0 8 8",
            className: "fill-slate-700 stroke-gray-800 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 dark:fill-slate-600 dark:stroke-white/10 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
            children: /* @__PURE__ */ k("path", { d: "M0 0 L4 4 L8 0" })
          }
        ) }),
        e
      ]
    }
  );
}
export {
  U8 as AlertDialog,
  G8 as Breadcrumb,
  W8 as Breadcrumbs,
  rn as Button,
  r8 as Calendar,
  Xv as CalendarGridHeader,
  Jv as CalendarHeader,
  zs as Cell,
  Tr as Checkbox,
  Is as CheckboxGroup,
  k8 as Column,
  Y8 as ComboBox,
  J8 as ComboBoxItem,
  X8 as ComboBoxSection,
  Q8 as DateField,
  Mr as DateInput,
  e9 as DatePicker,
  t9 as DateRangePicker,
  vt as Description,
  nu as Dialog,
  ng as DropdownItem,
  ru as DropdownSection,
  Et as FieldError,
  na as FieldGroup,
  n9 as Form,
  r9 as GridList,
  a9 as GridListItem,
  Si as Input,
  He as Label,
  t8 as Link,
  Z8 as ListBox,
  q8 as ListBoxItem,
  i9 as Menu,
  l9 as MenuItem,
  u9 as MenuSection,
  o9 as MenuSeparator,
  s9 as Meter,
  d9 as Modal,
  c9 as NumberField,
  ra as Popover,
  f9 as ProgressBar,
  p9 as Radio,
  b9 as RadioGroup,
  f8 as RangeCalendar,
  E9 as Row,
  m9 as SearchField,
  h9 as Select,
  v9 as SelectItem,
  g9 as SelectSection,
  $9 as Separator,
  y9 as Slider,
  x9 as Switch,
  S9 as Tab,
  w9 as TabList,
  B9 as TabPanel,
  D9 as Table,
  C9 as TableHeader,
  P9 as Tabs,
  F9 as Tag,
  k9 as TagGroup,
  A9 as TextField,
  T9 as TimeField,
  M9 as ToggleButton,
  R9 as Toolbar,
  I9 as Tooltip,
  nt as composeTailwindRenderProps,
  tg as dropdownItemStyles,
  Ar as fieldBorderStyles,
  Qv as fieldGroupStyles,
  rt as fieldWithLabel,
  Be as focusRing,
  u8 as itemStyles
};
//# sourceMappingURL=gss-ui.js.map
