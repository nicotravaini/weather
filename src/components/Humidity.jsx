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
    background-color: rgb(250, 250, 250);
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

    .title {
        padding-top: 15px;
        font-size: 11px;
        font-weight: bold;
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

    .backBarra {
        height: 100%;
        width: 10px;
        border: 2px solid none;
        background-color: #b4c0be;
    }
    .barra {
        width: 10px;
        border: 2px solid none;
        background-color: rgb(0, 144, 180);
    }
`

export default function Humidity({ humidity }) {
    let humidityInWords;
    if (humidity >= 0 && humidity <= 30) {
        humidityInWords = "Low";
    } else if (humidity >= 31 && humidity <= 50) {
        humidityInWords = "Normal";
    } else if (humidity > 50) {
        humidityInWords = "High";
    }

    return (
        <Div>
            <div className="izquierda">
                <div className="title">HUMIDITY</div>
                <div className="humidity">{humidity} <span>%</span></div>
                <div className="state">{humidityInWords}</div>
            </div>
            <div className="derecha">
                <div className="backBarra">
                    <div className="barra" style={{ height: humidity }} />
                </div>
            </div>
        </Div>
    )
}