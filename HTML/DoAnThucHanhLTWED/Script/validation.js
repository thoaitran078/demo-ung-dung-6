$(function() {
    $("form[name='registration']").validate({
        rules: {
        name:"required",
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 5
        },
        phone:{
            required: true,
            minlength: 11
        },
        },
        
        messages: {
            name: "Please enter your name",
            password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
            },
            phone:{
            required: "Please provide phone number",
            minlength: "Your password must be at least 11 characters long"
            },
            email: "Please enter a valid email address"
        },
    submitHandler: function(form) {
        form.submit();
    }
    });
});