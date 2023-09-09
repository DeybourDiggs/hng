const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  const currentDate = new Date();
  const currentDay = currentDate.toLocaleString("en-us", { weekday: "long" });
  const utcTime = `${currentDate.getUTCFullYear()}-${(
    currentDate.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate
    .getUTCDate()
    .toString()
    .padStart(2, "0")}T${currentDate
    .getUTCHours()
    .toString()
    .padStart(2, "0")}:${currentDate
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")}:${currentDate
    .getUTCSeconds()
    .toString()
    .padStart(2, "0")}Z`;

//   const githubRepoUrl = "https://github.com/DeybourDiggs/hng";
//   const githubFileUrl = `${githubRepoUrl}/blob/main/app.js`;

    const githubFileUrl = 'https://github.com/DeybourDiggs/hng/blob/main/app.js';
    const githubRepoUrl = 'https://github.com/DeybourDiggs/hng'

  const jsonResponse = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
