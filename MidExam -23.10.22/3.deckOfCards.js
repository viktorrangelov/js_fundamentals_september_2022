function changeDeck(givenArr) {
    let myDeck = givenArr.shift().split(', ');
    let numberOfCommands = Number(givenArr.shift());
    


    for (let index = 0; index < numberOfCommands; index++) {
        let currentRow = givenArr[index].split(', ');
        let command = currentRow[0];
        let positionOrCard = currentRow[1];
        let card = currentRow[2];
       switch (command) {
        case 'Add':
            if (!myDeck.includes(positionOrCard)) {
                myDeck.push(positionOrCard);
                console.log('Card successfully added');
            }else{
                console.log('Card is already in the deck');
            }
            
            break;
        case 'Remove':
            if (myDeck.includes(positionOrCard)) {
                console.log(`Card successfully removed`);
                let j = myDeck.indexOf(positionOrCard);
                myDeck.splice(j,1);
            }else{
                console.log('Card not found');
            }

            break;
        case 'Remove At':
            if (positionOrCard <0 || positionOrCard >= myDeck.length) {
                console.log('Index out of range');
            }else{
                console.log('Card successfully removed');
                myDeck.splice(positionOrCard,1)
            }

            break;
        case 'Insert':
            let currentIndex = Number(positionOrCard);
            if (currentIndex < 0 || currentIndex > myDeck.length) {
                console.log('Index out of range');
                break;
            }
            if(myDeck.indexOf(card) == -1){
                console.log(`Card successfully added`);
                myDeck.splice(currentIndex, 0, card)
            }else{
                console.log(`Card is already added`);
            }
            break;
        }
        
      
    }
    console.log(myDeck.join(', '));
}

changeDeck(['Jack of Spades, Ace of Clubs, Jack of Clubs', '2',
'Insert, -1, Queen of Spades', 'Remove At, 1'])