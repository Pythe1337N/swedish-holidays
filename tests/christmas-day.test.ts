import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { ChristmasDay } from '../src';
import { testLanguage } from './test-language';

const holiday = new ChristmasDay({ year: 2022, language: testLanguage });

test('Should be 25:th of December for any year', () => {
    assert.strictEqual(holiday.day, 25);
    assert.strictEqual(holiday.month, 12);
    const expectedDate = new Date('2022-12-25T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, true);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-12-25'));
    assert.strictEqual(ChristmasDay.mightBe(a), false);
    assert.strictEqual(ChristmasDay.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.christmasDay);
});
