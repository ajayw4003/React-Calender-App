import React from 'react';
import "./calender.css";

const Header = ({currentValue, setcurrentValue}) => {

    const currentMonth = () => {
        return currentValue.format("MMM");
    }

    const currentyear = () => {
        return currentValue.format("YYYY");
    }

    const prevMonth = () =>{
        return currentValue.clone().subtract(1, "month");
    }
    const nextMonth = () =>{
        return currentValue.clone().add(1, "month");
    }

    return (
        <div className = "header">
            <div className = "toggle" onClick = {() =>setcurrentValue(prevMonth())}>{String.fromCodePoint(8810)}</div>
            <div>{currentMonth()}{currentyear()}</div>
            <div className = "toggle" onClick = {() =>setcurrentValue(nextMonth())}>{String.fromCodePoint(8811)}</div>
        </div>
    );
};

export default Header;