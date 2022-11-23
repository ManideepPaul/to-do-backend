import * as dotenv from 'dotenv';
import express from "express";
import dbConnection from "./config/db.js";
import routes from './routes/routes.js'

dotenv.config()
const app = express();
dbConnection();

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", routes)

export default app