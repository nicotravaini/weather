import { useEffect, useState, useContext } from 'react';
import HighLow from "./HighLow";
import Humidity from "./Humidity";
import SunriseSunset from "./SunriseSunset";
import Temperature from "./Temperature";
import Today from "./Today";
import UvIndex from "./UvIndex";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import Precipitation from './Precipitation';

// const baseTheme = {

// }

// const darkTheme = {
//     background: linear-gradient(right, rgb(0, 54, 106, 0.6) , rgb(0, 94, 146, 0.2))
// }

const Div = styled.div`
    display: grid;
    grid-template-rows: 30% 20% 1fr;
    grid-gap: 10px;
    box-sizing: border-box;
    width: 50vw;
    padding: 2%;

    .light{
        background-image: linear-gradient(to right, rgb(0, 104, 156, 0.6) , rgb(0, 144, 196, 0.2));
    }

    .dark{
        background-image: linear-gradient(to right, rgb(0, 54, 106, 0.6) , rgb(0, 94, 146, 0.2));
    }

    .item1 {
        grid-row: 1;
        display: grid;
        grid-template-columns: 80% 20%;
    }

    .item2 {
        grid-row: 2;
        display: grid;
        grid-template-rows: 25% 75%;
    }

    .today {
        grid-row: 1;
        justify-self: start;
        align-self: center;
        color: white;
        font-size: 20px;
        font-weight: bold;
    }

    .compToday {
        grid-row: 2;
    }

    .item3 {
        grid-row: 3;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 10% 130px 130px;
        grid-gap: 10px;
    }

   

    .highlights {
        grid-columns: 1 / 4;
        grid-row: 1;
        justify-self: start;
        color: white;
        font-size: 20px;
        font-weight: bold;
    }
`


export default function Weather({ weatherdata }) {
    const [today, setToday] = useState({ "12am": 0, "3am": 0, "6am": 0, "9am": 0, "12pm": 0, "3pm": 0, "6pm": 0, "9pm": 0 });
    const [highLights, setHighLights] = useState({ "uvIndex": 0, "windStatus": 0, "sunrise": 0, "sunset": 0, "humidity": 0, "visibility": 0, "precipitation": 0, "airquality": 0 });
    const [highLow, setHighLow] = useState({ "high": 0, "low": 0 });
    const [temperature, setTemperature] = useState({ "date": "", "temperature": "" });
    

    useEffect(() => {
        setToday({
            "12am": weatherdata["hourly"]["temperature_2m"][0],
            "3am": weatherdata["hourly"]["temperature_2m"][3],
            "6am": weatherdata["hourly"]["temperature_2m"][6],
            "9am": weatherdata["hourly"]["temperature_2m"][9],
            "12pm": weatherdata["hourly"]["temperature_2m"][12],
            "3pm": weatherdata["hourly"]["temperature_2m"][15],
            "6pm": weatherdata["hourly"]["temperature_2m"][18],
            "9pm": weatherdata["hourly"]["temperature_2m"][21],
        });
        setHighLights({
            "uvIndex": weatherdata["daily"]["uv_index_max"][0],
            "windStatus": weatherdata["current"]["windspeed_10m"],
            "sunrise": weatherdata["daily"]["sunrise"][0],
            "sunset": weatherdata["daily"]["sunset"][0],
            "humidity": weatherdata["hourly"]["relativehumidity_2m"][0],
            "visibility": weatherdata["hourly"]["visibility"][0],
            "precipitation": weatherdata["hourly"]["precipitation_probability"][0],
            //"airquality": weatherdata["hourly"]["european_aqi"][0]
        });
        setHighLow({
            "high": weatherdata["daily"]["temperature_2m_max"][0],
            "low": weatherdata["daily"]["temperature_2m_min"][0]
        });
        setTemperature({
            "date": weatherdata?.current?.time,
            "temperature": weatherdata["current"]["temperature_2m"]
        })
    }, [])

    return (
        <Div>
            <div className={'item1'}>
                <Temperature date={temperature["date"]} temperature={temperature["temperature"]} />
                <HighLow high={highLow["high"]} low={highLow["low"]} />
            </div>
            <div className='item2'>
                <div className='today'>Today</div>
                <div className='compToday'>
                    <Today value={today} />
                </div>
            </div>
            <div className='item3'>
                <div className='highlights'>HighLights</div>
                <UvIndex className="child" uvindex={highLights["uvIndex"]} />
                <WindStatus className="child" windstatus={highLights["windStatus"]} />
                <SunriseSunset className="child" sunrise={highLights["sunrise"]} sunset={highLights["sunset"]} />
                <Humidity className="child" humidity={highLights["humidity"]} />
                <Precipitation precipitation={highLights["precipitation"]} />
                <Visibility className="child" visibility={highLights["visibility"]} />
            </div>
        </Div>
    )
}