import { useState, useEffect } from "react";
import { aggregateHourlyByWeekDay } from "../utils";

export const useEventsData = () => {
  const [eventsData, setEventsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch("http://localhost:5555/events/hourly");
        const data = await result.json();
        const transformed = aggregateHourlyByWeekDay(data);
        console.log("eventsData", transformed);
        setEventsData(transformed);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { eventsData, isLoading, isError };
};
