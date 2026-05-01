"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./tailwind.css");
var _logo = _interopRequireDefault(require("./logo.png"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Header = function Header() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("header", {
    className: "bg-white shadow w-full",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex items-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "/",
          className: "flex items-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: _logo["default"],
            alt: "Logo CIDE PUCP",
            className: "h-10 object-contain"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {})]
    })
  });
};
var _default = exports["default"] = Header;