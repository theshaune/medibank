/**
 * Sort data by into Alphabetical order
 * @param { object } data
 * @param { string } key
 * @returns { object }
 */
const SortAlphabetically = (data = [], key = "") =>
  [...data].sort((a, b) => a[key]?.localeCompare(b[key]));

export default SortAlphabetically;
