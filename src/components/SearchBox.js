import React from "react";
import styled from "styled-components";

const SearchBox = ({ value, onChange }) => (
  <Input value={value} onChange={ev => onChange(ev.target.value)} />
);

const Input = styled.input`
  width: 80%;
  margin-left: 10%;
  margin: 5% 10%;
  min-height: 5vh;
  padding-left: 21px;
  border-radius: 25px;
  font-family: "Questrial", sans-serif;
  font-size: 16px;
  border: 1px solid lightgray;

  &:focus {
    outline: none;
  }
`;

export default SearchBox;
