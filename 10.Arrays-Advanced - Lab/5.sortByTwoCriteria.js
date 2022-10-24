function sortByNameAndLength(givenArray) {
   
    givenArray.sort((a,b) => a.length - b.length ||a.localeCompare(b));
    console.log(givenArray.join('\n'));
}

sortByNameAndLength(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])