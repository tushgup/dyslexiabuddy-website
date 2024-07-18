import {
  D as ve,
  E as K,
  J as Re,
  L as u,
  O as D,
  P as we,
  S as R,
  T as Ne,
  W as oe,
  X as k,
  Z as E,
  b as x,
  ba as $,
  ca as ce,
  d as N,
  fa as fe,
  h as H,
  i as Ae,
  j as O,
  m as Q,
  ma as ke,
  o as F,
  p as Je,
  q as Z,
  qa as z,
  r as P,
  ra as W,
  sa as te,
  t,
  ta as ee,
  u as V,
  va as L,
  w as e,
  wa as J,
  x as b,
  xa as re,
} from "./chunk-J32WCNGW.mjs";
var yr = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
var xr = {
    ...yr,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column",
  },
  He = N((r, a) => e("div", { style: xr, ref: a }));
var Qe,
  Oe = (r) => {
    if (!Qe) {
      let a = r.forwardRef(
        ({ color: o = "currentColor", size: n = 24, ...s }, l) =>
          r.createElement(
            "svg",
            {
              ref: l,
              xmlns: "http://www.w3.org/2000/svg",
              width: n,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: o,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              ...s,
            },
            r.createElement("path", {
              d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            }),
            r.createElement("polyline", { points: "9 22 9 12 15 12 15 22" })
          )
      );
      (a.displayName = "Home"), (Qe = a);
    }
    return Qe;
  };
var Ve = {
    onClick: { type: u.EventHandler },
    onMouseDown: { type: u.EventHandler },
    onMouseUp: { type: u.EventHandler },
    onMouseEnter: { type: u.EventHandler },
    onMouseLeave: { type: u.EventHandler },
  },
  br = (r, a) => r.find((o) => o.toLowerCase().includes(a));
function Ke(r, a, o = "", n, s) {
  let l = Q(() => {
    if (o == null || o?.length === 0) return null;
    let c = o.toLowerCase().replace(/-|\s/g, "");
    var m;
    return (m = s[c]) !== null && m !== void 0 ? m : br(r, c);
  }, [n, o]);
  return a ? n : l;
}
var je = [
    "activity",
    "airplay",
    "alert-circle",
    "alert-octagon",
    "alert-triangle",
    "align-center",
    "align-justify",
    "align-left",
    "align-right",
    "anchor",
    "aperture",
    "archive",
    "arrow-down",
    "arrow-down-circle",
    "arrow-down-left",
    "arrow-down-right",
    "arrow-left",
    "arrow-left-circle",
    "arrow-right",
    "arrow-right-circle",
    "arrow-up",
    "arrow-up-circle",
    "arrow-up-left",
    "arrow-up-right",
    "at-sign",
    "award",
    "bar-chart",
    "bar-chart-2",
    "battery",
    "battery-charging",
    "bell",
    "bell-off",
    "bluetooth",
    "bold",
    "book",
    "book-open",
    "bookmark",
    "box",
    "briefcase",
    "calendar",
    "camera",
    "camera-off",
    "cast",
    "check",
    "check-circle",
    "check-square",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "chevrons-down",
    "chevrons-left",
    "chevrons-right",
    "chevrons-up",
    "chrome",
    "circle",
    "clipboard",
    "clock",
    "cloud",
    "cloud-drizzle",
    "cloud-lightning",
    "cloud-off",
    "cloud-rain",
    "cloud-snow",
    "code",
    "codepen",
    "codesandbox",
    "coffee",
    "columns",
    "command",
    "compass",
    "copy",
    "corner-down-left",
    "corner-down-right",
    "corner-left-down",
    "corner-left-up",
    "corner-right-down",
    "corner-right-up",
    "corner-up-left",
    "corner-up-right",
    "cpu",
    "credit-card",
    "crop",
    "crosshair",
    "database",
    "delete",
    "disc",
    "divide",
    "divide-circle",
    "divide-square",
    "dollar-sign",
    "download",
    "download-cloud",
    "dribbble",
    "droplet",
    "edit",
    "edit-2",
    "edit-3",
    "external-link",
    "eye",
    "eye-off",
    "facebook",
    "fast-forward",
    "feather",
    "figma",
    "file",
    "file-minus",
    "file-plus",
    "file-text",
    "film",
    "filter",
    "flag",
    "folder",
    "folder-minus",
    "folder-plus",
    "framer",
    "frown",
    "gift",
    "git-branch",
    "git-commit",
    "git-merge",
    "git-pull-request",
    "github",
    "gitlab",
    "globe",
    "grid",
    "hard-drive",
    "hash",
    "headphones",
    "heart",
    "help-circle",
    "hexagon",
    "home",
    "image",
    "inbox",
    "info",
    "instagram",
    "italic",
    "key",
    "layers",
    "layout",
    "life-buoy",
    "link",
    "link-2",
    "linkedin",
    "list",
    "loader",
    "lock",
    "log-in",
    "log-out",
    "mail",
    "map",
    "map-pin",
    "maximize",
    "maximize-2",
    "meh",
    "menu",
    "message-circle",
    "message-square",
    "mic",
    "mic-off",
    "minimize",
    "minimize-2",
    "minus",
    "minus-circle",
    "minus-square",
    "monitor",
    "moon",
    "more-horizontal",
    "more-vertical",
    "mouse-pointer",
    "move",
    "music",
    "navigation",
    "navigation-2",
    "octagon",
    "package",
    "paperclip",
    "pause",
    "pause-circle",
    "pen-tool",
    "percent",
    "phone",
    "phone-call",
    "phone-forwarded",
    "phone-incoming",
    "phone-missed",
    "phone-off",
    "phone-outgoing",
    "pie-chart",
    "play",
    "play-circle",
    "plus",
    "plus-circle",
    "plus-square",
    "pocket",
    "power",
    "printer",
    "radio",
    "refresh-ccw",
    "refresh-cw",
    "repeat",
    "rewind",
    "rotate-ccw",
    "rotate-cw",
    "rss",
    "save",
    "scissors",
    "search",
    "send",
    "server",
    "settings",
    "share",
    "share-2",
    "shield",
    "shield-off",
    "shopping-bag",
    "shopping-cart",
    "shuffle",
    "sidebar",
    "skip-back",
    "skip-forward",
    "slack",
    "slash",
    "sliders",
    "smartphone",
    "smile",
    "speaker",
    "square",
    "star",
    "stop-circle",
    "sun",
    "sunrise",
    "sunset",
    "tablet",
    "tag",
    "target",
    "terminal",
    "thermometer",
    "thumbs-down",
    "thumbs-up",
    "toggle-left",
    "toggle-right",
    "tool",
    "trash",
    "trash-2",
    "trello",
    "trending-down",
    "trending-up",
    "triangle",
    "truck",
    "tv",
    "twitch",
    "twitter",
    "type",
    "umbrella",
    "underline",
    "unlock",
    "upload",
    "upload-cloud",
    "user",
    "user-check",
    "user-minus",
    "user-plus",
    "user-x",
    "users",
    "video",
    "video-off",
    "voicemail",
    "volume",
    "volume-1",
    "volume-2",
    "volume-x",
    "watch",
    "wifi",
    "wifi-off",
    "wind",
    "x",
    "x-circle",
    "x-octagon",
    "x-square",
    "youtube",
    "zap",
    "zap-off",
    "zoom-in",
    "zoom-out",
  ],
  vr = "https://framer.com/m/feather-icons/",
  wr = je.map((r) => r.charAt(0).toUpperCase() + r.slice(1)),
  kr = je.reduce((r, a) => ((r[a.toLowerCase()] = a), r), {});
