import * as dotenv from 'dotenv';
import express from "express";
import dbConnection from "./config/db.js";
import routes from './routes/routes.js';
import cookieParser from 'cookie-parser';

dotenv.config()
const app = express();
dbConnection();

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/", routes)

export default app