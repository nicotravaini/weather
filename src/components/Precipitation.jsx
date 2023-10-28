import styled from "styled-components";

const Div = styled.div`
    grid-column: 3;
    grid-row: 3;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 10px;
    background-color: rgba(250, 250, 250, 0.9);
    color: rgb(180, 180, 180);
    text-align: left;
    padding-left: 10px;

    .izquierda {
        margin-left: 0;
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
        margin-left: 85%;
    }

    .barraGris {
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
    }
`

export default function Precipitation({precipitation}) {
    let normalizedPoP = 72 - precipitation / 8.33;

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
                <h6>PRECIPITATION PROBABILITY</h6>
                <p className="precipitation">{precipitation}%</p>
                <p className="state">{precipitationText}</p>
            </div>
            {/* <div className="derecha">
                <div className="barraGris">
                    <div className="puntoDeslizable" style={{top: normalizedPoP + "%"}}></div>
                </div>
            </div> */}
        </Div>
    )
}