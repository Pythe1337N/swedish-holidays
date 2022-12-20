import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { NewYearsEve } from '../src';
import { testLanguage } from './test-language';

const holiday = new NewYearsEve({ year: 2022, language: testLanguage });

test('Should be 31:st of December for any year', () => {
    assert.strictEqual(holiday.day, 31);
    assert.strictEqual(holiday.month, 12);
    const expectedDate = new Date('2022-12-31T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-12-31'));
    assert.strictEqual(NewYearsEve.mightBe(a), false);
    assert.strictEqual(NewYearsEve.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.newYearsEve);
});
