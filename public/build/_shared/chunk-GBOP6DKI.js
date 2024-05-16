import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-JP2RFDNF.js";
import {
  createHotContext
} from "/build/_shared/chunk-GFXG2WFG.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:./utils/auth.server
var require_auth = __commonJS({
  "empty-module:./utils/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header.tsx"
  );
  import.meta.hot.lastModified = "1715444393796.3965";
}
function Header({
  isAuthenticated
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex justify-between items-center w-full px-8 py-4 bg-blue-400 absolute", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "text-blue-700 text-[30px] font-bold", children: "Frenki" }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    isAuthenticated && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "action", value: "logout", className: "bg-blue-700 text-white py-2 px-5 rounded-full", children: "Sign Out" }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 30,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout.tsx"
  );
  import.meta.hot.lastModified = "1715444396260.6746";
}
function Layout({
  children
}) {
  _s();
  const data = useLoaderData();
  const isAuthenticated = data?.user ? true : false;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-screen w-full bg-gray-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header, { isAuthenticated }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/layout.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(Layout, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c2 = Layout;
var _c2;
$RefreshReg$(_c2, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Layout,
  require_auth
};
//# sourceMappingURL=/build/_shared/chunk-GBOP6DKI.js.map
