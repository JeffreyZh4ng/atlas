function registerUser() {
    console.log('TEST');
    var email = $("#email_field");
    var password = $("#password_field");
    var firstName = $("#first_name");
    var lastName = $("#last_name");

    var passwordHash = sha256(password);
    var createDate = new Date();

    var insertQuery = 'INSERT INTO user_login_info VALES (${email}, ${passwordHash}, ${firstName}, ${lastName}, ' +
        '${createDate})';

    connection.query(insertQuery, function (error, results, fields) {
        if (error) {
            throw error;
        }

        console.log('User added to DB!');
    });
}

function userLogin(email, password) {
    var loginQuery = 'SELECT password_hash FROM user_login_info WHERE email=${email}';

    connection.query(loginQuery, function (error, results, fields) {
        if (error) {
            throw error;
        }

        if (results) {
            console.log("An account with this email does not exist!")

        } else {
            var storedHash = results[0];

            if (sha256(password) === storedHash) {
                console.log("Password was correct")
                // TODO: if the password hash matched the one retrieved from the database, log the user in
            } else {
                console.log("Password was wrong")
            }
        }
    });

    connection.end();
}