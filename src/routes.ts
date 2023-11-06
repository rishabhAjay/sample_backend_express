
import express, { Request, Response, NextFunction } from 'express'
// import cors from 'cors'
import bookRoute from "../src/modules/book/routes/bookRoute"
import { IAppErrorArgs, IErrorResponse, IHttpCode } from './interfaces/HttpInterfaces'
import { AppError } from './utils/AppError'
import { errorHandler } from './middleware/errorHandler'

const router = express()
/** Rules of our API */
router.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    const allowedMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    if (!allowedMethods.includes(req.method))
        throw new AppError(
    'Method not allowed.',
   IHttpCode.METHOD_NOT_ALLOW,
        )
    next()
})


router.use('/book', bookRoute)

router.use((err: IErrorResponse, req: Request, res: Response, next: NextFunction) => {
    errorHandler.handleError(err,res, req)
})


export = router

