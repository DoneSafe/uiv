import { ref as P, computed as h, watch as V, openBlock as s, createElementBlock as d, normalizeClass as u, createElementVNode as o, withModifiers as r, createCommentVNode as v, Fragment as z, renderList as x, toDisplayString as $ } from "vue";
function L(e, k = 0, a = 1) {
  const l = [];
  for (let b = k; b < e; b += a)
    l.push(b);
  return l;
}
const N = /* @__PURE__ */ o("span", { "aria-hidden": "true" }, "«", -1), B = [
  N
], E = /* @__PURE__ */ o("span", { "aria-hidden": "true" }, "‹", -1), q = [
  E
], w = /* @__PURE__ */ o("span", { "aria-hidden": "true" }, "…", -1), F = [
  w
], A = ["onClick"], D = /* @__PURE__ */ o("span", { "aria-hidden": "true" }, "…", -1), M = [
  D
], j = /* @__PURE__ */ o("span", { "aria-hidden": "true" }, "›", -1), G = [
  j
], H = /* @__PURE__ */ o("span", { "aria-hidden": "true" }, "»", -1), I = [
  H
], K = {
  __name: "Pagination",
  props: {
    modelValue: { type: Number, required: !0, validator: (e) => e >= 1 },
    boundaryLinks: { type: Boolean, default: !1 },
    directionLinks: { type: Boolean, default: !0 },
    size: { type: String, default: void 0 },
    align: { type: String, default: void 0 },
    totalPage: { type: Number, required: !0, validator: (e) => e >= 0 },
    maxSize: { type: Number, default: 5, validator: (e) => e >= 0 },
    disabled: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: k }) {
    const a = e, l = P(0), b = h(() => ({
      [`text-${a.align}`]: !!a.align
    })), y = h(() => ({
      [`pagination-${a.size}`]: !!a.size
    })), S = h(
      () => L(a.totalPage).slice(
        l.value,
        l.value + a.maxSize
      )
    );
    V(
      () => [a.modelValue, a.maxSize, a.totalPage],
      () => {
        C();
      },
      {
        immediate: !0
      }
    );
    function C() {
      const i = a.modelValue, t = a.maxSize, n = l.value, m = n + t;
      if (i > m) {
        const c = a.totalPage - t;
        i > c ? l.value = c : l.value = i - 1;
      } else
        i < n + 1 && (i > t ? l.value = i - t : l.value = 0);
    }
    function f(i) {
      !a.disabled && i > 0 && i <= a.totalPage && i !== a.modelValue && (k("update:modelValue", i), k("change", i));
    }
    function g(i) {
      if (a.disabled)
        return;
      const t = a.maxSize, n = l.value, m = a.totalPage - t, c = i ? n - t : n + t;
      c < 0 ? l.value = 0 : c > m ? l.value = m : l.value = c;
    }
    return (i, t) => (s(), d("nav", {
      "aria-label": "Page navigation",
      class: u(b.value)
    }, [
      o("ul", {
        class: u(["pagination", y.value])
      }, [
        e.boundaryLinks ? (s(), d("li", {
          key: 0,
          class: u({ disabled: e.modelValue <= 1 || e.disabled })
        }, [
          o("a", {
            href: "#",
            role: "button",
            "aria-label": "First",
            onClick: t[0] || (t[0] = r((n) => f(1), ["prevent"]))
          }, B)
        ], 2)) : v("", !0),
        e.directionLinks ? (s(), d("li", {
          key: 1,
          class: u({ disabled: e.modelValue <= 1 || e.disabled })
        }, [
          o("a", {
            href: "#",
            role: "button",
            "aria-label": "Previous",
            onClick: t[1] || (t[1] = r((n) => f(e.modelValue - 1), ["prevent"]))
          }, q)
        ], 2)) : v("", !0),
        l.value > 0 ? (s(), d("li", {
          key: 2,
          class: u({ disabled: e.disabled })
        }, [
          o("a", {
            href: "#",
            role: "button",
            "aria-label": "Previous group",
            onClick: t[2] || (t[2] = r((n) => g(1), ["prevent"]))
          }, F)
        ], 2)) : v("", !0),
        (s(!0), d(z, null, x(S.value, (n) => (s(), d("li", {
          key: n,
          class: u({ active: e.modelValue === n + 1, disabled: e.disabled })
        }, [
          o("a", {
            href: "#",
            role: "button",
            onClick: r((m) => f(n + 1), ["prevent"])
          }, $(n + 1), 9, A)
        ], 2))), 128)),
        l.value < e.totalPage - e.maxSize ? (s(), d("li", {
          key: 3,
          class: u({ disabled: e.disabled })
        }, [
          o("a", {
            href: "#",
            role: "button",
            "aria-label": "Next group",
            onClick: t[3] || (t[3] = r((n) => g(0), ["prevent"]))
          }, M)
        ], 2)) : v("", !0),
        e.directionLinks ? (s(), d("li", {
          key: 4,
          class: u({ disabled: e.modelValue >= e.totalPage || e.disabled })
        }, [
          o("a", {
            href: "#",
            role: "button",
            "aria-label": "Next",
            onClick: t[4] || (t[4] = r((n) => f(e.modelValue + 1), ["prevent"]))
          }, G)
        ], 2)) : v("", !0),
        e.boundaryLinks ? (s(), d("li", {
          key: 5,
          class: u({ disabled: e.modelValue >= e.totalPage || e.disabled })
        }, [
          o("a", {
            href: "#",
            role: "button",
            "aria-label": "Last",
            onClick: t[5] || (t[5] = r((n) => f(e.totalPage), ["prevent"]))
          }, I)
        ], 2)) : v("", !0)
      ], 2)
    ], 2));
  }
};
export {
  K as default
};
