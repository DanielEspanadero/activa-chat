"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_1 = require("../controllers/chat");
const router = (0, express_1.Router)();
router.get('/', chat_1.chatGet);
exports.default = router;
//# sourceMappingURL=chat.js.map