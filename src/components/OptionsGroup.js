import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Option = ({ option, onSelect, onDeselect, selected }) => {
  const [isSelected, setIsSelected] = useState(false);

  // adjust the option to reflect the current selection
  useEffect(() => {
    setIsSelected(selected.length > 0 && selected.includes(option));
  }, [option, selected]);

  return (
    <Button
      key={option}
      onClick={() => {
        !isSelected
          ? onSelect && onSelect(option)
          : onDeselect && onDeselect(option);
      }}
      selected={isSelected}
    >
      {option}
    </Button>
  );
};

const OptionsGroup = ({
  label,
  valuesArray,
  onSelect,
  onDeselect,
  selected,
  active
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <ButtonsContainer>
        {valuesArray.map(option => (
          <Option
            key={option}
            option={option}
            onSelect={onSelect}
            onDeselect={onDeselect}
            selected={active && selected}
          />
        ))}
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  color: rgba(8, 48, 107, 0.45);

  :hover {
    background-color: rgba(8, 48, 107, 1);
    transition: 0.15s ease-in 0s;
    color: white;
  }
`;

const Label = styled.label`
  padding: 10px 20px;
  font-family: "Questrial", sans-serif;
  font-size: 16px;
  white-space: nowrap;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px;
`;

const Button = styled.button`
  margin: 4px;
  background-color: ${props =>
    props.selected ? "rgba(8, 48, 107, 1)" : "rgba(222, 235, 247, 1)"};
  border: 1px solid rgba(8, 48, 107, 1);
  float: left;
  font-family: "Questrial", sans-serif;
  font-size: 16px;
  color: ${props =>
    props.selected ? "rgba(222, 235, 247, 1)" : "rgba(8, 48, 107, 1)"};
  cursor: pointer;
  outline: none;

  :hover {
    background-color: ${props =>
      props.selected ? "rgba(222, 235, 247, 0.75)" : "rgba(8, 48, 107, 0.75)"};
    color: ${props =>
      props.selected ? "rgba(8, 48, 107, 1)" : "rgba(222, 235, 247, 1)"};
    transition: 0.15s ease-in 0s;
    transform: scale(2);
  }
`;

export default OptionsGroup;
