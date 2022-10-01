function reverse(numbersTorevert, myArray) {
    
    let newArray ='';
    for (let index = numbersTorevert -1; index >= 0; index--) {
        let currentItem = myArray[index];
        newArray += `${currentItem} `;
    }
    console.log(newArray);
}

reverse(3, [10, 20, 30, 40, 50]);