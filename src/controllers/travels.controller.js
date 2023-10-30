import travelsService from "../services/travels.service.js";
import httpStatus from "http-status";

export async function postTravel(req, res) {
    const { passengerId, flightId } = req.body;
    
    await travelsService.createTravel(passengerId, flightId);
    res.status(httpStatus.CREATED).send("Travel created!");
}