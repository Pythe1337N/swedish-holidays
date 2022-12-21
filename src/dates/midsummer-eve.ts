import { Holiday, IHolidayOptions } from '../holidays.interface';
import svSE from '../holiday-names.sv-se';
import { firstOfWeekdayAfterDate, fixedDate, Weekday } from '../date-utils';

export default class MidsummerEve implements Holiday {
    public name: string;
    public year: number;
    public month: number;
    public day: number;
    public date: Date;
    public isPublicHoliday = false;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        const y = year || new Date().getFullYear();
        this.year = y;
        this.date = fixedDate(firstOfWeekdayAfterDate(Weekday.Friday, new Date(y, 5, 19)));
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.name = language.midsummerEve;
    }

    static mightBe(date: Date): boolean {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        // Earliest 19:th June
        // Latest 25:th June
        if (month === 6) {
            return day >= 19 && day <= 25;
        }
        return false;
    }
}
