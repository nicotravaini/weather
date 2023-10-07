import styled from "styled-components";

const Div = styled.div`
    grid-column: 2;
    grid-row: 3;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.9);
    color: rgb(180, 180, 180);
    padding-left: 10px;

    .izquierda {
        margin-left: 0;
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
        display: flex;
        margin-left: 85%;
    }

    .barraGris {
        position: fixed;
        right: 53%;
        top: 60%;
        height: 110px;
        width: 8px;
        border-radius: 5px;
        background-color: rgb(210, 210, 210);
    }

    .puntoDeslizable {
        position: fixed;
        right: 52.6%;
        top: 60%;
        height: 15px;
        width: 15px;
        border: 3px solid rgb(255, 110, 0, 0.6);
        border-radius: 50%;
        background-color: rgb(220, 200, 0);
    }
`

export default function Humidity({humidity}){
    let normalizedHumidity = 72 - humidity / 8.33;
    // if(humidity >= 0 && humidity < 8.333333333){
    //     normalizedHumidity = 72;
    // } else if(humidity >= 8.333333333 && humidity < 16.666666666){
    //     normalizedHumidity = 71;
    // } else if(humidity >= 16.666666666 && humidity < 25){
    //     normalizedHumidity = 70;
    // } else if(humidity >= 25 && humidity < 33.333333333){
    //     normalizedHumidity = 69;
    // } else if(humidity >= 33.333333333 && humidity < 41.666666666){
    //     normalizedHumidity = 68;
    // } else if(humidity >= 41.666666666 && humidity < 50){
    //     normalizedHumidity = 67;
    // } else if(humidity >= 50 && humidity < 58.333333333){
    //     normalizedHumidity = 66;
    // } else if(humidity >= 58.333333333 && humidity < 66.666666666){
    //     normalizedHumidity = 65;
    // } else if(humidity >= 66.666666666 && humidity < 75){
    //     normalizedHumidity = 64;
    // } else if(humidity >= 75 && humidity < 83.333333333){
    //     normalizedHumidity = 63;
    // } else if(humidity >= 83.333333333 && humidity < 91.66666666673){
    //     normalizedHumidity = 62;
    // } else if(humidity >= 91.6666666667 && humidity < 100){
    //     normalizedHumidity = 61;
    // } else if(humidity >= 100){
    //     normalizedHumidity = 60;
    // }

    console.log(normalizedHumidity)


    return (
        <Div>
        <div className="izquierda">
            <h6>HUMIDITY</h6>
            <p className="humidity">{humidity} <span>%</span></p>
            <p className="state">Normal</p>
        </div>
        <div className="derecha">
            <div className="barraGris">
                <div className="puntoDeslizable" style={{top: normalizedHumidity + "%"}}></div>
            </div>
        </div>
        </Div>
        
    )
}
