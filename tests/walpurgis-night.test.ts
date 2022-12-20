import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { WalpurgisNight } from '../src';
import { testLanguage } from './test-language';

const holiday = new WalpurgisNight({ year: 2022, language: testLanguage });

test('Should be 30:th of April for any year', () => {
    assert.strictEqual(holiday.day, 30);
    assert.strictEqual(holiday.month, 4);
    const expectedDate = new Date('2022-04-30T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, false);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-04-30'));
    assert.strictEqual(WalpurgisNight.mightBe(a), false);
    assert.strictEqual(WalpurgisNight.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.walpurgisNight);
});
