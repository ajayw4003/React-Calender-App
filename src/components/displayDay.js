
function isSelected(day, val){
    return val.isSame(day, "day");
}

function dayBefore(day){
    return day.isBefore(new Date(), "day");
}

function isToday(day){
    return day.isSame(new Date(), "day");
}


export default function displayDay(day, val){
    if(isSelected(day, val)) return "selected";
    if(dayBefore(day)) return "before";
    if(isToday(day)) return "today";
    return "after";
}