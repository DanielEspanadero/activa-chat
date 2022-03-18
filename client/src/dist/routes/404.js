"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _404_1 = require("../controllers/404");
const router = (0, express_1.Router)();
router.get('/', _404_1.error404Get);
exports.default = router;
//# sourceMappingURL=404.js.map