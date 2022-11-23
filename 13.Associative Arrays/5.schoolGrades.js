function yearScore(input) {
    let finalScores = new Map();

    input.forEach(student => {
        let studentName = student.split(' ').shift();
        let splittedStud = student.split(' ');
        let studentScore = 0;
        let numberOfScores = 0;
        for (let index = 1; index < splittedStud.length; index++) {
            if (finalScores.has(studentName)) {
                studentScore+= Number(finalScores.get(studentName));
                numberOfScores++;
                
            }
            studentScore += Number(splittedStud[index]);
            numberOfScores++;

            
        }
       
        let finalScore = (studentScore / numberOfScores).toFixed(2);
        
        
        finalScores.set(studentName, finalScore)
        
    });
    let arrFinalStrings = Array.from(finalScores.entries());
    let sortedArr = arrFinalStrings.sort((a,b)=>a[0].localeCompare(b[0]));

    for (const [student,grade] of sortedArr) {
        console.log(`${student}: ${grade}`);
    }

}

yearScore([
'Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])