
$(function() {
    let form = $("form.needs-validation");

    // form.on('submit', function(event) {
    //     if (form[0].checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //     form[0].classList.add('was-validated');
    // });

    form.validate({
        rules: {
            password: {
                minlength: 8
            },
            email: {
                email:true
            },
            password_repeat: {
                equalTo: "#password"
            }
        },
        errorPlacement: function(error, element) {
            console.log(error, element);
        },
        highlight: function(element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function(form) {
            // Here we would want an AJAX submit
            console.log(form);
        }
    });
});

// $(document).ready(function () {

//     $('#contact-form').validate({
//         rules: {
//             name: {
//                 minlength: 2,
//                 required: true
//             },
//             email: {
//                 required: true,
//                 email: true
//             },
//             message: {
//                 minlength: 2,
//                 required: true
//             }
//         },

//         highlight: function (element) {
//             $(element).closest('.control-group').removeClass('success').addClass('error');
//         },
//         success: function (element) {
//             element.text('OK!').addClass('valid')
//                 .closest('.control-group').removeClass('error').addClass('success');
//         }
//     });
//     });