import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import routes from "../../router/routes";

const Error = () => {
  const history = useHistory();

  return (
    <Container>
      <Message onClick={() => history.push(routes.events)}>
        An error has occurred. Please try again soon.
      </Message>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(213, 134, 171, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.button`
  background-color: rgba(107, 8, 54, 1);
  border-radius: 5px;
  padding: 40px;
  color: white;
  font-family: "Questrial", sans-serif;
  font-size: 20px;
  cursor: pointer;
  outline: none;

  :hover {
    border-color: rgba(107, 8, 54, 1);
    background-color: rgba(213, 134, 171, 1);
    color: rgba(107, 8, 54, 1);
  }
`;

export default Error;
