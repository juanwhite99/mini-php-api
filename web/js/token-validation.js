function tokenValidation() {
    // validate jwt to verify access
    var jwt = getCookie('jwt');
    var dataFromValidation = {};
    $.post("../api/auth/validate_token.php", JSON.stringify({ jwt:jwt }), function(data) {
        dataFromValidation = data;
    })
    .done(function() {
        console.log('success');
        console.log(dataFromValidation);
        return dataFromValidation;
    })
    .fail(function() {
        console.log('error');
        location.href = "login.html"
    });
}

// get or read cookie
function getCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' '){
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

