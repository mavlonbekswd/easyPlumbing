import { useState } from 'react';
import { FaMapMarkerAlt, FaMapMarkedAlt } from 'react-icons/fa';

const locations = [
  {
    name: 'Slough',
    address: '123 High St, Slough, SL1 1AA',
    map: 'https://www.google.com/maps?q=Slough&output=embed',
  },
  {
    name: 'Reading',
    address: '456 Broad St, Reading, RG1 2AA',
    map: 'https://www.google.com/maps?q=Reading&output=embed',
  },
  {
    name: 'Guildford',
    address: '789 High St, Guildford, GU1 3AA',
    map: 'https://www.google.com/maps?q=Guildford&output=embed',
  },
  {
    name: 'Stevenage',
    address: '101 Main St, Stevenage, SG1 1AA',
    map: 'https://www.google.com/maps?q=Stevenage&output=embed',
  },
  {
    name: 'Peterborough',
    address: '202 City Rd, Peterborough, PE1 1AA',
    map: 'https://www.google.com/maps?q=Peterborough&output=embed',
  },
  {
    name: 'Ipswich',
    address: '303 Market St, Ipswich, IP1 1AA',
    map: 'https://www.google.com/maps?q=Ipswich&output=embed',
  },
];

export default function MapSection() {
  const [selected, setSelected] = useState(0);
  const loc = locations[selected];

  return (
    <section className="relative py-20 bg-white" id="map" data-aos="fade-up">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-8 text-center flex items-center gap-2">
          <FaMapMarkedAlt className="text-accent" /> Find Us
        </h2>
        {/* Location Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {locations.map((l, i) => (
            <button
              key={l.name}
              className={`px-5 py-2 rounded-full font-semibold border-2 transition-all duration-200 flex items-center gap-2 text-sm md:text-base
                ${i === selected ? 'bg-accent text-light border-accent shadow-lg' : 'bg-white text-secondary border-gray-200 hover:bg-accent/10 hover:border-accent'}`}
              onClick={() => setSelected(i)}
              aria-label={`Show map for ${l.name}`}
            >
              <FaMapMarkerAlt className={i === selected ? 'text-light' : 'text-accent'} /> {l.name}
            </button>
          ))}
        </div>
        {/* Animated Map Card */}
        <div className="w-full max-w-5xl bg-light rounded-3xl shadow-xl p-8 flex flex-col items-center animate-fade-in">
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-bold text-primary mb-1 flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" /> {loc.name}
            </h3>
            <p className="text-gray-600 text-base">{loc.address}</p>
          </div>
          <div className="w-full rounded-xl overflow-hidden border-2 border-accent shadow-lg animate-fade-in">
            <iframe
              title={`Map of ${loc.name}`}
              src={loc.map}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[350px] md:h-[450px]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
} 