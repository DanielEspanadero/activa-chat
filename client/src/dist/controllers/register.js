"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerGet = void 0;
const path_1 = __importDefault(require("path"));
const registerGet = (req, res) => {
    res.sendFile(path_1.default.join(`${__dirname}../../../../public/html/en/register.html`));
};
exports.registerGet = registerGet;
//# sourceMappingURL=register.js.map