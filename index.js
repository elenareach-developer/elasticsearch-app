const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/db');
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use('/api/stations/', require('./routes/stationsRoutes'))


app.listen(port, async () =>
{
    try
    {

        await connectDB();

        console.log(`Starting server on port ${port}`)
    } catch (error)
    {
        console.log("error")
    }
});