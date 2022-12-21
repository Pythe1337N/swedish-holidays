export interface IHolidayNames {
    newYearsDay: string;
    twelfthNight: string;
    epiphany: string;
    maundyThursday: string;
    goodFriday: string;
    holySaturday: string;
    easterSunday: string;
    easterMonday: string;
    walpurgisNight: string;
    mayFirst: string;
    ascensionDay: string;
    swedishNationalDay: string;
    pentecostEve: string;
    whitSunday: string;
    midsummerEve: string;
    midsummerDay: string;
    allSaintsEve: string;
    allSaintsDay: string;
    christmasEve: string;
    christmasDay: string;
    boxingDay: string;
    newYearsEve: string;
}

export interface IHolidayOptions {
    year?: number;
    language?: IHolidayNames;
}

export interface Holiday {
    name: string;
    date: Date;
    year: number;
    month: number;
    day: number;
    isPublicHoliday: boolean;
}
