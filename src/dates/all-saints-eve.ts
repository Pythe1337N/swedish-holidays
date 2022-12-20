import { Holiday, IHolidayOptions } from '../holidays.interface';
import svSE from '../holiday-names.sv-se';
import { firstOfWeekdayAfterDate, fixedDate, Weekday } from '../date-utils';

export default class AllSaintsEve implements Holiday {
    public name: string;
    public year: number;
    public month: number;
    public day: number;
    public date: Date;
    public isPublicHoliday = false;

    constructor({ year, language = svSE }: IHolidayOptions = { language: svSE }) {
        const y = year || new Date().getFullYear();
        this.year = y;
        this.date = fixedDate(firstOfWeekdayAfterDate(Weekday.Friday, new Date(y, 9, 30)));
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.name = language.allSaintsEve;
    }

    static mightBe(date: Date): boolean {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        // Earliest 30:th October
        if (month === 10) {
            return day >= 30;
        }
        // Latest 5:th November
        if (month === 11) {
            return day <= 5;
        }
        return false;
    }
}
