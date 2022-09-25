function isAmazing(numb) {
    numb = numb.toString();
    let sum = 0;
     for (let index = 0; index < numb.lenght; index++) {
        sum += Number(numb[index]);
       
        
    }

    let result = sum.toString().includes('9');
    console.log(result ?
        `${numb} Amazing? True` : 
        `${numb} Amazing? False`);
    
}

isAmazing(1233);