export type HolidayType = {
  name: string;
  date: Date;
  day: number;
  month: number;
  year: number;
  isPublicHoliday: boolean;
};

export function addDays(dirtyDate: Date, amount: number): Date {
  const date = new Date(dirtyDate);
  if (!amount) {
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

export function addWeeks(date: Date, amount: number): Date {
  const days = amount * 7;
  return addDays(date, days);
}

export function addYears(dirtyDate: Date, amount: number): Date {
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  const date = new Date(dirtyDate);
  if (!amount) {
    return date;
  }
  date.setFullYear(date.getFullYear() + amount);
  return date;
}

export const getHolidayJSON = (
  name: string,
  date: Date,
  isPublicHoliday = false
): HolidayType => ({
  name,
  date,
  day: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getFullYear(),
  isPublicHoliday,
});

export const fixedDate = (year: number, month: number, day: number) => {
  const m =
    month.toString().length > 1 ? month.toString() : "0" + month.toString();
  const d = day.toString().length > 1 ? day.toString() : "0" + day.toString();
  return new Date(year + "-" + m + "-" + d + "T00:00:00Z");
};

export const firstOfWeekdayAfterDate = (weekday: number, date: Date) =>
  addDays(date, (date.getDay() > weekday ? 7 : 0) - date.getDay() + weekday);
