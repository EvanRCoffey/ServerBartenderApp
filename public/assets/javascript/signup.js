function validateForm() {
    var password = $("#password").val().trim()
    var passwordCheck = $("#passwordCheck").val().trim()

    if (password !== passwordCheck) {
        displayErrorMessageNoMatch()
        return false
    }

    if (isOkPass(password)) {
        return true
    }
    else {
        displayErrorMessageNotComplexEnough()
        return false
    }
}

function displayErrorMessageNoMatch() {
    $('form').append('<p class="signUpError">Password does not match. Please Try again.</p>')
}

function displayErrorMessageNotComplexEnough() {
    $('form').append('<p class="signUpError">Password must be 8 or more characters and have 1 lowercase, 1 uppercase, 1 number, and 1 special character.</p>')
}

function isOkPass(p){
    var anUpperCase = /[A-Z]/;
    var aLowerCase = /[a-z]/; 
    var aNumber = /[0-9]/;
    var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    if(p.length < 8){
        return false;
    }

    var numUpper = 0;
    var numLower = 0;
    var numNums = 0;
    var numSpecials = 0;
    for(var i=0; i<p.length; i++){
        if(anUpperCase.test(p[i]))
            numUpper++;
        else if(aLowerCase.test(p[i]))
            numLower++;
        else if(aNumber.test(p[i]))
            numNums++;
        else if(aSpecial.test(p[i]))
            numSpecials++;
    }

    if(numUpper < 1 || numLower < 1 || numNums < 1 || numSpecials <1){
        return false;
    }
    return true;
}