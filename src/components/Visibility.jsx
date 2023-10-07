import styled from "styled-components";

const Div = styled.div`
    grid-column: 3;
    grid-row: 3;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.9);
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
    
    let visibilitySlice = visibility.toString().slice(0, 2);

    return (
        <Div>
            <h6>VISIBILITY</h6>
            <p className="visibilityId">{visibilitySlice} <span>km</span></p>
            <p className="state">Average</p>
        </Div>
    )
}