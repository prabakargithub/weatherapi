import axios from 'axios';
import React, { useState, Fragment, useEffect } from 'react';
import * as weatherImg from '../../UI/bgImgConstant';
import classes from '../search/CitySearch.module.css';
import WeatherDisplay from '../weather/WeatherDisplay';

const CitySearch = (props) => {
    const [city, setCity] = useState('chennai');
    const [weatherData, setWeatherData] = useState('');

    const onChangeHandler = (event) => {
        setCity(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        let header = { "headers": { "content-type": "application/json" } };
        const response = await axios.post("http://localhost:8080/city", city, header)
        setWeatherData(response.data);
        changeBackgroundImage(response.data);

        setCity('');
    };

    const changeBackgroundImage = (data) => {
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = `url(${getImgUrl(data.description)})`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPosition = "center"
        body.style.backgroundSize = "cover";
    }

    const getImgUrl = (description) => {
        console.log (description);
        const item =  weatherImg.find(item => item.name === description ? item:'');
        return item && item.url;
    }

    return (
        <Fragment>
            <div className={classes.searchbox}>
                <form onSubmit={onSubmitHandler}>
                    <label>City:</label>
                    <input type='text' onChange={onChangeHandler} value={city} />
                    <button>Search</button>
                </form>
            </div>
            {weatherData.city != null && <WeatherDisplay data={weatherData} />}
        </Fragment>
    )
};

export default CitySearch;