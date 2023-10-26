import { db } from "../database/db.connection.js";

async function newPassenger(firstName, lastName) {
    return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName]);
}

const passengersRepository = { newPassenger } ;

export default passengersRepository;