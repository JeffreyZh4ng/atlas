$(document).ready(function () {
    $("#register_user").click(function () {
        $.ajax({
            url: "/login/register/submit",
            type: "POST",
            success: function (result) {
                console.log(result)
            },

            error: function (error) {
                console.log(error)
            }
        })
    })
});