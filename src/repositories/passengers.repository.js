import { db } from "../database/db.connection.js";

async function newPassenger(firstName, lastName) {
    return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName]);
}

async function passengerById(id) {
    const result = await db.query("SELECT * FROM passengers WHERE id = $1", [id]);
    return result.rows[0];
}

const passengersRepository = { newPassenger, passengerById };

export default passengersRepository;