import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { GoodFriday } from '../src';
import { testLanguage } from './test-language';

const holiday = new GoodFriday({ year: 2022, language: testLanguage });

test('Should be 15:th of April 2022', () => {
    assert.strictEqual(holiday.day, 15);
    assert.strictEqual(holiday.month, 4);
    const expectedDate = new Date('2022-04-15T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, true);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-03-19'));
    const b = fixedDate(new Date('2022-03-20'));
    const c = fixedDate(new Date('2022-04-23'));
    const d = fixedDate(new Date('2022-04-24'));
    assert.strictEqual(GoodFriday.mightBe(a), false);
    assert.strictEqual(GoodFriday.mightBe(b), true);
    assert.strictEqual(GoodFriday.mightBe(c), true);
    assert.strictEqual(GoodFriday.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.goodFriday);
});
