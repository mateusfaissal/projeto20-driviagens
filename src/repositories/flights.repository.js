import { db } from "../database/db.connection.js";

async function newFlight(origin, destination, date) {
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
}

async function flightById(id) {
    const result = await db.query("SELECT * FROM flights WHERE id = $1", [id]);
    return result.rows[0];
}

const flightsRepository = { newFlight, flightById} ;

export default flightsRepository;