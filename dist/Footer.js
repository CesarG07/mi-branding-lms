"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./tailwind.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Footer = function Footer() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
    className: "bg-brand-dark text-white py-8 text-center",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-6xl mx-auto flex justify-between items-center px-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "text-brand-blue font-bold text-xl",
        children: "Mi LMS Moderno"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
        className: "flex space-x-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "/about",
            className: "hover:text-blue-300 transition-colors",
            children: "Nosotros"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "/privacy",
            className: "hover:text-blue-300 transition-colors",
            children: "Privacidad"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "/contact",
            className: "hover:text-blue-300 transition-colors",
            children: "Contacto"
          })
        })]
      })]
    })
  });
};
var _default = exports["default"] = Footer;