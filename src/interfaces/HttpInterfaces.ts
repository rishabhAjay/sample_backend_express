
enum IHttpCode {
    OK = 200,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOW = 405,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
    DUPLICATE = 1001,
    INPUT_ERROR = 1002,
    NO_DATA = 1003,
    TRANSACTION_FAILED = 1004,
    BAD_TIME_INPUT = 1005,
    ALREADY_PRESENT = 1006,
    OLD_PASSWORD_ENTERED = 1007,
    SAP_QUOTE_ERROR = 1008,
    SAP_CUSTOMER_ERROR = 1009,
    SAP_MASTER_ERROR = 1010
}
interface IAppErrorArgs {
    httpCode?: IHttpCode
    description: string
}
interface ISuccessResponse {
    statusCode: number
    message: string
    data?: [] | {} | null
    path?: string
}

interface IErrorResponse {
    httpCode: number, path: string, message: string

}
export { IHttpCode, IAppErrorArgs, ISuccessResponse ,IErrorResponse}