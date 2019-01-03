var mysql = require("mysql");

// Establish connection to the mysql server
var pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    insecureAuth: false,
});

pool.getConnection((error, connection) => {
    if (error) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (error.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (error.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    if (connection) {
        connection.release();
    }
});

module.exports = pool;