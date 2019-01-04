var connection = require('./connectionPool');

module.exports.storeUserData = function(email, password, firstName, lastName) {
    var createDate = new Date();
    var insertQuery = 'INSERT INTO user_login_info VALES (${email}, ${password}, ${firstName}, ${lastName}, ${createDate})';

    connection.query(insertQuery, function (error, results) {
        if (error) {
            throw error;
        }

        console.log('User added to DB!');
        connection.release();
    });
};

module.exports.getUserData = function(email, password) {
    var loginQuery = 'SELECT password_hash FROM user_login_info WHERE email=${email}';

    connection.query(loginQuery, function (error, results) {
        if (error) {
            throw error;
        }

        if (results) {
            console.log("An account with this email does not exist!")

        } else {
            var storedHash = results[0];

            if (password === storedHash) {
                console.log("Password was correct");
                // TODO: if the password hash matched the one retrieved from the database, log the user in
            } else {
                console.log("Password was wrong");
            }
        }
    });

    connection.release();
};

