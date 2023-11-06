import express, { Application, NextFunction } from 'express'
import routes from "./routes"
import { PORT } from './config/constants'
import { errorHandler } from './middleware/errorHandler'
import cors from 'cors'

const app: Application = express()


/** Parse the body of the request */
app.use(express.urlencoded({ extended: true }))
app.use(express.json({}))
app.use(cors())
app.use('/api',  routes)

app.listen(PORT, () => {
    console.log('Express server is running on port 4000');
});