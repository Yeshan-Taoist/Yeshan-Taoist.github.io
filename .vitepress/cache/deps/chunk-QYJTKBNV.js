import {
  LU,
  Ot,
  q
} from "./chunk-T43AG3MD.js";

// node_modules/vitepress-plugin-legend/dist/chunk-SKB7J2MH-Zr_o4qjH-BQsYZan3.js
var $ = q((t, i, e, o) => {
  t.attr("class", e);
  const { width: h, height: r, x: a, y: g } = w(t, i);
  LU(t, r, h, o);
  const n = x(a, g, h, r, i);
  t.attr("viewBox", n), Ot.debug(`viewBox configured: ${n} with padding: ${i}`);
}, "setupViewPortForSVG");
var w = q((t, i) => {
  const e = t.node()?.getBBox() || { width: 0, height: 0, x: 0, y: 0 };
  return {
    width: e.width + i * 2,
    height: e.height + i * 2,
    x: e.x,
    y: e.y
  };
}, "calculateDimensionsWithPadding");
var x = q((t, i, e, o, h) => `${t - h} ${i - h} ${e} ${o}`, "createViewBox");

export {
  $
};
//# sourceMappingURL=chunk-QYJTKBNV.js.map
