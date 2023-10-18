import styled from "styled-components";
import Barometer from "./smallerComponents/Barometer";

const Div = styled.div`
    grid-column: 1;
    display: grid;
    grid-template-rows: 50% 1fr;
    background-color: none;
    padding: 1em;
    color: #d9480f;

    .date {
        grid-row: 2;
        justify-self: start;
        color: white;
        font-size: 30px;
    }
`

export default function Temperature({date, temperature}){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dateFormat = new Date(date)
    let day = weekday[dateFormat.getDay()];
    let hours = dateFormat.toString().slice(16, 21);
    return (
        <Div>
            <Barometer value={temperature} title=""/>
            <p className="date">{day}, {hours}hs</p>
        </Div>
    )
}