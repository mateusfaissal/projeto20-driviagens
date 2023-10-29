import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.routes.js"
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config()

const server = express();
server.use(cors());
server.use(express.json());
server.use(router);
server.use(errorHandler)

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Server running on port ${port}`));