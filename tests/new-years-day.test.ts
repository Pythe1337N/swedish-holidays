import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { NewYearsDay } from '../src';
import { testLanguage } from './test-language';

const holiday = new NewYearsDay({ year: 2022, language: testLanguage });

test('Should be 1:st of January for any year', () => {
    assert.strictEqual(holiday.day, 1);
    assert.strictEqual(holiday.month, 1);
    const expectedDate = new Date('2022-01-01T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, true);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-01-01'));
    assert.strictEqual(NewYearsDay.mightBe(a), false);
    assert.strictEqual(NewYearsDay.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.newYearsDay);
});
