function battleCounter(givenInfo) {
    let neededExp = givenInfo.shift();
    let battlesNumber =givenInfo.shift();
    let actualBattleNum = 0;
    let gainedExp = 0;

   for (let index = 1; index <= battlesNumber; index++) {
    actualBattleNum = index;
    
   
        if (index % 3 == 0) {
            gainedExp+= givenInfo.shift() *1.15;
        }else if(index % 5 == 0){
            gainedExp+= givenInfo.shift() * 0.9;
        }else if(index % 15 == 0){
            gainedExp +=givenInfo.shift() * 1.05;
        }else{
            gainedExp+= givenInfo.shift();
        }

        if (gainedExp >= neededExp) {
            break;
        }
        
    }
    if (gainedExp >= neededExp) {
        console.log(`Player successfully collected his needed experience for ${actualBattleNum} battles.`);
    }else{
        console.log(`Player was not able to collect the needed experience, ${(neededExp -gainedExp).toFixed(2)} more needed.`);
    }

}

battleCounter([500,5,50,100,200,100,20])