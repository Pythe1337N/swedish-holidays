import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { Epiphany } from '../src';
import { testLanguage } from './test-language';

const holiday = new Epiphany({ year: 2022, language: testLanguage });

test('Should be 6:th of January for any year', () => {
    assert.strictEqual(holiday.day, 6);
    assert.strictEqual(holiday.month, 1);
    const expectedDate = new Date('2022-01-06T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, true);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-10-29'));
    const b = fixedDate(new Date('2022-01-06'));
    assert.strictEqual(Epiphany.mightBe(a), false);
    assert.strictEqual(Epiphany.mightBe(b), true);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.epiphany);
});
