const express = require("express");
const router = express.Router();

router.post("/users/new", (req, res) => {
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

module.exports = router;
