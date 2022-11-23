function createBook(givenData) {
    let phoneBook = {};
    givenData.forEach(line => {
        [personName, phone] = line.split(' ');
    phoneBook[personName] = phone;
    });
    for (const key in phoneBook) {
       console.log(`${key} -> ${phoneBook[key]}`);
            
        }
    }


createBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])