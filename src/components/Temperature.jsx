import styled from "styled-components";
import Barometer from "./smallerComponents/Barometer";

const Div = styled.div`
    grid-column: 1;
    grid-row: 1 / 3;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: none;
    padding: 1em;
    color: #d9480f;

    .date {
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
            <Barometer value={temperature} title=""/>
            <div className="date">{day}, {hours}:{minutes}</div>
        </Div>
    )
}