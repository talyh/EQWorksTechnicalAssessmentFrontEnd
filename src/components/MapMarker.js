import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const MapMarker = () => (
  <Container>
    <FontAwesomeIcon icon={faMapMarkerAlt} />
  </Container>
);

const Container = styled.div`
  color: rgba(8, 48, 107, 1);
  font-size: 20px;
`;

export default MapMarker;
