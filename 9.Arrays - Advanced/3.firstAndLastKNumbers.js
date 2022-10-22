function firstAndLastK(givenArray) {
    let numberToshow = givenArray.shift();
    let arrayLenght = givenArray.length;
    let firstKNumbers = givenArray.slice(0,numberToshow);
    let lastKNumbers = givenArray.slice(arrayLenght -numberToshow,arrayLenght );
    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));
}   

firstAndLastK([3, 6, 7, 8, 9]);