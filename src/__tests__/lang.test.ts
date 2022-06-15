import { test, expect } from "vitest";
import { swedishHolidayNames } from "../lang";

test(`Test swedishHolidayNames`, () => {
  expect(swedishHolidayNames).toMatchSnapshot();
});
