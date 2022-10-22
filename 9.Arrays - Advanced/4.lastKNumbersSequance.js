function giveMestring(length, kElementsToSum) {
    let newArray = [1];
    for (let i = 1; i < length; i++) {
       let index = Math.max(newArray.length -kElementsToSum, 0);
       let lastElements = newArray.slice(index);
       let sum = 0;

       for (const el of lastElements) {
         sum += el;
       }
       newArray.push(sum);
        
    }
    console.log(newArray.join(' '));
}

giveMestring(6, 3);