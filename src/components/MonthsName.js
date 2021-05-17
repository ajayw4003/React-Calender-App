import React from 'react';
import "./calender.css";
import moment from "moment";

const MonthsName = ({currentValue, setcurrentValue, setisMonth}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const setMonth = (val) =>{
        console.log(val.innerHTML);
        setcurrentValue(currentValue.clone().month(`${val.innerHTML}`));
        setisMonth(false);
    }

    return (
        <div className = "months">
            {months.map((month) => (
                <div 
                    className = "monthName"
                    onClick = {(e) =>setMonth(e.target)}>
                    {month}
                </div>
            ))}
        </div>
    );
};

export default MonthsName;