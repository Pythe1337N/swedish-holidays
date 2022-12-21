import {
    AllSaintsDay,
    AllSaintsEve,
    AscensionDay,
    BoxingDay,
    ChristmasDay,
    ChristmasEve,
    EasterMonday,
    EasterSunday,
    Epiphany,
    GoodFriday,
    HolySaturday,
    MaundyThursday,
    MayFirst,
    MidsummerDay,
    MidsummerEve,
    NationalDay,
    NewYearsDay,
    NewYearsEve,
    PentecostEve,
    TwelfthNight,
    WalpurgisNight,
    WhitSunday
} from './dates';
import { Holiday, IHolidayOptions, IHolidayNames } from './holidays.interface';
import { isSameDate, plusYears, Weekday } from './date-utils';
import svSe from './holiday-names.sv-se';

const Holidays = [
    AllSaintsDay,
    AllSaintsEve,
    AscensionDay,
    BoxingDay,
    ChristmasDay,
    ChristmasEve,
    EasterMonday,
    EasterSunday,
    Epiphany,
    GoodFriday,
    HolySaturday,
    MaundyThursday,
    MayFirst,
    MidsummerDay,
    MidsummerEve,
    NationalDay,
    NewYearsDay,
    NewYearsEve,
    PentecostEve,
    TwelfthNight,
    WalpurgisNight,
    WhitSunday
];

export const getHolidays = (year?: number, language?: IHolidayNames): Holiday[] => {
    return Holidays.map((Holiday) => new Holiday({ year, language })).sort((d1, d2) => d1.date.getTime() - d2.date.getTime());
};

export const getUpcomingHolidays = (language: IHolidayNames = svSe): Holiday[] => {
    const now = new Date();
    const nextYear = plusYears(now, 1);
    return [...getHolidays(now.getFullYear(), language), ...getHolidays(nextYear.getFullYear(), language)].filter(
        (holiday) => holiday.date.getTime() >= now.getTime() && holiday.date.getTime() < nextYear.getTime()
    );
};

export const isHoliday = (date: Date = new Date(), options: IHolidayOptions = { language: svSe }): Holiday | undefined => {
    const possible = Holidays.filter((Holiday) => Holiday.mightBe(date));
    options.year = date.getFullYear();
    return possible.map((p) => new p(options)).find((holiday) => isSameDate(date, holiday.date));
};

export const isPublicHoliday = (date: Date = new Date(), options?: IHolidayOptions): boolean => {
    if (date.getDay() === Weekday.Sunday) {
        return true;
    }
    return isHoliday(date, options)?.isPublicHoliday || false;
};

export const language = svSe;
export * from './dates';
export { IHolidayOptions, IHolidayNames } from './holidays.interface';
