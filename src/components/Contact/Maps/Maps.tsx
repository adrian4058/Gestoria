import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Crear un icono personalizado usando tu SVG
const customIcon = new L.DivIcon({
  html: `
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 -1028.4)">
        <path d="m12.031 1030.4c-3.8657 0-6.9998 3.1-6.9998 7 0 1.3 0.4017 2.6 1.0938 3.7 0.0334 0.1 0.059 0.1 0.0938 0.2l4.3432 8c0.204 0.6 0.782 1.1 1.438 1.1s1.202-0.5 1.406-1.1l4.844-8.7c0.499-1 0.781-2.1 0.781-3.2 0-3.9-3.134-7-7-7zm-0.031 3.9c1.933 0 3.5 1.6 3.5 3.5 0 2-1.567 3.5-3.5 3.5s-3.5-1.5-3.5-3.5c0-1.9 1.567-3.5 3.5-3.5z" fill="#c0392b"/>
        <path d="m12.031 1.0312c-3.8657 0-6.9998 3.134-6.9998 7 0 1.383 0.4017 2.6648 1.0938 3.7498 0.0334 0.053 0.059 0.105 0.0938 0.157l4.3432 8.062c0.204 0.586 0.782 1.031 1.438 1.031s1.202-0.445 1.406-1.031l4.844-8.75c0.499-0.963 0.781-2.06 0.781-3.2188 0-3.866-3.134-7-7-7zm-0.031 3.9688c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5z" fill="#e74c3c" transform="translate(0 1028.4)"/>
      </g>
    </svg>
  `,
  className: 'custom-location-marker',
  iconSize: [24, 24],
  iconAnchor: [12, 24], // Punto inferior central del marker
  popupAnchor: [0, -24], // Popup aparece arriba del marker
});

const Maps: React.FC = () => {
  return (
    <div className="relative" style={{ zIndex: 10 }}>
      <MapContainer
        className="md:w-full md:h-full py-60"
        center={[-30.95102, -61.5632]}
        zoom={17}
        scrollWheelZoom={false}
      >
        {/* Mapa moderno estilo Mapbox */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[-30.950919, -61.56296]} icon={customIcon}>
          <Popup>
            Pasillo interno <br /> Última casa a la izquierda.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
