import { ref as v, computed as p, openBlock as _, createElementBlock as S, withDirectives as y, normalizeClass as T, normalizeStyle as k, renderSlot as N, unref as D, nextTick as g } from "vue";
function A(e) {
  return typeof e == "function";
}
const x = {
  MOUSE_ENTER: "mouseenter",
  MOUSE_LEAVE: "mouseleave",
  MOUSE_DOWN: "mousedown",
  MOUSE_UP: "mouseup",
  FOCUS: "focus",
  BLUR: "blur",
  CLICK: "click",
  INPUT: "input",
  KEY_DOWN: "keydown",
  KEY_UP: "keyup",
  KEY_PRESS: "keypress",
  RESIZE: "resize",
  SCROLL: "scroll",
  TOUCH_START: "touchstart",
  TOUCH_END: "touchend"
};
function B(e, o, t) {
  e == null || e.addEventListener(o, t);
}
function H(e, o, t) {
  e == null || e.removeEventListener(o, t);
}
const l = "_uiv_scroll_handler", h = [x.RESIZE, x.SCROLL], L = (e, o) => {
  const t = o.value;
  A(t) && (O(e), e[l] = t, h.forEach((n) => {
    B(window, n, e[l]);
  }));
}, O = (e) => {
  h.forEach((o) => {
    H(window, o, e[l]);
  }), delete e[l];
}, I = (e, o) => {
  o.value !== o.oldValue && L(e, o);
}, K = { mounted: L, unmounted: O, updated: I }, Y = {
  __name: "Affix",
  props: {
    offset: { type: Number, default: 0 }
  },
  emits: ["affix", "affixed", "unfix", "unfixed"],
  setup(e, { emit: o }) {
    const t = e, n = v(null), s = v(!1), C = p(() => ({ affix: s.value })), R = p(() => ({
      top: s.value ? t.offset + "px" : null
    }));
    function U() {
      var r, d, E;
      if (!((r = n.value) != null && r.offsetWidth || (d = n.value) != null && d.offsetHeight || (E = n.value) != null && E.getClientRects().length))
        return;
      const c = {}, a = {}, m = n.value.getBoundingClientRect(), w = document.body;
      ["Top", "Left"].forEach((f) => {
        const u = f.toLowerCase();
        c[u] = window["page" + (f === "Top" ? "Y" : "X") + "Offset"], a[u] = c[u] + m[u] - (n.value["client" + f] || w["client" + f] || 0);
      });
      const i = c.top > a.top - t.offset;
      s.value !== i && (s.value = i, o(s.value ? "affix" : "unfix"), g(() => {
        o(s.value ? "affixed" : "unfixed");
      }));
    }
    return (c, a) => (_(), S("div", {
      ref_key: "el",
      ref: n,
      class: "hidden-print"
    }, [
      y((_(), S("div", {
        class: T(C.value),
        style: k(R.value)
      }, [
        N(c.$slots, "default")
      ], 6)), [
        [D(K), U]
      ])
    ], 512));
  }
};
export {
  Y as default
};
