function sumNumb(firstNumb,secondNumb) {
    let row = '';
    let sum = 0;
    for (let index = firstNumb; index <= secondNumb; index++) {
        row +=`${index} `;
        sum+=index;
        
    }
    console.log(`${row}`)
    console.log(`Sum: ${sum}`)
}
sumNumb(5,10);