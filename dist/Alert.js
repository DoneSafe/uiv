import { computed as d, onMounted as u, onUnmounted as m, openBlock as l, createElementBlock as i, normalizeClass as c, createCommentVNode as p, renderSlot as f, createElementVNode as b } from "vue";
const y = /* @__PURE__ */ b("span", { "aria-hidden": "true" }, "×", -1), _ = [
  y
], k = {
  __name: "Alert",
  props: {
    dismissible: { type: Boolean, default: !1 },
    duration: { type: Number, default: 0 },
    type: { type: String, default: "info" }
  },
  emits: ["dismissed"],
  setup(s, { emit: a }) {
    const e = s;
    let t = 0;
    const r = d(() => ({
      alert: !0,
      [`alert-${e.type}`]: !!e.type,
      "alert-dismissible": e.dismissible
    }));
    function o() {
      clearTimeout(t), a("dismissed");
    }
    return u(() => {
      e.duration > 0 && (t = setTimeout(o, e.duration));
    }), m(() => {
      clearTimeout(t);
    }), (n, C) => (l(), i("div", {
      role: "alert",
      class: c(r.value)
    }, [
      s.dismissible ? (l(), i("button", {
        key: 0,
        type: "button",
        class: "close",
        "aria-label": "Close",
        onClick: o
      }, _)) : p("", !0),
      f(n.$slots, "default")
    ], 2));
  }
};
export {
  k as default
};
