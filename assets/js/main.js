$(document).ready(function() {
    // SHOW/HIDE PASSWORD 
    const LoginpasswordInput = document.getElementsByClassName('LoginpasswordInput');
    const input_password_shower = document.getElementsByClassName('input_password_shower');

    for (let i = 0; i < LoginpasswordInput.length; i++) {
        $(LoginpasswordInput[i]).keydown(function() {
            if ($(LoginpasswordInput[i]).val() != "" || $(LoginpasswordInput[i]).val() === null) {

                $(input_password_shower[i]).css({
                    'bottom': '15px',
                    'opacity': '1',
                    'visibility': 'visible'
                })
            } else {
                $(LoginpasswordInput[i]).val(null)
                $(input_password_shower[i]).css({
                    'bottom': '-17px',
                    'opacity': '0',
                    'visibility': 'hidden'
                })
            }
        })

        $(input_password_shower[i]).click(function() {
            $(input_password_shower[i]).toggleClass('fa-eye-slash')
            if (LoginpasswordInput[i].type == "password") {
                LoginpasswordInput[i].type = "text"
            } else {
                LoginpasswordInput[i].type = "password"
            }
        })
    }


    // VALIDATE FORM =========================

    // validate user name field 
    $('#auth_usernameInput').blur(function() {
        if ($('#auth_usernameInput').val().length < 4) {
            $('#usernameError').text('نام کاربری حداقل باید شامل 4 کاراکتر باشد')
            $('#usernameError').css({
                'visibility': 'visible',
            })
            $('#usernameLine').css({
                'background-color': '#8b0000',
            })

        } else {
            $('#usernameError').css({
                'visibility': 'hidden',
            })
            $('#usernameLine').css({
                'background-color': '#333'
            })
        }
    })

    $('#loginForm').submit(function() {
        if ($('#auth_usernameInput').val().length < 4) {
            return false;
        } else {
            return true;
        }
    })


    // validate email field 
    $('#auth_emailInput').blur(function() {
        if ($('#auth_emailInput').val().length < 6) {
            $('#emailError').text('ایمیل حداقل باید شامل 6 کاراکتر باشد')
            $('#emailError').css({
                'visibility': 'visible',
            })
            $('#email_line').css({
                'background-color': '#8b0000',
            })

        } else {
            $('#emailError').css({
                'visibility': 'hidden',
            })
            $('#email_line').css({
                'background-color': '#333'
            })
        }
    })

    $('#loginForm').submit(function() {
        if ($('#auth_emailInput').val().length < 6) {
            return false;
        } else {
            return true;
        }
    })

    // validate pass field 
    $('#auth_passInput').blur(function() {
        if ($('#auth_passInput').val().length < 8) {
            $('#passError').text('رمز عبور باید حداقل شامل 8 کرکتر باشد')
            $('#passError').css({
                'visibility': 'visible',
            })
            $('#passLine').css({
                'background-color': '#8b0000',
            })

        } else {
            $('#passError').css({
                'visibility': 'hidden',
            })
            $('#passLine').css({
                'background-color': '#333'
            })
        }
    })

    $('#loginForm').submit(function() {
        if ($('#auth_passInput').val().length < 8) {
            return false;
        } else {
            return true;
        }
    })

    // validate repass field 
    $('#auth_repassInput').blur(function() {
        if ($('#auth_passInput').val() != $('#auth_repassInput').val()) {
            $('#repassError').text('رمز عبور شما با تکرار ان یکسان نمی باشد')
            $('#repassError').css({
                'visibility': 'visible',
            })
            $('#repassLine').css({
                'background-color': '#8b0000',
            })

        } else {
            $('#repassError').css({
                'visibility': 'hidden',
            })
            $('#repassLine').css({
                'background-color': '#333'
            })
        }
    })

    $('#loginForm').submit(function() {
        if ($('#auth_passInput').val() != $('#auth_repassInput').val()) {
            return false;
        } else {
            return true;
        }
    })
});