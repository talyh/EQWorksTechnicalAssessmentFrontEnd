import React from "react";
import Events from "../../components/Evemts";
import styled from "styled-components";
import {
  aggregateHourlyByWeekDay,
  aggregateQuartersByMonth,
  weekdays,
  quarters
} from "../../utils";

const EventsView = () => {
  const hourlyEventsUrl =
    "https://talyh-eqworks-backend.herokuapp.com/events/hourly";
  const dailyEventsUrl =
    "https://talyh-eqworks-backend.herokuapp.com/events/daily";

  return (
    <Container>
      <Events
        url={hourlyEventsUrl}
        aggregationFunction={aggregateHourlyByWeekDay}
        title="Events per Day/Hour"
        keys={weekdays}
        indexBy="hour"
        filters={["hour", "weekday"]}
      />
      <Events
        url={dailyEventsUrl}
        aggregationFunction={aggregateQuartersByMonth}
        title="Events per Month/Period"
        keys={quarters}
        indexBy="month"
        filters={["month"]}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default EventsView;
