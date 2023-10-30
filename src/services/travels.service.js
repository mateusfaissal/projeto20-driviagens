import travelsRepository from "../repositories/travels.repository.js";
import passengersRepository from "../repositories/passengers.repository.js";
import flightsRepository from "../repositories/flights.repository.js"

async function createTravel(passengerId, flightId) {
    const validatePassenger = await checkPassengerId(passengerId);
    const validateFlight = await checkFlightId(flightId);

    if (!validatePassenger || !validateFlight) throw { type: "notFound", message: "Invalid passenger or flight" };

    return await travelsRepository.newTravel(passengerId, flightId)
}

async function checkPassengerId(passengerId) {
    const passenger = await passengersRepository.passengerById(passengerId);
    if (passenger) {
        return true;
    }
    return false;
}

async function checkFlightId(flightId) {
    const flight = await flightsRepository.flightById(flightId);
    if (flight) {
        return true;
    }
    return false;
}

async function getTravels(name) {
    return name ? await travelsRepository.getTravelsWithFilter(name) : await travelsRepository.getTravels();
}

const travelsService = { createTravel, getTravels };

export default travelsService;
