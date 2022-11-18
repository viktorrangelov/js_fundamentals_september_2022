function townInfo(inputInfo) {
    let objectArr = [];
    let townObject = {};
    inputInfo.forEach(line => {
       let currentLine =line.split(' | ');
       let townName= currentLine[0];
       let latitude = Number(currentLine[1]).toFixed(2);
       let longtitute = Number(currentLine[2]).toFixed(2);
       townObject.town = townName;
       townObject.latitude = latitude;
       townObject.longitude = longtitute;
       objectArr.push(townObject);
       townObject = {};
       
    }
     ); 

    for (let index = 0; index < objectArr.length; index++) {
        console.log(objectArr[index]);
        
    }
}

townInfo([
'Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])

