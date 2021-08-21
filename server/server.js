// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

// use dependencies
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Mock data for frontend
const timezones = [
    {
        name: 'Japan',
        region: 'Asia/Tokyo',
    },
    {
        name: 'Current timezone',
        region: '',
    }
]

// Routes
app.get('/', (req, res) => {
    res.status(200).send(timezones);
});

// listen on the port
app.listen(port, () => {
    console.log(`Clock challenge listening at http://localhost:${port}`);
});

module.exports = app;