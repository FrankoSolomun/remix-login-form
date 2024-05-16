import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-GFXG2WFG.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/textfield.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/textfield.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/textfield.tsx"
  );
  import.meta.hot.lastModified = "1715444402313.8396";
}
function Textfield({
  htmlFor,
  label,
  type = "text",
  name,
  value,
  onChange = () => {
  }
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor, className: "text-sm font-semibold text-gray-700", children: label }, void 0, false, {
      fileName: "app/components/textfield.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type, name, id: htmlFor, value, onChange, required: true, className: "p-2 mt-1 border border-gray-300 rounded-lg" }, void 0, false, {
      fileName: "app/components/textfield.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/textfield.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = Textfield;
var _c;
$RefreshReg$(_c, "Textfield");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Textfield
};
//# sourceMappingURL=/build/_shared/chunk-7OYQGZLL.js.map
