import React, { useState } from 'react';
import "./calender.css";
import MonthsName from "./MonthsName";
import YearRange from "./yearRange";

const Header = ({currentValue, setcurrentValue}) => {
    const [isMonth, setisMonth] = useState(false);
    const [isYear, setisYear] = useState(false);

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
    const showMonths = () => {
        setisMonth(!isMonth);
        // setcurrentValue(moment().month("january"));
    }
    const showYear = () => {
        setisYear(!isYear);
    }

    return (
        <div>
            <div className = "header">
                <div className = "toggle" onClick = {() =>setcurrentValue(prevMonth())}>{String.fromCodePoint(8810)}</div>
                <div className = "toggle">
                    <span onClick ={showMonths}>{currentMonth()} </span> 
                    <span onClick = {showYear}>{currentyear()}</span>
                </div>
                <div className = "toggle" onClick = {() =>setcurrentValue(nextMonth())}>{String.fromCodePoint(8811)}</div>
            </div>
            <div className = {isMonth ? "show" : "hide"}>
                <MonthsName 
                    currentValue = {currentValue} 
                    setcurrentValue = {setcurrentValue} 
                    setisMonth = {setisMonth}/>
            </div>
            <div className = {isYear ? "show" : "hide"}>
                <YearRange 
                    currentValue = {currentValue} 
                    setcurrentValue = {setcurrentValue} 
                    setisYear = {setisYear}/>
            </div>
            
        </div>
    );
};

export default Header;