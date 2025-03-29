const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Dummy authentication check
    if (username === "admin" && password === "password") {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
