import { openBlock as u, createElementBlock as f, normalizeClass as h, renderSlot as m, computed as g, createBlock as C, resolveDynamicComponent as ne, withCtx as r, createElementVNode as c, withModifiers as Q, resolveComponent as oe, createCommentVNode as z, createTextVNode as v, toDisplayString as p, createVNode as M, ref as O, createSlots as le, unref as $, withDirectives as J, withKeys as ae, vModelDynamic as ie, vShow as de, Fragment as G, h as ue, render as _ } from "vue";
const y = {
  ALERT: 0,
  CONFIRM: 1,
  PROMPT: 2
};
function P(e) {
  return typeof e < "u" && e !== null;
}
function ee(e) {
  return typeof e == "function";
}
function se(e) {
  return typeof e == "string";
}
const re = {
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
let ce = re, fe = function() {
  return "$t" in this ? this.$t.apply(this, arguments) : null;
};
const H = function(e, n) {
  n = n || {};
  let t;
  try {
    if (t = fe.apply(this, arguments), P(t) && !n.$$locale)
      return t;
  } catch {
  }
  const l = e.split(".");
  let i = n.$$locale || ce;
  for (let a = 0, d = l.length; a < d; a++) {
    const o = l[a];
    if (t = i[o], a === d - 1)
      return t;
    if (!t)
      return "";
    i = t;
  }
  return "";
}, B = {
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
function K(e) {
  return window.getComputedStyle(e);
}
function ye() {
  const e = window.innerWidth || 0, n = window.innerHeight || 0;
  return { width: e, height: n };
}
let x = null, L = null;
function pe(e = !1) {
  const n = ye();
  if (x !== null && !e && n.height === L.height && n.width === L.width)
    return x;
  if (document.readyState === "loading")
    return null;
  const t = document.createElement("div"), l = document.createElement("div");
  return t.style.width = l.style.width = t.style.height = l.style.height = "100px", t.style.overflow = "scroll", l.style.overflow = "hidden", document.body.appendChild(t), document.body.appendChild(l), x = Math.abs(t.scrollHeight - l.scrollHeight), document.body.removeChild(t), document.body.removeChild(l), L = n, x;
}
function U(e, n, t) {
  e == null || e.addEventListener(n, t);
}
function N(e, n, t) {
  e == null || e.removeEventListener(n, t);
}
function R(e) {
  return e && e.nodeType === Node.ELEMENT_NODE;
}
function E(e) {
  if (R(e)) {
    if (typeof e.remove == "function") {
      e.remove();
      return;
    }
    R(e.parentNode) && e.parentNode.removeChild(e);
  }
}
function W(e, n) {
  R(e) && e.classList.add(n);
}
function Y(e, n) {
  R(e) && e.classList.remove(n);
}
function X(e) {
  const n = "scroll", t = e.scrollHeight > e.clientHeight, l = K(e);
  return t || l.overflow === n || l.overflowY === n;
}
function A(e) {
  const n = "modal-open", t = ".navbar-fixed-top, .navbar-fixed-bottom", l = document.body;
  if (e)
    Y(l, n), l.style.paddingRight = null, [...document.querySelectorAll(t)].forEach((i) => {
      i.style.paddingRight = null;
    });
  else {
    if (X(document.documentElement) || X(document.body)) {
      const a = pe();
      l.style.paddingRight = `${a}px`, [...document.querySelectorAll(t)].forEach((d) => {
        d.style.paddingRight = `${a}px`;
      });
    }
    W(l, n);
  }
}
const he = "modal-backdrop";
function te() {
  return document.querySelectorAll(`.${he}`);
}
function D() {
  return te().length;
}
const me = {
  // <a> props
  href: { type: String, default: void 0 },
  target: { type: String, default: void 0 },
  // <router-link> props
  to: { type: null, default: void 0 },
  replace: { type: Boolean, default: !1 },
  append: { type: Boolean, default: !1 },
  exact: { type: Boolean, default: !1 }
}, ke = {
  __name: "BtnGroup",
  props: {
    size: { type: String, default: void 0 },
    vertical: { type: Boolean, default: !1 },
    justified: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (u(), f("div", {
      class: h({
        "btn-group": !e.vertical,
        "btn-group-vertical": e.vertical,
        "btn-group-justified": e.justified,
        [`btn-group-${e.size}`]: e.size
      }),
      role: "group",
      "data-toggle": "buttons"
    }, [
      m(n.$slots, "default")
    ], 2));
  }
}, ve = ["href", "target"], be = ["type", "checked", "disabled"], ge = ["type", "disabled"], Ce = ["type", "disabled"], b = {
  __name: "Btn",
  props: {
    ...me,
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
  setup(e, { emit: n }) {
    const t = e, l = g(
      () => t.inputType === "checkbox" ? t.modelValue.indexOf(t.inputValue) >= 0 : t.modelValue === t.inputValue
    ), i = g(() => ({
      btn: !0,
      active: t.inputType ? l.value : t.active,
      disabled: t.disabled,
      "btn-block": t.block,
      [`btn-${t.type}`]: !!t.type,
      [`btn-${t.size}`]: !!t.size
    }));
    function a(o) {
      t.disabled && o instanceof Event ? (o.preventDefault(), o.stopPropagation()) : n("click", o);
    }
    function d() {
      if (t.inputType === "checkbox") {
        const o = t.modelValue.slice();
        l.value ? o.splice(o.indexOf(t.inputValue), 1) : o.push(t.inputValue), n("update:modelValue", o);
      } else
        n("update:modelValue", t.inputValue);
    }
    return (o, T) => o.href ? (u(), f("a", {
      key: 0,
      href: o.href,
      target: o.target,
      role: "button",
      class: h(i.value),
      onClick: a
    }, [
      m(o.$slots, "default")
    ], 10, ve)) : o.to ? (u(), C(ne("RouterLink"), {
      key: 1,
      to: o.to,
      class: h(i.value),
      event: e.disabled ? "" : "click",
      replace: o.replace,
      append: o.append,
      exact: o.exact,
      role: "button",
      onClick: a
    }, {
      default: r(() => [
        m(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["to", "class", "event", "replace", "append", "exact"])) : e.inputType ? (u(), f("label", {
      key: 2,
      class: h(i.value),
      onClick: a
    }, [
      c("input", {
        autocomplete: "off",
        type: e.inputType,
        checked: l.value,
        disabled: e.disabled,
        onInput: T[0] || (T[0] = Q(() => {
        }, ["stop"])),
        onChange: d
      }, null, 40, be),
      m(o.$slots, "default")
    ], 2)) : e.justified ? (u(), C(ke, { key: 3 }, {
      default: r(() => [
        c("button", {
          class: h(i.value),
          type: e.nativeType,
          disabled: e.disabled,
          onClick: a
        }, [
          m(o.$slots, "default")
        ], 10, ge)
      ]),
      _: 3
    })) : (u(), f("button", {
      key: 4,
      class: h(i.value),
      type: e.nativeType,
      disabled: e.disabled,
      onClick: a
    }, [
      m(o.$slots, "default")
    ], 10, Ce));
  }
}, Se = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, i] of n)
    t[l] = i;
  return t;
}, I = "in", Te = {
  components: { Btn: b },
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
      this.toggle(e);
    }
  },
  mounted() {
    E(this.$refs.backdrop), U(window, B.MOUSE_DOWN, this.suppressBackgroundClose), U(window, B.KEY_UP, this.onKeyPress), this.modelValue && this.toggle(!0);
  },
  beforeUnmount() {
    clearTimeout(this.timeoutId), E(this.$refs.backdrop), E(this.$el), D() === 0 && A(!0), N(window, B.MOUSE_DOWN, this.suppressBackgroundClose), N(window, B.MOUSE_UP, this.unsuppressBackgroundClose), N(window, B.KEY_UP, this.onKeyPress);
  },
  methods: {
    t: H,
    onKeyPress(e) {
      if (this.keyboard && this.modelValue && e.keyCode === 27) {
        const n = this.$refs.backdrop;
        let t = n.style.zIndex;
        t = t && t !== "auto" ? parseInt(t) : 0;
        const l = te(), i = l.length;
        for (let a = 0; a < i; a++)
          if (l[a] !== n) {
            let d = l[a].style.zIndex;
            if (d = d && d !== "auto" ? parseInt(d) : 0, d > t)
              return;
          }
        this.hideModal();
      }
    },
    hideModal(e) {
      const n = ee(this.beforeClose) ? this.beforeClose(e) : !0;
      Promise.resolve(n).then((t) => {
        t && (this.msg = e, this.$emit("update:modelValue", !1));
      });
    },
    toggle(e) {
      const n = this.$el, t = this.$refs.backdrop;
      clearTimeout(this.timeoutId), e ? this.$nextTick(() => {
        const l = D();
        if (document.body.appendChild(t), this.appendToBody && document.body.appendChild(n), n.style.display = this.displayStyle, n.scrollTop = 0, t.offsetHeight, A(!1), W(t, I), W(n, I), l > 0) {
          const i = parseInt(K(n).zIndex) || 1050, a = parseInt(K(t).zIndex) || 1040, d = l * this.zOffset;
          n.style.zIndex = `${i + d}`, t.style.zIndex = `${a + d}`;
        }
        this.timeoutId = setTimeout(() => {
          if (this.autoFocus) {
            const i = this.$el.querySelector('[data-action="auto-focus"]');
            i && (i.focus(), i.setAttribute("data-focused", "true"));
          }
          this.$emit("show"), this.timeoutId = 0;
        }, this.transition);
      }) : (Y(t, I), Y(n, I), this.timeoutId = setTimeout(() => {
        n.style.display = "none", E(t), this.appendToBody && E(n), D() === 0 && A(!0), this.$emit("hide", this.msg || "dismiss"), this.msg = "", this.timeoutId = 0, n.style.zIndex = "", t.style.zIndex = "";
      }, this.transition));
    },
    suppressBackgroundClose(e) {
      e && e.target === this.$el || (this.isCloseSuppressed = !0, U(window, "mouseup", this.unsuppressBackgroundClose));
    },
    unsuppressBackgroundClose() {
      this.isCloseSuppressed && (N(window, "mouseup", this.unsuppressBackgroundClose), setTimeout(() => {
        this.isCloseSuppressed = !1;
      }, 1));
    },
    backdropClicked() {
      this.backdrop && !this.isCloseSuppressed && this.hideModal();
    }
  }
}, we = { class: "modal-content" }, Be = {
  key: 0,
  class: "modal-header"
}, Ee = /* @__PURE__ */ c("span", { "aria-hidden": "true" }, "×", -1), Me = [
  Ee
], Oe = { class: "modal-title" }, $e = { class: "modal-body" }, xe = {
  key: 1,
  class: "modal-footer"
};
function Ne(e, n, t, l, i, a) {
  const d = oe("btn");
  return u(), f("div", {
    tabindex: "-1",
    role: "dialog",
    class: h(["modal", { fade: t.transition > 0 }]),
    onClick: n[3] || (n[3] = Q((...o) => a.backdropClicked && a.backdropClicked(...o), ["self"]))
  }, [
    c("div", {
      ref: "dialog",
      class: h(["modal-dialog", a.modalSizeClass]),
      role: "document"
    }, [
      c("div", we, [
        t.header ? (u(), f("div", Be, [
          m(e.$slots, "header", {}, () => [
            t.dismissBtn ? (u(), f("button", {
              key: 0,
              type: "button",
              class: "close",
              "aria-label": "Close",
              style: { position: "relative", "z-index": "1060" },
              onClick: n[0] || (n[0] = (o) => a.hideModal())
            }, Me)) : z("", !0),
            c("h4", Oe, [
              m(e.$slots, "title", {}, () => [
                v(p(t.title), 1)
              ])
            ])
          ])
        ])) : z("", !0),
        c("div", $e, [
          m(e.$slots, "default")
        ]),
        t.footer ? (u(), f("div", xe, [
          m(e.$slots, "footer", {}, () => [
            M(d, {
              type: t.cancelType,
              onClick: n[1] || (n[1] = (o) => a.hideModal("cancel"))
            }, {
              default: r(() => [
                c("span", null, p(t.cancelText || a.t("uiv.modal.cancel")), 1)
              ]),
              _: 1
            }, 8, ["type"]),
            M(d, {
              type: t.okType,
              "data-action": "auto-focus",
              onClick: n[2] || (n[2] = (o) => a.hideModal("ok"))
            }, {
              default: r(() => [
                c("span", null, p(t.okText || a.t("uiv.modal.ok")), 1)
              ]),
              _: 1
            }, 8, ["type"])
          ])
        ])) : z("", !0)
      ])
    ], 2),
    c("div", {
      ref: "backdrop",
      class: h(["modal-backdrop", { fade: t.transition > 0 }])
    }, null, 2)
  ], 2);
}
const Ie = /* @__PURE__ */ Se(Te, [["render", Ne]]), Ve = ["innerHTML"], ze = { key: 1 }, Pe = { key: 2 }, Re = ["type", "onKeyup"], Fe = {
  __name: "MessageBox",
  props: {
    backdrop: { type: null, default: void 0 },
    title: { type: String, default: void 0 },
    content: { type: String, default: void 0 },
    html: { type: Boolean, default: !1 },
    okText: { type: String, default: void 0 },
    okType: { type: String, default: "primary" },
    cancelText: { type: String, default: void 0 },
    cancelType: { type: String, default: "default" },
    type: { type: Number, default: 0 },
    size: { type: String, default: "sm" },
    cb: { type: Function, required: !0 },
    validator: {
      type: Function,
      default: () => null
    },
    customClass: { type: null, default: void 0 },
    defaultValue: { type: String, default: void 0 },
    inputType: { type: String, default: "text" },
    autoFocus: { type: String, default: "ok" },
    reverseButtons: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e, t = O(!0), l = O(n.defaultValue ?? ""), i = O(!1), a = O(null), d = g(
      () => P(n.backdrop) ? !!n.backdrop : n.type !== y.ALERT
    ), o = g(() => n.validator(l.value)), T = g(() => i.value && o.value), w = g(() => n.okText || H("uiv.modal.ok")), Z = g(() => n.cancelText || H("uiv.modal.cancel"));
    function S(j) {
      var s;
      (s = a.value) == null || s.hideModal(j);
    }
    function F() {
      i.value = !0, P(o.value) || S({ value: l.value });
    }
    return (j, s) => (u(), C(Ie, {
      ref_key: "modal",
      ref: a,
      modelValue: t.value,
      "onUpdate:modelValue": s[7] || (s[7] = (k) => t.value = k),
      "auto-focus": "",
      size: e.size,
      title: e.title,
      header: !!e.title,
      backdrop: d.value,
      "cancel-text": e.cancelText,
      "ok-text": e.okText,
      class: h(e.customClass),
      onHide: e.cb
    }, le({
      default: r(() => [
        e.html ? (u(), f("div", {
          key: 0,
          innerHTML: e.content
        }, null, 8, Ve)) : (u(), f("p", ze, p(e.content), 1)),
        e.type === $(y).PROMPT ? (u(), f("div", Pe, [
          c("div", {
            class: h(["form-group", { "has-error": T.value }])
          }, [
            J(c("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (k) => l.value = k),
              type: e.inputType,
              class: "form-control",
              required: "",
              "data-action": "auto-focus",
              onChange: s[1] || (s[1] = (k) => i.value = !0),
              onKeyup: ae(F, ["enter"])
            }, null, 40, Re), [
              [ie, l.value]
            ]),
            J(c("span", { class: "help-block" }, p(o.value), 513), [
              [de, T.value]
            ])
          ], 2)
        ])) : z("", !0)
      ]),
      _: 2
    }, [
      e.type === $(y).ALERT ? {
        name: "footer",
        fn: r(() => [
          M(b, {
            type: e.okType,
            "data-action": e.autoFocus === "ok" ? "auto-focus" : "",
            onClick: s[2] || (s[2] = (k) => S("ok"))
          }, {
            default: r(() => [
              v(p(w.value), 1)
            ]),
            _: 1
          }, 8, ["type", "data-action"])
        ]),
        key: "0"
      } : {
        name: "footer",
        fn: r(() => [
          e.reverseButtons ? (u(), f(G, { key: 0 }, [
            e.type === $(y).CONFIRM ? (u(), C(b, {
              key: 0,
              type: e.okType,
              "data-action": e.autoFocus === "ok" ? "auto-focus" : "",
              onClick: s[3] || (s[3] = (k) => S("ok"))
            }, {
              default: r(() => [
                v(p(w.value), 1)
              ]),
              _: 1
            }, 8, ["type", "data-action"])) : (u(), C(b, {
              key: 1,
              type: e.okType,
              onClick: F
            }, {
              default: r(() => [
                v(p(w.value), 1)
              ]),
              _: 1
            }, 8, ["type"])),
            M(b, {
              type: e.cancelType,
              "data-action": e.autoFocus === "cancel" ? "auto-focus" : "",
              onClick: s[4] || (s[4] = (k) => S("cancel"))
            }, {
              default: r(() => [
                v(p(Z.value), 1)
              ]),
              _: 1
            }, 8, ["type", "data-action"])
          ], 64)) : (u(), f(G, { key: 1 }, [
            M(b, {
              type: e.cancelType,
              "data-action": e.autoFocus === "cancel" ? "auto-focus" : "",
              onClick: s[5] || (s[5] = (k) => S("cancel"))
            }, {
              default: r(() => [
                v(p(Z.value), 1)
              ]),
              _: 1
            }, 8, ["type", "data-action"]),
            e.type === $(y).CONFIRM ? (u(), C(b, {
              key: 0,
              type: e.okType,
              "data-action": e.autoFocus === "ok" ? "auto-focus" : "",
              onClick: s[6] || (s[6] = (k) => S("ok"))
            }, {
              default: r(() => [
                v(p(w.value), 1)
              ]),
              _: 1
            }, 8, ["type", "data-action"])) : (u(), C(b, {
              key: 1,
              type: e.okType,
              onClick: F
            }, {
              default: r(() => [
                v(p(w.value), 1)
              ]),
              _: 1
            }, 8, ["type"]))
          ], 64))
        ]),
        key: "1"
      }
    ]), 1032, ["modelValue", "size", "title", "header", "backdrop", "cancel-text", "ok-text", "class", "onHide"]));
  }
}, Le = (e) => {
  _(null, e);
}, V = (e, n) => e === y.CONFIRM ? n === "ok" : P(n) && se(n.value), Ue = function(e, n, t, l = null, i = null) {
  const a = document.createElement("div"), d = ue(Fe, {
    type: e,
    ...n,
    cb(o) {
      Le(a), ee(t) ? e === y.CONFIRM ? V(e, o) ? t(null, o) : t(o) : e === y.PROMPT && V(e, o) ? t(null, o.value) : t(o) : l && i && (e === y.CONFIRM ? V(e, o) ? l(o) : i(o) : e === y.PROMPT ? V(e, o) ? l(o.value) : i(o) : l(o));
    }
  });
  _(d, a), document.body.appendChild(a.firstElementChild);
}, q = function(e, n = {}, t) {
  return new Promise((l, i) => {
    Ue.apply(this, [e, n, t, l, i]);
  });
}, Ae = function(e, n) {
  return q.apply(this, [y.ALERT, e, n]);
}, De = function(e, n) {
  return q.apply(this, [y.CONFIRM, e, n]);
}, He = function(e, n) {
  return q.apply(this, [y.PROMPT, e, n]);
}, We = { alert: Ae, confirm: De, prompt: He };
export {
  We as default
};
