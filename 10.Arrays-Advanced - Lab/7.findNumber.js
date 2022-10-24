function search(givenString,commands) {
    let firstNumbersWetook = commands[0];
    let secondNumbersWeDelete = commands[1];
    let numberWelookfor = commands[2];
    let newString =[];
    let counter = 0;

    for (let index = 0; index < firstNumbersWetook; index++) {
        
        newString.push(givenString.shift());
    }
    for (let j = 0; j < secondNumbersWeDelete; j++) {
        newString.shift();
        
    }
    for (let i = 0; i < newString.length; i++) {
        let currentNum = newString[i];

        if (currentNum == numberWelookfor) {
            counter++;
        }
        
    }
    console.log(`Number ${numberWelookfor} occurs ${counter} times.`);
}

search([5, 2, 3, 4, 1, 6],[5, 2, 3])