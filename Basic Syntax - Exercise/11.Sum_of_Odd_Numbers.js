
let printedCount = 1;
let sum = 0;
let index = 1;
function oddnumbers(number) {
    while(printedCount <= number) {
        if (index % 2 != 0) {
            console.log(index);
            sum += index;
            printedCount++;
        }    
        index++;
     }    
       
        console.log('Sum: ' + sum);
    }
    

oddnumbers(5);