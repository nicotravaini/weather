import styled, { keyframes } from "styled-components";

// const spinner = keyframes`
// to{
//     transform: rotate(${prop}deg)0.25 turn;
// }`

const Gauge = styled.div`
    width: 100%;
    max-width: 170px;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    color: #004033;
`
const GaugeBody = styled.div`
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        background:#b4c0be;
        position: relative;
        border-top-left-radius: 100% 200%;
        border-top-right-radius: 100% 200%;
        ${'' /* overflow: hidden; */}
`
    
const GaugeFill = styled.div`
        position: absolute;
        top: 100%;
        left: 0;
        width: inherit;
        height: 100%;
        background: rgb(0, 144, 180);
        transform-origin: center top;
        transform: ;
        transition: transform 0.2s ease-out;
`
    
const GaugeCover = styled.div`
        width: 75%;
        height: 150%;
        background: rgba(250, 250, 250);
        border-radius: 50%;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 25%;
        box-sizing: border-box;
        color: rgb(0, 144, 180);
        font-weight: bold;
`

export default function ResponsiveGauge({value}){
    if(value < 0 || value > 10){
        return;
    }
    let newValue = value * 10;
    return(
        <Gauge>
            <GaugeBody className="gaugebody">
                <GaugeFill className="gaugefill" rotates={newValue + "deg"}></GaugeFill>
                <GaugeCover className="gaugecover">{value}</GaugeCover>
            </GaugeBody>
        </Gauge>
    )
}