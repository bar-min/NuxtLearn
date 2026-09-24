import express from "express";
import cors from "cors"
import usersRouter from "./users.js"

const app = express()

app.use(cors({ origin: "http://localhost:3000" })) // Порт Nuxt
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.use('/api/users', usersRouter)

// Health-check
app.get('api/health', (req, res) => {
    res.json({ ok: true })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Сервер запущен')
})