function trainLoad(givenArray) {
    let currentLoad = givenArray.shift().split(' ').map(Number);
    let maxWagonCapacity = Number(givenArray.shift());


    for (let index = 0; index < givenArray.length; index++) {



        let makeArr = givenArray[index].split(' ')

        let isAdd = makeArr[0];
        let getPassangerNumber = Number(makeArr[0])
        if (isAdd === 'Add') {
            currentLoad.push(Number(makeArr[1]))
        } else {
            for (let j = 0; j < currentLoad.length; j++) {

                if (currentLoad[j] + getPassangerNumber <= maxWagonCapacity) {
                    currentLoad[j] += getPassangerNumber;
                    break;

                }

            }
        }
    }
    console.log(currentLoad.join(' '));
}
    






    trainLoad(['32 54 21 12 4 0 23',

        '75',

        'Add 10',

        'Add 0',

        '30',

        '10',

        '75'])