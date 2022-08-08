const express = require("express");
const app = express();
const port = 5000;
const gotRoutes = require("./routes/got");

app.use("/got", gotRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
