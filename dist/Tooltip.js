import { createVNode as y } from "vue";
function V(t) {
  return typeof t < "u" && t !== null;
}
function B(t) {
  return typeof t == "function";
}
function M(t) {
  return typeof t == "string";
}
const h = {
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
}, f = {
  CLICK: "click",
  HOVER: "hover",
  FOCUS: "focus",
  HOVER_FOCUS: "hover-focus",
  OUTSIDE_CLICK: "outside-click",
  MANUAL: "manual"
}, n = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left"
};
function F() {
  const t = window.innerWidth || 0, i = window.innerHeight || 0;
  return { width: t, height: i };
}
function T(t, i, s) {
  t == null || t.addEventListener(i, s);
}
function m(t, i, s) {
  t == null || t.removeEventListener(i, s);
}
function E(t) {
  return t && t.nodeType === Node.ELEMENT_NODE;
}
function R(t) {
  E(t) && E(t.parentNode) && t.parentNode.removeChild(t);
}
function A(t, i) {
  E(t) && t.classList.add(i);
}
function b(t, i) {
  E(t) && t.classList.remove(i);
}
function P(t, i) {
  return E(t) ? t.classList.contains(i) : !1;
}
function N(t, i, s) {
  const e = t.getBoundingClientRect(), o = i.getBoundingClientRect(), w = F();
  let O = !0, I = !0, u = !0, d = !0;
  switch (s) {
    case n.TOP:
      O = e.top >= o.height, d = e.left + e.width / 2 >= o.width / 2, I = e.right - e.width / 2 + o.width / 2 <= w.width;
      break;
    case n.BOTTOM:
      u = e.bottom + o.height <= w.height, d = e.left + e.width / 2 >= o.width / 2, I = e.right - e.width / 2 + o.width / 2 <= w.width;
      break;
    case n.RIGHT:
      I = e.right + o.width <= w.width, O = e.top + e.height / 2 >= o.height / 2, u = e.bottom - e.height / 2 + o.height / 2 <= w.height;
      break;
    case n.LEFT:
      d = e.left >= o.width, O = e.top + e.height / 2 >= o.height / 2, u = e.bottom - e.height / 2 + o.height / 2 <= w.height;
      break;
  }
  return O && I && u && d;
}
function H(t, i, s, e, o, w, O) {
  if (!E(t) || !E(i))
    return;
  const I = t && t.className && t.className.indexOf("popover") >= 0;
  let u, d;
  if (!V(o) || o === "body" || w === "body") {
    const r = document.documentElement;
    d = (window.pageXOffset || r.scrollLeft) - (r.clientLeft || 0), u = (window.pageYOffset || r.scrollTop) - (r.clientTop || 0);
  } else {
    const r = $(w || o);
    d = r.scrollLeft, u = r.scrollTop;
  }
  if (e) {
    const r = [
      n.RIGHT,
      n.BOTTOM,
      n.LEFT,
      n.TOP
    ], C = (c) => {
      r.forEach((S) => {
        b(t, S);
      }), A(t, c);
    };
    if (!N(i, t, s)) {
      for (let c = 0, S = r.length; c < S; c++)
        if (C(r[c]), N(i, t, r[c])) {
          s = r[c];
          break;
        }
      C(s);
    }
  }
  const l = i.getBoundingClientRect(), p = t.getBoundingClientRect();
  let a, g;
  s === n.BOTTOM ? (a = u + l.top + l.height, g = d + l.left + l.width / 2 - p.width / 2) : s === n.LEFT ? (a = u + l.top + l.height / 2 - p.height / 2, g = d + l.left - p.width) : s === n.RIGHT ? (a = u + l.top + l.height / 2 - p.height / 2, g = d + l.left + l.width + 1) : (a = u + l.top - p.height, g = d + l.left + l.width / 2 - p.width / 2);
  let L;
  if (M(O) ? L = document.querySelector(O) : B(O) && (L = O(i)), E(L)) {
    const r = I ? 11 : 0, C = L.getBoundingClientRect(), c = u + C.top, S = d + C.left, _ = c + C.height, v = S + C.width;
    a < c ? a = c : a + p.height > _ && (a = _ - p.height), g < S ? g = S : g + p.width > v && (g = v - p.width), s === n.BOTTOM ? a -= r : s === n.LEFT ? g += r : s === n.RIGHT ? g -= r : a += r;
  }
  t.style.top = `${a}px`, t.style.left = `${g}px`;
}
const k = "modal-backdrop";
function x() {
  return document.querySelectorAll(`.${k}`);
}
function D() {
  return x().length;
}
function $(t) {
  return M(t) ? document.querySelector(t) : E(t) ? t : E(t.$el) ? t.$el : null;
}
const U = "in", K = {
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "span"
    },
    placement: {
      type: String,
      default: n.TOP
    },
    autoPlacement: {
      type: Boolean,
      default: !0
    },
    appendTo: {
      type: null,
      default: "body"
    },
    positionBy: {
      type: null,
      default: null
    },
    transition: {
      type: Number,
      default: 150
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    showDelay: {
      type: Number,
      default: 0
    },
    enable: {
      type: Boolean,
      default: !0
    },
    enterable: {
      type: Boolean,
      default: !0
    },
    target: null,
    viewport: null,
    customClass: String
  },
  data() {
    return {
      triggerEl: null,
      hideTimeoutId: 0,
      showTimeoutId: 0,
      transitionTimeoutId: 0,
      autoTimeoutId: 0
    };
  },
  watch: {
    modelValue(t) {
      t ? this.show() : this.hide();
    },
    trigger() {
      this.clearListeners(), this.initListeners();
    },
    target(t) {
      this.clearListeners(), this.initTriggerElByTarget(t), this.initListeners();
    },
    allContent(t) {
      this.isNotEmpty() ? this.$nextTick(() => {
        this.isShown() && this.resetPosition();
      }) : this.hide();
    },
    enable(t) {
      t || this.hide();
    }
  },
  mounted() {
    R(this.$refs.popup), this.$nextTick(() => {
      this.initTriggerElByTarget(this.target), this.initListeners(), this.modelValue && this.show();
    });
  },
  beforeUnmount() {
    this.clearListeners(), R(this.$refs.popup);
  },
  methods: {
    initTriggerElByTarget(t) {
      var i, s;
      if (t)
        this.triggerEl = $(t);
      else {
        const e = (i = this.$refs.tagContainer) == null ? void 0 : i.querySelector(
          '[data-role="trigger"]'
        );
        if (e)
          this.triggerEl = e;
        else {
          const o = (s = this.$refs.tagContainer) == null ? void 0 : s.querySelector("*");
          this.triggerEl = o === this.$refs.popup ? null : o;
        }
      }
    },
    initListeners() {
      this.triggerEl && (this.trigger === f.HOVER ? (T(this.triggerEl, h.MOUSE_ENTER, this.show), T(this.triggerEl, h.MOUSE_LEAVE, this.hide)) : this.trigger === f.FOCUS ? (T(this.triggerEl, h.FOCUS, this.show), T(this.triggerEl, h.BLUR, this.hide)) : this.trigger === f.HOVER_FOCUS ? (T(this.triggerEl, h.MOUSE_ENTER, this.handleAuto), T(this.triggerEl, h.MOUSE_LEAVE, this.handleAuto), T(this.triggerEl, h.FOCUS, this.handleAuto), T(this.triggerEl, h.BLUR, this.handleAuto)) : (this.trigger === f.CLICK || this.trigger === f.OUTSIDE_CLICK) && T(this.triggerEl, h.CLICK, this.toggle)), T(window, h.CLICK, this.windowClicked);
    },
    clearListeners() {
      this.triggerEl && (m(this.triggerEl, h.FOCUS, this.show), m(this.triggerEl, h.BLUR, this.hide), m(this.triggerEl, h.MOUSE_ENTER, this.show), m(this.triggerEl, h.MOUSE_LEAVE, this.hide), m(this.triggerEl, h.CLICK, this.toggle), m(this.triggerEl, h.MOUSE_ENTER, this.handleAuto), m(this.triggerEl, h.MOUSE_LEAVE, this.handleAuto), m(this.triggerEl, h.FOCUS, this.handleAuto), m(this.triggerEl, h.BLUR, this.handleAuto)), m(window, h.CLICK, this.windowClicked), this.clearTimeouts();
    },
    clearTimeouts() {
      this.hideTimeoutId && (clearTimeout(this.hideTimeoutId), this.hideTimeoutId = 0), this.showTimeoutId && (clearTimeout(this.showTimeoutId), this.showTimeoutId = 0), this.transitionTimeoutId && (clearTimeout(this.transitionTimeoutId), this.transitionTimeoutId = 0), this.autoTimeoutId && (clearTimeout(this.autoTimeoutId), this.autoTimeoutId = 0);
    },
    resetPosition() {
      const t = this.$refs.popup;
      t && (H(
        t,
        this.triggerEl,
        this.placement,
        this.autoPlacement,
        this.appendTo,
        this.positionBy,
        this.viewport
      ), t.offsetHeight);
    },
    hideOnLeave() {
      (this.trigger === f.HOVER || this.trigger === f.HOVER_FOCUS && !this.triggerEl.matches(":focus")) && this.$hide();
    },
    toggle() {
      this.isShown() ? this.hide() : this.show();
    },
    show() {
      if (this.enable && this.triggerEl && this.isNotEmpty() && !this.isShown()) {
        const t = this.hideTimeoutId > 0;
        t && (clearTimeout(this.hideTimeoutId), this.hideTimeoutId = 0), this.transitionTimeoutId > 0 && (clearTimeout(this.transitionTimeoutId), this.transitionTimeoutId = 0), clearTimeout(this.showTimeoutId), this.showTimeoutId = setTimeout(() => {
          this.showTimeoutId = 0;
          const i = this.$refs.popup;
          if (i) {
            const s = D();
            if (s > 1) {
              const e = this.name === "popover" ? 1060 : 1070, o = (s - 1) * 20;
              i.style.zIndex = `${e + o}`;
            }
            t || (i.className = `${this.name} ${this.placement} ${this.customClass ? this.customClass : ""} fade`, $(this.appendTo).appendChild(i), this.resetPosition()), A(i, U), this.$emit("update:modelValue", !0), this.$emit("show");
          }
        }, this.showDelay);
      }
    },
    hide() {
      this.showTimeoutId > 0 && (clearTimeout(this.showTimeoutId), this.showTimeoutId = 0), this.isShown() && (this.enterable && (this.trigger === f.HOVER || this.trigger === f.HOVER_FOCUS) ? (clearTimeout(this.hideTimeoutId), this.hideTimeoutId = setTimeout(() => {
        this.hideTimeoutId = 0;
        const t = this.$refs.popup;
        t && !t.matches(":hover") && this.$hide();
      }, 100)) : this.$hide());
    },
    $hide() {
      this.isShown() && (clearTimeout(this.hideTimeoutId), this.hideTimeoutId = setTimeout(() => {
        this.hideTimeoutId = 0, b(this.$refs.popup, U), this.transitionTimeoutId = setTimeout(() => {
          this.transitionTimeoutId = 0, R(this.$refs.popup), this.$emit("update:modelValue", !1), this.$emit("hide");
        }, this.transition);
      }, this.hideDelay));
    },
    isShown() {
      return P(this.$refs.popup, U);
    },
    windowClicked(t) {
      this.triggerEl && B(this.triggerEl.contains) && !this.triggerEl.contains(t.target) && this.trigger === f.OUTSIDE_CLICK && !(this.$refs.popup && this.$refs.popup.contains(t.target)) && this.isShown() && this.hide();
    },
    handleAuto() {
      clearTimeout(this.autoTimeoutId), this.autoTimeoutId = setTimeout(() => {
        this.autoTimeoutId = 0, this.triggerEl.matches(":hover, :focus") ? this.show() : this.hide();
      }, 20);
    }
  }
};
function G(t) {
  return typeof t == "function" ? t() : t;
}
const W = {
  mixins: [K],
  props: {
    text: {
      type: String,
      default: ""
    },
    trigger: {
      type: String,
      default: f.HOVER_FOCUS
    }
  },
  data() {
    return {
      name: "tooltip"
    };
  },
  computed: {
    allContent() {
      return this.text;
    }
  },
  // beforeUnmount() {
  //   console.log('unmount')
  // },
  methods: {
    isNotEmpty() {
      return this.text;
    }
  },
  render() {
    const t = this.tag;
    return y(t, {
      ref: "tagContainer"
    }, {
      default: () => [G(this.$slots.default), y("div", {
        ref: "popup",
        role: "tooltip",
        onMouseleave: this.hideOnLeave
      }, [y("div", {
        class: "tooltip-arrow"
      }, null), y("div", {
        class: "tooltip-inner"
      }, [this.text])])]
    });
  }
};
export {
  W as default
};
