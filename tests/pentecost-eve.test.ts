import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { PentecostEve } from '../src';
import { testLanguage } from './test-language';

const holiday = new PentecostEve({ year: 2022, language: testLanguage });

test('Should be 4:th of June 2022', () => {
    assert.strictEqual(holiday.day, 4);
    assert.strictEqual(holiday.month, 6);
    const expectedDate = new Date('2022-06-04T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-05-08'));
    const b = fixedDate(new Date('2022-05-09'));
    const c = fixedDate(new Date('2022-06-12'));
    const d = fixedDate(new Date('2022-06-13'));
    assert.strictEqual(PentecostEve.mightBe(a), false);
    assert.strictEqual(PentecostEve.mightBe(b), true);
    assert.strictEqual(PentecostEve.mightBe(c), true);
    assert.strictEqual(PentecostEve.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.pentecostEve);
});
