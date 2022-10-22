function showSmallest(givenArray) {
    let sortedArr = givenArray.sort((a,b) => a-b).slice(0,2).join(' ');
    
    console.log(sortedArr);
}

showSmallest([30, 15, 50, 5]);