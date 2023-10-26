import passengersService from "../services/passengers.service.js";

export async function postPassenger(req, res) {
    const { firstName, lastName } = req.body;

    try {
        await passengersService.createPassenger(firstName, lastName);
        res.status(201).send("Passenger added");
    } catch (err) {
        res.status(500).send(err.message);
    }
}