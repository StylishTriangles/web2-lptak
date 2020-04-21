$(function() {
    $("form[name='color-form']").validate({
        rules : {
            color: 'required'
        }
    });
});