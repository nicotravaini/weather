import styled from "styled-components";
import Barometer from "./smallerComponents/Barometer";

const Div = styled.div`
    grid-column: 1;
    grid-row: 1;
    box-sizing: border-box;
    
    background-color: none;
    padding: 1em;
    color: #d9480f;

    .barometer {
        justify-self: center;
    }

    .date {
        align-self: end;
        color: white;
        font-size: 30px;

    }
`

export default function Temperature({date, temperature}){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dateFormat = new Date(date)
    let day = weekday[dateFormat.getDay()];
    let hours = dateFormat.getHours();
    let minutes = dateFormat.getMinutes();
    return (
        <Div>
            <Barometer className="barometer" value={temperature} title=""/>
            <div className="date">{day}, {hours}:{minutes}</div>
        </Div>
    )
}