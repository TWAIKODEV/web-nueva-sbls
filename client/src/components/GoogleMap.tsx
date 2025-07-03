import { MapPin } from 'lucide-react';

interface GoogleMapComponentProps {
  address: string;
  height?: string;
  width?: string;
}

const GoogleMapComponent = ({ address, height = "400px", width = "100%" }: GoogleMapComponentProps) => {
  // URL del iframe de Google Maps para Calle Velázquez, 86D, Madrid
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`;

  return (
    <div className="google-map-container" style={{ height, width }}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Sagardoy Business & Law School"
      />
    </div>
  );
};

export default GoogleMapComponent; 