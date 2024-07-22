import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from './routes/userRoutes.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import errorHandler from './middlewares/errorHandler.js'
import adminRoutes from './routes/adminRoutes.js'

const app = express()
app.use(cors())
dotenv.config()
connectDB()

app.use(express.json())
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cookieParser())
const port = process.env.port

app.use('/api/users', userRouter)
app.use('/api/admin',adminRoutes)
app.use(errorHandler);
app.listen(port, () => {
    console.log(`server started on port ${port}`)
})    