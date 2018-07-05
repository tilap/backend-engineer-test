/**
 * Walk a periods array and merge the 2 first overlaping ones or let the array as it
 * We compare overlaping against month period (not day or more accurate)
 */

const { compareDateString } = require('./utils');

module.exports = (periods) => {
  const localPeriods = periods;

  // Sort periods by start date
  localPeriods.sort((firstDate, secondDate) => {
    const { startDate: startA } = firstDate;
    const { startDate: startB } = secondDate;
    return compareDateString(startA, startB);
  });

  let hasMerged = false;
  for (let i = 0; i < localPeriods.length - 1 && !hasMerged; i += 1) {
    const period = localPeriods[i];
    const nextPeriod = localPeriods[i + 1];

    // Overlapse case
    const periodsOverlap = compareDateString(period.endDate, nextPeriod.startDate) > 0;
    if (periodsOverlap) {
      localPeriods.push({
        startDate: compareDateString(period.startDate, nextPeriod.startDate) < 0
          ? period.startDate : nextPeriod.startDate,
        endDate: compareDateString(period.endDate, nextPeriod.endDate) > 0
          ? period.endDate : nextPeriod.endDate,
      });

      // Remove the merged entries
      localPeriods.splice(i, 2);

      hasMerged = true;
    }
  }

  return localPeriods;
};
