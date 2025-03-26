import { computed as I, onMounted as H, onUnmounted as w, openBlock as r, createElementBlock as u, normalizeClass as p, createCommentVNode as _, renderSlot as A, createElementVNode as f, resolveComponent as L, createBlock as P, normalizeStyle as k, withCtx as R, toDisplayString as O, reactive as B, h as D, render as S } from "vue";
function F(e, i) {
  if (Array.isArray(e)) {
    const t = e.indexOf(i);
    t >= 0 && e.splice(t, 1);
  }
}
function C(e) {
  return typeof e < "u" && e !== null;
}
function $(e) {
  return typeof e == "function";
}
function g(e) {
  return typeof e == "string";
}
function G(e, i) {
  return Object.prototype.hasOwnProperty.call(e, i);
}
function x(e) {
  return e && e.nodeType === Node.ELEMENT_NODE;
}
function M(e, i) {
  x(e) && e.classList.add(i);
}
function q(e, i) {
  x(e) && e.classList.remove(i);
}
const z = /* @__PURE__ */ f("span", { "aria-hidden": "true" }, "×", -1), U = [
  z
], Q = {
  __name: "Alert",
  props: {
    dismissible: { type: Boolean, default: !1 },
    duration: { type: Number, default: 0 },
    type: { type: String, default: "info" }
  },
  emits: ["dismissed"],
  setup(e, { emit: i }) {
    const t = e;
    let n = 0;
    const l = I(() => ({
      alert: !0,
      [`alert-${t.type}`]: !!t.type,
      "alert-dismissible": t.dismissible
    }));
    function s() {
      clearTimeout(n), i("dismissed");
    }
    return H(() => {
      t.duration > 0 && (n = setTimeout(s, t.duration));
    }), w(() => {
      clearTimeout(n);
    }), (a, m) => (r(), u("div", {
      role: "alert",
      class: p(l.value)
    }, [
      e.dismissible ? (r(), u("button", {
        key: 0,
        type: "button",
        class: "close",
        "aria-label": "Close",
        onClick: s
      }, U)) : _("", !0),
      A(a.$slots, "default")
    ], 2));
  }
}, h = {
  SUCCESS: "success",
  INFO: "info",
  DANGER: "danger",
  WARNING: "warning"
}, o = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right"
}, W = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of i)
    t[n] = l;
  return t;
}, N = "in", c = "glyphicon", E = 300, v = 300, Y = {
  components: { Alert: Q },
  props: {
    title: { type: String, default: void 0 },
    content: { type: String, default: void 0 },
    html: {
      type: Boolean,
      default: !1
    },
    duration: {
      type: Number,
      default: 5e3
    },
    dismissible: {
      type: Boolean,
      default: !0
    },
    type: { type: String, default: void 0 },
    placement: { type: String, default: void 0 },
    icon: { type: String, default: void 0 },
    customClass: { type: null, default: void 0 },
    cb: {
      type: Function,
      required: !0
    },
    queue: {
      type: Array,
      required: !0
    },
    offsetY: {
      type: Number,
      default: 15
    },
    offsetX: {
      type: Number,
      default: 15
    },
    offset: {
      type: Number,
      default: 15
    }
  },
  data() {
    return {
      height: 0,
      top: 0,
      horizontal: this.placement === o.TOP_LEFT || this.placement === o.BOTTOM_LEFT ? "left" : "right",
      vertical: this.placement === o.TOP_LEFT || this.placement === o.TOP_RIGHT ? "top" : "bottom"
    };
  },
  computed: {
    publicHeight() {
      return this.height;
    },
    styles() {
      const e = this.queue, i = e.findIndex((t) => t._.uid === this._.uid);
      return {
        position: "fixed",
        [this.vertical]: `${this.getTotalHeightOfQueue(e, i)}px`,
        width: `${E}px`,
        transition: `all ${v / 1e3}s ease-in-out`
      };
    },
    icons() {
      if (g(this.icon))
        return this.icon;
      switch (this.type) {
        case h.INFO:
        case h.WARNING:
          return `${c} ${c}-info-sign`;
        case h.SUCCESS:
          return `${c} ${c}-ok-sign`;
        case h.DANGER:
          return `${c} ${c}-remove-sign`;
        default:
          return null;
      }
    }
  },
  created() {
    this.top = this.getTotalHeightOfQueue(this.queue);
  },
  mounted() {
    const e = this.$el;
    e.style[this.vertical] = this.top + "px", this.$nextTick(() => {
      e.style[this.horizontal] = `-${E}px`, this.height = e.offsetHeight, e.style[this.horizontal] = `${this.offsetX}px`, M(e, N);
    });
  },
  // unmounted() {
  //   console.log('unmounted')
  // },
  methods: {
    getTotalHeightOfQueue(e, i = e.length) {
      let t = this.offsetY;
      for (let n = 0; n < i; n++)
        t += e[n].publicHeight + this.offset;
      return t;
    },
    onDismissed() {
      q(this.$el, N), setTimeout(this.cb, v);
    }
  }
}, V = {
  class: "media",
  style: { margin: "0" }
}, X = {
  key: 0,
  class: "media-left"
}, j = { class: "media-body" }, J = {
  key: 0,
  class: "media-heading"
}, K = ["innerHTML"], Z = { key: 2 };
function ee(e, i, t, n, l, s) {
  const a = L("alert");
  return r(), P(a, {
    class: p(["fade", t.customClass]),
    style: k(s.styles),
    type: t.type,
    duration: t.duration,
    dismissible: t.dismissible,
    onDismissed: s.onDismissed
  }, {
    default: R(() => [
      f("div", V, [
        s.icons ? (r(), u("div", X, [
          f("span", {
            class: p(s.icons),
            style: { "font-size": "1.5em" }
          }, null, 2)
        ])) : _("", !0),
        f("div", j, [
          t.title ? (r(), u("div", J, [
            f("b", null, O(t.title), 1)
          ])) : _("", !0),
          t.html ? (r(), u("div", {
            key: 1,
            innerHTML: t.content
          }, null, 8, K)) : (r(), u("div", Z, O(t.content), 1))
        ])
      ])
    ]),
    _: 1
  }, 8, ["class", "style", "type", "duration", "dismissible", "onDismissed"]);
}
const te = /* @__PURE__ */ W(Y, [["render", ee]]), y = B({
  [o.TOP_LEFT]: [],
  [o.TOP_RIGHT]: [],
  [o.BOTTOM_LEFT]: [],
  [o.BOTTOM_RIGHT]: []
}), ie = (e, { vNode: i, container: t }) => {
  S(null, t), F(e, i.component.ctx);
}, ne = (e, i, t = null, n = null) => {
  const l = document.createElement("div"), s = e.placement, a = y[s];
  if (!C(a))
    return;
  e.type === "error" && (e.type = "danger");
  const m = D(te, {
    queue: a,
    placement: s,
    ...e,
    cb(b) {
      ie(a, { vNode: m, container: l }), $(i) ? i(b) : t && n && t(b);
    }
  });
  S(m, l), document.body.appendChild(l.firstElementChild), a.push(m.component.ctx);
}, T = (e = {}, i) => (g(e) && (e = {
  content: e
}), C(e.placement) || (e.placement = o.TOP_RIGHT), new Promise((t, n) => {
  ne(e, i, t, n);
}));
function d(e, i) {
  g(i) ? T({
    content: i,
    type: e
  }) : T({ ...i, type: e });
}
const se = Object.defineProperties(T, {
  success: {
    configurable: !1,
    writable: !1,
    value(e) {
      d("success", e);
    }
  },
  info: {
    configurable: !1,
    writable: !1,
    value(e) {
      d("info", e);
    }
  },
  warning: {
    configurable: !1,
    writable: !1,
    value(e) {
      d("warning", e);
    }
  },
  danger: {
    configurable: !1,
    writable: !1,
    value(e) {
      d("danger", e);
    }
  },
  error: {
    configurable: !1,
    writable: !1,
    value(e) {
      d("danger", e);
    }
  },
  dismissAll: {
    configurable: !1,
    writable: !1,
    value() {
      for (const e in y)
        G(y, e) && y[e].forEach((i) => {
          i.onDismissed();
        });
    }
  }
}), le = { notify: se };
export {
  le as default
};
