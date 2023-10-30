import { db } from "../database/db.connection.js";

async function newTravel(passengerId, flightId) {
    return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId]);
}

async function getTravels() {
    const query = `
        SELECT
        CONCAT(p."firstName", ' ', p."lastName") AS passenger,
        COALESCE(travels_count.travels, 0) AS travels
    FROM passengers p
    LEFT JOIN (
        SELECT "passengerId", COUNT(*) AS travels
        FROM travels
        GROUP BY "passengerId"
    ) AS travels_count ON p."id" = travels_count."passengerId"
    ORDER BY travels DESC;
    `;

    const res = await db.query(query);
    return res.rows;
}


async function getTravelsWithFilter(name) {

    const searchTerm = `%${name}%`;

    const query = `
        SELECT CONCAT(p."firstName", ' ', p."lastName") AS passenger,
            COUNT(t.id) AS travels
        FROM passengers p
        LEFT JOIN travels t ON p.id = t."passengerId"
        WHERE CONCAT(p."firstName", ' ', p."lastName") ILIKE $1
        GROUP BY passenger
        ORDER BY travels DESC;
    `;

    const res = await db.query(query, [searchTerm]);
    return res.rows;
}




const travelsRepository = { newTravel, getTravels, getTravelsWithFilter };

export default travelsRepository;