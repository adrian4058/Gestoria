import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {
  return (
    <MapContainer
      className="w-[750px] h-[500px]"
      center={[-30.95102, -61.5632]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-30.95102, -61.5632]}>
        <Popup>
          Pasillo interno <br /> Última casa a la izquierda.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
