import { Request, Response, NextFunction } from 'express'


import bookService from '../services/bookService'
import { IHttpCode, ISuccessResponse } from '../../../interfaces/HttpInterfaces'
import { AppError } from '../../../utils/AppError'
import successHandler from '../../../utils/SuccessResponse'

const createBookController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {title, description} = req.body
        await bookService.createBookService({title,description})
        let successObj: ISuccessResponse = {
            statusCode: 200,
            message: 'Added book successfully.',
    
        }
        successHandler.handleSuccess(successObj, res, req)
    } catch (error: any) {
        console.log(error)
       next(new AppError(
          error.message,
           IHttpCode.NOT_FOUND,
        ))
    }
}


const fetchBookController = async (req: Request, res: Response, next: NextFunction) => {
    try {
     const data = await bookService.fetchBookService()
        let successObj: ISuccessResponse = {
            statusCode: 200,
            message: 'Added book successfully.',
            data
    
        }
        successHandler.handleSuccess(successObj, res, req)
    } catch (error: any) {
        console.log(error)
       next(new AppError(
          error.message,
           IHttpCode.NOT_FOUND,
        ))
    }
}

const updateBookController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const {title, description} = req.body
        await bookService.updateBookService({id: Number(id),title,description})
        let successObj: ISuccessResponse = {
            statusCode: 200,
            message: 'Updated book successfully.',
    
        }
        successHandler.handleSuccess(successObj, res, req)
    } catch (error: any) {
        console.log(error)
       next(new AppError(
          error.message,
           IHttpCode.NOT_FOUND,
        ))
    }
}

const deleteBookController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        await bookService.deleteBookService(Number(id))
        let successObj: ISuccessResponse = {
            statusCode: 200,
            message: 'Deleted book successfully.',
    
        }
        successHandler.handleSuccess(successObj, res, req)
    } catch (error: any) {
        console.log(error)
       next(new AppError(
          error.message,
           IHttpCode.NOT_FOUND,
        ))
    }
}
export default {createBookController, fetchBookController, updateBookController, deleteBookController}

