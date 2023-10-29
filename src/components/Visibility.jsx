import styled from "styled-components";

const Div = styled.div`
    grid-column: 2;
    grid-row: 3;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgb(250, 250, 250);
    color: rgb(180, 180, 180);
    text-align: left;
    padding-left: 10px;

    .visibilityId {
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
`

export default function Visibility({visibility}){
    let visibilityInWords;
    if(visibility >= 0 && visibility <= 1){
        visibilityInWords = "Fog";
    } else if(visibility > 1 && visibility <= 2){
        visibilityInWords = "Mist";
    } else if(visibility > 2 && visibility <= 5){
        visibilityInWords = "Haze";
    } else if(visibilityInWords > 5){
        visibilityInWords = "Average";
    }
    
    let visibilitySlice = visibility.toString().slice(0, 2);

    return (
        <Div>
            <h6>VISIBILITY</h6>
            <p className="visibilityId">{visibilitySlice} <span>km</span></p>
            <p className="state">{visibilityInWords}</p>
        </Div>
    )
}