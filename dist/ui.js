var ue = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  P = (e) => !e || typeof e != "object" || Object.keys(e).length === 0,
  Se = (e, o) => JSON.stringify(e) === JSON.stringify(o);
function pe(e, o) {
  e.forEach(function (r) {
    Array.isArray(r) ? pe(r, o) : o.push(r);
  });
}
function he(e) {
  let o = [];
  return pe(e, o), o;
}
var me = (...e) => he(e).filter(Boolean),
  ye = (e, o) => {
    let r = {},
      s = Object.keys(e),
      c = Object.keys(o);
    for (let t of s)
      if (c.includes(t)) {
        let a = e[t],
          l = o[t];
        Array.isArray(a) || Array.isArray(l)
          ? (r[t] = me(l, a))
          : typeof a == "object" && typeof l == "object"
            ? (r[t] = ye(a, l))
            : (r[t] = l + " " + a);
      } else r[t] = e[t];
    for (let t of c) s.includes(t) || (r[t] = o[t]);
    return r;
  },
  de = (e) => (!e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim());
const ce = "-",
  Me = (e) => {
    const o = Ge(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: s } = e;
    return {
      getClassGroupId: (a) => {
        const l = a.split(ce);
        return l[0] === "" && l.length !== 1 && l.shift(), xe(l, o) || je(a);
      },
      getConflictingClassGroupIds: (a, l) => {
        const d = r[a] || [];
        return l && s[a] ? [...d, ...s[a]] : d;
      },
    };
  },
  xe = (e, o) => {
    var a;
    if (e.length === 0) return o.classGroupId;
    const r = e[0],
      s = o.nextPart.get(r),
      c = s ? xe(e.slice(1), s) : void 0;
    if (c) return c;
    if (o.validators.length === 0) return;
    const t = e.join(ce);
    return (a = o.validators.find(({ validator: l }) => l(t))) == null
      ? void 0
      : a.classGroupId;
  },
  ge = /^\[(.+)\]$/,
  je = (e) => {
    if (ge.test(e)) {
      const o = ge.exec(e)[1],
        r = o == null ? void 0 : o.substring(0, o.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  Ge = (e) => {
    const { theme: o, prefix: r } = e,
      s = {
        nextPart: /* @__PURE__ */ new Map(),
        validators: [],
      };
    return (
      Re(Object.entries(e.classGroups), r).forEach(([t, a]) => {
        se(a, s, t, o);
      }),
      s
    );
  },
  se = (e, o, r, s) => {
    e.forEach((c) => {
      if (typeof c == "string") {
        const t = c === "" ? o : fe(o, c);
        t.classGroupId = r;
        return;
      }
      if (typeof c == "function") {
        if (Pe(c)) {
          se(c(s), o, r, s);
          return;
        }
        o.validators.push({
          validator: c,
          classGroupId: r,
        });
        return;
      }
      Object.entries(c).forEach(([t, a]) => {
        se(a, fe(o, t), r, s);
      });
    });
  },
  fe = (e, o) => {
    let r = e;
    return (
      o.split(ce).forEach((s) => {
        r.nextPart.has(s) ||
          r.nextPart.set(s, {
            nextPart: /* @__PURE__ */ new Map(),
            validators: [],
          }),
          (r = r.nextPart.get(s));
      }),
      r
    );
  },
  Pe = (e) => e.isThemeGetter,
  Re = (e, o) =>
    o
      ? e.map(([r, s]) => {
          const c = s.map((t) =>
            typeof t == "string"
              ? o + t
              : typeof t == "object"
                ? Object.fromEntries(
                    Object.entries(t).map(([a, l]) => [o + a, l]),
                  )
                : t,
          );
          return [r, c];
        })
      : e,
  Ve = (e) => {
    if (e < 1)
      return {
        get: () => {},
        set: () => {},
      };
    let o = 0,
      r = /* @__PURE__ */ new Map(),
      s = /* @__PURE__ */ new Map();
    const c = (t, a) => {
      r.set(t, a),
        o++,
        o > e && ((o = 0), (s = r), (r = /* @__PURE__ */ new Map()));
    };
    return {
      get(t) {
        let a = r.get(t);
        if (a !== void 0) return a;
        if ((a = s.get(t)) !== void 0) return c(t, a), a;
      },
      set(t, a) {
        r.has(t) ? r.set(t, a) : c(t, a);
      },
    };
  },
  ve = "!",
  Ne = (e) => {
    const { separator: o, experimentalParseClassName: r } = e,
      s = o.length === 1,
      c = o[0],
      t = o.length,
      a = (l) => {
        const d = [];
        let z = 0,
          h = 0,
          S;
        for (let b = 0; b < l.length; b++) {
          let A = l[b];
          if (z === 0) {
            if (A === c && (s || l.slice(b, b + t) === o)) {
              d.push(l.slice(h, b)), (h = b + t);
              continue;
            }
            if (A === "/") {
              S = b;
              continue;
            }
          }
          A === "[" ? z++ : A === "]" && z--;
        }
        const M = d.length === 0 ? l : l.substring(h),
          R = M.startsWith(ve),
          j = R ? M.substring(1) : M,
          k = S && S > h ? S - h : void 0;
        return {
          modifiers: d,
          hasImportantModifier: R,
          baseClassName: j,
          maybePostfixModifierPosition: k,
        };
      };
    return r
      ? (l) =>
          r({
            className: l,
            parseClassName: a,
          })
      : a;
  },
  Ie = (e) => {
    if (e.length <= 1) return e;
    const o = [];
    let r = [];
    return (
      e.forEach((s) => {
        s[0] === "[" ? (o.push(...r.sort(), s), (r = [])) : r.push(s);
      }),
      o.push(...r.sort()),
      o
    );
  },
  Te = (e) => ({
    cache: Ve(e.cacheSize),
    parseClassName: Ne(e),
    ...Me(e),
  }),
  Ee = /\s+/,
  Oe = (e, o) => {
    const {
        parseClassName: r,
        getClassGroupId: s,
        getConflictingClassGroupIds: c,
      } = o,
      t = [],
      a = e.trim().split(Ee);
    let l = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
      const z = a[d],
        {
          modifiers: h,
          hasImportantModifier: S,
          baseClassName: M,
          maybePostfixModifierPosition: R,
        } = r(z);
      let j = !!R,
        k = s(j ? M.substring(0, R) : M);
      if (!k) {
        if (!j) {
          l = z + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((k = s(M)), !k)) {
          l = z + (l.length > 0 ? " " + l : l);
          continue;
        }
        j = !1;
      }
      const b = Ie(h).join(":"),
        A = S ? b + ve : b,
        m = A + k;
      if (t.includes(m)) continue;
      t.push(m);
      const L = c(k, j);
      for (let N = 0; N < L.length; ++N) {
        const W = L[N];
        t.push(A + W);
      }
      l = z + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function Le() {
  let e = 0,
    o,
    r,
    s = "";
  for (; e < arguments.length; )
    (o = arguments[e++]) && (r = we(o)) && (s && (s += " "), (s += r));
  return s;
}
const we = (e) => {
  if (typeof e == "string") return e;
  let o,
    r = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (o = we(e[s])) && (r && (r += " "), (r += o));
  return r;
};
function le(e, ...o) {
  let r,
    s,
    c,
    t = a;
  function a(d) {
    const z = o.reduce((h, S) => S(h), e());
    return (r = Te(z)), (s = r.cache.get), (c = r.cache.set), (t = l), l(d);
  }
  function l(d) {
    const z = s(d);
    if (z) return z;
    const h = Oe(d, r);
    return c(d, h), h;
  }
  return function () {
    return t(Le.apply(null, arguments));
  };
}
const w = (e) => {
    const o = (r) => r[e] || [];
    return (o.isThemeGetter = !0), o;
  },
  ke = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  We = /^\d+\/\d+$/,
  _e = /* @__PURE__ */ new Set(["px", "full", "screen"]),
  $e = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Be =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ue = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Fe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Je =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  I = (e) => $(e) || _e.has(e) || We.test(e),
  E = (e) => B(e, "length", De),
  $ = (e) => !!e && !Number.isNaN(Number(e)),
  oe = (e) => B(e, "number", $),
  K = (e) => !!e && Number.isInteger(Number(e)),
  qe = (e) => e.endsWith("%") && $(e.slice(0, -1)),
  i = (e) => ke.test(e),
  O = (e) => $e.test(e),
  Ke = /* @__PURE__ */ new Set(["length", "size", "percentage"]),
  He = (e) => B(e, Ke, ze),
  Qe = (e) => B(e, "position", ze),
  Xe = /* @__PURE__ */ new Set(["image", "url"]),
  Ze = (e) => B(e, Xe, rr),
  Ye = (e) => B(e, "", er),
  H = () => !0,
  B = (e, o, r) => {
    const s = ke.exec(e);
    return s
      ? s[1]
        ? typeof o == "string"
          ? s[1] === o
          : o.has(s[1])
        : r(s[2])
      : !1;
  },
  De = (e) =>
    // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    Be.test(e) && !Ue.test(e),
  ze = () => !1,
  er = (e) => Fe.test(e),
  rr = (e) => Je.test(e),
  ne = () => {
    const e = w("colors"),
      o = w("spacing"),
      r = w("blur"),
      s = w("brightness"),
      c = w("borderColor"),
      t = w("borderRadius"),
      a = w("borderSpacing"),
      l = w("borderWidth"),
      d = w("contrast"),
      z = w("grayscale"),
      h = w("hueRotate"),
      S = w("invert"),
      M = w("gap"),
      R = w("gradientColorStops"),
      j = w("gradientColorStopPositions"),
      k = w("inset"),
      b = w("margin"),
      A = w("opacity"),
      m = w("padding"),
      L = w("saturate"),
      N = w("scale"),
      W = w("sepia"),
      Y = w("skew"),
      U = w("space"),
      F = w("translate"),
      _ = () => ["auto", "contain", "none"],
      J = () => ["auto", "hidden", "clip", "visible", "scroll"],
      q = () => ["auto", i, o],
      n = () => [i, o],
      g = () => ["", I, E],
      u = () => ["auto", $, i],
      p = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      f = () => ["solid", "dashed", "dotted", "double", "none"],
      y = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      x = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      v = () => ["", "0", i],
      C = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      G = () => [$, i];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [H],
        spacing: [I, E],
        blur: ["none", "", O, i],
        brightness: G(),
        borderColor: [e],
        borderRadius: ["none", "", "full", O, i],
        borderSpacing: n(),
        borderWidth: g(),
        contrast: G(),
        grayscale: v(),
        hueRotate: G(),
        invert: v(),
        gap: n(),
        gradientColorStops: [e],
        gradientColorStopPositions: [qe, E],
        inset: q(),
        margin: q(),
        opacity: G(),
        padding: n(),
        saturate: G(),
        scale: G(),
        sepia: v(),
        skew: G(),
        space: n(),
        translate: n(),
      },
      classGroups: {
        // Layout
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [
          {
            aspect: ["auto", "square", "video", i],
          },
        ],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         */
        container: ["container"],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [
          {
            columns: [O],
          },
        ],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        "break-after": [
          {
            "break-after": C(),
          },
        ],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        "break-before": [
          {
            "break-before": C(),
          },
        ],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        "break-inside": [
          {
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
          },
        ],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        "box-decoration": [
          {
            "box-decoration": ["slice", "clone"],
          },
        ],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [
          {
            box: ["border", "content"],
          },
        ],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        float: [
          {
            float: ["right", "left", "none", "start", "end"],
          },
        ],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [
          {
            clear: ["left", "right", "both", "none", "start", "end"],
          },
        ],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ["isolate", "isolation-auto"],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        "object-fit": [
          {
            object: ["contain", "cover", "fill", "none", "scale-down"],
          },
        ],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        "object-position": [
          {
            object: [...p(), i],
          },
        ],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [
          {
            overflow: J(),
          },
        ],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-x": [
          {
            "overflow-x": J(),
          },
        ],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-y": [
          {
            "overflow-y": J(),
          },
        ],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [
          {
            overscroll: _(),
          },
        ],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-x": [
          {
            "overscroll-x": _(),
          },
        ],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-y": [
          {
            "overscroll-y": _(),
          },
        ],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        /**
         * Top / Right / Bottom / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [
          {
            inset: [k],
          },
        ],
        /**
         * Right / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-x": [
          {
            "inset-x": [k],
          },
        ],
        /**
         * Top / Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-y": [
          {
            "inset-y": [k],
          },
        ],
        /**
         * Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        start: [
          {
            start: [k],
          },
        ],
        /**
         * End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        end: [
          {
            end: [k],
          },
        ],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [
          {
            top: [k],
          },
        ],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [
          {
            right: [k],
          },
        ],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [
          {
            bottom: [k],
          },
        ],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [
          {
            left: [k],
          },
        ],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ["visible", "invisible", "collapse"],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [
          {
            z: ["auto", K, i],
          },
        ],
        // Flexbox and Grid
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [
          {
            basis: q(),
          },
        ],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        "flex-direction": [
          {
            flex: ["row", "row-reverse", "col", "col-reverse"],
          },
        ],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        "flex-wrap": [
          {
            flex: ["wrap", "wrap-reverse", "nowrap"],
          },
        ],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [
          {
            flex: ["1", "auto", "initial", "none", i],
          },
        ],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [
          {
            grow: v(),
          },
        ],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [
          {
            shrink: v(),
          },
        ],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [
          {
            order: ["first", "last", "none", K, i],
          },
        ],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        "grid-cols": [
          {
            "grid-cols": [H],
          },
        ],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start-end": [
          {
            col: [
              "auto",
              {
                span: ["full", K, i],
              },
              i,
            ],
          },
        ],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start": [
          {
            "col-start": u(),
          },
        ],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-end": [
          {
            "col-end": u(),
          },
        ],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        "grid-rows": [
          {
            "grid-rows": [H],
          },
        ],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start-end": [
          {
            row: [
              "auto",
              {
                span: [K, i],
              },
              i,
            ],
          },
        ],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start": [
          {
            "row-start": u(),
          },
        ],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-end": [
          {
            "row-end": u(),
          },
        ],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        "grid-flow": [
          {
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
          },
        ],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        "auto-cols": [
          {
            "auto-cols": ["auto", "min", "max", "fr", i],
          },
        ],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        "auto-rows": [
          {
            "auto-rows": ["auto", "min", "max", "fr", i],
          },
        ],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [
          {
            gap: [M],
          },
        ],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-x": [
          {
            "gap-x": [M],
          },
        ],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-y": [
          {
            "gap-y": [M],
          },
        ],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        "justify-content": [
          {
            justify: ["normal", ...x()],
          },
        ],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        "justify-items": [
          {
            "justify-items": ["start", "end", "center", "stretch"],
          },
        ],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        "justify-self": [
          {
            "justify-self": ["auto", "start", "end", "center", "stretch"],
          },
        ],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        "align-content": [
          {
            content: ["normal", ...x(), "baseline"],
          },
        ],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        "align-items": [
          {
            items: ["start", "end", "center", "baseline", "stretch"],
          },
        ],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        "align-self": [
          {
            self: ["auto", "start", "end", "center", "stretch", "baseline"],
          },
        ],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        "place-content": [
          {
            "place-content": [...x(), "baseline"],
          },
        ],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        "place-items": [
          {
            "place-items": ["start", "end", "center", "baseline", "stretch"],
          },
        ],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        "place-self": [
          {
            "place-self": ["auto", "start", "end", "center", "stretch"],
          },
        ],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [
          {
            p: [m],
          },
        ],
        /**
         * Padding X
         * @see https://tailwindcss.com/docs/padding
         */
        px: [
          {
            px: [m],
          },
        ],
        /**
         * Padding Y
         * @see https://tailwindcss.com/docs/padding
         */
        py: [
          {
            py: [m],
          },
        ],
        /**
         * Padding Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [
          {
            ps: [m],
          },
        ],
        /**
         * Padding End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [
          {
            pe: [m],
          },
        ],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [
          {
            pt: [m],
          },
        ],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [
          {
            pr: [m],
          },
        ],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [
          {
            pb: [m],
          },
        ],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [
          {
            pl: [m],
          },
        ],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [
          {
            m: [b],
          },
        ],
        /**
         * Margin X
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [
          {
            mx: [b],
          },
        ],
        /**
         * Margin Y
         * @see https://tailwindcss.com/docs/margin
         */
        my: [
          {
            my: [b],
          },
        ],
        /**
         * Margin Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [
          {
            ms: [b],
          },
        ],
        /**
         * Margin End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [
          {
            me: [b],
          },
        ],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [
          {
            mt: [b],
          },
        ],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [
          {
            mr: [b],
          },
        ],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [
          {
            mb: [b],
          },
        ],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [
          {
            ml: [b],
          },
        ],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/space
         */
        "space-x": [
          {
            "space-x": [U],
          },
        ],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-x-reverse": ["space-x-reverse"],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/space
         */
        "space-y": [
          {
            "space-y": [U],
          },
        ],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-y-reverse": ["space-y-reverse"],
        // Sizing
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [
          {
            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", i, o],
          },
        ],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-w": [
          {
            "min-w": [i, o, "min", "max", "fit"],
          },
        ],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-w": [
          {
            "max-w": [
              i,
              o,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              {
                screen: [O],
              },
              O,
            ],
          },
        ],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [
          {
            h: [i, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"],
          },
        ],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-h": [
          {
            "min-h": [i, o, "min", "max", "fit", "svh", "lvh", "dvh"],
          },
        ],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-h": [
          {
            "max-h": [i, o, "min", "max", "fit", "svh", "lvh", "dvh"],
          },
        ],
        /**
         * Size
         * @see https://tailwindcss.com/docs/size
         */
        size: [
          {
            size: [i, o, "auto", "min", "max", "fit"],
          },
        ],
        // Typography
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        "font-size": [
          {
            text: ["base", O, E],
          },
        ],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        "font-style": ["italic", "not-italic"],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              oe,
            ],
          },
        ],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        "font-family": [
          {
            font: [H],
          },
        ],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-normal": ["normal-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-ordinal": ["ordinal"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-slashed-zero": ["slashed-zero"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              i,
            ],
          },
        ],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        "line-clamp": [
          {
            "line-clamp": ["none", $, oe],
          },
        ],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              I,
              i,
            ],
          },
        ],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        "list-image": [
          {
            "list-image": ["none", i],
          },
        ],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        "list-style-type": [
          {
            list: ["none", "disc", "decimal", i],
          },
        ],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        "list-style-position": [
          {
            list: ["inside", "outside"],
          },
        ],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/placeholder-color
         */
        "placeholder-color": [
          {
            placeholder: [e],
          },
        ],
        /**
         * Placeholder Opacity
         * @see https://tailwindcss.com/docs/placeholder-opacity
         */
        "placeholder-opacity": [
          {
            "placeholder-opacity": [A],
          },
        ],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        "text-alignment": [
          {
            text: ["left", "center", "right", "justify", "start", "end"],
          },
        ],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        "text-color": [
          {
            text: [e],
          },
        ],
        /**
         * Text Opacity
         * @see https://tailwindcss.com/docs/text-opacity
         */
        "text-opacity": [
          {
            "text-opacity": [A],
          },
        ],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        "text-decoration-style": [
          {
            decoration: [...f(), "wavy"],
          },
        ],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        "text-decoration-thickness": [
          {
            decoration: ["auto", "from-font", I, E],
          },
        ],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        "underline-offset": [
          {
            "underline-offset": ["auto", I, i],
          },
        ],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        "text-decoration-color": [
          {
            decoration: [e],
          },
        ],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        /**
         * Text Wrap
         * @see https://tailwindcss.com/docs/text-wrap
         */
        "text-wrap": [
          {
            text: ["wrap", "nowrap", "balance", "pretty"],
          },
        ],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [
          {
            indent: n(),
          },
        ],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              i,
            ],
          },
        ],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        break: [
          {
            break: ["normal", "words", "all", "keep"],
          },
        ],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [
          {
            hyphens: ["none", "manual", "auto"],
          },
        ],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [
          {
            content: ["none", i],
          },
        ],
        // Backgrounds
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        "bg-attachment": [
          {
            bg: ["fixed", "local", "scroll"],
          },
        ],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        "bg-clip": [
          {
            "bg-clip": ["border", "padding", "content", "text"],
          },
        ],
        /**
         * Background Opacity
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/background-opacity
         */
        "bg-opacity": [
          {
            "bg-opacity": [A],
          },
        ],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        "bg-origin": [
          {
            "bg-origin": ["border", "padding", "content"],
          },
        ],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        "bg-position": [
          {
            bg: [...p(), Qe],
          },
        ],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        "bg-repeat": [
          {
            bg: [
              "no-repeat",
              {
                repeat: ["", "x", "y", "round", "space"],
              },
            ],
          },
        ],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        "bg-size": [
          {
            bg: ["auto", "cover", "contain", He],
          },
        ],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        "bg-image": [
          {
            bg: [
              "none",
              {
                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
              },
              Ze,
            ],
          },
        ],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        "bg-color": [
          {
            bg: [e],
          },
        ],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from-pos": [
          {
            from: [j],
          },
        ],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via-pos": [
          {
            via: [j],
          },
        ],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to-pos": [
          {
            to: [j],
          },
        ],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from": [
          {
            from: [R],
          },
        ],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via": [
          {
            via: [R],
          },
        ],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to": [
          {
            to: [R],
          },
        ],
        // Borders
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [
          {
            rounded: [t],
          },
        ],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-s": [
          {
            "rounded-s": [t],
          },
        ],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-e": [
          {
            "rounded-e": [t],
          },
        ],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-t": [
          {
            "rounded-t": [t],
          },
        ],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-r": [
          {
            "rounded-r": [t],
          },
        ],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-b": [
          {
            "rounded-b": [t],
          },
        ],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-l": [
          {
            "rounded-l": [t],
          },
        ],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ss": [
          {
            "rounded-ss": [t],
          },
        ],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-se": [
          {
            "rounded-se": [t],
          },
        ],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ee": [
          {
            "rounded-ee": [t],
          },
        ],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-es": [
          {
            "rounded-es": [t],
          },
        ],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tl": [
          {
            "rounded-tl": [t],
          },
        ],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tr": [
          {
            "rounded-tr": [t],
          },
        ],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-br": [
          {
            "rounded-br": [t],
          },
        ],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-bl": [
          {
            "rounded-bl": [t],
          },
        ],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w": [
          {
            border: [l],
          },
        ],
        /**
         * Border Width X
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-x": [
          {
            "border-x": [l],
          },
        ],
        /**
         * Border Width Y
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-y": [
          {
            "border-y": [l],
          },
        ],
        /**
         * Border Width Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-s": [
          {
            "border-s": [l],
          },
        ],
        /**
         * Border Width End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-e": [
          {
            "border-e": [l],
          },
        ],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-t": [
          {
            "border-t": [l],
          },
        ],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-r": [
          {
            "border-r": [l],
          },
        ],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-b": [
          {
            "border-b": [l],
          },
        ],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-l": [
          {
            "border-l": [l],
          },
        ],
        /**
         * Border Opacity
         * @see https://tailwindcss.com/docs/border-opacity
         */
        "border-opacity": [
          {
            "border-opacity": [A],
          },
        ],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        "border-style": [
          {
            border: [...f(), "hidden"],
          },
        ],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x": [
          {
            "divide-x": [l],
          },
        ],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x-reverse": ["divide-x-reverse"],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y": [
          {
            "divide-y": [l],
          },
        ],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y-reverse": ["divide-y-reverse"],
        /**
         * Divide Opacity
         * @see https://tailwindcss.com/docs/divide-opacity
         */
        "divide-opacity": [
          {
            "divide-opacity": [A],
          },
        ],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/divide-style
         */
        "divide-style": [
          {
            divide: f(),
          },
        ],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color": [
          {
            border: [c],
          },
        ],
        /**
         * Border Color X
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-x": [
          {
            "border-x": [c],
          },
        ],
        /**
         * Border Color Y
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-y": [
          {
            "border-y": [c],
          },
        ],
        /**
         * Border Color S
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-s": [
          {
            "border-s": [c],
          },
        ],
        /**
         * Border Color E
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-e": [
          {
            "border-e": [c],
          },
        ],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-t": [
          {
            "border-t": [c],
          },
        ],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-r": [
          {
            "border-r": [c],
          },
        ],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-b": [
          {
            "border-b": [c],
          },
        ],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-l": [
          {
            "border-l": [c],
          },
        ],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        "divide-color": [
          {
            divide: [c],
          },
        ],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        "outline-style": [
          {
            outline: ["", ...f()],
          },
        ],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        "outline-offset": [
          {
            "outline-offset": [I, i],
          },
        ],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        "outline-w": [
          {
            outline: [I, E],
          },
        ],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        "outline-color": [
          {
            outline: [e],
          },
        ],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w": [
          {
            ring: g(),
          },
        ],
        /**
         * Ring Width Inset
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w-inset": ["ring-inset"],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/ring-color
         */
        "ring-color": [
          {
            ring: [e],
          },
        ],
        /**
         * Ring Opacity
         * @see https://tailwindcss.com/docs/ring-opacity
         */
        "ring-opacity": [
          {
            "ring-opacity": [A],
          },
        ],
        /**
         * Ring Offset Width
         * @see https://tailwindcss.com/docs/ring-offset-width
         */
        "ring-offset-w": [
          {
            "ring-offset": [I, E],
          },
        ],
        /**
         * Ring Offset Color
         * @see https://tailwindcss.com/docs/ring-offset-color
         */
        "ring-offset-color": [
          {
            "ring-offset": [e],
          },
        ],
        // Effects
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [
          {
            shadow: ["", "inner", "none", O, Ye],
          },
        ],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow-color
         */
        "shadow-color": [
          {
            shadow: [H],
          },
        ],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [
          {
            opacity: [A],
          },
        ],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        "mix-blend": [
          {
            "mix-blend": [...y(), "plus-lighter", "plus-darker"],
          },
        ],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        "bg-blend": [
          {
            "bg-blend": y(),
          },
        ],
        // Filters
        /**
         * Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [
          {
            filter: ["", "none"],
          },
        ],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [
          {
            blur: [r],
          },
        ],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [
          {
            brightness: [s],
          },
        ],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [
          {
            contrast: [d],
          },
        ],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        "drop-shadow": [
          {
            "drop-shadow": ["", "none", O, i],
          },
        ],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [
          {
            grayscale: [z],
          },
        ],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        "hue-rotate": [
          {
            "hue-rotate": [h],
          },
        ],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [
          {
            invert: [S],
          },
        ],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [
          {
            saturate: [L],
          },
        ],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [
          {
            sepia: [W],
          },
        ],
        /**
         * Backdrop Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        "backdrop-filter": [
          {
            "backdrop-filter": ["", "none"],
          },
        ],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        "backdrop-blur": [
          {
            "backdrop-blur": [r],
          },
        ],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        "backdrop-brightness": [
          {
            "backdrop-brightness": [s],
          },
        ],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        "backdrop-contrast": [
          {
            "backdrop-contrast": [d],
          },
        ],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [z],
          },
        ],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [h],
          },
        ],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        "backdrop-invert": [
          {
            "backdrop-invert": [S],
          },
        ],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        "backdrop-opacity": [
          {
            "backdrop-opacity": [A],
          },
        ],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        "backdrop-saturate": [
          {
            "backdrop-saturate": [L],
          },
        ],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        "backdrop-sepia": [
          {
            "backdrop-sepia": [W],
          },
        ],
        // Tables
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        "border-collapse": [
          {
            border: ["collapse", "separate"],
          },
        ],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing": [
          {
            "border-spacing": [a],
          },
        ],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-x": [
          {
            "border-spacing-x": [a],
          },
        ],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-y": [
          {
            "border-spacing-y": [a],
          },
        ],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        "table-layout": [
          {
            table: ["auto", "fixed"],
          },
        ],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [
          {
            caption: ["top", "bottom"],
          },
        ],
        // Transitions and Animation
        /**
         * Tranisition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              i,
            ],
          },
        ],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [
          {
            duration: G(),
          },
        ],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [
          {
            ease: ["linear", "in", "out", "in-out", i],
          },
        ],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [
          {
            delay: G(),
          },
        ],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [
          {
            animate: ["none", "spin", "ping", "pulse", "bounce", i],
          },
        ],
        // Transforms
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [
          {
            transform: ["", "gpu", "none"],
          },
        ],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [
          {
            scale: [N],
          },
        ],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-x": [
          {
            "scale-x": [N],
          },
        ],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-y": [
          {
            "scale-y": [N],
          },
        ],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [
          {
            rotate: [K, i],
          },
        ],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-x": [
          {
            "translate-x": [F],
          },
        ],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-y": [
          {
            "translate-y": [F],
          },
        ],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-x": [
          {
            "skew-x": [Y],
          },
        ],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-y": [
          {
            "skew-y": [Y],
          },
        ],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              i,
            ],
          },
        ],
        // Interactivity
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [
          {
            accent: ["auto", e],
          },
        ],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: [
          {
            appearance: ["none", "auto"],
          },
        ],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              i,
            ],
          },
        ],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        "caret-color": [
          {
            caret: [e],
          },
        ],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        "pointer-events": [
          {
            "pointer-events": ["none", "auto"],
          },
        ],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [
          {
            resize: ["none", "y", "x", ""],
          },
        ],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        "scroll-behavior": [
          {
            scroll: ["auto", "smooth"],
          },
        ],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-m": [
          {
            "scroll-m": n(),
          },
        ],
        /**
         * Scroll Margin X
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mx": [
          {
            "scroll-mx": n(),
          },
        ],
        /**
         * Scroll Margin Y
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-my": [
          {
            "scroll-my": n(),
          },
        ],
        /**
         * Scroll Margin Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ms": [
          {
            "scroll-ms": n(),
          },
        ],
        /**
         * Scroll Margin End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-me": [
          {
            "scroll-me": n(),
          },
        ],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mt": [
          {
            "scroll-mt": n(),
          },
        ],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mr": [
          {
            "scroll-mr": n(),
          },
        ],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mb": [
          {
            "scroll-mb": n(),
          },
        ],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ml": [
          {
            "scroll-ml": n(),
          },
        ],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-p": [
          {
            "scroll-p": n(),
          },
        ],
        /**
         * Scroll Padding X
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-px": [
          {
            "scroll-px": n(),
          },
        ],
        /**
         * Scroll Padding Y
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-py": [
          {
            "scroll-py": n(),
          },
        ],
        /**
         * Scroll Padding Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-ps": [
          {
            "scroll-ps": n(),
          },
        ],
        /**
         * Scroll Padding End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pe": [
          {
            "scroll-pe": n(),
          },
        ],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pt": [
          {
            "scroll-pt": n(),
          },
        ],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pr": [
          {
            "scroll-pr": n(),
          },
        ],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pb": [
          {
            "scroll-pb": n(),
          },
        ],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pl": [
          {
            "scroll-pl": n(),
          },
        ],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        "snap-align": [
          {
            snap: ["start", "end", "center", "align-none"],
          },
        ],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        "snap-stop": [
          {
            snap: ["normal", "always"],
          },
        ],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-type": [
          {
            snap: ["none", "x", "y", "both"],
          },
        ],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-strictness": [
          {
            snap: ["mandatory", "proximity"],
          },
        ],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [
          {
            touch: ["auto", "none", "manipulation"],
          },
        ],
        /**
         * Touch Action X
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-x": [
          {
            "touch-pan": ["x", "left", "right"],
          },
        ],
        /**
         * Touch Action Y
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-y": [
          {
            "touch-pan": ["y", "up", "down"],
          },
        ],
        /**
         * Touch Action Pinch Zoom
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-pz": ["touch-pinch-zoom"],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [
          {
            select: ["none", "text", "all", "auto"],
          },
        ],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", i],
          },
        ],
        // SVG
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [
          {
            fill: [e, "none"],
          },
        ],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        "stroke-w": [
          {
            stroke: [I, E, oe],
          },
        ],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [
          {
            stroke: [e, "none"],
          },
        ],
        // Accessibility
        /**
         * Screen Readers
         * @see https://tailwindcss.com/docs/screen-readers
         */
        sr: ["sr-only", "not-sr-only"],
        /**
         * Forced Color Adjust
         * @see https://tailwindcss.com/docs/forced-color-adjust
         */
        "forced-color-adjust": [
          {
            "forced-color-adjust": ["auto", "none"],
          },
        ],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"],
      },
    };
  },
  or = (
    e,
    {
      cacheSize: o,
      prefix: r,
      separator: s,
      experimentalParseClassName: c,
      extend: t = {},
      override: a = {},
    },
  ) => {
    X(e, "cacheSize", o),
      X(e, "prefix", r),
      X(e, "separator", s),
      X(e, "experimentalParseClassName", c);
    for (const l in a) tr(e[l], a[l]);
    for (const l in t) sr(e[l], t[l]);
    return e;
  },
  X = (e, o, r) => {
    r !== void 0 && (e[o] = r);
  },
  tr = (e, o) => {
    if (o) for (const r in o) X(e, r, o[r]);
  },
  sr = (e, o) => {
    if (o)
      for (const r in o) {
        const s = o[r];
        s !== void 0 && (e[r] = (e[r] || []).concat(s));
      }
  },
  lr = (e, ...o) =>
    typeof e == "function" ? le(ne, e, ...o) : le(() => or(ne(), e), ...o),
  nr = /* @__PURE__ */ le(ne);
