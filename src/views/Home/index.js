import React from "react";
import styled from "styled-components";
import {
  EventsInterestIcon,
  PoisInterestIcon,
  StatsInterestIcon
} from "../../components/InterestIcons";

const Home = () => (
  <Container>
    <Intro>{`Hi there! What would you like to see today?`}</Intro>
    <InterestIconsContainer>
      <EventsInterestIcon size="large" />
      <StatsInterestIcon size="large" />
      <PoisInterestIcon size="large" />
    </InterestIconsContainer>
  </Container>
);

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Intro = styled.div`
  margin: 40px;
  color: rgba(8, 48, 107, 1);
  font-size: 40px;
`;

const InterestIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default Home;
