import { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof mongoose.Error.ValidationError) {
    const formattedErrors: Record<string, any> = {}

    for (const key in err.errors) {
      const validationErrorItem = err.errors[key]

      if (validationErrorItem.name === 'ValidatorError') {
        formattedErrors[key] = {
          message: validationErrorItem.message,
          name: validationErrorItem.name,
          properties: validationErrorItem.properties,
          kind: validationErrorItem.kind,
          path: validationErrorItem.path,
          value: validationErrorItem.value,
        }
      } else {
        formattedErrors[key] = {
          message: validationErrorItem.message,
          name: validationErrorItem.name,
          path: validationErrorItem.path,
          value: validationErrorItem.value,
        }
      }
    }

    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: {
        name: err.name,
        errors: formattedErrors,
      },
    })
    return
  }

  
  res.status(500).json({
    message: err.message || 'Something went wrong',
    success: false,
    error: err,
  })
}
