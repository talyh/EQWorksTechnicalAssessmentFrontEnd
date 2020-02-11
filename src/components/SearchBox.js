import React from "react";
import styled from "styled-components";

const SearchBox = () => <Input />;

const Input = styled.input`
  width: 80%;
  margin-left: 10%;
  margin: 5% 10%;
  min-height: 5vh;
  padding-left: 21px;
  border-radius: 25px;
  border: 1px solid lightgray;

  &:focus {
    outline: none;
  }
`;

export default SearchBox;
