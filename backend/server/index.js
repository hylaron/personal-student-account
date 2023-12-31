require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

//Обработка ошибок после Middleware
app.use(errorHandler)
const start = async () => {
    try {
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}\n http://localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()