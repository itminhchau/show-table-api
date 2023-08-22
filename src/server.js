import express from 'express'
import bodyParser from 'body-parser'
import initAPIRouter from './routers/api'
import * as dotenv from 'dotenv'
import connection from './config/connectdb.js'
import cors from 'cors'
dotenv.config()


const app = express()
const port = process.env.PORT || 6969
app.use(cors({ credentials: true, origin: true }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))


initAPIRouter(app)
connection()

app.listen(port, () => {
    return console.log("server running on port: ", port)
})