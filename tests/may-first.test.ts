import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { MayFirst } from '../src';
import { testLanguage } from './test-language';

const holiday = new MayFirst({ year: 2022, language: testLanguage });

test('Should be 1:th of May for any year', () => {
    assert.strictEqual(holiday.day, 1);
    assert.strictEqual(holiday.month, 5);
    const expectedDate = new Date('2022-05-01T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-05-01'));
    assert.strictEqual(MayFirst.mightBe(a), false);
    assert.strictEqual(MayFirst.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.mayFirst);
});
