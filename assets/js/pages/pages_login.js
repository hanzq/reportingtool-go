

var BasePagesLogin = function() {
    // Init Login Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    var initValidationLogin = function(){
        jQuery('.js-validation-login').validate({
            errorClass: 'help-block text-right animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-group .form-material').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error').addClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            rules:
                'login-username': {
                    required: true,
                    minlength: 3
                },
                'login-password': {
                    required: true,
                    minlength: 6
                }
            },
            messages: {
                'login-username': {
                    required: '请输入用户名',
                    minlength: '用户名必须包含3个字符！'
                },
                'login-password': {
                    required: '请输入密码',
                    minlength: '密码长度至少为6！'
                }
            }
        });
    };

    return {
        init: function () {
            // Init Login Form Validation
            initValidationLogin();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BasePagesLogin.init(); });