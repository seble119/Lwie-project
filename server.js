const express = require("express");
const user_registrationRoutes = require("./src/user_registration/routes");

const app = express();
const port = 3000;

app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is running...");
});


app.use("/api/v1/user_registration", user_registrationRoutes);


app.listen(port, "0.0.0.0", () => {
    console.log(`App listening on http://0.0.0.0:${port}`);
});
