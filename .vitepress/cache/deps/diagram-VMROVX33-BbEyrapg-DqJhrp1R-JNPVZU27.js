import {
  i
} from "./chunk-SGGL3WQA.js";
import {
  g
} from "./chunk-FYAW533G.js";
import {
  tt
} from "./chunk-UMZLSG66.js";
import "./chunk-STLHGINV.js";
import {
  Iy
} from "./chunk-KD3SOAXQ.js";
import "./chunk-Q2Q5HNLZ.js";
import "./chunk-TR6GTGKS.js";
import "./chunk-ATKLFEBH.js";
import {
  $
} from "./chunk-QYJTKBNV.js";
import {
  Gi,
  Gvt,
  Kvt,
  LU,
  Ot,
  Uvt,
  Vvt,
  Wvt,
  Xvt,
  Yvt,
  bn,
  o_,
  pG,
  q,
  s$t,
  wU,
  xe
} from "./chunk-T43AG3MD.js";
import "./chunk-LBRMFBTD.js";

// node_modules/vitepress-plugin-legend/dist/diagram-VMROVX33-BbEyrapg-DqJhrp1R.js
function Ce(t2) {
  var a = 0, n = t2.children, r = n && n.length;
  if (!r) a = 1;
  else for (; --r >= 0; ) a += n[r].value;
  t2.value = a;
}
function $e() {
  return this.eachAfter(Ce);
}
function we(t2, a) {
  let n = -1;
  for (const r of this)
    t2.call(a, r, ++n, this);
  return this;
}
function Le(t2, a) {
  for (var n = this, r = [n], o, s, d = -1; n = r.pop(); )
    if (t2.call(a, n, ++d, this), o = n.children)
      for (s = o.length - 1; s >= 0; --s)
        r.push(o[s]);
  return this;
}
function ke(t2, a) {
  for (var n = this, r = [n], o = [], s, d, h, f = -1; n = r.pop(); )
    if (o.push(n), s = n.children)
      for (d = 0, h = s.length; d < h; ++d)
        r.push(s[d]);
  for (; n = o.pop(); )
    t2.call(a, n, ++f, this);
  return this;
}
function Te(t2, a) {
  let n = -1;
  for (const r of this)
    if (t2.call(a, r, ++n, this))
      return r;
}
function Me(t2) {
  return this.eachAfter(function(a) {
    for (var n = +t2(a.data) || 0, r = a.children, o = r && r.length; --o >= 0; ) n += r[o].value;
    a.value = n;
  });
}
function ze(t2) {
  return this.eachBefore(function(a) {
    a.children && a.children.sort(t2);
  });
}
function Fe(t2) {
  for (var a = this, n = Ae(a, t2), r = [a]; a !== n; )
    a = a.parent, r.push(a);
  for (var o = r.length; t2 !== n; )
    r.splice(o, 0, t2), t2 = t2.parent;
  return r;
}
function Ae(t2, a) {
  if (t2 === a) return t2;
  var n = t2.ancestors(), r = a.ancestors(), o = null;
  for (t2 = n.pop(), a = r.pop(); t2 === a; )
    o = t2, t2 = n.pop(), a = r.pop();
  return o;
}
function Pe() {
  for (var t2 = this, a = [t2]; t2 = t2.parent; )
    a.push(t2);
  return a;
}
function Be() {
  return Array.from(this);
}
function Ne() {
  var t2 = [];
  return this.eachBefore(function(a) {
    a.children || t2.push(a);
  }), t2;
}
function De() {
  var t2 = this, a = [];
  return t2.each(function(n) {
    n !== t2 && a.push({ source: n.parent, target: n });
  }), a;
}
function* We() {
  var t2 = this, a, n = [t2], r, o, s;
  do
    for (a = n.reverse(), n = []; t2 = a.pop(); )
      if (yield t2, r = t2.children)
        for (o = 0, s = r.length; o < s; ++o)
          n.push(r[o]);
  while (n.length);
}
function Z(t2, a) {
  t2 instanceof Map ? (t2 = [void 0, t2], a === void 0 && (a = Ee)) : a === void 0 && (a = Re);
  for (var n = new J(t2), r, o = [n], s, d, h, f; r = o.pop(); )
    if ((d = a(r.data)) && (f = (d = Array.from(d)).length))
      for (r.children = d, h = f - 1; h >= 0; --h)
        o.push(s = d[h] = new J(d[h])), s.parent = r, s.depth = r.depth + 1;
  return n.eachBefore(Ve);
}
function Ie() {
  return Z(this).eachBefore(He);
}
function Re(t2) {
  return t2.children;
}
function Ee(t2) {
  return Array.isArray(t2) ? t2[1] : null;
}
function He(t2) {
  t2.data.value !== void 0 && (t2.value = t2.data.value), t2.data = t2.data.data;
}
function Ve(t2) {
  var a = 0;
  do
    t2.height = a;
  while ((t2 = t2.parent) && t2.height < ++a);
}
function J(t2) {
  this.data = t2, this.depth = this.height = 0, this.parent = null;
}
J.prototype = Z.prototype = {
  constructor: J,
  count: $e,
  each: we,
  eachAfter: ke,
  eachBefore: Le,
  find: Te,
  sum: Me,
  sort: ze,
  path: Fe,
  ancestors: Pe,
  descendants: Be,
  leaves: Ne,
  links: De,
  copy: Ie,
  [Symbol.iterator]: We
};
function je(t2) {
  if (typeof t2 != "function") throw new Error();
  return t2;
}
function H() {
  return 0;
}
function V(t2) {
  return function() {
    return t2;
  };
}
function Oe(t2) {
  t2.x0 = Math.round(t2.x0), t2.y0 = Math.round(t2.y0), t2.x1 = Math.round(t2.x1), t2.y1 = Math.round(t2.y1);
}
function Ge(t2, a, n, r, o) {
  for (var s = t2.children, d, h = -1, f = s.length, i2 = t2.value && (r - a) / t2.value; ++h < f; )
    d = s[h], d.y0 = n, d.y1 = o, d.x0 = a, d.x1 = a += d.value * i2;
}
function qe(t2, a, n, r, o) {
  for (var s = t2.children, d, h = -1, f = s.length, i2 = t2.value && (o - n) / t2.value; ++h < f; )
    d = s[h], d.x0 = a, d.x1 = r, d.y0 = n, d.y1 = n += d.value * i2;
}
var Xe = (1 + Math.sqrt(5)) / 2;
function _e(t2, a, n, r, o, s) {
  for (var d = [], h = a.children, f, i2, p = 0, b = 0, l = h.length, v, g2, x = a.value, u, m, A, M, P, D, k; p < l; ) {
    v = o - n, g2 = s - r;
    do
      u = h[b++].value;
    while (!u && b < l);
    for (m = A = u, D = Math.max(g2 / v, v / g2) / (x * t2), k = u * u * D, P = Math.max(A / k, k / m); b < l; ++b) {
      if (u += i2 = h[b].value, i2 < m && (m = i2), i2 > A && (A = i2), k = u * u * D, M = Math.max(A / k, k / m), M > P) {
        u -= i2;
        break;
      }
      P = M;
    }
    d.push(f = { value: u, dice: v < g2, children: h.slice(p, b) }), f.dice ? Ge(f, n, r, o, x ? r += g2 * u / x : s) : qe(f, n, r, x ? n += v * u / x : o, s), x -= u, p = b;
  }
  return d;
}
var Je = (function t(a) {
  function n(r, o, s, d, h) {
    _e(a, r, o, s, d, h);
  }
  return n.ratio = function(r) {
    return t((r = +r) > 1 ? r : 1);
  }, n;
})(Xe);
function Ke() {
  var t2 = Je, a = false, n = 1, r = 1, o = [0], s = H, d = H, h = H, f = H, i2 = H;
  function p(l) {
    return l.x0 = l.y0 = 0, l.x1 = n, l.y1 = r, l.eachBefore(b), o = [0], a && l.eachBefore(Oe), l;
  }
  function b(l) {
    var v = o[l.depth], g2 = l.x0 + v, x = l.y0 + v, u = l.x1 - v, m = l.y1 - v;
    u < g2 && (g2 = u = (g2 + u) / 2), m < x && (x = m = (x + m) / 2), l.x0 = g2, l.y0 = x, l.x1 = u, l.y1 = m, l.children && (v = o[l.depth + 1] = s(l) / 2, g2 += i2(l) - v, x += d(l) - v, u -= h(l) - v, m -= f(l) - v, u < g2 && (g2 = u = (g2 + u) / 2), m < x && (x = m = (x + m) / 2), t2(l, g2, x, u, m));
  }
  return p.round = function(l) {
    return arguments.length ? (a = !!l, p) : a;
  }, p.size = function(l) {
    return arguments.length ? (n = +l[0], r = +l[1], p) : [n, r];
  }, p.tile = function(l) {
    return arguments.length ? (t2 = je(l), p) : t2;
  }, p.padding = function(l) {
    return arguments.length ? p.paddingInner(l).paddingOuter(l) : p.paddingInner();
  }, p.paddingInner = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : V(+l), p) : s;
  }, p.paddingOuter = function(l) {
    return arguments.length ? p.paddingTop(l).paddingRight(l).paddingBottom(l).paddingLeft(l) : p.paddingTop();
  }, p.paddingTop = function(l) {
    return arguments.length ? (d = typeof l == "function" ? l : V(+l), p) : d;
  }, p.paddingRight = function(l) {
    return arguments.length ? (h = typeof l == "function" ? l : V(+l), p) : h;
  }, p.paddingBottom = function(l) {
    return arguments.length ? (f = typeof l == "function" ? l : V(+l), p) : f;
  }, p.paddingLeft = function(l) {
    return arguments.length ? (i2 = typeof l == "function" ? l : V(+l), p) : i2;
  }, p;
}
var Q;
var ae = (Q = class {
  constructor() {
    this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = Uvt, this.getAccTitle = Vvt, this.setDiagramTitle = Yvt, this.getDiagramTitle = Kvt, this.getAccDescription = Xvt, this.setAccDescription = Gvt;
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    const t2 = wU, a = Gi();
    return o_({
      ...t2.treemap,
      ...a.treemap ?? {}
    });
  }
  addNode(t2, a) {
    this.nodes.push(t2), this.levels.set(t2, a), a === 0 && (this.outerNodes.push(t2), this.root ??= t2);
  }
  getRoot() {
    return { name: "", children: this.outerNodes };
  }
  addClass(t2, a) {
    const n = this.classes.get(t2) ?? { id: t2, styles: [], textStyles: [] }, r = a.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    r && r.forEach((o) => {
      pG(o) && (n?.textStyles ? n.textStyles.push(o) : n.textStyles = [o]), n?.styles ? n.styles.push(o) : n.styles = [o];
    }), this.classes.set(t2, n);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(t2) {
    return this.classes.get(t2)?.styles ?? [];
  }
  clear() {
    Wvt(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
  }
}, q(Q, "TreeMapDB"), Q);
function ne(t2) {
  if (!t2.length)
    return [];
  const a = [], n = [];
  return t2.forEach((r) => {
    const o = {
      name: r.name,
      children: r.type === "Leaf" ? void 0 : []
    };
    for (o.classSelector = r?.classSelector, r?.cssCompiledStyles && (o.cssCompiledStyles = [r.cssCompiledStyles]), r.type === "Leaf" && r.value !== void 0 && (o.value = r.value); n.length > 0 && n[n.length - 1].level >= r.level; )
      n.pop();
    if (n.length === 0)
      a.push(o);
    else {
      const s = n[n.length - 1].node;
      s.children ? s.children.push(o) : s.children = [o];
    }
    r.type !== "Leaf" && n.push({ node: o, level: r.level });
  }), a;
}
q(ne, "buildHierarchy");
var Qe = q((t2, a) => {
  i(t2, a);
  const n = [];
  for (const s of t2.TreemapRows ?? [])
    s.$type === "ClassDefStatement" && a.addClass(s.className ?? "", s.styleText ?? "");
  for (const s of t2.TreemapRows ?? []) {
    const d = s.item;
    if (!d)
      continue;
    const h = s.indent ? parseInt(s.indent) : 0, f = Ue(d), i2 = d.classSelector ? a.getStylesForClass(d.classSelector) : [], p = i2.length > 0 ? i2.join(";") : void 0, b = {
      level: h,
      name: f,
      type: d.$type,
      value: d.value,
      classSelector: d.classSelector,
      cssCompiledStyles: p
    };
    n.push(b);
  }
  const r = ne(n), o = q((s, d) => {
    for (const h of s)
      a.addNode(h, d), h.children && h.children.length > 0 && o(h.children, d + 1);
  }, "addNodesRecursively");
  o(r, 0);
}, "populate");
var Ue = q((t2) => t2.name ? String(t2.name) : "", "getItemName");
var re = {
  // @ts-expect-error - TreeMapDB is not assignable to DiagramDB
  parser: { yy: void 0 },
  parse: q(async (t2) => {
    try {
      const a = await Iy("treemap", t2);
      Ot.debug("Treemap AST:", a);
      const n = re.parser?.yy;
      if (!(n instanceof ae))
        throw new Error(
          "parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues."
        );
      Qe(a, n);
    } catch (a) {
      throw Ot.error("Error parsing treemap:", a), a;
    }
  }, "parse")
};
var Ze = 10;
var N = 10;
var j = 25;
var Ye = q((t2, a, n, r) => {
  const o = r.db, s = o.getConfig(), d = s.padding ?? Ze, h = o.getDiagramTitle(), f = o.getRoot(), { themeVariables: i2 } = Gi();
  if (!f)
    return;
  const p = h ? 30 : 0, b = s$t(a), l = s.nodeWidth ? s.nodeWidth * N : 960, v = s.nodeHeight ? s.nodeHeight * N : 500, g2 = l, x = v + p;
  b.attr("viewBox", `0 0 ${g2} ${x}`), LU(b, x, g2, s.useMaxWidth);
  let u;
  try {
    const e = s.valueFormat || ",";
    if (e === "$0,0")
      u = q((c) => "$" + tt(",")(c), "valueFormat");
    else if (e.startsWith("$") && e.includes(",")) {
      const c = /\.\d+/.exec(e), y = c ? c[0] : "";
      u = q((w) => "$" + tt("," + y)(w), "valueFormat");
    } else if (e.startsWith("$")) {
      const c = e.substring(1);
      u = q((y) => "$" + tt(c || "")(y), "valueFormat");
    } else
      u = tt(e);
  } catch (e) {
    Ot.error("Error creating format function:", e), u = tt(",");
  }
  const m = g().range([
    "transparent",
    i2.cScale0,
    i2.cScale1,
    i2.cScale2,
    i2.cScale3,
    i2.cScale4,
    i2.cScale5,
    i2.cScale6,
    i2.cScale7,
    i2.cScale8,
    i2.cScale9,
    i2.cScale10,
    i2.cScale11
  ]), A = g().range([
    "transparent",
    i2.cScalePeer0,
    i2.cScalePeer1,
    i2.cScalePeer2,
    i2.cScalePeer3,
    i2.cScalePeer4,
    i2.cScalePeer5,
    i2.cScalePeer6,
    i2.cScalePeer7,
    i2.cScalePeer8,
    i2.cScalePeer9,
    i2.cScalePeer10,
    i2.cScalePeer11
  ]), M = g().range([
    i2.cScaleLabel0,
    i2.cScaleLabel1,
    i2.cScaleLabel2,
    i2.cScaleLabel3,
    i2.cScaleLabel4,
    i2.cScaleLabel5,
    i2.cScaleLabel6,
    i2.cScaleLabel7,
    i2.cScaleLabel8,
    i2.cScaleLabel9,
    i2.cScaleLabel10,
    i2.cScaleLabel11
  ]);
  h && b.append("text").attr("x", g2 / 2).attr("y", p / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(h);
  const P = b.append("g").attr("transform", `translate(0, ${p})`).attr("class", "treemapContainer"), D = Z(f).sum((e) => e.value ?? 0).sort((e, c) => (c.value ?? 0) - (e.value ?? 0)), k = Ke().size([l, v]).paddingTop(
    (e) => e.children && e.children.length > 0 ? j + N : 0
  ).paddingInner(d).paddingLeft((e) => e.children && e.children.length > 0 ? N : 0).paddingRight((e) => e.children && e.children.length > 0 ? N : 0).paddingBottom((e) => e.children && e.children.length > 0 ? N : 0).round(true)(D), le = k.descendants().filter((e) => e.children && e.children.length > 0), W = P.selectAll(".treemapSection").data(le).enter().append("g").attr("class", "treemapSection").attr("transform", (e) => `translate(${e.x0},${e.y0})`);
  W.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", j).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", 0.6).attr("stroke-width", 0.6).attr("style", (e) => e.depth === 0 ? "display: none;" : ""), W.append("clipPath").attr("id", (e, c) => `clip-section-${a}-${c}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 12)).attr("height", j), W.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", (e, c) => `treemapSection section${c}`).attr("fill", (e) => m(e.data.name)).attr("fill-opacity", 0.6).attr("stroke", (e) => A(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", 0.4).attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const c = xe({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c.nodeStyles + ";" + c.borderStyles.join(";");
  }), W.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", j / 2).attr("dominant-baseline", "middle").text((e) => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const c = "dominant-baseline: middle; font-size: 12px; fill:" + M(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", y = xe({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c + y.labelStyles.replace("color:", "fill:");
  }).each(function(e) {
    if (e.depth === 0)
      return;
    const c = bn(this), y = e.data.name;
    c.text(y);
    const w = e.x1 - e.x0, z = 6;
    let F;
    s.showValues !== false && e.value ? F = w - 10 - 30 - 10 - z : F = w - z - 6;
    const T = Math.max(15, F), L = c.node();
    if (L.getComputedTextLength() > T) {
      const S = "...";
      let C = y;
      for (; C.length > 0; ) {
        if (C = y.substring(0, C.length - 1), C.length === 0) {
          c.text(S), L.getComputedTextLength() > T && c.text("");
          break;
        }
        if (c.text(C + S), L.getComputedTextLength() <= T)
          break;
      }
    }
  }), s.showValues !== false && W.append("text").attr("class", "treemapSectionValue").attr("x", (e) => e.x1 - e.x0 - 10).attr("y", j / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e) => e.value ? u(e.value) : "").attr("font-style", "italic").attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const c = "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + M(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", y = xe({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c + y.labelStyles.replace("color:", "fill:");
  });
  const se = k.leaves(), O = P.selectAll(".treemapLeafGroup").data(se).enter().append("g").attr("class", (e, c) => `treemapNode treemapLeafGroup leaf${c}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e) => `translate(${e.x0},${e.y0})`);
  O.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e) => e.parent ? m(e.parent.data.name) : m(e.data.name)).attr("style", (e) => xe({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", 0.3).attr("stroke", (e) => e.parent ? m(e.parent.data.name) : m(e.data.name)).attr("stroke-width", 3), O.append("clipPath").attr("id", (e, c) => `clip-${a}-${c}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e) => Math.max(0, e.y1 - e.y0 - 4)), O.append("text").attr("class", "treemapLabel").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", (e) => (e.y1 - e.y0) / 2).attr("style", (e) => {
    const c = "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + M(e.data.name) + ";", y = xe({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c + y.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (e, c) => `url(#clip-${a}-${c})`).text((e) => e.data.name).each(function(e) {
    const c = bn(this), y = e.x1 - e.x0, w = e.y1 - e.y0, z = c.node(), F = 4, T = y - 2 * F, L = w - 2 * F;
    if (T < 10 || L < 10) {
      c.style("display", "none");
      return;
    }
    let S = parseInt(c.style("font-size"), 10);
    const C = 8, I = 28, G = 0.6, R = 6, q2 = 2;
    for (; z.getComputedTextLength() > T && S > C; )
      S--, c.style("font-size", `${S}px`);
    let X = Math.max(
      R,
      Math.min(I, Math.round(S * G))
    ), Y = S + q2 + X;
    for (; Y > L && S > C && (S--, X = Math.max(
      R,
      Math.min(I, Math.round(S * G))
    ), !(X < R && S === C)); )
      c.style("font-size", `${S}px`), Y = S + q2 + X;
    c.style("font-size", `${S}px`), (z.getComputedTextLength() > T || S < C || L < S) && c.style("display", "none");
  }), s.showValues !== false && O.append("text").attr("class", "treemapValue").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", function(e) {
    return (e.y1 - e.y0) / 2;
  }).attr("style", (e) => {
    const c = "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + M(e.data.name) + ";", y = xe({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c + y.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (e, c) => `url(#clip-${a}-${c})`).text((e) => e.value ? u(e.value) : "").each(function(e) {
    const c = bn(this), y = this.parentNode;
    if (!y) {
      c.style("display", "none");
      return;
    }
    const w = bn(y).select(".treemapLabel");
    if (w.empty() || w.style("display") === "none") {
      c.style("display", "none");
      return;
    }
    const z = parseFloat(w.style("font-size")), F = 28, T = 0.6, L = 6, S = 2, C = Math.max(
      L,
      Math.min(F, Math.round(z * T))
    );
    c.style("font-size", `${C}px`);
    const I = (e.y1 - e.y0) / 2 + z / 2 + S;
    c.attr("y", I);
    const G = e.x1 - e.x0, R = e.y1 - e.y0 - 4, q2 = G - 2 * 4;
    c.node().getComputedTextLength() > q2 || I + C > R || C < L ? c.style("display", "none") : c.style("display", null);
  });
  const oe = s.diagramPadding ?? 8;
  $(b, oe, "flowchart", s?.useMaxWidth || false);
}, "draw");
var et = q(function(t2, a) {
  return a.db.getClasses();
}, "getClasses");
var tt2 = { draw: Ye, getClasses: et };
var at = {
  sectionStrokeColor: "black",
  sectionStrokeWidth: "1",
  sectionFillColor: "#efefef",
  leafStrokeColor: "black",
  leafStrokeWidth: "1",
  leafFillColor: "#efefef",
  labelColor: "black",
  labelFontSize: "12px",
  valueFontSize: "10px",
  valueColor: "black",
  titleColor: "black",
  titleFontSize: "14px"
};
var nt = q(({
  treemap: t2
} = {}) => {
  const a = o_(at, t2);
  return `
  .treemapNode.section {
    stroke: ${a.sectionStrokeColor};
    stroke-width: ${a.sectionStrokeWidth};
    fill: ${a.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${a.leafStrokeColor};
    stroke-width: ${a.leafStrokeWidth};
    fill: ${a.leafFillColor};
  }
  .treemapLabel {
    fill: ${a.labelColor};
    font-size: ${a.labelFontSize};
  }
  .treemapValue {
    fill: ${a.valueColor};
    font-size: ${a.valueFontSize};
  }
  .treemapTitle {
    fill: ${a.titleColor};
    font-size: ${a.titleFontSize};
  }
  `;
}, "getStyles");
var rt = nt;
var ht = {
  parser: re,
  get db() {
    return new ae();
  },
  renderer: tt2,
  styles: rt
};
export {
  ht as diagram
};
//# sourceMappingURL=diagram-VMROVX33-BbEyrapg-DqJhrp1R-JNPVZU27.js.map
