import {
  A,
  Er,
  L,
  P,
  R,
  br,
  ea,
  hr,
  qr,
  wa,
  yr
} from "./chunk-ATKLFEBH.js";
import {
  CX,
  Tc,
  U7t,
  g8t,
  kX,
  km,
  m2,
  p8t,
  wX,
  x2
} from "./chunk-T43AG3MD.js";

// node_modules/vitepress-plugin-legend/dist/_basePickBy-CC-D1y2F-DXbJFnnh.js
var N = /\s/;
function P2(r) {
  for (var t = r.length; t-- && N.test(r.charAt(t)); )
    ;
  return t;
}
var q = /^\s+/;
function z(r) {
  return r && r.slice(0, P2(r) + 1).replace(q, "");
}
var g = NaN;
var B = /^[-+]0x[0-9a-f]+$/i;
var D = /^0b[01]+$/i;
var G = /^0o[0-7]+$/i;
var H = parseInt;
function K(r) {
  if (typeof r == "number")
    return r;
  if (P(r))
    return g;
  if (Tc(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = Tc(t) ? t + "" : t;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = z(r);
  var a = D.test(r);
  return a || G.test(r) ? H(r.slice(2), a ? 2 : 8) : B.test(r) ? g : +r;
}
var p = 1 / 0;
var M = 17976931348623157e292;
function R2(r) {
  if (!r)
    return r === 0 ? r : 0;
  if (r = K(r), r === p || r === -p) {
    var t = r < 0 ? -1 : 1;
    return t * M;
  }
  return r === r ? r : 0;
}
function U(r) {
  var t = R2(r), a = t % 1;
  return t === t ? a ? t - a : t : 0;
}
function er(r) {
  var t = r == null ? 0 : r.length;
  return t ? wa(r) : [];
}
var O = Object.prototype;
var V = O.hasOwnProperty;
var ir = p8t(function(r, t) {
  r = Object(r);
  var a = -1, u = t.length, n = u > 2 ? t[2] : void 0;
  for (n && g8t(t[0], t[1], n) && (u = 1); ++a < u; )
    for (var i = t[a], o = kX(i), e = -1, f = o.length; ++e < f; ) {
      var v = o[e], l = r[v];
      (l === void 0 || m2(l, O[v]) && !V.call(r, v)) && (r[v] = i[v]);
    }
  return r;
});
function fr(r) {
  var t = r == null ? 0 : r.length;
  return t ? r[t - 1] : void 0;
}
function W(r) {
  return function(t, a, u) {
    var n = Object(t);
    if (!x2(t)) {
      var i = Er(a);
      t = A(t), a = function(e) {
        return i(n[e], e, n);
      };
    }
    var o = r(t, a, u);
    return o > -1 ? n[i ? t[o] : o] : void 0;
  };
}
var X = Math.max;
function Z(r, t, a) {
  var u = r == null ? 0 : r.length;
  if (!u)
    return -1;
  var n = a == null ? 0 : U(a);
  return n < 0 && (n = X(u + n, 0)), qr(r, Er(t), n);
}
var vr = W(Z);
function E(r, t) {
  var a = -1, u = x2(r) ? Array(r.length) : [];
  return R(r, function(n, i, o) {
    u[++a] = t(n, i, o);
  }), u;
}
function lr(r, t) {
  var a = km(r) ? br : E;
  return a(r, Er(t));
}
var F = Object.prototype;
var T = F.hasOwnProperty;
function rr(r, t) {
  return r != null && T.call(r, t);
}
function cr(r, t) {
  return r != null && ea(r, t, rr);
}
function tr(r, t) {
  return r < t;
}
function ar(r, t, a) {
  for (var u = -1, n = r.length; ++u < n; ) {
    var i = r[u], o = t(i);
    if (o != null && (e === void 0 ? o === o && !P(o) : a(o, e)))
      var e = o, f = i;
  }
  return f;
}
function sr(r) {
  return r && r.length ? ar(r, CX, tr) : void 0;
}
function nr(r, t, a, u) {
  if (!Tc(r))
    return r;
  t = yr(t, r);
  for (var n = -1, i = t.length, o = i - 1, e = r; e != null && ++n < i; ) {
    var f = L(t[n]), v = a;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return r;
    if (n != o) {
      var l = e[f];
      v = void 0, v === void 0 && (v = Tc(l) ? l : wX(t[n + 1]) ? [] : {});
    }
    U7t(e, f, v), e = e[f];
  }
  return r;
}
function gr(r, t, a) {
  for (var u = -1, n = t.length, i = {}; ++u < n; ) {
    var o = t[u], e = hr(r, o);
    a(e, o) && nr(i, yr(o, r), e);
  }
  return i;
}

export {
  R2 as R,
  U,
  er,
  ir,
  fr,
  vr,
  E,
  lr,
  cr,
  tr,
  ar,
  sr,
  gr
};
//# sourceMappingURL=chunk-TR6GTGKS.js.map
