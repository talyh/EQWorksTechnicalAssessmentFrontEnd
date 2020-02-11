import React from "react";
import styled from "styled-components";
import {
  faChartBar,
  faMapMarkerAlt,
  faTable
} from "@fortawesome/free-solid-svg-icons";

import InterestIcon from "../../components/InterestIcon";

const Header = () => (
  <Container>
    <Title>EQ Works Technical Assignment</Title>
    <InterestIconsContainer>
      <InterestIcon
        label="Events"
        icon={faChartBar}
        linkTo="/events"
        size="small"
      />
      <InterestIcon label="Stats" icon={faTable} linkTo="/stats" size="small" />
      <InterestIcon
        label="Pois"
        icon={faMapMarkerAlt}
        linkTo="/pois"
        size="small"
      />
    </InterestIconsContainer>
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(8, 48, 107, 1);
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin: 20px;
`;

const InterestIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export default Header;
