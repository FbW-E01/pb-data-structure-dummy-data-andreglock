const sample =  {
    time: "08:31:21 1.1.2021",
    totalPrice: 15.75,
    salespersons: "Maria",
};

console.log(Math.round(Math.random() * 650 + 50));

const makeData = (year, month, dayStart, dayEnd, salespersonsArr) => {
    const dataArray = [];
    let sales = Math.round(Math.random() * 650 + 50);
    for (i = 0; i < sales; i++) {
        let hour = Math.round(Math.random() * 10 + 8);
        let min = Math.round(Math.random() * 60);
        // Transform min to string
        if (min < 10) {
            min = '0' + min.toFixed(0);
        } else {
            min = min.toFixed(0);
        }
        // Transform 60 min to 1 hour
        if (min === '60') {
            min = '00'
            hour++;
        }
        // Transform hour to string
        if (hour < 10) {
            hour = '0' + hour.toFixed(0);
        } else {
            hour = hour.toFixed(0);
        }
        let day = Math.round(Math.random() * (dayEnd - dayStart) + dayStart)
        let salespersons = salespersonsArr[
            Math.floor(salespersonsArr.length - Math.random() * salespersonsArr.length)
        ];
        dataArray.push({
            time: `${hour}:${min} ${day}.${month}.${year}`,
            totalPrice: `€ ${(Math.random() * 99.5 + 0.5).toFixed(2)} salespersons: ${salespersons}`
        })
    }
    return dataArray;
};

console.log(makeData(2021, 03, 1, 3, ['João', 'Maria', 'Carlos']));