var ar = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
  Ce = (e) => e || void 0,
  Z = (...e) => Ce(he(e).filter(Boolean).join(" ")),
  te = null,
  T = {},
  ae = !1,
  Q =
    (...e) =>
    (o) =>
      o.twMerge
        ? ((!te || ae) &&
            ((ae = !1),
            (te = P(T)
              ? nr
              : lr({
                  ...T,
                  extend: {
                    theme: T.theme,
                    classGroups: T.classGroups,
                    conflictingClassGroupModifiers:
                      T.conflictingClassGroupModifiers,
                    conflictingClassGroups: T.conflictingClassGroups,
                    ...T.extend,
                  },
                }))),
          Ce(te(Z(e))))
        : Z(e),
  be = (e, o) => {
    for (let r in o)
      e.hasOwnProperty(r) ? (e[r] = Z(e[r], o[r])) : (e[r] = o[r]);
    return e;
  },
  cr = (e, o) => {
    let {
        extend: r = null,
        slots: s = {},
        variants: c = {},
        compoundVariants: t = [],
        compoundSlots: a = [],
        defaultVariants: l = {},
      } = e,
      d = { ...ar, ...o },
      z =
        r != null && r.base
          ? Z(r.base, e == null ? void 0 : e.base)
          : e == null
            ? void 0
            : e.base,
      h = r != null && r.variants && !P(r.variants) ? ye(c, r.variants) : c,
      S =
        r != null && r.defaultVariants && !P(r.defaultVariants)
          ? { ...r.defaultVariants, ...l }
          : l;
    !P(d.twMergeConfig) &&
      !Se(d.twMergeConfig, T) &&
      ((ae = !0), (T = d.twMergeConfig));
    let M = P(r == null ? void 0 : r.slots),
      R = P(s)
        ? {}
        : {
            base: Z(
              e == null ? void 0 : e.base,
              M && (r == null ? void 0 : r.base),
            ),
            ...s,
          },
      j = M
        ? R
        : be(
            { ...(r == null ? void 0 : r.slots) },
            P(R) ? { base: e == null ? void 0 : e.base } : R,
          ),
      k = P(r == null ? void 0 : r.compoundVariants)
        ? t
        : me(r == null ? void 0 : r.compoundVariants, t),
      b = (m) => {
        if (P(h) && P(s) && M)
          return Q(
            z,
            m == null ? void 0 : m.class,
            m == null ? void 0 : m.className,
          )(d);
        if (k && !Array.isArray(k))
          throw new TypeError(
            `The "compoundVariants" prop must be an array. Received: ${typeof k}`,
          );
        if (a && !Array.isArray(a))
          throw new TypeError(
            `The "compoundSlots" prop must be an array. Received: ${typeof a}`,
          );
        let L = (n, g, u = [], p) => {
            let f = u;
            if (typeof g == "string")
              f = f.concat(
                de(g)
                  .split(" ")
                  .map((y) => `${n}:${y}`),
              );
            else if (Array.isArray(g))
              f = f.concat(g.reduce((y, x) => y.concat(`${n}:${x}`), []));
            else if (typeof g == "object" && typeof p == "string") {
              for (let y in g)
                if (g.hasOwnProperty(y) && y === p) {
                  let x = g[y];
                  if (x && typeof x == "string") {
                    let v = de(x);
                    f[p]
                      ? (f[p] = f[p].concat(
                          v.split(" ").map((C) => `${n}:${C}`),
                        ))
                      : (f[p] = v.split(" ").map((C) => `${n}:${C}`));
                  } else
                    Array.isArray(x) &&
                      x.length > 0 &&
                      (f[p] = x.reduce((v, C) => v.concat(`${n}:${C}`), []));
                }
            }
            return f;
          },
          N = (n, g = h, u = null, p = null) => {
            var f;
            let y = g[n];
            if (!y || P(y)) return null;
            let x =
              (f = p == null ? void 0 : p[n]) != null
                ? f
                : m == null
                  ? void 0
                  : m[n];
            if (x === null) return null;
            let v = ue(x),
              C =
                (Array.isArray(d.responsiveVariants) &&
                  d.responsiveVariants.length > 0) ||
                d.responsiveVariants === !0,
              G = S == null ? void 0 : S[n],
              V = [];
            if (typeof v == "object" && C)
              for (let [re, ie] of Object.entries(v)) {
                let Ae = y[ie];
                if (re === "initial") {
                  G = ie;
                  continue;
                }
                (Array.isArray(d.responsiveVariants) &&
                  !d.responsiveVariants.includes(re)) ||
                  (V = L(re, Ae, V, u));
              }
            let D = v != null && typeof v != "object" ? v : ue(G),
              ee = y[D || "false"];
            return typeof V == "object" && typeof u == "string" && V[u]
              ? be(V, ee)
              : V.length > 0
                ? (V.push(ee), u === "base" ? V.join(" ") : V)
                : ee;
          },
          W = () => (h ? Object.keys(h).map((n) => N(n, h)) : null),
          Y = (n, g) => {
            if (!h || typeof h != "object") return null;
            let u = new Array();
            for (let p in h) {
              let f = N(p, h, n, g),
                y = n === "base" && typeof f == "string" ? f : f && f[n];
              y && (u[u.length] = y);
            }
            return u;
          },
          U = {};
        for (let n in m) m[n] !== void 0 && (U[n] = m[n]);
        let F = (n, g) => {
            var u;
            let p =
              typeof (m == null ? void 0 : m[n]) == "object"
                ? { [n]: (u = m[n]) == null ? void 0 : u.initial }
                : {};
            return { ...S, ...U, ...p, ...g };
          },
          _ = (n = [], g) => {
            let u = [];
            for (let { class: p, className: f, ...y } of n) {
              let x = !0;
              for (let [v, C] of Object.entries(y)) {
                let G = F(v, g)[v];
                if (Array.isArray(C)) {
                  if (!C.includes(G)) {
                    x = !1;
                    break;
                  }
                } else {
                  let V = (D) => D == null || D === !1;
                  if (V(C) && V(G)) continue;
                  if (G !== C) {
                    x = !1;
                    break;
                  }
                }
              }
              x && (p && u.push(p), f && u.push(f));
            }
            return u;
          },
          J = (n) => {
            let g = _(k, n);
            if (!Array.isArray(g)) return g;
            let u = {};
            for (let p of g)
              if (
                (typeof p == "string" && (u.base = Q(u.base, p)(d)),
                typeof p == "object")
              )
                for (let [f, y] of Object.entries(p)) u[f] = Q(u[f], y)(d);
            return u;
          },
          q = (n) => {
            if (a.length < 1) return null;
            let g = {};
            for (let { slots: u = [], class: p, className: f, ...y } of a) {
              if (!P(y)) {
                let x = !0;
                for (let v of Object.keys(y)) {
                  let C = F(v, n)[v];
                  if (
                    C === void 0 ||
                    (Array.isArray(y[v]) ? !y[v].includes(C) : y[v] !== C)
                  ) {
                    x = !1;
                    break;
                  }
                }
                if (!x) continue;
              }
              for (let x of u) (g[x] = g[x] || []), g[x].push([p, f]);
            }
            return g;
          };
        if (!P(s) || !M) {
          let n = {};
          if (typeof j == "object" && !P(j))
            for (let g of Object.keys(j))
              n[g] = (u) => {
                var p, f;
                return Q(
                  j[g],
                  Y(g, u),
                  ((p = J(u)) != null ? p : [])[g],
                  ((f = q(u)) != null ? f : [])[g],
                  u == null ? void 0 : u.class,
                  u == null ? void 0 : u.className,
                )(d);
              };
          return n;
        }
        return Q(
          z,
          W(),
          _(k),
          m == null ? void 0 : m.class,
          m == null ? void 0 : m.className,
        )(d);
      },
      A = () => {
        if (!(!h || typeof h != "object")) return Object.keys(h);
      };
    return (
      (b.variantKeys = A()),
      (b.extend = r),
      (b.base = z),
      (b.slots = j),
      (b.variants = h),
      (b.defaultVariants = S),
      (b.compoundSlots = a),
      (b.compoundVariants = k),
      b
    );
  };
