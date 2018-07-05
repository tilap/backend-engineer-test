/* global it, expect */
const assertInputFormat = require('./assertInputFormat');

const NO_ENTRY = null;

const PARTIAL_ENTRY = { freelance: 'a' };

const GOOD_FULL_ENTRY = {
  freelance: {
    id: 123,
    professionalExperiences: [
      {
        id: 4,
        companyName: 'Okuneva, Kerluke and Strosin',
        startDate: '2016-01-01T00:00:00+01:00',
        endDate: '2018-05-01T00:00:00+01:00',
        skills: [
          {
            id: 241,
            name: 'React',
          },
          {
            id: 270,
            name: 'Node.js',
          },
          {
            id: 370,
            name: 'Javascript',
          },
        ],
      },
      {
        id: 54,
        companyName: 'Hayes - Veum',
        startDate: '2014-01-01T00:00:00+01:00',
        endDate: '2016-09-01T00:00:00+01:00',
        skills: [
          {
            id: 470,
            name: 'MySQL',
          },
          {
            id: 400,
            name: 'Java',
          },
          {
            id: 370,
            name: 'Javascript',
          },
        ],
      },
      {
        id: 80,
        companyName: 'Harber, Kirlin and Thompson',
        startDate: '2013-05-01T00:00:00+01:00',
        endDate: '2014-07-01T00:00:00+01:00',
        skills: [
          {
            id: 370,
            name: 'Javascript',
          },
          {
            id: 400,
            name: 'Java',
          },
        ],
      },
    ],
  },
};

it('throws error on empty entry', () => {
  expect(() => assertInputFormat(NO_ENTRY)).toThrow();
});

it('throws error on bad format', () => {
  expect(() => assertInputFormat(PARTIAL_ENTRY)).toThrow();
});

it('return true on good format', () => {
  expect(assertInputFormat(GOOD_FULL_ENTRY)).toEqual(true);
});
