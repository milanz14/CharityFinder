const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

// routes --> separate file for Goole auth routes

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
    res.render("login");
});

app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404);
    return next(e);
});

app.use((err, req, res, next) => {
    res.status(err.status || 404);
    return res.json({
        error: err.message,
        status: err.status,
    });
});

module.exports = { app, PORT };
