export const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export const getWeekDay = rawWeekDay => {
  if (rawWeekDay >= 0 && rawWeekDay <= 6) {
    return weekdays[rawWeekDay];
  } else {
    throw new Error("Invalid weekday");
  }
};
