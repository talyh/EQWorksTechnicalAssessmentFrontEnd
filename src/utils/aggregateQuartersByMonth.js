import { quarters, getQuarter } from "../utils/";

// the visualization library expects this format
export const aggregateQuartersByMonth = eventsData => {
  const baseStructure = [
    { month: "1", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "2", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "3", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "4", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "5", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "6", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "7", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "8", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "9", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "10", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "11", [quarters[0]]: 0, [quarters[1]]: 0 },
    { month: "12", [quarters[0]]: 0, [quarters[1]]: 0 }
  ];

  const aggregated = eventsData.reduce((acc, curr) => {
    const date = new Date(curr.date);
    const month = date.getMonth();
    const quarter = getQuarter(date.getDay());
    const currentEvents = parseInt(curr.events);
    const previousEvents = acc[month][quarter];

    // adjust the current quarter + month to aggregate the current entry with the previous values
    acc[month] = {
      ...acc[month],
      [quarter]: previousEvents + currentEvents
    };

    return acc;
  }, baseStructure);

  return aggregated;
};