function M(r) {
  let {
      color: a,
      selectByList: o,
      iconSearch: n,
      iconSelection: s,
      onClick: l,
      onMouseDown: f,
      onMouseUp: c,
      onMouseEnter: m,
      onMouseLeave: _,
      mirrored: d,
    } = r,
    v = F(!1),
    p = Ke(je, o, n, s, kr),
    [h, g] = Je(p === "Home" ? Oe(Z) : null);
  async function w() {
    let I = !0;
    try {
      let C = await import(`${vr}${p}.js@0.0.29`);
      I && g(C.default(Z));
    } catch (S) {
      console.log(S), I && g(null);
    }
    return () => {
      I = !1;
    };
  }
  Ae(() => {
    w();
  }, [p]);
  let j = Re.current() === Re.canvas ? e(He, {}) : null;
  return e("div", {
    style: { display: "contents" },
    onClick: l,
    onMouseEnter: m,
    onMouseLeave: _,
    onMouseDown: f,
    onMouseUp: c,
    children: h
      ? e(h, {
          style: {
            width: "100%",
            height: "100%",
            transform: d ? "scale(-1, 1)" : void 0,
          },
          color: a,
        })
      : j,
  });
}
M.displayName = "Feather";
M.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: !0,
  mirrored: !1,
};
D(M, {
  selectByList: {
    type: u.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: M.defaultProps.selectByList,
  },
  iconSelection: {
    type: u.Enum,
    options: je,
    optionTitles: wr,
    defaultValue: M.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: r }) => !r,
    description:
      "Find every icon name on the [Feather site](https://feathericons.com/)",
  },
  iconSearch: {
    type: u.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: r }) => r,
  },
  mirrored: {
    type: u.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: M.defaultProps.mirrored,
  },
  color: { type: u.Color, title: "Color", defaultValue: M.defaultProps.color },
  ...Ve,
});
W.loadWebFontsFromSelectors([
  "GF;Plus Jakarta Sans-600",
  "GF;Plus Jakarta Sans-700",
  "GF;Plus Jakarta Sans-700italic",
  "GF;Plus Jakarta Sans-600italic",
]);
var Ce = [
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/jU2CgCQbX:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
      weight: "600",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/jU2CgCQbX:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/jU2CgCQbX:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/jU2CgCQbX:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ37Dh_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ37Dh_VMq2oR82k.woff2",
      weight: "600",
    },
  ],
  Pe = [
    '.framer-RiNAI .framer-styles-preset-qfaott:not(.rich-text-wrapper), .framer-RiNAI .framer-styles-preset-qfaott.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.7em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, #080a47); --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  _e = "framer-RiNAI";
var jr = J(M),
  Se = we(M),
  Cr = {
    eG9ObCzhW: { hover: !0 },
    eIloA3S6a: { hover: !0 },
    ElIljymjM: { hover: !0 },
    isqPGXpGS: { hover: !0 },
    NcUvPco3S: { hover: !0 },
    TOHiJRM5K: { hover: !0 },
  },
  Pr = [
    "eIloA3S6a",
    "eG9ObCzhW",
    "NcUvPco3S",
    "ElIljymjM",
    "isqPGXpGS",
    "TOHiJRM5K",
  ],
  _r = "framer-HJpPl",
  Sr = {
    eG9ObCzhW: "framer-v-o76pa4",
    eIloA3S6a: "framer-v-od4ajd",
    ElIljymjM: "framer-v-1fcsyjm",
    isqPGXpGS: "framer-v-jby1bt",
    NcUvPco3S: "framer-v-4xairv",
    TOHiJRM5K: "framer-v-1ob4n5l",
  };
function Ie(r, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, r[n])), o;
}
var Ir = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Mr = ({ value: r, children: a }) => {
    let o = H(P),
      n = r ?? o.transition,
      s = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: a });
  },
  Rr = t(x),
  Nr = {
    "Alert-circle": "alert-circle",
    "Alert-octagon": "alert-octagon",
    "Alert-triangle": "alert-triangle",
    "Align-center": "align-center",
    "Align-justify": "align-justify",
    "Align-left": "align-left",
    "Align-right": "align-right",
    "Arrow-down-circle": "arrow-down-circle",
    "Arrow-down-left": "arrow-down-left",
    "Arrow-down-right": "arrow-down-right",
    "Arrow-down": "arrow-down",
    "Arrow-left-circle": "arrow-left-circle",
    "Arrow-left": "arrow-left",
    "Arrow-right-circle": "arrow-right-circle",
    "Arrow-right": "arrow-right",
    "Arrow-up-circle": "arrow-up-circle",
    "Arrow-up-left": "arrow-up-left",
    "Arrow-up-right": "arrow-up-right",
    "Arrow-up": "arrow-up",
    "At-sign": "at-sign",
    "Bar-chart-2": "bar-chart-2",
    "Bar-chart": "bar-chart",
    "Battery-charging": "battery-charging",
    "Bell-off": "bell-off",
    "Book-open": "book-open",
    "Camera-off": "camera-off",
    "Check-circle": "check-circle",
    "Check-square": "check-square",
    "Chevron-down": "chevron-down",
    "Chevron-left": "chevron-left",
    "Chevron-right": "chevron-right",
    "Chevron-up": "chevron-up",
    "Chevrons-down": "chevrons-down",
    "Chevrons-left": "chevrons-left",
    "Chevrons-right": "chevrons-right",
    "Chevrons-up": "chevrons-up",
    "Cloud-drizzle": "cloud-drizzle",
    "Cloud-lightning": "cloud-lightning",
    "Cloud-off": "cloud-off",
    "Cloud-rain": "cloud-rain",
    "Cloud-snow": "cloud-snow",
    "Corner-down-left": "corner-down-left",
    "Corner-down-right": "corner-down-right",
    "Corner-left-down": "corner-left-down",
    "Corner-left-up": "corner-left-up",
    "Corner-right-down": "corner-right-down",
    "Corner-right-up": "corner-right-up",
    "Corner-up-left": "corner-up-left",
    "Corner-up-right": "corner-up-right",
    "Credit-card": "credit-card",
    "Divide-circle": "divide-circle",
    "Divide-square": "divide-square",
    "Dollar-sign": "dollar-sign",
    "Download-cloud": "download-cloud",
    "Edit-2": "edit-2",
    "Edit-3": "edit-3",
    "External-link": "external-link",
    "Eye-off": "eye-off",
    "Fast-forward": "fast-forward",
    "File-minus": "file-minus",
    "File-plus": "file-plus",
    "File-text": "file-text",
    "Folder-minus": "folder-minus",
    "Folder-plus": "folder-plus",
    "Git-branch": "git-branch",
    "Git-commit": "git-commit",
    "Git-merge": "git-merge",
    "Git-pull-request": "git-pull-request",
    "Hard-drive": "hard-drive",
    "Help-circle": "help-circle",
    "Life-buoy": "life-buoy",
    "Link-2": "link-2",
    "Log-in": "log-in",
    "Log-out": "log-out",
    "Map-pin": "map-pin",
    "Maximize-2": "maximize-2",
    "Message-circle": "message-circle",
    "Message-square": "message-square",
    "Mic-off": "mic-off",
    "Minimize-2": "minimize-2",
    "Minus-circle": "minus-circle",
    "Minus-square": "minus-square",
    "More-horizontal": "more-horizontal",
    "More-vertical": "more-vertical",
    "Mouse-pointer": "mouse-pointer",
    "Navigation-2": "navigation-2",
    "Pause-circle": "pause-circle",
    "Pen-tool": "pen-tool",
    "Phone-call": "phone-call",
    "Phone-forwarded": "phone-forwarded",
    "Phone-incoming": "phone-incoming",
    "Phone-missed": "phone-missed",
    "Phone-off": "phone-off",
    "Phone-outgoing": "phone-outgoing",
    "Pie-chart": "pie-chart",
    "Play-circle": "play-circle",
    "Plus-circle": "plus-circle",
    "Plus-square": "plus-square",
    "Refresh-ccw": "refresh-ccw",
    "Refresh-cw": "refresh-cw",
    "Rotate-ccw": "rotate-ccw",
    "Rotate-cw": "rotate-cw",
    "Share-2": "share-2",
    "Shield-off": "shield-off",
    "Shopping-bag": "shopping-bag",
    "Shopping-cart": "shopping-cart",
    "Skip-back": "skip-back",
    "Skip-forward": "skip-forward",
    "Stop-circle": "stop-circle",
    "Thumbs-down": "thumbs-down",
    "Thumbs-up": "thumbs-up",
    "Toggle-left": "toggle-left",
    "Toggle-right": "toggle-right",
    "Trash-2": "trash-2",
    "Trending-down": "trending-down",
    "Trending-up": "trending-up",
    "Upload-cloud": "upload-cloud",
    "User-check": "user-check",
    "User-minus": "user-minus",
    "User-plus": "user-plus",
    "User-x": "user-x",
    "Video-off": "video-off",
    "Volume-1": "volume-1",
    "Volume-2": "volume-2",
    "Volume-x": "volume-x",
    "Wifi-off": "wifi-off",
    "X-circle": "x-circle",
    "X-octagon": "x-octagon",
    "X-square": "x-square",
    "Zap-off": "zap-off",
    "Zoom-in": "zoom-in",
    "Zoom-out": "zoom-out",
    Activity: "activity",
    Airplay: "airplay",
    Anchor: "anchor",
    Aperture: "aperture",
    Archive: "archive",
    Award: "award",
    Battery: "battery",
    Bell: "bell",
    Bluetooth: "bluetooth",
    Bold: "bold",
    Book: "book",
    Bookmark: "bookmark",
    Box: "box",
    Briefcase: "briefcase",
    Calendar: "calendar",
    Camera: "camera",
    Cast: "cast",
    Check: "check",
    Chrome: "chrome",
    Circle: "circle",
    Clipboard: "clipboard",
    Clock: "clock",
    Cloud: "cloud",
    Code: "code",
    Codepen: "codepen",
    Codesandbox: "codesandbox",
    Coffee: "coffee",
    Columns: "columns",
    Command: "command",
    Compass: "compass",
    Copy: "copy",
    Cpu: "cpu",
    Crop: "crop",
    Crosshair: "crosshair",
    Database: "database",
    Delete: "delete",
    Disc: "disc",
    Divide: "divide",
    Download: "download",
    Dribbble: "dribbble",
    Droplet: "droplet",
    Edit: "edit",
    Eye: "eye",
    Facebook: "facebook",
    Feather: "feather",
    Figma: "figma",
    File: "file",
    Film: "film",
    Filter: "filter",
    Flag: "flag",
    Folder: "folder",
    Framer: "framer",
    Frown: "frown",
    Gift: "gift",
    Github: "github",
    Gitlab: "gitlab",
    Globe: "globe",
    Grid: "grid",
    Hash: "hash",
    Headphones: "headphones",
    Heart: "heart",
    Hexagon: "hexagon",
    Home: "home",
    Image: "image",
    Inbox: "inbox",
    Info: "info",
    Instagram: "instagram",
    Italic: "italic",
    Key: "key",
    Layers: "layers",
    Layout: "layout",
    Link: "link",
    Linkedin: "linkedin",
    List: "list",
    Loader: "loader",
    Lock: "lock",
    Mail: "mail",
    Map: "map",
    Maximize: "maximize",
    Meh: "meh",
    Menu: "menu",
    Mic: "mic",
    Minimize: "minimize",
    Minus: "minus",
    Monitor: "monitor",
    Moon: "moon",
    Move: "move",
    Music: "music",
    Navigation: "navigation",
    Octagon: "octagon",
    Package: "package",
    Paperclip: "paperclip",
    Pause: "pause",
    Percent: "percent",
    Phone: "phone",
    Play: "play",
    Plus: "plus",
    Pocket: "pocket",
    Power: "power",
    Printer: "printer",
    Radio: "radio",
    Repeat: "repeat",
    Rewind: "rewind",
    Rss: "rss",
    Save: "save",
    Scissors: "scissors",
    Search: "search",
    Send: "send",
    Server: "server",
    Settings: "settings",
    Share: "share",
    Shield: "shield",
    Shuffle: "shuffle",
    Sidebar: "sidebar",
    Slack: "slack",
    Slash: "slash",
    Sliders: "sliders",
    Smartphone: "smartphone",
    Smile: "smile",
    Speaker: "speaker",
    Square: "square",
    Star: "star",
    Sun: "sun",
    Sunrise: "sunrise",
    Sunset: "sunset",
    Tablet: "tablet",
    Tag: "tag",
    Target: "target",
    Terminal: "terminal",
    Thermometer: "thermometer",
    Tool: "tool",
    Trash: "trash",
    Trello: "trello",
    Triangle: "triangle",
    Truck: "truck",
    Tv: "tv",
    Twitch: "twitch",
    Twitter: "twitter",
    Type: "type",
    Umbrella: "umbrella",
    Underline: "underline",
    Unlock: "unlock",
    Upload: "upload",
    User: "user",
    Users: "users",
    Video: "video",
    Voicemail: "voicemail",
    Volume: "volume",
    Watch: "watch",
    Wifi: "wifi",
    Wind: "wind",
    X: "x",
    Youtube: "youtube",
    Zap: "zap",
  },
  Qr = {
    "Faq button": "TOHiJRM5K",
    "Header Button Primary": "eIloA3S6a",
    "Header Button Secondary": "eG9ObCzhW",
    "Pricing button 2": "isqPGXpGS",
    "Pricing button": "ElIljymjM",
    Primary: "NcUvPco3S",
  },
  Fr = ({
    height: r,
    iconName: a,
    iconVisibility: o,
    id: n,
    link: s,
    title: l,
    width: f,
    ...c
  }) => {
    var m, _, d, v, p, h, g;
    return {
      ...c,
      BlJNMfRrN: (m = o ?? c.BlJNMfRrN) !== null && m !== void 0 ? m : !0,
      fzPQj5vxM: s ?? c.fzPQj5vxM,
      qWQ35JEj6:
        (_ = l ?? c.qWQ35JEj6) !== null && _ !== void 0
          ? _
          : "Request Free Demo",
      variant:
        (v = (d = Qr[c.variant]) !== null && d !== void 0 ? d : c.variant) !==
          null && v !== void 0
          ? v
          : "eIloA3S6a",
      yWCCtolhs:
        (g =
          (h = (p = Nr[a]) !== null && p !== void 0 ? p : a) !== null &&
          h !== void 0
            ? h
            : c.yWCCtolhs) !== null && g !== void 0
          ? g
          : "phone",
    };
  },
  Dr = (r, a) => a.join("-") + r.layoutDependency,
  qr = N(function (r, a) {
    let { activeLocale: o, setLocale: n } = K(),
      {
        style: s,
        className: l,
        layoutId: f,
        variant: c,
        qWQ35JEj6: m,
        yWCCtolhs: _,
        BlJNMfRrN: d,
        fzPQj5vxM: v,
        v8ArQOg02a4HJ5WB9q: p,
        ...h
      } = Fr(r),
      {
        baseVariant: g,
        classNames: w,
        gestureVariant: i,
        setGestureState: j,
        setVariant: I,
        variants: S,
      } = z({
        cycleOrder: Pr,
        defaultVariant: "eIloA3S6a",
        enabledGestures: Cr,
        variant: c,
        variantClassNames: Sr,
      }),
      C = Dr(r, S),
      ae = F(null),
      ne = () => !(i === "TOHiJRM5K-hover" || g === "TOHiJRM5K"),
      B = O(),
      ie = [_e],
      Y = oe();
    return e(V, {
      id: f ?? B,
      children: e(Rr, {
        animate: S,
        initial: !1,
        children: e(Mr, {
          value: Ir,
          children: e($, {
            href: v,
            openInNewTab: !0,
            smoothScroll: p,
            children: b(t.a, {
              ...h,
              className: `${R(_r, ...ie, "framer-od4ajd", l, w)} framer-pqufg`,
              "data-border": !0,
              "data-framer-name": "Header Button Primary",
              layoutDependency: C,
              layoutId: "eIloA3S6a",
              onHoverEnd: () => j({ isHovered: !1 }),
              onHoverStart: () => j({ isHovered: !0 }),
              onTap: () => j({ isPressed: !1 }),
              onTapCancel: () => j({ isPressed: !1 }),
              onTapStart: () => j({ isPressed: !0 }),
              ref: a ?? ae,
              style: {
                "--border-bottom-width": "1.5px",
                "--border-color":
                  "var(--token-816d16c6-7a71-41f0-a75c-1f0f7e579a85, rgb(62, 63, 89))",
                "--border-left-width": "1.5px",
                "--border-right-width": "1.5px",
                "--border-style": "solid",
                "--border-top-width": "1.5px",
                borderBottomLeftRadius: 58,
                borderBottomRightRadius: 58,
                borderTopLeftRadius: 58,
                borderTopRightRadius: 58,
                ...s,
              },
              variants: {
                "eG9ObCzhW-hover": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
                "eIloA3S6a-hover": {
                  "--border-color": "rgba(250, 250, 252, 0)",
                },
                "ElIljymjM-hover": { "--border-color": "rgba(62, 63, 89, 0)" },
                "isqPGXpGS-hover": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                },
                "NcUvPco3S-hover": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                },
                "TOHiJRM5K-hover": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                },
                eG9ObCzhW: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
                isqPGXpGS: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                },
                NcUvPco3S: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                },
                TOHiJRM5K: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                },
              },
              ...Ie(
                {
                  "eG9ObCzhW-hover": { "data-framer-name": void 0 },
                  "eIloA3S6a-hover": { "data-framer-name": void 0 },
                  "ElIljymjM-hover": { "data-framer-name": void 0 },
                  "isqPGXpGS-hover": { "data-framer-name": void 0 },
                  "NcUvPco3S-hover": { "data-framer-name": void 0 },
                  "TOHiJRM5K-hover": { "data-framer-name": void 0 },
                  eG9ObCzhW: { "data-framer-name": "Header Button Secondary" },
                  ElIljymjM: { "data-framer-name": "Pricing button" },
                  isqPGXpGS: { "data-framer-name": "Pricing button 2" },
                  NcUvPco3S: { "data-framer-name": "Primary" },
                  TOHiJRM5K: { "data-framer-name": "Faq button" },
                },
                g,
                i
              ),
              children: [
                b(t.div, {
                  className: "framer-6j8cby",
                  layoutDependency: C,
                  layoutId: "LF0qZPhGD",
                  style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                  variants: {
                    isqPGXpGS: {
                      backgroundColor:
                        "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                    },
                    NcUvPco3S: {
                      backgroundColor:
                        "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                    },
                    TOHiJRM5K: {
                      backgroundColor:
                        "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                    },
                  },
                  children: [
                    d &&
                      e(te, {
                        className: "framer-1t3xdxa",
                        "data-framer-name": "icon bg",
                        layoutDependency: C,
                        layoutId: "dKnxNejFY",
                        ...Ie(
                          {
                            TOHiJRM5K: {
                              background: {
                                alt: "",
                                fit: "fit",
                                intrinsicHeight: 20,
                                intrinsicWidth: 20,
                                pixelHeight: 20,
                                pixelWidth: 20,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/nCLVPIuCQpUKf13g4kgYUWUcVc.svg",
                              },
                            },
                          },
                          g,
                          i
                        ),
                        children:
                          ne() &&
                          e(k, {
                            children: e(t.div, {
                              className: "framer-1n5uik5-container",
                              layoutDependency: C,
                              layoutId: "Od8s6vpeY-container",
                              children: e(M, {
                                color:
                                  "var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71))",
                                height: "100%",
                                iconSearch: "Home",
                                iconSelection: _,
                                id: "Od8s6vpeY",
                                layoutId: "Od8s6vpeY",
                                mirrored: !1,
                                selectByList: !0,
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                                ...Ie(
                                  {
                                    "eIloA3S6a-hover": {
                                      color:
                                        "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                                    },
                                    "ElIljymjM-hover": {
                                      color:
                                        "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                                    },
                                    isqPGXpGS: {
                                      color:
                                        "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                                    },
                                    NcUvPco3S: {
                                      color:
                                        "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                                    },
                                  },
                                  g,
                                  i
                                ),
                              }),
                            }),
                          }),
                      }),
                    e(t.div, {
                      className: "framer-12lgzbw",
                      "data-framer-name": "Text",
                      layoutDependency: C,
                      layoutId: "rSlmO_U6D",
                      children: e(ee, {
                        __fromCanvasComponent: !0,
                        children: e(x, {
                          children: e(t.p, {
                            className: "framer-styles-preset-qfaott",
                            "data-styles-preset": "jU2CgCQbX",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                            },
                            children: "Call for free visiting",
                          }),
                        }),
                        className: "framer-h36qv7",
                        "data-framer-name": "Text",
                        fonts: ["Inter"],
                        layoutDependency: C,
                        layoutId: "fxsFBpnTd",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71))",
                        },
                        text: m,
                        variants: {
                          "eG9ObCzhW-hover": {
                            "--extracted-r6o4lv":
                              "var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212))",
                          },
                          "eIloA3S6a-hover": {
                            "--extracted-r6o4lv":
                              "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                          },
                          "ElIljymjM-hover": {
                            "--extracted-r6o4lv":
                              "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                          },
                          isqPGXpGS: {
                            "--extracted-r6o4lv":
                              "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                          },
                          NcUvPco3S: {
                            "--extracted-r6o4lv":
                              "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                          },
                          TOHiJRM5K: {
                            "--extracted-r6o4lv":
                              "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                          },
                        },
                        verticalAlignment: "center",
                        withExternalLayout: !0,
                        ...Ie(
                          {
                            "eG9ObCzhW-hover": {
                              children: e(x, {
                                children: e(t.p, {
                                  className: "framer-styles-preset-qfaott",
                                  "data-styles-preset": "jU2CgCQbX",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212)))",
                                  },
                                  children: "Call for free visiting",
                                }),
                              }),
                            },
                            "eIloA3S6a-hover": {
                              children: e(x, {
                                children: e(t.p, {
                                  className: "framer-styles-preset-qfaott",
                                  "data-styles-preset": "jU2CgCQbX",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255)))",
                                  },
                                  children: "Call for free visiting",
                                }),
                              }),
                            },
                            "ElIljymjM-hover": {
                              children: e(x, {
                                children: e(t.p, {
                                  className: "framer-styles-preset-qfaott",
                                  "data-styles-preset": "jU2CgCQbX",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255)))",
                                  },
                                  children: "Call for free visiting",
                                }),
                              }),
                            },
                            isqPGXpGS: {
                              children: e(x, {
                                children: e(t.p, {
                                  className: "framer-styles-preset-qfaott",
                                  "data-styles-preset": "jU2CgCQbX",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255)))",
                                  },
                                  children: "Call for free visiting",
                                }),
                              }),
                            },
                            NcUvPco3S: {
                              children: e(x, {
                                children: e(t.p, {
                                  className: "framer-styles-preset-qfaott",
                                  "data-styles-preset": "jU2CgCQbX",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255)))",
                                  },
                                  children: "Call for free visiting",
                                }),
                              }),
                            },
                            TOHiJRM5K: {
                              children: e(x, {
                                children: e(t.p, {
                                  className: "framer-styles-preset-qfaott",
                                  "data-styles-preset": "jU2CgCQbX",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255)))",
                                  },
                                  children: "Call for free visiting",
                                }),
                              }),
                            },
                          },
                          g,
                          i
                        ),
                      }),
                    }),
                  ],
                }),
                e(t.div, {
                  className: "framer-1v2qcj5",
                  "data-framer-name": "Hover Fill",
                  layoutDependency: C,
                  layoutId: "WRbAMZJuX",
                  style: {
                    backgroundColor:
                      "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                    borderBottomLeftRadius: 500,
                    borderBottomRightRadius: 500,
                    borderTopLeftRadius: 500,
                    borderTopRightRadius: 500,
                  },
                  variants: {
                    "NcUvPco3S-hover": {
                      backgroundColor:
                        "var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212))",
                    },
                    isqPGXpGS: {
                      backgroundColor:
                        "var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212))",
                    },
                    TOHiJRM5K: {
                      backgroundColor:
                        "var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212))",
                    },
                  },
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Ur = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-HJpPl.framer-pqufg, .framer-HJpPl .framer-pqufg { display: block; }",
    ".framer-HJpPl.framer-od4ajd { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-HJpPl .framer-6j8cby { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 12px 24px 12px 24px; position: relative; width: min-content; }",
    ".framer-HJpPl .framer-1t3xdxa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 22px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 22px; }",
    ".framer-HJpPl .framer-1n5uik5-container { flex: none; height: 22px; position: relative; width: 22px; z-index: 5; }",
    ".framer-HJpPl .framer-12lgzbw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-HJpPl .framer-h36qv7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 5; }",
    ".framer-HJpPl .framer-1v2qcj5 { bottom: 56px; flex: none; height: 40px; left: -40px; overflow: hidden; position: absolute; width: 40px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HJpPl.framer-od4ajd, .framer-HJpPl .framer-6j8cby, .framer-HJpPl .framer-1t3xdxa, .framer-HJpPl .framer-12lgzbw { gap: 0px; } .framer-HJpPl.framer-od4ajd > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-HJpPl.framer-od4ajd > :first-child, .framer-HJpPl .framer-6j8cby > :first-child, .framer-HJpPl .framer-1t3xdxa > :first-child, .framer-HJpPl .framer-12lgzbw > :first-child { margin-left: 0px; } .framer-HJpPl.framer-od4ajd > :last-child, .framer-HJpPl .framer-6j8cby > :last-child, .framer-HJpPl .framer-1t3xdxa > :last-child, .framer-HJpPl .framer-12lgzbw > :last-child { margin-right: 0px; } .framer-HJpPl .framer-6j8cby > *, .framer-HJpPl .framer-1t3xdxa > *, .framer-HJpPl .framer-12lgzbw > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-HJpPl.framer-v-o76pa4 .framer-6j8cby { padding: 0px 0px 0px 0px; }",
    ".framer-HJpPl.framer-v-4xairv .framer-6j8cby, .framer-HJpPl.framer-v-1fcsyjm .framer-6j8cby { padding: 15px 30px 15px 30px; }",
    ".framer-HJpPl.framer-v-jby1bt.framer-od4ajd { width: 257px; }",
    ".framer-HJpPl.framer-v-jby1bt .framer-6j8cby { flex: 1 0 0px; padding: 15px 30px 15px 30px; width: 1px; }",
    ".framer-HJpPl.framer-v-1ob4n5l .framer-6j8cby { gap: 8px; padding: 14px 20px 14px 20px; }",
    ".framer-HJpPl.framer-v-1ob4n5l .framer-1t3xdxa { height: 20px; width: 20px; z-index: 2; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HJpPl.framer-v-1ob4n5l .framer-6j8cby { gap: 0px; } .framer-HJpPl.framer-v-1ob4n5l .framer-6j8cby > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-HJpPl.framer-v-1ob4n5l .framer-6j8cby > :first-child { margin-left: 0px; } .framer-HJpPl.framer-v-1ob4n5l .framer-6j8cby > :last-child { margin-right: 0px; } }",
    ".framer-HJpPl.framer-v-od4ajd.hover .framer-1v2qcj5, .framer-HJpPl.framer-v-4xairv.hover .framer-1v2qcj5, .framer-HJpPl.framer-v-1fcsyjm.hover .framer-1v2qcj5, .framer-HJpPl.framer-v-jby1bt.hover .framer-1v2qcj5, .framer-HJpPl.framer-v-1ob4n5l.hover .framer-1v2qcj5 { bottom: -65px; height: unset; left: -65px; right: -65px; top: -65px; width: unset; }",
    ...Pe,
    '.framer-HJpPl[data-border="true"]::after, .framer-HJpPl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  me = E(qr, Ur, "framer-HJpPl"),
  se = me;
me.displayName = "Button";
me.defaultProps = { height: 54, width: 250 };
D(me, {
  variant: {
    options: [
      "eIloA3S6a",
      "eG9ObCzhW",
      "NcUvPco3S",
      "ElIljymjM",
      "isqPGXpGS",
      "TOHiJRM5K",
    ],
    optionTitles: [
      "Header Button Primary",
      "Header Button Secondary",
      "Primary",
      "Pricing button",
      "Pricing button 2",
      "Faq button",
    ],
    title: "Variant",
    type: u.Enum,
  },
  qWQ35JEj6: {
    defaultValue: "Request Free Demo",
    displayTextArea: !1,
    title: "Title",
    type: u.String,
  },
  yWCCtolhs: Se?.iconSelection && {
    ...Se.iconSelection,
    defaultValue: "phone",
    description: void 0,
    hidden: void 0,
    title: "Icon Name",
  },
  BlJNMfRrN: { defaultValue: !0, title: "Icon Visibility", type: u.Boolean },
  fzPQj5vxM: { title: "Link", type: u.Link },
});
L(
  me,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...jr,
    ...re(Ce),
  ],
  { supportsExplicitInterCodegen: !0 }
);
W.loadWebFontsFromSelectors([
  "GF;Plus Jakarta Sans-regular",
  "GF;Plus Jakarta Sans-700",
  "GF;Plus Jakarta Sans-700italic",
  "GF;Plus Jakarta Sans-italic",
]);
var ze = [
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/htqHw00bf:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
      weight: "400",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/htqHw00bf:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/htqHw00bf:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/htqHw00bf:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0lCR_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0lCR_VMq2oR82k.woff2",
      weight: "400",
    },
  ],
  Le = [
    '.framer-UaG1c .framer-styles-preset-x0fmvw:not(.rich-text-wrapper), .framer-UaG1c .framer-styles-preset-x0fmvw.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.7em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, #080a47); --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  Te = "framer-UaG1c";
W.loadWebFontsFromSelectors([
  "GF;Plus Jakarta Sans-regular",
  "GF;Plus Jakarta Sans-700",
  "GF;Plus Jakarta Sans-700italic",
  "GF;Plus Jakarta Sans-italic",
]);
var Xe = [
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/HwAOSDL_O:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
      weight: "400",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/HwAOSDL_O:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/HwAOSDL_O:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/HwAOSDL_O:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0lCR_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0lCR_VMq2oR82k.woff2",
      weight: "400",
    },
  ],
  Ge = [
    '.framer-ynzL5 .framer-styles-preset-1ozcjd2:not(.rich-text-wrapper), .framer-ynzL5 .framer-styles-preset-1ozcjd2.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.7em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, #080a47); --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  We = "framer-ynzL5";
W.loadWebFontsFromSelectors([
  "GF;Plus Jakarta Sans-600",
  "GF;Plus Jakarta Sans-700",
  "GF;Plus Jakarta Sans-700italic",
  "GF;Plus Jakarta Sans-600italic",
]);
var Ze = [
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/p9qDDwZqD:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
      weight: "600",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/p9qDDwZqD:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/p9qDDwZqD:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/p9qDDwZqD:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ37Dh_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ37Dh_VMq2oR82k.woff2",
      weight: "600",
    },
  ],
  Be = [
    '.framer-6HH00 .framer-styles-preset-qxnr2d:not(.rich-text-wrapper), .framer-6HH00 .framer-styles-preset-qxnr2d.rich-text-wrapper h2 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -1.5px; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, #080a47); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1439px) and (min-width: 992px) { .framer-6HH00 .framer-styles-preset-qxnr2d:not(.rich-text-wrapper), .framer-6HH00 .framer-styles-preset-qxnr2d.rich-text-wrapper h2 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -1.5px; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, #080a47); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 991px) and (min-width: 768px) { .framer-6HH00 .framer-styles-preset-qxnr2d:not(.rich-text-wrapper), .framer-6HH00 .framer-styles-preset-qxnr2d.rich-text-wrapper h2 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -1.5px; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, #080a47); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 767px) and (min-width: 0px) { .framer-6HH00 .framer-styles-preset-qxnr2d:not(.rich-text-wrapper), .framer-6HH00 .framer-styles-preset-qxnr2d.rich-text-wrapper h2 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -1.5px; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, #080a47); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  Ye = "framer-6HH00";
W.loadWebFontsFromSelectors([
  "GF;Plus Jakarta Sans-regular",
  "GF;Plus Jakarta Sans-700",
  "GF;Plus Jakarta Sans-700italic",
  "GF;Plus Jakarta Sans-italic",
]);
var $e = [
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/M0DsUeVlb:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
      weight: "400",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/M0DsUeVlb:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/M0DsUeVlb:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/M0DsUeVlb:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0lCR_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0lCR_VMq2oR82k.woff2",
      weight: "400",
    },
  ],
  er = [
    '.framer-OGOd7 .framer-styles-preset-l2n6uu:not(.rich-text-wrapper), .framer-OGOd7 .framer-styles-preset-l2n6uu.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.7em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, #080a47); --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  rr = "framer-OGOd7";
W.loadWebFontsFromSelectors([
  "GF;Plus Jakarta Sans-600",
  "GF;Plus Jakarta Sans-700",
  "GF;Plus Jakarta Sans-700italic",
  "GF;Plus Jakarta Sans-600italic",
]);
var ar = [
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/DAuuhRhwt:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
      weight: "600",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/DAuuhRhwt:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/DAuuhRhwt:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/DAuuhRhwt:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ37Dh_VMq2oR82k.woff2",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ37Dh_VMq2oR82k.woff2",
      weight: "600",
    },
  ],
  tr = [
    '.framer-B081X .framer-styles-preset-mq0gjf:not(.rich-text-wrapper), .framer-B081X .framer-styles-preset-mq0gjf.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.47em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, #080a47); --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  or = "framer-B081X";
var Kr = J(M),
  Fe = we(M),
  Er = { vXgQVLNfi: { hover: !0 } },
  zr = ["vXgQVLNfi"];
var Lr = { vXgQVLNfi: "framer-v-1tes2os" };
function nr(r, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, r[n])), o;
}
var Tr = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Xr = ({ value: r, children: a }) => {
    let o = H(P),
      n = r ?? o.transition,
      s = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: a });
  },
  Gr = ({
    height: r,
    hoverBG: a,
    id: o,
    link: n,
    name1: s,
    width: l,
    ...f
  }) => {
    var c, m;
    return {
      ...f,
      LHMVKgUok:
        (c = s ?? f.LHMVKgUok) !== null && c !== void 0 ? c : "facebook",
      VyYUWbFG3: n ?? f.VyYUWbFG3,
      wmp_rKgfr:
        (m = a ?? f.wmp_rKgfr) !== null && m !== void 0
          ? m
          : 'var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186)) /* {"name":"Primary Color"} */',
    };
  },
  Wr = (r, a) => a.join("-") + r.layoutDependency,
  Zr = N(function (r, a) {
    let { activeLocale: o } = K(),
      {
        style: n,
        className: s,
        layoutId: l,
        variant: f,
        LHMVKgUok: c,
        wmp_rKgfr: m,
        VyYUWbFG3: _,
        ...d
      } = Gr(r),
      {
        baseVariant: v,
        classNames: p,
        gestureVariant: h,
        setGestureState: g,
        setVariant: w,
        transition: i,
        variants: j,
      } = z({
        cycleOrder: zr,
        defaultVariant: "vXgQVLNfi",
        enabledGestures: Er,
        transitions: Tr,
        variant: f,
        variantClassNames: Lr,
      }),
      I = Wr(r, j),
      S = F(null),
      C = O();
    return e(V, {
      id: l ?? C,
      children: e(t.div, {
        initial: f,
        animate: j,
        onHoverStart: () => g({ isHovered: !0 }),
        onHoverEnd: () => g({ isHovered: !1 }),
        onTapStart: () => g({ isPressed: !0 }),
        onTap: () => g({ isPressed: !1 }),
        onTapCancel: () => g({ isPressed: !1 }),
        className: R("framer-slZze", p),
        style: { display: "contents" },
        children: e(Xr, {
          value: i,
          children: e($, {
            href: _,
            children: e(t.a, {
              ...d,
              className: `${R("framer-1tes2os", s)} framer-u24frw`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              layoutDependency: I,
              layoutId: "vXgQVLNfi",
              ref: a ?? S,
              style: {
                "--border-bottom-width": "1px",
                "--border-color":
                  'var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)) /* {"name":"Neutral 04"} */',
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                ...n,
              },
              variants: { "vXgQVLNfi-hover": { backgroundColor: m } },
              ...nr(
                { "vXgQVLNfi-hover": { "data-framer-name": void 0 } },
                v,
                h
              ),
              children: e(t.div, {
                className: "framer-1akbsuo-container",
                layoutDependency: I,
                layoutId: "j9IfMt92n-container",
                children: e(M, {
                  color:
                    'var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)) /* {"name":"Neutral 04"} */',
                  height: "100%",
                  iconSearch: "Home",
                  iconSelection: c,
                  id: "j9IfMt92n",
                  layoutId: "j9IfMt92n",
                  mirrored: !1,
                  selectByList: !0,
                  style: { height: "100%", width: "100%" },
                  width: "100%",
                  ...nr(
                    {
                      "vXgQVLNfi-hover": {
                        color:
                          'var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255)) /* {"name":"Neutral 01"} */',
                      },
                    },
                    v,
                    h
                  ),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Br = [
    '.framer-slZze [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-slZze .framer-u24frw { display: block; }",
    ".framer-slZze .framer-1tes2os { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 30px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-slZze .framer-1akbsuo-container { flex: none; height: 12px; position: relative; width: 12px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-slZze .framer-1tes2os { gap: 0px; } .framer-slZze .framer-1tes2os > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-slZze .framer-1tes2os > :first-child { margin-left: 0px; } .framer-slZze .framer-1tes2os > :last-child { margin-right: 0px; } }",
  ],
  de = E(Zr, Br, "framer-slZze"),
  T = de;
(de.displayName = "Social icon"),
  (de.defaultProps = { height: 30, width: 30 }),
  D(de, {
    LHMVKgUok: Fe?.iconSelection && {
      ...Fe.iconSelection,
      defaultValue: "facebook",
      hidden: void 0,
      title: "Name",
    },
    wmp_rKgfr: {
      defaultValue:
        'var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186)) /* {"name":"Primary Color"} */',
      title: "Hover BG",
      type: u.Color,
    },
    VyYUWbFG3: { title: "Link", type: u.Link },
  }),
  L(de, [...Kr]);
var Yr = {
    D4Uu7nbEP: { hover: !0 },
    SsZ3F7sx2: { hover: !0 },
    zQ7OlKo45: { hover: !0 },
  },
  $r = ["D4Uu7nbEP", "zQ7OlKo45", "SsZ3F7sx2"],
  ea = "framer-cWdqA",
  ra = {
    D4Uu7nbEP: "framer-v-1ydrk4",
    SsZ3F7sx2: "framer-v-wl37ab",
    zQ7OlKo45: "framer-v-q25xtn",
  };
function ir(r, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, r[n])), o;
}
var aa = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ta = ({ value: r, children: a }) => {
    let o = H(P),
      n = r ?? o.transition,
      s = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: a });
  },
  oa = t(x),
  na = {
    "Primary default color": "D4Uu7nbEP",
    "Secondary white color": "zQ7OlKo45",
    Tertiary: "SsZ3F7sx2",
  },
  ia = ({ height: r, id: a, link: o, title: n, width: s, ...l }) => {
    var f, c, m;
    return {
      ...l,
      cRqRWoih6: o ?? l.cRqRWoih6,
      okFfDCMAr: (f = n ?? l.okFfDCMAr) !== null && f !== void 0 ? f : "Home",
      variant:
        (m = (c = na[l.variant]) !== null && c !== void 0 ? c : l.variant) !==
          null && m !== void 0
          ? m
          : "D4Uu7nbEP",
    };
  },
  sa = (r, a) => a.join("-") + r.layoutDependency,
  la = N(function (r, a) {
    let { activeLocale: o, setLocale: n } = K(),
      {
        style: s,
        className: l,
        layoutId: f,
        variant: c,
        okFfDCMAr: m,
        cRqRWoih6: _,
        ...d
      } = ia(r),
      {
        baseVariant: v,
        classNames: p,
        gestureVariant: h,
        setGestureState: g,
        setVariant: w,
        variants: i,
      } = z({
        cycleOrder: $r,
        defaultVariant: "D4Uu7nbEP",
        enabledGestures: Yr,
        variant: c,
        variantClassNames: ra,
      }),
      j = sa(r, i),
      I = F(null),
      S = O(),
      C = [_e, rr],
      ae = oe();
    return e(V, {
      id: f ?? S,
      children: e(oa, {
        animate: i,
        initial: !1,
        children: e(ta, {
          value: aa,
          children: e($, {
            href: _,
            children: e(t.a, {
              ...d,
              className: `${R(ea, ...C, "framer-1ydrk4", l, p)} framer-1ykia6w`,
              "data-framer-name": "Primary default color",
              layoutDependency: j,
              layoutId: "D4Uu7nbEP",
              onHoverEnd: () => g({ isHovered: !1 }),
              onHoverStart: () => g({ isHovered: !0 }),
              onTap: () => g({ isPressed: !1 }),
              onTapCancel: () => g({ isPressed: !1 }),
              onTapStart: () => g({ isPressed: !0 }),
              ref: a ?? I,
              style: { ...s },
              ...ir(
                {
                  "D4Uu7nbEP-hover": { "data-framer-name": void 0 },
                  "SsZ3F7sx2-hover": { "data-framer-name": void 0 },
                  "zQ7OlKo45-hover": { "data-framer-name": void 0 },
                  SsZ3F7sx2: { "data-framer-name": "Tertiary" },
                  zQ7OlKo45: { "data-framer-name": "Secondary white color" },
                },
                v,
                h
              ),
              children: e(ee, {
                __fromCanvasComponent: !0,
                children: e(x, {
                  children: e(t.p, {
                    className: "framer-styles-preset-qfaott",
                    "data-styles-preset": "jU2CgCQbX",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                    },
                    children: "Home",
                  }),
                }),
                className: "framer-1v7su0w",
                fonts: ["Inter"],
                layoutDependency: j,
                layoutId: "Avfcc0Vos",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71))",
                },
                text: m,
                variants: {
                  "D4Uu7nbEP-hover": {
                    "--extracted-r6o4lv":
                      "var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212))",
                  },
                  "SsZ3F7sx2-hover": {
                    "--extracted-r6o4lv":
                      "var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212))",
                  },
                  "zQ7OlKo45-hover": {
                    "--extracted-r6o4lv":
                      "var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212))",
                  },
                  zQ7OlKo45: {
                    "--extracted-r6o4lv":
                      "var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255))",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...ir(
                  {
                    "D4Uu7nbEP-hover": {
                      children: e(x, {
                        children: e(t.p, {
                          className: "framer-styles-preset-qfaott",
                          "data-styles-preset": "jU2CgCQbX",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212)))",
                          },
                          children: "Home",
                        }),
                      }),
                    },
                    "SsZ3F7sx2-hover": {
                      children: e(x, {
                        children: e(t.p, {
                          className: "framer-styles-preset-l2n6uu",
                          "data-styles-preset": "M0DsUeVlb",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212)))",
                          },
                          children: "Home",
                        }),
                      }),
                    },
                    "zQ7OlKo45-hover": {
                      children: e(x, {
                        children: e(t.p, {
                          className: "framer-styles-preset-qfaott",
                          "data-styles-preset": "jU2CgCQbX",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-a7f2a4b9-8655-4133-9650-e1dad9e5d971, rgb(244, 128, 212)))",
                          },
                          children: "Home",
                        }),
                      }),
                    },
                    SsZ3F7sx2: {
                      children: e(x, {
                        children: e(t.p, {
                          className: "framer-styles-preset-l2n6uu",
                          "data-styles-preset": "M0DsUeVlb",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                          },
                          children: "Home",
                        }),
                      }),
                    },
                    zQ7OlKo45: {
                      children: e(x, {
                        children: e(t.p, {
                          className: "framer-styles-preset-qfaott",
                          "data-styles-preset": "jU2CgCQbX",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-445e6a17-5d81-448c-bb59-55039561ecb7, rgb(255, 255, 255)))",
                          },
                          children: "Home",
                        }),
                      }),
                    },
                  },
                  v,
                  h
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  fa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-cWdqA.framer-1ykia6w, .framer-cWdqA .framer-1ykia6w { display: block; }",
    ".framer-cWdqA.framer-1ydrk4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-cWdqA .framer-1v7su0w { cursor: pointer; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cWdqA.framer-1ydrk4 { gap: 0px; } .framer-cWdqA.framer-1ydrk4 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-cWdqA.framer-1ydrk4 > :first-child { margin-left: 0px; } .framer-cWdqA.framer-1ydrk4 > :last-child { margin-right: 0px; } }",
    ...Pe,
    ...er,
  ],
  pe = E(la, fa, "framer-cWdqA"),
  X = pe;
pe.displayName = "Nav-item";
pe.defaultProps = { height: 30, width: 52 };
D(pe, {
  variant: {
    options: ["D4Uu7nbEP", "zQ7OlKo45", "SsZ3F7sx2"],
    optionTitles: [
      "Primary default color",
      "Secondary white color",
      "Tertiary",
    ],
    title: "Variant",
    type: u.Enum,
  },
  okFfDCMAr: {
    defaultValue: "Home",
    displayTextArea: !1,
    title: "Title",
    type: u.String,
  },
  cRqRWoih6: { title: "Link", type: u.Link },
});
L(
  pe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...re(Ce),
    ...re($e),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var sr = Ne(ee),
  ca = J(se),
  ue = Ne(t.div),
  ma = J(X),
  da = J(T),
  pa = ["kHwZy4_YY", "fDqEdymD6", "pMMzoJM4Z", "i6JCRSGA8", "TENs7Xc9L"],
  ua = "framer-jxrQ6",
  ha = {
    fDqEdymD6: "framer-v-194mfzm",
    i6JCRSGA8: "framer-v-3iug2c",
    kHwZy4_YY: "framer-v-wk1q79",
    pMMzoJM4Z: "framer-v-1sf2pn7",
    TENs7Xc9L: "framer-v-cs6xbf",
  };
function G(r, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, r[n])), o;
}
var ga = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  le = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 50,
  },
  fr = { damping: 60, delay: 0, mass: 1, stiffness: 350, type: "spring" },
  ya = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: fr,
    x: 0,
    y: 50,
  },
  cr = { damping: 60, delay: 0.2, mass: 1, stiffness: 350, type: "spring" },
  xa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: cr,
    x: 0,
    y: 50,
  },
  De = { damping: 60, delay: 0.4, mass: 1, stiffness: 350, type: "spring" },
  lr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: De,
    x: 0,
    y: 50,
  },
  mr = { damping: 60, delay: 0.6, mass: 1, stiffness: 350, type: "spring" },
  ba = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: mr,
    x: 0,
    y: 50,
  },
  dr = { damping: 60, delay: 0.8, mass: 1, stiffness: 350, type: "spring" },
  va = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: dr,
    x: 0,
    y: 50,
  },
  pr = { damping: 60, delay: 1, mass: 1, stiffness: 350, type: "spring" },
  wa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: pr,
    x: 0,
    y: 50,
  },
  ka = ({ value: r, children: a }) => {
    let o = H(P),
      n = r ?? o.transition,
      s = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: a });
  },
  ja = t(x),
  Ca = {
    "Desktop with bg": "TENs7Xc9L",
    Desktop: "kHwZy4_YY",
    Laptop: "fDqEdymD6",
    Mobile: "i6JCRSGA8",
    Tablet: "pMMzoJM4Z",
  },
  Pa = ({ height: r, id: a, showCTA: o, width: n, ...s }) => {
    var l, f, c;
    return {
      ...s,
      u6SgWiJDm: (l = o ?? s.u6SgWiJDm) !== null && l !== void 0 ? l : !0,
      variant:
        (c = (f = Ca[s.variant]) !== null && f !== void 0 ? f : s.variant) !==
          null && c !== void 0
          ? c
          : "kHwZy4_YY",
    };
  },
  _a = (r, a) => a.join("-") + r.layoutDependency,
  Sa = N(function (r, a) {
    let { activeLocale: o, setLocale: n } = K(),
      {
        style: s,
        className: l,
        layoutId: f,
        variant: c,
        u6SgWiJDm: m,
        ..._
      } = Pa(r),
      {
        baseVariant: d,
        classNames: v,
        gestureVariant: p,
        setGestureState: h,
        setVariant: g,
        variants: w,
      } = z({
        cycleOrder: pa,
        defaultVariant: "kHwZy4_YY",
        variant: c,
        variantClassNames: ha,
      }),
      i = _a(r, w),
      j = F(null),
      I = ve(),
      S = () => d !== "TENs7Xc9L",
      C = () => !["fDqEdymD6", "TENs7Xc9L"].includes(d),
      ae = () => d === "TENs7Xc9L",
      ne = () => d === "fDqEdymD6",
      B = O(),
      ie = [Ye, We, Te, or],
      Y = oe();
    return e(V, {
      id: f ?? B,
      children: e(ja, {
        animate: w,
        initial: !1,
        children: e(ka, {
          value: ga,
          children: e(te, {
            ..._,
            className: R(ua, ...ie, "framer-wk1q79", l, v),
            "data-framer-name": "Desktop",
            layoutDependency: i,
            layoutId: "kHwZy4_YY",
            onHoverEnd: () => h({ isHovered: !1 }),
            onHoverStart: () => h({ isHovered: !0 }),
            onTap: () => h({ isPressed: !1 }),
            onTapCancel: () => h({ isPressed: !1 }),
            onTapStart: () => h({ isPressed: !0 }),
            ref: a ?? j,
            style: { backgroundColor: "rgb(255, 255, 255)", ...s },
            ...G(
              {
                fDqEdymD6: { "data-framer-name": "Laptop" },
                i6JCRSGA8: { "data-framer-name": "Mobile" },
                pMMzoJM4Z: { "data-framer-name": "Tablet" },
                TENs7Xc9L: {
                  "data-framer-name": "Desktop with bg",
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 2078,
                    intrinsicWidth: 3200,
                    pixelHeight: 2078,
                    pixelWidth: 3200,
                    sizes: Y?.width || "100vw",
                    src: "https://framerusercontent.com/images/Iz7hRzLxMswVlUMNM6eqo4iTJc.png",
                    srcSet:
                      "https://framerusercontent.com/images/Iz7hRzLxMswVlUMNM6eqo4iTJc.png?scale-down-to=512 512w,https://framerusercontent.com/images/Iz7hRzLxMswVlUMNM6eqo4iTJc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Iz7hRzLxMswVlUMNM6eqo4iTJc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/Iz7hRzLxMswVlUMNM6eqo4iTJc.png 3200w",
                  },
                },
              },
              d,
              p
            ),
            children: e(t.div, {
              className: "framer-ce51wz",
              "data-framer-name": "container",
              layoutDependency: i,
              layoutId: "oXO9YbaSb",
              children: b(t.div, {
                className: "framer-qtkpqd",
                "data-framer-name": "row",
                layoutDependency: i,
                layoutId: "l5N2CsbwK",
                children: [
                  b(t.div, {
                    className: "framer-11ua2yy",
                    "data-framer-name": "content",
                    layoutDependency: i,
                    layoutId: "E_t52zxR2",
                    children: [
                      m &&
                        b(t.div, {
                          className: "framer-6myc84",
                          "data-border": !0,
                          "data-framer-name": "CTA Text",
                          layoutDependency: i,
                          layoutId: "XnttIBY7v",
                          style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "rgba(8, 10, 71, 0.1)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "0px",
                          },
                          children: [
                            b(t.div, {
                              className: "framer-1qvq7xj",
                              "data-framer-name": "Text",
                              layoutDependency: i,
                              layoutId: "rd6CV8kNK",
                              children: [
                                e(sr, {
                                  __framer__animate: { transition: fr },
                                  __framer__animateOnce: !0,
                                  __framer__enter: le,
                                  __framer__exit: ya,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  children: e(x, {
                                    children: e(t.h2, {
                                      className: "framer-styles-preset-qxnr2d",
                                      "data-styles-preset": "p9qDDwZqD",
                                      style: {
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-1of0zx5, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                                      },
                                      children:
                                        "Start improving your reading skills now",
                                    }),
                                  }),
                                  className: "framer-14r3uil",
                                  "data-framer-name":
                                    "Point of sale & inventory management software",
                                  fonts: ["Inter"],
                                  layoutDependency: i,
                                  layoutId: "m7khU7Ixi",
                                  style: {
                                    "--extracted-1of0zx5":
                                      "var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71))",
                                    transformPerspective: 1200,
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...G(
                                    {
                                      i6JCRSGA8: {
                                        children: e(x, {
                                          children: e(t.h2, {
                                            style: {
                                              "--font-selector":
                                                "R0Y7UGx1cyBKYWthcnRhIFNhbnMtNjAw",
                                              "--framer-font-family":
                                                '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                              "--framer-font-size": "30px",
                                              "--framer-font-weight": "600",
                                              "--framer-letter-spacing":
                                                "-1.5px",
                                              "--framer-line-height": "120%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-1of0zx5, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                                            },
                                            children:
                                              "Start improving your reading skills now",
                                          }),
                                        }),
                                        fonts: ["GF;Plus Jakarta Sans-600"],
                                      },
                                    },
                                    d,
                                    p
                                  ),
                                }),
                                e(sr, {
                                  __framer__animate: { transition: cr },
                                  __framer__animateOnce: !0,
                                  __framer__enter: le,
                                  __framer__exit: xa,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 0.8,
                                  children: e(x, {
                                    children: e(t.p, {
                                      className: "framer-styles-preset-1ozcjd2",
                                      "data-styles-preset": "HwAOSDL_O",
                                      style: {
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                                      },
                                      children:
                                        "Join over 5,000+ families and get your own dyslexia companion",
                                    }),
                                  }),
                                  className: "framer-1l490ly",
                                  "data-framer-name":
                                    "Turn your smartphone or tablet into a powerful POS. Manage sales, inventory with ease; engage customers & increase your revenue.",
                                  fonts: ["Inter"],
                                  layoutDependency: i,
                                  layoutId: "YoClo80Fl",
                                  style: {
                                    "--extracted-r6o4lv":
                                      "var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71))",
                                    opacity: 0.8,
                                    transformPerspective: 1200,
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...G(
                                    {
                                      i6JCRSGA8: {
                                        children: e(x, {
                                          children: e(t.p, {
                                            className:
                                              "framer-styles-preset-x0fmvw",
                                            "data-styles-preset": "htqHw00bf",
                                            style: {
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                                            },
                                            children:
                                              "Join over 5,000+ families and get your own dyslexia companion",
                                          }),
                                        }),
                                      },
                                    },
                                    d,
                                    p
                                  ),
                                }),
                              ],
                            }),
                            b(t.div, {
                              className: "framer-qo83lz",
                              layoutDependency: i,
                              layoutId: "z9h5TpalR",
                              children: [
                                e(k, {
                                  children: e(ue, {
                                    __framer__animate: { transition: De },
                                    __framer__animateOnce: !0,
                                    __framer__enter: le,
                                    __framer__exit: lr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: "framer-1908fzi-container",
                                    layoutDependency: i,
                                    layoutId: "eOyKDSaNp-container",
                                    style: { transformPerspective: 1200 },
                                    children: e(se, {
                                      BlJNMfRrN: !1,
                                      fzPQj5vxM:
                                        "https://apps.apple.com/us/app/augmentally-dyslexia-reader/id1565832172",
                                      height: "100%",
                                      id: "eOyKDSaNp",
                                      layoutId: "eOyKDSaNp",
                                      qWQ35JEj6: "Download for iPhone & iPad",
                                      variant: "NcUvPco3S",
                                      width: "100%",
                                      yWCCtolhs: "phone",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      b(t.div, {
                        className: "framer-4cat6f",
                        "data-framer-name": "Footer content",
                        layoutDependency: i,
                        layoutId: "P4E5TLfdv",
                        children: [
                          b(t.div, {
                            className: "framer-qai6ss",
                            "data-framer-name": "Widgets",
                            layoutDependency: i,
                            layoutId: "aynE1BEaK",
                            children: [
                              e($, {
                                ...G(
                                  {
                                    TENs7Xc9L: {
                                      href: { webPageId: "augiA20Il" },
                                    },
                                  },
                                  d,
                                  p
                                ),
                                children: e(te, {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    intrinsicHeight: 32,
                                    intrinsicWidth: 159,
                                    pixelHeight: 32,
                                    pixelWidth: 180,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/IQC3WFFoA5AyzpmmIYOry8vIYs.svg",
                                  },
                                  className: "framer-r8ecmp framer-hsbepi",
                                  "data-framer-name": "Original Logo",
                                  layoutDependency: i,
                                  layoutId: "V6iNAfpDu",
                                  ...G({ TENs7Xc9L: { as: "a" } }, d, p),
                                }),
                              }),
                              b(t.div, {
                                className: "framer-jozm5s",
                                layoutDependency: i,
                                layoutId: "DbgBvut9L",
                                children: [
                                  b(ue, {
                                    __framer__animate: { transition: mr },
                                    __framer__animateOnce: !0,
                                    __framer__enter: le,
                                    __framer__exit: ba,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: "framer-1j8dj06",
                                    "data-framer-name": "Widget 1",
                                    layoutDependency: i,
                                    layoutId: "U9t_z8sV_",
                                    style: { transformPerspective: 1200 },
                                    children: [
                                      e(ee, {
                                        __fromCanvasComponent: !0,
                                        children: e(x, {
                                          children: e(t.p, {
                                            className:
                                              "framer-styles-preset-mq0gjf",
                                            "data-styles-preset": "DAuuhRhwt",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                                            },
                                            children: "Company",
                                          }),
                                        }),
                                        className: "framer-18j12wi",
                                        fonts: ["Inter"],
                                        layoutDependency: i,
                                        layoutId: "HroYZnkYY",
                                        style: {
                                          "--extracted-r6o4lv":
                                            "var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71))",
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      b(t.div, {
                                        className: "framer-1nuklgq",
                                        "data-framer-name": "List",
                                        layoutDependency: i,
                                        layoutId: "E6Neiv2xN",
                                        children: [
                                          e(fe, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: "augiA20Il",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "augiA20Il",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "augiA20Il",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "augiA20Il",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "augiA20Il",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (y) =>
                                              e(k, {
                                                children: e(t.div, {
                                                  className:
                                                    "framer-1tye7ii-container",
                                                  layoutDependency: i,
                                                  layoutId:
                                                    "JWfsMfTQk-container",
                                                  children: e(X, {
                                                    cRqRWoih6: y[0],
                                                    height: "100%",
                                                    id: "JWfsMfTQk",
                                                    layoutId: "JWfsMfTQk",
                                                    okFfDCMAr: "Home",
                                                    variant: "SsZ3F7sx2",
                                                    width: "100%",
                                                    ...G(
                                                      {
                                                        fDqEdymD6: {
                                                          cRqRWoih6: y[1],
                                                        },
                                                        i6JCRSGA8: {
                                                          cRqRWoih6: y[3],
                                                        },
                                                        pMMzoJM4Z: {
                                                          cRqRWoih6: y[2],
                                                        },
                                                        TENs7Xc9L: {
                                                          cRqRWoih6: y[4],
                                                        },
                                                      },
                                                      d,
                                                      p
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          S() &&
                                            e(fe, {
                                              links: [
                                                {
                                                  href: {
                                                    webPageId: "RVbGOLllE",
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    webPageId: "RVbGOLllE",
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    webPageId: "RVbGOLllE",
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    webPageId: "RVbGOLllE",
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (y) =>
                                                e(k, {
                                                  children: e(t.div, {
                                                    className:
                                                      "framer-3gyj3k-container",
                                                    layoutDependency: i,
                                                    layoutId:
                                                      "vpC5QBHA1-container",
                                                    children: e(X, {
                                                      cRqRWoih6: y[0],
                                                      height: "100%",
                                                      id: "vpC5QBHA1",
                                                      layoutId: "vpC5QBHA1",
                                                      okFfDCMAr: "About",
                                                      variant: "SsZ3F7sx2",
                                                      width: "100%",
                                                      ...G(
                                                        {
                                                          fDqEdymD6: {
                                                            cRqRWoih6: y[1],
                                                          },
                                                          i6JCRSGA8: {
                                                            cRqRWoih6: y[3],
                                                          },
                                                          pMMzoJM4Z: {
                                                            cRqRWoih6: y[2],
                                                          },
                                                        },
                                                        d,
                                                        p
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          e(fe, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: "bqeDxNddT",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "bqeDxNddT",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "bqeDxNddT",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "bqeDxNddT",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "bqeDxNddT",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (y) =>
                                              e(k, {
                                                children: e(t.div, {
                                                  className:
                                                    "framer-9uv93v-container",
                                                  layoutDependency: i,
                                                  layoutId:
                                                    "P8oaxhSb5-container",
                                                  children: e(X, {
                                                    cRqRWoih6: y[0],
                                                    height: "100%",
                                                    id: "P8oaxhSb5",
                                                    layoutId: "P8oaxhSb5",
                                                    okFfDCMAr: "",
                                                    variant: "SsZ3F7sx2",
                                                    width: "100%",
                                                    ...G(
                                                      {
                                                        fDqEdymD6: {
                                                          cRqRWoih6: y[1],
                                                        },
                                                        i6JCRSGA8: {
                                                          cRqRWoih6: y[3],
                                                        },
                                                        pMMzoJM4Z: {
                                                          cRqRWoih6: y[2],
                                                        },
                                                        TENs7Xc9L: {
                                                          cRqRWoih6: y[4],
                                                        },
                                                      },
                                                      d,
                                                      p
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  b(ue, {
                                    __framer__animate: { transition: dr },
                                    __framer__animateOnce: !0,
                                    __framer__enter: le,
                                    __framer__exit: va,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: "framer-qu5tx2",
                                    "data-framer-name": "Widget 2",
                                    layoutDependency: i,
                                    layoutId: "ZEWzSUOAm",
                                    style: { transformPerspective: 1200 },
                                    children: [
                                      e(ee, {
                                        __fromCanvasComponent: !0,
                                        children: e(x, {
                                          children: e(t.p, {
                                            className:
                                              "framer-styles-preset-mq0gjf",
                                            "data-styles-preset": "DAuuhRhwt",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                                            },
                                            children: "Help",
                                          }),
                                        }),
                                        className: "framer-nh0w6e",
                                        fonts: ["Inter"],
                                        layoutDependency: i,
                                        layoutId: "chFS35LiU",
                                        style: {
                                          "--extracted-r6o4lv":
                                            "var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71))",
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      b(t.div, {
                                        className: "framer-1vc6hqh",
                                        "data-framer-name": "List",
                                        layoutDependency: i,
                                        layoutId: "CShHb7DAA",
                                        children: [
                                          e(fe, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: "MGcKPPaxc",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "MGcKPPaxc",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "MGcKPPaxc",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "MGcKPPaxc",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "MGcKPPaxc",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (y) =>
                                              e(k, {
                                                children: e(t.div, {
                                                  className:
                                                    "framer-142uj7w-container",
                                                  layoutDependency: i,
                                                  layoutId:
                                                    "OwrrtOnf6-container",
                                                  children: e(X, {
                                                    cRqRWoih6: y[0],
                                                    height: "100%",
                                                    id: "OwrrtOnf6",
                                                    layoutId: "OwrrtOnf6",
                                                    okFfDCMAr: "Privacy Policy",
                                                    variant: "SsZ3F7sx2",
                                                    width: "100%",
                                                    ...G(
                                                      {
                                                        fDqEdymD6: {
                                                          cRqRWoih6: y[1],
                                                        },
                                                        i6JCRSGA8: {
                                                          cRqRWoih6: y[3],
                                                        },
                                                        pMMzoJM4Z: {
                                                          cRqRWoih6: y[2],
                                                        },
                                                        TENs7Xc9L: {
                                                          cRqRWoih6: y[4],
                                                        },
                                                      },
                                                      d,
                                                      p
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          e(fe, {
                                            links: [
                                              {
                                                href: {
                                                  webPageId: "LLMlfY3gK",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "LLMlfY3gK",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "LLMlfY3gK",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "LLMlfY3gK",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  webPageId: "LLMlfY3gK",
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (y) =>
                                              e(k, {
                                                children: e(t.div, {
                                                  className:
                                                    "framer-ctm8ep-container",
                                                  layoutDependency: i,
                                                  layoutId:
                                                    "iiVFRm16L-container",
                                                  children: e(X, {
                                                    cRqRWoih6: y[0],
                                                    height: "100%",
                                                    id: "iiVFRm16L",
                                                    layoutId: "iiVFRm16L",
                                                    okFfDCMAr: "",
                                                    variant: "SsZ3F7sx2",
                                                    width: "100%",
                                                    ...G(
                                                      {
                                                        fDqEdymD6: {
                                                          cRqRWoih6: y[1],
                                                        },
                                                        i6JCRSGA8: {
                                                          cRqRWoih6: y[3],
                                                        },
                                                        pMMzoJM4Z: {
                                                          cRqRWoih6: y[2],
                                                        },
                                                        TENs7Xc9L: {
                                                          cRqRWoih6: y[4],
                                                        },
                                                      },
                                                      d,
                                                      p
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  b(ue, {
                                    __framer__animate: { transition: pr },
                                    __framer__animateOnce: !0,
                                    __framer__enter: le,
                                    __framer__exit: wa,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: "framer-tj31am",
                                    "data-framer-name": "Widget 3",
                                    layoutDependency: i,
                                    layoutId: "KukLOYuQZ",
                                    style: { transformPerspective: 1200 },
                                    children: [
                                      e(ee, {
                                        __fromCanvasComponent: !0,
                                        children: e(x, {
                                          children: e(t.p, {
                                            className:
                                              "framer-styles-preset-mq0gjf",
                                            "data-styles-preset": "DAuuhRhwt",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                                            },
                                            children: "Resources",
                                          }),
                                        }),
                                        className: "framer-prdil1",
                                        fonts: ["Inter"],
                                        layoutDependency: i,
                                        layoutId: "MXmuq3SSm",
                                        style: {
                                          "--extracted-r6o4lv":
                                            "var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71))",
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      b(t.div, {
                                        className: "framer-129c3hn",
                                        "data-framer-name": "List",
                                        layoutDependency: i,
                                        layoutId: "xMtDqKMxb",
                                        children: [
                                          e(k, {
                                            children: e(t.div, {
                                              className:
                                                "framer-1p1asg9-container",
                                              layoutDependency: i,
                                              layoutId: "Y3VLAtG8K-container",
                                              children: e(X, {
                                                cRqRWoih6:
                                                  "https://impresskit.net/augmentally",
                                                height: "100%",
                                                id: "Y3VLAtG8K",
                                                layoutId: "Y3VLAtG8K",
                                                okFfDCMAr: "Media Press Kit",
                                                variant: "SsZ3F7sx2",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                          e(k, {
                                            children: e(t.div, {
                                              className:
                                                "framer-18slkzz-container",
                                              layoutDependency: i,
                                              layoutId: "bOa9J3f3U-container",
                                              children: e(X, {
                                                cRqRWoih6:
                                                  "https://dl.acm.org/doi/pdf/10.1145/3520495.3522703",
                                                height: "100%",
                                                id: "bOa9J3f3U",
                                                layoutId: "bOa9J3f3U",
                                                okFfDCMAr: "Published Research",
                                                variant: "SsZ3F7sx2",
                                                width: "100%",
                                                ...G(
                                                  {
                                                    TENs7Xc9L: {
                                                      cRqRWoih6:
                                                        "https://dl.acm.org/doi/abs/10.1145/3520495.3522703",
                                                    },
                                                  },
                                                  d,
                                                  p
                                                ),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          b(t.div, {
                            className: "framer-6kqyde",
                            "data-framer-name": "Bottom",
                            layoutDependency: i,
                            layoutId: "SVu8btjvn",
                            children: [
                              e(ee, {
                                __fromCanvasComponent: !0,
                                children: e(x, {
                                  children: e(t.p, {
                                    className: "framer-styles-preset-x0fmvw",
                                    "data-styles-preset": "htqHw00bf",
                                    style: {
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                                    },
                                    children:
                                      "\xA9 Copyright 2024 Onlabs Infotech",
                                  }),
                                }),
                                className: "framer-duborb",
                                "data-framer-name":
                                  "\xA9 Copyright 2023, All Rights Reserved by FramerBite",
                                fonts: ["Inter"],
                                layoutDependency: i,
                                layoutId: "fML8T_0Ao",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71))",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...G(
                                  {
                                    i6JCRSGA8: {
                                      children: e(x, {
                                        children: e(t.p, {
                                          className:
                                            "framer-styles-preset-x0fmvw",
                                          "data-styles-preset": "htqHw00bf",
                                          style: {
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)))",
                                          },
                                          children:
                                            "\xA9 Copyright 2024 Onlabs Infotech",
                                        }),
                                      }),
                                    },
                                  },
                                  d,
                                  p
                                ),
                              }),
                              C() &&
                                b(t.div, {
                                  className: "framer-buy30v",
                                  "data-framer-name": "Social icon",
                                  layoutDependency: i,
                                  layoutId: "O7lMymJdZ",
                                  children: [
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-1365ayv-container",
                                        layoutDependency: i,
                                        layoutId: "gB28C84EH-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "gB28C84EH",
                                          layoutId: "gB28C84EH",
                                          LHMVKgUok: "twitter",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://twitter.com/dyslexiabuddy",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-1tkzhx8-container",
                                        layoutDependency: i,
                                        layoutId: "iTsgQBs0b-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "iTsgQBs0b",
                                          layoutId: "iTsgQBs0b",
                                          LHMVKgUok: "facebook",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://www.facebook.com/people/Augmentally-Dyslexia-Buddy/61558308577366/",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-mpayd4-container",
                                        layoutDependency: i,
                                        layoutId: "PXvYWp1kP-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "PXvYWp1kP",
                                          layoutId: "PXvYWp1kP",
                                          LHMVKgUok: "instagram",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://instagram.com/dyslexiabuddy",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-yg4vux-container",
                                        layoutDependency: i,
                                        layoutId: "rW4P1zDgp-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "rW4P1zDgp",
                                          layoutId: "rW4P1zDgp",
                                          LHMVKgUok: "youtube",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://www.youtube.com/@DyslexiaBuddy",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ae() &&
                                b(t.div, {
                                  className: "framer-xw3b32",
                                  "data-framer-name": "Social icon",
                                  layoutDependency: i,
                                  layoutId: "drBffygPv",
                                  children: [
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-x2tqtt-container",
                                        layoutDependency: i,
                                        layoutId: "wj65cAKge-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "wj65cAKge",
                                          layoutId: "wj65cAKge",
                                          LHMVKgUok: "twitter",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://twitter.com/dyslexiabuddy",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-1kx5jyv-container",
                                        layoutDependency: i,
                                        layoutId: "yFvXkG7RA-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "yFvXkG7RA",
                                          layoutId: "yFvXkG7RA",
                                          LHMVKgUok: "facebook",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://www.facebook.com/people/Augmentally-Dyslexia-Buddy/61558308577366/",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-1btdf1g-container",
                                        layoutDependency: i,
                                        layoutId: "qb4IX38Lq-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "qb4IX38Lq",
                                          layoutId: "qb4IX38Lq",
                                          LHMVKgUok: "instagram",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://instagram.com/dyslexiabuddy",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-1jakh2r-container",
                                        layoutDependency: i,
                                        layoutId: "FzehkMIG6-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "FzehkMIG6",
                                          layoutId: "FzehkMIG6",
                                          LHMVKgUok: "youtube",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://www.youtube.com/@DyslexiaBuddy",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ne() &&
                                b(t.div, {
                                  className: "framer-1xmfsr2",
                                  "data-framer-name": "Social icon",
                                  layoutDependency: i,
                                  layoutId: "fbleFUUsG",
                                  children: [
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-1187hsm-container",
                                        layoutDependency: i,
                                        layoutId: "Ts6x2svMh-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "Ts6x2svMh",
                                          layoutId: "Ts6x2svMh",
                                          LHMVKgUok: "twitter",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://twitter.com/dyslexiabuddy",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-taibar-container",
                                        layoutDependency: i,
                                        layoutId: "HgeOuaKX3-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "HgeOuaKX3",
                                          layoutId: "HgeOuaKX3",
                                          LHMVKgUok: "facebook",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://www.facebook.com/people/Augmentally-Dyslexia-Buddy/61558308577366/",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-1fis4o4-container",
                                        layoutDependency: i,
                                        layoutId: "jOblFBZgW-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "jOblFBZgW",
                                          layoutId: "jOblFBZgW",
                                          LHMVKgUok: "instagram",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://instagram.com/dyslexiabuddy",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                    e(k, {
                                      children: e(t.div, {
                                        className: "framer-kemfrv-container",
                                        layoutDependency: i,
                                        layoutId: "kEFz0RKkM-container",
                                        children: e(T, {
                                          height: "100%",
                                          id: "kEFz0RKkM",
                                          layoutId: "kEFz0RKkM",
                                          LHMVKgUok: "youtube",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          VyYUWbFG3:
                                            "https://www.youtube.com/@DyslexiaBuddy",
                                          width: "100%",
                                          wmp_rKgfr:
                                            "var(--token-24317398-5647-4f06-877b-444a9a1ab50b, rgb(58, 48, 186))",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  S() &&
                    e(t.div, {
                      className: "framer-f3j9wh",
                      "data-framer-name": "Pink shape",
                      layoutDependency: i,
                      layoutId: "botahqJPZ",
                      style: {
                        background:
                          "radial-gradient(50% 49.99999999999999% at 50% 49.99999999999999%, rgba(244, 128, 212, 1) 39.0625%, rgba(244, 128, 212, 0) 100%)",
                        borderBottomLeftRadius: "100%",
                        borderBottomRightRadius: "100%",
                        borderTopLeftRadius: "100%",
                        borderTopRightRadius: "100%",
                        filter: "blur(130.74627685546875px)",
                        opacity: 0.6,
                        WebkitFilter: "blur(130.74627685546875px)",
                      },
                      variants: {
                        i6JCRSGA8: { opacity: 1 },
                        pMMzoJM4Z: { opacity: 1 },
                      },
                    }),
                  S() &&
                    e(t.div, {
                      className: "framer-1nqh646",
                      "data-framer-name": "Blue shape",
                      layoutDependency: i,
                      layoutId: "LHMDZGCZf",
                      style: {
                        background:
                          "radial-gradient(50% 49.99999999999999% at 50% 49.99999999999999%, rgba(69, 201, 193, 1) 39.0625%, rgba(69, 201, 193, 0) 100%)",
                        borderBottomLeftRadius: "100%",
                        borderBottomRightRadius: "100%",
                        borderTopLeftRadius: "100%",
                        borderTopRightRadius: "100%",
                        filter: "blur(123.13432312011719px)",
                        opacity: 0.6,
                        WebkitFilter: "blur(123.13432312011719px)",
                      },
                    }),
                  S() &&
                    e(te, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 694,
                        intrinsicWidth: 141,
                        pixelHeight: 694,
                        pixelWidth: 141,
                        sizes: "169px",
                        src: "https://framerusercontent.com/images/wTxYCJ5J2BNF6Xvjx4EU4AXiCI.png",
                        srcSet:
                          "https://framerusercontent.com/images/wTxYCJ5J2BNF6Xvjx4EU4AXiCI.png 141w",
                      },
                      className: "framer-i04wne",
                      "data-framer-name": "Left vactor img",
                      layoutDependency: i,
                      layoutId: "JRwQqJbXl",
                      ...G(
                        {
                          fDqEdymD6: {
                            background: {
                              alt: "",
                              fit: "fit",
                              intrinsicHeight: 694,
                              intrinsicWidth: 141,
                              pixelHeight: 694,
                              pixelWidth: 141,
                              positionX: "center",
                              positionY: "center",
                              sizes: "96px",
                              src: "https://framerusercontent.com/images/wTxYCJ5J2BNF6Xvjx4EU4AXiCI.png",
                              srcSet:
                                "https://framerusercontent.com/images/wTxYCJ5J2BNF6Xvjx4EU4AXiCI.png 141w",
                            },
                          },
                          i6JCRSGA8: {
                            background: {
                              alt: "",
                              fit: "fit",
                              intrinsicHeight: 694,
                              intrinsicWidth: 141,
                              pixelHeight: 694,
                              pixelWidth: 141,
                              positionX: "center",
                              positionY: "center",
                              sizes: "58px",
                              src: "https://framerusercontent.com/images/wTxYCJ5J2BNF6Xvjx4EU4AXiCI.png",
                              srcSet:
                                "https://framerusercontent.com/images/wTxYCJ5J2BNF6Xvjx4EU4AXiCI.png 141w",
                            },
                          },
                          pMMzoJM4Z: {
                            background: {
                              alt: "",
                              fit: "fit",
                              intrinsicHeight: 694,
                              intrinsicWidth: 141,
                              pixelHeight: 694,
                              pixelWidth: 141,
                              positionX: "center",
                              positionY: "center",
                              sizes: "96px",
                              src: "https://framerusercontent.com/images/wTxYCJ5J2BNF6Xvjx4EU4AXiCI.png",
                              srcSet:
                                "https://framerusercontent.com/images/wTxYCJ5J2BNF6Xvjx4EU4AXiCI.png 141w",
                            },
                          },
                        },
                        d,
                        p
                      ),
                    }),
                  S() &&
                    e(te, {
                      background: {
                        alt: "",
                        fit: "fit",
                        intrinsicHeight: 781,
                        intrinsicWidth: 139,
                        pixelHeight: 781,
                        pixelWidth: 139,
                        positionX: "center",
                        positionY: "center",
                        sizes: "141px",
                        src: "https://framerusercontent.com/images/h32lVwj2f02piECyYdyD4y3oc.png",
                        srcSet:
                          "https://framerusercontent.com/images/h32lVwj2f02piECyYdyD4y3oc.png 139w",
                      },
                      className: "framer-7ddbo8",
                      "data-framer-name": "Right vactor img",
                      layoutDependency: i,
                      layoutId: "FyoHabMSI",
                      ...G(
                        {
                          i6JCRSGA8: {
                            background: {
                              alt: "",
                              fit: "fit",
                              intrinsicHeight: 781,
                              intrinsicWidth: 139,
                              pixelHeight: 781,
                              pixelWidth: 139,
                              positionX: "center",
                              positionY: "center",
                              sizes: "51px",
                              src: "https://framerusercontent.com/images/h32lVwj2f02piECyYdyD4y3oc.png",
                              srcSet:
                                "https://framerusercontent.com/images/h32lVwj2f02piECyYdyD4y3oc.png 139w",
                            },
                          },
                          pMMzoJM4Z: {
                            background: {
                              alt: "",
                              fit: "fit",
                              intrinsicHeight: 781,
                              intrinsicWidth: 139,
                              pixelHeight: 781,
                              pixelWidth: 139,
                              positionX: "center",
                              positionY: "center",
                              sizes: "143px",
                              src: "https://framerusercontent.com/images/h32lVwj2f02piECyYdyD4y3oc.png",
                              srcSet:
                                "https://framerusercontent.com/images/h32lVwj2f02piECyYdyD4y3oc.png 139w",
                            },
                          },
                        },
                        d,
                        p
                      ),
                    }),
                ],
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Ia = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-jxrQ6.framer-hsbepi, .framer-jxrQ6 .framer-hsbepi { display: block; }",
    ".framer-jxrQ6.framer-wk1q79 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 41px; height: auto; justify-content: center; overflow: hidden; padding: 0px 30px 0px 30px; position: relative; width: 1440px; }",
    ".framer-jxrQ6 .framer-ce51wz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jxrQ6 .framer-qtkpqd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jxrQ6 .framer-11ua2yy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jxrQ6 .framer-6myc84 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: 545px; justify-content: center; overflow: visible; padding: 91px 0px 100px 0px; position: relative; width: 100%; }",
    ".framer-jxrQ6 .framer-1qvq7xj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jxrQ6 .framer-14r3uil { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 44%; word-break: break-word; word-wrap: break-word; }",
    ".framer-jxrQ6 .framer-1l490ly { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 49%; word-break: break-word; word-wrap: break-word; }",
    ".framer-jxrQ6 .framer-qo83lz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-jxrQ6 .framer-1908fzi-container, .framer-jxrQ6 .framer-sfh9mi-container, .framer-jxrQ6 .framer-1tye7ii-container, .framer-jxrQ6 .framer-3gyj3k-container, .framer-jxrQ6 .framer-9uv93v-container, .framer-jxrQ6 .framer-142uj7w-container, .framer-jxrQ6 .framer-ctm8ep-container, .framer-jxrQ6 .framer-1p1asg9-container, .framer-jxrQ6 .framer-18slkzz-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-jxrQ6 .framer-4cat6f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 115px; height: min-content; justify-content: center; overflow: visible; padding: 80px 0px 50px 0px; position: relative; width: 100%; }",
    ".framer-jxrQ6 .framer-qai6ss { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jxrQ6 .framer-r8ecmp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 39px; overflow: visible; padding: 0px; position: relative; width: 139px; }",
    ".framer-jxrQ6 .framer-jozm5s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-around; overflow: visible; padding: 0px; position: relative; width: 79%; }",
    ".framer-jxrQ6 .framer-1j8dj06, .framer-jxrQ6 .framer-qu5tx2, .framer-jxrQ6 .framer-tj31am { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-jxrQ6 .framer-18j12wi, .framer-jxrQ6 .framer-nh0w6e, .framer-jxrQ6 .framer-prdil1, .framer-jxrQ6 .framer-duborb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-jxrQ6 .framer-1nuklgq, .framer-jxrQ6 .framer-1vc6hqh, .framer-jxrQ6 .framer-129c3hn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-jxrQ6 .framer-6kqyde { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jxrQ6 .framer-buy30v, .framer-jxrQ6 .framer-xw3b32, .framer-jxrQ6 .framer-1xmfsr2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-jxrQ6 .framer-1365ayv-container, .framer-jxrQ6 .framer-1tkzhx8-container, .framer-jxrQ6 .framer-mpayd4-container, .framer-jxrQ6 .framer-yg4vux-container, .framer-jxrQ6 .framer-x2tqtt-container, .framer-jxrQ6 .framer-1kx5jyv-container, .framer-jxrQ6 .framer-1btdf1g-container, .framer-jxrQ6 .framer-1jakh2r-container, .framer-jxrQ6 .framer-1187hsm-container, .framer-jxrQ6 .framer-taibar-container, .framer-jxrQ6 .framer-1fis4o4-container, .framer-jxrQ6 .framer-kemfrv-container { flex: none; height: 30px; position: relative; width: 30px; }",
    ".framer-jxrQ6 .framer-f3j9wh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 584px); position: absolute; right: -277px; top: -143px; width: 44%; z-index: 1; }",
    ".framer-jxrQ6 .framer-1nqh646 { aspect-ratio: 1 / 1; bottom: -90px; flex: none; height: var(--framer-aspect-ratio-supported, 655px); left: -487px; position: absolute; width: 50%; z-index: 1; }",
    ".framer-jxrQ6 .framer-i04wne { flex: none; height: 696px; left: -85px; overflow: hidden; position: absolute; top: 0px; width: 169px; z-index: 1; }",
    ".framer-jxrQ6 .framer-7ddbo8 { flex: none; height: 791px; overflow: hidden; position: absolute; right: -60px; top: 0px; width: 141px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jxrQ6.framer-wk1q79, .framer-jxrQ6 .framer-ce51wz, .framer-jxrQ6 .framer-qtkpqd, .framer-jxrQ6 .framer-11ua2yy, .framer-jxrQ6 .framer-6myc84, .framer-jxrQ6 .framer-1qvq7xj, .framer-jxrQ6 .framer-qo83lz, .framer-jxrQ6 .framer-4cat6f, .framer-jxrQ6 .framer-r8ecmp, .framer-jxrQ6 .framer-1j8dj06, .framer-jxrQ6 .framer-1nuklgq, .framer-jxrQ6 .framer-qu5tx2, .framer-jxrQ6 .framer-1vc6hqh, .framer-jxrQ6 .framer-tj31am, .framer-jxrQ6 .framer-129c3hn, .framer-jxrQ6 .framer-buy30v, .framer-jxrQ6 .framer-xw3b32, .framer-jxrQ6 .framer-1xmfsr2 { gap: 0px; } .framer-jxrQ6.framer-wk1q79 > * { margin: 0px; margin-bottom: calc(41px / 2); margin-top: calc(41px / 2); } .framer-jxrQ6.framer-wk1q79 > :first-child, .framer-jxrQ6 .framer-ce51wz > :first-child, .framer-jxrQ6 .framer-qtkpqd > :first-child, .framer-jxrQ6 .framer-11ua2yy > :first-child, .framer-jxrQ6 .framer-6myc84 > :first-child, .framer-jxrQ6 .framer-1qvq7xj > :first-child, .framer-jxrQ6 .framer-4cat6f > :first-child, .framer-jxrQ6 .framer-1j8dj06 > :first-child, .framer-jxrQ6 .framer-1nuklgq > :first-child, .framer-jxrQ6 .framer-qu5tx2 > :first-child, .framer-jxrQ6 .framer-1vc6hqh > :first-child, .framer-jxrQ6 .framer-tj31am > :first-child, .framer-jxrQ6 .framer-129c3hn > :first-child { margin-top: 0px; } .framer-jxrQ6.framer-wk1q79 > :last-child, .framer-jxrQ6 .framer-ce51wz > :last-child, .framer-jxrQ6 .framer-qtkpqd > :last-child, .framer-jxrQ6 .framer-11ua2yy > :last-child, .framer-jxrQ6 .framer-6myc84 > :last-child, .framer-jxrQ6 .framer-1qvq7xj > :last-child, .framer-jxrQ6 .framer-4cat6f > :last-child, .framer-jxrQ6 .framer-1j8dj06 > :last-child, .framer-jxrQ6 .framer-1nuklgq > :last-child, .framer-jxrQ6 .framer-qu5tx2 > :last-child, .framer-jxrQ6 .framer-1vc6hqh > :last-child, .framer-jxrQ6 .framer-tj31am > :last-child, .framer-jxrQ6 .framer-129c3hn > :last-child { margin-bottom: 0px; } .framer-jxrQ6 .framer-ce51wz > *, .framer-jxrQ6 .framer-11ua2yy > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-jxrQ6 .framer-qtkpqd > *, .framer-jxrQ6 .framer-1nuklgq > *, .framer-jxrQ6 .framer-1vc6hqh > *, .framer-jxrQ6 .framer-129c3hn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-jxrQ6 .framer-6myc84 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-jxrQ6 .framer-1qvq7xj > * { margin: 0px; margin-bottom: calc(19px / 2); margin-top: calc(19px / 2); } .framer-jxrQ6 .framer-qo83lz > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-jxrQ6 .framer-qo83lz > :first-child, .framer-jxrQ6 .framer-r8ecmp > :first-child, .framer-jxrQ6 .framer-buy30v > :first-child, .framer-jxrQ6 .framer-xw3b32 > :first-child, .framer-jxrQ6 .framer-1xmfsr2 > :first-child { margin-left: 0px; } .framer-jxrQ6 .framer-qo83lz > :last-child, .framer-jxrQ6 .framer-r8ecmp > :last-child, .framer-jxrQ6 .framer-buy30v > :last-child, .framer-jxrQ6 .framer-xw3b32 > :last-child, .framer-jxrQ6 .framer-1xmfsr2 > :last-child { margin-right: 0px; } .framer-jxrQ6 .framer-4cat6f > * { margin: 0px; margin-bottom: calc(115px / 2); margin-top: calc(115px / 2); } .framer-jxrQ6 .framer-r8ecmp > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-jxrQ6 .framer-1j8dj06 > *, .framer-jxrQ6 .framer-qu5tx2 > *, .framer-jxrQ6 .framer-tj31am > * { margin: 0px; margin-bottom: calc(35px / 2); margin-top: calc(35px / 2); } .framer-jxrQ6 .framer-buy30v > *, .framer-jxrQ6 .framer-xw3b32 > *, .framer-jxrQ6 .framer-1xmfsr2 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } }",
    ".framer-jxrQ6.framer-v-194mfzm.framer-wk1q79 { width: 992px; }",
    ".framer-jxrQ6.framer-v-194mfzm .framer-14r3uil { width: 59%; }",
    ".framer-jxrQ6.framer-v-194mfzm .framer-1l490ly { width: 70%; }",
    ".framer-jxrQ6.framer-v-194mfzm .framer-jozm5s { width: 82%; }",
    ".framer-jxrQ6.framer-v-194mfzm .framer-f3j9wh { height: var(--framer-aspect-ratio-supported, 413px); }",
    ".framer-jxrQ6.framer-v-194mfzm .framer-1nqh646 { bottom: 443px; height: var(--framer-aspect-ratio-supported, 305px); left: -153px; width: 33%; }",
    ".framer-jxrQ6.framer-v-194mfzm .framer-i04wne { height: 552px; left: -30px; width: 96px; }",
    ".framer-jxrQ6.framer-v-194mfzm .framer-7ddbo8 { right: -50px; }",
    ".framer-jxrQ6.framer-v-1sf2pn7.framer-wk1q79 { width: 768px; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-6myc84 { padding: 80px 0px 60px 0px; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-14r3uil { width: 78%; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-1l490ly { width: 71%; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-4cat6f { gap: 60px; padding: 60px 0px 50px 0px; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-qai6ss { align-content: center; align-items: center; flex-direction: column; gap: 40px; justify-content: center; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-jozm5s { flex-wrap: wrap; gap: 23px; justify-content: center; width: 100%; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-1j8dj06, .framer-jxrQ6.framer-v-1sf2pn7 .framer-qu5tx2, .framer-jxrQ6.framer-v-1sf2pn7 .framer-tj31am { align-content: center; align-items: center; width: 30%; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-1nuklgq, .framer-jxrQ6.framer-v-1sf2pn7 .framer-1vc6hqh, .framer-jxrQ6.framer-v-1sf2pn7 .framer-129c3hn, .framer-jxrQ6.framer-v-3iug2c .framer-1nuklgq, .framer-jxrQ6.framer-v-3iug2c .framer-1vc6hqh, .framer-jxrQ6.framer-v-3iug2c .framer-129c3hn { align-content: center; align-items: center; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-f3j9wh { height: var(--framer-aspect-ratio-supported, 234px); right: -67px; top: 0px; width: 33%; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-1nqh646 { bottom: 800px; height: var(--framer-aspect-ratio-supported, 232px); left: -123px; width: 33%; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-i04wne { height: 335px; left: -41px; top: 117px; width: 96px; }",
    ".framer-jxrQ6.framer-v-1sf2pn7 .framer-7ddbo8 { height: 355px; right: -57px; width: 143px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jxrQ6.framer-v-1sf2pn7 .framer-4cat6f, .framer-jxrQ6.framer-v-1sf2pn7 .framer-qai6ss, .framer-jxrQ6.framer-v-1sf2pn7 .framer-jozm5s { gap: 0px; } .framer-jxrQ6.framer-v-1sf2pn7 .framer-4cat6f > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-jxrQ6.framer-v-1sf2pn7 .framer-4cat6f > :first-child, .framer-jxrQ6.framer-v-1sf2pn7 .framer-qai6ss > :first-child { margin-top: 0px; } .framer-jxrQ6.framer-v-1sf2pn7 .framer-4cat6f > :last-child, .framer-jxrQ6.framer-v-1sf2pn7 .framer-qai6ss > :last-child { margin-bottom: 0px; } .framer-jxrQ6.framer-v-1sf2pn7 .framer-qai6ss > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-jxrQ6.framer-v-1sf2pn7 .framer-jozm5s > * { margin: 0px; margin-left: calc(23px / 2); margin-right: calc(23px / 2); } .framer-jxrQ6.framer-v-1sf2pn7 .framer-jozm5s > :first-child { margin-left: 0px; } .framer-jxrQ6.framer-v-1sf2pn7 .framer-jozm5s > :last-child { margin-right: 0px; } }",
    ".framer-jxrQ6.framer-v-3iug2c.framer-wk1q79 { width: 390px; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-6myc84 { height: 366px; padding: 0px; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-14r3uil, .framer-jxrQ6.framer-v-3iug2c .framer-1l490ly { width: 100%; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-qo83lz { flex-direction: column; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-4cat6f { gap: 25px; padding: 20px 0px 40px 0px; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-qai6ss { align-content: center; align-items: center; flex-direction: column; gap: 35px; justify-content: center; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-jozm5s { flex-wrap: wrap; gap: 30px; justify-content: center; width: 100%; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-1j8dj06, .framer-jxrQ6.framer-v-3iug2c .framer-qu5tx2, .framer-jxrQ6.framer-v-3iug2c .framer-tj31am { align-content: center; align-items: center; width: 100%; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-6kqyde { flex-direction: column; gap: 25px; justify-content: center; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-duborb { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-f3j9wh { aspect-ratio: unset; height: 336px; right: -290px; top: 1px; width: 105%; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-1nqh646 { aspect-ratio: unset; bottom: 262px; height: 749px; left: -187px; width: 71%; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-i04wne { height: 517px; left: -30px; top: 1035px; width: 58px; }",
    ".framer-jxrQ6.framer-v-3iug2c .framer-7ddbo8 { height: 355px; right: -41px; width: 51px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jxrQ6.framer-v-3iug2c .framer-qo83lz, .framer-jxrQ6.framer-v-3iug2c .framer-4cat6f, .framer-jxrQ6.framer-v-3iug2c .framer-qai6ss, .framer-jxrQ6.framer-v-3iug2c .framer-jozm5s, .framer-jxrQ6.framer-v-3iug2c .framer-6kqyde { gap: 0px; } .framer-jxrQ6.framer-v-3iug2c .framer-qo83lz > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-jxrQ6.framer-v-3iug2c .framer-qo83lz > :first-child, .framer-jxrQ6.framer-v-3iug2c .framer-4cat6f > :first-child, .framer-jxrQ6.framer-v-3iug2c .framer-qai6ss > :first-child, .framer-jxrQ6.framer-v-3iug2c .framer-6kqyde > :first-child { margin-top: 0px; } .framer-jxrQ6.framer-v-3iug2c .framer-qo83lz > :last-child, .framer-jxrQ6.framer-v-3iug2c .framer-4cat6f > :last-child, .framer-jxrQ6.framer-v-3iug2c .framer-qai6ss > :last-child, .framer-jxrQ6.framer-v-3iug2c .framer-6kqyde > :last-child { margin-bottom: 0px; } .framer-jxrQ6.framer-v-3iug2c .framer-4cat6f > *, .framer-jxrQ6.framer-v-3iug2c .framer-6kqyde > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-jxrQ6.framer-v-3iug2c .framer-qai6ss > * { margin: 0px; margin-bottom: calc(35px / 2); margin-top: calc(35px / 2); } .framer-jxrQ6.framer-v-3iug2c .framer-jozm5s > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-jxrQ6.framer-v-3iug2c .framer-jozm5s > :first-child { margin-left: 0px; } .framer-jxrQ6.framer-v-3iug2c .framer-jozm5s > :last-child { margin-right: 0px; } }",
    ".framer-jxrQ6.framer-v-cs6xbf .framer-r8ecmp { text-decoration: none; }",
    ...Be,
    ...Ge,
    ...Le,
    ...tr,
    '.framer-jxrQ6[data-border="true"]::after, .framer-jxrQ6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  he = E(Sa, Ia, "framer-jxrQ6"),
  fo = he;
he.displayName = "Footer Section";
he.defaultProps = { height: 993, width: 1440 };
D(he, {
  variant: {
    options: ["kHwZy4_YY", "fDqEdymD6", "pMMzoJM4Z", "i6JCRSGA8", "TENs7Xc9L"],
    optionTitles: ["Desktop", "Laptop", "Tablet", "Mobile", "Desktop with bg"],
    title: "Variant",
    type: u.Enum,
  },
  u6SgWiJDm: { defaultValue: !0, title: "Show CTA", type: u.Boolean },
});
L(
  he,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
        {
          family: "Plus Jakarta Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
          weight: "600",
        },
      ],
    },
    ...ca,
    ...ma,
    ...da,
    ...re(Ze),
    ...re(Xe),
    ...re(ze),
    ...re(ar),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ma = J(M),
  Ra = ["jTu0q71Rd", "lyl05f1kg"];
var Na = { jTu0q71Rd: "framer-v-1k9g8zk", lyl05f1kg: "framer-v-rnra3i" };
function ur(r, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, r[n])), o;
}
var Qa = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Fa = ({ value: r, children: a }) => {
    let o = H(P),
      n = r ?? o.transition,
      s = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: a });
  },
  Da = { Humburger: "jTu0q71Rd", x: "lyl05f1kg" },
  qa = ({ color: r, height: a, id: o, tap: n, width: s, ...l }) => {
    var f, c, m;
    return {
      ...l,
      njNJdZBy3: n ?? l.njNJdZBy3,
      variant:
        (c = (f = Da[l.variant]) !== null && f !== void 0 ? f : l.variant) !==
          null && c !== void 0
          ? c
          : "jTu0q71Rd",
      vJH2yQXFN:
        (m = r ?? l.vJH2yQXFN) !== null && m !== void 0
          ? m
          : 'var(--token-7f5544af-543d-45ce-a4d1-c4fb6f3243f4, rgb(24, 28, 57)) /* {"name":"Neutral/04"} */',
    };
  },
  Ua = (r, a) => a.join("-") + r.layoutDependency,
  Aa = N(function (r, a) {
    let { activeLocale: o } = K(),
      {
        style: n,
        className: s,
        layoutId: l,
        variant: f,
        njNJdZBy3: c,
        vJH2yQXFN: m,
        ..._
      } = qa(r),
      {
        baseVariant: d,
        classNames: v,
        gestureVariant: p,
        setGestureState: h,
        setVariant: g,
        transition: w,
        variants: i,
      } = z({
        cycleOrder: Ra,
        defaultVariant: "jTu0q71Rd",
        transitions: Qa,
        variant: f,
        variantClassNames: Na,
      }),
      j = Ua(r, i),
      { activeVariantCallback: I, delay: S } = ke(d),
      C = I(async (...Y) => {
        if (c && (await c(...Y)) === !1) return !1;
      }),
      ae = I(async (...Y) => {
        g("lyl05f1kg");
      }),
      ne = I(async (...Y) => {
        g("jTu0q71Rd");
      }),
      B = F(null),
      ie = O();
    return e(V, {
      id: l ?? ie,
      children: e(t.div, {
        initial: f,
        animate: i,
        onHoverStart: () => h({ isHovered: !0 }),
        onHoverEnd: () => h({ isHovered: !1 }),
        onTapStart: () => h({ isPressed: !0 }),
        onTap: () => h({ isPressed: !1 }),
        onTapCancel: () => h({ isPressed: !1 }),
        className: R("framer-PDqWC", v),
        style: { display: "contents" },
        children: e(Fa, {
          value: w,
          children: e(t.div, {
            ..._,
            className: R("framer-1k9g8zk", s),
            "data-framer-name": "Humburger",
            "data-highlight": !0,
            layoutDependency: j,
            layoutId: "jTu0q71Rd",
            onTap: C,
            ref: a ?? B,
            style: { ...n },
            ...ur({ lyl05f1kg: { "data-framer-name": "x" } }, d, p),
            children: e(t.div, {
              className: "framer-1o5pixp-container",
              layoutDependency: j,
              layoutId: "ZxxNv0pU4-container",
              children: e(M, {
                color: m,
                height: "100%",
                iconSearch: "Home",
                iconSelection: "menu",
                id: "ZxxNv0pU4",
                layoutId: "ZxxNv0pU4",
                mirrored: !1,
                onClick: ae,
                selectByList: !0,
                style: { height: "100%", width: "100%" },
                width: "100%",
                ...ur({ lyl05f1kg: { iconSelection: "x", onClick: ne } }, d, p),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Ja = [
    '.framer-PDqWC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-PDqWC .framer-vo8bmr { display: block; }",
    ".framer-PDqWC .framer-1k9g8zk { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 40px; }",
    ".framer-PDqWC .framer-1o5pixp-container { flex: none; height: 40px; position: relative; width: 40px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PDqWC .framer-1k9g8zk { gap: 0px; } .framer-PDqWC .framer-1k9g8zk > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PDqWC .framer-1k9g8zk > :first-child { margin-left: 0px; } .framer-PDqWC .framer-1k9g8zk > :last-child { margin-right: 0px; } }",
  ],
  ge = E(Aa, Ja, "framer-PDqWC"),
  qe = ge;
(ge.displayName = "Humburger"),
  (ge.defaultProps = { height: 40, width: 40 }),
  D(ge, {
    variant: {
      options: ["jTu0q71Rd", "lyl05f1kg"],
      optionTitles: ["Humburger", "x"],
      title: "Variant",
      type: u.Enum,
    },
    njNJdZBy3: { title: "Tap", type: u.EventHandler },
    vJH2yQXFN: {
      defaultValue:
        'var(--token-7f5544af-543d-45ce-a4d1-c4fb6f3243f4, rgb(24, 28, 57)) /* {"name":"Neutral/04"} */',
      title: "Color",
      type: u.Color,
    },
  }),
  L(ge, [...Ma]);
var Ha = ["S0aB_BQDg", "boPFpQSGw"],
  Oa = "framer-gcWID",
  Va = { boPFpQSGw: "framer-v-kzeqwt", S0aB_BQDg: "framer-v-o47kl8" };
function Ka(r, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, r[n])), o;
}
var Ea = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  za = ({ value: r, children: a }) => {
    let o = H(P),
      n = r ?? o.transition,
      s = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: a });
  },
  La = t(x),
  Ta = { "Black Logo": "boPFpQSGw" },
  Xa = ({ height: r, id: a, link: o, width: n, ...s }) => {
    var l, f;
    return {
      ...s,
      variant:
        (f = (l = Ta[s.variant]) !== null && l !== void 0 ? l : s.variant) !==
          null && f !== void 0
          ? f
          : "S0aB_BQDg",
      zGOOudHsX: o ?? s.zGOOudHsX,
    };
  },
  Ga = (r, a) => a.join("-") + r.layoutDependency,
  Wa = N(function (r, a) {
    let { activeLocale: o, setLocale: n } = K(),
      {
        style: s,
        className: l,
        layoutId: f,
        variant: c,
        zGOOudHsX: m,
        ..._
      } = Xa(r),
      {
        baseVariant: d,
        classNames: v,
        gestureVariant: p,
        setGestureState: h,
        setVariant: g,
        variants: w,
      } = z({
        cycleOrder: Ha,
        defaultVariant: "S0aB_BQDg",
        variant: c,
        variantClassNames: Va,
      }),
      i = Ga(r, w),
      j = F(null),
      I = O(),
      S = [],
      C = oe();
    return e(V, {
      id: f ?? I,
      children: e(La, {
        animate: w,
        initial: !1,
        children: e(za, {
          value: Ea,
          children: e($, {
            href: m,
            children: e(te, {
              ..._,
              as: "a",
              background: {
                alt: "",
                fit: "fit",
                intrinsicHeight: 32,
                intrinsicWidth: 159,
                pixelHeight: 32,
                pixelWidth: 180,
                positionX: "center",
                positionY: "center",
                src: "https://framerusercontent.com/images/IQC3WFFoA5AyzpmmIYOry8vIYs.svg",
              },
              className: `${R(Oa, ...S, "framer-o47kl8", l, v)} framer-1ncz5wf`,
              "data-framer-name": "Black Logo",
              layoutDependency: i,
              layoutId: "S0aB_BQDg",
              onHoverEnd: () => h({ isHovered: !1 }),
              onHoverStart: () => h({ isHovered: !0 }),
              onTap: () => h({ isPressed: !1 }),
              onTapCancel: () => h({ isPressed: !1 }),
              onTapStart: () => h({ isPressed: !0 }),
              ref: a ?? j,
              style: { ...s },
              ...Ka(
                {
                  boPFpQSGw: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 32,
                      intrinsicWidth: 159,
                      pixelHeight: 32,
                      pixelWidth: 180,
                      positionX: "center",
                      positionY: "center",
                      src: "https://framerusercontent.com/images/Go0eNImNBQEg9YELWgN70JM0MMI.svg",
                    },
                  },
                },
                d,
                p
              ),
            }),
          }),
        }),
      }),
    });
  }),
  Za = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-gcWID.framer-1ncz5wf, .framer-gcWID .framer-1ncz5wf { display: block; }",
    ".framer-gcWID.framer-o47kl8 { height: 32px; overflow: visible; position: relative; text-decoration: none; width: 119px; }",
  ],
  ye = E(Wa, Za, "framer-gcWID"),
  Ue = ye;
ye.displayName = "Logo";
ye.defaultProps = { height: 32, width: 119 };
D(ye, {
  variant: {
    options: ["S0aB_BQDg", "boPFpQSGw"],
    optionTitles: ["Black Logo", "Black Logo"],
    title: "Variant",
    type: u.Enum,
  },
  zGOOudHsX: { title: "Link", type: u.Link },
});
L(ye, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var Ba = J(Ue),
  Ya = J(X),
  $a = J(se),
  et = J(qe),
  rt = [
    "UoegaHNGw",
    "nVGYZphMd",
    "p_ycgwl5Y",
    "rivJs3Clo",
    "Tw0435C9m",
    "d8EvSOF8j",
    "PMEKZqtFv",
    "KVn9RKwmd",
    "NRpHDG_Cc",
    "NEFFDaXII",
  ];
var at = {
  d8EvSOF8j: "framer-v-1na9sam",
  KVn9RKwmd: "framer-v-1ky639n",
  NEFFDaXII: "framer-v-1bwwygr",
  NRpHDG_Cc: "framer-v-11ayjsw",
  nVGYZphMd: "framer-v-1ee3f1b",
  p_ycgwl5Y: "framer-v-1mjv3h2",
  PMEKZqtFv: "framer-v-1ccxj5q",
  rivJs3Clo: "framer-v-19xbspw",
  Tw0435C9m: "framer-v-1s7zqgu",
  UoegaHNGw: "framer-v-3kznyq",
};
function xe(r, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, r[n])), o;
}
var tt = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  ot = (r, a) => `translateY(-50%) ${a}`,
  nt = ({ value: r, children: a }) => {
    let o = H(P),
      n = r ?? o.transition,
      s = Q(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: a });
  },
  it = {
    "Desktop Open Primary": "Tw0435C9m",
    "Desktop Primary": "UoegaHNGw",
    "Laptop Open Primary": "d8EvSOF8j",
    "Laptop Primary": "nVGYZphMd",
    "Mobile Dropdown Open Primary": "NEFFDaXII",
    "Mobile Open Primary": "NRpHDG_Cc",
    "Mobile Primary": "rivJs3Clo",
    "Tablet Dropdown Open Primary": "KVn9RKwmd",
    "Tablet Open Primary": "PMEKZqtFv",
    "Tablet Primary": "p_ycgwl5Y",
  },
  st = ({ height: r, id: a, width: o, ...n }) => {
    var s, l;
    return {
      ...n,
      variant:
        (l = (s = it[n.variant]) !== null && s !== void 0 ? s : n.variant) !==
          null && l !== void 0
          ? l
          : "UoegaHNGw",
    };
  },
  lt = (r, a) => a.join("-") + r.layoutDependency,
  ft = N(function (r, a) {
    let { activeLocale: o } = K(),
      { style: n, className: s, layoutId: l, variant: f, ...c } = st(r),
      {
        baseVariant: m,
        classNames: _,
        gestureVariant: d,
        setGestureState: v,
        setVariant: p,
        transition: h,
        variants: g,
      } = z({
        cycleOrder: rt,
        defaultVariant: "UoegaHNGw",
        transitions: tt,
        variant: f,
        variantClassNames: at,
      }),
      w = lt(r, g),
      { activeVariantCallback: i, delay: j } = ke(m),
      I = i(async (...Me) => {
        p("PMEKZqtFv");
      }),
      S = i(async (...Me) => {
        p("NRpHDG_Cc");
      }),
      C = i(async (...Me) => {
        p("p_ycgwl5Y");
      }),
      ae = i(async (...Me) => {
        p("rivJs3Clo");
      }),
      ne = F(null),
      B = ve(),
      ie = () => !["p_ycgwl5Y", "rivJs3Clo"].includes(m),
      Y = () => !["rivJs3Clo", "NRpHDG_Cc", "NEFFDaXII"].includes(m),
      y = () =>
        !![
          "p_ycgwl5Y",
          "rivJs3Clo",
          "PMEKZqtFv",
          "KVn9RKwmd",
          "NRpHDG_Cc",
          "NEFFDaXII",
        ].includes(m),
      hr = O(),
      gr = [];
    return e(V, {
      id: l ?? hr,
      children: e(t.div, {
        initial: f,
        animate: g,
        onHoverStart: () => v({ isHovered: !0 }),
        onHoverEnd: () => v({ isHovered: !1 }),
        onTapStart: () => v({ isPressed: !0 }),
        onTap: () => v({ isPressed: !1 }),
        onTapCancel: () => v({ isPressed: !1 }),
        className: R("framer-5U9XM", ...gr, _),
        style: { display: "contents" },
        children: e(nt, {
          value: h,
          children: b(t.div, {
            ...c,
            className: R("framer-3kznyq", s),
            "data-framer-name": "Desktop Primary",
            layoutDependency: w,
            layoutId: "UoegaHNGw",
            ref: a ?? ne,
            style: { ...n },
            ...xe(
              {
                d8EvSOF8j: { "data-framer-name": "Laptop Open Primary" },
                KVn9RKwmd: {
                  "data-framer-name": "Tablet Dropdown Open Primary",
                },
                NEFFDaXII: {
                  "data-framer-name": "Mobile Dropdown Open Primary",
                },
                NRpHDG_Cc: { "data-framer-name": "Mobile Open Primary" },
                nVGYZphMd: { "data-framer-name": "Laptop Primary" },
                p_ycgwl5Y: { "data-framer-name": "Tablet Primary" },
                PMEKZqtFv: { "data-framer-name": "Tablet Open Primary" },
                rivJs3Clo: { "data-framer-name": "Mobile Primary" },
                Tw0435C9m: { "data-framer-name": "Desktop Open Primary" },
              },
              m,
              d
            ),
            children: [
              e(t.div, {
                className: "framer-m9rl00",
                "data-framer-name": "Logo & button",
                layoutDependency: w,
                layoutId: "ex_pioYN_",
                children: e(t.div, {
                  className: "framer-u8hm38-container",
                  layoutDependency: w,
                  layoutId: "cltuWtpR8-container",
                  children: e(Ue, {
                    height: "100%",
                    id: "cltuWtpR8",
                    layoutId: "cltuWtpR8",
                    style: { height: "100%", width: "100%" },
                    variant: "S0aB_BQDg",
                    width: "100%",
                    zGOOudHsX: ce({ webPageId: "augiA20Il" }, B),
                  }),
                }),
              }),
              b(t.div, {
                className: "framer-pqp1or",
                "data-framer-name": "Button & Burger",
                layoutDependency: w,
                layoutId: "HcZvb2iHi",
                style: {
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                },
                children: [
                  Y() &&
                    e(t.div, {
                      className: "framer-dxk4xz-container",
                      layoutDependency: w,
                      layoutId: "rUU1Lnmbx-container",
                      children: e(se, {
                        BlJNMfRrN: !1,
                        fzPQj5vxM:
                          "https://apps.apple.com/us/app/augmentally-dyslexia-reader/id1565832172?ref=augmentally.com&utm_source=augmentally_website&utm_medium=website&utm_campaign=external_link&utm_content=augmentally_website",
                        height: "100%",
                        id: "rUU1Lnmbx",
                        layoutId: "rUU1Lnmbx",
                        qWQ35JEj6: "Get the app",
                        variant: "eIloA3S6a",
                        width: "100%",
                        yWCCtolhs: "phone",
                      }),
                    }),
                  y() &&
                    e(t.div, {
                      className: "framer-shypnj-container",
                      layoutDependency: w,
                      layoutId: "dSxKNw2Vr-container",
                      children: e(qe, {
                        height: "100%",
                        id: "dSxKNw2Vr",
                        layoutId: "dSxKNw2Vr",
                        style: { height: "100%", width: "100%" },
                        variant: "jTu0q71Rd",
                        vJH2yQXFN:
                          'var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)) /* {"name":"Neutral 04"} */',
                        width: "100%",
                        ...xe(
                          {
                            KVn9RKwmd: { njNJdZBy3: C, variant: "lyl05f1kg" },
                            NEFFDaXII: { njNJdZBy3: ae, variant: "lyl05f1kg" },
                            NRpHDG_Cc: { njNJdZBy3: ae, variant: "lyl05f1kg" },
                            p_ycgwl5Y: { njNJdZBy3: I },
                            PMEKZqtFv: { njNJdZBy3: C, variant: "lyl05f1kg" },
                            rivJs3Clo: { njNJdZBy3: S },
                          },
                          m,
                          d
                        ),
                      }),
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ct = [
    '.framer-5U9XM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-5U9XM .framer-fwdc5s { display: block; }",
    ".framer-5U9XM .framer-3kznyq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 15px 0px 15px 0px; position: relative; width: 1320px; }",
    ".framer-5U9XM .framer-m9rl00 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-5U9XM .framer-u8hm38-container { aspect-ratio: 3.369565217391304 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 42px); position: relative; width: 140px; }",
    ".framer-5U9XM .framer-lf9ukk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; left: 225px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 50%; width: min-content; z-index: 6; }",
    ".framer-5U9XM .framer-1upl9kt-container, .framer-5U9XM .framer-hev1ma-container, .framer-5U9XM .framer-2f7b7m-container, .framer-5U9XM .framer-dxk4xz-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-5U9XM .framer-pqp1or { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-5U9XM .framer-shypnj-container { flex: none; height: 40px; position: relative; width: 40px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5U9XM .framer-m9rl00, .framer-5U9XM .framer-lf9ukk, .framer-5U9XM .framer-pqp1or { gap: 0px; } .framer-5U9XM .framer-m9rl00 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-5U9XM .framer-m9rl00 > :first-child, .framer-5U9XM .framer-lf9ukk > :first-child, .framer-5U9XM .framer-pqp1or > :first-child { margin-left: 0px; } .framer-5U9XM .framer-m9rl00 > :last-child, .framer-5U9XM .framer-lf9ukk > :last-child, .framer-5U9XM .framer-pqp1or > :last-child { margin-right: 0px; } .framer-5U9XM .framer-lf9ukk > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-5U9XM .framer-pqp1or > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } }",
    ".framer-5U9XM.framer-v-1ee3f1b .framer-3kznyq, .framer-5U9XM.framer-v-1na9sam .framer-3kznyq { width: 992px; }",
    ".framer-5U9XM.framer-v-1mjv3h2 .framer-3kznyq, .framer-5U9XM.framer-v-1ccxj5q .framer-3kznyq, .framer-5U9XM.framer-v-1ky639n .framer-3kznyq { width: 768px; }",
    ".framer-5U9XM.framer-v-19xbspw .framer-3kznyq, .framer-5U9XM.framer-v-11ayjsw .framer-3kznyq, .framer-5U9XM.framer-v-1bwwygr .framer-3kznyq { width: 390px; }",
    ".framer-5U9XM.framer-v-1ccxj5q .framer-lf9ukk { align-content: start; align-items: start; flex-direction: column; left: 0px; padding: 30px 30px 30px 30px; top: 275%; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5U9XM.framer-v-1ccxj5q .framer-lf9ukk { gap: 0px; } .framer-5U9XM.framer-v-1ccxj5q .framer-lf9ukk > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-5U9XM.framer-v-1ccxj5q .framer-lf9ukk > :first-child { margin-top: 0px; } .framer-5U9XM.framer-v-1ccxj5q .framer-lf9ukk > :last-child { margin-bottom: 0px; } }",
    ".framer-5U9XM.framer-v-1ky639n .framer-lf9ukk { align-content: start; align-items: start; flex-direction: column; left: 0px; padding: 30px 30px 30px 30px; top: 421%; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5U9XM.framer-v-1ky639n .framer-lf9ukk { gap: 0px; } .framer-5U9XM.framer-v-1ky639n .framer-lf9ukk > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-5U9XM.framer-v-1ky639n .framer-lf9ukk > :first-child { margin-top: 0px; } .framer-5U9XM.framer-v-1ky639n .framer-lf9ukk > :last-child { margin-bottom: 0px; } }",
    ".framer-5U9XM.framer-v-11ayjsw .framer-lf9ukk { align-content: start; align-items: start; flex-direction: column; left: 0px; padding: 30px 30px 30px 30px; top: 296%; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5U9XM.framer-v-11ayjsw .framer-lf9ukk { gap: 0px; } .framer-5U9XM.framer-v-11ayjsw .framer-lf9ukk > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-5U9XM.framer-v-11ayjsw .framer-lf9ukk > :first-child { margin-top: 0px; } .framer-5U9XM.framer-v-11ayjsw .framer-lf9ukk > :last-child { margin-bottom: 0px; } }",
    ".framer-5U9XM.framer-v-1bwwygr .framer-lf9ukk { align-content: start; align-items: start; flex-direction: column; gap: 20px; left: 0px; padding: 30px 20px 30px 20px; top: 517%; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5U9XM.framer-v-1bwwygr .framer-lf9ukk { gap: 0px; } .framer-5U9XM.framer-v-1bwwygr .framer-lf9ukk > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-5U9XM.framer-v-1bwwygr .framer-lf9ukk > :first-child { margin-top: 0px; } .framer-5U9XM.framer-v-1bwwygr .framer-lf9ukk > :last-child { margin-bottom: 0px; } }",
  ],
  be = E(ft, ct, "framer-5U9XM"),
  No = be;
be.displayName = "Navbar";
be.defaultProps = { height: 84.5, width: 1320 };
D(be, {
  variant: {
    options: [
      "UoegaHNGw",
      "nVGYZphMd",
      "p_ycgwl5Y",
      "rivJs3Clo",
      "Tw0435C9m",
      "d8EvSOF8j",
      "PMEKZqtFv",
      "KVn9RKwmd",
      "NRpHDG_Cc",
      "NEFFDaXII",
    ],
    optionTitles: [
      "Desktop Primary",
      "Laptop Primary",
      "Tablet Primary",
      "Mobile Primary",
      "Desktop Open Primary",
      "Laptop Open Primary",
      "Tablet Open Primary",
      "Tablet Dropdown Open Primary",
      "Mobile Open Primary",
      "Mobile Dropdown Open Primary",
    ],
    title: "Variant",
    type: u.Enum,
  },
});
L(be, [...Ba, ...Ya, ...$a, ...et]);
export {
  M as a,
  Ce as b,
  Pe as c,
  _e as d,
  se as e,
  ze as f,
  Le as g,
  Te as h,
  Xe as i,
  Ge as j,
  We as k,
  Ze as l,
  Be as m,
  Ye as n,
  $e as o,
  er as p,
  rr as q,
  fo as r,
  No as s,
};
//# sourceMappingURL=chunk-EL2HABAU.mjs.map
