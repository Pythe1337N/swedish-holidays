import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { TwelfthNight } from '../src';
import { testLanguage } from './test-language';

const holiday = new TwelfthNight({ year: 2022, language: testLanguage });

test('Should be 5:th of January for any year', () => {
    assert.strictEqual(holiday.day, 5);
    assert.strictEqual(holiday.month, 1);
    const expectedDate = new Date('2022-01-05T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-01-05'));
    assert.strictEqual(TwelfthNight.mightBe(a), false);
    assert.strictEqual(TwelfthNight.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.twelfthNight);
});
