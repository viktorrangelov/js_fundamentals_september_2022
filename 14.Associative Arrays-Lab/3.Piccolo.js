function parking(input) {
    let carsInTheParking = {};
    input.forEach(line => {
        let [inOrOut,number] = line.split(', ')
        if (inOrOut == 'IN') {
            carsInTheParking[number] = inOrOut;
        }
        if (inOrOut == 'OUT' && carsInTheParking.hasOwnProperty(number)) {
            delete carsInTheParking[number]
        }
       
    });

    let sortedParking = Object.entries(carsInTheParking).sort((a,b) => a[0].localeCompare(b[0]));

    if (sortedParking.length == 0) {
        console.log('Parking Lot is Empty');
    }else{
        sortedParking.forEach(line => {
            console.log(line[0]);
        });
    }
   
    
}

parking(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])