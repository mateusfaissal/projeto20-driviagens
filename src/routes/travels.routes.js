import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { travelsSchema } from "../schemas/travels.schema.js";
import { postTravel, getTravels } from "../controllers/travels.controller.js";


const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(travelsSchema), postTravel);
travelsRouter.get("/passengers/travels", getTravels);

export default travelsRouter;