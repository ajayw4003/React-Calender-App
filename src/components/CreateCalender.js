export default function createCalender(currentValue){

    const startDay = currentValue.clone().startOf("month").startOf("week");
    const endDay = currentValue.clone().endOf("month").endOf("week");

    let day = startDay.clone().subtract(1, "day");
        const temp = [];
        while(day.isBefore(endDay, "day")){
            temp.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            )
        }
    return temp;
}