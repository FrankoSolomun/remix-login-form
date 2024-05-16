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

// app/icons/icons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/icons/icons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/icons/icons.tsx"
  );
  import.meta.hot.lastModified = "1715869236767.5059";
}
var PencilIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "60", height: "61", viewBox: "0 0 60 61", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.6877 9.77654C42.6167 6.84759 47.3655 6.84761 50.2942 9.77654L50.7232 10.2055C53.6522 13.1344 53.6522 17.8831 50.7232 20.8121L46.38 25.1553L21.7588 49.7767C21.4384 50.0969 21.0369 50.3242 20.5974 50.4342L10.5974 52.9342C9.74542 53.1472 8.8442 52.8974 8.22325 52.2767C7.6023 51.6557 7.35267 50.7544 7.56567 49.9024L10.0657 39.9024C10.1756 39.4629 10.4029 39.0614 10.7232 38.7409L35.4882 13.976L39.6877 9.77654ZM46.7587 13.3121C45.7825 12.3358 44.1995 12.3358 43.2232 13.3121L40.758 15.7774L44.6465 19.8178L47.1877 17.2765C48.164 16.3002 48.164 14.7173 47.1877 13.741L46.7587 13.3121ZM41.1102 23.354L37.2217 19.3135L14.7484 41.7869L13.4269 47.0729L18.7129 45.7514L41.1102 23.354Z", fill: "black" }, void 0, false, {
    fileName: "app/icons/icons.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/icons/icons.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_c = PencilIcon;
var UploadIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" }, void 0, false, {
    fileName: "app/icons/icons.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/icons/icons.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c2 = UploadIcon;
var UserIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" }, void 0, false, {
    fileName: "app/icons/icons.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/icons/icons.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c3 = UserIcon;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "PencilIcon");
$RefreshReg$(_c2, "UploadIcon");
$RefreshReg$(_c3, "UserIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UploadWidget/UploadWidgetButton.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: open, className: "absolute bg-white p-2 rounded-full right-0 -bottom-2 border border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PencilIcon, { className: "w-4 h-4 stroke-white" }, void 0, false, {
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
_c4 = UploadWidget;
var UploadWidgetButton_default = UploadWidget;
var _c4;
$RefreshReg$(_c4, "UploadWidget");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/DashboardHeader.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-blue-700 font-extrabold text-[40px] leading-12", children: "Dashboard" }, void 0, false, {
        fileName: "app/components/DashboardHeader.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 mb-5", children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-gray-100 h-20 w-20 rounded-full overflow-hidden relative flex justify-center items-center", children: [
        profilePicture ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: profilePicture, alt: "Profile", className: "profile-image" }, void 0, false, {
          fileName: "app/components/DashboardHeader.tsx",
          lineNumber: 39,
          columnNumber: 29
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserIcon, { className: "w-10 h-10" }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UploadWidgetButton_default, {}, void 0, false, {
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
_c5 = DashboardHeader;
var DashboardHeader_default = DashboardHeader;
var _c5;
$RefreshReg$(_c5, "DashboardHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1715894206271.748";
}
var prisma = new import_client.PrismaClient();
function Dashboard() {
  _s2();
  const fetcher = useFetcher();
  const {
    user
  } = useLoaderData();
  if (!user) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 111,
      columnNumber: 12
    }, this);
  }
  const [editMode, setEditMode] = (0, import_react4.useState)(null);
  const [formData, setFormData] = (0, import_react4.useState)({
    ...user,
    birthdate: new Date(user.birthdate)
  });
  const handleEdit = (field) => {
    setEditMode(field);
  };
  const handleChange = (event) => {
    const {
      name,
      value
    } = event.target;
    if (name === "birthdate") {
      setFormData((prev) => ({
        ...prev,
        [name]: new Date(value)
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };
  const saveChanges = () => {
    if (!user)
      return;
    const dataToSubmit = {
      ...formData,
      userId: user.id,
      birthdate: formData.birthdate.toISOString(),
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
    value: new Date(formData.birthdate).toLocaleDateString("en-GB").split("/").join("."),
    field: "birthdate"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-screen flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white w-[500px] h-[500px] py-6 px-8 rounded-[30px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DashboardHeader_default, { profilePicture: user.profilePicture, userName: user.name }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 175,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "gap-2 flex flex-col", children: userDetails.map((detail) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `px-6 py-[6px] rounded-3xl justify-between flex items-center h-[56px] ${editMode === detail.field ? "bg-gray-100" : "hover:bg-gray-100"}`, children: editMode === detail.field ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: detail.field === "birthdate" ? "date" : "text", name: detail.field, value: detail.field === "birthdate" ? formData[detail.field].toISOString().substring(0, 10) : formData[detail.field], onChange: handleChange, className: "bg-transparent focus:outline-none w-full" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 180,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "bg-blue-500 flex justify-center items-center p-2 rounded-full", onClick: saveChanges, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UploadIcon, { className: "w-5 h-5 stroke-white" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 182,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 181,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 179,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 178,
        columnNumber: 46
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "group w-full flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-400 leading-[20px]", children: detail.label }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 188,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: detail.value }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 191,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 187,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => handleEdit(detail.field), className: "flex justify-center items-center p-2 rounded-full hover:bg-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PencilIcon, { className: "w-4 h-4 hidden group-hover:block" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 194,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 193,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 186,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 185,
        columnNumber: 25
      }, this) }, detail.field, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 177,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 176,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 174,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "/change-password", className: "mt-5 bg-blue-500 text-white px-2 py-3 rounded-[30px] w-full max-w-[500px] flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Change password" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 202,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 201,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 173,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 172,
    columnNumber: 10
  }, this);
}
_s2(Dashboard, "wWIGvovlFUgfgeLkkpwp6OfjPWE=", false, function() {
  return [useFetcher, useLoaderData];
});
_c6 = Dashboard;
var _c6;
$RefreshReg$(_c6, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-TJMNFYIE.js.map
