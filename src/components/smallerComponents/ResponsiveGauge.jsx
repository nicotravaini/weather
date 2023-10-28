import styled from "styled-components";

const Gauge = styled.div`
    width: 100%;
    max-width: 250px;
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
        overflow: hidden;
`
    
const GaugeFill = styled.div`
        position: absolute;
        top: 100%;
        left: 0;
        width: inherit;
        height: 100%;
        background: #009578;
        transform-origin: center top;
        transform: rotate(0.25turn);
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
`

export default function ResponsiveGauge({value}){
    if(value < 0 || value > 10){
        return;
    }
    let newValue = value / 2;
    return(
        <Gauge>
            <GaugeBody className="gaugebody">
                <GaugeFill className="gaugefill" style={{transform: newValue}}></GaugeFill>
                <GaugeCover className="gaugecover">{value}</GaugeCover>
            </GaugeBody>
        </Gauge>
    )
}