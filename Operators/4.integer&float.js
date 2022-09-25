function solve(firstNumb,secondNumb,thirdNumb) {
    let sum = firstNumb + secondNumb +thirdNumb;
    sum % 1 === 0? sum += ' - Integer': sum += ' - Float';
    console.log(sum);
}

solve(9, 100, 1.1)