const express = require("express");

const app = express();

const PORT = 3000;


app.get('/api',  (req, res) => {
    const {slack_name, track} = req.query;

    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-US', {weekday: 'long'})
    const utcTime = currentDate.toISOString()

})


app.listen(PORT);
