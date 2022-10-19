function printRange(charOne,charTwo) {
    let startingPoint = Math.min(charOne.charCodeAt(),charTwo.charCodeAt());
    let endPoint = Math.max(charOne.charCodeAt(),charTwo.charCodeAt());
    let resultString = [];
    for (let index = startingPoint +1; index < endPoint; index++) {
       resultString.push(String.fromCharCode(index));
        
    }
    console.log(resultString.join(' '));
}

printRange('#',':');