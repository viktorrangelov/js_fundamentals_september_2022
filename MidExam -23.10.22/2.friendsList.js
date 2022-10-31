function printFriendList(arrayOfFriends) {
    let friendsList = arrayOfFriends.shift().split(', ')
    let commandAndName = arrayOfFriends.shift().split(' ');
    let command = commandAndName[0];
    let friendName = commandAndName[1];
    let forChange = commandAndName[2];
    let lostCounter = 0;
    let blacklistCounter = 0;

    while (command != 'Report') {
        if (command == 'Blacklist') {
            let index = friendsList.indexOf(friendName);
            if (index > -1) {
                blacklistCounter++;
                console.log(`${friendName} was blacklisted.`);
                friendsList.splice(index,1,'Blacklisted');
            }else{
                console.log(`${friendName} was not found.`);
            }}

        if (command == 'Error') {
            let index = Number(commandAndName[1]);
            if (index >= 0 && index < friendsList.length && friendsList[index] != 'Blacklisted' && friendsList[index] != 'Lost') {
                lostCounter++;
                console.log(`${friendsList[index]} was lost due to an error.`); 
               friendsList.splice(index,1,'Lost')
            }
        }
        if (command == 'Change') {
            let index = Number(friendName);
            if (index >= 0 && index < friendsList.length) {
                console.log(`${friendsList[index]} changed his username to ${forChange}.`);
                friendsList.splice(index,1,forChange)
            }
        }

        
    commandAndName = arrayOfFriends.shift().split(' ');
    command = commandAndName[0];
    friendName = commandAndName[1];
    forChange = commandAndName[2];
    }
    console.log(`Blacklisted names: ${blacklistCounter}`);
    console.log(`Lost names: ${lostCounter}`);
    console.log(friendsList.join(' '));

}

printFriendList(['Mike, John, Eddie, William','Error 3','Error 3','Change 0 Mike123','Report'])