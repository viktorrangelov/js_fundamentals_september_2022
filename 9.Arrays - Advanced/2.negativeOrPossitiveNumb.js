function negativeOrPossitive(givenArray) {
    let newArray = [];
    for (let index = 0; index <givenArray.length; index++) {
        let currentNumb = Number(givenArray[index]);

        if (currentNumb < 0) {
            newArray.unshift(currentNumb);
        }else{
            newArray.push(currentNumb);
        }
        
    }

    let finalString = newArray.join('\r\n');
    console.log(finalString);

}

negativeOrPossitive(['3', '-2', '0', '-1']);