"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404Post = void 0;
const error404Post = (req, res) => {
    res.status(404).json({
        msg: 'Error 404 - Page not found'
    });
};
exports.error404Post = error404Post;
//# sourceMappingURL=error-404.js.map