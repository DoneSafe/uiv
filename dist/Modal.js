import { openBlock as u, createElementBlock as f, normalizeClass as c, renderSlot as r, computed as z, createBlock as I, resolveDynamicComponent as U, withCtx as g, createElementVNode as d, withModifiers as x, resolveComponent as L, createCommentVNode as v, createTextVNode as D, toDisplayString as C, createVNode as V } from "vue";
function _(e) {
  return typeof e < "u" && e !== null;
}
function A(e) {
  return typeof e == "function";
}
const R = {
  uiv: {
    datePicker: {
      clear: "Clear",
      today: "Today",
      month: "Month",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      year: "Year",
      week1: "Mon",
      week2: "Tue",
      week3: "Wed",
      week4: "Thu",
      week5: "Fri",
      week6: "Sat",
      week7: "Sun"
    },
    timePicker: {
      am: "AM",
      pm: "PM"
    },
    modal: {
      cancel: "Cancel",
      ok: "OK"
    },
    multiSelect: {
      placeholder: "Select...",
      filterPlaceholder: "Search..."
    }
  }
};
let H = R, K = function() {
  return "$t" in this ? this.$t.apply(this, arguments) : null;
};
const F = function(e, o) {
  o = o || {};
  let t;
  try {
    if (t = K.apply(this, arguments), _(t) && !o.$$locale)
      return t;
  } catch {
  }
  const l = e.split(".");
  let a = o.$$locale || H;
  for (let n = 0, i = l.length; n < i; n++) {
    const s = l[n];
    if (t = a[s], n === i - 1)
      return t;
    if (!t)
      return "";
    a = t;
  }
  return "";
}, W = {
  // <a> props
  href: { type: String, default: void 0 },
  target: { type: String, default: void 0 },
  // <router-link> props
  to: { type: null, default: void 0 },
  replace: { type: Boolean, default: !1 },
  append: { type: Boolean, default: !1 },
  exact: { type: Boolean, default: !1 }
}, Y = {
  __name: "BtnGroup",
  props: {
    size: { type: String, default: void 0 },
    vertical: { type: Boolean, default: !1 },
    justified: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (o, t) => (u(), f("div", {
      class: c({
        "btn-group": !e.vertical,
        "btn-group-vertical": e.vertical,
        "btn-group-justified": e.justified,
        [`btn-group-${e.size}`]: e.size
      }),
      role: "group",
      "data-toggle": "buttons"
    }, [
      r(o.$slots, "default")
    ], 2));
  }
}, j = ["href", "target"], q = ["type", "checked", "disabled"], Z = ["type", "disabled"], J = ["type", "disabled"], G = {
  __name: "Btn",
  props: {
    ...W,
    justified: { type: Boolean, default: !1 },
    type: { type: String, default: "default" },
    nativeType: { type: String, default: "button" },
    size: { type: String, default: void 0 },
    block: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    // <input> props
    modelValue: { type: null, default: null },
    inputValue: { type: null, default: null },
    inputType: {
      type: String,
      validator(e) {
        return e === "checkbox" || e === "radio";
      },
      default: void 0
    }
  },
  emits: ["update:modelValue", "click"],
  setup(e, { emit: o }) {
    const t = e, l = z(
      () => t.inputType === "checkbox" ? t.modelValue.indexOf(t.inputValue) >= 0 : t.modelValue === t.inputValue
    ), a = z(() => ({
      btn: !0,
      active: t.inputType ? l.value : t.active,
      disabled: t.disabled,
      "btn-block": t.block,
      [`btn-${t.type}`]: !!t.type,
      [`btn-${t.size}`]: !!t.size
    }));
    function n(s) {
      t.disabled && s instanceof Event ? (s.preventDefault(), s.stopPropagation()) : o("click", s);
    }
    function i() {
      if (t.inputType === "checkbox") {
        const s = t.modelValue.slice();
        l.value ? s.splice(s.indexOf(t.inputValue), 1) : s.push(t.inputValue), o("update:modelValue", s);
      } else
        o("update:modelValue", t.inputValue);
    }
    return (s, M) => s.href ? (u(), f("a", {
      key: 0,
      href: s.href,
      target: s.target,
      role: "button",
      class: c(a.value),
      onClick: n
    }, [
      r(s.$slots, "default")
    ], 10, j)) : s.to ? (u(), I(U("RouterLink"), {
      key: 1,
      to: s.to,
      class: c(a.value),
      event: e.disabled ? "" : "click",
      replace: s.replace,
      append: s.append,
      exact: s.exact,
      role: "button",
      onClick: n
    }, {
      default: g(() => [
        r(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["to", "class", "event", "replace", "append", "exact"])) : e.inputType ? (u(), f("label", {
      key: 2,
      class: c(a.value),
      onClick: n
    }, [
      d("input", {
        autocomplete: "off",
        type: e.inputType,
        checked: l.value,
        disabled: e.disabled,
        onInput: M[0] || (M[0] = x(() => {
        }, ["stop"])),
        onChange: i
      }, null, 40, q),
      r(s.$slots, "default")
    ], 2)) : e.justified ? (u(), I(Y, { key: 3 }, {
      default: g(() => [
        d("button", {
          class: c(a.value),
          type: e.nativeType,
          disabled: e.disabled,
          onClick: n
        }, [
          r(s.$slots, "default")
        ], 10, Z)
      ]),
      _: 3
    })) : (u(), f("button", {
      key: 4,
      class: c(a.value),
      type: e.nativeType,
      disabled: e.disabled,
      onClick: n
    }, [
      r(s.$slots, "default")
    ], 10, J));
  }
}, p = {
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
function B(e) {
  return window.getComputedStyle(e);
}
function X() {
  const e = window.innerWidth || 0, o = window.innerHeight || 0;
  return { width: e, height: o };
}
let y = null, S = null;
function Q(e = !1) {
  const o = X();
  if (y !== null && !e && o.height === S.height && o.width === S.width)
    return y;
  if (document.readyState === "loading")
    return null;
  const t = document.createElement("div"), l = document.createElement("div");
  return t.style.width = l.style.width = t.style.height = l.style.height = "100px", t.style.overflow = "scroll", l.style.overflow = "hidden", document.body.appendChild(t), document.body.appendChild(l), y = Math.abs(t.scrollHeight - l.scrollHeight), document.body.removeChild(t), document.body.removeChild(l), S = o, y;
}
function w(e, o, t) {
  e == null || e.addEventListener(o, t);
}
function m(e, o, t) {
  e == null || e.removeEventListener(o, t);
}
function k(e) {
  return e && e.nodeType === Node.ELEMENT_NODE;
}
function h(e) {
  k(e) && k(e.parentNode) && e.parentNode.removeChild(e);
}
function $(e, o) {
  k(e) && e.classList.add(o);
}
function O(e, o) {
  k(e) && e.classList.remove(o);
}
function N(e) {
  const o = "scroll", t = e.scrollHeight > e.clientHeight, l = B(e);
  return t || l.overflow === o || l.overflowY === o;
}
function T(e) {
  const o = "modal-open", t = ".navbar-fixed-top, .navbar-fixed-bottom", l = document.body;
  if (e)
    O(l, o), l.style.paddingRight = null, [...document.querySelectorAll(t)].forEach((a) => {
      a.style.paddingRight = null;
    });
  else {
    if (N(document.documentElement) || N(document.body)) {
      const n = Q();
      l.style.paddingRight = `${n}px`, [...document.querySelectorAll(t)].forEach((i) => {
        i.style.paddingRight = `${n}px`;
      });
    }
    $(l, o);
  }
}
const ee = "modal-backdrop";
function P() {
  return document.querySelectorAll(`.${ee}`);
}
function E() {
  return P().length;
}
const te = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of o)
    t[l] = a;
  return t;
}, b = "in", oe = {
  components: { Btn: G },
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { type: String, default: void 0 },
    size: { type: String, default: void 0 },
    backdrop: { type: Boolean, default: !0 },
    footer: { type: Boolean, default: !0 },
    header: { type: Boolean, default: !0 },
    cancelText: { type: String, default: void 0 },
    cancelType: { type: String, default: "default" },
    okText: { type: String, default: void 0 },
    okType: { type: String, default: "primary" },
    dismissBtn: { type: Boolean, default: !0 },
    transition: { type: Number, default: 150 },
    autoFocus: { type: Boolean, default: !1 },
    keyboard: { type: Boolean, default: !0 },
    beforeClose: { type: Function, default: void 0 },
    zOffset: { type: Number, default: 20 },
    appendToBody: { type: Boolean, default: !1 },
    displayStyle: { type: String, default: "block" }
  },
  emits: ["update:modelValue", "show", "hide"],
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    modalSizeClass() {
      return {
        [`modal-${this.size}`]: !!this.size
      };
    }
  },
  watch: {
    modelValue(e) {
      this.$toggle(e);
    }
  },
  mounted() {
    h(this.$refs.backdrop), w(window, p.MOUSE_DOWN, this.suppressBackgroundClose), w(window, p.KEY_UP, this.onKeyPress), this.modelValue && this.$toggle(!0);
  },
  beforeUnmount() {
    clearTimeout(this.timeoutId), h(this.$refs.backdrop), h(this.$el), E() === 0 && T(!0), m(window, p.MOUSE_DOWN, this.suppressBackgroundClose), m(window, p.MOUSE_UP, this.unsuppressBackgroundClose), m(window, p.KEY_UP, this.onKeyPress);
  },
  methods: {
    t: F,
    onKeyPress(e) {
      if (this.keyboard && this.modelValue && e.keyCode === 27) {
        const o = this.$refs.backdrop;
        let t = o.style.zIndex;
        t = t && t !== "auto" ? parseInt(t) : 0;
        const l = P(), a = l.length;
        for (let n = 0; n < a; n++)
          if (l[n] !== o) {
            let i = l[n].style.zIndex;
            if (i = i && i !== "auto" ? parseInt(i) : 0, i > t)
              return;
          }
        this.hideModal();
      }
    },
    hideModal(e) {
      const o = A(this.beforeClose) ? this.beforeClose(e) : !0;
      Promise.resolve(o).then((t) => {
        t && (this.msg = e, this.$emit("update:modelValue", !1));
      });
    },
    $toggle(e) {
      const o = this.$el, t = this.$refs.backdrop;
      clearTimeout(this.timeoutId), e ? this.$nextTick(() => {
        const l = E();
        if (document.body.appendChild(t), this.appendToBody && document.body.appendChild(o), o.style.display = this.displayStyle, o.scrollTop = 0, t.offsetHeight, T(!1), $(t, b), $(o, b), l > 0) {
          const a = parseInt(B(o).zIndex) || 1050, n = parseInt(B(t).zIndex) || 1040, i = l * this.zOffset;
          o.style.zIndex = `${a + i}`, t.style.zIndex = `${n + i}`;
        }
        this.timeoutId = setTimeout(() => {
          if (this.autoFocus) {
            const a = this.$el.querySelector('[data-action="auto-focus"]');
            a && (a.focus(), a.setAttribute("data-focused", "true"));
          }
          this.$emit("show"), this.timeoutId = 0;
        }, this.transition);
      }) : (O(t, b), O(o, b), this.timeoutId = setTimeout(() => {
        o.style.display = "none", h(t), this.appendToBody && h(o), E() === 0 && T(!0), this.$emit("hide", this.msg || "dismiss"), this.msg = "", this.timeoutId = 0, o.style.zIndex = "", t.style.zIndex = "";
      }, this.transition));
    },
    suppressBackgroundClose(e) {
      e && e.target === this.$el || (this.isCloseSuppressed = !0, w(window, "mouseup", this.unsuppressBackgroundClose));
    },
    unsuppressBackgroundClose() {
      this.isCloseSuppressed && (m(window, "mouseup", this.unsuppressBackgroundClose), setTimeout(() => {
        this.isCloseSuppressed = !1;
      }, 1));
    },
    backdropClicked() {
      this.backdrop && !this.isCloseSuppressed && this.hideModal();
    }
  }
}, le = { class: "modal-content" }, ne = {
  key: 0,
  class: "modal-header"
}, se = /* @__PURE__ */ d("span", { "aria-hidden": "true" }, "×", -1), ae = [
  se
], ie = { class: "modal-title" }, de = { class: "modal-body" }, ue = {
  key: 1,
  class: "modal-footer"
};
function re(e, o, t, l, a, n) {
  const i = L("btn");
  return u(), f("div", {
    tabindex: "-1",
    role: "dialog",
    class: c(["modal", { fade: t.transition > 0 }]),
    onClick: o[3] || (o[3] = x((...s) => n.backdropClicked && n.backdropClicked(...s), ["self"]))
  }, [
    d("div", {
      ref: "dialog",
      class: c(["modal-dialog", n.modalSizeClass]),
      role: "document"
    }, [
      d("div", le, [
        t.header ? (u(), f("div", ne, [
          r(e.$slots, "header", {}, () => [
            t.dismissBtn ? (u(), f("button", {
              key: 0,
              type: "button",
              class: "close",
              "aria-label": "Close",
              style: { position: "relative", "z-index": "1060" },
              onClick: o[0] || (o[0] = (s) => n.hideModal())
            }, ae)) : v("", !0),
            d("h4", ie, [
              r(e.$slots, "title", {}, () => [
                D(C(t.title), 1)
              ])
            ])
          ])
        ])) : v("", !0),
        d("div", de, [
          r(e.$slots, "default")
        ]),
        t.footer ? (u(), f("div", ue, [
          r(e.$slots, "footer", {}, () => [
            V(i, {
              type: t.cancelType,
              onClick: o[1] || (o[1] = (s) => n.hideModal("cancel"))
            }, {
              default: g(() => [
                d("span", null, C(t.cancelText || n.t("uiv.modal.cancel")), 1)
              ]),
              _: 1
            }, 8, ["type"]),
            V(i, {
              type: t.okType,
              "data-action": "auto-focus",
              onClick: o[2] || (o[2] = (s) => n.hideModal("ok"))
            }, {
              default: g(() => [
                d("span", null, C(t.okText || n.t("uiv.modal.ok")), 1)
              ]),
              _: 1
            }, 8, ["type"])
          ])
        ])) : v("", !0)
      ])
    ], 2),
    d("div", {
      ref: "backdrop",
      class: c(["modal-backdrop", { fade: t.transition > 0 }])
    }, null, 2)
  ], 2);
}
const fe = /* @__PURE__ */ te(oe, [["render", re]]);
export {
  fe as default
};
