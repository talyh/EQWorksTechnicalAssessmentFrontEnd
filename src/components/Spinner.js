import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = ({}) => (
  <Container>
    <AnimatedSpinner>
      <FontAwesomeIcon icon={faSpinner} />
    </AnimatedSpinner>
  </Container>
);

const Container = styled.div`
  /* position: ${props => props.display === "pageCenter" && "absolute"}; */
  display: flex;
  /* flex: ${props => props.display === "inline" && "1 1 20px"}; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AnimatedSpinner = styled.div`
  font-size: 60px;
  color: rgba(164, 164, 164);
  animation: spin infinite 2s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
