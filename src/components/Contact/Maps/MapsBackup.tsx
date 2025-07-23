import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Versión simple sin icono personalizado - solo para probar
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapsBackup: React.FC = () => {
  return (
    <div className="relative z-10">
      <MapContainer
        className="md:w-full md:h-full py-60"
        center={[-30.95102, -61.5632]}
        zoom={17}
        scrollWheelZoom={false}
        style={{ zIndex: 10 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-30.950919, -61.56296]}>
          <Popup>
            Pasillo interno <br /> Última casa a la izquierda.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapsBackup;
