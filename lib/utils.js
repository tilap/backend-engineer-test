/**
 * Compare to iso string dates, in sort callback signature style
 */
module.exports.compareDateString = (dateA, dateB) => {
  const a = new Date(dateA);
  const b = new Date(dateB);
  if (a.getTime() < b.getTime()) {
    return -1;
  }
  if (a.getTime() > b.getTime()) {
    return 1;
  }
  return 0;
};

/**
 * Convert an isostring to number of month since 0-0-0
 * */
module.exports.dateToAbsoluteMonth = (date) => {
  const [year, month, ...rest] = date.split('-').map(Number); // eslint-disable-line no-unused-vars
  return year * 12 + month;
};
