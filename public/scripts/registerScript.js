$(document).ready(function () {
    $("#register_user").click(function () {
        let data = {
            email_field: $("#email_field").val(),
            password_field: $("#password_field").val(),
            first_name: $("#first_name").val(),
            last_name: $("#last_name").val()
        };

        $.ajax({
            url: "/login/register/submit",
            type: "POST",
            data: data,
            success: function (result) {
                console.log(result)
            },

            error: function (error) {
                console.log(error)
            }
        });
    });

    $("#login_user").click(function () {
          let data = {
            email_field: $("#login_email_field").val(),
            password_field: $("#login_password_field").val(),
        };

        $.ajax({
            url: "/login/submit",
            type: "POST",
            data: data,
            success: function (result) {
                console.log(result)
            },

            error: function (error) {
                console.log(error)
            }
        });
    });
});