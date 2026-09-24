import pg from "pg";
import 'dotenv/config'

export const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

pool.query('SELECT 1')
.then(() => console.log('PostgreSQL подключен'))
.catch(err => {
    console.error('Не удалось подключиться в PostgreSQL')
    console.error(err.message)
    process.exit(1)
})