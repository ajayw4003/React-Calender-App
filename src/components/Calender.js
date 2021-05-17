import React, { useState, useEffect } from 'react';
import moment from "moment";
import "./calender.css";
import createCalender from "./CreateCalender";
import displayDay from "./displayDay";
import Header from "./Header";

const Calender = () => {
    const [currentValue, setcurrentValue] = useState(moment());
    const [calender, setCalender] = useState([]);
    
    
    useEffect(() => {
        
        setCalender(createCalender(currentValue));

    }, [currentValue])
    
    const dayName = ['Sun', 'Mon', 'Tue', 'Wes', 'Thu', 'Fri', 'Sat'];
    
    return (
        <div className = "calender">
            <Header setcurrentValue = {setcurrentValue} currentValue = {currentValue}/>
            
            <div className = "body">
                <div className = "dayNames">
                    {dayName.map(day => <div key ={day}>{day}</div>)}
                </div>
                
                {calender.map((week, j) => (
                <div key ={j+100} className = "week">
                    {week.map((day, i) => (
                        <div key = {i} className = "day" onClick ={() => setcurrentValue(day)}>
                            <div className = {displayDay(day, currentValue)}>
                                {day.format("D")}
                            </div>
                            
                        </div>))}
                </div>))}
            </div>
        </div>
    );
};

export default Calender;