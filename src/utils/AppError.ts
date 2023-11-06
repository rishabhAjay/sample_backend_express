import { IAppErrorArgs, IHttpCode } from "../interfaces/HttpInterfaces"


export class AppError extends Error {
    public readonly httpCode: IHttpCode
    public readonly description?: string

    constructor(description: string, httpCode?: number) {
        super(description)

        Object.setPrototypeOf(this, new.target.prototype)
        this.httpCode = httpCode || 404
        this.description = description
    }
}

