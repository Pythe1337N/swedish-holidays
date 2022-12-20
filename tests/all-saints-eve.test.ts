import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { AllSaintsEve } from '../src';
import { testLanguage } from './test-language';

const holiday = new AllSaintsEve({ year: 2022, language: testLanguage });

test('Should be 4:th of November 2022', () => {
    assert.strictEqual(holiday.day, 4);
    assert.strictEqual(holiday.month, 11);
    const expectedDate = new Date('2022-11-04T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, false);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-10-30'));
    const c = fixedDate(new Date('2022-11-05'));
    const d = fixedDate(new Date('2022-11-06'));
    assert.strictEqual(AllSaintsEve.mightBe(a), false);
    assert.strictEqual(AllSaintsEve.mightBe(b), true);
    assert.strictEqual(AllSaintsEve.mightBe(c), true);
    assert.strictEqual(AllSaintsEve.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.allSaintsEve);
});
