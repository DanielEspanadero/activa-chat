"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
;
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'first name is required.']
    },
    lastName: {
        type: String,
        required: [true, 'last name is required.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    avatar: {
        type: String,
        default: 'https://github.com/DanielEspanadero/activa-chat/blob/master/client/public/assets/img/man.png'
    },
    status: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    versionKey: false
});
exports.User = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=user.js.map