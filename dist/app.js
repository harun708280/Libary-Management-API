"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const appRoutes_1 = require("./appRoutes");
const errorHandler_1 = require("./middlewares/errorHandler");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use('/api', appRoutes_1.appRouter);
exports.app.use((req, res) => {
    res.status(404).json({ success: false, message: "Api Not Found" });
});
exports.app.use(errorHandler_1.errorHandler);
