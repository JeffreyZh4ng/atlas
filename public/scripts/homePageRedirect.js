$(document).ready(function () {
    $("#goto_login").click(function () {
        window.location.replace('/login');
    });

    $("#goto_register").click(function () {
        window.location.replace('/login/register');
    });
});