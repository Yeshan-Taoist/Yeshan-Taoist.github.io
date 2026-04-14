import {
  Iy
} from "./chunk-KD3SOAXQ.js";
import "./chunk-Q2Q5HNLZ.js";
import "./chunk-TR6GTGKS.js";
import "./chunk-ATKLFEBH.js";
import {
  HL,
  LU,
  Ot,
  q,
  s$t
} from "./chunk-T43AG3MD.js";
import "./chunk-LBRMFBTD.js";

// node_modules/vitepress-plugin-legend/dist/infoDiagram-LHK5PUON-CSaYolw3-BvRhOuze.js
var g = {
  parse: q(async (r) => {
    const a = await Iy("info", r);
    Ot.debug(a);
  }, "parse")
};
var m = {
  version: HL.version + ""
};
var f = q(() => m.version, "getVersion");
var v = {
  getVersion: f
};
var c = q((r, a, n) => {
  Ot.debug(`rendering info diagram
` + r);
  const t = s$t(a);
  LU(t, 100, 400, true), t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
}, "draw");
var x = { draw: c };
var u = {
  parser: g,
  db: v,
  renderer: x
};
export {
  u as diagram
};
//# sourceMappingURL=infoDiagram-LHK5PUON-CSaYolw3-BvRhOuze-PKEGFXFM.js.map
