// sets up express server
const express = require('express');
// invokes server
const app = express();
// imports tasks file
const tasks = require('./routes/tasks');
// imports connectDB function
const connectDB = require('./db/connect');
// brings in env variables
require('dotenv').config();
const notFound = require('./middleware/not-found');

// middleware
app.use(express.static('./public'));
app.use(express.json());


// routes


app.use('/api/v1/tasks', tasks);

app.use(notFound);

const port = 3000;

const start = async () => {
    try {
        // once connected to db then start the server
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()

