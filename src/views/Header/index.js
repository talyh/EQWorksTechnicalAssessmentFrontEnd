import React from "react";
import styled from "styled-components";
import {
  EventsInterestIcon,
  PoisInterestIcon,
  StatsInterestIcon
} from "../../components/InterestIcons";

const Header = () => (
  <Container>
    <Title>EQ Works Technical Assignment</Title>
    <InterestIconsContainer>
      <EventsInterestIcon size="small" />
      <StatsInterestIcon size="small" />
      <PoisInterestIcon size="small" />
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
