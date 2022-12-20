import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { NationalDay } from '../src';
import { testLanguage } from './test-language';

const holiday = new NationalDay({ year: 2022, language: testLanguage });

test('Should be 6:th of May for any year', () => {
    assert.strictEqual(holiday.day, 6);
    assert.strictEqual(holiday.month, 6);
    const expectedDate = new Date('2022-06-06T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-06-06'));
    assert.strictEqual(NationalDay.mightBe(a), false);
    assert.strictEqual(NationalDay.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.swedishNationalDay);
});
