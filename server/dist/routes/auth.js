"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
router.post('/login', auth_1.login);
router.post('/google', auth_1.googleSignin);
router.get('/', validate_jwt_1.validateToken, auth_1.refreshJWT);
exports.default = router;
//# sourceMappingURL=auth.js.map