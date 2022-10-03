function triangle(number) {
    for (let index = 1; index <= number; index++) {
        let row = '';
        for (let j = 0; j < index; j++) {
            row+=`${index} `;
            
        }
        console.log(row);
    }
}

triangle(10);