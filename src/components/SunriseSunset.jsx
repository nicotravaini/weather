import styled from "styled-components";

const Div = styled.div`
    grid-column: 3;
    grid-row: 2;
    display: grid;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.9);
    color: rgb(180, 180, 180);
    padding: 10px;

    .title {
        padding-top: 15px;
        font-size: 11px;
        font-weight: bold;
    }
    .text {
        color: rgb(0, 144, 180);
        font-size: 22px;
    }
`

export default function SunriseSunset({sunrise, sunset}){
    let sunriseSlice = sunrise.toString().slice(-4);
    let sunsetSlice = sunset.toString().slice(-4);
    
    return (
        <Div>
            <div className="title">SUNRISE & SUNSET</div>
            <div className="text">{sunriseSlice} AM</div>
            <div className="text">{sunsetSlice} PM</div>
        </Div>
    )
}