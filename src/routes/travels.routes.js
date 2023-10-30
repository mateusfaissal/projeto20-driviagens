import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { travelsSchema } from "../schemas/travels.schema.js";
import { postTravel } from "../controllers/travels.controller.js";


const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(travelsSchema), postTravel);

export default travelsRouter;