"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const errorHandler = (err, req, res, next) => {
    if (err instanceof mongoose_1.default.Error.ValidationError) {
        const formattedErrors = {};
        for (const key in err.errors) {
            const validationErrorItem = err.errors[key];
            if (validationErrorItem.name === 'ValidatorError') {
                formattedErrors[key] = {
                    message: validationErrorItem.message,
                    name: validationErrorItem.name,
                    properties: validationErrorItem.properties,
                    kind: validationErrorItem.kind,
                    path: validationErrorItem.path,
                    value: validationErrorItem.value,
                };
            }
            else {
                formattedErrors[key] = {
                    message: validationErrorItem.message,
                    name: validationErrorItem.name,
                    path: validationErrorItem.path,
                    value: validationErrorItem.value,
                };
            }
        }
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: {
                name: err.name,
                errors: formattedErrors,
            },
        });
        return;
    }
    res.status(500).json({
        message: err.message || 'Something went wrong',
        success: false,
        error: err,
    });
};
exports.errorHandler = errorHandler;
