import express, { response } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import Configuration from '../api/config/Configuration.js'
// import middlewares from './src/middlewares/Middlewares.js'
import UserRoutes from './src/routes/User.routes.js'


dotenv.config()
const app = express()
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('common'))
app.use(express.static("../portfolio/build"))

// app.get('/', (req,res) => {
//    res.send('Welcome!')
// })

UserRoutes.routes(app)
// app.use(middlewares.notFound)
// app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)
Configuration.connectToFrontend(app)

export default app