import styled from "styled-components";

const Div = styled.div`
    grid-column: 1;
    grid-row: 3;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-image: linear-gradient(to right, rgb(255, 110, 88, 0.9) , rgb(233, 191, 120, 0.9));
    padding: 1em;
    color: white;

    .highLow {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .temperature {
        padding: 10px;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
    }

    .temperatureHigh {
        border-right: 1px solid white;
    }
    
    .highLow {
        padding: 10px;
        text-align: left;
        font-size: 12px;
    }

    .high {
        border-right: 1px solid white;
    }
`

export default function HighLow({high, low}){
    return (
        <Div>
            <div className="highLow">
                <div className="temperature temperatureHigh">{high}°c</div>
                <div className="temperature">{low}°c</div>
                <div className="highLow high">HIGH</div>
                <div className="highLow">LOW</div>
            </div>
        </Div>
    )
}