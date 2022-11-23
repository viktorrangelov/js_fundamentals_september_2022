function meetingsList(input) {
    let finalList = {};
    input.forEach(line => {
        [weekDay, person] = line.split(' ');

        if (finalList.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        }else{
            console.log(`Scheduled for ${weekDay}`);
            finalList[weekDay] = person;
        }
    });

    for (const key in finalList) {
       console.log(`${key} -> ${finalList[key]}`);
            
        }
    }
    


meetingsList([
'Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])