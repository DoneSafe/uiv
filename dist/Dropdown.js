import { defineComponent as k, ref as h, onMounted as R, onBeforeUnmount as A, watch as x, createVNode as _, Teleport as V } from "vue";
const s = {
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
function C(e, g, a) {
  e == null || e.addEventListener(g, a);
}
function T(e, g, a) {
  e == null || e.removeEventListener(g, a);
}
function Y(e) {
  return e && e.nodeType === Node.ELEMENT_NODE;
}
function P(e, g, a = {}) {
  const o = document.documentElement, d = (window.pageXOffset || o.scrollLeft) - (o.clientLeft || 0), l = (window.pageYOffset || o.scrollTop) - (o.clientTop || 0), u = g.getBoundingClientRect(), y = e.getBoundingClientRect();
  if (e.style.right = "auto", e.style.bottom = "auto", a.menuRight) {
    const E = d + u.left + u.width - y.width;
    e.style.left = E < 0 ? 0 : E + "px";
  } else
    e.style.left = d + u.left + "px";
  a.dropup ? e.style.top = l + u.top - y.height - 4 + "px" : e.style.top = l + u.top + u.height + "px";
}
function S(e) {
  Y(e) && (e.getAttribute("tabindex") || e.setAttribute("tabindex", "-1"), e.focus());
}
const D = "div", W = /* @__PURE__ */ k({
  props: {
    tag: {
      type: String,
      default: D
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    modelValue: Boolean,
    dropup: {
      type: Boolean,
      default: !1
    },
    menuRight: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    notCloseElements: {
      type: Array,
      default: () => []
    },
    positionElement: {
      type: null,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: g,
    slots: a
  }) {
    const o = h(!1), d = h(void 0), l = h(null), u = h(null);
    function y() {
      var t;
      return (t = l.value) == null ? void 0 : t.querySelector("li > a:focus");
    }
    function E(t) {
      var n, i;
      if (o.value) {
        const v = l.value, c = t.keyCode;
        if (c === 27)
          p(!1), (n = d.value) == null || n.focus();
        else if (c === 13)
          (i = y()) == null || i.click();
        else if (c === 38 || c === 40) {
          t.preventDefault(), t.stopPropagation();
          const m = y(), f = v.querySelectorAll("li:not(.disabled) > a");
          if (!m)
            S(f[0]);
          else
            for (let r = 0; r < f.length; r++)
              if (m === f[r]) {
                c === 38 && r < f.length > 0 ? S(f[r - 1]) : c === 40 && r < f.length - 1 && S(f[r + 1]);
                break;
              }
        }
      }
    }
    function I() {
      var n, i, v;
      const t = ((n = u.value) == null ? void 0 : n.querySelector('[data-role="trigger"]')) || ((i = u.value) == null ? void 0 : i.querySelector(".dropdown-toggle")) || ((v = u.value) == null ? void 0 : v.firstElementChild);
      d.value = t && t !== l.value ? t : null;
    }
    function p(t) {
      var n;
      if (!e.disabled) {
        if (typeof t == "boolean" ? o.value = t : o.value = !o.value, e.appendToBody)
          if (o.value) {
            l.value.style.display = "block";
            const i = e.positionElement || u.value;
            P(l.value, i, e);
          } else
            (n = l.value) == null || n.removeAttribute("style");
        g("update:modelValue", o.value);
      }
    }
    function w(t) {
      var i, v, c;
      const n = t.target;
      if (o.value && n) {
        let m = !1;
        if (e.notCloseElements)
          for (let O = 0, B = e.notCloseElements.length; O < B; O++) {
            const b = e.notCloseElements[O].contains(n);
            let N = b;
            if (e.appendToBody) {
              const U = (i = l.value) == null ? void 0 : i.contains(n), K = e.notCloseElements.indexOf(u.value) >= 0;
              N = b || U && K;
            }
            if (N) {
              m = !0;
              break;
            }
          }
        const f = (v = l.value) == null ? void 0 : v.contains(n), r = ((c = u.value) == null ? void 0 : c.contains(n)) && !f, L = f && t.type === "touchend";
        !r && !m && !L && p(!1);
      }
    }
    return R(() => {
      I(), d.value && (C(d.value, s.CLICK, p), C(d.value, s.KEY_DOWN, E)), C(l.value, s.KEY_DOWN, E), C(window, s.CLICK, w), C(window, s.TOUCH_END, w), e.modelValue && p(!0);
    }), A(() => {
      d.value && (T(d.value, s.CLICK, p), T(d.value, s.KEY_DOWN, E)), T(l.value, s.KEY_DOWN, E), T(window, s.CLICK, w), T(window, s.TOUCH_END, w);
    }), x(() => e.modelValue, (t) => {
      p(t);
    }), () => {
      const t = e.tag;
      return _(t, {
        ref: u,
        class: {
          "btn-group": e.tag === D,
          dropdown: !e.dropup,
          dropup: e.dropup,
          open: o.value
        }
      }, {
        default: () => {
          var n;
          return [(n = a.default) == null ? void 0 : n.call(a), _(V, {
            to: "body",
            disabled: !e.appendToBody || !o.value
          }, {
            default: () => {
              var i;
              return [_("ul", {
                ref: l,
                class: {
                  "dropdown-menu": !0,
                  "dropdown-menu-right": e.menuRight
                }
              }, [(i = a.dropdown) == null ? void 0 : i.call(a)])];
            }
          })];
        }
      });
    };
  }
});
export {
  W as default
};
