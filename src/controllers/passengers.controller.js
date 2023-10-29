import passengersService from "../services/passengers.service.js";
import httpStatus from "http-status";

export async function postPassenger(req, res) {
    const { firstName, lastName } = req.body;

    await passengersService.createPassenger(firstName, lastName);
    res.status(httpStatus.CREATED).send("Passenger added :)");
}