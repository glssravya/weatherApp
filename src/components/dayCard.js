import React from 'react'
const DayCard = ({data}) => {
   console.log(data);
    let {maxTemp,minTemp,humidity,icon,iconText,iconDesc} = data;
    return (
        <li className="city">
            <h2 className="city-name" data-name="New York,US">
            <span>{data.day}</span>
            </h2>
            <div className="temperature"><span className="city-maxTemp">{maxTemp}</span><sup>°C</sup>/<span className="city-minTemp">{minTemp}</span><sup>°C</sup></div>
            <figure>
            <img className="city-icon" src={icon} alt={iconText} />
            <figcaption>{iconDesc}</figcaption>
            </figure>
            <p className="my-1"> <i className="fa fa-tint mr-2" aria-hidden="true"></i> <span> {humidity}% </span> </p>
        </li>
    )

}

export default DayCard;