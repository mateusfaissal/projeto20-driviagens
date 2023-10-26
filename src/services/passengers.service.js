import passengersRepository from "../repositories/passengers.repository.js";

async function createPassenger(firstName, lastName) {
    return await passengersRepository.newPassenger(firstName, lastName);
}

const passengersService = { createPassenger };

export default passengersService;