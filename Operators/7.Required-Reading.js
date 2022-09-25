function hoursHeshouldRead(pagesNumber,pagesPerHour,numberOfDays) {
    let totalTime = pagesNumber / pagesPerHour;
    let days = totalTime /numberOfDays;
    console.log(days);
}

hoursHeshouldRead(212,20,2);