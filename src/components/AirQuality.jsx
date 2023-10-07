import styled from "styled-components";

const Div = styled.div`
    grid-column: 4;
    grid-row: 3;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.9);
    color: rgb(180, 180, 180);
    text-align: left;
    padding-left: 10px;

    .izquierda {
        margin-left: 0;
    }

    .airQuality {
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

export default function AirQuality({airquality}) {
    let normalizedAQI = 72 - airquality / 25;

    let airqualityText;
    if(airquality >= 0 && airquality <= 50){
        airqualityText = "Good";
    } else if(airquality >= 51 && airquality <= 100){
        airqualityText = "Fair";
    } else if(airquality >= 101 && airquality <= 150){
        airqualityText = "Moderate";
    } else if(airquality >= 151 && airquality <= 200){
        airqualityText = "Unhealthy";
    } else if(airquality >= 201 && airquality <= 300){
        airqualityText = "Very Unhealthy";
    } else if(airquality >= 300){
        airqualityText = "Hazardous";
    }
    return (
        <Div>
            <div className="izquierda">
                <h6>AIR QUALITY</h6>
                <p className="airQuality">{airquality}</p>
                <p className="state">{airqualityText}</p>
            </div>
            <div className="derecha">
                <div className="barraGris">
                    <div className="puntoDeslizable" style={{top: normalizedAQI}}></div>
                </div>
            </div>
        </Div>
    )
}