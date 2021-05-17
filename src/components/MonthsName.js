import React from 'react';
import "./calender.css";

const MonthsName = ({currentValue, setcurrentValue, setisMonth}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const setMonth = (val) =>{
        setcurrentValue(currentValue.clone().month(`${val.innerHTML}`));
        setisMonth(false);
    }

    return (
        <div className = "months">
            {months.map((month, i) => (
                <div key = {i}
                    className = "monthName"
                    onClick = {(e) =>setMonth(e.target)}>
                    {month}
                </div>
            ))}
        </div>
    );
};

export default MonthsName;