import styled from "styled-components";

const Div = styled.div`
    grid-column: 2;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-image: linear-gradient(to right, rgb(255, 110, 88, 0.9) , rgb(233, 191, 120, 0.9));
    padding: 1em;
    color: white;

    .container {
        display: grid;
        grid-template-rows: 1fr 1fr;
    }

    .temperature {
        padding: 10px;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
    }

    .temperatureHigh {
        border-bottom: 1px solid white;
    }
    
    .highLow {
        padding: 10px;
        text-align: left;
        font-size: 12px;
    }
`

export default function HighLow({high, low}){
    return (
        <Div>
            <div className="container">
                <div className="highLow">HIGH</div>
                <div className="temperature temperatureHigh">{high}°c</div>
                <div className="highLow">LOW</div>
                <div className="temperature">{low}°c</div>  
            </div>
        </Div>
    )
}