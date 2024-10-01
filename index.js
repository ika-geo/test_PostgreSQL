const express = require('express')
const mainRouter = require("./route/mainRouter");
const app = express()
const cors = require('cors')


const corsOption = {
    origin: '*',
    methods: '*',
    credentials: true,
}

app.use(express.json());
app.use(cors(corsOption));


app.use('/api', mainRouter)

app.listen(5000)