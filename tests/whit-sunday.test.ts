import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { WhitSunday } from '../src';
import { testLanguage } from './test-language';

const holiday = new WhitSunday({ year: 2022, language: testLanguage });

test('Should be 5:th of June 2022', () => {
    assert.strictEqual(holiday.day, 5);
    assert.strictEqual(holiday.month, 6);
    const expectedDate = new Date('2022-06-05T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, true);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-05-09'));
    const b = fixedDate(new Date('2022-05-10'));
    const c = fixedDate(new Date('2022-06-13'));
    const d = fixedDate(new Date('2022-06-14'));
    assert.strictEqual(WhitSunday.mightBe(a), false);
    assert.strictEqual(WhitSunday.mightBe(b), true);
    assert.strictEqual(WhitSunday.mightBe(c), true);
    assert.strictEqual(WhitSunday.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.whitSunday);
});
