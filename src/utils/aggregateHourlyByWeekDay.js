import { getWeekDay } from "../utils";

// the visualization library expects this format
export const aggregateHourlyByWeekDay = eventsData => {
  const baseStructure = [
    { hour: "0", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "1", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "2", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "3", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "4", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "5", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "6", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "7", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "8", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "9", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "10", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "11", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "12", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "13", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "14", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "15", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "16", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "17", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "18", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "19", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "20", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "21", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "22", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 },
    { hour: "23", MON: 0, TUE: 0, WED: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 }
  ];

  const aggregated = eventsData.reduce((acc, curr) => {
    const weekday = getWeekDay(new Date(curr.date).getDay());
    const currentEvents = parseInt(curr.events);
    const previousEvents = acc[curr.hour][weekday];

    // adjust the current hour + weekday to aggregate the current entry with the previous values
    acc[curr.hour] = {
      ...acc[curr.hour],
      [weekday]: previousEvents + currentEvents
    };

    return acc;
  }, baseStructure);

  return aggregated;
};
