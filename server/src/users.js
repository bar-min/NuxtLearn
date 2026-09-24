import { Router } from "express";
import { pool } from "./db.js";

const router = Router()

// GET api/users - список всех
router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT id, name, name, created_at FROM users ORDER BY id')
        res.json(rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Ошибка БД'})
    }
})

export default router