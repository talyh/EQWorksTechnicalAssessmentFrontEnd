import React from "react";
import { useEventsData } from "./hooks";
import HeatMap from "../components/HeatMap";

const Events = () => {
  const { eventsData, isLoading, isError } = useEventsData();

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div style={{ height: "800px" }}>
          <HeatMap
            data={eventsData}
            keys={["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]}
            indexBy="hour"
          />
        </div>
      )}
    </div>
  );
};

export default Events;
