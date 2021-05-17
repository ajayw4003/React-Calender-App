import React from 'react';
import moment from "moment";
import "./calender.css";

const YearRange = ({currentValue, setcurrentValue, setisYear}) => {
    let year = [];
    for(let i = -10; i<=10; i++){
        let yr = moment().add(i, "year").year();
        year.push(<div>{yr}</div>)
    }

    const setYear = (val) => {
        console.log(val.innerHTML);
        setcurrentValue(currentValue.clone().year(`${val.innerHTML}`));
        setisYear(false);
    }

    return (
        <div className = "years">
                {year.map((year) => (
                    <div onClick = {(e) =>setYear(e.target)} className = "yearNum">
                        {year.props.children}
                    </div>
                ))}
        </div>
    );
};

export default YearRange;