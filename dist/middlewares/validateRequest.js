"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const zod_1 = require("zod");
const validateRequest = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            const formattedErrors = {};
            error.errors.forEach((err) => {
                const path = err.path.join('.');
                formattedErrors[path] = {
                    message: err.message,
                };
            });
            return res.status(400).json({
                message: 'Validation failed',
                success: false,
                error: {
                    name: 'ValidationError',
                    errors: formattedErrors,
                },
            });
        }
        next(error);
    }
};
exports.validateRequest = validateRequest;
