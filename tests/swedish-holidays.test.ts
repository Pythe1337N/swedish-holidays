import test from 'node:test';
import assert from 'node:assert';
import { testLanguage } from './test-language';

import { getHolidays, getUpcomingHolidays, isHoliday, isPublicHoliday } from '../src';

test('Should get a list of holidays for a year', () => {
    const holidays = getHolidays(2022, testLanguage);
    const dates = new Set(holidays.map((holiday) => holiday.date.getTime()));
    const names = new Set(holidays.map((holiday) => holiday.name));
    assert.strictEqual(holidays.length, 22);
    assert.strictEqual(dates.size, 22);
    assert.strictEqual(names.size, 22);
});

test('Should throw an error if year is out of range', () => {
    assert.throws(() => getHolidays(1581, testLanguage), new Error('Requested year is out of range'));
    assert.throws(() => getHolidays(8703, testLanguage), new Error('Requested year is out of range'));
});

test('isPublicHoliday should be true for sundays', () => {
    const saturdayIsNotPublicHoliday = isPublicHoliday(new Date('2021-11-13'));
    const sundayIsPublicHoliday = isPublicHoliday(new Date('2021-11-14'));
    const mondayIsNotPublicHoliday = isPublicHoliday(new Date('2021-11-15'));
    assert.strictEqual(saturdayIsNotPublicHoliday, false);
    assert.strictEqual(sundayIsPublicHoliday, true);
    assert.strictEqual(mondayIsNotPublicHoliday, false);
});
