import { v4 as uuidv4 } from 'uuid';

export const repoSelectPeople = (month) => {
    if (month) {
        console.log(`Soy el repositorio y entregue Personas que  cumplen anios en ${month} mes`);
        return [
            {
                identificador: "12345-6789",
                primernombre: "Adolfomes",
                primerapellido: "Francomes",
                fechadenacimiento: "17/06/1977"
            },
            {
                identificador: "12345-6789",
                primernombre: "Adolfomes",
                primerapellido: "Francomes",
                fechadenacimiento: "17/06/1977"
            }

        ]
    } else {
        console.log("Soy el repositorio y entregue TODAS Personas");
        return [
            {
                identificador: "12345-6789",
                primernombre: "Adolfo",
                primerapellido: "Franco",
                fechadenacimiento: "17/06/1977"
            },
            {
                identificador: "12345-6789",
                primernombre: "Adolfo",
                primerapellido: "Franco",
                fechadenacimiento: "17/06/1977"
            },
            {
                identificador: "12345-6789",
                primernombre: "Adolfo",
                primerapellido: "Franco",
                fechadenacimiento: "17/06/1977"
            }

        ];

    }

}

export const repoSelectPerson = (id) => {
    console.log("Soy el repositorio y entregue una Persona");
    return {
        identificador: id,
        primernombre: "Adolfo",
        primerapellido: "Franco",
        fechadenacimiento: "17/06/1977"

    };
}

export const repoUpdatePerson = (id, person) => {
    console.log(`Soy el repositorio y actualice una Persona ${id}`);
    return {
        identificador: id,
        primernombre: person.primernombre,
        primerapellido: person.primerapellido,
        fechadenacimiento: person.fechadenacimiento
    }
}

export const repoInsertPerson = (person) => {
    const identificador = uuidv4();
    console.log("Soy el repositorio e inserte una Persona");
    return {
        identificador: identificador,
        primernombre: person.primernombre,
        primerapellido: person.primerapellido,
        fechadenacimiento: person.fechadenacimiento
    }
}

export const repoDeletePerson = (id) => {
    
    console.log(`Soy el repositorio y elimine una Persona ${id}`);
    return true;
}
