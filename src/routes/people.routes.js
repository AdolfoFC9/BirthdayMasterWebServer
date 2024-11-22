import Router from 'express';
import { deletePerson, getPeople, getPeopleByBirthdayMonth, getPersonById, savePerson, updatePerson} from '../controllers/people.controller.js';

const peopleRoutes = Router();

peopleRoutes.get("/people", getPeople);

peopleRoutes.get("/people/:month", getPeopleByBirthdayMonth);

peopleRoutes.get("/person/:id", getPersonById);

peopleRoutes.post("/person", savePerson);

peopleRoutes.put("/person/:id", updatePerson);

peopleRoutes.delete("/person/:id", deletePerson);

export default peopleRoutes;