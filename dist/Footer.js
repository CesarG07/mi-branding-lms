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
var Footer = function Footer() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("footer", {
    className: "bg-white text-gray-700",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-6xl mx-auto px-4 py-6 flex items-center justify-between",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex items-center space-x-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-sm text-gray-500",
          children: "Impulsado por"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: _logo["default"],
          alt: "Logo",
          className: "h-8 object-contain"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
        className: "flex space-x-8",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "/about",
            className: "text-sm text-gray-700 hover:text-gray-900 transition-colors",
            children: "Nosotros"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "/privacy",
            className: "text-sm text-gray-700 hover:text-gray-900 transition-colors",
            children: "Privacidad"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "/contact",
            className: "text-sm text-gray-700 hover:text-gray-900 transition-colors",
            children: "Contacto"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {})]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "max-w-6xl mx-auto px-4 pb-6",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-xs text-gray-400",
        children: "Copyright \xA92026. Todos los derechos reservados."
      })
    })]
  });
};
var _default = exports["default"] = Footer;