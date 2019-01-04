var mysql = require("mysql");

// Establish connection to the mysql server
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    insecureAuth: false,
});

connection.connect((error) => {
    if (error) {
        console.error(error);
    }
});

module.exports = connection;