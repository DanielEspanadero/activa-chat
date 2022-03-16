"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPass = void 0;
const path_1 = __importDefault(require("path"));
const forgotPass = (req, res) => {
    res.sendFile(path_1.default.join(`${__dirname}../../../../public/html/en/forgot-pass.html`));
};
exports.forgotPass = forgotPass;
//# sourceMappingURL=forgot-pass.js.map