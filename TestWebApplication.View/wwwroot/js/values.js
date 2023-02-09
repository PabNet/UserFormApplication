const signUpFormId = '#signUpForm',
    logInFormId = '#logInForm',
    signUpUrl = '/signUp',
    logInUrl = '/logIn',
    modalId = 'resultModal',
    frontendErrorText = 'Incorrect data! Check entered data, please',
    backendErrorTest = 'Sorry.\nThere were problems on the server',
    registrationSuccessTemplate = 'User is registered\n in the system',
    authorizationSuccessTemplate = 'User named {FullName} is authorized.\nYour phone number is {Mobile}',
    regularExpressions = {
        FullNameCheck: "^[A-Z][a-z]+ [A-Z][a-z]+$",
        PhoneCheck: "^(25|29|33|44)\\d{7}$",
        LoginCheck: "^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$",
        PasswordCheck: "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$"
    };