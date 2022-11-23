function addressBook(input) {
    let fullBook = {};
    input.forEach(line => {
        [person,address] = line.split(':')
        fullBook[person] = address;
    });

    let arrOfFullBook = Object.entries(fullBook);
    let sortedArr = arrOfFullBook.sort((a,b) => a[0].localeCompare(b[0]));
    for (const [key,value] of sortedArr) {
        console.log(`${key} -> ${value}`);
    }
}

addressBook(
['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])