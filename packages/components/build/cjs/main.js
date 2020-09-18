"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.Main = void 0;
const react_1 = __importDefault(require("react"));
exports.Main = ({ text }) => react_1.default.createElement("main", null, text);
exports.Card = ({ heading, text }) => (react_1.default.createElement("div", { className: "card" },
    react_1.default.createElement("div", { className: "card-heading" }, heading),
    react_1.default.createElement("div", { className: "card-body" }, text)));
//# sourceMappingURL=main.js.map