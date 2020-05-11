
function serializeJSON( form ) {
    var obj = {};
    var elements = form.querySelectorAll( "input, select, textarea" );
    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        if( name ) {
            obj[ name ] = value;
        }
    }
    return obj;
}

$(function() {
    let form = $("form.needs-validation");

    form.validate({
        rules: {
            full_name: {
                minlength: 3,
                required: true
            },
            email: {
                email:true,
                required: true
            },
            phone: {
                phoneUS: true
            },
            password: {
                minlength: 8,
                required: true
            },
            password_repeat: {
                equalTo: "#password",
                required: true
            }
        },
        messages: {
            full_name: "Please provide your full name.",
            email: {
                required: "Please provide your e-mail address."
            },
            password: {
                required: "Please create a password to use with this service",
                minlength: jQuery.validator.format("Password must be at least {0} characters long.")
            }
        },
        errorPlacement: function(error, element) {
            $(element).siblings(".invalid-feedback").text($(error).text());
        },
        highlight: function(element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function(submitted_form) {
            // Here we would want an AJAX submit
            var obj = serializeJSON(submitted_form);
            Cookies.set("user", obj);
            alert("You have successfully registered!\nYou can now sign in!");
        }
    });
});
