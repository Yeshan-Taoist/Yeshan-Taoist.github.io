import {
  Lwt,
  UC,
  cle,
  dle,
  fle,
  gle,
  hle,
  iL,
  iu,
  lle,
  mle,
  ple,
  rL,
  ule,
  yle
} from "./chunk-T43AG3MD.js";

// node_modules/vitepress-plugin-legend/dist/arc-CegaQWj_-yn6JxQT-.js
function fn(i) {
  return i.innerRadius;
}
function ln(i) {
  return i.outerRadius;
}
function gn(i) {
  return i.startAngle;
}
function pn(i) {
  return i.endAngle;
}
function xn(i) {
  return i && i.padAngle;
}
function mn(i, d, I, q, v, T, S, a) {
  var L = I - i, r = q - d, n = S - v, p = a - T, u = p * L - n * r;
  if (!(u * u < rL))
    return u = (n * (d - T) - p * (i - v)) / u, [i + u * L, d + u * r];
}
function Y(i, d, I, q, v, T, S) {
  var a = i - I, L = d - q, r = (S ? T : -T) / ple(a * a + L * L), n = r * L, p = -r * a, u = i + n, s = d + p, e = I + n, f = q + p, _ = (u + e) / 2, o = (s + f) / 2, x = e - u, g = f - s, A = x * x + g * g, F = v - T, O = u * f - e * s, P = (g < 0 ? -1 : 1) * ple(hle(0, F * F * A - O * O)), W = (O * g - x * P) / A, B = (-O * x - g * P) / A, R = (O * g + x * P) / A, m = (-O * x + g * P) / A, h = W - _, t = B - o, c = R - _, j = m - o;
  return h * h + t * t > c * c + j * j && (W = R, B = m), {
    cx: W,
    cy: B,
    x01: -n,
    y01: -p,
    x11: W * (v / F - 1),
    y11: B * (v / F - 1)
  };
}
function dn() {
  var i = fn, d = ln, I = iu(0), q = null, v = gn, T = pn, S = xn, a = null, L = Lwt(r);
  function r() {
    var n, p, u = +i.apply(this, arguments), s = +d.apply(this, arguments), e = v.apply(this, arguments) - iL, f = T.apply(this, arguments) - iL, _ = lle(f - e), o = f > e;
    if (a || (a = n = L()), s < u && (p = s, s = u, u = p), !(s > rL)) a.moveTo(0, 0);
    else if (_ > gle - rL)
      a.moveTo(s * ule(e), s * fle(e)), a.arc(0, 0, s, e, f, !o), u > rL && (a.moveTo(u * ule(f), u * fle(f)), a.arc(0, 0, u, f, e, o));
    else {
      var x = e, g = f, A = e, F = f, O = _, P = _, W = S.apply(this, arguments) / 2, B = W > rL && (q ? +q.apply(this, arguments) : ple(u * u + s * s)), R = dle(lle(s - u) / 2, +I.apply(this, arguments)), m = R, h = R, t, c;
      if (B > rL) {
        var j = yle(B / u * fle(W)), k = yle(B / s * fle(W));
        (O -= j * 2) > rL ? (j *= o ? 1 : -1, A += j, F -= j) : (O = 0, A = F = (e + f) / 2), (P -= k * 2) > rL ? (k *= o ? 1 : -1, x += k, g -= k) : (P = 0, x = g = (e + f) / 2);
      }
      var G = s * ule(x), Q = s * fle(x), M = u * ule(F), N = u * fle(F);
      if (R > rL) {
        var U = s * ule(g), X = s * fle(g), Z = u * ule(A), $ = u * fle(A), H;
        if (_ < UC)
          if (H = mn(G, Q, Z, $, U, X, M, N)) {
            var J = G - H[0], V = Q - H[1], K = U - H[0], w = X - H[1], nn = 1 / fle(mle((J * K + V * w) / (ple(J * J + V * V) * ple(K * K + w * w))) / 2), tn = ple(H[0] * H[0] + H[1] * H[1]);
            m = dle(R, (u - tn) / (nn - 1)), h = dle(R, (s - tn) / (nn + 1));
          } else
            m = h = 0;
      }
      P > rL ? h > rL ? (t = Y(Z, $, G, Q, s, h, o), c = Y(U, X, M, N, s, h, o), a.moveTo(t.cx + t.x01, t.cy + t.y01), h < R ? a.arc(t.cx, t.cy, h, cle(t.y01, t.x01), cle(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, h, cle(t.y01, t.x01), cle(t.y11, t.x11), !o), a.arc(0, 0, s, cle(t.cy + t.y11, t.cx + t.x11), cle(c.cy + c.y11, c.cx + c.x11), !o), a.arc(c.cx, c.cy, h, cle(c.y11, c.x11), cle(c.y01, c.x01), !o))) : (a.moveTo(G, Q), a.arc(0, 0, s, x, g, !o)) : a.moveTo(G, Q), !(u > rL) || !(O > rL) ? a.lineTo(M, N) : m > rL ? (t = Y(M, N, U, X, u, -m, o), c = Y(G, Q, Z, $, u, -m, o), a.lineTo(t.cx + t.x01, t.cy + t.y01), m < R ? a.arc(t.cx, t.cy, m, cle(t.y01, t.x01), cle(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, m, cle(t.y01, t.x01), cle(t.y11, t.x11), !o), a.arc(0, 0, u, cle(t.cy + t.y11, t.cx + t.x11), cle(c.cy + c.y11, c.cx + c.x11), o), a.arc(c.cx, c.cy, m, cle(c.y11, c.x11), cle(c.y01, c.x01), !o))) : a.arc(0, 0, u, F, A, o);
    }
    if (a.closePath(), n) return a = null, n + "" || null;
  }
  return r.centroid = function() {
    var n = (+i.apply(this, arguments) + +d.apply(this, arguments)) / 2, p = (+v.apply(this, arguments) + +T.apply(this, arguments)) / 2 - UC / 2;
    return [ule(p) * n, fle(p) * n];
  }, r.innerRadius = function(n) {
    return arguments.length ? (i = typeof n == "function" ? n : iu(+n), r) : i;
  }, r.outerRadius = function(n) {
    return arguments.length ? (d = typeof n == "function" ? n : iu(+n), r) : d;
  }, r.cornerRadius = function(n) {
    return arguments.length ? (I = typeof n == "function" ? n : iu(+n), r) : I;
  }, r.padRadius = function(n) {
    return arguments.length ? (q = n == null ? null : typeof n == "function" ? n : iu(+n), r) : q;
  }, r.startAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : iu(+n), r) : v;
  }, r.endAngle = function(n) {
    return arguments.length ? (T = typeof n == "function" ? n : iu(+n), r) : T;
  }, r.padAngle = function(n) {
    return arguments.length ? (S = typeof n == "function" ? n : iu(+n), r) : S;
  }, r.context = function(n) {
    return arguments.length ? (a = n ?? null, r) : a;
  }, r;
}

export {
  dn
};
//# sourceMappingURL=chunk-SIW6YJ3R.js.map
