/* global it, expect */

const mergeFirstOverlapingPeriod = require('./mergeFirstOverlapingPeriod');

const ONE_MONTH = {
  start: '2016-01-01T00:00:00+01:00',
  endDate: '2016-01-01T00:00:00+01:00',
};

const MANY_MONTH = {
  startDate: '2016-01-01T00:00:00+01:00',
  endDate: '2016-05-01T00:00:00+01:00',
};

const MANY_MONTH_OVER_YEARS = {
  startDate: '2015-10-01T00:00:00+01:00',
  endDate: '2016-05-01T00:00:00+01:00',
};

const PERIOD_A = {
  startDate: '2015-10-01T00:00:00+01:00',
  endDate: '2016-05-01T00:00:00+01:00',
};

const PERIOD_B = {
  startDate: '2016-10-01T00:00:00+01:00',
  endDate: '2017-05-01T00:00:00+01:00',
};

const PERIOD_A_OVERLAPSE = {
  startDate: '2016-01-01T00:00:00+01:00',
  endDate: '2016-08-01T00:00:00+01:00',
};

const PERIOD_A_INCLUSIVE = {
  startDate: '2010-10-01T00:00:00+01:00',
  endDate: '2020-08-01T00:00:00+01:00',
};

it('works for single month period', () => {
  expect(mergeFirstOverlapingPeriod([ONE_MONTH])).toEqual([ONE_MONTH]);
});

it('works for multi months period in same year', () => {
  expect(mergeFirstOverlapingPeriod([MANY_MONTH])).toEqual([MANY_MONTH]);
});

it('works for multi months period overlaping year', () => {
  expect(mergeFirstOverlapingPeriod([MANY_MONTH_OVER_YEARS])).toEqual([MANY_MONTH_OVER_YEARS]);
});

it('works for distinct periods', () => {
  expect(mergeFirstOverlapingPeriod([PERIOD_A, PERIOD_B])).toEqual([PERIOD_A, PERIOD_B]);
});

it('works for overlaping periods', () => {
  expect(mergeFirstOverlapingPeriod([PERIOD_A, PERIOD_A_OVERLAPSE])).toEqual([{
    startDate: PERIOD_A.startDate,
    endDate: PERIOD_A_OVERLAPSE.endDate,
  }]);
});

it('works for inclusive periods', () => {
  expect(mergeFirstOverlapingPeriod([PERIOD_A, PERIOD_A_INCLUSIVE])).toEqual([PERIOD_A_INCLUSIVE]);
});
