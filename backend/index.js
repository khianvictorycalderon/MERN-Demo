const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

// Root route
app.get("/", (_, res) => {
    res.send("Index");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
