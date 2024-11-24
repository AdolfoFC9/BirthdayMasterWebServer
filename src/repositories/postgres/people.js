import { pool } from './db.js'
import { v4 as uuidv4 } from 'uuid';


export const repoSelectPeople = async (month) => {
    try {
        if (month) {

            //console.log(`Soy el repositorio y entregue Personas que  cumplen anios en ${month} mes`);

            const { rows } = await pool.query('SELECT * FROM "person" WHERE EXTRACT(MONTH FROM fechadenacimiento) = $1', [month]);
            //console.log(rows);

            return rows;

        } else {
            //console.log("Soy el repositorio y entregue TODAS Personas");
            const { rows } = await pool.query('SELECT * FROM "person"');
            //console.log(rows);
            return rows;
        }
    }
    catch (error) {
        return false;
    }

}

export const repoSelectPerson = async (id) => {
    try {
        if (id) {

            const { rows } = await pool.query('SELECT * FROM "person" WHERE identificador = $1', [id]);
            //console.log(rows);

            return rows;

        } else {
            //console.log("Soy el repositorio y entregue TODAS Personas");
            const { rows } = await pool.query('SELECT * FROM "person"');
            //console.log(rows);
            return rows;
        }
    }
    catch (error) {
        return false;
    }
}

export const repoUpdatePerson = async (id, person) => {
    try {
        //console.log(`Soy el repositorio y actualice una Persona ${id}`);
        const { rows } = await pool.query('UPDATE "person" SET primernombre = $2, primerapellido = $3, fechadenacimiento = $4 WHERE identificador = $1 RETURNING identificador, primernombre, primerapellido, fechadenacimiento', [id, person.primernombre, person.primerapellido, person.fechadenacimiento]);
        //console.log (rows);
        return rows[0];
    }
    catch (error) {
        return false;
    }

}

export const repoInsertPerson = async (person) => {
    try {
        const identificador = uuidv4();
        //console.log("Soy el repositorio e inserte una Persona");
        const { rows } = await pool.query('INSERT INTO "person" (identificador, primernombre, primerapellido, fechadenacimiento) VALUES ($1, $2, $3, $4) RETURNING identificador, primernombre, primerapellido, fechadenacimiento', [identificador, person.primernombre, person.primerapellido, person.fechadenacimiento]);
        return rows[0];
    }
    catch (error) {
        return false
    }
}

export const repoDeletePerson = async (id) => {
    try {
        //console.log(`Soy el repositorio y elimine una Persona ${id}`);
        const { rowCount } = await pool.query('DELETE FROM "person" WHERE identificador = $1', [id]);

        return rowCount;
    }
    catch (error) {
        return -1;
    }
}
