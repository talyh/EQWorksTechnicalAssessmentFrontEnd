import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

const Map = ({ data }) => {
  const defaultCenter = { lat: 43.6426, lng: -79.3871 };
  const currentCenter =
    data.length > 0 ? { lat: data[0].lat, lng: data[0].lon } : defaultCenter;

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={defaultCenter}
        defaultZoom={15}
        center={currentCenter}
      >
        {data.length > 0 &&
          data.map(poi => (
            <MapMarker
              key={poi.poi_id}
              lat={poi.lat}
              lng={poi.lon}
              text={poi.name}
            />
          ))}
      </GoogleMapReact>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export default Map;
