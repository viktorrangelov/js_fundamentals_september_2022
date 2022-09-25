function isSpecial(number){
    let sumOfNumbers = 0;
    let result = '';
    for (let index = 1; index <= number; index++) {
     index = index.toString();

     for (let j = 0; j < index.length; j++) {
       sumOfNumbers += Number(index[j]);
        
     }
     result = 
     sumOfNumbers === 5 || 
     sumOfNumbers === 7 || 
     sumOfNumbers === 11;
     console.log(result ? `${index} -> True` : `${index} -> False`);
     sumOfNumbers = 0;
        
    }
}

isSpecial(15);
