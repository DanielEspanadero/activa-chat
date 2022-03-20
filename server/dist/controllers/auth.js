"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const express_1 = require("express");
const login = (req, res = express_1.response) => {
    res.status(200).json({
        msg: 'Login get'
    });
};
exports.login = login;
//# sourceMappingURL=auth.js.map