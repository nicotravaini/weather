import styled from "styled-components";

const Div = styled.div`
    grid-column: 3;
    grid-row: 2;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.9);

    color: rgb(180, 180, 180);
    text-align: left;
    padding-left: 10px;

    .kmh {
        color: rgb(0, 144, 180);
        font-weight: bold;
        font-size: 30px;
    }

    span {
        font-size: 12px;
    }
`

export default function WindStatus({windstatus}){

    return (
        <Div>
            <h6>WIND STATUS</h6>
            <p className="kmh">{windstatus} <span>km/h</span></p>

        </Div>
    )
}