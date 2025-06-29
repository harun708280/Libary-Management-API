import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodError } from 'zod'

export const validateRequest =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error) {
    
      if (error instanceof ZodError) {
        const formattedErrors: Record<string, any> = {}

        error.errors.forEach((err) => {
          const path = err.path.join('.')
          formattedErrors[path] = {
            message: err.message,
          }
        })

        return res.status(400).json({
          message: 'Validation failed',
          success: false,
          error: {
            name: 'ValidationError',
            errors: formattedErrors,
          },
        })
      }

      
      next(error)
    }
  }
