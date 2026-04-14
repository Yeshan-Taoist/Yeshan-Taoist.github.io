import {
  Fe,
  Ue,
  je
} from "./chunk-WZK63HZZ.js";
import {
  it
} from "./chunk-Y2MQYAZE.js";
import {
  y
} from "./chunk-ZVYAYXI3.js";
import "./chunk-TR6GTGKS.js";
import "./chunk-ATKLFEBH.js";
import "./chunk-PJPHXOZX.js";
import "./chunk-QYJTKBNV.js";
import {
  An,
  LU,
  Mh,
  Ot,
  TU,
  X1,
  bn,
  ds,
  q,
  zwt
} from "./chunk-T43AG3MD.js";
import "./chunk-LBRMFBTD.js";

// node_modules/vitepress-plugin-legend/dist/stateDiagram-MI5ZYTHO-DUpd8xBQ-f0nYnhhU.js
var F = q((e) => e.append("circle").attr("class", "start-state").attr("r", An().state.sizeUnit).attr("cx", An().state.padding + An().state.sizeUnit).attr("cy", An().state.padding + An().state.sizeUnit), "drawStartState");
var W = q((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", An().state.textHeight).attr("class", "divider").attr("x2", An().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider");
var j = q((e, n) => {
  const g = e.append("text").attr("x", 2 * An().state.padding).attr("y", An().state.textHeight + 2 * An().state.padding).attr("font-size", An().state.fontSize).attr("class", "state-title").text(n.id), s = g.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", An().state.padding).attr("y", An().state.padding).attr("width", s.width + 2 * An().state.padding).attr("height", s.height + 2 * An().state.padding).attr("rx", An().state.radius), g;
}, "drawSimpleState");
var J = q((e, n) => {
  const g = q(function(o, u, b) {
    const m = o.append("tspan").attr("x", 2 * An().state.padding).text(u);
    b || m.attr("dy", An().state.textHeight);
  }, "addTspan"), s = e.append("text").attr("x", 2 * An().state.padding).attr("y", An().state.textHeight + 1.3 * An().state.padding).attr("font-size", An().state.fontSize).attr("class", "state-title").text(n.descriptions[0]).node().getBBox(), d = s.height, c = e.append("text").attr("x", An().state.padding).attr(
    "y",
    d + An().state.padding * 0.4 + An().state.dividerMargin + An().state.textHeight
  ).attr("class", "state-description");
  let l = true, a = true;
  n.descriptions.forEach(function(o) {
    l || (g(c, o, a), a = false), l = false;
  });
  const r = e.append("line").attr("x1", An().state.padding).attr("y1", An().state.padding + d + An().state.dividerMargin / 2).attr("y2", An().state.padding + d + An().state.dividerMargin / 2).attr("class", "descr-divider"), x = c.node().getBBox(), h = Math.max(x.width, s.width);
  return r.attr("x2", h + 3 * An().state.padding), e.insert("rect", ":first-child").attr("x", An().state.padding).attr("y", An().state.padding).attr("width", h + 2 * An().state.padding).attr("height", x.height + d + 2 * An().state.padding).attr("rx", An().state.radius), e;
}, "drawDescrState");
var Y = q((e, n, g) => {
  const s = An().state.padding, d = 2 * An().state.padding, c = e.node().getBBox(), l = c.width, a = c.x, r = e.append("text").attr("x", 0).attr("y", An().state.titleShift).attr("font-size", An().state.fontSize).attr("class", "state-title").text(n.id), x = r.node().getBBox().width + d;
  let h = Math.max(x, l);
  h === l && (h = h + d);
  let o;
  const u = e.node().getBBox();
  n.doc, o = a - s, x > l && (o = (l - h) / 2 + s), Math.abs(a - u.x) < s && x > l && (o = a - (x - l) / 2);
  const b = 1 - An().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", o).attr("y", b).attr("class", g ? "alt-composit" : "composit").attr("width", h).attr(
    "height",
    u.height + An().state.textHeight + An().state.titleShift + 1
  ).attr("rx", "0"), r.attr("x", o + s), x <= l && r.attr("x", a + (h - d) / 2 - x / 2 + s), e.insert("rect", ":first-child").attr("x", o).attr(
    "y",
    An().state.titleShift - An().state.textHeight - An().state.padding
  ).attr("width", h).attr("height", An().state.textHeight * 3).attr("rx", An().state.radius), e.insert("rect", ":first-child").attr("x", o).attr(
    "y",
    An().state.titleShift - An().state.textHeight - An().state.padding
  ).attr("width", h).attr("height", u.height + 3 + 2 * An().state.textHeight).attr("rx", An().state.radius), e;
}, "addTitleAndBox");
var X = q((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", An().state.sizeUnit + An().state.miniPadding).attr(
  "cx",
  An().state.padding + An().state.sizeUnit + An().state.miniPadding
).attr(
  "cy",
  An().state.padding + An().state.sizeUnit + An().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", An().state.sizeUnit).attr("cx", An().state.padding + An().state.sizeUnit + 2).attr("cy", An().state.padding + An().state.sizeUnit + 2)), "drawEndState");
var q2 = q((e, n) => {
  let g = An().state.forkWidth, s = An().state.forkHeight;
  if (n.parentId) {
    let d = g;
    g = s, s = d;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", g).attr("height", s).attr("x", An().state.padding).attr("y", An().state.padding);
}, "drawForkJoinState");
var Z = q((e, n, g, s) => {
  let d = 0;
  const c = s.append("text");
  c.style("text-anchor", "start"), c.attr("class", "noteText");
  let l = e.replace(/\r\n/g, "<br/>");
  l = l.replace(/\n/g, "<br/>");
  const a = l.split(Mh.lineBreakRegex);
  let r = 1.25 * An().state.noteMargin;
  for (const x of a) {
    const h = x.trim();
    if (h.length > 0) {
      const o = c.append("tspan");
      if (o.text(h), r === 0) {
        const u = o.node().getBBox();
        r += u.height;
      }
      d += r, o.attr("x", n + An().state.noteMargin), o.attr("y", g + d + 1.25 * An().state.noteMargin);
    }
  }
  return { textWidth: c.node().getBBox().width, textHeight: d };
}, "_drawLongText");
var _ = q((e, n) => {
  n.attr("class", "state-note");
  const g = n.append("rect").attr("x", 0).attr("y", An().state.padding), s = n.append("g"), { textWidth: d, textHeight: c } = Z(e, 0, 0, s);
  return g.attr("height", c + 2 * An().state.noteMargin), g.attr("width", d + An().state.noteMargin * 2), g;
}, "drawNote");
var H = q(function(e, n) {
  const g = n.id, s = {
    id: g,
    label: n.id,
    width: 0,
    height: 0
  }, d = e.append("g").attr("id", g).attr("class", "stateGroup");
  n.type === "start" && F(d), n.type === "end" && X(d), (n.type === "fork" || n.type === "join") && q2(d, n), n.type === "note" && _(n.note.text, d), n.type === "divider" && W(d), n.type === "default" && n.descriptions.length === 0 && j(d, n), n.type === "default" && n.descriptions.length > 0 && J(d, n);
  const c = d.node().getBBox();
  return s.width = c.width + 2 * An().state.padding, s.height = c.height + 2 * An().state.padding, s;
}, "drawState");
var L = 0;
var K = q(function(e, n, g) {
  const s = q(function(r) {
    switch (r) {
      case je.relationType.AGGREGATION:
        return "aggregation";
      case je.relationType.EXTENSION:
        return "extension";
      case je.relationType.COMPOSITION:
        return "composition";
      case je.relationType.DEPENDENCY:
        return "dependency";
    }
  }, "getRelationType");
  n.points = n.points.filter((r) => !Number.isNaN(r.y));
  const d = n.points, c = zwt().x(function(r) {
    return r.x;
  }).y(function(r) {
    return r.y;
  }).curve(X1), l = e.append("path").attr("d", c(d)).attr("id", "edge" + L).attr("class", "transition");
  let a = "";
  if (An().state.arrowMarkerAbsolute && (a = TU(true)), l.attr(
    "marker-end",
    "url(" + a + "#" + s(je.relationType.DEPENDENCY) + "End)"
  ), g.title !== void 0) {
    const r = e.append("g").attr("class", "stateLabel"), { x, y: h } = ds.calcLabelPosition(n.points), o = Mh.getRows(g.title);
    let u = 0;
    const b = [];
    let m = 0, S = 0;
    for (let f = 0; f <= o.length; f++) {
      const p = r.append("text").attr("text-anchor", "middle").text(o[f]).attr("x", x).attr("y", h + u), w = p.node().getBBox();
      m = Math.max(m, w.width), S = Math.min(S, w.x), Ot.info(w.x, x, h + u), u === 0 && (u = p.node().getBBox().height, Ot.info("Title height", u, h)), b.push(p);
    }
    let N = u * o.length;
    if (o.length > 1) {
      const f = (o.length - 1) * u * 0.5;
      b.forEach((p, w) => p.attr("y", h + w * u - f)), N = u * o.length;
    }
    const i = r.node().getBBox();
    r.insert("rect", ":first-child").attr("class", "box").attr("x", x - m / 2 - An().state.padding / 2).attr("y", h - N / 2 - An().state.padding / 2 - 3.5).attr("width", m + An().state.padding).attr("height", N + An().state.padding), Ot.info(i);
  }
  L++;
}, "drawEdge");
var B;
var T = {};
var Q = q(function() {
}, "setConf");
var V = q(function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers");
var tt = q(function(e, n, g, s) {
  B = An().state;
  const d = An().securityLevel;
  let c;
  d === "sandbox" && (c = bn("#i" + n));
  const l = d === "sandbox" ? bn(c.nodes()[0].contentDocument.body) : bn("body"), a = d === "sandbox" ? c.nodes()[0].contentDocument : document;
  Ot.debug("Rendering diagram " + e);
  const r = l.select(`[id='${n}']`);
  V(r);
  const x = s.db.getRootDoc();
  D(x, r, void 0, false, l, a, s);
  const h = B.padding, o = r.node().getBBox(), u = o.width + h * 2, b = o.height + h * 2, m = u * 1.75;
  LU(r, b, m, B.useMaxWidth), r.attr(
    "viewBox",
    `${o.x - B.padding}  ${o.y - B.padding} ` + u + " " + b
  );
}, "draw");
var et = q((e) => e ? e.length * B.fontSizeFactor : 1, "getLabelWidth");
var D = q((e, n, g, s, d, c, l) => {
  const a = new y({
    compound: true,
    multigraph: true
  });
  let r, x = true;
  for (r = 0; r < e.length; r++)
    if (e[r].stmt === "relation") {
      x = false;
      break;
    }
  g ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: x ? 1 : B.edgeLengthFactor,
    nodeSep: x ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: x ? 1 : B.edgeLengthFactor,
    nodeSep: x ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  });
  const h = l.db.getStates(), o = l.db.getRelations(), u = Object.keys(h);
  for (const i of u) {
    const f = h[i];
    g && (f.parentId = g);
    let p;
    if (f.doc) {
      let w = n.append("g").attr("id", f.id).attr("class", "stateGroup");
      p = D(f.doc, w, f.id, !s, d, c, l);
      {
        w = Y(w, f, s);
        let k = w.node().getBBox();
        p.width = k.width, p.height = k.height + B.padding / 2, T[f.id] = { y: B.compositTitleSize };
      }
    } else
      p = H(n, f, a);
    if (f.note) {
      const w = {
        descriptions: [],
        id: f.id + "-note",
        note: f.note,
        type: "note"
      }, k = H(n, w, a);
      f.note.position === "left of" ? (a.setNode(p.id + "-note", k), a.setNode(p.id, p)) : (a.setNode(p.id, p), a.setNode(p.id + "-note", k)), a.setParent(p.id, p.id + "-group"), a.setParent(p.id + "-note", p.id + "-group");
    } else
      a.setNode(p.id, p);
  }
  Ot.debug("Count=", a.nodeCount(), a);
  let b = 0;
  o.forEach(function(i) {
    b++, Ot.debug("Setting edge", i), a.setEdge(
      i.id1,
      i.id2,
      {
        relation: i,
        width: et(i.title),
        height: B.labelHeight * Mh.getRows(i.title).length,
        labelpos: "c"
      },
      "id" + b
    );
  }), it(a), Ot.debug("Graph after layout", a.nodes());
  const m = n.node();
  a.nodes().forEach(function(i) {
    i !== void 0 && a.node(i) !== void 0 ? (Ot.warn("Node " + i + ": " + JSON.stringify(a.node(i))), d.select("#" + m.id + " #" + i).attr(
      "transform",
      "translate(" + (a.node(i).x - a.node(i).width / 2) + "," + (a.node(i).y + (T[i] ? T[i].y : 0) - a.node(i).height / 2) + " )"
    ), d.select("#" + m.id + " #" + i).attr("data-x-shift", a.node(i).x - a.node(i).width / 2), c.querySelectorAll("#" + m.id + " #" + i + " .divider").forEach((f) => {
      const p = f.parentElement;
      let w = 0, k = 0;
      p && (p.parentElement && (w = p.parentElement.getBBox().width), k = parseInt(p.getAttribute("data-x-shift"), 10), Number.isNaN(k) && (k = 0)), f.setAttribute("x1", 0 - k + 8), f.setAttribute("x2", w - k - 8);
    })) : Ot.debug("No Node " + i + ": " + JSON.stringify(a.node(i)));
  });
  let S = m.getBBox();
  a.edges().forEach(function(i) {
    i !== void 0 && a.edge(i) !== void 0 && (Ot.debug("Edge " + i.v + " -> " + i.w + ": " + JSON.stringify(a.edge(i))), K(n, a.edge(i), a.edge(i).relation));
  }), S = m.getBBox();
  const N = {
    id: g || "root",
    label: g || "root",
    width: 0,
    height: 0
  };
  return N.width = S.width + 2 * B.padding, N.height = S.height + 2 * B.padding, Ot.debug("Doc rendered", N, a), N;
}, "renderDoc");
var at = {
  setConf: Q,
  draw: tt
};
var st = {
  parser: Fe,
  get db() {
    return new je(1);
  },
  renderer: at,
  styles: Ue,
  init: q((e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
  }, "init")
};
export {
  st as diagram
};
//# sourceMappingURL=stateDiagram-MI5ZYTHO-DUpd8xBQ-f0nYnhhU-37DLWEW2.js.map
