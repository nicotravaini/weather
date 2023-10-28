import { useState, useEffect } from "react";
import Mapa from "./Mapa";
import styled from "styled-components";
import dataTransporte from "./dataTransporte.json"

const Header = styled.div`
    display: grid;
    background-image: linear-gradient(to right, rgb(0, 144, 196, 0.2), rgb(0, 104, 156, 0.6));
    height: 10vh;
    justify-content: center;
    align-items: center;

    #label{
        font-family: 'Roboto', sans-serif;
        color: white;
        font-weight: bold;
    }
    #LineasDeColectivos{
        border-radius: 12px;
        font-family: 'Roboto', sans-serif;
    }
`

export default function Transport() {
  const [selectedLine, setSelectedLine] = useState("12A a Barracas");
  const [transportData, setTransportData] = useState(dataTransporte);
  const [loading, setLoading] = useState(false);

  const fetchData = (routeID) => {
    setLoading(true);
    fetch(`https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?route_id=${routeID}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`)
      .then(response => {
        if (!response.ok) throw Error(response.status);

        return response;
      }).then(respo => respo.json()
      ).then(data => {
        setTransportData(data);
        setLoading(false);
      }).catch(ex => {
        console.error(ex);
      });
  }

  console.log(transportData);

  useEffect(() => {
    fetchData(routeShortNameDirectionToRouteId[selectedLine]);
    const interval = setTimeout(() => {
      fetchData(routeShortNameDirectionToRouteId[selectedLine]);
    }, 31000);
    return () => clearInterval(setTimeout);
  }, []);

  useEffect(() => {
    fetchData(routeShortNameDirectionToRouteId[selectedLine]);
  }, [selectedLine]);

  const routeShortNameDirectionToRouteId = {
    "12A a Barracas": "1745",
    "159C L (Roja) Correo Central": "839",
    "26A a B° Rivadavia": "2029",
    "133D Est. Transf. Vte. López": "1724",
    "133A Barracas": "1719",
    "148A 2 - Pque. Avellaneda x Guillermo Marconi": "1980",
    "153A a B° Nuevo": "1468",
    "253A a Liniers": "1464",
    "253A a LIBERTAD": "1465",
    "321A a Est. CASTELAR": "1467",
    "321A a LIBERTAD": "1466",
  }

  return (
    <div>
      <Header>
        <label id="label" for={"LineasDeColectivos"}>Seleccione una linea de colectivo:</label>
        <select id="LineasDeColectivos" value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
          <option value={"12A a Barracas"}>12A a Barracas</option>
          <option value={"159C L (Roja) Correo Central"}>159C L (Roja) Correo Central</option>
          <option value={"26A a B° Rivadavia"}>26A a B° Rivadavia</option>
          <option value={"133D Est. Transf. Vte. López"}>133D Est. Transf. Vte. López</option>
          <option value={"133A Barracas"}>133A Barracas</option>
          <option value={"148A 2 - Pque. Avellaneda x Guillermo Marconi"}>148A 2 - Pque. Avellaneda x Guillermo Marconi</option>
          <option value={"153A a B° Nuevo"}>153A a B° Nuevo</option>
          <option value={"253A a Liniers"}>253A a Liniers</option>
          <option value={"253A a LIBERTAD"}>253A a LIBERTAD</option>
          <option value={"321A a Est. CASTELAR"}>321A a Est. CASTELAR</option>
          <option value={"321A a LIBERTAD"}>321A a LIBERTAD</option>
        </select>
      </Header>
      <Mapa transportdata={transportData} />
    </div>
  )
}