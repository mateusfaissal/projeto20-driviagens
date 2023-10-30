import { db } from "../database/db.connection.js";

async function newTravel(passengerId, flightId) {
    return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId]);
}


const travelsRepository = { newTravel } ;

export default travelsRepository;