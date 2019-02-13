$(function () {
    $("#formwrap").submit(function () {
        console.log('testt');
        $("form[id='formwrap']").validate(
            {
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true
                    },
                    cpassword: {
                        required: true,
                        equalTo: password,
                    },
                    condition: "required",
                },
                messages: {
                    name: "Enter your name",
                    email: "Enter your email",
                    password: "Enter your Password",
                    cpassword: "Re-Type your same password",
                    condition: "you must Accept our terms and condition"

                },

                submitHandler: function (form) {
                    form.submit();
                    alert("to form submitted succesfully");
                }
            });
        console.log($('#name').val());
        console.log($('#email').val());
        console.log($('#password').val());
        console.log($('#cpassword').val());
        return false;
    });
});





