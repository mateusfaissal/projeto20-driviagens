import { db } from "../database/db.connection.js";

async function newFlight(origin, destination, date) {
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
}

async function flightById(id) {
    const result = await db.query("SELECT * FROM flights WHERE id = $1", [id]);
    return result.rows[0];
}

async function getAllFlights(origin, destination) {
    const conditions = [];
    const values = [];

    if (origin) {
        conditions.push(`ori.name = $${values.length + 1}`);
        values.push(origin);
    }

    if (destination) {
        conditions.push(`dest.name = $${values.length + 1}`);
        values.push(destination);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const query = `
        SELECT 
            f.id, 
            ori.name AS origin, 
            dest.name AS destination, 
            TO_CHAR(f.date, 'DD-MM-YYYY') AS date
        FROM 
            flights f
        JOIN 
            cities ori ON f.origin = ori.id
        JOIN 
            cities dest ON f.destination = dest.id
        ${whereClause}
        ORDER BY f.date
    `;

    const result = await db.query(query, values);
    return result.rows;
}


const flightsRepository = { newFlight, flightById, getAllFlights };

export default flightsRepository;