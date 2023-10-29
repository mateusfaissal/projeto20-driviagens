import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { flightsSchema } from "../schemas/flights.schema.js";
import { postFlights } from "../controllers/flights.controller.js";


const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(flightsSchema), postFlights);

export default flightsRouter;