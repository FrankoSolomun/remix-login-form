import {
  PencilIcon,
  UploadIcon,
  UserIcon
} from "/build/_shared/chunk-KQDCIUSZ.js";
import {
  require_index_browser
} from "/build/_shared/chunk-7EAOOKTB.js";
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
  useFetcher,
  useLoaderData,
  useMatches
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
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard.tsx
var import_react4 = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_client = __toESM(require_index_browser(), 1);

// app/components/UploadWidget/UploadWidgetButton.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UploadWidget/UploadWidgetButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UploadWidget/UploadWidgetButton.tsx"
  );
  import.meta.hot.lastModified = "1715871416095.5273";
}
function UploadWidget() {
  _s();
  const fetcher = useFetcher();
  const userId = useLoaderData().user.id;
  const matches = useMatches();
  const envData = matches.find((route) => route.id === "root")?.data || {};
  const {
    ENV
  } = envData || {
    ENV: {
      CLOUDINARY_CLOUD_NAME: "",
      CLOUDINARY_UPLOAD_PRESET: ""
    }
  };
  function createWidget() {
    if ("cloudinary" in window) {
      return window.cloudinary.createUploadWidget({
        cloudName: ENV.CLOUDINARY_CLOUD_NAME,
        uploadPreset: ENV.CLOUDINARY_UPLOAD_PRESET
      }, (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          fetcher.submit({
            userId,
            profilePictureUrl: result.info.secure_url,
            action: "uploadProfilePicture"
          }, {
            method: "post"
          });
        }
      });
    }
  }
  const widget = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    function onIdle() {
      if (!widget.current) {
        widget.current = createWidget();
      }
    }
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(onIdle);
    } else {
      setTimeout(onIdle, 0);
    }
  }, []);
  function open() {
    if (widget.current) {
      widget.current.open();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: open, className: "absolute bg-white p-2 rounded-full right-0 -bottom-2 border border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilIcon, { className: "w-4 h-4 stroke-white" }, void 0, false, {
    fileName: "app/components/UploadWidget/UploadWidgetButton.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/UploadWidget/UploadWidgetButton.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s(UploadWidget, "iKluU9BYf5eVGCtgSYFrTWlxTVg=", false, function() {
  return [useFetcher, useLoaderData, useMatches];
});
_c = UploadWidget;
var UploadWidgetButton_default = UploadWidget;
var _c;
$RefreshReg$(_c, "UploadWidget");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/DashboardHeader.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/DashboardHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/DashboardHeader.tsx"
  );
  import.meta.hot.lastModified = "1715871472667.796";
}
var DashboardHeader = ({
  userName,
  profilePicture
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-blue-700 font-extrabold text-[40px] leading-12", children: "Dashboard" }, void 0, false, {
        fileName: "app/components/DashboardHeader.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 mb-5", children: [
        "Welcome to your dashboard, ",
        userName,
        "!"
      ] }, void 0, true, {
        fileName: "app/components/DashboardHeader.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DashboardHeader.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-100 h-20 w-20 rounded-full overflow-hidden relative flex justify-center items-center", children: [
        profilePicture ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: profilePicture, alt: "Profile", className: "profile-image" }, void 0, false, {
          fileName: "app/components/DashboardHeader.tsx",
          lineNumber: 39,
          columnNumber: 29
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserIcon, { className: "w-10 h-10" }, void 0, false, {
          fileName: "app/components/DashboardHeader.tsx",
          lineNumber: 39,
          columnNumber: 100
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/components/DashboardHeader.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UploadWidgetButton_default, {}, void 0, false, {
        fileName: "app/components/DashboardHeader.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DashboardHeader.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DashboardHeader.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c2 = DashboardHeader;
var DashboardHeader_default = DashboardHeader;
var _c2;
$RefreshReg$(_c2, "DashboardHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1716067421490.0757";
}
var prisma = new import_client.PrismaClient();
function Dashboard() {
  _s2();
  const fetcher = useFetcher();
  const {
    user
  } = useLoaderData();
  if (!user) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 106,
      columnNumber: 12
    }, this);
  }
  const [editMode, setEditMode] = (0, import_react4.useState)(null);
  const [formData, setFormData] = (0, import_react4.useState)({
    ...user
  });
  const handleEdit = (field) => {
    setEditMode(field);
  };
  const handleChange = (event) => {
    const {
      name,
      value
    } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const saveChanges = () => {
    if (!user)
      return;
    const dataToSubmit = {
      ...formData,
      userId: user.id,
      action: "updateUser"
    };
    fetcher.submit(dataToSubmit, {
      method: "post"
    });
    setEditMode(null);
  };
  const userDetails = [{
    label: "Email",
    value: user.email,
    field: "email"
  }, {
    label: "Name",
    value: user.name,
    field: "name"
  }, {
    label: "Surname",
    value: user.surname,
    field: "surname"
  }, {
    label: "Address",
    value: user.address,
    field: "address"
  }, {
    label: "Date of Birth",
    value: formData.birthdate,
    field: "birthdate"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-screen flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white w-[500px] h-[500px] py-6 px-8 rounded-[30px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DashboardHeader_default, { profilePicture: user.profilePicture, userName: user.name }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "gap-2 flex flex-col", children: userDetails.map((detail) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `px-6 py-[6px] rounded-3xl justify-between flex items-center h-[56px] ${editMode === detail.field ? "bg-gray-100" : "hover:bg-gray-100"}`, children: editMode === detail.field ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            type: "text",
            name: detail.field,
            value: formData[detail.field],
            onChange: handleChange,
            className: "bg-transparent focus:outline-none w-full"
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 166,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "bg-blue-500 flex justify-center items-center p-2 rounded-full", onClick: saveChanges, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UploadIcon, { className: "w-5 h-5 stroke-white" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 169,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 168,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 165,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 164,
        columnNumber: 46
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "group w-full flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 leading-[20px]", children: detail.label }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 175,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: detail.value }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 178,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 174,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => handleEdit(detail.field), className: "flex justify-center items-center p-2 rounded-full hover:bg-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PencilIcon, { className: "w-4 h-4 hidden group-hover:block" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 181,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 180,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 173,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 172,
        columnNumber: 25
      }, this) }, detail.field, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 163,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 160,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/change-password", className: "mt-5 bg-blue-500 text-white px-2 py-3 rounded-[30px] w-full max-w-[500px] flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Change password" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 189,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 188,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 159,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 158,
    columnNumber: 10
  }, this);
}
_s2(Dashboard, "D26/5HkcurUDkymITwER+3JOYbo=", false, function() {
  return [useFetcher, useLoaderData];
});
_c3 = Dashboard;
var _c3;
$RefreshReg$(_c3, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-OTH3QMPE.js.map
