import {
  Textfield
} from "/build/_shared/chunk-7OYQGZLL.js";
import {
  Layout,
  require_auth
} from "/build/_shared/chunk-GBOP6DKI.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Link,
  useActionData
} from "/build/_shared/chunk-JP2RFDNF.js";
import {
  createHotContext
} from "/build/_shared/chunk-GFXG2WFG.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:./utils/session.server
var require_session = __commonJS({
  "empty-module:./utils/session.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./utils/user.server
var require_user = __commonJS({
  "empty-module:./utils/user.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/signup.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_user = __toESM(require_user(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/signup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/signup.tsx"
  );
  import.meta.hot.lastModified = "1715444355881.9626";
}
function Signup() {
  _s();
  const actionData = useActionData();
  const [formData, setFormData] = (0, import_react2.useState)({
    email: actionData?.fields?.email || "",
    password: actionData?.fields?.password || "",
    name: actionData?.fields?.name || "",
    surname: actionData?.fields?.surname || "",
    birthdate: actionData?.fields?.birthdate || "",
    address: actionData?.fields?.address || ""
  });
  const handleInputChange = (event, field) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "POST", className: "flex flex-col items-center gap-3", children: [
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "error", children: actionData.error }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 125,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textfield, { htmlFor: "email", name: "email", label: "Email", type: "email", value: formData.email, onChange: (e) => handleInputChange(e, "email") }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 126,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textfield, { htmlFor: "password", name: "password", label: "Password", type: "password", value: formData.password, onChange: (e) => handleInputChange(e, "password") }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textfield, { htmlFor: "name", name: "name", label: "Name", type: "text", value: formData.name, onChange: (e) => handleInputChange(e, "name") }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 128,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textfield, { htmlFor: "surname", name: "surname", label: "Surname", type: "text", value: formData.surname, onChange: (e) => handleInputChange(e, "surname") }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textfield, { htmlFor: "birthdate", name: "birthdate", label: "Date of birth", type: "date", value: formData.birthdate, onChange: (e) => handleInputChange(e, "birthdate") }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 130,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textfield, { htmlFor: "address", name: "address", label: "Address", type: "text", value: formData.address, onChange: (e) => handleInputChange(e, "address") }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 131,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_action", value: "register", className: "bg-blue-500 text-white p-2 rounded-lg", children: "Signup" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-blue-500", children: "Already have an account? Login here" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 135,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 124,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 123,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}
_s(Signup, "0ECWWSbZnJKDG3YW2OZqiPr0yKI=", false, function() {
  return [useActionData];
});
_c = Signup;
var _c;
$RefreshReg$(_c, "Signup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Signup as default
};
//# sourceMappingURL=/build/routes/signup-D6FKBKSH.js.map
