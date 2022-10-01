function reverse(givenArray) {
    for (let index = 0; index < givenArray.length/2; index++) {
        let temElement = givenArray[index];
        givenArray[index] = givenArray[givenArray.length - 1 - index];
        givenArray[givenArray.length -1 -index] = temElement;
    }
    console.log(givenArray.join(' '));
}

reverse(['a', 'b', 'c', 'd', 'e']);