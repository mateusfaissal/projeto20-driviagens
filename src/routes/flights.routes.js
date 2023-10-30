import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { flightsSchema } from "../schemas/flights.schema.js";
import { postFlights, getFlights } from "../controllers/flights.controller.js";


const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(flightsSchema), postFlights);
flightsRouter.get("/flights", getFlights);

export default flightsRouter;