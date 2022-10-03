function round(numbToRound, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let result = numbToRound.toFixed(precision);
    console.log(parseFloat(result));
}