import { db } from "../database/db.connection.js";

async function newCity(name) {
    return db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
}

async function cityByName(name) {
    const result = await db.query("SELECT * FROM cities WHERE name = $1", [name]);
    return result.rows[0];
}

async function cityById(id) {
    const result = await db.query("SELECT * FROM cities WHERE id = $1", [id]);
    return result.rows[0];
}


const citiesRepository = { newCity, cityByName, cityById } ;

export default citiesRepository;