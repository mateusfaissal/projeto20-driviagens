import { db } from "../database/db.connection.js";

async function newFlight(origin, destination, date) {
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
}

const flightsRepository = { newFlight } ;

export default flightsRepository;