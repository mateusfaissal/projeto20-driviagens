import flightsService from "../services/flights.service.js";
import httpStatus from "http-status";

export async function postFlights(req, res) {
    const { origin, destination, date } = req.body;

    await flightsService.createFlight(origin, destination, date);
    res.status(httpStatus.CREATED).send("Flight created :)");
}

export async function getFlights(req, res) {
    const { origin, destination } = req.query;

    const allFlights = await flightsService.getFlight(origin, destination);
    res.status(httpStatus.OK).send(allFlights)
}