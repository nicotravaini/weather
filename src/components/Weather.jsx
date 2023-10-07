import { useEffect, useState } from 'react';
import dataJson from '../dataJson.json'
import AirQuality from "./AirQuality";
import HighLow from "./HighLow";
import Humidity from "./Humidity";
import SunriseSunset from "./SunriseSunset";
import Temperature from "./Temperature";
import Today from "./Today";
import UvIndex from "./UvIndex";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";
import styled from 'styled-components';


const Div = styled.div`
    display: grid;
    grid-template-colums: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
    box-sizing: border-box;
    max-width: 1000px;
    padding: 2%;
    margin: 0 auto;
    background-image: linear-gradient(to right, rgb(0, 144, 196, 0.6) , rgb(0, 144, 196, 0.2));

    .today {
        grid-column: 2;
        grid-row: 1;
        color: white;
    }

    .highlights {
        grid-column: 2;
        grid-row: 2;
        color: white;
    }
`


export default function Weather() {
    const [today, setToday] = useState({ "12am": 0, "3am": 0, "6am": 0, "9am": 0, "12pm": 0, "3pm": 0, "6pm": 0, "9pm": 0 });
    const [highLights, setHighLights] = useState({ "uvIndex": 0, "windStatus": 0, "sunrise": 0, "sunset": 0, "humidity": 0, "visibility": 0, "airquality": 0 });
    const [highLow, setHighLow] = useState({"high": 0, "low": 0});
    const [temperature, setTemperature] = useState({"date": "", "temperature": ""});

    useEffect(() => {
        setToday({
            "12am": dataJson["hourly"]["temperature_2m"][0],
            "3am": dataJson["hourly"]["temperature_2m"][3],
            "6am": dataJson["hourly"]["temperature_2m"][6],
            "9am": dataJson["hourly"]["temperature_2m"][9],
            "12pm": dataJson["hourly"]["temperature_2m"][12],
            "3pm": dataJson["hourly"]["temperature_2m"][15],
            "6pm": dataJson["hourly"]["temperature_2m"][18],
            "9pm": dataJson["hourly"]["temperature_2m"][21],
        });
        setHighLights({
            "uvIndex": dataJson["daily"]["uv_index_max"][0],
            "windStatus": dataJson["current_weather"]["windspeed"],
            "sunrise": dataJson["daily"]["sunrise"][0],
            "sunset": dataJson["daily"]["sunset"][0],
            "humidity": dataJson["hourly"]["relativehumidity_2m"][0],
            "visibility": dataJson["hourly"]["visibility"][0],
            "airquality": dataJson["hourly"]["european_aqi"][0]
        });
        setHighLow({
            "high": dataJson["daily"]["temperature_2m_max"][0],
            "low": dataJson["daily"]["temperature_2m_min"][0]
        });
        setTemperature({
            "date": dataJson["current_weather"]["time"],
            "temperature": dataJson["current_weather"]["temperature"]
            
        })
    }, [])

    // como paso los valores del json al set del usestate para mostrarlos en pantalla
    // definir las medidas en los componentes con viewport height y viewport width y las cosas dentro del componente con %

    return (
        <Div>
            
            <Temperature date={temperature["date"]} temperature={temperature["temperature"]}/>
            <HighLow high={highLow["high"]} low={highLow["low"]}/>
            <h2 className='today'>Today</h2>
            <Today value={today} />
            <h2 className='highlights'>highLights</h2>
            <UvIndex className="child" uvindex={highLights["uvIndex"]} />
            <WindStatus className="child" windstatus={highLights["windStatus"]} />
            <SunriseSunset className="child" sunrise={highLights["sunrise"]} sunset={highLights["sunset"]}/>
            <Humidity className="child" humidity={highLights["humidity"]}/>
            <AirQuality className="child" airquality={highLights["airquality"]}/>
            <Visibility className="child" visibility={highLights["visibility"]}/>
        </Div>
    )
}