const ir = [
    "box-border",
    "subpixel-antialiased",
    "text-inherit",
    "appearance-none",
    "outline-none",
    "select-none",
  ],
  ur = ["transition-all", "duration-200", "ease-in-out"],
  dr = [
    "focus:ring-2",
    "focus:ring-offset-[2px]",
    "focus:border-transparent",
    "focus:outline-none",
    "focus:ring-current",
  ],
  gr = ["disabled:opacity-50", "disabled:pointer-events-none"],
  fr = cr({
    slots: {
      root: [
        ...ir,
        ...ur,
        ...dr,
        ...gr,
        "min-w-fit",
        "overflow-hidden",
        "inline-flex",
        "z-0",
        "rounded",
        "whitespace-nowrap",
        "font-medium",
        "items-center",
        "justify-center",
        "cursor-pointer",
        "active:opacity-90",
        "tap-highlight-transparent",
        "border",
        "border-transparent",
        "bg-transparent",
        "group",
        "gap-1",
        "font-semibold",
      ],
      start: "inline-flex items-center -ml-1",
      end: "inline-flex items-center -mr-1",
    },
    defaultVariants: {
      surface: "default",
      color: "neutral",
      size: "default",
      fullWidth: !1,
      disabled: !1,
      focus: !1,
    },
    variants: {
      surface: {
        default: {
          root: [
            "bg-neutral-800",
            "text-neutral-50",
            "hover:bg-neutral-800/90",
            "focus:ring-2",
            "focus:ring-neutral-800",
            "focus:ring-offset-2",
          ],
        },
        outline: {
          root: [
            "border-neutral-400",
            "bg-transparent",
            "text-neutral-600",
            "hover:bg-neutral-100",
          ],
        },
        secondary: {
          root: [
            "bg-neutral-200",
            "text-neutral-600",
            "hover:bg-neutral-200/90",
            "border-transparent",
          ],
        },
        ghost: {
          root: [
            "text-neutral-600",
            "hover:bg-neutral-100/80",
            "border-transparent",
          ],
        },
        link: {
          root: [
            "underline",
            "text-neutral-800",
            "underline-offset-4",
            "hover:underline",
            "border-transparent",
          ],
        },
      },
      color: {
        default: [],
        red: [],
        orange: [],
        amber: [],
        yellow: [],
        lime: [],
        green: [],
        emerald: [],
        teal: [],
        cyan: [],
        sky: [],
        blue: [],
        indigo: [],
        violet: [],
        purple: [],
        fuchsia: [],
        pink: [],
        rose: [],
        slate: [],
        gray: [],
        neutral: [],
        zinc: [],
        stone: [],
      },
      size: {
        xs: {
          root: "h-6 px-1.5 text-xs",
        },
        sm: {
          root: "h-7 px-2 text-sm",
        },
        default: {
          root: "h-8 px-3  text-base",
        },
        md: {
          root: "h-9 px-4 text-md",
        },
        lg: {
          root: "h-10 px-6 text-lg",
        },
        xl: {
          root: "h-12 px-8 text-xl",
        },
      },
      fullWidth: {
        true: {
          root: ["w-full"],
        },
        false: [],
      },
    },
    compoundVariants: [
      {
        surface: "default",
        color: "red",
        class: {
          root: [
            "bg-red-600",
            "text-white",
            "hover:bg-red-600/90",
            "focus:ring-red-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "red",
        class: {
          root: ["border-red-500", "text-red-600", "hover:bg-red-50"],
        },
      },
      {
        surface: "secondary",
        color: "red",
        class: {
          root: ["bg-red-100", "text-red-700", "hover:bg-red-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "red",
        class: {
          root: ["text-red-600", "hover:bg-red-50"],
        },
      },
      {
        surface: "link",
        color: "red",
        class: {
          root: ["text-red-600", "hover:text-red-700"],
        },
      },
      {
        surface: "default",
        color: "orange",
        class: {
          root: [
            "bg-orange-600",
            "text-white",
            "hover:bg-orange-600/90",
            "focus:ring-orange-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "orange",
        class: {
          root: ["border-orange-500", "text-orange-600", "hover:bg-orange-50"],
        },
      },
      {
        surface: "secondary",
        color: "orange",
        class: {
          root: ["bg-orange-100", "text-orange-700", "hover:bg-orange-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "orange",
        class: {
          root: ["text-orange-600", "hover:bg-orange-50"],
        },
      },
      {
        surface: "link",
        color: "orange",
        class: {
          root: ["text-orange-600", "hover:text-orange-700"],
        },
      },
      {
        surface: "default",
        color: "amber",
        class: {
          root: [
            "bg-amber-600",
            "text-white",
            "hover:bg-amber-600/90",
            "focus:ring-amber-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "amber",
        class: {
          root: ["border-amber-500", "text-amber-600", "hover:bg-amber-50"],
        },
      },
      {
        surface: "secondary",
        color: "amber",
        class: {
          root: ["bg-amber-100", "text-amber-700", "hover:bg-amber-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "amber",
        class: {
          root: ["text-amber-600", "hover:bg-amber-50"],
        },
      },
      {
        surface: "link",
        color: "amber",
        class: {
          root: ["text-amber-600", "hover:text-amber-700"],
        },
      },
      {
        surface: "default",
        color: "lime",
        class: {
          root: [
            "bg-lime-600",
            "text-white",
            "hover:bg-lime-600/90",
            "focus:ring-lime-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "lime",
        class: {
          root: ["border-lime-500", "text-lime-600", "hover:bg-lime-50"],
        },
      },
      {
        surface: "secondary",
        color: "lime",
        class: {
          root: ["bg-lime-100", "text-lime-700", "hover:bg-lime-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "lime",
        class: {
          root: ["text-lime-600", "hover:bg-lime-50"],
        },
      },
      {
        surface: "link",
        color: "lime",
        class: {
          root: ["text-lime-600", "hover:text-lime-700"],
        },
      },
      {
        surface: "default",
        color: "emerald",
        class: {
          root: [
            "bg-emerald-600",
            "text-white",
            "hover:bg-emerald-600/90",
            "focus:ring-emerald-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "emerald",
        class: {
          root: [
            "border-emerald-500",
            "text-emerald-600",
            "hover:bg-emerald-50",
          ],
        },
      },
      {
        surface: "secondary",
        color: "emerald",
        class: {
          root: [
            "bg-emerald-100",
            "text-emerald-700",
            "hover:bg-emerald-100/80",
          ],
        },
      },
      {
        surface: "ghost",
        color: "emerald",
        class: {
          root: ["text-emerald-600", "hover:bg-emerald-50"],
        },
      },
      {
        surface: "link",
        color: "emerald",
        class: {
          root: ["text-emerald-600", "hover:text-emerald-700"],
        },
      },
      {
        surface: "default",
        color: "teal",
        class: {
          root: [
            "bg-teal-600",
            "text-white",
            "hover:bg-teal-600/90",
            "focus:ring-teal-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "teal",
        class: {
          root: ["border-teal-500", "text-teal-600", "hover:bg-teal-50"],
        },
      },
      {
        surface: "secondary",
        color: "teal",
        class: {
          root: ["bg-teal-100", "text-teal-700", "hover:bg-teal-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "teal",
        class: {
          root: ["text-teal-600", "hover:bg-teal-50"],
        },
      },
      {
        surface: "link",
        color: "teal",
        class: {
          root: ["text-teal-600", "hover:text-teal-700"],
        },
      },
      {
        surface: "default",
        color: "cyan",
        class: {
          root: [
            "bg-cyan-600",
            "text-white",
            "hover:bg-cyan-600/90",
            "focus:ring-cyan-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "cyan",
        class: {
          root: ["border-cyan-500", "text-cyan-600", "hover:bg-cyan-50"],
        },
      },
      {
        surface: "secondary",
        color: "cyan",
        class: {
          root: ["bg-cyan-100", "text-cyan-700", "hover:bg-cyan-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "cyan",
        class: {
          root: ["text-cyan-600", "hover:bg-cyan-50"],
        },
      },
      {
        surface: "link",
        color: "cyan",
        class: {
          root: ["text-cyan-600", "hover:text-cyan-700"],
        },
      },
      {
        surface: "default",
        color: "sky",
        class: {
          root: [
            "bg-sky-600",
            "text-white",
            "hover:bg-sky-600/90",
            "focus:ring-sky-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "sky",
        class: {
          root: ["border-sky-500", "text-sky-600", "hover:bg-sky-50"],
        },
      },
      {
        surface: "secondary",
        color: "sky",
        class: {
          root: ["bg-sky-100", "text-sky-700", "hover:bg-sky-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "sky",
        class: {
          root: ["text-sky-600", "hover:bg-sky-50"],
        },
      },
      {
        surface: "link",
        color: "sky",
        class: {
          root: ["text-sky-600", "hover:text-sky-700"],
        },
      },
      {
        surface: "default",
        color: "blue",
        class: {
          root: [
            "bg-blue-600",
            "text-white",
            "hover:bg-blue-600/90",
            "focus:ring-blue-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "blue",
        class: {
          root: ["border-blue-500", "text-blue-600", "hover:bg-blue-50"],
        },
      },
      {
        surface: "secondary",
        color: "blue",
        class: {
          root: ["bg-blue-100", "text-blue-700", "hover:bg-blue-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "blue",
        class: {
          root: ["text-blue-600", "hover:bg-blue-50"],
        },
      },
      {
        surface: "link",
        color: "blue",
        class: {
          root: ["text-blue-600", "hover:text-blue-700"],
        },
      },
      {
        surface: "default",
        color: "indigo",
        class: {
          root: [
            "bg-indigo-600",
            "text-white",
            "hover:bg-indigo-600/90",
            "focus:ring-indigo-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "indigo",
        class: {
          root: ["border-indigo-500", "text-indigo-600", "hover:bg-indigo-50"],
        },
      },
      {
        surface: "secondary",
        color: "indigo",
        class: {
          root: ["bg-indigo-100", "text-indigo-700", "hover:bg-indigo-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "indigo",
        class: {
          root: ["text-indigo-600", "hover:bg-indigo-50"],
        },
      },
      {
        surface: "link",
        color: "indigo",
        class: {
          root: ["text-indigo-600", "hover:text-indigo-700"],
        },
      },
      {
        surface: "default",
        color: "violet",
        class: {
          root: [
            "bg-violet-600",
            "text-white",
            "hover:bg-violet-600/90",
            "focus:ring-violet-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "violet",
        class: {
          root: ["border-violet-500", "text-violet-600", "hover:bg-violet-50"],
        },
      },
      {
        surface: "secondary",
        color: "violet",
        class: {
          root: ["bg-violet-100", "text-violet-700", "hover:bg-violet-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "violet",
        class: {
          root: ["text-violet-600", "hover:bg-violet-50"],
        },
      },
      {
        surface: "link",
        color: "violet",
        class: {
          root: ["text-violet-600", "hover:text-violet-700"],
        },
      },
      {
        surface: "default",
        color: "purple",
        class: {
          root: [
            "bg-purple-600",
            "text-white",
            "hover:bg-purple-600/90",
            "focus:ring-purple-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "purple",
        class: {
          root: ["border-purple-500", "text-purple-600", "hover:bg-purple-50"],
        },
      },
      {
        surface: "secondary",
        color: "purple",
        class: {
          root: ["bg-purple-100", "text-purple-700", "hover:bg-purple-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "purple",
        class: {
          root: ["text-purple-600", "hover:bg-purple-50"],
        },
      },
      {
        surface: "link",
        color: "purple",
        class: {
          root: ["text-purple-600", "hover:text-purple-700"],
        },
      },
      {
        surface: "default",
        color: "fuchsia",
        class: {
          root: [
            "bg-fuchsia-600",
            "text-white",
            "hover:bg-fuchsia-600/90",
            "focus:ring-fuchsia-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "fuchsia",
        class: {
          root: [
            "border-fuchsia-500",
            "text-fuchsia-600",
            "hover:bg-fuchsia-50",
          ],
        },
      },
      {
        surface: "secondary",
        color: "fuchsia",
        class: {
          root: [
            "bg-fuchsia-100",
            "text-fuchsia-700",
            "hover:bg-fuchsia-100/80",
          ],
        },
      },
      {
        surface: "ghost",
        color: "fuchsia",
        class: {
          root: ["text-fuchsia-600", "hover:bg-fuchsia-50"],
        },
      },
      {
        surface: "link",
        color: "fuchsia",
        class: {
          root: ["text-fuchsia-600", "hover:text-fuchsia-700"],
        },
      },
      {
        surface: "default",
        color: "pink",
        class: {
          root: [
            "bg-pink-600",
            "text-white",
            "hover:bg-pink-600/90",
            "focus:ring-pink-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "pink",
        class: {
          root: ["border-pink-500", "text-pink-600", "hover:bg-pink-50"],
        },
      },
      {
        surface: "secondary",
        color: "pink",
        class: {
          root: ["bg-pink-100", "text-pink-700", "hover:bg-pink-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "pink",
        class: {
          root: ["text-pink-600", "hover:bg-pink-50"],
        },
      },
      {
        surface: "link",
        color: "pink",
        class: {
          root: ["text-pink-600", "hover:text-pink-700"],
        },
      },
      {
        surface: "default",
        color: "rose",
        class: {
          root: [
            "bg-rose-600",
            "text-white",
            "hover:bg-rose-600/90",
            "focus:ring-rose-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "rose",
        class: {
          root: ["border-rose-500", "text-rose-600", "hover:bg-rose-50"],
        },
      },
      {
        surface: "secondary",
        color: "rose",
        class: {
          root: ["bg-rose-100", "text-rose-700", "hover:bg-rose-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "rose",
        class: {
          root: ["text-rose-600", "hover:bg-rose-50"],
        },
      },
      {
        surface: "link",
        color: "rose",
        class: {
          root: ["text-rose-600", "hover:text-rose-700"],
        },
      },
      {
        surface: "default",
        color: "yellow",
        class: {
          root: [
            "bg-yellow-600",
            "text-white",
            "hover:bg-yellow-600/90",
            "focus:ring-yellow-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "yellow",
        class: {
          root: ["border-yellow-500", "text-yellow-600", "hover:bg-yellow-50"],
        },
      },
      {
        surface: "secondary",
        color: "yellow",
        class: {
          root: ["bg-yellow-100", "text-yellow-700", "hover:bg-yellow-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "yellow",
        class: {
          root: ["text-yellow-600", "hover:bg-yellow-50"],
        },
      },
      {
        surface: "link",
        color: "yellow",
        class: {
          root: ["text-yellow-600", "hover:text-yellow-700"],
        },
      },
      {
        surface: "default",
        color: "green",
        class: {
          root: [
            "bg-green-600",
            "text-white",
            "hover:bg-green-600/90",
            "focus:ring-green-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "green",
        class: {
          root: ["border-green-500", "text-green-600", "hover:bg-green-50"],
        },
      },
      {
        surface: "secondary",
        color: "green",
        class: {
          root: ["bg-green-100", "text-green-700", "hover:bg-green-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "green",
        class: {
          root: ["text-green-600", "hover:bg-green-50"],
        },
      },
      {
        surface: "link",
        color: "green",
        class: {
          root: ["text-green-600", "hover:text-green-700"],
        },
      },
      {
        surface: "default",
        color: "slate",
        class: {
          root: [
            "bg-slate-600",
            "text-white",
            "hover:bg-slate-600/90",
            "focus:ring-slate-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "slate",
        class: {
          root: ["border-slate-500", "text-slate-600", "hover:bg-slate-50"],
        },
      },
      {
        surface: "secondary",
        color: "slate",
        class: {
          root: ["bg-slate-100", "text-slate-700", "hover:bg-slate-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "slate",
        class: {
          root: ["text-slate-600", "hover:bg-slate-50"],
        },
      },
      {
        surface: "link",
        color: "slate",
        class: {
          root: ["text-slate-600", "hover:text-slate-700"],
        },
      },
      {
        surface: "default",
        color: "gray",
        class: {
          root: [
            "bg-gray-600",
            "text-white",
            "hover:bg-gray-600/90",
            "focus:ring-gray-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "gray",
        class: {
          root: ["border-gray-500", "text-gray-600", "hover:bg-gray-50"],
        },
      },
      {
        surface: "secondary",
        color: "gray",
        class: {
          root: ["bg-gray-100", "text-gray-700", "hover:bg-gray-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "gray",
        class: {
          root: ["text-gray-600", "hover:bg-gray-50"],
        },
      },
      {
        surface: "link",
        color: "gray",
        class: {
          root: ["text-gray-600", "hover:text-gray-700"],
        },
      },
      {
        surface: "default",
        color: "neutral",
        class: {
          root: [
            "bg-neutral-800",
            "text-white",
            "hover:bg-neutral-800/90",
            "focus:ring-neutral-800",
          ],
        },
      },
      {
        surface: "outline",
        color: "neutral",
        class: {
          root: [
            "border-neutral-500",
            "text-neutral-600",
            "hover:bg-neutral-50",
          ],
        },
      },
      {
        surface: "secondary",
        color: "neutral",
        class: {
          root: [
            "bg-neutral-100",
            "text-neutral-700",
            "hover:bg-neutral-100/80",
          ],
        },
      },
      {
        surface: "ghost",
        color: "neutral",
        class: {
          root: ["text-neutral-600", "hover:bg-neutral-50"],
        },
      },
      {
        surface: "link",
        color: "neutral",
        class: {
          root: ["text-neutral-600", "hover:text-neutral-700"],
        },
      },
      {
        surface: "default",
        color: "zinc",
        class: {
          root: [
            "bg-zinc-600",
            "text-white",
            "hover:bg-zinc-600/90",
            "focus:ring-zinc-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "zinc",
        class: {
          root: ["border-zinc-500", "text-zinc-600", "hover:bg-zinc-50"],
        },
      },
      {
        surface: "secondary",
        color: "zinc",
        class: {
          root: ["bg-zinc-100", "text-zinc-700", "hover:bg-zinc-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "zinc",
        class: {
          root: ["text-zinc-600", "hover:bg-zinc-50"],
        },
      },
      {
        surface: "link",
        color: "zinc",
        class: {
          root: ["text-zinc-600", "hover:text-zinc-700"],
        },
      },
      {
        surface: "default",
        color: "stone",
        class: {
          root: [
            "bg-stone-600",
            "text-white",
            "hover:bg-stone-600/90",
            "focus:ring-stone-600",
          ],
        },
      },
      {
        surface: "outline",
        color: "stone",
        class: {
          root: ["border-stone-500", "text-stone-600", "hover:bg-stone-50"],
        },
      },
      {
        surface: "secondary",
        color: "stone",
        class: {
          root: ["bg-stone-100", "text-stone-700", "hover:bg-stone-100/80"],
        },
      },
      {
        surface: "ghost",
        color: "stone",
        class: {
          root: ["text-stone-600", "hover:bg-stone-50"],
        },
      },
      {
        surface: "link",
        color: "stone",
        class: {
          root: ["text-stone-600", "hover:text-stone-700"],
        },
      },
    ],
  });
export { fr as button };
