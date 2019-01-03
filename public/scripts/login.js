$(document).ready(function () {
    var email = $("#email_field");
    var password = $("#password_field");
    var firstName = $("#first_name");
    var lastName  = $("#last_name");
    $("#register_user").click(registerUser(email, password, firstName, lastName));
});