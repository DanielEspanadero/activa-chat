"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const forgot_pass_1 = require("../controllers/forgot-pass");
const router = (0, express_1.Router)();
router.get('/', forgot_pass_1.forgotPass);
exports.default = router;
//# sourceMappingURL=forgot-pass.js.map