import React, { Fragment } from 'react';
import classes from '../weather/WeatherDisplay.module.css';


const WeatherDisplay = (props) => {
    const { temp, humidity, description, city, icon } = props.data;
    console.log(props.data)
    return (
        <Fragment>
            <table className={classes.weatherheader}>
                <tr><td className={classes.city}>{city}</td><td><img className={classes.weatherImage} src={icon} alt={description}></img></td></tr>
            </table>
            <div className={classes.weatherdisplay}>
                <table className={classes.weathertable}>
                    <tr><td>humidity &#127778; </td><td>:</td><td>{humidity}</td></tr>
                    <tr><td>temperature &#8451;</td><td>:</td><td>{temp}</td></tr>
                    <tr><td>weather</td><td>:</td><td>{description}</td></tr>
                </table>
            </div>
        </Fragment>)
}

export default WeatherDisplay;