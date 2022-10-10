
function roundGrade(grade) {
   let roundedGrade;
    if (grade < 3) {
        grade = 2;
        roundedGrade = 'Fail';
    }else if(grade < 3.5){
        roundedGrade = 'Poor';
    }else if(grade < 4.5){
        roundedGrade = 'Good';
    }else if ( grade < 5.5){
        roundedGrade = 'Very good';
    }else{
        roundedGrade = 'Excellent';
    }
    if (grade < 3) {
        console.log(`${roundedGrade} (${grade})`);;
    }else{
        console.log(`${roundedGrade} (${grade.toFixed(2)})`);;
    }
   
}

roundGrade(2.87)