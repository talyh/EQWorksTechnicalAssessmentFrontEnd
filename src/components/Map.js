import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

const Map = ({ data }) => {
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={{ lat: 43.6426, lng: -79.3871 }}
        defaultZoom={12}
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
