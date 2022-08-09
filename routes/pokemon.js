const express = require(`express`);
const app = express();
const axios = require("axios");

app.get("/all", async (req, res) => {
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=905`
    );

    res.json(response.data.results);
});
app.get("/:id", async (req, res) => {
    if (req.params.id <= 905) {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
        );
        res.json(response.data);
    } else {
        res.json("No pokemon here");
    }
});

module.exports = app;
