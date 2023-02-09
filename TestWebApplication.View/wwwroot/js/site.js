$(document).ready(() => {
    
    function sendFormToServer(url, data)
    {
        $.ajax({
            type: 'post',
            url: url, 
            async: false,
            data: data.serialize(),
            success: function (data) {
                processSuccessResult(data);
            },
            error:  function () {
                processErrorResult();
            },
        });
    }
    
    function processModalFields(titleColor, titleText, message) {
        $('#resultTitle').css('color', titleColor).text(titleText);
        $('#resultMessage').text(message);
        
        showModal();
    }

    function processSuccessResult(successData) {
        let json = JSON.parse(successData);
        if(json.ResultCode !== undefined) {
            let resultCode = Number(json.ResultCode);
            if(resultCode > 0) {
                processModalFields('green', 'Success', registrationSuccessTemplate);
            } else {
                processModalFields('red', 'Error', json.ResultMessage);
            }
        } else {
            processModalFields('green', 'Success',
                authorizationSuccessTemplate.replace('{FullName}', `${json.FirstName} ${json.LastName}` ).replace('{Mobile}', json.Mobile));   
        }
    }

    function processErrorResult() {
        processModalFields('red', 'Error', backendErrorTest);
    }
    
    function showModal() {
        new bootstrap.Modal(document.getElementById(modalId)).show();
        $("input").val('');
    }
    
    function isSignUpFormValid() {
        let isValid = false;

        if($("#signupName").val().match(regularExpressions.FullNameCheck) != null &&
            $("#signupMobile").val().match(regularExpressions.PhoneCheck) != null &&
            $("#signupLogin").val().match(regularExpressions.LoginCheck) != null &&
            $("#signupPassword").val().match(regularExpressions.PasswordCheck) != null) {
            isValid = true;
        }
        
        return isValid;
    }
    
    function isLogInFormValid() {
        let isValid = false;

        if($("#loginLogin").val().match(regularExpressions.LoginCheck) != null &&
            $("#loginPassword").val().match(regularExpressions.PasswordCheck) != null) {
            isValid = true;
        }

        return isValid;
    }
    
    function isFormValid(formId) {
        let validFunction;
        switch(formId) {
            case signUpFormId: {
                validFunction = isSignUpFormValid;
                
                break;
            }
            case logInFormId: {
                validFunction = isLogInFormValid;
                
                break;
            }
        }
        
        return validFunction();
    }
    
    function processSubmitClick(formId, url) {
        if(isFormValid(formId)) {
            sendFormToServer(url, $(formId));
        } else {
            processErrorResult(frontendErrorText);
        }
    }
    
     $(signUpFormId).submit( (event) => {
         event.preventDefault();
         processSubmitClick(signUpFormId, signUpUrl);
    });    

    $(logInFormId).submit( (event) => {
        event.preventDefault();
        processSubmitClick(logInFormId, logInUrl);
    });
        
});