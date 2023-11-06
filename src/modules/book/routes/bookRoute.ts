
import express from 'express'
// import cors from 'cors'
import bookController from '../controllers/bookController'

const router = express.Router()

router.get('/', bookController.fetchBookController)
router.post('/', bookController.createBookController)
router.put('/:id', bookController.updateBookController)
router.delete('/:id', bookController.deleteBookController)

export = router

