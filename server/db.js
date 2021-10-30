const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
    DB_URI = "postgresql:///charity_finder_test";
} else {
    DB_URI = "postgresql:///charity_finder";
}

let db = new Client({
    connectionString: DB_URI,
});

db.connect();
module.exports = db;
