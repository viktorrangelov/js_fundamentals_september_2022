function showPolindromes(givenArray) {
    
    for (let index = 0; index < givenArray.length; index++) {
        let currentInt = givenArray[index];
        let currentString = currentInt.toString();
        let stringtoArr = currentString.split('');
        let revertedArr = stringtoArr.reverse();
        let reversedString = revertedArr.join('')
        if (currentString == reversedString) {
            console.log('true');
        }else{
            console.log('false');
        }
    }
}
showPolindromes([123,323,421,121]);