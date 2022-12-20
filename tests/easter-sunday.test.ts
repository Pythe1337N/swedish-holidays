import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { EasterSunday } from '../src';
import { testLanguage } from './test-language';

const holiday = new EasterSunday({ year: 2022, language: testLanguage });

test('Should be 17:th of April 2022', () => {
    assert.strictEqual(holiday.day, 17);
    assert.strictEqual(holiday.month, 4);
    const expectedDate = new Date('2022-04-17T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, true);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-03-21'));
    const b = fixedDate(new Date('2022-03-22'));
    const c = fixedDate(new Date('2022-04-25'));
    const d = fixedDate(new Date('2022-04-26'));
    assert.strictEqual(EasterSunday.mightBe(a), false);
    assert.strictEqual(EasterSunday.mightBe(b), true);
    assert.strictEqual(EasterSunday.mightBe(c), true);
    assert.strictEqual(EasterSunday.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.easterSunday);
});
