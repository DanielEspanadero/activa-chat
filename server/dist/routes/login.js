"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controllers/login");
const router = (0, express_1.Router)();
router.get('/', login_1.loginGet);
exports.default = router;
//# sourceMappingURL=login.js.map