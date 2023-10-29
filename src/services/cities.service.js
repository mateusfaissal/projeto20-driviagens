import citiesRepository from "../repositories/cities.repository.js";

async function createCity(name) {
    const city = await citiesRepository.cityByName(name);
    if (city) throw {type: "conflict", message: "City already registered"};
    return await citiesRepository.newCity(name);
}

const citiesService = { createCity };

export default citiesService;