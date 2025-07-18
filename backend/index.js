const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Redirect all to /api routes
const apiRouter = express.Router();

app.get("/", (_, res) => {
    res.send("Index");
});

apiRouter.post("/users/new", (req, res) => {
    if (parseInt(req.body.age) < 18) {
        res.status(201).json({
            message: "Success, but minor (from server)",
            type: "warning"
        });
    } else {
        res.status(201).json({
            message: "Success (from server)",
            type: "success"
        });
    }
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});