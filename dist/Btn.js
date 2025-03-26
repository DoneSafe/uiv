import { openBlock as a, createElementBlock as s, normalizeClass as n, renderSlot as u, computed as c, createBlock as r, resolveDynamicComponent as v, withCtx as y, createElementVNode as b, withModifiers as g } from "vue";
const h = {
  // <a> props
  href: { type: String, default: void 0 },
  target: { type: String, default: void 0 },
  // <router-link> props
  to: { type: null, default: void 0 },
  replace: { type: Boolean, default: !1 },
  append: { type: Boolean, default: !1 },
  exact: { type: Boolean, default: !1 }
}, m = {
  __name: "BtnGroup",
  props: {
    size: { type: String, default: void 0 },
    vertical: { type: Boolean, default: !1 },
    justified: { type: Boolean, default: !1 }
  },
  setup(l) {
    return (i, t) => (a(), s("div", {
      class: n({
        "btn-group": !l.vertical,
        "btn-group-vertical": l.vertical,
        "btn-group-justified": l.justified,
        [`btn-group-${l.size}`]: l.size
      }),
      role: "group",
      "data-toggle": "buttons"
    }, [
      u(i.$slots, "default")
    ], 2));
  }
}, B = ["href", "target"], V = ["type", "checked", "disabled"], C = ["type", "disabled"], $ = ["type", "disabled"], S = {
  __name: "Btn",
  props: {
    ...h,
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
      validator(l) {
        return l === "checkbox" || l === "radio";
      },
      default: void 0
    }
  },
  emits: ["update:modelValue", "click"],
  setup(l, { emit: i }) {
    const t = l, p = c(
      () => t.inputType === "checkbox" ? t.modelValue.indexOf(t.inputValue) >= 0 : t.modelValue === t.inputValue
    ), d = c(() => ({
      btn: !0,
      active: t.inputType ? p.value : t.active,
      disabled: t.disabled,
      "btn-block": t.block,
      [`btn-${t.type}`]: !!t.type,
      [`btn-${t.size}`]: !!t.size
    }));
    function o(e) {
      t.disabled && e instanceof Event ? (e.preventDefault(), e.stopPropagation()) : i("click", e);
    }
    function k() {
      if (t.inputType === "checkbox") {
        const e = t.modelValue.slice();
        p.value ? e.splice(e.indexOf(t.inputValue), 1) : e.push(t.inputValue), i("update:modelValue", e);
      } else
        i("update:modelValue", t.inputValue);
    }
    return (e, f) => e.href ? (a(), s("a", {
      key: 0,
      href: e.href,
      target: e.target,
      role: "button",
      class: n(d.value),
      onClick: o
    }, [
      u(e.$slots, "default")
    ], 10, B)) : e.to ? (a(), r(v("RouterLink"), {
      key: 1,
      to: e.to,
      class: n(d.value),
      event: l.disabled ? "" : "click",
      replace: e.replace,
      append: e.append,
      exact: e.exact,
      role: "button",
      onClick: o
    }, {
      default: y(() => [
        u(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to", "class", "event", "replace", "append", "exact"])) : l.inputType ? (a(), s("label", {
      key: 2,
      class: n(d.value),
      onClick: o
    }, [
      b("input", {
        autocomplete: "off",
        type: l.inputType,
        checked: p.value,
        disabled: l.disabled,
        onInput: f[0] || (f[0] = g(() => {
        }, ["stop"])),
        onChange: k
      }, null, 40, V),
      u(e.$slots, "default")
    ], 2)) : l.justified ? (a(), r(m, { key: 3 }, {
      default: y(() => [
        b("button", {
          class: n(d.value),
          type: l.nativeType,
          disabled: l.disabled,
          onClick: o
        }, [
          u(e.$slots, "default")
        ], 10, C)
      ]),
      _: 3
    })) : (a(), s("button", {
      key: 4,
      class: n(d.value),
      type: l.nativeType,
      disabled: l.disabled,
      onClick: o
    }, [
      u(e.$slots, "default")
    ], 10, $));
  }
};
export {
  S as default
};
