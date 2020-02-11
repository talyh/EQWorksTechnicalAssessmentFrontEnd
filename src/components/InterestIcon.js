import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const InterestIcon = ({ label, icon, linkTo, size }) => (
  <Link to={linkTo} style={{ textDecoration: "none" }}>
    <Container size={size} title={label} label={label}>
      <IconContainer size={size}>
        <FontAwesomeIcon icon={icon} />
      </IconContainer>
      {size === "large" && <Label>{label}</Label>}
    </Container>
  </Link>
);

const IconContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: ${props => (props.size === "large" ? "160px" : "48px")};
  width: ${props => (props.size === "large" ? "180px" : "48px")};
  color: white;
  background-color: rgba(8, 48, 107, 1);
  margin: ${props => (props.size === "large" ? "20px" : "5px")};
  padding: 0px 20px;
  font-size: ${props => (props.size === "large" ? "50px" : "28px")};
  cursor: pointer;
  outline: none;
  border-radius: ${props => (props.size === "large" ? "20px" : "8px")};

  :hover {
    transform: scale(1.15);

    ${IconContainer} {
      display: none;
    }
    ::after {
      content: ${props => props.size === "small" && `"${props.label}"`};
      font-size: 12px
      /* content: ${props => props.required && `" *"`}; */
    }
`;

const Label = styled.div`
  font-size: 20px;
`;

export default InterestIcon;
