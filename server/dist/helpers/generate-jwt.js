"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const user_1 = require("../models/user");
const generateAccessToken = (uid = '') => {
    return new Promise((resolve, reject) => {
        const user = { uid };
        jsonwebtoken_1.default.sign(user, process.env.SECRETPRIVATEKEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Failed to generate JWT');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateAccessToken = generateAccessToken;
const checkJWT = (token = '') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (token.length < 10) {
            return null;
        }
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.SECRETPRIVATEKEY);
        const user = yield user_1.User.findById(uid);
        if (user) {
            if (user.status) {
                return user;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    catch (error) {
        return null;
    }
});
exports.checkJWT = checkJWT;
//# sourceMappingURL=generate-jwt.js.map