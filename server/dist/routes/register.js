"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = require("../controllers/register");
const router = (0, express_1.Router)();
router.post('/', 
// [
//     check('firstName', 'The firstName is required.').not().isEmpty(),
//     check('lastName', 'The lastName is required.').not().isEmpty(),
//     check('email', 'This email is not valid.').isEmail(),
//     check('password', 'The password must have more than 6 letters.').isLength({ min: 6 }),
//     validateFields
// ],
register_1.registerPost);
exports.default = router;
//# sourceMappingURL=register.js.map