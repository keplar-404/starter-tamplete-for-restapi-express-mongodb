import express, { json } from "express"
import { home } from './routes'

const app = express()
app.use(json())


app.use('/api', home)
export default app