function dayOfWeek(dayNumber) {
    
    let weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
    if (dayNumber > 7 || dayNumber < 0) {
        console.log('Invalid day!');
    }else{
        console.log(weekDays[dayNumber -1]);
    }
}

dayOfWeek(11);