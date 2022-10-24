function partyList(givenList) {
    let guestsList = [];
    for (let index = 0; index < givenList.length; index++) {
        let currentOrder = givenList[index].split(' ');
        let currentGuestName = currentOrder[0];
        let orderLength = currentOrder.length;
        if (orderLength === 3) {
            if (!guestsList.includes(currentGuestName)) {
                guestsList.push(currentGuestName);
            }else{
                console.log(`${currentGuestName} is already in the list!`);
            }
        }else{
            if (guestsList.includes(currentGuestName)) {
                let findTheGuestInList = guestsList.indexOf(currentGuestName)
                guestsList.splice(findTheGuestInList,1)
            }else{
                console.log(`${currentGuestName} is not in the list!`);
            }
        }
    }
    console.log(guestsList.join('\n'));


}

partyList(
['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])