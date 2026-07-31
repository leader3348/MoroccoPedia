import { useEffect, useRef } from 'react';

const CITIES = [
  { name:'Marrakesh',    lat:31.6295,  lng:-7.9811,  slug:'marrakesh',   color:'#c0390a' },
  { name:'Fès',         lat:34.0181,  lng:-5.0078,  slug:'fes',         color:'#c47b0a' },
  { name:'Casablanca',  lat:33.5731,  lng:-7.5898,  slug:'casablanca',  color:'#0a7a6a' },
  { name:'Tanger',      lat:35.7673,  lng:-5.7997,  slug:'tangier',     color:'#1a6b9a' },
  { name:'Chefchaouen', lat:35.1688,  lng:-5.2692,  slug:'chefchaouen', color:'#3b82f6' },
  { name:'Essaouira',   lat:31.5085,  lng:-9.7595,  slug:'essaouira',   color:'#0a7a6a' },
  { name:'Agadir',      lat:30.4202,  lng:-9.5982,  slug:'agadir',      color:'#c47b0a' },
  { name:'Ouarzazate',  lat:30.9189,  lng:-6.8934,  slug:'ouarzazate',  color:'#c0390a' },
  { name:'Ifrane',      lat:33.5228,  lng:-5.1062,  slug:'ifrane',      color:'#0a7a6a' },
  { name:'Meknes',      lat:33.8935,  lng:-5.5473,  slug:'meknes',      color:'#c47b0a' },
];

export default function LeafletMap({ onCityClick, height = 500 }) {
  const mapRef  = useRef(null);
  const mapInst = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || mapInst.current) return;

    // Dynamically import Leaflet (client-side only)
    import('leaflet').then(L => {
      // Fix default marker icons
      delete L.default.Icon.Default.prototype._getIconUrl;
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl:       'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl:     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      const map = L.default.map(mapRef.current, {
        center: [31.7917, -7.0926],
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // Tile layer
      L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);

      // Add city markers
      CITIES.forEach(city => {
        const icon = L.default.divIcon({
          html: `<div style="
            width:16px; height:16px;
            background:${city.color};
            border:3px solid white;
            border-radius:50%;
            box-shadow:0 2px 8px rgba(0,0,0,.3);
            cursor:pointer;
          "></div>`,
          className: '',
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });

        const marker = L.default.marker([city.lat, city.lng], { icon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family:Outfit,sans-serif;padding:4px">
              <strong style="font-size:14px;color:${city.color}">${city.name}</strong><br/>
              <a href="/city/${city.slug}" style="font-size:12px;color:#0a7a6a;text-decoration:none">
                Voir le guide →
              </a>
            </div>
          `);

        marker.on('click', () => {
          if (onCityClick) onCityClick(city);
        });
      });

      mapInst.current = map;
    }).catch(err => {
      console.error('Leaflet load error:', err);
    });

    return () => {
      if (mapInst.current) {
        mapInst.current.remove();
        mapInst.current = null;
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.12)' }}>
      <div ref={mapRef} style={{ height, width: '100%' }}/>
      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css');
        .leaflet-popup-content-wrapper { border-radius: 12px !important; }
      `}</style>
    </div>
  );
}
