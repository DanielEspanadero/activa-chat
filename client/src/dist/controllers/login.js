"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginGet = void 0;
const path_1 = __importDefault(require("path"));
const loginGet = (req, res) => {
    res.sendFile(path_1.default.join(`${__dirname}../../../../public/index.html`));
};
exports.loginGet = loginGet;
//# sourceMappingURL=login.js.map