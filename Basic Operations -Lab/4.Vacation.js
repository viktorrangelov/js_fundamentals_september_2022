function calculate(number,groupType,day) {
    let totalprice = 0;
    switch (groupType) {
        case 'Students':
            if (day == 'Friday') {
                totalprice = number * 8.45;
            }else if (day == 'Saturday') {
                totalprice = number * 9.80;
            }else if (day == 'Sunday') {
                totalprice = number * 10.46;
            }

            if (number >= 30) {
                totalprice = totalprice*0.85;
            }
            break;
        case 'Business':
            if (number >= 100) {
                number-=10;
            }
            if (day == 'Friday') {
                totalprice = number * 10.90;
            }else if (day == 'Saturday') {
                totalprice = number * 15.60;
            }else if (day == 'Sunday') {
                totalprice = number * 16;
            }
            break;
        case 'Regular':
            if (day == 'Friday') {
                totalprice = number * 15;
            }else if (day == 'Saturday') {
                totalprice = number * 20;
            }else if (day == 'Sunday') {
                totalprice = number * 22.50;
            }

            if (number >= 10 && number <=20) {
                totalprice = totalprice*0.95;
            }
            break;
    
        default:
            break;
    }
    console.log(`Total price: ${totalprice.toFixed(2)}`);
}