import express from "express";
import cors from "cors"
import { publicRouter } from "./routes/public-api.route.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import dotenv from 'dotenv'
import { userApiRouter } from "./routes/api.route.js";
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(publicRouter)
app.use(userApiRouter)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

export default app
