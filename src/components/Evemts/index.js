import React, { useState } from "react";
import styled from "styled-components";
import HeatMap from "../HeatMap";
import OptionsGroup from "../OptionsGroup";
import Spinner from "../Spinner";
import {
  useEventsData,
  useWeekDayFocus,
  useHourFocus,
  useMonthFocus
} from "./hooks";
import { weekdays, hours, months } from "../../utils/";

const Events = ({
  title,
  url,
  aggregationFunction,
  keys,
  indexBy,
  filters
}) => {
  const { eventsData, isLoading } = useEventsData(url, aggregationFunction);
  const [focusedData, setFocusedData] = useState([]);
  const [currentFocus, setCurrentFocus] = useState("");
  const { weekdayFocus, setWeekdayFocus } = useWeekDayFocus(
    eventsData,
    setFocusedData
  );
  const { hourFocus, setHourFocus } = useHourFocus(eventsData, setFocusedData);
  const { monthFocus, setMonthFocus } = useMonthFocus(
    eventsData,
    setFocusedData
  );

  // HOCs for consistent options selection and deselection
  const select = (
    focusArray,
    setFocusFn,
    focusType,
    setCurrentFocusType
  ) => option => {
    setFocusFn([...focusArray, option]);
    setCurrentFocusType(focusType);
  };
  const deselect = (focusArray, setFocusFn) => option => {
    const index = focusArray.indexOf(option);
    const newOptions = [
      ...focusArray.slice(0, index),
      ...focusArray.slice(index + 1, focusArray.length)
    ];
    setFocusFn(newOptions);
  };

  const FilterByHour = () => (
    <OptionsGroup
      label="Choose an hour"
      valuesArray={hours}
      selected={hourFocus}
      onSelect={option =>
        select(hourFocus, setHourFocus, "hour", setCurrentFocus)(option)
      }
      onDeselect={option => deselect(hourFocus, setHourFocus)(option)}
      active={currentFocus === "hour"}
    />
  );

  const FilterByWeekDay = () => (
    <OptionsGroup
      label="Choose a weekday"
      valuesArray={weekdays}
      selected={weekdayFocus}
      onSelect={option =>
        select(
          weekdayFocus,
          setWeekdayFocus,
          "weekday",
          setCurrentFocus
        )(option)
      }
      onDeselect={option => deselect(weekdayFocus, setWeekdayFocus)(option)}
      active={currentFocus === "weekday"}
    />
  );

  const FilterByMonth = () => (
    <OptionsGroup
      label="Choose a month"
      valuesArray={months}
      selected={monthFocus}
      onSelect={option =>
        select(monthFocus, setMonthFocus, "month", setCurrentFocus)(option)
      }
      onDeselect={option => deselect(monthFocus, setMonthFocus)(option)}
      active={currentFocus === "month"}
    />
  );

  return (
    <Container>
      <FiltersArea>
        {filters.includes("weekday") && <FilterByWeekDay />}
        {filters.includes("hour") && <FilterByHour />}
        {filters.includes("month") && <FilterByMonth />}
      </FiltersArea>
      {isLoading ? (
        <Spinner />
      ) : (
        <HeatMap
          title={title}
          data={
            weekdayFocus.length > 0 ||
            hourFocus.length > 0 ||
            monthFocus.length > 0
              ? focusedData
              : eventsData
          }
          keys={keys}
          indexBy={indexBy}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 20px;
`;

const FiltersArea = styled.div`
  flex: 1;
`;

export default Events;
