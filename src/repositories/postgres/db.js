import pg from 'pg'
export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "",
    database: "birthdaymaster",
    port: "5432"
})