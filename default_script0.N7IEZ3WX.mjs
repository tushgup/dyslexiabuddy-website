import {
  B as a,
  C as _,
  G as F,
  K as E,
  M as b,
  Q as v,
  c as n,
  da as I,
  f as y,
  y as R,
  z as d,
} from "./chunk-J32WCNGW.mjs";
import { c as t } from "./chunk-ELYU6EKT.mjs";
var V = "default" in d ? R : d,
  l = {},
  k = V;
l.createRoot = k.createRoot;
l.hydrateRoot = k.hydrateRoot;
var P = l.createRoot,
  D = l.hydrateRoot;
t.__framer_importFromPackage = (e, c) => () =>
  n(E, {
    error: 'Package component not supported: "' + c + '" in "' + e + '"',
  });
t.process = {
  ...t.process,
  env: { ...(t.process ? t.process.env : void 0), NODE_ENV: "production" },
};
b();
t.__framer_events = t.__framer_events || [];
function O() {
  t.__framer_events.push(arguments);
}
(async () => {
  let e = {
      augiA20Il: {
        elements: { pxCAzEWB_: "testimonials" },
        page: a(() =>
          import("./9b5_op5G1mkQXl1_ZwLYicf8Balky-wKiOhMFij2d04.XOIHIXAT.mjs")
        ),
        path: "/",
      },
      Dk2vrb2eq: {
        elements: {},
        page: a(() =>
          import("./j-Tc7Kust6Qkw8S1w9Oo5V-ShzjQ4frq204Ijuy_Y7A.WZBUPVID.mjs")
        ),
        path: "/404",
      },
      LLMlfY3gK: {
        elements: {},
        page: a(() =>
          import("./gQ58wclbvI7TFuamiwEoH1OsGKzX1_0SGKDxTzm8RiY.QLZ45H3W.mjs")
        ),
        path: "/contact",
      },
      MGcKPPaxc: {
        elements: {},
        page: a(() =>
          import("./EaYEGkOs6yoKr35VbEeHBb_1ywL5F1BOZ5Sz-giCheE.JXCFYX6A.mjs")
        ),
        path: "/privacy",
      },
      RVbGOLllE: {
        elements: {},
        page: a(() =>
          import("./8-usgsflCdqdvcn0LJu64RHjufcABd3S3G3enJBcj5g.IX6U6323.mjs")
        ),
        path: "/about",
      },
      bqeDxNddT: {
        elements: {},
        page: a(() =>
          import("./mUaMX3orYakN17maLrWy0y3F03vz8xxEEv918VpdA_Q.43QEBCJ4.mjs")
        ),
        path: "/blog",
      },
      Z443h2Ync: {
        collectionId: "YYFKklLNh",
        elements: {},
        page: a(() =>
          import("./5Pqc7-nOi-f1uJjja8bkCp7CHxEdqb08iF8sECa34JE.G7DUXLHD.mjs")
        ),
        path: "/blog/:LXPPb0mj_",
      },
    },
    c = {
      YYFKklLNh: async () =>
        (
          await import(
            "./data-module.y_hQUKsKwOdFfiORRPwIG-fy0TmfoGJed9IEXEJwHCU.IOF3BGJD.mjs"
          )
        )?.utils,
    },
    u = [{ code: "en", id: "default", name: "English", slug: "" }],
    N = a(() =>
      import("./j-Tc7Kust6Qkw8S1w9Oo5V-ShzjQ4frq204Ijuy_Y7A.WZBUPVID.mjs")
    ),
    s = document.getElementById("main"),
    o,
    i,
    m,
    p = !1;
  if ("framerHydrateV2" in s.dataset) {
    let r = JSON.parse(s.dataset.framerHydrateV2);
    (o = r.routeId), (i = r.localeId), (m = r.pathVariables), (p = !0);
  } else {
    let r = F(e, decodeURIComponent(location.pathname), !0, u);
    (o = r.routeId), (i = r.localeId), (m = r.pathVariables);
  }
  let f = await e[o].page.preload();
  e[o].page = f;
  let h = !1,
    x = n(I, {
      RootComponent: f,
      isWebsite: !0,
      routeId: o,
      pathVariables: m,
      routes: e,
      collectionUtils: c,
      notFoundPage: N,
      isReducedMotion: !0,
      localeId: i,
      locales: u,
      preserveQueryParams: !0,
      enableImproveInpDuringHydration: h,
      shouldMarkHydrationEnd: p,
    }),
    z = n(v, { children: x, value: { imgSizesWorkaroundEnabled: !1 } }),
    g = n(_, {
      children: z,
      value: {
        global: {
          enter: {
            mask: { angle: 0, type: "wipe", width: "100%" },
            opacity: 1,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.4,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: "tween",
            },
            x: "0px",
            y: "0px",
          },
        },
        routes: {},
      },
    });
  p
    ? y(() => {
        performance.mark("framer-hydration-start"),
          h && t.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__?.(),
          D(s, g);
      })
    : P(s).render(g);
})().catch((e) => {
  throw (
    (O("published_site_load_error", {
      message: String(e),
      stack: e instanceof Error && typeof e.stack == "string" ? e.stack : null,
    }),
    e)
  );
});
//# sourceMappingURL=default_script0.N7IEZ3WX.mjs.map
