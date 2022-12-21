export function plusDays(d: Date, days: number): Date {
    const date = new Date(d);
    date.setDate(date.getDate() + (days || 0));
    return date;
}

export function plusYears(d: Date, years: number = 0) {
    const date = new Date(d);
    date.setFullYear(date.getFullYear() + years);
    return date;
}

export enum Weekday {
    Friday = 5,
    Sunday = 0
}

export function firstOfWeekdayAfterDate(weekday: Weekday, refDate: Date) {
    return plusDays(refDate, (refDate.getDay() > weekday ? 7 : 0) - refDate.getDay() + weekday);
}

export function fixedDate(date: Date) {
    const d = new Date(date);
    d.setMinutes(-d.getTimezoneOffset());
    return d;
}

export function isSameDate(dateA: Date, dateB: Date) {
    return fixedDate(dateA).getTime() === fixedDate(dateB).getTime();
}
