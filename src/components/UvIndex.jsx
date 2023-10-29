import styled from "styled-components";
import ResponsiveGauge from "./smallerComponents/ResponsiveGauge";

const Div = styled.div`
    grid-column: 1;
    grid-row: 2;
    display: grid;
    box-sizing: border-box;
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgb(250, 250, 250);
    color: rgb(180, 180, 180);
    padding: 10px;

    .title {
        padding-top: 15px;
        font-size: 11px;
        font-weight: bold;
    }
    .center {
        display: grid;
        justify-items: center;
    }
`

export default function UvIndex({ uvindex }) {
    return (
        <Div>
            <div className="title">UV INDEX</div>
            <div className="center">
                <ResponsiveGauge value={uvindex} />
            </div>
        </Div>
    )
}