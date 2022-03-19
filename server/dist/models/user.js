"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required.']
    },
    avatar: {
        type: String,
        default: 'https://github.com/DanielEspanadero/activa-chat/blob/master/client/public/assets/img/man.png'
    }
});
exports.User = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=user.js.map