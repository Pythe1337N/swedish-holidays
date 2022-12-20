import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { ChristmasEve } from '../src';
import { testLanguage } from './test-language';

const holiday = new ChristmasEve({ year: 2022, language: testLanguage });

test('Should be 24:th of December for any year', () => {
    assert.strictEqual(holiday.day, 24);
    assert.strictEqual(holiday.month, 12);
    const expectedDate = new Date('2022-12-24T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-12-24'));
    assert.strictEqual(ChristmasEve.mightBe(a), false);
    assert.strictEqual(ChristmasEve.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.christmasEve);
});
