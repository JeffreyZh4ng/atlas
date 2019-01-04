const bcrypt = require('bcrypt');
const connection = require('./connectionPool');

module.exports.storeUserData = function(email, password, firstName, lastName) {
    let saltCount = 10;
    bcrypt.hash(password, saltCount, function(err, hash) {

        let createDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        let insertQuery = `INSERT INTO user_login_info VALUES (` +
            `'${email}', ` +
            `'${hash}', ` +
            `'${firstName}', ` +
            `'${lastName}', ` +
            `'${createDate}' ` +
        `)`;

        connection.query(insertQuery, function (error, results) {
            if (error) {
                console.error(error);
            }

            console.log('User added to DB!');
        });
    });
};

module.exports.getUserData = function(email, password) {
    var loginQuery = `SELECT password_hash FROM user_login_info WHERE email=${email}`;
    connection.query(loginQuery, function (error, results) {
        if (error) {
            throw error;
        }

        if (results) {
            console.log("An account with this email does not exist!")

        } else {
            let storedHash = results[0];

            bcrypt.compare(password, storedHash, function(err, res) {
                if (res) {
                    console.log("Passwords match!");
                } else {
                    console.log("Passwords don't match!");
                }
            });
        }
    });
};

