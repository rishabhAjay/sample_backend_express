 
import { Response, Request } from 'express'
import { IHttpCode, ISuccessResponse } from '../interfaces/HttpInterfaces'

class SuccessResponse {
    public handleSuccess(success: ISuccessResponse, response: Response, request: Request): Response<ISuccessResponse> {
        return response.status(IHttpCode.OK).json({
            success: this.getSuccessResponse(success, request)
        })
    }
    private getSuccessResponse(successResponse: ISuccessResponse, request: Request): ISuccessResponse {
        let successObj: ISuccessResponse = {
            statusCode: successResponse.statusCode || 200,
            message: successResponse.message || 'Success',
            data: successResponse.data,
            path: `${request.protocol}://${request.hostname}${request.originalUrl}`
        }
        return successObj
    }
}

const successHandler = new SuccessResponse()

export default successHandler