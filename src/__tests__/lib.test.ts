import { test, expect } from "vitest";

import {
  addDays,
  addWeeks,
  addYears,
  getHolidayJSON,
  fixedDate,
  firstOfWeekdayAfterDate,
} from "../lib";

test(`Test addDays`, () => {
  const date = new Date("2022-06-15T12:00:00.000Z");
  expect(addDays(date, 0)).toMatchInlineSnapshot("2022-06-15T12:00:00.000Z");
  expect(addDays(date, 1)).toMatchInlineSnapshot("2022-06-16T12:00:00.000Z");
});

test(`Test addWeeks`, () => {
  const date = new Date("2022-06-15T12:00:00.000Z");
  expect(addWeeks(date, 0)).toMatchInlineSnapshot("2022-06-15T12:00:00.000Z");
  expect(addWeeks(date, 1)).toMatchInlineSnapshot('2022-06-22T12:00:00.000Z');
});

test(`Test addYears`, () => {
  const date = new Date("2022-06-15T12:00:00.000Z");
  expect(addYears(date, 0)).toMatchInlineSnapshot("2022-06-15T12:00:00.000Z");
  expect(addYears(date, 1)).toMatchInlineSnapshot('2023-06-15T12:00:00.000Z');
});

test(`Test getHolidayJSON`, () => {
  const date = new Date("2022-06-15T12:00:00.000Z");
  expect(getHolidayJSON("NAME ", date, false)).toMatchInlineSnapshot(`
    {
      "date": 2022-06-15T12:00:00.000Z,
      "day": 15,
      "isPublicHoliday": false,
      "month": 6,
      "name": "NAME ",
      "year": 2022,
    }
  `);
});

test(`Test fixedDate`, () => {
  expect(fixedDate(2022, 6, 15)).toMatchInlineSnapshot(
    "2022-06-15T00:00:00.000Z"
  );
});

test(`Test firstOfWeekdayAfterDate`, () => {
  const date = new Date("2022-06-15T12:00:00.000Z");
  expect(firstOfWeekdayAfterDate(1, date)).toMatchInlineSnapshot(
    "2022-06-20T12:00:00.000Z"
  );
});
