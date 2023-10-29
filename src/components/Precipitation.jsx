import styled from "styled-components";

const Div = styled.div`
    grid-column: 3;
    grid-row: 3;
    display: grid;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 10px;
    background-color: rgb(250, 250, 250);
    color: rgb(180, 180, 180);
    padding: 10px;

    .izquierda {
        grid-column: 1;
        display: grid;
        justify-items: start;
    }

    .title {
        padding-top: 15px;
        font-size: 11px;
        font-weight: bold;
    }

    .precipitation {
        color: rgb(0, 144, 180);
        font-weight: bold;
        font-size: 30px;
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

    ${'' /* .barraGris {
        position: fixed;
        right: 19.5%;
        top: 60%;
        height: 110px;
        width: 8px;
        border-radius: 5px;
        background-color: rgb(210, 210, 210);
    }

    .puntoDeslizable {
        position: fixed;
        right: 19%;
        top: 68%;
        height: 15px;
        width: 15px;
        border: 3px solid rgb(255, 110, 0, 0.6);
        border-radius: 50%;
        background-color: rgb(220, 200, 0);
    } */}
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

export default function Precipitation({precipitation}) {

    let precipitationText;
    if(precipitation >= 0 && precipitation <= 10){
        precipitationText = "Very Slight Chance";
    } else if(precipitation >= 11 && precipitation <= 20){
        precipitationText = "Slight Chance";
    } else if(precipitation >= 21 && precipitation <= 50){
        precipitationText = "Chance";
    } else if(precipitation >= 51 && precipitation <= 70){
        precipitationText = "Likely";
    } else if(precipitation >= 71 && precipitation <= 100){
        precipitationText = "Definite";
    }
    return (
        <Div>
            <div className="izquierda">
                <div className="title">PRECIPITATION PROBABILITY</div>
                <div className="precipitation">{precipitation}%</div>
                <div className="state">{precipitationText}</div>
            </div>
            <div className="derecha">
                <div className="backBarra">
                    <div className="barra" style={{ height: precipitation }} />
                </div>
            </div>
        </Div>
    )
}