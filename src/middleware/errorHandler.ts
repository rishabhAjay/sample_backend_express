import { Response, Request, NextFunction } from 'express'
import { IErrorResponse, IHttpCode } from '../interfaces/HttpInterfaces'

class ErrorHandler {
    public handleError(error: IErrorResponse, response: Response, request: Request): void {
        response.status(error.httpCode).json({
            error: this.getErrorResponse(error, request)
        })
    }
    private getErrorResponse(errorResponse: IErrorResponse, request: Request): IErrorResponse {
        let errorObj: IErrorResponse = {
            httpCode: errorResponse.httpCode || 404,
            message: errorResponse.message || 'No message',
            path: `${request.protocol}://${request.hostname}${request.originalUrl}`
        }
        return errorObj
    }

}

export const errorHandler = new ErrorHandler()
