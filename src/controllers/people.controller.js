import {
    repoDeletePerson, repoInsertPerson, repoSelectPeople, repoSelectPerson, repoUpdatePerson
} from '../repositories/postgres/people.js';

export const getPeople = (req, res) => {
    const people = repoSelectPeople();
    return res.status(200).json(people);
};

export const getPeopleByBirthdayMonth = (req, res) => {
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
    const people = repoSelectPeople(month);
    return res.status(200).json(people);

};

export const getPersonById = (req, res) => {
    const { id } = req.params;
    const person = repoSelectPerson(id);
    return res.status(200).json(person);
};

export const savePerson = (req, res) => {
    const data = req.body;
    const person = repoInsertPerson(data);
    return res.status(200).json(person);
};

export const updatePerson = async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const person = repoUpdatePerson(id, data);
    
    return res.status(200).json(person);
};

export const deletePerson = (req, res) => {
    const { id } = req.params;
    repoDeletePerson(id);
    return res.sendStatus(204);
};