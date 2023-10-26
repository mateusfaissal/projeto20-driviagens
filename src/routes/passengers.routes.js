import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passengersSchema } from "../schemas/passengers.schema.js";
import { postPassenger } from "../controllers/passengers.controller.js";


const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengersSchema), postPassenger);

export default passengersRouter;