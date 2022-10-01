function isEqual(firstArray,secondArray) {
    let sum = 0;
    let areIdentical = true;
    for (let index = 0; index < firstArray.length; index++) {
       let firstArrayNumb = Number(firstArray[index]);
       let secondArrayNumb = Number(secondArray[index]);

       if (firstArrayNumb != secondArrayNumb) {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
        areIdentical = false;
        break;
       }else{
            sum+= firstArrayNumb;
       }
       
    }
    if (areIdentical == true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
   
}

isEqual(['1','2','3','4','5'],

['1','2','4','4','5'])