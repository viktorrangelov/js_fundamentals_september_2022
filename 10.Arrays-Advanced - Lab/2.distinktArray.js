function distinct(givenArray) {
    let newArr = [];

    for (let index = 0; index < givenArray.length; index++) {
        if (!newArr.includes(givenArray[index])) {
            newArr.push(givenArray[index]);
        }
        
    }
    console.log(newArr.join(' '));


}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])