function loading(givenNumber) {
    let loadChar = '%';
    let dotsChar = '.';
    let result = '';
    if (givenNumber == 100) {
        console.log('100% Complete!');
    }else{

        for (let index = 0; index < givenNumber/10; index++) {
           result+=loadChar;
            
        }
        for (let j = 0; j < 10 - givenNumber/10; j++) {
          result+=dotsChar;
            
        }
        console.log(`${givenNumber}% [${result}]`);
        console.log('Still loading...');

    }
}
loading(80);