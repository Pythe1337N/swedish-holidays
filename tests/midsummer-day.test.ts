import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { MidsummerDay } from '../src';
import { testLanguage } from './test-language';

const holiday = new MidsummerDay({ year: 2022, language: testLanguage });

test('Should be 25:th of June 2022', () => {
    assert.strictEqual(holiday.day, 25);
    assert.strictEqual(holiday.month, 6);
    const expectedDate = new Date('2022-06-25T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-06-19'));
    const b = fixedDate(new Date('2022-06-20'));
    const c = fixedDate(new Date('2022-06-26'));
    const d = fixedDate(new Date('2022-06-27'));
    assert.strictEqual(MidsummerDay.mightBe(a), false);
    assert.strictEqual(MidsummerDay.mightBe(b), true);
    assert.strictEqual(MidsummerDay.mightBe(c), true);
    assert.strictEqual(MidsummerDay.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.midsummerDay);
});
