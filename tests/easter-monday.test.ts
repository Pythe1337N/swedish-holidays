import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { testLanguage } from './test-language';
import { EasterMonday } from '../src';

const holiday = new EasterMonday({ year: 2022, language: testLanguage });

test('Should be 18:th of April 2022', () => {
    assert.strictEqual(holiday.day, 18);
    assert.strictEqual(holiday.month, 4);
    const expectedDate = new Date('2022-04-18T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-03-22'));
    const b = fixedDate(new Date('2022-03-23'));
    const c = fixedDate(new Date('2022-04-26'));
    const d = fixedDate(new Date('2022-04-27'));
    assert.strictEqual(EasterMonday.mightBe(a), false);
    assert.strictEqual(EasterMonday.mightBe(b), true);
    assert.strictEqual(EasterMonday.mightBe(c), true);
    assert.strictEqual(EasterMonday.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.easterMonday);
});
