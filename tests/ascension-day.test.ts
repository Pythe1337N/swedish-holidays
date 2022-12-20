import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { AscensionDay } from '../src';
import { testLanguage } from './test-language';

const holiday = new AscensionDay({ year: 2022, language: testLanguage });

test('Should be 26:th of May 2022', () => {
    assert.strictEqual(holiday.day, 26);
    assert.strictEqual(holiday.month, 5);
    const expectedDate = new Date('2022-05-26T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, true);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-04-29'));
    const b = fixedDate(new Date('2022-04-30'));
    const c = fixedDate(new Date('2022-06-03'));
    const d = fixedDate(new Date('2022-06-04'));
    assert.strictEqual(AscensionDay.mightBe(a), false);
    assert.strictEqual(AscensionDay.mightBe(b), true);
    assert.strictEqual(AscensionDay.mightBe(c), true);
    assert.strictEqual(AscensionDay.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.ascensionDay);
});
