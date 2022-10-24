function  sort(givenArray) {
    
    givenArray.sort((a,b) => a-b);
    let newArr = [];
    let arrayLength = givenArray.length;
    let index = arrayLength/2;
    while (index > 0) {
        newArr.push(givenArray.pop())
        newArr.push(givenArray.shift())
        index--;

    }
    console.log(newArr.join(' '));
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 95])