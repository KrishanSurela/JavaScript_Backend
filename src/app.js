import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"18kb"})) //middleware configure for form data
app.use(express.urlencoded({extended:true,limit:"18kb"})) // middleware configure for url data
app.use(express.static("public"))// middleware configure for files and folder
app.use(cookieParser())

export { app }