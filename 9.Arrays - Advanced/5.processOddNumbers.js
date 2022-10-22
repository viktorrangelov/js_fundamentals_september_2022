function process(givenArray) {
    let newArray = [];
    let reversedAndDoubled = [];
    for (let index = 0; index < givenArray.length; index++) {
        let currentNumb = givenArray[index];
        if (index % 2 != 0) {
            newArray.push(currentNumb);
        }
        
    }
    for (let j = 0; j < newArray.length; j++) {
        let currentNumb = newArray[j] * 2;
        reversedAndDoubled.push(currentNumb);
        
    }
    let final = reversedAndDoubled.reverse().join(' ');
    console.log(final);
}

process([10, 15, 20, 25]);