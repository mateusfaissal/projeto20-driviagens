import citiesRepository from "../repositories/cities.repository.js";

import flightsRepository from "../repositories/flights.repository.js";

async function createFlight(origin, destination, date) {
    const validateOrigin = await checkOrigin(origin);
    const validateDestination = await checkOrigin(destination);

    if (!validateOrigin || !validateDestination) throw { type: "notFound", message: "Invalid city id" };

    if (origin === destination) throw { type: "conflict", message: "Origin and destination have to be different" };

    const correctDate = date.split("-").reverse().join("-");

    if (new Date(correctDate) < new Date()) throw { type: "unprocessable", message: "Wrong date" };

    return await flightsRepository.newFlight(origin, destination, correctDate);
}

async function checkOrigin(cityId) {
    const city = await citiesRepository.cityById(cityId);
    if (city) {
        return true;
    }
    return false;
}

async function getFlight(origin, destination) {
    return await flightsRepository.getAllFlights(origin, destination);
}

const flightsService = { createFlight, getFlight };

export default flightsService;