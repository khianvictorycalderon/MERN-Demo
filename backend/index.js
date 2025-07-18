const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
const PORT = 3000;

// Tries to connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const apiRouter = require("./routes/user");
app.use("/api", apiRouter);

// Root route
app.get("/", (_, res) => {
    res.send("Index");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
