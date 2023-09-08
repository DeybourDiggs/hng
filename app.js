const express = require("express");

const app = express();

const PORT = 3000;


app.get('/api',  (req, res) => {
    const {slack_name, track} = req.query;

    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-US', {weekday: 'long'})
    const utcTime = currentDate.toISOString();


    const githubRepoUrl = 'https://github.com/DeybourDiggs/hng';
    const githubFileUrl = `${githubRepoUrl}/blob/main/file_name.ext`;

    const jsonResponse ={
        slack_name,
        current_day: currentDay,
        utc_time: utcTime,
        track,
        github_file_url: githubRepoUrl,
        github_source_url: githubFileUrl,
        status_code: 200
    }

    res.json(jsonResponse)

})


app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
});
