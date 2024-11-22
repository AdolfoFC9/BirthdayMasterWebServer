import {
    repoDeletePerson, repoInsertPerson, repoSelectPeople, repoSelectPerson, repoUpdatePerson
} from '../repositories/postgres/people.js';

import moment from 'moment';

export const getPeople = async (req, res) => {
    const people = await repoSelectPeople();
    if (!people)
        return res.sendStatus(500);
    return res.status(200).json(people);
};

export const getPeopleByBirthdayMonth = async (req, res) => {
    const { month } = req.params;
    const floatMonth = parseFloat(month);

    if (
        isNaN(floatMonth) ||
        floatMonth < 1 ||
        floatMonth > 12 ||
        floatMonth % 1 !== 0

    ) {
        return res.status(400).json({ respuesta: `Seleccionaste un mes invalido (${month})` });
    }
    const people = await repoSelectPeople(month);
    if (!people)
        return res.sendStatus(500);
    return res.status(200).json(people);

};

export const getPersonById = async (req, res) => {
    const { id } = req.params;
    const person = await repoSelectPerson(id);
    if (!person)
        return res.sendStatus(500);
    return res.status(200).json(person);
};

export const savePerson = async (req, res) => {
    
    const data = req.body;
    console.log(data);

    if (!data.fechadenacimiento || !data.primernombre || !data.primerapellido) return res.status(400).json({ message: "El Primer Nombre, el Primer Apellido y lafecha de nacimiento son requeridos." });

    if (data.primernombre.length > 50 || data.primerapellido.length > 50) {
        return res.status(400).json({ message: "El nombre o el apellido exceden el tamano maximo (50)" });
    }
    if (data.primernombre.length == 0 || data.primerapellido.length == 0) {
        return res.status(400).json({ message: "El nombre y el apellido son requeridos" });
    }
    
    const fecha = moment(data?.fechadenacimiento);
    
    if (fecha.toString() != "Invalid date") {
        const person = await repoInsertPerson(data);
        if (!person)
            return res.sendStatus(500);
        return res.status(200).json({ person });
    } else {
        return res.status(400).json({ message: "La fecha ingresada es invalida.  El formato aceptado es YYYY-MM-DD" });
    }

};

export const updatePerson = async (req, res) => {
    const data = req.body;
    const { id } = req.params;

    if (!data.fechadenacimiento || !data.primernombre || !data.primerapellido) return res.status(400).json({ message: "El Primer Nombre, el Primer Apellido y lafecha de nacimiento son requeridos." });

    if (data.primernombre.length > 50 || data.primerapellido.length > 50) {
        return res.status(400).json({ message: "El nombre o el apellido exceden el tamano maximo (50)" });
    }
    if (data.primernombre.length == 0 || data.primerapellido.length == 0) {
        return res.status(400).json({ message: "El nombre y el apellido son requeridos" });
    }
    
    const fecha = moment(data?.fechadenacimiento);
    console.log(fecha);
    console.log(data.fechadenacimiento);
    if (fecha.toString() != "Invalid date") {
        const person = await repoUpdatePerson(id, data);
        if (!person)
            return res.sendStatus(500);
        return res.status(200).json({ person });
    } else {
        return res.status(400).json({ message: "La fecha ingresada es invalida.  El formato aceptado es YYYY-MM-DD" });
    }
};

export const deletePerson = async (req, res) => {
    const { id } = req.params;
    const result = await repoDeletePerson(id);
    if (result > 0) return res.sendStatus(204);
    if (result == 0) return res.sendStatus(404);
    if (result == -1)
        return res.sendStatus(500);
};