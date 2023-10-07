import styled from "styled-components";

const Div = styled.div`
    grid-column: 4;
    grid-row: 2;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.9);
    color: rgb(180, 180, 180);
    text-align: left;
    padding-left: 10px;

    p {
        color: rgb(0, 144, 180);
        font-size: 22px;
    }
`

export default function SunriseSunset({sunrise, sunset}){
    let sunriseSlice = sunrise.toString().slice(-4);
    let sunsetSlice = sunset.toString().slice(-4);
    
    return (
        <Div>
            <h6>SUNRISE & SUNSET</h6>
            <p>{sunriseSlice} AM</p>
            <p>{sunsetSlice} PM</p>
        </Div>
    )
}