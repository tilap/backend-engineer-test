/**
 * sum an array of period to get total duration in months
 * /!\ assume overlapping periods have been merged before!
 */

const { dateToAbsoluteMonth } = require('./utils');

module.exports = periods => periods.reduce((sum, { startDate, endDate }) => {
  const diff = dateToAbsoluteMonth(endDate) - dateToAbsoluteMonth(startDate) + 1;
  return sum + diff;
}, 0);
