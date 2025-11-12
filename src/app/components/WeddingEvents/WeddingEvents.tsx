import React, { useState } from 'react';
import './WeddingEvents.scss';
import lovestory3 from '../../../assets/lovestory/lovestory3.jpeg';

const events = [
  {
    title: 'Engagement',
    date: '16 April, 2016',
    time: '3pm - 6pm',
    location: 'Elephant Road, Dhaka',
    mapUrl: 'https://www.google.com/maps?q=Elephant+Road,+Dhaka',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, domised words which slightly believable.',
  },
  {
    title: 'Wedding Ceremony',
    date: '16 April, 2016',
    time: '3pm - 6pm',
    location: 'Elephant Road, Dhaka',
    mapUrl: 'https://www.google.com/maps?q=Elephant+Road,+Dhaka',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, domised words which slightly believable.',
  },
  {
    title: 'Wedding Party',
    date: '16 April, 2016',
    time: '3pm - 6pm',
    location: 'Elephant Road, Dhaka',
    mapUrl: 'https://www.google.com/maps?q=Elephant+Road,+Dhaka',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, domised words which slightly believable.',
  },
];

const WeddingEvents = () => {
  const [selectedMap, setSelectedMap] = useState<any>(null);

  const openMap = (lat: number, lng: number) => {
    const userAgent = navigator.userAgent || navigator.vendor;

    const isIOS =
      /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /Android/.test(userAgent);
    const isMobile = isIOS || isAndroid;

    if (isIOS) {
      // iPhone/iPad → mở Apple Maps app
      const appleMapsUrl = `maps://maps.apple.com/?q=${lat},${lng}`;
      window.location.href = appleMapsUrl;
    } else if (isAndroid) {
      // Android → mở Google Maps app
      const geoUrl = `geo:${lat},${lng}?q=${lat},${lng}`;
      window.location.href = geoUrl;
    } else {
      // Web/Desktop → mở tab mới Google Maps
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      window.open(googleMapsUrl, '_blank'); // 👈 mở tab mới
    }
  };

  return (
    <div className="wedding-events">
      <h2>
        Our <span className="highlight">Wedding Events</span>
      </h2>
      <p className="intro-text">
        Phasellus laoreet finibus nisl, in auctor mauris placerat ut. Nunc dui
        ante, lacinia id magna id, luctus aliquam arcu.
      </p>
      <div className="events-container">
        <div className="image-section">
          <img src={lovestory3} alt="Wedding" />
        </div>
        <div className="events-list">
          {events.map((event, index) => (
            <div className="event" key={index}>
              <h3>{event.title}</h3>
              <p className="event-meta">
                <span className="icon">📅</span> {event.date}{' '}
                <span className="icon">⏰</span> {event.time}{' '}
                <span className="icon">📍</span> {event.location}
              </p>
              <p className="description">{event.description}</p>
              <button
                className="see-location"
                onClick={() => openMap(23.738317, 90.395293)}
              >
                See location <span className="arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingEvents;
