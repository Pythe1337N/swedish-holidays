import test from 'node:test';
import assert from 'node:assert';
import { fixedDate } from '../src/date-utils';
import { MaundyThursday } from '../src';
import { testLanguage } from './test-language';

const holiday = new MaundyThursday({ year: 2022, language: testLanguage });

test('Should be 14:th of April 2022', () => {
    assert.strictEqual(holiday.day, 14);
    assert.strictEqual(holiday.month, 4);
    const expectedDate = new Date('2022-04-14T00:00:00.000Z');
    assert.strictEqual(holiday.date.getTime(), expectedDate.getTime());
    assert.strictEqual(holiday.isPublicHoliday, false);
});

test('Might be check', () => {
    const a = fixedDate(new Date('2022-03-18'));
    const b = fixedDate(new Date('2022-03-19'));
    const c = fixedDate(new Date('2022-04-22'));
    const d = fixedDate(new Date('2022-04-23'));
    assert.strictEqual(MaundyThursday.mightBe(a), false);
    assert.strictEqual(MaundyThursday.mightBe(b), true);
    assert.strictEqual(MaundyThursday.mightBe(c), true);
    assert.strictEqual(MaundyThursday.mightBe(d), false);
});

test('Should be translated', () => {
    assert.strictEqual(holiday.name, testLanguage.maundyThursday);
});
