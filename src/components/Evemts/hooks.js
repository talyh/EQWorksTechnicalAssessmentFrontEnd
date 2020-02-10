import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import routes from "../../router/routes";

export const useEventsData = (url, aggegationFunction) => {
  const [eventsData, setEventsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  // load data from url, setting the state if successful fetch, or redirecting to error page if fail
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(url);
        const data = await result.json();
        const transformed = aggegationFunction(data);
        setEventsData(transformed);
      } catch (error) {
        history.push(routes.error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [aggegationFunction, history, url]);

  return { eventsData, isLoading };
};

export const useWeekDayFocus = (eventsData, setFilteredData) => {
  const [weekdayFocus, setWeekdayFocus] = useState([]);

  useEffect(() => {
    setFilteredData(
      eventsData.filter(ev => {
        for (let weekday of weekdayFocus) {
          if (ev[weekday] > 0) {
            return true;
          } else {
            return false;
          }
        }
      })
    );
  }, [eventsData, setFilteredData, weekdayFocus]);

  return {
    weekdayFocus,
    setWeekdayFocus
  };
};

export const useHourFocus = (eventsData, setFilteredData) => {
  const [hourFocus, setHourFocus] = useState([]);

  useEffect(() => {
    setFilteredData(
      eventsData.filter(ev => {
        if (hourFocus.includes(parseInt(ev.hour))) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [eventsData, setFilteredData, hourFocus]);

  return {
    hourFocus,
    setHourFocus
  };
};

export const useMonthFocus = (eventsData, setFilteredData) => {
  const [monthFocus, setMonthFocus] = useState([]);

  useEffect(() => {
    setFilteredData(
      eventsData.filter(ev => {
        if (monthFocus.includes(parseInt(ev.month))) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [eventsData, setFilteredData, monthFocus]);

  return {
    monthFocus,
    setMonthFocus
  };
};
