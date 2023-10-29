import styled from "styled-components";

const Div = styled.div`
    box-sizing: border-box;
    align-self: center;
    border: 2px solid none;
    border-radius: 5px;
    background-image: linear-gradient(to right, rgb(250, 150, 88, 0.9) , rgb(233, 191, 120, 0.9));
    padding: 1em;

    .wrapper {
        display: grid;
        grid-template-columns: 3% 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .laterales {
        grid-column: 1;
        grid-row: 1 / 3;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: end;
        color: white;
    }

    .barritas {
        grid-column: 2 / 4;
        grid-row: 1 / 3;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: end;
        color: white;
    }
    
    .barra {
        width: 10px;
        border: 2px solid white;
        background-color: white;
    }

    .horas {
        grid-column: 2 / 4;
        grid-row: 3;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: end;
        color: white;
    }    
`

export default function Today({ value }) {
    console.log(value["12am"])
    return (
        <Div>
            <div className="wrapper">
                <div className="laterales">
                    <div>40</div>
                    <div>20</div>
                    <div>0</div>
                </div>

                <div className="barritas"> 
                    <div className="barra" style={{ height: value["12am"] }}/> 
                    <div className="barra" style={{ height: value["3am"] }}/>
                    <div className="barra" style={{ height: value["6am"] }}/>
                    <div className="barra" style={{ height: value["9am"] }}/>
                    <div className="barra" style={{ height: value["12pm"] }}/>
                    <div className="barra" style={{ height: value["3pm"] }}/>
                    <div className="barra" style={{ height: value["6pm"] }}/>
                    <div className="barra" style={{ height: value["9pm"] }}/>
                </div>
                <div className="horas">
                    <div className="hora">12:00AM</div>
                    <div className="hora">03:00AM</div>
                    <div className="hora">06:00AM</div>
                    <div className="hora">09:00AM</div>
                    <div className="hora">12:00PM</div>
                    <div className="hora">03:00PM</div>
                    <div className="hora">06:00PM</div>
                    <div className="hora">09:00PM</div>
                </div>
            </div>
        </Div>
    )
}