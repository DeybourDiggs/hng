const express = require("express");
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 3000;


app.get('/api',  (req, res) => {
    const {slack_name, track} = req.query;

    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-us',{weekday: 'long'})
    const utcTime = currentDate.toISOString();


    const githubRepoUrl = 'https://github.com/DeybourDiggs/hng.git';
    const githubFileUrl = `${githubRepoUrl}/blob/main/app.js`;

    const jsonResponse ={
        slack_name,
        current_day: currentDay,
        utc_time: utcTime,
        track,
        github_file_url: githubFileUrl,
        github_source_url: githubRepoUrl,
        status_code: 200
    }

    res.json(jsonResponse)

})


app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
});
