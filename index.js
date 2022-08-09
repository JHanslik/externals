const express = require("express");
const app = express();
const port = 5000;
const gotRoutes = require("./routes/got");
const pokemonRoutes = require("./routes/pokemon");

app.use("/got", gotRoutes);
app.use("/pokemon", pokemonRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
