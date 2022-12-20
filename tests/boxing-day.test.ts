import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { BoxingDay } from '../src';
import { testLanguage } from './test-language';

const holiday = new BoxingDay({ year: 2022, language: testLanguage });

test('Should be 26:th of December for any year', () => {
    assert.strictEqual(holiday.day, 26);
    assert.strictEqual(holiday.month, 12);
    const expectedDate = new Date('2022-12-26T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, true);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-12-26'));
    assert.strictEqual(BoxingDay.mightBe(a), false);
    assert.strictEqual(BoxingDay.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.boxingDay);
});
