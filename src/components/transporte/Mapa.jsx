import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';


export default function Mapa({ transportdata }) {
    const position = [transportdata[0].latitude, transportdata[0].longitude];
    const busIcon = L.icon({
        iconUrl: require("./img/busIcon2.png"),
        iconSize: [40, 40],
        iconAnchor: [15, 40]
    });
    return (
        <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                key={transportdata[0]["id"]}
                position={position}
                icon={busIcon}>
                <Popup>
                    Empresa {transportdata[0]["agency_name"]} <br /> Linea {transportdata[0]["route_short_name"]}
                </Popup>
            </Marker>
        </MapContainer>
    )
}