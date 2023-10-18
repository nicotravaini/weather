import styled from "styled-components";

const Div = styled.div`
    grid-column: 1;
    grid-row: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.9);
    color: rgb(180, 180, 180);
    padding: 10px;

    .izquierda {
        grid-column: 1;
        display: grid;
        justify-items: start;
    }

    .humidity {
        color: rgb(0, 144, 180);
        font-weight: bold;
        font-size: 30px;
    }

    span {
        font-size: 12px;
    }

    .state {
        color: rgb(0, 144, 180);
        font-weight: bold;
    }

    .derecha {
        grid-column: 2;
        display: grid;
        justify-items: end;
        align-items: center;
    }

    .barraGris {
        height: 80%;
        width: 8px;
        border: 2px solid rgb(210, 210, 210);
        border-radius: 5px;
        background-color: rgb(210, 210, 210);
    }

    .puntoDeslizable { 
        height: 15px;
        width: 15px;
        border: 3px solid rgb(255, 110, 0, 0.6);
        border-radius: 50%;
        background-color: rgb(220, 200, 0);
    }
`

export default function Humidity({humidity}){
    let humidityInWords;
    if(humidity >= 0 && humidity <= 30){
        humidityInWords = "Low";
    } else if(humidity >= 31 && humidity <= 50){
        humidityInWords = "Normal";
    } else if(humidity > 50){
        humidityInWords = "High";
    }

    let normalizedHumidity = 80 - humidity / 1.25;

    return (
        <Div>
        <div className="izquierda">
            <div>HUMIDITY</div>
            <div className="humidity">{humidity} <span>%</span></div>
            <div className="state">{humidityInWords}</div>
        </div>
        <div className="derecha">
            <div className="barraGris">
                <div className="puntoDeslizable"></div>
            </div>
        </div>
        </Div>
    )
}

// style={{height: normalizedHumidity + "%"}} ESTO IRIA DESPUES DEL CLASSNAME PUNTODESLIZABLE.