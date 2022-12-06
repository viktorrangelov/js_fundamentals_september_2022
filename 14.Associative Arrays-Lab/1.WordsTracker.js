function wordsCount(input) {
    let wordsToCheck = input.shift().split(' ');
    let wordsObject = {};
    
    input.forEach(word => {
        if (wordsToCheck.includes(word)) {
            wordsObject[word] =0;
        }
        
        
    });

    input.forEach(word => {
        if (wordsObject.hasOwnProperty(word)) {
            wordsObject[word]++;
        }
    });
    let sortedArr = Object.entries(wordsObject).sort((a,b) => b[1]-a[1]);
    for (const line of sortedArr) {
        console.log(`${line[0]} - ${line[1]}`);
    }
    }


wordsCount([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])