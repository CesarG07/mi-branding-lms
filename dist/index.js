"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Footer: true
};
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
var _brandOpenedx = require("@edx/brand-openedx");
Object.keys(_brandOpenedx).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _brandOpenedx[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _brandOpenedx[key];
    }
  });
});
var _Footer = _interopRequireDefault(require("./Footer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }