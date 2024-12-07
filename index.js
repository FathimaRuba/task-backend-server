require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route = require('./Routes/routes')
require('./Connection/db')

const taskServer = express()

taskServer.use(cors())
taskServer.use(express.json())
taskServer.use(route)

const PORT = 3000 || process.env.PORT

taskServer.listen(3000,()=>{
    console.log('Serving running at ',PORT)
})

