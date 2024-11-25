# BirthdayMasterWebServer

## .env File configuration

* DB_USER - user of your postgres database server
* DB_HOST - your postgres database host
* DB_PSW - your postgres databese pasword
* DB_DB - your databse name
* DB_PORT - your postgres database host port
* WS_PORT - your webserver port

## Descripción

**Birthday Master** el servidor fue creado con **Node.js** y **Express** e interactúa con una base de datos **Postgre**.

---

## Funcionalidades principales

- **Obtener lista de personas**: Proporciona una lista completa de todas las personas en la base de datos.
- **Consultar cumpleaños por mes**: Filtra las personas según el mes de nacimiento.
- **Administración de personas**: Permite agregar, actualizar y eliminar registros de la base de datos.

---

## Rutas del backend

### Personas
- **GET /people**: devuelve todas las personas en la base de datos.
- **GET /people/:month**: devuelve las personas por mes especifico.
- **POST /person**: agrega un nuevo registro da la base de datos.
- **PUT /person/:id**: actualiza los datos de una persona existente.
- **DELETE /person/:id**: elimina un registro.

---

## Tecnologías y herramientas utilizadas

### Lenguajes y frameworks
- **Node.js**: Entorno de ejecución para el servidor.
- **Express.js**: Framework para manejar rutas y middlewares.

### Base de datos
- **Postgre**: Sistema de gestión de bases de datos relacional.

### Librerías y middlewares
- **pg**: Librería para conectarse y ejecutar consultas en Postgre.
- **Cors**: Manejo de políticas de acceso entre el cliente y el servidor.
- **Morgan**: Middleware para el registro de solicitudes HTTP.
- **Moment.js**: Manipulación y formato de fechas.

Futuras mejoras

    *Agregar autenticación.
    *Paginacion para el manejo de muchos registros.
    *Mejorar el manejo de errores en las solicitudes.
    *Implementacion de Drop-Down para los meses, para mejorar la *experiencia del usuario.
    *Implementar estilos para estandarizar visualmente las paginas (colores, tamaños de fuentes, alineación, etc.)
---
