var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// build/index.js
import { WorkerEntrypoint as ut } from "cloudflare:workers";
import B from "./85859aa5adaa3133f1909afbd3858edd805cde50-index_bg.wasm";
var r;
var g = 0;
var W = null;
function j() {
  return (W === null || W.byteLength === 0) && (W = new Uint8Array(r.memory.buffer)), W;
}
__name(j, "j");
var k = new TextEncoder();
"encodeInto" in k || (k.encodeInto = function(t2, e) {
  let n = k.encode(t2);
  return e.set(n), { read: t2.length, written: n.length };
});
function m(t2, e, n) {
  if (n === void 0) {
    let c = k.encode(t2), d = e(c.length, 1) >>> 0;
    return j().subarray(d, d + c.length).set(c), g = c.length, d;
  }
  let o = t2.length, _ = e(o, 1) >>> 0, a = j(), s = 0;
  for (; s < o; s++) {
    let c = t2.charCodeAt(s);
    if (c > 127) break;
    a[_ + s] = c;
  }
  if (s !== o) {
    s !== 0 && (t2 = t2.slice(s)), _ = n(_, o, o = s + t2.length * 3, 1) >>> 0;
    let c = j().subarray(_ + s, _ + o), d = k.encodeInto(t2, c);
    s += d.written, _ = n(_, o, s, 1) >>> 0;
  }
  return g = s, _;
}
__name(m, "m");
var h = null;
function b() {
  return (h === null || h.buffer.detached === true || h.buffer.detached === void 0 && h.buffer !== r.memory.buffer) && (h = new DataView(r.memory.buffer)), h;
}
__name(b, "b");
function T(t2) {
  let e = typeof t2;
  if (e == "number" || e == "boolean" || t2 == null) return `${t2}`;
  if (e == "string") return `"${t2}"`;
  if (e == "symbol") {
    let _ = t2.description;
    return _ == null ? "Symbol" : `Symbol(${_})`;
  }
  if (e == "function") {
    let _ = t2.name;
    return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
  }
  if (Array.isArray(t2)) {
    let _ = t2.length, a = "[";
    _ > 0 && (a += T(t2[0]));
    for (let s = 1; s < _; s++) a += ", " + T(t2[s]);
    return a += "]", a;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(t2)), o;
  if (n && n.length > 1) o = n[1];
  else return toString.call(t2);
  if (o == "Object") try {
    return "Object(" + JSON.stringify(t2) + ")";
  } catch {
    return "Object";
  }
  return t2 instanceof Error ? `${t2.name}: ${t2.message}
${t2.stack}` : o;
}
__name(T, "T");
function f(t2) {
  return t2 == null;
}
__name(f, "f");
var $ = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
$.decode();
function K(t2, e) {
  return $.decode(j().subarray(t2, t2 + e));
}
__name(K, "K");
function p(t2, e) {
  return t2 = t2 >>> 0, K(t2, e);
}
__name(p, "p");
function w(t2) {
  let e = r.__externref_table_alloc_command_export();
  return r.__wbindgen_externrefs.set(e, t2), e;
}
__name(w, "w");
function u(t2, e) {
  try {
    return t2.apply(this, e);
  } catch (n) {
    let o = w(n);
    r.__wbindgen_exn_store_command_export(o);
  }
}
__name(u, "u");
function D(t2, e) {
  return t2 = t2 >>> 0, j().subarray(t2 / 1, t2 / 1 + e);
}
__name(D, "D");
var q = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => {
  t2.instance === i && t2.dtor(t2.a, t2.b);
});
function Q(t2, e, n, o) {
  let _ = { a: t2, b: e, cnt: 1, dtor: n, instance: i }, a = /* @__PURE__ */ __name((...s) => {
    if (_.instance !== i) throw new Error("Cannot invoke closure from previous WASM instance");
    _.cnt++;
    let c = _.a;
    _.a = 0;
    try {
      return o(c, _.b, ...s);
    } finally {
      _.a = c, a._wbg_cb_unref();
    }
  }, "a");
  return a._wbg_cb_unref = () => {
    --_.cnt === 0 && (_.dtor(_.a, _.b), _.a = 0, q.unregister(_));
  }, q.register(a, _, _), a;
}
__name(Q, "Q");
function V(t2, e, n) {
  return r.fetch(t2, e, n);
}
__name(V, "V");
function U(t2) {
  r.setPanicHook(t2);
}
__name(U, "U");
function X(t2, e) {
  t2 = t2 >>> 0;
  let n = b(), o = [];
  for (let _ = t2; _ < t2 + 4 * e; _ += 4) o.push(r.__wbindgen_externrefs.get(n.getUint32(_, true)));
  return r.__externref_drop_slice_command_export(t2, e), o;
}
__name(X, "X");
function Y(t2, e) {
  let n = e(t2.length * 4, 4) >>> 0;
  for (let o = 0; o < t2.length; o++) {
    let _ = w(t2[o]);
    b().setUint32(n + 4 * o, _, true);
  }
  return g = t2.length, n;
}
__name(Y, "Y");
function Z(t2, e, n) {
  r.wasm_bindgen__convert__closures_____invoke__h115956b0df2ab7c7(t2, e, n);
}
__name(Z, "Z");
function tt(t2, e, n, o) {
  r.wasm_bindgen__convert__closures_____invoke__h32e90586b9c42295(t2, e, n, o);
}
__name(tt, "tt");
var et = ["bytes"];
var nt = ["follow", "error", "manual"];
var i = 0;
function J() {
  i++, h = null, W = null, typeof numBytesDecoded < "u" && (numBytesDecoded = 0), typeof g < "u" && (g = 0), r = new WebAssembly.Instance(B, N).exports, r.__wbindgen_start();
}
__name(J, "J");
var rt = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t2, instance: e }) => {
  e === i && r.__wbg_containerstartupoptions_free(t2 >>> 0, 1);
});
var x = class {
  static {
    __name(this, "x");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, rt.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    r.__wbg_containerstartupoptions_free(e, 0);
  }
  get entrypoint() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let e = r.__wbg_get_containerstartupoptions_entrypoint(this.__wbg_ptr);
    var n = X(e[0], e[1]).slice();
    return r.__wbindgen_free_command_export(e[0], e[1] * 4, 4), n;
  }
  set entrypoint(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let n = Y(e, r.__wbindgen_malloc_command_export), o = g;
    r.__wbg_set_containerstartupoptions_entrypoint(this.__wbg_ptr, n, o);
  }
  get enableInternet() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let e = r.__wbg_get_containerstartupoptions_enableInternet(this.__wbg_ptr);
    return e === 16777215 ? void 0 : e !== 0;
  }
  set enableInternet(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    r.__wbg_set_containerstartupoptions_enableInternet(this.__wbg_ptr, f(e) ? 16777215 : e ? 1 : 0);
  }
  get env() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    return r.__wbg_get_containerstartupoptions_env(this.__wbg_ptr);
  }
  set env(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    r.__wbg_set_containerstartupoptions_env(this.__wbg_ptr, e);
  }
};
Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
var _t = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t2, instance: e }) => {
  e === i && r.__wbg_intounderlyingbytesource_free(t2 >>> 0, 1);
});
var v = class {
  static {
    __name(this, "v");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _t.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    r.__wbg_intounderlyingbytesource_free(e, 0);
  }
  get autoAllocateChunkSize() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    return r.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  pull(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    return r.intounderlyingbytesource_pull(this.__wbg_ptr, e);
  }
  start(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    r.intounderlyingbytesource_start(this.__wbg_ptr, e);
  }
  get type() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let e = r.intounderlyingbytesource_type(this.__wbg_ptr);
    return et[e];
  }
  cancel() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let e = this.__destroy_into_raw();
    r.intounderlyingbytesource_cancel(e);
  }
};
Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
var ot = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t2, instance: e }) => {
  e === i && r.__wbg_intounderlyingsink_free(t2 >>> 0, 1);
});
var I = class {
  static {
    __name(this, "I");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ot.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    r.__wbg_intounderlyingsink_free(e, 0);
  }
  abort(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let n = this.__destroy_into_raw();
    return r.intounderlyingsink_abort(n, e);
  }
  close() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let e = this.__destroy_into_raw();
    return r.intounderlyingsink_close(e);
  }
  write(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    return r.intounderlyingsink_write(this.__wbg_ptr, e);
  }
};
Symbol.dispose && (I.prototype[Symbol.dispose] = I.prototype.free);
var H = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t2, instance: e }) => {
  e === i && r.__wbg_intounderlyingsource_free(t2 >>> 0, 1);
});
var y = class t {
  static {
    __name(this, "t");
  }
  static __wrap(e) {
    e = e >>> 0;
    let n = Object.create(t.prototype);
    return n.__wbg_ptr = e, n.__wbg_inst = i, H.register(n, { ptr: e, instance: i }, n), n;
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, H.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    r.__wbg_intounderlyingsource_free(e, 0);
  }
  pull(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    return r.intounderlyingsource_pull(this.__wbg_ptr, e);
  }
  cancel() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let e = this.__destroy_into_raw();
    r.intounderlyingsource_cancel(e);
  }
};
Symbol.dispose && (y.prototype[Symbol.dispose] = y.prototype.free);
var it = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t2, instance: e }) => {
  e === i && r.__wbg_jsowner_free(t2 >>> 0, 1);
});
var R = class {
  static {
    __name(this, "R");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, it.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    r.__wbg_jsowner_free(e, 0);
  }
};
Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
var st = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t2, instance: e }) => {
  e === i && r.__wbg_minifyconfig_free(t2 >>> 0, 1);
});
var E = class {
  static {
    __name(this, "E");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, st.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    r.__wbg_minifyconfig_free(e, 0);
  }
  get js() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    return r.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    r.__wbg_set_minifyconfig_js(this.__wbg_ptr, e);
  }
  get html() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    return r.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    r.__wbg_set_minifyconfig_html(this.__wbg_ptr, e);
  }
  get css() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    return r.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    r.__wbg_set_minifyconfig_css(this.__wbg_ptr, e);
  }
};
Symbol.dispose && (E.prototype[Symbol.dispose] = E.prototype.free);
var ct = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t2, instance: e }) => {
  e === i && r.__wbg_r2range_free(t2 >>> 0, 1);
});
var F = class {
  static {
    __name(this, "F");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ct.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    r.__wbg_r2range_free(e, 0);
  }
  get offset() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let e = r.__wbg_get_r2range_offset(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set offset(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    r.__wbg_set_r2range_offset(this.__wbg_ptr, !f(e), f(e) ? 0 : e);
  }
  get length() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let e = r.__wbg_get_r2range_length(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set length(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    r.__wbg_set_r2range_length(this.__wbg_ptr, !f(e), f(e) ? 0 : e);
  }
  get suffix() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    let e = r.__wbg_get_r2range_suffix(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set suffix(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== i) throw new Error("Invalid stale object from previous Wasm instance");
    r.__wbg_set_r2range_suffix(this.__wbg_ptr, !f(e), f(e) ? 0 : e);
  }
};
Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
var N = { __wbindgen_placeholder__: { __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(function(t2, e) {
  let n = String(e), o = m(n, r.__wbindgen_malloc_command_export, r.__wbindgen_realloc_command_export), _ = g;
  b().setInt32(t2 + 4, _, true), b().setInt32(t2 + 0, o, true);
}, "__wbg_String_8f0eb39a4a4c2f66"), __wbg___wbindgen_debug_string_df47ffb5e35e6763: /* @__PURE__ */ __name(function(t2, e) {
  let n = T(e), o = m(n, r.__wbindgen_malloc_command_export, r.__wbindgen_realloc_command_export), _ = g;
  b().setInt32(t2 + 4, _, true), b().setInt32(t2 + 0, o, true);
}, "__wbg___wbindgen_debug_string_df47ffb5e35e6763"), __wbg___wbindgen_is_function_ee8a6c5833c90377: /* @__PURE__ */ __name(function(t2) {
  return typeof t2 == "function";
}, "__wbg___wbindgen_is_function_ee8a6c5833c90377"), __wbg___wbindgen_is_undefined_2d472862bd29a478: /* @__PURE__ */ __name(function(t2) {
  return t2 === void 0;
}, "__wbg___wbindgen_is_undefined_2d472862bd29a478"), __wbg___wbindgen_string_get_e4f06c90489ad01b: /* @__PURE__ */ __name(function(t2, e) {
  let n = e, o = typeof n == "string" ? n : void 0;
  var _ = f(o) ? 0 : m(o, r.__wbindgen_malloc_command_export, r.__wbindgen_realloc_command_export), a = g;
  b().setInt32(t2 + 4, a, true), b().setInt32(t2 + 0, _, true);
}, "__wbg___wbindgen_string_get_e4f06c90489ad01b"), __wbg___wbindgen_throw_b855445ff6a94295: /* @__PURE__ */ __name(function(t2, e) {
  throw new Error(p(t2, e));
}, "__wbg___wbindgen_throw_b855445ff6a94295"), __wbg__wbg_cb_unref_2454a539ea5790d9: /* @__PURE__ */ __name(function(t2) {
  t2._wbg_cb_unref();
}, "__wbg__wbg_cb_unref_2454a539ea5790d9"), __wbg_append_b577eb3a177bc0fa: /* @__PURE__ */ __name(function() {
  return u(function(t2, e, n, o, _) {
    t2.append(p(e, n), p(o, _));
  }, arguments);
}, "__wbg_append_b577eb3a177bc0fa"), __wbg_body_134fbdf9222264fa: /* @__PURE__ */ __name(function(t2) {
  let e = t2.body;
  return f(e) ? 0 : w(e);
}, "__wbg_body_134fbdf9222264fa"), __wbg_buffer_ccc4520b36d3ccf4: /* @__PURE__ */ __name(function(t2) {
  return t2.buffer;
}, "__wbg_buffer_ccc4520b36d3ccf4"), __wbg_byobRequest_2344e6975f27456e: /* @__PURE__ */ __name(function(t2) {
  let e = t2.byobRequest;
  return f(e) ? 0 : w(e);
}, "__wbg_byobRequest_2344e6975f27456e"), __wbg_byteLength_bcd42e4025299788: /* @__PURE__ */ __name(function(t2) {
  return t2.byteLength;
}, "__wbg_byteLength_bcd42e4025299788"), __wbg_byteOffset_ca3a6cf7944b364b: /* @__PURE__ */ __name(function(t2) {
  return t2.byteOffset;
}, "__wbg_byteOffset_ca3a6cf7944b364b"), __wbg_call_525440f72fbfc0ea: /* @__PURE__ */ __name(function() {
  return u(function(t2, e, n) {
    return t2.call(e, n);
  }, arguments);
}, "__wbg_call_525440f72fbfc0ea"), __wbg_call_e762c39fa8ea36bf: /* @__PURE__ */ __name(function() {
  return u(function(t2, e) {
    return t2.call(e);
  }, arguments);
}, "__wbg_call_e762c39fa8ea36bf"), __wbg_cancel_48ab6f9dc366e369: /* @__PURE__ */ __name(function(t2) {
  return t2.cancel();
}, "__wbg_cancel_48ab6f9dc366e369"), __wbg_catch_943836faa5d29bfb: /* @__PURE__ */ __name(function(t2, e) {
  return t2.catch(e);
}, "__wbg_catch_943836faa5d29bfb"), __wbg_cause_2551549fc39b3b73: /* @__PURE__ */ __name(function(t2) {
  return t2.cause;
}, "__wbg_cause_2551549fc39b3b73"), __wbg_cf_909cdf99a01f342e: /* @__PURE__ */ __name(function() {
  return u(function(t2) {
    let e = t2.cf;
    return f(e) ? 0 : w(e);
  }, arguments);
}, "__wbg_cf_909cdf99a01f342e"), __wbg_close_5a6caed3231b68cd: /* @__PURE__ */ __name(function() {
  return u(function(t2) {
    t2.close();
  }, arguments);
}, "__wbg_close_5a6caed3231b68cd"), __wbg_close_6956df845478561a: /* @__PURE__ */ __name(function() {
  return u(function(t2) {
    t2.close();
  }, arguments);
}, "__wbg_close_6956df845478561a"), __wbg_done_2042aa2670fb1db1: /* @__PURE__ */ __name(function(t2) {
  return t2.done;
}, "__wbg_done_2042aa2670fb1db1"), __wbg_enqueue_7b18a650aec77898: /* @__PURE__ */ __name(function() {
  return u(function(t2, e) {
    t2.enqueue(e);
  }, arguments);
}, "__wbg_enqueue_7b18a650aec77898"), __wbg_entries_e383c0065742ec0c: /* @__PURE__ */ __name(function(t2) {
  return t2.entries();
}, "__wbg_entries_e383c0065742ec0c"), __wbg_error_6f1d0762f6c8ae2f: /* @__PURE__ */ __name(function(t2, e) {
  console.error(t2, e);
}, "__wbg_error_6f1d0762f6c8ae2f"), __wbg_error_a7f8fbb0523dae15: /* @__PURE__ */ __name(function(t2) {
  console.error(t2);
}, "__wbg_error_a7f8fbb0523dae15"), __wbg_getReader_48e00749fe3f6089: /* @__PURE__ */ __name(function() {
  return u(function(t2) {
    return t2.getReader();
  }, arguments);
}, "__wbg_getReader_48e00749fe3f6089"), __wbg_getTime_14776bfb48a1bff9: /* @__PURE__ */ __name(function(t2) {
  return t2.getTime();
}, "__wbg_getTime_14776bfb48a1bff9"), __wbg_get_7bed016f185add81: /* @__PURE__ */ __name(function(t2, e) {
  return t2[e >>> 0];
}, "__wbg_get_7bed016f185add81"), __wbg_get_done_a0463af43a1fc764: /* @__PURE__ */ __name(function(t2) {
  let e = t2.done;
  return f(e) ? 16777215 : e ? 1 : 0;
}, "__wbg_get_done_a0463af43a1fc764"), __wbg_get_value_5ce96c9f81ce7398: /* @__PURE__ */ __name(function(t2) {
  return t2.value;
}, "__wbg_get_value_5ce96c9f81ce7398"), __wbg_headers_7ae6dbb1272f8fc6: /* @__PURE__ */ __name(function(t2) {
  return t2.headers;
}, "__wbg_headers_7ae6dbb1272f8fc6"), __wbg_httpProtocol_11d4cc60572407e3: /* @__PURE__ */ __name(function() {
  return u(function(t2, e) {
    let n = e.httpProtocol, o = m(n, r.__wbindgen_malloc_command_export, r.__wbindgen_realloc_command_export), _ = g;
    b().setInt32(t2 + 4, _, true), b().setInt32(t2 + 0, o, true);
  }, arguments);
}, "__wbg_httpProtocol_11d4cc60572407e3"), __wbg_instanceof_Error_a944ec10920129e2: /* @__PURE__ */ __name(function(t2) {
  let e;
  try {
    e = t2 instanceof Error;
  } catch {
    e = false;
  }
  return e;
}, "__wbg_instanceof_Error_a944ec10920129e2"), __wbg_length_69bca3cb64fc8748: /* @__PURE__ */ __name(function(t2) {
  return t2.length;
}, "__wbg_length_69bca3cb64fc8748"), __wbg_method_07a9b3454994db22: /* @__PURE__ */ __name(function(t2, e) {
  let n = e.method, o = m(n, r.__wbindgen_malloc_command_export, r.__wbindgen_realloc_command_export), _ = g;
  b().setInt32(t2 + 4, _, true), b().setInt32(t2 + 0, o, true);
}, "__wbg_method_07a9b3454994db22"), __wbg_new_0_f9740686d739025c: /* @__PURE__ */ __name(function() {
  return /* @__PURE__ */ new Date();
}, "__wbg_new_0_f9740686d739025c"), __wbg_new_1acc0b6eea89d040: /* @__PURE__ */ __name(function() {
  return new Object();
}, "__wbg_new_1acc0b6eea89d040"), __wbg_new_3c3d849046688a66: /* @__PURE__ */ __name(function(t2, e) {
  try {
    var n = { a: t2, b: e }, o = /* @__PURE__ */ __name((a, s) => {
      let c = n.a;
      n.a = 0;
      try {
        return tt(c, n.b, a, s);
      } finally {
        n.a = c;
      }
    }, "o");
    return new Promise(o);
  } finally {
    n.a = n.b = 0;
  }
}, "__wbg_new_3c3d849046688a66"), __wbg_new_9edf9838a2def39c: /* @__PURE__ */ __name(function() {
  return u(function() {
    return new Headers();
  }, arguments);
}, "__wbg_new_9edf9838a2def39c"), __wbg_new_a7442b4b19c1a356: /* @__PURE__ */ __name(function(t2, e) {
  return new Error(p(t2, e));
}, "__wbg_new_a7442b4b19c1a356"), __wbg_new_no_args_ee98eee5275000a4: /* @__PURE__ */ __name(function(t2, e) {
  return new Function(p(t2, e));
}, "__wbg_new_no_args_ee98eee5275000a4"), __wbg_new_with_byte_offset_and_length_46e3e6a5e9f9e89b: /* @__PURE__ */ __name(function(t2, e, n) {
  return new Uint8Array(t2, e >>> 0, n >>> 0);
}, "__wbg_new_with_byte_offset_and_length_46e3e6a5e9f9e89b"), __wbg_new_with_into_underlying_source_b47f6a6a596a7f24: /* @__PURE__ */ __name(function(t2, e) {
  return new ReadableStream(y.__wrap(t2), e);
}, "__wbg_new_with_into_underlying_source_b47f6a6a596a7f24"), __wbg_new_with_length_01aa0dc35aa13543: /* @__PURE__ */ __name(function(t2) {
  return new Uint8Array(t2 >>> 0);
}, "__wbg_new_with_length_01aa0dc35aa13543"), __wbg_new_with_opt_buffer_source_and_init_d7e792cdf59c8ea6: /* @__PURE__ */ __name(function() {
  return u(function(t2, e) {
    return new Response(t2, e);
  }, arguments);
}, "__wbg_new_with_opt_buffer_source_and_init_d7e792cdf59c8ea6"), __wbg_new_with_opt_readable_stream_and_init_b3dac7204db32cac: /* @__PURE__ */ __name(function() {
  return u(function(t2, e) {
    return new Response(t2, e);
  }, arguments);
}, "__wbg_new_with_opt_readable_stream_and_init_b3dac7204db32cac"), __wbg_new_with_opt_str_and_init_271896583401be6f: /* @__PURE__ */ __name(function() {
  return u(function(t2, e, n) {
    return new Response(t2 === 0 ? void 0 : p(t2, e), n);
  }, arguments);
}, "__wbg_new_with_opt_str_and_init_271896583401be6f"), __wbg_next_020810e0ae8ebcb0: /* @__PURE__ */ __name(function() {
  return u(function(t2) {
    return t2.next();
  }, arguments);
}, "__wbg_next_020810e0ae8ebcb0"), __wbg_prototypesetcall_2a6620b6922694b2: /* @__PURE__ */ __name(function(t2, e, n) {
  Uint8Array.prototype.set.call(D(t2, e), n);
}, "__wbg_prototypesetcall_2a6620b6922694b2"), __wbg_queueMicrotask_34d692c25c47d05b: /* @__PURE__ */ __name(function(t2) {
  return t2.queueMicrotask;
}, "__wbg_queueMicrotask_34d692c25c47d05b"), __wbg_queueMicrotask_9d76cacb20c84d58: /* @__PURE__ */ __name(function(t2) {
  queueMicrotask(t2);
}, "__wbg_queueMicrotask_9d76cacb20c84d58"), __wbg_read_48f1593df542f968: /* @__PURE__ */ __name(function(t2) {
  return t2.read();
}, "__wbg_read_48f1593df542f968"), __wbg_redirect_f741d23870b547d9: /* @__PURE__ */ __name(function(t2) {
  let e = t2.redirect;
  return (nt.indexOf(e) + 1 || 4) - 1;
}, "__wbg_redirect_f741d23870b547d9"), __wbg_releaseLock_5d0b5a68887b891d: /* @__PURE__ */ __name(function(t2) {
  t2.releaseLock();
}, "__wbg_releaseLock_5d0b5a68887b891d"), __wbg_resolve_caf97c30b83f7053: /* @__PURE__ */ __name(function(t2) {
  return Promise.resolve(t2);
}, "__wbg_resolve_caf97c30b83f7053"), __wbg_respond_0f4dbf5386f5c73e: /* @__PURE__ */ __name(function() {
  return u(function(t2, e) {
    t2.respond(e >>> 0);
  }, arguments);
}, "__wbg_respond_0f4dbf5386f5c73e"), __wbg_set_9e6516df7b7d0f19: /* @__PURE__ */ __name(function(t2, e, n) {
  t2.set(D(e, n));
}, "__wbg_set_9e6516df7b7d0f19"), __wbg_set_c2abbebe8b9ebee1: /* @__PURE__ */ __name(function() {
  return u(function(t2, e, n) {
    return Reflect.set(t2, e, n);
  }, arguments);
}, "__wbg_set_c2abbebe8b9ebee1"), __wbg_set_headers_107379072e02fee5: /* @__PURE__ */ __name(function(t2, e) {
  t2.headers = e;
}, "__wbg_set_headers_107379072e02fee5"), __wbg_set_high_water_mark_5142ac1d2fb46365: /* @__PURE__ */ __name(function(t2, e) {
  t2.highWaterMark = e;
}, "__wbg_set_high_water_mark_5142ac1d2fb46365"), __wbg_set_status_886bf143c25d0706: /* @__PURE__ */ __name(function(t2, e) {
  t2.status = e;
}, "__wbg_set_status_886bf143c25d0706"), __wbg_signal_da18d6d24710ea0e: /* @__PURE__ */ __name(function(t2) {
  return t2.signal;
}, "__wbg_signal_da18d6d24710ea0e"), __wbg_static_accessor_GLOBAL_89e1d9ac6a1b250e: /* @__PURE__ */ __name(function() {
  let t2 = typeof global > "u" ? null : global;
  return f(t2) ? 0 : w(t2);
}, "__wbg_static_accessor_GLOBAL_89e1d9ac6a1b250e"), __wbg_static_accessor_GLOBAL_THIS_8b530f326a9e48ac: /* @__PURE__ */ __name(function() {
  let t2 = typeof globalThis > "u" ? null : globalThis;
  return f(t2) ? 0 : w(t2);
}, "__wbg_static_accessor_GLOBAL_THIS_8b530f326a9e48ac"), __wbg_static_accessor_SELF_6fdf4b64710cc91b: /* @__PURE__ */ __name(function() {
  let t2 = typeof self > "u" ? null : self;
  return f(t2) ? 0 : w(t2);
}, "__wbg_static_accessor_SELF_6fdf4b64710cc91b"), __wbg_static_accessor_WINDOW_b45bfc5a37f6cfa2: /* @__PURE__ */ __name(function() {
  let t2 = typeof window > "u" ? null : window;
  return f(t2) ? 0 : w(t2);
}, "__wbg_static_accessor_WINDOW_b45bfc5a37f6cfa2"), __wbg_then_4f46f6544e6b4a28: /* @__PURE__ */ __name(function(t2, e) {
  return t2.then(e);
}, "__wbg_then_4f46f6544e6b4a28"), __wbg_then_70d05cf780a18d77: /* @__PURE__ */ __name(function(t2, e, n) {
  return t2.then(e, n);
}, "__wbg_then_70d05cf780a18d77"), __wbg_toString_8eec07f6f4c057e4: /* @__PURE__ */ __name(function(t2) {
  return t2.toString();
}, "__wbg_toString_8eec07f6f4c057e4"), __wbg_url_3e15bfb59fa6b660: /* @__PURE__ */ __name(function(t2, e) {
  let n = e.url, o = m(n, r.__wbindgen_malloc_command_export, r.__wbindgen_realloc_command_export), _ = g;
  b().setInt32(t2 + 4, _, true), b().setInt32(t2 + 0, o, true);
}, "__wbg_url_3e15bfb59fa6b660"), __wbg_value_692627309814bb8c: /* @__PURE__ */ __name(function(t2) {
  return t2.value;
}, "__wbg_value_692627309814bb8c"), __wbg_view_f6c15ac9fed63bbd: /* @__PURE__ */ __name(function(t2) {
  let e = t2.view;
  return f(e) ? 0 : w(e);
}, "__wbg_view_f6c15ac9fed63bbd"), __wbindgen_cast_2241b6af4c4b2941: /* @__PURE__ */ __name(function(t2, e) {
  return p(t2, e);
}, "__wbindgen_cast_2241b6af4c4b2941"), __wbindgen_cast_e7770ca24da3cd9b: /* @__PURE__ */ __name(function(t2, e) {
  return Q(t2, e, r.wasm_bindgen__closure__destroy__h4b7145f63ca7f4ce, Z);
}, "__wbindgen_cast_e7770ca24da3cd9b"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(function() {
  let t2 = r.__wbindgen_externrefs, e = t2.grow(4);
  t2.set(0, void 0), t2.set(e + 0, void 0), t2.set(e + 1, null), t2.set(e + 2, true), t2.set(e + 3, false);
}, "__wbindgen_init_externref_table") } };
var at = new WebAssembly.Instance(B, N);
r = at.exports;
r.__wbindgen_start();
Error.stackTraceLimit = 100;
var P = false;
function G() {
  U && U(function(t2) {
    let e = new Error("Rust panic: " + t2);
    console.error("Critical", e), P = true;
  });
}
__name(G, "G");
G();
var z = 0;
function L() {
  P && (console.log("Reinitializing Wasm application"), J(), P = false, G(), z++);
}
__name(L, "L");
addEventListener("error", (t2) => {
  C(t2.error);
});
function C(t2) {
  t2 instanceof WebAssembly.RuntimeError && (console.error("Critical", t2), P = true);
}
__name(C, "C");
var O = class extends ut {
  static {
    __name(this, "O");
  }
};
O.prototype.fetch = function(e) {
  return V.call(this, e, this.env, this.ctx);
};
var bt = { set: /* @__PURE__ */ __name((t2, e, n, o) => Reflect.set(t2.instance, e, n, o), "set"), has: /* @__PURE__ */ __name((t2, e) => Reflect.has(t2.instance, e), "has"), deleteProperty: /* @__PURE__ */ __name((t2, e) => Reflect.deleteProperty(t2.instance, e), "deleteProperty"), apply: /* @__PURE__ */ __name((t2, e, n) => Reflect.apply(t2.instance, e, n), "apply"), construct: /* @__PURE__ */ __name((t2, e, n) => Reflect.construct(t2.instance, e, n), "construct"), getPrototypeOf: /* @__PURE__ */ __name((t2) => Reflect.getPrototypeOf(t2.instance), "getPrototypeOf"), setPrototypeOf: /* @__PURE__ */ __name((t2, e) => Reflect.setPrototypeOf(t2.instance, e), "setPrototypeOf"), isExtensible: /* @__PURE__ */ __name((t2) => Reflect.isExtensible(t2.instance), "isExtensible"), preventExtensions: /* @__PURE__ */ __name((t2) => Reflect.preventExtensions(t2.instance), "preventExtensions"), getOwnPropertyDescriptor: /* @__PURE__ */ __name((t2, e) => Reflect.getOwnPropertyDescriptor(t2.instance, e), "getOwnPropertyDescriptor"), defineProperty: /* @__PURE__ */ __name((t2, e, n) => Reflect.defineProperty(t2.instance, e, n), "defineProperty"), ownKeys: /* @__PURE__ */ __name((t2) => Reflect.ownKeys(t2.instance), "ownKeys") };
var l = { construct(t2, e, n) {
  try {
    L();
    let o = { instance: Reflect.construct(t2, e, n), instanceId: z, ctor: t2, args: e, newTarget: n };
    return new Proxy(o, { ...bt, get(_, a, s) {
      _.instanceId !== z && (_.instance = Reflect.construct(_.ctor, _.args, _.newTarget), _.instanceId = z);
      let c = Reflect.get(_.instance, a, s);
      return typeof c != "function" ? c : c.constructor === Function ? new Proxy(c, { apply(d, A, M) {
        L();
        try {
          return d.apply(A, M);
        } catch (S) {
          throw C(S), S;
        }
      } }) : new Proxy(c, { async apply(d, A, M) {
        L();
        try {
          return await d.apply(A, M);
        } catch (S) {
          throw C(S), S;
        }
      } });
    } });
  } catch (o) {
    throw P = true, o;
  }
} };
var dt = new Proxy(O, l);
var lt = new Proxy(x, l);
var pt = new Proxy(v, l);
var ht = new Proxy(I, l);
var yt = new Proxy(y, l);
var mt = new Proxy(R, l);
var xt = new Proxy(E, l);
var vt = new Proxy(F, l);
export {
  lt as ContainerStartupOptions,
  pt as IntoUnderlyingByteSource,
  ht as IntoUnderlyingSink,
  yt as IntoUnderlyingSource,
  mt as JSOwner,
  xt as MinifyConfig,
  vt as R2Range,
  dt as default
};
//# sourceMappingURL=shim.js.map
