import { AllSaintsDay } from '../src';
import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { testLanguage } from './test-language';

const holiday = new AllSaintsDay({ year: 2022, language: testLanguage });

test('Should be 5:th of November 2022', () => {
    assert.strictEqual(holiday.day, 5);
    assert.strictEqual(holiday.month, 11);
    const expectedDate = new Date('2022-11-05T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-30'));
    const b = fixedDate(new Date('2022-11-01'));
    const c = fixedDate(new Date('2022-11-06'));
    const d = fixedDate(new Date('2022-11-07'));
    assert.strictEqual(AllSaintsDay.mightBe(a), false);
    assert.strictEqual(AllSaintsDay.mightBe(b), true);
    assert.strictEqual(AllSaintsDay.mightBe(c), true);
    assert.strictEqual(AllSaintsDay.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.allSaintsDay);
});
