export const sortArrayByCriteria = (array, criteria) =>
  array.sort((x, y) => (x[criteria] > y[criteria] ? 1 : -1));
