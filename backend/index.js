const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
    res.send("Index")
})

app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});