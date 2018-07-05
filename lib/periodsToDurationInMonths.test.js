/* global it, expect */
const periodToDurationInMonth = require('./periodsToDurationInMonths');

const ONE_MONTH = {
  startDate: '2000-01-01T00:00:00+01:00',
  endDate: '2000-01-01T00:00:00+01:00',
};

const MANY_MONTHS = {
  startDate: '2000-01-01T00:00:00+01:00',
  endDate: '2000-05-01T00:00:00+01:00',
};

const MANY_MONTHS_OVER_YEAR = {
  startDate: '2000-10-01T00:00:00+01:00',
  endDate: '2001-05-01T00:00:00+01:00',
};

const PERIOD_A = { // 8
  startDate: '2000-10-01T00:00:00+01:00',
  endDate: '2001-05-01T00:00:00+01:00',
};

const PERIOD_B = { // 4
  startDate: '2003-05-01T00:00:00+01:00',
  endDate: '2003-08-01T00:00:00+01:00',
};

const PERIOD_C = { // 4
  startDate: '2013-05-01T00:00:00+01:00',
  endDate: '2013-08-01T00:00:00+01:00',
};

it('work with single period month', () => {
  expect(periodToDurationInMonth([ONE_MONTH])).toEqual(1);
});

it('work with single period many months', () => {
  expect(periodToDurationInMonth([MANY_MONTHS])).toEqual(5);
});

it('work with single period many months over year', () => {
  expect(periodToDurationInMonth([MANY_MONTHS_OVER_YEAR])).toEqual(8);
});

it('work with many periods', () => {
  expect(periodToDurationInMonth([PERIOD_A, PERIOD_B, PERIOD_C])).toEqual(16);
});
