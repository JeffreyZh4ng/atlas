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
        })
    })
});