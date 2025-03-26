const E = {
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
function v() {
  const t = window.innerWidth || 0, e = window.innerHeight || 0;
  return { width: t, height: e };
}
function w(t, e, s) {
  t == null || t.addEventListener(e, s);
}
function y(t, e, s) {
  t == null || t.removeEventListener(e, s);
}
function u(t) {
  return t && t.nodeType === Node.ELEMENT_NODE;
}
function d(t, e) {
  u(t) && t.classList.add(e);
}
function T(t, e) {
  u(t) && t.classList.remove(e);
}
function U(t, e) {
  return u(t) ? t.closest(e) : null;
}
function a(t, e, s = null) {
  const o = [];
  let l = t.parentElement;
  for (; l; ) {
    if (l.matches(e))
      o.push(l);
    else if (s && (s === l || l.matches(s)))
      break;
    l = l.parentElement;
  }
  return o;
}
function i(t, e = "body", s = {}) {
  this.el = t, this.opts = { ...i.DEFAULTS, ...s }, this.opts.target = e, e === "body" ? this.scrollElement = window : this.scrollElement = document.querySelector(`[id=${e}]`), this.selector = "li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.scrollElement && (this.refresh(), this.process());
}
i.DEFAULTS = {
  offset: 10,
  callback: (t) => 0
};
i.prototype.getScrollHeight = function() {
  return this.scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
};
i.prototype.refresh = function() {
  this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
  const t = [...this.el.querySelectorAll(this.selector)], e = this.scrollElement === window;
  t.map((s) => {
    const o = s.getAttribute("href");
    if (/^#./.test(o)) {
      const r = (e ? document : this.scrollElement).querySelector(`[id='${o.slice(1)}']`);
      return [e ? r.getBoundingClientRect().top : r.offsetTop, o];
    } else
      return null;
  }).filter((s) => s).sort((s, o) => s[0] - o[0]).forEach((s) => {
    this.offsets.push(s[0]), this.targets.push(s[1]);
  });
};
i.prototype.process = function() {
  const t = this.scrollElement === window, e = (t ? window.pageYOffset : this.scrollElement.scrollTop) + this.opts.offset, s = this.getScrollHeight(), o = t ? v().height : this.scrollElement.getBoundingClientRect().height, l = this.opts.offset + s - o, r = this.offsets, n = this.targets, h = this.activeTarget;
  let c;
  if (this.scrollHeight !== s && this.refresh(), e >= l)
    return h !== (c = n[n.length - 1]) && this.activate(c);
  if (h && e < r[0])
    return this.activeTarget = null, this.clear();
  for (c = r.length; c--; )
    h !== n[c] && e >= r[c] && (r[c + 1] === void 0 || e < r[c + 1]) && this.activate(n[c]);
};
i.prototype.activate = function(t) {
  this.activeTarget = t, this.clear();
  const e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', s = this.opts.callback;
  [...this.el.querySelectorAll(e)].forEach((l) => {
    a(l, "li").forEach((r) => {
      d(r, "active"), s(r);
    }), a(l, ".dropdown-menu").length && d(U(l, "li.dropdown"), "active");
  });
};
i.prototype.clear = function() {
  [...this.el.querySelectorAll(this.selector)].forEach((e) => {
    a(e, ".active", this.opts.target).forEach((s) => {
      T(s, "active");
    });
  });
};
const f = "_uiv_scrollspy_instance", p = [E.RESIZE, E.SCROLL], g = (t, e) => {
  m(t);
}, S = (t, e) => {
  const s = new i(t, e.arg, e.value);
  s.scrollElement && (s.handler = () => {
    s.process();
  }, p.forEach((o) => {
    w(s.scrollElement, o, s.handler);
  })), t[f] = s;
}, m = (t) => {
  const e = t[f];
  e && e.scrollElement && (p.forEach((s) => {
    y(e.scrollElement, s, e.handler);
  }), delete t[f]);
}, C = (t, e) => {
  const s = e.arg !== e.oldArg, o = e.value !== e.oldValue;
  (s || o) && (g(t), S(t, e));
}, H = {
  beforeMount: g,
  mounted: S,
  updated: C,
  unmounted: m
};
export {
  H as default
};
