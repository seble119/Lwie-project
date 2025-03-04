const express = require("express");
const cors = require("cors"); // Import CORS middleware
const user_registrationRoutes = require("./src/user_registration/routes");

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.use(express.json());
app.use(cors()); // Enable CORS for all requests

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/v1/user_registration", user_registrationRoutes);

app.listen(port, "0.0.0.0", () => {
    console.log(`App listening on http://0.0.0.0:${port}`);
});
