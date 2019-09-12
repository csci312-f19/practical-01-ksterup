/* eslint-disable no-global-assign, no-underscore-dangle */
const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    _Date = Date;
  });

  afterAll(() => {
    Date = _Date;
  });

  beforeEach(() => {
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  test('Returns 1 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });

  test('Returns 1 if birthday passed previously', () => {
    expect(birthday.howOld(new Date('01 Dec 2016'))).toBe(1);
  });

  test('Returns 0 if birthday has not passed yet', () => {
    expect(birthday.howOld(new Date('01 Dec 2017'))).toBe(0);
  });

  test('Returns the correct age for arbitrary birthdays', () => {
    expect(birthday.howOld(new Date('13 March 1999'))).toBe(18);
    expect(birthday.howOld(new Date('6 July 1996'))).toBe(21);
    expect(birthday.howOld(new Date('12 Sept 2005'))).toBe(12);
  });
});
