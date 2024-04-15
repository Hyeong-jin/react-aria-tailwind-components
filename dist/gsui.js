import f, { forwardRef as Z, createElement as ru, useState as G, useRef as R, useEffect as Y, useCallback as X, useContext as _, useMemo as N, createContext as U, cloneElement as As } from "react";
import Br, { flushSync as Jv, createPortal as Xv } from "react-dom";
var Qv = {
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
const eg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Je = (e, t) => {
  const n = Z(
    ({ color: r = "currentColor", size: a = 24, strokeWidth: i = 2, absoluteStrokeWidth: l, children: o, ...u }, s) => ru(
      "svg",
      {
        ref: s,
        ...Qv,
        width: a,
        height: a,
        stroke: r,
        strokeWidth: l ? Number(i) * 24 / Number(a) : i,
        className: `lucide lucide-${eg(e)}`,
        ...u
      },
      [
        ...t.map(([d, c]) => ru(d, c)),
        ...(Array.isArray(o) ? o : [o]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, tg = Je("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]), ng = Je("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), rg = Je("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]), Ts = Je("Calendar", [
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
]), Ol = Je("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), jl = Je("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), au = Je("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), el = Je("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), ag = Je("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), ig = Je("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), lg = Je("Minus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }]
]), og = Je("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Ms = Je("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Ie(e, t, n) {
  let [r, a] = G(e || t), i = R(e !== void 0), l = e !== void 0;
  Y(() => {
    let s = i.current;
    s !== l && console.warn(`WARN: A component changed from ${s ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), i.current = l;
  }, [
    l
  ]);
  let o = l ? e : r, u = X((s, ...d) => {
    let c = (p, ...m) => {
      n && (Object.is(o, p) || n(p, ...m)), l || (o = p);
    };
    typeof s == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a((m, ...b) => {
      let h = s(l ? o : m, ...b);
      return c(h, ...d), l ? m : h;
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
function lt(e, t = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(e, t), n);
}
function We(e, t, n, r) {
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
const ga = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Rs = /* @__PURE__ */ f.createContext(ga), ug = /* @__PURE__ */ f.createContext(!1);
let sg = !!(typeof window < "u" && window.document && window.document.createElement), wi = /* @__PURE__ */ new WeakMap();
function dg(e = !1) {
  let t = _(Rs), n = R(null);
  if (n.current === null && !e) {
    var r, a;
    let i = (a = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (r = a.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (i) {
      let l = wi.get(i);
      l == null ? wi.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== l.state && (t.current = l.id, wi.delete(i));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function cg(e) {
  let t = _(Rs);
  t === ga && !sg && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = dg(!!e), r = t === ga && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function fg(e) {
  let t = f.useId(), [n] = G(Et()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${ga.prefix}`;
  return e || `${r}-${t}`;
}
const mg = typeof f.useId == "function" ? fg : cg;
function pg() {
  return !1;
}
function bg() {
  return !0;
}
function hg(e) {
  return () => {
  };
}
function Et() {
  return typeof f.useSyncExternalStore == "function" ? f.useSyncExternalStore(hg, pg, bg) : _(ug);
}
function Is(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (n = Is(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function vg() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
    (e = arguments[n]) && (t = Is(e)) && (r && (r += " "), r += t);
  return r;
}
const de = typeof document < "u" ? f.useLayoutEffect : () => {
};
function ve(e) {
  const t = R(null);
  return de(() => {
    t.current = e;
  }, [
    e
  ]), X((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
function gg(e) {
  let [t, n] = G(e), r = R(null), a = ve(() => {
    if (!r.current)
      return;
    let l = r.current.next();
    if (l.done) {
      r.current = null;
      return;
    }
    t === l.value ? a() : n(l.value);
  });
  de(() => {
    r.current && a();
  });
  let i = ve((l) => {
    r.current = l(t), a();
  });
  return [
    t,
    i
  ];
}
let $g = !!(typeof window < "u" && window.document && window.document.createElement), $a = /* @__PURE__ */ new Map();
function ce(e) {
  let [t, n] = G(e), r = R(null), a = mg(t), i = X((l) => {
    r.current = l;
  }, []);
  return $g && $a.set(a, i), de(() => {
    let l = a;
    return () => {
      $a.delete(l);
    };
  }, [
    a
  ]), Y(() => {
    let l = r.current;
    l && (r.current = null, n(l));
  }), a;
}
function yg(e, t) {
  if (e === t)
    return e;
  let n = $a.get(e);
  if (n)
    return n(t), t;
  let r = $a.get(t);
  return r ? (r(e), e) : t;
}
function Dt(e = []) {
  let t = ce(), [n, r] = gg(t), a = X(() => {
    r(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    r
  ]);
  return de(a, [
    t,
    a,
    ...e
  ]), n;
}
function bt(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const pe = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, it = (e) => e && "window" in e && e.window === e ? e : pe(e).defaultView || window;
function O(...e) {
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
      90 ? t[a] = bt(i, l) : (a === "className" || a === "UNSAFE_className") && typeof i == "string" && typeof l == "string" ? t[a] = vg(i, l) : a === "id" && i && l ? t.id = yg(i, l) : t[a] = l !== void 0 ? l : i;
    }
  }
  return t;
}
function _a(...e) {
  return e.length === 1 ? e[0] : (t) => {
    for (let n of e)
      typeof n == "function" ? n(t) : n != null && (n.current = t);
  };
}
const xg = /* @__PURE__ */ new Set([
  "id"
]), Dg = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Eg = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Cg = /^(data-.*)$/;
function q(e, t = {}) {
  let { labelable: n, isLink: r, propNames: a } = t, i = {};
  for (const l in e)
    Object.prototype.hasOwnProperty.call(e, l) && (xg.has(l) || n && Dg.has(l) || r && Eg.has(l) || a != null && a.has(l) || Cg.test(l)) && (i[l] = e[l]);
  return i;
}
function pt(e) {
  if (Pg())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = wg(e);
    e.focus(), Sg(t);
  }
}
let Qr = null;
function Pg() {
  if (Qr == null) {
    Qr = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Qr = !0, !0;
        }
      });
    } catch {
    }
  }
  return Qr;
}
function wg(e) {
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
function Sg(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Ua(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Hl(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Nt() {
  return Hl(/^Mac/i);
}
function Ns() {
  return Hl(/^iPhone/i);
}
function Ks() {
  return Hl(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Nt() && navigator.maxTouchPoints > 1;
}
function Hn() {
  return Ns() || Ks();
}
function fa() {
  return Nt() || Hn();
}
function _l() {
  return Ua(/AppleWebKit/i) && !Bg();
}
function Bg() {
  return Ua(/Chrome/i);
}
function mr() {
  return Ua(/Android/i);
}
function kg() {
  return Ua(/Firefox/i);
}
const Fg = /* @__PURE__ */ U({
  isNative: !0,
  open: Mg
});
function kr() {
  return _(Fg);
}
function Ag(e, t) {
  let n = e.getAttribute("target");
  return (!n || n === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function fn(e, t, n = !0) {
  var r, a;
  let { metaKey: i, ctrlKey: l, altKey: o, shiftKey: u } = t;
  kg() && (!((a = window.event) === null || a === void 0 || (r = a.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (Nt() ? i = !0 : l = !0);
  let s = _l() && Nt() && !Ks() ? new KeyboardEvent("keydown", {
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
  fn.isOpening = n, pt(e), e.dispatchEvent(s), fn.isOpening = !1;
}
fn.isOpening = !1;
function Tg(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n);
  }
}
function Mg(e, t) {
  Tg(e, (n) => fn(n, t));
}
function Ul(e) {
  return {
    "data-href": e.href,
    "data-target": e.target,
    "data-rel": e.rel,
    "data-download": e.download,
    "data-ping": e.ping,
    "data-referrer-policy": e.referrerPolicy
  };
}
let Bn = /* @__PURE__ */ new Map(), tl = /* @__PURE__ */ new Set();
function iu() {
  if (typeof window > "u")
    return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Bn.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), Bn.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Bn.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), Bn.delete(r.target)), Bn.size === 0)) {
      for (let i of tl)
        i();
      tl.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? iu() : document.addEventListener("DOMContentLoaded", iu));
function zs(e) {
  requestAnimationFrame(() => {
    Bn.size === 0 ? e() : tl.add(e);
  });
}
function _n() {
  let e = R(/* @__PURE__ */ new Map()), t = X((a, i, l, o) => {
    let u = o != null && o.once ? (...s) => {
      e.current.delete(l), l(...s);
    } : l;
    e.current.set(l, {
      type: i,
      eventTarget: a,
      fn: u,
      options: o
    }), a.addEventListener(i, l, o);
  }, []), n = X((a, i, l, o) => {
    var u;
    let s = ((u = e.current.get(l)) === null || u === void 0 ? void 0 : u.fn) || l;
    a.removeEventListener(i, s, o), e.current.delete(l);
  }, []), r = X(() => {
    e.current.forEach((a, i) => {
      n(a.eventTarget, a.type, i, a.options);
    });
  }, [
    n
  ]);
  return Y(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Kt(e, t) {
  let { id: n, "aria-label": r, "aria-labelledby": a } = e;
  return n = ce(n), a && r ? a = [
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
function Fe(e) {
  const t = R(null);
  return N(() => ({
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
function ya(e, t) {
  const n = R(!0), r = R(null);
  Y(() => (n.current = !0, () => {
    n.current = !1;
  }), []), Y(() => {
    n.current ? n.current = !1 : (!r.current || t.some((a, i) => !Object.is(a, r[i]))) && e(), r.current = t;
  }, t);
}
function Rg() {
  return typeof window.ResizeObserver < "u";
}
function Fr(e) {
  const { ref: t, onResize: n } = e;
  Y(() => {
    let r = t == null ? void 0 : t.current;
    if (r)
      if (Rg()) {
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
function Vs(e, t) {
  de(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Ne(e, t) {
  let n = e;
  for (xa(n, t) && (n = n.parentElement); n && !xa(n, t); )
    n = n.parentElement;
  return n || document.scrollingElement || document.documentElement;
}
function xa(e, t) {
  let n = window.getComputedStyle(e), r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r;
}
let nt = typeof document < "u" && window.visualViewport;
function Ig() {
  let e = Et(), [t, n] = G(() => e ? {
    width: 0,
    height: 0
  } : lu());
  return Y(() => {
    let r = () => {
      n((a) => {
        let i = lu();
        return i.width === a.width && i.height === a.height ? a : i;
      });
    };
    return nt ? nt.addEventListener("resize", r) : window.addEventListener("resize", r), () => {
      nt ? nt.removeEventListener("resize", r) : window.removeEventListener("resize", r);
    };
  }, []), t;
}
function lu() {
  return {
    width: nt && (nt == null ? void 0 : nt.width) || window.innerWidth,
    height: nt && (nt == null ? void 0 : nt.height) || window.innerHeight
  };
}
let Ng = 0;
const Si = /* @__PURE__ */ new Map();
function Ct(e) {
  let [t, n] = G();
  return de(() => {
    if (!e)
      return;
    let r = Si.get(e);
    if (r)
      n(r.element.id);
    else {
      let a = `react-aria-description-${Ng++}`;
      n(a);
      let i = document.createElement("div");
      i.id = a, i.style.display = "none", i.textContent = e, document.body.appendChild(i), r = {
        refCount: 0,
        element: i
      }, Si.set(e, r);
    }
    return r.refCount++, () => {
      r && --r.refCount === 0 && (r.element.remove(), Si.delete(e));
    };
  }, [
    e
  ]), {
    "aria-describedby": e ? t : void 0
  };
}
function Zt(e, t, n, r) {
  let a = ve(n), i = n == null;
  Y(() => {
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
function Ls(e, t) {
  let n = ou(e, t, "left"), r = ou(e, t, "top"), a = t.offsetWidth, i = t.offsetHeight, l = e.scrollLeft, o = e.scrollTop, { borderTopWidth: u, borderLeftWidth: s } = getComputedStyle(e), d = e.scrollLeft + parseInt(s, 10), c = e.scrollTop + parseInt(u, 10), p = d + e.clientWidth, m = c + e.clientHeight;
  n <= l ? l = n - parseInt(s, 10) : n + a > p && (l += n + a - p), r <= c ? o = r - parseInt(u, 10) : r + i > m && (o += r + i - m), e.scrollLeft = l, e.scrollTop = o;
}
function ou(e, t, n) {
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
function Le(e, t) {
  if (document.contains(e)) {
    let l = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(l).overflow === "hidden") {
      let u = Ne(e);
      for (; e && u && e !== l && u !== l; )
        Ls(u, e), e = u, u = Ne(e);
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
function nl(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : mr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Kg(e) {
  return !mr() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function Os(e, t) {
  let n = R(null);
  return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e;
}
function vn(e, t, n) {
  let r = R(t), a = ve(() => {
    n && n(r.current);
  });
  Y(() => {
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
function zg(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function js(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function Vg(e, t) {
  var n = js(e, t, "get");
  return zg(e, n);
}
function Lg(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ar(e, t, n) {
  Lg(e, t), t.set(e, n);
}
function Og(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function uu(e, t, n) {
  var r = js(e, t, "set");
  return Og(e, r, n), n;
}
let An = "default", rl = "", ma = /* @__PURE__ */ new WeakMap();
function al(e) {
  if (Hn()) {
    if (An === "default") {
      const t = pe(e);
      rl = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    An = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && (ma.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function ir(e) {
  if (Hn()) {
    if (An !== "disabled")
      return;
    An = "restoring", setTimeout(() => {
      zs(() => {
        if (An === "restoring") {
          const t = pe(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = rl || ""), rl = "", An = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ma.has(e)) {
    let t = ma.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), ma.delete(e);
  }
}
const Wl = f.createContext({
  register: () => {
  }
});
Wl.displayName = "PressResponderContext";
function jg(e) {
  let t = _(Wl);
  if (t) {
    let { register: n, ...r } = t;
    e = O(r, e), n();
  }
  return Vs(t, e.ref), e;
}
var ea = /* @__PURE__ */ new WeakMap();
class ta {
  continuePropagation() {
    uu(this, ea, !1);
  }
  get shouldStopPropagation() {
    return Vg(this, ea);
  }
  constructor(t, n, r) {
    Ar(this, ea, {
      writable: !0,
      value: void 0
    }), uu(this, ea, !0), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey;
  }
}
const su = Symbol("linkClicked");
function Ye(e) {
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
  } = jg(e), [m, b] = G(!1), h = R({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: v, removeAllGlobalListeners: y } = _n(), $ = ve((g, M) => {
    let F = h.current;
    if (l || F.didFirePressStart)
      return !1;
    let C = !0;
    if (F.isTriggeringEvent = !0, r) {
      let S = new ta("pressstart", M, g);
      r(S), C = S.shouldStopPropagation;
    }
    return n && n(!0), F.isTriggeringEvent = !1, F.didFirePressStart = !0, b(!0), C;
  }), x = ve((g, M, F = !0) => {
    let C = h.current;
    if (!C.didFirePressStart)
      return !1;
    C.ignoreClickAfterPress = !0, C.didFirePressStart = !1, C.isTriggeringEvent = !0;
    let S = !0;
    if (a) {
      let w = new ta("pressend", M, g);
      a(w), S = w.shouldStopPropagation;
    }
    if (n && n(!1), b(!1), t && F && !l) {
      let w = new ta("press", M, g);
      t(w), S && (S = w.shouldStopPropagation);
    }
    return C.isTriggeringEvent = !1, S;
  }), E = ve((g, M) => {
    let F = h.current;
    if (l)
      return !1;
    if (i) {
      F.isTriggeringEvent = !0;
      let C = new ta("pressup", M, g);
      return i(C), F.isTriggeringEvent = !1, C.shouldStopPropagation;
    }
    return !0;
  }), P = ve((g) => {
    let M = h.current;
    M.isPressed && M.target && (M.isOverTarget && M.pointerType != null && x(St(M.target, g), M.pointerType, !1), M.isPressed = !1, M.isOverTarget = !1, M.activePointerId = null, M.pointerType = null, y(), d || ir(M.target));
  }), B = ve((g) => {
    s && P(g);
  }), T = N(() => {
    let g = h.current, M = {
      onKeyDown(C) {
        if (Bi(C.nativeEvent, C.currentTarget) && C.currentTarget.contains(C.target)) {
          var S;
          cu(C.target, C.key) && C.preventDefault();
          let w = !0;
          if (!g.isPressed && !C.repeat) {
            g.target = C.currentTarget, g.isPressed = !0, w = $(C, "keyboard");
            let k = C.currentTarget, K = (A) => {
              Bi(A, k) && !A.repeat && k.contains(A.target) && g.target && E(St(g.target, A), "keyboard");
            };
            v(pe(C.currentTarget), "keyup", bt(K, F), !0);
          }
          w && C.stopPropagation(), C.metaKey && Nt() && ((S = g.metaKeyEvents) === null || S === void 0 || S.set(C.key, C.nativeEvent));
        } else
          C.key === "Meta" && (g.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(C) {
        if (!(C && !C.currentTarget.contains(C.target)) && C && C.button === 0 && !g.isTriggeringEvent && !fn.isOpening) {
          let S = !0;
          if (l && C.preventDefault(), !g.ignoreClickAfterPress && !g.ignoreEmulatedMouseEvents && !g.isPressed && (g.pointerType === "virtual" || nl(C.nativeEvent))) {
            !l && !u && pt(C.currentTarget);
            let w = $(C, "virtual"), k = E(C, "virtual"), K = x(C, "virtual");
            S = w && k && K;
          }
          g.ignoreEmulatedMouseEvents = !1, g.ignoreClickAfterPress = !1, S && C.stopPropagation();
        }
      }
    }, F = (C) => {
      var S;
      if (g.isPressed && g.target && Bi(C, g.target)) {
        var w;
        cu(C.target, C.key) && C.preventDefault();
        let K = C.target;
        x(St(g.target, C), "keyboard", g.target.contains(K)), y(), C.key !== "Enter" && Gl(g.target) && g.target.contains(K) && !C[su] && (C[su] = !0, fn(g.target, C, !1)), g.isPressed = !1, (w = g.metaKeyEvents) === null || w === void 0 || w.delete(C.key);
      } else if (C.key === "Meta" && (!((S = g.metaKeyEvents) === null || S === void 0) && S.size)) {
        var k;
        let K = g.metaKeyEvents;
        g.metaKeyEvents = void 0;
        for (let A of K.values())
          (k = g.target) === null || k === void 0 || k.dispatchEvent(new KeyboardEvent("keyup", A));
      }
    };
    if (typeof PointerEvent < "u") {
      M.onPointerDown = (k) => {
        if (k.button !== 0 || !k.currentTarget.contains(k.target))
          return;
        if (Kg(k.nativeEvent)) {
          g.pointerType = "virtual";
          return;
        }
        ki(k.currentTarget) && k.preventDefault(), g.pointerType = k.pointerType;
        let K = !0;
        g.isPressed || (g.isPressed = !0, g.isOverTarget = !0, g.activePointerId = k.pointerId, g.target = k.currentTarget, !l && !u && pt(k.currentTarget), d || al(g.target), K = $(k, g.pointerType), v(pe(k.currentTarget), "pointermove", C, !1), v(pe(k.currentTarget), "pointerup", S, !1), v(pe(k.currentTarget), "pointercancel", w, !1)), K && k.stopPropagation();
      }, M.onMouseDown = (k) => {
        k.currentTarget.contains(k.target) && k.button === 0 && (ki(k.currentTarget) && k.preventDefault(), k.stopPropagation());
      }, M.onPointerUp = (k) => {
        !k.currentTarget.contains(k.target) || g.pointerType === "virtual" || k.button === 0 && Pn(k, k.currentTarget) && E(k, g.pointerType || k.pointerType);
      };
      let C = (k) => {
        k.pointerId === g.activePointerId && (g.target && Pn(k, g.target) ? !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, $(St(g.target, k), g.pointerType)) : g.target && g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, x(St(g.target, k), g.pointerType, !1), B(k)));
      }, S = (k) => {
        k.pointerId === g.activePointerId && g.isPressed && k.button === 0 && g.target && (Pn(k, g.target) && g.pointerType != null ? x(St(g.target, k), g.pointerType) : g.isOverTarget && g.pointerType != null && x(St(g.target, k), g.pointerType, !1), g.isPressed = !1, g.isOverTarget = !1, g.activePointerId = null, g.pointerType = null, y(), d || ir(g.target));
      }, w = (k) => {
        P(k);
      };
      M.onDragStart = (k) => {
        k.currentTarget.contains(k.target) && P(k);
      };
    } else {
      M.onMouseDown = (w) => {
        if (w.button !== 0 || !w.currentTarget.contains(w.target))
          return;
        if (ki(w.currentTarget) && w.preventDefault(), g.ignoreEmulatedMouseEvents) {
          w.stopPropagation();
          return;
        }
        g.isPressed = !0, g.isOverTarget = !0, g.target = w.currentTarget, g.pointerType = nl(w.nativeEvent) ? "virtual" : "mouse", !l && !u && pt(w.currentTarget), $(w, g.pointerType) && w.stopPropagation(), v(pe(w.currentTarget), "mouseup", C, !1);
      }, M.onMouseEnter = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        let k = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !0, k = $(w, g.pointerType)), k && w.stopPropagation();
      }, M.onMouseLeave = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        let k = !0;
        g.isPressed && !g.ignoreEmulatedMouseEvents && g.pointerType != null && (g.isOverTarget = !1, k = x(w, g.pointerType, !1), B(w)), k && w.stopPropagation();
      }, M.onMouseUp = (w) => {
        w.currentTarget.contains(w.target) && !g.ignoreEmulatedMouseEvents && w.button === 0 && E(w, g.pointerType || "mouse");
      };
      let C = (w) => {
        if (w.button === 0) {
          if (g.isPressed = !1, y(), g.ignoreEmulatedMouseEvents) {
            g.ignoreEmulatedMouseEvents = !1;
            return;
          }
          g.target && Pn(w, g.target) && g.pointerType != null ? x(St(g.target, w), g.pointerType) : g.target && g.isOverTarget && g.pointerType != null && x(St(g.target, w), g.pointerType, !1), g.isOverTarget = !1;
        }
      };
      M.onTouchStart = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        let k = Hg(w.nativeEvent);
        if (!k)
          return;
        g.activePointerId = k.identifier, g.ignoreEmulatedMouseEvents = !0, g.isOverTarget = !0, g.isPressed = !0, g.target = w.currentTarget, g.pointerType = "touch", !l && !u && pt(w.currentTarget), d || al(g.target), $(w, g.pointerType) && w.stopPropagation(), v(it(w.currentTarget), "scroll", S, !0);
      }, M.onTouchMove = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        if (!g.isPressed) {
          w.stopPropagation();
          return;
        }
        let k = du(w.nativeEvent, g.activePointerId), K = !0;
        k && Pn(k, w.currentTarget) ? !g.isOverTarget && g.pointerType != null && (g.isOverTarget = !0, K = $(w, g.pointerType)) : g.isOverTarget && g.pointerType != null && (g.isOverTarget = !1, K = x(w, g.pointerType, !1), B(w)), K && w.stopPropagation();
      }, M.onTouchEnd = (w) => {
        if (!w.currentTarget.contains(w.target))
          return;
        if (!g.isPressed) {
          w.stopPropagation();
          return;
        }
        let k = du(w.nativeEvent, g.activePointerId), K = !0;
        k && Pn(k, w.currentTarget) && g.pointerType != null ? (E(w, g.pointerType), K = x(w, g.pointerType)) : g.isOverTarget && g.pointerType != null && (K = x(w, g.pointerType, !1)), K && w.stopPropagation(), g.isPressed = !1, g.activePointerId = null, g.isOverTarget = !1, g.ignoreEmulatedMouseEvents = !0, g.target && !d && ir(g.target), y();
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
    E
  ]);
  return Y(() => () => {
    var g;
    d || ir((g = h.current.target) !== null && g !== void 0 ? g : void 0);
  }, [
    d
  ]), {
    isPressed: o || m,
    pressProps: O(p, T)
  };
}
function Gl(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Bi(e, t) {
  const { key: n, code: r } = e, a = t, i = a.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(a instanceof it(a).HTMLInputElement && !Hs(a, n) || a instanceof it(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Gl(a)) && n !== "Enter");
}
function Hg(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function du(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.identifier === t)
      return a;
  }
  return null;
}
function St(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  };
}
function _g(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function Ug(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Pn(e, t) {
  let n = t.getBoundingClientRect(), r = _g(e);
  return Ug(n, r);
}
function ki(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function cu(e, t) {
  return e instanceof HTMLInputElement ? !Hs(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Gl(e);
}
const Wg = /* @__PURE__ */ new Set([
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
function Hs(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Wg.has(e.type);
}
function Gg({ children: e }) {
  let t = N(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ f.createElement(Wl.Provider, {
    value: t
  }, e);
}
class Zg {
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
function _s(e) {
  let t = R({
    isFocused: !1,
    observer: null
  });
  de(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = ve((r) => {
    e == null || e(r);
  });
  return X((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = r.target, i = (l) => {
        t.current.isFocused = !1, a.disabled && n(new Zg("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
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
function Wa(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e;
  const i = X((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), a && a(!1), !0;
  }, [
    r,
    a
  ]), l = _s(i), o = X((u) => {
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
let zt = null, pr = /* @__PURE__ */ new Set(), sr = /* @__PURE__ */ new Map(), mn = !1, il = !1;
const qg = {
  Tab: !0,
  Escape: !0
};
function Ga(e, t) {
  for (let n of pr)
    n(e, t);
}
function Yg(e) {
  return !(e.metaKey || !Nt() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Da(e) {
  mn = !0, Yg(e) && (zt = "keyboard", Ga("keyboard", e));
}
function at(e) {
  zt = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (mn = !0, Ga("pointer", e));
}
function Us(e) {
  nl(e) && (mn = !0, zt = "virtual");
}
function Ws(e) {
  e.target === window || e.target === document || (!mn && !il && (zt = "virtual", Ga("virtual", e)), mn = !1, il = !1);
}
function Gs() {
  mn = !1, il = !0;
}
function Ea(e) {
  if (typeof window > "u" || sr.get(it(e)))
    return;
  const t = it(e), n = pe(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    mn = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Da, !0), n.addEventListener("keyup", Da, !0), n.addEventListener("click", Us, !0), t.addEventListener("focus", Ws, !0), t.addEventListener("blur", Gs, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", at, !0), n.addEventListener("pointermove", at, !0), n.addEventListener("pointerup", at, !0)) : (n.addEventListener("mousedown", at, !0), n.addEventListener("mousemove", at, !0), n.addEventListener("mouseup", at, !0)), t.addEventListener("beforeunload", () => {
    Zs(e);
  }, {
    once: !0
  }), sr.set(t, {
    focus: r
  });
}
const Zs = (e, t) => {
  const n = it(e), r = pe(e);
  t && r.removeEventListener("DOMContentLoaded", t), sr.has(n) && (n.HTMLElement.prototype.focus = sr.get(n).focus, r.removeEventListener("keydown", Da, !0), r.removeEventListener("keyup", Da, !0), r.removeEventListener("click", Us, !0), n.removeEventListener("focus", Ws, !0), n.removeEventListener("blur", Gs, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", at, !0), r.removeEventListener("pointermove", at, !0), r.removeEventListener("pointerup", at, !0)) : (r.removeEventListener("mousedown", at, !0), r.removeEventListener("mousemove", at, !0), r.removeEventListener("mouseup", at, !0)), sr.delete(n));
};
function Jg(e) {
  const t = pe(e);
  let n;
  return t.readyState !== "loading" ? Ea(e) : (n = () => {
    Ea(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Zs(e, n);
}
typeof document < "u" && Jg();
function pn() {
  return zt !== "pointer";
}
function Ca() {
  return zt;
}
function Zl(e) {
  zt = e, Ga(e, null);
}
function Tr() {
  Ea();
  let [e, t] = G(zt);
  return Y(() => {
    let n = () => {
      t(zt);
    };
    return pr.add(n), () => {
      pr.delete(n);
    };
  }, []), Et() ? null : e;
}
const Xg = /* @__PURE__ */ new Set([
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
function Qg(e, t, n) {
  var r;
  const a = typeof window < "u" ? it(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? it(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? it(n == null ? void 0 : n.target).HTMLElement : HTMLElement, o = typeof window < "u" ? it(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof a && !Xg.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof o && !qg[n.key]);
}
function e$(e, t, n) {
  Ea(), Y(() => {
    let r = (a, i) => {
      Qg(!!(n != null && n.isTextInput), a, i) && e(pn());
    };
    return pr.add(r), () => {
      pr.delete(r);
    };
  }, t);
}
function vt(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: a } = e, i = R({
    isFocusWithin: !1
  }), l = X((s) => {
    i.current.isFocusWithin && !s.currentTarget.contains(s.relatedTarget) && (i.current.isFocusWithin = !1, n && n(s), a && a(!1));
  }, [
    n,
    a,
    i
  ]), o = _s(l), u = X((s) => {
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
let Pa = !1, Fi = 0;
function ll() {
  Pa = !0, setTimeout(() => {
    Pa = !1;
  }, 50);
}
function fu(e) {
  e.pointerType === "touch" && ll();
}
function t$() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", fu) : document.addEventListener("touchend", ll), Fi++, () => {
      Fi--, !(Fi > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", fu) : document.removeEventListener("touchend", ll));
    };
}
function ge(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e, [i, l] = G(!1), o = R({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Y(t$, []);
  let { hoverProps: u, triggerHoverEnd: s } = N(() => {
    let d = (m, b) => {
      if (o.pointerType = b, a || b === "touch" || o.isHovered || !m.currentTarget.contains(m.target))
        return;
      o.isHovered = !0;
      let h = m.currentTarget;
      o.target = h, t && t({
        type: "hoverstart",
        target: h,
        pointerType: b
      }), n && n(!0), l(!0);
    }, c = (m, b) => {
      if (o.pointerType = "", o.target = null, b === "touch" || !o.isHovered)
        return;
      o.isHovered = !1;
      let h = m.currentTarget;
      r && r({
        type: "hoverend",
        target: h,
        pointerType: b
      }), n && n(!1), l(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (m) => {
      Pa && m.pointerType === "mouse" || d(m, m.pointerType);
    }, p.onPointerLeave = (m) => {
      !a && m.currentTarget.contains(m.target) && c(m, m.pointerType);
    }) : (p.onTouchStart = () => {
      o.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (m) => {
      !o.ignoreEmulatedMouseEvents && !Pa && d(m, "mouse"), o.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (m) => {
      !a && m.currentTarget.contains(m.target) && c(m, "mouse");
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
  return Y(() => {
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
function qs(e) {
  let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: a } = e, i = R({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), l = ve((u) => {
    n && na(u, t) && (a && a(u), i.current.isPointerDown = !0);
  }), o = ve((u) => {
    n && n(u);
  });
  Y(() => {
    let u = i.current;
    if (r)
      return;
    const s = t.current, d = pe(s);
    if (typeof PointerEvent < "u") {
      let c = (p) => {
        u.isPointerDown && na(p, t) && o(p), u.isPointerDown = !1;
      };
      return d.addEventListener("pointerdown", l, !0), d.addEventListener("pointerup", c, !0), () => {
        d.removeEventListener("pointerdown", l, !0), d.removeEventListener("pointerup", c, !0);
      };
    } else {
      let c = (m) => {
        u.ignoreEmulatedMouseEvents ? u.ignoreEmulatedMouseEvents = !1 : u.isPointerDown && na(m, t) && o(m), u.isPointerDown = !1;
      }, p = (m) => {
        u.ignoreEmulatedMouseEvents = !0, u.isPointerDown && na(m, t) && o(m), u.isPointerDown = !1;
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
function na(e, t) {
  if (e.button > 0)
    return !1;
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]"))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
function mu(e) {
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
function Za(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: mu(e.onKeyDown),
      onKeyUp: mu(e.onKeyUp)
    }
  };
}
function ql(e) {
  let { onMoveStart: t, onMove: n, onMoveEnd: r } = e, a = R({
    didMove: !1,
    lastPosition: null,
    id: null
  }), { addGlobalListener: i, removeGlobalListener: l } = _n(), o = ve((d, c, p, m) => {
    p === 0 && m === 0 || (a.current.didMove || (a.current.didMove = !0, t == null || t({
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
      deltaY: m,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  }), u = ve((d, c) => {
    ir(), a.current.didMove && (r == null || r({
      type: "moveend",
      pointerType: c,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  });
  return {
    moveProps: N(() => {
      let d = {}, c = () => {
        al(), a.current.didMove = !1;
      };
      if (typeof PointerEvent > "u") {
        let m = (y) => {
          if (y.button === 0) {
            var $, x, E, P;
            o(y, "mouse", y.pageX - ((E = ($ = a.current.lastPosition) === null || $ === void 0 ? void 0 : $.pageX) !== null && E !== void 0 ? E : 0), y.pageY - ((P = (x = a.current.lastPosition) === null || x === void 0 ? void 0 : x.pageY) !== null && P !== void 0 ? P : 0)), a.current.lastPosition = {
              pageX: y.pageX,
              pageY: y.pageY
            };
          }
        }, b = (y) => {
          y.button === 0 && (u(y, "mouse"), l(window, "mousemove", m, !1), l(window, "mouseup", b, !1));
        };
        d.onMouseDown = (y) => {
          y.button === 0 && (c(), y.stopPropagation(), y.preventDefault(), a.current.lastPosition = {
            pageX: y.pageX,
            pageY: y.pageY
          }, i(window, "mousemove", m, !1), i(window, "mouseup", b, !1));
        };
        let h = (y) => {
          let $ = [
            ...y.changedTouches
          ].findIndex(({ identifier: T }) => T === a.current.id);
          if ($ >= 0) {
            var x, E;
            let { pageX: T, pageY: g } = y.changedTouches[$];
            var P, B;
            o(y, "touch", T - ((P = (x = a.current.lastPosition) === null || x === void 0 ? void 0 : x.pageX) !== null && P !== void 0 ? P : 0), g - ((B = (E = a.current.lastPosition) === null || E === void 0 ? void 0 : E.pageY) !== null && B !== void 0 ? B : 0)), a.current.lastPosition = {
              pageX: T,
              pageY: g
            };
          }
        }, v = (y) => {
          [
            ...y.changedTouches
          ].findIndex(({ identifier: x }) => x === a.current.id) >= 0 && (u(y, "touch"), a.current.id = null, l(window, "touchmove", h), l(window, "touchend", v), l(window, "touchcancel", v));
        };
        d.onTouchStart = (y) => {
          if (y.changedTouches.length === 0 || a.current.id != null)
            return;
          let { pageX: $, pageY: x, identifier: E } = y.changedTouches[0];
          c(), y.stopPropagation(), y.preventDefault(), a.current.lastPosition = {
            pageX: $,
            pageY: x
          }, a.current.id = E, i(window, "touchmove", h, !1), i(window, "touchend", v, !1), i(window, "touchcancel", v, !1);
        };
      } else {
        let m = (h) => {
          if (h.pointerId === a.current.id) {
            var v, y;
            let E = h.pointerType || "mouse";
            var $, x;
            o(h, E, h.pageX - (($ = (v = a.current.lastPosition) === null || v === void 0 ? void 0 : v.pageX) !== null && $ !== void 0 ? $ : 0), h.pageY - ((x = (y = a.current.lastPosition) === null || y === void 0 ? void 0 : y.pageY) !== null && x !== void 0 ? x : 0)), a.current.lastPosition = {
              pageX: h.pageX,
              pageY: h.pageY
            };
          }
        }, b = (h) => {
          if (h.pointerId === a.current.id) {
            let v = h.pointerType || "mouse";
            u(h, v), a.current.id = null, l(window, "pointermove", m, !1), l(window, "pointerup", b, !1), l(window, "pointercancel", b, !1);
          }
        };
        d.onPointerDown = (h) => {
          h.button === 0 && a.current.id == null && (c(), h.stopPropagation(), h.preventDefault(), a.current.lastPosition = {
            pageX: h.pageX,
            pageY: h.pageY
          }, a.current.id = h.pointerId, i(window, "pointermove", m, !1), i(window, "pointerup", b, !1), i(window, "pointercancel", b, !1));
        };
      }
      let p = (m, b, h) => {
        c(), o(m, "keyboard", b, h), u(m, "keyboard");
      };
      return d.onKeyDown = (m) => {
        switch (m.key) {
          case "Left":
          case "ArrowLeft":
            m.preventDefault(), m.stopPropagation(), p(m, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            m.preventDefault(), m.stopPropagation(), p(m, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            m.preventDefault(), m.stopPropagation(), p(m, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            m.preventDefault(), m.stopPropagation(), p(m, 0, 1);
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
function n$(e, t) {
  let { onScroll: n, isDisabled: r } = e, a = X((i) => {
    i.ctrlKey || (i.preventDefault(), i.stopPropagation(), n && n({
      deltaX: i.deltaX,
      deltaY: i.deltaY
    }));
  }, [
    n
  ]);
  Zt(t, "wheel", r ? void 0 : a);
}
const r$ = 500;
function Ys(e) {
  let { isDisabled: t, onLongPressStart: n, onLongPressEnd: r, onLongPress: a, threshold: i = r$, accessibilityDescription: l } = e;
  const o = R();
  let { addGlobalListener: u, removeGlobalListener: s } = _n(), { pressProps: d } = Ye({
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
        let m = (b) => {
          b.preventDefault();
        };
        u(p.target, "contextmenu", m, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            s(p.target, "contextmenu", m);
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
  }), c = Ct(a && !t ? l : void 0);
  return {
    longPressProps: O(d, c)
  };
}
function ye(e) {
  const t = pe(e);
  if (Ca() === "virtual") {
    let n = t.activeElement;
    zs(() => {
      t.activeElement === n && e.isConnected && pt(e);
    });
  } else
    pt(e);
}
function a$(e) {
  const t = it(e);
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
function i$(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Js(e, t) {
  return e.nodeName !== "#comment" && a$(e) && i$(e, t) && (!e.parentElement || Js(e.parentElement, e));
}
const pu = /* @__PURE__ */ f.createContext(null);
let me = null;
function Mr(e) {
  let { children: t, contain: n, restoreFocus: r, autoFocus: a } = e, i = R(null), l = R(null), o = R([]), { parentNode: u } = _(pu) || {}, s = N(() => new ol({
    scopeRef: o
  }), [
    o
  ]);
  de(() => {
    let p = u || Se.root;
    if (Se.getTreeNode(p.scopeRef) && me && !Sa(me, p.scopeRef)) {
      let m = Se.getTreeNode(me);
      m && (p = m);
    }
    p.addChild(s), Se.addNode(s);
  }, [
    s,
    u
  ]), de(() => {
    let p = Se.getTreeNode(o);
    p && (p.contain = !!n);
  }, [
    n
  ]), de(() => {
    var p;
    let m = (p = i.current) === null || p === void 0 ? void 0 : p.nextSibling, b = [];
    for (; m && m !== l.current; )
      b.push(m), m = m.nextSibling;
    o.current = b;
  }, [
    t
  ]), f$(o, r, n), s$(o, n), p$(o, r, n), c$(o, a), Y(() => {
    const p = pe(o.current ? o.current[0] : void 0).activeElement;
    let m = null;
    if (Oe(p, o.current)) {
      for (let b of Se.traverse())
        b.scopeRef && Oe(p, b.scopeRef.current) && (m = b);
      m === Se.getTreeNode(o) && (me = m.scopeRef);
    }
  }, [
    o
  ]), de(() => () => {
    var p, m, b;
    let h = (b = (m = Se.getTreeNode(o)) === null || m === void 0 || (p = m.parent) === null || p === void 0 ? void 0 : p.scopeRef) !== null && b !== void 0 ? b : null;
    (o === me || Sa(o, me)) && (!h || Se.getTreeNode(h)) && (me = h), Se.removeTreeNode(o);
  }, [
    o
  ]);
  let d = N(() => l$(o), []), c = N(() => ({
    focusManager: d,
    parentNode: s
  }), [
    s,
    d
  ]);
  return /* @__PURE__ */ f.createElement(pu.Provider, {
    value: c
  }, /* @__PURE__ */ f.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: i
  }), t, /* @__PURE__ */ f.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: l
  }));
}
function l$(e) {
  return {
    focusNext(t = {}) {
      let n = e.current, { from: r, tabbable: a, wrap: i, accept: l } = t, o = r || pe(n[0]).activeElement, u = n[0].previousElementSibling, s = un(n), d = Re(s, {
        tabbable: a,
        accept: l
      }, n);
      d.currentNode = Oe(o, n) ? o : u;
      let c = d.nextNode();
      return !c && i && (d.currentNode = u, c = d.nextNode()), c && Ge(c, !0), c;
    },
    focusPrevious(t = {}) {
      let n = e.current, { from: r, tabbable: a, wrap: i, accept: l } = t, o = r || pe(n[0]).activeElement, u = n[n.length - 1].nextElementSibling, s = un(n), d = Re(s, {
        tabbable: a,
        accept: l
      }, n);
      d.currentNode = Oe(o, n) ? o : u;
      let c = d.previousNode();
      return !c && i && (d.currentNode = u, c = d.previousNode()), c && Ge(c, !0), c;
    },
    focusFirst(t = {}) {
      let n = e.current, { tabbable: r, accept: a } = t, i = un(n), l = Re(i, {
        tabbable: r,
        accept: a
      }, n);
      l.currentNode = n[0].previousElementSibling;
      let o = l.nextNode();
      return o && Ge(o, !0), o;
    },
    focusLast(t = {}) {
      let n = e.current, { tabbable: r, accept: a } = t, i = un(n), l = Re(i, {
        tabbable: r,
        accept: a
      }, n);
      l.currentNode = n[n.length - 1].nextElementSibling;
      let o = l.previousNode();
      return o && Ge(o, !0), o;
    }
  };
}
const Yl = [
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
], o$ = Yl.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Yl.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const u$ = Yl.join(':not([hidden]):not([tabindex="-1"]),');
function un(e) {
  return e[0].parentElement;
}
function lr(e) {
  let t = Se.getTreeNode(me);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain)
      return !1;
    t = t.parent;
  }
  return !0;
}
function s$(e, t) {
  let n = R(), r = R();
  de(() => {
    let a = e.current;
    if (!t) {
      r.current && (cancelAnimationFrame(r.current), r.current = void 0);
      return;
    }
    const i = pe(a ? a[0] : void 0);
    let l = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !lr(e))
        return;
      let d = i.activeElement, c = e.current;
      if (!c || !Oe(d, c))
        return;
      let p = un(c), m = Re(p, {
        tabbable: !0
      }, c);
      if (!d)
        return;
      m.currentNode = d;
      let b = s.shiftKey ? m.previousNode() : m.nextNode();
      b || (m.currentNode = s.shiftKey ? c[c.length - 1].nextElementSibling : c[0].previousElementSibling, b = s.shiftKey ? m.previousNode() : m.nextNode()), s.preventDefault(), b && Ge(b, !0);
    }, o = (s) => {
      (!me || Sa(me, e)) && Oe(s.target, e.current) ? (me = e, n.current = s.target) : lr(e) && !wa(s.target, e) ? n.current ? n.current.focus() : me && me.current && Ba(me.current) : lr(e) && (n.current = s.target);
    }, u = (s) => {
      r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
        if (i.activeElement && lr(e) && !wa(i.activeElement, e))
          if (me = e, i.body.contains(s.target)) {
            var d;
            n.current = s.target, (d = n.current) === null || d === void 0 || d.focus();
          } else
            me.current && Ba(me.current);
      });
    };
    return i.addEventListener("keydown", l, !1), i.addEventListener("focusin", o, !1), a == null || a.forEach((s) => s.addEventListener("focusin", o, !1)), a == null || a.forEach((s) => s.addEventListener("focusout", u, !1)), () => {
      i.removeEventListener("keydown", l, !1), i.removeEventListener("focusin", o, !1), a == null || a.forEach((s) => s.removeEventListener("focusin", o, !1)), a == null || a.forEach((s) => s.removeEventListener("focusout", u, !1));
    };
  }, [
    e,
    t
  ]), de(() => () => {
    r.current && cancelAnimationFrame(r.current);
  }, [
    r
  ]);
}
function Xs(e) {
  return wa(e);
}
function Oe(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
function wa(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
    return !0;
  for (let { scopeRef: n } of Se.traverse(Se.getTreeNode(t)))
    if (n && Oe(e, n.current))
      return !0;
  return !1;
}
function d$(e) {
  return wa(e, me);
}
function Sa(e, t) {
  var n;
  let r = (n = Se.getTreeNode(t)) === null || n === void 0 ? void 0 : n.parent;
  for (; r; ) {
    if (r.scopeRef === e)
      return !0;
    r = r.parent;
  }
  return !1;
}
function Ge(e, t = !1) {
  if (e != null && !t)
    try {
      ye(e);
    } catch {
    }
  else if (e != null)
    try {
      e.focus();
    } catch {
    }
}
function Ba(e, t = !0) {
  let n = e[0].previousElementSibling, r = un(e), a = Re(r, {
    tabbable: t
  }, e);
  a.currentNode = n;
  let i = a.nextNode();
  t && !i && (r = un(e), a = Re(r, {
    tabbable: !1
  }, e), a.currentNode = n, i = a.nextNode()), Ge(i);
}
function c$(e, t) {
  const n = f.useRef(t);
  Y(() => {
    if (n.current) {
      me = e;
      const r = pe(e.current ? e.current[0] : void 0);
      !Oe(r.activeElement, me.current) && e.current && Ba(e.current);
    }
    n.current = !1;
  }, [
    e
  ]);
}
function f$(e, t, n) {
  de(() => {
    if (t || n)
      return;
    let r = e.current;
    const a = pe(r ? r[0] : void 0);
    let i = (l) => {
      let o = l.target;
      Oe(o, e.current) ? me = e : Xs(o) || (me = null);
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
function m$(e) {
  let t = Se.getTreeNode(me);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore)
      return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function p$(e, t, n) {
  const r = R(typeof document < "u" ? pe(e.current ? e.current[0] : void 0).activeElement : null);
  de(() => {
    let a = e.current;
    const i = pe(a ? a[0] : void 0);
    if (!t || n)
      return;
    let l = () => {
      (!me || Sa(me, e)) && Oe(i.activeElement, e.current) && (me = e);
    };
    return i.addEventListener("focusin", l, !1), a == null || a.forEach((o) => o.addEventListener("focusin", l, !1)), () => {
      i.removeEventListener("focusin", l, !1), a == null || a.forEach((o) => o.removeEventListener("focusin", l, !1));
    };
  }, [
    e,
    n
  ]), de(() => {
    const a = pe(e.current ? e.current[0] : void 0);
    if (!t)
      return;
    let i = (l) => {
      if (l.key !== "Tab" || l.altKey || l.ctrlKey || l.metaKey || !lr(e))
        return;
      let o = a.activeElement;
      if (!Oe(o, e.current))
        return;
      let u = Se.getTreeNode(e);
      if (!u)
        return;
      let s = u.nodeToRestore, d = Re(a.body, {
        tabbable: !0
      });
      d.currentNode = o;
      let c = l.shiftKey ? d.previousNode() : d.nextNode();
      if ((!s || !a.body.contains(s) || s === a.body) && (s = void 0, u.nodeToRestore = void 0), (!c || !Oe(c, e.current)) && s) {
        d.currentNode = s;
        do
          c = l.shiftKey ? d.previousNode() : d.nextNode();
        while (Oe(c, e.current));
        l.preventDefault(), l.stopPropagation(), c ? Ge(c, !0) : Xs(s) ? Ge(s, !0) : o.blur();
      }
    };
    return n || a.addEventListener("keydown", i, !0), () => {
      n || a.removeEventListener("keydown", i, !0);
    };
  }, [
    e,
    t,
    n
  ]), de(() => {
    const a = pe(e.current ? e.current[0] : void 0);
    if (!t)
      return;
    let i = Se.getTreeNode(e);
    if (i) {
      var l;
      return i.nodeToRestore = (l = r.current) !== null && l !== void 0 ? l : void 0, () => {
        let o = Se.getTreeNode(e);
        if (!o)
          return;
        let u = o.nodeToRestore;
        if (t && u && // eslint-disable-next-line react-hooks/exhaustive-deps
        (Oe(a.activeElement, e.current) || a.activeElement === a.body && m$(e))) {
          let s = Se.clone();
          requestAnimationFrame(() => {
            if (a.activeElement === a.body) {
              let d = s.getTreeNode(e);
              for (; d; ) {
                if (d.nodeToRestore && d.nodeToRestore.isConnected) {
                  Ge(d.nodeToRestore);
                  return;
                }
                d = d.parent;
              }
              for (d = s.getTreeNode(e); d; ) {
                if (d.scopeRef && d.scopeRef.current && Se.getTreeNode(d.scopeRef)) {
                  Ba(d.scopeRef.current, !0);
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
function Re(e, t, n) {
  let r = t != null && t.tabbable ? u$ : o$, a = pe(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var l;
      return !(t == null || (l = t.from) === null || l === void 0) && l.contains(i) ? NodeFilter.FILTER_REJECT : i.matches(r) && Js(i) && (!n || Oe(i, n)) && (!(t != null && t.accept) || t.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (a.currentNode = t.from), a;
}
function Rr(e, t = {}) {
  return {
    focusNext(n = {}) {
      let r = e.current;
      if (!r)
        return null;
      let { from: a, tabbable: i = t.tabbable, wrap: l = t.wrap, accept: o = t.accept } = n, u = a || pe(r).activeElement, s = Re(r, {
        tabbable: i,
        accept: o
      });
      r.contains(u) && (s.currentNode = u);
      let d = s.nextNode();
      return !d && l && (s.currentNode = r, d = s.nextNode()), d && Ge(d, !0), d;
    },
    focusPrevious(n = t) {
      let r = e.current;
      if (!r)
        return null;
      let { from: a, tabbable: i = t.tabbable, wrap: l = t.wrap, accept: o = t.accept } = n, u = a || pe(r).activeElement, s = Re(r, {
        tabbable: i,
        accept: o
      });
      if (r.contains(u))
        s.currentNode = u;
      else {
        let c = Ai(s);
        return c && Ge(c, !0), c ?? null;
      }
      let d = s.previousNode();
      if (!d && l) {
        s.currentNode = r;
        let c = Ai(s);
        if (!c)
          return null;
        d = c;
      }
      return d && Ge(d, !0), d ?? null;
    },
    focusFirst(n = t) {
      let r = e.current;
      if (!r)
        return null;
      let { tabbable: a = t.tabbable, accept: i = t.accept } = n, o = Re(r, {
        tabbable: a,
        accept: i
      }).nextNode();
      return o && Ge(o, !0), o;
    },
    focusLast(n = t) {
      let r = e.current;
      if (!r)
        return null;
      let { tabbable: a = t.tabbable, accept: i = t.accept } = n, l = Re(r, {
        tabbable: a,
        accept: i
      }), o = Ai(l);
      return o && Ge(o, !0), o ?? null;
    }
  };
}
function Ai(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
class Jl {
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
    let i = new ol({
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
      i !== n && n.nodeToRestore && i.nodeToRestore && n.scopeRef && n.scopeRef.current && Oe(i.nodeToRestore, n.scopeRef.current) && (i.nodeToRestore = n.nodeToRestore);
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
    let n = new Jl();
    var r;
    for (let a of this.traverse())
      n.addTreeNode(a.scopeRef, (r = (t = a.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && r !== void 0 ? r : null, a.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new ol({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class ol {
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
let Se = new Jl();
function fe(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, a = R({
    isFocused: !1,
    isFocusVisible: t || pn()
  }), [i, l] = G(!1), [o, u] = G(() => a.current.isFocused && a.current.isFocusVisible), s = X(() => u(a.current.isFocused && a.current.isFocusVisible), []), d = X((m) => {
    a.current.isFocused = m, l(m), s();
  }, [
    s
  ]);
  e$((m) => {
    a.current.isFocusVisible = m, s();
  }, [], {
    isTextInput: n
  });
  let { focusProps: c } = Wa({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: p } = vt({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: i,
    isFocusVisible: o,
    focusProps: r ? p : c
  };
}
let b$ = /* @__PURE__ */ f.createContext(null);
function h$(e) {
  let t = _(b$) || {};
  Vs(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function gn(e, t) {
  let { focusProps: n } = Wa(e), { keyboardProps: r } = Za(e), a = O(n, r), i = h$(t), l = e.isDisabled ? {} : i, o = R(e.autoFocus);
  return Y(() => {
    o.current && t.current && ye(t.current), o.current = !1;
  }, [
    t
  ]), {
    focusableProps: O({
      ...a,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, l)
  };
}
function Xl(e, t) {
  let n = t == null ? void 0 : t.isDisabled, [r, a] = G(!1);
  return de(() => {
    if (e != null && e.current && !n) {
      let i = () => {
        if (e.current) {
          let o = Re(e.current, {
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
function v$(e, t) {
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
  let { focusableProps: d } = gn(e, t), { pressProps: c, isPressed: p } = Ye({
    onPress: r,
    onPressStart: a,
    onPressEnd: i,
    isDisabled: o,
    ref: t
  }), m = q(u, {
    labelable: !0,
    isLink: n === "a"
  }), b = O(d, c), h = kr();
  return {
    isPressed: p,
    linkProps: O(m, {
      ...b,
      ...s,
      "aria-disabled": o || void 0,
      "aria-current": e["aria-current"],
      onClick: (v) => {
        var y;
        (y = c.onClick) === null || y === void 0 || y.call(c, v), l && (l(v), console.warn("onClick is deprecated, please use onPress")), !h.isNative && v.currentTarget instanceof HTMLAnchorElement && v.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !v.isDefaultPrevented() && Ag(v.currentTarget, v) && (v.preventDefault(), h.open(v.currentTarget, v));
      }
    })
  };
}
const g$ = Symbol.for("react-aria.i18n.locale"), $$ = Symbol.for("react-aria.i18n.strings");
let wn;
class $n {
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
    return n || (n = y$(t, this.strings, this.defaultLocale), this.strings[t] = n), n;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u")
      return null;
    let n = window[g$];
    if (wn === void 0) {
      let a = window[$$];
      if (!a)
        return null;
      wn = {};
      for (let i in a)
        wn[i] = new $n({
          [n]: a[i]
        }, n);
    }
    let r = wn == null ? void 0 : wn[t];
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
function y$(e, t, n = "en-US") {
  if (t[e])
    return t[e];
  let r = x$(e);
  if (t[r])
    return t[r];
  for (let a in t)
    if (a.startsWith(r + "-"))
      return t[a];
  return t[n];
}
function x$(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const bu = /* @__PURE__ */ new Map(), hu = /* @__PURE__ */ new Map();
class Qs {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, n) {
    let r = this.strings.getStringForLocale(t, this.locale);
    return typeof r == "function" ? r(n, this) : r;
  }
  plural(t, n, r = "cardinal") {
    let a = n["=" + t];
    if (a)
      return typeof a == "function" ? a() : a;
    let i = this.locale + ":" + r, l = bu.get(i);
    l || (l = new Intl.PluralRules(this.locale, {
      type: r
    }), bu.set(i, l));
    let o = l.select(t);
    return a = n[o] || n.other, typeof a == "function" ? a() : a;
  }
  number(t) {
    let n = hu.get(this.locale);
    return n || (n = new Intl.NumberFormat(this.locale), hu.set(this.locale, n)), n.format(t);
  }
  select(t, n) {
    let r = t[n] || t.other;
    return typeof r == "function" ? r() : r;
  }
  constructor(t, n) {
    this.locale = t, this.strings = n;
  }
}
function Rt(e, t) {
  return e - t * Math.floor(e / t);
}
const ed = 1721426;
function sn(e, t, n, r) {
  t = Ir(e, t);
  let a = t - 1, i = -2;
  return n <= 2 ? i = 0 : qt(t) && (i = -1), ed - 1 + 365 * a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor((367 * n - 362) / 12 + i + r);
}
function qt(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Ir(e, t) {
  return e === "BC" ? 1 - t : t;
}
function qa(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const D$ = {
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
class He {
  fromJulianDay(t) {
    let n = t, r = n - ed, a = Math.floor(r / 146097), i = Rt(r, 146097), l = Math.floor(i / 36524), o = Rt(i, 36524), u = Math.floor(o / 1461), s = Rt(o, 1461), d = Math.floor(s / 365), c = a * 400 + l * 100 + u * 4 + d + (l !== 4 && d !== 4 ? 1 : 0), [p, m] = qa(c), b = n - sn(p, m, 1, 1), h = 2;
    n < sn(p, m, 3, 1) ? h = 0 : qt(m) && (h = 1);
    let v = Math.floor(((b + h) * 12 + 373) / 367), y = n - sn(p, m, v, 1) + 1;
    return new ke(p, m, v, y);
  }
  toJulianDay(t) {
    return sn(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return D$[qt(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return qt(t.year) ? 366 : 365;
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
const E$ = {
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
function Be(e, t) {
  return t = xe(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function C$(e, t) {
  return t = xe(t, e.calendar), e = bn(e), t = bn(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function ul(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function P$(e, t) {
  return Be(e, Ya(t));
}
function Ql(e, t) {
  let n = e.calendar.toJulianDay(e), r = Math.ceil(n + 1 - A$(t)) % 7;
  return r < 0 && (r += 7), r;
}
function td(e) {
  return Tt(Date.now(), e);
}
function Ya(e) {
  return je(td(e));
}
function nd(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function rd(e, t) {
  return vu(e) - vu(t);
}
function vu(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Ti = null;
function eo() {
  return Ti == null && (Ti = new Intl.DateTimeFormat().resolvedOptions().timeZone), Ti;
}
function bn(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function ka(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
function w$(e) {
  return bn(e.subtract({
    months: e.month - 1
  }));
}
function S$(e) {
  return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function B$(e) {
  return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function br(e, t) {
  let n = Ql(e, t);
  return e.subtract({
    days: n
  });
}
function k$(e, t) {
  return br(e, t).add({
    days: 6
  });
}
const gu = /* @__PURE__ */ new Map();
function F$(e) {
  if (Intl.Locale) {
    let n = gu.get(e);
    return n || (n = new Intl.Locale(e).maximize().region, n && gu.set(e, n)), n;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function A$(e) {
  let t = F$(e);
  return t && E$[t] || 0;
}
function T$(e, t) {
  let n = e.calendar.getDaysInMonth(e);
  return Math.ceil((Ql(bn(e), t) + n) / 7);
}
function to(e, t) {
  return e && t ? e.compare(t) <= 0 ? e : t : e || t;
}
function no(e, t) {
  return e && t ? e.compare(t) >= 0 ? e : t : e || t;
}
function On(e) {
  e = xe(e, new He());
  let t = Ir(e.era, e.year);
  return ad(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function ad(e, t, n, r, a, i, l) {
  let o = /* @__PURE__ */ new Date();
  return o.setUTCHours(r, a, i, l), o.setUTCFullYear(e, t - 1, n), o.getTime();
}
function sl(e, t) {
  if (t === "UTC")
    return 0;
  if (e > 0 && t === eo())
    return new Date(e).getTimezoneOffset() * -6e4;
  let { year: n, month: r, day: a, hour: i, minute: l, second: o } = id(e, t);
  return ad(n, r, a, i, l, o, 0) - Math.floor(e / 1e3) * 1e3;
}
const $u = /* @__PURE__ */ new Map();
function id(e, t) {
  let n = $u.get(t);
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
  }), $u.set(t, n));
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
const yu = 864e5;
function M$(e, t, n, r) {
  return (n === r ? [
    n
  ] : [
    n,
    r
  ]).filter((i) => R$(e, t, i));
}
function R$(e, t, n) {
  let r = id(n, t);
  return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function Ft(e, t, n = "compatible") {
  let r = ht(e);
  if (t === "UTC")
    return On(r);
  if (t === eo() && n === "compatible") {
    r = xe(r, new He());
    let u = /* @__PURE__ */ new Date(), s = Ir(r.era, r.year);
    return u.setFullYear(s, r.month - 1, r.day), u.setHours(r.hour, r.minute, r.second, r.millisecond), u.getTime();
  }
  let a = On(r), i = sl(a - yu, t), l = sl(a + yu, t), o = M$(r, t, a - i, a - l);
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
function ld(e, t, n = "compatible") {
  return new Date(Ft(e, t, n));
}
function Tt(e, t) {
  let n = sl(e, t), r = new Date(e + n), a = r.getUTCFullYear(), i = r.getUTCMonth() + 1, l = r.getUTCDate(), o = r.getUTCHours(), u = r.getUTCMinutes(), s = r.getUTCSeconds(), d = r.getUTCMilliseconds();
  return new vr(a, i, l, t, n, o, u, s, d);
}
function je(e) {
  return new ke(e.calendar, e.era, e.year, e.month, e.day);
}
function ht(e, t) {
  let n = 0, r = 0, a = 0, i = 0;
  if ("timeZone" in e)
    ({ hour: n, minute: r, second: a, millisecond: i } = e);
  else if ("hour" in e && !t)
    return e;
  return t && ({ hour: n, minute: r, second: a, millisecond: i } = t), new Fa(e.calendar, e.era, e.year, e.month, e.day, n, r, a, i);
}
function xu(e) {
  return new Nr(e.hour, e.minute, e.second, e.millisecond);
}
function xe(e, t) {
  if (e.calendar.identifier === t.identifier)
    return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
  return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, hn(r), r;
}
function od(e, t, n) {
  if (e instanceof vr)
    return e.timeZone === t ? e : N$(e, t);
  let r = Ft(e, t, n);
  return Tt(r, t);
}
function I$(e) {
  let t = On(e) - e.offset;
  return new Date(t);
}
function N$(e, t) {
  let n = On(e) - e.offset;
  return xe(Tt(n, t), e.calendar);
}
const Yn = 36e5;
function Ja(e, t) {
  let n = e.copy(), r = "hour" in n ? cd(n, t) : 0;
  dl(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, cl(n), ud(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, K$(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
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
function dl(e, t) {
  var n, r;
  !((n = (r = e.calendar).isInverseEra) === null || n === void 0) && n.call(r, e) && (t = -t), e.year += t;
}
function cl(e) {
  for (; e.month < 1; )
    dl(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, dl(e, 1);
}
function K$(e) {
  for (; e.day < 1; )
    e.month--, cl(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, cl(e);
}
function ud(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function hn(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), ud(e);
}
function ro(e) {
  let t = {};
  for (let n in e)
    typeof e[n] == "number" && (t[n] = -e[n]);
  return t;
}
function sd(e, t) {
  return Ja(e, ro(t));
}
function ao(e, t) {
  let n = e.copy();
  return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), hn(n), n;
}
function hr(e, t) {
  let n = e.copy();
  return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), dd(n), n;
}
function z$(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = ra(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = ra(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = ra(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = ra(e.hour, 24), t;
}
function dd(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function ra(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n;
}
function cd(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, z$(e);
}
function fd(e, t) {
  let n = e.copy();
  return cd(n, t), n;
}
function V$(e, t) {
  return fd(e, ro(t));
}
function io(e, t, n, r) {
  let a = e.copy();
  switch (t) {
    case "era": {
      let o = e.calendar.getEras(), u = o.indexOf(e.era);
      if (u < 0)
        throw new Error("Invalid era: " + e.era);
      u = Mt(u, n, 0, o.length - 1, r == null ? void 0 : r.round), a.era = o[u], hn(a);
      break;
    }
    case "year":
      var i, l;
      !((i = (l = a.calendar).isInverseEra) === null || i === void 0) && i.call(l, a) && (n = -n), a.year = Mt(e.year, n, -1 / 0, 9999, r == null ? void 0 : r.round), a.year === -1 / 0 && (a.year = 1), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
      break;
    case "month":
      a.month = Mt(e.month, n, 1, e.calendar.getMonthsInYear(e), r == null ? void 0 : r.round);
      break;
    case "day":
      a.day = Mt(e.day, n, 1, e.calendar.getDaysInMonth(e), r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(a), hn(a), a;
}
function lo(e, t, n, r) {
  let a = e.copy();
  switch (t) {
    case "hour": {
      let i = e.hour, l = 0, o = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let u = i >= 12;
        l = u ? 12 : 0, o = u ? 23 : 11;
      }
      a.hour = Mt(i, n, l, o, r == null ? void 0 : r.round);
      break;
    }
    case "minute":
      a.minute = Mt(e.minute, n, 0, 59, r == null ? void 0 : r.round);
      break;
    case "second":
      a.second = Mt(e.second, n, 0, 59, r == null ? void 0 : r.round);
      break;
    case "millisecond":
      a.millisecond = Mt(e.millisecond, n, 0, 999, r == null ? void 0 : r.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return a;
}
function Mt(e, t, n, r, a = !1) {
  if (a) {
    e += Math.sign(t), e < n && (e = r);
    let i = Math.abs(t);
    t > 0 ? e = Math.ceil(e / i) * i : e = Math.floor(e / i) * i, e > r && (e = n);
  } else
    e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
  return e;
}
function md(e, t) {
  let n;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let a = Ja(ht(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    n = Ft(a, e.timeZone);
  } else
    n = On(e) - e.offset;
  n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5;
  let r = Tt(n, e.timeZone);
  return xe(r, e.calendar);
}
function L$(e, t) {
  return md(e, ro(t));
}
function O$(e, t, n, r) {
  switch (t) {
    case "hour": {
      let a = 0, i = 23;
      if ((r == null ? void 0 : r.hourCycle) === 12) {
        let b = e.hour >= 12;
        a = b ? 12 : 0, i = b ? 23 : 11;
      }
      let l = ht(e), o = xe(hr(l, {
        hour: a
      }), new He()), u = [
        Ft(o, e.timeZone, "earlier"),
        Ft(o, e.timeZone, "later")
      ].filter((b) => Tt(b, e.timeZone).day === o.day)[0], s = xe(hr(l, {
        hour: i
      }), new He()), d = [
        Ft(s, e.timeZone, "earlier"),
        Ft(s, e.timeZone, "later")
      ].filter((b) => Tt(b, e.timeZone).day === s.day).pop(), c = On(e) - e.offset, p = Math.floor(c / Yn), m = c % Yn;
      return c = Mt(p, n, Math.floor(u / Yn), Math.floor(d / Yn), r == null ? void 0 : r.round) * Yn + m, xe(Tt(c, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return lo(e, t, n, r);
    case "era":
    case "year":
    case "month":
    case "day": {
      let a = io(ht(e), t, n, r), i = Ft(a, e.timeZone);
      return xe(Tt(i, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function j$(e, t, n) {
  let r = ht(e), a = hr(ao(r, t), t);
  if (a.compare(r) === 0)
    return e;
  let i = Ft(a, e.timeZone, n);
  return xe(Tt(i, e.timeZone), e.calendar);
}
function pd(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function bd(e) {
  let t = xe(e, new He());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function hd(e) {
  return `${bd(e)}T${pd(e)}`;
}
function H$(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let n = Math.floor(e / 36e5), r = e % 36e5 / 6e4;
  return `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function _$(e) {
  return `${hd(e)}${H$(e.offset)}[${e.timeZone}]`;
}
function oo(e) {
  let t = typeof e[0] == "object" ? e.shift() : new He(), n;
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
var U$ = /* @__PURE__ */ new WeakMap();
class ke {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ke(this.calendar, this.era, this.year, this.month, this.day) : new ke(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Ja(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return sd(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return ao(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return io(this, t, n, r);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return ld(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return bd(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return nd(this, t);
  }
  constructor(...t) {
    Ar(this, U$, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, i, l] = oo(t);
    this.calendar = n, this.era = r, this.year = a, this.month = i, this.day = l, hn(this);
  }
}
var W$ = /* @__PURE__ */ new WeakMap();
class Nr {
  /** Returns a copy of this time. */
  copy() {
    return new Nr(this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `Time` with the given duration added to it. */
  add(t) {
    return fd(this, t);
  }
  /** Returns a new `Time` with the given duration subtracted from it. */
  subtract(t) {
    return V$(this, t);
  }
  /** Returns a new `Time` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return hr(this, t);
  }
  /**
  * Returns a new `Time` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return lo(this, t, n, r);
  }
  /** Converts the time to an ISO 8601 formatted string. */
  toString() {
    return pd(this);
  }
  /** Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. */
  compare(t) {
    return rd(this, t);
  }
  constructor(t = 0, n = 0, r = 0, a = 0) {
    Ar(this, W$, {
      writable: !0,
      value: void 0
    }), this.hour = t, this.minute = n, this.second = r, this.millisecond = a, dd(this);
  }
}
var G$ = /* @__PURE__ */ new WeakMap();
class Fa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Fa(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Fa(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Ja(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return sd(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return ao(hr(this, t), t);
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
        return io(this, t, n, r);
      default:
        return lo(this, t, n, r);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, n) {
    return ld(this, t, n);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return hd(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let n = nd(this, t);
    return n === 0 ? rd(this, ht(t)) : n;
  }
  constructor(...t) {
    Ar(this, G$, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, i, l] = oo(t);
    this.calendar = n, this.era = r, this.year = a, this.month = i, this.day = l, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, hn(this);
  }
}
var Z$ = /* @__PURE__ */ new WeakMap();
class vr {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new vr(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new vr(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return md(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return L$(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, n) {
    return j$(this, t, n);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, r) {
    return O$(this, t, n, r);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return I$(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return _$(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - od(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Ar(this, Z$, {
      writable: !0,
      value: void 0
    });
    let [n, r, a, i, l] = oo(t), o = t.shift(), u = t.shift();
    this.calendar = n, this.era = r, this.year = a, this.month = i, this.day = l, this.timeZone = o, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, hn(this);
  }
}
const Kn = [
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
], q$ = [
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
], pa = [
  1867,
  1911,
  1925,
  1988,
  2018
], Ut = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Du(e) {
  const t = Kn.findIndex(([n, r, a]) => e.year < n || e.year === n && e.month < r || e.year === n && e.month === r && e.day < a);
  return t === -1 ? Kn.length - 1 : t === 0 ? 0 : t - 1;
}
function Mi(e) {
  let t = pa[Ut.indexOf(e.era)];
  if (!t)
    throw new Error("Unknown era: " + e.era);
  return new ke(e.year + t, e.month, e.day);
}
class Y$ extends He {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = Du(n);
    return new ke(this, Ut[r], n.year - pa[r], n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Mi(t));
  }
  balanceDate(t) {
    let n = Mi(t), r = Du(n);
    Ut[r] !== t.era && (t.era = Ut[r], t.year = n.year - pa[r]), this.constrainDate(t);
  }
  constrainDate(t) {
    let n = Ut.indexOf(t.era), r = q$[n];
    if (r != null) {
      let [a, i, l] = r, o = a - pa[n];
      t.year = Math.max(1, Math.min(o, t.year)), t.year === o && (t.month = Math.min(i, t.month), t.month === i && (t.day = Math.min(l, t.day)));
    }
    if (t.year === 1 && n >= 0) {
      let [, a, i] = Kn[n];
      t.month = Math.max(a, t.month), t.month === a && (t.day = Math.max(i, t.day));
    }
  }
  getEras() {
    return Ut;
  }
  getYearsInEra(t) {
    let n = Ut.indexOf(t.era), r = Kn[n], a = Kn[n + 1];
    if (a == null)
      return 9999 - r[0] + 1;
    let i = a[0] - r[0];
    return (t.month < a[1] || t.month === a[1] && t.day < a[2]) && i++, i;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Mi(t));
  }
  getMinimumMonthInYear(t) {
    let n = Eu(t);
    return n ? n[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let n = Eu(t);
    return n && t.month === n[1] ? n[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function Eu(e) {
  if (e.year === 1) {
    let t = Ut.indexOf(e.era);
    return Kn[t];
  }
}
const vd = -543;
class J$ extends He {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = Ir(n.era, n.year);
    return new ke(this, r - vd, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Cu(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Cu(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Cu(e) {
  let [t, n] = qa(e.year + vd);
  return new ke(t, n, e.month, e.day);
}
const Aa = 1911;
function gd(e) {
  return e.era === "minguo" ? e.year + Aa : 1 - e.year + Aa;
}
function Pu(e) {
  let t = e - Aa;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class X$ extends He {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = Ir(n.era, n.year), [a, i] = Pu(r);
    return new ke(this, a, i, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(wu(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [n, r] = Pu(gd(t));
    t.era = n, t.year = r;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(wu(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - Aa;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function wu(e) {
  let [t, n] = qa(gd(e));
  return new ke(t, n, e.month, e.day);
}
const Q$ = 1948321;
function e1(e) {
  let t = e > 0 ? e - 474 : e - 473, n = Rt(t, 2820) + 474;
  return Rt((n + 38) * 31, 128) < 31;
}
function aa(e, t, n) {
  let r = e > 0 ? e - 474 : e - 473, a = Rt(r, 2820) + 474, i = t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6;
  return Q$ - 1 + 1029983 * Math.floor(r / 2820) + 365 * (a - 1) + Math.floor((31 * a - 5) / 128) + i + n;
}
class t1 {
  fromJulianDay(t) {
    let n = t - aa(475, 1, 1), r = Math.floor(n / 1029983), a = Rt(n, 1029983), i = a === 1029982 ? 2820 : Math.floor((128 * a + 46878) / 46751), l = 474 + 2820 * r + i;
    l <= 0 && l--;
    let o = t - aa(l, 1, 1) + 1, u = o <= 186 ? Math.ceil(o / 31) : Math.ceil((o - 6) / 31), s = t - aa(l, u, 1) + 1;
    return new ke(this, l, u, s);
  }
  toJulianDay(t) {
    return aa(t.year, t.month, t.day);
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || e1(t.year) ? 30 : 29;
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
const Ri = 78, Su = 80;
class n1 extends He {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), r = n.year - Ri, a = t - sn(n.era, n.year, 1, 1), i;
    a < Su ? (r--, i = qt(n.year - 1) ? 31 : 30, a += i + 155 + 90 + 10) : (i = qt(n.year) ? 31 : 30, a -= Su);
    let l, o;
    if (a < i)
      l = 1, o = a + 1;
    else {
      let u = a - i;
      u < 155 ? (l = Math.floor(u / 31) + 2, o = u % 31 + 1) : (u -= 155, l = Math.floor(u / 30) + 7, o = u % 30 + 1);
    }
    return new ke(this, r, l, o);
  }
  toJulianDay(t) {
    let n = t.year + Ri, [r, a] = qa(n), i, l;
    return qt(a) ? (i = 31, l = sn(r, a, 3, 21)) : (i = 30, l = sn(r, a, 3, 22)), t.month === 1 ? l + t.day - 1 : (l += i + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (l += (t.month - 7) * 30), l += t.day - 1, l);
  }
  getDaysInMonth(t) {
    return t.month === 1 && qt(t.year + Ri) || t.month >= 2 && t.month <= 6 ? 31 : 30;
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
const Ta = 1948440, Bu = 1948439, rt = 1300, Sn = 1600, r1 = 460322;
function Ma(e, t, n, r) {
  return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function $d(e, t, n) {
  let r = Math.floor((30 * (n - t) + 10646) / 10631), a = Math.min(12, Math.ceil((n - (29 + Ma(t, r, 1, 1))) / 29.5) + 1), i = n - Ma(t, r, a, 1) + 1;
  return new ke(e, r, a, i);
}
function ku(e) {
  return (14 + 11 * e) % 30 < 11;
}
class uo {
  fromJulianDay(t) {
    return $d(this, Ta, t);
  }
  toJulianDay(t) {
    return Ma(Ta, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = 29 + t.month % 2;
    return t.month === 12 && ku(t.year) && n++, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return ku(t.year) ? 355 : 354;
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
class a1 extends uo {
  fromJulianDay(t) {
    return $d(this, Bu, t);
  }
  toJulianDay(t) {
    return Ma(Bu, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const i1 = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let fl, zn;
function ba(e) {
  return r1 + zn[e - rt];
}
function or(e, t) {
  let n = e - rt, r = 1 << 11 - (t - 1);
  return fl[n] & r ? 30 : 29;
}
function Fu(e, t) {
  let n = ba(e);
  for (let r = 1; r < t; r++)
    n += or(e, r);
  return n;
}
function Au(e) {
  return zn[e + 1 - rt] - zn[e - rt];
}
class l1 extends uo {
  fromJulianDay(t) {
    let n = t - Ta, r = ba(rt), a = ba(Sn);
    if (n < r || n > a)
      return super.fromJulianDay(t);
    {
      let i = rt - 1, l = 1, o = 1;
      for (; o > 0; ) {
        i++, o = n - ba(i) + 1;
        let u = Au(i);
        if (o === u) {
          l = 12;
          break;
        } else if (o < u) {
          let s = or(i, l);
          for (l = 1; o > s; )
            o -= s, l++, s = or(i, l);
          break;
        }
      }
      return new ke(this, i, l, n - Fu(i, l) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < rt || t.year > Sn ? super.toJulianDay(t) : Ta + Fu(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < rt || t.year > Sn ? super.getDaysInMonth(t) : or(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < rt || t.year > Sn ? super.getDaysInYear(t) : Au(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", fl || (fl = new Uint16Array(Uint8Array.from(atob(i1), (t) => t.charCodeAt(0)).buffer)), !zn) {
      zn = new Uint32Array(Sn - rt + 1);
      let t = 0;
      for (let n = rt; n <= Sn; n++) {
        zn[n - rt] = t;
        for (let r = 1; r <= 12; r++)
          t += or(n, r);
      }
    }
  }
}
const Tu = 347997, yd = 1080, xd = 24 * yd, o1 = 29, u1 = 12 * yd + 793, s1 = o1 * xd + u1;
function on(e) {
  return Rt(e * 7 + 1, 19) < 7;
}
function ha(e) {
  let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
  return Rt(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function d1(e) {
  let t = ha(e - 1), n = ha(e);
  return ha(e + 1) - n === 356 ? 2 : n - t === 382 ? 1 : 0;
}
function dr(e) {
  return ha(e) + d1(e);
}
function Dd(e) {
  return dr(e + 1) - dr(e);
}
function c1(e) {
  let t = Dd(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function ia(e, t) {
  if (t >= 6 && !on(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13)
    return 29;
  let n = c1(e);
  return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? on(e) ? 30 : 0 : 30;
}
class f1 {
  fromJulianDay(t) {
    let n = t - Tu, r = n * xd / s1, a = Math.floor((19 * r + 234) / 235) + 1, i = dr(a), l = Math.floor(n - i);
    for (; l < 1; )
      a--, i = dr(a), l = Math.floor(n - i);
    let o = 1, u = 0;
    for (; u < l; )
      u += ia(a, o), o++;
    o--, u -= ia(a, o);
    let s = l - u;
    return new ke(this, a, o, s);
  }
  toJulianDay(t) {
    let n = dr(t.year);
    for (let r = 1; r < t.month; r++)
      n += ia(t.year, r);
    return n + t.day + Tu;
  }
  getDaysInMonth(t) {
    return ia(t.year, t.month);
  }
  getMonthsInYear(t) {
    return on(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return Dd(t.year);
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
    n.year !== t.year && (on(n.year) && !on(t.year) && n.month > 6 ? t.month-- : !on(n.year) && on(t.year) && n.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const ml = 1723856, Mu = 1824665, pl = 5500;
function Ra(e, t, n, r) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function so(e, t) {
  let n = Math.floor(4 * (t - e) / 1461), r = 1 + Math.floor((t - Ra(e, n, 1, 1)) / 30), a = t + 1 - Ra(e, n, r, 1);
  return [
    n,
    r,
    a
  ];
}
function Ed(e) {
  return Math.floor(e % 4 / 3);
}
function Cd(e, t) {
  return t % 13 !== 0 ? 30 : Ed(e) + 5;
}
class co {
  fromJulianDay(t) {
    let [n, r, a] = so(ml, t), i = "AM";
    return n <= 0 && (i = "AA", n += pl), new ke(this, i, n, r, a);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "AA" && (n -= pl), Ra(ml, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Cd(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + Ed(t.year);
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
class m1 extends co {
  fromJulianDay(t) {
    let [n, r, a] = so(ml, t);
    return n += pl, new ke(this, "AA", n, r, a);
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
class p1 extends co {
  fromJulianDay(t) {
    let [n, r, a] = so(Mu, t), i = "CE";
    return n <= 0 && (i = "BCE", n = 1 - n), new ke(this, i, n, r, a);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), Ra(Mu, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), Cd(n, t.month);
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
function Xa(e) {
  switch (e) {
    case "buddhist":
      return new J$();
    case "ethiopic":
      return new co();
    case "ethioaa":
      return new m1();
    case "coptic":
      return new p1();
    case "hebrew":
      return new f1();
    case "indian":
      return new n1();
    case "islamic-civil":
      return new uo();
    case "islamic-tbla":
      return new a1();
    case "islamic-umalqura":
      return new l1();
    case "japanese":
      return new Y$();
    case "persian":
      return new t1();
    case "roc":
      return new X$();
    case "gregory":
    default:
      return new He();
  }
}
let Ii = /* @__PURE__ */ new Map();
class It {
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
    return v1() && (this.resolvedHourCycle || (this.resolvedHourCycle = g1(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = Pd(t, n), this.options = n;
  }
}
const b1 = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Pd(e, t = {}) {
  if (typeof t.hour12 == "boolean" && h1()) {
    t = {
      ...t
    };
    let a = b1[String(t.hour12)][e.split("-")[0]], i = t.hour12 ? "h12" : "h23";
    t.hourCycle = a ?? i, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : "");
  if (Ii.has(n))
    return Ii.get(n);
  let r = new Intl.DateTimeFormat(e, t);
  return Ii.set(n, r), r;
}
let Ni = null;
function h1() {
  return Ni == null && (Ni = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Ni;
}
let Ki = null;
function v1() {
  return Ki == null && (Ki = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Ki;
}
function g1(e, t) {
  if (!t.timeStyle && !t.hour)
    return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = Pd(e, {
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
let zi = /* @__PURE__ */ new Map(), bl = !1;
try {
  bl = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let Ia = !1;
try {
  Ia = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const wd = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class Na {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(t) {
    let n = "";
    if (!bl && this.options.signDisplay != null ? n = y1(this.numberFormatter, this.options.signDisplay, t) : n = this.numberFormatter.format(t), this.options.style === "unit" && !Ia) {
      var r;
      let { unit: a, unitDisplay: i = "short", locale: l } = this.resolvedOptions();
      if (!a)
        return n;
      let o = (r = wd[a]) === null || r === void 0 ? void 0 : r[i];
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
    return !bl && this.options.signDisplay != null && (t = {
      ...t,
      signDisplay: this.options.signDisplay
    }), !Ia && this.options.style === "unit" && (t = {
      ...t,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), t;
  }
  constructor(t, n = {}) {
    this.numberFormatter = $1(t, n), this.options = n;
  }
}
function $1(e, t = {}) {
  let { numberingSystem: n } = t;
  if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !Ia) {
    var r;
    let { unit: l, unitDisplay: o = "short" } = t;
    if (!l)
      throw new Error('unit option must be provided with style: "unit"');
    if (!(!((r = wd[l]) === null || r === void 0) && r[o]))
      throw new Error(`Unsupported unit ${l} with unitDisplay = ${o}`);
    t = {
      ...t,
      style: "decimal"
    };
  }
  let a = e + (t ? Object.entries(t).sort((l, o) => l[0] < o[0] ? -1 : 1).join() : "");
  if (zi.has(a))
    return zi.get(a);
  let i = new Intl.NumberFormat(e, t);
  return zi.set(a, i), i;
}
function y1(e, t, n) {
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
const x1 = new RegExp("^.*\\(.*\\).*$"), D1 = [
  "latn",
  "arab",
  "hanidec"
];
class fo {
  /**
  * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
  */
  parse(t) {
    return Vi(this.locale, this.options, t).parse(t);
  }
  /**
  * Returns whether the given string could potentially be a valid number. This should be used to
  * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
  * of the minus/plus sign characters can be checked.
  */
  isValidPartialNumber(t, n, r) {
    return Vi(this.locale, this.options, t).isValidPartialNumber(t, n, r);
  }
  /**
  * Returns a numbering system for which the given string is valid in the current locale.
  * If no numbering system could be detected, the default numbering system for the current
  * locale is returned.
  */
  getNumberingSystem(t) {
    return Vi(this.locale, this.options, t).options.numberingSystem;
  }
  constructor(t, n = {}) {
    this.locale = t, this.options = n;
  }
}
const Ru = /* @__PURE__ */ new Map();
function Vi(e, t, n) {
  let r = Iu(e, t);
  if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
    for (let a of D1)
      if (a !== r.options.numberingSystem) {
        let i = Iu(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + a, t);
        if (i.isValidPartialNumber(n))
          return i;
      }
  }
  return r;
}
function Iu(e, t) {
  let n = e + (t ? Object.entries(t).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : ""), r = Ru.get(n);
  return r || (r = new E1(e, t), Ru.set(n, r)), r;
}
class E1 {
  parse(t) {
    let n = this.sanitize(t);
    if (this.symbols.group && (n = la(n, this.symbols.group, "")), this.symbols.decimal && (n = n.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, "-")), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
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
      return new fo(this.locale, a).parse(new Na(this.locale, a).format(r));
    }
    return this.options.currencySign === "accounting" && x1.test(t) && (r = -1 * r), r;
  }
  sanitize(t) {
    return t = t.replace(this.symbols.literals, ""), this.symbols.minusSign && (t = t.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (t = t.replace(",", this.symbols.decimal), t = t.replace("،", this.symbols.decimal)), this.symbols.group && (t = la(t, ".", this.symbols.group))), this.options.locale === "fr-FR" && (t = la(t, ".", " ")), t;
  }
  isValidPartialNumber(t, n = -1 / 0, r = 1 / 0) {
    return t = this.sanitize(t), this.symbols.minusSign && t.startsWith(this.symbols.minusSign) && n < 0 ? t = t.slice(this.symbols.minusSign.length) : this.symbols.plusSign && t.startsWith(this.symbols.plusSign) && r > 0 && (t = t.slice(this.symbols.plusSign.length)), this.symbols.group && t.startsWith(this.symbols.group) || this.symbols.decimal && t.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && (t = la(t, this.symbols.group, "")), t = t.replace(this.symbols.numeral, ""), this.symbols.decimal && (t = t.replace(this.symbols.decimal, "")), t.length === 0);
  }
  constructor(t, n = {}) {
    this.locale = t, this.formatter = new Intl.NumberFormat(t, n), this.options = this.formatter.resolvedOptions(), this.symbols = P1(t, this.formatter, this.options, n);
    var r, a;
    this.options.style === "percent" && (((r = this.options.minimumFractionDigits) !== null && r !== void 0 ? r : 0) > 18 || ((a = this.options.maximumFractionDigits) !== null && a !== void 0 ? a : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
}
const Nu = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]), C1 = [
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
function P1(e, t, n, r) {
  var a, i, l, o;
  let u = new Intl.NumberFormat(e, {
    ...n,
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21
  }), s = u.formatToParts(-10000.111), d = u.formatToParts(10000.111), c = C1.map((F) => u.formatToParts(F));
  var p;
  let m = (p = (a = s.find((F) => F.type === "minusSign")) === null || a === void 0 ? void 0 : a.value) !== null && p !== void 0 ? p : "-", b = (i = d.find((F) => F.type === "plusSign")) === null || i === void 0 ? void 0 : i.value;
  !b && ((r == null ? void 0 : r.signDisplay) === "exceptZero" || (r == null ? void 0 : r.signDisplay) === "always") && (b = "+");
  let v = (l = new Intl.NumberFormat(e, {
    ...n,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(1e-3).find((F) => F.type === "decimal")) === null || l === void 0 ? void 0 : l.value, y = (o = s.find((F) => F.type === "group")) === null || o === void 0 ? void 0 : o.value, $ = s.filter((F) => !Nu.has(F.type)).map((F) => Ku(F.value)), x = c.flatMap((F) => F.filter((C) => !Nu.has(C.type)).map((C) => Ku(C.value))), E = [
    .../* @__PURE__ */ new Set([
      ...$,
      ...x
    ])
  ].sort((F, C) => C.length - F.length), P = E.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${E.join("|")}|[\\p{White_Space}]`, "gu"), B = [
    ...new Intl.NumberFormat(n.locale, {
      useGrouping: !1
    }).format(9876543210)
  ].reverse(), T = new Map(B.map((F, C) => [
    F,
    C
  ])), g = new RegExp(`[${B.join("")}]`, "g");
  return {
    minusSign: m,
    plusSign: b,
    decimal: v,
    group: y,
    literals: P,
    numeral: g,
    index: (F) => String(T.get(F))
  };
}
function la(e, t, n) {
  return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function Ku(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const w1 = /* @__PURE__ */ new Set([
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
]), S1 = /* @__PURE__ */ new Set([
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
function B1(e) {
  if (Intl.Locale) {
    let n = new Intl.Locale(e).maximize(), r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r)
      return r.direction === "rtl";
    if (n.script)
      return w1.has(n.script);
  }
  let t = e.split("-")[0];
  return S1.has(t);
}
const k1 = Symbol.for("react-aria.i18n.locale");
function Sd() {
  let e = typeof window < "u" && window[k1] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: B1(e) ? "rtl" : "ltr"
  };
}
let hl = Sd(), ur = /* @__PURE__ */ new Set();
function zu() {
  hl = Sd();
  for (let e of ur)
    e(hl);
}
function F1() {
  let e = Et(), [t, n] = G(hl);
  return Y(() => (ur.size === 0 && window.addEventListener("languagechange", zu), ur.add(n), () => {
    ur.delete(n), ur.size === 0 && window.removeEventListener("languagechange", zu);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const A1 = /* @__PURE__ */ f.createContext(null);
function ie() {
  let e = F1();
  return _(A1) || e;
}
const Vu = /* @__PURE__ */ new WeakMap();
function T1(e) {
  let t = Vu.get(e);
  return t || (t = new $n(e), Vu.set(e, t)), t;
}
function Bd(e, t) {
  return t && $n.getGlobalDictionaryForPackage(t) || T1(e);
}
function De(e, t) {
  let { locale: n } = ie(), r = Bd(e, t);
  return N(() => new Qs(n, r), [
    n,
    r
  ]);
}
function xt(e) {
  e = Os(e ?? {}, M1);
  let { locale: t } = ie();
  return N(() => new It(t, e), [
    t,
    e
  ]);
}
function M1(e, t) {
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
function Ka(e = {}) {
  let { locale: t } = ie();
  return N(() => new Na(t, e), [
    t,
    e
  ]);
}
let Li = /* @__PURE__ */ new Map();
function Un(e) {
  let { locale: t } = ie(), n = t + (e ? Object.entries(e).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : "");
  if (Li.has(n))
    return Li.get(n);
  let r = new Intl.Collator(t, e);
  return Li.set(n, r), r;
}
function kd(e) {
  let t = Un({
    usage: "search",
    ...e
  }), n = X((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), t.compare(i.slice(0, l.length), l) === 0), [
    t
  ]), r = X((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), t.compare(i.slice(-l.length), l) === 0), [
    t
  ]), a = X((i, l) => {
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
  return N(() => ({
    startsWith: n,
    endsWith: r,
    contains: a
  }), [
    n,
    r,
    a
  ]);
}
function Fd(e, t) {
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
    target: m,
    rel: b,
    type: h = "button"
  } = e, v;
  n === "button" ? v = {
    type: h,
    disabled: r
  } : v = {
    role: "button",
    tabIndex: r ? void 0 : 0,
    href: n === "a" && r ? void 0 : p,
    target: n === "a" ? m : void 0,
    type: n === "input" ? h : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? b : void 0
  };
  let { pressProps: y, isPressed: $ } = Ye({
    onPressStart: i,
    onPressEnd: l,
    onPressChange: u,
    onPress: a,
    onPressUp: o,
    isDisabled: r,
    preventFocusOnPress: s,
    ref: t
  }), { focusableProps: x } = gn(e, t);
  d && (x.tabIndex = r ? -1 : x.tabIndex);
  let E = O(x, y, q(e, {
    labelable: !0
  }));
  return {
    isPressed: $,
    buttonProps: O(v, E, {
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
function R1(e, t, n) {
  const { isSelected: r } = t, { isPressed: a, buttonProps: i } = Fd({
    ...e,
    onPress: bt(t.toggle, e.onPress)
  }, n);
  return {
    isPressed: a,
    buttonProps: O(i, {
      "aria-pressed": r
    })
  };
}
const Ad = 7e3;
let cr = null;
function Jt(e, t = "assertive", n = Ad) {
  cr || (cr = new N1()), cr.announce(e, t, n);
}
function I1(e) {
  cr && cr.clear(e);
}
class N1 {
  createLog(t) {
    let n = document.createElement("div");
    return n.setAttribute("role", "log"), n.setAttribute("aria-live", t), n.setAttribute("aria-relevant", "additions"), n;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(t, n = "assertive", r = Ad) {
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
function Qa(e) {
  return e && e.__esModule ? e.default : e;
}
var Kr = {}, Td = {};
Td = {
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
var Md = {};
Md = {
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
var Rd = {};
Rd = {
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
var Id = {};
Id = {
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
var Nd = {};
Nd = {
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
var Kd = {};
Kd = {
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
var zd = {};
zd = {
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
var Vd = {};
Vd = {
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
var Ld = {};
Ld = {
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
var Od = {};
Od = {
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
var jd = {};
jd = {
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
var Hd = {};
Hd = {
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
var _d = {};
_d = {
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
var Ud = {};
Ud = {
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
var Wd = {};
Wd = {
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
var Gd = {};
Gd = {
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
var Zd = {};
Zd = {
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
var qd = {};
qd = {
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
var Yd = {};
Yd = {
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
var Jd = {};
Jd = {
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
var Xd = {};
Xd = {
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
var Qd = {};
Qd = {
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
var ec = {};
ec = {
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
var tc = {};
tc = {
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
var nc = {};
nc = {
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
var rc = {};
rc = {
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
var ac = {};
ac = {
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
var ic = {};
ic = {
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
var lc = {};
lc = {
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
var oc = {};
oc = {
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
var uc = {};
uc = {
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
var sc = {};
sc = {
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
var dc = {};
dc = {
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
var cc = {};
cc = {
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
Kr = {
  "ar-AE": Td,
  "bg-BG": Md,
  "cs-CZ": Rd,
  "da-DK": Id,
  "de-DE": Nd,
  "el-GR": Kd,
  "en-US": zd,
  "es-ES": Vd,
  "et-EE": Ld,
  "fi-FI": Od,
  "fr-FR": jd,
  "he-IL": Hd,
  "hr-HR": _d,
  "hu-HU": Ud,
  "it-IT": Wd,
  "ja-JP": Gd,
  "ko-KR": Zd,
  "lt-LT": qd,
  "lv-LV": Yd,
  "nb-NO": Jd,
  "nl-NL": Xd,
  "pl-PL": Qd,
  "pt-BR": ec,
  "pt-PT": tc,
  "ro-RO": nc,
  "ru-RU": rc,
  "sk-SK": ac,
  "sl-SI": ic,
  "sr-SP": lc,
  "sv-SE": oc,
  "tr-TR": uc,
  "uk-UA": sc,
  "zh-CN": dc,
  "zh-TW": cc
};
const mo = /* @__PURE__ */ new WeakMap();
function gr(e) {
  return (e == null ? void 0 : e.calendar.identifier) === "gregory" && e.era === "BC" ? "short" : void 0;
}
function K1(e) {
  let t = De(/* @__PURE__ */ Qa(Kr), "@react-aria/calendar"), n, r;
  "highlightedRange" in e ? { start: n, end: r } = e.highlightedRange || {} : n = r = e.value;
  let a = xt({
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    era: gr(n) || gr(r),
    timeZone: e.timeZone
  }), i = "anchorDate" in e ? e.anchorDate : null;
  return N(() => {
    if (!i && n && r)
      if (Be(n, r)) {
        let l = a.format(n.toDate(e.timeZone));
        return t.format("selectedDateDescription", {
          date: l
        });
      } else {
        let l = gl(a, t, n, r, e.timeZone);
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
function vl(e, t, n, r) {
  let a = De(/* @__PURE__ */ Qa(Kr), "@react-aria/calendar"), i = gr(e) || gr(t), l = xt({
    month: "long",
    year: "numeric",
    era: i,
    calendar: e.calendar.identifier,
    timeZone: n
  }), o = xt({
    month: "long",
    year: "numeric",
    day: "numeric",
    era: i,
    calendar: e.calendar.identifier,
    timeZone: n
  });
  return N(() => {
    if (Be(e, bn(e))) {
      if (Be(t, ka(e)))
        return l.format(e.toDate(n));
      if (Be(t, ka(t)))
        return r ? gl(l, a, e, t, n) : l.formatRange(e.toDate(n), t.toDate(n));
    }
    return r ? gl(o, a, e, t, n) : o.formatRange(e.toDate(n), t.toDate(n));
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
function gl(e, t, n, r, a) {
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
function fc(e, t) {
  let n = De(/* @__PURE__ */ Qa(Kr), "@react-aria/calendar"), r = q(e), a = vl(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1), i = vl(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
  ya(() => {
    t.isFocused || Jt(i);
  }, [
    i
  ]);
  let l = K1(t);
  ya(() => {
    l && Jt(l, "polite", 4e3);
  }, [
    l
  ]);
  let o = Dt([
    !!e.errorMessage,
    e.isInvalid,
    e.validationState
  ]);
  mo.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: e["aria-labelledby"],
    errorMessageId: o,
    selectedDateDescription: l
  });
  let [u, s] = G(!1), d = e.isDisabled || t.isNextVisibleRangeInvalid();
  d && u && (s(!1), t.setFocused(!0));
  let [c, p] = G(!1), m = e.isDisabled || t.isPreviousVisibleRangeInvalid();
  m && c && (p(!1), t.setFocused(!0));
  let b = Kt({
    id: e.id,
    "aria-label": [
      e["aria-label"],
      i
    ].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: O(r, b, {
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
      isDisabled: m,
      onFocusChange: p
    },
    errorMessageProps: {
      id: o
    },
    title: a
  };
}
function z1(e, t) {
  return fc(e, t);
}
function V1(e, t, n) {
  let r = fc(e, t), a = R(!1), i = R(typeof window < "u" ? window : null);
  Zt(i, "pointerdown", (o) => {
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
  return Zt(i, "pointerup", l), Zt(i, "pointercancel", l), r.calendarProps.onBlur = (o) => {
    (!o.relatedTarget || !n.current.contains(o.relatedTarget)) && t.anchorDate && t.selectFocusedDate();
  }, Zt(n, "touchmove", (o) => {
    t.isDragging && o.preventDefault();
  }, {
    passive: !1,
    capture: !0
  }), r;
}
function L1(e, t) {
  let { startDate: n = t.visibleRange.start, endDate: r = t.visibleRange.end } = e, { direction: a } = ie(), i = (m) => {
    switch (m.key) {
      case "Enter":
      case " ":
        m.preventDefault(), t.selectFocusedDate();
        break;
      case "PageUp":
        m.preventDefault(), m.stopPropagation(), t.focusPreviousSection(m.shiftKey);
        break;
      case "PageDown":
        m.preventDefault(), m.stopPropagation(), t.focusNextSection(m.shiftKey);
        break;
      case "End":
        m.preventDefault(), m.stopPropagation(), t.focusSectionEnd();
        break;
      case "Home":
        m.preventDefault(), m.stopPropagation(), t.focusSectionStart();
        break;
      case "ArrowLeft":
        m.preventDefault(), m.stopPropagation(), a === "rtl" ? t.focusNextDay() : t.focusPreviousDay();
        break;
      case "ArrowUp":
        m.preventDefault(), m.stopPropagation(), t.focusPreviousRow();
        break;
      case "ArrowRight":
        m.preventDefault(), m.stopPropagation(), a === "rtl" ? t.focusPreviousDay() : t.focusNextDay();
        break;
      case "ArrowDown":
        m.preventDefault(), m.stopPropagation(), t.focusNextRow();
        break;
      case "Escape":
        "setAnchorDate" in t && (m.preventDefault(), t.setAnchorDate(null));
        break;
    }
  }, l = vl(n, r, t.timeZone, !0), { ariaLabel: o, ariaLabelledBy: u } = mo.get(t), s = Kt({
    "aria-label": [
      o,
      l
    ].filter(Boolean).join(", "),
    "aria-labelledby": u
  }), d = xt({
    weekday: e.weekdayStyle || "narrow",
    timeZone: t.timeZone
  }), { locale: c } = ie(), p = N(() => {
    let m = br(Ya(t.timeZone), c);
    return [
      ...new Array(7).keys()
    ].map((b) => {
      let v = m.add({
        days: b
      }).toDate(t.timeZone);
      return d.format(v);
    });
  }, [
    c,
    t.timeZone,
    d
  ]);
  return {
    gridProps: O(s, {
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
function O1(e, t, n) {
  let { date: r, isDisabled: a } = e, { errorMessageId: i, selectedDateDescription: l } = mo.get(t), o = De(/* @__PURE__ */ Qa(Kr), "@react-aria/calendar"), u = xt({
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    era: gr(r),
    timeZone: t.timeZone
  }), s = t.isSelected(r), d = t.isCellFocused(r);
  a = a || t.isCellDisabled(r);
  let c = t.isCellUnavailable(r), p = !a && !c, m = t.isValueInvalid && ("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && r.compare(t.highlightedRange.start) >= 0 && r.compare(t.highlightedRange.end) <= 0 : t.value && Be(t.value, r));
  m && (s = !0), r = Os(r, ul);
  let b = N(() => r.toDate(t.timeZone), [
    r,
    t.timeZone
  ]), h = P$(r, t.timeZone), v = N(() => {
    let C = "";
    return "highlightedRange" in t && t.value && !t.anchorDate && (Be(r, t.value.start) || Be(r, t.value.end)) && (C = l + ", "), C += u.format(b), h ? C = o.format(s ? "todayDateSelected" : "todayDate", {
      date: C
    }) : s && (C = o.format("dateSelected", {
      date: C
    })), t.minValue && Be(r, t.minValue) ? C += ", " + o.format("minimumDate") : t.maxValue && Be(r, t.maxValue) && (C += ", " + o.format("maximumDate")), C;
  }, [
    u,
    b,
    o,
    s,
    h,
    r,
    t,
    l
  ]), y = "";
  "anchorDate" in t && d && !t.isReadOnly && p && (t.anchorDate ? y = o.format("finishRangeSelectionPrompt") : y = o.format("startRangeSelectionPrompt"));
  let $ = Ct(y), x = R(!1), E = R(!1), P = R(null), { pressProps: B, isPressed: T } = Ye({
    // When dragging to select a range, we don't want dragging over the original anchor
    // again to trigger onPressStart. Cancel presses immediately when the pointer exits.
    shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
    preventFocusOnPress: !0,
    isDisabled: !p || t.isReadOnly,
    onPressStart(C) {
      if (t.isReadOnly) {
        t.setFocusedDate(r);
        return;
      }
      if ("highlightedRange" in t && !t.anchorDate && (C.pointerType === "mouse" || C.pointerType === "touch")) {
        if (t.highlightedRange && !m) {
          if (Be(r, t.highlightedRange.start)) {
            t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setDragging(!0), E.current = !0;
            return;
          } else if (Be(r, t.highlightedRange.end)) {
            t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(r), t.setDragging(!0), E.current = !0;
            return;
          }
        }
        let S = () => {
          t.setDragging(!0), P.current = null, t.selectDate(r), t.setFocusedDate(r), x.current = !0;
        };
        C.pointerType === "touch" ? P.current = setTimeout(S, 200) : S();
      }
    },
    onPressEnd() {
      E.current = !1, x.current = !1, clearTimeout(P.current), P.current = null;
    },
    onPress() {
      !("anchorDate" in t) && !t.isReadOnly && (t.selectDate(r), t.setFocusedDate(r));
    },
    onPressUp(C) {
      if (!t.isReadOnly && ("anchorDate" in t && P.current && (t.selectDate(r), t.setFocusedDate(r)), "anchorDate" in t))
        if (E.current)
          t.setAnchorDate(r);
        else if (t.anchorDate && !x.current)
          t.selectDate(r), t.setFocusedDate(r);
        else if (C.pointerType === "keyboard" && !t.anchorDate) {
          t.selectDate(r);
          let S = r.add({
            days: 1
          });
          t.isInvalid(S) && (S = r.subtract({
            days: 1
          })), t.isInvalid(S) || t.setFocusedDate(S);
        } else
          C.pointerType === "virtual" && (t.selectDate(r), t.setFocusedDate(r));
    }
  }), g = null;
  a || (g = Be(r, t.focusedDate) ? 0 : -1), Y(() => {
    d && n.current && (pt(n.current), Ca() !== "pointer" && document.activeElement === n.current && Le(n.current, {
      containingElement: Ne(n.current)
    }));
  }, [
    d,
    n
  ]);
  let M = xt({
    day: "numeric",
    timeZone: t.timeZone,
    calendar: r.calendar.identifier
  }), F = N(() => M.formatToParts(b).find((C) => C.type === "day").value, [
    M,
    b
  ]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !p || null,
      "aria-selected": s || null,
      "aria-invalid": m || null
    },
    buttonProps: O(B, {
      onFocus() {
        a || t.setFocusedDate(r);
      },
      tabIndex: g,
      role: "button",
      "aria-disabled": !p || null,
      "aria-label": v,
      "aria-invalid": m || null,
      "aria-describedby": [
        m ? i : null,
        $["aria-describedby"]
      ].filter(Boolean).join(" ") || void 0,
      onPointerEnter(C) {
        "highlightDate" in t && (C.pointerType !== "touch" || t.isDragging) && p && t.highlightDate(r);
      },
      onPointerDown(C) {
        "releasePointerCapture" in C.target && C.target.releasePointerCapture(C.pointerId);
      },
      onContextMenu(C) {
        C.preventDefault();
      }
    }),
    isPressed: T,
    isFocused: d,
    isSelected: s,
    isDisabled: a,
    isUnavailable: c,
    isOutsideVisibleRange: r.compare(t.visibleRange.start) < 0 || r.compare(t.visibleRange.end) > 0,
    isInvalid: m,
    formattedDate: F
  };
}
function zr(e, t, n) {
  let { validationBehavior: r, focus: a } = e;
  de(() => {
    if (r === "native" && (n != null && n.current)) {
      let u = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(u), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(H1(n.current));
    }
  });
  let i = ve(() => {
    t.resetValidation();
  }), l = ve((u) => {
    var s;
    t.displayValidation.isInvalid || t.commitValidation();
    let d = n == null || (s = n.current) === null || s === void 0 ? void 0 : s.form;
    if (!u.defaultPrevented && n && d && _1(d) === n.current) {
      var c;
      a ? a() : (c = n.current) === null || c === void 0 || c.focus(), Zl("keyboard");
    }
    u.preventDefault();
  }), o = ve(() => {
    t.commitValidation();
  });
  Y(() => {
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
function j1(e) {
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
function H1(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: j1(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function _1(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let n = e.elements[t];
    if (!n.validity.valid)
      return n;
  }
  return null;
}
const ei = {
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
}, mc = {
  ...ei,
  customError: !0,
  valid: !1
}, Gt = {
  isInvalid: !1,
  validationDetails: ei,
  validationErrors: []
}, pc = U({}), Xt = "__formValidationState" + Date.now();
function gt(e) {
  if (e[Xt]) {
    let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: a, commitValidation: i } = e[Xt];
    return {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: a,
      commitValidation: i
    };
  }
  return U1(e);
}
function U1(e) {
  let { isInvalid: t, validationState: n, name: r, value: a, builtinValidation: i, validate: l, validationBehavior: o = "aria" } = e;
  n && (t || (t = n === "invalid"));
  let u = t ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: mc
  } : null, s = N(() => Lu(W1(l, a)), [
    l,
    a
  ]);
  i != null && i.validationDetails.valid && (i = null);
  let d = _(pc), c = N(() => r ? Array.isArray(r) ? r.flatMap((F) => $l(d[F])) : $l(d[r]) : [], [
    d,
    r
  ]), [p, m] = G(d), [b, h] = G(!1);
  d !== p && (m(d), h(!1));
  let v = N(() => Lu(b ? [] : c), [
    b,
    c
  ]), y = R(Gt), [$, x] = G(Gt), E = R(Gt), P = () => {
    if (!B)
      return;
    T(!1);
    let F = s || i || y.current;
    Oi(F, E.current) || (E.current = F, x(F));
  }, [B, T] = G(!1);
  return Y(P), {
    realtimeValidation: u || v || s || i || Gt,
    displayValidation: o === "native" ? u || v || $ : u || v || s || i || $,
    updateValidation(F) {
      o === "aria" && !Oi($, F) ? x(F) : y.current = F;
    },
    resetValidation() {
      let F = Gt;
      Oi(F, E.current) || (E.current = F, x(F)), o === "native" && T(!1), h(!0);
    },
    commitValidation() {
      o === "native" && T(!0), h(!0);
    }
  };
}
function $l(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function W1(e, t) {
  if (typeof e == "function") {
    let n = e(t);
    if (n && typeof n != "boolean")
      return $l(n);
  }
  return [];
}
function Lu(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: mc
  } : null;
}
function Oi(e, t) {
  return e === t ? !0 : e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((n, r) => n === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([n, r]) => t.validationDetails[n] === r);
}
function $r(...e) {
  let t = /* @__PURE__ */ new Set(), n = !1, r = {
    ...ei
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
function bc(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: a = !1, value: i, name: l, children: o, "aria-label": u, "aria-labelledby": s, validationState: d = "valid", isInvalid: c } = e, p = (B) => {
    B.stopPropagation(), t.setSelected(B.target.checked);
  }, m = o != null, b = u != null || s != null;
  !m && !b && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: h, isPressed: v } = Ye({
    isDisabled: r
  }), { pressProps: y, isPressed: $ } = Ye({
    isDisabled: r || a,
    onPress() {
      t.toggle();
    }
  }), { focusableProps: x } = gn(e, n), E = O(h, x), P = q(e, {
    labelable: !0
  });
  return vn(n, t.isSelected, t.setSelected), {
    labelProps: O(y, {
      onClick: (B) => B.preventDefault()
    }),
    inputProps: O(P, {
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
      ...E
    }),
    isSelected: t.isSelected,
    isPressed: v || $,
    isDisabled: r,
    isReadOnly: a,
    isInvalid: c || d === "invalid"
  };
}
function Vr(e) {
  let { id: t, label: n, "aria-labelledby": r, "aria-label": a, labelElementType: i = "label" } = e;
  t = ce(t);
  let l = ce(), o = {};
  n ? (r = r ? `${l} ${r}` : l, o = {
    id: l,
    htmlFor: i === "label" ? t : void 0
  }) : !r && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let u = Kt({
    id: t,
    "aria-label": a,
    "aria-labelledby": r
  });
  return {
    labelProps: o,
    fieldProps: u
  };
}
function en(e) {
  let { description: t, errorMessage: n, isInvalid: r, validationState: a } = e, { labelProps: i, fieldProps: l } = Vr(e), o = Dt([
    !!t,
    !!n,
    r,
    a
  ]), u = Dt([
    !!t,
    !!n,
    r,
    a
  ]);
  return l = O(l, {
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
function ti(e = {}) {
  let { isReadOnly: t } = e, [n, r] = Ie(e.isSelected, e.defaultSelected || !1, e.onChange);
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
function hc(e, t, n) {
  let r = gt({
    ...e,
    value: t.isSelected
  }), { isInvalid: a, validationErrors: i, validationDetails: l } = r.displayValidation, { labelProps: o, inputProps: u, isSelected: s, isPressed: d, isDisabled: c, isReadOnly: p } = bc({
    ...e,
    isInvalid: a
  }, t, n);
  zr(e, r, n);
  let { isIndeterminate: m, isRequired: b, validationBehavior: h = "aria" } = e;
  return Y(() => {
    n.current && (n.current.indeterminate = !!m);
  }), {
    labelProps: o,
    inputProps: {
      ...u,
      checked: s,
      "aria-required": b && h === "aria" || void 0,
      required: b && h === "native"
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
const vc = /* @__PURE__ */ new WeakMap();
function G1(e, t) {
  let { isDisabled: n, name: r, validationBehavior: a = "aria" } = e, { isInvalid: i, validationErrors: l, validationDetails: o } = t.displayValidation, { labelProps: u, fieldProps: s, descriptionProps: d, errorMessageProps: c } = en({
    ...e,
    // Checkbox group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: i,
    errorMessage: e.errorMessage || l
  });
  vc.set(t, {
    name: r,
    descriptionId: d.id,
    errorMessageId: c.id,
    validationBehavior: a
  });
  let p = q(e, {
    labelable: !0
  }), { focusWithinProps: m } = vt({
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  });
  return {
    groupProps: O(p, {
      role: "group",
      "aria-disabled": n || void 0,
      ...s,
      ...m
    }),
    labelProps: u,
    descriptionProps: d,
    errorMessageProps: c,
    isInvalid: i,
    validationErrors: l,
    validationDetails: o
  };
}
function Z1(e, t, n) {
  const r = ti({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    onChange(v) {
      v ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(v);
    }
  });
  let { name: a, descriptionId: i, errorMessageId: l, validationBehavior: o } = vc.get(t);
  var u;
  o = (u = e.validationBehavior) !== null && u !== void 0 ? u : o;
  let { realtimeValidation: s } = gt({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), d = R(Gt), c = () => {
    t.setInvalid(e.value, s.isInvalid ? s : d.current);
  };
  Y(c);
  let p = t.realtimeValidation.isInvalid ? t.realtimeValidation : s, m = o === "native" ? t.displayValidation : p;
  var b;
  let h = hc({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || a,
    isRequired: (b = e.isRequired) !== null && b !== void 0 ? b : t.isRequired,
    validationBehavior: o,
    [Xt]: {
      realtimeValidation: p,
      displayValidation: m,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(v) {
        d.current = v, c();
      }
    }
  }, r, n);
  return {
    ...h,
    inputProps: {
      ...h.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? l : null,
        i
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const Ou = {
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
function Ot(e = {}) {
  let { style: t, isFocusable: n } = e, [r, a] = G(!1), { focusWithinProps: i } = vt({
    isDisabled: !n,
    onFocusWithinChange: (o) => a(o)
  }), l = N(() => r ? t : t ? {
    ...Ou,
    ...t
  } : Ou, [
    r
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: l
    }
  };
}
function Vt(e) {
  let { children: t, elementType: n = "div", isFocusable: r, style: a, ...i } = e, { visuallyHiddenProps: l } = Ot(e);
  return /* @__PURE__ */ f.createElement(n, O(i, l), t);
}
function q1(e) {
  return e && e.__esModule ? e.default : e;
}
const Tn = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, za = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Y1 = {
  top: "left",
  left: "top"
}, yl = {
  top: "height",
  left: "width"
}, gc = {
  width: "totalWidth",
  height: "totalHeight"
}, oa = {};
let Ue = typeof document < "u" && window.visualViewport;
function ju(e) {
  let t = 0, n = 0, r = 0, a = 0, i = 0, l = 0, o = {}, u = (Ue == null ? void 0 : Ue.scale) > 1;
  if (e.tagName === "BODY") {
    let c = document.documentElement;
    r = c.clientWidth, a = c.clientHeight;
    var s;
    t = (s = Ue == null ? void 0 : Ue.width) !== null && s !== void 0 ? s : r;
    var d;
    n = (d = Ue == null ? void 0 : Ue.height) !== null && d !== void 0 ? d : a, o.top = c.scrollTop || e.scrollTop, o.left = c.scrollLeft || e.scrollLeft, Ue && (i = Ue.offsetTop, l = Ue.offsetLeft);
  } else
    ({ width: t, height: n, top: i, left: l } = Vn(e)), o.top = e.scrollTop, o.left = e.scrollLeft, r = t, a = n;
  return _l() && (e.tagName === "BODY" || e.tagName === "HTML") && u && (o.top = 0, o.left = 0, i = Ue.pageTop, l = Ue.pageLeft), {
    width: t,
    height: n,
    totalWidth: r,
    totalHeight: a,
    scroll: o,
    top: i,
    left: l
  };
}
function J1(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function Hu(e, t, n, r, a, i, l) {
  let o = a.scroll[e], u = r[yl[e]], s = r.scroll[Tn[e]] + i, d = u + r.scroll[Tn[e]] - i, c = t - o + l[e] - r[Tn[e]], p = t - o + n + l[e] - r[Tn[e]];
  return c < s ? s - c : p > d ? Math.max(d - p, s - c) : 0;
}
function X1(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function _u(e) {
  if (oa[e])
    return oa[e];
  let [t, n] = e.split(" "), r = Tn[t] || "right", a = Y1[r];
  Tn[n] || (n = "center");
  let i = yl[r], l = yl[a];
  return oa[e] = {
    placement: t,
    crossPlacement: n,
    axis: r,
    crossAxis: a,
    size: i,
    crossSize: l
  }, oa[e];
}
function ji(e, t, n, r, a, i, l, o, u, s) {
  let { placement: d, crossPlacement: c, axis: p, crossAxis: m, size: b, crossSize: h } = r, v = {};
  v[m] = e[m], c === "center" ? v[m] += (e[h] - n[h]) / 2 : c !== m && (v[m] += e[h] - n[h]), v[m] += i;
  const y = e[m] - n[h] + u + s, $ = e[m] + e[h] - u - s;
  if (v[m] = lt(v[m], y, $), d === p) {
    const x = o ? l[b] : t[gc[b]];
    v[za[p]] = Math.floor(x - e[p] + a);
  } else
    v[p] = Math.floor(e[p] + e[b] + a);
  return v;
}
function Q1(e, t, n, r, a, i, l, o) {
  const u = r ? n.height : t[gc.height];
  let s = e.top != null ? n.top + e.top : n.top + (u - e.bottom - l), d = o !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + t.scroll.top - s - (a.top + a.bottom + i))
  ) : Math.max(0, s + l - (t.top + t.scroll.top) - (a.top + a.bottom + i));
  return Math.min(t.height - i * 2, d);
}
function Uu(e, t, n, r, a, i) {
  let { placement: l, axis: o, size: u } = i;
  return l === o ? Math.max(0, n[o] - e[o] - e.scroll[o] + t[o] - r[o] - r[za[o]] - a) : Math.max(0, e[u] + e[o] + e.scroll[o] - t[o] - n[o] - n[u] - r[o] - r[za[o]] - a);
}
function ey(e, t, n, r, a, i, l, o, u, s, d, c, p, m, b, h) {
  let v = _u(e), { size: y, crossAxis: $, crossSize: x, placement: E, crossPlacement: P } = v, B = ji(t, o, n, v, d, c, s, p, b, h), T = d, g = Uu(o, s, t, a, i + d, v);
  if (l && r[y] > g) {
    let H = _u(`${za[E]} ${P}`), V = ji(t, o, n, H, d, c, s, p, b, h);
    Uu(o, s, t, a, i + d, H) > g && (v = H, B = V, T = d);
  }
  let M = "bottom";
  v.axis === "top" ? v.placement === "top" ? M = "top" : v.placement === "bottom" && (M = "bottom") : v.crossAxis === "top" && (v.crossPlacement === "top" ? M = "bottom" : v.crossPlacement === "bottom" && (M = "top"));
  let F = Hu($, B[$], n[x], o, u, i, s);
  B[$] += F;
  let C = Q1(B, o, s, p, a, i, n.height, M);
  m && m < C && (C = m), n.height = Math.min(n.height, C), B = ji(t, o, n, v, T, c, s, p, b, h), F = Hu($, B[$], n[x], o, u, i, s), B[$] += F;
  let S = {}, w = t[$] + 0.5 * t[x] - n[$];
  const k = b / 2 + h, K = n[x] - b / 2 - h, A = t[$] - n[$] + b / 2, D = t[$] + t[x] - n[$] - b / 2, j = lt(w, A, D);
  return S[$] = lt(j, k, K), {
    position: B,
    maxHeight: C,
    arrowOffsetLeft: S.left,
    arrowOffsetTop: S.top,
    placement: v.placement
  };
}
function ty(e) {
  let { placement: t, targetNode: n, overlayNode: r, scrollNode: a, padding: i, shouldFlip: l, boundaryElement: o, offset: u, crossOffset: s, maxHeight: d, arrowSize: c = 0, arrowBoundaryOffset: p = 0 } = e, m = r instanceof HTMLElement ? ny(r) : document.documentElement, b = m === document.documentElement;
  const h = window.getComputedStyle(m).position;
  let v = !!h && h !== "static", y = b ? Vn(n) : Wu(n, m);
  if (!b) {
    let { marginTop: g, marginLeft: M } = window.getComputedStyle(n);
    y.top += parseInt(g, 10) || 0, y.left += parseInt(M, 10) || 0;
  }
  let $ = Vn(r), x = X1(r);
  $.width += x.left + x.right, $.height += x.top + x.bottom;
  let E = J1(a), P = ju(o), B = ju(m), T = o.tagName === "BODY" ? Vn(m) : Wu(m, o);
  return m.tagName === "HTML" && o.tagName === "BODY" && (B.scroll.top = 0, B.scroll.left = 0), ey(t, y, $, E, x, i, l, P, B, T, u, s, v, d, c, p);
}
function Vn(e) {
  let { top: t, left: n, width: r, height: a } = e.getBoundingClientRect(), { scrollTop: i, scrollLeft: l, clientTop: o, clientLeft: u } = document.documentElement;
  return {
    top: t + i - o,
    left: n + l - u,
    width: r,
    height: a
  };
}
function Wu(e, t) {
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
    r = Vn(e);
    let a = Vn(t), i = window.getComputedStyle(t);
    a.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, a.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, r.top -= a.top, r.left -= a.left;
  }
  return r.top -= parseInt(n.marginTop, 10) || 0, r.left -= parseInt(n.marginLeft, 10) || 0, r;
}
function ny(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Gu(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !Gu(t); )
      t = t.parentElement;
  return t || document.documentElement;
}
function Gu(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || // @ts-ignore
  "backdropFilter" in t && t.backdropFilter !== "none" || // @ts-ignore
  "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const $c = /* @__PURE__ */ new WeakMap();
function ry(e) {
  let { triggerRef: t, isOpen: n, onClose: r } = e;
  Y(() => {
    if (!n || r === null)
      return;
    let a = (i) => {
      let l = i.target;
      if (!t.current || l instanceof Node && !l.contains(t.current))
        return;
      let o = r || $c.get(t.current);
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
let we = typeof document < "u" && window.visualViewport;
function yc(e) {
  let { direction: t } = ie(), { arrowSize: n = 0, targetRef: r, overlayRef: a, scrollRef: i = a, placement: l = "bottom", containerPadding: o = 12, shouldFlip: u = !0, boundaryElement: s = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: c = 0, shouldUpdatePosition: p = !0, isOpen: m = !0, onClose: b, maxHeight: h, arrowBoundaryOffset: v = 0 } = e, [y, $] = G({
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
    m,
    t,
    h,
    v,
    n
  ], E = R(we == null ? void 0 : we.scale);
  Y(() => {
    m && (E.current = we == null ? void 0 : we.scale);
  }, [
    m
  ]);
  let P = X(() => {
    if (p === !1 || !m || !a.current || !r.current || !i.current || !s || (we == null ? void 0 : we.scale) !== E.current)
      return;
    !h && a.current && (a.current.style.maxHeight = "none");
    let g = ty({
      placement: iy(l, t),
      overlayNode: a.current,
      targetNode: r.current,
      scrollNode: i.current,
      padding: o,
      shouldFlip: u,
      boundaryElement: s,
      offset: d,
      crossOffset: c,
      maxHeight: h,
      arrowSize: n,
      arrowBoundaryOffset: v
    });
    Object.keys(g.position).forEach((M) => a.current.style[M] = g.position[M] + "px"), a.current.style.maxHeight = g.maxHeight != null ? g.maxHeight + "px" : void 0, $(g);
  }, x);
  de(P, x), ay(P), Fr({
    ref: a,
    onResize: P
  });
  let B = R(!1);
  de(() => {
    let g, M = () => {
      B.current = !0, clearTimeout(g), g = setTimeout(() => {
        B.current = !1;
      }, 500), P();
    }, F = () => {
      B.current && M();
    };
    return we == null || we.addEventListener("resize", M), we == null || we.addEventListener("scroll", F), () => {
      we == null || we.removeEventListener("resize", M), we == null || we.removeEventListener("scroll", F);
    };
  }, [
    P
  ]);
  let T = X(() => {
    B.current || b();
  }, [
    b,
    B
  ]);
  return ry({
    triggerRef: r,
    isOpen: m,
    onClose: b && T
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
function ay(e) {
  de(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function iy(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
const Bt = [];
function xc(e, t) {
  let { onClose: n, shouldCloseOnBlur: r, isOpen: a, isDismissable: i = !1, isKeyboardDismissDisabled: l = !1, shouldCloseOnInteractOutside: o } = e;
  Y(() => (a && Bt.push(t), () => {
    let b = Bt.indexOf(t);
    b >= 0 && Bt.splice(b, 1);
  }), [
    a,
    t
  ]);
  let u = () => {
    Bt[Bt.length - 1] === t && n && n();
  }, s = (b) => {
    (!o || o(b.target)) && Bt[Bt.length - 1] === t && (b.stopPropagation(), b.preventDefault());
  }, d = (b) => {
    (!o || o(b.target)) && (Bt[Bt.length - 1] === t && (b.stopPropagation(), b.preventDefault()), u());
  }, c = (b) => {
    b.key === "Escape" && !l && (b.stopPropagation(), b.preventDefault(), u());
  };
  qs({
    ref: t,
    onInteractOutside: i && a ? d : null,
    onInteractOutsideStart: s
  });
  let { focusWithinProps: p } = vt({
    isDisabled: !r,
    onBlurWithin: (b) => {
      !b.relatedTarget || d$(b.relatedTarget) || (!o || o(b.relatedTarget)) && n();
    }
  }), m = (b) => {
    b.target === b.currentTarget && b.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: c,
      ...p
    },
    underlayProps: {
      onPointerDown: m
    }
  };
}
function ly(e, t, n) {
  let { type: r } = e, { isOpen: a } = t;
  Y(() => {
    n && n.current && $c.set(n.current, t.close);
  });
  let i;
  r === "menu" ? i = !0 : r === "listbox" && (i = "listbox");
  let l = ce();
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
const Hi = typeof document < "u" && window.visualViewport, oy = /* @__PURE__ */ new Set([
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
let ua = 0, _i;
function Dc(e = {}) {
  let { isDisabled: t } = e;
  de(() => {
    if (!t)
      return ua++, ua === 1 && (Hn() ? _i = sy() : _i = uy()), () => {
        ua--, ua === 0 && _i();
      };
  }, [
    t
  ]);
}
function uy() {
  return bt(Mn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Mn(document.documentElement, "overflow", "hidden"));
}
function sy() {
  let e, t, n = (s) => {
    e = Ne(s.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = Mn(e, "overscrollBehavior", "contain"));
  }, r = (s) => {
    if (!e || e === document.documentElement || e === document.body) {
      s.preventDefault();
      return;
    }
    e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && s.preventDefault();
  }, a = (s) => {
    let d = s.target;
    qu(d) && d !== document.activeElement && (s.preventDefault(), o(), d.style.transform = "translateY(-2000px)", d.focus(), requestAnimationFrame(() => {
      d.style.transform = "";
    })), t && t();
  }, i = (s) => {
    let d = s.target;
    qu(d) && (o(), d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", Hi && (Hi.height < window.innerHeight ? requestAnimationFrame(() => {
        Zu(d);
      }) : Hi.addEventListener("resize", () => Zu(d), {
        once: !0
      }));
    }));
  }, l = null, o = () => {
    if (l)
      return;
    let s = () => {
      window.scrollTo(0, 0);
    }, d = window.pageXOffset, c = window.pageYOffset;
    l = bt(Jn(window, "scroll", s), Mn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Mn(document.documentElement, "overflow", "hidden"), Mn(document.body, "marginTop", `-${c}px`), () => {
      window.scrollTo(d, c);
    }), window.scrollTo(0, 0);
  }, u = bt(Jn(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Jn(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Jn(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), Jn(document, "focus", i, !0));
  return () => {
    t == null || t(), l == null || l(), u();
  };
}
function Mn(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Jn(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Zu(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Ne(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top;
      a > r + e.clientHeight && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function qu(e) {
  return e instanceof HTMLInputElement && !oy.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const xl = /* @__PURE__ */ f.createContext(null);
function dy(e) {
  let { children: t } = e, n = _(xl), [r, a] = G(0), i = N(() => ({
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
  return /* @__PURE__ */ f.createElement(xl.Provider, {
    value: i
  }, t);
}
function cy() {
  let e = _(xl);
  return {
    modalProviderProps: {
      "aria-hidden": e && e.modalCount > 0 ? !0 : null
    }
  };
}
function fy(e) {
  let { modalProviderProps: t } = cy();
  return /* @__PURE__ */ f.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...t
  });
}
function my(e) {
  return /* @__PURE__ */ f.createElement(dy, null, /* @__PURE__ */ f.createElement(fy, e));
}
function py(e) {
  let t = Et(), { portalContainer: n = t ? null : document.body, ...r } = e;
  if (f.useEffect(() => {
    if (n != null && n.closest("[data-overlay-container]"))
      throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
  }, [
    n
  ]), !n)
    return null;
  let a = /* @__PURE__ */ f.createElement(my, r);
  return /* @__PURE__ */ Br.createPortal(a, n);
}
var Ec = {}, Cc = {};
Cc = {
  dismiss: "تجاهل"
};
var Pc = {};
Pc = {
  dismiss: "Отхвърляне"
};
var wc = {};
wc = {
  dismiss: "Odstranit"
};
var Sc = {};
Sc = {
  dismiss: "Luk"
};
var Bc = {};
Bc = {
  dismiss: "Schließen"
};
var kc = {};
kc = {
  dismiss: "Απόρριψη"
};
var Fc = {};
Fc = {
  dismiss: "Dismiss"
};
var Ac = {};
Ac = {
  dismiss: "Descartar"
};
var Tc = {};
Tc = {
  dismiss: "Lõpeta"
};
var Mc = {};
Mc = {
  dismiss: "Hylkää"
};
var Rc = {};
Rc = {
  dismiss: "Rejeter"
};
var Ic = {};
Ic = {
  dismiss: "התעלם"
};
var Nc = {};
Nc = {
  dismiss: "Odbaci"
};
var Kc = {};
Kc = {
  dismiss: "Elutasítás"
};
var zc = {};
zc = {
  dismiss: "Ignora"
};
var Vc = {};
Vc = {
  dismiss: "閉じる"
};
var Lc = {};
Lc = {
  dismiss: "무시"
};
var Oc = {};
Oc = {
  dismiss: "Atmesti"
};
var jc = {};
jc = {
  dismiss: "Nerādīt"
};
var Hc = {};
Hc = {
  dismiss: "Lukk"
};
var _c = {};
_c = {
  dismiss: "Negeren"
};
var Uc = {};
Uc = {
  dismiss: "Zignoruj"
};
var Wc = {};
Wc = {
  dismiss: "Descartar"
};
var Gc = {};
Gc = {
  dismiss: "Dispensar"
};
var Zc = {};
Zc = {
  dismiss: "Revocare"
};
var qc = {};
qc = {
  dismiss: "Пропустить"
};
var Yc = {};
Yc = {
  dismiss: "Zrušiť"
};
var Jc = {};
Jc = {
  dismiss: "Opusti"
};
var Xc = {};
Xc = {
  dismiss: "Odbaci"
};
var Qc = {};
Qc = {
  dismiss: "Avvisa"
};
var ef = {};
ef = {
  dismiss: "Kapat"
};
var tf = {};
tf = {
  dismiss: "Скасувати"
};
var nf = {};
nf = {
  dismiss: "取消"
};
var rf = {};
rf = {
  dismiss: "關閉"
};
Ec = {
  "ar-AE": Cc,
  "bg-BG": Pc,
  "cs-CZ": wc,
  "da-DK": Sc,
  "de-DE": Bc,
  "el-GR": kc,
  "en-US": Fc,
  "es-ES": Ac,
  "et-EE": Tc,
  "fi-FI": Mc,
  "fr-FR": Rc,
  "he-IL": Ic,
  "hr-HR": Nc,
  "hu-HU": Kc,
  "it-IT": zc,
  "ja-JP": Vc,
  "ko-KR": Lc,
  "lt-LT": Oc,
  "lv-LV": jc,
  "nb-NO": Hc,
  "nl-NL": _c,
  "pl-PL": Uc,
  "pt-BR": Wc,
  "pt-PT": Gc,
  "ro-RO": Zc,
  "ru-RU": qc,
  "sk-SK": Yc,
  "sl-SI": Jc,
  "sr-SP": Xc,
  "sv-SE": Qc,
  "tr-TR": ef,
  "uk-UA": tf,
  "zh-CN": nf,
  "zh-TW": rf
};
function Dl(e) {
  let { onDismiss: t, ...n } = e, r = De(/* @__PURE__ */ q1(Ec), "@react-aria/overlays"), a = Kt(n, r.format("dismiss")), i = () => {
    t && t();
  };
  return /* @__PURE__ */ f.createElement(Vt, null, /* @__PURE__ */ f.createElement("button", {
    ...a,
    tabIndex: -1,
    onClick: i,
    style: {
      width: 1,
      height: 1
    }
  }));
}
let Xn = /* @__PURE__ */ new WeakMap(), tt = [];
function po(e, t = document.body) {
  let n = new Set(e), r = /* @__PURE__ */ new Set(), a = (u) => {
    for (let p of u.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))
      n.add(p);
    let s = (p) => {
      if (n.has(p) || r.has(p.parentElement) && p.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let m of n)
        if (p.contains(m))
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
    let d = (s = Xn.get(u)) !== null && s !== void 0 ? s : 0;
    u.getAttribute("aria-hidden") === "true" && d === 0 || (d === 0 && u.setAttribute("aria-hidden", "true"), r.add(u), Xn.set(u, d + 1));
  };
  tt.length && tt[tt.length - 1].disconnect(), a(t);
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
  return tt.push(o), () => {
    l.disconnect();
    for (let u of r) {
      let s = Xn.get(u);
      s === 1 ? (u.removeAttribute("aria-hidden"), Xn.delete(u)) : Xn.set(u, s - 1);
    }
    o === tt[tt.length - 1] ? (tt.pop(), tt.length && tt[tt.length - 1].observe()) : tt.splice(tt.indexOf(o), 1);
  };
}
function by(e, t) {
  let { triggerRef: n, popoverRef: r, isNonModal: a, isKeyboardDismissDisabled: i, shouldCloseOnInteractOutside: l, ...o } = e, { overlayProps: u, underlayProps: s } = xc({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !a,
    isKeyboardDismissDisabled: i,
    shouldCloseOnInteractOutside: l
  }, r), { overlayProps: d, arrowProps: c, placement: p } = yc({
    ...o,
    targetRef: n,
    overlayRef: r,
    isOpen: t.isOpen,
    onClose: a ? t.close : null
  });
  return Dc({
    isDisabled: a || !t.isOpen
  }), de(() => {
    if (t.isOpen && !a && r.current)
      return po([
        r.current
      ]);
  }, [
    a,
    t.isOpen,
    r
  ]), {
    popoverProps: O(u, d),
    arrowProps: c,
    underlayProps: s,
    placement: p
  };
}
const af = /* @__PURE__ */ f.createContext(null);
function lf(e) {
  let t = Et(), { portalContainer: n = t ? null : document.body, isExiting: r } = e, [a, i] = G(!1), l = N(() => ({
    contain: a,
    setContain: i
  }), [
    a,
    i
  ]);
  if (!n)
    return null;
  let o = e.children;
  return e.disableFocusManagement || (o = /* @__PURE__ */ f.createElement(Mr, {
    restoreFocus: !0,
    contain: a && !r
  }, o)), o = /* @__PURE__ */ f.createElement(af.Provider, {
    value: l
  }, /* @__PURE__ */ f.createElement(Gg, null, o)), /* @__PURE__ */ Br.createPortal(o, n);
}
function of() {
  let e = _(af), t = e == null ? void 0 : e.setContain;
  de(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function hy(e, t, n) {
  let { overlayProps: r, underlayProps: a } = xc({
    ...e,
    isOpen: t.isOpen,
    onClose: t.close
  }, n);
  return Dc({
    isDisabled: !t.isOpen
  }), of(), Y(() => {
    if (t.isOpen)
      return po([
        n.current
      ]);
  }, [
    t.isOpen,
    n
  ]), {
    modalProps: O(r),
    underlayProps: a
  };
}
function El(e) {
  return fa() ? e.altKey : e.ctrlKey;
}
function kn(e) {
  return Nt() ? e.metaKey : e.ctrlKey;
}
const vy = 1e3;
function uf(e) {
  let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e, a = R({
    search: "",
    timeout: null
  }).current, i = (l) => {
    let o = gy(l.key);
    if (!o || l.ctrlKey || l.metaKey || !l.currentTarget.contains(l.target))
      return;
    o === " " && a.search.trim().length > 0 && (l.preventDefault(), "continuePropagation" in l || l.stopPropagation()), a.search += o;
    let u = t.getKeyForSearch(a.search, n.focusedKey);
    u == null && (u = t.getKeyForSearch(a.search)), u != null && (n.setFocusedKey(u), r && r(u)), clearTimeout(a.timeout), a.timeout = setTimeout(() => {
      a.search = "";
    }, vy);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: t.getKeyForSearch ? i : null
    }
  };
}
function gy(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function ni(e) {
  let { selectionManager: t, keyboardDelegate: n, ref: r, autoFocus: a = !1, shouldFocusWrap: i = !1, disallowEmptySelection: l = !1, disallowSelectAll: o = !1, selectOnFocus: u = t.selectionBehavior === "replace", disallowTypeAhead: s = !1, shouldUseVirtualFocus: d, allowsTabNavigation: c = !1, isVirtualized: p, scrollRef: m = r, linkBehavior: b = "action" } = e, { direction: h } = ie(), v = kr(), y = (F) => {
    if (F.altKey && F.key === "Tab" && F.preventDefault(), !r.current.contains(F.target))
      return;
    const C = (V, z) => {
      if (V != null) {
        if (t.isLink(V) && b === "selection" && u && !El(F)) {
          Jv(() => {
            t.setFocusedKey(V, z);
          });
          let I = m.current.querySelector(`[data-key="${CSS.escape(V.toString())}"]`);
          v.open(I, F);
          return;
        }
        if (t.setFocusedKey(V, z), t.isLink(V) && b === "override")
          return;
        F.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(V) : u && !El(F) && t.replaceSelection(V);
      }
    };
    switch (F.key) {
      case "ArrowDown":
        if (n.getKeyBelow) {
          var S, w;
          F.preventDefault();
          let V = t.focusedKey != null ? n.getKeyBelow(t.focusedKey) : (S = n.getFirstKey) === null || S === void 0 ? void 0 : S.call(n);
          V == null && i && (V = (w = n.getFirstKey) === null || w === void 0 ? void 0 : w.call(n, t.focusedKey)), C(V);
        }
        break;
      case "ArrowUp":
        if (n.getKeyAbove) {
          var k, K;
          F.preventDefault();
          let V = t.focusedKey != null ? n.getKeyAbove(t.focusedKey) : (k = n.getLastKey) === null || k === void 0 ? void 0 : k.call(n);
          V == null && i && (V = (K = n.getLastKey) === null || K === void 0 ? void 0 : K.call(n, t.focusedKey)), C(V);
        }
        break;
      case "ArrowLeft":
        if (n.getKeyLeftOf) {
          var A, D;
          F.preventDefault();
          let V = n.getKeyLeftOf(t.focusedKey);
          V == null && i && (V = h === "rtl" ? (A = n.getFirstKey) === null || A === void 0 ? void 0 : A.call(n, t.focusedKey) : (D = n.getLastKey) === null || D === void 0 ? void 0 : D.call(n, t.focusedKey)), C(V, h === "rtl" ? "first" : "last");
        }
        break;
      case "ArrowRight":
        if (n.getKeyRightOf) {
          var j, H;
          F.preventDefault();
          let V = n.getKeyRightOf(t.focusedKey);
          V == null && i && (V = h === "rtl" ? (j = n.getLastKey) === null || j === void 0 ? void 0 : j.call(n, t.focusedKey) : (H = n.getFirstKey) === null || H === void 0 ? void 0 : H.call(n, t.focusedKey)), C(V, h === "rtl" ? "last" : "first");
        }
        break;
      case "Home":
        if (n.getFirstKey) {
          F.preventDefault();
          let V = n.getFirstKey(t.focusedKey, kn(F));
          t.setFocusedKey(V), kn(F) && F.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(V) : u && t.replaceSelection(V);
        }
        break;
      case "End":
        if (n.getLastKey) {
          F.preventDefault();
          let V = n.getLastKey(t.focusedKey, kn(F));
          t.setFocusedKey(V), kn(F) && F.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(V) : u && t.replaceSelection(V);
        }
        break;
      case "PageDown":
        if (n.getKeyPageBelow) {
          F.preventDefault();
          let V = n.getKeyPageBelow(t.focusedKey);
          C(V);
        }
        break;
      case "PageUp":
        if (n.getKeyPageAbove) {
          F.preventDefault();
          let V = n.getKeyPageAbove(t.focusedKey);
          C(V);
        }
        break;
      case "a":
        kn(F) && t.selectionMode === "multiple" && o !== !0 && (F.preventDefault(), t.selectAll());
        break;
      case "Escape":
        F.preventDefault(), l || t.clearSelection();
        break;
      case "Tab":
        if (!c) {
          if (F.shiftKey)
            r.current.focus();
          else {
            let V = Re(r.current, {
              tabbable: !0
            }), z, I;
            do
              I = V.lastChild(), I && (z = I);
            while (I);
            z && !z.contains(document.activeElement) && pt(z);
          }
          break;
        }
    }
  }, $ = R({
    top: 0,
    left: 0
  });
  Zt(m, "scroll", p ? null : () => {
    $.current = {
      top: m.current.scrollTop,
      left: m.current.scrollLeft
    };
  });
  let x = (F) => {
    if (t.isFocused) {
      F.currentTarget.contains(F.target) || t.setFocused(!1);
      return;
    }
    if (F.currentTarget.contains(F.target)) {
      if (t.setFocused(!0), t.focusedKey == null) {
        let w = (K) => {
          K != null && (t.setFocusedKey(K), u && t.replaceSelection(K));
        }, k = F.relatedTarget;
        var C, S;
        k && F.currentTarget.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_FOLLOWING ? w((C = t.lastSelectedKey) !== null && C !== void 0 ? C : n.getLastKey()) : w((S = t.firstSelectedKey) !== null && S !== void 0 ? S : n.getFirstKey());
      } else
        p || (m.current.scrollTop = $.current.top, m.current.scrollLeft = $.current.left);
      if (!p && t.focusedKey != null) {
        let w = m.current.querySelector(`[data-key="${CSS.escape(t.focusedKey.toString())}"]`);
        w && (w.contains(document.activeElement) || pt(w), Ca() === "keyboard" && Le(w, {
          containingElement: r.current
        }));
      }
    }
  }, E = (F) => {
    F.currentTarget.contains(F.relatedTarget) || t.setFocused(!1);
  };
  const P = R(a);
  Y(() => {
    if (P.current) {
      let F = null;
      a === "first" && (F = n.getFirstKey()), a === "last" && (F = n.getLastKey());
      let C = t.selectedKeys;
      if (C.size) {
        for (let S of C)
          if (t.canSelectItem(S)) {
            F = S;
            break;
          }
      }
      t.setFocused(!0), t.setFocusedKey(F), F == null && !d && ye(r.current);
    }
  }, []);
  let B = R(t.focusedKey);
  Y(() => {
    let F = Ca();
    if (t.isFocused && t.focusedKey != null && (m != null && m.current)) {
      let C = m.current.querySelector(`[data-key="${CSS.escape(t.focusedKey.toString())}"]`);
      C && (F === "keyboard" || P.current) && (p || Ls(m.current, C), F !== "virtual" && Le(C, {
        containingElement: r.current
      }));
    }
    t.isFocused && t.focusedKey == null && B.current != null && ye(r.current), B.current = t.focusedKey, P.current = !1;
  }, [
    p,
    m,
    t.focusedKey,
    t.isFocused,
    r
  ]);
  let T = {
    onKeyDown: y,
    onFocus: x,
    onBlur: E,
    onMouseDown(F) {
      m.current === F.target && F.preventDefault();
    }
  }, { typeSelectProps: g } = uf({
    keyboardDelegate: n,
    selectionManager: t
  });
  s || (T = O(g, T));
  let M;
  return d || (M = t.focusedKey == null ? 0 : -1), {
    collectionProps: {
      ...T,
      tabIndex: M
    }
  };
}
function Wn(e) {
  let { selectionManager: t, key: n, ref: r, shouldSelectOnPressUp: a, shouldUseVirtualFocus: i, focus: l, isDisabled: o, onAction: u, allowsDifferentPressOrigin: s, linkBehavior: d = "action" } = e, c = kr(), p = (D) => {
    if (D.pointerType === "keyboard" && El(D))
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
      t.selectionMode === "single" ? t.isSelected(n) && !t.disallowEmptySelection ? t.toggleSelection(n) : t.replaceSelection(n) : D && D.shiftKey ? t.extendSelection(n) : t.selectionBehavior === "toggle" || D && (kn(D) || D.pointerType === "touch" || D.pointerType === "virtual") ? t.toggleSelection(n) : t.replaceSelection(n);
    }
  };
  Y(() => {
    n === t.focusedKey && t.isFocused && !i && (l ? l() : document.activeElement !== r.current && ye(r.current));
  }, [
    r,
    n,
    t.focusedKey,
    t.childFocusStrategy,
    t.isFocused,
    i
  ]), o = o || t.isDisabled(n);
  let m = {};
  !i && !o ? m = {
    tabIndex: n === t.focusedKey ? 0 : -1,
    onFocus(D) {
      D.target === r.current && t.setFocusedKey(n);
    }
  } : o && (m.onMouseDown = (D) => {
    D.preventDefault();
  });
  let b = t.isLink(n) && d === "override", h = t.isLink(n) && d !== "selection" && d !== "none", v = !o && t.canSelectItem(n) && !b, y = (u || h) && !o, $ = y && (t.selectionBehavior === "replace" ? !v : !v || t.isEmpty), x = y && v && t.selectionBehavior === "replace", E = $ || x, P = R(null), B = E && v, T = R(!1), g = R(!1), M = (D) => {
    u && u(), h && c.open(r.current, D);
  }, F = {};
  a ? (F.onPressStart = (D) => {
    P.current = D.pointerType, T.current = B, D.pointerType === "keyboard" && (!E || Ju()) && p(D);
  }, s ? (F.onPressUp = $ ? null : (D) => {
    D.pointerType !== "keyboard" && v && p(D);
  }, F.onPress = $ ? M : null) : F.onPress = (D) => {
    if ($ || x && D.pointerType !== "mouse") {
      if (D.pointerType === "keyboard" && !Yu())
        return;
      M(D);
    } else
      D.pointerType !== "keyboard" && v && p(D);
  }) : (F.onPressStart = (D) => {
    P.current = D.pointerType, T.current = B, g.current = $, v && (D.pointerType === "mouse" && !$ || D.pointerType === "keyboard" && (!y || Ju())) && p(D);
  }, F.onPress = (D) => {
    (D.pointerType === "touch" || D.pointerType === "pen" || D.pointerType === "virtual" || D.pointerType === "keyboard" && E && Yu() || D.pointerType === "mouse" && g.current) && (E ? M(D) : v && p(D));
  }), m["data-key"] = n, F.preventFocusOnPress = i;
  let { pressProps: C, isPressed: S } = Ye(F), w = x ? (D) => {
    P.current === "mouse" && (D.stopPropagation(), D.preventDefault(), M(D));
  } : void 0, { longPressProps: k } = Ys({
    isDisabled: !B,
    onLongPress(D) {
      D.pointerType === "touch" && (p(D), t.setSelectionBehavior("toggle"));
    }
  }), K = (D) => {
    P.current === "touch" && T.current && D.preventDefault();
  }, A = t.isLink(n) ? (D) => {
    fn.isOpening || D.preventDefault();
  } : void 0;
  return {
    itemProps: O(m, v || $ ? C : {}, B ? k : {}, {
      onDoubleClick: w,
      onDragStartCapture: K,
      onClick: A
    }),
    isPressed: S,
    isSelected: t.isSelected(n),
    isFocused: t.isFocused && t.focusedKey === n,
    isDisabled: o,
    allowsSelection: v,
    hasAction: E
  };
}
function Yu() {
  let e = window.event;
  return (e == null ? void 0 : e.key) === "Enter";
}
function Ju() {
  let e = window.event;
  return (e == null ? void 0 : e.key) === " " || (e == null ? void 0 : e.code) === "Space";
}
class yn {
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
    if (!xa(n))
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
    if (!xa(n))
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
function bo(e) {
  let { selectionManager: t, collection: n, disabledKeys: r, ref: a, keyboardDelegate: i } = e, l = Un({
    usage: "search",
    sensitivity: "base"
  }), o = t.disabledBehavior, u = N(() => i || new yn(n, o === "selection" ? /* @__PURE__ */ new Set() : r, a, l), [
    i,
    n,
    r,
    a,
    l,
    o
  ]), { collectionProps: s } = ni({
    ...e,
    ref: a,
    selectionManager: t,
    keyboardDelegate: u
  });
  return {
    listProps: s
  };
}
class $y {
  build(t, n) {
    return this.context = n, Xu(() => this.iterateCollection(t));
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
      f.Children.forEach(n, (l) => {
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
    if (f.isValidElement(i)) {
      let u = i.type;
      if (typeof u != "function" && typeof u.getCollectionNode != "function") {
        let p = typeof i.type == "function" ? i.type.name : i.type;
        throw new Error(`Unknown element <${p}> in collection.`);
      }
      let s = u.getCollectionNode(i.props, this.context), d = t.index, c = s.next();
      for (; !c.done && c.value; ) {
        let p = c.value;
        t.index = d;
        let m = p.key;
        m || (m = p.element ? null : this.getKey(i, t, n, r));
        let h = [
          ...this.getFullNode({
            ...p,
            key: m,
            index: d,
            wrapper: yy(t.wrapper, p.wrapper)
          }, this.getChildState(n, p), r ? `${r}${i.key}` : i.key, a)
        ];
        for (let v of h) {
          if (v.value = p.value || t.value, v.value && this.cache.set(v.value, v), t.type && v.type !== t.type)
            throw new Error(`Unsupported type <${Ui(v.type)}> in <${Ui(a.type)}>. Only <${Ui(t.type)}> is supported.`);
          d++, yield v;
        }
        c = s.next(h);
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
      childNodes: Xu(function* () {
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
function Xu(e) {
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
function yy(e, t) {
  if (e && t)
    return (n) => e(t(n));
  if (e)
    return e;
  if (t)
    return t;
}
function Ui(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function ho(e, t, n) {
  let r = N(() => new $y(), []), { children: a, items: i, collection: l } = e;
  return N(() => {
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
function Ce(e, t) {
  return typeof t.getChildren == "function" ? t.getChildren(e.key) : e.childNodes;
}
function At(e) {
  return Wt(e, 0);
}
function Wt(e, t) {
  if (t < 0)
    return;
  let n = 0;
  for (let r of e) {
    if (n === t)
      return r;
    n++;
  }
}
function Yt(e) {
  let t;
  for (let n of e)
    t = n;
  return t;
}
function Wi(e, t, n) {
  if (t.parentKey === n.parentKey)
    return t.index - n.index;
  let r = [
    ...Qu(e, t),
    t
  ], a = [
    ...Qu(e, n),
    n
  ], i = r.slice(0, a.length).findIndex((l, o) => l !== a[o]);
  return i !== -1 ? (t = r[i], n = a[i], t.index - n.index) : r.findIndex((l) => l === n) >= 0 ? 1 : (a.findIndex((l) => l === t) >= 0, -1);
}
function Qu(e, t) {
  let n = [];
  for (; (t == null ? void 0 : t.parentKey) != null; )
    t = e.getItem(t.parentKey), n.unshift(t);
  return n;
}
const es = /* @__PURE__ */ new WeakMap();
function vo(e) {
  let t = es.get(e);
  if (t != null)
    return t;
  t = 0;
  let n = (r) => {
    for (let a of r)
      a.type === "section" ? n(Ce(a, e)) : t++;
  };
  return n(e), es.set(e, t), t;
}
const ri = /* @__PURE__ */ new WeakMap();
function xy(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function sf(e, t) {
  let n = ri.get(e);
  if (!n)
    throw new Error("Unknown list");
  return `${n.id}-option-${xy(t)}`;
}
function Dy(e, t, n) {
  let r = q(e, {
    labelable: !0
  }), a = e.selectionBehavior || "toggle", i = e.linkBehavior || (a === "replace" ? "action" : "override");
  a === "toggle" && i === "action" && (i = "override");
  let { listProps: l } = bo({
    ...e,
    ref: n,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    linkBehavior: i
  }), { focusWithinProps: o } = vt({
    onFocusWithin: e.onFocus,
    onBlurWithin: e.onBlur,
    onFocusWithinChange: e.onFocusChange
  }), u = ce(e.id);
  ri.set(t, {
    id: u,
    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
    shouldFocusOnHover: e.shouldFocusOnHover,
    isVirtualized: e.isVirtualized,
    onAction: e.onAction,
    linkBehavior: i
  });
  let { labelProps: s, fieldProps: d } = Vr({
    ...e,
    id: u,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: s,
    listBoxProps: O(r, o, t.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...O(d, l)
    })
  };
}
function Ey(e, t, n) {
  var r;
  let { key: a } = e, i = ri.get(t);
  var l;
  let o = (l = e.isDisabled) !== null && l !== void 0 ? l : t.disabledKeys.has(a);
  var u;
  let s = (u = e.isSelected) !== null && u !== void 0 ? u : t.selectionManager.isSelected(a);
  var d;
  let c = (d = e.shouldSelectOnPressUp) !== null && d !== void 0 ? d : i == null ? void 0 : i.shouldSelectOnPressUp;
  var p;
  let m = (p = e.shouldFocusOnHover) !== null && p !== void 0 ? p : i == null ? void 0 : i.shouldFocusOnHover;
  var b;
  let h = (b = e.shouldUseVirtualFocus) !== null && b !== void 0 ? b : i == null ? void 0 : i.shouldUseVirtualFocus;
  var v;
  let y = (v = e.isVirtualized) !== null && v !== void 0 ? v : i == null ? void 0 : i.isVirtualized, $ = Dt(), x = Dt(), E = {
    role: "option",
    "aria-disabled": o || void 0,
    "aria-selected": t.selectionManager.selectionMode !== "none" ? s : void 0
  };
  Nt() && _l() || (E["aria-label"] = e["aria-label"], E["aria-labelledby"] = $, E["aria-describedby"] = x);
  let P = t.collection.getItem(a);
  if (y) {
    let w = Number(P == null ? void 0 : P.index);
    E["aria-posinset"] = Number.isNaN(w) ? void 0 : w + 1, E["aria-setsize"] = vo(t.collection);
  }
  let { itemProps: B, isPressed: T, isFocused: g, hasAction: M, allowsSelection: F } = Wn({
    selectionManager: t.selectionManager,
    key: a,
    ref: n,
    shouldSelectOnPressUp: c,
    allowsDifferentPressOrigin: c && m,
    isVirtualized: y,
    shouldUseVirtualFocus: h,
    isDisabled: o,
    onAction: i != null && i.onAction ? () => {
      var w;
      return i == null || (w = i.onAction) === null || w === void 0 ? void 0 : w.call(i, a);
    } : void 0,
    linkBehavior: i == null ? void 0 : i.linkBehavior
  }), { hoverProps: C } = ge({
    isDisabled: o || !m,
    onHoverStart() {
      pn() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(a));
    }
  }), S = q(P == null ? void 0 : P.props, {
    isLink: !!(!(P == null || (r = P.props) === null || r === void 0) && r.href)
  });
  return delete S.id, {
    optionProps: {
      ...E,
      ...O(S, B, C),
      id: sf(t, a)
    },
    labelProps: {
      id: $
    },
    descriptionProps: {
      id: x
    },
    isFocused: g,
    isFocusVisible: g && pn(),
    isSelected: s,
    isDisabled: o,
    isPressed: T,
    allowsSelection: F,
    hasAction: M
  };
}
function Cy(e) {
  let { heading: t, "aria-label": n } = e, r = ce();
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
function Py(e) {
  return e && e.__esModule ? e.default : e;
}
var df = {}, cf = {};
cf = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var ff = {};
ff = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var mf = {};
mf = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var pf = {};
pf = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var bf = {};
bf = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var hf = {};
hf = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var vf = {};
vf = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var gf = {};
gf = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var $f = {};
$f = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var yf = {};
yf = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var xf = {};
xf = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var Df = {};
Df = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var Ef = {};
Ef = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var Cf = {};
Cf = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var Pf = {};
Pf = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var wf = {};
wf = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var Sf = {};
Sf = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var Bf = {};
Bf = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var kf = {};
kf = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var Ff = {};
Ff = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var Af = {};
Af = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var Tf = {};
Tf = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var Mf = {};
Mf = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var Rf = {};
Rf = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var If = {};
If = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var Nf = {};
Nf = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var Kf = {};
Kf = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var zf = {};
zf = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var Vf = {};
Vf = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var Lf = {};
Lf = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var Of = {};
Of = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var jf = {};
jf = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var Hf = {};
Hf = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var _f = {};
_f = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
df = {
  "ar-AE": cf,
  "bg-BG": ff,
  "cs-CZ": mf,
  "da-DK": pf,
  "de-DE": bf,
  "el-GR": hf,
  "en-US": vf,
  "es-ES": gf,
  "et-EE": $f,
  "fi-FI": yf,
  "fr-FR": xf,
  "he-IL": Df,
  "hr-HR": Ef,
  "hu-HU": Cf,
  "it-IT": Pf,
  "ja-JP": wf,
  "ko-KR": Sf,
  "lt-LT": Bf,
  "lv-LV": kf,
  "nb-NO": Ff,
  "nl-NL": Af,
  "pl-PL": Tf,
  "pt-BR": Mf,
  "pt-PT": Rf,
  "ro-RO": If,
  "ru-RU": Nf,
  "sk-SK": Kf,
  "sl-SI": zf,
  "sr-SP": Vf,
  "sv-SE": Lf,
  "tr-TR": Of,
  "uk-UA": jf,
  "zh-CN": Hf,
  "zh-TW": _f
};
function Uf(e, t, n) {
  let { type: r = "menu", isDisabled: a, trigger: i = "press" } = e, l = ce(), { triggerProps: o, overlayProps: u } = ly({
    type: r
  }, t, n), s = (m) => {
    if (!a && !(i === "longPress" && !m.altKey) && n && n.current)
      switch (m.key) {
        case "Enter":
        case " ":
          if (i === "longPress")
            return;
        case "ArrowDown":
          "continuePropagation" in m || m.stopPropagation(), m.preventDefault(), t.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in m || m.stopPropagation(), m.preventDefault(), t.toggle("last");
          break;
        default:
          "continuePropagation" in m && m.continuePropagation();
      }
  }, d = De(/* @__PURE__ */ Py(df), "@react-aria/menu"), { longPressProps: c } = Ys({
    isDisabled: a || i !== "longPress",
    accessibilityDescription: d.format("longPressMessage"),
    onLongPressStart() {
      t.close();
    },
    onLongPress() {
      t.open("first");
    }
  }), p = {
    onPressStart(m) {
      m.pointerType !== "touch" && m.pointerType !== "keyboard" && !a && t.toggle(m.pointerType === "virtual" ? "first" : null);
    },
    onPress(m) {
      m.pointerType === "touch" && !a && t.toggle();
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
const Wf = /* @__PURE__ */ new WeakMap();
function wy(e, t, n) {
  let { shouldFocusWrap: r = !0, onKeyDown: a, onKeyUp: i, ...l } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let o = q(e, {
    labelable: !0
  }), { listProps: u } = bo({
    ...l,
    ref: n,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    shouldFocusWrap: r,
    linkBehavior: "override"
  });
  return Wf.set(t, {
    onClose: e.onClose,
    onAction: e.onAction
  }), {
    menuProps: O(o, {
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
function Gf(e, t, n) {
  var r;
  let { key: a, closeOnSelect: i, isVirtualized: l, "aria-haspopup": o, onPressStart: u, onPressUp: s, onPress: d, onPressChange: c, onPressEnd: p, onHoverStart: m, onHoverChange: b, onHoverEnd: h, onKeyDown: v, onKeyUp: y, onFocus: $, onFocusChange: x, onBlur: E } = e, P = !!o;
  var B;
  let T = (B = e.isDisabled) !== null && B !== void 0 ? B : t.disabledKeys.has(a);
  var g;
  let M = (g = e.isSelected) !== null && g !== void 0 ? g : t.selectionManager.isSelected(a), F = Wf.get(t), C = e.onClose || F.onClose, S = P ? () => {
  } : e.onAction || F.onAction, w = kr(), k = (ne) => {
    S && S(a), ne.target instanceof HTMLAnchorElement && w.open(ne.target, ne);
  }, K = "menuitem";
  P || (t.selectionManager.selectionMode === "single" ? K = "menuitemradio" : t.selectionManager.selectionMode === "multiple" && (K = "menuitemcheckbox"));
  let A = Dt(), D = Dt(), j = Dt(), H = {
    "aria-disabled": T || void 0,
    role: K,
    "aria-label": e["aria-label"],
    "aria-labelledby": A,
    "aria-describedby": [
      D,
      j
    ].filter(Boolean).join(" ") || void 0,
    "aria-controls": e["aria-controls"],
    "aria-haspopup": o,
    "aria-expanded": e["aria-expanded"]
  };
  t.selectionManager.selectionMode !== "none" && !P && (H["aria-checked"] = M);
  let V = t.collection.getItem(a);
  l && (H["aria-posinset"] = V == null ? void 0 : V.index, H["aria-setsize"] = vo(t.collection));
  let z = (ne) => {
    ne.pointerType === "keyboard" && k(ne), u == null || u(ne);
  }, I = (ne) => {
    ne.pointerType !== "keyboard" && (k(ne), !P && C && (i ?? (t.selectionManager.selectionMode !== "multiple" || t.selectionManager.isLink(a))) && C()), s == null || s(ne);
  }, { itemProps: W, isFocused: te } = Wn({
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
  }), { pressProps: oe, isPressed: Ee } = Ye({
    onPressStart: z,
    onPress: d,
    onPressUp: I,
    onPressChange: c,
    onPressEnd: p,
    isDisabled: T
  }), { hoverProps: L } = ge({
    isDisabled: T,
    onHoverStart(ne) {
      pn() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(a)), m == null || m(ne);
    },
    onHoverChange: b,
    onHoverEnd: h
  }), { keyboardProps: J } = Za({
    onKeyDown: (ne) => {
      if (ne.repeat) {
        ne.continuePropagation();
        return;
      }
      switch (ne.key) {
        case " ":
          !T && t.selectionManager.selectionMode === "none" && !P && i !== !1 && C && C();
          break;
        case "Enter":
          !T && i !== !1 && !P && C && C();
          break;
        default:
          P || ne.continuePropagation(), v == null || v(ne);
          break;
      }
    },
    onKeyUp: y
  }), { focusProps: se } = Wa({
    onBlur: E,
    onFocus: $,
    onFocusChange: x
  }), $e = q(V.props, {
    isLink: !!(!(V == null || (r = V.props) === null || r === void 0) && r.href)
  });
  return delete $e.id, {
    menuItemProps: {
      ...H,
      ...O($e, P ? {
        onFocus: W.onFocus
      } : W, oe, L, J, se),
      tabIndex: W.tabIndex != null ? -1 : void 0
    },
    labelProps: {
      id: A
    },
    descriptionProps: {
      id: D
    },
    keyboardShortcutProps: {
      id: j
    },
    isFocused: te,
    isSelected: M,
    isPressed: Ee,
    isDisabled: T
  };
}
function Sy(e) {
  let { heading: t, "aria-label": n } = e, r = ce();
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
const sa = 2, By = 50, ky = 1e3, ts = Math.PI / 12;
function Fy(e) {
  let { menuRef: t, submenuRef: n, isOpen: r, isDisabled: a } = e, i = R(), l = R(), o = R(0), u = R(), s = R(), d = R(), c = R(2), [p, m] = G(!1);
  Fr({
    ref: n,
    onResize: () => {
      n.current && (l.current = n.current.getBoundingClientRect(), d.current = void 0);
    }
  });
  let h = () => {
    m(!1), c.current = sa;
  }, v = Tr();
  Y(() => {
    p && t.current ? t.current.style.pointerEvents = "none" : t.current.style.pointerEvents = "";
  }, [
    t,
    p
  ]), Y(() => {
    let y = n.current, $ = t.current;
    if (a || !y || !r || v !== "pointer") {
      h();
      return;
    }
    l.current = y.getBoundingClientRect();
    let x = (E) => {
      if (E.pointerType === "touch" || E.pointerType === "pen")
        return;
      let P = Date.now();
      if (P - o.current < By)
        return;
      clearTimeout(u.current), clearTimeout(s.current);
      let { clientX: B, clientY: T } = E;
      if (!i.current) {
        i.current = {
          x: B,
          y: T
        };
        return;
      }
      if (!l.current)
        return;
      if (d.current || (d.current = B > l.current.right ? "left" : "right"), B < $.getBoundingClientRect().left || B > $.getBoundingClientRect().right || T < $.getBoundingClientRect().top || T > $.getBoundingClientRect().bottom) {
        h();
        return;
      }
      let g = i.current.x, M = i.current.y, F = d.current === "right" ? l.current.left - g : g - l.current.right, C = Math.atan2(M - l.current.top, F) + ts, S = Math.atan2(M - l.current.bottom, F) - ts, w = Math.atan2(M - T, d.current === "left" ? -(B - g) : B - g), k = w < C && w > S;
      c.current = k ? Math.min(c.current + 1, sa) : Math.max(c.current - 1, 0), c.current >= sa ? m(!0) : m(!1), o.current = P, i.current = {
        x: B,
        y: T
      }, k && (u.current = setTimeout(() => {
        h(), s.current = setTimeout(() => {
          let K = document.elementFromPoint(B, T);
          K && $.contains(K) && K.dispatchEvent(new PointerEvent("pointerover", {
            bubbles: !0,
            cancelable: !0
          }));
        }, 100);
      }, ky));
    };
    return window.addEventListener("pointermove", x), () => {
      window.removeEventListener("pointermove", x), clearTimeout(u.current), clearTimeout(s.current), c.current = sa;
    };
  }, [
    a,
    r,
    t,
    v,
    m,
    n
  ]);
}
function Ay(e, t, n) {
  let { parentMenuRef: r, submenuRef: a, type: i = "menu", isDisabled: l, node: o, delay: u = 200 } = e, s = ce(), d = ce(), { direction: c } = ie(), p = R(), m = X(() => {
    p.current && (clearTimeout(p.current), p.current = void 0);
  }, [
    p
  ]), b = ve((g) => {
    m(), t.open(g);
  }), h = ve(() => {
    m(), t.close();
  });
  de(() => () => {
    m();
  }, [
    m
  ]);
  let v = (g) => {
    switch (g.key) {
      case "ArrowLeft":
        c === "ltr" && g.currentTarget.contains(g.target) && (g.stopPropagation(), h(), n.current.focus());
        break;
      case "ArrowRight":
        c === "rtl" && g.currentTarget.contains(g.target) && (g.stopPropagation(), h(), n.current.focus());
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
        l || (c === "ltr" ? (t.isOpen || b("first"), i === "menu" && (a != null && a.current) && document.activeElement === (n == null ? void 0 : n.current) && a.current.focus()) : t.isOpen ? h() : g.continuePropagation());
        break;
      case "ArrowLeft":
        l || (c === "rtl" ? (t.isOpen || b("first"), i === "menu" && (a != null && a.current) && document.activeElement === (n == null ? void 0 : n.current) && a.current.focus()) : t.isOpen ? h() : g.continuePropagation());
        break;
      case "Escape":
        t.closeAll();
        break;
      default:
        g.continuePropagation();
        break;
    }
  }, x = (g) => {
    !l && (g.pointerType === "virtual" || g.pointerType === "keyboard") && b("first");
  }, E = (g) => {
    !l && (g.pointerType === "touch" || g.pointerType === "mouse") && b();
  }, P = (g) => {
    l || (g && !t.isOpen ? p.current || (p.current = setTimeout(() => {
      b();
    }, u)) : g || m());
  }, B = (g) => {
    t.isOpen && r.current.contains(g.relatedTarget) && h();
  }, T = (g) => g !== n.current;
  return Fy({
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
      onPress: E,
      onHoverChange: P,
      onKeyDown: $,
      onBlur: B,
      isOpen: t.isOpen
    },
    submenuProps: y,
    popoverProps: {
      isNonModal: !0,
      disableFocusManagement: !0,
      shouldCloseOnInteractOutside: T
    }
  };
}
function ai(e, t) {
  let { inputElementType: n = "input", isDisabled: r = !1, isRequired: a = !1, isReadOnly: i = !1, type: l = "text", validationBehavior: o = "aria" } = e, [u, s] = Ie(e.value, e.defaultValue || "", e.onChange), { focusableProps: d } = gn(e, t), c = gt({
    ...e,
    value: u
  }), { isInvalid: p, validationErrors: m, validationDetails: b } = c.displayValidation, { labelProps: h, fieldProps: v, descriptionProps: y, errorMessageProps: $ } = en({
    ...e,
    isInvalid: p,
    errorMessage: e.errorMessage || m
  }), x = q(e, {
    labelable: !0
  });
  const E = {
    type: l,
    pattern: e.pattern
  };
  return vn(t, u, s), zr(e, c, t), Y(() => {
    if (t.current instanceof it(t.current).HTMLTextAreaElement) {
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
    labelProps: h,
    inputProps: O(x, n === "input" && E, {
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
      ...v
    }),
    descriptionProps: y,
    errorMessageProps: $,
    isInvalid: p,
    validationErrors: m,
    validationDetails: b
  };
}
function ns() {
  return typeof window < "u" && window.InputEvent && // @ts-ignore
  typeof InputEvent.prototype.getTargetRanges == "function";
}
function Ty(e, t, n) {
  let r = ve((c) => {
    let p = n.current, m;
    switch (c.inputType) {
      case "historyUndo":
      case "historyRedo":
        return;
      case "deleteContent":
      case "deleteByCut":
      case "deleteByDrag":
        m = p.value.slice(0, p.selectionStart) + p.value.slice(p.selectionEnd);
        break;
      case "deleteContentForward":
        m = p.selectionEnd === p.selectionStart ? p.value.slice(0, p.selectionStart) + p.value.slice(p.selectionEnd + 1) : p.value.slice(0, p.selectionStart) + p.value.slice(p.selectionEnd);
        break;
      case "deleteContentBackward":
        m = p.selectionEnd === p.selectionStart ? p.value.slice(0, p.selectionStart - 1) + p.value.slice(p.selectionStart) : p.value.slice(0, p.selectionStart) + p.value.slice(p.selectionEnd);
        break;
      case "deleteSoftLineBackward":
      case "deleteHardLineBackward":
        m = p.value.slice(p.selectionStart);
        break;
      default:
        c.data != null && (m = p.value.slice(0, p.selectionStart) + c.data + p.value.slice(p.selectionEnd));
        break;
    }
    (m == null || !t.validate(m)) && c.preventDefault();
  });
  Y(() => {
    if (!ns())
      return;
    let c = n.current;
    return c.addEventListener("beforeinput", r, !1), () => {
      c.removeEventListener("beforeinput", r, !1);
    };
  }, [
    n,
    r
  ]);
  let a = ns() ? null : (c) => {
    let p = c.target.value.slice(0, c.target.selectionStart) + c.data + c.target.value.slice(c.target.selectionEnd);
    t.validate(p) || c.preventDefault();
  }, { labelProps: i, inputProps: l, descriptionProps: o, errorMessageProps: u, ...s } = ai(e, n), d = R(null);
  return {
    inputProps: O(l, {
      onBeforeInput: a,
      onCompositionStart() {
        let { value: c, selectionStart: p, selectionEnd: m } = n.current;
        d.current = {
          value: c,
          selectionStart: p,
          selectionEnd: m
        };
      },
      onCompositionEnd() {
        if (!t.validate(n.current.value)) {
          let { value: c, selectionStart: p, selectionEnd: m } = d.current;
          n.current.value = c, n.current.setSelectionRange(p, m), t.setInputValue(c);
        }
      }
    }),
    labelProps: i,
    descriptionProps: o,
    errorMessageProps: u,
    ...s
  };
}
function My(e) {
  return e && e.__esModule ? e.default : e;
}
var Zf = {}, qf = {};
qf = {
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
var Yf = {};
Yf = {
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
var Jf = {};
Jf = {
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
var Xf = {};
Xf = {
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
var Qf = {};
Qf = {
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
var e4 = {};
e4 = {
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
var t4 = {};
t4 = {
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
var n4 = {};
n4 = {
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
var r4 = {};
r4 = {
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
var a4 = {};
a4 = {
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
var i4 = {};
i4 = {
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
var l4 = {};
l4 = {
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
var o4 = {};
o4 = {
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
var u4 = {};
u4 = {
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
var s4 = {};
s4 = {
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
var d4 = {};
d4 = {
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
var c4 = {};
c4 = {
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
var f4 = {};
f4 = {
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
var m4 = {};
m4 = {
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
var p4 = {};
p4 = {
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
var b4 = {};
b4 = {
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
var h4 = {};
h4 = {
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
var v4 = {};
v4 = {
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
var g4 = {};
g4 = {
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
var $4 = {};
$4 = {
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
var y4 = {};
y4 = {
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
var x4 = {};
x4 = {
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
var D4 = {};
D4 = {
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
var E4 = {};
E4 = {
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
var C4 = {};
C4 = {
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
var P4 = {};
P4 = {
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
var w4 = {};
w4 = {
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
var S4 = {};
S4 = {
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
var B4 = {};
B4 = {
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
Zf = {
  "ar-AE": qf,
  "bg-BG": Yf,
  "cs-CZ": Jf,
  "da-DK": Xf,
  "de-DE": Qf,
  "el-GR": e4,
  "en-US": t4,
  "es-ES": n4,
  "et-EE": r4,
  "fi-FI": a4,
  "fr-FR": i4,
  "he-IL": l4,
  "hr-HR": o4,
  "hu-HU": u4,
  "it-IT": s4,
  "ja-JP": d4,
  "ko-KR": c4,
  "lt-LT": f4,
  "lv-LV": m4,
  "nb-NO": p4,
  "nl-NL": b4,
  "pl-PL": h4,
  "pt-BR": v4,
  "pt-PT": g4,
  "ro-RO": $4,
  "ru-RU": y4,
  "sk-SK": x4,
  "sl-SI": D4,
  "sr-SP": E4,
  "sv-SE": C4,
  "tr-TR": P4,
  "uk-UA": w4,
  "zh-CN": S4,
  "zh-TW": B4
};
function Ry(e, t) {
  let { buttonRef: n, popoverRef: r, inputRef: a, listBoxRef: i, keyboardDelegate: l, shouldFocusWrap: o, isReadOnly: u, isDisabled: s } = e, d = De(/* @__PURE__ */ My(Zf), "@react-aria/combobox"), { menuTriggerProps: c, menuProps: p } = Uf({
    type: "listbox",
    isDisabled: s || u
  }, t, n);
  ri.set(t, {
    id: p.id
  });
  let m = N(() => l || new yn(t.collection, t.disabledKeys, i), [
    l,
    t.collection,
    t.disabledKeys,
    i
  ]), { collectionProps: b } = ni({
    selectionManager: t.selectionManager,
    keyboardDelegate: m,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: o,
    ref: a,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), h = kr(), v = (L) => {
    switch (L.key) {
      case "Enter":
      case "Tab":
        if (t.isOpen && L.key === "Enter" && L.preventDefault(), t.isOpen && t.selectionManager.focusedKey != null && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
          if (L.key === "Enter") {
            let J = i.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
            J instanceof HTMLAnchorElement && h.open(J, L);
          }
          t.close();
        } else
          t.commit();
        break;
      case "Escape":
        (t.selectedKey !== null || t.inputValue === "" || e.allowsCustomValue) && L.continuePropagation(), t.revert();
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
  }, y = (L) => {
    var J;
    L.relatedTarget === (n == null ? void 0 : n.current) || !((J = r.current) === null || J === void 0) && J.contains(L.relatedTarget) || (e.onBlur && e.onBlur(L), t.setFocused(!1));
  }, $ = (L) => {
    t.isFocused || (e.onFocus && e.onFocus(L), t.setFocused(!0));
  }, { isInvalid: x, validationErrors: E, validationDetails: P } = t.displayValidation, { labelProps: B, inputProps: T, descriptionProps: g, errorMessageProps: M } = ai({
    ...e,
    onChange: t.setInputValue,
    onKeyDown: u ? e.onKeyDown : bt(t.isOpen && b.onKeyDown, v, e.onKeyDown),
    onBlur: y,
    value: t.inputValue,
    onFocus: $,
    autoComplete: "off",
    validate: void 0,
    [Xt]: t
  }, a), F = (L) => {
    L.pointerType === "touch" && (a.current.focus(), t.toggle(null, "manual"));
  }, C = (L) => {
    L.pointerType !== "touch" && (a.current.focus(), t.toggle(L.pointerType === "keyboard" || L.pointerType === "virtual" ? "first" : null, "manual"));
  }, S = Kt({
    id: c.id,
    "aria-label": d.format("buttonLabel"),
    "aria-labelledby": e["aria-labelledby"] || B.id
  }), w = Kt({
    id: p.id,
    "aria-label": d.format("listboxLabel"),
    "aria-labelledby": e["aria-labelledby"] || B.id
  }), k = R(0), K = (L) => {
    if (s || u)
      return;
    if (L.timeStamp - k.current < 500) {
      L.preventDefault(), a.current.focus();
      return;
    }
    let J = L.target.getBoundingClientRect(), se = L.changedTouches[0], $e = Math.ceil(J.left + 0.5 * J.width), ne = Math.ceil(J.top + 0.5 * J.height);
    se.clientX === $e && se.clientY === ne && (L.preventDefault(), a.current.focus(), t.toggle(null, "manual"), k.current = L.timeStamp);
  }, A = t.selectionManager.focusedKey != null && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0;
  var D;
  let j = (D = A == null ? void 0 : A.parentKey) !== null && D !== void 0 ? D : null;
  var H;
  let V = (H = t.selectionManager.focusedKey) !== null && H !== void 0 ? H : null, z = R(j), I = R(V);
  Y(() => {
    if (fa() && A != null && V !== I.current) {
      let L = t.selectionManager.isSelected(V), J = j != null ? t.collection.getItem(j) : null, se = (J == null ? void 0 : J["aria-label"]) || (typeof (J == null ? void 0 : J.rendered) == "string" ? J.rendered : "") || "", $e = d.format("focusAnnouncement", {
        isGroupChange: J && j !== z.current,
        groupTitle: se,
        groupCount: J ? [
          ...Ce(J, t.collection)
        ].length : 0,
        optionText: A["aria-label"] || A.textValue || "",
        isSelected: L
      });
      Jt($e);
    }
    z.current = j, I.current = V;
  });
  let W = vo(t.collection), te = R(W), oe = R(t.isOpen);
  Y(() => {
    let L = t.isOpen !== oe.current && (t.selectionManager.focusedKey == null || fa());
    if (t.isOpen && (L || W !== te.current)) {
      let J = d.format("countAnnouncement", {
        optionCount: W
      });
      Jt(J);
    }
    te.current = W, oe.current = t.isOpen;
  });
  let Ee = R(t.selectedKey);
  return Y(() => {
    if (fa() && t.isFocused && t.selectedItem && t.selectedKey !== Ee.current) {
      let L = t.selectedItem["aria-label"] || t.selectedItem.textValue || "", J = d.format("selectedAnnouncement", {
        optionText: L
      });
      Jt(J);
    }
    Ee.current = t.selectedKey;
  }), Y(() => {
    if (t.isOpen)
      return po([
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
      onPressStart: C,
      isDisabled: s || u
    },
    inputProps: O(T, {
      role: "combobox",
      "aria-expanded": c["aria-expanded"],
      "aria-controls": t.isOpen ? p.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": A ? sf(t, A.key) : void 0,
      onTouchEnd: K,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: O(p, w, {
      autoFocus: t.focusStrategy,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: g,
    errorMessageProps: M,
    isInvalid: x,
    validationErrors: E,
    validationDetails: P
  };
}
function Iy(e) {
  return e && e.__esModule ? e.default : e;
}
var k4 = {}, F4 = {};
F4 = {
  Empty: "فارغ"
};
var A4 = {};
A4 = {
  Empty: "Изпразни"
};
var T4 = {};
T4 = {
  Empty: "Prázdné"
};
var M4 = {};
M4 = {
  Empty: "Tom"
};
var R4 = {};
R4 = {
  Empty: "Leer"
};
var I4 = {};
I4 = {
  Empty: "Άδειο"
};
var N4 = {};
N4 = {
  Empty: "Empty"
};
var K4 = {};
K4 = {
  Empty: "Vacío"
};
var z4 = {};
z4 = {
  Empty: "Tühjenda"
};
var V4 = {};
V4 = {
  Empty: "Tyhjä"
};
var L4 = {};
L4 = {
  Empty: "Vide"
};
var O4 = {};
O4 = {
  Empty: "ריק"
};
var j4 = {};
j4 = {
  Empty: "Prazno"
};
var H4 = {};
H4 = {
  Empty: "Üres"
};
var _4 = {};
_4 = {
  Empty: "Vuoto"
};
var U4 = {};
U4 = {
  Empty: "空"
};
var W4 = {};
W4 = {
  Empty: "비어 있음"
};
var G4 = {};
G4 = {
  Empty: "Tuščias"
};
var Z4 = {};
Z4 = {
  Empty: "Tukšs"
};
var q4 = {};
q4 = {
  Empty: "Tom"
};
var Y4 = {};
Y4 = {
  Empty: "Leeg"
};
var J4 = {};
J4 = {
  Empty: "Pusty"
};
var X4 = {};
X4 = {
  Empty: "Vazio"
};
var Q4 = {};
Q4 = {
  Empty: "Vazio"
};
var e0 = {};
e0 = {
  Empty: "Gol"
};
var t0 = {};
t0 = {
  Empty: "Не заполнено"
};
var n0 = {};
n0 = {
  Empty: "Prázdne"
};
var r0 = {};
r0 = {
  Empty: "Prazen"
};
var a0 = {};
a0 = {
  Empty: "Prazno"
};
var i0 = {};
i0 = {
  Empty: "Tomt"
};
var l0 = {};
l0 = {
  Empty: "Boş"
};
var o0 = {};
o0 = {
  Empty: "Пусто"
};
var u0 = {};
u0 = {
  Empty: "空"
};
var s0 = {};
s0 = {
  Empty: "空白"
};
k4 = {
  "ar-AE": F4,
  "bg-BG": A4,
  "cs-CZ": T4,
  "da-DK": M4,
  "de-DE": R4,
  "el-GR": I4,
  "en-US": N4,
  "es-ES": K4,
  "et-EE": z4,
  "fi-FI": V4,
  "fr-FR": L4,
  "he-IL": O4,
  "hr-HR": j4,
  "hu-HU": H4,
  "it-IT": _4,
  "ja-JP": U4,
  "ko-KR": W4,
  "lt-LT": G4,
  "lv-LV": Z4,
  "nb-NO": q4,
  "nl-NL": Y4,
  "pl-PL": J4,
  "pt-BR": X4,
  "pt-PT": Q4,
  "ro-RO": e0,
  "ru-RU": t0,
  "sk-SK": n0,
  "sl-SI": r0,
  "sr-SP": a0,
  "sv-SE": i0,
  "tr-TR": l0,
  "uk-UA": o0,
  "zh-CN": u0,
  "zh-TW": s0
};
function d0(e) {
  const t = R();
  let { value: n, textValue: r, minValue: a, maxValue: i, isDisabled: l, isReadOnly: o, isRequired: u, onIncrement: s, onIncrementPage: d, onDecrement: c, onDecrementPage: p, onDecrementToMin: m, onIncrementToMax: b } = e;
  const h = De(/* @__PURE__ */ Iy(k4), "@react-aria/spinbutton"), v = () => clearTimeout(t.current);
  Y(() => () => v(), []);
  let y = (C) => {
    if (!(C.ctrlKey || C.metaKey || C.shiftKey || C.altKey || o))
      switch (C.key) {
        case "PageUp":
          if (d) {
            C.preventDefault(), d == null || d();
            break;
          }
        case "ArrowUp":
        case "Up":
          s && (C.preventDefault(), s == null || s());
          break;
        case "PageDown":
          if (p) {
            C.preventDefault(), p == null || p();
            break;
          }
        case "ArrowDown":
        case "Down":
          c && (C.preventDefault(), c == null || c());
          break;
        case "Home":
          m && (C.preventDefault(), m == null || m());
          break;
        case "End":
          b && (C.preventDefault(), b == null || b());
          break;
      }
  }, $ = R(!1), x = () => {
    $.current = !0;
  }, E = () => {
    $.current = !1;
  }, P = r === "" ? h.format("Empty") : (r || `${n}`).replace("-", "−");
  Y(() => {
    $.current && (I1("assertive"), Jt(P, "assertive"));
  }, [
    P
  ]);
  const B = ve((C) => {
    v(), s == null || s(), t.current = window.setTimeout(() => {
      (i === void 0 || isNaN(i) || n === void 0 || isNaN(n) || n < i) && B(60);
    }, C);
  }), T = ve((C) => {
    v(), c == null || c(), t.current = window.setTimeout(() => {
      (a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n > a) && T(60);
    }, C);
  });
  let g = (C) => {
    C.preventDefault();
  }, { addGlobalListener: M, removeAllGlobalListeners: F } = _n();
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
      onBlur: E
    },
    incrementButtonProps: {
      onPressStart: () => {
        B(400), M(window, "contextmenu", g);
      },
      onPressEnd: () => {
        v(), F();
      },
      onFocus: x,
      onBlur: E
    },
    decrementButtonProps: {
      onPressStart: () => {
        T(400), M(window, "contextmenu", g);
      },
      onPressEnd: () => {
        v(), F();
      },
      onFocus: x,
      onBlur: E
    }
  };
}
function ii(e) {
  return e && e.__esModule ? e.default : e;
}
var Lr = {}, c0 = {};
c0 = {
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
var f0 = {};
f0 = {
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
var m0 = {};
m0 = {
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
var p0 = {};
p0 = {
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
var b0 = {};
b0 = {
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
var h0 = {};
h0 = {
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
var v0 = {};
v0 = {
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
var g0 = {};
g0 = {
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
var $0 = {};
$0 = {
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
var y0 = {};
y0 = {
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
var x0 = {};
x0 = {
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
var D0 = {};
D0 = {
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
var E0 = {};
E0 = {
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
var C0 = {};
C0 = {
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
var P0 = {};
P0 = {
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
var w0 = {};
w0 = {
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
var S0 = {};
S0 = {
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
var B0 = {};
B0 = {
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
var k0 = {};
k0 = {
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
var F0 = {};
F0 = {
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
var A0 = {};
A0 = {
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
var T0 = {};
T0 = {
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
var M0 = {};
M0 = {
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
var R0 = {};
R0 = {
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
var I0 = {};
I0 = {
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
var N0 = {};
N0 = {
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
var K0 = {};
K0 = {
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
var z0 = {};
z0 = {
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
var V0 = {};
V0 = {
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
var L0 = {};
L0 = {
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
var O0 = {};
O0 = {
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
var j0 = {};
j0 = {
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
var H0 = {};
H0 = {
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
var _0 = {};
_0 = {
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
Lr = {
  "ar-AE": c0,
  "bg-BG": f0,
  "cs-CZ": m0,
  "da-DK": p0,
  "de-DE": b0,
  "el-GR": h0,
  "en-US": v0,
  "es-ES": g0,
  "et-EE": $0,
  "fi-FI": y0,
  "fr-FR": x0,
  "he-IL": D0,
  "hr-HR": E0,
  "hu-HU": C0,
  "it-IT": P0,
  "ja-JP": w0,
  "ko-KR": S0,
  "lt-LT": B0,
  "lv-LV": k0,
  "nb-NO": F0,
  "nl-NL": A0,
  "pl-PL": T0,
  "pt-BR": M0,
  "pt-PT": R0,
  "ro-RO": I0,
  "ru-RU": N0,
  "sk-SK": K0,
  "sl-SI": z0,
  "sr-SP": V0,
  "sv-SE": L0,
  "tr-TR": O0,
  "uk-UA": j0,
  "zh-CN": H0,
  "zh-TW": _0
};
function go(e, t, n) {
  let { direction: r } = ie(), a = N(() => Rr(t), [
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
    let s = (u = window.event) === null || u === void 0 ? void 0 : u.target, d = Re(t.current, {
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
  }, { pressProps: o } = Ye({
    preventFocusOnPress: !0,
    allowTextSelectionOnPress: !0,
    onPressStart(u) {
      u.pointerType === "mouse" && l();
    },
    onPress(u) {
      u.pointerType !== "mouse" && l();
    }
  });
  return O(o, {
    onKeyDown: i
  });
}
const U0 = /* @__PURE__ */ new WeakMap(), fr = "__role_" + Date.now(), W0 = "__focusManager_" + Date.now();
function $o(e, t, n) {
  var r;
  let { isInvalid: a, validationErrors: i, validationDetails: l } = t.displayValidation, { labelProps: o, fieldProps: u, descriptionProps: s, errorMessageProps: d } = en({
    ...e,
    labelElementType: "span",
    isInvalid: a,
    errorMessage: e.errorMessage || i
  }), c = R(null), { focusWithinProps: p } = vt({
    ...e,
    onFocusWithin(F) {
      var C;
      c.current = t.value, (C = e.onFocus) === null || C === void 0 || C.call(e, F);
    },
    onBlurWithin: (F) => {
      var C;
      t.confirmPlaceholder(), t.value !== c.current && t.commitValidation(), (C = e.onBlur) === null || C === void 0 || C.call(e, F);
    },
    onFocusWithinChange: e.onFocusChange
  }), m = De(/* @__PURE__ */ ii(Lr), "@react-aria/datepicker"), b = t.maxGranularity === "hour" ? "selectedTimeDescription" : "selectedDateDescription", h = t.maxGranularity === "hour" ? "time" : "date", v = t.value ? m.format(b, {
    [h]: t.formatValue({
      month: "long"
    })
  }) : "", y = Ct(v), $ = e[fr] === "presentation" ? u["aria-describedby"] : [
    y["aria-describedby"],
    u["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, x = e[W0], E = N(() => x || Rr(n), [
    x,
    n
  ]), P = go(t, n, e[fr] === "presentation");
  U0.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [
      o.id,
      e["aria-labelledby"]
    ].filter(Boolean).join(" ") || void 0,
    ariaDescribedBy: $,
    focusManager: E
  });
  let B = R(e.autoFocus), T;
  e[fr] === "presentation" ? T = {
    role: "presentation"
  } : T = O(u, {
    role: "group",
    "aria-disabled": e.isDisabled || void 0,
    "aria-describedby": $
  }), Y(() => {
    B.current && E.focusFirst(), B.current = !1;
  }, [
    E
  ]), vn(e.inputRef, t.value, t.setValue), zr({
    ...e,
    focus() {
      E.focusFirst();
    }
  }, t, e.inputRef);
  let g = {
    type: "hidden",
    name: e.name,
    value: ((r = t.value) === null || r === void 0 ? void 0 : r.toString()) || ""
  };
  e.validationBehavior === "native" && (g.type = "text", g.hidden = !0, g.required = e.isRequired, g.onChange = () => {
  });
  let M = q(e);
  return {
    labelProps: {
      ...o,
      onClick: () => {
        E.focusFirst();
      }
    },
    fieldProps: O(M, T, P, p, {
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
function Ny(e, t, n) {
  var r;
  let a = $o(e, t, n);
  return a.inputProps.value = ((r = t.timeValue) === null || r === void 0 ? void 0 : r.toString()) || "", a;
}
function Ky(e, t, n) {
  let r = ce(), a = ce(), i = ce(), l = De(/* @__PURE__ */ ii(Lr), "@react-aria/datepicker"), { isInvalid: o, validationErrors: u, validationDetails: s } = t.displayValidation, { labelProps: d, fieldProps: c, descriptionProps: p, errorMessageProps: m } = en({
    ...e,
    labelElementType: "span",
    isInvalid: o,
    errorMessage: e.errorMessage || u
  }), b = go(t, n), h = c["aria-labelledby"] || c.id, { locale: v } = ie(), y = t.formatValue(v, {
    month: "long"
  }), $ = y ? l.format("selectedDateDescription", {
    date: y
  }) : "", x = Ct($), E = [
    x["aria-describedby"],
    c["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, P = q(e), B = N(() => Rr(n), [
    n
  ]), { focusWithinProps: T } = vt({
    ...e,
    isDisabled: t.isOpen,
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  });
  return {
    groupProps: O(P, b, c, x, T, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-labelledby": h,
      "aria-describedby": E,
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
      [fr]: "presentation",
      "aria-describedby": E,
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
      [Xt]: t,
      autoFocus: e.autoFocus,
      name: e.name
    },
    descriptionProps: p,
    errorMessageProps: m,
    buttonProps: {
      ...x,
      id: r,
      "aria-haspopup": "dialog",
      "aria-label": l.format("calendar"),
      "aria-labelledby": `${r} ${h}`,
      "aria-describedby": E,
      "aria-expanded": t.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => t.setOpen(!0)
    },
    dialogProps: {
      id: a,
      "aria-labelledby": `${r} ${h}`
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
function zy() {
  let { locale: e } = ie(), t = Bd(/* @__PURE__ */ ii(Lr), "@react-aria/datepicker");
  return N(() => {
    try {
      return new Intl.DisplayNames(e, {
        type: "dateTimeField"
      });
    } catch {
      return new Vy(e, t);
    }
  }, [
    e,
    t
  ]);
}
class Vy {
  of(t) {
    return this.dictionary.getStringForLocale(t, this.locale);
  }
  constructor(t, n) {
    this.locale = t, this.dictionary = n;
  }
}
function Ly(e, t, n) {
  let r = R(""), { locale: a } = ie(), i = zy(), { ariaLabel: l, ariaLabelledBy: o, ariaDescribedBy: u, focusManager: s } = U0.get(t), d = e.isPlaceholder ? "" : e.text, c = N(() => t.dateFormatter.resolvedOptions(), [
    t.dateFormatter
  ]), p = xt({
    month: "long",
    timeZone: c.timeZone
  }), m = xt({
    hour: "numeric",
    hour12: c.hour12,
    timeZone: c.timeZone
  });
  if (e.type === "month" && !e.isPlaceholder) {
    let D = p.format(t.dateValue);
    d = D !== d ? `${d} – ${D}` : D;
  } else
    e.type === "hour" && !e.isPlaceholder && (d = m.format(t.dateValue));
  let { spinButtonProps: b } = d0({
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
  }), h = N(() => new fo(a, {
    maximumFractionDigits: 0
  }), [
    a
  ]), v = () => {
    if (h.isValidPartialNumber(e.text) && !t.isReadOnly && !e.isPlaceholder) {
      let D = e.text.slice(0, -1), j = h.parse(D);
      D.length === 0 || j === 0 ? t.clearSegment(e.type) : t.setSegment(e.type, j), r.current = D;
    } else
      e.type === "dayPeriod" && t.clearSegment(e.type);
  }, y = (D) => {
    if (D.key === "a" && (Nt() ? D.metaKey : D.ctrlKey) && D.preventDefault(), !(D.ctrlKey || D.metaKey || D.shiftKey || D.altKey))
      switch (D.key) {
        case "Backspace":
        case "Delete":
          D.preventDefault(), D.stopPropagation(), v();
          break;
      }
  }, { startsWith: $ } = kd({
    sensitivity: "base"
  }), x = xt({
    hour: "numeric",
    hour12: !0
  }), E = N(() => {
    let D = /* @__PURE__ */ new Date();
    return D.setHours(0), x.formatToParts(D).find((j) => j.type === "dayPeriod").value;
  }, [
    x
  ]), P = N(() => {
    let D = /* @__PURE__ */ new Date();
    return D.setHours(12), x.formatToParts(D).find((j) => j.type === "dayPeriod").value;
  }, [
    x
  ]), B = xt({
    year: "numeric",
    era: "narrow",
    timeZone: "UTC"
  }), T = N(() => {
    if (e.type !== "era")
      return [];
    let D = xe(new ke(1, 1, 1), t.calendar), j = t.calendar.getEras().map((V) => {
      let z = D.set({
        year: 1,
        month: 1,
        day: 1,
        era: V
      }).toDate("UTC"), W = B.formatToParts(z).find((te) => te.type === "era").value;
      return {
        era: V,
        formatted: W
      };
    }), H = Oy(j.map((V) => V.formatted));
    if (H)
      for (let V of j)
        V.formatted = V.formatted.slice(H);
    return j;
  }, [
    B,
    t.calendar,
    e.type
  ]), g = (D) => {
    if (t.isDisabled || t.isReadOnly)
      return;
    let j = r.current + D;
    switch (e.type) {
      case "dayPeriod":
        if ($(E, D))
          t.setSegment("dayPeriod", 0);
        else if ($(P, D))
          t.setSegment("dayPeriod", 12);
        else
          break;
        s.focusNext();
        break;
      case "era": {
        let H = T.find((V) => $(V.formatted, D));
        H && (t.setSegment("era", H.era), s.focusNext());
        break;
      }
      case "day":
      case "hour":
      case "minute":
      case "second":
      case "month":
      case "year": {
        if (!h.isValidPartialNumber(j))
          return;
        let H = h.parse(j), V = H, z = e.minValue === 0;
        if (e.type === "hour" && t.dateFormatter.resolvedOptions().hour12) {
          switch (t.dateFormatter.resolvedOptions().hourCycle) {
            case "h11":
              H > 11 && (V = h.parse(D));
              break;
            case "h12":
              z = !1, H > 12 && (V = h.parse(D));
              break;
          }
          e.value >= 12 && H > 1 && (H += 12);
        } else
          H > e.maxValue && (V = h.parse(D));
        if (isNaN(H))
          return;
        let I = V !== 0 || z;
        I && t.setSegment(e.type, V), +(H + "0") > e.maxValue || j.length >= String(e.maxValue).length ? (r.current = "", I && s.focusNext()) : r.current = j;
        break;
      }
    }
  }, M = () => {
    r.current = "", Le(n.current, {
      containingElement: Ne(n.current)
    }), window.getSelection().collapse(n.current);
  }, F = R("");
  Zt(n, "beforeinput", (D) => {
    switch (D.preventDefault(), D.inputType) {
      case "deleteContentBackward":
      case "deleteContentForward":
        h.isValidPartialNumber(e.text) && !t.isReadOnly && v();
        break;
      case "insertCompositionText":
        F.current = n.current.textContent, n.current.textContent = n.current.textContent;
        break;
      default:
        D.data != null && g(D.data);
        break;
    }
  }), Zt(n, "input", (D) => {
    let { inputType: j, data: H } = D;
    switch (j) {
      case "insertCompositionText":
        n.current.textContent = F.current, ($(E, H) || $(P, H)) && g(H);
        break;
    }
  }), de(() => {
    let D = n.current;
    return () => {
      document.activeElement === D && (s.focusPrevious() || s.focusNext());
    };
  }, [
    n,
    s
  ]);
  let C = Hn() || e.type === "timeZoneName" ? {
    role: "textbox",
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuetext": null,
    "aria-valuenow": null
  } : {}, S = N(() => t.segments.find((D) => D.isEditable), [
    t.segments
  ]);
  e !== S && !t.isInvalid && (u = void 0);
  let w = ce(), k = !t.isDisabled && !t.isReadOnly && e.isEditable, K = e.type === "literal" ? "" : i.of(e.type), A = Kt({
    "aria-label": `${K}${l ? `, ${l}` : ""}${o ? ", " : ""}`,
    "aria-labelledby": o
  });
  return e.type === "literal" ? {
    segmentProps: {
      "aria-hidden": !0
    }
  } : {
    segmentProps: O(b, A, {
      id: w,
      ...C,
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
      [parseInt(f.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: k ? "next" : void 0,
      inputMode: t.isDisabled || e.type === "dayPeriod" || e.type === "era" || !k ? void 0 : "numeric",
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
function Oy(e) {
  e.sort();
  let t = e[0], n = e[e.length - 1];
  for (let r = 0; r < t.length; r++)
    if (t[r] !== n[r])
      return r;
  return 0;
}
function jy(e, t, n) {
  var r, a;
  let i = De(/* @__PURE__ */ ii(Lr), "@react-aria/datepicker"), { isInvalid: l, validationErrors: o, validationDetails: u } = t.displayValidation, { labelProps: s, fieldProps: d, descriptionProps: c, errorMessageProps: p } = en({
    ...e,
    labelElementType: "span",
    isInvalid: l,
    errorMessage: e.errorMessage || o
  }), m = d["aria-labelledby"] || d.id, { locale: b } = ie(), h = t.formatValue(b, {
    month: "long"
  }), v = h ? i.format("selectedRangeDescription", {
    startDate: h.start,
    endDate: h.end
  }) : "", y = Ct(v), $ = {
    "aria-label": i.format("startDate"),
    "aria-labelledby": m
  }, x = {
    "aria-label": i.format("endDate"),
    "aria-labelledby": m
  }, E = ce(), P = ce(), B = go(t, n), T = [
    y["aria-describedby"],
    d["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, g = N(() => Rr(n, {
    // Exclude the button from the focus manager.
    accept: (k) => k.id !== E
  }), [
    n,
    E
  ]), M = {
    [W0]: g,
    [fr]: "presentation",
    "aria-describedby": T,
    placeholderValue: e.placeholderValue,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    granularity: e.granularity,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    isRequired: e.isRequired,
    validationBehavior: e.validationBehavior
  }, F = q(e), { focusWithinProps: C } = vt({
    ...e,
    isDisabled: t.isOpen,
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), S = R(Gt), w = R(Gt);
  return {
    groupProps: O(F, B, d, y, C, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-describedby": T,
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
        g.focusFirst();
      }
    },
    buttonProps: {
      ...y,
      id: E,
      "aria-haspopup": "dialog",
      "aria-label": i.format("calendar"),
      "aria-labelledby": `${E} ${m}`,
      "aria-describedby": T,
      "aria-expanded": t.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => t.setOpen(!0)
    },
    dialogProps: {
      id: P,
      "aria-labelledby": `${E} ${m}`
    },
    startFieldProps: {
      ...$,
      ...M,
      value: (r = t.value) === null || r === void 0 ? void 0 : r.start,
      onChange: (k) => t.setDateTime("start", k),
      autoFocus: e.autoFocus,
      name: e.startName,
      [Xt]: {
        realtimeValidation: t.realtimeValidation,
        displayValidation: t.displayValidation,
        updateValidation(k) {
          S.current = k, t.updateValidation($r(k, w.current));
        },
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation
      }
    },
    endFieldProps: {
      ...x,
      ...M,
      value: (a = t.value) === null || a === void 0 ? void 0 : a.end,
      onChange: (k) => t.setDateTime("end", k),
      name: e.endName,
      [Xt]: {
        realtimeValidation: t.realtimeValidation,
        displayValidation: t.displayValidation,
        updateValidation(k) {
          w.current = k, t.updateValidation($r(S.current, k));
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
function Hy(e, t) {
  let { role: n = "dialog" } = e, r = Dt();
  r = e["aria-label"] ? void 0 : r;
  let a = R(!1);
  return Y(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      ye(t.current);
      let i = setTimeout(() => {
        document.activeElement === t.current && (a.current = !0, t.current && (t.current.blur(), ye(t.current)), a.current = !1);
      }, 500);
      return () => {
        clearTimeout(i);
      };
    }
  }, [
    t
  ]), of(), {
    dialogProps: {
      ...q(e, {
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
class Rn {
  /**
  * Returns a copy of this point.
  */
  copy() {
    return new Rn(this.x, this.y);
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
class In {
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
    return new Rn(this.x, this.y);
  }
  /**
  * The top right corner of the rectangle.
  */
  get topRight() {
    return new Rn(this.maxX, this.y);
  }
  /**
  * The bottom left corner of the rectangle.
  */
  get bottomLeft() {
    return new Rn(this.x, this.maxY);
  }
  /**
  * The bottom right corner of the rectangle.
  */
  get bottomRight() {
    return new Rn(this.maxX, this.maxY);
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
    return new In(n, r, a, i);
  }
  /**
  * Returns the intersection of this Rect with another.
  * If the rectangles do not intersect, an all zero Rect is returned.
  */
  intersection(t) {
    if (!this.intersects(t))
      return new In(0, 0, 0, 0);
    let n = Math.max(this.x, t.x), r = Math.max(this.y, t.y);
    return new In(n, r, Math.min(this.maxX, t.maxX) - n, Math.min(this.maxY, t.maxY) - r);
  }
  /**
  * Returns a copy of this rectangle.
  */
  copy() {
    return new In(this.x, this.y, this.width, this.height);
  }
  constructor(t = 0, n = 0, r = 0, a = 0) {
    this.x = t, this.y = n, this.width = r, this.height = a;
  }
}
let Fn = typeof window < "u" ? window.performance : null, rs = Fn && (Fn.now || Fn.webkitNow || Fn.msNow || Fn.mozNow);
rs && rs.bind(Fn);
function yo(e) {
  return e && e.__esModule ? e.default : e;
}
class G0 {
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
        return Wt(Ce(r, this.collection), n.index).key;
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
        return Wt(Ce(r, this.collection), n.index).key;
      }
      if (this.focusMode === "row")
        return t;
    }
  }
  getKeyRightOf(t) {
    let n = this.collection.getItem(t);
    if (n) {
      if (this.isRow(n)) {
        let r = Ce(n, this.collection);
        return this.direction === "rtl" ? Yt(r).key : At(r).key;
      }
      if (this.isCell(n)) {
        let r = this.collection.getItem(n.parentKey), a = Ce(r, this.collection), i = this.direction === "rtl" ? Wt(a, n.index - 1) : Wt(a, n.index + 1);
        return i ? i.key : this.focusMode === "row" ? n.parentKey : this.direction === "rtl" ? this.getFirstKey(t) : this.getLastKey(t);
      }
    }
  }
  getKeyLeftOf(t) {
    let n = this.collection.getItem(t);
    if (n) {
      if (this.isRow(n)) {
        let r = Ce(n, this.collection);
        return this.direction === "rtl" ? At(r).key : Yt(r).key;
      }
      if (this.isCell(n)) {
        let r = this.collection.getItem(n.parentKey), a = Ce(r, this.collection), i = this.direction === "rtl" ? Wt(a, n.index + 1) : Wt(a, n.index - 1);
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
        return At(Ce(a, this.collection)).key;
      }
    }
    if (t = this.findNextKey(), t != null && r && this.isCell(r) && n || this.focusMode === "cell") {
      let a = this.collection.getItem(t);
      t = At(Ce(a, this.collection)).key;
    }
    return t;
  }
  getLastKey(t, n) {
    let r;
    if (t != null) {
      if (r = this.collection.getItem(t), !r)
        return;
      if (this.isCell(r) && !n) {
        let a = this.collection.getItem(r.parentKey), i = Ce(a, this.collection);
        return Yt(i).key;
      }
    }
    if (t = this.findPreviousKey(), t != null && r && this.isCell(r) && n || this.focusMode === "cell") {
      let a = this.collection.getItem(t), i = Ce(a, this.collection);
      t = Yt(i).key;
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
      return new In(r.offsetLeft, r.offsetTop, r.offsetWidth, r.offsetHeight);
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
          return this.isRow(o) && this.focusMode === "cell" ? At(Ce(o, this.collection)).key : o.key;
      }
      a = this.findNextKey(a), a == null && !l && (a = this.getFirstKey(), l = !0);
    }
    return null;
  }
  constructor(t) {
    this.collection = t.collection, this.disabledKeys = t.disabledKeys, this.ref = t.ref, this.direction = t.direction, this.collator = t.collator, this.layout = t.layout, this.focusMode = t.focusMode || "row";
  }
}
const xo = /* @__PURE__ */ new WeakMap();
var li = {}, Z0 = {};
Z0 = {
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
var q0 = {};
q0 = {
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
var Y0 = {};
Y0 = {
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
var J0 = {};
J0 = {
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
var X0 = {};
X0 = {
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
var Q0 = {};
Q0 = {
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
var em = {};
em = {
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
var tm = {};
tm = {
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
var nm = {};
nm = {
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
var rm = {};
rm = {
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
var am = {};
am = {
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
var im = {};
im = {
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
var lm = {};
lm = {
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
var om = {};
om = {
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
var um = {};
um = {
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
var sm = {};
sm = {
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
var dm = {};
dm = {
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
var cm = {};
cm = {
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
var fm = {};
fm = {
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
var mm = {};
mm = {
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
var pm = {};
pm = {
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
var bm = {};
bm = {
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
var hm = {};
hm = {
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
var vm = {};
vm = {
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
var gm = {};
gm = {
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
var $m = {};
$m = {
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
var ym = {};
ym = {
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
var xm = {};
xm = {
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
var Dm = {};
Dm = {
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
var Em = {};
Em = {
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
var Cm = {};
Cm = {
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
var Pm = {};
Pm = {
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
var wm = {};
wm = {
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
var Sm = {};
Sm = {
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
li = {
  "ar-AE": Z0,
  "bg-BG": q0,
  "cs-CZ": Y0,
  "da-DK": J0,
  "de-DE": X0,
  "el-GR": Q0,
  "en-US": em,
  "es-ES": tm,
  "et-EE": nm,
  "fi-FI": rm,
  "fr-FR": am,
  "he-IL": im,
  "hr-HR": lm,
  "hu-HU": om,
  "it-IT": um,
  "ja-JP": sm,
  "ko-KR": dm,
  "lt-LT": cm,
  "lv-LV": fm,
  "nb-NO": mm,
  "nl-NL": pm,
  "pl-PL": bm,
  "pt-BR": hm,
  "pt-PT": vm,
  "ro-RO": gm,
  "ru-RU": $m,
  "sk-SK": ym,
  "sl-SI": xm,
  "sr-SP": Dm,
  "sv-SE": Em,
  "tr-TR": Cm,
  "uk-UA": Pm,
  "zh-CN": wm,
  "zh-TW": Sm
};
function Bm(e, t) {
  let { getRowText: n = (l) => {
    var o, u, s, d;
    return (d = (o = (u = t.collection).getTextValue) === null || o === void 0 ? void 0 : o.call(u, l)) !== null && d !== void 0 ? d : (s = t.collection.getItem(l)) === null || s === void 0 ? void 0 : s.textValue;
  } } = e, r = De(/* @__PURE__ */ yo(li), "@react-aria/grid"), a = t.selectionManager.rawSelection, i = R(a);
  ya(() => {
    var l;
    if (!t.selectionManager.isFocused) {
      i.current = a;
      return;
    }
    let o = as(a, i.current), u = as(i.current, a), s = t.selectionManager.selectionBehavior === "replace", d = [];
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
    })), d.length > 0 && Jt(d.join(" ")), i.current = a;
  }, [
    a
  ]);
}
function as(e, t) {
  let n = /* @__PURE__ */ new Set();
  if (e === "all" || t === "all")
    return n;
  for (let r of e.keys())
    t.has(r) || n.add(r);
  return n;
}
function km(e) {
  let t = De(/* @__PURE__ */ yo(li), "@react-aria/grid"), n = Tr(), r = (n === "pointer" || n === "virtual" || n == null) && typeof window < "u" && "ontouchstart" in window, a = N(() => {
    let l = e.selectionManager.selectionMode, o = e.selectionManager.selectionBehavior, u;
    return r && (u = t.format("longPressToSelect")), o === "replace" && l !== "none" && e.hasItemActions ? u : void 0;
  }, [
    e.selectionManager.selectionMode,
    e.selectionManager.selectionBehavior,
    e.hasItemActions,
    t,
    r
  ]);
  return Ct(a);
}
function _y(e, t, n) {
  let { isVirtualized: r, keyboardDelegate: a, focusMode: i, scrollRef: l, getRowText: o, onRowAction: u, onCellAction: s } = e, { selectionManager: d } = t;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let c = Un({
    usage: "search",
    sensitivity: "base"
  }), { direction: p } = ie(), m = t.selectionManager.disabledBehavior, b = N(() => a || new G0({
    collection: t.collection,
    disabledKeys: m === "selection" ? /* @__PURE__ */ new Set() : t.disabledKeys,
    ref: n,
    direction: p,
    collator: c,
    focusMode: i
  }), [
    a,
    t.collection,
    t.disabledKeys,
    m,
    n,
    p,
    c,
    i
  ]), { collectionProps: h } = ni({
    ref: n,
    selectionManager: d,
    keyboardDelegate: b,
    isVirtualized: r,
    scrollRef: l
  }), v = ce(e.id);
  xo.set(t, {
    keyboardDelegate: b,
    actions: {
      onRowAction: u,
      onCellAction: s
    }
  });
  let y = km({
    selectionManager: d,
    hasItemActions: !!(u || s)
  }), $ = q(e, {
    labelable: !0
  }), x = X((T) => {
    if (d.isFocused) {
      T.currentTarget.contains(T.target) || d.setFocused(!1);
      return;
    }
    T.currentTarget.contains(T.target) && d.setFocused(!0);
  }, [
    d
  ]), E = N(() => ({
    onBlur: h.onBlur,
    onFocus: x
  }), [
    x,
    h.onBlur
  ]), P = Xl(n, {
    isDisabled: t.collection.size !== 0
  }), B = O(
    $,
    {
      role: "grid",
      id: v,
      "aria-multiselectable": d.selectionMode === "multiple" ? "true" : void 0
    },
    t.isKeyboardNavigationDisabled ? E : h,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    t.collection.size === 0 && {
      tabIndex: P ? -1 : 0
    },
    y
  );
  return r && (B["aria-rowcount"] = t.collection.size, B["aria-colcount"] = t.collection.columnCount), Bm({
    getRowText: o
  }, t), {
    gridProps: B
  };
}
function Uy() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function Wy(e, t, n) {
  let { node: r, isVirtualized: a, shouldSelectOnPressUp: i, onAction: l } = e, { actions: { onRowAction: o } } = xo.get(t), { itemProps: u, ...s } = Wn({
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
function Fm(e, t, n) {
  let { node: r, isVirtualized: a, focusMode: i = "child", shouldSelectOnPressUp: l, onAction: o } = e, { direction: u } = ie(), { keyboardDelegate: s, actions: { onCellAction: d } } = xo.get(t), c = R(null), p = () => {
    let x = Re(n.current);
    if (i === "child") {
      if (n.current.contains(document.activeElement) && n.current !== document.activeElement)
        return;
      let E = t.selectionManager.childFocusStrategy === "last" ? Gi(x) : x.firstChild();
      if (E) {
        ye(E);
        return;
      }
    }
    (c.current != null && r.key !== c.current || !n.current.contains(document.activeElement)) && ye(n.current);
  }, { itemProps: m, isPressed: b } = Wn({
    selectionManager: t.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: a,
    focus: p,
    shouldSelectOnPressUp: l,
    onAction: d ? () => d(r.key) : o,
    isDisabled: t.collection.size === 0
  }), y = O(m, {
    role: "gridcell",
    onKeyDownCapture: (x) => {
      if (!x.currentTarget.contains(x.target) || t.isKeyboardNavigationDisabled)
        return;
      let E = Re(n.current);
      switch (E.currentNode = document.activeElement, x.key) {
        case "ArrowLeft": {
          let P = u === "rtl" ? E.nextNode() : E.previousNode();
          if (i === "child" && P === n.current && (P = null), P)
            x.preventDefault(), x.stopPropagation(), ye(P), Le(P, {
              containingElement: Ne(n.current)
            });
          else {
            if (s.getKeyLeftOf(r.key) !== r.key)
              break;
            x.preventDefault(), x.stopPropagation(), i === "cell" && u === "rtl" ? (ye(n.current), Le(n.current, {
              containingElement: Ne(n.current)
            })) : (E.currentNode = n.current, P = u === "rtl" ? E.firstChild() : Gi(E), P && (ye(P), Le(P, {
              containingElement: Ne(n.current)
            })));
          }
          break;
        }
        case "ArrowRight": {
          let P = u === "rtl" ? E.previousNode() : E.nextNode();
          if (i === "child" && P === n.current && (P = null), P)
            x.preventDefault(), x.stopPropagation(), ye(P), Le(P, {
              containingElement: Ne(n.current)
            });
          else {
            if (s.getKeyRightOf(r.key) !== r.key)
              break;
            x.preventDefault(), x.stopPropagation(), i === "cell" && u === "ltr" ? (ye(n.current), Le(n.current, {
              containingElement: Ne(n.current)
            })) : (E.currentNode = n.current, P = u === "rtl" ? Gi(E) : E.firstChild(), P && (ye(P), Le(P, {
              containingElement: Ne(n.current)
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
        pn() || t.selectionManager.setFocusedKey(r.key);
        return;
      }
      requestAnimationFrame(() => {
        i === "child" && document.activeElement === n.current && p();
      });
    }
  });
  var $;
  return a && (y["aria-colindex"] = (($ = r.colIndex) !== null && $ !== void 0 ? $ : r.index) + 1), l && y.tabIndex != null && y.onPointerDown == null && (y.onPointerDown = (x) => {
    let E = x.currentTarget, P = E.getAttribute("tabindex");
    E.removeAttribute("tabindex"), requestAnimationFrame(() => {
      E.setAttribute("tabindex", P);
    });
  }), {
    gridCellProps: y,
    isPressed: b
  };
}
function Gi(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
function Am(e, t) {
  let { key: n } = e, r = t.selectionManager, a = ce(), i = !t.selectionManager.canSelectItem(n), l = t.selectionManager.isSelected(n), o = () => r.select(n);
  const u = De(/* @__PURE__ */ yo(li), "@react-aria/grid");
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
const Do = /* @__PURE__ */ new WeakMap();
function Cl(e, t) {
  let { id: n } = Do.get(e);
  if (!n)
    throw new Error("Unknown list");
  return `${n}-${Gy(t)}`;
}
function Gy(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Tm(e, t, n) {
  let { isVirtualized: r, keyboardDelegate: a, onAction: i, linkBehavior: l = "action" } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let { listProps: o } = bo({
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    ref: n,
    keyboardDelegate: a,
    isVirtualized: r,
    selectOnFocus: t.selectionManager.selectionBehavior === "replace",
    shouldFocusWrap: e.shouldFocusWrap,
    linkBehavior: l
  }), u = ce(e.id);
  Do.set(t, {
    id: u,
    onAction: i,
    linkBehavior: l
  });
  let s = km({
    selectionManager: t.selectionManager,
    hasItemActions: !!i
  }), d = Xl(n, {
    isDisabled: t.collection.size !== 0
  }), c = q(e, {
    labelable: !0
  }), p = O(
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
  return r && (p["aria-rowcount"] = t.collection.size, p["aria-colcount"] = 1), Bm({}, t), {
    gridProps: p
  };
}
function Mm(e, t, n) {
  let { node: r, isVirtualized: a, shouldSelectOnPressUp: i } = e, { direction: l } = ie(), { onAction: o, linkBehavior: u } = Do.get(t), s = Dt(), d = R(null), c = () => {
    (d.current != null && r.key !== d.current || !n.current.contains(document.activeElement)) && ye(n.current);
  }, { itemProps: p, ...m } = Wn({
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
    let E = Re(n.current);
    switch (E.currentNode = document.activeElement, x.key) {
      case "ArrowLeft": {
        let P = l === "rtl" ? E.nextNode() : E.previousNode();
        if (P)
          x.preventDefault(), x.stopPropagation(), ye(P), Le(P, {
            containingElement: Ne(n.current)
          });
        else if (x.preventDefault(), x.stopPropagation(), l === "rtl")
          ye(n.current), Le(n.current, {
            containingElement: Ne(n.current)
          });
        else {
          E.currentNode = n.current;
          let B = is(E);
          B && (ye(B), Le(B, {
            containingElement: Ne(n.current)
          }));
        }
        break;
      }
      case "ArrowRight": {
        let P = l === "rtl" ? E.previousNode() : E.nextNode();
        if (P)
          x.preventDefault(), x.stopPropagation(), ye(P), Le(P, {
            containingElement: Ne(n.current)
          });
        else if (x.preventDefault(), x.stopPropagation(), l === "ltr")
          ye(n.current), Le(n.current, {
            containingElement: Ne(n.current)
          });
        else {
          E.currentNode = n.current;
          let B = is(E);
          B && (ye(B), Le(B, {
            containingElement: Ne(n.current)
          }));
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        !x.altKey && n.current.contains(x.target) && (x.stopPropagation(), x.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(x.nativeEvent.type, x.nativeEvent)));
        break;
    }
  }, h = (x) => {
    if (d.current = r.key, x.target !== n.current) {
      pn() || t.selectionManager.setFocusedKey(r.key);
      return;
    }
  }, v = m.hasAction ? Ul(r.props) : {}, y = O(p, v, {
    role: "row",
    onKeyDownCapture: b,
    onFocus: h,
    "aria-label": r.textValue || void 0,
    "aria-selected": t.selectionManager.canSelectItem(r.key) ? t.selectionManager.isSelected(r.key) : void 0,
    "aria-disabled": t.selectionManager.isDisabled(r.key) || void 0,
    "aria-labelledby": s && r.textValue ? `${Cl(t, r.key)} ${s}` : void 0,
    id: Cl(t, r.key)
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
    ...m
  };
}
function is(e) {
  let t, n;
  do
    n = e.lastChild(), n && (t = n);
  while (n);
  return t;
}
function Zy(e, t) {
  let { key: n } = e;
  const { checkboxProps: r } = Am(e, t);
  return {
    checkboxProps: {
      ...r,
      "aria-labelledby": `${r.id} ${Cl(t, n)}`
    }
  };
}
function Rm(e) {
  let { value: t = 0, minValue: n = 0, maxValue: r = 100, valueLabel: a, isIndeterminate: i, formatOptions: l = {
    style: "percent"
  } } = e, o = q(e, {
    labelable: !0
  }), { labelProps: u, fieldProps: s } = Vr({
    ...e,
    // Progress bar is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  t = lt(t, n, r);
  let d = (t - n) / (r - n), c = Ka(l);
  if (!i && !a) {
    let p = l.style === "percent" ? d : t;
    a = c.format(p);
  }
  return {
    progressBarProps: O(o, {
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
function qy(e) {
  let { progressBarProps: t, labelProps: n } = Rm(e);
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
function Yy(e) {
  return e && e.__esModule ? e.default : e;
}
var Im = {}, Nm = {};
Nm = {
  decrease: (e) => `خفض ${e.fieldLabel}`,
  increase: (e) => `زيادة ${e.fieldLabel}`,
  numberField: "حقل رقمي"
};
var Km = {};
Km = {
  decrease: (e) => `Намаляване ${e.fieldLabel}`,
  increase: (e) => `Усилване ${e.fieldLabel}`,
  numberField: "Номер на полето"
};
var zm = {};
zm = {
  decrease: (e) => `Snížit ${e.fieldLabel}`,
  increase: (e) => `Zvýšit ${e.fieldLabel}`,
  numberField: "Číselné pole"
};
var Vm = {};
Vm = {
  decrease: (e) => `Reducer ${e.fieldLabel}`,
  increase: (e) => `Øg ${e.fieldLabel}`,
  numberField: "Talfelt"
};
var Lm = {};
Lm = {
  decrease: (e) => `${e.fieldLabel} verringern`,
  increase: (e) => `${e.fieldLabel} erhöhen`,
  numberField: "Nummernfeld"
};
var Om = {};
Om = {
  decrease: (e) => `Μείωση ${e.fieldLabel}`,
  increase: (e) => `Αύξηση ${e.fieldLabel}`,
  numberField: "Πεδίο αριθμού"
};
var jm = {};
jm = {
  decrease: (e) => `Decrease ${e.fieldLabel}`,
  increase: (e) => `Increase ${e.fieldLabel}`,
  numberField: "Number field"
};
var Hm = {};
Hm = {
  decrease: (e) => `Reducir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo de número"
};
var _m = {};
_m = {
  decrease: (e) => `Vähenda ${e.fieldLabel}`,
  increase: (e) => `Suurenda ${e.fieldLabel}`,
  numberField: "Numbri väli"
};
var Um = {};
Um = {
  decrease: (e) => `Vähennä ${e.fieldLabel}`,
  increase: (e) => `Lisää ${e.fieldLabel}`,
  numberField: "Numerokenttä"
};
var Wm = {};
Wm = {
  decrease: (e) => `Diminuer ${e.fieldLabel}`,
  increase: (e) => `Augmenter ${e.fieldLabel}`,
  numberField: "Champ de nombre"
};
var Gm = {};
Gm = {
  decrease: (e) => `הקטן ${e.fieldLabel}`,
  increase: (e) => `הגדל ${e.fieldLabel}`,
  numberField: "שדה מספר"
};
var Zm = {};
Zm = {
  decrease: (e) => `Smanji ${e.fieldLabel}`,
  increase: (e) => `Povećaj ${e.fieldLabel}`,
  numberField: "Polje broja"
};
var qm = {};
qm = {
  decrease: (e) => `${e.fieldLabel} csökkentése`,
  increase: (e) => `${e.fieldLabel} növelése`,
  numberField: "Számmező"
};
var Ym = {};
Ym = {
  decrease: (e) => `Riduci ${e.fieldLabel}`,
  increase: (e) => `Aumenta ${e.fieldLabel}`,
  numberField: "Campo numero"
};
var Jm = {};
Jm = {
  decrease: (e) => `${e.fieldLabel}を縮小`,
  increase: (e) => `${e.fieldLabel}を拡大`,
  numberField: "数値フィールド"
};
var Xm = {};
Xm = {
  decrease: (e) => `${e.fieldLabel} 감소`,
  increase: (e) => `${e.fieldLabel} 증가`,
  numberField: "번호 필드"
};
var Qm = {};
Qm = {
  decrease: (e) => `Sumažinti ${e.fieldLabel}`,
  increase: (e) => `Padidinti ${e.fieldLabel}`,
  numberField: "Numerio laukas"
};
var ep = {};
ep = {
  decrease: (e) => `Samazināšana ${e.fieldLabel}`,
  increase: (e) => `Palielināšana ${e.fieldLabel}`,
  numberField: "Skaitļu lauks"
};
var tp = {};
tp = {
  decrease: (e) => `Reduser ${e.fieldLabel}`,
  increase: (e) => `Øk ${e.fieldLabel}`,
  numberField: "Tallfelt"
};
var np = {};
np = {
  decrease: (e) => `${e.fieldLabel} verlagen`,
  increase: (e) => `${e.fieldLabel} verhogen`,
  numberField: "Getalveld"
};
var rp = {};
rp = {
  decrease: (e) => `Zmniejsz ${e.fieldLabel}`,
  increase: (e) => `Zwiększ ${e.fieldLabel}`,
  numberField: "Pole numeru"
};
var ap = {};
ap = {
  decrease: (e) => `Diminuir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo de número"
};
var ip = {};
ip = {
  decrease: (e) => `Diminuir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo numérico"
};
var lp = {};
lp = {
  decrease: (e) => `Scădere ${e.fieldLabel}`,
  increase: (e) => `Creștere ${e.fieldLabel}`,
  numberField: "Câmp numeric"
};
var op = {};
op = {
  decrease: (e) => `Уменьшение ${e.fieldLabel}`,
  increase: (e) => `Увеличение ${e.fieldLabel}`,
  numberField: "Числовое поле"
};
var up = {};
up = {
  decrease: (e) => `Znížiť ${e.fieldLabel}`,
  increase: (e) => `Zvýšiť ${e.fieldLabel}`,
  numberField: "Číselné pole"
};
var sp = {};
sp = {
  decrease: (e) => `Upadati ${e.fieldLabel}`,
  increase: (e) => `Povečajte ${e.fieldLabel}`,
  numberField: "Številčno polje"
};
var dp = {};
dp = {
  decrease: (e) => `Smanji ${e.fieldLabel}`,
  increase: (e) => `Povećaj ${e.fieldLabel}`,
  numberField: "Polje broja"
};
var cp = {};
cp = {
  decrease: (e) => `Minska ${e.fieldLabel}`,
  increase: (e) => `Öka ${e.fieldLabel}`,
  numberField: "Nummerfält"
};
var fp = {};
fp = {
  decrease: (e) => `${e.fieldLabel} azalt`,
  increase: (e) => `${e.fieldLabel} arttır`,
  numberField: "Sayı alanı"
};
var mp = {};
mp = {
  decrease: (e) => `Зменшити ${e.fieldLabel}`,
  increase: (e) => `Збільшити ${e.fieldLabel}`,
  numberField: "Поле номера"
};
var pp = {};
pp = {
  decrease: (e) => `降低 ${e.fieldLabel}`,
  increase: (e) => `提高 ${e.fieldLabel}`,
  numberField: "数字字段"
};
var bp = {};
bp = {
  decrease: (e) => `縮小 ${e.fieldLabel}`,
  increase: (e) => `放大 ${e.fieldLabel}`,
  numberField: "數字欄位"
};
Im = {
  "ar-AE": Nm,
  "bg-BG": Km,
  "cs-CZ": zm,
  "da-DK": Vm,
  "de-DE": Lm,
  "el-GR": Om,
  "en-US": jm,
  "es-ES": Hm,
  "et-EE": _m,
  "fi-FI": Um,
  "fr-FR": Wm,
  "he-IL": Gm,
  "hr-HR": Zm,
  "hu-HU": qm,
  "it-IT": Ym,
  "ja-JP": Jm,
  "ko-KR": Xm,
  "lt-LT": Qm,
  "lv-LV": ep,
  "nb-NO": tp,
  "nl-NL": np,
  "pl-PL": rp,
  "pt-BR": ap,
  "pt-PT": ip,
  "ro-RO": lp,
  "ru-RU": op,
  "sk-SK": up,
  "sl-SI": sp,
  "sr-SP": dp,
  "sv-SE": cp,
  "tr-TR": fp,
  "uk-UA": mp,
  "zh-CN": pp,
  "zh-TW": bp
};
function Jy(e, t, n) {
  let { id: r, decrementAriaLabel: a, incrementAriaLabel: i, isDisabled: l, isReadOnly: o, isRequired: u, minValue: s, maxValue: d, autoFocus: c, label: p, formatOptions: m, onBlur: b = () => {
  }, onFocus: h, onFocusChange: v, onKeyDown: y, onKeyUp: $, description: x, errorMessage: E, isWheelDisabled: P, ...B } = e, { increment: T, incrementToMax: g, decrement: M, decrementToMin: F, numberValue: C, inputValue: S, commit: w, commitValidation: k } = t;
  const K = De(/* @__PURE__ */ Yy(Im), "@react-aria/numberfield");
  let A = ce(r), { focusProps: D } = Wa({
    onBlur() {
      w();
    }
  }), j = Ka(m), H = N(() => j.resolvedOptions(), [
    j
  ]), V = Ka({
    ...m,
    currencySign: void 0
  }), z = N(() => isNaN(C) ? "" : V.format(C), [
    V,
    C
  ]), { spinButtonProps: I, incrementButtonProps: W, decrementButtonProps: te } = d0({
    isDisabled: l,
    isReadOnly: o,
    isRequired: u,
    maxValue: d,
    minValue: s,
    onIncrement: T,
    onIncrementToMax: g,
    onDecrement: M,
    onDecrementToMin: F,
    value: C,
    textValue: z
  }), [oe, Ee] = G(!1), { focusWithinProps: L } = vt({
    isDisabled: l,
    onFocusWithinChange: Ee
  }), J = X((Ze) => {
    Math.abs(Ze.deltaY) <= Math.abs(Ze.deltaX) || (Ze.deltaY > 0 ? T() : Ze.deltaY < 0 && M());
  }, [
    M,
    T
  ]);
  n$({
    onScroll: J,
    isDisabled: P || l || o || !oe
  }, n);
  let $e = H.maximumFractionDigits > 0, ne = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, et = "numeric";
  Ns() ? ne ? et = "text" : $e && (et = "decimal") : mr() && (ne ? et = "numeric" : $e && (et = "decimal"));
  let Cn = (Ze) => {
    t.validate(Ze) && t.setInputValue(Ze);
  }, Zn = q(e), Xr = X((Ze) => {
    Ze.key === "Enter" ? (w(), k()) : Ze.continuePropagation();
  }, [
    w,
    k
  ]), { isInvalid: qn, validationErrors: Di, validationDetails: Ei } = t.displayValidation, { labelProps: le, inputProps: be, descriptionProps: Me, errorMessageProps: Zv } = Ty({
    ...B,
    ...Zn,
    name: void 0,
    label: p,
    autoFocus: c,
    isDisabled: l,
    isReadOnly: o,
    isRequired: u,
    validate: void 0,
    [Xt]: t,
    value: S,
    defaultValue: void 0,
    autoComplete: "off",
    "aria-label": e["aria-label"] || void 0,
    "aria-labelledby": e["aria-labelledby"] || void 0,
    id: A,
    type: "text",
    inputMode: et,
    onChange: Cn,
    onBlur: b,
    onFocus: h,
    onFocusChange: v,
    onKeyDown: N(() => bt(Xr, y), [
      Xr,
      y
    ]),
    onKeyUp: $,
    description: x,
    errorMessage: E
  }, t, n);
  vn(n, t.numberValue, t.setNumberValue);
  let Qo = O(I, D, be, {
    // override the spinbutton role, we can't focus a spin button with VO
    role: null,
    // ignore aria-roledescription on iOS so that required state will announce when it is present
    "aria-roledescription": Hn() ? null : K.format("numberField"),
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null,
    autoCorrect: "off",
    spellCheck: "false"
  });
  e.validationBehavior === "native" && (Qo["aria-required"] = void 0);
  let eu = (Ze) => {
    var Pi;
    document.activeElement !== n.current && (Ze.pointerType === "mouse" ? (Pi = n.current) === null || Pi === void 0 || Pi.focus() : Ze.target.focus());
  }, Ci = e["aria-label"] || (typeof e.label == "string" ? e.label : ""), rn;
  Ci || (rn = e.label != null ? le.id : e["aria-labelledby"]);
  let tu = ce(), nu = ce(), qv = O(W, {
    "aria-label": i || K.format("increase", {
      fieldLabel: Ci
    }).trim(),
    id: rn && !i ? tu : null,
    "aria-labelledby": rn && !i ? `${tu} ${rn}` : null,
    "aria-controls": A,
    excludeFromTabOrder: !0,
    preventFocusOnPress: !0,
    allowFocusWhenDisabled: !0,
    isDisabled: !t.canIncrement,
    onPressStart: eu
  }), Yv = O(te, {
    "aria-label": a || K.format("decrease", {
      fieldLabel: Ci
    }).trim(),
    id: rn && !a ? nu : null,
    "aria-labelledby": rn && !a ? `${nu} ${rn}` : null,
    "aria-controls": A,
    excludeFromTabOrder: !0,
    preventFocusOnPress: !0,
    allowFocusWhenDisabled: !0,
    isDisabled: !t.canDecrement,
    onPressStart: eu
  });
  return {
    groupProps: {
      ...L,
      role: "group",
      "aria-disabled": l,
      "aria-invalid": qn ? "true" : void 0
    },
    labelProps: le,
    inputProps: Qo,
    incrementButtonProps: qv,
    decrementButtonProps: Yv,
    errorMessageProps: Zv,
    descriptionProps: Me,
    isInvalid: qn,
    validationErrors: Di,
    validationDetails: Ei
  };
}
const hp = /* @__PURE__ */ new WeakMap();
function Xy(e, t, n) {
  let { value: r, children: a, "aria-label": i, "aria-labelledby": l } = e;
  const o = e.isDisabled || t.isDisabled;
  let u = a != null, s = i != null || l != null;
  !u && !s && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let d = t.selectedValue === r, c = (g) => {
    g.stopPropagation(), t.setSelectedValue(r);
  }, { pressProps: p, isPressed: m } = Ye({
    isDisabled: o
  }), { pressProps: b, isPressed: h } = Ye({
    isDisabled: o,
    onPress() {
      t.setSelectedValue(r);
    }
  }), { focusableProps: v } = gn(O(e, {
    onFocus: () => t.setLastFocusedValue(r)
  }), n), y = O(p, v), $ = q(e, {
    labelable: !0
  }), x = -1;
  t.selectedValue != null ? t.selectedValue === r && (x = 0) : (t.lastFocusedValue === r || t.lastFocusedValue == null) && (x = 0), o && (x = void 0);
  let { name: E, descriptionId: P, errorMessageId: B, validationBehavior: T } = hp.get(t);
  return vn(n, t.selectedValue, t.setSelectedValue), zr({
    validationBehavior: T
  }, t, n), {
    labelProps: O(b, {
      onClick: (g) => g.preventDefault()
    }),
    inputProps: O($, {
      ...y,
      type: "radio",
      name: E,
      tabIndex: x,
      disabled: o,
      required: t.isRequired && T === "native",
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
    isPressed: m || h
  };
}
function Qy(e, t) {
  let { name: n, isReadOnly: r, isRequired: a, isDisabled: i, orientation: l = "vertical", validationBehavior: o = "aria" } = e, { direction: u } = ie(), { isInvalid: s, validationErrors: d, validationDetails: c } = t.displayValidation, { labelProps: p, fieldProps: m, descriptionProps: b, errorMessageProps: h } = en({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || d
  }), v = q(e, {
    labelable: !0
  }), { focusWithinProps: y } = vt({
    onBlurWithin(E) {
      var P;
      (P = e.onBlur) === null || P === void 0 || P.call(e, E), t.selectedValue || t.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), $ = (E) => {
    let P;
    switch (E.key) {
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
    E.preventDefault();
    let B = Re(E.currentTarget, {
      from: E.target
    }), T;
    P === "next" ? (T = B.nextNode(), T || (B.currentNode = E.currentTarget, T = B.firstChild())) : (T = B.previousNode(), T || (B.currentNode = E.currentTarget, T = B.lastChild())), T && (T.focus(), t.setSelectedValue(T.value));
  }, x = ce(n);
  return hp.set(t, {
    name: x,
    descriptionId: b.id,
    errorMessageId: h.id,
    validationBehavior: o
  }), {
    radioGroupProps: O(v, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: $,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": r || void 0,
      "aria-required": a || void 0,
      "aria-disabled": i || void 0,
      "aria-orientation": l,
      ...m,
      ...y
    }),
    labelProps: p,
    descriptionProps: b,
    errorMessageProps: h,
    isInvalid: s,
    validationErrors: d,
    validationDetails: c
  };
}
function e5(e) {
  return e && e.__esModule ? e.default : e;
}
var vp = {}, gp = {};
gp = {
  "Clear search": "مسح البحث"
};
var $p = {};
$p = {
  "Clear search": "Изчистване на търсене"
};
var yp = {};
yp = {
  "Clear search": "Vymazat hledání"
};
var xp = {};
xp = {
  "Clear search": "Ryd søgning"
};
var Dp = {};
Dp = {
  "Clear search": "Suche zurücksetzen"
};
var Ep = {};
Ep = {
  "Clear search": "Απαλοιφή αναζήτησης"
};
var Cp = {};
Cp = {
  "Clear search": "Clear search"
};
var Pp = {};
Pp = {
  "Clear search": "Borrar búsqueda"
};
var wp = {};
wp = {
  "Clear search": "Tühjenda otsing"
};
var Sp = {};
Sp = {
  "Clear search": "Tyhjennä haku"
};
var Bp = {};
Bp = {
  "Clear search": "Effacer la recherche"
};
var kp = {};
kp = {
  "Clear search": "נקה חיפוש"
};
var Fp = {};
Fp = {
  "Clear search": "Obriši pretragu"
};
var Ap = {};
Ap = {
  "Clear search": "Keresés törlése"
};
var Tp = {};
Tp = {
  "Clear search": "Cancella ricerca"
};
var Mp = {};
Mp = {
  "Clear search": "検索をクリア"
};
var Rp = {};
Rp = {
  "Clear search": "검색 지우기"
};
var Ip = {};
Ip = {
  "Clear search": "Išvalyti iešką"
};
var Np = {};
Np = {
  "Clear search": "Notīrīt meklēšanu"
};
var Kp = {};
Kp = {
  "Clear search": "Tøm søk"
};
var zp = {};
zp = {
  "Clear search": "Zoekactie wissen"
};
var Vp = {};
Vp = {
  "Clear search": "Wyczyść zawartość wyszukiwania"
};
var Lp = {};
Lp = {
  "Clear search": "Limpar pesquisa"
};
var Op = {};
Op = {
  "Clear search": "Limpar pesquisa"
};
var jp = {};
jp = {
  "Clear search": "Ştergeţi căutarea"
};
var Hp = {};
Hp = {
  "Clear search": "Очистить поиск"
};
var _p = {};
_p = {
  "Clear search": "Vymazať vyhľadávanie"
};
var Up = {};
Up = {
  "Clear search": "Počisti iskanje"
};
var Wp = {};
Wp = {
  "Clear search": "Obriši pretragu"
};
var Gp = {};
Gp = {
  "Clear search": "Rensa sökning"
};
var Zp = {};
Zp = {
  "Clear search": "Aramayı temizle"
};
var qp = {};
qp = {
  "Clear search": "Очистити пошук"
};
var Yp = {};
Yp = {
  "Clear search": "清除搜索"
};
var Jp = {};
Jp = {
  "Clear search": "清除搜尋條件"
};
vp = {
  "ar-AE": gp,
  "bg-BG": $p,
  "cs-CZ": yp,
  "da-DK": xp,
  "de-DE": Dp,
  "el-GR": Ep,
  "en-US": Cp,
  "es-ES": Pp,
  "et-EE": wp,
  "fi-FI": Sp,
  "fr-FR": Bp,
  "he-IL": kp,
  "hr-HR": Fp,
  "hu-HU": Ap,
  "it-IT": Tp,
  "ja-JP": Mp,
  "ko-KR": Rp,
  "lt-LT": Ip,
  "lv-LV": Np,
  "nb-NO": Kp,
  "nl-NL": zp,
  "pl-PL": Vp,
  "pt-BR": Lp,
  "pt-PT": Op,
  "ro-RO": jp,
  "ru-RU": Hp,
  "sk-SK": _p,
  "sl-SI": Up,
  "sr-SP": Wp,
  "sv-SE": Gp,
  "tr-TR": Zp,
  "uk-UA": qp,
  "zh-CN": Yp,
  "zh-TW": Jp
};
function t5(e, t, n) {
  let r = De(/* @__PURE__ */ e5(vp), "@react-aria/searchfield"), { isDisabled: a, isReadOnly: i, onSubmit: l = () => {
  }, onClear: o, type: u = "search" } = e, s = (y) => {
    const $ = y.key;
    $ === "Enter" && y.preventDefault(), !(a || i) && ($ === "Enter" && l(t.value), $ === "Escape" && (t.value === "" ? y.continuePropagation() : (t.setValue(""), o && o())));
  }, d = () => {
    t.setValue(""), o && o();
  }, c = () => {
    var y;
    (y = n.current) === null || y === void 0 || y.focus();
  }, { labelProps: p, inputProps: m, descriptionProps: b, errorMessageProps: h, ...v } = ai({
    ...e,
    value: t.value,
    onChange: t.setValue,
    onKeyDown: i ? e.onKeyDown : bt(s, e.onKeyDown),
    type: u
  }, n);
  return {
    labelProps: p,
    inputProps: {
      ...m,
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
    errorMessageProps: h,
    ...v
  };
}
const Xp = /* @__PURE__ */ new WeakMap();
function n5(e, t, n) {
  let { keyboardDelegate: r, isDisabled: a, isRequired: i, name: l, validationBehavior: o = "aria" } = e, u = Un({
    usage: "search",
    sensitivity: "base"
  }), s = N(() => r || new yn(t.collection, t.disabledKeys, null, u), [
    r,
    t.collection,
    t.disabledKeys,
    u
  ]), { menuTriggerProps: d, menuProps: c } = Uf({
    isDisabled: a,
    type: "listbox"
  }, t, n), p = (g) => {
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
  }, { typeSelectProps: m } = uf({
    keyboardDelegate: s,
    selectionManager: t.selectionManager,
    onTypeSelect(g) {
      t.setSelectedKey(g);
    }
  }), { isInvalid: b, validationErrors: h, validationDetails: v } = t.displayValidation, { labelProps: y, fieldProps: $, descriptionProps: x, errorMessageProps: E } = en({
    ...e,
    labelElementType: "span",
    isInvalid: b,
    errorMessage: e.errorMessage || h
  });
  m.onKeyDown = m.onKeyDownCapture, delete m.onKeyDownCapture;
  let P = q(e, {
    labelable: !0
  }), B = O(m, d, $), T = ce();
  return Xp.set(t, {
    isDisabled: a,
    isRequired: i,
    name: l,
    validationBehavior: o
  }), {
    labelProps: {
      ...y,
      onClick: () => {
        e.isDisabled || (n.current.focus(), Zl("keyboard"));
      }
    },
    triggerProps: O(P, {
      ...B,
      isDisabled: a,
      onKeyDown: bt(B.onKeyDown, p, e.onKeyDown),
      onKeyUp: e.onKeyUp,
      "aria-labelledby": [
        T,
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
      id: T
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
    errorMessageProps: E,
    isInvalid: b,
    validationErrors: h,
    validationDetails: v
  };
}
function r5(e, t, n) {
  let r = Xp.get(t) || {}, { autoComplete: a, name: i = r.name, isDisabled: l = r.isDisabled } = e, { validationBehavior: o, isRequired: u } = r, s = Tr(), { visuallyHiddenProps: d } = Ot();
  vn(e.selectRef, t.selectedKey, t.setSelectedKey), zr({
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
function a5(e) {
  let { state: t, triggerRef: n, label: r, name: a, isDisabled: i } = e, l = R(null), { containerProps: o, inputProps: u, selectProps: s } = r5({
    ...e,
    selectRef: l
  }, t, n);
  var d;
  return t.collection.size <= 300 ? /* @__PURE__ */ f.createElement("div", {
    ...o,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ f.createElement("input", u), /* @__PURE__ */ f.createElement("label", null, r, /* @__PURE__ */ f.createElement("select", {
    ...s,
    ref: l
  }, /* @__PURE__ */ f.createElement("option", null), [
    ...t.collection.getKeys()
  ].map((c) => {
    let p = t.collection.getItem(c);
    if (p.type === "item")
      return /* @__PURE__ */ f.createElement("option", {
        key: p.key,
        value: p.key
      }, p.textValue);
  })))) : a ? /* @__PURE__ */ f.createElement("input", {
    type: "hidden",
    autoComplete: s.autoComplete,
    name: a,
    disabled: i,
    value: (d = t.selectedKey) !== null && d !== void 0 ? d : ""
  }) : null;
}
function i5(e) {
  let t = q(e, {
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
const Eo = /* @__PURE__ */ new WeakMap();
function Pl(e, t) {
  let n = Eo.get(e);
  if (!n)
    throw new Error("Unknown slider state");
  return `${n.id}-${t}`;
}
function l5(e, t, n) {
  let { labelProps: r, fieldProps: a } = Vr(e), i = e.orientation === "vertical";
  var l;
  Eo.set(t, {
    id: (l = r.id) !== null && l !== void 0 ? l : a.id,
    "aria-describedby": e["aria-describedby"],
    "aria-details": e["aria-details"]
  });
  let { direction: o } = ie(), { addGlobalListener: u, removeGlobalListener: s } = _n();
  const d = R(null), c = o === "rtl", p = R(null), { moveProps: m } = ql({
    onMoveStart() {
      p.current = null;
    },
    onMove({ deltaX: y, deltaY: $ }) {
      let { height: x, width: E } = n.current.getBoundingClientRect(), P = i ? x : E;
      p.current == null && (p.current = t.getThumbPercent(d.current) * P);
      let B = i ? $ : y;
      if ((i || c) && (B = -B), p.current += B, d.current != null && n.current) {
        const T = lt(p.current / P, 0, 1);
        t.setThumbPercent(d.current, T);
      }
    },
    onMoveEnd() {
      d.current != null && (t.setThumbDragging(d.current, !1), d.current = null);
    }
  });
  let b = R(void 0), h = (y, $, x, E) => {
    if (n.current && !e.isDisabled && t.values.every((P, B) => !t.isThumbDragging(B))) {
      let { height: P, width: B, top: T, left: g } = n.current.getBoundingClientRect(), M = i ? P : B, w = ((i ? E : x) - (i ? T : g)) / M;
      (o === "rtl" || i) && (w = 1 - w);
      let k = t.getPercentValue(w), K, A = t.values.findIndex((D) => k - D < 0);
      if (A === 0)
        K = A;
      else if (A === -1)
        K = t.values.length - 1;
      else {
        let D = t.values[A - 1], j = t.values[A];
        Math.abs(D - k) < Math.abs(j - k) ? K = A - 1 : K = A;
      }
      K >= 0 && t.isThumbEditable(K) ? (y.preventDefault(), d.current = K, t.setFocusedThumb(K), b.current = $, t.setThumbDragging(d.current, !0), t.setThumbValue(K, k), u(window, "mouseup", v, !1), u(window, "touchend", v, !1), u(window, "pointerup", v, !1)) : d.current = null;
    }
  }, v = (y) => {
    var $, x;
    ((x = y.pointerId) !== null && x !== void 0 ? x : ($ = y.changedTouches) === null || $ === void 0 ? void 0 : $[0].identifier) === b.current && (d.current != null && (t.setThumbDragging(d.current, !1), d.current = null), s(window, "mouseup", v, !1), s(window, "touchend", v, !1), s(window, "pointerup", v, !1));
  };
  return "htmlFor" in r && r.htmlFor && (delete r.htmlFor, r.onClick = () => {
    var y;
    (y = document.getElementById(Pl(t, 0))) === null || y === void 0 || y.focus(), Zl("keyboard");
  }), {
    labelProps: r,
    // The root element of the Slider will have role="group" to group together
    // all the thumb inputs in the Slider.  The label of the Slider will
    // be used to label the group.
    groupProps: {
      role: "group",
      ...a
    },
    trackProps: O({
      onMouseDown(y) {
        y.button !== 0 || y.altKey || y.ctrlKey || y.metaKey || h(y, void 0, y.clientX, y.clientY);
      },
      onPointerDown(y) {
        y.pointerType === "mouse" && (y.button !== 0 || y.altKey || y.ctrlKey || y.metaKey) || h(y, y.pointerId, y.clientX, y.clientY);
      },
      onTouchStart(y) {
        h(y, y.changedTouches[0].identifier, y.changedTouches[0].clientX, y.changedTouches[0].clientY);
      },
      style: {
        position: "relative",
        touchAction: "none"
      }
    }, m),
    outputProps: {
      htmlFor: t.values.map((y, $) => Pl(t, $)).join(" "),
      "aria-live": "off"
    }
  };
}
function o5(e, t) {
  let { index: n = 0, isRequired: r, validationState: a, isInvalid: i, trackRef: l, inputRef: o, orientation: u = t.orientation, name: s } = e, d = e.isDisabled || t.isDisabled, c = u === "vertical", { direction: p } = ie(), { addGlobalListener: m, removeGlobalListener: b } = _n(), h = Eo.get(t);
  var v;
  const { labelProps: y, fieldProps: $ } = Vr({
    ...e,
    id: Pl(t, n),
    "aria-labelledby": `${h.id} ${(v = e["aria-labelledby"]) !== null && v !== void 0 ? v : ""}`.trim()
  }), x = t.values[n], E = X(() => {
    o.current && pt(o.current);
  }, [
    o
  ]), P = t.focusedThumb === n;
  Y(() => {
    P && E();
  }, [
    P,
    E
  ]);
  let B = p === "rtl", T = R(null), { keyboardProps: g } = Za({
    onKeyDown(A) {
      let { getThumbMaxValue: D, getThumbMinValue: j, decrementThumb: H, incrementThumb: V, setThumbValue: z, setThumbDragging: I, pageSize: W } = t;
      if (!/^(PageUp|PageDown|Home|End)$/.test(A.key)) {
        A.continuePropagation();
        return;
      }
      switch (A.preventDefault(), I(n, !0), A.key) {
        case "PageUp":
          V(n, W);
          break;
        case "PageDown":
          H(n, W);
          break;
        case "Home":
          z(n, j(n));
          break;
        case "End":
          z(n, D(n));
          break;
      }
      I(n, !1);
    }
  }), { moveProps: M } = ql({
    onMoveStart() {
      T.current = null, t.setThumbDragging(n, !0);
    },
    onMove({ deltaX: A, deltaY: D, pointerType: j, shiftKey: H }) {
      const { getThumbPercent: V, setThumbPercent: z, decrementThumb: I, incrementThumb: W, step: te, pageSize: oe } = t;
      let { width: Ee, height: L } = l.current.getBoundingClientRect(), J = c ? L : Ee;
      if (T.current == null && (T.current = V(n) * J), j === "keyboard")
        A > 0 && B || A < 0 && !B || D > 0 ? I(n, H ? oe : te) : W(n, H ? oe : te);
      else {
        let se = c ? D : A;
        (c || B) && (se = -se), T.current += se, z(n, lt(T.current / J, 0, 1));
      }
    },
    onMoveEnd() {
      t.setThumbDragging(n, !1);
    }
  });
  t.setThumbEditable(n, !d);
  const { focusableProps: F } = gn(O(e, {
    onFocus: () => t.setFocusedThumb(n),
    onBlur: () => t.setFocusedThumb(void 0)
  }), o);
  let C = R(void 0), S = (A) => {
    E(), C.current = A, t.setThumbDragging(n, !0), m(window, "mouseup", w, !1), m(window, "touchend", w, !1), m(window, "pointerup", w, !1);
  }, w = (A) => {
    var D, j;
    ((j = A.pointerId) !== null && j !== void 0 ? j : (D = A.changedTouches) === null || D === void 0 ? void 0 : D[0].identifier) === C.current && (E(), t.setThumbDragging(n, !1), b(window, "mouseup", w, !1), b(window, "touchend", w, !1), b(window, "pointerup", w, !1));
  }, k = t.getThumbPercent(n);
  (c || p === "rtl") && (k = 1 - k);
  let K = d ? {} : O(g, M, {
    onMouseDown: (A) => {
      A.button !== 0 || A.altKey || A.ctrlKey || A.metaKey || S();
    },
    onPointerDown: (A) => {
      A.button !== 0 || A.altKey || A.ctrlKey || A.metaKey || S(A.pointerId);
    },
    onTouchStart: (A) => {
      S(A.changedTouches[0].identifier);
    }
  });
  return vn(o, x, (A) => {
    t.setThumbValue(n, A);
  }), {
    inputProps: O(F, $, {
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
        h["aria-describedby"],
        e["aria-describedby"]
      ].filter(Boolean).join(" "),
      "aria-details": [
        h["aria-details"],
        e["aria-details"]
      ].filter(Boolean).join(" "),
      onChange: (A) => {
        t.setThumbValue(n, parseFloat(A.target.value));
      }
    }),
    thumbProps: {
      ...K,
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
function u5(e, t, n) {
  let { labelProps: r, inputProps: a, isSelected: i, isPressed: l, isDisabled: o, isReadOnly: u } = bc(e, t, n);
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
let s5 = !1;
function Va() {
  return s5;
}
function oi(e) {
  return e && e.__esModule ? e.default : e;
}
const Co = /* @__PURE__ */ new WeakMap();
function wl(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Qp(e, t) {
  let n = Co.get(e);
  if (!n)
    throw new Error("Unknown grid");
  return `${n}-${wl(t)}`;
}
function eb(e, t, n) {
  let r = Co.get(e);
  if (!r)
    throw new Error("Unknown grid");
  return `${r}-${wl(t)}-${wl(n)}`;
}
function tb(e, t) {
  return [
    ...e.collection.rowHeaderColumnKeys
  ].map((n) => eb(e, t, n)).join(" ");
}
var Or = {}, nb = {};
nb = {
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
var rb = {};
rb = {
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
var ab = {};
ab = {
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
var ib = {};
ib = {
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
var lb = {};
lb = {
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
var ob = {};
ob = {
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
var ub = {};
ub = {
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
var sb = {};
sb = {
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
var db = {};
db = {
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
var cb = {};
cb = {
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
var fb = {};
fb = {
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
var mb = {};
mb = {
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
var pb = {};
pb = {
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
var bb = {};
bb = {
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
var hb = {};
hb = {
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
var vb = {};
vb = {
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
var gb = {};
gb = {
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
var $b = {};
$b = {
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
var yb = {};
yb = {
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
var xb = {};
xb = {
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
var Db = {};
Db = {
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
var Eb = {};
Eb = {
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
var Cb = {};
Cb = {
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
var Pb = {};
Pb = {
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
var wb = {};
wb = {
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
var Sb = {};
Sb = {
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
var Bb = {};
Bb = {
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
var kb = {};
kb = {
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
var Fb = {};
Fb = {
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
var Ab = {};
Ab = {
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
var Tb = {};
Tb = {
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
var Mb = {};
Mb = {
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
var Rb = {};
Rb = {
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
var Ib = {};
Ib = {
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
Or = {
  "ar-AE": nb,
  "bg-BG": rb,
  "cs-CZ": ab,
  "da-DK": ib,
  "de-DE": lb,
  "el-GR": ob,
  "en-US": ub,
  "es-ES": sb,
  "et-EE": db,
  "fi-FI": cb,
  "fr-FR": fb,
  "he-IL": mb,
  "hr-HR": pb,
  "hu-HU": bb,
  "it-IT": hb,
  "ja-JP": vb,
  "ko-KR": gb,
  "lt-LT": $b,
  "lv-LV": yb,
  "nb-NO": xb,
  "nl-NL": Db,
  "pl-PL": Eb,
  "pt-BR": Cb,
  "pt-PT": Pb,
  "ro-RO": wb,
  "ru-RU": Sb,
  "sk-SK": Bb,
  "sl-SI": kb,
  "sr-SP": Fb,
  "sv-SE": Ab,
  "tr-TR": Tb,
  "uk-UA": Mb,
  "zh-CN": Rb,
  "zh-TW": Ib
};
class d5 extends G0 {
  isCell(t) {
    return t.type === "cell" || t.type === "rowheader" || t.type === "column";
  }
  getKeyBelow(t) {
    let n = this.collection.getItem(t);
    if (n) {
      if (n.type === "column") {
        let r = At(Ce(n, this.collection));
        if (r)
          return r.key;
        let a = this.getFirstKey();
        if (a == null)
          return;
        let i = this.collection.getItem(a);
        return Wt(Ce(i, this.collection), n.index).key;
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
    for (let a of Ce(r, this.collection))
      if (a.type === "column")
        return a.key;
  }
  findPreviousColumnKey(t) {
    let n = this.findPreviousKey(t.key, (i) => i.type === "column");
    if (n != null)
      return n;
    let r = this.collection.headerRows[t.level], a = [
      ...Ce(r, this.collection)
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
      for (let u of Ce(o, this.collection)) {
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
function c5(e, t, n) {
  let { keyboardDelegate: r, isVirtualized: a, layout: i } = e, l = Un({
    usage: "search",
    sensitivity: "base"
  }), { direction: o } = ie(), u = t.selectionManager.disabledBehavior, s = N(() => r || new d5({
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
  ]), d = ce(e.id);
  Co.set(t, d);
  let { gridProps: c } = _y({
    ...e,
    id: d,
    keyboardDelegate: s
  }, t, n);
  a && (c["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), Va() && "expandedKeys" in t && (c.role = "treegrid");
  let { column: p, direction: m } = t.sortDescriptor || {}, b = De(/* @__PURE__ */ oi(Or), "@react-aria/table"), h = N(() => {
    var y;
    let $ = (y = t.collection.columns.find((x) => x.key === p)) === null || y === void 0 ? void 0 : y.textValue;
    return m && p ? b.format(`${m}Sort`, {
      columnName: $
    }) : void 0;
  }, [
    m,
    p,
    t.collection.columns
  ]), v = Ct(h);
  return ya(() => {
    Jt(h, "assertive", 500);
  }, [
    h
  ]), {
    gridProps: O(c, v, {
      // merge sort description with long press information
      "aria-describedby": [
        v["aria-describedby"],
        c["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function f5(e, t, n) {
  var r, a;
  let { node: i } = e, l = i.props.allowsSorting, { gridCellProps: o } = Fm({
    ...e,
    focusMode: "child"
  }, t, n), u = i.props.isSelectionCell && t.selectionManager.selectionMode === "single", { pressProps: s } = Ye({
    isDisabled: !l || u,
    onPress() {
      t.sort(i.key);
    },
    ref: n
  }), { focusableProps: d } = gn({}, n), c = null, p = ((r = t.sortDescriptor) === null || r === void 0 ? void 0 : r.column) === i.key, m = (a = t.sortDescriptor) === null || a === void 0 ? void 0 : a.direction;
  i.props.allowsSorting && !mr() && (c = p ? m : "none");
  let b = De(/* @__PURE__ */ oi(Or), "@react-aria/table"), h;
  l && (h = `${b.format("sortable")}`, p && m && mr() && (h = `${h}, ${b.format(m)}`));
  let v = Ct(h), y = t.collection.size === 0;
  return Y(() => {
    y && t.selectionManager.focusedKey === i.key && t.selectionManager.setFocusedKey(null);
  }, [
    y,
    t.selectionManager,
    i.key
  ]), {
    columnHeaderProps: {
      ...O(
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
      id: Qp(t, i.key),
      "aria-colspan": i.colspan && i.colspan > 1 ? i.colspan : null,
      "aria-sort": c
    }
  };
}
const ls = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function m5(e, t, n) {
  let { node: r, isVirtualized: a } = e, { rowProps: i, ...l } = Wy(e, t, n), { direction: o } = ie();
  a && !(Va() && "expandedKeys" in t) ? i["aria-rowindex"] = r.index + 1 + t.collection.headerRows.length : delete i["aria-rowindex"];
  let u = {};
  if (Va() && "expandedKeys" in t) {
    let m = t.keyMap.get(r.key);
    if (m != null) {
      var s, d, c;
      let b = ((s = m.props) === null || s === void 0 ? void 0 : s.UNSTABLE_childItems) || ((c = m.props) === null || c === void 0 || (d = c.children) === null || d === void 0 ? void 0 : d.length) > t.userColumnCount;
      u = {
        onKeyDown: (h) => {
          (h.key === ls.expand[o] && t.selectionManager.focusedKey === m.key && b && t.expandedKeys !== "all" && !t.expandedKeys.has(m.key) || h.key === ls.collapse[o] && t.selectionManager.focusedKey === m.key && b && (t.expandedKeys === "all" || t.expandedKeys.has(m.key))) && (t.toggleKey(m.key), h.stopPropagation());
        },
        "aria-expanded": b ? t.expandedKeys === "all" || t.expandedKeys.has(r.key) : void 0,
        "aria-level": m.level,
        "aria-posinset": m.indexOfType + 1,
        "aria-setsize": m.level > 1 ? Yt(t.keyMap.get(m == null ? void 0 : m.parentKey).childNodes).indexOfType + 1 : Yt(t.keyMap.get(t.collection.body.key).childNodes).indexOfType + 1
      };
    }
  }
  let p = l.hasAction ? Ul(r.props) : {};
  return {
    rowProps: {
      ...O(i, u, p),
      "aria-labelledby": tb(t, r.key)
    },
    ...l
  };
}
function p5(e, t, n) {
  let { node: r, isVirtualized: a } = e, i = {
    role: "row"
  };
  return a && !(Va() && "expandedKeys" in t) && (i["aria-rowindex"] = r.index + 1), {
    rowProps: i
  };
}
function b5(e, t, n) {
  let { gridCellProps: r, isPressed: a } = Fm(e, t, n), i = e.node.column.key;
  return t.collection.rowHeaderColumnKeys.has(i) && (r.role = "rowheader", r.id = eb(t, e.node.parentKey, i)), {
    gridCellProps: r,
    isPressed: a
  };
}
function h5(e, t) {
  let { key: n } = e;
  const { checkboxProps: r } = Am(e, t);
  return {
    checkboxProps: {
      ...r,
      "aria-labelledby": `${r.id} ${tb(t, n)}`
    }
  };
}
function v5(e) {
  let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
  return {
    checkboxProps: {
      "aria-label": De(/* @__PURE__ */ oi(Or), "@react-aria/table").format(r === "single" ? "select" : "selectAll"),
      isSelected: n,
      isDisabled: r !== "multiple" || e.collection.size === 0,
      isIndeterminate: !t && !n,
      onChange: () => e.selectionManager.toggleSelectAll()
    }
  };
}
function g5(e, t, n) {
  let { column: r, triggerRef: a, isDisabled: i, onResizeStart: l, onResize: o, onResizeEnd: u, "aria-label": s } = e;
  const d = De(/* @__PURE__ */ oi(Or), "@react-aria/table");
  let c = ce(), p = t.resizingColumn === r.key, m = R(p), b = R(null), h = R(!1), v = t.tableState.isKeyboardNavigationDisabled, { direction: y } = ie(), { keyboardProps: $ } = Za({
    onKeyDown: (I) => {
      v ? (I.key === "Escape" || I.key === "Enter" || I.key === " " || I.key === "Tab") && (I.preventDefault(), P(r)) : (I.continuePropagation(), I.key === "Enter" && x(r));
    }
  }), x = ve((I) => {
    m.current || (b.current = t.updateResizedColumns(I.key, t.getColumnWidth(I.key)), t.startResize(I.key), t.tableState.setKeyboardNavigationDisabled(!0), l == null || l(b.current)), m.current = !0;
  }), E = ve((I, W) => {
    let te = t.updateResizedColumns(I.key, W);
    o == null || o(te), b.current = te;
  }), P = ve((I) => {
    m.current && (b.current == null && (b.current = t.updateResizedColumns(I.key, t.getColumnWidth(I.key))), t.endResize(), t.tableState.setKeyboardNavigationDisabled(!1), u == null || u(b.current), m.current = !1, a != null && a.current && !h.current && ye(a.current)), b.current = null;
  });
  const B = R(0), { moveProps: T } = ql({
    onMoveStart() {
      B.current = t.getColumnWidth(r.key), x(r);
    },
    onMove(I) {
      let { deltaX: W, deltaY: te, pointerType: oe } = I;
      y === "rtl" && (W *= -1), oe === "keyboard" && (te !== 0 && W === 0 && (W = te * -1), W *= 10), W !== 0 && (B.current += W, E(r, B.current));
    },
    onMoveEnd(I) {
      let { pointerType: W } = I;
      B.current = 0, (W === "mouse" || W === "touch" && h.current) && P(r);
    }
  });
  let g = X((I) => {
    v && T.onKeyDown(I);
  }, [
    v,
    T
  ]), M = Math.floor(t.getColumnMinWidth(r.key)), F = Math.floor(t.getColumnMaxWidth(r.key));
  F === 1 / 0 && (F = Number.MAX_SAFE_INTEGER);
  let C = Math.floor(t.getColumnWidth(r.key)), S = Tr();
  S === "virtual" && typeof window < "u" && "ontouchstart" in window && (S = "touch");
  let w = (a == null ? void 0 : a.current) == null && (S === "keyboard" || S === "virtual") && !p ? d.format("resizerDescription") : void 0, k = Ct(w), K = {
    "aria-label": s,
    "aria-orientation": "horizontal",
    "aria-labelledby": `${c} ${Qp(t.tableState, r.key)}`,
    "aria-valuetext": d.format("columnSize", {
      value: C
    }),
    type: "range",
    min: M,
    max: F,
    value: C,
    ...k
  };
  const A = X(() => {
    n.current && ye(n.current);
  }, [
    n
  ]);
  let D = t.resizingColumn, j = R(null);
  Y(() => {
    if (j.current !== D && D != null && D === r.key) {
      h.current = document.activeElement === n.current, x(r);
      let I = setTimeout(() => A(), 0), W = setTimeout(A, 400);
      return () => {
        clearTimeout(I), clearTimeout(W);
      };
    }
    j.current = D;
  }, [
    D,
    r,
    A,
    n,
    x
  ]);
  let H = (I) => {
    let W = t.getColumnWidth(r.key), te = parseFloat(I.target.value);
    te > W ? te = W + 10 : te = W - 10, E(r, te);
  }, { pressProps: V } = Ye({
    onPressStart: (I) => {
      if (!(I.ctrlKey || I.altKey || I.metaKey || I.shiftKey || I.pointerType === "keyboard")) {
        if (I.pointerType === "virtual" && t.resizingColumn != null) {
          P(r);
          return;
        }
        A(), I.pointerType !== "virtual" && x(r);
      }
    },
    onPress: (I) => {
      (I.pointerType === "touch" && h.current || I.pointerType === "mouse") && t.resizingColumn != null && P(r);
    }
  }), { visuallyHiddenProps: z } = Ot();
  return {
    resizerProps: O($, {
      ...T,
      onKeyDown: g
    }, V, {
      style: {
        touchAction: "none"
      }
    }),
    inputProps: O(z, {
      id: c,
      onBlur: () => {
        P(r);
      },
      onChange: H,
      disabled: i
    }, K),
    isResizing: p
  };
}
function Nb() {
  return Uy();
}
const Kb = /* @__PURE__ */ new WeakMap();
function La(e, t, n) {
  return typeof t == "string" && (t = t.replace(/\s+/g, "")), `${Kb.get(e)}-${n}-${t}`;
}
function $5(e, t, n) {
  var r;
  let { key: a, isDisabled: i, shouldSelectOnPressUp: l } = e, { selectionManager: o, selectedKey: u } = t, s = a === u, d = i || t.isDisabled || t.disabledKeys.has(a), { itemProps: c, isPressed: p } = Wn({
    selectionManager: o,
    key: a,
    ref: n,
    isDisabled: d,
    shouldSelectOnPressUp: l,
    linkBehavior: "selection"
  }), m = La(t, a, "tab"), b = La(t, a, "tabpanel"), { tabIndex: h } = c, v = t.collection.getItem(a), y = q(v == null ? void 0 : v.props, {
    isLink: !!(!(v == null || (r = v.props) === null || r === void 0) && r.href),
    labelable: !0
  });
  return delete y.id, {
    tabProps: O(y, c, {
      id: m,
      "aria-selected": s,
      "aria-disabled": d || void 0,
      "aria-controls": s ? b : void 0,
      tabIndex: d ? void 0 : h,
      role: "tab"
    }),
    isSelected: s,
    isDisabled: d,
    isPressed: p
  };
}
function y5(e, t, n) {
  let r = Xl(n) ? void 0 : 0;
  var a;
  const i = La(t, (a = e.id) !== null && a !== void 0 ? a : t == null ? void 0 : t.selectedKey, "tabpanel"), l = Kt({
    ...e,
    id: i,
    "aria-labelledby": La(t, t == null ? void 0 : t.selectedKey, "tab")
  });
  return {
    tabPanelProps: O(l, {
      tabIndex: r,
      role: "tabpanel",
      "aria-describedby": e["aria-describedby"],
      "aria-details": e["aria-details"]
    })
  };
}
class x5 {
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
function D5(e, t, n) {
  let { orientation: r = "horizontal", keyboardActivation: a = "automatic" } = e, { collection: i, selectionManager: l, disabledKeys: o } = t, { direction: u } = ie(), s = N(() => new x5(i, u, r, o), [
    i,
    o,
    r,
    u
  ]), { collectionProps: d } = ni({
    ref: n,
    selectionManager: l,
    keyboardDelegate: s,
    selectOnFocus: a === "automatic",
    disallowEmptySelection: !0,
    scrollRef: n,
    linkBehavior: "selection"
  }), c = ce();
  Kb.set(t, c);
  let p = Kt({
    ...e,
    id: c
  });
  return {
    tabListProps: {
      ...O(d, p),
      role: "tablist",
      "aria-orientation": r,
      tabIndex: void 0
    }
  };
}
function E5(e) {
  return e && e.__esModule ? e.default : e;
}
const zb = /* @__PURE__ */ new WeakMap();
function C5(e, t, n) {
  let { direction: r } = ie(), a = e.keyboardDelegate || new yn({
    collection: t.collection,
    ref: n,
    orientation: "horizontal",
    direction: r,
    disabledKeys: t.disabledKeys
  }), { labelProps: i, fieldProps: l, descriptionProps: o, errorMessageProps: u } = en({
    ...e,
    labelElementType: "span"
  }), { gridProps: s } = Tm({
    ...e,
    ...l,
    keyboardDelegate: a,
    shouldFocusWrap: !0,
    linkBehavior: "override"
  }, t, n), [d, c] = G(!1), { focusWithinProps: p } = vt({
    onFocusWithinChange: c
  }), m = q(e), b = R(t.collection.size);
  return Y(() => {
    n.current && b.current > 0 && t.collection.size === 0 && d && n.current.focus(), b.current = t.collection.size;
  }, [
    t.collection.size,
    d,
    n
  ]), zb.set(t, {
    onRemove: e.onRemove
  }), {
    gridProps: O(s, m, {
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
var Vb = {}, Lb = {};
Lb = {
  removeButtonLabel: "إزالة",
  removeDescription: "اضغط على مفتاح DELETE لإزالة علامة."
};
var Ob = {};
Ob = {
  removeButtonLabel: "Премахване",
  removeDescription: "Натиснете Delete, за да премахнете маркера."
};
var jb = {};
jb = {
  removeButtonLabel: "Odebrat",
  removeDescription: "Stisknutím klávesy Delete odeberete značku."
};
var Hb = {};
Hb = {
  removeButtonLabel: "Fjern",
  removeDescription: "Tryk på Slet for at fjerne tag."
};
var _b = {};
_b = {
  removeButtonLabel: "Entfernen",
  removeDescription: "Auf „Löschen“ drücken, um das Tag zu entfernen."
};
var Ub = {};
Ub = {
  removeButtonLabel: "Κατάργηση",
  removeDescription: "Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."
};
var Wb = {};
Wb = {
  removeDescription: "Press Delete to remove tag.",
  removeButtonLabel: "Remove"
};
var Gb = {};
Gb = {
  removeButtonLabel: "Quitar",
  removeDescription: "Pulse Eliminar para quitar la etiqueta."
};
var Zb = {};
Zb = {
  removeButtonLabel: "Eemalda",
  removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete."
};
var qb = {};
qb = {
  removeButtonLabel: "Poista",
  removeDescription: "Poista tunniste painamalla Poista-painiketta."
};
var Yb = {};
Yb = {
  removeButtonLabel: "Supprimer",
  removeDescription: "Appuyez sur Supprimer pour supprimer l’étiquette."
};
var Jb = {};
Jb = {
  removeButtonLabel: "הסר",
  removeDescription: "לחץ על מחק כדי להסיר תג."
};
var Xb = {};
Xb = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Delete za uklanjanje oznake."
};
var Qb = {};
Qb = {
  removeButtonLabel: "Eltávolítás",
  removeDescription: "Nyomja meg a Delete billentyűt a címke eltávolításához."
};
var e3 = {};
e3 = {
  removeButtonLabel: "Rimuovi",
  removeDescription: "Premi Elimina per rimuovere il tag."
};
var t3 = {};
t3 = {
  removeButtonLabel: "削除",
  removeDescription: "タグを削除するには、Delete キーを押します。"
};
var n3 = {};
n3 = {
  removeButtonLabel: "제거",
  removeDescription: "태그를 제거하려면 Delete 키를 누르십시오."
};
var r3 = {};
r3 = {
  removeButtonLabel: "Pašalinti",
  removeDescription: "Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."
};
var a3 = {};
a3 = {
  removeButtonLabel: "Noņemt",
  removeDescription: "Nospiediet Delete [Dzēst], lai noņemtu tagu."
};
var i3 = {};
i3 = {
  removeButtonLabel: "Fjern",
  removeDescription: "Trykk på Slett for å fjerne taggen."
};
var l3 = {};
l3 = {
  removeButtonLabel: "Verwijderen",
  removeDescription: "Druk op Verwijderen om de tag te verwijderen."
};
var o3 = {};
o3 = {
  removeButtonLabel: "Usuń",
  removeDescription: "Naciśnij Usuń, aby usunąć znacznik."
};
var u3 = {};
u3 = {
  removeButtonLabel: "Remover",
  removeDescription: "Pressione Delete para remover a tag."
};
var s3 = {};
s3 = {
  removeButtonLabel: "Eliminar",
  removeDescription: "Prima Delete para eliminar a tag."
};
var d3 = {};
d3 = {
  removeButtonLabel: "Îndepărtaţi",
  removeDescription: "Apăsați pe Delete (Ștergere) pentru a elimina eticheta."
};
var c3 = {};
c3 = {
  removeButtonLabel: "Удалить",
  removeDescription: "Нажмите DELETE, чтобы удалить тег."
};
var f3 = {};
f3 = {
  removeButtonLabel: "Odstrániť",
  removeDescription: "Ak chcete odstrániť značku, stlačte kláves Delete."
};
var m3 = {};
m3 = {
  removeButtonLabel: "Odstrani",
  removeDescription: "Pritisnite Delete, da odstranite oznako."
};
var p3 = {};
p3 = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Obriši da biste uklonili oznaku."
};
var b3 = {};
b3 = {
  removeButtonLabel: "Ta bort",
  removeDescription: "Tryck på Radera för att ta bort taggen."
};
var h3 = {};
h3 = {
  removeButtonLabel: "Kaldır",
  removeDescription: "Etiketi kaldırmak için Sil tuşuna basın."
};
var v3 = {};
v3 = {
  removeButtonLabel: "Вилучити",
  removeDescription: "Натисніть Delete, щоб вилучити тег."
};
var g3 = {};
g3 = {
  removeButtonLabel: "删除",
  removeDescription: "按下“删除”以删除标记。"
};
var $3 = {};
$3 = {
  removeButtonLabel: "移除",
  removeDescription: "按 Delete 鍵以移除標記。"
};
Vb = {
  "ar-AE": Lb,
  "bg-BG": Ob,
  "cs-CZ": jb,
  "da-DK": Hb,
  "de-DE": _b,
  "el-GR": Ub,
  "en-US": Wb,
  "es-ES": Gb,
  "et-EE": Zb,
  "fi-FI": qb,
  "fr-FR": Yb,
  "he-IL": Jb,
  "hr-HR": Xb,
  "hu-HU": Qb,
  "it-IT": e3,
  "ja-JP": t3,
  "ko-KR": n3,
  "lt-LT": r3,
  "lv-LV": a3,
  "nb-NO": i3,
  "nl-NL": l3,
  "pl-PL": o3,
  "pt-BR": u3,
  "pt-PT": s3,
  "ro-RO": d3,
  "ru-RU": c3,
  "sk-SK": f3,
  "sl-SI": m3,
  "sr-SP": p3,
  "sv-SE": b3,
  "tr-TR": h3,
  "uk-UA": v3,
  "zh-CN": g3,
  "zh-TW": $3
};
function P5(e, t, n) {
  let { item: r } = e, a = De(/* @__PURE__ */ E5(Vb), "@react-aria/tag"), i = ce(), { onRemove: l } = zb.get(t) || {}, { rowProps: o, gridCellProps: u, ...s } = Mm({
    node: r
  }, t, n);
  delete o.onKeyDownCapture;
  let { descriptionProps: d, ...c } = s, p = (x) => {
    (x.key === "Delete" || x.key === "Backspace") && (x.preventDefault(), t.selectionManager.isSelected(r.key) ? l == null || l(new Set(t.selectionManager.selectedKeys)) : l == null || l(/* @__PURE__ */ new Set([
      r.key
    ])));
  }, m = Tr();
  m === "virtual" && typeof window < "u" && "ontouchstart" in window && (m = "pointer");
  let b = l && (m === "keyboard" || m === "virtual") ? a.format("removeDescription") : "", h = Ct(b), v = r.key === t.selectionManager.focusedKey, y = q(r.props), $ = Ul(r.props);
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
    rowProps: O(o, y, $, {
      tabIndex: v || t.selectionManager.focusedKey == null ? 0 : -1,
      onKeyDown: l ? p : void 0,
      "aria-describedby": h["aria-describedby"]
    }),
    gridCellProps: O(u, {
      "aria-errormessage": e["aria-errormessage"],
      "aria-label": e["aria-label"]
    }),
    ...c,
    allowsRemoving: !!l
  };
}
function w5(e, t) {
  let n = q(e, {
    labelable: !0
  }), { hoverProps: r } = ge({
    onHoverStart: () => t == null ? void 0 : t.open(!0),
    onHoverEnd: () => t == null ? void 0 : t.close()
  });
  return {
    tooltipProps: O(n, r, {
      role: "tooltip"
    })
  };
}
function Ln(e, t, n) {
  return t != null && e.compare(t) < 0 || n != null && e.compare(n) > 0;
}
function Sl(e, t, n, r, a) {
  let i = {};
  for (let o in t)
    i[o] = Math.floor(t[o] / 2), i[o] > 0 && t[o] % 2 === 0 && i[o]--;
  let l = dn(e, t, n).subtract(i);
  return yr(e, l, t, n, r, a);
}
function dn(e, t, n, r, a) {
  let i = e;
  return t.years ? i = w$(e) : t.months ? i = bn(e) : t.weeks && (i = br(e, n)), yr(e, i, t, n, r, a);
}
function Bl(e, t, n, r, a) {
  let i = {
    ...t
  };
  t.days ? i.days-- : t.weeks ? i.weeks-- : t.months ? i.months-- : t.years && i.years--;
  let l = dn(e, t, n).subtract(i);
  return yr(e, l, t, n, r, a);
}
function yr(e, t, n, r, a, i) {
  return a && e.compare(a) >= 0 && (t = no(t, dn(je(a), n, r))), i && e.compare(i) <= 0 && (t = to(t, Bl(je(i), n, r))), t;
}
function _t(e, t, n) {
  return t && (e = no(e, je(t))), n && (e = to(e, je(n))), e;
}
function y3(e, t, n) {
  if (!n)
    return e;
  for (; e.compare(t) >= 0 && n(e); )
    e = e.subtract({
      days: 1
    });
  if (e.compare(t) >= 0)
    return e;
}
function x3(e) {
  let t = N(() => new It(e.locale), [
    e.locale
  ]), n = N(() => t.resolvedOptions(), [
    t
  ]), { locale: r, createCalendar: a, visibleDuration: i = {
    months: 1
  }, minValue: l, maxValue: o, selectionAlignment: u, isDateUnavailable: s, pageBehavior: d = "visible" } = e, c = N(() => a(n.calendar), [
    a,
    n.calendar
  ]), [p, m] = Ie(e.value, e.defaultValue, e.onChange), b = N(() => p ? xe(je(p), c) : null, [
    p,
    c
  ]), h = N(() => p && "timeZone" in p ? p.timeZone : n.timeZone, [
    p,
    n.timeZone
  ]), v = N(() => e.focusedValue ? _t(xe(je(e.focusedValue), c), l, o) : void 0, [
    e.focusedValue,
    c,
    l,
    o
  ]), y = N(() => _t(e.defaultFocusedValue ? xe(je(e.defaultFocusedValue), c) : b || xe(Ya(h), c), l, o), [
    e.defaultFocusedValue,
    b,
    h,
    c,
    l,
    o
  ]), [$, x] = Ie(v, y, e.onFocusChange), [E, P] = G(() => {
    switch (u) {
      case "start":
        return dn($, i, r, l, o);
      case "end":
        return Bl($, i, r, l, o);
      case "center":
      default:
        return Sl($, i, r, l, o);
    }
  }), [B, T] = G(e.autoFocus || !1), g = N(() => {
    let D = {
      ...i
    };
    return D.days ? D.days-- : D.days = -1, E.add(D);
  }, [
    E,
    i
  ]), [M, F] = G(c.identifier);
  if (c.identifier !== M) {
    let D = xe($, c);
    P(Sl(D, i, r, l, o)), x(D), F(c.identifier);
  }
  Ln($, l, o) ? x(_t($, l, o)) : $.compare(E) < 0 ? P(Bl($, i, r, l, o)) : $.compare(g) > 0 && P(dn($, i, r, l, o));
  function C(D) {
    D = _t(D, l, o), x(D);
  }
  function S(D) {
    if (!e.isDisabled && !e.isReadOnly) {
      if (D = _t(D, l, o), D = y3(D, E, s), !D)
        return;
      D = xe(D, (p == null ? void 0 : p.calendar) || new He()), p && "hour" in p ? m(p.set(D)) : m(D);
    }
  }
  let w = N(() => b ? s && s(b) ? !0 : Ln(b, l, o) : !1, [
    b,
    s,
    l,
    o
  ]), k = e.isInvalid || e.validationState === "invalid" || w, K = k ? "invalid" : null, A = N(() => d === "visible" ? i : Zi(i), [
    d,
    i
  ]);
  return {
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    value: b,
    setValue: S,
    visibleRange: {
      start: E,
      end: g
    },
    minValue: l,
    maxValue: o,
    focusedDate: $,
    timeZone: h,
    validationState: K,
    isValueInvalid: k,
    setFocusedDate(D) {
      C(D), T(!0);
    },
    focusNextDay() {
      C($.add({
        days: 1
      }));
    },
    focusPreviousDay() {
      C($.subtract({
        days: 1
      }));
    },
    focusNextRow() {
      i.days ? this.focusNextPage() : (i.weeks || i.months || i.years) && C($.add({
        weeks: 1
      }));
    },
    focusPreviousRow() {
      i.days ? this.focusPreviousPage() : (i.weeks || i.months || i.years) && C($.subtract({
        weeks: 1
      }));
    },
    focusNextPage() {
      let D = E.add(A);
      x(_t($.add(A), l, o)), P(dn(yr($, D, A, r, l, o), A, r));
    },
    focusPreviousPage() {
      let D = E.subtract(A);
      x(_t($.subtract(A), l, o)), P(dn(yr($, D, A, r, l, o), A, r));
    },
    focusSectionStart() {
      i.days ? C(E) : i.weeks ? C(br($, r)) : (i.months || i.years) && C(bn($));
    },
    focusSectionEnd() {
      i.days ? C(g) : i.weeks ? C(k$($, r)) : (i.months || i.years) && C(ka($));
    },
    focusNextSection(D) {
      if (!D && !i.days) {
        C($.add(Zi(i)));
        return;
      }
      i.days ? this.focusNextPage() : i.weeks ? C($.add({
        months: 1
      })) : (i.months || i.years) && C($.add({
        years: 1
      }));
    },
    focusPreviousSection(D) {
      if (!D && !i.days) {
        C($.subtract(Zi(i)));
        return;
      }
      i.days ? this.focusPreviousPage() : i.weeks ? C($.subtract({
        months: 1
      })) : (i.months || i.years) && C($.subtract({
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
    setFocused: T,
    isInvalid(D) {
      return Ln(D, l, o);
    },
    isSelected(D) {
      return b != null && Be(D, b) && !this.isCellDisabled(D) && !this.isCellUnavailable(D);
    },
    isCellFocused(D) {
      return B && $ && Be(D, $);
    },
    isCellDisabled(D) {
      return e.isDisabled || D.compare(E) < 0 || D.compare(g) > 0 || this.isInvalid(D, l, o);
    },
    isCellUnavailable(D) {
      return e.isDateUnavailable && e.isDateUnavailable(D);
    },
    isPreviousVisibleRangeInvalid() {
      let D = E.subtract({
        days: 1
      });
      return Be(D, E) || this.isInvalid(D, l, o);
    },
    isNextVisibleRangeInvalid() {
      let D = g.add({
        days: 1
      });
      return Be(D, g) || this.isInvalid(D, l, o);
    },
    getDatesInWeek(D, j = E) {
      let H = j.add({
        weeks: D
      }), V = [];
      H = br(H, r);
      let z = Ql(H, r);
      for (let I = 0; I < z; I++)
        V.push(null);
      for (; V.length < 7; ) {
        V.push(H);
        let I = H.add({
          days: 1
        });
        if (Be(H, I))
          break;
        H = I;
      }
      for (; V.length < 7; )
        V.push(null);
      return V;
    }
  };
}
function Zi(e) {
  let t = {
    ...e
  };
  for (let n in e)
    t[n] = 1;
  return t;
}
function S5(e) {
  let { value: t, defaultValue: n, onChange: r, createCalendar: a, locale: i, visibleDuration: l = {
    months: 1
  }, minValue: o, maxValue: u, ...s } = e, [d, c] = Ie(t, n || null, r), [p, m] = G(null), b = "center";
  if (d && d.start && d.end) {
    let j = Sl(je(d.start), l, i, o, u).add(l).subtract({
      days: 1
    });
    d.end.compare(j) > 0 && (b = "start");
  }
  let h = R(null), [v, y] = G(null), $ = N(() => no(o, v == null ? void 0 : v.start), [
    o,
    v
  ]), x = N(() => to(u, v == null ? void 0 : v.end), [
    u,
    v
  ]), E = x3({
    ...s,
    value: d && d.start,
    createCalendar: a,
    locale: i,
    visibleDuration: l,
    minValue: $,
    maxValue: x,
    selectionAlignment: b
  }), P = (D) => {
    D && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (h.current = {
      start: us(D, E, -1),
      end: us(D, E, 1)
    }, y(h.current)) : (h.current = null, y(null));
  }, [B, T] = G(E.visibleRange);
  (!ul(E.visibleRange.start, B.start) || !ul(E.visibleRange.end, B.end)) && (P(p), T(E.visibleRange));
  let g = (D) => {
    D ? (m(D), P(D)) : (m(null), P(null));
  }, M = p ? qi(p, E.focusedDate) : d && qi(d.start, d.end), F = (D) => {
    if (!e.isReadOnly && (D = _t(D, $, x), D = y3(D, E.visibleRange.start, e.isDateUnavailable), !!D))
      if (!p)
        g(D);
      else {
        let j = qi(p, D);
        c({
          start: os(j.start, d == null ? void 0 : d.start),
          end: os(j.end, d == null ? void 0 : d.end)
        }), g(null);
      }
  }, [C, S] = G(!1), { isDateUnavailable: w } = e, k = N(() => !d || p ? !1 : w && (w(d.start) || w(d.end)) ? !0 : Ln(d.start, o, u) || Ln(d.end, o, u), [
    w,
    d,
    p,
    o,
    u
  ]), K = e.isInvalid || e.validationState === "invalid" || k;
  return {
    ...E,
    value: d,
    setValue: c,
    anchorDate: p,
    setAnchorDate: g,
    highlightedRange: M,
    validationState: K ? "invalid" : null,
    isValueInvalid: K,
    selectFocusedDate() {
      F(E.focusedDate);
    },
    selectDate: F,
    highlightDate(D) {
      p && E.setFocusedDate(D);
    },
    isSelected(D) {
      return M && D.compare(M.start) >= 0 && D.compare(M.end) <= 0 && !E.isCellDisabled(D) && !E.isCellUnavailable(D);
    },
    isInvalid(D) {
      var j, H;
      return E.isInvalid(D) || Ln(D, (j = h.current) === null || j === void 0 ? void 0 : j.start, (H = h.current) === null || H === void 0 ? void 0 : H.end);
    },
    isDragging: C,
    setDragging: S
  };
}
function qi(e, t) {
  return !e || !t ? null : (t.compare(e) < 0 && ([e, t] = [
    t,
    e
  ]), {
    start: je(e),
    end: je(t)
  });
}
function os(e, t) {
  return e = xe(e, (t == null ? void 0 : t.calendar) || new He()), t && "hour" in t ? t.set(e) : e;
}
function us(e, t, n) {
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
function B5(e = {}) {
  let [t, n] = Ie(e.value, e.defaultValue || [], e.onChange), r = !!e.isRequired && t.length === 0, a = R(/* @__PURE__ */ new Map()), i = gt({
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
      d.isInvalid ? c.set(s, d) : c.delete(s), a.current = c, i.updateValidation($r(...c.values()));
    },
    validationState: (o = e.validationState) !== null && o !== void 0 ? o : l ? "invalid" : null,
    isInvalid: l,
    isRequired: r
  };
}
class mt extends Set {
  constructor(t, n, r) {
    super(t), t instanceof mt ? (this.anchorKey = n || t.anchorKey, this.currentKey = r || t.currentKey) : (this.anchorKey = n, this.currentKey = r);
  }
}
function k5(e, t) {
  if (e.size !== t.size)
    return !1;
  for (let n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Po(e) {
  let { selectionMode: t = "none", disallowEmptySelection: n, allowDuplicateSelectionEvents: r, selectionBehavior: a = "toggle", disabledBehavior: i = "all" } = e, l = R(!1), [, o] = G(!1), u = R(null), s = R(null), [, d] = G(null), c = N(() => ss(e.selectedKeys), [
    e.selectedKeys
  ]), p = N(() => ss(e.defaultSelectedKeys, new mt()), [
    e.defaultSelectedKeys
  ]), [m, b] = Ie(c, p, e.onSelectionChange), h = N(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), [v, y] = G(a);
  a === "replace" && v === "toggle" && typeof m == "object" && m.size === 0 && y("replace");
  let $ = R(a);
  return Y(() => {
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
    setFocusedKey(x, E = "first") {
      u.current = x, s.current = E, d(x);
    },
    selectedKeys: m,
    setSelectedKeys(x) {
      (r || !k5(x, m)) && b(x);
    },
    disabledKeys: h,
    disabledBehavior: i
  };
}
function ss(e, t) {
  return e ? e === "all" ? "all" : new mt(e) : t;
}
class wo {
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
      (!t || r && Wi(this.collection, r, t) < 0) && (t = r);
    }
    return t == null ? void 0 : t.key;
  }
  get lastSelectedKey() {
    let t = null;
    for (let n of this.state.selectedKeys) {
      let r = this.collection.getItem(n);
      (!t || r && Wi(this.collection, r, t) > 0) && (t = r);
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
      n = new mt([
        t
      ], t, t);
    else {
      let r = this.state.selectedKeys, a = r.anchorKey || t;
      n = new mt(r, a, t);
      for (let i of this.getKeyRange(a, r.currentKey || t))
        n.delete(i);
      for (let i of this.getKeyRange(t, a))
        this.canSelectItem(i) && n.add(i);
    }
    this.state.setSelectedKeys(n);
  }
  getKeyRange(t, n) {
    let r = this.collection.getItem(t), a = this.collection.getItem(n);
    return r && a ? Wi(this.collection, r, a) <= 0 ? this.getKeyRangeInternal(t, n) : this.getKeyRangeInternal(n, t) : [];
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
    let n = new mt(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), !(this.disallowEmptySelection && n.size === 0) && this.state.setSelectedKeys(n);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(t) {
    if (this.selectionMode === "none" || (t = this.getKey(t), t == null))
      return;
    let n = this.canSelectItem(t) ? new mt([
      t
    ], t, t) : new mt();
    this.state.setSelectedKeys(n);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(t) {
    if (this.selectionMode === "none")
      return;
    let n = new mt();
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
          a.type === "item" && t.push(r), a.hasChildNodes && (this.allowsCellSelection || a.type !== "item") && n(At(Ce(a, this.collection)).key);
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
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new mt());
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
class kl {
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
function ui(e) {
  let { filter: t } = e, n = Po(e), r = N(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), a = X((s) => t ? new kl(t(s)) : new kl(s), [
    t
  ]), i = N(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [
    e.suppressTextValueWarning
  ]), l = ho(e, a, i), o = N(() => new wo(l, n), [
    l,
    n
  ]);
  const u = R(null);
  return Y(() => {
    if (n.focusedKey != null && !l.getItem(n.focusedKey)) {
      const s = u.current.getItem(n.focusedKey), d = [
        ...u.current.getKeys()
      ].map((h) => {
        const v = u.current.getItem(h);
        return v.type === "item" ? v : null;
      }).filter((h) => h !== null), c = [
        ...l.getKeys()
      ].map((h) => {
        const v = l.getItem(h);
        return v.type === "item" ? v : null;
      }).filter((h) => h !== null), p = d.length - c.length;
      let m = Math.min(p > 1 ? Math.max(s.index - p + 1, 0) : s.index, c.length - 1), b;
      for (; m >= 0; ) {
        if (!o.isDisabled(c[m].key)) {
          b = c[m];
          break;
        }
        m < c.length - 1 ? m++ : (m > s.index && (m = s.index), m--);
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
function So(e) {
  var t;
  let [n, r] = Ie(e.selectedKey, (t = e.defaultSelectedKey) !== null && t !== void 0 ? t : null, e.onSelectionChange), a = N(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: i, disabledKeys: l, selectionManager: o } = ui({
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
function xn(e) {
  let [t, n] = Ie(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const r = X(() => {
    n(!0);
  }, [
    n
  ]), a = X(() => {
    n(!1);
  }, [
    n
  ]), i = X(() => {
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
function F5(e) {
  var t, n;
  let { defaultFilter: r, menuTrigger: a = "input", allowsEmptyCollection: i = !1, allowsCustomValue: l, shouldCloseOnBlur: o = !0 } = e, [u, s] = G(!1), [d, c] = G(!1), [p, m] = G(null), b = (le) => {
    e.onSelectionChange && e.onSelectionChange(le), le === $ && (te(), z());
  };
  var h;
  let { collection: v, selectionManager: y, selectedKey: $, setSelectedKey: x, selectedItem: E, disabledKeys: P } = So({
    ...e,
    onSelectionChange: b,
    items: (h = e.items) !== null && h !== void 0 ? h : e.defaultItems
  });
  var B, T;
  let [g, M] = Ie(e.inputValue, (T = (B = e.defaultInputValue) !== null && B !== void 0 ? B : (t = v.getItem($)) === null || t === void 0 ? void 0 : t.textValue) !== null && T !== void 0 ? T : "", e.onInputChange), F = v, C = N(() => (
    // No default filter if items are controlled.
    e.items != null || !r ? v : A5(v, g, r)
  ), [
    v,
    g,
    r,
    e.items
  ]), [S, w] = G(C), k = R("focus"), A = xn({
    ...e,
    onOpenChange: (le) => {
      e.onOpenChange && e.onOpenChange(le, le ? k.current : void 0), y.setFocused(le), le || y.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), D = (le = null, be) => {
    let Me = be === "manual" || be === "focus" && a === "focus";
    (i || C.size > 0 || Me && F.size > 0 || e.items) && (Me && !A.isOpen && e.items === void 0 && s(!0), k.current = be, m(le), A.open());
  }, j = (le = null, be) => {
    let Me = be === "manual" || be === "focus" && a === "focus";
    !(i || C.size > 0 || Me && F.size > 0 || e.items) && !A.isOpen || (Me && !A.isOpen && e.items === void 0 && s(!0), A.isOpen || (k.current = be), V(le));
  }, H = X(() => {
    w(u ? F : C);
  }, [
    u,
    F,
    C
  ]), V = X((le = null) => {
    A.isOpen && H(), m(le), A.toggle();
  }, [
    A,
    H
  ]), z = X(() => {
    A.isOpen && (H(), A.close());
  }, [
    A,
    H
  ]), [I, W] = G(g), te = () => {
    var le, be;
    let Me = (be = (le = v.getItem($)) === null || le === void 0 ? void 0 : le.textValue) !== null && be !== void 0 ? be : "";
    W(Me), M(Me);
  };
  var oe, Ee;
  let L = R((Ee = (oe = e.selectedKey) !== null && oe !== void 0 ? oe : e.defaultSelectedKey) !== null && Ee !== void 0 ? Ee : null);
  var J;
  let se = R((J = (n = v.getItem($)) === null || n === void 0 ? void 0 : n.textValue) !== null && J !== void 0 ? J : "");
  Y(() => {
    var le;
    d && (C.size > 0 || i) && !A.isOpen && g !== I && a !== "manual" && D(null, "input"), !u && !i && A.isOpen && C.size === 0 && z(), $ != null && $ !== L.current && z(), g !== I && (y.setFocusedKey(null), s(!1), g === "" && (e.inputValue === void 0 || e.selectedKey === void 0) && x(null)), $ !== L.current && (e.inputValue === void 0 || e.selectedKey === void 0) ? te() : I !== g && W(g);
    var be;
    let Me = (be = (le = v.getItem($)) === null || le === void 0 ? void 0 : le.textValue) !== null && be !== void 0 ? be : "";
    !d && $ != null && e.inputValue === void 0 && $ === L.current && se.current !== Me && (W(Me), M(Me)), L.current = $, se.current = Me;
  });
  let $e = gt({
    ...e,
    value: N(() => ({
      inputValue: g,
      selectedKey: $
    }), [
      g,
      $
    ])
  }), ne = () => {
    l && $ == null ? et() : Cn();
  }, et = () => {
    L.current = null, x(null), z();
  }, Cn = () => {
    if (e.selectedKey !== void 0 && e.inputValue !== void 0) {
      var le;
      e.onSelectionChange($);
      var be;
      let Me = (be = (le = v.getItem($)) === null || le === void 0 ? void 0 : le.textValue) !== null && be !== void 0 ? be : "";
      W(Me), z();
    } else
      te(), z();
  };
  const Zn = () => {
    if (l) {
      var le, be;
      const Me = (be = (le = v.getItem($)) === null || le === void 0 ? void 0 : le.textValue) !== null && be !== void 0 ? be : "";
      g === Me ? Cn() : et();
    } else
      Cn();
  };
  let Xr = () => {
    A.isOpen && y.focusedKey != null ? $ === y.focusedKey ? Cn() : x(y.focusedKey) : Zn();
  }, qn = R(g), Di = (le) => {
    le ? (qn.current = g, a === "focus" && D(null, "focus")) : (o && Zn(), g !== qn.current && $e.commitValidation()), c(le);
  }, Ei = N(() => A.isOpen ? u ? F : C : S, [
    A.isOpen,
    F,
    C,
    u,
    S
  ]);
  return {
    ...$e,
    ...A,
    focusStrategy: p,
    toggle: j,
    open: D,
    close: Zn,
    selectionManager: y,
    selectedKey: $,
    setSelectedKey: x,
    disabledKeys: P,
    isFocused: d,
    setFocused: Di,
    selectedItem: E,
    collection: Ei,
    inputValue: g,
    setInputValue: M,
    commit: Xr,
    revert: ne
  };
}
function A5(e, t, n) {
  return new kl(D3(e, e, t, n));
}
function D3(e, t, n, r) {
  let a = [];
  for (let i of t)
    if (i.type === "section" && i.hasChildNodes) {
      let l = D3(e, Ce(i, e), n, r);
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
var E3 = {};
E3 = {
  rangeOverflow: (e) => `يجب أن تكون القيمة ${e.maxValue} أو قبل ذلك.`,
  rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
  rangeUnderflow: (e) => `يجب أن تكون القيمة ${e.minValue} أو بعد ذلك.`,
  unavailableDate: "البيانات المحددة غير متاحة."
};
var C3 = {};
C3 = {
  rangeOverflow: (e) => `Стойността трябва да е ${e.maxValue} или по-ранна.`,
  rangeReversed: "Началната дата трябва да е преди крайната.",
  rangeUnderflow: (e) => `Стойността трябва да е ${e.minValue} или по-късно.`,
  unavailableDate: "Избраната дата не е налична."
};
var P3 = {};
P3 = {
  rangeOverflow: (e) => `Hodnota musí být ${e.maxValue} nebo dřívější.`,
  rangeReversed: "Datum zahájení musí předcházet datu ukončení.",
  rangeUnderflow: (e) => `Hodnota musí být ${e.minValue} nebo pozdější.`,
  unavailableDate: "Vybrané datum není k dispozici."
};
var w3 = {};
w3 = {
  rangeOverflow: (e) => `Værdien skal være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen skal være før slutdatoen.",
  rangeUnderflow: (e) => `Værdien skal være ${e.minValue} eller nyere.`,
  unavailableDate: "Den valgte dato er ikke tilgængelig."
};
var S3 = {};
S3 = {
  rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder früher sein.`,
  rangeReversed: "Das Anfangsdatum muss vor dem Enddatum liegen.",
  rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder später sein.`,
  unavailableDate: "Das ausgewählte Datum ist nicht verfügbar."
};
var B3 = {};
B3 = {
  rangeOverflow: (e) => `Η τιμή πρέπει να είναι ${e.maxValue} ή παλαιότερη.`,
  rangeReversed: "Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
  rangeUnderflow: (e) => `Η τιμή πρέπει να είναι ${e.minValue} ή μεταγενέστερη.`,
  unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη."
};
var k3 = {};
k3 = {
  rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
  rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
  rangeReversed: "Start date must be before end date.",
  unavailableDate: "Selected date unavailable."
};
var F3 = {};
F3 = {
  rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
  rangeReversed: "La fecha de inicio debe ser anterior a la fecha de finalización.",
  rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
  unavailableDate: "Fecha seleccionada no disponible."
};
var A3 = {};
A3 = {
  rangeOverflow: (e) => `Väärtus peab olema ${e.maxValue} või varasem.`,
  rangeReversed: "Alguskuupäev peab olema enne lõppkuupäeva.",
  rangeUnderflow: (e) => `Väärtus peab olema ${e.minValue} või hilisem.`,
  unavailableDate: "Valitud kuupäev pole saadaval."
};
var T3 = {};
T3 = {
  rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sitä aikaisempi.`,
  rangeReversed: "Aloituspäivän on oltava ennen lopetuspäivää.",
  rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sitä myöhäisempi.`,
  unavailableDate: "Valittu päivämäärä ei ole käytettävissä."
};
var M3 = {};
M3 = {
  rangeOverflow: (e) => `La valeur doit être ${e.maxValue} ou antérieure.`,
  rangeReversed: "La date de début doit être antérieure à la date de fin.",
  rangeUnderflow: (e) => `La valeur doit être ${e.minValue} ou ultérieure.`,
  unavailableDate: "La date sélectionnée n’est pas disponible."
};
var R3 = {};
R3 = {
  rangeOverflow: (e) => `הערך חייב להיות ${e.maxValue} או מוקדם יותר.`,
  rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
  rangeUnderflow: (e) => `הערך חייב להיות ${e.minValue} או מאוחר יותר.`,
  unavailableDate: "התאריך הנבחר אינו זמין."
};
var I3 = {};
I3 = {
  rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
  rangeReversed: "Datum početka mora biti prije datuma završetka.",
  rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
  unavailableDate: "Odabrani datum nije dostupan."
};
var N3 = {};
N3 = {
  rangeOverflow: (e) => `Az értéknek ${e.maxValue} vagy korábbinak kell lennie.`,
  rangeReversed: "A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",
  rangeUnderflow: (e) => `Az értéknek ${e.minValue} vagy későbbinek kell lennie.`,
  unavailableDate: "A kiválasztott dátum nem érhető el."
};
var K3 = {};
K3 = {
  rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
  rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
  rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
  unavailableDate: "Data selezionata non disponibile."
};
var z3 = {};
z3 = {
  rangeOverflow: (e) => `値は ${e.maxValue} 以下にする必要があります。`,
  rangeReversed: "開始日は終了日より前にする必要があります。",
  rangeUnderflow: (e) => `値は ${e.minValue} 以上にする必要があります。`,
  unavailableDate: "選択した日付は使用できません。"
};
var V3 = {};
V3 = {
  rangeOverflow: (e) => `값은 ${e.maxValue} 이전이어야 합니다.`,
  rangeReversed: "시작일은 종료일 이전이어야 합니다.",
  rangeUnderflow: (e) => `값은 ${e.minValue} 이상이어야 합니다.`,
  unavailableDate: "선택한 날짜를 사용할 수 없습니다."
};
var L3 = {};
L3 = {
  rangeOverflow: (e) => `Reikšmė turi būti ${e.maxValue} arba ankstesnė.`,
  rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
  rangeUnderflow: (e) => `Reikšmė turi būti ${e.minValue} arba naujesnė.`,
  unavailableDate: "Pasirinkta data nepasiekiama."
};
var O3 = {};
O3 = {
  rangeOverflow: (e) => `Vērtībai ir jābūt ${e.maxValue} vai agrākai.`,
  rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
  rangeUnderflow: (e) => `Vērtībai ir jābūt ${e.minValue} vai vēlākai.`,
  unavailableDate: "Atlasītais datums nav pieejams."
};
var j3 = {};
j3 = {
  rangeOverflow: (e) => `Verdien må være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen må være før sluttdatoen.",
  rangeUnderflow: (e) => `Verdien må være ${e.minValue} eller senere.`,
  unavailableDate: "Valgt dato utilgjengelig."
};
var H3 = {};
H3 = {
  rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
  rangeReversed: "De startdatum moet voor de einddatum liggen.",
  rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
  unavailableDate: "Geselecteerde datum niet beschikbaar."
};
var _3 = {};
_3 = {
  rangeOverflow: (e) => `Wartość musi mieć wartość ${e.maxValue} lub wcześniejszą.`,
  rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
  rangeUnderflow: (e) => `Wartość musi mieć wartość ${e.minValue} lub późniejszą.`,
  unavailableDate: "Wybrana data jest niedostępna."
};
var U3 = {};
U3 = {
  rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data inicial deve ser anterior à data final.",
  rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var W3 = {};
W3 = {
  rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data de início deve ser anterior à data de fim.",
  rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var G3 = {};
G3 = {
  rangeOverflow: (e) => `Valoarea trebuie să fie ${e.maxValue} sau anterioară.`,
  rangeReversed: "Data de început trebuie să fie anterioară datei de sfârșit.",
  rangeUnderflow: (e) => `Valoarea trebuie să fie ${e.minValue} sau ulterioară.`,
  unavailableDate: "Data selectată nu este disponibilă."
};
var Z3 = {};
Z3 = {
  rangeOverflow: (e) => `Значение должно быть не позже ${e.maxValue}.`,
  rangeReversed: "Дата начала должна предшествовать дате окончания.",
  rangeUnderflow: (e) => `Значение должно быть не раньше ${e.minValue}.`,
  unavailableDate: "Выбранная дата недоступна."
};
var q3 = {};
q3 = {
  rangeOverflow: (e) => `Hodnota musí byť ${e.maxValue} alebo skoršia.`,
  rangeReversed: "Dátum začiatku musí byť skorší ako dátum konca.",
  rangeUnderflow: (e) => `Hodnota musí byť ${e.minValue} alebo neskoršia.`,
  unavailableDate: "Vybratý dátum je nedostupný."
};
var Y3 = {};
Y3 = {
  rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starejša.`,
  rangeReversed: "Začetni datum mora biti pred končnim datumom.",
  rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novejša.`,
  unavailableDate: "Izbrani datum ni na voljo."
};
var J3 = {};
J3 = {
  rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
  rangeReversed: "Datum početka mora biti pre datuma završetka.",
  rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
  unavailableDate: "Izabrani datum nije dostupan."
};
var X3 = {};
X3 = {
  rangeOverflow: (e) => `Värdet måste vara ${e.maxValue} eller tidigare.`,
  rangeReversed: "Startdatumet måste vara före slutdatumet.",
  rangeUnderflow: (e) => `Värdet måste vara ${e.minValue} eller senare.`,
  unavailableDate: "Det valda datumet är inte tillgängligt."
};
var Q3 = {};
Q3 = {
  rangeOverflow: (e) => `Değer, ${e.maxValue} veya öncesi olmalıdır.`,
  rangeReversed: "Başlangıç tarihi bitiş tarihinden önce olmalıdır.",
  rangeUnderflow: (e) => `Değer, ${e.minValue} veya sonrası olmalıdır.`,
  unavailableDate: "Seçilen tarih kullanılamıyor."
};
var eh = {};
eh = {
  rangeOverflow: (e) => `Значення має бути не пізніше ${e.maxValue}.`,
  rangeReversed: "Дата початку має передувати даті завершення.",
  rangeUnderflow: (e) => `Значення має бути не раніше ${e.minValue}.`,
  unavailableDate: "Вибрана дата недоступна."
};
var th = {};
th = {
  rangeOverflow: (e) => `值必须是 ${e.maxValue} 或更早日期。`,
  rangeReversed: "开始日期必须早于结束日期。",
  rangeUnderflow: (e) => `值必须是 ${e.minValue} 或更晚日期。`,
  unavailableDate: "所选日期不可用。"
};
var nh = {};
nh = {
  rangeOverflow: (e) => `值必須是 ${e.maxValue} 或更早。`,
  rangeReversed: "開始日期必須在結束日期之前。",
  rangeUnderflow: (e) => `值必須是 ${e.minValue} 或更晚。`,
  unavailableDate: "所選日期無法使用。"
};
function T5(e) {
  return e && e.__esModule ? e.default : e;
}
var rh = {};
rh = {
  "ar-AE": E3,
  "bg-BG": C3,
  "cs-CZ": P3,
  "da-DK": w3,
  "de-DE": S3,
  "el-GR": B3,
  "en-US": k3,
  "es-ES": F3,
  "et-EE": A3,
  "fi-FI": T3,
  "fr-FR": M3,
  "he-IL": R3,
  "hr-HR": I3,
  "hu-HU": N3,
  "it-IT": K3,
  "ja-JP": z3,
  "ko-KR": V3,
  "lt-LT": L3,
  "lv-LV": O3,
  "nb-NO": j3,
  "nl-NL": H3,
  "pl-PL": _3,
  "pt-BR": U3,
  "pt-PT": W3,
  "ro-RO": G3,
  "ru-RU": Z3,
  "sk-SK": q3,
  "sl-SI": Y3,
  "sr-SP": J3,
  "sv-SE": X3,
  "tr-TR": Q3,
  "uk-UA": eh,
  "zh-CN": th,
  "zh-TW": nh
};
const ah = new $n(/* @__PURE__ */ T5(rh));
function ih() {
  return typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
}
function Oa(e, t, n, r, a) {
  let i = e != null && n != null && e.compare(n) > 0, l = e != null && t != null && e.compare(t) < 0, o = e != null && (r == null ? void 0 : r(e)) || !1, u = i || l || o, s = [];
  if (u) {
    let d = ih(), c = $n.getGlobalDictionaryForPackage("@react-stately/datepicker") || ah, p = new Qs(d, c), m = new It(d, jn({}, a)), b = m.resolvedOptions().timeZone;
    l && s.push(p.format("rangeUnderflow", {
      minValue: m.format(t.toDate(b))
    })), i && s.push(p.format("rangeOverflow", {
      maxValue: m.format(n.toDate(b))
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
function M5(e, t, n, r, a) {
  let i = Oa(e == null ? void 0 : e.start, t, n, r, a), l = Oa(e == null ? void 0 : e.end, t, n, r, a), o = $r(i, l);
  return e.end != null && e.start != null && e.end.compare(e.start) < 0 && (o = $r(o, {
    isInvalid: !0,
    validationErrors: [
      ah.getStringForLocale("rangeReversed", ih())
    ],
    validationDetails: {
      ...ei,
      rangeUnderflow: !0,
      rangeOverflow: !0,
      valid: !1
    }
  })), o;
}
const R5 = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}, I5 = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
function jn(e, t) {
  e = {
    ...t.shouldForceLeadingZeros ? I5 : R5,
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
function Nn(e) {
  return e && "hour" in e ? e : new Nr();
}
function lh(e, t) {
  if (e === null)
    return null;
  if (e)
    return xe(e, t);
}
function Qn(e, t, n, r) {
  if (e)
    return lh(e, n);
  let a = xe(td(r).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), n);
  return t === "year" || t === "month" || t === "day" ? je(a) : r ? a : ht(a);
}
function Bo(e, t) {
  let n = e && "timeZone" in e ? e.timeZone : void 0, r = e && "minute" in e ? "minute" : "day";
  if (e && t && !(t in e))
    throw new Error("Invalid granularity " + t + " for value " + e.toString());
  let [a, i] = G([
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
function N5(e) {
  let t = xn(e), [n, r] = Ie(e.value, e.defaultValue || null, e.onChange), a = n || e.placeholderValue, [i, l] = Bo(a, e.granularity), o = n != null ? n.toDate(l ?? "UTC") : null, u = i === "hour" || i === "minute" || i === "second";
  var s;
  let d = (s = e.shouldCloseOnSelect) !== null && s !== void 0 ? s : !0, [c, p] = G(null), [m, b] = G(null);
  if (n && (c = n, "hour" in n && (m = n)), a && !(i in a))
    throw new Error("Invalid granularity " + i + " for value " + a.toString());
  let h = (n == null ? void 0 : n.calendar.identifier) === "gregory" && n.era === "BC", v = N(() => ({
    granularity: i,
    timeZone: l,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    showEra: h
  }), [
    i,
    e.hourCycle,
    e.shouldForceLeadingZeros,
    l,
    e.hideTimeZone,
    h
  ]), { minValue: y, maxValue: $, isDateUnavailable: x } = e, E = N(() => Oa(n, y, $, x, v), [
    n,
    y,
    $,
    x,
    v
  ]), P = gt({
    ...e,
    value: n,
    builtinValidation: E
  }), B = P.displayValidation.isInvalid, T = e.validationState || (B ? "invalid" : null), g = (C, S) => {
    r("timeZone" in S ? S.set(je(C)) : ht(C, S)), p(null), b(null), P.commitValidation();
  };
  return {
    ...P,
    value: n,
    setValue: r,
    dateValue: c,
    timeValue: m,
    setDateValue: (C) => {
      let S = typeof d == "function" ? d() : d;
      u ? m || S ? g(C, m || Nn(e.placeholderValue)) : p(C) : (r(C), P.commitValidation()), S && t.setOpen(!1);
    },
    setTimeValue: (C) => {
      c && C ? g(c, C) : b(C);
    },
    granularity: i,
    hasTime: u,
    ...t,
    setOpen(C) {
      !C && !n && c && u && g(c, m || Nn(e.placeholderValue)), t.setOpen(C);
    },
    validationState: T,
    isInvalid: B,
    formatValue(C, S) {
      if (!o)
        return "";
      let w = jn(S, v);
      return new It(C, w).format(o);
    }
  };
}
const K5 = new $n({
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
function z5(e, t, n) {
  return e === "era" || e === "dayPeriod" ? t : e === "year" || e === "month" || e === "day" ? K5.getStringForLocale(e, n) : "––";
}
const da = {
  year: !0,
  month: !0,
  day: !0,
  hour: !0,
  minute: !0,
  second: !0,
  dayPeriod: !0,
  era: !0
}, ds = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15
}, V5 = {
  dayperiod: "dayPeriod"
};
function ko(e) {
  let { locale: t, createCalendar: n, hideTimeZone: r, isDisabled: a, isReadOnly: i, isRequired: l, minValue: o, maxValue: u, isDateUnavailable: s } = e, d = e.value || e.defaultValue || e.placeholderValue, [c, p] = Bo(d, e.granularity), m = p || "UTC";
  if (d && !(c in d))
    throw new Error("Invalid granularity " + c + " for value " + d.toString());
  let b = N(() => new It(t), [
    t
  ]), h = N(() => n(b.resolvedOptions().calendar), [
    n,
    b
  ]), [v, y] = Ie(e.value, e.defaultValue, e.onChange), $ = N(() => lh(v, h), [
    v,
    h
  ]), [x, E] = G(() => Qn(e.placeholderValue, c, h, p)), P = $ || x, B = h.identifier === "gregory" && P.era === "BC", T = N(() => {
    var L;
    return {
      granularity: c,
      maxGranularity: (L = e.maxGranularity) !== null && L !== void 0 ? L : "year",
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
  ]), g = N(() => jn({}, T), [
    T
  ]), M = N(() => new It(t, g), [
    t,
    g
  ]), F = N(() => M.resolvedOptions(), [
    M
  ]), C = N(() => M.formatToParts(/* @__PURE__ */ new Date()).filter((L) => da[L.type]).reduce((L, J) => (L[J.type] = !0, L), {}), [
    M
  ]), [S, w] = G(() => e.value || e.defaultValue ? {
    ...C
  } : {}), k = R(), K = R(h.identifier);
  Y(() => {
    h.identifier !== K.current && (K.current = h.identifier, E((L) => Object.keys(S).length > 0 ? xe(L, h) : Qn(e.placeholderValue, c, h, p)));
  }, [
    h,
    c,
    S,
    p,
    e.placeholderValue
  ]), v && Object.keys(S).length < Object.keys(C).length && (S = {
    ...C
  }, w(S)), v == null && Object.keys(S).length === Object.keys(C).length && (S = {}, w(S), E(Qn(e.placeholderValue, c, h, p)));
  let A = $ && Object.keys(S).length >= Object.keys(C).length ? $ : x, D = (L) => {
    if (e.isDisabled || e.isReadOnly)
      return;
    let J = Object.keys(S), se = Object.keys(C);
    L == null ? (y(null), E(Qn(e.placeholderValue, c, h, p)), w({})) : J.length >= se.length || J.length === se.length - 1 && C.dayPeriod && !S.dayPeriod && k.current !== "dayPeriod" ? (L = xe(L, (d == null ? void 0 : d.calendar) || new He()), y(L)) : E(L), k.current = null;
  }, j = N(() => A.toDate(m), [
    A,
    m
  ]), H = N(() => M.formatToParts(j).map((L) => {
    let J = da[L.type];
    L.type === "era" && h.getEras().length === 1 && (J = !1);
    let se = da[L.type] && !S[L.type], $e = da[L.type] ? z5(L.type, L.value, t) : null;
    return {
      type: V5[L.type] || L.type,
      text: se ? $e : L.value,
      ...L5(A, L.type, F),
      isPlaceholder: se,
      placeholder: $e,
      isEditable: J
    };
  }), [
    j,
    S,
    M,
    F,
    A,
    h,
    t
  ]);
  C.era && S.year && !S.era ? (S.era = !0, w({
    ...S
  })) : !C.era && S.era && (delete S.era, w({
    ...S
  }));
  let V = (L) => {
    S[L] = !0, L === "year" && C.era && (S.era = !0), w({
      ...S
    });
  }, z = (L, J) => {
    if (S[L])
      D(O5(A, L, J, F));
    else {
      V(L);
      let se = Object.keys(S), $e = Object.keys(C);
      (se.length >= $e.length || se.length === $e.length - 1 && C.dayPeriod && !S.dayPeriod) && D(A);
    }
  }, I = N(() => Oa(v, o, u, s, T), [
    v,
    o,
    u,
    s,
    T
  ]), W = gt({
    ...e,
    value: v,
    builtinValidation: I
  }), te = W.displayValidation.isInvalid, oe = e.validationState || (te ? "invalid" : null);
  var Ee;
  return {
    ...W,
    value: $,
    dateValue: j,
    calendar: h,
    setValue: D,
    segments: H,
    dateFormatter: M,
    validationState: oe,
    isInvalid: te,
    granularity: c,
    maxGranularity: (Ee = e.maxGranularity) !== null && Ee !== void 0 ? Ee : "year",
    isDisabled: a,
    isReadOnly: i,
    isRequired: l,
    increment(L) {
      z(L, 1);
    },
    decrement(L) {
      z(L, -1);
    },
    incrementPage(L) {
      z(L, ds[L] || 1);
    },
    decrementPage(L) {
      z(L, -(ds[L] || 1));
    },
    setSegment(L, J) {
      V(L), D(j5(A, L, J, F));
    },
    confirmPlaceholder() {
      if (e.isDisabled || e.isReadOnly)
        return;
      let L = Object.keys(S), J = Object.keys(C);
      L.length === J.length - 1 && C.dayPeriod && !S.dayPeriod && (S = {
        ...C
      }, w(S), D(A.copy()));
    },
    clearSegment(L) {
      delete S[L], k.current = L, w({
        ...S
      });
      let J = Qn(e.placeholderValue, c, h, p), se = A;
      if (L === "dayPeriod" && "hour" in A && "hour" in J) {
        let $e = A.hour >= 12, ne = J.hour >= 12;
        $e && !ne ? se = A.set({
          hour: A.hour - 12
        }) : !$e && ne && (se = A.set({
          hour: A.hour + 12
        }));
      } else
        L in A && (se = A.set({
          [L]: J[L]
        }));
      y(null), D(se);
    },
    formatValue(L) {
      if (!$)
        return "";
      let J = jn(L, T);
      return new It(t, J).format(j);
    }
  };
}
function L5(e, t, n) {
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
        minValue: S$(e),
        maxValue: e.calendar.getMonthsInYear(e)
      };
    case "day":
      return {
        value: e.day,
        minValue: B$(e),
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
function O5(e, t, n, r) {
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
function j5(e, t, n, r) {
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
function H5(e) {
  var t, n;
  let r = xn(e), [a, i] = Ie(e.value, e.defaultValue || null, e.onChange), [l, o] = G(() => a || {
    start: null,
    end: null
  });
  a == null && l.start && l.end && (l = {
    start: null,
    end: null
  }, o(l));
  let u = a || l, s = (A) => {
    o(A || {
      start: null,
      end: null
    }), A != null && A.start && A.end ? i(A) : i(null);
  }, d = (u == null ? void 0 : u.start) || (u == null ? void 0 : u.end) || e.placeholderValue, [c, p] = Bo(d, e.granularity), m = c === "hour" || c === "minute" || c === "second";
  var b;
  let h = (b = e.shouldCloseOnSelect) !== null && b !== void 0 ? b : !0, [v, y] = G(null), [$, x] = G(null);
  u && u.start && u.end && (v = u, "hour" in u.start && ($ = u));
  let E = (A, D) => {
    s({
      start: "timeZone" in D.start ? D.start.set(je(A.start)) : ht(A.start, D.start),
      end: "timeZone" in D.end ? D.end.set(je(A.end)) : ht(A.end, D.end)
    }), y(null), x(null), w.commitValidation();
  }, P = (A) => {
    let D = typeof h == "function" ? h() : h;
    m ? D || A.start && A.end && ($ != null && $.start) && ($ != null && $.end) ? E(A, {
      start: ($ == null ? void 0 : $.start) || Nn(e.placeholderValue),
      end: ($ == null ? void 0 : $.end) || Nn(e.placeholderValue)
    }) : y(A) : A.start && A.end ? (s(A), w.commitValidation()) : y(A), D && r.setOpen(!1);
  }, B = (A) => {
    v != null && v.start && (v != null && v.end) && A.start && A.end ? E(v, A) : x(A);
  }, T = (u == null || (t = u.start) === null || t === void 0 ? void 0 : t.calendar.identifier) === "gregory" && u.start.era === "BC" || (u == null || (n = u.end) === null || n === void 0 ? void 0 : n.calendar.identifier) === "gregory" && u.end.era === "BC", g = N(() => ({
    granularity: c,
    timeZone: p,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    showEra: T
  }), [
    c,
    e.hourCycle,
    e.shouldForceLeadingZeros,
    p,
    e.hideTimeZone,
    T
  ]), { minValue: M, maxValue: F, isDateUnavailable: C } = e, S = N(() => M5(u, M, F, C, g), [
    u,
    M,
    F,
    C,
    g
  ]), w = gt({
    ...e,
    value: a,
    name: N(() => [
      e.startName,
      e.endName
    ], [
      e.startName,
      e.endName
    ]),
    builtinValidation: S
  }), k = w.displayValidation.isInvalid, K = e.validationState || (k ? "invalid" : null);
  return {
    ...w,
    value: u,
    setValue: s,
    dateRange: v,
    timeRange: $,
    granularity: c,
    hasTime: m,
    setDate(A, D) {
      P({
        ...v,
        [A]: D
      });
    },
    setTime(A, D) {
      B({
        ...$,
        [A]: D
      });
    },
    setDateTime(A, D) {
      s({
        ...u,
        [A]: D
      });
    },
    setDateRange: P,
    setTimeRange: B,
    ...r,
    setOpen(A) {
      !A && !(u != null && u.start && (u != null && u.end)) && (v != null && v.start) && (v != null && v.end) && m && E(v, {
        start: ($ == null ? void 0 : $.start) || Nn(e.placeholderValue),
        end: ($ == null ? void 0 : $.end) || Nn(e.placeholderValue)
      }), r.setOpen(A);
    },
    validationState: K,
    isInvalid: k,
    formatValue(A, D) {
      if (!u || !u.start || !u.end)
        return null;
      let j = "timeZone" in u.start ? u.start.timeZone : void 0, H = e.granularity || (u.start && "minute" in u.start ? "minute" : "day"), V = "timeZone" in u.end ? u.end.timeZone : void 0, z = e.granularity || (u.end && "minute" in u.end ? "minute" : "day"), I = jn(D, {
        granularity: H,
        timeZone: j,
        hideTimeZone: e.hideTimeZone,
        hourCycle: e.hourCycle,
        showEra: u.start.calendar.identifier === "gregory" && u.start.era === "BC" || u.end.calendar.identifier === "gregory" && u.end.era === "BC"
      }), W = u.start.toDate(j || "UTC"), te = u.end.toDate(V || "UTC"), oe = new It(A, I), Ee;
      if (j === V && H === z && u.start.compare(u.end) !== 0) {
        try {
          let L = oe.formatRangeToParts(W, te), J = -1;
          for (let ne = 0; ne < L.length; ne++) {
            let et = L[ne];
            if (et.source === "shared" && et.type === "literal")
              J = ne;
            else if (et.source === "endRange")
              break;
          }
          let se = "", $e = "";
          for (let ne = 0; ne < L.length; ne++)
            ne < J ? se += L[ne].value : ne > J && ($e += L[ne].value);
          return {
            start: se,
            end: $e
          };
        } catch {
        }
        Ee = oe;
      } else {
        let L = jn(D, {
          granularity: z,
          timeZone: V,
          hideTimeZone: e.hideTimeZone,
          hourCycle: e.hourCycle
        });
        Ee = new It(A, L);
      }
      return {
        start: oe.format(W),
        end: Ee.format(te)
      };
    }
  };
}
function _5(e) {
  let { placeholderValue: t = new Nr(), minValue: n, maxValue: r, granularity: a, validate: i } = e, [l, o] = Ie(e.value, e.defaultValue, e.onChange), u = l || t, s = u && "day" in u ? u : void 0, d = e.defaultValue && "timeZone" in e.defaultValue ? e.defaultValue.timeZone : void 0, c = N(() => {
    let $ = u && "timeZone" in u ? u.timeZone : void 0;
    return ($ || d) && t ? od(er(t), $ || d) : er(t);
  }, [
    t,
    u,
    d
  ]), p = N(() => er(n, s), [
    n,
    s
  ]), m = N(() => er(r, s), [
    r,
    s
  ]), b = N(() => l && "day" in l ? xu(l) : l, [
    l
  ]), h = N(() => l == null ? null : er(l), [
    l
  ]);
  return {
    ...ko({
      ...e,
      value: h,
      defaultValue: void 0,
      minValue: p,
      maxValue: m,
      onChange: ($) => {
        o(s || d ? $ : $ && xu($));
      },
      granularity: a || "minute",
      maxGranularity: "hour",
      placeholderValue: c,
      // Calendar should not matter for time fields.
      createCalendar: () => new He(),
      validate: X(() => i == null ? void 0 : i(l), [
        i,
        l
      ])
    }),
    timeValue: b
  };
}
function er(e, t = Ya(eo())) {
  return e ? "day" in e ? e : ht(t, e) : null;
}
function U5(e, t) {
  let { triggerKey: n } = e, { UNSTABLE_expandedKeysStack: r, UNSTABLE_openSubmenu: a, UNSTABLE_closeSubmenu: i, close: l } = t, [o] = G(r == null ? void 0 : r.length), u = N(() => r[o] === n, [
    r,
    n,
    o
  ]), [s, d] = G(null), c = X((b = null) => {
    d(b), a(n, o);
  }, [
    a,
    o,
    n
  ]), p = X(() => {
    d(null), i(n, o);
  }, [
    i,
    o,
    n
  ]), m = X((b = null) => {
    d(b), u ? p() : c(b);
  }, [
    p,
    c,
    u
  ]);
  return N(() => ({
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
    toggle: m
  }), [
    u,
    c,
    p,
    l,
    s,
    m,
    o
  ]);
}
function W5(e) {
  let { minValue: t, maxValue: n, step: r, formatOptions: a, value: i, defaultValue: l = NaN, onChange: o, locale: u, isDisabled: s, isReadOnly: d } = e;
  i === null && (i = NaN), i !== void 0 && !isNaN(i) && (r !== void 0 && !isNaN(r) ? i = We(i, t, n, r) : i = lt(i, t, n)), isNaN(l) || (r !== void 0 && !isNaN(r) ? l = We(l, t, n, r) : l = lt(l, t, n));
  let [c, p] = Ie(i, isNaN(l) ? NaN : l, o), [m, b] = G(() => isNaN(c) ? "" : new Na(u, a).format(c)), h = N(() => new fo(u, a), [
    u,
    a
  ]), v = N(() => h.getNumberingSystem(m), [
    h,
    m
  ]), y = N(() => new Na(u, {
    ...a,
    numberingSystem: v
  }), [
    u,
    a,
    v
  ]), $ = N(() => y.resolvedOptions(), [
    y
  ]), x = X((I) => isNaN(I) || I === null ? "" : y.format(I), [
    y
  ]), E = gt({
    ...e,
    value: c
  }), P = r !== void 0 && !isNaN(r) ? r : 1;
  $.style === "percent" && (r === void 0 || isNaN(r)) && (P = 0.01);
  let [B, T] = G(c), [g, M] = G(u), [F, C] = G(a);
  (!Object.is(c, B) || u !== g || a !== F) && (b(x(c)), T(c), M(u), C(a));
  let S = N(() => h.parse(m), [
    h,
    m
  ]), w = () => {
    if (!m.length) {
      p(NaN), b(i === void 0 ? "" : x(c));
      return;
    }
    if (isNaN(S)) {
      b(x(c));
      return;
    }
    let I;
    r === void 0 || isNaN(r) ? I = lt(S, t, n) : I = We(S, t, n, r), I = h.parse(x(I)), p(I), b(x(i === void 0 ? I : c));
  }, k = (I, W = 0) => {
    let te = S;
    if (isNaN(te)) {
      let oe = isNaN(W) ? 0 : W;
      return We(oe, t, n, P);
    } else {
      let oe = We(te, t, n, P);
      return I === "+" && oe > te || I === "-" && oe < te ? oe : We(Yi(I, te, P), t, n, P);
    }
  }, K = () => {
    let I = k("+", t);
    I === c && b(x(I)), p(I), E.commitValidation();
  }, A = () => {
    let I = k("-", n);
    I === c && b(x(I)), p(I), E.commitValidation();
  }, D = () => {
    n != null && (p(We(n, t, n, P)), E.commitValidation());
  }, j = () => {
    t != null && (p(t), E.commitValidation());
  }, H = N(() => !s && !d && (isNaN(S) || n === void 0 || isNaN(n) || We(S, t, n, P) > S || Yi("+", S, P) <= n), [
    s,
    d,
    t,
    n,
    P,
    S
  ]), V = N(() => !s && !d && (isNaN(S) || t === void 0 || isNaN(t) || We(S, t, n, P) < S || Yi("-", S, P) >= t), [
    s,
    d,
    t,
    n,
    P,
    S
  ]);
  return {
    ...E,
    validate: (I) => h.isValidPartialNumber(I, t, n),
    increment: K,
    incrementToMax: D,
    decrement: A,
    decrementToMin: j,
    canIncrement: H,
    canDecrement: V,
    minValue: t,
    maxValue: n,
    numberValue: S,
    setNumberValue: p,
    setInputValue: b,
    inputValue: m,
    commit: w
  };
}
function Yi(e, t, n) {
  let r = e === "+" ? t + n : t - n;
  if (t % 1 !== 0 || n % 1 !== 0) {
    const a = t.toString().split("."), i = n.toString().split("."), l = a[1] && a[1].length || 0, o = i[1] && i[1].length || 0, u = Math.pow(10, Math.max(l, o));
    t = Math.round(t * u), n = Math.round(n * u), r = e === "+" ? t + n : t - n, r /= u;
  }
  return r;
}
let G5 = Math.round(Math.random() * 1e10), Z5 = 0;
function q5(e) {
  let t = N(() => e.name || `radio-group-${G5}-${++Z5}`, [
    e.name
  ]);
  var n;
  let [r, a] = Ie(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [i, l] = G(null), o = gt({
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
function Y5(e) {
  let [t, n] = Ie(cs(e.value), cs(e.defaultValue) || "", e.onChange);
  return {
    value: t,
    setValue: n
  };
}
function cs(e) {
  if (e != null)
    return e.toString();
}
function J5(e) {
  let t = xn(e), [n, r] = G(null), a = So({
    ...e,
    onSelectionChange: (u) => {
      e.onSelectionChange != null && e.onSelectionChange(u), t.close(), i.commitValidation();
    }
  }), i = gt({
    ...e,
    value: a.selectedKey
  }), [l, o] = G(!1);
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
const X5 = 0, Q5 = 100, e6 = 1;
function t6(e) {
  const { isDisabled: t = !1, minValue: n = X5, maxValue: r = Q5, numberFormatter: a, step: i = e6, orientation: l = "horizontal" } = e;
  let o = N(() => {
    let z = (r - n) / 10;
    return z = We(z, 0, z + i, i), Math.max(z, i);
  }, [
    i,
    r,
    n
  ]), u = X((z) => z == null ? void 0 : z.map((I, W) => {
    let te = W === 0 ? n : I[W - 1], oe = W === z.length - 1 ? r : I[W + 1];
    return We(I, te, oe, i);
  }), [
    n,
    r,
    i
  ]), s = N(() => u(ms(e.value)), [
    e.value
  ]), d = N(() => {
    var z;
    return u((z = ms(e.defaultValue)) !== null && z !== void 0 ? z : [
      n
    ]);
  }, [
    e.defaultValue,
    n
  ]), c = ps(e.value, e.defaultValue, e.onChange), p = ps(e.value, e.defaultValue, e.onChangeEnd);
  const [m, b] = Ie(s, d, c), [h, v] = G(new Array(m.length).fill(!1)), y = R(new Array(m.length).fill(!0)), [$, x] = G(void 0), E = R(m), P = R(h);
  let B = (z) => {
    E.current = z, b(z);
  }, T = (z) => {
    P.current = z, v(z);
  };
  function g(z) {
    return (z - n) / (r - n);
  }
  function M(z) {
    return z === 0 ? n : m[z - 1];
  }
  function F(z) {
    return z === m.length - 1 ? r : m[z + 1];
  }
  function C(z) {
    return y.current[z];
  }
  function S(z, I) {
    y.current[z] = I;
  }
  function w(z, I) {
    if (t || !C(z))
      return;
    const W = M(z), te = F(z);
    I = We(I, W, te, i);
    let oe = fs(E.current, z, I);
    B(oe);
  }
  function k(z, I) {
    if (t || !C(z))
      return;
    I && (E.current = m);
    const W = P.current[z];
    P.current = fs(P.current, z, I), T(P.current), p && W && !P.current.some(Boolean) && p(E.current);
  }
  function K(z) {
    return a.format(z);
  }
  function A(z, I) {
    w(z, j(I));
  }
  function D(z) {
    return Math.round((z - n) / i) * i + n;
  }
  function j(z) {
    const I = z * (r - n) + n;
    return lt(D(I), n, r);
  }
  function H(z, I = 1) {
    let W = Math.max(I, i);
    w(z, We(m[z] + W, n, r, i));
  }
  function V(z, I = 1) {
    let W = Math.max(I, i);
    w(z, We(m[z] - W, n, r, i));
  }
  return {
    values: m,
    getThumbValue: (z) => m[z],
    setThumbValue: w,
    setThumbPercent: A,
    isThumbDragging: (z) => h[z],
    setThumbDragging: k,
    focusedThumb: $,
    setFocusedThumb: x,
    getThumbPercent: (z) => g(m[z]),
    getValuePercent: g,
    getThumbValueLabel: (z) => K(m[z]),
    getFormattedValue: K,
    getThumbMinValue: M,
    getThumbMaxValue: F,
    getPercentValue: j,
    isThumbEditable: C,
    setThumbEditable: S,
    incrementThumb: H,
    decrementThumb: V,
    step: i,
    pageSize: o,
    orientation: l,
    isDisabled: t
  };
}
function fs(e, t, n) {
  return e[t] === n ? e : [
    ...e.slice(0, t),
    n,
    ...e.slice(t + 1)
  ];
}
function ms(e) {
  if (e != null)
    return Array.isArray(e) ? e : [
      e
    ];
}
function ps(e, t, n) {
  return (r) => {
    typeof e == "number" || typeof t == "number" ? n == null || n(r[0]) : n == null || n(r);
  };
}
function n6(e) {
  let { collection: t, focusMode: n } = e, r = Po(e), a = N(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), i = r.setFocusedKey;
  r.setFocusedKey = (u, s) => {
    if (n === "cell" && u != null) {
      let p = t.getItem(u);
      if ((p == null ? void 0 : p.type) === "item") {
        var d, c;
        let m = Ce(p, t);
        s === "last" ? u = (d = Yt(m)) === null || d === void 0 ? void 0 : d.key : u = (c = At(m)) === null || c === void 0 ? void 0 : c.key;
      }
    }
    i(u, s);
  };
  let l = N(() => new wo(t, r), [
    t,
    r
  ]);
  const o = R(null);
  return Y(() => {
    if (r.focusedKey != null && !t.getItem(r.focusedKey)) {
      const u = o.current.getItem(r.focusedKey), s = u.parentKey != null && (u.type === "cell" || u.type === "rowheader" || u.type === "column") ? o.current.getItem(u.parentKey) : u, d = o.current.rows, c = t.rows, p = d.length - c.length;
      let m = Math.min(p > 1 ? Math.max(s.index - p + 1, 0) : s.index, c.length - 1), b;
      for (; m >= 0; ) {
        if (!l.isDisabled(c[m].key) && c[m].type !== "headerrow") {
          b = c[m];
          break;
        }
        m < c.length - 1 ? m++ : (m > s.index && (m = s.index), m--);
      }
      if (b) {
        const h = b.hasChildNodes ? [
          ...Ce(b, t)
        ] : [], v = b.hasChildNodes && s !== u && u.index < h.length ? h[u.index].key : b.key;
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
class r6 {
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
function Fl(e) {
  return e != null && (!isNaN(e) || String(e).match(/^(\d+)(?=%$)/) !== null);
}
function Al(e) {
  if (!e)
    return 1;
  let t = e.match(/^(.+)(?=fr$)/);
  return t ? parseFloat(t[0]) : (console.warn(`width: ${e} is not a supported format, width should be a number (ex. 150), percentage (ex. '50%') or fr unit (ex. '2fr')`, "defaulting to '1fr'"), 1);
}
function Fo(e, t) {
  if (typeof e == "string") {
    let n = e.match(/^(\d+)(?=%$)/);
    if (!n)
      throw new Error("Only percentages or numbers are supported for static column widths");
    return t * (parseFloat(n[0]) / 100);
  }
  return e;
}
function oh(e, t) {
  return e != null ? Fo(e, t) : Number.MAX_SAFE_INTEGER;
}
function uh(e, t) {
  return e != null ? Fo(e, t) : 0;
}
function bs(e, t, n, r, a) {
  let i = !1, l = t.map((o, u) => {
    var s, d, c;
    let p = n.get(o.key) != null ? n.get(o.key) : (c = (d = (s = o.width) !== null && s !== void 0 ? s : o.defaultWidth) !== null && d !== void 0 ? d : r == null ? void 0 : r(u)) !== null && c !== void 0 ? c : "1fr", m = !1, b = 0, h = 0, v = null;
    Fl(p) ? (b = Fo(p, e), m = !0) : (h = Al(p), h <= 0 && (m = !0));
    var y, $;
    let x = uh(($ = (y = o.minWidth) !== null && y !== void 0 ? y : a == null ? void 0 : a(u)) !== null && $ !== void 0 ? $ : 0, e), E = oh(o.maxWidth, e), P = Math.max(x, Math.min(b, E));
    return m ? v = P : b > P && (m = !0, v = P), m || (i = !0), {
      frozen: m,
      baseSize: b,
      hypotheticalMainSize: P,
      min: x,
      max: E,
      flex: h,
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
        let p = c.flex / u;
        c.targetMainSize = c.baseSize + p * s;
      }
    });
    let d = 0;
    l.forEach((c) => {
      if (c.violation = 0, !c.frozen) {
        let { min: p, max: m, targetMainSize: b } = c;
        c.targetMainSize = Math.max(p, Math.min(b, m)), c.violation = c.targetMainSize - b, d += c.violation;
      }
    }), i = !1, l.forEach((c) => {
      d === 0 || Math.sign(d) === Math.sign(c.violation) ? c.frozen = !0 : c.frozen || (i = !0);
    });
  }
  return a6(l);
}
function a6(e) {
  let t = 0, n = 0, r = [];
  return e.forEach(function(a) {
    let i = a.targetMainSize, l = Math.round(i + t) - n;
    t += i, n += l, r.push(l);
  }), r;
}
class i6 {
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
    n.columns.forEach((h, v) => {
      var y, $;
      let x, E;
      if (p.set(h.key, this.getDefaultMinWidth(n.columns[v])), i !== h.key && !h.props.width && !Fl(a.get(h.key)) ? (x = h.key, E = Al(a.get(h.key))) : i !== h.key && !Fl(h.props.width) && !a.get(h.key) ? (x = h.key, E = Al(h.props.width)) : i !== h.key && (!(($ = h.props.width) === null || $ === void 0 || (y = $.endsWith) === null || y === void 0) && y.call($, "%")) && d.set(h.key, h.props.width), u < v) {
        x && c.set(x, E);
        return;
      }
      if (h.key === i) {
        u = v, s.set(h.key, Math.floor(l));
        return;
      }
      s.set(h.key, o.get(h.key));
    });
    let m = bs(t, n.columns.map((h) => ({
      ...h.props,
      key: h.key
    })), s, (h) => this.getDefaultWidth(n.columns[h]), (h) => this.getDefaultMinWidth(n.columns[h])), b = /* @__PURE__ */ new Map();
    return m.forEach((h, v) => {
      let y = n.columns[v].key;
      b.set(y, h);
    }), Array.from(c).forEach(([h]) => {
      b.set(h, `${c.get(h)}fr`);
    }), Array.from(d).forEach(([h, v]) => {
      h !== i && b.set(h, v);
    }), b;
  }
  buildColumnWidths(t, n, r) {
    return this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map(), bs(t, n.columns.map((i) => ({
      ...i.props,
      key: i.key
    })), r, (i) => this.getDefaultWidth(n.columns[i]), (i) => this.getDefaultMinWidth(n.columns[i])).forEach((i, l) => {
      let o = n.columns[l].key, u = n.columns[l];
      this.columnWidths.set(o, i);
      var s;
      this.columnMinWidths.set(o, uh((s = u.props.minWidth) !== null && s !== void 0 ? s : this.getDefaultMinWidth(u), t)), this.columnMaxWidths.set(o, oh(u.props.maxWidth, t));
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
function l6(e, t) {
  let { getDefaultWidth: n, getDefaultMinWidth: r, tableWidth: a = 0 } = e, [i, l] = G(null), o = N(() => new i6({
    getDefaultWidth: n,
    getDefaultMinWidth: r
  }), [
    n,
    r
  ]), [u, s] = N(() => o.splitColumnsIntoControlledAndUncontrolled(t.collection.columns), [
    t.collection.columns,
    o
  ]), [d, c] = G(() => o.getInitialUncontrolledWidths(s)), [p, m] = G(t.collection.columns);
  if (t.collection.columns !== p) {
    if (t.collection.columns.length !== p.length || t.collection.columns.some(($, x) => $.key !== p[x].key)) {
      let $ = o.getInitialUncontrolledWidths(s);
      c($);
    }
    m(t.collection.columns);
  }
  let b = N(() => o.recombineColumns(t.collection.columns, d, s, u), [
    t.collection.columns,
    d,
    s,
    u,
    o
  ]), h = X(($) => {
    l($);
  }, [
    l
  ]), v = X(($, x) => {
    let E = new Map(Array.from(u).map(([T, g]) => [
      T,
      g.props.width
    ])), P = o.resizeColumnWidth(a, t.collection, E, d, $, x), B = new Map(Array.from(s).map(([T]) => [
      T,
      P.get(T)
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
  ]), y = X(() => {
    l(null);
  }, [
    l
  ]);
  return N(() => o.buildColumnWidths(a, t.collection, b), [
    a,
    t.collection,
    b,
    o
  ]), N(() => ({
    resizingColumn: i,
    updateResizedColumns: v,
    startResize: h,
    endResize: y,
    getColumnWidth: ($) => o.getColumnWidth($),
    getColumnMinWidth: ($) => o.getColumnMinWidth($),
    getColumnMaxWidth: ($) => o.getColumnMaxWidth($),
    tableState: t
  }), [
    o,
    i,
    v,
    h,
    y,
    t
  ]);
}
const sh = "row-header-column-" + Math.random().toString(36).slice(2);
let Tl = "row-header-column-" + Math.random().toString(36).slice(2);
for (; sh === Tl; )
  Tl = "row-header-column-" + Math.random().toString(36).slice(2);
function dh(e, t) {
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
        let { column: p, index: m } = r.get(c);
        if (m > d.length)
          break;
        for (let b = m; b < d.length; b++)
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
        let c = i[s], p = c.reduce((m, b) => m + b.colspan, 0);
        if (p < l) {
          let m = {
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
          c.length > 0 && (c[c.length - 1].nextKey = m.key, m.prevKey = c[c.length - 1].key), c.push(m);
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
class o6 extends r6 {
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
    return (t = At(this.body.childNodes)) === null || t === void 0 ? void 0 : t.key;
  }
  getLastKey() {
    var t;
    return (t = Yt(this.body.childNodes)) === null || t === void 0 ? void 0 : t.key;
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
        key: sh,
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
        key: Tl,
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
    let d = dh(u, l);
    d.forEach((c, p) => o.splice(p, 0, c)), super({
      columnCount: l.length,
      items: o,
      visitNode: (c) => (c.column = l[c.index], c)
    }), this._size = 0, this.columns = l, this.rowHeaderColumnKeys = a, this.body = i, this.headerRows = d, this._size = [
      ...i.childNodes
    ].length, this.rowHeaderColumnKeys.size === 0 && this.rowHeaderColumnKeys.add(this.columns.find((c) => {
      var p, m;
      return !(!((p = c.props) === null || p === void 0) && p.isDragButtonCell) && !(!((m = c.props) === null || m === void 0) && m.isSelectionCell);
    }).key);
  }
}
const u6 = {
  ascending: "descending",
  descending: "ascending"
};
function s6(e) {
  let [t, n] = G(!1), { selectionMode: r = "none", showSelectionCheckboxes: a, showDragButtons: i } = e, l = N(() => ({
    showSelectionCheckboxes: a && r !== "none",
    showDragButtons: i,
    selectionMode: r,
    columns: []
  }), [
    e.children,
    a,
    r,
    i
  ]), o = ho(e, X((d) => new o6(d, null, l), [
    l
  ]), l), { disabledKeys: u, selectionManager: s } = n6({
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
        direction: c ?? (((p = e.sortDescriptor) === null || p === void 0 ? void 0 : p.column) === d ? u6[e.sortDescriptor.direction] : "ascending")
      });
    }
  };
}
function d6(e) {
  var t;
  let n = So({
    ...e,
    suppressTextValueWarning: !0,
    defaultSelectedKey: (t = e.defaultSelectedKey) !== null && t !== void 0 ? t : hs(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set())
  }), { selectionManager: r, collection: a, selectedKey: i } = n, l = R(i);
  return Y(() => {
    let o = i;
    (r.isEmpty || !a.getItem(o)) && (o = hs(a, n.disabledKeys), o != null && r.setSelectedKeys([
      o
    ])), (o != null && r.focusedKey == null || !r.isFocused && o !== l.current) && r.setFocusedKey(o), l.current = o;
  }), {
    ...n,
    isDisabled: e.isDisabled || !1
  };
}
function hs(e, t) {
  let n = null;
  if (e) {
    for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey(); )
      n = e.getKeyAfter(n);
    t.has(n) && n === e.getLastKey() && (n = e.getFirstKey());
  }
  return n;
}
const c6 = 1500, vs = 500;
let an = {}, f6 = 0, tr = !1, kt = null, ln = null;
function m6(e = {}) {
  let { delay: t = c6, closeDelay: n = vs } = e, { isOpen: r, open: a, close: i } = xn(e), l = N(() => `${++f6}`, []), o = R(), u = () => {
    an[l] = c;
  }, s = () => {
    for (let m in an)
      m !== l && (an[m](!0), delete an[m]);
  }, d = () => {
    clearTimeout(o.current), o.current = null, s(), u(), tr = !0, a(), kt && (clearTimeout(kt), kt = null), ln && (clearTimeout(ln), ln = null);
  }, c = (m) => {
    m || n <= 0 ? (clearTimeout(o.current), o.current = null, i()) : o.current || (o.current = setTimeout(() => {
      o.current = null, i();
    }, n)), kt && (clearTimeout(kt), kt = null), tr && (ln && clearTimeout(ln), ln = setTimeout(() => {
      delete an[l], ln = null, tr = !1;
    }, Math.max(vs, n)));
  }, p = () => {
    s(), u(), !r && !kt && !tr ? kt = setTimeout(() => {
      kt = null, tr = !0, d();
    }, t) : r || d();
  };
  return Y(() => () => {
    clearTimeout(o.current), an[l] && delete an[l];
  }, [
    l
  ]), {
    isOpen: r,
    open: (m) => {
      !m && t > 0 && !o.current ? p() : d();
    },
    close: c
  };
}
class p6 {
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
function b6(e) {
  let [t, n] = Ie(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e.onExpandedChange), r = Po(e), a = N(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), i = ho(e, X((o) => new p6(o, {
    expandedKeys: t
  }), [
    t
  ]), null);
  return Y(() => {
    r.focusedKey != null && !i.getItem(r.focusedKey) && r.setFocusedKey(null);
  }, [
    i,
    r.focusedKey
  ]), {
    collection: i,
    expandedKeys: t,
    disabledKeys: a,
    toggleKey: (o) => {
      n(h6(t, o));
    },
    setExpandedKeys: n,
    selectionManager: new wo(i, r)
  };
}
function h6(e, t) {
  let n = new Set(e);
  return n.has(t) ? n.delete(t) : n.add(t), n;
}
var Ml = { exports: {} }, Ji = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs;
function v6() {
  if (gs)
    return Ji;
  gs = 1;
  var e = f;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, a = e.useEffect, i = e.useLayoutEffect, l = e.useDebugValue;
  function o(c, p) {
    var m = p(), b = r({ inst: { value: m, getSnapshot: p } }), h = b[0].inst, v = b[1];
    return i(function() {
      h.value = m, h.getSnapshot = p, u(h) && v({ inst: h });
    }, [c, m, p]), a(function() {
      return u(h) && v({ inst: h }), c(function() {
        u(h) && v({ inst: h });
      });
    }, [c]), l(m), m;
  }
  function u(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var m = p();
      return !n(c, m);
    } catch {
      return !0;
    }
  }
  function s(c, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : o;
  return Ji.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Ji;
}
var Xi = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $s;
function g6() {
  return $s || ($s = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = f, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var E = arguments.length, P = new Array(E > 1 ? E - 1 : 0), B = 1; B < E; B++)
          P[B - 1] = arguments[B];
        r("error", x, P);
      }
    }
    function r(x, E, P) {
      {
        var B = t.ReactDebugCurrentFrame, T = B.getStackAddendum();
        T !== "" && (E += "%s", P = P.concat([T]));
        var g = P.map(function(M) {
          return String(M);
        });
        g.unshift("Warning: " + E), Function.prototype.apply.call(console[x], console, g);
      }
    }
    function a(x, E) {
      return x === E && (x !== 0 || 1 / x === 1 / E) || x !== x && E !== E;
    }
    var i = typeof Object.is == "function" ? Object.is : a, l = e.useState, o = e.useEffect, u = e.useLayoutEffect, s = e.useDebugValue, d = !1, c = !1;
    function p(x, E, P) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var B = E();
      if (!c) {
        var T = E();
        i(B, T) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var g = l({
        inst: {
          value: B,
          getSnapshot: E
        }
      }), M = g[0].inst, F = g[1];
      return u(function() {
        M.value = B, M.getSnapshot = E, m(M) && F({
          inst: M
        });
      }, [x, B, E]), o(function() {
        m(M) && F({
          inst: M
        });
        var C = function() {
          m(M) && F({
            inst: M
          });
        };
        return x(C);
      }, [x]), s(B), B;
    }
    function m(x) {
      var E = x.getSnapshot, P = x.value;
      try {
        var B = E();
        return !i(P, B);
      } catch {
        return !0;
      }
    }
    function b(x, E, P) {
      return E();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", v = !h, y = v ? b : p, $ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    Xi.useSyncExternalStore = $, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xi;
}
process.env.NODE_ENV === "production" ? Ml.exports = v6() : Ml.exports = g6();
var $6 = Ml.exports;
function y6(e, t, n, r) {
  Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
}
var x6 = {};
y6(x6, "useToolbar", () => ch);
function ch(e, t) {
  const { "aria-label": n, "aria-labelledby": r, orientation: a = "horizontal" } = e;
  let [i, l] = G(!1);
  de(() => {
    var b;
    l(!!(t.current && (!((b = t.current.parentElement) === null || b === void 0) && b.closest('[role="toolbar"]'))));
  });
  const { direction: o } = ie(), u = o === "rtl" && a === "horizontal";
  let s = Rr(t);
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
  }, c = R(null), p = (b) => {
    !b.currentTarget.contains(b.relatedTarget) && !c.current && (c.current = b.target);
  }, m = (b) => {
    var h;
    if (c.current && !b.currentTarget.contains(b.relatedTarget) && (!((h = t.current) === null || h === void 0) && h.contains(b.target))) {
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
      onFocusCapture: i ? void 0 : m,
      onBlurCapture: i ? void 0 : p
    }
  };
}
function fh(e) {
  return e && e.__esModule ? e.default : e;
}
class xr {
  get childNodes() {
    throw new Error("childNodes is not supported");
  }
  clone() {
    let t = new xr(this.type, this.key);
    return t.value = this.value, t.level = this.level, t.hasChildNodes = this.hasChildNodes, t.rendered = this.rendered, t.textValue = this.textValue, t["aria-label"] = this["aria-label"], t.index = this.index, t.parentKey = this.parentKey, t.prevKey = this.prevKey, t.nextKey = this.nextKey, t.firstChildKey = this.firstChildKey, t.lastChildKey = this.lastChildKey, t.props = this.props, t;
  }
  constructor(t, n) {
    this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.type = t, this.key = n;
  }
}
class mh {
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
class Dr extends mh {
  get index() {
    return this._index;
  }
  set index(t) {
    this._index = t, this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof Dr ? this.parentNode.level + (this.node.type === "item" ? 1 : 0) : 0;
  }
  updateNode() {
    var t, n, r, a;
    let i = this.ownerDocument.getMutableNode(this);
    i.index = this.index, i.level = this.level, i.parentKey = this.parentNode instanceof Dr ? this.parentNode.node.key : null;
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
    super(n), this.nodeType = 8, this._index = 0, this.hasSetProps = !1, this.node = new xr(t, `react-aria-${++n.nodeId}`), this.ownerDocument.startTransaction();
  }
}
class ph {
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
class D6 extends mh {
  get isConnected() {
    return !0;
  }
  createElement(t) {
    return new Dr(t, this);
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
      i instanceof Dr && i.isConnected && i.updateNode();
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
function ut(e) {
  let { children: t, items: n, idScope: r, addIdAndValue: a, dependencies: i = [] } = e, l = N(() => /* @__PURE__ */ new WeakMap(), i);
  return N(() => {
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
          r && (p = r + ":" + p), c = /* @__PURE__ */ As(c, a ? {
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
function jr(e) {
  return ut({
    ...e,
    addIdAndValue: !0
  });
}
const bh = /* @__PURE__ */ U(!1);
function Hr(e, t) {
  let { collection: n, document: r } = _r(t);
  return {
    portal: Ao(e, r),
    collection: n
  };
}
function E6(e, t, n) {
  let r = Et(), a = R(r);
  a.current = r;
  let i = X(() => a.current ? n() : t(), [
    t,
    n
  ]);
  return $6.useSyncExternalStore(e, i);
}
const C6 = typeof f.useSyncExternalStore == "function" ? f.useSyncExternalStore : E6;
function _r(e) {
  let t = N(() => new D6(e || new ph()), [
    e
  ]), n = X((l) => t.subscribe(l), [
    t
  ]), r = X(() => {
    let l = t.getCollection();
    return t.isSSR && t.resetAfterSSR(), l;
  }, [
    t
  ]), a = X(() => (t.isSSR = !0, t.getCollection()), [
    t
  ]);
  return {
    collection: C6(n, r, a),
    document: t
  };
}
const Rl = /* @__PURE__ */ U(null), Dn = /* @__PURE__ */ U(null);
function Ao(e, t) {
  let n = _(Dn), r = t ?? n, a = jr(e), i = N(() => /* @__PURE__ */ f.createElement(bh.Provider, {
    value: !0
  }, a), [
    a
  ]);
  return Et() ? /* @__PURE__ */ f.createElement(Rl.Provider, {
    value: r
  }, i) : /* @__PURE__ */ Xv(i, r);
}
function hh(e) {
  return /* @__PURE__ */ f.createElement(f.Fragment, null, Ao(e));
}
function vh(e, t, n) {
  let r = _(bh);
  var a;
  return r ? (a = st(e, t, n, "children" in t ? t.children : null)) !== null && a !== void 0 ? a : /* @__PURE__ */ f.createElement(f.Fragment, null) : null;
}
function P6(e, t, n) {
  return X((r) => {
    r == null || r.setProps(e, t, n);
  }, [
    e,
    t,
    n
  ]);
}
function st(e, t, n, r, a) {
  let i = P6(t, n, r), l = _(Rl);
  if (l) {
    let o = l.ownerDocument.nodesByProps.get(t);
    return o || (o = l.ownerDocument.createElement(e), o.setProps(t, n, r), l.appendChild(o), l.ownerDocument.updateCollection(), l.ownerDocument.nodesByProps.set(t, o)), a ? /* @__PURE__ */ f.createElement(Rl.Provider, {
      value: o
    }, a) : null;
  }
  return /* @__PURE__ */ f.createElement(e, {
    ref: i
  }, a);
}
function w6(e, t) {
  let n = jr(e);
  return st("section", e, t, null, n);
}
const S6 = /* @__PURE__ */ Z(w6), gh = /* @__PURE__ */ U(null), $h = /* @__PURE__ */ U(null);
function To(e) {
  let t = _(gh);
  e = O(t, e), e.dependencies = ((t == null ? void 0 : t.dependencies) || []).concat(e.dependencies);
  let n = typeof e.children == "function" ? e.children : null;
  return /* @__PURE__ */ f.createElement($h.Provider, {
    value: n
  }, jr(e));
}
const B6 = Symbol("callback"), Er = Symbol("default");
function ue({ values: e, children: t }) {
  for (let [n, r] of e)
    t = /* @__PURE__ */ f.createElement(n.Provider, {
      value: r
    }, t);
  return t;
}
function Q(e) {
  let { className: t, style: n, children: r, defaultClassName: a, defaultChildren: i, values: l } = e;
  return N(() => {
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
function Ke(e, t) {
  return (n) => t(typeof e == "function" ? e(n) : e, n);
}
function Ur(e, t) {
  let n = _(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = new Intl.ListFormat().format(Object.keys(n.slots).map((i) => `"${i}"`));
    if (!t && !n.slots[Er])
      throw new Error(`A slot prop is required. Valid slot names are ${r}.`);
    let a = t || Er;
    if (!n.slots[a])
      throw new Error(`Invalid slot "${t}". Valid slot names are ${r}.`);
    return n.slots[a];
  }
  return n;
}
function ee(e, t, n) {
  let r = Ur(n, e.slot) || {}, { ref: a, [B6]: i, ...l } = r, o = Fe(N(() => _a(t, a), [
    t,
    a
  ])), u = O(l, e);
  return "style" in l && l.style && typeof l.style == "object" && "style" in e && e.style && typeof e.style == "object" && (u.style = {
    ...l.style,
    ...e.style
  }), Y(() => {
    i && i(e);
  }, [
    i,
    e
  ]), [
    u,
    o
  ];
}
function ze() {
  let [e, t] = G(!0), n = R(!1), r = X((a) => {
    n.current = !0, t(!!a);
  }, []);
  return de(() => {
    n.current || t(!1);
  }, []), [
    r,
    e
  ];
}
function si(e, t = !0) {
  let [n, r] = G(!0);
  return yh(e, n && t, X(() => r(!1), [])), n && t;
}
function ja(e, t) {
  let [n, r] = G(!1), [a, i] = G("idle");
  return !t && e.current && a === "idle" && (n = !0, r(!0), i("exiting")), !e.current && a === "exited" && i("idle"), yh(e, n, X(() => {
    i("exited"), r(!1);
  }, [])), n;
}
function yh(e, t, n) {
  let r = R(null);
  t && e.current && (r.current = window.getComputedStyle(e.current).animation), de(() => {
    if (t && e.current) {
      let a = window.getComputedStyle(e.current);
      if (a.animationName && a.animationName !== "none" && a.animation !== r.current) {
        let i = (o) => {
          o.target === e.current && (l.removeEventListener("animationend", i), Br.flushSync(() => {
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
const Cr = /* @__PURE__ */ U(!1), k6 = typeof DocumentFragment < "u" ? new DocumentFragment() : null;
function Mo(e) {
  let t = _(Cr), n = Et();
  if (t)
    return /* @__PURE__ */ f.createElement(f.Fragment, null, e.children);
  let r = /* @__PURE__ */ f.createElement(Cr.Provider, {
    value: !0
  }, e.children);
  return n ? /* @__PURE__ */ f.createElement("template", {
    "data-react-aria-hidden": !0
  }, r) : /* @__PURE__ */ Br.createPortal(r, k6);
}
function di(e) {
  let t = (n, r) => _(Cr) ? null : e(n, r);
  return t.displayName = e.displayName || e.name, f.forwardRef(t);
}
function ot(e) {
  const t = /^(data-.*)$/;
  let n = {};
  for (const r in e)
    t.test(r) || (n[r] = e[r]);
  return n;
}
const xh = /* @__PURE__ */ U(null);
function F6(e, t) {
  [e, t] = ee(e, t, xh);
  let n = e.href ? "a" : "span", { linkProps: r, isPressed: a } = v$({
    ...e,
    elementType: n
  }, t), { hoverProps: i, isHovered: l } = ge(e), { focusProps: o, isFocused: u, isFocusVisible: s } = fe(), d = Q({
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
  return /* @__PURE__ */ f.createElement(n, {
    ref: t,
    slot: e.slot || void 0,
    ...O(d, r, i, o),
    "data-focused": u || void 0,
    "data-hovered": l || void 0,
    "data-pressed": a || void 0,
    "data-focus-visible": s || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, d.children);
}
const A6 = /* @__PURE__ */ Z(F6), T6 = /* @__PURE__ */ U(null);
function M6(e, t) {
  [e, t] = ee(e, t, T6);
  let { portal: n, collection: r } = Hr(e);
  return /* @__PURE__ */ f.createElement(f.Fragment, null, n, /* @__PURE__ */ f.createElement(R6, {
    props: e,
    collection: r,
    breadcrumbsRef: t
  }));
}
function R6({ props: e, collection: t, breadcrumbsRef: n }) {
  var r;
  return /* @__PURE__ */ f.createElement("ol", {
    ref: n,
    ...q(e, {
      labelable: !0
    }),
    slot: e.slot || void 0,
    style: e.style,
    className: (r = e.className) !== null && r !== void 0 ? r : "react-aria-Breadcrumbs"
  }, [
    ...t
  ].map((a, i) => /* @__PURE__ */ f.createElement(z6, {
    key: a.key,
    node: a,
    isCurrent: i === t.size - 1,
    isDisabled: e.isDisabled,
    onAction: e.onAction
  })));
}
const I6 = /* @__PURE__ */ Z(M6);
function N6(e, t) {
  return st("item", e, t, e.children);
}
const K6 = /* @__PURE__ */ Z(N6);
function z6({ node: e, isCurrent: t, isDisabled: n, onAction: r }) {
  let a = {
    "aria-current": t ? "page" : null,
    isDisabled: n || t,
    onPress: () => r == null ? void 0 : r(e.key)
  };
  var i;
  return /* @__PURE__ */ f.createElement("li", {
    ...q(e.props),
    ref: e.props.ref,
    style: e.props.style,
    className: (i = e.props.className) !== null && i !== void 0 ? i : "react-aria-Breadcrumb"
  }, /* @__PURE__ */ f.createElement(xh.Provider, {
    value: a
  }, e.rendered));
}
const V6 = /* @__PURE__ */ new Set([
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "name",
  "value"
]), dt = /* @__PURE__ */ U({});
function L6(e, t) {
  [e, t] = ee(e, t, dt);
  let n = e, { buttonProps: r, isPressed: a } = Fd(e, t), { focusProps: i, isFocused: l, isFocusVisible: o } = fe(e), { hoverProps: u, isHovered: s } = ge(e), d = Q({
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
  return /* @__PURE__ */ f.createElement("button", {
    ...q(e, {
      propNames: V6
    }),
    ...O(r, i, u),
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
const Gn = /* @__PURE__ */ di(L6), ci = /* @__PURE__ */ U({});
function O6(e, t) {
  [e, t] = ee(e, t, ci);
  let { children: n, level: r = 3, className: a, ...i } = e, l = `h${r}`;
  return /* @__PURE__ */ f.createElement(l, {
    ...i,
    ref: t,
    className: a ?? "react-aria-Heading"
  }, n);
}
const Dh = /* @__PURE__ */ Z(O6), Ae = /* @__PURE__ */ U({});
function j6(e, t) {
  [e, t] = ee(e, t, Ae);
  let { elementType: n = "span", ...r } = e;
  return /* @__PURE__ */ f.createElement(n, {
    className: "react-aria-Text",
    ...r,
    ref: t
  });
}
const Wr = /* @__PURE__ */ Z(j6), Eh = /* @__PURE__ */ U({}), Ch = /* @__PURE__ */ U({}), fi = /* @__PURE__ */ U(null), mi = /* @__PURE__ */ U(null);
function H6(e, t) {
  [e, t] = ee(e, t, Eh);
  let { locale: n } = ie(), r = x3({
    ...e,
    locale: n,
    createCalendar: Xa
  }), { calendarProps: a, prevButtonProps: i, nextButtonProps: l, errorMessageProps: o, title: u } = z1(e, r), s = Q({
    ...e,
    values: {
      state: r,
      isDisabled: e.isDisabled || !1,
      isInvalid: r.isValueInvalid
    },
    defaultClassName: "react-aria-Calendar"
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...s,
    ...a,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": r.isValueInvalid || void 0
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        dt,
        {
          slots: {
            previous: i,
            next: l
          }
        }
      ],
      [
        ci,
        {
          "aria-hidden": !0,
          level: 2,
          children: u
        }
      ],
      [
        fi,
        r
      ],
      [
        Ae,
        {
          slots: {
            errorMessage: o
          }
        }
      ]
    ]
  }, /* @__PURE__ */ f.createElement(Vt, null, /* @__PURE__ */ f.createElement("h2", null, a["aria-label"])), s.children, /* @__PURE__ */ f.createElement(Vt, null, /* @__PURE__ */ f.createElement("button", {
    "aria-label": l["aria-label"],
    disabled: l.isDisabled,
    onClick: () => r.focusNextPage(),
    tabIndex: -1
  }))));
}
const _6 = /* @__PURE__ */ Z(H6);
function U6(e, t) {
  [e, t] = ee(e, t, Ch);
  let { locale: n } = ie(), r = S5({
    ...e,
    locale: n,
    createCalendar: Xa
  }), { calendarProps: a, prevButtonProps: i, nextButtonProps: l, errorMessageProps: o, title: u } = V1(e, r, t), s = Q({
    ...e,
    values: {
      state: r,
      isDisabled: e.isDisabled || !1,
      isInvalid: r.isValueInvalid
    },
    defaultClassName: "react-aria-RangeCalendar"
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...s,
    ...a,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": r.isValueInvalid || void 0
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        dt,
        {
          slots: {
            previous: i,
            next: l
          }
        }
      ],
      [
        ci,
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
        Ae,
        {
          slots: {
            errorMessage: o
          }
        }
      ]
    ]
  }, /* @__PURE__ */ f.createElement(Vt, null, /* @__PURE__ */ f.createElement("h2", null, a["aria-label"])), s.children, /* @__PURE__ */ f.createElement(Vt, null, /* @__PURE__ */ f.createElement("button", {
    "aria-label": l["aria-label"],
    disabled: l.isDisabled,
    onClick: () => r.focusNextPage(),
    tabIndex: -1
  }))));
}
const W6 = /* @__PURE__ */ Z(U6), pi = /* @__PURE__ */ U(null);
function G6(e, t) {
  let n = _(fi), r = _(mi), a = n ?? r, i = a.visibleRange.start;
  e.offset && (i = i.add(e.offset));
  let { gridProps: l, headerProps: o, weekDays: u } = L1({
    startDate: i,
    endDate: ka(i),
    weekdayStyle: e.weekdayStyle
  }, a);
  var s;
  return /* @__PURE__ */ f.createElement(pi.Provider, {
    value: {
      headerProps: o,
      weekDays: u,
      startDate: i
    }
  }, /* @__PURE__ */ f.createElement("table", {
    ...q(e),
    ...l,
    ref: t,
    style: e.style,
    className: (s = e.className) !== null && s !== void 0 ? s : "react-aria-CalendarGrid"
  }, typeof e.children != "function" ? e.children : /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(wh, null, (d) => /* @__PURE__ */ f.createElement(Sh, null, d)), /* @__PURE__ */ f.createElement(Ro, null, e.children))));
}
const Ph = /* @__PURE__ */ Z(G6);
function Z6(e, t) {
  let { children: n, style: r, className: a } = e, { headerProps: i, weekDays: l } = _(pi);
  return /* @__PURE__ */ f.createElement("thead", {
    ...q(e),
    ...i,
    ref: t,
    style: r,
    className: a || "react-aria-CalendarGridHeader"
  }, /* @__PURE__ */ f.createElement("tr", null, l.map((o, u) => /* @__PURE__ */ f.cloneElement(n(o), {
    key: u
  }))));
}
const wh = /* @__PURE__ */ Z(Z6);
function q6(e, t) {
  let { children: n, style: r, className: a } = e;
  return /* @__PURE__ */ f.createElement("th", {
    ...q(e),
    ref: t,
    style: r,
    className: a || "react-aria-CalendarHeaderCell"
  }, n);
}
const Sh = /* @__PURE__ */ Z(q6);
function Y6(e, t) {
  let { children: n, style: r, className: a } = e, i = _(fi), l = _(mi), o = i ?? l, { startDate: u } = _(pi), { locale: s } = ie(), d = T$(u, s);
  return /* @__PURE__ */ f.createElement("tbody", {
    ...q(e),
    ref: t,
    style: r,
    className: a || "react-aria-CalendarGridBody"
  }, [
    ...new Array(d).keys()
  ].map((c) => /* @__PURE__ */ f.createElement("tr", {
    key: c
  }, o.getDatesInWeek(c, u).map((p, m) => p ? /* @__PURE__ */ f.cloneElement(n(p), {
    key: m
  }) : /* @__PURE__ */ f.createElement("td", {
    key: m
  })))));
}
const Ro = /* @__PURE__ */ Z(Y6);
function J6({ date: e, ...t }, n) {
  let r = _(fi), a = _(mi), i = r ?? a;
  var l;
  let { startDate: o } = (l = _(pi)) !== null && l !== void 0 ? l : {
    startDate: i.visibleRange.start
  }, u = R(null), { cellProps: s, buttonProps: d, ...c } = O1({
    date: e
  }, i, u), { hoverProps: p, isHovered: m } = ge({
    ...t,
    isDisabled: c.isDisabled
  }), { focusProps: b, isFocusVisible: h } = fe();
  h && (h = c.isFocused);
  let v = !C$(o, e), y = !1, $ = !1;
  "highlightedRange" in i && i.highlightedRange && (y = Be(e, i.highlightedRange.start), $ = Be(e, i.highlightedRange.end));
  let x = Q({
    ...t,
    defaultChildren: c.formattedDate,
    defaultClassName: "react-aria-CalendarCell",
    values: {
      date: e,
      isHovered: m,
      isOutsideMonth: v,
      isFocusVisible: h,
      isSelectionStart: y,
      isSelectionEnd: $,
      ...c
    }
  }), E = {
    "data-focused": c.isFocused || void 0,
    "data-hovered": m || void 0,
    "data-pressed": c.isPressed || void 0,
    "data-unavailable": c.isUnavailable || void 0,
    "data-disabled": c.isDisabled || void 0,
    "data-focus-visible": h || void 0,
    "data-outside-visible-range": c.isOutsideVisibleRange || void 0,
    "data-outside-month": v || void 0,
    "data-selected": c.isSelected || void 0,
    "data-selection-start": y || void 0,
    "data-selection-end": $ || void 0,
    "data-invalid": c.isInvalid || void 0
  };
  return /* @__PURE__ */ f.createElement("td", {
    ...s,
    ref: n
  }, /* @__PURE__ */ f.createElement("div", {
    ...O(q(t), d, b, p, E, x),
    ref: u
  }));
}
const Bh = /* @__PURE__ */ Z(J6), Xe = /* @__PURE__ */ U(null);
function X6(e, t) {
  let n = _(Xe);
  return n != null && n.isInvalid ? /* @__PURE__ */ f.createElement(ex, {
    ...e,
    ref: t
  }) : null;
}
const Q6 = /* @__PURE__ */ Z(X6), ex = /* @__PURE__ */ Z((e, t) => {
  let n = _(Xe), r = Q({
    ...e,
    defaultClassName: "react-aria-FieldError",
    defaultChildren: n.validationErrors.join(" "),
    values: n
  });
  return /* @__PURE__ */ f.createElement(Wr, {
    slot: "errorMessage",
    ...r,
    ref: t
  });
}), Ve = /* @__PURE__ */ U({});
function tx(e, t) {
  [e, t] = ee(e, t, Ve);
  let { elementType: n = "label", ...r } = e;
  return /* @__PURE__ */ f.createElement(n, {
    className: "react-aria-Label",
    ...r,
    ref: t
  });
}
const nx = /* @__PURE__ */ di(tx), rx = /* @__PURE__ */ U(null), kh = /* @__PURE__ */ U(null);
function ax(e, t) {
  [e, t] = ee(e, t, rx);
  var n;
  let r = B5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), [a, i] = ze();
  var l;
  let { groupProps: o, labelProps: u, descriptionProps: s, errorMessageProps: d, ...c } = G1({
    ...e,
    label: i,
    validationBehavior: (l = e.validationBehavior) !== null && l !== void 0 ? l : "native"
  }, r), p = Q({
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
  return /* @__PURE__ */ f.createElement("div", {
    ...o,
    ...p,
    ref: t,
    slot: e.slot || void 0,
    "data-readonly": r.isReadOnly || void 0,
    "data-required": e.isRequired || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-disabled": e.isDisabled || void 0
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        kh,
        r
      ],
      [
        Ve,
        {
          ...u,
          ref: a,
          elementType: "span"
        }
      ],
      [
        Ae,
        {
          slots: {
            description: s,
            errorMessage: d
          }
        }
      ],
      [
        Xe,
        c
      ]
    ]
  }, p.children));
}
const bi = /* @__PURE__ */ U(null);
function ix(e, t) {
  [e, t] = ee(e, t, bi);
  let n = R(null), r = _(kh);
  var a;
  let { labelProps: i, inputProps: l, isSelected: o, isDisabled: u, isReadOnly: s, isPressed: d, isInvalid: c } = r ? Z1({
    ...e,
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: e.value,
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, r, n) : hc({
    ...e,
    children: typeof e.children == "function" ? !0 : e.children,
    validationBehavior: (a = e.validationBehavior) !== null && a !== void 0 ? a : "native"
  }, ti(e), n), { isFocused: p, isFocusVisible: m, focusProps: b } = fe(), h = u || s, { hoverProps: v, isHovered: y } = ge({
    ...e,
    isDisabled: h
  }), $ = Q({
    // TODO: should data attrs go on the label or on the <input>? useCheckbox passes them to the input...
    ...e,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: o,
      isIndeterminate: e.isIndeterminate || !1,
      isPressed: d,
      isHovered: y,
      isFocused: p,
      isFocusVisible: m,
      isDisabled: u,
      isReadOnly: s,
      isInvalid: c,
      isRequired: e.isRequired || !1
    }
  }), x = q(e);
  return delete x.id, /* @__PURE__ */ f.createElement("label", {
    ...O(x, i, v, $),
    ref: t,
    slot: e.slot || void 0,
    "data-selected": o || void 0,
    "data-indeterminate": e.isIndeterminate || void 0,
    "data-pressed": d || void 0,
    "data-hovered": y || void 0,
    "data-focused": p || void 0,
    "data-focus-visible": m || void 0,
    "data-disabled": u || void 0,
    "data-readonly": s || void 0,
    "data-invalid": c || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ f.createElement(Vt, {
    elementType: "span"
  }, /* @__PURE__ */ f.createElement("input", {
    ...O(l, b),
    ref: n
  })), $.children);
}
const lx = /* @__PURE__ */ Z(ix), ox = /* @__PURE__ */ Z(ax), jt = /* @__PURE__ */ U({});
function ux(e, t) {
  [e, t] = ee(e, t, jt);
  let { isDisabled: n, isInvalid: r, onHoverStart: a, onHoverChange: i, onHoverEnd: l, ...o } = e, { hoverProps: u, isHovered: s } = ge({
    onHoverStart: a,
    onHoverChange: i,
    onHoverEnd: l,
    isDisabled: n
  }), { isFocused: d, isFocusVisible: c, focusProps: p } = fe({
    within: !0
  });
  n ?? (n = !!e["aria-disabled"] && e["aria-disabled"] !== "false"), r ?? (r = !!e["aria-invalid"] && e["aria-invalid"] !== "false");
  let m = Q({
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
  var b, h;
  return /* @__PURE__ */ f.createElement("div", {
    ...O(o, p, u),
    ...m,
    ref: t,
    role: (b = e.role) !== null && b !== void 0 ? b : "group",
    slot: (h = e.slot) !== null && h !== void 0 ? h : void 0,
    "data-focus-within": d || void 0,
    "data-hovered": s || void 0,
    "data-focus-visible": c || void 0,
    "data-disabled": n || void 0,
    "data-invalid": r || void 0
  }, m.children);
}
const Io = /* @__PURE__ */ Z(ux), tn = /* @__PURE__ */ U({});
let sx = (e) => {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...a } = e;
  return a;
};
function dx(e, t) {
  [e, t] = ee(e, t, tn);
  let { hoverProps: n, isHovered: r } = ge(e), { isFocused: a, isFocusVisible: i, focusProps: l } = fe({
    isTextInput: !0,
    autoFocus: e.autoFocus
  }), o = !!e["aria-invalid"] && e["aria-invalid"] !== "false", u = Q({
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
  return /* @__PURE__ */ f.createElement("input", {
    ...O(sx(e), l, n),
    ...u,
    ref: t,
    "data-focused": a || void 0,
    "data-disabled": e.disabled || void 0,
    "data-hovered": r || void 0,
    "data-focus-visible": i || void 0,
    "data-invalid": o || void 0
  });
}
const Fh = /* @__PURE__ */ di(dx), hi = /* @__PURE__ */ U(null);
function cx(e, t) {
  let { render: n } = _(hi);
  return /* @__PURE__ */ f.createElement(f.Fragment, null, n(e, t));
}
const No = /* @__PURE__ */ Z(cx), Qe = /* @__PURE__ */ U({}), fx = /* @__PURE__ */ U({});
function mx(e, t) {
  let [n, r] = ee(e, t, fx), a = vh("header", e, t);
  return a || /* @__PURE__ */ f.createElement("header", {
    className: "react-aria-Header",
    ...n,
    ref: r
  }, n.children);
}
const Ko = /* @__PURE__ */ Z(mx), zo = /* @__PURE__ */ U({});
function px(e, t) {
  let [n, r] = ee(e, t, zo), { elementType: a, orientation: i, style: l, className: o } = n, u = a || "hr";
  u === "hr" && i === "vertical" && (u = "div");
  let { separatorProps: s } = i5({
    elementType: a,
    orientation: i
  }), d = vh("separator", e, t);
  return d || /* @__PURE__ */ f.createElement(u, {
    ...q(n),
    ...s,
    style: l,
    className: o ?? "react-aria-Separator",
    ref: r,
    slot: n.slot || void 0
  });
}
const vi = /* @__PURE__ */ Z(px), Gr = /* @__PURE__ */ U(null), $t = /* @__PURE__ */ U(null);
function bx(e, t) {
  [e, t] = ee(e, t, Gr);
  let n = _(Cr), r = _($t);
  return _(Dn) ? /* @__PURE__ */ f.createElement(hh, e) : r ? n ? null : /* @__PURE__ */ f.createElement(Ah, {
    state: r,
    props: e,
    listBoxRef: t
  }) : /* @__PURE__ */ f.createElement(hx, {
    props: e,
    listBoxRef: t
  });
}
function hx({ props: e, listBoxRef: t }) {
  let { portal: n, collection: r } = Hr(e);
  e = {
    ...e,
    collection: r,
    children: null,
    items: null
  };
  let a = ui(e);
  return /* @__PURE__ */ f.createElement(f.Fragment, null, n, /* @__PURE__ */ f.createElement(Ah, {
    state: a,
    props: e,
    listBoxRef: t
  }));
}
const Vo = /* @__PURE__ */ Z(bx);
function Ah({ state: e, props: t, listBoxRef: n }) {
  let { dragAndDropHooks: r, layout: a = "stack", orientation: i = "vertical" } = t, { collection: l, selectionManager: o } = e, u = !!(r != null && r.useDraggableCollectionState), s = !!(r != null && r.useDroppableCollectionState), { direction: d } = ie(), { disabledBehavior: c, disabledKeys: p } = o, m = Un({
    usage: "search",
    sensitivity: "base"
  }), b = N(() => t.keyboardDelegate || new yn({
    collection: l,
    collator: m,
    ref: n,
    disabledKeys: c === "selection" ? /* @__PURE__ */ new Set() : p,
    layout: a,
    orientation: i,
    direction: d
  }), [
    l,
    m,
    n,
    c,
    p,
    i,
    d,
    t.keyboardDelegate,
    a
  ]), { listBoxProps: h } = Dy({
    ...t,
    shouldSelectOnPressUp: u || t.shouldSelectOnPressUp,
    keyboardDelegate: b
  }, e, n), v = ut({
    items: l,
    children: (K) => {
      switch (K.type) {
        case "section":
          return /* @__PURE__ */ f.createElement(vx, {
            section: K
          });
        case "separator":
          return /* @__PURE__ */ f.createElement(vi, K.props);
        case "item":
          return /* @__PURE__ */ f.createElement(Mh, {
            item: K
          });
        default:
          throw new Error("Unsupported node type in Menu: " + K.type);
      }
    }
  }), y = R(u), $ = R(s);
  Y(() => {
    y.current !== u && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), $.current !== s && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    u,
    s
  ]);
  let x, E, P, B = !1, T = null, g = R(null);
  if (u && r) {
    x = r.useDraggableCollectionState({
      collection: l,
      selectionManager: o,
      preview: r.renderDragPreview ? g : void 0
    }), r.useDraggableCollection({}, x, n);
    let K = r.DragPreview;
    T = r.renderDragPreview ? /* @__PURE__ */ f.createElement(K, {
      ref: g
    }, r.renderDragPreview) : null;
  }
  if (s && r) {
    E = r.useDroppableCollectionState({
      collection: l,
      selectionManager: o
    });
    let K = r.dropTargetDelegate || new r.ListDropTargetDelegate(l, n, {
      orientation: i,
      layout: a,
      direction: d
    });
    P = r.useDroppableCollection({
      keyboardDelegate: b,
      dropTargetDelegate: K
    }, E, n), B = E.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: M, isFocused: F, isFocusVisible: C } = fe(), S = {
    isDropTarget: B,
    isEmpty: e.collection.size === 0,
    isFocused: F,
    isFocusVisible: C,
    layout: t.layout || "stack",
    state: e
  }, w = Q({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-ListBox",
    values: S
  }), k = null;
  return e.collection.size === 0 && t.renderEmptyState && (k = /* @__PURE__ */ f.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, t.renderEmptyState(S))), /* @__PURE__ */ f.createElement(Mr, null, /* @__PURE__ */ f.createElement("div", {
    ...q(t),
    ...O(h, M, P == null ? void 0 : P.collectionProps),
    ...w,
    ref: n,
    slot: t.slot || void 0,
    onScroll: t.onScroll,
    "data-drop-target": B || void 0,
    "data-empty": e.collection.size === 0 || void 0,
    "data-focused": F || void 0,
    "data-focus-visible": C || void 0,
    "data-layout": t.layout || "stack",
    "data-orientation": t.orientation || "vertical"
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Gr,
        t
      ],
      [
        $t,
        e
      ],
      [
        Qe,
        {
          dragAndDropHooks: r,
          dragState: x,
          dropState: E
        }
      ],
      [
        zo,
        {
          elementType: "div"
        }
      ],
      [
        hi,
        {
          render: yx
        }
      ]
    ]
  }, v), k, T));
}
function vx({ section: e, className: t, style: n }) {
  var r, a;
  let i = _($t), [l, o] = ze();
  var u;
  let { headingProps: s, groupProps: d } = Cy({
    heading: o,
    "aria-label": (u = e.props["aria-label"]) !== null && u !== void 0 ? u : void 0
  }), c = ut({
    items: i.collection.getChildren(e.key),
    children: (p) => {
      switch (p.type) {
        case "header":
          return /* @__PURE__ */ f.createElement(gx, {
            item: p,
            headingProps: s,
            headingRef: l
          });
        case "item":
          return /* @__PURE__ */ f.createElement(Mh, {
            item: p
          });
        default:
          throw new Error("Unsupported element type in Section: " + p.type);
      }
    }
  });
  return /* @__PURE__ */ f.createElement("section", {
    ...q(e.props),
    ...d,
    className: t || ((r = e.props) === null || r === void 0 ? void 0 : r.className) || "react-aria-Section",
    style: n || ((a = e.props) === null || a === void 0 ? void 0 : a.style),
    ref: e.props.ref
  }, c);
}
function gx({ item: e, headingProps: t, headingRef: n }) {
  let { ref: r, ...a } = e.props;
  return /* @__PURE__ */ f.createElement(Ko, {
    ...t,
    ...a,
    ref: _a(n, r)
  }, e.rendered);
}
function $x(e, t) {
  return st("item", e, t, e.children);
}
const Th = /* @__PURE__ */ Z($x);
function Mh({ item: e }) {
  var t;
  let n = Fe(e.props.ref), r = _($t), { dragAndDropHooks: a, dragState: i, dropState: l } = _(Qe), { optionProps: o, labelProps: u, descriptionProps: s, ...d } = Ey({
    key: e.key,
    "aria-label": (t = e.props) === null || t === void 0 ? void 0 : t["aria-label"]
  }, r, n), { hoverProps: c, isHovered: p } = ge({
    isDisabled: !d.allowsSelection && !d.hasAction
  }), m = null;
  i && a && (m = a.useDraggableItem({
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
  let h = e.props, v = i && i.isDragging(e.key), y = Q({
    ...h,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...d,
      isHovered: p,
      selectionMode: r.selectionManager.selectionMode,
      selectionBehavior: r.selectionManager.selectionBehavior,
      allowsDragging: !!i,
      isDragging: v,
      isDropTarget: b == null ? void 0 : b.isDropTarget
    }
  }), $ = (a == null ? void 0 : a.renderDropIndicator) || ((E) => /* @__PURE__ */ f.createElement(No, {
    target: E
  }));
  Y(() => {
    e.textValue || console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    e.textValue
  ]);
  let x = h.href ? "a" : "div";
  return /* @__PURE__ */ f.createElement(f.Fragment, null, (a == null ? void 0 : a.useDropIndicator) && $({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), /* @__PURE__ */ f.createElement(x, {
    ...O(o, c, m == null ? void 0 : m.dragProps, b == null ? void 0 : b.dropProps),
    ...y,
    ref: n,
    "data-allows-dragging": !!i || void 0,
    "data-selected": d.isSelected || void 0,
    "data-disabled": d.isDisabled || void 0,
    "data-hovered": p || void 0,
    "data-focused": d.isFocused || void 0,
    "data-focus-visible": d.isFocusVisible || void 0,
    "data-pressed": d.isPressed || void 0,
    "data-dragging": v || void 0,
    "data-drop-target": (b == null ? void 0 : b.isDropTarget) || void 0,
    "data-selection-mode": r.selectionManager.selectionMode === "none" ? void 0 : r.selectionManager.selectionMode
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Ae,
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
function yx(e, t) {
  t = Fe(t);
  let { dragAndDropHooks: n, dropState: r } = _(Qe), { dropIndicatorProps: a, isHidden: i, isDropTarget: l } = n.useDropIndicator(e, r, t);
  return i ? null : /* @__PURE__ */ f.createElement(Dx, {
    ...e,
    dropIndicatorProps: a,
    isDropTarget: l,
    ref: t
  });
}
function xx(e, t) {
  let { dropIndicatorProps: n, isDropTarget: r, ...a } = e, i = Q({
    ...a,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...n,
    ...i,
    // eslint-disable-next-line
    role: "option",
    ref: t,
    "data-drop-target": r || void 0
  });
}
const Dx = /* @__PURE__ */ Z(xx), Lo = /* @__PURE__ */ U({
  placement: "bottom"
});
function Ex(e, t) {
  [e, t] = ee(e, t, Lo);
  let n = e.placement, r = {
    position: "absolute",
    [n]: "100%",
    transform: n === "top" || n === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
  }, a = Q({
    ...e,
    defaultClassName: "react-aria-OverlayArrow",
    values: {
      placement: n
    }
  });
  return a.style && Object.keys(a.style).forEach((i) => a.style[i] === void 0 && delete a.style[i]), /* @__PURE__ */ f.createElement("div", {
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
const Rh = /* @__PURE__ */ Z(Ex), Lt = /* @__PURE__ */ U(null);
function Cx(e, t) {
  [e, t] = ee(e, t, Lt);
  let n = _(Pt), r = xn(e), a = e.isOpen != null || e.defaultOpen != null || !n ? r : n, i = ja(t, a.isOpen) || e.isExiting || !1;
  if (_(Cr)) {
    let o = e.children;
    return typeof o == "function" && (o = o({
      trigger: e.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1
    })), /* @__PURE__ */ f.createElement(f.Fragment, null, o);
  }
  return a && !a.isOpen && !i ? null : /* @__PURE__ */ f.createElement(wx, {
    ...e,
    triggerRef: e.triggerRef,
    state: a,
    popoverRef: t,
    isExiting: i
  });
}
const Px = /* @__PURE__ */ Z(Cx);
function wx({ state: e, isExiting: t, UNSTABLE_portalContainer: n, ...r }) {
  var a;
  let { popoverProps: i, underlayProps: l, arrowProps: o, placement: u } = by({
    ...r,
    offset: (a = r.offset) !== null && a !== void 0 ? a : 8
  }, e), s = r.popoverRef, d = si(s, !!u) || r.isEntering || !1, c = Q({
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
  return /* @__PURE__ */ f.createElement(lf, {
    isExiting: t,
    portalContainer: n
  }, !r.isNonModal && e.isOpen && /* @__PURE__ */ f.createElement("div", {
    "data-testid": "underlay",
    ...l,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ f.createElement("div", {
    ...O(q(r), i),
    ...c,
    ref: s,
    slot: r.slot || void 0,
    style: p,
    "data-trigger": r.trigger,
    "data-placement": u,
    "data-entering": d || void 0,
    "data-exiting": t || void 0
  }, !r.isNonModal && /* @__PURE__ */ f.createElement(Dl, {
    onDismiss: e.close
  }), /* @__PURE__ */ f.createElement(Lo.Provider, {
    value: {
      ...o,
      placement: u
    }
  }, c.children), /* @__PURE__ */ f.createElement(Dl, {
    onDismiss: e.close
  })));
}
const Oo = /* @__PURE__ */ U(null), Pt = /* @__PURE__ */ U(null);
function Sx(e, t) {
  let n = e["aria-labelledby"];
  [e, t] = ee(e, t, Oo);
  let { dialogProps: r, titleProps: a } = Hy({
    ...e,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": n
  }, t), i = _(Pt), l = e.children;
  typeof l == "function" && (l = l({
    close: (i == null ? void 0 : i.close) || (() => {
    })
  })), !r["aria-label"] && !r["aria-labelledby"] && (e["aria-labelledby"] ? r["aria-labelledby"] = e["aria-labelledby"] : console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));
  var o;
  return /* @__PURE__ */ f.createElement("section", {
    ...q(e),
    ...r,
    ref: t,
    slot: e.slot || void 0,
    style: e.style,
    className: (o = e.className) !== null && o !== void 0 ? o : "react-aria-Dialog"
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        ci,
        {
          slots: {
            [Er]: {},
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
const Bx = /* @__PURE__ */ Z(Sx), kx = /* @__PURE__ */ U(null), Fx = /* @__PURE__ */ U(null);
function Ax(e, t) {
  [e, t] = ee(e, t, kx);
  let { collection: n, document: r } = _r(), { children: a, isDisabled: i = !1, isInvalid: l = !1, isRequired: o = !1 } = e;
  a = N(() => typeof a == "function" ? a({
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
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(Mo, null, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Dn,
        r
      ],
      [
        Gr,
        {
          items: (u = e.items) !== null && u !== void 0 ? u : e.defaultItems
        }
      ]
    ]
  }, a)), /* @__PURE__ */ f.createElement(Tx, {
    props: e,
    collection: n,
    comboBoxRef: t
  }));
}
function Tx({ props: e, collection: t, comboBoxRef: n }) {
  let { name: r, formValue: a = "key", allowsCustomValue: i } = e;
  i && (a = "text");
  let { contains: l } = kd({
    sensitivity: "base"
  });
  var o;
  let u = F5({
    defaultFilter: e.defaultFilter || l,
    ...e,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: e.items,
    children: void 0,
    collection: t,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }), s = R(null), d = R(null), c = R(null), p = R(null), [m, b] = ze();
  var h;
  let { buttonProps: v, inputProps: y, listBoxProps: $, labelProps: x, descriptionProps: E, errorMessageProps: P, ...B } = Ry({
    ...ot(e),
    label: b,
    inputRef: d,
    buttonRef: s,
    listBoxRef: c,
    popoverRef: p,
    name: a === "text" ? r : void 0,
    validationBehavior: (h = e.validationBehavior) !== null && h !== void 0 ? h : "native"
  }, u), [T, g] = G(null), M = X(() => {
    if (d.current) {
      var w;
      let k = (w = s.current) === null || w === void 0 ? void 0 : w.getBoundingClientRect(), K = d.current.getBoundingClientRect(), A = k ? Math.min(k.left, K.left) : K.left, D = k ? Math.max(k.right, K.right) : K.right;
      g(D - A + "px");
    }
  }, [
    s,
    d,
    g
  ]);
  Fr({
    ref: d,
    onResize: M
  });
  let F = N(() => ({
    isOpen: u.isOpen,
    isDisabled: e.isDisabled || !1,
    isInvalid: B.isInvalid || !1,
    isRequired: e.isRequired || !1
  }), [
    u.isOpen,
    e.isDisabled,
    B.isInvalid,
    e.isRequired
  ]), C = Q({
    ...e,
    values: F,
    defaultClassName: "react-aria-ComboBox"
  }), S = q(e);
  return delete S.id, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Fx,
        u
      ],
      [
        Ve,
        {
          ...x,
          ref: m
        }
      ],
      [
        dt,
        {
          ...v,
          ref: s,
          isPressed: u.isOpen
        }
      ],
      [
        tn,
        {
          ...y,
          ref: d
        }
      ],
      [
        Pt,
        u
      ],
      [
        Lt,
        {
          ref: p,
          triggerRef: d,
          placement: "bottom start",
          isNonModal: !0,
          trigger: "ComboBox",
          style: {
            "--trigger-width": T
          }
        }
      ],
      [
        Gr,
        {
          ...$,
          ref: c
        }
      ],
      [
        $t,
        u
      ],
      [
        Ae,
        {
          slots: {
            description: E,
            errorMessage: P
          }
        }
      ],
      [
        jt,
        {
          isInvalid: B.isInvalid,
          isDisabled: e.isDisabled || !1
        }
      ],
      [
        Xe,
        B
      ]
    ]
  }, /* @__PURE__ */ f.createElement("div", {
    ...S,
    ...C,
    ref: n,
    slot: e.slot || void 0,
    "data-focused": u.isFocused || void 0,
    "data-open": u.isOpen || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": B.isInvalid || void 0,
    "data-required": e.isRequired || void 0
  }), r && a === "key" && /* @__PURE__ */ f.createElement("input", {
    type: "hidden",
    name: r,
    value: u.selectedKey
  }));
}
const Mx = /* @__PURE__ */ Z(Ax), gi = /* @__PURE__ */ U(null), Rx = /* @__PURE__ */ U(null), Zr = /* @__PURE__ */ U(null), $i = /* @__PURE__ */ U(null);
function Ix(e, t) {
  [e, t] = ee(e, t, gi);
  let { locale: n } = ie();
  var r;
  let a = ko({
    ...e,
    locale: n,
    createCalendar: Xa,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), i = R(null), [l, o] = ze(), u = R(null);
  var s;
  let { labelProps: d, fieldProps: c, inputProps: p, descriptionProps: m, errorMessageProps: b, ...h } = $o({
    ...ot(e),
    label: o,
    inputRef: u,
    validationBehavior: (s = e.validationBehavior) !== null && s !== void 0 ? s : "native"
  }, a, i), v = Q({
    ...ot(e),
    values: {
      state: a,
      isInvalid: a.isInvalid,
      isDisabled: a.isDisabled
    },
    defaultClassName: "react-aria-DateField"
  }), y = q(e);
  return delete y.id, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Zr,
        a
      ],
      [
        jt,
        {
          ...c,
          ref: i,
          isInvalid: a.isInvalid
        }
      ],
      [
        tn,
        {
          ...p,
          ref: u
        }
      ],
      [
        Ve,
        {
          ...d,
          ref: l,
          elementType: "span"
        }
      ],
      [
        Ae,
        {
          slots: {
            description: m,
            errorMessage: b
          }
        }
      ],
      [
        Xe,
        h
      ]
    ]
  }, /* @__PURE__ */ f.createElement("div", {
    ...y,
    ...v,
    ref: t,
    slot: e.slot || void 0,
    "data-invalid": a.isInvalid || void 0
  }));
}
const Nx = /* @__PURE__ */ Z(Ix);
function Kx(e, t) {
  [e, t] = ee(e, t, Rx);
  let { locale: n } = ie();
  var r;
  let a = _5({
    ...e,
    locale: n,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), i = R(null), [l, o] = ze(), u = R(null);
  var s;
  let { labelProps: d, fieldProps: c, inputProps: p, descriptionProps: m, errorMessageProps: b, ...h } = Ny({
    ...ot(e),
    label: o,
    inputRef: u,
    validationBehavior: (s = e.validationBehavior) !== null && s !== void 0 ? s : "native"
  }, a, i), v = Q({
    ...e,
    values: {
      state: a,
      isInvalid: a.isInvalid,
      isDisabled: a.isDisabled
    },
    defaultClassName: "react-aria-TimeField"
  }), y = q(e);
  return delete y.id, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        $i,
        a
      ],
      [
        jt,
        {
          ...c,
          ref: i,
          isInvalid: a.isInvalid
        }
      ],
      [
        tn,
        {
          ...p,
          ref: u
        }
      ],
      [
        Ve,
        {
          ...d,
          ref: l,
          elementType: "span"
        }
      ],
      [
        Ae,
        {
          slots: {
            description: m,
            errorMessage: b
          }
        }
      ],
      [
        Xe,
        h
      ]
    ]
  }, /* @__PURE__ */ f.createElement("div", {
    ...y,
    ...v,
    ref: t,
    slot: e.slot || void 0,
    "data-invalid": a.isInvalid || void 0
  }));
}
const zx = /* @__PURE__ */ Z(Kx);
function Vx(e, t) {
  let n = _(Zr), r = _($i);
  return n || r ? /* @__PURE__ */ f.createElement(Ih, {
    ...e,
    ref: t
  }) : /* @__PURE__ */ f.createElement(Lx, {
    ...e,
    ref: t
  });
}
const Lx = /* @__PURE__ */ Z((e, t) => {
  let [n, r] = ee({
    slot: e.slot
  }, t, gi), { locale: a } = ie(), i = ko({
    ...n,
    locale: a,
    createCalendar: Xa
  }), l = R(null), { fieldProps: o, inputProps: u } = $o({
    ...n,
    inputRef: l
  }, i, r);
  return /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Zr,
        i
      ],
      [
        tn,
        {
          ...u,
          ref: l
        }
      ],
      [
        jt,
        {
          ...o,
          ref: r,
          isInvalid: i.isInvalid
        }
      ]
    ]
  }, /* @__PURE__ */ f.createElement(Ih, e));
}), Ih = /* @__PURE__ */ Z((e, t) => {
  let { className: n, children: r } = e, a = _(Zr), i = _($i), l = a ?? i;
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(Io, {
    ...e,
    ref: t,
    slot: e.slot || void 0,
    className: n ?? "react-aria-DateInput",
    isInvalid: l.isInvalid
  }, l.segments.map((o, u) => /* @__PURE__ */ As(r(o), {
    key: u
  }))), /* @__PURE__ */ f.createElement(Fh, null));
}), Ox = /* @__PURE__ */ Z(Vx);
function jx({ segment: e, ...t }, n) {
  let r = _(Zr), a = _($i), i = r ?? a, l = Fe(n), { segmentProps: o } = Ly(e, i, l), { focusProps: u, isFocused: s, isFocusVisible: d } = fe(), { hoverProps: c, isHovered: p } = ge({
    ...t,
    isDisabled: i.isDisabled || e.type === "literal"
  }), m = Q({
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
  return /* @__PURE__ */ f.createElement("div", {
    ...O(q(t), o, u, c),
    ...m,
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
const Hx = /* @__PURE__ */ Z(jx), _x = /* @__PURE__ */ U(null), Ux = /* @__PURE__ */ U(null), Wx = /* @__PURE__ */ U(null), Gx = /* @__PURE__ */ U(null);
function Zx(e, t) {
  [e, t] = ee(e, t, _x);
  var n;
  let r = N5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), a = R(null), [i, l] = ze();
  var o;
  let { groupProps: u, labelProps: s, fieldProps: d, buttonProps: c, dialogProps: p, calendarProps: m, descriptionProps: b, errorMessageProps: h, ...v } = Ky({
    ...ot(e),
    label: l,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, r, a), { focusProps: y, isFocused: $, isFocusVisible: x } = fe({
    within: !0
  }), E = Q({
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
  }), P = q(e);
  return delete P.id, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Wx,
        r
      ],
      [
        jt,
        {
          ...u,
          ref: a,
          isInvalid: r.isInvalid
        }
      ],
      [
        gi,
        d
      ],
      [
        dt,
        {
          ...c,
          isPressed: r.isOpen
        }
      ],
      [
        Ve,
        {
          ...s,
          ref: i,
          elementType: "span"
        }
      ],
      [
        Eh,
        m
      ],
      [
        Pt,
        r
      ],
      [
        Lt,
        {
          trigger: "DatePicker",
          triggerRef: a,
          placement: "bottom start"
        }
      ],
      [
        Oo,
        p
      ],
      [
        Ae,
        {
          slots: {
            description: b,
            errorMessage: h
          }
        }
      ],
      [
        Xe,
        v
      ]
    ]
  }, /* @__PURE__ */ f.createElement("div", {
    ...y,
    ...P,
    ...E,
    ref: t,
    slot: e.slot || void 0,
    "data-focus-within": $ || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-focus-visible": x || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-open": r.isOpen || void 0
  }));
}
const qx = /* @__PURE__ */ Z(Zx);
function Yx(e, t) {
  [e, t] = ee(e, t, Ux);
  var n;
  let r = H5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), a = R(null), [i, l] = ze();
  var o;
  let { groupProps: u, labelProps: s, startFieldProps: d, endFieldProps: c, buttonProps: p, dialogProps: m, calendarProps: b, descriptionProps: h, errorMessageProps: v, ...y } = jy({
    ...ot(e),
    label: l,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, r, a), { focusProps: $, isFocused: x, isFocusVisible: E } = fe({
    within: !0
  }), P = Q({
    ...e,
    values: {
      state: r,
      isFocusWithin: x,
      isFocusVisible: E,
      isDisabled: e.isDisabled || !1,
      isInvalid: r.isInvalid,
      isOpen: r.isOpen
    },
    defaultClassName: "react-aria-DateRangePicker"
  }), B = q(e);
  return delete B.id, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Gx,
        r
      ],
      [
        jt,
        {
          ...u,
          ref: a,
          isInvalid: r.isInvalid
        }
      ],
      [
        dt,
        {
          ...p,
          isPressed: r.isOpen
        }
      ],
      [
        Ve,
        {
          ...s,
          ref: i,
          elementType: "span"
        }
      ],
      [
        Ch,
        b
      ],
      [
        Pt,
        r
      ],
      [
        Lt,
        {
          trigger: "DateRangePicker",
          triggerRef: a,
          placement: "bottom start"
        }
      ],
      [
        Oo,
        m
      ],
      [
        gi,
        {
          slots: {
            start: d,
            end: c
          }
        }
      ],
      [
        Ae,
        {
          slots: {
            description: h,
            errorMessage: v
          }
        }
      ],
      [
        Xe,
        y
      ]
    ]
  }, /* @__PURE__ */ f.createElement("div", {
    ...$,
    ...B,
    ...P,
    ref: t,
    slot: e.slot || void 0,
    "data-focus-within": x || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-focus-visible": E || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-open": r.isOpen || void 0
  }));
}
const Jx = /* @__PURE__ */ Z(Yx);
var jo = {}, Nh = {};
Nh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"حدد عنصرًا","tableResizer":"أداة تغيير الحجم"}');
var Kh = {};
Kh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Изберете предмет","tableResizer":"Преоразмерител"}');
var zh = {};
zh = JSON.parse('{"dropzoneLabel":"Místo pro přetažení","selectPlaceholder":"Vyberte položku","tableResizer":"Změna velikosti"}');
var Vh = {};
Vh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Vælg et element","tableResizer":"Størrelsesændring"}');
var Lh = {};
Lh = JSON.parse('{"dropzoneLabel":"Ablegebereich","selectPlaceholder":"Element wählen","tableResizer":"Größenanpassung"}');
var Oh = {};
Oh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Επιλέξτε ένα αντικείμενο","tableResizer":"Αλλαγή μεγέθους"}');
var jh = {};
jh = JSON.parse('{"selectPlaceholder":"Select an item","tableResizer":"Resizer","dropzoneLabel":"DropZone"}');
var Hh = {};
Hh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Seleccionar un artículo","tableResizer":"Cambiador de tamaño"}');
var _h = {};
_h = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valige üksus","tableResizer":"Suuruse muutja"}');
var Uh = {};
Uh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valitse kohde","tableResizer":"Koon muuttaja"}');
var Wh = {};
Wh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Sélectionner un élément","tableResizer":"Redimensionneur"}');
var Gh = {};
Gh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"בחר פריט","tableResizer":"שינוי גודל"}');
var Zh = {};
Zh = JSON.parse('{"dropzoneLabel":"Zona spuštanja","selectPlaceholder":"Odaberite stavku","tableResizer":"Promjena veličine"}');
var qh = {};
qh = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Válasszon ki egy elemet","tableResizer":"Átméretező"}');
var Yh = {};
Yh = JSON.parse('{"dropzoneLabel":"Zona di rilascio","selectPlaceholder":"Seleziona un elemento","tableResizer":"Ridimensionamento"}');
var Jh = {};
Jh = JSON.parse('{"dropzoneLabel":"ドロップゾーン","selectPlaceholder":"項目を選択","tableResizer":"サイズ変更ツール"}');
var Xh = {};
Xh = JSON.parse('{"dropzoneLabel":"드롭 영역","selectPlaceholder":"항목 선택","tableResizer":"크기 조정기"}');
var Qh = {};
Qh = JSON.parse('{"dropzoneLabel":"„DropZone“","selectPlaceholder":"Pasirinkite elementą","tableResizer":"Dydžio keitiklis"}');
var ev = {};
ev = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izvēlēties vienumu","tableResizer":"Izmēra mainītājs"}');
var tv = {};
tv = JSON.parse('{"dropzoneLabel":"Droppsone","selectPlaceholder":"Velg et element","tableResizer":"Størrelsesendrer"}');
var nv = {};
nv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecteer een item","tableResizer":"Resizer"}');
var rv = {};
rv = JSON.parse('{"dropzoneLabel":"Strefa upuszczania","selectPlaceholder":"Wybierz element","tableResizer":"Zmiana rozmiaru"}');
var av = {};
av = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');
var iv = {};
iv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');
var lv = {};
lv = JSON.parse('{"dropzoneLabel":"Zonă de plasare","selectPlaceholder":"Selectați un element","tableResizer":"Instrument de redimensionare"}');
var ov = {};
ov = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Выберите элемент","tableResizer":"Средство изменения размера"}');
var uv = {};
uv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Vyberte položku","tableResizer":"Nástroj na zmenu veľkosti"}');
var sv = {};
sv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izberite element","tableResizer":"Spreminjanje velikosti"}');
var dv = {};
dv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izaberite stavku","tableResizer":"Promena veličine"}');
var cv = {};
cv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Välj en artikel","tableResizer":"Storleksändrare"}');
var fv = {};
fv = JSON.parse('{"dropzoneLabel":"Bırakma Bölgesi","selectPlaceholder":"Bir öğe seçin","tableResizer":"Yeniden boyutlandırıcı"}');
var mv = {};
mv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Виберіть елемент","tableResizer":"Засіб змінення розміру"}');
var pv = {};
pv = JSON.parse('{"dropzoneLabel":"放置区域","selectPlaceholder":"选择一个项目","tableResizer":"尺寸调整器"}');
var bv = {};
bv = JSON.parse('{"dropzoneLabel":"放置區","selectPlaceholder":"選取項目","tableResizer":"大小調整器"}');
jo = {
  "ar-AE": Nh,
  "bg-BG": Kh,
  "cs-CZ": zh,
  "da-DK": Vh,
  "de-DE": Lh,
  "el-GR": Oh,
  "en-US": jh,
  "es-ES": Hh,
  "et-EE": _h,
  "fi-FI": Uh,
  "fr-FR": Wh,
  "he-IL": Gh,
  "hr-HR": Zh,
  "hu-HU": qh,
  "it-IT": Yh,
  "ja-JP": Jh,
  "ko-KR": Xh,
  "lt-LT": Qh,
  "lv-LV": ev,
  "nb-NO": tv,
  "nl-NL": nv,
  "pl-PL": rv,
  "pt-BR": av,
  "pt-PT": iv,
  "ro-RO": lv,
  "ru-RU": ov,
  "sk-SK": uv,
  "sl-SI": sv,
  "sr-SP": dv,
  "sv-SE": cv,
  "tr-TR": fv,
  "uk-UA": mv,
  "zh-CN": pv,
  "zh-TW": bv
};
function Xx(e, t) {
  let { validationErrors: n, children: r, className: a, ...i } = e;
  return /* @__PURE__ */ f.createElement("form", {
    ...i,
    ref: t,
    className: a || "react-aria-Form"
  }, /* @__PURE__ */ f.createElement(pc.Provider, {
    value: n ?? {}
  }, r));
}
const Qx = /* @__PURE__ */ Z(Xx), eD = /* @__PURE__ */ U(null);
function tD(e, t) {
  [e, t] = ee(e, t, eD);
  let { collection: n, portal: r } = Hr(e);
  return /* @__PURE__ */ f.createElement(f.Fragment, null, r, /* @__PURE__ */ f.createElement(nD, {
    props: e,
    collection: n,
    gridListRef: t
  }));
}
function nD({ props: e, collection: t, gridListRef: n }) {
  let { dragAndDropHooks: r } = e, a = ui({
    ...e,
    collection: t,
    children: void 0
  }), { gridProps: i } = Tm(e, a, n), l = ut({
    items: t,
    children: (M) => {
      switch (M.type) {
        case "item":
          return /* @__PURE__ */ f.createElement(lD, {
            item: M
          });
        default:
          throw new Error("Unsupported node type in GridList: " + M.type);
      }
    }
  }), o = a.selectionManager, u = !!(r != null && r.useDraggableCollectionState), s = !!(r != null && r.useDroppableCollectionState), d = R(u), c = R(s);
  Y(() => {
    d.current !== u && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), c.current !== s && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    u,
    s
  ]);
  let p, m, b, h = !1, v = null, y = R(null);
  if (u && r) {
    p = r.useDraggableCollectionState({
      collection: t,
      selectionManager: o,
      preview: r.renderDragPreview ? y : void 0
    }), r.useDraggableCollection({}, p, n);
    let M = r.DragPreview;
    v = r.renderDragPreview ? /* @__PURE__ */ f.createElement(M, {
      ref: y
    }, r.renderDragPreview) : null;
  }
  if (s && r) {
    m = r.useDroppableCollectionState({
      collection: t,
      selectionManager: o
    });
    let M = new yn(t, o.disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : o.disabledKeys, n), F = r.dropTargetDelegate || new r.ListDropTargetDelegate(t, n);
    b = r.useDroppableCollection({
      keyboardDelegate: M,
      dropTargetDelegate: F
    }, m, n), h = m.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: $, isFocused: x, isFocusVisible: E } = fe(), P = {
    isDropTarget: h,
    isEmpty: a.collection.size === 0,
    isFocused: x,
    isFocusVisible: E,
    state: a
  }, B = Q({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-GridList",
    values: P
  }), T = null, g = null;
  if (a.collection.size === 0 && e.renderEmptyState) {
    let M = e.renderEmptyState(P);
    T = /* @__PURE__ */ f.createElement("div", {
      role: "row",
      style: {
        display: "contents"
      }
    }, /* @__PURE__ */ f.createElement("div", {
      role: "gridcell",
      style: {
        display: "contents"
      }
    }, M));
  }
  return /* @__PURE__ */ f.createElement(Mr, null, /* @__PURE__ */ f.createElement("div", {
    ...q(e),
    ...B,
    ...O(i, $, b == null ? void 0 : b.collectionProps, g),
    ref: n,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-drop-target": h || void 0,
    "data-empty": a.collection.size === 0 || void 0,
    "data-focused": x || void 0,
    "data-focus-visible": E || void 0
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        $t,
        a
      ],
      [
        Qe,
        {
          dragAndDropHooks: r,
          dragState: p,
          dropState: m
        }
      ],
      [
        hi,
        {
          render: oD
        }
      ]
    ]
  }, s && /* @__PURE__ */ f.createElement(dD, null), l), T, v));
}
const rD = /* @__PURE__ */ Z(tD);
function aD(e, t) {
  return st("item", e, t, e.children);
}
const iD = /* @__PURE__ */ Z(aD);
function lD({ item: e }) {
  let t = _($t), { dragAndDropHooks: n, dragState: r, dropState: a } = _(Qe), i = Fe(e.props.ref), { rowProps: l, gridCellProps: o, descriptionProps: u, ...s } = Mm({
    node: e,
    shouldSelectOnPressUp: !!r
  }, t, i), { hoverProps: d, isHovered: c } = ge({
    isDisabled: !s.allowsSelection && !s.hasAction
  }), { isFocusVisible: p, focusProps: m } = fe(), { checkboxProps: b } = Zy({
    key: e.key
  }, t), h = null;
  r && n && (h = n.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, r));
  let v = null, y = R(null), { visuallyHiddenProps: $ } = Ot();
  a && n && (v = n.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, a, y));
  let x = e.props, E = r && r.isDragging(e.key), P = Q({
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
      isDragging: E,
      isDropTarget: v == null ? void 0 : v.isDropTarget
    }
  }), B = (n == null ? void 0 : n.renderDropIndicator) || ((g) => /* @__PURE__ */ f.createElement(No, {
    target: g
  })), T = R(null);
  return Y(() => {
    r && !T.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []), Y(() => {
    e.textValue || console.warn("A `textValue` prop is required for <GridListItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    e.textValue
  ]), /* @__PURE__ */ f.createElement(f.Fragment, null, (n == null ? void 0 : n.useDropIndicator) && B({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), v && !v.isHidden && /* @__PURE__ */ f.createElement("div", {
    role: "row",
    style: {
      position: "absolute"
    }
  }, /* @__PURE__ */ f.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ f.createElement("div", {
    role: "button",
    ...$,
    ...v == null ? void 0 : v.dropIndicatorProps,
    ref: y
  }))), /* @__PURE__ */ f.createElement("div", {
    ...O(q(x), l, m, d, h == null ? void 0 : h.dragProps),
    ...P,
    ref: i,
    "data-selected": s.isSelected || void 0,
    "data-disabled": s.isDisabled || void 0,
    "data-hovered": c || void 0,
    "data-focused": s.isFocused || void 0,
    "data-focus-visible": p || void 0,
    "data-pressed": s.isPressed || void 0,
    "data-allows-dragging": !!r || void 0,
    "data-dragging": E || void 0,
    "data-drop-target": (v == null ? void 0 : v.isDropTarget) || void 0,
    "data-selection-mode": t.selectionManager.selectionMode === "none" ? void 0 : t.selectionManager.selectionMode
  }, /* @__PURE__ */ f.createElement("div", {
    ...o,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        bi,
        {
          slots: {
            selection: b
          }
        }
      ],
      [
        dt,
        {
          slots: {
            [Er]: {},
            drag: {
              ...h == null ? void 0 : h.dragButtonProps,
              ref: T,
              style: {
                pointerEvents: "none"
              }
            }
          }
        }
      ],
      [
        Ae,
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
function oD(e, t) {
  t = Fe(t);
  let { dragAndDropHooks: n, dropState: r } = _(Qe), a = R(null), { dropIndicatorProps: i, isHidden: l, isDropTarget: o } = n.useDropIndicator(e, r, a);
  return l ? null : /* @__PURE__ */ f.createElement(sD, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    buttonRef: a,
    ref: t
  });
}
function uD(e, t) {
  let { dropIndicatorProps: n, isDropTarget: r, buttonRef: a, ...i } = e, { visuallyHiddenProps: l } = Ot(), o = Q({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...o,
    role: "row",
    ref: t,
    "data-drop-target": r || void 0
  }, /* @__PURE__ */ f.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ f.createElement("div", {
    ...l,
    role: "button",
    ...n,
    ref: a
  }), o.children));
}
const sD = /* @__PURE__ */ Z(uD);
function dD() {
  let { dragAndDropHooks: e, dropState: t } = _(Qe), n = R(null), { dropIndicatorProps: r } = e.useDropIndicator({
    target: {
      type: "root"
    }
  }, t, n), a = t.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: i } = Ot();
  return !a && r["aria-hidden"] ? null : /* @__PURE__ */ f.createElement("div", {
    role: "row",
    "aria-hidden": r["aria-hidden"],
    style: {
      position: "absolute"
    }
  }, /* @__PURE__ */ f.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ f.createElement("div", {
    role: "button",
    ...i,
    ...r,
    ref: n
  })));
}
const hv = /* @__PURE__ */ U({}), vv = /* @__PURE__ */ U(null), qr = /* @__PURE__ */ U(null), gv = /* @__PURE__ */ U(null);
function $v(e) {
  let { item: t, parentMenuRef: n } = e, r = _(qr);
  return ut({
    items: r.collection.getChildren(t.key),
    children: (i) => {
      switch (i.type) {
        case "item":
          return /* @__PURE__ */ f.createElement(vD, {
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
function cD(e, t) {
  [e, t] = ee(e, t, vv);
  let { portal: n, collection: r } = Hr(e);
  return /* @__PURE__ */ f.createElement(f.Fragment, null, r.size > 0 && /* @__PURE__ */ f.createElement(fD, {
    props: e,
    collection: r,
    menuRef: t
  }), n);
}
function fD({ props: e, collection: t, menuRef: n }) {
  let r = b6({
    ...e,
    collection: t,
    children: void 0
  }), [a, i] = G(null), { menuProps: l } = wy(e, r, n), o = _(gv), u = _(Lt), s = ut({
    items: r.collection,
    children: (p) => {
      switch (p.type) {
        case "section":
          return /* @__PURE__ */ f.createElement(pD, {
            section: p,
            parentMenuRef: n
          });
        case "separator":
          return /* @__PURE__ */ f.createElement(vi, p.props);
        case "item":
          return /* @__PURE__ */ f.createElement(yv, {
            item: p
          });
        case "submenutrigger":
          return /* @__PURE__ */ f.createElement($v, {
            item: p,
            parentMenuRef: n
          });
        default:
          throw new Error("Unsupported node type in Menu: " + p.type);
      }
    }
  }), d = (u == null ? void 0 : u.trigger) === "SubmenuTrigger";
  qs({
    ref: n,
    onInteractOutside: (p) => {
      o && !(a != null && a.contains(p.target)) && o.close();
    },
    isDisabled: d || (o == null ? void 0 : o.UNSTABLE_expandedKeysStack.length) === 0
  });
  var c;
  return /* @__PURE__ */ f.createElement(Mr, null, /* @__PURE__ */ f.createElement("div", {
    ...q(e),
    ...l,
    ref: n,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    style: e.style,
    className: (c = e.className) !== null && c !== void 0 ? c : "react-aria-Menu"
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        qr,
        r
      ],
      [
        zo,
        {
          elementType: "div"
        }
      ],
      [
        Lt,
        {
          UNSTABLE_portalContainer: a || void 0
        }
      ]
    ]
  }, s)), /* @__PURE__ */ f.createElement("div", {
    ref: i,
    style: {
      width: "100vw",
      position: "absolute",
      top: 0
    }
  }));
}
const mD = /* @__PURE__ */ Z(cD);
function pD({ section: e, className: t, style: n, parentMenuRef: r, ...a }) {
  var i, l;
  let o = _(qr), [u, s] = ze();
  var d;
  let { headingProps: c, groupProps: p } = Sy({
    heading: s,
    "aria-label": (d = e["aria-label"]) !== null && d !== void 0 ? d : void 0
  }), m = ut({
    items: o.collection.getChildren(e.key),
    children: (b) => {
      switch (b.type) {
        case "header": {
          let { ref: h, ...v } = b.props;
          return /* @__PURE__ */ f.createElement(Ko, {
            ...c,
            ...v,
            ref: _a(u, h)
          }, b.rendered);
        }
        case "item":
          return /* @__PURE__ */ f.createElement(yv, {
            item: b
          });
        case "submenutrigger":
          return /* @__PURE__ */ f.createElement($v, {
            item: b,
            parentMenuRef: r
          });
        default:
          throw new Error("Unsupported element type in Section: " + b.type);
      }
    }
  });
  return /* @__PURE__ */ f.createElement("section", {
    ...q(a),
    ...p,
    className: t || ((i = e.props) === null || i === void 0 ? void 0 : i.className) || "react-aria-Section",
    style: n || ((l = e.props) === null || l === void 0 ? void 0 : l.style),
    ref: e.props.ref
  }, m);
}
function bD(e, t) {
  return st("item", e, t, e.children);
}
const hD = /* @__PURE__ */ Z(bD);
function yv({ item: e }) {
  var t;
  let n = _(qr), r = Fe(e.props.ref), { menuItemProps: a, labelProps: i, descriptionProps: l, keyboardShortcutProps: o, ...u } = Gf({
    key: e.key,
    "aria-label": (t = e.props) === null || t === void 0 ? void 0 : t["aria-label"]
  }, n, r), s = e.props, { isFocusVisible: d, focusProps: c } = fe(), { hoverProps: p, isHovered: m } = ge({
    isDisabled: u.isDisabled
  }), b = Q({
    ...s,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-MenuItem",
    values: {
      ...u,
      isHovered: m,
      isFocusVisible: d,
      selectionMode: n.selectionManager.selectionMode,
      selectionBehavior: n.selectionManager.selectionBehavior,
      hasSubmenu: !1,
      isOpen: !1
    }
  }), h = s.href ? "a" : "div";
  return /* @__PURE__ */ f.createElement(h, {
    ...O(a, c, p),
    ...b,
    ref: r,
    "data-disabled": u.isDisabled || void 0,
    "data-hovered": m || void 0,
    "data-focused": u.isFocused || void 0,
    "data-focus-visible": d || void 0,
    "data-pressed": u.isPressed || void 0,
    "data-selected": u.isSelected || void 0,
    "data-selection-mode": n.selectionManager.selectionMode === "none" ? void 0 : n.selectionManager.selectionMode
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Ae,
        {
          slots: {
            label: i,
            description: l
          }
        }
      ],
      [
        hv,
        o
      ]
    ]
  }, b.children));
}
function vD({ item: e, popover: t, parentMenuRef: n, delay: r }) {
  let a = _(qr), i = Ur(Lt), l = Fe(e.props.ref), o = _(gv), u = U5({
    triggerKey: e.key
  }, o), s = R(null), { submenuTriggerProps: d, submenuProps: c, popoverProps: p } = Ay({
    node: e,
    parentMenuRef: n,
    submenuRef: s,
    delay: r
  }, u, l), { menuItemProps: m, labelProps: b, descriptionProps: h, keyboardShortcutProps: v, ...y } = Gf({
    key: e.key,
    ...d
  }, a, l), $ = e.props, { hoverProps: x, isHovered: E } = ge({
    isDisabled: y.isDisabled
  }), { isFocusVisible: P, focusProps: B } = fe(), T = Q({
    ...$,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-MenuItem",
    values: {
      ...y,
      isHovered: E,
      isFocusVisible: P,
      selectionMode: a.selectionManager.selectionMode,
      selectionBehavior: a.selectionManager.selectionBehavior,
      hasSubmenu: !0,
      isOpen: u.isOpen
    }
  });
  return /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Ae,
        {
          slots: {
            label: b,
            description: h
          }
        }
      ],
      [
        hv,
        v
      ],
      [
        vv,
        c
      ],
      [
        Pt,
        u
      ],
      [
        Lt,
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
  }, /* @__PURE__ */ f.createElement("div", {
    ...O(m, B, x),
    ...T,
    ref: l,
    "data-disabled": y.isDisabled || void 0,
    "data-hovered": E || void 0,
    "data-focused": y.isFocused || void 0,
    "data-focus-visible": P || void 0,
    "data-pressed": y.isPressed || void 0,
    "data-selected": y.isSelected || void 0,
    "data-selection-mode": a.selectionManager.selectionMode === "none" ? void 0 : a.selectionManager.selectionMode,
    "data-has-submenu": !0,
    "data-open": u.isOpen || void 0
  }, T.children), t);
}
const gD = /* @__PURE__ */ U(null);
function $D(e, t) {
  [e, t] = ee(e, t, gD);
  let { value: n = 0, minValue: r = 0, maxValue: a = 100 } = e;
  n = lt(n, r, a);
  let [i, l] = ze(), { meterProps: o, labelProps: u } = qy({
    ...e,
    label: l
  }), s = (n - r) / (a - r) * 100, d = Q({
    ...e,
    defaultClassName: "react-aria-Meter",
    values: {
      percentage: s,
      valueText: o["aria-valuetext"]
    }
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...o,
    ...d,
    ref: t,
    slot: e.slot || void 0
  }, /* @__PURE__ */ f.createElement(Ve.Provider, {
    value: {
      ...u,
      ref: i,
      elementType: "span"
    }
  }, d.children));
}
const yD = /* @__PURE__ */ Z($D), xD = /* @__PURE__ */ U(null), Ho = /* @__PURE__ */ U(null);
function DD(e, t) {
  if (_(Ho))
    return /* @__PURE__ */ f.createElement(ys, {
      ...e,
      modalRef: t
    }, e.children);
  let { isDismissable: r, isKeyboardDismissDisabled: a, isOpen: i, defaultOpen: l, onOpenChange: o, children: u, isEntering: s, isExiting: d, UNSTABLE_portalContainer: c, ...p } = e;
  return /* @__PURE__ */ f.createElement(xv, {
    isDismissable: r,
    isKeyboardDismissDisabled: a,
    isOpen: i,
    defaultOpen: l,
    onOpenChange: o,
    isEntering: s,
    isExiting: d,
    UNSTABLE_portalContainer: c
  }, /* @__PURE__ */ f.createElement(ys, {
    ...p,
    modalRef: t
  }, u));
}
const ED = /* @__PURE__ */ Z(DD);
function CD(e, t) {
  [e, t] = ee(e, t, xD);
  let n = _(Pt), r = xn(e), a = e.isOpen != null || e.defaultOpen != null || !n ? r : n, i = Fe(t), l = R(null), o = ja(i, a.isOpen), u = ja(l, a.isOpen), s = o || u || e.isExiting || !1, d = Et();
  return !a.isOpen && !s || d ? null : /* @__PURE__ */ f.createElement(PD, {
    ...e,
    state: a,
    isExiting: s,
    overlayRef: i,
    modalRef: l
  });
}
const xv = /* @__PURE__ */ Z(CD);
function PD({ UNSTABLE_portalContainer: e, ...t }) {
  let n = t.modalRef, { state: r } = t, { modalProps: a, underlayProps: i } = hy(t, r, n), l = si(t.overlayRef) || t.isEntering || !1, o = Q({
    ...t,
    defaultClassName: "react-aria-ModalOverlay",
    values: {
      isEntering: l,
      isExiting: t.isExiting,
      state: r
    }
  }), u = Ig(), s = {
    ...o.style,
    "--visual-viewport-height": u.height + "px"
  };
  return /* @__PURE__ */ f.createElement(lf, {
    isExiting: t.isExiting,
    portalContainer: e
  }, /* @__PURE__ */ f.createElement("div", {
    ...O(q(t), i),
    ...o,
    style: s,
    ref: t.overlayRef,
    "data-entering": l || void 0,
    "data-exiting": t.isExiting || void 0
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Ho,
        {
          modalProps: a,
          modalRef: n,
          isExiting: t.isExiting,
          isDismissable: t.isDismissable
        }
      ],
      [
        Pt,
        r
      ]
    ]
  }, o.children)));
}
function ys(e) {
  let { modalProps: t, modalRef: n, isExiting: r, isDismissable: a } = _(Ho), i = _(Pt), l = N(() => _a(e.modalRef, n), [
    e.modalRef,
    n
  ]), o = Fe(l), u = si(o), s = Q({
    ...e,
    defaultClassName: "react-aria-Modal",
    values: {
      isEntering: u,
      isExiting: r,
      state: i
    }
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...O(q(e), t),
    ...s,
    ref: o,
    "data-entering": u || void 0,
    "data-exiting": r || void 0
  }, a && /* @__PURE__ */ f.createElement(Dl, {
    onDismiss: i.close
  }), s.children);
}
const wD = /* @__PURE__ */ U(null), SD = /* @__PURE__ */ U(null);
function BD(e, t) {
  [e, t] = ee(e, t, wD);
  let { locale: n } = ie();
  var r;
  let a = W5({
    ...e,
    locale: n,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), i = R(null), [l, o] = ze();
  var u;
  let { labelProps: s, groupProps: d, inputProps: c, incrementButtonProps: p, decrementButtonProps: m, descriptionProps: b, errorMessageProps: h, ...v } = Jy({
    ...ot(e),
    label: o,
    validationBehavior: (u = e.validationBehavior) !== null && u !== void 0 ? u : "native"
  }, a, i), y = Q({
    ...e,
    values: {
      state: a,
      isDisabled: e.isDisabled || !1,
      isInvalid: v.isInvalid || !1
    },
    defaultClassName: "react-aria-NumberField"
  }), $ = q(e);
  return delete $.id, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        SD,
        a
      ],
      [
        jt,
        d
      ],
      [
        tn,
        {
          ...c,
          ref: i
        }
      ],
      [
        Ve,
        {
          ...s,
          ref: l
        }
      ],
      [
        dt,
        {
          slots: {
            increment: p,
            decrement: m
          }
        }
      ],
      [
        Ae,
        {
          slots: {
            description: b,
            errorMessage: h
          }
        }
      ],
      [
        Xe,
        v
      ]
    ]
  }, /* @__PURE__ */ f.createElement("div", {
    ...$,
    ...y,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": v.isInvalid || void 0
  }), e.name && /* @__PURE__ */ f.createElement("input", {
    type: "hidden",
    name: e.name,
    value: isNaN(a.numberValue) ? "" : a.numberValue
  }));
}
const kD = /* @__PURE__ */ Z(BD), FD = /* @__PURE__ */ U(null);
function AD(e, t) {
  [e, t] = ee(e, t, FD);
  let { value: n = 0, minValue: r = 0, maxValue: a = 100, isIndeterminate: i = !1 } = e;
  n = lt(n, r, a);
  let [l, o] = ze(), { progressBarProps: u, labelProps: s } = Rm({
    ...e,
    label: o
  }), d = i ? void 0 : (n - r) / (a - r) * 100, c = Q({
    ...e,
    defaultClassName: "react-aria-ProgressBar",
    values: {
      percentage: d,
      valueText: u["aria-valuetext"],
      isIndeterminate: i
    }
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...u,
    ...c,
    ref: t,
    slot: e.slot || void 0
  }, /* @__PURE__ */ f.createElement(Ve.Provider, {
    value: {
      ...s,
      ref: l,
      elementType: "span"
    }
  }, c.children));
}
const TD = /* @__PURE__ */ Z(AD), MD = /* @__PURE__ */ U(null), RD = /* @__PURE__ */ U(null), Dv = /* @__PURE__ */ U(null);
function ID(e, t) {
  [e, t] = ee(e, t, MD);
  var n;
  let r = q5({
    ...e,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), [a, i] = ze();
  var l;
  let { radioGroupProps: o, labelProps: u, descriptionProps: s, errorMessageProps: d, ...c } = Qy({
    ...e,
    label: i,
    validationBehavior: (l = e.validationBehavior) !== null && l !== void 0 ? l : "native"
  }, r), p = Q({
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
  return /* @__PURE__ */ f.createElement("div", {
    ...o,
    ...p,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "vertical",
    "data-invalid": r.isInvalid || void 0,
    "data-disabled": r.isDisabled || void 0,
    "data-readonly": r.isReadOnly || void 0,
    "data-required": r.isRequired || void 0
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Dv,
        r
      ],
      [
        Ve,
        {
          ...u,
          ref: a,
          elementType: "span"
        }
      ],
      [
        Ae,
        {
          slots: {
            description: s,
            errorMessage: d
          }
        }
      ],
      [
        Xe,
        c
      ]
    ]
  }, p.children));
}
function ND(e, t) {
  [e, t] = ee(e, t, RD);
  let n = f.useContext(Dv), r = R(null), { labelProps: a, inputProps: i, isSelected: l, isDisabled: o, isPressed: u } = Xy({
    ...ot(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, n, r), { isFocused: s, isFocusVisible: d, focusProps: c } = fe(), p = o || n.isReadOnly, { hoverProps: m, isHovered: b } = ge({
    ...e,
    isDisabled: p
  }), h = Q({
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
  }), v = q(e);
  return delete v.id, /* @__PURE__ */ f.createElement("label", {
    ...O(v, a, m, h),
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
  }, /* @__PURE__ */ f.createElement(Vt, {
    elementType: "span"
  }, /* @__PURE__ */ f.createElement("input", {
    ...O(i, c),
    ref: r
  })), h.children);
}
const KD = /* @__PURE__ */ Z(ID), zD = /* @__PURE__ */ Z(ND), VD = /* @__PURE__ */ U(null);
function LD(e, t) {
  [e, t] = ee(e, t, VD);
  let n = R(null), [r, a] = ze();
  var i;
  let l = Y5({
    ...e,
    validationBehavior: (i = e.validationBehavior) !== null && i !== void 0 ? i : "native"
  });
  var o;
  let { labelProps: u, inputProps: s, clearButtonProps: d, descriptionProps: c, errorMessageProps: p, ...m } = t5({
    ...ot(e),
    label: a,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, l, n), b = Q({
    ...e,
    values: {
      isEmpty: l.value === "",
      isDisabled: e.isDisabled || !1,
      isInvalid: m.isInvalid || !1,
      state: l
    },
    defaultClassName: "react-aria-SearchField"
  }), h = q(e);
  return delete h.id, /* @__PURE__ */ f.createElement("div", {
    ...h,
    ...b,
    ref: t,
    slot: e.slot || void 0,
    "data-empty": l.value === "" || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": m.isInvalid || void 0
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Ve,
        {
          ...u,
          ref: r
        }
      ],
      [
        tn,
        {
          ...s,
          ref: n
        }
      ],
      [
        dt,
        d
      ],
      [
        Ae,
        {
          slots: {
            description: c,
            errorMessage: p
          }
        }
      ],
      [
        jt,
        {
          isInvalid: m.isInvalid,
          isDisabled: e.isDisabled || !1
        }
      ],
      [
        Xe,
        m
      ]
    ]
  }, b.children));
}
const OD = /* @__PURE__ */ Z(LD), va = /* @__PURE__ */ U(null), Il = /* @__PURE__ */ U(null);
function jD(e, t) {
  [e, t] = ee(e, t, va);
  let { collection: n, document: r } = _r();
  var a;
  let i = J5({
    ...e,
    collection: n,
    children: void 0,
    validationBehavior: (a = e.validationBehavior) !== null && a !== void 0 ? a : "native"
  }), { isFocusVisible: l, focusProps: o } = fe({
    within: !0
  }), u = R(null), [s, d] = ze();
  var c;
  let { labelProps: p, triggerProps: m, valueProps: b, menuProps: h, descriptionProps: v, errorMessageProps: y, ...$ } = n5({
    ...ot(e),
    label: d,
    validationBehavior: (c = e.validationBehavior) !== null && c !== void 0 ? c : "native"
  }, i, u), [x, E] = G(null), P = X(() => {
    u.current && E(u.current.offsetWidth + "px");
  }, [
    u
  ]);
  Fr({
    ref: u,
    onResize: P
  });
  let B = N(() => ({
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
  ]), T = Q({
    ...e,
    values: B,
    defaultClassName: "react-aria-Select"
  }), g = q(e);
  return delete g.id, /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(Mo, null, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        va,
        e
      ],
      [
        Il,
        i
      ],
      [
        Dn,
        r
      ]
    ]
  }, T.children)), /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        va,
        e
      ],
      [
        Il,
        i
      ],
      [
        Ev,
        b
      ],
      [
        Ve,
        {
          ...p,
          ref: s,
          elementType: "span"
        }
      ],
      [
        dt,
        {
          ...m,
          ref: u,
          isPressed: i.isOpen
        }
      ],
      [
        Pt,
        i
      ],
      [
        Lt,
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
        Gr,
        h
      ],
      [
        $t,
        i
      ],
      [
        Ae,
        {
          slots: {
            description: v,
            errorMessage: y
          }
        }
      ],
      [
        Xe,
        $
      ]
    ]
  }, /* @__PURE__ */ f.createElement("div", {
    ...g,
    ...T,
    ...o,
    ref: t,
    slot: e.slot || void 0,
    "data-focused": i.isFocused || void 0,
    "data-focus-visible": l || void 0,
    "data-open": i.isOpen || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": $.isInvalid || void 0,
    "data-required": e.isRequired || void 0
  }), /* @__PURE__ */ f.createElement(a5, {
    state: i,
    triggerRef: u,
    label: d,
    name: e.name,
    isDisabled: e.isDisabled
  })));
}
const HD = /* @__PURE__ */ Z(jD), Ev = /* @__PURE__ */ U(null);
function _D(e, t) {
  var n, r;
  [e, t] = ee(e, t, Ev);
  let a = _(Il), { placeholder: i } = Ur(va), l = a.selectedKey != null ? a.collection.getItem(a.selectedKey) : null, o = l == null ? void 0 : l.rendered;
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
  let u = De(/* @__PURE__ */ fh(jo), "react-aria-components");
  var s, d;
  let c = Q({
    ...e,
    defaultChildren: o || i || u.format("selectPlaceholder"),
    defaultClassName: "react-aria-SelectValue",
    values: {
      selectedItem: (s = (n = a.selectedItem) === null || n === void 0 ? void 0 : n.value) !== null && s !== void 0 ? s : null,
      selectedText: (d = (r = a.selectedItem) === null || r === void 0 ? void 0 : r.textValue) !== null && d !== void 0 ? d : null,
      isPlaceholder: !l
    }
  }), p = q(e);
  return /* @__PURE__ */ f.createElement("span", {
    ref: t,
    ...p,
    ...c,
    "data-placeholder": !l || void 0
  }, /* @__PURE__ */ f.createElement(Ae.Provider, {
    value: void 0
  }, c.children));
}
const UD = /* @__PURE__ */ Z(_D), WD = /* @__PURE__ */ U(null), yi = /* @__PURE__ */ U(null), _o = /* @__PURE__ */ U(null), Cv = /* @__PURE__ */ U(null);
function GD(e, t) {
  [e, t] = ee(e, t, WD);
  let n = R(null), r = Ka(e.formatOptions), a = t6({
    ...e,
    numberFormatter: r
  }), [i, l] = ze(), { groupProps: o, trackProps: u, labelProps: s, outputProps: d } = l5({
    ...e,
    label: l
  }, a, n), c = Q({
    ...e,
    values: {
      orientation: a.orientation,
      isDisabled: a.isDisabled,
      state: a
    },
    defaultClassName: "react-aria-Slider"
  }), p = q(e);
  return delete p.id, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        yi,
        a
      ],
      [
        _o,
        {
          ...u,
          ref: n
        }
      ],
      [
        Cv,
        d
      ],
      [
        Ve,
        {
          ...s,
          ref: i
        }
      ]
    ]
  }, /* @__PURE__ */ f.createElement("div", {
    ...p,
    ...o,
    ...c,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": a.orientation,
    "data-disabled": a.isDisabled || void 0
  }));
}
const ZD = /* @__PURE__ */ Z(GD);
function qD(e, t) {
  [e, t] = ee(e, t, Cv);
  let { children: n, style: r, className: a, ...i } = e, l = _(yi), o = Q({
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
  return /* @__PURE__ */ f.createElement("output", {
    ...i,
    ...o,
    ref: t,
    "data-orientation": l.orientation || void 0,
    "data-disabled": l.isDisabled || void 0
  });
}
const YD = /* @__PURE__ */ Z(qD);
function JD(e, t) {
  [e, t] = ee(e, t, _o);
  let n = _(yi), { onHoverStart: r, onHoverEnd: a, onHoverChange: i, ...l } = e, { hoverProps: o, isHovered: u } = ge({
    onHoverStart: r,
    onHoverEnd: a,
    onHoverChange: i
  }), s = Q({
    ...e,
    defaultClassName: "react-aria-SliderTrack",
    values: {
      orientation: n.orientation,
      isDisabled: n.isDisabled,
      isHovered: u,
      state: n
    }
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...O(l, o),
    ...s,
    ref: t,
    "data-hovered": u || void 0,
    "data-orientation": n.orientation || void 0,
    "data-disabled": n.isDisabled || void 0
  });
}
const XD = /* @__PURE__ */ Z(JD);
function QD(e, t) {
  let n = _(yi), { ref: r } = Ur(_o), { index: a = 0 } = e, i = R(null), [l, o] = ze(), { thumbProps: u, inputProps: s, labelProps: d, isDragging: c, isFocused: p, isDisabled: m } = o5({
    ...e,
    index: a,
    trackRef: r,
    inputRef: i,
    label: o
  }, n), { focusProps: b, isFocusVisible: h } = fe(), { hoverProps: v, isHovered: y } = ge(e), $ = Q({
    ...e,
    defaultClassName: "react-aria-SliderThumb",
    values: {
      state: n,
      isHovered: y,
      isDragging: c,
      isFocused: p,
      isFocusVisible: h,
      isDisabled: m
    }
  }), x = q(e);
  return delete x.id, /* @__PURE__ */ f.createElement("div", {
    ...O(x, u, v),
    ...$,
    ref: t,
    style: {
      ...u.style,
      ...$.style
    },
    "data-hovered": y || void 0,
    "data-dragging": c || void 0,
    "data-focused": p || void 0,
    "data-focus-visible": h || void 0,
    "data-disabled": m || void 0
  }, /* @__PURE__ */ f.createElement(Vt, null, /* @__PURE__ */ f.createElement("input", {
    ref: i,
    ...O(s, b)
  })), /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Ve,
        {
          ...d,
          ref: l
        }
      ]
    ]
  }, $.children));
}
const e2 = /* @__PURE__ */ Z(QD), t2 = /* @__PURE__ */ U(null);
function n2(e, t) {
  [e, t] = ee(e, t, t2);
  let n = R(null), r = ti(e), { labelProps: a, inputProps: i, isSelected: l, isDisabled: o, isReadOnly: u, isPressed: s } = u5({
    ...ot(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, r, n), { isFocused: d, isFocusVisible: c, focusProps: p } = fe(), m = e.isDisabled || e.isReadOnly, { hoverProps: b, isHovered: h } = ge({
    ...e,
    isDisabled: m
  }), v = Q({
    ...e,
    defaultClassName: "react-aria-Switch",
    values: {
      isSelected: l,
      isPressed: s,
      isHovered: h,
      isFocused: d,
      isFocusVisible: c,
      isDisabled: o,
      isReadOnly: u,
      state: r
    }
  }), y = q(e);
  return delete y.id, /* @__PURE__ */ f.createElement("label", {
    ...O(y, a, b, v),
    ref: t,
    slot: e.slot || void 0,
    "data-selected": l || void 0,
    "data-pressed": s || void 0,
    "data-hovered": h || void 0,
    "data-focused": d || void 0,
    "data-focus-visible": c || void 0,
    "data-disabled": o || void 0,
    "data-readonly": u || void 0
  }, /* @__PURE__ */ f.createElement(Vt, {
    elementType: "span"
  }, /* @__PURE__ */ f.createElement("input", {
    ...i,
    ...p,
    ref: n
  })), v.children);
}
const r2 = /* @__PURE__ */ Z(n2);
class a2 extends ph {
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
    if (this.headerRows = dh(n, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !t)
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
    super(...t), this.headerRows = [], this.columns = [], this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.head = new xr("tableheader", -1), this.body = new xr("tablebody", -2), this.columnsDirty = !0;
  }
}
const Uo = /* @__PURE__ */ U(null);
function i2(e, t) {
  let n = Fe(t), [r, a] = G(0);
  Fr({
    ref: n,
    onResize() {
      var l, o;
      a((o = (l = n.current) === null || l === void 0 ? void 0 : l.clientWidth) !== null && o !== void 0 ? o : 0);
    }
  }), de(() => {
    var l, o;
    a((o = (l = n.current) === null || l === void 0 ? void 0 : l.clientWidth) !== null && o !== void 0 ? o : 0);
  }, [
    n
  ]);
  let i = N(() => ({
    tableWidth: r,
    useTableColumnResizeState: l6,
    onResizeStart: e.onResizeStart,
    onResize: e.onResize,
    onResizeEnd: e.onResizeEnd
  }), [
    r,
    e.onResizeStart,
    e.onResize,
    e.onResizeEnd
  ]);
  return /* @__PURE__ */ f.createElement("div", {
    ...q(e),
    ref: n,
    className: e.className || "react-aria-ResizableTableContainer",
    style: e.style,
    onScroll: e.onScroll
  }, /* @__PURE__ */ f.createElement(Uo.Provider, {
    value: i
  }, e.children));
}
const l2 = /* @__PURE__ */ Z(i2), o2 = /* @__PURE__ */ U(null), nn = /* @__PURE__ */ U(null), Wo = /* @__PURE__ */ U(null);
function u2(e, t) {
  [e, t] = ee(e, t, o2);
  let n = N(() => new a2(), []), { portal: r, collection: a } = Hr(e, n), i = s6({
    ...e,
    collection: a,
    children: void 0
  }), { gridProps: l } = c5(e, i, t), { dragAndDropHooks: o } = e, u = i.selectionManager, s = !!(o != null && o.useDraggableCollectionState), d = !!(o != null && o.useDroppableCollectionState), c = R(s), p = R(d);
  Y(() => {
    c.current !== s && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), p.current !== d && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    s,
    d
  ]);
  let m, b, h, v = !1, y = null, $ = R(null);
  if (s && o) {
    m = o.useDraggableCollectionState({
      collection: a,
      selectionManager: u,
      preview: o.renderDragPreview ? $ : void 0
    }), o.useDraggableCollection({}, m, t);
    let k = o.DragPreview;
    y = o.renderDragPreview ? /* @__PURE__ */ f.createElement(k, {
      ref: $
    }, o.renderDragPreview) : null;
  }
  if (d && o) {
    b = o.useDroppableCollectionState({
      collection: a,
      selectionManager: u
    });
    let k = new yn(a, u.disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : u.disabledKeys, t), K = o.dropTargetDelegate || new o.ListDropTargetDelegate(a, t);
    h = o.useDroppableCollection({
      keyboardDelegate: k,
      dropTargetDelegate: K
    }, b, t), v = b.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: x, isFocused: E, isFocusVisible: P } = fe(), B = Q({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: v,
      isFocused: E,
      isFocusVisible: P,
      state: i
    }
  }), { selectionBehavior: T, selectionMode: g, disallowEmptySelection: M } = i.selectionManager, F = N(() => ({
    selectionBehavior: g === "none" ? null : T,
    selectionMode: g,
    disallowEmptySelection: M,
    allowsDragging: s
  }), [
    T,
    g,
    M,
    s
  ]), C = B.style, S = _(Uo), w = null;
  return S && (w = S.useTableColumnResizeState({
    tableWidth: S.tableWidth
  }, i), C = {
    ...C,
    tableLayout: "fixed",
    width: "fit-content"
  }), /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(Pv.Provider, {
    value: F
  }, r), /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        nn,
        i
      ],
      [
        Wo,
        w
      ],
      [
        Qe,
        {
          dragAndDropHooks: o,
          dragState: m,
          dropState: b
        }
      ],
      [
        hi,
        {
          render: P2
        }
      ]
    ]
  }, /* @__PURE__ */ f.createElement(Mr, null, /* @__PURE__ */ f.createElement("table", {
    ...q(e),
    ...B,
    ...O(l, x, h == null ? void 0 : h.collectionProps),
    style: C,
    ref: t,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-allows-dragging": s || void 0,
    "data-drop-target": v || void 0,
    "data-focused": E || void 0,
    "data-focus-visible": P || void 0
  }, /* @__PURE__ */ f.createElement(v2, {
    collection: a
  }), /* @__PURE__ */ f.createElement(g2, {
    collection: a,
    isDroppable: d
  }))), y));
}
const s2 = /* @__PURE__ */ Z(u2), Pv = /* @__PURE__ */ U(null);
function wv() {
  return _(Pv);
}
function d2(e, t) {
  let n = jr({
    children: e.children,
    items: e.columns,
    dependencies: e.dependencies
  }), r = typeof e.children == "function" ? e.children : null;
  return /* @__PURE__ */ f.createElement($h.Provider, {
    value: r
  }, st("tableheader", e, t, null, n));
}
const c2 = /* @__PURE__ */ Z(d2);
function f2(e, t) {
  return st("column", e, t, e.children);
}
const Sv = /* @__PURE__ */ Z(f2);
function m2(e, t) {
  let n = [
    e.value
  ].concat(e.dependencies), r = jr({
    dependencies: n,
    children: e.children,
    items: e.columns,
    idScope: e.id
  }), a = N(() => ({
    idScope: e.id,
    dependencies: n
  }), [
    e.id,
    ...n
  ]);
  return st("item", e, t, null, /* @__PURE__ */ f.createElement(gh.Provider, {
    value: a
  }, r));
}
const p2 = /* @__PURE__ */ Z(m2);
function b2(e, t) {
  return st("cell", e, t, e.children);
}
const h2 = /* @__PURE__ */ Z(b2);
function v2({ collection: e }) {
  let t = ut({
    items: e.headerRows,
    children: X((a) => {
      switch (a.type) {
        case "headerrow":
          return /* @__PURE__ */ f.createElement($2, {
            item: a
          });
        default:
          throw new Error("Unsupported node type in TableHeader: " + a.type);
      }
    }, [])
  }), { rowGroupProps: n } = Nb();
  var r;
  return /* @__PURE__ */ f.createElement("thead", {
    ...q(e.head.props),
    ...n,
    ref: e.head.props.ref,
    className: (r = e.head.props.className) !== null && r !== void 0 ? r : "react-aria-TableHeader",
    style: e.head.props.style
  }, t);
}
function g2(e) {
  let { collection: t, isDroppable: n } = e, r = ut({
    items: t.rows,
    children: X((m) => {
      switch (m.type) {
        case "item":
          return /* @__PURE__ */ f.createElement(E2, {
            item: m
          });
        default:
          throw new Error("Unsupported node type in TableBody: " + m.type);
      }
    }, [])
  }), a = _(nn), { dropState: i } = _(Qe);
  var l;
  let o = n && !!i && ((l = i.isDropTarget({
    type: "root"
  })) !== null && l !== void 0 ? l : !1), u = t.body.props, s = {
    isDropTarget: o,
    isEmpty: t.size === 0
  }, d = Q({
    ...u,
    id: void 0,
    children: void 0,
    defaultClassName: "react-aria-TableBody",
    values: s
  }), c;
  t.size === 0 && u.renderEmptyState && a && (c = /* @__PURE__ */ f.createElement("tr", {
    role: "row"
  }, /* @__PURE__ */ f.createElement("td", {
    role: "gridcell",
    colSpan: t.columnCount
  }, u.renderEmptyState(s))));
  let { rowGroupProps: p } = Nb();
  return /* @__PURE__ */ f.createElement("tbody", {
    ...O(q(u), p),
    ...d,
    ref: t.body.props.ref,
    "data-empty": t.size === 0 || void 0
  }, n && /* @__PURE__ */ f.createElement(B2, null), r, c);
}
function $2({ item: e }) {
  let t = R(null), n = _(nn), { rowProps: r } = p5({
    node: e
  }, n, t), { checkboxProps: a } = v5(n), i = ut({
    items: n.collection.getChildren(e.key),
    children: (l) => {
      switch (l.type) {
        case "column":
          return /* @__PURE__ */ f.createElement(y2, {
            column: l
          });
        default:
          throw new Error("Unsupported node type in Row: " + l.type);
      }
    }
  });
  return /* @__PURE__ */ f.createElement("tr", {
    ...r,
    ref: t
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        bi,
        {
          slots: {
            selection: a
          }
        }
      ]
    ]
  }, i));
}
const Bv = /* @__PURE__ */ U(null);
function y2({ column: e }) {
  var t, n;
  let r = Fe(e.props.ref), a = _(nn), { columnHeaderProps: i } = f5({
    node: e
  }, a, r), { isFocused: l, isFocusVisible: o, focusProps: u } = fe(), s = _(Wo), d = !1;
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
  let c = e.props, { hoverProps: p, isHovered: m } = ge({
    isDisabled: !c.allowsSorting
  }), b = Q({
    ...c,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-Column",
    values: {
      isHovered: m,
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
  }), h = b.style;
  return s && (h = {
    ...h,
    width: s.getColumnWidth(e.key)
  }), /* @__PURE__ */ f.createElement("th", {
    ...O(q(c), i, u, p),
    ...b,
    style: h,
    colSpan: e.colspan,
    ref: r,
    "data-hovered": m || void 0,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    "data-resizing": d || void 0,
    "data-allows-sorting": e.props.allowsSorting || void 0,
    "data-sort-direction": ((n = a.sortDescriptor) === null || n === void 0 ? void 0 : n.column) === e.key ? a.sortDescriptor.direction : void 0
  }, /* @__PURE__ */ f.createElement(Bv.Provider, {
    value: {
      column: e,
      triggerRef: r
    }
  }, b.children));
}
function x2(e, t) {
  let n = _(Wo);
  if (!n)
    throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
  let r = De(/* @__PURE__ */ fh(jo), "react-aria-components"), { onResizeStart: a, onResize: i, onResizeEnd: l } = _(Uo), { column: o, triggerRef: u } = _(Bv), s = R(null), { resizerProps: d, inputProps: c, isResizing: p } = g5({
    column: o,
    "aria-label": e["aria-label"] || r.format("tableResizer"),
    onResizeStart: a,
    onResize: i,
    onResizeEnd: l,
    triggerRef: u
  }, n, s), { focusProps: m, isFocused: b, isFocusVisible: h } = fe(), { hoverProps: v, isHovered: y } = ge(e), $ = n.getColumnMinWidth(o.key) >= n.getColumnWidth(o.key), x = n.getColumnMaxWidth(o.key) <= n.getColumnWidth(o.key), { direction: E } = ie(), P = "both";
  $ ? P = E === "rtl" ? "right" : "left" : x ? P = E === "rtl" ? "left" : "right" : P = "both";
  let B = Fe(t), [T, g] = G("");
  Y(() => {
    if (!B.current)
      return;
    let w = window.getComputedStyle(B.current);
    g(w.cursor);
  }, [
    B,
    P
  ]);
  let M = Q({
    ...e,
    defaultClassName: "react-aria-ColumnResizer",
    values: {
      isFocused: b,
      isFocusVisible: h,
      isResizing: p,
      isHovered: y,
      resizableDirection: P
    }
  }), [F, C] = G(!1), S = (w) => {
    w.pointerType === "mouse" && C(!0);
  };
  return !p && F && C(!1), /* @__PURE__ */ f.createElement("div", {
    ref: B,
    role: "presentation",
    ...M,
    ...O(d, {
      onPointerDown: S
    }, v),
    "data-hovered": y || void 0,
    "data-focused": b || void 0,
    "data-focus-visible": h || void 0,
    "data-resizing": p || void 0,
    "data-resizable-direction": P
  }, M.children, /* @__PURE__ */ f.createElement("input", {
    ref: s,
    ...O(c, m)
  }), p && F && /* @__PURE__ */ Br.createPortal(/* @__PURE__ */ f.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      cursor: T
    }
  }), document.body));
}
const D2 = /* @__PURE__ */ Z(x2);
function E2({ item: e }) {
  let t = Fe(e.props.ref), n = _(nn), { dragAndDropHooks: r, dragState: a, dropState: i } = _(Qe), { rowProps: l, ...o } = m5({
    node: e,
    shouldSelectOnPressUp: !!a
  }, n, t), { isFocused: u, isFocusVisible: s, focusProps: d } = fe(), { hoverProps: c, isHovered: p } = ge({
    isDisabled: !o.allowsSelection && !o.hasAction
  }), { checkboxProps: m } = h5({
    key: e.key
  }, n), b;
  a && r && (b = r.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, a));
  let h, v = R(null), { visuallyHiddenProps: y } = Ot();
  i && r && (h = r.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, i, v));
  let $ = (r == null ? void 0 : r.renderDropIndicator) || ((F) => /* @__PURE__ */ f.createElement(No, {
    target: F
  })), x = R(null);
  Y(() => {
    a && !x.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []);
  let E = e.props, P = a && a.isDragging(e.key), { children: B, ...T } = E, g = Q({
    ...T,
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
      isDropTarget: h == null ? void 0 : h.isDropTarget
    }
  }), M = ut({
    items: n.collection.getChildren(e.key),
    children: (F) => {
      switch (F.type) {
        case "cell":
          return /* @__PURE__ */ f.createElement(C2, {
            cell: F
          });
        default:
          throw new Error("Unsupported node type in Row: " + F.type);
      }
    }
  });
  return /* @__PURE__ */ f.createElement(f.Fragment, null, (r == null ? void 0 : r.useDropIndicator) && $({
    type: "item",
    key: e.key,
    dropPosition: "before"
  }), h && !h.isHidden && /* @__PURE__ */ f.createElement("tr", {
    role: "row",
    style: {
      height: 0
    }
  }, /* @__PURE__ */ f.createElement("td", {
    role: "gridcell",
    colSpan: n.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ f.createElement("div", {
    role: "button",
    ...y,
    ...h.dropIndicatorProps,
    ref: v
  }))), /* @__PURE__ */ f.createElement("tr", {
    ...O(q(E), l, d, c, b == null ? void 0 : b.dragProps),
    ...g,
    ref: t,
    "data-disabled": o.isDisabled || void 0,
    "data-selected": o.isSelected || void 0,
    "data-hovered": p || void 0,
    "data-focused": o.isFocused || void 0,
    "data-focus-visible": s || void 0,
    "data-pressed": o.isPressed || void 0,
    "data-dragging": P || void 0,
    "data-drop-target": (h == null ? void 0 : h.isDropTarget) || void 0,
    "data-selection-mode": n.selectionManager.selectionMode === "none" ? void 0 : n.selectionManager.selectionMode
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        bi,
        {
          slots: {
            selection: m
          }
        }
      ],
      [
        dt,
        {
          slots: {
            [Er]: {},
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
  }, M)), (r == null ? void 0 : r.useDropIndicator) && n.collection.getKeyAfter(e.key) == null && $({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }));
}
function C2({ cell: e }) {
  let t = Fe(e.props.ref), n = _(nn), { dragState: r } = _(Qe);
  e.column = n.collection.columns[e.index];
  let { gridCellProps: a, isPressed: i } = b5({
    node: e,
    shouldSelectOnPressUp: !!r
  }, n, t), { isFocused: l, isFocusVisible: o, focusProps: u } = fe(), { hoverProps: s, isHovered: d } = ge({}), c = e.props, p = Q({
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
  return /* @__PURE__ */ f.createElement("td", {
    ...O(q(c), a, u, s),
    ...p,
    ref: t,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    "data-pressed": i || void 0
  }, p.children);
}
function P2(e, t) {
  t = Fe(t);
  let { dragAndDropHooks: n, dropState: r } = _(Qe), a = R(null), { dropIndicatorProps: i, isHidden: l, isDropTarget: o } = n.useDropIndicator(e, r, a);
  return l ? null : /* @__PURE__ */ f.createElement(S2, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    buttonRef: a,
    ref: t
  });
}
function w2(e, t) {
  let { dropIndicatorProps: n, isDropTarget: r, buttonRef: a, ...i } = e, l = _(nn), { visuallyHiddenProps: o } = Ot(), u = Q({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: r
    }
  });
  return /* @__PURE__ */ f.createElement("tr", {
    ...q(e),
    ...u,
    role: "row",
    ref: t,
    "data-drop-target": r || void 0
  }, /* @__PURE__ */ f.createElement("td", {
    role: "gridcell",
    colSpan: l.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ f.createElement("div", {
    ...o,
    role: "button",
    ...n,
    ref: a
  }), u.children));
}
const S2 = /* @__PURE__ */ Z(w2);
function B2() {
  let e = _(nn), { dragAndDropHooks: t, dropState: n } = _(Qe), r = R(null), { dropIndicatorProps: a } = t.useDropIndicator({
    target: {
      type: "root"
    }
  }, n, r), i = n.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: l } = Ot();
  return !i && a["aria-hidden"] ? null : /* @__PURE__ */ f.createElement("tr", {
    role: "row",
    "aria-hidden": a["aria-hidden"],
    style: {
      height: 0
    }
  }, /* @__PURE__ */ f.createElement("td", {
    role: "gridcell",
    colSpan: e.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ f.createElement("div", {
    role: "button",
    ...l,
    ...a,
    ref: r
  })));
}
const Go = /* @__PURE__ */ U(null), Zo = /* @__PURE__ */ U(null);
function k2(e, t) {
  [e, t] = ee(e, t, Go);
  let { collection: n, document: r } = _r(), { children: a, orientation: i = "horizontal" } = e;
  return a = N(() => typeof a == "function" ? a({
    orientation: i
  }) : a, [
    a,
    i
  ]), /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(Mo, null, /* @__PURE__ */ f.createElement(Dn.Provider, {
    value: r
  }, a)), /* @__PURE__ */ f.createElement(F2, {
    props: e,
    collection: n,
    tabsRef: t
  }));
}
function F2({ props: e, tabsRef: t, collection: n }) {
  let { orientation: r = "horizontal" } = e, a = d6({
    ...e,
    collection: n,
    children: void 0
  }), { focusProps: i, isFocused: l, isFocusVisible: o } = fe({
    within: !0
  }), u = N(() => ({
    orientation: r,
    isFocusWithin: l,
    isFocusVisible: o
  }), [
    r,
    l,
    o
  ]), s = Q({
    ...e,
    defaultClassName: "react-aria-Tabs",
    values: u
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...q(e),
    ...i,
    ...s,
    ref: t,
    slot: e.slot || void 0,
    "data-focused": l || void 0,
    "data-orientation": r,
    "data-focus-visible": o || void 0,
    "data-disabled": a.isDisabled || void 0
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Go,
        e
      ],
      [
        Zo,
        a
      ]
    ]
  }, s.children));
}
const A2 = /* @__PURE__ */ Z(k2);
function T2(e, t) {
  return _(Dn) ? /* @__PURE__ */ f.createElement(hh, e) : /* @__PURE__ */ f.createElement(M2, {
    props: e,
    forwardedRef: t
  });
}
function M2({ props: e, forwardedRef: t }) {
  let n = _(Zo), { orientation: r = "horizontal", keyboardActivation: a = "automatic" } = Ur(Go), i = Fe(t), { tabListProps: l } = D5({
    ...e,
    orientation: r,
    keyboardActivation: a
  }, n, i), o = Q({
    ...e,
    children: null,
    defaultClassName: "react-aria-TabList",
    values: {
      orientation: r,
      state: n
    }
  }), u = q(e);
  return delete u.id, /* @__PURE__ */ f.createElement("div", {
    ...u,
    ...l,
    ref: i,
    ...o,
    "data-orientation": r || void 0
  }, [
    ...n.collection
  ].map((s) => /* @__PURE__ */ f.createElement(K2, {
    key: s.key,
    item: s,
    state: n
  })));
}
const R2 = /* @__PURE__ */ Z(T2);
function I2(e, t) {
  return st("item", e, t, e.children);
}
const N2 = /* @__PURE__ */ Z(I2);
function K2({ item: e, state: t }) {
  let n = Fe(e.props.ref), { tabProps: r, isSelected: a, isDisabled: i, isPressed: l } = $5({
    key: e.key,
    ...e.props
  }, t, n), { focusProps: o, isFocused: u, isFocusVisible: s } = fe(), { hoverProps: d, isHovered: c } = ge({
    isDisabled: i
  }), p = Q({
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
  }), m = e.props.href ? "a" : "div";
  return /* @__PURE__ */ f.createElement(m, {
    ...O(r, o, d, p),
    ref: n,
    "data-selected": a || void 0,
    "data-disabled": i || void 0,
    "data-focus-visible": s || void 0,
    "data-pressed": l || void 0,
    "data-hovered": c || void 0
  });
}
function z2(e, t) {
  const n = _(Zo);
  let r = Fe(t), { tabPanelProps: a } = y5(e, n, r), { focusProps: i, isFocused: l, isFocusVisible: o } = fe(), u = n.selectedKey === e.id, s = Q({
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
  let d = q(e);
  delete d.id;
  let c = u ? O(d, a, i, s) : s;
  return /* @__PURE__ */ f.createElement("div", {
    ...c,
    ref: r,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    // @ts-ignore
    inert: u ? void 0 : "true",
    "data-inert": u ? void 0 : "true"
  });
}
const V2 = /* @__PURE__ */ di(z2), L2 = /* @__PURE__ */ U(null), kv = /* @__PURE__ */ U(null);
function O2(e, t) {
  [e, t] = ee(e, t, L2);
  let n = R(null), [r, a] = ze(), { collection: i, document: l } = _r(), o = ui({
    ...e,
    children: void 0,
    collection: i
  }), u = q(e), s = Object.fromEntries(Object.entries(u).map(([h]) => [
    h,
    void 0
  ])), { gridProps: d, labelProps: c, descriptionProps: p, errorMessageProps: m } = C5({
    ...e,
    ...s,
    label: a
  }, o, n);
  var b;
  return /* @__PURE__ */ f.createElement("div", {
    ...u,
    ref: t,
    slot: e.slot || void 0,
    className: (b = e.className) !== null && b !== void 0 ? b : "react-aria-TagGroup",
    style: e.style
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Ve,
        {
          ...c,
          elementType: "span",
          ref: r
        }
      ],
      [
        kv,
        {
          ...d,
          ref: n
        }
      ],
      [
        $t,
        o
      ],
      [
        Dn,
        l
      ],
      [
        Ae,
        {
          slots: {
            description: p,
            errorMessage: m
          }
        }
      ]
    ]
  }, e.children));
}
const j2 = /* @__PURE__ */ Z(O2);
function H2(e, t) {
  let n = Ao(e);
  return /* @__PURE__ */ f.createElement(f.Fragment, null, n, /* @__PURE__ */ f.createElement(_2, {
    props: e,
    forwardedRef: t
  }));
}
function _2({ props: e, forwardedRef: t }) {
  let n = _($t), [r, a] = ee(e, t, kv);
  delete r.items, delete r.renderEmptyState;
  let i = ut({
    items: n.collection,
    children: (c) => {
      switch (c.type) {
        case "item":
          return /* @__PURE__ */ f.createElement(Z2, {
            item: c
          });
        default:
          throw new Error("Unsupported node type in TagList: " + c.type);
      }
    }
  }), { focusProps: l, isFocused: o, isFocusVisible: u } = fe(), s = {
    isEmpty: n.collection.size === 0,
    isFocused: o,
    isFocusVisible: u,
    state: n
  }, d = Q({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-TagList",
    values: s
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...O(r, l),
    ...d,
    ref: a,
    "data-empty": n.collection.size === 0 || void 0,
    "data-focused": o || void 0,
    "data-focus-visible": u || void 0
  }, n.collection.size === 0 && e.renderEmptyState ? e.renderEmptyState(s) : i);
}
const U2 = /* @__PURE__ */ Z(H2);
function W2(e, t) {
  return st("item", e, t, e.children);
}
const G2 = /* @__PURE__ */ Z(W2);
function Z2({ item: e }) {
  let t = _($t), n = Fe(e.props.ref), { focusProps: r, isFocusVisible: a } = fe({
    within: !0
  }), { rowProps: i, gridCellProps: l, removeButtonProps: o, ...u } = P5({
    item: e
  }, t, n), { hoverProps: s, isHovered: d } = ge({
    isDisabled: !u.allowsSelection
  }), c = e.props, p = Q({
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
  return Y(() => {
    e.textValue || console.warn("A `textValue` prop is required for <Tag> elements with non-plain text children for accessibility.");
  }, [
    e.textValue
  ]), /* @__PURE__ */ f.createElement("div", {
    ref: n,
    ...p,
    ...O(q(c), i, r, s),
    "data-selected": u.isSelected || void 0,
    "data-disabled": u.isDisabled || void 0,
    "data-hovered": d || void 0,
    "data-focused": u.isFocused || void 0,
    "data-focus-visible": a || void 0,
    "data-pressed": u.isPressed || void 0,
    "data-allows-removing": u.allowsRemoving || void 0,
    "data-selection-mode": t.selectionManager.selectionMode === "none" ? void 0 : t.selectionManager.selectionMode
  }, /* @__PURE__ */ f.createElement("div", {
    ...l,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        dt,
        {
          slots: {
            remove: o
          }
        }
      ]
    ]
  }, p.children)));
}
const q2 = /* @__PURE__ */ U({}), Y2 = /* @__PURE__ */ U(null);
function J2(e, t) {
  [e, t] = ee(e, t, Y2);
  let n = R(null), [r, a] = ze(), [i, l] = G("input");
  var o;
  let { labelProps: u, inputProps: s, descriptionProps: d, errorMessageProps: c, ...p } = ai({
    ...ot(e),
    inputElementType: i,
    label: a,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, n), m = X((h) => {
    n.current = h, h && l(h instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, []), b = Q({
    ...e,
    values: {
      isDisabled: e.isDisabled || !1,
      isInvalid: p.isInvalid
    },
    defaultClassName: "react-aria-TextField"
  });
  return /* @__PURE__ */ f.createElement("div", {
    ...q(e),
    ...b,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": p.isInvalid || void 0
  }, /* @__PURE__ */ f.createElement(ue, {
    values: [
      [
        Ve,
        {
          ...u,
          ref: r
        }
      ],
      [
        tn,
        {
          ...s,
          ref: m
        }
      ],
      [
        q2,
        {
          ...s,
          ref: m
        }
      ],
      [
        Ae,
        {
          slots: {
            description: d,
            errorMessage: c
          }
        }
      ],
      [
        Xe,
        p
      ]
    ]
  }, b.children));
}
const X2 = /* @__PURE__ */ Z(J2), Q2 = /* @__PURE__ */ U({});
function e7(e, t) {
  [e, t] = ee(e, t, Q2);
  let n = ti(e), { buttonProps: r, isPressed: a } = R1(e, n, t), { focusProps: i, isFocused: l, isFocusVisible: o } = fe(e), { hoverProps: u, isHovered: s } = ge(e), d = Q({
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
  return /* @__PURE__ */ f.createElement("button", {
    ...O(r, i, u),
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
const t7 = /* @__PURE__ */ Z(e7), n7 = /* @__PURE__ */ U({});
function r7(e, t) {
  [e, t] = ee(e, t, n7);
  let { toolbarProps: n } = ch(e, t), r = Q({
    ...e,
    values: {
      orientation: e.orientation || "horizontal"
    },
    defaultClassName: "react-aria-Toolbar"
  }), a = q(e);
  return delete a.id, /* @__PURE__ */ f.createElement("div", {
    ...O(n, a),
    ...r,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "horizontal"
  }, r.children);
}
const a7 = /* @__PURE__ */ Z(r7), Fv = /* @__PURE__ */ U(null), i7 = /* @__PURE__ */ U(null);
function l7({ UNSTABLE_portalContainer: e, ...t }, n) {
  [t, n] = ee(t, n, i7);
  let r = _(Fv), a = m6(t), i = t.isOpen != null || t.defaultOpen != null || !r ? a : r, l = ja(n, i.isOpen) || t.isExiting || !1;
  return !i.isOpen && !l ? null : /* @__PURE__ */ f.createElement(py, {
    portalContainer: e
  }, /* @__PURE__ */ f.createElement(u7, {
    ...t,
    tooltipRef: n,
    isExiting: l
  }));
}
const o7 = /* @__PURE__ */ Z(l7);
function u7(e) {
  let t = _(Fv), { overlayProps: n, arrowProps: r, placement: a } = yc({
    placement: e.placement || "top",
    targetRef: e.triggerRef,
    overlayRef: e.tooltipRef,
    offset: e.offset,
    crossOffset: e.crossOffset,
    isOpen: t.isOpen
  }), i = si(e.tooltipRef, !!a) || e.isEntering || !1, l = Q({
    ...e,
    defaultClassName: "react-aria-Tooltip",
    values: {
      placement: a,
      isEntering: i,
      isExiting: e.isExiting,
      state: t
    }
  });
  e = O(e, n);
  let { tooltipProps: o } = w5(e, t);
  return /* @__PURE__ */ f.createElement("div", {
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
  }, /* @__PURE__ */ f.createElement(Lo.Provider, {
    value: {
      ...r,
      placement: a
    }
  }, l.children));
}
var xs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, qe = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, s7 = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Av(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? Av(n, t) : t.push(n);
  });
}
function Tv(e) {
  let t = [];
  return Av(e, t), t;
}
var Mv = (...e) => Tv(e).filter(Boolean), Rv = (e, t) => {
  let n = {}, r = Object.keys(e), a = Object.keys(t);
  for (let i of r)
    if (a.includes(i)) {
      let l = e[i], o = t[i];
      typeof l == "object" && typeof o == "object" ? n[i] = Rv(l, o) : Array.isArray(l) || Array.isArray(o) ? n[i] = Mv(o, l) : n[i] = o + " " + l;
    } else
      n[i] = e[i];
  for (let i of a)
    r.includes(i) || (n[i] = t[i]);
  return n;
}, Ds = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function d7() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Iv(t)) && (r && (r += " "), r += n);
  return r;
}
function Iv(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Iv(e[r])) && (n && (n += " "), n += t);
  return n;
}
var qo = "-";
function c7(e) {
  var t = m7(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, a = r === void 0 ? {} : r;
  function i(o) {
    var u = o.split(qo);
    return u[0] === "" && u.length !== 1 && u.shift(), Nv(u, t) || f7(o);
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
function Nv(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), a = r ? Nv(e.slice(1), r) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var i = e.join(qo);
    return (l = t.validators.find(function(o) {
      var u = o.validator;
      return u(i);
    })) == null ? void 0 : l.classGroupId;
  }
}
var Es = /^\[(.+)\]$/;
function f7(e) {
  if (Es.test(e)) {
    var t = Es.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function m7(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = b7(Object.entries(e.classGroups), n);
  return a.forEach(function(i) {
    var l = i[0], o = i[1];
    Nl(o, r, l, t);
  }), r;
}
function Nl(e, t, n, r) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var i = a === "" ? t : Cs(t, a);
      i.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (p7(a)) {
        Nl(a(r), t, n, r);
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
      Nl(u, Cs(t, o), n, r);
    });
  });
}
function Cs(e, t) {
  var n = e;
  return t.split(qo).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function p7(e) {
  return e.isThemeGetter;
}
function b7(e, t) {
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
function h7(e) {
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
var Kv = "!";
function v7(e) {
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
    var m = o.length === 0 ? l : l.substring(s), b = m.startsWith(Kv), h = b ? m.substring(1) : m, v = d && d > s ? d - s : void 0;
    return {
      modifiers: o,
      hasImportantModifier: b,
      baseClassName: h,
      maybePostfixModifierPosition: v
    };
  };
}
function g7(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var a = r[0] === "[";
    a ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function $7(e) {
  return {
    cache: h7(e.cacheSize),
    splitModifiers: v7(e),
    ...c7(e)
  };
}
var y7 = /\s+/;
function x7(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, a = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(y7).map(function(l) {
    var o = n(l), u = o.modifiers, s = o.hasImportantModifier, d = o.baseClassName, c = o.maybePostfixModifierPosition, p = r(c ? d.substring(0, c) : d), m = !!c;
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
      m = !1;
    }
    var b = g7(u).join(":"), h = s ? b + Kv : b;
    return {
      isTailwindClass: !0,
      modifierId: h,
      classGroupId: p,
      originalClassName: l,
      hasPostfixModifier: m
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
function Kl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, a, i, l = o;
  function o(s) {
    var d = t[0], c = t.slice(1), p = c.reduce(function(m, b) {
      return b(m);
    }, d());
    return r = $7(p), a = r.cache.get, i = r.cache.set, l = u, u(s);
  }
  function u(s) {
    var d = a(s);
    if (d)
      return d;
    var c = x7(s, r);
    return i(s, c), c;
  }
  return function() {
    return l(d7.apply(null, arguments));
  };
}
function he(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var zv = /^\[(?:([a-z-]+):)?(.+)\]$/i, D7 = /^\d+\/\d+$/, E7 = /* @__PURE__ */ new Set(["px", "full", "screen"]), C7 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, P7 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, w7 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ft(e) {
  return cn(e) || E7.has(e) || D7.test(e) || zl(e);
}
function zl(e) {
  return En(e, "length", T7);
}
function S7(e) {
  return En(e, "size", Vv);
}
function B7(e) {
  return En(e, "position", Vv);
}
function k7(e) {
  return En(e, "url", M7);
}
function ca(e) {
  return En(e, "number", cn);
}
function cn(e) {
  return !Number.isNaN(Number(e));
}
function F7(e) {
  return e.endsWith("%") && cn(e.slice(0, -1));
}
function nr(e) {
  return Ps(e) || En(e, "number", Ps);
}
function ae(e) {
  return zv.test(e);
}
function rr() {
  return !0;
}
function Ht(e) {
  return C7.test(e);
}
function A7(e) {
  return En(e, "", R7);
}
function En(e, t, n) {
  var r = zv.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function T7(e) {
  return P7.test(e);
}
function Vv() {
  return !1;
}
function M7(e) {
  return e.startsWith("url(");
}
function Ps(e) {
  return Number.isInteger(Number(e));
}
function R7(e) {
  return w7.test(e);
}
function Vl() {
  var e = he("colors"), t = he("spacing"), n = he("blur"), r = he("brightness"), a = he("borderColor"), i = he("borderRadius"), l = he("borderSpacing"), o = he("borderWidth"), u = he("contrast"), s = he("grayscale"), d = he("hueRotate"), c = he("invert"), p = he("gap"), m = he("gradientColorStops"), b = he("gradientColorStopPositions"), h = he("inset"), v = he("margin"), y = he("opacity"), $ = he("padding"), x = he("saturate"), E = he("scale"), P = he("sepia"), B = he("skew"), T = he("space"), g = he("translate"), M = function() {
    return ["auto", "contain", "none"];
  }, F = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, C = function() {
    return ["auto", ae, t];
  }, S = function() {
    return [ae, t];
  }, w = function() {
    return ["", ft];
  }, k = function() {
    return ["auto", cn, ae];
  }, K = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, A = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, D = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, j = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, H = function() {
    return ["", "0", ae];
  }, V = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, z = function() {
    return [cn, ca];
  }, I = function() {
    return [cn, ae];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [rr],
      spacing: [ft],
      blur: ["none", "", Ht, ae],
      brightness: z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ht, ae],
      borderSpacing: S(),
      borderWidth: w(),
      contrast: z(),
      grayscale: H(),
      hueRotate: I(),
      invert: H(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [F7, zl],
      inset: C(),
      margin: C(),
      opacity: z(),
      padding: S(),
      saturate: z(),
      scale: z(),
      sepia: H(),
      skew: I(),
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
        aspect: ["auto", "square", "video", ae]
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
        columns: [Ht]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: [].concat(K(), [ae])
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", nr]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: C()
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
        flex: ["1", "auto", "initial", "none", ae]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: H()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: H()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", nr]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [rr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", nr]
        }, ae]
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
        "grid-rows": [rr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [nr]
        }, ae]
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
        "auto-cols": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ae]
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
        justify: ["normal"].concat(j())
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
        content: ["normal"].concat(j(), ["baseline"])
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
        "place-content": [].concat(j(), ["baseline"])
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
        "space-x": [T]
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
        "space-y": [T]
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
        w: ["auto", "min", "max", "fit", ae, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", ae, ft]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ht]
        }, Ht, ae]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ae, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", ae, ft]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ae, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ht, zl]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ca]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", cn, ca]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ae, ft]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ae]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ae]
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
        decoration: [].concat(A(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ft]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ae, ft]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae]
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
        content: ["none", ae]
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
        bg: [].concat(K(), [B7])
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
        bg: ["auto", "cover", "contain", S7]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, k7]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        border: [].concat(A(), ["hidden"])
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
        divide: A()
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
        outline: [""].concat(A())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, ft]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ft]
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
        "ring-offset": [ft]
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
        shadow: ["", "inner", "none", Ht, A7]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [rr]
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
        "drop-shadow": ["", "none", Ht, ae]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ae]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: I()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ae]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: I()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ae]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [nr, ae]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ae]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae]
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
        "will-change": ["auto", "scroll", "contents", "transform", ae]
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
        stroke: [ft, ca]
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
function I7(e, t) {
  for (var n in t)
    Lv(e, n, t[n]);
  return e;
}
var N7 = Object.prototype.hasOwnProperty, K7 = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Lv(e, t, n) {
  if (!N7.call(e, t) || K7.has(typeof n) || n === null) {
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
      Lv(e[t], r, n[r]);
  }
}
function z7(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? Kl.apply(void 0, [Vl, e].concat(n)) : Kl.apply(void 0, [function() {
    return I7(Vl(), e);
  }].concat(n));
}
var wt = /* @__PURE__ */ Kl(Vl), V7 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Ov = (e) => e || void 0, Pr = (...e) => Ov(Tv(e).filter(Boolean).join(" ")), Qi = null, Ha = {}, Ll = !1, ar = (...e) => (t) => t.twMerge ? ((!Qi || Ll) && (Ll = !1, Qi = qe(Ha) ? wt : z7(Ha)), Ov(Qi(Pr(e)))) : Pr(e), ws = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = Pr(e[n], t[n]) : e[n] = t[n];
  return e;
}, re = (e, t) => {
  let { extend: n = null, slots: r = {}, variants: a = {}, compoundVariants: i = [], compoundSlots: l = [], defaultVariants: o = {} } = e, u = { ...V7, ...t }, s = n != null && n.base ? Pr(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = n != null && n.variants && !qe(n.variants) ? Rv(a, n.variants) : a, c = n != null && n.defaultVariants && !qe(n.defaultVariants) ? { ...n.defaultVariants, ...o } : o;
  !qe(u.twMergeConfig) && !s7(u.twMergeConfig, Ha) && (Ll = !0, Ha = u.twMergeConfig);
  let p = qe(n == null ? void 0 : n.slots), m = qe(r) ? {} : { base: Pr(e == null ? void 0 : e.base, p && (n == null ? void 0 : n.base)), ...r }, b = p ? m : ws({ ...n == null ? void 0 : n.slots }, qe(m) ? { base: e == null ? void 0 : e.base } : m), h = (y) => {
    if (qe(d) && qe(r) && p)
      return ar(s, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(u);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let $ = (S, w, k = [], K) => {
      let A = k;
      if (typeof w == "string")
        A = A.concat(Ds(w).split(" ").map((D) => `${S}:${D}`));
      else if (Array.isArray(w))
        A = A.concat(w.reduce((D, j) => D.concat(`${S}:${j}`), []));
      else if (typeof w == "object" && typeof K == "string") {
        for (let D in w)
          if (w.hasOwnProperty(D) && D === K) {
            let j = w[D];
            if (j && typeof j == "string") {
              let H = Ds(j);
              A[K] ? A[K] = A[K].concat(H.split(" ").map((V) => `${S}:${V}`)) : A[K] = H.split(" ").map((V) => `${S}:${V}`);
            } else
              Array.isArray(j) && j.length > 0 && (A[K] = j.reduce((H, V) => H.concat(`${S}:${V}`), []));
          }
      }
      return A;
    }, x = (S, w = d, k = null, K = null) => {
      var A;
      let D = w[S];
      if (!D || qe(D))
        return null;
      let j = (A = K == null ? void 0 : K[S]) != null ? A : y == null ? void 0 : y[S];
      if (j === null)
        return null;
      let H = xs(j), V = Array.isArray(u.responsiveVariants) && u.responsiveVariants.length > 0 || u.responsiveVariants === !0, z = c == null ? void 0 : c[S], I = [];
      if (typeof H == "object" && V)
        for (let [te, oe] of Object.entries(H)) {
          let Ee = D[oe];
          if (te === "initial") {
            z = oe;
            continue;
          }
          Array.isArray(u.responsiveVariants) && !u.responsiveVariants.includes(te) || (I = $(te, Ee, I, k));
        }
      let W = D[H] || D[xs(z)];
      return typeof I == "object" && typeof k == "string" && I[k] ? ws(I, W) : I.length > 0 ? (I.push(W), I) : W;
    }, E = () => d ? Object.keys(d).map((S) => x(S, d)) : null, P = (S, w) => {
      if (!d || typeof d != "object")
        return null;
      let k = new Array();
      for (let K in d) {
        let A = x(K, d, S, w), D = S === "base" && typeof A == "string" ? A : A && A[S];
        D && (k[k.length] = D);
      }
      return k;
    }, B = {};
    for (let S in y)
      y[S] !== void 0 && (B[S] = y[S]);
    let T = (S, w) => {
      var k;
      let K = typeof (y == null ? void 0 : y[S]) == "object" ? { [S]: (k = y[S]) == null ? void 0 : k.initial } : {};
      return { ...c, ...B, ...K, ...w };
    }, g = (S = [], w) => {
      let k = [];
      for (let { class: K, className: A, ...D } of S) {
        let j = !0;
        for (let [H, V] of Object.entries(D)) {
          let z = T(H, w);
          if (Array.isArray(V)) {
            if (!V.includes(z[H])) {
              j = !1;
              break;
            }
          } else if (z[H] !== V) {
            j = !1;
            break;
          }
        }
        j && (K && k.push(K), A && k.push(A));
      }
      return k;
    }, M = (S) => {
      let w = g(i, S), k = g(n == null ? void 0 : n.compoundVariants, S);
      return Mv(k, w);
    }, F = (S) => {
      let w = M(S);
      if (!Array.isArray(w))
        return w;
      let k = {};
      for (let K of w)
        if (typeof K == "string" && (k.base = ar(k.base, K)(u)), typeof K == "object")
          for (let [A, D] of Object.entries(K))
            k[A] = ar(k[A], D)(u);
      return k;
    }, C = (S) => {
      if (l.length < 1)
        return null;
      let w = {};
      for (let { slots: k = [], class: K, className: A, ...D } of l) {
        if (!qe(D)) {
          let j = !0;
          for (let H of Object.keys(D)) {
            let V = T(H, S)[H];
            if (V === void 0 || (Array.isArray(D[H]) ? !D[H].includes(V) : D[H] !== V)) {
              j = !1;
              break;
            }
          }
          if (!j)
            continue;
        }
        for (let j of k)
          w[j] = w[j] || [], w[j].push([K, A]);
      }
      return w;
    };
    if (!qe(r) || !p) {
      let S = {};
      if (typeof b == "object" && !qe(b))
        for (let w of Object.keys(b))
          S[w] = (k) => {
            var K, A;
            return ar(b[w], P(w, k), ((K = F(k)) != null ? K : [])[w], ((A = C(k)) != null ? A : [])[w], k == null ? void 0 : k.class, k == null ? void 0 : k.className)(u);
          };
      return S;
    }
    return ar(s, E(), M(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(u);
  }, v = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return h.variantKeys = v(), h.extend = n, h.base = s, h.slots = b, h.variants = d, h.defaultVariants = c, h.compoundSlots = l, h.compoundVariants = i, h;
};
const Pe = re({
  base: "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-1",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2"
    }
  }
});
function Te(e, t) {
  return Ke(e, (n) => wt(t, n));
}
let L7 = re({
  extend: Pe,
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
function Qt(e) {
  return /* @__PURE__ */ f.createElement(
    Gn,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => L7({ ...n, variant: e.variant, className: t })
      )
    }
  );
}
function Yo(e) {
  return /* @__PURE__ */ f.createElement(Bx, { ...e, className: wt("outline outline-0 p-6 [[data-placement]>&]:p-4 max-h-[inherit] overflow-auto relative", e.className) });
}
function w8({
  title: e,
  variant: t,
  cancelLabel: n,
  actionLabel: r,
  onAction: a,
  children: i,
  ...l
}) {
  return /* @__PURE__ */ f.createElement(Yo, { role: "alertdialog", ...l }, ({ close: o }) => /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(
    Dh,
    {
      slot: "title",
      className: "text-xl font-semibold leading-6 my-0"
    },
    e
  ), /* @__PURE__ */ f.createElement("div", { className: `w-6 h-6 absolute right-6 top-6 stroke-2 ${t === "destructive" ? "text-red-500" : "text-blue-500"}` }, t === "destructive" ? /* @__PURE__ */ f.createElement(tg, { "aria-hidden": !0 }) : /* @__PURE__ */ f.createElement(ig, { "aria-hidden": !0 })), /* @__PURE__ */ f.createElement("p", { className: "mt-3 text-slate-500 dark:text-zinc-400" }, i), /* @__PURE__ */ f.createElement("div", { className: "mt-6 flex justify-end gap-2" }, /* @__PURE__ */ f.createElement(
    Qt,
    {
      variant: "secondary",
      onPress: o
    },
    n || "Cancel"
  ), /* @__PURE__ */ f.createElement(
    Qt,
    {
      variant: t === "destructive" ? "destructive" : "primary",
      autoFocus: !0,
      onPress: bt(a, o)
    },
    r
  ))));
}
const O7 = re({
  extend: Pe,
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
function j7(e) {
  return /* @__PURE__ */ f.createElement(
    A6,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => O7({ ...n, className: t, variant: e.variant })
      )
    }
  );
}
function S8(e) {
  return /* @__PURE__ */ f.createElement(I6, { ...e, className: wt("flex gap-1", e.className) });
}
function B8(e) {
  return /* @__PURE__ */ f.createElement(K6, { ...e, className: wt("flex items-center gap-1", e.className) }, /* @__PURE__ */ f.createElement(j7, { variant: "secondary", ...e }), e.href && /* @__PURE__ */ f.createElement(el, { className: "w-3 h-3 text-gray-600 dark:text-zinc-400" }));
}
const H7 = re({
  extend: Pe,
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
function _7({ errorMessage: e, ...t }) {
  return /* @__PURE__ */ f.createElement(_6, { ...t }, /* @__PURE__ */ f.createElement(jv, null), /* @__PURE__ */ f.createElement(Ph, null, /* @__PURE__ */ f.createElement(Hv, null), /* @__PURE__ */ f.createElement(Ro, null, (n) => /* @__PURE__ */ f.createElement(Bh, { date: n, className: H7 }))), e && /* @__PURE__ */ f.createElement(Wr, { slot: "errorMessage", className: "text-sm text-red-600" }, e));
}
function jv() {
  let { direction: e } = ie();
  return /* @__PURE__ */ f.createElement("header", { className: "flex items-center gap-1 pb-4 px-1 w-full" }, /* @__PURE__ */ f.createElement(Qt, { variant: "icon", slot: "previous" }, e === "rtl" ? /* @__PURE__ */ f.createElement(el, { "aria-hidden": !0 }) : /* @__PURE__ */ f.createElement(au, { "aria-hidden": !0 })), /* @__PURE__ */ f.createElement(Dh, { className: "flex-1 font-semibold text-xl text-center mx-2 text-zinc-900 dark:text-zinc-200" }), /* @__PURE__ */ f.createElement(Qt, { variant: "icon", slot: "next" }, e === "rtl" ? /* @__PURE__ */ f.createElement(au, { "aria-hidden": !0 }) : /* @__PURE__ */ f.createElement(el, { "aria-hidden": !0 })));
}
function Hv() {
  return /* @__PURE__ */ f.createElement(wh, null, (e) => /* @__PURE__ */ f.createElement(Sh, { className: "text-xs text-gray-500 font-semibold" }, e));
}
function _e(e) {
  return /* @__PURE__ */ f.createElement(
    nx,
    {
      ...e,
      className: wt(
        "text-sm text-gray-500 dark:text-zinc-400 font-medium cursor-default w-fit",
        e.className
      )
    }
  );
}
function ct(e) {
  return /* @__PURE__ */ f.createElement(
    Wr,
    {
      ...e,
      slot: "description",
      className: wt("text-sm text-gray-600", e.className)
    }
  );
}
function yt(e) {
  return /* @__PURE__ */ f.createElement(
    Q6,
    {
      ...e,
      className: Te(
        e.className,
        "text-sm text-red-600 forced-colors:text-[Mark]"
      )
    }
  );
}
const wr = re({
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
}), _v = re({
  extend: Pe,
  base: "group flex items-center h-9 bg-white dark:bg-zinc-900 forced-colors:bg-[Field] border rounded-lg overflow-hidden",
  variants: wr.variants,
  compoundVariants: [
    {
      isFocusWithin: !0,
      isFocusVisible: !1,
      class: "outline-2 -outline-offset-1"
    }
  ]
});
function Yr(e) {
  return /* @__PURE__ */ f.createElement(
    Io,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => _v({ ...n, className: t })
      )
    }
  );
}
function xi(e) {
  return /* @__PURE__ */ f.createElement(
    Fh,
    {
      ...e,
      className: Te(
        e.className,
        "px-2 py-1.5 flex-1 min-w-0 outline outline-0 bg-white dark:bg-zinc-900 text-sm text-gray-800 dark:text-zinc-200 disabled:text-gray-200 dark:disabled:text-zinc-600"
      )
    }
  );
}
function k8(e) {
  return /* @__PURE__ */ f.createElement(
    ox,
    {
      ...e,
      className: Te(
        e.className,
        "flex flex-col gap-2"
      )
    },
    /* @__PURE__ */ f.createElement(_e, null, e.label),
    e.children,
    e.description && /* @__PURE__ */ f.createElement(ct, null, e.description),
    /* @__PURE__ */ f.createElement(yt, null, e.errorMessage)
  );
}
const U7 = re({
  base: "flex gap-2 items-center group text-sm transition",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-200",
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]"
    }
  }
}), W7 = re({
  extend: Pe,
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
}), Ss = "w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]";
function Jo(e) {
  return /* @__PURE__ */ f.createElement(
    lx,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => U7({ ...n, className: t })
      )
    },
    ({ isSelected: t, isIndeterminate: n, ...r }) => /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(
      "div",
      {
        className: W7({
          isSelected: t || n,
          ...r
        })
      },
      n ? /* @__PURE__ */ f.createElement(lg, { "aria-hidden": !0, className: Ss }) : t ? /* @__PURE__ */ f.createElement(Ol, { "aria-hidden": !0, className: Ss }) : null
    ), e.children)
  );
}
function F8({ children: e, ...t }) {
  return /* @__PURE__ */ f.createElement(Vo, { ...t, className: Te(t.className, "outline-0 p-1 border border-gray-300 dark:border-zinc-600 rounded-lg") }, e);
}
const G7 = re({
  extend: Pe,
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
function A8(e) {
  let t = e.textValue || (typeof e.children == "string" ? e.children : void 0);
  return /* @__PURE__ */ f.createElement(Th, { ...e, textValue: t, className: G7 }, Ke(e.children, (n) => /* @__PURE__ */ f.createElement(f.Fragment, null, n, /* @__PURE__ */ f.createElement("div", { className: "absolute left-4 right-4 bottom-0 h-px bg-white/20 forced-colors:bg-[HighlightText] hidden [.group[data-selected]:has(+[data-selected])_&]:block" }))));
}
const Uv = re({
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
function Wv(e) {
  let t = e.textValue || (typeof e.children == "string" ? e.children : void 0);
  return /* @__PURE__ */ f.createElement(Th, { ...e, textValue: t, className: Uv }, Ke(e.children, (n, { isSelected: r }) => /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("span", { className: "flex items-center flex-1 gap-2 font-normal truncate group-selected:font-semibold" }, n), /* @__PURE__ */ f.createElement("span", { className: "flex items-center w-5" }, r && /* @__PURE__ */ f.createElement(Ol, { className: "w-4 h-4" })))));
}
function Xo(e) {
  return /* @__PURE__ */ f.createElement(S6, { className: "first:-mt-[5px] after:content-[''] after:block after:h-[5px]" }, /* @__PURE__ */ f.createElement(Ko, { className: "text-sm font-semibold text-gray-500 dark:text-zinc-300 px-4 py-1 truncate sticky -top-[5px] -mt-px -mx-1 z-10 bg-gray-100/60 dark:bg-zinc-700/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 border-y dark:border-y-zinc-700 [&+*]:mt-1" }, e.title), /* @__PURE__ */ f.createElement(To, { items: e.items }, e.children));
}
const Z7 = re({
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
function Jr({ children: e, showArrow: t, className: n, ...r }) {
  return /* @__PURE__ */ f.createElement(
    Px,
    {
      offset: t ? 12 : 8,
      ...r,
      className: Ke(n, (a, i) => Z7({ ...i, className: a }))
    },
    t && /* @__PURE__ */ f.createElement(Rh, { className: "group" }, /* @__PURE__ */ f.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", className: "block fill-white dark:fill-[#1f1f21] forced-colors:fill-[Canvas] stroke-1 stroke-black/10 dark:stroke-zinc-600 forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90" }, /* @__PURE__ */ f.createElement("path", { d: "M0 0 L6 6 L12 0" }))),
    e
  );
}
function T8({ label: e, description: t, errorMessage: n, children: r, items: a, ...i }) {
  return /* @__PURE__ */ f.createElement(Mx, { ...i, className: Te(i.className, "group flex flex-col gap-1") }, /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement(Yr, null, /* @__PURE__ */ f.createElement(xi, null), /* @__PURE__ */ f.createElement(Qt, { variant: "icon", className: "w-6 mr-1 rounded outline-offset-0 " }, /* @__PURE__ */ f.createElement(jl, { "aria-hidden": !0, className: "w-4 h-4" }))), t && /* @__PURE__ */ f.createElement(ct, null, t), /* @__PURE__ */ f.createElement(yt, null, n), /* @__PURE__ */ f.createElement(Jr, { className: "w-[--trigger-width]" }, /* @__PURE__ */ f.createElement(Vo, { items: a, className: "outline-0 p-1 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]" }, r)));
}
function M8(e) {
  return /* @__PURE__ */ f.createElement(Wv, { ...e });
}
function R8(e) {
  return /* @__PURE__ */ f.createElement(Xo, { ...e });
}
function I8({ label: e, description: t, errorMessage: n, ...r }) {
  return /* @__PURE__ */ f.createElement(Nx, { ...r, className: Te(r.className, "flex flex-col gap-1") }, e && /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement(Sr, null), t && /* @__PURE__ */ f.createElement(ct, null, t), /* @__PURE__ */ f.createElement(yt, null, n));
}
const q7 = re({
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
function Sr(e) {
  return /* @__PURE__ */ f.createElement(Ox, { className: (t) => _v({ ...t, class: "block min-w-[150px] px-2 py-1.5 text-sm" }), ...e }, (t) => /* @__PURE__ */ f.createElement(Hx, { segment: t, className: q7 }));
}
function N8({ label: e, description: t, errorMessage: n, ...r }) {
  return /* @__PURE__ */ f.createElement(qx, { ...r, className: Te(r.className, "group flex flex-col gap-1") }, e && /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement(Yr, { className: "min-w-[208px] w-auto" }, /* @__PURE__ */ f.createElement(Sr, { className: "flex-1 min-w-[150px] px-2 py-1.5 text-sm" }), /* @__PURE__ */ f.createElement(Qt, { variant: "icon", className: "w-6 mr-1 rounded outline-offset-0" }, /* @__PURE__ */ f.createElement(Ts, { "aria-hidden": !0, className: "w-4 h-4" }))), t && /* @__PURE__ */ f.createElement(ct, null, t), /* @__PURE__ */ f.createElement(yt, null, n), /* @__PURE__ */ f.createElement(Jr, null, /* @__PURE__ */ f.createElement(Yo, null, /* @__PURE__ */ f.createElement(_7, null))));
}
const Y7 = re({
  extend: Pe,
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
function J7({ errorMessage: e, ...t }) {
  return /* @__PURE__ */ f.createElement(W6, { ...t }, /* @__PURE__ */ f.createElement(jv, null), /* @__PURE__ */ f.createElement(Ph, { className: "[&_td]:px-0" }, /* @__PURE__ */ f.createElement(Hv, null), /* @__PURE__ */ f.createElement(Ro, null, (n) => /* @__PURE__ */ f.createElement(Bh, { date: n, className: "group w-9 h-9 text-sm outline outline-0 cursor-default outside-month:text-gray-300 selected:bg-blue-100 dark:selected:bg-blue-700/30 forced-colors:selected:bg-[Highlight] invalid:selected:bg-red-100 dark:invalid:selected:bg-red-700/30 forced-colors:invalid:selected:bg-[Mark] [td:first-child_&]:rounded-s-full selection-start:rounded-s-full [td:last-child_&]:rounded-e-full selection-end:rounded-e-full" }, ({ formattedDate: r, isSelected: a, isSelectionStart: i, isSelectionEnd: l, isFocusVisible: o, isDisabled: u }) => /* @__PURE__ */ f.createElement(
    "span",
    {
      className: Y7({
        selectionState: a && (i || l) ? "cap" : a ? "middle" : "none",
        isDisabled: u,
        isFocusVisible: o
      })
    },
    r
  )))), e && /* @__PURE__ */ f.createElement(Wr, { slot: "errorMessage", className: "text-sm text-red-600" }, e));
}
function K8({ label: e, description: t, errorMessage: n, ...r }) {
  return /* @__PURE__ */ f.createElement(Jx, { ...r, className: Te(r.className, "group flex flex-col gap-1") }, e && /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement(Yr, { className: "min-w-[208px] w-auto" }, /* @__PURE__ */ f.createElement(Sr, { slot: "start", className: "px-2 py-1.5 text-sm" }), /* @__PURE__ */ f.createElement("span", { "aria-hidden": "true", className: "text-gray-800 dark:text-zinc-200 forced-colors:text-[ButtonText] group-disabled:text-gray-200 group-disabled:dark:text-zinc-600 group-disabled:forced-colors:text-[GrayText]" }, "–"), /* @__PURE__ */ f.createElement(Sr, { slot: "end", className: "flex-1 px-2 py-1.5 text-sm" }), /* @__PURE__ */ f.createElement(Qt, { variant: "icon", className: "w-6 mr-1 rounded outline-offset-0" }, /* @__PURE__ */ f.createElement(Ts, { "aria-hidden": !0, className: "w-4 h-4" }))), t && /* @__PURE__ */ f.createElement(ct, null, t), /* @__PURE__ */ f.createElement(yt, null, n), /* @__PURE__ */ f.createElement(Jr, null, /* @__PURE__ */ f.createElement(Yo, null, /* @__PURE__ */ f.createElement(J7, null))));
}
function z8(e) {
  return /* @__PURE__ */ f.createElement(Qx, { ...e, className: wt("flex flex-col gap-4", e.className) });
}
function V8({ children: e, ...t }) {
  return /* @__PURE__ */ f.createElement(rD, { ...t, className: Te(t.className, "overflow-auto relative border dark:border-zinc-600 rounded-lg") }, e);
}
const X7 = re({
  extend: Pe,
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
function L8({ children: e, ...t }) {
  let n = typeof e == "string" ? e : void 0;
  return /* @__PURE__ */ f.createElement(iD, { textValue: n, ...t, className: X7 }, ({ selectionMode: r, selectionBehavior: a, allowsDragging: i }) => /* @__PURE__ */ f.createElement(f.Fragment, null, i && /* @__PURE__ */ f.createElement(Gn, { slot: "drag" }, "≡"), r === "multiple" && a === "toggle" && /* @__PURE__ */ f.createElement(Jo, { slot: "selection" }), e));
}
function O8(e) {
  return /* @__PURE__ */ f.createElement(Jr, { placement: e.placement, className: "min-w-[150px]" }, /* @__PURE__ */ f.createElement(mD, { ...e, className: "p-1 outline outline-0 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]" }));
}
function j8(e) {
  return /* @__PURE__ */ f.createElement(hD, { ...e, className: Uv }, Ke(e.children, (t, { selectionMode: n, isSelected: r }) => /* @__PURE__ */ f.createElement(f.Fragment, null, n !== "none" && /* @__PURE__ */ f.createElement("span", { className: "flex items-center w-4" }, r && /* @__PURE__ */ f.createElement(Ol, { "aria-hidden": !0, className: "w-4 h-4" })), /* @__PURE__ */ f.createElement("span", { className: "flex items-center flex-1 gap-2 font-normal truncate group-selected:font-semibold" }, t))));
}
function H8(e) {
  return /* @__PURE__ */ f.createElement(vi, { ...e, className: "mx-3 my-1 border-b border-gray-300 dark:border-zinc-700" });
}
function _8(e) {
  return /* @__PURE__ */ f.createElement(Xo, { ...e });
}
function U8({ label: e, ...t }) {
  return /* @__PURE__ */ f.createElement(yD, { ...t, className: Te(t.className, "flex flex-col gap-1") }, ({ percentage: n, valueText: r }) => /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", { className: "flex justify-between gap-2" }, /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement("span", { className: `text-sm ${n >= 80 ? "text-red-600 dark:text-red-500" : "text-gray-600 dark:text-zinc-400"}` }, n >= 80 && /* @__PURE__ */ f.createElement(ng, { "aria-label": "Alert", className: "inline-block w-4 h-4 align-text-bottom" }), " " + r)), /* @__PURE__ */ f.createElement("div", { className: "w-64 h-2 rounded-full bg-gray-300 dark:bg-zinc-700 outline outline-1 -outline-offset-1 outline-transparent relative" }, /* @__PURE__ */ f.createElement("div", { className: `absolute top-0 left-0 h-full rounded-full ${Q7(n)} forced-colors:bg-[Highlight]`, style: { width: n + "%" } }))));
}
function Q7(e) {
  return e < 70 ? "bg-green-600" : e < 80 ? "bg-orange-500" : "bg-red-600";
}
const e8 = re({
  base: "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out"
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in"
    }
  }
}), t8 = re({
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
function W8(e) {
  return /* @__PURE__ */ f.createElement(xv, { ...e, className: e8 }, /* @__PURE__ */ f.createElement(ED, { ...e, className: t8 }));
}
function G8({ label: e, description: t, errorMessage: n, ...r }) {
  return /* @__PURE__ */ f.createElement(kD, { ...r, className: Te(r.className, "group flex flex-col gap-1") }, /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement(Yr, null, (a) => /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(xi, null), /* @__PURE__ */ f.createElement("div", { className: wr({ ...a, class: "flex flex-col border-s-2" }) }, /* @__PURE__ */ f.createElement(Bs, { slot: "increment" }, /* @__PURE__ */ f.createElement(ag, { "aria-hidden": !0, className: "w-4 h-4" })), /* @__PURE__ */ f.createElement("div", { className: wr({ ...a, class: "border-b-2" }) }), /* @__PURE__ */ f.createElement(Bs, { slot: "decrement" }, /* @__PURE__ */ f.createElement(jl, { "aria-hidden": !0, className: "w-4 h-4" }))))), t && /* @__PURE__ */ f.createElement(ct, null, t), /* @__PURE__ */ f.createElement(yt, null, n));
}
function Bs(e) {
  return /* @__PURE__ */ f.createElement(Gn, { ...e, className: "px-0.5 cursor-default text-gray-500 pressed:bg-gray-100 group-disabled:text-gray-200 dark:text-zinc-400 dark:pressed:bg-zinc-800 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]" });
}
function Z8({ label: e, ...t }) {
  return /* @__PURE__ */ f.createElement(TD, { ...t, className: Te(t.className, "flex flex-col gap-1") }, ({ percentage: n, valueText: r, isIndeterminate: a }) => /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", { className: "flex justify-between gap-2" }, /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement("span", { className: "text-sm text-gray-600 dark:text-zinc-400" }, r)), /* @__PURE__ */ f.createElement("div", { className: "w-64 h-2 rounded-full bg-gray-300 dark:bg-zinc-700 outline outline-1 -outline-offset-1 outline-transparent relative overflow-hidden" }, /* @__PURE__ */ f.createElement("div", { className: `absolute top-0 h-full rounded-full bg-blue-600 dark:bg-blue-500 forced-colors:bg-[Highlight] ${a ? "left-full animate-in duration-1000 [--tw-enter-translate-x:calc(-16rem-100%)] slide-out-to-right-full repeat-infinite ease-out" : "left-0"}`, style: { width: (a ? 40 : n) + "%" } }))));
}
function q8(e) {
  return /* @__PURE__ */ f.createElement(
    KD,
    {
      ...e,
      className: Te(
        e.className,
        "group flex flex-col gap-2"
      )
    },
    /* @__PURE__ */ f.createElement(_e, null, e.label),
    /* @__PURE__ */ f.createElement("div", { className: "flex group-orientation-vertical:flex-col gap-2 group-orientation-horizontal:gap-4" }, e.children),
    e.description && /* @__PURE__ */ f.createElement(ct, null, e.description),
    /* @__PURE__ */ f.createElement(yt, null, e.errorMessage)
  );
}
const n8 = re({
  extend: Pe,
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
function Y8(e) {
  return /* @__PURE__ */ f.createElement(
    zD,
    {
      ...e,
      className: Te(
        e.className,
        "flex gap-2 items-center group text-gray-800 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText] text-sm transition"
      )
    },
    (t) => /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", { className: n8(t) }), e.children)
  );
}
function J8({ label: e, description: t, errorMessage: n, ...r }) {
  return /* @__PURE__ */ f.createElement(OD, { ...r, className: Te(r.className, "group flex flex-col gap-1 min-w-[40px]") }, e && /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement(Yr, null, /* @__PURE__ */ f.createElement(og, { "aria-hidden": !0, className: "w-4 h-4 ml-2 text-gray-500 dark:text-zinc-400 forced-colors:text-[ButtonText] group-disabled:text-gray-200 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]" }), /* @__PURE__ */ f.createElement(xi, { className: "[&::-webkit-search-cancel-button]:hidden" }), /* @__PURE__ */ f.createElement(Qt, { variant: "icon", className: "mr-1 w-6 group-empty:invisible" }, /* @__PURE__ */ f.createElement(Ms, { "aria-hidden": !0, className: "w-4 h-4" }))), t && /* @__PURE__ */ f.createElement(ct, null, t), /* @__PURE__ */ f.createElement(yt, null, n));
}
const r8 = re({
  extend: Pe,
  base: "flex items-center text-start gap-4 w-full cursor-default border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none rounded-lg pl-3 pr-2 py-2 min-w-[150px] transition bg-gray-50 dark:bg-zinc-700",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-300 hover:bg-gray-100 pressed:bg-gray-200 dark:hover:bg-zinc-600 dark:pressed:bg-zinc-500 group-invalid:border-red-600 forced-colors:group-invalid:border-[Mark]",
      true: "text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText] dark:bg-zinc-800 dark:border-white/5 forced-colors:border-[GrayText]"
    }
  }
});
function X8({ label: e, description: t, errorMessage: n, children: r, items: a, ...i }) {
  return /* @__PURE__ */ f.createElement(HD, { ...i, className: Te(i.className, "group flex flex-col gap-1") }, e && /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement(Gn, { className: r8 }, /* @__PURE__ */ f.createElement(UD, { className: "flex-1 text-sm placeholder-shown:italic" }), /* @__PURE__ */ f.createElement(jl, { "aria-hidden": !0, className: "w-4 h-4 text-gray-600 dark:text-zinc-400 forced-colors:text-[ButtonText] group-disabled:text-gray-200 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]" })), t && /* @__PURE__ */ f.createElement(ct, null, t), /* @__PURE__ */ f.createElement(yt, null, n), /* @__PURE__ */ f.createElement(Jr, { className: "min-w-[--trigger-width]" }, /* @__PURE__ */ f.createElement(Vo, { items: a, className: "outline-none p-1 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]" }, r)));
}
function Q8(e) {
  return /* @__PURE__ */ f.createElement(Wv, { ...e });
}
function eE(e) {
  return /* @__PURE__ */ f.createElement(Xo, { ...e });
}
const a8 = re({
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
function tE(e) {
  return /* @__PURE__ */ f.createElement(
    vi,
    {
      ...e,
      className: a8({ orientation: e.orientation, className: e.className })
    }
  );
}
const i8 = re({
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
}), l8 = re({
  extend: Pe,
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
function nE({
  label: e,
  thumbLabels: t,
  ...n
}) {
  return /* @__PURE__ */ f.createElement(
    ZD,
    {
      ...n,
      className: Te(
        n.className,
        "orientation-horizontal:grid orientation-vertical:flex grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:w-64"
      )
    },
    /* @__PURE__ */ f.createElement(_e, null, e),
    /* @__PURE__ */ f.createElement(YD, { className: "text-sm text-gray-500 dark:text-zinc-400 font-medium orientation-vertical:hidden" }, ({ state: r }) => r.values.map((a, i) => r.getThumbValueLabel(i)).join(" – ")),
    /* @__PURE__ */ f.createElement(XD, { className: "group col-span-2 orientation-horizontal:h-6 orientation-vertical:w-6 orientation-vertical:h-64 flex items-center" }, ({ state: r, ...a }) => /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", { className: i8(a) }), r.values.map((i, l) => /* @__PURE__ */ f.createElement(
      e2,
      {
        key: l,
        index: l,
        "aria-label": t == null ? void 0 : t[l],
        className: l8
      }
    ))))
  );
}
const o8 = re({
  extend: Pe,
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
}), u8 = re({
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
function rE({ children: e, ...t }) {
  return /* @__PURE__ */ f.createElement(
    r2,
    {
      ...t,
      className: Te(
        t.className,
        "group flex gap-2 items-center text-gray-800 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText] text-sm transition"
      )
    },
    (n) => /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", { className: o8(n) }, /* @__PURE__ */ f.createElement("span", { className: u8(n) })), e)
  );
}
function aE(e) {
  return /* @__PURE__ */ f.createElement(l2, { className: "max-h-[280px] w-[550px] overflow-auto scroll-pt-[2.281rem] relative border dark:border-zinc-600 rounded-lg" }, /* @__PURE__ */ f.createElement(s2, { ...e, className: "border-separate border-spacing-0" }));
}
const s8 = re({
  extend: Pe,
  base: "px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden"
}), d8 = re({
  extend: Pe,
  base: "w-px px-[8px] translate-x-[8px] box-content py-1 h-5 bg-clip-content bg-gray-400 dark:bg-zinc-500 forced-colors:bg-[ButtonBorder] cursor-col-resize rounded resizing:bg-blue-600 forced-colors:resizing:bg-[Highlight] resizing:w-[2px] resizing:pl-[7px] -outline-offset-2"
});
function c8(e) {
  return /* @__PURE__ */ f.createElement(Sv, { ...e, className: Te(e.className, "[&:hover]:z-20 [&:focus-within]:z-20 text-start text-sm font-semibold text-gray-700 dark:text-zinc-300 cursor-default") }, Ke(e.children, (t, { allowsSorting: n, sortDirection: r }) => /* @__PURE__ */ f.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ f.createElement(
    Io,
    {
      role: "presentation",
      tabIndex: -1,
      className: s8
    },
    /* @__PURE__ */ f.createElement("span", { className: "truncate" }, t),
    n && /* @__PURE__ */ f.createElement(
      "span",
      {
        className: `w-4 h-4 flex items-center justify-center transition ${r === "descending" ? "rotate-180" : ""}`
      },
      r && /* @__PURE__ */ f.createElement(rg, { "aria-hidden": !0, className: "w-4 h-4 text-gray-500 dark:text-zinc-400 forced-colors:text-[ButtonText]" })
    )
  ), !e.width && /* @__PURE__ */ f.createElement(D2, { className: d8 }))));
}
function iE(e) {
  let { selectionBehavior: t, selectionMode: n, allowsDragging: r } = wv();
  return /* @__PURE__ */ f.createElement(c2, { ...e, className: wt("sticky top-0 z-10 bg-gray-100/60 dark:bg-zinc-700/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:supports-[-moz-appearance:none]:bg-zinc-700 forced-colors:bg-[Canvas] rounded-t-lg border-b dark:border-b-zinc-700", e.className) }, r && /* @__PURE__ */ f.createElement(c8, null), t === "toggle" && /* @__PURE__ */ f.createElement(Sv, { width: 36, minWidth: 36, className: "text-start text-sm font-semibold cursor-default p-2" }, n === "multiple" && /* @__PURE__ */ f.createElement(Jo, { slot: "selection" })), /* @__PURE__ */ f.createElement(To, { items: e.columns }, e.children));
}
const f8 = re({
  extend: Pe,
  base: "group/row relative cursor-default select-none -outline-offset-2 text-gray-900 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700/60 selected:bg-blue-100 selected:hover:bg-blue-200 dark:selected:bg-blue-700/30 dark:selected:hover:bg-blue-700/40"
});
function lE({ id: e, columns: t, children: n, ...r }) {
  let { selectionBehavior: a, allowsDragging: i } = wv();
  return /* @__PURE__ */ f.createElement(p2, { id: e, ...r, className: f8 }, i && /* @__PURE__ */ f.createElement(ks, null, /* @__PURE__ */ f.createElement(Gn, { slot: "drag" }, "≡")), a === "toggle" && /* @__PURE__ */ f.createElement(ks, null, /* @__PURE__ */ f.createElement(Jo, { slot: "selection" })), /* @__PURE__ */ f.createElement(To, { items: t }, n));
}
const m8 = re({
  extend: Pe,
  base: "border-b dark:border-b-zinc-700 group-last/row:border-b-0 [--selected-border:theme(colors.blue.200)] dark:[--selected-border:theme(colors.blue.900)] group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border] p-2 truncate -outline-offset-2"
});
function ks(e) {
  return /* @__PURE__ */ f.createElement(h2, { ...e, className: m8 });
}
const p8 = re({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row w-[800px]"
    }
  }
});
function oE(e) {
  return /* @__PURE__ */ f.createElement(
    A2,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => p8({ ...n, className: t })
      )
    }
  );
}
const b8 = re({
  base: "flex gap-1",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
});
function uE(e) {
  return /* @__PURE__ */ f.createElement(
    R2,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => b8({ ...n, className: t })
      )
    }
  );
}
const h8 = re({
  extend: Pe,
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
function sE(e) {
  return /* @__PURE__ */ f.createElement(
    N2,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => h8({ ...n, className: t })
      )
    }
  );
}
const v8 = re({
  extend: Pe,
  base: "flex-1 p-4 text-sm text-gray-900 dark:text-zinc-100"
});
function dE(e) {
  return /* @__PURE__ */ f.createElement(
    V2,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => v8({ ...n, className: t })
      )
    }
  );
}
const Fs = {
  gray: "bg-gray-100 text-gray-600 border-gray-200 hover:border-gray-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600 dark:hover:border-zinc-500",
  green: "bg-green-100 text-green-700 border-green-200 hover:border-green-300 dark:bg-green-300/20 dark:text-green-400 dark:border-green-300/10 dark:hover:border-green-300/20",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:border-yellow-300 dark:bg-yellow-300/20 dark:text-yellow-400 dark:border-yellow-300/10 dark:hover:border-yellow-300/20",
  blue: "bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/10 dark:hover:border-blue-400/20"
}, Gv = U("gray"), g8 = re({
  extend: Pe,
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
  compoundVariants: Object.keys(Fs).map((e) => ({
    isSelected: !1,
    color: e,
    class: Fs[e]
  }))
});
function cE({
  label: e,
  description: t,
  errorMessage: n,
  items: r,
  children: a,
  renderEmptyState: i,
  ...l
}) {
  return /* @__PURE__ */ f.createElement(j2, { ...l, className: wt("flex flex-col gap-1", l.className) }, /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement(Gv.Provider, { value: l.color || "gray" }, /* @__PURE__ */ f.createElement(U2, { items: r, renderEmptyState: i, className: "flex flex-wrap gap-1" }, a)), t && /* @__PURE__ */ f.createElement(ct, null, t), n && /* @__PURE__ */ f.createElement(Wr, { slot: "errorMessage", className: "text-sm text-red-600" }, n));
}
const $8 = re({
  extend: Pe,
  base: "cursor-default rounded-full transition-[background-color] p-0.5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 pressed:bg-black/20 dark:pressed:bg-white/20"
});
function fE({ children: e, color: t, ...n }) {
  let r = typeof e == "string" ? e : void 0, a = _(Gv);
  return /* @__PURE__ */ f.createElement(
    G2,
    {
      textValue: r,
      ...n,
      className: Ke(
        n.className,
        (i, l) => g8({ ...l, className: i, color: t || a })
      )
    },
    ({ allowsRemoving: i }) => /* @__PURE__ */ f.createElement(f.Fragment, null, e, i && /* @__PURE__ */ f.createElement(Gn, { slot: "remove", className: $8 }, /* @__PURE__ */ f.createElement(Ms, { "aria-hidden": !0, className: "w-3 h-3" })))
  );
}
const y8 = re({
  extend: Pe,
  base: "border rounded-md",
  variants: {
    isFocused: wr.variants.isFocusWithin,
    ...wr.variants
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
function mE({
  label: e,
  description: t,
  errorMessage: n,
  ...r
}) {
  return /* @__PURE__ */ f.createElement(
    X2,
    {
      ...r,
      className: Te(
        r.className,
        "flex flex-col gap-1"
      )
    },
    e && /* @__PURE__ */ f.createElement(_e, null, e),
    /* @__PURE__ */ f.createElement(xi, { className: y8 }),
    t && /* @__PURE__ */ f.createElement(ct, null, t),
    /* @__PURE__ */ f.createElement(yt, null, n)
  );
}
function pE({ label: e, description: t, errorMessage: n, ...r }) {
  return /* @__PURE__ */ f.createElement(zx, { ...r }, /* @__PURE__ */ f.createElement(_e, null, e), /* @__PURE__ */ f.createElement(Sr, null), t && /* @__PURE__ */ f.createElement(ct, null, t), /* @__PURE__ */ f.createElement(yt, null, n));
}
let x8 = re({
  extend: Pe,
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
function bE(e) {
  return /* @__PURE__ */ f.createElement(
    t7,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => x8({ ...n, className: t })
      )
    }
  );
}
const D8 = re({
  base: "flex gap-2",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
});
function hE(e) {
  return /* @__PURE__ */ f.createElement(
    a7,
    {
      ...e,
      className: Ke(
        e.className,
        (t, n) => D8({ ...n, className: t })
      )
    }
  );
}
const E8 = re({
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
function vE({ children: e, ...t }) {
  return /* @__PURE__ */ f.createElement(o7, { ...t, offset: 10, className: Ke(t.className, (n, r) => E8({ ...r, className: n })) }, /* @__PURE__ */ f.createElement(Rh, null, /* @__PURE__ */ f.createElement("svg", { width: 8, height: 8, viewBox: "0 0 8 8", className: "fill-slate-700 dark:fill-slate-600 forced-colors:fill-[Canvas] stroke-gray-800 dark:stroke-white/10 forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90" }, /* @__PURE__ */ f.createElement("path", { d: "M0 0 L4 4 L8 0" }))), e);
}
export {
  w8 as AlertDialog,
  B8 as Breadcrumb,
  S8 as Breadcrumbs,
  Qt as Button,
  _7 as Calendar,
  Hv as CalendarGridHeader,
  jv as CalendarHeader,
  ks as Cell,
  Jo as Checkbox,
  k8 as CheckboxGroup,
  c8 as Column,
  T8 as ComboBox,
  M8 as ComboBoxItem,
  R8 as ComboBoxSection,
  I8 as DateField,
  Sr as DateInput,
  N8 as DatePicker,
  K8 as DateRangePicker,
  ct as Description,
  Yo as Dialog,
  Wv as DropdownItem,
  Xo as DropdownSection,
  yt as FieldError,
  Yr as FieldGroup,
  z8 as Form,
  V8 as GridList,
  L8 as GridListItem,
  xi as Input,
  _e as Label,
  j7 as Link,
  F8 as ListBox,
  A8 as ListBoxItem,
  O8 as Menu,
  j8 as MenuItem,
  _8 as MenuSection,
  H8 as MenuSeparator,
  U8 as Meter,
  W8 as Modal,
  G8 as NumberField,
  Jr as Popover,
  Z8 as ProgressBar,
  Y8 as Radio,
  q8 as RadioGroup,
  J7 as RangeCalendar,
  lE as Row,
  J8 as SearchField,
  X8 as Select,
  Q8 as SelectItem,
  eE as SelectSection,
  tE as Separator,
  nE as Slider,
  rE as Switch,
  sE as Tab,
  uE as TabList,
  dE as TabPanel,
  aE as Table,
  iE as TableHeader,
  oE as Tabs,
  fE as Tag,
  cE as TagGroup,
  mE as TextField,
  pE as TimeField,
  bE as ToggleButton,
  hE as Toolbar,
  vE as Tooltip,
  Te as composeTailwindRenderProps,
  Uv as dropdownItemStyles,
  wr as fieldBorderStyles,
  _v as fieldGroupStyles,
  Pe as focusRing,
  G7 as itemStyles
};
//# sourceMappingURL=gsui.js.map
