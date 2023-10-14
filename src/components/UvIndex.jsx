import styled from "styled-components";

const Div = styled.div`
    grid-column: 1;
    grid-row: 2;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.9);
    color: rgb(180, 180, 180);
    text-align: left;
    padding-left: 10px;

    .uvIndex {
        text-align: center;
        color: rgb(0, 144, 180);
        font-weight: bold;
        font-size: 40px;
    }
`

export default function UvIndex ({uvindex}) {
    return (
        <Div>
            <h6>UV INDEX</h6>
            <div className="prueba"></div>
            <p className="uvIndex">{uvindex}</p>
        </Div>
    )
}