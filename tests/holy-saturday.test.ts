import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { HolySaturday } from '../src';
import { testLanguage } from './test-language';

const holiday = new HolySaturday({ year: 2022, language: testLanguage });

test('Should be 16:th of April 2022', () => {
    assert.strictEqual(holiday.day, 16);
    assert.strictEqual(holiday.month, 4);
    const expectedDate = new Date('2022-04-16T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, false);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-03-20'));
    const b = fixedDate(new Date('2022-03-21'));
    const c = fixedDate(new Date('2022-04-24'));
    const d = fixedDate(new Date('2022-04-25'));
    assert.strictEqual(HolySaturday.mightBe(a), false);
    assert.strictEqual(HolySaturday.mightBe(b), true);
    assert.strictEqual(HolySaturday.mightBe(c), true);
    assert.strictEqual(HolySaturday.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.holySaturday);
});
