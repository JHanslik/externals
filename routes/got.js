const express = require(`express`);
const app = express();
const axios = require("axios");
const got = require("../got.json");

app.get("/json", async (req, res) => {
    const response = got;
    res.json(response);
});

app.get("/url", async (req, res) => {
    const response = await axios.get(
        `https://thronesapi.com/api/v2/Characters`
    );
    res.send(response.data);
});

module.exports = app;
