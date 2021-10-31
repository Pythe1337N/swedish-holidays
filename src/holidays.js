Date.prototype.plusDays = function (d) {
  const date = new Date(this);
  date.setDate(this.getDate() + (d || 0));
  return date;
};

Date.prototype.plusWeeks = function (d) {
  const date = new Date(this);
  date.setDate(this.getDate() + (d || 0) * 7);
  return date;
};

Date.prototype.plusYears = function (d) {
  const date = new Date(this);
  date.setFullYear(this.getFullYear() + (d || 0));
  return date;
};

const swedishHolidayNames = {
  newYearsDay: "Nyårsdagen",
  twelfthNight: "Trettondagsafton",
  epiphany: "Trettondedag jul",
  maundyThursday: "Skärtorsdagen",
  goodFriday: "Långfredagen",
  holySaturday: "Påskafton",
  easterSunday: "Påskdagen",
  easterMonday: "Annandag påsk",
  walpurgisNight: "Valborgsmässoafton",
  mayFirst: "Första maj",
  ascensionDay: "Kristi himmelsfärdsdag",
  swedishNationalDay: "Sveriges nationaldag",
  pentecostEve: "Pingstafton",
  whitSunday: "Pingstdagen",
  midsummerEve: "Midsommarafton",
  midsummerDay: "Midsommardagen",
  allSaintsEve: "Allhelgonaafton",
  allSaintsDay: "Alla helgons dag",
  christmasEve: "Julafton",
  christmasDay: "Juldagen",
  boxingDay: "Annandag jul",
  newYearsEve: "Nyårsafton",
};

const FRIDAY = 5;

const isHoliday = (date, language) => {
  if (!date) {
    return isHoliday(new Date());
  }
  const holidays = getHolidaysForYear(date.getFullYear(), language);
  const [holiday] = holidays.filter(
    (holiday) =>
      holiday.day === date.getDate() &&
      holiday.month === date.getMonth() + 1 &&
      holiday.year === date.getFullYear()
  );
  return holiday || false;
};

const getHolidayJSON = (name, date, isPublicHoliday = false) => ({
  name,
  date,
  day: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getFullYear(),
  isPublicHoliday,
});

const fixedDate = (year, month, day) => {
  const m =
    month.toString().length > 1 ? month.toString() : "0" + month.toString();
  const d = day.toString().length > 1 ? day.toString() : "0" + day.toString();
  return new Date(year + "-" + m + "-" + d + "T00:00:00Z");
};

const firstOfWeekdayAfterDate = (weekday, refDate) => {
  return refDate.plusDays(
    (refDate.getDay() > weekday ? 7 : 0) - refDate.getDay() + weekday
  );
};

const getUpcomingHolidays = (language) => {
  const now = new Date();
  const nextYear = new Date().plusYears(1);
  return getHolidaysForYear(now.getFullYear(), language)
    .concat(getHolidaysForYear(nextYear.getFullYear(), language))
    .filter(
      (holiday) =>
        holiday.date.getTime() >= now.getTime() &&
        holiday.date.getTime() < nextYear.getTime()
    );
};

const getHolidaysForYear = (year, language) => {
  if (!year) {
    return getHolidaysForYear(new Date().getFullYear(), language);
  }
  if (!language) {
    return getHolidaysForYear(year, swedishHolidayNames);
  }
  const holidays = [];
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
    const christSkyFly = easterSunday.plusWeeks(6).plusDays(-3);
    const pingst = easterSunday.plusWeeks(7);

    holidays.push(
      getHolidayJSON(language.maundyThursday, easterSunday.plusDays(-3))
    );
    holidays.push(
      getHolidayJSON(language.goodFriday, easterSunday.plusDays(-2), true)
    );
    holidays.push(
      getHolidayJSON(language.holySaturday, easterSunday.plusDays(-1))
    );
    holidays.push(getHolidayJSON(language.easterSunday, easterSunday, true));
    holidays.push(
      getHolidayJSON(language.easterMonday, easterSunday.plusDays(1), true)
    );

    holidays.push(getHolidayJSON(language.ascensionDay, christSkyFly, true));

    holidays.push(getHolidayJSON(language.pentecostEve, pingst.plusDays(-1)));
    holidays.push(getHolidayJSON(language.whitSunday, pingst, true));
  }

  const fylla = firstOfWeekdayAfterDate(FRIDAY, fixedDate(year, 6, 19));
  const bakis = fylla.plusDays(1);

  holidays.push(getHolidayJSON(language.midsummerEve, fylla));
  holidays.push(getHolidayJSON(language.midsummerDay, bakis, true));

  const spooky = firstOfWeekdayAfterDate(FRIDAY, fixedDate(year, 10, 30));
  holidays.push(getHolidayJSON(language.allSaintsEve, spooky));
  holidays.push(
    getHolidayJSON(language.allSaintsDay, spooky.plusDays(1), true)
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
  return holidays.sort((a, b) => a.date.getTime() - b.date.getTime());
};

module.exports = {
  getHolidays: getHolidaysForYear,
  getUpcomingHolidays,
  isHoliday,
  language: { ...swedishHolidayNames },
};
