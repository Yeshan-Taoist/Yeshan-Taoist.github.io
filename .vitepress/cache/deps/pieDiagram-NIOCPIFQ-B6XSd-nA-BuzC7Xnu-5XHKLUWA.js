import {
  dn
} from "./chunk-SIW6YJ3R.js";
import {
  i
} from "./chunk-SGGL3WQA.js";
import {
  g
} from "./chunk-FYAW533G.js";
import "./chunk-STLHGINV.js";
import {
  Iy
} from "./chunk-KD3SOAXQ.js";
import "./chunk-Q2Q5HNLZ.js";
import "./chunk-TR6GTGKS.js";
import "./chunk-ATKLFEBH.js";
import {
  An,
  Bwt,
  Gvt,
  Kvt,
  LU,
  Ot,
  Uvt,
  Vvt,
  Wvt,
  Xvt,
  Yvt,
  gle,
  iu,
  o_,
  q,
  s$t,
  w2,
  wU
} from "./chunk-T43AG3MD.js";
import "./chunk-LBRMFBTD.js";

// node_modules/vitepress-plugin-legend/dist/pieDiagram-NIOCPIFQ-B6XSd-nA-BuzC7Xnu.js
function lt(t, a) {
  return a < t ? -1 : a > t ? 1 : a >= t ? 0 : NaN;
}
function st(t) {
  return t;
}
function ot() {
  var t = st, a = lt, l = null, h = iu(0), g2 = iu(gle), S = iu(0);
  function i2(e) {
    var n, o = (e = Bwt(e)).length, u, $, m = 0, c = new Array(o), r = new Array(o), x = +h.apply(this, arguments), b = Math.min(gle, Math.max(-gle, g2.apply(this, arguments) - x)), f, T = Math.min(Math.abs(b) / o, S.apply(this, arguments)), v = T * (b < 0 ? -1 : 1), d;
    for (n = 0; n < o; ++n)
      (d = r[c[n] = n] = +t(e[n], n, e)) > 0 && (m += d);
    for (a != null ? c.sort(function(y, A) {
      return a(r[y], r[A]);
    }) : l != null && c.sort(function(y, A) {
      return l(e[y], e[A]);
    }), n = 0, $ = m ? (b - o * v) / m : 0; n < o; ++n, x = f)
      u = c[n], d = r[u], f = x + (d > 0 ? d * $ : 0) + v, r[u] = {
        data: e[u],
        index: n,
        value: d,
        startAngle: x,
        endAngle: f,
        padAngle: T
      };
    return r;
  }
  return i2.value = function(e) {
    return arguments.length ? (t = typeof e == "function" ? e : iu(+e), i2) : t;
  }, i2.sortValues = function(e) {
    return arguments.length ? (a = e, l = null, i2) : a;
  }, i2.sort = function(e) {
    return arguments.length ? (l = e, a = null, i2) : l;
  }, i2.startAngle = function(e) {
    return arguments.length ? (h = typeof e == "function" ? e : iu(+e), i2) : h;
  }, i2.endAngle = function(e) {
    return arguments.length ? (g2 = typeof e == "function" ? e : iu(+e), i2) : g2;
  }, i2.padAngle = function(e) {
    return arguments.length ? (S = typeof e == "function" ? e : iu(+e), i2) : S;
  }, i2;
}
var ct = wU.pie;
var z = {
  sections: /* @__PURE__ */ new Map(),
  showData: false
};
var M = z.sections;
var N = z.showData;
var pt = structuredClone(ct);
var ut = q(() => structuredClone(pt), "getConfig");
var dt = q(() => {
  M = /* @__PURE__ */ new Map(), N = z.showData, Wvt();
}, "clear");
var gt = q(({ label: t, value: a }) => {
  M.has(t) || (M.set(t, a), Ot.debug(`added new section: ${t}, with value: ${a}`));
}, "addSection");
var ft = q(() => M, "getSections");
var ht = q((t) => {
  N = t;
}, "setShowData");
var mt = q(() => N, "getShowData");
var P = {
  getConfig: ut,
  clear: dt,
  setDiagramTitle: Yvt,
  getDiagramTitle: Kvt,
  setAccTitle: Uvt,
  getAccTitle: Vvt,
  setAccDescription: Gvt,
  getAccDescription: Xvt,
  addSection: gt,
  getSections: ft,
  setShowData: ht,
  getShowData: mt
};
var xt = q((t, a) => {
  i(t, a), a.setShowData(t.showData), t.sections.map(a.addSection);
}, "populateDb");
var yt = {
  parse: q(async (t) => {
    const a = await Iy("pie", t);
    Ot.debug(a), xt(a, P);
  }, "parse")
};
var wt = q((t) => `
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`, "getStyles");
var St = wt;
var $t = q((t) => {
  const a = [...t.entries()].map((l) => ({
    label: l[0],
    value: l[1]
  })).sort((l, h) => h.value - l.value);
  return ot().value(
    (l) => l.value
  )(a);
}, "createPieArcs");
var bt = q((t, a, l, h) => {
  Ot.debug(`rendering pie chart
` + t);
  const g2 = h.db, S = An(), i2 = o_(g2.getConfig(), S.pie), e = 40, n = 18, o = 4, u = 450, $ = u, m = s$t(a), c = m.append("g");
  c.attr("transform", "translate(" + $ / 2 + "," + u / 2 + ")");
  const { themeVariables: r } = S;
  let [x] = w2(r.pieOuterStrokeWidth);
  x ??= 2;
  const b = i2.textPosition, f = Math.min($, u) / 2 - e, T = dn().innerRadius(0).outerRadius(f), v = dn().innerRadius(f * b).outerRadius(f * b);
  c.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + x / 2).attr("class", "pieOuterCircle");
  const d = g2.getSections(), y = $t(d), A = [
    r.pie1,
    r.pie2,
    r.pie3,
    r.pie4,
    r.pie5,
    r.pie6,
    r.pie7,
    r.pie8,
    r.pie9,
    r.pie10,
    r.pie11,
    r.pie12
  ], D = g(A);
  c.selectAll("mySlices").data(y).enter().append("path").attr("d", T).attr("fill", (s) => D(s.data.label)).attr("class", "pieCircle");
  let W = 0;
  d.forEach((s) => {
    W += s;
  }), c.selectAll("mySlices").data(y).enter().append("text").text((s) => (s.data.value / W * 100).toFixed(0) + "%").attr("transform", (s) => "translate(" + v.centroid(s) + ")").style("text-anchor", "middle").attr("class", "slice"), c.append("text").text(g2.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
  const O = c.selectAll(".legend").data(D.domain()).enter().append("g").attr("class", "legend").attr("transform", (s, C) => {
    const k = n + o, L = k * D.domain().length / 2, G = 12 * n, V = C * k - L;
    return "translate(" + G + "," + V + ")";
  });
  O.append("rect").attr("width", n).attr("height", n).style("fill", D).style("stroke", D), O.data(y).append("text").attr("x", n + o).attr("y", n - o).text((s) => {
    const { label: C, value: k } = s.data;
    return g2.getShowData() ? `${C} [${k}]` : C;
  });
  const I = Math.max(
    ...O.selectAll("text").nodes().map((s) => s?.getBoundingClientRect().width ?? 0)
  ), B = $ + e + n + o + I;
  m.attr("viewBox", `0 0 ${B} ${u}`), LU(m, u, B, i2.useMaxWidth);
}, "draw");
var At = { draw: bt };
var Mt = {
  parser: yt,
  db: P,
  renderer: At,
  styles: St
};
export {
  Mt as diagram
};
//# sourceMappingURL=pieDiagram-NIOCPIFQ-B6XSd-nA-BuzC7Xnu-5XHKLUWA.js.map
