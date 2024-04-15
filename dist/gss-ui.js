import g, { forwardRef as J, createElement as Iu, useState as Y, useRef as N, useEffect as te, useCallback as re, useContext as G, useMemo as z, createContext as Z, cloneElement as cd } from "react";
import Qn, { flushSync as jg, createPortal as _g } from "react-dom";
var Bl = { exports: {} }, $n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nu;
function Hg() {
  if (Nu)
    return $n;
  Nu = 1;
  var e = g, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(o, u, s) {
    var d, c = {}, f = null, p = null;
    s !== void 0 && (f = "" + s), u.key !== void 0 && (f = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (d in u)
      n.call(u, d) && !i.hasOwnProperty(d) && (c[d] = u[d]);
    if (o && o.defaultProps)
      for (d in u = o.defaultProps, u)
        c[d] === void 0 && (c[d] = u[d]);
    return { $$typeof: t, type: o, key: f, ref: p, props: c, _owner: a.current };
  }
  return $n.Fragment = r, $n.jsx = l, $n.jsxs = l, $n;
}
var yn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ku;
function Ug() {
  return Ku || (Ku = 1, process.env.NODE_ENV !== "production" && function() {
    var e = g, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), b = Symbol.iterator, m = "@@iterator";
    function h(k) {
      if (k === null || typeof k != "object")
        return null;
      var W = b && k[b] || k[m];
      return typeof W == "function" ? W : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(k) {
      {
        for (var W = arguments.length, Q = new Array(W > 1 ? W - 1 : 0), le = 1; le < W; le++)
          Q[le - 1] = arguments[le];
        x("error", k, Q);
      }
    }
    function x(k, W, Q) {
      {
        var le = y.ReactDebugCurrentFrame, ve = le.getStackAddendum();
        ve !== "" && (W += "%s", Q = Q.concat([ve]));
        var Ce = Q.map(function(me) {
          return String(me);
        });
        Ce.unshift("Warning: " + W), Function.prototype.apply.call(console[k], console, Ce);
      }
    }
    var C = !1, w = !1, A = !1, M = !1, v = !1, I;
    I = Symbol.for("react.module.reference");
    function T(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === n || k === i || v || k === a || k === s || k === d || M || k === p || C || w || A || typeof k == "object" && k !== null && (k.$$typeof === f || k.$$typeof === c || k.$$typeof === l || k.$$typeof === o || k.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === I || k.getModuleId !== void 0));
    }
    function E(k, W, Q) {
      var le = k.displayName;
      if (le)
        return le;
      var ve = W.displayName || W.name || "";
      return ve !== "" ? Q + "(" + ve + ")" : Q;
    }
    function B(k) {
      return k.displayName || "Context";
    }
    function S(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case s:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case o:
            var W = k;
            return B(W) + ".Consumer";
          case l:
            var Q = k;
            return B(Q._context) + ".Provider";
          case u:
            return E(k, k.render, "ForwardRef");
          case c:
            var le = k.displayName || null;
            return le !== null ? le : S(k.type) || "Memo";
          case f: {
            var ve = k, Ce = ve._payload, me = ve._init;
            try {
              return S(me(Ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, V = 0, R, D, H, U, O, L, K;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function ae() {
      {
        if (V === 0) {
          R = console.log, D = console.info, H = console.warn, U = console.error, O = console.group, L = console.groupCollapsed, K = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        V++;
      }
    }
    function de() {
      {
        if (V--, V === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, k, {
              value: R
            }),
            info: F({}, k, {
              value: D
            }),
            warn: F({}, k, {
              value: H
            }),
            error: F({}, k, {
              value: U
            }),
            group: F({}, k, {
              value: O
            }),
            groupCollapsed: F({}, k, {
              value: L
            }),
            groupEnd: F({}, k, {
              value: K
            })
          });
        }
        V < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = y.ReactCurrentDispatcher, j;
    function ee(k, W, Q) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (ve) {
            var le = ve.stack.trim().match(/\n( *(at )?)/);
            j = le && le[1] || "";
          }
        return `
` + j + k;
      }
    }
    var ce = !1, $e;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      $e = new oe();
    }
    function et(k, W) {
      if (!k || ce)
        return "";
      {
        var Q = $e.get(k);
        if (Q !== void 0)
          return Q;
      }
      var le;
      ce = !0;
      var ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ce;
      Ce = Ee.current, Ee.current = null, ae();
      try {
        if (W) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (_t) {
              le = _t;
            }
            Reflect.construct(k, [], me);
          } else {
            try {
              me.call();
            } catch (_t) {
              le = _t;
            }
            k.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            le = _t;
          }
          k();
        }
      } catch (_t) {
        if (_t && le && typeof _t.stack == "string") {
          for (var fe = _t.stack.split(`
`), tt = le.stack.split(`
`), Ne = fe.length - 1, ze = tt.length - 1; Ne >= 1 && ze >= 0 && fe[Ne] !== tt[ze]; )
            ze--;
          for (; Ne >= 1 && ze >= 0; Ne--, ze--)
            if (fe[Ne] !== tt[ze]) {
              if (Ne !== 1 || ze !== 1)
                do
                  if (Ne--, ze--, ze < 0 || fe[Ne] !== tt[ze]) {
                    var pt = `
` + fe[Ne].replace(" at new ", " at ");
                    return k.displayName && pt.includes("<anonymous>") && (pt = pt.replace("<anonymous>", k.displayName)), typeof k == "function" && $e.set(k, pt), pt;
                  }
                while (Ne >= 1 && ze >= 0);
              break;
            }
        }
      } finally {
        ce = !1, Ee.current = Ce, de(), Error.prepareStackTrace = ve;
      }
      var Wr = k ? k.displayName || k.name : "", Mu = Wr ? ee(Wr) : "";
      return typeof k == "function" && $e.set(k, Mu), Mu;
    }
    function lr(k, W, Q) {
      return et(k, !1);
    }
    function Dr(k) {
      var W = k.prototype;
      return !!(W && W.isReactComponent);
    }
    function jt(k, W, Q) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return et(k, Dr(k));
      if (typeof k == "string")
        return ee(k);
      switch (k) {
        case s:
          return ee("Suspense");
        case d:
          return ee("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case u:
            return lr(k.render);
          case c:
            return jt(k.type, W, Q);
          case f: {
            var le = k, ve = le._payload, Ce = le._init;
            try {
              return jt(Ce(ve), W, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var Mt = Object.prototype.hasOwnProperty, jr = {}, _r = y.ReactDebugCurrentFrame;
    function ue(k) {
      if (k) {
        var W = k._owner, Q = jt(k.type, k._source, W ? W.type : null);
        _r.setExtraStackFrame(Q);
      } else
        _r.setExtraStackFrame(null);
    }
    function De(k, W, Q, le, ve) {
      {
        var Ce = Function.call.bind(Mt);
        for (var me in k)
          if (Ce(k, me)) {
            var fe = void 0;
            try {
              if (typeof k[me] != "function") {
                var tt = Error((le || "React class") + ": " + Q + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw tt.name = "Invariant Violation", tt;
              }
              fe = k[me](W, me, le, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ne) {
              fe = Ne;
            }
            fe && !(fe instanceof Error) && (ue(ve), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", Q, me, typeof fe), ue(null)), fe instanceof Error && !(fe.message in jr) && (jr[fe.message] = !0, ue(ve), $("Failed %s type: %s", Q, fe.message), ue(null));
          }
      }
    }
    var Ie = Array.isArray;
    function vn(k) {
      return Ie(k);
    }
    function Ca(k) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, Q = W && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return Q;
      }
    }
    function Ea(k) {
      try {
        return Hr(k), !1;
      } catch {
        return !0;
      }
    }
    function Hr(k) {
      return "" + k;
    }
    function It(k) {
      if (Ea(k))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ca(k)), Hr(k);
    }
    var or = y.ReactCurrentOwner, Pa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wa, Sa, Ye;
    Ye = {};
    function gn(k) {
      if (Mt.call(k, "ref")) {
        var W = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Bg(k) {
      if (Mt.call(k, "key")) {
        var W = Object.getOwnPropertyDescriptor(k, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function kg(k, W) {
      if (typeof k.ref == "string" && or.current && W && or.current.stateNode !== W) {
        var Q = S(or.current.type);
        Ye[Q] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(or.current.type), k.ref), Ye[Q] = !0);
      }
    }
    function Fg(k, W) {
      {
        var Q = function() {
          wa || (wa = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        Q.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function Ag(k, W) {
      {
        var Q = function() {
          Sa || (Sa = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        Q.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var Tg = function(k, W, Q, le, ve, Ce, me) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: k,
        key: W,
        ref: Q,
        props: me,
        // Record the component responsible for creating this element.
        _owner: Ce
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function Rg(k, W, Q, le, ve) {
      {
        var Ce, me = {}, fe = null, tt = null;
        Q !== void 0 && (It(Q), fe = "" + Q), Bg(W) && (It(W.key), fe = "" + W.key), gn(W) && (tt = W.ref, kg(W, ve));
        for (Ce in W)
          Mt.call(W, Ce) && !Pa.hasOwnProperty(Ce) && (me[Ce] = W[Ce]);
        if (k && k.defaultProps) {
          var Ne = k.defaultProps;
          for (Ce in Ne)
            me[Ce] === void 0 && (me[Ce] = Ne[Ce]);
        }
        if (fe || tt) {
          var ze = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          fe && Fg(me, ze), tt && Ag(me, ze);
        }
        return Tg(k, fe, tt, ve, le, or.current, me);
      }
    }
    var Ji = y.ReactCurrentOwner, Bu = y.ReactDebugCurrentFrame;
    function Ur(k) {
      if (k) {
        var W = k._owner, Q = jt(k.type, k._source, W ? W.type : null);
        Bu.setExtraStackFrame(Q);
      } else
        Bu.setExtraStackFrame(null);
    }
    var Xi;
    Xi = !1;
    function Qi(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function ku() {
      {
        if (Ji.current) {
          var k = S(Ji.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Mg(k) {
      {
        if (k !== void 0) {
          var W = k.fileName.replace(/^.*[\\\/]/, ""), Q = k.lineNumber;
          return `

Check your code at ` + W + ":" + Q + ".";
        }
        return "";
      }
    }
    var Fu = {};
    function Ig(k) {
      {
        var W = ku();
        if (!W) {
          var Q = typeof k == "string" ? k : k.displayName || k.name;
          Q && (W = `

Check the top-level render call using <` + Q + ">.");
        }
        return W;
      }
    }
    function Au(k, W) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var Q = Ig(W);
        if (Fu[Q])
          return;
        Fu[Q] = !0;
        var le = "";
        k && k._owner && k._owner !== Ji.current && (le = " It was passed a child from " + S(k._owner.type) + "."), Ur(k), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, le), Ur(null);
      }
    }
    function Tu(k, W) {
      {
        if (typeof k != "object")
          return;
        if (vn(k))
          for (var Q = 0; Q < k.length; Q++) {
            var le = k[Q];
            Qi(le) && Au(le, W);
          }
        else if (Qi(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var ve = h(k);
          if (typeof ve == "function" && ve !== k.entries)
            for (var Ce = ve.call(k), me; !(me = Ce.next()).done; )
              Qi(me.value) && Au(me.value, W);
        }
      }
    }
    function Ng(k) {
      {
        var W = k.type;
        if (W == null || typeof W == "string")
          return;
        var Q;
        if (typeof W == "function")
          Q = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === c))
          Q = W.propTypes;
        else
          return;
        if (Q) {
          var le = S(W);
          De(Q, k.props, "prop", le, k);
        } else if (W.PropTypes !== void 0 && !Xi) {
          Xi = !0;
          var ve = S(W);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kg(k) {
      {
        for (var W = Object.keys(k.props), Q = 0; Q < W.length; Q++) {
          var le = W[Q];
          if (le !== "children" && le !== "key") {
            Ur(k), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), Ur(null);
            break;
          }
        }
        k.ref !== null && (Ur(k), $("Invalid attribute `ref` supplied to `React.Fragment`."), Ur(null));
      }
    }
    function Ru(k, W, Q, le, ve, Ce) {
      {
        var me = T(k);
        if (!me) {
          var fe = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var tt = Mg(ve);
          tt ? fe += tt : fe += ku();
          var Ne;
          k === null ? Ne = "null" : vn(k) ? Ne = "array" : k !== void 0 && k.$$typeof === t ? (Ne = "<" + (S(k.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Ne = typeof k, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ne, fe);
        }
        var ze = Rg(k, W, Q, ve, Ce);
        if (ze == null)
          return ze;
        if (me) {
          var pt = W.children;
          if (pt !== void 0)
            if (le)
              if (vn(pt)) {
                for (var Wr = 0; Wr < pt.length; Wr++)
                  Tu(pt[Wr], k);
                Object.freeze && Object.freeze(pt);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tu(pt, k);
        }
        return k === n ? Kg(ze) : Ng(ze), ze;
      }
    }
    function zg(k, W, Q) {
      return Ru(k, W, Q, !0);
    }
    function Vg(k, W, Q) {
      return Ru(k, W, Q, !1);
    }
    var Lg = Vg, Og = zg;
    yn.Fragment = n, yn.jsx = Lg, yn.jsxs = Og;
  }()), yn;
}
process.env.NODE_ENV === "production" ? Bl.exports = Hg() : Bl.exports = Ug();
var P = Bl.exports, Wg = {
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
const Gg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), dt = (e, t) => {
  const r = J(
    ({ color: n = "currentColor", size: a = 24, strokeWidth: i = 2, absoluteStrokeWidth: l, children: o, ...u }, s) => Iu(
      "svg",
      {
        ref: s,
        ...Wg,
        width: a,
        height: a,
        stroke: n,
        strokeWidth: l ? Number(i) * 24 / Number(a) : i,
        className: `lucide lucide-${Gg(e)}`,
        ...u
      },
      [
        ...t.map(([d, c]) => Iu(d, c)),
        ...(Array.isArray(o) ? o : [o]) || []
      ]
    )
  );
  return r.displayName = `${e}`, r;
}, Zg = dt("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]), qg = dt("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Yg = dt("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]), fd = dt("Calendar", [
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
]), vo = dt("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), go = dt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), zu = dt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), kl = dt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Jg = dt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), Xg = dt("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), Qg = dt("Minus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }]
]), e$ = dt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), pd = dt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function We(e, t, r) {
  let [n, a] = Y(e || t), i = N(e !== void 0), l = e !== void 0;
  te(() => {
    let s = i.current;
    s !== l && console.warn(`WARN: A component changed from ${s ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), i.current = l;
  }, [
    l
  ]);
  let o = l ? e : n, u = re((s, ...d) => {
    let c = (f, ...p) => {
      r && (Object.is(o, f) || r(f, ...p)), l || (o = f);
    };
    typeof s == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a((p, ...b) => {
      let m = s(l ? o : p, ...b);
      return c(m, ...d), l ? p : m;
    })) : (l || a(s), c(s, ...d));
  }, [
    l,
    o,
    r
  ]);
  return [
    o,
    u
  ];
}
function $t(e, t = -1 / 0, r = 1 / 0) {
  return Math.min(Math.max(e, t), r);
}
function lt(e, t, r, n) {
  t = Number(t), r = Number(r);
  let a = (e - (isNaN(t) ? 0 : t)) % n, i = Math.abs(a) * 2 >= n ? e + Math.sign(a) * (n - Math.abs(a)) : e - a;
  isNaN(t) ? !isNaN(r) && i > r && (i = Math.floor(r / n) * n) : i < t ? i = t : !isNaN(r) && i > r && (i = t + Math.floor((r - t) / n) * n);
  let l = n.toString(), o = l.indexOf("."), u = o >= 0 ? l.length - o : 0;
  if (u > 0) {
    let s = Math.pow(10, u);
    i = Math.round(i * s) / s;
  }
  return i;
}
const Ga = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, bd = /* @__PURE__ */ g.createContext(Ga), t$ = /* @__PURE__ */ g.createContext(!1);
let r$ = !!(typeof window < "u" && window.document && window.document.createElement), el = /* @__PURE__ */ new WeakMap();
function n$(e = !1) {
  let t = G(bd), r = N(null);
  if (r.current === null && !e) {
    var n, a;
    let i = (a = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (n = a.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (i) {
      let l = el.get(i);
      l == null ? el.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== l.state && (t.current = l.id, el.delete(i));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function a$(e) {
  let t = G(bd);
  t === Ga && !r$ && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = n$(!!e), n = t === Ga && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function i$(e) {
  let t = g.useId(), [r] = Y(zt()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Ga.prefix}`;
  return e || `${n}-${t}`;
}
const l$ = typeof g.useId == "function" ? i$ : a$;
function o$() {
  return !1;
}
function u$() {
  return !0;
}
function s$(e) {
  return () => {
  };
}
function zt() {
  return typeof g.useSyncExternalStore == "function" ? g.useSyncExternalStore(s$, o$, u$) : G(t$);
}
function md(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (r = md(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function d$() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
    (e = arguments[r]) && (t = md(e)) && (n && (n += " "), n += t);
  return n;
}
const ge = typeof document < "u" ? g.useLayoutEffect : () => {
};
function Be(e) {
  const t = N(null);
  return ge(() => {
    t.current = e;
  }, [
    e
  ]), re((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function c$(e) {
  let [t, r] = Y(e), n = N(null), a = Be(() => {
    if (!n.current)
      return;
    let l = n.current.next();
    if (l.done) {
      n.current = null;
      return;
    }
    t === l.value ? a() : r(l.value);
  });
  ge(() => {
    n.current && a();
  });
  let i = Be((l) => {
    n.current = l(t), a();
  });
  return [
    t,
    i
  ];
}
let f$ = !!(typeof window < "u" && window.document && window.document.createElement), Za = /* @__PURE__ */ new Map();
function ye(e) {
  let [t, r] = Y(e), n = N(null), a = l$(t), i = re((l) => {
    n.current = l;
  }, []);
  return f$ && Za.set(a, i), ge(() => {
    let l = a;
    return () => {
      Za.delete(l);
    };
  }, [
    a
  ]), te(() => {
    let l = n.current;
    l && (n.current = null, r(l));
  }), a;
}
function p$(e, t) {
  if (e === t)
    return e;
  let r = Za.get(e);
  if (r)
    return r(t), t;
  let n = Za.get(t);
  return n ? (n(e), e) : t;
}
function Kt(e = []) {
  let t = ye(), [r, n] = c$(t), a = re(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return ge(a, [
    t,
    a,
    ...e
  ]), r;
}
function Bt(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
const we = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, gt = (e) => e && "window" in e && e.window === e ? e : we(e).defaultView || window;
function _(...e) {
  let t = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let a in n) {
      let i = t[a], l = n[a];
      typeof i == "function" && typeof l == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = Bt(i, l) : (a === "className" || a === "UNSAFE_className") && typeof i == "string" && typeof l == "string" ? t[a] = d$(i, l) : a === "id" && i && l ? t.id = p$(i, l) : t[a] = l !== void 0 ? l : i;
    }
  }
  return t;
}
function $i(...e) {
  return e.length === 1 ? e[0] : (t) => {
    for (let r of e)
      typeof r == "function" ? r(t) : r != null && (r.current = t);
  };
}
const b$ = /* @__PURE__ */ new Set([
  "id"
]), m$ = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), h$ = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), v$ = /^(data-.*)$/;
function X(e, t = {}) {
  let { labelable: r, isLink: n, propNames: a } = t, i = {};
  for (const l in e)
    Object.prototype.hasOwnProperty.call(e, l) && (b$.has(l) || r && m$.has(l) || n && h$.has(l) || a != null && a.has(l) || v$.test(l)) && (i[l] = e[l]);
  return i;
}
function St(e) {
  if (g$())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = $$(e);
    e.focus(), y$(t);
  }
}
let Ba = null;
function g$() {
  if (Ba == null) {
    Ba = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ba = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ba;
}
function $$(e) {
  let t = e.parentNode, r = [], n = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== n; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return n instanceof HTMLElement && r.push({
    element: n,
    scrollTop: n.scrollTop,
    scrollLeft: n.scrollLeft
  }), r;
}
function y$(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function yi(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function $o(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Qt() {
  return $o(/^Mac/i);
}
function hd() {
  return $o(/^iPhone/i);
}
function vd() {
  return $o(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Qt() && navigator.maxTouchPoints > 1;
}
function fn() {
  return hd() || vd();
}
function Oa() {
  return Qt() || fn();
}
function yo() {
  return yi(/AppleWebKit/i) && !x$();
}
function x$() {
  return yi(/Chrome/i);
}
function zn() {
  return yi(/Android/i);
}
function D$() {
  return yi(/Firefox/i);
}
const C$ = /* @__PURE__ */ Z({
  isNative: !0,
  open: w$
});
function ea() {
  return G(C$);
}
function E$(e, t) {
  let r = e.getAttribute("target");
  return (!r || r === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function Fr(e, t, r = !0) {
  var n, a;
  let { metaKey: i, ctrlKey: l, altKey: o, shiftKey: u } = t;
  D$() && (!((a = window.event) === null || a === void 0 || (n = a.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (Qt() ? i = !0 : l = !0);
  let s = yo() && Qt() && !vd() ? new KeyboardEvent("keydown", {
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
  Fr.isOpening = r, St(e), e.dispatchEvent(s), Fr.isOpening = !1;
}
Fr.isOpening = !1;
function P$(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let r = document.createElement("a");
    r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r);
  }
}
function w$(e, t) {
  P$(e, (r) => Fr(r, t));
}
function xo(e) {
  return {
    "data-href": e.href,
    "data-target": e.target,
    "data-rel": e.rel,
    "data-download": e.download,
    "data-ping": e.ping,
    "data-referrer-policy": e.referrerPolicy
  };
}
let Yr = /* @__PURE__ */ new Map(), Fl = /* @__PURE__ */ new Set();
function Vu() {
  if (typeof window > "u")
    return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target)
      return;
    let a = Yr.get(n.target);
    a || (a = /* @__PURE__ */ new Set(), Yr.set(n.target, a), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), a.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target)
      return;
    let a = Yr.get(n.target);
    if (a && (a.delete(n.propertyName), a.size === 0 && (n.target.removeEventListener("transitioncancel", r), Yr.delete(n.target)), Yr.size === 0)) {
      for (let i of Fl)
        i();
      Fl.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? Vu() : document.addEventListener("DOMContentLoaded", Vu));
function gd(e) {
  requestAnimationFrame(() => {
    Yr.size === 0 ? e() : Fl.add(e);
  });
}
function pn() {
  let e = N(/* @__PURE__ */ new Map()), t = re((a, i, l, o) => {
    let u = o != null && o.once ? (...s) => {
      e.current.delete(l), l(...s);
    } : l;
    e.current.set(l, {
      type: i,
      eventTarget: a,
      fn: u,
      options: o
    }), a.addEventListener(i, l, o);
  }, []), r = re((a, i, l, o) => {
    var u;
    let s = ((u = e.current.get(l)) === null || u === void 0 ? void 0 : u.fn) || l;
    a.removeEventListener(i, s, o), e.current.delete(l);
  }, []), n = re(() => {
    e.current.forEach((a, i) => {
      r(a.eventTarget, a.type, i, a.options);
    });
  }, [
    r
  ]);
  return te(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
function er(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": a } = e;
  return r = ye(r), a && n ? a = [
    .../* @__PURE__ */ new Set([
      r,
      ...a.trim().split(/\s+/)
    ])
  ].join(" ") : a && (a = a.trim().split(/\s+/).join(" ")), !n && !a && t && (n = t), {
    id: r,
    "aria-label": n,
    "aria-labelledby": a
  };
}
function je(e) {
  const t = N(null);
  return z(() => ({
    get current() {
      return t.current;
    },
    set current(r) {
      t.current = r, typeof e == "function" ? e(r) : e && (e.current = r);
    }
  }), [
    e
  ]);
}
function qa(e, t) {
  const r = N(!0), n = N(null);
  te(() => (r.current = !0, () => {
    r.current = !1;
  }), []), te(() => {
    r.current ? r.current = !1 : (!n.current || t.some((a, i) => !Object.is(a, n[i]))) && e(), n.current = t;
  }, t);
}
function S$() {
  return typeof window.ResizeObserver < "u";
}
function ta(e) {
  const { ref: t, onResize: r } = e;
  te(() => {
    let n = t == null ? void 0 : t.current;
    if (n)
      if (S$()) {
        const a = new window.ResizeObserver((i) => {
          i.length && r();
        });
        return a.observe(n), () => {
          n && a.unobserve(n);
        };
      } else
        return window.addEventListener("resize", r, !1), () => {
          window.removeEventListener("resize", r, !1);
        };
  }, [
    r,
    t
  ]);
}
function $d(e, t) {
  ge(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Ge(e, t) {
  let r = e;
  for (Ya(r, t) && (r = r.parentElement); r && !Ya(r, t); )
    r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
function Ya(e, t) {
  let r = window.getComputedStyle(e), n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n;
}
let mt = typeof document < "u" && window.visualViewport;
function B$() {
  let e = zt(), [t, r] = Y(() => e ? {
    width: 0,
    height: 0
  } : Lu());
  return te(() => {
    let n = () => {
      r((a) => {
        let i = Lu();
        return i.width === a.width && i.height === a.height ? a : i;
      });
    };
    return mt ? mt.addEventListener("resize", n) : window.addEventListener("resize", n), () => {
      mt ? mt.removeEventListener("resize", n) : window.removeEventListener("resize", n);
    };
  }, []), t;
}
function Lu() {
  return {
    width: mt && (mt == null ? void 0 : mt.width) || window.innerWidth,
    height: mt && (mt == null ? void 0 : mt.height) || window.innerHeight
  };
}
let k$ = 0;
const tl = /* @__PURE__ */ new Map();
function Vt(e) {
  let [t, r] = Y();
  return ge(() => {
    if (!e)
      return;
    let n = tl.get(e);
    if (n)
      r(n.element.id);
    else {
      let a = `react-aria-description-${k$++}`;
      r(a);
      let i = document.createElement("div");
      i.id = a, i.style.display = "none", i.textContent = e, document.body.appendChild(i), n = {
        refCount: 0,
        element: i
      }, tl.set(e, n);
    }
    return n.refCount++, () => {
      n && --n.refCount === 0 && (n.element.remove(), tl.delete(e));
    };
  }, [
    e
  ]), {
    "aria-describedby": e ? t : void 0
  };
}
function pr(e, t, r, n) {
  let a = Be(r), i = r == null;
  te(() => {
    if (i || !e.current)
      return;
    let l = e.current;
    return l.addEventListener(t, a, n), () => {
      l.removeEventListener(t, a, n);
    };
  }, [
    e,
    t,
    n,
    i,
    a
  ]);
}
function yd(e, t) {
  let r = Ou(e, t, "left"), n = Ou(e, t, "top"), a = t.offsetWidth, i = t.offsetHeight, l = e.scrollLeft, o = e.scrollTop, { borderTopWidth: u, borderLeftWidth: s } = getComputedStyle(e), d = e.scrollLeft + parseInt(s, 10), c = e.scrollTop + parseInt(u, 10), f = d + e.clientWidth, p = c + e.clientHeight;
  r <= l ? l = r - parseInt(s, 10) : r + a > f && (l += r + a - f), n <= c ? o = n - parseInt(u, 10) : n + i > p && (o += n + i - p), e.scrollLeft = l, e.scrollTop = o;
}
function Ou(e, t, r) {
  const n = r === "left" ? "offsetLeft" : "offsetTop";
  let a = 0;
  for (; t.offsetParent && (a += t[n], t.offsetParent !== e); ) {
    if (t.offsetParent.contains(e)) {
      a -= e[n];
      break;
    }
    t = t.offsetParent;
  }
  return a;
}
function Xe(e, t) {
  if (document.contains(e)) {
    let l = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(l).overflow === "hidden") {
      let u = Ge(e);
      for (; e && u && e !== l && u !== l; )
        yd(u, e), e = u, u = Ge(e);
    } else {
      var r;
      let { left: u, top: s } = e.getBoundingClientRect();
      e == null || (r = e.scrollIntoView) === null || r === void 0 || r.call(e, {
        block: "nearest"
      });
      let { left: d, top: c } = e.getBoundingClientRect();
      if (Math.abs(u - d) > 1 || Math.abs(s - c) > 1) {
        var n, a, i;
        t == null || (a = t.containingElement) === null || a === void 0 || (n = a.scrollIntoView) === null || n === void 0 || n.call(a, {
          block: "center",
          inline: "center"
        }), (i = e.scrollIntoView) === null || i === void 0 || i.call(e, {
          block: "nearest"
        });
      }
    }
  }
}
function Al(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : zn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function F$(e) {
  return !zn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function xd(e, t) {
  let r = N(null);
  return e && r.current && t(e, r.current) && (e = r.current), r.current = e, e;
}
function Ir(e, t, r) {
  let n = N(t), a = Be(() => {
    r && r(n.current);
  });
  te(() => {
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
function A$(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Dd(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function T$(e, t) {
  var r = Dd(e, t, "get");
  return A$(e, r);
}
function R$(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ra(e, t, r) {
  R$(e, t), t.set(e, r);
}
function M$(e, t, r) {
  if (t.set)
    t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function ju(e, t, r) {
  var n = Dd(e, t, "set");
  return M$(e, n, r), r;
}
let Qr = "default", Tl = "", ja = /* @__PURE__ */ new WeakMap();
function Rl(e) {
  if (fn()) {
    if (Qr === "default") {
      const t = we(e);
      Tl = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Qr = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && (ja.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function Fn(e) {
  if (fn()) {
    if (Qr !== "disabled")
      return;
    Qr = "restoring", setTimeout(() => {
      gd(() => {
        if (Qr === "restoring") {
          const t = we(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = Tl || ""), Tl = "", Qr = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ja.has(e)) {
    let t = ja.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), ja.delete(e);
  }
}
const Do = g.createContext({
  register: () => {
  }
});
Do.displayName = "PressResponderContext";
function I$(e) {
  let t = G(Do);
  if (t) {
    let { register: r, ...n } = t;
    e = _(n, e), r();
  }
  return $d(t, e.ref), e;
}
var ka = /* @__PURE__ */ new WeakMap();
class Fa {
  continuePropagation() {
    ju(this, ka, !1);
  }
  get shouldStopPropagation() {
    return T$(this, ka);
  }
  constructor(t, r, n) {
    ra(this, ka, {
      writable: !0,
      value: void 0
    }), ju(this, ka, !0), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey;
  }
}
const _u = Symbol("linkClicked");
function st(e) {
  let {
    onPress: t,
    onPressChange: r,
    onPressStart: n,
    onPressEnd: a,
    onPressUp: i,
    isDisabled: l,
    isPressed: o,
    preventFocusOnPress: u,
    shouldCancelOnPointerExit: s,
    allowTextSelectionOnPress: d,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: c,
    ...f
  } = I$(e), [p, b] = Y(!1), m = N({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: h, removeAllGlobalListeners: y } = pn(), $ = Be((v, I) => {
    let T = m.current;
    if (l || T.didFirePressStart)
      return !1;
    let E = !0;
    if (T.isTriggeringEvent = !0, n) {
      let B = new Fa("pressstart", I, v);
      n(B), E = B.shouldStopPropagation;
    }
    return r && r(!0), T.isTriggeringEvent = !1, T.didFirePressStart = !0, b(!0), E;
  }), x = Be((v, I, T = !0) => {
    let E = m.current;
    if (!E.didFirePressStart)
      return !1;
    E.ignoreClickAfterPress = !0, E.didFirePressStart = !1, E.isTriggeringEvent = !0;
    let B = !0;
    if (a) {
      let S = new Fa("pressend", I, v);
      a(S), B = S.shouldStopPropagation;
    }
    if (r && r(!1), b(!1), t && T && !l) {
      let S = new Fa("press", I, v);
      t(S), B && (B = S.shouldStopPropagation);
    }
    return E.isTriggeringEvent = !1, B;
  }), C = Be((v, I) => {
    let T = m.current;
    if (l)
      return !1;
    if (i) {
      T.isTriggeringEvent = !0;
      let E = new Fa("pressup", I, v);
      return i(E), T.isTriggeringEvent = !1, E.shouldStopPropagation;
    }
    return !0;
  }), w = Be((v) => {
    let I = m.current;
    I.isPressed && I.target && (I.isOverTarget && I.pointerType != null && x(Ht(I.target, v), I.pointerType, !1), I.isPressed = !1, I.isOverTarget = !1, I.activePointerId = null, I.pointerType = null, y(), d || Fn(I.target));
  }), A = Be((v) => {
    s && w(v);
  }), M = z(() => {
    let v = m.current, I = {
      onKeyDown(E) {
        if (rl(E.nativeEvent, E.currentTarget) && E.currentTarget.contains(E.target)) {
          var B;
          Uu(E.target, E.key) && E.preventDefault();
          let S = !0;
          if (!v.isPressed && !E.repeat) {
            v.target = E.currentTarget, v.isPressed = !0, S = $(E, "keyboard");
            let F = E.currentTarget, V = (R) => {
              rl(R, F) && !R.repeat && F.contains(R.target) && v.target && C(Ht(v.target, R), "keyboard");
            };
            h(we(E.currentTarget), "keyup", Bt(V, T), !0);
          }
          S && E.stopPropagation(), E.metaKey && Qt() && ((B = v.metaKeyEvents) === null || B === void 0 || B.set(E.key, E.nativeEvent));
        } else
          E.key === "Meta" && (v.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(E) {
        if (!(E && !E.currentTarget.contains(E.target)) && E && E.button === 0 && !v.isTriggeringEvent && !Fr.isOpening) {
          let B = !0;
          if (l && E.preventDefault(), !v.ignoreClickAfterPress && !v.ignoreEmulatedMouseEvents && !v.isPressed && (v.pointerType === "virtual" || Al(E.nativeEvent))) {
            !l && !u && St(E.currentTarget);
            let S = $(E, "virtual"), F = C(E, "virtual"), V = x(E, "virtual");
            B = S && F && V;
          }
          v.ignoreEmulatedMouseEvents = !1, v.ignoreClickAfterPress = !1, B && E.stopPropagation();
        }
      }
    }, T = (E) => {
      var B;
      if (v.isPressed && v.target && rl(E, v.target)) {
        var S;
        Uu(E.target, E.key) && E.preventDefault();
        let V = E.target;
        x(Ht(v.target, E), "keyboard", v.target.contains(V)), y(), E.key !== "Enter" && Co(v.target) && v.target.contains(V) && !E[_u] && (E[_u] = !0, Fr(v.target, E, !1)), v.isPressed = !1, (S = v.metaKeyEvents) === null || S === void 0 || S.delete(E.key);
      } else if (E.key === "Meta" && (!((B = v.metaKeyEvents) === null || B === void 0) && B.size)) {
        var F;
        let V = v.metaKeyEvents;
        v.metaKeyEvents = void 0;
        for (let R of V.values())
          (F = v.target) === null || F === void 0 || F.dispatchEvent(new KeyboardEvent("keyup", R));
      }
    };
    if (typeof PointerEvent < "u") {
      I.onPointerDown = (F) => {
        if (F.button !== 0 || !F.currentTarget.contains(F.target))
          return;
        if (F$(F.nativeEvent)) {
          v.pointerType = "virtual";
          return;
        }
        nl(F.currentTarget) && F.preventDefault(), v.pointerType = F.pointerType;
        let V = !0;
        v.isPressed || (v.isPressed = !0, v.isOverTarget = !0, v.activePointerId = F.pointerId, v.target = F.currentTarget, !l && !u && St(F.currentTarget), d || Rl(v.target), V = $(F, v.pointerType), h(we(F.currentTarget), "pointermove", E, !1), h(we(F.currentTarget), "pointerup", B, !1), h(we(F.currentTarget), "pointercancel", S, !1)), V && F.stopPropagation();
      }, I.onMouseDown = (F) => {
        F.currentTarget.contains(F.target) && F.button === 0 && (nl(F.currentTarget) && F.preventDefault(), F.stopPropagation());
      }, I.onPointerUp = (F) => {
        !F.currentTarget.contains(F.target) || v.pointerType === "virtual" || F.button === 0 && Gr(F, F.currentTarget) && C(F, v.pointerType || F.pointerType);
      };
      let E = (F) => {
        F.pointerId === v.activePointerId && (v.target && Gr(F, v.target) ? !v.isOverTarget && v.pointerType != null && (v.isOverTarget = !0, $(Ht(v.target, F), v.pointerType)) : v.target && v.isOverTarget && v.pointerType != null && (v.isOverTarget = !1, x(Ht(v.target, F), v.pointerType, !1), A(F)));
      }, B = (F) => {
        F.pointerId === v.activePointerId && v.isPressed && F.button === 0 && v.target && (Gr(F, v.target) && v.pointerType != null ? x(Ht(v.target, F), v.pointerType) : v.isOverTarget && v.pointerType != null && x(Ht(v.target, F), v.pointerType, !1), v.isPressed = !1, v.isOverTarget = !1, v.activePointerId = null, v.pointerType = null, y(), d || Fn(v.target));
      }, S = (F) => {
        w(F);
      };
      I.onDragStart = (F) => {
        F.currentTarget.contains(F.target) && w(F);
      };
    } else {
      I.onMouseDown = (S) => {
        if (S.button !== 0 || !S.currentTarget.contains(S.target))
          return;
        if (nl(S.currentTarget) && S.preventDefault(), v.ignoreEmulatedMouseEvents) {
          S.stopPropagation();
          return;
        }
        v.isPressed = !0, v.isOverTarget = !0, v.target = S.currentTarget, v.pointerType = Al(S.nativeEvent) ? "virtual" : "mouse", !l && !u && St(S.currentTarget), $(S, v.pointerType) && S.stopPropagation(), h(we(S.currentTarget), "mouseup", E, !1);
      }, I.onMouseEnter = (S) => {
        if (!S.currentTarget.contains(S.target))
          return;
        let F = !0;
        v.isPressed && !v.ignoreEmulatedMouseEvents && v.pointerType != null && (v.isOverTarget = !0, F = $(S, v.pointerType)), F && S.stopPropagation();
      }, I.onMouseLeave = (S) => {
        if (!S.currentTarget.contains(S.target))
          return;
        let F = !0;
        v.isPressed && !v.ignoreEmulatedMouseEvents && v.pointerType != null && (v.isOverTarget = !1, F = x(S, v.pointerType, !1), A(S)), F && S.stopPropagation();
      }, I.onMouseUp = (S) => {
        S.currentTarget.contains(S.target) && !v.ignoreEmulatedMouseEvents && S.button === 0 && C(S, v.pointerType || "mouse");
      };
      let E = (S) => {
        if (S.button === 0) {
          if (v.isPressed = !1, y(), v.ignoreEmulatedMouseEvents) {
            v.ignoreEmulatedMouseEvents = !1;
            return;
          }
          v.target && Gr(S, v.target) && v.pointerType != null ? x(Ht(v.target, S), v.pointerType) : v.target && v.isOverTarget && v.pointerType != null && x(Ht(v.target, S), v.pointerType, !1), v.isOverTarget = !1;
        }
      };
      I.onTouchStart = (S) => {
        if (!S.currentTarget.contains(S.target))
          return;
        let F = N$(S.nativeEvent);
        if (!F)
          return;
        v.activePointerId = F.identifier, v.ignoreEmulatedMouseEvents = !0, v.isOverTarget = !0, v.isPressed = !0, v.target = S.currentTarget, v.pointerType = "touch", !l && !u && St(S.currentTarget), d || Rl(v.target), $(S, v.pointerType) && S.stopPropagation(), h(gt(S.currentTarget), "scroll", B, !0);
      }, I.onTouchMove = (S) => {
        if (!S.currentTarget.contains(S.target))
          return;
        if (!v.isPressed) {
          S.stopPropagation();
          return;
        }
        let F = Hu(S.nativeEvent, v.activePointerId), V = !0;
        F && Gr(F, S.currentTarget) ? !v.isOverTarget && v.pointerType != null && (v.isOverTarget = !0, V = $(S, v.pointerType)) : v.isOverTarget && v.pointerType != null && (v.isOverTarget = !1, V = x(S, v.pointerType, !1), A(S)), V && S.stopPropagation();
      }, I.onTouchEnd = (S) => {
        if (!S.currentTarget.contains(S.target))
          return;
        if (!v.isPressed) {
          S.stopPropagation();
          return;
        }
        let F = Hu(S.nativeEvent, v.activePointerId), V = !0;
        F && Gr(F, S.currentTarget) && v.pointerType != null ? (C(S, v.pointerType), V = x(S, v.pointerType)) : v.isOverTarget && v.pointerType != null && (V = x(S, v.pointerType, !1)), V && S.stopPropagation(), v.isPressed = !1, v.activePointerId = null, v.isOverTarget = !1, v.ignoreEmulatedMouseEvents = !0, v.target && !d && Fn(v.target), y();
      }, I.onTouchCancel = (S) => {
        S.currentTarget.contains(S.target) && (S.stopPropagation(), v.isPressed && w(S));
      };
      let B = (S) => {
        v.isPressed && S.target.contains(v.target) && w({
          currentTarget: v.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      I.onDragStart = (S) => {
        S.currentTarget.contains(S.target) && w(S);
      };
    }
    return I;
  }, [
    h,
    l,
    u,
    y,
    d,
    w,
    A,
    x,
    $,
    C
  ]);
  return te(() => () => {
    var v;
    d || Fn((v = m.current.target) !== null && v !== void 0 ? v : void 0);
  }, [
    d
  ]), {
    isPressed: o || p,
    pressProps: _(f, M)
  };
}
function Co(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function rl(e, t) {
  const { key: r, code: n } = e, a = t, i = a.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(a instanceof gt(a).HTMLInputElement && !Cd(a, r) || a instanceof gt(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Co(a)) && r !== "Enter");
}
function N$(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Hu(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.identifier === t)
      return a;
  }
  return null;
}
function Ht(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  };
}
function K$(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function z$(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Gr(e, t) {
  let r = t.getBoundingClientRect(), n = K$(e);
  return z$(r, n);
}
function nl(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function Uu(e, t) {
  return e instanceof HTMLInputElement ? !Cd(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Co(e);
}
const V$ = /* @__PURE__ */ new Set([
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
function Cd(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : V$.has(e.type);
}
function L$({ children: e }) {
  let t = z(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ g.createElement(Do.Provider, {
    value: t
  }, e);
}
class O$ {
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
  constructor(t, r) {
    this.nativeEvent = r, this.target = r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget, this.bubbles = r.bubbles, this.cancelable = r.cancelable, this.defaultPrevented = r.defaultPrevented, this.eventPhase = r.eventPhase, this.isTrusted = r.isTrusted, this.timeStamp = r.timeStamp, this.type = t;
  }
}
function Ed(e) {
  let t = N({
    isFocused: !1,
    observer: null
  });
  ge(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = Be((n) => {
    e == null || e(n);
  });
  return re((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = n.target, i = (l) => {
        t.current.isFocused = !1, a.disabled && r(new O$("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
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
    r
  ]);
}
function xi(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: a } = e;
  const i = re((u) => {
    if (u.target === u.currentTarget)
      return n && n(u), a && a(!1), !0;
  }, [
    n,
    a
  ]), l = Ed(i), o = re((u) => {
    u.target === u.currentTarget && document.activeElement === u.target && (r && r(u), a && a(!0), l(u));
  }, [
    a,
    r,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || a || n) ? o : void 0,
      onBlur: !t && (n || a) ? i : void 0
    }
  };
}
let tr = null, Vn = /* @__PURE__ */ new Set(), Mn = /* @__PURE__ */ new Map(), Ar = !1, Ml = !1;
const j$ = {
  Tab: !0,
  Escape: !0
};
function Di(e, t) {
  for (let r of Vn)
    r(e, t);
}
function _$(e) {
  return !(e.metaKey || !Qt() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Ja(e) {
  Ar = !0, _$(e) && (tr = "keyboard", Di("keyboard", e));
}
function vt(e) {
  tr = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ar = !0, Di("pointer", e));
}
function Pd(e) {
  Al(e) && (Ar = !0, tr = "virtual");
}
function wd(e) {
  e.target === window || e.target === document || (!Ar && !Ml && (tr = "virtual", Di("virtual", e)), Ar = !1, Ml = !1);
}
function Sd() {
  Ar = !1, Ml = !0;
}
function Xa(e) {
  if (typeof window > "u" || Mn.get(gt(e)))
    return;
  const t = gt(e), r = we(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ar = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", Ja, !0), r.addEventListener("keyup", Ja, !0), r.addEventListener("click", Pd, !0), t.addEventListener("focus", wd, !0), t.addEventListener("blur", Sd, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", vt, !0), r.addEventListener("pointermove", vt, !0), r.addEventListener("pointerup", vt, !0)) : (r.addEventListener("mousedown", vt, !0), r.addEventListener("mousemove", vt, !0), r.addEventListener("mouseup", vt, !0)), t.addEventListener("beforeunload", () => {
    Bd(e);
  }, {
    once: !0
  }), Mn.set(t, {
    focus: n
  });
}
const Bd = (e, t) => {
  const r = gt(e), n = we(e);
  t && n.removeEventListener("DOMContentLoaded", t), Mn.has(r) && (r.HTMLElement.prototype.focus = Mn.get(r).focus, n.removeEventListener("keydown", Ja, !0), n.removeEventListener("keyup", Ja, !0), n.removeEventListener("click", Pd, !0), r.removeEventListener("focus", wd, !0), r.removeEventListener("blur", Sd, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", vt, !0), n.removeEventListener("pointermove", vt, !0), n.removeEventListener("pointerup", vt, !0)) : (n.removeEventListener("mousedown", vt, !0), n.removeEventListener("mousemove", vt, !0), n.removeEventListener("mouseup", vt, !0)), Mn.delete(r));
};
function H$(e) {
  const t = we(e);
  let r;
  return t.readyState !== "loading" ? Xa(e) : (r = () => {
    Xa(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Bd(e, r);
}
typeof document < "u" && H$();
function Tr() {
  return tr !== "pointer";
}
function Qa() {
  return tr;
}
function Eo(e) {
  tr = e, Di(e, null);
}
function na() {
  Xa();
  let [e, t] = Y(tr);
  return te(() => {
    let r = () => {
      t(tr);
    };
    return Vn.add(r), () => {
      Vn.delete(r);
    };
  }, []), zt() ? null : e;
}
const U$ = /* @__PURE__ */ new Set([
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
function W$(e, t, r) {
  var n;
  const a = typeof window < "u" ? gt(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? gt(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? gt(r == null ? void 0 : r.target).HTMLElement : HTMLElement, o = typeof window < "u" ? gt(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || (r == null ? void 0 : r.target) instanceof a && !U$.has(r == null || (n = r.target) === null || n === void 0 ? void 0 : n.type) || (r == null ? void 0 : r.target) instanceof i || (r == null ? void 0 : r.target) instanceof l && (r == null ? void 0 : r.target.isContentEditable), !(e && t === "keyboard" && r instanceof o && !j$[r.key]);
}
function G$(e, t, r) {
  Xa(), te(() => {
    let n = (a, i) => {
      W$(!!(r != null && r.isTextInput), a, i) && e(Tr());
    };
    return Vn.add(n), () => {
      Vn.delete(n);
    };
  }, t);
}
function Ft(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: a } = e, i = N({
    isFocusWithin: !1
  }), l = re((s) => {
    i.current.isFocusWithin && !s.currentTarget.contains(s.relatedTarget) && (i.current.isFocusWithin = !1, r && r(s), a && a(!1));
  }, [
    r,
    a,
    i
  ]), o = Ed(l), u = re((s) => {
    !i.current.isFocusWithin && document.activeElement === s.target && (n && n(s), a && a(!0), i.current.isFocusWithin = !0, o(s));
  }, [
    n,
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
let ei = !1, al = 0;
function Il() {
  ei = !0, setTimeout(() => {
    ei = !1;
  }, 50);
}
function Wu(e) {
  e.pointerType === "touch" && Il();
}
function Z$() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Wu) : document.addEventListener("touchend", Il), al++, () => {
      al--, !(al > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Wu) : document.removeEventListener("touchend", Il));
    };
}
function ke(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: a } = e, [i, l] = Y(!1), o = N({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  te(Z$, []);
  let { hoverProps: u, triggerHoverEnd: s } = z(() => {
    let d = (p, b) => {
      if (o.pointerType = b, a || b === "touch" || o.isHovered || !p.currentTarget.contains(p.target))
        return;
      o.isHovered = !0;
      let m = p.currentTarget;
      o.target = m, t && t({
        type: "hoverstart",
        target: m,
        pointerType: b
      }), r && r(!0), l(!0);
    }, c = (p, b) => {
      if (o.pointerType = "", o.target = null, b === "touch" || !o.isHovered)
        return;
      o.isHovered = !1;
      let m = p.currentTarget;
      n && n({
        type: "hoverend",
        target: m,
        pointerType: b
      }), r && r(!1), l(!1);
    }, f = {};
    return typeof PointerEvent < "u" ? (f.onPointerEnter = (p) => {
      ei && p.pointerType === "mouse" || d(p, p.pointerType);
    }, f.onPointerLeave = (p) => {
      !a && p.currentTarget.contains(p.target) && c(p, p.pointerType);
    }) : (f.onTouchStart = () => {
      o.ignoreEmulatedMouseEvents = !0;
    }, f.onMouseEnter = (p) => {
      !o.ignoreEmulatedMouseEvents && !ei && d(p, "mouse"), o.ignoreEmulatedMouseEvents = !1;
    }, f.onMouseLeave = (p) => {
      !a && p.currentTarget.contains(p.target) && c(p, "mouse");
    }), {
      hoverProps: f,
      triggerHoverEnd: c
    };
  }, [
    t,
    r,
    n,
    a,
    o
  ]);
  return te(() => {
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
function kd(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: a } = e, i = N({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), l = Be((u) => {
    r && Aa(u, t) && (a && a(u), i.current.isPointerDown = !0);
  }), o = Be((u) => {
    r && r(u);
  });
  te(() => {
    let u = i.current;
    if (n)
      return;
    const s = t.current, d = we(s);
    if (typeof PointerEvent < "u") {
      let c = (f) => {
        u.isPointerDown && Aa(f, t) && o(f), u.isPointerDown = !1;
      };
      return d.addEventListener("pointerdown", l, !0), d.addEventListener("pointerup", c, !0), () => {
        d.removeEventListener("pointerdown", l, !0), d.removeEventListener("pointerup", c, !0);
      };
    } else {
      let c = (p) => {
        u.ignoreEmulatedMouseEvents ? u.ignoreEmulatedMouseEvents = !1 : u.isPointerDown && Aa(p, t) && o(p), u.isPointerDown = !1;
      }, f = (p) => {
        u.ignoreEmulatedMouseEvents = !0, u.isPointerDown && Aa(p, t) && o(p), u.isPointerDown = !1;
      };
      return d.addEventListener("mousedown", l, !0), d.addEventListener("mouseup", c, !0), d.addEventListener("touchstart", l, !0), d.addEventListener("touchend", f, !0), () => {
        d.removeEventListener("mousedown", l, !0), d.removeEventListener("mouseup", c, !0), d.removeEventListener("touchstart", l, !0), d.removeEventListener("touchend", f, !0);
      };
    }
  }, [
    t,
    n,
    l,
    o
  ]);
}
function Aa(e, t) {
  if (e.button > 0)
    return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !r.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]"))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
function Gu(e) {
  if (!e)
    return;
  let t = !0;
  return (r) => {
    let n = {
      ...r,
      preventDefault() {
        r.preventDefault();
      },
      isDefaultPrevented() {
        return r.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        t = !1;
      }
    };
    e(n), t && r.stopPropagation();
  };
}
function Ci(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Gu(e.onKeyDown),
      onKeyUp: Gu(e.onKeyUp)
    }
  };
}
function Po(e) {
  let { onMoveStart: t, onMove: r, onMoveEnd: n } = e, a = N({
    didMove: !1,
    lastPosition: null,
    id: null
  }), { addGlobalListener: i, removeGlobalListener: l } = pn(), o = Be((d, c, f, p) => {
    f === 0 && p === 0 || (a.current.didMove || (a.current.didMove = !0, t == null || t({
      type: "movestart",
      pointerType: c,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    })), r == null || r({
      type: "move",
      pointerType: c,
      deltaX: f,
      deltaY: p,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  }), u = Be((d, c) => {
    Fn(), a.current.didMove && (n == null || n({
      type: "moveend",
      pointerType: c,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  });
  return {
    moveProps: z(() => {
      let d = {}, c = () => {
        Rl(), a.current.didMove = !1;
      };
      if (typeof PointerEvent > "u") {
        let p = (y) => {
          if (y.button === 0) {
            var $, x, C, w;
            o(y, "mouse", y.pageX - ((C = ($ = a.current.lastPosition) === null || $ === void 0 ? void 0 : $.pageX) !== null && C !== void 0 ? C : 0), y.pageY - ((w = (x = a.current.lastPosition) === null || x === void 0 ? void 0 : x.pageY) !== null && w !== void 0 ? w : 0)), a.current.lastPosition = {
              pageX: y.pageX,
              pageY: y.pageY
            };
          }
        }, b = (y) => {
          y.button === 0 && (u(y, "mouse"), l(window, "mousemove", p, !1), l(window, "mouseup", b, !1));
        };
        d.onMouseDown = (y) => {
          y.button === 0 && (c(), y.stopPropagation(), y.preventDefault(), a.current.lastPosition = {
            pageX: y.pageX,
            pageY: y.pageY
          }, i(window, "mousemove", p, !1), i(window, "mouseup", b, !1));
        };
        let m = (y) => {
          let $ = [
            ...y.changedTouches
          ].findIndex(({ identifier: M }) => M === a.current.id);
          if ($ >= 0) {
            var x, C;
            let { pageX: M, pageY: v } = y.changedTouches[$];
            var w, A;
            o(y, "touch", M - ((w = (x = a.current.lastPosition) === null || x === void 0 ? void 0 : x.pageX) !== null && w !== void 0 ? w : 0), v - ((A = (C = a.current.lastPosition) === null || C === void 0 ? void 0 : C.pageY) !== null && A !== void 0 ? A : 0)), a.current.lastPosition = {
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
        let p = (m) => {
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
            u(m, h), a.current.id = null, l(window, "pointermove", p, !1), l(window, "pointerup", b, !1), l(window, "pointercancel", b, !1);
          }
        };
        d.onPointerDown = (m) => {
          m.button === 0 && a.current.id == null && (c(), m.stopPropagation(), m.preventDefault(), a.current.lastPosition = {
            pageX: m.pageX,
            pageY: m.pageY
          }, a.current.id = m.pointerId, i(window, "pointermove", p, !1), i(window, "pointerup", b, !1), i(window, "pointercancel", b, !1));
        };
      }
      let f = (p, b, m) => {
        c(), o(p, "keyboard", b, m), u(p, "keyboard");
      };
      return d.onKeyDown = (p) => {
        switch (p.key) {
          case "Left":
          case "ArrowLeft":
            p.preventDefault(), p.stopPropagation(), f(p, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            p.preventDefault(), p.stopPropagation(), f(p, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            p.preventDefault(), p.stopPropagation(), f(p, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            p.preventDefault(), p.stopPropagation(), f(p, 0, 1);
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
function q$(e, t) {
  let { onScroll: r, isDisabled: n } = e, a = re((i) => {
    i.ctrlKey || (i.preventDefault(), i.stopPropagation(), r && r({
      deltaX: i.deltaX,
      deltaY: i.deltaY
    }));
  }, [
    r
  ]);
  pr(t, "wheel", n ? void 0 : a);
}
const Y$ = 500;
function Fd(e) {
  let { isDisabled: t, onLongPressStart: r, onLongPressEnd: n, onLongPress: a, threshold: i = Y$, accessibilityDescription: l } = e;
  const o = N();
  let { addGlobalListener: u, removeGlobalListener: s } = pn(), { pressProps: d } = st({
    isDisabled: t,
    onPressStart(f) {
      if (f.continuePropagation(), (f.pointerType === "mouse" || f.pointerType === "touch") && (r && r({
        ...f,
        type: "longpressstart"
      }), o.current = setTimeout(() => {
        f.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), a && a({
          ...f,
          type: "longpress"
        }), o.current = void 0;
      }, i), f.pointerType === "touch")) {
        let p = (b) => {
          b.preventDefault();
        };
        u(f.target, "contextmenu", p, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            s(f.target, "contextmenu", p);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(f) {
      o.current && clearTimeout(o.current), n && (f.pointerType === "mouse" || f.pointerType === "touch") && n({
        ...f,
        type: "longpressend"
      });
    }
  }), c = Vt(a && !t ? l : void 0);
  return {
    longPressProps: _(d, c)
  };
}
function Fe(e) {
  const t = we(e);
  if (Qa() === "virtual") {
    let r = t.activeElement;
    gd(() => {
      t.activeElement === r && e.isConnected && St(e);
    });
  } else
    St(e);
}
function J$(e) {
  const t = gt(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement))
    return !1;
  let { display: r, visibility: n } = e.style, a = r !== "none" && n !== "hidden" && n !== "collapse";
  if (a) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView;
    let { display: l, visibility: o } = i(e);
    a = l !== "none" && o !== "hidden" && o !== "collapse";
  }
  return a;
}
function X$(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Ad(e, t) {
  return e.nodeName !== "#comment" && J$(e) && X$(e, t) && (!e.parentElement || Ad(e.parentElement, e));
}
const Zu = /* @__PURE__ */ g.createContext(null);
let Pe = null;
function aa(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: a } = e, i = N(null), l = N(null), o = N([]), { parentNode: u } = G(Zu) || {}, s = z(() => new Nl({
    scopeRef: o
  }), [
    o
  ]);
  ge(() => {
    let f = u || Ve.root;
    if (Ve.getTreeNode(f.scopeRef) && Pe && !ri(Pe, f.scopeRef)) {
      let p = Ve.getTreeNode(Pe);
      p && (f = p);
    }
    f.addChild(s), Ve.addNode(s);
  }, [
    s,
    u
  ]), ge(() => {
    let f = Ve.getTreeNode(o);
    f && (f.contain = !!r);
  }, [
    r
  ]), ge(() => {
    var f;
    let p = (f = i.current) === null || f === void 0 ? void 0 : f.nextSibling, b = [];
    for (; p && p !== l.current; )
      b.push(p), p = p.nextSibling;
    o.current = b;
  }, [
    t
  ]), iy(o, n, r), ry(o, r), oy(o, n, r), ay(o, a), te(() => {
    const f = we(o.current ? o.current[0] : void 0).activeElement;
    let p = null;
    if (Qe(f, o.current)) {
      for (let b of Ve.traverse())
        b.scopeRef && Qe(f, b.scopeRef.current) && (p = b);
      p === Ve.getTreeNode(o) && (Pe = p.scopeRef);
    }
  }, [
    o
  ]), ge(() => () => {
    var f, p, b;
    let m = (b = (p = Ve.getTreeNode(o)) === null || p === void 0 || (f = p.parent) === null || f === void 0 ? void 0 : f.scopeRef) !== null && b !== void 0 ? b : null;
    (o === Pe || ri(o, Pe)) && (!m || Ve.getTreeNode(m)) && (Pe = m), Ve.removeTreeNode(o);
  }, [
    o
  ]);
  let d = z(() => Q$(o), []), c = z(() => ({
    focusManager: d,
    parentNode: s
  }), [
    s,
    d
  ]);
  return /* @__PURE__ */ g.createElement(Zu.Provider, {
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
function Q$(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: a, wrap: i, accept: l } = t, o = n || we(r[0]).activeElement, u = r[0].previousElementSibling, s = wr(r), d = Ue(s, {
        tabbable: a,
        accept: l
      }, r);
      d.currentNode = Qe(o, r) ? o : u;
      let c = d.nextNode();
      return !c && i && (d.currentNode = u, c = d.nextNode()), c && ot(c, !0), c;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: n, tabbable: a, wrap: i, accept: l } = t, o = n || we(r[0]).activeElement, u = r[r.length - 1].nextElementSibling, s = wr(r), d = Ue(s, {
        tabbable: a,
        accept: l
      }, r);
      d.currentNode = Qe(o, r) ? o : u;
      let c = d.previousNode();
      return !c && i && (d.currentNode = u, c = d.previousNode()), c && ot(c, !0), c;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: a } = t, i = wr(r), l = Ue(i, {
        tabbable: n,
        accept: a
      }, r);
      l.currentNode = r[0].previousElementSibling;
      let o = l.nextNode();
      return o && ot(o, !0), o;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: a } = t, i = wr(r), l = Ue(i, {
        tabbable: n,
        accept: a
      }, r);
      l.currentNode = r[r.length - 1].nextElementSibling;
      let o = l.previousNode();
      return o && ot(o, !0), o;
    }
  };
}
const wo = [
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
], ey = wo.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
wo.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const ty = wo.join(':not([hidden]):not([tabindex="-1"]),');
function wr(e) {
  return e[0].parentElement;
}
function An(e) {
  let t = Ve.getTreeNode(Pe);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain)
      return !1;
    t = t.parent;
  }
  return !0;
}
function ry(e, t) {
  let r = N(), n = N();
  ge(() => {
    let a = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const i = we(a ? a[0] : void 0);
    let l = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !An(e))
        return;
      let d = i.activeElement, c = e.current;
      if (!c || !Qe(d, c))
        return;
      let f = wr(c), p = Ue(f, {
        tabbable: !0
      }, c);
      if (!d)
        return;
      p.currentNode = d;
      let b = s.shiftKey ? p.previousNode() : p.nextNode();
      b || (p.currentNode = s.shiftKey ? c[c.length - 1].nextElementSibling : c[0].previousElementSibling, b = s.shiftKey ? p.previousNode() : p.nextNode()), s.preventDefault(), b && ot(b, !0);
    }, o = (s) => {
      (!Pe || ri(Pe, e)) && Qe(s.target, e.current) ? (Pe = e, r.current = s.target) : An(e) && !ti(s.target, e) ? r.current ? r.current.focus() : Pe && Pe.current && ni(Pe.current) : An(e) && (r.current = s.target);
    }, u = (s) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        if (i.activeElement && An(e) && !ti(i.activeElement, e))
          if (Pe = e, i.body.contains(s.target)) {
            var d;
            r.current = s.target, (d = r.current) === null || d === void 0 || d.focus();
          } else
            Pe.current && ni(Pe.current);
      });
    };
    return i.addEventListener("keydown", l, !1), i.addEventListener("focusin", o, !1), a == null || a.forEach((s) => s.addEventListener("focusin", o, !1)), a == null || a.forEach((s) => s.addEventListener("focusout", u, !1)), () => {
      i.removeEventListener("keydown", l, !1), i.removeEventListener("focusin", o, !1), a == null || a.forEach((s) => s.removeEventListener("focusin", o, !1)), a == null || a.forEach((s) => s.removeEventListener("focusout", u, !1));
    };
  }, [
    e,
    t
  ]), ge(() => () => {
    n.current && cancelAnimationFrame(n.current);
  }, [
    n
  ]);
}
function Td(e) {
  return ti(e);
}
function Qe(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function ti(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
    return !0;
  for (let { scopeRef: r } of Ve.traverse(Ve.getTreeNode(t)))
    if (r && Qe(e, r.current))
      return !0;
  return !1;
}
function ny(e) {
  return ti(e, Pe);
}
function ri(e, t) {
  var r;
  let n = (r = Ve.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
  for (; n; ) {
    if (n.scopeRef === e)
      return !0;
    n = n.parent;
  }
  return !1;
}
function ot(e, t = !1) {
  if (e != null && !t)
    try {
      Fe(e);
    } catch {
    }
  else if (e != null)
    try {
      e.focus();
    } catch {
    }
}
function ni(e, t = !0) {
  let r = e[0].previousElementSibling, n = wr(e), a = Ue(n, {
    tabbable: t
  }, e);
  a.currentNode = r;
  let i = a.nextNode();
  t && !i && (n = wr(e), a = Ue(n, {
    tabbable: !1
  }, e), a.currentNode = r, i = a.nextNode()), ot(i);
}
function ay(e, t) {
  const r = g.useRef(t);
  te(() => {
    if (r.current) {
      Pe = e;
      const n = we(e.current ? e.current[0] : void 0);
      !Qe(n.activeElement, Pe.current) && e.current && ni(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function iy(e, t, r) {
  ge(() => {
    if (t || r)
      return;
    let n = e.current;
    const a = we(n ? n[0] : void 0);
    let i = (l) => {
      let o = l.target;
      Qe(o, e.current) ? Pe = e : Td(o) || (Pe = null);
    };
    return a.addEventListener("focusin", i, !1), n == null || n.forEach((l) => l.addEventListener("focusin", i, !1)), () => {
      a.removeEventListener("focusin", i, !1), n == null || n.forEach((l) => l.removeEventListener("focusin", i, !1));
    };
  }, [
    e,
    t,
    r
  ]);
}
function ly(e) {
  let t = Ve.getTreeNode(Pe);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore)
      return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function oy(e, t, r) {
  const n = N(typeof document < "u" ? we(e.current ? e.current[0] : void 0).activeElement : null);
  ge(() => {
    let a = e.current;
    const i = we(a ? a[0] : void 0);
    if (!t || r)
      return;
    let l = () => {
      (!Pe || ri(Pe, e)) && Qe(i.activeElement, e.current) && (Pe = e);
    };
    return i.addEventListener("focusin", l, !1), a == null || a.forEach((o) => o.addEventListener("focusin", l, !1)), () => {
      i.removeEventListener("focusin", l, !1), a == null || a.forEach((o) => o.removeEventListener("focusin", l, !1));
    };
  }, [
    e,
    r
  ]), ge(() => {
    const a = we(e.current ? e.current[0] : void 0);
    if (!t)
      return;
    let i = (l) => {
      if (l.key !== "Tab" || l.altKey || l.ctrlKey || l.metaKey || !An(e))
        return;
      let o = a.activeElement;
      if (!Qe(o, e.current))
        return;
      let u = Ve.getTreeNode(e);
      if (!u)
        return;
      let s = u.nodeToRestore, d = Ue(a.body, {
        tabbable: !0
      });
      d.currentNode = o;
      let c = l.shiftKey ? d.previousNode() : d.nextNode();
      if ((!s || !a.body.contains(s) || s === a.body) && (s = void 0, u.nodeToRestore = void 0), (!c || !Qe(c, e.current)) && s) {
        d.currentNode = s;
        do
          c = l.shiftKey ? d.previousNode() : d.nextNode();
        while (Qe(c, e.current));
        l.preventDefault(), l.stopPropagation(), c ? ot(c, !0) : Td(s) ? ot(s, !0) : o.blur();
      }
    };
    return r || a.addEventListener("keydown", i, !0), () => {
      r || a.removeEventListener("keydown", i, !0);
    };
  }, [
    e,
    t,
    r
  ]), ge(() => {
    const a = we(e.current ? e.current[0] : void 0);
    if (!t)
      return;
    let i = Ve.getTreeNode(e);
    if (i) {
      var l;
      return i.nodeToRestore = (l = n.current) !== null && l !== void 0 ? l : void 0, () => {
        let o = Ve.getTreeNode(e);
        if (!o)
          return;
        let u = o.nodeToRestore;
        if (t && u && // eslint-disable-next-line react-hooks/exhaustive-deps
        (Qe(a.activeElement, e.current) || a.activeElement === a.body && ly(e))) {
          let s = Ve.clone();
          requestAnimationFrame(() => {
            if (a.activeElement === a.body) {
              let d = s.getTreeNode(e);
              for (; d; ) {
                if (d.nodeToRestore && d.nodeToRestore.isConnected) {
                  ot(d.nodeToRestore);
                  return;
                }
                d = d.parent;
              }
              for (d = s.getTreeNode(e); d; ) {
                if (d.scopeRef && d.scopeRef.current && Ve.getTreeNode(d.scopeRef)) {
                  ni(d.scopeRef.current, !0);
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
function Ue(e, t, r) {
  let n = t != null && t.tabbable ? ty : ey, a = we(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var l;
      return !(t == null || (l = t.from) === null || l === void 0) && l.contains(i) ? NodeFilter.FILTER_REJECT : i.matches(n) && Ad(i) && (!r || Qe(i, r)) && (!(t != null && t.accept) || t.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (a.currentNode = t.from), a;
}
function ia(e, t = {}) {
  return {
    focusNext(r = {}) {
      let n = e.current;
      if (!n)
        return null;
      let { from: a, tabbable: i = t.tabbable, wrap: l = t.wrap, accept: o = t.accept } = r, u = a || we(n).activeElement, s = Ue(n, {
        tabbable: i,
        accept: o
      });
      n.contains(u) && (s.currentNode = u);
      let d = s.nextNode();
      return !d && l && (s.currentNode = n, d = s.nextNode()), d && ot(d, !0), d;
    },
    focusPrevious(r = t) {
      let n = e.current;
      if (!n)
        return null;
      let { from: a, tabbable: i = t.tabbable, wrap: l = t.wrap, accept: o = t.accept } = r, u = a || we(n).activeElement, s = Ue(n, {
        tabbable: i,
        accept: o
      });
      if (n.contains(u))
        s.currentNode = u;
      else {
        let c = il(s);
        return c && ot(c, !0), c ?? null;
      }
      let d = s.previousNode();
      if (!d && l) {
        s.currentNode = n;
        let c = il(s);
        if (!c)
          return null;
        d = c;
      }
      return d && ot(d, !0), d ?? null;
    },
    focusFirst(r = t) {
      let n = e.current;
      if (!n)
        return null;
      let { tabbable: a = t.tabbable, accept: i = t.accept } = r, o = Ue(n, {
        tabbable: a,
        accept: i
      }).nextNode();
      return o && ot(o, !0), o;
    },
    focusLast(r = t) {
      let n = e.current;
      if (!n)
        return null;
      let { tabbable: a = t.tabbable, accept: i = t.accept } = r, l = Ue(n, {
        tabbable: a,
        accept: i
      }), o = il(l);
      return o && ot(o, !0), o ?? null;
    }
  };
}
function il(e) {
  let t, r;
  do
    r = e.lastChild(), r && (t = r);
  while (r);
  return t;
}
class So {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let a = this.fastMap.get(r ?? null);
    if (!a)
      return;
    let i = new Nl({
      scopeRef: t
    });
    a.addChild(i), i.parent = a, this.fastMap.set(t, i), n && (i.nodeToRestore = n);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null)
      return;
    let r = this.fastMap.get(t);
    if (!r)
      return;
    let n = r.parent;
    for (let i of this.traverse())
      i !== r && r.nodeToRestore && i.nodeToRestore && r.scopeRef && r.scopeRef.current && Qe(i.nodeToRestore, r.scopeRef.current) && (i.nodeToRestore = r.nodeToRestore);
    let a = r.children;
    n && (n.removeChild(r), a.size > 0 && a.forEach((i) => n && n.addChild(i))), this.fastMap.delete(r.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0)
      for (let r of t.children)
        yield* this.traverse(r);
  }
  clone() {
    var t;
    let r = new So();
    var n;
    for (let a of this.traverse())
      r.addTreeNode(a.scopeRef, (n = (t = a.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0 ? n : null, a.nodeToRestore);
    return r;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Nl({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Nl {
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
let Ve = new So();
function xe(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, a = N({
    isFocused: !1,
    isFocusVisible: t || Tr()
  }), [i, l] = Y(!1), [o, u] = Y(() => a.current.isFocused && a.current.isFocusVisible), s = re(() => u(a.current.isFocused && a.current.isFocusVisible), []), d = re((p) => {
    a.current.isFocused = p, l(p), s();
  }, [
    s
  ]);
  G$((p) => {
    a.current.isFocusVisible = p, s();
  }, [], {
    isTextInput: r
  });
  let { focusProps: c } = xi({
    isDisabled: n,
    onFocusChange: d
  }), { focusWithinProps: f } = Ft({
    isDisabled: !n,
    onFocusWithinChange: d
  });
  return {
    isFocused: i,
    isFocusVisible: o,
    focusProps: n ? f : c
  };
}
let uy = /* @__PURE__ */ g.createContext(null);
function sy(e) {
  let t = G(uy) || {};
  $d(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Nr(e, t) {
  let { focusProps: r } = xi(e), { keyboardProps: n } = Ci(e), a = _(r, n), i = sy(t), l = e.isDisabled ? {} : i, o = N(e.autoFocus);
  return te(() => {
    o.current && t.current && Fe(t.current), o.current = !1;
  }, [
    t
  ]), {
    focusableProps: _({
      ...a,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, l)
  };
}
function Bo(e, t) {
  let r = t == null ? void 0 : t.isDisabled, [n, a] = Y(!1);
  return ge(() => {
    if (e != null && e.current && !r) {
      let i = () => {
        if (e.current) {
          let o = Ue(e.current, {
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
  }), r ? !1 : n;
}
function dy(e, t) {
  let {
    elementType: r = "a",
    onPress: n,
    onPressStart: a,
    onPressEnd: i,
    // @ts-ignore
    onClick: l,
    isDisabled: o,
    ...u
  } = e, s = {};
  r !== "a" && (s = {
    role: "link",
    tabIndex: o ? void 0 : 0
  });
  let { focusableProps: d } = Nr(e, t), { pressProps: c, isPressed: f } = st({
    onPress: n,
    onPressStart: a,
    onPressEnd: i,
    isDisabled: o,
    ref: t
  }), p = X(u, {
    labelable: !0,
    isLink: r === "a"
  }), b = _(d, c), m = ea();
  return {
    isPressed: f,
    linkProps: _(p, {
      ...b,
      ...s,
      "aria-disabled": o || void 0,
      "aria-current": e["aria-current"],
      onClick: (h) => {
        var y;
        (y = c.onClick) === null || y === void 0 || y.call(c, h), l && (l(h), console.warn("onClick is deprecated, please use onPress")), !m.isNative && h.currentTarget instanceof HTMLAnchorElement && h.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !h.isDefaultPrevented() && E$(h.currentTarget, h) && (h.preventDefault(), m.open(h.currentTarget, h));
      }
    })
  };
}
const cy = Symbol.for("react-aria.i18n.locale"), fy = Symbol.for("react-aria.i18n.strings");
let Zr;
class Kr {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let a = this.getStringsForLocale(r)[t];
    if (!a)
      throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return a;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let r = this.strings[t];
    return r || (r = py(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u")
      return null;
    let r = window[cy];
    if (Zr === void 0) {
      let a = window[fy];
      if (!a)
        return null;
      Zr = {};
      for (let i in a)
        Zr[i] = new Kr({
          [r]: a[i]
        }, r);
    }
    let n = Zr == null ? void 0 : Zr[t];
    if (!n)
      throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return n;
  }
  constructor(t, r = "en-US") {
    this.strings = {
      ...t
    }, this.defaultLocale = r;
  }
}
function py(e, t, r = "en-US") {
  if (t[e])
    return t[e];
  let n = by(e);
  if (t[n])
    return t[n];
  for (let a in t)
    if (a.startsWith(n + "-"))
      return t[a];
  return t[r];
}
function by(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const qu = /* @__PURE__ */ new Map(), Yu = /* @__PURE__ */ new Map();
class Rd {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == "function" ? n(r, this) : n;
  }
  plural(t, r, n = "cardinal") {
    let a = r["=" + t];
    if (a)
      return typeof a == "function" ? a() : a;
    let i = this.locale + ":" + n, l = qu.get(i);
    l || (l = new Intl.PluralRules(this.locale, {
      type: n
    }), qu.set(i, l));
    let o = l.select(t);
    return a = r[o] || r.other, typeof a == "function" ? a() : a;
  }
  number(t) {
    let r = Yu.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), Yu.set(this.locale, r)), r.format(t);
  }
  select(t, r) {
    let n = t[r] || t.other;
    return typeof n == "function" ? n() : n;
  }
  constructor(t, r) {
    this.locale = t, this.strings = r;
  }
}
function Jt(e, t) {
  return e - t * Math.floor(e / t);
}
const Md = 1721426;
function Sr(e, t, r, n) {
  t = la(e, t);
  let a = t - 1, i = -2;
  return r <= 2 ? i = 0 : br(t) && (i = -1), Md - 1 + 365 * a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor((367 * r - 362) / 12 + i + n);
}
function br(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function la(e, t) {
  return e === "BC" ? 1 - t : t;
}
function Ei(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const my = {
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
class nt {
  fromJulianDay(t) {
    let r = t, n = r - Md, a = Math.floor(n / 146097), i = Jt(n, 146097), l = Math.floor(i / 36524), o = Jt(i, 36524), u = Math.floor(o / 1461), s = Jt(o, 1461), d = Math.floor(s / 365), c = a * 400 + l * 100 + u * 4 + d + (l !== 4 && d !== 4 ? 1 : 0), [f, p] = Ei(c), b = r - Sr(f, p, 1, 1), m = 2;
    r < Sr(f, p, 3, 1) ? m = 0 : br(p) && (m = 1);
    let h = Math.floor(((b + m) * 12 + 373) / 367), y = r - Sr(f, p, h, 1) + 1;
    return new Oe(f, p, h, y);
  }
  toJulianDay(t) {
    return Sr(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return my[br(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return br(t.year) ? 366 : 365;
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
const hy = {
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
function Le(e, t) {
  return t = Ae(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function vy(e, t) {
  return t = Ae(t, e.calendar), e = Rr(e), t = Rr(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Kl(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function gy(e, t) {
  return Le(e, Pi(t));
}
function ko(e, t) {
  let r = e.calendar.toJulianDay(e), n = Math.ceil(r + 1 - Ey(t)) % 7;
  return n < 0 && (n += 7), n;
}
function Id(e) {
  return qt(Date.now(), e);
}
function Pi(e) {
  return rt(Id(e));
}
function Nd(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Kd(e, t) {
  return Ju(e) - Ju(t);
}
function Ju(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let ll = null;
function Fo() {
  return ll == null && (ll = new Intl.DateTimeFormat().resolvedOptions().timeZone), ll;
}
function Rr(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function ai(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
function $y(e) {
  return Rr(e.subtract({
    months: e.month - 1
  }));
}
function yy(e) {
  return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function xy(e) {
  return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function Ln(e, t) {
  let r = ko(e, t);
  return e.subtract({
    days: r
  });
}
function Dy(e, t) {
  return Ln(e, t).add({
    days: 6
  });
}
const Xu = /* @__PURE__ */ new Map();
function Cy(e) {
  if (Intl.Locale) {
    let r = Xu.get(e);
    return r || (r = new Intl.Locale(e).maximize().region, r && Xu.set(e, r)), r;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function Ey(e) {
  let t = Cy(e);
  return t && hy[t] || 0;
}
function Py(e, t) {
  let r = e.calendar.getDaysInMonth(e);
  return Math.ceil((ko(Rr(e), t) + r) / 7);
}
function Ao(e, t) {
  return e && t ? e.compare(t) <= 0 ? e : t : e || t;
}
function To(e, t) {
  return e && t ? e.compare(t) >= 0 ? e : t : e || t;
}
function dn(e) {
  e = Ae(e, new nt());
  let t = la(e.era, e.year);
  return zd(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function zd(e, t, r, n, a, i, l) {
  let o = /* @__PURE__ */ new Date();
  return o.setUTCHours(n, a, i, l), o.setUTCFullYear(e, t - 1, r), o.getTime();
}
function zl(e, t) {
  if (t === "UTC")
    return 0;
  if (e > 0 && t === Fo())
    return new Date(e).getTimezoneOffset() * -6e4;
  let { year: r, month: n, day: a, hour: i, minute: l, second: o } = Vd(e, t);
  return zd(r, n, a, i, l, o, 0) - Math.floor(e / 1e3) * 1e3;
}
const Qu = /* @__PURE__ */ new Map();
function Vd(e, t) {
  let r = Qu.get(t);
  r || (r = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), Qu.set(t, r));
  let n = r.formatToParts(new Date(e)), a = {};
  for (let i of n)
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
const es = 864e5;
function wy(e, t, r, n) {
  return (r === n ? [
    r
  ] : [
    r,
    n
  ]).filter((i) => Sy(e, t, i));
}
function Sy(e, t, r) {
  let n = Vd(r, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function Gt(e, t, r = "compatible") {
  let n = kt(e);
  if (t === "UTC")
    return dn(n);
  if (t === Fo() && r === "compatible") {
    n = Ae(n, new nt());
    let u = /* @__PURE__ */ new Date(), s = la(n.era, n.year);
    return u.setFullYear(s, n.month - 1, n.day), u.setHours(n.hour, n.minute, n.second, n.millisecond), u.getTime();
  }
  let a = dn(n), i = zl(a - es, t), l = zl(a + es, t), o = wy(n, t, a - i, a - l);
  if (o.length === 1)
    return o[0];
  if (o.length > 1)
    switch (r) {
      case "compatible":
      case "earlier":
        return o[0];
      case "later":
        return o[o.length - 1];
      case "reject":
        throw new RangeError("Multiple possible absolute times found");
    }
  switch (r) {
    case "earlier":
      return Math.min(a - i, a - l);
    case "compatible":
    case "later":
      return Math.max(a - i, a - l);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function Ld(e, t, r = "compatible") {
  return new Date(Gt(e, t, r));
}
function qt(e, t) {
  let r = zl(e, t), n = new Date(e + r), a = n.getUTCFullYear(), i = n.getUTCMonth() + 1, l = n.getUTCDate(), o = n.getUTCHours(), u = n.getUTCMinutes(), s = n.getUTCSeconds(), d = n.getUTCMilliseconds();
  return new jn(a, i, l, t, r, o, u, s, d);
}
function rt(e) {
  return new Oe(e.calendar, e.era, e.year, e.month, e.day);
}
function kt(e, t) {
  let r = 0, n = 0, a = 0, i = 0;
  if ("timeZone" in e)
    ({ hour: r, minute: n, second: a, millisecond: i } = e);
  else if ("hour" in e && !t)
    return e;
  return t && ({ hour: r, minute: n, second: a, millisecond: i } = t), new ii(e.calendar, e.era, e.year, e.month, e.day, r, n, a, i);
}
function ts(e) {
  return new oa(e.hour, e.minute, e.second, e.millisecond);
}
function Ae(e, t) {
  if (e.calendar.identifier === t.identifier)
    return e;
  let r = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = r.era, n.year = r.year, n.month = r.month, n.day = r.day, Mr(n), n;
}
function Od(e, t, r) {
  if (e instanceof jn)
    return e.timeZone === t ? e : ky(e, t);
  let n = Gt(e, t, r);
  return qt(n, t);
}
function By(e) {
  let t = dn(e) - e.offset;
  return new Date(t);
}
function ky(e, t) {
  let r = dn(e) - e.offset;
  return Ae(qt(r, t), e.calendar);
}
const xn = 36e5;
function wi(e, t) {
  let r = e.copy(), n = "hour" in r ? Ud(r, t) : 0;
  Vl(r, t.years || 0), r.calendar.balanceYearMonth && r.calendar.balanceYearMonth(r, e), r.month += t.months || 0, Ll(r), jd(r), r.day += (t.weeks || 0) * 7, r.day += t.days || 0, r.day += n, Fy(r), r.calendar.balanceDate && r.calendar.balanceDate(r), r.year < 1 && (r.year = 1, r.month = 1, r.day = 1);
  let a = r.calendar.getYearsInEra(r);
  if (r.year > a) {
    var i, l;
    let u = (i = (l = r.calendar).isInverseEra) === null || i === void 0 ? void 0 : i.call(l, r);
    r.year = a, r.month = u ? 1 : r.calendar.getMonthsInYear(r), r.day = u ? 1 : r.calendar.getDaysInMonth(r);
  }
  r.month < 1 && (r.month = 1, r.day = 1);
  let o = r.calendar.getMonthsInYear(r);
  return r.month > o && (r.month = o, r.day = r.calendar.getDaysInMonth(r)), r.day = Math.max(1, Math.min(r.calendar.getDaysInMonth(r), r.day)), r;
}
function Vl(e, t) {
  var r, n;
  !((r = (n = e.calendar).isInverseEra) === null || r === void 0) && r.call(n, e) && (t = -t), e.year += t;
}
function Ll(e) {
  for (; e.month < 1; )
    Vl(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Vl(e, 1);
}
function Fy(e) {
  for (; e.day < 1; )
    e.month--, Ll(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Ll(e);
}
function jd(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function Mr(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), jd(e);
}
function Ro(e) {
  let t = {};
  for (let r in e)
    typeof e[r] == "number" && (t[r] = -e[r]);
  return t;
}
function _d(e, t) {
  return wi(e, Ro(t));
}
function Mo(e, t) {
  let r = e.copy();
  return t.era != null && (r.era = t.era), t.year != null && (r.year = t.year), t.month != null && (r.month = t.month), t.day != null && (r.day = t.day), Mr(r), r;
}
function On(e, t) {
  let r = e.copy();
  return t.hour != null && (r.hour = t.hour), t.minute != null && (r.minute = t.minute), t.second != null && (r.second = t.second), t.millisecond != null && (r.millisecond = t.millisecond), Hd(r), r;
}
function Ay(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Ta(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Ta(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Ta(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Ta(e.hour, 24), t;
}
function Hd(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Ta(e, t) {
  let r = e % t;
  return r < 0 && (r += t), r;
}
function Ud(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Ay(e);
}
function Wd(e, t) {
  let r = e.copy();
  return Ud(r, t), r;
}
function Ty(e, t) {
  return Wd(e, Ro(t));
}
function Io(e, t, r, n) {
  let a = e.copy();
  switch (t) {
    case "era": {
      let o = e.calendar.getEras(), u = o.indexOf(e.era);
      if (u < 0)
        throw new Error("Invalid era: " + e.era);
      u = Yt(u, r, 0, o.length - 1, n == null ? void 0 : n.round), a.era = o[u], Mr(a);
      break;
    }
    case "year":
      var i, l;
      !((i = (l = a.calendar).isInverseEra) === null || i === void 0) && i.call(l, a) && (r = -r), a.year = Yt(e.year, r, -1 / 0, 9999, n == null ? void 0 : n.round), a.year === -1 / 0 && (a.year = 1), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
      break;
    case "month":
      a.month = Yt(e.month, r, 1, e.calendar.getMonthsInYear(e), n == null ? void 0 : n.round);
      break;
    case "day":
      a.day = Yt(e.day, r, 1, e.calendar.getDaysInMonth(e), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(a), Mr(a), a;
}
function No(e, t, r, n) {
  let a = e.copy();
  switch (t) {
    case "hour": {
      let i = e.hour, l = 0, o = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let u = i >= 12;
        l = u ? 12 : 0, o = u ? 23 : 11;
      }
      a.hour = Yt(i, r, l, o, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      a.minute = Yt(e.minute, r, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      a.second = Yt(e.second, r, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      a.millisecond = Yt(e.millisecond, r, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return a;
}
function Yt(e, t, r, n, a = !1) {
  if (a) {
    e += Math.sign(t), e < r && (e = n);
    let i = Math.abs(t);
    t > 0 ? e = Math.ceil(e / i) * i : e = Math.floor(e / i) * i, e > n && (e = r);
  } else
    e += t, e < r ? e = n - (r - e - 1) : e > n && (e = r + (e - n - 1));
  return e;
}
function Gd(e, t) {
  let r;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let a = wi(kt(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    r = Gt(a, e.timeZone);
  } else
    r = dn(e) - e.offset;
  r += t.milliseconds || 0, r += (t.seconds || 0) * 1e3, r += (t.minutes || 0) * 6e4, r += (t.hours || 0) * 36e5;
  let n = qt(r, e.timeZone);
  return Ae(n, e.calendar);
}
function Ry(e, t) {
  return Gd(e, Ro(t));
}
function My(e, t, r, n) {
  switch (t) {
    case "hour": {
      let a = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let b = e.hour >= 12;
        a = b ? 12 : 0, i = b ? 23 : 11;
      }
      let l = kt(e), o = Ae(On(l, {
        hour: a
      }), new nt()), u = [
        Gt(o, e.timeZone, "earlier"),
        Gt(o, e.timeZone, "later")
      ].filter((b) => qt(b, e.timeZone).day === o.day)[0], s = Ae(On(l, {
        hour: i
      }), new nt()), d = [
        Gt(s, e.timeZone, "earlier"),
        Gt(s, e.timeZone, "later")
      ].filter((b) => qt(b, e.timeZone).day === s.day).pop(), c = dn(e) - e.offset, f = Math.floor(c / xn), p = c % xn;
      return c = Yt(f, r, Math.floor(u / xn), Math.floor(d / xn), n == null ? void 0 : n.round) * xn + p, Ae(qt(c, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return No(e, t, r, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let a = Io(kt(e), t, r, n), i = Gt(a, e.timeZone);
      return Ae(qt(i, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function Iy(e, t, r) {
  let n = kt(e), a = On(Mo(n, t), t);
  if (a.compare(n) === 0)
    return e;
  let i = Gt(a, e.timeZone, r);
  return Ae(qt(i, e.timeZone), e.calendar);
}
function Zd(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function qd(e) {
  let t = Ae(e, new nt());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function Yd(e) {
  return `${qd(e)}T${Zd(e)}`;
}
function Ny(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let r = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(r).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Ky(e) {
  return `${Yd(e)}${Ny(e.offset)}[${e.timeZone}]`;
}
function Ko(e) {
  let t = typeof e[0] == "object" ? e.shift() : new nt(), r;
  if (typeof e[0] == "string")
    r = e.shift();
  else {
    let l = t.getEras();
    r = l[l.length - 1];
  }
  let n = e.shift(), a = e.shift(), i = e.shift();
  return [
    t,
    r,
    n,
    a,
    i
  ];
}
var zy = /* @__PURE__ */ new WeakMap();
class Oe {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Oe(this.calendar, this.era, this.year, this.month, this.day) : new Oe(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return wi(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return _d(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Mo(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, r, n) {
    return Io(this, t, r, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return Ld(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return qd(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Nd(this, t);
  }
  constructor(...t) {
    ra(this, zy, {
      writable: !0,
      value: void 0
    });
    let [r, n, a, i, l] = Ko(t);
    this.calendar = r, this.era = n, this.year = a, this.month = i, this.day = l, Mr(this);
  }
}
var Vy = /* @__PURE__ */ new WeakMap();
class oa {
  /** Returns a copy of this time. */
  copy() {
    return new oa(this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `Time` with the given duration added to it. */
  add(t) {
    return Wd(this, t);
  }
  /** Returns a new `Time` with the given duration subtracted from it. */
  subtract(t) {
    return Ty(this, t);
  }
  /** Returns a new `Time` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return On(this, t);
  }
  /**
  * Returns a new `Time` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, r, n) {
    return No(this, t, r, n);
  }
  /** Converts the time to an ISO 8601 formatted string. */
  toString() {
    return Zd(this);
  }
  /** Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. */
  compare(t) {
    return Kd(this, t);
  }
  constructor(t = 0, r = 0, n = 0, a = 0) {
    ra(this, Vy, {
      writable: !0,
      value: void 0
    }), this.hour = t, this.minute = r, this.second = n, this.millisecond = a, Hd(this);
  }
}
var Ly = /* @__PURE__ */ new WeakMap();
class ii {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ii(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new ii(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return wi(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return _d(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Mo(On(this, t), t);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, r, n) {
    switch (t) {
      case "era":
      case "year":
      case "month":
      case "day":
        return Io(this, t, r, n);
      default:
        return No(this, t, r, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, r) {
    return Ld(this, t, r);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Yd(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let r = Nd(this, t);
    return r === 0 ? Kd(this, kt(t)) : r;
  }
  constructor(...t) {
    ra(this, Ly, {
      writable: !0,
      value: void 0
    });
    let [r, n, a, i, l] = Ko(t);
    this.calendar = r, this.era = n, this.year = a, this.month = i, this.day = l, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Mr(this);
  }
}
var Oy = /* @__PURE__ */ new WeakMap();
class jn {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new jn(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new jn(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return Gd(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Ry(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, r) {
    return Iy(this, t, r);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, r, n) {
    return My(this, t, r, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return By(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Ky(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - Od(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    ra(this, Oy, {
      writable: !0,
      value: void 0
    });
    let [r, n, a, i, l] = Ko(t), o = t.shift(), u = t.shift();
    this.calendar = r, this.era = n, this.year = a, this.month = i, this.day = l, this.timeZone = o, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Mr(this);
  }
}
const ln = [
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
], jy = [
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
], _a = [
  1867,
  1911,
  1925,
  1988,
  2018
], dr = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function rs(e) {
  const t = ln.findIndex(([r, n, a]) => e.year < r || e.year === r && e.month < n || e.year === r && e.month === n && e.day < a);
  return t === -1 ? ln.length - 1 : t === 0 ? 0 : t - 1;
}
function ol(e) {
  let t = _a[dr.indexOf(e.era)];
  if (!t)
    throw new Error("Unknown era: " + e.era);
  return new Oe(e.year + t, e.month, e.day);
}
class _y extends nt {
  fromJulianDay(t) {
    let r = super.fromJulianDay(t), n = rs(r);
    return new Oe(this, dr[n], r.year - _a[n], r.month, r.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(ol(t));
  }
  balanceDate(t) {
    let r = ol(t), n = rs(r);
    dr[n] !== t.era && (t.era = dr[n], t.year = r.year - _a[n]), this.constrainDate(t);
  }
  constrainDate(t) {
    let r = dr.indexOf(t.era), n = jy[r];
    if (n != null) {
      let [a, i, l] = n, o = a - _a[r];
      t.year = Math.max(1, Math.min(o, t.year)), t.year === o && (t.month = Math.min(i, t.month), t.month === i && (t.day = Math.min(l, t.day)));
    }
    if (t.year === 1 && r >= 0) {
      let [, a, i] = ln[r];
      t.month = Math.max(a, t.month), t.month === a && (t.day = Math.max(i, t.day));
    }
  }
  getEras() {
    return dr;
  }
  getYearsInEra(t) {
    let r = dr.indexOf(t.era), n = ln[r], a = ln[r + 1];
    if (a == null)
      return 9999 - n[0] + 1;
    let i = a[0] - n[0];
    return (t.month < a[1] || t.month === a[1] && t.day < a[2]) && i++, i;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(ol(t));
  }
  getMinimumMonthInYear(t) {
    let r = ns(t);
    return r ? r[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let r = ns(t);
    return r && t.month === r[1] ? r[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function ns(e) {
  if (e.year === 1) {
    let t = dr.indexOf(e.era);
    return ln[t];
  }
}
const Jd = -543;
class Hy extends nt {
  fromJulianDay(t) {
    let r = super.fromJulianDay(t), n = la(r.era, r.year);
    return new Oe(this, n - Jd, r.month, r.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(as(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(as(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function as(e) {
  let [t, r] = Ei(e.year + Jd);
  return new Oe(t, r, e.month, e.day);
}
const li = 1911;
function Xd(e) {
  return e.era === "minguo" ? e.year + li : 1 - e.year + li;
}
function is(e) {
  let t = e - li;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class Uy extends nt {
  fromJulianDay(t) {
    let r = super.fromJulianDay(t), n = la(r.era, r.year), [a, i] = is(n);
    return new Oe(this, a, i, r.month, r.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(ls(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [r, n] = is(Xd(t));
    t.era = r, t.year = n;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(ls(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - li;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function ls(e) {
  let [t, r] = Ei(Xd(e));
  return new Oe(t, r, e.month, e.day);
}
const Wy = 1948321;
function Gy(e) {
  let t = e > 0 ? e - 474 : e - 473, r = Jt(t, 2820) + 474;
  return Jt((r + 38) * 31, 128) < 31;
}
function Ra(e, t, r) {
  let n = e > 0 ? e - 474 : e - 473, a = Jt(n, 2820) + 474, i = t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6;
  return Wy - 1 + 1029983 * Math.floor(n / 2820) + 365 * (a - 1) + Math.floor((31 * a - 5) / 128) + i + r;
}
class Zy {
  fromJulianDay(t) {
    let r = t - Ra(475, 1, 1), n = Math.floor(r / 1029983), a = Jt(r, 1029983), i = a === 1029982 ? 2820 : Math.floor((128 * a + 46878) / 46751), l = 474 + 2820 * n + i;
    l <= 0 && l--;
    let o = t - Ra(l, 1, 1) + 1, u = o <= 186 ? Math.ceil(o / 31) : Math.ceil((o - 6) / 31), s = t - Ra(l, u, 1) + 1;
    return new Oe(this, l, u, s);
  }
  toJulianDay(t) {
    return Ra(t.year, t.month, t.day);
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || Gy(t.year) ? 30 : 29;
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
const ul = 78, os = 80;
class qy extends nt {
  fromJulianDay(t) {
    let r = super.fromJulianDay(t), n = r.year - ul, a = t - Sr(r.era, r.year, 1, 1), i;
    a < os ? (n--, i = br(r.year - 1) ? 31 : 30, a += i + 155 + 90 + 10) : (i = br(r.year) ? 31 : 30, a -= os);
    let l, o;
    if (a < i)
      l = 1, o = a + 1;
    else {
      let u = a - i;
      u < 155 ? (l = Math.floor(u / 31) + 2, o = u % 31 + 1) : (u -= 155, l = Math.floor(u / 30) + 7, o = u % 30 + 1);
    }
    return new Oe(this, n, l, o);
  }
  toJulianDay(t) {
    let r = t.year + ul, [n, a] = Ei(r), i, l;
    return br(a) ? (i = 31, l = Sr(n, a, 3, 21)) : (i = 30, l = Sr(n, a, 3, 22)), t.month === 1 ? l + t.day - 1 : (l += i + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (l += (t.month - 7) * 30), l += t.day - 1, l);
  }
  getDaysInMonth(t) {
    return t.month === 1 && br(t.year + ul) || t.month >= 2 && t.month <= 6 ? 31 : 30;
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
const oi = 1948440, us = 1948439, ht = 1300, qr = 1600, Yy = 460322;
function ui(e, t, r, n) {
  return n + Math.ceil(29.5 * (r - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Qd(e, t, r) {
  let n = Math.floor((30 * (r - t) + 10646) / 10631), a = Math.min(12, Math.ceil((r - (29 + ui(t, n, 1, 1))) / 29.5) + 1), i = r - ui(t, n, a, 1) + 1;
  return new Oe(e, n, a, i);
}
function ss(e) {
  return (14 + 11 * e) % 30 < 11;
}
class zo {
  fromJulianDay(t) {
    return Qd(this, oi, t);
  }
  toJulianDay(t) {
    return ui(oi, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let r = 29 + t.month % 2;
    return t.month === 12 && ss(t.year) && r++, r;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return ss(t.year) ? 355 : 354;
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
class Jy extends zo {
  fromJulianDay(t) {
    return Qd(this, us, t);
  }
  toJulianDay(t) {
    return ui(us, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const Xy = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Ol, on;
function Ha(e) {
  return Yy + on[e - ht];
}
function Tn(e, t) {
  let r = e - ht, n = 1 << 11 - (t - 1);
  return Ol[r] & n ? 30 : 29;
}
function ds(e, t) {
  let r = Ha(e);
  for (let n = 1; n < t; n++)
    r += Tn(e, n);
  return r;
}
function cs(e) {
  return on[e + 1 - ht] - on[e - ht];
}
class Qy extends zo {
  fromJulianDay(t) {
    let r = t - oi, n = Ha(ht), a = Ha(qr);
    if (r < n || r > a)
      return super.fromJulianDay(t);
    {
      let i = ht - 1, l = 1, o = 1;
      for (; o > 0; ) {
        i++, o = r - Ha(i) + 1;
        let u = cs(i);
        if (o === u) {
          l = 12;
          break;
        } else if (o < u) {
          let s = Tn(i, l);
          for (l = 1; o > s; )
            o -= s, l++, s = Tn(i, l);
          break;
        }
      }
      return new Oe(this, i, l, r - ds(i, l) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < ht || t.year > qr ? super.toJulianDay(t) : oi + ds(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < ht || t.year > qr ? super.getDaysInMonth(t) : Tn(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < ht || t.year > qr ? super.getDaysInYear(t) : cs(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Ol || (Ol = new Uint16Array(Uint8Array.from(atob(Xy), (t) => t.charCodeAt(0)).buffer)), !on) {
      on = new Uint32Array(qr - ht + 1);
      let t = 0;
      for (let r = ht; r <= qr; r++) {
        on[r - ht] = t;
        for (let n = 1; n <= 12; n++)
          t += Tn(r, n);
      }
    }
  }
}
const fs = 347997, ec = 1080, tc = 24 * ec, e1 = 29, t1 = 12 * ec + 793, r1 = e1 * tc + t1;
function Pr(e) {
  return Jt(e * 7 + 1, 19) < 7;
}
function Ua(e) {
  let t = Math.floor((235 * e - 234) / 19), r = 12084 + 13753 * t, n = t * 29 + Math.floor(r / 25920);
  return Jt(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function n1(e) {
  let t = Ua(e - 1), r = Ua(e);
  return Ua(e + 1) - r === 356 ? 2 : r - t === 382 ? 1 : 0;
}
function In(e) {
  return Ua(e) + n1(e);
}
function rc(e) {
  return In(e + 1) - In(e);
}
function a1(e) {
  let t = rc(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function Ma(e, t) {
  if (t >= 6 && !Pr(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13)
    return 29;
  let r = a1(e);
  return t === 2 ? r === 2 ? 30 : 29 : t === 3 ? r === 0 ? 29 : 30 : t === 6 ? Pr(e) ? 30 : 0 : 30;
}
class i1 {
  fromJulianDay(t) {
    let r = t - fs, n = r * tc / r1, a = Math.floor((19 * n + 234) / 235) + 1, i = In(a), l = Math.floor(r - i);
    for (; l < 1; )
      a--, i = In(a), l = Math.floor(r - i);
    let o = 1, u = 0;
    for (; u < l; )
      u += Ma(a, o), o++;
    o--, u -= Ma(a, o);
    let s = l - u;
    return new Oe(this, a, o, s);
  }
  toJulianDay(t) {
    let r = In(t.year);
    for (let n = 1; n < t.month; n++)
      r += Ma(t.year, n);
    return r + t.day + fs;
  }
  getDaysInMonth(t) {
    return Ma(t.year, t.month);
  }
  getMonthsInYear(t) {
    return Pr(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return rc(t.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(t, r) {
    r.year !== t.year && (Pr(r.year) && !Pr(t.year) && r.month > 6 ? t.month-- : !Pr(r.year) && Pr(t.year) && r.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const jl = 1723856, ps = 1824665, _l = 5500;
function si(e, t, r, n) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (r - 1) + n - 1;
}
function Vo(e, t) {
  let r = Math.floor(4 * (t - e) / 1461), n = 1 + Math.floor((t - si(e, r, 1, 1)) / 30), a = t + 1 - si(e, r, n, 1);
  return [
    r,
    n,
    a
  ];
}
function nc(e) {
  return Math.floor(e % 4 / 3);
}
function ac(e, t) {
  return t % 13 !== 0 ? 30 : nc(e) + 5;
}
class Lo {
  fromJulianDay(t) {
    let [r, n, a] = Vo(jl, t), i = "AM";
    return r <= 0 && (i = "AA", r += _l), new Oe(this, i, r, n, a);
  }
  toJulianDay(t) {
    let r = t.year;
    return t.era === "AA" && (r -= _l), si(jl, r, t.month, t.day);
  }
  getDaysInMonth(t) {
    return ac(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + nc(t.year);
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
class l1 extends Lo {
  fromJulianDay(t) {
    let [r, n, a] = Vo(jl, t);
    return r += _l, new Oe(this, "AA", r, n, a);
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
class o1 extends Lo {
  fromJulianDay(t) {
    let [r, n, a] = Vo(ps, t), i = "CE";
    return r <= 0 && (i = "BCE", r = 1 - r), new Oe(this, i, r, n, a);
  }
  toJulianDay(t) {
    let r = t.year;
    return t.era === "BCE" && (r = 1 - r), si(ps, r, t.month, t.day);
  }
  getDaysInMonth(t) {
    let r = t.year;
    return t.era === "BCE" && (r = 1 - r), ac(r, t.month);
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
function Si(e) {
  switch (e) {
    case "buddhist":
      return new Hy();
    case "ethiopic":
      return new Lo();
    case "ethioaa":
      return new l1();
    case "coptic":
      return new o1();
    case "hebrew":
      return new i1();
    case "indian":
      return new qy();
    case "islamic-civil":
      return new zo();
    case "islamic-tbla":
      return new Jy();
    case "islamic-umalqura":
      return new Qy();
    case "japanese":
      return new _y();
    case "persian":
      return new Zy();
    case "roc":
      return new Uy();
    case "gregory":
    default:
      return new nt();
  }
}
let sl = /* @__PURE__ */ new Map();
class Xt {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(t) {
    return this.formatter.format(t);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  /** Formats a date range as a string. */
  formatRange(t, r) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(t, r);
    if (r < t)
      throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} – ${this.formatter.format(r)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(t, r) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(t, r);
    if (r < t)
      throw new RangeError("End date must be >= start date");
    let n = this.formatter.formatToParts(t), a = this.formatter.formatToParts(r);
    return [
      ...n.map((i) => ({
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
    return d1() && (this.resolvedHourCycle || (this.resolvedHourCycle = c1(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, r = {}) {
    this.formatter = ic(t, r), this.options = r;
  }
}
const u1 = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function ic(e, t = {}) {
  if (typeof t.hour12 == "boolean" && s1()) {
    t = {
      ...t
    };
    let a = u1[String(t.hour12)][e.split("-")[0]], i = t.hour12 ? "h12" : "h23";
    t.hourCycle = a ?? i, delete t.hour12;
  }
  let r = e + (t ? Object.entries(t).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : "");
  if (sl.has(r))
    return sl.get(r);
  let n = new Intl.DateTimeFormat(e, t);
  return sl.set(r, n), n;
}
let dl = null;
function s1() {
  return dl == null && (dl = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), dl;
}
let cl = null;
function d1() {
  return cl == null && (cl = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), cl;
}
function c1(e, t) {
  if (!t.timeStyle && !t.hour)
    return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let r = ic(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), n = parseInt(r.formatToParts(new Date(2020, 2, 3, 0)).find((i) => i.type === "hour").value, 10), a = parseInt(r.formatToParts(new Date(2020, 2, 3, 23)).find((i) => i.type === "hour").value, 10);
  if (n === 0 && a === 23)
    return "h23";
  if (n === 24 && a === 23)
    return "h24";
  if (n === 0 && a === 11)
    return "h11";
  if (n === 12 && a === 11)
    return "h12";
  throw new Error("Unexpected hour cycle result");
}
let fl = /* @__PURE__ */ new Map(), Hl = !1;
try {
  Hl = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let di = !1;
try {
  di = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const lc = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class ci {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(t) {
    let r = "";
    if (!Hl && this.options.signDisplay != null ? r = p1(this.numberFormatter, this.options.signDisplay, t) : r = this.numberFormatter.format(t), this.options.style === "unit" && !di) {
      var n;
      let { unit: a, unitDisplay: i = "short", locale: l } = this.resolvedOptions();
      if (!a)
        return r;
      let o = (n = lc[a]) === null || n === void 0 ? void 0 : n[i];
      r += o[l] || o.default;
    }
    return r;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(t) {
    return this.numberFormatter.formatToParts(t);
  }
  /** Formats a number range as a string. */
  formatRange(t, r) {
    if (typeof this.numberFormatter.formatRange == "function")
      return this.numberFormatter.formatRange(t, r);
    if (r < t)
      throw new RangeError("End date must be >= start date");
    return `${this.format(t)} – ${this.format(r)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(t, r) {
    if (typeof this.numberFormatter.formatRangeToParts == "function")
      return this.numberFormatter.formatRangeToParts(t, r);
    if (r < t)
      throw new RangeError("End date must be >= start date");
    let n = this.numberFormatter.formatToParts(t), a = this.numberFormatter.formatToParts(r);
    return [
      ...n.map((i) => ({
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
    return !Hl && this.options.signDisplay != null && (t = {
      ...t,
      signDisplay: this.options.signDisplay
    }), !di && this.options.style === "unit" && (t = {
      ...t,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), t;
  }
  constructor(t, r = {}) {
    this.numberFormatter = f1(t, r), this.options = r;
  }
}
function f1(e, t = {}) {
  let { numberingSystem: r } = t;
  if (r && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${r}`), t.style === "unit" && !di) {
    var n;
    let { unit: l, unitDisplay: o = "short" } = t;
    if (!l)
      throw new Error('unit option must be provided with style: "unit"');
    if (!(!((n = lc[l]) === null || n === void 0) && n[o]))
      throw new Error(`Unsupported unit ${l} with unitDisplay = ${o}`);
    t = {
      ...t,
      style: "decimal"
    };
  }
  let a = e + (t ? Object.entries(t).sort((l, o) => l[0] < o[0] ? -1 : 1).join() : "");
  if (fl.has(a))
    return fl.get(a);
  let i = new Intl.NumberFormat(e, t);
  return fl.set(a, i), i;
}
function p1(e, t, r) {
  if (t === "auto")
    return e.format(r);
  if (t === "never")
    return e.format(Math.abs(r));
  {
    let n = !1;
    if (t === "always" ? n = r > 0 || Object.is(r, 0) : t === "exceptZero" && (Object.is(r, -0) || Object.is(r, 0) ? r = Math.abs(r) : n = r > 0), n) {
      let a = e.format(-r), i = e.format(r), l = a.replace(i, "").replace(/\u200e|\u061C/, "");
      return [
        ...l
      ].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), a.replace(i, "!!!").replace(l, "+").replace("!!!", i);
    } else
      return e.format(r);
  }
}
const b1 = new RegExp("^.*\\(.*\\).*$"), m1 = [
  "latn",
  "arab",
  "hanidec"
];
class Oo {
  /**
  * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
  */
  parse(t) {
    return pl(this.locale, this.options, t).parse(t);
  }
  /**
  * Returns whether the given string could potentially be a valid number. This should be used to
  * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
  * of the minus/plus sign characters can be checked.
  */
  isValidPartialNumber(t, r, n) {
    return pl(this.locale, this.options, t).isValidPartialNumber(t, r, n);
  }
  /**
  * Returns a numbering system for which the given string is valid in the current locale.
  * If no numbering system could be detected, the default numbering system for the current
  * locale is returned.
  */
  getNumberingSystem(t) {
    return pl(this.locale, this.options, t).options.numberingSystem;
  }
  constructor(t, r = {}) {
    this.locale = t, this.options = r;
  }
}
const bs = /* @__PURE__ */ new Map();
function pl(e, t, r) {
  let n = ms(e, t);
  if (!e.includes("-nu-") && !n.isValidPartialNumber(r)) {
    for (let a of m1)
      if (a !== n.options.numberingSystem) {
        let i = ms(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + a, t);
        if (i.isValidPartialNumber(r))
          return i;
      }
  }
  return n;
}
function ms(e, t) {
  let r = e + (t ? Object.entries(t).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : ""), n = bs.get(r);
  return n || (n = new h1(e, t), bs.set(r, n)), n;
}
class h1 {
  parse(t) {
    let r = this.sanitize(t);
    if (this.symbols.group && (r = Ia(r, this.symbols.group, "")), this.symbols.decimal && (r = r.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (r = r.replace(this.symbols.minusSign, "-")), r = r.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
      let a = r.indexOf("-");
      r = r.replace("-", "");
      let i = r.indexOf(".");
      i === -1 && (i = r.length), r = r.replace(".", ""), i - 2 === 0 ? r = `0.${r}` : i - 2 === -1 ? r = `0.0${r}` : i - 2 === -2 ? r = "0.00" : r = `${r.slice(0, i - 2)}.${r.slice(i - 2)}`, a > -1 && (r = `-${r}`);
    }
    let n = r ? +r : NaN;
    if (isNaN(n))
      return NaN;
    if (this.options.style === "percent") {
      let a = {
        ...this.options,
        style: "decimal",
        minimumFractionDigits: Math.min(this.options.minimumFractionDigits + 2, 20),
        maximumFractionDigits: Math.min(this.options.maximumFractionDigits + 2, 20)
      };
      return new Oo(this.locale, a).parse(new ci(this.locale, a).format(n));
    }
    return this.options.currencySign === "accounting" && b1.test(t) && (n = -1 * n), n;
  }
  sanitize(t) {
    return t = t.replace(this.symbols.literals, ""), this.symbols.minusSign && (t = t.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (t = t.replace(",", this.symbols.decimal), t = t.replace("،", this.symbols.decimal)), this.symbols.group && (t = Ia(t, ".", this.symbols.group))), this.options.locale === "fr-FR" && (t = Ia(t, ".", " ")), t;
  }
  isValidPartialNumber(t, r = -1 / 0, n = 1 / 0) {
    return t = this.sanitize(t), this.symbols.minusSign && t.startsWith(this.symbols.minusSign) && r < 0 ? t = t.slice(this.symbols.minusSign.length) : this.symbols.plusSign && t.startsWith(this.symbols.plusSign) && n > 0 && (t = t.slice(this.symbols.plusSign.length)), this.symbols.group && t.startsWith(this.symbols.group) || this.symbols.decimal && t.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && (t = Ia(t, this.symbols.group, "")), t = t.replace(this.symbols.numeral, ""), this.symbols.decimal && (t = t.replace(this.symbols.decimal, "")), t.length === 0);
  }
  constructor(t, r = {}) {
    this.locale = t, this.formatter = new Intl.NumberFormat(t, r), this.options = this.formatter.resolvedOptions(), this.symbols = g1(t, this.formatter, this.options, r);
    var n, a;
    this.options.style === "percent" && (((n = this.options.minimumFractionDigits) !== null && n !== void 0 ? n : 0) > 18 || ((a = this.options.maximumFractionDigits) !== null && a !== void 0 ? a : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
}
const hs = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]), v1 = [
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
function g1(e, t, r, n) {
  var a, i, l, o;
  let u = new Intl.NumberFormat(e, {
    ...r,
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21
  }), s = u.formatToParts(-10000.111), d = u.formatToParts(10000.111), c = v1.map((T) => u.formatToParts(T));
  var f;
  let p = (f = (a = s.find((T) => T.type === "minusSign")) === null || a === void 0 ? void 0 : a.value) !== null && f !== void 0 ? f : "-", b = (i = d.find((T) => T.type === "plusSign")) === null || i === void 0 ? void 0 : i.value;
  !b && ((n == null ? void 0 : n.signDisplay) === "exceptZero" || (n == null ? void 0 : n.signDisplay) === "always") && (b = "+");
  let h = (l = new Intl.NumberFormat(e, {
    ...r,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(1e-3).find((T) => T.type === "decimal")) === null || l === void 0 ? void 0 : l.value, y = (o = s.find((T) => T.type === "group")) === null || o === void 0 ? void 0 : o.value, $ = s.filter((T) => !hs.has(T.type)).map((T) => vs(T.value)), x = c.flatMap((T) => T.filter((E) => !hs.has(E.type)).map((E) => vs(E.value))), C = [
    .../* @__PURE__ */ new Set([
      ...$,
      ...x
    ])
  ].sort((T, E) => E.length - T.length), w = C.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${C.join("|")}|[\\p{White_Space}]`, "gu"), A = [
    ...new Intl.NumberFormat(r.locale, {
      useGrouping: !1
    }).format(9876543210)
  ].reverse(), M = new Map(A.map((T, E) => [
    T,
    E
  ])), v = new RegExp(`[${A.join("")}]`, "g");
  return {
    minusSign: p,
    plusSign: b,
    decimal: h,
    group: y,
    literals: w,
    numeral: v,
    index: (T) => String(M.get(T))
  };
}
function Ia(e, t, r) {
  return e.replaceAll ? e.replaceAll(t, r) : e.split(t).join(r);
}
function vs(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const $1 = /* @__PURE__ */ new Set([
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
]), y1 = /* @__PURE__ */ new Set([
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
function x1(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n)
      return n.direction === "rtl";
    if (r.script)
      return $1.has(r.script);
  }
  let t = e.split("-")[0];
  return y1.has(t);
}
const D1 = Symbol.for("react-aria.i18n.locale");
function oc() {
  let e = typeof window < "u" && window[D1] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: x1(e) ? "rtl" : "ltr"
  };
}
let Ul = oc(), Rn = /* @__PURE__ */ new Set();
function gs() {
  Ul = oc();
  for (let e of Rn)
    e(Ul);
}
function C1() {
  let e = zt(), [t, r] = Y(Ul);
  return te(() => (Rn.size === 0 && window.addEventListener("languagechange", gs), Rn.add(r), () => {
    Rn.delete(r), Rn.size === 0 && window.removeEventListener("languagechange", gs);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const E1 = /* @__PURE__ */ g.createContext(null);
function be() {
  let e = C1();
  return G(E1) || e;
}
const $s = /* @__PURE__ */ new WeakMap();
function P1(e) {
  let t = $s.get(e);
  return t || (t = new Kr(e), $s.set(e, t)), t;
}
function uc(e, t) {
  return t && Kr.getGlobalDictionaryForPackage(t) || P1(e);
}
function Te(e, t) {
  let { locale: r } = be(), n = uc(e, t);
  return z(() => new Rd(r, n), [
    r,
    n
  ]);
}
function Nt(e) {
  e = xd(e ?? {}, w1);
  let { locale: t } = be();
  return z(() => new Xt(t, e), [
    t,
    e
  ]);
}
function w1(e, t) {
  if (e === t)
    return !0;
  let r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (let a of r)
    if (t[a] !== e[a])
      return !1;
  return !0;
}
function fi(e = {}) {
  let { locale: t } = be();
  return z(() => new ci(t, e), [
    t,
    e
  ]);
}
let bl = /* @__PURE__ */ new Map();
function bn(e) {
  let { locale: t } = be(), r = t + (e ? Object.entries(e).sort((a, i) => a[0] < i[0] ? -1 : 1).join() : "");
  if (bl.has(r))
    return bl.get(r);
  let n = new Intl.Collator(t, e);
  return bl.set(r, n), n;
}
function sc(e) {
  let t = bn({
    usage: "search",
    ...e
  }), r = re((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), t.compare(i.slice(0, l.length), l) === 0), [
    t
  ]), n = re((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), t.compare(i.slice(-l.length), l) === 0), [
    t
  ]), a = re((i, l) => {
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
  return z(() => ({
    startsWith: r,
    endsWith: n,
    contains: a
  }), [
    r,
    n,
    a
  ]);
}
function dc(e, t) {
  let {
    elementType: r = "button",
    isDisabled: n,
    onPress: a,
    onPressStart: i,
    onPressEnd: l,
    onPressUp: o,
    onPressChange: u,
    preventFocusOnPress: s,
    allowFocusWhenDisabled: d,
    // @ts-ignore
    onClick: c,
    href: f,
    target: p,
    rel: b,
    type: m = "button"
  } = e, h;
  r === "button" ? h = {
    type: m,
    disabled: n
  } : h = {
    role: "button",
    tabIndex: n ? void 0 : 0,
    href: r === "a" && n ? void 0 : f,
    target: r === "a" ? p : void 0,
    type: r === "input" ? m : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? b : void 0
  };
  let { pressProps: y, isPressed: $ } = st({
    onPressStart: i,
    onPressEnd: l,
    onPressChange: u,
    onPress: a,
    onPressUp: o,
    isDisabled: n,
    preventFocusOnPress: s,
    ref: t
  }), { focusableProps: x } = Nr(e, t);
  d && (x.tabIndex = n ? -1 : x.tabIndex);
  let C = _(x, y, X(e, {
    labelable: !0
  }));
  return {
    isPressed: $,
    buttonProps: _(h, C, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      onClick: (w) => {
        c && (c(w), console.warn("onClick is deprecated, please use onPress"));
      }
    })
  };
}
function S1(e, t, r) {
  const { isSelected: n } = t, { isPressed: a, buttonProps: i } = dc({
    ...e,
    onPress: Bt(t.toggle, e.onPress)
  }, r);
  return {
    isPressed: a,
    buttonProps: _(i, {
      "aria-pressed": n
    })
  };
}
const cc = 7e3;
let Nn = null;
function hr(e, t = "assertive", r = cc) {
  Nn || (Nn = new k1()), Nn.announce(e, t, r);
}
function B1(e) {
  Nn && Nn.clear(e);
}
class k1 {
  createLog(t) {
    let r = document.createElement("div");
    return r.setAttribute("role", "log"), r.setAttribute("aria-live", t), r.setAttribute("aria-relevant", "additions"), r;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(t, r = "assertive", n = cc) {
    if (!this.node)
      return;
    let a = document.createElement("div");
    a.textContent = t, r === "assertive" ? this.assertiveLog.appendChild(a) : this.politeLog.appendChild(a), t !== "" && setTimeout(() => {
      a.remove();
    }, n);
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
function Bi(e) {
  return e && e.__esModule ? e.default : e;
}
var ua = {}, fc = {};
fc = {
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
var pc = {};
pc = {
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
var bc = {};
bc = {
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
var mc = {};
mc = {
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
var hc = {};
hc = {
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
var vc = {};
vc = {
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
var gc = {};
gc = {
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
var $c = {};
$c = {
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
var yc = {};
yc = {
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
var xc = {};
xc = {
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
var Dc = {};
Dc = {
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
var Cc = {};
Cc = {
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
var Ec = {};
Ec = {
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
var Pc = {};
Pc = {
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
var wc = {};
wc = {
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
var Sc = {};
Sc = {
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
var Bc = {};
Bc = {
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
var kc = {};
kc = {
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
var Fc = {};
Fc = {
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
var Ac = {};
Ac = {
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
var Tc = {};
Tc = {
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
var Rc = {};
Rc = {
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
var Mc = {};
Mc = {
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
var Ic = {};
Ic = {
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
var Nc = {};
Nc = {
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
var Kc = {};
Kc = {
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
var zc = {};
zc = {
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
var Vc = {};
Vc = {
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
var Lc = {};
Lc = {
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
var Oc = {};
Oc = {
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
var jc = {};
jc = {
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
var _c = {};
_c = {
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
var Hc = {};
Hc = {
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
var Uc = {};
Uc = {
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
ua = {
  "ar-AE": fc,
  "bg-BG": pc,
  "cs-CZ": bc,
  "da-DK": mc,
  "de-DE": hc,
  "el-GR": vc,
  "en-US": gc,
  "es-ES": $c,
  "et-EE": yc,
  "fi-FI": xc,
  "fr-FR": Dc,
  "he-IL": Cc,
  "hr-HR": Ec,
  "hu-HU": Pc,
  "it-IT": wc,
  "ja-JP": Sc,
  "ko-KR": Bc,
  "lt-LT": kc,
  "lv-LV": Fc,
  "nb-NO": Ac,
  "nl-NL": Tc,
  "pl-PL": Rc,
  "pt-BR": Mc,
  "pt-PT": Ic,
  "ro-RO": Nc,
  "ru-RU": Kc,
  "sk-SK": zc,
  "sl-SI": Vc,
  "sr-SP": Lc,
  "sv-SE": Oc,
  "tr-TR": jc,
  "uk-UA": _c,
  "zh-CN": Hc,
  "zh-TW": Uc
};
const jo = /* @__PURE__ */ new WeakMap();
function _n(e) {
  return (e == null ? void 0 : e.calendar.identifier) === "gregory" && e.era === "BC" ? "short" : void 0;
}
function F1(e) {
  let t = Te(/* @__PURE__ */ Bi(ua), "@react-aria/calendar"), r, n;
  "highlightedRange" in e ? { start: r, end: n } = e.highlightedRange || {} : r = n = e.value;
  let a = Nt({
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    era: _n(r) || _n(n),
    timeZone: e.timeZone
  }), i = "anchorDate" in e ? e.anchorDate : null;
  return z(() => {
    if (!i && r && n)
      if (Le(r, n)) {
        let l = a.format(r.toDate(e.timeZone));
        return t.format("selectedDateDescription", {
          date: l
        });
      } else {
        let l = Gl(a, t, r, n, e.timeZone);
        return t.format("selectedRangeDescription", {
          dateRange: l
        });
      }
    return "";
  }, [
    r,
    n,
    i,
    e.timeZone,
    t,
    a
  ]);
}
function Wl(e, t, r, n) {
  let a = Te(/* @__PURE__ */ Bi(ua), "@react-aria/calendar"), i = _n(e) || _n(t), l = Nt({
    month: "long",
    year: "numeric",
    era: i,
    calendar: e.calendar.identifier,
    timeZone: r
  }), o = Nt({
    month: "long",
    year: "numeric",
    day: "numeric",
    era: i,
    calendar: e.calendar.identifier,
    timeZone: r
  });
  return z(() => {
    if (Le(e, Rr(e))) {
      if (Le(t, ai(e)))
        return l.format(e.toDate(r));
      if (Le(t, ai(t)))
        return n ? Gl(l, a, e, t, r) : l.formatRange(e.toDate(r), t.toDate(r));
    }
    return n ? Gl(o, a, e, t, r) : o.formatRange(e.toDate(r), t.toDate(r));
  }, [
    e,
    t,
    l,
    o,
    a,
    r,
    n
  ]);
}
function Gl(e, t, r, n, a) {
  let i = e.formatRangeToParts(r.toDate(a), n.toDate(a)), l = -1;
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
function Wc(e, t) {
  let r = Te(/* @__PURE__ */ Bi(ua), "@react-aria/calendar"), n = X(e), a = Wl(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1), i = Wl(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
  qa(() => {
    t.isFocused || hr(i);
  }, [
    i
  ]);
  let l = F1(t);
  qa(() => {
    l && hr(l, "polite", 4e3);
  }, [
    l
  ]);
  let o = Kt([
    !!e.errorMessage,
    e.isInvalid,
    e.validationState
  ]);
  jo.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: e["aria-labelledby"],
    errorMessageId: o,
    selectedDateDescription: l
  });
  let [u, s] = Y(!1), d = e.isDisabled || t.isNextVisibleRangeInvalid();
  d && u && (s(!1), t.setFocused(!0));
  let [c, f] = Y(!1), p = e.isDisabled || t.isPreviousVisibleRangeInvalid();
  p && c && (f(!1), t.setFocused(!0));
  let b = er({
    id: e.id,
    "aria-label": [
      e["aria-label"],
      i
    ].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: _(n, b, {
      role: "application",
      "aria-describedby": e["aria-describedby"] || void 0
    }),
    nextButtonProps: {
      onPress: () => t.focusNextPage(),
      "aria-label": r.format("next"),
      isDisabled: d,
      onFocusChange: s
    },
    prevButtonProps: {
      onPress: () => t.focusPreviousPage(),
      "aria-label": r.format("previous"),
      isDisabled: p,
      onFocusChange: f
    },
    errorMessageProps: {
      id: o
    },
    title: a
  };
}
function A1(e, t) {
  return Wc(e, t);
}
function T1(e, t, r) {
  let n = Wc(e, t), a = N(!1), i = N(typeof window < "u" ? window : null);
  pr(i, "pointerdown", (o) => {
    a.current = o.width === 0 && o.height === 0;
  });
  let l = (o) => {
    if (a.current) {
      a.current = !1;
      return;
    }
    if (t.setDragging(!1), !t.anchorDate)
      return;
    let u = o.target, s = document.getElementById(n.calendarProps.id);
    s && s.contains(document.activeElement) && (!s.contains(u) || !u.closest('button, [role="button"]')) && t.selectFocusedDate();
  };
  return pr(i, "pointerup", l), pr(i, "pointercancel", l), n.calendarProps.onBlur = (o) => {
    (!o.relatedTarget || !r.current.contains(o.relatedTarget)) && t.anchorDate && t.selectFocusedDate();
  }, pr(r, "touchmove", (o) => {
    t.isDragging && o.preventDefault();
  }, {
    passive: !1,
    capture: !0
  }), n;
}
function R1(e, t) {
  let { startDate: r = t.visibleRange.start, endDate: n = t.visibleRange.end } = e, { direction: a } = be(), i = (p) => {
    switch (p.key) {
      case "Enter":
      case " ":
        p.preventDefault(), t.selectFocusedDate();
        break;
      case "PageUp":
        p.preventDefault(), p.stopPropagation(), t.focusPreviousSection(p.shiftKey);
        break;
      case "PageDown":
        p.preventDefault(), p.stopPropagation(), t.focusNextSection(p.shiftKey);
        break;
      case "End":
        p.preventDefault(), p.stopPropagation(), t.focusSectionEnd();
        break;
      case "Home":
        p.preventDefault(), p.stopPropagation(), t.focusSectionStart();
        break;
      case "ArrowLeft":
        p.preventDefault(), p.stopPropagation(), a === "rtl" ? t.focusNextDay() : t.focusPreviousDay();
        break;
      case "ArrowUp":
        p.preventDefault(), p.stopPropagation(), t.focusPreviousRow();
        break;
      case "ArrowRight":
        p.preventDefault(), p.stopPropagation(), a === "rtl" ? t.focusPreviousDay() : t.focusNextDay();
        break;
      case "ArrowDown":
        p.preventDefault(), p.stopPropagation(), t.focusNextRow();
        break;
      case "Escape":
        "setAnchorDate" in t && (p.preventDefault(), t.setAnchorDate(null));
        break;
    }
  }, l = Wl(r, n, t.timeZone, !0), { ariaLabel: o, ariaLabelledBy: u } = jo.get(t), s = er({
    "aria-label": [
      o,
      l
    ].filter(Boolean).join(", "),
    "aria-labelledby": u
  }), d = Nt({
    weekday: e.weekdayStyle || "narrow",
    timeZone: t.timeZone
  }), { locale: c } = be(), f = z(() => {
    let p = Ln(Pi(t.timeZone), c);
    return [
      ...new Array(7).keys()
    ].map((b) => {
      let h = p.add({
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
    gridProps: _(s, {
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
    weekDays: f
  };
}
function M1(e, t, r) {
  let { date: n, isDisabled: a } = e, { errorMessageId: i, selectedDateDescription: l } = jo.get(t), o = Te(/* @__PURE__ */ Bi(ua), "@react-aria/calendar"), u = Nt({
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    era: _n(n),
    timeZone: t.timeZone
  }), s = t.isSelected(n), d = t.isCellFocused(n);
  a = a || t.isCellDisabled(n);
  let c = t.isCellUnavailable(n), f = !a && !c, p = t.isValueInvalid && ("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && n.compare(t.highlightedRange.start) >= 0 && n.compare(t.highlightedRange.end) <= 0 : t.value && Le(t.value, n));
  p && (s = !0), n = xd(n, Kl);
  let b = z(() => n.toDate(t.timeZone), [
    n,
    t.timeZone
  ]), m = gy(n, t.timeZone), h = z(() => {
    let E = "";
    return "highlightedRange" in t && t.value && !t.anchorDate && (Le(n, t.value.start) || Le(n, t.value.end)) && (E = l + ", "), E += u.format(b), m ? E = o.format(s ? "todayDateSelected" : "todayDate", {
      date: E
    }) : s && (E = o.format("dateSelected", {
      date: E
    })), t.minValue && Le(n, t.minValue) ? E += ", " + o.format("minimumDate") : t.maxValue && Le(n, t.maxValue) && (E += ", " + o.format("maximumDate")), E;
  }, [
    u,
    b,
    o,
    s,
    m,
    n,
    t,
    l
  ]), y = "";
  "anchorDate" in t && d && !t.isReadOnly && f && (t.anchorDate ? y = o.format("finishRangeSelectionPrompt") : y = o.format("startRangeSelectionPrompt"));
  let $ = Vt(y), x = N(!1), C = N(!1), w = N(null), { pressProps: A, isPressed: M } = st({
    // When dragging to select a range, we don't want dragging over the original anchor
    // again to trigger onPressStart. Cancel presses immediately when the pointer exits.
    shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
    preventFocusOnPress: !0,
    isDisabled: !f || t.isReadOnly,
    onPressStart(E) {
      if (t.isReadOnly) {
        t.setFocusedDate(n);
        return;
      }
      if ("highlightedRange" in t && !t.anchorDate && (E.pointerType === "mouse" || E.pointerType === "touch")) {
        if (t.highlightedRange && !p) {
          if (Le(n, t.highlightedRange.start)) {
            t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(n), t.setDragging(!0), C.current = !0;
            return;
          } else if (Le(n, t.highlightedRange.end)) {
            t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(n), t.setDragging(!0), C.current = !0;
            return;
          }
        }
        let B = () => {
          t.setDragging(!0), w.current = null, t.selectDate(n), t.setFocusedDate(n), x.current = !0;
        };
        E.pointerType === "touch" ? w.current = setTimeout(B, 200) : B();
      }
    },
    onPressEnd() {
      C.current = !1, x.current = !1, clearTimeout(w.current), w.current = null;
    },
    onPress() {
      !("anchorDate" in t) && !t.isReadOnly && (t.selectDate(n), t.setFocusedDate(n));
    },
    onPressUp(E) {
      if (!t.isReadOnly && ("anchorDate" in t && w.current && (t.selectDate(n), t.setFocusedDate(n)), "anchorDate" in t))
        if (C.current)
          t.setAnchorDate(n);
        else if (t.anchorDate && !x.current)
          t.selectDate(n), t.setFocusedDate(n);
        else if (E.pointerType === "keyboard" && !t.anchorDate) {
          t.selectDate(n);
          let B = n.add({
            days: 1
          });
          t.isInvalid(B) && (B = n.subtract({
            days: 1
          })), t.isInvalid(B) || t.setFocusedDate(B);
        } else
          E.pointerType === "virtual" && (t.selectDate(n), t.setFocusedDate(n));
    }
  }), v = null;
  a || (v = Le(n, t.focusedDate) ? 0 : -1), te(() => {
    d && r.current && (St(r.current), Qa() !== "pointer" && document.activeElement === r.current && Xe(r.current, {
      containingElement: Ge(r.current)
    }));
  }, [
    d,
    r
  ]);
  let I = Nt({
    day: "numeric",
    timeZone: t.timeZone,
    calendar: n.calendar.identifier
  }), T = z(() => I.formatToParts(b).find((E) => E.type === "day").value, [
    I,
    b
  ]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !f || null,
      "aria-selected": s || null,
      "aria-invalid": p || null
    },
    buttonProps: _(A, {
      onFocus() {
        a || t.setFocusedDate(n);
      },
      tabIndex: v,
      role: "button",
      "aria-disabled": !f || null,
      "aria-label": h,
      "aria-invalid": p || null,
      "aria-describedby": [
        p ? i : null,
        $["aria-describedby"]
      ].filter(Boolean).join(" ") || void 0,
      onPointerEnter(E) {
        "highlightDate" in t && (E.pointerType !== "touch" || t.isDragging) && f && t.highlightDate(n);
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
    isOutsideVisibleRange: n.compare(t.visibleRange.start) < 0 || n.compare(t.visibleRange.end) > 0,
    isInvalid: p,
    formattedDate: T
  };
}
function sa(e, t, r) {
  let { validationBehavior: n, focus: a } = e;
  ge(() => {
    if (n === "native" && (r != null && r.current)) {
      let u = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      r.current.setCustomValidity(u), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(N1(r.current));
    }
  });
  let i = Be(() => {
    t.resetValidation();
  }), l = Be((u) => {
    var s;
    t.displayValidation.isInvalid || t.commitValidation();
    let d = r == null || (s = r.current) === null || s === void 0 ? void 0 : s.form;
    if (!u.defaultPrevented && r && d && K1(d) === r.current) {
      var c;
      a ? a() : (c = r.current) === null || c === void 0 || c.focus(), Eo("keyboard");
    }
    u.preventDefault();
  }), o = Be(() => {
    t.commitValidation();
  });
  te(() => {
    let u = r == null ? void 0 : r.current;
    if (!u)
      return;
    let s = u.form;
    return u.addEventListener("invalid", l), u.addEventListener("change", o), s == null || s.addEventListener("reset", i), () => {
      u.removeEventListener("invalid", l), u.removeEventListener("change", o), s == null || s.removeEventListener("reset", i);
    };
  }, [
    r,
    l,
    o,
    i,
    n
  ]);
}
function I1(e) {
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
function N1(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: I1(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function K1(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let r = e.elements[t];
    if (!r.validity.valid)
      return r;
  }
  return null;
}
const ki = {
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
}, Gc = {
  ...ki,
  customError: !0,
  valid: !1
}, fr = {
  isInvalid: !1,
  validationDetails: ki,
  validationErrors: []
}, Zc = Z({}), vr = "__formValidationState" + Date.now();
function At(e) {
  if (e[vr]) {
    let { realtimeValidation: t, displayValidation: r, updateValidation: n, resetValidation: a, commitValidation: i } = e[vr];
    return {
      realtimeValidation: t,
      displayValidation: r,
      updateValidation: n,
      resetValidation: a,
      commitValidation: i
    };
  }
  return z1(e);
}
function z1(e) {
  let { isInvalid: t, validationState: r, name: n, value: a, builtinValidation: i, validate: l, validationBehavior: o = "aria" } = e;
  r && (t || (t = r === "invalid"));
  let u = t ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: Gc
  } : null, s = z(() => ys(V1(l, a)), [
    l,
    a
  ]);
  i != null && i.validationDetails.valid && (i = null);
  let d = G(Zc), c = z(() => n ? Array.isArray(n) ? n.flatMap((T) => Zl(d[T])) : Zl(d[n]) : [], [
    d,
    n
  ]), [f, p] = Y(d), [b, m] = Y(!1);
  d !== f && (p(d), m(!1));
  let h = z(() => ys(b ? [] : c), [
    b,
    c
  ]), y = N(fr), [$, x] = Y(fr), C = N(fr), w = () => {
    if (!A)
      return;
    M(!1);
    let T = s || i || y.current;
    ml(T, C.current) || (C.current = T, x(T));
  }, [A, M] = Y(!1);
  return te(w), {
    realtimeValidation: u || h || s || i || fr,
    displayValidation: o === "native" ? u || h || $ : u || h || s || i || $,
    updateValidation(T) {
      o === "aria" && !ml($, T) ? x(T) : y.current = T;
    },
    resetValidation() {
      let T = fr;
      ml(T, C.current) || (C.current = T, x(T)), o === "native" && M(!1), m(!0);
    },
    commitValidation() {
      o === "native" && M(!0), m(!0);
    }
  };
}
function Zl(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function V1(e, t) {
  if (typeof e == "function") {
    let r = e(t);
    if (r && typeof r != "boolean")
      return Zl(r);
  }
  return [];
}
function ys(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: Gc
  } : null;
}
function ml(e, t) {
  return e === t ? !0 : e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((r, n) => r === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([r, n]) => t.validationDetails[r] === n);
}
function Hn(...e) {
  let t = /* @__PURE__ */ new Set(), r = !1, n = {
    ...ki
  };
  for (let l of e) {
    var a, i;
    for (let o of l.validationErrors)
      t.add(o);
    r || (r = l.isInvalid);
    for (let o in n)
      (a = n)[i = o] || (a[i] = l.validationDetails[o]);
  }
  return n.valid = !r, {
    isInvalid: r,
    validationErrors: [
      ...t
    ],
    validationDetails: n
  };
}
function qc(e, t, r) {
  let { isDisabled: n = !1, isReadOnly: a = !1, value: i, name: l, children: o, "aria-label": u, "aria-labelledby": s, validationState: d = "valid", isInvalid: c } = e, f = (A) => {
    A.stopPropagation(), t.setSelected(A.target.checked);
  }, p = o != null, b = u != null || s != null;
  !p && !b && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: m, isPressed: h } = st({
    isDisabled: n
  }), { pressProps: y, isPressed: $ } = st({
    isDisabled: n || a,
    onPress() {
      t.toggle();
    }
  }), { focusableProps: x } = Nr(e, r), C = _(m, x), w = X(e, {
    labelable: !0
  });
  return Ir(r, t.isSelected, t.setSelected), {
    labelProps: _(y, {
      onClick: (A) => A.preventDefault()
    }),
    inputProps: _(w, {
      "aria-invalid": c || d === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": a || void 0,
      onChange: f,
      disabled: n,
      ...i == null ? {} : {
        value: i
      },
      name: l,
      type: "checkbox",
      ...C
    }),
    isSelected: t.isSelected,
    isPressed: h || $,
    isDisabled: n,
    isReadOnly: a,
    isInvalid: c || d === "invalid"
  };
}
function da(e) {
  let { id: t, label: r, "aria-labelledby": n, "aria-label": a, labelElementType: i = "label" } = e;
  t = ye(t);
  let l = ye(), o = {};
  r ? (n = n ? `${l} ${n}` : l, o = {
    id: l,
    htmlFor: i === "label" ? t : void 0
  }) : !n && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let u = er({
    id: t,
    "aria-label": a,
    "aria-labelledby": n
  });
  return {
    labelProps: o,
    fieldProps: u
  };
}
function $r(e) {
  let { description: t, errorMessage: r, isInvalid: n, validationState: a } = e, { labelProps: i, fieldProps: l } = da(e), o = Kt([
    !!t,
    !!r,
    n,
    a
  ]), u = Kt([
    !!t,
    !!r,
    n,
    a
  ]);
  return l = _(l, {
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
function Fi(e = {}) {
  let { isReadOnly: t } = e, [r, n] = We(e.isSelected, e.defaultSelected || !1, e.onChange);
  function a(l) {
    t || n(l);
  }
  function i() {
    t || n(!r);
  }
  return {
    isSelected: r,
    setSelected: a,
    toggle: i
  };
}
function Yc(e, t, r) {
  let n = At({
    ...e,
    value: t.isSelected
  }), { isInvalid: a, validationErrors: i, validationDetails: l } = n.displayValidation, { labelProps: o, inputProps: u, isSelected: s, isPressed: d, isDisabled: c, isReadOnly: f } = qc({
    ...e,
    isInvalid: a
  }, t, r);
  sa(e, n, r);
  let { isIndeterminate: p, isRequired: b, validationBehavior: m = "aria" } = e;
  return te(() => {
    r.current && (r.current.indeterminate = !!p);
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
    isReadOnly: f,
    isInvalid: a,
    validationErrors: i,
    validationDetails: l
  };
}
const Jc = /* @__PURE__ */ new WeakMap();
function L1(e, t) {
  let { isDisabled: r, name: n, validationBehavior: a = "aria" } = e, { isInvalid: i, validationErrors: l, validationDetails: o } = t.displayValidation, { labelProps: u, fieldProps: s, descriptionProps: d, errorMessageProps: c } = $r({
    ...e,
    // Checkbox group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: i,
    errorMessage: e.errorMessage || l
  });
  Jc.set(t, {
    name: n,
    descriptionId: d.id,
    errorMessageId: c.id,
    validationBehavior: a
  });
  let f = X(e, {
    labelable: !0
  }), { focusWithinProps: p } = Ft({
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  });
  return {
    groupProps: _(f, {
      role: "group",
      "aria-disabled": r || void 0,
      ...s,
      ...p
    }),
    labelProps: u,
    descriptionProps: d,
    errorMessageProps: c,
    isInvalid: i,
    validationErrors: l,
    validationDetails: o
  };
}
function O1(e, t, r) {
  const n = Fi({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    onChange(h) {
      h ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(h);
    }
  });
  let { name: a, descriptionId: i, errorMessageId: l, validationBehavior: o } = Jc.get(t);
  var u;
  o = (u = e.validationBehavior) !== null && u !== void 0 ? u : o;
  let { realtimeValidation: s } = At({
    ...e,
    value: n.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), d = N(fr), c = () => {
    t.setInvalid(e.value, s.isInvalid ? s : d.current);
  };
  te(c);
  let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : s, p = o === "native" ? t.displayValidation : f;
  var b;
  let m = Yc({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || a,
    isRequired: (b = e.isRequired) !== null && b !== void 0 ? b : t.isRequired,
    validationBehavior: o,
    [vr]: {
      realtimeValidation: f,
      displayValidation: p,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(h) {
        d.current = h, c();
      }
    }
  }, n, r);
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
const xs = {
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
function ar(e = {}) {
  let { style: t, isFocusable: r } = e, [n, a] = Y(!1), { focusWithinProps: i } = Ft({
    isDisabled: !r,
    onFocusWithinChange: (o) => a(o)
  }), l = z(() => n ? t : t ? {
    ...xs,
    ...t
  } : xs, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: l
    }
  };
}
function rr(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: a, ...i } = e, { visuallyHiddenProps: l } = ar(e);
  return /* @__PURE__ */ g.createElement(r, _(i, l), t);
}
function j1(e) {
  return e && e.__esModule ? e.default : e;
}
const en = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, pi = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, _1 = {
  top: "left",
  left: "top"
}, ql = {
  top: "height",
  left: "width"
}, Xc = {
  width: "totalWidth",
  height: "totalHeight"
}, Na = {};
let it = typeof document < "u" && window.visualViewport;
function Ds(e) {
  let t = 0, r = 0, n = 0, a = 0, i = 0, l = 0, o = {}, u = (it == null ? void 0 : it.scale) > 1;
  if (e.tagName === "BODY") {
    let c = document.documentElement;
    n = c.clientWidth, a = c.clientHeight;
    var s;
    t = (s = it == null ? void 0 : it.width) !== null && s !== void 0 ? s : n;
    var d;
    r = (d = it == null ? void 0 : it.height) !== null && d !== void 0 ? d : a, o.top = c.scrollTop || e.scrollTop, o.left = c.scrollLeft || e.scrollLeft, it && (i = it.offsetTop, l = it.offsetLeft);
  } else
    ({ width: t, height: r, top: i, left: l } = un(e)), o.top = e.scrollTop, o.left = e.scrollLeft, n = t, a = r;
  return yo() && (e.tagName === "BODY" || e.tagName === "HTML") && u && (o.top = 0, o.left = 0, i = it.pageTop, l = it.pageLeft), {
    width: t,
    height: r,
    totalWidth: n,
    totalHeight: a,
    scroll: o,
    top: i,
    left: l
  };
}
function H1(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function Cs(e, t, r, n, a, i, l) {
  let o = a.scroll[e], u = n[ql[e]], s = n.scroll[en[e]] + i, d = u + n.scroll[en[e]] - i, c = t - o + l[e] - n[en[e]], f = t - o + r + l[e] - n[en[e]];
  return c < s ? s - c : f > d ? Math.max(d - f, s - c) : 0;
}
function U1(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function Es(e) {
  if (Na[e])
    return Na[e];
  let [t, r] = e.split(" "), n = en[t] || "right", a = _1[n];
  en[r] || (r = "center");
  let i = ql[n], l = ql[a];
  return Na[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: a,
    size: i,
    crossSize: l
  }, Na[e];
}
function hl(e, t, r, n, a, i, l, o, u, s) {
  let { placement: d, crossPlacement: c, axis: f, crossAxis: p, size: b, crossSize: m } = n, h = {};
  h[p] = e[p], c === "center" ? h[p] += (e[m] - r[m]) / 2 : c !== p && (h[p] += e[m] - r[m]), h[p] += i;
  const y = e[p] - r[m] + u + s, $ = e[p] + e[m] - u - s;
  if (h[p] = $t(h[p], y, $), d === f) {
    const x = o ? l[b] : t[Xc[b]];
    h[pi[f]] = Math.floor(x - e[f] + a);
  } else
    h[f] = Math.floor(e[f] + e[b] + a);
  return h;
}
function W1(e, t, r, n, a, i, l, o) {
  const u = n ? r.height : t[Xc.height];
  let s = e.top != null ? r.top + e.top : r.top + (u - e.bottom - l), d = o !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + t.scroll.top - s - (a.top + a.bottom + i))
  ) : Math.max(0, s + l - (t.top + t.scroll.top) - (a.top + a.bottom + i));
  return Math.min(t.height - i * 2, d);
}
function Ps(e, t, r, n, a, i) {
  let { placement: l, axis: o, size: u } = i;
  return l === o ? Math.max(0, r[o] - e[o] - e.scroll[o] + t[o] - n[o] - n[pi[o]] - a) : Math.max(0, e[u] + e[o] + e.scroll[o] - t[o] - r[o] - r[u] - n[o] - n[pi[o]] - a);
}
function G1(e, t, r, n, a, i, l, o, u, s, d, c, f, p, b, m) {
  let h = Es(e), { size: y, crossAxis: $, crossSize: x, placement: C, crossPlacement: w } = h, A = hl(t, o, r, h, d, c, s, f, b, m), M = d, v = Ps(o, s, t, a, i + d, h);
  if (l && n[y] > v) {
    let U = Es(`${pi[C]} ${w}`), O = hl(t, o, r, U, d, c, s, f, b, m);
    Ps(o, s, t, a, i + d, U) > v && (h = U, A = O, M = d);
  }
  let I = "bottom";
  h.axis === "top" ? h.placement === "top" ? I = "top" : h.placement === "bottom" && (I = "bottom") : h.crossAxis === "top" && (h.crossPlacement === "top" ? I = "bottom" : h.crossPlacement === "bottom" && (I = "top"));
  let T = Cs($, A[$], r[x], o, u, i, s);
  A[$] += T;
  let E = W1(A, o, s, f, a, i, r.height, I);
  p && p < E && (E = p), r.height = Math.min(r.height, E), A = hl(t, o, r, h, M, c, s, f, b, m), T = Cs($, A[$], r[x], o, u, i, s), A[$] += T;
  let B = {}, S = t[$] + 0.5 * t[x] - r[$];
  const F = b / 2 + m, V = r[x] - b / 2 - m, R = t[$] - r[$] + b / 2, D = t[$] + t[x] - r[$] - b / 2, H = $t(S, R, D);
  return B[$] = $t(H, F, V), {
    position: A,
    maxHeight: E,
    arrowOffsetLeft: B.left,
    arrowOffsetTop: B.top,
    placement: h.placement
  };
}
function Z1(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: a, padding: i, shouldFlip: l, boundaryElement: o, offset: u, crossOffset: s, maxHeight: d, arrowSize: c = 0, arrowBoundaryOffset: f = 0 } = e, p = n instanceof HTMLElement ? q1(n) : document.documentElement, b = p === document.documentElement;
  const m = window.getComputedStyle(p).position;
  let h = !!m && m !== "static", y = b ? un(r) : ws(r, p);
  if (!b) {
    let { marginTop: v, marginLeft: I } = window.getComputedStyle(r);
    y.top += parseInt(v, 10) || 0, y.left += parseInt(I, 10) || 0;
  }
  let $ = un(n), x = U1(n);
  $.width += x.left + x.right, $.height += x.top + x.bottom;
  let C = H1(a), w = Ds(o), A = Ds(p), M = o.tagName === "BODY" ? un(p) : ws(p, o);
  return p.tagName === "HTML" && o.tagName === "BODY" && (A.scroll.top = 0, A.scroll.left = 0), G1(t, y, $, C, x, i, l, w, A, M, u, s, h, d, c, f);
}
function un(e) {
  let { top: t, left: r, width: n, height: a } = e.getBoundingClientRect(), { scrollTop: i, scrollLeft: l, clientTop: o, clientLeft: u } = document.documentElement;
  return {
    top: t + i - o,
    left: r + l - u,
    width: n,
    height: a
  };
}
function ws(e, t) {
  let r = window.getComputedStyle(e), n;
  if (r.position === "fixed") {
    let { top: a, left: i, width: l, height: o } = e.getBoundingClientRect();
    n = {
      top: a,
      left: i,
      width: l,
      height: o
    };
  } else {
    n = un(e);
    let a = un(t), i = window.getComputedStyle(t);
    a.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, a.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= a.top, n.left -= a.left;
  }
  return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n;
}
function q1(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Ss(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !Ss(t); )
      t = t.parentElement;
  return t || document.documentElement;
}
function Ss(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || // @ts-ignore
  "backdropFilter" in t && t.backdropFilter !== "none" || // @ts-ignore
  "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const Qc = /* @__PURE__ */ new WeakMap();
function Y1(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  te(() => {
    if (!r || n === null)
      return;
    let a = (i) => {
      let l = i.target;
      if (!t.current || l instanceof Node && !l.contains(t.current))
        return;
      let o = n || Qc.get(t.current);
      o && o();
    };
    return window.addEventListener("scroll", a, !0), () => {
      window.removeEventListener("scroll", a, !0);
    };
  }, [
    r,
    n,
    t
  ]);
}
let Ke = typeof document < "u" && window.visualViewport;
function ef(e) {
  let { direction: t } = be(), { arrowSize: r = 0, targetRef: n, overlayRef: a, scrollRef: i = a, placement: l = "bottom", containerPadding: o = 12, shouldFlip: u = !0, boundaryElement: s = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: c = 0, shouldUpdatePosition: f = !0, isOpen: p = !0, onClose: b, maxHeight: m, arrowBoundaryOffset: h = 0 } = e, [y, $] = Y({
    position: {},
    arrowOffsetLeft: void 0,
    arrowOffsetTop: void 0,
    maxHeight: void 0,
    placement: void 0
  }), x = [
    f,
    l,
    a.current,
    n.current,
    i.current,
    o,
    u,
    s,
    d,
    c,
    p,
    t,
    m,
    h,
    r
  ], C = N(Ke == null ? void 0 : Ke.scale);
  te(() => {
    p && (C.current = Ke == null ? void 0 : Ke.scale);
  }, [
    p
  ]);
  let w = re(() => {
    if (f === !1 || !p || !a.current || !n.current || !i.current || !s || (Ke == null ? void 0 : Ke.scale) !== C.current)
      return;
    !m && a.current && (a.current.style.maxHeight = "none");
    let v = Z1({
      placement: X1(l, t),
      overlayNode: a.current,
      targetNode: n.current,
      scrollNode: i.current,
      padding: o,
      shouldFlip: u,
      boundaryElement: s,
      offset: d,
      crossOffset: c,
      maxHeight: m,
      arrowSize: r,
      arrowBoundaryOffset: h
    });
    Object.keys(v.position).forEach((I) => a.current.style[I] = v.position[I] + "px"), a.current.style.maxHeight = v.maxHeight != null ? v.maxHeight + "px" : void 0, $(v);
  }, x);
  ge(w, x), J1(w), ta({
    ref: a,
    onResize: w
  });
  let A = N(!1);
  ge(() => {
    let v, I = () => {
      A.current = !0, clearTimeout(v), v = setTimeout(() => {
        A.current = !1;
      }, 500), w();
    }, T = () => {
      A.current && I();
    };
    return Ke == null || Ke.addEventListener("resize", I), Ke == null || Ke.addEventListener("scroll", T), () => {
      Ke == null || Ke.removeEventListener("resize", I), Ke == null || Ke.removeEventListener("scroll", T);
    };
  }, [
    w
  ]);
  let M = re(() => {
    A.current || b();
  }, [
    b,
    A
  ]);
  return Y1({
    triggerRef: n,
    isOpen: p,
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
    updatePosition: w
  };
}
function J1(e) {
  ge(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function X1(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
const Ut = [];
function tf(e, t) {
  let { onClose: r, shouldCloseOnBlur: n, isOpen: a, isDismissable: i = !1, isKeyboardDismissDisabled: l = !1, shouldCloseOnInteractOutside: o } = e;
  te(() => (a && Ut.push(t), () => {
    let b = Ut.indexOf(t);
    b >= 0 && Ut.splice(b, 1);
  }), [
    a,
    t
  ]);
  let u = () => {
    Ut[Ut.length - 1] === t && r && r();
  }, s = (b) => {
    (!o || o(b.target)) && Ut[Ut.length - 1] === t && (b.stopPropagation(), b.preventDefault());
  }, d = (b) => {
    (!o || o(b.target)) && (Ut[Ut.length - 1] === t && (b.stopPropagation(), b.preventDefault()), u());
  }, c = (b) => {
    b.key === "Escape" && !l && (b.stopPropagation(), b.preventDefault(), u());
  };
  kd({
    ref: t,
    onInteractOutside: i && a ? d : null,
    onInteractOutsideStart: s
  });
  let { focusWithinProps: f } = Ft({
    isDisabled: !n,
    onBlurWithin: (b) => {
      !b.relatedTarget || ny(b.relatedTarget) || (!o || o(b.relatedTarget)) && r();
    }
  }), p = (b) => {
    b.target === b.currentTarget && b.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: c,
      ...f
    },
    underlayProps: {
      onPointerDown: p
    }
  };
}
function Q1(e, t, r) {
  let { type: n } = e, { isOpen: a } = t;
  te(() => {
    r && r.current && Qc.set(r.current, t.close);
  });
  let i;
  n === "menu" ? i = !0 : n === "listbox" && (i = "listbox");
  let l = ye();
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
const vl = typeof document < "u" && window.visualViewport, e5 = /* @__PURE__ */ new Set([
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
let Ka = 0, gl;
function rf(e = {}) {
  let { isDisabled: t } = e;
  ge(() => {
    if (!t)
      return Ka++, Ka === 1 && (fn() ? gl = r5() : gl = t5()), () => {
        Ka--, Ka === 0 && gl();
      };
  }, [
    t
  ]);
}
function t5() {
  return Bt(tn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), tn(document.documentElement, "overflow", "hidden"));
}
function r5() {
  let e, t, r = (s) => {
    e = Ge(s.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = tn(e, "overscrollBehavior", "contain"));
  }, n = (s) => {
    if (!e || e === document.documentElement || e === document.body) {
      s.preventDefault();
      return;
    }
    e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && s.preventDefault();
  }, a = (s) => {
    let d = s.target;
    ks(d) && d !== document.activeElement && (s.preventDefault(), o(), d.style.transform = "translateY(-2000px)", d.focus(), requestAnimationFrame(() => {
      d.style.transform = "";
    })), t && t();
  }, i = (s) => {
    let d = s.target;
    ks(d) && (o(), d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", vl && (vl.height < window.innerHeight ? requestAnimationFrame(() => {
        Bs(d);
      }) : vl.addEventListener("resize", () => Bs(d), {
        once: !0
      }));
    }));
  }, l = null, o = () => {
    if (l)
      return;
    let s = () => {
      window.scrollTo(0, 0);
    }, d = window.pageXOffset, c = window.pageYOffset;
    l = Bt(Dn(window, "scroll", s), tn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), tn(document.documentElement, "overflow", "hidden"), tn(document.body, "marginTop", `-${c}px`), () => {
      window.scrollTo(d, c);
    }), window.scrollTo(0, 0);
  }, u = Bt(Dn(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), Dn(document, "touchmove", n, {
    passive: !1,
    capture: !0
  }), Dn(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), Dn(document, "focus", i, !0));
  return () => {
    t == null || t(), l == null || l(), u();
  };
}
function tn(e, t, r) {
  let n = e.style[t];
  return e.style[t] = r, () => {
    e.style[t] = n;
  };
}
function Dn(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function Bs(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let r = Ge(e);
    if (r !== document.documentElement && r !== document.body && r !== e) {
      let n = r.getBoundingClientRect().top, a = e.getBoundingClientRect().top;
      a > n + e.clientHeight && (r.scrollTop += a - n);
    }
    e = r.parentElement;
  }
}
function ks(e) {
  return e instanceof HTMLInputElement && !e5.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const Yl = /* @__PURE__ */ g.createContext(null);
function n5(e) {
  let { children: t } = e, r = G(Yl), [n, a] = Y(0), i = z(() => ({
    parent: r,
    modalCount: n,
    addModal() {
      a((l) => l + 1), r && r.addModal();
    },
    removeModal() {
      a((l) => l - 1), r && r.removeModal();
    }
  }), [
    r,
    n
  ]);
  return /* @__PURE__ */ g.createElement(Yl.Provider, {
    value: i
  }, t);
}
function a5() {
  let e = G(Yl);
  return {
    modalProviderProps: {
      "aria-hidden": e && e.modalCount > 0 ? !0 : null
    }
  };
}
function i5(e) {
  let { modalProviderProps: t } = a5();
  return /* @__PURE__ */ g.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...t
  });
}
function l5(e) {
  return /* @__PURE__ */ g.createElement(n5, null, /* @__PURE__ */ g.createElement(i5, e));
}
function o5(e) {
  let t = zt(), { portalContainer: r = t ? null : document.body, ...n } = e;
  if (g.useEffect(() => {
    if (r != null && r.closest("[data-overlay-container]"))
      throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
  }, [
    r
  ]), !r)
    return null;
  let a = /* @__PURE__ */ g.createElement(l5, n);
  return /* @__PURE__ */ Qn.createPortal(a, r);
}
var nf = {}, af = {};
af = {
  dismiss: "تجاهل"
};
var lf = {};
lf = {
  dismiss: "Отхвърляне"
};
var of = {};
of = {
  dismiss: "Odstranit"
};
var uf = {};
uf = {
  dismiss: "Luk"
};
var sf = {};
sf = {
  dismiss: "Schließen"
};
var df = {};
df = {
  dismiss: "Απόρριψη"
};
var cf = {};
cf = {
  dismiss: "Dismiss"
};
var ff = {};
ff = {
  dismiss: "Descartar"
};
var pf = {};
pf = {
  dismiss: "Lõpeta"
};
var bf = {};
bf = {
  dismiss: "Hylkää"
};
var mf = {};
mf = {
  dismiss: "Rejeter"
};
var hf = {};
hf = {
  dismiss: "התעלם"
};
var vf = {};
vf = {
  dismiss: "Odbaci"
};
var gf = {};
gf = {
  dismiss: "Elutasítás"
};
var $f = {};
$f = {
  dismiss: "Ignora"
};
var yf = {};
yf = {
  dismiss: "閉じる"
};
var xf = {};
xf = {
  dismiss: "무시"
};
var Df = {};
Df = {
  dismiss: "Atmesti"
};
var Cf = {};
Cf = {
  dismiss: "Nerādīt"
};
var Ef = {};
Ef = {
  dismiss: "Lukk"
};
var Pf = {};
Pf = {
  dismiss: "Negeren"
};
var wf = {};
wf = {
  dismiss: "Zignoruj"
};
var Sf = {};
Sf = {
  dismiss: "Descartar"
};
var Bf = {};
Bf = {
  dismiss: "Dispensar"
};
var kf = {};
kf = {
  dismiss: "Revocare"
};
var Ff = {};
Ff = {
  dismiss: "Пропустить"
};
var Af = {};
Af = {
  dismiss: "Zrušiť"
};
var Tf = {};
Tf = {
  dismiss: "Opusti"
};
var Rf = {};
Rf = {
  dismiss: "Odbaci"
};
var Mf = {};
Mf = {
  dismiss: "Avvisa"
};
var If = {};
If = {
  dismiss: "Kapat"
};
var Nf = {};
Nf = {
  dismiss: "Скасувати"
};
var Kf = {};
Kf = {
  dismiss: "取消"
};
var zf = {};
zf = {
  dismiss: "關閉"
};
nf = {
  "ar-AE": af,
  "bg-BG": lf,
  "cs-CZ": of,
  "da-DK": uf,
  "de-DE": sf,
  "el-GR": df,
  "en-US": cf,
  "es-ES": ff,
  "et-EE": pf,
  "fi-FI": bf,
  "fr-FR": mf,
  "he-IL": hf,
  "hr-HR": vf,
  "hu-HU": gf,
  "it-IT": $f,
  "ja-JP": yf,
  "ko-KR": xf,
  "lt-LT": Df,
  "lv-LV": Cf,
  "nb-NO": Ef,
  "nl-NL": Pf,
  "pl-PL": wf,
  "pt-BR": Sf,
  "pt-PT": Bf,
  "ro-RO": kf,
  "ru-RU": Ff,
  "sk-SK": Af,
  "sl-SI": Tf,
  "sr-SP": Rf,
  "sv-SE": Mf,
  "tr-TR": If,
  "uk-UA": Nf,
  "zh-CN": Kf,
  "zh-TW": zf
};
function Jl(e) {
  let { onDismiss: t, ...r } = e, n = Te(/* @__PURE__ */ j1(nf), "@react-aria/overlays"), a = er(r, n.format("dismiss")), i = () => {
    t && t();
  };
  return /* @__PURE__ */ g.createElement(rr, null, /* @__PURE__ */ g.createElement("button", {
    ...a,
    tabIndex: -1,
    onClick: i,
    style: {
      width: 1,
      height: 1
    }
  }));
}
let Cn = /* @__PURE__ */ new WeakMap(), bt = [];
function _o(e, t = document.body) {
  let r = new Set(e), n = /* @__PURE__ */ new Set(), a = (u) => {
    for (let f of u.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))
      r.add(f);
    let s = (f) => {
      if (r.has(f) || n.has(f.parentElement) && f.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let p of r)
        if (f.contains(p))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, d = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
      acceptNode: s
    }), c = s(u);
    if (c === NodeFilter.FILTER_ACCEPT && i(u), c !== NodeFilter.FILTER_REJECT) {
      let f = d.nextNode();
      for (; f != null; )
        i(f), f = d.nextNode();
    }
  }, i = (u) => {
    var s;
    let d = (s = Cn.get(u)) !== null && s !== void 0 ? s : 0;
    u.getAttribute("aria-hidden") === "true" && d === 0 || (d === 0 && u.setAttribute("aria-hidden", "true"), n.add(u), Cn.set(u, d + 1));
  };
  bt.length && bt[bt.length - 1].disconnect(), a(t);
  let l = new MutationObserver((u) => {
    for (let s of u)
      if (!(s.type !== "childList" || s.addedNodes.length === 0) && ![
        ...r,
        ...n
      ].some((d) => d.contains(s.target))) {
        for (let d of s.removedNodes)
          d instanceof Element && (r.delete(d), n.delete(d));
        for (let d of s.addedNodes)
          (d instanceof HTMLElement || d instanceof SVGElement) && (d.dataset.liveAnnouncer === "true" || d.dataset.reactAriaTopLayer === "true") ? r.add(d) : d instanceof Element && a(d);
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
  return bt.push(o), () => {
    l.disconnect();
    for (let u of n) {
      let s = Cn.get(u);
      s === 1 ? (u.removeAttribute("aria-hidden"), Cn.delete(u)) : Cn.set(u, s - 1);
    }
    o === bt[bt.length - 1] ? (bt.pop(), bt.length && bt[bt.length - 1].observe()) : bt.splice(bt.indexOf(o), 1);
  };
}
function u5(e, t) {
  let { triggerRef: r, popoverRef: n, isNonModal: a, isKeyboardDismissDisabled: i, shouldCloseOnInteractOutside: l, ...o } = e, { overlayProps: u, underlayProps: s } = tf({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !a,
    isKeyboardDismissDisabled: i,
    shouldCloseOnInteractOutside: l
  }, n), { overlayProps: d, arrowProps: c, placement: f } = ef({
    ...o,
    targetRef: r,
    overlayRef: n,
    isOpen: t.isOpen,
    onClose: a ? t.close : null
  });
  return rf({
    isDisabled: a || !t.isOpen
  }), ge(() => {
    if (t.isOpen && !a && n.current)
      return _o([
        n.current
      ]);
  }, [
    a,
    t.isOpen,
    n
  ]), {
    popoverProps: _(u, d),
    arrowProps: c,
    underlayProps: s,
    placement: f
  };
}
const Vf = /* @__PURE__ */ g.createContext(null);
function Lf(e) {
  let t = zt(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [a, i] = Y(!1), l = z(() => ({
    contain: a,
    setContain: i
  }), [
    a,
    i
  ]);
  if (!r)
    return null;
  let o = e.children;
  return e.disableFocusManagement || (o = /* @__PURE__ */ g.createElement(aa, {
    restoreFocus: !0,
    contain: a && !n
  }, o)), o = /* @__PURE__ */ g.createElement(Vf.Provider, {
    value: l
  }, /* @__PURE__ */ g.createElement(L$, null, o)), /* @__PURE__ */ Qn.createPortal(o, r);
}
function Of() {
  let e = G(Vf), t = e == null ? void 0 : e.setContain;
  ge(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function s5(e, t, r) {
  let { overlayProps: n, underlayProps: a } = tf({
    ...e,
    isOpen: t.isOpen,
    onClose: t.close
  }, r);
  return rf({
    isDisabled: !t.isOpen
  }), Of(), te(() => {
    if (t.isOpen)
      return _o([
        r.current
      ]);
  }, [
    t.isOpen,
    r
  ]), {
    modalProps: _(n),
    underlayProps: a
  };
}
function Xl(e) {
  return Oa() ? e.altKey : e.ctrlKey;
}
function Jr(e) {
  return Qt() ? e.metaKey : e.ctrlKey;
}
const d5 = 1e3;
function jf(e) {
  let { keyboardDelegate: t, selectionManager: r, onTypeSelect: n } = e, a = N({
    search: "",
    timeout: null
  }).current, i = (l) => {
    let o = c5(l.key);
    if (!o || l.ctrlKey || l.metaKey || !l.currentTarget.contains(l.target))
      return;
    o === " " && a.search.trim().length > 0 && (l.preventDefault(), "continuePropagation" in l || l.stopPropagation()), a.search += o;
    let u = t.getKeyForSearch(a.search, r.focusedKey);
    u == null && (u = t.getKeyForSearch(a.search)), u != null && (r.setFocusedKey(u), n && n(u)), clearTimeout(a.timeout), a.timeout = setTimeout(() => {
      a.search = "";
    }, d5);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: t.getKeyForSearch ? i : null
    }
  };
}
function c5(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function Ai(e) {
  let { selectionManager: t, keyboardDelegate: r, ref: n, autoFocus: a = !1, shouldFocusWrap: i = !1, disallowEmptySelection: l = !1, disallowSelectAll: o = !1, selectOnFocus: u = t.selectionBehavior === "replace", disallowTypeAhead: s = !1, shouldUseVirtualFocus: d, allowsTabNavigation: c = !1, isVirtualized: f, scrollRef: p = n, linkBehavior: b = "action" } = e, { direction: m } = be(), h = ea(), y = (T) => {
    if (T.altKey && T.key === "Tab" && T.preventDefault(), !n.current.contains(T.target))
      return;
    const E = (O, L) => {
      if (O != null) {
        if (t.isLink(O) && b === "selection" && u && !Xl(T)) {
          jg(() => {
            t.setFocusedKey(O, L);
          });
          let K = p.current.querySelector(`[data-key="${CSS.escape(O.toString())}"]`);
          h.open(K, T);
          return;
        }
        if (t.setFocusedKey(O, L), t.isLink(O) && b === "override")
          return;
        T.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(O) : u && !Xl(T) && t.replaceSelection(O);
      }
    };
    switch (T.key) {
      case "ArrowDown":
        if (r.getKeyBelow) {
          var B, S;
          T.preventDefault();
          let O = t.focusedKey != null ? r.getKeyBelow(t.focusedKey) : (B = r.getFirstKey) === null || B === void 0 ? void 0 : B.call(r);
          O == null && i && (O = (S = r.getFirstKey) === null || S === void 0 ? void 0 : S.call(r, t.focusedKey)), E(O);
        }
        break;
      case "ArrowUp":
        if (r.getKeyAbove) {
          var F, V;
          T.preventDefault();
          let O = t.focusedKey != null ? r.getKeyAbove(t.focusedKey) : (F = r.getLastKey) === null || F === void 0 ? void 0 : F.call(r);
          O == null && i && (O = (V = r.getLastKey) === null || V === void 0 ? void 0 : V.call(r, t.focusedKey)), E(O);
        }
        break;
      case "ArrowLeft":
        if (r.getKeyLeftOf) {
          var R, D;
          T.preventDefault();
          let O = r.getKeyLeftOf(t.focusedKey);
          O == null && i && (O = m === "rtl" ? (R = r.getFirstKey) === null || R === void 0 ? void 0 : R.call(r, t.focusedKey) : (D = r.getLastKey) === null || D === void 0 ? void 0 : D.call(r, t.focusedKey)), E(O, m === "rtl" ? "first" : "last");
        }
        break;
      case "ArrowRight":
        if (r.getKeyRightOf) {
          var H, U;
          T.preventDefault();
          let O = r.getKeyRightOf(t.focusedKey);
          O == null && i && (O = m === "rtl" ? (H = r.getLastKey) === null || H === void 0 ? void 0 : H.call(r, t.focusedKey) : (U = r.getFirstKey) === null || U === void 0 ? void 0 : U.call(r, t.focusedKey)), E(O, m === "rtl" ? "last" : "first");
        }
        break;
      case "Home":
        if (r.getFirstKey) {
          T.preventDefault();
          let O = r.getFirstKey(t.focusedKey, Jr(T));
          t.setFocusedKey(O), Jr(T) && T.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(O) : u && t.replaceSelection(O);
        }
        break;
      case "End":
        if (r.getLastKey) {
          T.preventDefault();
          let O = r.getLastKey(t.focusedKey, Jr(T));
          t.setFocusedKey(O), Jr(T) && T.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(O) : u && t.replaceSelection(O);
        }
        break;
      case "PageDown":
        if (r.getKeyPageBelow) {
          T.preventDefault();
          let O = r.getKeyPageBelow(t.focusedKey);
          E(O);
        }
        break;
      case "PageUp":
        if (r.getKeyPageAbove) {
          T.preventDefault();
          let O = r.getKeyPageAbove(t.focusedKey);
          E(O);
        }
        break;
      case "a":
        Jr(T) && t.selectionMode === "multiple" && o !== !0 && (T.preventDefault(), t.selectAll());
        break;
      case "Escape":
        T.preventDefault(), l || t.clearSelection();
        break;
      case "Tab":
        if (!c) {
          if (T.shiftKey)
            n.current.focus();
          else {
            let O = Ue(n.current, {
              tabbable: !0
            }), L, K;
            do
              K = O.lastChild(), K && (L = K);
            while (K);
            L && !L.contains(document.activeElement) && St(L);
          }
          break;
        }
    }
  }, $ = N({
    top: 0,
    left: 0
  });
  pr(p, "scroll", f ? null : () => {
    $.current = {
      top: p.current.scrollTop,
      left: p.current.scrollLeft
    };
  });
  let x = (T) => {
    if (t.isFocused) {
      T.currentTarget.contains(T.target) || t.setFocused(!1);
      return;
    }
    if (T.currentTarget.contains(T.target)) {
      if (t.setFocused(!0), t.focusedKey == null) {
        let S = (V) => {
          V != null && (t.setFocusedKey(V), u && t.replaceSelection(V));
        }, F = T.relatedTarget;
        var E, B;
        F && T.currentTarget.compareDocumentPosition(F) & Node.DOCUMENT_POSITION_FOLLOWING ? S((E = t.lastSelectedKey) !== null && E !== void 0 ? E : r.getLastKey()) : S((B = t.firstSelectedKey) !== null && B !== void 0 ? B : r.getFirstKey());
      } else
        f || (p.current.scrollTop = $.current.top, p.current.scrollLeft = $.current.left);
      if (!f && t.focusedKey != null) {
        let S = p.current.querySelector(`[data-key="${CSS.escape(t.focusedKey.toString())}"]`);
        S && (S.contains(document.activeElement) || St(S), Qa() === "keyboard" && Xe(S, {
          containingElement: n.current
        }));
      }
    }
  }, C = (T) => {
    T.currentTarget.contains(T.relatedTarget) || t.setFocused(!1);
  };
  const w = N(a);
  te(() => {
    if (w.current) {
      let T = null;
      a === "first" && (T = r.getFirstKey()), a === "last" && (T = r.getLastKey());
      let E = t.selectedKeys;
      if (E.size) {
        for (let B of E)
          if (t.canSelectItem(B)) {
            T = B;
            break;
          }
      }
      t.setFocused(!0), t.setFocusedKey(T), T == null && !d && Fe(n.current);
    }
  }, []);
  let A = N(t.focusedKey);
  te(() => {
    let T = Qa();
    if (t.isFocused && t.focusedKey != null && (p != null && p.current)) {
      let E = p.current.querySelector(`[data-key="${CSS.escape(t.focusedKey.toString())}"]`);
      E && (T === "keyboard" || w.current) && (f || yd(p.current, E), T !== "virtual" && Xe(E, {
        containingElement: n.current
      }));
    }
    t.isFocused && t.focusedKey == null && A.current != null && Fe(n.current), A.current = t.focusedKey, w.current = !1;
  }, [
    f,
    p,
    t.focusedKey,
    t.isFocused,
    n
  ]);
  let M = {
    onKeyDown: y,
    onFocus: x,
    onBlur: C,
    onMouseDown(T) {
      p.current === T.target && T.preventDefault();
    }
  }, { typeSelectProps: v } = jf({
    keyboardDelegate: r,
    selectionManager: t
  });
  s || (M = _(v, M));
  let I;
  return d || (I = t.focusedKey == null ? 0 : -1), {
    collectionProps: {
      ...M,
      tabIndex: I
    }
  };
}
function mn(e) {
  let { selectionManager: t, key: r, ref: n, shouldSelectOnPressUp: a, shouldUseVirtualFocus: i, focus: l, isDisabled: o, onAction: u, allowsDifferentPressOrigin: s, linkBehavior: d = "action" } = e, c = ea(), f = (D) => {
    if (D.pointerType === "keyboard" && Xl(D))
      t.toggleSelection(r);
    else {
      if (t.selectionMode === "none")
        return;
      if (t.isLink(r)) {
        if (d === "selection") {
          c.open(n.current, D), t.setSelectedKeys(t.selectedKeys);
          return;
        } else if (d === "override" || d === "none")
          return;
      }
      t.selectionMode === "single" ? t.isSelected(r) && !t.disallowEmptySelection ? t.toggleSelection(r) : t.replaceSelection(r) : D && D.shiftKey ? t.extendSelection(r) : t.selectionBehavior === "toggle" || D && (Jr(D) || D.pointerType === "touch" || D.pointerType === "virtual") ? t.toggleSelection(r) : t.replaceSelection(r);
    }
  };
  te(() => {
    r === t.focusedKey && t.isFocused && !i && (l ? l() : document.activeElement !== n.current && Fe(n.current));
  }, [
    n,
    r,
    t.focusedKey,
    t.childFocusStrategy,
    t.isFocused,
    i
  ]), o = o || t.isDisabled(r);
  let p = {};
  !i && !o ? p = {
    tabIndex: r === t.focusedKey ? 0 : -1,
    onFocus(D) {
      D.target === n.current && t.setFocusedKey(r);
    }
  } : o && (p.onMouseDown = (D) => {
    D.preventDefault();
  });
  let b = t.isLink(r) && d === "override", m = t.isLink(r) && d !== "selection" && d !== "none", h = !o && t.canSelectItem(r) && !b, y = (u || m) && !o, $ = y && (t.selectionBehavior === "replace" ? !h : !h || t.isEmpty), x = y && h && t.selectionBehavior === "replace", C = $ || x, w = N(null), A = C && h, M = N(!1), v = N(!1), I = (D) => {
    u && u(), m && c.open(n.current, D);
  }, T = {};
  a ? (T.onPressStart = (D) => {
    w.current = D.pointerType, M.current = A, D.pointerType === "keyboard" && (!C || As()) && f(D);
  }, s ? (T.onPressUp = $ ? null : (D) => {
    D.pointerType !== "keyboard" && h && f(D);
  }, T.onPress = $ ? I : null) : T.onPress = (D) => {
    if ($ || x && D.pointerType !== "mouse") {
      if (D.pointerType === "keyboard" && !Fs())
        return;
      I(D);
    } else
      D.pointerType !== "keyboard" && h && f(D);
  }) : (T.onPressStart = (D) => {
    w.current = D.pointerType, M.current = A, v.current = $, h && (D.pointerType === "mouse" && !$ || D.pointerType === "keyboard" && (!y || As())) && f(D);
  }, T.onPress = (D) => {
    (D.pointerType === "touch" || D.pointerType === "pen" || D.pointerType === "virtual" || D.pointerType === "keyboard" && C && Fs() || D.pointerType === "mouse" && v.current) && (C ? I(D) : h && f(D));
  }), p["data-key"] = r, T.preventFocusOnPress = i;
  let { pressProps: E, isPressed: B } = st(T), S = x ? (D) => {
    w.current === "mouse" && (D.stopPropagation(), D.preventDefault(), I(D));
  } : void 0, { longPressProps: F } = Fd({
    isDisabled: !A,
    onLongPress(D) {
      D.pointerType === "touch" && (f(D), t.setSelectionBehavior("toggle"));
    }
  }), V = (D) => {
    w.current === "touch" && M.current && D.preventDefault();
  }, R = t.isLink(r) ? (D) => {
    Fr.isOpening || D.preventDefault();
  } : void 0;
  return {
    itemProps: _(p, h || $ ? E : {}, A ? F : {}, {
      onDoubleClick: S,
      onDragStartCapture: V,
      onClick: R
    }),
    isPressed: B,
    isSelected: t.isSelected(r),
    isFocused: t.isFocused && t.focusedKey === r,
    isDisabled: o,
    allowsSelection: h,
    hasAction: C
  };
}
function Fs() {
  let e = window.event;
  return (e == null ? void 0 : e.key) === "Enter";
}
function As() {
  let e = window.event;
  return (e == null ? void 0 : e.key) === " " || (e == null ? void 0 : e.code) === "Space";
}
class zr {
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
  findKey(t, r, n) {
    let a = this.getItem(t);
    if (!a)
      return null;
    let i = a.getBoundingClientRect();
    do
      t = r(t), a = this.getItem(t);
    while (a && n(i, a.getBoundingClientRect()));
    return t;
  }
  isSameRow(t, r) {
    return t.top === r.top || t.left !== r.left;
  }
  isSameColumn(t, r) {
    return t.left === r.left || t.top !== r.top;
  }
  getKeyBelow(t) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(t, (r) => this.getNextKey(r), this.isSameRow) : this.getNextKey(t);
  }
  getKeyAbove(t) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(t, (r) => this.getPreviousKey(r), this.isSameRow) : this.getPreviousKey(t);
  }
  getNextColumn(t, r) {
    return r ? this.getPreviousKey(t) : this.getNextKey(t);
  }
  getKeyRightOf(t) {
    return this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(t, this.direction === "rtl") : this.findKey(t, (r) => this.getNextColumn(r, this.direction === "rtl"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(t, this.direction === "rtl") : null;
  }
  getKeyLeftOf(t) {
    return this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(t, this.direction === "ltr") : this.findKey(t, (r) => this.getNextColumn(r, this.direction === "ltr"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(t, this.direction === "ltr") : null;
  }
  getFirstKey() {
    let t = this.collection.getFirstKey();
    for (; t != null; ) {
      let r = this.collection.getItem(t);
      if ((r == null ? void 0 : r.type) === "item" && !this.disabledKeys.has(t))
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
    let r = this.ref.current, n = this.getItem(t);
    if (!n)
      return null;
    if (!Ya(r))
      return this.getFirstKey();
    let a = r.getBoundingClientRect(), i = n.getBoundingClientRect();
    if (this.orientation === "horizontal") {
      let l = a.x - r.scrollLeft, o = Math.max(0, i.x - l + i.width - a.width);
      for (; n && i.x - l > o; )
        t = this.getKeyAbove(t), n = t == null ? null : this.getItem(t), i = n == null ? void 0 : n.getBoundingClientRect();
    } else {
      let l = a.y - r.scrollTop, o = Math.max(0, i.y - l + i.height - a.height);
      for (; n && i.y - l > o; )
        t = this.getKeyAbove(t), n = t == null ? null : this.getItem(t), i = n == null ? void 0 : n.getBoundingClientRect();
    }
    return t ?? this.getFirstKey();
  }
  getKeyPageBelow(t) {
    let r = this.ref.current, n = this.getItem(t);
    if (!n)
      return null;
    if (!Ya(r))
      return this.getLastKey();
    let a = r.getBoundingClientRect(), i = n.getBoundingClientRect();
    if (this.orientation === "horizontal") {
      let l = a.x - r.scrollLeft, o = Math.min(r.scrollWidth, i.x - l - i.width + a.width);
      for (; n && i.x - l < o; )
        t = this.getKeyBelow(t), n = t == null ? null : this.getItem(t), i = n == null ? void 0 : n.getBoundingClientRect();
    } else {
      let l = a.y - r.scrollTop, o = Math.min(r.scrollHeight, i.y - l - i.height + a.height);
      for (; n && i.y - l < o; )
        t = this.getKeyBelow(t), n = t == null ? null : this.getItem(t), i = n == null ? void 0 : n.getBoundingClientRect();
    }
    return t ?? this.getLastKey();
  }
  getKeyForSearch(t, r) {
    if (!this.collator)
      return null;
    let n = this.collection, a = r || this.getFirstKey();
    for (; a != null; ) {
      let i = n.getItem(a), l = i.textValue.slice(0, t.length);
      if (i.textValue && this.collator.compare(l, t) === 0)
        return a;
      a = this.getKeyBelow(a);
    }
    return null;
  }
  constructor(...t) {
    if (t.length === 1) {
      let r = t[0];
      this.collection = r.collection, this.ref = r.ref, this.collator = r.collator, this.disabledKeys = r.disabledKeys || /* @__PURE__ */ new Set(), this.orientation = r.orientation, this.direction = r.direction, this.layout = r.layout || "stack";
    } else
      this.collection = t[0], this.disabledKeys = t[1], this.ref = t[2], this.collator = t[3], this.layout = "stack", this.orientation = "vertical";
    this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
  }
}
function Ho(e) {
  let { selectionManager: t, collection: r, disabledKeys: n, ref: a, keyboardDelegate: i } = e, l = bn({
    usage: "search",
    sensitivity: "base"
  }), o = t.disabledBehavior, u = z(() => i || new zr(r, o === "selection" ? /* @__PURE__ */ new Set() : n, a, l), [
    i,
    r,
    n,
    a,
    l,
    o
  ]), { collectionProps: s } = Ai({
    ...e,
    ref: a,
    selectionManager: t,
    keyboardDelegate: u
  });
  return {
    listProps: s
  };
}
class f5 {
  build(t, r) {
    return this.context = r, Ts(() => this.iterateCollection(t));
  }
  *iterateCollection(t) {
    let { children: r, items: n } = t;
    if (typeof r == "function") {
      if (!n)
        throw new Error("props.children was a function but props.items is missing");
      for (let a of t.items)
        yield* this.getFullNode({
          value: a
        }, {
          renderer: r
        });
    } else {
      let a = [];
      g.Children.forEach(r, (l) => {
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
  getKey(t, r, n, a) {
    if (t.key != null)
      return t.key;
    if (r.type === "cell" && r.key != null)
      return `${a}${r.key}`;
    let i = r.value;
    if (i != null) {
      var l;
      let o = (l = i.key) !== null && l !== void 0 ? l : i.id;
      if (o == null)
        throw new Error("No key found for item");
      return o;
    }
    return a ? `${a}.${r.index}` : `$.${r.index}`;
  }
  getChildState(t, r) {
    return {
      renderer: r.renderer || t.renderer
    };
  }
  *getFullNode(t, r, n, a) {
    let i = t.element;
    if (!i && t.value && r && r.renderer) {
      let u = this.cache.get(t.value);
      if (u && (!u.shouldInvalidate || !u.shouldInvalidate(this.context))) {
        u.index = t.index, u.parentKey = a ? a.key : null, yield u;
        return;
      }
      i = r.renderer(t.value);
    }
    if (g.isValidElement(i)) {
      let u = i.type;
      if (typeof u != "function" && typeof u.getCollectionNode != "function") {
        let f = typeof i.type == "function" ? i.type.name : i.type;
        throw new Error(`Unknown element <${f}> in collection.`);
      }
      let s = u.getCollectionNode(i.props, this.context), d = t.index, c = s.next();
      for (; !c.done && c.value; ) {
        let f = c.value;
        t.index = d;
        let p = f.key;
        p || (p = f.element ? null : this.getKey(i, t, r, n));
        let m = [
          ...this.getFullNode({
            ...f,
            key: p,
            index: d,
            wrapper: p5(t.wrapper, f.wrapper)
          }, this.getChildState(r, f), n ? `${n}${i.key}` : i.key, a)
        ];
        for (let h of m) {
          if (h.value = f.value || t.value, h.value && this.cache.set(h.value, h), t.type && h.type !== t.type)
            throw new Error(`Unsupported type <${$l(h.type)}> in <${$l(a.type)}>. Only <${$l(t.type)}> is supported.`);
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
      childNodes: Ts(function* () {
        if (!t.hasChildNodes)
          return;
        let u = 0;
        for (let s of t.childNodes()) {
          s.key != null && (s.key = `${o.key}${s.key}`), s.index = u;
          let d = l.getFullNode(s, l.getChildState(r, s), o.key, o);
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
function Ts(e) {
  let t = [], r = null;
  return {
    *[Symbol.iterator]() {
      for (let n of t)
        yield n;
      r || (r = e());
      for (let n of r)
        t.push(n), yield n;
    }
  };
}
function p5(e, t) {
  if (e && t)
    return (r) => e(t(r));
  if (e)
    return e;
  if (t)
    return t;
}
function $l(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function Uo(e, t, r) {
  let n = z(() => new f5(), []), { children: a, items: i, collection: l } = e;
  return z(() => {
    if (l)
      return l;
    let u = n.build({
      children: a,
      items: i
    }, r);
    return t(u);
  }, [
    n,
    a,
    i,
    l,
    r,
    t
  ]);
}
function Re(e, t) {
  return typeof t.getChildren == "function" ? t.getChildren(e.key) : e.childNodes;
}
function Zt(e) {
  return cr(e, 0);
}
function cr(e, t) {
  if (t < 0)
    return;
  let r = 0;
  for (let n of e) {
    if (r === t)
      return n;
    r++;
  }
}
function mr(e) {
  let t;
  for (let r of e)
    t = r;
  return t;
}
function yl(e, t, r) {
  if (t.parentKey === r.parentKey)
    return t.index - r.index;
  let n = [
    ...Rs(e, t),
    t
  ], a = [
    ...Rs(e, r),
    r
  ], i = n.slice(0, a.length).findIndex((l, o) => l !== a[o]);
  return i !== -1 ? (t = n[i], r = a[i], t.index - r.index) : n.findIndex((l) => l === r) >= 0 ? 1 : (a.findIndex((l) => l === t) >= 0, -1);
}
function Rs(e, t) {
  let r = [];
  for (; (t == null ? void 0 : t.parentKey) != null; )
    t = e.getItem(t.parentKey), r.unshift(t);
  return r;
}
const Ms = /* @__PURE__ */ new WeakMap();
function Wo(e) {
  let t = Ms.get(e);
  if (t != null)
    return t;
  t = 0;
  let r = (n) => {
    for (let a of n)
      a.type === "section" ? r(Re(a, e)) : t++;
  };
  return r(e), Ms.set(e, t), t;
}
const Ti = /* @__PURE__ */ new WeakMap();
function b5(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function _f(e, t) {
  let r = Ti.get(e);
  if (!r)
    throw new Error("Unknown list");
  return `${r.id}-option-${b5(t)}`;
}
function m5(e, t, r) {
  let n = X(e, {
    labelable: !0
  }), a = e.selectionBehavior || "toggle", i = e.linkBehavior || (a === "replace" ? "action" : "override");
  a === "toggle" && i === "action" && (i = "override");
  let { listProps: l } = Ho({
    ...e,
    ref: r,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    linkBehavior: i
  }), { focusWithinProps: o } = Ft({
    onFocusWithin: e.onFocus,
    onBlurWithin: e.onBlur,
    onFocusWithinChange: e.onFocusChange
  }), u = ye(e.id);
  Ti.set(t, {
    id: u,
    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
    shouldFocusOnHover: e.shouldFocusOnHover,
    isVirtualized: e.isVirtualized,
    onAction: e.onAction,
    linkBehavior: i
  });
  let { labelProps: s, fieldProps: d } = da({
    ...e,
    id: u,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: s,
    listBoxProps: _(n, o, t.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ..._(d, l)
    })
  };
}
function h5(e, t, r) {
  var n;
  let { key: a } = e, i = Ti.get(t);
  var l;
  let o = (l = e.isDisabled) !== null && l !== void 0 ? l : t.disabledKeys.has(a);
  var u;
  let s = (u = e.isSelected) !== null && u !== void 0 ? u : t.selectionManager.isSelected(a);
  var d;
  let c = (d = e.shouldSelectOnPressUp) !== null && d !== void 0 ? d : i == null ? void 0 : i.shouldSelectOnPressUp;
  var f;
  let p = (f = e.shouldFocusOnHover) !== null && f !== void 0 ? f : i == null ? void 0 : i.shouldFocusOnHover;
  var b;
  let m = (b = e.shouldUseVirtualFocus) !== null && b !== void 0 ? b : i == null ? void 0 : i.shouldUseVirtualFocus;
  var h;
  let y = (h = e.isVirtualized) !== null && h !== void 0 ? h : i == null ? void 0 : i.isVirtualized, $ = Kt(), x = Kt(), C = {
    role: "option",
    "aria-disabled": o || void 0,
    "aria-selected": t.selectionManager.selectionMode !== "none" ? s : void 0
  };
  Qt() && yo() || (C["aria-label"] = e["aria-label"], C["aria-labelledby"] = $, C["aria-describedby"] = x);
  let w = t.collection.getItem(a);
  if (y) {
    let S = Number(w == null ? void 0 : w.index);
    C["aria-posinset"] = Number.isNaN(S) ? void 0 : S + 1, C["aria-setsize"] = Wo(t.collection);
  }
  let { itemProps: A, isPressed: M, isFocused: v, hasAction: I, allowsSelection: T } = mn({
    selectionManager: t.selectionManager,
    key: a,
    ref: r,
    shouldSelectOnPressUp: c,
    allowsDifferentPressOrigin: c && p,
    isVirtualized: y,
    shouldUseVirtualFocus: m,
    isDisabled: o,
    onAction: i != null && i.onAction ? () => {
      var S;
      return i == null || (S = i.onAction) === null || S === void 0 ? void 0 : S.call(i, a);
    } : void 0,
    linkBehavior: i == null ? void 0 : i.linkBehavior
  }), { hoverProps: E } = ke({
    isDisabled: o || !p,
    onHoverStart() {
      Tr() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(a));
    }
  }), B = X(w == null ? void 0 : w.props, {
    isLink: !!(!(w == null || (n = w.props) === null || n === void 0) && n.href)
  });
  return delete B.id, {
    optionProps: {
      ...C,
      ..._(B, A, E),
      id: _f(t, a)
    },
    labelProps: {
      id: $
    },
    descriptionProps: {
      id: x
    },
    isFocused: v,
    isFocusVisible: v && Tr(),
    isSelected: s,
    isDisabled: o,
    isPressed: M,
    allowsSelection: T,
    hasAction: I
  };
}
function v5(e) {
  let { heading: t, "aria-label": r } = e, n = ye();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: t ? {
      // Techincally, listbox cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a visual label for the nested group.
      id: n,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": r,
      "aria-labelledby": t ? n : void 0
    }
  };
}
function g5(e) {
  return e && e.__esModule ? e.default : e;
}
var Hf = {}, Uf = {};
Uf = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var Wf = {};
Wf = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var Gf = {};
Gf = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var Zf = {};
Zf = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var qf = {};
qf = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var Yf = {};
Yf = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var Jf = {};
Jf = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var Xf = {};
Xf = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var Qf = {};
Qf = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var e4 = {};
e4 = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var t4 = {};
t4 = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var r4 = {};
r4 = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var n4 = {};
n4 = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var a4 = {};
a4 = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var i4 = {};
i4 = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var l4 = {};
l4 = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var o4 = {};
o4 = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var u4 = {};
u4 = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var s4 = {};
s4 = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var d4 = {};
d4 = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var c4 = {};
c4 = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var f4 = {};
f4 = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var p4 = {};
p4 = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var b4 = {};
b4 = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var m4 = {};
m4 = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var h4 = {};
h4 = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var v4 = {};
v4 = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var g4 = {};
g4 = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var $4 = {};
$4 = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var y4 = {};
y4 = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var x4 = {};
x4 = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var D4 = {};
D4 = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var C4 = {};
C4 = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var E4 = {};
E4 = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
Hf = {
  "ar-AE": Uf,
  "bg-BG": Wf,
  "cs-CZ": Gf,
  "da-DK": Zf,
  "de-DE": qf,
  "el-GR": Yf,
  "en-US": Jf,
  "es-ES": Xf,
  "et-EE": Qf,
  "fi-FI": e4,
  "fr-FR": t4,
  "he-IL": r4,
  "hr-HR": n4,
  "hu-HU": a4,
  "it-IT": i4,
  "ja-JP": l4,
  "ko-KR": o4,
  "lt-LT": u4,
  "lv-LV": s4,
  "nb-NO": d4,
  "nl-NL": c4,
  "pl-PL": f4,
  "pt-BR": p4,
  "pt-PT": b4,
  "ro-RO": m4,
  "ru-RU": h4,
  "sk-SK": v4,
  "sl-SI": g4,
  "sr-SP": $4,
  "sv-SE": y4,
  "tr-TR": x4,
  "uk-UA": D4,
  "zh-CN": C4,
  "zh-TW": E4
};
function P4(e, t, r) {
  let { type: n = "menu", isDisabled: a, trigger: i = "press" } = e, l = ye(), { triggerProps: o, overlayProps: u } = Q1({
    type: n
  }, t, r), s = (p) => {
    if (!a && !(i === "longPress" && !p.altKey) && r && r.current)
      switch (p.key) {
        case "Enter":
        case " ":
          if (i === "longPress")
            return;
        case "ArrowDown":
          "continuePropagation" in p || p.stopPropagation(), p.preventDefault(), t.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in p || p.stopPropagation(), p.preventDefault(), t.toggle("last");
          break;
        default:
          "continuePropagation" in p && p.continuePropagation();
      }
  }, d = Te(/* @__PURE__ */ g5(Hf), "@react-aria/menu"), { longPressProps: c } = Fd({
    isDisabled: a || i !== "longPress",
    accessibilityDescription: d.format("longPressMessage"),
    onLongPressStart() {
      t.close();
    },
    onLongPress() {
      t.open("first");
    }
  }), f = {
    onPressStart(p) {
      p.pointerType !== "touch" && p.pointerType !== "keyboard" && !a && t.toggle(p.pointerType === "virtual" ? "first" : null);
    },
    onPress(p) {
      p.pointerType === "touch" && !a && t.toggle();
    }
  };
  return delete o.onPress, {
    menuTriggerProps: {
      ...o,
      ...i === "press" ? f : c,
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
const w4 = /* @__PURE__ */ new WeakMap();
function $5(e, t, r) {
  let { shouldFocusWrap: n = !0, onKeyDown: a, onKeyUp: i, ...l } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let o = X(e, {
    labelable: !0
  }), { listProps: u } = Ho({
    ...l,
    ref: r,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    shouldFocusWrap: n,
    linkBehavior: "override"
  });
  return w4.set(t, {
    onClose: e.onClose,
    onAction: e.onAction
  }), {
    menuProps: _(o, {
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
function S4(e, t, r) {
  var n;
  let { key: a, closeOnSelect: i, isVirtualized: l, "aria-haspopup": o, onPressStart: u, onPressUp: s, onPress: d, onPressChange: c, onPressEnd: f, onHoverStart: p, onHoverChange: b, onHoverEnd: m, onKeyDown: h, onKeyUp: y, onFocus: $, onFocusChange: x, onBlur: C } = e, w = !!o;
  var A;
  let M = (A = e.isDisabled) !== null && A !== void 0 ? A : t.disabledKeys.has(a);
  var v;
  let I = (v = e.isSelected) !== null && v !== void 0 ? v : t.selectionManager.isSelected(a), T = w4.get(t), E = e.onClose || T.onClose, B = w ? () => {
  } : e.onAction || T.onAction, S = ea(), F = (oe) => {
    B && B(a), oe.target instanceof HTMLAnchorElement && S.open(oe.target, oe);
  }, V = "menuitem";
  w || (t.selectionManager.selectionMode === "single" ? V = "menuitemradio" : t.selectionManager.selectionMode === "multiple" && (V = "menuitemcheckbox"));
  let R = Kt(), D = Kt(), H = Kt(), U = {
    "aria-disabled": M || void 0,
    role: V,
    "aria-label": e["aria-label"],
    "aria-labelledby": R,
    "aria-describedby": [
      D,
      H
    ].filter(Boolean).join(" ") || void 0,
    "aria-controls": e["aria-controls"],
    "aria-haspopup": o,
    "aria-expanded": e["aria-expanded"]
  };
  t.selectionManager.selectionMode !== "none" && !w && (U["aria-checked"] = I);
  let O = t.collection.getItem(a);
  l && (U["aria-posinset"] = O == null ? void 0 : O.index, U["aria-setsize"] = Wo(t.collection));
  let L = (oe) => {
    oe.pointerType === "keyboard" && F(oe), u == null || u(oe);
  }, K = (oe) => {
    oe.pointerType !== "keyboard" && (F(oe), !w && E && (i ?? (t.selectionManager.selectionMode !== "multiple" || t.selectionManager.isLink(a))) && E()), s == null || s(oe);
  }, { itemProps: q, isFocused: ae } = mn({
    selectionManager: t.selectionManager,
    key: a,
    ref: r,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    // Disable all handling of links in useSelectable item
    // because we handle it ourselves. The behavior of menus
    // is slightly different from other collections because
    // actions are performed on key down rather than key up.
    linkBehavior: "none"
  }), { pressProps: de, isPressed: Ee } = st({
    onPressStart: L,
    onPress: d,
    onPressUp: K,
    onPressChange: c,
    onPressEnd: f,
    isDisabled: M
  }), { hoverProps: j } = ke({
    isDisabled: M,
    onHoverStart(oe) {
      Tr() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(a)), p == null || p(oe);
    },
    onHoverChange: b,
    onHoverEnd: m
  }), { keyboardProps: ee } = Ci({
    onKeyDown: (oe) => {
      if (oe.repeat) {
        oe.continuePropagation();
        return;
      }
      switch (oe.key) {
        case " ":
          !M && t.selectionManager.selectionMode === "none" && !w && i !== !1 && E && E();
          break;
        case "Enter":
          !M && i !== !1 && !w && E && E();
          break;
        default:
          w || oe.continuePropagation(), h == null || h(oe);
          break;
      }
    },
    onKeyUp: y
  }), { focusProps: ce } = xi({
    onBlur: C,
    onFocus: $,
    onFocusChange: x
  }), $e = X(O.props, {
    isLink: !!(!(O == null || (n = O.props) === null || n === void 0) && n.href)
  });
  return delete $e.id, {
    menuItemProps: {
      ...U,
      ..._($e, w ? {
        onFocus: q.onFocus
      } : q, de, j, ee, ce),
      tabIndex: q.tabIndex != null ? -1 : void 0
    },
    labelProps: {
      id: R
    },
    descriptionProps: {
      id: D
    },
    keyboardShortcutProps: {
      id: H
    },
    isFocused: ae,
    isSelected: I,
    isPressed: Ee,
    isDisabled: M
  };
}
function y5(e) {
  let { heading: t, "aria-label": r } = e, n = ye();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: t ? {
      // Techincally, menus cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a label for the nested group.
      id: n,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": r,
      "aria-labelledby": t ? n : void 0
    }
  };
}
const za = 2, x5 = 50, D5 = 1e3, Is = Math.PI / 12;
function C5(e) {
  let { menuRef: t, submenuRef: r, isOpen: n, isDisabled: a } = e, i = N(), l = N(), o = N(0), u = N(), s = N(), d = N(), c = N(2), [f, p] = Y(!1);
  ta({
    ref: r,
    onResize: () => {
      r.current && (l.current = r.current.getBoundingClientRect(), d.current = void 0);
    }
  });
  let m = () => {
    p(!1), c.current = za;
  }, h = na();
  te(() => {
    f && t.current ? t.current.style.pointerEvents = "none" : t.current.style.pointerEvents = "";
  }, [
    t,
    f
  ]), te(() => {
    let y = r.current, $ = t.current;
    if (a || !y || !n || h !== "pointer") {
      m();
      return;
    }
    l.current = y.getBoundingClientRect();
    let x = (C) => {
      if (C.pointerType === "touch" || C.pointerType === "pen")
        return;
      let w = Date.now();
      if (w - o.current < x5)
        return;
      clearTimeout(u.current), clearTimeout(s.current);
      let { clientX: A, clientY: M } = C;
      if (!i.current) {
        i.current = {
          x: A,
          y: M
        };
        return;
      }
      if (!l.current)
        return;
      if (d.current || (d.current = A > l.current.right ? "left" : "right"), A < $.getBoundingClientRect().left || A > $.getBoundingClientRect().right || M < $.getBoundingClientRect().top || M > $.getBoundingClientRect().bottom) {
        m();
        return;
      }
      let v = i.current.x, I = i.current.y, T = d.current === "right" ? l.current.left - v : v - l.current.right, E = Math.atan2(I - l.current.top, T) + Is, B = Math.atan2(I - l.current.bottom, T) - Is, S = Math.atan2(I - M, d.current === "left" ? -(A - v) : A - v), F = S < E && S > B;
      c.current = F ? Math.min(c.current + 1, za) : Math.max(c.current - 1, 0), c.current >= za ? p(!0) : p(!1), o.current = w, i.current = {
        x: A,
        y: M
      }, F && (u.current = setTimeout(() => {
        m(), s.current = setTimeout(() => {
          let V = document.elementFromPoint(A, M);
          V && $.contains(V) && V.dispatchEvent(new PointerEvent("pointerover", {
            bubbles: !0,
            cancelable: !0
          }));
        }, 100);
      }, D5));
    };
    return window.addEventListener("pointermove", x), () => {
      window.removeEventListener("pointermove", x), clearTimeout(u.current), clearTimeout(s.current), c.current = za;
    };
  }, [
    a,
    n,
    t,
    h,
    p,
    r
  ]);
}
function E5(e, t, r) {
  let { parentMenuRef: n, submenuRef: a, type: i = "menu", isDisabled: l, node: o, delay: u = 200 } = e, s = ye(), d = ye(), { direction: c } = be(), f = N(), p = re(() => {
    f.current && (clearTimeout(f.current), f.current = void 0);
  }, [
    f
  ]), b = Be((v) => {
    p(), t.open(v);
  }), m = Be(() => {
    p(), t.close();
  });
  ge(() => () => {
    p();
  }, [
    p
  ]);
  let h = (v) => {
    switch (v.key) {
      case "ArrowLeft":
        c === "ltr" && v.currentTarget.contains(v.target) && (v.stopPropagation(), m(), r.current.focus());
        break;
      case "ArrowRight":
        c === "rtl" && v.currentTarget.contains(v.target) && (v.stopPropagation(), m(), r.current.focus());
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
        l || (c === "ltr" ? (t.isOpen || b("first"), i === "menu" && (a != null && a.current) && document.activeElement === (r == null ? void 0 : r.current) && a.current.focus()) : t.isOpen ? m() : v.continuePropagation());
        break;
      case "ArrowLeft":
        l || (c === "rtl" ? (t.isOpen || b("first"), i === "menu" && (a != null && a.current) && document.activeElement === (r == null ? void 0 : r.current) && a.current.focus()) : t.isOpen ? m() : v.continuePropagation());
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
  }, w = (v) => {
    l || (v && !t.isOpen ? f.current || (f.current = setTimeout(() => {
      b();
    }, u)) : v || p());
  }, A = (v) => {
    t.isOpen && n.current.contains(v.relatedTarget) && m();
  }, M = (v) => v !== r.current;
  return C5({
    menuRef: n,
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
      onHoverChange: w,
      onKeyDown: $,
      onBlur: A,
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
function Ri(e, t) {
  let { inputElementType: r = "input", isDisabled: n = !1, isRequired: a = !1, isReadOnly: i = !1, type: l = "text", validationBehavior: o = "aria" } = e, [u, s] = We(e.value, e.defaultValue || "", e.onChange), { focusableProps: d } = Nr(e, t), c = At({
    ...e,
    value: u
  }), { isInvalid: f, validationErrors: p, validationDetails: b } = c.displayValidation, { labelProps: m, fieldProps: h, descriptionProps: y, errorMessageProps: $ } = $r({
    ...e,
    isInvalid: f,
    errorMessage: e.errorMessage || p
  }), x = X(e, {
    labelable: !0
  });
  const C = {
    type: l,
    pattern: e.pattern
  };
  return Ir(t, u, s), sa(e, c, t), te(() => {
    if (t.current instanceof gt(t.current).HTMLTextAreaElement) {
      let w = t.current;
      Object.defineProperty(w, "defaultValue", {
        get: () => w.value,
        set: () => {
        },
        configurable: !0
      });
    }
  }, [
    t
  ]), {
    labelProps: m,
    inputProps: _(x, r === "input" && C, {
      disabled: n,
      readOnly: i,
      required: a && o === "native",
      "aria-required": a && o === "aria" || void 0,
      "aria-invalid": f || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-activedescendant": e["aria-activedescendant"],
      "aria-autocomplete": e["aria-autocomplete"],
      "aria-haspopup": e["aria-haspopup"],
      value: u,
      onChange: (w) => s(w.target.value),
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
    isInvalid: f,
    validationErrors: p,
    validationDetails: b
  };
}
function Ns() {
  return typeof window < "u" && window.InputEvent && // @ts-ignore
  typeof InputEvent.prototype.getTargetRanges == "function";
}
function P5(e, t, r) {
  let n = Be((c) => {
    let f = r.current, p;
    switch (c.inputType) {
      case "historyUndo":
      case "historyRedo":
        return;
      case "deleteContent":
      case "deleteByCut":
      case "deleteByDrag":
        p = f.value.slice(0, f.selectionStart) + f.value.slice(f.selectionEnd);
        break;
      case "deleteContentForward":
        p = f.selectionEnd === f.selectionStart ? f.value.slice(0, f.selectionStart) + f.value.slice(f.selectionEnd + 1) : f.value.slice(0, f.selectionStart) + f.value.slice(f.selectionEnd);
        break;
      case "deleteContentBackward":
        p = f.selectionEnd === f.selectionStart ? f.value.slice(0, f.selectionStart - 1) + f.value.slice(f.selectionStart) : f.value.slice(0, f.selectionStart) + f.value.slice(f.selectionEnd);
        break;
      case "deleteSoftLineBackward":
      case "deleteHardLineBackward":
        p = f.value.slice(f.selectionStart);
        break;
      default:
        c.data != null && (p = f.value.slice(0, f.selectionStart) + c.data + f.value.slice(f.selectionEnd));
        break;
    }
    (p == null || !t.validate(p)) && c.preventDefault();
  });
  te(() => {
    if (!Ns())
      return;
    let c = r.current;
    return c.addEventListener("beforeinput", n, !1), () => {
      c.removeEventListener("beforeinput", n, !1);
    };
  }, [
    r,
    n
  ]);
  let a = Ns() ? null : (c) => {
    let f = c.target.value.slice(0, c.target.selectionStart) + c.data + c.target.value.slice(c.target.selectionEnd);
    t.validate(f) || c.preventDefault();
  }, { labelProps: i, inputProps: l, descriptionProps: o, errorMessageProps: u, ...s } = Ri(e, r), d = N(null);
  return {
    inputProps: _(l, {
      onBeforeInput: a,
      onCompositionStart() {
        let { value: c, selectionStart: f, selectionEnd: p } = r.current;
        d.current = {
          value: c,
          selectionStart: f,
          selectionEnd: p
        };
      },
      onCompositionEnd() {
        if (!t.validate(r.current.value)) {
          let { value: c, selectionStart: f, selectionEnd: p } = d.current;
          r.current.value = c, r.current.setSelectionRange(f, p), t.setInputValue(c);
        }
      }
    }),
    labelProps: i,
    descriptionProps: o,
    errorMessageProps: u,
    ...s
  };
}
function w5(e) {
  return e && e.__esModule ? e.default : e;
}
var B4 = {}, k4 = {};
k4 = {
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
var F4 = {};
F4 = {
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
var A4 = {};
A4 = {
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
var T4 = {};
T4 = {
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
var R4 = {};
R4 = {
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
var M4 = {};
M4 = {
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
var I4 = {};
I4 = {
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
var N4 = {};
N4 = {
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
var K4 = {};
K4 = {
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
var z4 = {};
z4 = {
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
var V4 = {};
V4 = {
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
var L4 = {};
L4 = {
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
var O4 = {};
O4 = {
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
var j4 = {};
j4 = {
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
var _4 = {};
_4 = {
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
var H4 = {};
H4 = {
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
var U4 = {};
U4 = {
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
var W4 = {};
W4 = {
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
var G4 = {};
G4 = {
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
var Z4 = {};
Z4 = {
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
var q4 = {};
q4 = {
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
var Y4 = {};
Y4 = {
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
var J4 = {};
J4 = {
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
var X4 = {};
X4 = {
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
var Q4 = {};
Q4 = {
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
var e0 = {};
e0 = {
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
var t0 = {};
t0 = {
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
var r0 = {};
r0 = {
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
var n0 = {};
n0 = {
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
var a0 = {};
a0 = {
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
var i0 = {};
i0 = {
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
var l0 = {};
l0 = {
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
var o0 = {};
o0 = {
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
var u0 = {};
u0 = {
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
B4 = {
  "ar-AE": k4,
  "bg-BG": F4,
  "cs-CZ": A4,
  "da-DK": T4,
  "de-DE": R4,
  "el-GR": M4,
  "en-US": I4,
  "es-ES": N4,
  "et-EE": K4,
  "fi-FI": z4,
  "fr-FR": V4,
  "he-IL": L4,
  "hr-HR": O4,
  "hu-HU": j4,
  "it-IT": _4,
  "ja-JP": H4,
  "ko-KR": U4,
  "lt-LT": W4,
  "lv-LV": G4,
  "nb-NO": Z4,
  "nl-NL": q4,
  "pl-PL": Y4,
  "pt-BR": J4,
  "pt-PT": X4,
  "ro-RO": Q4,
  "ru-RU": e0,
  "sk-SK": t0,
  "sl-SI": r0,
  "sr-SP": n0,
  "sv-SE": a0,
  "tr-TR": i0,
  "uk-UA": l0,
  "zh-CN": o0,
  "zh-TW": u0
};
function S5(e, t) {
  let { buttonRef: r, popoverRef: n, inputRef: a, listBoxRef: i, keyboardDelegate: l, shouldFocusWrap: o, isReadOnly: u, isDisabled: s } = e, d = Te(/* @__PURE__ */ w5(B4), "@react-aria/combobox"), { menuTriggerProps: c, menuProps: f } = P4({
    type: "listbox",
    isDisabled: s || u
  }, t, r);
  Ti.set(t, {
    id: f.id
  });
  let p = z(() => l || new zr(t.collection, t.disabledKeys, i), [
    l,
    t.collection,
    t.disabledKeys,
    i
  ]), { collectionProps: b } = Ai({
    selectionManager: t.selectionManager,
    keyboardDelegate: p,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: o,
    ref: a,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), m = ea(), h = (j) => {
    switch (j.key) {
      case "Enter":
      case "Tab":
        if (t.isOpen && j.key === "Enter" && j.preventDefault(), t.isOpen && t.selectionManager.focusedKey != null && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
          if (j.key === "Enter") {
            let ee = i.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
            ee instanceof HTMLAnchorElement && m.open(ee, j);
          }
          t.close();
        } else
          t.commit();
        break;
      case "Escape":
        (t.selectedKey !== null || t.inputValue === "" || e.allowsCustomValue) && j.continuePropagation(), t.revert();
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
  }, y = (j) => {
    var ee;
    j.relatedTarget === (r == null ? void 0 : r.current) || !((ee = n.current) === null || ee === void 0) && ee.contains(j.relatedTarget) || (e.onBlur && e.onBlur(j), t.setFocused(!1));
  }, $ = (j) => {
    t.isFocused || (e.onFocus && e.onFocus(j), t.setFocused(!0));
  }, { isInvalid: x, validationErrors: C, validationDetails: w } = t.displayValidation, { labelProps: A, inputProps: M, descriptionProps: v, errorMessageProps: I } = Ri({
    ...e,
    onChange: t.setInputValue,
    onKeyDown: u ? e.onKeyDown : Bt(t.isOpen && b.onKeyDown, h, e.onKeyDown),
    onBlur: y,
    value: t.inputValue,
    onFocus: $,
    autoComplete: "off",
    validate: void 0,
    [vr]: t
  }, a), T = (j) => {
    j.pointerType === "touch" && (a.current.focus(), t.toggle(null, "manual"));
  }, E = (j) => {
    j.pointerType !== "touch" && (a.current.focus(), t.toggle(j.pointerType === "keyboard" || j.pointerType === "virtual" ? "first" : null, "manual"));
  }, B = er({
    id: c.id,
    "aria-label": d.format("buttonLabel"),
    "aria-labelledby": e["aria-labelledby"] || A.id
  }), S = er({
    id: f.id,
    "aria-label": d.format("listboxLabel"),
    "aria-labelledby": e["aria-labelledby"] || A.id
  }), F = N(0), V = (j) => {
    if (s || u)
      return;
    if (j.timeStamp - F.current < 500) {
      j.preventDefault(), a.current.focus();
      return;
    }
    let ee = j.target.getBoundingClientRect(), ce = j.changedTouches[0], $e = Math.ceil(ee.left + 0.5 * ee.width), oe = Math.ceil(ee.top + 0.5 * ee.height);
    ce.clientX === $e && ce.clientY === oe && (j.preventDefault(), a.current.focus(), t.toggle(null, "manual"), F.current = j.timeStamp);
  }, R = t.selectionManager.focusedKey != null && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0;
  var D;
  let H = (D = R == null ? void 0 : R.parentKey) !== null && D !== void 0 ? D : null;
  var U;
  let O = (U = t.selectionManager.focusedKey) !== null && U !== void 0 ? U : null, L = N(H), K = N(O);
  te(() => {
    if (Oa() && R != null && O !== K.current) {
      let j = t.selectionManager.isSelected(O), ee = H != null ? t.collection.getItem(H) : null, ce = (ee == null ? void 0 : ee["aria-label"]) || (typeof (ee == null ? void 0 : ee.rendered) == "string" ? ee.rendered : "") || "", $e = d.format("focusAnnouncement", {
        isGroupChange: ee && H !== L.current,
        groupTitle: ce,
        groupCount: ee ? [
          ...Re(ee, t.collection)
        ].length : 0,
        optionText: R["aria-label"] || R.textValue || "",
        isSelected: j
      });
      hr($e);
    }
    L.current = H, K.current = O;
  });
  let q = Wo(t.collection), ae = N(q), de = N(t.isOpen);
  te(() => {
    let j = t.isOpen !== de.current && (t.selectionManager.focusedKey == null || Oa());
    if (t.isOpen && (j || q !== ae.current)) {
      let ee = d.format("countAnnouncement", {
        optionCount: q
      });
      hr(ee);
    }
    ae.current = q, de.current = t.isOpen;
  });
  let Ee = N(t.selectedKey);
  return te(() => {
    if (Oa() && t.isFocused && t.selectedItem && t.selectedKey !== Ee.current) {
      let j = t.selectedItem["aria-label"] || t.selectedItem.textValue || "", ee = d.format("selectedAnnouncement", {
        optionText: j
      });
      hr(ee);
    }
    Ee.current = t.selectedKey;
  }), te(() => {
    if (t.isOpen)
      return _o([
        a.current,
        n.current
      ]);
  }, [
    t.isOpen,
    a,
    n
  ]), {
    labelProps: A,
    buttonProps: {
      ...c,
      ...B,
      excludeFromTabOrder: !0,
      onPress: T,
      onPressStart: E,
      isDisabled: s || u
    },
    inputProps: _(M, {
      role: "combobox",
      "aria-expanded": c["aria-expanded"],
      "aria-controls": t.isOpen ? f.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": R ? _f(t, R.key) : void 0,
      onTouchEnd: V,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: _(f, S, {
      autoFocus: t.focusStrategy,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: v,
    errorMessageProps: I,
    isInvalid: x,
    validationErrors: C,
    validationDetails: w
  };
}
function B5(e) {
  return e && e.__esModule ? e.default : e;
}
var s0 = {}, d0 = {};
d0 = {
  Empty: "فارغ"
};
var c0 = {};
c0 = {
  Empty: "Изпразни"
};
var f0 = {};
f0 = {
  Empty: "Prázdné"
};
var p0 = {};
p0 = {
  Empty: "Tom"
};
var b0 = {};
b0 = {
  Empty: "Leer"
};
var m0 = {};
m0 = {
  Empty: "Άδειο"
};
var h0 = {};
h0 = {
  Empty: "Empty"
};
var v0 = {};
v0 = {
  Empty: "Vacío"
};
var g0 = {};
g0 = {
  Empty: "Tühjenda"
};
var $0 = {};
$0 = {
  Empty: "Tyhjä"
};
var y0 = {};
y0 = {
  Empty: "Vide"
};
var x0 = {};
x0 = {
  Empty: "ריק"
};
var D0 = {};
D0 = {
  Empty: "Prazno"
};
var C0 = {};
C0 = {
  Empty: "Üres"
};
var E0 = {};
E0 = {
  Empty: "Vuoto"
};
var P0 = {};
P0 = {
  Empty: "空"
};
var w0 = {};
w0 = {
  Empty: "비어 있음"
};
var S0 = {};
S0 = {
  Empty: "Tuščias"
};
var B0 = {};
B0 = {
  Empty: "Tukšs"
};
var k0 = {};
k0 = {
  Empty: "Tom"
};
var F0 = {};
F0 = {
  Empty: "Leeg"
};
var A0 = {};
A0 = {
  Empty: "Pusty"
};
var T0 = {};
T0 = {
  Empty: "Vazio"
};
var R0 = {};
R0 = {
  Empty: "Vazio"
};
var M0 = {};
M0 = {
  Empty: "Gol"
};
var I0 = {};
I0 = {
  Empty: "Не заполнено"
};
var N0 = {};
N0 = {
  Empty: "Prázdne"
};
var K0 = {};
K0 = {
  Empty: "Prazen"
};
var z0 = {};
z0 = {
  Empty: "Prazno"
};
var V0 = {};
V0 = {
  Empty: "Tomt"
};
var L0 = {};
L0 = {
  Empty: "Boş"
};
var O0 = {};
O0 = {
  Empty: "Пусто"
};
var j0 = {};
j0 = {
  Empty: "空"
};
var _0 = {};
_0 = {
  Empty: "空白"
};
s0 = {
  "ar-AE": d0,
  "bg-BG": c0,
  "cs-CZ": f0,
  "da-DK": p0,
  "de-DE": b0,
  "el-GR": m0,
  "en-US": h0,
  "es-ES": v0,
  "et-EE": g0,
  "fi-FI": $0,
  "fr-FR": y0,
  "he-IL": x0,
  "hr-HR": D0,
  "hu-HU": C0,
  "it-IT": E0,
  "ja-JP": P0,
  "ko-KR": w0,
  "lt-LT": S0,
  "lv-LV": B0,
  "nb-NO": k0,
  "nl-NL": F0,
  "pl-PL": A0,
  "pt-BR": T0,
  "pt-PT": R0,
  "ro-RO": M0,
  "ru-RU": I0,
  "sk-SK": N0,
  "sl-SI": K0,
  "sr-SP": z0,
  "sv-SE": V0,
  "tr-TR": L0,
  "uk-UA": O0,
  "zh-CN": j0,
  "zh-TW": _0
};
function H0(e) {
  const t = N();
  let { value: r, textValue: n, minValue: a, maxValue: i, isDisabled: l, isReadOnly: o, isRequired: u, onIncrement: s, onIncrementPage: d, onDecrement: c, onDecrementPage: f, onDecrementToMin: p, onIncrementToMax: b } = e;
  const m = Te(/* @__PURE__ */ B5(s0), "@react-aria/spinbutton"), h = () => clearTimeout(t.current);
  te(() => () => h(), []);
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
          if (f) {
            E.preventDefault(), f == null || f();
            break;
          }
        case "ArrowDown":
        case "Down":
          c && (E.preventDefault(), c == null || c());
          break;
        case "Home":
          p && (E.preventDefault(), p == null || p());
          break;
        case "End":
          b && (E.preventDefault(), b == null || b());
          break;
      }
  }, $ = N(!1), x = () => {
    $.current = !0;
  }, C = () => {
    $.current = !1;
  }, w = n === "" ? m.format("Empty") : (n || `${r}`).replace("-", "−");
  te(() => {
    $.current && (B1("assertive"), hr(w, "assertive"));
  }, [
    w
  ]);
  const A = Be((E) => {
    h(), s == null || s(), t.current = window.setTimeout(() => {
      (i === void 0 || isNaN(i) || r === void 0 || isNaN(r) || r < i) && A(60);
    }, E);
  }), M = Be((E) => {
    h(), c == null || c(), t.current = window.setTimeout(() => {
      (a === void 0 || isNaN(a) || r === void 0 || isNaN(r) || r > a) && M(60);
    }, E);
  });
  let v = (E) => {
    E.preventDefault();
  }, { addGlobalListener: I, removeAllGlobalListeners: T } = pn();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": r !== void 0 && !isNaN(r) ? r : void 0,
      "aria-valuetext": w,
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
        A(400), I(window, "contextmenu", v);
      },
      onPressEnd: () => {
        h(), T();
      },
      onFocus: x,
      onBlur: C
    },
    decrementButtonProps: {
      onPressStart: () => {
        M(400), I(window, "contextmenu", v);
      },
      onPressEnd: () => {
        h(), T();
      },
      onFocus: x,
      onBlur: C
    }
  };
}
function Mi(e) {
  return e && e.__esModule ? e.default : e;
}
var ca = {}, U0 = {};
U0 = {
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
var W0 = {};
W0 = {
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
var G0 = {};
G0 = {
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
var Z0 = {};
Z0 = {
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
var q0 = {};
q0 = {
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
var Y0 = {};
Y0 = {
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
var J0 = {};
J0 = {
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
var X0 = {};
X0 = {
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
var Q0 = {};
Q0 = {
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
var ep = {};
ep = {
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
var tp = {};
tp = {
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
var rp = {};
rp = {
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
var np = {};
np = {
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
var ap = {};
ap = {
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
var ip = {};
ip = {
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
var lp = {};
lp = {
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
var op = {};
op = {
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
var up = {};
up = {
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
var sp = {};
sp = {
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
var dp = {};
dp = {
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
var cp = {};
cp = {
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
var fp = {};
fp = {
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
var pp = {};
pp = {
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
var bp = {};
bp = {
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
var mp = {};
mp = {
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
var hp = {};
hp = {
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
var vp = {};
vp = {
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
var gp = {};
gp = {
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
var $p = {};
$p = {
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
var yp = {};
yp = {
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
var xp = {};
xp = {
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
var Dp = {};
Dp = {
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
var Cp = {};
Cp = {
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
var Ep = {};
Ep = {
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
ca = {
  "ar-AE": U0,
  "bg-BG": W0,
  "cs-CZ": G0,
  "da-DK": Z0,
  "de-DE": q0,
  "el-GR": Y0,
  "en-US": J0,
  "es-ES": X0,
  "et-EE": Q0,
  "fi-FI": ep,
  "fr-FR": tp,
  "he-IL": rp,
  "hr-HR": np,
  "hu-HU": ap,
  "it-IT": ip,
  "ja-JP": lp,
  "ko-KR": op,
  "lt-LT": up,
  "lv-LV": sp,
  "nb-NO": dp,
  "nl-NL": cp,
  "pl-PL": fp,
  "pt-BR": pp,
  "pt-PT": bp,
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
function Go(e, t, r) {
  let { direction: n } = be(), a = z(() => ia(t), [
    t
  ]), i = (u) => {
    if (u.currentTarget.contains(u.target) && (u.altKey && (u.key === "ArrowDown" || u.key === "ArrowUp") && "setOpen" in e && (u.preventDefault(), u.stopPropagation(), e.setOpen(!0)), !r))
      switch (u.key) {
        case "ArrowLeft":
          u.preventDefault(), u.stopPropagation(), n === "rtl" ? a.focusNext() : a.focusPrevious();
          break;
        case "ArrowRight":
          u.preventDefault(), u.stopPropagation(), n === "rtl" ? a.focusPrevious() : a.focusNext();
          break;
      }
  }, l = () => {
    var u;
    let s = (u = window.event) === null || u === void 0 ? void 0 : u.target, d = Ue(t.current, {
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
  }, { pressProps: o } = st({
    preventFocusOnPress: !0,
    allowTextSelectionOnPress: !0,
    onPressStart(u) {
      u.pointerType === "mouse" && l();
    },
    onPress(u) {
      u.pointerType !== "mouse" && l();
    }
  });
  return _(o, {
    onKeyDown: i
  });
}
const Pp = /* @__PURE__ */ new WeakMap(), Kn = "__role_" + Date.now(), wp = "__focusManager_" + Date.now();
function Zo(e, t, r) {
  var n;
  let { isInvalid: a, validationErrors: i, validationDetails: l } = t.displayValidation, { labelProps: o, fieldProps: u, descriptionProps: s, errorMessageProps: d } = $r({
    ...e,
    labelElementType: "span",
    isInvalid: a,
    errorMessage: e.errorMessage || i
  }), c = N(null), { focusWithinProps: f } = Ft({
    ...e,
    onFocusWithin(T) {
      var E;
      c.current = t.value, (E = e.onFocus) === null || E === void 0 || E.call(e, T);
    },
    onBlurWithin: (T) => {
      var E;
      t.confirmPlaceholder(), t.value !== c.current && t.commitValidation(), (E = e.onBlur) === null || E === void 0 || E.call(e, T);
    },
    onFocusWithinChange: e.onFocusChange
  }), p = Te(/* @__PURE__ */ Mi(ca), "@react-aria/datepicker"), b = t.maxGranularity === "hour" ? "selectedTimeDescription" : "selectedDateDescription", m = t.maxGranularity === "hour" ? "time" : "date", h = t.value ? p.format(b, {
    [m]: t.formatValue({
      month: "long"
    })
  }) : "", y = Vt(h), $ = e[Kn] === "presentation" ? u["aria-describedby"] : [
    y["aria-describedby"],
    u["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, x = e[wp], C = z(() => x || ia(r), [
    x,
    r
  ]), w = Go(t, r, e[Kn] === "presentation");
  Pp.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [
      o.id,
      e["aria-labelledby"]
    ].filter(Boolean).join(" ") || void 0,
    ariaDescribedBy: $,
    focusManager: C
  });
  let A = N(e.autoFocus), M;
  e[Kn] === "presentation" ? M = {
    role: "presentation"
  } : M = _(u, {
    role: "group",
    "aria-disabled": e.isDisabled || void 0,
    "aria-describedby": $
  }), te(() => {
    A.current && C.focusFirst(), A.current = !1;
  }, [
    C
  ]), Ir(e.inputRef, t.value, t.setValue), sa({
    ...e,
    focus() {
      C.focusFirst();
    }
  }, t, e.inputRef);
  let v = {
    type: "hidden",
    name: e.name,
    value: ((n = t.value) === null || n === void 0 ? void 0 : n.toString()) || ""
  };
  e.validationBehavior === "native" && (v.type = "text", v.hidden = !0, v.required = e.isRequired, v.onChange = () => {
  });
  let I = X(e);
  return {
    labelProps: {
      ...o,
      onClick: () => {
        C.focusFirst();
      }
    },
    fieldProps: _(I, M, w, f, {
      onKeyDown(T) {
        e.onKeyDown && e.onKeyDown(T);
      },
      onKeyUp(T) {
        e.onKeyUp && e.onKeyUp(T);
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
function k5(e, t, r) {
  var n;
  let a = Zo(e, t, r);
  return a.inputProps.value = ((n = t.timeValue) === null || n === void 0 ? void 0 : n.toString()) || "", a;
}
function F5(e, t, r) {
  let n = ye(), a = ye(), i = ye(), l = Te(/* @__PURE__ */ Mi(ca), "@react-aria/datepicker"), { isInvalid: o, validationErrors: u, validationDetails: s } = t.displayValidation, { labelProps: d, fieldProps: c, descriptionProps: f, errorMessageProps: p } = $r({
    ...e,
    labelElementType: "span",
    isInvalid: o,
    errorMessage: e.errorMessage || u
  }), b = Go(t, r), m = c["aria-labelledby"] || c.id, { locale: h } = be(), y = t.formatValue(h, {
    month: "long"
  }), $ = y ? l.format("selectedDateDescription", {
    date: y
  }) : "", x = Vt($), C = [
    x["aria-describedby"],
    c["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, w = X(e), A = z(() => ia(r), [
    r
  ]), { focusWithinProps: M } = Ft({
    ...e,
    isDisabled: t.isOpen,
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  });
  return {
    groupProps: _(w, b, c, x, M, {
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
        A.focusFirst();
      }
    },
    fieldProps: {
      ...c,
      id: i,
      [Kn]: "presentation",
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
      [vr]: t,
      autoFocus: e.autoFocus,
      name: e.name
    },
    descriptionProps: f,
    errorMessageProps: p,
    buttonProps: {
      ...x,
      id: n,
      "aria-haspopup": "dialog",
      "aria-label": l.format("calendar"),
      "aria-labelledby": `${n} ${m}`,
      "aria-describedby": C,
      "aria-expanded": t.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => t.setOpen(!0)
    },
    dialogProps: {
      id: a,
      "aria-labelledby": `${n} ${m}`
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
function A5() {
  let { locale: e } = be(), t = uc(/* @__PURE__ */ Mi(ca), "@react-aria/datepicker");
  return z(() => {
    try {
      return new Intl.DisplayNames(e, {
        type: "dateTimeField"
      });
    } catch {
      return new T5(e, t);
    }
  }, [
    e,
    t
  ]);
}
class T5 {
  of(t) {
    return this.dictionary.getStringForLocale(t, this.locale);
  }
  constructor(t, r) {
    this.locale = t, this.dictionary = r;
  }
}
function R5(e, t, r) {
  let n = N(""), { locale: a } = be(), i = A5(), { ariaLabel: l, ariaLabelledBy: o, ariaDescribedBy: u, focusManager: s } = Pp.get(t), d = e.isPlaceholder ? "" : e.text, c = z(() => t.dateFormatter.resolvedOptions(), [
    t.dateFormatter
  ]), f = Nt({
    month: "long",
    timeZone: c.timeZone
  }), p = Nt({
    hour: "numeric",
    hour12: c.hour12,
    timeZone: c.timeZone
  });
  if (e.type === "month" && !e.isPlaceholder) {
    let D = f.format(t.dateValue);
    d = D !== d ? `${d} – ${D}` : D;
  } else
    e.type === "hour" && !e.isPlaceholder && (d = p.format(t.dateValue));
  let { spinButtonProps: b } = H0({
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
      n.current = "", t.increment(e.type);
    },
    onDecrement: () => {
      n.current = "", t.decrement(e.type);
    },
    onIncrementPage: () => {
      n.current = "", t.incrementPage(e.type);
    },
    onDecrementPage: () => {
      n.current = "", t.decrementPage(e.type);
    },
    onIncrementToMax: () => {
      n.current = "", t.setSegment(e.type, e.maxValue);
    },
    onDecrementToMin: () => {
      n.current = "", t.setSegment(e.type, e.minValue);
    }
  }), m = z(() => new Oo(a, {
    maximumFractionDigits: 0
  }), [
    a
  ]), h = () => {
    if (m.isValidPartialNumber(e.text) && !t.isReadOnly && !e.isPlaceholder) {
      let D = e.text.slice(0, -1), H = m.parse(D);
      D.length === 0 || H === 0 ? t.clearSegment(e.type) : t.setSegment(e.type, H), n.current = D;
    } else
      e.type === "dayPeriod" && t.clearSegment(e.type);
  }, y = (D) => {
    if (D.key === "a" && (Qt() ? D.metaKey : D.ctrlKey) && D.preventDefault(), !(D.ctrlKey || D.metaKey || D.shiftKey || D.altKey))
      switch (D.key) {
        case "Backspace":
        case "Delete":
          D.preventDefault(), D.stopPropagation(), h();
          break;
      }
  }, { startsWith: $ } = sc({
    sensitivity: "base"
  }), x = Nt({
    hour: "numeric",
    hour12: !0
  }), C = z(() => {
    let D = /* @__PURE__ */ new Date();
    return D.setHours(0), x.formatToParts(D).find((H) => H.type === "dayPeriod").value;
  }, [
    x
  ]), w = z(() => {
    let D = /* @__PURE__ */ new Date();
    return D.setHours(12), x.formatToParts(D).find((H) => H.type === "dayPeriod").value;
  }, [
    x
  ]), A = Nt({
    year: "numeric",
    era: "narrow",
    timeZone: "UTC"
  }), M = z(() => {
    if (e.type !== "era")
      return [];
    let D = Ae(new Oe(1, 1, 1), t.calendar), H = t.calendar.getEras().map((O) => {
      let L = D.set({
        year: 1,
        month: 1,
        day: 1,
        era: O
      }).toDate("UTC"), q = A.formatToParts(L).find((ae) => ae.type === "era").value;
      return {
        era: O,
        formatted: q
      };
    }), U = M5(H.map((O) => O.formatted));
    if (U)
      for (let O of H)
        O.formatted = O.formatted.slice(U);
    return H;
  }, [
    A,
    t.calendar,
    e.type
  ]), v = (D) => {
    if (t.isDisabled || t.isReadOnly)
      return;
    let H = n.current + D;
    switch (e.type) {
      case "dayPeriod":
        if ($(C, D))
          t.setSegment("dayPeriod", 0);
        else if ($(w, D))
          t.setSegment("dayPeriod", 12);
        else
          break;
        s.focusNext();
        break;
      case "era": {
        let U = M.find((O) => $(O.formatted, D));
        U && (t.setSegment("era", U.era), s.focusNext());
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
        let U = m.parse(H), O = U, L = e.minValue === 0;
        if (e.type === "hour" && t.dateFormatter.resolvedOptions().hour12) {
          switch (t.dateFormatter.resolvedOptions().hourCycle) {
            case "h11":
              U > 11 && (O = m.parse(D));
              break;
            case "h12":
              L = !1, U > 12 && (O = m.parse(D));
              break;
          }
          e.value >= 12 && U > 1 && (U += 12);
        } else
          U > e.maxValue && (O = m.parse(D));
        if (isNaN(U))
          return;
        let K = O !== 0 || L;
        K && t.setSegment(e.type, O), +(U + "0") > e.maxValue || H.length >= String(e.maxValue).length ? (n.current = "", K && s.focusNext()) : n.current = H;
        break;
      }
    }
  }, I = () => {
    n.current = "", Xe(r.current, {
      containingElement: Ge(r.current)
    }), window.getSelection().collapse(r.current);
  }, T = N("");
  pr(r, "beforeinput", (D) => {
    switch (D.preventDefault(), D.inputType) {
      case "deleteContentBackward":
      case "deleteContentForward":
        m.isValidPartialNumber(e.text) && !t.isReadOnly && h();
        break;
      case "insertCompositionText":
        T.current = r.current.textContent, r.current.textContent = r.current.textContent;
        break;
      default:
        D.data != null && v(D.data);
        break;
    }
  }), pr(r, "input", (D) => {
    let { inputType: H, data: U } = D;
    switch (H) {
      case "insertCompositionText":
        r.current.textContent = T.current, ($(C, U) || $(w, U)) && v(U);
        break;
    }
  }), ge(() => {
    let D = r.current;
    return () => {
      document.activeElement === D && (s.focusPrevious() || s.focusNext());
    };
  }, [
    r,
    s
  ]);
  let E = fn() || e.type === "timeZoneName" ? {
    role: "textbox",
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuetext": null,
    "aria-valuenow": null
  } : {}, B = z(() => t.segments.find((D) => D.isEditable), [
    t.segments
  ]);
  e !== B && !t.isInvalid && (u = void 0);
  let S = ye(), F = !t.isDisabled && !t.isReadOnly && e.isEditable, V = e.type === "literal" ? "" : i.of(e.type), R = er({
    "aria-label": `${V}${l ? `, ${l}` : ""}${o ? ", " : ""}`,
    "aria-labelledby": o
  });
  return e.type === "literal" ? {
    segmentProps: {
      "aria-hidden": !0
    }
  } : {
    segmentProps: _(b, R, {
      id: S,
      ...E,
      "aria-invalid": t.isInvalid ? "true" : void 0,
      "aria-describedby": u,
      "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
      "data-placeholder": e.isPlaceholder || void 0,
      contentEditable: F,
      suppressContentEditableWarning: F,
      spellCheck: F ? "false" : void 0,
      autoCapitalize: F ? "off" : void 0,
      autoCorrect: F ? "off" : void 0,
      // Capitalization was changed in React 17...
      [parseInt(g.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: F ? "next" : void 0,
      inputMode: t.isDisabled || e.type === "dayPeriod" || e.type === "era" || !F ? void 0 : "numeric",
      tabIndex: t.isDisabled ? void 0 : 0,
      onKeyDown: y,
      onFocus: I,
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
function M5(e) {
  e.sort();
  let t = e[0], r = e[e.length - 1];
  for (let n = 0; n < t.length; n++)
    if (t[n] !== r[n])
      return n;
  return 0;
}
function I5(e, t, r) {
  var n, a;
  let i = Te(/* @__PURE__ */ Mi(ca), "@react-aria/datepicker"), { isInvalid: l, validationErrors: o, validationDetails: u } = t.displayValidation, { labelProps: s, fieldProps: d, descriptionProps: c, errorMessageProps: f } = $r({
    ...e,
    labelElementType: "span",
    isInvalid: l,
    errorMessage: e.errorMessage || o
  }), p = d["aria-labelledby"] || d.id, { locale: b } = be(), m = t.formatValue(b, {
    month: "long"
  }), h = m ? i.format("selectedRangeDescription", {
    startDate: m.start,
    endDate: m.end
  }) : "", y = Vt(h), $ = {
    "aria-label": i.format("startDate"),
    "aria-labelledby": p
  }, x = {
    "aria-label": i.format("endDate"),
    "aria-labelledby": p
  }, C = ye(), w = ye(), A = Go(t, r), M = [
    y["aria-describedby"],
    d["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, v = z(() => ia(r, {
    // Exclude the button from the focus manager.
    accept: (F) => F.id !== C
  }), [
    r,
    C
  ]), I = {
    [wp]: v,
    [Kn]: "presentation",
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
  }, T = X(e), { focusWithinProps: E } = Ft({
    ...e,
    isDisabled: t.isOpen,
    onBlurWithin: e.onBlur,
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), B = N(fr), S = N(fr);
  return {
    groupProps: _(T, A, d, y, E, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-describedby": M,
      onKeyDown(F) {
        t.isOpen || e.onKeyDown && e.onKeyDown(F);
      },
      onKeyUp(F) {
        t.isOpen || e.onKeyUp && e.onKeyUp(F);
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
      "aria-labelledby": `${C} ${p}`,
      "aria-describedby": M,
      "aria-expanded": t.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => t.setOpen(!0)
    },
    dialogProps: {
      id: w,
      "aria-labelledby": `${C} ${p}`
    },
    startFieldProps: {
      ...$,
      ...I,
      value: (n = t.value) === null || n === void 0 ? void 0 : n.start,
      onChange: (F) => t.setDateTime("start", F),
      autoFocus: e.autoFocus,
      name: e.startName,
      [vr]: {
        realtimeValidation: t.realtimeValidation,
        displayValidation: t.displayValidation,
        updateValidation(F) {
          B.current = F, t.updateValidation(Hn(F, S.current));
        },
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation
      }
    },
    endFieldProps: {
      ...x,
      ...I,
      value: (a = t.value) === null || a === void 0 ? void 0 : a.end,
      onChange: (F) => t.setDateTime("end", F),
      name: e.endName,
      [vr]: {
        realtimeValidation: t.realtimeValidation,
        displayValidation: t.displayValidation,
        updateValidation(F) {
          S.current = F, t.updateValidation(Hn(B.current, F));
        },
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation
      }
    },
    descriptionProps: c,
    errorMessageProps: f,
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
function N5(e, t) {
  let { role: r = "dialog" } = e, n = Kt();
  n = e["aria-label"] ? void 0 : n;
  let a = N(!1);
  return te(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      Fe(t.current);
      let i = setTimeout(() => {
        document.activeElement === t.current && (a.current = !0, t.current && (t.current.blur(), Fe(t.current)), a.current = !1);
      }, 500);
      return () => {
        clearTimeout(i);
      };
    }
  }, [
    t
  ]), Of(), {
    dialogProps: {
      ...X(e, {
        labelable: !0
      }),
      role: r,
      tabIndex: -1,
      "aria-labelledby": e["aria-labelledby"] || n,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (i) => {
        a.current && i.stopPropagation();
      }
    },
    titleProps: {
      id: n
    }
  };
}
class rn {
  /**
  * Returns a copy of this point.
  */
  copy() {
    return new rn(this.x, this.y);
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
  constructor(t = 0, r = 0) {
    this.x = t, this.y = r;
  }
}
class nn {
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
    return new rn(this.x, this.y);
  }
  /**
  * The top right corner of the rectangle.
  */
  get topRight() {
    return new rn(this.maxX, this.y);
  }
  /**
  * The bottom left corner of the rectangle.
  */
  get bottomLeft() {
    return new rn(this.x, this.maxY);
  }
  /**
  * The bottom right corner of the rectangle.
  */
  get bottomRight() {
    return new rn(this.maxX, this.maxY);
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
    for (let r of [
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight"
    ])
      if (t.containsPoint(this[r]))
        return r;
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
    let r = Math.min(this.x, t.x), n = Math.min(this.y, t.y), a = Math.max(this.maxX, t.maxX) - r, i = Math.max(this.maxY, t.maxY) - n;
    return new nn(r, n, a, i);
  }
  /**
  * Returns the intersection of this Rect with another.
  * If the rectangles do not intersect, an all zero Rect is returned.
  */
  intersection(t) {
    if (!this.intersects(t))
      return new nn(0, 0, 0, 0);
    let r = Math.max(this.x, t.x), n = Math.max(this.y, t.y);
    return new nn(r, n, Math.min(this.maxX, t.maxX) - r, Math.min(this.maxY, t.maxY) - n);
  }
  /**
  * Returns a copy of this rectangle.
  */
  copy() {
    return new nn(this.x, this.y, this.width, this.height);
  }
  constructor(t = 0, r = 0, n = 0, a = 0) {
    this.x = t, this.y = r, this.width = n, this.height = a;
  }
}
let Xr = typeof window < "u" ? window.performance : null, Ks = Xr && (Xr.now || Xr.webkitNow || Xr.msNow || Xr.mozNow);
Ks && Ks.bind(Xr);
function qo(e) {
  return e && e.__esModule ? e.default : e;
}
class Sp {
  isCell(t) {
    return t.type === "cell";
  }
  isRow(t) {
    return t.type === "row" || t.type === "item";
  }
  findPreviousKey(t, r) {
    let n = t != null ? this.collection.getKeyBefore(t) : this.collection.getLastKey();
    for (; n != null; ) {
      let a = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!r || r(a)))
        return n;
      n = this.collection.getKeyBefore(n);
    }
  }
  findNextKey(t, r) {
    let n = t != null ? this.collection.getKeyAfter(t) : this.collection.getFirstKey();
    for (; n != null; ) {
      let a = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!r || r(a)))
        return n;
      n = this.collection.getKeyAfter(n);
    }
  }
  getKeyBelow(t) {
    let r = this.collection.getItem(t);
    if (r && (this.isCell(r) && (t = r.parentKey), t = this.findNextKey(t), t != null)) {
      if (this.isCell(r)) {
        let n = this.collection.getItem(t);
        return cr(Re(n, this.collection), r.index).key;
      }
      if (this.focusMode === "row")
        return t;
    }
  }
  getKeyAbove(t) {
    let r = this.collection.getItem(t);
    if (r && (this.isCell(r) && (t = r.parentKey), t = this.findPreviousKey(t), t != null)) {
      if (this.isCell(r)) {
        let n = this.collection.getItem(t);
        return cr(Re(n, this.collection), r.index).key;
      }
      if (this.focusMode === "row")
        return t;
    }
  }
  getKeyRightOf(t) {
    let r = this.collection.getItem(t);
    if (r) {
      if (this.isRow(r)) {
        let n = Re(r, this.collection);
        return this.direction === "rtl" ? mr(n).key : Zt(n).key;
      }
      if (this.isCell(r)) {
        let n = this.collection.getItem(r.parentKey), a = Re(n, this.collection), i = this.direction === "rtl" ? cr(a, r.index - 1) : cr(a, r.index + 1);
        return i ? i.key : this.focusMode === "row" ? r.parentKey : this.direction === "rtl" ? this.getFirstKey(t) : this.getLastKey(t);
      }
    }
  }
  getKeyLeftOf(t) {
    let r = this.collection.getItem(t);
    if (r) {
      if (this.isRow(r)) {
        let n = Re(r, this.collection);
        return this.direction === "rtl" ? Zt(n).key : mr(n).key;
      }
      if (this.isCell(r)) {
        let n = this.collection.getItem(r.parentKey), a = Re(n, this.collection), i = this.direction === "rtl" ? cr(a, r.index + 1) : cr(a, r.index - 1);
        return i ? i.key : this.focusMode === "row" ? r.parentKey : this.direction === "rtl" ? this.getLastKey(t) : this.getFirstKey(t);
      }
    }
  }
  getFirstKey(t, r) {
    let n;
    if (t != null) {
      if (n = this.collection.getItem(t), !n)
        return;
      if (this.isCell(n) && !r) {
        let a = this.collection.getItem(n.parentKey);
        return Zt(Re(a, this.collection)).key;
      }
    }
    if (t = this.findNextKey(), t != null && n && this.isCell(n) && r || this.focusMode === "cell") {
      let a = this.collection.getItem(t);
      t = Zt(Re(a, this.collection)).key;
    }
    return t;
  }
  getLastKey(t, r) {
    let n;
    if (t != null) {
      if (n = this.collection.getItem(t), !n)
        return;
      if (this.isCell(n) && !r) {
        let a = this.collection.getItem(n.parentKey), i = Re(a, this.collection);
        return mr(i).key;
      }
    }
    if (t = this.findPreviousKey(), t != null && n && this.isCell(n) && r || this.focusMode === "cell") {
      let a = this.collection.getItem(t), i = Re(a, this.collection);
      t = mr(i).key;
    }
    return t;
  }
  getItem(t) {
    return this.ref.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`);
  }
  getItemRect(t) {
    var r;
    if (this.layout)
      return (r = this.layout.getLayoutInfo(t)) === null || r === void 0 ? void 0 : r.rect;
    let n = this.getItem(t);
    if (n)
      return new nn(n.offsetLeft, n.offsetTop, n.offsetWidth, n.offsetHeight);
  }
  getPageHeight() {
    var t, r, n;
    return this.layout ? (t = this.layout.virtualizer) === null || t === void 0 ? void 0 : t.visibleRect.height : (n = this.ref) === null || n === void 0 || (r = n.current) === null || r === void 0 ? void 0 : r.offsetHeight;
  }
  getContentHeight() {
    var t, r;
    return this.layout ? this.layout.getContentSize().height : (r = this.ref) === null || r === void 0 || (t = r.current) === null || t === void 0 ? void 0 : t.scrollHeight;
  }
  getKeyPageAbove(t) {
    let r = this.getItemRect(t);
    if (!r)
      return null;
    let n = Math.max(0, r.maxY - this.getPageHeight());
    for (; r && r.y > n; )
      t = this.getKeyAbove(t), r = this.getItemRect(t);
    return t;
  }
  getKeyPageBelow(t) {
    let r = this.getItemRect(t);
    if (!r)
      return null;
    let n = this.getPageHeight(), a = Math.min(this.getContentHeight(), r.y + n);
    for (; r && r.maxY < a; ) {
      let i = this.getKeyBelow(t);
      r = this.getItemRect(i), i != null && (t = i);
    }
    return t;
  }
  getKeyForSearch(t, r) {
    if (!this.collator)
      return null;
    let n = this.collection, a = r ?? this.getFirstKey(), i = n.getItem(a);
    i.type === "cell" && (a = i.parentKey);
    let l = !1;
    for (; a != null; ) {
      let o = n.getItem(a);
      if (o.textValue) {
        let u = o.textValue.slice(0, t.length);
        if (this.collator.compare(u, t) === 0)
          return this.isRow(o) && this.focusMode === "cell" ? Zt(Re(o, this.collection)).key : o.key;
      }
      a = this.findNextKey(a), a == null && !l && (a = this.getFirstKey(), l = !0);
    }
    return null;
  }
  constructor(t) {
    this.collection = t.collection, this.disabledKeys = t.disabledKeys, this.ref = t.ref, this.direction = t.direction, this.collator = t.collator, this.layout = t.layout, this.focusMode = t.focusMode || "row";
  }
}
const Yo = /* @__PURE__ */ new WeakMap();
var Ii = {}, Bp = {};
Bp = {
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
var kp = {};
kp = {
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
var Fp = {};
Fp = {
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
var Ap = {};
Ap = {
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
var Tp = {};
Tp = {
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
var Rp = {};
Rp = {
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
var Mp = {};
Mp = {
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
var Ip = {};
Ip = {
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
var Np = {};
Np = {
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
var Kp = {};
Kp = {
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
var zp = {};
zp = {
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
var Vp = {};
Vp = {
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
var Lp = {};
Lp = {
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
var Op = {};
Op = {
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
var jp = {};
jp = {
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
var _p = {};
_p = {
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
var Hp = {};
Hp = {
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
var Up = {};
Up = {
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
var Wp = {};
Wp = {
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
var Gp = {};
Gp = {
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
var Zp = {};
Zp = {
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
var qp = {};
qp = {
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
var Yp = {};
Yp = {
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
var Jp = {};
Jp = {
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
var Xp = {};
Xp = {
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
var Qp = {};
Qp = {
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
var eb = {};
eb = {
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
var tb = {};
tb = {
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
var rb = {};
rb = {
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
var nb = {};
nb = {
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
var ab = {};
ab = {
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
var ib = {};
ib = {
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
var lb = {};
lb = {
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
var ob = {};
ob = {
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
Ii = {
  "ar-AE": Bp,
  "bg-BG": kp,
  "cs-CZ": Fp,
  "da-DK": Ap,
  "de-DE": Tp,
  "el-GR": Rp,
  "en-US": Mp,
  "es-ES": Ip,
  "et-EE": Np,
  "fi-FI": Kp,
  "fr-FR": zp,
  "he-IL": Vp,
  "hr-HR": Lp,
  "hu-HU": Op,
  "it-IT": jp,
  "ja-JP": _p,
  "ko-KR": Hp,
  "lt-LT": Up,
  "lv-LV": Wp,
  "nb-NO": Gp,
  "nl-NL": Zp,
  "pl-PL": qp,
  "pt-BR": Yp,
  "pt-PT": Jp,
  "ro-RO": Xp,
  "ru-RU": Qp,
  "sk-SK": eb,
  "sl-SI": tb,
  "sr-SP": rb,
  "sv-SE": nb,
  "tr-TR": ab,
  "uk-UA": ib,
  "zh-CN": lb,
  "zh-TW": ob
};
function ub(e, t) {
  let { getRowText: r = (l) => {
    var o, u, s, d;
    return (d = (o = (u = t.collection).getTextValue) === null || o === void 0 ? void 0 : o.call(u, l)) !== null && d !== void 0 ? d : (s = t.collection.getItem(l)) === null || s === void 0 ? void 0 : s.textValue;
  } } = e, n = Te(/* @__PURE__ */ qo(Ii), "@react-aria/grid"), a = t.selectionManager.rawSelection, i = N(a);
  qa(() => {
    var l;
    if (!t.selectionManager.isFocused) {
      i.current = a;
      return;
    }
    let o = zs(a, i.current), u = zs(i.current, a), s = t.selectionManager.selectionBehavior === "replace", d = [];
    if (t.selectionManager.selectedKeys.size === 1 && s) {
      if (t.collection.getItem(t.selectionManager.selectedKeys.keys().next().value)) {
        let c = r(t.selectionManager.selectedKeys.keys().next().value);
        c && d.push(n.format("selectedItem", {
          item: c
        }));
      }
    } else if (o.size === 1 && u.size === 0) {
      let c = r(o.keys().next().value);
      c && d.push(n.format("selectedItem", {
        item: c
      }));
    } else if (u.size === 1 && o.size === 0 && t.collection.getItem(u.keys().next().value)) {
      let c = r(u.keys().next().value);
      c && d.push(n.format("deselectedItem", {
        item: c
      }));
    }
    t.selectionManager.selectionMode === "multiple" && (d.length === 0 || a === "all" || a.size > 1 || i.current === "all" || ((l = i.current) === null || l === void 0 ? void 0 : l.size) > 1) && d.push(a === "all" ? n.format("selectedAll") : n.format("selectedCount", {
      count: a.size
    })), d.length > 0 && hr(d.join(" ")), i.current = a;
  }, [
    a
  ]);
}
function zs(e, t) {
  let r = /* @__PURE__ */ new Set();
  if (e === "all" || t === "all")
    return r;
  for (let n of e.keys())
    t.has(n) || r.add(n);
  return r;
}
function sb(e) {
  let t = Te(/* @__PURE__ */ qo(Ii), "@react-aria/grid"), r = na(), n = (r === "pointer" || r === "virtual" || r == null) && typeof window < "u" && "ontouchstart" in window, a = z(() => {
    let l = e.selectionManager.selectionMode, o = e.selectionManager.selectionBehavior, u;
    return n && (u = t.format("longPressToSelect")), o === "replace" && l !== "none" && e.hasItemActions ? u : void 0;
  }, [
    e.selectionManager.selectionMode,
    e.selectionManager.selectionBehavior,
    e.hasItemActions,
    t,
    n
  ]);
  return Vt(a);
}
function K5(e, t, r) {
  let { isVirtualized: n, keyboardDelegate: a, focusMode: i, scrollRef: l, getRowText: o, onRowAction: u, onCellAction: s } = e, { selectionManager: d } = t;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let c = bn({
    usage: "search",
    sensitivity: "base"
  }), { direction: f } = be(), p = t.selectionManager.disabledBehavior, b = z(() => a || new Sp({
    collection: t.collection,
    disabledKeys: p === "selection" ? /* @__PURE__ */ new Set() : t.disabledKeys,
    ref: r,
    direction: f,
    collator: c,
    focusMode: i
  }), [
    a,
    t.collection,
    t.disabledKeys,
    p,
    r,
    f,
    c,
    i
  ]), { collectionProps: m } = Ai({
    ref: r,
    selectionManager: d,
    keyboardDelegate: b,
    isVirtualized: n,
    scrollRef: l
  }), h = ye(e.id);
  Yo.set(t, {
    keyboardDelegate: b,
    actions: {
      onRowAction: u,
      onCellAction: s
    }
  });
  let y = sb({
    selectionManager: d,
    hasItemActions: !!(u || s)
  }), $ = X(e, {
    labelable: !0
  }), x = re((M) => {
    if (d.isFocused) {
      M.currentTarget.contains(M.target) || d.setFocused(!1);
      return;
    }
    M.currentTarget.contains(M.target) && d.setFocused(!0);
  }, [
    d
  ]), C = z(() => ({
    onBlur: m.onBlur,
    onFocus: x
  }), [
    x,
    m.onBlur
  ]), w = Bo(r, {
    isDisabled: t.collection.size !== 0
  }), A = _(
    $,
    {
      role: "grid",
      id: h,
      "aria-multiselectable": d.selectionMode === "multiple" ? "true" : void 0
    },
    t.isKeyboardNavigationDisabled ? C : m,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    t.collection.size === 0 && {
      tabIndex: w ? -1 : 0
    },
    y
  );
  return n && (A["aria-rowcount"] = t.collection.size, A["aria-colcount"] = t.collection.columnCount), ub({
    getRowText: o
  }, t), {
    gridProps: A
  };
}
function z5() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function V5(e, t, r) {
  let { node: n, isVirtualized: a, shouldSelectOnPressUp: i, onAction: l } = e, { actions: { onRowAction: o } } = Yo.get(t), { itemProps: u, ...s } = mn({
    selectionManager: t.selectionManager,
    key: n.key,
    ref: r,
    isVirtualized: a,
    shouldSelectOnPressUp: i,
    onAction: o ? () => o(n.key) : l,
    isDisabled: t.collection.size === 0
  }), d = t.selectionManager.isSelected(n.key), c = {
    role: "row",
    "aria-selected": t.selectionManager.selectionMode !== "none" ? d : void 0,
    "aria-disabled": s.isDisabled || void 0,
    ...u
  };
  return a && (c["aria-rowindex"] = n.index + 1), {
    rowProps: c,
    ...s
  };
}
function db(e, t, r) {
  let { node: n, isVirtualized: a, focusMode: i = "child", shouldSelectOnPressUp: l, onAction: o } = e, { direction: u } = be(), { keyboardDelegate: s, actions: { onCellAction: d } } = Yo.get(t), c = N(null), f = () => {
    let x = Ue(r.current);
    if (i === "child") {
      if (r.current.contains(document.activeElement) && r.current !== document.activeElement)
        return;
      let C = t.selectionManager.childFocusStrategy === "last" ? xl(x) : x.firstChild();
      if (C) {
        Fe(C);
        return;
      }
    }
    (c.current != null && n.key !== c.current || !r.current.contains(document.activeElement)) && Fe(r.current);
  }, { itemProps: p, isPressed: b } = mn({
    selectionManager: t.selectionManager,
    key: n.key,
    ref: r,
    isVirtualized: a,
    focus: f,
    shouldSelectOnPressUp: l,
    onAction: d ? () => d(n.key) : o,
    isDisabled: t.collection.size === 0
  }), y = _(p, {
    role: "gridcell",
    onKeyDownCapture: (x) => {
      if (!x.currentTarget.contains(x.target) || t.isKeyboardNavigationDisabled)
        return;
      let C = Ue(r.current);
      switch (C.currentNode = document.activeElement, x.key) {
        case "ArrowLeft": {
          let w = u === "rtl" ? C.nextNode() : C.previousNode();
          if (i === "child" && w === r.current && (w = null), w)
            x.preventDefault(), x.stopPropagation(), Fe(w), Xe(w, {
              containingElement: Ge(r.current)
            });
          else {
            if (s.getKeyLeftOf(n.key) !== n.key)
              break;
            x.preventDefault(), x.stopPropagation(), i === "cell" && u === "rtl" ? (Fe(r.current), Xe(r.current, {
              containingElement: Ge(r.current)
            })) : (C.currentNode = r.current, w = u === "rtl" ? C.firstChild() : xl(C), w && (Fe(w), Xe(w, {
              containingElement: Ge(r.current)
            })));
          }
          break;
        }
        case "ArrowRight": {
          let w = u === "rtl" ? C.previousNode() : C.nextNode();
          if (i === "child" && w === r.current && (w = null), w)
            x.preventDefault(), x.stopPropagation(), Fe(w), Xe(w, {
              containingElement: Ge(r.current)
            });
          else {
            if (s.getKeyRightOf(n.key) !== n.key)
              break;
            x.preventDefault(), x.stopPropagation(), i === "cell" && u === "ltr" ? (Fe(r.current), Xe(r.current, {
              containingElement: Ge(r.current)
            })) : (C.currentNode = r.current, w = u === "rtl" ? xl(C) : C.firstChild(), w && (Fe(w), Xe(w, {
              containingElement: Ge(r.current)
            })));
          }
          break;
        }
        case "ArrowUp":
        case "ArrowDown":
          !x.altKey && r.current.contains(x.target) && (x.stopPropagation(), x.preventDefault(), r.current.parentElement.dispatchEvent(new KeyboardEvent(x.nativeEvent.type, x.nativeEvent)));
          break;
      }
    },
    onFocus: (x) => {
      if (c.current = n.key, x.target !== r.current) {
        Tr() || t.selectionManager.setFocusedKey(n.key);
        return;
      }
      requestAnimationFrame(() => {
        i === "child" && document.activeElement === r.current && f();
      });
    }
  });
  var $;
  return a && (y["aria-colindex"] = (($ = n.colIndex) !== null && $ !== void 0 ? $ : n.index) + 1), l && y.tabIndex != null && y.onPointerDown == null && (y.onPointerDown = (x) => {
    let C = x.currentTarget, w = C.getAttribute("tabindex");
    C.removeAttribute("tabindex"), requestAnimationFrame(() => {
      C.setAttribute("tabindex", w);
    });
  }), {
    gridCellProps: y,
    isPressed: b
  };
}
function xl(e) {
  let t, r;
  do
    r = e.lastChild(), r && (t = r);
  while (r);
  return t;
}
function cb(e, t) {
  let { key: r } = e, n = t.selectionManager, a = ye(), i = !t.selectionManager.canSelectItem(r), l = t.selectionManager.isSelected(r), o = () => n.select(r);
  const u = Te(/* @__PURE__ */ qo(Ii), "@react-aria/grid");
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
const Jo = /* @__PURE__ */ new WeakMap();
function Ql(e, t) {
  let { id: r } = Jo.get(e);
  if (!r)
    throw new Error("Unknown list");
  return `${r}-${L5(t)}`;
}
function L5(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function fb(e, t, r) {
  let { isVirtualized: n, keyboardDelegate: a, onAction: i, linkBehavior: l = "action" } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let { listProps: o } = Ho({
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    ref: r,
    keyboardDelegate: a,
    isVirtualized: n,
    selectOnFocus: t.selectionManager.selectionBehavior === "replace",
    shouldFocusWrap: e.shouldFocusWrap,
    linkBehavior: l
  }), u = ye(e.id);
  Jo.set(t, {
    id: u,
    onAction: i,
    linkBehavior: l
  });
  let s = sb({
    selectionManager: t.selectionManager,
    hasItemActions: !!i
  }), d = Bo(r, {
    isDisabled: t.collection.size !== 0
  }), c = X(e, {
    labelable: !0
  }), f = _(
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
  return n && (f["aria-rowcount"] = t.collection.size, f["aria-colcount"] = 1), ub({}, t), {
    gridProps: f
  };
}
function pb(e, t, r) {
  let { node: n, isVirtualized: a, shouldSelectOnPressUp: i } = e, { direction: l } = be(), { onAction: o, linkBehavior: u } = Jo.get(t), s = Kt(), d = N(null), c = () => {
    (d.current != null && n.key !== d.current || !r.current.contains(document.activeElement)) && Fe(r.current);
  }, { itemProps: f, ...p } = mn({
    selectionManager: t.selectionManager,
    key: n.key,
    ref: r,
    isVirtualized: a,
    shouldSelectOnPressUp: i,
    onAction: o ? () => o(n.key) : void 0,
    focus: c,
    linkBehavior: u
  }), b = (x) => {
    if (!x.currentTarget.contains(x.target))
      return;
    let C = Ue(r.current);
    switch (C.currentNode = document.activeElement, x.key) {
      case "ArrowLeft": {
        let w = l === "rtl" ? C.nextNode() : C.previousNode();
        if (w)
          x.preventDefault(), x.stopPropagation(), Fe(w), Xe(w, {
            containingElement: Ge(r.current)
          });
        else if (x.preventDefault(), x.stopPropagation(), l === "rtl")
          Fe(r.current), Xe(r.current, {
            containingElement: Ge(r.current)
          });
        else {
          C.currentNode = r.current;
          let A = Vs(C);
          A && (Fe(A), Xe(A, {
            containingElement: Ge(r.current)
          }));
        }
        break;
      }
      case "ArrowRight": {
        let w = l === "rtl" ? C.previousNode() : C.nextNode();
        if (w)
          x.preventDefault(), x.stopPropagation(), Fe(w), Xe(w, {
            containingElement: Ge(r.current)
          });
        else if (x.preventDefault(), x.stopPropagation(), l === "ltr")
          Fe(r.current), Xe(r.current, {
            containingElement: Ge(r.current)
          });
        else {
          C.currentNode = r.current;
          let A = Vs(C);
          A && (Fe(A), Xe(A, {
            containingElement: Ge(r.current)
          }));
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        !x.altKey && r.current.contains(x.target) && (x.stopPropagation(), x.preventDefault(), r.current.parentElement.dispatchEvent(new KeyboardEvent(x.nativeEvent.type, x.nativeEvent)));
        break;
    }
  }, m = (x) => {
    if (d.current = n.key, x.target !== r.current) {
      Tr() || t.selectionManager.setFocusedKey(n.key);
      return;
    }
  }, h = p.hasAction ? xo(n.props) : {}, y = _(f, h, {
    role: "row",
    onKeyDownCapture: b,
    onFocus: m,
    "aria-label": n.textValue || void 0,
    "aria-selected": t.selectionManager.canSelectItem(n.key) ? t.selectionManager.isSelected(n.key) : void 0,
    "aria-disabled": t.selectionManager.isDisabled(n.key) || void 0,
    "aria-labelledby": s && n.textValue ? `${Ql(t, n.key)} ${s}` : void 0,
    id: Ql(t, n.key)
  });
  return a && (y["aria-rowindex"] = n.index + 1), {
    rowProps: y,
    gridCellProps: {
      role: "gridcell",
      "aria-colindex": 1
    },
    descriptionProps: {
      id: s
    },
    ...p
  };
}
function Vs(e) {
  let t, r;
  do
    r = e.lastChild(), r && (t = r);
  while (r);
  return t;
}
function O5(e, t) {
  let { key: r } = e;
  const { checkboxProps: n } = cb(e, t);
  return {
    checkboxProps: {
      ...n,
      "aria-labelledby": `${n.id} ${Ql(t, r)}`
    }
  };
}
function bb(e) {
  let { value: t = 0, minValue: r = 0, maxValue: n = 100, valueLabel: a, isIndeterminate: i, formatOptions: l = {
    style: "percent"
  } } = e, o = X(e, {
    labelable: !0
  }), { labelProps: u, fieldProps: s } = da({
    ...e,
    // Progress bar is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  t = $t(t, r, n);
  let d = (t - r) / (n - r), c = fi(l);
  if (!i && !a) {
    let f = l.style === "percent" ? d : t;
    a = c.format(f);
  }
  return {
    progressBarProps: _(o, {
      ...s,
      "aria-valuenow": i ? void 0 : t,
      "aria-valuemin": r,
      "aria-valuemax": n,
      "aria-valuetext": i ? void 0 : a,
      role: "progressbar"
    }),
    labelProps: u
  };
}
function j5(e) {
  let { progressBarProps: t, labelProps: r } = bb(e);
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
    labelProps: r
  };
}
function _5(e) {
  return e && e.__esModule ? e.default : e;
}
var mb = {}, hb = {};
hb = {
  decrease: (e) => `خفض ${e.fieldLabel}`,
  increase: (e) => `زيادة ${e.fieldLabel}`,
  numberField: "حقل رقمي"
};
var vb = {};
vb = {
  decrease: (e) => `Намаляване ${e.fieldLabel}`,
  increase: (e) => `Усилване ${e.fieldLabel}`,
  numberField: "Номер на полето"
};
var gb = {};
gb = {
  decrease: (e) => `Snížit ${e.fieldLabel}`,
  increase: (e) => `Zvýšit ${e.fieldLabel}`,
  numberField: "Číselné pole"
};
var $b = {};
$b = {
  decrease: (e) => `Reducer ${e.fieldLabel}`,
  increase: (e) => `Øg ${e.fieldLabel}`,
  numberField: "Talfelt"
};
var yb = {};
yb = {
  decrease: (e) => `${e.fieldLabel} verringern`,
  increase: (e) => `${e.fieldLabel} erhöhen`,
  numberField: "Nummernfeld"
};
var xb = {};
xb = {
  decrease: (e) => `Μείωση ${e.fieldLabel}`,
  increase: (e) => `Αύξηση ${e.fieldLabel}`,
  numberField: "Πεδίο αριθμού"
};
var Db = {};
Db = {
  decrease: (e) => `Decrease ${e.fieldLabel}`,
  increase: (e) => `Increase ${e.fieldLabel}`,
  numberField: "Number field"
};
var Cb = {};
Cb = {
  decrease: (e) => `Reducir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo de número"
};
var Eb = {};
Eb = {
  decrease: (e) => `Vähenda ${e.fieldLabel}`,
  increase: (e) => `Suurenda ${e.fieldLabel}`,
  numberField: "Numbri väli"
};
var Pb = {};
Pb = {
  decrease: (e) => `Vähennä ${e.fieldLabel}`,
  increase: (e) => `Lisää ${e.fieldLabel}`,
  numberField: "Numerokenttä"
};
var wb = {};
wb = {
  decrease: (e) => `Diminuer ${e.fieldLabel}`,
  increase: (e) => `Augmenter ${e.fieldLabel}`,
  numberField: "Champ de nombre"
};
var Sb = {};
Sb = {
  decrease: (e) => `הקטן ${e.fieldLabel}`,
  increase: (e) => `הגדל ${e.fieldLabel}`,
  numberField: "שדה מספר"
};
var Bb = {};
Bb = {
  decrease: (e) => `Smanji ${e.fieldLabel}`,
  increase: (e) => `Povećaj ${e.fieldLabel}`,
  numberField: "Polje broja"
};
var kb = {};
kb = {
  decrease: (e) => `${e.fieldLabel} csökkentése`,
  increase: (e) => `${e.fieldLabel} növelése`,
  numberField: "Számmező"
};
var Fb = {};
Fb = {
  decrease: (e) => `Riduci ${e.fieldLabel}`,
  increase: (e) => `Aumenta ${e.fieldLabel}`,
  numberField: "Campo numero"
};
var Ab = {};
Ab = {
  decrease: (e) => `${e.fieldLabel}を縮小`,
  increase: (e) => `${e.fieldLabel}を拡大`,
  numberField: "数値フィールド"
};
var Tb = {};
Tb = {
  decrease: (e) => `${e.fieldLabel} 감소`,
  increase: (e) => `${e.fieldLabel} 증가`,
  numberField: "번호 필드"
};
var Rb = {};
Rb = {
  decrease: (e) => `Sumažinti ${e.fieldLabel}`,
  increase: (e) => `Padidinti ${e.fieldLabel}`,
  numberField: "Numerio laukas"
};
var Mb = {};
Mb = {
  decrease: (e) => `Samazināšana ${e.fieldLabel}`,
  increase: (e) => `Palielināšana ${e.fieldLabel}`,
  numberField: "Skaitļu lauks"
};
var Ib = {};
Ib = {
  decrease: (e) => `Reduser ${e.fieldLabel}`,
  increase: (e) => `Øk ${e.fieldLabel}`,
  numberField: "Tallfelt"
};
var Nb = {};
Nb = {
  decrease: (e) => `${e.fieldLabel} verlagen`,
  increase: (e) => `${e.fieldLabel} verhogen`,
  numberField: "Getalveld"
};
var Kb = {};
Kb = {
  decrease: (e) => `Zmniejsz ${e.fieldLabel}`,
  increase: (e) => `Zwiększ ${e.fieldLabel}`,
  numberField: "Pole numeru"
};
var zb = {};
zb = {
  decrease: (e) => `Diminuir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo de número"
};
var Vb = {};
Vb = {
  decrease: (e) => `Diminuir ${e.fieldLabel}`,
  increase: (e) => `Aumentar ${e.fieldLabel}`,
  numberField: "Campo numérico"
};
var Lb = {};
Lb = {
  decrease: (e) => `Scădere ${e.fieldLabel}`,
  increase: (e) => `Creștere ${e.fieldLabel}`,
  numberField: "Câmp numeric"
};
var Ob = {};
Ob = {
  decrease: (e) => `Уменьшение ${e.fieldLabel}`,
  increase: (e) => `Увеличение ${e.fieldLabel}`,
  numberField: "Числовое поле"
};
var jb = {};
jb = {
  decrease: (e) => `Znížiť ${e.fieldLabel}`,
  increase: (e) => `Zvýšiť ${e.fieldLabel}`,
  numberField: "Číselné pole"
};
var _b = {};
_b = {
  decrease: (e) => `Upadati ${e.fieldLabel}`,
  increase: (e) => `Povečajte ${e.fieldLabel}`,
  numberField: "Številčno polje"
};
var Hb = {};
Hb = {
  decrease: (e) => `Smanji ${e.fieldLabel}`,
  increase: (e) => `Povećaj ${e.fieldLabel}`,
  numberField: "Polje broja"
};
var Ub = {};
Ub = {
  decrease: (e) => `Minska ${e.fieldLabel}`,
  increase: (e) => `Öka ${e.fieldLabel}`,
  numberField: "Nummerfält"
};
var Wb = {};
Wb = {
  decrease: (e) => `${e.fieldLabel} azalt`,
  increase: (e) => `${e.fieldLabel} arttır`,
  numberField: "Sayı alanı"
};
var Gb = {};
Gb = {
  decrease: (e) => `Зменшити ${e.fieldLabel}`,
  increase: (e) => `Збільшити ${e.fieldLabel}`,
  numberField: "Поле номера"
};
var Zb = {};
Zb = {
  decrease: (e) => `降低 ${e.fieldLabel}`,
  increase: (e) => `提高 ${e.fieldLabel}`,
  numberField: "数字字段"
};
var qb = {};
qb = {
  decrease: (e) => `縮小 ${e.fieldLabel}`,
  increase: (e) => `放大 ${e.fieldLabel}`,
  numberField: "數字欄位"
};
mb = {
  "ar-AE": hb,
  "bg-BG": vb,
  "cs-CZ": gb,
  "da-DK": $b,
  "de-DE": yb,
  "el-GR": xb,
  "en-US": Db,
  "es-ES": Cb,
  "et-EE": Eb,
  "fi-FI": Pb,
  "fr-FR": wb,
  "he-IL": Sb,
  "hr-HR": Bb,
  "hu-HU": kb,
  "it-IT": Fb,
  "ja-JP": Ab,
  "ko-KR": Tb,
  "lt-LT": Rb,
  "lv-LV": Mb,
  "nb-NO": Ib,
  "nl-NL": Nb,
  "pl-PL": Kb,
  "pt-BR": zb,
  "pt-PT": Vb,
  "ro-RO": Lb,
  "ru-RU": Ob,
  "sk-SK": jb,
  "sl-SI": _b,
  "sr-SP": Hb,
  "sv-SE": Ub,
  "tr-TR": Wb,
  "uk-UA": Gb,
  "zh-CN": Zb,
  "zh-TW": qb
};
function H5(e, t, r) {
  let { id: n, decrementAriaLabel: a, incrementAriaLabel: i, isDisabled: l, isReadOnly: o, isRequired: u, minValue: s, maxValue: d, autoFocus: c, label: f, formatOptions: p, onBlur: b = () => {
  }, onFocus: m, onFocusChange: h, onKeyDown: y, onKeyUp: $, description: x, errorMessage: C, isWheelDisabled: w, ...A } = e, { increment: M, incrementToMax: v, decrement: I, decrementToMin: T, numberValue: E, inputValue: B, commit: S, commitValidation: F } = t;
  const V = Te(/* @__PURE__ */ _5(mb), "@react-aria/numberfield");
  let R = ye(n), { focusProps: D } = xi({
    onBlur() {
      S();
    }
  }), H = fi(p), U = z(() => H.resolvedOptions(), [
    H
  ]), O = fi({
    ...p,
    currencySign: void 0
  }), L = z(() => isNaN(E) ? "" : O.format(E), [
    O,
    E
  ]), { spinButtonProps: K, incrementButtonProps: q, decrementButtonProps: ae } = H0({
    isDisabled: l,
    isReadOnly: o,
    isRequired: u,
    maxValue: d,
    minValue: s,
    onIncrement: M,
    onIncrementToMax: v,
    onDecrement: I,
    onDecrementToMin: T,
    value: E,
    textValue: L
  }), [de, Ee] = Y(!1), { focusWithinProps: j } = Ft({
    isDisabled: l,
    onFocusWithinChange: Ee
  }), ee = re((Ye) => {
    Math.abs(Ye.deltaY) <= Math.abs(Ye.deltaX) || (Ye.deltaY > 0 ? M() : Ye.deltaY < 0 && I());
  }, [
    I,
    M
  ]);
  q$({
    onScroll: ee,
    isDisabled: w || l || o || !de
  }, r);
  let $e = U.maximumFractionDigits > 0, oe = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, et = "numeric";
  hd() ? oe ? et = "text" : $e && (et = "decimal") : zn() && (oe ? et = "numeric" : $e && (et = "decimal"));
  let lr = (Ye) => {
    t.validate(Ye) && t.setInputValue(Ye);
  }, Dr = X(e), jt = re((Ye) => {
    Ye.key === "Enter" ? (S(), F()) : Ye.continuePropagation();
  }, [
    S,
    F
  ]), { isInvalid: Mt, validationErrors: jr, validationDetails: _r } = t.displayValidation, { labelProps: ue, inputProps: De, descriptionProps: Ie, errorMessageProps: vn } = P5({
    ...A,
    ...Dr,
    name: void 0,
    label: f,
    autoFocus: c,
    isDisabled: l,
    isReadOnly: o,
    isRequired: u,
    validate: void 0,
    [vr]: t,
    value: B,
    defaultValue: void 0,
    autoComplete: "off",
    "aria-label": e["aria-label"] || void 0,
    "aria-labelledby": e["aria-labelledby"] || void 0,
    id: R,
    type: "text",
    inputMode: et,
    onChange: lr,
    onBlur: b,
    onFocus: m,
    onFocusChange: h,
    onKeyDown: z(() => Bt(jt, y), [
      jt,
      y
    ]),
    onKeyUp: $,
    description: x,
    errorMessage: C
  }, t, r);
  Ir(r, t.numberValue, t.setNumberValue);
  let Ca = _(K, D, De, {
    // override the spinbutton role, we can't focus a spin button with VO
    role: null,
    // ignore aria-roledescription on iOS so that required state will announce when it is present
    "aria-roledescription": fn() ? null : V.format("numberField"),
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null,
    autoCorrect: "off",
    spellCheck: "false"
  });
  e.validationBehavior === "native" && (Ca["aria-required"] = void 0);
  let Ea = (Ye) => {
    var gn;
    document.activeElement !== r.current && (Ye.pointerType === "mouse" ? (gn = r.current) === null || gn === void 0 || gn.focus() : Ye.target.focus());
  }, Hr = e["aria-label"] || (typeof e.label == "string" ? e.label : ""), It;
  Hr || (It = e.label != null ? ue.id : e["aria-labelledby"]);
  let or = ye(), Pa = ye(), wa = _(q, {
    "aria-label": i || V.format("increase", {
      fieldLabel: Hr
    }).trim(),
    id: It && !i ? or : null,
    "aria-labelledby": It && !i ? `${or} ${It}` : null,
    "aria-controls": R,
    excludeFromTabOrder: !0,
    preventFocusOnPress: !0,
    allowFocusWhenDisabled: !0,
    isDisabled: !t.canIncrement,
    onPressStart: Ea
  }), Sa = _(ae, {
    "aria-label": a || V.format("decrease", {
      fieldLabel: Hr
    }).trim(),
    id: It && !a ? Pa : null,
    "aria-labelledby": It && !a ? `${Pa} ${It}` : null,
    "aria-controls": R,
    excludeFromTabOrder: !0,
    preventFocusOnPress: !0,
    allowFocusWhenDisabled: !0,
    isDisabled: !t.canDecrement,
    onPressStart: Ea
  });
  return {
    groupProps: {
      ...j,
      role: "group",
      "aria-disabled": l,
      "aria-invalid": Mt ? "true" : void 0
    },
    labelProps: ue,
    inputProps: Ca,
    incrementButtonProps: wa,
    decrementButtonProps: Sa,
    errorMessageProps: vn,
    descriptionProps: Ie,
    isInvalid: Mt,
    validationErrors: jr,
    validationDetails: _r
  };
}
const Yb = /* @__PURE__ */ new WeakMap();
function U5(e, t, r) {
  let { value: n, children: a, "aria-label": i, "aria-labelledby": l } = e;
  const o = e.isDisabled || t.isDisabled;
  let u = a != null, s = i != null || l != null;
  !u && !s && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let d = t.selectedValue === n, c = (v) => {
    v.stopPropagation(), t.setSelectedValue(n);
  }, { pressProps: f, isPressed: p } = st({
    isDisabled: o
  }), { pressProps: b, isPressed: m } = st({
    isDisabled: o,
    onPress() {
      t.setSelectedValue(n);
    }
  }), { focusableProps: h } = Nr(_(e, {
    onFocus: () => t.setLastFocusedValue(n)
  }), r), y = _(f, h), $ = X(e, {
    labelable: !0
  }), x = -1;
  t.selectedValue != null ? t.selectedValue === n && (x = 0) : (t.lastFocusedValue === n || t.lastFocusedValue == null) && (x = 0), o && (x = void 0);
  let { name: C, descriptionId: w, errorMessageId: A, validationBehavior: M } = Yb.get(t);
  return Ir(r, t.selectedValue, t.setSelectedValue), sa({
    validationBehavior: M
  }, t, r), {
    labelProps: _(b, {
      onClick: (v) => v.preventDefault()
    }),
    inputProps: _($, {
      ...y,
      type: "radio",
      name: C,
      tabIndex: x,
      disabled: o,
      required: t.isRequired && M === "native",
      checked: d,
      value: n,
      onChange: c,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? A : null,
        w
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: o,
    isSelected: d,
    isPressed: p || m
  };
}
function W5(e, t) {
  let { name: r, isReadOnly: n, isRequired: a, isDisabled: i, orientation: l = "vertical", validationBehavior: o = "aria" } = e, { direction: u } = be(), { isInvalid: s, validationErrors: d, validationDetails: c } = t.displayValidation, { labelProps: f, fieldProps: p, descriptionProps: b, errorMessageProps: m } = $r({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || d
  }), h = X(e, {
    labelable: !0
  }), { focusWithinProps: y } = Ft({
    onBlurWithin(C) {
      var w;
      (w = e.onBlur) === null || w === void 0 || w.call(e, C), t.selectedValue || t.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), $ = (C) => {
    let w;
    switch (C.key) {
      case "ArrowRight":
        u === "rtl" && l !== "vertical" ? w = "prev" : w = "next";
        break;
      case "ArrowLeft":
        u === "rtl" && l !== "vertical" ? w = "next" : w = "prev";
        break;
      case "ArrowDown":
        w = "next";
        break;
      case "ArrowUp":
        w = "prev";
        break;
      default:
        return;
    }
    C.preventDefault();
    let A = Ue(C.currentTarget, {
      from: C.target
    }), M;
    w === "next" ? (M = A.nextNode(), M || (A.currentNode = C.currentTarget, M = A.firstChild())) : (M = A.previousNode(), M || (A.currentNode = C.currentTarget, M = A.lastChild())), M && (M.focus(), t.setSelectedValue(M.value));
  }, x = ye(r);
  return Yb.set(t, {
    name: x,
    descriptionId: b.id,
    errorMessageId: m.id,
    validationBehavior: o
  }), {
    radioGroupProps: _(h, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: $,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": n || void 0,
      "aria-required": a || void 0,
      "aria-disabled": i || void 0,
      "aria-orientation": l,
      ...p,
      ...y
    }),
    labelProps: f,
    descriptionProps: b,
    errorMessageProps: m,
    isInvalid: s,
    validationErrors: d,
    validationDetails: c
  };
}
function G5(e) {
  return e && e.__esModule ? e.default : e;
}
var Jb = {}, Xb = {};
Xb = {
  "Clear search": "مسح البحث"
};
var Qb = {};
Qb = {
  "Clear search": "Изчистване на търсене"
};
var em = {};
em = {
  "Clear search": "Vymazat hledání"
};
var tm = {};
tm = {
  "Clear search": "Ryd søgning"
};
var rm = {};
rm = {
  "Clear search": "Suche zurücksetzen"
};
var nm = {};
nm = {
  "Clear search": "Απαλοιφή αναζήτησης"
};
var am = {};
am = {
  "Clear search": "Clear search"
};
var im = {};
im = {
  "Clear search": "Borrar búsqueda"
};
var lm = {};
lm = {
  "Clear search": "Tühjenda otsing"
};
var om = {};
om = {
  "Clear search": "Tyhjennä haku"
};
var um = {};
um = {
  "Clear search": "Effacer la recherche"
};
var sm = {};
sm = {
  "Clear search": "נקה חיפוש"
};
var dm = {};
dm = {
  "Clear search": "Obriši pretragu"
};
var cm = {};
cm = {
  "Clear search": "Keresés törlése"
};
var fm = {};
fm = {
  "Clear search": "Cancella ricerca"
};
var pm = {};
pm = {
  "Clear search": "検索をクリア"
};
var bm = {};
bm = {
  "Clear search": "검색 지우기"
};
var mm = {};
mm = {
  "Clear search": "Išvalyti iešką"
};
var hm = {};
hm = {
  "Clear search": "Notīrīt meklēšanu"
};
var vm = {};
vm = {
  "Clear search": "Tøm søk"
};
var gm = {};
gm = {
  "Clear search": "Zoekactie wissen"
};
var $m = {};
$m = {
  "Clear search": "Wyczyść zawartość wyszukiwania"
};
var ym = {};
ym = {
  "Clear search": "Limpar pesquisa"
};
var xm = {};
xm = {
  "Clear search": "Limpar pesquisa"
};
var Dm = {};
Dm = {
  "Clear search": "Ştergeţi căutarea"
};
var Cm = {};
Cm = {
  "Clear search": "Очистить поиск"
};
var Em = {};
Em = {
  "Clear search": "Vymazať vyhľadávanie"
};
var Pm = {};
Pm = {
  "Clear search": "Počisti iskanje"
};
var wm = {};
wm = {
  "Clear search": "Obriši pretragu"
};
var Sm = {};
Sm = {
  "Clear search": "Rensa sökning"
};
var Bm = {};
Bm = {
  "Clear search": "Aramayı temizle"
};
var km = {};
km = {
  "Clear search": "Очистити пошук"
};
var Fm = {};
Fm = {
  "Clear search": "清除搜索"
};
var Am = {};
Am = {
  "Clear search": "清除搜尋條件"
};
Jb = {
  "ar-AE": Xb,
  "bg-BG": Qb,
  "cs-CZ": em,
  "da-DK": tm,
  "de-DE": rm,
  "el-GR": nm,
  "en-US": am,
  "es-ES": im,
  "et-EE": lm,
  "fi-FI": om,
  "fr-FR": um,
  "he-IL": sm,
  "hr-HR": dm,
  "hu-HU": cm,
  "it-IT": fm,
  "ja-JP": pm,
  "ko-KR": bm,
  "lt-LT": mm,
  "lv-LV": hm,
  "nb-NO": vm,
  "nl-NL": gm,
  "pl-PL": $m,
  "pt-BR": ym,
  "pt-PT": xm,
  "ro-RO": Dm,
  "ru-RU": Cm,
  "sk-SK": Em,
  "sl-SI": Pm,
  "sr-SP": wm,
  "sv-SE": Sm,
  "tr-TR": Bm,
  "uk-UA": km,
  "zh-CN": Fm,
  "zh-TW": Am
};
function Z5(e, t, r) {
  let n = Te(/* @__PURE__ */ G5(Jb), "@react-aria/searchfield"), { isDisabled: a, isReadOnly: i, onSubmit: l = () => {
  }, onClear: o, type: u = "search" } = e, s = (y) => {
    const $ = y.key;
    $ === "Enter" && y.preventDefault(), !(a || i) && ($ === "Enter" && l(t.value), $ === "Escape" && (t.value === "" ? y.continuePropagation() : (t.setValue(""), o && o())));
  }, d = () => {
    t.setValue(""), o && o();
  }, c = () => {
    var y;
    (y = r.current) === null || y === void 0 || y.focus();
  }, { labelProps: f, inputProps: p, descriptionProps: b, errorMessageProps: m, ...h } = Ri({
    ...e,
    value: t.value,
    onChange: t.setValue,
    onKeyDown: i ? e.onKeyDown : Bt(s, e.onKeyDown),
    type: u
  }, r);
  return {
    labelProps: f,
    inputProps: {
      ...p,
      // already handled by useSearchFieldState
      defaultValue: void 0
    },
    clearButtonProps: {
      "aria-label": n.format("Clear search"),
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
const Tm = /* @__PURE__ */ new WeakMap();
function q5(e, t, r) {
  let { keyboardDelegate: n, isDisabled: a, isRequired: i, name: l, validationBehavior: o = "aria" } = e, u = bn({
    usage: "search",
    sensitivity: "base"
  }), s = z(() => n || new zr(t.collection, t.disabledKeys, null, u), [
    n,
    t.collection,
    t.disabledKeys,
    u
  ]), { menuTriggerProps: d, menuProps: c } = P4({
    isDisabled: a,
    type: "listbox"
  }, t, r), f = (v) => {
    switch (v.key) {
      case "ArrowLeft": {
        v.preventDefault();
        let I = t.selectedKey != null ? s.getKeyAbove(t.selectedKey) : s.getFirstKey();
        I && t.setSelectedKey(I);
        break;
      }
      case "ArrowRight": {
        v.preventDefault();
        let I = t.selectedKey != null ? s.getKeyBelow(t.selectedKey) : s.getFirstKey();
        I && t.setSelectedKey(I);
        break;
      }
    }
  }, { typeSelectProps: p } = jf({
    keyboardDelegate: s,
    selectionManager: t.selectionManager,
    onTypeSelect(v) {
      t.setSelectedKey(v);
    }
  }), { isInvalid: b, validationErrors: m, validationDetails: h } = t.displayValidation, { labelProps: y, fieldProps: $, descriptionProps: x, errorMessageProps: C } = $r({
    ...e,
    labelElementType: "span",
    isInvalid: b,
    errorMessage: e.errorMessage || m
  });
  p.onKeyDown = p.onKeyDownCapture, delete p.onKeyDownCapture;
  let w = X(e, {
    labelable: !0
  }), A = _(p, d, $), M = ye();
  return Tm.set(t, {
    isDisabled: a,
    isRequired: i,
    name: l,
    validationBehavior: o
  }), {
    labelProps: {
      ...y,
      onClick: () => {
        e.isDisabled || (r.current.focus(), Eo("keyboard"));
      }
    },
    triggerProps: _(w, {
      ...A,
      isDisabled: a,
      onKeyDown: Bt(A.onKeyDown, f, e.onKeyDown),
      onKeyUp: e.onKeyUp,
      "aria-labelledby": [
        M,
        A["aria-labelledby"],
        A["aria-label"] && !A["aria-labelledby"] ? A.id : null
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
        A["aria-label"] && !$["aria-labelledby"] ? A.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: x,
    errorMessageProps: C,
    isInvalid: b,
    validationErrors: m,
    validationDetails: h
  };
}
function Y5(e, t, r) {
  let n = Tm.get(t) || {}, { autoComplete: a, name: i = n.name, isDisabled: l = n.isDisabled } = e, { validationBehavior: o, isRequired: u } = n, s = na(), { visuallyHiddenProps: d } = ar();
  Ir(e.selectRef, t.selectedKey, t.setSelectedKey), sa({
    validationBehavior: o,
    focus: () => r.current.focus()
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
      onFocus: () => r.current.focus(),
      disabled: l
    },
    selectProps: {
      tabIndex: -1,
      autoComplete: a,
      disabled: l,
      required: o === "native" && u,
      name: i,
      value: (c = t.selectedKey) !== null && c !== void 0 ? c : "",
      onChange: (f) => t.setSelectedKey(f.target.value)
    }
  };
}
function J5(e) {
  let { state: t, triggerRef: r, label: n, name: a, isDisabled: i } = e, l = N(null), { containerProps: o, inputProps: u, selectProps: s } = Y5({
    ...e,
    selectRef: l
  }, t, r);
  var d;
  return t.collection.size <= 300 ? /* @__PURE__ */ g.createElement("div", {
    ...o,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ g.createElement("input", u), /* @__PURE__ */ g.createElement("label", null, n, /* @__PURE__ */ g.createElement("select", {
    ...s,
    ref: l
  }, /* @__PURE__ */ g.createElement("option", null), [
    ...t.collection.getKeys()
  ].map((c) => {
    let f = t.collection.getItem(c);
    if (f.type === "item")
      return /* @__PURE__ */ g.createElement("option", {
        key: f.key,
        value: f.key
      }, f.textValue);
  })))) : a ? /* @__PURE__ */ g.createElement("input", {
    type: "hidden",
    autoComplete: s.autoComplete,
    name: a,
    disabled: i,
    value: (d = t.selectedKey) !== null && d !== void 0 ? d : ""
  }) : null;
}
function X5(e) {
  let t = X(e, {
    labelable: !0
  }), r;
  return e.orientation === "vertical" && (r = "vertical"), e.elementType !== "hr" ? {
    separatorProps: {
      ...t,
      role: "separator",
      "aria-orientation": r
    }
  } : {
    separatorProps: t
  };
}
const Xo = /* @__PURE__ */ new WeakMap();
function eo(e, t) {
  let r = Xo.get(e);
  if (!r)
    throw new Error("Unknown slider state");
  return `${r.id}-${t}`;
}
function Q5(e, t, r) {
  let { labelProps: n, fieldProps: a } = da(e), i = e.orientation === "vertical";
  var l;
  Xo.set(t, {
    id: (l = n.id) !== null && l !== void 0 ? l : a.id,
    "aria-describedby": e["aria-describedby"],
    "aria-details": e["aria-details"]
  });
  let { direction: o } = be(), { addGlobalListener: u, removeGlobalListener: s } = pn();
  const d = N(null), c = o === "rtl", f = N(null), { moveProps: p } = Po({
    onMoveStart() {
      f.current = null;
    },
    onMove({ deltaX: y, deltaY: $ }) {
      let { height: x, width: C } = r.current.getBoundingClientRect(), w = i ? x : C;
      f.current == null && (f.current = t.getThumbPercent(d.current) * w);
      let A = i ? $ : y;
      if ((i || c) && (A = -A), f.current += A, d.current != null && r.current) {
        const M = $t(f.current / w, 0, 1);
        t.setThumbPercent(d.current, M);
      }
    },
    onMoveEnd() {
      d.current != null && (t.setThumbDragging(d.current, !1), d.current = null);
    }
  });
  let b = N(void 0), m = (y, $, x, C) => {
    if (r.current && !e.isDisabled && t.values.every((w, A) => !t.isThumbDragging(A))) {
      let { height: w, width: A, top: M, left: v } = r.current.getBoundingClientRect(), I = i ? w : A, S = ((i ? C : x) - (i ? M : v)) / I;
      (o === "rtl" || i) && (S = 1 - S);
      let F = t.getPercentValue(S), V, R = t.values.findIndex((D) => F - D < 0);
      if (R === 0)
        V = R;
      else if (R === -1)
        V = t.values.length - 1;
      else {
        let D = t.values[R - 1], H = t.values[R];
        Math.abs(D - F) < Math.abs(H - F) ? V = R - 1 : V = R;
      }
      V >= 0 && t.isThumbEditable(V) ? (y.preventDefault(), d.current = V, t.setFocusedThumb(V), b.current = $, t.setThumbDragging(d.current, !0), t.setThumbValue(V, F), u(window, "mouseup", h, !1), u(window, "touchend", h, !1), u(window, "pointerup", h, !1)) : d.current = null;
    }
  }, h = (y) => {
    var $, x;
    ((x = y.pointerId) !== null && x !== void 0 ? x : ($ = y.changedTouches) === null || $ === void 0 ? void 0 : $[0].identifier) === b.current && (d.current != null && (t.setThumbDragging(d.current, !1), d.current = null), s(window, "mouseup", h, !1), s(window, "touchend", h, !1), s(window, "pointerup", h, !1));
  };
  return "htmlFor" in n && n.htmlFor && (delete n.htmlFor, n.onClick = () => {
    var y;
    (y = document.getElementById(eo(t, 0))) === null || y === void 0 || y.focus(), Eo("keyboard");
  }), {
    labelProps: n,
    // The root element of the Slider will have role="group" to group together
    // all the thumb inputs in the Slider.  The label of the Slider will
    // be used to label the group.
    groupProps: {
      role: "group",
      ...a
    },
    trackProps: _({
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
    }, p),
    outputProps: {
      htmlFor: t.values.map((y, $) => eo(t, $)).join(" "),
      "aria-live": "off"
    }
  };
}
function ex(e, t) {
  let { index: r = 0, isRequired: n, validationState: a, isInvalid: i, trackRef: l, inputRef: o, orientation: u = t.orientation, name: s } = e, d = e.isDisabled || t.isDisabled, c = u === "vertical", { direction: f } = be(), { addGlobalListener: p, removeGlobalListener: b } = pn(), m = Xo.get(t);
  var h;
  const { labelProps: y, fieldProps: $ } = da({
    ...e,
    id: eo(t, r),
    "aria-labelledby": `${m.id} ${(h = e["aria-labelledby"]) !== null && h !== void 0 ? h : ""}`.trim()
  }), x = t.values[r], C = re(() => {
    o.current && St(o.current);
  }, [
    o
  ]), w = t.focusedThumb === r;
  te(() => {
    w && C();
  }, [
    w,
    C
  ]);
  let A = f === "rtl", M = N(null), { keyboardProps: v } = Ci({
    onKeyDown(R) {
      let { getThumbMaxValue: D, getThumbMinValue: H, decrementThumb: U, incrementThumb: O, setThumbValue: L, setThumbDragging: K, pageSize: q } = t;
      if (!/^(PageUp|PageDown|Home|End)$/.test(R.key)) {
        R.continuePropagation();
        return;
      }
      switch (R.preventDefault(), K(r, !0), R.key) {
        case "PageUp":
          O(r, q);
          break;
        case "PageDown":
          U(r, q);
          break;
        case "Home":
          L(r, H(r));
          break;
        case "End":
          L(r, D(r));
          break;
      }
      K(r, !1);
    }
  }), { moveProps: I } = Po({
    onMoveStart() {
      M.current = null, t.setThumbDragging(r, !0);
    },
    onMove({ deltaX: R, deltaY: D, pointerType: H, shiftKey: U }) {
      const { getThumbPercent: O, setThumbPercent: L, decrementThumb: K, incrementThumb: q, step: ae, pageSize: de } = t;
      let { width: Ee, height: j } = l.current.getBoundingClientRect(), ee = c ? j : Ee;
      if (M.current == null && (M.current = O(r) * ee), H === "keyboard")
        R > 0 && A || R < 0 && !A || D > 0 ? K(r, U ? de : ae) : q(r, U ? de : ae);
      else {
        let ce = c ? D : R;
        (c || A) && (ce = -ce), M.current += ce, L(r, $t(M.current / ee, 0, 1));
      }
    },
    onMoveEnd() {
      t.setThumbDragging(r, !1);
    }
  });
  t.setThumbEditable(r, !d);
  const { focusableProps: T } = Nr(_(e, {
    onFocus: () => t.setFocusedThumb(r),
    onBlur: () => t.setFocusedThumb(void 0)
  }), o);
  let E = N(void 0), B = (R) => {
    C(), E.current = R, t.setThumbDragging(r, !0), p(window, "mouseup", S, !1), p(window, "touchend", S, !1), p(window, "pointerup", S, !1);
  }, S = (R) => {
    var D, H;
    ((H = R.pointerId) !== null && H !== void 0 ? H : (D = R.changedTouches) === null || D === void 0 ? void 0 : D[0].identifier) === E.current && (C(), t.setThumbDragging(r, !1), b(window, "mouseup", S, !1), b(window, "touchend", S, !1), b(window, "pointerup", S, !1));
  }, F = t.getThumbPercent(r);
  (c || f === "rtl") && (F = 1 - F);
  let V = d ? {} : _(v, I, {
    onMouseDown: (R) => {
      R.button !== 0 || R.altKey || R.ctrlKey || R.metaKey || B();
    },
    onPointerDown: (R) => {
      R.button !== 0 || R.altKey || R.ctrlKey || R.metaKey || B(R.pointerId);
    },
    onTouchStart: (R) => {
      B(R.changedTouches[0].identifier);
    }
  });
  return Ir(o, x, (R) => {
    t.setThumbValue(r, R);
  }), {
    inputProps: _(T, $, {
      type: "range",
      tabIndex: d ? void 0 : 0,
      min: t.getThumbMinValue(r),
      max: t.getThumbMaxValue(r),
      step: t.step,
      value: x,
      name: s,
      disabled: d,
      "aria-orientation": u,
      "aria-valuetext": t.getThumbValueLabel(r),
      "aria-required": n || void 0,
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
      onChange: (R) => {
        t.setThumbValue(r, parseFloat(R.target.value));
      }
    }),
    thumbProps: {
      ...V,
      style: {
        position: "absolute",
        [c ? "top" : "left"]: `${F * 100}%`,
        transform: "translate(-50%, -50%)",
        touchAction: "none"
      }
    },
    labelProps: y,
    isDragging: t.isThumbDragging(r),
    isDisabled: d,
    isFocused: w
  };
}
function tx(e, t, r) {
  let { labelProps: n, inputProps: a, isSelected: i, isPressed: l, isDisabled: o, isReadOnly: u } = qc(e, t, r);
  return {
    labelProps: n,
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
let rx = !1;
function bi() {
  return rx;
}
function Ni(e) {
  return e && e.__esModule ? e.default : e;
}
const Qo = /* @__PURE__ */ new WeakMap();
function to(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Rm(e, t) {
  let r = Qo.get(e);
  if (!r)
    throw new Error("Unknown grid");
  return `${r}-${to(t)}`;
}
function Mm(e, t, r) {
  let n = Qo.get(e);
  if (!n)
    throw new Error("Unknown grid");
  return `${n}-${to(t)}-${to(r)}`;
}
function Im(e, t) {
  return [
    ...e.collection.rowHeaderColumnKeys
  ].map((r) => Mm(e, t, r)).join(" ");
}
var fa = {}, Nm = {};
Nm = {
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
var Km = {};
Km = {
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
var zm = {};
zm = {
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
var Vm = {};
Vm = {
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
var Lm = {};
Lm = {
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
var Om = {};
Om = {
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
var jm = {};
jm = {
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
var _m = {};
_m = {
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
var Hm = {};
Hm = {
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
var Um = {};
Um = {
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
var Wm = {};
Wm = {
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
var Gm = {};
Gm = {
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
var Zm = {};
Zm = {
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
var qm = {};
qm = {
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
var Ym = {};
Ym = {
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
var Jm = {};
Jm = {
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
var Xm = {};
Xm = {
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
var Qm = {};
Qm = {
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
var e3 = {};
e3 = {
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
var t3 = {};
t3 = {
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
var r3 = {};
r3 = {
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
var n3 = {};
n3 = {
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
var a3 = {};
a3 = {
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
var i3 = {};
i3 = {
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
var l3 = {};
l3 = {
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
var o3 = {};
o3 = {
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
var u3 = {};
u3 = {
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
var s3 = {};
s3 = {
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
var d3 = {};
d3 = {
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
var c3 = {};
c3 = {
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
var f3 = {};
f3 = {
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
var p3 = {};
p3 = {
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
var b3 = {};
b3 = {
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
var m3 = {};
m3 = {
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
fa = {
  "ar-AE": Nm,
  "bg-BG": Km,
  "cs-CZ": zm,
  "da-DK": Vm,
  "de-DE": Lm,
  "el-GR": Om,
  "en-US": jm,
  "es-ES": _m,
  "et-EE": Hm,
  "fi-FI": Um,
  "fr-FR": Wm,
  "he-IL": Gm,
  "hr-HR": Zm,
  "hu-HU": qm,
  "it-IT": Ym,
  "ja-JP": Jm,
  "ko-KR": Xm,
  "lt-LT": Qm,
  "lv-LV": e3,
  "nb-NO": t3,
  "nl-NL": r3,
  "pl-PL": n3,
  "pt-BR": a3,
  "pt-PT": i3,
  "ro-RO": l3,
  "ru-RU": o3,
  "sk-SK": u3,
  "sl-SI": s3,
  "sr-SP": d3,
  "sv-SE": c3,
  "tr-TR": f3,
  "uk-UA": p3,
  "zh-CN": b3,
  "zh-TW": m3
};
class nx extends Sp {
  isCell(t) {
    return t.type === "cell" || t.type === "rowheader" || t.type === "column";
  }
  getKeyBelow(t) {
    let r = this.collection.getItem(t);
    if (r) {
      if (r.type === "column") {
        let n = Zt(Re(r, this.collection));
        if (n)
          return n.key;
        let a = this.getFirstKey();
        if (a == null)
          return;
        let i = this.collection.getItem(a);
        return cr(Re(i, this.collection), r.index).key;
      }
      return super.getKeyBelow(t);
    }
  }
  getKeyAbove(t) {
    let r = this.collection.getItem(t);
    if (!r)
      return;
    if (r.type === "column") {
      let a = this.collection.getItem(r.parentKey);
      return a && a.type === "column" ? a.key : void 0;
    }
    let n = super.getKeyAbove(t);
    return n != null && this.collection.getItem(n).type !== "headerrow" ? n : this.isCell(r) ? this.collection.columns[r.index].key : this.collection.columns[0].key;
  }
  findNextColumnKey(t) {
    let r = this.findNextKey(t.key, (a) => a.type === "column");
    if (r != null)
      return r;
    let n = this.collection.headerRows[t.level];
    for (let a of Re(n, this.collection))
      if (a.type === "column")
        return a.key;
  }
  findPreviousColumnKey(t) {
    let r = this.findPreviousKey(t.key, (i) => i.type === "column");
    if (r != null)
      return r;
    let n = this.collection.headerRows[t.level], a = [
      ...Re(n, this.collection)
    ];
    for (let i = a.length - 1; i >= 0; i--) {
      let l = a[i];
      if (l.type === "column")
        return l.key;
    }
  }
  getKeyRightOf(t) {
    let r = this.collection.getItem(t);
    if (r)
      return r.type === "column" ? this.direction === "rtl" ? this.findPreviousColumnKey(r) : this.findNextColumnKey(r) : super.getKeyRightOf(t);
  }
  getKeyLeftOf(t) {
    let r = this.collection.getItem(t);
    if (r)
      return r.type === "column" ? this.direction === "rtl" ? this.findNextColumnKey(r) : this.findPreviousColumnKey(r) : super.getKeyLeftOf(t);
  }
  getKeyForSearch(t, r) {
    if (!this.collator)
      return null;
    let n = this.collection, a = r ?? this.getFirstKey();
    if (a == null)
      return null;
    let i = n.getItem(a);
    i.type === "cell" && (a = i.parentKey);
    let l = !1;
    for (; a != null; ) {
      let o = n.getItem(a);
      for (let u of Re(o, this.collection)) {
        let s = n.columns[u.index];
        if (n.rowHeaderColumnKeys.has(s.key) && u.textValue) {
          let d = u.textValue.slice(0, t.length);
          if (this.collator.compare(d, t) === 0)
            return (r != null ? n.getItem(r) : i).type === "cell" ? u.key : o.key;
        }
      }
      a = this.getKeyBelow(a), a == null && !l && (a = this.getFirstKey(), l = !0);
    }
    return null;
  }
}
function ax(e, t, r) {
  let { keyboardDelegate: n, isVirtualized: a, layout: i } = e, l = bn({
    usage: "search",
    sensitivity: "base"
  }), { direction: o } = be(), u = t.selectionManager.disabledBehavior, s = z(() => n || new nx({
    collection: t.collection,
    disabledKeys: u === "selection" ? /* @__PURE__ */ new Set() : t.disabledKeys,
    ref: r,
    direction: o,
    collator: l,
    layout: i
  }), [
    n,
    t.collection,
    t.disabledKeys,
    u,
    r,
    o,
    l,
    i
  ]), d = ye(e.id);
  Qo.set(t, d);
  let { gridProps: c } = K5({
    ...e,
    id: d,
    keyboardDelegate: s
  }, t, r);
  a && (c["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), bi() && "expandedKeys" in t && (c.role = "treegrid");
  let { column: f, direction: p } = t.sortDescriptor || {}, b = Te(/* @__PURE__ */ Ni(fa), "@react-aria/table"), m = z(() => {
    var y;
    let $ = (y = t.collection.columns.find((x) => x.key === f)) === null || y === void 0 ? void 0 : y.textValue;
    return p && f ? b.format(`${p}Sort`, {
      columnName: $
    }) : void 0;
  }, [
    p,
    f,
    t.collection.columns
  ]), h = Vt(m);
  return qa(() => {
    hr(m, "assertive", 500);
  }, [
    m
  ]), {
    gridProps: _(c, h, {
      // merge sort description with long press information
      "aria-describedby": [
        h["aria-describedby"],
        c["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function ix(e, t, r) {
  var n, a;
  let { node: i } = e, l = i.props.allowsSorting, { gridCellProps: o } = db({
    ...e,
    focusMode: "child"
  }, t, r), u = i.props.isSelectionCell && t.selectionManager.selectionMode === "single", { pressProps: s } = st({
    isDisabled: !l || u,
    onPress() {
      t.sort(i.key);
    },
    ref: r
  }), { focusableProps: d } = Nr({}, r), c = null, f = ((n = t.sortDescriptor) === null || n === void 0 ? void 0 : n.column) === i.key, p = (a = t.sortDescriptor) === null || a === void 0 ? void 0 : a.direction;
  i.props.allowsSorting && !zn() && (c = f ? p : "none");
  let b = Te(/* @__PURE__ */ Ni(fa), "@react-aria/table"), m;
  l && (m = `${b.format("sortable")}`, f && p && zn() && (m = `${m}, ${b.format(p)}`));
  let h = Vt(m), y = t.collection.size === 0;
  return te(() => {
    y && t.selectionManager.focusedKey === i.key && t.selectionManager.setFocusedKey(null);
  }, [
    y,
    t.selectionManager,
    i.key
  ]), {
    columnHeaderProps: {
      ..._(
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
      id: Rm(t, i.key),
      "aria-colspan": i.colspan && i.colspan > 1 ? i.colspan : null,
      "aria-sort": c
    }
  };
}
const Ls = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function lx(e, t, r) {
  let { node: n, isVirtualized: a } = e, { rowProps: i, ...l } = V5(e, t, r), { direction: o } = be();
  a && !(bi() && "expandedKeys" in t) ? i["aria-rowindex"] = n.index + 1 + t.collection.headerRows.length : delete i["aria-rowindex"];
  let u = {};
  if (bi() && "expandedKeys" in t) {
    let p = t.keyMap.get(n.key);
    if (p != null) {
      var s, d, c;
      let b = ((s = p.props) === null || s === void 0 ? void 0 : s.UNSTABLE_childItems) || ((c = p.props) === null || c === void 0 || (d = c.children) === null || d === void 0 ? void 0 : d.length) > t.userColumnCount;
      u = {
        onKeyDown: (m) => {
          (m.key === Ls.expand[o] && t.selectionManager.focusedKey === p.key && b && t.expandedKeys !== "all" && !t.expandedKeys.has(p.key) || m.key === Ls.collapse[o] && t.selectionManager.focusedKey === p.key && b && (t.expandedKeys === "all" || t.expandedKeys.has(p.key))) && (t.toggleKey(p.key), m.stopPropagation());
        },
        "aria-expanded": b ? t.expandedKeys === "all" || t.expandedKeys.has(n.key) : void 0,
        "aria-level": p.level,
        "aria-posinset": p.indexOfType + 1,
        "aria-setsize": p.level > 1 ? mr(t.keyMap.get(p == null ? void 0 : p.parentKey).childNodes).indexOfType + 1 : mr(t.keyMap.get(t.collection.body.key).childNodes).indexOfType + 1
      };
    }
  }
  let f = l.hasAction ? xo(n.props) : {};
  return {
    rowProps: {
      ..._(i, u, f),
      "aria-labelledby": Im(t, n.key)
    },
    ...l
  };
}
function ox(e, t, r) {
  let { node: n, isVirtualized: a } = e, i = {
    role: "row"
  };
  return a && !(bi() && "expandedKeys" in t) && (i["aria-rowindex"] = n.index + 1), {
    rowProps: i
  };
}
function ux(e, t, r) {
  let { gridCellProps: n, isPressed: a } = db(e, t, r), i = e.node.column.key;
  return t.collection.rowHeaderColumnKeys.has(i) && (n.role = "rowheader", n.id = Mm(t, e.node.parentKey, i)), {
    gridCellProps: n,
    isPressed: a
  };
}
function sx(e, t) {
  let { key: r } = e;
  const { checkboxProps: n } = cb(e, t);
  return {
    checkboxProps: {
      ...n,
      "aria-labelledby": `${n.id} ${Im(t, r)}`
    }
  };
}
function dx(e) {
  let { isEmpty: t, isSelectAll: r, selectionMode: n } = e.selectionManager;
  return {
    checkboxProps: {
      "aria-label": Te(/* @__PURE__ */ Ni(fa), "@react-aria/table").format(n === "single" ? "select" : "selectAll"),
      isSelected: r,
      isDisabled: n !== "multiple" || e.collection.size === 0,
      isIndeterminate: !t && !r,
      onChange: () => e.selectionManager.toggleSelectAll()
    }
  };
}
function cx(e, t, r) {
  let { column: n, triggerRef: a, isDisabled: i, onResizeStart: l, onResize: o, onResizeEnd: u, "aria-label": s } = e;
  const d = Te(/* @__PURE__ */ Ni(fa), "@react-aria/table");
  let c = ye(), f = t.resizingColumn === n.key, p = N(f), b = N(null), m = N(!1), h = t.tableState.isKeyboardNavigationDisabled, { direction: y } = be(), { keyboardProps: $ } = Ci({
    onKeyDown: (K) => {
      h ? (K.key === "Escape" || K.key === "Enter" || K.key === " " || K.key === "Tab") && (K.preventDefault(), w(n)) : (K.continuePropagation(), K.key === "Enter" && x(n));
    }
  }), x = Be((K) => {
    p.current || (b.current = t.updateResizedColumns(K.key, t.getColumnWidth(K.key)), t.startResize(K.key), t.tableState.setKeyboardNavigationDisabled(!0), l == null || l(b.current)), p.current = !0;
  }), C = Be((K, q) => {
    let ae = t.updateResizedColumns(K.key, q);
    o == null || o(ae), b.current = ae;
  }), w = Be((K) => {
    p.current && (b.current == null && (b.current = t.updateResizedColumns(K.key, t.getColumnWidth(K.key))), t.endResize(), t.tableState.setKeyboardNavigationDisabled(!1), u == null || u(b.current), p.current = !1, a != null && a.current && !m.current && Fe(a.current)), b.current = null;
  });
  const A = N(0), { moveProps: M } = Po({
    onMoveStart() {
      A.current = t.getColumnWidth(n.key), x(n);
    },
    onMove(K) {
      let { deltaX: q, deltaY: ae, pointerType: de } = K;
      y === "rtl" && (q *= -1), de === "keyboard" && (ae !== 0 && q === 0 && (q = ae * -1), q *= 10), q !== 0 && (A.current += q, C(n, A.current));
    },
    onMoveEnd(K) {
      let { pointerType: q } = K;
      A.current = 0, (q === "mouse" || q === "touch" && m.current) && w(n);
    }
  });
  let v = re((K) => {
    h && M.onKeyDown(K);
  }, [
    h,
    M
  ]), I = Math.floor(t.getColumnMinWidth(n.key)), T = Math.floor(t.getColumnMaxWidth(n.key));
  T === 1 / 0 && (T = Number.MAX_SAFE_INTEGER);
  let E = Math.floor(t.getColumnWidth(n.key)), B = na();
  B === "virtual" && typeof window < "u" && "ontouchstart" in window && (B = "touch");
  let S = (a == null ? void 0 : a.current) == null && (B === "keyboard" || B === "virtual") && !f ? d.format("resizerDescription") : void 0, F = Vt(S), V = {
    "aria-label": s,
    "aria-orientation": "horizontal",
    "aria-labelledby": `${c} ${Rm(t.tableState, n.key)}`,
    "aria-valuetext": d.format("columnSize", {
      value: E
    }),
    type: "range",
    min: I,
    max: T,
    value: E,
    ...F
  };
  const R = re(() => {
    r.current && Fe(r.current);
  }, [
    r
  ]);
  let D = t.resizingColumn, H = N(null);
  te(() => {
    if (H.current !== D && D != null && D === n.key) {
      m.current = document.activeElement === r.current, x(n);
      let K = setTimeout(() => R(), 0), q = setTimeout(R, 400);
      return () => {
        clearTimeout(K), clearTimeout(q);
      };
    }
    H.current = D;
  }, [
    D,
    n,
    R,
    r,
    x
  ]);
  let U = (K) => {
    let q = t.getColumnWidth(n.key), ae = parseFloat(K.target.value);
    ae > q ? ae = q + 10 : ae = q - 10, C(n, ae);
  }, { pressProps: O } = st({
    onPressStart: (K) => {
      if (!(K.ctrlKey || K.altKey || K.metaKey || K.shiftKey || K.pointerType === "keyboard")) {
        if (K.pointerType === "virtual" && t.resizingColumn != null) {
          w(n);
          return;
        }
        R(), K.pointerType !== "virtual" && x(n);
      }
    },
    onPress: (K) => {
      (K.pointerType === "touch" && m.current || K.pointerType === "mouse") && t.resizingColumn != null && w(n);
    }
  }), { visuallyHiddenProps: L } = ar();
  return {
    resizerProps: _($, {
      ...M,
      onKeyDown: v
    }, O, {
      style: {
        touchAction: "none"
      }
    }),
    inputProps: _(L, {
      id: c,
      onBlur: () => {
        w(n);
      },
      onChange: U,
      disabled: i
    }, V),
    isResizing: f
  };
}
function h3() {
  return z5();
}
const v3 = /* @__PURE__ */ new WeakMap();
function mi(e, t, r) {
  return typeof t == "string" && (t = t.replace(/\s+/g, "")), `${v3.get(e)}-${r}-${t}`;
}
function fx(e, t, r) {
  var n;
  let { key: a, isDisabled: i, shouldSelectOnPressUp: l } = e, { selectionManager: o, selectedKey: u } = t, s = a === u, d = i || t.isDisabled || t.disabledKeys.has(a), { itemProps: c, isPressed: f } = mn({
    selectionManager: o,
    key: a,
    ref: r,
    isDisabled: d,
    shouldSelectOnPressUp: l,
    linkBehavior: "selection"
  }), p = mi(t, a, "tab"), b = mi(t, a, "tabpanel"), { tabIndex: m } = c, h = t.collection.getItem(a), y = X(h == null ? void 0 : h.props, {
    isLink: !!(!(h == null || (n = h.props) === null || n === void 0) && n.href),
    labelable: !0
  });
  return delete y.id, {
    tabProps: _(y, c, {
      id: p,
      "aria-selected": s,
      "aria-disabled": d || void 0,
      "aria-controls": s ? b : void 0,
      tabIndex: d ? void 0 : m,
      role: "tab"
    }),
    isSelected: s,
    isDisabled: d,
    isPressed: f
  };
}
function px(e, t, r) {
  let n = Bo(r) ? void 0 : 0;
  var a;
  const i = mi(t, (a = e.id) !== null && a !== void 0 ? a : t == null ? void 0 : t.selectedKey, "tabpanel"), l = er({
    ...e,
    id: i,
    "aria-labelledby": mi(t, t == null ? void 0 : t.selectedKey, "tab")
  });
  return {
    tabPanelProps: _(l, {
      tabIndex: n,
      role: "tabpanel",
      "aria-describedby": e["aria-describedby"],
      "aria-details": e["aria-details"]
    })
  };
}
class bx {
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
  constructor(t, r, n, a = /* @__PURE__ */ new Set()) {
    this.collection = t, this.flipDirection = r === "rtl" && n === "horizontal", this.disabledKeys = a;
  }
}
function mx(e, t, r) {
  let { orientation: n = "horizontal", keyboardActivation: a = "automatic" } = e, { collection: i, selectionManager: l, disabledKeys: o } = t, { direction: u } = be(), s = z(() => new bx(i, u, n, o), [
    i,
    o,
    n,
    u
  ]), { collectionProps: d } = Ai({
    ref: r,
    selectionManager: l,
    keyboardDelegate: s,
    selectOnFocus: a === "automatic",
    disallowEmptySelection: !0,
    scrollRef: r,
    linkBehavior: "selection"
  }), c = ye();
  v3.set(t, c);
  let f = er({
    ...e,
    id: c
  });
  return {
    tabListProps: {
      ..._(d, f),
      role: "tablist",
      "aria-orientation": n,
      tabIndex: void 0
    }
  };
}
function hx(e) {
  return e && e.__esModule ? e.default : e;
}
const g3 = /* @__PURE__ */ new WeakMap();
function vx(e, t, r) {
  let { direction: n } = be(), a = e.keyboardDelegate || new zr({
    collection: t.collection,
    ref: r,
    orientation: "horizontal",
    direction: n,
    disabledKeys: t.disabledKeys
  }), { labelProps: i, fieldProps: l, descriptionProps: o, errorMessageProps: u } = $r({
    ...e,
    labelElementType: "span"
  }), { gridProps: s } = fb({
    ...e,
    ...l,
    keyboardDelegate: a,
    shouldFocusWrap: !0,
    linkBehavior: "override"
  }, t, r), [d, c] = Y(!1), { focusWithinProps: f } = Ft({
    onFocusWithinChange: c
  }), p = X(e), b = N(t.collection.size);
  return te(() => {
    r.current && b.current > 0 && t.collection.size === 0 && d && r.current.focus(), b.current = t.collection.size;
  }, [
    t.collection.size,
    d,
    r
  ]), g3.set(t, {
    onRemove: e.onRemove
  }), {
    gridProps: _(s, p, {
      role: t.collection.size ? "grid" : null,
      "aria-atomic": !1,
      "aria-relevant": "additions",
      "aria-live": d ? "polite" : "off",
      ...f,
      ...l
    }),
    labelProps: i,
    descriptionProps: o,
    errorMessageProps: u
  };
}
var $3 = {}, y3 = {};
y3 = {
  removeButtonLabel: "إزالة",
  removeDescription: "اضغط على مفتاح DELETE لإزالة علامة."
};
var x3 = {};
x3 = {
  removeButtonLabel: "Премахване",
  removeDescription: "Натиснете Delete, за да премахнете маркера."
};
var D3 = {};
D3 = {
  removeButtonLabel: "Odebrat",
  removeDescription: "Stisknutím klávesy Delete odeberete značku."
};
var C3 = {};
C3 = {
  removeButtonLabel: "Fjern",
  removeDescription: "Tryk på Slet for at fjerne tag."
};
var E3 = {};
E3 = {
  removeButtonLabel: "Entfernen",
  removeDescription: "Auf „Löschen“ drücken, um das Tag zu entfernen."
};
var P3 = {};
P3 = {
  removeButtonLabel: "Κατάργηση",
  removeDescription: "Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."
};
var w3 = {};
w3 = {
  removeDescription: "Press Delete to remove tag.",
  removeButtonLabel: "Remove"
};
var S3 = {};
S3 = {
  removeButtonLabel: "Quitar",
  removeDescription: "Pulse Eliminar para quitar la etiqueta."
};
var B3 = {};
B3 = {
  removeButtonLabel: "Eemalda",
  removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete."
};
var k3 = {};
k3 = {
  removeButtonLabel: "Poista",
  removeDescription: "Poista tunniste painamalla Poista-painiketta."
};
var F3 = {};
F3 = {
  removeButtonLabel: "Supprimer",
  removeDescription: "Appuyez sur Supprimer pour supprimer l’étiquette."
};
var A3 = {};
A3 = {
  removeButtonLabel: "הסר",
  removeDescription: "לחץ על מחק כדי להסיר תג."
};
var T3 = {};
T3 = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Delete za uklanjanje oznake."
};
var R3 = {};
R3 = {
  removeButtonLabel: "Eltávolítás",
  removeDescription: "Nyomja meg a Delete billentyűt a címke eltávolításához."
};
var M3 = {};
M3 = {
  removeButtonLabel: "Rimuovi",
  removeDescription: "Premi Elimina per rimuovere il tag."
};
var I3 = {};
I3 = {
  removeButtonLabel: "削除",
  removeDescription: "タグを削除するには、Delete キーを押します。"
};
var N3 = {};
N3 = {
  removeButtonLabel: "제거",
  removeDescription: "태그를 제거하려면 Delete 키를 누르십시오."
};
var K3 = {};
K3 = {
  removeButtonLabel: "Pašalinti",
  removeDescription: "Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."
};
var z3 = {};
z3 = {
  removeButtonLabel: "Noņemt",
  removeDescription: "Nospiediet Delete [Dzēst], lai noņemtu tagu."
};
var V3 = {};
V3 = {
  removeButtonLabel: "Fjern",
  removeDescription: "Trykk på Slett for å fjerne taggen."
};
var L3 = {};
L3 = {
  removeButtonLabel: "Verwijderen",
  removeDescription: "Druk op Verwijderen om de tag te verwijderen."
};
var O3 = {};
O3 = {
  removeButtonLabel: "Usuń",
  removeDescription: "Naciśnij Usuń, aby usunąć znacznik."
};
var j3 = {};
j3 = {
  removeButtonLabel: "Remover",
  removeDescription: "Pressione Delete para remover a tag."
};
var _3 = {};
_3 = {
  removeButtonLabel: "Eliminar",
  removeDescription: "Prima Delete para eliminar a tag."
};
var H3 = {};
H3 = {
  removeButtonLabel: "Îndepărtaţi",
  removeDescription: "Apăsați pe Delete (Ștergere) pentru a elimina eticheta."
};
var U3 = {};
U3 = {
  removeButtonLabel: "Удалить",
  removeDescription: "Нажмите DELETE, чтобы удалить тег."
};
var W3 = {};
W3 = {
  removeButtonLabel: "Odstrániť",
  removeDescription: "Ak chcete odstrániť značku, stlačte kláves Delete."
};
var G3 = {};
G3 = {
  removeButtonLabel: "Odstrani",
  removeDescription: "Pritisnite Delete, da odstranite oznako."
};
var Z3 = {};
Z3 = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Obriši da biste uklonili oznaku."
};
var q3 = {};
q3 = {
  removeButtonLabel: "Ta bort",
  removeDescription: "Tryck på Radera för att ta bort taggen."
};
var Y3 = {};
Y3 = {
  removeButtonLabel: "Kaldır",
  removeDescription: "Etiketi kaldırmak için Sil tuşuna basın."
};
var J3 = {};
J3 = {
  removeButtonLabel: "Вилучити",
  removeDescription: "Натисніть Delete, щоб вилучити тег."
};
var X3 = {};
X3 = {
  removeButtonLabel: "删除",
  removeDescription: "按下“删除”以删除标记。"
};
var Q3 = {};
Q3 = {
  removeButtonLabel: "移除",
  removeDescription: "按 Delete 鍵以移除標記。"
};
$3 = {
  "ar-AE": y3,
  "bg-BG": x3,
  "cs-CZ": D3,
  "da-DK": C3,
  "de-DE": E3,
  "el-GR": P3,
  "en-US": w3,
  "es-ES": S3,
  "et-EE": B3,
  "fi-FI": k3,
  "fr-FR": F3,
  "he-IL": A3,
  "hr-HR": T3,
  "hu-HU": R3,
  "it-IT": M3,
  "ja-JP": I3,
  "ko-KR": N3,
  "lt-LT": K3,
  "lv-LV": z3,
  "nb-NO": V3,
  "nl-NL": L3,
  "pl-PL": O3,
  "pt-BR": j3,
  "pt-PT": _3,
  "ro-RO": H3,
  "ru-RU": U3,
  "sk-SK": W3,
  "sl-SI": G3,
  "sr-SP": Z3,
  "sv-SE": q3,
  "tr-TR": Y3,
  "uk-UA": J3,
  "zh-CN": X3,
  "zh-TW": Q3
};
function gx(e, t, r) {
  let { item: n } = e, a = Te(/* @__PURE__ */ hx($3), "@react-aria/tag"), i = ye(), { onRemove: l } = g3.get(t) || {}, { rowProps: o, gridCellProps: u, ...s } = pb({
    node: n
  }, t, r);
  delete o.onKeyDownCapture;
  let { descriptionProps: d, ...c } = s, f = (x) => {
    (x.key === "Delete" || x.key === "Backspace") && (x.preventDefault(), t.selectionManager.isSelected(n.key) ? l == null || l(new Set(t.selectionManager.selectedKeys)) : l == null || l(/* @__PURE__ */ new Set([
      n.key
    ])));
  }, p = na();
  p === "virtual" && typeof window < "u" && "ontouchstart" in window && (p = "pointer");
  let b = l && (p === "keyboard" || p === "virtual") ? a.format("removeDescription") : "", m = Vt(b), h = n.key === t.selectionManager.focusedKey, y = X(n.props), $ = xo(n.props);
  return {
    removeButtonProps: {
      "aria-label": a.format("removeButtonLabel"),
      "aria-labelledby": `${i} ${o.id}`,
      id: i,
      onPress: () => l ? l(/* @__PURE__ */ new Set([
        n.key
      ])) : null,
      excludeFromTabOrder: !0
    },
    rowProps: _(o, y, $, {
      tabIndex: h || t.selectionManager.focusedKey == null ? 0 : -1,
      onKeyDown: l ? f : void 0,
      "aria-describedby": m["aria-describedby"]
    }),
    gridCellProps: _(u, {
      "aria-errormessage": e["aria-errormessage"],
      "aria-label": e["aria-label"]
    }),
    ...c,
    allowsRemoving: !!l
  };
}
function $x(e, t) {
  let r = X(e, {
    labelable: !0
  }), { hoverProps: n } = ke({
    onHoverStart: () => t == null ? void 0 : t.open(!0),
    onHoverEnd: () => t == null ? void 0 : t.close()
  });
  return {
    tooltipProps: _(r, n, {
      role: "tooltip"
    })
  };
}
function sn(e, t, r) {
  return t != null && e.compare(t) < 0 || r != null && e.compare(r) > 0;
}
function ro(e, t, r, n, a) {
  let i = {};
  for (let o in t)
    i[o] = Math.floor(t[o] / 2), i[o] > 0 && t[o] % 2 === 0 && i[o]--;
  let l = Br(e, t, r).subtract(i);
  return Un(e, l, t, r, n, a);
}
function Br(e, t, r, n, a) {
  let i = e;
  return t.years ? i = $y(e) : t.months ? i = Rr(e) : t.weeks && (i = Ln(e, r)), Un(e, i, t, r, n, a);
}
function no(e, t, r, n, a) {
  let i = {
    ...t
  };
  t.days ? i.days-- : t.weeks ? i.weeks-- : t.months ? i.months-- : t.years && i.years--;
  let l = Br(e, t, r).subtract(i);
  return Un(e, l, t, r, n, a);
}
function Un(e, t, r, n, a, i) {
  return a && e.compare(a) >= 0 && (t = To(t, Br(rt(a), r, n))), i && e.compare(i) <= 0 && (t = Ao(t, no(rt(i), r, n))), t;
}
function sr(e, t, r) {
  return t && (e = To(e, rt(t))), r && (e = Ao(e, rt(r))), e;
}
function eh(e, t, r) {
  if (!r)
    return e;
  for (; e.compare(t) >= 0 && r(e); )
    e = e.subtract({
      days: 1
    });
  if (e.compare(t) >= 0)
    return e;
}
function th(e) {
  let t = z(() => new Xt(e.locale), [
    e.locale
  ]), r = z(() => t.resolvedOptions(), [
    t
  ]), { locale: n, createCalendar: a, visibleDuration: i = {
    months: 1
  }, minValue: l, maxValue: o, selectionAlignment: u, isDateUnavailable: s, pageBehavior: d = "visible" } = e, c = z(() => a(r.calendar), [
    a,
    r.calendar
  ]), [f, p] = We(e.value, e.defaultValue, e.onChange), b = z(() => f ? Ae(rt(f), c) : null, [
    f,
    c
  ]), m = z(() => f && "timeZone" in f ? f.timeZone : r.timeZone, [
    f,
    r.timeZone
  ]), h = z(() => e.focusedValue ? sr(Ae(rt(e.focusedValue), c), l, o) : void 0, [
    e.focusedValue,
    c,
    l,
    o
  ]), y = z(() => sr(e.defaultFocusedValue ? Ae(rt(e.defaultFocusedValue), c) : b || Ae(Pi(m), c), l, o), [
    e.defaultFocusedValue,
    b,
    m,
    c,
    l,
    o
  ]), [$, x] = We(h, y, e.onFocusChange), [C, w] = Y(() => {
    switch (u) {
      case "start":
        return Br($, i, n, l, o);
      case "end":
        return no($, i, n, l, o);
      case "center":
      default:
        return ro($, i, n, l, o);
    }
  }), [A, M] = Y(e.autoFocus || !1), v = z(() => {
    let D = {
      ...i
    };
    return D.days ? D.days-- : D.days = -1, C.add(D);
  }, [
    C,
    i
  ]), [I, T] = Y(c.identifier);
  if (c.identifier !== I) {
    let D = Ae($, c);
    w(ro(D, i, n, l, o)), x(D), T(c.identifier);
  }
  sn($, l, o) ? x(sr($, l, o)) : $.compare(C) < 0 ? w(no($, i, n, l, o)) : $.compare(v) > 0 && w(Br($, i, n, l, o));
  function E(D) {
    D = sr(D, l, o), x(D);
  }
  function B(D) {
    if (!e.isDisabled && !e.isReadOnly) {
      if (D = sr(D, l, o), D = eh(D, C, s), !D)
        return;
      D = Ae(D, (f == null ? void 0 : f.calendar) || new nt()), f && "hour" in f ? p(f.set(D)) : p(D);
    }
  }
  let S = z(() => b ? s && s(b) ? !0 : sn(b, l, o) : !1, [
    b,
    s,
    l,
    o
  ]), F = e.isInvalid || e.validationState === "invalid" || S, V = F ? "invalid" : null, R = z(() => d === "visible" ? i : Dl(i), [
    d,
    i
  ]);
  return {
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    value: b,
    setValue: B,
    visibleRange: {
      start: C,
      end: v
    },
    minValue: l,
    maxValue: o,
    focusedDate: $,
    timeZone: m,
    validationState: V,
    isValueInvalid: F,
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
      let D = C.add(R);
      x(sr($.add(R), l, o)), w(Br(Un($, D, R, n, l, o), R, n));
    },
    focusPreviousPage() {
      let D = C.subtract(R);
      x(sr($.subtract(R), l, o)), w(Br(Un($, D, R, n, l, o), R, n));
    },
    focusSectionStart() {
      i.days ? E(C) : i.weeks ? E(Ln($, n)) : (i.months || i.years) && E(Rr($));
    },
    focusSectionEnd() {
      i.days ? E(v) : i.weeks ? E(Dy($, n)) : (i.months || i.years) && E(ai($));
    },
    focusNextSection(D) {
      if (!D && !i.days) {
        E($.add(Dl(i)));
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
        E($.subtract(Dl(i)));
        return;
      }
      i.days ? this.focusPreviousPage() : i.weeks ? E($.subtract({
        months: 1
      })) : (i.months || i.years) && E($.subtract({
        years: 1
      }));
    },
    selectFocusedDate() {
      B($);
    },
    selectDate(D) {
      B(D);
    },
    isFocused: A,
    setFocused: M,
    isInvalid(D) {
      return sn(D, l, o);
    },
    isSelected(D) {
      return b != null && Le(D, b) && !this.isCellDisabled(D) && !this.isCellUnavailable(D);
    },
    isCellFocused(D) {
      return A && $ && Le(D, $);
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
      return Le(D, C) || this.isInvalid(D, l, o);
    },
    isNextVisibleRangeInvalid() {
      let D = v.add({
        days: 1
      });
      return Le(D, v) || this.isInvalid(D, l, o);
    },
    getDatesInWeek(D, H = C) {
      let U = H.add({
        weeks: D
      }), O = [];
      U = Ln(U, n);
      let L = ko(U, n);
      for (let K = 0; K < L; K++)
        O.push(null);
      for (; O.length < 7; ) {
        O.push(U);
        let K = U.add({
          days: 1
        });
        if (Le(U, K))
          break;
        U = K;
      }
      for (; O.length < 7; )
        O.push(null);
      return O;
    }
  };
}
function Dl(e) {
  let t = {
    ...e
  };
  for (let r in e)
    t[r] = 1;
  return t;
}
function yx(e) {
  let { value: t, defaultValue: r, onChange: n, createCalendar: a, locale: i, visibleDuration: l = {
    months: 1
  }, minValue: o, maxValue: u, ...s } = e, [d, c] = We(t, r || null, n), [f, p] = Y(null), b = "center";
  if (d && d.start && d.end) {
    let H = ro(rt(d.start), l, i, o, u).add(l).subtract({
      days: 1
    });
    d.end.compare(H) > 0 && (b = "start");
  }
  let m = N(null), [h, y] = Y(null), $ = z(() => To(o, h == null ? void 0 : h.start), [
    o,
    h
  ]), x = z(() => Ao(u, h == null ? void 0 : h.end), [
    u,
    h
  ]), C = th({
    ...s,
    value: d && d.start,
    createCalendar: a,
    locale: i,
    visibleDuration: l,
    minValue: $,
    maxValue: x,
    selectionAlignment: b
  }), w = (D) => {
    D && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (m.current = {
      start: js(D, C, -1),
      end: js(D, C, 1)
    }, y(m.current)) : (m.current = null, y(null));
  }, [A, M] = Y(C.visibleRange);
  (!Kl(C.visibleRange.start, A.start) || !Kl(C.visibleRange.end, A.end)) && (w(f), M(C.visibleRange));
  let v = (D) => {
    D ? (p(D), w(D)) : (p(null), w(null));
  }, I = f ? Cl(f, C.focusedDate) : d && Cl(d.start, d.end), T = (D) => {
    if (!e.isReadOnly && (D = sr(D, $, x), D = eh(D, C.visibleRange.start, e.isDateUnavailable), !!D))
      if (!f)
        v(D);
      else {
        let H = Cl(f, D);
        c({
          start: Os(H.start, d == null ? void 0 : d.start),
          end: Os(H.end, d == null ? void 0 : d.end)
        }), v(null);
      }
  }, [E, B] = Y(!1), { isDateUnavailable: S } = e, F = z(() => !d || f ? !1 : S && (S(d.start) || S(d.end)) ? !0 : sn(d.start, o, u) || sn(d.end, o, u), [
    S,
    d,
    f,
    o,
    u
  ]), V = e.isInvalid || e.validationState === "invalid" || F;
  return {
    ...C,
    value: d,
    setValue: c,
    anchorDate: f,
    setAnchorDate: v,
    highlightedRange: I,
    validationState: V ? "invalid" : null,
    isValueInvalid: V,
    selectFocusedDate() {
      T(C.focusedDate);
    },
    selectDate: T,
    highlightDate(D) {
      f && C.setFocusedDate(D);
    },
    isSelected(D) {
      return I && D.compare(I.start) >= 0 && D.compare(I.end) <= 0 && !C.isCellDisabled(D) && !C.isCellUnavailable(D);
    },
    isInvalid(D) {
      var H, U;
      return C.isInvalid(D) || sn(D, (H = m.current) === null || H === void 0 ? void 0 : H.start, (U = m.current) === null || U === void 0 ? void 0 : U.end);
    },
    isDragging: E,
    setDragging: B
  };
}
function Cl(e, t) {
  return !e || !t ? null : (t.compare(e) < 0 && ([e, t] = [
    t,
    e
  ]), {
    start: rt(e),
    end: rt(t)
  });
}
function Os(e, t) {
  return e = Ae(e, (t == null ? void 0 : t.calendar) || new nt()), t && "hour" in t ? t.set(e) : e;
}
function js(e, t, r) {
  let n = e.add({
    days: r
  });
  for (; (r < 0 ? n.compare(t.visibleRange.start) >= 0 : n.compare(t.visibleRange.end) <= 0) && !t.isCellUnavailable(n); )
    n = n.add({
      days: r
    });
  return t.isCellUnavailable(n) ? n.add({
    days: -r
  }) : null;
}
function xx(e = {}) {
  let [t, r] = We(e.value, e.defaultValue || [], e.onChange), n = !!e.isRequired && t.length === 0, a = N(/* @__PURE__ */ new Map()), i = At({
    ...e,
    value: t
  }), l = i.displayValidation.isInvalid;
  var o;
  return {
    ...i,
    value: t,
    setValue(s) {
      e.isReadOnly || e.isDisabled || r(s);
    },
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isSelected(s) {
      return t.includes(s);
    },
    addValue(s) {
      e.isReadOnly || e.isDisabled || t.includes(s) || r(t.concat(s));
    },
    removeValue(s) {
      e.isReadOnly || e.isDisabled || t.includes(s) && r(t.filter((d) => d !== s));
    },
    toggleValue(s) {
      e.isReadOnly || e.isDisabled || (t.includes(s) ? r(t.filter((d) => d !== s)) : r(t.concat(s)));
    },
    setInvalid(s, d) {
      let c = new Map(a.current);
      d.isInvalid ? c.set(s, d) : c.delete(s), a.current = c, i.updateValidation(Hn(...c.values()));
    },
    validationState: (o = e.validationState) !== null && o !== void 0 ? o : l ? "invalid" : null,
    isInvalid: l,
    isRequired: n
  };
}
class wt extends Set {
  constructor(t, r, n) {
    super(t), t instanceof wt ? (this.anchorKey = r || t.anchorKey, this.currentKey = n || t.currentKey) : (this.anchorKey = r, this.currentKey = n);
  }
}
function Dx(e, t) {
  if (e.size !== t.size)
    return !1;
  for (let r of e)
    if (!t.has(r))
      return !1;
  return !0;
}
function eu(e) {
  let { selectionMode: t = "none", disallowEmptySelection: r, allowDuplicateSelectionEvents: n, selectionBehavior: a = "toggle", disabledBehavior: i = "all" } = e, l = N(!1), [, o] = Y(!1), u = N(null), s = N(null), [, d] = Y(null), c = z(() => _s(e.selectedKeys), [
    e.selectedKeys
  ]), f = z(() => _s(e.defaultSelectedKeys, new wt()), [
    e.defaultSelectedKeys
  ]), [p, b] = We(c, f, e.onSelectionChange), m = z(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), [h, y] = Y(a);
  a === "replace" && h === "toggle" && typeof p == "object" && p.size === 0 && y("replace");
  let $ = N(a);
  return te(() => {
    a !== $.current && (y(a), $.current = a);
  }, [
    a
  ]), {
    selectionMode: t,
    disallowEmptySelection: r,
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
    selectedKeys: p,
    setSelectedKeys(x) {
      (n || !Dx(x, p)) && b(x);
    },
    disabledKeys: m,
    disabledBehavior: i
  };
}
function _s(e, t) {
  return e ? e === "all" ? "all" : new wt(e) : t;
}
class tu {
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
  setFocusedKey(t, r) {
    (t == null || this.collection.getItem(t)) && this.state.setFocusedKey(t, r);
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
    let t = this.getSelectAllKeys(), r = this.state.selectedKeys;
    return this._isSelectAll = t.every((n) => r.has(n)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let t = null;
    for (let r of this.state.selectedKeys) {
      let n = this.collection.getItem(r);
      (!t || n && yl(this.collection, n, t) < 0) && (t = n);
    }
    return t == null ? void 0 : t.key;
  }
  get lastSelectedKey() {
    let t = null;
    for (let r of this.state.selectedKeys) {
      let n = this.collection.getItem(r);
      (!t || n && yl(this.collection, n, t) > 0) && (t = n);
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
    let r;
    if (this.state.selectedKeys === "all")
      r = new wt([
        t
      ], t, t);
    else {
      let n = this.state.selectedKeys, a = n.anchorKey || t;
      r = new wt(n, a, t);
      for (let i of this.getKeyRange(a, n.currentKey || t))
        r.delete(i);
      for (let i of this.getKeyRange(t, a))
        this.canSelectItem(i) && r.add(i);
    }
    this.state.setSelectedKeys(r);
  }
  getKeyRange(t, r) {
    let n = this.collection.getItem(t), a = this.collection.getItem(r);
    return n && a ? yl(this.collection, n, a) <= 0 ? this.getKeyRangeInternal(t, r) : this.getKeyRangeInternal(r, t) : [];
  }
  getKeyRangeInternal(t, r) {
    let n = [], a = t;
    for (; a; ) {
      let i = this.collection.getItem(a);
      if ((i && i.type === "item" || i.type === "cell" && this.allowsCellSelection) && n.push(a), a === r)
        return n;
      a = this.collection.getKeyAfter(a);
    }
    return [];
  }
  getKey(t) {
    let r = this.collection.getItem(t);
    if (!r || r.type === "cell" && this.allowsCellSelection)
      return t;
    for (; r.type !== "item" && r.parentKey != null; )
      r = this.collection.getItem(r.parentKey);
    return !r || r.type !== "item" ? null : r.key;
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
    let r = new wt(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    r.has(t) ? r.delete(t) : this.canSelectItem(t) && (r.add(t), r.anchorKey = t, r.currentKey = t), !(this.disallowEmptySelection && r.size === 0) && this.state.setSelectedKeys(r);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(t) {
    if (this.selectionMode === "none" || (t = this.getKey(t), t == null))
      return;
    let r = this.canSelectItem(t) ? new wt([
      t
    ], t, t) : new wt();
    this.state.setSelectedKeys(r);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(t) {
    if (this.selectionMode === "none")
      return;
    let r = new wt();
    for (let n of t)
      if (n = this.getKey(n), n != null && (r.add(n), this.selectionMode === "single"))
        break;
    this.state.setSelectedKeys(r);
  }
  getSelectAllKeys() {
    let t = [], r = (n) => {
      for (; n; ) {
        if (this.canSelectItem(n)) {
          let a = this.collection.getItem(n);
          a.type === "item" && t.push(n), a.hasChildNodes && (this.allowsCellSelection || a.type !== "item") && r(Zt(Re(a, this.collection)).key);
        }
        n = this.collection.getKeyAfter(n);
      }
    };
    return r(this.collection.getFirstKey()), t;
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
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new wt());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(t, r) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(t) && !this.disallowEmptySelection ? this.toggleSelection(t) : this.replaceSelection(t) : this.selectionBehavior === "toggle" || r && (r.pointerType === "touch" || r.pointerType === "virtual") ? this.toggleSelection(t) : this.replaceSelection(t));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(t) {
    if (t === this.state.selectedKeys)
      return !0;
    let r = this.selectedKeys;
    if (t.size !== r.size)
      return !1;
    for (let n of t)
      if (!r.has(n))
        return !1;
    for (let n of r)
      if (!t.has(n))
        return !1;
    return !0;
  }
  canSelectItem(t) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(t))
      return !1;
    let r = this.collection.getItem(t);
    return !(!r || r.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(t) {
    return this.state.disabledKeys.has(t) && this.state.disabledBehavior === "all";
  }
  isLink(t) {
    var r, n;
    return !!(!((n = this.collection.getItem(t)) === null || n === void 0 || (r = n.props) === null || r === void 0) && r.href);
  }
  constructor(t, r, n) {
    this.collection = t, this.state = r;
    var a;
    this.allowsCellSelection = (a = n == null ? void 0 : n.allowsCellSelection) !== null && a !== void 0 ? a : !1, this._isSelectAll = null;
  }
}
class ao {
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
    let r = this.keyMap.get(t);
    return r ? r.prevKey : null;
  }
  getKeyAfter(t) {
    let r = this.keyMap.get(t);
    return r ? r.nextKey : null;
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
    const r = [
      ...this.getKeys()
    ];
    return this.getItem(r[t]);
  }
  getChildren(t) {
    let r = this.keyMap.get(t);
    return (r == null ? void 0 : r.childNodes) || [];
  }
  constructor(t) {
    this.keyMap = /* @__PURE__ */ new Map(), this.iterable = t;
    let r = (i) => {
      if (this.keyMap.set(i.key, i), i.childNodes && i.type === "section")
        for (let l of i.childNodes)
          r(l);
    };
    for (let i of t)
      r(i);
    let n, a = 0;
    for (let [i, l] of this.keyMap)
      n ? (n.nextKey = i, l.prevKey = n.key) : (this.firstKey = i, l.prevKey = void 0), l.type === "item" && (l.index = a++), n = l, n.nextKey = void 0;
    this.lastKey = n == null ? void 0 : n.key;
  }
}
function Ki(e) {
  let { filter: t } = e, r = eu(e), n = z(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), a = re((s) => t ? new ao(t(s)) : new ao(s), [
    t
  ]), i = z(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [
    e.suppressTextValueWarning
  ]), l = Uo(e, a, i), o = z(() => new tu(l, r), [
    l,
    r
  ]);
  const u = N(null);
  return te(() => {
    if (r.focusedKey != null && !l.getItem(r.focusedKey)) {
      const s = u.current.getItem(r.focusedKey), d = [
        ...u.current.getKeys()
      ].map((m) => {
        const h = u.current.getItem(m);
        return h.type === "item" ? h : null;
      }).filter((m) => m !== null), c = [
        ...l.getKeys()
      ].map((m) => {
        const h = l.getItem(m);
        return h.type === "item" ? h : null;
      }).filter((m) => m !== null), f = d.length - c.length;
      let p = Math.min(f > 1 ? Math.max(s.index - f + 1, 0) : s.index, c.length - 1), b;
      for (; p >= 0; ) {
        if (!o.isDisabled(c[p].key)) {
          b = c[p];
          break;
        }
        p < c.length - 1 ? p++ : (p > s.index && (p = s.index), p--);
      }
      r.setFocusedKey(b ? b.key : null);
    }
    u.current = l;
  }, [
    l,
    o,
    r,
    r.focusedKey
  ]), {
    collection: l,
    disabledKeys: n,
    selectionManager: o
  };
}
function ru(e) {
  var t;
  let [r, n] = We(e.selectedKey, (t = e.defaultSelectedKey) !== null && t !== void 0 ? t : null, e.onSelectionChange), a = z(() => r != null ? [
    r
  ] : [], [
    r
  ]), { collection: i, disabledKeys: l, selectionManager: o } = Ki({
    ...e,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: a,
    onSelectionChange: (s) => {
      var d;
      let c = (d = s.values().next().value) !== null && d !== void 0 ? d : null;
      c === r && e.onSelectionChange && e.onSelectionChange(c), n(c);
    }
  }), u = r != null ? i.getItem(r) : null;
  return {
    collection: i,
    disabledKeys: l,
    selectionManager: o,
    selectedKey: r,
    setSelectedKey: n,
    selectedItem: u
  };
}
function Vr(e) {
  let [t, r] = We(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const n = re(() => {
    r(!0);
  }, [
    r
  ]), a = re(() => {
    r(!1);
  }, [
    r
  ]), i = re(() => {
    r(!t);
  }, [
    r,
    t
  ]);
  return {
    isOpen: t,
    setOpen: r,
    open: n,
    close: a,
    toggle: i
  };
}
function Cx(e) {
  var t, r;
  let { defaultFilter: n, menuTrigger: a = "input", allowsEmptyCollection: i = !1, allowsCustomValue: l, shouldCloseOnBlur: o = !0 } = e, [u, s] = Y(!1), [d, c] = Y(!1), [f, p] = Y(null), b = (ue) => {
    e.onSelectionChange && e.onSelectionChange(ue), ue === $ && (ae(), L());
  };
  var m;
  let { collection: h, selectionManager: y, selectedKey: $, setSelectedKey: x, selectedItem: C, disabledKeys: w } = ru({
    ...e,
    onSelectionChange: b,
    items: (m = e.items) !== null && m !== void 0 ? m : e.defaultItems
  });
  var A, M;
  let [v, I] = We(e.inputValue, (M = (A = e.defaultInputValue) !== null && A !== void 0 ? A : (t = h.getItem($)) === null || t === void 0 ? void 0 : t.textValue) !== null && M !== void 0 ? M : "", e.onInputChange), T = h, E = z(() => (
    // No default filter if items are controlled.
    e.items != null || !n ? h : Ex(h, v, n)
  ), [
    h,
    v,
    n,
    e.items
  ]), [B, S] = Y(E), F = N("focus"), R = Vr({
    ...e,
    onOpenChange: (ue) => {
      e.onOpenChange && e.onOpenChange(ue, ue ? F.current : void 0), y.setFocused(ue), ue || y.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), D = (ue = null, De) => {
    let Ie = De === "manual" || De === "focus" && a === "focus";
    (i || E.size > 0 || Ie && T.size > 0 || e.items) && (Ie && !R.isOpen && e.items === void 0 && s(!0), F.current = De, p(ue), R.open());
  }, H = (ue = null, De) => {
    let Ie = De === "manual" || De === "focus" && a === "focus";
    !(i || E.size > 0 || Ie && T.size > 0 || e.items) && !R.isOpen || (Ie && !R.isOpen && e.items === void 0 && s(!0), R.isOpen || (F.current = De), O(ue));
  }, U = re(() => {
    S(u ? T : E);
  }, [
    u,
    T,
    E
  ]), O = re((ue = null) => {
    R.isOpen && U(), p(ue), R.toggle();
  }, [
    R,
    U
  ]), L = re(() => {
    R.isOpen && (U(), R.close());
  }, [
    R,
    U
  ]), [K, q] = Y(v), ae = () => {
    var ue, De;
    let Ie = (De = (ue = h.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && De !== void 0 ? De : "";
    q(Ie), I(Ie);
  };
  var de, Ee;
  let j = N((Ee = (de = e.selectedKey) !== null && de !== void 0 ? de : e.defaultSelectedKey) !== null && Ee !== void 0 ? Ee : null);
  var ee;
  let ce = N((ee = (r = h.getItem($)) === null || r === void 0 ? void 0 : r.textValue) !== null && ee !== void 0 ? ee : "");
  te(() => {
    var ue;
    d && (E.size > 0 || i) && !R.isOpen && v !== K && a !== "manual" && D(null, "input"), !u && !i && R.isOpen && E.size === 0 && L(), $ != null && $ !== j.current && L(), v !== K && (y.setFocusedKey(null), s(!1), v === "" && (e.inputValue === void 0 || e.selectedKey === void 0) && x(null)), $ !== j.current && (e.inputValue === void 0 || e.selectedKey === void 0) ? ae() : K !== v && q(v);
    var De;
    let Ie = (De = (ue = h.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && De !== void 0 ? De : "";
    !d && $ != null && e.inputValue === void 0 && $ === j.current && ce.current !== Ie && (q(Ie), I(Ie)), j.current = $, ce.current = Ie;
  });
  let $e = At({
    ...e,
    value: z(() => ({
      inputValue: v,
      selectedKey: $
    }), [
      v,
      $
    ])
  }), oe = () => {
    l && $ == null ? et() : lr();
  }, et = () => {
    j.current = null, x(null), L();
  }, lr = () => {
    if (e.selectedKey !== void 0 && e.inputValue !== void 0) {
      var ue;
      e.onSelectionChange($);
      var De;
      let Ie = (De = (ue = h.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && De !== void 0 ? De : "";
      q(Ie), L();
    } else
      ae(), L();
  };
  const Dr = () => {
    if (l) {
      var ue, De;
      const Ie = (De = (ue = h.getItem($)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && De !== void 0 ? De : "";
      v === Ie ? lr() : et();
    } else
      lr();
  };
  let jt = () => {
    R.isOpen && y.focusedKey != null ? $ === y.focusedKey ? lr() : x(y.focusedKey) : Dr();
  }, Mt = N(v), jr = (ue) => {
    ue ? (Mt.current = v, a === "focus" && D(null, "focus")) : (o && Dr(), v !== Mt.current && $e.commitValidation()), c(ue);
  }, _r = z(() => R.isOpen ? u ? T : E : B, [
    R.isOpen,
    T,
    E,
    u,
    B
  ]);
  return {
    ...$e,
    ...R,
    focusStrategy: f,
    toggle: H,
    open: D,
    close: Dr,
    selectionManager: y,
    selectedKey: $,
    setSelectedKey: x,
    disabledKeys: w,
    isFocused: d,
    setFocused: jr,
    selectedItem: C,
    collection: _r,
    inputValue: v,
    setInputValue: I,
    commit: jt,
    revert: oe
  };
}
function Ex(e, t, r) {
  return new ao(rh(e, e, t, r));
}
function rh(e, t, r, n) {
  let a = [];
  for (let i of t)
    if (i.type === "section" && i.hasChildNodes) {
      let l = rh(e, Re(i, e), r, n);
      [
        ...l
      ].some((o) => o.type === "item") && a.push({
        ...i,
        childNodes: l
      });
    } else
      i.type === "item" && n(i.textValue, r) ? a.push({
        ...i
      }) : i.type !== "item" && a.push({
        ...i
      });
  return a;
}
var nh = {};
nh = {
  rangeOverflow: (e) => `يجب أن تكون القيمة ${e.maxValue} أو قبل ذلك.`,
  rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
  rangeUnderflow: (e) => `يجب أن تكون القيمة ${e.minValue} أو بعد ذلك.`,
  unavailableDate: "البيانات المحددة غير متاحة."
};
var ah = {};
ah = {
  rangeOverflow: (e) => `Стойността трябва да е ${e.maxValue} или по-ранна.`,
  rangeReversed: "Началната дата трябва да е преди крайната.",
  rangeUnderflow: (e) => `Стойността трябва да е ${e.minValue} или по-късно.`,
  unavailableDate: "Избраната дата не е налична."
};
var ih = {};
ih = {
  rangeOverflow: (e) => `Hodnota musí být ${e.maxValue} nebo dřívější.`,
  rangeReversed: "Datum zahájení musí předcházet datu ukončení.",
  rangeUnderflow: (e) => `Hodnota musí být ${e.minValue} nebo pozdější.`,
  unavailableDate: "Vybrané datum není k dispozici."
};
var lh = {};
lh = {
  rangeOverflow: (e) => `Værdien skal være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen skal være før slutdatoen.",
  rangeUnderflow: (e) => `Værdien skal være ${e.minValue} eller nyere.`,
  unavailableDate: "Den valgte dato er ikke tilgængelig."
};
var oh = {};
oh = {
  rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder früher sein.`,
  rangeReversed: "Das Anfangsdatum muss vor dem Enddatum liegen.",
  rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder später sein.`,
  unavailableDate: "Das ausgewählte Datum ist nicht verfügbar."
};
var uh = {};
uh = {
  rangeOverflow: (e) => `Η τιμή πρέπει να είναι ${e.maxValue} ή παλαιότερη.`,
  rangeReversed: "Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
  rangeUnderflow: (e) => `Η τιμή πρέπει να είναι ${e.minValue} ή μεταγενέστερη.`,
  unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη."
};
var sh = {};
sh = {
  rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
  rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
  rangeReversed: "Start date must be before end date.",
  unavailableDate: "Selected date unavailable."
};
var dh = {};
dh = {
  rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
  rangeReversed: "La fecha de inicio debe ser anterior a la fecha de finalización.",
  rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
  unavailableDate: "Fecha seleccionada no disponible."
};
var ch = {};
ch = {
  rangeOverflow: (e) => `Väärtus peab olema ${e.maxValue} või varasem.`,
  rangeReversed: "Alguskuupäev peab olema enne lõppkuupäeva.",
  rangeUnderflow: (e) => `Väärtus peab olema ${e.minValue} või hilisem.`,
  unavailableDate: "Valitud kuupäev pole saadaval."
};
var fh = {};
fh = {
  rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sitä aikaisempi.`,
  rangeReversed: "Aloituspäivän on oltava ennen lopetuspäivää.",
  rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sitä myöhäisempi.`,
  unavailableDate: "Valittu päivämäärä ei ole käytettävissä."
};
var ph = {};
ph = {
  rangeOverflow: (e) => `La valeur doit être ${e.maxValue} ou antérieure.`,
  rangeReversed: "La date de début doit être antérieure à la date de fin.",
  rangeUnderflow: (e) => `La valeur doit être ${e.minValue} ou ultérieure.`,
  unavailableDate: "La date sélectionnée n’est pas disponible."
};
var bh = {};
bh = {
  rangeOverflow: (e) => `הערך חייב להיות ${e.maxValue} או מוקדם יותר.`,
  rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
  rangeUnderflow: (e) => `הערך חייב להיות ${e.minValue} או מאוחר יותר.`,
  unavailableDate: "התאריך הנבחר אינו זמין."
};
var mh = {};
mh = {
  rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
  rangeReversed: "Datum početka mora biti prije datuma završetka.",
  rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
  unavailableDate: "Odabrani datum nije dostupan."
};
var hh = {};
hh = {
  rangeOverflow: (e) => `Az értéknek ${e.maxValue} vagy korábbinak kell lennie.`,
  rangeReversed: "A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",
  rangeUnderflow: (e) => `Az értéknek ${e.minValue} vagy későbbinek kell lennie.`,
  unavailableDate: "A kiválasztott dátum nem érhető el."
};
var vh = {};
vh = {
  rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
  rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
  rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
  unavailableDate: "Data selezionata non disponibile."
};
var gh = {};
gh = {
  rangeOverflow: (e) => `値は ${e.maxValue} 以下にする必要があります。`,
  rangeReversed: "開始日は終了日より前にする必要があります。",
  rangeUnderflow: (e) => `値は ${e.minValue} 以上にする必要があります。`,
  unavailableDate: "選択した日付は使用できません。"
};
var $h = {};
$h = {
  rangeOverflow: (e) => `값은 ${e.maxValue} 이전이어야 합니다.`,
  rangeReversed: "시작일은 종료일 이전이어야 합니다.",
  rangeUnderflow: (e) => `값은 ${e.minValue} 이상이어야 합니다.`,
  unavailableDate: "선택한 날짜를 사용할 수 없습니다."
};
var yh = {};
yh = {
  rangeOverflow: (e) => `Reikšmė turi būti ${e.maxValue} arba ankstesnė.`,
  rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
  rangeUnderflow: (e) => `Reikšmė turi būti ${e.minValue} arba naujesnė.`,
  unavailableDate: "Pasirinkta data nepasiekiama."
};
var xh = {};
xh = {
  rangeOverflow: (e) => `Vērtībai ir jābūt ${e.maxValue} vai agrākai.`,
  rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
  rangeUnderflow: (e) => `Vērtībai ir jābūt ${e.minValue} vai vēlākai.`,
  unavailableDate: "Atlasītais datums nav pieejams."
};
var Dh = {};
Dh = {
  rangeOverflow: (e) => `Verdien må være ${e.maxValue} eller tidligere.`,
  rangeReversed: "Startdatoen må være før sluttdatoen.",
  rangeUnderflow: (e) => `Verdien må være ${e.minValue} eller senere.`,
  unavailableDate: "Valgt dato utilgjengelig."
};
var Ch = {};
Ch = {
  rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
  rangeReversed: "De startdatum moet voor de einddatum liggen.",
  rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
  unavailableDate: "Geselecteerde datum niet beschikbaar."
};
var Eh = {};
Eh = {
  rangeOverflow: (e) => `Wartość musi mieć wartość ${e.maxValue} lub wcześniejszą.`,
  rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
  rangeUnderflow: (e) => `Wartość musi mieć wartość ${e.minValue} lub późniejszą.`,
  unavailableDate: "Wybrana data jest niedostępna."
};
var Ph = {};
Ph = {
  rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data inicial deve ser anterior à data final.",
  rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var wh = {};
wh = {
  rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
  rangeReversed: "A data de início deve ser anterior à data de fim.",
  rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
  unavailableDate: "Data selecionada indisponível."
};
var Sh = {};
Sh = {
  rangeOverflow: (e) => `Valoarea trebuie să fie ${e.maxValue} sau anterioară.`,
  rangeReversed: "Data de început trebuie să fie anterioară datei de sfârșit.",
  rangeUnderflow: (e) => `Valoarea trebuie să fie ${e.minValue} sau ulterioară.`,
  unavailableDate: "Data selectată nu este disponibilă."
};
var Bh = {};
Bh = {
  rangeOverflow: (e) => `Значение должно быть не позже ${e.maxValue}.`,
  rangeReversed: "Дата начала должна предшествовать дате окончания.",
  rangeUnderflow: (e) => `Значение должно быть не раньше ${e.minValue}.`,
  unavailableDate: "Выбранная дата недоступна."
};
var kh = {};
kh = {
  rangeOverflow: (e) => `Hodnota musí byť ${e.maxValue} alebo skoršia.`,
  rangeReversed: "Dátum začiatku musí byť skorší ako dátum konca.",
  rangeUnderflow: (e) => `Hodnota musí byť ${e.minValue} alebo neskoršia.`,
  unavailableDate: "Vybratý dátum je nedostupný."
};
var Fh = {};
Fh = {
  rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starejša.`,
  rangeReversed: "Začetni datum mora biti pred končnim datumom.",
  rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novejša.`,
  unavailableDate: "Izbrani datum ni na voljo."
};
var Ah = {};
Ah = {
  rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
  rangeReversed: "Datum početka mora biti pre datuma završetka.",
  rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
  unavailableDate: "Izabrani datum nije dostupan."
};
var Th = {};
Th = {
  rangeOverflow: (e) => `Värdet måste vara ${e.maxValue} eller tidigare.`,
  rangeReversed: "Startdatumet måste vara före slutdatumet.",
  rangeUnderflow: (e) => `Värdet måste vara ${e.minValue} eller senare.`,
  unavailableDate: "Det valda datumet är inte tillgängligt."
};
var Rh = {};
Rh = {
  rangeOverflow: (e) => `Değer, ${e.maxValue} veya öncesi olmalıdır.`,
  rangeReversed: "Başlangıç tarihi bitiş tarihinden önce olmalıdır.",
  rangeUnderflow: (e) => `Değer, ${e.minValue} veya sonrası olmalıdır.`,
  unavailableDate: "Seçilen tarih kullanılamıyor."
};
var Mh = {};
Mh = {
  rangeOverflow: (e) => `Значення має бути не пізніше ${e.maxValue}.`,
  rangeReversed: "Дата початку має передувати даті завершення.",
  rangeUnderflow: (e) => `Значення має бути не раніше ${e.minValue}.`,
  unavailableDate: "Вибрана дата недоступна."
};
var Ih = {};
Ih = {
  rangeOverflow: (e) => `值必须是 ${e.maxValue} 或更早日期。`,
  rangeReversed: "开始日期必须早于结束日期。",
  rangeUnderflow: (e) => `值必须是 ${e.minValue} 或更晚日期。`,
  unavailableDate: "所选日期不可用。"
};
var Nh = {};
Nh = {
  rangeOverflow: (e) => `值必須是 ${e.maxValue} 或更早。`,
  rangeReversed: "開始日期必須在結束日期之前。",
  rangeUnderflow: (e) => `值必須是 ${e.minValue} 或更晚。`,
  unavailableDate: "所選日期無法使用。"
};
function Px(e) {
  return e && e.__esModule ? e.default : e;
}
var Kh = {};
Kh = {
  "ar-AE": nh,
  "bg-BG": ah,
  "cs-CZ": ih,
  "da-DK": lh,
  "de-DE": oh,
  "el-GR": uh,
  "en-US": sh,
  "es-ES": dh,
  "et-EE": ch,
  "fi-FI": fh,
  "fr-FR": ph,
  "he-IL": bh,
  "hr-HR": mh,
  "hu-HU": hh,
  "it-IT": vh,
  "ja-JP": gh,
  "ko-KR": $h,
  "lt-LT": yh,
  "lv-LV": xh,
  "nb-NO": Dh,
  "nl-NL": Ch,
  "pl-PL": Eh,
  "pt-BR": Ph,
  "pt-PT": wh,
  "ro-RO": Sh,
  "ru-RU": Bh,
  "sk-SK": kh,
  "sl-SI": Fh,
  "sr-SP": Ah,
  "sv-SE": Th,
  "tr-TR": Rh,
  "uk-UA": Mh,
  "zh-CN": Ih,
  "zh-TW": Nh
};
const zh = new Kr(/* @__PURE__ */ Px(Kh));
function Vh() {
  return typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
}
function hi(e, t, r, n, a) {
  let i = e != null && r != null && e.compare(r) > 0, l = e != null && t != null && e.compare(t) < 0, o = e != null && (n == null ? void 0 : n(e)) || !1, u = i || l || o, s = [];
  if (u) {
    let d = Vh(), c = Kr.getGlobalDictionaryForPackage("@react-stately/datepicker") || zh, f = new Rd(d, c), p = new Xt(d, cn({}, a)), b = p.resolvedOptions().timeZone;
    l && s.push(f.format("rangeUnderflow", {
      minValue: p.format(t.toDate(b))
    })), i && s.push(f.format("rangeOverflow", {
      maxValue: p.format(r.toDate(b))
    })), o && s.push(f.format("unavailableDate"));
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
function wx(e, t, r, n, a) {
  let i = hi(e == null ? void 0 : e.start, t, r, n, a), l = hi(e == null ? void 0 : e.end, t, r, n, a), o = Hn(i, l);
  return e.end != null && e.start != null && e.end.compare(e.start) < 0 && (o = Hn(o, {
    isInvalid: !0,
    validationErrors: [
      zh.getStringForLocale("rangeReversed", Vh())
    ],
    validationDetails: {
      ...ki,
      rangeUnderflow: !0,
      rangeOverflow: !0,
      valid: !1
    }
  })), o;
}
const Sx = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}, Bx = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
function cn(e, t) {
  e = {
    ...t.shouldForceLeadingZeros ? Bx : Sx,
    ...e
  };
  let n = t.granularity || "minute", a = Object.keys(e);
  var i;
  let l = a.indexOf((i = t.maxGranularity) !== null && i !== void 0 ? i : "year");
  l < 0 && (l = 0);
  let o = a.indexOf(n);
  if (o < 0 && (o = 2), l > o)
    throw new Error("maxGranularity must be greater than granularity");
  let u = a.slice(l, o + 1).reduce((d, c) => (d[c] = e[c], d), {});
  return t.hourCycle != null && (u.hour12 = t.hourCycle === 12), u.timeZone = t.timeZone || "UTC", (n === "hour" || n === "minute" || n === "second") && t.timeZone && !t.hideTimeZone && (u.timeZoneName = "short"), t.showEra && l === 0 && (u.era = "short"), u;
}
function an(e) {
  return e && "hour" in e ? e : new oa();
}
function Lh(e, t) {
  if (e === null)
    return null;
  if (e)
    return Ae(e, t);
}
function En(e, t, r, n) {
  if (e)
    return Lh(e, r);
  let a = Ae(Id(n).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), r);
  return t === "year" || t === "month" || t === "day" ? rt(a) : n ? a : kt(a);
}
function nu(e, t) {
  let r = e && "timeZone" in e ? e.timeZone : void 0, n = e && "minute" in e ? "minute" : "day";
  if (e && t && !(t in e))
    throw new Error("Invalid granularity " + t + " for value " + e.toString());
  let [a, i] = Y([
    n,
    r
  ]);
  e && (a[0] !== n || a[1] !== r) && i([
    n,
    r
  ]), t || (t = e ? n : a[0]);
  let l = e ? r : a[1];
  return [
    t,
    l
  ];
}
function kx(e) {
  let t = Vr(e), [r, n] = We(e.value, e.defaultValue || null, e.onChange), a = r || e.placeholderValue, [i, l] = nu(a, e.granularity), o = r != null ? r.toDate(l ?? "UTC") : null, u = i === "hour" || i === "minute" || i === "second";
  var s;
  let d = (s = e.shouldCloseOnSelect) !== null && s !== void 0 ? s : !0, [c, f] = Y(null), [p, b] = Y(null);
  if (r && (c = r, "hour" in r && (p = r)), a && !(i in a))
    throw new Error("Invalid granularity " + i + " for value " + a.toString());
  let m = (r == null ? void 0 : r.calendar.identifier) === "gregory" && r.era === "BC", h = z(() => ({
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
  ]), { minValue: y, maxValue: $, isDateUnavailable: x } = e, C = z(() => hi(r, y, $, x, h), [
    r,
    y,
    $,
    x,
    h
  ]), w = At({
    ...e,
    value: r,
    builtinValidation: C
  }), A = w.displayValidation.isInvalid, M = e.validationState || (A ? "invalid" : null), v = (E, B) => {
    n("timeZone" in B ? B.set(rt(E)) : kt(E, B)), f(null), b(null), w.commitValidation();
  };
  return {
    ...w,
    value: r,
    setValue: n,
    dateValue: c,
    timeValue: p,
    setDateValue: (E) => {
      let B = typeof d == "function" ? d() : d;
      u ? p || B ? v(E, p || an(e.placeholderValue)) : f(E) : (n(E), w.commitValidation()), B && t.setOpen(!1);
    },
    setTimeValue: (E) => {
      c && E ? v(c, E) : b(E);
    },
    granularity: i,
    hasTime: u,
    ...t,
    setOpen(E) {
      !E && !r && c && u && v(c, p || an(e.placeholderValue)), t.setOpen(E);
    },
    validationState: M,
    isInvalid: A,
    formatValue(E, B) {
      if (!o)
        return "";
      let S = cn(B, h);
      return new Xt(E, S).format(o);
    }
  };
}
const Fx = new Kr({
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
function Ax(e, t, r) {
  return e === "era" || e === "dayPeriod" ? t : e === "year" || e === "month" || e === "day" ? Fx.getStringForLocale(e, r) : "––";
}
const Va = {
  year: !0,
  month: !0,
  day: !0,
  hour: !0,
  minute: !0,
  second: !0,
  dayPeriod: !0,
  era: !0
}, Hs = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15
}, Tx = {
  dayperiod: "dayPeriod"
};
function au(e) {
  let { locale: t, createCalendar: r, hideTimeZone: n, isDisabled: a, isReadOnly: i, isRequired: l, minValue: o, maxValue: u, isDateUnavailable: s } = e, d = e.value || e.defaultValue || e.placeholderValue, [c, f] = nu(d, e.granularity), p = f || "UTC";
  if (d && !(c in d))
    throw new Error("Invalid granularity " + c + " for value " + d.toString());
  let b = z(() => new Xt(t), [
    t
  ]), m = z(() => r(b.resolvedOptions().calendar), [
    r,
    b
  ]), [h, y] = We(e.value, e.defaultValue, e.onChange), $ = z(() => Lh(h, m), [
    h,
    m
  ]), [x, C] = Y(() => En(e.placeholderValue, c, m, f)), w = $ || x, A = m.identifier === "gregory" && w.era === "BC", M = z(() => {
    var j;
    return {
      granularity: c,
      maxGranularity: (j = e.maxGranularity) !== null && j !== void 0 ? j : "year",
      timeZone: f,
      hideTimeZone: n,
      hourCycle: e.hourCycle,
      showEra: A,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros
    };
  }, [
    e.maxGranularity,
    c,
    e.hourCycle,
    e.shouldForceLeadingZeros,
    f,
    n,
    A
  ]), v = z(() => cn({}, M), [
    M
  ]), I = z(() => new Xt(t, v), [
    t,
    v
  ]), T = z(() => I.resolvedOptions(), [
    I
  ]), E = z(() => I.formatToParts(/* @__PURE__ */ new Date()).filter((j) => Va[j.type]).reduce((j, ee) => (j[ee.type] = !0, j), {}), [
    I
  ]), [B, S] = Y(() => e.value || e.defaultValue ? {
    ...E
  } : {}), F = N(), V = N(m.identifier);
  te(() => {
    m.identifier !== V.current && (V.current = m.identifier, C((j) => Object.keys(B).length > 0 ? Ae(j, m) : En(e.placeholderValue, c, m, f)));
  }, [
    m,
    c,
    B,
    f,
    e.placeholderValue
  ]), h && Object.keys(B).length < Object.keys(E).length && (B = {
    ...E
  }, S(B)), h == null && Object.keys(B).length === Object.keys(E).length && (B = {}, S(B), C(En(e.placeholderValue, c, m, f)));
  let R = $ && Object.keys(B).length >= Object.keys(E).length ? $ : x, D = (j) => {
    if (e.isDisabled || e.isReadOnly)
      return;
    let ee = Object.keys(B), ce = Object.keys(E);
    j == null ? (y(null), C(En(e.placeholderValue, c, m, f)), S({})) : ee.length >= ce.length || ee.length === ce.length - 1 && E.dayPeriod && !B.dayPeriod && F.current !== "dayPeriod" ? (j = Ae(j, (d == null ? void 0 : d.calendar) || new nt()), y(j)) : C(j), F.current = null;
  }, H = z(() => R.toDate(p), [
    R,
    p
  ]), U = z(() => I.formatToParts(H).map((j) => {
    let ee = Va[j.type];
    j.type === "era" && m.getEras().length === 1 && (ee = !1);
    let ce = Va[j.type] && !B[j.type], $e = Va[j.type] ? Ax(j.type, j.value, t) : null;
    return {
      type: Tx[j.type] || j.type,
      text: ce ? $e : j.value,
      ...Rx(R, j.type, T),
      isPlaceholder: ce,
      placeholder: $e,
      isEditable: ee
    };
  }), [
    H,
    B,
    I,
    T,
    R,
    m,
    t
  ]);
  E.era && B.year && !B.era ? (B.era = !0, S({
    ...B
  })) : !E.era && B.era && (delete B.era, S({
    ...B
  }));
  let O = (j) => {
    B[j] = !0, j === "year" && E.era && (B.era = !0), S({
      ...B
    });
  }, L = (j, ee) => {
    if (B[j])
      D(Mx(R, j, ee, T));
    else {
      O(j);
      let ce = Object.keys(B), $e = Object.keys(E);
      (ce.length >= $e.length || ce.length === $e.length - 1 && E.dayPeriod && !B.dayPeriod) && D(R);
    }
  }, K = z(() => hi(h, o, u, s, M), [
    h,
    o,
    u,
    s,
    M
  ]), q = At({
    ...e,
    value: h,
    builtinValidation: K
  }), ae = q.displayValidation.isInvalid, de = e.validationState || (ae ? "invalid" : null);
  var Ee;
  return {
    ...q,
    value: $,
    dateValue: H,
    calendar: m,
    setValue: D,
    segments: U,
    dateFormatter: I,
    validationState: de,
    isInvalid: ae,
    granularity: c,
    maxGranularity: (Ee = e.maxGranularity) !== null && Ee !== void 0 ? Ee : "year",
    isDisabled: a,
    isReadOnly: i,
    isRequired: l,
    increment(j) {
      L(j, 1);
    },
    decrement(j) {
      L(j, -1);
    },
    incrementPage(j) {
      L(j, Hs[j] || 1);
    },
    decrementPage(j) {
      L(j, -(Hs[j] || 1));
    },
    setSegment(j, ee) {
      O(j), D(Ix(R, j, ee, T));
    },
    confirmPlaceholder() {
      if (e.isDisabled || e.isReadOnly)
        return;
      let j = Object.keys(B), ee = Object.keys(E);
      j.length === ee.length - 1 && E.dayPeriod && !B.dayPeriod && (B = {
        ...E
      }, S(B), D(R.copy()));
    },
    clearSegment(j) {
      delete B[j], F.current = j, S({
        ...B
      });
      let ee = En(e.placeholderValue, c, m, f), ce = R;
      if (j === "dayPeriod" && "hour" in R && "hour" in ee) {
        let $e = R.hour >= 12, oe = ee.hour >= 12;
        $e && !oe ? ce = R.set({
          hour: R.hour - 12
        }) : !$e && oe && (ce = R.set({
          hour: R.hour + 12
        }));
      } else
        j in R && (ce = R.set({
          [j]: ee[j]
        }));
      y(null), D(ce);
    },
    formatValue(j) {
      if (!$)
        return "";
      let ee = cn(j, M);
      return new Xt(t, ee).format(H);
    }
  };
}
function Rx(e, t, r) {
  switch (t) {
    case "era": {
      let n = e.calendar.getEras();
      return {
        value: n.indexOf(e.era),
        minValue: 0,
        maxValue: n.length - 1
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
        minValue: yy(e),
        maxValue: e.calendar.getMonthsInYear(e)
      };
    case "day":
      return {
        value: e.day,
        minValue: xy(e),
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
        if (r.hour12) {
          let n = e.hour >= 12;
          return {
            value: e.hour,
            minValue: n ? 12 : 0,
            maxValue: n ? 23 : 11
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
function Mx(e, t, r, n) {
  switch (t) {
    case "era":
    case "year":
    case "month":
    case "day":
      return e.cycle(t, r, {
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
        return e.cycle(t, r, {
          round: t !== "hour",
          hourCycle: n.hour12 ? 12 : 24
        });
    }
}
function Ix(e, t, r, n) {
  switch (t) {
    case "day":
    case "month":
    case "year":
    case "era":
      return e.set({
        [t]: r
      });
  }
  if ("hour" in e)
    switch (t) {
      case "dayPeriod": {
        let a = e.hour, i = a >= 12;
        return r >= 12 === i ? e : e.set({
          hour: i ? a - 12 : a + 12
        });
      }
      case "hour":
        if (n.hour12) {
          let i = e.hour >= 12;
          !i && r === 12 && (r = 0), i && r < 12 && (r += 12);
        }
      case "minute":
      case "second":
        return e.set({
          [t]: r
        });
    }
}
function Nx(e) {
  var t, r;
  let n = Vr(e), [a, i] = We(e.value, e.defaultValue || null, e.onChange), [l, o] = Y(() => a || {
    start: null,
    end: null
  });
  a == null && l.start && l.end && (l = {
    start: null,
    end: null
  }, o(l));
  let u = a || l, s = (R) => {
    o(R || {
      start: null,
      end: null
    }), R != null && R.start && R.end ? i(R) : i(null);
  }, d = (u == null ? void 0 : u.start) || (u == null ? void 0 : u.end) || e.placeholderValue, [c, f] = nu(d, e.granularity), p = c === "hour" || c === "minute" || c === "second";
  var b;
  let m = (b = e.shouldCloseOnSelect) !== null && b !== void 0 ? b : !0, [h, y] = Y(null), [$, x] = Y(null);
  u && u.start && u.end && (h = u, "hour" in u.start && ($ = u));
  let C = (R, D) => {
    s({
      start: "timeZone" in D.start ? D.start.set(rt(R.start)) : kt(R.start, D.start),
      end: "timeZone" in D.end ? D.end.set(rt(R.end)) : kt(R.end, D.end)
    }), y(null), x(null), S.commitValidation();
  }, w = (R) => {
    let D = typeof m == "function" ? m() : m;
    p ? D || R.start && R.end && ($ != null && $.start) && ($ != null && $.end) ? C(R, {
      start: ($ == null ? void 0 : $.start) || an(e.placeholderValue),
      end: ($ == null ? void 0 : $.end) || an(e.placeholderValue)
    }) : y(R) : R.start && R.end ? (s(R), S.commitValidation()) : y(R), D && n.setOpen(!1);
  }, A = (R) => {
    h != null && h.start && (h != null && h.end) && R.start && R.end ? C(h, R) : x(R);
  }, M = (u == null || (t = u.start) === null || t === void 0 ? void 0 : t.calendar.identifier) === "gregory" && u.start.era === "BC" || (u == null || (r = u.end) === null || r === void 0 ? void 0 : r.calendar.identifier) === "gregory" && u.end.era === "BC", v = z(() => ({
    granularity: c,
    timeZone: f,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    showEra: M
  }), [
    c,
    e.hourCycle,
    e.shouldForceLeadingZeros,
    f,
    e.hideTimeZone,
    M
  ]), { minValue: I, maxValue: T, isDateUnavailable: E } = e, B = z(() => wx(u, I, T, E, v), [
    u,
    I,
    T,
    E,
    v
  ]), S = At({
    ...e,
    value: a,
    name: z(() => [
      e.startName,
      e.endName
    ], [
      e.startName,
      e.endName
    ]),
    builtinValidation: B
  }), F = S.displayValidation.isInvalid, V = e.validationState || (F ? "invalid" : null);
  return {
    ...S,
    value: u,
    setValue: s,
    dateRange: h,
    timeRange: $,
    granularity: c,
    hasTime: p,
    setDate(R, D) {
      w({
        ...h,
        [R]: D
      });
    },
    setTime(R, D) {
      A({
        ...$,
        [R]: D
      });
    },
    setDateTime(R, D) {
      s({
        ...u,
        [R]: D
      });
    },
    setDateRange: w,
    setTimeRange: A,
    ...n,
    setOpen(R) {
      !R && !(u != null && u.start && (u != null && u.end)) && (h != null && h.start) && (h != null && h.end) && p && C(h, {
        start: ($ == null ? void 0 : $.start) || an(e.placeholderValue),
        end: ($ == null ? void 0 : $.end) || an(e.placeholderValue)
      }), n.setOpen(R);
    },
    validationState: V,
    isInvalid: F,
    formatValue(R, D) {
      if (!u || !u.start || !u.end)
        return null;
      let H = "timeZone" in u.start ? u.start.timeZone : void 0, U = e.granularity || (u.start && "minute" in u.start ? "minute" : "day"), O = "timeZone" in u.end ? u.end.timeZone : void 0, L = e.granularity || (u.end && "minute" in u.end ? "minute" : "day"), K = cn(D, {
        granularity: U,
        timeZone: H,
        hideTimeZone: e.hideTimeZone,
        hourCycle: e.hourCycle,
        showEra: u.start.calendar.identifier === "gregory" && u.start.era === "BC" || u.end.calendar.identifier === "gregory" && u.end.era === "BC"
      }), q = u.start.toDate(H || "UTC"), ae = u.end.toDate(O || "UTC"), de = new Xt(R, K), Ee;
      if (H === O && U === L && u.start.compare(u.end) !== 0) {
        try {
          let j = de.formatRangeToParts(q, ae), ee = -1;
          for (let oe = 0; oe < j.length; oe++) {
            let et = j[oe];
            if (et.source === "shared" && et.type === "literal")
              ee = oe;
            else if (et.source === "endRange")
              break;
          }
          let ce = "", $e = "";
          for (let oe = 0; oe < j.length; oe++)
            oe < ee ? ce += j[oe].value : oe > ee && ($e += j[oe].value);
          return {
            start: ce,
            end: $e
          };
        } catch {
        }
        Ee = de;
      } else {
        let j = cn(D, {
          granularity: L,
          timeZone: O,
          hideTimeZone: e.hideTimeZone,
          hourCycle: e.hourCycle
        });
        Ee = new Xt(R, j);
      }
      return {
        start: de.format(q),
        end: Ee.format(ae)
      };
    }
  };
}
function Kx(e) {
  let { placeholderValue: t = new oa(), minValue: r, maxValue: n, granularity: a, validate: i } = e, [l, o] = We(e.value, e.defaultValue, e.onChange), u = l || t, s = u && "day" in u ? u : void 0, d = e.defaultValue && "timeZone" in e.defaultValue ? e.defaultValue.timeZone : void 0, c = z(() => {
    let $ = u && "timeZone" in u ? u.timeZone : void 0;
    return ($ || d) && t ? Od(Pn(t), $ || d) : Pn(t);
  }, [
    t,
    u,
    d
  ]), f = z(() => Pn(r, s), [
    r,
    s
  ]), p = z(() => Pn(n, s), [
    n,
    s
  ]), b = z(() => l && "day" in l ? ts(l) : l, [
    l
  ]), m = z(() => l == null ? null : Pn(l), [
    l
  ]);
  return {
    ...au({
      ...e,
      value: m,
      defaultValue: void 0,
      minValue: f,
      maxValue: p,
      onChange: ($) => {
        o(s || d ? $ : $ && ts($));
      },
      granularity: a || "minute",
      maxGranularity: "hour",
      placeholderValue: c,
      // Calendar should not matter for time fields.
      createCalendar: () => new nt(),
      validate: re(() => i == null ? void 0 : i(l), [
        i,
        l
      ])
    }),
    timeValue: b
  };
}
function Pn(e, t = Pi(Fo())) {
  return e ? "day" in e ? e : kt(t, e) : null;
}
function zx(e, t) {
  let { triggerKey: r } = e, { UNSTABLE_expandedKeysStack: n, UNSTABLE_openSubmenu: a, UNSTABLE_closeSubmenu: i, close: l } = t, [o] = Y(n == null ? void 0 : n.length), u = z(() => n[o] === r, [
    n,
    r,
    o
  ]), [s, d] = Y(null), c = re((b = null) => {
    d(b), a(r, o);
  }, [
    a,
    o,
    r
  ]), f = re(() => {
    d(null), i(r, o);
  }, [
    i,
    o,
    r
  ]), p = re((b = null) => {
    d(b), u ? f() : c(b);
  }, [
    f,
    c,
    u
  ]);
  return z(() => ({
    focusStrategy: s,
    isOpen: u,
    open: c,
    close: f,
    closeAll: l,
    submenuLevel: o,
    // TODO: Placeholders that aren't used but give us parity with OverlayTriggerState so we can use this in Popover. Refactor if we update Popover via
    // https://github.com/adobe/react-spectrum/pull/4976#discussion_r1336472863
    setOpen: () => {
    },
    toggle: p
  }), [
    u,
    c,
    f,
    l,
    s,
    p,
    o
  ]);
}
function Vx(e) {
  let { minValue: t, maxValue: r, step: n, formatOptions: a, value: i, defaultValue: l = NaN, onChange: o, locale: u, isDisabled: s, isReadOnly: d } = e;
  i === null && (i = NaN), i !== void 0 && !isNaN(i) && (n !== void 0 && !isNaN(n) ? i = lt(i, t, r, n) : i = $t(i, t, r)), isNaN(l) || (n !== void 0 && !isNaN(n) ? l = lt(l, t, r, n) : l = $t(l, t, r));
  let [c, f] = We(i, isNaN(l) ? NaN : l, o), [p, b] = Y(() => isNaN(c) ? "" : new ci(u, a).format(c)), m = z(() => new Oo(u, a), [
    u,
    a
  ]), h = z(() => m.getNumberingSystem(p), [
    m,
    p
  ]), y = z(() => new ci(u, {
    ...a,
    numberingSystem: h
  }), [
    u,
    a,
    h
  ]), $ = z(() => y.resolvedOptions(), [
    y
  ]), x = re((K) => isNaN(K) || K === null ? "" : y.format(K), [
    y
  ]), C = At({
    ...e,
    value: c
  }), w = n !== void 0 && !isNaN(n) ? n : 1;
  $.style === "percent" && (n === void 0 || isNaN(n)) && (w = 0.01);
  let [A, M] = Y(c), [v, I] = Y(u), [T, E] = Y(a);
  (!Object.is(c, A) || u !== v || a !== T) && (b(x(c)), M(c), I(u), E(a));
  let B = z(() => m.parse(p), [
    m,
    p
  ]), S = () => {
    if (!p.length) {
      f(NaN), b(i === void 0 ? "" : x(c));
      return;
    }
    if (isNaN(B)) {
      b(x(c));
      return;
    }
    let K;
    n === void 0 || isNaN(n) ? K = $t(B, t, r) : K = lt(B, t, r, n), K = m.parse(x(K)), f(K), b(x(i === void 0 ? K : c));
  }, F = (K, q = 0) => {
    let ae = B;
    if (isNaN(ae)) {
      let de = isNaN(q) ? 0 : q;
      return lt(de, t, r, w);
    } else {
      let de = lt(ae, t, r, w);
      return K === "+" && de > ae || K === "-" && de < ae ? de : lt(El(K, ae, w), t, r, w);
    }
  }, V = () => {
    let K = F("+", t);
    K === c && b(x(K)), f(K), C.commitValidation();
  }, R = () => {
    let K = F("-", r);
    K === c && b(x(K)), f(K), C.commitValidation();
  }, D = () => {
    r != null && (f(lt(r, t, r, w)), C.commitValidation());
  }, H = () => {
    t != null && (f(t), C.commitValidation());
  }, U = z(() => !s && !d && (isNaN(B) || r === void 0 || isNaN(r) || lt(B, t, r, w) > B || El("+", B, w) <= r), [
    s,
    d,
    t,
    r,
    w,
    B
  ]), O = z(() => !s && !d && (isNaN(B) || t === void 0 || isNaN(t) || lt(B, t, r, w) < B || El("-", B, w) >= t), [
    s,
    d,
    t,
    r,
    w,
    B
  ]);
  return {
    ...C,
    validate: (K) => m.isValidPartialNumber(K, t, r),
    increment: V,
    incrementToMax: D,
    decrement: R,
    decrementToMin: H,
    canIncrement: U,
    canDecrement: O,
    minValue: t,
    maxValue: r,
    numberValue: B,
    setNumberValue: f,
    setInputValue: b,
    inputValue: p,
    commit: S
  };
}
function El(e, t, r) {
  let n = e === "+" ? t + r : t - r;
  if (t % 1 !== 0 || r % 1 !== 0) {
    const a = t.toString().split("."), i = r.toString().split("."), l = a[1] && a[1].length || 0, o = i[1] && i[1].length || 0, u = Math.pow(10, Math.max(l, o));
    t = Math.round(t * u), r = Math.round(r * u), n = e === "+" ? t + r : t - r, n /= u;
  }
  return n;
}
let Lx = Math.round(Math.random() * 1e10), Ox = 0;
function jx(e) {
  let t = z(() => e.name || `radio-group-${Lx}-${++Ox}`, [
    e.name
  ]);
  var r;
  let [n, a] = We(e.value, (r = e.defaultValue) !== null && r !== void 0 ? r : null, e.onChange), [i, l] = Y(null), o = At({
    ...e,
    value: n
  }), u = (d) => {
    !e.isReadOnly && !e.isDisabled && (a(d), o.commitValidation());
  }, s = o.displayValidation.isInvalid;
  return {
    ...o,
    name: t,
    selectedValue: n,
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
function _x(e) {
  let [t, r] = We(Us(e.value), Us(e.defaultValue) || "", e.onChange);
  return {
    value: t,
    setValue: r
  };
}
function Us(e) {
  if (e != null)
    return e.toString();
}
function Hx(e) {
  let t = Vr(e), [r, n] = Y(null), a = ru({
    ...e,
    onSelectionChange: (u) => {
      e.onSelectionChange != null && e.onSelectionChange(u), t.close(), i.commitValidation();
    }
  }), i = At({
    ...e,
    value: a.selectedKey
  }), [l, o] = Y(!1);
  return {
    ...i,
    ...a,
    ...t,
    focusStrategy: r,
    open(u = null) {
      a.collection.size !== 0 && (n(u), t.open());
    },
    toggle(u = null) {
      a.collection.size !== 0 && (n(u), t.toggle());
    },
    isFocused: l,
    setFocused: o
  };
}
const Ux = 0, Wx = 100, Gx = 1;
function Zx(e) {
  const { isDisabled: t = !1, minValue: r = Ux, maxValue: n = Wx, numberFormatter: a, step: i = Gx, orientation: l = "horizontal" } = e;
  let o = z(() => {
    let L = (n - r) / 10;
    return L = lt(L, 0, L + i, i), Math.max(L, i);
  }, [
    i,
    n,
    r
  ]), u = re((L) => L == null ? void 0 : L.map((K, q) => {
    let ae = q === 0 ? r : K[q - 1], de = q === L.length - 1 ? n : K[q + 1];
    return lt(K, ae, de, i);
  }), [
    r,
    n,
    i
  ]), s = z(() => u(Gs(e.value)), [
    e.value
  ]), d = z(() => {
    var L;
    return u((L = Gs(e.defaultValue)) !== null && L !== void 0 ? L : [
      r
    ]);
  }, [
    e.defaultValue,
    r
  ]), c = Zs(e.value, e.defaultValue, e.onChange), f = Zs(e.value, e.defaultValue, e.onChangeEnd);
  const [p, b] = We(s, d, c), [m, h] = Y(new Array(p.length).fill(!1)), y = N(new Array(p.length).fill(!0)), [$, x] = Y(void 0), C = N(p), w = N(m);
  let A = (L) => {
    C.current = L, b(L);
  }, M = (L) => {
    w.current = L, h(L);
  };
  function v(L) {
    return (L - r) / (n - r);
  }
  function I(L) {
    return L === 0 ? r : p[L - 1];
  }
  function T(L) {
    return L === p.length - 1 ? n : p[L + 1];
  }
  function E(L) {
    return y.current[L];
  }
  function B(L, K) {
    y.current[L] = K;
  }
  function S(L, K) {
    if (t || !E(L))
      return;
    const q = I(L), ae = T(L);
    K = lt(K, q, ae, i);
    let de = Ws(C.current, L, K);
    A(de);
  }
  function F(L, K) {
    if (t || !E(L))
      return;
    K && (C.current = p);
    const q = w.current[L];
    w.current = Ws(w.current, L, K), M(w.current), f && q && !w.current.some(Boolean) && f(C.current);
  }
  function V(L) {
    return a.format(L);
  }
  function R(L, K) {
    S(L, H(K));
  }
  function D(L) {
    return Math.round((L - r) / i) * i + r;
  }
  function H(L) {
    const K = L * (n - r) + r;
    return $t(D(K), r, n);
  }
  function U(L, K = 1) {
    let q = Math.max(K, i);
    S(L, lt(p[L] + q, r, n, i));
  }
  function O(L, K = 1) {
    let q = Math.max(K, i);
    S(L, lt(p[L] - q, r, n, i));
  }
  return {
    values: p,
    getThumbValue: (L) => p[L],
    setThumbValue: S,
    setThumbPercent: R,
    isThumbDragging: (L) => m[L],
    setThumbDragging: F,
    focusedThumb: $,
    setFocusedThumb: x,
    getThumbPercent: (L) => v(p[L]),
    getValuePercent: v,
    getThumbValueLabel: (L) => V(p[L]),
    getFormattedValue: V,
    getThumbMinValue: I,
    getThumbMaxValue: T,
    getPercentValue: H,
    isThumbEditable: E,
    setThumbEditable: B,
    incrementThumb: U,
    decrementThumb: O,
    step: i,
    pageSize: o,
    orientation: l,
    isDisabled: t
  };
}
function Ws(e, t, r) {
  return e[t] === r ? e : [
    ...e.slice(0, t),
    r,
    ...e.slice(t + 1)
  ];
}
function Gs(e) {
  if (e != null)
    return Array.isArray(e) ? e : [
      e
    ];
}
function Zs(e, t, r) {
  return (n) => {
    typeof e == "number" || typeof t == "number" ? r == null || r(n[0]) : r == null || r(n);
  };
}
function qx(e) {
  let { collection: t, focusMode: r } = e, n = eu(e), a = z(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), i = n.setFocusedKey;
  n.setFocusedKey = (u, s) => {
    if (r === "cell" && u != null) {
      let f = t.getItem(u);
      if ((f == null ? void 0 : f.type) === "item") {
        var d, c;
        let p = Re(f, t);
        s === "last" ? u = (d = mr(p)) === null || d === void 0 ? void 0 : d.key : u = (c = Zt(p)) === null || c === void 0 ? void 0 : c.key;
      }
    }
    i(u, s);
  };
  let l = z(() => new tu(t, n), [
    t,
    n
  ]);
  const o = N(null);
  return te(() => {
    if (n.focusedKey != null && !t.getItem(n.focusedKey)) {
      const u = o.current.getItem(n.focusedKey), s = u.parentKey != null && (u.type === "cell" || u.type === "rowheader" || u.type === "column") ? o.current.getItem(u.parentKey) : u, d = o.current.rows, c = t.rows, f = d.length - c.length;
      let p = Math.min(f > 1 ? Math.max(s.index - f + 1, 0) : s.index, c.length - 1), b;
      for (; p >= 0; ) {
        if (!l.isDisabled(c[p].key) && c[p].type !== "headerrow") {
          b = c[p];
          break;
        }
        p < c.length - 1 ? p++ : (p > s.index && (p = s.index), p--);
      }
      if (b) {
        const m = b.hasChildNodes ? [
          ...Re(b, t)
        ] : [], h = b.hasChildNodes && s !== u && u.index < m.length ? m[u.index].key : b.key;
        n.setFocusedKey(h);
      } else
        n.setFocusedKey(null);
    }
    o.current = t;
  }, [
    t,
    l,
    n,
    n.focusedKey
  ]), {
    collection: t,
    disabledKeys: a,
    isKeyboardNavigationDisabled: !1,
    selectionManager: l
  };
}
class Yx {
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
    let r = this.keyMap.get(t);
    return r ? r.prevKey : null;
  }
  getKeyAfter(t) {
    let r = this.keyMap.get(t);
    return r ? r.nextKey : null;
  }
  getFirstKey() {
    var t;
    return (t = [
      ...this.rows
    ][0]) === null || t === void 0 ? void 0 : t.key;
  }
  getLastKey() {
    var t;
    let r = [
      ...this.rows
    ];
    return (t = r[r.length - 1]) === null || t === void 0 ? void 0 : t.key;
  }
  getItem(t) {
    return this.keyMap.get(t);
  }
  at(t) {
    const r = [
      ...this.getKeys()
    ];
    return this.getItem(r[t]);
  }
  getChildren(t) {
    let r = this.keyMap.get(t);
    return (r == null ? void 0 : r.childNodes) || [];
  }
  constructor(t) {
    this.keyMap = /* @__PURE__ */ new Map(), this.keyMap = /* @__PURE__ */ new Map(), this.columnCount = t == null ? void 0 : t.columnCount, this.rows = [];
    let r = (i) => {
      let l = this.keyMap.get(i.key);
      t.visitNode && (i = t.visitNode(i)), this.keyMap.set(i.key, i);
      let o = /* @__PURE__ */ new Set(), u;
      for (let s of i.childNodes)
        s.type === "cell" && s.parentKey == null && (s.parentKey = i.key), o.add(s.key), u ? (u.nextKey = s.key, s.prevKey = u.key) : s.prevKey = null, r(s), u = s;
      if (u && (u.nextKey = null), l)
        for (let s of l.childNodes)
          o.has(s.key) || n(s);
    }, n = (i) => {
      this.keyMap.delete(i.key);
      for (let l of i.childNodes)
        this.keyMap.get(l.key) === l && n(l);
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
      a ? (a.nextKey = o.key, o.prevKey = a.key) : o.prevKey = null, this.rows.push(o), r(o), a = o;
    }), a && (a.nextKey = null);
  }
}
function io(e) {
  return e != null && (!isNaN(e) || String(e).match(/^(\d+)(?=%$)/) !== null);
}
function lo(e) {
  if (!e)
    return 1;
  let t = e.match(/^(.+)(?=fr$)/);
  return t ? parseFloat(t[0]) : (console.warn(`width: ${e} is not a supported format, width should be a number (ex. 150), percentage (ex. '50%') or fr unit (ex. '2fr')`, "defaulting to '1fr'"), 1);
}
function iu(e, t) {
  if (typeof e == "string") {
    let r = e.match(/^(\d+)(?=%$)/);
    if (!r)
      throw new Error("Only percentages or numbers are supported for static column widths");
    return t * (parseFloat(r[0]) / 100);
  }
  return e;
}
function Oh(e, t) {
  return e != null ? iu(e, t) : Number.MAX_SAFE_INTEGER;
}
function jh(e, t) {
  return e != null ? iu(e, t) : 0;
}
function qs(e, t, r, n, a) {
  let i = !1, l = t.map((o, u) => {
    var s, d, c;
    let f = r.get(o.key) != null ? r.get(o.key) : (c = (d = (s = o.width) !== null && s !== void 0 ? s : o.defaultWidth) !== null && d !== void 0 ? d : n == null ? void 0 : n(u)) !== null && c !== void 0 ? c : "1fr", p = !1, b = 0, m = 0, h = null;
    io(f) ? (b = iu(f, e), p = !0) : (m = lo(f), m <= 0 && (p = !0));
    var y, $;
    let x = jh(($ = (y = o.minWidth) !== null && y !== void 0 ? y : a == null ? void 0 : a(u)) !== null && $ !== void 0 ? $ : 0, e), C = Oh(o.maxWidth, e), w = Math.max(x, Math.min(b, C));
    return p ? h = w : b > w && (p = !0, h = w), p || (i = !0), {
      frozen: p,
      baseSize: b,
      hypotheticalMainSize: w,
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
        let f = c.flex / u;
        c.targetMainSize = c.baseSize + f * s;
      }
    });
    let d = 0;
    l.forEach((c) => {
      if (c.violation = 0, !c.frozen) {
        let { min: f, max: p, targetMainSize: b } = c;
        c.targetMainSize = Math.max(f, Math.min(b, p)), c.violation = c.targetMainSize - b, d += c.violation;
      }
    }), i = !1, l.forEach((c) => {
      d === 0 || Math.sign(d) === Math.sign(c.violation) ? c.frozen = !0 : c.frozen || (i = !0);
    });
  }
  return Jx(l);
}
function Jx(e) {
  let t = 0, r = 0, n = [];
  return e.forEach(function(a) {
    let i = a.targetMainSize, l = Math.round(i + t) - r;
    t += i, r += l, n.push(l);
  }), n;
}
class Xx {
  /** Takes an array of columns and splits it into 2 maps of columns with controlled and columns with uncontrolled widths. */
  splitColumnsIntoControlledAndUncontrolled(t) {
    return t.reduce((r, n) => (n.props.width != null ? r[0].set(n.key, n) : r[1].set(n.key, n), r), [
      /* @__PURE__ */ new Map(),
      /* @__PURE__ */ new Map()
    ]);
  }
  /** Takes uncontrolled and controlled widths and joins them into a single Map. */
  recombineColumns(t, r, n, a) {
    return new Map(t.map((i) => n.has(i.key) ? [
      i.key,
      r.get(i.key)
    ] : [
      i.key,
      a.get(i.key).props.width
    ]));
  }
  /** Used to make an initial Map of the uncontrolled widths based on default widths. */
  getInitialUncontrolledWidths(t) {
    return new Map(Array.from(t).map(([r, n]) => {
      var a, i, l, o;
      return [
        r,
        (o = (l = n.props.defaultWidth) !== null && l !== void 0 ? l : (a = (i = this).getDefaultWidth) === null || a === void 0 ? void 0 : a.call(i, n)) !== null && o !== void 0 ? o : "1fr"
      ];
    }));
  }
  getColumnWidth(t) {
    var r;
    return (r = this.columnWidths.get(t)) !== null && r !== void 0 ? r : 0;
  }
  getColumnMinWidth(t) {
    var r;
    return (r = this.columnMinWidths.get(t)) !== null && r !== void 0 ? r : 0;
  }
  getColumnMaxWidth(t) {
    var r;
    return (r = this.columnMaxWidths.get(t)) !== null && r !== void 0 ? r : 0;
  }
  resizeColumnWidth(t, r, n, a, i = null, l) {
    let o = this.columnWidths, u = 1 / 0, s = new Map([
      ...n,
      ...a
    ]), d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
    r.columns.forEach((m, h) => {
      var y, $;
      let x, C;
      if (f.set(m.key, this.getDefaultMinWidth(r.columns[h])), i !== m.key && !m.props.width && !io(a.get(m.key)) ? (x = m.key, C = lo(a.get(m.key))) : i !== m.key && !io(m.props.width) && !a.get(m.key) ? (x = m.key, C = lo(m.props.width)) : i !== m.key && (!(($ = m.props.width) === null || $ === void 0 || (y = $.endsWith) === null || y === void 0) && y.call($, "%")) && d.set(m.key, m.props.width), u < h) {
        x && c.set(x, C);
        return;
      }
      if (m.key === i) {
        u = h, s.set(m.key, Math.floor(l));
        return;
      }
      s.set(m.key, o.get(m.key));
    });
    let p = qs(t, r.columns.map((m) => ({
      ...m.props,
      key: m.key
    })), s, (m) => this.getDefaultWidth(r.columns[m]), (m) => this.getDefaultMinWidth(r.columns[m])), b = /* @__PURE__ */ new Map();
    return p.forEach((m, h) => {
      let y = r.columns[h].key;
      b.set(y, m);
    }), Array.from(c).forEach(([m]) => {
      b.set(m, `${c.get(m)}fr`);
    }), Array.from(d).forEach(([m, h]) => {
      m !== i && b.set(m, h);
    }), b;
  }
  buildColumnWidths(t, r, n) {
    return this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map(), qs(t, r.columns.map((i) => ({
      ...i.props,
      key: i.key
    })), n, (i) => this.getDefaultWidth(r.columns[i]), (i) => this.getDefaultMinWidth(r.columns[i])).forEach((i, l) => {
      let o = r.columns[l].key, u = r.columns[l];
      this.columnWidths.set(o, i);
      var s;
      this.columnMinWidths.set(o, jh((s = u.props.minWidth) !== null && s !== void 0 ? s : this.getDefaultMinWidth(u), t)), this.columnMaxWidths.set(o, Oh(u.props.maxWidth, t));
    }), this.columnWidths;
  }
  constructor(t) {
    this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map();
    var r;
    this.getDefaultWidth = (r = t == null ? void 0 : t.getDefaultWidth) !== null && r !== void 0 ? r : () => "1fr";
    var n;
    this.getDefaultMinWidth = (n = t == null ? void 0 : t.getDefaultMinWidth) !== null && n !== void 0 ? n : () => 75;
  }
}
function Qx(e, t) {
  let { getDefaultWidth: r, getDefaultMinWidth: n, tableWidth: a = 0 } = e, [i, l] = Y(null), o = z(() => new Xx({
    getDefaultWidth: r,
    getDefaultMinWidth: n
  }), [
    r,
    n
  ]), [u, s] = z(() => o.splitColumnsIntoControlledAndUncontrolled(t.collection.columns), [
    t.collection.columns,
    o
  ]), [d, c] = Y(() => o.getInitialUncontrolledWidths(s)), [f, p] = Y(t.collection.columns);
  if (t.collection.columns !== f) {
    if (t.collection.columns.length !== f.length || t.collection.columns.some(($, x) => $.key !== f[x].key)) {
      let $ = o.getInitialUncontrolledWidths(s);
      c($);
    }
    p(t.collection.columns);
  }
  let b = z(() => o.recombineColumns(t.collection.columns, d, s, u), [
    t.collection.columns,
    d,
    s,
    u,
    o
  ]), m = re(($) => {
    l($);
  }, [
    l
  ]), h = re(($, x) => {
    let C = new Map(Array.from(u).map(([M, v]) => [
      M,
      v.props.width
    ])), w = o.resizeColumnWidth(a, t.collection, C, d, $, x), A = new Map(Array.from(s).map(([M]) => [
      M,
      w.get(M)
    ]));
    return A.set($, x), c(A), w;
  }, [
    u,
    s,
    c,
    a,
    o,
    t.collection,
    d
  ]), y = re(() => {
    l(null);
  }, [
    l
  ]);
  return z(() => o.buildColumnWidths(a, t.collection, b), [
    a,
    t.collection,
    b,
    o
  ]), z(() => ({
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
const _h = "row-header-column-" + Math.random().toString(36).slice(2);
let oo = "row-header-column-" + Math.random().toString(36).slice(2);
for (; _h === oo; )
  oo = "row-header-column-" + Math.random().toString(36).slice(2);
function Hh(e, t) {
  if (t.length === 0)
    return [];
  let r = [], n = /* @__PURE__ */ new Map();
  for (let u of t) {
    let s = u.parentKey, d = [
      u
    ];
    for (; s; ) {
      let c = e.get(s);
      if (!c)
        break;
      if (n.has(c)) {
        c.colspan++;
        let { column: f, index: p } = n.get(c);
        if (p > d.length)
          break;
        for (let b = p; b < d.length; b++)
          f.splice(b, 0, null);
        for (let b = d.length; b < f.length; b++)
          f[b] && n.has(f[b]) && (n.get(f[b]).index = b);
      } else
        c.colspan = 1, d.push(c), n.set(c, {
          column: d,
          index: d.length - 1
        });
      s = c.parentKey;
    }
    r.push(d), u.index = r.length - 1;
  }
  let a = Math.max(...r.map((u) => u.length)), i = Array(a).fill(0).map(() => []), l = 0;
  for (let u of r) {
    let s = a - 1;
    for (let d of u) {
      if (d) {
        let c = i[s], f = c.reduce((p, b) => p + b.colspan, 0);
        if (f < l) {
          let p = {
            type: "placeholder",
            key: "placeholder-" + d.key,
            colspan: l - f,
            index: f,
            value: null,
            rendered: null,
            level: s,
            hasChildNodes: !1,
            childNodes: [],
            textValue: null
          };
          c.length > 0 && (c[c.length - 1].nextKey = p.key, p.prevKey = c[c.length - 1].key), c.push(p);
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
class e6 extends Yx {
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
    let r = this.keyMap.get(t);
    return r ? r.prevKey : null;
  }
  getKeyAfter(t) {
    let r = this.keyMap.get(t);
    return r ? r.nextKey : null;
  }
  getFirstKey() {
    var t;
    return (t = Zt(this.body.childNodes)) === null || t === void 0 ? void 0 : t.key;
  }
  getLastKey() {
    var t;
    return (t = mr(this.body.childNodes)) === null || t === void 0 ? void 0 : t.key;
  }
  getItem(t) {
    return this.keyMap.get(t);
  }
  at(t) {
    const r = [
      ...this.getKeys()
    ];
    return this.getItem(r[t]);
  }
  getTextValue(t) {
    let r = this.getItem(t);
    if (!r)
      return "";
    if (r.textValue)
      return r.textValue;
    let n = this.rowHeaderColumnKeys;
    if (n) {
      let a = [];
      for (let i of r.childNodes) {
        let l = this.columns[i.index];
        if (n.has(l.key) && i.textValue && a.push(i.textValue), a.length === n.size)
          break;
      }
      return a.join(" ");
    }
    return "";
  }
  constructor(t, r, n) {
    let a = /* @__PURE__ */ new Set(), i, l = [];
    if (n != null && n.showSelectionCheckboxes) {
      let c = {
        type: "column",
        key: _h,
        value: null,
        textValue: "",
        level: 0,
        index: n != null && n.showDragButtons ? 1 : 0,
        hasChildNodes: !1,
        rendered: null,
        childNodes: [],
        props: {
          isSelectionCell: !0
        }
      };
      l.unshift(c);
    }
    if (n != null && n.showDragButtons) {
      let c = {
        type: "column",
        key: oo,
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
      for (let f of c.childNodes)
        s(f);
    };
    for (let c of t)
      s(c);
    let d = Hh(u, l);
    d.forEach((c, f) => o.splice(f, 0, c)), super({
      columnCount: l.length,
      items: o,
      visitNode: (c) => (c.column = l[c.index], c)
    }), this._size = 0, this.columns = l, this.rowHeaderColumnKeys = a, this.body = i, this.headerRows = d, this._size = [
      ...i.childNodes
    ].length, this.rowHeaderColumnKeys.size === 0 && this.rowHeaderColumnKeys.add(this.columns.find((c) => {
      var f, p;
      return !(!((f = c.props) === null || f === void 0) && f.isDragButtonCell) && !(!((p = c.props) === null || p === void 0) && p.isSelectionCell);
    }).key);
  }
}
const t6 = {
  ascending: "descending",
  descending: "ascending"
};
function r6(e) {
  let [t, r] = Y(!1), { selectionMode: n = "none", showSelectionCheckboxes: a, showDragButtons: i } = e, l = z(() => ({
    showSelectionCheckboxes: a && n !== "none",
    showDragButtons: i,
    selectionMode: n,
    columns: []
  }), [
    e.children,
    a,
    n,
    i
  ]), o = Uo(e, re((d) => new e6(d, null, l), [
    l
  ]), l), { disabledKeys: u, selectionManager: s } = qx({
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
    setKeyboardNavigationDisabled: r,
    sort(d, c) {
      var f;
      e.onSortChange({
        column: d,
        direction: c ?? (((f = e.sortDescriptor) === null || f === void 0 ? void 0 : f.column) === d ? t6[e.sortDescriptor.direction] : "ascending")
      });
    }
  };
}
function n6(e) {
  var t;
  let r = ru({
    ...e,
    suppressTextValueWarning: !0,
    defaultSelectedKey: (t = e.defaultSelectedKey) !== null && t !== void 0 ? t : Ys(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set())
  }), { selectionManager: n, collection: a, selectedKey: i } = r, l = N(i);
  return te(() => {
    let o = i;
    (n.isEmpty || !a.getItem(o)) && (o = Ys(a, r.disabledKeys), o != null && n.setSelectedKeys([
      o
    ])), (o != null && n.focusedKey == null || !n.isFocused && o !== l.current) && n.setFocusedKey(o), l.current = o;
  }), {
    ...r,
    isDisabled: e.isDisabled || !1
  };
}
function Ys(e, t) {
  let r = null;
  if (e) {
    for (r = e.getFirstKey(); t.has(r) && r !== e.getLastKey(); )
      r = e.getKeyAfter(r);
    t.has(r) && r === e.getLastKey() && (r = e.getFirstKey());
  }
  return r;
}
const a6 = 1500, Js = 500;
let Cr = {}, i6 = 0, wn = !1, Wt = null, Er = null;
function l6(e = {}) {
  let { delay: t = a6, closeDelay: r = Js } = e, { isOpen: n, open: a, close: i } = Vr(e), l = z(() => `${++i6}`, []), o = N(), u = () => {
    Cr[l] = c;
  }, s = () => {
    for (let p in Cr)
      p !== l && (Cr[p](!0), delete Cr[p]);
  }, d = () => {
    clearTimeout(o.current), o.current = null, s(), u(), wn = !0, a(), Wt && (clearTimeout(Wt), Wt = null), Er && (clearTimeout(Er), Er = null);
  }, c = (p) => {
    p || r <= 0 ? (clearTimeout(o.current), o.current = null, i()) : o.current || (o.current = setTimeout(() => {
      o.current = null, i();
    }, r)), Wt && (clearTimeout(Wt), Wt = null), wn && (Er && clearTimeout(Er), Er = setTimeout(() => {
      delete Cr[l], Er = null, wn = !1;
    }, Math.max(Js, r)));
  }, f = () => {
    s(), u(), !n && !Wt && !wn ? Wt = setTimeout(() => {
      Wt = null, wn = !0, d();
    }, t) : n || d();
  };
  return te(() => () => {
    clearTimeout(o.current), Cr[l] && delete Cr[l];
  }, [
    l
  ]), {
    isOpen: n,
    open: (p) => {
      !p && t > 0 && !o.current ? f() : d();
    },
    close: c
  };
}
class o6 {
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
    let r = this.keyMap.get(t);
    return r ? r.prevKey : null;
  }
  getKeyAfter(t) {
    let r = this.keyMap.get(t);
    return r ? r.nextKey : null;
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
    const r = [
      ...this.getKeys()
    ];
    return this.getItem(r[t]);
  }
  constructor(t, { expandedKeys: r } = {}) {
    this.keyMap = /* @__PURE__ */ new Map(), this.iterable = t, r = r || /* @__PURE__ */ new Set();
    let n = (l) => {
      if (this.keyMap.set(l.key, l), l.childNodes && (l.type === "section" || r.has(l.key)))
        for (let o of l.childNodes)
          n(o);
    };
    for (let l of t)
      n(l);
    let a, i = 0;
    for (let [l, o] of this.keyMap)
      a ? (a.nextKey = l, o.prevKey = a.key) : (this.firstKey = l, o.prevKey = void 0), o.type === "item" && (o.index = i++), a = o, a.nextKey = void 0;
    this.lastKey = a == null ? void 0 : a.key;
  }
}
function u6(e) {
  let [t, r] = We(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e.onExpandedChange), n = eu(e), a = z(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), i = Uo(e, re((o) => new o6(o, {
    expandedKeys: t
  }), [
    t
  ]), null);
  return te(() => {
    n.focusedKey != null && !i.getItem(n.focusedKey) && n.setFocusedKey(null);
  }, [
    i,
    n.focusedKey
  ]), {
    collection: i,
    expandedKeys: t,
    disabledKeys: a,
    toggleKey: (o) => {
      r(s6(t, o));
    },
    setExpandedKeys: r,
    selectionManager: new tu(i, n)
  };
}
function s6(e, t) {
  let r = new Set(e);
  return r.has(t) ? r.delete(t) : r.add(t), r;
}
var uo = { exports: {} }, Pl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs;
function d6() {
  if (Xs)
    return Pl;
  Xs = 1;
  var e = g;
  function t(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, a = e.useEffect, i = e.useLayoutEffect, l = e.useDebugValue;
  function o(c, f) {
    var p = f(), b = n({ inst: { value: p, getSnapshot: f } }), m = b[0].inst, h = b[1];
    return i(function() {
      m.value = p, m.getSnapshot = f, u(m) && h({ inst: m });
    }, [c, p, f]), a(function() {
      return u(m) && h({ inst: m }), c(function() {
        u(m) && h({ inst: m });
      });
    }, [c]), l(p), p;
  }
  function u(c) {
    var f = c.getSnapshot;
    c = c.value;
    try {
      var p = f();
      return !r(c, p);
    } catch {
      return !0;
    }
  }
  function s(c, f) {
    return f();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : o;
  return Pl.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Pl;
}
var wl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs;
function c6() {
  return Qs || (Qs = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = g, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(x) {
      {
        for (var C = arguments.length, w = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
          w[A - 1] = arguments[A];
        n("error", x, w);
      }
    }
    function n(x, C, w) {
      {
        var A = t.ReactDebugCurrentFrame, M = A.getStackAddendum();
        M !== "" && (C += "%s", w = w.concat([M]));
        var v = w.map(function(I) {
          return String(I);
        });
        v.unshift("Warning: " + C), Function.prototype.apply.call(console[x], console, v);
      }
    }
    function a(x, C) {
      return x === C && (x !== 0 || 1 / x === 1 / C) || x !== x && C !== C;
    }
    var i = typeof Object.is == "function" ? Object.is : a, l = e.useState, o = e.useEffect, u = e.useLayoutEffect, s = e.useDebugValue, d = !1, c = !1;
    function f(x, C, w) {
      d || e.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var A = C();
      if (!c) {
        var M = C();
        i(A, M) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var v = l({
        inst: {
          value: A,
          getSnapshot: C
        }
      }), I = v[0].inst, T = v[1];
      return u(function() {
        I.value = A, I.getSnapshot = C, p(I) && T({
          inst: I
        });
      }, [x, A, C]), o(function() {
        p(I) && T({
          inst: I
        });
        var E = function() {
          p(I) && T({
            inst: I
          });
        };
        return x(E);
      }, [x]), s(A), A;
    }
    function p(x) {
      var C = x.getSnapshot, w = x.value;
      try {
        var A = C();
        return !i(w, A);
      } catch {
        return !0;
      }
    }
    function b(x, C, w) {
      return C();
    }
    var m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", h = !m, y = h ? b : f, $ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    wl.useSyncExternalStore = $, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), wl;
}
process.env.NODE_ENV === "production" ? uo.exports = d6() : uo.exports = c6();
var f6 = uo.exports;
function p6(e, t, r, n) {
  Object.defineProperty(e, t, { get: r, set: n, enumerable: !0, configurable: !0 });
}
var b6 = {};
p6(b6, "useToolbar", () => Uh);
function Uh(e, t) {
  const { "aria-label": r, "aria-labelledby": n, orientation: a = "horizontal" } = e;
  let [i, l] = Y(!1);
  ge(() => {
    var b;
    l(!!(t.current && (!((b = t.current.parentElement) === null || b === void 0) && b.closest('[role="toolbar"]'))));
  });
  const { direction: o } = be(), u = o === "rtl" && a === "horizontal";
  let s = ia(t);
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
  }, c = N(null), f = (b) => {
    !b.currentTarget.contains(b.relatedTarget) && !c.current && (c.current = b.target);
  }, p = (b) => {
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
      "aria-label": r,
      "aria-labelledby": r == null ? n : void 0,
      onKeyDownCapture: i ? void 0 : d,
      onFocusCapture: i ? void 0 : p,
      onBlurCapture: i ? void 0 : f
    }
  };
}
function Wh(e) {
  return e && e.__esModule ? e.default : e;
}
class Wn {
  get childNodes() {
    throw new Error("childNodes is not supported");
  }
  clone() {
    let t = new Wn(this.type, this.key);
    return t.value = this.value, t.level = this.level, t.hasChildNodes = this.hasChildNodes, t.rendered = this.rendered, t.textValue = this.textValue, t["aria-label"] = this["aria-label"], t.index = this.index, t.parentKey = this.parentKey, t.prevKey = this.prevKey, t.nextKey = this.nextKey, t.firstChildKey = this.firstChildKey, t.lastChildKey = this.lastChildKey, t.props = this.props, t;
  }
  constructor(t, r) {
    this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.type = t, this.key = r;
  }
}
class Gh {
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
  insertBefore(t, r) {
    if (r == null)
      return this.appendChild(t);
    this.ownerDocument.startTransaction(), t.parentNode && t.parentNode.removeChild(t), t.nextSibling = r, t.previousSibling = r.previousSibling, t.index = r.index, this.firstChild === r ? this.firstChild = t : r.previousSibling && (r.previousSibling.nextSibling = t), r.previousSibling = t, t.parentNode = r.parentNode;
    let n = r;
    for (; n; )
      n.index++, n = n.nextSibling;
    t.hasSetProps && this.ownerDocument.addNode(t), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
  }
  removeChild(t) {
    if (t.parentNode !== this)
      return;
    this.ownerDocument.startTransaction();
    let r = t.nextSibling;
    for (; r; )
      r.index--, r = r.nextSibling;
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
class Gn extends Gh {
  get index() {
    return this._index;
  }
  set index(t) {
    this._index = t, this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof Gn ? this.parentNode.level + (this.node.type === "item" ? 1 : 0) : 0;
  }
  updateNode() {
    var t, r, n, a;
    let i = this.ownerDocument.getMutableNode(this);
    i.index = this.index, i.level = this.level, i.parentKey = this.parentNode instanceof Gn ? this.parentNode.node.key : null;
    var l;
    i.prevKey = (l = (t = this.previousSibling) === null || t === void 0 ? void 0 : t.node.key) !== null && l !== void 0 ? l : null;
    var o;
    i.nextKey = (o = (r = this.nextSibling) === null || r === void 0 ? void 0 : r.node.key) !== null && o !== void 0 ? o : null, i.hasChildNodes = !!this.firstChild;
    var u;
    i.firstChildKey = (u = (n = this.firstChild) === null || n === void 0 ? void 0 : n.node.key) !== null && u !== void 0 ? u : null;
    var s;
    i.lastChildKey = (s = (a = this.lastChild) === null || a === void 0 ? void 0 : a.node.key) !== null && s !== void 0 ? s : null;
  }
  setProps(t, r, n) {
    let a = this.ownerDocument.getMutableNode(this), { value: i, textValue: l, id: o, ...u } = t;
    if (u.ref = r, a.props = u, a.rendered = n, a.value = i, a.textValue = l || (typeof n == "string" ? n : "") || t["aria-label"] || "", o != null && o !== a.key) {
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
  constructor(t, r) {
    super(r), this.nodeType = 8, this._index = 0, this.hasSetProps = !1, this.node = new Wn(t, `react-aria-${++r.nodeId}`), this.ownerDocument.startTransaction();
  }
}
class Zh {
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
    let r = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let n = r.get(t), a = (n == null ? void 0 : n.firstChildKey) != null ? r.get(n.firstChildKey) : null;
        for (; a; )
          yield a, a = a.nextKey != null ? r.get(a.nextKey) : void 0;
      }
    };
  }
  getKeyBefore(t) {
    let r = this.keyMap.get(t);
    if (!r)
      return null;
    if (r.prevKey != null) {
      for (r = this.keyMap.get(r.prevKey); r && r.type !== "item" && r.lastChildKey != null; )
        r = this.keyMap.get(r.lastChildKey);
      var n;
      return (n = r == null ? void 0 : r.key) !== null && n !== void 0 ? n : null;
    }
    return r.parentKey;
  }
  getKeyAfter(t) {
    let r = this.keyMap.get(t);
    if (!r)
      return null;
    if (r.type !== "item" && r.firstChildKey != null)
      return r.firstChildKey;
    for (; r; ) {
      if (r.nextKey != null)
        return r.nextKey;
      if (r.parentKey != null)
        r = this.keyMap.get(r.parentKey);
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
    var r;
    return (r = t == null ? void 0 : t.key) !== null && r !== void 0 ? r : null;
  }
  getItem(t) {
    var r;
    return (r = this.keyMap.get(t)) !== null && r !== void 0 ? r : null;
  }
  at() {
    throw new Error("Not implemented");
  }
  clone() {
    let t = this.constructor, r = new t();
    return r.keyMap = new Map(this.keyMap), r.firstKey = this.firstKey, r.lastKey = this.lastKey, r;
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
  commit(t, r, n = !1) {
    if (this.frozen)
      throw new Error("Cannot commit a frozen collection");
    this.firstKey = t, this.lastKey = r, this.frozen = !n;
  }
  constructor() {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.frozen = !1;
  }
}
class m6 extends Gh {
  get isConnected() {
    return !0;
  }
  createElement(t) {
    return new Gn(t, this);
  }
  /**
  * Lazily gets a mutable instance of a Node. If the node has already
  * been cloned during this update cycle, it just returns the existing one.
  */
  getMutableNode(t) {
    let r = t.node;
    return this.mutatedNodes.has(t) || (r = t.node.clone(), this.mutatedNodes.add(t), t.node = r), this.markDirty(t), r;
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
    let r = this.getMutableCollection();
    if (!r.getItem(t.node.key)) {
      r.addNode(t.node);
      for (let n of t)
        this.addNode(n);
    }
    this.markDirty(t);
  }
  removeNode(t) {
    for (let n of t)
      this.removeNode(n);
    this.getMutableCollection().removeNode(t.node.key), this.markDirty(t);
  }
  /** Finalizes the collection update, updating all nodes and freezing the collection. */
  getCollection() {
    return this.transactionCount > 0 ? this.collection : (this.updateCollection(), this.collection);
  }
  updateCollection() {
    for (let i of this.dirtyNodes)
      i instanceof Gn && i.isConnected && i.updateNode();
    if (this.dirtyNodes.clear(), this.mutatedNodes.size || this.collectionMutated) {
      var t, r;
      let i = this.getMutableCollection();
      for (let l of this.mutatedNodes)
        l.isConnected && i.addNode(l.node);
      var n, a;
      i.commit((n = (t = this.firstChild) === null || t === void 0 ? void 0 : t.node.key) !== null && n !== void 0 ? n : null, (a = (r = this.lastChild) === null || r === void 0 ? void 0 : r.node.key) !== null && a !== void 0 ? a : null, this.isSSR), this.mutatedNodes.clear();
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
function xt(e) {
  let { children: t, items: r, idScope: n, addIdAndValue: a, dependencies: i = [] } = e, l = z(() => /* @__PURE__ */ new WeakMap(), i);
  return z(() => {
    if (r && typeof t == "function") {
      let s = [];
      for (let d of r) {
        let c = l.get(d);
        if (!c) {
          c = t(d);
          var o, u;
          let f = (u = (o = c.props.id) !== null && o !== void 0 ? o : d.key) !== null && u !== void 0 ? u : d.id;
          if (f == null)
            throw new Error("Could not determine key for item");
          n && (f = n + ":" + f), c = /* @__PURE__ */ cd(c, a ? {
            key: f,
            id: f,
            value: d
          } : {
            key: f
          }), l.set(d, c);
        }
        s.push(c);
      }
      return s;
    } else if (typeof t != "function")
      return t;
  }, [
    t,
    r,
    l,
    n,
    a
  ]);
}
function pa(e) {
  return xt({
    ...e,
    addIdAndValue: !0
  });
}
const qh = /* @__PURE__ */ Z(!1);
function ba(e, t) {
  let { collection: r, document: n } = ma(t);
  return {
    portal: lu(e, n),
    collection: r
  };
}
function h6(e, t, r) {
  let n = zt(), a = N(n);
  a.current = n;
  let i = re(() => a.current ? r() : t(), [
    t,
    r
  ]);
  return f6.useSyncExternalStore(e, i);
}
const v6 = typeof g.useSyncExternalStore == "function" ? g.useSyncExternalStore : h6;
function ma(e) {
  let t = z(() => new m6(e || new Zh()), [
    e
  ]), r = re((l) => t.subscribe(l), [
    t
  ]), n = re(() => {
    let l = t.getCollection();
    return t.isSSR && t.resetAfterSSR(), l;
  }, [
    t
  ]), a = re(() => (t.isSSR = !0, t.getCollection()), [
    t
  ]);
  return {
    collection: v6(r, n, a),
    document: t
  };
}
const so = /* @__PURE__ */ Z(null), Lr = /* @__PURE__ */ Z(null);
function lu(e, t) {
  let r = G(Lr), n = t ?? r, a = pa(e), i = z(() => /* @__PURE__ */ g.createElement(qh.Provider, {
    value: !0
  }, a), [
    a
  ]);
  return zt() ? /* @__PURE__ */ g.createElement(so.Provider, {
    value: n
  }, i) : /* @__PURE__ */ _g(i, n);
}
function Yh(e) {
  return /* @__PURE__ */ g.createElement(g.Fragment, null, lu(e));
}
function Jh(e, t, r) {
  let n = G(qh);
  var a;
  return n ? (a = Dt(e, t, r, "children" in t ? t.children : null)) !== null && a !== void 0 ? a : /* @__PURE__ */ g.createElement(g.Fragment, null) : null;
}
function g6(e, t, r) {
  return re((n) => {
    n == null || n.setProps(e, t, r);
  }, [
    e,
    t,
    r
  ]);
}
function Dt(e, t, r, n, a) {
  let i = g6(t, r, n), l = G(so);
  if (l) {
    let o = l.ownerDocument.nodesByProps.get(t);
    return o || (o = l.ownerDocument.createElement(e), o.setProps(t, r, n), l.appendChild(o), l.ownerDocument.updateCollection(), l.ownerDocument.nodesByProps.set(t, o)), a ? /* @__PURE__ */ g.createElement(so.Provider, {
      value: o
    }, a) : null;
  }
  return /* @__PURE__ */ g.createElement(e, {
    ref: i
  }, a);
}
function $6(e, t) {
  let r = pa(e);
  return Dt("section", e, t, null, r);
}
const y6 = /* @__PURE__ */ J($6), Xh = /* @__PURE__ */ Z(null), Qh = /* @__PURE__ */ Z(null);
function ou(e) {
  let t = G(Xh);
  e = _(t, e), e.dependencies = ((t == null ? void 0 : t.dependencies) || []).concat(e.dependencies);
  let r = typeof e.children == "function" ? e.children : null;
  return /* @__PURE__ */ g.createElement(Qh.Provider, {
    value: r
  }, pa(e));
}
const x6 = Symbol("callback"), Zn = Symbol("default");
function he({ values: e, children: t }) {
  for (let [r, n] of e)
    t = /* @__PURE__ */ g.createElement(r.Provider, {
      value: n
    }, t);
  return t;
}
function ne(e) {
  let { className: t, style: r, children: n, defaultClassName: a, defaultChildren: i, values: l } = e;
  return z(() => {
    let o, u, s;
    return typeof t == "function" ? o = t(l) : o = t, typeof r == "function" ? u = r(l) : u = r, typeof n == "function" ? s = n(l) : n == null ? s = i : s = n, {
      className: o ?? a,
      style: u,
      children: s,
      "data-rac": ""
    };
  }, [
    t,
    r,
    n,
    a,
    i,
    l
  ]);
}
function Ze(e, t) {
  return (r) => t(typeof e == "function" ? e(r) : e, r);
}
function ha(e, t) {
  let r = G(e);
  if (t === null)
    return null;
  if (r && typeof r == "object" && "slots" in r && r.slots) {
    let n = new Intl.ListFormat().format(Object.keys(r.slots).map((i) => `"${i}"`));
    if (!t && !r.slots[Zn])
      throw new Error(`A slot prop is required. Valid slot names are ${n}.`);
    let a = t || Zn;
    if (!r.slots[a])
      throw new Error(`Invalid slot "${t}". Valid slot names are ${n}.`);
    return r.slots[a];
  }
  return r;
}
function ie(e, t, r) {
  let n = ha(r, e.slot) || {}, { ref: a, [x6]: i, ...l } = n, o = je(z(() => $i(t, a), [
    t,
    a
  ])), u = _(l, e);
  return "style" in l && l.style && typeof l.style == "object" && "style" in e && e.style && typeof e.style == "object" && (u.style = {
    ...l.style,
    ...e.style
  }), te(() => {
    i && i(e);
  }, [
    i,
    e
  ]), [
    u,
    o
  ];
}
function qe() {
  let [e, t] = Y(!0), r = N(!1), n = re((a) => {
    r.current = !0, t(!!a);
  }, []);
  return ge(() => {
    r.current || t(!1);
  }, []), [
    n,
    e
  ];
}
function zi(e, t = !0) {
  let [r, n] = Y(!0);
  return ev(e, r && t, re(() => n(!1), [])), r && t;
}
function vi(e, t) {
  let [r, n] = Y(!1), [a, i] = Y("idle");
  return !t && e.current && a === "idle" && (r = !0, n(!0), i("exiting")), !e.current && a === "exited" && i("idle"), ev(e, r, re(() => {
    i("exited"), n(!1);
  }, [])), r;
}
function ev(e, t, r) {
  let n = N(null);
  t && e.current && (n.current = window.getComputedStyle(e.current).animation), ge(() => {
    if (t && e.current) {
      let a = window.getComputedStyle(e.current);
      if (a.animationName && a.animationName !== "none" && a.animation !== n.current) {
        let i = (o) => {
          o.target === e.current && (l.removeEventListener("animationend", i), Qn.flushSync(() => {
            r();
          }));
        }, l = e.current;
        return l.addEventListener("animationend", i), () => {
          l.removeEventListener("animationend", i);
        };
      } else
        r();
    }
  }, [
    e,
    t,
    r
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
const qn = /* @__PURE__ */ Z(!1), D6 = typeof DocumentFragment < "u" ? new DocumentFragment() : null;
function uu(e) {
  let t = G(qn), r = zt();
  if (t)
    return /* @__PURE__ */ g.createElement(g.Fragment, null, e.children);
  let n = /* @__PURE__ */ g.createElement(qn.Provider, {
    value: !0
  }, e.children);
  return r ? /* @__PURE__ */ g.createElement("template", {
    "data-react-aria-hidden": !0
  }, n) : /* @__PURE__ */ Qn.createPortal(n, D6);
}
function Vi(e) {
  let t = (r, n) => G(qn) ? null : e(r, n);
  return t.displayName = e.displayName || e.name, g.forwardRef(t);
}
function yt(e) {
  const t = /^(data-.*)$/;
  let r = {};
  for (const n in e)
    t.test(n) || (r[n] = e[n]);
  return r;
}
const tv = /* @__PURE__ */ Z(null);
function C6(e, t) {
  [e, t] = ie(e, t, tv);
  let r = e.href ? "a" : "span", { linkProps: n, isPressed: a } = dy({
    ...e,
    elementType: r
  }, t), { hoverProps: i, isHovered: l } = ke(e), { focusProps: o, isFocused: u, isFocusVisible: s } = xe(), d = ne({
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
  return /* @__PURE__ */ g.createElement(r, {
    ref: t,
    slot: e.slot || void 0,
    ..._(d, n, i, o),
    "data-focused": u || void 0,
    "data-hovered": l || void 0,
    "data-pressed": a || void 0,
    "data-focus-visible": s || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, d.children);
}
const E6 = /* @__PURE__ */ J(C6), P6 = /* @__PURE__ */ Z(null);
function w6(e, t) {
  [e, t] = ie(e, t, P6);
  let { portal: r, collection: n } = ba(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, r, /* @__PURE__ */ g.createElement(S6, {
    props: e,
    collection: n,
    breadcrumbsRef: t
  }));
}
function S6({ props: e, collection: t, breadcrumbsRef: r }) {
  var n;
  return /* @__PURE__ */ g.createElement("ol", {
    ref: r,
    ...X(e, {
      labelable: !0
    }),
    slot: e.slot || void 0,
    style: e.style,
    className: (n = e.className) !== null && n !== void 0 ? n : "react-aria-Breadcrumbs"
  }, [
    ...t
  ].map((a, i) => /* @__PURE__ */ g.createElement(A6, {
    key: a.key,
    node: a,
    isCurrent: i === t.size - 1,
    isDisabled: e.isDisabled,
    onAction: e.onAction
  })));
}
const B6 = /* @__PURE__ */ J(w6);
function k6(e, t) {
  return Dt("item", e, t, e.children);
}
const F6 = /* @__PURE__ */ J(k6);
function A6({ node: e, isCurrent: t, isDisabled: r, onAction: n }) {
  let a = {
    "aria-current": t ? "page" : null,
    isDisabled: r || t,
    onPress: () => n == null ? void 0 : n(e.key)
  };
  var i;
  return /* @__PURE__ */ g.createElement("li", {
    ...X(e.props),
    ref: e.props.ref,
    style: e.props.style,
    className: (i = e.props.className) !== null && i !== void 0 ? i : "react-aria-Breadcrumb"
  }, /* @__PURE__ */ g.createElement(tv.Provider, {
    value: a
  }, e.rendered));
}
const T6 = /* @__PURE__ */ new Set([
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "name",
  "value"
]), Ct = /* @__PURE__ */ Z({});
function R6(e, t) {
  [e, t] = ie(e, t, Ct);
  let r = e, { buttonProps: n, isPressed: a } = dc(e, t), { focusProps: i, isFocused: l, isFocusVisible: o } = xe(e), { hoverProps: u, isHovered: s } = ke(e), d = ne({
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
    ...X(e, {
      propNames: T6
    }),
    ..._(n, i, u),
    ...d,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-pressed": r.isPressed || a || void 0,
    "data-hovered": s || void 0,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0
  });
}
const hn = /* @__PURE__ */ Vi(R6), Li = /* @__PURE__ */ Z({});
function M6(e, t) {
  [e, t] = ie(e, t, Li);
  let { children: r, level: n = 3, className: a, ...i } = e, l = `h${n}`;
  return /* @__PURE__ */ g.createElement(l, {
    ...i,
    ref: t,
    className: a ?? "react-aria-Heading"
  }, r);
}
const rv = /* @__PURE__ */ J(M6), _e = /* @__PURE__ */ Z({});
function I6(e, t) {
  [e, t] = ie(e, t, _e);
  let { elementType: r = "span", ...n } = e;
  return /* @__PURE__ */ g.createElement(r, {
    className: "react-aria-Text",
    ...n,
    ref: t
  });
}
const va = /* @__PURE__ */ J(I6), nv = /* @__PURE__ */ Z({}), av = /* @__PURE__ */ Z({}), Oi = /* @__PURE__ */ Z(null), ji = /* @__PURE__ */ Z(null);
function N6(e, t) {
  [e, t] = ie(e, t, nv);
  let { locale: r } = be(), n = th({
    ...e,
    locale: r,
    createCalendar: Si
  }), { calendarProps: a, prevButtonProps: i, nextButtonProps: l, errorMessageProps: o, title: u } = A1(e, n), s = ne({
    ...e,
    values: {
      state: n,
      isDisabled: e.isDisabled || !1,
      isInvalid: n.isValueInvalid
    },
    defaultClassName: "react-aria-Calendar"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...s,
    ...a,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": n.isValueInvalid || void 0
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Ct,
        {
          slots: {
            previous: i,
            next: l
          }
        }
      ],
      [
        Li,
        {
          "aria-hidden": !0,
          level: 2,
          children: u
        }
      ],
      [
        Oi,
        n
      ],
      [
        _e,
        {
          slots: {
            errorMessage: o
          }
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement(rr, null, /* @__PURE__ */ g.createElement("h2", null, a["aria-label"])), s.children, /* @__PURE__ */ g.createElement(rr, null, /* @__PURE__ */ g.createElement("button", {
    "aria-label": l["aria-label"],
    disabled: l.isDisabled,
    onClick: () => n.focusNextPage(),
    tabIndex: -1
  }))));
}
const K6 = /* @__PURE__ */ J(N6);
function z6(e, t) {
  [e, t] = ie(e, t, av);
  let { locale: r } = be(), n = yx({
    ...e,
    locale: r,
    createCalendar: Si
  }), { calendarProps: a, prevButtonProps: i, nextButtonProps: l, errorMessageProps: o, title: u } = T1(e, n, t), s = ne({
    ...e,
    values: {
      state: n,
      isDisabled: e.isDisabled || !1,
      isInvalid: n.isValueInvalid
    },
    defaultClassName: "react-aria-RangeCalendar"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...s,
    ...a,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": n.isValueInvalid || void 0
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Ct,
        {
          slots: {
            previous: i,
            next: l
          }
        }
      ],
      [
        Li,
        {
          "aria-hidden": !0,
          level: 2,
          children: u
        }
      ],
      [
        ji,
        n
      ],
      [
        _e,
        {
          slots: {
            errorMessage: o
          }
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement(rr, null, /* @__PURE__ */ g.createElement("h2", null, a["aria-label"])), s.children, /* @__PURE__ */ g.createElement(rr, null, /* @__PURE__ */ g.createElement("button", {
    "aria-label": l["aria-label"],
    disabled: l.isDisabled,
    onClick: () => n.focusNextPage(),
    tabIndex: -1
  }))));
}
const V6 = /* @__PURE__ */ J(z6), _i = /* @__PURE__ */ Z(null);
function L6(e, t) {
  let r = G(Oi), n = G(ji), a = r ?? n, i = a.visibleRange.start;
  e.offset && (i = i.add(e.offset));
  let { gridProps: l, headerProps: o, weekDays: u } = R1({
    startDate: i,
    endDate: ai(i),
    weekdayStyle: e.weekdayStyle
  }, a);
  var s;
  return /* @__PURE__ */ g.createElement(_i.Provider, {
    value: {
      headerProps: o,
      weekDays: u,
      startDate: i
    }
  }, /* @__PURE__ */ g.createElement("table", {
    ...X(e),
    ...l,
    ref: t,
    style: e.style,
    className: (s = e.className) !== null && s !== void 0 ? s : "react-aria-CalendarGrid"
  }, typeof e.children != "function" ? e.children : /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(lv, null, (d) => /* @__PURE__ */ g.createElement(ov, null, d)), /* @__PURE__ */ g.createElement(su, null, e.children))));
}
const iv = /* @__PURE__ */ J(L6);
function O6(e, t) {
  let { children: r, style: n, className: a } = e, { headerProps: i, weekDays: l } = G(_i);
  return /* @__PURE__ */ g.createElement("thead", {
    ...X(e),
    ...i,
    ref: t,
    style: n,
    className: a || "react-aria-CalendarGridHeader"
  }, /* @__PURE__ */ g.createElement("tr", null, l.map((o, u) => /* @__PURE__ */ g.cloneElement(r(o), {
    key: u
  }))));
}
const lv = /* @__PURE__ */ J(O6);
function j6(e, t) {
  let { children: r, style: n, className: a } = e;
  return /* @__PURE__ */ g.createElement("th", {
    ...X(e),
    ref: t,
    style: n,
    className: a || "react-aria-CalendarHeaderCell"
  }, r);
}
const ov = /* @__PURE__ */ J(j6);
function _6(e, t) {
  let { children: r, style: n, className: a } = e, i = G(Oi), l = G(ji), o = i ?? l, { startDate: u } = G(_i), { locale: s } = be(), d = Py(u, s);
  return /* @__PURE__ */ g.createElement("tbody", {
    ...X(e),
    ref: t,
    style: n,
    className: a || "react-aria-CalendarGridBody"
  }, [
    ...new Array(d).keys()
  ].map((c) => /* @__PURE__ */ g.createElement("tr", {
    key: c
  }, o.getDatesInWeek(c, u).map((f, p) => f ? /* @__PURE__ */ g.cloneElement(r(f), {
    key: p
  }) : /* @__PURE__ */ g.createElement("td", {
    key: p
  })))));
}
const su = /* @__PURE__ */ J(_6);
function H6({ date: e, ...t }, r) {
  let n = G(Oi), a = G(ji), i = n ?? a;
  var l;
  let { startDate: o } = (l = G(_i)) !== null && l !== void 0 ? l : {
    startDate: i.visibleRange.start
  }, u = N(null), { cellProps: s, buttonProps: d, ...c } = M1({
    date: e
  }, i, u), { hoverProps: f, isHovered: p } = ke({
    ...t,
    isDisabled: c.isDisabled
  }), { focusProps: b, isFocusVisible: m } = xe();
  m && (m = c.isFocused);
  let h = !vy(o, e), y = !1, $ = !1;
  "highlightedRange" in i && i.highlightedRange && (y = Le(e, i.highlightedRange.start), $ = Le(e, i.highlightedRange.end));
  let x = ne({
    ...t,
    defaultChildren: c.formattedDate,
    defaultClassName: "react-aria-CalendarCell",
    values: {
      date: e,
      isHovered: p,
      isOutsideMonth: h,
      isFocusVisible: m,
      isSelectionStart: y,
      isSelectionEnd: $,
      ...c
    }
  }), C = {
    "data-focused": c.isFocused || void 0,
    "data-hovered": p || void 0,
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
    ref: r
  }, /* @__PURE__ */ g.createElement("div", {
    ..._(X(t), d, b, f, C, x),
    ref: u
  }));
}
const uv = /* @__PURE__ */ J(H6), ct = /* @__PURE__ */ Z(null);
function U6(e, t) {
  let r = G(ct);
  return r != null && r.isInvalid ? /* @__PURE__ */ g.createElement(G6, {
    ...e,
    ref: t
  }) : null;
}
const W6 = /* @__PURE__ */ J(U6), G6 = /* @__PURE__ */ J((e, t) => {
  let r = G(ct), n = ne({
    ...e,
    defaultClassName: "react-aria-FieldError",
    defaultChildren: r.validationErrors.join(" "),
    values: r
  });
  return /* @__PURE__ */ g.createElement(va, {
    slot: "errorMessage",
    ...n,
    ref: t
  });
}), Je = /* @__PURE__ */ Z({});
function Z6(e, t) {
  [e, t] = ie(e, t, Je);
  let { elementType: r = "label", ...n } = e;
  return /* @__PURE__ */ g.createElement(r, {
    className: "react-aria-Label",
    ...n,
    ref: t
  });
}
const q6 = /* @__PURE__ */ Vi(Z6), Y6 = /* @__PURE__ */ Z(null), sv = /* @__PURE__ */ Z(null);
function J6(e, t) {
  [e, t] = ie(e, t, Y6);
  var r;
  let n = xx({
    ...e,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), [a, i] = qe();
  var l;
  let { groupProps: o, labelProps: u, descriptionProps: s, errorMessageProps: d, ...c } = L1({
    ...e,
    label: i,
    validationBehavior: (l = e.validationBehavior) !== null && l !== void 0 ? l : "native"
  }, n), f = ne({
    ...e,
    values: {
      isDisabled: n.isDisabled,
      isReadOnly: n.isReadOnly,
      isRequired: e.isRequired || !1,
      isInvalid: n.isInvalid,
      state: n
    },
    defaultClassName: "react-aria-CheckboxGroup"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...o,
    ...f,
    ref: t,
    slot: e.slot || void 0,
    "data-readonly": n.isReadOnly || void 0,
    "data-required": e.isRequired || void 0,
    "data-invalid": n.isInvalid || void 0,
    "data-disabled": e.isDisabled || void 0
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        sv,
        n
      ],
      [
        Je,
        {
          ...u,
          ref: a,
          elementType: "span"
        }
      ],
      [
        _e,
        {
          slots: {
            description: s,
            errorMessage: d
          }
        }
      ],
      [
        ct,
        c
      ]
    ]
  }, f.children));
}
const Hi = /* @__PURE__ */ Z(null);
function X6(e, t) {
  [e, t] = ie(e, t, Hi);
  let r = N(null), n = G(sv);
  var a;
  let { labelProps: i, inputProps: l, isSelected: o, isDisabled: u, isReadOnly: s, isPressed: d, isInvalid: c } = n ? O1({
    ...e,
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: e.value,
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, n, r) : Yc({
    ...e,
    children: typeof e.children == "function" ? !0 : e.children,
    validationBehavior: (a = e.validationBehavior) !== null && a !== void 0 ? a : "native"
  }, Fi(e), r), { isFocused: f, isFocusVisible: p, focusProps: b } = xe(), m = u || s, { hoverProps: h, isHovered: y } = ke({
    ...e,
    isDisabled: m
  }), $ = ne({
    // TODO: should data attrs go on the label or on the <input>? useCheckbox passes them to the input...
    ...e,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: o,
      isIndeterminate: e.isIndeterminate || !1,
      isPressed: d,
      isHovered: y,
      isFocused: f,
      isFocusVisible: p,
      isDisabled: u,
      isReadOnly: s,
      isInvalid: c,
      isRequired: e.isRequired || !1
    }
  }), x = X(e);
  return delete x.id, /* @__PURE__ */ g.createElement("label", {
    ..._(x, i, h, $),
    ref: t,
    slot: e.slot || void 0,
    "data-selected": o || void 0,
    "data-indeterminate": e.isIndeterminate || void 0,
    "data-pressed": d || void 0,
    "data-hovered": y || void 0,
    "data-focused": f || void 0,
    "data-focus-visible": p || void 0,
    "data-disabled": u || void 0,
    "data-readonly": s || void 0,
    "data-invalid": c || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ g.createElement(rr, {
    elementType: "span"
  }, /* @__PURE__ */ g.createElement("input", {
    ..._(l, b),
    ref: r
  })), $.children);
}
const Q6 = /* @__PURE__ */ J(X6), eD = /* @__PURE__ */ J(J6), ir = /* @__PURE__ */ Z({});
function tD(e, t) {
  [e, t] = ie(e, t, ir);
  let { isDisabled: r, isInvalid: n, onHoverStart: a, onHoverChange: i, onHoverEnd: l, ...o } = e, { hoverProps: u, isHovered: s } = ke({
    onHoverStart: a,
    onHoverChange: i,
    onHoverEnd: l,
    isDisabled: r
  }), { isFocused: d, isFocusVisible: c, focusProps: f } = xe({
    within: !0
  });
  r ?? (r = !!e["aria-disabled"] && e["aria-disabled"] !== "false"), n ?? (n = !!e["aria-invalid"] && e["aria-invalid"] !== "false");
  let p = ne({
    ...e,
    values: {
      isHovered: s,
      isFocusWithin: d,
      isFocusVisible: c,
      isDisabled: r,
      isInvalid: n
    },
    defaultClassName: "react-aria-Group"
  });
  var b, m;
  return /* @__PURE__ */ g.createElement("div", {
    ..._(o, f, u),
    ...p,
    ref: t,
    role: (b = e.role) !== null && b !== void 0 ? b : "group",
    slot: (m = e.slot) !== null && m !== void 0 ? m : void 0,
    "data-focus-within": d || void 0,
    "data-hovered": s || void 0,
    "data-focus-visible": c || void 0,
    "data-disabled": r || void 0,
    "data-invalid": n || void 0
  }, p.children);
}
const du = /* @__PURE__ */ J(tD), yr = /* @__PURE__ */ Z({});
let rD = (e) => {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, ...a } = e;
  return a;
};
function nD(e, t) {
  [e, t] = ie(e, t, yr);
  let { hoverProps: r, isHovered: n } = ke(e), { isFocused: a, isFocusVisible: i, focusProps: l } = xe({
    isTextInput: !0,
    autoFocus: e.autoFocus
  }), o = !!e["aria-invalid"] && e["aria-invalid"] !== "false", u = ne({
    ...e,
    values: {
      isHovered: n,
      isFocused: a,
      isFocusVisible: i,
      isDisabled: e.disabled || !1,
      isInvalid: o
    },
    defaultClassName: "react-aria-Input"
  });
  return /* @__PURE__ */ g.createElement("input", {
    ..._(rD(e), l, r),
    ...u,
    ref: t,
    "data-focused": a || void 0,
    "data-disabled": e.disabled || void 0,
    "data-hovered": n || void 0,
    "data-focus-visible": i || void 0,
    "data-invalid": o || void 0
  });
}
const dv = /* @__PURE__ */ Vi(nD), Ui = /* @__PURE__ */ Z(null);
function aD(e, t) {
  let { render: r } = G(Ui);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, r(e, t));
}
const cu = /* @__PURE__ */ J(aD), ft = /* @__PURE__ */ Z({}), iD = /* @__PURE__ */ Z({});
function lD(e, t) {
  let [r, n] = ie(e, t, iD), a = Jh("header", e, t);
  return a || /* @__PURE__ */ g.createElement("header", {
    className: "react-aria-Header",
    ...r,
    ref: n
  }, r.children);
}
const fu = /* @__PURE__ */ J(lD), pu = /* @__PURE__ */ Z({});
function oD(e, t) {
  let [r, n] = ie(e, t, pu), { elementType: a, orientation: i, style: l, className: o } = r, u = a || "hr";
  u === "hr" && i === "vertical" && (u = "div");
  let { separatorProps: s } = X5({
    elementType: a,
    orientation: i
  }), d = Jh("separator", e, t);
  return d || /* @__PURE__ */ g.createElement(u, {
    ...X(r),
    ...s,
    style: l,
    className: o ?? "react-aria-Separator",
    ref: n,
    slot: r.slot || void 0
  });
}
const Wi = /* @__PURE__ */ J(oD), ga = /* @__PURE__ */ Z(null), Tt = /* @__PURE__ */ Z(null);
function uD(e, t) {
  [e, t] = ie(e, t, ga);
  let r = G(qn), n = G(Tt);
  return G(Lr) ? /* @__PURE__ */ g.createElement(Yh, e) : n ? r ? null : /* @__PURE__ */ g.createElement(cv, {
    state: n,
    props: e,
    listBoxRef: t
  }) : /* @__PURE__ */ g.createElement(sD, {
    props: e,
    listBoxRef: t
  });
}
function sD({ props: e, listBoxRef: t }) {
  let { portal: r, collection: n } = ba(e);
  e = {
    ...e,
    collection: n,
    children: null,
    items: null
  };
  let a = Ki(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, r, /* @__PURE__ */ g.createElement(cv, {
    state: a,
    props: e,
    listBoxRef: t
  }));
}
const bu = /* @__PURE__ */ J(uD);
function cv({ state: e, props: t, listBoxRef: r }) {
  let { dragAndDropHooks: n, layout: a = "stack", orientation: i = "vertical" } = t, { collection: l, selectionManager: o } = e, u = !!(n != null && n.useDraggableCollectionState), s = !!(n != null && n.useDroppableCollectionState), { direction: d } = be(), { disabledBehavior: c, disabledKeys: f } = o, p = bn({
    usage: "search",
    sensitivity: "base"
  }), b = z(() => t.keyboardDelegate || new zr({
    collection: l,
    collator: p,
    ref: r,
    disabledKeys: c === "selection" ? /* @__PURE__ */ new Set() : f,
    layout: a,
    orientation: i,
    direction: d
  }), [
    l,
    p,
    r,
    c,
    f,
    i,
    d,
    t.keyboardDelegate,
    a
  ]), { listBoxProps: m } = m5({
    ...t,
    shouldSelectOnPressUp: u || t.shouldSelectOnPressUp,
    keyboardDelegate: b
  }, e, r), h = xt({
    items: l,
    children: (V) => {
      switch (V.type) {
        case "section":
          return /* @__PURE__ */ g.createElement(dD, {
            section: V
          });
        case "separator":
          return /* @__PURE__ */ g.createElement(Wi, V.props);
        case "item":
          return /* @__PURE__ */ g.createElement(pv, {
            item: V
          });
        default:
          throw new Error("Unsupported node type in Menu: " + V.type);
      }
    }
  }), y = N(u), $ = N(s);
  te(() => {
    y.current !== u && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), $.current !== s && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    u,
    s
  ]);
  let x, C, w, A = !1, M = null, v = N(null);
  if (u && n) {
    x = n.useDraggableCollectionState({
      collection: l,
      selectionManager: o,
      preview: n.renderDragPreview ? v : void 0
    }), n.useDraggableCollection({}, x, r);
    let V = n.DragPreview;
    M = n.renderDragPreview ? /* @__PURE__ */ g.createElement(V, {
      ref: v
    }, n.renderDragPreview) : null;
  }
  if (s && n) {
    C = n.useDroppableCollectionState({
      collection: l,
      selectionManager: o
    });
    let V = n.dropTargetDelegate || new n.ListDropTargetDelegate(l, r, {
      orientation: i,
      layout: a,
      direction: d
    });
    w = n.useDroppableCollection({
      keyboardDelegate: b,
      dropTargetDelegate: V
    }, C, r), A = C.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: I, isFocused: T, isFocusVisible: E } = xe(), B = {
    isDropTarget: A,
    isEmpty: e.collection.size === 0,
    isFocused: T,
    isFocusVisible: E,
    layout: t.layout || "stack",
    state: e
  }, S = ne({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-ListBox",
    values: B
  }), F = null;
  return e.collection.size === 0 && t.renderEmptyState && (F = /* @__PURE__ */ g.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, t.renderEmptyState(B))), /* @__PURE__ */ g.createElement(aa, null, /* @__PURE__ */ g.createElement("div", {
    ...X(t),
    ..._(m, I, w == null ? void 0 : w.collectionProps),
    ...S,
    ref: r,
    slot: t.slot || void 0,
    onScroll: t.onScroll,
    "data-drop-target": A || void 0,
    "data-empty": e.collection.size === 0 || void 0,
    "data-focused": T || void 0,
    "data-focus-visible": E || void 0,
    "data-layout": t.layout || "stack",
    "data-orientation": t.orientation || "vertical"
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        ga,
        t
      ],
      [
        Tt,
        e
      ],
      [
        ft,
        {
          dragAndDropHooks: n,
          dragState: x,
          dropState: C
        }
      ],
      [
        pu,
        {
          elementType: "div"
        }
      ],
      [
        Ui,
        {
          render: pD
        }
      ]
    ]
  }, h), F, M));
}
function dD({ section: e, className: t, style: r }) {
  var n, a;
  let i = G(Tt), [l, o] = qe();
  var u;
  let { headingProps: s, groupProps: d } = v5({
    heading: o,
    "aria-label": (u = e.props["aria-label"]) !== null && u !== void 0 ? u : void 0
  }), c = xt({
    items: i.collection.getChildren(e.key),
    children: (f) => {
      switch (f.type) {
        case "header":
          return /* @__PURE__ */ g.createElement(cD, {
            item: f,
            headingProps: s,
            headingRef: l
          });
        case "item":
          return /* @__PURE__ */ g.createElement(pv, {
            item: f
          });
        default:
          throw new Error("Unsupported element type in Section: " + f.type);
      }
    }
  });
  return /* @__PURE__ */ g.createElement("section", {
    ...X(e.props),
    ...d,
    className: t || ((n = e.props) === null || n === void 0 ? void 0 : n.className) || "react-aria-Section",
    style: r || ((a = e.props) === null || a === void 0 ? void 0 : a.style),
    ref: e.props.ref
  }, c);
}
function cD({ item: e, headingProps: t, headingRef: r }) {
  let { ref: n, ...a } = e.props;
  return /* @__PURE__ */ g.createElement(fu, {
    ...t,
    ...a,
    ref: $i(r, n)
  }, e.rendered);
}
function fD(e, t) {
  return Dt("item", e, t, e.children);
}
const fv = /* @__PURE__ */ J(fD);
function pv({ item: e }) {
  var t;
  let r = je(e.props.ref), n = G(Tt), { dragAndDropHooks: a, dragState: i, dropState: l } = G(ft), { optionProps: o, labelProps: u, descriptionProps: s, ...d } = h5({
    key: e.key,
    "aria-label": (t = e.props) === null || t === void 0 ? void 0 : t["aria-label"]
  }, n, r), { hoverProps: c, isHovered: f } = ke({
    isDisabled: !d.allowsSelection && !d.hasAction
  }), p = null;
  i && a && (p = a.useDraggableItem({
    key: e.key
  }, i));
  let b = null;
  l && a && (b = a.useDroppableItem({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, l, r));
  let m = e.props, h = i && i.isDragging(e.key), y = ne({
    ...m,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...d,
      isHovered: f,
      selectionMode: n.selectionManager.selectionMode,
      selectionBehavior: n.selectionManager.selectionBehavior,
      allowsDragging: !!i,
      isDragging: h,
      isDropTarget: b == null ? void 0 : b.isDropTarget
    }
  }), $ = (a == null ? void 0 : a.renderDropIndicator) || ((C) => /* @__PURE__ */ g.createElement(cu, {
    target: C
  }));
  te(() => {
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
    ..._(o, c, p == null ? void 0 : p.dragProps, b == null ? void 0 : b.dropProps),
    ...y,
    ref: r,
    "data-allows-dragging": !!i || void 0,
    "data-selected": d.isSelected || void 0,
    "data-disabled": d.isDisabled || void 0,
    "data-hovered": f || void 0,
    "data-focused": d.isFocused || void 0,
    "data-focus-visible": d.isFocusVisible || void 0,
    "data-pressed": d.isPressed || void 0,
    "data-dragging": h || void 0,
    "data-drop-target": (b == null ? void 0 : b.isDropTarget) || void 0,
    "data-selection-mode": n.selectionManager.selectionMode === "none" ? void 0 : n.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        _e,
        {
          slots: {
            label: u,
            description: s
          }
        }
      ]
    ]
  }, y.children)), (a == null ? void 0 : a.useDropIndicator) && n.collection.getKeyAfter(e.key) == null && $({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }));
}
function pD(e, t) {
  t = je(t);
  let { dragAndDropHooks: r, dropState: n } = G(ft), { dropIndicatorProps: a, isHidden: i, isDropTarget: l } = r.useDropIndicator(e, n, t);
  return i ? null : /* @__PURE__ */ g.createElement(mD, {
    ...e,
    dropIndicatorProps: a,
    isDropTarget: l,
    ref: t
  });
}
function bD(e, t) {
  let { dropIndicatorProps: r, isDropTarget: n, ...a } = e, i = ne({
    ...a,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: n
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...r,
    ...i,
    // eslint-disable-next-line
    role: "option",
    ref: t,
    "data-drop-target": n || void 0
  });
}
const mD = /* @__PURE__ */ J(bD), mu = /* @__PURE__ */ Z({
  placement: "bottom"
});
function hD(e, t) {
  [e, t] = ie(e, t, mu);
  let r = e.placement, n = {
    position: "absolute",
    [r]: "100%",
    transform: r === "top" || r === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
  }, a = ne({
    ...e,
    defaultClassName: "react-aria-OverlayArrow",
    values: {
      placement: r
    }
  });
  return a.style && Object.keys(a.style).forEach((i) => a.style[i] === void 0 && delete a.style[i]), /* @__PURE__ */ g.createElement("div", {
    ...e,
    ...a,
    style: {
      ...n,
      ...a.style
    },
    ref: t,
    "data-placement": r
  });
}
const bv = /* @__PURE__ */ J(hD), nr = /* @__PURE__ */ Z(null);
function vD(e, t) {
  [e, t] = ie(e, t, nr);
  let r = G(Lt), n = Vr(e), a = e.isOpen != null || e.defaultOpen != null || !r ? n : r, i = vi(t, a.isOpen) || e.isExiting || !1;
  if (G(qn)) {
    let o = e.children;
    return typeof o == "function" && (o = o({
      trigger: e.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1
    })), /* @__PURE__ */ g.createElement(g.Fragment, null, o);
  }
  return a && !a.isOpen && !i ? null : /* @__PURE__ */ g.createElement($D, {
    ...e,
    triggerRef: e.triggerRef,
    state: a,
    popoverRef: t,
    isExiting: i
  });
}
const gD = /* @__PURE__ */ J(vD);
function $D({ state: e, isExiting: t, UNSTABLE_portalContainer: r, ...n }) {
  var a;
  let { popoverProps: i, underlayProps: l, arrowProps: o, placement: u } = u5({
    ...n,
    offset: (a = n.offset) !== null && a !== void 0 ? a : 8
  }, e), s = n.popoverRef, d = zi(s, !!u) || n.isEntering || !1, c = ne({
    ...n,
    defaultClassName: "react-aria-Popover",
    values: {
      trigger: n.trigger || null,
      placement: u,
      isEntering: d,
      isExiting: t
    }
  }), f = {
    ...i.style,
    ...c.style
  };
  return /* @__PURE__ */ g.createElement(Lf, {
    isExiting: t,
    portalContainer: r
  }, !n.isNonModal && e.isOpen && /* @__PURE__ */ g.createElement("div", {
    "data-testid": "underlay",
    ...l,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ g.createElement("div", {
    ..._(X(n), i),
    ...c,
    ref: s,
    slot: n.slot || void 0,
    style: f,
    "data-trigger": n.trigger,
    "data-placement": u,
    "data-entering": d || void 0,
    "data-exiting": t || void 0
  }, !n.isNonModal && /* @__PURE__ */ g.createElement(Jl, {
    onDismiss: e.close
  }), /* @__PURE__ */ g.createElement(mu.Provider, {
    value: {
      ...o,
      placement: u
    }
  }, c.children), /* @__PURE__ */ g.createElement(Jl, {
    onDismiss: e.close
  })));
}
const hu = /* @__PURE__ */ Z(null), Lt = /* @__PURE__ */ Z(null);
function yD(e, t) {
  let r = e["aria-labelledby"];
  [e, t] = ie(e, t, hu);
  let { dialogProps: n, titleProps: a } = N5({
    ...e,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": r
  }, t), i = G(Lt), l = e.children;
  typeof l == "function" && (l = l({
    close: (i == null ? void 0 : i.close) || (() => {
    })
  })), !n["aria-label"] && !n["aria-labelledby"] && (e["aria-labelledby"] ? n["aria-labelledby"] = e["aria-labelledby"] : console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));
  var o;
  return /* @__PURE__ */ g.createElement("section", {
    ...X(e),
    ...n,
    ref: t,
    slot: e.slot || void 0,
    style: e.style,
    className: (o = e.className) !== null && o !== void 0 ? o : "react-aria-Dialog"
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Li,
        {
          slots: {
            [Zn]: {},
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
const xD = /* @__PURE__ */ J(yD), DD = /* @__PURE__ */ Z(null), CD = /* @__PURE__ */ Z(null);
function ED(e, t) {
  [e, t] = ie(e, t, DD);
  let { collection: r, document: n } = ma(), { children: a, isDisabled: i = !1, isInvalid: l = !1, isRequired: o = !1 } = e;
  a = z(() => typeof a == "function" ? a({
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
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(uu, null, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Lr,
        n
      ],
      [
        ga,
        {
          items: (u = e.items) !== null && u !== void 0 ? u : e.defaultItems
        }
      ]
    ]
  }, a)), /* @__PURE__ */ g.createElement(PD, {
    props: e,
    collection: r,
    comboBoxRef: t
  }));
}
function PD({ props: e, collection: t, comboBoxRef: r }) {
  let { name: n, formValue: a = "key", allowsCustomValue: i } = e;
  i && (a = "text");
  let { contains: l } = sc({
    sensitivity: "base"
  });
  var o;
  let u = Cx({
    defaultFilter: e.defaultFilter || l,
    ...e,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: e.items,
    children: void 0,
    collection: t,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }), s = N(null), d = N(null), c = N(null), f = N(null), [p, b] = qe();
  var m;
  let { buttonProps: h, inputProps: y, listBoxProps: $, labelProps: x, descriptionProps: C, errorMessageProps: w, ...A } = S5({
    ...yt(e),
    label: b,
    inputRef: d,
    buttonRef: s,
    listBoxRef: c,
    popoverRef: f,
    name: a === "text" ? n : void 0,
    validationBehavior: (m = e.validationBehavior) !== null && m !== void 0 ? m : "native"
  }, u), [M, v] = Y(null), I = re(() => {
    if (d.current) {
      var S;
      let F = (S = s.current) === null || S === void 0 ? void 0 : S.getBoundingClientRect(), V = d.current.getBoundingClientRect(), R = F ? Math.min(F.left, V.left) : V.left, D = F ? Math.max(F.right, V.right) : V.right;
      v(D - R + "px");
    }
  }, [
    s,
    d,
    v
  ]);
  ta({
    ref: d,
    onResize: I
  });
  let T = z(() => ({
    isOpen: u.isOpen,
    isDisabled: e.isDisabled || !1,
    isInvalid: A.isInvalid || !1,
    isRequired: e.isRequired || !1
  }), [
    u.isOpen,
    e.isDisabled,
    A.isInvalid,
    e.isRequired
  ]), E = ne({
    ...e,
    values: T,
    defaultClassName: "react-aria-ComboBox"
  }), B = X(e);
  return delete B.id, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        CD,
        u
      ],
      [
        Je,
        {
          ...x,
          ref: p
        }
      ],
      [
        Ct,
        {
          ...h,
          ref: s,
          isPressed: u.isOpen
        }
      ],
      [
        yr,
        {
          ...y,
          ref: d
        }
      ],
      [
        Lt,
        u
      ],
      [
        nr,
        {
          ref: f,
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
        ga,
        {
          ...$,
          ref: c
        }
      ],
      [
        Tt,
        u
      ],
      [
        _e,
        {
          slots: {
            description: C,
            errorMessage: w
          }
        }
      ],
      [
        ir,
        {
          isInvalid: A.isInvalid,
          isDisabled: e.isDisabled || !1
        }
      ],
      [
        ct,
        A
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...B,
    ...E,
    ref: r,
    slot: e.slot || void 0,
    "data-focused": u.isFocused || void 0,
    "data-open": u.isOpen || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": A.isInvalid || void 0,
    "data-required": e.isRequired || void 0
  }), n && a === "key" && /* @__PURE__ */ g.createElement("input", {
    type: "hidden",
    name: n,
    value: u.selectedKey
  }));
}
const wD = /* @__PURE__ */ J(ED), Gi = /* @__PURE__ */ Z(null), SD = /* @__PURE__ */ Z(null), $a = /* @__PURE__ */ Z(null), Zi = /* @__PURE__ */ Z(null);
function BD(e, t) {
  [e, t] = ie(e, t, Gi);
  let { locale: r } = be();
  var n;
  let a = au({
    ...e,
    locale: r,
    createCalendar: Si,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), i = N(null), [l, o] = qe(), u = N(null);
  var s;
  let { labelProps: d, fieldProps: c, inputProps: f, descriptionProps: p, errorMessageProps: b, ...m } = Zo({
    ...yt(e),
    label: o,
    inputRef: u,
    validationBehavior: (s = e.validationBehavior) !== null && s !== void 0 ? s : "native"
  }, a, i), h = ne({
    ...yt(e),
    values: {
      state: a,
      isInvalid: a.isInvalid,
      isDisabled: a.isDisabled
    },
    defaultClassName: "react-aria-DateField"
  }), y = X(e);
  return delete y.id, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        $a,
        a
      ],
      [
        ir,
        {
          ...c,
          ref: i,
          isInvalid: a.isInvalid
        }
      ],
      [
        yr,
        {
          ...f,
          ref: u
        }
      ],
      [
        Je,
        {
          ...d,
          ref: l,
          elementType: "span"
        }
      ],
      [
        _e,
        {
          slots: {
            description: p,
            errorMessage: b
          }
        }
      ],
      [
        ct,
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
const kD = /* @__PURE__ */ J(BD);
function FD(e, t) {
  [e, t] = ie(e, t, SD);
  let { locale: r } = be();
  var n;
  let a = Kx({
    ...e,
    locale: r,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), i = N(null), [l, o] = qe(), u = N(null);
  var s;
  let { labelProps: d, fieldProps: c, inputProps: f, descriptionProps: p, errorMessageProps: b, ...m } = k5({
    ...yt(e),
    label: o,
    inputRef: u,
    validationBehavior: (s = e.validationBehavior) !== null && s !== void 0 ? s : "native"
  }, a, i), h = ne({
    ...e,
    values: {
      state: a,
      isInvalid: a.isInvalid,
      isDisabled: a.isDisabled
    },
    defaultClassName: "react-aria-TimeField"
  }), y = X(e);
  return delete y.id, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Zi,
        a
      ],
      [
        ir,
        {
          ...c,
          ref: i,
          isInvalid: a.isInvalid
        }
      ],
      [
        yr,
        {
          ...f,
          ref: u
        }
      ],
      [
        Je,
        {
          ...d,
          ref: l,
          elementType: "span"
        }
      ],
      [
        _e,
        {
          slots: {
            description: p,
            errorMessage: b
          }
        }
      ],
      [
        ct,
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
const AD = /* @__PURE__ */ J(FD);
function TD(e, t) {
  let r = G($a), n = G(Zi);
  return r || n ? /* @__PURE__ */ g.createElement(mv, {
    ...e,
    ref: t
  }) : /* @__PURE__ */ g.createElement(RD, {
    ...e,
    ref: t
  });
}
const RD = /* @__PURE__ */ J((e, t) => {
  let [r, n] = ie({
    slot: e.slot
  }, t, Gi), { locale: a } = be(), i = au({
    ...r,
    locale: a,
    createCalendar: Si
  }), l = N(null), { fieldProps: o, inputProps: u } = Zo({
    ...r,
    inputRef: l
  }, i, n);
  return /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        $a,
        i
      ],
      [
        yr,
        {
          ...u,
          ref: l
        }
      ],
      [
        ir,
        {
          ...o,
          ref: n,
          isInvalid: i.isInvalid
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement(mv, e));
}), mv = /* @__PURE__ */ J((e, t) => {
  let { className: r, children: n } = e, a = G($a), i = G(Zi), l = a ?? i;
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(du, {
    ...e,
    ref: t,
    slot: e.slot || void 0,
    className: r ?? "react-aria-DateInput",
    isInvalid: l.isInvalid
  }, l.segments.map((o, u) => /* @__PURE__ */ cd(n(o), {
    key: u
  }))), /* @__PURE__ */ g.createElement(dv, null));
}), MD = /* @__PURE__ */ J(TD);
function ID({ segment: e, ...t }, r) {
  let n = G($a), a = G(Zi), i = n ?? a, l = je(r), { segmentProps: o } = R5(e, i, l), { focusProps: u, isFocused: s, isFocusVisible: d } = xe(), { hoverProps: c, isHovered: f } = ke({
    ...t,
    isDisabled: i.isDisabled || e.type === "literal"
  }), p = ne({
    ...t,
    values: {
      ...e,
      isReadOnly: !e.isEditable,
      isInvalid: i.isInvalid,
      isDisabled: i.isDisabled,
      isHovered: f,
      isFocused: s,
      isFocusVisible: d
    },
    defaultChildren: e.text,
    defaultClassName: "react-aria-DateSegment"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ..._(X(t), o, u, c),
    ...p,
    ref: l,
    "data-placeholder": e.isPlaceholder || void 0,
    "data-invalid": i.isInvalid || void 0,
    "data-readonly": !e.isEditable || void 0,
    "data-disabled": i.isDisabled || void 0,
    "data-type": e.type,
    "data-hovered": f || void 0,
    "data-focused": s || void 0,
    "data-focus-visible": d || void 0
  });
}
const ND = /* @__PURE__ */ J(ID), KD = /* @__PURE__ */ Z(null), zD = /* @__PURE__ */ Z(null), VD = /* @__PURE__ */ Z(null), LD = /* @__PURE__ */ Z(null);
function OD(e, t) {
  [e, t] = ie(e, t, KD);
  var r;
  let n = kx({
    ...e,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), a = N(null), [i, l] = qe();
  var o;
  let { groupProps: u, labelProps: s, fieldProps: d, buttonProps: c, dialogProps: f, calendarProps: p, descriptionProps: b, errorMessageProps: m, ...h } = F5({
    ...yt(e),
    label: l,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, n, a), { focusProps: y, isFocused: $, isFocusVisible: x } = xe({
    within: !0
  }), C = ne({
    ...e,
    values: {
      state: n,
      isFocusWithin: $,
      isFocusVisible: x,
      isDisabled: e.isDisabled || !1,
      isInvalid: n.isInvalid,
      isOpen: n.isOpen
    },
    defaultClassName: "react-aria-DatePicker"
  }), w = X(e);
  return delete w.id, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        VD,
        n
      ],
      [
        ir,
        {
          ...u,
          ref: a,
          isInvalid: n.isInvalid
        }
      ],
      [
        Gi,
        d
      ],
      [
        Ct,
        {
          ...c,
          isPressed: n.isOpen
        }
      ],
      [
        Je,
        {
          ...s,
          ref: i,
          elementType: "span"
        }
      ],
      [
        nv,
        p
      ],
      [
        Lt,
        n
      ],
      [
        nr,
        {
          trigger: "DatePicker",
          triggerRef: a,
          placement: "bottom start"
        }
      ],
      [
        hu,
        f
      ],
      [
        _e,
        {
          slots: {
            description: b,
            errorMessage: m
          }
        }
      ],
      [
        ct,
        h
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...y,
    ...w,
    ...C,
    ref: t,
    slot: e.slot || void 0,
    "data-focus-within": $ || void 0,
    "data-invalid": n.isInvalid || void 0,
    "data-focus-visible": x || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-open": n.isOpen || void 0
  }));
}
const jD = /* @__PURE__ */ J(OD);
function _D(e, t) {
  [e, t] = ie(e, t, zD);
  var r;
  let n = Nx({
    ...e,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), a = N(null), [i, l] = qe();
  var o;
  let { groupProps: u, labelProps: s, startFieldProps: d, endFieldProps: c, buttonProps: f, dialogProps: p, calendarProps: b, descriptionProps: m, errorMessageProps: h, ...y } = I5({
    ...yt(e),
    label: l,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, n, a), { focusProps: $, isFocused: x, isFocusVisible: C } = xe({
    within: !0
  }), w = ne({
    ...e,
    values: {
      state: n,
      isFocusWithin: x,
      isFocusVisible: C,
      isDisabled: e.isDisabled || !1,
      isInvalid: n.isInvalid,
      isOpen: n.isOpen
    },
    defaultClassName: "react-aria-DateRangePicker"
  }), A = X(e);
  return delete A.id, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        LD,
        n
      ],
      [
        ir,
        {
          ...u,
          ref: a,
          isInvalid: n.isInvalid
        }
      ],
      [
        Ct,
        {
          ...f,
          isPressed: n.isOpen
        }
      ],
      [
        Je,
        {
          ...s,
          ref: i,
          elementType: "span"
        }
      ],
      [
        av,
        b
      ],
      [
        Lt,
        n
      ],
      [
        nr,
        {
          trigger: "DateRangePicker",
          triggerRef: a,
          placement: "bottom start"
        }
      ],
      [
        hu,
        p
      ],
      [
        Gi,
        {
          slots: {
            start: d,
            end: c
          }
        }
      ],
      [
        _e,
        {
          slots: {
            description: m,
            errorMessage: h
          }
        }
      ],
      [
        ct,
        y
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...$,
    ...A,
    ...w,
    ref: t,
    slot: e.slot || void 0,
    "data-focus-within": x || void 0,
    "data-invalid": n.isInvalid || void 0,
    "data-focus-visible": C || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-open": n.isOpen || void 0
  }));
}
const HD = /* @__PURE__ */ J(_D);
var vu = {}, hv = {};
hv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"حدد عنصرًا","tableResizer":"أداة تغيير الحجم"}');
var vv = {};
vv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Изберете предмет","tableResizer":"Преоразмерител"}');
var gv = {};
gv = JSON.parse('{"dropzoneLabel":"Místo pro přetažení","selectPlaceholder":"Vyberte položku","tableResizer":"Změna velikosti"}');
var $v = {};
$v = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Vælg et element","tableResizer":"Størrelsesændring"}');
var yv = {};
yv = JSON.parse('{"dropzoneLabel":"Ablegebereich","selectPlaceholder":"Element wählen","tableResizer":"Größenanpassung"}');
var xv = {};
xv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Επιλέξτε ένα αντικείμενο","tableResizer":"Αλλαγή μεγέθους"}');
var Dv = {};
Dv = JSON.parse('{"selectPlaceholder":"Select an item","tableResizer":"Resizer","dropzoneLabel":"DropZone"}');
var Cv = {};
Cv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Seleccionar un artículo","tableResizer":"Cambiador de tamaño"}');
var Ev = {};
Ev = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valige üksus","tableResizer":"Suuruse muutja"}');
var Pv = {};
Pv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valitse kohde","tableResizer":"Koon muuttaja"}');
var wv = {};
wv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Sélectionner un élément","tableResizer":"Redimensionneur"}');
var Sv = {};
Sv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"בחר פריט","tableResizer":"שינוי גודל"}');
var Bv = {};
Bv = JSON.parse('{"dropzoneLabel":"Zona spuštanja","selectPlaceholder":"Odaberite stavku","tableResizer":"Promjena veličine"}');
var kv = {};
kv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Válasszon ki egy elemet","tableResizer":"Átméretező"}');
var Fv = {};
Fv = JSON.parse('{"dropzoneLabel":"Zona di rilascio","selectPlaceholder":"Seleziona un elemento","tableResizer":"Ridimensionamento"}');
var Av = {};
Av = JSON.parse('{"dropzoneLabel":"ドロップゾーン","selectPlaceholder":"項目を選択","tableResizer":"サイズ変更ツール"}');
var Tv = {};
Tv = JSON.parse('{"dropzoneLabel":"드롭 영역","selectPlaceholder":"항목 선택","tableResizer":"크기 조정기"}');
var Rv = {};
Rv = JSON.parse('{"dropzoneLabel":"„DropZone“","selectPlaceholder":"Pasirinkite elementą","tableResizer":"Dydžio keitiklis"}');
var Mv = {};
Mv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izvēlēties vienumu","tableResizer":"Izmēra mainītājs"}');
var Iv = {};
Iv = JSON.parse('{"dropzoneLabel":"Droppsone","selectPlaceholder":"Velg et element","tableResizer":"Størrelsesendrer"}');
var Nv = {};
Nv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecteer een item","tableResizer":"Resizer"}');
var Kv = {};
Kv = JSON.parse('{"dropzoneLabel":"Strefa upuszczania","selectPlaceholder":"Wybierz element","tableResizer":"Zmiana rozmiaru"}');
var zv = {};
zv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');
var Vv = {};
Vv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');
var Lv = {};
Lv = JSON.parse('{"dropzoneLabel":"Zonă de plasare","selectPlaceholder":"Selectați un element","tableResizer":"Instrument de redimensionare"}');
var Ov = {};
Ov = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Выберите элемент","tableResizer":"Средство изменения размера"}');
var jv = {};
jv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Vyberte položku","tableResizer":"Nástroj na zmenu veľkosti"}');
var _v = {};
_v = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izberite element","tableResizer":"Spreminjanje velikosti"}');
var Hv = {};
Hv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izaberite stavku","tableResizer":"Promena veličine"}');
var Uv = {};
Uv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Välj en artikel","tableResizer":"Storleksändrare"}');
var Wv = {};
Wv = JSON.parse('{"dropzoneLabel":"Bırakma Bölgesi","selectPlaceholder":"Bir öğe seçin","tableResizer":"Yeniden boyutlandırıcı"}');
var Gv = {};
Gv = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Виберіть елемент","tableResizer":"Засіб змінення розміру"}');
var Zv = {};
Zv = JSON.parse('{"dropzoneLabel":"放置区域","selectPlaceholder":"选择一个项目","tableResizer":"尺寸调整器"}');
var qv = {};
qv = JSON.parse('{"dropzoneLabel":"放置區","selectPlaceholder":"選取項目","tableResizer":"大小調整器"}');
vu = {
  "ar-AE": hv,
  "bg-BG": vv,
  "cs-CZ": gv,
  "da-DK": $v,
  "de-DE": yv,
  "el-GR": xv,
  "en-US": Dv,
  "es-ES": Cv,
  "et-EE": Ev,
  "fi-FI": Pv,
  "fr-FR": wv,
  "he-IL": Sv,
  "hr-HR": Bv,
  "hu-HU": kv,
  "it-IT": Fv,
  "ja-JP": Av,
  "ko-KR": Tv,
  "lt-LT": Rv,
  "lv-LV": Mv,
  "nb-NO": Iv,
  "nl-NL": Nv,
  "pl-PL": Kv,
  "pt-BR": zv,
  "pt-PT": Vv,
  "ro-RO": Lv,
  "ru-RU": Ov,
  "sk-SK": jv,
  "sl-SI": _v,
  "sr-SP": Hv,
  "sv-SE": Uv,
  "tr-TR": Wv,
  "uk-UA": Gv,
  "zh-CN": Zv,
  "zh-TW": qv
};
function UD(e, t) {
  let { validationErrors: r, children: n, className: a, ...i } = e;
  return /* @__PURE__ */ g.createElement("form", {
    ...i,
    ref: t,
    className: a || "react-aria-Form"
  }, /* @__PURE__ */ g.createElement(Zc.Provider, {
    value: r ?? {}
  }, n));
}
const WD = /* @__PURE__ */ J(UD), GD = /* @__PURE__ */ Z(null);
function ZD(e, t) {
  [e, t] = ie(e, t, GD);
  let { collection: r, portal: n } = ba(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, n, /* @__PURE__ */ g.createElement(qD, {
    props: e,
    collection: r,
    gridListRef: t
  }));
}
function qD({ props: e, collection: t, gridListRef: r }) {
  let { dragAndDropHooks: n } = e, a = Ki({
    ...e,
    collection: t,
    children: void 0
  }), { gridProps: i } = fb(e, a, r), l = xt({
    items: t,
    children: (I) => {
      switch (I.type) {
        case "item":
          return /* @__PURE__ */ g.createElement(QD, {
            item: I
          });
        default:
          throw new Error("Unsupported node type in GridList: " + I.type);
      }
    }
  }), o = a.selectionManager, u = !!(n != null && n.useDraggableCollectionState), s = !!(n != null && n.useDroppableCollectionState), d = N(u), c = N(s);
  te(() => {
    d.current !== u && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), c.current !== s && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    u,
    s
  ]);
  let f, p, b, m = !1, h = null, y = N(null);
  if (u && n) {
    f = n.useDraggableCollectionState({
      collection: t,
      selectionManager: o,
      preview: n.renderDragPreview ? y : void 0
    }), n.useDraggableCollection({}, f, r);
    let I = n.DragPreview;
    h = n.renderDragPreview ? /* @__PURE__ */ g.createElement(I, {
      ref: y
    }, n.renderDragPreview) : null;
  }
  if (s && n) {
    p = n.useDroppableCollectionState({
      collection: t,
      selectionManager: o
    });
    let I = new zr(t, o.disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : o.disabledKeys, r), T = n.dropTargetDelegate || new n.ListDropTargetDelegate(t, r);
    b = n.useDroppableCollection({
      keyboardDelegate: I,
      dropTargetDelegate: T
    }, p, r), m = p.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: $, isFocused: x, isFocusVisible: C } = xe(), w = {
    isDropTarget: m,
    isEmpty: a.collection.size === 0,
    isFocused: x,
    isFocusVisible: C,
    state: a
  }, A = ne({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-GridList",
    values: w
  }), M = null, v = null;
  if (a.collection.size === 0 && e.renderEmptyState) {
    let I = e.renderEmptyState(w);
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
    }, I));
  }
  return /* @__PURE__ */ g.createElement(aa, null, /* @__PURE__ */ g.createElement("div", {
    ...X(e),
    ...A,
    ..._(i, $, b == null ? void 0 : b.collectionProps, v),
    ref: r,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-drop-target": m || void 0,
    "data-empty": a.collection.size === 0 || void 0,
    "data-focused": x || void 0,
    "data-focus-visible": C || void 0
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Tt,
        a
      ],
      [
        ft,
        {
          dragAndDropHooks: n,
          dragState: f,
          dropState: p
        }
      ],
      [
        Ui,
        {
          render: e2
        }
      ]
    ]
  }, s && /* @__PURE__ */ g.createElement(n2, null), l), M, h));
}
const YD = /* @__PURE__ */ J(ZD);
function JD(e, t) {
  return Dt("item", e, t, e.children);
}
const XD = /* @__PURE__ */ J(JD);
function QD({ item: e }) {
  let t = G(Tt), { dragAndDropHooks: r, dragState: n, dropState: a } = G(ft), i = je(e.props.ref), { rowProps: l, gridCellProps: o, descriptionProps: u, ...s } = pb({
    node: e,
    shouldSelectOnPressUp: !!n
  }, t, i), { hoverProps: d, isHovered: c } = ke({
    isDisabled: !s.allowsSelection && !s.hasAction
  }), { isFocusVisible: f, focusProps: p } = xe(), { checkboxProps: b } = O5({
    key: e.key
  }, t), m = null;
  n && r && (m = r.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, n));
  let h = null, y = N(null), { visuallyHiddenProps: $ } = ar();
  a && r && (h = r.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, a, y));
  let x = e.props, C = n && n.isDragging(e.key), w = ne({
    ...x,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-GridListItem",
    values: {
      ...s,
      isHovered: c,
      isFocusVisible: f,
      selectionMode: t.selectionManager.selectionMode,
      selectionBehavior: t.selectionManager.selectionBehavior,
      allowsDragging: !!n,
      isDragging: C,
      isDropTarget: h == null ? void 0 : h.isDropTarget
    }
  }), A = (r == null ? void 0 : r.renderDropIndicator) || ((v) => /* @__PURE__ */ g.createElement(cu, {
    target: v
  })), M = N(null);
  return te(() => {
    n && !M.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []), te(() => {
    e.textValue || console.warn("A `textValue` prop is required for <GridListItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    e.textValue
  ]), /* @__PURE__ */ g.createElement(g.Fragment, null, (r == null ? void 0 : r.useDropIndicator) && A({
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
    ..._(X(x), l, p, d, m == null ? void 0 : m.dragProps),
    ...w,
    ref: i,
    "data-selected": s.isSelected || void 0,
    "data-disabled": s.isDisabled || void 0,
    "data-hovered": c || void 0,
    "data-focused": s.isFocused || void 0,
    "data-focus-visible": f || void 0,
    "data-pressed": s.isPressed || void 0,
    "data-allows-dragging": !!n || void 0,
    "data-dragging": C || void 0,
    "data-drop-target": (h == null ? void 0 : h.isDropTarget) || void 0,
    "data-selection-mode": t.selectionManager.selectionMode === "none" ? void 0 : t.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement("div", {
    ...o,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Hi,
        {
          slots: {
            selection: b
          }
        }
      ],
      [
        Ct,
        {
          slots: {
            [Zn]: {},
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
        _e,
        {
          slots: {
            description: u
          }
        }
      ]
    ]
  }, w.children))), (r == null ? void 0 : r.useDropIndicator) && t.collection.getKeyAfter(e.key) == null && A({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }));
}
function e2(e, t) {
  t = je(t);
  let { dragAndDropHooks: r, dropState: n } = G(ft), a = N(null), { dropIndicatorProps: i, isHidden: l, isDropTarget: o } = r.useDropIndicator(e, n, a);
  return l ? null : /* @__PURE__ */ g.createElement(r2, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    buttonRef: a,
    ref: t
  });
}
function t2(e, t) {
  let { dropIndicatorProps: r, isDropTarget: n, buttonRef: a, ...i } = e, { visuallyHiddenProps: l } = ar(), o = ne({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: n
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...o,
    role: "row",
    ref: t,
    "data-drop-target": n || void 0
  }, /* @__PURE__ */ g.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ g.createElement("div", {
    ...l,
    role: "button",
    ...r,
    ref: a
  }), o.children));
}
const r2 = /* @__PURE__ */ J(t2);
function n2() {
  let { dragAndDropHooks: e, dropState: t } = G(ft), r = N(null), { dropIndicatorProps: n } = e.useDropIndicator({
    target: {
      type: "root"
    }
  }, t, r), a = t.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: i } = ar();
  return !a && n["aria-hidden"] ? null : /* @__PURE__ */ g.createElement("div", {
    role: "row",
    "aria-hidden": n["aria-hidden"],
    style: {
      position: "absolute"
    }
  }, /* @__PURE__ */ g.createElement("div", {
    role: "gridcell"
  }, /* @__PURE__ */ g.createElement("div", {
    role: "button",
    ...i,
    ...n,
    ref: r
  })));
}
const Yv = /* @__PURE__ */ Z({}), Jv = /* @__PURE__ */ Z(null), ya = /* @__PURE__ */ Z(null), Xv = /* @__PURE__ */ Z(null);
function Qv(e) {
  let { item: t, parentMenuRef: r } = e, n = G(ya);
  return xt({
    items: n.collection.getChildren(t.key),
    children: (i) => {
      switch (i.type) {
        case "item":
          return /* @__PURE__ */ g.createElement(d2, {
            item: i,
            popover: t.rendered[1],
            parentMenuRef: r,
            delay: t.props.delay
          });
        default:
          throw new Error("Unsupported element type in SubmenuTrigger: " + t.type);
      }
    }
  });
}
function a2(e, t) {
  [e, t] = ie(e, t, Jv);
  let { portal: r, collection: n } = ba(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, n.size > 0 && /* @__PURE__ */ g.createElement(i2, {
    props: e,
    collection: n,
    menuRef: t
  }), r);
}
function i2({ props: e, collection: t, menuRef: r }) {
  let n = u6({
    ...e,
    collection: t,
    children: void 0
  }), [a, i] = Y(null), { menuProps: l } = $5(e, n, r), o = G(Xv), u = G(nr), s = xt({
    items: n.collection,
    children: (f) => {
      switch (f.type) {
        case "section":
          return /* @__PURE__ */ g.createElement(o2, {
            section: f,
            parentMenuRef: r
          });
        case "separator":
          return /* @__PURE__ */ g.createElement(Wi, f.props);
        case "item":
          return /* @__PURE__ */ g.createElement(eg, {
            item: f
          });
        case "submenutrigger":
          return /* @__PURE__ */ g.createElement(Qv, {
            item: f,
            parentMenuRef: r
          });
        default:
          throw new Error("Unsupported node type in Menu: " + f.type);
      }
    }
  }), d = (u == null ? void 0 : u.trigger) === "SubmenuTrigger";
  kd({
    ref: r,
    onInteractOutside: (f) => {
      o && !(a != null && a.contains(f.target)) && o.close();
    },
    isDisabled: d || (o == null ? void 0 : o.UNSTABLE_expandedKeysStack.length) === 0
  });
  var c;
  return /* @__PURE__ */ g.createElement(aa, null, /* @__PURE__ */ g.createElement("div", {
    ...X(e),
    ...l,
    ref: r,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    style: e.style,
    className: (c = e.className) !== null && c !== void 0 ? c : "react-aria-Menu"
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        ya,
        n
      ],
      [
        pu,
        {
          elementType: "div"
        }
      ],
      [
        nr,
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
const l2 = /* @__PURE__ */ J(a2);
function o2({ section: e, className: t, style: r, parentMenuRef: n, ...a }) {
  var i, l;
  let o = G(ya), [u, s] = qe();
  var d;
  let { headingProps: c, groupProps: f } = y5({
    heading: s,
    "aria-label": (d = e["aria-label"]) !== null && d !== void 0 ? d : void 0
  }), p = xt({
    items: o.collection.getChildren(e.key),
    children: (b) => {
      switch (b.type) {
        case "header": {
          let { ref: m, ...h } = b.props;
          return /* @__PURE__ */ g.createElement(fu, {
            ...c,
            ...h,
            ref: $i(u, m)
          }, b.rendered);
        }
        case "item":
          return /* @__PURE__ */ g.createElement(eg, {
            item: b
          });
        case "submenutrigger":
          return /* @__PURE__ */ g.createElement(Qv, {
            item: b,
            parentMenuRef: n
          });
        default:
          throw new Error("Unsupported element type in Section: " + b.type);
      }
    }
  });
  return /* @__PURE__ */ g.createElement("section", {
    ...X(a),
    ...f,
    className: t || ((i = e.props) === null || i === void 0 ? void 0 : i.className) || "react-aria-Section",
    style: r || ((l = e.props) === null || l === void 0 ? void 0 : l.style),
    ref: e.props.ref
  }, p);
}
function u2(e, t) {
  return Dt("item", e, t, e.children);
}
const s2 = /* @__PURE__ */ J(u2);
function eg({ item: e }) {
  var t;
  let r = G(ya), n = je(e.props.ref), { menuItemProps: a, labelProps: i, descriptionProps: l, keyboardShortcutProps: o, ...u } = S4({
    key: e.key,
    "aria-label": (t = e.props) === null || t === void 0 ? void 0 : t["aria-label"]
  }, r, n), s = e.props, { isFocusVisible: d, focusProps: c } = xe(), { hoverProps: f, isHovered: p } = ke({
    isDisabled: u.isDisabled
  }), b = ne({
    ...s,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-MenuItem",
    values: {
      ...u,
      isHovered: p,
      isFocusVisible: d,
      selectionMode: r.selectionManager.selectionMode,
      selectionBehavior: r.selectionManager.selectionBehavior,
      hasSubmenu: !1,
      isOpen: !1
    }
  }), m = s.href ? "a" : "div";
  return /* @__PURE__ */ g.createElement(m, {
    ..._(a, c, f),
    ...b,
    ref: n,
    "data-disabled": u.isDisabled || void 0,
    "data-hovered": p || void 0,
    "data-focused": u.isFocused || void 0,
    "data-focus-visible": d || void 0,
    "data-pressed": u.isPressed || void 0,
    "data-selected": u.isSelected || void 0,
    "data-selection-mode": r.selectionManager.selectionMode === "none" ? void 0 : r.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        _e,
        {
          slots: {
            label: i,
            description: l
          }
        }
      ],
      [
        Yv,
        o
      ]
    ]
  }, b.children));
}
function d2({ item: e, popover: t, parentMenuRef: r, delay: n }) {
  let a = G(ya), i = ha(nr), l = je(e.props.ref), o = G(Xv), u = zx({
    triggerKey: e.key
  }, o), s = N(null), { submenuTriggerProps: d, submenuProps: c, popoverProps: f } = E5({
    node: e,
    parentMenuRef: r,
    submenuRef: s,
    delay: n
  }, u, l), { menuItemProps: p, labelProps: b, descriptionProps: m, keyboardShortcutProps: h, ...y } = S4({
    key: e.key,
    ...d
  }, a, l), $ = e.props, { hoverProps: x, isHovered: C } = ke({
    isDisabled: y.isDisabled
  }), { isFocusVisible: w, focusProps: A } = xe(), M = ne({
    ...$,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-MenuItem",
    values: {
      ...y,
      isHovered: C,
      isFocusVisible: w,
      selectionMode: a.selectionManager.selectionMode,
      selectionBehavior: a.selectionManager.selectionBehavior,
      hasSubmenu: !0,
      isOpen: u.isOpen
    }
  });
  return /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        _e,
        {
          slots: {
            label: b,
            description: m
          }
        }
      ],
      [
        Yv,
        h
      ],
      [
        Jv,
        c
      ],
      [
        Lt,
        u
      ],
      [
        nr,
        {
          ref: s,
          trigger: "SubmenuTrigger",
          triggerRef: l,
          placement: "end top",
          UNSTABLE_portalContainer: i.UNSTABLE_portalContainer || void 0,
          ...f
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ..._(p, A, x),
    ...M,
    ref: l,
    "data-disabled": y.isDisabled || void 0,
    "data-hovered": C || void 0,
    "data-focused": y.isFocused || void 0,
    "data-focus-visible": w || void 0,
    "data-pressed": y.isPressed || void 0,
    "data-selected": y.isSelected || void 0,
    "data-selection-mode": a.selectionManager.selectionMode === "none" ? void 0 : a.selectionManager.selectionMode,
    "data-has-submenu": !0,
    "data-open": u.isOpen || void 0
  }, M.children), t);
}
const c2 = /* @__PURE__ */ Z(null);
function f2(e, t) {
  [e, t] = ie(e, t, c2);
  let { value: r = 0, minValue: n = 0, maxValue: a = 100 } = e;
  r = $t(r, n, a);
  let [i, l] = qe(), { meterProps: o, labelProps: u } = j5({
    ...e,
    label: l
  }), s = (r - n) / (a - n) * 100, d = ne({
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
  }, /* @__PURE__ */ g.createElement(Je.Provider, {
    value: {
      ...u,
      ref: i,
      elementType: "span"
    }
  }, d.children));
}
const p2 = /* @__PURE__ */ J(f2), b2 = /* @__PURE__ */ Z(null), gu = /* @__PURE__ */ Z(null);
function m2(e, t) {
  if (G(gu))
    return /* @__PURE__ */ g.createElement(ed, {
      ...e,
      modalRef: t
    }, e.children);
  let { isDismissable: n, isKeyboardDismissDisabled: a, isOpen: i, defaultOpen: l, onOpenChange: o, children: u, isEntering: s, isExiting: d, UNSTABLE_portalContainer: c, ...f } = e;
  return /* @__PURE__ */ g.createElement(tg, {
    isDismissable: n,
    isKeyboardDismissDisabled: a,
    isOpen: i,
    defaultOpen: l,
    onOpenChange: o,
    isEntering: s,
    isExiting: d,
    UNSTABLE_portalContainer: c
  }, /* @__PURE__ */ g.createElement(ed, {
    ...f,
    modalRef: t
  }, u));
}
const h2 = /* @__PURE__ */ J(m2);
function v2(e, t) {
  [e, t] = ie(e, t, b2);
  let r = G(Lt), n = Vr(e), a = e.isOpen != null || e.defaultOpen != null || !r ? n : r, i = je(t), l = N(null), o = vi(i, a.isOpen), u = vi(l, a.isOpen), s = o || u || e.isExiting || !1, d = zt();
  return !a.isOpen && !s || d ? null : /* @__PURE__ */ g.createElement(g2, {
    ...e,
    state: a,
    isExiting: s,
    overlayRef: i,
    modalRef: l
  });
}
const tg = /* @__PURE__ */ J(v2);
function g2({ UNSTABLE_portalContainer: e, ...t }) {
  let r = t.modalRef, { state: n } = t, { modalProps: a, underlayProps: i } = s5(t, n, r), l = zi(t.overlayRef) || t.isEntering || !1, o = ne({
    ...t,
    defaultClassName: "react-aria-ModalOverlay",
    values: {
      isEntering: l,
      isExiting: t.isExiting,
      state: n
    }
  }), u = B$(), s = {
    ...o.style,
    "--visual-viewport-height": u.height + "px"
  };
  return /* @__PURE__ */ g.createElement(Lf, {
    isExiting: t.isExiting,
    portalContainer: e
  }, /* @__PURE__ */ g.createElement("div", {
    ..._(X(t), i),
    ...o,
    style: s,
    ref: t.overlayRef,
    "data-entering": l || void 0,
    "data-exiting": t.isExiting || void 0
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        gu,
        {
          modalProps: a,
          modalRef: r,
          isExiting: t.isExiting,
          isDismissable: t.isDismissable
        }
      ],
      [
        Lt,
        n
      ]
    ]
  }, o.children)));
}
function ed(e) {
  let { modalProps: t, modalRef: r, isExiting: n, isDismissable: a } = G(gu), i = G(Lt), l = z(() => $i(e.modalRef, r), [
    e.modalRef,
    r
  ]), o = je(l), u = zi(o), s = ne({
    ...e,
    defaultClassName: "react-aria-Modal",
    values: {
      isEntering: u,
      isExiting: n,
      state: i
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ..._(X(e), t),
    ...s,
    ref: o,
    "data-entering": u || void 0,
    "data-exiting": n || void 0
  }, a && /* @__PURE__ */ g.createElement(Jl, {
    onDismiss: i.close
  }), s.children);
}
const $2 = /* @__PURE__ */ Z(null), y2 = /* @__PURE__ */ Z(null);
function x2(e, t) {
  [e, t] = ie(e, t, $2);
  let { locale: r } = be();
  var n;
  let a = Vx({
    ...e,
    locale: r,
    validationBehavior: (n = e.validationBehavior) !== null && n !== void 0 ? n : "native"
  }), i = N(null), [l, o] = qe();
  var u;
  let { labelProps: s, groupProps: d, inputProps: c, incrementButtonProps: f, decrementButtonProps: p, descriptionProps: b, errorMessageProps: m, ...h } = H5({
    ...yt(e),
    label: o,
    validationBehavior: (u = e.validationBehavior) !== null && u !== void 0 ? u : "native"
  }, a, i), y = ne({
    ...e,
    values: {
      state: a,
      isDisabled: e.isDisabled || !1,
      isInvalid: h.isInvalid || !1
    },
    defaultClassName: "react-aria-NumberField"
  }), $ = X(e);
  return delete $.id, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        y2,
        a
      ],
      [
        ir,
        d
      ],
      [
        yr,
        {
          ...c,
          ref: i
        }
      ],
      [
        Je,
        {
          ...s,
          ref: l
        }
      ],
      [
        Ct,
        {
          slots: {
            increment: f,
            decrement: p
          }
        }
      ],
      [
        _e,
        {
          slots: {
            description: b,
            errorMessage: m
          }
        }
      ],
      [
        ct,
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
const D2 = /* @__PURE__ */ J(x2), C2 = /* @__PURE__ */ Z(null);
function E2(e, t) {
  [e, t] = ie(e, t, C2);
  let { value: r = 0, minValue: n = 0, maxValue: a = 100, isIndeterminate: i = !1 } = e;
  r = $t(r, n, a);
  let [l, o] = qe(), { progressBarProps: u, labelProps: s } = bb({
    ...e,
    label: o
  }), d = i ? void 0 : (r - n) / (a - n) * 100, c = ne({
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
  }, /* @__PURE__ */ g.createElement(Je.Provider, {
    value: {
      ...s,
      ref: l,
      elementType: "span"
    }
  }, c.children));
}
const P2 = /* @__PURE__ */ J(E2), w2 = /* @__PURE__ */ Z(null), S2 = /* @__PURE__ */ Z(null), rg = /* @__PURE__ */ Z(null);
function B2(e, t) {
  [e, t] = ie(e, t, w2);
  var r;
  let n = jx({
    ...e,
    validationBehavior: (r = e.validationBehavior) !== null && r !== void 0 ? r : "native"
  }), [a, i] = qe();
  var l;
  let { radioGroupProps: o, labelProps: u, descriptionProps: s, errorMessageProps: d, ...c } = W5({
    ...e,
    label: i,
    validationBehavior: (l = e.validationBehavior) !== null && l !== void 0 ? l : "native"
  }, n), f = ne({
    ...e,
    values: {
      orientation: e.orientation || "vertical",
      isDisabled: n.isDisabled,
      isReadOnly: n.isReadOnly,
      isRequired: n.isRequired,
      isInvalid: n.isInvalid,
      state: n
    },
    defaultClassName: "react-aria-RadioGroup"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...o,
    ...f,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "vertical",
    "data-invalid": n.isInvalid || void 0,
    "data-disabled": n.isDisabled || void 0,
    "data-readonly": n.isReadOnly || void 0,
    "data-required": n.isRequired || void 0
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        rg,
        n
      ],
      [
        Je,
        {
          ...u,
          ref: a,
          elementType: "span"
        }
      ],
      [
        _e,
        {
          slots: {
            description: s,
            errorMessage: d
          }
        }
      ],
      [
        ct,
        c
      ]
    ]
  }, f.children));
}
function k2(e, t) {
  [e, t] = ie(e, t, S2);
  let r = g.useContext(rg), n = N(null), { labelProps: a, inputProps: i, isSelected: l, isDisabled: o, isPressed: u } = U5({
    ...yt(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, r, n), { isFocused: s, isFocusVisible: d, focusProps: c } = xe(), f = o || r.isReadOnly, { hoverProps: p, isHovered: b } = ke({
    ...e,
    isDisabled: f
  }), m = ne({
    ...e,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: l,
      isPressed: u,
      isHovered: b,
      isFocused: s,
      isFocusVisible: d,
      isDisabled: o,
      isReadOnly: r.isReadOnly,
      isInvalid: r.isInvalid,
      isRequired: r.isRequired
    }
  }), h = X(e);
  return delete h.id, /* @__PURE__ */ g.createElement("label", {
    ..._(h, a, p, m),
    ref: t,
    "data-selected": l || void 0,
    "data-pressed": u || void 0,
    "data-hovered": b || void 0,
    "data-focused": s || void 0,
    "data-focus-visible": d || void 0,
    "data-disabled": o || void 0,
    "data-readonly": r.isReadOnly || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-required": r.isRequired || void 0
  }, /* @__PURE__ */ g.createElement(rr, {
    elementType: "span"
  }, /* @__PURE__ */ g.createElement("input", {
    ..._(i, c),
    ref: n
  })), m.children);
}
const F2 = /* @__PURE__ */ J(B2), A2 = /* @__PURE__ */ J(k2), T2 = /* @__PURE__ */ Z(null);
function R2(e, t) {
  [e, t] = ie(e, t, T2);
  let r = N(null), [n, a] = qe();
  var i;
  let l = _x({
    ...e,
    validationBehavior: (i = e.validationBehavior) !== null && i !== void 0 ? i : "native"
  });
  var o;
  let { labelProps: u, inputProps: s, clearButtonProps: d, descriptionProps: c, errorMessageProps: f, ...p } = Z5({
    ...yt(e),
    label: a,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, l, r), b = ne({
    ...e,
    values: {
      isEmpty: l.value === "",
      isDisabled: e.isDisabled || !1,
      isInvalid: p.isInvalid || !1,
      state: l
    },
    defaultClassName: "react-aria-SearchField"
  }), m = X(e);
  return delete m.id, /* @__PURE__ */ g.createElement("div", {
    ...m,
    ...b,
    ref: t,
    slot: e.slot || void 0,
    "data-empty": l.value === "" || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": p.isInvalid || void 0
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Je,
        {
          ...u,
          ref: n
        }
      ],
      [
        yr,
        {
          ...s,
          ref: r
        }
      ],
      [
        Ct,
        d
      ],
      [
        _e,
        {
          slots: {
            description: c,
            errorMessage: f
          }
        }
      ],
      [
        ir,
        {
          isInvalid: p.isInvalid,
          isDisabled: e.isDisabled || !1
        }
      ],
      [
        ct,
        p
      ]
    ]
  }, b.children));
}
const M2 = /* @__PURE__ */ J(R2), Wa = /* @__PURE__ */ Z(null), co = /* @__PURE__ */ Z(null);
function I2(e, t) {
  [e, t] = ie(e, t, Wa);
  let { collection: r, document: n } = ma();
  var a;
  let i = Hx({
    ...e,
    collection: r,
    children: void 0,
    validationBehavior: (a = e.validationBehavior) !== null && a !== void 0 ? a : "native"
  }), { isFocusVisible: l, focusProps: o } = xe({
    within: !0
  }), u = N(null), [s, d] = qe();
  var c;
  let { labelProps: f, triggerProps: p, valueProps: b, menuProps: m, descriptionProps: h, errorMessageProps: y, ...$ } = q5({
    ...yt(e),
    label: d,
    validationBehavior: (c = e.validationBehavior) !== null && c !== void 0 ? c : "native"
  }, i, u), [x, C] = Y(null), w = re(() => {
    u.current && C(u.current.offsetWidth + "px");
  }, [
    u
  ]);
  ta({
    ref: u,
    onResize: w
  });
  let A = z(() => ({
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
  ]), M = ne({
    ...e,
    values: A,
    defaultClassName: "react-aria-Select"
  }), v = X(e);
  return delete v.id, /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(uu, null, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Wa,
        e
      ],
      [
        co,
        i
      ],
      [
        Lr,
        n
      ]
    ]
  }, M.children)), /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Wa,
        e
      ],
      [
        co,
        i
      ],
      [
        ng,
        b
      ],
      [
        Je,
        {
          ...f,
          ref: s,
          elementType: "span"
        }
      ],
      [
        Ct,
        {
          ...p,
          ref: u,
          isPressed: i.isOpen
        }
      ],
      [
        Lt,
        i
      ],
      [
        nr,
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
        ga,
        m
      ],
      [
        Tt,
        i
      ],
      [
        _e,
        {
          slots: {
            description: h,
            errorMessage: y
          }
        }
      ],
      [
        ct,
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
  }), /* @__PURE__ */ g.createElement(J5, {
    state: i,
    triggerRef: u,
    label: d,
    name: e.name,
    isDisabled: e.isDisabled
  })));
}
const N2 = /* @__PURE__ */ J(I2), ng = /* @__PURE__ */ Z(null);
function K2(e, t) {
  var r, n;
  [e, t] = ie(e, t, ng);
  let a = G(co), { placeholder: i } = ha(Wa), l = a.selectedKey != null ? a.collection.getItem(a.selectedKey) : null, o = l == null ? void 0 : l.rendered;
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
  let u = Te(/* @__PURE__ */ Wh(vu), "react-aria-components");
  var s, d;
  let c = ne({
    ...e,
    defaultChildren: o || i || u.format("selectPlaceholder"),
    defaultClassName: "react-aria-SelectValue",
    values: {
      selectedItem: (s = (r = a.selectedItem) === null || r === void 0 ? void 0 : r.value) !== null && s !== void 0 ? s : null,
      selectedText: (d = (n = a.selectedItem) === null || n === void 0 ? void 0 : n.textValue) !== null && d !== void 0 ? d : null,
      isPlaceholder: !l
    }
  }), f = X(e);
  return /* @__PURE__ */ g.createElement("span", {
    ref: t,
    ...f,
    ...c,
    "data-placeholder": !l || void 0
  }, /* @__PURE__ */ g.createElement(_e.Provider, {
    value: void 0
  }, c.children));
}
const z2 = /* @__PURE__ */ J(K2), V2 = /* @__PURE__ */ Z(null), qi = /* @__PURE__ */ Z(null), $u = /* @__PURE__ */ Z(null), ag = /* @__PURE__ */ Z(null);
function L2(e, t) {
  [e, t] = ie(e, t, V2);
  let r = N(null), n = fi(e.formatOptions), a = Zx({
    ...e,
    numberFormatter: n
  }), [i, l] = qe(), { groupProps: o, trackProps: u, labelProps: s, outputProps: d } = Q5({
    ...e,
    label: l
  }, a, r), c = ne({
    ...e,
    values: {
      orientation: a.orientation,
      isDisabled: a.isDisabled,
      state: a
    },
    defaultClassName: "react-aria-Slider"
  }), f = X(e);
  return delete f.id, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        qi,
        a
      ],
      [
        $u,
        {
          ...u,
          ref: r
        }
      ],
      [
        ag,
        d
      ],
      [
        Je,
        {
          ...s,
          ref: i
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement("div", {
    ...f,
    ...o,
    ...c,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": a.orientation,
    "data-disabled": a.isDisabled || void 0
  }));
}
const O2 = /* @__PURE__ */ J(L2);
function j2(e, t) {
  [e, t] = ie(e, t, ag);
  let { children: r, style: n, className: a, ...i } = e, l = G(qi), o = ne({
    className: a,
    style: n,
    children: r,
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
const _2 = /* @__PURE__ */ J(j2);
function H2(e, t) {
  [e, t] = ie(e, t, $u);
  let r = G(qi), { onHoverStart: n, onHoverEnd: a, onHoverChange: i, ...l } = e, { hoverProps: o, isHovered: u } = ke({
    onHoverStart: n,
    onHoverEnd: a,
    onHoverChange: i
  }), s = ne({
    ...e,
    defaultClassName: "react-aria-SliderTrack",
    values: {
      orientation: r.orientation,
      isDisabled: r.isDisabled,
      isHovered: u,
      state: r
    }
  });
  return /* @__PURE__ */ g.createElement("div", {
    ..._(l, o),
    ...s,
    ref: t,
    "data-hovered": u || void 0,
    "data-orientation": r.orientation || void 0,
    "data-disabled": r.isDisabled || void 0
  });
}
const U2 = /* @__PURE__ */ J(H2);
function W2(e, t) {
  let r = G(qi), { ref: n } = ha($u), { index: a = 0 } = e, i = N(null), [l, o] = qe(), { thumbProps: u, inputProps: s, labelProps: d, isDragging: c, isFocused: f, isDisabled: p } = ex({
    ...e,
    index: a,
    trackRef: n,
    inputRef: i,
    label: o
  }, r), { focusProps: b, isFocusVisible: m } = xe(), { hoverProps: h, isHovered: y } = ke(e), $ = ne({
    ...e,
    defaultClassName: "react-aria-SliderThumb",
    values: {
      state: r,
      isHovered: y,
      isDragging: c,
      isFocused: f,
      isFocusVisible: m,
      isDisabled: p
    }
  }), x = X(e);
  return delete x.id, /* @__PURE__ */ g.createElement("div", {
    ..._(x, u, h),
    ...$,
    ref: t,
    style: {
      ...u.style,
      ...$.style
    },
    "data-hovered": y || void 0,
    "data-dragging": c || void 0,
    "data-focused": f || void 0,
    "data-focus-visible": m || void 0,
    "data-disabled": p || void 0
  }, /* @__PURE__ */ g.createElement(rr, null, /* @__PURE__ */ g.createElement("input", {
    ref: i,
    ..._(s, b)
  })), /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Je,
        {
          ...d,
          ref: l
        }
      ]
    ]
  }, $.children));
}
const G2 = /* @__PURE__ */ J(W2), Z2 = /* @__PURE__ */ Z(null);
function q2(e, t) {
  [e, t] = ie(e, t, Z2);
  let r = N(null), n = Fi(e), { labelProps: a, inputProps: i, isSelected: l, isDisabled: o, isReadOnly: u, isPressed: s } = tx({
    ...yt(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, n, r), { isFocused: d, isFocusVisible: c, focusProps: f } = xe(), p = e.isDisabled || e.isReadOnly, { hoverProps: b, isHovered: m } = ke({
    ...e,
    isDisabled: p
  }), h = ne({
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
      state: n
    }
  }), y = X(e);
  return delete y.id, /* @__PURE__ */ g.createElement("label", {
    ..._(y, a, b, h),
    ref: t,
    slot: e.slot || void 0,
    "data-selected": l || void 0,
    "data-pressed": s || void 0,
    "data-hovered": m || void 0,
    "data-focused": d || void 0,
    "data-focus-visible": c || void 0,
    "data-disabled": o || void 0,
    "data-readonly": u || void 0
  }, /* @__PURE__ */ g.createElement(rr, {
    elementType: "span"
  }, /* @__PURE__ */ g.createElement("input", {
    ...i,
    ...f,
    ref: r
  })), h.children);
}
const Y2 = /* @__PURE__ */ J(q2);
class J2 extends Zh {
  addNode(t) {
    super.addNode(t), this.columnsDirty || (this.columnsDirty = t.type === "column"), t.type === "tableheader" && (this.head = t), t.type === "tablebody" && (this.body = t);
  }
  commit(t, r, n = !1) {
    this.updateColumns(n), super.commit(t, r, n);
  }
  updateColumns(t) {
    if (!this.columnsDirty)
      return;
    this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.columns = [];
    let r = /* @__PURE__ */ new Map(), n = (a) => {
      switch (a.type) {
        case "column":
          r.set(a.key, a), a.hasChildNodes || (a.index = this.columns.length, this.columns.push(a), a.props.isRowHeader && this.rowHeaderColumnKeys.add(a.key));
          break;
      }
      for (let i of this.getChildren(a.key))
        n(i);
    };
    for (let a of this.getChildren(this.head.key))
      n(a);
    if (this.headerRows = Hh(r, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !t)
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
    let r = [
      ...this.getChildren(this.body.key)
    ];
    return (t = r[r.length - 1]) === null || t === void 0 ? void 0 : t.key;
  }
  getKeyAfter(t) {
    let r = this.getItem(t);
    var n;
    return (r == null ? void 0 : r.type) === "column" ? (n = r.nextKey) !== null && n !== void 0 ? n : null : super.getKeyAfter(t);
  }
  getKeyBefore(t) {
    var r;
    let n = this.getItem(t);
    var a;
    if ((n == null ? void 0 : n.type) === "column")
      return (a = n.prevKey) !== null && a !== void 0 ? a : null;
    let i = super.getKeyBefore(t);
    return i != null && ((r = this.getItem(i)) === null || r === void 0 ? void 0 : r.type) === "tablebody" ? null : i;
  }
  getChildren(t) {
    if (!this.getItem(t)) {
      for (let r of this.headerRows)
        if (r.key === t)
          return r.childNodes;
    }
    return super.getChildren(t);
  }
  clone() {
    let t = super.clone();
    return t.headerRows = this.headerRows, t.columns = this.columns, t.rowHeaderColumnKeys = this.rowHeaderColumnKeys, t.head = this.head, t.body = this.body, t;
  }
  getTextValue(t) {
    let r = this.getItem(t);
    if (!r)
      return "";
    if (r.textValue)
      return r.textValue;
    let n = this.rowHeaderColumnKeys, a = [];
    for (let i of this.getChildren(t)) {
      let l = this.columns[i.index];
      if (n.has(l.key) && i.textValue && a.push(i.textValue), a.length === n.size)
        break;
    }
    return a.join(" ");
  }
  constructor(...t) {
    super(...t), this.headerRows = [], this.columns = [], this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.head = new Wn("tableheader", -1), this.body = new Wn("tablebody", -2), this.columnsDirty = !0;
  }
}
const yu = /* @__PURE__ */ Z(null);
function X2(e, t) {
  let r = je(t), [n, a] = Y(0);
  ta({
    ref: r,
    onResize() {
      var l, o;
      a((o = (l = r.current) === null || l === void 0 ? void 0 : l.clientWidth) !== null && o !== void 0 ? o : 0);
    }
  }), ge(() => {
    var l, o;
    a((o = (l = r.current) === null || l === void 0 ? void 0 : l.clientWidth) !== null && o !== void 0 ? o : 0);
  }, [
    r
  ]);
  let i = z(() => ({
    tableWidth: n,
    useTableColumnResizeState: Qx,
    onResizeStart: e.onResizeStart,
    onResize: e.onResize,
    onResizeEnd: e.onResizeEnd
  }), [
    n,
    e.onResizeStart,
    e.onResize,
    e.onResizeEnd
  ]);
  return /* @__PURE__ */ g.createElement("div", {
    ...X(e),
    ref: r,
    className: e.className || "react-aria-ResizableTableContainer",
    style: e.style,
    onScroll: e.onScroll
  }, /* @__PURE__ */ g.createElement(yu.Provider, {
    value: i
  }, e.children));
}
const Q2 = /* @__PURE__ */ J(X2), e7 = /* @__PURE__ */ Z(null), xr = /* @__PURE__ */ Z(null), xu = /* @__PURE__ */ Z(null);
function t7(e, t) {
  [e, t] = ie(e, t, e7);
  let r = z(() => new J2(), []), { portal: n, collection: a } = ba(e, r), i = r6({
    ...e,
    collection: a,
    children: void 0
  }), { gridProps: l } = ax(e, i, t), { dragAndDropHooks: o } = e, u = i.selectionManager, s = !!(o != null && o.useDraggableCollectionState), d = !!(o != null && o.useDroppableCollectionState), c = N(s), f = N(d);
  te(() => {
    c.current !== s && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), f.current !== d && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  }, [
    s,
    d
  ]);
  let p, b, m, h = !1, y = null, $ = N(null);
  if (s && o) {
    p = o.useDraggableCollectionState({
      collection: a,
      selectionManager: u,
      preview: o.renderDragPreview ? $ : void 0
    }), o.useDraggableCollection({}, p, t);
    let F = o.DragPreview;
    y = o.renderDragPreview ? /* @__PURE__ */ g.createElement(F, {
      ref: $
    }, o.renderDragPreview) : null;
  }
  if (d && o) {
    b = o.useDroppableCollectionState({
      collection: a,
      selectionManager: u
    });
    let F = new zr(a, u.disabledBehavior === "selection" ? /* @__PURE__ */ new Set() : u.disabledKeys, t), V = o.dropTargetDelegate || new o.ListDropTargetDelegate(a, t);
    m = o.useDroppableCollection({
      keyboardDelegate: F,
      dropTargetDelegate: V
    }, b, t), h = b.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: x, isFocused: C, isFocusVisible: w } = xe(), A = ne({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: h,
      isFocused: C,
      isFocusVisible: w,
      state: i
    }
  }), { selectionBehavior: M, selectionMode: v, disallowEmptySelection: I } = i.selectionManager, T = z(() => ({
    selectionBehavior: v === "none" ? null : M,
    selectionMode: v,
    disallowEmptySelection: I,
    allowsDragging: s
  }), [
    M,
    v,
    I,
    s
  ]), E = A.style, B = G(yu), S = null;
  return B && (S = B.useTableColumnResizeState({
    tableWidth: B.tableWidth
  }, i), E = {
    ...E,
    tableLayout: "fixed",
    width: "fit-content"
  }), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(ig.Provider, {
    value: T
  }, n), /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        xr,
        i
      ],
      [
        xu,
        S
      ],
      [
        ft,
        {
          dragAndDropHooks: o,
          dragState: p,
          dropState: b
        }
      ],
      [
        Ui,
        {
          render: g7
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement(aa, null, /* @__PURE__ */ g.createElement("table", {
    ...X(e),
    ...A,
    ..._(l, x, m == null ? void 0 : m.collectionProps),
    style: E,
    ref: t,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-allows-dragging": s || void 0,
    "data-drop-target": h || void 0,
    "data-focused": C || void 0,
    "data-focus-visible": w || void 0
  }, /* @__PURE__ */ g.createElement(d7, {
    collection: a
  }), /* @__PURE__ */ g.createElement(c7, {
    collection: a,
    isDroppable: d
  }))), y));
}
const r7 = /* @__PURE__ */ J(t7), ig = /* @__PURE__ */ Z(null);
function lg() {
  return G(ig);
}
function n7(e, t) {
  let r = pa({
    children: e.children,
    items: e.columns,
    dependencies: e.dependencies
  }), n = typeof e.children == "function" ? e.children : null;
  return /* @__PURE__ */ g.createElement(Qh.Provider, {
    value: n
  }, Dt("tableheader", e, t, null, r));
}
const a7 = /* @__PURE__ */ J(n7);
function i7(e, t) {
  return Dt("column", e, t, e.children);
}
const og = /* @__PURE__ */ J(i7);
function l7(e, t) {
  let r = [
    e.value
  ].concat(e.dependencies), n = pa({
    dependencies: r,
    children: e.children,
    items: e.columns,
    idScope: e.id
  }), a = z(() => ({
    idScope: e.id,
    dependencies: r
  }), [
    e.id,
    ...r
  ]);
  return Dt("item", e, t, null, /* @__PURE__ */ g.createElement(Xh.Provider, {
    value: a
  }, n));
}
const o7 = /* @__PURE__ */ J(l7);
function u7(e, t) {
  return Dt("cell", e, t, e.children);
}
const s7 = /* @__PURE__ */ J(u7);
function d7({ collection: e }) {
  let t = xt({
    items: e.headerRows,
    children: re((a) => {
      switch (a.type) {
        case "headerrow":
          return /* @__PURE__ */ g.createElement(f7, {
            item: a
          });
        default:
          throw new Error("Unsupported node type in TableHeader: " + a.type);
      }
    }, [])
  }), { rowGroupProps: r } = h3();
  var n;
  return /* @__PURE__ */ g.createElement("thead", {
    ...X(e.head.props),
    ...r,
    ref: e.head.props.ref,
    className: (n = e.head.props.className) !== null && n !== void 0 ? n : "react-aria-TableHeader",
    style: e.head.props.style
  }, t);
}
function c7(e) {
  let { collection: t, isDroppable: r } = e, n = xt({
    items: t.rows,
    children: re((p) => {
      switch (p.type) {
        case "item":
          return /* @__PURE__ */ g.createElement(h7, {
            item: p
          });
        default:
          throw new Error("Unsupported node type in TableBody: " + p.type);
      }
    }, [])
  }), a = G(xr), { dropState: i } = G(ft);
  var l;
  let o = r && !!i && ((l = i.isDropTarget({
    type: "root"
  })) !== null && l !== void 0 ? l : !1), u = t.body.props, s = {
    isDropTarget: o,
    isEmpty: t.size === 0
  }, d = ne({
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
  let { rowGroupProps: f } = h3();
  return /* @__PURE__ */ g.createElement("tbody", {
    ..._(X(u), f),
    ...d,
    ref: t.body.props.ref,
    "data-empty": t.size === 0 || void 0
  }, r && /* @__PURE__ */ g.createElement(x7, null), n, c);
}
function f7({ item: e }) {
  let t = N(null), r = G(xr), { rowProps: n } = ox({
    node: e
  }, r, t), { checkboxProps: a } = dx(r), i = xt({
    items: r.collection.getChildren(e.key),
    children: (l) => {
      switch (l.type) {
        case "column":
          return /* @__PURE__ */ g.createElement(p7, {
            column: l
          });
        default:
          throw new Error("Unsupported node type in Row: " + l.type);
      }
    }
  });
  return /* @__PURE__ */ g.createElement("tr", {
    ...n,
    ref: t
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Hi,
        {
          slots: {
            selection: a
          }
        }
      ]
    ]
  }, i));
}
const ug = /* @__PURE__ */ Z(null);
function p7({ column: e }) {
  var t, r;
  let n = je(e.props.ref), a = G(xr), { columnHeaderProps: i } = ix({
    node: e
  }, a, n), { isFocused: l, isFocusVisible: o, focusProps: u } = xe(), s = G(xu), d = !1;
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
  let c = e.props, { hoverProps: f, isHovered: p } = ke({
    isDisabled: !c.allowsSorting
  }), b = ne({
    ...c,
    id: void 0,
    children: e.rendered,
    defaultClassName: "react-aria-Column",
    values: {
      isHovered: p,
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
    ..._(X(c), i, u, f),
    ...b,
    style: m,
    colSpan: e.colspan,
    ref: n,
    "data-hovered": p || void 0,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    "data-resizing": d || void 0,
    "data-allows-sorting": e.props.allowsSorting || void 0,
    "data-sort-direction": ((r = a.sortDescriptor) === null || r === void 0 ? void 0 : r.column) === e.key ? a.sortDescriptor.direction : void 0
  }, /* @__PURE__ */ g.createElement(ug.Provider, {
    value: {
      column: e,
      triggerRef: n
    }
  }, b.children));
}
function b7(e, t) {
  let r = G(xu);
  if (!r)
    throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
  let n = Te(/* @__PURE__ */ Wh(vu), "react-aria-components"), { onResizeStart: a, onResize: i, onResizeEnd: l } = G(yu), { column: o, triggerRef: u } = G(ug), s = N(null), { resizerProps: d, inputProps: c, isResizing: f } = cx({
    column: o,
    "aria-label": e["aria-label"] || n.format("tableResizer"),
    onResizeStart: a,
    onResize: i,
    onResizeEnd: l,
    triggerRef: u
  }, r, s), { focusProps: p, isFocused: b, isFocusVisible: m } = xe(), { hoverProps: h, isHovered: y } = ke(e), $ = r.getColumnMinWidth(o.key) >= r.getColumnWidth(o.key), x = r.getColumnMaxWidth(o.key) <= r.getColumnWidth(o.key), { direction: C } = be(), w = "both";
  $ ? w = C === "rtl" ? "right" : "left" : x ? w = C === "rtl" ? "left" : "right" : w = "both";
  let A = je(t), [M, v] = Y("");
  te(() => {
    if (!A.current)
      return;
    let S = window.getComputedStyle(A.current);
    v(S.cursor);
  }, [
    A,
    w
  ]);
  let I = ne({
    ...e,
    defaultClassName: "react-aria-ColumnResizer",
    values: {
      isFocused: b,
      isFocusVisible: m,
      isResizing: f,
      isHovered: y,
      resizableDirection: w
    }
  }), [T, E] = Y(!1), B = (S) => {
    S.pointerType === "mouse" && E(!0);
  };
  return !f && T && E(!1), /* @__PURE__ */ g.createElement("div", {
    ref: A,
    role: "presentation",
    ...I,
    ..._(d, {
      onPointerDown: B
    }, h),
    "data-hovered": y || void 0,
    "data-focused": b || void 0,
    "data-focus-visible": m || void 0,
    "data-resizing": f || void 0,
    "data-resizable-direction": w
  }, I.children, /* @__PURE__ */ g.createElement("input", {
    ref: s,
    ..._(c, p)
  }), f && T && /* @__PURE__ */ Qn.createPortal(/* @__PURE__ */ g.createElement("div", {
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
const m7 = /* @__PURE__ */ J(b7);
function h7({ item: e }) {
  let t = je(e.props.ref), r = G(xr), { dragAndDropHooks: n, dragState: a, dropState: i } = G(ft), { rowProps: l, ...o } = lx({
    node: e,
    shouldSelectOnPressUp: !!a
  }, r, t), { isFocused: u, isFocusVisible: s, focusProps: d } = xe(), { hoverProps: c, isHovered: f } = ke({
    isDisabled: !o.allowsSelection && !o.hasAction
  }), { checkboxProps: p } = sx({
    key: e.key
  }, r), b;
  a && n && (b = n.useDraggableItem({
    key: e.key,
    hasDragButton: !0
  }, a));
  let m, h = N(null), { visuallyHiddenProps: y } = ar();
  i && n && (m = n.useDropIndicator({
    target: {
      type: "item",
      key: e.key,
      dropPosition: "on"
    }
  }, i, h));
  let $ = (n == null ? void 0 : n.renderDropIndicator) || ((T) => /* @__PURE__ */ g.createElement(cu, {
    target: T
  })), x = N(null);
  te(() => {
    a && !x.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []);
  let C = e.props, w = a && a.isDragging(e.key), { children: A, ...M } = C, v = ne({
    ...M,
    id: void 0,
    defaultClassName: "react-aria-Row",
    values: {
      ...o,
      isHovered: f,
      isFocused: u,
      isFocusVisible: s,
      selectionMode: r.selectionManager.selectionMode,
      selectionBehavior: r.selectionManager.selectionBehavior,
      isDragging: w,
      isDropTarget: m == null ? void 0 : m.isDropTarget
    }
  }), I = xt({
    items: r.collection.getChildren(e.key),
    children: (T) => {
      switch (T.type) {
        case "cell":
          return /* @__PURE__ */ g.createElement(v7, {
            cell: T
          });
        default:
          throw new Error("Unsupported node type in Row: " + T.type);
      }
    }
  });
  return /* @__PURE__ */ g.createElement(g.Fragment, null, (n == null ? void 0 : n.useDropIndicator) && $({
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
    colSpan: r.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ g.createElement("div", {
    role: "button",
    ...y,
    ...m.dropIndicatorProps,
    ref: h
  }))), /* @__PURE__ */ g.createElement("tr", {
    ..._(X(C), l, d, c, b == null ? void 0 : b.dragProps),
    ...v,
    ref: t,
    "data-disabled": o.isDisabled || void 0,
    "data-selected": o.isSelected || void 0,
    "data-hovered": f || void 0,
    "data-focused": o.isFocused || void 0,
    "data-focus-visible": s || void 0,
    "data-pressed": o.isPressed || void 0,
    "data-dragging": w || void 0,
    "data-drop-target": (m == null ? void 0 : m.isDropTarget) || void 0,
    "data-selection-mode": r.selectionManager.selectionMode === "none" ? void 0 : r.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Hi,
        {
          slots: {
            selection: p
          }
        }
      ],
      [
        Ct,
        {
          slots: {
            [Zn]: {},
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
  }, I)), (n == null ? void 0 : n.useDropIndicator) && r.collection.getKeyAfter(e.key) == null && $({
    type: "item",
    key: e.key,
    dropPosition: "after"
  }));
}
function v7({ cell: e }) {
  let t = je(e.props.ref), r = G(xr), { dragState: n } = G(ft);
  e.column = r.collection.columns[e.index];
  let { gridCellProps: a, isPressed: i } = ux({
    node: e,
    shouldSelectOnPressUp: !!n
  }, r, t), { isFocused: l, isFocusVisible: o, focusProps: u } = xe(), { hoverProps: s, isHovered: d } = ke({}), c = e.props, f = ne({
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
    ..._(X(c), a, u, s),
    ...f,
    ref: t,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    "data-pressed": i || void 0
  }, f.children);
}
function g7(e, t) {
  t = je(t);
  let { dragAndDropHooks: r, dropState: n } = G(ft), a = N(null), { dropIndicatorProps: i, isHidden: l, isDropTarget: o } = r.useDropIndicator(e, n, a);
  return l ? null : /* @__PURE__ */ g.createElement(y7, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    buttonRef: a,
    ref: t
  });
}
function $7(e, t) {
  let { dropIndicatorProps: r, isDropTarget: n, buttonRef: a, ...i } = e, l = G(xr), { visuallyHiddenProps: o } = ar(), u = ne({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: n
    }
  });
  return /* @__PURE__ */ g.createElement("tr", {
    ...X(e),
    ...u,
    role: "row",
    ref: t,
    "data-drop-target": n || void 0
  }, /* @__PURE__ */ g.createElement("td", {
    role: "gridcell",
    colSpan: l.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ g.createElement("div", {
    ...o,
    role: "button",
    ...r,
    ref: a
  }), u.children));
}
const y7 = /* @__PURE__ */ J($7);
function x7() {
  let e = G(xr), { dragAndDropHooks: t, dropState: r } = G(ft), n = N(null), { dropIndicatorProps: a } = t.useDropIndicator({
    target: {
      type: "root"
    }
  }, r, n), i = r.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: l } = ar();
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
    ref: n
  })));
}
const Du = /* @__PURE__ */ Z(null), Cu = /* @__PURE__ */ Z(null);
function D7(e, t) {
  [e, t] = ie(e, t, Du);
  let { collection: r, document: n } = ma(), { children: a, orientation: i = "horizontal" } = e;
  return a = z(() => typeof a == "function" ? a({
    orientation: i
  }) : a, [
    a,
    i
  ]), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(uu, null, /* @__PURE__ */ g.createElement(Lr.Provider, {
    value: n
  }, a)), /* @__PURE__ */ g.createElement(C7, {
    props: e,
    collection: r,
    tabsRef: t
  }));
}
function C7({ props: e, tabsRef: t, collection: r }) {
  let { orientation: n = "horizontal" } = e, a = n6({
    ...e,
    collection: r,
    children: void 0
  }), { focusProps: i, isFocused: l, isFocusVisible: o } = xe({
    within: !0
  }), u = z(() => ({
    orientation: n,
    isFocusWithin: l,
    isFocusVisible: o
  }), [
    n,
    l,
    o
  ]), s = ne({
    ...e,
    defaultClassName: "react-aria-Tabs",
    values: u
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...X(e),
    ...i,
    ...s,
    ref: t,
    slot: e.slot || void 0,
    "data-focused": l || void 0,
    "data-orientation": n,
    "data-focus-visible": o || void 0,
    "data-disabled": a.isDisabled || void 0
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Du,
        e
      ],
      [
        Cu,
        a
      ]
    ]
  }, s.children));
}
const E7 = /* @__PURE__ */ J(D7);
function P7(e, t) {
  return G(Lr) ? /* @__PURE__ */ g.createElement(Yh, e) : /* @__PURE__ */ g.createElement(w7, {
    props: e,
    forwardedRef: t
  });
}
function w7({ props: e, forwardedRef: t }) {
  let r = G(Cu), { orientation: n = "horizontal", keyboardActivation: a = "automatic" } = ha(Du), i = je(t), { tabListProps: l } = mx({
    ...e,
    orientation: n,
    keyboardActivation: a
  }, r, i), o = ne({
    ...e,
    children: null,
    defaultClassName: "react-aria-TabList",
    values: {
      orientation: n,
      state: r
    }
  }), u = X(e);
  return delete u.id, /* @__PURE__ */ g.createElement("div", {
    ...u,
    ...l,
    ref: i,
    ...o,
    "data-orientation": n || void 0
  }, [
    ...r.collection
  ].map((s) => /* @__PURE__ */ g.createElement(F7, {
    key: s.key,
    item: s,
    state: r
  })));
}
const S7 = /* @__PURE__ */ J(P7);
function B7(e, t) {
  return Dt("item", e, t, e.children);
}
const k7 = /* @__PURE__ */ J(B7);
function F7({ item: e, state: t }) {
  let r = je(e.props.ref), { tabProps: n, isSelected: a, isDisabled: i, isPressed: l } = fx({
    key: e.key,
    ...e.props
  }, t, r), { focusProps: o, isFocused: u, isFocusVisible: s } = xe(), { hoverProps: d, isHovered: c } = ke({
    isDisabled: i
  }), f = ne({
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
  }), p = e.props.href ? "a" : "div";
  return /* @__PURE__ */ g.createElement(p, {
    ..._(n, o, d, f),
    ref: r,
    "data-selected": a || void 0,
    "data-disabled": i || void 0,
    "data-focus-visible": s || void 0,
    "data-pressed": l || void 0,
    "data-hovered": c || void 0
  });
}
function A7(e, t) {
  const r = G(Cu);
  let n = je(t), { tabPanelProps: a } = px(e, r, n), { focusProps: i, isFocused: l, isFocusVisible: o } = xe(), u = r.selectedKey === e.id, s = ne({
    ...e,
    defaultClassName: "react-aria-TabPanel",
    values: {
      isFocused: l,
      isFocusVisible: o,
      isInert: !u,
      state: r
    }
  });
  if (!u && !e.shouldForceMount)
    return null;
  let d = X(e);
  delete d.id;
  let c = u ? _(d, a, i, s) : s;
  return /* @__PURE__ */ g.createElement("div", {
    ...c,
    ref: n,
    "data-focused": l || void 0,
    "data-focus-visible": o || void 0,
    // @ts-ignore
    inert: u ? void 0 : "true",
    "data-inert": u ? void 0 : "true"
  });
}
const T7 = /* @__PURE__ */ Vi(A7), R7 = /* @__PURE__ */ Z(null), sg = /* @__PURE__ */ Z(null);
function M7(e, t) {
  [e, t] = ie(e, t, R7);
  let r = N(null), [n, a] = qe(), { collection: i, document: l } = ma(), o = Ki({
    ...e,
    children: void 0,
    collection: i
  }), u = X(e), s = Object.fromEntries(Object.entries(u).map(([m]) => [
    m,
    void 0
  ])), { gridProps: d, labelProps: c, descriptionProps: f, errorMessageProps: p } = vx({
    ...e,
    ...s,
    label: a
  }, o, r);
  var b;
  return /* @__PURE__ */ g.createElement("div", {
    ...u,
    ref: t,
    slot: e.slot || void 0,
    className: (b = e.className) !== null && b !== void 0 ? b : "react-aria-TagGroup",
    style: e.style
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Je,
        {
          ...c,
          elementType: "span",
          ref: n
        }
      ],
      [
        sg,
        {
          ...d,
          ref: r
        }
      ],
      [
        Tt,
        o
      ],
      [
        Lr,
        l
      ],
      [
        _e,
        {
          slots: {
            description: f,
            errorMessage: p
          }
        }
      ]
    ]
  }, e.children));
}
const I7 = /* @__PURE__ */ J(M7);
function N7(e, t) {
  let r = lu(e);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, r, /* @__PURE__ */ g.createElement(K7, {
    props: e,
    forwardedRef: t
  }));
}
function K7({ props: e, forwardedRef: t }) {
  let r = G(Tt), [n, a] = ie(e, t, sg);
  delete n.items, delete n.renderEmptyState;
  let i = xt({
    items: r.collection,
    children: (c) => {
      switch (c.type) {
        case "item":
          return /* @__PURE__ */ g.createElement(O7, {
            item: c
          });
        default:
          throw new Error("Unsupported node type in TagList: " + c.type);
      }
    }
  }), { focusProps: l, isFocused: o, isFocusVisible: u } = xe(), s = {
    isEmpty: r.collection.size === 0,
    isFocused: o,
    isFocusVisible: u,
    state: r
  }, d = ne({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-TagList",
    values: s
  });
  return /* @__PURE__ */ g.createElement("div", {
    ..._(n, l),
    ...d,
    ref: a,
    "data-empty": r.collection.size === 0 || void 0,
    "data-focused": o || void 0,
    "data-focus-visible": u || void 0
  }, r.collection.size === 0 && e.renderEmptyState ? e.renderEmptyState(s) : i);
}
const z7 = /* @__PURE__ */ J(N7);
function V7(e, t) {
  return Dt("item", e, t, e.children);
}
const L7 = /* @__PURE__ */ J(V7);
function O7({ item: e }) {
  let t = G(Tt), r = je(e.props.ref), { focusProps: n, isFocusVisible: a } = xe({
    within: !0
  }), { rowProps: i, gridCellProps: l, removeButtonProps: o, ...u } = gx({
    item: e
  }, t, r), { hoverProps: s, isHovered: d } = ke({
    isDisabled: !u.allowsSelection
  }), c = e.props, f = ne({
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
  return te(() => {
    e.textValue || console.warn("A `textValue` prop is required for <Tag> elements with non-plain text children for accessibility.");
  }, [
    e.textValue
  ]), /* @__PURE__ */ g.createElement("div", {
    ref: r,
    ...f,
    ..._(X(c), i, n, s),
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
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Ct,
        {
          slots: {
            remove: o
          }
        }
      ]
    ]
  }, f.children)));
}
const j7 = /* @__PURE__ */ Z({}), _7 = /* @__PURE__ */ Z(null);
function H7(e, t) {
  [e, t] = ie(e, t, _7);
  let r = N(null), [n, a] = qe(), [i, l] = Y("input");
  var o;
  let { labelProps: u, inputProps: s, descriptionProps: d, errorMessageProps: c, ...f } = Ri({
    ...yt(e),
    inputElementType: i,
    label: a,
    validationBehavior: (o = e.validationBehavior) !== null && o !== void 0 ? o : "native"
  }, r), p = re((m) => {
    r.current = m, m && l(m instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, []), b = ne({
    ...e,
    values: {
      isDisabled: e.isDisabled || !1,
      isInvalid: f.isInvalid
    },
    defaultClassName: "react-aria-TextField"
  });
  return /* @__PURE__ */ g.createElement("div", {
    ...X(e),
    ...b,
    ref: t,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": f.isInvalid || void 0
  }, /* @__PURE__ */ g.createElement(he, {
    values: [
      [
        Je,
        {
          ...u,
          ref: n
        }
      ],
      [
        yr,
        {
          ...s,
          ref: p
        }
      ],
      [
        j7,
        {
          ...s,
          ref: p
        }
      ],
      [
        _e,
        {
          slots: {
            description: d,
            errorMessage: c
          }
        }
      ],
      [
        ct,
        f
      ]
    ]
  }, b.children));
}
const U7 = /* @__PURE__ */ J(H7), W7 = /* @__PURE__ */ Z({});
function G7(e, t) {
  [e, t] = ie(e, t, W7);
  let r = Fi(e), { buttonProps: n, isPressed: a } = S1(e, r, t), { focusProps: i, isFocused: l, isFocusVisible: o } = xe(e), { hoverProps: u, isHovered: s } = ke(e), d = ne({
    ...e,
    values: {
      isHovered: s,
      isPressed: a,
      isFocused: l,
      isSelected: r.isSelected,
      isFocusVisible: o,
      isDisabled: e.isDisabled || !1,
      state: r
    },
    defaultClassName: "react-aria-ToggleButton"
  });
  return /* @__PURE__ */ g.createElement("button", {
    ..._(n, i, u),
    ...d,
    ref: t,
    slot: e.slot || void 0,
    "data-focused": l || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-pressed": a || void 0,
    "data-selected": r.isSelected || void 0,
    "data-hovered": s || void 0,
    "data-focus-visible": o || void 0
  });
}
const Z7 = /* @__PURE__ */ J(G7), q7 = /* @__PURE__ */ Z({});
function Y7(e, t) {
  [e, t] = ie(e, t, q7);
  let { toolbarProps: r } = Uh(e, t), n = ne({
    ...e,
    values: {
      orientation: e.orientation || "horizontal"
    },
    defaultClassName: "react-aria-Toolbar"
  }), a = X(e);
  return delete a.id, /* @__PURE__ */ g.createElement("div", {
    ..._(r, a),
    ...n,
    ref: t,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "horizontal"
  }, n.children);
}
const J7 = /* @__PURE__ */ J(Y7), dg = /* @__PURE__ */ Z(null), X7 = /* @__PURE__ */ Z(null);
function Q7({ UNSTABLE_portalContainer: e, ...t }, r) {
  [t, r] = ie(t, r, X7);
  let n = G(dg), a = l6(t), i = t.isOpen != null || t.defaultOpen != null || !n ? a : n, l = vi(r, i.isOpen) || t.isExiting || !1;
  return !i.isOpen && !l ? null : /* @__PURE__ */ g.createElement(o5, {
    portalContainer: e
  }, /* @__PURE__ */ g.createElement(t8, {
    ...t,
    tooltipRef: r,
    isExiting: l
  }));
}
const e8 = /* @__PURE__ */ J(Q7);
function t8(e) {
  let t = G(dg), { overlayProps: r, arrowProps: n, placement: a } = ef({
    placement: e.placement || "top",
    targetRef: e.triggerRef,
    overlayRef: e.tooltipRef,
    offset: e.offset,
    crossOffset: e.crossOffset,
    isOpen: t.isOpen
  }), i = zi(e.tooltipRef, !!a) || e.isEntering || !1, l = ne({
    ...e,
    defaultClassName: "react-aria-Tooltip",
    values: {
      placement: a,
      isEntering: i,
      isExiting: e.isExiting,
      state: t
    }
  });
  e = _(e, r);
  let { tooltipProps: o } = $x(e, t);
  return /* @__PURE__ */ g.createElement("div", {
    ...o,
    ref: e.tooltipRef,
    ...l,
    style: {
      ...r.style,
      ...l.style
    },
    "data-placement": a,
    "data-entering": i || void 0,
    "data-exiting": e.isExiting || void 0
  }, /* @__PURE__ */ g.createElement(mu.Provider, {
    value: {
      ...n,
      placement: a
    }
  }, l.children));
}
var td = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ut = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, r8 = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function cg(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? cg(r, t) : t.push(r);
  });
}
function fg(e) {
  let t = [];
  return cg(e, t), t;
}
var pg = (...e) => fg(e).filter(Boolean), bg = (e, t) => {
  let r = {}, n = Object.keys(e), a = Object.keys(t);
  for (let i of n)
    if (a.includes(i)) {
      let l = e[i], o = t[i];
      typeof l == "object" && typeof o == "object" ? r[i] = bg(l, o) : Array.isArray(l) || Array.isArray(o) ? r[i] = pg(o, l) : r[i] = o + " " + l;
    } else
      r[i] = e[i];
  for (let i of a)
    n.includes(i) || (r[i] = t[i]);
  return r;
}, rd = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function n8() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = mg(t)) && (n && (n += " "), n += r);
  return n;
}
function mg(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = mg(e[n])) && (r && (r += " "), r += t);
  return r;
}
var Eu = "-";
function a8(e) {
  var t = l8(e), r = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, a = n === void 0 ? {} : n;
  function i(o) {
    var u = o.split(Eu);
    return u[0] === "" && u.length !== 1 && u.shift(), hg(u, t) || i8(o);
  }
  function l(o, u) {
    var s = r[o] || [];
    return u && a[o] ? [].concat(s, a[o]) : s;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: l
  };
}
function hg(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], n = t.nextPart.get(r), a = n ? hg(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var i = e.join(Eu);
    return (l = t.validators.find(function(o) {
      var u = o.validator;
      return u(i);
    })) == null ? void 0 : l.classGroupId;
  }
}
var nd = /^\[(.+)\]$/;
function i8(e) {
  if (nd.test(e)) {
    var t = nd.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function l8(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = u8(Object.entries(e.classGroups), r);
  return a.forEach(function(i) {
    var l = i[0], o = i[1];
    fo(o, n, l, t);
  }), n;
}
function fo(e, t, r, n) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var i = a === "" ? t : ad(t, a);
      i.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (o8(a)) {
        fo(a(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(function(l) {
      var o = l[0], u = l[1];
      fo(u, ad(t, o), r, n);
    });
  });
}
function ad(e, t) {
  var r = e;
  return t.split(Eu).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function o8(e) {
  return e.isThemeGetter;
}
function u8(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], a = r[1], i = a.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(o) {
        var u = o[0], s = o[1];
        return [t + u, s];
      })) : l;
    });
    return [n, i];
  }) : e;
}
function s8(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function a(i, l) {
    r.set(i, l), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var o = r.get(l);
      if (o !== void 0)
        return o;
      if ((o = n.get(l)) !== void 0)
        return a(l, o), o;
    },
    set: function(l, o) {
      r.has(l) ? r.set(l, o) : a(l, o);
    }
  };
}
var vg = "!";
function d8(e) {
  var t = e.separator || ":", r = t.length === 1, n = t[0], a = t.length;
  return function(l) {
    for (var o = [], u = 0, s = 0, d, c = 0; c < l.length; c++) {
      var f = l[c];
      if (u === 0) {
        if (f === n && (r || l.slice(c, c + a) === t)) {
          o.push(l.slice(s, c)), s = c + a;
          continue;
        }
        if (f === "/") {
          d = c;
          continue;
        }
      }
      f === "[" ? u++ : f === "]" && u--;
    }
    var p = o.length === 0 ? l : l.substring(s), b = p.startsWith(vg), m = b ? p.substring(1) : p, h = d && d > s ? d - s : void 0;
    return {
      modifiers: o,
      hasImportantModifier: b,
      baseClassName: m,
      maybePostfixModifierPosition: h
    };
  };
}
function c8(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var a = n[0] === "[";
    a ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function f8(e) {
  return {
    cache: s8(e.cacheSize),
    splitModifiers: d8(e),
    ...a8(e)
  };
}
var p8 = /\s+/;
function b8(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, a = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(p8).map(function(l) {
    var o = r(l), u = o.modifiers, s = o.hasImportantModifier, d = o.baseClassName, c = o.maybePostfixModifierPosition, f = n(c ? d.substring(0, c) : d), p = !!c;
    if (!f) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (f = n(d), !f)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      p = !1;
    }
    var b = c8(u).join(":"), m = s ? b + vg : b;
    return {
      isTailwindClass: !0,
      modifierId: m,
      classGroupId: f,
      originalClassName: l,
      hasPostfixModifier: p
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
function po() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, a, i, l = o;
  function o(s) {
    var d = t[0], c = t.slice(1), f = c.reduce(function(p, b) {
      return b(p);
    }, d());
    return n = f8(f), a = n.cache.get, i = n.cache.set, l = u, u(s);
  }
  function u(s) {
    var d = a(s);
    if (d)
      return d;
    var c = b8(s, n);
    return i(s, c), c;
  }
  return function() {
    return l(n8.apply(null, arguments));
  };
}
function Se(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var gg = /^\[(?:([a-z-]+):)?(.+)\]$/i, m8 = /^\d+\/\d+$/, h8 = /* @__PURE__ */ new Set(["px", "full", "screen"]), v8 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, g8 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $8 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Pt(e) {
  return kr(e) || h8.has(e) || m8.test(e) || bo(e);
}
function bo(e) {
  return Or(e, "length", P8);
}
function y8(e) {
  return Or(e, "size", $g);
}
function x8(e) {
  return Or(e, "position", $g);
}
function D8(e) {
  return Or(e, "url", w8);
}
function La(e) {
  return Or(e, "number", kr);
}
function kr(e) {
  return !Number.isNaN(Number(e));
}
function C8(e) {
  return e.endsWith("%") && kr(e.slice(0, -1));
}
function Sn(e) {
  return id(e) || Or(e, "number", id);
}
function pe(e) {
  return gg.test(e);
}
function Bn() {
  return !0;
}
function ur(e) {
  return v8.test(e);
}
function E8(e) {
  return Or(e, "", S8);
}
function Or(e, t, r) {
  var n = gg.exec(e);
  return n ? n[1] ? n[1] === t : r(n[2]) : !1;
}
function P8(e) {
  return g8.test(e);
}
function $g() {
  return !1;
}
function w8(e) {
  return e.startsWith("url(");
}
function id(e) {
  return Number.isInteger(Number(e));
}
function S8(e) {
  return $8.test(e);
}
function mo() {
  var e = Se("colors"), t = Se("spacing"), r = Se("blur"), n = Se("brightness"), a = Se("borderColor"), i = Se("borderRadius"), l = Se("borderSpacing"), o = Se("borderWidth"), u = Se("contrast"), s = Se("grayscale"), d = Se("hueRotate"), c = Se("invert"), f = Se("gap"), p = Se("gradientColorStops"), b = Se("gradientColorStopPositions"), m = Se("inset"), h = Se("margin"), y = Se("opacity"), $ = Se("padding"), x = Se("saturate"), C = Se("scale"), w = Se("sepia"), A = Se("skew"), M = Se("space"), v = Se("translate"), I = function() {
    return ["auto", "contain", "none"];
  }, T = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, E = function() {
    return ["auto", pe, t];
  }, B = function() {
    return [pe, t];
  }, S = function() {
    return ["", Pt];
  }, F = function() {
    return ["auto", kr, pe];
  }, V = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, R = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, D = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, H = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, U = function() {
    return ["", "0", pe];
  }, O = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, L = function() {
    return [kr, La];
  }, K = function() {
    return [kr, pe];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Bn],
      spacing: [Pt],
      blur: ["none", "", ur, pe],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ur, pe],
      borderSpacing: B(),
      borderWidth: S(),
      contrast: L(),
      grayscale: U(),
      hueRotate: K(),
      invert: U(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [C8, bo],
      inset: E(),
      margin: E(),
      opacity: L(),
      padding: B(),
      saturate: L(),
      scale: L(),
      sepia: U(),
      skew: K(),
      space: B(),
      translate: B()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", pe]
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
        columns: [ur]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
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
        object: [].concat(V(), [pe])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        z: ["auto", Sn]
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
        flex: ["1", "auto", "initial", "none", pe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: U()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: U()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Sn]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Bn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Sn]
        }, pe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Bn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Sn]
        }, pe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": ["auto", "min", "max", "fr", pe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", pe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
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
        w: ["auto", "min", "max", "fit", pe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", pe, Pt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ur]
        }, ur, pe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [pe, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", pe, Pt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [pe, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ur, bo]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", La]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Bn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", pe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", kr, La]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pe, Pt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", pe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", pe]
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
        decoration: [].concat(R(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Pt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", pe, Pt]
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
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe]
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
        content: ["none", pe]
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
        bg: [].concat(V(), [x8])
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
        bg: ["auto", "cover", "contain", y8]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, D8]
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
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
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
        border: [].concat(R(), ["hidden"])
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
        divide: R()
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
        outline: [""].concat(R())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [pe, Pt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Pt]
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
        ring: S()
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
        "ring-offset": [Pt]
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
        shadow: ["", "inner", "none", ur, E8]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Bn]
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
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
        "drop-shadow": ["", "none", ur, pe]
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
        sepia: [w]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
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
        "backdrop-sepia": [w]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", pe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: K()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", pe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: K()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", pe]
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
        rotate: [Sn, pe]
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
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", pe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe]
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
        "scroll-m": B()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
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
        "will-change": ["auto", "scroll", "contents", "transform", pe]
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
        stroke: [Pt, La]
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
function B8(e, t) {
  for (var r in t)
    yg(e, r, t[r]);
  return e;
}
var k8 = Object.prototype.hasOwnProperty, F8 = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function yg(e, t, r) {
  if (!k8.call(e, t) || F8.has(typeof r) || r === null) {
    e[t] = r;
    return;
  }
  if (Array.isArray(r) && Array.isArray(e[t])) {
    e[t] = e[t].concat(r);
    return;
  }
  if (typeof r == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = r;
      return;
    }
    for (var n in r)
      yg(e[t], n, r[n]);
  }
}
function A8(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return typeof e == "function" ? po.apply(void 0, [mo, e].concat(r)) : po.apply(void 0, [function() {
    return B8(mo(), e);
  }].concat(r));
}
var Ot = /* @__PURE__ */ po(mo), T8 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, xg = (e) => e || void 0, Yn = (...e) => xg(fg(e).filter(Boolean).join(" ")), Sl = null, gi = {}, ho = !1, kn = (...e) => (t) => t.twMerge ? ((!Sl || ho) && (ho = !1, Sl = ut(gi) ? Ot : A8(gi)), xg(Sl(Yn(e)))) : Yn(e), ld = (e, t) => {
  for (let r in t)
    e.hasOwnProperty(r) ? e[r] = Yn(e[r], t[r]) : e[r] = t[r];
  return e;
}, se = (e, t) => {
  let { extend: r = null, slots: n = {}, variants: a = {}, compoundVariants: i = [], compoundSlots: l = [], defaultVariants: o = {} } = e, u = { ...T8, ...t }, s = r != null && r.base ? Yn(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = r != null && r.variants && !ut(r.variants) ? bg(a, r.variants) : a, c = r != null && r.defaultVariants && !ut(r.defaultVariants) ? { ...r.defaultVariants, ...o } : o;
  !ut(u.twMergeConfig) && !r8(u.twMergeConfig, gi) && (ho = !0, gi = u.twMergeConfig);
  let f = ut(r == null ? void 0 : r.slots), p = ut(n) ? {} : { base: Yn(e == null ? void 0 : e.base, f && (r == null ? void 0 : r.base)), ...n }, b = f ? p : ld({ ...r == null ? void 0 : r.slots }, ut(p) ? { base: e == null ? void 0 : e.base } : p), m = (y) => {
    if (ut(d) && ut(n) && f)
      return kn(s, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(u);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let $ = (B, S, F = [], V) => {
      let R = F;
      if (typeof S == "string")
        R = R.concat(rd(S).split(" ").map((D) => `${B}:${D}`));
      else if (Array.isArray(S))
        R = R.concat(S.reduce((D, H) => D.concat(`${B}:${H}`), []));
      else if (typeof S == "object" && typeof V == "string") {
        for (let D in S)
          if (S.hasOwnProperty(D) && D === V) {
            let H = S[D];
            if (H && typeof H == "string") {
              let U = rd(H);
              R[V] ? R[V] = R[V].concat(U.split(" ").map((O) => `${B}:${O}`)) : R[V] = U.split(" ").map((O) => `${B}:${O}`);
            } else
              Array.isArray(H) && H.length > 0 && (R[V] = H.reduce((U, O) => U.concat(`${B}:${O}`), []));
          }
      }
      return R;
    }, x = (B, S = d, F = null, V = null) => {
      var R;
      let D = S[B];
      if (!D || ut(D))
        return null;
      let H = (R = V == null ? void 0 : V[B]) != null ? R : y == null ? void 0 : y[B];
      if (H === null)
        return null;
      let U = td(H), O = Array.isArray(u.responsiveVariants) && u.responsiveVariants.length > 0 || u.responsiveVariants === !0, L = c == null ? void 0 : c[B], K = [];
      if (typeof U == "object" && O)
        for (let [ae, de] of Object.entries(U)) {
          let Ee = D[de];
          if (ae === "initial") {
            L = de;
            continue;
          }
          Array.isArray(u.responsiveVariants) && !u.responsiveVariants.includes(ae) || (K = $(ae, Ee, K, F));
        }
      let q = D[U] || D[td(L)];
      return typeof K == "object" && typeof F == "string" && K[F] ? ld(K, q) : K.length > 0 ? (K.push(q), K) : q;
    }, C = () => d ? Object.keys(d).map((B) => x(B, d)) : null, w = (B, S) => {
      if (!d || typeof d != "object")
        return null;
      let F = new Array();
      for (let V in d) {
        let R = x(V, d, B, S), D = B === "base" && typeof R == "string" ? R : R && R[B];
        D && (F[F.length] = D);
      }
      return F;
    }, A = {};
    for (let B in y)
      y[B] !== void 0 && (A[B] = y[B]);
    let M = (B, S) => {
      var F;
      let V = typeof (y == null ? void 0 : y[B]) == "object" ? { [B]: (F = y[B]) == null ? void 0 : F.initial } : {};
      return { ...c, ...A, ...V, ...S };
    }, v = (B = [], S) => {
      let F = [];
      for (let { class: V, className: R, ...D } of B) {
        let H = !0;
        for (let [U, O] of Object.entries(D)) {
          let L = M(U, S);
          if (Array.isArray(O)) {
            if (!O.includes(L[U])) {
              H = !1;
              break;
            }
          } else if (L[U] !== O) {
            H = !1;
            break;
          }
        }
        H && (V && F.push(V), R && F.push(R));
      }
      return F;
    }, I = (B) => {
      let S = v(i, B), F = v(r == null ? void 0 : r.compoundVariants, B);
      return pg(F, S);
    }, T = (B) => {
      let S = I(B);
      if (!Array.isArray(S))
        return S;
      let F = {};
      for (let V of S)
        if (typeof V == "string" && (F.base = kn(F.base, V)(u)), typeof V == "object")
          for (let [R, D] of Object.entries(V))
            F[R] = kn(F[R], D)(u);
      return F;
    }, E = (B) => {
      if (l.length < 1)
        return null;
      let S = {};
      for (let { slots: F = [], class: V, className: R, ...D } of l) {
        if (!ut(D)) {
          let H = !0;
          for (let U of Object.keys(D)) {
            let O = M(U, B)[U];
            if (O === void 0 || (Array.isArray(D[U]) ? !D[U].includes(O) : D[U] !== O)) {
              H = !1;
              break;
            }
          }
          if (!H)
            continue;
        }
        for (let H of F)
          S[H] = S[H] || [], S[H].push([V, R]);
      }
      return S;
    };
    if (!ut(n) || !f) {
      let B = {};
      if (typeof b == "object" && !ut(b))
        for (let S of Object.keys(b))
          B[S] = (F) => {
            var V, R;
            return kn(b[S], w(S, F), ((V = T(F)) != null ? V : [])[S], ((R = E(F)) != null ? R : [])[S], F == null ? void 0 : F.class, F == null ? void 0 : F.className)(u);
          };
      return B;
    }
    return kn(s, C(), I(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(u);
  }, h = () => {
    if (!(!d || typeof d != "object"))
      return Object.keys(d);
  };
  return m.variantKeys = h(), m.extend = r, m.base = s, m.slots = b, m.variants = d, m.defaultVariants = c, m.compoundSlots = l, m.compoundVariants = i, m;
};
const Me = se({
  base: "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-1",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2"
    }
  }
});
function He(e, t) {
  return Ze(e, (r) => Ot(t, r));
}
let R8 = se({
  extend: Me,
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
function gr(e) {
  return /* @__PURE__ */ P.jsx(
    hn,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => R8({ ...r, variant: e.variant, className: t })
      )
    }
  );
}
function Pu(e) {
  return /* @__PURE__ */ P.jsx(
    xD,
    {
      ...e,
      className: Ot(
        "relative max-h-[inherit] overflow-auto p-6 outline outline-0 [[data-placement]>&]:p-4",
        e.className
      )
    }
  );
}
function $9({
  title: e,
  variant: t,
  cancelLabel: r,
  actionLabel: n,
  onAction: a,
  children: i,
  ...l
}) {
  return /* @__PURE__ */ P.jsx(Pu, { role: "alertdialog", ...l, children: ({ close: o }) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    /* @__PURE__ */ P.jsx(
      rv,
      {
        slot: "title",
        className: "my-0 text-xl font-semibold leading-6",
        children: e
      }
    ),
    /* @__PURE__ */ P.jsx(
      "div",
      {
        className: `absolute right-6 top-6 h-6 w-6 stroke-2 ${t === "destructive" ? "text-red-500" : "text-blue-500"}`,
        children: t === "destructive" ? /* @__PURE__ */ P.jsx(Zg, { "aria-hidden": !0 }) : /* @__PURE__ */ P.jsx(Xg, { "aria-hidden": !0 })
      }
    ),
    /* @__PURE__ */ P.jsx("p", { className: "mt-3 text-slate-500 dark:text-zinc-400", children: i }),
    /* @__PURE__ */ P.jsxs("div", { className: "mt-6 flex justify-end gap-2", children: [
      /* @__PURE__ */ P.jsx(gr, { variant: "secondary", onPress: o, children: r || "Cancel" }),
      /* @__PURE__ */ P.jsx(
        gr,
        {
          variant: t === "destructive" ? "destructive" : "primary",
          autoFocus: !0,
          onPress: Bt(a, o),
          children: n
        }
      )
    ] })
  ] }) });
}
const M8 = se({
  extend: Me,
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
function I8(e) {
  return /* @__PURE__ */ P.jsx(
    E6,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => M8({ ...r, className: t, variant: e.variant })
      )
    }
  );
}
function y9(e) {
  return /* @__PURE__ */ P.jsx(
    B6,
    {
      ...e,
      className: Ot("flex gap-1", e.className)
    }
  );
}
function x9(e) {
  return /* @__PURE__ */ P.jsxs(
    F6,
    {
      ...e,
      className: Ot("flex items-center gap-1", e.className),
      children: [
        /* @__PURE__ */ P.jsx(I8, { variant: "secondary", ...e }),
        e.href && /* @__PURE__ */ P.jsx(kl, { className: "h-3 w-3 text-gray-600 dark:text-zinc-400" })
      ]
    }
  );
}
const N8 = se({
  extend: Me,
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
function K8({
  errorMessage: e,
  ...t
}) {
  return /* @__PURE__ */ P.jsxs(K6, { ...t, children: [
    /* @__PURE__ */ P.jsx(Dg, {}),
    /* @__PURE__ */ P.jsxs(iv, { children: [
      /* @__PURE__ */ P.jsx(Cg, {}),
      /* @__PURE__ */ P.jsx(su, { children: (r) => /* @__PURE__ */ P.jsx(uv, { date: r, className: N8 }) })
    ] }),
    e && /* @__PURE__ */ P.jsx(va, { slot: "errorMessage", className: "text-sm text-red-600", children: e })
  ] });
}
function Dg() {
  let { direction: e } = be();
  return /* @__PURE__ */ P.jsxs("header", { className: "flex w-full items-center gap-1 px-1 pb-4", children: [
    /* @__PURE__ */ P.jsx(gr, { variant: "icon", slot: "previous", children: e === "rtl" ? /* @__PURE__ */ P.jsx(kl, { "aria-hidden": !0 }) : /* @__PURE__ */ P.jsx(zu, { "aria-hidden": !0 }) }),
    /* @__PURE__ */ P.jsx(rv, { className: "mx-2 flex-1 text-center text-xl font-semibold text-zinc-900 dark:text-zinc-200" }),
    /* @__PURE__ */ P.jsx(gr, { variant: "icon", slot: "next", children: e === "rtl" ? /* @__PURE__ */ P.jsx(zu, { "aria-hidden": !0 }) : /* @__PURE__ */ P.jsx(kl, { "aria-hidden": !0 }) })
  ] });
}
function Cg() {
  return /* @__PURE__ */ P.jsx(lv, { children: (e) => /* @__PURE__ */ P.jsx(ov, { className: "text-xs font-semibold text-gray-500", children: e }) });
}
function at(e) {
  return /* @__PURE__ */ P.jsx(
    q6,
    {
      ...e,
      className: Ot(
        "w-fit cursor-default text-sm font-medium text-gray-500 dark:text-zinc-400",
        e.className
      )
    }
  );
}
function Et(e) {
  return /* @__PURE__ */ P.jsx(
    va,
    {
      ...e,
      slot: "description",
      className: Ot("text-sm text-gray-600", e.className)
    }
  );
}
function Rt(e) {
  return /* @__PURE__ */ P.jsx(
    W6,
    {
      ...e,
      className: He(
        e.className,
        "text-sm text-red-600 forced-colors:text-[Mark]"
      )
    }
  );
}
const Jn = se({
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
}), Eg = se({
  extend: Me,
  base: "group flex items-center h-9 bg-white dark:bg-zinc-900 forced-colors:bg-[Field] border rounded-lg overflow-hidden",
  variants: Jn.variants,
  compoundVariants: [
    {
      isFocusWithin: !0,
      isFocusVisible: !1,
      class: "outline-2 -outline-offset-1"
    }
  ]
});
function xa(e) {
  return /* @__PURE__ */ P.jsx(
    du,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => Eg({ ...r, className: t })
      )
    }
  );
}
function Yi(e) {
  return /* @__PURE__ */ P.jsx(
    dv,
    {
      ...e,
      className: He(
        e.className,
        "min-w-0 flex-1 bg-white px-2 py-1.5 text-sm text-gray-800 outline outline-0 disabled:text-gray-200 dark:bg-zinc-900 dark:text-zinc-200 dark:disabled:text-zinc-600"
      )
    }
  );
}
function D9(e) {
  return /* @__PURE__ */ P.jsxs(
    eD,
    {
      ...e,
      className: He(
        e.className,
        "flex flex-col gap-2"
      ),
      children: [
        /* @__PURE__ */ P.jsx(at, { children: e.label }),
        e.children,
        e.description && /* @__PURE__ */ P.jsx(Et, { children: e.description }),
        /* @__PURE__ */ P.jsx(Rt, { children: e.errorMessage })
      ]
    }
  );
}
const z8 = se({
  base: "flex gap-2 items-center group text-sm transition",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-200",
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]"
    }
  }
}), V8 = se({
  extend: Me,
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
}), od = "w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]";
function wu(e) {
  return /* @__PURE__ */ P.jsx(
    Q6,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => z8({ ...r, className: t })
      ),
      children: ({ isSelected: t, isIndeterminate: r, ...n }) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: V8({
              isSelected: t || r,
              ...n
            }),
            children: r ? /* @__PURE__ */ P.jsx(Qg, { "aria-hidden": !0, className: od }) : t ? /* @__PURE__ */ P.jsx(vo, { "aria-hidden": !0, className: od }) : null
          }
        ),
        e.children
      ] })
    }
  );
}
function C9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ P.jsx(
    bu,
    {
      ...t,
      className: He(
        t.className,
        "rounded-lg border border-gray-300 p-1 outline-0 dark:border-zinc-600"
      ),
      children: e
    }
  );
}
const L8 = se({
  extend: Me,
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
function E9(e) {
  let t = e.textValue || (typeof e.children == "string" ? e.children : void 0);
  return /* @__PURE__ */ P.jsx(fv, { ...e, textValue: t, className: L8, children: Ze(e.children, (r) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    r,
    /* @__PURE__ */ P.jsx("div", { className: "absolute bottom-0 left-4 right-4 hidden h-px bg-white/20 forced-colors:bg-[HighlightText] [.group[data-selected]:has(+[data-selected])_&]:block" })
  ] })) });
}
const Pg = se({
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
function wg(e) {
  let t = e.textValue || (typeof e.children == "string" ? e.children : void 0);
  return /* @__PURE__ */ P.jsx(
    fv,
    {
      ...e,
      textValue: t,
      className: Pg,
      children: Ze(e.children, (r, { isSelected: n }) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        /* @__PURE__ */ P.jsx("span", { className: "flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold", children: r }),
        /* @__PURE__ */ P.jsx("span", { className: "flex w-5 items-center", children: n && /* @__PURE__ */ P.jsx(vo, { className: "h-4 w-4" }) })
      ] }))
    }
  );
}
function Su(e) {
  return /* @__PURE__ */ P.jsxs(y6, { className: "after:block after:h-[5px] after:content-[''] first:-mt-[5px]", children: [
    /* @__PURE__ */ P.jsx(fu, { className: "sticky -top-[5px] z-10 -mx-1 -mt-px truncate border-y bg-gray-100/60 px-4 py-1 text-sm font-semibold text-gray-500 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:border-y-zinc-700 dark:bg-zinc-700/60 dark:text-zinc-300 [&+*]:mt-1", children: e.title }),
    /* @__PURE__ */ P.jsx(ou, { items: e.items, children: e.children })
  ] });
}
const O8 = se({
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
function Da({
  children: e,
  showArrow: t,
  className: r,
  ...n
}) {
  return /* @__PURE__ */ P.jsxs(
    gD,
    {
      offset: t ? 12 : 8,
      ...n,
      className: Ze(
        r,
        (a, i) => O8({ ...i, className: a })
      ),
      children: [
        t && /* @__PURE__ */ P.jsx(bv, { className: "group", children: /* @__PURE__ */ P.jsx(
          "svg",
          {
            width: 12,
            height: 12,
            viewBox: "0 0 12 12",
            className: "block fill-white stroke-black/10 stroke-1 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 dark:fill-[#1f1f21] dark:stroke-zinc-600 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
            children: /* @__PURE__ */ P.jsx("path", { d: "M0 0 L6 6 L12 0" })
          }
        ) }),
        e
      ]
    }
  );
}
function P9({
  label: e,
  description: t,
  errorMessage: r,
  children: n,
  items: a,
  ...i
}) {
  return /* @__PURE__ */ P.jsxs(
    wD,
    {
      ...i,
      className: He(
        i.className,
        "group flex flex-col gap-1"
      ),
      children: [
        /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsxs(xa, { children: [
          /* @__PURE__ */ P.jsx(Yi, {}),
          /* @__PURE__ */ P.jsx(gr, { variant: "icon", className: "mr-1 w-6 rounded outline-offset-0 ", children: /* @__PURE__ */ P.jsx(go, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        t && /* @__PURE__ */ P.jsx(Et, { children: t }),
        /* @__PURE__ */ P.jsx(Rt, { children: r }),
        /* @__PURE__ */ P.jsx(Da, { className: "w-[--trigger-width]", children: /* @__PURE__ */ P.jsx(
          bu,
          {
            items: a,
            className: "max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]",
            children: n
          }
        ) })
      ]
    }
  );
}
function w9(e) {
  return /* @__PURE__ */ P.jsx(wg, { ...e });
}
function S9(e) {
  return /* @__PURE__ */ P.jsx(Su, { ...e });
}
function B9({
  label: e,
  description: t,
  errorMessage: r,
  ...n
}) {
  return /* @__PURE__ */ P.jsxs(
    kD,
    {
      ...n,
      className: He(
        n.className,
        "flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsx(Xn, {}),
        t && /* @__PURE__ */ P.jsx(Et, { children: t }),
        /* @__PURE__ */ P.jsx(Rt, { children: r })
      ]
    }
  );
}
const j8 = se({
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
function Xn(e) {
  return /* @__PURE__ */ P.jsx(
    MD,
    {
      className: (t) => Eg({
        ...t,
        class: "block min-w-[150px] px-2 py-1.5 text-sm"
      }),
      ...e,
      children: (t) => /* @__PURE__ */ P.jsx(ND, { segment: t, className: j8 })
    }
  );
}
function k9({
  label: e,
  description: t,
  errorMessage: r,
  ...n
}) {
  return /* @__PURE__ */ P.jsxs(
    jD,
    {
      ...n,
      className: He(
        n.className,
        "group flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsxs(xa, { className: "w-auto min-w-[208px]", children: [
          /* @__PURE__ */ P.jsx(Xn, { className: "min-w-[150px] flex-1 px-2 py-1.5 text-sm" }),
          /* @__PURE__ */ P.jsx(gr, { variant: "icon", className: "mr-1 w-6 rounded outline-offset-0", children: /* @__PURE__ */ P.jsx(fd, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        t && /* @__PURE__ */ P.jsx(Et, { children: t }),
        /* @__PURE__ */ P.jsx(Rt, { children: r }),
        /* @__PURE__ */ P.jsx(Da, { children: /* @__PURE__ */ P.jsx(Pu, { children: /* @__PURE__ */ P.jsx(K8, {}) }) })
      ]
    }
  );
}
const _8 = se({
  extend: Me,
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
function H8({
  errorMessage: e,
  ...t
}) {
  return /* @__PURE__ */ P.jsxs(V6, { ...t, children: [
    /* @__PURE__ */ P.jsx(Dg, {}),
    /* @__PURE__ */ P.jsxs(iv, { className: "[&_td]:px-0", children: [
      /* @__PURE__ */ P.jsx(Cg, {}),
      /* @__PURE__ */ P.jsx(su, { children: (r) => /* @__PURE__ */ P.jsx(
        uv,
        {
          date: r,
          className: "group h-9 w-9 cursor-default text-sm outline outline-0 outside-month:text-gray-300 selected:bg-blue-100 invalid:selected:bg-red-100 selection-start:rounded-s-full selection-end:rounded-e-full dark:selected:bg-blue-700/30 dark:invalid:selected:bg-red-700/30 forced-colors:selected:bg-[Highlight] forced-colors:invalid:selected:bg-[Mark] [td:first-child_&]:rounded-s-full [td:last-child_&]:rounded-e-full",
          children: ({
            formattedDate: n,
            isSelected: a,
            isSelectionStart: i,
            isSelectionEnd: l,
            isFocusVisible: o,
            isDisabled: u
          }) => /* @__PURE__ */ P.jsx(
            "span",
            {
              className: _8({
                selectionState: a && (i || l) ? "cap" : a ? "middle" : "none",
                isDisabled: u,
                isFocusVisible: o
              }),
              children: n
            }
          )
        }
      ) })
    ] }),
    e && /* @__PURE__ */ P.jsx(va, { slot: "errorMessage", className: "text-sm text-red-600", children: e })
  ] });
}
function F9({
  label: e,
  description: t,
  errorMessage: r,
  ...n
}) {
  return /* @__PURE__ */ P.jsxs(
    HD,
    {
      ...n,
      className: He(
        n.className,
        "group flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsxs(xa, { className: "w-auto min-w-[208px]", children: [
          /* @__PURE__ */ P.jsx(Xn, { slot: "start", className: "px-2 py-1.5 text-sm" }),
          /* @__PURE__ */ P.jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600 forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]",
              children: "–"
            }
          ),
          /* @__PURE__ */ P.jsx(Xn, { slot: "end", className: "flex-1 px-2 py-1.5 text-sm" }),
          /* @__PURE__ */ P.jsx(gr, { variant: "icon", className: "mr-1 w-6 rounded outline-offset-0", children: /* @__PURE__ */ P.jsx(fd, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        t && /* @__PURE__ */ P.jsx(Et, { children: t }),
        /* @__PURE__ */ P.jsx(Rt, { children: r }),
        /* @__PURE__ */ P.jsx(Da, { children: /* @__PURE__ */ P.jsx(Pu, { children: /* @__PURE__ */ P.jsx(H8, {}) }) })
      ]
    }
  );
}
function A9(e) {
  return /* @__PURE__ */ P.jsx(
    WD,
    {
      ...e,
      className: Ot("flex flex-col gap-4", e.className)
    }
  );
}
function T9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ P.jsx(
    YD,
    {
      ...t,
      className: He(
        t.className,
        "relative overflow-auto rounded-lg border dark:border-zinc-600"
      ),
      children: e
    }
  );
}
const U8 = se({
  extend: Me,
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
function R9({ children: e, ...t }) {
  let r = typeof e == "string" ? e : void 0;
  return /* @__PURE__ */ P.jsx(XD, { textValue: r, ...t, className: U8, children: ({ selectionMode: n, selectionBehavior: a, allowsDragging: i }) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    i && /* @__PURE__ */ P.jsx(hn, { slot: "drag", children: "≡" }),
    n === "multiple" && a === "toggle" && /* @__PURE__ */ P.jsx(wu, { slot: "selection" }),
    e
  ] }) });
}
function M9(e) {
  return /* @__PURE__ */ P.jsx(Da, { placement: e.placement, className: "min-w-[150px]", children: /* @__PURE__ */ P.jsx(
    l2,
    {
      ...e,
      className: "max-h-[inherit] overflow-auto p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
    }
  ) });
}
function I9(e) {
  return /* @__PURE__ */ P.jsx(s2, { ...e, className: Pg, children: Ze(
    e.children,
    (t, { selectionMode: r, isSelected: n }) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
      r !== "none" && /* @__PURE__ */ P.jsx("span", { className: "flex w-4 items-center", children: n && /* @__PURE__ */ P.jsx(vo, { "aria-hidden": !0, className: "h-4 w-4" }) }),
      /* @__PURE__ */ P.jsx("span", { className: "flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold", children: t })
    ] })
  ) });
}
function N9(e) {
  return /* @__PURE__ */ P.jsx(
    Wi,
    {
      ...e,
      className: "mx-3 my-1 border-b border-gray-300 dark:border-zinc-700"
    }
  );
}
function K9(e) {
  return /* @__PURE__ */ P.jsx(Su, { ...e });
}
function z9({ label: e, ...t }) {
  return /* @__PURE__ */ P.jsx(
    p2,
    {
      ...t,
      className: He(
        t.className,
        "flex flex-col gap-1"
      ),
      children: ({ percentage: r, valueText: n }) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        /* @__PURE__ */ P.jsxs("div", { className: "flex justify-between gap-2", children: [
          /* @__PURE__ */ P.jsx(at, { children: e }),
          /* @__PURE__ */ P.jsxs(
            "span",
            {
              className: `text-sm ${r >= 80 ? "text-red-600 dark:text-red-500" : "text-gray-600 dark:text-zinc-400"}`,
              children: [
                r >= 80 && /* @__PURE__ */ P.jsx(
                  qg,
                  {
                    "aria-label": "Alert",
                    className: "inline-block h-4 w-4 align-text-bottom"
                  }
                ),
                " " + n
              ]
            }
          )
        ] }),
        /* @__PURE__ */ P.jsx("div", { className: "relative h-2 w-64 rounded-full bg-gray-300 outline outline-1 -outline-offset-1 outline-transparent dark:bg-zinc-700", children: /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `absolute left-0 top-0 h-full rounded-full ${W8(r)} forced-colors:bg-[Highlight]`,
            style: { width: r + "%" }
          }
        ) })
      ] })
    }
  );
}
function W8(e) {
  return e < 70 ? "bg-green-600" : e < 80 ? "bg-orange-500" : "bg-red-600";
}
const G8 = se({
  base: "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out"
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in"
    }
  }
}), Z8 = se({
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
function V9(e) {
  return /* @__PURE__ */ P.jsx(tg, { ...e, className: G8, children: /* @__PURE__ */ P.jsx(h2, { ...e, className: Z8 }) });
}
function L9({
  label: e,
  description: t,
  errorMessage: r,
  ...n
}) {
  return /* @__PURE__ */ P.jsxs(
    D2,
    {
      ...n,
      className: He(
        n.className,
        "group flex flex-col gap-1"
      ),
      children: [
        /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsx(xa, { children: (a) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
          /* @__PURE__ */ P.jsx(Yi, {}),
          /* @__PURE__ */ P.jsxs(
            "div",
            {
              className: Jn({
                ...a,
                class: "flex flex-col border-s-2"
              }),
              children: [
                /* @__PURE__ */ P.jsx(ud, { slot: "increment", children: /* @__PURE__ */ P.jsx(Jg, { "aria-hidden": !0, className: "h-4 w-4" }) }),
                /* @__PURE__ */ P.jsx(
                  "div",
                  {
                    className: Jn({
                      ...a,
                      class: "border-b-2"
                    })
                  }
                ),
                /* @__PURE__ */ P.jsx(ud, { slot: "decrement", children: /* @__PURE__ */ P.jsx(go, { "aria-hidden": !0, className: "h-4 w-4" }) })
              ]
            }
          )
        ] }) }),
        t && /* @__PURE__ */ P.jsx(Et, { children: t }),
        /* @__PURE__ */ P.jsx(Rt, { children: r })
      ]
    }
  );
}
function ud(e) {
  return /* @__PURE__ */ P.jsx(
    hn,
    {
      ...e,
      className: "cursor-default px-0.5 text-gray-500 pressed:bg-gray-100 group-disabled:text-gray-200 dark:text-zinc-400 dark:pressed:bg-zinc-800 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]"
    }
  );
}
function O9({ label: e, ...t }) {
  return /* @__PURE__ */ P.jsx(
    P2,
    {
      ...t,
      className: He(
        t.className,
        "flex flex-col gap-1"
      ),
      children: ({ percentage: r, valueText: n, isIndeterminate: a }) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        /* @__PURE__ */ P.jsxs("div", { className: "flex justify-between gap-2", children: [
          /* @__PURE__ */ P.jsx(at, { children: e }),
          /* @__PURE__ */ P.jsx("span", { className: "text-sm text-gray-600 dark:text-zinc-400", children: n })
        ] }),
        /* @__PURE__ */ P.jsx("div", { className: "relative h-2 w-64 overflow-hidden rounded-full bg-gray-300 outline outline-1 -outline-offset-1 outline-transparent dark:bg-zinc-700", children: /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `absolute top-0 h-full rounded-full bg-blue-600 dark:bg-blue-500 forced-colors:bg-[Highlight] ${a ? "left-full duration-1000 ease-out animate-in slide-out-to-right-full repeat-infinite [--tw-enter-translate-x:calc(-16rem-100%)]" : "left-0"}`,
            style: { width: (a ? 40 : r) + "%" }
          }
        ) })
      ] })
    }
  );
}
function j9(e) {
  return /* @__PURE__ */ P.jsxs(
    F2,
    {
      ...e,
      className: He(
        e.className,
        "group flex flex-col gap-2"
      ),
      children: [
        /* @__PURE__ */ P.jsx(at, { children: e.label }),
        /* @__PURE__ */ P.jsx("div", { className: "flex gap-2 group-orientation-horizontal:gap-4 group-orientation-vertical:flex-col", children: e.children }),
        e.description && /* @__PURE__ */ P.jsx(Et, { children: e.description }),
        /* @__PURE__ */ P.jsx(Rt, { children: e.errorMessage })
      ]
    }
  );
}
const q8 = se({
  extend: Me,
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
function _9(e) {
  return /* @__PURE__ */ P.jsx(
    A2,
    {
      ...e,
      className: He(
        e.className,
        "group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]"
      ),
      children: (t) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        /* @__PURE__ */ P.jsx("div", { className: q8(t) }),
        e.children
      ] })
    }
  );
}
function H9({
  label: e,
  description: t,
  errorMessage: r,
  ...n
}) {
  return /* @__PURE__ */ P.jsxs(
    M2,
    {
      ...n,
      className: He(
        n.className,
        "group flex min-w-[40px] flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsxs(xa, { children: [
          /* @__PURE__ */ P.jsx(
            e$,
            {
              "aria-hidden": !0,
              className: "ml-2 h-4 w-4 text-gray-500 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
            }
          ),
          /* @__PURE__ */ P.jsx(Yi, { className: "[&::-webkit-search-cancel-button]:hidden" }),
          /* @__PURE__ */ P.jsx(gr, { variant: "icon", className: "mr-1 w-6 group-empty:invisible", children: /* @__PURE__ */ P.jsx(pd, { "aria-hidden": !0, className: "h-4 w-4" }) })
        ] }),
        t && /* @__PURE__ */ P.jsx(Et, { children: t }),
        /* @__PURE__ */ P.jsx(Rt, { children: r })
      ]
    }
  );
}
const Y8 = se({
  extend: Me,
  base: "flex items-center text-start gap-4 w-full cursor-default border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none rounded-lg pl-3 pr-2 py-2 min-w-[150px] transition bg-gray-50 dark:bg-zinc-700",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-300 hover:bg-gray-100 pressed:bg-gray-200 dark:hover:bg-zinc-600 dark:pressed:bg-zinc-500 group-invalid:border-red-600 forced-colors:group-invalid:border-[Mark]",
      true: "text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText] dark:bg-zinc-800 dark:border-white/5 forced-colors:border-[GrayText]"
    }
  }
});
function U9({
  label: e,
  description: t,
  errorMessage: r,
  children: n,
  items: a,
  ...i
}) {
  return /* @__PURE__ */ P.jsxs(
    N2,
    {
      ...i,
      className: He(
        i.className,
        "group flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsxs(hn, { className: Y8, children: [
          /* @__PURE__ */ P.jsx(z2, { className: "flex-1 text-sm placeholder-shown:italic" }),
          /* @__PURE__ */ P.jsx(
            go,
            {
              "aria-hidden": !0,
              className: "h-4 w-4 text-gray-600 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
            }
          )
        ] }),
        t && /* @__PURE__ */ P.jsx(Et, { children: t }),
        /* @__PURE__ */ P.jsx(Rt, { children: r }),
        /* @__PURE__ */ P.jsx(Da, { className: "min-w-[--trigger-width]", children: /* @__PURE__ */ P.jsx(
          bu,
          {
            items: a,
            className: "max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]",
            children: n
          }
        ) })
      ]
    }
  );
}
function W9(e) {
  return /* @__PURE__ */ P.jsx(wg, { ...e });
}
function G9(e) {
  return /* @__PURE__ */ P.jsx(Su, { ...e });
}
const J8 = se({
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
function Z9(e) {
  return /* @__PURE__ */ P.jsx(
    Wi,
    {
      ...e,
      className: J8({
        orientation: e.orientation,
        className: e.className
      })
    }
  );
}
const X8 = se({
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
}), Q8 = se({
  extend: Me,
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
function q9({
  label: e,
  thumbLabels: t,
  ...r
}) {
  return /* @__PURE__ */ P.jsxs(
    O2,
    {
      ...r,
      className: He(
        r.className,
        "grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:grid orientation-horizontal:w-64 orientation-vertical:flex"
      ),
      children: [
        /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsx(_2, { className: "text-sm font-medium text-gray-500 orientation-vertical:hidden dark:text-zinc-400", children: ({ state: n }) => n.values.map((a, i) => n.getThumbValueLabel(i)).join(" – ") }),
        /* @__PURE__ */ P.jsx(U2, { className: "group col-span-2 flex items-center orientation-horizontal:h-6 orientation-vertical:h-64 orientation-vertical:w-6", children: ({ state: n, ...a }) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
          /* @__PURE__ */ P.jsx("div", { className: X8(a) }),
          n.values.map((i, l) => /* @__PURE__ */ P.jsx(
            G2,
            {
              index: l,
              "aria-label": t == null ? void 0 : t[l],
              className: Q8
            },
            l
          ))
        ] }) })
      ]
    }
  );
}
const e9 = se({
  extend: Me,
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
}), t9 = se({
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
function Y9({ children: e, ...t }) {
  return /* @__PURE__ */ P.jsx(
    Y2,
    {
      ...t,
      className: He(
        t.className,
        "group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]"
      ),
      children: (r) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        /* @__PURE__ */ P.jsx("div", { className: e9(r), children: /* @__PURE__ */ P.jsx("span", { className: t9(r) }) }),
        e
      ] })
    }
  );
}
function J9(e) {
  return /* @__PURE__ */ P.jsx(Q2, { className: "relative max-h-[280px] w-[550px] scroll-pt-[2.281rem] overflow-auto rounded-lg border dark:border-zinc-600", children: /* @__PURE__ */ P.jsx(r7, { ...e, className: "border-separate border-spacing-0" }) });
}
const r9 = se({
  extend: Me,
  base: "px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden"
}), n9 = se({
  extend: Me,
  base: "w-px px-[8px] translate-x-[8px] box-content py-1 h-5 bg-clip-content bg-gray-400 dark:bg-zinc-500 forced-colors:bg-[ButtonBorder] cursor-col-resize rounded resizing:bg-blue-600 forced-colors:resizing:bg-[Highlight] resizing:w-[2px] resizing:pl-[7px] -outline-offset-2"
});
function a9(e) {
  return /* @__PURE__ */ P.jsx(
    og,
    {
      ...e,
      className: He(
        e.className,
        "cursor-default text-start text-sm font-semibold text-gray-700 dark:text-zinc-300 [&:focus-within]:z-20 [&:hover]:z-20"
      ),
      children: Ze(
        e.children,
        (t, { allowsSorting: r, sortDirection: n }) => /* @__PURE__ */ P.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ P.jsxs(du, { role: "presentation", tabIndex: -1, className: r9, children: [
            /* @__PURE__ */ P.jsx("span", { className: "truncate", children: t }),
            r && /* @__PURE__ */ P.jsx(
              "span",
              {
                className: `flex h-4 w-4 items-center justify-center transition ${n === "descending" ? "rotate-180" : ""}`,
                children: n && /* @__PURE__ */ P.jsx(
                  Yg,
                  {
                    "aria-hidden": !0,
                    className: "h-4 w-4 text-gray-500 dark:text-zinc-400 forced-colors:text-[ButtonText]"
                  }
                )
              }
            )
          ] }),
          !e.width && /* @__PURE__ */ P.jsx(m7, { className: n9 })
        ] })
      )
    }
  );
}
function X9(e) {
  let { selectionBehavior: t, selectionMode: r, allowsDragging: n } = lg();
  return /* @__PURE__ */ P.jsxs(
    a7,
    {
      ...e,
      className: Ot(
        "sticky top-0 z-10 rounded-t-lg border-b bg-gray-100/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:border-b-zinc-700 dark:bg-zinc-700/60 dark:supports-[-moz-appearance:none]:bg-zinc-700 forced-colors:bg-[Canvas]",
        e.className
      ),
      children: [
        n && /* @__PURE__ */ P.jsx(a9, {}),
        t === "toggle" && /* @__PURE__ */ P.jsx(
          og,
          {
            width: 36,
            minWidth: 36,
            className: "cursor-default p-2 text-start text-sm font-semibold",
            children: r === "multiple" && /* @__PURE__ */ P.jsx(wu, { slot: "selection" })
          }
        ),
        /* @__PURE__ */ P.jsx(ou, { items: e.columns, children: e.children })
      ]
    }
  );
}
const i9 = se({
  extend: Me,
  base: "group/row relative cursor-default select-none -outline-offset-2 text-gray-900 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700/60 selected:bg-blue-100 selected:hover:bg-blue-200 dark:selected:bg-blue-700/30 dark:selected:hover:bg-blue-700/40"
});
function Q9({
  id: e,
  columns: t,
  children: r,
  ...n
}) {
  let { selectionBehavior: a, allowsDragging: i } = lg();
  return /* @__PURE__ */ P.jsxs(o7, { id: e, ...n, className: i9, children: [
    i && /* @__PURE__ */ P.jsx(sd, { children: /* @__PURE__ */ P.jsx(hn, { slot: "drag", children: "≡" }) }),
    a === "toggle" && /* @__PURE__ */ P.jsx(sd, { children: /* @__PURE__ */ P.jsx(wu, { slot: "selection" }) }),
    /* @__PURE__ */ P.jsx(ou, { items: t, children: r })
  ] });
}
const l9 = se({
  extend: Me,
  base: "border-b dark:border-b-zinc-700 group-last/row:border-b-0 [--selected-border:theme(colors.blue.200)] dark:[--selected-border:theme(colors.blue.900)] group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border] p-2 truncate -outline-offset-2"
});
function sd(e) {
  return /* @__PURE__ */ P.jsx(s7, { ...e, className: l9 });
}
const o9 = se({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row w-[800px]"
    }
  }
});
function eC(e) {
  return /* @__PURE__ */ P.jsx(
    E7,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => o9({ ...r, className: t })
      )
    }
  );
}
const u9 = se({
  base: "flex gap-1",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
});
function tC(e) {
  return /* @__PURE__ */ P.jsx(
    S7,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => u9({ ...r, className: t })
      )
    }
  );
}
const s9 = se({
  extend: Me,
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
function rC(e) {
  return /* @__PURE__ */ P.jsx(
    k7,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => s9({ ...r, className: t })
      )
    }
  );
}
const d9 = se({
  extend: Me,
  base: "flex-1 p-4 text-sm text-gray-900 dark:text-zinc-100"
});
function nC(e) {
  return /* @__PURE__ */ P.jsx(
    T7,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => d9({ ...r, className: t })
      )
    }
  );
}
const dd = {
  gray: "bg-gray-100 text-gray-600 border-gray-200 hover:border-gray-300 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600 dark:hover:border-zinc-500",
  green: "bg-green-100 text-green-700 border-green-200 hover:border-green-300 dark:bg-green-300/20 dark:text-green-400 dark:border-green-300/10 dark:hover:border-green-300/20",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:border-yellow-300 dark:bg-yellow-300/20 dark:text-yellow-400 dark:border-yellow-300/10 dark:hover:border-yellow-300/20",
  blue: "bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/10 dark:hover:border-blue-400/20"
}, Sg = Z("gray"), c9 = se({
  extend: Me,
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
  compoundVariants: Object.keys(dd).map((e) => ({
    isSelected: !1,
    color: e,
    class: dd[e]
  }))
});
function aC({
  label: e,
  description: t,
  errorMessage: r,
  items: n,
  children: a,
  renderEmptyState: i,
  ...l
}) {
  return /* @__PURE__ */ P.jsxs(
    I7,
    {
      ...l,
      className: Ot("flex flex-col gap-1", l.className),
      children: [
        /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsx(Sg.Provider, { value: l.color || "gray", children: /* @__PURE__ */ P.jsx(
          z7,
          {
            items: n,
            renderEmptyState: i,
            className: "flex flex-wrap gap-1",
            children: a
          }
        ) }),
        t && /* @__PURE__ */ P.jsx(Et, { children: t }),
        r && /* @__PURE__ */ P.jsx(va, { slot: "errorMessage", className: "text-sm text-red-600", children: r })
      ]
    }
  );
}
const f9 = se({
  extend: Me,
  base: "cursor-default rounded-full transition-[background-color] p-0.5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 pressed:bg-black/20 dark:pressed:bg-white/20"
});
function iC({ children: e, color: t, ...r }) {
  let n = typeof e == "string" ? e : void 0, a = G(Sg);
  return /* @__PURE__ */ P.jsx(
    L7,
    {
      textValue: n,
      ...r,
      className: Ze(
        r.className,
        (i, l) => c9({ ...l, className: i, color: t || a })
      ),
      children: ({ allowsRemoving: i }) => /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        e,
        i && /* @__PURE__ */ P.jsx(hn, { slot: "remove", className: f9, children: /* @__PURE__ */ P.jsx(pd, { "aria-hidden": !0, className: "h-3 w-3" }) })
      ] })
    }
  );
}
const p9 = se({
  extend: Me,
  base: "border rounded-md",
  variants: {
    isFocused: Jn.variants.isFocusWithin,
    ...Jn.variants
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
function lC({
  label: e,
  description: t,
  errorMessage: r,
  ...n
}) {
  return /* @__PURE__ */ P.jsxs(
    U7,
    {
      ...n,
      className: He(
        n.className,
        "flex flex-col gap-1"
      ),
      children: [
        e && /* @__PURE__ */ P.jsx(at, { children: e }),
        /* @__PURE__ */ P.jsx(Yi, { className: p9 }),
        t && /* @__PURE__ */ P.jsx(Et, { children: t }),
        /* @__PURE__ */ P.jsx(Rt, { children: r })
      ]
    }
  );
}
function oC({
  label: e,
  description: t,
  errorMessage: r,
  ...n
}) {
  return /* @__PURE__ */ P.jsxs(AD, { ...n, children: [
    /* @__PURE__ */ P.jsx(at, { children: e }),
    /* @__PURE__ */ P.jsx(Xn, {}),
    t && /* @__PURE__ */ P.jsx(Et, { children: t }),
    /* @__PURE__ */ P.jsx(Rt, { children: r })
  ] });
}
let b9 = se({
  extend: Me,
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
function uC(e) {
  return /* @__PURE__ */ P.jsx(
    Z7,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => b9({ ...r, className: t })
      )
    }
  );
}
const m9 = se({
  base: "flex gap-2",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
});
function sC(e) {
  return /* @__PURE__ */ P.jsx(
    J7,
    {
      ...e,
      className: Ze(
        e.className,
        (t, r) => m9({ ...r, className: t })
      )
    }
  );
}
const h9 = se({
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
function dC({ children: e, ...t }) {
  return /* @__PURE__ */ P.jsxs(
    e8,
    {
      ...t,
      offset: 10,
      className: Ze(
        t.className,
        (r, n) => h9({ ...n, className: r })
      ),
      children: [
        /* @__PURE__ */ P.jsx(bv, { children: /* @__PURE__ */ P.jsx(
          "svg",
          {
            width: 8,
            height: 8,
            viewBox: "0 0 8 8",
            className: "fill-slate-700 stroke-gray-800 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 dark:fill-slate-600 dark:stroke-white/10 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
            children: /* @__PURE__ */ P.jsx("path", { d: "M0 0 L4 4 L8 0" })
          }
        ) }),
        e
      ]
    }
  );
}
export {
  $9 as AlertDialog,
  x9 as Breadcrumb,
  y9 as Breadcrumbs,
  gr as Button,
  K8 as Calendar,
  Cg as CalendarGridHeader,
  Dg as CalendarHeader,
  sd as Cell,
  wu as Checkbox,
  D9 as CheckboxGroup,
  a9 as Column,
  P9 as ComboBox,
  w9 as ComboBoxItem,
  S9 as ComboBoxSection,
  B9 as DateField,
  Xn as DateInput,
  k9 as DatePicker,
  F9 as DateRangePicker,
  Et as Description,
  Pu as Dialog,
  wg as DropdownItem,
  Su as DropdownSection,
  Rt as FieldError,
  xa as FieldGroup,
  A9 as Form,
  T9 as GridList,
  R9 as GridListItem,
  Yi as Input,
  at as Label,
  I8 as Link,
  C9 as ListBox,
  E9 as ListBoxItem,
  M9 as Menu,
  I9 as MenuItem,
  K9 as MenuSection,
  N9 as MenuSeparator,
  z9 as Meter,
  V9 as Modal,
  L9 as NumberField,
  Da as Popover,
  O9 as ProgressBar,
  _9 as Radio,
  j9 as RadioGroup,
  H8 as RangeCalendar,
  Q9 as Row,
  H9 as SearchField,
  U9 as Select,
  W9 as SelectItem,
  G9 as SelectSection,
  Z9 as Separator,
  q9 as Slider,
  Y9 as Switch,
  rC as Tab,
  tC as TabList,
  nC as TabPanel,
  J9 as Table,
  X9 as TableHeader,
  eC as Tabs,
  iC as Tag,
  aC as TagGroup,
  lC as TextField,
  oC as TimeField,
  uC as ToggleButton,
  sC as Toolbar,
  dC as Tooltip,
  He as composeTailwindRenderProps,
  Pg as dropdownItemStyles,
  Jn as fieldBorderStyles,
  Eg as fieldGroupStyles,
  Me as focusRing,
  L8 as itemStyles
};
//# sourceMappingURL=gss-ui.js.map
