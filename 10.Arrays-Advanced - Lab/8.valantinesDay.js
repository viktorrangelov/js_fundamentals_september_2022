function cupidone(array) {
    let housesArr = array.shift().split('@').map(Number);
    let currentLine = array.shift().split(' ');

    let index = 0;
    let command = currentLine[0];
    let jumpLength = Number(currentLine[1]);
    while (command != 'Love!') {
        //dobavqme jumplength
        index += jumpLength;
        //proverqvame dali index e poveche on duljinata i go vrushtame na 0
        if (index > housesArr.length - 1) {
            index = 0;
        }
        //proverqvame dali segashnata kushta e bez surca
        if (housesArr[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            if (housesArr[index] != 0) {
                housesArr[index] -= 2;
                if (housesArr[index] <= 0) {
                    console.log(`Place ${index} has Valentine's day.`);
                }
            }

        }





        currentLine = array.shift().split(' ');
        jumpLength = Number(currentLine[1]);
        command = currentLine[0];
    }
    console.log(`Cupid's last position was ${index}.`);
    let newArr = [];
    for (let index = 0; index < housesArr.length; index++) {
        if (housesArr[index] == 0) {
            newArr.push(housesArr[index]);
        }

    }
    if (newArr.length == housesArr.length) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${housesArr.length - newArr.length} places.`);
    }
}


cupidone(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])



