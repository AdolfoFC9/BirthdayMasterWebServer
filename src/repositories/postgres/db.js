import pg from 'pg'
export const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PSW,
    database: process.env.DB_DB,
    port: process.env.DB_PORT
})