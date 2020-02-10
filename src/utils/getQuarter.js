export const quarters = ["1st 1/2", "2nd 1/2"];

export const getQuarter = day => (day <= 15 ? quarters[0] : quarters[1]);
