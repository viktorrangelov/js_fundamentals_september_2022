function validate(password) {
    let validPassword = 'Password is valid';
    let digitsCounter= 0;
    let isLettersAndDigits = false;
    let doesItHaveTwoDigits = false;
    //check password length
    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        validPassword = '';
    }
    //check if it contains only letters and number
    let passwordToArr = password.split('');

    for (let index = 0; index < passwordToArr.length; index++) {
        let currentChar = passwordToArr[index];
        let getAskii = currentChar.charCodeAt();
        let isDigit = getAskii >= 48 && getAskii <= 57;
        let isSmallLetter = getAskii >= 97 && getAskii <= 122;
        let isBigLetter = getAskii >= 65 && getAskii <=90;
        if (isDigit) {
            digitsCounter++;
        }

        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isLettersAndDigits = true;
            
        }
        if (digitsCounter >=2) {
            doesItHaveTwoDigits = true;
            
        }

        
    }
    if (isLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
        validPassword = '';
    }
    if (!doesItHaveTwoDigits) {
        console.log('Password must have at least 2 digits');
        validPassword = '';
    }
    console.log(validPassword);


}
validate('MyPass123');