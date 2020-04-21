
$(function() {
    let form = $("form.needs-validation");

    form.on('submit', function(event) {
        if (form[0].checkValidity() === false) {
            alert("failed validation");
            event.preventDefault();
            event.stopPropagation();
        }
        form[0].classList.add('was-validated');
    });
});

