import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { MidsummerEve } from '../src';
import { testLanguage } from './test-language';

const holiday = new MidsummerEve({ year: 2022, language: testLanguage });

test('Should be 24:th of June 2022', () => {
    assert.strictEqual(holiday.day, 24);
    assert.strictEqual(holiday.month, 6);
    const expectedDate = new Date('2022-06-24T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-06-18'));
    const b = fixedDate(new Date('2022-06-19'));
    const c = fixedDate(new Date('2022-06-25'));
    const d = fixedDate(new Date('2022-06-26'));
    assert.strictEqual(MidsummerEve.mightBe(a), false);
    assert.strictEqual(MidsummerEve.mightBe(b), true);
    assert.strictEqual(MidsummerEve.mightBe(c), true);
    assert.strictEqual(MidsummerEve.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.midsummerEve);
});
