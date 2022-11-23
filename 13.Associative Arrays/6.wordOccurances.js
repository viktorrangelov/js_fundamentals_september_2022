function calculateWords(input) {
    let wordsList = {};
    input.forEach(word => {
        let counter = 1;
        if (wordsList.hasOwnProperty(word)) {
            counter+= wordsList[(word)];
        }
        wordsList[(word)] = counter;
    });
    let arrOfWordsList = Object.entries(wordsList);
    let sortedArr = arrOfWordsList.sort((a,b) => b[1] - (a[1]));
    for (const [word,number] of sortedArr) {
        console.log(`${word} -> ${number} times`);
    }
}

calculateWords(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])