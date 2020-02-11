export const fuzzySearch = (str, pattern) => {
  const regex = new RegExp(
    pattern.split(" ").reduce((acc, curr, index, array) => {
      if (index === array.length - 1) {
        return `${acc}${curr})`;
      } else {
        return `${acc}${curr}|`;
      }
    }, `(`),
    "gi"
  );

  return regex.test(str);
};
