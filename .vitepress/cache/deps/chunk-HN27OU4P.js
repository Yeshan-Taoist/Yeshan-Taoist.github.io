import {
  Sf,
  f4t,
  q
} from "./chunk-T43AG3MD.js";

// node_modules/vitepress-plugin-legend/dist/chunk-67H74DCK-BzSPKGN1-D9cP9OkH.js
var o = q((s, t) => {
  const r = s.append("rect");
  if (r.attr("x", t.x), r.attr("y", t.y), r.attr("fill", t.fill), r.attr("stroke", t.stroke), r.attr("width", t.width), r.attr("height", t.height), t.name && r.attr("name", t.name), t.rx && r.attr("rx", t.rx), t.ry && r.attr("ry", t.ry), t.attrs !== void 0)
    for (const a in t.attrs)
      r.attr(a, t.attrs[a]);
  return t.class && r.attr("class", t.class), r;
}, "drawRect");
var d = q((s, t) => {
  const r = {
    x: t.startx,
    y: t.starty,
    width: t.stopx - t.startx,
    height: t.stopy - t.starty,
    fill: t.fill,
    stroke: t.stroke,
    class: "rect"
  };
  o(s, r).lower();
}, "drawBackgroundRect");
var h = q((s, t) => {
  const r = t.text.replace(Sf, " "), a = s.append("text");
  a.attr("x", t.x), a.attr("y", t.y), a.attr("class", "legend"), a.style("text-anchor", t.anchor), t.class && a.attr("class", t.class);
  const e = a.append("tspan");
  return e.attr("x", t.x + t.textMargin * 2), e.text(r), a;
}, "drawText");
var y = q((s, t, r, a) => {
  const e = s.append("image");
  e.attr("x", t), e.attr("y", r);
  const x = f4t.sanitizeUrl(a);
  e.attr("xlink:href", x);
}, "drawImage");
var p = q((s, t, r, a) => {
  const e = s.append("use");
  e.attr("x", t), e.attr("y", r);
  const x = f4t.sanitizeUrl(a);
  e.attr("xlink:href", `#${x}`);
}, "drawEmbeddedImage");
var g = q(() => ({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fill: "#EDF2AE",
  stroke: "#666",
  anchor: "start",
  rx: 0,
  ry: 0
}), "getNoteRect");
var w = q(() => ({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  "text-anchor": "start",
  style: "#666",
  textMargin: 0,
  rx: 0,
  ry: 0,
  tspan: true
}), "getTextObj");

export {
  o,
  d,
  h,
  y,
  p,
  g,
  w
};
//# sourceMappingURL=chunk-HN27OU4P.js.map
