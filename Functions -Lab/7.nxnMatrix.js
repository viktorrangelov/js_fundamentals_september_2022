function write(number) {
    let row = [];
    for (let index = 0; index < number; index++) {
        row.push(number);
        
    }
    for (let j = 0; j < number; j++) {
        console.log(row.join(' '));
        
    }
}

write(7);