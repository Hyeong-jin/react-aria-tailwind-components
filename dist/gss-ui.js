import { jsx as A, jsxs as te, Fragment as Qe } from "react/jsx-runtime";
import g, { forwardRef as q, createElement as lu, useState as Z, useRef as I, useEffect as J, useCallback as Q, useContext as U, useMemo as K, createContext as W, cloneElement as Rs } from "react";
import Ar, { flushSync as eg, createPortal as tg } from "react-dom";
var ng = {
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
const rg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), et = (e, t) => {
  const n = q(
    ({ color: r = "currentColor", size: a = 24, strokeWidth: i = 2, absoluteStrokeWidth: l, children: o, ...u }, s) => lu(
      "svg",
      {
        ref: s,
        ...ng,
        width: a,
        height: a,
        stroke: r,
        strokeWidth: l ? Number(i) * 24 / Number(a) : i,
        className: `lucide lucide-${rg(e)}`,
        ...u
      },
      [
        ...t.map(([d, c]) => lu(d, c)),
        ...(Array.isArray(o) ? o : [o]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, ag = et("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]), ig = et("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), lg = et("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]), Is = et("Calendar", [
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
]), _l = et("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), Ul = et("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), ou = et("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), rl = et("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), og = et("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), ug = et("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), sg = et("Minus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }]
]), dg = et("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Ns = et("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Ke(e, t, n) {
  let [r, a] = Z(e || t), i = I(e !== void 0), l = e !== void 0;
  J(() => {
    let s = i.current;
    s !== l && console.warn(`WARN: A component changed from ${s ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), i.current = l;
  }, [
    l
  ]);
  let o = l ? e : r, u = Q((s, ...d) => {
    let c = (p, ...f) => {
      n && (Object.is(o, p) || n(p, ...f)), l || (o = p);
    };
    typeof s == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a((f, ...b) => {
      let m = s(l ? o : f, ...b);
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
function st(e, t = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(e, t), n);
}
function Ze(e, t, n, r) {
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
const xa = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Ks = /* @__PURE__ */ g.createContext(xa), cg = /* @__PURE__ */ g.createContext(!1);
let fg = !!(typeof window < "u" && window.document && window.document.createElement), ki = /* @__PURE__ */ new WeakMap();
function pg(e = !1) {
  let t = U(Ks), n = I(null);
  if (n.current === null && !e) {
    var r, a;
    let i = (a = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (r = a.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (i) {
      let l = ki.get(i);
      l == null ? ki.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== l.state && (t.current = l.id, ki.delete(i));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function bg(e) {
  let t = U(Ks);
  t === xa && !fg && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = pg(!!e), r = t === xa && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function mg(e) {
  let t = g.useId(), [n] = Z(wt()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${xa.prefix}`;
  return e || `${r}-${t}`;
}
const hg = typeof g.useId == "function" ? mg : bg;
function vg() {
  return !1;
}
function gg() {
  return !0;
}
function $g(e) {
  return () => {
  };
}
function wt() {
  return typeof g.useSyncExternalStore == "function" ? g.useSyncExternalStore($g, vg, gg) : U(cg);
}
function zs(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (n = zs(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function yg() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
    (e = arguments[n]) && (t = zs(e)) && (r && (r += " "), r += t);
  return r;
}
const fe = typeof document < "u" ? g.useLayoutEffect : () => {
};
function $e(e) {
  const t = I(null);
  return fe(() => {
    t.current = e;
  }, [
    e
  ]), Q((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
function xg(e) {
  let [t, n] = Z(e), r = I(null), a = $e(() => {
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
  let i = $e((l) => {
    r.current = l(t), a();
  });
  return [
    t,
    i
  ];
}
let Dg = !!(typeof window < "u" && window.document && window.document.createElement), Da = /* @__PURE__ */ new Map();
function pe(e) {
  let [t, n] = Z(e), r = I(null), a = hg(t), i = Q((l) => {
    r.current = l;
  }, []);
  return Dg && Da.set(a, i), fe(() => {
    let l = a;
    return () => {
      Da.delete(l);
    };
  }, [
    a
  ]), J(() => {
    let l = r.current;
    l && (r.current = null, n(l));
  }), a;
}
function Cg(e, t) {
  if (e === t)
    return e;
  let n = Da.get(e);
  if (n)
    return n(t), t;
  let r = Da.get(t);
  return r ? (r(e), e) : t;
}
function Pt(e = []) {
  let t = pe(), [n, r] = xg(t), a = Q(() => {
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
function gt(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const he = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, ut = (e) => e && "window" in e && e.window === e ? e : he(e).defaultView || window;
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
      90 ? t[a] = gt(i, l) : (a === "className" || a === "UNSAFE_className") && typeof i == "string" && typeof l == "string" ? t[a] = yg(i, l) : a === "id" && i && l ? t.id = Cg(i, l) : t[a] = l !== void 0 ? l : i;
    }
  }
  return t;
}
function Ga(...e) {
  return e.length === 1 ? e[0] : (t) => {
    for (let n of e)
      typeof n == "function" ? n(t) : n != null && (n.current = t);
  };
}
const Eg = /* @__PURE__ */ new Set([
  "id"
]), Pg = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), wg = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Sg = /^(data-.*)$/;
function Y(e, t = {}) {
  let { labelable: n, isLink: r, propNames: a } = t, i = {};
  for (const l in e)
    Object.prototype.hasOwnProperty.call(e, l) && (Eg.has(l) || n && Pg.has(l) || r && wg.has(l) || a != null && a.has(l) || Sg.test(l)) && (i[l] = e[l]);
  return i;
}
function vt(e) {
  if (Bg())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = kg(e);
    e.focus(), Fg(t);
  }
}
let na = null;
function Bg() {
  if (na == null) {
    na = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return na = !0, !0;
        }
      });
    } catch {
    }
  }
  return na;
}
function kg(e) {
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
function Fg(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Za(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Wl(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Vt() {
  return Wl(/^Mac/i);
}
function Vs() {
  return Wl(/^iPhone/i);
}
function Ls() {
  return Wl(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Vt() && navigator.maxTouchPoints > 1;
}
function Wn() {
  return Vs() || Ls();
}
function ma() {
  return Vt() || Wn();
}
function Gl() {
  return Za(/AppleWebKit/i) && !Ag();
}
function Ag() {
  return Za(/Chrome/i);
}
function hr() {
  return Za(/Android/i);
}
function Tg() {
  return Za(/Firefox/i);
}
const Mg = /* @__PURE__ */ W({
  isNative: !0,
  open: Ng
});
function Tr() {
  return U(Mg);
}
function Rg(e, t) {
  let n = e.getAttribute("target");
  return (!n || n === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function mn(e, t, n = !0) {
  var r, a;
  let { metaKey: i, ctrlKey: l, altKey: o, shiftKey: u } = t;
  Tg() && (!((a = window.event) === null || a === void 0 || (r = a.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (Vt() ? i = !0 : l = !0);
  let s = Gl() && Vt() && !Ls() ? new KeyboardEvent("keydown", {
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
  mn.isOpening = n, vt(e), e.dispatchEvent(s), mn.isOpening = !1;
}
mn.isOpening = !1;
function Ig(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n);
  }
}
function Ng(e, t) {
  Ig(e, (n) => mn(n, t));
}
function Zl(e) {
  return {
    "data-href": e.href,
    "data-target": e.target,
    "data-rel": e.rel,
    "data-download": e.download,
    "data-ping": e.ping,
    "data-referrer-policy": e.referrerPolicy
  };
}
let An = /* @__PURE__ */ new Map(), al = /* @__PURE__ */ new Set();
function uu() {
  if (typeof window > "u")
    return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = An.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), An.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = An.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), An.delete(r.target)), An.size === 0)) {
      for (let i of al)
        i();
      al.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? uu() : document.addEventListener("DOMContentLoaded", uu));
function Os(e) {
  requestAnimationFrame(() => {
    An.size === 0 ? e() : al.add(e);
  });
}
function Gn() {
  let e = I(/* @__PURE__ */ new Map()), t = Q((a, i, l, o) => {
    let u = o != null && o.once ? (...s) => {
      e.current.delete(l), l(...s);
    } : l;
    e.current.set(l, {
      type: i,
      eventTarget: a,
      fn: u,
      options: o
    }), a.addEventListener(i, l, o);
  }, []), n = Q((a, i, l, o) => {
    var u;
    let s = ((u = e.current.get(l)) === null || u === void 0 ? void 0 : u.fn) || l;
    a.removeEventListener(i, s, o), e.current.delete(l);
  }, []), r = Q(() => {
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
function Lt(e, t) {
  let { id: n, "aria-label": r, "aria-labelledby": a } = e;
  return n = pe(n), a && r ? a = [
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
function Te(e) {
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
function Ca(e, t) {
  const n = I(!0), r = I(null);
  J(() => (n.current = !0, () => {
    n.current = !1;
  }), []), J(() => {
    n.current ? n.current = !1 : (!r.current || t.some((a, i) => !Object.is(a, r[i]))) && e(), r.current = t;
  }, t);
}
function Kg() {
  return typeof window.ResizeObserver < "u";
}
function Mr(e) {
  const { ref: t, onResize: n } = e;
  J(() => {
    let r = t == null ? void 0 : t.current;
    if (r)
      if (Kg()) {
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
function js(e, t) {
  fe(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function ze(e, t) {
  let n = e;
  for (Ea(n, t) && (n = n.parentElement); n && !Ea(n, t); )
    n = n.parentElement;
  return n || document.scrollingElement || document.documentElement;
}
function Ea(e, t) {
  let n = window.getComputedStyle(e), r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r;
}
let it = typeof document < "u" && window.visualViewport;
function zg() {
  let e = wt(), [t, n] = Z(() => e ? {
    width: 0,
    height: 0
  } : su());
  return J(() => {
    let r = () => {
      n((a) => {
        let i = su();
        return i.width === a.width && i.height === a.height ? a : i;
      });
    };
    return it ? it.addEventListener("resize", r) : window.addEventListener("resize", r), () => {
      it ? it.removeEventListener("resize", r) : window.removeEventListener("resize", r);
    };
  }, []), t;
}
function su() {
  return {
    width: it && (it == null ? void 0 : it.width) || window.innerWidth,
    height: it && (it == null ? void 0 : it.height) || window.innerHeight
  };
}
let Vg = 0;
const Fi = /* @__PURE__ */ new Map();
function St(e) {
  let [t, n] = Z();
  return fe(() => {
    if (!e)
      return;
    let r = Fi.get(e);
    if (r)
      n(r.element.id);
    else {
      let a = `react-aria-description-${Vg++}`;
      n(a);
      let i = document.createElement("div");
      i.id = a, i.style.display = "none", i.textContent = e, document.body.appendChild(i), r = {
        refCount: 0,
        element: i
      }, Fi.set(e, r);
    }
    return r.refCount++, () => {
      r && --r.refCount === 0 && (r.element.remove(), Fi.delete(e));
    };
  }, [
    e
  ]), {
    "aria-describedby": e ? t : void 0
  };
}
function Jt(e, t, n, r) {
  let a = $e(n), i = n == null;
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
function Hs(e, t) {
  let n = du(e, t, "left"), r = du(e, t, "top"), a = t.offsetWidth, i = t.offsetHeight, l = e.scrollLeft, o = e.scrollTop, { borderTopWidth: u, borderLeftWidth: s } = getComputedStyle(e), d = e.scrollLeft + parseInt(s, 10), c = e.scrollTop + parseInt(u, 10), p = d + e.clientWidth, f = c + e.clientHeight;
  n <= l ? l = n - parseInt(s, 10) : n + a > p && (l += n + a - p), r <= c ? o = r - parseInt(u, 10) : r + i > f && (o += r + i - f), e.scrollLeft = l, e.scrollTop = o;
}
function du(e, t, n) {
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
function je(e, t) {
  if (document.contains(e)) {
    let l = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(l).overflow === "hidden") {
      let u = ze(e);
      for (; e && u && e !== l && u !== l; )
        Hs(u, e), e = u, u = ze(e);
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
function il(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : hr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Lg(e) {
  return !hr() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function _s(e, t) {
  let n = I(null);
  return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e;
}
function yn(e, t, n) {
  let r = I(t), a = $e(() => {
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
function Og(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Us(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function jg(e, t) {
  var n = Us(e, t, "get");
  return Og(e, n);
}
function Hg(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Rr(e, t, n) {
  Hg(e, t), t.set(e, n);
}
function _g(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function cu(e, t, n) {
  var r = Us(e, t, "set");
  return _g(e, r, n), n;
}
let Rn = "default", ll = "", ha = /* @__PURE__ */ new WeakMap();
function ol(e) {
  if (Wn()) {
    if (Rn === "default") {
      const t = he(e);
      ll = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Rn = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && (ha.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function ur(e) {
  if (Wn()) {
    if (Rn !== "disabled")
      return;
    Rn = "restoring", setTimeout(() => {
      Os(() => {
        if (Rn === "restoring") {
          const t = he(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = ll || ""), ll = "", Rn = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ha.has(e)) {
    let t = ha.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), ha.delete(e);
  }
}
const ql = g.createContext({
  register: () => {
  }
});
ql.displayName = "PressResponderContext";
function Ug(e) {
  let t = U(ql);
  if (t) {
    let { register: n, ...r } = t;
    e = j(r, e), n();
  }
  return js(t, e.ref), e;
}
var ra = /* @__PURE__ */ new WeakMap();
class aa {
  continuePropagation() {
    cu(this, ra, !1);
  }
  get shouldStopPropagation() {
    return jg(this, ra);
  }
  constructor(t, n, r) {
    Rr(this, ra, {
      writable: !0,
      value: void 0
    }), cu(this, ra, !0), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey;
  }
}
const fu = Symbol("linkClicked");
function Xe(e) {
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
    ...p
  } = Ug(e), [f, b] = Z(!1), m = I({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: h, removeAllGlobalListeners: y } = Gn(), $ = $e((v, R) => {
    let F = m.current;
    if (l || F.didFirePressStart)
      return !1;
    let E = !0;
    if (F.isTriggeringEvent = !0, r) {
      let S = new aa("pressstart", R, v);
      r(S), E = S.shouldStopPropagation;
    }
    return n && n(!0), F.isTriggeringEvent = !1, F.didFirePressStart = !0, b(!0), E;
  }), x = $e((v, R, F = !0) => {
    let E = m.current;
    if (!E.didFirePressStart)
      return !1;
    E.ignoreClickAfterPress = !0, E.didFirePressStart = !1, E.isTriggeringEvent = !0;
    let S = !0;
    if (a) {
      let w = new aa("pressend", R, v);
      a(w), S = w.shouldStopPropagation;
    }
    if (n && n(!1), b(!1), t && F && !l) {
      let w = new aa("press", R, v);
      t(w), S && (S = w.shouldStopPropagation);
    }
    return E.isTriggeringEvent = !1, S;
  }), C = $e((v, R) => {
    let F = m.current;
    if (l)
      return !1;
    if (i) {
      F.isTriggeringEvent = !0;
      let E = new aa("pressup", R, v);
      return i(E), F.isTriggeringEvent = !1, E.shouldStopPropagation;
    }
    return !0;
  }), P = $e((v) => {
    let R = m.current;
    R.isPressed && R.target && (R.isOverTarget && R.pointerType != null && x(Ft(R.target, v), R.pointerType, !1), R.isPressed = !1, R.isOverTarget = !1, R.activePointerId = null, R.pointerType = null, y(), d || ur(R.target));
  }), B = $e((v) => {
    s && P(v);
  }), M = K(() => {
    let v = m.current, R = {
      onKeyDown(E) {
        if (Ai(E.nativeEvent, E.currentTarget) && E.currentTarget.contains(E.target)) {
          var S;
          bu(E.target, E.key) && E.preventDefault();
          let w = !0;
          if (!v.isPressed && !E.repeat) {
            v.target = E.currentTarget, v.isPressed = !0, w = $(E, "keyboard");
            let k = E.currentTarget, z = (T) => {
              Ai(T, k) && !T.repeat && k.contains(T.target) && v.target && C(Ft(v.target, T), "keyboard");
            };
            h(he(E.currentTarget), "keyup", gt(z, F), !0);
          }
          w && E.stopPropagation(), E.metaKey && Vt() && ((S = v.metaKeyEvents) === null || S === void 0 || S.set(E.key, E.nativeEvent));
        } else
          E.key === "Meta" && (v.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(E) {
        if (!(E && !E.currentTarget.contains(E.target)) && E && E.button === 0 && !v.isTriggeringEvent && !mn.isOpening) {
          let S = !0;
          if (l && E.preventDefault(), !v.ignoreClickAfterPress && !v.ignoreEmulatedMouseEvents && !v.isPressed && (v.pointerType === "virtual" || il(E.nativeEvent))) {
            !l && !u && vt(E.currentTarget);
            let w = $(E, "virtual"), k = C(E, "virtual"), z = x(E, "virtual");
            S = w && k && z;
          }
          v.ignoreEmulatedMouseEvents = !1, v.ignoreClickAfterPress = !1, S && E.stopPropagation();
        }
      }
    }, F = (E) => {
      var S;
      if (v.isPressed && v.target && Ai(E, v.target)) {
        var w;
        bu(E.target, E.key) && E.preventDefault();
        let z = E.target;
        x(Ft(v.target, E), "keyboard", v.target.contains(z)), y(), E.key !== "Enter" && Yl(v.target) && v.target.contains(z) && !E[fu] && (E[fu] = !0, mn(v.target, E, !1)), v.isPressed = !1, (w = v.metaKeyEvents) === null || w === void 0 || w.delete(E.key);
      } else if (E.key === "Meta" && (!((S = v.metaKeyEvents) === null || S === void 0) && S.size)) {
        var k;
        let z = v.metaKeyEvents;
        v.metaKeyEvents = void 0;
        for (let T of z.values())
          (k = v.target) === null || k === void 0 || k.dispatchEvent(new KeyboardEvent("keyup", T));
      }
    };
    if (typeof PointerEvent < "u") {
      R.onPointerDown = (k) => {
        if (k.button !== 0 || !k.currentTarget.contains(k.target))
          return;
        if (Lg(k.nativeEvent)) {
          v.pointerType = "virtual";
          return;
        }
        Ti(k.currentTarget) && k.preventDefault(), v.pointerType = k.pointerType;
        let z = !0;
        v.isPressed || (v.isPressed = !0, v.isOverTarget = !0, v.activePointerId = k.pointerId, v.target = k.currentTarget, !l && !u && vt(k.currentTarget), d || ol(v.target), z = $(k, v.pointerType), h(he(k.currentTarget), "pointermove", E, !1), h(he(k.currentTarget), "pointerup", S, !1), h(he(k.currentTarget), "pointercancel", w, !1)), z && k.stopPropagation();
      }, R.onMouseDown = (k) => {
        k.currentTarget.contains(k.target) && k.button === 0 && (Ti(k.currentTarget) && k.preventDefault(), k.stopPropagation());
      }, R.onPointerUp = (k) => {
        !k.currentTarget.contains(k.target) || v.pointerType === "virtual" || k.button === 0 && Bn(k, k.currentTarget) && C(k, v.pointerType || k.pointerType);
      };
      let E = (k) => {
        k.pointerId === v.activePointerId && (v.target && Bn(k, v.target) ? !v.isOverTarget && v.pointerType != null && (v.isOverTarget = !0, $(Ft(v.target, k), v.pointerType)) : v.target && v.isOverTarget && v.pointerType != null && (v.isOverTarget = !1, x(Ft(v.target, k), v.pointerType, !1), B(k)));
      }, S = (k) => {
        k.pointerId === v.activePointerId && v.isPressed && k.button === 0 && v.target && (Bn(k, v.target) && v.pointerType != null ? x(Ft(v.target, k), v.pointerType) : v.isOverTarget && v.pointerType != null && x(Ft(v.target, k), v.pointerType, !1), v.isPressed = !1, v.isOverTarget = !1, v.activePointerId = null, v.pointerType = null, y(), d || ur(v.target));
      }, w = (k) => {
        P(k);
      };
      R.onDragStart = (k) => {
        k.currentTarget.contains(k.target) && P(k);
      };
    } else {
      R.onMouseDown = (w) => {
        if (w.button !== 0 || !w.currentTarget.contains(w.target))
          return;
        if (Ti(w.currentTarget) && w.preventDefault(), v.ignoreEmulatedMouseEvents) {
          w.stopPropagation();
          return;
        }
        v.isPressed = !0, v.isOverTarget = !0, v.target = w.currentTarget, v.pointerType = il(w.nativeEvent) ? "virtual" : "mouse", !l && !u && vt(w.currentTarget), $(w, v.pointerType) && w.stopPropagation(), h(he(w.currentTarget), "mouseup", E, !1);
      }, R.onMouseEnter = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        let k = !0;
        v.isPressed && !v.ignoreEmulatedMouseEvents && v.pointerType != null && (v.isOverTarget = !0, k = $(w, v.pointerType)), k && w.stopPropagation();
      }, R.onMouseLeave = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        let k = !0;
        v.isPressed && !v.ignoreEmulatedMouseEvents && v.pointerType != null && (v.isOverTarget = !1, k = x(w, v.pointerType, !1), B(w)), k && w.stopPropagation();
      }, R.onMouseUp = (w) => {
        w.currentTarget.contains(w.target) && !v.ignoreEmulatedMouseEvents && w.button === 0 && C(w, v.pointerType || "mouse");
      };
      let E = (w) => {
        if (w.button === 0) {
          if (v.isPressed = !1, y(), v.ignoreEmulatedMouseEvents) {
            v.ignoreEmulatedMouseEvents = !1;
            return;
          }
          v.target && Bn(w, v.target) && v.pointerType != null ? x(Ft(v.target, w), v.pointerType) : v.target && v.isOverTarget && v.pointerType != null && x(Ft(v.target, w), v.pointerType, !1), v.isOverTarget = !1;
        }
      };
      R.onTouchStart = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        let k = Wg(w.nativeEvent);
        if (!k)
          return;
        v.activePointerId = k.identifier, v.ignoreEmulatedMouseEvents = !0, v.isOverTarget = !0, v.isPressed = !0, v.target = w.currentTarget, v.pointerType = "touch", !l && !u && vt(w.currentTarget), d || ol(v.target), $(w, v.pointerType) && w.stopPropagation(), h(ut(w.currentTarget), "scroll", S, !0);
      }, R.onTouchMove = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        if (!v.isPressed) {
          w.stopPropagation();
          return;
        }
        let k = pu(w.nativeEvent, v.activePointerId), z = !0;
        k && Bn(k, w.currentTarget) ? !v.isOverTarget && v.pointerType != null && (v.isOverTarget = !0, z = $(w, v.pointerType)) : v.isOverTarget && v.pointerType != null && (v.isOverTarget = !1, z = x(w, v.pointerType, !1), B(w)), z && w.stopPropagation();
      }, R.onTouchEnd = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        if (!v.isPressed) {
          w.stopPropagation();
          return;
        }
        let k = pu(w.nativeEvent, v.activePointerId), z = !0;
        k && Bn(k, w.currentTarget) && v.pointerType != null ? (C(w, v.pointerType), z = x(w, v.pointerType)) : v.isOverTarget && v.pointerType != null && (z = x(w, v.pointerType, !1)), z && w.stopPropagation(), v.isPressed = !1, v.activePointerId = null, v.isOverTarget = !1, v.ignoreEmulatedMouseEvents = !0, v.target && !d && ur(v.target), y();
      }, R.onTouchCancel = (w) => {
        w.currentTarget.contains(w.target) && (w.stopPropagation(), v.isPressed && P(w));
      };
      let S = (w) => {
        v.isPressed && w.target.contains(v.target) && P({
          currentTarget: v.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      R.onDragStart = (w) => {
        w.currentTarget.contains(w.target) && P(w);
      };
    }
    return R;
  }, [
    h,
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
    var v;
    d || ur((v = m.current.target) !== null && v !== void 0 ? v : void 0);
  }, [
    d
  ]), {
    isPressed: o || f,
    pressProps: j(p, M)
  };
}
function Yl(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Ai(e, t) {
  const { key: n, code: r } = e, a = t, i = a.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(a instanceof ut(a).HTMLInputElement && !Ws(a, n) || a instanceof ut(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Yl(a)) && n !== "Enter");
}
function Wg(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function pu(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.identifier === t)
      return a;
  }
  return null;
}
function Ft(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  };
}
function Gg(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function Zg(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Bn(e, t) {
  let n = t.getBoundingClientRect(), r = Gg(e);
  return Zg(n, r);
}
function Ti(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function bu(e, t) {
  return e instanceof HTMLInputElement ? !Ws(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Yl(e);
}
const qg = /* @__PURE__ */ new Set([
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
function Ws(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : qg.has(e.type);
}
function Yg({ children: e }) {
  let t = K(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ g.createElement(ql.Provider, {
    value: t
  }, e);
}
class Jg {
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
function Gs(e) {
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
  let n = $e((r) => {
    e == null || e(r);
  });
  return Q((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = r.target, i = (l) => {
        t.current.isFocused = !1, a.disabled && n(new Jg("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
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
function qa(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e;
  const i = Q((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), a && a(!1), !0;
  }, [
    r,
    a
  ]), l = Gs(i), o = Q((u) => {
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
let Ot = null, vr = /* @__PURE__ */ new Set(), fr = /* @__PURE__ */ new Map(), hn = !1, ul = !1;
const Xg = {
  Tab: !0,
  Escape: !0
};
function Ya(e, t) {
  for (let n of vr)
    n(e, t);
}
function Qg(e) {
  return !(e.metaKey || !Vt() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Pa(e) {
  hn = !0, Qg(e) && (Ot = "keyboard", Ya("keyboard", e));
}
function ot(e) {
  Ot = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (hn = !0, Ya("pointer", e));
}
function Zs(e) {
  il(e) && (hn = !0, Ot = "virtual");
}
function qs(e) {
  e.target === window || e.target === document || (!hn && !ul && (Ot = "virtual", Ya("virtual", e)), hn = !1, ul = !1);
}
function Ys() {
  hn = !1, ul = !0;
}
function wa(e) {
  if (typeof window > "u" || fr.get(ut(e)))
    return;
  const t = ut(e), n = he(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    hn = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Pa, !0), n.addEventListener("keyup", Pa, !0), n.addEventListener("click", Zs, !0), t.addEventListener("focus", qs, !0), t.addEventListener("blur", Ys, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", ot, !0), n.addEventListener("pointermove", ot, !0), n.addEventListener("pointerup", ot, !0)) : (n.addEventListener("mousedown", ot, !0), n.addEventListener("mousemove", ot, !0), n.addEventListener("mouseup", ot, !0)), t.addEventListener("beforeunload", () => {
    Js(e);
  }, {
    once: !0
  }), fr.set(t, {
    focus: r
  });
}
const Js = (e, t) => {
  const n = ut(e), r = he(e);
  t && r.removeEventListener("DOMContentLoaded", t), fr.has(n) && (n.HTMLElement.prototype.focus = fr.get(n).focus, r.removeEventListener("keydown", Pa, !0), r.removeEventListener("keyup", Pa, !0), r.removeEventListener("click", Zs, !0), n.removeEventListener("focus", qs, !0), n.removeEventListener("blur", Ys, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", ot, !0), r.removeEventListener("pointermove", ot, !0), r.removeEventListener("pointerup", ot, !0)) : (r.removeEventListener("mousedown", ot, !0), r.removeEventListener("mousemove", ot, !0), r.removeEventListener("mouseup", ot, !0)), fr.delete(n));
};
function e$(e) {
  const t = he(e);
  let n;
  return t.readyState !== "loading" ? wa(e) : (n = () => {
    wa(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Js(e, n);
}
typeof document < "u" && e$();
function vn() {
  return Ot !== "pointer";
}
function Sa() {
  return Ot;
}
function Jl(e) {
  Ot = e, Ya(e, null);
}
function Ir() {
  wa();
  let [e, t] = Z(Ot);
  return J(() => {
    let n = () => {
      t(Ot);
    };
    return vr.add(n), () => {
      vr.delete(n);
    };
  }, []), wt() ? null : e;
}
const t$ = /* @__PURE__ */ new Set([
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
function n$(e, t, n) {
  var r;
  const a = typeof window < "u" ? ut(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? ut(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? ut(n == null ? void 0 : n.target).HTMLElement : HTMLElement, o = typeof window < "u" ? ut(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof a && !t$.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof o && !Xg[n.key]);
}
function r$(e, t, n) {
  wa(), J(() => {
    let r = (a, i) => {
      n$(!!(n != null && n.isTextInput), a, i) && e(vn());
    };
    return vr.add(r), () => {
      vr.delete(r);
    };
  }, t);
}
function yt(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: a } = e, i = I({
    isFocusWithin: !1
  }), l = Q((s) => {
    i.current.isFocusWithin && !s.currentTarget.contains(s.relatedTarget) && (i.current.isFocusWithin = !1, n && n(s), a && a(!1));
  }, [
    n,
    a,
    i
  ]), o = Gs(l), u = Q((s) => {
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
let Ba = !1, Mi = 0;
function sl() {
  Ba = !0, setTimeout(() => {
    Ba = !1;
  }, 50);
}
function mu(e) {
  e.pointerType === "touch" && sl();
}
function a$() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", mu) : document.addEventListener("touchend", sl), Mi++, () => {
      Mi--, !(Mi > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", mu) : document.removeEventListener("touchend", sl));
    };
}
function ye(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e, [i, l] = Z(!1), o = I({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  J(a$, []);
  let { hoverProps: u, triggerHoverEnd: s } = K(() => {
    let d = (f, b) => {
      if (o.pointerType = b, a || b === "touch" || o.isHovered || !f.currentTarget.contains(f.target))
        return;
      o.isHovered = !0;
      let m = f.currentTarget;
      o.target = m, t && t({
        type: "hoverstart",
        target: m,
        pointerType: b
      }), n && n(!0), l(!0);
    }, c = (f, b) => {
      if (o.pointerType = "", o.target = null, b === "touch" || !o.isHovered)
        return;
      o.isHovered = !1;
      let m = f.currentTarget;
      r && r({
        type: "hoverend",
        target: m,
        pointerType: b
      }), n && n(!1), l(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (f) => {
      Ba && f.pointerType === "mouse" || d(f, f.pointerType);
    }, p.onPointerLeave = (f) => {
      !a && f.currentTarget.contains(f.target) && c(f, f.pointerType);
    }) : (p.onTouchStart = () => {
      o.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (f) => {
      !o.ignoreEmulatedMouseEvents && !Ba && d(f, "mouse"), o.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (f) => {
      !a && f.currentTarget.contains(f.target) && c(f, "mouse");
    }), {
      hoverProps: p,
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
function Xs(e) {
  let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: a } = e, i = I({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), l = $e((u) => {
    n && ia(u, t) && (a && a(u), i.current.isPointerDown = !0);
  }), o = $e((u) => {
    n && n(u);
  });
  J(() => {
    let u = i.current;
    if (r)
      return;
    const s = t.current, d = he(s);
    if (typeof PointerEvent < "u") {
      let c = (p) => {
        u.isPointerDown && ia(p, t) && o(p), u.isPointerDown = !1;
      };
      return d.addEventListener("pointerdown", l, !0), d.addEventListener("pointerup", c, !0), () => {
        d.removeEventListener("pointerdown", l, !0), d.removeEventListener("pointerup", c, !0);
      };
    } else {
      let c = (f) => {
        u.ignoreEmulatedMouseEvents ? u.ignoreEmulatedMouseEvents = !1 : u.isPointerDown && ia(f, t) && o(f), u.isPointerDown = !1;
      }, p = (f) => {
        u.ignoreEmulatedMouseEvents = !0, u.isPointerDown && ia(f, t) && o(f), u.isPointerDown = !1;
      };
      return d.addEventListener("mousedown", l, !0), d.addEventListener("mouseup", c, !0), d.addEventListener("touchstart", l, !0), d.addEventListener("touchend", p, !0), () => {
        d.removeEventListener("mousedown", l, !0), d.removeEventListener("mouseup", c, !0), d.removeEventListener("touchstart", l, !0), d.removeEventListener("touchend", p, !0);
      };
    }
  }, [
    t,
    r,
    l,
    o
  ]);
}
function ia(e, t) {
  if (e.button > 0)
    return !1;
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]"))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
function hu(e) {
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
function Ja(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: hu(e.onKeyDown),
      onKeyUp: hu(e.onKeyUp)
    }
  };
}
function Xl(e) {
  let { onMoveStart: t, onMove: n, onMoveEnd: r } = e, a = I({
    didMove: !1,
    lastPosition: null,
    id: null
  }), { addGlobalListener: i, removeGlobalListener: l } = Gn(), o = $e((d, c, p, f) => {
    p === 0 && f === 0 || (a.current.didMove || (a.current.didMove = !0, t == null || t({
      type: "movestart",
      pointerType: c,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    })), n == null || n({
      type: "move",
      pointerType: c,
      deltaX: p,
      deltaY: f,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  }), u = $e((d, c) => {
    ur(), a.current.didMove && (r == null || r({
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
        ol(), a.current.didMove = !1;
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
        }, b = (y) => {
          y.button === 0 && (u(y, "mouse"), l(window, "mousemove", f, !1), l(window, "mouseup", b, !1));
        };
        d.onMouseDown = (y) => {
          y.button === 0 && (c(), y.stopPropagation(), y.preventDefault(), a.current.lastPosition = {
            pageX: y.pageX,
            pageY: y.pageY
          }, i(window, "mousemove", f, !1), i(window, "mouseup", b, !1));
        };
        let m = (y) => {
          let $ = [
            ...y.changedTouches
          ].findIndex(({ identifier: M }) => M === a.current.id);
          if ($ >= 0) {
            var x, C;
            let { pageX: M, pageY: v } = y.changedTouches[$];
            var P, B;
            o(y, "touch", M - ((P = (x = a.current.lastPosition) === null || x === void 0 ? void 0 : x.pageX) !== null && P !== void 0 ? P : 0), v - ((B = (C = a.current.lastPosition) === null || C === void 0 ? void 0 : C.pageY) !== null && B !== void 0 ? B : 0)), a.current.lastPosition = {
              pageX: M,
              pageY: v
            };
          }
        }, h = (y) => {
          [
            ...y.changedTouches
          ].findIndex(({ identifier: x }) => x === a.current.id) >= 0 && (u(y, "touch"), a.current.id = null, l(window, "touchmove", m), l(window, "touchend", h), l(window, "touchcancel", h));
        };
        d.onTouchStart = (y) => {
          if (y.changedTouches.length === 0 || a.current.id != null)
            return;
          let { pageX: $, pageY: x, identifier: C } = y.changedTouches[0];
          c(), y.stopPropagation(), y.preventDefault(), a.current.lastPosition = {
            pageX: $,
            pageY: x
          }, a.current.id = C, i(window, "touchmove", m, !1), i(window, "touchend", h, !1), i(window, "touchcancel", h, !1);
        };
      } else {
        let f = (m) => {
          if (m.pointerId === a.current.id) {
            var h, y;
            let C = m.pointerType || "mouse";
            var $, x;
            o(m, C, m.pageX - (($ = (h = a.current.lastPosition) === null || h === void 0 ? void 0 : h.pageX) !== null && $ !== void 0 ? $ : 0), m.pageY - ((x = (y = a.current.lastPosition) === null || y === void 0 ? void 0 : y.pageY) !== null && x !== void 0 ? x : 0)), a.current.lastPosition = {
              pageX: m.pageX,
              pageY: m.pageY
            };
          }
        }, b = (m) => {
          if (m.pointerId === a.current.id) {
            let h = m.pointerType || "mouse";
            u(m, h), a.current.id = null, l(window, "pointermove", f, !1), l(window, "pointerup", b, !1), l(window, "pointercancel", b, !1);
          }
        };
        d.onPointerDown = (m) => {
          m.button === 0 && a.current.id == null && (c(), m.stopPropagation(), m.preventDefault(), a.current.lastPosition = {
            pageX: m.pageX,
            pageY: m.pageY
          }, a.current.id = m.pointerId, i(window, "pointermove", f, !1), i(window, "pointerup", b, !1), i(window, "pointercancel", b, !1));
        };
      }
      let p = (f, b, m) => {
        c(), o(f, "keyboard", b, m), u(f, "keyboard");
      };
      return d.onKeyDown = (f) => {
        switch (f.key) {
          case "Left":
          case "ArrowLeft":
            f.preventDefault(), f.stopPropagation(), p(f, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            f.preventDefault(), f.stopPropagation(), p(f, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            f.preventDefault(), f.stopPropagation(), p(f, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            f.preventDefault(), f.stopPropagation(), p(f, 0, 1);
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
function i$(e, t) {
  let { onScroll: n, isDisabled: r } = e, a = Q((i) => {
    i.ctrlKey || (i.preventDefault(), i.stopPropagation(), n && n({
      deltaX: i.deltaX,
      deltaY: i.deltaY
    }));
  }, [
    n
  ]);
  Jt(t, "wheel", r ? void 0 : a);
}
const l$ = 500;
function Qs(e) {
  let { isDisabled: t, onLongPressStart: n, onLongPressEnd: r, onLongPress: a, threshold: i = l$, accessibilityDescription: l } = e;
  const o = I();
  let { addGlobalListener: u, removeGlobalListener: s } = Gn(), { pressProps: d } = Xe({
    isDisabled: t,
    onPressStart(p) {
      if (p.continuePropagation(), (p.pointerType === "mouse" || p.pointerType === "touch") && (n && n({
        ...p,
        type: "longpressstart"
      }), o.current = setTimeout(() => {
        p.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), a && a({
          ...p,
          type: "longpress"
        }), o.current = void 0;
      }, i), p.pointerType === "touch")) {
        let f = (b) => {
          b.preventDefault();
        };
        u(p.target, "contextmenu", f, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            s(p.target, "contextmenu", f);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(p) {
      o.current && clearTimeout(o.current), r && (p.pointerType === "mouse" || p.pointerType === "touch") && r({
        ...p,
        type: "longpressend"
      });
    }
  }), c = St(a && !t ? l : void 0);
  return {
    longPressProps: j(d, c)
  };
}
function De(e) {
  const t = he(e);
  if (Sa() === "virtual") {
    let n = t.activeElement;
    Os(() => {
      t.activeElement === n && e.isConnected && vt(e);
    });
  } else
    vt(e);
}
function o$(e) {
  const t = ut(e);
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
function u$(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function ed(e, t) {
  return e.nodeName !== "#comment" && o$(e) && u$(e, t) && (!e.parentElement || ed(e.parentElement, e));
}
const vu = /* @__PURE__ */ g.createContext(null);
let me = null;
function Nr(e) {
  let { children: t, contain: n, restoreFocus: r, autoFocus: a } = e, i = I(null), l = I(null), o = I([]), { parentNode: u } = U(vu) || {}, s = K(() => new dl({
    scopeRef: o
  }), [
    o
  ]);
  fe(() => {
    let p = u || ke.root;
    if (ke.getTreeNode(p.scopeRef) && me && !Fa(me, p.scopeRef)) {
      let f = ke.getTreeNode(me);
      f && (p = f);
    }
    p.addChild(s), ke.addNode(s);
  }, [
    s,
    u
  ]), fe(() => {
    let p = ke.getTreeNode(o);
    p && (p.contain = !!n);
  }, [
    n
  ]), fe(() => {
    var p;
    let f = (p = i.current) === null || p === void 0 ? void 0 : p.nextSibling, b = [];
    for (; f && f !== l.current; )
      b.push(f), f = f.nextSibling;
    o.current = b;
  }, [
    t
  ]), m$(o, r, n), f$(o, n), v$(o, r, n), b$(o, a), J(() => {
    const p = he(o.current ? o.current[0] : void 0).activeElement;
    let f = null;
    if (He(p, o.current)) {
      for (let b of ke.traverse())
        b.scopeRef && He(p, b.scopeRef.current) && (f = b);
      f === ke.getTreeNode(o) && (me = f.scopeRef);
    }
  }, [
    o
  ]), fe(() => () => {
    var p, f, b;
    let m = (b = (f = ke.getTreeNode(o)) === null || f === void 0 || (p = f.parent) === null || p === void 0 ? void 0 : p.scopeRef) !== null && b !== void 0 ? b : null;
    (o === me || Fa(o, me)) && (!m || ke.getTreeNode(m)) && (me = m), ke.removeTreeNode(o);
  }, [
    o
  ]);
  let d = K(() => s$(o), []), c = K(() => ({
    focusManager: d,
    parentNode: s
  }), [
    s,
    d
  ]);
  return /* @__PURE__ */ g.createElement(vu.Provider, {
    value: c
  }, /* @__PURE__ */ g.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: i
  }), t, /* @__PURE__ */ g.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: l
  }));
}
function s$(e) {
  return {
    focusNext(t = {}) {
      let n = e.current, { from: r, tabbable: a, wrap: i, accept: l } = t, o = r || he(n[0]).activeElement, u = n[0].previousElementSibling, s = cn(n), d = Ne(s, {
        tabbable: a,
        accept: l
      }, n);
      d.currentNode = He(o, n) ? o : u;
      let c = d.nextNode();
      return !c && i && (d.currentNode = u, c = d.nextNode()), c && qe(c, !0), c;
    },
    focusPrevious(t = {}) {
      let n = e.current, { from: r, tabbable: a, wrap: i, accept: l } = t, o = r || he(n[0]).activeElement, u = n[n.length - 1].nextElementSibling, s = cn(n), d = Ne(s, {
        tabbable: a,
        accept: l
      }, n);
      d.currentNode = He(o, n) ? o : u;
      let c = d.previousNode();
      return !c && i && (d.currentNode = u, c = d.previousNode()), c && qe(c, !0), c;
    },
    focusFirst(t = {}) {
      let n = e.current, { tabbable: r, accept: a } = t, i = cn(n), l = Ne(i, {
        tabbable: r,
        accept: a
      }, n);
      l.currentNode = n[0].previousElementSibling;
      let o = l.nextNode();
      return o && qe(o, !0), o;
    },
    focusLast(t = {}) {
      let n = e.current, { tabbable: r, accept: a } = t, i = cn(n), l = Ne(i, {
        tabbable: r,
        accept: a
      }, n);
      l.currentNode = n[n.length - 1].nextElementSibling;
      let o = l.previousNode();
      return o && qe(o, !0), o;
    }
  };
}
const Ql = [
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
], d$ = Ql.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Ql.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const c$ = Ql.join(':not([hidden]):not([tabindex="-1"]),');
function cn(e) {
  return e[0].parentElement;
}
function sr(e) {
  let t = ke.getTreeNode(me);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain)
      return !1;
    t = t.parent;
  }
  return !0;
}
function f$(e, t) {
  let n = I(), r = I();
  fe(() => {
    let a = e.current;
    if (!t) {
      r.current && (cancelAnimationFrame(r.current), r.current = void 0);
      return;
    }
    const i = he(a ? a[0] : void 0);
    let l = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !sr(e))
        return;
      let d = i.activeElement, c = e.current;
      if (!c || !He(d, c))
        return;
      let p = cn(c), f = Ne(p, {
        tabbable: !0
      }, c);
      if (!d)
        return;
      f.currentNode = d;
      let b = s.shiftKey ? f.previousNode() : f.nextNode();
      b || (f.currentNode = s.shiftKey ? c[c.length - 1].nextElementSibling : c[0].previousElementSibling, b = s.shiftKey ? f.previousNode() : f.nextNode()), s.preventDefault(), b && qe(b, !0);
    }, o = (s) => {
      (!me || Fa(me, e)) && He(s.target, e.current) ? (me = e, n.current = s.target) : sr(e) && !ka(s.target, e) ? n.current ? n.current.focus() : me && me.current && Aa(me.current) : sr(e) && (n.current = s.target);
    }, u = (s) => {
      r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
        if (i.activeElement && sr(e) && !ka(i.activeElement, e))
          if (me = e, i.body.contains(s.target)) {
            var d;
            n.current = s.target, (d = n.current) === null || d === void 0 || d.focus();
          } else
            me.current && Aa(me.current);
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
function td(e) {
  return ka(e);
}
function He(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
function ka(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
    return !0;
  for (let { scopeRef: n } of ke.traverse(ke.getTreeNode(t)))
    if (n && He(e, n.current))
      return !0;
  return !1;
}
function p$(e) {
  return ka(e, me);
}
function Fa(e, t) {
  var n;
  let r = (n = ke.getTreeNode(t)) === null || n === void 0 ? void 0 : n.parent;
  for (; r; ) {
    if (r.scopeRef === e)
      return !0;
    r = r.parent;
  }
  return !1;
}
function qe(e, t = !1) {
  if (e != null && !t)
    try {
      De(e);
    } catch {
    }
  else if (e != null)
    try {
      e.focus();
    } catch {
    }
}
function Aa(e, t = !0) {
  let n = e[0].previousElementSibling, r = cn(e), a = Ne(r, {
    tabbable: t
  }, e);
  a.currentNode = n;
  let i = a.nextNode();
  t && !i && (r = cn(e), a = Ne(r, {
    tabbable: !1
  }, e), a.currentNode = n, i = a.nextNode()), qe(i);
}
function b$(e, t) {
  const n = g.useRef(t);
  J(() => {
    if (n.current) {
      me = e;
      const r = he(e.current ? e.current[0] : void 0);
      !He(r.activeElement, me.current) && e.current && Aa(e.current);
    }
    n.current = !1;
  }, [
    e
  ]);
}
function m$(e, t, n) {
  fe(() => {
    if (t || n)
      return;
    let r = e.current;
    const a = he(r ? r[0] : void 0);
    let i = (l) => {
      let o = l.target;
      He(o, e.current) ? me = e : td(o) || (me = null);
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
function h$(e) {
  let t = ke.getTreeNode(me);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore)
      return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function v$(e, t, n) {
  const r = I(typeof document < "u" ? he(e.current ? e.current[0] : void 0).activeElement : null);
  fe(() => {
    let a = e.current;
    const i = he(a ? a[0] : void 0);
    if (!t || n)
      return;
    let l = () => {
      (!me || Fa(me, e)) && He(i.activeElement, e.current) && (me = e);
    };
    return i.addEventListener("focusin", l, !1), a == null || a.forEach((o) => o.addEventListener("focusin", l, !1)), () => {
      i.removeEventListener("focusin", l, !1), a == null || a.forEach((o) => o.removeEventListener("focusin", l, !1));
    };
  }, [
    e,
    n
  ]), fe(() => {
    const a = he(e.current ? e.current[0] : void 0);
    if (!t)
      return;
    let i = (l) => {
      if (l.key !== "Tab" || l.altKey || l.ctrlKey || l.metaKey || !sr(e))
        return;
      let o = a.activeElement;
      if (!He(o, e.current))
        return;
      let u = ke.getTreeNode(e);
      if (!u)
        return;
      let s = u.nodeToRestore, d = Ne(a.body, {
        tabbable: !0
      });
      d.currentNode = o;
      let c = l.shiftKey ? d.previousNode() : d.nextNode();
      if ((!s || !a.body.contains(s) || s === a.body) && (s = void 0, u.nodeToRestore = void 0), (!c || !He(c, e.current)) && s) {
        d.currentNode = s;
        do
          c = l.shiftKey ? d.previousNode() : d.nextNode();
        while (He(c, e.current));
        l.preventDefault(), l.stopPropagation(), c ? qe(c, !0) : td(s) ? qe(s, !0) : o.blur();
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
    const a = he(e.current ? e.current[0] : void 0);
    if (!t)
      return;
    let i = ke.getTreeNode(e);
    if (i) {
      var l;
      return i.nodeToRestore = (l = r.current) !== null && l !== void 0 ? l : void 0, () => {
        let o = ke.getTreeNode(e);
        if (!o)
          return;
        let u = o.nodeToRestore;
        if (t && u && // eslint-disable-next-line react-hooks/exhaustive-deps
        (He(a.activeElement, e.current) || a.activeElement === a.body && h$(e))) {
          let s = ke.clone();
          requestAnimationFrame(() => {
            if (a.activeElement === a.body) {
              let d = s.getTreeNode(e);
              for (; d; ) {
                if (d.nodeToRestore && d.nodeToRestore.isConnected) {
                  qe(d.nodeToRestore);
                  return;
                }
                d = d.parent;
              }
              for (d = s.getTreeNode(e); d; ) {
                if (d.scopeRef && d.scopeRef.current && ke.getTreeNode(d.scopeRef)) {
                  Aa(d.scopeRef.current, !0);
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
  let r = t != null && t.tabbable ? c$ : d$, a = he(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var l;
      return !(t == null || (l = t.from) === null || l === void 0) && l.contains(i) ? NodeFilter.FILTER_REJECT : i.matches(r) && ed(i) && (!n || He(i, n)) && (!(t != null && t.accept) || t.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (a.currentNode = t.from), a;
}
function Kr(e, t = {}) {
  return {
    focusNext(n = {}) {
      let r = e.current;
      if (!r)
        return null;
      let { from: a, tabbable: i = t.tabbable, wrap: l = t.wrap, accept: o = t.accept } = n, u = a || he(r).activeElement, s = Ne(r, {
        tabbable: i,
        accept: o
      });
      r.contains(u) && (s.currentNode = u);
      let d = s.nextNode();
      return !d && l && (s.currentNode = r, d = s.nextNode()), d && qe(d, !0), d;
    },
    focusPrevious(n = t) {
      let r = e.current;
      if (!r)
        return null;
      let { from: a, tabbable: i = t.tabbable, wrap: l = t.wrap, accept: o = t.accept } = n, u = a || he(r).activeElement, s = Ne(r, {
        tabbable: i,
        accept: o
      });
      if (r.contains(u))
        s.currentNode = u;
      else {
        let c = Ri(s);
        return c && qe(c, !0), c ?? null;
      }
      let d = s.previousNode();
      if (!d && l) {
        s.currentNode = r;
        let c = Ri(s);
        if (!c)
          return null;
        d = c;
      }
      return d && qe(d, !0), d ?? null;
    },
    focusFirst(n = t) {
      let r = e.current;
      if (!r)
        return null;
      let { tabbable: a = t.tabbable, accept: i = t.accept } = n, o = Ne(r, {
        tabbable: a,
        accept: i
      }).nextNode();
      return o && qe(o, !0), o;
    },
    focusLast(n = t) {
      let r = e.current;
      if (!r)
        return null;
      let { tabbable: a = t.tabbable, accept: i = t.accept } = n, l = Ne(r, {
        tabbable: a,
        accept: i
      }), o = Ri(l);
      return o && qe(o, !0), o ?? null;
    }
  };
}
function Ri(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
class eo {
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
    let i = new dl({
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
      i !== n && n.nodeToRestore && i.nodeToRestore && n.scopeRef && n.scopeRef.current && He(i.nodeToRestore, n.scopeRef.current) && (i.nodeToRestore = n.nodeToRestore);
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
    let n = new eo();
    var r;
    for (let a of this.traverse())
      n.addTreeNode(a.scopeRef, (r = (t = a.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && r !== void 0 ? r : null, a.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new dl({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class dl {
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
let ke = new eo();
function be(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, a = I({
    isFocused: !1,
    isFocusVisible: t || vn()
  }), [i, l] = Z(!1), [o, u] = Z(() => a.current.isFocused && a.current.isFocusVisible), s = Q(() => u(a.current.isFocused && a.current.isFocusVisible), []), d = Q((f) => {
    a.current.isFocused = f, l(f), s();
  }, [
    s
  ]);
  r$((f) => {
    a.current.isFocusVisible = f, s();
  }, [], {
    isTextInput: n
  });
  let { focusProps: c } = qa({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: p } = yt({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: i,
    isFocusVisible: o,
    focusProps: r ? p : c
  };
}
let g$ = /* @__PURE__ */ g.createContext(null);
function $$(e) {
  let t = U(g$) || {};
  js(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function xn(e, t) {
  let { focusProps: n } = qa(e), { keyboardProps: r } = Ja(e), a = j(n, r), i = $$(t), l = e.isDisabled ? {} : i, o = I(e.autoFocus);
  return J(() => {
    o.current && t.current && De(t.current), o.current = !1;
  }, [
    t
  ]), {
    focusableProps: j({
      ...a,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, l)
  };
}
function to(e, t) {
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
function y$(e, t) {
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
  let { focusableProps: d } = xn(e, t), { pressProps: c, isPressed: p } = Xe({
    onPress: r,
    onPressStart: a,
    onPressEnd: i,
    isDisabled: o,
    ref: t
  }), f = Y(u, {
    labelable: !0,
    isLink: n === "a"
  }), b = j(d, c), m = Tr();
  return {
    isPressed: p,
    linkProps: j(f, {
      ...b,
      ...s,
      "aria-disabled": o || void 0,
      "aria-current": e["aria-current"],
      onClick: (h) => {
        var y;
        (y = c.onClick) === null || y === void 0 || y.call(c, h), l && (l(h), console.warn("onClick is deprecated, please use onPress")), !m.isNative && h.currentTarget instanceof HTMLAnchorElement && h.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !h.isDefaultPrevented() && Rg(h.currentTarget, h) && (h.preventDefault(), m.open(h.currentTarget, h));
      }
    })
  };
}
const x$ = Symbol.for("react-aria.i18n.locale"), D$ = Symbol.for("react-aria.i18n.strings");
let kn;
class Dn {
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
    return n || (n = C$(t, this.strings, this.defaultLocale), this.strings[t] = n), n;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u")
      return null;
    let n = window[x$];
    if (kn === void 0) {
      let a = window[D$];
      if (!a)
        return null;
      kn = {};
      for (let i in a)
        kn[i] = new Dn({
          [n]: a[i]
        }, n);
    }
    let r = kn == null ? void 0 : kn[t];
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
function C$(e, t, n = "en-US") {
  if (t[e])
    return t[e];
  let r = E$(e);
  if (t[r])
    return t[r];
  for (let a in t)
    if (a.startsWith(r + "-"))
      return t[a];
  return t[n];
}
function E$(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const gu = /* @__PURE__ */ new Map(), $u = /* @__PURE__ */ new Map();
class nd {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, n) {
    let r = this.strings.getStringForLocale(t, this.locale);
    return typeof r == "function" ? r(n, this) : r;
  }
  plural(t, n, r = "cardinal") {
    let a = n["=" + t];
    if (a)
      return typeof a == "function" ? a() : a;
    let i = this.locale + ":" + r, l = gu.get(i);
    l || (l = new Intl.PluralRules(this.locale, {
      type: r
    }), gu.set(i, l));
    let o = l.select(t);
    return a = n[o] || n.other, typeof a == "function" ? a() : a;
  }
  number(t) {
    let n = $u.get(this.locale);
    return n || (n = new Intl.NumberFormat(this.locale), $u.set(this.locale, n)), n.format(t);
  }
  select(t, n) {
    let r = t[n] || t.other;
    return typeof r == "function" ? r() : r;
  }
  constructor(t, n) {
    this.locale = t, this.strings = n;
  }
}
function Kt(e, t) {
  return e - t * Math.floor(e / t);
}
const rd = 1721426;
function fn(e, t, n, r) {
  t = zr(e, t);
  let a = t - 1, i = -2;
  return n <= 2 ? i = 0 : Xt(t) && (i = -1), rd - 1 + 365 * a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor((367 * n - 362) / 12 + i + r);
}
function Xt(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function zr(e, t) {
  return e === "BC" ? 1 - t : t;
}
function Xa(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const P$ = {
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
    let n = t, r = n - rd, a = Math.floor(r / 146097), i = Kt(r, 146097), l = Math.floor(i / 36524), o = Kt(i, 36524), u = Math.floor(o / 1461), s = Kt(o, 1461), d = Math.floor(s / 365), c = a * 400 + l * 100 + u * 4 + d + (l !== 4 && d !== 4 ? 1 : 0), [p, f] = Xa(c), b = n - fn(p, f, 1, 1), m = 2;
    n < fn(p, f, 3, 1) ? m = 0 : Xt(f) && (m = 1);
    let h = Math.floor(((b + m) * 12 + 373) / 367), y = n - fn(p, f, h, 1) + 1;
    return new Ae(p, f, h, y);
  }
  toJulianDay(t) {
    return fn(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return P$[Xt(t.year) ? "leapyear" : "standard"][t.month - 1];
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
const w$ = {
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
function Fe(e, t) {
  return t = Ce(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function S$(e, t) {
  return t = Ce(t, e.calendar), e = gn(e), t = gn(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function cl(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function B$(e, t) {
  return Fe(e, Qa(t));
}
function no(e, t) {
  let n = e.calendar.toJulianDay(e), r = Math.ceil(n + 1 - R$(t)) % 7;
  return r < 0 && (r += 7), r;
}
function ad(e) {
  return It(Date.now(), e);
}
function Qa(e) {
  return _e(ad(e));
}
function id(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function ld(e, t) {
  return yu(e) - yu(t);
}
function yu(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Ii = null;
function ro() {
  return Ii == null && (Ii = new Intl.DateTimeFormat().resolvedOptions().timeZone), Ii;
}
function gn(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Ta(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
function k$(e) {
  return gn(e.subtract({
    months: e.month - 1
  }));
}
function F$(e) {
  return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function A$(e) {
  return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function gr(e, t) {
  let n = no(e, t);
  return e.subtract({
    days: n
  });
}
function T$(e, t) {
  return gr(e, t).add({
    days: 6
  });
}
const xu = /* @__PURE__ */ new Map();
function M$(e) {
  if (Intl.Locale) {
    let n = xu.get(e);
    return n || (n = new Intl.Locale(e).maximize().region, n && xu.set(e, n)), n;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function R$(e) {
  let t = M$(e);
  return t && w$[t] || 0;
}
function I$(e, t) {
  let n = e.calendar.getDaysInMonth(e);
  return Math.ceil((no(gn(e), t) + n) / 7);
}
function ao(e, t) {
  return e && t ? e.compare(t) <= 0 ? e : t : e || t;
}
function io(e, t) {
  return e && t ? e.compare(t) >= 0 ? e : t : e || t;
}
function _n(e) {
  e = Ce(e, new Ue());
  let t = zr(e.era, e.year);
  return od(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function od(e, t, n, r, a, i, l) {
  let o = /* @__PURE__ */ new Date();
  return o.setUTCHours(r, a, i, l), o.setUTCFullYear(e, t - 1, n), o.getTime();
}
function fl(e, t) {
  if (t === "UTC")
    return 0;
  if (e > 0 && t === ro())
    return new Date(e).getTimezoneOffset() * -6e4;
  let { year: n, month: r, day: a, hour: i, minute: l, second: o } = ud(e, t);
  return od(n, r, a, i, l, o, 0) - Math.floor(e / 1e3) * 1e3;
}
const Du = /* @__PURE__ */ new Map();
function ud(e, t) {
  let n = Du.get(t);
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
  }), Du.set(t, n));
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
const Cu = 864e5;
function N$(e, t, n, r) {
  return (n === r ? [
    n
  ] : [
    n,
    r
  ]).filter((i) => K$(e, t, i));
}
function K$(e, t, n) {
  let r = ud(n, t);
  return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function Mt(e, t, n = "compatible") {
  let r = $t(e);
  if (t === "UTC")
    return _n(r);
  if (t === ro() && n === "compatible") {
    r = Ce(r, new Ue());
    let u = /* @__PURE__ */ new Date(), s = zr(r.era, r.year);
    return u.setFullYear(s, r.month - 1, r.day), u.setHours(r.hour, r.minute, r.second, r.millisecond), u.getTime();
  }
  let a = _n(r), i = fl(a - Cu, t), l = fl(a + Cu, t), o = N$(r, t, a - i, a - l);
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
function sd(e, t, n = "compatible") {
  return new Date(Mt(e, t, n));
}
function It(e, t) {
  let n = fl(e, t), r = new Date(e + n), a = r.getUTCFullYear(), i = r.getUTCMonth() + 1, l = r.getUTCDate(), o = r.getUTCHours(), u = r.getUTCMinutes(), s = r.getUTCSeconds(), d = r.getUTCMilliseconds();
  return new yr(a, i, l, t, n, o, u, s, d);
}
function _e(e) {
  return new Ae(e.calendar, e.era, e.year, e.month, e.day);
}
function $t(e, t) {
  let n = 0, r = 0, a = 0, i = 0;
  if ("timeZone" in e)
    ({ hour: n, minute: r, second: a, millisecond: i } = e);
  else if ("hour" in e && !t)
    return e;
  return t && ({ hour: n, minute: r, second: a, millisecond: i } = t), new Ma(e.calendar, e.era, e.year, e.month, e.day, n, r, a, i);
}
function Eu(e) {
  return new Vr(e.hour, e.minute, e.second, e.millisecond);
}
function Ce(e, t) {
  if (e.calendar.identifier === t.identifier)
    return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
  return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, $n(r), r;
}
function dd(e, t, n) {
  if (e instanceof yr)
    return e.timeZone === t ? e : V$(e, t);
  let r = Mt(e, t, n);
  return It(r, t);
}
function z$(e) {
  let t = _n(e) - e.offset;
  return new Date(t);
}
function V$(e, t) {
  let n = _n(e) - e.offset;
  return Ce(It(n, t), e.calendar);
}
const Qn = 36e5;
function ei(e, t) {
  let n = e.copy(), r = "hour" in n ? bd(n, t) : 0;
  pl(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, bl(n), cd(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, L$(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
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
function pl(e, t) {
  var n, r;
  !((n = (r = e.calendar).isInverseEra) === null || n === void 0) && n.call(r, e) && (t = -t), e.year += t;
}
function bl(e) {
  for (; e.month < 1; )
    pl(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, pl(e, 1);
}
function L$(e) {
  for (; e.day < 1; )
    e.month--, bl(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, bl(e);
}
function cd(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function $n(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), cd(e);
}
function lo(e) {
  let t = {};
  for (let n in e)
    typeof e[n] == "number" && (t[n] = -e[n]);
  return t;
}
function fd(e, t) {
  return ei(e, lo(t));
}
function oo(e, t) {
  let n = e.copy();
  return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), $n(n), n;
}
function $r(e, t) {
  let n = e.copy();
  return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), pd(n), n;
}
function O$(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = la(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = la(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = la(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = la(e.hour, 24), t;
}
function pd(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function la(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n;
}
function bd(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, O$(e);
}
function md(e, t) {
  let n = e.copy();
  return bd(n, t), n;
}
function j$(e, t) {
  return md(e, lo(t));
}
function uo(e, t, n, r) {
  let a = e.copy();
  switch (t) {
    case "era": {
      let o = e.calendar.getEras(), u = o.indexOf(e.era);
      if (u < 0)
        throw new Error("Invalid era: " + e.era);
      u = Nt(u, n, 0, o.length - 1, r == null ? void 0 : r.round), a.era = o[u], $n(a);
      break;
    }
    case "year":
      var i, l;
      !((i = (l = a.calendar).isInverseEra) === null || i === void 0) && i.call(l, a) && (n = -n), a.year = Nt(e.year, n, -1 / 0, 9999, r == null ? void 0 : r.round), a.year === -1 / 0 && (a.year = 1), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
      break;
    case "month":
      a.month = Nt(e.month, n, 1, e.calendar.getMonthsInYear(e), r == null ? void 0 : r.round);
      break;
    case "day":
      a.day = Nt(e.day, n, 1, e.calendar.getDaysInMonth(e), r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(a), $n(a), a;
}
function so(e, t, n, r) {
  let a = e.copy();
  switch (t) {
    case "hour": {
      let i = e.hour, l = 0, o = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let u = i >= 12;
        l = u ? 12 : 0, o = u ? 23 : 11;
      }
      a.hour = Nt(i, n, l, o, r == null ? void 0 : r.round);
      break;
    }
    case "minute":
      a.minute = Nt(e.minute, n, 0, 59, r == null ? void 0 : r.round);
      break;
    case "second":
      a.second = Nt(e.second, n, 0, 59, r == null ? void 0 : r.round);
      break;
    case "millisecond":
      a.millisecond = Nt(e.millisecond, n, 0, 999, r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return a;
}
function Nt(e, t, n, r, a = !1) {
  if (a) {
    e += Math.sign(t), e < n && (e = r);
    let i = Math.abs(t);
    t > 0 ? e = Math.ceil(e / i) * i : e = Math.floor(e / i) * i, e > r && (e = n);
  } else
    e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
  return e;
}
function hd(e, t) {
  let n;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let a = ei($t(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    n = Mt(a, e.timeZone);
  } else
    n = _n(e) - e.offset;
  n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5;
  let r = It(n, e.timeZone);
  return Ce(r, e.calendar);
}
function H$(e, t) {
  return hd(e, lo(t));
}
function _$(e, t, n, r) {
  switch (t) {
    case "hour": {
      let a = 0, i = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let b = e.hour >= 12;
        a = b ? 12 : 0, i = b ? 23 : 11;
      }
      let l = $t(e), o = Ce($r(l, {
        hour: a
      }), new Ue()), u = [
        Mt(o, e.timeZone, "earlier"),
        Mt(o, e.timeZone, "later")
      ].filter((b) => It(b, e.timeZone).day === o.day)[0], s = Ce($r(l, {
        hour: i
      }), new Ue()), d = [
        Mt(s, e.timeZone, "earlier"),
        Mt(s, e.timeZone, "later")
      ].filter((b) => It(b, e.timeZone).day === s.day).pop(), c = _n(e) - e.offset, p = Math.floor(c / Qn), f = c % Qn;
      return c = Nt(p, n, Math.floor(u / Qn), Math.floor(d / Qn), r == null ? void 0 : r.round) * Qn + f, Ce(It(c, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return so(e, t, n, r);
    case "era":
    case "year":
    case "month":
    case "day": {
      let a = uo($t(e), t, n, r), i = Mt(a, e.timeZone);
      return Ce(It(i, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function U$(e, t, n) {
  let r = $t(e), a = $r(oo(r, t), t);
  if (a.compare(r) === 0)
    return e;
  let i = Mt(a, e.timeZone, n);
  return Ce(It(i, e.timeZone), e.calendar);
}
function vd(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function gd(e) {
  let t = Ce(e, new Ue());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function $d(e) {
  return `${gd(e)}T${vd(e)}`;
}
function W$(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let n = Math.floor(e / 36e5), r = e % 36e5 / 6e4;
  return `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function G$(e) {
  return `${$d(e)}${W$(e.offset)}[${e.timeZone}]`;
}
function co(e) {
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
var Z$ = /* @__PURE__ */ new WeakMap();
class Ae {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ae(this.calendar, this.era, this.year, this.month, this.day) : new Ae(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return ei(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return fd(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return oo(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return uo(this, t, n, r);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return sd(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return gd(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return id(this, t);
  }
  constructor(...t) {
    Rr(this, Z$, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, i, l] = co(t);
    this.calendar = n, this.era = r, this.year = a, this.month = i, this.day = l, $n(this);
  }
}
var q$ = /* @__PURE__ */ new WeakMap();
class Vr {
  /** Returns a copy of this time. */
  copy() {
    return new Vr(this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `Time` with the given duration added to it. */
  add(t) {
    return md(this, t);
  }
  /** Returns a new `Time` with the given duration subtracted from it. */
  subtract(t) {
    return j$(this, t);
  }
  /** Returns a new `Time` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return $r(this, t);
  }
  /**
  * Returns a new `Time` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return so(this, t, n, r);
  }
  /** Converts the time to an ISO 8601 formatted string. */
  toString() {
    return vd(this);
  }
  /** Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. */
  compare(t) {
    return ld(this, t);
  }
  constructor(t = 0, n = 0, r = 0, a = 0) {
    Rr(this, q$, {
      writable: !0,
      value: void 0
    }), this.hour = t, this.minute = n, this.second = r, this.millisecond = a, pd(this);
  }
}
var Y$ = /* @__PURE__ */ new WeakMap();
class Ma {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ma(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Ma(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return ei(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return fd(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return oo($r(this, t), t);
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
        return uo(this, t, n, r);
      default:
        return so(this, t, n, r);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, n) {
    return sd(this, t, n);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return $d(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let n = id(this, t);
    return n === 0 ? ld(this, $t(t)) : n;
  }
  constructor(...t) {
    Rr(this, Y$, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, i, l] = co(t);
    this.calendar = n, this.era = r, this.year = a, this.month = i, this.day = l, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, $n(this);
  }
}
var J$ = /* @__PURE__ */ new WeakMap();
class yr {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new yr(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new yr(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return hd(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return H$(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, n) {
    return U$(this, t, n);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return _$(this, t, n, r);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return z$(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return G$(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - dd(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Rr(this, J$, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, i, l] = co(t), o = t.shift(), u = t.shift();
    this.calendar = n, this.era = r, this.year = a, this.month = i, this.day = l, this.timeZone = o, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, $n(this);
  }
}
const Ln = [
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
], X$ = [
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
], va = [
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
function Pu(e) {
  const t = Ln.findIndex(([n, r, a]) => e.year < n || e.year === n && e.month < r || e.year === n && e.month === r && e.day < a);
  return t === -1 ? Ln.length - 1 : t === 0 ? 0 : t - 1;
}
function Ni(e) {
  let t = va[Zt.indexOf(e.era)];
  if (!t)
    throw new Error("Unknown era: " + e.era);
  return new Ae(e.year + t, e.month, e.day);
}
class Q$ extends Ue {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = Pu(n);
    return new Ae(this, Zt[r], n.year - va[r], n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Ni(t));
  }
  balanceDate(t) {
    let n = Ni(t), r = Pu(n);
    Zt[r] !== t.era && (t.era = Zt[r], t.year = n.year - va[r]), this.constrainDate(t);
  }
  constrainDate(t) {
    let n = Zt.indexOf(t.era), r = X$[n];
    if (r != null) {
      let [a, i, l] = r, o = a - va[n];
      t.year = Math.max(1, Math.min(o, t.year)), t.year === o && (t.month = Math.min(i, t.month), t.month === i && (t.day = Math.min(l, t.day)));
    }
    if (t.year === 1 && n >= 0) {
      let [, a, i] = Ln[n];
      t.month = Math.max(a, t.month), t.month === a && (t.day = Math.max(i, t.day));
    }
  }
  getEras() {
    return Zt;
  }
  getYearsInEra(t) {
    let n = Zt.indexOf(t.era), r = Ln[n], a = Ln[n + 1];
    if (a == null)
      return 9999 - r[0] + 1;
    let i = a[0] - r[0];
    return (t.month < a[1] || t.month === a[1] && t.day < a[2]) && i++, i;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Ni(t));
  }
  getMinimumMonthInYear(t) {
    let n = wu(t);
    return n ? n[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let n = wu(t);
    return n && t.month === n[1] ? n[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function wu(e) {
  if (e.year === 1) {
    let t = Zt.indexOf(e.era);
    return Ln[t];
  }
}
const yd = -543;
class e1 extends Ue {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = zr(n.era, n.year);
    return new Ae(this, r - yd, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Su(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Su(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Su(e) {
  let [t, n] = Xa(e.year + yd);
  return new Ae(t, n, e.month, e.day);
}
const Ra = 1911;
function xd(e) {
  return e.era === "minguo" ? e.year + Ra : 1 - e.year + Ra;
}
function Bu(e) {
  let t = e - Ra;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class t1 extends Ue {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = zr(n.era, n.year), [a, i] = Bu(r);
    return new Ae(this, a, i, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(ku(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [n, r] = Bu(xd(t));
    t.era = n, t.year = r;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(ku(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - Ra;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function ku(e) {
  let [t, n] = Xa(xd(e));
  return new Ae(t, n, e.month, e.day);
}
const n1 = 1948321;
function r1(e) {
  let t = e > 0 ? e - 474 : e - 473, n = Kt(t, 2820) + 474;
  return Kt((n + 38) * 31, 128) < 31;
}
function oa(e, t, n) {
  let r = e > 0 ? e - 474 : e - 473, a = Kt(r, 2820) + 474, i = t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6;
  return n1 - 1 + 1029983 * Math.floor(r / 2820) + 365 * (a - 1) + Math.floor((31 * a - 5) / 128) + i + n;
}
class a1 {
  fromJulianDay(t) {
    let n = t - oa(475, 1, 1), r = Math.floor(n / 1029983), a = Kt(n, 1029983), i = a === 1029982 ? 2820 : Math.floor((128 * a + 46878) / 46751), l = 474 + 2820 * r + i;
    l <= 0 && l--;
    let o = t - oa(l, 1, 1) + 1, u = o <= 186 ? Math.ceil(o / 31) : Math.ceil((o - 6) / 31), s = t - oa(l, u, 1) + 1;
    return new Ae(this, l, u, s);
  }
  toJulianDay(t) {
    return oa(t.year, t.month, t.day);
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || r1(t.year) ? 30 : 29;
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
const Ki = 78, Fu = 80;
class i1 extends Ue {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = n.year - Ki, a = t - fn(n.era, n.year, 1, 1), i;
    a < Fu ? (r--, i = Xt(n.year - 1) ? 31 : 30, a += i + 155 + 90 + 10) : (i = Xt(n.year) ? 31 : 30, a -= Fu);
    let l, o;
    if (a < i)
      l = 1, o = a + 1;
    else {
      let u = a - i;
      u < 155 ? (l = Math.floor(u / 31) + 2, o = u % 31 + 1) : (u -= 155, l = Math.floor(u / 30) + 7, o = u % 30 + 1);
    }
    return new Ae(this, r, l, o);
  }
  toJulianDay(t) {
    let n = t.year + Ki, [r, a] = Xa(n), i, l;
    return Xt(a) ? (i = 31, l = fn(r, a, 3, 21)) : (i = 30, l = fn(r, a, 3, 22)), t.month === 1 ? l + t.day - 1 : (l += i + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (l += (t.month - 7) * 30), l += t.day - 1, l);
  }
  getDaysInMonth(t) {
    return t.month === 1 && Xt(t.year + Ki) || t.month >= 2 && t.month <= 6 ? 31 : 30;
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
const Ia = 1948440, Au = 1948439, lt = 1300, Fn = 1600, l1 = 460322;
function Na(e, t, n, r) {
  return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Dd(e, t, n) {
  let r = Math.floor((30 * (n - t) + 10646) / 10631), a = Math.min(12, Math.ceil((n - (29 + Na(t, r, 1, 1))) / 29.5) + 1), i = n - Na(t, r, a, 1) + 1;
  return new Ae(e, r, a, i);
}
function Tu(e) {
  return (14 + 11 * e) % 30 < 11;
}
class fo {
  fromJulianDay(t) {
    return Dd(this, Ia, t);
  }
  toJulianDay(t) {
    return Na(Ia, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = 29 + t.month % 2;
    return t.month === 12 && Tu(t.year) && n++, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return Tu(t.year) ? 355 : 354;
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
class o1 extends fo {
  fromJulianDay(t) {
    return Dd(this, Au, t);
  }
  toJulianDay(t) {
    return Na(Au, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const u1 = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let ml, On;
function ga(e) {
  return l1 + On[e - lt];
}
function dr(e, t) {
  let n = e - lt, r = 1 << 11 - (t - 1);
  return ml[n] & r ? 30 : 29;
}
function Mu(e, t) {
  let n = ga(e);
  for (let r = 1; r < t; r++)
    n += dr(e, r);
  return n;
}
function Ru(e) {
  return On[e + 1 - lt] - On[e - lt];
}
class s1 extends fo {
  fromJulianDay(t) {
    let n = t - Ia, r = ga(lt), a = ga(Fn);
    if (n < r || n > a)
      return super.fromJulianDay(t);
    {
      let i = lt - 1, l = 1, o = 1;
      for (; o > 0; ) {
        i++, o = n - ga(i) + 1;
        let u = Ru(i);
        if (o === u) {
          l = 12;
          break;
        } else if (o < u) {
          let s = dr(i, l);
          for (l = 1; o > s; )
            o -= s, l++, s = dr(i, l);
          break;
        }
      }
      return new Ae(this, i, l, n - Mu(i, l) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < lt || t.year > Fn ? super.toJulianDay(t) : Ia + Mu(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < lt || t.year > Fn ? super.getDaysInMonth(t) : dr(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < lt || t.year > Fn ? super.getDaysInYear(t) : Ru(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", ml || (ml = new Uint16Array(Uint8Array.from(atob(u1), (t) => t.charCodeAt(0)).buffer)), !On) {
      On = new Uint32Array(Fn - lt + 1);
      let t = 0;
      for (let n = lt; n <= Fn; n++) {
        On[n - lt] = t;
        for (let r = 1; r <= 12; r++)
          t += dr(n, r);
      }
    }
  }
}
const Iu = 347997, Cd = 1080, Ed = 24 * Cd, d1 = 29, c1 = 12 * Cd + 793, f1 = d1 * Ed + c1;
function dn(e) {
  return Kt(e * 7 + 1, 19) < 7;
}
function $a(e) {
  let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
  return Kt(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function p1(e) {
  let t = $a(e - 1), n = $a(e);
  return $a(e + 1) - n === 356 ? 2 : n - t === 382 ? 1 : 0;
}
function pr(e) {
  return $a(e) + p1(e);
}
function Pd(e) {
  return pr(e + 1) - pr(e);
}
function b1(e) {
  let t = Pd(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function ua(e, t) {
  if (t >= 6 && !dn(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13)
    return 29;
  let n = b1(e);
  return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? dn(e) ? 30 : 0 : 30;
}
class m1 {
  fromJulianDay(t) {
    let n = t - Iu, r = n * Ed / f1, a = Math.floor((19 * r + 234) / 235) + 1, i = pr(a), l = Math.floor(n - i);
    for (; l < 1; )
      a--, i = pr(a), l = Math.floor(n - i);
    let o = 1, u = 0;
    for (; u < l; )
      u += ua(a, o), o++;
    o--, u -= ua(a, o);
    let s = l - u;
    return new Ae(this, a, o, s);
  }
  toJulianDay(t) {
    let n = pr(t.year);
    for (let r = 1; r < t.month; r++)
      n += ua(t.year, r);
    return n + t.day + Iu;
  }
  getDaysInMonth(t) {
    return ua(t.year, t.month);
  }
  getMonthsInYear(t) {
    return dn(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return Pd(t.year);
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
    n.year !== t.year && (dn(n.year) && !dn(t.year) && n.month > 6 ? t.month-- : !dn(n.year) && dn(t.year) && n.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const hl = 1723856, Nu = 1824665, vl = 5500;
function Ka(e, t, n, r) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function po(e, t) {
  let n = Math.floor(4 * (t - e) / 1461), r = 1 + Math.floor((t - Ka(e, n, 1, 1)) / 30), a = t + 1 - Ka(e, n, r, 1);
  return [
    n,
    r,
    a
  ];
}
function wd(e) {
  return Math.floor(e % 4 / 3);
}
function Sd(e, t) {
  return t % 13 !== 0 ? 30 : wd(e) + 5;
}
class bo {
  fromJulianDay(t) {
    let [n, r, a] = po(hl, t), i = "AM";
    return n <= 0 && (i = "AA", n += vl), new Ae(this, i, n, r, a);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "AA" && (n -= vl), Ka(hl, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Sd(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + wd(t.year);
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
class h1 extends bo {
  fromJulianDay(t) {
    let [n, r, a] = po(hl, t);
    return n += vl, new Ae(this, "AA", n, r, a);
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
class v1 extends bo {
  fromJulianDay(t) {
    let [n, r, a] = po(Nu, t), i = "CE";
    return n <= 0 && (i = "BCE", n = 1 - n), new Ae(this, i, n, r, a);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), Ka(Nu, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), Sd(n, t.month);
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
function ti(e) {
  switch (e) {
    case "buddhist":
      return new e1();
    case "ethiopic":
      return new bo();
    case "ethioaa":
      return new h1();
    case "coptic":
      return new v1();
    case "hebrew":
      return new m1();
    case "indian":
      return new i1();
    case "islamic-civil":
      return new fo();
    case "islamic-tbla":
      return new o1();
    case "islamic-umalqura":
      return new s1();
    case "japanese":
      return new Q$();
    case "persian":
      return new a1();
    case "roc":
      return new t1();
    case "gregory":
    default:
      return new Ue();
  }
}
let zi = /* @__PURE__ */ new Map();
class zt {
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
    return y1() && (this.resolvedHourCycle || (this.resolvedHourCycle = x1(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = Bd(t, n), this.options = n;
  }
}
const g1 = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Bd(e, t = {}) {
  if (typeof t.hour12 == "boolean" && $1()) {
    t = {
      ...t
    };
    let a = g1[String(t.hour12)][e.split("-")[0]], i = t.hour12 ? "h12" : "h23";
    t.hourCycle = a ?? i, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : "");
  if (zi.has(n))
    return zi.get(n);
  let r = new Intl.DateTimeFormat(e, t);
  return zi.set(n, r), r;
}
let Vi = null;
function $1() {
  return Vi == null && (Vi = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Vi;
}
let Li = null;
function y1() {
  return Li == null && (Li = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Li;
}
function x1(e, t) {
  if (!t.timeStyle && !t.hour)
    return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = Bd(e, {
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
let Oi = /* @__PURE__ */ new Map(), gl = !1;
try {
  gl = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let za = !1;
try {
  za = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const kd = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class Va {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(t) {
    let n = "";
    if (!gl && this.options.signDisplay != null ? n = C1(this.numberFormatter, this.options.signDisplay, t) : n = this.numberFormatter.format(t), this.options.style === "unit" && !za) {
      var r;
      let { unit: a, unitDisplay: i = "short", locale: l } = this.resolvedOptions();
      if (!a)
        return n;
      let o = (r = kd[a]) === null || r === void 0 ? void 0 : r[i];
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
    return !gl && this.options.signDisplay != null && (t = {
      ...t,
      signDisplay: this.options.signDisplay
    }), !za && this.options.style === "unit" && (t = {
      ...t,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), t;
  }
  constructor(t, n = {}) {
    this.numberFormatter = D1(t, n), this.options = n;
  }
}
function D1(e, t = {}) {
  let { numberingSystem: n } = t;
  if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !za) {
    var r;
    let { unit: l, unitDisplay: o = "short" } = t;
    if (!l)
      throw new Error('unit option must be provided with style: "unit"');
    if (!(!((r = kd[l]) === null || r === void 0) && r[o]))
      throw new Error(`Unsupported unit ${l} with unitDisplay = ${o}`);
    t = {
      ...t,
      style: "decimal"
    };
  }
  let a = e + (t ? Object.entries(t).sort((l, o) => l[0] < o[0] ? -1 : 1).join() : "");
  if (Oi.has(a))
    return Oi.get(a);
  let i = new Intl.NumberFormat(e, t);
  return Oi.set(a, i), i;
}
function C1(e, t, n) {
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
const E1 = new RegExp("^.*\\(.*\\).*$"), P1 = [
  "latn",
  "arab",
  "hanidec"
];
class mo {
  /**
  * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
  */
  parse(t) {
    return ji(this.locale, this.options, t).parse(t);
  }
  /**
  * Returns whether the given string could potentially be a valid number. This should be used to
  * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
  * of the minus/plus sign characters can be checked.
  */
  isValidPartialNumber(t, n, r) {
    return ji(this.locale, this.options, t).isValidPartialNumber(t, n, r);
  }
  /**
  * Returns a numbering system for which the given string is valid in the current locale.
  * If no numbering system could be detected, the default numbering system for the current
  * locale is returned.
  */
  getNumberingSystem(t) {
    return ji(this.locale, this.options, t).options.numberingSystem;
  }
  constructor(t, n = {}) {
    this.locale = t, this.options = n;
  }
}
const Ku = /* @__PURE__ */ new Map();
function ji(e, t, n) {
  let r = zu(e, t);
  if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
    for (let a of P1)
      if (a !== r.options.numberingSystem) {
        let i = zu(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + a, t);
        if (i.isValidPartialNumber(n))
          return i;
      }
  }
  return r;
}
function zu(e, t) {
  let n = e + (t ? Object.entries(t).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : ""), r = Ku.get(n);
  return r || (r = new w1(e, t), Ku.set(n, r)), r;
}
class w1 {
  parse(t) {
    let n = this.sanitize(t);
    if (this.symbols.group && (n = sa(n, this.symbols.group, "")), this.symbols.decimal && (n = n.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, "-")), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
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
      return new mo(this.locale, a).parse(new Va(this.locale, a).format(r));
    }
    return this.options.currencySign === "accounting" && E1.test(t) && (r = -1 * r), r;
  }
  sanitize(t) {
    return t = t.replace(this.symbols.literals, ""), this.symbols.minusSign && (t = t.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (t = t.replace(",", this.symbols.decimal), t = t.replace("،", this.symbols.decimal)), this.symbols.group && (t = sa(t, ".", this.symbols.group))), this.options.locale === "fr-FR" && (t = sa(t, ".", " ")), t;
  }
  isValidPartialNumber(t, n = -1 / 0, r = 1 / 0) {
    return t = this.sanitize(t), this.symbols.minusSign && t.startsWith(this.symbols.minusSign) && n < 0 ? t = t.slice(this.symbols.minusSign.length) : this.symbols.plusSign && t.startsWith(this.symbols.plusSign) && r > 0 && (t = t.slice(this.symbols.plusSign.length)), this.symbols.group && t.startsWith(this.symbols.group) || this.symbols.decimal && t.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && (t = sa(t, this.symbols.group, "")), t = t.replace(this.symbols.numeral, ""), this.symbols.decimal && (t = t.replace(this.symbols.decimal, "")), t.length === 0);
  }
  constructor(t, n = {}) {
    this.locale = t, this.formatter = new Intl.NumberFormat(t, n), this.options = this.formatter.resolvedOptions(), this.symbols = B1(t, this.formatter, this.options, n);
    var r, a;
    this.options.style === "percent" && (((r = this.options.minimumFractionDigits) !== null && r !== void 0 ? r : 0) > 18 || ((a = this.options.maximumFractionDigits) !== null && a !== void 0 ? a : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
}
const Vu = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]), S1 = [
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
function B1(e, t, n, r) {
  var a, i, l, o;
  let u = new Intl.NumberFormat(e, {
    ...n,
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21
  }), s = u.formatToParts(-10000.111), d = u.formatToParts(10000.111), c = S1.map((F) => u.formatToParts(F));
  var p;
  let f = (p = (a = s.find((F) => F.type === "minusSign")) === null || a === void 0 ? void 0 : a.value) !== null && p !== void 0 ? p : "-", b = (i = d.find((F) => F.type === "plusSign")) === null || i === void 0 ? void 0 : i.value;
  !b && ((r == null ? void 0 : r.signDisplay) === "exceptZero" || (r == null ? void 0 : r.signDisplay) === "always") && (b = "+");
  let h = (l = new Intl.NumberFormat(e, {
    ...n,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(1e-3).find((F) => F.type === "decimal")) === null || l === void 0 ? void 0 : l.value, y = (o = s.find((F) => F.type === "group")) === null || o === void 0 ? void 0 : o.value, $ = s.filter((F) => !Vu.has(F.type)).map((F) => Lu(F.value)), x = c.flatMap((F) => F.filter((E) => !Vu.has(E.type)).map((E) => Lu(E.value))), C = [
    .../* @__PURE__ */ new Set([
      ...$,
      ...x
    ])
  ].sort((F, E) => E.length - F.length), P = C.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${C.join("|")}|[\\p{White_Space}]`, "gu"), B = [
    ...new Intl.NumberFormat(n.locale, {
      useGrouping: !1
    }).format(9876543210)
  ].reverse(), M = new Map(B.map((F, E) => [
    F,
    E
  ])), v = new RegExp(`[${B.join("")}]`, "g");
  return {
    minusSign: f,
    plusSign: b,
    decimal: h,
    group: y,
    literals: P,
    numeral: v,
    index: (F) => String(M.get(F))
  };
}
function sa(e, t, n) {
  return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function Lu(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const k1 = /* @__PURE__ */ new Set([
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
]), F1 = /* @__PURE__ */ new Set([
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
function A1(e) {
  if (Intl.Locale) {
    let n = new Intl.Locale(e).maximize(), r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r)
      return r.direction === "rtl";
    if (n.script)
      return k1.has(n.script);
  }
  let t = e.split("-")[0];
  return F1.has(t);
}
const T1 = Symbol.for("react-aria.i18n.locale");
function Fd() {
  let e = typeof window < "u" && window[T1] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: A1(e) ? "rtl" : "ltr"
  };
}
let $l = Fd(), cr = /* @__PURE__ */ new Set();
function Ou() {
  $l = Fd();
  for (let e of cr)
    e($l);
}
function M1() {
  let e = wt(), [t, n] = Z($l);
  return J(() => (cr.size === 0 && window.addEventListener("languagechange", Ou), cr.add(n), () => {
    cr.delete(n), cr.size === 0 && window.removeEventListener("languagechange", Ou);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const R1 = /* @__PURE__ */ g.createContext(null);
function oe() {
  let e = M1();
  return U(R1) || e;
}
const ju = /* @__PURE__ */ new WeakMap();
function I1(e) {
  let t = ju.get(e);
  return t || (t = new Dn(e), ju.set(e, t)), t;
}
function Ad(e, t) {
  return t && Dn.getGlobalDictionaryForPackage(t) || I1(e);
}
function Ee(e, t) {
  let { locale: n } = oe(), r = Ad(e, t);
  return K(() => new nd(n, r), [
    n,
    r
  ]);
}
function Et(e) {
  e = _s(e ?? {}, N1);
  let { locale: t } = oe();
  return K(() => new zt(t, e), [
    t,
    e
  ]);
}
function N1(e, t) {
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
function La(e = {}) {
  let { locale: t } = oe();
  return K(() => new Va(t, e), [
    t,
    e
  ]);
}
let Hi = /* @__PURE__ */ new Map();
function Zn(e) {
  let { locale: t } = oe(), n = t + (e ? Object.entries(e).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : "");
  if (Hi.has(n))
    return Hi.get(n);
  let r = new Intl.Collator(t, e);
  return Hi.set(n, r), r;
}
function Td(e) {
  let t = Zn({
    usage: "search",
    ...e
  }), n = Q((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), t.compare(i.slice(0, l.length), l) === 0), [
    t
  ]), r = Q((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), t.compare(i.slice(-l.length), l) === 0), [
    t
  ]), a = Q((i, l) => {
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
function Md(e, t) {
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
    href: p,
    target: f,
    rel: b,
    type: m = "button"
  } = e, h;
  n === "button" ? h = {
    type: m,
    disabled: r
  } : h = {
    role: "button",
    tabIndex: r ? void 0 : 0,
    href: n === "a" && r ? void 0 : p,
    target: n === "a" ? f : void 0,
    type: n === "input" ? m : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? b : void 0
  };
  let { pressProps: y, isPressed: $ } = Xe({
    onPressStart: i,
    onPressEnd: l,
    onPressChange: u,
    onPress: a,
    onPressUp: o,
    isDisabled: r,
    preventFocusOnPress: s,
    ref: t
  }), { focusableProps: x } = xn(e, t);
  d && (x.tabIndex = r ? -1 : x.tabIndex);
  let C = j(x, y, Y(e, {
    labelable: !0
  }));
  return {
    isPressed: $,
    buttonProps: j(h, C, {
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
function K1(e, t, n) {
  const { isSelected: r } = t, { isPressed: a, buttonProps: i } = Md({
    ...e,
    onPress: gt(t.toggle, e.onPress)
  }, n);
  return {
    isPressed: a,
    buttonProps: j(i, {
      "aria-pressed": r
    })
  };
}
const Rd = 7e3;
let br = null;
function en(e, t = "assertive", n = Rd) {
  br || (br = new V1()), br.announce(e, t, n);
}
function z1(e) {
  br && br.clear(e);
}
class V1 {
  createLog(t) {
    let n = document.createElement("div");
    return n.setAttribute("role", "log"), n.setAttribute("aria-live", t), n.setAttribute("aria-relevant", "additions"), n;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(t, n = "assertive", r = Rd) {
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
function ni(e) {
  return e && e.__esModule ? e.default : e;
}
var Lr = {}, Id = {};
Id = {
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
var Nd = {};
Nd = {
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
var Kd = {};
Kd = {
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
var zd = {};
zd = {
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
var Vd = {};
Vd = {
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
var Ld = {};
Ld = {
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
var Od = {};
Od = {
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
var jd = {};
jd = {
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
var Hd = {};
Hd = {
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
var _d = {};
_d = {
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
var Ud = {};
Ud = {
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
var Wd = {};
Wd = {
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
var Gd = {};
Gd = {
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
var Zd = {};
Zd = {
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
var qd = {};
qd = {
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
var Yd = {};
Yd = {
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
var Jd = {};
Jd = {
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
var Xd = {};
Xd = {
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
var Qd = {};
Qd = {
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
var ec = {};
ec = {
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
var tc = {};
tc = {
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
var nc = {};
nc = {
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
var rc = {};
rc = {
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
var ac = {};
ac = {
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
var ic = {};
ic = {
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
var lc = {};
lc = {
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
var oc = {};
oc = {
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
var uc = {};
uc = {
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
var sc = {};
sc = {
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
var dc = {};
dc = {
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
var cc = {};
cc = {
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
var fc = {};
fc = {
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
var pc = {};
pc = {
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
var bc = {};
bc = {
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
Lr = {
  "ar-AE": Id,
  "bg-BG": Nd,
  "cs-CZ": Kd,
  "da-DK": zd,
  "de-DE": Vd,
  "el-GR": Ld,
  "en-US": Od,
  "es-ES": jd,
  "et-EE": Hd,
  "fi-FI": _d,
  "fr-FR": Ud,
  "he-IL": Wd,
  "hr-HR": Gd,
  "hu-HU": Zd,
  "it-IT": qd,
  "ja-JP": Yd,
  "ko-KR": Jd,
  "lt-LT": Xd,
  "lv-LV": Qd,
  "nb-NO": ec,
  "nl-NL": tc,
  "pl-PL": nc,
  "pt-BR": rc,
  "pt-PT": ac,
  "ro-RO": ic,
  "ru-RU": lc,
  "sk-SK": oc,
  "sl-SI": uc,
  "sr-SP": sc,
  "sv-SE": dc,
  "tr-TR": cc,
  "uk-UA": fc,
  "zh-CN": pc,
  "zh-TW": bc
};
const ho = /* @__PURE__ */ new WeakMap();
function xr(e) {
  return (e == null ? void 0 : e.calendar.identifier) === "gregory" && e.era === "BC" ? "short" : void 0;
}
function L1(e) {
  let t = Ee(/* @__PURE__ */ ni(Lr), "@react-aria/calendar"), n, r;
  "highlightedRange" in e ? { start: n, end: r } = e.highlightedRange || {} : n = r = e.value;
  let a = Et({
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    era: xr(n) || xr(r),
    timeZone: e.timeZone
  }), i = "anchorDate" in e ? e.anchorDate : null;
  return K(() => {
    if (!i && n && r)
      if (Fe(n, r)) {
        let l = a.format(n.toDate(e.timeZone));
        return t.format("selectedDateDescription", {
          date: l
        });
      } else {
        let l = xl(a, t, n, r, e.timeZone);
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
function yl(e, t, n, r) {
  let a = Ee(/* @__PURE__ */ ni(Lr), "@react-aria/calendar"), i = xr(e) || xr(t), l = Et({
    month: "long",
    year: "numeric",
    era: i,
    calendar: e.calendar.identifier,
    timeZone: n
  }), o = Et({
    month: "long",
    year: "numeric",
    day: "numeric",
    era: i,
    calendar: e.calendar.identifier,
    timeZone: n
  });
  return K(() => {
    if (Fe(e, gn(e))) {
      if (Fe(t, Ta(e)))
        return l.format(e.toDate(n));
      if (Fe(t, Ta(t)))
        return r ? xl(l, a, e, t, n) : l.formatRange(e.toDate(n), t.toDate(n));
    }
    return r ? xl(o, a, e, t, n) : o.formatRange(e.toDate(n), t.toDate(n));
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
function xl(e, t, n, r, a) {
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
function mc(e, t) {
  let n = Ee(/* @__PURE__ */ ni(Lr), "@react-aria/calendar"), r = Y(e), a = yl(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1), i = yl(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
  Ca(() => {
    t.isFocused || en(i);
  }, [
    i
  ]);
  let l = L1(t);
  Ca(() => {
    l && en(l, "polite", 4e3);
  }, [
    l
  ]);
  let o = Pt([
    !!e.errorMessage,
    e.isInvalid,
    e.validationState
  ]);
  ho.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: e["aria-labelledby"],
    errorMessageId: o,
    selectedDateDescription: l
  });
  let [u, s] = Z(!1), d = e.isDisabled || t.isNextVisibleRangeInvalid();
  d && u && (s(!1), t.setFocused(!0));
  let [c, p] = Z(!1), f = e.isDisabled || t.isPreviousVisibleRangeInvalid();
  f && c && (p(!1), t.setFocused(!0));
  let b = Lt({
    id: e.id,
    "aria-label": [
      e["aria-label"],
      i
    ].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: j(r, b, {
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
      onFocusChange: p
    },
    errorMessageProps: {
      id: o
    },
    title: a
  };
}
function O1(e, t) {
  return mc(e, t);
}
function j1(e, t, n) {
  let r = mc(e, t), a = I(!1), i = I(typeof window < "u" ? window : null);
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
function H1(e, t) {
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
  }, l = yl(n, r, t.timeZone, !0), { ariaLabel: o, ariaLabelledBy: u } = ho.get(t), s = Lt({
    "aria-label": [
      o,
      l
    ].filter(Boolean).join(", "),
    "aria-labelledby": u
  }), d = Et({
    weekday: e.weekdayStyle || "narrow",
    timeZone: t.timeZone
  }), { locale: c } = oe(), p = K(() => {
    let f = gr(Qa(t.timeZone), c);
    return [
      ...new Array(7).keys()
    ].map((b) => {
      let h = f.add({
        days: b
      }).toDate(t.timeZone);
      return d.format(h);
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
    weekDays: p
  };
}
function _1(e, t, n) {
  let { date: r, isDisabled: a } = e, { errorMessageId: i, selectedDateDescription: l } = ho.get(t), o = Ee(/* @__PURE__ */ ni(Lr), "@react-aria/calendar"), u = Et({
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    era: xr(r),
    timeZone: t.timeZone
  }), s = t.isSelected(r), d = t.isCellFocused(r);
  a = a || t.isCellDisabled(r);
  let c = t.isCellUnavailable(r), p = !a && !c, f = t.isValueInvalid && ("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && r.compare(t.highlightedRange.start) >= 0 && r.compare(t.highlightedRange.end) <= 0 : t.value && Fe(t.value, r));
  f && (s = !0), r = _s(r, cl);
  let b = K(() => r.toDate(t.timeZone), [
    r,
    t.timeZone
  ]), m = B$(r, t.timeZone), h = K(() => {
    let E = "";
    return "highlightedRange" in t && t.value && !t.anchorDate && (Fe(r, t.value.start) || Fe(r, t.value.end)) && (E = l + ", "), E += u.format(b), m ? E = o.format(s ? "todayDateSelected" : "todayDate", {
      date: E
    }) : s && (E = o.format("dateSelected", {
      date: E
    })), t.minValue && Fe(r, t.minValue) ? E += ", " + o.format("minimumDate") : t.maxValue && Fe(r, t.maxValue) && (E += ", " + o.format("maximumDate")), E;
  }, [
    u,
    b,
    o,
    s,
    m,
    r,
    t,
    l
  ]), y = "";
  "anchorDate" in t && d && !t.isReadOnly && p && (t.anchorDate ? y = o.format("finishRangeSelectionPrompt") : y = o.format("startRangeSelectionPrompt"));
  let $ = St(y), x = I(!1), C = I(!1), P = I(null), { pressProps: B, isPressed: M } = Xe({
    // When dragging to select a range, we don't want dragging over the original anchor
    // again to trigger onPressStart. Cancel presses immediately when the pointer exits.
    shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
    preventFocusOnPress: !0,
    isDisabled: !p || t.isReadOnly,
    onPressStart(E) {
      if (t.isReadOnly) {
        t.setFocusedDate(r);
        return;
      }
      if ("highlightedRange" in t && !t.anchorDate && (E.pointerType === "mouse" || E.pointerType === "touch")) {
        if (t.highlightedRange && !f) {
          if (Fe(r, t.highlightedRange.start)) {
            t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setDragging(!0), C.current = !0;
            return;
          } else if (Fe(r, t.highlightedRange.end)) {
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
  }), v = null;
  a || (v = Fe(r, t.focusedDate) ? 0 : -1), J(() => {
    d && n.current && (vt(n.current), Sa() !== "pointer" && document.activeElement === n.current && je(n.current, {
      containingElement: ze(n.current)
    }));
  }, [
    d,
    n
  ]);
  let R = Et({
    day: "numeric",
    timeZone: t.timeZone,
    calendar: r.calendar.identifier
  }), F = K(() => R.formatToParts(b).find((E) => E.type === "day").value, [
    R,
    b
  ]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !p || null,
      "aria-selected": s || null,
      "aria-invalid": f || null
    },
    buttonProps: j(B, {
      onFocus() {
        a || t.setFocusedDate(r);
      },
      tabIndex: v,
      role: "button",
      "aria-disabled": !p || null,
      "aria-label": h,
      "aria-invalid": f || null,
      "aria-describedby": [
        f ? i : null,
        $["aria-describedby"]
      ].filter(Boolean).join(" ") || void 0,
      onPointerEnter(E) {
        "highlightDate" in t && (E.pointerType !== "touch" || t.isDragging) && p && t.highlightDate(r);
      },
      onPointerDown(E) {
        "releasePointerCapture" in E.target && E.target.releasePointerCapture(E.pointerId);
      },
      onContextMenu(E) {
        E.preventDefault();
      }
    }),
    isPressed: M,
    isFocused: d,
    isSelected: s,
    isDisabled: a,
    isUnavailable: c,
    isOutsideVisibleRange: r.compare(t.visibleRange.start) < 0 || r.compare(t.visibleRange.end) > 0,
    isInvalid: f,
    formattedDate: F
  };
}
function Or(e, t, n) {
  let { validationBehavior: r, focus: a } = e;
  fe(() => {
    if (r === "native" && (n != null && n.current)) {
      let u = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(u), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(W1(n.current));
    }
  });
  let i = $e(() => {
    t.resetValidation();
  }), l = $e((u) => {
    var s;
    t.displayValidation.isInvalid || t.commitValidation();
    let d = n == null || (s = n.current) === null || s === void 0 ? void 0 : s.form;
    if (!u.defaultPrevented && n && d && G1(d) === n.current) {
      var c;
      a ? a() : (c = n.current) === null || c === void 0 || c.focus(), Jl("keyboard");
    }
    u.preventDefault();
  }), o = $e(() => {
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
function U1(e) {
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
function W1(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: U1(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function G1(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let n = e.elements[t];
    if (!n.validity.valid)
      return n;
  }
  return null;
}
const ri = {
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
}, hc = {
  ...ri,
  customError: !0,
  valid: !1
}, Yt = {
  isInvalid: !1,
  validationDetails: ri,
  validationErrors: []
}, vc = W({}), tn = "__formValidationState" + Date.now();
function xt(e) {
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
  return Z1(e);
}
function Z1(e) {
  let { isInvalid: t, validationState: n, name: r, value: a, builtinValidation: i, validate: l, validationBehavior: o = "aria" } = e;
  n && (t || (t = n === "invalid"));
  let u = t ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: hc
  } : null, s = K(() => Hu(q1(l, a)), [
    l,
    a
  ]);
  i != null && i.validationDetails.valid && (i = null);
  let d = U(vc), c = K(() => r ? Array.isArray(r) ? r.flatMap((F) => Dl(d[F])) : Dl(d[r]) : [], [
    d,
    r
  ]), [p, f] = Z(d), [b, m] = Z(!1);
  d !== p && (f(d), m(!1));
  let h = K(() => Hu(b ? [] : c), [
    b,
    c
  ]), y = I(Yt), [$, x] = Z(Yt), C = I(Yt), P = () => {
    if (!B)
      return;
    M(!1);
    let F = s || i || y.current;
    _i(F, C.current) || (C.current = F, x(F));
  }, [B, M] = Z(!1);
  return J(P), {
    realtimeValidation: u || h || s || i || Yt,
    displayValidation: o === "native" ? u || h || $ : u || h || s || i || $,
    updateValidation(F) {
      o === "aria" && !_i($, F) ? x(F) : y.current = F;
    },
    resetValidation() {
      let F = Yt;
      _i(F, C.current) || (C.current = F, x(F)), o === "native" && M(!1), m(!0);
    },
    commitValidation() {
      o === "native" && M(!0), m(!0);
    }
  };
}
function Dl(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function q1(e, t) {
  if (typeof e == "function") {
    let n = e(t);
    if (n && typeof n != "boolean")
      return Dl(n);
  }
  return [];
}
function Hu(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: hc
  } : null;
}
function _i(e, t) {
  return e === t ? !0 : e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((n, r) => n === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([n, r]) => t.validationDetails[n] === r);
}
function Dr(...e) {
  let t = /* @__PURE__ */ new Set(), n = !1, r = {
    ...ri
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
function gc(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: a = !1, value: i, name: l, children: o, "aria-label": u, "aria-labelledby": s, validationState: d = "valid", isInvalid: c } = e, p = (B) => {
    B.stopPropagation(), t.setSelected(B.target.checked);
  }, f = o != null, b = u != null || s != null;
  !f && !b && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: m, isPressed: h } = Xe({
    isDisabled: r
  }), { pressProps: y, isPressed: $ } = Xe({
    isDisabled: r || a,
    onPress() {
      t.toggle();
    }
  }), { focusableProps: x } = xn(e, n), C = j(m, x), P = Y(e, {
    labelable: !0
  });
  return yn(n, t.isSelected, t.setSelected), {
    labelProps: j(y, {
      onClick: (B) => B.preventDefault()
    }),
    inputProps: j(P, {
      "aria-invalid": c || d === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": a || void 0,
      onChange: p,
      disabled: r,
      ...i == null ? {} : {
        value: i
      },
      name: l,
      type: "checkbox",
      ...C
    }),
    isSelected: t.isSelected,
    isPressed: h || $,
    isDisabled: r,
    isReadOnly: a,
    isInvalid: c || d === "invalid"
  };
}
function jr(e) {
  let { id: t, label: n, "aria-labelledby": r, "aria-label": a, labelElementType: i = "label" } = e;
  t = pe(t);
  let l = pe(), o = {};
  n ? (r = r ? `${l} ${r}` : l, o = {
    id: l,
    htmlFor: i === "label" ? t : void 0
  }) : !r && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let u = Lt({
    id: t,
    "aria-label": a,
    "aria-labelledby": r
  });
  return {
    labelProps: o,
    fieldProps: u
  };
}
function rn(e) {
  let { description: t, errorMessage: n, isInvalid: r, validationState: a } = e, { labelProps: i, fieldProps: l } = jr(e), o = Pt([
    !!t,
    !!n,
    r,
    a
  ]), u = Pt([
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
function ai(e = {}) {
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
function $c(e, t, n) {
  let r = xt({
    ...e,
    value: t.isSelected
  }), { isInvalid: a, validationErrors: i, validationDetails: l } = r.displayValidation, { labelProps: o, inputProps: u, isSelected: s, isPressed: d, isDisabled: c, isReadOnly: p } = gc({
    ...e,
    isInvalid: a
  }, t, n);
  Or(e, r, n);
  let { isIndeterminate: f, isRequired: b, validationBehavior: m = "aria" } = e;
  return J(() => {
    n.current && (n.current.indeterminate = !!f);
  }), {
    labelProps: o,
    inputProps: {
      ...u,
      checked: s,
      "aria-required": b && m === "aria" || void 0,
      required: b && m === "native"
    },
    isSelected: s,
    isPressed: d,
    isDisabled: c,
    isReadOnly: p,
    isInvalid: a,
    validationErrors: i,
    validationDetails: l
  };
}
const yc = /* @__PURE__ */ new WeakMap();
function Y1(e, t) {
  let { isDisabled: n, name: r, validationBehavior: a = "aria" } = e, { isInvalid: i, validationErrors: l, validationDetails: o } = t.displayValidation, { labelProps: u, fieldProps: s, descriptionProps: d, errorMessageProps: c } = rn({
    ...e,
    // Checkbox group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: i,
    errorMessage: e.errorMessage || l
  });
  yc.set(t, {
    name: r,
    descriptionId: d.id,
    errorMessageId: c.id,
    validationBehavior: a
  });
  let p = Y(e, {
    labelable: !0
  }), { focusWithinProps: f } = yt({
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  });
  return {
    groupProps: j(p, {
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
function J1(e, t, n) {
  const r = ai({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    onChange(h) {
      h ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(h);
    }
  });
  let { name: a, descriptionId: i, errorMessageId: l, validationBehavior: o } = yc.get(t);
  var u;
  o = (u = e.validationBehavior) !== null && u !== void 0 ? u : o;
  let { realtimeValidation: s } = xt({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), d = I(Yt), c = () => {
    t.setInvalid(e.value, s.isInvalid ? s : d.current);
  };
  J(c);
  let p = t.realtimeValidation.isInvalid ? t.realtimeValidation : s, f = o === "native" ? t.displayValidation : p;
  var b;
  let m = $c({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || a,
    isRequired: (b = e.isRequired) !== null && b !== void 0 ? b : t.isRequired,
    validationBehavior: o,
    [tn]: {
      realtimeValidation: p,
      displayValidation: f,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(h) {
        d.current = h, c();
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
const _u = {
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
  let { style: t, isFocusable: n } = e, [r, a] = Z(!1), { focusWithinProps: i } = yt({
    isDisabled: !n,
    onFocusWithinChange: (o) => a(o)
  }), l = K(() => r ? t : t ? {
    ..._u,
    ...t
  } : _u, [
    r
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: l
    }
  };
}
function jt(e) {
  let { children: t, elementType: n = "div", isFocusable: r, style: a, ...i } = e, { visuallyHiddenProps: l } = _t(e);
  return /* @__PURE__ */ g.createElement(n, j(i, l), t);
}
function X1(e) {
  return e && e.__esModule ? e.default : e;
}
const In = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, Oa = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Q1 = {
  top: "left",
  left: "top"
}, Cl = {
  top: "height",
  left: "width"
}, xc = {
  width: "totalWidth",
  height: "totalHeight"
}, da = {};
let Ge = typeof document < "u" && window.visualViewport;
function Uu(e) {
  let t = 0, n = 0, r = 0, a = 0, i = 0, l = 0, o = {}, u = (Ge == null ? void 0 : Ge.scale) > 1;
  if (e.tagName === "BODY") {
    let c = document.documentElement;
    r = c.clientWidth, a = c.clientHeight;
    var s;
    t = (s = Ge == null ? void 0 : Ge.width) !== null && s !== void 0 ? s : r;
    var d;
    n = (d = Ge == null ? void 0 : Ge.height) !== null && d !== void 0 ? d : a, o.top = c.scrollTop || e.scrollTop, o.left = c.scrollLeft || e.scrollLeft, Ge && (i = Ge.offsetTop, l = Ge.offsetLeft);
  } else
    ({ width: t, height: n, top: i, left: l } = jn(e)), o.top = e.scrollTop, o.left = e.scrollLeft, r = t, a = n;
  return Gl() && (e.tagName === "BODY" || e.tagName === "HTML") && u && (o.top = 0, o.left = 0, i = Ge.pageTop, l = Ge.pageLeft), {
    width: t,
    height: n,
    totalWidth: r,
    totalHeight: a,
    scroll: o,
    top: i,
    left: l
  };
}
function ey(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function Wu(e, t, n, r, a, i, l) {
  let o = a.scroll[e], u = r[Cl[e]], s = r.scroll[In[e]] + i, d = u + r.scroll[In[e]] - i, c = t - o + l[e] - r[In[e]], p = t - o + n + l[e] - r[In[e]];
  return c < s ? s - c : p > d ? Math.max(d - p, s - c) : 0;
}
function ty(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function Gu(e) {
  if (da[e])
    return da[e];
  let [t, n] = e.split(" "), r = In[t] || "right", a = Q1[r];
  In[n] || (n = "center");
  let i = Cl[r], l = Cl[a];
  return da[e] = {
    placement: t,
    crossPlacement: n,
    axis: r,
    crossAxis: a,
    size: i,
    crossSize: l
  }, da[e];
}
function Ui(e, t, n, r, a, i, l, o, u, s) {
  let { placement: d, crossPlacement: c, axis: p, crossAxis: f, size: b, crossSize: m } = r, h = {};
  h[f] = e[f], c === "center" ? h[f] += (e[m] - n[m]) / 2 : c !== f && (h[f] += e[m] - n[m]), h[f] += i;
  const y = e[f] - n[m] + u + s, $ = e[f] + e[m] - u - s;
  if (h[f] = st(h[f], y, $), d === p) {
    const x = o ? l[b] : t[xc[b]];
    h[Oa[p]] = Math.floor(x - e[p] + a);
  } else
    h[p] = Math.floor(e[p] + e[b] + a);
  return h;
}
function ny(e, t, n, r, a, i, l, o) {
  const u = r ? n.height : t[xc.height];
  let s = e.top != null ? n.top + e.top : n.top + (u - e.bottom - l), d = o !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + t.scroll.top - s - (a.top + a.bottom + i))
  ) : Math.max(0, s + l - (t.top + t.scroll.top) - (a.top + a.bottom + i));
  return Math.min(t.height - i * 2, d);
}
function Zu(e, t, n, r, a, i) {
  let { placement: l, axis: o, size: u } = i;
  return l === o ? Math.max(0, n[o] - e[o] - e.scroll[o] + t[o] - r[o] - r[Oa[o]] - a) : Math.max(0, e[u] + e[o] + e.scroll[o] - t[o] - n[o] - n[u] - r[o] - r[Oa[o]] - a);
}
function ry(e, t, n, r, a, i, l, o, u, s, d, c, p, f, b, m) {
  let h = Gu(e), { size: y, crossAxis: $, crossSize: x, placement: C, crossPlacement: P } = h, B = Ui(t, o, n, h, d, c, s, p, b, m), M = d, v = Zu(o, s, t, a, i + d, h);
  if (l && r[y] > v) {
    let _ = Gu(`${Oa[C]} ${P}`), L = Ui(t, o, n, _, d, c, s, p, b, m);
    Zu(o, s, t, a, i + d, _) > v && (h = _, B = L, M = d);
  }
  let R = "bottom";
  h.axis === "top" ? h.placement === "top" ? R = "top" : h.placement === "bottom" && (R = "bottom") : h.crossAxis === "top" && (h.crossPlacement === "top" ? R = "bottom" : h.crossPlacement === "bottom" && (R = "top"));
  let F = Wu($, B[$], n[x], o, u, i, s);
  B[$] += F;
  let E = ny(B, o, s, p, a, i, n.height, R);
  f && f < E && (E = f), n.height = Math.min(n.height, E), B = Ui(t, o, n, h, M, c, s, p, b, m), F = Wu($, B[$], n[x], o, u, i, s), B[$] += F;
  let S = {}, w = t[$] + 0.5 * t[x] - n[$];
  const k = b / 2 + m, z = n[x] - b / 2 - m, T = t[$] - n[$] + b / 2, D = t[$] + t[x] - n[$] - b / 2, H = st(w, T, D);
  return S[$] = st(H, k, z), {
    position: B,
    maxHeight: E,
    arrowOffsetLeft: S.left,
    arrowOffsetTop: S.top,
    placement: h.placement
  };
}
function ay(e) {
  let { placement: t, targetNode: n, overlayNode: r, scrollNode: a, padding: i, shouldFlip: l, boundaryElement: o, offset: u, crossOffset: s, maxHeight: d, arrowSize: c = 0, arrowBoundaryOffset: p = 0 } = e, f = r instanceof HTMLElement ? iy(r) : document.documentElement, b = f === document.documentElement;
  const m = window.getComputedStyle(f).position;
  let h = !!m && m !== "static", y = b ? jn(n) : qu(n, f);
  if (!b) {
    let { marginTop: v, marginLeft: R } = window.getComputedStyle(n);
    y.top += parseInt(v, 10) || 0, y.left += parseInt(R, 10) || 0;
  }
  let $ = jn(r), x = ty(r);
  $.width += x.left + x.right, $.height += x.top + x.bottom;
  let C = ey(a), P = Uu(o), B = Uu(f), M = o.tagName === "BODY" ? jn(f) : qu(f, o);
  return f.tagName === "HTML" && o.tagName === "BODY" && (B.scroll.top = 0, B.scroll.left = 0), ry(t, y, $, C, x, i, l, P, B, M, u, s, h, d, c, p);
}
function jn(e) {
  let { top: t, left: n, width: r, height: a } = e.getBoundingClientRect(), { scrollTop: i, scrollLeft: l, clientTop: o, clientLeft: u } = document.documentElement;
  return {
    top: t + i - o,
    left: n + l - u,
    width: r,
    height: a
  };
}
function qu(e, t) {
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
    r = jn(e);
    let a = jn(t), i = window.getComputedStyle(t);
    a.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, a.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, r.top -= a.top, r.left -= a.left;
  }
  return r.top -= parseInt(n.marginTop, 10) || 0, r.left -= parseInt(n.marginLeft, 10) || 0, r;
}
function iy(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Yu(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !Yu(t); )
      t = t.parentElement;
  return t || document.documentElement;
}
function Yu(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || // @ts-ignore
  "backdropFilter" in t && t.backdropFilter !== "none" || // @ts-ignore
  "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const Dc = /* @__PURE__ */ new WeakMap();
function ly(e) {
  let { triggerRef: t, isOpen: n, onClose: r } = e;
  J(() => {
    if (!n || r === null)
      return;
    let a = (i) => {
      let l = i.target;
      if (!t.current || l instanceof Node && !l.contains(t.current))
        return;
      let o = r || Dc.get(t.current);
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
let Be = typeof document < "u" && window.visualViewport;
function Cc(e) {
  let { direction: t } = oe(), { arrowSize: n = 0, targetRef: r, overlayRef: a, scrollRef: i = a, placement: l = "bottom", containerPadding: o = 12, shouldFlip: u = !0, boundaryElement: s = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: c = 0, shouldUpdatePosition: p = !0, isOpen: f = !0, onClose: b, maxHeight: m, arrowBoundaryOffset: h = 0 } = e, [y, $] = Z({
    position: {},
    arrowOffsetLeft: void 0,
    arrowOffsetTop: void 0,
    maxHeight: void 0,
    placement: void 0
  }), x = [
    p,
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
    h,
    n
  ], C = I(Be == null ? void 0 : Be.scale);
  J(() => {
    f && (C.current = Be == null ? void 0 : Be.scale);
  }, [
    f
  ]);
  let P = Q(() => {
    if (p === !1 || !f || !a.current || !r.current || !i.current || !s || (Be == null ? void 0 : Be.scale) !== C.current)
      return;
    !m && a.current && (a.current.style.maxHeight = "none");
    let v = ay({
      placement: uy(l, t),
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
      arrowBoundaryOffset: h
    });
    Object.keys(v.position).forEach((R) => a.current.style[R] = v.position[R] + "px"), a.current.style.maxHeight = v.maxHeight != null ? v.maxHeight + "px" : void 0, $(v);
  }, x);
  fe(P, x), oy(P), Mr({
    ref: a,
    onResize: P
  });
  let B = I(!1);
  fe(() => {
    let v, R = () => {
      B.current = !0, clearTimeout(v), v = setTimeout(() => {
        B.current = !1;
      }, 500), P();
    }, F = () => {
      B.current && R();
    };
    return Be == null || Be.addEventListener("resize", R), Be == null || Be.addEventListener("scroll", F), () => {
      Be == null || Be.removeEventListener("resize", R), Be == null || Be.removeEventListener("scroll", F);
    };
  }, [
    P
  ]);
  let M = Q(() => {
    B.current || b();
  }, [
    b,
    B
  ]);
  return ly({
    triggerRef: r,
    isOpen: f,
    onClose: b && M
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
function oy(e) {
  fe(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function uy(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
const At = [];
function Ec(e, t) {
  let { onClose: n, shouldCloseOnBlur: r, isOpen: a, isDismissable: i = !1, isKeyboardDismissDisabled: l = !1, shouldCloseOnInteractOutside: o } = e;
  J(() => (a && At.push(t), () => {
    let b = At.indexOf(t);
    b >= 0 && At.splice(b, 1);
  }), [
    a,
    t
  ]);
  let u = () => {
    At[At.length - 1] === t && n && n();
  }, s = (b) => {
    (!o || o(b.target)) && At[At.length - 1] === t && (b.stopPropagation(), b.preventDefault());
  }, d = (b) => {
    (!o || o(b.target)) && (At[At.length - 1] === t && (b.stopPropagation(), b.preventDefault()), u());
  }, c = (b) => {
    b.key === "Escape" && !l && (b.stopPropagation(), b.preventDefault(), u());
  };
  Xs({
    ref: t,
    onInteractOutside: i && a ? d : null,
    onInteractOutsideStart: s
  });
  let { focusWithinProps: p } = yt({
    isDisabled: !r,
    onBlurWithin: (b) => {
      !b.relatedTarget || p$(b.relatedTarget) || (!o || o(b.relatedTarget)) && n();
    }
  }), f = (b) => {
    b.target === b.currentTarget && b.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: c,
      ...p
    },
    underlayProps: {
      onPointerDown: f
    }
  };
}
function sy(e, t, n) {
  let { type: r } = e, { isOpen: a } = t;
  J(() => {
    n && n.current && Dc.set(n.current, t.close);
  });
  let i;
  r === "menu" ? i = !0 : r === "listbox" && (i = "listbox");
  let l = pe();
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
const Wi = typeof document < "u" && window.visualViewport, dy = /* @__PURE__ */ new Set([
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
let ca = 0, Gi;
function Pc(e = {}) {
  let { isDisabled: t } = e;
  fe(() => {
    if (!t)
      return ca++, ca === 1 && (Wn() ? Gi = fy() : Gi = cy()), () => {
        ca--, ca === 0 && Gi();
      };
  }, [
    t
  ]);
}
function cy() {
  return gt(Nn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Nn(document.documentElement, "overflow", "hidden"));
}
function fy() {
  let e, t, n = (s) => {
    e = ze(s.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = Nn(e, "overscrollBehavior", "contain"));
  }, r = (s) => {
    if (!e || e === document.documentElement || e === document.body) {
      s.preventDefault();
      return;
    }
    e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && s.preventDefault();
  }, a = (s) => {
    let d = s.target;
    Xu(d) && d !== document.activeElement && (s.preventDefault(), o(), d.style.transform = "translateY(-2000px)", d.focus(), requestAnimationFrame(() => {
      d.style.transform = "";
    })), t && t();
  }, i = (s) => {
    let d = s.target;
    Xu(d) && (o(), d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", Wi && (Wi.height < window.innerHeight ? requestAnimationFrame(() => {
        Ju(d);
      }) : Wi.addEventListener("resize", () => Ju(d), {
        once: !0
      }));
    }));
  }, l = null, o = () => {
    if (l)
      return;
    let s = () => {
      window.scrollTo(0, 0);
    }, d = window.pageXOffset, c = window.pageYOffset;
    l = gt(er(window, "scroll", s), Nn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Nn(document.documentElement, "overflow", "hidden"), Nn(document.body, "marginTop", `-${c}px`), () => {
      window.scrollTo(d, c);
    }), window.scrollTo(0, 0);
  }, u = gt(er(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), er(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), er(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), er(document, "focus", i, !0));
  return () => {
    t == null || t(), l == null || l(), u();
  };
}
function Nn(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function er(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Ju(e) {
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
function Xu(e) {
  return e instanceof HTMLInputElement && !dy.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const El = /* @__PURE__ */ g.createContext(null);
function py(e) {
  let { children: t } = e, n = U(El), [r, a] = Z(0), i = K(() => ({
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
  return /* @__PURE__ */ g.createElement(El.Provider, {
    value: i
  }, t);
}
function by() {
  let e = U(El);
  return {
    modalProviderProps: {
      "aria-hidden": e && e.modalCount > 0 ? !0 : null
    }
  };
}
function my(e) {
  let { modalProviderProps: t } = by();
  return /* @__PURE__ */ g.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...t
  });
}
function hy(e) {
  return /* @__PURE__ */ g.createElement(py, null, /* @__PURE__ */ g.createElement(my, e));
}
function vy(e) {
  let t = wt(), { portalContainer: n = t ? null : document.body, ...r } = e;
  if (g.useEffect(() => {
    if (n != null && n.closest("[data-overlay-container]"))
      throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
  }, [
    n
  ]), !n)
    return null;
  let a = /* @__PURE__ */ g.createElement(hy, r);
  return /* @__PURE__ */ Ar.createPortal(a, n);
}
var wc = {}, Sc = {};
Sc = {
  dismiss: "تجاهل"
};
var Bc = {};
Bc = {
  dismiss: "Отхвърляне"
};
var kc = {};
kc = {
  dismiss: "Odstranit"
};
var Fc = {};
Fc = {
  dismiss: "Luk"
};
var Ac = {};
Ac = {
  dismiss: "Schließen"
};
var Tc = {};
Tc = {
  dismiss: "Απόρριψη"
};
var Mc = {};
Mc = {
  dismiss: "Dismiss"
};
var Rc = {};
Rc = {
  dismiss: "Descartar"
};
var Ic = {};
Ic = {
  dismiss: "Lõpeta"
};
var Nc = {};
Nc = {
  dismiss: "Hylkää"
};
var Kc = {};
Kc = {
  dismiss: "Rejeter"
};
var zc = {};
zc = {
  dismiss: "התעלם"
};
var Vc = {};
Vc = {
  dismiss: "Odbaci"
};
var Lc = {};
Lc = {
  dismiss: "Elutasítás"
};
var Oc = {};
Oc = {
  dismiss: "Ignora"
};
var jc = {};
jc = {
  dismiss: "閉じる"
};
var Hc = {};
Hc = {
  dismiss: "무시"
};
var _c = {};
_c = {
  dismiss: "Atmesti"
};
var Uc = {};
Uc = {
  dismiss: "Nerādīt"
};
var Wc = {};
Wc = {
  dismiss: "Lukk"
};
var Gc = {};
Gc = {
  dismiss: "Negeren"
};
var Zc = {};
Zc = {
  dismiss: "Zignoruj"
};
var qc = {};
qc = {
  dismiss: "Descartar"
};
var Yc = {};
Yc = {
  dismiss: "Dispensar"
};
var Jc = {};
Jc = {
  dismiss: "Revocare"
};
var Xc = {};
Xc = {
  dismiss: "Пропустить"
};
var Qc = {};
Qc = {
  dismiss: "Zrušiť"
};
var ef = {};
ef = {
  dismiss: "Opusti"
};
var tf = {};
tf = {
  dismiss: "Odbaci"
};
var nf = {};
nf = {
  dismiss: "Avvisa"
};
var rf = {};
rf = {
  dismiss: "Kapat"
};
var af = {};
af = {
  dismiss: "Скасувати"
};
var lf = {};
lf = {
  dismiss: "取消"
};
var of = {};
of = {
  dismiss: "關閉"
};
wc = {
  "ar-AE": Sc,
  "bg-BG": Bc,
  "cs-CZ": kc,
  "da-DK": Fc,
  "de-DE": Ac,
  "el-GR": Tc,
  "en-US": Mc,
  "es-ES": Rc,
  "et-EE": Ic,
  "fi-FI": Nc,
  "fr-FR": Kc,
  "he-IL": zc,
  "hr-HR": Vc,
  "hu-HU": Lc,
  "it-IT": Oc,
  "ja-JP": jc,
  "ko-KR": Hc,
  "lt-LT": _c,
  "lv-LV": Uc,
  "nb-NO": Wc,
  "nl-NL": Gc,
  "pl-PL": Zc,
  "pt-BR": qc,
  "pt-PT": Yc,
  "ro-RO": Jc,
  "ru-RU": Xc,
  "sk-SK": Qc,
  "sl-SI": ef,
  "sr-SP": tf,
  "sv-SE": nf,
  "tr-TR": rf,
  "uk-UA": af,
  "zh-CN": lf,
  "zh-TW": of
};
function Pl(e) {
  let { onDismiss: t, ...n } = e, r = Ee(/* @__PURE__ */ X1(wc), "@react-aria/overlays"), a = Lt(n, r.format("dismiss")), i = () => {
    t && t();
  };
  return /* @__PURE__ */ g.createElement(jt, null, /* @__PURE__ */ g.createElement("button", {
    ...a,
    tabIndex: -1,
    onClick: i,
    style: {
      width: 1,
      height: 1
    }
  }));
}
let tr = /* @__PURE__ */ new WeakMap(), at = [];
function vo(e, t = document.body) {
  let n = new Set(e), r = /* @__PURE__ */ new Set(), a = (u) => {
    for (let p of u.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))
      n.add(p);
    let s = (p) => {
      if (n.has(p) || r.has(p.parentElement) && p.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let f of n)
        if (p.contains(f))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, d = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
      acceptNode: s
    }), c = s(u);
    if (c === NodeFilter.FILTER_ACCEPT && i(u), c !== NodeFilter.FILTER_REJECT) {
      let p = d.nextNode();
      for (; p != null; )
        i(p), p = d.nextNode();
    }
  }, i = (u) => {
    var s;
    let d = (s = tr.get(u)) !== null && s !== void 0 ? s : 0;
    u.getAttribute("aria-hidden") === "true" && d === 0 || (d === 0 && u.setAttribute("aria-hidden", "true"), r.add(u), tr.set(u, d + 1));
  };
  at.length && at[at.length - 1].disconnect(), a(t);
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
  return at.push(o), () => {
    l.disconnect();
    for (let u of r) {
      let s = tr.get(u);
      s === 1 ? (u.removeAttribute("aria-hidden"), tr.delete(u)) : tr.set(u, s - 1);
    }
    o === at[at.length - 1] ? (at.pop(), at.length && at[at.length - 1].observe()) : at.splice(at.indexOf(o), 1);
  };
}
function gy(e, t) {
  let { triggerRef: n, popoverRef: r, isNonModal: a, isKeyboardDismissDisabled: i, shouldCloseOnInteractOutside: l, ...o } = e, { overlayProps: u, underlayProps: s } = Ec({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !a,
    isKeyboardDismissDisabled: i,
    shouldCloseOnInteractOutside: l
  }, r), { overlayProps: d, arrowProps: c, placement: p } = Cc({
    ...o,
    targetRef: n,
    overlayRef: r,
    isOpen: t.isOpen,
    onClose: a ? t.close : null
  });
  return Pc({
    isDisabled: a || !t.isOpen
  }), fe(() => {
    if (t.isOpen && !a && r.current)
      return vo([
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
    placement: p
  };
}
const uf = /* @__PURE__ */ g.createContext(null);
function sf(e) {
  let t = wt(), { portalContainer: n = t ? null : document.body, isExiting: r } = e, [a, i] = Z(!1), l = K(() => ({
    contain: a,
    setContain: i
  }), [
    a,
    i
  ]);
  if (!n)
    return null;
  let o = e.children;
  return e.disableFocusManagement || (o = /* @__PURE__ */ g.createElement(Nr, {
    restoreFocus: !0,
    contain: a && !r
  }, o)), o = /* @__PURE__ */ g.createElement(uf.Provider, {
    value: l
  }, /* @__PURE__ */ g.createElement(Yg, null, o)), /* @__PURE__ */ Ar.createPortal(o, n);
}
function df() {
  let e = U(uf), t = e == null ? void 0 : e.setContain;
  fe(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function $y(e, t, n) {
  let { overlayProps: r, underlayProps: a } = Ec({
    ...e,
    isOpen: t.isOpen,
    onClose: t.close
  }, n);
  return Pc({
    isDisabled: !t.isOpen
  }), df(), J(() => {
    if (t.isOpen)
      return vo([
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
function wl(e) {
  return ma() ? e.altKey : e.ctrlKey;
}
function Tn(e) {
  return Vt() ? e.metaKey : e.ctrlKey;
}
const yy = 1e3;
function cf(e) {
  let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e, a = I({
    search: "",
    timeout: null
  }).current, i = (l) => {
    let o = xy(l.key);
    if (!o || l.ctrlKey || l.metaKey || !l.currentTarget.contains(l.target))
      return;
    o === " " && a.search.trim().length > 0 && (l.preventDefault(), "continuePropagation" in l || l.stopPropagation()), a.search += o;
    let u = t.getKeyForSearch(a.search, n.focusedKey);
    u == null && (u = t.getKeyForSearch(a.search)), u != null && (n.setFocusedKey(u), r && r(u)), clearTimeout(a.timeout), a.timeout = setTimeout(() => {
      a.search = "";
    }, yy);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: t.getKeyForSearch ? i : null
    }
  };
}
function xy(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function ii(e) {
  let { selectionManager: t, keyboardDelegate: n, ref: r, autoFocus: a = !1, shouldFocusWrap: i = !1, disallowEmptySelection: l = !1, disallowSelectAll: o = !1, selectOnFocus: u = t.selectionBehavior === "replace", disallowTypeAhead: s = !1, shouldUseVirtualFocus: d, allowsTabNavigation: c = !1, isVirtualized: p, scrollRef: f = r, linkBehavior: b = "action" } = e, { direction: m } = oe(), h = Tr(), y = (F) => {
    if (F.altKey && F.key === "Tab" && F.preventDefault(), !r.current.contains(F.target))
      return;
    const E = (L, V) => {
      if (L != null) {
        if (t.isLink(L) && b === "selection" && u && !wl(F)) {
          eg(() => {
            t.setFocusedKey(L, V);
          });
          let N = f.current.querySelector(`[data-key="${CSS.escape(L.toString())}"]`);
          h.open(N, F);
          return;
        }
        if (t.setFocusedKey(L, V), t.isLink(L) && b === "override")
          return;
        F.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(L) : u && !wl(F) && t.replaceSelection(L);
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
          var k, z;
          F.preventDefault();
          let L = t.focusedKey != null ? n.getKeyAbove(t.focusedKey) : (k = n.getLastKey) === null || k === void 0 ? void 0 : k.call(n);
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
          let L = n.getFirstKey(t.focusedKey, Tn(F));
          t.setFocusedKey(L), Tn(F) && F.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(L) : u && t.replaceSelection(L);
        }
        break;
      case "End":
        if (n.getLastKey) {
          F.preventDefault();
          let L = n.getLastKey(t.focusedKey, Tn(F));
          t.setFocusedKey(L), Tn(F) && F.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(L) : u && t.replaceSelection(L);
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
        Tn(F) && t.selectionMode === "multiple" && o !== !0 && (F.preventDefault(), t.selectAll());
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
            V && !V.contains(document.activeElement) && vt(V);
          }
          break;
        }
    }
  }, $ = I({
    top: 0,
    left: 0
  });
  Jt(f, "scroll", p ? null : () => {
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
        }, k = F.relatedTarget;
        var E, S;
        k && F.currentTarget.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_FOLLOWING ? w((E = t.lastSelectedKey) !== null && E !== void 0 ? E : n.getLastKey()) : w((S = t.firstSelectedKey) !== null && S !== void 0 ? S : n.getFirstKey());
      } else
        p || (f.current.scrollTop = $.current.top, f.current.scrollLeft = $.current.left);
      if (!p && t.focusedKey != null) {
        let w = f.current.querySelector(`[data-key="${CSS.escape(t.focusedKey.toString())}"]`);
        w && (w.contains(document.activeElement) || vt(w), Sa() === "keyboard" && je(w, {
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
      t.setFocused(!0), t.setFocusedKey(F), F == null && !d && De(r.current);
    }
  }, []);
  let B = I(t.focusedKey);
  J(() => {
    let F = Sa();
    if (t.isFocused && t.focusedKey != null && (f != null && f.current)) {
      let E = f.current.querySelector(`[data-key="${CSS.escape(t.focusedKey.toString())}"]`);
      E && (F === "keyboard" || P.current) && (p || Hs(f.current, E), F !== "virtual" && je(E, {
        containingElement: r.current
      }));
    }
    t.isFocused && t.focusedKey == null && B.current != null && De(r.current), B.current = t.focusedKey, P.current = !1;
  }, [
    p,
    f,
    t.focusedKey,
    t.isFocused,
    r
  ]);
  let M = {
    onKeyDown: y,
    onFocus: x,
    onBlur: C,
    onMouseDown(F) {
      f.current === F.target && F.preventDefault();
    }
  }, { typeSelectProps: v } = cf({
    keyboardDelegate: n,
    selectionManager: t
  });
  s || (M = j(v, M));
  let R;
  return d || (R = t.focusedKey == null ? 0 : -1), {
    collectionProps: {
      ...M,
      tabIndex: R
    }
  };
}
function qn(e) {
  let { selectionManager: t, key: n, ref: r, shouldSelectOnPressUp: a, shouldUseVirtualFocus: i, focus: l, isDisabled: o, onAction: u, allowsDifferentPressOrigin: s, linkBehavior: d = "action" } = e, c = Tr(), p = (D) => {
    if (D.pointerType === "keyboard" && wl(D))
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
      t.selectionMode === "single" ? t.isSelected(n) && !t.disallowEmptySelection ? t.toggleSelection(n) : t.replaceSelection(n) : D && D.shiftKey ? t.extendSelection(n) : t.selectionBehavior === "toggle" || D && (Tn(D) || D.pointerType === "touch" || D.pointerType === "virtual") ? t.toggleSelection(n) : t.replaceSelection(n);
    }
  };
  J(() => {
    n === t.focusedKey && t.isFocused && !i && (l ? l() : document.activeElement !== r.current && De(r.current));
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
  let b = t.isLink(n) && d === "override", m = t.isLink(n) && d !== "selection" && d !== "none", h = !o && t.canSelectItem(n) && !b, y = (u || m) && !o, $ = y && (t.selectionBehavior === "replace" ? !h : !h || t.isEmpty), x = y && h && t.selectionBehavior === "replace", C = $ || x, P = I(null), B = C && h, M = I(!1), v = I(!1), R = (D) => {
    u && u(), m && c.open(r.current, D);
  }, F = {};
  a ? (F.onPressStart = (D) => {
    P.current = D.pointerType, M.current = B, D.pointerType === "keyboard" && (!C || es()) && p(D);
  }, s ? (F.onPressUp = $ ? null : (D) => {
    D.pointerType !== "keyboard" && h && p(D);
  }, F.onPress = $ ? R : null) : F.onPress = (D) => {
    if ($ || x && D.pointerType !== "mouse") {
      if (D.pointerType === "keyboard" && !Qu())
        return;
      R(D);
    } else
      D.pointerType !== "keyboard" && h && p(D);
  }) : (F.onPressStart = (D) => {
    P.current = D.pointerType, M.current = B, v.current = $, h && (D.pointerType === "mouse" && !$ || D.pointerType === "keyboard" && (!y || es())) && p(D);
  }, F.onPress = (D) => {
    (D.pointerType === "touch" || D.pointerType === "pen" || D.pointerType === "virtual" || D.pointerType === "keyboard" && C && Qu() || D.pointerType === "mouse" && v.current) && (C ? R(D) : h && p(D));
  }), f["data-key"] = n, F.preventFocusOnPress = i;
  let { pressProps: E, isPressed: S } = Xe(F), w = x ? (D) => {
    P.current === "mouse" && (D.stopPropagation(), D.preventDefault(), R(D));
  } : void 0, { longPressProps: k } = Qs({
    isDisabled: !B,
    onLongPress(D) {
      D.pointerType === "touch" && (p(D), t.setSelectionBehavior("toggle"));
    }
  }), z = (D) => {
    P.current === "touch" && M.current && D.preventDefault();
  }, T = t.isLink(n) ? (D) => {
    mn.isOpening || D.preventDefault();
  } : void 0;
  return {
    itemProps: j(f, h || $ ? E : {}, B ? k : {}, {
      onDoubleClick: w,
      onDragStartCapture: z,
      onClick: T
    }),
    isPressed: S,
    isSelected: t.isSelected(n),
    isFocused: t.isFocused && t.focusedKey === n,
    isDisabled: o,
    allowsSelection: h,
    hasAction: C
  };
}
function Qu() {
  let e = window.event;
  return (e == null ? void 0 : e.key) === "Enter";
}
function es() {
  let e = window.event;
  return (e == null ? void 0 : e.key) === " " || (e == null ? void 0 : e.code) === "Space";
}
class Cn {
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
    if (!Ea(n))
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
    if (!Ea(n))
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
function go(e) {
  let { selectionManager: t, collection: n, disabledKeys: r, ref: a, keyboardDelegate: i } = e, l = Zn({
    usage: "search",
    sensitivity: "base"
  }), o = t.disabledBehavior, u = K(() => i || new Cn(n, o === "selection" ? /* @__PURE__ */ new Set() : r, a, l), [
    i,
    n,
    r,
    a,
    l,
    o
  ]), { collectionProps: s } = ii({
    ...e,
    ref: a,
    selectionManager: t,
    keyboardDelegate: u
  });
  return {
    listProps: s
  };
}
class Dy {
  build(t, n) {
    return this.context = n, ts(() => this.iterateCollection(t));
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
      g.Children.forEach(n, (l) => {
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
    if (g.isValidElement(i)) {
      let u = i.type;
      if (typeof u != "function" && typeof u.getCollectionNode != "function") {
        let p = typeof i.type == "function" ? i.type.name : i.type;
        throw new Error(`Unknown element <${p}> in collection.`);
      }
      let s = u.getCollectionNode(i.props, this.context), d = t.index, c = s.next();
      for (; !c.done && c.value; ) {
        let p = c.value;
        t.index = d;
        let f = p.key;
        f || (f = p.element ? null : this.getKey(i, t, n, r));
        let m = [
          ...this.getFullNode({
            ...p,
            key: f,
            index: d,
            wrapper: Cy(t.wrapper, p.wrapper)
          }, this.getChildState(n, p), r ? `${r}${i.key}` : i.key, a)
        ];
        for (let h of m) {
          if (h.value = p.value || t.value, h.value && this.cache.set(h.value, h), t.type && h.type !== t.type)
            throw new Error(`Unsupported type <${Zi(h.type)}> in <${Zi(a.type)}>. Only <${Zi(t.type)}> is supported.`);
          d++, yield h;
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
      childNodes: ts(function* () {
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
function ts(e) {
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
function Cy(e, t) {
  if (e && t)
    return (n) => e(t(n));
  if (e)
    return e;
  if (t)
    return t;
}
function Zi(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function $o(e, t, n) {
  let r = K(() => new Dy(), []), { children: a, items: i, collection: l } = e;
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
function we(e, t) {
  return typeof t.getChildren == "function" ? t.getChildren(e.key) : e.childNodes;
}
function Rt(e) {
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
function qi(e, t, n) {
  if (t.parentKey === n.parentKey)
    return t.index - n.index;
  let r = [
    ...ns(e, t),
    t
  ], a = [
    ...ns(e, n),
    n
  ], i = r.slice(0, a.length).findIndex((l, o) => l !== a[o]);
  return i !== -1 ? (t = r[i], n = a[i], t.index - n.index) : r.findIndex((l) => l === n) >= 0 ? 1 : (a.findIndex((l) => l === t) >= 0, -1);
}
function ns(e, t) {
  let n = [];
  for (; (t == null ? void 0 : t.parentKey) != null; )
    t = e.getItem(t.parentKey), n.unshift(t);
  return n;
}
const rs = /* @__PURE__ */ new WeakMap();
function yo(e) {
  let t = rs.get(e);
  if (t != null)
    return t;
  t = 0;
  let n = (r) => {
    for (let a of r)
      a.type === "section" ? n(we(a, e)) : t++;
  };
  return n(e), rs.set(e, t), t;
}
const li = /* @__PURE__ */ new WeakMap();
function Ey(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function ff(e, t) {
  let n = li.get(e);
  if (!n)
    throw new Error("Unknown list");
  return `${n.id}-option-${Ey(t)}`;
}
function Py(e, t, n) {
  let r = Y(e, {
    labelable: !0
  }), a = e.selectionBehavior || "toggle", i = e.linkBehavior || (a === "replace" ? "action" : "override");
  a === "toggle" && i === "action" && (i = "override");
  let { listProps: l } = go({
    ...e,
    ref: n,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    linkBehavior: i
  }), { focusWithinProps: o } = yt({
    onFocusWithin: e.onFocus,
    onBlurWithin: e.onBlur,
    onFocusWithinChange: e.onFocusChange
  }), u = pe(e.id);
  li.set(t, {
    id: u,
    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
    shouldFocusOnHover: e.shouldFocusOnHover,
    isVirtualized: e.isVirtualized,
    onAction: e.onAction,
    linkBehavior: i
  });
  let { labelProps: s, fieldProps: d } = jr({
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
function wy(e, t, n) {
  var r;
  let { key: a } = e, i = li.get(t);
  var l;
  let o = (l = e.isDisabled) !== null && l !== void 0 ? l : t.disabledKeys.has(a);
  var u;
  let s = (u = e.isSelected) !== null && u !== void 0 ? u : t.selectionManager.isSelected(a);
  var d;
  let c = (d = e.shouldSelectOnPressUp) !== null && d !== void 0 ? d : i == null ? void 0 : i.shouldSelectOnPressUp;
  var p;
  let f = (p = e.shouldFocusOnHover) !== null && p !== void 0 ? p : i == null ? void 0 : i.shouldFocusOnHover;
  var b;
  let m = (b = e.shouldUseVirtualFocus) !== null && b !== void 0 ? b : i == null ? void 0 : i.shouldUseVirtualFocus;
  var h;
  let y = (h = e.isVirtualized) !== null && h !== void 0 ? h : i == null ? void 0 : i.isVirtualized, $ = Pt(), x = Pt(), C = {
    role: "option",
    "aria-disabled": o || void 0,
    "aria-selected": t.selectionManager.selectionMode !== "none" ? s : void 0
  };
  Vt() && Gl() || (C["aria-label"] = e["aria-label"], C["aria-labelledby"] = $, C["aria-describedby"] = x);
  let P = t.collection.getItem(a);
  if (y) {
    let w = Number(P == null ? void 0 : P.index);
    C["aria-posinset"] = Number.isNaN(w) ? void 0 : w + 1, C["aria-setsize"] = yo(t.collection);
  }
  let { itemProps: B, isPressed: M, isFocused: v, hasAction: R, allowsSelection: F } = qn({
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
  }), { hoverProps: E } = ye({
    isDisabled: o || !f,
    onHoverStart() {
      vn() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(a));
    }
  }), S = Y(P == null ? void 0 : P.props, {
    isLink: !!(!(P == null || (r = P.props) === null || r === void 0) && r.href)
  });
  return delete S.id, {
    optionProps: {
      ...C,
      ...j(S, B, E),
      id: ff(t, a)
    },
    labelProps: {
      id: $
    },
    descriptionProps: {
      id: x
    },
    isFocused: v,
    isFocusVisible: v && vn(),
    isSelected: s,
    isDisabled: o,
    isPressed: M,
    allowsSelection: F,
    hasAction: R
  };
}
function Sy(e) {
  let { heading: t, "aria-label": n } = e, r = pe();
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
function By(e) {
  return e && e.__esModule ? e.default : e;
}
var pf = {}, bf = {};
bf = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var mf = {};
mf = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var hf = {};
hf = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var vf = {};
vf = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var gf = {};
gf = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var $f = {};
$f = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var yf = {};
yf = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var xf = {};
xf = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var Df = {};
Df = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var Cf = {};
Cf = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var Ef = {};
Ef = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var Pf = {};
Pf = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var wf = {};
wf = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var Sf = {};
Sf = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var Bf = {};
Bf = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var kf = {};
kf = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var Ff = {};
Ff = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var Af = {};
Af = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var Tf = {};
Tf = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var Mf = {};
Mf = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var Rf = {};
Rf = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var If = {};
If = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var Nf = {};
Nf = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var Kf = {};
Kf = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var zf = {};
zf = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var Vf = {};
Vf = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var Lf = {};
Lf = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var Of = {};
Of = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var jf = {};
jf = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var Hf = {};
Hf = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var _f = {};
_f = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var Uf = {};
Uf = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var Wf = {};
Wf = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var Gf = {};
Gf = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
pf = {
  "ar-AE": bf,
  "bg-BG": mf,
  "cs-CZ": hf,
  "da-DK": vf,
  "de-DE": gf,
  "el-GR": $f,
  "en-US": yf,
  "es-ES": xf,
  "et-EE": Df,
  "fi-FI": Cf,
  "fr-FR": Ef,
  "he-IL": Pf,
  "hr-HR": wf,
  "hu-HU": Sf,
  "it-IT": Bf,
  "ja-JP": kf,
  "ko-KR": Ff,
  "lt-LT": Af,
  "lv-LV": Tf,
  "nb-NO": Mf,
  "nl-NL": Rf,
  "pl-PL": If,
  "pt-BR": Nf,
  "pt-PT": Kf,
  "ro-RO": zf,
  "ru-RU": Vf,
  "sk-SK": Lf,
  "sl-SI": Of,
  "sr-SP": jf,
  "sv-SE": Hf,
  "tr-TR": _f,
  "uk-UA": Uf,
  "zh-CN": Wf,
  "zh-TW": Gf
};
function Zf(e, t, n) {
  let { type: r = "menu", isDisabled: a, trigger: i = "press" } = e, l = pe(), { triggerProps: o, overlayProps: u } = sy({
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
  }, d = Ee(/* @__PURE__ */ By(pf), "@react-aria/menu"), { longPressProps: c } = Qs({
    isDisabled: a || i !== "longPress",
    accessibilityDescription: d.format("longPressMessage"),
    onLongPressStart() {
      t.close();
    },
    onLongPress() {
      t.open("first");
    }
  }), p = {
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
      ...i === "press" ? p : c,
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
const qf = /* @__PURE__ */ new WeakMap();
function ky(e, t, n) {
  let { shouldFocusWrap: r = !0, onKeyDown: a, onKeyUp: i, ...l } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let o = Y(e, {
    labelable: !0
  }), { listProps: u } = go({
    ...l,
    ref: n,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    shouldFocusWrap: r,
    linkBehavior: "override"
  });
  return qf.set(t, {
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
function Yf(e, t, n) {
  var r;
  let { key: a, closeOnSelect: i, isVirtualized: l, "aria-haspopup": o, onPressStart: u, onPressUp: s, onPress: d, onPressChange: c, onPressEnd: p, onHoverStart: f, onHoverChange: b, onHoverEnd: m, onKeyDown: h, onKeyUp: y, onFocus: $, onFocusChange: x, onBlur: C } = e, P = !!o;
  var B;
  let M = (B = e.isDisabled) !== null && B !== void 0 ? B : t.disabledKeys.has(a);
  var v;
  let R = (v = e.isSelected) !== null && v !== void 0 ? v : t.selectionManager.isSelected(a), F = qf.get(t), E = e.onClose || F.onClose, S = P ? () => {
  } : e.onAction || F.onAction, w = Tr(), k = (ae) => {
    S && S(a), ae.target instanceof HTMLAnchorElement && w.open(ae.target, ae);
  }, z = "menuitem";
  P || (t.selectionManager.selectionMode === "single" ? z = "menuitemradio" : t.selectionManager.selectionMode === "multiple" && (z = "menuitemcheckbox"));
  let T = Pt(), D = Pt(), H = Pt(), _ = {
    "aria-disabled": M || void 0,
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
  t.selectionManager.selectionMode !== "none" && !P && (_["aria-checked"] = R);
  let L = t.collection.getItem(a);
  l && (_["aria-posinset"] = L == null ? void 0 : L.index, _["aria-setsize"] = yo(t.collection));
  let V = (ae) => {
    ae.pointerType === "keyboard" && k(ae), u == null || u(ae);
  }, N = (ae) => {
    ae.pointerType !== "keyboard" && (k(ae), !P && E && (i ?? (t.selectionManager.selectionMode !== "multiple" || t.selectionManager.isLink(a))) && E()), s == null || s(ae);
  }, { itemProps: G, isFocused: re } = qn({
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
  }), { pressProps: se, isPressed: Pe } = Xe({
    onPressStart: V,
    onPress: d,
    onPressUp: N,
    onPressChange: c,
    onPressEnd: p,
    isDisabled: M
  }), { hoverProps: O } = ye({
    isDisabled: M,
    onHoverStart(ae) {
      vn() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(a)), f == null || f(ae);
    },
    onHoverChange: b,
    onHoverEnd: m
  }), { keyboardProps: X } = Ja({
    onKeyDown: (ae) => {
      if (ae.repeat) {
        ae.continuePropagation();
        return;
      }
      switch (ae.key) {
        case " ":
          !M && t.selectionManager.selectionMode === "none" && !P && i !== !1 && E && E();
          break;
        case "Enter":
          !M && i !== !1 && !P && E && E();
          break;
        default:
          P || ae.continuePropagation(), h == null || h(ae);
          break;
      }
    },
    onKeyUp: y
  }), { focusProps: ce } = qa({
    onBlur: C,
    onFocus: $,
    onFocusChange: x
  }), xe = Y(L.props, {
    isLink: !!(!(L == null || (r = L.props) === null || r === void 0) && r.href)
  });
  return delete xe.id, {
    menuItemProps: {
      ..._,
      ...j(xe, P ? {
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
    isSelected: R,
    isPressed: Pe,
    isDisabled: M
  };
}
function Fy(e) {
  let { heading: t, "aria-label": n } = e, r = pe();
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
const fa = 2, Ay = 50, Ty = 1e3, as = Math.PI / 12;
function My(e) {
  let { menuRef: t, submenuRef: n, isOpen: r, isDisabled: a } = e, i = I(), l = I(), o = I(0), u = I(), s = I(), d = I(), c = I(2), [p, f] = Z(!1);
  Mr({
    ref: n,
    onResize: () => {
      n.current && (l.current = n.current.getBoundingClientRect(), d.current = void 0);
    }
  });
  let m = () => {
    f(!1), c.current = fa;
  }, h = Ir();
  J(() => {
    p && t.current ? t.current.style.pointerEvents = "none" : t.current.style.pointerEvents = "";
  }, [
    t,
    p
  ]), J(() => {
    let y = n.current, $ = t.current;
    if (a || !y || !r || h !== "pointer") {
      m();
      return;
    }
    l.current = y.getBoundingClientRect();
    let x = (C) => {
      if (C.pointerType === "touch" || C.pointerType === "pen")
        return;
      let P = Date.now();
      if (P - o.current < Ay)
        return;
      clearTimeout(u.current), clearTimeout(s.current);
      let { clientX: B, clientY: M } = C;
      if (!i.current) {
        i.current = {
          x: B,
          y: M
        };
        return;
      }
      if (!l.current)
        return;
      if (d.current || (d.current = B > l.current.right ? "left" : "right"), B < $.getBoundingClientRect().left || B > $.getBoundingClientRect().right || M < $.getBoundingClientRect().top || M > $.getBoundingClientRect().bottom) {
        m();
        return;
      }
      let v = i.current.x, R = i.current.y, F = d.current === "right" ? l.current.left - v : v - l.current.right, E = Math.atan2(R - l.current.top, F) + as, S = Math.atan2(R - l.current.bottom, F) - as, w = Math.atan2(R - M, d.current === "left" ? -(B - v) : B - v), k = w < E && w > S;
      c.current = k ? Math.min(c.current + 1, fa) : Math.max(c.current - 1, 0), c.current >= fa ? f(!0) : f(!1), o.current = P, i.current = {
        x: B,
        y: M
      }, k && (u.current = setTimeout(() => {
        m(), s.current = setTimeout(() => {
          let z = document.elementFromPoint(B, M);
          z && $.contains(z) && z.dispatchEvent(new PointerEvent("pointerover", {
            bubbles: !0,
            cancelable: !0
          }));
        }, 100);
      }, Ty));
    };
    return window.addEventListener("pointermove", x), () => {
      window.removeEventListener("pointermove", x), clearTimeout(u.current), clearTimeout(s.current), c.current = fa;
    };
  }, [
    a,
    r,
    t,
    h,
    f,
    n
  ]);
}
function Ry(e, t, n) {
  let { parentMenuRef: r, submenuRef: a, type: i = "menu", isDisabled: l, node: o, delay: u = 200 } = e, s = pe(), d = pe(), { direction: c } = oe(), p = I(), f = Q(() => {
    p.current && (clearTimeout(p.current), p.current = void 0);
  }, [
    p
  ]), b = $e((v) => {
    f(), t.open(v);
  }), m = $e(() => {
    f(), t.close();
  });
  fe(() => () => {
    f();
  }, [
    f
  ]);
  let h = (v) => {
    switch (v.key) {
      case "ArrowLeft":
        c === "ltr" && v.currentTarget.contains(v.target) && (v.stopPropagation(), m(), n.current.focus());
        break;
      case "ArrowRight":
        c === "rtl" && v.currentTarget.contains(v.target) && (v.stopPropagation(), m(), n.current.focus());
        break;
      case "Escape":
        v.stopPropagation(), t.closeAll();
        break;
    }
  }, y = {
    id: d,
    "aria-label": o.textValue,
    submenuLevel: t.submenuLevel,
    ...i === "menu" && {
      onClose: t.closeAll,
      autoFocus: t.focusStrategy,
      onKeyDown: h
    }
  }, $ = (v) => {
    switch (v.key) {
      case "ArrowRight":
        l || (c === "ltr" ? (t.isOpen || b("first"), i === "menu" && (a != null && a.current) && document.activeElement === (n == null ? void 0 : n.current) && a.current.focus()) : t.isOpen ? m() : v.continuePropagation());
        break;
      case "ArrowLeft":
        l || (c === "rtl" ? (t.isOpen || b("first"), i === "menu" && (a != null && a.current) && document.activeElement === (n == null ? void 0 : n.current) && a.current.focus()) : t.isOpen ? m() : v.continuePropagation());
        break;
      case "Escape":
        t.closeAll();
        break;
      default:
        v.continuePropagation();
        break;
    }
  }, x = (v) => {
    !l && (v.pointerType === "virtual" || v.pointerType === "keyboard") && b("first");
  }, C = (v) => {
    !l && (v.pointerType === "touch" || v.pointerType === "mouse") && b();
  }, P = (v) => {
    l || (v && !t.isOpen ? p.current || (p.current = setTimeout(() => {
      b();
    }, u)) : v || f());
  }, B = (v) => {
    t.isOpen && r.current.contains(v.relatedTarget) && m();
  }, M = (v) => v !== n.current;
  return My({
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
      shouldCloseOnInteractOutside: M
    }
  };
}
function oi(e, t) {
  let { inputElementType: n = "input", isDisabled: r = !1, isRequired: a = !1, isReadOnly: i = !1, type: l = "text", validationBehavior: o = "aria" } = e, [u, s] = Ke(e.value, e.defaultValue || "", e.onChange), { focusableProps: d } = xn(e, t), c = xt({
    ...e,
    value: u
  }), { isInvalid: p, validationErrors: f, validationDetails: b } = c.displayValidation, { labelProps: m, fieldProps: h, descriptionProps: y, errorMessageProps: $ } = rn({
    ...e,
    isInvalid: p,
    errorMessage: e.errorMessage || f
  }), x = Y(e, {
    labelable: !0
  });
  const C = {
    type: l,
    pattern: e.pattern
  };
  return yn(t, u, s), Or(e, c, t), J(() => {
    if (t.current instanceof ut(t.current).HTMLTextAreaElement) {
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
      "aria-invalid": p || void 0,
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
      ...h
    }),
    descriptionProps: y,
    errorMessageProps: $,
    isInvalid: p,
    validationErrors: f,
    validationDetails: b
  };
}
function is() {
  return typeof window < "u" && window.InputEvent && // @ts-ignore
  typeof InputEvent.prototype.getTargetRanges == "function";
}
function Iy(e, t, n) {
  let r = $e((c) => {
    let p = n.current, f;
    switch (c.inputType) {
      case "historyUndo":
      case "historyRedo":
        return;
      case "deleteContent":
      case "deleteByCut":
      case "deleteByDrag":
        f = p.value.slice(0, p.selectionStart) + p.value.slice(p.selectionEnd);
        break;
      case "deleteContentForward":
        f = p.selectionEnd === p.selectionStart ? p.value.slice(0, p.selectionStart) + p.value.slice(p.selectionEnd + 1) : p.value.slice(0, p.selectionStart) + p.value.slice(p.selectionEnd);
        break;
      case "deleteContentBackward":
        f = p.selectionEnd === p.selectionStart ? p.value.slice(0, p.selectionStart - 1) + p.value.slice(p.selectionStart) : p.value.slice(0, p.selectionStart) + p.value.slice(p.selectionEnd);
        break;
      case "deleteSoftLineBackward":
      case "deleteHardLineBackward":
        f = p.value.slice(p.selectionStart);
        break;
      default:
        c.data != null && (f = p.value.slice(0, p.selectionStart) + c.data + p.value.slice(p.selectionEnd));
        break;
    }
    (f == null || !t.validate(f)) && c.preventDefault();
  });
  J(() => {
    if (!is())
      return;
    let c = n.current;
    return c.addEventListener("beforeinput", r, !1), () => {
      c.removeEventListener("beforeinput", r, !1);
    };
  }, [
    n,
    r
  ]);
  let a = is() ? null : (c) => {
    let p = c.target.value.slice(0, c.target.selectionStart) + c.data + c.target.value.slice(c.target.selectionEnd);
    t.validate(p) || c.preventDefault();
  }, { labelProps: i, inputProps: l, descriptionProps: o, errorMessageProps: u, ...s } = oi(e, n), d = I(null);
  return {
    inputProps: j(l, {
      onBeforeInput: a,
      onCompositionStart() {
        let { value: c, selectionStart: p, selectionEnd: f } = n.current;
        d.current = {
          value: c,
          selectionStart: p,
          selectionEnd: f
        };
      },
      onCompositionEnd() {
        if (!t.validate(n.current.value)) {
          let { value: c, selectionStart: p, selectionEnd: f } = d.current;
          n.current.value = c, n.current.setSelectionRange(p, f), t.setInputValue(c);
        }
      }
    }),
    labelProps: i,
    descriptionProps: o,
    errorMessageProps: u,
    ...s
  };
}
function Ny(e) {
  return e && e.__esModule ? e.default : e;
}
var Jf = {}, Xf = {};
Xf = {
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
var Qf = {};
Qf = {
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
var e4 = {};
e4 = {
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
var t4 = {};
t4 = {
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
var n4 = {};
n4 = {
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
var r4 = {};
r4 = {
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
var a4 = {};
a4 = {
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
var i4 = {};
i4 = {
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
var l4 = {};
l4 = {
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
var o4 = {};
o4 = {
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
var u4 = {};
u4 = {
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
var s4 = {};
s4 = {
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
var d4 = {};
d4 = {
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
var c4 = {};
c4 = {
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
var f4 = {};
f4 = {
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
var p4 = {};
p4 = {
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
var b4 = {};
b4 = {
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
var m4 = {};
m4 = {
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
var h4 = {};
h4 = {
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
var v4 = {};
v4 = {
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
var g4 = {};
g4 = {
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
var $4 = {};
$4 = {
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
var y4 = {};
y4 = {
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
var x4 = {};
x4 = {
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
var D4 = {};
D4 = {
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
var C4 = {};
C4 = {
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
var E4 = {};
E4 = {
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
var P4 = {};
P4 = {
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
var w4 = {};
w4 = {
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
var S4 = {};
S4 = {
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
var B4 = {};
B4 = {
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
var k4 = {};
k4 = {
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
var F4 = {};
F4 = {
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
var A4 = {};
A4 = {
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
Jf = {
  "ar-AE": Xf,
  "bg-BG": Qf,
  "cs-CZ": e4,
  "da-DK": t4,
  "de-DE": n4,
  "el-GR": r4,
  "en-US": a4,
  "es-ES": i4,
  "et-EE": l4,
  "fi-FI": o4,
  "fr-FR": u4,
  "he-IL": s4,
  "hr-HR": d4,
  "hu-HU": c4,
  "it-IT": f4,
  "ja-JP": p4,
  "ko-KR": b4,
  "lt-LT": m4,
  "lv-LV": h4,
  "nb-NO": v4,
  "nl-NL": g4,
  "pl-PL": $4,
  "pt-BR": y4,
  "pt-PT": x4,
  "ro-RO": D4,
  "ru-RU": C4,
  "sk-SK": E4,
  "sl-SI": P4,
  "sr-SP": w4,
  "sv-SE": S4,
  "tr-TR": B4,
  "uk-UA": k4,
  "zh-CN": F4,
  "zh-TW": A4
};
function Ky(e, t) {
  let { buttonRef: n, popoverRef: r, inputRef: a, listBoxRef: i, keyboardDelegate: l, shouldFocusWrap: o, isReadOnly: u, isDisabled: s } = e, d = Ee(/* @__PURE__ */ Ny(Jf), "@react-aria/combobox"), { menuTriggerProps: c, menuProps: p } = Zf({
    type: "listbox",
    isDisabled: s || u
  }, t, n);
  li.set(t, {
    id: p.id
  });
  let f = K(() => l || new Cn(t.collection, t.disabledKeys, i), [
    l,
    t.collection,
    t.disabledKeys,
    i
  ]), { collectionProps: b } = ii({
    selectionManager: t.selectionManager,
    keyboardDelegate: f,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: o,
    ref: a,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), m = Tr(), h = (O) => {
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
  }, { isInvalid: x, validationErrors: C, validationDetails: P } = t.displayValidation, { labelProps: B, inputProps: M, descriptionProps: v, errorMessageProps: R } = oi({
    ...e,
    onChange: t.setInputValue,
    onKeyDown: u ? e.onKeyDown : gt(t.isOpen && b.onKeyDown, h, e.onKeyDown),
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
  }, S = Lt({
    id: c.id,
    "aria-label": d.format("buttonLabel"),
    "aria-labelledby": e["aria-labelledby"] || B.id
  }), w = Lt({
    id: p.id,
    "aria-label": d.format("listboxLabel"),
    "aria-labelledby": e["aria-labelledby"] || B.id
  }), k = I(0), z = (O) => {
    if (s || u)
      return;
    if (O.timeStamp - k.current < 500) {
      O.preventDefault(), a.current.focus();
      return;
    }
    let X = O.target.getBoundingClientRect(), ce = O.changedTouches[0], xe = Math.ceil(X.left + 0.5 * X.width), ae = Math.ceil(X.top + 0.5 * X.height);
    ce.clientX === xe && ce.clientY === ae && (O.preventDefault(), a.current.focus(), t.toggle(null, "manual"), k.current = O.timeStamp);
  }, T = t.selectionManager.focusedKey != null && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0;
  var D;
  let H = (D = T == null ? void 0 : T.parentKey) !== null && D !== void 0 ? D : null;
  var _;
  let L = (_ = t.selectionManager.focusedKey) !== null && _ !== void 0 ? _ : null, V = I(H), N = I(L);
  J(() => {
    if (ma() && T != null && L !== N.current) {
      let O = t.selectionManager.isSelected(L), X = H != null ? t.collection.getItem(H) : null, ce = (X == null ? void 0 : X["aria-label"]) || (typeof (X == null ? void 0 : X.rendered) == "string" ? X.rendered : "") || "", xe = d.format("focusAnnouncement", {
        isGroupChange: X && H !== V.current,
        groupTitle: ce,
        groupCount: X ? [
          ...we(X, t.collection)
        ].length : 0,
        optionText: T["aria-label"] || T.textValue || "",
        isSelected: O
      });
      en(xe);
    }
    V.current = H, N.current = L;
  });
  let G = yo(t.collection), re = I(G), se = I(t.isOpen);
  J(() => {
    let O = t.isOpen !== se.current && (t.selectionManager.focusedKey == null || ma());
    if (t.isOpen && (O || G !== re.current)) {
      let X = d.format("countAnnouncement", {
        optionCount: G
      });
      en(X);
    }
    re.current = G, se.current = t.isOpen;
  });
  let Pe = I(t.selectedKey);
  return J(() => {
    if (ma() && t.isFocused && t.selectedItem && t.selectedKey !== Pe.current) {
      let O = t.selectedItem["aria-label"] || t.selectedItem.textValue || "", X = d.format("selectedAnnouncement", {
        optionText: O
      });
      en(X);
    }
    Pe.current = t.selectedKey;
  }), J(() => {
    if (t.isOpen)
      return vo([
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
    inputProps: j(M, {
      role: "combobox",
      "aria-expanded": c["aria-expanded"],
      "aria-controls": t.isOpen ? p.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": T ? ff(t, T.key) : void 0,
      onTouchEnd: z,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: j(p, w, {
      autoFocus: t.focusStrategy,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: v,
    errorMessageProps: R,
    isInvalid: x,
    validationErrors: C,
    validationDetails: P
  };
}
function zy(e) {
  return e && e.__esModule ? e.default : e;
}
var T4 = {}, M4 = {};
M4 = {
  Empty: "فارغ"
};
var R4 = {};
R4 = {
  Empty: "Изпразни"
};
var I4 = {};
I4 = {
  Empty: "Prázdné"
};
var N4 = {};
N4 = {
  Empty: "Tom"
};
var K4 = {};
K4 = {
  Empty: "Leer"
};
var z4 = {};
z4 = {
  Empty: "Άδειο"
};
var V4 = {};
V4 = {
  Empty: "Empty"
};
var L4 = {};
L4 = {
  Empty: "Vacío"
};
var O4 = {};
O4 = {
  Empty: "Tühjenda"
};
var j4 = {};
j4 = {
  Empty: "Tyhjä"
};
var H4 = {};
H4 = {
  Empty: "Vide"
};
var _4 = {};
_4 = {
  Empty: "ריק"
};
var U4 = {};
U4 = {
  Empty: "Prazno"
};
var W4 = {};
W4 = {
  Empty: "Üres"
};
var G4 = {};
G4 = {
  Empty: "Vuoto"
};
var Z4 = {};
Z4 = {
  Empty: "空"
};
var q4 = {};
q4 = {
  Empty: "비어 있음"
};
var Y4 = {};
Y4 = {
  Empty: "Tuščias"
};
var J4 = {};
J4 = {
  Empty: "Tukšs"
};
var X4 = {};
X4 = {
  Empty: "Tom"
};
var Q4 = {};
Q4 = {
  Empty: "Leeg"
};
var e0 = {};
e0 = {
  Empty: "Pusty"
};
var t0 = {};
t0 = {
  Empty: "Vazio"
};
var n0 = {};
n0 = {
  Empty: "Vazio"
};
var r0 = {};
r0 = {
  Empty: "Gol"
};
var a0 = {};
a0 = {
  Empty: "Не заполнено"
};
var i0 = {};
i0 = {
  Empty: "Prázdne"
};
var l0 = {};
l0 = {
  Empty: "Prazen"
};
var o0 = {};
o0 = {
  Empty: "Prazno"
};
var u0 = {};
u0 = {
  Empty: "Tomt"
};
var s0 = {};
s0 = {
  Empty: "Boş"
};
var d0 = {};
d0 = {
  Empty: "Пусто"
};
var c0 = {};
c0 = {
  Empty: "空"
};
var f0 = {};
f0 = {
  Empty: "空白"
};
T4 = {
  "ar-AE": M4,
  "bg-BG": R4,
  "cs-CZ": I4,
  "da-DK": N4,
  "de-DE": K4,
  "el-GR": z4,
  "en-US": V4,
  "es-ES": L4,
  "et-EE": O4,
  "fi-FI": j4,
  "fr-FR": H4,
  "he-IL": _4,
  "hr-HR": U4,
  "hu-HU": W4,
  "it-IT": G4,
  "ja-JP": Z4,
  "ko-KR": q4,
  "lt-LT": Y4,
  "lv-LV": J4,
  "nb-NO": X4,
  "nl-NL": Q4,
  "pl-PL": e0,
  "pt-BR": t0,
  "pt-PT": n0,
  "ro-RO": r0,
  "ru-RU": a0,
  "sk-SK": i0,
  "sl-SI": l0,
  "sr-SP": o0,
  "sv-SE": u0,
  "tr-TR": s0,
  "uk-UA": d0,
  "zh-CN": c0,
  "zh-TW": f0
};
function p0(e) {
  const t = I();
  let { value: n, textValue: r, minValue: a, maxValue: i, isDisabled: l, isReadOnly: o, isRequired: u, onIncrement: s, onIncrementPage: d, onDecrement: c, onDecrementPage: p, onDecrementToMin: f, onIncrementToMax: b } = e;
  const m = Ee(/* @__PURE__ */ zy(T4), "@react-aria/spinbutton"), h = () => clearTimeout(t.current);
  J(() => () => h(), []);
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
          if (p) {
            E.preventDefault(), p == null || p();
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
          b && (E.preventDefault(), b == null || b());
          break;
      }
  }, $ = I(!1), x = () => {
    $.current = !0;
  }, C = () => {
    $.current = !1;
  }, P = r === "" ? m.format("Empty") : (r || `${n}`).replace("-", "−");
  J(() => {
    $.current && (z1("assertive"), en(P, "assertive"));
  }, [
    P
  ]);
  const B = $e((E) => {
    h(), s == null || s(), t.current = window.setTimeout(() => {
      (i === void 0 || isNaN(i) || n === void 0 || isNaN(n) || n < i) && B(60);
    }, E);
  }), M = $e((E) => {
    h(), c == null || c(), t.current = window.setTimeout(() => {
      (a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n > a) && M(60);
    }, E);
  });
  let v = (E) => {
    E.preventDefault();
  }, { addGlobalListener: R, removeAllGlobalListeners: F } = Gn();
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
        B(400), R(window, "contextmenu", v);
      },
      onPressEnd: () => {
        h(), F();
      },
      onFocus: x,
      onBlur: C
    },
    decrementButtonProps: {
      onPressStart: () => {
        M(400), R(window, "contextmenu", v);
      },
      onPressEnd: () => {
        h(), F();
      },
      onFocus: x,
      onBlur: C
    }
  };
}
function ui(e) {
  return e && e.__esModule ? e.default : e;
}
var Hr = {}, b0 = {};
b0 = {
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
var m0 = {};
m0 = {
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
var h0 = {};
h0 = {
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
var v0 = {};
v0 = {
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
var g0 = {};
g0 = {
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
var $0 = {};
$0 = {
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
var y0 = {};
y0 = {
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
var x0 = {};
x0 = {
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
var D0 = {};
D0 = {
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
var C0 = {};
C0 = {
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
var E0 = {};
E0 = {
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
var P0 = {};
P0 = {
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
var w0 = {};
w0 = {
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
var S0 = {};
S0 = {
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
var B0 = {};
B0 = {
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
var k0 = {};
k0 = {
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
var F0 = {};
F0 = {
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
var A0 = {};
A0 = {
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
var T0 = {};
T0 = {
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
var M0 = {};
M0 = {
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
var R0 = {};
R0 = {
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
var I0 = {};
I0 = {
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
var N0 = {};
N0 = {
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
var K0 = {};
K0 = {
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
var z0 = {};
z0 = {
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
var V0 = {};
V0 = {
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
var L0 = {};
L0 = {
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
var O0 = {};
O0 = {
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
var j0 = {};
j0 = {
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
var H0 = {};
H0 = {
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
var _0 = {};
_0 = {
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
var U0 = {};
U0 = {
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
var W0 = {};
W0 = {
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
var G0 = {};
G0 = {
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
Hr = {
  "ar-AE": b0,
  "bg-BG": m0,
  "cs-CZ": h0,
  "da-DK": v0,
  "de-DE": g0,
  "el-GR": $0,
  "en-US": y0,
  "es-ES": x0,
  "et-EE": D0,
  "fi-FI": C0,
  "fr-FR": E0,
  "he-IL": P0,
  "hr-HR": w0,
  "hu-HU": S0,
  "it-IT": B0,
  "ja-JP": k0,
  "ko-KR": F0,
  "lt-LT": A0,
  "lv-LV": T0,
  "nb-NO": M0,
  "nl-NL": R0,
  "pl-PL": I0,
  "pt-BR": N0,
  "pt-PT": K0,
  "ro-RO": z0,
  "ru-RU": V0,
  "sk-SK": L0,
  "sl-SI": O0,
  "sr-SP": j0,
  "sv-SE": H0,
  "tr-TR": _0,
  "uk-UA": U0,
  "zh-CN": W0,
  "zh-TW": G0
};
function xo(e, t, n) {
  let { direction: r } = oe(), a = K(() => Kr(t), [
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
  }, { pressProps: o } = Xe({
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
const Z0 = /* @__PURE__ */ new WeakMap(), mr = "__role_" + Date.now(), q0 = "__focusManager_" + Date.now();
function Do(e, t, n) {
  var r;
  let { isInvalid: a, validationErrors: i, validationDetails: l } = t.displayValidation, { labelProps: o, fieldProps: u, descriptionProps: s, errorMessageProps: d } = rn({
    ...e,
    labelElementType: "span",
    isInvalid: a,
    errorMessage: e.errorMessage || i
  }), c = I(null), { focusWithinProps: p } = yt({
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
  }), f = Ee(/* @__PURE__ */ ui(Hr), "@react-aria/datepicker"), b = t.maxGranularity === "hour" ? "selectedTimeDescription" : "selectedDateDescription", m = t.maxGranularity === "hour" ? "time" : "date", h = t.value ? f.format(b, {
    [m]: t.formatValue({
      month: "long"
    })
  }) : "", y = St(h), $ = e[mr] === "presentation" ? u["aria-describedby"] : [
    y["aria-describedby"],
    u["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, x = e[q0], C = K(() => x || Kr(n), [
    x,
    n
  ]), P = xo(t, n, e[mr] === "presentation");
  Z0.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [
      o.id,
      e["aria-labelledby"]
    ].filter(Boolean).join(" ") || void 0,
    ariaDescribedBy: $,
    focusManager: C
  });
  let B = I(e.autoFocus), M;
  e[mr] === "presentation" ? M = {
    role: "presentation"
  } : M = j(u, {
    role: "group",
    "aria-disabled": e.isDisabled || void 0,
    "aria-describedby": $
  }), J(() => {
    B.current && C.focusFirst(), B.current = !1;
  }, [
    C
  ]), yn(e.inputRef, t.value, t.setValue), Or({
    ...e,
    focus() {
      C.focusFirst();
    }
  }, t, e.inputRef);
  let v = {
    type: "hidden",
    name: e.name,
    value: ((r = t.value) === null || r === void 0 ? void 0 : r.toString()) || ""
  };
  e.validationBehavior === "native" && (v.type = "text", v.hidden = !0, v.required = e.isRequired, v.onChange = () => {
  });
  let R = Y(e);
  return {
    labelProps: {
      ...o,
      onClick: () => {
        C.focusFirst();
      }
    },
    fieldProps: j(R, M, P, p, {
      onKeyDown(F) {
        e.onKeyDown && e.onKeyDown(F);
      },
      onKeyUp(F) {
        e.onKeyUp && e.onKeyUp(F);
      }
    }),
    inputProps: v,
    descriptionProps: s,
    errorMessageProps: d,
    isInvalid: a,
    validationErrors: i,
    validationDetails: l
  };
}
function Vy(e, t, n) {
  var r;
  let a = Do(e, t, n);
  return a.inputProps.value = ((r = t.timeValue) === null || r === void 0 ? void 0 : r.toString()) || "", a;
}
function Ly(e, t, n) {
  let r = pe(), a = pe(), i = pe(), l = Ee(/* @__PURE__ */ ui(Hr), "@react-aria/datepicker"), { isInvalid: o, validationErrors: u, validationDetails: s } = t.displayValidation, { labelProps: d, fieldProps: c, descriptionProps: p, errorMessageProps: f } = rn({
    ...e,
    labelElementType: "span",
    isInvalid: o,
    errorMessage: e.errorMessage || u
  }), b = xo(t, n), m = c["aria-labelledby"] || c.id, { locale: h } = oe(), y = t.formatValue(h, {
    month: "long"
  }), $ = y ? l.format("selectedDateDescription", {
    date: y
  }) : "", x = St($), C = [
    x["aria-describedby"],
    c["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, P = Y(e), B = K(() => Kr(n), [
    n
  ]), { focusWithinProps: M } = yt({
    ...e,
    isDisabled: t.isOpen,
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  });
  return {
    groupProps: j(P, b, c, x, M, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-labelledby": m,
      "aria-describedby": C,
      onKeyDown(v) {
        t.isOpen || e.onKeyDown && e.onKeyDown(v);
      },
      onKeyUp(v) {
        t.isOpen || e.onKeyUp && e.onKeyUp(v);
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
      [mr]: "presentation",
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
    descriptionProps: p,
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
function Oy() {
  let { locale: e } = oe(), t = Ad(/* @__PURE__ */ ui(Hr), "@react-aria/datepicker");
  return K(() => {
    try {
      return new Intl.DisplayNames(e, {
        type: "dateTimeField"
      });
    } catch {
      return new jy(e, t);
    }
  }, [
    e,
    t
  ]);
}
class jy {
  of(t) {
    return this.dictionary.getStringForLocale(t, this.locale);
  }
  constructor(t, n) {
    this.locale = t, this.dictionary = n;
  }
}
function Hy(e, t, n) {
  let r = I(""), { locale: a } = oe(), i = Oy(), { ariaLabel: l, ariaLabelledBy: o, ariaDescribedBy: u, focusManager: s } = Z0.get(t), d = e.isPlaceholder ? "" : e.text, c = K(() => t.dateFormatter.resolvedOptions(), [
    t.dateFormatter
  ]), p = Et({
    month: "long",
    timeZone: c.timeZone
  }), f = Et({
    hour: "numeric",
    hour12: c.hour12,
    timeZone: c.timeZone
  });
  if (e.type === "month" && !e.isPlaceholder) {
    let D = p.format(t.dateValue);
    d = D !== d ? `${d} – ${D}` : D;
  } else
    e.type === "hour" && !e.isPlaceholder && (d = f.format(t.dateValue));
  let { spinButtonProps: b } = p0({
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
  }), m = K(() => new mo(a, {
    maximumFractionDigits: 0
  }), [
    a
  ]), h = () => {
    if (m.isValidPartialNumber(e.text) && !t.isReadOnly && !e.isPlaceholder) {
      let D = e.text.slice(0, -1), H = m.parse(D);
      D.length === 0 || H === 0 ? t.clearSegment(e.type) : t.setSegment(e.type, H), r.current = D;
    } else
      e.type === "dayPeriod" && t.clearSegment(e.type);
  }, y = (D) => {
    if (D.key === "a" && (Vt() ? D.metaKey : D.ctrlKey) && D.preventDefault(), !(D.ctrlKey || D.metaKey || D.shiftKey || D.altKey))
      switch (D.key) {
        case "Backspace":
        case "Delete":
          D.preventDefault(), D.stopPropagation(), h();
          break;
      }
  }, { startsWith: $ } = Td({
    sensitivity: "base"
  }), x = Et({
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
  ]), B = Et({
    year: "numeric",
    era: "narrow",
    timeZone: "UTC"
  }), M = K(() => {
    if (e.type !== "era")
      return [];
    let D = Ce(new Ae(1, 1, 1), t.calendar), H = t.calendar.getEras().map((L) => {
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
    }), _ = _y(H.map((L) => L.formatted));
    if (_)
      for (let L of H)
        L.formatted = L.formatted.slice(_);
    return H;
  }, [
    B,
    t.calendar,
    e.type
  ]), v = (D) => {
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
        let _ = M.find((L) => $(L.formatted, D));
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
  }, R = () => {
    r.current = "", je(n.current, {
      containingElement: ze(n.current)
    }), window.getSelection().collapse(n.current);
  }, F = I("");
  Jt(n, "beforeinput", (D) => {
    switch (D.preventDefault(), D.inputType) {
      case "deleteContentBackward":
      case "deleteContentForward":
        m.isValidPartialNumber(e.text) && !t.isReadOnly && h();
        break;
      case "insertCompositionText":
        F.current = n.current.textContent, n.current.textContent = n.current.textContent;
        break;
      default:
        D.data != null && v(D.data);
        break;
    }
  }), Jt(n, "input", (D) => {
    let { inputType: H, data: _ } = D;
    switch (H) {
      case "insertCompositionText":
        n.current.textContent = F.current, ($(C, _) || $(P, _)) && v(_);
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
  let E = Wn() || e.type === "timeZoneName" ? {
    role: "textbox",
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuetext": null,
    "aria-valuenow": null
  } : {}, S = K(() => t.segments.find((D) => D.isEditable), [
    t.segments
  ]);
  e !== S && !t.isInvalid && (u = void 0);
  let w = pe(), k = !t.isDisabled && !t.isReadOnly && e.isEditable, z = e.type === "literal" ? "" : i.of(e.type), T = Lt({
    "aria-label": `${z}${l ? `, ${l}` : ""}${o ? ", " : ""}`,
    "aria-labelledby": o
  });
  return e.type === "literal" ? {
    segmentProps: {
      "aria-hidden": !0
    }
  } : {
    segmentProps: j(b, T, {
      id: w,
      ...E,
      "aria-invalid": t.isInvalid ? "true" : void 0,
      "aria-describedby": u,
      "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
      "data-placeholder": e.isPlaceholder || void 0,
      contentEditable: k,
      suppressContentEditableWarning: k,
      spellCheck: k ? "false" : void 0,
      autoCapitalize: k ? "off" : void 0,
      autoCorrect: k ? "off" : void 0,
      // Capitalization was changed in React 17...
      [parseInt(g.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: k ? "next" : void 0,
      inputMode: t.isDisabled || e.type === "dayPeriod" || e.type === "era" || !k ? void 0 : "numeric",
      tabIndex: t.isDisabled ? void 0 : 0,
      onKeyDown: y,
      onFocus: R,
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
function _y(e) {
  e.sort();
  let t = e[0], n = e[e.length - 1];
  for (let r = 0; r < t.length; r++)
    if (t[r] !== n[r])
      return r;
  return 0;
}
function Uy(e, t, n) {
  var r, a;
  let i = Ee(/* @__PURE__ */ ui(Hr), "@react-aria/datepicker"), { isInvalid: l, validationErrors: o, validationDetails: u } = t.displayValidation, { labelProps: s, fieldProps: d, descriptionProps: c, errorMessageProps: p } = rn({
    ...e,
    labelElementType: "span",
    isInvalid: l,
    errorMessage: e.errorMessage || o
  }), f = d["aria-labelledby"] || d.id, { locale: b } = oe(), m = t.formatValue(b, {
    month: "long"
  }), h = m ? i.format("selectedRangeDescription", {
    startDate: m.start,
    endDate: m.end
  }) : "", y = St(h), $ = {
    "aria-label": i.format("startDate"),
    "aria-labelledby": f
  }, x = {
    "aria-label": i.format("endDate"),
    "aria-labelledby": f
  }, C = pe(), P = pe(), B = xo(t, n), M = [
    y["aria-describedby"],
    d["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, v = K(() => Kr(n, {
    // Exclude the button from the focus manager.
    accept: (k) => k.id !== C
  }), [
    n,
    C
  ]), R = {
    [q0]: v,
    [mr]: "presentation",
    "aria-describedby": M,
    placeholderValue: e.placeholderValue,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    granularity: e.granularity,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    isRequired: e.isRequired,
    validationBehavior: e.validationBehavior
  }, F = Y(e), { focusWithinProps: E } = yt({
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
      "aria-describedby": M,
      onKeyDown(k) {
        t.isOpen || e.onKeyDown && e.onKeyDown(k);
      },
      onKeyUp(k) {
        t.isOpen || e.onKeyUp && e.onKeyUp(k);
      }
    }),
    labelProps: {
      ...s,
      onClick: () => {
        v.focusFirst();
      }
    },
    buttonProps: {
      ...y,
      id: C,
      "aria-haspopup": "dialog",
      "aria-label": i.format("calendar"),
      "aria-labelledby": `${C} ${f}`,
      "aria-describedby": M,
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
      ...R,
      value: (r = t.value) === null || r === void 0 ? void 0 : r.start,
      onChange: (k) => t.setDateTime("start", k),
      autoFocus: e.autoFocus,
      name: e.startName,
      [tn]: {
        realtimeValidation: t.realtimeValidation,
        displayValidation: t.displayValidation,
        updateValidation(k) {
          S.current = k, t.updateValidation(Dr(k, w.current));
        },
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation
      }
    },
    endFieldProps: {
      ...x,
      ...R,
      value: (a = t.value) === null || a === void 0 ? void 0 : a.end,
      onChange: (k) => t.setDateTime("end", k),
      name: e.endName,
      [tn]: {
        realtimeValidation: t.realtimeValidation,
        displayValidation: t.displayValidation,
        updateValidation(k) {
          w.current = k, t.updateValidation(Dr(S.current, k));
        },
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation
      }
    },
    descriptionProps: c,
    errorMessageProps: p,
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
function Wy(e, t) {
  let { role: n = "dialog" } = e, r = Pt();
  r = e["aria-label"] ? void 0 : r;
  let a = I(!1);
  return J(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      De(t.current);
      let i = setTimeout(() => {
        document.activeElement === t.current && (a.current = !0, t.current && (t.current.blur(), De(t.current)), a.current = !1);
      }, 500);
      return () => {
        clearTimeout(i);
      };
    }
  }, [
    t
  ]), df(), {
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
class Kn {
  /**
  * Returns a copy of this point.
  */
  copy() {
    return new Kn(this.x, this.y);
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
class zn {
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
    return new Kn(this.x, this.y);
  }
  /**
  * The top right corner of the rectangle.
  */
  get topRight() {
    return new Kn(this.maxX, this.y);
  }
  /**
  * The bottom left corner of the rectangle.
  */
  get bottomLeft() {
    return new Kn(this.x, this.maxY);
  }
  /**
  * The bottom right corner of the rectangle.
  */
  get bottomRight() {
    return new Kn(this.maxX, this.maxY);
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
    return new zn(n, r, a, i);
  }
  /**
  * Returns the intersection of this Rect with another.
  * If the rectangles do not intersect, an all zero Rect is returned.
  */
  intersection(t) {
    if (!this.intersects(t))
      return new zn(0, 0, 0, 0);
    let n = Math.max(this.x, t.x), r = Math.max(this.y, t.y);
    return new zn(n, r, Math.min(this.maxX, t.maxX) - n, Math.min(this.maxY, t.maxY) - r);
  }
  /**
  * Returns a copy of this rectangle.
  */
  copy() {
    return new zn(this.x, this.y, this.width, this.height);
  }
  constructor(t = 0, n = 0, r = 0, a = 0) {
    this.x = t, this.y = n, this.width = r, this.height = a;
  }
}
let Mn = typeof window < "u" ? window.performance : null, ls = Mn && (Mn.now || Mn.webkitNow || Mn.msNow || Mn.mozNow);
ls && ls.bind(Mn);
function Co(e) {
  return e && e.__esModule ? e.default : e;
}
class Y0 {
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
        return qt(we(r, this.collection), n.index).key;
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
        return qt(we(r, this.collection), n.index).key;
      }
      if (this.focusMode === "row")
        return t;
    }
  }
  getKeyRightOf(t) {
    let n = this.collection.getItem(t);
    if (n) {
      if (this.isRow(n)) {
        let r = we(n, this.collection);
        return this.direction === "rtl" ? Qt(r).key : Rt(r).key;
      }
      if (this.isCell(n)) {
        let r = this.collection.getItem(n.parentKey), a = we(r, this.collection), i = this.direction === "rtl" ? qt(a, n.index - 1) : qt(a, n.index + 1);
        return i ? i.key : this.focusMode === "row" ? n.parentKey : this.direction === "rtl" ? this.getFirstKey(t) : this.getLastKey(t);
      }
    }
  }
  getKeyLeftOf(t) {
    let n = this.collection.getItem(t);
    if (n) {
      if (this.isRow(n)) {
        let r = we(n, this.collection);
        return this.direction === "rtl" ? Rt(r).key : Qt(r).key;
      }
      if (this.isCell(n)) {
        let r = this.collection.getItem(n.parentKey), a = we(r, this.collection), i = this.direction === "rtl" ? qt(a, n.index + 1) : qt(a, n.index - 1);
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
        return Rt(we(a, this.collection)).key;
      }
    }
    if (t = this.findNextKey(), t != null && r && this.isCell(r) && n || this.focusMode === "cell") {
      let a = this.collection.getItem(t);
      t = Rt(we(a, this.collection)).key;
    }
    return t;
  }
  getLastKey(t, n) {
    let r;
    if (t != null) {
      if (r = this.collection.getItem(t), !r)
        return;
      if (this.isCell(r) && !n) {
        let a = this.collection.getItem(r.parentKey), i = we(a, this.collection);
        return Qt(i).key;
      }
    }
    if (t = this.findPreviousKey(), t != null && r && this.isCell(r) && n || this.focusMode === "cell") {
      let a = this.collection.getItem(t), i = we(a, this.collection);
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
      return new zn(r.offsetLeft, r.offsetTop, r.offsetWidth, r.offsetHeight);
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
          return this.isRow(o) && this.focusMode === "cell" ? Rt(we(o, this.collection)).key : o.key;
      }
      a = this.findNextKey(a), a == null && !l && (a = this.getFirstKey(), l = !0);
    }
    return null;
  }
  constructor(t) {
    this.collection = t.collection, this.disabledKeys = t.disabledKeys, this.ref = t.ref, this.direction = t.direction, this.collator = t.collator, this.layout = t.layout, this.focusMode = t.focusMode || "row";
  }
}
const Eo = /* @__PURE__ */ new WeakMap();
var si = {}, J0 = {};
J0 = {
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
var X0 = {};
X0 = {
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
var Q0 = {};
Q0 = {
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
var ep = {};
ep = {
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
var tp = {};
tp = {
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
var np = {};
np = {
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
var rp = {};
rp = {
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
var ap = {};
ap = {
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
var ip = {};
ip = {
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
var lp = {};
lp = {
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
var op = {};
op = {
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
var up = {};
up = {
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
var sp = {};
sp = {
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
var dp = {};
dp = {
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
var cp = {};
cp = {
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
var fp = {};
fp = {
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
var pp = {};
pp = {
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
var bp = {};
bp = {
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
var mp = {};
mp = {
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
var hp = {};
hp = {
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
var vp = {};
vp = {
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
var gp = {};
gp = {
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
var $p = {};
$p = {
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
var yp = {};
yp = {
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
var xp = {};
xp = {
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
var Dp = {};
Dp = {
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
var Cp = {};
Cp = {
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
var Ep = {};
Ep = {
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
var Pp = {};
Pp = {
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
var wp = {};
wp = {
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
var Sp = {};
Sp = {
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
var Bp = {};
Bp = {
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
var kp = {};
kp = {
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
var Fp = {};
Fp = {
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
si = {
  "ar-AE": J0,
  "bg-BG": X0,
  "cs-CZ": Q0,
  "da-DK": ep,
  "de-DE": tp,
  "el-GR": np,
  "en-US": rp,
  "es-ES": ap,
  "et-EE": ip,
  "fi-FI": lp,
  "fr-FR": op,
  "he-IL": up,
  "hr-HR": sp,
  "hu-HU": dp,
  "it-IT": cp,
  "ja-JP": fp,
  "ko-KR": pp,
  "lt-LT": bp,
  "lv-LV": mp,
  "nb-NO": hp,
  "nl-NL": vp,
  "pl-PL": gp,
  "pt-BR": $p,
  "pt-PT": yp,
  "ro-RO": xp,
  "ru-RU": Dp,
  "sk-SK": Cp,
  "sl-SI": Ep,
  "sr-SP": Pp,
  "sv-SE": wp,
  "tr-TR": Sp,
  "uk-UA": Bp,
  "zh-CN": kp,
  "zh-TW": Fp
};
function Ap(e, t) {
  let { getRowText: n = (l) => {
    var o, u, s, d;
    return (d = (o = (u = t.collection).getTextValue) === null || o === void 0 ? void 0 : o.call(u, l)) !== null && d !== void 0 ? d : (s = t.collection.getItem(l)) === null || s === void 0 ? void 0 : s.textValue;
  } } = e, r = Ee(/* @__PURE__ */ Co(si), "@react-aria/grid"), a = t.selectionManager.rawSelection, i = I(a);
  Ca(() => {
    var l;
    if (!t.selectionManager.isFocused) {
      i.current = a;
      return;
    }
    let o = os(a, i.current), u = os(i.current, a), s = t.selectionManager.selectionBehavior === "replace", d = [];
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
function os(e, t) {
  let n = /* @__PURE__ */ new Set();
  if (e === "all" || t === "all")
    return n;
  for (let r of e.keys())
    t.has(r) || n.add(r);
  return n;
}
function Tp(e) {
  let t = Ee(/* @__PURE__ */ Co(si), "@react-aria/grid"), n = Ir(), r = (n === "pointer" || n === "virtual" || n == null) && typeof window < "u" && "ontouchstart" in window, a = K(() => {
    let l = e.selectionManager.selectionMode, o = e.selectionManager.selectionBehavior, u;
    return r && (u = t.format("longPressToSelect")), o === "replace" && l !== "none" && e.hasItemActions ? u : void 0;
  }, [
    e.selectionManager.selectionMode,
    e.selectionManager.selectionBehavior,
    e.hasItemActions,
    t,
    r
  ]);
  return St(a);
}
function Gy(e, t, n) {
  let { isVirtualized: r, keyboardDelegate: a, focusMode: i, scrollRef: l, getRowText: o, onRowAction: u, onCellAction: s } = e, { selectionManager: d } = t;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let c = Zn({
    usage: "search",
    sensitivity: "base"
  }), { direction: p } = oe(), f = t.selectionManager.disabledBehavior, b = K(() => a || new Y0({
    collection: t.collection,
    disabledKeys: f === "selection" ? /* @__PURE__ */ new Set() : t.disabledKeys,
    ref: n,
    direction: p,
    collator: c,
    focusMode: i
  }), [
    a,
    t.collection,
    t.disabledKeys,
    f,
    n,
    p,
    c,
    i
  ]), { collectionProps: m } = ii({
    ref: n,
    selectionManager: d,
    keyboardDelegate: b,
    isVirtualized: r,
    scrollRef: l
  }), h = pe(e.id);
  Eo.set(t, {
    keyboardDelegate: b,
    actions: {
      onRowAction: u,
      onCellAction: s
    }
  });
  let y = Tp({
    selectionManager: d,
    hasItemActions: !!(u || s)
  }), $ = Y(e, {
    labelable: !0
  }), x = Q((M) => {
    if (d.isFocused) {
      M.currentTarget.contains(M.target) || d.setFocused(!1);
      return;
    }
    M.currentTarget.contains(M.target) && d.setFocused(!0);
  }, [
    d
  ]), C = K(() => ({
    onBlur: m.onBlur,
    onFocus: x
  }), [
    x,
    m.onBlur
  ]), P = to(n, {
    isDisabled: t.collection.size !== 0
  }), B = j(
    $,
    {
      role: "grid",
      id: h,
      "aria-multiselectable": d.selectionMode === "multiple" ? "true" : void 0
    },
    t.isKeyboardNavigationDisabled ? C : m,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    t.collection.size === 0 && {
      tabIndex: P ? -1 : 0
    },
    y
  );
  return r && (B["aria-rowcount"] = t.collection.size, B["aria-colcount"] = t.collection.columnCount), Ap({
    getRowText: o
  }, t), {
    gridProps: B
  };
}
function Zy() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function qy(e, t, n) {
  let { node: r, isVirtualized: a, shouldSelectOnPressUp: i, onAction: l } = e, { actions: { onRowAction: o } } = Eo.get(t), { itemProps: u, ...s } = qn({
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
function Mp(e, t, n) {
  let { node: r, isVirtualized: a, focusMode: i = "child", shouldSelectOnPressUp: l, onAction: o } = e, { direction: u } = oe(), { keyboardDelegate: s, actions: { onCellAction: d } } = Eo.get(t), c = I(null), p = () => {
    let x = Ne(n.current);
    if (i === "child") {
      if (n.current.contains(document.activeElement) && n.current !== document.activeElement)
        return;
      let C = t.selectionManager.childFocusStrategy === "last" ? Yi(x) : x.firstChild();
      if (C) {
        De(C);
        return;
      }
    }
    (c.current != null && r.key !== c.current || !n.current.contains(document.activeElement)) && De(n.current);
  }, { itemProps: f, isPressed: b } = qn({
    selectionManager: t.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: a,
    focus: p,
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
            x.preventDefault(), x.stopPropagation(), De(P), je(P, {
              containingElement: ze(n.current)
            });
          else {
            if (s.getKeyLeftOf(r.key) !== r.key)
              break;
            x.preventDefault(), x.stopPropagation(), i === "cell" && u === "rtl" ? (De(n.current), je(n.current, {
              containingElement: ze(n.current)
            })) : (C.currentNode = n.current, P = u === "rtl" ? C.firstChild() : Yi(C), P && (De(P), je(P, {
              containingElement: ze(n.current)
            })));
          }
          break;
        }
        case "ArrowRight": {
          let P = u === "rtl" ? C.previousNode() : C.nextNode();
          if (i === "child" && P === n.current && (P = null), P)
            x.preventDefault(), x.stopPropagation(), De(P), je(P, {
              containingElement: ze(n.current)
            });
          else {
            if (s.getKeyRightOf(r.key) !== r.key)
              break;
            x.preventDefault(), x.stopPropagation(), i === "cell" && u === "ltr" ? (De(n.current), je(n.current, {
              containingElement: ze(n.current)
            })) : (C.currentNode = n.current, P = u === "rtl" ? Yi(C) : C.firstChild(), P && (De(P), je(P, {
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
        vn() || t.selectionManager.setFocusedKey(r.key);
        return;
      }
      requestAnimationFrame(() => {
        i === "child" && document.activeElement === n.current && p();
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
    isPressed: b
  };
}
function Yi(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
function Rp(e, t) {
  let { key: n } = e, r = t.selectionManager, a = pe(), i = !t.selectionManager.canSelectItem(n), l = t.selectionManager.isSelected(n), o = () => r.select(n);
  const u = Ee(/* @__PURE__ */ Co(si), "@react-aria/grid");
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
const Po = /* @__PURE__ */ new WeakMap();
function Sl(e, t) {
  let { id: n } = Po.get(e);
  if (!n)
    throw new Error("Unknown list");
  return `${n}-${Yy(t)}`;
}
function Yy(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Ip(e, t, n) {
  let { isVirtualized: r, keyboardDelegate: a, onAction: i, linkBehavior: l = "action" } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let { listProps: o } = go({
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    ref: n,
    keyboardDelegate: a,
    isVirtualized: r,
    selectOnFocus: t.selectionManager.selectionBehavior === "replace",
    shouldFocusWrap: e.shouldFocusWrap,
    linkBehavior: l
  }), u = pe(e.id);
  Po.set(t, {
    id: u,
    onAction: i,
    linkBehavior: l
  });
  let s = Tp({
    selectionManager: t.selectionManager,
    hasItemActions: !!i
  }), d = to(n, {
    isDisabled: t.collection.size !== 0
  }), c = Y(e, {
    labelable: !0
  }), p = j(
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
  return r && (p["aria-rowcount"] = t.collection.size, p["aria-colcount"] = 1), Ap({}, t), {
    gridProps: p
  };
}
function Np(e, t, n) {
  let { node: r, isVirtualized: a, shouldSelectOnPressUp: i } = e, { direction: l } = oe(), { onAction: o, linkBehavior: u } = Po.get(t), s = Pt(), d = I(null), c = () => {
    (d.current != null && r.key !== d.current || !n.current.contains(document.activeElement)) && De(n.current);
  }, { itemProps: p, ...f } = qn({
    selectionManager: t.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: a,
    shouldSelectOnPressUp: i,
    onAction: o ? () => o(r.key) : void 0,
    focus: c,
    linkBehavior: u
  }), b = (x) => {
    if (!x.currentTarget.contains(x.target))
      return;
    let C = Ne(n.current);
    switch (C.currentNode = document.activeElement, x.key) {
      case "ArrowLeft": {
        let P = l === "rtl" ? C.nextNode() : C.previousNode();
        if (P)
          x.preventDefault(), x.stopPropagation(), De(P), je(P, {
            containingElement: ze(n.current)
          });
        else if (x.preventDefault(), x.stopPropagation(), l === "rtl")
          De(n.current), je(n.current, {
            containingElement: ze(n.current)
          });
        else {
          C.currentNode = n.current;
          let B = us(C);
          B && (De(B), je(B, {
            containingElement: ze(n.current)
          }));
        }
        break;
      }
      case "ArrowRight": {
        let P = l === "rtl" ? C.previousNode() : C.nextNode();
        if (P)
          x.preventDefault(), x.stopPropagation(), De(P), je(P, {
            containingElement: ze(n.current)
          });
        else if (x.preventDefault(), x.stopPropagation(), l === "ltr")
          De(n.current), je(n.current, {
            containingElement: ze(n.current)
          });
        else {
          C.currentNode = n.current;
          let B = us(C);
          B && (De(B), je(B, {
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
      vn() || t.selectionManager.setFocusedKey(r.key);
      return;
    }
  }, h = f.hasAction ? Zl(r.props) : {}, y = j(p, h, {
    role: "row",
    onKeyDownCapture: b,
    onFocus: m,
    "aria-label": r.textValue || void 0,
    "aria-selected": t.selectionManager.canSelectItem(r.key) ? t.selectionManager.isSelected(r.key) : void 0,
    "aria-disabled": t.selectionManager.isDisabled(r.key) || void 0,
    "aria-labelledby": s && r.textValue ? `${Sl(t, r.key)} ${s}` : void 0,
    id: Sl(t, r.key)
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
function us(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
function Jy(e, t) {
  let { key: n } = e;
  const { checkboxProps: r } = Rp(e, t);
  return {
    checkboxProps: {
      ...r,
      "aria-labelledby": `${r.id} ${Sl(t, n)}`
    }
  };
}
function Kp(e) {
  let { value: t = 0, minValue: n = 0, maxValue: r = 100, valueLabel: a, isIndeterminate: i, formatOptions: l = {
    style: "percent"
  } } = e, o = Y(e, {
    labelable: !0
  }), { labelProps: u, fieldProps: s } = jr({
    ...e,
    // Progress bar is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  t = st(t, n, r);
  let d = (t - n) / (r - n), c = La(l);
  if (!i && !a) {
    let p = l.style === "percent" ? d : t;
    a = c.format(p);
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
function Xy(e) {
  let { progressBarProps: t, labelProps: n } = Kp(e);
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
function Qy(e) {
  return e && e.__esModule ? e.default : e;
}
var zp = {}, Vp = {};
Vp = {
  decrease: (e) => `خفض ${e.fieldLabel}`,
  increase: (e) => `زيادة ${e.fieldLabel}`,
  numberField: "حقل رقمي"
};
var Lp = {};
Lp = {
  decrease: (e) => `Намаляване ${e.fieldLabel}`,
  increase: (e) => `Усилване ${e.fieldLabel}`,
  numberField: "Номер на полето"
};
var Op = {};
Op = {
  decrease: (e) => `Snížit ${e.fieldLabel}`,
  increase: (e) => `Zvýšit ${e.fieldLabel}`,
  numberField: "Číselné pole"
};
var jp = {};
jp = {
  decrease: (e) => `Reducer ${e.fieldLabel}`,
  increase: (e) => `Øg ${e.fieldLabel}`,
  numberField: "Talfelt"
};
var Hp = {};
Hp = {
  decrease: (e) => `${e.fieldLabel} verringern`,
  increase: (e) => `${e.fieldLabel} erhöhen`,
  numberField: "Nummernfeld"
};
var _p = {};
_p = {
  decrease: (e) => `Μείωση ${e.fieldLabel}`,
  increase: (e) => `Αύξηση ${e.fieldLabel}`,
  numberField: "Πεδίο αριθμού"
};
var Up = {};
Up = {
  decrease: (e) => `Decrease ${e.fieldLabel}`,
  increase: (e) => `Increase ${e.fieldLabel}`,
  numberField: "Number field"
};
var Wp = {};
Wp = {
  decrease: (e) => `Reducir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo de número"
};
var Gp = {};
Gp = {
  decrease: (e) => `Vähenda ${e.fieldLabel}`,
  increase: (e) => `Suurenda ${e.fieldLabel}`,
  numberField: "Numbri väli"
};
var Zp = {};
Zp = {
  decrease: (e) => `Vähennä ${e.fieldLabel}`,
  increase: (e) => `Lisää ${e.fieldLabel}`,
  numberField: "Numerokenttä"
};
var qp = {};
qp = {
  decrease: (e) => `Diminuer ${e.fieldLabel}`,
  increase: (e) => `Augmenter ${e.fieldLabel}`,
  numberField: "Champ de nombre"
};
var Yp = {};
Yp = {
  decrease: (e) => `הקטן ${e.fieldLabel}`,
  increase: (e) => `הגדל ${e.fieldLabel}`,
  numberField: "שדה מספר"
};
var Jp = {};
Jp = {
  decrease: (e) => `Smanji ${e.fieldLabel}`,
  increase: (e) => `Povećaj ${e.fieldLabel}`,
  numberField: "Polje broja"
};
var Xp = {};
Xp = {
  decrease: (e) => `${e.fieldLabel} csökkentése`,
  increase: (e) => `${e.fieldLabel} növelése`,
  numberField: "Számmező"
};
var Qp = {};
Qp = {
  decrease: (e) => `Riduci ${e.fieldLabel}`,
  increase: (e) => `Aumenta ${e.fieldLabel}`,
  numberField: "Campo numero"
};
var eb = {};
eb = {
  decrease: (e) => `${e.fieldLabel}を縮小`,
  increase: (e) => `${e.fieldLabel}を拡大`,
  numberField: "数値フィールド"
};
var tb = {};
tb = {
  decrease: (e) => `${e.fieldLabel} 감소`,
  increase: (e) => `${e.fieldLabel} 증가`,
  numberField: "번호 필드"
};
var nb = {};
nb = {
  decrease: (e) => `Sumažinti ${e.fieldLabel}`,
  increase: (e) => `Padidinti ${e.fieldLabel}`,
  numberField: "Numerio laukas"
};
var rb = {};
rb = {
  decrease: (e) => `Samazināšana ${e.fieldLabel}`,
  increase: (e) => `Palielināšana ${e.fieldLabel}`,
  numberField: "Skaitļu lauks"
};
var ab = {};
ab = {
  decrease: (e) => `Reduser ${e.fieldLabel}`,
  increase: (e) => `Øk ${e.fieldLabel}`,
  numberField: "Tallfelt"
};
var ib = {};
ib = {
  decrease: (e) => `${e.fieldLabel} verlagen`,
  increase: (e) => `${e.fieldLabel} verhogen`,
  numberField: "Getalveld"
};
var lb = {};
lb = {
  decrease: (e) => `Zmniejsz ${e.fieldLabel}`,
  increase: (e) => `Zwiększ ${e.fieldLabel}`,
  numberField: "Pole numeru"
};
var ob = {};
ob = {
  decrease: (e) => `Diminuir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo de número"
};
var ub = {};
ub = {
  decrease: (e) => `Diminuir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo numérico"
};
var sb = {};
sb = {
  decrease: (e) => `Scădere ${e.fieldLabel}`,
  increase: (e) => `Creștere ${e.fieldLabel}`,
  numberField: "Câmp numeric"
};
var db = {};
db = {
  decrease: (e) => `Уменьшение ${e.fieldLabel}`,
  increase: (e) => `Увеличение ${e.fieldLabel}`,
  numberField: "Числовое поле"
};
var cb = {};
cb = {
  decrease: (e) => `Znížiť ${e.fieldLabel}`,
  increase: (e) => `Zvýšiť ${e.fieldLabel}`,
  numberField: "Číselné pole"
};
var fb = {};
fb = {
  decrease: (e) => `Upadati ${e.fieldLabel}`,
  increase: (e) => `Povečajte ${e.fieldLabel}`,
  numberField: "Številčno polje"
};
var pb = {};
pb = {
  decrease: (e) => `Smanji ${e.fieldLabel}`,
  increase: (e) => `Povećaj ${e.fieldLabel}`,
  numberField: "Polje broja"
};
var bb = {};
bb = {
  decrease: (e) => `Minska ${e.fieldLabel}`,
  increase: (e) => `Öka ${e.fieldLabel}`,
  numberField: "Nummerfält"
};
var mb = {};
mb = {
  decrease: (e) => `${e.fieldLabel} azalt`,
  increase: (e) => `${e.fieldLabel} arttır`,
  numberField: "Sayı alanı"
};
var hb = {};
hb = {
  decrease: (e) => `Зменшити ${e.fieldLabel}`,
  increase: (e) => `Збільшити ${e.fieldLabel}`,
  numberField: "Поле номера"
};
var vb = {};
vb = {
  decrease: (e) => `降低 ${e.fieldLabel}`,
  increase: (e) => `提高 ${e.fieldLabel}`,
  numberField: "数字字段"
};
var gb = {};
gb = {
  decrease: (e) => `縮小 ${e.fieldLabel}`,
  increase: (e) => `放大 ${e.fieldLabel}`,
  numberField: "數字欄位"
};
zp = {
  "ar-AE": Vp,
  "bg-BG": Lp,
  "cs-CZ": Op,
  "da-DK": jp,
  "de-DE": Hp,
  "el-GR": _p,
  "en-US": Up,
  "es-ES": Wp,
  "et-EE": Gp,
  "fi-FI": Zp,
  "fr-FR": qp,
  "he-IL": Yp,
  "hr-HR": Jp,
  "hu-HU": Xp,
  "it-IT": Qp,
  "ja-JP": eb,
  "ko-KR": tb,
  "lt-LT": nb,
  "lv-LV": rb,
  "nb-NO": ab,
  "nl-NL": ib,
  "pl-PL": lb,
  "pt-BR": ob,
  "pt-PT": ub,
  "ro-RO": sb,
  "ru-RU": db,
  "sk-SK": cb,
  "sl-SI": fb,
  "sr-SP": pb,
  "sv-SE": bb,
  "tr-TR": mb,
  "uk-UA": hb,
  "zh-CN": vb,
  "zh-TW": gb
};
function e5(e, t, n) {
  let { id: r, decrementAriaLabel: a, incrementAriaLabel: i, isDisabled: l, isReadOnly: o, isRequired: u, minValue: s, maxValue: d, autoFocus: c, label: p, formatOptions: f, onBlur: b = () => {
  }, onFocus: m, onFocusChange: h, onKeyDown: y, onKeyUp: $, description: x, errorMessage: C, isWheelDisabled: P, ...B } = e, { increment: M, incrementToMax: v, decrement: R, decrementToMin: F, numberValue: E, inputValue: S, commit: w, commitValidation: k } = t;
  const z = Ee(/* @__PURE__ */ Qy(zp), "@react-aria/numberfield");
  let T = pe(r), { focusProps: D } = qa({
    onBlur() {
      w();
    }
  }), H = La(f), _ = K(() => H.resolvedOptions(), [
    H
  ]), L = La({
    ...f,
    currencySign: void 0
  }), V = K(() => isNaN(E) ? "" : L.format(E), [
    L,
    E
  ]), { spinButtonProps: N, incrementButtonProps: G, decrementButtonProps: re } = p0({
    isDisabled: l,
    isReadOnly: o,
    isRequired: u,
    maxValue: d,
    minValue: s,
    onIncrement: M,
    onIncrementToMax: v,
    onDecrement: R,
    onDecrementToMin: F,
    value: E,
    textValue: V
  }), [se, Pe] = Z(!1), { focusWithinProps: O } = yt({
    isDisabled: l,
    onFocusWithinChange: Pe
  }), X = Q((Ye) => {
    Math.abs(Ye.deltaY) <= Math.abs(Ye.deltaX) || (Ye.deltaY > 0 ? M() : Ye.deltaY < 0 && R());
  }, [
    R,
    M
  ]);
  i$({
    onScroll: X,
    isDisabled: P || l || o || !se
  }, n);
  let xe = _.maximumFractionDigits > 0, ae = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, rt = "numeric";
  Vs() ? ae ? rt = "text" : xe && (rt = "decimal") : hr() && (ae ? rt = "numeric" : xe && (rt = "decimal"));
  let Sn = (Ye) => {
    t.validate(Ye) && t.setInputValue(Ye);
  }, Jn = Y(e), ta = Q((Ye) => {
    Ye.key === "Enter" ? (w(), k()) : Ye.continuePropagation();
  }, [
    w,
    k
  ]), { isInvalid: Xn, validationErrors: Pi, validationDetails: wi } = t.displayValidation, { labelProps: ue, inputProps: ve, descriptionProps: Ie, errorMessageProps: Jv } = Iy({
    ...B,
    ...Jn,
    name: void 0,
    label: p,
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
    inputMode: rt,
    onChange: Sn,
    onBlur: b,
    onFocus: m,
    onFocusChange: h,
    onKeyDown: K(() => gt(ta, y), [
      ta,
      y
    ]),
    onKeyUp: $,
    description: x,
    errorMessage: C
  }, t, n);
  yn(n, t.numberValue, t.setNumberValue);
  let nu = j(N, D, ve, {
    // override the spinbutton role, we can't focus a spin button with VO
    role: null,
    // ignore aria-roledescription on iOS so that required state will announce when it is present
    "aria-roledescription": Wn() ? null : z.format("numberField"),
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null,
    autoCorrect: "off",
    spellCheck: "false"
  });
  e.validationBehavior === "native" && (nu["aria-required"] = void 0);
  let ru = (Ye) => {
    var Bi;
    document.activeElement !== n.current && (Ye.pointerType === "mouse" ? (Bi = n.current) === null || Bi === void 0 || Bi.focus() : Ye.target.focus());
  }, Si = e["aria-label"] || (typeof e.label == "string" ? e.label : ""), on;
  Si || (on = e.label != null ? ue.id : e["aria-labelledby"]);
  let au = pe(), iu = pe(), Xv = j(G, {
    "aria-label": i || z.format("increase", {
      fieldLabel: Si
    }).trim(),
    id: on && !i ? au : null,
    "aria-labelledby": on && !i ? `${au} ${on}` : null,
    "aria-controls": T,
    excludeFromTabOrder: !0,
    preventFocusOnPress: !0,
    allowFocusWhenDisabled: !0,
    isDisabled: !t.canIncrement,
    onPressStart: ru
  }), Qv = j(re, {
    "aria-label": a || z.format("decrease", {
      fieldLabel: Si
    }).trim(),
    id: on && !a ? iu : null,
    "aria-labelledby": on && !a ? `${iu} ${on}` : null,
    "aria-controls": T,
    excludeFromTabOrder: !0,
    preventFocusOnPress: !0,
    allowFocusWhenDisabled: !0,
    isDisabled: !t.canDecrement,
    onPressStart: ru
  });
  return {
    groupProps: {
      ...O,
      role: "group",
      "aria-disabled": l,
      "aria-invalid": Xn ? "true" : void 0
    },
    labelProps: ue,
    inputProps: nu,
    incrementButtonProps: Xv,
    decrementButtonProps: Qv,
    errorMessageProps: Jv,
    descriptionProps: Ie,
    isInvalid: Xn,
    validationErrors: Pi,
    validationDetails: wi
  };
}
const $b = /* @__PURE__ */ new WeakMap();
function t5(e, t, n) {
  let { value: r, children: a, "aria-label": i, "aria-labelledby": l } = e;
  const o = e.isDisabled || t.isDisabled;
  let u = a != null, s = i != null || l != null;
  !u && !s && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let d = t.selectedValue === r, c = (v) => {
    v.stopPropagation(), t.setSelectedValue(r);
  }, { pressProps: p, isPressed: f } = Xe({
    isDisabled: o
  }), { pressProps: b, isPressed: m } = Xe({
    isDisabled: o,
    onPress() {
      t.setSelectedValue(r);
    }
  }), { focusableProps: h } = xn(j(e, {
    onFocus: () => t.setLastFocusedValue(r)
  }), n), y = j(p, h), $ = Y(e, {
    labelable: !0
  }), x = -1;
  t.selectedValue != null ? t.selectedValue === r && (x = 0) : (t.lastFocusedValue === r || t.lastFocusedValue == null) && (x = 0), o && (x = void 0);
  let { name: C, descriptionId: P, errorMessageId: B, validationBehavior: M } = $b.get(t);
  return yn(n, t.selectedValue, t.setSelectedValue), Or({
    validationBehavior: M
  }, t, n), {
    labelProps: j(b, {
      onClick: (v) => v.preventDefault()
    }),
    inputProps: j($, {
      ...y,
      type: "radio",
      name: C,
      tabIndex: x,
      disabled: o,
      required: t.isRequired && M === "native",
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
function n5(e, t) {
  let { name: n, isReadOnly: r, isRequired: a, isDisabled: i, orientation: l = "vertical", validationBehavior: o = "aria" } = e, { direction: u } = oe(), { isInvalid: s, validationErrors: d, validationDetails: c } = t.displayValidation, { labelProps: p, fieldProps: f, descriptionProps: b, errorMessageProps: m } = rn({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || d
  }), h = Y(e, {
    labelable: !0
  }), { focusWithinProps: y } = yt({
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
    }), M;
    P === "next" ? (M = B.nextNode(), M || (B.currentNode = C.currentTarget, M = B.firstChild())) : (M = B.previousNode(), M || (B.currentNode = C.currentTarget, M = B.lastChild())), M && (M.focus(), t.setSelectedValue(M.value));
  }, x = pe(n);
  return $b.set(t, {
    name: x,
    descriptionId: b.id,
    errorMessageId: m.id,
    validationBehavior: o
  }), {
    radioGroupProps: j(h, {
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
    labelProps: p,
    descriptionProps: b,
    errorMessageProps: m,
    isInvalid: s,
    validationErrors: d,
    validationDetails: c
  };
}
function r5(e) {
  return e && e.__esModule ? e.default : e;
}
var yb = {}, xb = {};
xb = {
  "Clear search": "مسح البحث"
};
var Db = {};
Db = {
  "Clear search": "Изчистване на търсене"
};
var Cb = {};
Cb = {
  "Clear search": "Vymazat hledání"
};
var Eb = {};
Eb = {
  "Clear search": "Ryd søgning"
};
var Pb = {};
Pb = {
  "Clear search": "Suche zurücksetzen"
};
var wb = {};
wb = {
  "Clear search": "Απαλοιφή αναζήτησης"
};
var Sb = {};
Sb = {
  "Clear search": "Clear search"
};
var Bb = {};
Bb = {
  "Clear search": "Borrar búsqueda"
};
var kb = {};
kb = {
  "Clear search": "Tühjenda otsing"
};
var Fb = {};
Fb = {
  "Clear search": "Tyhjennä haku"
};
var Ab = {};
Ab = {
  "Clear search": "Effacer la recherche"
};
var Tb = {};
Tb = {
  "Clear search": "נקה חיפוש"
};
var Mb = {};
Mb = {
  "Clear search": "Obriši pretragu"
};
var Rb = {};
Rb = {
  "Clear search": "Keresés törlése"
};
var Ib = {};
Ib = {
  "Clear search": "Cancella ricerca"
};
var Nb = {};
Nb = {
  "Clear search": "検索をクリア"
};
var Kb = {};
Kb = {
  "Clear search": "검색 지우기"
};
var zb = {};
zb = {
  "Clear search": "Išvalyti iešką"
};
var Vb = {};
Vb = {
  "Clear search": "Notīrīt meklēšanu"
};
var Lb = {};
Lb = {
  "Clear search": "Tøm søk"
};
var Ob = {};
Ob = {
  "Clear search": "Zoekactie wissen"
};
var jb = {};
jb = {
  "Clear search": "Wyczyść zawartość wyszukiwania"
};
var Hb = {};
Hb = {
  "Clear search": "Limpar pesquisa"
};
var _b = {};
_b = {
  "Clear search": "Limpar pesquisa"
};
var Ub = {};
Ub = {
  "Clear search": "Ştergeţi căutarea"
};
var Wb = {};
Wb = {
  "Clear search": "Очистить поиск"
};
var Gb = {};
Gb = {
  "Clear search": "Vymazať vyhľadávanie"
};
var Zb = {};
Zb = {
  "Clear search": "Počisti iskanje"
};
var qb = {};
qb = {
  "Clear search": "Obriši pretragu"
};
var Yb = {};
Yb = {
  "Clear search": "Rensa sökning"
};
var Jb = {};
Jb = {
  "Clear search": "Aramayı temizle"
};
var Xb = {};
Xb = {
  "Clear search": "Очистити пошук"
};
var Qb = {};
Qb = {
  "Clear search": "清除搜索"
};
var em = {};
em = {
  "Clear search": "清除搜尋條件"
};
yb = {
  "ar-AE": xb,
  "bg-BG": Db,
  "cs-CZ": Cb,
  "da-DK": Eb,
  "de-DE": Pb,
  "el-GR": wb,
  "en-US": Sb,
  "es-ES": Bb,
  "et-EE": kb,
  "fi-FI": Fb,
  "fr-FR": Ab,
  "he-IL": Tb,
  "hr-HR": Mb,
  "hu-HU": Rb,
  "it-IT": Ib,
  "ja-JP": Nb,
  "ko-KR": Kb,
  "lt-LT": zb,
  "lv-LV": Vb,
  "nb-NO": Lb,
  "nl-NL": Ob,
  "pl-PL": jb,
  "pt-BR": Hb,
  "pt-PT": _b,
  "ro-RO": Ub,
  "ru-RU": Wb,
  "sk-SK": Gb,
  "sl-SI": Zb,
  "sr-SP": qb,
  "sv-SE": Yb,
  "tr-TR": Jb,
  "uk-UA": Xb,
  "zh-CN": Qb,
  "zh-TW": em
};
function a5(e, t, n) {
  let r = Ee(/* @__PURE__ */ r5(yb), "@react-aria/searchfield"), { isDisabled: a, isReadOnly: i, onSubmit: l = () => {
  }, onClear: o, type: u = "search" } = e, s = (y) => {
    const $ = y.key;
    $ === "Enter" && y.preventDefault(), !(a || i) && ($ === "Enter" && l(t.value), $ === "Escape" && (t.value === "" ? y.continuePropagation() : (t.setValue(""), o && o())));
  }, d = () => {
    t.setValue(""), o && o();
  }, c = () => {
    var y;
    (y = n.current) === null || y === void 0 || y.focus();
  }, { labelProps: p, inputProps: f, descriptionProps: b, errorMessageProps: m, ...h } = oi({
    ...e,
    value: t.value,
    onChange: t.setValue,
    onKeyDown: i ? e.onKeyDown : gt(s, e.onKeyDown),
    type: u
  }, n);
  return {
    labelProps: p,
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
    descriptionProps: b,
    errorMessageProps: m,
    ...h
  };
}
const tm = /* @__PURE__ */ new WeakMap();
function i5(e, t, n) {
  let { keyboardDelegate: r, isDisabled: a, isRequired: i, name: l, validationBehavior: o = "aria" } = e, u = Zn({
    usage: "search",
    sensitivity: "base"
  }), s = K(() => r || new Cn(t.collection, t.disabledKeys, null, u), [
    r,
    t.collection,
    t.disabledKeys,
    u
  ]), { menuTriggerProps: d, menuProps: c } = Zf({
    isDisabled: a,
    type: "listbox"
  }, t, n), p = (v) => {
    switch (v.key) {
      case "ArrowLeft": {
        v.preventDefault();
        let R = t.selectedKey != null ? s.getKeyAbove(t.selectedKey) : s.getFirstKey();
        R && t.setSelectedKey(R);
        break;
      }
      case "ArrowRight": {
        v.preventDefault();
        let R = t.selectedKey != null ? s.getKeyBelow(t.selectedKey) : s.getFirstKey();
        R && t.setSelectedKey(R);
        break;
      }
    }
  }, { typeSelectProps: f } = cf({
    keyboardDelegate: s,
    selectionManager: t.selectionManager,
    onTypeSelect(v) {
      t.setSelectedKey(v);
    }
  }), { isInvalid: b, validationErrors: m, validationDetails: h } = t.displayValidation, { labelProps: y, fieldProps: $, descriptionProps: x, errorMessageProps: C } = rn({
    ...e,
    labelElementType: "span",
    isInvalid: b,
    errorMessage: e.errorMessage || m
  });
  f.onKeyDown = f.onKeyDownCapture, delete f.onKeyDownCapture;
  let P = Y(e, {
    labelable: !0
  }), B = j(f, d, $), M = pe();
  return tm.set(t, {
    isDisabled: a,
    isRequired: i,
    name: l,
    validationBehavior: o
  }), {
    labelProps: {
      ...y,
      onClick: () => {
        e.isDisabled || (n.current.focus(), Jl("keyboard"));
      }
    },
    triggerProps: j(P, {
      ...B,
      isDisabled: a,
      onKeyDown: gt(B.onKeyDown, p, e.onKeyDown),
      onKeyUp: e.onKeyUp,
      "aria-labelledby": [
        M,
        B["aria-labelledby"],
        B["aria-label"] && !B["aria-labelledby"] ? B.id : null
      ].filter(Boolean).join(" "),
      onFocus(v) {
        t.isFocused || (e.onFocus && e.onFocus(v), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
      },
      onBlur(v) {
        t.isOpen || (e.onBlur && e.onBlur(v), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
      }
    }),
    valueProps: {
      id: M
    },
    menuProps: {
      ...c,
      autoFocus: t.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: (v) => {
        v.currentTarget.contains(v.relatedTarget) || (e.onBlur && e.onBlur(v), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
      },
      "aria-labelledby": [
        $["aria-labelledby"],
        B["aria-label"] && !$["aria-labelledby"] ? B.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: x,
    errorMessageProps: C,
    isInvalid: b,
    validationErrors: m,
    validationDetails: h
  };
}
function l5(e, t, n) {
  let r = tm.get(t) || {}, { autoComplete: a, name: i = r.name, isDisabled: l = r.isDisabled } = e, { validationBehavior: o, isRequired: u } = r, s = Ir(), { visuallyHiddenProps: d } = _t();
  yn(e.selectRef, t.selectedKey, t.setSelectedKey), Or({
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
      onChange: (p) => t.setSelectedKey(p.target.value)
    }
  };
}
function o5(e) {
  let { state: t, triggerRef: n, label: r, name: a, isDisabled: i } = e, l = I(null), { containerProps: o, inputProps: u, selectProps: s } = l5({
    ...e,
    selectRef: l
  }, t, n);
  var d;
  return t.collection.size <= 300 ? /* @__PURE__ */ g.createElement("div", {
    ...o,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ g.createElement("input", u), /* @__PURE__ */ g.createElement("label", null, r, /* @__PURE__ */ g.createElement("select", {
    ...s,
    ref: l
  }, /* @__PURE__ */ g.createElement("option", null), [
    ...t.collection.getKeys()
  ].map((c) => {
    let p = t.collection.getItem(c);
    if (p.type === "item")
      return /* @__PURE__ */ g.createElement("option", {
        key: p.key,
        value: p.key
      }, p.textValue);
  })))) : a ? /* @__PURE__ */ g.createElement("input", {
    type: "hidden",
    autoComplete: s.autoComplete,
    name: a,
    disabled: i,
    value: (d = t.selectedKey) !== null && d !== void 0 ? d : ""
  }) : null;
}
function u5(e) {
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
const wo = /* @__PURE__ */ new WeakMap();
function Bl(e, t) {
  let n = wo.get(e);
  if (!n)
    throw new Error("Unknown slider state");
  return `${n.id}-${t}`;
}
function s5(e, t, n) {
  let { labelProps: r, fieldProps: a } = jr(e), i = e.orientation === "vertical";
  var l;
  wo.set(t, {
    id: (l = r.id) !== null && l !== void 0 ? l : a.id,
    "aria-describedby": e["aria-describedby"],
    "aria-details": e["aria-details"]
  });
  let { direction: o } = oe(), { addGlobalListener: u, removeGlobalListener: s } = Gn();
  const d = I(null), c = o === "rtl", p = I(null), { moveProps: f } = Xl({
    onMoveStart() {
      p.current = null;
    },
    onMove({ deltaX: y, deltaY: $ }) {
      let { height: x, width: C } = n.current.getBoundingClientRect(), P = i ? x : C;
      p.current == null && (p.current = t.getThumbPercent(d.current) * P);
      let B = i ? $ : y;
      if ((i || c) && (B = -B), p.current += B, d.current != null && n.current) {
        const M = st(p.current / P, 0, 1);
        t.setThumbPercent(d.current, M);
      }
    },
    onMoveEnd() {
      d.current != null && (t.setThumbDragging(d.current, !1), d.current = null);
    }
  });
  let b = I(void 0), m = (y, $, x, C) => {
    if (n.current && !e.isDisabled && t.values.every((P, B) => !t.isThumbDragging(B))) {
      let { height: P, width: B, top: M, left: v } = n.current.getBoundingClientRect(), R = i ? P : B, w = ((i ? C : x) - (i ? M : v)) / R;
      (o === "rtl" || i) && (w = 1 - w);
      let k = t.getPercentValue(w), z, T = t.values.findIndex((D) => k - D < 0);
      if (T === 0)
        z = T;
      else if (T === -1)
        z = t.values.length - 1;
      else {
        let D = t.values[T - 1], H = t.values[T];
        Math.abs(D - k) < Math.abs(H - k) ? z = T - 1 : z = T;
      }
      z >= 0 && t.isThumbEditable(z) ? (y.preventDefault(), d.current = z, t.setFocusedThumb(z), b.current = $, t.setThumbDragging(d.current, !0), t.setThumbValue(z, k), u(window, "mouseup", h, !1), u(window, "touchend", h, !1), u(window, "pointerup", h, !1)) : d.current = null;
    }
  }, h = (y) => {
    var $, x;
    ((x = y.pointerId) !== null && x !== void 0 ? x : ($ = y.changedTouches) === null || $ === void 0 ? void 0 : $[0].identifier) === b.current && (d.current != null && (t.setThumbDragging(d.current, !1), d.current = null), s(window, "mouseup", h, !1), s(window, "touchend", h, !1), s(window, "pointerup", h, !1));
  };
  return "htmlFor" in r && r.htmlFor && (delete r.htmlFor, r.onClick = () => {
    var y;
    (y = document.getElementById(Bl(t, 0))) === null || y === void 0 || y.focus(), Jl("keyboard");
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
      htmlFor: t.values.map((y, $) => Bl(t, $)).join(" "),
      "aria-live": "off"
    }
  };
}
function d5(e, t) {
  let { index: n = 0, isRequired: r, validationState: a, isInvalid: i, trackRef: l, inputRef: o, orientation: u = t.orientation, name: s } = e, d = e.isDisabled || t.isDisabled, c = u === "vertical", { direction: p } = oe(), { addGlobalListener: f, removeGlobalListener: b } = Gn(), m = wo.get(t);
  var h;
  const { labelProps: y, fieldProps: $ } = jr({
    ...e,
    id: Bl(t, n),
    "aria-labelledby": `${m.id} ${(h = e["aria-labelledby"]) !== null && h !== void 0 ? h : ""}`.trim()
  }), x = t.values[n], C = Q(() => {
    o.current && vt(o.current);
  }, [
    o
  ]), P = t.focusedThumb === n;
  J(() => {
    P && C();
  }, [
    P,
    C
  ]);
  let B = p === "rtl", M = I(null), { keyboardProps: v } = Ja({
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
  }), { moveProps: R } = Xl({
    onMoveStart() {
      M.current = null, t.setThumbDragging(n, !0);
    },
    onMove({ deltaX: T, deltaY: D, pointerType: H, shiftKey: _ }) {
      const { getThumbPercent: L, setThumbPercent: V, decrementThumb: N, incrementThumb: G, step: re, pageSize: se } = t;
      let { width: Pe, height: O } = l.current.getBoundingClientRect(), X = c ? O : Pe;
      if (M.current == null && (M.current = L(n) * X), H === "keyboard")
        T > 0 && B || T < 0 && !B || D > 0 ? N(n, _ ? se : re) : G(n, _ ? se : re);
      else {
        let ce = c ? D : T;
        (c || B) && (ce = -ce), M.current += ce, V(n, st(M.current / X, 0, 1));
      }
    },
    onMoveEnd() {
      t.setThumbDragging(n, !1);
    }
  });
  t.setThumbEditable(n, !d);
  const { focusableProps: F } = xn(j(e, {
    onFocus: () => t.setFocusedThumb(n),
    onBlur: () => t.setFocusedThumb(void 0)
  }), o);
  let E = I(void 0), S = (T) => {
    C(), E.current = T, t.setThumbDragging(n, !0), f(window, "mouseup", w, !1), f(window, "touchend", w, !1), f(window, "pointerup", w, !1);
  }, w = (T) => {
    var D, H;
    ((H = T.pointerId) !== null && H !== void 0 ? H : (D = T.changedTouches) === null || D === void 0 ? void 0 : D[0].identifier) === E.current && (C(), t.setThumbDragging(n, !1), b(window, "mouseup", w, !1), b(window, "touchend", w, !1), b(window, "pointerup", w, !1));
  }, k = t.getThumbPercent(n);
  (c || p === "rtl") && (k = 1 - k);
  let z = d ? {} : j(v, R, {
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
  return yn(o, x, (T) => {
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
        [c ? "top" : "left"]: `${k * 100}%`,
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
function c5(e, t, n) {
  let { labelProps: r, inputProps: a, isSelected: i, isPressed: l, isDisabled: o, isReadOnly: u } = gc(e, t, n);
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
let f5 = !1;
function ja() {
  return f5;
}
function di(e) {
  return e && e.__esModule ? e.default : e;
}
const So = /* @__PURE__ */ new WeakMap();
function kl(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function nm(e, t) {
  let n = So.get(e);
  if (!n)
    throw new Error("Unknown grid");
  return `${n}-${kl(t)}`;
}
function rm(e, t, n) {
  let r = So.get(e);
  if (!r)
    throw new Error("Unknown grid");
  return `${r}-${kl(t)}-${kl(n)}`;
}
function am(e, t) {
  return [
    ...e.collection.rowHeaderColumnKeys
  ].map((n) => rm(e, t, n)).join(" ");
}
var _r = {}, im = {};
im = {
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
var lm = {};
lm = {
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
var om = {};
om = {
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
var um = {};
um = {
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
var sm = {};
sm = {
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
var dm = {};
dm = {
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
var cm = {};
cm = {
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
var fm = {};
fm = {
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
var pm = {};
pm = {
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
var bm = {};
bm = {
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
var mm = {};
mm = {
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
var hm = {};
hm = {
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
var vm = {};
vm = {
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
var gm = {};
gm = {
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
var $m = {};
$m = {
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
var ym = {};
ym = {
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
var xm = {};
xm = {
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
var Dm = {};
Dm = {
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
var Cm = {};
Cm = {
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
var Em = {};
Em = {
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
var Pm = {};
Pm = {
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
var wm = {};
wm = {
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
var Sm = {};
Sm = {
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
var Bm = {};
Bm = {
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
var km = {};
km = {
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
var Fm = {};
Fm = {
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
var Am = {};
Am = {
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
var Tm = {};
Tm = {
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
var Mm = {};
Mm = {
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
var Rm = {};
Rm = {
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
var Im = {};
Im = {
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
var Nm = {};
Nm = {
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
var Km = {};
Km = {
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
var zm = {};
zm = {
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
_r = {
  "ar-AE": im,
  "bg-BG": lm,
  "cs-CZ": om,
  "da-DK": um,
  "de-DE": sm,
  "el-GR": dm,
  "en-US": cm,
  "es-ES": fm,
  "et-EE": pm,
  "fi-FI": bm,
  "fr-FR": mm,
  "he-IL": hm,
  "hr-HR": vm,
  "hu-HU": gm,
  "it-IT": $m,
  "ja-JP": ym,
  "ko-KR": xm,
  "lt-LT": Dm,
  "lv-LV": Cm,
  "nb-NO": Em,
  "nl-NL": Pm,
  "pl-PL": wm,
  "pt-BR": Sm,
  "pt-PT": Bm,
  "ro-RO": km,
  "ru-RU": Fm,
  "sk-SK": Am,
  "sl-SI": Tm,
  "sr-SP": Mm,
  "sv-SE": Rm,
  "tr-TR": Im,
  "uk-UA": Nm,
  "zh-CN": Km,
  "zh-TW": zm
};
class p5 extends Y0 {
  isCell(t) {
    return t.type === "cell" || t.type === "rowheader" || t.type === "column";
  }
  getKeyBelow(t) {
    let n = this.collection.getItem(t);
    if (n) {
      if (n.type === "column") {
        let r = Rt(we(n, this.collection));
        if (r)
          return r.key;
        let a = this.getFirstKey();
        if (a == null)
          return;
        let i = this.collection.getItem(a);
        return qt(we(i, this.collection), n.index).key;
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
    for (let a of we(r, this.collection))
      if (a.type === "column")
        return a.key;
  }
  findPreviousColumnKey(t) {
    let n = this.findPreviousKey(t.key, (i) => i.type === "column");
    if (n != null)
      return n;
    let r = this.collection.headerRows[t.level], a = [
      ...we(r, this.collection)
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
      for (let u of we(o, this.collection)) {
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
function b5(e, t, n) {
  let { keyboardDelegate: r, isVirtualized: a, layout: i } = e, l = Zn({
    usage: "search",
    sensitivity: "base"
  }), { direction: o } = oe(), u = t.selectionManager.disabledBehavior, s = K(() => r || new p5({
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
  ]), d = pe(e.id);
  So.set(t, d);
  let { gridProps: c } = Gy({
    ...e,
    id: d,
    keyboardDelegate: s
  }, t, n);
  a && (c["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), ja() && "expandedKeys" in t && (c.role = "treegrid");
  let { column: p, direction: f } = t.sortDescriptor || {}, b = Ee(/* @__PURE__ */ di(_r), "@react-aria/table"), m = K(() => {
    var y;
    let $ = (y = t.collection.columns.find((x) => x.key === p)) === null || y === void 0 ? void 0 : y.textValue;
    return f && p ? b.format(`${f}Sort`, {
      columnName: $
    }) : void 0;
  }, [
    f,
    p,
    t.collection.columns
  ]), h = St(m);
  return Ca(() => {
    en(m, "assertive", 500);
  }, [
    m
  ]), {
    gridProps: j(c, h, {
      // merge sort description with long press information
      "aria-describedby": [
        h["aria-describedby"],
        c["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function m5(e, t, n) {
  var r, a;
  let { node: i } = e, l = i.props.allowsSorting, { gridCellProps: o } = Mp({
    ...e,
    focusMode: "child"
  }, t, n), u = i.props.isSelectionCell && t.selectionManager.selectionMode === "single", { pressProps: s } = Xe({
    isDisabled: !l || u,
    onPress() {
      t.sort(i.key);
    },
    ref: n
  }), { focusableProps: d } = xn({}, n), c = null, p = ((r = t.sortDescriptor) === null || r === void 0 ? void 0 : r.column) === i.key, f = (a = t.sortDescriptor) === null || a === void 0 ? void 0 : a.direction;
  i.props.allowsSorting && !hr() && (c = p ? f : "none");
  let b = Ee(/* @__PURE__ */ di(_r), "@react-aria/table"), m;
  l && (m = `${b.format("sortable")}`, p && f && hr() && (m = `${m}, ${b.format(f)}`));
  let h = St(m), y = t.collection.size === 0;
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
        h,
        // If the table is empty, make all column headers untabbable
        y && {
          tabIndex: -1
        }
      ),
      role: "columnheader",
      id: nm(t, i.key),
      "aria-colspan": i.colspan && i.colspan > 1 ? i.colspan : null,
      "aria-sort": c
    }
  };
}
const ss = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function h5(e, t, n) {
  let { node: r, isVirtualized: a } = e, { rowProps: i, ...l } = qy(e, t, n), { direction: o } = oe();
  a && !(ja() && "expandedKeys" in t) ? i["aria-rowindex"] = r.index + 1 + t.collection.headerRows.length : delete i["aria-rowindex"];
  let u = {};
  if (ja() && "expandedKeys" in t) {
    let f = t.keyMap.get(r.key);
    if (f != null) {
      var s, d, c;
      let b = ((s = f.props) === null || s === void 0 ? void 0 : s.UNSTABLE_childItems) || ((c = f.props) === null || c === void 0 || (d = c.children) === null || d === void 0 ? void 0 : d.length) > t.userColumnCount;
      u = {
        onKeyDown: (m) => {
          (m.key === ss.expand[o] && t.selectionManager.focusedKey === f.key && b && t.expandedKeys !== "all" && !t.expandedKeys.has(f.key) || m.key === ss.collapse[o] && t.selectionManager.focusedKey === f.key && b && (t.expandedKeys === "all" || t.expandedKeys.has(f.key))) && (t.toggleKey(f.key), m.stopPropagation());
        },
        "aria-expanded": b ? t.expandedKeys === "all" || t.expandedKeys.has(r.key) : void 0,
        "aria-level": f.level,
        "aria-posinset": f.indexOfType + 1,
        "aria-setsize": f.level > 1 ? Qt(t.keyMap.get(f == null ? void 0 : f.parentKey).childNodes).indexOfType + 1 : Qt(t.keyMap.get(t.collection.body.key).childNodes).indexOfType + 1
      };
    }
  }
  let p = l.hasAction ? Zl(r.props) : {};
  return {
    rowProps: {
      ...j(i, u, p),
      "aria-labelledby": am(t, r.key)
    },
    ...l
  };
}
function v5(e, t, n) {
  let { node: r, isVirtualized: a } = e, i = {
    role: "row"
  };
  return a && !(ja() && "expandedKeys" in t) && (i["aria-rowindex"] = r.index + 1), {
    rowProps: i
  };
}
function g5(e, t, n) {
  let { gridCellProps: r, isPressed: a } = Mp(e, t, n), i = e.node.column.key;
  return t.collection.rowHeaderColumnKeys.has(i) && (r.role = "rowheader", r.id = rm(t, e.node.parentKey, i)), {
    gridCellProps: r,
    isPressed: a
  };
}
function $5(e, t) {
  let { key: n } = e;
  const { checkboxProps: r } = Rp(e, t);
  return {
    checkboxProps: {
      ...r,
      "aria-labelledby": `${r.id} ${am(t, n)}`
    }
  };
}
function y5(e) {
  let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
  return {
    checkboxProps: {
      "aria-label": Ee(/* @__PURE__ */ di(_r), "@react-aria/table").format(r === "single" ? "select" : "selectAll"),
      isSelected: n,
      isDisabled: r !== "multiple" || e.collection.size === 0,
      isIndeterminate: !t && !n,
      onChange: () => e.selectionManager.toggleSelectAll()
    }
  };
}
function x5(e, t, n) {
  let { column: r, triggerRef: a, isDisabled: i, onResizeStart: l, onResize: o, onResizeEnd: u, "aria-label": s } = e;
  const d = Ee(/* @__PURE__ */ di(_r), "@react-aria/table");
  let c = pe(), p = t.resizingColumn === r.key, f = I(p), b = I(null), m = I(!1), h = t.tableState.isKeyboardNavigationDisabled, { direction: y } = oe(), { keyboardProps: $ } = Ja({
    onKeyDown: (N) => {
      h ? (N.key === "Escape" || N.key === "Enter" || N.key === " " || N.key === "Tab") && (N.preventDefault(), P(r)) : (N.continuePropagation(), N.key === "Enter" && x(r));
    }
  }), x = $e((N) => {
    f.current || (b.current = t.updateResizedColumns(N.key, t.getColumnWidth(N.key)), t.startResize(N.key), t.tableState.setKeyboardNavigationDisabled(!0), l == null || l(b.current)), f.current = !0;
  }), C = $e((N, G) => {
    let re = t.updateResizedColumns(N.key, G);
    o == null || o(re), b.current = re;
  }), P = $e((N) => {
    f.current && (b.current == null && (b.current = t.updateResizedColumns(N.key, t.getColumnWidth(N.key))), t.endResize(), t.tableState.setKeyboardNavigationDisabled(!1), u == null || u(b.current), f.current = !1, a != null && a.current && !m.current && De(a.current)), b.current = null;
  });
  const B = I(0), { moveProps: M } = Xl({
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
  let v = Q((N) => {
    h && M.onKeyDown(N);
  }, [
    h,
    M
  ]), R = Math.floor(t.getColumnMinWidth(r.key)), F = Math.floor(t.getColumnMaxWidth(r.key));
  F === 1 / 0 && (F = Number.MAX_SAFE_INTEGER);
  let E = Math.floor(t.getColumnWidth(r.key)), S = Ir();
  S === "virtual" && typeof window < "u" && "ontouchstart" in window && (S = "touch");
  let w = (a == null ? void 0 : a.current) == null && (S === "keyboard" || S === "virtual") && !p ? d.format("resizerDescription") : void 0, k = St(w), z = {
    "aria-label": s,
    "aria-orientation": "horizontal",
    "aria-labelledby": `${c} ${nm(t.tableState, r.key)}`,
    "aria-valuetext": d.format("columnSize", {
      value: E
    }),
    type: "range",
    min: R,
    max: F,
    value: E,
    ...k
  };
  const T = Q(() => {
    n.current && De(n.current);
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
  }, { pressProps: L } = Xe({
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
      ...M,
      onKeyDown: v
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
    isResizing: p
  };
}
function Vm() {
  return Zy();
}
const Lm = /* @__PURE__ */ new WeakMap();
function Ha(e, t, n) {
  return typeof t == "string" && (t = t.replace(/\s+/g, "")), `${Lm.get(e)}-${n}-${t}`;
}
function D5(e, t, n) {
  var r;
  let { key: a, isDisabled: i, shouldSelectOnPressUp: l } = e, { selectionManager: o, selectedKey: u } = t, s = a === u, d = i || t.isDisabled || t.disabledKeys.has(a), { itemProps: c, isPressed: p } = qn({
    selectionManager: o,
    key: a,
    ref: n,
    isDisabled: d,
    shouldSelectOnPressUp: l,
    linkBehavior: "selection"
  }), f = Ha(t, a, "tab"), b = Ha(t, a, "tabpanel"), { tabIndex: m } = c, h = t.collection.getItem(a), y = Y(h == null ? void 0 : h.props, {
    isLink: !!(!(h == null || (r = h.props) === null || r === void 0) && r.href),
    labelable: !0
  });
  return delete y.id, {
    tabProps: j(y, c, {
      id: f,
      "aria-selected": s,
      "aria-disabled": d || void 0,
      "aria-controls": s ? b : void 0,
      tabIndex: d ? void 0 : m,
      role: "tab"
    }),
    isSelected: s,
    isDisabled: d,
    isPressed: p
  };
}
function C5(e, t, n) {
  let r = to(n) ? void 0 : 0;
  var a;
  const i = Ha(t, (a = e.id) !== null && a !== void 0 ? a : t == null ? void 0 : t.selectedKey, "tabpanel"), l = Lt({
    ...e,
    id: i,
    "aria-labelledby": Ha(t, t == null ? void 0 : t.selectedKey, "tab")
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
class E5 {
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
function P5(e, t, n) {
  let { orientation: r = "horizontal", keyboardActivation: a = "automatic" } = e, { collection: i, selectionManager: l, disabledKeys: o } = t, { direction: u } = oe(), s = K(() => new E5(i, u, r, o), [
    i,
    o,
    r,
    u
  ]), { collectionProps: d } = ii({
    ref: n,
    selectionManager: l,
    keyboardDelegate: s,
    selectOnFocus: a === "automatic",
    disallowEmptySelection: !0,
    scrollRef: n,
    linkBehavior: "selection"
  }), c = pe();
  Lm.set(t, c);
  let p = Lt({
    ...e,
    id: c
  });
  return {
    tabListProps: {
      ...j(d, p),
      role: "tablist",
      "aria-orientation": r,
      tabIndex: void 0
    }
  };
}
function w5(e) {
  return e && e.__esModule ? e.default : e;
}
const Om = /* @__PURE__ */ new WeakMap();
function S5(e, t, n) {
  let { direction: r } = oe(), a = e.keyboardDelegate || new Cn({
    collection: t.collection,
    ref: n,
    orientation: "horizontal",
    direction: r,
    disabledKeys: t.disabledKeys
  }), { labelProps: i, fieldProps: l, descriptionProps: o, errorMessageProps: u } = rn({
    ...e,
    labelElementType: "span"
  }), { gridProps: s } = Ip({
    ...e,
    ...l,
    keyboardDelegate: a,
    shouldFocusWrap: !0,
    linkBehavior: "override"
  }, t, n), [d, c] = Z(!1), { focusWithinProps: p } = yt({
    onFocusWithinChange: c
  }), f = Y(e), b = I(t.collection.size);
  return J(() => {
    n.current && b.current > 0 && t.collection.size === 0 && d && n.current.focus(), b.current = t.collection.size;
  }, [
    t.collection.size,
    d,
    n
  ]), Om.set(t, {
    onRemove: e.onRemove
  }), {
    gridProps: j(s, f, {
      role: t.collection.size ? "grid" : null,
      "aria-atomic": !1,
      "aria-relevant": "additions",
      "aria-live": d ? "polite" : "off",
      ...p,
      ...l
    }),
    labelProps: i,
    descriptionProps: o,
    errorMessageProps: u
  };
}
var jm = {}, Hm = {};
Hm = {
  removeButtonLabel: "إزالة",
  removeDescription: "اضغط على مفتاح DELETE لإزالة علامة."
};
var _m = {};
_m = {
  removeButtonLabel: "Премахване",
  removeDescription: "Натиснете Delete, за да премахнете маркера."
};
var Um = {};
Um = {
  removeButtonLabel: "Odebrat",
  removeDescription: "Stisknutím klávesy Delete odeberete značku."
};
var Wm = {};
Wm = {
  removeButtonLabel: "Fjern",
  removeDescription: "Tryk på Slet for at fjerne tag."
};
var Gm = {};
Gm = {
  removeButtonLabel: "Entfernen",
  removeDescription: "Auf „Löschen“ drücken, um das Tag zu entfernen."
};
var Zm = {};
Zm = {
  removeButtonLabel: "Κατάργηση",
  removeDescription: "Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."
};
var qm = {};
qm = {
  removeDescription: "Press Delete to remove tag.",
  removeButtonLabel: "Remove"
};
var Ym = {};
Ym = {
  removeButtonLabel: "Quitar",
  removeDescription: "Pulse Eliminar para quitar la etiqueta."
};
var Jm = {};
Jm = {
  removeButtonLabel: "Eemalda",
  removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete."
};
var Xm = {};
Xm = {
  removeButtonLabel: "Poista",
  removeDescription: "Poista tunniste painamalla Poista-painiketta."
};
var Qm = {};
Qm = {
  removeButtonLabel: "Supprimer",
  removeDescription: "Appuyez sur Supprimer pour supprimer l’étiquette."
};
var e3 = {};
e3 = {
  removeButtonLabel: "הסר",
  removeDescription: "לחץ על מחק כדי להסיר תג."
};
var t3 = {};
t3 = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Delete za uklanjanje oznake."
};
var n3 = {};
n3 = {
  removeButtonLabel: "Eltávolítás",
  removeDescription: "Nyomja meg a Delete billentyűt a címke eltávolításához."
};
var r3 = {};
r3 = {
  removeButtonLabel: "Rimuovi",
  removeDescription: "Premi Elimina per rimuovere il tag."
};
var a3 = {};
a3 = {
  removeButtonLabel: "削除",
  removeDescription: "タグを削除するには、Delete キーを押します。"
};
var i3 = {};
i3 = {
  removeButtonLabel: "제거",
  removeDescription: "태그를 제거하려면 Delete 키를 누르십시오."
};
var l3 = {};
l3 = {
  removeButtonLabel: "Pašalinti",
  removeDescription: "Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."
};
var o3 = {};
o3 = {
  removeButtonLabel: "Noņemt",
  removeDescription: "Nospiediet Delete [Dzēst], lai noņemtu tagu."
};
var u3 = {};
u3 = {
  removeButtonLabel: "Fjern",
  removeDescription: "Trykk på Slett for å fjerne taggen."
};
var s3 = {};
s3 = {
  removeButtonLabel: "Verwijderen",
  removeDescription: "Druk op Verwijderen om de tag te verwijderen."
};
var d3 = {};
d3 = {
  removeButtonLabel: "Usuń",
  removeDescription: "Naciśnij Usuń, aby usunąć znacznik."
};
var c3 = {};
c3 = {
  removeButtonLabel: "Remover",
  removeDescription: "Pressione Delete para remover a tag."
};
var f3 = {};
f3 = {
  removeButtonLabel: "Eliminar",
  removeDescription: "Prima Delete para eliminar a tag."
};
var p3 = {};
p3 = {
  removeButtonLabel: "Îndepărtaţi",
  removeDescription: "Apăsați pe Delete (Ștergere) pentru a elimina eticheta."
};
var b3 = {};
b3 = {
  removeButtonLabel: "Удалить",
  removeDescription: "Нажмите DELETE, чтобы удалить тег."
};
var m3 = {};
m3 = {
  removeButtonLabel: "Odstrániť",
  removeDescription: "Ak chcete odstrániť značku, stlačte kláves Delete."
};
var h3 = {};
h3 = {
  removeButtonLabel: "Odstrani",
  removeDescription: "Pritisnite Delete, da odstranite oznako."
};
var v3 = {};
v3 = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Obriši da biste uklonili oznaku."
};
var g3 = {};
g3 = {
  removeButtonLabel: "Ta bort",
  removeDescription: "Tryck på Radera för att ta bort taggen."
};
var $3 = {};
$3 = {
  removeButtonLabel: "Kaldır",
  removeDescription: "Etiketi kaldırmak için Sil tuşuna basın."
};
var y3 = {};
y3 = {
  removeButtonLabel: "Вилучити",
  removeDescription: "Натисніть Delete, щоб вилучити тег."
};
var x3 = {};
x3 = {
  removeButtonLabel: "删除",
  removeDescription: "按下“删除”以删除标记。"
};
var D3 = {};
D3 = {
  removeButtonLabel: "移除",
  removeDescription: "按 Delete 鍵以移除標記。"
};
jm = {
  "ar-AE": Hm,
  "bg-BG": _m,
  "cs-CZ": Um,
  "da-DK": Wm,
  "de-DE": Gm,
  "el-GR": Zm,
  "en-US": qm,
  "es-ES": Ym,
  "et-EE": Jm,
  "fi-FI": Xm,
  "fr-FR": Qm,
  "he-IL": e3,
  "hr-HR": t3,
  "hu-HU": n3,
  "it-IT": r3,
  "ja-JP": a3,
  "ko-KR": i3,
  "lt-LT": l3,
  "lv-LV": o3,
  "nb-NO": u3,
  "nl-NL": s3,
  "pl-PL": d3,
  "pt-BR": c3,
  "pt-PT": f3,
  "ro-RO": p3,
  "ru-RU": b3,
  "sk-SK": m3,
  "sl-SI": h3,
  "sr-SP": v3,
  "sv-SE": g3,
  "tr-TR": $3,
  "uk-UA": y3,
  "zh-CN": x3,
  "zh-TW": D3
};
function B5(e, t, n) {
  let { item: r } = e, a = Ee(/* @__PURE__ */ w5(jm), "@react-aria/tag"), i = pe(), { onRemove: l } = Om.get(t) || {}, { rowProps: o, gridCellProps: u, ...s } = Np({
    node: r
  }, t, n);
  delete o.onKeyDownCapture;
  let { descriptionProps: d, ...c } = s, p = (x) => {
    (x.key === "Delete" || x.key === "Backspace") && (x.preventDefault(), t.selectionManager.isSelected(r.key) ? l == null || l(new Set(t.selectionManager.selectedKeys)) : l == null || l(/* @__PURE__ */ new Set([
      r.key
    ])));
  }, f = Ir();
  f === "virtual" && typeof window < "u" && "ontouchstart" in window && (f = "pointer");
  let b = l && (f === "keyboard" || f === "virtual") ? a.format("removeDescription") : "", m = St(b), h = r.key === t.selectionManager.focusedKey, y = Y(r.props), $ = Zl(r.props);
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
      tabIndex: h || t.selectionManager.focusedKey == null ? 0 : -1,
      onKeyDown: l ? p : void 0,
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
function k5(e, t) {
  let n = Y(e, {
    labelable: !0
  }), { hoverProps: r } = ye({
    onHoverStart: () => t == null ? void 0 : t.open(!0),
    onHoverEnd: () => t == null ? void 0 : t.close()
  });
  return {
    tooltipProps: j(n, r, {
      role: "tooltip"
    })
  };
}
function Hn(e, t, n) {
  return t != null && e.compare(t) < 0 || n != null && e.compare(n) > 0;
}
function Fl(e, t, n, r, a) {
  let i = {};
  for (let o in t)
    i[o] = Math.floor(t[o] / 2), i[o] > 0 && t[o] % 2 === 0 && i[o]--;
  let l = pn(e, t, n).subtract(i);
  return Cr(e, l, t, n, r, a);
}
function pn(e, t, n, r, a) {
  let i = e;
  return t.years ? i = k$(e) : t.months ? i = gn(e) : t.weeks && (i = gr(e, n)), Cr(e, i, t, n, r, a);
}
function Al(e, t, n, r, a) {
  let i = {
    ...t
  };
  t.days ? i.days-- : t.weeks ? i.weeks-- : t.months ? i.months-- : t.years && i.years--;
  let l = pn(e, t, n).subtract(i);
  return Cr(e, l, t, n, r, a);
}
function Cr(e, t, n, r, a, i) {
  return a && e.compare(a) >= 0 && (t = io(t, pn(_e(a), n, r))), i && e.compare(i) <= 0 && (t = ao(t, Al(_e(i), n, r))), t;
}
function Gt(e, t, n) {
  return t && (e = io(e, _e(t))), n && (e = ao(e, _e(n))), e;
}
function C3(e, t, n) {
  if (!n)
    return e;
  for (; e.compare(t) >= 0 && n(e); )
    e = e.subtract({
      days: 1
    });
  if (e.compare(t) >= 0)
    return e;
}
function E3(e) {
  let t = K(() => new zt(e.locale), [
    e.locale
  ]), n = K(() => t.resolvedOptions(), [
    t
  ]), { locale: r, createCalendar: a, visibleDuration: i = {
    months: 1
  }, minValue: l, maxValue: o, selectionAlignment: u, isDateUnavailable: s, pageBehavior: d = "visible" } = e, c = K(() => a(n.calendar), [
    a,
    n.calendar
  ]), [p, f] = Ke(e.value, e.defaultValue, e.onChange), b = K(() => p ? Ce(_e(p), c) : null, [
    p,
    c
  ]), m = K(() => p && "timeZone" in p ? p.timeZone : n.timeZone, [
    p,
    n.timeZone
  ]), h = K(() => e.focusedValue ? Gt(Ce(_e(e.focusedValue), c), l, o) : void 0, [
    e.focusedValue,
    c,
    l,
    o
  ]), y = K(() => Gt(e.defaultFocusedValue ? Ce(_e(e.defaultFocusedValue), c) : b || Ce(Qa(m), c), l, o), [
    e.defaultFocusedValue,
    b,
    m,
    c,
    l,
    o
  ]), [$, x] = Ke(h, y, e.onFocusChange), [C, P] = Z(() => {
    switch (u) {
      case "start":
        return pn($, i, r, l, o);
      case "end":
        return Al($, i, r, l, o);
      case "center":
      default:
        return Fl($, i, r, l, o);
    }
  }), [B, M] = Z(e.autoFocus || !1), v = K(() => {
    let D = {
      ...i
    };
    return D.days ? D.days-- : D.days = -1, C.add(D);
  }, [
    C,
    i
  ]), [R, F] = Z(c.identifier);
  if (c.identifier !== R) {
    let D = Ce($, c);
    P(Fl(D, i, r, l, o)), x(D), F(c.identifier);
  }
  Hn($, l, o) ? x(Gt($, l, o)) : $.compare(C) < 0 ? P(Al($, i, r, l, o)) : $.compare(v) > 0 && P(pn($, i, r, l, o));
  function E(D) {
    D = Gt(D, l, o), x(D);
  }
  function S(D) {
    if (!e.isDisabled && !e.isReadOnly) {
      if (D = Gt(D, l, o), D = C3(D, C, s), !D)
        return;
      D = Ce(D, (p == null ? void 0 : p.calendar) || new Ue()), p && "hour" in p ? f(p.set(D)) : f(D);
    }
  }
  let w = K(() => b ? s && s(b) ? !0 : Hn(b, l, o) : !1, [
    b,
    s,
    l,
    o
  ]), k = e.isInvalid || e.validationState === "invalid" || w, z = k ? "invalid" : null, T = K(() => d === "visible" ? i : Ji(i), [
    d,
    i
  ]);
  return {
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    value: b,
    setValue: S,
    visibleRange: {
      start: C,
      end: v
    },
    minValue: l,
    maxValue: o,
    focusedDate: $,
    timeZone: m,
    validationState: z,
    isValueInvalid: k,
    setFocusedDate(D) {
      E(D), M(!0);
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
      x(Gt($.add(T), l, o)), P(pn(Cr($, D, T, r, l, o), T, r));
    },
    focusPreviousPage() {
      let D = C.subtract(T);
      x(Gt($.subtract(T), l, o)), P(pn(Cr($, D, T, r, l, o), T, r));
    },
    focusSectionStart() {
      i.days ? E(C) : i.weeks ? E(gr($, r)) : (i.months || i.years) && E(gn($));
    },
    focusSectionEnd() {
      i.days ? E(v) : i.weeks ? E(T$($, r)) : (i.months || i.years) && E(Ta($));
    },
    focusNextSection(D) {
      if (!D && !i.days) {
        E($.add(Ji(i)));
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
        E($.subtract(Ji(i)));
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
    setFocused: M,
    isInvalid(D) {
      return Hn(D, l, o);
    },
    isSelected(D) {
      return b != null && Fe(D, b) && !this.isCellDisabled(D) && !this.isCellUnavailable(D);
    },
    isCellFocused(D) {
      return B && $ && Fe(D, $);
    },
    isCellDisabled(D) {
      return e.isDisabled || D.compare(C) < 0 || D.compare(v) > 0 || this.isInvalid(D, l, o);
    },
    isCellUnavailable(D) {
      return e.isDateUnavailable && e.isDateUnavailable(D);
    },
    isPreviousVisibleRangeInvalid() {
      let D = C.subtract({
        days: 1
      });
      return Fe(D, C) || this.isInvalid(D, l, o);
    },
    isNextVisibleRangeInvalid() {
      let D = v.add({
        days: 1
      });
      return Fe(D, v) || this.isInvalid(D, l, o);
    },
    getDatesInWeek(D, H = C) {
      let _ = H.add({
        weeks: D
      }), L = [];
      _ = gr(_, r);
      let V = no(_, r);
      for (let N = 0; N < V; N++)
        L.push(null);
      for (; L.length < 7; ) {
        L.push(_);
        let N = _.add({
          days: 1
        });
        if (Fe(_, N))
          break;
        _ = N;
      }
      for (; L.length < 7; )
        L.push(null);
      return L;
    }
  };
}
function Ji(e) {
  let t = {
    ...e
  };
  for (let n in e)
    t[n] = 1;
  return t;
}
function F5(e) {
  let { value: t, defaultValue: n, onChange: r, createCalendar: a, locale: i, visibleDuration: l = {
    months: 1
  }, minValue: o, maxValue: u, ...s } = e, [d, c] = Ke(t, n || null, r), [p, f] = Z(null), b = "center";
  if (d && d.start && d.end) {
    let H = Fl(_e(d.start), l, i, o, u).add(l).subtract({
      days: 1
    });
    d.end.compare(H) > 0 && (b = "start");
  }
  let m = I(null), [h, y] = Z(null), $ = K(() => io(o, h == null ? void 0 : h.start), [
    o,
    h
  ]), x = K(() => ao(u, h == null ? void 0 : h.end), [
    u,
    h
  ]), C = E3({
    ...s,
    value: d && d.start,
    createCalendar: a,
    locale: i,
    visibleDuration: l,
    minValue: $,
    maxValue: x,
    selectionAlignment: b
  }), P = (D) => {
    D && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (m.current = {
      start: cs(D, C, -1),
      end: cs(D, C, 1)
    }, y(m.current)) : (m.current = null, y(null));
  }, [B, M] = Z(C.visibleRange);
  (!cl(C.visibleRange.start, B.start) || !cl(C.visibleRange.end, B.end)) && (P(p), M(C.visibleRange));
  let v = (D) => {
    D ? (f(D), P(D)) : (f(null), P(null));
  }, R = p ? Xi(p, C.focusedDate) : d && Xi(d.start, d.end), F = (D) => {
    if (!e.isReadOnly && (D = Gt(D, $, x), D = C3(D, C.visibleRange.start, e.isDateUnavailable), !!D))
      if (!p)
        v(D);
      else {
        let H = Xi(p, D);
        c({
          start: ds(H.start, d == null ? void 0 : d.start),
          end: ds(H.end, d == null ? void 0 : d.end)
        }), v(null);
      }
  }, [E, S] = Z(!1), { isDateUnavailable: w } = e, k = K(() => !d || p ? !1 : w && (w(d.start) || w(d.end)) ? !0 : Hn(d.start, o, u) || Hn(d.end, o, u), [
    w,
    d,
    p,
    o,
    u
  ]), z = e.isInvalid || e.validationState === "invalid" || k;
  return {
    ...C,
    value: d,
    setValue: c,
    anchorDate: p,
    setAnchorDate: v,
    highlightedRange: R,
    validationState: z ? "invalid" : null,
    isValueInvalid: z,
    selectFocusedDate() {
      F(C.focusedDate);
    },
    selectDate: F,
    highlightDate(D) {
      p && C.setFocusedDate(D);
    },
    isSelected(D) {
      return R && D.compare(R.start) >= 0 && D.compare(R.end) <= 0 && !C.isCellDisabled(D) && !C.isCellUnavailable(D);
    },
    isInvalid(D) {
      var H, _;
      return C.isInvalid(D) || Hn(D, (H = m.current) === null || H === void 0 ? void 0 : H.start, (_ = m.current) === null || _ === void 0 ? void 0 : _.end);
    },
    isDragging: E,
    setDragging: S
  };
}
function Xi(e, t) {
  return !e || !t ? null : (t.compare(e) < 0 && ([e, t] = [
    t,
    e
  ]), {
    start: _e(e),
    end: _e(t)
  });
}
function ds(e, t) {
  return e = Ce(e, (t == null ? void 0 : t.calendar) || new Ue()), t && "hour" in t ? t.set(e) : e;
}
function cs(e, t, n) {
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
function A5(e = {}) {
  let [t, n] = Ke(e.value, e.defaultValue || [], e.onChange), r = !!e.isRequired && t.length === 0, a = I(/* @__PURE__ */ new Map()), i = xt({
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
      d.isInvalid ? c.set(s, d) : c.delete(s), a.current = c, i.updateValidation(Dr(...c.values()));
    },
    validationState: (o = e.validationState) !== null && o !== void 0 ? o : l ? "invalid" : null,
    isInvalid: l,
    isRequired: r
  };
}
class ht extends Set {
  constructor(t, n, r) {
    super(t), t instanceof ht ? (this.anchorKey = n || t.anchorKey, this.currentKey = r || t.currentKey) : (this.anchorKey = n, this.currentKey = r);
  }
}
function T5(e, t) {
  if (e.size !== t.size)
    return !1;
  for (let n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Bo(e) {
  let { selectionMode: t = "none", disallowEmptySelection: n, allowDuplicateSelectionEvents: r, selectionBehavior: a = "toggle", disabledBehavior: i = "all" } = e, l = I(!1), [, o] = Z(!1), u = I(null), s = I(null), [, d] = Z(null), c = K(() => fs(e.selectedKeys), [
    e.selectedKeys
  ]), p = K(() => fs(e.defaultSelectedKeys, new ht()), [
    e.defaultSelectedKeys
  ]), [f, b] = Ke(c, p, e.onSelectionChange), m = K(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), [h, y] = Z(a);
  a === "replace" && h === "toggle" && typeof f == "object" && f.size === 0 && y("replace");
  let $ = I(a);
  return J(() => {
    a !== $.current && (y(a), $.current = a);
  }, [
    a
  ]), {
    selectionMode: t,
    disallowEmptySelection: n,
    selectionBehavior: h,
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
      (r || !T5(x, f)) && b(x);
    },
    disabledKeys: m,
    disabledBehavior: i
  };
}
function fs(e, t) {
  return e ? e === "all" ? "all" : new ht(e) : t;
}
class ko {
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
      (!t || r && qi(this.collection, r, t) < 0) && (t = r);
    }
    return t == null ? void 0 : t.key;
  }
  get lastSelectedKey() {
    let t = null;
    for (let n of this.state.selectedKeys) {
      let r = this.collection.getItem(n);
      (!t || r && qi(this.collection, r, t) > 0) && (t = r);
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
      n = new ht([
        t
      ], t, t);
    else {
      let r = this.state.selectedKeys, a = r.anchorKey || t;
      n = new ht(r, a, t);
      for (let i of this.getKeyRange(a, r.currentKey || t))
        n.delete(i);
      for (let i of this.getKeyRange(t, a))
        this.canSelectItem(i) && n.add(i);
    }
    this.state.setSelectedKeys(n);
  }
  getKeyRange(t, n) {
    let r = this.collection.getItem(t), a = this.collection.getItem(n);
    return r && a ? qi(this.collection, r, a) <= 0 ? this.getKeyRangeInternal(t, n) : this.getKeyRangeInternal(n, t) : [];
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
    let n = new ht(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), !(this.disallowEmptySelection && n.size === 0) && this.state.setSelectedKeys(n);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(t) {
    if (this.selectionMode === "none" || (t = this.getKey(t), t == null))
      return;
    let n = this.canSelectItem(t) ? new ht([
      t
    ], t, t) : new ht();
    this.state.setSelectedKeys(n);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(t) {
    if (this.selectionMode === "none")
      return;
    let n = new ht();
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
          a.type === "item" && t.push(r), a.hasChildNodes && (this.allowsCellSelection || a.type !== "item") && n(Rt(we(a, this.collection)).key);
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
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new ht());
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
class Tl {
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
function ci(e) {
  let { filter: t } = e, n = Bo(e), r = K(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), a = Q((s) => t ? new Tl(t(s)) : new Tl(s), [
    t
  ]), i = K(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [
    e.suppressTextValueWarning
  ]), l = $o(e, a, i), o = K(() => new ko(l, n), [
    l,
    n
  ]);
  const u = I(null);
  return J(() => {
    if (n.focusedKey != null && !l.getItem(n.focusedKey)) {
      const s = u.current.getItem(n.focusedKey), d = [
        ...u.current.getKeys()
      ].map((m) => {
        const h = u.current.getItem(m);
        return h.type === "item" ? h : null;
      }).filter((m) => m !== null), c = [
        ...l.getKeys()
      ].map((m) => {
        const h = l.getItem(m);
        return h.type === "item" ? h : null;
      }).filter((m) => m !== null), p = d.length - c.length;
      let f = Math.min(p > 1 ? Math.max(s.index - p + 1, 0) : s.index, c.length - 1), b;
      for (; f >= 0; ) {
        if (!o.isDisabled(c[f].key)) {
          b = c[f];
          break;
        }
        f < c.length - 1 ? f++ : (f > s.index && (f = s.index), f--);
      }
      n.setFocusedKey(b ? b.key : null);
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
function Fo(e) {
  var t;
  let [n, r] = Ke(e.selectedKey, (t = e.defaultSelectedKey) !== null && t !== void 0 ? t : null, e.onSelectionChange), a = K(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: i, disabledKeys: l, selectionManager: o } = ci({
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
function En(e) {
  let [t, n] = Ke(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const r = Q(() => {
    n(!0);
  }, [
    n
  ]), a = Q(() => {
    n(!1);
  }, [
    n
  ]), i = Q(() => {
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
function M5(e) {
  var t, n;
  let { defaultFilter: r, menuTrigger: a = "input", allowsEmptyCollection: i = !1, allowsCustomValue: l, shouldCloseOnBlur: o = !0 } = e, [u, s] = Z(!1), [d, c] = Z(!1), [p, f] = Z(null), b = (ue) => {
    e.onSelectionChange && e.onSelectionChange(ue), ue === $ && (re(), V());
  };
  var m;
  let { collection: h, selectionManager: y, selectedKey: $, setSelectedKey: x, selectedItem: C, disabledKeys: P } = Fo({
    ...e,
    onSelectionChange: b,
    items: (m = e.items) !== null && m !== void 0 ? m : e.defaultItems
  });
  var B, M;
  let [v, R] = Ke(e.inputValue, (M = (B = e.defaultInputValue) !== null && B !== void 0 ? B : (t = h.getItem($)) === null || t === void 0 ? void 0 : t.textValue) !== null && M !== void 0 ? M : "", e.onInputChange), F = h, E = K(() => (
    // No default filter if items are controlled.
    e.items != null || !r ? h : R5(h, v, r)
  ), [
    h,
    v,
    r,
    e.items
  ]), [S, w] = Z(E), k = I("focus"), T = En({
    ...e,
    onOpenChange: (ue) => {
      e.onOpenChange && e.onOpenChange(ue, ue ? k.current : void 0), y.setFocused(ue), ue || y.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), D = (ue = null, ve) => {
    let Ie = ve === "manual" || ve === "focus" && a === "focus";
    (i || E.size > 0 || Ie && F.size > 0 || e.items) && (Ie && !T.isOpen && e.items === void 0 && s(!0), k.current = ve, f(ue), T.open());
  }, H = (ue = null, ve) => {
    let Ie = ve === "manual" || ve === "focus" && a === "focus";
    !(i || E.size > 0 || Ie && F.size > 0 || e.items) && !T.isOpen || (Ie && !T.isOpen && e.items === void 0 && s(!0), T.isOpen || (k.current = ve), L(ue));
  }, _ = Q(() => {
    w(u ? F : E);
  }, [
    u,
    F,
    E
  ]), L = Q((ue = null) => {
    T.isOpen && _(), f(ue), T.toggle();
  }, [
    T,
    _
  ]), V = Q(() => {
    T.isOpen && (_(), T.close());
  }, [
    T,
    _
  ]), [N, G] = Z(v), re = () => {
    var ue, ve;
    let Ie = (ve = (ue = h.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && ve !== void 0 ? ve : "";
    G(Ie), R(Ie);
  };
  var se, Pe;
  let O = I((Pe = (se = e.selectedKey) !== null && se !== void 0 ? se : e.defaultSelectedKey) !== null && Pe !== void 0 ? Pe : null);
  var X;
  let ce = I((X = (n = h.getItem($)) === null || n === void 0 ? void 0 : n.textValue) !== null && X !== void 0 ? X : "");
  J(() => {
    var ue;
    d && (E.size > 0 || i) && !T.isOpen && v !== N && a !== "manual" && D(null, "input"), !u && !i && T.isOpen && E.size === 0 && V(), $ != null && $ !== O.current && V(), v !== N && (y.setFocusedKey(null), s(!1), v === "" && (e.inputValue === void 0 || e.selectedKey === void 0) && x(null)), $ !== O.current && (e.inputValue === void 0 || e.selectedKey === void 0) ? re() : N !== v && G(v);
    var ve;
    let Ie = (ve = (ue = h.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && ve !== void 0 ? ve : "";
    !d && $ != null && e.inputValue === void 0 && $ === O.current && ce.current !== Ie && (G(Ie), R(Ie)), O.current = $, ce.current = Ie;
  });
  let xe = xt({
    ...e,
    value: K(() => ({
      inputValue: v,
      selectedKey: $
    }), [
      v,
      $
    ])
  }), ae = () => {
    l && $ == null ? rt() : Sn();
  }, rt = () => {
    O.current = null, x(null), V();
  }, Sn = () => {
    if (e.selectedKey !== void 0 && e.inputValue !== void 0) {
      var ue;
      e.onSelectionChange($);
      var ve;
      let Ie = (ve = (ue = h.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && ve !== void 0 ? ve : "";
      G(Ie), V();
    } else
      re(), V();
  };
  const Jn = () => {
    if (l) {
      var ue, ve;
      const Ie = (ve = (ue = h.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && ve !== void 0 ? ve : "";
      v === Ie ? Sn() : rt();
    } else
      Sn();
  };
  let ta = () => {
    T.isOpen && y.focusedKey != null ? $ === y.focusedKey ? Sn() : x(y.focusedKey) : Jn();
  }, Xn = I(v), Pi = (ue) => {
    ue ? (Xn.current = v, a === "focus" && D(null, "focus")) : (o && Jn(), v !== Xn.current && xe.commitValidation()), c(ue);
  }, wi = K(() => T.isOpen ? u ? F : E : S, [
    T.isOpen,
    F,
    E,
    u,
    S
  ]);
  return {
    ...xe,
    ...T,
    focusStrategy: p,
    toggle: H,
    open: D,
    close: Jn,
    selectionManager: y,
    selectedKey: $,
    setSelectedKey: x,
    disabledKeys: P,
    isFocused: d,
    setFocused: Pi,
    selectedItem: C,
    collection: wi,
    inputValue: v,
    setInputValue: R,
    commit: ta,
    revert: ae
  };
}
function R5(e, t, n) {
  return new Tl(P3(e, e, t, n));
}
function P3(e, t, n, r) {
  let a = [];
  for (let i of t)
    if (i.type === "section" && i.hasChildNodes) {
      let l = P3(e, we(i, e), n, r);
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
var w3 = {};
w3 = {
  rangeOverflow: (e) => `يجب أن تكون القيمة ${e.maxValue} أو قبل ذلك.`,
  rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
  rangeUnderflow: (e) => `يجب أن تكون القيمة ${e.minValue} أو بعد ذلك.`,
  unavailableDate: "البيانات المحددة غير متاحة."
};
var S3 = {};
S3 = {
  rangeOverflow: (e) => `Стойността трябва да е ${e.maxValue} или по-ранна.`,
  rangeReversed: "Началната дата трябва да е преди крайната.",
  rangeUnderflow: (e) => `Стойността трябва да е ${e.minValue} или по-късно.`,
  unavailableDate: "Избраната дата не е налична."
};
var B3 = {};
B3 = {
  rangeOverflow: (e) => `Hodnota musí být ${e.maxValue} nebo dřívější.`,
  rangeReversed: "Datum zahájení musí předcházet datu ukončení.",
  rangeUnderflow: (e) => `Hodnota musí být ${e.minValue} nebo pozdější.`,
  unavailableDate: "Vybrané datum není k dispozici."
};
var k3 = {};
k3 = {
  rangeOverflow: (e) => `Værdien skal være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen skal være før slutdatoen.",
  rangeUnderflow: (e) => `Værdien skal være ${e.minValue} eller nyere.`,
  unavailableDate: "Den valgte dato er ikke tilgængelig."
};
var F3 = {};
F3 = {
  rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder früher sein.`,
  rangeReversed: "Das Anfangsdatum muss vor dem Enddatum liegen.",
  rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder später sein.`,
  unavailableDate: "Das ausgewählte Datum ist nicht verfügbar."
};
var A3 = {};
A3 = {
  rangeOverflow: (e) => `Η τιμή πρέπει να είναι ${e.maxValue} ή παλαιότερη.`,
  rangeReversed: "Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
  rangeUnderflow: (e) => `Η τιμή πρέπει να είναι ${e.minValue} ή μεταγενέστερη.`,
  unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη."
};
var T3 = {};
T3 = {
  rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
  rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
  rangeReversed: "Start date must be before end date.",
  unavailableDate: "Selected date unavailable."
};
var M3 = {};
M3 = {
  rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
  rangeReversed: "La fecha de inicio debe ser anterior a la fecha de finalización.",
  rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
  unavailableDate: "Fecha seleccionada no disponible."
};
var R3 = {};
R3 = {
  rangeOverflow: (e) => `Väärtus peab olema ${e.maxValue} või varasem.`,
  rangeReversed: "Alguskuupäev peab olema enne lõppkuupäeva.",
  rangeUnderflow: (e) => `Väärtus peab olema ${e.minValue} või hilisem.`,
  unavailableDate: "Valitud kuupäev pole saadaval."
};
var I3 = {};
I3 = {
  rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sitä aikaisempi.`,
  rangeReversed: "Aloituspäivän on oltava ennen lopetuspäivää.",
  rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sitä myöhäisempi.`,
  unavailableDate: "Valittu päivämäärä ei ole käytettävissä."
};
var N3 = {};
N3 = {
  rangeOverflow: (e) => `La valeur doit être ${e.maxValue} ou antérieure.`,
  rangeReversed: "La date de début doit être antérieure à la date de fin.",
  rangeUnderflow: (e) => `La valeur doit être ${e.minValue} ou ultérieure.`,
  unavailableDate: "La date sélectionnée n’est pas disponible."
};
var K3 = {};
K3 = {
  rangeOverflow: (e) => `הערך חייב להיות ${e.maxValue} או מוקדם יותר.`,
  rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
  rangeUnderflow: (e) => `הערך חייב להיות ${e.minValue} או מאוחר יותר.`,
  unavailableDate: "התאריך הנבחר אינו זמין."
};
var z3 = {};
z3 = {
  rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
  rangeReversed: "Datum početka mora biti prije datuma završetka.",
  rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
  unavailableDate: "Odabrani datum nije dostupan."
};
var V3 = {};
V3 = {
  rangeOverflow: (e) => `Az értéknek ${e.maxValue} vagy korábbinak kell lennie.`,
  rangeReversed: "A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",
  rangeUnderflow: (e) => `Az értéknek ${e.minValue} vagy későbbinek kell lennie.`,
  unavailableDate: "A kiválasztott dátum nem érhető el."
};
var L3 = {};
L3 = {
  rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
  rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
  rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
  unavailableDate: "Data selezionata non disponibile."
};
var O3 = {};
O3 = {
  rangeOverflow: (e) => `値は ${e.maxValue} 以下にする必要があります。`,
  rangeReversed: "開始日は終了日より前にする必要があります。",
  rangeUnderflow: (e) => `値は ${e.minValue} 以上にする必要があります。`,
  unavailableDate: "選択した日付は使用できません。"
};
var j3 = {};
j3 = {
  rangeOverflow: (e) => `값은 ${e.maxValue} 이전이어야 합니다.`,
  rangeReversed: "시작일은 종료일 이전이어야 합니다.",
  rangeUnderflow: (e) => `값은 ${e.minValue} 이상이어야 합니다.`,
  unavailableDate: "선택한 날짜를 사용할 수 없습니다."
};
var H3 = {};
H3 = {
  rangeOverflow: (e) => `Reikšmė turi būti ${e.maxValue} arba ankstesnė.`,
  rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
  rangeUnderflow: (e) => `Reikšmė turi būti ${e.minValue} arba naujesnė.`,
  unavailableDate: "Pasirinkta data nepasiekiama."
};
var _3 = {};
_3 = {
  rangeOverflow: (e) => `Vērtībai ir jābūt ${e.maxValue} vai agrākai.`,
  rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
  rangeUnderflow: (e) => `Vērtībai ir jābūt ${e.minValue} vai vēlākai.`,
  unavailableDate: "Atlasītais datums nav pieejams."
};
var U3 = {};
U3 = {
  rangeOverflow: (e) => `Verdien må være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen må være før sluttdatoen.",
  rangeUnderflow: (e) => `Verdien må være ${e.minValue} eller senere.`,
  unavailableDate: "Valgt dato utilgjengelig."
};
var W3 = {};
W3 = {
  rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
  rangeReversed: "De startdatum moet voor de einddatum liggen.",
  rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
  unavailableDate: "Geselecteerde datum niet beschikbaar."
};
var G3 = {};
G3 = {
  rangeOverflow: (e) => `Wartość musi mieć wartość ${e.maxValue} lub wcześniejszą.`,
  rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
  rangeUnderflow: (e) => `Wartość musi mieć wartość ${e.minValue} lub późniejszą.`,
  unavailableDate: "Wybrana data jest niedostępna."
};
var Z3 = {};
Z3 = {
  rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data inicial deve ser anterior à data final.",
  rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var q3 = {};
q3 = {
  rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data de início deve ser anterior à data de fim.",
  rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var Y3 = {};
Y3 = {
  rangeOverflow: (e) => `Valoarea trebuie să fie ${e.maxValue} sau anterioară.`,
  rangeReversed: "Data de început trebuie să fie anterioară datei de sfârșit.",
  rangeUnderflow: (e) => `Valoarea trebuie să fie ${e.minValue} sau ulterioară.`,
  unavailableDate: "Data selectată nu este disponibilă."
};
var J3 = {};
J3 = {
  rangeOverflow: (e) => `Значение должно быть не позже ${e.maxValue}.`,
  rangeReversed: "Дата начала должна предшествовать дате окончания.",
  rangeUnderflow: (e) => `Значение должно быть не раньше ${e.minValue}.`,
  unavailableDate: "Выбранная дата недоступна."
};
var X3 = {};
X3 = {
  rangeOverflow: (e) => `Hodnota musí byť ${e.maxValue} alebo skoršia.`,
  rangeReversed: "Dátum začiatku musí byť skorší ako dátum konca.",
  rangeUnderflow: (e) => `Hodnota musí byť ${e.minValue} alebo neskoršia.`,
  unavailableDate: "Vybratý dátum je nedostupný."
};
var Q3 = {};
Q3 = {
  rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starejša.`,
  rangeReversed: "Začetni datum mora biti pred končnim datumom.",
  rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novejša.`,
  unavailableDate: "Izbrani datum ni na voljo."
};
var eh = {};
eh = {
  rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
  rangeReversed: "Datum početka mora biti pre datuma završetka.",
  rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
  unavailableDate: "Izabrani datum nije dostupan."
};
var th = {};
th = {
  rangeOverflow: (e) => `Värdet måste vara ${e.maxValue} eller tidigare.`,
  rangeReversed: "Startdatumet måste vara före slutdatumet.",
  rangeUnderflow: (e) => `Värdet måste vara ${e.minValue} eller senare.`,
  unavailableDate: "Det valda datumet är inte tillgängligt."
};
var nh = {};
nh = {
  rangeOverflow: (e) => `Değer, ${e.maxValue} veya öncesi olmalıdır.`,
  rangeReversed: "Başlangıç tarihi bitiş tarihinden önce olmalıdır.",
  rangeUnderflow: (e) => `Değer, ${e.minValue} veya sonrası olmalıdır.`,
  unavailableDate: "Seçilen tarih kullanılamıyor."
};
var rh = {};
rh = {
  rangeOverflow: (e) => `Значення має бути не пізніше ${e.maxValue}.`,
  rangeReversed: "Дата початку має передувати даті завершення.",
  rangeUnderflow: (e) => `Значення має бути не раніше ${e.minValue}.`,
  unavailableDate: "Вибрана дата недоступна."
};
var ah = {};
ah = {
  rangeOverflow: (e) => `值必须是 ${e.maxValue} 或更早日期。`,
  rangeReversed: "开始日期必须早于结束日期。",
  rangeUnderflow: (e) => `值必须是 ${e.minValue} 或更晚日期。`,
  unavailableDate: "所选日期不可用。"
};
var ih = {};
ih = {
  rangeOverflow: (e) => `值必須是 ${e.maxValue} 或更早。`,
  rangeReversed: "開始日期必須在結束日期之前。",
  rangeUnderflow: (e) => `值必須是 ${e.minValue} 或更晚。`,
  unavailableDate: "所選日期無法使用。"
};
function I5(e) {
  return e && e.__esModule ? e.default : e;
}
var lh = {};
lh = {
  "ar-AE": w3,
  "bg-BG": S3,
  "cs-CZ": B3,
  "da-DK": k3,
  "de-DE": F3,
  "el-GR": A3,
  "en-US": T3,
  "es-ES": M3,
  "et-EE": R3,
  "fi-FI": I3,
  "fr-FR": N3,
  "he-IL": K3,
  "hr-HR": z3,
  "hu-HU": V3,
  "it-IT": L3,
  "ja-JP": O3,
  "ko-KR": j3,
  "lt-LT": H3,
  "lv-LV": _3,
  "nb-NO": U3,
  "nl-NL": W3,
  "pl-PL": G3,
  "pt-BR": Z3,
  "pt-PT": q3,
  "ro-RO": Y3,
  "ru-RU": J3,
  "sk-SK": X3,
  "sl-SI": Q3,
  "sr-SP": eh,
  "sv-SE": th,
  "tr-TR": nh,
  "uk-UA": rh,
  "zh-CN": ah,
  "zh-TW": ih
};
const oh = new Dn(/* @__PURE__ */ I5(lh));
function uh() {
  return typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
}
function _a(e, t, n, r, a) {
  let i = e != null && n != null && e.compare(n) > 0, l = e != null && t != null && e.compare(t) < 0, o = e != null && (r == null ? void 0 : r(e)) || !1, u = i || l || o, s = [];
  if (u) {
    let d = uh(), c = Dn.getGlobalDictionaryForPackage("@react-stately/datepicker") || oh, p = new nd(d, c), f = new zt(d, Un({}, a)), b = f.resolvedOptions().timeZone;
    l && s.push(p.format("rangeUnderflow", {
      minValue: f.format(t.toDate(b))
    })), i && s.push(p.format("rangeOverflow", {
      maxValue: f.format(n.toDate(b))
    })), o && s.push(p.format("unavailableDate"));
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
function N5(e, t, n, r, a) {
  let i = _a(e == null ? void 0 : e.start, t, n, r, a), l = _a(e == null ? void 0 : e.end, t, n, r, a), o = Dr(i, l);
  return e.end != null && e.start != null && e.end.compare(e.start) < 0 && (o = Dr(o, {
    isInvalid: !0,
    validationErrors: [
      oh.getStringForLocale("rangeReversed", uh())
    ],
    validationDetails: {
      ...ri,
      rangeUnderflow: !0,
      rangeOverflow: !0,
      valid: !1
    }
  })), o;
}
const K5 = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}, z5 = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
function Un(e, t) {
  e = {
    ...t.shouldForceLeadingZeros ? z5 : K5,
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
function Vn(e) {
  return e && "hour" in e ? e : new Vr();
}
function sh(e, t) {
  if (e === null)
    return null;
  if (e)
    return Ce(e, t);
}
function nr(e, t, n, r) {
  if (e)
    return sh(e, n);
  let a = Ce(ad(r).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), n);
  return t === "year" || t === "month" || t === "day" ? _e(a) : r ? a : $t(a);
}
function Ao(e, t) {
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
function V5(e) {
  let t = En(e), [n, r] = Ke(e.value, e.defaultValue || null, e.onChange), a = n || e.placeholderValue, [i, l] = Ao(a, e.granularity), o = n != null ? n.toDate(l ?? "UTC") : null, u = i === "hour" || i === "minute" || i === "second";
  var s;
  let d = (s = e.shouldCloseOnSelect) !== null && s !== void 0 ? s : !0, [c, p] = Z(null), [f, b] = Z(null);
  if (n && (c = n, "hour" in n && (f = n)), a && !(i in a))
    throw new Error("Invalid granularity " + i + " for value " + a.toString());
  let m = (n == null ? void 0 : n.calendar.identifier) === "gregory" && n.era === "BC", h = K(() => ({
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
  ]), { minValue: y, maxValue: $, isDateUnavailable: x } = e, C = K(() => _a(n, y, $, x, h), [
    n,
    y,
    $,
    x,
    h
  ]), P = xt({
    ...e,
    value: n,
    builtinValidation: C
  }), B = P.displayValidation.isInvalid, M = e.validationState || (B ? "invalid" : null), v = (E, S) => {
    r("timeZone" in S ? S.set(_e(E)) : $t(E, S)), p(null), b(null), P.commitValidation();
  };
  return {
    ...P,
    value: n,
    setValue: r,
    dateValue: c,
    timeValue: f,
    setDateValue: (E) => {
      let S = typeof d == "function" ? d() : d;
      u ? f || S ? v(E, f || Vn(e.placeholderValue)) : p(E) : (r(E), P.commitValidation()), S && t.setOpen(!1);
    },
    setTimeValue: (E) => {
      c && E ? v(c, E) : b(E);
    },
    granularity: i,
    hasTime: u,
    ...t,
    setOpen(E) {
      !E && !n && c && u && v(c, f || Vn(e.placeholderValue)), t.setOpen(E);
    },
    validationState: M,
    isInvalid: B,
    formatValue(E, S) {
      if (!o)
        return "";
      let w = Un(S, h);
      return new zt(E, w).format(o);
    }
  };
}
const L5 = new Dn({
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
function O5(e, t, n) {
  return e === "era" || e === "dayPeriod" ? t : e === "year" || e === "month" || e === "day" ? L5.getStringForLocale(e, n) : "––";
}
const pa = {
  year: !0,
  month: !0,
  day: !0,
  hour: !0,
  minute: !0,
  second: !0,
  dayPeriod: !0,
  era: !0
}, ps = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15
}, j5 = {
  dayperiod: "dayPeriod"
};
function To(e) {
  let { locale: t, createCalendar: n, hideTimeZone: r, isDisabled: a, isReadOnly: i, isRequired: l, minValue: o, maxValue: u, isDateUnavailable: s } = e, d = e.value || e.defaultValue || e.placeholderValue, [c, p] = Ao(d, e.granularity), f = p || "UTC";
  if (d && !(c in d))
    throw new Error("Invalid granularity " + c + " for value " + d.toString());
  let b = K(() => new zt(t), [
    t
  ]), m = K(() => n(b.resolvedOptions().calendar), [
    n,
    b
  ]), [h, y] = Ke(e.value, e.defaultValue, e.onChange), $ = K(() => sh(h, m), [
    h,
    m
  ]), [x, C] = Z(() => nr(e.placeholderValue, c, m, p)), P = $ || x, B = m.identifier === "gregory" && P.era === "BC", M = K(() => {
    var O;
    return {
      granularity: c,
      maxGranularity: (O = e.maxGranularity) !== null && O !== void 0 ? O : "year",
      timeZone: p,
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
    p,
    r,
    B
  ]), v = K(() => Un({}, M), [
    M
  ]), R = K(() => new zt(t, v), [
    t,
    v
  ]), F = K(() => R.resolvedOptions(), [
    R
  ]), E = K(() => R.formatToParts(/* @__PURE__ */ new Date()).filter((O) => pa[O.type]).reduce((O, X) => (O[X.type] = !0, O), {}), [
    R
  ]), [S, w] = Z(() => e.value || e.defaultValue ? {
    ...E
  } : {}), k = I(), z = I(m.identifier);
  J(() => {
    m.identifier !== z.current && (z.current = m.identifier, C((O) => Object.keys(S).length > 0 ? Ce(O, m) : nr(e.placeholderValue, c, m, p)));
  }, [
    m,
    c,
    S,
    p,
    e.placeholderValue
  ]), h && Object.keys(S).length < Object.keys(E).length && (S = {
    ...E
  }, w(S)), h == null && Object.keys(S).length === Object.keys(E).length && (S = {}, w(S), C(nr(e.placeholderValue, c, m, p)));
  let T = $ && Object.keys(S).length >= Object.keys(E).length ? $ : x, D = (O) => {
    if (e.isDisabled || e.isReadOnly)
      return;
    let X = Object.keys(S), ce = Object.keys(E);
    O == null ? (y(null), C(nr(e.placeholderValue, c, m, p)), w({})) : X.length >= ce.length || X.length === ce.length - 1 && E.dayPeriod && !S.dayPeriod && k.current !== "dayPeriod" ? (O = Ce(O, (d == null ? void 0 : d.calendar) || new Ue()), y(O)) : C(O), k.current = null;
  }, H = K(() => T.toDate(f), [
    T,
    f
  ]), _ = K(() => R.formatToParts(H).map((O) => {
    let X = pa[O.type];
    O.type === "era" && m.getEras().length === 1 && (X = !1);
    let ce = pa[O.type] && !S[O.type], xe = pa[O.type] ? O5(O.type, O.value, t) : null;
    return {
      type: j5[O.type] || O.type,
      text: ce ? xe : O.value,
      ...H5(T, O.type, F),
      isPlaceholder: ce,
      placeholder: xe,
      isEditable: X
    };
  }), [
    H,
    S,
    R,
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
      D(_5(T, O, X, F));
    else {
      L(O);
      let ce = Object.keys(S), xe = Object.keys(E);
      (ce.length >= xe.length || ce.length === xe.length - 1 && E.dayPeriod && !S.dayPeriod) && D(T);
    }
  }, N = K(() => _a(h, o, u, s, M), [
    h,
    o,
    u,
    s,
    M
  ]), G = xt({
    ...e,
    value: h,
    builtinValidation: N
  }), re = G.displayValidation.isInvalid, se = e.validationState || (re ? "invalid" : null);
  var Pe;
  return {
    ...G,
    value: $,
    dateValue: H,
    calendar: m,
    setValue: D,
    segments: _,
    dateFormatter: R,
    validationState: se,
    isInvalid: re,
    granularity: c,
    maxGranularity: (Pe = e.maxGranularity) !== null && Pe !== void 0 ? Pe : "year",
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
      V(O, ps[O] || 1);
    },
    decrementPage(O) {
      V(O, -(ps[O] || 1));
    },
    setSegment(O, X) {
      L(O), D(U5(T, O, X, F));
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
      delete S[O], k.current = O, w({
        ...S
      });
      let X = nr(e.placeholderValue, c, m, p), ce = T;
      if (O === "dayPeriod" && "hour" in T && "hour" in X) {
        let xe = T.hour >= 12, ae = X.hour >= 12;
        xe && !ae ? ce = T.set({
          hour: T.hour - 12
        }) : !xe && ae && (ce = T.set({
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
      let X = Un(O, M);
      return new zt(t, X).format(H);
    }
  };
}
function H5(e, t, n) {
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
        minValue: F$(e),
        maxValue: e.calendar.getMonthsInYear(e)
      };
    case "day":
      return {
        value: e.day,
        minValue: A$(e),
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
function _5(e, t, n, r) {
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
function U5(e, t, n, r) {
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
function W5(e) {
  var t, n;
  let r = En(e), [a, i] = Ke(e.value, e.defaultValue || null, e.onChange), [l, o] = Z(() => a || {
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
  }, d = (u == null ? void 0 : u.start) || (u == null ? void 0 : u.end) || e.placeholderValue, [c, p] = Ao(d, e.granularity), f = c === "hour" || c === "minute" || c === "second";
  var b;
  let m = (b = e.shouldCloseOnSelect) !== null && b !== void 0 ? b : !0, [h, y] = Z(null), [$, x] = Z(null);
  u && u.start && u.end && (h = u, "hour" in u.start && ($ = u));
  let C = (T, D) => {
    s({
      start: "timeZone" in D.start ? D.start.set(_e(T.start)) : $t(T.start, D.start),
      end: "timeZone" in D.end ? D.end.set(_e(T.end)) : $t(T.end, D.end)
    }), y(null), x(null), w.commitValidation();
  }, P = (T) => {
    let D = typeof m == "function" ? m() : m;
    f ? D || T.start && T.end && ($ != null && $.start) && ($ != null && $.end) ? C(T, {
      start: ($ == null ? void 0 : $.start) || Vn(e.placeholderValue),
      end: ($ == null ? void 0 : $.end) || Vn(e.placeholderValue)
    }) : y(T) : T.start && T.end ? (s(T), w.commitValidation()) : y(T), D && r.setOpen(!1);
  }, B = (T) => {
    h != null && h.start && (h != null && h.end) && T.start && T.end ? C(h, T) : x(T);
  }, M = (u == null || (t = u.start) === null || t === void 0 ? void 0 : t.calendar.identifier) === "gregory" && u.start.era === "BC" || (u == null || (n = u.end) === null || n === void 0 ? void 0 : n.calendar.identifier) === "gregory" && u.end.era === "BC", v = K(() => ({
    granularity: c,
    timeZone: p,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    showEra: M
  }), [
    c,
    e.hourCycle,
    e.shouldForceLeadingZeros,
    p,
    e.hideTimeZone,
    M
  ]), { minValue: R, maxValue: F, isDateUnavailable: E } = e, S = K(() => N5(u, R, F, E, v), [
    u,
    R,
    F,
    E,
    v
  ]), w = xt({
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
  }), k = w.displayValidation.isInvalid, z = e.validationState || (k ? "invalid" : null);
  return {
    ...w,
    value: u,
    setValue: s,
    dateRange: h,
    timeRange: $,
    granularity: c,
    hasTime: f,
    setDate(T, D) {
      P({
        ...h,
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
      !T && !(u != null && u.start && (u != null && u.end)) && (h != null && h.start) && (h != null && h.end) && f && C(h, {
        start: ($ == null ? void 0 : $.start) || Vn(e.placeholderValue),
        end: ($ == null ? void 0 : $.end) || Vn(e.placeholderValue)
      }), r.setOpen(T);
    },
    validationState: z,
    isInvalid: k,
    formatValue(T, D) {
      if (!u || !u.start || !u.end)
        return null;
      let H = "timeZone" in u.start ? u.start.timeZone : void 0, _ = e.granularity || (u.start && "minute" in u.start ? "minute" : "day"), L = "timeZone" in u.end ? u.end.timeZone : void 0, V = e.granularity || (u.end && "minute" in u.end ? "minute" : "day"), N = Un(D, {
        granularity: _,
        timeZone: H,
        hideTimeZone: e.hideTimeZone,
        hourCycle: e.hourCycle,
        showEra: u.start.calendar.identifier === "gregory" && u.start.era === "BC" || u.end.calendar.identifier === "gregory" && u.end.era === "BC"
      }), G = u.start.toDate(H || "UTC"), re = u.end.toDate(L || "UTC"), se = new zt(T, N), Pe;
      if (H === L && _ === V && u.start.compare(u.end) !== 0) {
        try {
          let O = se.formatRangeToParts(G, re), X = -1;
          for (let ae = 0; ae < O.length; ae++) {
            let rt = O[ae];
            if (rt.source === "shared" && rt.type === "literal")
              X = ae;
            else if (rt.source === "endRange")
              break;
          }
          let ce = "", xe = "";
          for (let ae = 0; ae < O.length; ae++)
            ae < X ? ce += O[ae].value : ae > X && (xe += O[ae].value);
          return {
            start: ce,
            end: xe
          };
        } catch {
        }
        Pe = se;
      } else {
        let O = Un(D, {
          granularity: V,
          timeZone: L,
          hideTimeZone: e.hideTimeZone,
          hourCycle: e.hourCycle
        });
        Pe = new zt(T, O);
      }
      return {
        start: se.format(G),
        end: Pe.format(re)
      };
    }
  };
}
function G5(e) {
  let { placeholderValue: t = new Vr(), minValue: n, maxValue: r, granularity: a, validate: i } = e, [l, o] = Ke(e.value, e.defaultValue, e.onChange), u = l || t, s = u && "day" in u ? u : void 0, d = e.defaultValue && "timeZone" in e.defaultValue ? e.defaultValue.timeZone : void 0, c = K(() => {
    let $ = u && "timeZone" in u ? u.timeZone : void 0;
    return ($ || d) && t ? dd(rr(t), $ || d) : rr(t);
  }, [
    t,
    u,
    d
  ]), p = K(() => rr(n, s), [
    n,
    s
  ]), f = K(() => rr(r, s), [
    r,
    s
  ]), b = K(() => l && "day" in l ? Eu(l) : l, [
    l
  ]), m = K(() => l == null ? null : rr(l), [
    l
  ]);
  return {
    ...To({
      ...e,
      value: m,
      defaultValue: void 0,
      minValue: p,
      maxValue: f,
      onChange: ($) => {
        o(s || d ? $ : $ && Eu($));
      },
      granularity: a || "minute",
      maxGranularity: "hour",
      placeholderValue: c,
      // Calendar should not matter for time fields.
      createCalendar: () => new Ue(),
      validate: Q(() => i == null ? void 0 : i(l), [
        i,
        l
      ])
    }),
    timeValue: b
  };
}
function rr(e, t = Qa(ro())) {
  return e ? "day" in e ? e : $t(t, e) : null;
}
function Z5(e, t) {
  let { triggerKey: n } = e, { UNSTABLE_expandedKeysStack: r, UNSTABLE_openSubmenu: a, UNSTABLE_closeSubmenu: i, close: l } = t, [o] = Z(r == null ? void 0 : r.length), u = K(() => r[o] === n, [
    r,
    n,
    o
  ]), [s, d] = Z(null), c = Q((b = null) => {
    d(b), a(n, o);
  }, [
    a,
    o,
    n
  ]), p = Q(() => {
    d(null), i(n, o);
  }, [
    i,
    o,
    n
  ]), f = Q((b = null) => {
    d(b), u ? p() : c(b);
  }, [
    p,
    c,
    u
  ]);
  return K(() => ({
    focusStrategy: s,
    isOpen: u,
    open: c,
    close: p,
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
    p,
    l,
    s,
    f,
    o
  ]);
}
function q5(e) {
  let { minValue: t, maxValue: n, step: r, formatOptions: a, value: i, defaultValue: l = NaN, onChange: o, locale: u, isDisabled: s, isReadOnly: d } = e;
  i === null && (i = NaN), i !== void 0 && !isNaN(i) && (r !== void 0 && !isNaN(r) ? i = Ze(i, t, n, r) : i = st(i, t, n)), isNaN(l) || (r !== void 0 && !isNaN(r) ? l = Ze(l, t, n, r) : l = st(l, t, n));
  let [c, p] = Ke(i, isNaN(l) ? NaN : l, o), [f, b] = Z(() => isNaN(c) ? "" : new Va(u, a).format(c)), m = K(() => new mo(u, a), [
    u,
    a
  ]), h = K(() => m.getNumberingSystem(f), [
    m,
    f
  ]), y = K(() => new Va(u, {
    ...a,
    numberingSystem: h
  }), [
    u,
    a,
    h
  ]), $ = K(() => y.resolvedOptions(), [
    y
  ]), x = Q((N) => isNaN(N) || N === null ? "" : y.format(N), [
    y
  ]), C = xt({
    ...e,
    value: c
  }), P = r !== void 0 && !isNaN(r) ? r : 1;
  $.style === "percent" && (r === void 0 || isNaN(r)) && (P = 0.01);
  let [B, M] = Z(c), [v, R] = Z(u), [F, E] = Z(a);
  (!Object.is(c, B) || u !== v || a !== F) && (b(x(c)), M(c), R(u), E(a));
  let S = K(() => m.parse(f), [
    m,
    f
  ]), w = () => {
    if (!f.length) {
      p(NaN), b(i === void 0 ? "" : x(c));
      return;
    }
    if (isNaN(S)) {
      b(x(c));
      return;
    }
    let N;
    r === void 0 || isNaN(r) ? N = st(S, t, n) : N = Ze(S, t, n, r), N = m.parse(x(N)), p(N), b(x(i === void 0 ? N : c));
  }, k = (N, G = 0) => {
    let re = S;
    if (isNaN(re)) {
      let se = isNaN(G) ? 0 : G;
      return Ze(se, t, n, P);
    } else {
      let se = Ze(re, t, n, P);
      return N === "+" && se > re || N === "-" && se < re ? se : Ze(Qi(N, re, P), t, n, P);
    }
  }, z = () => {
    let N = k("+", t);
    N === c && b(x(N)), p(N), C.commitValidation();
  }, T = () => {
    let N = k("-", n);
    N === c && b(x(N)), p(N), C.commitValidation();
  }, D = () => {
    n != null && (p(Ze(n, t, n, P)), C.commitValidation());
  }, H = () => {
    t != null && (p(t), C.commitValidation());
  }, _ = K(() => !s && !d && (isNaN(S) || n === void 0 || isNaN(n) || Ze(S, t, n, P) > S || Qi("+", S, P) <= n), [
    s,
    d,
    t,
    n,
    P,
    S
  ]), L = K(() => !s && !d && (isNaN(S) || t === void 0 || isNaN(t) || Ze(S, t, n, P) < S || Qi("-", S, P) >= t), [
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
    setNumberValue: p,
    setInputValue: b,
    inputValue: f,
    commit: w
  };
}
function Qi(e, t, n) {
  let r = e === "+" ? t + n : t - n;
  if (t % 1 !== 0 || n % 1 !== 0) {
    const a = t.toString().split("."), i = n.toString().split("."), l = a[1] && a[1].length || 0, o = i[1] && i[1].length || 0, u = Math.pow(10, Math.max(l, o));
    t = Math.round(t * u), n = Math.round(n * u), r = e === "+" ? t + n : t - n, r /= u;
  }
  return r;
}
let Y5 = Math.round(Math.random() * 1e10), J5 = 0;
function X5(e) {
  let t = K(() => e.name || `radio-group-${Y5}-${++J5}`, [
    e.name
  ]);
  var n;
  let [r, a] = Ke(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [i, l] = Z(null), o = xt({
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
function Q5(e) {
  let [t, n] = Ke(bs(e.value), bs(e.defaultValue) || "", e.onChange);
  return {
    value: t,
    setValue: n
  };
}
function bs(e) {
  if (e != null)
    return e.toString();
}
function e6(e) {
  let t = En(e), [n, r] = Z(null), a = Fo({
    ...e,
    onSelectionChange: (u) => {
      e.onSelectionChange != null && e.onSelectionChange(u), t.close(), i.commitValidation();
    }
  }), i = xt({
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
const t6 = 0, n6 = 100, r6 = 1;
function a6(e) {
  const { isDisabled: t = !1, minValue: n = t6, maxValue: r = n6, numberFormatter: a, step: i = r6, orientation: l = "horizontal" } = e;
  let o = K(() => {
    let V = (r - n) / 10;
    return V = Ze(V, 0, V + i, i), Math.max(V, i);
  }, [
    i,
    r,
    n
  ]), u = Q((V) => V == null ? void 0 : V.map((N, G) => {
    let re = G === 0 ? n : N[G - 1], se = G === V.length - 1 ? r : N[G + 1];
    return Ze(N, re, se, i);
  }), [
    n,
    r,
    i
  ]), s = K(() => u(hs(e.value)), [
    e.value
  ]), d = K(() => {
    var V;
    return u((V = hs(e.defaultValue)) !== null && V !== void 0 ? V : [
      n
    ]);
  }, [
    e.defaultValue,
    n
  ]), c = vs(e.value, e.defaultValue, e.onChange), p = vs(e.value, e.defaultValue, e.onChangeEnd);
  const [f, b] = Ke(s, d, c), [m, h] = Z(new Array(f.length).fill(!1)), y = I(new Array(f.length).fill(!0)), [$, x] = Z(void 0), C = I(f), P = I(m);
  let B = (V) => {
    C.current = V, b(V);
  }, M = (V) => {
    P.current = V, h(V);
  };
  function v(V) {
    return (V - n) / (r - n);
  }
  function R(V) {
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
    const G = R(V), re = F(V);
    N = Ze(N, G, re, i);
    let se = ms(C.current, V, N);
    B(se);
  }
  function k(V, N) {
    if (t || !E(V))
      return;
    N && (C.current = f);
    const G = P.current[V];
    P.current = ms(P.current, V, N), M(P.current), p && G && !P.current.some(Boolean) && p(C.current);
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
    return st(D(N), n, r);
  }
  function _(V, N = 1) {
    let G = Math.max(N, i);
    w(V, Ze(f[V] + G, n, r, i));
  }
  function L(V, N = 1) {
    let G = Math.max(N, i);
    w(V, Ze(f[V] - G, n, r, i));
  }
  return {
    values: f,
    getThumbValue: (V) => f[V],
    setThumbValue: w,
    setThumbPercent: T,
    isThumbDragging: (V) => m[V],
    setThumbDragging: k,
    focusedThumb: $,
    setFocusedThumb: x,
    getThumbPercent: (V) => v(f[V]),
    getValuePercent: v,
    getThumbValueLabel: (V) => z(f[V]),
    getFormattedValue: z,
    getThumbMinValue: R,
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
function ms(e, t, n) {
  return e[t] === n ? e : [
    ...e.slice(0, t),
    n,
    ...e.slice(t + 1)
  ];
}
function hs(e) {
  if (e != null)
    return Array.isArray(e) ? e : [
      e
    ];
}
function vs(e, t, n) {
  return (r) => {
    typeof e == "number" || typeof t == "number" ? n == null || n(r[0]) : n == null || n(r);
  };
}
function i6(e) {
  let { collection: t, focusMode: n } = e, r = Bo(e), a = K(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), i = r.setFocusedKey;
  r.setFocusedKey = (u, s) => {
    if (n === "cell" && u != null) {
      let p = t.getItem(u);
      if ((p == null ? void 0 : p.type) === "item") {
        var d, c;
        let f = we(p, t);
        s === "last" ? u = (d = Qt(f)) === null || d === void 0 ? void 0 : d.key : u = (c = Rt(f)) === null || c === void 0 ? void 0 : c.key;
      }
    }
    i(u, s);
  };
  let l = K(() => new ko(t, r), [
    t,
    r
  ]);
  const o = I(null);
  return J(() => {
    if (r.focusedKey != null && !t.getItem(r.focusedKey)) {
      const u = o.current.getItem(r.focusedKey), s = u.parentKey != null && (u.type === "cell" || u.type === "rowheader" || u.type === "column") ? o.current.getItem(u.parentKey) : u, d = o.current.rows, c = t.rows, p = d.length - c.length;
      let f = Math.min(p > 1 ? Math.max(s.index - p + 1, 0) : s.index, c.length - 1), b;
      for (; f >= 0; ) {
        if (!l.isDisabled(c[f].key) && c[f].type !== "headerrow") {
          b = c[f];
          break;
        }
        f < c.length - 1 ? f++ : (f > s.index && (f = s.index), f--);
      }
      if (b) {
        const m = b.hasChildNodes ? [
          ...we(b, t)
        ] : [], h = b.hasChildNodes && s !== u && u.index < m.length ? m[u.index].key : b.key;
        r.setFocusedKey(h);
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
class l6 {
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
function Ml(e) {
  return e != null && (!isNaN(e) || String(e).match(/^(\d+)(?=%$)/) !== null);
}
function Rl(e) {
  if (!e)
    return 1;
  let t = e.match(/^(.+)(?=fr$)/);
  return t ? parseFloat(t[0]) : (console.warn(`width: ${e} is not a supported format, width should be a number (ex. 150), percentage (ex. '50%') or fr unit (ex. '2fr')`, "defaulting to '1fr'"), 1);
}
function Mo(e, t) {
  if (typeof e == "string") {
    let n = e.match(/^(\d+)(?=%$)/);
    if (!n)
      throw new Error("Only percentages or numbers are supported for static column widths");
    return t * (parseFloat(n[0]) / 100);
  }
  return e;
}
function dh(e, t) {
  return e != null ? Mo(e, t) : Number.MAX_SAFE_INTEGER;
}
function ch(e, t) {
  return e != null ? Mo(e, t) : 0;
}
function gs(e, t, n, r, a) {
  let i = !1, l = t.map((o, u) => {
    var s, d, c;
    let p = n.get(o.key) != null ? n.get(o.key) : (c = (d = (s = o.width) !== null && s !== void 0 ? s : o.defaultWidth) !== null && d !== void 0 ? d : r == null ? void 0 : r(u)) !== null && c !== void 0 ? c : "1fr", f = !1, b = 0, m = 0, h = null;
    Ml(p) ? (b = Mo(p, e), f = !0) : (m = Rl(p), m <= 0 && (f = !0));
    var y, $;
    let x = ch(($ = (y = o.minWidth) !== null && y !== void 0 ? y : a == null ? void 0 : a(u)) !== null && $ !== void 0 ? $ : 0, e), C = dh(o.maxWidth, e), P = Math.max(x, Math.min(b, C));
    return f ? h = P : b > P && (f = !0, h = P), f || (i = !0), {
      frozen: f,
      baseSize: b,
      hypotheticalMainSize: P,
      min: x,
      max: C,
      flex: m,
      targetMainSize: h,
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
        let p = c.flex / u;
        c.targetMainSize = c.baseSize + p * s;
      }
    });
    let d = 0;
    l.forEach((c) => {
      if (c.violation = 0, !c.frozen) {
        let { min: p, max: f, targetMainSize: b } = c;
        c.targetMainSize = Math.max(p, Math.min(b, f)), c.violation = c.targetMainSize - b, d += c.violation;
      }
    }), i = !1, l.forEach((c) => {
      d === 0 || Math.sign(d) === Math.sign(c.violation) ? c.frozen = !0 : c.frozen || (i = !0);
    });
  }
  return o6(l);
}
function o6(e) {
  let t = 0, n = 0, r = [];
  return e.forEach(function(a) {
    let i = a.targetMainSize, l = Math.round(i + t) - n;
    t += i, n += l, r.push(l);
  }), r;
}
class u6 {
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
    ]), d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
    n.columns.forEach((m, h) => {
      var y, $;
      let x, C;
      if (p.set(m.key, this.getDefaultMinWidth(n.columns[h])), i !== m.key && !m.props.width && !Ml(a.get(m.key)) ? (x = m.key, C = Rl(a.get(m.key))) : i !== m.key && !Ml(m.props.width) && !a.get(m.key) ? (x = m.key, C = Rl(m.props.width)) : i !== m.key && (!(($ = m.props.width) === null || $ === void 0 || (y = $.endsWith) === null || y === void 0) && y.call($, "%")) && d.set(m.key, m.props.width), u < h) {
        x && c.set(x, C);
        return;
      }
      if (m.key === i) {
        u = h, s.set(m.key, Math.floor(l));
        return;
      }
      s.set(m.key, o.get(m.key));
    });
    let f = gs(t, n.columns.map((m) => ({
      ...m.props,
      key: m.key
    })), s, (m) => this.getDefaultWidth(n.columns[m]), (m) => this.getDefaultMinWidth(n.columns[m])), b = /* @__PURE__ */ new Map();
    return f.forEach((m, h) => {
      let y = n.columns[h].key;
      b.set(y, m);
    }), Array.from(c).forEach(([m]) => {
      b.set(m, `${c.get(m)}fr`);
    }), Array.from(d).forEach(([m, h]) => {
      m !== i && b.set(m, h);
    }), b;
  }
  buildColumnWidths(t, n, r) {
    return this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map(), gs(t, n.columns.map((i) => ({
      ...i.props,
      key: i.key
    })), r, (i) => this.getDefaultWidth(n.columns[i]), (i) => this.getDefaultMinWidth(n.columns[i])).forEach((i, l) => {
      let o = n.columns[l].key, u = n.columns[l];
      this.columnWidths.set(o, i);
      var s;
      this.columnMinWidths.set(o, ch((s = u.props.minWidth) !== null && s !== void 0 ? s : this.getDefaultMinWidth(u), t)), this.columnMaxWidths.set(o, dh(u.props.maxWidth, t));
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
function s6(e, t) {
  let { getDefaultWidth: n, getDefaultMinWidth: r, tableWidth: a = 0 } = e, [i, l] = Z(null), o = K(() => new u6({
    getDefaultWidth: n,
    getDefaultMinWidth: r
  }), [
    n,
    r
  ]), [u, s] = K(() => o.splitColumnsIntoControlledAndUncontrolled(t.collection.columns), [
    t.collection.columns,
    o
  ]), [d, c] = Z(() => o.getInitialUncontrolledWidths(s)), [p, f] = Z(t.collection.columns);
  if (t.collection.columns !== p) {
    if (t.collection.columns.length !== p.length || t.collection.columns.some(($, x) => $.key !== p[x].key)) {
      let $ = o.getInitialUncontrolledWidths(s);
      c($);
    }
    f(t.collection.columns);
  }
  let b = K(() => o.recombineColumns(t.collection.columns, d, s, u), [
    t.collection.columns,
    d,
    s,
    u,
    o
  ]), m = Q(($) => {
    l($);
  }, [
    l
  ]), h = Q(($, x) => {
    let C = new Map(Array.from(u).map(([M, v]) => [
      M,
      v.props.width
    ])), P = o.resizeColumnWidth(a, t.collection, C, d, $, x), B = new Map(Array.from(s).map(([M]) => [
      M,
      P.get(M)
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
  ]), y = Q(() => {
    l(null);
  }, [
    l
  ]);
  return K(() => o.buildColumnWidths(a, t.collection, b), [
    a,
    t.collection,
    b,
    o
  ]), K(() => ({
    resizingColumn: i,
    updateResizedColumns: h,
    startResize: m,
    endResize: y,
    getColumnWidth: ($) => o.getColumnWidth($),
    getColumnMinWidth: ($) => o.getColumnMinWidth($),
    getColumnMaxWidth: ($) => o.getColumnMaxWidth($),
    tableState: t
  }), [
    o,
    i,
    h,
    m,
    y,
    t
  ]);
}
const fh = "row-header-column-" + Math.random().toString(36).slice(2);
let Il = "row-header-column-" + Math.random().toString(36).slice(2);
for (; fh === Il; )
  Il = "row-header-column-" + Math.random().toString(36).slice(2);
function ph(e, t) {
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
        let { column: p, index: f } = r.get(c);
        if (f > d.length)
          break;
        for (let b = f; b < d.length; b++)
          p.splice(b, 0, null);
        for (let b = d.length; b < p.length; b++)
          p[b] && r.has(p[b]) && (r.get(p[b]).index = b);
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
        let c = i[s], p = c.reduce((f, b) => f + b.colspan, 0);
        if (p < l) {
          let f = {
            type: "placeholder",
            key: "placeholder-" + d.key,
            colspan: l - p,
            index: p,
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
class d6 extends l6 {
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
    return (t = Rt(this.body.childNodes)) === null || t === void 0 ? void 0 : t.key;
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
        key: fh,
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
        key: Il,
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
      for (let p of c.childNodes)
        s(p);
    };
    for (let c of t)
      s(c);
    let d = ph(u, l);
    d.forEach((c, p) => o.splice(p, 0, c)), super({
      columnCount: l.length,
      items: o,
      visitNode: (c) => (c.column = l[c.index], c)
    }), this._size = 0, this.columns = l, this.rowHeaderColumnKeys = a, this.body = i, this.headerRows = d, this._size = [
      ...i.childNodes
    ].length, this.rowHeaderColumnKeys.size === 0 && this.rowHeaderColumnKeys.add(this.columns.find((c) => {
      var p, f;
      return !(!((p = c.props) === null || p === void 0) && p.isDragButtonCell) && !(!((f = c.props) === null || f === void 0) && f.isSelectionCell);
    }).key);
  }
}
const c6 = {
  ascending: "descending",
  descending: "ascending"
};
function f6(e) {
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
  ]), o = $o(e, Q((d) => new d6(d, null, l), [
    l
  ]), l), { disabledKeys: u, selectionManager: s } = i6({
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
      var p;
      e.onSortChange({
        column: d,
        direction: c ?? (((p = e.sortDescriptor) === null || p === void 0 ? void 0 : p.column) === d ? c6[e.sortDescriptor.direction] : "ascending")
      });
    }
  };
}
function p6(e) {
  var t;
  let n = Fo({
    ...e,
    suppressTextValueWarning: !0,
    defaultSelectedKey: (t = e.defaultSelectedKey) !== null && t !== void 0 ? t : $s(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set())
  }), { selectionManager: r, collection: a, selectedKey: i } = n, l = I(i);
  return J(() => {
    let o = i;
    (r.isEmpty || !a.getItem(o)) && (o = $s(a, n.disabledKeys), o != null && r.setSelectedKeys([
      o
    ])), (o != null && r.focusedKey == null || !r.isFocused && o !== l.current) && r.setFocusedKey(o), l.current = o;
  }), {
    ...n,
    isDisabled: e.isDisabled || !1
  };
}
function $s(e, t) {
  let n = null;
  if (e) {
    for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey(); )
      n = e.getKeyAfter(n);
    t.has(n) && n === e.getLastKey() && (n = e.getFirstKey());
  }
  return n;
}
const b6 = 1500, ys = 500;
let un = {}, m6 = 0, ar = !1, Tt = null, sn = null;
function h6(e = {}) {
  let { delay: t = b6, closeDelay: n = ys } = e, { isOpen: r, open: a, close: i } = En(e), l = K(() => `${++m6}`, []), o = I(), u = () => {
    un[l] = c;
  }, s = () => {
    for (let f in un)
      f !== l && (un[f](!0), delete un[f]);
  }, d = () => {
    clearTimeout(o.current), o.current = null, s(), u(), ar = !0, a(), Tt && (clearTimeout(Tt), Tt = null), sn && (clearTimeout(sn), sn = null);
  }, c = (f) => {
    f || n <= 0 ? (clearTimeout(o.current), o.current = null, i()) : o.current || (o.current = setTimeout(() => {
      o.current = null, i();
    }, n)), Tt && (clearTimeout(Tt), Tt = null), ar && (sn && clearTimeout(sn), sn = setTimeout(() => {
      delete un[l], sn = null, ar = !1;
    }, Math.max(ys, n)));
  }, p = () => {
    s(), u(), !r && !Tt && !ar ? Tt = setTimeout(() => {
      Tt = null, ar = !0, d();
    }, t) : r || d();
  };
  return J(() => () => {
    clearTimeout(o.current), un[l] && delete un[l];
  }, [
    l
  ]), {
    isOpen: r,
    open: (f) => {
      !f && t > 0 && !o.current ? p() : d();
    },
    close: c
  };
}
class v6 {
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
function g6(e) {
  let [t, n] = Ke(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e.onExpandedChange), r = Bo(e), a = K(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), i = $o(e, Q((o) => new v6(o, {
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
      n($6(t, o));
    },
    setExpandedKeys: n,
    selectionManager: new ko(i, r)
  };
}
function $6(e, t) {
  let n = new Set(e);
  return n.has(t) ? n.delete(t) : n.add(t), n;
}
var Nl = { exports: {} }, el = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs;
function y6() {
  if (xs)
    return el;
  xs = 1;
  var e = g;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, a = e.useEffect, i = e.useLayoutEffect, l = e.useDebugValue;
  function o(c, p) {
    var f = p(), b = r({ inst: { value: f, getSnapshot: p } }), m = b[0].inst, h = b[1];
    return i(function() {
      m.value = f, m.getSnapshot = p, u(m) && h({ inst: m });
    }, [c, f, p]), a(function() {
      return u(m) && h({ inst: m }), c(function() {
        u(m) && h({ inst: m });
      });
    }, [c]), l(f), f;
  }
  function u(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var f = p();
      return !n(c, f);
    } catch {
      return !0;
    }
  }
  function s(c, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : o;
  return el.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, el;
}
var tl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function x6() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = g, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var C = arguments.length, P = new Array(C > 1 ? C - 1 : 0), B = 1; B < C; B++)
          P[B - 1] = arguments[B];
        r("error", x, P);
      }
    }
    function r(x, C, P) {
      {
        var B = t.ReactDebugCurrentFrame, M = B.getStackAddendum();
        M !== "" && (C += "%s", P = P.concat([M]));
        var v = P.map(function(R) {
          return String(R);
        });
        v.unshift("Warning: " + C), Function.prototype.apply.call(console[x], console, v);
      }
    }
    function a(x, C) {
      return x === C && (x !== 0 || 1 / x === 1 / C) || x !== x && C !== C;
    }
    var i = typeof Object.is == "function" ? Object.is : a, l = e.useState, o = e.useEffect, u = e.useLayoutEffect, s = e.useDebugValue, d = !1, c = !1;
    function p(x, C, P) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var B = C();
      if (!c) {
        var M = C();
        i(B, M) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var v = l({
        inst: {
          value: B,
          getSnapshot: C
        }
      }), R = v[0].inst, F = v[1];
      return u(function() {
        R.value = B, R.getSnapshot = C, f(R) && F({
          inst: R
        });
      }, [x, B, C]), o(function() {
        f(R) && F({
          inst: R
        });
        var E = function() {
          f(R) && F({
            inst: R
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
    function b(x, C, P) {
      return C();
    }
    var m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", h = !m, y = h ? b : p, $ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    tl.useSyncExternalStore = $, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), tl;
}
process.env.NODE_ENV === "production" ? Nl.exports = y6() : Nl.exports = x6();
var D6 = Nl.exports;
function C6(e, t, n, r) {
  Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
}
var E6 = {};
C6(E6, "useToolbar", () => bh);
function bh(e, t) {
  const { "aria-label": n, "aria-labelledby": r, orientation: a = "horizontal" } = e;
  let [i, l] = Z(!1);
  fe(() => {
    var b;
    l(!!(t.current && (!((b = t.current.parentElement) === null || b === void 0) && b.closest('[role="toolbar"]'))));
  });
  const { direction: o } = oe(), u = o === "rtl" && a === "horizontal";
  let s = Kr(t);
  const d = (b) => {
    if (b.currentTarget.contains(b.target)) {
      if (a === "horizontal" && b.key === "ArrowRight" || a === "vertical" && b.key === "ArrowDown")
        u ? s.focusPrevious() : s.focusNext();
      else if (a === "horizontal" && b.key === "ArrowLeft" || a === "vertical" && b.key === "ArrowUp")
        u ? s.focusNext() : s.focusPrevious();
      else if (b.key === "Tab") {
        b.stopPropagation(), c.current = document.activeElement, b.shiftKey ? s.focusFirst() : s.focusLast();
        return;
      } else
        return;
      b.stopPropagation(), b.preventDefault();
    }
  }, c = I(null), p = (b) => {
    !b.currentTarget.contains(b.relatedTarget) && !c.current && (c.current = b.target);
  }, f = (b) => {
    var m;
    if (c.current && !b.currentTarget.contains(b.relatedTarget) && (!((m = t.current) === null || m === void 0) && m.contains(b.target))) {
      var h;
      (h = c.current) === null || h === void 0 || h.focus(), c.current = null;
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
      onBlurCapture: i ? void 0 : p
    }
  };
}
function mh(e) {
  return e && e.__esModule ? e.default : e;
}
class Er {
  get childNodes() {
    throw new Error("childNodes is not supported");
  }
  clone() {
    let t = new Er(this.type, this.key);
    return t.value = this.value, t.level = this.level, t.hasChildNodes = this.hasChildNodes, t.rendered = this.rendered, t.textValue = this.textValue, t["aria-label"] = this["aria-label"], t.index = this.index, t.parentKey = this.parentKey, t.prevKey = this.prevKey, t.nextKey = this.nextKey, t.firstChildKey = this.firstChildKey, t.lastChildKey = this.lastChildKey, t.props = this.props, t;
  }
  constructor(t, n) {
    this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.type = t, this.key = n;
  }
}
class hh {
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
class Pr extends hh {
  get index() {
    return this._index;
  }
  set index(t) {
    this._index = t, this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof Pr ? this.parentNode.level + (this.node.type === "item" ? 1 : 0) : 0;
  }
  updateNode() {
    var t, n, r, a;
    let i = this.ownerDocument.getMutableNode(this);
    i.index = this.index, i.level = this.level, i.parentKey = this.parentNode instanceof Pr ? this.parentNode.node.key : null;
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
    super(n), this.nodeType = 8, this._index = 0, this.hasSetProps = !1, this.node = new Er(t, `react-aria-${++n.nodeId}`), this.ownerDocument.startTransaction();
  }
}
class vh {
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
class P6 extends hh {
  get isConnected() {
    return !0;
  }
  createElement(t) {
    return new Pr(t, this);
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
      i instanceof Pr && i.isConnected && i.updateNode();
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
function ct(e) {
  let { children: t, items: n, idScope: r, addIdAndValue: a, dependencies: i = [] } = e, l = K(() => /* @__PURE__ */ new WeakMap(), i);
  return K(() => {
    if (n && typeof t == "function") {
      let s = [];
      for (let d of n) {
        let c = l.get(d);
        if (!c) {
          c = t(d);
          var o, u;
          let p = (u = (o = c.props.id) !== null && o !== void 0 ? o : d.key) !== null && u !== void 0 ? u : d.id;
          if (p == null)
            throw new Error("Could not determine key for item");
          r && (p = r + ":" + p), c = /* @__PURE__ */ Rs(c, a ? {
            key: p,
            id: p,
            value: d
          } : {
            key: p
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
function Ur(e) {
  return ct({
    ...e,
    addIdAndValue: !0
  });
}
const gh = /* @__PURE__ */ W(!1);
function Wr(e, t) {
  let { collection: n, document: r } = Gr(t);
  return {
    portal: Ro(e, r),
    collection: n
  };
}
function w6(e, t, n) {
  let r = wt(), a = I(r);
  a.current = r;
  let i = Q(() => a.current ? n() : t(), [
    t,
    n
  ]);
  return D6.useSyncExternalStore(e, i);
}
const S6 = typeof g.useSyncExternalStore == "function" ? g.useSyncExternalStore : w6;
function Gr(e) {
  let t = K(() => new P6(e || new vh()), [
    e
  ]), n = Q((l) => t.subscribe(l), [
    t
  ]), r = Q(() => {
    let l = t.getCollection();
    return t.isSSR && t.resetAfterSSR(), l;
  }, [
    t
  ]), a = Q(() => (t.isSSR = !0, t.getCollection()), [
    t
  ]);
  return {
    collection: S6(n, r, a),
    document: t
  };
}
const Kl = /* @__PURE__ */ W(null), Pn = /* @__PURE__ */ W(null);
function Ro(e, t) {
  let n = U(Pn), r = t ?? n, a = Ur(e), i = K(() => /* @__PURE__ */ g.createElement(gh.Provider, {
    value: !0
  }, a), [
    a
  ]);
  return wt() ? /* @__PURE__ */ g.createElement(Kl.Provider, {
    value: r
  }, i) : /* @__PURE__ */ tg(i, r);
}
function $h(e) {
  return /* @__PURE__ */ g.createElement(g.Fragment, null, Ro(e));
}
function yh(e, t, n) {
  let r = U(gh);
  var a;
  return r ? (a = ft(e, t, n, "children" in t ? t.children : null)) !== null && a !== void 0 ? a : /* @__PURE__ */ g.createElement(g.Fragment, null) : null;
}
function B6(e, t, n) {
  return Q((r) => {
    r == null || r.setProps(e, t, n);
  }, [
    e,
    t,
    n
  ]);
}
function ft(e, t, n, r, a) {
  let i = B6(t, n, r), l = U(Kl);
  if (l) {
    let o = l.ownerDocument.nodesByProps.get(t);
    return o || (o = l.ownerDocument.createElement(e), o.setProps(t, n, r), l.appendChild(o), l.ownerDocument.updateCollection(), l.ownerDocument.nodesByProps.set(t, o)), a ? /* @__PURE__ */ g.createElement(Kl.Provider, {
      value: o
    }, a) : null;
  }
  return /* @__PURE__ */ g.createElement(e, {
    ref: i
  }, a);
}
function k6(e, t) {
  let n = Ur(e);
  return ft("section", e, t, null, n);
}
const F6 = /* @__PURE__ */ q(k6), xh = /* @__PURE__ */ W(null), Dh = /* @__PURE__ */ W(null);
function Io(e) {
  let t = U(xh);
  e = j(t, e), e.dependencies = ((t == null ? void 0 : t.dependencies) || []).concat(e.dependencies);
  let n = typeof e.children == "function" ? e.children : null;
  return /* @__PURE__ */ g.createElement(Dh.Provider, {
    value: n
  }, Ur(e));
}
const A6 = Symbol("callback"), wr = Symbol("default");
function de({ values: e, children: t }) {
  for (let [n, r] of e)
    t = /* @__PURE__ */ g.createElement(n.Provider, {
      value: r
    }, t);
  return t;
}
function ee(e) {
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
function Ve(e, t) {
  return (n) => t(typeof e == "function" ? e(n) : e, n);
}
function Zr(e, t) {
  let n = U(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = new Intl.ListFormat().format(Object.keys(n.slots).map((i) => `"${i}"`));
    if (!t && !n.slots[wr])
      throw new Error(`A slot prop is required. Valid slot names are ${r}.`);
    let a = t || wr;
    if (!n.slots[a])
      throw new Error(`Invalid slot "${t}". Valid slot names are ${r}.`);
    return n.slots[a];
  }
  return n;
}
function ne(e, t, n) {
  let r = Zr(n, e.slot) || {}, { ref: a, [A6]: i, ...l } = r, o = Te(K(() => Ga(t, a), [
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
function Le() {
  let [e, t] = Z(!0), n = I(!1), r = Q((a) => {
    n.current = !0, t(!!a);
  }, []);
  return fe(() => {
    n.current || t(!1);
  }, []), [
    r,
    e
  ];
}
function fi(e, t = !0) {
  let [n, r] = Z(!0);
  return Ch(e, n && t, Q(() => r(!1), [])), n && t;
}
function Ua(e, t) {
  let [n, r] = Z(!1), [a, i] = Z("idle");
  return !t && e.current && a === "idle" && (n = !0, r(!0), i("exiting")), !e.current && a === "exited" && i("idle"), Ch(e, n, Q(() => {
    i("exited"), r(!1);
  }, [])), n;
}
function Ch(e, t, n) {
  let r = I(null);
  t && e.current && (r.current = window.getComputedStyle(e.current).animation), fe(() => {
    if (t && e.current) {
      let a = window.getComputedStyle(e.current);
      if (a.animationName && a.animationName !== "none" && a.animation !== r.current) {
        let i = (o) => {
          o.target === e.current && (l.removeEventListener("animationend", i), Ar.flushSync(() => {
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
const Sr = /* @__PURE__ */ W(!1), T6 = typeof DocumentFragment < "u" ? new DocumentFragment() : null;
function No(e) {
  let t = U(Sr), n = wt();
  if (t)
    return /* @__PURE__ */ g.createElement(g.Fragment, null, e.children);
  let r = /* @__PURE__ */ g.createElement(Sr.Provider, {
    value: !0
  }, e.children);
  return n ? /* @__PURE__ */ g.createElement("template", {
    "data-react-aria-hidden": !0
  }, r) : /* @__PURE__ */ Ar.createPortal(r, T6);
}
function pi(e) {
  let t = (n, r) => U(Sr) ? null : e(n, r);
  return t.displayName = e.displayName || e.name, g.forwardRef(t);
}
function dt(e) {
  const t = /^(data-.*)$/;
  let n = {};
  for (const r in e)
    t.test(r) || (n[r] = e[r]);
  return n;
}
const Eh = /* @__PURE__ */ W(null);
function M6(e, t) {
  [e, t] = ne(e, t, Eh);
  let n = e.href ? "a" : "span", { linkProps: r, isPressed: a } = y$({
    ...e,
    elementType: n
  }, t), { hoverProps: i, isHovered: l } = ye(e), { focusProps: o, isFocused: u, isFocusVisible: s } = be(), d = ee({
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
  return /* @__PURE__ */ g.createElement(n, {
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
const R6 = /* @__PURE__ */ q(M6), I6 = /* @__PURE__ */ W(null);
function N6(e, t) {
  [e, t] = ne(e, t, I6);
  let { portal: n, collection: r } = Wr(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, n, /* @__PURE__ */ g.createElement(K6, {
    props: e,
    collection: r,
    breadcrumbsRef: t
  }));
}
function K6({ props: e, collection: t, breadcrumbsRef: n }) {
  var r;
  return /* @__PURE__ */ g.createElement("ol", {
    ref: n,
    ...Y(e, {
      labelable: !0
    }),
    slot: e.slot || void 0,
    style: e.style,
    className: (r = e.className) !== null && r !== void 0 ? r : "react-aria-Breadcrumbs"
  }, [
    ...t
  ].map((a, i) => /* @__PURE__ */ g.createElement(O6, {
    key: a.key,
    node: a,
    isCurrent: i === t.size - 1,
    isDisabled: e.isDisabled,
    onAction: e.onAction
  })));
}
const z6 = /* @__PURE__ */ q(N6);
function V6(e, t) {
  return ft("item", e, t, e.children);
}
const L6 = /* @__PURE__ */ q(V6);
function O6({ node: e, isCurrent: t, isDisabled: n, onAction: r }) {
  let a = {
    "aria-current": t ? "page" : null,
    isDisabled: n || t,
    onPress: () => r == null ? void 0 : r(e.key)
  };
  var i;
  return /* @__PURE__ */ g.createElement("li", {
    ...Y(e.props),
    ref: e.props.ref,
    style: e.props.style,
    className: (i = e.props.className) !== null && i !== void 0 ? i : "react-aria-Breadcrumb"
  }, /* @__PURE__ */ g.createElement(Eh.Provider, {
    value: a
  }, e.rendered));
}
const j6 = /* @__PURE__ */ new Set([
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "name",
  "value"
]), pt = /* @__PURE__ */ W({});
function H6(e, t) {
  [e, t] = ne(e, t, pt);
  let n = e, { buttonProps: r, isPressed: a } = Md(e, t), { focusProps: i, isFocused: l, isFocusVisible: o } = be(e), { hoverProps: u, isHovered: s } = ye(e), d = ee({
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
  return /* @__PURE__ */ g.createElement("button", {
    ...Y(e, {
      propNames: j6
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
const Yn = /* @__PURE__ */ pi(H6), bi = /* @__PURE__ */ W({});
function _6(e, t) {
  [e, t] = ne(e, t, bi);
  let { children: n, level: r = 3, className: a, ...i } = e, l = `h${r}`;
  return /* @__PURE__ */ g.createElement(l, {
    ...i,
    ref: t,
    className: a ?? "react-aria-Heading"
  }, n);
}
const Ph = /* @__PURE__ */ q(_6), Me = /* @__PURE__ */ W({});
function U6(e, t) {
  [e, t] = ne(e, t, Me);
  let { elementType: n = "span", ...r } = e;
  return /* @__PURE__ */ g.createElement(n, {
    className: "react-aria-Text",
    ...r,
    ref: t
  });
}
const qr = /* @__PURE__ */ q(U6), wh = /* @__PURE__ */ W({}), Sh = /* @__PURE__ */ W({}), mi = /* @__PURE__ */ W(null), hi = /* @__PURE__ */ W(null);
function W6(e, t) {
  [e, t] = ne(e, t, wh);
  let { locale: n } = oe(), r = E3({
    ...e,
    locale: n,
    createCalendar: ti
  }), { calendarProps: a, prevButtonProps: i, nextButtonProps: l, errorMessageProps: o, title: u } = O1(e, r), s = ee({
    ...e,
    values: {
      state: r,
      isDisabled: e.isDisabled || !1,
      isInvalid: r.isValueInvalid
    },
    defaultClassName: "react-aria-Calendar"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...s,
    ...a,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": r.isValueInvalid || void 0
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        pt,
        {
          slots: {
            previous: i,
            next: l
          }
        }
      ],
      [
        bi,
        {
          "aria-hidden": !0,
          level: 2,
          children: u
        }
      ],
      [
        mi,
        r
      ],
      [
        Me,
        {
          slots: {
            errorMessage: o
          }
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement(jt, null, /* @__PURE__ */ g.createElement("h2", null, a["aria-label"])), s.children, /* @__PURE__ */ g.createElement(jt, null, /* @__PURE__ */ g.createElement("button", {
    "aria-label": l["aria-label"],
    disabled: l.isDisabled,
    onClick: () => r.focusNextPage(),
    tabIndex: -1
  }))));
}
const G6 = /* @__PURE__ */ q(W6);
function Z6(e, t) {
  [e, t] = ne(e, t, Sh);
  let { locale: n } = oe(), r = F5({
    ...e,
    locale: n,
    createCalendar: ti
  }), { calendarProps: a, prevButtonProps: i, nextButtonProps: l, errorMessageProps: o, title: u } = j1(e, r, t), s = ee({
    ...e,
    values: {
      state: r,
      isDisabled: e.isDisabled || !1,
      isInvalid: r.isValueInvalid
    },
    defaultClassName: "react-aria-RangeCalendar"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...s,
    ...a,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": r.isValueInvalid || void 0
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        pt,
        {
          slots: {
            previous: i,
            next: l
          }
        }
      ],
      [
        bi,
        {
          "aria-hidden": !0,
          level: 2,
          children: u
        }
      ],
      [
        hi,
        r
      ],
      [
        Me,
        {
          slots: {
            errorMessage: o
          }
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement(jt, null, /* @__PURE__ */ g.createElement("h2", null, a["aria-label"])), s.children, /* @__PURE__ */ g.createElement(jt, null, /* @__PURE__ */ g.createElement("button", {
    "aria-label": l["aria-label"],
    disabled: l.isDisabled,
    onClick: () => r.focusNextPage(),
    tabIndex: -1
  }))));
}
const q6 = /* @__PURE__ */ q(Z6), vi = /* @__PURE__ */ W(null);
function Y6(e, t) {
  let n = U(mi), r = U(hi), a = n ?? r, i = a.visibleRange.start;
  e.offset && (i = i.add(e.offset));
  let { gridProps: l, headerProps: o, weekDays: u } = H1({
    startDate: i,
    endDate: Ta(i),
    weekdayStyle: e.weekdayStyle
  }, a);
  var s;
  return /* @__PURE__ */ g.createElement(vi.Provider, {
    value: {
      headerProps: o,
      weekDays: u,
      startDate: i
    }
  }, /* @__PURE__ */ g.createElement("table", {
    ...Y(e),
    ...l,
    ref: t,
    style: e.style,
    className: (s = e.className) !== null && s !== void 0 ? s : "react-aria-CalendarGrid"
  }, typeof e.children != "function" ? e.children : /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(kh, null, (d) => /* @__PURE__ */ g.createElement(Fh, null, d)), /* @__PURE__ */ g.createElement(Ko, null, e.children))));
}
const Bh = /* @__PURE__ */ q(Y6);
function J6(e, t) {
  let { children: n, style: r, className: a } = e, { headerProps: i, weekDays: l } = U(vi);
  return /* @__PURE__ */ g.createElement("thead", {
    ...Y(e),
    ...i,
    ref: t,
    style: r,
    className: a || "react-aria-CalendarGridHeader"
  }, /* @__PURE__ */ g.createElement("tr", null, l.map((o, u) => /* @__PURE__ */ g.cloneElement(n(o), {
    key: u
  }))));
}
const kh = /* @__PURE__ */ q(J6);
function X6(e, t) {
  let { children: n, style: r, className: a } = e;
  return /* @__PURE__ */ g.createElement("th", {
    ...Y(e),
    ref: t,
    style: r,
    className: a || "react-aria-CalendarHeaderCell"
  }, n);
}
const Fh = /* @__PURE__ */ q(X6);
function Q6(e, t) {
  let { children: n, style: r, className: a } = e, i = U(mi), l = U(hi), o = i ?? l, { startDate: u } = U(vi), { locale: s } = oe(), d = I$(u, s);
  return /* @__PURE__ */ g.createElement("tbody", {
    ...Y(e),
    ref: t,
    style: r,
    className: a || "react-aria-CalendarGridBody"
  }, [
    ...new Array(d).keys()
  ].map((c) => /* @__PURE__ */ g.createElement("tr", {
    key: c
  }, o.getDatesInWeek(c, u).map((p, f) => p ? /* @__PURE__ */ g.cloneElement(n(p), {
    key: f
  }) : /* @__PURE__ */ g.createElement("td", {
    key: f
  })))));
}
const Ko = /* @__PURE__ */ q(Q6);
function ex({ date: e, ...t }, n) {
  let r = U(mi), a = U(hi), i = r ?? a;
  var l;
  let { startDate: o } = (l = U(vi)) !== null && l !== void 0 ? l : {
    startDate: i.visibleRange.start
  }, u = I(null), { cellProps: s, buttonProps: d, ...c } = _1({
    date: e
  }, i, u), { hoverProps: p, isHovered: f } = ye({
    ...t,
    isDisabled: c.isDisabled
  }), { focusProps: b, isFocusVisible: m } = be();
  m && (m = c.isFocused);
  let h = !S$(o, e), y = !1, $ = !1;
  "highlightedRange" in i && i.highlightedRange && (y = Fe(e, i.highlightedRange.start), $ = Fe(e, i.highlightedRange.end));
  let x = ee({
    ...t,
    defaultChildren: c.formattedDate,
    defaultClassName: "react-aria-CalendarCell",
    values: {
      date: e,
      isHovered: f,
      isOutsideMonth: h,
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
    "data-outside-month": h || void 0,
    "data-selected": c.isSelected || void 0,
    "data-selection-start": y || void 0,
    "data-selection-end": $ || void 0,
    "data-invalid": c.isInvalid || void 0
  };
  return /* @__PURE__ */ g.createElement("td", {
    ...s,
    ref: n
  }, /* @__PURE__ */ g.createElement("div", {
    ...j(Y(t), d, b, p, C, x),
    ref: u
  }));
}
const Ah = /* @__PURE__ */ q(ex), tt = /* @__PURE__ */ W(null);
function tx(e, t) {
  let n = U(tt);
  return n != null && n.isInvalid ? /* @__PURE__ */ g.createElement(rx, {
    ...e,
    ref: t
  }) : null;
}
const nx = /* @__PURE__ */ q(tx), rx = /* @__PURE__ */ q((e, t) => {
  let n = U(tt), r = ee({
    ...e,
    defaultClassName: "react-aria-FieldError",
    defaultChildren: n.validationErrors.join(" "),
    values: n
  });
  return /* @__PURE__ */ g.createElement(qr, {
    slot: "errorMessage",
    ...r,
    ref: t
  });
}), Oe = /* @__PURE__ */ W({});
function ax(e, t) {
  [e, t] = ne(e, t, Oe);
  let { elementType: n = "label", ...r } = e;
  return /* @__PURE__ */ g.createElement(n, {
    className: "react-aria-Label",
    ...r,
    ref: t
  });
}
const ix = /* @__PURE__ */ pi(ax), lx = /* @__PURE__ */ W(null), Th = /* @__PURE__ */ W(null);
function ox(e, t) {
  [e, t] = ne(e, t, lx);
  var n;
  let r = A5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), [a, i] = Le();
  var l;
  let { groupProps: o, labelProps: u, descriptionProps: s, errorMessageProps: d, ...c } = Y1({
    ...e,
    label: i,
    validationBehavior: (l = e.validationBehavior) !== null && l !== void 0 ? l : "native"
  }, r), p = ee({
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
  return /* @__PURE__ */ g.createElement("div", {
    ...o,
    ...p,
    ref: t,
    slot: e.slot || void 0,
    "data-readonly": r.isReadOnly || void 0,
    "data-required": e.isRequired || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-disabled": e.isDisabled || void 0
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Th,
        r
      ],
      [
        Oe,
        {
          ...u,
          ref: a,
          elementType: "span"
        }
      ],
      [
        Me,
        {
          slots: {
            description: s,
            errorMessage: d
          }
        }
      ],
      [
        tt,
        c
      ]
    ]
  }, p.children));
}
const gi = /* @__PURE__ */ W(null);
function ux(e, t) {
  [e, t] = ne(e, t, gi);
  let n = I(null), r = U(Th);
  var a;
  let { labelProps: i, inputProps: l, isSelected: o, isDisabled: u, isReadOnly: s, isPressed: d, isInvalid: c } = r ? J1({
    ...e,
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: e.value,
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, r, n) : $c({
    ...e,
    children: typeof e.children == "function" ? !0 : e.children,
    validationBehavior: (a = e.validationBehavior) !== null && a !== void 0 ? a : "native"
  }, ai(e), n), { isFocused: p, isFocusVisible: f, focusProps: b } = be(), m = u || s, { hoverProps: h, isHovered: y } = ye({
    ...e,
    isDisabled: m
  }), $ = ee({
    // TODO: should data attrs go on the label or on the <input>? useCheckbox passes them to the input...
    ...e,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: o,
      isIndeterminate: e.isIndeterminate || !1,
      isPressed: d,
      isHovered: y,
      isFocused: p,
      isFocusVisible: f,
      isDisabled: u,
      isReadOnly: s,
      isInvalid: c,
      isRequired: e.isRequired || !1
    }
  }), x = Y(e);
  return delete x.id, /* @__PURE__ */ g.createElement("label", {
    ...j(x, i, h, $),
    ref: t,
    slot: e.slot || void 0,
    "data-selected": o || void 0,
    "data-indeterminate": e.isIndeterminate || void 0,
    "data-pressed": d || void 0,
    "data-hovered": y || void 0,
    "data-focused": p || void 0,
    "data-focus-visible": f || void 0,
    "data-disabled": u || void 0,
    "data-readonly": s || void 0,
    "data-invalid": c || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ g.createElement(jt, {
    elementType: "span"
  }, /* @__PURE__ */ g.createElement("input", {
    ...j(l, b),
    ref: n
  })), $.children);
}
const sx = /* @__PURE__ */ q(ux), dx = /* @__PURE__ */ q(ox), Ut = /* @__PURE__ */ W({});
function cx(e, t) {
  [e, t] = ne(e, t, Ut);
  let { isDisabled: n, isInvalid: r, onHoverStart: a, onHoverChange: i, onHoverEnd: l, ...o } = e, { hoverProps: u, isHovered: s } = ye({
    onHoverStart: a,
    onHoverChange: i,
    onHoverEnd: l,
    isDisabled: n
  }), { isFocused: d, isFocusVisible: c, focusProps: p } = be({
    within: !0
  });
  n ?? (n = !!e["aria-disabled"] && e["aria-disabled"] !== "false"), r ?? (r = !!e["aria-invalid"] && e["aria-invalid"] !== "false");
  let f = ee({
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
  var b, m;
  return /* @__PURE__ */ g.createElement("div", {
    ...j(o, p, u),
    ...f,
    ref: t,
    role: (b = e.role) !== null && b !== void 0 ? b : "group",
    slot: (m = e.slot) !== null && m !== void 0 ? m : void 0,
    "data-focus-within": d || void 0,
    "data-hovered": s || void 0,
    "data-focus-visible": c || void 0,
    "data-disabled": n || void 0,
    "data-invalid": r || void 0
  }, f.children);
}
const zo = /* @__PURE__ */ q(cx), an = /* @__PURE__ */ W({});
let fx = (e) => {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...a } = e;
  return a;
};
function px(e, t) {
  [e, t] = ne(e, t, an);
  let { hoverProps: n, isHovered: r } = ye(e), { isFocused: a, isFocusVisible: i, focusProps: l } = be({
    isTextInput: !0,
    autoFocus: e.autoFocus
  }), o = !!e["aria-invalid"] && e["aria-invalid"] !== "false", u = ee({
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
  return /* @__PURE__ */ g.createElement("input", {
    ...j(fx(e), l, n),
    ...u,
    ref: t,
    "data-focused": a || void 0,
    "data-disabled": e.disabled || void 0,
    "data-hovered": r || void 0,
    "data-focus-visible": i || void 0,
    "data-invalid": o || void 0
  });
}
const Mh = /* @__PURE__ */ pi(px), $i = /* @__PURE__ */ W(null);
function bx(e, t) {
  let { render: n } = U($i);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, n(e, t));
}
const Vo = /* @__PURE__ */ q(bx), nt = /* @__PURE__ */ W({}), mx = /* @__PURE__ */ W({});
function hx(e, t) {
  let [n, r] = ne(e, t, mx), a = yh("header", e, t);
  return a || /* @__PURE__ */ g.createElement("header", {
    className: "react-aria-Header",
    ...n,
    ref: r
  }, n.children);
}
const Lo = /* @__PURE__ */ q(hx), Oo = /* @__PURE__ */ W({});
function vx(e, t) {
  let [n, r] = ne(e, t, Oo), { elementType: a, orientation: i, style: l, className: o } = n, u = a || "hr";
  u === "hr" && i === "vertical" && (u = "div");
  let { separatorProps: s } = u5({
    elementType: a,
    orientation: i
  }), d = yh("separator", e, t);
  return d || /* @__PURE__ */ g.createElement(u, {
    ...Y(n),
    ...s,
    style: l,
    className: o ?? "react-aria-Separator",
    ref: r,
    slot: n.slot || void 0
  });
}
const yi = /* @__PURE__ */ q(vx), Yr = /* @__PURE__ */ W(null), Dt = /* @__PURE__ */ W(null);
function gx(e, t) {
  [e, t] = ne(e, t, Yr);
  let n = U(Sr), r = U(Dt);
  return U(Pn) ? /* @__PURE__ */ g.createElement($h, e) : r ? n ? null : /* @__PURE__ */ g.createElement(Rh, {
    state: r,
    props: e,
    listBoxRef: t
  }) : /* @__PURE__ */ g.createElement($x, {
    props: e,
    listBoxRef: t
  });
}
function $x({ props: e, listBoxRef: t }) {
  let { portal: n, collection: r } = Wr(e);
  e = {
    ...e,
    collection: r,
    children: null,
    items: null
  };
  let a = ci(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, n, /* @__PURE__ */ g.createElement(Rh, {
    state: a,
    props: e,
    listBoxRef: t
  }));
}
const jo = /* @__PURE__ */ q(gx);
function Rh({ state: e, props: t, listBoxRef: n }) {
  let { dragAndDropHooks: r, layout: a = "stack", orientation: i = "vertical" } = t, { collection: l, selectionManager: o } = e, u = !!(r != null && r.useDraggableCollectionState), s = !!(r != null && r.useDroppableCollectionState), { direction: d } = oe(), { disabledBehavior: c, disabledKeys: p } = o, f = Zn({
    usage: "search",
    sensitivity: "base"
  }), b = K(() => t.keyboardDelegate || new Cn({
    collection: l,
    collator: f,
    ref: n,
    disabledKeys: c === "selection" ? /* @__PURE__ */ new Set() : p,
    layout: a,
    orientation: i,
    direction: d
  }), [
    l,
    f,
    n,
    c,
    p,
    i,
    d,
    t.keyboardDelegate,
    a
  ]), { listBoxProps: m } = Py({
    ...t,
    shouldSelectOnPressUp: u || t.shouldSelectOnPressUp,
    keyboardDelegate: b
  }, e, n), h = ct({
    items: l,
    children: (z) => {
      switch (z.type) {
        case "section":
          return /* @__PURE__ */ g.createElement(yx, {
            section: z
          });
        case "separator":
          return /* @__PURE__ */ g.createElement(yi, z.props);
        case "item":
          return /* @__PURE__ */ g.createElement(Nh, {
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
  let x, C, P, B = !1, M = null, v = I(null);
  if (u && r) {
    x = r.useDraggableCollectionState({
      collection: l,
      selectionManager: o,
      preview: r.renderDragPreview ? v : void 0
    }), r.useDraggableCollection({}, x, n);
    let z = r.DragPreview;
    M = r.renderDragPreview ? /* @__PURE__ */ g.createElement(z, {
      ref: v
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
      keyboardDelegate: b,
      dropTargetDelegate: z
    }, C, n), B = C.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: R, isFocused: F, isFocusVisible: E } = be(), S = {
    isDropTarget: B,
    isEmpty: e.collection.size === 0,
    isFocused: F,
    isFocusVisible: E,
    layout: t.layout || "stack",
    state: e
  }, w = ee({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-ListBox",
    values: S
  }), k = null;
  return e.collection.size === 0 && t.renderEmptyState && (k = /* @__PURE__ */ g.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, t.renderEmptyState(S))), /* @__PURE__ */ g.createElement(Nr, null, /* @__PURE__ */ g.createElement("div", {
    ...Y(t),
    ...j(m, R, P == null ? void 0 : P.collectionProps),
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
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Yr,
        t
      ],
      [
        Dt,
        e
      ],
      [
        nt,
        {
          dragAndDropHooks: r,
          dragState: x,
          dropState: C
        }
      ],
      [
        Oo,
        {
          elementType: "div"
        }
      ],
      [
        $i,
        {
          render: Cx
        }
      ]
    ]
  }, h), k, M));
}
function yx({ section: e, className: t, style: n }) {
  var r, a;
  let i = U(Dt), [l, o] = Le();
  var u;
  let { headingProps: s, groupProps: d } = Sy({
    heading: o,
    "aria-label": (u = e.props["aria-label"]) !== null && u !== void 0 ? u : void 0
  }), c = ct({
    items: i.collection.getChildren(e.key),
    children: (p) => {
      switch (p.type) {
        case "header":
          return /* @__PURE__ */ g.createElement(xx, {
            item: p,
            headingProps: s,
            headingRef: l
          });
        case "item":
          return /* @__PURE__ */ g.createElement(Nh, {
            item: p
          });
        default:
          throw new Error("Unsupported element type in Section: " + p.type);
      }
    }
  });
  return /* @__PURE__ */ g.createElement("section", {
    ...Y(e.props),
    ...d,
    className: t || ((r = e.props) === null || r === void 0 ? void 0 : r.className) || "react-aria-Section",
    style: n || ((a = e.props) === null || a === void 0 ? void 0 : a.style),
    ref: e.props.ref
  }, c);
}
function xx({ item: e, headingProps: t, headingRef: n }) {
  let { ref: r, ...a } = e.props;
  return /* @__PURE__ */ g.createElement(Lo, {
    ...t,
    ...a,
    ref: Ga(n, r)
  }, e.rendered);
}
function Dx(e, t) {
  return ft("item", e, t, e.children);
}
const Ih = /* @__PURE__ */ q(Dx);
function Nh({ item: e }) {
  var t;
  let n = Te(e.props.ref), r = U(Dt), { dragAndDropHooks: a, dragState: i, dropState: l } = U(nt), { optionProps: o, labelProps: u, descriptionProps: s, ...d } = wy({
    key: e.key,
    "aria-label": (t = e.props) === null || t === void 0 ? void 0 : t["aria-label"]
  }, r, n), { hoverProps: c, isHovered: p } = ye({
    isDisabled: !d.allowsSelection && !d.hasAction
  }), f = null;
  i && a && (f = a.useDraggableItem({
    key: e.key
  }, i));
  let b = null;
  l && a && (b = a.useDroppableItem({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, l, n));
  let m = e.props, h = i && i.isDragging(e.key), y = ee({
    ...m,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...d,
      isHovered: p,
      selectionMode: r.selectionManager.selectionMode,
      selectionBehavior: r.selectionManager.selectionBehavior,
      allowsDragging: !!i,
      isDragging: h,
      isDropTarget: b == null ? void 0 : b.isDropTarget
    }
  }), $ = (a == null ? void 0 : a.renderDropIndicator) || ((C) => /* @__PURE__ */ g.createElement(Vo, {
    target: C
  }));
  J(() => {
    e.textValue || console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    e.textValue
  ]);
  let x = m.href ? "a" : "div";
  return /* @__PURE__ */ g.createElement(g.Fragment, null, (a == null ? void 0 : a.useDropIndicator) && $({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), /* @__PURE__ */ g.createElement(x, {
    ...j(o, c, f == null ? void 0 : f.dragProps, b == null ? void 0 : b.dropProps),
    ...y,
    ref: n,
    "data-allows-dragging": !!i || void 0,
    "data-selected": d.isSelected || void 0,
    "data-disabled": d.isDisabled || void 0,
    "data-hovered": p || void 0,
    "data-focused": d.isFocused || void 0,
    "data-focus-visible": d.isFocusVisible || void 0,
    "data-pressed": d.isPressed || void 0,
    "data-dragging": h || void 0,
    "data-drop-target": (b == null ? void 0 : b.isDropTarget) || void 0,
    "data-selection-mode": r.selectionManager.selectionMode === "none" ? void 0 : r.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Me,
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
function Cx(e, t) {
  t = Te(t);
  let { dragAndDropHooks: n, dropState: r } = U(nt), { dropIndicatorProps: a, isHidden: i, isDropTarget: l } = n.useDropIndicator(e, r, t);
  return i ? null : /* @__PURE__ */ g.createElement(Px, {
    ...e,
    dropIndicatorProps: a,
    isDropTarget: l,
    ref: t
  });
}
function Ex(e, t) {
  let { dropIndicatorProps: n, isDropTarget: r, ...a } = e, i = ee({
    ...a,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...n,
    ...i,
    // eslint-disable-next-line
    role: "option",
    ref: t,
    "data-drop-target": r || void 0
  });
}
const Px = /* @__PURE__ */ q(Ex), Ho = /* @__PURE__ */ W({
  placement: "bottom"
});
function wx(e, t) {
  [e, t] = ne(e, t, Ho);
  let n = e.placement, r = {
    position: "absolute",
    [n]: "100%",
    transform: n === "top" || n === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
  }, a = ee({
    ...e,
    defaultClassName: "react-aria-OverlayArrow",
    values: {
      placement: n
    }
  });
  return a.style && Object.keys(a.style).forEach((i) => a.style[i] === void 0 && delete a.style[i]), /* @__PURE__ */ g.createElement("div", {
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
const Kh = /* @__PURE__ */ q(wx), Ht = /* @__PURE__ */ W(null);
function Sx(e, t) {
  [e, t] = ne(e, t, Ht);
  let n = U(Bt), r = En(e), a = e.isOpen != null || e.defaultOpen != null || !n ? r : n, i = Ua(t, a.isOpen) || e.isExiting || !1;
  if (U(Sr)) {
    let o = e.children;
    return typeof o == "function" && (o = o({
      trigger: e.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1
    })), /* @__PURE__ */ g.createElement(g.Fragment, null, o);
  }
  return a && !a.isOpen && !i ? null : /* @__PURE__ */ g.createElement(kx, {
    ...e,
    triggerRef: e.triggerRef,
    state: a,
    popoverRef: t,
    isExiting: i
  });
}
const Bx = /* @__PURE__ */ q(Sx);
function kx({ state: e, isExiting: t, UNSTABLE_portalContainer: n, ...r }) {
  var a;
  let { popoverProps: i, underlayProps: l, arrowProps: o, placement: u } = gy({
    ...r,
    offset: (a = r.offset) !== null && a !== void 0 ? a : 8
  }, e), s = r.popoverRef, d = fi(s, !!u) || r.isEntering || !1, c = ee({
    ...r,
    defaultClassName: "react-aria-Popover",
    values: {
      trigger: r.trigger || null,
      placement: u,
      isEntering: d,
      isExiting: t
    }
  }), p = {
    ...i.style,
    ...c.style
  };
  return /* @__PURE__ */ g.createElement(sf, {
    isExiting: t,
    portalContainer: n
  }, !r.isNonModal && e.isOpen && /* @__PURE__ */ g.createElement("div", {
    "data-testid": "underlay",
    ...l,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ g.createElement("div", {
    ...j(Y(r), i),
    ...c,
    ref: s,
    slot: r.slot || void 0,
    style: p,
    "data-trigger": r.trigger,
    "data-placement": u,
    "data-entering": d || void 0,
    "data-exiting": t || void 0
  }, !r.isNonModal && /* @__PURE__ */ g.createElement(Pl, {
    onDismiss: e.close
  }), /* @__PURE__ */ g.createElement(Ho.Provider, {
    value: {
      ...o,
      placement: u
    }
  }, c.children), /* @__PURE__ */ g.createElement(Pl, {
    onDismiss: e.close
  })));
}
const _o = /* @__PURE__ */ W(null), Bt = /* @__PURE__ */ W(null);
function Fx(e, t) {
  let n = e["aria-labelledby"];
  [e, t] = ne(e, t, _o);
  let { dialogProps: r, titleProps: a } = Wy({
    ...e,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": n
  }, t), i = U(Bt), l = e.children;
  typeof l == "function" && (l = l({
    close: (i == null ? void 0 : i.close) || (() => {
    })
  })), !r["aria-label"] && !r["aria-labelledby"] && (e["aria-labelledby"] ? r["aria-labelledby"] = e["aria-labelledby"] : console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));
  var o;
  return /* @__PURE__ */ g.createElement("section", {
    ...Y(e),
    ...r,
    ref: t,
    slot: e.slot || void 0,
    style: e.style,
    className: (o = e.className) !== null && o !== void 0 ? o : "react-aria-Dialog"
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        bi,
        {
          slots: {
            [wr]: {},
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
const Ax = /* @__PURE__ */ q(Fx), Tx = /* @__PURE__ */ W(null), Mx = /* @__PURE__ */ W(null);
function Rx(e, t) {
  [e, t] = ne(e, t, Tx);
  let { collection: n, document: r } = Gr(), { children: a, isDisabled: i = !1, isInvalid: l = !1, isRequired: o = !1 } = e;
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
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(No, null, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Pn,
        r
      ],
      [
        Yr,
        {
          items: (u = e.items) !== null && u !== void 0 ? u : e.defaultItems
        }
      ]
    ]
  }, a)), /* @__PURE__ */ g.createElement(Ix, {
    props: e,
    collection: n,
    comboBoxRef: t
  }));
}
function Ix({ props: e, collection: t, comboBoxRef: n }) {
  let { name: r, formValue: a = "key", allowsCustomValue: i } = e;
  i && (a = "text");
  let { contains: l } = Td({
    sensitivity: "base"
  });
  var o;
  let u = M5({
    defaultFilter: e.defaultFilter || l,
    ...e,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: e.items,
    children: void 0,
    collection: t,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }), s = I(null), d = I(null), c = I(null), p = I(null), [f, b] = Le();
  var m;
  let { buttonProps: h, inputProps: y, listBoxProps: $, labelProps: x, descriptionProps: C, errorMessageProps: P, ...B } = Ky({
    ...dt(e),
    label: b,
    inputRef: d,
    buttonRef: s,
    listBoxRef: c,
    popoverRef: p,
    name: a === "text" ? r : void 0,
    validationBehavior: (m = e.validationBehavior) !== null && m !== void 0 ? m : "native"
  }, u), [M, v] = Z(null), R = Q(() => {
    if (d.current) {
      var w;
      let k = (w = s.current) === null || w === void 0 ? void 0 : w.getBoundingClientRect(), z = d.current.getBoundingClientRect(), T = k ? Math.min(k.left, z.left) : z.left, D = k ? Math.max(k.right, z.right) : z.right;
      v(D - T + "px");
    }
  }, [
    s,
    d,
    v
  ]);
  Mr({
    ref: d,
    onResize: R
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
  ]), E = ee({
    ...e,
    values: F,
    defaultClassName: "react-aria-ComboBox"
  }), S = Y(e);
  return delete S.id, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Mx,
        u
      ],
      [
        Oe,
        {
          ...x,
          ref: f
        }
      ],
      [
        pt,
        {
          ...h,
          ref: s,
          isPressed: u.isOpen
        }
      ],
      [
        an,
        {
          ...y,
          ref: d
        }
      ],
      [
        Bt,
        u
      ],
      [
        Ht,
        {
          ref: p,
          triggerRef: d,
          placement: "bottom start",
          isNonModal: !0,
          trigger: "ComboBox",
          style: {
            "--trigger-width": M
          }
        }
      ],
      [
        Yr,
        {
          ...$,
          ref: c
        }
      ],
      [
        Dt,
        u
      ],
      [
        Me,
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
        tt,
        B
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...S,
    ...E,
    ref: n,
    slot: e.slot || void 0,
    "data-focused": u.isFocused || void 0,
    "data-open": u.isOpen || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": B.isInvalid || void 0,
    "data-required": e.isRequired || void 0
  }), r && a === "key" && /* @__PURE__ */ g.createElement("input", {
    type: "hidden",
    name: r,
    value: u.selectedKey
  }));
}
const Nx = /* @__PURE__ */ q(Rx), xi = /* @__PURE__ */ W(null), Kx = /* @__PURE__ */ W(null), Jr = /* @__PURE__ */ W(null), Di = /* @__PURE__ */ W(null);
function zx(e, t) {
  [e, t] = ne(e, t, xi);
  let { locale: n } = oe();
  var r;
  let a = To({
    ...e,
    locale: n,
    createCalendar: ti,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), i = I(null), [l, o] = Le(), u = I(null);
  var s;
  let { labelProps: d, fieldProps: c, inputProps: p, descriptionProps: f, errorMessageProps: b, ...m } = Do({
    ...dt(e),
    label: o,
    inputRef: u,
    validationBehavior: (s = e.validationBehavior) !== null && s !== void 0 ? s : "native"
  }, a, i), h = ee({
    ...dt(e),
    values: {
      state: a,
      isInvalid: a.isInvalid,
      isDisabled: a.isDisabled
    },
    defaultClassName: "react-aria-DateField"
  }), y = Y(e);
  return delete y.id, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Jr,
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
        an,
        {
          ...p,
          ref: u
        }
      ],
      [
        Oe,
        {
          ...d,
          ref: l,
          elementType: "span"
        }
      ],
      [
        Me,
        {
          slots: {
            description: f,
            errorMessage: b
          }
        }
      ],
      [
        tt,
        m
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...y,
    ...h,
    ref: t,
    slot: e.slot || void 0,
    "data-invalid": a.isInvalid || void 0
  }));
}
const Vx = /* @__PURE__ */ q(zx);
function Lx(e, t) {
  [e, t] = ne(e, t, Kx);
  let { locale: n } = oe();
  var r;
  let a = G5({
    ...e,
    locale: n,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), i = I(null), [l, o] = Le(), u = I(null);
  var s;
  let { labelProps: d, fieldProps: c, inputProps: p, descriptionProps: f, errorMessageProps: b, ...m } = Vy({
    ...dt(e),
    label: o,
    inputRef: u,
    validationBehavior: (s = e.validationBehavior) !== null && s !== void 0 ? s : "native"
  }, a, i), h = ee({
    ...e,
    values: {
      state: a,
      isInvalid: a.isInvalid,
      isDisabled: a.isDisabled
    },
    defaultClassName: "react-aria-TimeField"
  }), y = Y(e);
  return delete y.id, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Di,
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
        an,
        {
          ...p,
          ref: u
        }
      ],
      [
        Oe,
        {
          ...d,
          ref: l,
          elementType: "span"
        }
      ],
      [
        Me,
        {
          slots: {
            description: f,
            errorMessage: b
          }
        }
      ],
      [
        tt,
        m
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...y,
    ...h,
    ref: t,
    slot: e.slot || void 0,
    "data-invalid": a.isInvalid || void 0
  }));
}
const Ox = /* @__PURE__ */ q(Lx);
function jx(e, t) {
  let n = U(Jr), r = U(Di);
  return n || r ? /* @__PURE__ */ g.createElement(zh, {
    ...e,
    ref: t
  }) : /* @__PURE__ */ g.createElement(Hx, {
    ...e,
    ref: t
  });
}
const Hx = /* @__PURE__ */ q((e, t) => {
  let [n, r] = ne({
    slot: e.slot
  }, t, xi), { locale: a } = oe(), i = To({
    ...n,
    locale: a,
    createCalendar: ti
  }), l = I(null), { fieldProps: o, inputProps: u } = Do({
    ...n,
    inputRef: l
  }, i, r);
  return /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Jr,
        i
      ],
      [
        an,
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
  }, /* @__PURE__ */ g.createElement(zh, e));
}), zh = /* @__PURE__ */ q((e, t) => {
  let { className: n, children: r } = e, a = U(Jr), i = U(Di), l = a ?? i;
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(zo, {
    ...e,
    ref: t,
    slot: e.slot || void 0,
    className: n ?? "react-aria-DateInput",
    isInvalid: l.isInvalid
  }, l.segments.map((o, u) => /* @__PURE__ */ Rs(r(o), {
    key: u
  }))), /* @__PURE__ */ g.createElement(Mh, null));
}), _x = /* @__PURE__ */ q(jx);
function Ux({ segment: e, ...t }, n) {
  let r = U(Jr), a = U(Di), i = r ?? a, l = Te(n), { segmentProps: o } = Hy(e, i, l), { focusProps: u, isFocused: s, isFocusVisible: d } = be(), { hoverProps: c, isHovered: p } = ye({
    ...t,
    isDisabled: i.isDisabled || e.type === "literal"
  }), f = ee({
    ...t,
    values: {
      ...e,
      isReadOnly: !e.isEditable,
      isInvalid: i.isInvalid,
      isDisabled: i.isDisabled,
      isHovered: p,
      isFocused: s,
      isFocusVisible: d
    },
    defaultChildren: e.text,
    defaultClassName: "react-aria-DateSegment"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...j(Y(t), o, u, c),
    ...f,
    ref: l,
    "data-placeholder": e.isPlaceholder || void 0,
    "data-invalid": i.isInvalid || void 0,
    "data-readonly": !e.isEditable || void 0,
    "data-disabled": i.isDisabled || void 0,
    "data-type": e.type,
    "data-hovered": p || void 0,
    "data-focused": s || void 0,
    "data-focus-visible": d || void 0
  });
}
const Wx = /* @__PURE__ */ q(Ux), Gx = /* @__PURE__ */ W(null), Zx = /* @__PURE__ */ W(null), qx = /* @__PURE__ */ W(null), Yx = /* @__PURE__ */ W(null);
function Jx(e, t) {
  [e, t] = ne(e, t, Gx);
  var n;
  let r = V5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), a = I(null), [i, l] = Le();
  var o;
  let { groupProps: u, labelProps: s, fieldProps: d, buttonProps: c, dialogProps: p, calendarProps: f, descriptionProps: b, errorMessageProps: m, ...h } = Ly({
    ...dt(e),
    label: l,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, r, a), { focusProps: y, isFocused: $, isFocusVisible: x } = be({
    within: !0
  }), C = ee({
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
  return delete P.id, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        qx,
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
        xi,
        d
      ],
      [
        pt,
        {
          ...c,
          isPressed: r.isOpen
        }
      ],
      [
        Oe,
        {
          ...s,
          ref: i,
          elementType: "span"
        }
      ],
      [
        wh,
        f
      ],
      [
        Bt,
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
        _o,
        p
      ],
      [
        Me,
        {
          slots: {
            description: b,
            errorMessage: m
          }
        }
      ],
      [
        tt,
        h
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
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
const Xx = /* @__PURE__ */ q(Jx);
function Qx(e, t) {
  [e, t] = ne(e, t, Zx);
  var n;
  let r = W5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), a = I(null), [i, l] = Le();
  var o;
  let { groupProps: u, labelProps: s, startFieldProps: d, endFieldProps: c, buttonProps: p, dialogProps: f, calendarProps: b, descriptionProps: m, errorMessageProps: h, ...y } = Uy({
    ...dt(e),
    label: l,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, r, a), { focusProps: $, isFocused: x, isFocusVisible: C } = be({
    within: !0
  }), P = ee({
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
  return delete B.id, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Yx,
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
        pt,
        {
          ...p,
          isPressed: r.isOpen
        }
      ],
      [
        Oe,
        {
          ...s,
          ref: i,
          elementType: "span"
        }
      ],
      [
        Sh,
        b
      ],
      [
        Bt,
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
        _o,
        f
      ],
      [
        xi,
        {
          slots: {
            start: d,
            end: c
          }
        }
      ],
      [
        Me,
        {
          slots: {
            description: m,
            errorMessage: h
          }
        }
      ],
      [
        tt,
        y
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
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
const eD = /* @__PURE__ */ q(Qx);
var Uo = {}, Vh = {};
Vh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"حدد عنصرًا","tableResizer":"أداة تغيير الحجم"}');
var Lh = {};
Lh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Изберете предмет","tableResizer":"Преоразмерител"}');
var Oh = {};
Oh = JSON.parse('{"dropzoneLabel":"Místo pro přetažení","selectPlaceholder":"Vyberte položku","tableResizer":"Změna velikosti"}');
var jh = {};
jh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Vælg et element","tableResizer":"Størrelsesændring"}');
var Hh = {};
Hh = JSON.parse('{"dropzoneLabel":"Ablegebereich","selectPlaceholder":"Element wählen","tableResizer":"Größenanpassung"}');
var _h = {};
_h = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Επιλέξτε ένα αντικείμενο","tableResizer":"Αλλαγή μεγέθους"}');
var Uh = {};
Uh = JSON.parse('{"selectPlaceholder":"Select an item","tableResizer":"Resizer","dropzoneLabel":"DropZone"}');
var Wh = {};
Wh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Seleccionar un artículo","tableResizer":"Cambiador de tamaño"}');
var Gh = {};
Gh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valige üksus","tableResizer":"Suuruse muutja"}');
var Zh = {};
Zh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valitse kohde","tableResizer":"Koon muuttaja"}');
var qh = {};
qh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Sélectionner un élément","tableResizer":"Redimensionneur"}');
var Yh = {};
Yh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"בחר פריט","tableResizer":"שינוי גודל"}');
var Jh = {};
Jh = JSON.parse('{"dropzoneLabel":"Zona spuštanja","selectPlaceholder":"Odaberite stavku","tableResizer":"Promjena veličine"}');
var Xh = {};
Xh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Válasszon ki egy elemet","tableResizer":"Átméretező"}');
var Qh = {};
Qh = JSON.parse('{"dropzoneLabel":"Zona di rilascio","selectPlaceholder":"Seleziona un elemento","tableResizer":"Ridimensionamento"}');
var ev = {};
ev = JSON.parse('{"dropzoneLabel":"ドロップゾーン","selectPlaceholder":"項目を選択","tableResizer":"サイズ変更ツール"}');
var tv = {};
tv = JSON.parse('{"dropzoneLabel":"드롭 영역","selectPlaceholder":"항목 선택","tableResizer":"크기 조정기"}');
var nv = {};
nv = JSON.parse('{"dropzoneLabel":"„DropZone“","selectPlaceholder":"Pasirinkite elementą","tableResizer":"Dydžio keitiklis"}');
var rv = {};
rv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izvēlēties vienumu","tableResizer":"Izmēra mainītājs"}');
var av = {};
av = JSON.parse('{"dropzoneLabel":"Droppsone","selectPlaceholder":"Velg et element","tableResizer":"Størrelsesendrer"}');
var iv = {};
iv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecteer een item","tableResizer":"Resizer"}');
var lv = {};
lv = JSON.parse('{"dropzoneLabel":"Strefa upuszczania","selectPlaceholder":"Wybierz element","tableResizer":"Zmiana rozmiaru"}');
var ov = {};
ov = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');
var uv = {};
uv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');
var sv = {};
sv = JSON.parse('{"dropzoneLabel":"Zonă de plasare","selectPlaceholder":"Selectați un element","tableResizer":"Instrument de redimensionare"}');
var dv = {};
dv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Выберите элемент","tableResizer":"Средство изменения размера"}');
var cv = {};
cv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Vyberte položku","tableResizer":"Nástroj na zmenu veľkosti"}');
var fv = {};
fv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izberite element","tableResizer":"Spreminjanje velikosti"}');
var pv = {};
pv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izaberite stavku","tableResizer":"Promena veličine"}');
var bv = {};
bv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Välj en artikel","tableResizer":"Storleksändrare"}');
var mv = {};
mv = JSON.parse('{"dropzoneLabel":"Bırakma Bölgesi","selectPlaceholder":"Bir öğe seçin","tableResizer":"Yeniden boyutlandırıcı"}');
var hv = {};
hv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Виберіть елемент","tableResizer":"Засіб змінення розміру"}');
var vv = {};
vv = JSON.parse('{"dropzoneLabel":"放置区域","selectPlaceholder":"选择一个项目","tableResizer":"尺寸调整器"}');
var gv = {};
gv = JSON.parse('{"dropzoneLabel":"放置區","selectPlaceholder":"選取項目","tableResizer":"大小調整器"}');
Uo = {
  "ar-AE": Vh,
  "bg-BG": Lh,
  "cs-CZ": Oh,
  "da-DK": jh,
  "de-DE": Hh,
  "el-GR": _h,
  "en-US": Uh,
  "es-ES": Wh,
  "et-EE": Gh,
  "fi-FI": Zh,
  "fr-FR": qh,
  "he-IL": Yh,
  "hr-HR": Jh,
  "hu-HU": Xh,
  "it-IT": Qh,
  "ja-JP": ev,
  "ko-KR": tv,
  "lt-LT": nv,
  "lv-LV": rv,
  "nb-NO": av,
  "nl-NL": iv,
  "pl-PL": lv,
  "pt-BR": ov,
  "pt-PT": uv,
  "ro-RO": sv,
  "ru-RU": dv,
  "sk-SK": cv,
  "sl-SI": fv,
  "sr-SP": pv,
  "sv-SE": bv,
  "tr-TR": mv,
  "uk-UA": hv,
  "zh-CN": vv,
  "zh-TW": gv
};
function tD(e, t) {
  let { validationErrors: n, children: r, className: a, ...i } = e;
  return /* @__PURE__ */ g.createElement("form", {
    ...i,
    ref: t,
    className: a || "react-aria-Form"
  }, /* @__PURE__ */ g.createElement(vc.Provider, {
    value: n ?? {}
  }, r));
}
const nD = /* @__PURE__ */ q(tD), rD = /* @__PURE__ */ W(null);
function aD(e, t) {
  [e, t] = ne(e, t, rD);
  let { collection: n, portal: r } = Wr(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, r, /* @__PURE__ */ g.createElement(iD, {
    props: e,
    collection: n,
    gridListRef: t
  }));
}
function iD({ props: e, collection: t, gridListRef: n }) {
  let { dragAndDropHooks: r } = e, a = ci({
    ...e,
    collection: t,
    children: void 0
  }), { gridProps: i } = Ip(e, a, n), l = ct({
    items: t,
    children: (R) => {
      switch (R.type) {
        case "item":
          return /* @__PURE__ */ g.createElement(sD, {
            item: R
          });
        default:
          throw new Error("Unsupported node type in GridList: " + R.type);
      }
    }
  }), o = a.selectionManager, u = !!(r != null && r.useDraggableCollectionState), s = !!(r != null && r.useDroppableCollectionState), d = I(u), c = I(s);
  J(() => {
    d.current !== u && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), c.current !== s && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    u,
    s
  ]);
  let p, f, b, m = !1, h = null, y = I(null);
  if (u && r) {
    p = r.useDraggableCollectionState({
      collection: t,
      selectionManager: o,
      preview: r.renderDragPreview ? y : void 0
    }), r.useDraggableCollection({}, p, n);
    let R = r.DragPreview;
    h = r.renderDragPreview ? /* @__PURE__ */ g.createElement(R, {
      ref: y
    }, r.renderDragPreview) : null;
  }
  if (s && r) {
    f = r.useDroppableCollectionState({
      collection: t,
      selectionManager: o
    });
    let R = new Cn(t, o.disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : o.disabledKeys, n), F = r.dropTargetDelegate || new r.ListDropTargetDelegate(t, n);
    b = r.useDroppableCollection({
      keyboardDelegate: R,
      dropTargetDelegate: F
    }, f, n), m = f.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: $, isFocused: x, isFocusVisible: C } = be(), P = {
    isDropTarget: m,
    isEmpty: a.collection.size === 0,
    isFocused: x,
    isFocusVisible: C,
    state: a
  }, B = ee({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-GridList",
    values: P
  }), M = null, v = null;
  if (a.collection.size === 0 && e.renderEmptyState) {
    let R = e.renderEmptyState(P);
    M = /* @__PURE__ */ g.createElement("div", {
      role: "row",
      style: {
        display: "contents"
      }
    }, /* @__PURE__ */ g.createElement("div", {
      role: "gridcell",
      style: {
        display: "contents"
      }
    }, R));
  }
  return /* @__PURE__ */ g.createElement(Nr, null, /* @__PURE__ */ g.createElement("div", {
    ...Y(e),
    ...B,
    ...j(i, $, b == null ? void 0 : b.collectionProps, v),
    ref: n,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-drop-target": m || void 0,
    "data-empty": a.collection.size === 0 || void 0,
    "data-focused": x || void 0,
    "data-focus-visible": C || void 0
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Dt,
        a
      ],
      [
        nt,
        {
          dragAndDropHooks: r,
          dragState: p,
          dropState: f
        }
      ],
      [
        $i,
        {
          render: dD
        }
      ]
    ]
  }, s && /* @__PURE__ */ g.createElement(pD, null), l), M, h));
}
const lD = /* @__PURE__ */ q(aD);
function oD(e, t) {
  return ft("item", e, t, e.children);
}
const uD = /* @__PURE__ */ q(oD);
function sD({ item: e }) {
  let t = U(Dt), { dragAndDropHooks: n, dragState: r, dropState: a } = U(nt), i = Te(e.props.ref), { rowProps: l, gridCellProps: o, descriptionProps: u, ...s } = Np({
    node: e,
    shouldSelectOnPressUp: !!r
  }, t, i), { hoverProps: d, isHovered: c } = ye({
    isDisabled: !s.allowsSelection && !s.hasAction
  }), { isFocusVisible: p, focusProps: f } = be(), { checkboxProps: b } = Jy({
    key: e.key
  }, t), m = null;
  r && n && (m = n.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, r));
  let h = null, y = I(null), { visuallyHiddenProps: $ } = _t();
  a && n && (h = n.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, a, y));
  let x = e.props, C = r && r.isDragging(e.key), P = ee({
    ...x,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-GridListItem",
    values: {
      ...s,
      isHovered: c,
      isFocusVisible: p,
      selectionMode: t.selectionManager.selectionMode,
      selectionBehavior: t.selectionManager.selectionBehavior,
      allowsDragging: !!r,
      isDragging: C,
      isDropTarget: h == null ? void 0 : h.isDropTarget
    }
  }), B = (n == null ? void 0 : n.renderDropIndicator) || ((v) => /* @__PURE__ */ g.createElement(Vo, {
    target: v
  })), M = I(null);
  return J(() => {
    r && !M.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []), J(() => {
    e.textValue || console.warn("A `textValue` prop is required for <GridListItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    e.textValue
  ]), /* @__PURE__ */ g.createElement(g.Fragment, null, (n == null ? void 0 : n.useDropIndicator) && B({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), h && !h.isHidden && /* @__PURE__ */ g.createElement("div", {
    role: "row",
    style: {
      position: "absolute"
    }
  }, /* @__PURE__ */ g.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ g.createElement("div", {
    role: "button",
    ...$,
    ...h == null ? void 0 : h.dropIndicatorProps,
    ref: y
  }))), /* @__PURE__ */ g.createElement("div", {
    ...j(Y(x), l, f, d, m == null ? void 0 : m.dragProps),
    ...P,
    ref: i,
    "data-selected": s.isSelected || void 0,
    "data-disabled": s.isDisabled || void 0,
    "data-hovered": c || void 0,
    "data-focused": s.isFocused || void 0,
    "data-focus-visible": p || void 0,
    "data-pressed": s.isPressed || void 0,
    "data-allows-dragging": !!r || void 0,
    "data-dragging": C || void 0,
    "data-drop-target": (h == null ? void 0 : h.isDropTarget) || void 0,
    "data-selection-mode": t.selectionManager.selectionMode === "none" ? void 0 : t.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement("div", {
    ...o,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        gi,
        {
          slots: {
            selection: b
          }
        }
      ],
      [
        pt,
        {
          slots: {
            [wr]: {},
            drag: {
              ...m == null ? void 0 : m.dragButtonProps,
              ref: M,
              style: {
                pointerEvents: "none"
              }
            }
          }
        }
      ],
      [
        Me,
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
function dD(e, t) {
  t = Te(t);
  let { dragAndDropHooks: n, dropState: r } = U(nt), a = I(null), { dropIndicatorProps: i, isHidden: l, isDropTarget: o } = n.useDropIndicator(e, r, a);
  return l ? null : /* @__PURE__ */ g.createElement(fD, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    buttonRef: a,
    ref: t
  });
}
function cD(e, t) {
  let { dropIndicatorProps: n, isDropTarget: r, buttonRef: a, ...i } = e, { visuallyHiddenProps: l } = _t(), o = ee({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...o,
    role: "row",
    ref: t,
    "data-drop-target": r || void 0
  }, /* @__PURE__ */ g.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ g.createElement("div", {
    ...l,
    role: "button",
    ...n,
    ref: a
  }), o.children));
}
const fD = /* @__PURE__ */ q(cD);
function pD() {
  let { dragAndDropHooks: e, dropState: t } = U(nt), n = I(null), { dropIndicatorProps: r } = e.useDropIndicator({
    target: {
      type: "root"
    }
  }, t, n), a = t.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: i } = _t();
  return !a && r["aria-hidden"] ? null : /* @__PURE__ */ g.createElement("div", {
    role: "row",
    "aria-hidden": r["aria-hidden"],
    style: {
      position: "absolute"
    }
  }, /* @__PURE__ */ g.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ g.createElement("div", {
    role: "button",
    ...i,
    ...r,
    ref: n
  })));
}
const $v = /* @__PURE__ */ W({}), yv = /* @__PURE__ */ W(null), Xr = /* @__PURE__ */ W(null), xv = /* @__PURE__ */ W(null);
function Dv(e) {
  let { item: t, parentMenuRef: n } = e, r = U(Xr);
  return ct({
    items: r.collection.getChildren(t.key),
    children: (i) => {
      switch (i.type) {
        case "item":
          return /* @__PURE__ */ g.createElement(yD, {
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
function bD(e, t) {
  [e, t] = ne(e, t, yv);
  let { portal: n, collection: r } = Wr(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, r.size > 0 && /* @__PURE__ */ g.createElement(mD, {
    props: e,
    collection: r,
    menuRef: t
  }), n);
}
function mD({ props: e, collection: t, menuRef: n }) {
  let r = g6({
    ...e,
    collection: t,
    children: void 0
  }), [a, i] = Z(null), { menuProps: l } = ky(e, r, n), o = U(xv), u = U(Ht), s = ct({
    items: r.collection,
    children: (p) => {
      switch (p.type) {
        case "section":
          return /* @__PURE__ */ g.createElement(vD, {
            section: p,
            parentMenuRef: n
          });
        case "separator":
          return /* @__PURE__ */ g.createElement(yi, p.props);
        case "item":
          return /* @__PURE__ */ g.createElement(Cv, {
            item: p
          });
        case "submenutrigger":
          return /* @__PURE__ */ g.createElement(Dv, {
            item: p,
            parentMenuRef: n
          });
        default:
          throw new Error("Unsupported node type in Menu: " + p.type);
      }
    }
  }), d = (u == null ? void 0 : u.trigger) === "SubmenuTrigger";
  Xs({
    ref: n,
    onInteractOutside: (p) => {
      o && !(a != null && a.contains(p.target)) && o.close();
    },
    isDisabled: d || (o == null ? void 0 : o.UNSTABLE_expandedKeysStack.length) === 0
  });
  var c;
  return /* @__PURE__ */ g.createElement(Nr, null, /* @__PURE__ */ g.createElement("div", {
    ...Y(e),
    ...l,
    ref: n,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    style: e.style,
    className: (c = e.className) !== null && c !== void 0 ? c : "react-aria-Menu"
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Xr,
        r
      ],
      [
        Oo,
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
  }, s)), /* @__PURE__ */ g.createElement("div", {
    ref: i,
    style: {
      width: "100vw",
      position: "absolute",
      top: 0
    }
  }));
}
const hD = /* @__PURE__ */ q(bD);
function vD({ section: e, className: t, style: n, parentMenuRef: r, ...a }) {
  var i, l;
  let o = U(Xr), [u, s] = Le();
  var d;
  let { headingProps: c, groupProps: p } = Fy({
    heading: s,
    "aria-label": (d = e["aria-label"]) !== null && d !== void 0 ? d : void 0
  }), f = ct({
    items: o.collection.getChildren(e.key),
    children: (b) => {
      switch (b.type) {
        case "header": {
          let { ref: m, ...h } = b.props;
          return /* @__PURE__ */ g.createElement(Lo, {
            ...c,
            ...h,
            ref: Ga(u, m)
          }, b.rendered);
        }
        case "item":
          return /* @__PURE__ */ g.createElement(Cv, {
            item: b
          });
        case "submenutrigger":
          return /* @__PURE__ */ g.createElement(Dv, {
            item: b,
            parentMenuRef: r
          });
        default:
          throw new Error("Unsupported element type in Section: " + b.type);
      }
    }
  });
  return /* @__PURE__ */ g.createElement("section", {
    ...Y(a),
    ...p,
    className: t || ((i = e.props) === null || i === void 0 ? void 0 : i.className) || "react-aria-Section",
    style: n || ((l = e.props) === null || l === void 0 ? void 0 : l.style),
    ref: e.props.ref
  }, f);
}
function gD(e, t) {
  return ft("item", e, t, e.children);
}
const $D = /* @__PURE__ */ q(gD);
function Cv({ item: e }) {
  var t;
  let n = U(Xr), r = Te(e.props.ref), { menuItemProps: a, labelProps: i, descriptionProps: l, keyboardShortcutProps: o, ...u } = Yf({
    key: e.key,
    "aria-label": (t = e.props) === null || t === void 0 ? void 0 : t["aria-label"]
  }, n, r), s = e.props, { isFocusVisible: d, focusProps: c } = be(), { hoverProps: p, isHovered: f } = ye({
    isDisabled: u.isDisabled
  }), b = ee({
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
  return /* @__PURE__ */ g.createElement(m, {
    ...j(a, c, p),
    ...b,
    ref: r,
    "data-disabled": u.isDisabled || void 0,
    "data-hovered": f || void 0,
    "data-focused": u.isFocused || void 0,
    "data-focus-visible": d || void 0,
    "data-pressed": u.isPressed || void 0,
    "data-selected": u.isSelected || void 0,
    "data-selection-mode": n.selectionManager.selectionMode === "none" ? void 0 : n.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Me,
        {
          slots: {
            label: i,
            description: l
          }
        }
      ],
      [
        $v,
        o
      ]
    ]
  }, b.children));
}
function yD({ item: e, popover: t, parentMenuRef: n, delay: r }) {
  let a = U(Xr), i = Zr(Ht), l = Te(e.props.ref), o = U(xv), u = Z5({
    triggerKey: e.key
  }, o), s = I(null), { submenuTriggerProps: d, submenuProps: c, popoverProps: p } = Ry({
    node: e,
    parentMenuRef: n,
    submenuRef: s,
    delay: r
  }, u, l), { menuItemProps: f, labelProps: b, descriptionProps: m, keyboardShortcutProps: h, ...y } = Yf({
    key: e.key,
    ...d
  }, a, l), $ = e.props, { hoverProps: x, isHovered: C } = ye({
    isDisabled: y.isDisabled
  }), { isFocusVisible: P, focusProps: B } = be(), M = ee({
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
  return /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Me,
        {
          slots: {
            label: b,
            description: m
          }
        }
      ],
      [
        $v,
        h
      ],
      [
        yv,
        c
      ],
      [
        Bt,
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
          ...p
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...j(f, B, x),
    ...M,
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
  }, M.children), t);
}
const xD = /* @__PURE__ */ W(null);
function DD(e, t) {
  [e, t] = ne(e, t, xD);
  let { value: n = 0, minValue: r = 0, maxValue: a = 100 } = e;
  n = st(n, r, a);
  let [i, l] = Le(), { meterProps: o, labelProps: u } = Xy({
    ...e,
    label: l
  }), s = (n - r) / (a - r) * 100, d = ee({
    ...e,
    defaultClassName: "react-aria-Meter",
    values: {
      percentage: s,
      valueText: o["aria-valuetext"]
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...o,
    ...d,
    ref: t,
    slot: e.slot || void 0
  }, /* @__PURE__ */ g.createElement(Oe.Provider, {
    value: {
      ...u,
      ref: i,
      elementType: "span"
    }
  }, d.children));
}
const CD = /* @__PURE__ */ q(DD), ED = /* @__PURE__ */ W(null), Wo = /* @__PURE__ */ W(null);
function PD(e, t) {
  if (U(Wo))
    return /* @__PURE__ */ g.createElement(Cs, {
      ...e,
      modalRef: t
    }, e.children);
  let { isDismissable: r, isKeyboardDismissDisabled: a, isOpen: i, defaultOpen: l, onOpenChange: o, children: u, isEntering: s, isExiting: d, UNSTABLE_portalContainer: c, ...p } = e;
  return /* @__PURE__ */ g.createElement(Ev, {
    isDismissable: r,
    isKeyboardDismissDisabled: a,
    isOpen: i,
    defaultOpen: l,
    onOpenChange: o,
    isEntering: s,
    isExiting: d,
    UNSTABLE_portalContainer: c
  }, /* @__PURE__ */ g.createElement(Cs, {
    ...p,
    modalRef: t
  }, u));
}
const wD = /* @__PURE__ */ q(PD);
function SD(e, t) {
  [e, t] = ne(e, t, ED);
  let n = U(Bt), r = En(e), a = e.isOpen != null || e.defaultOpen != null || !n ? r : n, i = Te(t), l = I(null), o = Ua(i, a.isOpen), u = Ua(l, a.isOpen), s = o || u || e.isExiting || !1, d = wt();
  return !a.isOpen && !s || d ? null : /* @__PURE__ */ g.createElement(BD, {
    ...e,
    state: a,
    isExiting: s,
    overlayRef: i,
    modalRef: l
  });
}
const Ev = /* @__PURE__ */ q(SD);
function BD({ UNSTABLE_portalContainer: e, ...t }) {
  let n = t.modalRef, { state: r } = t, { modalProps: a, underlayProps: i } = $y(t, r, n), l = fi(t.overlayRef) || t.isEntering || !1, o = ee({
    ...t,
    defaultClassName: "react-aria-ModalOverlay",
    values: {
      isEntering: l,
      isExiting: t.isExiting,
      state: r
    }
  }), u = zg(), s = {
    ...o.style,
    "--visual-viewport-height": u.height + "px"
  };
  return /* @__PURE__ */ g.createElement(sf, {
    isExiting: t.isExiting,
    portalContainer: e
  }, /* @__PURE__ */ g.createElement("div", {
    ...j(Y(t), i),
    ...o,
    style: s,
    ref: t.overlayRef,
    "data-entering": l || void 0,
    "data-exiting": t.isExiting || void 0
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Wo,
        {
          modalProps: a,
          modalRef: n,
          isExiting: t.isExiting,
          isDismissable: t.isDismissable
        }
      ],
      [
        Bt,
        r
      ]
    ]
  }, o.children)));
}
function Cs(e) {
  let { modalProps: t, modalRef: n, isExiting: r, isDismissable: a } = U(Wo), i = U(Bt), l = K(() => Ga(e.modalRef, n), [
    e.modalRef,
    n
  ]), o = Te(l), u = fi(o), s = ee({
    ...e,
    defaultClassName: "react-aria-Modal",
    values: {
      isEntering: u,
      isExiting: r,
      state: i
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...j(Y(e), t),
    ...s,
    ref: o,
    "data-entering": u || void 0,
    "data-exiting": r || void 0
  }, a && /* @__PURE__ */ g.createElement(Pl, {
    onDismiss: i.close
  }), s.children);
}
const kD = /* @__PURE__ */ W(null), FD = /* @__PURE__ */ W(null);
function AD(e, t) {
  [e, t] = ne(e, t, kD);
  let { locale: n } = oe();
  var r;
  let a = q5({
    ...e,
    locale: n,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), i = I(null), [l, o] = Le();
  var u;
  let { labelProps: s, groupProps: d, inputProps: c, incrementButtonProps: p, decrementButtonProps: f, descriptionProps: b, errorMessageProps: m, ...h } = e5({
    ...dt(e),
    label: o,
    validationBehavior: (u = e.validationBehavior) !== null && u !== void 0 ? u : "native"
  }, a, i), y = ee({
    ...e,
    values: {
      state: a,
      isDisabled: e.isDisabled || !1,
      isInvalid: h.isInvalid || !1
    },
    defaultClassName: "react-aria-NumberField"
  }), $ = Y(e);
  return delete $.id, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        FD,
        a
      ],
      [
        Ut,
        d
      ],
      [
        an,
        {
          ...c,
          ref: i
        }
      ],
      [
        Oe,
        {
          ...s,
          ref: l
        }
      ],
      [
        pt,
        {
          slots: {
            increment: p,
            decrement: f
          }
        }
      ],
      [
        Me,
        {
          slots: {
            description: b,
            errorMessage: m
          }
        }
      ],
      [
        tt,
        h
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...$,
    ...y,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": h.isInvalid || void 0
  }), e.name && /* @__PURE__ */ g.createElement("input", {
    type: "hidden",
    name: e.name,
    value: isNaN(a.numberValue) ? "" : a.numberValue
  }));
}
const TD = /* @__PURE__ */ q(AD), MD = /* @__PURE__ */ W(null);
function RD(e, t) {
  [e, t] = ne(e, t, MD);
  let { value: n = 0, minValue: r = 0, maxValue: a = 100, isIndeterminate: i = !1 } = e;
  n = st(n, r, a);
  let [l, o] = Le(), { progressBarProps: u, labelProps: s } = Kp({
    ...e,
    label: o
  }), d = i ? void 0 : (n - r) / (a - r) * 100, c = ee({
    ...e,
    defaultClassName: "react-aria-ProgressBar",
    values: {
      percentage: d,
      valueText: u["aria-valuetext"],
      isIndeterminate: i
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...u,
    ...c,
    ref: t,
    slot: e.slot || void 0
  }, /* @__PURE__ */ g.createElement(Oe.Provider, {
    value: {
      ...s,
      ref: l,
      elementType: "span"
    }
  }, c.children));
}
const ID = /* @__PURE__ */ q(RD), ND = /* @__PURE__ */ W(null), KD = /* @__PURE__ */ W(null), Pv = /* @__PURE__ */ W(null);
function zD(e, t) {
  [e, t] = ne(e, t, ND);
  var n;
  let r = X5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), [a, i] = Le();
  var l;
  let { radioGroupProps: o, labelProps: u, descriptionProps: s, errorMessageProps: d, ...c } = n5({
    ...e,
    label: i,
    validationBehavior: (l = e.validationBehavior) !== null && l !== void 0 ? l : "native"
  }, r), p = ee({
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
  return /* @__PURE__ */ g.createElement("div", {
    ...o,
    ...p,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "vertical",
    "data-invalid": r.isInvalid || void 0,
    "data-disabled": r.isDisabled || void 0,
    "data-readonly": r.isReadOnly || void 0,
    "data-required": r.isRequired || void 0
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Pv,
        r
      ],
      [
        Oe,
        {
          ...u,
          ref: a,
          elementType: "span"
        }
      ],
      [
        Me,
        {
          slots: {
            description: s,
            errorMessage: d
          }
        }
      ],
      [
        tt,
        c
      ]
    ]
  }, p.children));
}
function VD(e, t) {
  [e, t] = ne(e, t, KD);
  let n = g.useContext(Pv), r = I(null), { labelProps: a, inputProps: i, isSelected: l, isDisabled: o, isPressed: u } = t5({
    ...dt(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, n, r), { isFocused: s, isFocusVisible: d, focusProps: c } = be(), p = o || n.isReadOnly, { hoverProps: f, isHovered: b } = ye({
    ...e,
    isDisabled: p
  }), m = ee({
    ...e,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: l,
      isPressed: u,
      isHovered: b,
      isFocused: s,
      isFocusVisible: d,
      isDisabled: o,
      isReadOnly: n.isReadOnly,
      isInvalid: n.isInvalid,
      isRequired: n.isRequired
    }
  }), h = Y(e);
  return delete h.id, /* @__PURE__ */ g.createElement("label", {
    ...j(h, a, f, m),
    ref: t,
    "data-selected": l || void 0,
    "data-pressed": u || void 0,
    "data-hovered": b || void 0,
    "data-focused": s || void 0,
    "data-focus-visible": d || void 0,
    "data-disabled": o || void 0,
    "data-readonly": n.isReadOnly || void 0,
    "data-invalid": n.isInvalid || void 0,
    "data-required": n.isRequired || void 0
  }, /* @__PURE__ */ g.createElement(jt, {
    elementType: "span"
  }, /* @__PURE__ */ g.createElement("input", {
    ...j(i, c),
    ref: r
  })), m.children);
}
const LD = /* @__PURE__ */ q(zD), OD = /* @__PURE__ */ q(VD), jD = /* @__PURE__ */ W(null);
function HD(e, t) {
  [e, t] = ne(e, t, jD);
  let n = I(null), [r, a] = Le();
  var i;
  let l = Q5({
    ...e,
    validationBehavior: (i = e.validationBehavior) !== null && i !== void 0 ? i : "native"
  });
  var o;
  let { labelProps: u, inputProps: s, clearButtonProps: d, descriptionProps: c, errorMessageProps: p, ...f } = a5({
    ...dt(e),
    label: a,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, l, n), b = ee({
    ...e,
    values: {
      isEmpty: l.value === "",
      isDisabled: e.isDisabled || !1,
      isInvalid: f.isInvalid || !1,
      state: l
    },
    defaultClassName: "react-aria-SearchField"
  }), m = Y(e);
  return delete m.id, /* @__PURE__ */ g.createElement("div", {
    ...m,
    ...b,
    ref: t,
    slot: e.slot || void 0,
    "data-empty": l.value === "" || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": f.isInvalid || void 0
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Oe,
        {
          ...u,
          ref: r
        }
      ],
      [
        an,
        {
          ...s,
          ref: n
        }
      ],
      [
        pt,
        d
      ],
      [
        Me,
        {
          slots: {
            description: c,
            errorMessage: p
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
        tt,
        f
      ]
    ]
  }, b.children));
}
const _D = /* @__PURE__ */ q(HD), ya = /* @__PURE__ */ W(null), zl = /* @__PURE__ */ W(null);
function UD(e, t) {
  [e, t] = ne(e, t, ya);
  let { collection: n, document: r } = Gr();
  var a;
  let i = e6({
    ...e,
    collection: n,
    children: void 0,
    validationBehavior: (a = e.validationBehavior) !== null && a !== void 0 ? a : "native"
  }), { isFocusVisible: l, focusProps: o } = be({
    within: !0
  }), u = I(null), [s, d] = Le();
  var c;
  let { labelProps: p, triggerProps: f, valueProps: b, menuProps: m, descriptionProps: h, errorMessageProps: y, ...$ } = i5({
    ...dt(e),
    label: d,
    validationBehavior: (c = e.validationBehavior) !== null && c !== void 0 ? c : "native"
  }, i, u), [x, C] = Z(null), P = Q(() => {
    u.current && C(u.current.offsetWidth + "px");
  }, [
    u
  ]);
  Mr({
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
  ]), M = ee({
    ...e,
    values: B,
    defaultClassName: "react-aria-Select"
  }), v = Y(e);
  return delete v.id, /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(No, null, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        ya,
        e
      ],
      [
        zl,
        i
      ],
      [
        Pn,
        r
      ]
    ]
  }, M.children)), /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        ya,
        e
      ],
      [
        zl,
        i
      ],
      [
        wv,
        b
      ],
      [
        Oe,
        {
          ...p,
          ref: s,
          elementType: "span"
        }
      ],
      [
        pt,
        {
          ...f,
          ref: u,
          isPressed: i.isOpen
        }
      ],
      [
        Bt,
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
        Yr,
        m
      ],
      [
        Dt,
        i
      ],
      [
        Me,
        {
          slots: {
            description: h,
            errorMessage: y
          }
        }
      ],
      [
        tt,
        $
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...v,
    ...M,
    ...o,
    ref: t,
    slot: e.slot || void 0,
    "data-focused": i.isFocused || void 0,
    "data-focus-visible": l || void 0,
    "data-open": i.isOpen || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": $.isInvalid || void 0,
    "data-required": e.isRequired || void 0
  }), /* @__PURE__ */ g.createElement(o5, {
    state: i,
    triggerRef: u,
    label: d,
    name: e.name,
    isDisabled: e.isDisabled
  })));
}
const WD = /* @__PURE__ */ q(UD), wv = /* @__PURE__ */ W(null);
function GD(e, t) {
  var n, r;
  [e, t] = ne(e, t, wv);
  let a = U(zl), { placeholder: i } = Zr(ya), l = a.selectedKey != null ? a.collection.getItem(a.selectedKey) : null, o = l == null ? void 0 : l.rendered;
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
  let u = Ee(/* @__PURE__ */ mh(Uo), "react-aria-components");
  var s, d;
  let c = ee({
    ...e,
    defaultChildren: o || i || u.format("selectPlaceholder"),
    defaultClassName: "react-aria-SelectValue",
    values: {
      selectedItem: (s = (n = a.selectedItem) === null || n === void 0 ? void 0 : n.value) !== null && s !== void 0 ? s : null,
      selectedText: (d = (r = a.selectedItem) === null || r === void 0 ? void 0 : r.textValue) !== null && d !== void 0 ? d : null,
      isPlaceholder: !l
    }
  }), p = Y(e);
  return /* @__PURE__ */ g.createElement("span", {
    ref: t,
    ...p,
    ...c,
    "data-placeholder": !l || void 0
  }, /* @__PURE__ */ g.createElement(Me.Provider, {
    value: void 0
  }, c.children));
}
const ZD = /* @__PURE__ */ q(GD), qD = /* @__PURE__ */ W(null), Ci = /* @__PURE__ */ W(null), Go = /* @__PURE__ */ W(null), Sv = /* @__PURE__ */ W(null);
function YD(e, t) {
  [e, t] = ne(e, t, qD);
  let n = I(null), r = La(e.formatOptions), a = a6({
    ...e,
    numberFormatter: r
  }), [i, l] = Le(), { groupProps: o, trackProps: u, labelProps: s, outputProps: d } = s5({
    ...e,
    label: l
  }, a, n), c = ee({
    ...e,
    values: {
      orientation: a.orientation,
      isDisabled: a.isDisabled,
      state: a
    },
    defaultClassName: "react-aria-Slider"
  }), p = Y(e);
  return delete p.id, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Ci,
        a
      ],
      [
        Go,
        {
          ...u,
          ref: n
        }
      ],
      [
        Sv,
        d
      ],
      [
        Oe,
        {
          ...s,
          ref: i
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...p,
    ...o,
    ...c,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": a.orientation,
    "data-disabled": a.isDisabled || void 0
  }));
}
const JD = /* @__PURE__ */ q(YD);
function XD(e, t) {
  [e, t] = ne(e, t, Sv);
  let { children: n, style: r, className: a, ...i } = e, l = U(Ci), o = ee({
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
  return /* @__PURE__ */ g.createElement("output", {
    ...i,
    ...o,
    ref: t,
    "data-orientation": l.orientation || void 0,
    "data-disabled": l.isDisabled || void 0
  });
}
const QD = /* @__PURE__ */ q(XD);
function e2(e, t) {
  [e, t] = ne(e, t, Go);
  let n = U(Ci), { onHoverStart: r, onHoverEnd: a, onHoverChange: i, ...l } = e, { hoverProps: o, isHovered: u } = ye({
    onHoverStart: r,
    onHoverEnd: a,
    onHoverChange: i
  }), s = ee({
    ...e,
    defaultClassName: "react-aria-SliderTrack",
    values: {
      orientation: n.orientation,
      isDisabled: n.isDisabled,
      isHovered: u,
      state: n
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...j(l, o),
    ...s,
    ref: t,
    "data-hovered": u || void 0,
    "data-orientation": n.orientation || void 0,
    "data-disabled": n.isDisabled || void 0
  });
}
const t2 = /* @__PURE__ */ q(e2);
function n2(e, t) {
  let n = U(Ci), { ref: r } = Zr(Go), { index: a = 0 } = e, i = I(null), [l, o] = Le(), { thumbProps: u, inputProps: s, labelProps: d, isDragging: c, isFocused: p, isDisabled: f } = d5({
    ...e,
    index: a,
    trackRef: r,
    inputRef: i,
    label: o
  }, n), { focusProps: b, isFocusVisible: m } = be(), { hoverProps: h, isHovered: y } = ye(e), $ = ee({
    ...e,
    defaultClassName: "react-aria-SliderThumb",
    values: {
      state: n,
      isHovered: y,
      isDragging: c,
      isFocused: p,
      isFocusVisible: m,
      isDisabled: f
    }
  }), x = Y(e);
  return delete x.id, /* @__PURE__ */ g.createElement("div", {
    ...j(x, u, h),
    ...$,
    ref: t,
    style: {
      ...u.style,
      ...$.style
    },
    "data-hovered": y || void 0,
    "data-dragging": c || void 0,
    "data-focused": p || void 0,
    "data-focus-visible": m || void 0,
    "data-disabled": f || void 0
  }, /* @__PURE__ */ g.createElement(jt, null, /* @__PURE__ */ g.createElement("input", {
    ref: i,
    ...j(s, b)
  })), /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Oe,
        {
          ...d,
          ref: l
        }
      ]
    ]
  }, $.children));
}
const r2 = /* @__PURE__ */ q(n2), a2 = /* @__PURE__ */ W(null);
function i2(e, t) {
  [e, t] = ne(e, t, a2);
  let n = I(null), r = ai(e), { labelProps: a, inputProps: i, isSelected: l, isDisabled: o, isReadOnly: u, isPressed: s } = c5({
    ...dt(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, r, n), { isFocused: d, isFocusVisible: c, focusProps: p } = be(), f = e.isDisabled || e.isReadOnly, { hoverProps: b, isHovered: m } = ye({
    ...e,
    isDisabled: f
  }), h = ee({
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
  return delete y.id, /* @__PURE__ */ g.createElement("label", {
    ...j(y, a, b, h),
    ref: t,
    slot: e.slot || void 0,
    "data-selected": l || void 0,
    "data-pressed": s || void 0,
    "data-hovered": m || void 0,
    "data-focused": d || void 0,
    "data-focus-visible": c || void 0,
    "data-disabled": o || void 0,
    "data-readonly": u || void 0
  }, /* @__PURE__ */ g.createElement(jt, {
    elementType: "span"
  }, /* @__PURE__ */ g.createElement("input", {
    ...i,
    ...p,
    ref: n
  })), h.children);
}
const l2 = /* @__PURE__ */ q(i2);
class o2 extends vh {
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
    if (this.headerRows = ph(n, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !t)
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
    super(...t), this.headerRows = [], this.columns = [], this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.head = new Er("tableheader", -1), this.body = new Er("tablebody", -2), this.columnsDirty = !0;
  }
}
const Zo = /* @__PURE__ */ W(null);
function u2(e, t) {
  let n = Te(t), [r, a] = Z(0);
  Mr({
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
    useTableColumnResizeState: s6,
    onResizeStart: e.onResizeStart,
    onResize: e.onResize,
    onResizeEnd: e.onResizeEnd
  }), [
    r,
    e.onResizeStart,
    e.onResize,
    e.onResizeEnd
  ]);
  return /* @__PURE__ */ g.createElement("div", {
    ...Y(e),
    ref: n,
    className: e.className || "react-aria-ResizableTableContainer",
    style: e.style,
    onScroll: e.onScroll
  }, /* @__PURE__ */ g.createElement(Zo.Provider, {
    value: i
  }, e.children));
}
const s2 = /* @__PURE__ */ q(u2), d2 = /* @__PURE__ */ W(null), ln = /* @__PURE__ */ W(null), qo = /* @__PURE__ */ W(null);
function c2(e, t) {
  [e, t] = ne(e, t, d2);
  let n = K(() => new o2(), []), { portal: r, collection: a } = Wr(e, n), i = f6({
    ...e,
    collection: a,
    children: void 0
  }), { gridProps: l } = b5(e, i, t), { dragAndDropHooks: o } = e, u = i.selectionManager, s = !!(o != null && o.useDraggableCollectionState), d = !!(o != null && o.useDroppableCollectionState), c = I(s), p = I(d);
  J(() => {
    c.current !== s && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), p.current !== d && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    s,
    d
  ]);
  let f, b, m, h = !1, y = null, $ = I(null);
  if (s && o) {
    f = o.useDraggableCollectionState({
      collection: a,
      selectionManager: u,
      preview: o.renderDragPreview ? $ : void 0
    }), o.useDraggableCollection({}, f, t);
    let k = o.DragPreview;
    y = o.renderDragPreview ? /* @__PURE__ */ g.createElement(k, {
      ref: $
    }, o.renderDragPreview) : null;
  }
  if (d && o) {
    b = o.useDroppableCollectionState({
      collection: a,
      selectionManager: u
    });
    let k = new Cn(a, u.disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : u.disabledKeys, t), z = o.dropTargetDelegate || new o.ListDropTargetDelegate(a, t);
    m = o.useDroppableCollection({
      keyboardDelegate: k,
      dropTargetDelegate: z
    }, b, t), h = b.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: x, isFocused: C, isFocusVisible: P } = be(), B = ee({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: h,
      isFocused: C,
      isFocusVisible: P,
      state: i
    }
  }), { selectionBehavior: M, selectionMode: v, disallowEmptySelection: R } = i.selectionManager, F = K(() => ({
    selectionBehavior: v === "none" ? null : M,
    selectionMode: v,
    disallowEmptySelection: R,
    allowsDragging: s
  }), [
    M,
    v,
    R,
    s
  ]), E = B.style, S = U(Zo), w = null;
  return S && (w = S.useTableColumnResizeState({
    tableWidth: S.tableWidth
  }, i), E = {
    ...E,
    tableLayout: "fixed",
    width: "fit-content"
  }), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Bv.Provider, {
    value: F
  }, r), /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        ln,
        i
      ],
      [
        qo,
        w
      ],
      [
        nt,
        {
          dragAndDropHooks: o,
          dragState: f,
          dropState: b
        }
      ],
      [
        $i,
        {
          render: B2
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement(Nr, null, /* @__PURE__ */ g.createElement("table", {
    ...Y(e),
    ...B,
    ...j(l, x, m == null ? void 0 : m.collectionProps),
    style: E,
    ref: t,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-allows-dragging": s || void 0,
    "data-drop-target": h || void 0,
    "data-focused": C || void 0,
    "data-focus-visible": P || void 0
  }, /* @__PURE__ */ g.createElement(y2, {
    collection: a
  }), /* @__PURE__ */ g.createElement(x2, {
    collection: a,
    isDroppable: d
  }))), y));
}
const f2 = /* @__PURE__ */ q(c2), Bv = /* @__PURE__ */ W(null);
function kv() {
  return U(Bv);
}
function p2(e, t) {
  let n = Ur({
    children: e.children,
    items: e.columns,
    dependencies: e.dependencies
  }), r = typeof e.children == "function" ? e.children : null;
  return /* @__PURE__ */ g.createElement(Dh.Provider, {
    value: r
  }, ft("tableheader", e, t, null, n));
}
const b2 = /* @__PURE__ */ q(p2);
function m2(e, t) {
  return ft("column", e, t, e.children);
}
const Fv = /* @__PURE__ */ q(m2);
function h2(e, t) {
  let n = [
    e.value
  ].concat(e.dependencies), r = Ur({
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
  return ft("item", e, t, null, /* @__PURE__ */ g.createElement(xh.Provider, {
    value: a
  }, r));
}
const v2 = /* @__PURE__ */ q(h2);
function g2(e, t) {
  return ft("cell", e, t, e.children);
}
const $2 = /* @__PURE__ */ q(g2);
function y2({ collection: e }) {
  let t = ct({
    items: e.headerRows,
    children: Q((a) => {
      switch (a.type) {
        case "headerrow":
          return /* @__PURE__ */ g.createElement(D2, {
            item: a
          });
        default:
          throw new Error("Unsupported node type in TableHeader: " + a.type);
      }
    }, [])
  }), { rowGroupProps: n } = Vm();
  var r;
  return /* @__PURE__ */ g.createElement("thead", {
    ...Y(e.head.props),
    ...n,
    ref: e.head.props.ref,
    className: (r = e.head.props.className) !== null && r !== void 0 ? r : "react-aria-TableHeader",
    style: e.head.props.style
  }, t);
}
function x2(e) {
  let { collection: t, isDroppable: n } = e, r = ct({
    items: t.rows,
    children: Q((f) => {
      switch (f.type) {
        case "item":
          return /* @__PURE__ */ g.createElement(w2, {
            item: f
          });
        default:
          throw new Error("Unsupported node type in TableBody: " + f.type);
      }
    }, [])
  }), a = U(ln), { dropState: i } = U(nt);
  var l;
  let o = n && !!i && ((l = i.isDropTarget({
    type: "root"
  })) !== null && l !== void 0 ? l : !1), u = t.body.props, s = {
    isDropTarget: o,
    isEmpty: t.size === 0
  }, d = ee({
    ...u,
    id: void 0,
    children: void 0,
    defaultClassName: "react-aria-TableBody",
    values: s
  }), c;
  t.size === 0 && u.renderEmptyState && a && (c = /* @__PURE__ */ g.createElement("tr", {
    role: "row"
  }, /* @__PURE__ */ g.createElement("td", {
    role: "gridcell",
    colSpan: t.columnCount
  }, u.renderEmptyState(s))));
  let { rowGroupProps: p } = Vm();
  return /* @__PURE__ */ g.createElement("tbody", {
    ...j(Y(u), p),
    ...d,
    ref: t.body.props.ref,
    "data-empty": t.size === 0 || void 0
  }, n && /* @__PURE__ */ g.createElement(A2, null), r, c);
}
function D2({ item: e }) {
  let t = I(null), n = U(ln), { rowProps: r } = v5({
    node: e
  }, n, t), { checkboxProps: a } = y5(n), i = ct({
    items: n.collection.getChildren(e.key),
    children: (l) => {
      switch (l.type) {
        case "column":
          return /* @__PURE__ */ g.createElement(C2, {
            column: l
          });
        default:
          throw new Error("Unsupported node type in Row: " + l.type);
      }
    }
  });
  return /* @__PURE__ */ g.createElement("tr", {
    ...r,
    ref: t
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        gi,
        {
          slots: {
            selection: a
          }
        }
      ]
    ]
  }, i));
}
const Av = /* @__PURE__ */ W(null);
function C2({ column: e }) {
  var t, n;
  let r = Te(e.props.ref), a = U(ln), { columnHeaderProps: i } = m5({
    node: e
  }, a, r), { isFocused: l, isFocusVisible: o, focusProps: u } = be(), s = U(qo), d = !1;
  if (s)
    d = s.resizingColumn === e.key;
  else
    for (let h in [
      "width",
      "defaultWidth",
      "minWidth",
      "maxWidth"
    ])
      h in e.props && console.warn(`The ${h} prop on a <Column> only applies when a <Table> is wrapped in a <ResizableTableContainer>. If you aren't using column resizing, you can set the width of a column with CSS.`);
  let c = e.props, { hoverProps: p, isHovered: f } = ye({
    isDisabled: !c.allowsSorting
  }), b = ee({
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
      sort: (h) => {
        a.sort(e.key, h);
      }
    }
  }), m = b.style;
  return s && (m = {
    ...m,
    width: s.getColumnWidth(e.key)
  }), /* @__PURE__ */ g.createElement("th", {
    ...j(Y(c), i, u, p),
    ...b,
    style: m,
    colSpan: e.colspan,
    ref: r,
    "data-hovered": f || void 0,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    "data-resizing": d || void 0,
    "data-allows-sorting": e.props.allowsSorting || void 0,
    "data-sort-direction": ((n = a.sortDescriptor) === null || n === void 0 ? void 0 : n.column) === e.key ? a.sortDescriptor.direction : void 0
  }, /* @__PURE__ */ g.createElement(Av.Provider, {
    value: {
      column: e,
      triggerRef: r
    }
  }, b.children));
}
function E2(e, t) {
  let n = U(qo);
  if (!n)
    throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
  let r = Ee(/* @__PURE__ */ mh(Uo), "react-aria-components"), { onResizeStart: a, onResize: i, onResizeEnd: l } = U(Zo), { column: o, triggerRef: u } = U(Av), s = I(null), { resizerProps: d, inputProps: c, isResizing: p } = x5({
    column: o,
    "aria-label": e["aria-label"] || r.format("tableResizer"),
    onResizeStart: a,
    onResize: i,
    onResizeEnd: l,
    triggerRef: u
  }, n, s), { focusProps: f, isFocused: b, isFocusVisible: m } = be(), { hoverProps: h, isHovered: y } = ye(e), $ = n.getColumnMinWidth(o.key) >= n.getColumnWidth(o.key), x = n.getColumnMaxWidth(o.key) <= n.getColumnWidth(o.key), { direction: C } = oe(), P = "both";
  $ ? P = C === "rtl" ? "right" : "left" : x ? P = C === "rtl" ? "left" : "right" : P = "both";
  let B = Te(t), [M, v] = Z("");
  J(() => {
    if (!B.current)
      return;
    let w = window.getComputedStyle(B.current);
    v(w.cursor);
  }, [
    B,
    P
  ]);
  let R = ee({
    ...e,
    defaultClassName: "react-aria-ColumnResizer",
    values: {
      isFocused: b,
      isFocusVisible: m,
      isResizing: p,
      isHovered: y,
      resizableDirection: P
    }
  }), [F, E] = Z(!1), S = (w) => {
    w.pointerType === "mouse" && E(!0);
  };
  return !p && F && E(!1), /* @__PURE__ */ g.createElement("div", {
    ref: B,
    role: "presentation",
    ...R,
    ...j(d, {
      onPointerDown: S
    }, h),
    "data-hovered": y || void 0,
    "data-focused": b || void 0,
    "data-focus-visible": m || void 0,
    "data-resizing": p || void 0,
    "data-resizable-direction": P
  }, R.children, /* @__PURE__ */ g.createElement("input", {
    ref: s,
    ...j(c, f)
  }), p && F && /* @__PURE__ */ Ar.createPortal(/* @__PURE__ */ g.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      cursor: M
    }
  }), document.body));
}
const P2 = /* @__PURE__ */ q(E2);
function w2({ item: e }) {
  let t = Te(e.props.ref), n = U(ln), { dragAndDropHooks: r, dragState: a, dropState: i } = U(nt), { rowProps: l, ...o } = h5({
    node: e,
    shouldSelectOnPressUp: !!a
  }, n, t), { isFocused: u, isFocusVisible: s, focusProps: d } = be(), { hoverProps: c, isHovered: p } = ye({
    isDisabled: !o.allowsSelection && !o.hasAction
  }), { checkboxProps: f } = $5({
    key: e.key
  }, n), b;
  a && r && (b = r.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, a));
  let m, h = I(null), { visuallyHiddenProps: y } = _t();
  i && r && (m = r.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, i, h));
  let $ = (r == null ? void 0 : r.renderDropIndicator) || ((F) => /* @__PURE__ */ g.createElement(Vo, {
    target: F
  })), x = I(null);
  J(() => {
    a && !x.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []);
  let C = e.props, P = a && a.isDragging(e.key), { children: B, ...M } = C, v = ee({
    ...M,
    id: void 0,
    defaultClassName: "react-aria-Row",
    values: {
      ...o,
      isHovered: p,
      isFocused: u,
      isFocusVisible: s,
      selectionMode: n.selectionManager.selectionMode,
      selectionBehavior: n.selectionManager.selectionBehavior,
      isDragging: P,
      isDropTarget: m == null ? void 0 : m.isDropTarget
    }
  }), R = ct({
    items: n.collection.getChildren(e.key),
    children: (F) => {
      switch (F.type) {
        case "cell":
          return /* @__PURE__ */ g.createElement(S2, {
            cell: F
          });
        default:
          throw new Error("Unsupported node type in Row: " + F.type);
      }
    }
  });
  return /* @__PURE__ */ g.createElement(g.Fragment, null, (r == null ? void 0 : r.useDropIndicator) && $({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), m && !m.isHidden && /* @__PURE__ */ g.createElement("tr", {
    role: "row",
    style: {
      height: 0
    }
  }, /* @__PURE__ */ g.createElement("td", {
    role: "gridcell",
    colSpan: n.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ g.createElement("div", {
    role: "button",
    ...y,
    ...m.dropIndicatorProps,
    ref: h
  }))), /* @__PURE__ */ g.createElement("tr", {
    ...j(Y(C), l, d, c, b == null ? void 0 : b.dragProps),
    ...v,
    ref: t,
    "data-disabled": o.isDisabled || void 0,
    "data-selected": o.isSelected || void 0,
    "data-hovered": p || void 0,
    "data-focused": o.isFocused || void 0,
    "data-focus-visible": s || void 0,
    "data-pressed": o.isPressed || void 0,
    "data-dragging": P || void 0,
    "data-drop-target": (m == null ? void 0 : m.isDropTarget) || void 0,
    "data-selection-mode": n.selectionManager.selectionMode === "none" ? void 0 : n.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        gi,
        {
          slots: {
            selection: f
          }
        }
      ],
      [
        pt,
        {
          slots: {
            [wr]: {},
            drag: {
              ...b == null ? void 0 : b.dragButtonProps,
              ref: x,
              style: {
                pointerEvents: "none"
              }
            }
          }
        }
      ]
    ]
  }, R)), (r == null ? void 0 : r.useDropIndicator) && n.collection.getKeyAfter(e.key) == null && $({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }));
}
function S2({ cell: e }) {
  let t = Te(e.props.ref), n = U(ln), { dragState: r } = U(nt);
  e.column = n.collection.columns[e.index];
  let { gridCellProps: a, isPressed: i } = g5({
    node: e,
    shouldSelectOnPressUp: !!r
  }, n, t), { isFocused: l, isFocusVisible: o, focusProps: u } = be(), { hoverProps: s, isHovered: d } = ye({}), c = e.props, p = ee({
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
  return /* @__PURE__ */ g.createElement("td", {
    ...j(Y(c), a, u, s),
    ...p,
    ref: t,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    "data-pressed": i || void 0
  }, p.children);
}
function B2(e, t) {
  t = Te(t);
  let { dragAndDropHooks: n, dropState: r } = U(nt), a = I(null), { dropIndicatorProps: i, isHidden: l, isDropTarget: o } = n.useDropIndicator(e, r, a);
  return l ? null : /* @__PURE__ */ g.createElement(F2, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    buttonRef: a,
    ref: t
  });
}
function k2(e, t) {
  let { dropIndicatorProps: n, isDropTarget: r, buttonRef: a, ...i } = e, l = U(ln), { visuallyHiddenProps: o } = _t(), u = ee({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return /* @__PURE__ */ g.createElement("tr", {
    ...Y(e),
    ...u,
    role: "row",
    ref: t,
    "data-drop-target": r || void 0
  }, /* @__PURE__ */ g.createElement("td", {
    role: "gridcell",
    colSpan: l.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ g.createElement("div", {
    ...o,
    role: "button",
    ...n,
    ref: a
  }), u.children));
}
const F2 = /* @__PURE__ */ q(k2);
function A2() {
  let e = U(ln), { dragAndDropHooks: t, dropState: n } = U(nt), r = I(null), { dropIndicatorProps: a } = t.useDropIndicator({
    target: {
      type: "root"
    }
  }, n, r), i = n.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: l } = _t();
  return !i && a["aria-hidden"] ? null : /* @__PURE__ */ g.createElement("tr", {
    role: "row",
    "aria-hidden": a["aria-hidden"],
    style: {
      height: 0
    }
  }, /* @__PURE__ */ g.createElement("td", {
    role: "gridcell",
    colSpan: e.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ g.createElement("div", {
    role: "button",
    ...l,
    ...a,
    ref: r
  })));
}
const Yo = /* @__PURE__ */ W(null), Jo = /* @__PURE__ */ W(null);
function T2(e, t) {
  [e, t] = ne(e, t, Yo);
  let { collection: n, document: r } = Gr(), { children: a, orientation: i = "horizontal" } = e;
  return a = K(() => typeof a == "function" ? a({
    orientation: i
  }) : a, [
    a,
    i
  ]), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(No, null, /* @__PURE__ */ g.createElement(Pn.Provider, {
    value: r
  }, a)), /* @__PURE__ */ g.createElement(M2, {
    props: e,
    collection: n,
    tabsRef: t
  }));
}
function M2({ props: e, tabsRef: t, collection: n }) {
  let { orientation: r = "horizontal" } = e, a = p6({
    ...e,
    collection: n,
    children: void 0
  }), { focusProps: i, isFocused: l, isFocusVisible: o } = be({
    within: !0
  }), u = K(() => ({
    orientation: r,
    isFocusWithin: l,
    isFocusVisible: o
  }), [
    r,
    l,
    o
  ]), s = ee({
    ...e,
    defaultClassName: "react-aria-Tabs",
    values: u
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...Y(e),
    ...i,
    ...s,
    ref: t,
    slot: e.slot || void 0,
    "data-focused": l || void 0,
    "data-orientation": r,
    "data-focus-visible": o || void 0,
    "data-disabled": a.isDisabled || void 0
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Yo,
        e
      ],
      [
        Jo,
        a
      ]
    ]
  }, s.children));
}
const R2 = /* @__PURE__ */ q(T2);
function I2(e, t) {
  return U(Pn) ? /* @__PURE__ */ g.createElement($h, e) : /* @__PURE__ */ g.createElement(N2, {
    props: e,
    forwardedRef: t
  });
}
function N2({ props: e, forwardedRef: t }) {
  let n = U(Jo), { orientation: r = "horizontal", keyboardActivation: a = "automatic" } = Zr(Yo), i = Te(t), { tabListProps: l } = P5({
    ...e,
    orientation: r,
    keyboardActivation: a
  }, n, i), o = ee({
    ...e,
    children: null,
    defaultClassName: "react-aria-TabList",
    values: {
      orientation: r,
      state: n
    }
  }), u = Y(e);
  return delete u.id, /* @__PURE__ */ g.createElement("div", {
    ...u,
    ...l,
    ref: i,
    ...o,
    "data-orientation": r || void 0
  }, [
    ...n.collection
  ].map((s) => /* @__PURE__ */ g.createElement(L2, {
    key: s.key,
    item: s,
    state: n
  })));
}
const K2 = /* @__PURE__ */ q(I2);
function z2(e, t) {
  return ft("item", e, t, e.children);
}
const V2 = /* @__PURE__ */ q(z2);
function L2({ item: e, state: t }) {
  let n = Te(e.props.ref), { tabProps: r, isSelected: a, isDisabled: i, isPressed: l } = D5({
    key: e.key,
    ...e.props
  }, t, n), { focusProps: o, isFocused: u, isFocusVisible: s } = be(), { hoverProps: d, isHovered: c } = ye({
    isDisabled: i
  }), p = ee({
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
  return /* @__PURE__ */ g.createElement(f, {
    ...j(r, o, d, p),
    ref: n,
    "data-selected": a || void 0,
    "data-disabled": i || void 0,
    "data-focus-visible": s || void 0,
    "data-pressed": l || void 0,
    "data-hovered": c || void 0
  });
}
function O2(e, t) {
  const n = U(Jo);
  let r = Te(t), { tabPanelProps: a } = C5(e, n, r), { focusProps: i, isFocused: l, isFocusVisible: o } = be(), u = n.selectedKey === e.id, s = ee({
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
  return /* @__PURE__ */ g.createElement("div", {
    ...c,
    ref: r,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    // @ts-ignore
    inert: u ? void 0 : "true",
    "data-inert": u ? void 0 : "true"
  });
}
const j2 = /* @__PURE__ */ pi(O2), H2 = /* @__PURE__ */ W(null), Tv = /* @__PURE__ */ W(null);
function _2(e, t) {
  [e, t] = ne(e, t, H2);
  let n = I(null), [r, a] = Le(), { collection: i, document: l } = Gr(), o = ci({
    ...e,
    children: void 0,
    collection: i
  }), u = Y(e), s = Object.fromEntries(Object.entries(u).map(([m]) => [
    m,
    void 0
  ])), { gridProps: d, labelProps: c, descriptionProps: p, errorMessageProps: f } = S5({
    ...e,
    ...s,
    label: a
  }, o, n);
  var b;
  return /* @__PURE__ */ g.createElement("div", {
    ...u,
    ref: t,
    slot: e.slot || void 0,
    className: (b = e.className) !== null && b !== void 0 ? b : "react-aria-TagGroup",
    style: e.style
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Oe,
        {
          ...c,
          elementType: "span",
          ref: r
        }
      ],
      [
        Tv,
        {
          ...d,
          ref: n
        }
      ],
      [
        Dt,
        o
      ],
      [
        Pn,
        l
      ],
      [
        Me,
        {
          slots: {
            description: p,
            errorMessage: f
          }
        }
      ]
    ]
  }, e.children));
}
const U2 = /* @__PURE__ */ q(_2);
function W2(e, t) {
  let n = Ro(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, n, /* @__PURE__ */ g.createElement(G2, {
    props: e,
    forwardedRef: t
  }));
}
function G2({ props: e, forwardedRef: t }) {
  let n = U(Dt), [r, a] = ne(e, t, Tv);
  delete r.items, delete r.renderEmptyState;
  let i = ct({
    items: n.collection,
    children: (c) => {
      switch (c.type) {
        case "item":
          return /* @__PURE__ */ g.createElement(J2, {
            item: c
          });
        default:
          throw new Error("Unsupported node type in TagList: " + c.type);
      }
    }
  }), { focusProps: l, isFocused: o, isFocusVisible: u } = be(), s = {
    isEmpty: n.collection.size === 0,
    isFocused: o,
    isFocusVisible: u,
    state: n
  }, d = ee({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-TagList",
    values: s
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...j(r, l),
    ...d,
    ref: a,
    "data-empty": n.collection.size === 0 || void 0,
    "data-focused": o || void 0,
    "data-focus-visible": u || void 0
  }, n.collection.size === 0 && e.renderEmptyState ? e.renderEmptyState(s) : i);
}
const Z2 = /* @__PURE__ */ q(W2);
function q2(e, t) {
  return ft("item", e, t, e.children);
}
const Y2 = /* @__PURE__ */ q(q2);
function J2({ item: e }) {
  let t = U(Dt), n = Te(e.props.ref), { focusProps: r, isFocusVisible: a } = be({
    within: !0
  }), { rowProps: i, gridCellProps: l, removeButtonProps: o, ...u } = B5({
    item: e
  }, t, n), { hoverProps: s, isHovered: d } = ye({
    isDisabled: !u.allowsSelection
  }), c = e.props, p = ee({
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
  ]), /* @__PURE__ */ g.createElement("div", {
    ref: n,
    ...p,
    ...j(Y(c), i, r, s),
    "data-selected": u.isSelected || void 0,
    "data-disabled": u.isDisabled || void 0,
    "data-hovered": d || void 0,
    "data-focused": u.isFocused || void 0,
    "data-focus-visible": a || void 0,
    "data-pressed": u.isPressed || void 0,
    "data-allows-removing": u.allowsRemoving || void 0,
    "data-selection-mode": t.selectionManager.selectionMode === "none" ? void 0 : t.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement("div", {
    ...l,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        pt,
        {
          slots: {
            remove: o
          }
        }
      ]
    ]
  }, p.children)));
}
const X2 = /* @__PURE__ */ W({}), Q2 = /* @__PURE__ */ W(null);
function e7(e, t) {
  [e, t] = ne(e, t, Q2);
  let n = I(null), [r, a] = Le(), [i, l] = Z("input");
  var o;
  let { labelProps: u, inputProps: s, descriptionProps: d, errorMessageProps: c, ...p } = oi({
    ...dt(e),
    inputElementType: i,
    label: a,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, n), f = Q((m) => {
    n.current = m, m && l(m instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, []), b = ee({
    ...e,
    values: {
      isDisabled: e.isDisabled || !1,
      isInvalid: p.isInvalid
    },
    defaultClassName: "react-aria-TextField"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...Y(e),
    ...b,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": p.isInvalid || void 0
  }, /* @__PURE__ */ g.createElement(de, {
    values: [
      [
        Oe,
        {
          ...u,
          ref: r
        }
      ],
      [
        an,
        {
          ...s,
          ref: f
        }
      ],
      [
        X2,
        {
          ...s,
          ref: f
        }
      ],
      [
        Me,
        {
          slots: {
            description: d,
            errorMessage: c
          }
        }
      ],
      [
        tt,
        p
      ]
    ]
  }, b.children));
}
const t7 = /* @__PURE__ */ q(e7), n7 = /* @__PURE__ */ W({});
function r7(e, t) {
  [e, t] = ne(e, t, n7);
  let n = ai(e), { buttonProps: r, isPressed: a } = K1(e, n, t), { focusProps: i, isFocused: l, isFocusVisible: o } = be(e), { hoverProps: u, isHovered: s } = ye(e), d = ee({
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
  return /* @__PURE__ */ g.createElement("button", {
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
const a7 = /* @__PURE__ */ q(r7), i7 = /* @__PURE__ */ W({});
function l7(e, t) {
  [e, t] = ne(e, t, i7);
  let { toolbarProps: n } = bh(e, t), r = ee({
    ...e,
    values: {
      orientation: e.orientation || "horizontal"
    },
    defaultClassName: "react-aria-Toolbar"
  }), a = Y(e);
  return delete a.id, /* @__PURE__ */ g.createElement("div", {
    ...j(n, a),
    ...r,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "horizontal"
  }, r.children);
}
const o7 = /* @__PURE__ */ q(l7), Mv = /* @__PURE__ */ W(null), u7 = /* @__PURE__ */ W(null);
function s7({ UNSTABLE_portalContainer: e, ...t }, n) {
  [t, n] = ne(t, n, u7);
  let r = U(Mv), a = h6(t), i = t.isOpen != null || t.defaultOpen != null || !r ? a : r, l = Ua(n, i.isOpen) || t.isExiting || !1;
  return !i.isOpen && !l ? null : /* @__PURE__ */ g.createElement(vy, {
    portalContainer: e
  }, /* @__PURE__ */ g.createElement(c7, {
    ...t,
    tooltipRef: n,
    isExiting: l
  }));
}
const d7 = /* @__PURE__ */ q(s7);
function c7(e) {
  let t = U(Mv), { overlayProps: n, arrowProps: r, placement: a } = Cc({
    placement: e.placement || "top",
    targetRef: e.triggerRef,
    overlayRef: e.tooltipRef,
    offset: e.offset,
    crossOffset: e.crossOffset,
    isOpen: t.isOpen
  }), i = fi(e.tooltipRef, !!a) || e.isEntering || !1, l = ee({
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
  let { tooltipProps: o } = k5(e, t);
  return /* @__PURE__ */ g.createElement("div", {
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
  }, /* @__PURE__ */ g.createElement(Ho.Provider, {
    value: {
      ...r,
      placement: a
    }
  }, l.children));
}
var Es = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Je = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, f7 = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Rv(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? Rv(n, t) : t.push(n);
  });
}
function Iv(e) {
  let t = [];
  return Rv(e, t), t;
}
var Nv = (...e) => Iv(e).filter(Boolean), Kv = (e, t) => {
  let n = {}, r = Object.keys(e), a = Object.keys(t);
  for (let i of r)
    if (a.includes(i)) {
      let l = e[i], o = t[i];
      typeof l == "object" && typeof o == "object" ? n[i] = Kv(l, o) : Array.isArray(l) || Array.isArray(o) ? n[i] = Nv(o, l) : n[i] = o + " " + l;
    } else
      n[i] = e[i];
  for (let i of a)
    r.includes(i) || (n[i] = t[i]);
  return n;
}, Ps = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function p7() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = zv(t)) && (r && (r += " "), r += n);
  return r;
}
function zv(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = zv(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Xo = "-";
function b7(e) {
  var t = h7(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, a = r === void 0 ? {} : r;
  function i(o) {
    var u = o.split(Xo);
    return u[0] === "" && u.length !== 1 && u.shift(), Vv(u, t) || m7(o);
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
function Vv(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), a = r ? Vv(e.slice(1), r) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var i = e.join(Xo);
    return (l = t.validators.find(function(o) {
      var u = o.validator;
      return u(i);
    })) == null ? void 0 : l.classGroupId;
  }
}
var ws = /^\[(.+)\]$/;
function m7(e) {
  if (ws.test(e)) {
    var t = ws.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function h7(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = g7(Object.entries(e.classGroups), n);
  return a.forEach(function(i) {
    var l = i[0], o = i[1];
    Vl(o, r, l, t);
  }), r;
}
function Vl(e, t, n, r) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var i = a === "" ? t : Ss(t, a);
      i.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (v7(a)) {
        Vl(a(r), t, n, r);
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
      Vl(u, Ss(t, o), n, r);
    });
  });
}
function Ss(e, t) {
  var n = e;
  return t.split(Xo).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function v7(e) {
  return e.isThemeGetter;
}
function g7(e, t) {
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
function $7(e) {
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
var Lv = "!";
function y7(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], a = t.length;
  return function(l) {
    for (var o = [], u = 0, s = 0, d, c = 0; c < l.length; c++) {
      var p = l[c];
      if (u === 0) {
        if (p === r && (n || l.slice(c, c + a) === t)) {
          o.push(l.slice(s, c)), s = c + a;
          continue;
        }
        if (p === "/") {
          d = c;
          continue;
        }
      }
      p === "[" ? u++ : p === "]" && u--;
    }
    var f = o.length === 0 ? l : l.substring(s), b = f.startsWith(Lv), m = b ? f.substring(1) : f, h = d && d > s ? d - s : void 0;
    return {
      modifiers: o,
      hasImportantModifier: b,
      baseClassName: m,
      maybePostfixModifierPosition: h
    };
  };
}
function x7(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var a = r[0] === "[";
    a ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function D7(e) {
  return {
    cache: $7(e.cacheSize),
    splitModifiers: y7(e),
    ...b7(e)
  };
}
var C7 = /\s+/;
function E7(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, a = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(C7).map(function(l) {
    var o = n(l), u = o.modifiers, s = o.hasImportantModifier, d = o.baseClassName, c = o.maybePostfixModifierPosition, p = r(c ? d.substring(0, c) : d), f = !!c;
    if (!p) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (p = r(d), !p)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      f = !1;
    }
    var b = x7(u).join(":"), m = s ? b + Lv : b;
    return {
      isTailwindClass: !0,
      modifierId: m,
      classGroupId: p,
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
function Ll() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, a, i, l = o;
  function o(s) {
    var d = t[0], c = t.slice(1), p = c.reduce(function(f, b) {
      return b(f);
    }, d());
    return r = D7(p), a = r.cache.get, i = r.cache.set, l = u, u(s);
  }
  function u(s) {
    var d = a(s);
    if (d)
      return d;
    var c = E7(s, r);
    return i(s, c), c;
  }
  return function() {
    return l(p7.apply(null, arguments));
  };
}
function ge(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Ov = /^\[(?:([a-z-]+):)?(.+)\]$/i, P7 = /^\d+\/\d+$/, w7 = /* @__PURE__ */ new Set(["px", "full", "screen"]), S7 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, B7 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, k7 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function mt(e) {
  return bn(e) || w7.has(e) || P7.test(e) || Ol(e);
}
function Ol(e) {
  return wn(e, "length", I7);
}
function F7(e) {
  return wn(e, "size", jv);
}
function A7(e) {
  return wn(e, "position", jv);
}
function T7(e) {
  return wn(e, "url", N7);
}
function ba(e) {
  return wn(e, "number", bn);
}
function bn(e) {
  return !Number.isNaN(Number(e));
}
function M7(e) {
  return e.endsWith("%") && bn(e.slice(0, -1));
}
function ir(e) {
  return Bs(e) || wn(e, "number", Bs);
}
function le(e) {
  return Ov.test(e);
}
function lr() {
  return !0;
}
function Wt(e) {
  return S7.test(e);
}
function R7(e) {
  return wn(e, "", K7);
}
function wn(e, t, n) {
  var r = Ov.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function I7(e) {
  return B7.test(e);
}
function jv() {
  return !1;
}
function N7(e) {
  return e.startsWith("url(");
}
function Bs(e) {
  return Number.isInteger(Number(e));
}
function K7(e) {
  return k7.test(e);
}
function jl() {
  var e = ge("colors"), t = ge("spacing"), n = ge("blur"), r = ge("brightness"), a = ge("borderColor"), i = ge("borderRadius"), l = ge("borderSpacing"), o = ge("borderWidth"), u = ge("contrast"), s = ge("grayscale"), d = ge("hueRotate"), c = ge("invert"), p = ge("gap"), f = ge("gradientColorStops"), b = ge("gradientColorStopPositions"), m = ge("inset"), h = ge("margin"), y = ge("opacity"), $ = ge("padding"), x = ge("saturate"), C = ge("scale"), P = ge("sepia"), B = ge("skew"), M = ge("space"), v = ge("translate"), R = function() {
    return ["auto", "contain", "none"];
  }, F = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, E = function() {
    return ["auto", le, t];
  }, S = function() {
    return [le, t];
  }, w = function() {
    return ["", mt];
  }, k = function() {
    return ["auto", bn, le];
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
    return [bn, ba];
  }, N = function() {
    return [bn, le];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [lr],
      spacing: [mt],
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
      gradientColorStopPositions: [M7, Ol],
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
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        z: ["auto", ir]
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
        order: ["first", "last", "none", ir]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [lr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ir]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [lr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ir]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
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
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
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
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [M]
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
        "space-y": [M]
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
        "min-w": ["min", "max", "fit", le, mt]
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
        "min-h": ["min", "max", "fit", le, mt]
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
        text: ["base", Wt, Ol]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ba]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [lr]
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
        "line-clamp": ["none", bn, ba]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", le, mt]
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
        decoration: ["auto", "from-font", mt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", le, mt]
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
        bg: [].concat(z(), [A7])
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
        bg: ["auto", "cover", "contain", F7]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, T7]
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
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
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
        "outline-offset": [le, mt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [mt]
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
        "ring-offset": [mt]
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
        shadow: ["", "inner", "none", Wt, R7]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [lr]
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
        rotate: [ir, le]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [v]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [v]
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
        stroke: [mt, ba]
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
function z7(e, t) {
  for (var n in t)
    Hv(e, n, t[n]);
  return e;
}
var V7 = Object.prototype.hasOwnProperty, L7 = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Hv(e, t, n) {
  if (!V7.call(e, t) || L7.has(typeof n) || n === null) {
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
      Hv(e[t], r, n[r]);
  }
}
function O7(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? Ll.apply(void 0, [jl, e].concat(n)) : Ll.apply(void 0, [function() {
    return z7(jl(), e);
  }].concat(n));
}
var kt = /* @__PURE__ */ Ll(jl), j7 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, _v = (e) => e || void 0, Br = (...e) => _v(Iv(e).filter(Boolean).join(" ")), nl = null, Wa = {}, Hl = !1, or = (...e) => (t) => t.twMerge ? ((!nl || Hl) && (Hl = !1, nl = Je(Wa) ? kt : O7(Wa)), _v(nl(Br(e)))) : Br(e), ks = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = Br(e[n], t[n]) : e[n] = t[n];
  return e;
}, ie = (e, t) => {
  let { extend: n = null, slots: r = {}, variants: a = {}, compoundVariants: i = [], compoundSlots: l = [], defaultVariants: o = {} } = e, u = { ...j7, ...t }, s = n != null && n.base ? Br(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = n != null && n.variants && !Je(n.variants) ? Kv(a, n.variants) : a, c = n != null && n.defaultVariants && !Je(n.defaultVariants) ? { ...n.defaultVariants, ...o } : o;
  !Je(u.twMergeConfig) && !f7(u.twMergeConfig, Wa) && (Hl = !0, Wa = u.twMergeConfig);
  let p = Je(n == null ? void 0 : n.slots), f = Je(r) ? {} : { base: Br(e == null ? void 0 : e.base, p && (n == null ? void 0 : n.base)), ...r }, b = p ? f : ks({ ...n == null ? void 0 : n.slots }, Je(f) ? { base: e == null ? void 0 : e.base } : f), m = (y) => {
    if (Je(d) && Je(r) && p)
      return or(s, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(u);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let $ = (S, w, k = [], z) => {
      let T = k;
      if (typeof w == "string")
        T = T.concat(Ps(w).split(" ").map((D) => `${S}:${D}`));
      else if (Array.isArray(w))
        T = T.concat(w.reduce((D, H) => D.concat(`${S}:${H}`), []));
      else if (typeof w == "object" && typeof z == "string") {
        for (let D in w)
          if (w.hasOwnProperty(D) && D === z) {
            let H = w[D];
            if (H && typeof H == "string") {
              let _ = Ps(H);
              T[z] ? T[z] = T[z].concat(_.split(" ").map((L) => `${S}:${L}`)) : T[z] = _.split(" ").map((L) => `${S}:${L}`);
            } else
              Array.isArray(H) && H.length > 0 && (T[z] = H.reduce((_, L) => _.concat(`${S}:${L}`), []));
          }
      }
      return T;
    }, x = (S, w = d, k = null, z = null) => {
      var T;
      let D = w[S];
      if (!D || Je(D))
        return null;
      let H = (T = z == null ? void 0 : z[S]) != null ? T : y == null ? void 0 : y[S];
      if (H === null)
        return null;
      let _ = Es(H), L = Array.isArray(u.responsiveVariants) && u.responsiveVariants.length > 0 || u.responsiveVariants === !0, V = c == null ? void 0 : c[S], N = [];
      if (typeof _ == "object" && L)
        for (let [re, se] of Object.entries(_)) {
          let Pe = D[se];
          if (re === "initial") {
            V = se;
            continue;
          }
          Array.isArray(u.responsiveVariants) && !u.responsiveVariants.includes(re) || (N = $(re, Pe, N, k));
        }
      let G = D[_] || D[Es(V)];
      return typeof N == "object" && typeof k == "string" && N[k] ? ks(N, G) : N.length > 0 ? (N.push(G), N) : G;
    }, C = () => d ? Object.keys(d).map((S) => x(S, d)) : null, P = (S, w) => {
      if (!d || typeof d != "object")
        return null;
      let k = new Array();
      for (let z in d) {
        let T = x(z, d, S, w), D = S === "base" && typeof T == "string" ? T : T && T[S];
        D && (k[k.length] = D);
      }
      return k;
    }, B = {};
    for (let S in y)
      y[S] !== void 0 && (B[S] = y[S]);
    let M = (S, w) => {
      var k;
      let z = typeof (y == null ? void 0 : y[S]) == "object" ? { [S]: (k = y[S]) == null ? void 0 : k.initial } : {};
      return { ...c, ...B, ...z, ...w };
    }, v = (S = [], w) => {
      let k = [];
      for (let { class: z, className: T, ...D } of S) {
        let H = !0;
        for (let [_, L] of Object.entries(D)) {
          let V = M(_, w);
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
        H && (z && k.push(z), T && k.push(T));
      }
      return k;
    }, R = (S) => {
      let w = v(i, S), k = v(n == null ? void 0 : n.compoundVariants, S);
      return Nv(k, w);
    }, F = (S) => {
      let w = R(S);
      if (!Array.isArray(w))
        return w;
      let k = {};
      for (let z of w)
        if (typeof z == "string" && (k.base = or(k.base, z)(u)), typeof z == "object")
          for (let [T, D] of Object.entries(z))
            k[T] = or(k[T], D)(u);
      return k;
    }, E = (S) => {
      if (l.length < 1)
        return null;
      let w = {};
      for (let { slots: k = [], class: z, className: T, ...D } of l) {
        if (!Je(D)) {
          let H = !0;
          for (let _ of Object.keys(D)) {
            let L = M(_, S)[_];
            if (L === void 0 || (Array.isArray(D[_]) ? !D[_].includes(L) : D[_] !== L)) {
              H = !1;
              break;
            }
          }
          if (!H)
            continue;
        }
        for (let H of k)
          w[H] = w[H] || [], w[H].push([z, T]);
      }
      return w;
    };
    if (!Je(r) || !p) {
      let S = {};
      if (typeof b == "object" && !Je(b))
        for (let w of Object.keys(b))
          S[w] = (k) => {
            var z, T;
            return or(b[w], P(w, k), ((z = F(k)) != null ? z : [])[w], ((T = E(k)) != null ? T : [])[w], k == null ? void 0 : k.class, k == null ? void 0 : k.className)(u);
          };
      return S;
    }
    return or(s, C(), R(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(u);
  }, h = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return m.variantKeys = h(), m.extend = n, m.base = s, m.slots = b, m.variants = d, m.defaultVariants = c, m.compoundSlots = l, m.compoundVariants = i, m;
};
const Se = ie({
  base: "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-1",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2"
    }
  }
});
function Re(e, t) {
  return Ve(e, (n) => kt(t, n));
}
let H7 = ie({
  extend: Se,
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
function nn(e) {
  return /* @__PURE__ */ A(
    Yn,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => H7({ ...n, variant: e.variant, className: t })
      )
    }
  );
}
function Qo(e) {
  return /* @__PURE__ */ A(
    Ax,
    {
      ...e,
      className: kt(
        "relative max-h-[inherit] overflow-auto p-6 outline outline-0 [[data-placement]>&]:p-4",
        e.className
      )
    }
  );
}
function F8({
  title: e,
  variant: t,
  cancelLabel: n,
  actionLabel: r,
  onAction: a,
  children: i,
  ...l
}) {
  return /* @__PURE__ */ A(Qo, { role: "alertdialog", ...l, children: ({ close: o }) => /* @__PURE__ */ te(Qe, { children: [
    /* @__PURE__ */ A(
      Ph,
      {
        slot: "title",
        className: "my-0 text-xl font-semibold leading-6",
        children: e
      }
    ),
    /* @__PURE__ */ A(
      "div",
      {
        className: `absolute right-6 top-6 h-6 w-6 stroke-2 ${t === "destructive" ? "text-red-500" : "text-blue-500"}`,
        children: t === "destructive" ? /* @__PURE__ */ A(ag, { "aria-hidden": !0 }) : /* @__PURE__ */ A(ug, { "aria-hidden": !0 })
      }
    ),
    /* @__PURE__ */ A("p", { className: "mt-3 text-slate-500 dark:text-zinc-400", children: i }),
    /* @__PURE__ */ te("div", { className: "mt-6 flex justify-end gap-2", children: [
      /* @__PURE__ */ A(nn, { variant: "secondary", onPress: o, children: n || "Cancel" }),
      /* @__PURE__ */ A(
        nn,
        {
          variant: t === "destructive" ? "destructive" : "primary",
          autoFocus: !0,
          onPress: gt(a, o),
          children: r
        }
      )
    ] })
  ] }) });
}
const _7 = ie({
  extend: Se,
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
function U7(e) {
  return /* @__PURE__ */ A(
    R6,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => _7({ ...n, className: t, variant: e.variant })
      )
    }
  );
}
function A8(e) {
  return /* @__PURE__ */ A(
    z6,
    {
      ...e,
      className: kt("flex gap-1", e.className)
    }
  );
}
function T8(e) {
  return /* @__PURE__ */ te(
    L6,
    {
      ...e,
      className: kt("flex items-center gap-1", e.className),
      children: [
        /* @__PURE__ */ A(U7, { variant: "secondary", ...e }),
        e.href && /* @__PURE__ */ A(rl, { className: "h-3 w-3 text-gray-600 dark:text-zinc-400" })
      ]
    }
  );
}
const W7 = ie({
  extend: Se,
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
function G7({
  errorMessage: e,
  ...t
}) {
  return /* @__PURE__ */ te(G6, { ...t, children: [
    /* @__PURE__ */ A(Uv, {}),
    /* @__PURE__ */ te(Bh, { children: [
      /* @__PURE__ */ A(Wv, {}),
      /* @__PURE__ */ A(Ko, { children: (n) => /* @__PURE__ */ A(Ah, { date: n, className: W7 }) })
    ] }),
    e && /* @__PURE__ */ A(qr, { slot: "errorMessage", className: "text-sm text-red-600", children: e })
  ] });
}
function Uv() {
  let { direction: e } = oe();
  return /* @__PURE__ */ te("header", { className: "flex w-full items-center gap-1 px-1 pb-4", children: [
    /* @__PURE__ */ A(nn, { variant: "icon", slot: "previous", children: e === "rtl" ? /* @__PURE__ */ A(rl, { "aria-hidden": !0 }) : /* @__PURE__ */ A(ou, { "aria-hidden": !0 }) }),
    /* @__PURE__ */ A(Ph, { className: "mx-2 flex-1 text-center text-xl font-semibold text-zinc-900 dark:text-zinc-200" }),
    /* @__PURE__ */ A(nn, { variant: "icon", slot: "next", children: e === "rtl" ? /* @__PURE__ */ A(ou, { "aria-hidden": !0 }) : /* @__PURE__ */ A(rl, { "aria-hidden": !0 }) })
  ] });
}
function Wv() {
  return /* @__PURE__ */ A(kh, { children: (e) => /* @__PURE__ */ A(Fh, { className: "text-xs font-semibold text-gray-500", children: e }) });
}
function We(e) {
  return /* @__PURE__ */ A(
    ix,
    {
      ...e,
      className: kt(
        "w-fit cursor-default text-sm font-medium text-gray-500 dark:text-zinc-400",
        e.className
      )
    }
  );
}
function bt(e) {
  return /* @__PURE__ */ A(
    qr,
    {
      ...e,
      slot: "description",
      className: kt("text-sm text-gray-600", e.className)
    }
  );
}
function Ct(e) {
  return /* @__PURE__ */ A(
    nx,
    {
      ...e,
      className: Re(
        e.className,
        "text-sm text-red-600 forced-colors:text-[Mark]"
      )
    }
  );
}
const kr = ie({
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
}), Gv = ie({
  extend: Se,
  base: "group flex items-center h-9 bg-white dark:bg-zinc-900 forced-colors:bg-[Field] border rounded-lg overflow-hidden",
  variants: kr.variants,
  compoundVariants: [
    {
      isFocusWithin: !0,
      isFocusVisible: !1,
      class: "outline-2 -outline-offset-1"
    }
  ]
});
function Qr(e) {
  return /* @__PURE__ */ A(
    zo,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => Gv({ ...n, className: t })
      )
    }
  );
}
function Ei(e) {
  return /* @__PURE__ */ A(
    Mh,
    {
      ...e,
      className: Re(
        e.className,
        "min-w-0 flex-1 bg-white px-2 py-1.5 text-sm text-gray-800 outline outline-0 disabled:text-gray-200 dark:bg-zinc-900 dark:text-zinc-200 dark:disabled:text-zinc-600"
      )
    }
  );
}
function M8(e) {
  return /* @__PURE__ */ te(
    dx,
    {
      ...e,
      className: Re(
        e.className,
        "flex flex-col gap-2"
      ),
      children: [
        /* @__PURE__ */ A(We, { children: e.label }),
        e.children,
        e.description && /* @__PURE__ */ A(bt, { children: e.description }),
        /* @__PURE__ */ A(Ct, { children: e.errorMessage })
      ]
    }
  );
}
const Z7 = ie({
  base: "flex gap-2 items-center group text-sm transition",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-200",
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]"
    }
  }
}), q7 = ie({
  extend: Se,
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
}), Fs = "w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]";
function eu(e) {
  return /* @__PURE__ */ A(
    sx,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => Z7({ ...n, className: t })
      ),
      children: ({ isSelected: t, isIndeterminate: n, ...r }) => /* @__PURE__ */ te(Qe, { children: [
        /* @__PURE__ */ A(
          "div",
          {
            className: q7({
              isSelected: t || n,
              ...r
            }),
            children: n ? /* @__PURE__ */ A(sg, { "aria-hidden": !0, className: Fs }) : t ? /* @__PURE__ */ A(_l, { "aria-hidden": !0, className: Fs }) : null
          }
        ),
        e.children
      ] })
    }
  );
}
function R8({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ A(
    jo,
    {
      ...t,
      className: Re(
        t.className,
        "rounded-lg border border-gray-300 p-1 outline-0 dark:border-zinc-600"
      ),
      children: e
    }
  );
}
const Y7 = ie({
  extend: Se,
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
function I8(e) {
  let t = e.textValue || (typeof e.children == "string" ? e.children : void 0);
  return /* @__PURE__ */ A(Ih, { ...e, textValue: t, className: Y7, children: Ve(e.children, (n) => /* @__PURE__ */ te(Qe, { children: [
    n,
    /* @__PURE__ */ A("div", { className: "absolute bottom-0 left-4 right-4 hidden h-px bg-white/20 forced-colors:bg-[HighlightText] [.group[data-selected]:has(+[data-selected])_&]:block" })
  ] })) });
}
const Zv = ie({
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
function qv(e) {
  let t = e.textValue || (typeof e.children == "string" ? e.children : void 0);
  return /* @__PURE__ */ A(
    Ih,
    {
      ...e,
      textValue: t,
      className: Zv,
      children: Ve(e.children, (n, { isSelected: r }) => /* @__PURE__ */ te(Qe, { children: [
        /* @__PURE__ */ A("span", { className: "flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold", children: n }),
        /* @__PURE__ */ A("span", { className: "flex w-5 items-center", children: r && /* @__PURE__ */ A(_l, { className: "h-4 w-4" }) })
      ] }))
    }
  );
}
function tu(e) {
  return /* @__PURE__ */ te(F6, { className: "after:block after:h-[5px] after:content-[''] first:-mt-[5px]", children: [
    /* @__PURE__ */ A(Lo, { className: "sticky -top-[5px] z-10 -mx-1 -mt-px truncate border-y bg-gray-100/60 px-4 py-1 text-sm font-semibold text-gray-500 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:border-y-zinc-700 dark:bg-zinc-700/60 dark:text-zinc-300 [&+*]:mt-1", children: e.title }),
    /* @__PURE__ */ A(Io, { items: e.items, children: e.children })
  ] });
}
const J7 = ie({
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
function ea({
  children: e,
  showArrow: t,
  className: n,
  ...r
}) {
  return /* @__PURE__ */ te(
    Bx,
    {
      offset: t ? 12 : 8,
      ...r,
      className: Ve(
        n,
        (a, i) => J7({ ...i, className: a })
      ),
      children: [
        t && /* @__PURE__ */ A(Kh, { className: "group", children: /* @__PURE__ */ A(
          "svg",
          {
            width: 12,
            height: 12,
            viewBox: "0 0 12 12",
            className: "block fill-white stroke-black/10 stroke-1 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 dark:fill-[#1f1f21] dark:stroke-zinc-600 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
            children: /* @__PURE__ */ A("path", { d: "M0 0 L6 6 L12 0" })
          }
        ) }),
        e
      ]
    }
  );
}
function N8({
  label: e,
  description: t,
  errorMessage: n,
  children: r,
  items: a,
  ...i
}) {
  return /* @__PURE__ */ te(
    Nx,
    {
      ...i,
      className: Re(
        i.className,
        "group flex flex-col gap-1"
      ),
      children: [
        /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ te(Qr, { children: [
          /* @__PURE__ */ A(Ei, {}),
          /* @__PURE__ */ A(nn, { variant: "icon", className: "mr-1 w-6 rounded outline-offset-0 ", children: /* @__PURE__ */ A(Ul, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        t && /* @__PURE__ */ A(bt, { children: t }),
        /* @__PURE__ */ A(Ct, { children: n }),
        /* @__PURE__ */ A(ea, { className: "w-[--trigger-width]", children: /* @__PURE__ */ A(
          jo,
          {
            items: a,
            className: "max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]",
            children: r
          }
        ) })
      ]
    }
  );
}
function K8(e) {
  return /* @__PURE__ */ A(qv, { ...e });
}
function z8(e) {
  return /* @__PURE__ */ A(tu, { ...e });
}
function V8({
  label: e,
  description: t,
  errorMessage: n,
  ...r
}) {
  return /* @__PURE__ */ te(
    Vx,
    {
      ...r,
      className: Re(
        r.className,
        "flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ A(Fr, {}),
        t && /* @__PURE__ */ A(bt, { children: t }),
        /* @__PURE__ */ A(Ct, { children: n })
      ]
    }
  );
}
const X7 = ie({
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
function Fr(e) {
  return /* @__PURE__ */ A(
    _x,
    {
      className: (t) => Gv({
        ...t,
        class: "block min-w-[150px] px-2 py-1.5 text-sm"
      }),
      ...e,
      children: (t) => /* @__PURE__ */ A(Wx, { segment: t, className: X7 })
    }
  );
}
function L8({
  label: e,
  description: t,
  errorMessage: n,
  ...r
}) {
  return /* @__PURE__ */ te(
    Xx,
    {
      ...r,
      className: Re(
        r.className,
        "group flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ te(Qr, { className: "w-auto min-w-[208px]", children: [
          /* @__PURE__ */ A(Fr, { className: "min-w-[150px] flex-1 px-2 py-1.5 text-sm" }),
          /* @__PURE__ */ A(nn, { variant: "icon", className: "mr-1 w-6 rounded outline-offset-0", children: /* @__PURE__ */ A(Is, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        t && /* @__PURE__ */ A(bt, { children: t }),
        /* @__PURE__ */ A(Ct, { children: n }),
        /* @__PURE__ */ A(ea, { children: /* @__PURE__ */ A(Qo, { children: /* @__PURE__ */ A(G7, {}) }) })
      ]
    }
  );
}
const Q7 = ie({
  extend: Se,
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
function e8({
  errorMessage: e,
  ...t
}) {
  return /* @__PURE__ */ te(q6, { ...t, children: [
    /* @__PURE__ */ A(Uv, {}),
    /* @__PURE__ */ te(Bh, { className: "[&_td]:px-0", children: [
      /* @__PURE__ */ A(Wv, {}),
      /* @__PURE__ */ A(Ko, { children: (n) => /* @__PURE__ */ A(
        Ah,
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
          }) => /* @__PURE__ */ A(
            "span",
            {
              className: Q7({
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
    e && /* @__PURE__ */ A(qr, { slot: "errorMessage", className: "text-sm text-red-600", children: e })
  ] });
}
function O8({
  label: e,
  description: t,
  errorMessage: n,
  ...r
}) {
  return /* @__PURE__ */ te(
    eD,
    {
      ...r,
      className: Re(
        r.className,
        "group flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ te(Qr, { className: "w-auto min-w-[208px]", children: [
          /* @__PURE__ */ A(Fr, { slot: "start", className: "px-2 py-1.5 text-sm" }),
          /* @__PURE__ */ A(
            "span",
            {
              "aria-hidden": "true",
              className: "text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600 forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]",
              children: "–"
            }
          ),
          /* @__PURE__ */ A(Fr, { slot: "end", className: "flex-1 px-2 py-1.5 text-sm" }),
          /* @__PURE__ */ A(nn, { variant: "icon", className: "mr-1 w-6 rounded outline-offset-0", children: /* @__PURE__ */ A(Is, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        t && /* @__PURE__ */ A(bt, { children: t }),
        /* @__PURE__ */ A(Ct, { children: n }),
        /* @__PURE__ */ A(ea, { children: /* @__PURE__ */ A(Qo, { children: /* @__PURE__ */ A(e8, {}) }) })
      ]
    }
  );
}
function j8(e) {
  return /* @__PURE__ */ A(
    nD,
    {
      ...e,
      className: kt("flex flex-col gap-4", e.className)
    }
  );
}
function H8({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ A(
    lD,
    {
      ...t,
      className: Re(
        t.className,
        "relative overflow-auto rounded-lg border dark:border-zinc-600"
      ),
      children: e
    }
  );
}
const t8 = ie({
  extend: Se,
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
function _8({ children: e, ...t }) {
  return /* @__PURE__ */ A(uD, { textValue: typeof e == "string" ? e : void 0, ...t, className: t8, children: ({ selectionMode: r, selectionBehavior: a, allowsDragging: i }) => /* @__PURE__ */ te(Qe, { children: [
    i && /* @__PURE__ */ A(Yn, { slot: "drag", children: "≡" }),
    r === "multiple" && a === "toggle" && /* @__PURE__ */ A(eu, { slot: "selection" }),
    e
  ] }) });
}
function U8(e) {
  return /* @__PURE__ */ A(ea, { placement: e.placement, className: "min-w-[150px]", children: /* @__PURE__ */ A(
    hD,
    {
      ...e,
      className: "max-h-[inherit] overflow-auto p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
    }
  ) });
}
function W8(e) {
  return /* @__PURE__ */ A($D, { ...e, className: Zv, children: Ve(
    e.children,
    (t, { selectionMode: n, isSelected: r }) => /* @__PURE__ */ te(Qe, { children: [
      n !== "none" && /* @__PURE__ */ A("span", { className: "flex w-4 items-center", children: r && /* @__PURE__ */ A(_l, { "aria-hidden": !0, className: "h-4 w-4" }) }),
      /* @__PURE__ */ A("span", { className: "flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold", children: t })
    ] })
  ) });
}
function G8(e) {
  return /* @__PURE__ */ A(
    yi,
    {
      ...e,
      className: "mx-3 my-1 border-b border-gray-300 dark:border-zinc-700"
    }
  );
}
function Z8(e) {
  return /* @__PURE__ */ A(tu, { ...e });
}
function q8({ label: e, ...t }) {
  return /* @__PURE__ */ A(
    CD,
    {
      ...t,
      className: Re(
        t.className,
        "flex flex-col gap-1"
      ),
      children: ({ percentage: n, valueText: r }) => /* @__PURE__ */ te(Qe, { children: [
        /* @__PURE__ */ te("div", { className: "flex justify-between gap-2", children: [
          /* @__PURE__ */ A(We, { children: e }),
          /* @__PURE__ */ te(
            "span",
            {
              className: `text-sm ${n >= 80 ? "text-red-600 dark:text-red-500" : "text-gray-600 dark:text-zinc-400"}`,
              children: [
                n >= 80 && /* @__PURE__ */ A(
                  ig,
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
        /* @__PURE__ */ A("div", { className: "relative h-2 w-64 rounded-full bg-gray-300 outline outline-1 -outline-offset-1 outline-transparent dark:bg-zinc-700", children: /* @__PURE__ */ A(
          "div",
          {
            className: `absolute left-0 top-0 h-full rounded-full ${n8(n)} forced-colors:bg-[Highlight]`,
            style: { width: n + "%" }
          }
        ) })
      ] })
    }
  );
}
function n8(e) {
  return e < 70 ? "bg-green-600" : e < 80 ? "bg-orange-500" : "bg-red-600";
}
const r8 = ie({
  base: "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out"
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in"
    }
  }
}), a8 = ie({
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
function Y8(e) {
  return /* @__PURE__ */ A(Ev, { ...e, className: r8, children: /* @__PURE__ */ A(wD, { ...e, className: a8 }) });
}
function J8({
  label: e,
  description: t,
  errorMessage: n,
  ...r
}) {
  return /* @__PURE__ */ te(
    TD,
    {
      ...r,
      className: Re(
        r.className,
        "group flex flex-col gap-1"
      ),
      children: [
        /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ A(Qr, { children: (a) => /* @__PURE__ */ te(Qe, { children: [
          /* @__PURE__ */ A(Ei, {}),
          /* @__PURE__ */ te(
            "div",
            {
              className: kr({
                ...a,
                class: "flex flex-col border-s-2"
              }),
              children: [
                /* @__PURE__ */ A(As, { slot: "increment", children: /* @__PURE__ */ A(og, { "aria-hidden": !0, className: "h-4 w-4" }) }),
                /* @__PURE__ */ A(
                  "div",
                  {
                    className: kr({
                      ...a,
                      class: "border-b-2"
                    })
                  }
                ),
                /* @__PURE__ */ A(As, { slot: "decrement", children: /* @__PURE__ */ A(Ul, { "aria-hidden": !0, className: "h-4 w-4" }) })
              ]
            }
          )
        ] }) }),
        t && /* @__PURE__ */ A(bt, { children: t }),
        /* @__PURE__ */ A(Ct, { children: n })
      ]
    }
  );
}
function As(e) {
  return /* @__PURE__ */ A(
    Yn,
    {
      ...e,
      className: "cursor-default px-0.5 text-gray-500 pressed:bg-gray-100 group-disabled:text-gray-200 dark:text-zinc-400 dark:pressed:bg-zinc-800 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]"
    }
  );
}
function X8({ label: e, ...t }) {
  return /* @__PURE__ */ A(
    ID,
    {
      ...t,
      className: Re(
        t.className,
        "flex flex-col gap-1"
      ),
      children: ({ percentage: n, valueText: r, isIndeterminate: a }) => /* @__PURE__ */ te(Qe, { children: [
        /* @__PURE__ */ te("div", { className: "flex justify-between gap-2", children: [
          /* @__PURE__ */ A(We, { children: e }),
          /* @__PURE__ */ A("span", { className: "text-sm text-gray-600 dark:text-zinc-400", children: r })
        ] }),
        /* @__PURE__ */ A("div", { className: "relative h-2 w-64 overflow-hidden rounded-full bg-gray-300 outline outline-1 -outline-offset-1 outline-transparent dark:bg-zinc-700", children: /* @__PURE__ */ A(
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
function Q8(e) {
  return /* @__PURE__ */ te(
    LD,
    {
      ...e,
      className: Re(
        e.className,
        "group flex flex-col gap-2"
      ),
      children: [
        /* @__PURE__ */ A(We, { children: e.label }),
        /* @__PURE__ */ A("div", { className: "flex gap-2 group-orientation-horizontal:gap-4 group-orientation-vertical:flex-col", children: e.children }),
        e.description && /* @__PURE__ */ A(bt, { children: e.description }),
        /* @__PURE__ */ A(Ct, { children: e.errorMessage })
      ]
    }
  );
}
const i8 = ie({
  extend: Se,
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
function e9(e) {
  return /* @__PURE__ */ A(
    OD,
    {
      ...e,
      className: Re(
        e.className,
        "group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]"
      ),
      children: (t) => /* @__PURE__ */ te(Qe, { children: [
        /* @__PURE__ */ A("div", { className: i8(t) }),
        e.children
      ] })
    }
  );
}
function t9({
  label: e,
  description: t,
  errorMessage: n,
  ...r
}) {
  return /* @__PURE__ */ te(
    _D,
    {
      ...r,
      className: Re(
        r.className,
        "group flex min-w-[40px] flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ te(Qr, { children: [
          /* @__PURE__ */ A(
            dg,
            {
              "aria-hidden": !0,
              className: "ml-2 h-4 w-4 text-gray-500 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
            }
          ),
          /* @__PURE__ */ A(Ei, { className: "[&::-webkit-search-cancel-button]:hidden" }),
          /* @__PURE__ */ A(nn, { variant: "icon", className: "mr-1 w-6 group-empty:invisible", children: /* @__PURE__ */ A(Ns, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        t && /* @__PURE__ */ A(bt, { children: t }),
        /* @__PURE__ */ A(Ct, { children: n })
      ]
    }
  );
}
const l8 = ie({
  extend: Se,
  base: "flex items-center text-start gap-4 w-full cursor-default border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none rounded-lg pl-3 pr-2 py-2 min-w-[150px] transition bg-gray-50 dark:bg-zinc-700",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-300 hover:bg-gray-100 pressed:bg-gray-200 dark:hover:bg-zinc-600 dark:pressed:bg-zinc-500 group-invalid:border-red-600 forced-colors:group-invalid:border-[Mark]",
      true: "text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText] dark:bg-zinc-800 dark:border-white/5 forced-colors:border-[GrayText]"
    }
  }
});
function n9({
  label: e,
  description: t,
  errorMessage: n,
  children: r,
  items: a,
  ...i
}) {
  return /* @__PURE__ */ te(
    WD,
    {
      ...i,
      className: Re(
        i.className,
        "group flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ te(Yn, { className: l8, children: [
          /* @__PURE__ */ A(ZD, { className: "flex-1 text-sm placeholder-shown:italic" }),
          /* @__PURE__ */ A(
            Ul,
            {
              "aria-hidden": !0,
              className: "h-4 w-4 text-gray-600 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
            }
          )
        ] }),
        t && /* @__PURE__ */ A(bt, { children: t }),
        /* @__PURE__ */ A(Ct, { children: n }),
        /* @__PURE__ */ A(ea, { className: "min-w-[--trigger-width]", children: /* @__PURE__ */ A(
          jo,
          {
            items: a,
            className: "max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]",
            children: r
          }
        ) })
      ]
    }
  );
}
function r9(e) {
  return /* @__PURE__ */ A(qv, { ...e });
}
function a9(e) {
  return /* @__PURE__ */ A(tu, { ...e });
}
const o8 = ie({
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
function i9(e) {
  return /* @__PURE__ */ A(
    yi,
    {
      ...e,
      className: o8({
        orientation: e.orientation,
        className: e.className
      })
    }
  );
}
const u8 = ie({
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
}), s8 = ie({
  extend: Se,
  base: "w-6 h-6 outline-offset-2 group-orientation-horizontal:mt-6 group-orientation-vertical:ml-3 rounded-full bg-gray-50 dark:bg-zinc-900 border-2 border-gray-700 dark:border-gray-300",
  variants: {
    isDragging: {
      true: "bg-gray-700 dark:bg-gray-300 forced-colors:bg-[ButtonBorder]"
    },
    isDisabled: {
      true: "border-gray-300 dark:border-zinc-700 forced-colors:border-[GrayText]"
    }
  }
});
function l9({
  label: e,
  thumbLabels: t,
  ...n
}) {
  return /* @__PURE__ */ te(
    JD,
    {
      ...n,
      className: Re(
        n.className,
        "grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:grid orientation-horizontal:w-64 orientation-vertical:flex"
      ),
      children: [
        /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ A(QD, { className: "text-sm font-medium text-gray-500 orientation-vertical:hidden dark:text-zinc-400", children: ({ state: r }) => r.values.map((a, i) => r.getThumbValueLabel(i)).join(" – ") }),
        /* @__PURE__ */ A(t2, { className: "group col-span-2 flex items-center orientation-horizontal:h-6 orientation-vertical:h-64 orientation-vertical:w-6", children: ({ state: r, ...a }) => /* @__PURE__ */ te(Qe, { children: [
          /* @__PURE__ */ A("div", { className: u8(a) }),
          r.values.map((i, l) => /* @__PURE__ */ A(
            r2,
            {
              index: l,
              "aria-label": t == null ? void 0 : t[l],
              className: s8
            },
            l
          ))
        ] }) })
      ]
    }
  );
}
const d8 = ie({
  extend: Se,
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
}), c8 = ie({
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
function o9({ children: e, ...t }) {
  return /* @__PURE__ */ A(
    l2,
    {
      ...t,
      className: Re(
        t.className,
        "group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]"
      ),
      children: (n) => /* @__PURE__ */ te(Qe, { children: [
        /* @__PURE__ */ A("div", { className: d8(n), children: /* @__PURE__ */ A("span", { className: c8(n) }) }),
        e
      ] })
    }
  );
}
function u9(e) {
  return /* @__PURE__ */ A(s2, { className: "relative max-h-[280px] w-[550px] scroll-pt-[2.281rem] overflow-auto rounded-lg border dark:border-zinc-600", children: /* @__PURE__ */ A(f2, { ...e, className: "border-separate border-spacing-0" }) });
}
const f8 = ie({
  extend: Se,
  base: "px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden"
}), p8 = ie({
  extend: Se,
  base: "w-px px-[8px] translate-x-[8px] box-content py-1 h-5 bg-clip-content bg-gray-400 dark:bg-zinc-500 forced-colors:bg-[ButtonBorder] cursor-col-resize rounded resizing:bg-blue-600 forced-colors:resizing:bg-[Highlight] resizing:w-[2px] resizing:pl-[7px] -outline-offset-2"
});
function b8(e) {
  return /* @__PURE__ */ A(
    Fv,
    {
      ...e,
      className: Re(
        e.className,
        "cursor-default text-start text-sm font-semibold text-gray-700 dark:text-zinc-300 [&:focus-within]:z-20 [&:hover]:z-20"
      ),
      children: Ve(
        e.children,
        (t, { allowsSorting: n, sortDirection: r }) => /* @__PURE__ */ te("div", { className: "flex items-center", children: [
          /* @__PURE__ */ te(zo, { role: "presentation", tabIndex: -1, className: f8, children: [
            /* @__PURE__ */ A("span", { className: "truncate", children: t }),
            n && /* @__PURE__ */ A(
              "span",
              {
                className: `flex h-4 w-4 items-center justify-center transition ${r === "descending" ? "rotate-180" : ""}`,
                children: r && /* @__PURE__ */ A(
                  lg,
                  {
                    "aria-hidden": !0,
                    className: "h-4 w-4 text-gray-500 dark:text-zinc-400 forced-colors:text-[ButtonText]"
                  }
                )
              }
            )
          ] }),
          !e.width && /* @__PURE__ */ A(P2, { className: p8 })
        ] })
      )
    }
  );
}
function s9(e) {
  let { selectionBehavior: t, selectionMode: n, allowsDragging: r } = kv();
  return /* @__PURE__ */ te(
    b2,
    {
      ...e,
      className: kt(
        "sticky top-0 z-10 rounded-t-lg border-b bg-gray-100/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:border-b-zinc-700 dark:bg-zinc-700/60 dark:supports-[-moz-appearance:none]:bg-zinc-700 forced-colors:bg-[Canvas]",
        e.className
      ),
      children: [
        r && /* @__PURE__ */ A(b8, {}),
        t === "toggle" && /* @__PURE__ */ A(
          Fv,
          {
            width: 36,
            minWidth: 36,
            className: "cursor-default p-2 text-start text-sm font-semibold",
            children: n === "multiple" && /* @__PURE__ */ A(eu, { slot: "selection" })
          }
        ),
        /* @__PURE__ */ A(Io, { items: e.columns, children: e.children })
      ]
    }
  );
}
const m8 = ie({
  extend: Se,
  base: "group/row relative cursor-default select-none -outline-offset-2 text-gray-900 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700/60 selected:bg-blue-100 selected:hover:bg-blue-200 dark:selected:bg-blue-700/30 dark:selected:hover:bg-blue-700/40"
});
function d9({
  id: e,
  columns: t,
  children: n,
  ...r
}) {
  let { selectionBehavior: a, allowsDragging: i } = kv();
  return /* @__PURE__ */ te(v2, { id: e, ...r, className: m8, children: [
    i && /* @__PURE__ */ A(Ts, { children: /* @__PURE__ */ A(Yn, { slot: "drag", children: "≡" }) }),
    a === "toggle" && /* @__PURE__ */ A(Ts, { children: /* @__PURE__ */ A(eu, { slot: "selection" }) }),
    /* @__PURE__ */ A(Io, { items: t, children: n })
  ] });
}
const h8 = ie({
  extend: Se,
  base: "border-b dark:border-b-zinc-700 group-last/row:border-b-0 [--selected-border:theme(colors.blue.200)] dark:[--selected-border:theme(colors.blue.900)] group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border] p-2 truncate -outline-offset-2"
});
function Ts(e) {
  return /* @__PURE__ */ A($2, { ...e, className: h8 });
}
const v8 = ie({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row w-[800px]"
    }
  }
});
function c9(e) {
  return /* @__PURE__ */ A(
    R2,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => v8({ ...n, className: t })
      )
    }
  );
}
const g8 = ie({
  base: "flex gap-1",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
});
function f9(e) {
  return /* @__PURE__ */ A(
    K2,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => g8({ ...n, className: t })
      )
    }
  );
}
const $8 = ie({
  extend: Se,
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
function p9(e) {
  return /* @__PURE__ */ A(
    V2,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => $8({ ...n, className: t })
      )
    }
  );
}
const y8 = ie({
  extend: Se,
  base: "flex-1 p-4 text-sm text-gray-900 dark:text-zinc-100"
});
function b9(e) {
  return /* @__PURE__ */ A(
    j2,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => y8({ ...n, className: t })
      )
    }
  );
}
const Ms = {
  gray: "bg-gray-100 text-gray-600 border-gray-200 hover:border-gray-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600 dark:hover:border-zinc-500",
  green: "bg-green-100 text-green-700 border-green-200 hover:border-green-300 dark:bg-green-300/20 dark:text-green-400 dark:border-green-300/10 dark:hover:border-green-300/20",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:border-yellow-300 dark:bg-yellow-300/20 dark:text-yellow-400 dark:border-yellow-300/10 dark:hover:border-yellow-300/20",
  blue: "bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/10 dark:hover:border-blue-400/20"
}, Yv = W("gray"), x8 = ie({
  extend: Se,
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
  compoundVariants: Object.keys(Ms).map((e) => ({
    isSelected: !1,
    color: e,
    class: Ms[e]
  }))
});
function m9({
  label: e,
  description: t,
  errorMessage: n,
  items: r,
  children: a,
  renderEmptyState: i,
  ...l
}) {
  return /* @__PURE__ */ te(
    U2,
    {
      ...l,
      className: kt("flex flex-col gap-1", l.className),
      children: [
        /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ A(Yv.Provider, { value: l.color || "gray", children: /* @__PURE__ */ A(
          Z2,
          {
            items: r,
            renderEmptyState: i,
            className: "flex flex-wrap gap-1",
            children: a
          }
        ) }),
        t && /* @__PURE__ */ A(bt, { children: t }),
        n && /* @__PURE__ */ A(qr, { slot: "errorMessage", className: "text-sm text-red-600", children: n })
      ]
    }
  );
}
const D8 = ie({
  extend: Se,
  base: "cursor-default rounded-full transition-[background-color] p-0.5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 pressed:bg-black/20 dark:pressed:bg-white/20"
});
function h9({ children: e, color: t, ...n }) {
  let r = typeof e == "string" ? e : void 0, a = U(Yv);
  return /* @__PURE__ */ A(
    Y2,
    {
      textValue: r,
      ...n,
      className: Ve(
        n.className,
        (i, l) => x8({ ...l, className: i, color: t || a })
      ),
      children: ({ allowsRemoving: i }) => /* @__PURE__ */ te(Qe, { children: [
        e,
        i && /* @__PURE__ */ A(Yn, { slot: "remove", className: D8, children: /* @__PURE__ */ A(Ns, { "aria-hidden": !0, className: "h-3 w-3" }) })
      ] })
    }
  );
}
const C8 = ie({
  extend: Se,
  base: "border rounded-md",
  variants: {
    isFocused: kr.variants.isFocusWithin,
    ...kr.variants
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
function v9({
  label: e,
  description: t,
  errorMessage: n,
  ...r
}) {
  return /* @__PURE__ */ te(
    t7,
    {
      ...r,
      className: Re(
        r.className,
        "flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ A(We, { children: e }),
        /* @__PURE__ */ A(Ei, { className: C8 }),
        t && /* @__PURE__ */ A(bt, { children: t }),
        /* @__PURE__ */ A(Ct, { children: n })
      ]
    }
  );
}
function g9({
  label: e,
  description: t,
  errorMessage: n,
  ...r
}) {
  return /* @__PURE__ */ te(Ox, { ...r, children: [
    /* @__PURE__ */ A(We, { children: e }),
    /* @__PURE__ */ A(Fr, {}),
    t && /* @__PURE__ */ A(bt, { children: t }),
    /* @__PURE__ */ A(Ct, { children: n })
  ] });
}
let E8 = ie({
  extend: Se,
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
function $9(e) {
  return /* @__PURE__ */ A(
    a7,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => E8({ ...n, className: t })
      )
    }
  );
}
const P8 = ie({
  base: "flex gap-2",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
});
function y9(e) {
  return /* @__PURE__ */ A(
    o7,
    {
      ...e,
      className: Ve(
        e.className,
        (t, n) => P8({ ...n, className: t })
      )
    }
  );
}
const w8 = ie({
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
function x9({ children: e, ...t }) {
  return /* @__PURE__ */ te(
    d7,
    {
      ...t,
      offset: 10,
      className: Ve(
        t.className,
        (n, r) => w8({ ...r, className: n })
      ),
      children: [
        /* @__PURE__ */ A(Kh, { children: /* @__PURE__ */ A(
          "svg",
          {
            width: 8,
            height: 8,
            viewBox: "0 0 8 8",
            className: "fill-slate-700 stroke-gray-800 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 dark:fill-slate-600 dark:stroke-white/10 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
            children: /* @__PURE__ */ A("path", { d: "M0 0 L4 4 L8 0" })
          }
        ) }),
        e
      ]
    }
  );
}
export {
  F8 as AlertDialog,
  T8 as Breadcrumb,
  A8 as Breadcrumbs,
  nn as Button,
  G7 as Calendar,
  Wv as CalendarGridHeader,
  Uv as CalendarHeader,
  Ts as Cell,
  eu as Checkbox,
  M8 as CheckboxGroup,
  b8 as Column,
  N8 as ComboBox,
  K8 as ComboBoxItem,
  z8 as ComboBoxSection,
  V8 as DateField,
  Fr as DateInput,
  L8 as DatePicker,
  O8 as DateRangePicker,
  bt as Description,
  Qo as Dialog,
  qv as DropdownItem,
  tu as DropdownSection,
  Ct as FieldError,
  Qr as FieldGroup,
  j8 as Form,
  H8 as GridList,
  _8 as GridListItem,
  Ei as Input,
  We as Label,
  U7 as Link,
  R8 as ListBox,
  I8 as ListBoxItem,
  U8 as Menu,
  W8 as MenuItem,
  Z8 as MenuSection,
  G8 as MenuSeparator,
  q8 as Meter,
  Y8 as Modal,
  J8 as NumberField,
  ea as Popover,
  X8 as ProgressBar,
  e9 as Radio,
  Q8 as RadioGroup,
  e8 as RangeCalendar,
  d9 as Row,
  t9 as SearchField,
  n9 as Select,
  r9 as SelectItem,
  a9 as SelectSection,
  i9 as Separator,
  l9 as Slider,
  o9 as Switch,
  p9 as Tab,
  f9 as TabList,
  b9 as TabPanel,
  u9 as Table,
  s9 as TableHeader,
  c9 as Tabs,
  h9 as Tag,
  m9 as TagGroup,
  v9 as TextField,
  g9 as TimeField,
  $9 as ToggleButton,
  y9 as Toolbar,
  x9 as Tooltip,
  Re as composeTailwindRenderProps,
  Zv as dropdownItemStyles,
  kr as fieldBorderStyles,
  Gv as fieldGroupStyles,
  Se as focusRing,
  Y7 as itemStyles
};
//# sourceMappingURL=gss-ui.js.map
