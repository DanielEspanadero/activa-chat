"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404Get = void 0;
const path_1 = __importDefault(require("path"));
const error404Get = (req, res) => {
    res.sendFile(path_1.default.join(`${__dirname}../../../../public/html/404.html`));
};
exports.error404Get = error404Get;
//# sourceMappingURL=404.js.map