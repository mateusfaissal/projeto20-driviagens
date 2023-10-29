import citiesService from "../services/cities.service.js";
import httpStatus from "http-status";

export async function postCities(req, res) {
    const { name } = req.body;

    await citiesService.createCity(name);
    res.status(httpStatus.CREATED).send("City added :)");
}