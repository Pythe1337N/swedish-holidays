import { swedishHolidayNames, sunday, LanguageType } from "./lang";
import {
  addDays,
  addWeeks,
  addYears,
  firstOfWeekdayAfterDate,
  fixedDate,
  getHolidayJSON,
  HolidayType,
} from "./lib";

const FRIDAY = 5;
const SUNDAY = 0;

export const language = swedishHolidayNames;

export const getHoliday = (
  date: Date,
  language?: LanguageType
): HolidayType | undefined => {
  if (!date) {
    return getHoliday(new Date());
  }
  const holidays = getHolidays(date.getFullYear(), language);
  return holidays.find(
    (holiday) =>
      holiday.day === date.getDate() &&
      holiday.month === date.getMonth() + 1 &&
      holiday.year === date.getFullYear()
  );
};

export const getPublicHoliday = (
  date: Date,
  language?: LanguageType
): HolidayType | undefined => {
  if (!date) {
    return getPublicHoliday(new Date());
  }

  if (date.getDay() === SUNDAY) {
    return getHolidayJSON(sunday, date, true);
  }

  const holidays = getHolidays(date.getFullYear(), language);
  return holidays.find(
    (holiday) =>
      holiday.day === date.getDate() &&
      holiday.month === date.getMonth() + 1 &&
      holiday.year === date.getFullYear() &&
      holiday.isPublicHoliday
  );
};

export const isHoliday = (date: Date, language?: LanguageType): boolean =>
  Boolean(getHoliday(date, language));

export const isPublicHoliday = (date: Date, language?: LanguageType): boolean =>
  Boolean(getPublicHoliday(date, language));

export const getUpcomingHolidays = (language: LanguageType) => {
  const now = new Date();
  const nextYear = addYears(now, 1);
  return getHolidays(now.getFullYear(), language)
    .concat(getHolidays(nextYear.getFullYear(), language))
    .filter(
      (holiday) =>
        holiday.date.getTime() >= now.getTime() &&
        holiday.date.getTime() < nextYear.getTime()
    );
};

export const getHolidays = (
  year: number,
  language?: Record<string, string>
): HolidayType[] => {
  if (!year) {
    return getHolidays(new Date().getFullYear(), language);
  }
  if (!language) {
    return getHolidays(year, swedishHolidayNames);
  }
  const holidays: HolidayType[] = [];
  if (year >= 1582 && year <= 8702) {
    const goldenNumber = Math.floor((year % 19) + 1);
    const century = Math.floor(year / 100 + 1);
    const corx = Math.floor((3 * century) / 4 - 12);
    const corz = Math.floor((8 * century + 5) / 25 - 5);
    const sunday = Math.floor((5 * year) / 4 - corx - 10);
    let epact = Math.floor((11 * goldenNumber + 20 + corz - corx + 30) % 30);

    if ((epact === 25 && goldenNumber > 11) || epact === 24) {
      epact += 1;
    }

    let moon = 44 - epact;

    if (moon < 21) {
      moon += 30;
    }

    moon = moon + 7 - ((sunday + moon) % 7);

    let month = 3;
    let day = moon;

    if (moon > 31) {
      month = 4;
      day = moon - 31;
    }

    const easterSunday = fixedDate(year, month, day);
    const christSkyFly = addDays(addWeeks(easterSunday, 6), -3);
    const pingst = addWeeks(easterSunday, 7);

    holidays.push(
      getHolidayJSON(language.maundyThursday, addDays(easterSunday, -3))
    );
    holidays.push(
      getHolidayJSON(language.goodFriday, addDays(easterSunday, -2), true)
    );
    holidays.push(
      getHolidayJSON(language.holySaturday, addDays(easterSunday, -1))
    );
    holidays.push(getHolidayJSON(language.easterSunday, easterSunday, true));
    holidays.push(
      getHolidayJSON(language.easterMonday, addDays(easterSunday, 1), true)
    );

    holidays.push(getHolidayJSON(language.ascensionDay, christSkyFly, true));

    holidays.push(getHolidayJSON(language.pentecostEve, addDays(pingst, -1)));
    holidays.push(getHolidayJSON(language.whitSunday, pingst, true));
  }

  const midsummerEve = firstOfWeekdayAfterDate(FRIDAY, fixedDate(year, 6, 19));
  const midsummerDay = addDays(midsummerEve, 1);

  holidays.push(getHolidayJSON(language.midsummerEve, midsummerEve));
  holidays.push(getHolidayJSON(language.midsummerDay, midsummerDay, true));

  const allSaintsEve = firstOfWeekdayAfterDate(FRIDAY, fixedDate(year, 10, 30));
  holidays.push(getHolidayJSON(language.allSaintsEve, allSaintsEve));
  holidays.push(
    getHolidayJSON(language.allSaintsDay, addDays(allSaintsEve, 1), true)
  );

  holidays.push(
    getHolidayJSON(language.newYearsDay, fixedDate(year, 1, 1), true)
  );
  holidays.push(getHolidayJSON(language.twelfthNight, fixedDate(year, 1, 5)));
  holidays.push(getHolidayJSON(language.epiphany, fixedDate(year, 1, 6), true));
  holidays.push(
    getHolidayJSON(language.walpurgisNight, fixedDate(year, 4, 30))
  );
  holidays.push(getHolidayJSON(language.mayFirst, fixedDate(year, 5, 1), true));
  holidays.push(
    getHolidayJSON(language.swedishNationalDay, fixedDate(year, 6, 6), true)
  );
  holidays.push(getHolidayJSON(language.christmasEve, fixedDate(year, 12, 24)));
  holidays.push(
    getHolidayJSON(language.christmasDay, fixedDate(year, 12, 25), true)
  );
  holidays.push(
    getHolidayJSON(language.boxingDay, fixedDate(year, 12, 26), true)
  );
  holidays.push(getHolidayJSON(language.newYearsEve, fixedDate(year, 12, 31)));
  return holidays.sort((a, b) => {
    return a.date.getTime() - b.date.getTime();
  });
};
