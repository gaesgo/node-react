import express, { response } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import Configuration from '../api/config/Configuration.js'
import middlewares from './src/middlewares/Middlewares.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(helmet())
app.use(morgan('common'))

app.get('/', (req,res) => {
    res.send('Welcome!')
})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)